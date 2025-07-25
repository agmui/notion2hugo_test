---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23NCLBM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDexiexJVxt8TG9vYJ%2BTVJmQR%2Bo%2BXBz3k3CVhMyFrQ8BgIgDAkCfjaOOdSLxLUbGnsIIaOYj5RMbUrm1NEqdinD4Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4G6Mj7CEB%2BWP8AwCrcA6FxPaY528YwlquZZKtETHtj2BTLLUsYQGx9au2DZA4h7hFHvl3F26AqFcYti%2BupD3tewdZo6sw7Q%2B3KyT51ENXuzCNWhXYyELDlBkH5WVTSIUrz4tjyUCinVEUCGjukDMpL3V89ngAzYUu61uGAE%2FkN7rP%2F9f5zpl8PyhoczZ82SB4ko7AIcG3o1K7TGJm%2BZVBJYtSzRS5r%2Fpz2xNnRa%2F39DZqNJ5XTwxoopDLrIZkAkrcYRMCYIVIhPD1WFQDcEUdIwlYUjcewx%2FmDrPle139A%2F54DR5OWBeYn50kSz0t%2BUzReDpmHU%2FfSviGPRUrdfxQt6goCnR9%2BCfHN5VaXIyvC9AQKBt4LEY6ZaCFHVsEKGk7PmvrdtIdcKdODhxmTLczbk11ki%2BIVl6%2FRVL8jmxseSOOXKGa7Hwnl%2BMJ1yD3bnFIqCKBFKaSQMKsip8zq%2BuqLq8kNtl361i5UsVSLTehNnwAAL87kE0uzYpO%2FdmP4iIhBdHsfHFL3%2BJqMvf3lXgOpj9eV9mtKwwCvdnrtEvhYsKykNZQdnLDlYnrfhbsmFeoh%2ByVobgv7aSDBG3srV9U9OeceU2n1RiInWRhQ9RtTfTCgb7DXYCrX3LrIzWMpJuIDCO9H9B371POyMK%2Bqj8QGOqUBgkrjqXbcUdel%2BxUNiUJzjYRguGE7VQBTeuQAxnRoBwSMuBzMpaBSiRq393i343Q1hmrv5FTKfSvrSH23vHWvUuwtAhdNQvUYAU7AbdJ4Pf2r1QtcVgFsPD1salKVp8UKrfuZn7VVwh%2B1W3Q13E4vYTN8tLkBSGGpzSprHdXdzZ4RGmlOb2uEVxBpPxu%2B1ftwLHE7ltxNDVH3717ep63l0IK7QAan&X-Amz-Signature=3c3b0a51febccd6795a1f96463f4057f4a08b49ecead296d406083589d3240ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23NCLBM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDexiexJVxt8TG9vYJ%2BTVJmQR%2Bo%2BXBz3k3CVhMyFrQ8BgIgDAkCfjaOOdSLxLUbGnsIIaOYj5RMbUrm1NEqdinD4Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4G6Mj7CEB%2BWP8AwCrcA6FxPaY528YwlquZZKtETHtj2BTLLUsYQGx9au2DZA4h7hFHvl3F26AqFcYti%2BupD3tewdZo6sw7Q%2B3KyT51ENXuzCNWhXYyELDlBkH5WVTSIUrz4tjyUCinVEUCGjukDMpL3V89ngAzYUu61uGAE%2FkN7rP%2F9f5zpl8PyhoczZ82SB4ko7AIcG3o1K7TGJm%2BZVBJYtSzRS5r%2Fpz2xNnRa%2F39DZqNJ5XTwxoopDLrIZkAkrcYRMCYIVIhPD1WFQDcEUdIwlYUjcewx%2FmDrPle139A%2F54DR5OWBeYn50kSz0t%2BUzReDpmHU%2FfSviGPRUrdfxQt6goCnR9%2BCfHN5VaXIyvC9AQKBt4LEY6ZaCFHVsEKGk7PmvrdtIdcKdODhxmTLczbk11ki%2BIVl6%2FRVL8jmxseSOOXKGa7Hwnl%2BMJ1yD3bnFIqCKBFKaSQMKsip8zq%2BuqLq8kNtl361i5UsVSLTehNnwAAL87kE0uzYpO%2FdmP4iIhBdHsfHFL3%2BJqMvf3lXgOpj9eV9mtKwwCvdnrtEvhYsKykNZQdnLDlYnrfhbsmFeoh%2ByVobgv7aSDBG3srV9U9OeceU2n1RiInWRhQ9RtTfTCgb7DXYCrX3LrIzWMpJuIDCO9H9B371POyMK%2Bqj8QGOqUBgkrjqXbcUdel%2BxUNiUJzjYRguGE7VQBTeuQAxnRoBwSMuBzMpaBSiRq393i343Q1hmrv5FTKfSvrSH23vHWvUuwtAhdNQvUYAU7AbdJ4Pf2r1QtcVgFsPD1salKVp8UKrfuZn7VVwh%2B1W3Q13E4vYTN8tLkBSGGpzSprHdXdzZ4RGmlOb2uEVxBpPxu%2B1ftwLHE7ltxNDVH3717ep63l0IK7QAan&X-Amz-Signature=12a2e12118e624968123b1c29b930b5d811e5ff46af2025a448f88e0109f98a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23NCLBM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDexiexJVxt8TG9vYJ%2BTVJmQR%2Bo%2BXBz3k3CVhMyFrQ8BgIgDAkCfjaOOdSLxLUbGnsIIaOYj5RMbUrm1NEqdinD4Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4G6Mj7CEB%2BWP8AwCrcA6FxPaY528YwlquZZKtETHtj2BTLLUsYQGx9au2DZA4h7hFHvl3F26AqFcYti%2BupD3tewdZo6sw7Q%2B3KyT51ENXuzCNWhXYyELDlBkH5WVTSIUrz4tjyUCinVEUCGjukDMpL3V89ngAzYUu61uGAE%2FkN7rP%2F9f5zpl8PyhoczZ82SB4ko7AIcG3o1K7TGJm%2BZVBJYtSzRS5r%2Fpz2xNnRa%2F39DZqNJ5XTwxoopDLrIZkAkrcYRMCYIVIhPD1WFQDcEUdIwlYUjcewx%2FmDrPle139A%2F54DR5OWBeYn50kSz0t%2BUzReDpmHU%2FfSviGPRUrdfxQt6goCnR9%2BCfHN5VaXIyvC9AQKBt4LEY6ZaCFHVsEKGk7PmvrdtIdcKdODhxmTLczbk11ki%2BIVl6%2FRVL8jmxseSOOXKGa7Hwnl%2BMJ1yD3bnFIqCKBFKaSQMKsip8zq%2BuqLq8kNtl361i5UsVSLTehNnwAAL87kE0uzYpO%2FdmP4iIhBdHsfHFL3%2BJqMvf3lXgOpj9eV9mtKwwCvdnrtEvhYsKykNZQdnLDlYnrfhbsmFeoh%2ByVobgv7aSDBG3srV9U9OeceU2n1RiInWRhQ9RtTfTCgb7DXYCrX3LrIzWMpJuIDCO9H9B371POyMK%2Bqj8QGOqUBgkrjqXbcUdel%2BxUNiUJzjYRguGE7VQBTeuQAxnRoBwSMuBzMpaBSiRq393i343Q1hmrv5FTKfSvrSH23vHWvUuwtAhdNQvUYAU7AbdJ4Pf2r1QtcVgFsPD1salKVp8UKrfuZn7VVwh%2B1W3Q13E4vYTN8tLkBSGGpzSprHdXdzZ4RGmlOb2uEVxBpPxu%2B1ftwLHE7ltxNDVH3717ep63l0IK7QAan&X-Amz-Signature=372e2e62779aacf21af6e5bac5043702a01748295c36c52685d1bed76d1881fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
