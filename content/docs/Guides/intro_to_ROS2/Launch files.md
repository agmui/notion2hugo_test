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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILJB5PI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCJ0u4U3zb%2BUWBg4o%2BRCRD%2BgXGFiuHwv23cjl5sHp1tjgIhAK8HTn5HjPKhrkwVzfkHh7CCONZ%2BTV9ThEUJim%2F8Pgy6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1LElQN95eob1CG0Iq3ANuQ%2FxqghKBjEp3pnFmLihPYltVN6X9%2FOM3DR0Cxb0ROhPe8IcmuB%2FPfhbChIJm5vKP01aTpaCjewNM1XbJR1cUkboLPxPIQpy3A4Sz8AQy4rvFcqJ%2FRBk2b2cbyME5BkJWsUNbNlLNEYkP9E4T4c5LnzGZLYnhOc%2FNjA043Wug1nIBIK7lT8sCb8dN97SOedvTVBQqJUMFoVrUAc9Sxrt8rcOg7BSw7IXjInYSrwQcLuk03hpqFjwO66I5iSiGUGI8gXEnE3cc6PdttECG%2FFD3fO3EEdecDbm04%2FDOm%2BDh%2BrtiBEA1c5m8KoR3RbKqTorxRRkjRs0%2FJjhlgC7hiJp86xUTh9rb74FL78WbCPi7ojv1KILjFd91POJMxFBVqjk1p2FUfV7mtkDnVVBu7YJfquah%2FFrTGWh0ynwpmuXU0W8bZ9h6T6emg%2Bd1LucYKfjMX2QN3GNmUXCLHRnLIL8Mp2d12IeueK1XM1ybXiMrS2CYSHjdhR5UFzqwtvgwx7m%2B1HwBQHNUrUe5CrvOmJXGL%2FNUkvWX9DNmDwuLCSolAzuMNWcTwJze1iFXmjOkrecMyeaif6xJvounTNfN0CSSTGBVPITN1jT41dflP3dFkXI8wWtLB4S3giFiizCkoeC%2FBjqkAUp85qJEpSMq5bke5bbrumLQTJqhuzLiaCo8jn5P8wH%2F5wF5x8fIfPgulwQO0QDj8UgGf6nazqSH%2BOh1WsY29NSlAmau0RJafXh%2B0VsM4uNbrAedSfPUt0EGF1lSteJSDvpjitBokSnLSZSR6OU3th2WhAx%2B2ptwPZ%2BoQEF2ajxgmuEjUwU8KR1XXySfYOvzBogJyTG0sJJTN7pYcpZ4oKHd9Ycd&X-Amz-Signature=641db510e546b91eb9e7c56a0da6a344b0c81b1a42dfd94b61debe71fd5ca797&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILJB5PI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCJ0u4U3zb%2BUWBg4o%2BRCRD%2BgXGFiuHwv23cjl5sHp1tjgIhAK8HTn5HjPKhrkwVzfkHh7CCONZ%2BTV9ThEUJim%2F8Pgy6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1LElQN95eob1CG0Iq3ANuQ%2FxqghKBjEp3pnFmLihPYltVN6X9%2FOM3DR0Cxb0ROhPe8IcmuB%2FPfhbChIJm5vKP01aTpaCjewNM1XbJR1cUkboLPxPIQpy3A4Sz8AQy4rvFcqJ%2FRBk2b2cbyME5BkJWsUNbNlLNEYkP9E4T4c5LnzGZLYnhOc%2FNjA043Wug1nIBIK7lT8sCb8dN97SOedvTVBQqJUMFoVrUAc9Sxrt8rcOg7BSw7IXjInYSrwQcLuk03hpqFjwO66I5iSiGUGI8gXEnE3cc6PdttECG%2FFD3fO3EEdecDbm04%2FDOm%2BDh%2BrtiBEA1c5m8KoR3RbKqTorxRRkjRs0%2FJjhlgC7hiJp86xUTh9rb74FL78WbCPi7ojv1KILjFd91POJMxFBVqjk1p2FUfV7mtkDnVVBu7YJfquah%2FFrTGWh0ynwpmuXU0W8bZ9h6T6emg%2Bd1LucYKfjMX2QN3GNmUXCLHRnLIL8Mp2d12IeueK1XM1ybXiMrS2CYSHjdhR5UFzqwtvgwx7m%2B1HwBQHNUrUe5CrvOmJXGL%2FNUkvWX9DNmDwuLCSolAzuMNWcTwJze1iFXmjOkrecMyeaif6xJvounTNfN0CSSTGBVPITN1jT41dflP3dFkXI8wWtLB4S3giFiizCkoeC%2FBjqkAUp85qJEpSMq5bke5bbrumLQTJqhuzLiaCo8jn5P8wH%2F5wF5x8fIfPgulwQO0QDj8UgGf6nazqSH%2BOh1WsY29NSlAmau0RJafXh%2B0VsM4uNbrAedSfPUt0EGF1lSteJSDvpjitBokSnLSZSR6OU3th2WhAx%2B2ptwPZ%2BoQEF2ajxgmuEjUwU8KR1XXySfYOvzBogJyTG0sJJTN7pYcpZ4oKHd9Ycd&X-Amz-Signature=9d71e653f27d831eb6d011b9087accb44639cf8a0ebc80618389ae672aba6bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILJB5PI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCJ0u4U3zb%2BUWBg4o%2BRCRD%2BgXGFiuHwv23cjl5sHp1tjgIhAK8HTn5HjPKhrkwVzfkHh7CCONZ%2BTV9ThEUJim%2F8Pgy6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1LElQN95eob1CG0Iq3ANuQ%2FxqghKBjEp3pnFmLihPYltVN6X9%2FOM3DR0Cxb0ROhPe8IcmuB%2FPfhbChIJm5vKP01aTpaCjewNM1XbJR1cUkboLPxPIQpy3A4Sz8AQy4rvFcqJ%2FRBk2b2cbyME5BkJWsUNbNlLNEYkP9E4T4c5LnzGZLYnhOc%2FNjA043Wug1nIBIK7lT8sCb8dN97SOedvTVBQqJUMFoVrUAc9Sxrt8rcOg7BSw7IXjInYSrwQcLuk03hpqFjwO66I5iSiGUGI8gXEnE3cc6PdttECG%2FFD3fO3EEdecDbm04%2FDOm%2BDh%2BrtiBEA1c5m8KoR3RbKqTorxRRkjRs0%2FJjhlgC7hiJp86xUTh9rb74FL78WbCPi7ojv1KILjFd91POJMxFBVqjk1p2FUfV7mtkDnVVBu7YJfquah%2FFrTGWh0ynwpmuXU0W8bZ9h6T6emg%2Bd1LucYKfjMX2QN3GNmUXCLHRnLIL8Mp2d12IeueK1XM1ybXiMrS2CYSHjdhR5UFzqwtvgwx7m%2B1HwBQHNUrUe5CrvOmJXGL%2FNUkvWX9DNmDwuLCSolAzuMNWcTwJze1iFXmjOkrecMyeaif6xJvounTNfN0CSSTGBVPITN1jT41dflP3dFkXI8wWtLB4S3giFiizCkoeC%2FBjqkAUp85qJEpSMq5bke5bbrumLQTJqhuzLiaCo8jn5P8wH%2F5wF5x8fIfPgulwQO0QDj8UgGf6nazqSH%2BOh1WsY29NSlAmau0RJafXh%2B0VsM4uNbrAedSfPUt0EGF1lSteJSDvpjitBokSnLSZSR6OU3th2WhAx%2B2ptwPZ%2BoQEF2ajxgmuEjUwU8KR1XXySfYOvzBogJyTG0sJJTN7pYcpZ4oKHd9Ycd&X-Amz-Signature=97dc585b140419ce7cce2baaaea3bef12d31741fa59f3603e43aa7cefc4f2fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
