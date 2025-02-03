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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIP6XUV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VODiY5AomlXnuk63Kpg8IIQTXxYSc60Cwee0WUSBKAIhANPiXJHCe5VDCEWUXe8130%2FGsu4LqD9dN4YNWZmMtiuxKv8DCBYQABoMNjM3NDIzMTgzODA1IgwZFRhKQISsAE96JPwq3AOe5dtu2V9ceHr8mxu1QKfABEWVZDsdoet47LwK4WWUXExY511Xynyie0nltgZdqm2V8hOFcU7ODKsTUCKDQkJ3r4T2Fx4uC%2F40z5QaQ02Al5uOzAz5pmB8KILTF1FFgGxOA%2F%2BN73kpOM%2FSHvg4Ay7G2A804mKqLjskehoao%2B1wCN51%2BhGsanl4WtkfM9gAPylsqAcPovjZ0gxgkTZWIHv9o5xevCnqm7lVSKKQRTRynVFtQxNrqzadxDwmbDCiK613BD9n77%2By6HiW3bwmadN77RPGhrin1fFm%2Be%2Bf5A4i3CX4R0vBZxAJ0%2FznadMawepr9AFzQQ4P%2BlKONgTosgETACnfWpE%2FpBa8VVODwH6hihVDRd4mBpzZe4VBSgMEKvFdFwVc1qoTsVUHbTPt6u9ET63kU%2FI1Upodsb5D7SpHsk0Mpk3SvRFkMnx1nK7psIKoAc78u8Qy0rOzw7KYrfndcEf%2BN1mPbwORDruQOY72BvKUslEoIFKKrMZAznOIC5WceWMYsFuOW0aB50EMufeRotz9Djh9gMDAPmJuGzA%2Bn43YBNuIkP8ayMwLIVvbIoBjm7E5Qspok8vCL9PZgrA58izwsI%2BjP9BdEXDyVhrU%2F%2FIUI%2BW5K83FngNdWjCl84K9BjqkAS%2Bl3IR8Nnn%2BpBD6BwmMMPfrjVzvmIej27U4FxMcLm5OjXNz4x%2FBDrPPw4lX94NUNjloSQ6nDza68%2BFspxvEF9Us%2B4DaW68zTep7%2F%2BoIMWHSO8R%2FfdfP3iNp4hGpTFX%2BuumNom1eSMEKy5NXjcucxX3jBHcbtZsmFUpzjzKVe9pSf9d2AbkDMGzznP9wbhGXTrYD8GXa4w6%2BlIweR%2F6JZYJGQbr4&X-Amz-Signature=96cdef39c6d2beaa438aefd8af57996e127d56c8732fb6ff61d58bcf7d906d86&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIP6XUV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VODiY5AomlXnuk63Kpg8IIQTXxYSc60Cwee0WUSBKAIhANPiXJHCe5VDCEWUXe8130%2FGsu4LqD9dN4YNWZmMtiuxKv8DCBYQABoMNjM3NDIzMTgzODA1IgwZFRhKQISsAE96JPwq3AOe5dtu2V9ceHr8mxu1QKfABEWVZDsdoet47LwK4WWUXExY511Xynyie0nltgZdqm2V8hOFcU7ODKsTUCKDQkJ3r4T2Fx4uC%2F40z5QaQ02Al5uOzAz5pmB8KILTF1FFgGxOA%2F%2BN73kpOM%2FSHvg4Ay7G2A804mKqLjskehoao%2B1wCN51%2BhGsanl4WtkfM9gAPylsqAcPovjZ0gxgkTZWIHv9o5xevCnqm7lVSKKQRTRynVFtQxNrqzadxDwmbDCiK613BD9n77%2By6HiW3bwmadN77RPGhrin1fFm%2Be%2Bf5A4i3CX4R0vBZxAJ0%2FznadMawepr9AFzQQ4P%2BlKONgTosgETACnfWpE%2FpBa8VVODwH6hihVDRd4mBpzZe4VBSgMEKvFdFwVc1qoTsVUHbTPt6u9ET63kU%2FI1Upodsb5D7SpHsk0Mpk3SvRFkMnx1nK7psIKoAc78u8Qy0rOzw7KYrfndcEf%2BN1mPbwORDruQOY72BvKUslEoIFKKrMZAznOIC5WceWMYsFuOW0aB50EMufeRotz9Djh9gMDAPmJuGzA%2Bn43YBNuIkP8ayMwLIVvbIoBjm7E5Qspok8vCL9PZgrA58izwsI%2BjP9BdEXDyVhrU%2F%2FIUI%2BW5K83FngNdWjCl84K9BjqkAS%2Bl3IR8Nnn%2BpBD6BwmMMPfrjVzvmIej27U4FxMcLm5OjXNz4x%2FBDrPPw4lX94NUNjloSQ6nDza68%2BFspxvEF9Us%2B4DaW68zTep7%2F%2BoIMWHSO8R%2FfdfP3iNp4hGpTFX%2BuumNom1eSMEKy5NXjcucxX3jBHcbtZsmFUpzjzKVe9pSf9d2AbkDMGzznP9wbhGXTrYD8GXa4w6%2BlIweR%2F6JZYJGQbr4&X-Amz-Signature=9944b58c5fc9a0d773f947d41921bdf1e41f5acbca831b24a69d5c8c9f2df07c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIP6XUV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VODiY5AomlXnuk63Kpg8IIQTXxYSc60Cwee0WUSBKAIhANPiXJHCe5VDCEWUXe8130%2FGsu4LqD9dN4YNWZmMtiuxKv8DCBYQABoMNjM3NDIzMTgzODA1IgwZFRhKQISsAE96JPwq3AOe5dtu2V9ceHr8mxu1QKfABEWVZDsdoet47LwK4WWUXExY511Xynyie0nltgZdqm2V8hOFcU7ODKsTUCKDQkJ3r4T2Fx4uC%2F40z5QaQ02Al5uOzAz5pmB8KILTF1FFgGxOA%2F%2BN73kpOM%2FSHvg4Ay7G2A804mKqLjskehoao%2B1wCN51%2BhGsanl4WtkfM9gAPylsqAcPovjZ0gxgkTZWIHv9o5xevCnqm7lVSKKQRTRynVFtQxNrqzadxDwmbDCiK613BD9n77%2By6HiW3bwmadN77RPGhrin1fFm%2Be%2Bf5A4i3CX4R0vBZxAJ0%2FznadMawepr9AFzQQ4P%2BlKONgTosgETACnfWpE%2FpBa8VVODwH6hihVDRd4mBpzZe4VBSgMEKvFdFwVc1qoTsVUHbTPt6u9ET63kU%2FI1Upodsb5D7SpHsk0Mpk3SvRFkMnx1nK7psIKoAc78u8Qy0rOzw7KYrfndcEf%2BN1mPbwORDruQOY72BvKUslEoIFKKrMZAznOIC5WceWMYsFuOW0aB50EMufeRotz9Djh9gMDAPmJuGzA%2Bn43YBNuIkP8ayMwLIVvbIoBjm7E5Qspok8vCL9PZgrA58izwsI%2BjP9BdEXDyVhrU%2F%2FIUI%2BW5K83FngNdWjCl84K9BjqkAS%2Bl3IR8Nnn%2BpBD6BwmMMPfrjVzvmIej27U4FxMcLm5OjXNz4x%2FBDrPPw4lX94NUNjloSQ6nDza68%2BFspxvEF9Us%2B4DaW68zTep7%2F%2BoIMWHSO8R%2FfdfP3iNp4hGpTFX%2BuumNom1eSMEKy5NXjcucxX3jBHcbtZsmFUpzjzKVe9pSf9d2AbkDMGzznP9wbhGXTrYD8GXa4w6%2BlIweR%2F6JZYJGQbr4&X-Amz-Signature=eedbe49184e50fb90f2d3e1c829abb37d111f8ed39b5de02462386ac9dbe9e67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
