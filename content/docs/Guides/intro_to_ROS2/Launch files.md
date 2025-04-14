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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F25IQCA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMnZ8PWuu4wEfVXY3jSPyRcMnbrTGlr39YNfQoeFWmRAIgVqSSablErGV3mLKKzdgCacmQFEgfY%2F1scyNdeQiLJxUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCphq370ImnUzI5KjircA8lvlbPZwpQgKM6jc6tGo0dqI%2Bkab7O1%2BKu7UWP07TKe%2BKLPzw3z6yQejaX5UOkBr4svfTf0YV8LZWhkmLFmfs8XvxHU3YoQpHdSNXAi3MmRl%2BwNh%2FaSgqyzsE4gwqskAAl6yazsLjMKl1GfMzSYzQaeGNHiBUzMOQ7IX6ox3sD9pRpNeYEVYtFdE3SrACwpWFxULZ16ZjUOp4tnpjSnlCgWg8IDj3NGclE7MjwgcLrof2fCHI73AMB%2FtS7XoItH7b1y4SE%2FmoORYCV%2Fk0C1Ef%2BegqYrl1OG1AZKAMbGC%2B%2BZOPS23iuD3sj8OIR6SvPxXYJyf2PL9Gv%2F4Gxr2%2B40HODo5We4G3%2BysalhjEMhg53Y87l%2BRuWza8bB4Vq83UCu0nJVqq%2FDdXxvZKOXk%2FBJrbVAM3Kz8IRjD8qyavIqzmtYG%2BitI7plhRq9Bhczd09xHKlfOx2ojt%2BrxxBzS5GFkgoeWHaT57gmxrprluv1MbvFEJ6KoY2UslNgUlkzHqt1qu5MFKj8UNOBmfEH2nbsJaFmlsZOeI3wjaZfKqDlevpWycUM%2BmbzHEFhnyFqD01PNiik6myA1mvhuicFwuTwK1X9yxBnd5lc0U%2FFZC8u9S7Qt7CkMLyF40RcmQNdMJWU9b8GOqUBEnQMZh8y5sY5EDoLFfL%2Bo1CJ%2BuP5SrNOXcJ82SQsX9agG%2F53z3iyyAM5ZMQf5IiO70T3A%2FAUiS%2BLCc9SvijB0woikAdOUkSYc8lA8Zm9xycKHILHrfTgY5ybpTjpFHWd58wlg11HPRJ8ZHIHl8adr0SdhLVy6tuQoLNLB1ORSeqvEBJiKM9QejrvfbmnovgKSGSuzxwRzWZDXaaWV5%2FRwrq6afTG&X-Amz-Signature=9bb21bf96e2978eb2297c302a9a9cbd81cc20840d274cc7485c66531d3d9c673&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F25IQCA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMnZ8PWuu4wEfVXY3jSPyRcMnbrTGlr39YNfQoeFWmRAIgVqSSablErGV3mLKKzdgCacmQFEgfY%2F1scyNdeQiLJxUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCphq370ImnUzI5KjircA8lvlbPZwpQgKM6jc6tGo0dqI%2Bkab7O1%2BKu7UWP07TKe%2BKLPzw3z6yQejaX5UOkBr4svfTf0YV8LZWhkmLFmfs8XvxHU3YoQpHdSNXAi3MmRl%2BwNh%2FaSgqyzsE4gwqskAAl6yazsLjMKl1GfMzSYzQaeGNHiBUzMOQ7IX6ox3sD9pRpNeYEVYtFdE3SrACwpWFxULZ16ZjUOp4tnpjSnlCgWg8IDj3NGclE7MjwgcLrof2fCHI73AMB%2FtS7XoItH7b1y4SE%2FmoORYCV%2Fk0C1Ef%2BegqYrl1OG1AZKAMbGC%2B%2BZOPS23iuD3sj8OIR6SvPxXYJyf2PL9Gv%2F4Gxr2%2B40HODo5We4G3%2BysalhjEMhg53Y87l%2BRuWza8bB4Vq83UCu0nJVqq%2FDdXxvZKOXk%2FBJrbVAM3Kz8IRjD8qyavIqzmtYG%2BitI7plhRq9Bhczd09xHKlfOx2ojt%2BrxxBzS5GFkgoeWHaT57gmxrprluv1MbvFEJ6KoY2UslNgUlkzHqt1qu5MFKj8UNOBmfEH2nbsJaFmlsZOeI3wjaZfKqDlevpWycUM%2BmbzHEFhnyFqD01PNiik6myA1mvhuicFwuTwK1X9yxBnd5lc0U%2FFZC8u9S7Qt7CkMLyF40RcmQNdMJWU9b8GOqUBEnQMZh8y5sY5EDoLFfL%2Bo1CJ%2BuP5SrNOXcJ82SQsX9agG%2F53z3iyyAM5ZMQf5IiO70T3A%2FAUiS%2BLCc9SvijB0woikAdOUkSYc8lA8Zm9xycKHILHrfTgY5ybpTjpFHWd58wlg11HPRJ8ZHIHl8adr0SdhLVy6tuQoLNLB1ORSeqvEBJiKM9QejrvfbmnovgKSGSuzxwRzWZDXaaWV5%2FRwrq6afTG&X-Amz-Signature=36d26d46244b14a9d9e425e5d5efc6c0a32e075effa38f3fbf20c336b17a21b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F25IQCA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMnZ8PWuu4wEfVXY3jSPyRcMnbrTGlr39YNfQoeFWmRAIgVqSSablErGV3mLKKzdgCacmQFEgfY%2F1scyNdeQiLJxUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCphq370ImnUzI5KjircA8lvlbPZwpQgKM6jc6tGo0dqI%2Bkab7O1%2BKu7UWP07TKe%2BKLPzw3z6yQejaX5UOkBr4svfTf0YV8LZWhkmLFmfs8XvxHU3YoQpHdSNXAi3MmRl%2BwNh%2FaSgqyzsE4gwqskAAl6yazsLjMKl1GfMzSYzQaeGNHiBUzMOQ7IX6ox3sD9pRpNeYEVYtFdE3SrACwpWFxULZ16ZjUOp4tnpjSnlCgWg8IDj3NGclE7MjwgcLrof2fCHI73AMB%2FtS7XoItH7b1y4SE%2FmoORYCV%2Fk0C1Ef%2BegqYrl1OG1AZKAMbGC%2B%2BZOPS23iuD3sj8OIR6SvPxXYJyf2PL9Gv%2F4Gxr2%2B40HODo5We4G3%2BysalhjEMhg53Y87l%2BRuWza8bB4Vq83UCu0nJVqq%2FDdXxvZKOXk%2FBJrbVAM3Kz8IRjD8qyavIqzmtYG%2BitI7plhRq9Bhczd09xHKlfOx2ojt%2BrxxBzS5GFkgoeWHaT57gmxrprluv1MbvFEJ6KoY2UslNgUlkzHqt1qu5MFKj8UNOBmfEH2nbsJaFmlsZOeI3wjaZfKqDlevpWycUM%2BmbzHEFhnyFqD01PNiik6myA1mvhuicFwuTwK1X9yxBnd5lc0U%2FFZC8u9S7Qt7CkMLyF40RcmQNdMJWU9b8GOqUBEnQMZh8y5sY5EDoLFfL%2Bo1CJ%2BuP5SrNOXcJ82SQsX9agG%2F53z3iyyAM5ZMQf5IiO70T3A%2FAUiS%2BLCc9SvijB0woikAdOUkSYc8lA8Zm9xycKHILHrfTgY5ybpTjpFHWd58wlg11HPRJ8ZHIHl8adr0SdhLVy6tuQoLNLB1ORSeqvEBJiKM9QejrvfbmnovgKSGSuzxwRzWZDXaaWV5%2FRwrq6afTG&X-Amz-Signature=447dff6ddef9b5f4fea11e174490f14a01dabc99e5ea7296ccdbea867b62abea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
