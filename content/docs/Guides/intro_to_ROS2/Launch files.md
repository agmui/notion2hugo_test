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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z6GGU5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAq8CyHY8X8WUPkQps2uuCIbx7VPdbWfAxbu8jsmBWkBAiEAwOyLOF%2BmVffVfNpB%2BV%2F0ggLimLb9lHXG67bOIzzDDP4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQvfil8bYEmuYR%2B%2BircA9tbhWmVSYZBX4QwwXM%2F6wHYgwkIBb%2BkqNic78nelbE%2FEBmGnhJ%2BXmV8fcIeNZBWbdfTqzdwamHKcdREqyEejOS2KbJCnSvhfmj3awqEmu%2BeBczfCrnkuad6ZgoheEXYbi7oNOO4MBXBRKm4fAb4Df8dYhu13nvLfofBEGDs%2FJSzyno2IyIZiU2rqfdl2uYc9iSGKyoOhtzB7hodsJoOfBWzqcgA4Xd%2BqFEXawAWrpW%2BLnlvz9H7KyUgl8NS1hurqOofUjk6ydAKBUDZlH6uMO6Oj%2BmYUrXN0%2BWLn%2BBWo9M2z1d7uLGDMBt2REhh%2Fbg44swzqYNNH%2Bi2b3d%2BAWyWhywe1gs%2BLLcKVIA4%2Bjj8I1XbpRmUYue4k53Ht2vOwV%2FPWkZLLmFyfCJVhO8BuMwUy%2F8SFspEIqXj3DyV%2FBDL4ozLyA63izFLMpByzEYORL2i4CyIO3IsAANx8KCvTjSpWPkxkEoN2Yuj0ZKKyba2A9tVw2Nv%2Bsimgew0P8mUeg7qsn2IgTZqFItC%2F%2FRKJ1bx4a6VWNvXb70cG%2Foidk1PqXOjTtnDJoErsDIhxBnF8%2FIkeyKlQhWVTGKYb%2FN4myohjH1h%2FmPDCA5EkjevAYNlu8IttURySddWkCFai4wMMLuI%2F8EGOqUB3D3jsn3PHT%2FZuOB3XogEmVnCeOI4GWevvHfmpo4%2BLftrxyy8FmmMBFyYnrDjE5dblSpsPiXDOx8oqn9jE790KQzESdU5QgyY3jIh%2Bn8Os%2B35PN3uTzU50EjnKRkO2Wv6g8UJvxv%2FULukoxmpJZb3dNH5x7aiPrrIkakkKW4U%2FviYa8dlwsPRaeLHfRmAd7c1i%2Bv8AZM%2FIJDp2Pxnmo0u2MddR3eR&X-Amz-Signature=fdc3cd9d4883d4f58ab3b29663d5417d8905d5c28264b49f7f19688f53a6b221&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z6GGU5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAq8CyHY8X8WUPkQps2uuCIbx7VPdbWfAxbu8jsmBWkBAiEAwOyLOF%2BmVffVfNpB%2BV%2F0ggLimLb9lHXG67bOIzzDDP4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQvfil8bYEmuYR%2B%2BircA9tbhWmVSYZBX4QwwXM%2F6wHYgwkIBb%2BkqNic78nelbE%2FEBmGnhJ%2BXmV8fcIeNZBWbdfTqzdwamHKcdREqyEejOS2KbJCnSvhfmj3awqEmu%2BeBczfCrnkuad6ZgoheEXYbi7oNOO4MBXBRKm4fAb4Df8dYhu13nvLfofBEGDs%2FJSzyno2IyIZiU2rqfdl2uYc9iSGKyoOhtzB7hodsJoOfBWzqcgA4Xd%2BqFEXawAWrpW%2BLnlvz9H7KyUgl8NS1hurqOofUjk6ydAKBUDZlH6uMO6Oj%2BmYUrXN0%2BWLn%2BBWo9M2z1d7uLGDMBt2REhh%2Fbg44swzqYNNH%2Bi2b3d%2BAWyWhywe1gs%2BLLcKVIA4%2Bjj8I1XbpRmUYue4k53Ht2vOwV%2FPWkZLLmFyfCJVhO8BuMwUy%2F8SFspEIqXj3DyV%2FBDL4ozLyA63izFLMpByzEYORL2i4CyIO3IsAANx8KCvTjSpWPkxkEoN2Yuj0ZKKyba2A9tVw2Nv%2Bsimgew0P8mUeg7qsn2IgTZqFItC%2F%2FRKJ1bx4a6VWNvXb70cG%2Foidk1PqXOjTtnDJoErsDIhxBnF8%2FIkeyKlQhWVTGKYb%2FN4myohjH1h%2FmPDCA5EkjevAYNlu8IttURySddWkCFai4wMMLuI%2F8EGOqUB3D3jsn3PHT%2FZuOB3XogEmVnCeOI4GWevvHfmpo4%2BLftrxyy8FmmMBFyYnrDjE5dblSpsPiXDOx8oqn9jE790KQzESdU5QgyY3jIh%2Bn8Os%2B35PN3uTzU50EjnKRkO2Wv6g8UJvxv%2FULukoxmpJZb3dNH5x7aiPrrIkakkKW4U%2FviYa8dlwsPRaeLHfRmAd7c1i%2Bv8AZM%2FIJDp2Pxnmo0u2MddR3eR&X-Amz-Signature=d47530f81c71e61741db7c2488e18c87a4a6f220f8ff5e4b704476319f49b6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z6GGU5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAq8CyHY8X8WUPkQps2uuCIbx7VPdbWfAxbu8jsmBWkBAiEAwOyLOF%2BmVffVfNpB%2BV%2F0ggLimLb9lHXG67bOIzzDDP4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQvfil8bYEmuYR%2B%2BircA9tbhWmVSYZBX4QwwXM%2F6wHYgwkIBb%2BkqNic78nelbE%2FEBmGnhJ%2BXmV8fcIeNZBWbdfTqzdwamHKcdREqyEejOS2KbJCnSvhfmj3awqEmu%2BeBczfCrnkuad6ZgoheEXYbi7oNOO4MBXBRKm4fAb4Df8dYhu13nvLfofBEGDs%2FJSzyno2IyIZiU2rqfdl2uYc9iSGKyoOhtzB7hodsJoOfBWzqcgA4Xd%2BqFEXawAWrpW%2BLnlvz9H7KyUgl8NS1hurqOofUjk6ydAKBUDZlH6uMO6Oj%2BmYUrXN0%2BWLn%2BBWo9M2z1d7uLGDMBt2REhh%2Fbg44swzqYNNH%2Bi2b3d%2BAWyWhywe1gs%2BLLcKVIA4%2Bjj8I1XbpRmUYue4k53Ht2vOwV%2FPWkZLLmFyfCJVhO8BuMwUy%2F8SFspEIqXj3DyV%2FBDL4ozLyA63izFLMpByzEYORL2i4CyIO3IsAANx8KCvTjSpWPkxkEoN2Yuj0ZKKyba2A9tVw2Nv%2Bsimgew0P8mUeg7qsn2IgTZqFItC%2F%2FRKJ1bx4a6VWNvXb70cG%2Foidk1PqXOjTtnDJoErsDIhxBnF8%2FIkeyKlQhWVTGKYb%2FN4myohjH1h%2FmPDCA5EkjevAYNlu8IttURySddWkCFai4wMMLuI%2F8EGOqUB3D3jsn3PHT%2FZuOB3XogEmVnCeOI4GWevvHfmpo4%2BLftrxyy8FmmMBFyYnrDjE5dblSpsPiXDOx8oqn9jE790KQzESdU5QgyY3jIh%2Bn8Os%2B35PN3uTzU50EjnKRkO2Wv6g8UJvxv%2FULukoxmpJZb3dNH5x7aiPrrIkakkKW4U%2FviYa8dlwsPRaeLHfRmAd7c1i%2Bv8AZM%2FIJDp2Pxnmo0u2MddR3eR&X-Amz-Signature=12bca367340b3f7a5fa98dc5247653146371d11d71ecadfaa42028a2a5f146d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
