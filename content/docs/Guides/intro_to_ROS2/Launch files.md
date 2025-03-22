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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOEZ7JA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEITabwAvzEAn%2BqaWOdx4ZzXCMxLHi8yfxAEc6s%2BFH2gAiBmQc8FKSpxqpK0FqoxUuhJi24sm9A%2FjFAgUDIEzOTd9CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbn5l5rTSr9VPs5SsKtwDR3v14glNg6ccBrwlpq6l0G4YIzFpLvjVhLWhj%2Flyg0rocEhlMq%2FkSfK9k2HINl5vhzIDOSB9phDgQzW%2B2%2Fmuj6iTOWqXSlPjWTlZPEXmITk1vS3Z9FdaLkvdBG4akXX%2BlBdvWXZjnXyxU4YZ%2FDRpS%2FVB%2F0RPD5LV6XHG%2Fg%2FFbLSROOfFXkGssxac2XZvtd9vmCpWbd4kZihAMB7rZNdZDhLBt2FDsRfIiIMgsUmUG0IIKRTx3agKs8%2B%2FHPu34QfbI1IEVm%2BInnGKsnFxHXkgZKQ1A2Q3fOlf6QHYn1x7hQtJ0NFZHRGgLE3zzEcD0pOaadlFJLnWLpkwIdKbGVCEuNqSv5ZIkiLf6HhxLYSc3qVk%2BjNC48UZPLFciG8AhMX1aZsUPh1m9khHapInfL9roII0zV4NiWrQN3QxjGYP5BpGeQ3Z3GfBHqsHmVUTpzuoVc%2FxvkV3VG7fW1leS9v4ZzUr5hlQkdtwWstLD%2BSfVz5Y0ubWmcx4Sv%2F6vBfSlOHMsNNsxs8qTUyEcqeeTx9m7WJbx7OhkNbjUNEoqrCTqi0WUAcAMKAwqlz%2FuBjs%2FyfVjnD0VJdpfeJowxJSSTsuLhHVZxV8z83%2FY5OWEHXSOgKhDsGkalyBmCrpFpIwjKv5vgY6pgFcmpFiMVZG9GaPcELpa5YFbQJ3LLaPczILqv8C8p2nKh0tPflNNvw5YpMXvcvIm6ol47f7KB2HHCZH9fHf%2B%2BxkDHAMs8mCBvDWqzql21BYZ0xZ56bH9X035rac5tpD1ZrP1jkiUWhypxwpIUpMU0ZGtEBaCCGpD%2FGg11xBz0odaoExuYvOueEFpxS5DXUyhP4ZOj1H%2BTSjSD2lx4BsvSa4LAhsDe7D&X-Amz-Signature=076d236464298bf305a458350e197bb52c73c75f7dfdc2031a7ea3bcfda30e44&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOEZ7JA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEITabwAvzEAn%2BqaWOdx4ZzXCMxLHi8yfxAEc6s%2BFH2gAiBmQc8FKSpxqpK0FqoxUuhJi24sm9A%2FjFAgUDIEzOTd9CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbn5l5rTSr9VPs5SsKtwDR3v14glNg6ccBrwlpq6l0G4YIzFpLvjVhLWhj%2Flyg0rocEhlMq%2FkSfK9k2HINl5vhzIDOSB9phDgQzW%2B2%2Fmuj6iTOWqXSlPjWTlZPEXmITk1vS3Z9FdaLkvdBG4akXX%2BlBdvWXZjnXyxU4YZ%2FDRpS%2FVB%2F0RPD5LV6XHG%2Fg%2FFbLSROOfFXkGssxac2XZvtd9vmCpWbd4kZihAMB7rZNdZDhLBt2FDsRfIiIMgsUmUG0IIKRTx3agKs8%2B%2FHPu34QfbI1IEVm%2BInnGKsnFxHXkgZKQ1A2Q3fOlf6QHYn1x7hQtJ0NFZHRGgLE3zzEcD0pOaadlFJLnWLpkwIdKbGVCEuNqSv5ZIkiLf6HhxLYSc3qVk%2BjNC48UZPLFciG8AhMX1aZsUPh1m9khHapInfL9roII0zV4NiWrQN3QxjGYP5BpGeQ3Z3GfBHqsHmVUTpzuoVc%2FxvkV3VG7fW1leS9v4ZzUr5hlQkdtwWstLD%2BSfVz5Y0ubWmcx4Sv%2F6vBfSlOHMsNNsxs8qTUyEcqeeTx9m7WJbx7OhkNbjUNEoqrCTqi0WUAcAMKAwqlz%2FuBjs%2FyfVjnD0VJdpfeJowxJSSTsuLhHVZxV8z83%2FY5OWEHXSOgKhDsGkalyBmCrpFpIwjKv5vgY6pgFcmpFiMVZG9GaPcELpa5YFbQJ3LLaPczILqv8C8p2nKh0tPflNNvw5YpMXvcvIm6ol47f7KB2HHCZH9fHf%2B%2BxkDHAMs8mCBvDWqzql21BYZ0xZ56bH9X035rac5tpD1ZrP1jkiUWhypxwpIUpMU0ZGtEBaCCGpD%2FGg11xBz0odaoExuYvOueEFpxS5DXUyhP4ZOj1H%2BTSjSD2lx4BsvSa4LAhsDe7D&X-Amz-Signature=e31dc3683acf16bf94778ff3a71a2f2ce7eaef884e59ccec941d373c398bcd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOEZ7JA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEITabwAvzEAn%2BqaWOdx4ZzXCMxLHi8yfxAEc6s%2BFH2gAiBmQc8FKSpxqpK0FqoxUuhJi24sm9A%2FjFAgUDIEzOTd9CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbn5l5rTSr9VPs5SsKtwDR3v14glNg6ccBrwlpq6l0G4YIzFpLvjVhLWhj%2Flyg0rocEhlMq%2FkSfK9k2HINl5vhzIDOSB9phDgQzW%2B2%2Fmuj6iTOWqXSlPjWTlZPEXmITk1vS3Z9FdaLkvdBG4akXX%2BlBdvWXZjnXyxU4YZ%2FDRpS%2FVB%2F0RPD5LV6XHG%2Fg%2FFbLSROOfFXkGssxac2XZvtd9vmCpWbd4kZihAMB7rZNdZDhLBt2FDsRfIiIMgsUmUG0IIKRTx3agKs8%2B%2FHPu34QfbI1IEVm%2BInnGKsnFxHXkgZKQ1A2Q3fOlf6QHYn1x7hQtJ0NFZHRGgLE3zzEcD0pOaadlFJLnWLpkwIdKbGVCEuNqSv5ZIkiLf6HhxLYSc3qVk%2BjNC48UZPLFciG8AhMX1aZsUPh1m9khHapInfL9roII0zV4NiWrQN3QxjGYP5BpGeQ3Z3GfBHqsHmVUTpzuoVc%2FxvkV3VG7fW1leS9v4ZzUr5hlQkdtwWstLD%2BSfVz5Y0ubWmcx4Sv%2F6vBfSlOHMsNNsxs8qTUyEcqeeTx9m7WJbx7OhkNbjUNEoqrCTqi0WUAcAMKAwqlz%2FuBjs%2FyfVjnD0VJdpfeJowxJSSTsuLhHVZxV8z83%2FY5OWEHXSOgKhDsGkalyBmCrpFpIwjKv5vgY6pgFcmpFiMVZG9GaPcELpa5YFbQJ3LLaPczILqv8C8p2nKh0tPflNNvw5YpMXvcvIm6ol47f7KB2HHCZH9fHf%2B%2BxkDHAMs8mCBvDWqzql21BYZ0xZ56bH9X035rac5tpD1ZrP1jkiUWhypxwpIUpMU0ZGtEBaCCGpD%2FGg11xBz0odaoExuYvOueEFpxS5DXUyhP4ZOj1H%2BTSjSD2lx4BsvSa4LAhsDe7D&X-Amz-Signature=4f575c02ed54360e56e075656c7a209f63b107951122690f8597421b8db07128&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
