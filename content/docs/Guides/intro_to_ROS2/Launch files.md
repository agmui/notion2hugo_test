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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAWXNIV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDGEWycLDDvtfe7kVHVKfHgvepQExhZuDRb7dG%2FBgoRFAIhAKVQ2OeZ%2BDBt%2BfklmkwEV5rksOoPwbMgss1sr0GLTIwzKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuaHDwO1v%2FnxMhN6Eq3AN%2BOHQNw2kDR6Pg%2BtQOuL7NCoDFC0EIaph2fSD9n4SxZ0HoECwB%2Bs8w2vw3gH7MoLV8xvsSykn0t8fe23KSdCx%2FaTkJga60Gi6oJGXWIXecaOdmN%2FTj9Lqlwokhxu9nAmOXRNB1FZalgdQTEuxR%2BReleng6SfoOvFJa26qoJDftBk5%2BsL3WbTByoeHzAutwrWePTLXZ3iE%2BMISPS9LZtT%2BhAX%2B7flArocU4r9K5SArRSGmEL1EGXMzfEpfgF3gZm9nJc2N1fh6B34GbnzVEBG0dd46fbtUtMVch5U7QshuiGHs55ABDpJhKXUVBH4II%2FvYVPtlfBDehoKLH3H1%2BRsmSN2K%2B%2FSjKBtIM9Vg1IaqNFQxEksJC2C%2B%2BRodcCIpJsDtuCQUTgL%2BcGo4M%2BlNqXAgkx1onCvt6MvmR567azrNJMRMPb5ud6KwYSB%2BK0qmIDxRkdJE00IG49TuAmUo%2BMKAyatvTVxqdeUcH1DRmE%2But4McrLcsGJZOWd4dHGPulNRV4N%2FmNi1awWyrOOIGMtriB9hgJf%2F%2BnCIV%2BcSJ0900ANUUdF3S4L3%2B%2F5kJYtdc9X0%2Bz6AQ6f7IaXTKgRsuwzCH4NzJGCxRHdxmKom0U5PQNBRLj18LKUfs5qB5MpzCFuvW%2BBjqkAfVz5RDOd09C7rujSIqzWfoCmI%2BY%2FHaVrsZT3xJoy9%2B5P%2BWGLLudY39CWxtePptPhks%2F3rzDMeCUyBe8zmWgNIh757Ft3f7lRjzxt20z%2FFMbMQjwONffQOTOMCJTJa2hXhaUh%2FpsLwRbRgi2jN89yBxK3ovYVWI3gZzoy2Zp6PQOZV%2FQDHD16KkDU4w405UyfpYGv%2FPZ7iyoPmOGczbx9AQ7kmK0&X-Amz-Signature=0fc639b5eb59c72dc61cc5d83bb46ba7145adfb3d1ca7c2f0385702c8a52c9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAWXNIV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDGEWycLDDvtfe7kVHVKfHgvepQExhZuDRb7dG%2FBgoRFAIhAKVQ2OeZ%2BDBt%2BfklmkwEV5rksOoPwbMgss1sr0GLTIwzKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuaHDwO1v%2FnxMhN6Eq3AN%2BOHQNw2kDR6Pg%2BtQOuL7NCoDFC0EIaph2fSD9n4SxZ0HoECwB%2Bs8w2vw3gH7MoLV8xvsSykn0t8fe23KSdCx%2FaTkJga60Gi6oJGXWIXecaOdmN%2FTj9Lqlwokhxu9nAmOXRNB1FZalgdQTEuxR%2BReleng6SfoOvFJa26qoJDftBk5%2BsL3WbTByoeHzAutwrWePTLXZ3iE%2BMISPS9LZtT%2BhAX%2B7flArocU4r9K5SArRSGmEL1EGXMzfEpfgF3gZm9nJc2N1fh6B34GbnzVEBG0dd46fbtUtMVch5U7QshuiGHs55ABDpJhKXUVBH4II%2FvYVPtlfBDehoKLH3H1%2BRsmSN2K%2B%2FSjKBtIM9Vg1IaqNFQxEksJC2C%2B%2BRodcCIpJsDtuCQUTgL%2BcGo4M%2BlNqXAgkx1onCvt6MvmR567azrNJMRMPb5ud6KwYSB%2BK0qmIDxRkdJE00IG49TuAmUo%2BMKAyatvTVxqdeUcH1DRmE%2But4McrLcsGJZOWd4dHGPulNRV4N%2FmNi1awWyrOOIGMtriB9hgJf%2F%2BnCIV%2BcSJ0900ANUUdF3S4L3%2B%2F5kJYtdc9X0%2Bz6AQ6f7IaXTKgRsuwzCH4NzJGCxRHdxmKom0U5PQNBRLj18LKUfs5qB5MpzCFuvW%2BBjqkAfVz5RDOd09C7rujSIqzWfoCmI%2BY%2FHaVrsZT3xJoy9%2B5P%2BWGLLudY39CWxtePptPhks%2F3rzDMeCUyBe8zmWgNIh757Ft3f7lRjzxt20z%2FFMbMQjwONffQOTOMCJTJa2hXhaUh%2FpsLwRbRgi2jN89yBxK3ovYVWI3gZzoy2Zp6PQOZV%2FQDHD16KkDU4w405UyfpYGv%2FPZ7iyoPmOGczbx9AQ7kmK0&X-Amz-Signature=82f1cf0d20dde31d6ca995ace053af20abb2de053476c0a74d7acf8077e045c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAWXNIV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDGEWycLDDvtfe7kVHVKfHgvepQExhZuDRb7dG%2FBgoRFAIhAKVQ2OeZ%2BDBt%2BfklmkwEV5rksOoPwbMgss1sr0GLTIwzKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuaHDwO1v%2FnxMhN6Eq3AN%2BOHQNw2kDR6Pg%2BtQOuL7NCoDFC0EIaph2fSD9n4SxZ0HoECwB%2Bs8w2vw3gH7MoLV8xvsSykn0t8fe23KSdCx%2FaTkJga60Gi6oJGXWIXecaOdmN%2FTj9Lqlwokhxu9nAmOXRNB1FZalgdQTEuxR%2BReleng6SfoOvFJa26qoJDftBk5%2BsL3WbTByoeHzAutwrWePTLXZ3iE%2BMISPS9LZtT%2BhAX%2B7flArocU4r9K5SArRSGmEL1EGXMzfEpfgF3gZm9nJc2N1fh6B34GbnzVEBG0dd46fbtUtMVch5U7QshuiGHs55ABDpJhKXUVBH4II%2FvYVPtlfBDehoKLH3H1%2BRsmSN2K%2B%2FSjKBtIM9Vg1IaqNFQxEksJC2C%2B%2BRodcCIpJsDtuCQUTgL%2BcGo4M%2BlNqXAgkx1onCvt6MvmR567azrNJMRMPb5ud6KwYSB%2BK0qmIDxRkdJE00IG49TuAmUo%2BMKAyatvTVxqdeUcH1DRmE%2But4McrLcsGJZOWd4dHGPulNRV4N%2FmNi1awWyrOOIGMtriB9hgJf%2F%2BnCIV%2BcSJ0900ANUUdF3S4L3%2B%2F5kJYtdc9X0%2Bz6AQ6f7IaXTKgRsuwzCH4NzJGCxRHdxmKom0U5PQNBRLj18LKUfs5qB5MpzCFuvW%2BBjqkAfVz5RDOd09C7rujSIqzWfoCmI%2BY%2FHaVrsZT3xJoy9%2B5P%2BWGLLudY39CWxtePptPhks%2F3rzDMeCUyBe8zmWgNIh757Ft3f7lRjzxt20z%2FFMbMQjwONffQOTOMCJTJa2hXhaUh%2FpsLwRbRgi2jN89yBxK3ovYVWI3gZzoy2Zp6PQOZV%2FQDHD16KkDU4w405UyfpYGv%2FPZ7iyoPmOGczbx9AQ7kmK0&X-Amz-Signature=db202b8fc866fc26f4a2c2f082b169f17ffb0fa2dfa7bde758ddf785df65117c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
