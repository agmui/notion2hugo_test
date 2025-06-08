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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YD4QRO4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqxRU51QKoNJZFtSt56ys10JBzeYm9ZRyWCEiH4WsrQIgQewDRAicjD6jOpNpCXKcSoyZW1eJ0200Xo4EhPN3UXgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmpoSoXfgjxvvpe2ircA7Eqstd%2FdIINhiuY6hRLzDGNRcoA8sRI3lFteEEs0UhTe610IC8gDqwENUXoDPvkhv2GzY9zQTwE4OBwP2OZO0vAUVwt5FMDVeNd%2BiTJ39BKUuvwNDB%2BHnt3p6l7gxppmwSLslE2cuZG0OdL2KKmuKqMyOtfb9sbMTHpVo59iK8%2Fwdsa7LJOHjWjWldsdCO8BNzdZfOwmNr3wAJhwwrjz1Ih7np%2BD1A57Cs1yh2TuihztyKLyvBZbt3e2XSviC6gILxTCEcgmVxlJ9JCe39ROi0TgbdH5TrYAWIQDD1L%2FSWf%2FZ8YHxuls%2F%2FCpK7kTVXSmZS%2BVb9OI5x0QUYKpArueDK6l2YBdY0LPw7s8YPrSyCOi6DG%2FfVAD%2BA2TK3LUOpPaIg%2BoeCa4F%2BcniIKiXzUpqsZV1T3kphT1g4NhwhKaOHjBx8tbIrOMuPwA4sxAfuMG8kLTnCPOxfbyRPwUVEJIV3%2F%2FsOyJ7TbLfISBpdaxJHAkwTlzhBCll%2FJVjEHhOZAEB0eenmWrjNgMOZHNkKExR%2BG0XJN%2F%2F1jaFm8UfkB8KLfNFmrrdJ5P3wqLdBdLPsrZ%2BBntesGdyzZsjuTGBzQpp9dxsgwumqMbg24wlA8fuZdAV4DWxnwzBs7KYEMMPuck8IGOqUBPHeQMLO5ZzIsg%2FJ6RXzYFmfINSQ01P6kfMvER%2FNZUC81bAZwqjM2ahxLVJFdNFH1Rn445oyC0WZtUNFE44SHGvV%2BGMEVLwpfea6lQYu1mvBI%2B6xXpSL0TLkOZeIkGgNlVBnS9SK7wTHuEhvbNGq%2BsrOV0VD8Mf6qSrxiNQeHWHKNg5wA2c2Uf%2FH%2FWuKYIloP2rffC0pmJ0tsyZH%2BJAtSrgZbxMxL&X-Amz-Signature=41e0cce13787e509d0762f9a5a51bb5fd4a8bbcd46c12c0071e6e6490edb9e71&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YD4QRO4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqxRU51QKoNJZFtSt56ys10JBzeYm9ZRyWCEiH4WsrQIgQewDRAicjD6jOpNpCXKcSoyZW1eJ0200Xo4EhPN3UXgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmpoSoXfgjxvvpe2ircA7Eqstd%2FdIINhiuY6hRLzDGNRcoA8sRI3lFteEEs0UhTe610IC8gDqwENUXoDPvkhv2GzY9zQTwE4OBwP2OZO0vAUVwt5FMDVeNd%2BiTJ39BKUuvwNDB%2BHnt3p6l7gxppmwSLslE2cuZG0OdL2KKmuKqMyOtfb9sbMTHpVo59iK8%2Fwdsa7LJOHjWjWldsdCO8BNzdZfOwmNr3wAJhwwrjz1Ih7np%2BD1A57Cs1yh2TuihztyKLyvBZbt3e2XSviC6gILxTCEcgmVxlJ9JCe39ROi0TgbdH5TrYAWIQDD1L%2FSWf%2FZ8YHxuls%2F%2FCpK7kTVXSmZS%2BVb9OI5x0QUYKpArueDK6l2YBdY0LPw7s8YPrSyCOi6DG%2FfVAD%2BA2TK3LUOpPaIg%2BoeCa4F%2BcniIKiXzUpqsZV1T3kphT1g4NhwhKaOHjBx8tbIrOMuPwA4sxAfuMG8kLTnCPOxfbyRPwUVEJIV3%2F%2FsOyJ7TbLfISBpdaxJHAkwTlzhBCll%2FJVjEHhOZAEB0eenmWrjNgMOZHNkKExR%2BG0XJN%2F%2F1jaFm8UfkB8KLfNFmrrdJ5P3wqLdBdLPsrZ%2BBntesGdyzZsjuTGBzQpp9dxsgwumqMbg24wlA8fuZdAV4DWxnwzBs7KYEMMPuck8IGOqUBPHeQMLO5ZzIsg%2FJ6RXzYFmfINSQ01P6kfMvER%2FNZUC81bAZwqjM2ahxLVJFdNFH1Rn445oyC0WZtUNFE44SHGvV%2BGMEVLwpfea6lQYu1mvBI%2B6xXpSL0TLkOZeIkGgNlVBnS9SK7wTHuEhvbNGq%2BsrOV0VD8Mf6qSrxiNQeHWHKNg5wA2c2Uf%2FH%2FWuKYIloP2rffC0pmJ0tsyZH%2BJAtSrgZbxMxL&X-Amz-Signature=1ac14b7573a6650e8fe18b77e0f1bd4595b443d5c65503d4fd152a8fce17d58c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YD4QRO4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqxRU51QKoNJZFtSt56ys10JBzeYm9ZRyWCEiH4WsrQIgQewDRAicjD6jOpNpCXKcSoyZW1eJ0200Xo4EhPN3UXgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmpoSoXfgjxvvpe2ircA7Eqstd%2FdIINhiuY6hRLzDGNRcoA8sRI3lFteEEs0UhTe610IC8gDqwENUXoDPvkhv2GzY9zQTwE4OBwP2OZO0vAUVwt5FMDVeNd%2BiTJ39BKUuvwNDB%2BHnt3p6l7gxppmwSLslE2cuZG0OdL2KKmuKqMyOtfb9sbMTHpVo59iK8%2Fwdsa7LJOHjWjWldsdCO8BNzdZfOwmNr3wAJhwwrjz1Ih7np%2BD1A57Cs1yh2TuihztyKLyvBZbt3e2XSviC6gILxTCEcgmVxlJ9JCe39ROi0TgbdH5TrYAWIQDD1L%2FSWf%2FZ8YHxuls%2F%2FCpK7kTVXSmZS%2BVb9OI5x0QUYKpArueDK6l2YBdY0LPw7s8YPrSyCOi6DG%2FfVAD%2BA2TK3LUOpPaIg%2BoeCa4F%2BcniIKiXzUpqsZV1T3kphT1g4NhwhKaOHjBx8tbIrOMuPwA4sxAfuMG8kLTnCPOxfbyRPwUVEJIV3%2F%2FsOyJ7TbLfISBpdaxJHAkwTlzhBCll%2FJVjEHhOZAEB0eenmWrjNgMOZHNkKExR%2BG0XJN%2F%2F1jaFm8UfkB8KLfNFmrrdJ5P3wqLdBdLPsrZ%2BBntesGdyzZsjuTGBzQpp9dxsgwumqMbg24wlA8fuZdAV4DWxnwzBs7KYEMMPuck8IGOqUBPHeQMLO5ZzIsg%2FJ6RXzYFmfINSQ01P6kfMvER%2FNZUC81bAZwqjM2ahxLVJFdNFH1Rn445oyC0WZtUNFE44SHGvV%2BGMEVLwpfea6lQYu1mvBI%2B6xXpSL0TLkOZeIkGgNlVBnS9SK7wTHuEhvbNGq%2BsrOV0VD8Mf6qSrxiNQeHWHKNg5wA2c2Uf%2FH%2FWuKYIloP2rffC0pmJ0tsyZH%2BJAtSrgZbxMxL&X-Amz-Signature=3a322ae52d04a099ba96dcada04344e9d9b14c284a6f4a8303c1cc0403841df5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
