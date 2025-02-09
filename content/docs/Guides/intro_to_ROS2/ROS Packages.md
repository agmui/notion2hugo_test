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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=703939bc0686ee54349ede380338dce6004059e5d5f6e73528c5ef901a33dd9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=aa896cc4043c5d452b102cc526f7b1d4ce11d8dd6a1f1eb74c63e5f9234cb866&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=8c8b22fff6049ac8912af53ddc8fde7e1b2bed1b889fa9e2f81fca52d5470879&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=e34a2f8e00f2c6e5b96968c4eb298ac28a17c4de138b13cee95a333a884b7e04&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=26403934b20236d88c2a8262a4767e5b3005839ed29c9afafe31459135023ade&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=e7abf7713963f8a6912ddaecfd1a30210b1cac2af1710da9384633a23c16fd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAFCIES%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpQXVRQ%2FxpySBWrTxdOTch5HIk27tS4JdlYV4YLyq3VAiA8DMb7flsAE2Ha4cL1oPiVfr2AwNLrAzsnvYCpLq7muyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQHI9dALELs0BJqDKtwDFkvotbAyn6448K1y9FCr%2Bvukzo2ZhJJ%2F8soapm6N5H4OU2z7gGbujSJpSjZ4I%2BOQ8S5i1iDZgcWJGrKnZH7yTL4BmXt89dsTPmF3JECtJNyKWUIdy3cPeIRzExPODCN9hhfLuWJvzFOgjvsaCNBRLqvUHOFFbjqfdkCTQRiq8zFsKdoD%2FNEBjCuLKb1t4kAcD0FcbkglS1HDTtySVXjHF9V8KJw%2BYKFcBJXE1Z5f4pOpWJ8Ue1kFA5f7v7RKRAvCHwAtYg8%2BavIq8yNW91T8xuGNkq5qxukDFXa60029uQkvhMFTq5kFDBU8%2BBaHOIxXRB7YjZkAJp5nR9gk4p%2B0uin%2B2SHkutBoQt6p28VFiLcaJOlcU17rQgAbayb%2Bfkk9xAndeFPomQt8NlkS8vwT0QPIAIh%2F%2Fircx1lw5f1WiYDJOTPALePxij%2Bfu81iwcXYwXcRAmlazgfQtRa2aE9wh6ktQUCBN60zU2s02F0dm41eVNPlxHVrhj8Ma2qE1VFPrXmVlgH9JMqF4TZrkFMa6e3%2BGx7moXmaTrJfaFyy2Nm1VegZvJxiR6T%2BHzKLwp%2B5dF9oXt9DQHugTc7HxX9ZdWkdt%2BRc6dwYWxYCQoE5w4nQFvgP6CoR0p9SXh0w3L6gvQY6pgGHMqTZZ9Q%2FSh1aVCDoOjbeqN2S%2FDqxH1jM1RExs6ennxgY%2FkyenvX%2BbzR0kT%2FVqUC18eSo7fAgOr95kkbXxv9bSQMKq6oqs7m1r0Hi7ZoO0AJhKmZ37ERneuZOW4A0CsdDP2H%2FMVfuj4cJKY%2F9jO%2FneS47I6HFpRZpSYBJimXYAMCcjEXQEEuSu0C4%2FN%2BvlQLhcxJJq5vNDrmDElsm82VEYncrSjoo&X-Amz-Signature=488848e1c9546e6812019d75a5fe00c849eb5b368826bf90eccd797f2351e7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
