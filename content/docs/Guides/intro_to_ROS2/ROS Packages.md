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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=a33ef137587305a96f4d16aee863f3bc08e916a835c54ef0b2d7929693f630f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=e8be8cdc2baf4d15f69bb545390c52f4576af8086c22f4f8989266131fed19b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=958d0e114b486b010e9936db55e5205e2aaf0e32769c73fe0e20888edcc26128&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=26b925b639b286c15876179810abb5705cfcf9d206c2abfdaecaaf4bb78d81fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=174c9ec77a2481f23669356058289bb574827ae852b64814d917de684081038a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=4305201ba74c6bbf6be75961413be667e383de338fae12bad4b14b9b4fe493ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=e14a5d65f9158032d06dd8d27a12799898d48ae3fe9ea7cc5b7cd8ce417d6217&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
