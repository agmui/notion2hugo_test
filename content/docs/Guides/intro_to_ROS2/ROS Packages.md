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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=b58e3313a77e75241ea6f46e58be76f1aaf1234ea7df8d1294b492e49b4605d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=c7b5b7d2c7b8eca69a76c0929b120017ccbd4620a062251d410ba42bf9479bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=4bc08598107e7bc1503393f68118e938811f149d0d800fe9b204f83d5d141763&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=94151887ee0b759808a0614bd256f2cb818297ad5219819ae29ac6aac127a3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=0434c15a8f1a3d41cb865ca77af36e37504393874f9c5c1e4f20b869afdfdf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=773006f1127c0e04dbe73cd1fcbb5903b857acea32401119a6ad03c2b1260488&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV372NV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6c4pvOz8V5AJqbQiNvqh4zYqILsabkBeVsHeUrBbSAiBEbqiz4VaHz9amc%2Fm2E%2FuZyFghlL%2BYE3C8vSsjUoRrxSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5FM9jPVxJ7%2FZEqHKtwD38wOSoV7i2%2BFQwM%2FBaJ31q78%2FWVRzh6AYzwg92lPEcfe%2B%2FSWaeljDRPqcrz3l74uaFhsz%2Fe%2BUqrLs09oaRVh6hQgCse7LnsCaYVHZu1VnMLaREj4JotBcCs9cQIFzJmAjHo9fbEIwJMY3HqUGkG%2FAcvVn4fBJq6FtWE18xrP8NgSWiUZWpEk801%2FPDkz0XchyzaUcPjDt8FP7FBN%2FcR9d4G59LrFTXMzyT1TMRjfhXWmW0iQJG%2F%2F8j5aa7E2j%2FtSOK52n1KtRM0fOVjf0F6KxJalywELlf3A1HSTOWkZYqhhFBStj2jJP%2BU0dBZpbI2dGohKReMTQH1bJFBsyGqz%2BMTqQqaLuW9vhzLgFYp6zLGTfVBfoaKmjQltW2XNmQHqL9V8Hu97uNaNeADrz8VPSdI3Wnx9%2FYhxzoAsJASYdcK97wL%2F0dCD867I3LQfaUmSQE3WB7hgdRpp8jvHkyTw9%2FxUi7MOLf%2FAtzTevpHLLdzR7Qg7%2BVn%2FSlpPeaEYhUbfMx3vgWp8CAf4wlUxhc3KItAmF2bP8lgaovfd7X%2BPdVjyjPZJhNqzlS806SU8wXRxGhZ8kE0A0159%2FVI4CyTPU9GFB9YzdlS7YN2mQ%2Boaei8f97gez78ok%2BDAJq4wpL%2FAwAY6pgFeSiJvI1pjn5ItGIzF0pgLj7wPT%2F%2FU%2BY2N8JVJf8dBpd3RZhhEyCF%2FKEcm5dtZS0MOSf0hPc82DQAhurT1OALHCUDEUNUHAR0yNwMXk8BE10Ltcpb0NZAWKHDrX9K1Tnv1eeC5kT%2Fu4Owk3OtBCFzGuN9VRiE1wcIo9LRIpx06IsPEBSIPyvqvd38ZHg4UXvrxMRf2LWPEQpFPUGytlyaYLX5rAUqY&X-Amz-Signature=b6785d14aed54a71504ceb5ffbffe30289c55a580a716b88cb334bde1aa16424&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
