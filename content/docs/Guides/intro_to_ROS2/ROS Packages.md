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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=1e47ccba3c35b98c0d27ca92bbcc74381fd1e62db377032c41a7850351cf3787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=6740b598a772e315782bd823c1283f01a1d545966da52e8435adf3c7979e1b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=cc82dbe3e87d88ec6a5eeab3c3db0b45b861dc9bd1b62145c6eae36051de969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=46cff36cbb58c0678d2d583caf3065afaedecbe15124e5c6de504cf357d7ffb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=e4d9e07a944b441d4ef3290e7b6b517b2e1d682e8b90b0241f0cefde799e00ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=4a27b9834c61770949217e00849f4368d14e099b226fa056d90bf4c1f1f9db71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHL75LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeIe5EABHERqHxGHaQy4v07FnfYQsDvy1KY7mghBfoXAiAT8pjSYXKgf2MqWp7II7CAVv2nK3RjthJDBYJeglGvDiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTzyqIzCPyxN0sm%2FKtwDjNEK1XQ73oO7LrGy%2BXb9AzVMidpZ8HV5v7wWL8%2BPLmmA9cn2VHgUX%2BdLYK4Zj%2FxtyyxhQgB0lL9L%2BlBYX3EBQ%2BKtHPoGngtZ7j8o6G5DesQ%2FMHDptL1AYvJaUOEHp4DOF7NL%2Bj6%2FZ9ATpvucyJPNfovFCK1ZnkArdn%2BX0%2Fa18HUO1WgWRp34%2Fv88gsYKM399sgOIScyVBatuFTIFPBvTPptIo0cEIErbOacvQ9udCKxjq6gaiunCFb9zqufR1%2F1Gk83kZmEfKU2C0EGa5kBcYV53aJ%2BW51%2BPyJaEa55QAZVfambcntstAJgd2dDXLudEtJ7CVrgovYkBJJKeFMduc8VEjdYgNEaepNZrmoEW6gahcKFcCqL9FuvAUtn2yFWWFxvMntcZBF6AzsvlEZup7vnQ6Dgdh98f%2BerZEHALdNxbJqiNGEx3xanGLgpnSKWGeFh8A6rKHndT3wB5Dg5WOmRyvIi2nhUofkLZf4jgTT1eGNTjsjR%2F0xulPQWvPNWjk9N4OkxtQAaSim65A9QQq9bqJgBii0mWCP0OkBcRNt70%2Fv66%2FfC06th6wNWKd%2BNx%2F4PhKeyhp366l7XufzrlWCfWde%2BH9pqNDSg7gmQc%2BKurZK23z04aRL3lQNUwsqDIwgY6pgEjPNLA4l%2BJquSHF4upMYnQ3RertgLalRWR6siIE4vPuxIYGBGrMbik7bysEDHLDZ%2Flg1LnJImTbQ843SO65xx%2BimmHevFgOhpY0JYOqYtUNSFx5JhL4qIkMegnuS6xQFUQgm6gU5cCY35SHBMNSV9bUSKeCoZzcB4hhXRVRFLkTnl18GOVo4yEmABoGIpBbSGF7GkMvw18TGmSqfO%2FpGrnc179n3jV&X-Amz-Signature=fc14ce39d4321fb797b78fc392ccbd4b54519685e046730d716080573df3315d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
