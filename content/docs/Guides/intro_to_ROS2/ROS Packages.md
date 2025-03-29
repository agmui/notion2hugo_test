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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=2cd01b5f6f6018d0d2a39f1f5b4874110f1456ca1dd813b0a0776555d5cd0447&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=53d7d6ba8022e366b177d2fcf4a0ae6a2da0383d68f25c2ac54411eb58325c34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=d3f0b16850d2ac020ffc898484f139ba2e4e2183696018b3fd8a00630ba72d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=61537110f4152e320723924f84acc93c8c2d0a38b009f80e9b5969691a87555d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=71e6f213c31d9ac7f643ab2f4f6d868863c75a190d79f73e16e8097dd41118a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=c47674a3ff79595891a4791d6e65f2035f64a451710816c01dc4fd1b4720de40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5Y6SCE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7HfiUv1SGoS3%2FG6Oq8oLRbAign1xFVdc4f5R4lbJmoAiB%2F24B2MvGLxpceBAAIinfKy59pH4707GU4g0Fo%2FzFSpSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdbAMFzRDACLzP2J7KtwDPWEKljx5TNAiBjnKJHlQ8oPGReW9Ad6RcfA%2BCgSY7X%2B%2FL7Y%2FL09KlxDZ%2BY6Nlaphp1Iqzya4IA7%2B4ZM%2BtHpI0z85hQXCE3iWL1I0vp8eNV54U5vMLqby0TRVF%2BvTYPG5J8knlEIka4c9sv4iyQPb79h9NLZv6gJOjBWyMYSD%2BzzOZgHc3P2luqaarSPNUqoSxaiWafx2Z1kUwPPT80psjGnTcZ0dB5BSJvM01ybqNNTjmzvWwnRA0BFEhBh%2BG8jNaf8IKFjsHJcPwc3uBoDMYzOuKpXP2WpGm4DLAOVY6cnl6rLl1lqfmLPw1fLF1H%2F6GYkB2IwU0bVu2ARG0HeA0z9HYU9MeZgaRTcASESWC52JJGHaqpP27JRJupEftJZazF2iG%2Bo9rI1TPmkTBA%2BYxck79a11BxkwVB9GDLM0cyPyp5nmM6Mtt9hQiTnoZPaGGtfEUUp63I5xotrQn1pyDSjtLtXvFOaRYo3S6ez5eUJzY%2FVjH6DKuBH3u3kMXGQkgzklXqM006HN44htVjJMwzE7B5nGieL0x%2Bl8kLzvUJI%2BSlT5myj0rkUuWTVv0Ckq7Ptzsxh6JIJ6g0Xz3vIrzQ91h176gPIdniEQiEYvqhHc9eUEhY2i58ebo94w4uKevwY6pgEzHNt5PjSC5PLXXf4DjVdhP1SdjdHWOeHIOE404NnuMgLqefFNp74j%2BMc%2B8GCKN6HMNtAXI%2BONXg9j%2FLUn8F190QvHHz7KInrrnJQRQqDzl2RNmRVGDZoLeTuroEk7Nqq%2BxP5kYizYhW4rkcaVgCashY3wIf%2BUcGBLaO%2BfuMW04RIrmni31mlOMSF4nesfZ7iVR%2BX2c3DUJtB7NqXylVgQSYai6c0X&X-Amz-Signature=b2946dc0da09f8f3a52222d9373ba392fa8a628552eda519ef7248df3d02a54a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
