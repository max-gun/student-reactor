FROM maven:3.8.5-openjdk-17-slim as backend-builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Final stage: Combine frontend and backend
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend-builder /app/target/project-root-1.0-SNAPSHOT.jar app.jar

# Set environment variables (adjust as necessary)
ENV SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/studentdb
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=1234
ENV SPRING_JPA_HIBERNATE_DDL_AUTO=root

# Expose the port
EXPOSE 8080

# Command to run the app
CMD ["java", "-jar", "app.jar"]