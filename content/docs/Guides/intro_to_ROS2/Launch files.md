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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDNF74E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLm8WjVyrKoUh3gQHnDMpd52F8QPoDpPlnzzehkiBTwIhAK29%2B0DD650MT2EzPbeq3VJrL1jNRLzkQZhG7zfmNUJfKv8DCDMQABoMNjM3NDIzMTgzODA1Igz3GiWMF%2Bnj%2BzXIz60q3ANoy4a6s8v9Dui%2BXmrlIEVSg3tsBrlkZSBugYfbQP3xCGD%2Ba2Q7EE8BsZsdrK67POvNongW%2F1YM12FwRaZy2qV4pOMljeqcEFcjiKVX1H3zVJEYi8KDEDPJ2WYChdfe%2FUQYjIiP5sxsfmKniBs6ucZjEtmI%2FVY3xywrrfyHJ64qChvVAAW%2FHSUo7bOW9ygKVLZZi3iq7lhdNnLFBkhwazRIzAPdSw8AoqMVkdC5At8VPKbxkklzImt6UCM3TsMLaTyUx%2BvLKwoIH3yS8mBPhMBiSnsXk35tOGK73r2XghmVlUdDDWPKhjCvaqj0VMHNI8B4cs%2FmBGAwyVEFOJaZGyruYISCreneFzoEGl2sNd%2FnuRODTMim%2Fd1PZ2u9TXdMtZcy5iFq0pdXWuKuK6ErZbXyiUyUiDWtsUisAdEe4P50QkZ%2FSm8GBEyeRqU%2FOkGkyXYxjH%2B41nvO%2B0xRzJBA%2BCQvnycoz0gvD%2Bt3nwROsuOYHZDpd89BqYx0Vl1tCrwDukrgC72WGq6DwLBVcD5dV28I7SsvpBRLC6thDOJip94U8NhCbQEZbsDkH5b%2FOCbfnO94rEl2FDulVRnDU8lfpdzJnk312loObJMoa0trsc2MXmRcMcaeHQhQPivtqTDszae%2BBjqkAclYRGZ9QEf40DLuV1n7NQc5v1GbAhu45y05OZ1CYiheC7raGauM0T1MAuvcVg%2FljkBAUoWvSNl3WneASysQqR8geRpHDYnoWSbdFZ6r0nPxSUFoC3pSW3dVznkUBpMqRpQkDV8uVBYyaQi59OIm%2FO3FMmCOgeabtUvL1fJrC12JnZx1WFyJgm1vmvnvrmzN2IDBsBELkt8Ye5FdtxWgbb0BnYCI&X-Amz-Signature=71cda4a3789f0b716feac81d0dc452df0927dc95d4e7369245a5ed0da22aa88c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDNF74E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLm8WjVyrKoUh3gQHnDMpd52F8QPoDpPlnzzehkiBTwIhAK29%2B0DD650MT2EzPbeq3VJrL1jNRLzkQZhG7zfmNUJfKv8DCDMQABoMNjM3NDIzMTgzODA1Igz3GiWMF%2Bnj%2BzXIz60q3ANoy4a6s8v9Dui%2BXmrlIEVSg3tsBrlkZSBugYfbQP3xCGD%2Ba2Q7EE8BsZsdrK67POvNongW%2F1YM12FwRaZy2qV4pOMljeqcEFcjiKVX1H3zVJEYi8KDEDPJ2WYChdfe%2FUQYjIiP5sxsfmKniBs6ucZjEtmI%2FVY3xywrrfyHJ64qChvVAAW%2FHSUo7bOW9ygKVLZZi3iq7lhdNnLFBkhwazRIzAPdSw8AoqMVkdC5At8VPKbxkklzImt6UCM3TsMLaTyUx%2BvLKwoIH3yS8mBPhMBiSnsXk35tOGK73r2XghmVlUdDDWPKhjCvaqj0VMHNI8B4cs%2FmBGAwyVEFOJaZGyruYISCreneFzoEGl2sNd%2FnuRODTMim%2Fd1PZ2u9TXdMtZcy5iFq0pdXWuKuK6ErZbXyiUyUiDWtsUisAdEe4P50QkZ%2FSm8GBEyeRqU%2FOkGkyXYxjH%2B41nvO%2B0xRzJBA%2BCQvnycoz0gvD%2Bt3nwROsuOYHZDpd89BqYx0Vl1tCrwDukrgC72WGq6DwLBVcD5dV28I7SsvpBRLC6thDOJip94U8NhCbQEZbsDkH5b%2FOCbfnO94rEl2FDulVRnDU8lfpdzJnk312loObJMoa0trsc2MXmRcMcaeHQhQPivtqTDszae%2BBjqkAclYRGZ9QEf40DLuV1n7NQc5v1GbAhu45y05OZ1CYiheC7raGauM0T1MAuvcVg%2FljkBAUoWvSNl3WneASysQqR8geRpHDYnoWSbdFZ6r0nPxSUFoC3pSW3dVznkUBpMqRpQkDV8uVBYyaQi59OIm%2FO3FMmCOgeabtUvL1fJrC12JnZx1WFyJgm1vmvnvrmzN2IDBsBELkt8Ye5FdtxWgbb0BnYCI&X-Amz-Signature=851f535a0fd98ddd7b5711fdee67e8a8759f29be853f80eace29bd132f387bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDNF74E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLm8WjVyrKoUh3gQHnDMpd52F8QPoDpPlnzzehkiBTwIhAK29%2B0DD650MT2EzPbeq3VJrL1jNRLzkQZhG7zfmNUJfKv8DCDMQABoMNjM3NDIzMTgzODA1Igz3GiWMF%2Bnj%2BzXIz60q3ANoy4a6s8v9Dui%2BXmrlIEVSg3tsBrlkZSBugYfbQP3xCGD%2Ba2Q7EE8BsZsdrK67POvNongW%2F1YM12FwRaZy2qV4pOMljeqcEFcjiKVX1H3zVJEYi8KDEDPJ2WYChdfe%2FUQYjIiP5sxsfmKniBs6ucZjEtmI%2FVY3xywrrfyHJ64qChvVAAW%2FHSUo7bOW9ygKVLZZi3iq7lhdNnLFBkhwazRIzAPdSw8AoqMVkdC5At8VPKbxkklzImt6UCM3TsMLaTyUx%2BvLKwoIH3yS8mBPhMBiSnsXk35tOGK73r2XghmVlUdDDWPKhjCvaqj0VMHNI8B4cs%2FmBGAwyVEFOJaZGyruYISCreneFzoEGl2sNd%2FnuRODTMim%2Fd1PZ2u9TXdMtZcy5iFq0pdXWuKuK6ErZbXyiUyUiDWtsUisAdEe4P50QkZ%2FSm8GBEyeRqU%2FOkGkyXYxjH%2B41nvO%2B0xRzJBA%2BCQvnycoz0gvD%2Bt3nwROsuOYHZDpd89BqYx0Vl1tCrwDukrgC72WGq6DwLBVcD5dV28I7SsvpBRLC6thDOJip94U8NhCbQEZbsDkH5b%2FOCbfnO94rEl2FDulVRnDU8lfpdzJnk312loObJMoa0trsc2MXmRcMcaeHQhQPivtqTDszae%2BBjqkAclYRGZ9QEf40DLuV1n7NQc5v1GbAhu45y05OZ1CYiheC7raGauM0T1MAuvcVg%2FljkBAUoWvSNl3WneASysQqR8geRpHDYnoWSbdFZ6r0nPxSUFoC3pSW3dVznkUBpMqRpQkDV8uVBYyaQi59OIm%2FO3FMmCOgeabtUvL1fJrC12JnZx1WFyJgm1vmvnvrmzN2IDBsBELkt8Ye5FdtxWgbb0BnYCI&X-Amz-Signature=e73c590b3f8a3c4b219370883a1808646e442da071b074c9beb1c15bf68dde59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
