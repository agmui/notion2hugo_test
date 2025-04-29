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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=a80e3f4d4364553e0df15c1847ab9100c048677f7fb5e0f03effbd2b4c14c7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=e7a58ad99ee5b5df3246e72ff52d36d38ad5660ff692152f1a1ab5edca14d6de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=e62eb06a473e5dd727a2cd031f03d15cc16bf2df5df85c225d8ae750c2863c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=8c60af9ae1ad3cecc5cded6d0cc4e8e101ee322244f638c4f73b2d8e18202439&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=408b79ec60f00738e1f6890e90de71f5e0e768d5c379e3e7d0798125c33ed18b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=e37bd812abdf47ee8b003ebedc2bd9a9d196ff43e41c7623be6bbb57508098d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6ZNNZJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXFLfmyKf%2BQ3jgXxgFhctR6HamW%2BVgOO5fK3%2BBP1gJgIhAK9azwymJOZGmwGL87xn44ZcSRWocpEMxEYwupBDgR%2BvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvp3tkNYLe8%2FwwJBsq3AMd3n1On7QYcY8idVg%2FdcGp7cNTMAC7rnHgsBtKPvxDH88%2FKuidqMRupU8HCB30lxMNAg2S2lJ75W%2FcZxNiAo2DLS8%2BGB0Gyo02xSDXltUeugECo13Wv%2F3llvyvHjFp4q8UzORCQwG%2B4U5fdG9zXRP4r4rJGcjbaCtBX3pzBsNkhF5iZb4k5iJbTcE5aqp6VsWm1Ua0tVa6%2BNKtL5M2xFRtH3BtHFxDEHbIXFf5cnzus87L1C6gdjz4NVPnM8xNq1DCbsC4OPzTMKutVq2%2B3FsxFVNXoxScWLYS24ZsvfhzhLPiVi9zqBpWdXn4Tk3D%2FyaYayZ5CECa3meZcug2MbjFHUxIrZLeJ7WjZ1U5Crq84hFPOy%2BiuBKAxPdjwJZ%2BmujDQ9Z%2FselhYEocgz9fFfzmo5K1uBHQU7Rfk%2BFs9Q6T%2BpRffoWjKlOOaodee2oVzYCIGwbniGvagqzlicIhgpM4mesmPPr0fzsAHH7B7IPjYJsixRzHYaX%2BSJ0jwiCWkgUGHDjfjfn1nxJtgrfHPMQAXgprXsc67BEZ%2FHXXSMLie1jjo6cd7GXxbHAT0Gnr8Y88%2Bm5FLX1koY%2BTScAJ%2Fb2oH%2B5nBYaILE3SAjF7VP3XFk7tVe%2By9zSuK9Pc3DDq0cHABjqkAXkTRlGFwLs%2Fd4EG4BWbicRDCZLKXlTu%2FBYE8floKe6r82oCZ2WhC%2BZnV%2BdMZYfiVTg1LRRlFGYGAoSOPJF9vXpB%2BGnGaiUY7Oa75jZfFBIZfYz9swiDVfLX9YBER5Jm3JXFN%2F4SDz1bS%2FkQgtv5CmUyyEo%2BFaqH%2FWV0zn1YbKVS8v9BU5tGJVvIRP3QGIge5iZ2W04Kv8n6Pbuz1Q6ixbRsPBMR&X-Amz-Signature=14d716601e7586759623f630de832c455faf5fee0f17c0770064ea62991f99c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
