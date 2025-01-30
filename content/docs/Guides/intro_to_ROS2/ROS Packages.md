---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=0aea90a38a812ed52a94191c07b00d629d53966b15b3ae58745be57e6a3fa099&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=71720b2a4b333e145bd2cd92b1c170ab312a987647e7fd8f9b06f3e15eb774b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=89ceeb420bbaa1eff8cd1a59d30122edb94a88cda8ae8edcc8d8ee189024e163&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=6937b69df557a6800b7125296d7d88883ec925d892da9ffd4aa577be63196c75&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=7c6c8aee494c6f254779d79dacb310597add67f3b9f3c281805ecd6952048e89&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=f4802a185d6970a0a8768bb74ca7d5fc5f19241c1d575b1c48eeb8aa6e3b854d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJA5LV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIujsLhas%2FvM%2Fahvbfo8G5d4OWsGqSaj9oK5hzkixvwIhAJPPqY%2Fm2oWApjnyJZoLb2uUqXoDpg7r6eJYeo%2BHV2tOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23yiFrcPyRDCudMcq3ANgEEH3jOuOuL%2ByaKloW1GEd8qByXDE9aYFnX%2BtEpFwVR%2BJxqkkT9Yt7P3eA%2BudVX9BX7C%2B2TZxZb4Vujm1dEFxjhSYSEKsDTZoXmxDliFIRMYoSWt6l7hr3rcTC7AjlNd9ngqF4O6HmaKfetWHybubefivcsVhqpSO28f%2BhevwKjz0KxGaHEe0Sz%2BbCkECPjQyAcdfZ8IpOEvp7jMoaVei0f8kOfi7%2B60otCk%2Bf14WFfAvY91ceVdegH2T5jl0xktleUX0m0QtTy82uPriEuG0vIoh%2B8EFjky4O25ZI5YIU97ODIHO7nN3uy2HvQFHLCNfJk7%2FphzhKW%2FS2R5fcUdRJa4%2FszvkAIegWshb584dpLhPvXNC6x1Ufl96pShpx8iDyEKzxHN52YtcyPditTp0I4CT1QWYauAhxG6%2FUDBToq41nRpzxpvAZtAgzyLc1p5T99AD%2F9A1JxknWILKyZRIKP1ca5pFqlAmbfCKo0xf211eU2iWJZxcrustpDDlcg%2FhH7nc9FH45CT%2FOGVi7SjvGsfnOd4BGvHB25HBpUag0crEwkM95fL9O88axiuMk9SRIcUi1y3OS2unNqydvjcMJvgUZqv7d6su%2F8DFJJDkAkP5lPUZxjygSJT0vzDQxeq8BjqkARDVsYAfq%2BhpiEyQbz4yr13WBxv7FEgKEw2ox8d1OhzxqwbnHPl1jCsGYm2qv4ILiGNhcfQa0C1da3g5EayH0RW%2FDAAPftsVYImvfDPv6g1Jv7%2FCyhVGAeykFXwFizSDTiOZNEjY16KKrCoA705BYxtzkbGmfjhJu8VzOVXg6bRkcmdQtc3woj98PNmWNhdI3MSBjVYaIpqTCw88JHo%2B4W2ywjwU&X-Amz-Signature=5dd0dd55f2ef308134b8436997ec8751b50a057f54980a65a90e96741ac0d812&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
