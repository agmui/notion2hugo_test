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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=d4c77a380f9b257b78f21ec9cccd71635bfc529b1661bc1e581bfe9062ea8dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=bb4a60af7b12b997d5ada0aeb603defb80c315e4fa9bda951dfb0a52b9e9b00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=1e0fd4747f093f2da6719e55e85c90183dcc29beb3731f0810af15d2b62bb341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=b027e1b47735814e74796110e46ad6f126d5022f520ffb6e44937a8d14d04180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=29144dcf761b265144a288f45dc8b22840df4d5a0f0781cff5f8adbe7514ff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=5c2ae2f78d2d1e2f8e25a4a2ea0e6039f52715dcfb6204f1f8175679b3240f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCFVWOL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwyzzc1w0CGHYQPaBz694Rguj1DoNhafkKZEiAxgV6AIhAI6PW2pYghKWkuTx5lzijwziU4%2BbugrkSGIK6b0urlluKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxegv8koRQ7wjplrj8q3AMRBSszIsmzHUOEbloTYr4hxuyXHeu7d2ScyyENJfWzZsnsvZA1u7hmVyJ34GQ9eS9UHWa2xVbZNy3UxKYBzUBM918F3nRaLL9Si1sUoSt%2FvhJ67%2FQQGCh9zzZyZpAqCn6bdHZq8VGtpIC9vPcwGgXZZ9xtDsKcYyuChx2g5aec7G4MuAmIJqPUtjpc7OhC4yJJYuUiYI9W3umwJ4lj6uAahRTDFJLetiA080amnvXi%2BsTpOQ0rKBHBGqCZXua%2FP9jFFIlLAdk6H4poFWcKkvIhmbTe0CL0feWYscNFUJKG%2BcWnxJwYoPvZC37xVkkaiuR0CqQqmTEzSDTv7rJzMCL04HBbJJUSbgsaA%2FiJaQE%2B6WuTvLmXDQkzPFzUcM8qeeYcgtzE8%2Fzyb84B7fEh%2Fk%2BFlQuLAXiBaCkXG2TdSHSYye3Rv3wzhCwOorgf%2B2yFBiCvWNdqOr7DgiZVo5biGpGRccNyEIenJ4wxk3bVYK74RHkVF8%2FFyk4hhxnQlJ6PIHmlNd0%2Bi%2FzDl7b0pRb3ql08DKhSgmiTn9PCacKLqYpkHOoEsfpDXr3qxZWbqlkJRiBcCS25qHYygElKuf02hmrYCHh2zDxvfFr0vTbRqgveAUis9xNTxcjVIcGsvTDxyaTCBjqkAQgc%2BxZcIcgVsuPLoAIXje4o3QIrgmUKCIAbUNVpUnVheE8RRyuy4TzLNy6a1SgumM4dFjNW07cX2o4Lcdq3UaguoLWd4QBAO6bUesziaSl%2BBs956ysAnFpxJw8tWN0A0zR3WdjGkT9XhE9BzWM883XfSIaL6eK1lKG7ZPIQuAkzP5S3AMeUU6QXkV%2FR%2FAShX%2FL92vrvQegAYxTLn2DYvT5YYJ66&X-Amz-Signature=8b8680bbf53383c62901992d8738703f56a7caf7400d92a0ddfa28116e6ae813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
