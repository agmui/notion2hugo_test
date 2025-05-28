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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=7efb7eeb22b8643c4ec9222584e37e5fe30d9bca78f215909866c6d8dd283b00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=06ff13aa21c8dbdaec01a2990b560debdcf797eb793415c71c5e342d2da4200c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=69ee8cde445db68a1dab3b265346fb134b19422f80d09a4eba0a219f67f095e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=80cf6e3d575a97f66394b30a5bdf30296ff5b197d4b178bfb4c89421aa6e083e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=7a28da2e37283107563cc7473647126b782785c9c5575494cbbc8228d62282d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=5301386fc3caf4ac4a77dde64b357f06781928a3a671b293145f23970d458169&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O3NI4Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5pzLdpYpedx5Jx%2FgFKafZUrPGzR0T239oUl%2FUiZs9bAiAPJ%2BLTUdGMeQubNgBw%2BnmYzWVCny6zsQUCyRbCEwld0Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4iJ%2FT2gtH8izU0OBKtwDiYggw%2FEZGAO1I4NikMEPiFF%2FCfo09otWIxJAQX9qqFKan6l2hJ9IhX4HD5dXzxhsZbBXcXCHWuxApEtkdd55XDf%2F1cMYY%2F3FFc9TK9XY1eSiCN6HOozEnRDVV7BSQTA5%2BOYUkDMxcp64ygYNtkQUbUEUJ17rUzQa84fWDc16IP3n95HV5oU4%2FoIZ1r6e5OSy6%2B5XG%2FGzqWMKJ26%2FXllMeyOJsfvVaGrQLtgr60m6mbhr7JLSHlh0fo0vpC%2BAsxIeTBfpbFMnoo7%2BNIaeV7UsXXbmG7ZdGTlW9VKPboO1zQ0Gj59VAuuCwMSsjzIKHK07dQovqUdp8eXDb5wkLfjr%2BZeKVu8d8gR%2BTSTw%2BtH86O7Cwvy41X8%2FqhXryDsR4is9%2FLPi0CxkEUr0l4jJ0CkBBGH%2FhncmC850LLASaGBbX%2FD2uGIQW0f3Enlll6vD41jfMHXDtB%2BR4y2P%2FnIHx%2BBYVGyulzB5%2FgN9T7OrCmI7qScDqTM%2FYuvdo%2FxPnBt8Bj73DHd51rSx9Y7EMeA566aygkvXaTvjtZVKQB4vvdrv1e%2FulsZ%2BSSJYxQl7wMY3bmJg8JTvLiT11NnWZ10lqSEAFaWJqJkJ%2FMbrQZl3tfz8XfaxpaJAJz1FNmt6EiIwvszcwQY6pgGwzBcBsJVi6tQKCRcI3fH0rJHPi7xbKv%2F8%2BzdVpy9752vnkTSDvqIM6FFC6EZtIms9ZSbzssu8T68ImsAPT0Bdrhw36noc%2Bf1x1k1gfsBc6cyXnXHpTltIV6kx0DYYvxk7Wro9e9pMIthHPSQ8NREsnXcwoWRMP2dsYiGZOW8h1eJpMF5o9THR41l5neCGKtfNsmEBcjL7Bss1mCp6O3QguVYodf3J&X-Amz-Signature=0fdc51beac235a02072a40dce11a3712cbe82d36504b88094343137896869ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
