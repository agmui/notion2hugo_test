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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLUNOJJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAGJXBl71B1ZORS76UGAj9uNIUuX0zDzkuumbSHQa3ZtAiEA%2FKy9yVK1KYK1gJD8IJG8avzaFX8QcXiQjYqh6c1W1AMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLCvbVefAcG0%2BJVQyrcA0Pa3G08Ox2GwElkma3zyCnxB0kGP4%2FFYLrQV%2Bptth9ShSZb%2FkX%2BIITZ5gqXU7rgdMQM8ZK7%2F0pB9LDoIlzx4DJba3ZKnJU7OsRfS%2FkRpRloBIcSUNvF28zHwzuSolqrAm%2BRd3TgmOoxAf7IviJlNtAOQgUwVfLGtCssbv%2BIR1wveKFbeZWvwIro3%2BPYheqdiGU9O%2BgVkiHWJbaHKJEcDP4PaiP2dOws%2Bc2zyDri4q%2FfQwCEbxa32H5beKUNbfUhrPQsJfzGaivtDcdP%2B6ohh6vNkJd%2Bb7H2LvyHvs12tBt7HhgHfuqA%2BoB%2BwCXmz3qO7elVGlirkTfd%2BWBWEAYmRfgvKpUO3CJzPFf7Y2%2Fxo75cdqP5I00rlBDGZCrMl9WDdMJ4nY%2FI2ZTnR14ddFNtOYYdTsoAuRGg2ii1xQWelKfY%2Bm9oRbYAjVI7bZEIN6dapArFZSXIrchUJVCWmtgPVgP%2BM3Vcifry1mMUoM3L7ETsxpbWJy22%2FBPlNJjIS9HAnShnevH9baXM8szBEdj1L61D2n2TiOXAsZfwANe48F78eVDCN8In6yql0BLTL%2FLRO%2FUgPfO%2Bx7J5n8z8o%2BEOj2D9EZiU%2Bmkk234LlcOqTyi8Khu6q4cc4JShwoiGMMO09sEGOqUB1%2BOedQp2dzNIXCFFM3gEuGmRiN%2Fz61UPsJySteb0y3LAiFKDoEa8vp8IYfm366U3pymjXzfB89hVYACZPMati0OANtcOZri6pIW0QG8o2lyk%2FbQ4OMS9hz%2FXIUybz2wiYA9X7Fuy7PcMjVPQCjjABXNNxpDTuryEBOGHZI6tQrz4EGekuWUuUhzsNll5iAMn86nQKkmph52YeWN3HcPdP9vprW5l&X-Amz-Signature=bbad706237101bbd98bc731f4f298b189369ca2443176212c2b0b05b56ea4418&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLUNOJJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAGJXBl71B1ZORS76UGAj9uNIUuX0zDzkuumbSHQa3ZtAiEA%2FKy9yVK1KYK1gJD8IJG8avzaFX8QcXiQjYqh6c1W1AMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLCvbVefAcG0%2BJVQyrcA0Pa3G08Ox2GwElkma3zyCnxB0kGP4%2FFYLrQV%2Bptth9ShSZb%2FkX%2BIITZ5gqXU7rgdMQM8ZK7%2F0pB9LDoIlzx4DJba3ZKnJU7OsRfS%2FkRpRloBIcSUNvF28zHwzuSolqrAm%2BRd3TgmOoxAf7IviJlNtAOQgUwVfLGtCssbv%2BIR1wveKFbeZWvwIro3%2BPYheqdiGU9O%2BgVkiHWJbaHKJEcDP4PaiP2dOws%2Bc2zyDri4q%2FfQwCEbxa32H5beKUNbfUhrPQsJfzGaivtDcdP%2B6ohh6vNkJd%2Bb7H2LvyHvs12tBt7HhgHfuqA%2BoB%2BwCXmz3qO7elVGlirkTfd%2BWBWEAYmRfgvKpUO3CJzPFf7Y2%2Fxo75cdqP5I00rlBDGZCrMl9WDdMJ4nY%2FI2ZTnR14ddFNtOYYdTsoAuRGg2ii1xQWelKfY%2Bm9oRbYAjVI7bZEIN6dapArFZSXIrchUJVCWmtgPVgP%2BM3Vcifry1mMUoM3L7ETsxpbWJy22%2FBPlNJjIS9HAnShnevH9baXM8szBEdj1L61D2n2TiOXAsZfwANe48F78eVDCN8In6yql0BLTL%2FLRO%2FUgPfO%2Bx7J5n8z8o%2BEOj2D9EZiU%2Bmkk234LlcOqTyi8Khu6q4cc4JShwoiGMMO09sEGOqUB1%2BOedQp2dzNIXCFFM3gEuGmRiN%2Fz61UPsJySteb0y3LAiFKDoEa8vp8IYfm366U3pymjXzfB89hVYACZPMati0OANtcOZri6pIW0QG8o2lyk%2FbQ4OMS9hz%2FXIUybz2wiYA9X7Fuy7PcMjVPQCjjABXNNxpDTuryEBOGHZI6tQrz4EGekuWUuUhzsNll5iAMn86nQKkmph52YeWN3HcPdP9vprW5l&X-Amz-Signature=44acb4f43d75ae326fb4e4f55d63613b26c0a46fdc1c78d704c4ab6bcaa5e600&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLUNOJJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAGJXBl71B1ZORS76UGAj9uNIUuX0zDzkuumbSHQa3ZtAiEA%2FKy9yVK1KYK1gJD8IJG8avzaFX8QcXiQjYqh6c1W1AMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLCvbVefAcG0%2BJVQyrcA0Pa3G08Ox2GwElkma3zyCnxB0kGP4%2FFYLrQV%2Bptth9ShSZb%2FkX%2BIITZ5gqXU7rgdMQM8ZK7%2F0pB9LDoIlzx4DJba3ZKnJU7OsRfS%2FkRpRloBIcSUNvF28zHwzuSolqrAm%2BRd3TgmOoxAf7IviJlNtAOQgUwVfLGtCssbv%2BIR1wveKFbeZWvwIro3%2BPYheqdiGU9O%2BgVkiHWJbaHKJEcDP4PaiP2dOws%2Bc2zyDri4q%2FfQwCEbxa32H5beKUNbfUhrPQsJfzGaivtDcdP%2B6ohh6vNkJd%2Bb7H2LvyHvs12tBt7HhgHfuqA%2BoB%2BwCXmz3qO7elVGlirkTfd%2BWBWEAYmRfgvKpUO3CJzPFf7Y2%2Fxo75cdqP5I00rlBDGZCrMl9WDdMJ4nY%2FI2ZTnR14ddFNtOYYdTsoAuRGg2ii1xQWelKfY%2Bm9oRbYAjVI7bZEIN6dapArFZSXIrchUJVCWmtgPVgP%2BM3Vcifry1mMUoM3L7ETsxpbWJy22%2FBPlNJjIS9HAnShnevH9baXM8szBEdj1L61D2n2TiOXAsZfwANe48F78eVDCN8In6yql0BLTL%2FLRO%2FUgPfO%2Bx7J5n8z8o%2BEOj2D9EZiU%2Bmkk234LlcOqTyi8Khu6q4cc4JShwoiGMMO09sEGOqUB1%2BOedQp2dzNIXCFFM3gEuGmRiN%2Fz61UPsJySteb0y3LAiFKDoEa8vp8IYfm366U3pymjXzfB89hVYACZPMati0OANtcOZri6pIW0QG8o2lyk%2FbQ4OMS9hz%2FXIUybz2wiYA9X7Fuy7PcMjVPQCjjABXNNxpDTuryEBOGHZI6tQrz4EGekuWUuUhzsNll5iAMn86nQKkmph52YeWN3HcPdP9vprW5l&X-Amz-Signature=75c7838068aa458bd9808f9145ee7135b24182d18bee273df517b7f44ed840a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
