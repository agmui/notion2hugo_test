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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7GW3C5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC6OGYkuGgxedVsHmtBkEzkW%2FxShNFMjgpaCiW32MhPDQIhAMQFuEjglv5VtOJ1l3YrOAJiUWbMWNBAnjqSPmXEiu%2FXKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPkjGLXffvAawP4Vkq3AN1kVK4iLUPL%2FRn%2FOEblXHosZ3XNb3MMtxj3MwfrlX2wWi8T5dfYRUMIPQZduRQ0bIpwJb11DXRTepdQYky1TzKXqNCZaLAksNotOWKUpBkW%2FnHq68so9QL2n1TuC8%2BZ9nE8vLx637BfVYiBUBKJ%2BWNMFxOO5ILPorrIWgvcHPLwhLK1%2FC460EiAxF192bTd3UO61A1Wp7g6UIHpTslPlIlmUh3L8c3EZxDzUQChiNKngoizufAbfCq8rTfdZEBNVKke0DW3qcd5z9jy0dbtsyNbiuHm4Z0J53fjzGB3YTC6OQvESOWLD%2FWB1uLOzqWA1nGT4TB%2B6fCn%2BNBKcHFf8xNhpG2CX9Y%2FT1sp832vjTnUXRGf6A5NSn2qPq0AwOEUZqwP398f4KJXU%2FpnHVTBw5SOVSdvHGEcsisfUDi3gauukVFM8%2FRWiGrXDILQxIF%2FYx9c8cs5UQ9hdrc7lZArBsmLqbcU1CCUb6Ntqm529z5%2BErAw5GCC30NR2TtWYcuwD3FvHWhvCGMbMLGE0VzhnWBG82sA%2BHmIou6a5QNOyLZ2bcY8IYBmE1JVQwUU8tBHYZf2LRizmStftRRqxvjULh%2BEyjMKItuSvZpiX%2BT5CMsH0KoIt8JBzWcpdfj5DCQhLLDBjqkAa1VocIBRDa%2BN9F3WGRiFsreNBp2T%2FsYf%2BrF7v81HLsoNooCudRBVrKt0rgZzxBiDskmm7AGnbzHTQkB%2Bb3kiUZH2P32izwWm3BQKfCtOVxSxkRZPdx3XZxhl%2BeSzrOu67olbu00d0BF83cVIsEX2o%2B%2FWqB1Vhteet5Eew6A4Pb9koQn0tdILeIb8eQIYVOrBizfi7z0yqodguMAyWyiOddd2RwA&X-Amz-Signature=553c979f74e234c4d20c1e80e17c649172dcff15dd7be8d24234a52486b8ba34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7GW3C5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC6OGYkuGgxedVsHmtBkEzkW%2FxShNFMjgpaCiW32MhPDQIhAMQFuEjglv5VtOJ1l3YrOAJiUWbMWNBAnjqSPmXEiu%2FXKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPkjGLXffvAawP4Vkq3AN1kVK4iLUPL%2FRn%2FOEblXHosZ3XNb3MMtxj3MwfrlX2wWi8T5dfYRUMIPQZduRQ0bIpwJb11DXRTepdQYky1TzKXqNCZaLAksNotOWKUpBkW%2FnHq68so9QL2n1TuC8%2BZ9nE8vLx637BfVYiBUBKJ%2BWNMFxOO5ILPorrIWgvcHPLwhLK1%2FC460EiAxF192bTd3UO61A1Wp7g6UIHpTslPlIlmUh3L8c3EZxDzUQChiNKngoizufAbfCq8rTfdZEBNVKke0DW3qcd5z9jy0dbtsyNbiuHm4Z0J53fjzGB3YTC6OQvESOWLD%2FWB1uLOzqWA1nGT4TB%2B6fCn%2BNBKcHFf8xNhpG2CX9Y%2FT1sp832vjTnUXRGf6A5NSn2qPq0AwOEUZqwP398f4KJXU%2FpnHVTBw5SOVSdvHGEcsisfUDi3gauukVFM8%2FRWiGrXDILQxIF%2FYx9c8cs5UQ9hdrc7lZArBsmLqbcU1CCUb6Ntqm529z5%2BErAw5GCC30NR2TtWYcuwD3FvHWhvCGMbMLGE0VzhnWBG82sA%2BHmIou6a5QNOyLZ2bcY8IYBmE1JVQwUU8tBHYZf2LRizmStftRRqxvjULh%2BEyjMKItuSvZpiX%2BT5CMsH0KoIt8JBzWcpdfj5DCQhLLDBjqkAa1VocIBRDa%2BN9F3WGRiFsreNBp2T%2FsYf%2BrF7v81HLsoNooCudRBVrKt0rgZzxBiDskmm7AGnbzHTQkB%2Bb3kiUZH2P32izwWm3BQKfCtOVxSxkRZPdx3XZxhl%2BeSzrOu67olbu00d0BF83cVIsEX2o%2B%2FWqB1Vhteet5Eew6A4Pb9koQn0tdILeIb8eQIYVOrBizfi7z0yqodguMAyWyiOddd2RwA&X-Amz-Signature=eac1ec74f1b710e93d64c3b9978ff8a99c636445808b72bea13914635b97af7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7GW3C5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC6OGYkuGgxedVsHmtBkEzkW%2FxShNFMjgpaCiW32MhPDQIhAMQFuEjglv5VtOJ1l3YrOAJiUWbMWNBAnjqSPmXEiu%2FXKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPkjGLXffvAawP4Vkq3AN1kVK4iLUPL%2FRn%2FOEblXHosZ3XNb3MMtxj3MwfrlX2wWi8T5dfYRUMIPQZduRQ0bIpwJb11DXRTepdQYky1TzKXqNCZaLAksNotOWKUpBkW%2FnHq68so9QL2n1TuC8%2BZ9nE8vLx637BfVYiBUBKJ%2BWNMFxOO5ILPorrIWgvcHPLwhLK1%2FC460EiAxF192bTd3UO61A1Wp7g6UIHpTslPlIlmUh3L8c3EZxDzUQChiNKngoizufAbfCq8rTfdZEBNVKke0DW3qcd5z9jy0dbtsyNbiuHm4Z0J53fjzGB3YTC6OQvESOWLD%2FWB1uLOzqWA1nGT4TB%2B6fCn%2BNBKcHFf8xNhpG2CX9Y%2FT1sp832vjTnUXRGf6A5NSn2qPq0AwOEUZqwP398f4KJXU%2FpnHVTBw5SOVSdvHGEcsisfUDi3gauukVFM8%2FRWiGrXDILQxIF%2FYx9c8cs5UQ9hdrc7lZArBsmLqbcU1CCUb6Ntqm529z5%2BErAw5GCC30NR2TtWYcuwD3FvHWhvCGMbMLGE0VzhnWBG82sA%2BHmIou6a5QNOyLZ2bcY8IYBmE1JVQwUU8tBHYZf2LRizmStftRRqxvjULh%2BEyjMKItuSvZpiX%2BT5CMsH0KoIt8JBzWcpdfj5DCQhLLDBjqkAa1VocIBRDa%2BN9F3WGRiFsreNBp2T%2FsYf%2BrF7v81HLsoNooCudRBVrKt0rgZzxBiDskmm7AGnbzHTQkB%2Bb3kiUZH2P32izwWm3BQKfCtOVxSxkRZPdx3XZxhl%2BeSzrOu67olbu00d0BF83cVIsEX2o%2B%2FWqB1Vhteet5Eew6A4Pb9koQn0tdILeIb8eQIYVOrBizfi7z0yqodguMAyWyiOddd2RwA&X-Amz-Signature=c0dc10b3d83585da82d1093ba135bc66abeeb2203cbc2a4c814f744d1e26d747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
