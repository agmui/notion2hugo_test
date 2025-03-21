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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=83b504fcbd881ff6d154017bcbe7468ed4c95cd34bf470c5c9fcbfd1be8d2d68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=96709074f8809cf3442afb81501af79661d67ac3eb3424265cbe217ae73b31a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=248d1e5998d4f06d5a776c101199ada29634a324c202f87097debe87d4ba3e54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=8479367a692db161d53a1868b9eddcad5fbc7ab23b35dbe997b99b2f83735f90&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=acd01586ce730574980d1092a7c0592cc190c8bf34001be1a1c179d335e7103f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=19b0cc58fd3fb3f491b549759cefd3d58d25529f444205ba617112c333960501&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQMQEUP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB0glUxT7%2FLFaN8N1yw7gpRF5W87RFq7HMf54DEFe%2BkBAiEAu6tIm1xrFPXSp59onIKk%2Fgyys6K7magYidjtrmDHk9IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDPcbl3rGxdVIWteircAxubSEue1iTAWueDUnYnkp5SR1jOruJoUCVA9hEOtUyOSzdqFsRKOnWombcNWcx%2BfMq6YL84H%2FeJtLuSzf1cdcvp6U0yf1hKNMMLdcY7vaRyops0u6lXBC2cMhHbF8xbp1%2BfPG4FZxk15ZJkS%2BQWSSFxHmdIkSxJOs6a33GO3Hbb8Ql1sVpF9YpdE5HwQcGTtIIMVDZQdbOIdEaBz0SKGVCHKYA3b90tJU%2BoGwR40dWoMAK4%2FUKJBApdTjaXj9EZgNOH2F959uGS31c2D8GEYUUfTddtQpGxdHADguKYiy2MNFKnKlOdraz98BOFhSEO%2BqvI1W18SZOW%2B8H0f60sglzAL6vttjYg1Zgyv7rYxURYxgZy6hQOnq7RXT4q5Hm6DorVij%2BOaFEjq%2FbvlnbtM2HkE8eN6RGKfOcxD0vMQEiqHhF0q0uDkRsCx8qoh%2FJAq1pk3%2FMr4gHn8k4QdtMOdWhtqeL16jX5fh9w40JHJ7JY11%2BNywqa8s7vh6%2F4zxIdl5wkHzhuSpVo8UEMj8LQbjqD%2FBD1ycQj2gEJrfAk5KDcQ1XwO3zA0iKjG4Yrn6SXXK3cp%2BGctND7tQYTbs1croUf6qCNtVeSYBvRFTkCD9aZKlOd3GfVHdu8ywuOMLWb9r4GOqUBDqUrAWvaESMBff6R2cEPb4QwxV0yVQKMgsuzPU3mPLT4CaPpq7u6wz%2Bj%2BLNztEW2xeiP6RXa%2B5v8V8z2OJ0THSD0LZLi6Uckdxdg9TReYiXjCdpst71kINsZqHm0DexCuczgNxzCtKUz1jwSaeOZj0aW79O01eAjP8qyoK6osJqqKoWID%2BrCHS%2FpdHp0sRnbQdeomIZp6U9u0bKsQz2fS5qsMd6P&X-Amz-Signature=b5711a113fa0f916bb5562619ecdf7fccb8f5716e1a2c209dffb961585358f46&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
