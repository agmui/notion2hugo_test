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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=2afab7ae31be0b14f54de1734373260fd3ae4e4adeb294fb2f5b28c5b8b48fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=7923094016f3da6ee1d7b994bf686694fabaa7a00833381a021c16bad990c2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=2ba668f7c4fea2cf8ac888ef4b00f65cb6e86a63f5af57a83a2044b1b865a3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=ab907b2d5141ad21d42e42b63dd79dedf6cf0a0d3b7069dae50d2ad4ad2cd75b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=96dbe29dd89897055796a734b51294e97a51471bcf1f82205781464426d8e446&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=85e914511ffb69e2ff3d2afdcc4695485b5571dde6c3830a4dc0ae6ca3d76a52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUKZUR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr0Qtc26UYmz2vN6YhQ3YlxLMkCzKChymNbu2vX9MbhAiBKX1qgoUTzKn8CtMq5d%2FG1cHGJiRkGHst1MMbDk%2F%2F%2FDSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwFpIOuRTVLYgDFvKtwDJHt3foLzSr7Ve00%2BVkbDQ5R8%2BTnXD0gy10%2B04JriIhdEzNrpv0%2B32bk6hTh5GeY1%2Fu0ZQSmztW8Up9jRqhKB%2BUIJb5aW8LIumFrK15zmqer74Ql5JQM%2BtudiuefD%2F2ytGxgTYz9xSLLDaRI%2FaNx8zk9ew8ut1FnYTAxuBGfQPndYmy2HPPvdxD4SFJx%2BMOvu%2BESIXEuQPYX95pdK%2FaFk2MW%2BsurBHsHsl1Pr1blz1Q%2Fba8oVIsvEanY4Px%2FnEh5tp8IKoczM8jcdgaP6bFfG9TMbEzcWPZbp6V5xLLk2Ac95Cip%2FpLgacuYm%2B6YjVI95J2CY0hQkuJtnYAJv0nXeVxepsz8IB6ED37F5pcToefJfWah9Phv8U9DX5pr9LpoUlbwQx4L1arE9QRvFC6if8J6YGEOHDz1WsuTiq%2ByJVDvLlFnQX7XMmrBMG2bxoKsKqNxsjNv83fb8e7W%2B4rFreqhVPifvLCeQDVi8QySwCfAxU6dMGgcHSc519iN5nbVxtao%2BcwcYgdzrLfWG5N%2Fwcgp%2FekUEq6NsMB0ZkiPJrUJqHmgwb32982sAid7DuqaMV%2FMPtSQA1fpUU1XaSOL0P%2FZUMWR1SgyYU%2BDYP9CPw7f0nkBv4v9KEH7cIc0wieaevgY6pgFDP5%2BL%2BDLrJPfKjkN5fWYZWFBHWhBJ2CLEARpDrCSkZCydYMVEmZEJx1VN7BXOr8vf47Y%2F4iWhVTshZ%2FSGPGSf90X0zbyFGBUXXs4Jg3XwtTdQi0unpN1LTCHfjzpSBf3PNvCqg%2Bj5Haq2dY1HdwqrmaLaVuDE8QUUqCONdI6Uhwf3C2px1PlrXUGY05XFR%2BQdEIzzxBODlu55dWlIfxzimD6A%2FGFQ&X-Amz-Signature=c461e247c01b894a7428163236dbdc91ba40bc0e4f83364c92c81f941c7a227f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
