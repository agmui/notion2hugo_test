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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDVPYEW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC0PsKCxpIPotv3xdRurW4vEdMlsC0%2BXguD8K4p3G1M9QIgZiMz6ZjHhZi%2B2rdyWHnGlHMJuhqaCCPBWY9%2FR9ZjUu4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBrPiWPDlKewvPiD4ircAz9eih%2FyUsWBLMqcD0cnE8UZCn2FMxKLdnet8wBuGpwFtm9nnEBWbdZkhPFhNB06EO5EunJQS3QjPGlfdzzkXWRlQIl%2FkPj2mmVdcB7j4iu37tfVbBVzshEiA5swJ3DXZJnFMOdNgfeV95oXNYCam0Raar%2F%2FWBOk5kmMqkDXq0fgWpcrv%2BlP%2F1HnEZkaXfowRcIZLSviv0y0c8BcHkJuYryyh9sDY4iDB4Ch8l4DRwUDLxYPT3XlIvJCkJo8QP6vuU3RgBvfw7KgcyfiOlXNroA0QQrigak%2Ff1fwu%2BHAvhZMMZTpGIP8slrZG6IEfyaANbwksEjqtHcQAw9VqJ3ODbzsUeSNd56IjMiJ52pl7rfHKFuJdnNOWI10ee%2BLX%2Blmogjc2RjxHcPa3n%2BumLDMDgOwHabQg70Qgv9KPnx2sHxcJdipnWDBkwzD%2Fo1Clhh85IAYI8IFgkP7s38nI6TjagXFaSygB8HvGs8UxvOipaI1uXEtr%2BvIp%2BmoSqLokRMDcfFZGOF7I7AwtMQueJ%2BuLEHAdbndZP6iyfwp5EQeXoeX%2FV80jxvAJ27%2BNrF6WMkkrbpSZVvPgZO6v8U5CeGe28fLECICw793GzKCJ0RiOceN9sT6VWXwpKlOxtSmMKmkt8IGOqUBJQr6Lg%2F6ZLuIutif%2BWu9Te02E50KKihM%2Fe75XSozJrdYQfmeaLGQMehNDLmZSJUktZypkHra4DFzeHOWMaaSDq4uqBZorMh9ciOpwMcZ5VY0y7yHi7UULLEWTeidCnI%2BerTpjV6PHR2c%2FFpdeuwiYDxAQL7I7YZyTB6%2BDTUOMyRO59ohY%2BLqHHR2krN6Fxo03cpBIt%2B3PuCCJRhWYzSwo7FLhukI&X-Amz-Signature=be2724346a398645a5e0cb3c232220e1fd4531ec778f317f6a35ee6b35e26bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDVPYEW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC0PsKCxpIPotv3xdRurW4vEdMlsC0%2BXguD8K4p3G1M9QIgZiMz6ZjHhZi%2B2rdyWHnGlHMJuhqaCCPBWY9%2FR9ZjUu4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBrPiWPDlKewvPiD4ircAz9eih%2FyUsWBLMqcD0cnE8UZCn2FMxKLdnet8wBuGpwFtm9nnEBWbdZkhPFhNB06EO5EunJQS3QjPGlfdzzkXWRlQIl%2FkPj2mmVdcB7j4iu37tfVbBVzshEiA5swJ3DXZJnFMOdNgfeV95oXNYCam0Raar%2F%2FWBOk5kmMqkDXq0fgWpcrv%2BlP%2F1HnEZkaXfowRcIZLSviv0y0c8BcHkJuYryyh9sDY4iDB4Ch8l4DRwUDLxYPT3XlIvJCkJo8QP6vuU3RgBvfw7KgcyfiOlXNroA0QQrigak%2Ff1fwu%2BHAvhZMMZTpGIP8slrZG6IEfyaANbwksEjqtHcQAw9VqJ3ODbzsUeSNd56IjMiJ52pl7rfHKFuJdnNOWI10ee%2BLX%2Blmogjc2RjxHcPa3n%2BumLDMDgOwHabQg70Qgv9KPnx2sHxcJdipnWDBkwzD%2Fo1Clhh85IAYI8IFgkP7s38nI6TjagXFaSygB8HvGs8UxvOipaI1uXEtr%2BvIp%2BmoSqLokRMDcfFZGOF7I7AwtMQueJ%2BuLEHAdbndZP6iyfwp5EQeXoeX%2FV80jxvAJ27%2BNrF6WMkkrbpSZVvPgZO6v8U5CeGe28fLECICw793GzKCJ0RiOceN9sT6VWXwpKlOxtSmMKmkt8IGOqUBJQr6Lg%2F6ZLuIutif%2BWu9Te02E50KKihM%2Fe75XSozJrdYQfmeaLGQMehNDLmZSJUktZypkHra4DFzeHOWMaaSDq4uqBZorMh9ciOpwMcZ5VY0y7yHi7UULLEWTeidCnI%2BerTpjV6PHR2c%2FFpdeuwiYDxAQL7I7YZyTB6%2BDTUOMyRO59ohY%2BLqHHR2krN6Fxo03cpBIt%2B3PuCCJRhWYzSwo7FLhukI&X-Amz-Signature=83743738a17db5fb8edfcbe6072274eab902d2cf06573bfce49f528d4c83c8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDVPYEW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC0PsKCxpIPotv3xdRurW4vEdMlsC0%2BXguD8K4p3G1M9QIgZiMz6ZjHhZi%2B2rdyWHnGlHMJuhqaCCPBWY9%2FR9ZjUu4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBrPiWPDlKewvPiD4ircAz9eih%2FyUsWBLMqcD0cnE8UZCn2FMxKLdnet8wBuGpwFtm9nnEBWbdZkhPFhNB06EO5EunJQS3QjPGlfdzzkXWRlQIl%2FkPj2mmVdcB7j4iu37tfVbBVzshEiA5swJ3DXZJnFMOdNgfeV95oXNYCam0Raar%2F%2FWBOk5kmMqkDXq0fgWpcrv%2BlP%2F1HnEZkaXfowRcIZLSviv0y0c8BcHkJuYryyh9sDY4iDB4Ch8l4DRwUDLxYPT3XlIvJCkJo8QP6vuU3RgBvfw7KgcyfiOlXNroA0QQrigak%2Ff1fwu%2BHAvhZMMZTpGIP8slrZG6IEfyaANbwksEjqtHcQAw9VqJ3ODbzsUeSNd56IjMiJ52pl7rfHKFuJdnNOWI10ee%2BLX%2Blmogjc2RjxHcPa3n%2BumLDMDgOwHabQg70Qgv9KPnx2sHxcJdipnWDBkwzD%2Fo1Clhh85IAYI8IFgkP7s38nI6TjagXFaSygB8HvGs8UxvOipaI1uXEtr%2BvIp%2BmoSqLokRMDcfFZGOF7I7AwtMQueJ%2BuLEHAdbndZP6iyfwp5EQeXoeX%2FV80jxvAJ27%2BNrF6WMkkrbpSZVvPgZO6v8U5CeGe28fLECICw793GzKCJ0RiOceN9sT6VWXwpKlOxtSmMKmkt8IGOqUBJQr6Lg%2F6ZLuIutif%2BWu9Te02E50KKihM%2Fe75XSozJrdYQfmeaLGQMehNDLmZSJUktZypkHra4DFzeHOWMaaSDq4uqBZorMh9ciOpwMcZ5VY0y7yHi7UULLEWTeidCnI%2BerTpjV6PHR2c%2FFpdeuwiYDxAQL7I7YZyTB6%2BDTUOMyRO59ohY%2BLqHHR2krN6Fxo03cpBIt%2B3PuCCJRhWYzSwo7FLhukI&X-Amz-Signature=45af4a63609f226084d1fb224a210f7726e8f503500b941667250e75856aa214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
