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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=eda4e09a4b86a6c3f53daa69e51d1f661210e4b45da2e14dbffc279adce9625c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=b33269e9c118022e9611f6b86236a37980161a5eb88fcffd3da635e2c25403cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=b2a447385eee7a6abc9a64af0c6747ccc165395a739ad0b92c2c7a118f89586c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=a38d0d58637243f79d5ebe837294ea33ad1963f9551669fb5af996965c28808c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=55b0a43268c86d03c8524f8e2179722eecea44c1ff7193dd5561703cd3f14141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=080a62a84e6fac0f06d59eca100a2620fc5db568775aed829bf6b7560c0f4e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2KMVR4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FL8UOfQ2tsYJUIDWCOaeB6JH5ZhyO1DDbUbeiQwEXiwIgXA%2BtO8bmz3tOipZl2VLAo8k7cpz%2BlZ5BhjDBWiZGeOgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOAdihCqFeJfJu3AircA5sicnRl%2Fdto1MV3U3qHrSXx5l2Z7JbOZMNXriB2Sd1CAa2QaEigD6QF26Jgo0ISzeQ0FgBRu3uvZF77mx1xehfpXufIq2RHBp82br5Q5WOmX7qbPx5gzAc4eDD19EFhVl7xC8SKmMaQ3Gfgo%2BelSmsRrvEwLojeYj0in505M1GSf9WPXH%2F4moZMdlj86vvUatJA5MYVnQp%2FomjC6X6Syh8wL89Wqe7%2FNzWwtngHMfbfKcK%2BtxTv1THY%2FIuD68UhvYFOzTAPUu1tUp2KR1JPsUpC0LxCbTmYfCUimmWMJbmWdiJ9iY99RyVP4Q0009XCYpx4MHkQ%2BgrcoKIH4BrECe5YN2yfSgx4dPvz8y3BA9JDJvWUa993SjgYcAwS0uEezPssZCQvqfXTHt4qc25ddKdg8r0fEB3xUNSRfdFX%2FSot%2FdaN2ub6e6M0U%2Fv9EherPBTtmWA3%2F%2BYbbFUJ42h4PqJ%2Fo7VaEVfujXwlcGWM%2FS1NIM2pX1O4yubvvwat3MRJJJkY3OcxAmhbelqgOffE6Ike1EgL3b%2B2bhaiU%2FWoDP4000%2BwAqIZ5u%2BK3H6M%2BHoYbQGmUYprVyqNDe8HlsiYeMk%2BwovJyKiEX2esAZ6N0J%2BO3xMrfCglNYd0xf%2BHMILvxMIGOqUBUq%2BBn83nB0pIPqiuAb4rq%2FeCxmhVtlkAnHVM8DM8P9y5r7pzTmUyDuAoWrucg2ySGzQBDZUywlGvoJVChuQIcVe2vMuEZCfO2H%2FGJV5EdghJ6RPpy18ycebT9%2F7sgb0Y1Aa5%2Bgrd2GuBLzPmu7G78DZtW8Fnxtnw7YRI5kigitzKAElV%2FuZJqhEbOFhtCX4GtUWP83yWJEOtq%2B%2F9asvC3tqaD%2B84&X-Amz-Signature=cf2ef7739755b92f59ca42f1702bbe57b3efa7a60dada5f47d4ed1bffb977564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
