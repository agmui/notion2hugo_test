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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=789565a17efeed4602f77db350304a383a1700afb11f43403cb9a20bae9062f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=7e30a02f66273402f54fb77b854b59a372824d2fef22b5db271dafe06c32809e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=af7d8d5ee0262971cee08a316cf59ffd98c9f178000613a87172c76f1c99dbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=39503537828aa9b2c8888a39d3215921a2d2b3977b0e67a622723823458bf7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=5101a86ce7ddea40c2d102a06c86f10c8eac6a8630a19a7c4fc279922b7d20ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=3810b4b5842ca1515ea5f87a521dcef4c52ed9e51db5ce3ffb8c36200567054b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGSFLBK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICiNNeas%2FtEbLQIQcwyoJ753H6OT86pjL6tVTkJp34bLAiBuiVmi9fCeep4qe0vHH2O707sMB0NXaXh9ypRxH0WzBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWqvUF8Rnn19DXYrhKtwDqm3LfWBnbgIfhwTnhERdNDuKR%2FhQhtgL0AAZiTacuF3nDZOnQ6UbU6%2BcM2QkMehpaKtKTVeqf9XJ94V8gqly5BSwBItV%2Ba7e1xpTr7nQZJWMpZe%2Fore7hB6GlcDjui%2B6aIakMR3S9ldSdSBOntt5Xpnjes9h3793HSGrtCvy5IWNVJQrhZkFcIeKM5rF3SKMtlww0EOBirme1m9NJX1RFPkZlxpJpNUl6bmqB1RqtlKDRQxh6Xkt5WOJ4wFLmFd%2Fe6NCM4pRYRZxIGKY2RvkjVXMP58OU2csqUgWO8nSZ5tNeACCZvJ%2F2By4IfCi4VsAX1NyutR2G%2BLNjGQ4dPCkPr0YRX6JrEdHDx1vBvkkpRUeVkmqyUvgjy%2BMJofKw9qPtP0HLC8M272RJPUOO4452yETjAqPZnI3BdM8KerNrvZN2y5ji6P6GlLizzq6NdaJbKnCycaprI3vKAdcAQlxkLwG1ZxXuBP0LLdsoz9poMSXTuOZKSmoBRgI8ShNhflz9AAn4S9OqqkO2I5W895cEvis7MNTMTvuJE7u9OV3V83CorUGsep9CxCCGTKfK96nn6%2FHUcS1xOrQ9j2i6NjSsQJRuBzCTNJsJ6ivdensqpz4l%2B62I1N88wlh7lIwleu0vgY6pgHiz%2B4nadc%2B3H7lgApct3SNe0YFWdpFiI0390anjdlz6ashoK23nWmiu6vvB8H9xDxhac5wpS7xtiUjVTJ%2FdC1nIf956zDq3Uwl031bfIlVrjxKoQ0Sn6x%2BSO6hruvJFMhh6QGRvCHLZwKCsdxLsfxR%2FFS%2BhZMXMr4Qu5OLBlr4S%2FORL3YqCV5w85ltBn8URocpJMPyqdGB4Gva9cxTffUmBK4PvbLQ&X-Amz-Signature=e3ed8493faf1aa6b02b9db5c7bb0d2420cf7dfd5c612135c48040c663a971cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
