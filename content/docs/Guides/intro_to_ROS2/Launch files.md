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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CSVIE2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUutGGSzhFC9tZwgz1txKaFALsBN8eZb3MgVCVz8SgkAiAIqr23tSZUjHCIUQ3p1SiLAAPhhrekXJ22vi%2FGiafgEyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMRO5EONZOvn2vwUGMKtwD8fw5KEFoqBIRZHyk%2FB1PU%2BAhnpVYCu5wkOS2156iDcLShlQRcsTeptyQ9BmMnPpq9oGanwl4z8SO4zL7kZGCh8TpNBv58PmSlLhquAf1SkchLXyRdU%2BRW8tMkGIF6DO6WGRCw1KsXeCEAiraPPDhVnW5SkfMvYUBDRmzfnCedfDDrbOfxN%2BumAxBrIfZPBdSHb25nuagTikbtGz7lLzKv82EC4HXQRkGFAMEzNHeWxzV4a%2F9Go0Y97tlNq%2BAegqD7O7lQ3wGloTxChdOEGcIrNO6nk1jhwuzDUCVXpoDQVsRmrA82kAiWbOZIv4VcLGerlWJ6cH%2F1tKoDvZI3yZ1Z5hPgTjf%2Bh%2B14SRwyf9K%2F6Z2O2rFnbuovPNbLgaY0m1rc2RKe5%2BZv1YtircuH2h0qBYkdgC36LwfE1SRXL9uRywaQiflOghqLG%2FWX0wWsFssMgWegBrwXT53c0yaUSiwBQdDa4Bu5%2BCqRr9b6gNVV6O5v5RYmcxYteiwRwDTY7AI2Ek2ZSjvzeSLjOW5EVd7jwQp2mi%2FFxU5TspmzEiOI68tZ3DuPtkIXChbroiU58Mf99HMuhf0h4CsAVrUz2R%2B%2BavhhI1riZU2LWVQLNhn9jgmVqei1MUtTC1kP9wwwrihvgY6pgEoFTVWsBJlDfu38p7bhKoSymol9DSb89iDp92Zei5JNG5%2BZlLFwvHf1DE0TIvwdnJKfv7PvhGaqG0X4JTjNIlMXTA1pRE12q71LsUmER4NU7kSv4TWjMbROI20LI3sFawn4w7Y0a5cirfIFQP9ItcVd5DBKi23FMH6RJslz%2BKxSiNUr%2Bh%2Fwsf6k8kRo6BwoBwTVXJ8Sg5pIp1nQOsFrEphirYMV%2FH4&X-Amz-Signature=c2f416d8bdf97c06806852f6cf948b14b42cf4d8a0ee9d2318f85b2d2ae9e95d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CSVIE2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUutGGSzhFC9tZwgz1txKaFALsBN8eZb3MgVCVz8SgkAiAIqr23tSZUjHCIUQ3p1SiLAAPhhrekXJ22vi%2FGiafgEyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMRO5EONZOvn2vwUGMKtwD8fw5KEFoqBIRZHyk%2FB1PU%2BAhnpVYCu5wkOS2156iDcLShlQRcsTeptyQ9BmMnPpq9oGanwl4z8SO4zL7kZGCh8TpNBv58PmSlLhquAf1SkchLXyRdU%2BRW8tMkGIF6DO6WGRCw1KsXeCEAiraPPDhVnW5SkfMvYUBDRmzfnCedfDDrbOfxN%2BumAxBrIfZPBdSHb25nuagTikbtGz7lLzKv82EC4HXQRkGFAMEzNHeWxzV4a%2F9Go0Y97tlNq%2BAegqD7O7lQ3wGloTxChdOEGcIrNO6nk1jhwuzDUCVXpoDQVsRmrA82kAiWbOZIv4VcLGerlWJ6cH%2F1tKoDvZI3yZ1Z5hPgTjf%2Bh%2B14SRwyf9K%2F6Z2O2rFnbuovPNbLgaY0m1rc2RKe5%2BZv1YtircuH2h0qBYkdgC36LwfE1SRXL9uRywaQiflOghqLG%2FWX0wWsFssMgWegBrwXT53c0yaUSiwBQdDa4Bu5%2BCqRr9b6gNVV6O5v5RYmcxYteiwRwDTY7AI2Ek2ZSjvzeSLjOW5EVd7jwQp2mi%2FFxU5TspmzEiOI68tZ3DuPtkIXChbroiU58Mf99HMuhf0h4CsAVrUz2R%2B%2BavhhI1riZU2LWVQLNhn9jgmVqei1MUtTC1kP9wwwrihvgY6pgEoFTVWsBJlDfu38p7bhKoSymol9DSb89iDp92Zei5JNG5%2BZlLFwvHf1DE0TIvwdnJKfv7PvhGaqG0X4JTjNIlMXTA1pRE12q71LsUmER4NU7kSv4TWjMbROI20LI3sFawn4w7Y0a5cirfIFQP9ItcVd5DBKi23FMH6RJslz%2BKxSiNUr%2Bh%2Fwsf6k8kRo6BwoBwTVXJ8Sg5pIp1nQOsFrEphirYMV%2FH4&X-Amz-Signature=d20a39aab80d5749724ffd0614695cfbb9a0b1c495ffc2e7b539ed2cecd1099a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CSVIE2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUutGGSzhFC9tZwgz1txKaFALsBN8eZb3MgVCVz8SgkAiAIqr23tSZUjHCIUQ3p1SiLAAPhhrekXJ22vi%2FGiafgEyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMRO5EONZOvn2vwUGMKtwD8fw5KEFoqBIRZHyk%2FB1PU%2BAhnpVYCu5wkOS2156iDcLShlQRcsTeptyQ9BmMnPpq9oGanwl4z8SO4zL7kZGCh8TpNBv58PmSlLhquAf1SkchLXyRdU%2BRW8tMkGIF6DO6WGRCw1KsXeCEAiraPPDhVnW5SkfMvYUBDRmzfnCedfDDrbOfxN%2BumAxBrIfZPBdSHb25nuagTikbtGz7lLzKv82EC4HXQRkGFAMEzNHeWxzV4a%2F9Go0Y97tlNq%2BAegqD7O7lQ3wGloTxChdOEGcIrNO6nk1jhwuzDUCVXpoDQVsRmrA82kAiWbOZIv4VcLGerlWJ6cH%2F1tKoDvZI3yZ1Z5hPgTjf%2Bh%2B14SRwyf9K%2F6Z2O2rFnbuovPNbLgaY0m1rc2RKe5%2BZv1YtircuH2h0qBYkdgC36LwfE1SRXL9uRywaQiflOghqLG%2FWX0wWsFssMgWegBrwXT53c0yaUSiwBQdDa4Bu5%2BCqRr9b6gNVV6O5v5RYmcxYteiwRwDTY7AI2Ek2ZSjvzeSLjOW5EVd7jwQp2mi%2FFxU5TspmzEiOI68tZ3DuPtkIXChbroiU58Mf99HMuhf0h4CsAVrUz2R%2B%2BavhhI1riZU2LWVQLNhn9jgmVqei1MUtTC1kP9wwwrihvgY6pgEoFTVWsBJlDfu38p7bhKoSymol9DSb89iDp92Zei5JNG5%2BZlLFwvHf1DE0TIvwdnJKfv7PvhGaqG0X4JTjNIlMXTA1pRE12q71LsUmER4NU7kSv4TWjMbROI20LI3sFawn4w7Y0a5cirfIFQP9ItcVd5DBKi23FMH6RJslz%2BKxSiNUr%2Bh%2Fwsf6k8kRo6BwoBwTVXJ8Sg5pIp1nQOsFrEphirYMV%2FH4&X-Amz-Signature=068731a9e0d751bd473b462506a60cb6fcf4285f54068229c8dd201fc8e42993&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
