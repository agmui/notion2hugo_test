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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNKKWDC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGSP3WcQOf7z5cf7F9dx8y19dfEYi%2BqWFZxoxN3n3mPAiEAgVqtijgxEXmGh9U1Bp7S%2FN7E0aTikKmdbGG980gA0dsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIoOCZv4OJMgMFxp8SrcA4evXdrwKMkezklgVbUVwiyihMqbG9wcdYkEGJlkO8FUvliZ1RmPJuhe1VxLwZICLouP7Q%2Fa%2Fsv8r0KaVOkFvFt0Vmc8%2BONxqSsDS8lAffYHhC4kpwM7aSmkqqWwvwFq4MK%2B%2BSX6XfcIkjbm54gxIoaFL1uGrSot2AMWqGFvgFaKzOvnvvavWwbb4sJrZsnRg9Ww4hQdhWhvDGhFIcN1vfLXRF7KiJAjcdquc4CqgPgPfNbb379HZQtvthQuVN68QGS%2B%2BL55qfhU3%2BdbwEnWWTxsAGAAxKIN9Gefz8GFcS4i5gPq0Jcv%2FKyDOe%2FfVt1qXj2441ddhW83c7Nnbo1tZnDqiuQojgxvM35XMODGcCBvRh9%2Fy%2BUFFK82NgQ7w06bn%2F8pR625yByR3tHQj%2FIYiQWPZ6CehFMJJeUwIQ8nJWcEaFsi6RVYDjfrZs558YfVJD30wiZsTHuiAaqido8A3CpdUSMTWOyhurDzt16o05rwOyuDeNXD2LYj%2BfEScbKkdIDFNG20zkx4yEzvpsZ%2FPZb%2Fd0KwWDhlxhtNI6XeXCow32zczH6Rx2BSWYXlLaiCfmPrUiz6JLmIvjqGbhVFHeedMuZnRSSUt6XEo70UIbZHXDrBr4lCaaDEEK%2FpMKXT0r8GOqUBm2FBwsUhh4CBWxL9V1lv1AP2scdWdiXS9NyYBLO93XIVw4ooRzo%2FUYukcrEc62iwngHcrmIMfmGh7dXbrKPpnRasLXvwd7abHg5YYnrEXulME976ljFNvhkMwyaYSnKaDKPH5dXezHtxBxrTZaGIRKf3psujz3L8g2oZsNQwIMAC7u%2F660TfhV7g2wnARkb7HE6uvraxbd2vq6TODTWs4GVT8iZS&X-Amz-Signature=2bc55177b15ec5e574a16080290fd49898f7521cbb1a33b9b2a2bc8e9ec53941&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNKKWDC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGSP3WcQOf7z5cf7F9dx8y19dfEYi%2BqWFZxoxN3n3mPAiEAgVqtijgxEXmGh9U1Bp7S%2FN7E0aTikKmdbGG980gA0dsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIoOCZv4OJMgMFxp8SrcA4evXdrwKMkezklgVbUVwiyihMqbG9wcdYkEGJlkO8FUvliZ1RmPJuhe1VxLwZICLouP7Q%2Fa%2Fsv8r0KaVOkFvFt0Vmc8%2BONxqSsDS8lAffYHhC4kpwM7aSmkqqWwvwFq4MK%2B%2BSX6XfcIkjbm54gxIoaFL1uGrSot2AMWqGFvgFaKzOvnvvavWwbb4sJrZsnRg9Ww4hQdhWhvDGhFIcN1vfLXRF7KiJAjcdquc4CqgPgPfNbb379HZQtvthQuVN68QGS%2B%2BL55qfhU3%2BdbwEnWWTxsAGAAxKIN9Gefz8GFcS4i5gPq0Jcv%2FKyDOe%2FfVt1qXj2441ddhW83c7Nnbo1tZnDqiuQojgxvM35XMODGcCBvRh9%2Fy%2BUFFK82NgQ7w06bn%2F8pR625yByR3tHQj%2FIYiQWPZ6CehFMJJeUwIQ8nJWcEaFsi6RVYDjfrZs558YfVJD30wiZsTHuiAaqido8A3CpdUSMTWOyhurDzt16o05rwOyuDeNXD2LYj%2BfEScbKkdIDFNG20zkx4yEzvpsZ%2FPZb%2Fd0KwWDhlxhtNI6XeXCow32zczH6Rx2BSWYXlLaiCfmPrUiz6JLmIvjqGbhVFHeedMuZnRSSUt6XEo70UIbZHXDrBr4lCaaDEEK%2FpMKXT0r8GOqUBm2FBwsUhh4CBWxL9V1lv1AP2scdWdiXS9NyYBLO93XIVw4ooRzo%2FUYukcrEc62iwngHcrmIMfmGh7dXbrKPpnRasLXvwd7abHg5YYnrEXulME976ljFNvhkMwyaYSnKaDKPH5dXezHtxBxrTZaGIRKf3psujz3L8g2oZsNQwIMAC7u%2F660TfhV7g2wnARkb7HE6uvraxbd2vq6TODTWs4GVT8iZS&X-Amz-Signature=8f9f86f235fb4666d846caf250f7f22018f7c6c6443afb688a6f4037eaaef967&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNKKWDC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGSP3WcQOf7z5cf7F9dx8y19dfEYi%2BqWFZxoxN3n3mPAiEAgVqtijgxEXmGh9U1Bp7S%2FN7E0aTikKmdbGG980gA0dsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIoOCZv4OJMgMFxp8SrcA4evXdrwKMkezklgVbUVwiyihMqbG9wcdYkEGJlkO8FUvliZ1RmPJuhe1VxLwZICLouP7Q%2Fa%2Fsv8r0KaVOkFvFt0Vmc8%2BONxqSsDS8lAffYHhC4kpwM7aSmkqqWwvwFq4MK%2B%2BSX6XfcIkjbm54gxIoaFL1uGrSot2AMWqGFvgFaKzOvnvvavWwbb4sJrZsnRg9Ww4hQdhWhvDGhFIcN1vfLXRF7KiJAjcdquc4CqgPgPfNbb379HZQtvthQuVN68QGS%2B%2BL55qfhU3%2BdbwEnWWTxsAGAAxKIN9Gefz8GFcS4i5gPq0Jcv%2FKyDOe%2FfVt1qXj2441ddhW83c7Nnbo1tZnDqiuQojgxvM35XMODGcCBvRh9%2Fy%2BUFFK82NgQ7w06bn%2F8pR625yByR3tHQj%2FIYiQWPZ6CehFMJJeUwIQ8nJWcEaFsi6RVYDjfrZs558YfVJD30wiZsTHuiAaqido8A3CpdUSMTWOyhurDzt16o05rwOyuDeNXD2LYj%2BfEScbKkdIDFNG20zkx4yEzvpsZ%2FPZb%2Fd0KwWDhlxhtNI6XeXCow32zczH6Rx2BSWYXlLaiCfmPrUiz6JLmIvjqGbhVFHeedMuZnRSSUt6XEo70UIbZHXDrBr4lCaaDEEK%2FpMKXT0r8GOqUBm2FBwsUhh4CBWxL9V1lv1AP2scdWdiXS9NyYBLO93XIVw4ooRzo%2FUYukcrEc62iwngHcrmIMfmGh7dXbrKPpnRasLXvwd7abHg5YYnrEXulME976ljFNvhkMwyaYSnKaDKPH5dXezHtxBxrTZaGIRKf3psujz3L8g2oZsNQwIMAC7u%2F660TfhV7g2wnARkb7HE6uvraxbd2vq6TODTWs4GVT8iZS&X-Amz-Signature=321cdbe606c191213897fe38507d1abdaa43592e43347b018d68d1ef05343afb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
