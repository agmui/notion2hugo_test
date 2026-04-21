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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAC6UGUC%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCM%2FulE1ReqfOJfKWN5sRELrFxZjj5m1GYIDcGduilcggIhAL2YQy%2FRDzpuA6IiX95I%2Fj8BJs6lnwCbSFm%2Fouo%2BwHU3Kv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2B%2FZs%2F3zSEirl%2B2dgq3AM79J%2BtXMgTOyVXLUMyi3Tf8MX0SHlYv%2BNgWS6VP83CMh16MIKjGWkWBzT%2FWo8WkqvJHZXUkViRPiqczycWXFPS3Su%2F%2B8m0%2F5XAP2GIRuSppK2U3Q4RmyW%2BgHLoxl7k1OMvfPWsPZOPH743dyxDAwbfKwYpioUqCG0tKfuJjCFpoSJX%2F2uXwfW7dsuq90PAZnQ6mD7RrwZEkJgvoGr2tRUgfnImgY7bgqUnTH3rYX3K4%2Fsg14PBZU3i%2BeJTyJiC%2F97st14Y5kD6QKq%2BNsIvetdXvcbBdHT6g18jWf%2Be2dIflhNoBWYeltAlPlDLXTIqwZ1aQ%2FTbIqN5K1d%2B1VhuX8Zd5fSwTltFIrqJ2rpi9vo2qN9iUUqqg%2B3pXPVINe5qBkuFQita2M4S5EKpYjw1aUhg%2F4ezndhBjxmGgzhzjX43b3BLmJbhkJzSXaY1UYaH25yW6GwB8tvYj0WnFhzRi6AkrxEIVpIy8GJecaGjddzlOnEG%2BPzO50DnzTpeERAz0T4%2BcPVO3YPAy1uc925NuY9KFgVVTTVLgaT09py1KlQqK1o%2Bavfd0ZaI72%2Bk0OWjGW46TxsJ0iBYJa2xMpp2MHu6o0mL1UWqJd3oVdiqWb0uwSTo0o6XSkrxir6ldDC8rJvPBjqkAbSlqm31TUspEf7PvYC6eBmyW1mlwHOHh3N5qtkaoNOOiyJi4lQZogEllJgWbzigAJXHXJC5DxQdfADYSb2MfTMa0jzA3P9oppQLl4o2U86TFPdE61YD4FHGoXO0RpzN2Dy04W%2F1XX241Os5bz8l%2FVtP%2B6L38EHfADQEXK0V1zCLqe83pH%2FagxWJPiMWWZhodLpLGlqCrfe4UTl%2BOQ0sGu%2F5TC3V&X-Amz-Signature=aa673b41d22a2fff61622c2f283580ab9f289d4766354c12e336276d94d2e0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAC6UGUC%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCM%2FulE1ReqfOJfKWN5sRELrFxZjj5m1GYIDcGduilcggIhAL2YQy%2FRDzpuA6IiX95I%2Fj8BJs6lnwCbSFm%2Fouo%2BwHU3Kv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2B%2FZs%2F3zSEirl%2B2dgq3AM79J%2BtXMgTOyVXLUMyi3Tf8MX0SHlYv%2BNgWS6VP83CMh16MIKjGWkWBzT%2FWo8WkqvJHZXUkViRPiqczycWXFPS3Su%2F%2B8m0%2F5XAP2GIRuSppK2U3Q4RmyW%2BgHLoxl7k1OMvfPWsPZOPH743dyxDAwbfKwYpioUqCG0tKfuJjCFpoSJX%2F2uXwfW7dsuq90PAZnQ6mD7RrwZEkJgvoGr2tRUgfnImgY7bgqUnTH3rYX3K4%2Fsg14PBZU3i%2BeJTyJiC%2F97st14Y5kD6QKq%2BNsIvetdXvcbBdHT6g18jWf%2Be2dIflhNoBWYeltAlPlDLXTIqwZ1aQ%2FTbIqN5K1d%2B1VhuX8Zd5fSwTltFIrqJ2rpi9vo2qN9iUUqqg%2B3pXPVINe5qBkuFQita2M4S5EKpYjw1aUhg%2F4ezndhBjxmGgzhzjX43b3BLmJbhkJzSXaY1UYaH25yW6GwB8tvYj0WnFhzRi6AkrxEIVpIy8GJecaGjddzlOnEG%2BPzO50DnzTpeERAz0T4%2BcPVO3YPAy1uc925NuY9KFgVVTTVLgaT09py1KlQqK1o%2Bavfd0ZaI72%2Bk0OWjGW46TxsJ0iBYJa2xMpp2MHu6o0mL1UWqJd3oVdiqWb0uwSTo0o6XSkrxir6ldDC8rJvPBjqkAbSlqm31TUspEf7PvYC6eBmyW1mlwHOHh3N5qtkaoNOOiyJi4lQZogEllJgWbzigAJXHXJC5DxQdfADYSb2MfTMa0jzA3P9oppQLl4o2U86TFPdE61YD4FHGoXO0RpzN2Dy04W%2F1XX241Os5bz8l%2FVtP%2B6L38EHfADQEXK0V1zCLqe83pH%2FagxWJPiMWWZhodLpLGlqCrfe4UTl%2BOQ0sGu%2F5TC3V&X-Amz-Signature=d45227b74179ed2f17e9660263f84d8598f73b187d9142526a0b355265d17068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAC6UGUC%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCM%2FulE1ReqfOJfKWN5sRELrFxZjj5m1GYIDcGduilcggIhAL2YQy%2FRDzpuA6IiX95I%2Fj8BJs6lnwCbSFm%2Fouo%2BwHU3Kv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2B%2FZs%2F3zSEirl%2B2dgq3AM79J%2BtXMgTOyVXLUMyi3Tf8MX0SHlYv%2BNgWS6VP83CMh16MIKjGWkWBzT%2FWo8WkqvJHZXUkViRPiqczycWXFPS3Su%2F%2B8m0%2F5XAP2GIRuSppK2U3Q4RmyW%2BgHLoxl7k1OMvfPWsPZOPH743dyxDAwbfKwYpioUqCG0tKfuJjCFpoSJX%2F2uXwfW7dsuq90PAZnQ6mD7RrwZEkJgvoGr2tRUgfnImgY7bgqUnTH3rYX3K4%2Fsg14PBZU3i%2BeJTyJiC%2F97st14Y5kD6QKq%2BNsIvetdXvcbBdHT6g18jWf%2Be2dIflhNoBWYeltAlPlDLXTIqwZ1aQ%2FTbIqN5K1d%2B1VhuX8Zd5fSwTltFIrqJ2rpi9vo2qN9iUUqqg%2B3pXPVINe5qBkuFQita2M4S5EKpYjw1aUhg%2F4ezndhBjxmGgzhzjX43b3BLmJbhkJzSXaY1UYaH25yW6GwB8tvYj0WnFhzRi6AkrxEIVpIy8GJecaGjddzlOnEG%2BPzO50DnzTpeERAz0T4%2BcPVO3YPAy1uc925NuY9KFgVVTTVLgaT09py1KlQqK1o%2Bavfd0ZaI72%2Bk0OWjGW46TxsJ0iBYJa2xMpp2MHu6o0mL1UWqJd3oVdiqWb0uwSTo0o6XSkrxir6ldDC8rJvPBjqkAbSlqm31TUspEf7PvYC6eBmyW1mlwHOHh3N5qtkaoNOOiyJi4lQZogEllJgWbzigAJXHXJC5DxQdfADYSb2MfTMa0jzA3P9oppQLl4o2U86TFPdE61YD4FHGoXO0RpzN2Dy04W%2F1XX241Os5bz8l%2FVtP%2B6L38EHfADQEXK0V1zCLqe83pH%2FagxWJPiMWWZhodLpLGlqCrfe4UTl%2BOQ0sGu%2F5TC3V&X-Amz-Signature=4139bac6bcf0d47ffc4ea36a69b5440ed5c951fd5d058c88cbeab2a97987cf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
