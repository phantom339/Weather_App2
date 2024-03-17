pipeline {
    agent any
    tools {
        // Define the Maven tool
        maven 'MAVEN_HOME'
    }
    
    stages {
        stage('Package') {
            steps {
                // Use Maven to package the project
                script {
                    withMaven(maven: 'MAVEN_HOME', mavenSettingsConfig: 'my-maven-settings') {
                        bat 'mvn package'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                // Use Maven to install dependencies and build the project
                script {
                    withMaven(maven: 'MAVEN_HOME', mavenSettingsConfig: 'my-maven-settings') {
                        bat 'mvn install'
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                // Use Maven to run tests
                script {
                    withMaven(maven: 'MAVEN_HOME', mavenSettingsConfig: 'my-maven-settings') {
                        bat 'mvn test'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Use Maven to deploy the project
                script {
                    withMaven(maven: 'MAVEN_HOME', mavenSettingsConfig: 'my-maven-settings') {
                        bat 'mvn deploy'
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! Project built and deployed.'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}
