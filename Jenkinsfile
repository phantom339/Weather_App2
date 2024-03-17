pipeline {
	agent any
	tools {
	maven 'MAVEN_HOME'
	}
	stages {
	
		stage ('Stage 1: My Package'){
			steps {
				bat 'mvn package'
				}
			}			
		stage ('Stage 2: My Build'){
			steps {
				bat 'mvn install'
				}
			}
		stage ('Stage 3: My Test'){
			steps {
				bat 'mvn test'
				}
			}
		stage ('Stage 4: My deploy'){
			steps {
				sh 'mvn deploy:deploy'
				}
			}	
		stage ('Stage Final: Build Success'){
			steps {
				echo  'Build Success!'
				}
			}
		}
	}
