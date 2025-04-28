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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=bb7f28377e3019eac00d77e1521ba430ae5f25892e6a54485679acf53ed9ce4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=d02757ed0488332fe5ca2b30c7844c1f3b6d629abfee2f513459e8b58d87e152&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=dc7a67cf6713bc76e1ef876c536c14447333bf266a1a8830261c278468607f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=7be8ed66201d62cb349f3fc7c191c0d479a52c9321a721fe4c84f17c33441f25&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=21ea97fb8eb5a3a41ea42003edbebeefafb6d1c9231aa316deedd5e2fc82117c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=7ba709eba55576cf4ff73ef2740ff3bffc21efeb32f9a73b678514054154f0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KZGA22%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtrjSgc28M2yGmCUmlyJayxicHGg8FSttCJscyzuaP6AIhAOLK7uSfMtuI4VoF8tbYBmLWjAxwp7ssE6XNKrQijuqCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzsZHUJOYiXvUILCokq3APJ%2F6L4pmQ0%2BlmvnVgzT4bCp48J9Y9%2Ft7fTzbW6fvG9l58YkIrCLYwMvbBrmJVvUOt2P4nLxh9%2BqPfCw%2FfzEbdBcQ5%2Fkcz8j2jBttnssJCQasmgmj4GgTX9IrxCwqA0p2MN4%2F0R0SGQihgTAh6IjMcI19amdFI5WIOnhPVR8QcgXFvbM9WzHJFJ7mM8aKZ25FxDta9Vp4YlL4iWNVk5A17ZJuuXbNpH1cHI9KRCfeaaNppXi8%2FyViw3uASeg%2FEH7wgrv%2BzkHMtLsSgbnnTnUkTzu%2FejRmKuUqDmu3DL%2BiehaT%2FMFgchQj1MQ3RzGza%2FHicwrHVi%2B4i5b6ESa5suK9%2BAy97cSziq%2FXiS9kjlvGG6toVoExuVRSfSqWogkQTSAeUJG9eR90XV5SJ6yp5iaoP4QDxP0JABmIjk8eck9QDd%2F%2FDgth%2Fd035kOkS768nrmdTOXx0u0DxKVRwIYy4%2BC%2BBjWlQU%2BVAeKBB5jW7es3qqndtr%2Bx96HFJ5J2XjMFnY%2BtD%2Ff2zBzKS8Uzg82FXpzBIGnwmLYY1IUIWQg0599XDYl3Qy0MSHDEM6uwZ%2Bt1V3%2BH2haSjwD4oEYyHT1j%2BUh2%2BNdeuMbiCnH2uMZAaVfaf8W1wanMMIinorSl6O9zDi0b%2FABjqkAe3dajbx%2BmIa08%2BCS2xhgGK2%2BcYt6wOM%2Bj3%2FqG9%2B1X0dTPZ1Ku20PbowGwxaMjAygQfA4PgKyD5zjziY2dPxJJDOJ7GHvDjG07BD27TseqrmZO02bkfThK%2Bxn0JvQi3yyn1PBcoLm%2F7yQ9L%2FT47SZ0VNKxrbQviGk%2B1Eq%2FnsQwVM7Ms8Th7otOBYjOfikFzyPs8RoqQjlYU9dXRmUvf4G5bErkXJ&X-Amz-Signature=fa132c0197d322589b8aa564a5683a7de2415f0167cf7f837098caec5d57865b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
