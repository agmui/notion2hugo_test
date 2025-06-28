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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=fff4862aaa22dc95594029a008de769e8433f9ba4827d51c98d33270d213ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=f471a2ed29a458cc856bf74edfe060c3aa4a41c2691ac42198f07d2aad123fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=9a84e1833cf38ab873bec2e3853ff34002f65e551b4bfbabfb6cca4e28360f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=a3eb71b7a70033c8cbb6ad4a7540c3df1fd1607f1cc3b298c2a5410fa7141d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=0cdf8c46a9206ff274dae10afbd3c04e830f57c7eb830ae0a7b0c6ebc58ae9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=4684e1c8e5c628f07602cdfed4b77828d8be6f543e0158a7b8ff58e06a9fbc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEMU44%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnyfFK0YUsl2ZgOAsFB2pvXMYZePS3%2Fh5Jw7N2jglswAIhAJVQhD%2Ba80%2Btwv1rZ%2BYiTaQuTPjP2beJmus%2FAGcdipT8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxENooVHcjt8ngD8ukq3APst0HVq2RyaI57xhNTg8qCCt%2FCCK4B3SWgNkVR5IJy0RcsM%2BUKrPah6Xqx%2BMf9oro7CS47%2FYW1qNMGxxwU0i7j5Xa1U4vEDeS3%2FGNFBkxrg37%2BWb4RVn%2FdwUzFBKKHm4MkAH9dB0d8FukxYJlhiWXO3PKDER5CLGTBVgyC35SUYtxbKyYnnoW1alRzE1BqAR%2F%2B1eYPQLnHucn08tPXLZIjN01t7BcVAuGGR6wrXkKUhKbLW%2BR88Cp835tVe3%2FVoBt%2F2mn0BLrkBSZX%2BRs7XqqlrnCltafERiWdGJ%2Fg832w8xqwDU6RaNrKPzGc8EXW5q2JD6Ru3FENECWmqi2oDhRn0xohXXRJ4S1Axjv7B8SdoHLvhFMpVCXto63ps5WKjsO4x7zIzXWEKslCAhtksUi4dwd30aLE5JmgPIr6%2FNvh81R7y1VsxBmwqOPA30BLLJ4zjvYdbeEgkPvYMtpCYeVxFvKO%2B8QoxP4WREuewBJQ0mGhPxnoQ95Lu%2BMXsYNAx6agdEio1Y0W%2B58r3ZkUhFtuvPU6oPTmxoEmYBBpYFoUVZ2GTsOmIvFYuClJNShCq05%2FJcqRsWWGEBtoklyiJ2qdLxxRhWmXvGNAzLb5UI2sVVsPbyWpiZ9y8%2BRXWjDooP7CBjqkAbDY6iBx9%2BAvzhpbeOZY2OmFGcWEnTkpcLQTmX4N%2F595Cr0kN4RX7Gp%2BgU9fqNVW7syfaMAA5jDbZTFctDaDCXQDNeIcvhuiODB%2FNKuksYZy2S8%2BeDbzLk6xSe5rsRrLfi5HJd%2BRCyWBXpV%2F7xDKZzCrXDeo9fhf9f9c7oMMabA%2Bi7Fttn2XKa6dMaL1VKuu5A73SBrjQJnEmqohGT2wnXX%2BEuy9&X-Amz-Signature=a9c81cbc81523b4e566cd92cceb7dc092f70406a58ea5fd65930bab5e2f86047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
