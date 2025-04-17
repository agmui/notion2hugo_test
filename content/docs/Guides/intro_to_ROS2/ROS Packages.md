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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=5a3b8ad3ecb2ea730b21afb4a308bf6b9aaefc92f52f88d73e1684eb37625c14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=76b7cb872af8117743fa1957f3324982a1d626820b8704c7cde27ae9abbd4c97&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=a3d9b33f3c870e847bee50f324e7f0301cf06c67b4c5b56144dea42df7dc5e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=5caeb21b04d9c7bd44cf1390c51dbe744afe4759bec1581caa038e71adfda4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=2b74f911f094305413b7a4ccb0062fc79abbdf4d207e6296d068adc5339e73f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=1f6f6a2c17226b64396841c2aaf47081ff4297413368a28ddb3e74af75236890&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDVNIGF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2kMkpA9wtUS6WV5%2BefRrBvePhbSCoA%2B7On8q1Iw7MxAiBB4Djtdd9xrBmoqG38RPIP6p0VFYQhT5eCfYWs5PMWIir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhhvywYbIIUQusrcvKtwDzx7wbaoY3jA5McbOZE9SJSe%2FUjNyUVurpcgxXdfJvtUAL9sUS6ShrlUddNVoYZjgmPSQOncLJEmVkY7SC6YKxJBmolC6W9aORD0RXmdvVZp5G0SREKxkGPk%2BOUWYK4jnR9S8b4m10cy76yTECvfv67zHDu91MMTKKuhte3MtyMJXsmuoRQKydkpaid76%2FsXvLsco2qbItr5IMBSehMgDctKbWpWZtwgFccVbEEfVNJZqndkQSuyVyYmf6TCC1T%2FYI7ACMpacRGbsQYJ%2BiUdIww8OoOpAS%2FtC7cvterbf9G9uC5Htk%2Bxw5KE7hVE4pM2xNQJ08eQTzR07FtuE7gHjm7Y6o%2Fs2H265Wstv3kuziixBy5Ily7FY0d9tbdRfCAAFOffVUCqnxNd1%2BsfHOD7P%2BAubITTQXP1D1%2BnOYkHfRwU04mdTT9Fzae8tKTZW2Ne8RVrSZm6wWdGfJddrmJpzEe7wYvO4ttkpaGlDG6kVSo0CQX%2FSWjHyHAYTsTFzWnqgQbwM5z4GBd4IfsaaMs8OuO8cqNvBz0yY6xhFOcApBcPG2%2Bd5wHWvD2LgJlUum%2FKd2e%2FbVzXkEmoHCcVT%2F394krzS3PWmFUw%2FJ%2FI4uL6c0grtVIdvUVllBaluc6cw75KBwAY6pgHK6nxSWnERTvzaS1gRCZ4FE%2Bkn8zoNVYxI0fQIQdPyWsyKhnM5uENFjTfeFv5Jyv2737YJj50JFKyqN8%2BNHb%2BN207hg48MWLeQIKoNBYuTHHLBJtjR5JNHS21zURzzacjmjCW3uaqzK7d66fkWjaftyj%2FPAHXqSJZlD5SEdAzzkw4%2B%2Bd1UbEb54i59XjYoQjyy2vnNoIMc%2F33Db6rsS%2BrJlmOI4ik9&X-Amz-Signature=a92392629c2707e759b267c82f29a91d549b732376ca570d3a8ee92dd8047604&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
