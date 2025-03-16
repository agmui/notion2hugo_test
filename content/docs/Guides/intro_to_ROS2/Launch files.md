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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UIXXG3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhRebyfMf4klWYCnSqS7JcaEDso6fzhXny9OrjPU5lJAiEA6m7Ir1d%2BRg9L20NrBTFKeDNNirImNQmC2c4WnVbAcsoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDEF63tpC7uGKh4LqSrcAzMiRH3QkBftAChNJRnW1mQ24Cv0bGiSSSLMLdpYqNMXXG5ALAQAmEY7YBjgt7HSYQQjzwhpyrOR5rlXYIUWrxDtxCCLDVNMNTiYmPBkCOg%2Fguyrzd2%2FBylPEUMe75L2pVozy6C5EEoel6A0Z5RgNe8JtRX%2BbMe1JTxzbE57ZVCwfEp%2FrB0offVEUBz5XkJuI23mFPMjZkxR5H2kUM1rtmpTWhevXQfGUs9t8YU82T%2FMceiY9ml8qNfou9s1rohjZXeqDiDDR6YFNPDSseke9npHZ9QtmEeHajMnKJFcAIeg9AmpQDU6FudlVjCtSqV5HlG8dlOW%2FyMXDNemny8LPmkaEfaLU86jYNZ5%2FunctPmiXHFKZ4DW1yZmRts4axnCfdrFfGPCC0swAEvXfu0sBbHey%2FLae8uxkBpxpOHgG55tzIwe5tcqcLVX7w5l8RcdsgZLDu1azZxTkh%2BvWrRPFmV8Qu%2BOBUgK52Pb5bxWF2oJfEm1v8tGlDL4HUNNVB2FdaDpvPLMDO8OfR%2BPu6cWOINoMNFS8PWtGOL%2BgaFIeLv73BzjNZ6k4wl%2FkoGk92pGyFmhGgze9%2BpPSdckaw1OY9QvEN3AG6FMpa68x3hy4so1W2FuBlWb8f3UcHfnMMzq2b4GOqUBsLQ8X8jCGyLka42wK7%2Fyd9tVz%2BmVe1wgL6JIwKmDxALISTQfoPY5iMg8URKLpKSCgZiQXjHmWWGuWzgX2C9HBbkMFH87P9%2BYJpeIaUSf1DcatVW4ZCE9PT5gC8q1nBJC0Mg3cE%2Bl7zeb66o5b3fysm6Eg1evPloVs%2BaWuXSRUGr%2F%2Bm9EG5aqWcYj5mYWwesT2fm0mTVOk9x8%2BQMHZPYFnezrNvgm&X-Amz-Signature=bfb6530382ea0eb3441e1c705848e54307e4a1f14489bd43ea3ffc6b87d1ecfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UIXXG3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhRebyfMf4klWYCnSqS7JcaEDso6fzhXny9OrjPU5lJAiEA6m7Ir1d%2BRg9L20NrBTFKeDNNirImNQmC2c4WnVbAcsoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDEF63tpC7uGKh4LqSrcAzMiRH3QkBftAChNJRnW1mQ24Cv0bGiSSSLMLdpYqNMXXG5ALAQAmEY7YBjgt7HSYQQjzwhpyrOR5rlXYIUWrxDtxCCLDVNMNTiYmPBkCOg%2Fguyrzd2%2FBylPEUMe75L2pVozy6C5EEoel6A0Z5RgNe8JtRX%2BbMe1JTxzbE57ZVCwfEp%2FrB0offVEUBz5XkJuI23mFPMjZkxR5H2kUM1rtmpTWhevXQfGUs9t8YU82T%2FMceiY9ml8qNfou9s1rohjZXeqDiDDR6YFNPDSseke9npHZ9QtmEeHajMnKJFcAIeg9AmpQDU6FudlVjCtSqV5HlG8dlOW%2FyMXDNemny8LPmkaEfaLU86jYNZ5%2FunctPmiXHFKZ4DW1yZmRts4axnCfdrFfGPCC0swAEvXfu0sBbHey%2FLae8uxkBpxpOHgG55tzIwe5tcqcLVX7w5l8RcdsgZLDu1azZxTkh%2BvWrRPFmV8Qu%2BOBUgK52Pb5bxWF2oJfEm1v8tGlDL4HUNNVB2FdaDpvPLMDO8OfR%2BPu6cWOINoMNFS8PWtGOL%2BgaFIeLv73BzjNZ6k4wl%2FkoGk92pGyFmhGgze9%2BpPSdckaw1OY9QvEN3AG6FMpa68x3hy4so1W2FuBlWb8f3UcHfnMMzq2b4GOqUBsLQ8X8jCGyLka42wK7%2Fyd9tVz%2BmVe1wgL6JIwKmDxALISTQfoPY5iMg8URKLpKSCgZiQXjHmWWGuWzgX2C9HBbkMFH87P9%2BYJpeIaUSf1DcatVW4ZCE9PT5gC8q1nBJC0Mg3cE%2Bl7zeb66o5b3fysm6Eg1evPloVs%2BaWuXSRUGr%2F%2Bm9EG5aqWcYj5mYWwesT2fm0mTVOk9x8%2BQMHZPYFnezrNvgm&X-Amz-Signature=c8393933ee00549e74cea02a7807312716487dc08471e5aa04f717ca84523b32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UIXXG3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhRebyfMf4klWYCnSqS7JcaEDso6fzhXny9OrjPU5lJAiEA6m7Ir1d%2BRg9L20NrBTFKeDNNirImNQmC2c4WnVbAcsoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDEF63tpC7uGKh4LqSrcAzMiRH3QkBftAChNJRnW1mQ24Cv0bGiSSSLMLdpYqNMXXG5ALAQAmEY7YBjgt7HSYQQjzwhpyrOR5rlXYIUWrxDtxCCLDVNMNTiYmPBkCOg%2Fguyrzd2%2FBylPEUMe75L2pVozy6C5EEoel6A0Z5RgNe8JtRX%2BbMe1JTxzbE57ZVCwfEp%2FrB0offVEUBz5XkJuI23mFPMjZkxR5H2kUM1rtmpTWhevXQfGUs9t8YU82T%2FMceiY9ml8qNfou9s1rohjZXeqDiDDR6YFNPDSseke9npHZ9QtmEeHajMnKJFcAIeg9AmpQDU6FudlVjCtSqV5HlG8dlOW%2FyMXDNemny8LPmkaEfaLU86jYNZ5%2FunctPmiXHFKZ4DW1yZmRts4axnCfdrFfGPCC0swAEvXfu0sBbHey%2FLae8uxkBpxpOHgG55tzIwe5tcqcLVX7w5l8RcdsgZLDu1azZxTkh%2BvWrRPFmV8Qu%2BOBUgK52Pb5bxWF2oJfEm1v8tGlDL4HUNNVB2FdaDpvPLMDO8OfR%2BPu6cWOINoMNFS8PWtGOL%2BgaFIeLv73BzjNZ6k4wl%2FkoGk92pGyFmhGgze9%2BpPSdckaw1OY9QvEN3AG6FMpa68x3hy4so1W2FuBlWb8f3UcHfnMMzq2b4GOqUBsLQ8X8jCGyLka42wK7%2Fyd9tVz%2BmVe1wgL6JIwKmDxALISTQfoPY5iMg8URKLpKSCgZiQXjHmWWGuWzgX2C9HBbkMFH87P9%2BYJpeIaUSf1DcatVW4ZCE9PT5gC8q1nBJC0Mg3cE%2Bl7zeb66o5b3fysm6Eg1evPloVs%2BaWuXSRUGr%2F%2Bm9EG5aqWcYj5mYWwesT2fm0mTVOk9x8%2BQMHZPYFnezrNvgm&X-Amz-Signature=42d09d06fec5e31c85caee8d1af61a95bd5a5b09fb34a16e84277e7a6bb06e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
