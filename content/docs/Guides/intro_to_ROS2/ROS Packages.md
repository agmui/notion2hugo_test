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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=61e46fe64706d35b6ce0c7f776c275a58e2894d5aa0e018abbd19fcac913edc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=2a12079d379c33ddcb08517fa3052742feae0c050f6b8af09acaa7465c83dddf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=52128e09009bc2e50a6e8cc0689b2f76fe9da82a1e6570eea5be98e38478a967&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=ae27c183641fce1d8d0132cbe4b5a15a488213708057c6904b433dd809d2544a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=09564413ac7e3e644a7a19ca95acb14567201c3defd07da20bc22ac7f715affe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=292fdd22400a61d1eed45e9c2a6b3223e85e33fb56253828927f2b55e3c6aed4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=dda83c4faa5ec4c0577d7ad0e49311303e397f68be6255fb3e006fb85fab8bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
