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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEGN47I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC6CrrXYgmsrmc5Trbsyuzc8N7fkoyZuLCDXyHqEoMGvwIgL5vgWQayhYuxEeeoPvH8YtH29UZtp5uHOgyMYHU1bTUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDi8rchcV%2B3tR8e3SSrcA15YVqgm2tt0%2FTmqMFt9fzaMLSE1khl15oKz%2FcWzYn%2Fxz%2FnEo0A6fLhsKM%2BSbK86mx2UK0GmPP3sqixsf%2BMY9wK7VkDgLbRpgLtO3u5Jbgcpa79tIhwah%2FLb7twMkWE%2FOX863o5AmNFlgcN5dYhJVdA%2BmIU4btrcdNqUpIjjMaMQ72MFUMhnEVu%2Fqpuq5fXoGotQH56s0AsWxDrpScmiQwfi7iWqi3%2Br2E33peEDwdtGttou9FwjKTROyuSjUDs5oe%2BjheU8qJpvn7CvXq8UZO6xQWpkG3RvShx6rPd8PkkqEaRMjwRZV8EHQutcG6PeLeEHRoRJorMS82rz6Ng5GztcAb4lQX%2FI681XSnSh7GvGyxp5kgJP73h1FDTcFCfcW9zFUFDKWQLeIdevwA%2FOg29N4RoHEhw1FscWHxOw%2BEddbG5YjQd%2BJQrQ%2BScIySZJnEf5AWBr4EpCXY0023g0r1bfbFfxl8nFDbWbQ2pGzeJZTZ%2BF4eqYdoVDLMT6hKh6h3zZKUVXCdnwJoE0N5qh8CSQumU0iaB%2BfhpCH4wG1OAH6oOoP4hxd37cklQi7su4oqvChsEul7XJJanxzkWHBRakyQCb9tPb%2FGDCsVNT19e8mt3Si4Agc663lszyMLza%2FMkGOqUB4yuHnMONncuzc3P2BxqvfM%2FHS0QccWAtzLLXuLneyphy93RsG1m%2BUyNb8nbKBZiI1TOffjxTK%2BH1iOlBlcZj%2B6DBSYLv5eMUt7kTXOv6YofSKrvcrnMDSeOPHAHvDtbMaxZ05LYncoc4vvKO%2F6H5jz1DVyXEbU0H0MnvBUHbLWrJHyJaRQJr7IM97H7zeX88gFU9b7HrhPqzb3SNeHsKyHU75Pfq&X-Amz-Signature=7d15ce5a5d5a1e637b08ee6bb6806ce7a54f0fc7ee0a365b052a2807280776c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEGN47I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC6CrrXYgmsrmc5Trbsyuzc8N7fkoyZuLCDXyHqEoMGvwIgL5vgWQayhYuxEeeoPvH8YtH29UZtp5uHOgyMYHU1bTUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDi8rchcV%2B3tR8e3SSrcA15YVqgm2tt0%2FTmqMFt9fzaMLSE1khl15oKz%2FcWzYn%2Fxz%2FnEo0A6fLhsKM%2BSbK86mx2UK0GmPP3sqixsf%2BMY9wK7VkDgLbRpgLtO3u5Jbgcpa79tIhwah%2FLb7twMkWE%2FOX863o5AmNFlgcN5dYhJVdA%2BmIU4btrcdNqUpIjjMaMQ72MFUMhnEVu%2Fqpuq5fXoGotQH56s0AsWxDrpScmiQwfi7iWqi3%2Br2E33peEDwdtGttou9FwjKTROyuSjUDs5oe%2BjheU8qJpvn7CvXq8UZO6xQWpkG3RvShx6rPd8PkkqEaRMjwRZV8EHQutcG6PeLeEHRoRJorMS82rz6Ng5GztcAb4lQX%2FI681XSnSh7GvGyxp5kgJP73h1FDTcFCfcW9zFUFDKWQLeIdevwA%2FOg29N4RoHEhw1FscWHxOw%2BEddbG5YjQd%2BJQrQ%2BScIySZJnEf5AWBr4EpCXY0023g0r1bfbFfxl8nFDbWbQ2pGzeJZTZ%2BF4eqYdoVDLMT6hKh6h3zZKUVXCdnwJoE0N5qh8CSQumU0iaB%2BfhpCH4wG1OAH6oOoP4hxd37cklQi7su4oqvChsEul7XJJanxzkWHBRakyQCb9tPb%2FGDCsVNT19e8mt3Si4Agc663lszyMLza%2FMkGOqUB4yuHnMONncuzc3P2BxqvfM%2FHS0QccWAtzLLXuLneyphy93RsG1m%2BUyNb8nbKBZiI1TOffjxTK%2BH1iOlBlcZj%2B6DBSYLv5eMUt7kTXOv6YofSKrvcrnMDSeOPHAHvDtbMaxZ05LYncoc4vvKO%2F6H5jz1DVyXEbU0H0MnvBUHbLWrJHyJaRQJr7IM97H7zeX88gFU9b7HrhPqzb3SNeHsKyHU75Pfq&X-Amz-Signature=e0c0e1599247c676ccf7d645bf9c1fd735815627eb841e0ec75e2440231fedc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEGN47I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC6CrrXYgmsrmc5Trbsyuzc8N7fkoyZuLCDXyHqEoMGvwIgL5vgWQayhYuxEeeoPvH8YtH29UZtp5uHOgyMYHU1bTUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDi8rchcV%2B3tR8e3SSrcA15YVqgm2tt0%2FTmqMFt9fzaMLSE1khl15oKz%2FcWzYn%2Fxz%2FnEo0A6fLhsKM%2BSbK86mx2UK0GmPP3sqixsf%2BMY9wK7VkDgLbRpgLtO3u5Jbgcpa79tIhwah%2FLb7twMkWE%2FOX863o5AmNFlgcN5dYhJVdA%2BmIU4btrcdNqUpIjjMaMQ72MFUMhnEVu%2Fqpuq5fXoGotQH56s0AsWxDrpScmiQwfi7iWqi3%2Br2E33peEDwdtGttou9FwjKTROyuSjUDs5oe%2BjheU8qJpvn7CvXq8UZO6xQWpkG3RvShx6rPd8PkkqEaRMjwRZV8EHQutcG6PeLeEHRoRJorMS82rz6Ng5GztcAb4lQX%2FI681XSnSh7GvGyxp5kgJP73h1FDTcFCfcW9zFUFDKWQLeIdevwA%2FOg29N4RoHEhw1FscWHxOw%2BEddbG5YjQd%2BJQrQ%2BScIySZJnEf5AWBr4EpCXY0023g0r1bfbFfxl8nFDbWbQ2pGzeJZTZ%2BF4eqYdoVDLMT6hKh6h3zZKUVXCdnwJoE0N5qh8CSQumU0iaB%2BfhpCH4wG1OAH6oOoP4hxd37cklQi7su4oqvChsEul7XJJanxzkWHBRakyQCb9tPb%2FGDCsVNT19e8mt3Si4Agc663lszyMLza%2FMkGOqUB4yuHnMONncuzc3P2BxqvfM%2FHS0QccWAtzLLXuLneyphy93RsG1m%2BUyNb8nbKBZiI1TOffjxTK%2BH1iOlBlcZj%2B6DBSYLv5eMUt7kTXOv6YofSKrvcrnMDSeOPHAHvDtbMaxZ05LYncoc4vvKO%2F6H5jz1DVyXEbU0H0MnvBUHbLWrJHyJaRQJr7IM97H7zeX88gFU9b7HrhPqzb3SNeHsKyHU75Pfq&X-Amz-Signature=6d2049ff5886427026df0dc2f4749c2fd2920843138d45c881449e528c66d734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
