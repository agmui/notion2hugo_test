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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYRTHTO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLw6zCixB3%2FsllmwJ4DwQwRg7fV0vxDa8pCv5XJg5jvwIhALNNCsI3UW3nvFj%2BLYPwr8LndPSjsVfcNliWQy52B1KdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwDyeie0VFQ3wVl7dYq3AMqBorn9APSvx9hE2jBgAHTOFkr%2F5zef6Z4UTf%2BmiXyW4ukvzPqDCv0HO6Zr2OwhC8A3%2FoJs%2FbQZSsN3qt8JLNm15R71EQAbB6%2BBhAO23pmnlAgiolhKPl%2FCE8mYX1s1YSxIw6tZg7cv0gkhW2C6XfBtW%2FRmMqtxZYEXZ26PkAADGhZ1tVtT2IRzR8ZmI1bMz3pTExx2DNtmb287IQr%2FAOKQFPS%2BPO%2BTrMy%2Fhb7QQDtpolxAhClz7nknJyDAq9rbvA%2BtyHBvxtTP2sZI65tn9Hy7flLJOrzDdMjPAwRoTFGS3k1G4h77SeXhcu4Af%2BH2SPM8%2BAounyoCBlPWZFQiZXY%2F1JmVKMZAdHRXMyUhjSDzfXDB0%2BBrpCrxNIvLAAIkwrQsQXGvYpbRdDruDA3FUwjY8CQGyvFdD77uH3NsdhUe4vjPkfrOtdBU8acuQ8buaZ11EHqqwp8HDTgBesjB9c78Aw8mNVSbW%2BbDs1P7B0lAKKWO8OM6%2BEYzRCdAz08sYtMWkd9Pluz0lUr48bAu0mLrB5cmD0Bd12O5ZzIQ7iexMOy9P027yBBzFVfCGuC8TI16ZX2YeTljw19YPUx6nnGw9XW%2FDbx8JosLI9%2B%2FzT1%2FmyWxeuwXdc0PEx2mDCs6ezABjqkAUqhDkfB%2FB4lsBX6xKF%2BBHBRFKFxvlyulQG5TNXwqKXzgO0SACXEhpYoHYvND7BVUNtUxc6hem5%2BRnPaB5wnDklfa5mIyrwZhYw512d5weau5TYHvpos9VtSnyu1dgFH6j9cLBWgOV4Gn9wDUqjQQzA57BALHCt1%2BUi9uMe443FaTeOJ4scQcdAlsL6dW%2F0o37Sf%2FwVsQOa%2Fm7Su5AWRAdFBqtcU&X-Amz-Signature=25ee0d87351bfe7d19d058d63e0d3eeee38ef322ea164cb5038190bef3c9cbcf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYRTHTO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLw6zCixB3%2FsllmwJ4DwQwRg7fV0vxDa8pCv5XJg5jvwIhALNNCsI3UW3nvFj%2BLYPwr8LndPSjsVfcNliWQy52B1KdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwDyeie0VFQ3wVl7dYq3AMqBorn9APSvx9hE2jBgAHTOFkr%2F5zef6Z4UTf%2BmiXyW4ukvzPqDCv0HO6Zr2OwhC8A3%2FoJs%2FbQZSsN3qt8JLNm15R71EQAbB6%2BBhAO23pmnlAgiolhKPl%2FCE8mYX1s1YSxIw6tZg7cv0gkhW2C6XfBtW%2FRmMqtxZYEXZ26PkAADGhZ1tVtT2IRzR8ZmI1bMz3pTExx2DNtmb287IQr%2FAOKQFPS%2BPO%2BTrMy%2Fhb7QQDtpolxAhClz7nknJyDAq9rbvA%2BtyHBvxtTP2sZI65tn9Hy7flLJOrzDdMjPAwRoTFGS3k1G4h77SeXhcu4Af%2BH2SPM8%2BAounyoCBlPWZFQiZXY%2F1JmVKMZAdHRXMyUhjSDzfXDB0%2BBrpCrxNIvLAAIkwrQsQXGvYpbRdDruDA3FUwjY8CQGyvFdD77uH3NsdhUe4vjPkfrOtdBU8acuQ8buaZ11EHqqwp8HDTgBesjB9c78Aw8mNVSbW%2BbDs1P7B0lAKKWO8OM6%2BEYzRCdAz08sYtMWkd9Pluz0lUr48bAu0mLrB5cmD0Bd12O5ZzIQ7iexMOy9P027yBBzFVfCGuC8TI16ZX2YeTljw19YPUx6nnGw9XW%2FDbx8JosLI9%2B%2FzT1%2FmyWxeuwXdc0PEx2mDCs6ezABjqkAUqhDkfB%2FB4lsBX6xKF%2BBHBRFKFxvlyulQG5TNXwqKXzgO0SACXEhpYoHYvND7BVUNtUxc6hem5%2BRnPaB5wnDklfa5mIyrwZhYw512d5weau5TYHvpos9VtSnyu1dgFH6j9cLBWgOV4Gn9wDUqjQQzA57BALHCt1%2BUi9uMe443FaTeOJ4scQcdAlsL6dW%2F0o37Sf%2FwVsQOa%2Fm7Su5AWRAdFBqtcU&X-Amz-Signature=0e8d7c11972b703fef70a09d118ec8f9eee138ae133dcdd1416249ce591b471b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYRTHTO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLw6zCixB3%2FsllmwJ4DwQwRg7fV0vxDa8pCv5XJg5jvwIhALNNCsI3UW3nvFj%2BLYPwr8LndPSjsVfcNliWQy52B1KdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwDyeie0VFQ3wVl7dYq3AMqBorn9APSvx9hE2jBgAHTOFkr%2F5zef6Z4UTf%2BmiXyW4ukvzPqDCv0HO6Zr2OwhC8A3%2FoJs%2FbQZSsN3qt8JLNm15R71EQAbB6%2BBhAO23pmnlAgiolhKPl%2FCE8mYX1s1YSxIw6tZg7cv0gkhW2C6XfBtW%2FRmMqtxZYEXZ26PkAADGhZ1tVtT2IRzR8ZmI1bMz3pTExx2DNtmb287IQr%2FAOKQFPS%2BPO%2BTrMy%2Fhb7QQDtpolxAhClz7nknJyDAq9rbvA%2BtyHBvxtTP2sZI65tn9Hy7flLJOrzDdMjPAwRoTFGS3k1G4h77SeXhcu4Af%2BH2SPM8%2BAounyoCBlPWZFQiZXY%2F1JmVKMZAdHRXMyUhjSDzfXDB0%2BBrpCrxNIvLAAIkwrQsQXGvYpbRdDruDA3FUwjY8CQGyvFdD77uH3NsdhUe4vjPkfrOtdBU8acuQ8buaZ11EHqqwp8HDTgBesjB9c78Aw8mNVSbW%2BbDs1P7B0lAKKWO8OM6%2BEYzRCdAz08sYtMWkd9Pluz0lUr48bAu0mLrB5cmD0Bd12O5ZzIQ7iexMOy9P027yBBzFVfCGuC8TI16ZX2YeTljw19YPUx6nnGw9XW%2FDbx8JosLI9%2B%2FzT1%2FmyWxeuwXdc0PEx2mDCs6ezABjqkAUqhDkfB%2FB4lsBX6xKF%2BBHBRFKFxvlyulQG5TNXwqKXzgO0SACXEhpYoHYvND7BVUNtUxc6hem5%2BRnPaB5wnDklfa5mIyrwZhYw512d5weau5TYHvpos9VtSnyu1dgFH6j9cLBWgOV4Gn9wDUqjQQzA57BALHCt1%2BUi9uMe443FaTeOJ4scQcdAlsL6dW%2F0o37Sf%2FwVsQOa%2Fm7Su5AWRAdFBqtcU&X-Amz-Signature=bcbf2d53f6d3f4c0879a60075f37da530ea3182d9f6ee13a884a005ded47f3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
