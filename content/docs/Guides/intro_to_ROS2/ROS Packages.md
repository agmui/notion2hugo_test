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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=8c10d4f7c9541314f2bdcf391a94f20af78e5bf18d31396fa62fc8cf486cec98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=f308b94d659bb622367dc9aaf1a042c242d294132873ef3938f253ce3b9c41a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=5ec92de5860b2310fed5dbb27ef1f924ceecd7b1e9216cf904846ab5c62c25f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=68e923c52f41aa7907119db9f23582acc652afe7fbd2428ab43c43b908172e64&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=6648c39810e0c451fd720e978e7fa720ea89e5f7037df617c2849a4241a0b83d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=a121cfac4484a6a2ea8a63ec27dd36d6461b1e618c16aa5ea83b866f1ac9214b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M5FO6Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ4JEACM7v5URzQiNsvyXCCqDyicIdKUQXCMWKJHi8NAiEAt2kPeyZvoUHE7ilXaQ%2FwNOvFtYzAatQmjDRRZmqKkQUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHRSccZiuyv7C%2B9gYyrcA9cnMzoIyDuvgioUteDrHqlCFlZHA7IooGJxpzGYu2D3F%2B79XQADjDnFLqwFtV8Eh7uaD7jvGLLfeUJX0CzRwG1fTo24Jlt4rizV4h3hwzRLIat20FN8CvawjEZaXmv%2FtvOAeZfwtHNCAo%2BbXtrkEoMXMv6g8Ndc75erKIkLNXhSRt92nMqsFXchy4ODFnOjP08nJLSQ3epZDFYSXsAdLxr1vycUvhXCapRipfYf81835qaKhKhoI8LWB1CJym8qGdJ%2BD%2BRPk%2BgqWcIKJrAHsbTIGQ%2FzS58Ovcv7zApLChQDuio%2FUy1VwZzyB5UDRnzIGy6uTmSkaFXD49BN3woEd93sVLhXRP4wIOx66w8Sh0FM1XDrxUL7XjmqqnLpt7WJk57slN7K7C8GHAGlW18MaMiM4U8lmYQOZus0Z%2B3AFVFtDkafuGOA7OChxMEa5r2vJvZD0GnDEA%2BXcSBlBEOkUosFPM3V3woOMKX0u2OmuFVGfNFCZMrIqh0Z%2ByyQCuN7J4yYAs2wxDsRq0uF8SHVfY8ysDw%2BOkuXzh7po1Iz0V4RXN%2BxI8od5pO8JKqJ0p%2Bk6eO%2BDXniDzMN1266f4g%2FzRXtewutOAFt4BIYpBuGCB8cto5bZt3WVM9aFm7XMLzOp74GOqUBY%2FLWrKwTZjIsLNlZLATJ8wZqZPZsX4w%2B45d8a%2FYPB0iMgB2VkWS4BGxCM4eQP9ZH7d9tAKgqTbpEJ5Q2iy3DDAVbTjFvPtnyD1jLxXOwn8WHBwfmTNamepUz3wYFLlptkHPETKQq0z9y42H7%2Fet9RHhBa9wX%2BHL9tOKAf%2FVlRRzlD7m1kBhlpsQcODo4vHrOGoOFFPZb0B8UOLt%2BOzLaqpCxGoAP&X-Amz-Signature=bb1b27714ccb276124df6172936001c0e9658ed37f6a16c0ffef942820c738c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
