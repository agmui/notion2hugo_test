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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=563ab55b365232019b101ece812824af1ea5e82a4f33e5e0fc7be4b8fc5fbc18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=04278f8564ab70a37d6ac72c0e847cbf702b93bdd23c6fb6c0e2bcca681e5c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=644185ede94aecdabd7e8365c9766678660dc62193fe735305978d99f2c4e6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=194e89f891a885ef714b8807e398ab6b368e6a1cf9e5e25dd44360f9914c1436&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=449aaca90a6b75d0f5b270037d852597916e0888a4b19a825b8d99f531e5b792&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=e601d0f1328aebc4a599ac16ecc2146e07f35dc9111867539b0b5d2e09c02af2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HISDIRJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdrefVUWzrY%2FZg%2BpuoJjztJuRm1obUSXIJ6q8m16w7wAiEA%2BIwzU4QIz47FGrE6k8JibFCZKjN1VkoNfa5goHZMCzkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPzNy49BE%2FNDZU1ircA%2BS%2F%2FOavAI82QtB3Lu4OKZ9JARxs8A54hK2mxvZr2im8cMuWUpQvvuW0ArTC59ZWUoQqEVC6OOxTccstpCpzBLETPQ4zY3LWrLtm1Y7M6p9rEd4JNrcCOkCNAyzgpwNORGgXEQnmzFmZMvO7RVwXV68iuo7Zm7PEablV3qd%2FrYt%2B%2F1p05Z2liWHD1Fiz%2FDiJmSBlCOtv1jMrnggpbY05XumTPrY6J8OedkdAuxMIuNAj%2BoLrBylylsWyvmom%2FDUO9GFejnrvJ2suH2zBKk5xB8kuxVvvc8miwdzWtYeEYmzXOrPhRpJoIDz0DO90Q0NRUAdNS0h1jqGZ5JL9PyOEN8k2TPasZ0ouugii1w2RR4tqWQp352FGTLArN%2BHIQed%2BwAN3shKg4SPHwa9aqB%2BLy1hjIjKpLjx%2F6c6nvzxgyjDwmH7fg3TF87jotx%2Bp4l6yfDL8%2F89w5t03NSYqhjMsZzdDPGLe0DLP5GbAQDchRm8QZtnJx0opDlauR6293bBmwvJxRMmrQ6S3R1kN9aPjcAMK%2FB8yU8k0z9Wp5ef32MeokYQFYQmzYO1Jnzfo8OOQdMOxNivG5tUa9moCPXx6Bc9rFYSQT%2B1JgKlOz9szMXTJlgSnR9qwbMtTzhoWMOCcu78GOqUBN6JPvrrTSUfrHXjfss%2FfTMPb4cEMDNnaqeU1znq%2FFB9UnyrehjSMs05zUBg0XCVzav9WPN%2Be0VbM3oWYKNvyt%2BcdAgSPEjXVcADitkQrHK%2B77V3bnKmRCNUAp%2FDFQkB9qBd5TgcdWGjI%2BGPFPs6teRI1nLmu8%2FtGg4CYNqGWRgGcoNZJk2IGe6iLxRhEFD6vwJnevFlkyOhuECLqw%2FlU1bPEfJRV&X-Amz-Signature=ce5ffa7542ffb4fa483baa1caf9ed56d22d6bb05ed27a91900e31326f1341b66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
