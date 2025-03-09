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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IY5JI6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCAMhihiOmFcz1XtBpj1Lg8X6mVz47DqNy%2Bu6dw1KXkPAIgQoocQqRL0k5KOIvdS3QjNUrjpuGmd4DRm0L2fSbT3gQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJvSIvvfW8vUB20WtircA3OrTxL0I9TMeWVTh9NPMqvu%2BZ5gvjZJffWyfHgMyvt6Ebb6FllHbCrDnt%2FlllHtV5wcxwN1F%2B%2FZJ0JCAjJ7FcjYqlC0NGlfEut3PnbbzcKepqRtfFcwuVJ%2BWGKGP8w94yugor3Ohu8xqK6ieVF1p%2BvEV9P5M4cMH5KV4%2F%2FVbr6EvmRG6xE0IAexWNJhd7W63iXHOQkRwEh%2FYA60jnk42a4NsZ2gwJ96y3UYFz6GxjqI7n2rJJbO73p4azETjBUH7YlZ%2F%2BP%2FZiQ%2BOMkqH5yIlHxwqTU1neHTww9p%2B3gSZ5esYWx4zYmT5AWR3vZZT3GPwyaIEAkRAolB8nPfII0ijrnthglIwVY%2BggE%2BZP58EQt2zqMprOXRoYMcV1FqbKDHbbiT3XvbrYI8IlN89YOnzR1OAzqigiJD%2FYi2EDxNrHKV7v18Ok8%2BpC6jYm8glDjm5RNE5cvAippU%2F3Oud7jhtgiCr2Pj8CLRHtCyaRC4rVm9Qd03m%2BCoc0dkZt9khGk8lzRRt1rhL4%2F%2FYURut%2FVQGMPERb579B6URLvMIv1y2JGhr5RpDZF5vc0YCGraCjxGuygwQk6fJZ10iYl69T0yfuxz%2FLYhklovaFcDrO%2FvLPpWeTy8EhNSPUM4QSg4MMOMtr4GOqUBsnYiye9vgvFqGBd5ZGZZtQRimM169J%2Fc%2B61RjUN0F6Ceyo4SCFW9HLnnX0zxthxch9Pmz3SuzcY7mjUFidxE7Pjp1ASKwbDIhXWMJ4g2D5tBoM6KVbLk6TALBIWwHRHD3nUvg3sAlimVI9hf08pVZQxtiD6bC4YnN22cbyYzInqxE7w0fMHgubjhiMKqe8%2BMv%2FNd1v9YC0kTqd2e%2FdoTzBMbG4%2Bh&X-Amz-Signature=b5c321530091619ce5296fceaab558e461d8044115b2c99fb9252df4c205bb14&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IY5JI6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCAMhihiOmFcz1XtBpj1Lg8X6mVz47DqNy%2Bu6dw1KXkPAIgQoocQqRL0k5KOIvdS3QjNUrjpuGmd4DRm0L2fSbT3gQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJvSIvvfW8vUB20WtircA3OrTxL0I9TMeWVTh9NPMqvu%2BZ5gvjZJffWyfHgMyvt6Ebb6FllHbCrDnt%2FlllHtV5wcxwN1F%2B%2FZJ0JCAjJ7FcjYqlC0NGlfEut3PnbbzcKepqRtfFcwuVJ%2BWGKGP8w94yugor3Ohu8xqK6ieVF1p%2BvEV9P5M4cMH5KV4%2F%2FVbr6EvmRG6xE0IAexWNJhd7W63iXHOQkRwEh%2FYA60jnk42a4NsZ2gwJ96y3UYFz6GxjqI7n2rJJbO73p4azETjBUH7YlZ%2F%2BP%2FZiQ%2BOMkqH5yIlHxwqTU1neHTww9p%2B3gSZ5esYWx4zYmT5AWR3vZZT3GPwyaIEAkRAolB8nPfII0ijrnthglIwVY%2BggE%2BZP58EQt2zqMprOXRoYMcV1FqbKDHbbiT3XvbrYI8IlN89YOnzR1OAzqigiJD%2FYi2EDxNrHKV7v18Ok8%2BpC6jYm8glDjm5RNE5cvAippU%2F3Oud7jhtgiCr2Pj8CLRHtCyaRC4rVm9Qd03m%2BCoc0dkZt9khGk8lzRRt1rhL4%2F%2FYURut%2FVQGMPERb579B6URLvMIv1y2JGhr5RpDZF5vc0YCGraCjxGuygwQk6fJZ10iYl69T0yfuxz%2FLYhklovaFcDrO%2FvLPpWeTy8EhNSPUM4QSg4MMOMtr4GOqUBsnYiye9vgvFqGBd5ZGZZtQRimM169J%2Fc%2B61RjUN0F6Ceyo4SCFW9HLnnX0zxthxch9Pmz3SuzcY7mjUFidxE7Pjp1ASKwbDIhXWMJ4g2D5tBoM6KVbLk6TALBIWwHRHD3nUvg3sAlimVI9hf08pVZQxtiD6bC4YnN22cbyYzInqxE7w0fMHgubjhiMKqe8%2BMv%2FNd1v9YC0kTqd2e%2FdoTzBMbG4%2Bh&X-Amz-Signature=a40df043dec9f470fe2bf401a9ff75456361eab40f10d501993798f57bf913de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IY5JI6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCAMhihiOmFcz1XtBpj1Lg8X6mVz47DqNy%2Bu6dw1KXkPAIgQoocQqRL0k5KOIvdS3QjNUrjpuGmd4DRm0L2fSbT3gQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJvSIvvfW8vUB20WtircA3OrTxL0I9TMeWVTh9NPMqvu%2BZ5gvjZJffWyfHgMyvt6Ebb6FllHbCrDnt%2FlllHtV5wcxwN1F%2B%2FZJ0JCAjJ7FcjYqlC0NGlfEut3PnbbzcKepqRtfFcwuVJ%2BWGKGP8w94yugor3Ohu8xqK6ieVF1p%2BvEV9P5M4cMH5KV4%2F%2FVbr6EvmRG6xE0IAexWNJhd7W63iXHOQkRwEh%2FYA60jnk42a4NsZ2gwJ96y3UYFz6GxjqI7n2rJJbO73p4azETjBUH7YlZ%2F%2BP%2FZiQ%2BOMkqH5yIlHxwqTU1neHTww9p%2B3gSZ5esYWx4zYmT5AWR3vZZT3GPwyaIEAkRAolB8nPfII0ijrnthglIwVY%2BggE%2BZP58EQt2zqMprOXRoYMcV1FqbKDHbbiT3XvbrYI8IlN89YOnzR1OAzqigiJD%2FYi2EDxNrHKV7v18Ok8%2BpC6jYm8glDjm5RNE5cvAippU%2F3Oud7jhtgiCr2Pj8CLRHtCyaRC4rVm9Qd03m%2BCoc0dkZt9khGk8lzRRt1rhL4%2F%2FYURut%2FVQGMPERb579B6URLvMIv1y2JGhr5RpDZF5vc0YCGraCjxGuygwQk6fJZ10iYl69T0yfuxz%2FLYhklovaFcDrO%2FvLPpWeTy8EhNSPUM4QSg4MMOMtr4GOqUBsnYiye9vgvFqGBd5ZGZZtQRimM169J%2Fc%2B61RjUN0F6Ceyo4SCFW9HLnnX0zxthxch9Pmz3SuzcY7mjUFidxE7Pjp1ASKwbDIhXWMJ4g2D5tBoM6KVbLk6TALBIWwHRHD3nUvg3sAlimVI9hf08pVZQxtiD6bC4YnN22cbyYzInqxE7w0fMHgubjhiMKqe8%2BMv%2FNd1v9YC0kTqd2e%2FdoTzBMbG4%2Bh&X-Amz-Signature=5aa1bcd913532a30200c6b18f94391629b0f94c35189c51d630b45f9bbf6203c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
