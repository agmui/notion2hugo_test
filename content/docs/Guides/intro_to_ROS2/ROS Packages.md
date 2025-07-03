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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=82b766ed90b6359149caa16238395285f5bc7627d44895cfe1ee92dfe290b589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=e8957c8203875b2a293326076192b854183babf0be9e72213f2c49149b997886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=9c247b4071d4101b05356ed6d67bbad58adcb37a7ab975ed740e10b7cb11506c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=7ab31bc0da8f292b2c515eeac37b3b71efc81c3a9e61a84b14ba2078e7632f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=5a546a3f041004e10d4de72d34574a0e36f8755fa663c6ad6af528b7a82aae69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=543f33687c4728c6474b3944f87f443ee5b04c96f3ea55bc9f5fb13e979a848f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM76YXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCy1%2FOoIdzoPbXdU15oUZFbicJZLgaDwsC%2FVG4XS0oGrgIgbL7%2BS2px%2FmIL8oe76q4Nc1%2BoMhfJXY71qVxAvrbSKCgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLI7HBBI5ecGyWV0XCrcA5OLwSLlA6V4RnxJBTGIZI0hXqAcURHSqGxr67Csmn63aicsi3qNlhx5ocGl33VdCVm5d3OK%2F24n6LzpjBK2xZJjF5Bj5tYxQw41Q2moDko3Xe%2FcJBJ02uf7eJ8Ekt%2B6UeRZ0i8DUvHKWSGC%2BZSSz%2FAsWIxjATn3648PxiLxqGQIfRE0ySgsoRX%2Fc4EB6Oa8jfq%2B9LF4kZeTe06ilBamNRtsmldCh5GRdpTHv0BUwx6Kzd%2F3%2BkShaXHOYgNbWJx0q7V6YgfD%2FmN1LSIkpp9R0sd%2BC76tEQIw5rmdQCt5pfzKhzUqmEG%2Fwb5n8Pgh%2B0qpv6mgqd6ntbqyvBDUEevuRjDyTYl4Xj1nSUt%2FTBXSnWlz5V8MjxONNu%2Bykx%2FwRgFqE2j3wA1yGtMbB9ngudGXSti%2FkGRJQXXsb2BVK5YtP8scWSKlnzxUYbixBH9j%2FSUqj9axamj88Ug01JIjGjyL8NhDBLiV5dk8lnZMmbSonUhLfzlbQBFJa1R8rCwjcP80QzAD3Tnu8yYl2754jzoJqlGtw2Ua%2B%2B5A9K9NnLqX6sdkED5jXzdVybMu0hWchjpw63DmpMp2Aa3n7SiFjsWJCpJtsag7wNKhlSg6zc1Vy0afIrsd6P5Ok3Y8WTD9MKm5msMGOqUB3boqu3fvXG6r0XBtkUybT73AQF3hLE9mdg6c5GPGIwC0NEdCn8Z%2BxkrbjtQXXylau3xnp8SsQC8VYkbSQKtVkmU5wi86QDfs076NBa48gXnaf4AAmZUVtMw5%2BQokGLKIv1uqMXLReXDPqa14Zz9qLtdwq7rGwEJji7a%2Fod4Ps7%2F63qySBFzRfihh1oP4REPQa0y6fx5zN0nARQyn2alRgIV2rmrg&X-Amz-Signature=5111b0873dda9e28ed868edc8f35b9d930a2ecc7516c3893d4004667e74e4f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
