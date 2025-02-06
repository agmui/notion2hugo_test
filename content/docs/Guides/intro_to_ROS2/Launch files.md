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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH7P54G2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEhN10innjWrVb4AcAL8WwPK12SnKxIjDLCdzKcRVEUtAiEA5yIjlJvhembKHINOcg0ECezqL%2FOwkIbvDklkw9xxbU4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOi1RpwEn7ec%2FhAlQCrcAyQWF1ZNj1hohISoIWpx7I7xa3M0RVbsqcq2blGP1HblO5tSte53mwJ4SpBR6LwHLZi5af9GbFg3TT9JdSV5%2Bl3HhleuD3UK5gR5I5YUho6XRGdQ830JHN%2BFSQwrNJFEGsp1NYjj8QnDaBp2x4Ohvl1fcXiilAGlxNDUxfHW4z6zWNAXwnDAEIYN1dqXq5LBf%2FNzHFZZYJbIpmqJY3IvgSYV81woNhRsNgoUfs3Hpic36yEb4CjaOb888nzNSrKUCBDRZKflpBlgDlzxxQftRgmpTcrOU8Lcg%2FGcsTO6ZJIf%2Bs%2BUPTAhodwcLnjkSbyyiXrRwChdtxKWFewoT8tlq7FU1NYc9meQxR1bhjJDRH9DxmV1plcgkOItaFgqT4pUBpKQtq%2F%2BD6MCA5Bz2odecN9Y0eXLySM2%2Fh2RQR442zYk69O0uRFtMm0dG93PwGPplthxOhW3n0f0gGywf5Gq3EX16fN6oQYjisAjHOx38SMqgkPM6oHMUQNtLEVc7IUM2Pwm1xPVG652FKlPS6DspHWN0nTMWVzxcRMmtB1nFbPu1HhjqO2ZlHAsyqux8Yu0dEaimM5qxTOrdVZgnQMMgUa%2Bdm3KmlleWCkBx9G4qHcHCMdKo5ENRMhAANsiMLXsj70GOqUBNM%2FpjZJgYGDooH%2BiuWRaSydDjQhZ%2FEnuSvMwxR3SMYWaNKyZgYrpS9tsplcZ0md9KRXWDykRhTvXbNZ6GjyPnANHBmZU%2BVdhWDifyMh4mUn30ez8jfDodTPZgZrniVGNlZOF6Xgouqs17Vr9wUXcOQyzRWER6xbTugTReAWsuy6uWjs3XvDJziqWWwx%2B0wVfUBc%2B4o2mtcE%2FeYAwtMykbwe4Fik4&X-Amz-Signature=066089c24a6a7dea0a54fb19ccd1568300c61df4a07712536d0d5aac0ff0217e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH7P54G2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEhN10innjWrVb4AcAL8WwPK12SnKxIjDLCdzKcRVEUtAiEA5yIjlJvhembKHINOcg0ECezqL%2FOwkIbvDklkw9xxbU4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOi1RpwEn7ec%2FhAlQCrcAyQWF1ZNj1hohISoIWpx7I7xa3M0RVbsqcq2blGP1HblO5tSte53mwJ4SpBR6LwHLZi5af9GbFg3TT9JdSV5%2Bl3HhleuD3UK5gR5I5YUho6XRGdQ830JHN%2BFSQwrNJFEGsp1NYjj8QnDaBp2x4Ohvl1fcXiilAGlxNDUxfHW4z6zWNAXwnDAEIYN1dqXq5LBf%2FNzHFZZYJbIpmqJY3IvgSYV81woNhRsNgoUfs3Hpic36yEb4CjaOb888nzNSrKUCBDRZKflpBlgDlzxxQftRgmpTcrOU8Lcg%2FGcsTO6ZJIf%2Bs%2BUPTAhodwcLnjkSbyyiXrRwChdtxKWFewoT8tlq7FU1NYc9meQxR1bhjJDRH9DxmV1plcgkOItaFgqT4pUBpKQtq%2F%2BD6MCA5Bz2odecN9Y0eXLySM2%2Fh2RQR442zYk69O0uRFtMm0dG93PwGPplthxOhW3n0f0gGywf5Gq3EX16fN6oQYjisAjHOx38SMqgkPM6oHMUQNtLEVc7IUM2Pwm1xPVG652FKlPS6DspHWN0nTMWVzxcRMmtB1nFbPu1HhjqO2ZlHAsyqux8Yu0dEaimM5qxTOrdVZgnQMMgUa%2Bdm3KmlleWCkBx9G4qHcHCMdKo5ENRMhAANsiMLXsj70GOqUBNM%2FpjZJgYGDooH%2BiuWRaSydDjQhZ%2FEnuSvMwxR3SMYWaNKyZgYrpS9tsplcZ0md9KRXWDykRhTvXbNZ6GjyPnANHBmZU%2BVdhWDifyMh4mUn30ez8jfDodTPZgZrniVGNlZOF6Xgouqs17Vr9wUXcOQyzRWER6xbTugTReAWsuy6uWjs3XvDJziqWWwx%2B0wVfUBc%2B4o2mtcE%2FeYAwtMykbwe4Fik4&X-Amz-Signature=c3eb98feef3ec6445d5409505c8120d3596afdeff15ca9a45cf69b5f575fb9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH7P54G2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEhN10innjWrVb4AcAL8WwPK12SnKxIjDLCdzKcRVEUtAiEA5yIjlJvhembKHINOcg0ECezqL%2FOwkIbvDklkw9xxbU4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOi1RpwEn7ec%2FhAlQCrcAyQWF1ZNj1hohISoIWpx7I7xa3M0RVbsqcq2blGP1HblO5tSte53mwJ4SpBR6LwHLZi5af9GbFg3TT9JdSV5%2Bl3HhleuD3UK5gR5I5YUho6XRGdQ830JHN%2BFSQwrNJFEGsp1NYjj8QnDaBp2x4Ohvl1fcXiilAGlxNDUxfHW4z6zWNAXwnDAEIYN1dqXq5LBf%2FNzHFZZYJbIpmqJY3IvgSYV81woNhRsNgoUfs3Hpic36yEb4CjaOb888nzNSrKUCBDRZKflpBlgDlzxxQftRgmpTcrOU8Lcg%2FGcsTO6ZJIf%2Bs%2BUPTAhodwcLnjkSbyyiXrRwChdtxKWFewoT8tlq7FU1NYc9meQxR1bhjJDRH9DxmV1plcgkOItaFgqT4pUBpKQtq%2F%2BD6MCA5Bz2odecN9Y0eXLySM2%2Fh2RQR442zYk69O0uRFtMm0dG93PwGPplthxOhW3n0f0gGywf5Gq3EX16fN6oQYjisAjHOx38SMqgkPM6oHMUQNtLEVc7IUM2Pwm1xPVG652FKlPS6DspHWN0nTMWVzxcRMmtB1nFbPu1HhjqO2ZlHAsyqux8Yu0dEaimM5qxTOrdVZgnQMMgUa%2Bdm3KmlleWCkBx9G4qHcHCMdKo5ENRMhAANsiMLXsj70GOqUBNM%2FpjZJgYGDooH%2BiuWRaSydDjQhZ%2FEnuSvMwxR3SMYWaNKyZgYrpS9tsplcZ0md9KRXWDykRhTvXbNZ6GjyPnANHBmZU%2BVdhWDifyMh4mUn30ez8jfDodTPZgZrniVGNlZOF6Xgouqs17Vr9wUXcOQyzRWER6xbTugTReAWsuy6uWjs3XvDJziqWWwx%2B0wVfUBc%2B4o2mtcE%2FeYAwtMykbwe4Fik4&X-Amz-Signature=202cd0217e6d3e242cffee834834c018287c6a98a5065b54a8ed6b517175723e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
