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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQPJFXX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClINqFzazINUxGY8AsG0j%2FHbZq2RGBPQw7GEM2tOvfGAIgM25NeBD2xwvO%2F5nGNE4TOdlvJWeZRQ6IKGrccGDo5uQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJs8VU6kzBke3h7eSrcA%2B1bZyMkio2XdVGTprCtr8yDWamq%2FO2ls5LKbg40w30iLKlruL0%2B1kOlN6qyo7xvenynZEZaTLsDFD1qmRvKiWWXg467vpYAVDM4K1MT6TS159Zj2h0IxzscvuN%2BJ9tE0B3ObaY9Xf%2BtubJrqF50Vl9naANCx3F23i1BgB1u3Zaq8bun9pAE1obon%2BJi0Ic6hnEHl%2B4n%2FxtX7DH6ZSvZPl1zCLloBQLxoMLM8YpaRAcfuDSlh2yIYzI62xCPowZQN%2B40zct0S39E3kvQQjW%2FnMAxTRZgYWjZPWK8oaKDQYEdaIeGyDtftqfJTS0SrsPqgJBRSH6nIZEszQNz1jNUxtMJLNIOhjiPLj5rxszCEOdC5lYMw6Aqnd7m4PYQECDap1yX98IHV6obk9jdPThAH90ai9vpH3fFKgAnZYnPQbPV2NZaJjM%2F7jDcOgFkGWHPnGQ2vUcpRLmcFNkb%2FpI652kJNE2FPHf9c%2F%2BONZKtjqr%2F0CDF8mNmpyoZLD5irHILGMtZfX79bR1AoBI9MTcZn9TUtHpHwVC84GYAcugACPLrU4%2BUFjK63g9Ek%2BiYztj0FybvQ2icWnb%2B0i5wQmKCz%2FatMmhMogIKIsq01jLSnlFKNJ9tXOj3wmnvyeNNMN%2F5mL4GOqUBKOMxyRSFiICFd7d7wsIPigus4Sjp5p3%2BCx60Bdg%2BCbI0zO2Ii4RyToo5SeFLpXFOYbFcVcvki5zKqPkJLTgJIvQLMUXVIrnFOw0nJ2jH7oq%2ByOxQEFwSVVBB032M5%2Fqcdz5l1dhApwj1cSkICoDPAiEXU9dvceTwVTMdHPOlzDJkKooGGHfrSCGdeVNrXEIgvlTJCWfRaWJWypqSnLwUxKo97Fwh&X-Amz-Signature=8fd3e79175f5bb76fa0619b888b4028234bd7203ce9db704584f9e10f798fb74&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQPJFXX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClINqFzazINUxGY8AsG0j%2FHbZq2RGBPQw7GEM2tOvfGAIgM25NeBD2xwvO%2F5nGNE4TOdlvJWeZRQ6IKGrccGDo5uQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJs8VU6kzBke3h7eSrcA%2B1bZyMkio2XdVGTprCtr8yDWamq%2FO2ls5LKbg40w30iLKlruL0%2B1kOlN6qyo7xvenynZEZaTLsDFD1qmRvKiWWXg467vpYAVDM4K1MT6TS159Zj2h0IxzscvuN%2BJ9tE0B3ObaY9Xf%2BtubJrqF50Vl9naANCx3F23i1BgB1u3Zaq8bun9pAE1obon%2BJi0Ic6hnEHl%2B4n%2FxtX7DH6ZSvZPl1zCLloBQLxoMLM8YpaRAcfuDSlh2yIYzI62xCPowZQN%2B40zct0S39E3kvQQjW%2FnMAxTRZgYWjZPWK8oaKDQYEdaIeGyDtftqfJTS0SrsPqgJBRSH6nIZEszQNz1jNUxtMJLNIOhjiPLj5rxszCEOdC5lYMw6Aqnd7m4PYQECDap1yX98IHV6obk9jdPThAH90ai9vpH3fFKgAnZYnPQbPV2NZaJjM%2F7jDcOgFkGWHPnGQ2vUcpRLmcFNkb%2FpI652kJNE2FPHf9c%2F%2BONZKtjqr%2F0CDF8mNmpyoZLD5irHILGMtZfX79bR1AoBI9MTcZn9TUtHpHwVC84GYAcugACPLrU4%2BUFjK63g9Ek%2BiYztj0FybvQ2icWnb%2B0i5wQmKCz%2FatMmhMogIKIsq01jLSnlFKNJ9tXOj3wmnvyeNNMN%2F5mL4GOqUBKOMxyRSFiICFd7d7wsIPigus4Sjp5p3%2BCx60Bdg%2BCbI0zO2Ii4RyToo5SeFLpXFOYbFcVcvki5zKqPkJLTgJIvQLMUXVIrnFOw0nJ2jH7oq%2ByOxQEFwSVVBB032M5%2Fqcdz5l1dhApwj1cSkICoDPAiEXU9dvceTwVTMdHPOlzDJkKooGGHfrSCGdeVNrXEIgvlTJCWfRaWJWypqSnLwUxKo97Fwh&X-Amz-Signature=69a5cccb1b899552a33f3a3fc8041236c3ab29a43f071a554a34b0aee8ab1658&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQPJFXX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClINqFzazINUxGY8AsG0j%2FHbZq2RGBPQw7GEM2tOvfGAIgM25NeBD2xwvO%2F5nGNE4TOdlvJWeZRQ6IKGrccGDo5uQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJs8VU6kzBke3h7eSrcA%2B1bZyMkio2XdVGTprCtr8yDWamq%2FO2ls5LKbg40w30iLKlruL0%2B1kOlN6qyo7xvenynZEZaTLsDFD1qmRvKiWWXg467vpYAVDM4K1MT6TS159Zj2h0IxzscvuN%2BJ9tE0B3ObaY9Xf%2BtubJrqF50Vl9naANCx3F23i1BgB1u3Zaq8bun9pAE1obon%2BJi0Ic6hnEHl%2B4n%2FxtX7DH6ZSvZPl1zCLloBQLxoMLM8YpaRAcfuDSlh2yIYzI62xCPowZQN%2B40zct0S39E3kvQQjW%2FnMAxTRZgYWjZPWK8oaKDQYEdaIeGyDtftqfJTS0SrsPqgJBRSH6nIZEszQNz1jNUxtMJLNIOhjiPLj5rxszCEOdC5lYMw6Aqnd7m4PYQECDap1yX98IHV6obk9jdPThAH90ai9vpH3fFKgAnZYnPQbPV2NZaJjM%2F7jDcOgFkGWHPnGQ2vUcpRLmcFNkb%2FpI652kJNE2FPHf9c%2F%2BONZKtjqr%2F0CDF8mNmpyoZLD5irHILGMtZfX79bR1AoBI9MTcZn9TUtHpHwVC84GYAcugACPLrU4%2BUFjK63g9Ek%2BiYztj0FybvQ2icWnb%2B0i5wQmKCz%2FatMmhMogIKIsq01jLSnlFKNJ9tXOj3wmnvyeNNMN%2F5mL4GOqUBKOMxyRSFiICFd7d7wsIPigus4Sjp5p3%2BCx60Bdg%2BCbI0zO2Ii4RyToo5SeFLpXFOYbFcVcvki5zKqPkJLTgJIvQLMUXVIrnFOw0nJ2jH7oq%2ByOxQEFwSVVBB032M5%2Fqcdz5l1dhApwj1cSkICoDPAiEXU9dvceTwVTMdHPOlzDJkKooGGHfrSCGdeVNrXEIgvlTJCWfRaWJWypqSnLwUxKo97Fwh&X-Amz-Signature=a664c6d14dcb899818b371979c9c63f4d252030701227803e7c852f26de66f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
