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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA5JAJN%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWADkpAbpRXwf466sHGQie3aMK%2BBvm%2F%2BFN%2B4SD4e9JBwIgO%2F2dUvImplaD0uAjLiMY8T2LfZAZUUlwfi6hiCffsp8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8z6LU6DhlS6j4tYyrcA9P%2FTaFzDPOEy65Wwi0sfqOHGu%2B5fC6vISAtMAfKGD97nDeRMY8NgjbHlGLIeyEHvpQB96pUW%2BksaLM01q9U2zavGYR7QQBtpFxI3RtOA6J1IZ4IPrmNY8RZHNnfaNlR3s5hOAJNf%2Fi6ngm3RgdbUtj3Wu0Agf542CEXY%2Fyq%2Fja8Z2yhnljeXkHEIkmJmERjfUX0gu0Br%2FBKSfSvH%2FF2m0VqVBjjY4plvQ5FHzSoZUzR9p1bNyx5RzX%2B%2FiCDiyNX5YCsBqfTD%2B4n%2FlprPbtZ5S7JkoN%2B0lCajExxid8T9CDbl%2FEhH4OaBu9kPmszOij0hcJateB3dFcFucWeU33wzoxzFRXZtfD97EZJ3K6BG3djWe0u2Rw%2F5onx9W%2FFFRySbGlwYUrcfQvMOk08qB88Iwcb3a8Jv%2BTRmX1P7aUSCuCBH4qJKFqt3Dgkc81qD1CVJCSrnD01CM%2F3uG1QLoPwcCy0bObg%2FJ%2BFxHXUU7IuGhAw1KVsuIAZ4%2FjF3853d9xl5qmRYL64nD%2FkJKTY%2BvVbWoQCMzfNA6xfBMXRZwhk0V%2BKRnBRpWuA4geqL9q6zJaTpme22q%2Bfj5Xe3ga5NXayNHs1d4L68GUJigeDf%2FUp6%2BXndyWY7ZA6J7Tvhv8pMKPq580GOqUBFDojX51DbIipzwoSU%2BHFKHVfGo3UVsBsKhcPOsr7BOeCxUV%2FjUwwLw92%2B4OPRbhL83kyG7cZWDNXbzYoi48VKgl2hErVn9%2Bmi7DkoNhz8XMXVJx%2Fn%2B4gAXTJUYNCeVON1jOQth0pYLVqrvgg01HsZFb0OMgKlKZoqfBwIzMXloTYbsOTWizjIAdHkVDA2%2FYzIUZcAhuCszZVaVuPKP%2Fg1VEl0%2Bl5&X-Amz-Signature=9b5ba3f9f8bea5971bf353643fe71fb5cf6f48459a7bcca36b3969ca50803085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA5JAJN%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWADkpAbpRXwf466sHGQie3aMK%2BBvm%2F%2BFN%2B4SD4e9JBwIgO%2F2dUvImplaD0uAjLiMY8T2LfZAZUUlwfi6hiCffsp8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8z6LU6DhlS6j4tYyrcA9P%2FTaFzDPOEy65Wwi0sfqOHGu%2B5fC6vISAtMAfKGD97nDeRMY8NgjbHlGLIeyEHvpQB96pUW%2BksaLM01q9U2zavGYR7QQBtpFxI3RtOA6J1IZ4IPrmNY8RZHNnfaNlR3s5hOAJNf%2Fi6ngm3RgdbUtj3Wu0Agf542CEXY%2Fyq%2Fja8Z2yhnljeXkHEIkmJmERjfUX0gu0Br%2FBKSfSvH%2FF2m0VqVBjjY4plvQ5FHzSoZUzR9p1bNyx5RzX%2B%2FiCDiyNX5YCsBqfTD%2B4n%2FlprPbtZ5S7JkoN%2B0lCajExxid8T9CDbl%2FEhH4OaBu9kPmszOij0hcJateB3dFcFucWeU33wzoxzFRXZtfD97EZJ3K6BG3djWe0u2Rw%2F5onx9W%2FFFRySbGlwYUrcfQvMOk08qB88Iwcb3a8Jv%2BTRmX1P7aUSCuCBH4qJKFqt3Dgkc81qD1CVJCSrnD01CM%2F3uG1QLoPwcCy0bObg%2FJ%2BFxHXUU7IuGhAw1KVsuIAZ4%2FjF3853d9xl5qmRYL64nD%2FkJKTY%2BvVbWoQCMzfNA6xfBMXRZwhk0V%2BKRnBRpWuA4geqL9q6zJaTpme22q%2Bfj5Xe3ga5NXayNHs1d4L68GUJigeDf%2FUp6%2BXndyWY7ZA6J7Tvhv8pMKPq580GOqUBFDojX51DbIipzwoSU%2BHFKHVfGo3UVsBsKhcPOsr7BOeCxUV%2FjUwwLw92%2B4OPRbhL83kyG7cZWDNXbzYoi48VKgl2hErVn9%2Bmi7DkoNhz8XMXVJx%2Fn%2B4gAXTJUYNCeVON1jOQth0pYLVqrvgg01HsZFb0OMgKlKZoqfBwIzMXloTYbsOTWizjIAdHkVDA2%2FYzIUZcAhuCszZVaVuPKP%2Fg1VEl0%2Bl5&X-Amz-Signature=38de74e31abaa27341b67bf072874af1d16e0520980af9e59a6f56a4fb52e39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA5JAJN%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWADkpAbpRXwf466sHGQie3aMK%2BBvm%2F%2BFN%2B4SD4e9JBwIgO%2F2dUvImplaD0uAjLiMY8T2LfZAZUUlwfi6hiCffsp8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8z6LU6DhlS6j4tYyrcA9P%2FTaFzDPOEy65Wwi0sfqOHGu%2B5fC6vISAtMAfKGD97nDeRMY8NgjbHlGLIeyEHvpQB96pUW%2BksaLM01q9U2zavGYR7QQBtpFxI3RtOA6J1IZ4IPrmNY8RZHNnfaNlR3s5hOAJNf%2Fi6ngm3RgdbUtj3Wu0Agf542CEXY%2Fyq%2Fja8Z2yhnljeXkHEIkmJmERjfUX0gu0Br%2FBKSfSvH%2FF2m0VqVBjjY4plvQ5FHzSoZUzR9p1bNyx5RzX%2B%2FiCDiyNX5YCsBqfTD%2B4n%2FlprPbtZ5S7JkoN%2B0lCajExxid8T9CDbl%2FEhH4OaBu9kPmszOij0hcJateB3dFcFucWeU33wzoxzFRXZtfD97EZJ3K6BG3djWe0u2Rw%2F5onx9W%2FFFRySbGlwYUrcfQvMOk08qB88Iwcb3a8Jv%2BTRmX1P7aUSCuCBH4qJKFqt3Dgkc81qD1CVJCSrnD01CM%2F3uG1QLoPwcCy0bObg%2FJ%2BFxHXUU7IuGhAw1KVsuIAZ4%2FjF3853d9xl5qmRYL64nD%2FkJKTY%2BvVbWoQCMzfNA6xfBMXRZwhk0V%2BKRnBRpWuA4geqL9q6zJaTpme22q%2Bfj5Xe3ga5NXayNHs1d4L68GUJigeDf%2FUp6%2BXndyWY7ZA6J7Tvhv8pMKPq580GOqUBFDojX51DbIipzwoSU%2BHFKHVfGo3UVsBsKhcPOsr7BOeCxUV%2FjUwwLw92%2B4OPRbhL83kyG7cZWDNXbzYoi48VKgl2hErVn9%2Bmi7DkoNhz8XMXVJx%2Fn%2B4gAXTJUYNCeVON1jOQth0pYLVqrvgg01HsZFb0OMgKlKZoqfBwIzMXloTYbsOTWizjIAdHkVDA2%2FYzIUZcAhuCszZVaVuPKP%2Fg1VEl0%2Bl5&X-Amz-Signature=f88ed4f72cfb737cab9f10c0b73d499fd3a76076505a065e7d09da0e47d9d56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
