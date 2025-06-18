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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=aba60642f4c12956a778fbb6508a3df4fa995cb5f5520fd190061120d63bcbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=9389f626e1970fc75ab27b0570c4fa50ee9cf3f79305e555e07f05cb45dd1e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=e925f94d45081dd9809786210cff37825da4171dc61a1b092c61df8c1f68596b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
