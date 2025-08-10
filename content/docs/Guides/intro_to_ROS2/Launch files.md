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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4DB5YV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oKF%2Ba4Z7RZFpNp2SG5okg4uANBoRtOcZnU%2BFk4ATRAiAW%2BsVcacCX%2FVBMs1hWmdnChkT6zav8%2FAYUaMZL2BqF%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzHiekV8BspiBOtE%2FKtwDpIXs9wYkfliEryFtHT3zlnrx%2F4dYO2AMd6gjFsY9njXQ5rPOB5FzBWNrg6PTGnqUmfWm8RWY2SgiQvOyHTdT5d%2F65CEOo3xwqHlVZ9WIdm6hr8iMdmkmKWpfySfjQSbq4uo6EM1WoU3g%2BIV%2BD4IkPbA%2FVQwvVPWue6%2BS8goPfoMbomsC%2B4MTS7rA6mDtrmKTuMml5PBfA%2FEaTVrM98p61rX27rI9uZFoNEJ%2BmdlBPSC7LIe2qWpF9PNkNaLU1NzlM%2BmyIKjb1zzQCDguYp5T3cPPzvNasAw7tiZW0Rqcd8wzXJbFub9XM7Rc%2BME%2BmhwYT37vEiZfzHv11puo1wX2eRdtGro0YkVoqqOKnZcADsYePMw8tWvltMdkNSivluwM94GdT51hnDLRRxN6RZ9X94La%2BnD%2B86IrqxRUUNyOWP9fwj%2Bt767b6xg1OVt3032%2FIDxJG09Tnm0m7C3wAk3X1C7y%2BAyNad4d5CDCIVNPNjsOAjsHqyF9m63J%2BV%2FYB9mSBWWaIrsMUGay3fFnEdhZNzGamLboPHAPxOJi8Fic%2F3vbM93XlaH9RAaLtyHMqztdUu1bpl3JhLk7a%2BpUN0qehdC2nKgrb87MQxzG9opxBSVn7RMa%2BrkC0kSRCuEwntHgxAY6pgFy27dvPtRUlHx6uC7KvgBS%2BMlygXIHjEFJDJZQUxB2lVWri8jxXEtye5j90WvCB2YQI41NGFyJoyIz%2FkL0DvF7pwR8gz5A3NA5JVZAcsfQ9Ze3cr7ewN3y6KU2%2BJG6pl3Jovl0xE%2FaFOMQexOsw5Rfc21EYwPnlFHg7CJQwT%2BLsxRsBC%2FCpyqOxQTZx%2BW6lmHJblLdr4nO9VFk2dVKbR5bbDxCfLx0&X-Amz-Signature=9c843429cd1b0c25b423c1d5a016e5a7e19a4067525e8c4ef7320c72a2315018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4DB5YV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oKF%2Ba4Z7RZFpNp2SG5okg4uANBoRtOcZnU%2BFk4ATRAiAW%2BsVcacCX%2FVBMs1hWmdnChkT6zav8%2FAYUaMZL2BqF%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzHiekV8BspiBOtE%2FKtwDpIXs9wYkfliEryFtHT3zlnrx%2F4dYO2AMd6gjFsY9njXQ5rPOB5FzBWNrg6PTGnqUmfWm8RWY2SgiQvOyHTdT5d%2F65CEOo3xwqHlVZ9WIdm6hr8iMdmkmKWpfySfjQSbq4uo6EM1WoU3g%2BIV%2BD4IkPbA%2FVQwvVPWue6%2BS8goPfoMbomsC%2B4MTS7rA6mDtrmKTuMml5PBfA%2FEaTVrM98p61rX27rI9uZFoNEJ%2BmdlBPSC7LIe2qWpF9PNkNaLU1NzlM%2BmyIKjb1zzQCDguYp5T3cPPzvNasAw7tiZW0Rqcd8wzXJbFub9XM7Rc%2BME%2BmhwYT37vEiZfzHv11puo1wX2eRdtGro0YkVoqqOKnZcADsYePMw8tWvltMdkNSivluwM94GdT51hnDLRRxN6RZ9X94La%2BnD%2B86IrqxRUUNyOWP9fwj%2Bt767b6xg1OVt3032%2FIDxJG09Tnm0m7C3wAk3X1C7y%2BAyNad4d5CDCIVNPNjsOAjsHqyF9m63J%2BV%2FYB9mSBWWaIrsMUGay3fFnEdhZNzGamLboPHAPxOJi8Fic%2F3vbM93XlaH9RAaLtyHMqztdUu1bpl3JhLk7a%2BpUN0qehdC2nKgrb87MQxzG9opxBSVn7RMa%2BrkC0kSRCuEwntHgxAY6pgFy27dvPtRUlHx6uC7KvgBS%2BMlygXIHjEFJDJZQUxB2lVWri8jxXEtye5j90WvCB2YQI41NGFyJoyIz%2FkL0DvF7pwR8gz5A3NA5JVZAcsfQ9Ze3cr7ewN3y6KU2%2BJG6pl3Jovl0xE%2FaFOMQexOsw5Rfc21EYwPnlFHg7CJQwT%2BLsxRsBC%2FCpyqOxQTZx%2BW6lmHJblLdr4nO9VFk2dVKbR5bbDxCfLx0&X-Amz-Signature=bf78fc0da7463c911cadf3440b14b85a6e9973fc10981e3eae92b4951a63be7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4DB5YV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oKF%2Ba4Z7RZFpNp2SG5okg4uANBoRtOcZnU%2BFk4ATRAiAW%2BsVcacCX%2FVBMs1hWmdnChkT6zav8%2FAYUaMZL2BqF%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzHiekV8BspiBOtE%2FKtwDpIXs9wYkfliEryFtHT3zlnrx%2F4dYO2AMd6gjFsY9njXQ5rPOB5FzBWNrg6PTGnqUmfWm8RWY2SgiQvOyHTdT5d%2F65CEOo3xwqHlVZ9WIdm6hr8iMdmkmKWpfySfjQSbq4uo6EM1WoU3g%2BIV%2BD4IkPbA%2FVQwvVPWue6%2BS8goPfoMbomsC%2B4MTS7rA6mDtrmKTuMml5PBfA%2FEaTVrM98p61rX27rI9uZFoNEJ%2BmdlBPSC7LIe2qWpF9PNkNaLU1NzlM%2BmyIKjb1zzQCDguYp5T3cPPzvNasAw7tiZW0Rqcd8wzXJbFub9XM7Rc%2BME%2BmhwYT37vEiZfzHv11puo1wX2eRdtGro0YkVoqqOKnZcADsYePMw8tWvltMdkNSivluwM94GdT51hnDLRRxN6RZ9X94La%2BnD%2B86IrqxRUUNyOWP9fwj%2Bt767b6xg1OVt3032%2FIDxJG09Tnm0m7C3wAk3X1C7y%2BAyNad4d5CDCIVNPNjsOAjsHqyF9m63J%2BV%2FYB9mSBWWaIrsMUGay3fFnEdhZNzGamLboPHAPxOJi8Fic%2F3vbM93XlaH9RAaLtyHMqztdUu1bpl3JhLk7a%2BpUN0qehdC2nKgrb87MQxzG9opxBSVn7RMa%2BrkC0kSRCuEwntHgxAY6pgFy27dvPtRUlHx6uC7KvgBS%2BMlygXIHjEFJDJZQUxB2lVWri8jxXEtye5j90WvCB2YQI41NGFyJoyIz%2FkL0DvF7pwR8gz5A3NA5JVZAcsfQ9Ze3cr7ewN3y6KU2%2BJG6pl3Jovl0xE%2FaFOMQexOsw5Rfc21EYwPnlFHg7CJQwT%2BLsxRsBC%2FCpyqOxQTZx%2BW6lmHJblLdr4nO9VFk2dVKbR5bbDxCfLx0&X-Amz-Signature=0b66a0e209e0c7297b23b5531a907c9395de0c4a3e33f16205eed79fb6b955cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
