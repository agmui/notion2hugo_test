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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7W24YH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1AVXedRt2CA5zQfc0bMBRiE%2FVu9TvYpM%2FCOXl7BawQIhANXrHpRt4JoCye1WNvlVLVkBOvILyTlor3eaMHUV0BIeKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzI9Iel2wT0321xOEq3ANUUKfQYb4HO%2B2C61EB40sDZtA6Mv3fXCADLetum6VMW1y4ab2JzJ04nMY581dqhbxJEDNpR9XSCFcXoHcgD9JpqPd%2FY1vPo%2Fu5VHHyXQq41gWBG%2FQItg%2FB9GmGyz6OB5EPadSr3WPBIa7X9v8gSnnS6Eujxd40M0%2FAHNS%2BIsIk6zRRnTZVo1D8Oz27tyQhYg0Wmp5NAEXaJHd6gvseXqc1Tp300Qsa79kwtPRdEtIlQzam3FlRLQkhBaAI6%2FfavmlxMrlExqxoYODgIASftCR9LWakzBmYgFGkIIPAX7Etcuhjt4YMxB%2B%2B58N5ZGlk3A4qAkZvrEDGoSgjK%2FYcNImMS1GgSd4pQtWuZZV5%2F50X33UqYJchWDXTw0oubltu532O9KKT4dl7FQmpFOyHPTSDkn0qQjl62eiEDvIy5x1LU3T%2BKAU2OqHuzBj%2FzsMbwd47%2BvTnT56mbPsn1eqhFmItbkAhK8HlJWDuFxulTSntAuvc%2FwMe3ww%2F593ewQys1VGy00Hf6Jkf%2Bh6Rz9%2FQCkUMJh9VYRrMpX12G6LZref%2BD%2B4jjlqX%2FwgceVc0ZV5ZpvsRQVHcWEL2lu8oyfxUt4TvLtPhC0S0bL1eTN5JJ9dt6lAnuT5EpC8uA36frTCpup2%2BBjqkAa3yT0GwF7BVm4qviUKSU%2F4V3X2dTL9iGyIvSa6rU%2BC2jaIA9s29wCON5GMT1RLbWyrSG4sz4Pibt%2FNKrBpoxkDv74%2FHeXnINQJo6OKoL%2FhfqBm2hb1E0JOSRm%2BJc%2FuAxsAwbiA1mPct6YFBt9HMCQ9lP%2F%2Frp7xLavmDgQHczri%2B3KWaM7RIiUpHqCBMMWT6CFt1y1cswWiweIZjiXGTC0WwdTVH&X-Amz-Signature=9035d179247eb4d5cae428a20e3270328279c2e0f82fac881b13821c26499ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7W24YH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1AVXedRt2CA5zQfc0bMBRiE%2FVu9TvYpM%2FCOXl7BawQIhANXrHpRt4JoCye1WNvlVLVkBOvILyTlor3eaMHUV0BIeKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzI9Iel2wT0321xOEq3ANUUKfQYb4HO%2B2C61EB40sDZtA6Mv3fXCADLetum6VMW1y4ab2JzJ04nMY581dqhbxJEDNpR9XSCFcXoHcgD9JpqPd%2FY1vPo%2Fu5VHHyXQq41gWBG%2FQItg%2FB9GmGyz6OB5EPadSr3WPBIa7X9v8gSnnS6Eujxd40M0%2FAHNS%2BIsIk6zRRnTZVo1D8Oz27tyQhYg0Wmp5NAEXaJHd6gvseXqc1Tp300Qsa79kwtPRdEtIlQzam3FlRLQkhBaAI6%2FfavmlxMrlExqxoYODgIASftCR9LWakzBmYgFGkIIPAX7Etcuhjt4YMxB%2B%2B58N5ZGlk3A4qAkZvrEDGoSgjK%2FYcNImMS1GgSd4pQtWuZZV5%2F50X33UqYJchWDXTw0oubltu532O9KKT4dl7FQmpFOyHPTSDkn0qQjl62eiEDvIy5x1LU3T%2BKAU2OqHuzBj%2FzsMbwd47%2BvTnT56mbPsn1eqhFmItbkAhK8HlJWDuFxulTSntAuvc%2FwMe3ww%2F593ewQys1VGy00Hf6Jkf%2Bh6Rz9%2FQCkUMJh9VYRrMpX12G6LZref%2BD%2B4jjlqX%2FwgceVc0ZV5ZpvsRQVHcWEL2lu8oyfxUt4TvLtPhC0S0bL1eTN5JJ9dt6lAnuT5EpC8uA36frTCpup2%2BBjqkAa3yT0GwF7BVm4qviUKSU%2F4V3X2dTL9iGyIvSa6rU%2BC2jaIA9s29wCON5GMT1RLbWyrSG4sz4Pibt%2FNKrBpoxkDv74%2FHeXnINQJo6OKoL%2FhfqBm2hb1E0JOSRm%2BJc%2FuAxsAwbiA1mPct6YFBt9HMCQ9lP%2F%2Frp7xLavmDgQHczri%2B3KWaM7RIiUpHqCBMMWT6CFt1y1cswWiweIZjiXGTC0WwdTVH&X-Amz-Signature=8bf05f74feffe2f57de92a3452c3c03562d8d94b1f3de6a2a013f0aa32a8ab33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7W24YH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1AVXedRt2CA5zQfc0bMBRiE%2FVu9TvYpM%2FCOXl7BawQIhANXrHpRt4JoCye1WNvlVLVkBOvILyTlor3eaMHUV0BIeKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzI9Iel2wT0321xOEq3ANUUKfQYb4HO%2B2C61EB40sDZtA6Mv3fXCADLetum6VMW1y4ab2JzJ04nMY581dqhbxJEDNpR9XSCFcXoHcgD9JpqPd%2FY1vPo%2Fu5VHHyXQq41gWBG%2FQItg%2FB9GmGyz6OB5EPadSr3WPBIa7X9v8gSnnS6Eujxd40M0%2FAHNS%2BIsIk6zRRnTZVo1D8Oz27tyQhYg0Wmp5NAEXaJHd6gvseXqc1Tp300Qsa79kwtPRdEtIlQzam3FlRLQkhBaAI6%2FfavmlxMrlExqxoYODgIASftCR9LWakzBmYgFGkIIPAX7Etcuhjt4YMxB%2B%2B58N5ZGlk3A4qAkZvrEDGoSgjK%2FYcNImMS1GgSd4pQtWuZZV5%2F50X33UqYJchWDXTw0oubltu532O9KKT4dl7FQmpFOyHPTSDkn0qQjl62eiEDvIy5x1LU3T%2BKAU2OqHuzBj%2FzsMbwd47%2BvTnT56mbPsn1eqhFmItbkAhK8HlJWDuFxulTSntAuvc%2FwMe3ww%2F593ewQys1VGy00Hf6Jkf%2Bh6Rz9%2FQCkUMJh9VYRrMpX12G6LZref%2BD%2B4jjlqX%2FwgceVc0ZV5ZpvsRQVHcWEL2lu8oyfxUt4TvLtPhC0S0bL1eTN5JJ9dt6lAnuT5EpC8uA36frTCpup2%2BBjqkAa3yT0GwF7BVm4qviUKSU%2F4V3X2dTL9iGyIvSa6rU%2BC2jaIA9s29wCON5GMT1RLbWyrSG4sz4Pibt%2FNKrBpoxkDv74%2FHeXnINQJo6OKoL%2FhfqBm2hb1E0JOSRm%2BJc%2FuAxsAwbiA1mPct6YFBt9HMCQ9lP%2F%2Frp7xLavmDgQHczri%2B3KWaM7RIiUpHqCBMMWT6CFt1y1cswWiweIZjiXGTC0WwdTVH&X-Amz-Signature=efb38085ac449f536656c99a1750300195028e43c7e0ded0af201dedf6684093&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
