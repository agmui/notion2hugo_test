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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFK4GL3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE%2Br3Mx6DF1xiERPxR2W9mbt%2Fr2CuOXgTfbpzUanwV%2BuAiAv9E7EKzQatcgTb%2B625N4pJd2UWxW2n8ne04K6aVNxJyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY18AbyFF%2BVkrfSQhKtwD7yDTanQB%2BnPOadutuI8TRKQY96OcgPMcn%2FLBdJVmKFP59Vha1Lv%2BQK698ZmoFOpBqdztpp%2FXMKslv4TRfhNIQKHgJBihl%2Fp%2BwHzvN2PiwYU8SWLU3U%2BtciYugkvTOx57cyZ4BYXYblqlnPEysx%2F4TJs%2BmIpEG6HnL4%2BCum%2BnjuCrhZvra018RuHJxL%2FbzDPkSetYBKo2P618ZNztpRg3uLBQx4X%2FrqbqpFc5%2FPxbqAu1eNByDkWIQWN5tk%2FRPsDGGZBNJH4okHM0hwd%2BEIv48%2FS8YS6LbaleKRgSzzxA%2BBl0svPMPLYCHd9W5QLYr2e%2BU%2BiUSGOipRYmHbdxxngl4oi4JXQf0WpnukVtBUD%2FHv7CxabF2wAORAlUQdVaP0X%2FUsZMs4MyqofuXl1tvFxnpHy3OCVZc%2BHn7mVqNgU9ZXmYi3QlY8iJafq5WWQ5uW6ClRwXwsZwN3mr6Q9Xst45PYKX8bUDxBexwfm0R2YvgofCXFBaXfHzy6xDuMb92AL7SRYPQl9cB9HRmlMlEPBXbTQ%2FN436d35nhTduNsjCly8mDC62lqj30SWAuOEx5iTKUH%2FzfQ8XLxw45DQRRhAmLM2Cpgs7mW8TTObtpkXi76Nw%2FgL3GKLG9tgBjjowlLv0vgY6pgEcfzlI6cfCOMMK2QOxzvlD7An3Qvvr3IZ0TNCHfYMPMlEIGolq98OwK%2FuzPnZjabwlOA76m73UMBln7AKCGgEcyDpAdywEq9iTOf3LFPbBF0A2G6wo7Ulf7vp4CqFjb%2FR63sQIFvTyhkSRTDnlJfXScD4Vyhqes6g%2BlZOYjhoSkj1EwzHTKpM7px4nsnhwDpGMkPzA24uq0EZR4f1jVBWjMc29JOHq&X-Amz-Signature=66bbb87d4948825b9ea4b0776deffc81664b4a146e0347b2ca67d39edb49c903&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFK4GL3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE%2Br3Mx6DF1xiERPxR2W9mbt%2Fr2CuOXgTfbpzUanwV%2BuAiAv9E7EKzQatcgTb%2B625N4pJd2UWxW2n8ne04K6aVNxJyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY18AbyFF%2BVkrfSQhKtwD7yDTanQB%2BnPOadutuI8TRKQY96OcgPMcn%2FLBdJVmKFP59Vha1Lv%2BQK698ZmoFOpBqdztpp%2FXMKslv4TRfhNIQKHgJBihl%2Fp%2BwHzvN2PiwYU8SWLU3U%2BtciYugkvTOx57cyZ4BYXYblqlnPEysx%2F4TJs%2BmIpEG6HnL4%2BCum%2BnjuCrhZvra018RuHJxL%2FbzDPkSetYBKo2P618ZNztpRg3uLBQx4X%2FrqbqpFc5%2FPxbqAu1eNByDkWIQWN5tk%2FRPsDGGZBNJH4okHM0hwd%2BEIv48%2FS8YS6LbaleKRgSzzxA%2BBl0svPMPLYCHd9W5QLYr2e%2BU%2BiUSGOipRYmHbdxxngl4oi4JXQf0WpnukVtBUD%2FHv7CxabF2wAORAlUQdVaP0X%2FUsZMs4MyqofuXl1tvFxnpHy3OCVZc%2BHn7mVqNgU9ZXmYi3QlY8iJafq5WWQ5uW6ClRwXwsZwN3mr6Q9Xst45PYKX8bUDxBexwfm0R2YvgofCXFBaXfHzy6xDuMb92AL7SRYPQl9cB9HRmlMlEPBXbTQ%2FN436d35nhTduNsjCly8mDC62lqj30SWAuOEx5iTKUH%2FzfQ8XLxw45DQRRhAmLM2Cpgs7mW8TTObtpkXi76Nw%2FgL3GKLG9tgBjjowlLv0vgY6pgEcfzlI6cfCOMMK2QOxzvlD7An3Qvvr3IZ0TNCHfYMPMlEIGolq98OwK%2FuzPnZjabwlOA76m73UMBln7AKCGgEcyDpAdywEq9iTOf3LFPbBF0A2G6wo7Ulf7vp4CqFjb%2FR63sQIFvTyhkSRTDnlJfXScD4Vyhqes6g%2BlZOYjhoSkj1EwzHTKpM7px4nsnhwDpGMkPzA24uq0EZR4f1jVBWjMc29JOHq&X-Amz-Signature=e72993c47d31c6a86fb11661deff4fb7e55e971f7eb36696bf6df0ffbf799487&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFK4GL3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE%2Br3Mx6DF1xiERPxR2W9mbt%2Fr2CuOXgTfbpzUanwV%2BuAiAv9E7EKzQatcgTb%2B625N4pJd2UWxW2n8ne04K6aVNxJyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY18AbyFF%2BVkrfSQhKtwD7yDTanQB%2BnPOadutuI8TRKQY96OcgPMcn%2FLBdJVmKFP59Vha1Lv%2BQK698ZmoFOpBqdztpp%2FXMKslv4TRfhNIQKHgJBihl%2Fp%2BwHzvN2PiwYU8SWLU3U%2BtciYugkvTOx57cyZ4BYXYblqlnPEysx%2F4TJs%2BmIpEG6HnL4%2BCum%2BnjuCrhZvra018RuHJxL%2FbzDPkSetYBKo2P618ZNztpRg3uLBQx4X%2FrqbqpFc5%2FPxbqAu1eNByDkWIQWN5tk%2FRPsDGGZBNJH4okHM0hwd%2BEIv48%2FS8YS6LbaleKRgSzzxA%2BBl0svPMPLYCHd9W5QLYr2e%2BU%2BiUSGOipRYmHbdxxngl4oi4JXQf0WpnukVtBUD%2FHv7CxabF2wAORAlUQdVaP0X%2FUsZMs4MyqofuXl1tvFxnpHy3OCVZc%2BHn7mVqNgU9ZXmYi3QlY8iJafq5WWQ5uW6ClRwXwsZwN3mr6Q9Xst45PYKX8bUDxBexwfm0R2YvgofCXFBaXfHzy6xDuMb92AL7SRYPQl9cB9HRmlMlEPBXbTQ%2FN436d35nhTduNsjCly8mDC62lqj30SWAuOEx5iTKUH%2FzfQ8XLxw45DQRRhAmLM2Cpgs7mW8TTObtpkXi76Nw%2FgL3GKLG9tgBjjowlLv0vgY6pgEcfzlI6cfCOMMK2QOxzvlD7An3Qvvr3IZ0TNCHfYMPMlEIGolq98OwK%2FuzPnZjabwlOA76m73UMBln7AKCGgEcyDpAdywEq9iTOf3LFPbBF0A2G6wo7Ulf7vp4CqFjb%2FR63sQIFvTyhkSRTDnlJfXScD4Vyhqes6g%2BlZOYjhoSkj1EwzHTKpM7px4nsnhwDpGMkPzA24uq0EZR4f1jVBWjMc29JOHq&X-Amz-Signature=7c7025ae251c88f1b5e97d1d2485d7485951f7835dd0b2a8245e2897ef82dc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
