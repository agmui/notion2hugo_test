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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLDC7AB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZUGweb%2BJ52Ev9GMLrtfJ4L%2FCVGqyNf0usLfy4k2G8swIhAIt9U2SREL7kbr%2BQsOCkpT58gGcWGwJxG1dB5EtvyMAoKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlykFk6aWExs7ohnoq3AO%2BFkj2275YYoc8vvaaOSd2r88kIYHIUfHcHq9md%2BfWmPyaQ1AMGpomVcATiUygwUtSsdwZGuedJfSfPWIE6%2BRLrceOyM1IrfsaMw0cpcCNOC6x8VMi8kJ1uoYREGfWDcILuyZG5uPx%2BfWl36HlkmQ8zvx%2Fua%2BlCssIVrV7mAdAjElwxMCpBiMCYeadD2ZPNmJRELoJI06gXDrpafAlFY3mov6dpOT%2FfCrIKeISgApRJuuWCd%2B3JRZJ%2FFvK4%2F0SLS3IAa9sjYGcZhfF6EQkpdo6M9MLXQzQMwRc3sGY3oXvGoN6H559fO0lMUWS8Smkl4ZrmqVCLgxYya45Y7pIW8gv3lyxVxJ2X1oSd3vU4NYNdUUrl8hhs0yaYwhw%2Buxpdm%2FWuyZE2Ld1oF1od3rNwOzaJD0enFJqvcgFEHSIIg8h5ELj%2BjLkx2UtEUgLdAT%2BrH8UqF8bQAObWVH%2Ffpt9Go9OlKF86FGKPt6xvyT%2F%2FmFhDZUm1bwVHS4qUgtB6Gwc63T4o8AVMug%2BWes6uHlCMjL1JOU%2BcWbd3G1piCf5iBYaR03IOPV3uxQcslvR7%2BXiVtEMQNbcvBoSgxfYohl6R9mBE9Ooy5QwWMvydRwdsa9ujWoN%2BKMsiDPwbfk%2BYjD02sPABjqkAXfUwOcT2tkGghkJez%2BTZW5d4PqOIOhsrEycebaxTkU8NCFA70RiWAh7sQutef1g%2BkwlqqdLz5dCWnkouf8X0maHGt%2BZBJIiKMjOxj%2FKflvXTxKHt2%2FhEgNjNIdiYe%2FUi3h763wMgtlWWmbtQPlH0Z0%2F2q5X%2FCorjcjmUwY3WYqwuHdcDC%2BjjDzqJmbDf3N2VnzR9GMhnROvPFEqnsm8J35gWUOM&X-Amz-Signature=137801b0e4ad6d8a5fbef6f18d997e343d7c1d76d3bbc51ac4020e18a3852aca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLDC7AB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZUGweb%2BJ52Ev9GMLrtfJ4L%2FCVGqyNf0usLfy4k2G8swIhAIt9U2SREL7kbr%2BQsOCkpT58gGcWGwJxG1dB5EtvyMAoKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlykFk6aWExs7ohnoq3AO%2BFkj2275YYoc8vvaaOSd2r88kIYHIUfHcHq9md%2BfWmPyaQ1AMGpomVcATiUygwUtSsdwZGuedJfSfPWIE6%2BRLrceOyM1IrfsaMw0cpcCNOC6x8VMi8kJ1uoYREGfWDcILuyZG5uPx%2BfWl36HlkmQ8zvx%2Fua%2BlCssIVrV7mAdAjElwxMCpBiMCYeadD2ZPNmJRELoJI06gXDrpafAlFY3mov6dpOT%2FfCrIKeISgApRJuuWCd%2B3JRZJ%2FFvK4%2F0SLS3IAa9sjYGcZhfF6EQkpdo6M9MLXQzQMwRc3sGY3oXvGoN6H559fO0lMUWS8Smkl4ZrmqVCLgxYya45Y7pIW8gv3lyxVxJ2X1oSd3vU4NYNdUUrl8hhs0yaYwhw%2Buxpdm%2FWuyZE2Ld1oF1od3rNwOzaJD0enFJqvcgFEHSIIg8h5ELj%2BjLkx2UtEUgLdAT%2BrH8UqF8bQAObWVH%2Ffpt9Go9OlKF86FGKPt6xvyT%2F%2FmFhDZUm1bwVHS4qUgtB6Gwc63T4o8AVMug%2BWes6uHlCMjL1JOU%2BcWbd3G1piCf5iBYaR03IOPV3uxQcslvR7%2BXiVtEMQNbcvBoSgxfYohl6R9mBE9Ooy5QwWMvydRwdsa9ujWoN%2BKMsiDPwbfk%2BYjD02sPABjqkAXfUwOcT2tkGghkJez%2BTZW5d4PqOIOhsrEycebaxTkU8NCFA70RiWAh7sQutef1g%2BkwlqqdLz5dCWnkouf8X0maHGt%2BZBJIiKMjOxj%2FKflvXTxKHt2%2FhEgNjNIdiYe%2FUi3h763wMgtlWWmbtQPlH0Z0%2F2q5X%2FCorjcjmUwY3WYqwuHdcDC%2BjjDzqJmbDf3N2VnzR9GMhnROvPFEqnsm8J35gWUOM&X-Amz-Signature=50e673b8257937a2ed6387d9d9f477b821f7c104dc7ed1ebb14710b0752962d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLDC7AB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZUGweb%2BJ52Ev9GMLrtfJ4L%2FCVGqyNf0usLfy4k2G8swIhAIt9U2SREL7kbr%2BQsOCkpT58gGcWGwJxG1dB5EtvyMAoKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlykFk6aWExs7ohnoq3AO%2BFkj2275YYoc8vvaaOSd2r88kIYHIUfHcHq9md%2BfWmPyaQ1AMGpomVcATiUygwUtSsdwZGuedJfSfPWIE6%2BRLrceOyM1IrfsaMw0cpcCNOC6x8VMi8kJ1uoYREGfWDcILuyZG5uPx%2BfWl36HlkmQ8zvx%2Fua%2BlCssIVrV7mAdAjElwxMCpBiMCYeadD2ZPNmJRELoJI06gXDrpafAlFY3mov6dpOT%2FfCrIKeISgApRJuuWCd%2B3JRZJ%2FFvK4%2F0SLS3IAa9sjYGcZhfF6EQkpdo6M9MLXQzQMwRc3sGY3oXvGoN6H559fO0lMUWS8Smkl4ZrmqVCLgxYya45Y7pIW8gv3lyxVxJ2X1oSd3vU4NYNdUUrl8hhs0yaYwhw%2Buxpdm%2FWuyZE2Ld1oF1od3rNwOzaJD0enFJqvcgFEHSIIg8h5ELj%2BjLkx2UtEUgLdAT%2BrH8UqF8bQAObWVH%2Ffpt9Go9OlKF86FGKPt6xvyT%2F%2FmFhDZUm1bwVHS4qUgtB6Gwc63T4o8AVMug%2BWes6uHlCMjL1JOU%2BcWbd3G1piCf5iBYaR03IOPV3uxQcslvR7%2BXiVtEMQNbcvBoSgxfYohl6R9mBE9Ooy5QwWMvydRwdsa9ujWoN%2BKMsiDPwbfk%2BYjD02sPABjqkAXfUwOcT2tkGghkJez%2BTZW5d4PqOIOhsrEycebaxTkU8NCFA70RiWAh7sQutef1g%2BkwlqqdLz5dCWnkouf8X0maHGt%2BZBJIiKMjOxj%2FKflvXTxKHt2%2FhEgNjNIdiYe%2FUi3h763wMgtlWWmbtQPlH0Z0%2F2q5X%2FCorjcjmUwY3WYqwuHdcDC%2BjjDzqJmbDf3N2VnzR9GMhnROvPFEqnsm8J35gWUOM&X-Amz-Signature=e8c6b348c9773e4fbc7455e152274bc491c897ce7190c49e4ccb77bbaa848ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
