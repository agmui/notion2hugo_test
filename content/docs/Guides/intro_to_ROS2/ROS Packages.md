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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=3b8e42ea619501c933e5924c3c99c746ae8dd539c9ebefc5f25f8be50369055c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=073ff6e99c47e18df168e230d9d5681824f0c9976356b1dd0925b4cdb0706861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=1cb6816666393e05e744faed4d138c46a1c610049705a684f87421c0a52e064c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=dddcd416ea73e9da44b9d7f04b63b596088431d3224dad970ed27f9801c62254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=3e076e6b749cdbafa481b939710536cc9b4ba6e28d91f7b999d313304e4d09ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=4cdb4caa37629ae69a2cd4a50322f009b34d068c2b6436124124a1a7c823823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVNYNBK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLhu4EEyEp7HSHqXopFtfO4aOFWgHtYcUaAOzHnOp1AwIgf9%2BwWRGTmhC8Q%2BL8RccCWosilC0R5FNRamgSmMjSVLoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMtFXPI7AAmv2ykqCrcA144LE8ItmDhuUIsLBNUOgiWUKy0hgWuJJI4TpRy3HEiODgLfYMAibApZDq16vUmHLmzQqy8TCV3YxqY%2BPpIXhGADFoRB0ThjivgzqXHAqvSLkBe1Ctn9fPUJo%2FOv3BKYso7wD4%2F6D0yq7ljG8VVTCa3bU5Uw2XH7KMttyUAtRLpCHU%2FROwOrtcbuY7L1IZN6TzLR18nsF8YTzvEqIF%2Bo5WFCzJlxwt92vNcisAu7YU6tw5OxYNvIkTrSqTlz5cBnZ0AGwIjbeIbDlkFKl4nyW0yqHp8muXQqFAZMdU95ZWUq1jz60qPt0ThZVCmtj23T8mexsmAgrx0ji3PhQ7NCLNQb3psxzQIxVFQaYJkT3brY4NADOwfbtUR%2BtXnAFG%2Fk1eJAkUovB8f%2BvpyUym6iMjRRCtmKHIBej%2BCVfiRC%2BeqsWB8PzEvzV5cZBuVlg94nWCf6dY95c%2B94XDYZu5zqIz8XpquxX3tWPWIckEmDY3yMhbS%2BampTNDGT%2FjtERDUIWj686d0nA%2Bxhsr3gRWrVxJs5Hfe9KmamHpNcyL7fI2BxuGweUCqvhptUvnQ3jJuVkW0%2FwlDIDtLvmUcJuGQCCv%2BAgN2cg6v%2F9EdGKCwRBtk9N3y%2FJrsEdbMFRGLMOvMhsMGOqUBdJLXBrX7tONcioPzdfBXpdJAOy1we0D5dmNuXtUg0zyT0z2JwKc1zWD8n%2F2kbnvsWFdBk138cKaGYnwwmLdXpyYJE%2F17%2FkG7z2pqgdb8mjcP5blic8LSIJ%2BSeqpdf1aud7fe1qoact0Ig35S2ZG24pCSFYl3Zy1G17x0q0qiG6uV97RDbfXDlj%2BJhI4CloY9zyKfwyvRPcgWd9VWRQg5%2BhL1rjpj&X-Amz-Signature=bc0372c0952c2c87431231b3713e3f63577a54b75c4f1506dda81173cb9816f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
