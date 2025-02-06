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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=dd48c3f8a262cde9c19ac9a32bb0a0b490cd5711426ac5590cfc36718828f24b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=e5f956e35a4b7141a9f099242aa8f00c2d245de05650964b9bcdf1b4c1b0679b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=8ab3da36964b62611f084edaf0b6c5618db5f9bff71ca2e10a5c59d36ae4c5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=66316306e2940ef33f964a21f77c64527cc84d7a9dcc66bc5fc2ff70b66d9df2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=d7d097c8fff819e3fed41bd0bc713ff435a5fa8d2dba3a6fde09f8e5fd7cba37&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=ca2be94bc57d28c107c1d2f7a14ece58335985baff0393452c073c8947327c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVFTR7G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNeLtq86AHHKE9eNt33guhN0Yqo3SRAstqdb9J%2BUb9agIhALEjbBkIJc3UR4BPWnBUUm8yL56smFqKJb5NuWNUO6BPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzXvzGHwirahUAiK%2FUq3AMG0qfmBigJogozGcjn8YhEjNuIYNIbwfJvdJUfHTaw0mWGVGeko5In4fiVDmitAIpMX20TZClnsVWHuNnSJiO0xXGcLdhSelQkJU6EynYWT7SiHB0cgTrWEkZya%2BBcH7qJolhsK000C2sEr3PwW%2BzcDgjlMZY0jYiskOyPzLapmPJqZzAQFm%2FmeoFnuGgKEDXlMJH5DLGSFTmJNCcp6PZzlshMCemBiyyzEZtc%2BRd0x0X7JFnA5fznB66BbFHt6sdfdPhoKCuyT0r%2BIgWcY7XIM8aQnrA7i0f7vlyW9sbYA5Ra6oODfZ5bzga4NVtgyp7iXQN2TwV3dAnzLmXHFbYNTkt5XH42Xn9ZOpAlejnlP4r3xiEgQ6Qbc%2BK6kDNGUxrvfJLM1LTjC%2F6mIoLUAVlK9tOZuh3cfa6XAE7t05cs4%2BdliPR4TG0nw9FaMEhp0SVTRGkzIlRh1NFjqyRk7SLsIGJLrUBQJukhOt2cJ4wmVwV2UDeevqCTuwT6nZjKITVxWTZkqKreP4dz29UwHRlpXZz218OBOB%2F%2BoMK2ujOOrBajqOEOw6j9%2FxMJtQz5DKCsyRBz23%2Fu8olGkkczXExszXwHJYKoszth4NlS3RM1UwM%2Bd21MqNINfjNVrjD0xJK9BjqkAUezhJQPbAIAR8%2F28iQnD6%2FkRaeGPUC3zG0rBRJjTgY%2F8Ttw%2BSlehfe2C3%2FQp5J%2BrR5ueFgI9F8tiuLHgWiOu6pGfOBIjwl1ViX1LwsCz0qXKqAS7yFISfBYON5hS0STAB88b7hDGVslYGUtzVwtjj124XHWhKWBPGcGL9j4ZFCDv6E1Np09ogrijlssCZYpZArCx235irYV%2FsaIW2YqY212o7cF&X-Amz-Signature=ebb9f528e46d8bf8a1f35b645651ff491b20e9b7c3a3252b5d5b1b0d9b531552&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
