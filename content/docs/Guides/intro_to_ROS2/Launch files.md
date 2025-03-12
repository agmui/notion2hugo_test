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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FXPKTU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCWXzm%2BC0Ycjfa156hUBZPA1XV654kMwp8HOIiejZ4oyQIgDpsD%2FjvNwKwC%2F2OvkvgnsTWoWq2sgLSdWQiFuVDUsIYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOfOD28Ha%2FzIUY7TCrcAzEvkC03YZMaVbos%2BwBUtip5CX6SId%2FC0oxWpnMELspcfg%2B5wcPmZpooqEz%2BnaJw5uSwu39qXiH6geRkK6PUWtKjztavwlyaAKm5yBvTrfZfV3Mr6j8EBG%2BLKjYObJ9g10rHNo6s46vn4UBflTFGHEmFcpo5p%2BOH8wOFoTe9it2bwlycjHig4MgGf2%2FnZc3zJt4L2C6ncYri1F6ROnVOevNCnYgjdogl80K32gA768TnCnrOLQE1hJV1%2BDIh%2B%2BQFDN0sm2EyPiSBgmAbHn0NrfJVFZ8t6kGGkHOSgBe3HLv91Hu8Z2yLGVIJC57SnGI%2Fe6zRaWKoaGfosCjFr%2FIkw3ViqoYbCJb7Hv%2F2blxZKikfqRw%2BAS6qOlW4yb82PuJOBzchI9jnJwMJzrdRGkHmuBdtTADSM8KwSMSWgTm7SqmGjFO8xbKxu00WkJhO64Sv7GY5jJJecmjQ%2Fxrmn2pdkEYbG8fY1nkfzFMjm0u6REYk5l5nB3Kp21UbZFlML2ajdsxp2sSNnUrzG5zjFJ%2F4AxsyB4H5b8%2B3xtDV8qaNchXsbXFsGZ1Bk8C052HF%2Fi11J5Abs7nv2C09mGXYUvwQT3aK%2B9KXnhdilGoTm54OAVqv5Led6aiPV%2FkXecUGMPa%2Fxr4GOqUBm%2FTkPawZ8kDUFr577wN4BG%2BnY38GVdoqraVO5WuAxhGLL%2B9jo1LLV%2FXZuCYEZWlKcQFzbykDgQHKA4w9HPz9abmWulFguGAjeFJ7g%2FeMbRc2Nz9Zf6IzwM%2BZyerYa7DFj3WxHkJrpvPBFrxYdEtOuX4W1GA3V%2BRmC%2FFqDsi%2Fs4xGbzFKLCPFcDzMCOo7t8psbJO837f5tMtoyQ6hnUIJl3ME%2BHIa&X-Amz-Signature=25c5e4b3f10b4157affec9e44fea02e230bc0591c4784d8e73d9fa17802fca03&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FXPKTU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCWXzm%2BC0Ycjfa156hUBZPA1XV654kMwp8HOIiejZ4oyQIgDpsD%2FjvNwKwC%2F2OvkvgnsTWoWq2sgLSdWQiFuVDUsIYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOfOD28Ha%2FzIUY7TCrcAzEvkC03YZMaVbos%2BwBUtip5CX6SId%2FC0oxWpnMELspcfg%2B5wcPmZpooqEz%2BnaJw5uSwu39qXiH6geRkK6PUWtKjztavwlyaAKm5yBvTrfZfV3Mr6j8EBG%2BLKjYObJ9g10rHNo6s46vn4UBflTFGHEmFcpo5p%2BOH8wOFoTe9it2bwlycjHig4MgGf2%2FnZc3zJt4L2C6ncYri1F6ROnVOevNCnYgjdogl80K32gA768TnCnrOLQE1hJV1%2BDIh%2B%2BQFDN0sm2EyPiSBgmAbHn0NrfJVFZ8t6kGGkHOSgBe3HLv91Hu8Z2yLGVIJC57SnGI%2Fe6zRaWKoaGfosCjFr%2FIkw3ViqoYbCJb7Hv%2F2blxZKikfqRw%2BAS6qOlW4yb82PuJOBzchI9jnJwMJzrdRGkHmuBdtTADSM8KwSMSWgTm7SqmGjFO8xbKxu00WkJhO64Sv7GY5jJJecmjQ%2Fxrmn2pdkEYbG8fY1nkfzFMjm0u6REYk5l5nB3Kp21UbZFlML2ajdsxp2sSNnUrzG5zjFJ%2F4AxsyB4H5b8%2B3xtDV8qaNchXsbXFsGZ1Bk8C052HF%2Fi11J5Abs7nv2C09mGXYUvwQT3aK%2B9KXnhdilGoTm54OAVqv5Led6aiPV%2FkXecUGMPa%2Fxr4GOqUBm%2FTkPawZ8kDUFr577wN4BG%2BnY38GVdoqraVO5WuAxhGLL%2B9jo1LLV%2FXZuCYEZWlKcQFzbykDgQHKA4w9HPz9abmWulFguGAjeFJ7g%2FeMbRc2Nz9Zf6IzwM%2BZyerYa7DFj3WxHkJrpvPBFrxYdEtOuX4W1GA3V%2BRmC%2FFqDsi%2Fs4xGbzFKLCPFcDzMCOo7t8psbJO837f5tMtoyQ6hnUIJl3ME%2BHIa&X-Amz-Signature=2ad19953f939540e05ed33263ee7d7da59d237d3c44fbcfb5101d1e354a76889&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FXPKTU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCWXzm%2BC0Ycjfa156hUBZPA1XV654kMwp8HOIiejZ4oyQIgDpsD%2FjvNwKwC%2F2OvkvgnsTWoWq2sgLSdWQiFuVDUsIYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOfOD28Ha%2FzIUY7TCrcAzEvkC03YZMaVbos%2BwBUtip5CX6SId%2FC0oxWpnMELspcfg%2B5wcPmZpooqEz%2BnaJw5uSwu39qXiH6geRkK6PUWtKjztavwlyaAKm5yBvTrfZfV3Mr6j8EBG%2BLKjYObJ9g10rHNo6s46vn4UBflTFGHEmFcpo5p%2BOH8wOFoTe9it2bwlycjHig4MgGf2%2FnZc3zJt4L2C6ncYri1F6ROnVOevNCnYgjdogl80K32gA768TnCnrOLQE1hJV1%2BDIh%2B%2BQFDN0sm2EyPiSBgmAbHn0NrfJVFZ8t6kGGkHOSgBe3HLv91Hu8Z2yLGVIJC57SnGI%2Fe6zRaWKoaGfosCjFr%2FIkw3ViqoYbCJb7Hv%2F2blxZKikfqRw%2BAS6qOlW4yb82PuJOBzchI9jnJwMJzrdRGkHmuBdtTADSM8KwSMSWgTm7SqmGjFO8xbKxu00WkJhO64Sv7GY5jJJecmjQ%2Fxrmn2pdkEYbG8fY1nkfzFMjm0u6REYk5l5nB3Kp21UbZFlML2ajdsxp2sSNnUrzG5zjFJ%2F4AxsyB4H5b8%2B3xtDV8qaNchXsbXFsGZ1Bk8C052HF%2Fi11J5Abs7nv2C09mGXYUvwQT3aK%2B9KXnhdilGoTm54OAVqv5Led6aiPV%2FkXecUGMPa%2Fxr4GOqUBm%2FTkPawZ8kDUFr577wN4BG%2BnY38GVdoqraVO5WuAxhGLL%2B9jo1LLV%2FXZuCYEZWlKcQFzbykDgQHKA4w9HPz9abmWulFguGAjeFJ7g%2FeMbRc2Nz9Zf6IzwM%2BZyerYa7DFj3WxHkJrpvPBFrxYdEtOuX4W1GA3V%2BRmC%2FFqDsi%2Fs4xGbzFKLCPFcDzMCOo7t8psbJO837f5tMtoyQ6hnUIJl3ME%2BHIa&X-Amz-Signature=580590d2537e87042548e773b0d32df76fe95a4b4a46c16143aed004b6bd7fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
