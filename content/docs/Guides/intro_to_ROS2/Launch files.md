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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YQXSCL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR82vzBd%2F0t9971Je5y5IOgZQA6WB0PQ5JFnQdt2IfYQIgAvdthCP7ln3ynTymAQL43gYidxpg4hh1IjHO3tVVknoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfrOquPsFRt4jhLESrcAxzieJnoTOreP1BXWh%2BX0g69PYa2Qp05JSsxDm%2B935ffLbL4VY1pzFALu81BncMP9UNwn%2B6ogLEa0Y1n1SQcrdSa2LZvASP%2F0u%2FTLo%2BdI3E3Xkh33L3n0vHWxndzgxT%2BmEZFvtY9E7s9yxYsUlsgypqSqpLbPwVMZARY%2FtqztuonCHEFUjhWhD9VyCaIgiWSjFrAkDpCubCUntnjU98LjxZLchpqDhik8U6oGgXsoQVcsfoGGsaEX%2FlmxdyR%2BfjhW7qfbxgrRWHNXS%2F2Zq5W89lrTlmm0M94VIlvx0MVXeJ7v0sHEjq%2Bn0nazSt9en0e40j%2BhwD2xFxVvWVmlilqmXbCMt0eCy52qIRsXxEUsAj271f3gbnq2%2FPQD0%2FF%2Bodso5Yj%2FJqcwfZ2y5o8iUHSfNKCPS6ABS0%2FVEM3RsRv2BzmVRMKwkmI4owxs1fWWN%2BcZVCReA7HGonMgCmLh38C%2BzdZ8rmSAxOcequVk6Fq8BIjSeg%2BbAS9eGWKxxPyczbiBURwESahha3N21k4BETy9WBzAotyqSXNXwHTnovy3ajmWKEKbfUEXUhFaFCnaXE4WV5R0v5ocwBYC98n22OK1xZxsuHQOyMocqYD7wgXnkdBK8lTJ38A41lYaj8zMLqlrb0GOqUBAMm%2FiKK7Rvu4Ez4VvcJ%2FRpk%2BXvLM1FvYQ9rfs0AzO1Vl3K%2BDycF6SYF1UvWOJR40d9g1JgVJOCNtPv7fdWZqVfbqNGODd%2BG%2Fym1ZsmfOI2L3KQiqsDX9rl%2Bss2t4SKu1acaaXxTxn82%2BehvG79UtELaBPaU6EDlCq5bYFY4gLCGMLdnhuYU98EVBmdTJYWKRpxiO48S%2Bgbwj%2BRaYuz8LELCZPJB0&X-Amz-Signature=eb4727809c661515d42990178a72f84237bd6989a2794118dc30f44fe6bfe2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YQXSCL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR82vzBd%2F0t9971Je5y5IOgZQA6WB0PQ5JFnQdt2IfYQIgAvdthCP7ln3ynTymAQL43gYidxpg4hh1IjHO3tVVknoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfrOquPsFRt4jhLESrcAxzieJnoTOreP1BXWh%2BX0g69PYa2Qp05JSsxDm%2B935ffLbL4VY1pzFALu81BncMP9UNwn%2B6ogLEa0Y1n1SQcrdSa2LZvASP%2F0u%2FTLo%2BdI3E3Xkh33L3n0vHWxndzgxT%2BmEZFvtY9E7s9yxYsUlsgypqSqpLbPwVMZARY%2FtqztuonCHEFUjhWhD9VyCaIgiWSjFrAkDpCubCUntnjU98LjxZLchpqDhik8U6oGgXsoQVcsfoGGsaEX%2FlmxdyR%2BfjhW7qfbxgrRWHNXS%2F2Zq5W89lrTlmm0M94VIlvx0MVXeJ7v0sHEjq%2Bn0nazSt9en0e40j%2BhwD2xFxVvWVmlilqmXbCMt0eCy52qIRsXxEUsAj271f3gbnq2%2FPQD0%2FF%2Bodso5Yj%2FJqcwfZ2y5o8iUHSfNKCPS6ABS0%2FVEM3RsRv2BzmVRMKwkmI4owxs1fWWN%2BcZVCReA7HGonMgCmLh38C%2BzdZ8rmSAxOcequVk6Fq8BIjSeg%2BbAS9eGWKxxPyczbiBURwESahha3N21k4BETy9WBzAotyqSXNXwHTnovy3ajmWKEKbfUEXUhFaFCnaXE4WV5R0v5ocwBYC98n22OK1xZxsuHQOyMocqYD7wgXnkdBK8lTJ38A41lYaj8zMLqlrb0GOqUBAMm%2FiKK7Rvu4Ez4VvcJ%2FRpk%2BXvLM1FvYQ9rfs0AzO1Vl3K%2BDycF6SYF1UvWOJR40d9g1JgVJOCNtPv7fdWZqVfbqNGODd%2BG%2Fym1ZsmfOI2L3KQiqsDX9rl%2Bss2t4SKu1acaaXxTxn82%2BehvG79UtELaBPaU6EDlCq5bYFY4gLCGMLdnhuYU98EVBmdTJYWKRpxiO48S%2Bgbwj%2BRaYuz8LELCZPJB0&X-Amz-Signature=d32f3a5c70f0ca9961361e9db204948172c9f693a4b4d2d4e6e584d295e5fbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YQXSCL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR82vzBd%2F0t9971Je5y5IOgZQA6WB0PQ5JFnQdt2IfYQIgAvdthCP7ln3ynTymAQL43gYidxpg4hh1IjHO3tVVknoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfrOquPsFRt4jhLESrcAxzieJnoTOreP1BXWh%2BX0g69PYa2Qp05JSsxDm%2B935ffLbL4VY1pzFALu81BncMP9UNwn%2B6ogLEa0Y1n1SQcrdSa2LZvASP%2F0u%2FTLo%2BdI3E3Xkh33L3n0vHWxndzgxT%2BmEZFvtY9E7s9yxYsUlsgypqSqpLbPwVMZARY%2FtqztuonCHEFUjhWhD9VyCaIgiWSjFrAkDpCubCUntnjU98LjxZLchpqDhik8U6oGgXsoQVcsfoGGsaEX%2FlmxdyR%2BfjhW7qfbxgrRWHNXS%2F2Zq5W89lrTlmm0M94VIlvx0MVXeJ7v0sHEjq%2Bn0nazSt9en0e40j%2BhwD2xFxVvWVmlilqmXbCMt0eCy52qIRsXxEUsAj271f3gbnq2%2FPQD0%2FF%2Bodso5Yj%2FJqcwfZ2y5o8iUHSfNKCPS6ABS0%2FVEM3RsRv2BzmVRMKwkmI4owxs1fWWN%2BcZVCReA7HGonMgCmLh38C%2BzdZ8rmSAxOcequVk6Fq8BIjSeg%2BbAS9eGWKxxPyczbiBURwESahha3N21k4BETy9WBzAotyqSXNXwHTnovy3ajmWKEKbfUEXUhFaFCnaXE4WV5R0v5ocwBYC98n22OK1xZxsuHQOyMocqYD7wgXnkdBK8lTJ38A41lYaj8zMLqlrb0GOqUBAMm%2FiKK7Rvu4Ez4VvcJ%2FRpk%2BXvLM1FvYQ9rfs0AzO1Vl3K%2BDycF6SYF1UvWOJR40d9g1JgVJOCNtPv7fdWZqVfbqNGODd%2BG%2Fym1ZsmfOI2L3KQiqsDX9rl%2Bss2t4SKu1acaaXxTxn82%2BehvG79UtELaBPaU6EDlCq5bYFY4gLCGMLdnhuYU98EVBmdTJYWKRpxiO48S%2Bgbwj%2BRaYuz8LELCZPJB0&X-Amz-Signature=5013847205c27079d545ecaf0960dccc23dfb7b004d604a7c660aa32f4fdb2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
