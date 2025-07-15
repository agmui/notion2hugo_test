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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=4bcc357537306204db84ae08aa4272cd36f6f15da872938bc46c75bbfbae8859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=db574c294e8654ab5a326ec3e80d462ac54677ee313c2662a0f54902359ee8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=68a4655f7f755ea9ddab00189bc389d52c3c37f3459ab7e4608830311cab64c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=79c7a5b56b636429ba0258c90e2b3b4323f7adfc9c1c2774aa61c8e731f235f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=da7dc8eb2afaee0b635680fc176968bbe54539e7f11d6f0b5318174655c69d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=bcc891185fca49b27706b37a381521fe117175085db1a72247042b207d6a2a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJYMIW5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAsd%2BsfZ7%2FU%2FLQ4GwUek6Q9BWsESfHqcDVbfqEk48NyrAiBhi5sQTmnOZJlz0Ez165K%2F3Wt7soAQQfXHFNDIYKHW%2Fyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkQC7imXAoDLvp0LaKtwDh7WUxlBz4X3RQgw%2BOmoWC9p%2BNFJ7ee2ZJJf2eueiwecOZsQoVs4h0mK5OagcBcC10AQU%2FOps%2BZb3FJHMa9n4c0LxkmTF2TX03dPe2%2FqGBxj8rzRDaVBOPZaDXaWlJYpjaFAQViDpSGHcher1PKo7c89yR2fcJ0l0ckC%2FJ29mMw7ncEN8a4T4zPsEnaCvUgngTa4vpILnLzj4k0XFrS6L21UFgoUsZLqGokRIYi%2BA8Umx%2FvNyUeB4LD444aAEuIU9lCvP8v5JMCZKnzYhiFTw0u3D28O9vARMVX4K5E91lMeRYC5qbkKW2QrBQ17d%2BPWrmtomJOK6DwgCcjoGGw7h9Nh0s85AEMVaRRzD2FvHWPax2sG60TzLxpHEIWAJSsq8%2Fix2NpeOdyoo%2FtFzADm%2B5rGasN6EoZ1Vv7dOzd6rY%2BQIm%2BXwDMX%2Bic7UylJ9clm%2BvUfzfL9jNKc3%2BbtwqfoPJsYgD%2BHZYtPiAkKJ3dlY7Pe8QVmNG6V9%2FnziUpPyPeWX33uk%2Bq1tsJlki27vzCasWiQagMrlVeeD1gNMZFfscs8OAjwY0XRkHza6EXRosrUB8ZYcq9LjREsLE7%2BiQuI4W8Geg9qDs26RL%2Bi3SKlHOfZAD4Pxe3ruVlZzW1IwqIbawwY6pgEyMjVEkYXNmkFpKczcfFBDHIJBZPyvV9J5CyFbQ%2BpOzuhRuwLWW5ukqbM8KvlyymEN0aqMqzh1PFhObjWhBkjyUU57wJ5UuhiTBuzKcvpazyKlEkV9MKaaz9kpnTYukVwXuoVacCoT7gTdqPJsvV39zQffpmFleB59VuFFLpo6RNMCtnfhFpArjM4JBlG1tPb9rTo%2BUXrxRFjlxD%2F7J4vv9tMNHdur&X-Amz-Signature=6ce26623240cad4e06fddc7c97a0da1d6e87bad4765c8b3ed5e23c4a9a63cdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
