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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBOEBCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCQ0iOhF1JIpGV1WtmHUhKwBBUYavReD1JucPL2KsXtxAIhAO2inbO5Bg4kqhH8YOfyw7%2FyJilsEGHeFzxr2cprrQLtKv8DCFIQABoMNjM3NDIzMTgzODA1Igzwu8jZTdO0m6JJB0Qq3AM6Abfer%2FNnMltqSMLGwIE9gmt2YAq3LZxJVLD%2FzikDwif20GQ8IFmOZ1mzHK0EAdUlchykV5KUvF%2BnoA3wzRQcDxiCgsSb2uM4nwyPa%2FSyeEctZkwLlHhDgeUeI7S5D3DgipPdVV27GDhQR1oYix%2Bsms8zfg%2B6YgnP%2BvjPW%2BesFqd%2FioxQhzy3kf4EguyzZ0%2FrrOzbmPGUWaIZ%2Ftmafll%2BsBx9sTVK9zPCHQap%2BHfh4O78sXuy8SVyLQVDedin5dsPt8DuXlPJFXCt3KcRTm85Ts6Q8NAFQcysPQeE00ReUTVcKSYY0bSpNSAF3DrQ0LtZVzZFxzSgQTR2erG8v%2FyeIXP3wX5R9yxTW3cFrWh1p20%2FbUN2gVLinycOdPaDtJTMlVkzIni5MihB9h3g3C4BRIURBKuRIqLjiOoBAMMj3SnVKBeDD9iQwg3BLg6ABwlnlnRmYjk2XLnF4sLna7JZ%2BnCYVI1oL23KhLi6mPF7%2FLR3GcY2GA6B4EYwIxSCw1KJZql%2FzDfe61m2DaOvdBnO9lf7Y%2FlWlZgmrenGcvztAsdNILdCEcChz%2FKB9dCRF7YU9WTbI6XCG%2FEPitY8tAwtyb%2F57bmLOn0znBy3Ha4LPHVzUK2lAXq0X%2BFTCDDP%2FYjCBjqkAalAHNekwN658LPqhCljwPy%2FLAs0wCvwmU629ghJzw3PLre%2F1x6x%2B8zffA2Y827KBOO2T4cyC4xEj7DU52eSsFsxVmq0hut8INmMKeE9v6N9pBrh1t%2Fu6yJEqZPJ9Xc0HMWAIoHWhdV5m6Otql%2FQhjG9ZwXPQA8vsFVfDbV7jtUNTygN2oDuoNbtCs%2FwAYZaNh5Nf%2FQ9j3MnphYH93FNmJ6sBgZe&X-Amz-Signature=87e838f0d2451b649b15dcdc14ecc9ac3dc8e97a15d1b9e763cfdeec23512040&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBOEBCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCQ0iOhF1JIpGV1WtmHUhKwBBUYavReD1JucPL2KsXtxAIhAO2inbO5Bg4kqhH8YOfyw7%2FyJilsEGHeFzxr2cprrQLtKv8DCFIQABoMNjM3NDIzMTgzODA1Igzwu8jZTdO0m6JJB0Qq3AM6Abfer%2FNnMltqSMLGwIE9gmt2YAq3LZxJVLD%2FzikDwif20GQ8IFmOZ1mzHK0EAdUlchykV5KUvF%2BnoA3wzRQcDxiCgsSb2uM4nwyPa%2FSyeEctZkwLlHhDgeUeI7S5D3DgipPdVV27GDhQR1oYix%2Bsms8zfg%2B6YgnP%2BvjPW%2BesFqd%2FioxQhzy3kf4EguyzZ0%2FrrOzbmPGUWaIZ%2Ftmafll%2BsBx9sTVK9zPCHQap%2BHfh4O78sXuy8SVyLQVDedin5dsPt8DuXlPJFXCt3KcRTm85Ts6Q8NAFQcysPQeE00ReUTVcKSYY0bSpNSAF3DrQ0LtZVzZFxzSgQTR2erG8v%2FyeIXP3wX5R9yxTW3cFrWh1p20%2FbUN2gVLinycOdPaDtJTMlVkzIni5MihB9h3g3C4BRIURBKuRIqLjiOoBAMMj3SnVKBeDD9iQwg3BLg6ABwlnlnRmYjk2XLnF4sLna7JZ%2BnCYVI1oL23KhLi6mPF7%2FLR3GcY2GA6B4EYwIxSCw1KJZql%2FzDfe61m2DaOvdBnO9lf7Y%2FlWlZgmrenGcvztAsdNILdCEcChz%2FKB9dCRF7YU9WTbI6XCG%2FEPitY8tAwtyb%2F57bmLOn0znBy3Ha4LPHVzUK2lAXq0X%2BFTCDDP%2FYjCBjqkAalAHNekwN658LPqhCljwPy%2FLAs0wCvwmU629ghJzw3PLre%2F1x6x%2B8zffA2Y827KBOO2T4cyC4xEj7DU52eSsFsxVmq0hut8INmMKeE9v6N9pBrh1t%2Fu6yJEqZPJ9Xc0HMWAIoHWhdV5m6Otql%2FQhjG9ZwXPQA8vsFVfDbV7jtUNTygN2oDuoNbtCs%2FwAYZaNh5Nf%2FQ9j3MnphYH93FNmJ6sBgZe&X-Amz-Signature=63da389b077b7d4a56a9b3eb475ac2651e83e72502e9f1c80955c8c64e61ad4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBOEBCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCQ0iOhF1JIpGV1WtmHUhKwBBUYavReD1JucPL2KsXtxAIhAO2inbO5Bg4kqhH8YOfyw7%2FyJilsEGHeFzxr2cprrQLtKv8DCFIQABoMNjM3NDIzMTgzODA1Igzwu8jZTdO0m6JJB0Qq3AM6Abfer%2FNnMltqSMLGwIE9gmt2YAq3LZxJVLD%2FzikDwif20GQ8IFmOZ1mzHK0EAdUlchykV5KUvF%2BnoA3wzRQcDxiCgsSb2uM4nwyPa%2FSyeEctZkwLlHhDgeUeI7S5D3DgipPdVV27GDhQR1oYix%2Bsms8zfg%2B6YgnP%2BvjPW%2BesFqd%2FioxQhzy3kf4EguyzZ0%2FrrOzbmPGUWaIZ%2Ftmafll%2BsBx9sTVK9zPCHQap%2BHfh4O78sXuy8SVyLQVDedin5dsPt8DuXlPJFXCt3KcRTm85Ts6Q8NAFQcysPQeE00ReUTVcKSYY0bSpNSAF3DrQ0LtZVzZFxzSgQTR2erG8v%2FyeIXP3wX5R9yxTW3cFrWh1p20%2FbUN2gVLinycOdPaDtJTMlVkzIni5MihB9h3g3C4BRIURBKuRIqLjiOoBAMMj3SnVKBeDD9iQwg3BLg6ABwlnlnRmYjk2XLnF4sLna7JZ%2BnCYVI1oL23KhLi6mPF7%2FLR3GcY2GA6B4EYwIxSCw1KJZql%2FzDfe61m2DaOvdBnO9lf7Y%2FlWlZgmrenGcvztAsdNILdCEcChz%2FKB9dCRF7YU9WTbI6XCG%2FEPitY8tAwtyb%2F57bmLOn0znBy3Ha4LPHVzUK2lAXq0X%2BFTCDDP%2FYjCBjqkAalAHNekwN658LPqhCljwPy%2FLAs0wCvwmU629ghJzw3PLre%2F1x6x%2B8zffA2Y827KBOO2T4cyC4xEj7DU52eSsFsxVmq0hut8INmMKeE9v6N9pBrh1t%2Fu6yJEqZPJ9Xc0HMWAIoHWhdV5m6Otql%2FQhjG9ZwXPQA8vsFVfDbV7jtUNTygN2oDuoNbtCs%2FwAYZaNh5Nf%2FQ9j3MnphYH93FNmJ6sBgZe&X-Amz-Signature=7c8671deb9112ff72881e881832346809b46027ff04cb30a8301beb9397cec89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
