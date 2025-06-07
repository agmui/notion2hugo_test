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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=f408bdadc12777339ad7ec37545a1bd73025de3743eb94ba90f3596e66aa4e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=77fc2ea3c30f622426bab3985f52e45e26cdb29c736fb5e7ccff2dfcf50fc8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=854bd2eac93d2654e10e0660f213fde26ecb008ef82f270dd61142440af065fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=96abf5fa6d2a80ee95129ff4bf1c6ae3244b4203d08776a5b617bb718671b98d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=ceffb4505b0b284bd60a0d7b599238a4f745312777f3553b5a54b1f77c4dc301&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=2a9fe3906240ac28269e3e55026e22eee2607889c03982531e53413e40a39057&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=bc08a2738ffd3102478627a2c7e064f0ef87cf55022be029f8241d862da9402f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
