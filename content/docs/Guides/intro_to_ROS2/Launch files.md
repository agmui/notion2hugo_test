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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2ADFUG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEZPM5iOiJLwpTGAr83rEqOrcpx%2FD%2BdxAnagBNNlT0t0AiEAtS0JJR%2BwlPhCmGqDQi8GyxZID2XncJqhH%2FQ%2Bo0rbFeEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCGX7Dk5VrYm3zpexircAz%2BGoMN215EYNPPIjRfaEKRp%2FfGTHZnCyCcTacZSj9CyzlcXZ5CyWdMwqrjnmXeAH76mva2iHapWqPiFQDOWPW7%2FiGZaVmXwmg5Ip3o3LNoCE2JpMledwbCbWmIpQ0mPUsxrHjPQcF%2B9UO0bJ5hN7fDoAiyfCrnK9rfuKki6X9Q%2BgNDVa3J%2BFV%2F1fUzbf8VR2NhT1mRtsPhVu2XegRwY1C9H4Nf13izVeX013fcewaxvIKCN6%2Bx6il4Fx45VXfF856qvTE7LwYdEm9vE2aAcdFa5JNqfPFW5kqpFFsvEFZkZy%2BXlI8c6oBHF8SamfIXGPsMe2%2FMhmu253D2oGhvPlvUXtsEEolWSINn8SQSrGlOiAgRPGHYZ%2Bgly1bNT4icCzQoEFLtpqFBlU30cZdtDpJyEk1pcQI7FHMvEW4qa59toxZIMtO%2B5cQvOuc75Pe8xb778wwYUsDpBNNP%2B4TgJG4z92qWetlGDPKOJ04ueJD2ESnnb88hTeb7YGqTffHXfUyAFO%2Fxbs7h4fz2h1sOeN0H1rVO8vMweKzGpXK4V3%2BsCFOFVC%2BGHIZCQm5rs2expTYKyJQktJJAejqMAKwCBYhN0QDXPnTVvVBKYVP0BPaO%2BjhLXwAgif46aNM4FMKrhkL0GOqUBj73CohZ6G8Flmwn0iIHLNsPiBXvfjIZZBKRzs3Y2D6Zh1RdCZWOKvk9S73TlDeproqUytUEPF34w9NeVIhc8lKbJtyJcuAqYpS%2BSK7SuwaLAufnCBl4dmqBcAmfvRFGOgKflu78XlUuDRhiuPuI2XH36nmKeLTHuZMRaYpINCWfje1ctIEIfM9bDmY4%2FTiJIqPQPNgdlJg2A2xi1nYrHyj%2BeDnAN&X-Amz-Signature=cd02368be6ac4f748043a459911f4dd84360f70075dccba3a02e107039f145f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2ADFUG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEZPM5iOiJLwpTGAr83rEqOrcpx%2FD%2BdxAnagBNNlT0t0AiEAtS0JJR%2BwlPhCmGqDQi8GyxZID2XncJqhH%2FQ%2Bo0rbFeEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCGX7Dk5VrYm3zpexircAz%2BGoMN215EYNPPIjRfaEKRp%2FfGTHZnCyCcTacZSj9CyzlcXZ5CyWdMwqrjnmXeAH76mva2iHapWqPiFQDOWPW7%2FiGZaVmXwmg5Ip3o3LNoCE2JpMledwbCbWmIpQ0mPUsxrHjPQcF%2B9UO0bJ5hN7fDoAiyfCrnK9rfuKki6X9Q%2BgNDVa3J%2BFV%2F1fUzbf8VR2NhT1mRtsPhVu2XegRwY1C9H4Nf13izVeX013fcewaxvIKCN6%2Bx6il4Fx45VXfF856qvTE7LwYdEm9vE2aAcdFa5JNqfPFW5kqpFFsvEFZkZy%2BXlI8c6oBHF8SamfIXGPsMe2%2FMhmu253D2oGhvPlvUXtsEEolWSINn8SQSrGlOiAgRPGHYZ%2Bgly1bNT4icCzQoEFLtpqFBlU30cZdtDpJyEk1pcQI7FHMvEW4qa59toxZIMtO%2B5cQvOuc75Pe8xb778wwYUsDpBNNP%2B4TgJG4z92qWetlGDPKOJ04ueJD2ESnnb88hTeb7YGqTffHXfUyAFO%2Fxbs7h4fz2h1sOeN0H1rVO8vMweKzGpXK4V3%2BsCFOFVC%2BGHIZCQm5rs2expTYKyJQktJJAejqMAKwCBYhN0QDXPnTVvVBKYVP0BPaO%2BjhLXwAgif46aNM4FMKrhkL0GOqUBj73CohZ6G8Flmwn0iIHLNsPiBXvfjIZZBKRzs3Y2D6Zh1RdCZWOKvk9S73TlDeproqUytUEPF34w9NeVIhc8lKbJtyJcuAqYpS%2BSK7SuwaLAufnCBl4dmqBcAmfvRFGOgKflu78XlUuDRhiuPuI2XH36nmKeLTHuZMRaYpINCWfje1ctIEIfM9bDmY4%2FTiJIqPQPNgdlJg2A2xi1nYrHyj%2BeDnAN&X-Amz-Signature=0749b7a9d0b7d8cd0e6e6a6d02c570aaeb7c146257208c6c6ed1cf41a8de516c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2ADFUG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEZPM5iOiJLwpTGAr83rEqOrcpx%2FD%2BdxAnagBNNlT0t0AiEAtS0JJR%2BwlPhCmGqDQi8GyxZID2XncJqhH%2FQ%2Bo0rbFeEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCGX7Dk5VrYm3zpexircAz%2BGoMN215EYNPPIjRfaEKRp%2FfGTHZnCyCcTacZSj9CyzlcXZ5CyWdMwqrjnmXeAH76mva2iHapWqPiFQDOWPW7%2FiGZaVmXwmg5Ip3o3LNoCE2JpMledwbCbWmIpQ0mPUsxrHjPQcF%2B9UO0bJ5hN7fDoAiyfCrnK9rfuKki6X9Q%2BgNDVa3J%2BFV%2F1fUzbf8VR2NhT1mRtsPhVu2XegRwY1C9H4Nf13izVeX013fcewaxvIKCN6%2Bx6il4Fx45VXfF856qvTE7LwYdEm9vE2aAcdFa5JNqfPFW5kqpFFsvEFZkZy%2BXlI8c6oBHF8SamfIXGPsMe2%2FMhmu253D2oGhvPlvUXtsEEolWSINn8SQSrGlOiAgRPGHYZ%2Bgly1bNT4icCzQoEFLtpqFBlU30cZdtDpJyEk1pcQI7FHMvEW4qa59toxZIMtO%2B5cQvOuc75Pe8xb778wwYUsDpBNNP%2B4TgJG4z92qWetlGDPKOJ04ueJD2ESnnb88hTeb7YGqTffHXfUyAFO%2Fxbs7h4fz2h1sOeN0H1rVO8vMweKzGpXK4V3%2BsCFOFVC%2BGHIZCQm5rs2expTYKyJQktJJAejqMAKwCBYhN0QDXPnTVvVBKYVP0BPaO%2BjhLXwAgif46aNM4FMKrhkL0GOqUBj73CohZ6G8Flmwn0iIHLNsPiBXvfjIZZBKRzs3Y2D6Zh1RdCZWOKvk9S73TlDeproqUytUEPF34w9NeVIhc8lKbJtyJcuAqYpS%2BSK7SuwaLAufnCBl4dmqBcAmfvRFGOgKflu78XlUuDRhiuPuI2XH36nmKeLTHuZMRaYpINCWfje1ctIEIfM9bDmY4%2FTiJIqPQPNgdlJg2A2xi1nYrHyj%2BeDnAN&X-Amz-Signature=fc72be1488d845bfdebf48b17a2bfc302db483fdfb3d13c2b1c2de7b045c4dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
