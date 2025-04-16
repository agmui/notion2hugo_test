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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=858ccb659695b328433e9c70e572d4dc7536a37b79c79db5992f777dae61668a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=a4dcee8608767249dd95f056f3212e2331328253a31f9e24d3b3092a774b6b02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=7ed0947bf4062f907fb7f44f4fe38581470cec7c714df15cd9f1f095df8a4b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=ee4d5a73cb9d2234d8ea2218489670c23c21c8e5f65fe9c88684d5892a6647a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=2d2757061a4720d297370bf466b6a3cd2934f44b6c5c5205b176f51b73d09c77&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=3c63b34a617c59ba4d5d3376e1327d637e77e4061d3965a9e1e1b7fc2de4b979&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYFOL2R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmArh2K%2FK9PGs5vwABnIR5SNyOuTGztNgUz63Yo%2B0R2AiEA0qnULeBCtOXVb8ZKEA2FdMaJFLj%2FKwKHRG7U9A4yRV4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDK7YvkEBaUBMPtIvCrcA9fFqF4Jrc57ULjBAjnE6kGw6b%2Bz%2F9T8BroDsGfSxYz2lTK%2BqpVUJAWnb8A1GUaInCFijiHBLpA2hEXLz7VVf%2BAXskvcFpoVpfRLHfUdmb3HuiwO4tyA0x5QpofcBr4fovDvqHdeV2dBzIarK6TuiPrE8BZRskfIi6nsfCpAA45O%2F%2FsGFiviSQNDdVW7OPX1Tgj3E5iZlghktPqCuIjU5G7ZfwQPO7zIpg%2Fg9q%2BvFH2synZm2yhR9UBjdML8EyFJ1mdutqlQI2jq8W6pGJI%2BoVyDSkNbb%2BTg%2Bnwc2XPu%2B49aEWV9GzUiU0uU2TVQxr3sl3lJ3nimf4t%2F7tYB%2Fp%2B2p6sh3RZfQ%2Bx3lonNGOh0XxAdMfCQSSDEIpW1nRSYWee%2BtMObqscrFe3wQC7CQFuvnTZRDvEFRISrt9vcE9DYuhdJJ2pJsyqqg5UHrv96u4%2BGIhXh%2BwtgE6zAIwCFa9N0abzC94DNDwTfyBJFpMNTA5iqA8Wj937exjcCKZBedkzHJwo2eWX0Fxdnepg07%2FTDZ5JxzWig4QVyqZghV0MyHeAdOReXvvJcXkNQEvMpQ3Y5sAd6YyGGZDQ8oLvd28N6pCMKONi%2FNctyqWUBT5sexaQwENM8P6RPremjC8XsMNP0%2Fb8GOqUBRMggK6k8280iTognoZsgaV%2Fv8vwJNBMP4JfCpmHyqYbJwwe1A1Rb1T%2F9YajqmbDeUNZLyg3C0BRjTtrVUItBF0TCHupMn7Qu6jvO6maq3BqrszTck8G2KUXKta0Sl%2Bk1K6JwfR1eOHyRcqFre7qPbcw45j8dsfWeyj4rgGPppYMDZzuuGAZhv3TrbTEEKtxDDq4iC%2FeA6JC56LOembi1o2CFgkMw&X-Amz-Signature=881be5c4c48c36e47def7a1243554238bbb7e13ca0601dee2bda2d4daf280466&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
