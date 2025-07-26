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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVHPO2O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIB%2F6LqaS31zBimaTdDAh8E2q6GxdwW28R8QpKcf6xvPtAiEAnSJK%2BNqgRwKLt8PC6SRTjjpByCG8439ju98yb%2F0a2xMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJagspU5V36ag9IwrSrcAwYKLlhsvcpprCXoEN03NULreHes%2FZZjge4bXWFZ167jj3IScq6CFjpjtyVQhVblyEc7nqZyEiEgeFttYgtbEQUTQTLgWBH%2B3BXLeLVvj5yEZLRw764bTJINloeAy3IOnj5c3IkxsdMZ%2FhDV4FkHaHokjlPcjRE%2B41iY2R4LE8BRXVU20R0ldhzt26OBIze95ETWG1bFPnZ1I82lrELgkRxIkIn2VhoJNVSt4DcwGBvaC%2BzOSD2%2BzoEGI0fwjUY%2BYNNjaijrXW1oQOcGqyX%2B57M%2FXf9CiP3eeEupd9iFbjgt4Eqt1SF7Any%2FMeSmvGVOKF0VcCo4MG9tPEtekAQykaycW0Z6QuNs8i9T3HfLohX0xB8OPmBCSxr6jQBsTlU%2FKlr6shlJleWPYRMPDnANlxIW5rDsyyH0fKYB8Z8jdhLTGkawsy1EjvXPJJgALPF8TVAfcERMWuoUG3l57vRUmh2tPQEet5R4f1tnnblpLDL09BfiG9ooQupC%2FkkkVu%2FdcXSpYU9xosVtQjNv1DhMUDBRk4e5S9vEPqktS%2F9Kw63DWW86nqKv%2FvEOqPililXqvCTkaHHeVk3a7hxYRtLPFuZ1%2FXBLSFoahbM084vR7uEsjWpXR8h4bQUekn0dMJL%2FlMQGOqUBdoHJ7ue%2FGpWeGjVMHsWJdO2PdEDsIZwQ%2FZm2ya%2F5P1tiYfLCGJYWz8op5%2B8KaRGYcNkq1ARP3TZ2XHU9pK9taW5154jpbLo0hJ9uviH3Bq0ezNRooci3IQGunGWoa94FGkHruKbGq9XbqmMp9OB7BumKFcyB6u%2B43ER%2Fv%2FNlfDsz1oqPWq0oj2pJoSKSrinfdJiV8tg%2FV96ICJgjpWsJR0nhxgTZ&X-Amz-Signature=d81dd94ad37d44ed0070388196fa2edc024d530006cb9b4ec791c6981f4ebf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVHPO2O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIB%2F6LqaS31zBimaTdDAh8E2q6GxdwW28R8QpKcf6xvPtAiEAnSJK%2BNqgRwKLt8PC6SRTjjpByCG8439ju98yb%2F0a2xMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJagspU5V36ag9IwrSrcAwYKLlhsvcpprCXoEN03NULreHes%2FZZjge4bXWFZ167jj3IScq6CFjpjtyVQhVblyEc7nqZyEiEgeFttYgtbEQUTQTLgWBH%2B3BXLeLVvj5yEZLRw764bTJINloeAy3IOnj5c3IkxsdMZ%2FhDV4FkHaHokjlPcjRE%2B41iY2R4LE8BRXVU20R0ldhzt26OBIze95ETWG1bFPnZ1I82lrELgkRxIkIn2VhoJNVSt4DcwGBvaC%2BzOSD2%2BzoEGI0fwjUY%2BYNNjaijrXW1oQOcGqyX%2B57M%2FXf9CiP3eeEupd9iFbjgt4Eqt1SF7Any%2FMeSmvGVOKF0VcCo4MG9tPEtekAQykaycW0Z6QuNs8i9T3HfLohX0xB8OPmBCSxr6jQBsTlU%2FKlr6shlJleWPYRMPDnANlxIW5rDsyyH0fKYB8Z8jdhLTGkawsy1EjvXPJJgALPF8TVAfcERMWuoUG3l57vRUmh2tPQEet5R4f1tnnblpLDL09BfiG9ooQupC%2FkkkVu%2FdcXSpYU9xosVtQjNv1DhMUDBRk4e5S9vEPqktS%2F9Kw63DWW86nqKv%2FvEOqPililXqvCTkaHHeVk3a7hxYRtLPFuZ1%2FXBLSFoahbM084vR7uEsjWpXR8h4bQUekn0dMJL%2FlMQGOqUBdoHJ7ue%2FGpWeGjVMHsWJdO2PdEDsIZwQ%2FZm2ya%2F5P1tiYfLCGJYWz8op5%2B8KaRGYcNkq1ARP3TZ2XHU9pK9taW5154jpbLo0hJ9uviH3Bq0ezNRooci3IQGunGWoa94FGkHruKbGq9XbqmMp9OB7BumKFcyB6u%2B43ER%2Fv%2FNlfDsz1oqPWq0oj2pJoSKSrinfdJiV8tg%2FV96ICJgjpWsJR0nhxgTZ&X-Amz-Signature=ac4d4f3f51926dd5d37b8f6262e087201f0cd5a94661fe452200258bc48bfee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVHPO2O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIB%2F6LqaS31zBimaTdDAh8E2q6GxdwW28R8QpKcf6xvPtAiEAnSJK%2BNqgRwKLt8PC6SRTjjpByCG8439ju98yb%2F0a2xMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJagspU5V36ag9IwrSrcAwYKLlhsvcpprCXoEN03NULreHes%2FZZjge4bXWFZ167jj3IScq6CFjpjtyVQhVblyEc7nqZyEiEgeFttYgtbEQUTQTLgWBH%2B3BXLeLVvj5yEZLRw764bTJINloeAy3IOnj5c3IkxsdMZ%2FhDV4FkHaHokjlPcjRE%2B41iY2R4LE8BRXVU20R0ldhzt26OBIze95ETWG1bFPnZ1I82lrELgkRxIkIn2VhoJNVSt4DcwGBvaC%2BzOSD2%2BzoEGI0fwjUY%2BYNNjaijrXW1oQOcGqyX%2B57M%2FXf9CiP3eeEupd9iFbjgt4Eqt1SF7Any%2FMeSmvGVOKF0VcCo4MG9tPEtekAQykaycW0Z6QuNs8i9T3HfLohX0xB8OPmBCSxr6jQBsTlU%2FKlr6shlJleWPYRMPDnANlxIW5rDsyyH0fKYB8Z8jdhLTGkawsy1EjvXPJJgALPF8TVAfcERMWuoUG3l57vRUmh2tPQEet5R4f1tnnblpLDL09BfiG9ooQupC%2FkkkVu%2FdcXSpYU9xosVtQjNv1DhMUDBRk4e5S9vEPqktS%2F9Kw63DWW86nqKv%2FvEOqPililXqvCTkaHHeVk3a7hxYRtLPFuZ1%2FXBLSFoahbM084vR7uEsjWpXR8h4bQUekn0dMJL%2FlMQGOqUBdoHJ7ue%2FGpWeGjVMHsWJdO2PdEDsIZwQ%2FZm2ya%2F5P1tiYfLCGJYWz8op5%2B8KaRGYcNkq1ARP3TZ2XHU9pK9taW5154jpbLo0hJ9uviH3Bq0ezNRooci3IQGunGWoa94FGkHruKbGq9XbqmMp9OB7BumKFcyB6u%2B43ER%2Fv%2FNlfDsz1oqPWq0oj2pJoSKSrinfdJiV8tg%2FV96ICJgjpWsJR0nhxgTZ&X-Amz-Signature=f0a2935374a15ddf794858c1a977db7b2e99b13c9b91339793db001ee16ef939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
