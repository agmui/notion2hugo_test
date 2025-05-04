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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=e102d7d225ddf1e0b1caae6cbdc5139d8a750257c5c5677db3f81098e0973f11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=3a86cba82d680ae6d8abd9eb9b85506bceb01dcd1cfdab5e9f749807918b1c37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=453969563d382857485097c83c796471feab972e8d2266de700bbee096ef49b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=f6411d20317142b23b8562137914a67650ff2132bf4a4da5c54ea9e73da372d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=cb961cb140bd9d6a2c3749a9c510b2a5b54f63a8b9546c267b77fc65881a5cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=34597f38f81326352597a10df4c0c51f632afb2b43d7dcb557a688a36d15ba88&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ARFQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICa%2F3sZ04yU4Gx5CbU4nz%2BmWVwuxa11iQ8A3nklZAVWkAiA8LSc6YH9OuvpeceCtxJzsSZRgLbLGHW15U5aJa9jI1yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxOJQgRcPFYlxh4o2KtwDL5i2nBpRh3M4ku95yDOXRBDUQOumtUhZ6vIwOoLR8ye5ccVECRMF3PIKPhxh2RpkXd4yITq%2FrWmjOQa2Oy4%2FHqUDPhoRcmkHzxHBpE7nJNFhRkylC9%2F5nnomZI%2BQLJlksyr3CmLmTgbj9Lvk%2Bdcz2jqVoOiHBBjRDha4Bz0zNmf4tOh2jY3XTghBfb81vYKkBpZ4aQJqAbJc%2FkCgXJs0jU22AA%2F%2Fipj33lJDE%2BlYl4o7QGoN50oyXwtkpe6i7%2Bqs9Y8%2BHtZZJCjJcbeo1%2BHt1Dv7QaVgefWNdtcYfpYwKMHxDtvZfvdxqcuqzoUCrtl85fTOMCHREfdfd3ziRlQigIfzTuL%2Bs7Rere%2FD11bhXWOZ%2FjEmVhBtP6yP328JjFL8VthqkSUZtljsa0P4UXfIYGL8POuNip8cxACF4k8EXW1IcBJI2NEVJHiIHq%2FszgMdAvHefbYgv12iw4J9Nrgnq51bFvMqPS3JAYLp2TUyuaoGAA192%2FCMhdzX2F%2FTHNF3eRWJhi%2B86%2BHhCJhgYCrAtH1uZP5DY%2BTZmaEXBOlHqxr4PlSQmLSzHbeCiWg00JXwIMQ9ZnW0w1mu2zaj8xBfNMIHjOtv%2B8xDgKy7f8Y%2FdzMogu%2BKQsDzzzH4gKcwuYjewAY6pgHtxK%2F1HUME%2F0UzXmzc8OT3QJi9hwW7e2m5vD%2Bt18VPIeUVzBUs%2FKaYxVBtZKDDFiPe87IaHi0rWkbeeX5d82V7mNntkma7NoC1dNv%2F0XXJUirpWCsZwwbvJBd1EgrthKUG6n506%2FiKbPwdPD4VOz2YiRE1oW4GrplNyG04XsJPkFL7MXmcskwsSmGAf6%2FjQyNg52lWJ2hECk7AaNVVJa424FRtON8T&X-Amz-Signature=7e1467a9208d1a059ab41e8189eb54e32f6e5dec5d2508ef6647f9fc06f96462&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
