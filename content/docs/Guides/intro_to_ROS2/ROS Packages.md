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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=2e8ecbfd2d8823725b5b85114f17fa85a216903452cd9f53eb8eff2451156d86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=02dbee8d6a1a834ea3cc6ab3768dafd1fa0159902221b0dbcecfc7c0c51c3848&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=15bb28d614fbd4d0dd4d6765738241e5f44faceb7343f81d7285001d9d526625&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=d0bf038a6ddefac9e840ed5cee8446c4e6da2b4c7bc7810d97988a4220c8273c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=81754ba3f00eb4f8bd202d2097ad2e0650da27c5a6e78fc599d18211eb34abeb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=041b7fc13b344d0d981ae44ae77c21f9dce2af25d1173375dc237326fec3dbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBO6I5W%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8uZkhjjMYcNfVGmRiSC3m2uRkRaGgt5HOB12yo6cP9AiB2EKIqXnT8Po%2B%2FJpy8weeCTUTqgofj0TEenNHa5LQhpir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMo3ZvFOyETvAoYp4pKtwD5DZaFVzM%2FPXmplw1CwzfvMyu9Ap96c2IamOVgQlhAq9YHiND5eDe66CyVMkUl8qA4oqTg4Nd8Hi9xcCeip00coweLFpfPubxYeiA9FExB0FnQ5PzPZu9NEpoKLj1b8JIa9YVGebDm4V9ccx0AX5etdQZpVeQjgDXpHjP%2BNt0JaQ5%2F9p6hoIM7xKmQV07bAxy%2BaDUBSwhC9sZpeLjBC5%2FOT1NqTnnqpssZcq12VEIXXcVQgLv6fZJFV1q%2Bf1ye2jSS93qOzSgsXTPXPayxOzVah16hrLfWgHultdiCHtuprza4Hc%2B1Ek6V7gzwZ%2BFVnJbJ96gm9pYbpz6wmX%2BcagESqt159XQp0am11%2FKiBeMTdeUV6XnpVozDBkLrINDqHy5E%2FuG7jbvyz7iP8hTLP4V22xs%2FTTExR4nLgrRT8Y9ZgI7UQ%2F1jBcR6DLIUKf%2FZvior%2BtSHorL5QOhGn3z19L6zt0hh3AxKJz5R%2Fwi3Ka1GaGxm8tLjFoqHDf6xmpu62qZueceW3cwh7iClDK%2F5%2Bzh32C5TQMOUz9dvIB9VMcZeX1is2ykjAPXjHVXO30B6POdzw5kjatvClMTeHdb8bArW8XZWxawo3bGbr5KcGw1Q13pHeA2ZjBoP%2FfeCYQwn9ORvQY6pgF%2BH6kAuil6jNDIJOBRdsZCJrrEzP0J6BzARyxhDofEFyNkLz8NxYAs%2BJZEArp0%2BR4lrl4BIksGUjQD3N5TPUlln57GKEuftEiZ93rH5%2BRp02kcY79uHrffw3rOeMveizwkrzxa6EzjstYmDIZTAtuD%2FSwt3toTDZhZK19rx65Rl47PzwantZYNwm16KqLWG10XdcDGlhtAMC15Z7hQ8x9Bwcb8pUvz&X-Amz-Signature=a5d3a7b9abe71dfe7b101daf7bac32fe2548429afee86db582661228902497e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
