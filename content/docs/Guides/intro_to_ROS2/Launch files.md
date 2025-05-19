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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKHESZK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZOzKDxC8AqlUMIpP3bY%2FFDwsey9jZqpEdWoFoHsR6CAiBFj5q4I%2BAzlbVFLufDd%2B512cFwify4GLIvn5vGA9yOEyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML6BZ1XJeBk163MOIKtwDth6D2M1Ryc6gIOeya6R9u0HvxHcSfXI2NK1aarZnyeOS%2FfjCxqPSllpC3HSeYQgoDkmpbUVU80qR5f3qrXYxoVeyMcfwr0tH6GLLDeWSI%2Bn3K%2F2RSG4V8TrsmIrSGC%2BMEOdGz0e5g6b6%2BSlSYw5TE9bwimTgVYWnLlx7tqa6bJjS%2BB8enhKe4%2B7HrO6A3KWwZw9oiPDadpblCs7MvOBMNxEnEaShtjSC47v%2BnO3sOK36Tw9CjYPE2l9VxIdKOu2PeBAVUrGNvdynqA1X2nCKBIVMHjLYxTP5r7CfgDEhYoBlagtjXNjYyGZauKCt0DJqYvZMnsQfgXdGnoEacnHHqcUThh1Sp0Q%2BBnGLwvgHoAzYBrFAnzBzEB%2B8ICsaHjRykUc1f59Yvbv10E0uYe19zvfeFePd%2BmRYKk1H8%2FauPB6ZF7DacMYqVkID8dp9drH6qYYLh%2FecPndAMLwAVqhREzSTNTqrEtvbBitOEICpwqmKsMXcDj3emsGLuvIf44YOFpMfCMIUSXeZ%2F6XErKISGDmG2pYJTy2IX9yHllnCI1P3YDmbOCQjqyavPLYfyYt4GE8NGJWABNZPZtgA8UklyjhipamVpCzaEghIIOgKg3g6nxOdn%2FCAUc9OUS4wzOypwQY6pgFkiHbTZQZLdD7MXotFwos2S5BQGlZsRvgKrTsw6Pd8Ah%2Fs77S%2FcEvZqiR%2BA2m7VHVOmZ8SYP6dSgxIGDnX4HoHpALh45u9NQGffnYwk6haCwbHIXBety1ot3y3WND56opxYcFw1%2BaHSfORpy5BAB63pN03xpHOrez58aSpRN2FMHcDBZIma%2F12m2cBTn2vchJ0yo9D3G3NJOuVIQq6mnyRdboy36Xe&X-Amz-Signature=b34051621f4f0bf88a89bf128c1026a16f1cb7d0d785b0fe38ab5a9f4c6be66a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKHESZK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZOzKDxC8AqlUMIpP3bY%2FFDwsey9jZqpEdWoFoHsR6CAiBFj5q4I%2BAzlbVFLufDd%2B512cFwify4GLIvn5vGA9yOEyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML6BZ1XJeBk163MOIKtwDth6D2M1Ryc6gIOeya6R9u0HvxHcSfXI2NK1aarZnyeOS%2FfjCxqPSllpC3HSeYQgoDkmpbUVU80qR5f3qrXYxoVeyMcfwr0tH6GLLDeWSI%2Bn3K%2F2RSG4V8TrsmIrSGC%2BMEOdGz0e5g6b6%2BSlSYw5TE9bwimTgVYWnLlx7tqa6bJjS%2BB8enhKe4%2B7HrO6A3KWwZw9oiPDadpblCs7MvOBMNxEnEaShtjSC47v%2BnO3sOK36Tw9CjYPE2l9VxIdKOu2PeBAVUrGNvdynqA1X2nCKBIVMHjLYxTP5r7CfgDEhYoBlagtjXNjYyGZauKCt0DJqYvZMnsQfgXdGnoEacnHHqcUThh1Sp0Q%2BBnGLwvgHoAzYBrFAnzBzEB%2B8ICsaHjRykUc1f59Yvbv10E0uYe19zvfeFePd%2BmRYKk1H8%2FauPB6ZF7DacMYqVkID8dp9drH6qYYLh%2FecPndAMLwAVqhREzSTNTqrEtvbBitOEICpwqmKsMXcDj3emsGLuvIf44YOFpMfCMIUSXeZ%2F6XErKISGDmG2pYJTy2IX9yHllnCI1P3YDmbOCQjqyavPLYfyYt4GE8NGJWABNZPZtgA8UklyjhipamVpCzaEghIIOgKg3g6nxOdn%2FCAUc9OUS4wzOypwQY6pgFkiHbTZQZLdD7MXotFwos2S5BQGlZsRvgKrTsw6Pd8Ah%2Fs77S%2FcEvZqiR%2BA2m7VHVOmZ8SYP6dSgxIGDnX4HoHpALh45u9NQGffnYwk6haCwbHIXBety1ot3y3WND56opxYcFw1%2BaHSfORpy5BAB63pN03xpHOrez58aSpRN2FMHcDBZIma%2F12m2cBTn2vchJ0yo9D3G3NJOuVIQq6mnyRdboy36Xe&X-Amz-Signature=f84d61396a0333eb84e148a58997921cc637d05dc5d2b0805900c0f4ab6a248f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKHESZK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZOzKDxC8AqlUMIpP3bY%2FFDwsey9jZqpEdWoFoHsR6CAiBFj5q4I%2BAzlbVFLufDd%2B512cFwify4GLIvn5vGA9yOEyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML6BZ1XJeBk163MOIKtwDth6D2M1Ryc6gIOeya6R9u0HvxHcSfXI2NK1aarZnyeOS%2FfjCxqPSllpC3HSeYQgoDkmpbUVU80qR5f3qrXYxoVeyMcfwr0tH6GLLDeWSI%2Bn3K%2F2RSG4V8TrsmIrSGC%2BMEOdGz0e5g6b6%2BSlSYw5TE9bwimTgVYWnLlx7tqa6bJjS%2BB8enhKe4%2B7HrO6A3KWwZw9oiPDadpblCs7MvOBMNxEnEaShtjSC47v%2BnO3sOK36Tw9CjYPE2l9VxIdKOu2PeBAVUrGNvdynqA1X2nCKBIVMHjLYxTP5r7CfgDEhYoBlagtjXNjYyGZauKCt0DJqYvZMnsQfgXdGnoEacnHHqcUThh1Sp0Q%2BBnGLwvgHoAzYBrFAnzBzEB%2B8ICsaHjRykUc1f59Yvbv10E0uYe19zvfeFePd%2BmRYKk1H8%2FauPB6ZF7DacMYqVkID8dp9drH6qYYLh%2FecPndAMLwAVqhREzSTNTqrEtvbBitOEICpwqmKsMXcDj3emsGLuvIf44YOFpMfCMIUSXeZ%2F6XErKISGDmG2pYJTy2IX9yHllnCI1P3YDmbOCQjqyavPLYfyYt4GE8NGJWABNZPZtgA8UklyjhipamVpCzaEghIIOgKg3g6nxOdn%2FCAUc9OUS4wzOypwQY6pgFkiHbTZQZLdD7MXotFwos2S5BQGlZsRvgKrTsw6Pd8Ah%2Fs77S%2FcEvZqiR%2BA2m7VHVOmZ8SYP6dSgxIGDnX4HoHpALh45u9NQGffnYwk6haCwbHIXBety1ot3y3WND56opxYcFw1%2BaHSfORpy5BAB63pN03xpHOrez58aSpRN2FMHcDBZIma%2F12m2cBTn2vchJ0yo9D3G3NJOuVIQq6mnyRdboy36Xe&X-Amz-Signature=d520f4b57d906fc546fa1bdc1d709d266c8d9cfe5d846c7e6e10967f730af20c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
