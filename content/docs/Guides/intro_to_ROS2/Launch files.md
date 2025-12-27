---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NRYEBJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3OPDw%2B8Fw94hK%2Fk1f3ZoKBKiz8DbzQYF8SgGnnMiihwIgNqP21imXWM%2BR5Y7TiPLj357V9y%2FTgvRDCzT4K4IpcqEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BtzGmV7ggkGh%2FP2SrcA79lg1mQxli9U0xRcRMk4IN8IR%2FBNhLbx%2F%2BPPKMqG6k4bTOv7jAnkWQg03Uxsdqo4cISdN8clyrTCYCaPOuROJ%2B9hMOlZkKTo99dY6vCxWwR%2BGuCPArN7Ty3GmReOfIbTy%2BgJOzepHDR0k86HfjGT%2BTVXy5Brs9zL8mfPXlAM1cgde94cmDNEeJUiiXhEWkyhlpamEPWMK9FiJ1oCZmRJCVYk14qAs1FXQwTvGpTzebDOhykyLX5IwMlOQsb6aNSKC9wc32wafK9TGGAGVtZH8PDaXdNWDVV8kjJlHfYT8dQslU0smggTxNc%2FMxp3%2B91FT8%2F4KbVSW%2B%2Bgb4CIflu3UVjMF5qrc%2BtunU0B63IVTLLVCe4bqtcQKRCLYvGx5UN8xoU3zO794v%2Fd1XB9xvQ4tClHzcWVgxlMoYgbHH6PlWOm78MbDqHzfFJLad1WZkxixYolskyGOxxuUoiR3DWVQzikvkfCkuWfLumXDqhRyaCLaw7XQ3eISEJ3vkcjy3Bh3%2FYbNoT9gvztkRmpxmAHVF6rNu%2FaC11xXDAjiimQ7FTPEZkDB4gaT4Wmj86hs6P8chi0%2FM%2FVV%2F%2FKl9IgO1KBo0kspRCngeDEQ2%2FP8%2BCcogK%2FPixUb1xksFyS9ghMLXjvMoGOqUB%2BLTbgX%2FIhzXX%2F%2BxOoT3i47%2FxbeopQZBvVaisMwZ11Yc%2FUcpdZnxL3pFfhzZfstFvKVy6hyyc8WF3d4UMDNn1xvjRfWkL6tkTdAL5zOmCpbAFH0RIRgFMGo7QzVaWvp%2FGTwckzWosbK%2FjE3M3obF6Rqh4jnJslUCSI9KYDWv8FxFaQvzsMZoEgfyuEyJr6ZJKsvfTsUNZNndSIlKDSHieNOICpehx&X-Amz-Signature=7172d949ef698454a5b9bbc7429a694c77de0df5cefeb109fe1b05646f564cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NRYEBJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3OPDw%2B8Fw94hK%2Fk1f3ZoKBKiz8DbzQYF8SgGnnMiihwIgNqP21imXWM%2BR5Y7TiPLj357V9y%2FTgvRDCzT4K4IpcqEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BtzGmV7ggkGh%2FP2SrcA79lg1mQxli9U0xRcRMk4IN8IR%2FBNhLbx%2F%2BPPKMqG6k4bTOv7jAnkWQg03Uxsdqo4cISdN8clyrTCYCaPOuROJ%2B9hMOlZkKTo99dY6vCxWwR%2BGuCPArN7Ty3GmReOfIbTy%2BgJOzepHDR0k86HfjGT%2BTVXy5Brs9zL8mfPXlAM1cgde94cmDNEeJUiiXhEWkyhlpamEPWMK9FiJ1oCZmRJCVYk14qAs1FXQwTvGpTzebDOhykyLX5IwMlOQsb6aNSKC9wc32wafK9TGGAGVtZH8PDaXdNWDVV8kjJlHfYT8dQslU0smggTxNc%2FMxp3%2B91FT8%2F4KbVSW%2B%2Bgb4CIflu3UVjMF5qrc%2BtunU0B63IVTLLVCe4bqtcQKRCLYvGx5UN8xoU3zO794v%2Fd1XB9xvQ4tClHzcWVgxlMoYgbHH6PlWOm78MbDqHzfFJLad1WZkxixYolskyGOxxuUoiR3DWVQzikvkfCkuWfLumXDqhRyaCLaw7XQ3eISEJ3vkcjy3Bh3%2FYbNoT9gvztkRmpxmAHVF6rNu%2FaC11xXDAjiimQ7FTPEZkDB4gaT4Wmj86hs6P8chi0%2FM%2FVV%2F%2FKl9IgO1KBo0kspRCngeDEQ2%2FP8%2BCcogK%2FPixUb1xksFyS9ghMLXjvMoGOqUB%2BLTbgX%2FIhzXX%2F%2BxOoT3i47%2FxbeopQZBvVaisMwZ11Yc%2FUcpdZnxL3pFfhzZfstFvKVy6hyyc8WF3d4UMDNn1xvjRfWkL6tkTdAL5zOmCpbAFH0RIRgFMGo7QzVaWvp%2FGTwckzWosbK%2FjE3M3obF6Rqh4jnJslUCSI9KYDWv8FxFaQvzsMZoEgfyuEyJr6ZJKsvfTsUNZNndSIlKDSHieNOICpehx&X-Amz-Signature=03e27455c9b82d77f34cf79a5e12f974558274be135a64bed2a4dd36c133220b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NRYEBJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3OPDw%2B8Fw94hK%2Fk1f3ZoKBKiz8DbzQYF8SgGnnMiihwIgNqP21imXWM%2BR5Y7TiPLj357V9y%2FTgvRDCzT4K4IpcqEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BtzGmV7ggkGh%2FP2SrcA79lg1mQxli9U0xRcRMk4IN8IR%2FBNhLbx%2F%2BPPKMqG6k4bTOv7jAnkWQg03Uxsdqo4cISdN8clyrTCYCaPOuROJ%2B9hMOlZkKTo99dY6vCxWwR%2BGuCPArN7Ty3GmReOfIbTy%2BgJOzepHDR0k86HfjGT%2BTVXy5Brs9zL8mfPXlAM1cgde94cmDNEeJUiiXhEWkyhlpamEPWMK9FiJ1oCZmRJCVYk14qAs1FXQwTvGpTzebDOhykyLX5IwMlOQsb6aNSKC9wc32wafK9TGGAGVtZH8PDaXdNWDVV8kjJlHfYT8dQslU0smggTxNc%2FMxp3%2B91FT8%2F4KbVSW%2B%2Bgb4CIflu3UVjMF5qrc%2BtunU0B63IVTLLVCe4bqtcQKRCLYvGx5UN8xoU3zO794v%2Fd1XB9xvQ4tClHzcWVgxlMoYgbHH6PlWOm78MbDqHzfFJLad1WZkxixYolskyGOxxuUoiR3DWVQzikvkfCkuWfLumXDqhRyaCLaw7XQ3eISEJ3vkcjy3Bh3%2FYbNoT9gvztkRmpxmAHVF6rNu%2FaC11xXDAjiimQ7FTPEZkDB4gaT4Wmj86hs6P8chi0%2FM%2FVV%2F%2FKl9IgO1KBo0kspRCngeDEQ2%2FP8%2BCcogK%2FPixUb1xksFyS9ghMLXjvMoGOqUB%2BLTbgX%2FIhzXX%2F%2BxOoT3i47%2FxbeopQZBvVaisMwZ11Yc%2FUcpdZnxL3pFfhzZfstFvKVy6hyyc8WF3d4UMDNn1xvjRfWkL6tkTdAL5zOmCpbAFH0RIRgFMGo7QzVaWvp%2FGTwckzWosbK%2FjE3M3obF6Rqh4jnJslUCSI9KYDWv8FxFaQvzsMZoEgfyuEyJr6ZJKsvfTsUNZNndSIlKDSHieNOICpehx&X-Amz-Signature=806aeb1b6b51276b3d67857bbd05d3060cbf1a7eeac07edc5ffe9074567e86ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
