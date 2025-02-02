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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEIDSR2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnse5898KEzrI8fq7pTrhgSYECdONldd2dKgF0KFRgEAiEA1VPIBUTMTnXK%2FEtUkEkG7SJ4%2BtdDpWUZhG8SD3O44YMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo%2BY6V4fMQg2Iw2hyrcA0KbPsf0QdSgWg9PPmIF9rvOIS2rLOVTJ6YESdpwQqNakIq%2BaVHgtq9%2FDGf9kgb%2B72rgSvd0TGN77MkWvi7TDOBEH6T2%2B4r%2FQu6lOcopkp93B7T1oU9faFCZc631enQYdxl3jTNbearXg8Bky7hcesA4SRnHbP0VLc7l5Ef8A4eZ%2BWdVjLXPeWVjmOoCA6nMAm36OJSBAaiO116XtFa2QRzknemdLC%2BJ4UYoX1smURH5KSycAEaz59wPS960gntUoN90Pm9PdcXH%2FjG2AYNIJwO5tTEU7FUmsp5Da76cXN4W9oDTFLtN%2BULUdn0%2BB%2ByZzwRESVlQZsd7UuYE3AKHrt2fBM3qSHNenozS6eVktO01QAogZJGMbsVoTHBZ%2FRO%2Frt%2FbqYo521hI0hL3mM04xOdWw3awB8h4NA5X5rKAIQWuTBY9GCBdc6bHR048CjbRVnFxn5rPM3e6uHWkWucmNsaAdcpZxl7lC1GEEpAWgJ5mGzRnfGD8PATz33J8UzdzM6GM69S7MmcXDRlLQgLqXaXW%2B%2FY6Ow1G%2F%2BmA%2Fo%2BjQjviDOh5M0l5MPzOuIh%2BUVxy7arFSuXTFNBi8Kt0lMJitovNScht%2BINnegzLJruZ5R1GBRa2Hn6xCYkSL1hOMOud%2FLwGOqUBujyF0vj3diRKVYJBCJ9ObRr657bZu%2F49Q7v4A3P%2FcyYVj0xebCetFwmovweJhDLfNNgDQYfJgciu%2FkmZq5VZs%2F0fe76EgX2QuN98yOYz0EWEdvr2afwX2FHkmYOevV4fy7EVDf2O8g%2FOhUacsS%2BfNtTN34me4wHuxNb4EVH04u8W3x4fhcWmETLrQwXdPiCoonuWXqKU7jI4OaNYiyeYP6Jrw%2FtM&X-Amz-Signature=bfd156526e016c22edf04642ad9eb05d9950c1d14090df3bf6c992a3d5a74c65&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEIDSR2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnse5898KEzrI8fq7pTrhgSYECdONldd2dKgF0KFRgEAiEA1VPIBUTMTnXK%2FEtUkEkG7SJ4%2BtdDpWUZhG8SD3O44YMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo%2BY6V4fMQg2Iw2hyrcA0KbPsf0QdSgWg9PPmIF9rvOIS2rLOVTJ6YESdpwQqNakIq%2BaVHgtq9%2FDGf9kgb%2B72rgSvd0TGN77MkWvi7TDOBEH6T2%2B4r%2FQu6lOcopkp93B7T1oU9faFCZc631enQYdxl3jTNbearXg8Bky7hcesA4SRnHbP0VLc7l5Ef8A4eZ%2BWdVjLXPeWVjmOoCA6nMAm36OJSBAaiO116XtFa2QRzknemdLC%2BJ4UYoX1smURH5KSycAEaz59wPS960gntUoN90Pm9PdcXH%2FjG2AYNIJwO5tTEU7FUmsp5Da76cXN4W9oDTFLtN%2BULUdn0%2BB%2ByZzwRESVlQZsd7UuYE3AKHrt2fBM3qSHNenozS6eVktO01QAogZJGMbsVoTHBZ%2FRO%2Frt%2FbqYo521hI0hL3mM04xOdWw3awB8h4NA5X5rKAIQWuTBY9GCBdc6bHR048CjbRVnFxn5rPM3e6uHWkWucmNsaAdcpZxl7lC1GEEpAWgJ5mGzRnfGD8PATz33J8UzdzM6GM69S7MmcXDRlLQgLqXaXW%2B%2FY6Ow1G%2F%2BmA%2Fo%2BjQjviDOh5M0l5MPzOuIh%2BUVxy7arFSuXTFNBi8Kt0lMJitovNScht%2BINnegzLJruZ5R1GBRa2Hn6xCYkSL1hOMOud%2FLwGOqUBujyF0vj3diRKVYJBCJ9ObRr657bZu%2F49Q7v4A3P%2FcyYVj0xebCetFwmovweJhDLfNNgDQYfJgciu%2FkmZq5VZs%2F0fe76EgX2QuN98yOYz0EWEdvr2afwX2FHkmYOevV4fy7EVDf2O8g%2FOhUacsS%2BfNtTN34me4wHuxNb4EVH04u8W3x4fhcWmETLrQwXdPiCoonuWXqKU7jI4OaNYiyeYP6Jrw%2FtM&X-Amz-Signature=4a67afc533ff744c3bc1e7e147453ef15b72577ecb6665a147aa8b57b82e7cda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEIDSR2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnse5898KEzrI8fq7pTrhgSYECdONldd2dKgF0KFRgEAiEA1VPIBUTMTnXK%2FEtUkEkG7SJ4%2BtdDpWUZhG8SD3O44YMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo%2BY6V4fMQg2Iw2hyrcA0KbPsf0QdSgWg9PPmIF9rvOIS2rLOVTJ6YESdpwQqNakIq%2BaVHgtq9%2FDGf9kgb%2B72rgSvd0TGN77MkWvi7TDOBEH6T2%2B4r%2FQu6lOcopkp93B7T1oU9faFCZc631enQYdxl3jTNbearXg8Bky7hcesA4SRnHbP0VLc7l5Ef8A4eZ%2BWdVjLXPeWVjmOoCA6nMAm36OJSBAaiO116XtFa2QRzknemdLC%2BJ4UYoX1smURH5KSycAEaz59wPS960gntUoN90Pm9PdcXH%2FjG2AYNIJwO5tTEU7FUmsp5Da76cXN4W9oDTFLtN%2BULUdn0%2BB%2ByZzwRESVlQZsd7UuYE3AKHrt2fBM3qSHNenozS6eVktO01QAogZJGMbsVoTHBZ%2FRO%2Frt%2FbqYo521hI0hL3mM04xOdWw3awB8h4NA5X5rKAIQWuTBY9GCBdc6bHR048CjbRVnFxn5rPM3e6uHWkWucmNsaAdcpZxl7lC1GEEpAWgJ5mGzRnfGD8PATz33J8UzdzM6GM69S7MmcXDRlLQgLqXaXW%2B%2FY6Ow1G%2F%2BmA%2Fo%2BjQjviDOh5M0l5MPzOuIh%2BUVxy7arFSuXTFNBi8Kt0lMJitovNScht%2BINnegzLJruZ5R1GBRa2Hn6xCYkSL1hOMOud%2FLwGOqUBujyF0vj3diRKVYJBCJ9ObRr657bZu%2F49Q7v4A3P%2FcyYVj0xebCetFwmovweJhDLfNNgDQYfJgciu%2FkmZq5VZs%2F0fe76EgX2QuN98yOYz0EWEdvr2afwX2FHkmYOevV4fy7EVDf2O8g%2FOhUacsS%2BfNtTN34me4wHuxNb4EVH04u8W3x4fhcWmETLrQwXdPiCoonuWXqKU7jI4OaNYiyeYP6Jrw%2FtM&X-Amz-Signature=6180a2ab99a681320c88deb140b79121d16a9220e50febea991d293daf70f14b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
