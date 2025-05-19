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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=9e2c5815455c0ddd67e346818f3ac9ecd9bf39be5e9aea26a7bfcd1cc8ab9d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=f82b1f256834708021688604f5bd797d3fe5d3d4a7105dc56cda33954884f714&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=76e0e9cfdd7d30c5d0d9d65ff1ab005e7aaec58bd8a1d52175aceaf23670ea66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=cf047e6e1a6e2490541b85e520f41c956dc9d81c3f551633bd22c5fe050a6011&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=0cb8e327269a680a4b2eec333d1b76d3fe74061bbc699cb51b2ae60b3160eb13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=e28dce8d589ff69d6c73bdc873880e14725cf6928b1fb3eb46d87c64bdb2d2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWEX76O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJS4AApgFLqYHXtw0fW5S3c3o1RoUg%2BH1kcq%2FrgH1oUAiBYTp5xE9gsPQLZUehcrjwZ0mbFxRhm3eifVfqBZq2pYiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcPZQt7%2Blt0U96iWPKtwDkhQcVqdlJ%2FCuI4d4PL916UVsf33LVRNE3V8zpgRwXFgFAtlj3Ko9KPN8M6B%2BC01UuBsSqB7nxtpNVz9PT0Dx8aQisN7aqkL0248raiu%2Fqx6ILAqJl2f5E1FULNIYpS6RXxO7WLgnjY9fV8SM8st3omryp1%2BCiICzYflLHAt2gdfo7kON1qoTHHAIr%2FCzdEqzCD%2F4rkY%2Bjc4s5%2Bs88vUaWSxK7q2NtPrHU9wrzhDiSYjxsUJJEkJ14nNGqXzehs3Ig8hLQa3j6S5UPnpzNliw%2FsgaZ4C5m6cZjhH5rStLJIhl5h2fJ6%2FZ%2F7q%2FfErY69RyD%2B4uXd0HgM%2FgsoIYWTJfPUH2z7daYJqfNC%2FIXwirTjTVcS0AL8ocboV9Y1tRv1kTx58iU1lYDf5ruLHPvTUX7oJbaWqUpgLDLWvkr8w4EVRdK0%2F2AUKlw%2FyXUPdLGwmPHTfHqwQ2OaiwsAssIAm7yVirjremAHg0sAqBH%2BSzq16rf8mGmgVDdMhlrNQw8gNpVPDXnxf5%2FbQtkl%2FyQrI64fbnqb3m%2BjW6RmzpUmAqeo6MP%2FusKhs75oy1nIUZNrAJwoBdQyU7u9MxiPYIgmwCp%2FY9Bz%2Bkyss2KM99lcvstYts%2FSqHN4MmLAXqDVwwteupwQY6pgFQB7QAKIw9FqUAyddthRBfqp6OlaztxV0ZEkvZuMxwRKdo8AFoboTGgE1Sq00DdHzew9Zqta6CwRLafk7uBh6UArMeNNyIGHMH84VIxbhz8NvyhraCkIsYKkv29enyOiR3tOwMV1SyFDlh5qrvgFxAUaowYb9uVKDZbj4pnX5c3WQUFJtJUNO2nptSqaEH1Ma42kmGDqOINB8ChsupzSLv5LeTrTR%2B&X-Amz-Signature=9f9772f6a46b63d16efaf8c0b02fb7cf7cc20b3b6626dca5305758639205c47c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
