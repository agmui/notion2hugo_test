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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRUZ37Z%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEQ0E%2F9KyoS3MvUXeymwPjxqeJfIyYQckQGQv7H29PAIhAP6U03PSoPq95ElCT6ENFe1Rgbx5roeHNbkLOKYdW2wlKv8DCF4QABoMNjM3NDIzMTgzODA1Igy14UBvRXUOVNVrdkIq3AMno1EUgBNvdupaD2P87jqsgKKmCGeSh6LL9WEjebUa0MwzkagOeVl%2BdeGH42GRWZQyzDdP5hpGaFmFfCRK8ENsR%2FfsmecQ0dc5fwHM99%2B14gGaMVEj02Lc91LM4bDCmbV3GFSUgPG9pTLt1%2BzfjyEgsT2b%2BIaafblRie5X2G%2BoveaZciWRv1MxQ9m%2BK4hI1fnDow8y%2BqvaYMOVZSWVWLwgcHuWrVX50o5Gbr%2FtqlsIF22mC1pfuPuCIap1NmnzhNx%2FJuUShiv8AaeYFnPGo47ROgp2Zlinzi3SPhAJRrqlnLlCqUX8tomfTa0SEjdSqN%2FvAMbHndjG2aLocQE5A9xJCdc%2B6dnv28zYTfZIjdh4zC9dPG%2F2I6TYTUZkBeJCnv0lzSe1jPYx926L%2B1c21Wh8L%2Bhqa%2B7%2FnDnXEV7FKlTsxmLsR4dq9LWnXeb4IY%2BX4jl98gcE7zR0HYx3QLLhEk2NjuNH%2FBa9ovcnHasIvDwIkj%2BnDV4r%2BVoa%2FbM6sy%2BMGAB55mRToNHPKudVZYs7o5n1wsQ6Zu%2BZarsEVnsxC0oz31rtTKWbSqNsl6riSnGDqQvXi8ehUoiE1tzcikSaH9Q0trb83XrwIRBcbVFmKEid8Y7OtU8zyeQ9i0oZ0jCss%2B3ABjqkAVZUJn6VyXDXQNHTD6Bx8gb4xqQRV5T%2FrcKwD%2FpJBg7IDxGwVgYbNwNGm5JOI%2B77yVlqp5kyWCWcVtgCd8Bo3dMN4OXeZyH%2FKU729hKh%2FhBnF9ooYtbivMrgPzaqHdhuZDGIyPv3eSVyrs2cAVez4aAA6dEpwJYIYStdwLWczMd6AavG28bckEFhRQzTwCigfVz4k5lTacEPTtMIlJp73%2FUoCE2y&X-Amz-Signature=9a629d85764beff888008ef3b426eb0ef38069af8a6860ee2e61a6b6384b5c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRUZ37Z%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEQ0E%2F9KyoS3MvUXeymwPjxqeJfIyYQckQGQv7H29PAIhAP6U03PSoPq95ElCT6ENFe1Rgbx5roeHNbkLOKYdW2wlKv8DCF4QABoMNjM3NDIzMTgzODA1Igy14UBvRXUOVNVrdkIq3AMno1EUgBNvdupaD2P87jqsgKKmCGeSh6LL9WEjebUa0MwzkagOeVl%2BdeGH42GRWZQyzDdP5hpGaFmFfCRK8ENsR%2FfsmecQ0dc5fwHM99%2B14gGaMVEj02Lc91LM4bDCmbV3GFSUgPG9pTLt1%2BzfjyEgsT2b%2BIaafblRie5X2G%2BoveaZciWRv1MxQ9m%2BK4hI1fnDow8y%2BqvaYMOVZSWVWLwgcHuWrVX50o5Gbr%2FtqlsIF22mC1pfuPuCIap1NmnzhNx%2FJuUShiv8AaeYFnPGo47ROgp2Zlinzi3SPhAJRrqlnLlCqUX8tomfTa0SEjdSqN%2FvAMbHndjG2aLocQE5A9xJCdc%2B6dnv28zYTfZIjdh4zC9dPG%2F2I6TYTUZkBeJCnv0lzSe1jPYx926L%2B1c21Wh8L%2Bhqa%2B7%2FnDnXEV7FKlTsxmLsR4dq9LWnXeb4IY%2BX4jl98gcE7zR0HYx3QLLhEk2NjuNH%2FBa9ovcnHasIvDwIkj%2BnDV4r%2BVoa%2FbM6sy%2BMGAB55mRToNHPKudVZYs7o5n1wsQ6Zu%2BZarsEVnsxC0oz31rtTKWbSqNsl6riSnGDqQvXi8ehUoiE1tzcikSaH9Q0trb83XrwIRBcbVFmKEid8Y7OtU8zyeQ9i0oZ0jCss%2B3ABjqkAVZUJn6VyXDXQNHTD6Bx8gb4xqQRV5T%2FrcKwD%2FpJBg7IDxGwVgYbNwNGm5JOI%2B77yVlqp5kyWCWcVtgCd8Bo3dMN4OXeZyH%2FKU729hKh%2FhBnF9ooYtbivMrgPzaqHdhuZDGIyPv3eSVyrs2cAVez4aAA6dEpwJYIYStdwLWczMd6AavG28bckEFhRQzTwCigfVz4k5lTacEPTtMIlJp73%2FUoCE2y&X-Amz-Signature=ee4823105627b86d5318ca9f8141d43f6f2e737e8ea43cf2813baad711a2c9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRUZ37Z%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEQ0E%2F9KyoS3MvUXeymwPjxqeJfIyYQckQGQv7H29PAIhAP6U03PSoPq95ElCT6ENFe1Rgbx5roeHNbkLOKYdW2wlKv8DCF4QABoMNjM3NDIzMTgzODA1Igy14UBvRXUOVNVrdkIq3AMno1EUgBNvdupaD2P87jqsgKKmCGeSh6LL9WEjebUa0MwzkagOeVl%2BdeGH42GRWZQyzDdP5hpGaFmFfCRK8ENsR%2FfsmecQ0dc5fwHM99%2B14gGaMVEj02Lc91LM4bDCmbV3GFSUgPG9pTLt1%2BzfjyEgsT2b%2BIaafblRie5X2G%2BoveaZciWRv1MxQ9m%2BK4hI1fnDow8y%2BqvaYMOVZSWVWLwgcHuWrVX50o5Gbr%2FtqlsIF22mC1pfuPuCIap1NmnzhNx%2FJuUShiv8AaeYFnPGo47ROgp2Zlinzi3SPhAJRrqlnLlCqUX8tomfTa0SEjdSqN%2FvAMbHndjG2aLocQE5A9xJCdc%2B6dnv28zYTfZIjdh4zC9dPG%2F2I6TYTUZkBeJCnv0lzSe1jPYx926L%2B1c21Wh8L%2Bhqa%2B7%2FnDnXEV7FKlTsxmLsR4dq9LWnXeb4IY%2BX4jl98gcE7zR0HYx3QLLhEk2NjuNH%2FBa9ovcnHasIvDwIkj%2BnDV4r%2BVoa%2FbM6sy%2BMGAB55mRToNHPKudVZYs7o5n1wsQ6Zu%2BZarsEVnsxC0oz31rtTKWbSqNsl6riSnGDqQvXi8ehUoiE1tzcikSaH9Q0trb83XrwIRBcbVFmKEid8Y7OtU8zyeQ9i0oZ0jCss%2B3ABjqkAVZUJn6VyXDXQNHTD6Bx8gb4xqQRV5T%2FrcKwD%2FpJBg7IDxGwVgYbNwNGm5JOI%2B77yVlqp5kyWCWcVtgCd8Bo3dMN4OXeZyH%2FKU729hKh%2FhBnF9ooYtbivMrgPzaqHdhuZDGIyPv3eSVyrs2cAVez4aAA6dEpwJYIYStdwLWczMd6AavG28bckEFhRQzTwCigfVz4k5lTacEPTtMIlJp73%2FUoCE2y&X-Amz-Signature=5ac6e96637b8a1e2127ebf486e227dedb33e66f62f20ccb1c5d69271123c4ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
