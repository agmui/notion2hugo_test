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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7CEFCE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDqgXZG8a0NqDLfnbY8JcRa%2FVo2WNiQrGt5y9HNUMWQFwIhAOQxJ%2BZp%2BdtuaJZZ3K%2BKm%2F2XUGZYcZ%2FlUYLgzt73Xi%2BaKv8DCBUQABoMNjM3NDIzMTgzODA1IgyqjxYaEUtgDkE%2F2GMq3AOVkelTJYzMBvWzEfShA9Z9nQYuIiHl3a7Ie8%2BfRqHcxvODduj8zj66Y6v7n2ByOklvdMFk3lGslLHEmchmDAWc5k2o5q9EHu%2F12LhsyPU9R4e8d6bNxBLSzqS5Fa944GpyX1uvTE1%2BfWt%2BZd0uZCJLkquPDiEJGM2LyRL1hFbLTFSOWmhaPfgk9N%2BBryLU%2FpXiPlk1gB%2BX%2BwsjWmzK2V9P6ez3EEXOJsEfbQ6B4bYiEKOuYsvsCTSPo4xIOOEmWKB08sGAPZdFhMuXgf5UHXc1Mw4yL49%2FeDkUfvl0TE4h%2Bs8z9k0plvvPSVCoiHpOiWnP04ANIPk6YMgxJyY7mdKex680O0ghaDNAz19ARQcc1cULRWlJzJmbot1cOPdFTYs65AbWBpbkSyclxg0kt2e0h7HJDL6xKYpvZ%2BHVpOQcfJSl7uZJf64qAqDD3kZqMMkWXxLgTkKSb%2FeIKD2D1iRw5pigLO7%2BUDcile6%2BCzjeWsWgh9UQB4rVDxsvrQgs4fiDOJ81gYe8LRVP5jBRQEaTVaCbbwr6YPUt6Z3gfWYAFC%2BnZIYSLszdwm0qP71c2QUMOCy1kTlAxAJmaYfng9nFYLfPCVCCikXNBR%2FmdJ6CN9%2F6W%2FZoaIde9wuZKjCl9OTCBjqkAZBq0zZW66Hu%2Fz6mTIoPVeNH769eSuvTVj6gWwHzTuRjUEk0%2BidbM0beK0S6Y6O%2FUOel%2Fz4OQAz95Q7591WKUCPk%2FVxBaS7NOJTu7xkTOLnFK4eLtmZxZ9gkF7TJm7ldqKdMCGOIoULbd0pNU2wB2SNaGmm9OgVYoeN4v3YL%2B%2BMguyJO3G6r3ZlKAOb7xeN1oC6%2BBnlxkQjQ5z0BlIuWAXnBJZqL&X-Amz-Signature=a26093c500327f0ee096f1eea5355a5b027b1e3adc67e145515c76d218d1b3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7CEFCE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDqgXZG8a0NqDLfnbY8JcRa%2FVo2WNiQrGt5y9HNUMWQFwIhAOQxJ%2BZp%2BdtuaJZZ3K%2BKm%2F2XUGZYcZ%2FlUYLgzt73Xi%2BaKv8DCBUQABoMNjM3NDIzMTgzODA1IgyqjxYaEUtgDkE%2F2GMq3AOVkelTJYzMBvWzEfShA9Z9nQYuIiHl3a7Ie8%2BfRqHcxvODduj8zj66Y6v7n2ByOklvdMFk3lGslLHEmchmDAWc5k2o5q9EHu%2F12LhsyPU9R4e8d6bNxBLSzqS5Fa944GpyX1uvTE1%2BfWt%2BZd0uZCJLkquPDiEJGM2LyRL1hFbLTFSOWmhaPfgk9N%2BBryLU%2FpXiPlk1gB%2BX%2BwsjWmzK2V9P6ez3EEXOJsEfbQ6B4bYiEKOuYsvsCTSPo4xIOOEmWKB08sGAPZdFhMuXgf5UHXc1Mw4yL49%2FeDkUfvl0TE4h%2Bs8z9k0plvvPSVCoiHpOiWnP04ANIPk6YMgxJyY7mdKex680O0ghaDNAz19ARQcc1cULRWlJzJmbot1cOPdFTYs65AbWBpbkSyclxg0kt2e0h7HJDL6xKYpvZ%2BHVpOQcfJSl7uZJf64qAqDD3kZqMMkWXxLgTkKSb%2FeIKD2D1iRw5pigLO7%2BUDcile6%2BCzjeWsWgh9UQB4rVDxsvrQgs4fiDOJ81gYe8LRVP5jBRQEaTVaCbbwr6YPUt6Z3gfWYAFC%2BnZIYSLszdwm0qP71c2QUMOCy1kTlAxAJmaYfng9nFYLfPCVCCikXNBR%2FmdJ6CN9%2F6W%2FZoaIde9wuZKjCl9OTCBjqkAZBq0zZW66Hu%2Fz6mTIoPVeNH769eSuvTVj6gWwHzTuRjUEk0%2BidbM0beK0S6Y6O%2FUOel%2Fz4OQAz95Q7591WKUCPk%2FVxBaS7NOJTu7xkTOLnFK4eLtmZxZ9gkF7TJm7ldqKdMCGOIoULbd0pNU2wB2SNaGmm9OgVYoeN4v3YL%2B%2BMguyJO3G6r3ZlKAOb7xeN1oC6%2BBnlxkQjQ5z0BlIuWAXnBJZqL&X-Amz-Signature=74bd3031a31311d8de8a2d43f3ce906c9bf7dcb15c7c33cf6c4fdadeb91b1934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7CEFCE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDqgXZG8a0NqDLfnbY8JcRa%2FVo2WNiQrGt5y9HNUMWQFwIhAOQxJ%2BZp%2BdtuaJZZ3K%2BKm%2F2XUGZYcZ%2FlUYLgzt73Xi%2BaKv8DCBUQABoMNjM3NDIzMTgzODA1IgyqjxYaEUtgDkE%2F2GMq3AOVkelTJYzMBvWzEfShA9Z9nQYuIiHl3a7Ie8%2BfRqHcxvODduj8zj66Y6v7n2ByOklvdMFk3lGslLHEmchmDAWc5k2o5q9EHu%2F12LhsyPU9R4e8d6bNxBLSzqS5Fa944GpyX1uvTE1%2BfWt%2BZd0uZCJLkquPDiEJGM2LyRL1hFbLTFSOWmhaPfgk9N%2BBryLU%2FpXiPlk1gB%2BX%2BwsjWmzK2V9P6ez3EEXOJsEfbQ6B4bYiEKOuYsvsCTSPo4xIOOEmWKB08sGAPZdFhMuXgf5UHXc1Mw4yL49%2FeDkUfvl0TE4h%2Bs8z9k0plvvPSVCoiHpOiWnP04ANIPk6YMgxJyY7mdKex680O0ghaDNAz19ARQcc1cULRWlJzJmbot1cOPdFTYs65AbWBpbkSyclxg0kt2e0h7HJDL6xKYpvZ%2BHVpOQcfJSl7uZJf64qAqDD3kZqMMkWXxLgTkKSb%2FeIKD2D1iRw5pigLO7%2BUDcile6%2BCzjeWsWgh9UQB4rVDxsvrQgs4fiDOJ81gYe8LRVP5jBRQEaTVaCbbwr6YPUt6Z3gfWYAFC%2BnZIYSLszdwm0qP71c2QUMOCy1kTlAxAJmaYfng9nFYLfPCVCCikXNBR%2FmdJ6CN9%2F6W%2FZoaIde9wuZKjCl9OTCBjqkAZBq0zZW66Hu%2Fz6mTIoPVeNH769eSuvTVj6gWwHzTuRjUEk0%2BidbM0beK0S6Y6O%2FUOel%2Fz4OQAz95Q7591WKUCPk%2FVxBaS7NOJTu7xkTOLnFK4eLtmZxZ9gkF7TJm7ldqKdMCGOIoULbd0pNU2wB2SNaGmm9OgVYoeN4v3YL%2B%2BMguyJO3G6r3ZlKAOb7xeN1oC6%2BBnlxkQjQ5z0BlIuWAXnBJZqL&X-Amz-Signature=0f15ecefc4258a4913026b363ea45bde4d59fa3d8db232d3dc65758e83a9d901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
