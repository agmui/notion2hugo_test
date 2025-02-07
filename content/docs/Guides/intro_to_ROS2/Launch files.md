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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2TUMQV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFwOKIeXivsukSIB7%2FBQwk7IzFJD0sDWVBmxh9ppViy7AiBzjDRzK4Dn9lAXSWlUKxYBbSDKOgMJcf3HYe4sxQRiuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFUMKV8Y%2FIQry58eUKtwDLksfHvmdatQFFIS6goaotgpVyl%2Bl7rvEhZuHOvxdcg7tajM7hC%2FcB73FalHq0Bu2yprf8yBwABmdJb6DWCAFTRorVEu8E6OHXNqmZBVOAjBStwhOBk2nnnPygfNjAOVNTEgeBUkVG4vqdIhPQxq8DsdKvsA5JYe1%2BFzCbsT0i1L0c1kdtpU1SNE%2Br7EzLytDJqiWLZplPCiuZ64Sp4I4rI80L8uNEiTIcCVr1lox8dEPoHmDyKyvSzj%2FkDE%2FZxAfjd9mwi5CJxYaMDOjptQgr%2F6Y0fmGjNjLFaq0nvlBQOlhW6dsBMATxMHR962gL2nLW05YOM2b4HxyqEhHc2M6qCOWUrNrC0c6KHx3HqbXisAWbE%2BOf02ocIxqqedJUdYsPltzsu2Mj3wYvbsZwpn%2BaI2P8s%2BV0JQhWVQ2SFT74Yp3kpI%2Bo3zlEXwCLrVOwStIWS1L6jUpDvGIAdYpaR9Ay4gM2Hqbq4%2Btnt9j5%2FcLj8NW1LZWJ6yFgVXXoiL9nF3DbEZal7uQLPCmUkpBy6exUB3R0gb2uxEPi7ZlN4GFGyN9Bv9gVxHiUjsB%2B%2FoSdZ5olPwiwoTMVyvMkEo9wrjAoCD4pqIszfr3HoYrg6zsoUi3ajz1cb8Uo6USe2wwnPuWvQY6pgFxYf56ceatZAYkKpcrHF0C%2FKiFCiZI%2B18xgp%2BgHnoShtKfzV482zgJayga%2Fxd8DgYXfDzwUw3w8CZP6gZP7CU%2Fg9oYHlYOcOiruq%2FkbUJKFSpuu5fZiDhcXzIuLXLy7XAyRonaD6QGeDwLUnaKFMub9oWfDk0Wf19qDu2ZeYihdK4VvpEhg6P4yVfdrZ%2BOhSw2Km%2Fx5VKR8OVZlDZbHft039LgrkNT&X-Amz-Signature=2634178741241faa028812cf3e5d080fcfc528370ed4f94cc0d04155997d2775&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2TUMQV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFwOKIeXivsukSIB7%2FBQwk7IzFJD0sDWVBmxh9ppViy7AiBzjDRzK4Dn9lAXSWlUKxYBbSDKOgMJcf3HYe4sxQRiuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFUMKV8Y%2FIQry58eUKtwDLksfHvmdatQFFIS6goaotgpVyl%2Bl7rvEhZuHOvxdcg7tajM7hC%2FcB73FalHq0Bu2yprf8yBwABmdJb6DWCAFTRorVEu8E6OHXNqmZBVOAjBStwhOBk2nnnPygfNjAOVNTEgeBUkVG4vqdIhPQxq8DsdKvsA5JYe1%2BFzCbsT0i1L0c1kdtpU1SNE%2Br7EzLytDJqiWLZplPCiuZ64Sp4I4rI80L8uNEiTIcCVr1lox8dEPoHmDyKyvSzj%2FkDE%2FZxAfjd9mwi5CJxYaMDOjptQgr%2F6Y0fmGjNjLFaq0nvlBQOlhW6dsBMATxMHR962gL2nLW05YOM2b4HxyqEhHc2M6qCOWUrNrC0c6KHx3HqbXisAWbE%2BOf02ocIxqqedJUdYsPltzsu2Mj3wYvbsZwpn%2BaI2P8s%2BV0JQhWVQ2SFT74Yp3kpI%2Bo3zlEXwCLrVOwStIWS1L6jUpDvGIAdYpaR9Ay4gM2Hqbq4%2Btnt9j5%2FcLj8NW1LZWJ6yFgVXXoiL9nF3DbEZal7uQLPCmUkpBy6exUB3R0gb2uxEPi7ZlN4GFGyN9Bv9gVxHiUjsB%2B%2FoSdZ5olPwiwoTMVyvMkEo9wrjAoCD4pqIszfr3HoYrg6zsoUi3ajz1cb8Uo6USe2wwnPuWvQY6pgFxYf56ceatZAYkKpcrHF0C%2FKiFCiZI%2B18xgp%2BgHnoShtKfzV482zgJayga%2Fxd8DgYXfDzwUw3w8CZP6gZP7CU%2Fg9oYHlYOcOiruq%2FkbUJKFSpuu5fZiDhcXzIuLXLy7XAyRonaD6QGeDwLUnaKFMub9oWfDk0Wf19qDu2ZeYihdK4VvpEhg6P4yVfdrZ%2BOhSw2Km%2Fx5VKR8OVZlDZbHft039LgrkNT&X-Amz-Signature=720c470afb899a51f3437480ba9f43d3a8c544c6ed812df8b1927b09ed0c6543&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2TUMQV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFwOKIeXivsukSIB7%2FBQwk7IzFJD0sDWVBmxh9ppViy7AiBzjDRzK4Dn9lAXSWlUKxYBbSDKOgMJcf3HYe4sxQRiuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFUMKV8Y%2FIQry58eUKtwDLksfHvmdatQFFIS6goaotgpVyl%2Bl7rvEhZuHOvxdcg7tajM7hC%2FcB73FalHq0Bu2yprf8yBwABmdJb6DWCAFTRorVEu8E6OHXNqmZBVOAjBStwhOBk2nnnPygfNjAOVNTEgeBUkVG4vqdIhPQxq8DsdKvsA5JYe1%2BFzCbsT0i1L0c1kdtpU1SNE%2Br7EzLytDJqiWLZplPCiuZ64Sp4I4rI80L8uNEiTIcCVr1lox8dEPoHmDyKyvSzj%2FkDE%2FZxAfjd9mwi5CJxYaMDOjptQgr%2F6Y0fmGjNjLFaq0nvlBQOlhW6dsBMATxMHR962gL2nLW05YOM2b4HxyqEhHc2M6qCOWUrNrC0c6KHx3HqbXisAWbE%2BOf02ocIxqqedJUdYsPltzsu2Mj3wYvbsZwpn%2BaI2P8s%2BV0JQhWVQ2SFT74Yp3kpI%2Bo3zlEXwCLrVOwStIWS1L6jUpDvGIAdYpaR9Ay4gM2Hqbq4%2Btnt9j5%2FcLj8NW1LZWJ6yFgVXXoiL9nF3DbEZal7uQLPCmUkpBy6exUB3R0gb2uxEPi7ZlN4GFGyN9Bv9gVxHiUjsB%2B%2FoSdZ5olPwiwoTMVyvMkEo9wrjAoCD4pqIszfr3HoYrg6zsoUi3ajz1cb8Uo6USe2wwnPuWvQY6pgFxYf56ceatZAYkKpcrHF0C%2FKiFCiZI%2B18xgp%2BgHnoShtKfzV482zgJayga%2Fxd8DgYXfDzwUw3w8CZP6gZP7CU%2Fg9oYHlYOcOiruq%2FkbUJKFSpuu5fZiDhcXzIuLXLy7XAyRonaD6QGeDwLUnaKFMub9oWfDk0Wf19qDu2ZeYihdK4VvpEhg6P4yVfdrZ%2BOhSw2Km%2Fx5VKR8OVZlDZbHft039LgrkNT&X-Amz-Signature=fde14cc107131f50d0d3c52b8cfa2ebfcbefbf1748acf094550361961ce2dae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
