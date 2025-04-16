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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NCADOA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqGeLoYKHPMy7iO01SVlNMpJdw6rqqbCq2vRBimebv%2FAiAqFVoNxeXA3VE2nTkzMnZ2jDGSOZLY4a6dXSwwP4HeIir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMJpvboN7UWbVKRbkbKtwD55%2BtOEPUHKZcgqPDhkGKmUbCAy4D7iyJ0kJI%2B7cgj8NthkDzVEBpt%2B5X2hBx6G5JNmKp%2FGIRGWybzYASr7wfd%2BDtkEbNIuLc%2B9mH3KmGW%2BJUvZOxtL6Z%2BW1JzRsSU%2FYWW6V9IlwkOPBSgXrLJFXRafKRuqSdAk68uqflnvYOqFqAWY3dRTvsZjpyAxco74e9kJcGQi0oYqHakLrHsm2%2BxI8Uaa9wbSL1wOSUYzmN1ZFs8Q%2BRd5w%2B3WYRq0TBHYVnOOR7MawQeS1oemj3DgIDKqu1Jl006toJzMnCM6DjyuSJK%2BhEyUnaOENAybGmkGIdwpfbKewdVG5vVDNEaL0ww2S81kwbbzni%2BRREoIUNlW0t%2BwwaML9PIsYlVd9ig6VfG1Yt3LX49UzQzlTRUo5C882jh2FqwTcv8TmtPUoTeJ3PF7zcGq9Ji2ixQ61UJzZgAvuQFGxsVK4P4RE5RUstEZeNECxzV4768IcSPM1Hd99tSKL%2F1sBJ7m3Co79DN5UNubPFsYa%2BtxdpcjkiYKPnJqpzVObV8TyhlkROfw3kcXvPLTRWAqr0fSL2OURRSRsg5TIR44tCp5CG%2FvKk%2FvmJk5L%2Btw3yZuqq%2F5MHWuKN%2B9byJQO9BId0aOezNQkw5dr9vwY6pgGkRZMPAWtHrbIpLDTr1138YpEN7E8LcxkksXbLH4e505F5QJPLvNUZrGAjwoR7XJpfE6gz1jV1uxJomdhrLPP62ICEZEiPkD8x%2BDy29p4IOI7wQKF%2FyGhIqg23lEbXnRDDxs9XypTQww6Rm7RwuuMqOjGLlQCWVi0vZfIOfINAsu%2FUE2CRgG%2FEwj%2BDKmZ7zxYyt6ulWYKmyPCltcYgfRY%2B08lfSgNS&X-Amz-Signature=c2cef4f14eaeb74cf582fc79cd2969448d364e27a1afe9ae631c39c64b3067a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NCADOA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqGeLoYKHPMy7iO01SVlNMpJdw6rqqbCq2vRBimebv%2FAiAqFVoNxeXA3VE2nTkzMnZ2jDGSOZLY4a6dXSwwP4HeIir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMJpvboN7UWbVKRbkbKtwD55%2BtOEPUHKZcgqPDhkGKmUbCAy4D7iyJ0kJI%2B7cgj8NthkDzVEBpt%2B5X2hBx6G5JNmKp%2FGIRGWybzYASr7wfd%2BDtkEbNIuLc%2B9mH3KmGW%2BJUvZOxtL6Z%2BW1JzRsSU%2FYWW6V9IlwkOPBSgXrLJFXRafKRuqSdAk68uqflnvYOqFqAWY3dRTvsZjpyAxco74e9kJcGQi0oYqHakLrHsm2%2BxI8Uaa9wbSL1wOSUYzmN1ZFs8Q%2BRd5w%2B3WYRq0TBHYVnOOR7MawQeS1oemj3DgIDKqu1Jl006toJzMnCM6DjyuSJK%2BhEyUnaOENAybGmkGIdwpfbKewdVG5vVDNEaL0ww2S81kwbbzni%2BRREoIUNlW0t%2BwwaML9PIsYlVd9ig6VfG1Yt3LX49UzQzlTRUo5C882jh2FqwTcv8TmtPUoTeJ3PF7zcGq9Ji2ixQ61UJzZgAvuQFGxsVK4P4RE5RUstEZeNECxzV4768IcSPM1Hd99tSKL%2F1sBJ7m3Co79DN5UNubPFsYa%2BtxdpcjkiYKPnJqpzVObV8TyhlkROfw3kcXvPLTRWAqr0fSL2OURRSRsg5TIR44tCp5CG%2FvKk%2FvmJk5L%2Btw3yZuqq%2F5MHWuKN%2B9byJQO9BId0aOezNQkw5dr9vwY6pgGkRZMPAWtHrbIpLDTr1138YpEN7E8LcxkksXbLH4e505F5QJPLvNUZrGAjwoR7XJpfE6gz1jV1uxJomdhrLPP62ICEZEiPkD8x%2BDy29p4IOI7wQKF%2FyGhIqg23lEbXnRDDxs9XypTQww6Rm7RwuuMqOjGLlQCWVi0vZfIOfINAsu%2FUE2CRgG%2FEwj%2BDKmZ7zxYyt6ulWYKmyPCltcYgfRY%2B08lfSgNS&X-Amz-Signature=3b60b13a61523e528a02ebee6970cba512bb39b2a3c93e4624a87b4e7c52dcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NCADOA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqGeLoYKHPMy7iO01SVlNMpJdw6rqqbCq2vRBimebv%2FAiAqFVoNxeXA3VE2nTkzMnZ2jDGSOZLY4a6dXSwwP4HeIir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMJpvboN7UWbVKRbkbKtwD55%2BtOEPUHKZcgqPDhkGKmUbCAy4D7iyJ0kJI%2B7cgj8NthkDzVEBpt%2B5X2hBx6G5JNmKp%2FGIRGWybzYASr7wfd%2BDtkEbNIuLc%2B9mH3KmGW%2BJUvZOxtL6Z%2BW1JzRsSU%2FYWW6V9IlwkOPBSgXrLJFXRafKRuqSdAk68uqflnvYOqFqAWY3dRTvsZjpyAxco74e9kJcGQi0oYqHakLrHsm2%2BxI8Uaa9wbSL1wOSUYzmN1ZFs8Q%2BRd5w%2B3WYRq0TBHYVnOOR7MawQeS1oemj3DgIDKqu1Jl006toJzMnCM6DjyuSJK%2BhEyUnaOENAybGmkGIdwpfbKewdVG5vVDNEaL0ww2S81kwbbzni%2BRREoIUNlW0t%2BwwaML9PIsYlVd9ig6VfG1Yt3LX49UzQzlTRUo5C882jh2FqwTcv8TmtPUoTeJ3PF7zcGq9Ji2ixQ61UJzZgAvuQFGxsVK4P4RE5RUstEZeNECxzV4768IcSPM1Hd99tSKL%2F1sBJ7m3Co79DN5UNubPFsYa%2BtxdpcjkiYKPnJqpzVObV8TyhlkROfw3kcXvPLTRWAqr0fSL2OURRSRsg5TIR44tCp5CG%2FvKk%2FvmJk5L%2Btw3yZuqq%2F5MHWuKN%2B9byJQO9BId0aOezNQkw5dr9vwY6pgGkRZMPAWtHrbIpLDTr1138YpEN7E8LcxkksXbLH4e505F5QJPLvNUZrGAjwoR7XJpfE6gz1jV1uxJomdhrLPP62ICEZEiPkD8x%2BDy29p4IOI7wQKF%2FyGhIqg23lEbXnRDDxs9XypTQww6Rm7RwuuMqOjGLlQCWVi0vZfIOfINAsu%2FUE2CRgG%2FEwj%2BDKmZ7zxYyt6ulWYKmyPCltcYgfRY%2B08lfSgNS&X-Amz-Signature=df376ff030e70503678f175fc51c4e28c48a39962aa7c28ff94bec21630a8bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
