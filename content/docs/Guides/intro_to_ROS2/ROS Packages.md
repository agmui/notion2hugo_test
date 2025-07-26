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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=e592de65b1ac92720380ac301256555760f16df011683e27457bd70552aafbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=959f0f917534433e156f3e62a7ec19c078a39ebec5bcd29ec9786d12c5d24b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=670dd00d617e86ec7172f654e5e3a9c14e54aa3b54a4e9e404aa55481bb08076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=e0633028fae4ea29130e573d0cf357bce1a0db94d0aeea7de91b34707418a3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=68d89a757ba234082691a083a9c1f97cd0b55abc4a60ef7794a1baf7d3aec28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=c48a88bc90e37598fbf3382ea806ff93bea09382c5cce3cfaffdea1aafdb48ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7YBEQE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAueCEuxzBahfQPjOzyYbYPfrOnkpTJOsiqYhcU28nKdAiARWIQabljSRZJlvZGPdhVSbNaZ9LWlaoWOsi9xncqMEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMd%2BiV%2BTEZrtMVBUGMKtwDhEUxtagDXha7gq0o8NDiz9VfqM05%2F26zk%2F2m28AbyjVVy4PonGgNFxIYgMkuCcExLXP9i2KEaETcjuj%2Bb1TI8jmUDfXvB26CXQxiqVy6T%2B2vZNKB%2FddLUhXLx2EZJ0r3X%2BQ4GgBqnZVP7bJz0HouEeNht7LYzUwMYBS8Iujh2Ice5qSWvnJ2IIfRpaqrXb1ExkSqqYcXyce2paDUT9jF1V%2FjkNPwXX%2FMR0St7Kgj3z4dRcT0Ina2kDxfGFcAKrx1d09Mr3Z4K8VoLkc%2FyA8ORlZHkexdfQC%2F%2F0xcnwOX2Q4fpsoCxFtvuWfT5mJtMr7ZdkppHC%2Fi5pU05VHd%2FwpPK4TsTs%2B0lu%2BS5%2BaccqZOU3uK8Uzzxy8gaPFcUbQrygUxQBdF5VLibQvo7JXQYIcxJkIGhMl2Bc3OmifOevOmBFYhBWAZBlUyywkVZjH1DOjr41yUw0zOirs%2BEXrj8%2FidbRbKna5d2oNb6zIMbq8ZziucQ42QG%2FtLg5f%2BqG9uxuNv1sa34e3WINwixdDUYzUadAGOJWGOq3nx77iebRTc8TzQK%2BiiCWlhTcIK9pzgUux2MjdvQWa6lskzRCOJHy51E%2FY2wcplVtJJvwQ7vIgx02DpMlZsTFJkSy529JUwruKRxAY6pgGWQ4chpnKo7oaOADmqx8aRi0eI1oyM4SiI3pTqzFAW73M2q7fLIKT45idAvilKAkAEeuJanTlSwpE%2F%2Fz7vd2R%2F%2BI9kuLBUWdE0sOm%2BbInvswRJpAdlTnHkn14gy0wniYkLbcWSIt%2B6kFeffEsVk%2ByP25x1uRSc3YKBaU6gX3XHvT%2FQe3SSX7gp4qOtsIukwjZUJPelEF1UQe29dRPIYrl4jyyVgio1&X-Amz-Signature=13b4c60e6c774ec56ce8a33104e96427e982f2b22e8ef0895c09017a18f4e71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
