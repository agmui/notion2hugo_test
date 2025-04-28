---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWPAEOR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9thBEn3h1RAnXhW4tOGsdRj7S%2B66evtHKHsYqnJuwQAiEAvu7pcKtmM3BdAGG6yI6GQVJxrK%2FcYA9oaTF3hOwn0Loq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKwkPHjv3QqE7dtdWyrcA%2FrexEw4FCfdE1zxN1owOXd6D8Vhc24JRyALn%2FdPvD0FePxjo4fyiGxCoctsQ17pJPfvOfknOFuP9S%2BCXJTCC8l1ESZoIhJdrvT52cYLgvBA7nW00s9HOKk62ljNIBcA9pxXGFoA96i5fsgB4kiwKgv%2FkrlWqdt7HPcAGQlVS4I6pNQnL28L458IzBBzg7oz%2FXoc2mn%2BuA7ahqP1vacHE1uvKT0HMdp5ibH20DJvKv1qx04qdajn90SSERmwbzcrNQ9M8iYo6y7FgqNLVSfcH7IMHFoOqWYFgvVv6TNEORvFtxeSBhGBex5f2s%2FXR8FiF3BXhGYzXA0QQzZVX97f5LulE6AUS9rdw7gdhcJSjAprOxEA9%2B2%2B0T8wRwvyUxAgZtEBLSQ3MZcJe2fHSk0nxPld0Z8LFn85D93LU6QBxoOu%2F9r7P7eB42uF3OZGg%2BF5GMyW8f06Khj6i8aGP4eeyoEfh6Ug5dhdvYKBjEV%2B2MX8%2B4KiCNgA%2FX6ScJi5b%2FtQ7lN4cxBTxWOgqcIY%2B%2BbqowianTc23T4LST1V72jJDLJHVVR8VpVzENrx3JqNJa5LnAnRHbkLTGjlITiy2x%2FDAaC%2BCyanJe5RACgO86616yIcYdrcw5JCP9L0C%2BI1MNLIvcAGOqUBMCdZ3gtw01NJ3%2Bq9d3GGTRnQQK61lTsHmCGYMnzuX7uJ8S1dDtd5vmBKVmk9INUASGv3kPxEdilQSx%2F6RloRYAgfJnK76ra%2FXLVy2zigLhgSlKsZ8HicOtrf9g7xu8IKAGe4UxUPqvUEd7BA9psUUjuu%2BMxJ6DEtmu7t2JN%2Fs9egeUTJJfczUWPJJmALwnv5uIqyn0n7v40wtHpJOWzqoivPHz0%2B&X-Amz-Signature=95f9eaac03c1cae91be642da431d2a53e8ad8e553150ab924f66bd658f18d285&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWPAEOR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9thBEn3h1RAnXhW4tOGsdRj7S%2B66evtHKHsYqnJuwQAiEAvu7pcKtmM3BdAGG6yI6GQVJxrK%2FcYA9oaTF3hOwn0Loq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKwkPHjv3QqE7dtdWyrcA%2FrexEw4FCfdE1zxN1owOXd6D8Vhc24JRyALn%2FdPvD0FePxjo4fyiGxCoctsQ17pJPfvOfknOFuP9S%2BCXJTCC8l1ESZoIhJdrvT52cYLgvBA7nW00s9HOKk62ljNIBcA9pxXGFoA96i5fsgB4kiwKgv%2FkrlWqdt7HPcAGQlVS4I6pNQnL28L458IzBBzg7oz%2FXoc2mn%2BuA7ahqP1vacHE1uvKT0HMdp5ibH20DJvKv1qx04qdajn90SSERmwbzcrNQ9M8iYo6y7FgqNLVSfcH7IMHFoOqWYFgvVv6TNEORvFtxeSBhGBex5f2s%2FXR8FiF3BXhGYzXA0QQzZVX97f5LulE6AUS9rdw7gdhcJSjAprOxEA9%2B2%2B0T8wRwvyUxAgZtEBLSQ3MZcJe2fHSk0nxPld0Z8LFn85D93LU6QBxoOu%2F9r7P7eB42uF3OZGg%2BF5GMyW8f06Khj6i8aGP4eeyoEfh6Ug5dhdvYKBjEV%2B2MX8%2B4KiCNgA%2FX6ScJi5b%2FtQ7lN4cxBTxWOgqcIY%2B%2BbqowianTc23T4LST1V72jJDLJHVVR8VpVzENrx3JqNJa5LnAnRHbkLTGjlITiy2x%2FDAaC%2BCyanJe5RACgO86616yIcYdrcw5JCP9L0C%2BI1MNLIvcAGOqUBMCdZ3gtw01NJ3%2Bq9d3GGTRnQQK61lTsHmCGYMnzuX7uJ8S1dDtd5vmBKVmk9INUASGv3kPxEdilQSx%2F6RloRYAgfJnK76ra%2FXLVy2zigLhgSlKsZ8HicOtrf9g7xu8IKAGe4UxUPqvUEd7BA9psUUjuu%2BMxJ6DEtmu7t2JN%2Fs9egeUTJJfczUWPJJmALwnv5uIqyn0n7v40wtHpJOWzqoivPHz0%2B&X-Amz-Signature=7cae63c3fa1abb3b857b8af6adbc5a2cc091ede4bebc7fb39a8867fb175489b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWPAEOR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9thBEn3h1RAnXhW4tOGsdRj7S%2B66evtHKHsYqnJuwQAiEAvu7pcKtmM3BdAGG6yI6GQVJxrK%2FcYA9oaTF3hOwn0Loq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKwkPHjv3QqE7dtdWyrcA%2FrexEw4FCfdE1zxN1owOXd6D8Vhc24JRyALn%2FdPvD0FePxjo4fyiGxCoctsQ17pJPfvOfknOFuP9S%2BCXJTCC8l1ESZoIhJdrvT52cYLgvBA7nW00s9HOKk62ljNIBcA9pxXGFoA96i5fsgB4kiwKgv%2FkrlWqdt7HPcAGQlVS4I6pNQnL28L458IzBBzg7oz%2FXoc2mn%2BuA7ahqP1vacHE1uvKT0HMdp5ibH20DJvKv1qx04qdajn90SSERmwbzcrNQ9M8iYo6y7FgqNLVSfcH7IMHFoOqWYFgvVv6TNEORvFtxeSBhGBex5f2s%2FXR8FiF3BXhGYzXA0QQzZVX97f5LulE6AUS9rdw7gdhcJSjAprOxEA9%2B2%2B0T8wRwvyUxAgZtEBLSQ3MZcJe2fHSk0nxPld0Z8LFn85D93LU6QBxoOu%2F9r7P7eB42uF3OZGg%2BF5GMyW8f06Khj6i8aGP4eeyoEfh6Ug5dhdvYKBjEV%2B2MX8%2B4KiCNgA%2FX6ScJi5b%2FtQ7lN4cxBTxWOgqcIY%2B%2BbqowianTc23T4LST1V72jJDLJHVVR8VpVzENrx3JqNJa5LnAnRHbkLTGjlITiy2x%2FDAaC%2BCyanJe5RACgO86616yIcYdrcw5JCP9L0C%2BI1MNLIvcAGOqUBMCdZ3gtw01NJ3%2Bq9d3GGTRnQQK61lTsHmCGYMnzuX7uJ8S1dDtd5vmBKVmk9INUASGv3kPxEdilQSx%2F6RloRYAgfJnK76ra%2FXLVy2zigLhgSlKsZ8HicOtrf9g7xu8IKAGe4UxUPqvUEd7BA9psUUjuu%2BMxJ6DEtmu7t2JN%2Fs9egeUTJJfczUWPJJmALwnv5uIqyn0n7v40wtHpJOWzqoivPHz0%2B&X-Amz-Signature=7aced710271b3e7b83ebc975c59e81d8ad72953b405816cea128eb602f8fa69c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
