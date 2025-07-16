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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBSMZR2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICyRdYsAL4tnM71s30Hg3ZdGZm58PXgGTs5luPBIQUKiAiEAyOEJ%2BqgMzdE%2FkfriJRV0KL%2Bn8GhugY%2F8qqRiU8%2FVp%2Fwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvP9ysPFagw4uNktircAxw9L%2FqfbXhzMzHSnWp9fsfj7phUoPjU51m%2B0DOnrollWUCrSPsnQbT1%2Bd2uYng8OTNBbqkyxXEWu1ugvBcwcPk5FJ9qCBfC9GBYZtCzK7QNF0z3Bl2ZthdWitA5MDa%2FjcrAtN%2B4jKGOl8lAz80NQba0%2BJaLlphossoUKqZTDen3fi7h%2B48ThQowl4E2d9%2FqR5Qh9SgL%2FcnTobONiyk2hTglGwKync8OBmV3K6AMViqekLiD9yS0mAtNJJPeqZDe6ErKullXcfVdwiGhpEOPjMPcU0OpCMThw7Jg8hBtWkE2R10nhRE5wyAq3OPHrt2yoYFKRng02z3Texnz1esQ2gBteIlg7cE6db0UjWWmhzCt2FtoCkMvO2Zt2kQXAbuvzuKTXQwoZyBlgBxszHL0hE7WYVjRCkUYocWLvsADvZcPH6lwajowVONl12gP8sopVFgx3fu%2FDXm70TMqz%2BfRh%2F1f3ZKVg8poq9ycVj0c7eIhWL%2BYHXn6jz%2F7V7b96YqhRejly3z1NS9P1E%2F%2FSXBGO%2FyBOKs%2F3dkzkIQfhuHDRTYl6jw4WaUB5bMScyEmvnQc6%2F7UrU6Us6BzW2sin%2FzgbgvZEjw7FuljWxO02kFf8B20r%2Fz5c%2BioVwjjHkzDMPOW4MMGOqUBy85dUeBTLx25mRUH7c3kyQB%2F3U7BjCWFJYAn634apEBGaBj4wSG1i0kz2nAQGYIdTNtRyvsXW2o%2F9N61R0IeX35rO3ubfRlg1fY2crKJurEwKPYqhizSl%2FRclk%2FwNygouFfo0MJByTBlqVVgw74MVEvTzwUN21i8UqD6QnzegJRjBBr1RTvt%2B874JWYkjUbphVIECHBk6d8d%2F%2BKGdPaAY3v5ZeSC&X-Amz-Signature=2fa090f3cd36bf9fbdf11371d666edcd30d21e1e2590891de28bc33c7df73ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBSMZR2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICyRdYsAL4tnM71s30Hg3ZdGZm58PXgGTs5luPBIQUKiAiEAyOEJ%2BqgMzdE%2FkfriJRV0KL%2Bn8GhugY%2F8qqRiU8%2FVp%2Fwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvP9ysPFagw4uNktircAxw9L%2FqfbXhzMzHSnWp9fsfj7phUoPjU51m%2B0DOnrollWUCrSPsnQbT1%2Bd2uYng8OTNBbqkyxXEWu1ugvBcwcPk5FJ9qCBfC9GBYZtCzK7QNF0z3Bl2ZthdWitA5MDa%2FjcrAtN%2B4jKGOl8lAz80NQba0%2BJaLlphossoUKqZTDen3fi7h%2B48ThQowl4E2d9%2FqR5Qh9SgL%2FcnTobONiyk2hTglGwKync8OBmV3K6AMViqekLiD9yS0mAtNJJPeqZDe6ErKullXcfVdwiGhpEOPjMPcU0OpCMThw7Jg8hBtWkE2R10nhRE5wyAq3OPHrt2yoYFKRng02z3Texnz1esQ2gBteIlg7cE6db0UjWWmhzCt2FtoCkMvO2Zt2kQXAbuvzuKTXQwoZyBlgBxszHL0hE7WYVjRCkUYocWLvsADvZcPH6lwajowVONl12gP8sopVFgx3fu%2FDXm70TMqz%2BfRh%2F1f3ZKVg8poq9ycVj0c7eIhWL%2BYHXn6jz%2F7V7b96YqhRejly3z1NS9P1E%2F%2FSXBGO%2FyBOKs%2F3dkzkIQfhuHDRTYl6jw4WaUB5bMScyEmvnQc6%2F7UrU6Us6BzW2sin%2FzgbgvZEjw7FuljWxO02kFf8B20r%2Fz5c%2BioVwjjHkzDMPOW4MMGOqUBy85dUeBTLx25mRUH7c3kyQB%2F3U7BjCWFJYAn634apEBGaBj4wSG1i0kz2nAQGYIdTNtRyvsXW2o%2F9N61R0IeX35rO3ubfRlg1fY2crKJurEwKPYqhizSl%2FRclk%2FwNygouFfo0MJByTBlqVVgw74MVEvTzwUN21i8UqD6QnzegJRjBBr1RTvt%2B874JWYkjUbphVIECHBk6d8d%2F%2BKGdPaAY3v5ZeSC&X-Amz-Signature=621be008f229caeaa2a4f5d6a35b9a821624a127b1b45ca19a523344ceff6430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBSMZR2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICyRdYsAL4tnM71s30Hg3ZdGZm58PXgGTs5luPBIQUKiAiEAyOEJ%2BqgMzdE%2FkfriJRV0KL%2Bn8GhugY%2F8qqRiU8%2FVp%2Fwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvP9ysPFagw4uNktircAxw9L%2FqfbXhzMzHSnWp9fsfj7phUoPjU51m%2B0DOnrollWUCrSPsnQbT1%2Bd2uYng8OTNBbqkyxXEWu1ugvBcwcPk5FJ9qCBfC9GBYZtCzK7QNF0z3Bl2ZthdWitA5MDa%2FjcrAtN%2B4jKGOl8lAz80NQba0%2BJaLlphossoUKqZTDen3fi7h%2B48ThQowl4E2d9%2FqR5Qh9SgL%2FcnTobONiyk2hTglGwKync8OBmV3K6AMViqekLiD9yS0mAtNJJPeqZDe6ErKullXcfVdwiGhpEOPjMPcU0OpCMThw7Jg8hBtWkE2R10nhRE5wyAq3OPHrt2yoYFKRng02z3Texnz1esQ2gBteIlg7cE6db0UjWWmhzCt2FtoCkMvO2Zt2kQXAbuvzuKTXQwoZyBlgBxszHL0hE7WYVjRCkUYocWLvsADvZcPH6lwajowVONl12gP8sopVFgx3fu%2FDXm70TMqz%2BfRh%2F1f3ZKVg8poq9ycVj0c7eIhWL%2BYHXn6jz%2F7V7b96YqhRejly3z1NS9P1E%2F%2FSXBGO%2FyBOKs%2F3dkzkIQfhuHDRTYl6jw4WaUB5bMScyEmvnQc6%2F7UrU6Us6BzW2sin%2FzgbgvZEjw7FuljWxO02kFf8B20r%2Fz5c%2BioVwjjHkzDMPOW4MMGOqUBy85dUeBTLx25mRUH7c3kyQB%2F3U7BjCWFJYAn634apEBGaBj4wSG1i0kz2nAQGYIdTNtRyvsXW2o%2F9N61R0IeX35rO3ubfRlg1fY2crKJurEwKPYqhizSl%2FRclk%2FwNygouFfo0MJByTBlqVVgw74MVEvTzwUN21i8UqD6QnzegJRjBBr1RTvt%2B874JWYkjUbphVIECHBk6d8d%2F%2BKGdPaAY3v5ZeSC&X-Amz-Signature=0644d090be9609264c83d33ae204983cf5edd288f799714393a77db483caa4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
