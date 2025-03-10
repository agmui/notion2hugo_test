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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN563FCU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCtJLvvWDWmnGViWwF0GR2zGxYlI7gX6rXa07Y6zO5fWgIgbkr9HAhUYfm6hiTN7Xf%2BZabc0pyKb6KhY5befeIu1Z0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzDTsb%2Bu%2BZCVrcF%2BircA3Lz1FmeQQ%2BGrpPqrscuNIuZbWDRpSvgxb39ItmjRba3skkTaXrmZZcntBoPEDEGQpjwOknNm%2BqU70wiQY%2BLC7mkgyKTMYX%2BHigjaO6cwKK4xStir906j2cyMVbqOUSrHclBDaG9tsdKhAQLzrlYo6sqkhbUKEIefwzgi9HZl2hmZHey2s75ClChIq85QVJFtszJWFDydgWNgJMwsYZLTGiQqz%2BNOoMRQKhR7oXZsLvJk6kWTwklK%2Fql%2FzTvhELEEohxdSla8M7BnidmEYR35SOz5UzmJFy94T2DvV%2FmtC1o4nVvWVRk8DYbkrcA63X%2BWtV8L8zL3HdyWJSS7huMWk1HKeqLOgWucV2k4eWItrowz0zfQLrOiW2lRykLcfXAYa2Heq%2BB3kLA1kqvz%2FNWzMEusNebaTIbju5YIkVMsRtZCHM4wYqYyZfR4OBxsF2xeQz5VTcf2d10%2B5OAhQX%2FKskWeug8XnPJOuaO2FwBfiDnCNRuwTkr57rDRRUB6LMHMSdLcjRQkgkKBlHgx7jFjPCF1hTG3mWpk5etfFzVJeERtuA%2BxWOld03HpnU3h3UImU4qNF0oUsLTlIRXSbmbAFyO7ZH0%2FgWHkMrX65j7fbTtLemIrkWmg1m7jwW5MNKLvb4GOqUBjkhycaX%2FvxZwIuB4puVb7tVTSDoNnLpPo2nC3mnmFOd1Lw%2B3FoPY3SQYEJripDSfIEoRSC79YbQR1mwOuQ0%2FmWhUaf0%2B2xstdOMeRdpz0U4UiQqYskAZzXYjd3Hq1KINPr6i82JHubYUMR2GnpLuNqPaeK3fH0VzmdbXlo%2F9gsIQRznmoHw2kaWifAV0D%2B6AL3WpFFGMkvxDB28AX0QfebopSLon&X-Amz-Signature=23b5aef8872be5d0baac88576bf2440749b75077b890f8377abfcbde132e9d00&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN563FCU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCtJLvvWDWmnGViWwF0GR2zGxYlI7gX6rXa07Y6zO5fWgIgbkr9HAhUYfm6hiTN7Xf%2BZabc0pyKb6KhY5befeIu1Z0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzDTsb%2Bu%2BZCVrcF%2BircA3Lz1FmeQQ%2BGrpPqrscuNIuZbWDRpSvgxb39ItmjRba3skkTaXrmZZcntBoPEDEGQpjwOknNm%2BqU70wiQY%2BLC7mkgyKTMYX%2BHigjaO6cwKK4xStir906j2cyMVbqOUSrHclBDaG9tsdKhAQLzrlYo6sqkhbUKEIefwzgi9HZl2hmZHey2s75ClChIq85QVJFtszJWFDydgWNgJMwsYZLTGiQqz%2BNOoMRQKhR7oXZsLvJk6kWTwklK%2Fql%2FzTvhELEEohxdSla8M7BnidmEYR35SOz5UzmJFy94T2DvV%2FmtC1o4nVvWVRk8DYbkrcA63X%2BWtV8L8zL3HdyWJSS7huMWk1HKeqLOgWucV2k4eWItrowz0zfQLrOiW2lRykLcfXAYa2Heq%2BB3kLA1kqvz%2FNWzMEusNebaTIbju5YIkVMsRtZCHM4wYqYyZfR4OBxsF2xeQz5VTcf2d10%2B5OAhQX%2FKskWeug8XnPJOuaO2FwBfiDnCNRuwTkr57rDRRUB6LMHMSdLcjRQkgkKBlHgx7jFjPCF1hTG3mWpk5etfFzVJeERtuA%2BxWOld03HpnU3h3UImU4qNF0oUsLTlIRXSbmbAFyO7ZH0%2FgWHkMrX65j7fbTtLemIrkWmg1m7jwW5MNKLvb4GOqUBjkhycaX%2FvxZwIuB4puVb7tVTSDoNnLpPo2nC3mnmFOd1Lw%2B3FoPY3SQYEJripDSfIEoRSC79YbQR1mwOuQ0%2FmWhUaf0%2B2xstdOMeRdpz0U4UiQqYskAZzXYjd3Hq1KINPr6i82JHubYUMR2GnpLuNqPaeK3fH0VzmdbXlo%2F9gsIQRznmoHw2kaWifAV0D%2B6AL3WpFFGMkvxDB28AX0QfebopSLon&X-Amz-Signature=5355726288c286bbef11f6edcf7312270834f94c8fdc2da381128b6af764d380&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN563FCU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCtJLvvWDWmnGViWwF0GR2zGxYlI7gX6rXa07Y6zO5fWgIgbkr9HAhUYfm6hiTN7Xf%2BZabc0pyKb6KhY5befeIu1Z0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzDTsb%2Bu%2BZCVrcF%2BircA3Lz1FmeQQ%2BGrpPqrscuNIuZbWDRpSvgxb39ItmjRba3skkTaXrmZZcntBoPEDEGQpjwOknNm%2BqU70wiQY%2BLC7mkgyKTMYX%2BHigjaO6cwKK4xStir906j2cyMVbqOUSrHclBDaG9tsdKhAQLzrlYo6sqkhbUKEIefwzgi9HZl2hmZHey2s75ClChIq85QVJFtszJWFDydgWNgJMwsYZLTGiQqz%2BNOoMRQKhR7oXZsLvJk6kWTwklK%2Fql%2FzTvhELEEohxdSla8M7BnidmEYR35SOz5UzmJFy94T2DvV%2FmtC1o4nVvWVRk8DYbkrcA63X%2BWtV8L8zL3HdyWJSS7huMWk1HKeqLOgWucV2k4eWItrowz0zfQLrOiW2lRykLcfXAYa2Heq%2BB3kLA1kqvz%2FNWzMEusNebaTIbju5YIkVMsRtZCHM4wYqYyZfR4OBxsF2xeQz5VTcf2d10%2B5OAhQX%2FKskWeug8XnPJOuaO2FwBfiDnCNRuwTkr57rDRRUB6LMHMSdLcjRQkgkKBlHgx7jFjPCF1hTG3mWpk5etfFzVJeERtuA%2BxWOld03HpnU3h3UImU4qNF0oUsLTlIRXSbmbAFyO7ZH0%2FgWHkMrX65j7fbTtLemIrkWmg1m7jwW5MNKLvb4GOqUBjkhycaX%2FvxZwIuB4puVb7tVTSDoNnLpPo2nC3mnmFOd1Lw%2B3FoPY3SQYEJripDSfIEoRSC79YbQR1mwOuQ0%2FmWhUaf0%2B2xstdOMeRdpz0U4UiQqYskAZzXYjd3Hq1KINPr6i82JHubYUMR2GnpLuNqPaeK3fH0VzmdbXlo%2F9gsIQRznmoHw2kaWifAV0D%2B6AL3WpFFGMkvxDB28AX0QfebopSLon&X-Amz-Signature=7521d13f03baaf2efc3c41523365f43ca40ba987cefa806768ebc7b3051a67c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
