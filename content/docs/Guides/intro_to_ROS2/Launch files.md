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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUFEDHM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZxcCl8QZnJ9pGC%2FNP8X%2BSzitC%2FKEvbG8il%2F0a91ry2gIhAIiu44ak7gRA2YP3QXdwI286wdJr4RQZTDKK0TTNovGAKv8DCDsQABoMNjM3NDIzMTgzODA1IgzAbQopEirB9UidcAoq3ANwXEx%2BqAeN4ZBuyAswKghMWeXd26ZjzFjAuO9sxcxXVH5vredpy16T14kQAynxbdZFxvwsG0DjbDf5ueF7QQWWl%2FTkgctpbbbJ4fX0MsO2Hon6V%2FFhX3qXlOKyycZnbq9oIZBJeoFoU7HChiU8JbLLqKw1Lj5%2Bt2R3vBlcT8XPNzjQ2ND5xQQS6p6P%2Fi1uVqP4gTUsXJZC%2Bhl%2FXV4fNo6CD11t8ltKiQ6HXBnPb7ZNdQSIiuEptd6jCdSNWsppKjDUbsUd%2FSUd%2FzQ3XhVj8W5ESTn6HDauuJ6xV53fjQc8pePBEDmDwTAt9%2BvWhrwvqCvHvT0ZbBrd1kM2nbOCHpv1enA6BNLJUDJMiKIlyflfhgpKqXl%2BxLgRWZ64G9g3EXKm1ED8AAZNYDB59r%2FkVybObyz92%2Bcmn9o1zTATVoIOE5svVPnMjn4OWR61NGKEPBLVBAd7xYQ%2F%2BwqgN0KgA1Obgh0Jc2HOS5efDnzyep2SrgbrOd9iTBqS0CH%2FK7o%2Fw%2F9hhnzCExnYZDvY1UUelFbM7OEMCSUmYwoQiFl65oGFrVnkjV6xHmq%2Fl3IatoTnMNQz%2FIXQJh1oq7TYBSG98ioynT9gjhMp9scyHfhqpPLxg4OYMz%2B9qrDxuo5h5jCSpPy%2FBjqkAWHMN3lxJxRJ4SJCH7flsAHn8kQ4QX95e24SNakiHQlUsdtuQ%2FrH7ngNyGwSJhDj4DpvE2%2BLSwyBHIFNPDK%2FkMpMfCKjLtcPUj2AMfva4SktNypmUKXrjVCp3GEi4Q1k0kid9AURbXEydJZFrNp1kSgQn3PZqK8TKTWIDDkM6BYaye9OEMe3fw2ceIioBuoj73nQsHfl%2F8XqJJikUM5ttihheB6j&X-Amz-Signature=37796fa0d227739ea7cb83abcee6614cda3453d758a406b294fc37d5a093572d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUFEDHM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZxcCl8QZnJ9pGC%2FNP8X%2BSzitC%2FKEvbG8il%2F0a91ry2gIhAIiu44ak7gRA2YP3QXdwI286wdJr4RQZTDKK0TTNovGAKv8DCDsQABoMNjM3NDIzMTgzODA1IgzAbQopEirB9UidcAoq3ANwXEx%2BqAeN4ZBuyAswKghMWeXd26ZjzFjAuO9sxcxXVH5vredpy16T14kQAynxbdZFxvwsG0DjbDf5ueF7QQWWl%2FTkgctpbbbJ4fX0MsO2Hon6V%2FFhX3qXlOKyycZnbq9oIZBJeoFoU7HChiU8JbLLqKw1Lj5%2Bt2R3vBlcT8XPNzjQ2ND5xQQS6p6P%2Fi1uVqP4gTUsXJZC%2Bhl%2FXV4fNo6CD11t8ltKiQ6HXBnPb7ZNdQSIiuEptd6jCdSNWsppKjDUbsUd%2FSUd%2FzQ3XhVj8W5ESTn6HDauuJ6xV53fjQc8pePBEDmDwTAt9%2BvWhrwvqCvHvT0ZbBrd1kM2nbOCHpv1enA6BNLJUDJMiKIlyflfhgpKqXl%2BxLgRWZ64G9g3EXKm1ED8AAZNYDB59r%2FkVybObyz92%2Bcmn9o1zTATVoIOE5svVPnMjn4OWR61NGKEPBLVBAd7xYQ%2F%2BwqgN0KgA1Obgh0Jc2HOS5efDnzyep2SrgbrOd9iTBqS0CH%2FK7o%2Fw%2F9hhnzCExnYZDvY1UUelFbM7OEMCSUmYwoQiFl65oGFrVnkjV6xHmq%2Fl3IatoTnMNQz%2FIXQJh1oq7TYBSG98ioynT9gjhMp9scyHfhqpPLxg4OYMz%2B9qrDxuo5h5jCSpPy%2FBjqkAWHMN3lxJxRJ4SJCH7flsAHn8kQ4QX95e24SNakiHQlUsdtuQ%2FrH7ngNyGwSJhDj4DpvE2%2BLSwyBHIFNPDK%2FkMpMfCKjLtcPUj2AMfva4SktNypmUKXrjVCp3GEi4Q1k0kid9AURbXEydJZFrNp1kSgQn3PZqK8TKTWIDDkM6BYaye9OEMe3fw2ceIioBuoj73nQsHfl%2F8XqJJikUM5ttihheB6j&X-Amz-Signature=d6fba3dfb8cd577fc078e3786574b0d311b34eb5774588143fa3263c030e83a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUFEDHM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZxcCl8QZnJ9pGC%2FNP8X%2BSzitC%2FKEvbG8il%2F0a91ry2gIhAIiu44ak7gRA2YP3QXdwI286wdJr4RQZTDKK0TTNovGAKv8DCDsQABoMNjM3NDIzMTgzODA1IgzAbQopEirB9UidcAoq3ANwXEx%2BqAeN4ZBuyAswKghMWeXd26ZjzFjAuO9sxcxXVH5vredpy16T14kQAynxbdZFxvwsG0DjbDf5ueF7QQWWl%2FTkgctpbbbJ4fX0MsO2Hon6V%2FFhX3qXlOKyycZnbq9oIZBJeoFoU7HChiU8JbLLqKw1Lj5%2Bt2R3vBlcT8XPNzjQ2ND5xQQS6p6P%2Fi1uVqP4gTUsXJZC%2Bhl%2FXV4fNo6CD11t8ltKiQ6HXBnPb7ZNdQSIiuEptd6jCdSNWsppKjDUbsUd%2FSUd%2FzQ3XhVj8W5ESTn6HDauuJ6xV53fjQc8pePBEDmDwTAt9%2BvWhrwvqCvHvT0ZbBrd1kM2nbOCHpv1enA6BNLJUDJMiKIlyflfhgpKqXl%2BxLgRWZ64G9g3EXKm1ED8AAZNYDB59r%2FkVybObyz92%2Bcmn9o1zTATVoIOE5svVPnMjn4OWR61NGKEPBLVBAd7xYQ%2F%2BwqgN0KgA1Obgh0Jc2HOS5efDnzyep2SrgbrOd9iTBqS0CH%2FK7o%2Fw%2F9hhnzCExnYZDvY1UUelFbM7OEMCSUmYwoQiFl65oGFrVnkjV6xHmq%2Fl3IatoTnMNQz%2FIXQJh1oq7TYBSG98ioynT9gjhMp9scyHfhqpPLxg4OYMz%2B9qrDxuo5h5jCSpPy%2FBjqkAWHMN3lxJxRJ4SJCH7flsAHn8kQ4QX95e24SNakiHQlUsdtuQ%2FrH7ngNyGwSJhDj4DpvE2%2BLSwyBHIFNPDK%2FkMpMfCKjLtcPUj2AMfva4SktNypmUKXrjVCp3GEi4Q1k0kid9AURbXEydJZFrNp1kSgQn3PZqK8TKTWIDDkM6BYaye9OEMe3fw2ceIioBuoj73nQsHfl%2F8XqJJikUM5ttihheB6j&X-Amz-Signature=9b2cd4c35608fdc838b20ffe31a16d7e23436887f631e2fa8b7625e1489a4244&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
