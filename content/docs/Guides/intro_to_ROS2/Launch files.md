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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=7e4e8ef80666de516ecb7d2fce6c1694fc0c019e28f67d174966370549be123f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=8dc41d491c67cf6ca19102f20adc32e874058338a9a5a2e47f5ce6f1bb6c31ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=21f641d576e4dd3e68684b7df3d15750ce489595bfcf7da25428777162a162c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
