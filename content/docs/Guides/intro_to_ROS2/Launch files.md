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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DLQEM7W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBujqP034H2m9N5BqHS%2FOENkAHfhHlv5X9nuKfYjx5egIhAI4xi163n3J5yGWNhT1OvlYAwyfqValpH2kVi0G00Q39KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGD5F8VQ9bkI7aI9cq3AOKRgR5x5glQCIezQfYRphd5Rpsumxjx8jtcYqR7W1Z1kLuyjGUS5H%2F1Fl6RRTsPGf7HMd7yfVG8vxAxHO9DlOZSwt%2F9vFHrA1904GxBARD052GBMG4yMl7l0NB%2FC1zCxsCwMQ3j8t9c1PiAanHaeI1ejc%2FOfpyWIrkD0mlSu0A0t06jS4gsWN93BYq6%2B33pO2h6tIuJxPUQxqKl9S%2FID%2BJUIG8Ilg4c6YOAVqOqMb70W71putiSkP24EfgV8wKjsE7HKhumujm9WYcMKB%2F%2BZSOElkj%2Ffi34gVf9fV85DzzFyDU4C8RcODRKpwljC1WNkx3EGBL5%2FY3lGlgL%2B4X6o0g7mBoBhPNwA2d9lENQ9UduDy6lDVWCC5pmK4WmflMwfD61C%2BsYHp%2BzIOR7KAcDeZwNmb14x%2FELrKCyDQt38J%2F4HtnLpM2FotjHWK2O88RMJqfOI3XqsZ0KYBR%2FMWGPpI74NDKtC0%2Br0stE6RO3l%2BDbFAI4QIrmH1rPGfR2jGsng1b8CBKttm44gOAUPBuuqx6LFfY72qsbFo1GCSei2vQtcCn4QFJ9PNno7Npa6Fgpm%2BNHdN6hm6jHXixDDS3S1YJoHC7PDNBCw13q5%2FFTYphJ1gx3whvqmqdKV1wIjCNzsfABjqkAceGS5FeY8jVOOoEDscyHfknAI6EHlSRlDKOMLRTGhj0HtgG6JodXwKOhAFiHFcLyCTzRJHpMGwRaSYqrUAD1ZtJ%2B1QT0rIB90gbYPgi2%2FLEZyDqIFNCWG7WunXh98HApiWnjNmkUmZp12JQb1iDsL4aiWmmq8rEsbBMju0x4I4QdOL%2By4MULZm4gW0RgzE5dOfDB%2BDSpSbtktn%2BpRbTAa%2BDC33T&X-Amz-Signature=78a6678720bc329891f98576a9b4367fb342f08b7cc611e1bbbc5dbd7b48d126&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DLQEM7W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBujqP034H2m9N5BqHS%2FOENkAHfhHlv5X9nuKfYjx5egIhAI4xi163n3J5yGWNhT1OvlYAwyfqValpH2kVi0G00Q39KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGD5F8VQ9bkI7aI9cq3AOKRgR5x5glQCIezQfYRphd5Rpsumxjx8jtcYqR7W1Z1kLuyjGUS5H%2F1Fl6RRTsPGf7HMd7yfVG8vxAxHO9DlOZSwt%2F9vFHrA1904GxBARD052GBMG4yMl7l0NB%2FC1zCxsCwMQ3j8t9c1PiAanHaeI1ejc%2FOfpyWIrkD0mlSu0A0t06jS4gsWN93BYq6%2B33pO2h6tIuJxPUQxqKl9S%2FID%2BJUIG8Ilg4c6YOAVqOqMb70W71putiSkP24EfgV8wKjsE7HKhumujm9WYcMKB%2F%2BZSOElkj%2Ffi34gVf9fV85DzzFyDU4C8RcODRKpwljC1WNkx3EGBL5%2FY3lGlgL%2B4X6o0g7mBoBhPNwA2d9lENQ9UduDy6lDVWCC5pmK4WmflMwfD61C%2BsYHp%2BzIOR7KAcDeZwNmb14x%2FELrKCyDQt38J%2F4HtnLpM2FotjHWK2O88RMJqfOI3XqsZ0KYBR%2FMWGPpI74NDKtC0%2Br0stE6RO3l%2BDbFAI4QIrmH1rPGfR2jGsng1b8CBKttm44gOAUPBuuqx6LFfY72qsbFo1GCSei2vQtcCn4QFJ9PNno7Npa6Fgpm%2BNHdN6hm6jHXixDDS3S1YJoHC7PDNBCw13q5%2FFTYphJ1gx3whvqmqdKV1wIjCNzsfABjqkAceGS5FeY8jVOOoEDscyHfknAI6EHlSRlDKOMLRTGhj0HtgG6JodXwKOhAFiHFcLyCTzRJHpMGwRaSYqrUAD1ZtJ%2B1QT0rIB90gbYPgi2%2FLEZyDqIFNCWG7WunXh98HApiWnjNmkUmZp12JQb1iDsL4aiWmmq8rEsbBMju0x4I4QdOL%2By4MULZm4gW0RgzE5dOfDB%2BDSpSbtktn%2BpRbTAa%2BDC33T&X-Amz-Signature=ee6497228b4624682377916620ee5c7a0673bd62bc753d3f2246a5da8b7c7e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DLQEM7W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBujqP034H2m9N5BqHS%2FOENkAHfhHlv5X9nuKfYjx5egIhAI4xi163n3J5yGWNhT1OvlYAwyfqValpH2kVi0G00Q39KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGD5F8VQ9bkI7aI9cq3AOKRgR5x5glQCIezQfYRphd5Rpsumxjx8jtcYqR7W1Z1kLuyjGUS5H%2F1Fl6RRTsPGf7HMd7yfVG8vxAxHO9DlOZSwt%2F9vFHrA1904GxBARD052GBMG4yMl7l0NB%2FC1zCxsCwMQ3j8t9c1PiAanHaeI1ejc%2FOfpyWIrkD0mlSu0A0t06jS4gsWN93BYq6%2B33pO2h6tIuJxPUQxqKl9S%2FID%2BJUIG8Ilg4c6YOAVqOqMb70W71putiSkP24EfgV8wKjsE7HKhumujm9WYcMKB%2F%2BZSOElkj%2Ffi34gVf9fV85DzzFyDU4C8RcODRKpwljC1WNkx3EGBL5%2FY3lGlgL%2B4X6o0g7mBoBhPNwA2d9lENQ9UduDy6lDVWCC5pmK4WmflMwfD61C%2BsYHp%2BzIOR7KAcDeZwNmb14x%2FELrKCyDQt38J%2F4HtnLpM2FotjHWK2O88RMJqfOI3XqsZ0KYBR%2FMWGPpI74NDKtC0%2Br0stE6RO3l%2BDbFAI4QIrmH1rPGfR2jGsng1b8CBKttm44gOAUPBuuqx6LFfY72qsbFo1GCSei2vQtcCn4QFJ9PNno7Npa6Fgpm%2BNHdN6hm6jHXixDDS3S1YJoHC7PDNBCw13q5%2FFTYphJ1gx3whvqmqdKV1wIjCNzsfABjqkAceGS5FeY8jVOOoEDscyHfknAI6EHlSRlDKOMLRTGhj0HtgG6JodXwKOhAFiHFcLyCTzRJHpMGwRaSYqrUAD1ZtJ%2B1QT0rIB90gbYPgi2%2FLEZyDqIFNCWG7WunXh98HApiWnjNmkUmZp12JQb1iDsL4aiWmmq8rEsbBMju0x4I4QdOL%2By4MULZm4gW0RgzE5dOfDB%2BDSpSbtktn%2BpRbTAa%2BDC33T&X-Amz-Signature=ea2bb64223961ced7566fc05b17630176ae8e19b833f78958ada6a8dd4323365&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
