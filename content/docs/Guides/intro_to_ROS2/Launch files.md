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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLFWRJQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDS5syk%2FDw%2Bd3Iit%2BZB2FalEkXt225T7hp84jpDvH0ypQIgFiT1dljw6sC6J8nS4JYBq1nbGR6qGZKqMPmS5x9TgL4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcVDeGlSvIBswNppircA5wKRCjJYzF8pu4jl87q1CwlMtM2Dx0IQ4TQGXI2Xz6W1aWZ7aK8MWeP8jNT%2Bh%2BUhNIBBGenv%2FC4kWtjFfROhnmTuZjPuxp81Ua4Xg24xj6kiUp%2FDgM55LyyVOKBiG7OTFmd3mKnguXrhT%2BvEy9XftDQwmK4yXSPedhNIhi9EbVQp0%2BGZ6V9yqZAS6zT%2FyH79uIR7yOP2bCTWUAO1DkUaTR0SUfM%2B0YtDZfMsdl0%2FJk0CGYXjm7ogFibBNdHVyNLpDrDxNTTUBZH7yvL5iZo541No8in%2FaNbqvKk99sjnx1EjlO%2F0Z67bOJ1atrxelxFF0G8FVX4Q5C3PnWR3O9RarqL9qmaK9GziPdTZpK%2BC7fSD75vB%2BhS1dEUKip24OLaS7zckhBmU0%2BW2NgAFmJZQfTyIOGsgKRV2MsQbJeAxenvHT4dyWDfMY60faNjplO527QiSbraWDHqO%2BqG%2BBjsFRqQoMs2rslIRLbA%2FJOO1ifXzZlBGRQVEYISqY9r1BAAQseKSXd6SHW14HlneXziOaDBK4kF2lS9qYLLrwIb2oYPCTWKpRDqeIhmoHTGpw%2Fks8X1y%2F8j8VQCqnJs0lT64x10NWosFlWTsDmSdEIcN13fdHKNXv13XDwzQUHoMNvDx74GOqUByKD715Za9zB%2FiGAAQnwld0XJ6VGbvn0uKcTE6RPYdFYDkESQlCh5eAasWfsA4Am9jfq%2FxkWF3qTY%2FSJzFvJ10PSx1TFySHse2cb1pnsGXUyDc6jp%2Fe%2Fp5CGI9%2FJKs6fzY1Azd1TvM6l9PRyZgFm7%2BNTantLqQgdWnIR7Ms%2FGND0xFg5ADHdtqTu5OeKvDYPtni%2FV3zm5kofTz4tO2IEyWKFy%2Fn5L&X-Amz-Signature=8195d862718f43439eafaa97388f1539e76f0f4a28d4abfeb6ec0acd471c96ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLFWRJQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDS5syk%2FDw%2Bd3Iit%2BZB2FalEkXt225T7hp84jpDvH0ypQIgFiT1dljw6sC6J8nS4JYBq1nbGR6qGZKqMPmS5x9TgL4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcVDeGlSvIBswNppircA5wKRCjJYzF8pu4jl87q1CwlMtM2Dx0IQ4TQGXI2Xz6W1aWZ7aK8MWeP8jNT%2Bh%2BUhNIBBGenv%2FC4kWtjFfROhnmTuZjPuxp81Ua4Xg24xj6kiUp%2FDgM55LyyVOKBiG7OTFmd3mKnguXrhT%2BvEy9XftDQwmK4yXSPedhNIhi9EbVQp0%2BGZ6V9yqZAS6zT%2FyH79uIR7yOP2bCTWUAO1DkUaTR0SUfM%2B0YtDZfMsdl0%2FJk0CGYXjm7ogFibBNdHVyNLpDrDxNTTUBZH7yvL5iZo541No8in%2FaNbqvKk99sjnx1EjlO%2F0Z67bOJ1atrxelxFF0G8FVX4Q5C3PnWR3O9RarqL9qmaK9GziPdTZpK%2BC7fSD75vB%2BhS1dEUKip24OLaS7zckhBmU0%2BW2NgAFmJZQfTyIOGsgKRV2MsQbJeAxenvHT4dyWDfMY60faNjplO527QiSbraWDHqO%2BqG%2BBjsFRqQoMs2rslIRLbA%2FJOO1ifXzZlBGRQVEYISqY9r1BAAQseKSXd6SHW14HlneXziOaDBK4kF2lS9qYLLrwIb2oYPCTWKpRDqeIhmoHTGpw%2Fks8X1y%2F8j8VQCqnJs0lT64x10NWosFlWTsDmSdEIcN13fdHKNXv13XDwzQUHoMNvDx74GOqUByKD715Za9zB%2FiGAAQnwld0XJ6VGbvn0uKcTE6RPYdFYDkESQlCh5eAasWfsA4Am9jfq%2FxkWF3qTY%2FSJzFvJ10PSx1TFySHse2cb1pnsGXUyDc6jp%2Fe%2Fp5CGI9%2FJKs6fzY1Azd1TvM6l9PRyZgFm7%2BNTantLqQgdWnIR7Ms%2FGND0xFg5ADHdtqTu5OeKvDYPtni%2FV3zm5kofTz4tO2IEyWKFy%2Fn5L&X-Amz-Signature=ca5acfa19b66cfd94872378086fb0f1b278e8cacbb58adca943fc27cc793dddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLFWRJQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDS5syk%2FDw%2Bd3Iit%2BZB2FalEkXt225T7hp84jpDvH0ypQIgFiT1dljw6sC6J8nS4JYBq1nbGR6qGZKqMPmS5x9TgL4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcVDeGlSvIBswNppircA5wKRCjJYzF8pu4jl87q1CwlMtM2Dx0IQ4TQGXI2Xz6W1aWZ7aK8MWeP8jNT%2Bh%2BUhNIBBGenv%2FC4kWtjFfROhnmTuZjPuxp81Ua4Xg24xj6kiUp%2FDgM55LyyVOKBiG7OTFmd3mKnguXrhT%2BvEy9XftDQwmK4yXSPedhNIhi9EbVQp0%2BGZ6V9yqZAS6zT%2FyH79uIR7yOP2bCTWUAO1DkUaTR0SUfM%2B0YtDZfMsdl0%2FJk0CGYXjm7ogFibBNdHVyNLpDrDxNTTUBZH7yvL5iZo541No8in%2FaNbqvKk99sjnx1EjlO%2F0Z67bOJ1atrxelxFF0G8FVX4Q5C3PnWR3O9RarqL9qmaK9GziPdTZpK%2BC7fSD75vB%2BhS1dEUKip24OLaS7zckhBmU0%2BW2NgAFmJZQfTyIOGsgKRV2MsQbJeAxenvHT4dyWDfMY60faNjplO527QiSbraWDHqO%2BqG%2BBjsFRqQoMs2rslIRLbA%2FJOO1ifXzZlBGRQVEYISqY9r1BAAQseKSXd6SHW14HlneXziOaDBK4kF2lS9qYLLrwIb2oYPCTWKpRDqeIhmoHTGpw%2Fks8X1y%2F8j8VQCqnJs0lT64x10NWosFlWTsDmSdEIcN13fdHKNXv13XDwzQUHoMNvDx74GOqUByKD715Za9zB%2FiGAAQnwld0XJ6VGbvn0uKcTE6RPYdFYDkESQlCh5eAasWfsA4Am9jfq%2FxkWF3qTY%2FSJzFvJ10PSx1TFySHse2cb1pnsGXUyDc6jp%2Fe%2Fp5CGI9%2FJKs6fzY1Azd1TvM6l9PRyZgFm7%2BNTantLqQgdWnIR7Ms%2FGND0xFg5ADHdtqTu5OeKvDYPtni%2FV3zm5kofTz4tO2IEyWKFy%2Fn5L&X-Amz-Signature=5a2d67f61873f906e8545443e07ea349e409888e6bf682871c64e4172422108e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
