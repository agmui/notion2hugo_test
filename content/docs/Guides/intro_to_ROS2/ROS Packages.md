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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=12978190ff753ca2a984f359de672bf698dd7704fdd71808881817cb30724585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=f6618124ae762386df90cdd81ef313e16f299544cdab7c7e3e5689d2a749d3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=94bf498780ac998b2d7643983e10bbf11e6c8aead6dfb6fb58f4e99e615e902f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=dfcb36227df39a4ec28ebca06e6c42842f52476ffa033c40ed5d6617cf68eee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=e00459b1066d9769757a81fd5b60c416c6074e79eefd8bdf3f115fb8d9e54ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=eb53ef4a673f636fcd7e248163949bdb487a6c4c9b6ffc0abdf42cffeeb1c0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3C6QY3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7TbKKjD2LAdrpDZDItTibA2tHHLpeUaU3m2VYQSVjhAiEArEjjjKwKxArYJ%2FGUzojd2MDN8TAdzQ85mXon1ZoSnfYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVtdZUTSKvHlxK2lCrcA3unfyX7eBRiCY6o4SQIi3Kkx%2FknDc4qw1ots92ccerNk%2BTUfM4ULS00ZnIB%2FYcL%2BjGNUdxTG5FKgUQvdBhO7B4jNgHAvnZSSGV%2Fv8OvQh5yP7x4PVMKtW9KNFBtyehyYUnh5DAa%2FkWp%2BKgnTN7xueLUMA2N9Xft2dKz3xU7ia7qABvuLDrHXcPjn2%2BjnjF40H53y7pzuZ0Veyl6suE4csJ1DdUdLwSoqr3QhbeWAgCc0vdsftVleP6FrXQtdYWB7rOQlVRTHsIeWRA3rIapmus0jpLZuiXnxlLACmGC74%2F%2BpJy32jQVJoFn5L%2BqsH6b4R0u%2Bj1lXpyWlsOOFSaONig4Ul2TiYMd3X8sky19X4wWc8MOcxvBG9qoNFrEfojGqUdx0HVDdvQ8ce82ymFS2LWslfqzRq%2BJlRbGFcLrA%2BjmlGxt1xqF5ZXYXt6acKAF3AT5UNhmy3Uqxv1bn%2B9hwKoT6ZIkovCK3qjm%2BR7xezLD14Eh4qH9eG6hTGUh2xZgt%2FAAdHms1jnKFvKi9H44xp2duBC4IZc3Z8UiKYeWm%2BOX63V%2F%2B%2BWbPYDVn%2FuYmE1T0IufstMcsMVxGM%2BYksdTAM9FM4YvV0IxHobSMft5b7sa5TJ74rGhCariY6kJMPuP78IGOqUBcQZvePr0ZMOw3e73vADX63xA%2BnyFPqUBXnB7PmZX0HhKtssKD2RA1g113kj%2FrpKWGPGQP8jGZyrKjutoF15TEvMF3obcl%2F2cGUfh2vd1benF0%2FYC%2F9hrtFH73kkrFwwOKPg44xRJE4QYtkk9TsE5THNnEmMsxyfqFRZFC%2Bjkk%2BUONEy6jofMMvc9EdYq%2BsDxN0GBYB3xWV1blIPkSTUg1Y%2Fn5K4M&X-Amz-Signature=935397b94aa5825239a04858efa0845df8c544b4281e84c7a72cc519a70f5557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
