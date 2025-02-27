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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=ce2a0da8f32d460d2cc1a5e20c30c02fb827682449f64a27272ad214adc7448d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=1b7bf9deb041ccecadb89fc9283836140544153a5cedaecbe9d6948f63603f01&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=0b279136c3bbd1a877eda26c4df39af49e06013cce162e840988436e71937717&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=1798026b803f1464622ff1d5f8772867a6d6b3a89c20f44a1c0b6f96aedce03c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=c356a58dc2a11f6177a31d4716804ec8f2f322ecf2c596cad7c2a6789a8c5163&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=ecdb070cd5c9709eba707a5527a375ceaf403135bbf3a7d71417998f9a3321d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDYI4VC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICKvHfwZt1PIeEQMVrFrWIsp2AZ4Be%2FisO9NZ4xDgjzDAiB6Ls1PtKqtHHmW6LXpiYiqxcuxreh%2BMCLhwY0e8V8WRSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMc0ut3se1faDDnv5ZKtwDufOm8jKGlEdKYlB0X8MtWJGH7zymf5TQJSFUKtRX6S7dSAGbnae7cauVgEm6DIZd3k1zzE6AS9ojJ6X3%2BuNlyNMoNhDx75QPNceYYgghZ1DKX71Q60Ij6YjA9b8wnrUapFYB5EzEicORrJgPDqaKlblCqhtzx4AbOUpVF%2Fh%2Fsg6WuWqzt%2Bf2gVeqrPJun%2BK4yHyViP1%2BNXBEB3FQ9g0DJBiIt45epxIUjBY9Q9HV5S968hWQHBrEEGiPgp3oPwSAqOXIFb%2BABv1pfVT%2BHvYOBElqZzVnu43gBLgpxGc%2Fhs69MsgJvpqDfNGNgph94BMDbMg8ukUCXuL1j1BWsosEiXHaKrh7OKoiDpmIOsxPE9VM4zv9saWZwtmVvkTvIFZEixdaKjXkjh0NMYrpI%2BoTl2aDpDX4VX7bqRnY%2B9rIatefaf7%2FDXiheKsXo3CjXuDHbXX%2F%2FVdjQ%2B6sX6u5qQaN9Qfv1uTZqN4cth35w2%2BYcZ0TYaRV1Ebk3on%2F9P%2FkHTXRGucSgFK3I3ka2%2BmTyPBhHTMUl%2BjUoAVOG1ZQnkMD5QXZKhskLmsIRYNMC0BNJqfraFU4juPvSHFEOjoYuohqvhuvFe%2FakZd4%2FcdRh7a5Anhpo1aOcBVOddJ238UwxLuDvgY6pgEiTjgAizHQMmVpcFO%2FUyKLx3qHAukNQqNOr3n5TnHL704XowMdqshI9hFMYgb0VhyrUaILPck9qEYqKplP6GxNUl1zPwF3pFbO%2BBG6p19y29whaxkI29bQN18KcCxNj93HyahQZSZ1wdaXEMrRpbVGDe0towOLT22p92zZWATsgf53V45CxLhpp8QRFiu86BPwpT%2BQvMHeM2AHjP0DVDoWGDdQiI5o&X-Amz-Signature=eeb08166206afb60fb163d5b0450c9699b90f40d3f4f95cb7b81206f9c82f094&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
