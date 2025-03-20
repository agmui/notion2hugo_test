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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLI2TLSX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBm0RZh7%2BB8OZfip8jhnBr1p%2BC0ZDE2j5pVHy2qH2OFDAiAKgC8S%2FBDYhytne2qfsFaNEPnYtdVRvPIlMaTEKGd8QiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yVCz%2Becpx8ePAQfKtwDogpuAZMb1D2NLsD6zykp77FgaGEYZvF%2FCnguKpGn%2Bd%2B%2F4MLd3LdzoU3uU1zjQ5vKDpqEgEBfVUuzbATfADaJ%2FkX%2BGdbe3epLNyGfWIuf40Jp8N%2BTauuxomUib9UWHeWihYQucfKufP5%2B2XUbL2kOm5GCTRpBb95jxvi6BBl9ZqFkPXx0UlIJJIcodzwxh9LFhkvRidQ6nomndCucXoIc9IOHkUtmpXTmG1PfU2tijDOE5UjBfAzq33SAn0h1YvhIdiyM6UwEdldgcD43TlbG12ikjC06fO%2BAIOZPTi%2Ft%2Bu7B6c8xQ%2FWyZTmh1juCBN8qlBXYezpWBtPiUzmC2SnE8x%2F8jbILLZAD2uSBQX329hEWyk9cqKHshndVW8YyA8ztzyGeakJEAFddh2RNADAiVJqtiphrThzwmd9ua6oAX3vKUZ%2Fqw2CNaOUC1LHNmkkkCFrbCRpDihM8lZw%2FA3azXwv1D%2BdSaxkPhxGURP3ihrJLRmO4Beawfehqg3qj0ozZQc4Oqwa2JSNXejRXtlXOuc57d8tRKFBAUEEH91Wsw2ronCVqwH4xH3yZPs7o0w7ZgSL8h9xWvT5WGolUmQEIYJ7Wscrurt0YawllYPffmHourSJfA0qu6ozjo10wuqbvvgY6pgG8zCgVgkQv6pLRxP5u7dI6NQr1qUYaOUbaFXyQbK%2BTyB19glCO1BtyApeDGSdXKEP8u%2BYgCsnAEdcH2tdXi%2B1RPqNS6DeW%2Fes3Hh1%2Fl6Xchk3EqLasY5CkYzC1N7DkqZ3a03v35Arhq1L6ysNIcX%2B88VeGrblSD86aStF46Oj%2FJgkIoYBQx0z%2F7ltG4Rj292seIZg18mcpZoNOx1o2NaQkLQm3OCAX&X-Amz-Signature=c601a93a51e1d89e9e9ac5e0a8b62f2df86dae702e4c83dc5f621ff767be8595&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLI2TLSX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBm0RZh7%2BB8OZfip8jhnBr1p%2BC0ZDE2j5pVHy2qH2OFDAiAKgC8S%2FBDYhytne2qfsFaNEPnYtdVRvPIlMaTEKGd8QiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yVCz%2Becpx8ePAQfKtwDogpuAZMb1D2NLsD6zykp77FgaGEYZvF%2FCnguKpGn%2Bd%2B%2F4MLd3LdzoU3uU1zjQ5vKDpqEgEBfVUuzbATfADaJ%2FkX%2BGdbe3epLNyGfWIuf40Jp8N%2BTauuxomUib9UWHeWihYQucfKufP5%2B2XUbL2kOm5GCTRpBb95jxvi6BBl9ZqFkPXx0UlIJJIcodzwxh9LFhkvRidQ6nomndCucXoIc9IOHkUtmpXTmG1PfU2tijDOE5UjBfAzq33SAn0h1YvhIdiyM6UwEdldgcD43TlbG12ikjC06fO%2BAIOZPTi%2Ft%2Bu7B6c8xQ%2FWyZTmh1juCBN8qlBXYezpWBtPiUzmC2SnE8x%2F8jbILLZAD2uSBQX329hEWyk9cqKHshndVW8YyA8ztzyGeakJEAFddh2RNADAiVJqtiphrThzwmd9ua6oAX3vKUZ%2Fqw2CNaOUC1LHNmkkkCFrbCRpDihM8lZw%2FA3azXwv1D%2BdSaxkPhxGURP3ihrJLRmO4Beawfehqg3qj0ozZQc4Oqwa2JSNXejRXtlXOuc57d8tRKFBAUEEH91Wsw2ronCVqwH4xH3yZPs7o0w7ZgSL8h9xWvT5WGolUmQEIYJ7Wscrurt0YawllYPffmHourSJfA0qu6ozjo10wuqbvvgY6pgG8zCgVgkQv6pLRxP5u7dI6NQr1qUYaOUbaFXyQbK%2BTyB19glCO1BtyApeDGSdXKEP8u%2BYgCsnAEdcH2tdXi%2B1RPqNS6DeW%2Fes3Hh1%2Fl6Xchk3EqLasY5CkYzC1N7DkqZ3a03v35Arhq1L6ysNIcX%2B88VeGrblSD86aStF46Oj%2FJgkIoYBQx0z%2F7ltG4Rj292seIZg18mcpZoNOx1o2NaQkLQm3OCAX&X-Amz-Signature=d6a88a650b2310dd0ffa75ada3bfbebfc173c056825e477a3538d6d21692dfd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLI2TLSX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBm0RZh7%2BB8OZfip8jhnBr1p%2BC0ZDE2j5pVHy2qH2OFDAiAKgC8S%2FBDYhytne2qfsFaNEPnYtdVRvPIlMaTEKGd8QiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yVCz%2Becpx8ePAQfKtwDogpuAZMb1D2NLsD6zykp77FgaGEYZvF%2FCnguKpGn%2Bd%2B%2F4MLd3LdzoU3uU1zjQ5vKDpqEgEBfVUuzbATfADaJ%2FkX%2BGdbe3epLNyGfWIuf40Jp8N%2BTauuxomUib9UWHeWihYQucfKufP5%2B2XUbL2kOm5GCTRpBb95jxvi6BBl9ZqFkPXx0UlIJJIcodzwxh9LFhkvRidQ6nomndCucXoIc9IOHkUtmpXTmG1PfU2tijDOE5UjBfAzq33SAn0h1YvhIdiyM6UwEdldgcD43TlbG12ikjC06fO%2BAIOZPTi%2Ft%2Bu7B6c8xQ%2FWyZTmh1juCBN8qlBXYezpWBtPiUzmC2SnE8x%2F8jbILLZAD2uSBQX329hEWyk9cqKHshndVW8YyA8ztzyGeakJEAFddh2RNADAiVJqtiphrThzwmd9ua6oAX3vKUZ%2Fqw2CNaOUC1LHNmkkkCFrbCRpDihM8lZw%2FA3azXwv1D%2BdSaxkPhxGURP3ihrJLRmO4Beawfehqg3qj0ozZQc4Oqwa2JSNXejRXtlXOuc57d8tRKFBAUEEH91Wsw2ronCVqwH4xH3yZPs7o0w7ZgSL8h9xWvT5WGolUmQEIYJ7Wscrurt0YawllYPffmHourSJfA0qu6ozjo10wuqbvvgY6pgG8zCgVgkQv6pLRxP5u7dI6NQr1qUYaOUbaFXyQbK%2BTyB19glCO1BtyApeDGSdXKEP8u%2BYgCsnAEdcH2tdXi%2B1RPqNS6DeW%2Fes3Hh1%2Fl6Xchk3EqLasY5CkYzC1N7DkqZ3a03v35Arhq1L6ysNIcX%2B88VeGrblSD86aStF46Oj%2FJgkIoYBQx0z%2F7ltG4Rj292seIZg18mcpZoNOx1o2NaQkLQm3OCAX&X-Amz-Signature=a7f31a6f092a7069ded68d06b023f675779c56bfeb565e0839596bafd0612d04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
