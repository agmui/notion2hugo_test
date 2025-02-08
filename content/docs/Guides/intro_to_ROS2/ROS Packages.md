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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=3d63471c929b15b01b907aa81e13e98648966d1ad3ce0760368580b50f87483f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=c7759a11c2ea1416fab56b6f3880b7a01b537a73d75631379e7361f57dbf7ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=3c0f879a8de94fa9140be7dfb5f605a5a6a4f23dc0a61d0041d02198df03c806&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=385f0ac005735af05cdc3748c2fa86aaa2bd0fb0ed27d1667ea2bed568b8f233&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=dfc8140e6877ef39b56d7389d44017fbc65846121257c4e923973a43ec2e4f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=df29eb226d47dc9fd9549d61243500b68e477a1eabfaab79e8a45b93f39ef95e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64634SD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCmYJfVuUR9JLSdOtcHVQvm0cvCaZxJE0ZnsN3pYwI7AIhAKmopwri5JtXNRsziMhoTCvWMFb3TK6bOKMxd59zBad6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBkmqhlKkc70n2U0q3APciPyO7ZOs9Lm3SN2TXwQYFklZgc8%2BoEpq1YAuLT0CpxKgB69fXygARySN1dNCmq2n0Uv7do0QhKDPokod81%2FvhZJWVEh8Y9jfODLX2nCP%2FZRHQYoM8KMhx0Tdcaa6zCHlovO0f6TcZx%2BMRBMgQfkURFCSWZzkM3iWl3PIidjgk5qH7tSFy5%2BUVeHRgH5SxUnx6PmMNbvyvq5srIZybxzGjbdx%2FmBalpjc9OQo0TyYj81QgqsBVOa5FMPmgnoF8VsywialJtx7blpe1sJhjym9idNmS7dZDcgKS50QBxJerYI%2FrU0rVslmv6Te7TmCeSmjcEHljp9JSBZIbnw%2BE5XcNeMxGUVUWtYRvUbwayEy3SW492jM1oFHdRLIhRC2X40fA4dTfLZYT%2FhIer5FPonEaCyRq6SC97BC%2F8WTcU8RMrcpiHV7aCfrSTi83DgLxp5PvNUWsDUo2HqI%2FFDsIv5aPmAoI1vPnRUpaMkuRmIkdP%2B8Z1tka1n2Kb3bOb1m210%2F7dVG0NWEXhnhdTzTWXm45%2ByoMKSLIGHqw2%2FFyGa8rh39s%2BkvWziI1dvn14lRjB2MiPYtogvdgzPQd9HU5sMjDesG0g43TqmuEQxcDW1h1gBJiY2wGPcbSE1kqzCD4Z69BjqkAfDc4440RGFy7TDHJMd7uo8u00OZNC0THGcpEViF4KHzrJoxXid4%2BCFlYqGJGXv7mhynAazcjkMsi5rfnbB%2FPSHhKqo%2F0FpkkMYJA6gnxSTy5ieQzKlSSo4YGQoycScmN%2BZRrMVaKXw5PIiiwnQx1NtFVcnxVkQ2sGwf0MXNbqfrQg5GfxO33BPIJJzNK8X7ArPuLwETn%2F97yliug3ieoFbWHQno&X-Amz-Signature=e8d5e6dbea30680aec423a0fdb72dfe684c9c57028864cfcacfa65c9e97c670f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
