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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=f15a501ef3019047b88f55fb29046885ba8d2d3821318767876cc4b3fae49dca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=202429d7cf1ab57d6ba64271f1b0418e8c15f76c2c6500cb4e9a8953ddf98c94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=f9cd116b27f8595ca164ede40b688b8db2a79986ff004d912e3284c0f28589f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=f7a01566d201afe99e17e1caf56ef707713c70db9dd41b1e72fdba46465b07ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=a2f01c769a65d14f994fb1f14af70a65d3609201cd2b442b3caef370f3122fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=cf8e16822b86bcea2c6676b86959e80743171fb451b189ebf64c360d5f44a22a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4P4DC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF8omG0w7AZdn%2Fexc6Hi3QiyQp1CgYGvGdIj9BqJnAYBAiArEo4L9rzxTUR%2B7qUg4hYd%2BUP9Hw9EzoeE%2F9SYKMWR5CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUh%2FOOq2svrzl5lrlKtwD9irjOEiARr1%2BLoxk3SMepkmzGeexyImWuHV6mBvr%2FeMA35vNARnFCJwT4bfOjpfFcHmx%2FBdSkhARfQRPNG9tSPwd9xAaL%2BIwDOT6cCjTCGF4pfCHWo%2F9V6ArguzoYFEFRKnzlsp84wzNLnZ%2FBhda6ZMg1B6PjBhbIYNFOsnAjOTVMrzX2otQ1XVT0Ta5YetlnyaT2XLl343rGLrOAjRVp28gEGBIlkEIXdNfMTTOo7znDe91RnsT%2Fj8O351kbqlwrHWu5NAWZdFdm6n3UWVp5OvwkTkY6YledTFbo1A1moRVL2uwXdEnyZRT0VKnpmblEGpJBgD6%2FjEl4UaW%2BM22xuJLwohBWaGznG%2Br2QbGb%2F0etLCgpiumu8LOQMeXkaJjWgR4A9zbVTb0MarnzYzLoYZyyEy4Bb9rgId7yXSWOTyxVwUe4sqYG%2BvRe5h3xoxHfy9FhHnH2qmE%2BgGZud%2BNuQNcAOZtEQQdnPb4LRzHT%2F474XQOsKHjw6l9kwhsmvaPKqESmHRCmIfZiltFNzmodD0CO9C8aNLTZ7V3BLgQtPatFRDSq6UONzG%2Bc%2FPS9Qv%2Fs9i0V3mGiOEoKIJ%2FyDTTS%2Bsa%2BEJ%2Fu038CYsQgGaR6X5iTVFgv%2FIkNsT8utcwzOvvwQY6pgHbYeG9jIYdh%2FP2g7gtUy5f8XPIblyTWOO4zRqA4Es0Wt7DLh47OM90X1ab3jnH8iPwAXVMYuUP%2FnXK%2FsMFymMioLYPZYMmU%2BMR35M%2B%2Fc6BFylTAI17UY6nwQ5%2BZqNC17YHl2qWSZ6jIu%2FdJ90sQNpQMqWhi1p8JIGQ6wFGHnYIGlcXVm3kaZCIStvz5fAub7Llx8XIzGq%2Fwcu6%2FbhiiVMiqLO%2Bka2t&X-Amz-Signature=7d4dbf4721bc14893c4b1da419adc52eea196038308d0d0195f7f2c2dc6159ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
