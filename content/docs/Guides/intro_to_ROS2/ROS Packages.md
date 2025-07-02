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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=a28c6ca382287b0fe2887a2248d185c8595a45cdcf53adeaa1372f8ca2df9740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=10e002378db14c8ba7686f4f0f60dc76255fb35278634e54431137ad9eb4ad8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=21df499c13af963c1860b451f01aba79e4838592ef62a10dbaf28875310a1797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=1dedb77c67cb6b9e5e0f579b3995d4699436d1c7b2bb39599be0ebeae14cf758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=ccf2bc17cb988fff25bc33322057c84fc71f7dbe01b687eaa458a227d946ec67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=c72773e80f78bbfbe202bd0524f8d8243046014666595d22460d52a7ca7696a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJM5AH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsYEOZjLgr%2BcGd%2B7i%2BWgAaQiWsfPOJ%2BBx1%2B8Z5F%2B%2BFKAiAe4Wa%2BxzSNDeUNdPculSydr04JunG2b%2BG%2BwRaJXZvT5iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FvxB%2BhLrzpwL3w%2FaKtwDqEUtqYguFL2rMZEIqWhEFM%2BIJNoL1B0uA3vNDkveA5oQ4qDRbqisVaN0PcArUoJ%2B95ckfxJ5EBfErV4YSG0x5%2FuHZxTR0YrygwLttjP8Wgblt%2FmL6O7%2F6f%2FVptLWbVbA0bI5kicxVBL2bkfCIc7YLarkxetenHYSfqDjJuLqTJ%2BZqRbMYCa6RUhnXuUupyd7RFNMPVLGMwxizx9nd2SPpWpv7XIkUbdPzufiiYk7Cf0kHrDqHDd74nadrz8Im0RDV%2FYhaIMy9C9H%2BOKUd356MN2EbyOV4gcVCE4VNZJpbBPR%2B01I4HRYQwrJ67WrCzp52R6N5jJJcL3FsTXxGQQsmGdzUAprBQekL3%2Bv%2BuP%2BQo03Y6sbCGIdfC%2BLXzO7QY4cg38W%2FUiVH4MFKf6v3j9BWLVGpYHCHQB9zAURLG2vlrOvmTWiwh8%2Bo1rEz3wNPLehiq8iaw1gMWXXDIEEXAstXKtsiV094AZ8OcX%2FkP2mcnbLaXQxspGQCyOiKNrwD4fwXKdssLyx6qkKIYy2PPEAw7FQSakp1UTbct21wtzdWxHYpj0cjLRTzwmg8tawcxqEMwcGwX9LnDnNBuPnXV7IiOygk%2B25rMqa3%2FrqGyxra%2Bi%2FmIbqmGKsCTwlJTsw8eqVwwY6pgGHqmUzXDQWKlZmc79MmWzFqkVoRpawEnQtcFUIqNSw4PdI99FS0p0egEjoM08XN28rY1rUHsf9Mh0EYH7dp4BLNKJj3VQqYMEDHiS8grc9f2Ln%2FjHriLNliRKaSZQAVkE8rbYBWRaYBohWfAho8PxZ8U4d4tJhTEwDwOKHmcdqs8u3xsy7PRRIaY2OiVP%2FuIY50dUQDaIYBSE44U6P83xsNVkNMyUA&X-Amz-Signature=192815bc0bae556969030b63031f301fa987fa0ebd3b9602573f9ac6a494e7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
