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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=e0c1fe79c24ef0110fc2ed13cbc97ea8f7e6ade3c58c28a8c892625081db3846&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=e25c4973b2f778baf57807bb9c05bf24f70b01dc10279c9dec4d1ade9e012d46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=ab1d90e95979fe981af27ed1a475bac9623f366c742392c526db5aa0aa4e6770&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=62a2402a3dfd296edf62c0091136e757389c6b54508153aaa4b47e6078977ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=251c8e019be777e81f797eee31bb1d1d2bcbbc29ef9abc22edf85716c216b0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=c4786b601999379c9f4a6ae560427dc3ff69528c0318fabc4669077623ff65db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL7VWNK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3qtN1LNJH4%2BmVWQSrLJcSAqC3lyEqSZ7%2FhkSgIpL4wAiEAwXUgrQ1mQAuQ2BcwzUuGez0Wd3yflNiHsp8YKLR3tf8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBVYs%2B0mLY1vZdXJircA2LwcZ%2B5d2JnAEmJbr73W9gu49Ila7a5nTs%2FnLZVp8TjSkjyS4qbH4BLCGuNAa1p9JXktCms0pDF69OHh0MQOmabagFVylUWlFynFgpM21gRLAScIdRyE5AS2cjw5k%2FyW9f5o5SrmFK%2FPK0FeH76zczwDCdj0e5Cb3QHK50TY6gM9hpjkWfzgqmlLnmnhU6zMqcKs6R6vXsoagCDKzaH7vNAbHznyuzpw3Vx0S5FdxyZYCZIFtsxezbjLngU11LNsPxpwT0J3IbmQWWDZ%2BocSrrUppBOK9jafVhC5VITOXHAWzL7fsH2%2FKPiIjLxZOTJUxyT1tei83umO2axWe3Q%2FsqpdlRkbzzHXtbWoRSvUcRCjAB%2BusLNLw%2FCZoHxaMEjVjB4A99UktGOqgLTB1ph%2BZzP6EdGHvqQxu4zOfe9EELgd1Nt87qUowITRzf%2F2OVjF%2FA5T6gQ1UWygkphBG5EB%2BUVk%2Fq%2F2iGLJgWZihHoYxpFYZ2Xw8JW1455Fa7ZxeSRIHbx5clFsXSRIXwE1fDKwq9LIFCn1krWtHt1CZBW6PMAZCSTjbjRnDdAnBZGbeTg6ILzcqjBpwe%2B%2BjuEloyyCS%2FnMP6dfRZiVwwLD8mV4RDrDPVRKTOnO5mTZBaYMK3pm74GOqUBOFtlfhZOpEauAMReyVEMJQ7pG88dPn65xb5XQ5ZJi7PKdimSxf65gKMxuGpru%2F5cTPWVR9LXEhPJSWjJXfrrjsdoESIkr5aFGodNQZV9QGRpnxoTAQ9Tl%2BPdQ1IskZnTtdcq15ElQ5nhaSB6YE8t1zfydc4lO08AotdtAnMRvybCMyb87a%2FKvKYg1VUBXY84pBaqo7bqGfk3WX1jUZH9yB92asp%2F&X-Amz-Signature=ecc3442dcad98c0425ac0c2e850d65ec5943a6dd27dfe9b0e872564b1c424988&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
