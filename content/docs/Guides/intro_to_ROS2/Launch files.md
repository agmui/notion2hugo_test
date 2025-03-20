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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOTYVTVW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGnFFr6VVZnQe1VZZ2SjbadalZ1g20N8gpwTCUlzU2zUAiAVXExCfQ54fPbniLwYCXDg9vZ9BtuUntHrCrdcESHJQyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjDffvxptOBszvYXKtwDAYl9SgN3PNRZeELfLTNAnVYsH%2B9IIzA%2FfcSq3blhTfb0F9tsKy8%2FBAfCHWzUUyXcWNDtgqa79aBFzx1O6hhYmbAylZVbh1kzVBK1zDtghEvBgZEfg%2FZe2JA37C3%2B9bMvwCoxuFzbRWIZl%2BoWqV38%2B7Ymq%2BgYKIeQ1N%2Bw7gVRaL4zwMpTPwNkfkDY6vp5jJ2%2Fvdef8ReJO9jSqomJnRT%2FXYbWjzdUXdvfEAm66LKgMGDGnso5bId7FmZ4h7XcNH9WXUKdhvZRnMQCNf1tpTXZAiHXfga%2F0ZLgqtgQ10W1I7k0BeLpoZtRNdE%2FrJ5FNKgvYa%2FmE5PEq%2B30l07ehTaS0DxsDkpqRiTDUuk%2FOwkfpVtv%2FFG0VfCHwhYz5vnSB3Y9iX4o7rOexIOvA88ABRFAWxtfavXwBIjljkIhw2W9boHp8fxJCCEkCRrpB6ukmCus5%2Fbcgwel%2B%2FToWtfAEohoDOk%2Bs7viwtZqaRj1%2FW8ECjxBOyp00RH1%2Fcrvh1nY3flhf27HfkSTkF0Wpy71PW9Ty0iBz%2FMCutMOpWDkTXDajUV%2FnTNcLOme6SYwTUEnUlxGVCHPkn9cUvPEu3nlrqwy5y3QqBVhvdUuoRMmdLK4EvHEm7NHSdtsCRG1d9QwgOXxvgY6pgEn41lT%2FyGJ4Hu3czEw%2FlWK6Fz4JW1qHsbaXLGf9TipF5XOfdMbBMVxl%2FxmglzUsgILnTuEXV4YkfX0RCSU9A3TeCtpEzVsGcxbTcnz9XMKL8PMcJkZVC0eEPDOaf6l03DXNqy13g8qHBP3lSKF5jOKnjHMcgcwIuf0kQfklCXtwjp%2B9GpWe53sXJjgQ4S5%2BGlcYQMBUAJ2PILB14BCtuOZ4Orl%2FKNj&X-Amz-Signature=66bbe67a31160115ebf9b63b6c4ad9900b99e9789f99ea6dc096b7dba241e70f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOTYVTVW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGnFFr6VVZnQe1VZZ2SjbadalZ1g20N8gpwTCUlzU2zUAiAVXExCfQ54fPbniLwYCXDg9vZ9BtuUntHrCrdcESHJQyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjDffvxptOBszvYXKtwDAYl9SgN3PNRZeELfLTNAnVYsH%2B9IIzA%2FfcSq3blhTfb0F9tsKy8%2FBAfCHWzUUyXcWNDtgqa79aBFzx1O6hhYmbAylZVbh1kzVBK1zDtghEvBgZEfg%2FZe2JA37C3%2B9bMvwCoxuFzbRWIZl%2BoWqV38%2B7Ymq%2BgYKIeQ1N%2Bw7gVRaL4zwMpTPwNkfkDY6vp5jJ2%2Fvdef8ReJO9jSqomJnRT%2FXYbWjzdUXdvfEAm66LKgMGDGnso5bId7FmZ4h7XcNH9WXUKdhvZRnMQCNf1tpTXZAiHXfga%2F0ZLgqtgQ10W1I7k0BeLpoZtRNdE%2FrJ5FNKgvYa%2FmE5PEq%2B30l07ehTaS0DxsDkpqRiTDUuk%2FOwkfpVtv%2FFG0VfCHwhYz5vnSB3Y9iX4o7rOexIOvA88ABRFAWxtfavXwBIjljkIhw2W9boHp8fxJCCEkCRrpB6ukmCus5%2Fbcgwel%2B%2FToWtfAEohoDOk%2Bs7viwtZqaRj1%2FW8ECjxBOyp00RH1%2Fcrvh1nY3flhf27HfkSTkF0Wpy71PW9Ty0iBz%2FMCutMOpWDkTXDajUV%2FnTNcLOme6SYwTUEnUlxGVCHPkn9cUvPEu3nlrqwy5y3QqBVhvdUuoRMmdLK4EvHEm7NHSdtsCRG1d9QwgOXxvgY6pgEn41lT%2FyGJ4Hu3czEw%2FlWK6Fz4JW1qHsbaXLGf9TipF5XOfdMbBMVxl%2FxmglzUsgILnTuEXV4YkfX0RCSU9A3TeCtpEzVsGcxbTcnz9XMKL8PMcJkZVC0eEPDOaf6l03DXNqy13g8qHBP3lSKF5jOKnjHMcgcwIuf0kQfklCXtwjp%2B9GpWe53sXJjgQ4S5%2BGlcYQMBUAJ2PILB14BCtuOZ4Orl%2FKNj&X-Amz-Signature=bf3de79962cec058e1f64c3ee22a3dd3e58f60c6242fc5709db4345ce1da4359&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOTYVTVW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGnFFr6VVZnQe1VZZ2SjbadalZ1g20N8gpwTCUlzU2zUAiAVXExCfQ54fPbniLwYCXDg9vZ9BtuUntHrCrdcESHJQyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjDffvxptOBszvYXKtwDAYl9SgN3PNRZeELfLTNAnVYsH%2B9IIzA%2FfcSq3blhTfb0F9tsKy8%2FBAfCHWzUUyXcWNDtgqa79aBFzx1O6hhYmbAylZVbh1kzVBK1zDtghEvBgZEfg%2FZe2JA37C3%2B9bMvwCoxuFzbRWIZl%2BoWqV38%2B7Ymq%2BgYKIeQ1N%2Bw7gVRaL4zwMpTPwNkfkDY6vp5jJ2%2Fvdef8ReJO9jSqomJnRT%2FXYbWjzdUXdvfEAm66LKgMGDGnso5bId7FmZ4h7XcNH9WXUKdhvZRnMQCNf1tpTXZAiHXfga%2F0ZLgqtgQ10W1I7k0BeLpoZtRNdE%2FrJ5FNKgvYa%2FmE5PEq%2B30l07ehTaS0DxsDkpqRiTDUuk%2FOwkfpVtv%2FFG0VfCHwhYz5vnSB3Y9iX4o7rOexIOvA88ABRFAWxtfavXwBIjljkIhw2W9boHp8fxJCCEkCRrpB6ukmCus5%2Fbcgwel%2B%2FToWtfAEohoDOk%2Bs7viwtZqaRj1%2FW8ECjxBOyp00RH1%2Fcrvh1nY3flhf27HfkSTkF0Wpy71PW9Ty0iBz%2FMCutMOpWDkTXDajUV%2FnTNcLOme6SYwTUEnUlxGVCHPkn9cUvPEu3nlrqwy5y3QqBVhvdUuoRMmdLK4EvHEm7NHSdtsCRG1d9QwgOXxvgY6pgEn41lT%2FyGJ4Hu3czEw%2FlWK6Fz4JW1qHsbaXLGf9TipF5XOfdMbBMVxl%2FxmglzUsgILnTuEXV4YkfX0RCSU9A3TeCtpEzVsGcxbTcnz9XMKL8PMcJkZVC0eEPDOaf6l03DXNqy13g8qHBP3lSKF5jOKnjHMcgcwIuf0kQfklCXtwjp%2B9GpWe53sXJjgQ4S5%2BGlcYQMBUAJ2PILB14BCtuOZ4Orl%2FKNj&X-Amz-Signature=197ad2b54894259704a02bc019ae88d444b1f4ffbbf615f091b0d81ba435d587&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
