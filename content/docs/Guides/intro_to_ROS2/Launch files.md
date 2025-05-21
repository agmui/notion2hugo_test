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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG67XNH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDc0mgJU9OC6TbxpPs0ZY7%2BOEU2p01ubP4FJzGCvzGMCAiBwB0vplio4CXs9jIMvFqzmOhsk87%2B47AwLx%2FmDduN2HyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS6w7OjsU7qf7ysWKtwD6qYxM6KA4mkhylJBxfbTYk3uZBEMJ2rOnrcuTbGwcrDrir%2FUjfUxS7KgXBD8XgTe%2Fc%2Bl1knQUPfV9Dvloxi%2FpfxLHVgdzuZHDH3cIk8T8sHY8enoNBVrquezUdPi6fseVP7fl3w6GjtAfrOrRSCcmid4oF6F6xZGWTzOqz9iaBQuKRZC2TTEmfIwgK6AQzIgOVj8yUelN6COv6UUhr1Bhuqsy7eZQrsHL9NJrEZe39ZRJsCFpnEGwuEePU509hAZrwJivrIo%2FXkIFDwgaMmmlKDZNUcdCjE4yJelqWNvJSRgW%2Bn6mdYdN4gKdLES58%2F4vd3gf65ymxYqrjxjENyKlW27jrkKS%2B6ZJ4cHwL8oz4kTOHd2cLtszEGAZAIpNLx7nmyJ5rRorihyJN74wJRR04Ne9oxOJeYh43w7QoI29PdoJKxEAYfQx%2FYIkzUDC9rGht9r9wYTmBq2HmYilrMonYQ2FRYw68HI0mBHvkh2GJT60NuI2PpK%2Fuej8RTNl2R4caTVMe%2F58WI8%2Bn0G1rVJmKLnkx6qIvwvNOBs6rkAy6rD6ntIG4aJ3DglIVIB8dqzK6uymgvevO%2F%2BjWnjrZKa26B9xnjGsNQTXe52aGkueKHilokL%2By77OChl8HEw8cO3wQY6pgEVOP4WU7XVQW9Xej5xSyY2PaMie87igNarFAp4Gn15MIUrM8Z9qIA6t1i8DSFgijjdqOaoL7uikdC4PP32vWiT4Tw8H4IqoZnO4krBrho2Sf3FqnEAOxe5rjKFOXHJ93P2cREwsWNbJtO2PFhyHKnHYnuz%2F7iYLvHK20cLqR6mVRo0KWklDSePIAJdN9GqUfBstY4Pj%2BLs0m9fmz6AwjkNZZG8eGG1&X-Amz-Signature=8591241e3a70c115c6042278a83ae3d032cff97ab66144457e832973c47aafa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG67XNH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDc0mgJU9OC6TbxpPs0ZY7%2BOEU2p01ubP4FJzGCvzGMCAiBwB0vplio4CXs9jIMvFqzmOhsk87%2B47AwLx%2FmDduN2HyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS6w7OjsU7qf7ysWKtwD6qYxM6KA4mkhylJBxfbTYk3uZBEMJ2rOnrcuTbGwcrDrir%2FUjfUxS7KgXBD8XgTe%2Fc%2Bl1knQUPfV9Dvloxi%2FpfxLHVgdzuZHDH3cIk8T8sHY8enoNBVrquezUdPi6fseVP7fl3w6GjtAfrOrRSCcmid4oF6F6xZGWTzOqz9iaBQuKRZC2TTEmfIwgK6AQzIgOVj8yUelN6COv6UUhr1Bhuqsy7eZQrsHL9NJrEZe39ZRJsCFpnEGwuEePU509hAZrwJivrIo%2FXkIFDwgaMmmlKDZNUcdCjE4yJelqWNvJSRgW%2Bn6mdYdN4gKdLES58%2F4vd3gf65ymxYqrjxjENyKlW27jrkKS%2B6ZJ4cHwL8oz4kTOHd2cLtszEGAZAIpNLx7nmyJ5rRorihyJN74wJRR04Ne9oxOJeYh43w7QoI29PdoJKxEAYfQx%2FYIkzUDC9rGht9r9wYTmBq2HmYilrMonYQ2FRYw68HI0mBHvkh2GJT60NuI2PpK%2Fuej8RTNl2R4caTVMe%2F58WI8%2Bn0G1rVJmKLnkx6qIvwvNOBs6rkAy6rD6ntIG4aJ3DglIVIB8dqzK6uymgvevO%2F%2BjWnjrZKa26B9xnjGsNQTXe52aGkueKHilokL%2By77OChl8HEw8cO3wQY6pgEVOP4WU7XVQW9Xej5xSyY2PaMie87igNarFAp4Gn15MIUrM8Z9qIA6t1i8DSFgijjdqOaoL7uikdC4PP32vWiT4Tw8H4IqoZnO4krBrho2Sf3FqnEAOxe5rjKFOXHJ93P2cREwsWNbJtO2PFhyHKnHYnuz%2F7iYLvHK20cLqR6mVRo0KWklDSePIAJdN9GqUfBstY4Pj%2BLs0m9fmz6AwjkNZZG8eGG1&X-Amz-Signature=53227294ab123c16e3379ffa7ef6480ae10b734a2c73bfd2a8caadafa22aa651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG67XNH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDc0mgJU9OC6TbxpPs0ZY7%2BOEU2p01ubP4FJzGCvzGMCAiBwB0vplio4CXs9jIMvFqzmOhsk87%2B47AwLx%2FmDduN2HyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS6w7OjsU7qf7ysWKtwD6qYxM6KA4mkhylJBxfbTYk3uZBEMJ2rOnrcuTbGwcrDrir%2FUjfUxS7KgXBD8XgTe%2Fc%2Bl1knQUPfV9Dvloxi%2FpfxLHVgdzuZHDH3cIk8T8sHY8enoNBVrquezUdPi6fseVP7fl3w6GjtAfrOrRSCcmid4oF6F6xZGWTzOqz9iaBQuKRZC2TTEmfIwgK6AQzIgOVj8yUelN6COv6UUhr1Bhuqsy7eZQrsHL9NJrEZe39ZRJsCFpnEGwuEePU509hAZrwJivrIo%2FXkIFDwgaMmmlKDZNUcdCjE4yJelqWNvJSRgW%2Bn6mdYdN4gKdLES58%2F4vd3gf65ymxYqrjxjENyKlW27jrkKS%2B6ZJ4cHwL8oz4kTOHd2cLtszEGAZAIpNLx7nmyJ5rRorihyJN74wJRR04Ne9oxOJeYh43w7QoI29PdoJKxEAYfQx%2FYIkzUDC9rGht9r9wYTmBq2HmYilrMonYQ2FRYw68HI0mBHvkh2GJT60NuI2PpK%2Fuej8RTNl2R4caTVMe%2F58WI8%2Bn0G1rVJmKLnkx6qIvwvNOBs6rkAy6rD6ntIG4aJ3DglIVIB8dqzK6uymgvevO%2F%2BjWnjrZKa26B9xnjGsNQTXe52aGkueKHilokL%2By77OChl8HEw8cO3wQY6pgEVOP4WU7XVQW9Xej5xSyY2PaMie87igNarFAp4Gn15MIUrM8Z9qIA6t1i8DSFgijjdqOaoL7uikdC4PP32vWiT4Tw8H4IqoZnO4krBrho2Sf3FqnEAOxe5rjKFOXHJ93P2cREwsWNbJtO2PFhyHKnHYnuz%2F7iYLvHK20cLqR6mVRo0KWklDSePIAJdN9GqUfBstY4Pj%2BLs0m9fmz6AwjkNZZG8eGG1&X-Amz-Signature=0a02ccb96df6ae5f1d07e432f7271f7fd1125fb4f7aaad665acda209a1db7c52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
