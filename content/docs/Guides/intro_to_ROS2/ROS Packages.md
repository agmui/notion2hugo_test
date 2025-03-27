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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=dc577b99e97ab7f6e7ea30c36716c083a995bba6035cb8b9095c08b0de0f48c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=39b23ea42fa779e87c728ad4f6b077270c66825aa85e5ddd114ff4167cec30e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=ff8b15e5d6680e6d28f3e890b2e8418ace94e6779752b645d31e368049435c67&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=ec5bb4de640713eab264c951be0031f0b6ef203aff3e8a672b6b9504660be478&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=bb9a638740aecd8ad20059612e7442f2cf6e54b832dc335399574979ba78c85b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=b990512f0f9949e3150e4b8ab9dd8185f1ac1ecc32f4297dedd21e9fd6435594&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCCTJMK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXkR60y1gjf0xNgBvSCG8RVVcjtFNobpR9qp%2Bul40FgIgIpkAiKDXbI%2BUyW5f8x7Iy88W%2Fa7tdlUfwzzwXSrnqa4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPKIw6D3l4raqwBjQircA5TyVsLfj9NTPD4EiFzjPObRMdSjtrYX0DTUWpmrwequzjGYjPSJVy3w0CHejSTKLSyOAw1zzr7zwVXufSAqHa9qQKhon0k57TE2BMWt1EOmp%2BjUCRJU1RcZ5eQBstw1OxK9g6HCM%2FHNDhVJ1LP8yfTwluID4ikDqeS0uam0KP7FDjJYNLfy%2BR571vAk3jA491rrQnp5%2BsvmkzIkYAAWrnWjF1Jds%2F%2BfwWf995frgfe71vNqpUN90hy0%2BuXOt8WGtD%2BsaAtyZ%2BRNHxBWP%2Bp2UBmVD6Pw1b2nVPUeiUoCSZwHuw0GdZq7qkO3T%2F%2F4Id3BUukSLcEwYttcbzlogCEclA498jsMf7ePnQwiQG3%2BShorW5b%2FeVXx3yX8xobr2y%2Bs6CpOeTWC03g7WqUOmVYTzHjVVwkyLM3pVR%2FFcdcrhIxd4HJ%2Ba6ZOv492N4k0jFBTgkdl3cnKD5N0jlxIn2iVX5as29yMPRk2507MpoeMXakcOpHheIwvOIsliUCH%2FR0cyXu35WI0drd07u2IOieF8PNvOjdeRiGrWJwoYze78rYtb196a%2FUKaBYJD3700S%2FRSqwwPYet2OrRbRT8XpygJBV2Ky%2FaXK%2FSfLhNM1fcNllUsL4Tft5b6Pv4stK0MKajlr8GOqUBZCoeV0muiDrZiOaXYwvNPeCYp9ZdXtPiUycgdrFfNbow2mb7k3XwwSX3eJLXKdQbwdPay8wDqOCoABg5ziuYV0y9QvsmMo86uAql08Hg%2Brd6hoOglH4oeW8UoVkI9pb7%2FRx81R4N3Hr3NAb8whufkBE4DnuI7hNdTPJiCygL14oL9Bh4UXrHL9wLm4HbSku%2BJveWguCKg9yojwcZeDyvz9cBMQ4s&X-Amz-Signature=530eae7add979c0bfb11173b1bb013af99e3688a286942c063c1b04369b76717&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
