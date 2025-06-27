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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2UWS2Z%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXPywVsUghya5fVsahlDQ0fb%2Bil0TlzXW4bU%2F4r%2FHtLAIgGLJprM8sTjY7B4yzQcXi2QUn%2FG7GPDKXV4cqo13eO44q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHpe0LP3YKbYVTkpircA9kM3PrivaBb7%2FFmpGbqG7c6boJHMteCjy43pg%2B7%2BTE2zt5A%2F4gAzxAOqybj12k0ngOwnuDidbLaknV4LvDhMJuB%2B%2BJMdQZPxvaa9VqdIPGiWtOgElDgPtI3sa2kpifAVho7XG%2F1Ql5vnjNC0gYs%2FvJCSLVQel5TAj4p%2FWAWDzWbgzHkUmdyr0YNNOse39lRKWhw33K7rdYapyS7CRc74m1VpVJg%2F6P%2B6WdF3Qz9lLmt0Ycjwxx%2B88wnErSgXSYZHCdrxZVj3UJ%2B98bv6nZ7z7lJaq%2BhVJLY2E8H9Y%2FJmmqxy1e%2F8rhkr994soeZ4OKfYhcn0Az30ypMSyjtZOYsC2mQGrjsWvZtUmiOYcoxzxklSpU5qg0IcuPgbydgzdLVME1X6QxclxgC4HGOYdhrgfN8K8lScgkbfbwOdreGtf5h%2FHQlDQCzcCjBxY7DVn%2FgI7mDnFQ8wkMPs%2B2zzqyW%2B3eqHgB57VKD7KPv7nU0sU6s%2FldbZZMYF3aUTZcy7rRbGpq%2B0PfYOTyEhzSLe3amxSvrrvMdH7IyvzL0%2BaCo4MDJ2OLR67j8%2F8bZK4%2FZyU6lJDOVZDGf9vIp3r7MrnKFYFQwrxtCMu%2B4swCSo7pBs0V1THqtMF59kUgCimeaMJGk%2B8IGOqUBQL01LDdXveWF8f0lvSv4BHiCMYdeBKWdBTVjaMc8ptY8gfgVv%2B5YYOTuF9uoQ6axQK6W3QVuNedD73BMlD491SU%2BGJNEe1ipPOKn5P%2FrPbgRjuucoP5cteoRduKGa0RntgJ1OZXORf1y8kCN1EMMr4hPxFCKoHelKDT%2BGnIkvL9I7sG1jOc0P40KFojUWBtz5uaMCbqrNPUy2RdIDvfJo4%2Fwu2ho&X-Amz-Signature=125bd7dcc5eff79fbbdcba2097492febb16a75c8294e7a0f12e5fca6b840f3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2UWS2Z%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXPywVsUghya5fVsahlDQ0fb%2Bil0TlzXW4bU%2F4r%2FHtLAIgGLJprM8sTjY7B4yzQcXi2QUn%2FG7GPDKXV4cqo13eO44q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHpe0LP3YKbYVTkpircA9kM3PrivaBb7%2FFmpGbqG7c6boJHMteCjy43pg%2B7%2BTE2zt5A%2F4gAzxAOqybj12k0ngOwnuDidbLaknV4LvDhMJuB%2B%2BJMdQZPxvaa9VqdIPGiWtOgElDgPtI3sa2kpifAVho7XG%2F1Ql5vnjNC0gYs%2FvJCSLVQel5TAj4p%2FWAWDzWbgzHkUmdyr0YNNOse39lRKWhw33K7rdYapyS7CRc74m1VpVJg%2F6P%2B6WdF3Qz9lLmt0Ycjwxx%2B88wnErSgXSYZHCdrxZVj3UJ%2B98bv6nZ7z7lJaq%2BhVJLY2E8H9Y%2FJmmqxy1e%2F8rhkr994soeZ4OKfYhcn0Az30ypMSyjtZOYsC2mQGrjsWvZtUmiOYcoxzxklSpU5qg0IcuPgbydgzdLVME1X6QxclxgC4HGOYdhrgfN8K8lScgkbfbwOdreGtf5h%2FHQlDQCzcCjBxY7DVn%2FgI7mDnFQ8wkMPs%2B2zzqyW%2B3eqHgB57VKD7KPv7nU0sU6s%2FldbZZMYF3aUTZcy7rRbGpq%2B0PfYOTyEhzSLe3amxSvrrvMdH7IyvzL0%2BaCo4MDJ2OLR67j8%2F8bZK4%2FZyU6lJDOVZDGf9vIp3r7MrnKFYFQwrxtCMu%2B4swCSo7pBs0V1THqtMF59kUgCimeaMJGk%2B8IGOqUBQL01LDdXveWF8f0lvSv4BHiCMYdeBKWdBTVjaMc8ptY8gfgVv%2B5YYOTuF9uoQ6axQK6W3QVuNedD73BMlD491SU%2BGJNEe1ipPOKn5P%2FrPbgRjuucoP5cteoRduKGa0RntgJ1OZXORf1y8kCN1EMMr4hPxFCKoHelKDT%2BGnIkvL9I7sG1jOc0P40KFojUWBtz5uaMCbqrNPUy2RdIDvfJo4%2Fwu2ho&X-Amz-Signature=dd9c13433ed0f21e4b5fc0ee218f3ada7cb74f5fbb89dc421ca29cfccc202d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2UWS2Z%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXPywVsUghya5fVsahlDQ0fb%2Bil0TlzXW4bU%2F4r%2FHtLAIgGLJprM8sTjY7B4yzQcXi2QUn%2FG7GPDKXV4cqo13eO44q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHpe0LP3YKbYVTkpircA9kM3PrivaBb7%2FFmpGbqG7c6boJHMteCjy43pg%2B7%2BTE2zt5A%2F4gAzxAOqybj12k0ngOwnuDidbLaknV4LvDhMJuB%2B%2BJMdQZPxvaa9VqdIPGiWtOgElDgPtI3sa2kpifAVho7XG%2F1Ql5vnjNC0gYs%2FvJCSLVQel5TAj4p%2FWAWDzWbgzHkUmdyr0YNNOse39lRKWhw33K7rdYapyS7CRc74m1VpVJg%2F6P%2B6WdF3Qz9lLmt0Ycjwxx%2B88wnErSgXSYZHCdrxZVj3UJ%2B98bv6nZ7z7lJaq%2BhVJLY2E8H9Y%2FJmmqxy1e%2F8rhkr994soeZ4OKfYhcn0Az30ypMSyjtZOYsC2mQGrjsWvZtUmiOYcoxzxklSpU5qg0IcuPgbydgzdLVME1X6QxclxgC4HGOYdhrgfN8K8lScgkbfbwOdreGtf5h%2FHQlDQCzcCjBxY7DVn%2FgI7mDnFQ8wkMPs%2B2zzqyW%2B3eqHgB57VKD7KPv7nU0sU6s%2FldbZZMYF3aUTZcy7rRbGpq%2B0PfYOTyEhzSLe3amxSvrrvMdH7IyvzL0%2BaCo4MDJ2OLR67j8%2F8bZK4%2FZyU6lJDOVZDGf9vIp3r7MrnKFYFQwrxtCMu%2B4swCSo7pBs0V1THqtMF59kUgCimeaMJGk%2B8IGOqUBQL01LDdXveWF8f0lvSv4BHiCMYdeBKWdBTVjaMc8ptY8gfgVv%2B5YYOTuF9uoQ6axQK6W3QVuNedD73BMlD491SU%2BGJNEe1ipPOKn5P%2FrPbgRjuucoP5cteoRduKGa0RntgJ1OZXORf1y8kCN1EMMr4hPxFCKoHelKDT%2BGnIkvL9I7sG1jOc0P40KFojUWBtz5uaMCbqrNPUy2RdIDvfJo4%2Fwu2ho&X-Amz-Signature=8aaa66b8acfedc7e6f8033c890dbd9982c1811e9f12a36829710d00b696ffce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
