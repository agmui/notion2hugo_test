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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62QAP4D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAO4na6SsZQvcX1JIvacaOa%2BVAvR93BCAMpCLaY%2BvMWqAiARZxg5ibOkgEelwEeQLet6LkSJPFnj7vkdrAyzIXt%2BpSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMVUpTeHV%2F3tM3zZFFKtwDCNlgN3Cdsvpbbb7qI%2B9fzLcQ3TomU5yFlQ6rBRD3BBikkYjWVu6Rmb2f%2FbHSbtX02k5FNMgBCV5I%2Bsf97O7BrInv7BGaFgUpUl5ztLEnEoLzYniKKGX3E2VmwBREgL8Bs65fjGcxtxf9XAjYxke0JfcH2fqcdEu4Qj9q6klh88nm21g1I4sY6U1JgMmMYTJ%2B5AtZwSKY1%2FRF4vEFQK5XkagiUtiZ4oTtn%2BwfAyoS7GaamJn2S1VWllBWmDJJCfabo%2BWOsK%2Bt%2FgGKllVgBu%2FXqTxgm4bcJd6WQEhqFO57i0YgufNm7yeJbQgxV%2FlgIRu0DLwqIuy%2FB1d0ACovmG3J%2FNnHV04C0gv7BxxORJssKnn5UalXqwYzqArFrcSJtPeIcsvCc8tYPw0V3YJgTeEStJmzZzmxT0TVOI%2BvdgFOut7i7k5j8NIPVhHlAlE88pbnLTib1ExKHJa9%2FcWJIdjXV60UtTOIomo4fT63ngHYwyqEYFoj%2BYf0LnDi%2Fiu2U8zUNTgiCMcr6f5Mj7HdfYepHiifU5PlpEr5%2By7o7k7uhPFP%2BYRHdPYltuHeMEXI8VxhBAXKF9Wp%2BB%2FYbzjNRtW3QpkaYWVJoQlqA9gaVIW7kUf7P6PGBYQzBgbxWtcw8oqhvwY6pgE4x0VoNcoEj%2BP%2BXOzTE8spit6P69oJ3J%2BGN4d9vypg6KCX51EXOp6TN0z16XnSIltPfSIHZvLGwmE0m5bbuW%2FPffusPOPKob85RGfXmtWR0XWdxV6TqIcm3QZNNbyiLHQit7b0uuNVPTQvmRhzAt6xMP4ec9sxFqivlE%2BkPPdy1sni%2BYwLrvzXACvu5EUdDrnYwzqZNx%2FTCxkQCXdaTBC0S8965Lyy&X-Amz-Signature=84ac91f250b943488c176a5e5ca950ed965f4b780b45d52c877b4ff2825ea508&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62QAP4D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAO4na6SsZQvcX1JIvacaOa%2BVAvR93BCAMpCLaY%2BvMWqAiARZxg5ibOkgEelwEeQLet6LkSJPFnj7vkdrAyzIXt%2BpSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMVUpTeHV%2F3tM3zZFFKtwDCNlgN3Cdsvpbbb7qI%2B9fzLcQ3TomU5yFlQ6rBRD3BBikkYjWVu6Rmb2f%2FbHSbtX02k5FNMgBCV5I%2Bsf97O7BrInv7BGaFgUpUl5ztLEnEoLzYniKKGX3E2VmwBREgL8Bs65fjGcxtxf9XAjYxke0JfcH2fqcdEu4Qj9q6klh88nm21g1I4sY6U1JgMmMYTJ%2B5AtZwSKY1%2FRF4vEFQK5XkagiUtiZ4oTtn%2BwfAyoS7GaamJn2S1VWllBWmDJJCfabo%2BWOsK%2Bt%2FgGKllVgBu%2FXqTxgm4bcJd6WQEhqFO57i0YgufNm7yeJbQgxV%2FlgIRu0DLwqIuy%2FB1d0ACovmG3J%2FNnHV04C0gv7BxxORJssKnn5UalXqwYzqArFrcSJtPeIcsvCc8tYPw0V3YJgTeEStJmzZzmxT0TVOI%2BvdgFOut7i7k5j8NIPVhHlAlE88pbnLTib1ExKHJa9%2FcWJIdjXV60UtTOIomo4fT63ngHYwyqEYFoj%2BYf0LnDi%2Fiu2U8zUNTgiCMcr6f5Mj7HdfYepHiifU5PlpEr5%2By7o7k7uhPFP%2BYRHdPYltuHeMEXI8VxhBAXKF9Wp%2BB%2FYbzjNRtW3QpkaYWVJoQlqA9gaVIW7kUf7P6PGBYQzBgbxWtcw8oqhvwY6pgE4x0VoNcoEj%2BP%2BXOzTE8spit6P69oJ3J%2BGN4d9vypg6KCX51EXOp6TN0z16XnSIltPfSIHZvLGwmE0m5bbuW%2FPffusPOPKob85RGfXmtWR0XWdxV6TqIcm3QZNNbyiLHQit7b0uuNVPTQvmRhzAt6xMP4ec9sxFqivlE%2BkPPdy1sni%2BYwLrvzXACvu5EUdDrnYwzqZNx%2FTCxkQCXdaTBC0S8965Lyy&X-Amz-Signature=588ab28d5da4d0a652e5d052abe587cfd2c1422f932ee4fc9275da56fa9f157e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62QAP4D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAO4na6SsZQvcX1JIvacaOa%2BVAvR93BCAMpCLaY%2BvMWqAiARZxg5ibOkgEelwEeQLet6LkSJPFnj7vkdrAyzIXt%2BpSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMVUpTeHV%2F3tM3zZFFKtwDCNlgN3Cdsvpbbb7qI%2B9fzLcQ3TomU5yFlQ6rBRD3BBikkYjWVu6Rmb2f%2FbHSbtX02k5FNMgBCV5I%2Bsf97O7BrInv7BGaFgUpUl5ztLEnEoLzYniKKGX3E2VmwBREgL8Bs65fjGcxtxf9XAjYxke0JfcH2fqcdEu4Qj9q6klh88nm21g1I4sY6U1JgMmMYTJ%2B5AtZwSKY1%2FRF4vEFQK5XkagiUtiZ4oTtn%2BwfAyoS7GaamJn2S1VWllBWmDJJCfabo%2BWOsK%2Bt%2FgGKllVgBu%2FXqTxgm4bcJd6WQEhqFO57i0YgufNm7yeJbQgxV%2FlgIRu0DLwqIuy%2FB1d0ACovmG3J%2FNnHV04C0gv7BxxORJssKnn5UalXqwYzqArFrcSJtPeIcsvCc8tYPw0V3YJgTeEStJmzZzmxT0TVOI%2BvdgFOut7i7k5j8NIPVhHlAlE88pbnLTib1ExKHJa9%2FcWJIdjXV60UtTOIomo4fT63ngHYwyqEYFoj%2BYf0LnDi%2Fiu2U8zUNTgiCMcr6f5Mj7HdfYepHiifU5PlpEr5%2By7o7k7uhPFP%2BYRHdPYltuHeMEXI8VxhBAXKF9Wp%2BB%2FYbzjNRtW3QpkaYWVJoQlqA9gaVIW7kUf7P6PGBYQzBgbxWtcw8oqhvwY6pgE4x0VoNcoEj%2BP%2BXOzTE8spit6P69oJ3J%2BGN4d9vypg6KCX51EXOp6TN0z16XnSIltPfSIHZvLGwmE0m5bbuW%2FPffusPOPKob85RGfXmtWR0XWdxV6TqIcm3QZNNbyiLHQit7b0uuNVPTQvmRhzAt6xMP4ec9sxFqivlE%2BkPPdy1sni%2BYwLrvzXACvu5EUdDrnYwzqZNx%2FTCxkQCXdaTBC0S8965Lyy&X-Amz-Signature=f1ca150ba773d402a60199ab429dc53027d2ca0d69f4c924d8cc2dbf84aa77dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
