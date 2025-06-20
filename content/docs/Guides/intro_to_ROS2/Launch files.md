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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6VHV7W%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrcICIDweD0Hf6ZvwCsXG%2FGo7co6UepDFq2DYQDiAi7AiEA3jJA0Q3vvuS2LQUN%2BeUugSb08auWlf0ckBmowDNX860qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1yuZ%2FxWNT4OTw3PircA9qkcGK%2FgqjtTatbHMirWtY%2Bg5vvNQYcaH%2BvUXDL13JcpoAI505ZUZZZhCN2Wu1zDrs85UPPJum7JS1TtlKzlN9raoGGjy8RcMIsiS5%2BHGcrTAAFBblYMygcXTljMvvVX8EEeTceKeITYKHOqzaS369cOxTqL0mUJIqGfOdM%2B8Y7vGq%2FMzIiMXFvwwXEQ1HJBTACSVMgUTr3VXGPxtJxXAjVIsQPhGjIkaS1x%2FXHRJXrIagB2kqi1lQTE89JycA3ZJY2grMrwAhJF0LzDfLWaGSFWvU94ZPIhbFKIglqeqyUfoePygU%2FlnIw0sUVZTdSn7xhk9BTIsJ6lqMG5YmtWDURic%2FHKiy2s%2FcStEGiXsMFvBo%2FuBwMxpZmsnOcWdcJXrNZcVFLKUp%2FKiUCowgebGPHdsWc3FiO2UUJChLIz5%2BWPe2fBHwQ%2B1mq5cT5MvoH4ilgAyTxxL4MG4Lee50hO23sJNmFXoSxavDFoe%2Bip%2Bp0ANbdx%2BG0vERsvaDgaQB5up8hLKwFebVxBAzdycA%2B8NmTKaGLyPLyOpDL5M3S%2Fdulfj20BTZ2%2Ffnz%2Bd2mYpp3ASEsrU%2By0u9oE%2FUUGU6RzYsNO%2BPwD3uLSfszf4DrtHWsd%2BAh7mPVPPNJWQ%2BmMLSz1sIGOqUBYyxrIwXtDPkElYJZOaswGRKaOI8TJTJk86CKH9OHLu2evU%2BEZIYbbUWeqg58Bb39HkAg2R748cumxX5wSj%2FPyz2fcGLkJDuw0S2f304kIvH2e10HjCHXY2TTMxHYoqfjoWfcu7UeQW5vV8VcdT4eCTpoi8D%2Frdo057qpzl6VHQpETZwDsT%2F8zOz2%2BmspQTV%2FI8TDyCz3csy6XDl4F9zkvrrKFX0M&X-Amz-Signature=eb133f5bf1ecc54739ced7ed3407a1e8b1f6750e38c70c491fa88d1fc4e20a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6VHV7W%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrcICIDweD0Hf6ZvwCsXG%2FGo7co6UepDFq2DYQDiAi7AiEA3jJA0Q3vvuS2LQUN%2BeUugSb08auWlf0ckBmowDNX860qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1yuZ%2FxWNT4OTw3PircA9qkcGK%2FgqjtTatbHMirWtY%2Bg5vvNQYcaH%2BvUXDL13JcpoAI505ZUZZZhCN2Wu1zDrs85UPPJum7JS1TtlKzlN9raoGGjy8RcMIsiS5%2BHGcrTAAFBblYMygcXTljMvvVX8EEeTceKeITYKHOqzaS369cOxTqL0mUJIqGfOdM%2B8Y7vGq%2FMzIiMXFvwwXEQ1HJBTACSVMgUTr3VXGPxtJxXAjVIsQPhGjIkaS1x%2FXHRJXrIagB2kqi1lQTE89JycA3ZJY2grMrwAhJF0LzDfLWaGSFWvU94ZPIhbFKIglqeqyUfoePygU%2FlnIw0sUVZTdSn7xhk9BTIsJ6lqMG5YmtWDURic%2FHKiy2s%2FcStEGiXsMFvBo%2FuBwMxpZmsnOcWdcJXrNZcVFLKUp%2FKiUCowgebGPHdsWc3FiO2UUJChLIz5%2BWPe2fBHwQ%2B1mq5cT5MvoH4ilgAyTxxL4MG4Lee50hO23sJNmFXoSxavDFoe%2Bip%2Bp0ANbdx%2BG0vERsvaDgaQB5up8hLKwFebVxBAzdycA%2B8NmTKaGLyPLyOpDL5M3S%2Fdulfj20BTZ2%2Ffnz%2Bd2mYpp3ASEsrU%2By0u9oE%2FUUGU6RzYsNO%2BPwD3uLSfszf4DrtHWsd%2BAh7mPVPPNJWQ%2BmMLSz1sIGOqUBYyxrIwXtDPkElYJZOaswGRKaOI8TJTJk86CKH9OHLu2evU%2BEZIYbbUWeqg58Bb39HkAg2R748cumxX5wSj%2FPyz2fcGLkJDuw0S2f304kIvH2e10HjCHXY2TTMxHYoqfjoWfcu7UeQW5vV8VcdT4eCTpoi8D%2Frdo057qpzl6VHQpETZwDsT%2F8zOz2%2BmspQTV%2FI8TDyCz3csy6XDl4F9zkvrrKFX0M&X-Amz-Signature=471dae7492cbafdf860b55ec1ab0c70a8dcd2ee17ba96f26e29aedbef34edaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6VHV7W%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrcICIDweD0Hf6ZvwCsXG%2FGo7co6UepDFq2DYQDiAi7AiEA3jJA0Q3vvuS2LQUN%2BeUugSb08auWlf0ckBmowDNX860qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1yuZ%2FxWNT4OTw3PircA9qkcGK%2FgqjtTatbHMirWtY%2Bg5vvNQYcaH%2BvUXDL13JcpoAI505ZUZZZhCN2Wu1zDrs85UPPJum7JS1TtlKzlN9raoGGjy8RcMIsiS5%2BHGcrTAAFBblYMygcXTljMvvVX8EEeTceKeITYKHOqzaS369cOxTqL0mUJIqGfOdM%2B8Y7vGq%2FMzIiMXFvwwXEQ1HJBTACSVMgUTr3VXGPxtJxXAjVIsQPhGjIkaS1x%2FXHRJXrIagB2kqi1lQTE89JycA3ZJY2grMrwAhJF0LzDfLWaGSFWvU94ZPIhbFKIglqeqyUfoePygU%2FlnIw0sUVZTdSn7xhk9BTIsJ6lqMG5YmtWDURic%2FHKiy2s%2FcStEGiXsMFvBo%2FuBwMxpZmsnOcWdcJXrNZcVFLKUp%2FKiUCowgebGPHdsWc3FiO2UUJChLIz5%2BWPe2fBHwQ%2B1mq5cT5MvoH4ilgAyTxxL4MG4Lee50hO23sJNmFXoSxavDFoe%2Bip%2Bp0ANbdx%2BG0vERsvaDgaQB5up8hLKwFebVxBAzdycA%2B8NmTKaGLyPLyOpDL5M3S%2Fdulfj20BTZ2%2Ffnz%2Bd2mYpp3ASEsrU%2By0u9oE%2FUUGU6RzYsNO%2BPwD3uLSfszf4DrtHWsd%2BAh7mPVPPNJWQ%2BmMLSz1sIGOqUBYyxrIwXtDPkElYJZOaswGRKaOI8TJTJk86CKH9OHLu2evU%2BEZIYbbUWeqg58Bb39HkAg2R748cumxX5wSj%2FPyz2fcGLkJDuw0S2f304kIvH2e10HjCHXY2TTMxHYoqfjoWfcu7UeQW5vV8VcdT4eCTpoi8D%2Frdo057qpzl6VHQpETZwDsT%2F8zOz2%2BmspQTV%2FI8TDyCz3csy6XDl4F9zkvrrKFX0M&X-Amz-Signature=afd49334bfc09551e62fde76bbe6bf3f9e23d48c4eda72b4d5d7ebc302c9ff8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
