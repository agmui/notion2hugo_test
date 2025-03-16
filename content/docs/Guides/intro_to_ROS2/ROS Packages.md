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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=44eb9ecc81a5e228f7481bb50f3b6fa42cc6379a17fd9640999c20464bfe8db4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=38b92c3bd2a4d47cc27cf9d03a7ccd497e9c5e172e9da902a99c02dc1aa6b2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=08a545db0919ef43fa2f8c9a10f56a5305277d9f2b319e1fdf5dc4fda45e8f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=c643171cefc4ecb71fbe5ab1006ee79f13577047a6d70eb59707ab2623c47038&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=1cd43ae4770e5c9c3a7e9cf2dd73880e6480f55f2b08586e49e7d10f4d9a7610&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=7a20d65ad225309d5036e08b2d6fa8e32b429fd979a746c7872f0ea24874fa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EO7IDIG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdMT6yefQ1fkYyyUJd8I8xJv90II2DT4%2B5SKzJNgN7AiAjGtd0tmXG2aWxYNL5G3wnpTW6rDv0D2NSfnvQijW26Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfazYnytIhmVJglOnKtwDhxpE3i0sQfZaQD17TErQCUaELbI8Gt4R8WvwW15dN71kgSO%2FRuMCvIXJPpku1IgNIYLQtWUHFscmZsHfHsBwB3GCwtwFAduAhfOPUeRg%2B54iTXEO4IQwFJ1Yu3X8QOLcjzd86vJkecOJR0m3stB0nPhhnnki6VDXgjTzJwA0XpLZr5JAQotqDIyMhI7fxg01KIx8OZsZiIpJDqWR9Y9JHd9aIKsy9zAOqRCaiXw48KBVai44Z4sgjyB64OfdGayGzLnQkXOe77xmDrlD9gUoWLmrOJI1UjsJ15PNGwXbIAm59slOxU4G5Amcu7t3zyxPQz8o%2FujcQJ3iB3TOLR%2FXNGtTY8VNfqiwRdeIfye%2FiY01OpWYlzXPVQ8IUBKTTRzH%2BNHvKGqDfKgMpBp9qDOoC6uWjBuJyUHW4ZopWucPJBE%2BqhoCAkSUK8IofnXUDR90qHjkEavNBEM7tywmXYI5DSNgA0kyHWfAbhXRE9Bse4f3rd9CREMcf0RjguzzokW3CJRxuYWMKektfQl0x291cwBGx5JX3LiVjfMrX%2FCIBjViydIslgkAsV3UsYFprjvsMpw%2F4dn0onoqqArn7HIJU63rZkoQf5sEi3G5rnMTvTmoJ6sOfEeIcVoDP4Mw8N7bvgY6pgHMl%2BkUMRaOcsEEpDRqNqR%2BND09rrhjwJtQQoKVdp5953aPAbNMlq9Q29UJOzJAmDvG3%2BHTUVimPxgr%2BvoLU6jem4w2RQLzIaBOw1LPrE0U50lrK7rrB%2FYtl%2FLtgs4OpcEAs%2BGprwnbm53dLgsxTUc5rkYEBQCGFBQ8hrkpb4hP7aQ%2FH2DpYbKulOzmWpi3G5j%2BAv3jv5FIfr88vvGknfZZ2juBHkPd&X-Amz-Signature=29536a16b054481e98df685bb301a6ca199501cd2fe3924ca684ff8dcc975a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
