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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVDZFI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BrvqtW%2FRZS9MOp1MqzpngB77MN1esPhW61OuPFQ24LAiEAoOlARcK7KwdyZnmtYVaM1nIW4PsZe0KGB0ZXpG4c25kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHfl1SPU3Gx50yLPCrcA1ldqEt%2Fhe%2FCudEn1fuf0R2%2FqMU5pGvHxNrhh94M7TP2i0yN4CoynlDEXi9JsXdUzZLfGMHKz7adfYXQxui8bCVUpFa4%2BuYNsc0Rn2if1MR93cMNzfa3vs%2B4oDkRxPAu0nuh3bWR6dADyL%2FgFKwvdLv98nCTIrmgy0jHhcRn82HFQuHNUXrlNNjSIHh4LXQtvk9DyWZ02wC2eagajWF0EXUP0SoTPhkd3koebJy31ocgbnf%2FItoQrnhlx%2FO1LyvloUktOyvTtlVvGOEQCkBE6BrMxXfoDHfiUs1dn4Cua0orrdhx0qO%2BXwvXwdx2qleMazmwJhdO47oYS7BtyD2o%2BEXjK1BTlpPVOCv7VCiXKJqMJt4GyC3dP4bTgxEBN5jGTMD0b6GEWK8YKbJykXtVGUL749GKl6mNJpm5%2BGFC%2B%2BFCvyq6mXeZ95g0QRMk9zdERUq8rgLOnK5ru8RrtebkmcuGvxD1gHCInxGgOGlmBWFm8uPmucoExaBqpyqECp85Qa%2FIuxPNYRir1RRi1DbZTdHhNiQWNK2lzfR7H%2FUHZyxy%2BhhKh0xHDG01pkJFeuX09U1p4rPmJ9R5E4RXMraKrOBB054LOGoIETDshOhKYhPZtwezUQ5gPFBp03w7MMOChcMGOqUBGvujjrbEWL7jb50gKstBsOnu78tzEokvAiSPjJbB5PvKE61AuOSroTAeJZ%2FyvJ3PBfODxJJagylDPIJ0qkk3Rr2iKb9xEQ5R7lxGiVK5xwdYV9iGtw8yVWqyowcykZhlrHvTeoOH3tkc7fZUua24TkmdDtXr0q9TWJGHcI%2Fa2fqUlHW5rFddHBeyJ6dXPHdfj9Ex6TOX9tljtQLFYZOnJoHqBxu%2F&X-Amz-Signature=9b9d9e643ec68d9f40521495962d2f7a82725a276c3fa0e0849fc3e27aec8a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVDZFI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BrvqtW%2FRZS9MOp1MqzpngB77MN1esPhW61OuPFQ24LAiEAoOlARcK7KwdyZnmtYVaM1nIW4PsZe0KGB0ZXpG4c25kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHfl1SPU3Gx50yLPCrcA1ldqEt%2Fhe%2FCudEn1fuf0R2%2FqMU5pGvHxNrhh94M7TP2i0yN4CoynlDEXi9JsXdUzZLfGMHKz7adfYXQxui8bCVUpFa4%2BuYNsc0Rn2if1MR93cMNzfa3vs%2B4oDkRxPAu0nuh3bWR6dADyL%2FgFKwvdLv98nCTIrmgy0jHhcRn82HFQuHNUXrlNNjSIHh4LXQtvk9DyWZ02wC2eagajWF0EXUP0SoTPhkd3koebJy31ocgbnf%2FItoQrnhlx%2FO1LyvloUktOyvTtlVvGOEQCkBE6BrMxXfoDHfiUs1dn4Cua0orrdhx0qO%2BXwvXwdx2qleMazmwJhdO47oYS7BtyD2o%2BEXjK1BTlpPVOCv7VCiXKJqMJt4GyC3dP4bTgxEBN5jGTMD0b6GEWK8YKbJykXtVGUL749GKl6mNJpm5%2BGFC%2B%2BFCvyq6mXeZ95g0QRMk9zdERUq8rgLOnK5ru8RrtebkmcuGvxD1gHCInxGgOGlmBWFm8uPmucoExaBqpyqECp85Qa%2FIuxPNYRir1RRi1DbZTdHhNiQWNK2lzfR7H%2FUHZyxy%2BhhKh0xHDG01pkJFeuX09U1p4rPmJ9R5E4RXMraKrOBB054LOGoIETDshOhKYhPZtwezUQ5gPFBp03w7MMOChcMGOqUBGvujjrbEWL7jb50gKstBsOnu78tzEokvAiSPjJbB5PvKE61AuOSroTAeJZ%2FyvJ3PBfODxJJagylDPIJ0qkk3Rr2iKb9xEQ5R7lxGiVK5xwdYV9iGtw8yVWqyowcykZhlrHvTeoOH3tkc7fZUua24TkmdDtXr0q9TWJGHcI%2Fa2fqUlHW5rFddHBeyJ6dXPHdfj9Ex6TOX9tljtQLFYZOnJoHqBxu%2F&X-Amz-Signature=df58a5255adf527b2eb26aacf6d51c40b4589a5c7dcff3cd23b16b2a10fa2909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVDZFI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BrvqtW%2FRZS9MOp1MqzpngB77MN1esPhW61OuPFQ24LAiEAoOlARcK7KwdyZnmtYVaM1nIW4PsZe0KGB0ZXpG4c25kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHfl1SPU3Gx50yLPCrcA1ldqEt%2Fhe%2FCudEn1fuf0R2%2FqMU5pGvHxNrhh94M7TP2i0yN4CoynlDEXi9JsXdUzZLfGMHKz7adfYXQxui8bCVUpFa4%2BuYNsc0Rn2if1MR93cMNzfa3vs%2B4oDkRxPAu0nuh3bWR6dADyL%2FgFKwvdLv98nCTIrmgy0jHhcRn82HFQuHNUXrlNNjSIHh4LXQtvk9DyWZ02wC2eagajWF0EXUP0SoTPhkd3koebJy31ocgbnf%2FItoQrnhlx%2FO1LyvloUktOyvTtlVvGOEQCkBE6BrMxXfoDHfiUs1dn4Cua0orrdhx0qO%2BXwvXwdx2qleMazmwJhdO47oYS7BtyD2o%2BEXjK1BTlpPVOCv7VCiXKJqMJt4GyC3dP4bTgxEBN5jGTMD0b6GEWK8YKbJykXtVGUL749GKl6mNJpm5%2BGFC%2B%2BFCvyq6mXeZ95g0QRMk9zdERUq8rgLOnK5ru8RrtebkmcuGvxD1gHCInxGgOGlmBWFm8uPmucoExaBqpyqECp85Qa%2FIuxPNYRir1RRi1DbZTdHhNiQWNK2lzfR7H%2FUHZyxy%2BhhKh0xHDG01pkJFeuX09U1p4rPmJ9R5E4RXMraKrOBB054LOGoIETDshOhKYhPZtwezUQ5gPFBp03w7MMOChcMGOqUBGvujjrbEWL7jb50gKstBsOnu78tzEokvAiSPjJbB5PvKE61AuOSroTAeJZ%2FyvJ3PBfODxJJagylDPIJ0qkk3Rr2iKb9xEQ5R7lxGiVK5xwdYV9iGtw8yVWqyowcykZhlrHvTeoOH3tkc7fZUua24TkmdDtXr0q9TWJGHcI%2Fa2fqUlHW5rFddHBeyJ6dXPHdfj9Ex6TOX9tljtQLFYZOnJoHqBxu%2F&X-Amz-Signature=eecd66b10326996dc3482df438e24c5a6122d809bce175caa9db489adddb7d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
