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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHKXYWZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFEGZveRiDqonCxexZoXEKVfkm8Uy8ueNi7DoLlq0HRKAiBwmqLCFNjaXm4LH31Ceyd%2FdoTc7e6C%2By0xiARJ7KdMliqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5j0vwOxJJJUarEOtKtwDgEd8gKiC8O2uk3zun6P7p7%2BSe6r0lnfh1CR1mFdwAWzahJAmuoS5O6b51MdRkWKY0i17dIY%2Bds%2F8Ys%2FS8%2B0H%2F9ZewAYBPqSwEX7WKADsAWbRp61euOqCVC3zAkOSGd8%2BjNfwDwGf0M%2FPwzCF3h4hqlpXkC3V2eswjLFex25hpks1oIAcOFcyk3W79%2Bp5RKx3fgLzg0tef5pr2KVMxC1xA%2FY7hwNy1VdXXm%2BeBSV7XjejT%2Ffeuy59Tgpqd%2FlUD6wD8kAWBd7aSJe9eZ86YeFLPcw4yWXgrB7UWbQDnJ02LiEaoifu2wEgFIDFfco3ZTR9uMIKoFD2Aec1ORmr6IjvM91gkpbEy8HvCRXT7%2B3y9YQwjANfNe6b6UzgostH8dKQuP5vprc0MkCv%2B%2FFIfiOlVOaQ%2FZauFf74dptyNgpV%2BXB8R6mDVoHv66D7xtczg0ETXW%2B7iyBK%2FowzbmSyVePC7D6rnV9vxiVGgKTkAw0m0g4iwNUryYwRrrrwTw6XpfLbFzDe4McTOMhn2IwrZM1T81iCx1iFYaFqfHbTkih1sNZzEAAJ0dYy49alrmsLb9XvhWQqsQTzR5ewZkVhhwDXsgJAwjtdwOZcxdqbmVdpaHcZPeeVQ8uKQUMT28Ewkfq4vgY6pgHvtEvvd9Z4txZX9YGrCa8Su3XrGLqVuHrXmpYewzCxF%2F%2BEvkkbOD7cCwlqGzs9B9qSy8b7b%2FZFjh2rVnwKsM5asATdDorzGemNRTVC331lhwNrbLK6KMsvuv55wbmavhMyPxwpjGKtvkEx8Ph%2BX1m7JSRF7x0iPf22drtWOHDgapCDpZFXYtujGMm2%2BhIgfcybQu855tskFHXE9EFEWgXzOla2ayQ7&X-Amz-Signature=7276eaca85dff3a49574670c3da44174b8b1a9f1609dcf0e694fad103b844fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHKXYWZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFEGZveRiDqonCxexZoXEKVfkm8Uy8ueNi7DoLlq0HRKAiBwmqLCFNjaXm4LH31Ceyd%2FdoTc7e6C%2By0xiARJ7KdMliqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5j0vwOxJJJUarEOtKtwDgEd8gKiC8O2uk3zun6P7p7%2BSe6r0lnfh1CR1mFdwAWzahJAmuoS5O6b51MdRkWKY0i17dIY%2Bds%2F8Ys%2FS8%2B0H%2F9ZewAYBPqSwEX7WKADsAWbRp61euOqCVC3zAkOSGd8%2BjNfwDwGf0M%2FPwzCF3h4hqlpXkC3V2eswjLFex25hpks1oIAcOFcyk3W79%2Bp5RKx3fgLzg0tef5pr2KVMxC1xA%2FY7hwNy1VdXXm%2BeBSV7XjejT%2Ffeuy59Tgpqd%2FlUD6wD8kAWBd7aSJe9eZ86YeFLPcw4yWXgrB7UWbQDnJ02LiEaoifu2wEgFIDFfco3ZTR9uMIKoFD2Aec1ORmr6IjvM91gkpbEy8HvCRXT7%2B3y9YQwjANfNe6b6UzgostH8dKQuP5vprc0MkCv%2B%2FFIfiOlVOaQ%2FZauFf74dptyNgpV%2BXB8R6mDVoHv66D7xtczg0ETXW%2B7iyBK%2FowzbmSyVePC7D6rnV9vxiVGgKTkAw0m0g4iwNUryYwRrrrwTw6XpfLbFzDe4McTOMhn2IwrZM1T81iCx1iFYaFqfHbTkih1sNZzEAAJ0dYy49alrmsLb9XvhWQqsQTzR5ewZkVhhwDXsgJAwjtdwOZcxdqbmVdpaHcZPeeVQ8uKQUMT28Ewkfq4vgY6pgHvtEvvd9Z4txZX9YGrCa8Su3XrGLqVuHrXmpYewzCxF%2F%2BEvkkbOD7cCwlqGzs9B9qSy8b7b%2FZFjh2rVnwKsM5asATdDorzGemNRTVC331lhwNrbLK6KMsvuv55wbmavhMyPxwpjGKtvkEx8Ph%2BX1m7JSRF7x0iPf22drtWOHDgapCDpZFXYtujGMm2%2BhIgfcybQu855tskFHXE9EFEWgXzOla2ayQ7&X-Amz-Signature=b2acd805a60ba9c8549929d08f1908593816a92af97e0670c5ef69df93b85277&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHKXYWZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFEGZveRiDqonCxexZoXEKVfkm8Uy8ueNi7DoLlq0HRKAiBwmqLCFNjaXm4LH31Ceyd%2FdoTc7e6C%2By0xiARJ7KdMliqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5j0vwOxJJJUarEOtKtwDgEd8gKiC8O2uk3zun6P7p7%2BSe6r0lnfh1CR1mFdwAWzahJAmuoS5O6b51MdRkWKY0i17dIY%2Bds%2F8Ys%2FS8%2B0H%2F9ZewAYBPqSwEX7WKADsAWbRp61euOqCVC3zAkOSGd8%2BjNfwDwGf0M%2FPwzCF3h4hqlpXkC3V2eswjLFex25hpks1oIAcOFcyk3W79%2Bp5RKx3fgLzg0tef5pr2KVMxC1xA%2FY7hwNy1VdXXm%2BeBSV7XjejT%2Ffeuy59Tgpqd%2FlUD6wD8kAWBd7aSJe9eZ86YeFLPcw4yWXgrB7UWbQDnJ02LiEaoifu2wEgFIDFfco3ZTR9uMIKoFD2Aec1ORmr6IjvM91gkpbEy8HvCRXT7%2B3y9YQwjANfNe6b6UzgostH8dKQuP5vprc0MkCv%2B%2FFIfiOlVOaQ%2FZauFf74dptyNgpV%2BXB8R6mDVoHv66D7xtczg0ETXW%2B7iyBK%2FowzbmSyVePC7D6rnV9vxiVGgKTkAw0m0g4iwNUryYwRrrrwTw6XpfLbFzDe4McTOMhn2IwrZM1T81iCx1iFYaFqfHbTkih1sNZzEAAJ0dYy49alrmsLb9XvhWQqsQTzR5ewZkVhhwDXsgJAwjtdwOZcxdqbmVdpaHcZPeeVQ8uKQUMT28Ewkfq4vgY6pgHvtEvvd9Z4txZX9YGrCa8Su3XrGLqVuHrXmpYewzCxF%2F%2BEvkkbOD7cCwlqGzs9B9qSy8b7b%2FZFjh2rVnwKsM5asATdDorzGemNRTVC331lhwNrbLK6KMsvuv55wbmavhMyPxwpjGKtvkEx8Ph%2BX1m7JSRF7x0iPf22drtWOHDgapCDpZFXYtujGMm2%2BhIgfcybQu855tskFHXE9EFEWgXzOla2ayQ7&X-Amz-Signature=018901b17c49959b51dd5ee24fda046a11a7b221081db020cff899b5c8d5e7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
