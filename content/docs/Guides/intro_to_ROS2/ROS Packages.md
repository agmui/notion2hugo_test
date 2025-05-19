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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=2a3f6407909f9f3a5c2f1a6a0cf95a666ebcbee6590cd8ba6e45a9a7107df9db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=d2b37e77e82c08d8eb85a52bf36276e704869fbef02671577bc3466d7580ab13&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=f96984956414c179961aa95ff654eeefc209cf2269e482685153c74259159c70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=f1e6dc605e30ed478bfb1ab13aefa4a7e85d2b9c611e0bb1f27347c6293692d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=187fc9ca0fc5a45c84739acee7ba430d39d9db8cb68ab5caf8447f25dc798816&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=1bb2647bc7f67502969bba56fe289888502c7da88017d24db7659edd275120a1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHZQKV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZpYpLAiDxIVySUMXJFqWl3Lfsgh%2BmdcqrT7AqhDnegIhAKNYFAbn6ItAIOis2eQQaPgKK7KbBvtDqgZo9p%2FXhoRkKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8sFKv56NgdP8q4q3ANEyc3cLvZ8%2BIoNGajYiDpVdDJMxxPld6C6Jbhf8fZ%2BoFdxu%2BB1flRtNEFnTYMGKy3MYmVZ20DKXQQ4LsjZgn5eqBmb9XCyvxv8WeR0g1G1rLNtWsH1x8EpjunMyYhF4YPYyBR%2FfIAQflVODk8VnLE6SVcaOUUa063%2Fmd8%2BWBrV8elsdtivXUWrgV10lTuEwKXhGRqY4qVOi8DAnD9i0gJem4xnIWmgnEiFGpUDenwqaVNccHbpWauBY8bWMSgaD1kxRmgbOLX%2FNi6XvJlTYQ%2B26wAkZXvdPUVUeu0y85GjCScDYyrqSwnmt4Ou33sy08GYpf2y0vAneJlBluJzLiV%2BxeaI4mCj%2BrJxVTD%2FqXXRNgVLDZWM1Yrkr9yg6RySx01jXrBrk2vzReWf1l4LOCEgNE%2BbQPJFbyei1pxrLNZrYf9NOQV7gV0LPev3lqDdFA6hJSHctVrvSQzIw7zLfVYVK22ouC4CIIJEAJvSB8oDXmULO9a2SeOlRhiB0tiWJuXXGfGaPitJz0nCBGp4EES%2BCdqNe2QNZzfrI6LrHUHAFuPUvTGF1Q2jizEH9nyBmWeieN91saYo8tM3Kshw0oxfGrYuIef9sWLmRhBDdGYxHXMgnHATX9k%2FwynfKDCFsazBBjqkAfCjjMnEMZE8VJFcfj%2FErG%2Fe4Oyjd47g5EYjfeDlpegne6o3lVoOD8Ed6MUTYeawPO67wiW6gpEOIpBE7u%2FtugrHXJGOXBF6Z%2BzllF7anTqJGzXvA2z2f41UdB6ctrCbb%2BbVC4%2BrkAFeGdcVWDzQwByY6SONivXwFk0uaZJ5gIrRH0TaErJtDlOIoyoh1BkV6xCc0G7k8JH%2F%2BxkvOI3uC2Q5ZWmj&X-Amz-Signature=1fdf81b59ef21d5d336f9d1151ec5257de813fe41cdc6043cc4cde1ebdbd8235&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
