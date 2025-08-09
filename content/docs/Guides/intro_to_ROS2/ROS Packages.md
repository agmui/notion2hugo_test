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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=23e984a8783aab96f1cea72d8d3c5b2c372f763098a096eb383d7b7ffdfa04de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=51df74b6c73ef329f7c278594c4d31b5f1e9b1e2cd46a4cc317a182ad3814c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=12ba8a2a87038325220edd59f141d1959e23ca6d2417464e4940b1ee395ed182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=065069651c0006d16a2eb52d26bc96902d6b97780e4c269a55f6e3861d6a69ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=9320668499a62b66d9afb9d91e94d90d5a41784ea794ace5cbce88fb5f0370de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=b06fcfd648c40c60c853554b99eefaffc05c4e515e342b515445e2c75097b958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7MGZ3Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yBCAs6yfYBqhsWA3K0ST8v6xxOPy1oQbly1xehrLwIhAPnt916eVcTreCO9YLEA5fH3PoVrvH3v%2BCxr0skC8NyaKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSU5uwoJ8XxjDl8TAq3AM0syV%2FZS3vgb%2BxUd5vpTNdrwL%2BkQ6%2BsunN2mnpMh8ikZiauX4Fs3xJt3eCvJ4Yig6yCGXDXfcdyaHOog%2B5ztO4UTnk6uZwND7zbXBJ%2FFtlTjCb3hf7jbrjm7yrchCGNhVdrRfeq%2FgfbvZX1T6hvRzJJAOrQZhGdUQTddCnwShnFEB4fHs2ZCeD2KzAMpYlVoqURl%2FVQOjIc%2BZM5XWmJk9hCFwG8g%2FpN5NlyRsldvGM0n7%2BqUjJakHljlWGeZ%2B06s86xVViMpH1df3sRKMJcHmL%2BPBABm40WstDVceKuRGZmBtI0l9viiv6SkQ0w3q0CqN5MfwcYkMhar%2F11AaS86QWZrdcuQt6ZeNA%2Fr2cmVf0wK6lcQ3Weoa2MgLD6kr2PIySmArleRTkiJlVJlRX7PFGzJJ5EPzWr8VEjXC9kZYjBiujSUNEa7H62oTMHQ1x8lb66vP%2B05879Wop9D%2FdxbC5DTIdvLkJgo3wlfDYhmqDXlY2Ia3MW60eOZkI4FcAp0N8TmzAfPlZZMTzOtUvIcwQ2%2FKvZXhzpEuUakXcpOOfklNt1iXJesKc7WL%2F697a%2FqCYf0cOGZCIk%2BUbsXoA5Ds44TZX1pE%2BfRFIMICeAShfAAHmc1hcclcmxAemDDChhN7EBjqkARNnuOUkT9q1B98xqH1bPViPV1a%2Bo%2BxYtu%2Bm5jQKm%2FQbVt%2BVBroS3sFSFJvKuVoUSLGfSRXJieXtcNZOA1dD%2BOEWg3YlBN5dPcYbAabYCU%2FJl%2BO2kzIE7laN0zwavNQv9%2BtANuE%2Bie2p3S1YssQiQnZkMgpr9jPSOevDgrmpmyD0Vxr4n531KIGfiQAR6IJ%2B7DwQq%2BdpXMvdz%2BFg4HDgdRzENeXb&X-Amz-Signature=c42158434c25723c58f1b7c4ab87300f6b96c5a815099cc31c1c6432e5addfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
