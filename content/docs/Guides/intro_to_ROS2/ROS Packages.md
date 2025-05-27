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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=303a85036670bbc5d29f1f7a6d573eb9e2d11dd28757ffe2988ef7e36444953e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=64b2c7c8b4175325af2cdb21f2692527017afc7686502000542448ae92e1e735&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=0b91a2528099f325900de3da24087f2bb440fca42618a8b07692fc79aad7eb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=60e1fd6bb734e2fa8bc8e4b4bf10a77df2615b94ddb98144c1a446d7154ddb54&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=da696c4313473a1e301f9bbac7140e9ebae71866b05619efbf57c5a74b92d4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=5a3d286d9777516a815e4033e84c856e5649b42df05b48ecb8c4c2ae48f8d1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCZD4IR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvL1nRtu%2FdZUkBzHhRfGTfTEEuVyKsrIcUFjQQnRdFfgIgXX9qChMJqCe0Q%2FlTAE6pRerGgn8RhaX9epiKpyoKsCcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA2AR6k%2BjqFCOPPeAyrcA2E76rz16qN3zABKpAIzVgRTaTMsAw6QjfeEs0WF8S7YPCuOJ0Jl179npb503JXRcvjSv5pE9qzeRfdvw3GqZAlA5TVpRm2Lcd1EX9%2BpykhH%2FTADITSBmvCUZ61xYuUV7FT8F7vdTm%2FR2j78DleRLnP9IPywp5goj189qYdna9s4vjwQnmE%2Flr6LN0RZhr3VKefnr5H9nkaLRym0ERXWkca59LXuENF1gLOgJoIQCClvuywAOYvvJdiusC%2FUC7XW2Pul5XJTKnuFoibLNxut4gIt77UyDtlYuyegBsOUJgt9ihFXp34MJObSzIKJMdBuMbTjhAikcw%2BUtfFRtFt0qC2JVhqW%2FoXsMrwmcNKIOJ%2BnM5I%2FqVNyFMG%2Bc9El%2BhdLPpmYclKtmNCR5JXBcguEJujjgGU1vH9BkXVRL77OCylTzoetrfZJfHc6hFrkzMHmbiAFT6GFSpOw%2BSeYgb3CNy6%2Bd%2Fv%2B5hd1AwruYAWFi0ZXaPEehA9HB3XLblLzqmXqTa3nCe1gxmfD0dMLjR8i3obLAQl9VY0n%2BPj1ZpPqhLJel0ybbyJ5Bukgn%2FcB4K3C2r1HhYEmVMVXvdqEFge%2F25689DKpDm9GjR88o6wzN1XpMW1AWl15yqNfPd0IMLTJ2MEGOqUBqLI8xEJsUf69LCEI00YyL5hWlYAw%2BTjyduKR6OeaHBVj32f1TZshIC3XKTe0Y%2FhvUfXsq7sqqfWlYN%2FpYg3iNFMmuaNcsWZA76DvaH99eldjQWTgdrkQtRXxLwRgnJAqHL%2B8aGO%2FHpXx1FGdqjW5cB0EaqyB0fea2xmLI88Kolmso6FDgpceUDT3R6p0osbGAFbqP1244fhZAMFU5LHE4XtMassv&X-Amz-Signature=41d64102dc5cf1afaa9e0fc194bea05c4cc992a6a3298c8e5b2e92209564d049&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
