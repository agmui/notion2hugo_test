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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6ZHMIT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCqryF4dGHmdXOw6YPbhoJ8R8EQVUFEKG2moWNme1jXpAIhALnfV0AUyixKbfCGlWnP53H%2Fks0xRCVLlo30hMg%2Bj2hVKv8DCHAQABoMNjM3NDIzMTgzODA1IgyqdXh%2B1JTWBM1%2F5p0q3AMHFJuO9rWiXqL%2FEBwBK29q%2BkK2X7gW9H47%2B4pEGQETRQDum1iZ9z%2BFPrQdCqQxpdczKyU7qTA37UsTOxe3VwUvJjyZX%2F5y2MUu7Rfjcw7qOwv%2BPcqJRbWAhjivwpJT8T%2FExU5iFO58x4H5lwH4hsmVHufFKmsaZsyoTrN1TYfFIo9YNJDOpN9L2flfe0YYDEtxyziESc8e%2FkihNfy9K4bZ0hOyFAbvhUMj1Bu03vTBKBI4VvZqXx6B2bRnfKl%2BrJvrL4ftJU6G6AS1ieH5nc%2FRhBzEPCW4P9h5ZpPzAN06IDTmCyYbCarhVXcE2%2BP%2Fho7u6c3cr8N7JrEuQGR82M01FSFkFuLzJNbPOGV4Lfb2IoS2QQfWt5lvUAAppm6Kjn2dg3TLjdBASOPEMUvCsE2GcwIIYAcK89z%2FaRS4WMdhx1LCkNNH4r3K2%2FPBr8TcbNSXPcaQ9DerdFymti6JQ06pUlc3oMqBZi7MPHcJ2nbQdJrUuyVNyGOPNhd1ea8X8QiaWoniGv04C3yJYrQlbCQipRuNjNC9r3NE4YZOUCLmR7mV%2Fkyhex%2BshqARSLv4zctOEjUTA0zqzfo4MBOslpFoDt8EJUJEVjDTZiKROu6CQyvg%2F4KA3ovRuZzKcTCDq56%2FBjqkAVTIB87coCMizFwde%2B5aJoZj6p%2FDdPP6C%2FsI7G3Gh5DlRR2s0jfuRG7goUbFGeBdlK60r3qyTu8vygCeuD0PoQqyYvzeyfYYEWp303Yc64wcjdq1WQY%2FxPz6%2BPuvtNNkCQFfLhckaKuH6Y6%2B8E7daq5aWOKu9UuWYUDopTPH54Av9%2FPYfd7plKcfO0JLy7828ILqNq9GHk%2BOkMM%2Bb1%2FYkAB%2FLyFX&X-Amz-Signature=4ad0b66fcbd601f9849d5f78741be16a2f92fb52bbace40402dc1a4419c8d3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6ZHMIT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCqryF4dGHmdXOw6YPbhoJ8R8EQVUFEKG2moWNme1jXpAIhALnfV0AUyixKbfCGlWnP53H%2Fks0xRCVLlo30hMg%2Bj2hVKv8DCHAQABoMNjM3NDIzMTgzODA1IgyqdXh%2B1JTWBM1%2F5p0q3AMHFJuO9rWiXqL%2FEBwBK29q%2BkK2X7gW9H47%2B4pEGQETRQDum1iZ9z%2BFPrQdCqQxpdczKyU7qTA37UsTOxe3VwUvJjyZX%2F5y2MUu7Rfjcw7qOwv%2BPcqJRbWAhjivwpJT8T%2FExU5iFO58x4H5lwH4hsmVHufFKmsaZsyoTrN1TYfFIo9YNJDOpN9L2flfe0YYDEtxyziESc8e%2FkihNfy9K4bZ0hOyFAbvhUMj1Bu03vTBKBI4VvZqXx6B2bRnfKl%2BrJvrL4ftJU6G6AS1ieH5nc%2FRhBzEPCW4P9h5ZpPzAN06IDTmCyYbCarhVXcE2%2BP%2Fho7u6c3cr8N7JrEuQGR82M01FSFkFuLzJNbPOGV4Lfb2IoS2QQfWt5lvUAAppm6Kjn2dg3TLjdBASOPEMUvCsE2GcwIIYAcK89z%2FaRS4WMdhx1LCkNNH4r3K2%2FPBr8TcbNSXPcaQ9DerdFymti6JQ06pUlc3oMqBZi7MPHcJ2nbQdJrUuyVNyGOPNhd1ea8X8QiaWoniGv04C3yJYrQlbCQipRuNjNC9r3NE4YZOUCLmR7mV%2Fkyhex%2BshqARSLv4zctOEjUTA0zqzfo4MBOslpFoDt8EJUJEVjDTZiKROu6CQyvg%2F4KA3ovRuZzKcTCDq56%2FBjqkAVTIB87coCMizFwde%2B5aJoZj6p%2FDdPP6C%2FsI7G3Gh5DlRR2s0jfuRG7goUbFGeBdlK60r3qyTu8vygCeuD0PoQqyYvzeyfYYEWp303Yc64wcjdq1WQY%2FxPz6%2BPuvtNNkCQFfLhckaKuH6Y6%2B8E7daq5aWOKu9UuWYUDopTPH54Av9%2FPYfd7plKcfO0JLy7828ILqNq9GHk%2BOkMM%2Bb1%2FYkAB%2FLyFX&X-Amz-Signature=43683b2193867e22d9abffad98ec726fe826dcbf73690b991562b699525e84fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6ZHMIT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCqryF4dGHmdXOw6YPbhoJ8R8EQVUFEKG2moWNme1jXpAIhALnfV0AUyixKbfCGlWnP53H%2Fks0xRCVLlo30hMg%2Bj2hVKv8DCHAQABoMNjM3NDIzMTgzODA1IgyqdXh%2B1JTWBM1%2F5p0q3AMHFJuO9rWiXqL%2FEBwBK29q%2BkK2X7gW9H47%2B4pEGQETRQDum1iZ9z%2BFPrQdCqQxpdczKyU7qTA37UsTOxe3VwUvJjyZX%2F5y2MUu7Rfjcw7qOwv%2BPcqJRbWAhjivwpJT8T%2FExU5iFO58x4H5lwH4hsmVHufFKmsaZsyoTrN1TYfFIo9YNJDOpN9L2flfe0YYDEtxyziESc8e%2FkihNfy9K4bZ0hOyFAbvhUMj1Bu03vTBKBI4VvZqXx6B2bRnfKl%2BrJvrL4ftJU6G6AS1ieH5nc%2FRhBzEPCW4P9h5ZpPzAN06IDTmCyYbCarhVXcE2%2BP%2Fho7u6c3cr8N7JrEuQGR82M01FSFkFuLzJNbPOGV4Lfb2IoS2QQfWt5lvUAAppm6Kjn2dg3TLjdBASOPEMUvCsE2GcwIIYAcK89z%2FaRS4WMdhx1LCkNNH4r3K2%2FPBr8TcbNSXPcaQ9DerdFymti6JQ06pUlc3oMqBZi7MPHcJ2nbQdJrUuyVNyGOPNhd1ea8X8QiaWoniGv04C3yJYrQlbCQipRuNjNC9r3NE4YZOUCLmR7mV%2Fkyhex%2BshqARSLv4zctOEjUTA0zqzfo4MBOslpFoDt8EJUJEVjDTZiKROu6CQyvg%2F4KA3ovRuZzKcTCDq56%2FBjqkAVTIB87coCMizFwde%2B5aJoZj6p%2FDdPP6C%2FsI7G3Gh5DlRR2s0jfuRG7goUbFGeBdlK60r3qyTu8vygCeuD0PoQqyYvzeyfYYEWp303Yc64wcjdq1WQY%2FxPz6%2BPuvtNNkCQFfLhckaKuH6Y6%2B8E7daq5aWOKu9UuWYUDopTPH54Av9%2FPYfd7plKcfO0JLy7828ILqNq9GHk%2BOkMM%2Bb1%2FYkAB%2FLyFX&X-Amz-Signature=2c64fc9b32afce035fb3acc8e8342eea4ea4cdee84fc4d1104388cebb3152b04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
