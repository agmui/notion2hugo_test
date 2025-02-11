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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMDGEVP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE82jAJIBde28RSsenVyGZAD7oDPIY088wFVSkh1D4mJAiEAyOoTqUviEtbmOTKNUk1c1HWSe4nsnt4tJsOTvPIkgUgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQvMl3jxSgUU2CENSrcA%2FDWOe6227EFNOvJmMO1WKHLc49x%2BZ33BpXdrSGZGlaCCfEm6lr0oaFMbIZnfUvEl6dhM%2F%2FyRT2O6P7IyCTIu%2BjQOcJT%2B3MinmToUjjRF4Zi9e%2BdmG9Tg3cWisX4rTdLuDUwm7CWhpS27%2FgzBbnWSighusM00hHt17gY%2FA7A1YO1X9hgOjVMKXnaZKlIER8GUkXUWNj4YAkCreXzoT935acGwlkr4fNSWUsaA7MNJB8Dr9xgugVxfxfDvXQ3IpU1kp5BO%2FVSScNs2twZoa%2BOiRoLmerEQdW0VPOJwaw2%2ByL3OCgb%2B4KHdANNtPfoE7kVCOGEmpqbXkwQ0oBSkFJs1Fr9%2FMAsS2O8Wlj0W%2BdZUp3ZQ7nWsbnErM8wc9DrTpeWujSnOwUUZ9dgvcublLqWp1DaoMuIYB78gL2RH4%2FVApEXPMiCWuY5EiILMlZY2c7Ff0tuBYuzF7iw%2BJjsiHV7iHECK9IdTzVV80mulQt8ZjbsdkAhnjOCeg87xopdNAlW2%2BFzkdvAe0LXQBq%2FSyWg6tLLSm8Tjnc5phAgizXYF6rMPBowwoLtVK3fGT5fm3EBgbymMXJI80WP4PMnS9FV46QjbFjuhQX7pTtwRg3F9ZqRhYxwG7B4XLrYhaA4MPisq70GOqUBUiK2qHW37JE5OimqoEKfqaD6GyBTpmICItX03pBeimoi3zCrmRlEPUg%2BoxkJr6n0de7nQKP8sg7C6T7avxCpIVWPRbbGgTA%2Fu5Aj4bbUc0EvDHVV6%2BfoIO25vWX8tUcRYGkDo55o6H80MkwmUuqESBskcmF3Fpn6kcTV0mUyc88LO3NAO3lhDZOMvadQP5m983fZlFBMtvMyhH%2Fx1sKrFmjtEGNQ&X-Amz-Signature=3cba1659e02fd4a57b01ffd26810c1a47eeef57e05478b7018d1f7a60b71e680&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMDGEVP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE82jAJIBde28RSsenVyGZAD7oDPIY088wFVSkh1D4mJAiEAyOoTqUviEtbmOTKNUk1c1HWSe4nsnt4tJsOTvPIkgUgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQvMl3jxSgUU2CENSrcA%2FDWOe6227EFNOvJmMO1WKHLc49x%2BZ33BpXdrSGZGlaCCfEm6lr0oaFMbIZnfUvEl6dhM%2F%2FyRT2O6P7IyCTIu%2BjQOcJT%2B3MinmToUjjRF4Zi9e%2BdmG9Tg3cWisX4rTdLuDUwm7CWhpS27%2FgzBbnWSighusM00hHt17gY%2FA7A1YO1X9hgOjVMKXnaZKlIER8GUkXUWNj4YAkCreXzoT935acGwlkr4fNSWUsaA7MNJB8Dr9xgugVxfxfDvXQ3IpU1kp5BO%2FVSScNs2twZoa%2BOiRoLmerEQdW0VPOJwaw2%2ByL3OCgb%2B4KHdANNtPfoE7kVCOGEmpqbXkwQ0oBSkFJs1Fr9%2FMAsS2O8Wlj0W%2BdZUp3ZQ7nWsbnErM8wc9DrTpeWujSnOwUUZ9dgvcublLqWp1DaoMuIYB78gL2RH4%2FVApEXPMiCWuY5EiILMlZY2c7Ff0tuBYuzF7iw%2BJjsiHV7iHECK9IdTzVV80mulQt8ZjbsdkAhnjOCeg87xopdNAlW2%2BFzkdvAe0LXQBq%2FSyWg6tLLSm8Tjnc5phAgizXYF6rMPBowwoLtVK3fGT5fm3EBgbymMXJI80WP4PMnS9FV46QjbFjuhQX7pTtwRg3F9ZqRhYxwG7B4XLrYhaA4MPisq70GOqUBUiK2qHW37JE5OimqoEKfqaD6GyBTpmICItX03pBeimoi3zCrmRlEPUg%2BoxkJr6n0de7nQKP8sg7C6T7avxCpIVWPRbbGgTA%2Fu5Aj4bbUc0EvDHVV6%2BfoIO25vWX8tUcRYGkDo55o6H80MkwmUuqESBskcmF3Fpn6kcTV0mUyc88LO3NAO3lhDZOMvadQP5m983fZlFBMtvMyhH%2Fx1sKrFmjtEGNQ&X-Amz-Signature=d2eaf4cb2d0b6816ff90999891815b3c38764675179b9ce0246b147282be89f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMDGEVP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE82jAJIBde28RSsenVyGZAD7oDPIY088wFVSkh1D4mJAiEAyOoTqUviEtbmOTKNUk1c1HWSe4nsnt4tJsOTvPIkgUgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQvMl3jxSgUU2CENSrcA%2FDWOe6227EFNOvJmMO1WKHLc49x%2BZ33BpXdrSGZGlaCCfEm6lr0oaFMbIZnfUvEl6dhM%2F%2FyRT2O6P7IyCTIu%2BjQOcJT%2B3MinmToUjjRF4Zi9e%2BdmG9Tg3cWisX4rTdLuDUwm7CWhpS27%2FgzBbnWSighusM00hHt17gY%2FA7A1YO1X9hgOjVMKXnaZKlIER8GUkXUWNj4YAkCreXzoT935acGwlkr4fNSWUsaA7MNJB8Dr9xgugVxfxfDvXQ3IpU1kp5BO%2FVSScNs2twZoa%2BOiRoLmerEQdW0VPOJwaw2%2ByL3OCgb%2B4KHdANNtPfoE7kVCOGEmpqbXkwQ0oBSkFJs1Fr9%2FMAsS2O8Wlj0W%2BdZUp3ZQ7nWsbnErM8wc9DrTpeWujSnOwUUZ9dgvcublLqWp1DaoMuIYB78gL2RH4%2FVApEXPMiCWuY5EiILMlZY2c7Ff0tuBYuzF7iw%2BJjsiHV7iHECK9IdTzVV80mulQt8ZjbsdkAhnjOCeg87xopdNAlW2%2BFzkdvAe0LXQBq%2FSyWg6tLLSm8Tjnc5phAgizXYF6rMPBowwoLtVK3fGT5fm3EBgbymMXJI80WP4PMnS9FV46QjbFjuhQX7pTtwRg3F9ZqRhYxwG7B4XLrYhaA4MPisq70GOqUBUiK2qHW37JE5OimqoEKfqaD6GyBTpmICItX03pBeimoi3zCrmRlEPUg%2BoxkJr6n0de7nQKP8sg7C6T7avxCpIVWPRbbGgTA%2Fu5Aj4bbUc0EvDHVV6%2BfoIO25vWX8tUcRYGkDo55o6H80MkwmUuqESBskcmF3Fpn6kcTV0mUyc88LO3NAO3lhDZOMvadQP5m983fZlFBMtvMyhH%2Fx1sKrFmjtEGNQ&X-Amz-Signature=d13585830fa9fed527db43ee033b5c354c18153ce10089bed22899ab97cc95dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
