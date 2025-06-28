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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=9b09d43fe771f714af5827f905b31f50204caeac3bab7a6ab583b09f5536e67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=3959699d2d176dbd4360b6a3a889ac3a94757625edd64c867e79c2e8c86aff77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=9ed6cc7aa13fb214edd3e188d81ac0e7066665b9ace58910a258f5955222249a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=7d321c6278394912d04407aa9d0f071ef6e23549506b25aa8a028473bc4304e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=048d1df415e08aeb94ecd493742664313c05b1a9b6a7ae77485b71118770f0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=e81471f27fc1c9e323c0a12f15bcd01e74c0c0e4683690e38a876d9249525303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKD37KJ7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKKeaSYLUJQSnbr21EPeaxvnjY0K2%2FFQ116jY%2B61jDeQIhAJ7kCFyAzVkyi569vVsdat%2F9zZCrUMrt%2FvrfW71%2Bw2XZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx070PEMqcsa9twnf0q3ANpA3MQJIiIoaTZeYGtMAKOk69fvsYWiI9sSi4GJA6DCM3mczdwGXyRi%2BbgDtb8MYehwiehYjhFZ3AxP77xE%2FCtvjtrCkU6ExRyd3HgfAsV%2Bjv2ra6XCaurAEzIqxE%2FR2%2Faw6XvRrzn6Fa0ejJVPo8JeQCWTLL7rxxwX3x0gBjXBfpWhMvfRXacfZSRhHg4ktGnL0rQsmmuAAo2w6nzd7Ri7pWmQA7DqVlnPz1KStdAzIPBTNlCuZGeNFwK%2BDzqFn%2BjhyBxspSL%2FI6opKWcFMnVIU8dJ36P%2FyYMq6%2FMjNl9zuq4Ybax9hwANEZGW4L6RB0YK5hfy2gMLGSKK%2B3b5PO4rgKJKV046b3wmyrFdLagVsU5JmchVOiuaT6JyMwr0JoThivdrTiXiktrw4lxiP12TFQk9cE9qmySENn2WRwm2qnx2iSfwfFSlTMYA7N8vtd4muSOz%2BFM7sJAzoLkQJwumEbn1oMKlP5NJggO2%2FUKILBoIsLR%2B7r9%2FPDltjlNsALbVe6hXRv5gMGIwQ3BlzaZdWnhs0dPocqL0WxU6pN2NmtuZyjI8iHz%2BASET4ToReAQwYCRjgL5KZpDvcTo%2FZTnDx8mSBX%2FpBJv28zKvXcV16DSXCIws%2Bigcae5qjDYj%2F%2FCBjqkAZLB%2FEd0Ax3iDiW5zqSPJk84g6txy03I5wHqh8ZQzNnqJhJpUeLYL28VqnO6NXbtImFx20mDe6v4xqn1cQRPmC4gj6d8jV5i5L8wfc1OupOkRdPYAvnZlezwKEPxkSEo34grvTd9XQESakHjwNxtvJLDFLm5ct6uSi8MlL%2B%2FBEvGjnUCZvGBfjHbpEgMZ2RFWygwmWGZId8X4qbIykPqNcseeKxp&X-Amz-Signature=5a38c5409a8f681953a92d2de379794a4fb2fb4ad0964bfdd02fa3868454a7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
