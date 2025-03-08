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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSRHIB3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC7G9s%2BSQVUCDQKO4XpRqNkNBc6shWb%2BEJhf07%2F3F0LAwIhAKSp5JuQuglU%2FnNxD8Fc6w1SidgPm8uQUu87ylwe9r%2FuKv8DCGMQABoMNjM3NDIzMTgzODA1IgxBFwapVJjrVHhMSNQq3AMP0fQc5OQ0W0ZlWku4N67pAjHsmPLCCxxbo4IBLUA3lUFo%2FRTXPG87DrVSM6lZdXmn74fW6lBYdZAFhWrdlLqBfovLXZ2qIQasG%2FLUzsjTz1hi8t8%2BqfMP9I7%2BYv9FUb9CBKIRa5dsqoea8e%2FWLgsvejFrhEax1Ww%2BpwlwMcTgmCaXMVu1XkcfojxoXSbcHNa1trUOjQnNtiEfQZU7O5Br1CDMDgOrfO7XCIaThIPwnntAd7LlFXr2LTak9DMDc5w8VmtdtD0dvUfSC%2B9tUwZdsTSS446OCiGT5VavKhfg3Aw0qkJmxy4W7QpzWFwVkl2ktLZBx9pMiCl77tMHlVoEkKi1UGa896ExjUacIH26CFX6OiIYsv25P1Ms3b190wuKZ6cknyxmMwLwvCCJSuFf%2BtY6yRfOvK2ZbYzKdulhGmIEWMd2D5HRtZRPiLs5p%2BUfbZBpPGTjG3P7ohfkjmfD9Z7rNgIhcIB18tyLjdiF8cYMJOmLxFe85kbIqX7c02I5rLlpqbF%2FoZU%2BFNXfIsrpzM%2BvIiDw1KDd2TVuLaJjUBXzIbQbPUckdi7DncCQOClojV1kx5bRWkdMWSzN22BihL5s9FLT9b0Qwe1dhbqgv927lzuj6LQ1kN%2ByTjDJgrK%2BBjqkAT8qUDMHyP9AAm6KYuu0SR9xyh45ofXwOj3xJCJB1Q%2Fw%2FaGF1aBwTM9qwP5mJtqZ3X8Vy8jmwHHOVzHYJaRMMMz%2B9zR85zh%2FDAyWOsNQnuMT5EJLZBzriuvJAFftyxFYAd3S2IDM31DOFyPZS%2BRoX9GpUuWn5fyzmP3kC1wp9%2FeIL%2BF0DEi7iGpN82mK6VkqUs0oVYuL8GUIvMP6%2FqU8P4BG6hlE&X-Amz-Signature=3f790dbb39d8d6be9b5c3292e1feb2fdca15af180d5e3be4de9bff9a146d930b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSRHIB3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC7G9s%2BSQVUCDQKO4XpRqNkNBc6shWb%2BEJhf07%2F3F0LAwIhAKSp5JuQuglU%2FnNxD8Fc6w1SidgPm8uQUu87ylwe9r%2FuKv8DCGMQABoMNjM3NDIzMTgzODA1IgxBFwapVJjrVHhMSNQq3AMP0fQc5OQ0W0ZlWku4N67pAjHsmPLCCxxbo4IBLUA3lUFo%2FRTXPG87DrVSM6lZdXmn74fW6lBYdZAFhWrdlLqBfovLXZ2qIQasG%2FLUzsjTz1hi8t8%2BqfMP9I7%2BYv9FUb9CBKIRa5dsqoea8e%2FWLgsvejFrhEax1Ww%2BpwlwMcTgmCaXMVu1XkcfojxoXSbcHNa1trUOjQnNtiEfQZU7O5Br1CDMDgOrfO7XCIaThIPwnntAd7LlFXr2LTak9DMDc5w8VmtdtD0dvUfSC%2B9tUwZdsTSS446OCiGT5VavKhfg3Aw0qkJmxy4W7QpzWFwVkl2ktLZBx9pMiCl77tMHlVoEkKi1UGa896ExjUacIH26CFX6OiIYsv25P1Ms3b190wuKZ6cknyxmMwLwvCCJSuFf%2BtY6yRfOvK2ZbYzKdulhGmIEWMd2D5HRtZRPiLs5p%2BUfbZBpPGTjG3P7ohfkjmfD9Z7rNgIhcIB18tyLjdiF8cYMJOmLxFe85kbIqX7c02I5rLlpqbF%2FoZU%2BFNXfIsrpzM%2BvIiDw1KDd2TVuLaJjUBXzIbQbPUckdi7DncCQOClojV1kx5bRWkdMWSzN22BihL5s9FLT9b0Qwe1dhbqgv927lzuj6LQ1kN%2ByTjDJgrK%2BBjqkAT8qUDMHyP9AAm6KYuu0SR9xyh45ofXwOj3xJCJB1Q%2Fw%2FaGF1aBwTM9qwP5mJtqZ3X8Vy8jmwHHOVzHYJaRMMMz%2B9zR85zh%2FDAyWOsNQnuMT5EJLZBzriuvJAFftyxFYAd3S2IDM31DOFyPZS%2BRoX9GpUuWn5fyzmP3kC1wp9%2FeIL%2BF0DEi7iGpN82mK6VkqUs0oVYuL8GUIvMP6%2FqU8P4BG6hlE&X-Amz-Signature=28e2d652f122b349aee92f0cff8c3261c6ee5a91221d5b083769e61c22b023ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSRHIB3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC7G9s%2BSQVUCDQKO4XpRqNkNBc6shWb%2BEJhf07%2F3F0LAwIhAKSp5JuQuglU%2FnNxD8Fc6w1SidgPm8uQUu87ylwe9r%2FuKv8DCGMQABoMNjM3NDIzMTgzODA1IgxBFwapVJjrVHhMSNQq3AMP0fQc5OQ0W0ZlWku4N67pAjHsmPLCCxxbo4IBLUA3lUFo%2FRTXPG87DrVSM6lZdXmn74fW6lBYdZAFhWrdlLqBfovLXZ2qIQasG%2FLUzsjTz1hi8t8%2BqfMP9I7%2BYv9FUb9CBKIRa5dsqoea8e%2FWLgsvejFrhEax1Ww%2BpwlwMcTgmCaXMVu1XkcfojxoXSbcHNa1trUOjQnNtiEfQZU7O5Br1CDMDgOrfO7XCIaThIPwnntAd7LlFXr2LTak9DMDc5w8VmtdtD0dvUfSC%2B9tUwZdsTSS446OCiGT5VavKhfg3Aw0qkJmxy4W7QpzWFwVkl2ktLZBx9pMiCl77tMHlVoEkKi1UGa896ExjUacIH26CFX6OiIYsv25P1Ms3b190wuKZ6cknyxmMwLwvCCJSuFf%2BtY6yRfOvK2ZbYzKdulhGmIEWMd2D5HRtZRPiLs5p%2BUfbZBpPGTjG3P7ohfkjmfD9Z7rNgIhcIB18tyLjdiF8cYMJOmLxFe85kbIqX7c02I5rLlpqbF%2FoZU%2BFNXfIsrpzM%2BvIiDw1KDd2TVuLaJjUBXzIbQbPUckdi7DncCQOClojV1kx5bRWkdMWSzN22BihL5s9FLT9b0Qwe1dhbqgv927lzuj6LQ1kN%2ByTjDJgrK%2BBjqkAT8qUDMHyP9AAm6KYuu0SR9xyh45ofXwOj3xJCJB1Q%2Fw%2FaGF1aBwTM9qwP5mJtqZ3X8Vy8jmwHHOVzHYJaRMMMz%2B9zR85zh%2FDAyWOsNQnuMT5EJLZBzriuvJAFftyxFYAd3S2IDM31DOFyPZS%2BRoX9GpUuWn5fyzmP3kC1wp9%2FeIL%2BF0DEi7iGpN82mK6VkqUs0oVYuL8GUIvMP6%2FqU8P4BG6hlE&X-Amz-Signature=991b22fc1388bad07ec1e0adac6e4d7125559899a24cbd13394962d59580decb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
