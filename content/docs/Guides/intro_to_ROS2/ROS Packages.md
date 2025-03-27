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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=24baba38588e1bb1f4efce266ae5b59cb008779ed32383a4aca0c88d740e5fea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=9e703826ccac9a9a3d5aaab29c4f4a2a810138d31289ee3808c64f049e5fef3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=ed3a4b4a447c60acf83ff5906bbd34c7af1df6107b828a4267f405f0253cf878&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=7dc4ceaade8860870505ee61b9b3d68707ba2bedf29b01e8fbfcd55ae5070d07&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=1ed5ebc32b92b257606c141b77370992a75657705bf47eff0fdbda1fc67bd0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=0efa273809d6e0f33e92e8a4d32d730ab045d34386f247cfbbfe5d82e48e0a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TR7ZFM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErEsSGjppzn6di3tPCwy8%2FoZC0BKVDNkZegSfwK70lPAiAnLH1rBQqU44gOGpeh2em3ospthtA%2FF6mv9exdfCpV3ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMol0qbKZAh3Kj507zKtwDPWxUocl4aPCHl642fhpAywPQ9zYI5XB9HSo3MEN6oR8TAFAsEI2E%2FsVVXYmomlO4LABe0eVI8tEa7%2BVfPXGFxw03FQuOWQNudrPRThKbW7yy1kBCJiD2ReenS1uPwQzaS7BBSU3D6XqfnjHNNtuSVuXCyOvYEn9f8lWgmJYPWM5ROxOEpDNbqgY6VA1oEhzsxzo1UJOLxZ7LHcG1OGzoXP5pAT2LJt0uyr4bGYujdPMF%2F7k54kr84VjGxHQZh1h7R3hcvuGNyzN55KLFeIm9AS2NxdzuEO%2FVZcUsDF6yefgPl8uruqtKq7SYr28x%2Bqa3EVI68DMTq5mGiYOHmAKzs4b0KfMYKkgkfaWDmECBzcs4ygpxuafLcFvml6E9MeyrKkDOFEYnRGqBJyVsIPgXSvnOlFN54sVO05a5W56qaWJ1jo4HMIRkxErKOdGU6HwyWNrdsF8E0iYtS1LYSnMDAGi5%2BRoXugIXMJnNDmsw3XsM741d%2FnQYJ1r77yJBO2zYMxzEFclxTE5lfXn9GX57Hs47IEkQzNZKdct0PhX01QnuToO%2B5F%2FR4dItg%2FC9gugU1etDMdOwa%2BCfqmXzCaZvw6q7BV6LwMm8oI8J2fKep2N3XfxkwkeLU5NayeAw65SVvwY6pgF4JLbFH4vRK3VBU8zhUaJ8brPYz3HMn0yTsgRVukxOHJBfyQ5ha%2Fz2BjG5JU15hy0CVWzmfJLF4u%2BoJORxES0LsFwxHhasElwqgxl7PAgCiNx5pYezKMfvH9KFLeWZwHzgDpwZ77f5PsGEcPDFV0O9IBaWkMpZ3O3ZkhNNLQFbapCPGH2Nu%2B3koG0hOjGkoeJwJLrvvo3xtrJVmkq7XUp2XnHgNOZS&X-Amz-Signature=e867d8a1e48bcbea81f1e2d578f1180cb45984a811e55b6eb3870087b805c32a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
