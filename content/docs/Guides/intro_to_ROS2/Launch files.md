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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7LQHB7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDe6f5yijdhJZBmNryGuOvjcbWJgBLjEdlhETaOgs8OngIhAMzcv9m4ueM6EW4fXlOTxrgoWxFEwnZ2wWqDY7%2B9Ecr5KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzidyYNk7dMhaYXgXQq3APslk2PVwPfhiYiWSmMCDnjxh8SVo814%2Bi5n5nK4btL7ONHQaKVhg4LabaZkQzQZRymDQTPtAkx595fyCrTCuwN8gjoABzb%2Ft%2FEh5kUWtUdBQ7gOJz7DwQumR4G9FMxP4b%2B2NQ5MDkoNazmCZwfWgMUpVvgkaV%2BT6gw4XZh7IlVXJh5TTQ8JDVqu9Ah3X87C29JUMhFijSxjlpKh96o54f3fdnhFF2jm8n09e9JCO0noS27eNpMG61f6CxvTCS9Z9qjV0cy35DIIwOkphKNC%2FhbBprF8HAmfd5PjIpdwh3ycmYjWPIDo5OIeqskbrId5kI3z8k95lhJLZnmpFbNXlnvsY%2FDur5Crg%2FGOr9DudWWGT3CNCegnKpDdfOYWJqkk5bS1w8FLIWErYMoydKbvrreZ%2FnpCz7UXYTtnkVpYHTS0DGOH8RayHhiWL%2BF9tFeXHLRaYP2ckZtrAjUFWceSEXot7C6GgT3NgnvKbRUgVuKmXd%2BGWera0X0Q66YUz2%2BxG6YWLa9hz%2Fe8%2FzwUeVLkWswm8eDTk8FIPA%2BXbcFfX1AUQAILlgoJdtfNLWt%2BDw2SNwSxUdAl3Creg8OiCShHGK%2BVsvdD15YMrpeux22h6s1JxRFrpNgo%2FVsmXKcVTCG2PS%2BBjqkAZ2b1Oso693B%2F8eirENYMZqRDqyX6bDPaD5QYLqFkxtyt3bx3BOqDevaUdQrmF2nwR%2BH9SWo28b%2Bq1U7HxyBE5B9LpiEG91Y%2BbTKak0%2F7pxzUZjoAmSLRj6Ic0yVCpQFpBWz7hlen8%2B5H%2FrJTChdv3K3jl2RrLqdTcaIIgr1OXxP339H4w6lxo%2FgfcS4JFZOnaogEJ32IUU%2Fxyo5dy53%2BpunY0hr&X-Amz-Signature=ab3a718a2a86d1d74e6c68b44fdc98a46451a368f7d7349ff1337cd93609fa0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7LQHB7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDe6f5yijdhJZBmNryGuOvjcbWJgBLjEdlhETaOgs8OngIhAMzcv9m4ueM6EW4fXlOTxrgoWxFEwnZ2wWqDY7%2B9Ecr5KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzidyYNk7dMhaYXgXQq3APslk2PVwPfhiYiWSmMCDnjxh8SVo814%2Bi5n5nK4btL7ONHQaKVhg4LabaZkQzQZRymDQTPtAkx595fyCrTCuwN8gjoABzb%2Ft%2FEh5kUWtUdBQ7gOJz7DwQumR4G9FMxP4b%2B2NQ5MDkoNazmCZwfWgMUpVvgkaV%2BT6gw4XZh7IlVXJh5TTQ8JDVqu9Ah3X87C29JUMhFijSxjlpKh96o54f3fdnhFF2jm8n09e9JCO0noS27eNpMG61f6CxvTCS9Z9qjV0cy35DIIwOkphKNC%2FhbBprF8HAmfd5PjIpdwh3ycmYjWPIDo5OIeqskbrId5kI3z8k95lhJLZnmpFbNXlnvsY%2FDur5Crg%2FGOr9DudWWGT3CNCegnKpDdfOYWJqkk5bS1w8FLIWErYMoydKbvrreZ%2FnpCz7UXYTtnkVpYHTS0DGOH8RayHhiWL%2BF9tFeXHLRaYP2ckZtrAjUFWceSEXot7C6GgT3NgnvKbRUgVuKmXd%2BGWera0X0Q66YUz2%2BxG6YWLa9hz%2Fe8%2FzwUeVLkWswm8eDTk8FIPA%2BXbcFfX1AUQAILlgoJdtfNLWt%2BDw2SNwSxUdAl3Creg8OiCShHGK%2BVsvdD15YMrpeux22h6s1JxRFrpNgo%2FVsmXKcVTCG2PS%2BBjqkAZ2b1Oso693B%2F8eirENYMZqRDqyX6bDPaD5QYLqFkxtyt3bx3BOqDevaUdQrmF2nwR%2BH9SWo28b%2Bq1U7HxyBE5B9LpiEG91Y%2BbTKak0%2F7pxzUZjoAmSLRj6Ic0yVCpQFpBWz7hlen8%2B5H%2FrJTChdv3K3jl2RrLqdTcaIIgr1OXxP339H4w6lxo%2FgfcS4JFZOnaogEJ32IUU%2Fxyo5dy53%2BpunY0hr&X-Amz-Signature=cc00556fcb6381ef9f9384741d2b27a9148f2bc095aba66f69a9018cb51fc9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7LQHB7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDe6f5yijdhJZBmNryGuOvjcbWJgBLjEdlhETaOgs8OngIhAMzcv9m4ueM6EW4fXlOTxrgoWxFEwnZ2wWqDY7%2B9Ecr5KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzidyYNk7dMhaYXgXQq3APslk2PVwPfhiYiWSmMCDnjxh8SVo814%2Bi5n5nK4btL7ONHQaKVhg4LabaZkQzQZRymDQTPtAkx595fyCrTCuwN8gjoABzb%2Ft%2FEh5kUWtUdBQ7gOJz7DwQumR4G9FMxP4b%2B2NQ5MDkoNazmCZwfWgMUpVvgkaV%2BT6gw4XZh7IlVXJh5TTQ8JDVqu9Ah3X87C29JUMhFijSxjlpKh96o54f3fdnhFF2jm8n09e9JCO0noS27eNpMG61f6CxvTCS9Z9qjV0cy35DIIwOkphKNC%2FhbBprF8HAmfd5PjIpdwh3ycmYjWPIDo5OIeqskbrId5kI3z8k95lhJLZnmpFbNXlnvsY%2FDur5Crg%2FGOr9DudWWGT3CNCegnKpDdfOYWJqkk5bS1w8FLIWErYMoydKbvrreZ%2FnpCz7UXYTtnkVpYHTS0DGOH8RayHhiWL%2BF9tFeXHLRaYP2ckZtrAjUFWceSEXot7C6GgT3NgnvKbRUgVuKmXd%2BGWera0X0Q66YUz2%2BxG6YWLa9hz%2Fe8%2FzwUeVLkWswm8eDTk8FIPA%2BXbcFfX1AUQAILlgoJdtfNLWt%2BDw2SNwSxUdAl3Creg8OiCShHGK%2BVsvdD15YMrpeux22h6s1JxRFrpNgo%2FVsmXKcVTCG2PS%2BBjqkAZ2b1Oso693B%2F8eirENYMZqRDqyX6bDPaD5QYLqFkxtyt3bx3BOqDevaUdQrmF2nwR%2BH9SWo28b%2Bq1U7HxyBE5B9LpiEG91Y%2BbTKak0%2F7pxzUZjoAmSLRj6Ic0yVCpQFpBWz7hlen8%2B5H%2FrJTChdv3K3jl2RrLqdTcaIIgr1OXxP339H4w6lxo%2FgfcS4JFZOnaogEJ32IUU%2Fxyo5dy53%2BpunY0hr&X-Amz-Signature=48108cae2f2e9279ca04f999d42647d9230d079a60a2b00289bd7a5727a378cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
