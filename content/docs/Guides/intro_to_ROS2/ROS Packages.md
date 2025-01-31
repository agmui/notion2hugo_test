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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=d3b2c9aafbd6ee3d74bed82db7e96da0ea8a17b243f63729d373a5f8ff90a27e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=b60052b1ec2aa6913e6a2d5195d3c8a47925302dc8eb96f90a9ed3ff334b848c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=150587d633a73c1613f542069390bfe57a9ac6730b14b805fd21b69282100123&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=9b0b8908f65765a059e190fcb4388d0712e540872ccc5047864fa281cc212d34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=cb55a6bb861d59844d0b647c95f25ea7ecba623ae351e86f65cc8e944e18e26d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=2992c6f82dd2fe7a674295567534e0865dc5a58c1cfd0760e81bf65b638cdca8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWXUL23%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH4pPx8Zas7Rok692psc8V77j8KVccjEEWZyR03kD6%2BQIgMY0RmvxtUcfvM34rEWIxr84JWo3z0tETHSID5naDNyUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVnO7imM0W5GSSmfSrcAzANyYqw%2FRbhxCnuSb6fo2Hd3yonqyEUIuugUDw6Pk3YwiJMs5S3fsROktdeL5lZihltU%2BfwOlgSavBfFtMoWf%2FokhkS03l2vmsyDlejgzewiVSWq5qZAP23fgkykETs%2F5hUTG15uOyQOa6fvTsu0oP6Gd6K%2B4Zl3y0%2BBIDeHaXnhMfS3QsUhHFQb%2FyofKJCBMGwMCe%2F7u375j6Kkt9JRekntuv749ZQ3YfCIbL7DIa9ykxaja2VcT9njxETHfAYSiBcOM634qmCDnZYVpsH7c9H4R0qnrBz5qATxcpCczrEj1zkQl9SJxfaaFb2qBMYYieYPNVsqrag2vvp4n8MBI5aZ67w5S37niJSmoxDaW9U1cLgJrLE0H0bIlDCzN3khLE3AB5rbn291k5Sl06iqC2pwprLLq5yQDSpLrvWXU8tlPLymM8juD2DFMrisaUcwGywWu3grRTGsyQvq8OYtBII8mjcgCm0mulDeWsLmkW6R5ZeYvRTq2OlXajeFgyT2psi78ECyMMJyeT9TSxyAqDCJlyYzw1uyIh448dGT4yvnHmLLBNpJzz7iB8wgd%2Femb1rL1SO0d0LNDp86V3Aua%2F0wTas4E749eWJfIv3imFiMHA13mN7p7gj7wc0MPTR8LwGOqUBlhKI4DkK1QfSfLf9sA2jVgsK9qqRKU5CyKfAeZhCEeKH5NonDpbMOa3bsiMx3rD3nrudrtSQQqILwxQgcdlGbqhiYZUv7eqLuNbK12MP4Fy4gAwLbDGL0YsMEvOCIrDRitUsiiVgsScA9AAANdCY0%2BDSxUnVPDaFgzUrtbQY9nE5gu%2FDnOgzTrRaZo5TInjWJy22Rs5gSTBVVPuenm2aV3El7djg&X-Amz-Signature=9c14fb6fe56989a0d3d42c68ef41cea04c3080eeeb232405443ae6baadc24598&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
