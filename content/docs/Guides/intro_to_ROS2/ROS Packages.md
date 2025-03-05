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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=79cc1c5fcbc606fe7f75f02c101c96db92ed23bc00ccea84a24b39b95799e9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=8cbb6109745e54f487d19c722eac85e2698b204d3c32ced47e94a758bb6d8d15&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=52482c586fd1f51737f469a0b63db8b12bdd2931c2dd64bab60bf292b2a7026c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=44f0787e23adab75bb68b41232a46b419c4e90eafdaec5bafc343a1e0150519b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=3b35a44d5a8b36d8d7b9c4dc13019b3967b89f48e391748b6ca625faa4a5b98e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=53f6be2259c78e417e5be85926fc588fc938cd62455cf04dbb58a3ea29b34f65&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJV6C6E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8oRxBbq7fp3JPUpyTI0eGTw%2BW5quN3QLfAYos5H3yrAiBup6aX7igoITSfxBEiNGIt4rhNIGedvZ03E8Q0h0ybxSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMmTAul1Y1JyAZmPT0KtwDtv9UgmmYUGxvy8%2FBqZfMlr5JAaQZhGQ799maxVzlOieCVGHkIpz%2FBSkvsxdVzFGbZsNXuPAF26pVKUzRgj3BSnokfXwEb1IL4xoRRg4%2FiXJJS0DqWsDo4cbNzU50R5dfGGul0nyLTR9vrl8%2BtjZtlXrc%2FdnS2%2B5iL1hus%2F%2BDzQeGpEyMoBiSdGB2i011dov5ON1AVB4xIQ9eCYOjIWYzVV8h5yPtyDDHQfgOPqGU6UIv3dlUgPAeU5MVFl%2B633Gb9gsbkLvelDbAID2JLkOsrXaAtXodQO0TZT8KNOgdBJKQ%2FT7glZOrCnCvkzvkUJtLInUa1GQLvvfy2KdTXnBZyAfHcL6jDGEZpES9aoiTPtcIUZr0fr4tevTnSBAr%2Baq73D7dV%2BzO%2BeH%2BQRNMO%2Fo3n6nuDO7UKFWLHK%2Fotl88l%2FeIQiXtpw7%2BhZ5DLl8OdlEUPQXFJyBOLuAS%2FUT8cNXgXerDyqCxV6UuQnxaeRrmJDWXsvHHMT6KzK44RU8O9iDX5y%2Fkeqa2mfNusRkBafSi9fsQ7xmYcn0gXkISQY3BxUEKEjj2o9obbOJF1EWJwUcG%2BYmalsLodv3I5LBbh3glIpYEsEnkRwsY9bOhyndh6Jv8P0he7au99J4Jx7kwhLihvgY6pgGyb%2F9d01UvGPcipCjG5boVxwBARIBabI%2FGCgO%2FFkXHQbWujnxyGri0Gn18g0sLfnFBn1inhY2TsUAfkcaJ7fsX%2B7FklS7PlUg1uxA9wskUhKSp4isfu2tznCO1hgo8yiZ9f0A%2F0iqp0kiOvwnz6JKBkJc8FnSZFTZbovhqiWwYJ9s7nQMEXMcZzfr4EcA7tt0uhLSvokccz%2FQ8bDEc86AWGnSwDiQK&X-Amz-Signature=2b978fc188cec6d7a868e3253b2524dca06bbc416f3ca65a75a1b13c6bdbe990&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
