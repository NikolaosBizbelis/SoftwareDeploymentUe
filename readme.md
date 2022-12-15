# Software Deployment Lab5

A containerized DevOps pipeline that deploys a [Node.js application](http://20.31.196.204:3000/) to AKS.

* [Project source files](https://github.com/NikolaosBizbelis/SoftwareDeploymentUe)

* [Web-App](http://20.31.196.204:3000/)

* [Docker image in the registry](https://softwaredeploymentueregistry.azurecr.io/softwaredeploymentimage)

## Setup
1. Create Cubernetes Service (in [Azure Portal](https://portal.azure.com/#home))
2. Create Container Registry (in [Azure Portal](https://portal.azure.com/#home))
3. Create the pipeline (in [Azure DevOps](https://dev.azure.com/)) as follows:
	1. Go to your Azure DevOps Project
	2. Select Pipeline - Pipelines - Create New
		1. Connect: "GitHub (Yaml)"
		2. Select: Select your repository
		3. Configure: "Deploy to Azure Kubernetes Service - Build and push image to Azure Container Registry; Deploy to Azure Kubernetes Service"

## Architectural decisions
* [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/) was chosen as the registry to store the image in because it easily integrates with the existing deployment structure.
* A simple Node.js express app was created to demonstrate, because of its simplicity.

## Helpful links:
* [How-To deploy Docker images to Azure Kubernetes Services (AKS)](https://purple.telstra.com.au/blog/how-to-deploy-docker-images-to-azure-kubernetes-services-aks)
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Build and push Docker images to Azure Container Registry](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/containers/acr-template?view=azure-devops)
* [Build and deploy to Azure Kubernetes Service with Azure Pipelines](https://learn.microsoft.com/en-us/azure/aks/devops-pipeline?pivots=pipelines-yaml)





