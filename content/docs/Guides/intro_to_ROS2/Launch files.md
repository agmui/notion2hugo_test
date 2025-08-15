---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXLXQ63%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvi1J%2Bgho0j4VztFkZMiWS1lGRD85piPm5P2xlqN9UhAiAzsG2%2FtXhRoQ2%2Fh3mkvoYx%2BvlorvvJgXLJlfQaF0tN8ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMEQI7PjjkO9rJVs6aKtwDwwOUVE86i4%2Fv0xhT1D9PKiQWnFs9omyPR0WwIXtJAAZSoqPa7HU9b2fJVBU3j8FajWt4xMkPTPzFyPhFBF80F%2FGZjEgtpT9VocNkJZc7KMK67%2BnPbQ1Erq30Cbn7tWk7%2BZzSrW4Lj6ghwPO%2FVfYknKyuFerxPf1ZTghG6xoC08Xb6mRlnVQxMvJjwzVBVnR5LqG37ahDCRz2YksCzl8XU2i9ijq7Sros5DcbLo42S3eRjReNQhpIsICQ4LUi6n4CC%2FJ4uWt2kxfoD8ZcJAEaS6GDJmHsfQ1z6RI0fNL0T%2FcCFAWX64Lc3XTQ%2FuEa1TT%2B1AVqpw813GyPPv0A9SqHRKI0wrL3VeDEEeNsavqbZdwqPIxnbgGPmIkzIGn1g2G%2FOQW9uhrk4U8YEfDIqI3B9OSzWH%2FP9jSS6%2FDnUquDYasmxiA7uvzdNcwHkWJZne2EHrRrcvTW2v1IaZLqqKdFdFEbLiXjsq8Q92HUy4yE6q1IzspxWR%2FGO8hZfFNylK%2FO6xAtdx9w46QqDbArbaM3ofB9HIk%2Bg0gwEMdDc5uZeCvx0cCr%2ByjjXjC6BW%2BDuujM9o0WgBrY8SJk6Y7TIlfKvBFZZ6SGnRTIBRMHMvJaXO726lHHqSq0eaz5dLEwraP6xAY6pgH1vYgPFJSrSKa62n14wQ7%2BlQkQR3Q1zy1IK0kp%2FXeW%2Fh9ddm5YdRG2ciBw3AsyQQmdZaFnYoEV0mmcH6831uFw0tG564UQOH7KgQhYqpboYAdtLnGj9dWafnm5%2B6Kwem%2BR%2FKsHYaEkP%2B7lPToh2YNoX%2Bo%2Fcn530RoWv0U7Fi7d632o%2Fv43AN8KsSr2S9d%2FMLQntBQKSs6ssfjENHNIvCivYjSbN9%2Fa&X-Amz-Signature=c5510131e821c38c64116a27f878a05d90ed4d80cae2f70d025a07c6e18e6bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXLXQ63%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvi1J%2Bgho0j4VztFkZMiWS1lGRD85piPm5P2xlqN9UhAiAzsG2%2FtXhRoQ2%2Fh3mkvoYx%2BvlorvvJgXLJlfQaF0tN8ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMEQI7PjjkO9rJVs6aKtwDwwOUVE86i4%2Fv0xhT1D9PKiQWnFs9omyPR0WwIXtJAAZSoqPa7HU9b2fJVBU3j8FajWt4xMkPTPzFyPhFBF80F%2FGZjEgtpT9VocNkJZc7KMK67%2BnPbQ1Erq30Cbn7tWk7%2BZzSrW4Lj6ghwPO%2FVfYknKyuFerxPf1ZTghG6xoC08Xb6mRlnVQxMvJjwzVBVnR5LqG37ahDCRz2YksCzl8XU2i9ijq7Sros5DcbLo42S3eRjReNQhpIsICQ4LUi6n4CC%2FJ4uWt2kxfoD8ZcJAEaS6GDJmHsfQ1z6RI0fNL0T%2FcCFAWX64Lc3XTQ%2FuEa1TT%2B1AVqpw813GyPPv0A9SqHRKI0wrL3VeDEEeNsavqbZdwqPIxnbgGPmIkzIGn1g2G%2FOQW9uhrk4U8YEfDIqI3B9OSzWH%2FP9jSS6%2FDnUquDYasmxiA7uvzdNcwHkWJZne2EHrRrcvTW2v1IaZLqqKdFdFEbLiXjsq8Q92HUy4yE6q1IzspxWR%2FGO8hZfFNylK%2FO6xAtdx9w46QqDbArbaM3ofB9HIk%2Bg0gwEMdDc5uZeCvx0cCr%2ByjjXjC6BW%2BDuujM9o0WgBrY8SJk6Y7TIlfKvBFZZ6SGnRTIBRMHMvJaXO726lHHqSq0eaz5dLEwraP6xAY6pgH1vYgPFJSrSKa62n14wQ7%2BlQkQR3Q1zy1IK0kp%2FXeW%2Fh9ddm5YdRG2ciBw3AsyQQmdZaFnYoEV0mmcH6831uFw0tG564UQOH7KgQhYqpboYAdtLnGj9dWafnm5%2B6Kwem%2BR%2FKsHYaEkP%2B7lPToh2YNoX%2Bo%2Fcn530RoWv0U7Fi7d632o%2Fv43AN8KsSr2S9d%2FMLQntBQKSs6ssfjENHNIvCivYjSbN9%2Fa&X-Amz-Signature=5c6dde0837e3adb74c58ac0c99980b4b54a5f09f8a605d2d758a1648fef6f3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXLXQ63%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvi1J%2Bgho0j4VztFkZMiWS1lGRD85piPm5P2xlqN9UhAiAzsG2%2FtXhRoQ2%2Fh3mkvoYx%2BvlorvvJgXLJlfQaF0tN8ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMEQI7PjjkO9rJVs6aKtwDwwOUVE86i4%2Fv0xhT1D9PKiQWnFs9omyPR0WwIXtJAAZSoqPa7HU9b2fJVBU3j8FajWt4xMkPTPzFyPhFBF80F%2FGZjEgtpT9VocNkJZc7KMK67%2BnPbQ1Erq30Cbn7tWk7%2BZzSrW4Lj6ghwPO%2FVfYknKyuFerxPf1ZTghG6xoC08Xb6mRlnVQxMvJjwzVBVnR5LqG37ahDCRz2YksCzl8XU2i9ijq7Sros5DcbLo42S3eRjReNQhpIsICQ4LUi6n4CC%2FJ4uWt2kxfoD8ZcJAEaS6GDJmHsfQ1z6RI0fNL0T%2FcCFAWX64Lc3XTQ%2FuEa1TT%2B1AVqpw813GyPPv0A9SqHRKI0wrL3VeDEEeNsavqbZdwqPIxnbgGPmIkzIGn1g2G%2FOQW9uhrk4U8YEfDIqI3B9OSzWH%2FP9jSS6%2FDnUquDYasmxiA7uvzdNcwHkWJZne2EHrRrcvTW2v1IaZLqqKdFdFEbLiXjsq8Q92HUy4yE6q1IzspxWR%2FGO8hZfFNylK%2FO6xAtdx9w46QqDbArbaM3ofB9HIk%2Bg0gwEMdDc5uZeCvx0cCr%2ByjjXjC6BW%2BDuujM9o0WgBrY8SJk6Y7TIlfKvBFZZ6SGnRTIBRMHMvJaXO726lHHqSq0eaz5dLEwraP6xAY6pgH1vYgPFJSrSKa62n14wQ7%2BlQkQR3Q1zy1IK0kp%2FXeW%2Fh9ddm5YdRG2ciBw3AsyQQmdZaFnYoEV0mmcH6831uFw0tG564UQOH7KgQhYqpboYAdtLnGj9dWafnm5%2B6Kwem%2BR%2FKsHYaEkP%2B7lPToh2YNoX%2Bo%2Fcn530RoWv0U7Fi7d632o%2Fv43AN8KsSr2S9d%2FMLQntBQKSs6ssfjENHNIvCivYjSbN9%2Fa&X-Amz-Signature=82332d1883f618db70e449035302f1a4c2a3daef8f1de23e60f4cc5d167c7d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
