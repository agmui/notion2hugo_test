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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ63MMCX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzArHl0hVIrbXlh40a8i%2BgqfuXEKiZA2Sf48AzIhcVGAiAMjTRyS4Qs%2BloOEasZysyJ7TuOc9mzYrDcuho66Fssfir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMHpK8%2FUsrGM2HRSo0KtwDHbjdKGa5b3UD841yNzNGNiz9Eeqo%2FXy4NO4JECPsh21BSyvLeMouHw6anaFWQhgYqYlePt3MTLSHvbr4sZK48nIB9nbx9NtbaA7Q8w5xfwpLCL1cBHQ2EZzWtJFd4H4Mwdr1k6fDNSikOqbESk0LlI8EU3x5xTBzzkkcI6ieB1T%2Bozs6LUhG7R15ImxJ3WNWDYFiH740BSLkP9ilv0ue8NlKm8%2Fm2VOUvWLM2oOHti6%2BQJi4%2BRYKl51DMYiq01BygiIZrD2JGw%2FbUlLy4SfqvhYp3F7QssoX10DwrDNUXYdFIBl5z400ydB91JUmWi47KIvNMJnoBZtUdoVJy47u05ISOeoOi49BaWFtAQ4e465JSdvAMLubBwzZkkmfZnj0mPj4gCiyvq%2Bn1orhM5Uq7b2ULgx1SDoqQnAFTZSkSXwsCQQxYfTs4q4VeLKC6VE3x8xkRsVmdWE1ZBAaQ0RFMTccw3Yh6%2Fb0Rp1TwOyfCCH%2FsYLHzv3dTIwhW8poMqcUjpDzyDhVmkUhm3N8uYlrQiO4XpZPRO9DQSxmlVzooYQcWRS76idixoR3CDmzdRdiGt9F72%2BPIrXx77umMz%2B78aX2jrs2nL0HynNN6NADGtru9BcjOVh601o1wrow1syzwAY6pgEv4R5qCPhTVDE6iFdBkzeamWr5maZZqOOEWgyiCupm7CMgoaUUGu6wmxzbZ5tzVbXZT3eBdCvg05oVTGuw0qxpHEeIdYhs%2FFzW9BlELkGnLqkeEtmVkmzlyNf1mtluo0xPRL1oP%2Fizs7AYMjBSH%2FTIH28e%2FcWoXRzhQS9oP7I%2FajBQbesT1Y0UqYEMGRK1CMjreOzqKhfpUywsDHyITDvzGLRNoHO5&X-Amz-Signature=cb7ade52159848d69859b962d6855f2da250ac3033b391042caff7ee600144c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ63MMCX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzArHl0hVIrbXlh40a8i%2BgqfuXEKiZA2Sf48AzIhcVGAiAMjTRyS4Qs%2BloOEasZysyJ7TuOc9mzYrDcuho66Fssfir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMHpK8%2FUsrGM2HRSo0KtwDHbjdKGa5b3UD841yNzNGNiz9Eeqo%2FXy4NO4JECPsh21BSyvLeMouHw6anaFWQhgYqYlePt3MTLSHvbr4sZK48nIB9nbx9NtbaA7Q8w5xfwpLCL1cBHQ2EZzWtJFd4H4Mwdr1k6fDNSikOqbESk0LlI8EU3x5xTBzzkkcI6ieB1T%2Bozs6LUhG7R15ImxJ3WNWDYFiH740BSLkP9ilv0ue8NlKm8%2Fm2VOUvWLM2oOHti6%2BQJi4%2BRYKl51DMYiq01BygiIZrD2JGw%2FbUlLy4SfqvhYp3F7QssoX10DwrDNUXYdFIBl5z400ydB91JUmWi47KIvNMJnoBZtUdoVJy47u05ISOeoOi49BaWFtAQ4e465JSdvAMLubBwzZkkmfZnj0mPj4gCiyvq%2Bn1orhM5Uq7b2ULgx1SDoqQnAFTZSkSXwsCQQxYfTs4q4VeLKC6VE3x8xkRsVmdWE1ZBAaQ0RFMTccw3Yh6%2Fb0Rp1TwOyfCCH%2FsYLHzv3dTIwhW8poMqcUjpDzyDhVmkUhm3N8uYlrQiO4XpZPRO9DQSxmlVzooYQcWRS76idixoR3CDmzdRdiGt9F72%2BPIrXx77umMz%2B78aX2jrs2nL0HynNN6NADGtru9BcjOVh601o1wrow1syzwAY6pgEv4R5qCPhTVDE6iFdBkzeamWr5maZZqOOEWgyiCupm7CMgoaUUGu6wmxzbZ5tzVbXZT3eBdCvg05oVTGuw0qxpHEeIdYhs%2FFzW9BlELkGnLqkeEtmVkmzlyNf1mtluo0xPRL1oP%2Fizs7AYMjBSH%2FTIH28e%2FcWoXRzhQS9oP7I%2FajBQbesT1Y0UqYEMGRK1CMjreOzqKhfpUywsDHyITDvzGLRNoHO5&X-Amz-Signature=1075fd0a1b84381391c482d408cb939e6cf2111bc0d454ed1e7250fe502b8336&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ63MMCX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzArHl0hVIrbXlh40a8i%2BgqfuXEKiZA2Sf48AzIhcVGAiAMjTRyS4Qs%2BloOEasZysyJ7TuOc9mzYrDcuho66Fssfir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMHpK8%2FUsrGM2HRSo0KtwDHbjdKGa5b3UD841yNzNGNiz9Eeqo%2FXy4NO4JECPsh21BSyvLeMouHw6anaFWQhgYqYlePt3MTLSHvbr4sZK48nIB9nbx9NtbaA7Q8w5xfwpLCL1cBHQ2EZzWtJFd4H4Mwdr1k6fDNSikOqbESk0LlI8EU3x5xTBzzkkcI6ieB1T%2Bozs6LUhG7R15ImxJ3WNWDYFiH740BSLkP9ilv0ue8NlKm8%2Fm2VOUvWLM2oOHti6%2BQJi4%2BRYKl51DMYiq01BygiIZrD2JGw%2FbUlLy4SfqvhYp3F7QssoX10DwrDNUXYdFIBl5z400ydB91JUmWi47KIvNMJnoBZtUdoVJy47u05ISOeoOi49BaWFtAQ4e465JSdvAMLubBwzZkkmfZnj0mPj4gCiyvq%2Bn1orhM5Uq7b2ULgx1SDoqQnAFTZSkSXwsCQQxYfTs4q4VeLKC6VE3x8xkRsVmdWE1ZBAaQ0RFMTccw3Yh6%2Fb0Rp1TwOyfCCH%2FsYLHzv3dTIwhW8poMqcUjpDzyDhVmkUhm3N8uYlrQiO4XpZPRO9DQSxmlVzooYQcWRS76idixoR3CDmzdRdiGt9F72%2BPIrXx77umMz%2B78aX2jrs2nL0HynNN6NADGtru9BcjOVh601o1wrow1syzwAY6pgEv4R5qCPhTVDE6iFdBkzeamWr5maZZqOOEWgyiCupm7CMgoaUUGu6wmxzbZ5tzVbXZT3eBdCvg05oVTGuw0qxpHEeIdYhs%2FFzW9BlELkGnLqkeEtmVkmzlyNf1mtluo0xPRL1oP%2Fizs7AYMjBSH%2FTIH28e%2FcWoXRzhQS9oP7I%2FajBQbesT1Y0UqYEMGRK1CMjreOzqKhfpUywsDHyITDvzGLRNoHO5&X-Amz-Signature=a424ffc828bc0d167ac47d9f13d474e6dceec2c98d6da9ef9e2785feafc25216&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
