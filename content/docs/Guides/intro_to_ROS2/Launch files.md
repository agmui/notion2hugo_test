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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FPLHQH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHdW%2BLt%2BYPNuTM7dFJsTH1nj3wInClLQMnhD9n%2FZsuAiEA2Heyo3U9971PuxczhS1oqvYZU1H%2FnyOhUjSnk73HNtgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIcqGU49l5yQlJ7egCrcA8XESwyGlLQ0ZwF3lRbIJbanDbO8MGl6FUiF2%2F6Trp9awp6QUNGrMmTwt6D2PBNdTENIqwNrbJEMt2scT%2BLMKucD%2FSzbxlW%2F0%2BBGG6TaYrYQ7yT%2BARYuNYc20gEGNXS%2BUX1WTarFA7%2ByIJ7uomtcfQLTscZHROlN%2F4YNdCYiP80Fg1SZiaIDoa81CDKFFRMLHkpLvKJClQak4iF5Q9NQqkccsPrD2MGUsKBECny5qyu48RcVRk9M%2FCqNUKjX9Ic5naJFrj42QAeanHREM44F5rE1IeGP8ztd7TtTedhrWPfOmVXTw1%2Bbml%2Bv1hvoqexMkQbw6sRScBGHuAM7tDxBmHD%2BarSuVS6TV%2FYSvfGXM3bdioxWXVsY17VtsJ%2FPb0%2BsCeXlGeDRrwJMNOr93%2F%2BhXxUSVOAf2pQZVy30Zy1BtHDWaGfYqoP8fbPDnL2KdajGwRWhKxsW%2BEtdCL7kZKGLv%2B6Hi7pF3dVi%2FVYc%2B1zKmY45xMTkk%2FKy6IFeCy5YuJ%2BFV52ex6MwYBUo9oaWfEUlqlRKgZQzmRD4hV0PBHc%2B8UqZ7RoRObrqi0S5UwX8uuw13cl8iFkR%2BAG8vc0wAkC%2F%2FKQehPzYfGdFxFTIIDLziBODTtSk3oOabEzYuvyIMNnmvMAGOqUBm9GnDOqQ%2FLFAA2rIE9Ee2qKh%2F5%2BoXGpddTEeMYKnMwZVTYFcQ1uSh6yN1z%2Fi79VYKZLfFa68Vulh2OOdSXUCR31bhrQ51lzSJkxDD1fUApK%2BIeiDJhQ4MawqRFg0Ovrdgdi3Lfj28aHLxUtJc6AzfXQVBGLR%2BKrVzLzjOa8yRh7vRof7hyqCEKRk4uyEOAFMmTnMXql5C%2BSrS53pMIpvyX%2B3lnG2&X-Amz-Signature=186ae30d3b4a43e1213f5e5bb2e7dc4966df95a031cd8484987baa209129c26f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FPLHQH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHdW%2BLt%2BYPNuTM7dFJsTH1nj3wInClLQMnhD9n%2FZsuAiEA2Heyo3U9971PuxczhS1oqvYZU1H%2FnyOhUjSnk73HNtgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIcqGU49l5yQlJ7egCrcA8XESwyGlLQ0ZwF3lRbIJbanDbO8MGl6FUiF2%2F6Trp9awp6QUNGrMmTwt6D2PBNdTENIqwNrbJEMt2scT%2BLMKucD%2FSzbxlW%2F0%2BBGG6TaYrYQ7yT%2BARYuNYc20gEGNXS%2BUX1WTarFA7%2ByIJ7uomtcfQLTscZHROlN%2F4YNdCYiP80Fg1SZiaIDoa81CDKFFRMLHkpLvKJClQak4iF5Q9NQqkccsPrD2MGUsKBECny5qyu48RcVRk9M%2FCqNUKjX9Ic5naJFrj42QAeanHREM44F5rE1IeGP8ztd7TtTedhrWPfOmVXTw1%2Bbml%2Bv1hvoqexMkQbw6sRScBGHuAM7tDxBmHD%2BarSuVS6TV%2FYSvfGXM3bdioxWXVsY17VtsJ%2FPb0%2BsCeXlGeDRrwJMNOr93%2F%2BhXxUSVOAf2pQZVy30Zy1BtHDWaGfYqoP8fbPDnL2KdajGwRWhKxsW%2BEtdCL7kZKGLv%2B6Hi7pF3dVi%2FVYc%2B1zKmY45xMTkk%2FKy6IFeCy5YuJ%2BFV52ex6MwYBUo9oaWfEUlqlRKgZQzmRD4hV0PBHc%2B8UqZ7RoRObrqi0S5UwX8uuw13cl8iFkR%2BAG8vc0wAkC%2F%2FKQehPzYfGdFxFTIIDLziBODTtSk3oOabEzYuvyIMNnmvMAGOqUBm9GnDOqQ%2FLFAA2rIE9Ee2qKh%2F5%2BoXGpddTEeMYKnMwZVTYFcQ1uSh6yN1z%2Fi79VYKZLfFa68Vulh2OOdSXUCR31bhrQ51lzSJkxDD1fUApK%2BIeiDJhQ4MawqRFg0Ovrdgdi3Lfj28aHLxUtJc6AzfXQVBGLR%2BKrVzLzjOa8yRh7vRof7hyqCEKRk4uyEOAFMmTnMXql5C%2BSrS53pMIpvyX%2B3lnG2&X-Amz-Signature=26c82058eec2e34e163a8f771a693c999ff8f2cc557b373b8eacefb4f1a9e706&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FPLHQH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHdW%2BLt%2BYPNuTM7dFJsTH1nj3wInClLQMnhD9n%2FZsuAiEA2Heyo3U9971PuxczhS1oqvYZU1H%2FnyOhUjSnk73HNtgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIcqGU49l5yQlJ7egCrcA8XESwyGlLQ0ZwF3lRbIJbanDbO8MGl6FUiF2%2F6Trp9awp6QUNGrMmTwt6D2PBNdTENIqwNrbJEMt2scT%2BLMKucD%2FSzbxlW%2F0%2BBGG6TaYrYQ7yT%2BARYuNYc20gEGNXS%2BUX1WTarFA7%2ByIJ7uomtcfQLTscZHROlN%2F4YNdCYiP80Fg1SZiaIDoa81CDKFFRMLHkpLvKJClQak4iF5Q9NQqkccsPrD2MGUsKBECny5qyu48RcVRk9M%2FCqNUKjX9Ic5naJFrj42QAeanHREM44F5rE1IeGP8ztd7TtTedhrWPfOmVXTw1%2Bbml%2Bv1hvoqexMkQbw6sRScBGHuAM7tDxBmHD%2BarSuVS6TV%2FYSvfGXM3bdioxWXVsY17VtsJ%2FPb0%2BsCeXlGeDRrwJMNOr93%2F%2BhXxUSVOAf2pQZVy30Zy1BtHDWaGfYqoP8fbPDnL2KdajGwRWhKxsW%2BEtdCL7kZKGLv%2B6Hi7pF3dVi%2FVYc%2B1zKmY45xMTkk%2FKy6IFeCy5YuJ%2BFV52ex6MwYBUo9oaWfEUlqlRKgZQzmRD4hV0PBHc%2B8UqZ7RoRObrqi0S5UwX8uuw13cl8iFkR%2BAG8vc0wAkC%2F%2FKQehPzYfGdFxFTIIDLziBODTtSk3oOabEzYuvyIMNnmvMAGOqUBm9GnDOqQ%2FLFAA2rIE9Ee2qKh%2F5%2BoXGpddTEeMYKnMwZVTYFcQ1uSh6yN1z%2Fi79VYKZLfFa68Vulh2OOdSXUCR31bhrQ51lzSJkxDD1fUApK%2BIeiDJhQ4MawqRFg0Ovrdgdi3Lfj28aHLxUtJc6AzfXQVBGLR%2BKrVzLzjOa8yRh7vRof7hyqCEKRk4uyEOAFMmTnMXql5C%2BSrS53pMIpvyX%2B3lnG2&X-Amz-Signature=2321c3af04b9979406f24066a82e95d582e61f055a5dad4741389885ab5f591f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
