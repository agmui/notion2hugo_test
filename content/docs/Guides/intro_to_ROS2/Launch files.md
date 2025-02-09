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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEJOYR4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcPTPmWvbszi3Pt4CyLGpVnwjx2u5l%2FB1hTyanlqFfgIhAI3wOxBjoybAZzTR0u%2BUwFRNJHBAgCgtPERf7z2Vzc9TKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmgW61pcf0T4%2FlYoq3ANpdbfVIU2EQu96JX5xA3BIF8pT1TooKQvJLbz2sAiSzgkde2wFwg%2B90twJmCFaRxSzDGqQuip%2FX5UxneK1TCoRzHZQ3FsI8alj10EK%2Fnjp%2FWsljBT9rn67A%2Bi%2FvEH1C2W5xfzBw8Geq6PYH3lwm0EsLS0wu%2FRjRDaO13kRLnRDHHnQvgVBipZk8C1z4I24Ivga%2BdarWM48mwiOv4ceeW9IYSGH6s2reLbRAKsAGgEnub1iB5BXfPaJ3%2BnC%2BuBv1RtF%2BPhu12QhxlHpDoqZkj8KltTtRab%2BhrlQIy2WCzpZzojzF3XM2RRM4tIUMYOwEooUJtYcS75TyNgx2QTVTTVMrYB1kcQLuNSYmjdBXAdmOGG40CYJ8dPyevbZlpdLylsTT6oli6AR%2BWiX2VC8LM2eKJJmw5oceRRu4mN3xg684hARtY%2BTviZ3huT2IQ6OHguguvs5EmYR0vamOmYf7tngRxaQ%2FG%2Fswg%2BzBJsiR2oChjLFDEURwB3r1cX5ZfOUYoO%2FF3lfxWAmIjfVRY5r77qsv2l1V1BSa41I0glMrQ7UgkeWy%2FJ1TqjA9ECa6CisxhGI5XimbxPSJIRIV3YtN1kJ%2FUtf8CXVIAg3jNBqnu07ykF%2Fz8AFFKpVeRMrRTDlh6O9BjqkAXrg%2FNxTYvNsB3988AD0sGfDnxAL96cXSy1l0Lhb1qjBdfq2p4skY%2Bg7XY4qK7pWTjl9wr4kN2vC7hHaOCJn3ahNGspvFTQ%2FB%2BzVlvslnt4%2BOfn50Miqv8SXK9hEYvBdSOr1ViVjIN2M1jXRh6wPcpYJNSDKKqmtqIBRYPec5wDvD%2FecQYfhZHQ7sSIHmS03NDVJq1iXR22IxmV3yhz%2FyLBYMc4i&X-Amz-Signature=a5ef461832859f5e5337ea3649c075d93b50ad0c02690e6c9c44360b975c1561&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEJOYR4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcPTPmWvbszi3Pt4CyLGpVnwjx2u5l%2FB1hTyanlqFfgIhAI3wOxBjoybAZzTR0u%2BUwFRNJHBAgCgtPERf7z2Vzc9TKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmgW61pcf0T4%2FlYoq3ANpdbfVIU2EQu96JX5xA3BIF8pT1TooKQvJLbz2sAiSzgkde2wFwg%2B90twJmCFaRxSzDGqQuip%2FX5UxneK1TCoRzHZQ3FsI8alj10EK%2Fnjp%2FWsljBT9rn67A%2Bi%2FvEH1C2W5xfzBw8Geq6PYH3lwm0EsLS0wu%2FRjRDaO13kRLnRDHHnQvgVBipZk8C1z4I24Ivga%2BdarWM48mwiOv4ceeW9IYSGH6s2reLbRAKsAGgEnub1iB5BXfPaJ3%2BnC%2BuBv1RtF%2BPhu12QhxlHpDoqZkj8KltTtRab%2BhrlQIy2WCzpZzojzF3XM2RRM4tIUMYOwEooUJtYcS75TyNgx2QTVTTVMrYB1kcQLuNSYmjdBXAdmOGG40CYJ8dPyevbZlpdLylsTT6oli6AR%2BWiX2VC8LM2eKJJmw5oceRRu4mN3xg684hARtY%2BTviZ3huT2IQ6OHguguvs5EmYR0vamOmYf7tngRxaQ%2FG%2Fswg%2BzBJsiR2oChjLFDEURwB3r1cX5ZfOUYoO%2FF3lfxWAmIjfVRY5r77qsv2l1V1BSa41I0glMrQ7UgkeWy%2FJ1TqjA9ECa6CisxhGI5XimbxPSJIRIV3YtN1kJ%2FUtf8CXVIAg3jNBqnu07ykF%2Fz8AFFKpVeRMrRTDlh6O9BjqkAXrg%2FNxTYvNsB3988AD0sGfDnxAL96cXSy1l0Lhb1qjBdfq2p4skY%2Bg7XY4qK7pWTjl9wr4kN2vC7hHaOCJn3ahNGspvFTQ%2FB%2BzVlvslnt4%2BOfn50Miqv8SXK9hEYvBdSOr1ViVjIN2M1jXRh6wPcpYJNSDKKqmtqIBRYPec5wDvD%2FecQYfhZHQ7sSIHmS03NDVJq1iXR22IxmV3yhz%2FyLBYMc4i&X-Amz-Signature=2cc65d8870a11d1ae39658a20178da9334bbe3150b64a9fd2c191c15c2c183a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEJOYR4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcPTPmWvbszi3Pt4CyLGpVnwjx2u5l%2FB1hTyanlqFfgIhAI3wOxBjoybAZzTR0u%2BUwFRNJHBAgCgtPERf7z2Vzc9TKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmgW61pcf0T4%2FlYoq3ANpdbfVIU2EQu96JX5xA3BIF8pT1TooKQvJLbz2sAiSzgkde2wFwg%2B90twJmCFaRxSzDGqQuip%2FX5UxneK1TCoRzHZQ3FsI8alj10EK%2Fnjp%2FWsljBT9rn67A%2Bi%2FvEH1C2W5xfzBw8Geq6PYH3lwm0EsLS0wu%2FRjRDaO13kRLnRDHHnQvgVBipZk8C1z4I24Ivga%2BdarWM48mwiOv4ceeW9IYSGH6s2reLbRAKsAGgEnub1iB5BXfPaJ3%2BnC%2BuBv1RtF%2BPhu12QhxlHpDoqZkj8KltTtRab%2BhrlQIy2WCzpZzojzF3XM2RRM4tIUMYOwEooUJtYcS75TyNgx2QTVTTVMrYB1kcQLuNSYmjdBXAdmOGG40CYJ8dPyevbZlpdLylsTT6oli6AR%2BWiX2VC8LM2eKJJmw5oceRRu4mN3xg684hARtY%2BTviZ3huT2IQ6OHguguvs5EmYR0vamOmYf7tngRxaQ%2FG%2Fswg%2BzBJsiR2oChjLFDEURwB3r1cX5ZfOUYoO%2FF3lfxWAmIjfVRY5r77qsv2l1V1BSa41I0glMrQ7UgkeWy%2FJ1TqjA9ECa6CisxhGI5XimbxPSJIRIV3YtN1kJ%2FUtf8CXVIAg3jNBqnu07ykF%2Fz8AFFKpVeRMrRTDlh6O9BjqkAXrg%2FNxTYvNsB3988AD0sGfDnxAL96cXSy1l0Lhb1qjBdfq2p4skY%2Bg7XY4qK7pWTjl9wr4kN2vC7hHaOCJn3ahNGspvFTQ%2FB%2BzVlvslnt4%2BOfn50Miqv8SXK9hEYvBdSOr1ViVjIN2M1jXRh6wPcpYJNSDKKqmtqIBRYPec5wDvD%2FecQYfhZHQ7sSIHmS03NDVJq1iXR22IxmV3yhz%2FyLBYMc4i&X-Amz-Signature=ee6572e51f9c0ce9e49a3895d7e7941bfaf19863fc1f6cfefe443771644f2747&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
