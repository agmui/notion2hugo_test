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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=4e713ebf9da78fa64d7aac028c41aadd55788279ded481f7a61c27703b4b2121&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=9cccbf3ab656d838a9221ac42511ba7bbd140fd414d54ebeb4017fb58f92764f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=44e9b80d942e6d0c7c5b44776b8e7d2c19bf5f5a8859d00f1d6dfe9a3ec64469&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=88096a72349a3c6725549cd0e56fe3a2beec52e7fabc6dc2654c4f510318df2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=e6e9d0b7c1294a549f27612e1bdb8b0e43a4b461363adbcb3a9f80a5e7d488a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=957e20b9cd59b7aecf68a4d4525c5570e4f8fd02a5b4e34755bc6e36c15c15cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSLLBKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1fUs0Caz3PCaUvYcHMCbzhW9WmTNzwOSb85cUdqnFxQIgY6ngbMkRAyWB3CDzL%2FKVDm66BKjJXBo43ScgkVnf8UAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnCH4OC0wDdX%2B8r0CrcA6ugXzVApTy0Ztqp1yGEGA9WqBgOGCcSnlPY2h%2BKM5eOPnHGWnmJKRtSONd3Nyl%2FUJMU%2F4mz5BhDgZQ3JGL7DiZEklcd9vlmCGtqzOYlTIEIqaqck8VhVVL49fVDZfkwFTc123iCHLAod6rgty9apSAuJY46kMklNfH9B5fVVeoWtBk4Ttf8Iuh7ECMQT1x4cMZjSe%2Br%2Bg1VduuW7%2Fbs62x2ArtcjqgM50RC3VcsO0JWgcRpQ4%2BxZnhsGoWDv%2FIT%2FaLwCl2ZUxSI2lL2odDBbVdCcCKeoXeMlUgnUtfvGLQr8qYRU0ZbvFdcpyY618PjfUiwkOARb8RyQ2V%2BN5XkMzqsoOVr9D06mTJPaafY85mYx%2Fs7Ok%2B7AQqGA1r9emizWmYvDksn8rXF9m%2FovpbUm8dRGYX30OG9MKxRaJ7s3LuSS6HEicuD5Af9m6DARaHG2sCBa4o2TgUvCS5ceRtiPtmS0m3MzWOuIwmDjpri%2BAbgNG6olGivJJgwqUlP1XUAn6lCFxklhkIrJfsseML62GNvFAacifqUWhGdbL%2FmtR2UDLnVj%2BFuu8dt0E%2Fqww2mDt1EvRfenNbjkpgCa3KpQvxJqAmVkSp1vZqSOQWmS7hcrNB6NPOtoDbi8XwcMPzyoMAGOqUBlmoLl0v8cXByRZRNGTyb2zMWAyfGkR4mS00PybSKS2NySJDT07ezMvk7mE4wWIqMXdBxQlTHKBdhClpTdsVzE4fhINGXNC9mxWYwi%2FM%2Bct0J6n0RTlxVdof%2BrqV1PrAYTN%2Bmhxtl4eAMYl2fd0y1OahhUVxYXjUhp0o9igYzXWEyofvKAz1sfU8ZlfVbQzzYiDg6n8khvtbS5p8rdnwS%2B6RwYVqf&X-Amz-Signature=27c871eb9d18570d91ec29ef42a8a6264f802c7394ed46e81430f57c1abfa4db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
