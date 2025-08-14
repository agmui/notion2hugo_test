---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=328fe98de98df58605275e9d98f38fb23f2ba91c73ea522e6b092b6fa1d88cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=1f158dbafa341f1612be6206849f008cff2977ea3e0cb8304510d49449e60a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=66c26dbc30b7b26fd50714f3f9d8000153376a82f64b0d86a5255cc408e0f831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=dfa73d13e6369b4e546f7a905de42a15e40dd46e9d2afa20c9097ec98de4ad44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=a292db311181894df1a1683f3e1af35d63644c537870cdaa28012b939a57788d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=faa4c9c5f6d8089c6314ee50c62f99f07fdf8f881a248699d485bfcc077aecfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFZAHZ7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxpIae7j3ptDHdLpWsLWBigsE3DiUxBTTTUBKA%2BjpyAIhAJ1aBMj%2BWixqogEhgC5jckNBJgI5rTaBW2xKxxToUcFmKv8DCD0QABoMNjM3NDIzMTgzODA1IgwvJ4%2BjR5Ty8D3vvTMq3APg0P%2Fcn%2Bsdtw9rQ180FtddotUGjjlsSVpyGf75ViBmmt4013Wa1zFXRQ5fFSfI6iO1fWANP%2FudpaDbQ%2Fry%2B14%2F5iuFfDcz1p7QvTH7ggD%2BXk0I134SDuVyhBXKtwZgU81MEkumbjlqkQmPHdknzuufaiSj8ZozRZ0TTFShrhScyRkbTStpdptMtFWsbddDUm92G1adjzrZHulsJ3YWVaeB2zPVYIQc5C1ja7v45TbJwQT5MLGjf%2Fsl7zDYQletSRkV%2B2DNWlVUG2yep51GMOwld4VW%2Bmnh6vyKjjGLhizSsZICxbON%2FFn96W94R5qO0qEZGvmr2vV5SQGoVWBbU%2BwIjzJyPO%2F52eawKAelXkBmKT7jC9QXfUmsnwR0MDplmGqL8S00vYZH1xo3ewkKWKvcWsNhnz1qiOPAJnwluIpqUkvUI0NagW7AP6N67Wnvh6lw3TcTo63EeThYjyvHir1NV9y1gsBNAuNCJgKoaqiT0n6HDgL3cPxKdl%2BjGXMXFgB0WOBWrj0AIwe6YjwJ0Jz2QviqBGt%2BcFmaVc96zrdGA7lVgb4M6SC7lB4YokLz7KkZJeooc836T7hkbae7GTz9zT563S8G9IVzerGOBnvGZI0OxeK6tQxzlTPidDD5uvXEBjqkAfr96%2BgntMQL1nHRw1cKMhl6z8n4SjxUoIUWQi6YuvGIQYkL2g3QPx%2FAj4bdp4kHfhh99bZ4UWL%2BTvEpEE02Vn8w0WqkK6tEhtsjTHDUQkkcaNVlIQ0XBD3w4xtirlj9U10iL3Cq0%2B2%2FkL3vyP5%2FD4a6jArcVpR6Obgpk9Cr8%2F3F18o2MVDoA1aFOtpmaVrKWLuLl3rwC2JF3RPzOEPfbyVx6kJi&X-Amz-Signature=3b1363106dea812be2be6719b497c6dcf85ac8dcd2e0aa9a8b6f3eed7297172c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
