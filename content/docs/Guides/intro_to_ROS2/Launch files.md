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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ2SBDH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaBaT1Gi%2Fwxyt1JGd%2FsOmiyq5sMwDSTnuXhdHF4sZ01wIhAKqiYqhr4cIhCymF5220zKkft634yF6ObF3EvicXXhiVKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjaSgGDOSXYuyRQf4q3AOYUQJHiznAuRZzVvh9w9PtWwAOzOCVMGjPvEkMCpJlyBEk5nYlpkwl7yBOkXFCNvad7CKRH7f1HF8993RndeJv%2BeF7tmcHi8Ruvg2E48LtGXora%2F0O0HyHDg9qfmBOjsJVITaIKmTF%2BXpOQPCwqLlHNVxh4OuWqDMbNl1K0nOtRSw3S3k91sWnUnAw5hBHpm7yDKjVbFKy3Rxa2cFoW1yoqRlM6GXP8aW%2BMTVXbKydbQwE93K7MkzUQYNrPAhmBF9pU782%2Br%2BJw8QHkdMgLu41XTcMv6eEF7pKvMJFNBaR6Z9Zx1kGFbvHyZ5uKPrgpzVO6ExFKiq7QRosWznoZGrO%2B9zrmkrc8mEzbqP7gzavb9VsKb97jvreIc1sY3TKwj4Bwin4etATZm8LfLMNwn3dJpUmARYg3M8wVziA%2F4EWJQD1okfi0xJ%2Fd%2Brcrf%2FSxtYs%2Bzvb5eV6%2B11sq51zYX2ZdfezXf9cnn8S1zOp0V0L2X2g%2FNnw8QcqIFptKcjMWo0jEWnbniA6OkyI%2BqpCSfGhCgKig14DSLmu82M8XiTfflX5ybLPeyDaOygFUom6RcIV11Ooki%2B9uFwPUtcogPATYiNtVXgswfm8WQgIKugdfKt9LThXkSh5%2B5r%2FxjC1n4S%2FBjqkAYiX%2Fg%2FJeCFsyRoITV7lud2st6COk3Jurk%2FulTe427vGOfSYY%2F%2BegvD4TLa9J6HIEAyIee%2B54ttq5dSLX%2BazZc27x1Oj6%2F0AmVYVigfm0XyzZvwuJZhmgnhRAkTSL%2BAsNm3MPAcUVIsNxsTNRgp40IQ9OGtUAoIjsDu3UiTtbIFTr2WpPGkHFQ0JpC4Lv1WX6oQZ8wtir5RNW6POAc0nqxDZjBSh&X-Amz-Signature=775e4e645ad588511ffce18e6eb01095a959f9387a856ef524c77c67c30fb03c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ2SBDH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaBaT1Gi%2Fwxyt1JGd%2FsOmiyq5sMwDSTnuXhdHF4sZ01wIhAKqiYqhr4cIhCymF5220zKkft634yF6ObF3EvicXXhiVKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjaSgGDOSXYuyRQf4q3AOYUQJHiznAuRZzVvh9w9PtWwAOzOCVMGjPvEkMCpJlyBEk5nYlpkwl7yBOkXFCNvad7CKRH7f1HF8993RndeJv%2BeF7tmcHi8Ruvg2E48LtGXora%2F0O0HyHDg9qfmBOjsJVITaIKmTF%2BXpOQPCwqLlHNVxh4OuWqDMbNl1K0nOtRSw3S3k91sWnUnAw5hBHpm7yDKjVbFKy3Rxa2cFoW1yoqRlM6GXP8aW%2BMTVXbKydbQwE93K7MkzUQYNrPAhmBF9pU782%2Br%2BJw8QHkdMgLu41XTcMv6eEF7pKvMJFNBaR6Z9Zx1kGFbvHyZ5uKPrgpzVO6ExFKiq7QRosWznoZGrO%2B9zrmkrc8mEzbqP7gzavb9VsKb97jvreIc1sY3TKwj4Bwin4etATZm8LfLMNwn3dJpUmARYg3M8wVziA%2F4EWJQD1okfi0xJ%2Fd%2Brcrf%2FSxtYs%2Bzvb5eV6%2B11sq51zYX2ZdfezXf9cnn8S1zOp0V0L2X2g%2FNnw8QcqIFptKcjMWo0jEWnbniA6OkyI%2BqpCSfGhCgKig14DSLmu82M8XiTfflX5ybLPeyDaOygFUom6RcIV11Ooki%2B9uFwPUtcogPATYiNtVXgswfm8WQgIKugdfKt9LThXkSh5%2B5r%2FxjC1n4S%2FBjqkAYiX%2Fg%2FJeCFsyRoITV7lud2st6COk3Jurk%2FulTe427vGOfSYY%2F%2BegvD4TLa9J6HIEAyIee%2B54ttq5dSLX%2BazZc27x1Oj6%2F0AmVYVigfm0XyzZvwuJZhmgnhRAkTSL%2BAsNm3MPAcUVIsNxsTNRgp40IQ9OGtUAoIjsDu3UiTtbIFTr2WpPGkHFQ0JpC4Lv1WX6oQZ8wtir5RNW6POAc0nqxDZjBSh&X-Amz-Signature=f00c669f0dba09773b2aa561a726405528c52c20b87d7b6de2fbccf19b94c20d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ2SBDH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaBaT1Gi%2Fwxyt1JGd%2FsOmiyq5sMwDSTnuXhdHF4sZ01wIhAKqiYqhr4cIhCymF5220zKkft634yF6ObF3EvicXXhiVKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjaSgGDOSXYuyRQf4q3AOYUQJHiznAuRZzVvh9w9PtWwAOzOCVMGjPvEkMCpJlyBEk5nYlpkwl7yBOkXFCNvad7CKRH7f1HF8993RndeJv%2BeF7tmcHi8Ruvg2E48LtGXora%2F0O0HyHDg9qfmBOjsJVITaIKmTF%2BXpOQPCwqLlHNVxh4OuWqDMbNl1K0nOtRSw3S3k91sWnUnAw5hBHpm7yDKjVbFKy3Rxa2cFoW1yoqRlM6GXP8aW%2BMTVXbKydbQwE93K7MkzUQYNrPAhmBF9pU782%2Br%2BJw8QHkdMgLu41XTcMv6eEF7pKvMJFNBaR6Z9Zx1kGFbvHyZ5uKPrgpzVO6ExFKiq7QRosWznoZGrO%2B9zrmkrc8mEzbqP7gzavb9VsKb97jvreIc1sY3TKwj4Bwin4etATZm8LfLMNwn3dJpUmARYg3M8wVziA%2F4EWJQD1okfi0xJ%2Fd%2Brcrf%2FSxtYs%2Bzvb5eV6%2B11sq51zYX2ZdfezXf9cnn8S1zOp0V0L2X2g%2FNnw8QcqIFptKcjMWo0jEWnbniA6OkyI%2BqpCSfGhCgKig14DSLmu82M8XiTfflX5ybLPeyDaOygFUom6RcIV11Ooki%2B9uFwPUtcogPATYiNtVXgswfm8WQgIKugdfKt9LThXkSh5%2B5r%2FxjC1n4S%2FBjqkAYiX%2Fg%2FJeCFsyRoITV7lud2st6COk3Jurk%2FulTe427vGOfSYY%2F%2BegvD4TLa9J6HIEAyIee%2B54ttq5dSLX%2BazZc27x1Oj6%2F0AmVYVigfm0XyzZvwuJZhmgnhRAkTSL%2BAsNm3MPAcUVIsNxsTNRgp40IQ9OGtUAoIjsDu3UiTtbIFTr2WpPGkHFQ0JpC4Lv1WX6oQZ8wtir5RNW6POAc0nqxDZjBSh&X-Amz-Signature=dbf4bd7875971a75a0da4b8d87991d7b77598632b196e4cf3c988ef511149348&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
