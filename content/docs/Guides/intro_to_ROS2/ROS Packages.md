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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=b12ef7d75becb20faf28c8a8d5de2d8499af333ee19a74843eb36a6ef86618b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=affcee5bfb7a9cdd770ad3df83bb9b03d823a6dcafff4961696b6a13f92df7af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=c7b941f43fbb345c4d5a9ecb66ab0cc606f4b3759f54ce9e58d8771ea3d65428&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=4c8dcf5f9e2605a56382636e01ca067bb032e265eef5920360e85dc32fecda8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=82a3bfdaec55071aeccac772f03b83e520582c9f0f0c07c583723c3a95539ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=448b7d445b3a00e4781077cb6e4c8ee315f263699c01f69c870fd6d1dbf8abdf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPVX6NL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEZ9B%2FTk4b7R%2FvqyjsCQqUZZFrT9J3toLzJ%2FJbWu4AFnAiBl0DVnWvarwV7JWc1JTn6atkJAze78iXOTM9axHb0LsiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt90RodYkPJqhwYc9KtwD0iurAjeo7VIpzHjV0pWfuf01vSc6vcMIxzxzMN1kJ6MIIPnCjdGUGnMc6au1B3%2BzhP1%2FOsYAvP%2Bu6U3W5AvALJXk1HfCQDcP0pVM8jiitT8sF22ngSZX2C%2FbyNuRLmrC2iRuyMiwfzjktDggamn5wD9eoaalbKRZAKTpIth8fU%2BrZexOn6fJyu3Yv4dgpsqu%2FPa5LDTK4N6qFR7yOzrnVmeg4%2Bj3Ix%2FBTvax2fd8%2B%2FV7ukfKnsaSnsFm%2B1TrRjjSnBjCXXFeENe5EsqUBGvZQfXVds89AnZg%2Fo4AIh2keQiz7MJ1fIgUrWzsWkCIsEg2KjTKAg8Pp3f2Fg%2FbmAXcnAoZKS8bl%2Bhxw0LAHEceh358wbS1UzNtqNDECPhfYmlSVwOsu1ZwEAl0Z2keT9Xn6XC%2FjG9mVpYHld6fxYGfl2E%2BPva4s0iYc9Uf1PZsuyFd%2FqgkCt7zm3S%2B%2B3umZm9WWyYmQa8YXvsCUoE06mz0SVzDTXp%2FMAAHzAMGrdNsmGygce%2FO1kGXtm98sJoUGEX5ftIMWpL7kiQU6FXz1OeRTjxuitP%2BzjGAl3tpu7XA47qgAiUE2p0S8v1Lw7duDHdVZdGbyujucDDN657hBFjy4ZnOJfDF94fBKaqYO1ww9NePvgY6pgGI5pUhghYF7dFm3ilcSXpIRys3QAyFaQA%2F4bjUcZ7TsnHTEzAm97uqN2wYLJUsmDsvYDT1M69YRBdH6Au6LXYQmNpyLAsgIpiifsnBCR8q9yx6E50pi%2FyeOGrZcrWKmHS2a6iwUFNOKISWEgEi2ouCL1WLrNyXFPdVyLh9j8ducx%2BT9HMoXn%2F08QFLSi2hjnhw13w1zZytUjvfa9wKFpemYeD2jQja&X-Amz-Signature=ae71b45e4d37dff0446053f6bdbd49af64e5fae15524203dbc38c557da9eaac2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
