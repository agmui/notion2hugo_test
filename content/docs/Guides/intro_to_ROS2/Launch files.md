---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4KSADT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPMaF2eGYiy8zy0pwAnRV76CfBxxmqjm%2B3wzzK0ioFmAiEAgjPw4vk2im5Z%2FLnlgbEc3LY0Op%2FnGntudGxSYYJgAHAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPP30IAQjRZaawoSyrcA%2Brte92awLimhstx6jDyFaXlX37MJ9uPp8yilYaMkSH1JS%2Fj7vFAYUEIcj9jFG5nvmNdjYxVpZIOCPdgdQKieEeIwpG%2B%2BKMwxpOl66KTEF62vBMYx4Hcxcc7CeCTCVzBLOElJFJC%2FXrGd9j8eOMYgIDiqR5s%2F3kxU2rm7g7yIyOvwleWSn16H4kP1TIvZtV5YWdE9KQ1xZuZmFV14zWfPe2v3T45IXYsV%2F4quT9K3fiQ3mGOvpbB%2FlPm7MZwmvnjppJ%2BolaQ7CscGDPt87GjT4wFlmeMOEXvoathUbpml38gbsmNmLveP0a8OfHYpgtGgo1mrXAElj3YCdGEOMuKWODzt7RDh1Allh2uyzER7KPfkUxEdf8ypjXIEaYxqo8vKEmvlfXQIZ1qpi2VqmdzTZ6uiFK4rK14IsRe96wdJ1JprF5oVsSSwC%2F0%2FM31wWnxInGVPuYcsszoEL6P8YMiawR5tdvjrL7leXraRUjSB3j6ICLsMmEiJpU8ukSspQCqcZD7x4N91YoKyjyeqY5ZlwEa%2BkQ176zda2zYlQDJXDsS6Tqv%2FQLZvapiZ%2BMQPz%2BfS%2BaXpacCgUTu7NVyzJNIAgXH4gn8La7NfiFtLvRUz9RPSO37MJWTd7VtlIfuMIzwp8QGOqUBVuLU8igvAS3lbQcnTaHj4%2B%2BvrX6VzU8UcSoS%2BuQvNdRpyIcCJXBaE7PudEfSzTR0iVYS0FGlOw46GHv%2Bbli8EiYtHF98UPihqmREzbp%2BUCzU%2F90Im0VYBvs%2FbPlfOenKch%2BtcR3ZIJ2H0xBMT4gEZkbaTYyk67fxh4KJx3dvdt2rRP1YlaxurOMP95rHMdsVLCyk4aCxjRM5%2Ft73g8xvWuMxmtbD&X-Amz-Signature=55bab7ca8a8136de3776f08c87fa30180d074d7796e269dce63be85684158e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4KSADT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPMaF2eGYiy8zy0pwAnRV76CfBxxmqjm%2B3wzzK0ioFmAiEAgjPw4vk2im5Z%2FLnlgbEc3LY0Op%2FnGntudGxSYYJgAHAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPP30IAQjRZaawoSyrcA%2Brte92awLimhstx6jDyFaXlX37MJ9uPp8yilYaMkSH1JS%2Fj7vFAYUEIcj9jFG5nvmNdjYxVpZIOCPdgdQKieEeIwpG%2B%2BKMwxpOl66KTEF62vBMYx4Hcxcc7CeCTCVzBLOElJFJC%2FXrGd9j8eOMYgIDiqR5s%2F3kxU2rm7g7yIyOvwleWSn16H4kP1TIvZtV5YWdE9KQ1xZuZmFV14zWfPe2v3T45IXYsV%2F4quT9K3fiQ3mGOvpbB%2FlPm7MZwmvnjppJ%2BolaQ7CscGDPt87GjT4wFlmeMOEXvoathUbpml38gbsmNmLveP0a8OfHYpgtGgo1mrXAElj3YCdGEOMuKWODzt7RDh1Allh2uyzER7KPfkUxEdf8ypjXIEaYxqo8vKEmvlfXQIZ1qpi2VqmdzTZ6uiFK4rK14IsRe96wdJ1JprF5oVsSSwC%2F0%2FM31wWnxInGVPuYcsszoEL6P8YMiawR5tdvjrL7leXraRUjSB3j6ICLsMmEiJpU8ukSspQCqcZD7x4N91YoKyjyeqY5ZlwEa%2BkQ176zda2zYlQDJXDsS6Tqv%2FQLZvapiZ%2BMQPz%2BfS%2BaXpacCgUTu7NVyzJNIAgXH4gn8La7NfiFtLvRUz9RPSO37MJWTd7VtlIfuMIzwp8QGOqUBVuLU8igvAS3lbQcnTaHj4%2B%2BvrX6VzU8UcSoS%2BuQvNdRpyIcCJXBaE7PudEfSzTR0iVYS0FGlOw46GHv%2Bbli8EiYtHF98UPihqmREzbp%2BUCzU%2F90Im0VYBvs%2FbPlfOenKch%2BtcR3ZIJ2H0xBMT4gEZkbaTYyk67fxh4KJx3dvdt2rRP1YlaxurOMP95rHMdsVLCyk4aCxjRM5%2Ft73g8xvWuMxmtbD&X-Amz-Signature=52a6d8e886fc8e900eeb53bd449fcd0e0dc3a9ade709cc623529609aa7956ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4KSADT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPMaF2eGYiy8zy0pwAnRV76CfBxxmqjm%2B3wzzK0ioFmAiEAgjPw4vk2im5Z%2FLnlgbEc3LY0Op%2FnGntudGxSYYJgAHAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPP30IAQjRZaawoSyrcA%2Brte92awLimhstx6jDyFaXlX37MJ9uPp8yilYaMkSH1JS%2Fj7vFAYUEIcj9jFG5nvmNdjYxVpZIOCPdgdQKieEeIwpG%2B%2BKMwxpOl66KTEF62vBMYx4Hcxcc7CeCTCVzBLOElJFJC%2FXrGd9j8eOMYgIDiqR5s%2F3kxU2rm7g7yIyOvwleWSn16H4kP1TIvZtV5YWdE9KQ1xZuZmFV14zWfPe2v3T45IXYsV%2F4quT9K3fiQ3mGOvpbB%2FlPm7MZwmvnjppJ%2BolaQ7CscGDPt87GjT4wFlmeMOEXvoathUbpml38gbsmNmLveP0a8OfHYpgtGgo1mrXAElj3YCdGEOMuKWODzt7RDh1Allh2uyzER7KPfkUxEdf8ypjXIEaYxqo8vKEmvlfXQIZ1qpi2VqmdzTZ6uiFK4rK14IsRe96wdJ1JprF5oVsSSwC%2F0%2FM31wWnxInGVPuYcsszoEL6P8YMiawR5tdvjrL7leXraRUjSB3j6ICLsMmEiJpU8ukSspQCqcZD7x4N91YoKyjyeqY5ZlwEa%2BkQ176zda2zYlQDJXDsS6Tqv%2FQLZvapiZ%2BMQPz%2BfS%2BaXpacCgUTu7NVyzJNIAgXH4gn8La7NfiFtLvRUz9RPSO37MJWTd7VtlIfuMIzwp8QGOqUBVuLU8igvAS3lbQcnTaHj4%2B%2BvrX6VzU8UcSoS%2BuQvNdRpyIcCJXBaE7PudEfSzTR0iVYS0FGlOw46GHv%2Bbli8EiYtHF98UPihqmREzbp%2BUCzU%2F90Im0VYBvs%2FbPlfOenKch%2BtcR3ZIJ2H0xBMT4gEZkbaTYyk67fxh4KJx3dvdt2rRP1YlaxurOMP95rHMdsVLCyk4aCxjRM5%2Ft73g8xvWuMxmtbD&X-Amz-Signature=879d3fd1a5d26be9257b5eb29883d8542a40acf88721298662efb5f1f984cf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
