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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3E27A3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn4jX%2FM57nh3uhHaTU%2Fn9knK8ylu%2BhcUwE1gt4aGQRgwIhAOQmChUgfIM%2FYLyD96RXyr0jCpWcShCSnYPl2xDVaP2bKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsHaAXUbTtivX1Icq3ANP5V1nx%2FUOX0HQ2zZycidiSj5Zz4cPudHQlkD35pqty8UNzGocfM2Z%2BKp42ZuEocnKQnxK55XKrWh%2BeMMdPga%2BW5f0nKnwOjp7ytoA3n75SN1z1gBDTSYsxMuivUwP%2B33soaLhWSO3%2FCFM04RshMcHu5AVBo0%2B0biIRhCfoWi%2BR9AlfO%2BzZyuTpP3dsHg3soRQWAP0gmFqLz8wxHSBTzMCTsgAeRslP%2FXmNLoBPeV3Fg576%2FUeozq%2BGXCYYITEJeyhmaNha1Opc%2BhtRNXsrVsz%2FLfww0Vtk2K9XZkV%2Fkj4U6P03A7N51sJtyPuttiYfzwdBd3HpmDXRvuKq9%2FJbJyL3Y%2BV7A9AOVr7Ic%2Bz28UtWEsy2Scv4mGVPaPZec%2FnHj0AaZnkIInvOCgSMJV0l2Bc6QLosSFqFOqMm6ARU0%2BYwDW9xyLkqV9RQl6emDofEv%2FrHjh7ALb3LKhXwZZkNmUAV0tBxR%2BRU57u8d7%2B7VstaCAK0oLsITRcSYOoPQ9R4MI81XCvF41vTxLvOp6AQ30Ac5%2BiId3BwRSGz7DbpAA8aPwfgSDlhaKmqqYOFSzTI5IjGbFgZcuzWR3KU5Dk7X1xWTulpZEukenCruVWhYWFhenmr00OUao2t%2FqaBzDzicDABjqkAe8%2FupC4VTAfjWcbvOoOugJpWw3dzSns3pbE24%2B2pCO5XgdQNTe1J3POLQjWnt9UKzNYg%2F5dNOwszkKOdKl4SQ3C%2FFCYIHa6rhT6iZLZwfCObZF2a2W9Andz74PQQz81AdKaJQFOhpJkZftli%2F%2B3kBoZrcKCu5SjcK52IX7taG0ZFQt3GbDkUFF9IUEnjI60uUWoFJhbsDf3hV%2B7IMMoX%2BwRzpGn&X-Amz-Signature=6769b0cbaaab54921ba3f3e47667fbe49e0ea0ec147cd4df7a77c6179997fc88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3E27A3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn4jX%2FM57nh3uhHaTU%2Fn9knK8ylu%2BhcUwE1gt4aGQRgwIhAOQmChUgfIM%2FYLyD96RXyr0jCpWcShCSnYPl2xDVaP2bKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsHaAXUbTtivX1Icq3ANP5V1nx%2FUOX0HQ2zZycidiSj5Zz4cPudHQlkD35pqty8UNzGocfM2Z%2BKp42ZuEocnKQnxK55XKrWh%2BeMMdPga%2BW5f0nKnwOjp7ytoA3n75SN1z1gBDTSYsxMuivUwP%2B33soaLhWSO3%2FCFM04RshMcHu5AVBo0%2B0biIRhCfoWi%2BR9AlfO%2BzZyuTpP3dsHg3soRQWAP0gmFqLz8wxHSBTzMCTsgAeRslP%2FXmNLoBPeV3Fg576%2FUeozq%2BGXCYYITEJeyhmaNha1Opc%2BhtRNXsrVsz%2FLfww0Vtk2K9XZkV%2Fkj4U6P03A7N51sJtyPuttiYfzwdBd3HpmDXRvuKq9%2FJbJyL3Y%2BV7A9AOVr7Ic%2Bz28UtWEsy2Scv4mGVPaPZec%2FnHj0AaZnkIInvOCgSMJV0l2Bc6QLosSFqFOqMm6ARU0%2BYwDW9xyLkqV9RQl6emDofEv%2FrHjh7ALb3LKhXwZZkNmUAV0tBxR%2BRU57u8d7%2B7VstaCAK0oLsITRcSYOoPQ9R4MI81XCvF41vTxLvOp6AQ30Ac5%2BiId3BwRSGz7DbpAA8aPwfgSDlhaKmqqYOFSzTI5IjGbFgZcuzWR3KU5Dk7X1xWTulpZEukenCruVWhYWFhenmr00OUao2t%2FqaBzDzicDABjqkAe8%2FupC4VTAfjWcbvOoOugJpWw3dzSns3pbE24%2B2pCO5XgdQNTe1J3POLQjWnt9UKzNYg%2F5dNOwszkKOdKl4SQ3C%2FFCYIHa6rhT6iZLZwfCObZF2a2W9Andz74PQQz81AdKaJQFOhpJkZftli%2F%2B3kBoZrcKCu5SjcK52IX7taG0ZFQt3GbDkUFF9IUEnjI60uUWoFJhbsDf3hV%2B7IMMoX%2BwRzpGn&X-Amz-Signature=926d3b91c0e6f5d3dffa718901685d10d95be95724bc4505cc10f3e2c44d219f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3E27A3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn4jX%2FM57nh3uhHaTU%2Fn9knK8ylu%2BhcUwE1gt4aGQRgwIhAOQmChUgfIM%2FYLyD96RXyr0jCpWcShCSnYPl2xDVaP2bKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsHaAXUbTtivX1Icq3ANP5V1nx%2FUOX0HQ2zZycidiSj5Zz4cPudHQlkD35pqty8UNzGocfM2Z%2BKp42ZuEocnKQnxK55XKrWh%2BeMMdPga%2BW5f0nKnwOjp7ytoA3n75SN1z1gBDTSYsxMuivUwP%2B33soaLhWSO3%2FCFM04RshMcHu5AVBo0%2B0biIRhCfoWi%2BR9AlfO%2BzZyuTpP3dsHg3soRQWAP0gmFqLz8wxHSBTzMCTsgAeRslP%2FXmNLoBPeV3Fg576%2FUeozq%2BGXCYYITEJeyhmaNha1Opc%2BhtRNXsrVsz%2FLfww0Vtk2K9XZkV%2Fkj4U6P03A7N51sJtyPuttiYfzwdBd3HpmDXRvuKq9%2FJbJyL3Y%2BV7A9AOVr7Ic%2Bz28UtWEsy2Scv4mGVPaPZec%2FnHj0AaZnkIInvOCgSMJV0l2Bc6QLosSFqFOqMm6ARU0%2BYwDW9xyLkqV9RQl6emDofEv%2FrHjh7ALb3LKhXwZZkNmUAV0tBxR%2BRU57u8d7%2B7VstaCAK0oLsITRcSYOoPQ9R4MI81XCvF41vTxLvOp6AQ30Ac5%2BiId3BwRSGz7DbpAA8aPwfgSDlhaKmqqYOFSzTI5IjGbFgZcuzWR3KU5Dk7X1xWTulpZEukenCruVWhYWFhenmr00OUao2t%2FqaBzDzicDABjqkAe8%2FupC4VTAfjWcbvOoOugJpWw3dzSns3pbE24%2B2pCO5XgdQNTe1J3POLQjWnt9UKzNYg%2F5dNOwszkKOdKl4SQ3C%2FFCYIHa6rhT6iZLZwfCObZF2a2W9Andz74PQQz81AdKaJQFOhpJkZftli%2F%2B3kBoZrcKCu5SjcK52IX7taG0ZFQt3GbDkUFF9IUEnjI60uUWoFJhbsDf3hV%2B7IMMoX%2BwRzpGn&X-Amz-Signature=b4fda10d8216939b170c1f78044eb1e3d35c6847f3b7496305a3782a5bc66a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
