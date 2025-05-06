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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=3bce50c2f9fe350be45cdae44137097ddbcb64a3172fe23fd5a92fabae92adb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=cd93f2965747ff37c8b3ae0bad91e2be07c9b0787a39b3ddfd62839ae5fbc403&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=f4b12982525e7bc7e06437cf2e6d15172b6f9fe260a7fa51aca2aceed325c5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=a73aebe98d82638642aadc6699db35a3c0360e069ccf13a42138769e7a8231d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=965416449cb47b88f87ea9d2922d4ea0b54786703487e309f4075d2768f7901d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=808c3d43ca1268e8e20be640116c3d8e587133354278294cf9ee02c81cc9c867&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK37MWW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwNne%2FZrQmoCBUG5IXY%2BEiW%2B5BbgnXerVJOuUb9IT6AiBFllV9RmLwMo7pIWfw9XJnho5VhCTMlRLoZSOYrAevuSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSarooNayFgq6G%2FXWKtwD3wo3zsnOQBbYz1zyC%2Bw8r9nSdmGmu1V23i%2BSJJVB4MdN4tC9JlYw6V6oH5kykiGaax9Eh%2BYWtMEAXiLkcAcEWgRDT61%2BRWBhg7l3JrnHIKzcGCwY9qliaTJht3S1lZf2svFf4TfkpKNktIgUmb1XSUKXiGcAx1EW6nkdk8WEP5mRE1VeeXUUzzhfLiVb%2Bp2DAh6dWKDVfzrpEfg%2FUj%2FXZ2BgJ5hVniM1qsPG%2B4ITuHRAo0TeqTsCogcMwrPstWci68MA1Rf3RlQvts6Jl40rZQ5ueToJAQVhbGUBZ1dOmSmlNW31DUPss8Orgfv38fgr5oGQ7cTsDqu9F7AbANs1NtoKdamazGTgax38w0g86O%2Bl9%2BOR7LT5ZcvDyLSRx38Ot1bBrWkjdIIo27z%2Fp3UsKrq2rAAhjxN%2FC76I%2B%2FS%2F2DewsrTrdl46xip1A4rp6JiMu8eVwGHavJ4wVMp2ke%2FRSY5jPkfzlCBN8EXgJemkU6gpx0DeirAfl4oI5SHTTc0XrOTLrnuFbxDktqSNrsDZFgLUMdMUvyQ%2FP8nzj2lpmVi9btMUDdNt4MQGlK0aKeWBvXIZDtTKeqyX4gvHaJd%2BN0v6pmOOUa0NJstqCPTuArwFuypfWwdBtMYPL9swy%2FfnwAY6pgFd7E9fST4MOpsTE8MYFxzeVF%2FvyaN4U1Rj3XoUmwwkjj8B%2Fcx2bQ5iWlH%2BJpfI3MzOXMyGdpg6Ac%2FpwpKqEACgbvV2nPUNEgfGn7%2FgkZEvzKiUntn%2BrOOz2qNn%2BHDUE7fCi9QDsNVhrYahsW9m7QSu%2FfvgKcBceVnyiHouyyPLbE6x3CdiYqxukWoZY92JkyFsFVCQvkDg9E5BROAialXOiTl8iIcw&X-Amz-Signature=6fd93954e2f60bdc33c0391f4f600ed7fd96eab4be7c263e36fac0960a32ee28&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
