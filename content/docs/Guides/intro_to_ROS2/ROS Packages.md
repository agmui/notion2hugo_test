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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=0f3b25272e9458ff91b75838dfcb83532369b0bf8c828877e0f5e9c52596eddb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=1ada061f8a624b6d23670fa78b65c9843a175a9ac2fc5fd9432e05af69345bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=19803d07361ed3c62645fae60a557057b5f167d3bff1c66040856281022295bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=98db83cbf5e0b1452a4079eac5f3f6a30133a8fcf2fbade0d1712b138d9212f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=80705ac666628800562e070b8aab372dcbb6aa3287715809ff873f5bcd7ec22c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=50c176486bc33177782c2414e1989805ff4c4f69bcd6cc75e4556a09795476b8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC72Q4F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLdCc85edddvRbo9rUZ51Um3bhKMweKVJyVzJVIAiHqgIhAMJKEakLZF9SCsgfvoip3CWQMikY7wv7stbS4T6m21YjKv8DCGQQABoMNjM3NDIzMTgzODA1IgyeEnU1v2bhLLgI9kYq3AMxITYkLjmgrwRRuz3nPR%2FCm3qV6NbT8y37zhIb5m32rokh9IhewNTduKcHUkF0NXoeQ4Q70StKWw6LmnNseAZotYbd5ppFHc8zIProZa05LvItZrCu3mlRLDGpOS6kw7pjZRIwe5n%2FmUvbB%2Bl0Nxh%2Bs362fvJcI38x5jKpv4k0WO68cN0eh4jUCRq29HVsrAeOR2j68zl71nWC9DNPFebtZpxfvsCJWSbPZUMtUV2lW%2BDmXgWxbez4%2BiJee7u%2FMlfW1Td8Zzr1j9GZ%2B5qdxyUtrt0q1%2BDSxtUJGf3%2BTsLWtlA1F7xtG%2FUkBPKqzEOtbbS8KeADRz9sby5QhUawFny5NVF7rFRg7%2Bg%2BB14lIRzNrRrLsyAfUIXnwjAUTNeruiEb5T0Gp6UB4BA7uARK5kpKjrie1K6GICJCMuGcvcbDpMw%2FDk9Y0LlYq%2FyaMb4nYPxhYQC6VE2XgQ6jJVkuTzin%2FyLOfP6MmYL6JqDtHNV83i3RSr%2FmvkiY1NT8Wc7rF%2FqWP0p6xCKDhHs2lcAIBxmgU2xDJPkdelnitA%2BzlWjanuWIzaBHNxN0ohA9Wt41TgZ8x8bX0L0x384POR8kPlhO0zNDXi7v3qOd%2B%2BVZ1mchebRFxabenW2ts%2Br88TDDkee%2BBjqkAR1nEZFogAH%2FZ0r8mcbq41PzypamBcJHWeaGEDcl0puGDZWtxH%2F%2B3VTOzVk4%2FDzABaFCMZY%2B8D5r4cUjxVK53DVp9Zxo5E%2B9q1NsaFz1NppegkWOUrnsffrln5s8DoXi5BAGR34vZ4Fdkbj%2F9ti1wYWB%2F3QxwQAq9PiQb2Db1Ssh1CBBeVF%2BEC9qsfi9PgvkSCv9l58%2BC0gec5rePJWYUSyuHcCt&X-Amz-Signature=52c6fd8a0e75736afc8b72eb41787071b9471af08acbc8b3c35e32daf2da7eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
