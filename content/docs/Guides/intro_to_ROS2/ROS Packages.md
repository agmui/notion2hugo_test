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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=512cd9ee72ae522c61c8f8815e5c58253f41610a17cfdb37e43b819ba6310d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=8bb4d1de1feb368f91c306be73a920c0b753b4d683fc4e94a2b0861e69f0eeab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=3ae3c45c2ea8d76e1497624078aed49fbe9cf35743daeba3edeef9beb234b170&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=3ede12458d59fb32bbe36c02b4c461465f8176dffa3d0ea4a28fdf851d111ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=23ad1bea2f8de007ebba737a6fe3bc847d12e97a7afae6a843d976a56f900bad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=0243781c87f44f248e5470abab43f569a5058c43da04c618f1775041a16ba377&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NARAX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcZJDwTarbsr1wRoVx%2BW2CX8qR0RqHtJgT5juwTURwIhAOsy9lb%2Bp34fhtqah0vAtxsgTTn0fynIn%2FmCJk51FP%2FgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL49Uq99pyJeqEFJkq3AOwkb5Vzlagvj6wmOuxZnVrXI4YNZPbL6BNj68WI3DyV2dv1g6BuK7e1HMy9pVgrSNPq%2BAD8Owfvy28MjjyYq2GxA6gYbhNKAzvYA3%2F2tghHqnMOYCR9ynMW6KRejMlpLCNfg6aB3WUlG85m2Z3tV7TPf4ZMZ3GwLP0v6JPdJCcC3F8Sics1kd5TiLF9WCUQ8%2Flx%2FRer%2FrRdNDG9T96IKWlJS1pqqY3CEPAIwLqDCQ8ZZ8u%2FFeqKZyCm7%2FN%2BzryEga26tPR0HAJfTbxFPmekNsX4hw0NSHaThzvG3iqTic1PlH3tk3X2LamZ0PvIdDfdE%2FloXLFFaQwIPk0PoXolVvaJ94W7YdQD4%2FK%2BeJEr1%2Ff0lMyk4Ef7PNJn3Qw%2FQ5os2MxPBdZ66kJbFeYRpdAbkT4xf5lGSxsDS5g7KRi%2Bj4KX1JwxBVWpmVHvipKYKh1CjATKs9uX8LiOe%2FyO5cpDrKzo7bs%2F0%2FlMFP1hz4yPK%2FLwEyEM8t4qPF3lLl66r55jXjQ8Oqs40swE8BIzp3KF%2F6zRYtUi4HjeK61i2Y%2B8%2BaX8bU9RO3oln0hDTYWRBIdUeIUEr5lDv94LaW0vIykiU9kLWHNzZjQ0hxT%2FgOLCxVwsb6XD6uKiJTUfjgYOjDm2%2F68BjqkAWkvb3978%2FmyJrngy%2FipcHIWufTzlwVFHVrpy9rx7hq7lV%2FcvrHhU2n5MfXpJF27rwxRedtmrR1BfuZZKZs2r31b0mDbWeY4YR3hdwYHiYNRWxv1l2kbR%2BrkD6Zniy4idS59AwPdWsa0fDb0HDZoNQYueYbCu84%2FkvXtecvJZOoLhQ9QY9vGpqlcoSy9DDWY6SGBVXwb1brkv6KQW%2F%2BJwnwcIe5n&X-Amz-Signature=20d88813aba9b9d2ed5ef5b1b79b6ce8beb695298fa64cddd2502d7340b202b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
