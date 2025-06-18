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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=869b812f5dd66cda4b0c325c37cf07223e3ee50822898a0d4240581745742a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=35381324497b5a795a32339e1e59abb6160d72eb85e269f88f4b880122c8774f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=e404b0d8ee38b0abacb9d89dc720011773eb51a504324fc96f56f9937d8c353c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=2831e16b616fbe4673f8b6b7ef0b1b40bcb1be0c7a8bad93e38d6b1c48cf3a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=ca75209a44fe20ba87cd1a7241a994241e4a4ad3bd31f4d4a20b68b4bdc3280b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=75f71b9629985174dc13ff2072a5e30cd32d75b21a9b0857d547c452c1b45a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOG2O2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6TrE2%2BuB1XoWTwDYwpcqnlJLwY%2FKeI0JF%2FRgjbvMOAiAA4O6nUNe30bzbRIPLNz0j5OFuZYB99ElJ1U8vWAEwoCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzlSbO48pG3816dCKtwDcOnJQBogFW8yKt%2FsGhC%2BjSqriuf7jgeQpRR706a9sbhql2ifjo%2BnrGEiAvT1iKnsAoUYnJHqzVncQbjhGvpcncudYC3vYJwq70PZowB3X9SXqIBlE9kE9fyPj9MZvuHp8r1%2Fa71Y3HFxWdWES14YFpiGxtghUOSiQLcPsqq0iWiUOZAgBRauvqW1dFMEZzGo9%2FW9BEG6zRT3n4YcNE9mVM4iHhxIczZz%2BKFVYncjXqd4eBcyUT3%2BWfpQvOmHmGE4qx7JZfmDv9my%2FGOMMxtjy6TceRVr%2BHb%2Bn90Pqr7M9b2a0zWG5UloisfKELZbt%2Fn6sXCXAOg42NKJg6iM2yeqJHAkFKgohTAdF3ZQ%2FEPJyYz8SxaUJaXt0%2BV8ZoIcJYwmq%2BSomqM6%2FgOPQiC8g5ULi7DV7a0rqQRBp46pTjt9AKdNAeS%2Fr9QKhgBAFhSedhTKwYtcExJuGjilTEVRMMAlfMKj3IOBDr67IydJ1uVPZoDLRox3zlr%2FDJtVY%2F9HzK6yAJIqsEsT3ogu5P1M7SGhgOqqd9enJwHG5zkpSogDPtlUD7XGtgeNM8fB%2Bksry6hruirRre7g5W4ywAdbOYRrohk97svMgyYSOF64e3onGukOCX97zK4MuPo%2FSqIwqaHIwgY6pgHZ2WWe%2BCUzSOoTxUjCfvP%2BlFQXY9R2ve1Jr2iiLnxdMVJdlxn0JhzVrosBhGXieEnSD4IMAUrlKdntcXatYsOP0yr4uE772hyHO7AlEO%2BE%2BSLQsdKjehubP672Rrg%2FGptmi6aGV8wFwaUmRLbImfdnIoG%2FGqnq1U5ZxJLQy1EUsnrOC1WIvGtA7IyuvXnDZxpa95Wu9QSfsSQbSNtUHaTOKpy662nJ&X-Amz-Signature=df82f2c764b4d35ad4f4559661e66a5719c48d3c04e74f36c7f49550832019cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
