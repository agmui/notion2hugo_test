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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJPD7RU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC0dgP%2Fpk0uEqhe5430Fnpq1I3k938CRPMYbYVEuVc1TwIhAKvfRC8Ma2L2%2FgvqogaL%2FkaaiJwx8fbKGsCJ1vGX7KEkKv8DCC0QABoMNjM3NDIzMTgzODA1Igya%2FMJt61RZqeXPkwwq3AOnqfZ4s7V4xHvxqScmI82A%2BflBh7FUXPlP3gTwlF4e6EoBUPG0r9R5wGmFaPxLwiMZVJ0xmHBA406wdSvSTB9nMzTtWtq3c0LEOvT1raRP%2Frf%2FmmrQuK5R1jeTQL2YNecf0vf6PsvDCOWtbfIRbUoTM19oeyZyuWqMZbzNKSn2TzHk9O5clynPR5pOFksjL48riucv7Xfjl0ICCU6XjAXnNkUPttRE5uulcGUfwOnLAruw%2FPkGlyaUK%2BW5LRS33KWXlqZABiwbZ1OSYlUcqksKcWRnIRugh1zbnthPc9xMrKM8YIoNF9OwZZ8Tlpzpmn6kXAD3Yt8ohGh0xwe4yGTKrX10RXYdLQjd5RpGP2z7G9OiOXjqODwNeK%2FdQV961dSMqb808BJxpyFlTUPtx8I53bo7rIhJuXShssSsnw%2Fi0Yt0NXwXutdwZlpuLemvSLj%2BgLUcUNrt52%2Fqz8YkfCkdnIGZ1RgfeuaIt5THMQ7%2BivmQ7Y6KeOjK8zcVDkTC4nuioM1Nm%2BMH5a4w6qyDU%2FC7UXSkmf%2BEliP5ailXX7aU9xxL%2B2R06YVKdMrBeWwqvARQYXw5Ja%2B3KiOMVzHvd9EdiPCD%2F1g8kvtmgba2bkwBHFLyP5mzBh3nTU8pvzDq6ry9BjqkAXQHpEhKmNEVV%2BC4MKELYrANdZTDQBQWEUUg87SIIJGF1yHSFVha3zwZ%2FdbDWFtcR3XA8sK3s5FYayhu8LU1ach1Px8hWQVstirCDM34zYiWXCwJnbGIYMZkvCNwcJxPo%2FmeNm0Sqq%2B8OoFJue0SmUzkTyA%2Fit%2Bp4joEliPCgoLBnivmiV%2FO8dP7McQuDP7ef43pc18W6gmT1yxScz1b7ruM4cwg&X-Amz-Signature=45ed14c6a6696b9edd4a6d3d9542a83684d0420e29f3cece5a08fec1958f10a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJPD7RU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC0dgP%2Fpk0uEqhe5430Fnpq1I3k938CRPMYbYVEuVc1TwIhAKvfRC8Ma2L2%2FgvqogaL%2FkaaiJwx8fbKGsCJ1vGX7KEkKv8DCC0QABoMNjM3NDIzMTgzODA1Igya%2FMJt61RZqeXPkwwq3AOnqfZ4s7V4xHvxqScmI82A%2BflBh7FUXPlP3gTwlF4e6EoBUPG0r9R5wGmFaPxLwiMZVJ0xmHBA406wdSvSTB9nMzTtWtq3c0LEOvT1raRP%2Frf%2FmmrQuK5R1jeTQL2YNecf0vf6PsvDCOWtbfIRbUoTM19oeyZyuWqMZbzNKSn2TzHk9O5clynPR5pOFksjL48riucv7Xfjl0ICCU6XjAXnNkUPttRE5uulcGUfwOnLAruw%2FPkGlyaUK%2BW5LRS33KWXlqZABiwbZ1OSYlUcqksKcWRnIRugh1zbnthPc9xMrKM8YIoNF9OwZZ8Tlpzpmn6kXAD3Yt8ohGh0xwe4yGTKrX10RXYdLQjd5RpGP2z7G9OiOXjqODwNeK%2FdQV961dSMqb808BJxpyFlTUPtx8I53bo7rIhJuXShssSsnw%2Fi0Yt0NXwXutdwZlpuLemvSLj%2BgLUcUNrt52%2Fqz8YkfCkdnIGZ1RgfeuaIt5THMQ7%2BivmQ7Y6KeOjK8zcVDkTC4nuioM1Nm%2BMH5a4w6qyDU%2FC7UXSkmf%2BEliP5ailXX7aU9xxL%2B2R06YVKdMrBeWwqvARQYXw5Ja%2B3KiOMVzHvd9EdiPCD%2F1g8kvtmgba2bkwBHFLyP5mzBh3nTU8pvzDq6ry9BjqkAXQHpEhKmNEVV%2BC4MKELYrANdZTDQBQWEUUg87SIIJGF1yHSFVha3zwZ%2FdbDWFtcR3XA8sK3s5FYayhu8LU1ach1Px8hWQVstirCDM34zYiWXCwJnbGIYMZkvCNwcJxPo%2FmeNm0Sqq%2B8OoFJue0SmUzkTyA%2Fit%2Bp4joEliPCgoLBnivmiV%2FO8dP7McQuDP7ef43pc18W6gmT1yxScz1b7ruM4cwg&X-Amz-Signature=a2eaacc12856fef3441dae8d15e49e4d40eb158638ba234533d7c68f3000c67e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJPD7RU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC0dgP%2Fpk0uEqhe5430Fnpq1I3k938CRPMYbYVEuVc1TwIhAKvfRC8Ma2L2%2FgvqogaL%2FkaaiJwx8fbKGsCJ1vGX7KEkKv8DCC0QABoMNjM3NDIzMTgzODA1Igya%2FMJt61RZqeXPkwwq3AOnqfZ4s7V4xHvxqScmI82A%2BflBh7FUXPlP3gTwlF4e6EoBUPG0r9R5wGmFaPxLwiMZVJ0xmHBA406wdSvSTB9nMzTtWtq3c0LEOvT1raRP%2Frf%2FmmrQuK5R1jeTQL2YNecf0vf6PsvDCOWtbfIRbUoTM19oeyZyuWqMZbzNKSn2TzHk9O5clynPR5pOFksjL48riucv7Xfjl0ICCU6XjAXnNkUPttRE5uulcGUfwOnLAruw%2FPkGlyaUK%2BW5LRS33KWXlqZABiwbZ1OSYlUcqksKcWRnIRugh1zbnthPc9xMrKM8YIoNF9OwZZ8Tlpzpmn6kXAD3Yt8ohGh0xwe4yGTKrX10RXYdLQjd5RpGP2z7G9OiOXjqODwNeK%2FdQV961dSMqb808BJxpyFlTUPtx8I53bo7rIhJuXShssSsnw%2Fi0Yt0NXwXutdwZlpuLemvSLj%2BgLUcUNrt52%2Fqz8YkfCkdnIGZ1RgfeuaIt5THMQ7%2BivmQ7Y6KeOjK8zcVDkTC4nuioM1Nm%2BMH5a4w6qyDU%2FC7UXSkmf%2BEliP5ailXX7aU9xxL%2B2R06YVKdMrBeWwqvARQYXw5Ja%2B3KiOMVzHvd9EdiPCD%2F1g8kvtmgba2bkwBHFLyP5mzBh3nTU8pvzDq6ry9BjqkAXQHpEhKmNEVV%2BC4MKELYrANdZTDQBQWEUUg87SIIJGF1yHSFVha3zwZ%2FdbDWFtcR3XA8sK3s5FYayhu8LU1ach1Px8hWQVstirCDM34zYiWXCwJnbGIYMZkvCNwcJxPo%2FmeNm0Sqq%2B8OoFJue0SmUzkTyA%2Fit%2Bp4joEliPCgoLBnivmiV%2FO8dP7McQuDP7ef43pc18W6gmT1yxScz1b7ruM4cwg&X-Amz-Signature=fba2bccafd4470a0ebb50475ff2ac712a81717fb922f2854689b003fefaedc22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
