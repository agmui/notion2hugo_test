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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DRXU64%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCHNzRNDa51K4npc4XBfhkaaebKopI5d6QNmxNJAY8YMgIgRF3yEDpu3%2FajkH5aUQ3yRuR4MzjU2hu1I%2BwxniExr0wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL2aYVHyMU4SSDIz8CrcAyxwC1%2Bk6vrH%2BjDlk9cA07%2BZJbD%2FUlPnHNcA%2BjwUcSXAPKwEqNVgEZ5fTtrDFJc78oygST0730VZPDS81K4iHxo24lCVO8rsRpGN3JAwMhcDcv5w9a2o8PinmSwy5s9a4LRTkKL%2Bxv8DR6e%2FccbOTix9cMON5S6GtEmQdUmh3yKy1CzeJvFBl8U%2Be4qzASdzSecBzwlSxTp1ALp0UK6pDNAfdpKKbiasxJxFf%2B53chcRD0aJQYaOJLPV4qG%2B9ykT%2BmdE5V82AMAGhHHqKCPkLp3Sj4BpTVvsYlXJL8BgcfW%2BuJR9MEhlTIKltSVGG8kJOafynbZr01z%2BehflFIfIh%2F81QnZK3L2s6%2Fq7bpuwpLWLn%2B4FFtPSkmgk5%2BSeHEuCNkUABucyoOz9%2B0KrIXW6t9Hu97lYyAS6uq2byKunrntU3k0f9lz%2Bth%2FF%2FrSCavOwOTGf4o8SVzKAs4pGiGf1vKxugVFxsXWG07%2BI8ASdMNyN0sA2ZoWk2ST8QDQt2n%2FI14YWoHoyk7aHgxwkTCK1eyhEBmLEMcIX4W8w1eOHkWKJZDsD0WVFlE68E7VtqB4sHQEjdxGszfEgdMKjq96xkB%2F5NlOtlEuRtnHC7ozXHwlpu84TI7RHDeEy564RMJqNjcQGOqUBuc40UqPXLSV5mpKw2YvzsHoocz8J8qA5WMl8z%2Fsn2VUslepUz6A87U10C0df3cFFgZvf2rUVYEccQkcpRHBTeu7eeAaYGgWtvdbmz7GLYV%2BgyN%2FWCrXkjFIOCD4SfCS%2BTsx0ksf%2B2eiXHLOJpnyAyHZP5N2KiZmYvUgsr%2BCW52ZbJHHejZKqJgmeA1YVPxUD7%2Fh88X4VI33QztQe7UYHrJbe9N9N&X-Amz-Signature=cbfb49f96e9d7fbe3bd5175894ba3ad19ef82332c128b9e326bd4fc863d5e991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DRXU64%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCHNzRNDa51K4npc4XBfhkaaebKopI5d6QNmxNJAY8YMgIgRF3yEDpu3%2FajkH5aUQ3yRuR4MzjU2hu1I%2BwxniExr0wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL2aYVHyMU4SSDIz8CrcAyxwC1%2Bk6vrH%2BjDlk9cA07%2BZJbD%2FUlPnHNcA%2BjwUcSXAPKwEqNVgEZ5fTtrDFJc78oygST0730VZPDS81K4iHxo24lCVO8rsRpGN3JAwMhcDcv5w9a2o8PinmSwy5s9a4LRTkKL%2Bxv8DR6e%2FccbOTix9cMON5S6GtEmQdUmh3yKy1CzeJvFBl8U%2Be4qzASdzSecBzwlSxTp1ALp0UK6pDNAfdpKKbiasxJxFf%2B53chcRD0aJQYaOJLPV4qG%2B9ykT%2BmdE5V82AMAGhHHqKCPkLp3Sj4BpTVvsYlXJL8BgcfW%2BuJR9MEhlTIKltSVGG8kJOafynbZr01z%2BehflFIfIh%2F81QnZK3L2s6%2Fq7bpuwpLWLn%2B4FFtPSkmgk5%2BSeHEuCNkUABucyoOz9%2B0KrIXW6t9Hu97lYyAS6uq2byKunrntU3k0f9lz%2Bth%2FF%2FrSCavOwOTGf4o8SVzKAs4pGiGf1vKxugVFxsXWG07%2BI8ASdMNyN0sA2ZoWk2ST8QDQt2n%2FI14YWoHoyk7aHgxwkTCK1eyhEBmLEMcIX4W8w1eOHkWKJZDsD0WVFlE68E7VtqB4sHQEjdxGszfEgdMKjq96xkB%2F5NlOtlEuRtnHC7ozXHwlpu84TI7RHDeEy564RMJqNjcQGOqUBuc40UqPXLSV5mpKw2YvzsHoocz8J8qA5WMl8z%2Fsn2VUslepUz6A87U10C0df3cFFgZvf2rUVYEccQkcpRHBTeu7eeAaYGgWtvdbmz7GLYV%2BgyN%2FWCrXkjFIOCD4SfCS%2BTsx0ksf%2B2eiXHLOJpnyAyHZP5N2KiZmYvUgsr%2BCW52ZbJHHejZKqJgmeA1YVPxUD7%2Fh88X4VI33QztQe7UYHrJbe9N9N&X-Amz-Signature=e7e34125b2f88250f2f1fd6b78a03baf4243653d8ec15f5305e970105f4d6a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DRXU64%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCHNzRNDa51K4npc4XBfhkaaebKopI5d6QNmxNJAY8YMgIgRF3yEDpu3%2FajkH5aUQ3yRuR4MzjU2hu1I%2BwxniExr0wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL2aYVHyMU4SSDIz8CrcAyxwC1%2Bk6vrH%2BjDlk9cA07%2BZJbD%2FUlPnHNcA%2BjwUcSXAPKwEqNVgEZ5fTtrDFJc78oygST0730VZPDS81K4iHxo24lCVO8rsRpGN3JAwMhcDcv5w9a2o8PinmSwy5s9a4LRTkKL%2Bxv8DR6e%2FccbOTix9cMON5S6GtEmQdUmh3yKy1CzeJvFBl8U%2Be4qzASdzSecBzwlSxTp1ALp0UK6pDNAfdpKKbiasxJxFf%2B53chcRD0aJQYaOJLPV4qG%2B9ykT%2BmdE5V82AMAGhHHqKCPkLp3Sj4BpTVvsYlXJL8BgcfW%2BuJR9MEhlTIKltSVGG8kJOafynbZr01z%2BehflFIfIh%2F81QnZK3L2s6%2Fq7bpuwpLWLn%2B4FFtPSkmgk5%2BSeHEuCNkUABucyoOz9%2B0KrIXW6t9Hu97lYyAS6uq2byKunrntU3k0f9lz%2Bth%2FF%2FrSCavOwOTGf4o8SVzKAs4pGiGf1vKxugVFxsXWG07%2BI8ASdMNyN0sA2ZoWk2ST8QDQt2n%2FI14YWoHoyk7aHgxwkTCK1eyhEBmLEMcIX4W8w1eOHkWKJZDsD0WVFlE68E7VtqB4sHQEjdxGszfEgdMKjq96xkB%2F5NlOtlEuRtnHC7ozXHwlpu84TI7RHDeEy564RMJqNjcQGOqUBuc40UqPXLSV5mpKw2YvzsHoocz8J8qA5WMl8z%2Fsn2VUslepUz6A87U10C0df3cFFgZvf2rUVYEccQkcpRHBTeu7eeAaYGgWtvdbmz7GLYV%2BgyN%2FWCrXkjFIOCD4SfCS%2BTsx0ksf%2B2eiXHLOJpnyAyHZP5N2KiZmYvUgsr%2BCW52ZbJHHejZKqJgmeA1YVPxUD7%2Fh88X4VI33QztQe7UYHrJbe9N9N&X-Amz-Signature=7bf6801fcd7dcfcdfb7f8eedd28a13c9764f4ebcc3a56d6f6ab039549ec0af85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
