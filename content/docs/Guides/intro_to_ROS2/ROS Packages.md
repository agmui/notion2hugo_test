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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=124548a0a0a6d157f3f9fe7338a18e1bc268977273226f6e2ae1d8928c76ab3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=fc6461332d89d502a790d17e16ef200a20cedac208d9a17b921da0f464d349f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=560626c21aa4443409b4743d3689b89c3cc6b7536f0d86edf4cb93bdb217858f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=5e1702024e53076fae0abf3bd60a53f1aebbccf88e7996ba8b878f8c5a0189a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=b6caf1c7d1bc52ac53ce86a8cb033701bf72628df4c48f8c9bd52d3ffb8c35dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=d4ad1aa5fb9326465459892b74345a4f274327c95384f36a62f9270763200ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ETFGG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIls1WOK8lL4WK%2BimtE5aGpN2zqPfdstQrk8WMbf0f1AiAzobxPh%2BzfQdnypckS5Bd0mWaOiXcMXK6cWT%2BMNixvmSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMkPlz6vINMt%2BZdH6dKtwDGGnHaRn35Kxt%2BHwPBnxL8aChizQW4vZpFd0nhWjS6nOYYD2C2Ns5xkWKGT%2B8pjuCexJFBTOpHezNbQXGQs1rP9A%2BkAvhzilDKZlDWXgPjYFSXLtdbGj4trgSYxFLYU7N7jzKfdZjSOpcqJTaaLz8Ajy5awXF%2FuISLt5OlsAPR7rz3%2Bn1vDZAI1WK%2BKxTM4UdknU9jP7IVfjd5WHVQ2YaISmk6WPJgT%2BCaWtCKlcmYJn%2BlyMOi1wmDfa5rZkyZhLnJhP50Mgv74YAZ1TcSS8yeglKkF%2FpjJTuUXovUk1S%2F3ezi%2B%2FPoHCAiF3OfD9Iifux1XnJdNPTVuKJB4CpyChKYP9Yy39bmthQsx8c5ZNjJJ47jMdguHKNv3hcBx2R8ke9aHmIJcyLOFmHOdNHh76SpgCv167z4akDnYnC2nKTGmb3Z5zlurFHxtUyKxAK93RtscIMO79Uipw%2FP6vqV7dlThrwLCU7kR5rT0Cc1gatyfDzk3e2uIb3%2FlQtkOOccq3wKm5eJREL8EFnyVKKNnkwcnXI7m0bSv1M94hPFMz9l21JJqyY%2Fzef2Q%2FaI43fF2fY1rkR0z00DFzFZs2Yxic%2BSjHLNtdzcwf%2FlYwu8MtAxJx07%2BHtO6mA4eEa88Ewtq%2BgvgY6pgFkrKsWVhrJmgiNHW8gF3ZAYsFj2HNGCtv4Sry2WLLmHeWgOA3fLbSZ%2FhD84ak020U9dtpkp2HKeHSclTHw%2FI3ccNpSQD7WZP5MA7GjMziLeMWTj0bQxfBHu8DmN52EKnlgD06%2Fogdzf18J4LxUoMQTASM8SH1cxvAXD1XVHj6nw%2FzwaWX6OWlL32zx8iS%2FgH%2Fn1Rp4gqukgpdPdz2S83XqmWQHRAUv&X-Amz-Signature=07ba717ca591be32c390afed3a73d7c1f16012633d2fdc032d1332fc0d17b409&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
