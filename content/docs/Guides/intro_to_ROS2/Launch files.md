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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HDKTSD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDuo2FV7lty%2FSq2sX%2FmbmGdVF1fMdoruHYum7nC6rqFqQIgYJXHxUHwnxGjuRJRL%2FchnBO4OPIaKsi%2FAiXhm2CX8eQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwlwimsknOiglvgVircA7LtvMf6%2Bo%2FGRmmEHZsWpSok50uVQ2ggI9aHD9cnXfAhav8cdYn6%2BxJj3UZS%2Fmfm%2FecOD1IaR3VlGNiaOnk4fp1kTIRZHEaZF1WOkiZBSIsF8CZQZ73BD575gIzs2tjFbGmuKFgwYWaNGA3EvwsUgfSm09Tf8VkxU0CCdNQWwhqRryn4woZnAclh8gT2pXfWJG2oJOUcy19IaXMHUdyoM65RutuPSA2CDK1Spti3djcQeJAeT6tTPBFHYDUzY2BkiKi5x5Qd%2FYbtjzuERXwgXLeaDR%2FQ17Yy9jg7f0r7gxwLWaVJO2R0CZD3Ba6KxS7ErJyasceYoE1F4H9TofeWB%2BiFkyQixqOg1b4FLg1i4mSPu8kxgWeXyWugy0d7WAvleHhxj2ugKh85N4VPwJi2dplDjfg%2FCrDnYegF4H%2BA6JMl7FVuy2goz9o981xxykWuaZAXCMO5N7ArN2GZTFJp7fkUpgTBo74vd975bYFXFeHGBMUVqyZkD4zZlEgBskXn%2FSGCbXr0fS6XLS%2FT6F9RVP4BqGBrl1sRsGRBECNMCFiz6HrT%2FUJjnZJlgXO2zD3QBUJ78hOey1hEoXeS4tBaVa2G1LQczq2Iy6NG1oAPOrlJ0m4piEorby9LycWtMKmC%2BsEGOqUB0WFgtoKmp%2Bj2ZDy2r%2F0A5OhR2Jc%2FpOZToIhXyen%2BLzyi41ZhwaqBb5d580qEdcpfS2cYZJUX9%2BkrKKY4jKoZ5ZjrsRnqiK8h4D%2FVYJPVHGEz0gqM%2F5KTjQoJIuOT3SQJj09YYTvTWvq86A0Xi05ie1o44XQ61XTlntksOeEq7bk4D7HhRTd2cz0Cadyde052MxKR4nhRJC4%2BVicjdTRyKUtqaPjx&X-Amz-Signature=104b016297abb88efe1e620697ad93100eb3ec5f85b6acb10f8fd65c7aaea598&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HDKTSD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDuo2FV7lty%2FSq2sX%2FmbmGdVF1fMdoruHYum7nC6rqFqQIgYJXHxUHwnxGjuRJRL%2FchnBO4OPIaKsi%2FAiXhm2CX8eQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwlwimsknOiglvgVircA7LtvMf6%2Bo%2FGRmmEHZsWpSok50uVQ2ggI9aHD9cnXfAhav8cdYn6%2BxJj3UZS%2Fmfm%2FecOD1IaR3VlGNiaOnk4fp1kTIRZHEaZF1WOkiZBSIsF8CZQZ73BD575gIzs2tjFbGmuKFgwYWaNGA3EvwsUgfSm09Tf8VkxU0CCdNQWwhqRryn4woZnAclh8gT2pXfWJG2oJOUcy19IaXMHUdyoM65RutuPSA2CDK1Spti3djcQeJAeT6tTPBFHYDUzY2BkiKi5x5Qd%2FYbtjzuERXwgXLeaDR%2FQ17Yy9jg7f0r7gxwLWaVJO2R0CZD3Ba6KxS7ErJyasceYoE1F4H9TofeWB%2BiFkyQixqOg1b4FLg1i4mSPu8kxgWeXyWugy0d7WAvleHhxj2ugKh85N4VPwJi2dplDjfg%2FCrDnYegF4H%2BA6JMl7FVuy2goz9o981xxykWuaZAXCMO5N7ArN2GZTFJp7fkUpgTBo74vd975bYFXFeHGBMUVqyZkD4zZlEgBskXn%2FSGCbXr0fS6XLS%2FT6F9RVP4BqGBrl1sRsGRBECNMCFiz6HrT%2FUJjnZJlgXO2zD3QBUJ78hOey1hEoXeS4tBaVa2G1LQczq2Iy6NG1oAPOrlJ0m4piEorby9LycWtMKmC%2BsEGOqUB0WFgtoKmp%2Bj2ZDy2r%2F0A5OhR2Jc%2FpOZToIhXyen%2BLzyi41ZhwaqBb5d580qEdcpfS2cYZJUX9%2BkrKKY4jKoZ5ZjrsRnqiK8h4D%2FVYJPVHGEz0gqM%2F5KTjQoJIuOT3SQJj09YYTvTWvq86A0Xi05ie1o44XQ61XTlntksOeEq7bk4D7HhRTd2cz0Cadyde052MxKR4nhRJC4%2BVicjdTRyKUtqaPjx&X-Amz-Signature=ea3dc25fad2c0e07c2a11e22a7927f871129d9147a9491f43835e2565fd1d139&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HDKTSD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDuo2FV7lty%2FSq2sX%2FmbmGdVF1fMdoruHYum7nC6rqFqQIgYJXHxUHwnxGjuRJRL%2FchnBO4OPIaKsi%2FAiXhm2CX8eQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwlwimsknOiglvgVircA7LtvMf6%2Bo%2FGRmmEHZsWpSok50uVQ2ggI9aHD9cnXfAhav8cdYn6%2BxJj3UZS%2Fmfm%2FecOD1IaR3VlGNiaOnk4fp1kTIRZHEaZF1WOkiZBSIsF8CZQZ73BD575gIzs2tjFbGmuKFgwYWaNGA3EvwsUgfSm09Tf8VkxU0CCdNQWwhqRryn4woZnAclh8gT2pXfWJG2oJOUcy19IaXMHUdyoM65RutuPSA2CDK1Spti3djcQeJAeT6tTPBFHYDUzY2BkiKi5x5Qd%2FYbtjzuERXwgXLeaDR%2FQ17Yy9jg7f0r7gxwLWaVJO2R0CZD3Ba6KxS7ErJyasceYoE1F4H9TofeWB%2BiFkyQixqOg1b4FLg1i4mSPu8kxgWeXyWugy0d7WAvleHhxj2ugKh85N4VPwJi2dplDjfg%2FCrDnYegF4H%2BA6JMl7FVuy2goz9o981xxykWuaZAXCMO5N7ArN2GZTFJp7fkUpgTBo74vd975bYFXFeHGBMUVqyZkD4zZlEgBskXn%2FSGCbXr0fS6XLS%2FT6F9RVP4BqGBrl1sRsGRBECNMCFiz6HrT%2FUJjnZJlgXO2zD3QBUJ78hOey1hEoXeS4tBaVa2G1LQczq2Iy6NG1oAPOrlJ0m4piEorby9LycWtMKmC%2BsEGOqUB0WFgtoKmp%2Bj2ZDy2r%2F0A5OhR2Jc%2FpOZToIhXyen%2BLzyi41ZhwaqBb5d580qEdcpfS2cYZJUX9%2BkrKKY4jKoZ5ZjrsRnqiK8h4D%2FVYJPVHGEz0gqM%2F5KTjQoJIuOT3SQJj09YYTvTWvq86A0Xi05ie1o44XQ61XTlntksOeEq7bk4D7HhRTd2cz0Cadyde052MxKR4nhRJC4%2BVicjdTRyKUtqaPjx&X-Amz-Signature=97a936344f507068b333e388f9cf01e7c0788ded786ef6ed3b39c818249bb69c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
