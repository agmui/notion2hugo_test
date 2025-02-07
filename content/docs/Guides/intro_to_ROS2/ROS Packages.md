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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=534275301d277fd9e341eab014c632243e0b5392171e6c6b0341a3a40c423cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=166f4d90692220a62ef294fe39600be6c6d31d1bf40b844b3cbb7bfb37f43e51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=c16b6ccc354e11c2fe73d2f891075d39df432176371b85559b4e4649ab86bc82&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=1cb34de728517a2868ee622a0315914169370422516c589d81f3526d4d943f60&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=2fdc27828e2149569b9b2271abb15b29a405153a02f178c9515fb7100b607d18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=7b30cbb66bb0cb71f973c2fdca1b5a221ec295a06c12edc08ac8a1eb9f74f3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICG3KV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI8Y4fDOQYDGq6Q3qnLUi9Xu%2FWbnySc8YZPGF78%2FgIDQIhAN3A9w1Mo99nGFg4PLCqc4aNuoaokPtpxMdv9%2F5Q8P1XKv8DCGkQABoMNjM3NDIzMTgzODA1IgypOxJLcPKl9y0cDU4q3AMvnEXrn1hYJoa28k3AxNLjBa%2Bqy2xj3SJfhCmqfH7Obx0th66MwyL4Bc8fNj9Bi1T5aw67lxEQ%2BH5jDHaGEF2ATh1YpX9vvg5CF25AihwflXi9Bf8dW%2Fi%2FjAiKPxRCuxGbbWkJwRGcUtdBuqdyivK7ZzmL9rnJe1yUkyJwIa3kHjU4RPyXNw87nrZWTIoSr8AyNid9wgqWg0h6p6CyZnQKEuQROvDX%2FRDkoZHvWGHIFZ30kp3ZMhMpQ6T4EtxNflK%2Ba8zuyisIfgYMpjJKwG0Zf%2F1Z6nF2Zu54jwfJ4BqINbRD7XMO0Jw7Mr2V4VTafR7WDM9SoGCrld2fpvNXudS0wZfwJhHt%2BkN1ExV9EHoUqQLQRgEseMSeBwvBwXcy9E8ot%2B7IP4kTIw1Cl2rxnyUV2ymdYoLleMm8Kvljfy7XXz9E9D1GlVfcJTbmfnQNEx5fhvB7o3ZFC2UDHEF2Ke9DMQWiPwm0lLyUInQLKhwD3l3dL0N4vA8trq4zPaEZGREu8wKxABM8D%2BrwSrtRT5%2FEhlsyvkTmo4iaYqxycWLVRmKyNkBBh4Bl9hED8eLjV8i2mk1F2OmA6qBdpccveSElUbdBjJR8O%2F6fHj%2BkWZi5yv0GjS0E9qfj2k3cYjCGnJW9BjqkAfUzdbDGpRQmFrI0%2BLoC2YxYS94NYcU6t%2Fcabp8yWmCA6oQUX88HBZVMO31454ZDC9lpqKt3MCG1CUM%2FHOFzgkMtYlYzsA4kD30SPacSlrfsjReh%2Bea61xuV6hKrh4VpkH9EEC68nW0f6%2BIoIzKKzM70TkZ5%2FWSxRTkXnqq2PcBQMj3rgnPUjmFnowdAf8%2FtBB6J9W3tvpkAbSwufqF4rCJpu44t&X-Amz-Signature=007a6f8c3223f80cc35ee80aeb29f30879dca08d5f837a8b4419f0a859bb7c34&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
