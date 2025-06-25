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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=6a9c93821d302fc08494ba940e187ec081a6b23bc8339ff9946ab8910c7149c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=81c290b73e80734aae9a9e43a2aacc0bc4c0b72855a3571c535e5e6c7c8211e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=0ab6fc909ee1d1514d2e2bb458d98965c1e5f73765a4825006c96ea44dc8539a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=0f6ae186111424fc0279859acc95792da1548d950b0662981518aee06fbcc778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=f51374e0f1754d09ec98dcb911126728126f6a9a14ff9e4a9e994ed6ec628c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=c653e313427de4162278d3743e4d86c8ff860c203f98086d216499ea3517cc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QDUHUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCxKS1GnhUy9Bz0AftzuF4fRdvhrqAVgXjJmyz6hZm2iQIhAOutFIAGNkuRG5JI4GICl4jlUnq1%2BhEkwF%2FZWPGrQEWWKv8DCD0QABoMNjM3NDIzMTgzODA1Igxr7HIWpEe9LPSBDAQq3APCsqbWz%2F65Dw6kNst4LDHrZ3TwwK2REfO3NW%2FRCUo1g5hTJ3%2BIYuoTT2cbm98wef%2FMLTVTpgCzXUtiValKzJKvifUFXq8g3L6rcsgsttnO6T5TnYGSstFdd7ivWJP1xlm0r0%2BOgHKzrxzJg95BYSU3P7DY2sU8AXFc%2F89xX5gM2I69AWGJOFvG3XWgv0kHlyVt%2FGDOjXJccPPuFiREpNFdenR2ZAALojjF%2FzQIUWlxqnFpKOUxowZT4WMqe%2BXlTk%2FnCFGeXlN1KojydYw2xlNt9xgU31lCnWqDpeUmjsSv0ptc2gzOuQPXKkgJu3O%2BlA1WXWzMyfU5U9aqRfuvkWjvEEM%2B%2Bt32okxZLvZvOtYFiZTvFrjhw4xfZMrRk%2BA9X%2BNryG2NIWqisPakjZw47YqDsgPudKs9EX8hg2OaY5il%2BTf0d1%2F2POHamhAfahfs6aolLYn%2F0qViWzoFU6FXuSAcZPjwCr2EOLRPioegEeShacdoPjKbN%2BpPKxBeljcrMU0AhT7aTiSKhwKb75daGLZoCqH%2BrOgNpqccFfRdPTJk8tU6muIoZCog2%2Bvkw%2BurV4kr2BXXUfHflhKt%2Fp7RMqtlHe%2F2PkR2vPUzaIRtRpJTgnPlr3hH%2F493hxv%2FPzDq3O3CBjqkAUQ72xe03R8M6f7G9xqG851uEsu7SJMLVI%2BHYEy%2BxSY9YBB0Sad2hOXzUWe2%2BAF8q61UgbrtUWvneFbwE%2F968EhOfH4tNEn6ZxyWsM9l2UTxEUjdRGWPhQT%2B5XgTvU9XXP1uTwKf42yMzhXtDJ79dlD3wgzeDPomA2bhd1Rs6DxBNoDZLOodNsummvS4pkb87lyEk%2F4qvo6AL6g5BqgNoJ4aAWv%2F&X-Amz-Signature=eb69d800cc3be1517059b48e943ffa94f1829b9876b85934eb6c698476f5e4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
