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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VD63LS2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwi2v0TyOjjjl4UTUZYYz0WPfXmOsC0x3vnM%2FcwNd1wAiBpLouGTEtl6uoP9QF%2BQ9Ff49VrbO%2Bx1xS09oiKK3dEZSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMHgI%2FwIqEPDhJ9vFdKtwDLJjHzQ0e%2BrBOu467rQGsEChkybFovckMlv8hapdFGyAAj%2B4M8zuDoDBJ%2FcSAdRkoGBLKLqvefjvwnDTD%2FPt%2FS2VvWY5LtvcHM%2FCDtGN7pZBmLFrLgWfLi6tNT1Dky5rdkxvJy5D%2FMOa9hYi1QPNaFDRdOI1JfWrx%2FpBwkGpLBBTsuiwow5V8C0smGSMxsULkpQfgI82JF%2ByZ3X1ME13hEkzLPthJnYnuavwohA8h4%2Fgu0ImZ15EAaLHv%2B1njISj%2F7QfIa7KBMoqX3VsrrBnC75X6c%2BLDTrIOFOnYMFzcd7bmUKXkCf0PxpyEc6tHBYkUSlJ8lmfi0QVHyFYu4dZ8Gqqoy7SsJ%2FUUEfCVVZF2S0lBtdAYfnt7EcAVXNwsZ7SyYkUyyo6BGRlWuDF94HbSHC3YSC73Im7lqzoLr0fglq3iSFzi7dQa1Nfe00yvTHX3%2BTC2YUrymR4YBk0ix8KHqw2jdQ%2BLd3Wjw%2BHB7YEt8zmekr1nNwABngflhxJFJUdXajxfQYQ8EiWw%2Ff83Bsn16rA10BibQk4oDa31wGET8cwvMhOVLXMfLQNxnpmcTlVWT0n9LHMXMOh9kK0GOBDOaufhlG0QGk3PKnooe7gRF7ZCHfSK8wMxmqVf764w8YGjvgY6pgF1jWaqfCtiG43wXXQxOxmJViLEA7bpPniQly7H8rrNYqhqrNrx8dL2XC6RX8yWlxMK9AL1xeHtXNto%2FrSfgJ%2BxEP8OJAnsNLuDYfRCW7WDVjXavTbWEO4jiJGWTT7wMZEVykn1CTxyvnm%2F85KjB57gkBRDO88bLWXo2sz69eZg7%2FM8mQ0xYXaFoCoEwES2WNXJh6BiconsVEsL2%2Ffco5Oj04GGuUJc&X-Amz-Signature=59236b18d6c8e567ce1178df2b07e1b3bab973eefec3999c2dadd62fe4e4461f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VD63LS2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwi2v0TyOjjjl4UTUZYYz0WPfXmOsC0x3vnM%2FcwNd1wAiBpLouGTEtl6uoP9QF%2BQ9Ff49VrbO%2Bx1xS09oiKK3dEZSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMHgI%2FwIqEPDhJ9vFdKtwDLJjHzQ0e%2BrBOu467rQGsEChkybFovckMlv8hapdFGyAAj%2B4M8zuDoDBJ%2FcSAdRkoGBLKLqvefjvwnDTD%2FPt%2FS2VvWY5LtvcHM%2FCDtGN7pZBmLFrLgWfLi6tNT1Dky5rdkxvJy5D%2FMOa9hYi1QPNaFDRdOI1JfWrx%2FpBwkGpLBBTsuiwow5V8C0smGSMxsULkpQfgI82JF%2ByZ3X1ME13hEkzLPthJnYnuavwohA8h4%2Fgu0ImZ15EAaLHv%2B1njISj%2F7QfIa7KBMoqX3VsrrBnC75X6c%2BLDTrIOFOnYMFzcd7bmUKXkCf0PxpyEc6tHBYkUSlJ8lmfi0QVHyFYu4dZ8Gqqoy7SsJ%2FUUEfCVVZF2S0lBtdAYfnt7EcAVXNwsZ7SyYkUyyo6BGRlWuDF94HbSHC3YSC73Im7lqzoLr0fglq3iSFzi7dQa1Nfe00yvTHX3%2BTC2YUrymR4YBk0ix8KHqw2jdQ%2BLd3Wjw%2BHB7YEt8zmekr1nNwABngflhxJFJUdXajxfQYQ8EiWw%2Ff83Bsn16rA10BibQk4oDa31wGET8cwvMhOVLXMfLQNxnpmcTlVWT0n9LHMXMOh9kK0GOBDOaufhlG0QGk3PKnooe7gRF7ZCHfSK8wMxmqVf764w8YGjvgY6pgF1jWaqfCtiG43wXXQxOxmJViLEA7bpPniQly7H8rrNYqhqrNrx8dL2XC6RX8yWlxMK9AL1xeHtXNto%2FrSfgJ%2BxEP8OJAnsNLuDYfRCW7WDVjXavTbWEO4jiJGWTT7wMZEVykn1CTxyvnm%2F85KjB57gkBRDO88bLWXo2sz69eZg7%2FM8mQ0xYXaFoCoEwES2WNXJh6BiconsVEsL2%2Ffco5Oj04GGuUJc&X-Amz-Signature=272fb974ad9820de6701086646d120d3dc0487e5fe019a24ba56ebe32053174a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VD63LS2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwi2v0TyOjjjl4UTUZYYz0WPfXmOsC0x3vnM%2FcwNd1wAiBpLouGTEtl6uoP9QF%2BQ9Ff49VrbO%2Bx1xS09oiKK3dEZSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMHgI%2FwIqEPDhJ9vFdKtwDLJjHzQ0e%2BrBOu467rQGsEChkybFovckMlv8hapdFGyAAj%2B4M8zuDoDBJ%2FcSAdRkoGBLKLqvefjvwnDTD%2FPt%2FS2VvWY5LtvcHM%2FCDtGN7pZBmLFrLgWfLi6tNT1Dky5rdkxvJy5D%2FMOa9hYi1QPNaFDRdOI1JfWrx%2FpBwkGpLBBTsuiwow5V8C0smGSMxsULkpQfgI82JF%2ByZ3X1ME13hEkzLPthJnYnuavwohA8h4%2Fgu0ImZ15EAaLHv%2B1njISj%2F7QfIa7KBMoqX3VsrrBnC75X6c%2BLDTrIOFOnYMFzcd7bmUKXkCf0PxpyEc6tHBYkUSlJ8lmfi0QVHyFYu4dZ8Gqqoy7SsJ%2FUUEfCVVZF2S0lBtdAYfnt7EcAVXNwsZ7SyYkUyyo6BGRlWuDF94HbSHC3YSC73Im7lqzoLr0fglq3iSFzi7dQa1Nfe00yvTHX3%2BTC2YUrymR4YBk0ix8KHqw2jdQ%2BLd3Wjw%2BHB7YEt8zmekr1nNwABngflhxJFJUdXajxfQYQ8EiWw%2Ff83Bsn16rA10BibQk4oDa31wGET8cwvMhOVLXMfLQNxnpmcTlVWT0n9LHMXMOh9kK0GOBDOaufhlG0QGk3PKnooe7gRF7ZCHfSK8wMxmqVf764w8YGjvgY6pgF1jWaqfCtiG43wXXQxOxmJViLEA7bpPniQly7H8rrNYqhqrNrx8dL2XC6RX8yWlxMK9AL1xeHtXNto%2FrSfgJ%2BxEP8OJAnsNLuDYfRCW7WDVjXavTbWEO4jiJGWTT7wMZEVykn1CTxyvnm%2F85KjB57gkBRDO88bLWXo2sz69eZg7%2FM8mQ0xYXaFoCoEwES2WNXJh6BiconsVEsL2%2Ffco5Oj04GGuUJc&X-Amz-Signature=b0ca4358b776fc8456eed4956068920c3071f8e560d52f9e7ba579cc6f67e6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
