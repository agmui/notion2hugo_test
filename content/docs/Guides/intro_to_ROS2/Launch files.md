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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3KGGYB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer4R9NwXYvZZdjUnRbq71WyMsccYjkLYWlc9ShsRb5QIgTP7WTRffJS%2FLraUX9C1gK9AsIGro9s6cRWrvPerLw5Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOggRDqPwfcjpDVESSrcA4Kk1HS1wZ4Sxls0Llfkgt3ROAC2kSRchV0zdBNRkaQWRrdS9JkjaODHlBxq6ICMGcbZfdSwsYyMhxDNepFEBPeeOUFJ8CZm14vylLVJ9YuVd3XpHLZeksthpClO2rqWmPvebmLi9M2EVKB6LsNLA2Ffs6BwEKyGd%2FVLVnhS6rdtdRB4lN8t5O0hmdm5%2Fxxfa3BkqU5NmteaZXriqLj8TqGPkLA4k7tg646Lox6DC3De0f56d4%2FnKEmQM6ieM6kMyhmSN42ip8F2Vw4hwdxCEqnXHuKXAMunYFSFdtmZDWTsgUMWGitCV%2FqkT%2B2UvKl00tm19ErQqnWGOM3ODu0e5CHEqMbSuVWGn5nYSelYzdgsPEVW9tK2tDD3ZsUNV50SuXtzp6FEH7pWQvV0vIM%2Fvoda8E2zJyD%2F8%2FU62Pc6tkiTtLw2Kke2zQ9tPPYiIUBzpW6c2uPZTyeYuuX43700vQGEMQQi%2FGGmfslcq6PQnDa8wtY%2BKQKVUthkQlwtyn9D557ZRnV1rIFeWeCuJTKlBZS4pwcTrKN0%2B5KGAHfClnDVePtWVwJPkztKdUDJe1bDUP1hvgEdoGPDMpQEcbkPXb5%2FLlMqGiA4NdB%2BuGJbB%2F1Oa1cLYAMMDpCxz92bMLKG98QGOqUBxg%2F8cqsz9YXse5QoFONosHHZovuvepIWWfMq9W4yhj9fgl3tyXbYN%2Ft3AaG2D4hSB%2Fae2SKn%2FHemsE0UFaibuIKAhIyF7T%2FaUlomIUxnDdsbyEz6u%2FUVqSm0%2FabKPjL0beDaFmKBI9InRU1tm1t7uBfu2RiQAFYMJ%2Bf55Jj0Ojb1FMK0gNYPYOMI05Sgz0%2F5ylTJx6CpivY1ASWmujY9nQR4VLg%2F&X-Amz-Signature=0f38708aa93120217d62923e5a250c88d834bb71fe388f679ef29c11891baf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3KGGYB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer4R9NwXYvZZdjUnRbq71WyMsccYjkLYWlc9ShsRb5QIgTP7WTRffJS%2FLraUX9C1gK9AsIGro9s6cRWrvPerLw5Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOggRDqPwfcjpDVESSrcA4Kk1HS1wZ4Sxls0Llfkgt3ROAC2kSRchV0zdBNRkaQWRrdS9JkjaODHlBxq6ICMGcbZfdSwsYyMhxDNepFEBPeeOUFJ8CZm14vylLVJ9YuVd3XpHLZeksthpClO2rqWmPvebmLi9M2EVKB6LsNLA2Ffs6BwEKyGd%2FVLVnhS6rdtdRB4lN8t5O0hmdm5%2Fxxfa3BkqU5NmteaZXriqLj8TqGPkLA4k7tg646Lox6DC3De0f56d4%2FnKEmQM6ieM6kMyhmSN42ip8F2Vw4hwdxCEqnXHuKXAMunYFSFdtmZDWTsgUMWGitCV%2FqkT%2B2UvKl00tm19ErQqnWGOM3ODu0e5CHEqMbSuVWGn5nYSelYzdgsPEVW9tK2tDD3ZsUNV50SuXtzp6FEH7pWQvV0vIM%2Fvoda8E2zJyD%2F8%2FU62Pc6tkiTtLw2Kke2zQ9tPPYiIUBzpW6c2uPZTyeYuuX43700vQGEMQQi%2FGGmfslcq6PQnDa8wtY%2BKQKVUthkQlwtyn9D557ZRnV1rIFeWeCuJTKlBZS4pwcTrKN0%2B5KGAHfClnDVePtWVwJPkztKdUDJe1bDUP1hvgEdoGPDMpQEcbkPXb5%2FLlMqGiA4NdB%2BuGJbB%2F1Oa1cLYAMMDpCxz92bMLKG98QGOqUBxg%2F8cqsz9YXse5QoFONosHHZovuvepIWWfMq9W4yhj9fgl3tyXbYN%2Ft3AaG2D4hSB%2Fae2SKn%2FHemsE0UFaibuIKAhIyF7T%2FaUlomIUxnDdsbyEz6u%2FUVqSm0%2FabKPjL0beDaFmKBI9InRU1tm1t7uBfu2RiQAFYMJ%2Bf55Jj0Ojb1FMK0gNYPYOMI05Sgz0%2F5ylTJx6CpivY1ASWmujY9nQR4VLg%2F&X-Amz-Signature=0da1acd0c346345e37c516bb1dc95d350d5f3414ce57f9814a67231e2d4be983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3KGGYB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer4R9NwXYvZZdjUnRbq71WyMsccYjkLYWlc9ShsRb5QIgTP7WTRffJS%2FLraUX9C1gK9AsIGro9s6cRWrvPerLw5Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOggRDqPwfcjpDVESSrcA4Kk1HS1wZ4Sxls0Llfkgt3ROAC2kSRchV0zdBNRkaQWRrdS9JkjaODHlBxq6ICMGcbZfdSwsYyMhxDNepFEBPeeOUFJ8CZm14vylLVJ9YuVd3XpHLZeksthpClO2rqWmPvebmLi9M2EVKB6LsNLA2Ffs6BwEKyGd%2FVLVnhS6rdtdRB4lN8t5O0hmdm5%2Fxxfa3BkqU5NmteaZXriqLj8TqGPkLA4k7tg646Lox6DC3De0f56d4%2FnKEmQM6ieM6kMyhmSN42ip8F2Vw4hwdxCEqnXHuKXAMunYFSFdtmZDWTsgUMWGitCV%2FqkT%2B2UvKl00tm19ErQqnWGOM3ODu0e5CHEqMbSuVWGn5nYSelYzdgsPEVW9tK2tDD3ZsUNV50SuXtzp6FEH7pWQvV0vIM%2Fvoda8E2zJyD%2F8%2FU62Pc6tkiTtLw2Kke2zQ9tPPYiIUBzpW6c2uPZTyeYuuX43700vQGEMQQi%2FGGmfslcq6PQnDa8wtY%2BKQKVUthkQlwtyn9D557ZRnV1rIFeWeCuJTKlBZS4pwcTrKN0%2B5KGAHfClnDVePtWVwJPkztKdUDJe1bDUP1hvgEdoGPDMpQEcbkPXb5%2FLlMqGiA4NdB%2BuGJbB%2F1Oa1cLYAMMDpCxz92bMLKG98QGOqUBxg%2F8cqsz9YXse5QoFONosHHZovuvepIWWfMq9W4yhj9fgl3tyXbYN%2Ft3AaG2D4hSB%2Fae2SKn%2FHemsE0UFaibuIKAhIyF7T%2FaUlomIUxnDdsbyEz6u%2FUVqSm0%2FabKPjL0beDaFmKBI9InRU1tm1t7uBfu2RiQAFYMJ%2Bf55Jj0Ojb1FMK0gNYPYOMI05Sgz0%2F5ylTJx6CpivY1ASWmujY9nQR4VLg%2F&X-Amz-Signature=5f8fa29a0503d401577a08cc8f1ef6ce77008448ced1c953787515dadcb7f624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
