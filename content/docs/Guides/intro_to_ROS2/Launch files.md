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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOBJDNNP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmMdzosCGeXgmy6bNDUyu1o%2FfdKIXsDaEuojVHTy8KkwIgCh2KeL9fZi4bM4eQogMDNxbxdOyueKiK977QI8BlzLcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu8NtIeUwF3xPKhKCrcA63gaP%2FkS57UM%2FXxSXc1TOmdgM9xSVjqjysgxDzlQ3cIYjBk3R%2F609Vobd57g2gAW2RLCh2lzlknRVYNKWVsqQKixLnvbmQJeITq64CL%2FKoSlrXqveOCIUnwfXMryhEh%2BiEHcredHHS0G6%2FogE9FwpVQJQCtCgVRMksy283srwz5TzZolJMLMtFQh%2BrTjXbaE4v5iijlpsOBhojJ98AHfQ67BjhzSX7OuV5FhChf%2FOhGAZV2Y%2FtEIqNPm2%2BcNHGhavmaGSSiR235ZhJfsryKcmxZRV36u%2B%2BUUleawR24sgAtd6eXAeGfEQSXT93jST0mqswqBs%2Fs64rq8WDHrRL%2FB4%2B%2FttJlKqANakpV%2BvOB%2Frhjz3XKfgpYWVXb7bEcX6l46B7V1lyRK7l6mpBrvowlxJdHJiHIsyvqEqOGqlVAQHy1obC7mBSZaJfOJTUS%2B4FJrPDnjSAAMzEhZlSWaSDbv%2Bkx6F7UYAaY7ek0bn4GaJPlzqbtQJuuSfftdlig9L0Bw2kTYOmR4Il5Sdgg1%2FdInhMoj9mfummouDLESlP1T42blOj2ZNLGri2ZcLb3TZdPlmbceqzzkpyILPYS87CgC6HL7jjDefkGZBYtSvC5h1Y0F24KE1FkbRsyVhlmMLqx3MIGOqUBaqU%2FwsX73Pw3ue1KoP5N2fQ9NCSXlsYMHkBwESYBThx6YKZKzrHlTSas2cQJOA8T0oQbLW0xr2N3mqHCUVsDH4Xqjf4HUF4rwUjaIUGZvl5zGfn5%2BFRd3nGxUzroUCLyDY2X1OfR3XM4fqZmRQhSAT%2BuCTAPk30Z7qWjeVQIHHhajEfR%2BFS8JNt%2BFRTgV6B4b0yhHL01FBqoY0R7KipyIss%2BUCWh&X-Amz-Signature=b8ff99952ffb067aac6f1951eef60a903e8a58d1478b369b45f78e06ffde227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOBJDNNP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmMdzosCGeXgmy6bNDUyu1o%2FfdKIXsDaEuojVHTy8KkwIgCh2KeL9fZi4bM4eQogMDNxbxdOyueKiK977QI8BlzLcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu8NtIeUwF3xPKhKCrcA63gaP%2FkS57UM%2FXxSXc1TOmdgM9xSVjqjysgxDzlQ3cIYjBk3R%2F609Vobd57g2gAW2RLCh2lzlknRVYNKWVsqQKixLnvbmQJeITq64CL%2FKoSlrXqveOCIUnwfXMryhEh%2BiEHcredHHS0G6%2FogE9FwpVQJQCtCgVRMksy283srwz5TzZolJMLMtFQh%2BrTjXbaE4v5iijlpsOBhojJ98AHfQ67BjhzSX7OuV5FhChf%2FOhGAZV2Y%2FtEIqNPm2%2BcNHGhavmaGSSiR235ZhJfsryKcmxZRV36u%2B%2BUUleawR24sgAtd6eXAeGfEQSXT93jST0mqswqBs%2Fs64rq8WDHrRL%2FB4%2B%2FttJlKqANakpV%2BvOB%2Frhjz3XKfgpYWVXb7bEcX6l46B7V1lyRK7l6mpBrvowlxJdHJiHIsyvqEqOGqlVAQHy1obC7mBSZaJfOJTUS%2B4FJrPDnjSAAMzEhZlSWaSDbv%2Bkx6F7UYAaY7ek0bn4GaJPlzqbtQJuuSfftdlig9L0Bw2kTYOmR4Il5Sdgg1%2FdInhMoj9mfummouDLESlP1T42blOj2ZNLGri2ZcLb3TZdPlmbceqzzkpyILPYS87CgC6HL7jjDefkGZBYtSvC5h1Y0F24KE1FkbRsyVhlmMLqx3MIGOqUBaqU%2FwsX73Pw3ue1KoP5N2fQ9NCSXlsYMHkBwESYBThx6YKZKzrHlTSas2cQJOA8T0oQbLW0xr2N3mqHCUVsDH4Xqjf4HUF4rwUjaIUGZvl5zGfn5%2BFRd3nGxUzroUCLyDY2X1OfR3XM4fqZmRQhSAT%2BuCTAPk30Z7qWjeVQIHHhajEfR%2BFS8JNt%2BFRTgV6B4b0yhHL01FBqoY0R7KipyIss%2BUCWh&X-Amz-Signature=85420652ee979158b276ea65bd5bbbf2f0c5382ce154b45a0d1cbe64fc568088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOBJDNNP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmMdzosCGeXgmy6bNDUyu1o%2FfdKIXsDaEuojVHTy8KkwIgCh2KeL9fZi4bM4eQogMDNxbxdOyueKiK977QI8BlzLcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu8NtIeUwF3xPKhKCrcA63gaP%2FkS57UM%2FXxSXc1TOmdgM9xSVjqjysgxDzlQ3cIYjBk3R%2F609Vobd57g2gAW2RLCh2lzlknRVYNKWVsqQKixLnvbmQJeITq64CL%2FKoSlrXqveOCIUnwfXMryhEh%2BiEHcredHHS0G6%2FogE9FwpVQJQCtCgVRMksy283srwz5TzZolJMLMtFQh%2BrTjXbaE4v5iijlpsOBhojJ98AHfQ67BjhzSX7OuV5FhChf%2FOhGAZV2Y%2FtEIqNPm2%2BcNHGhavmaGSSiR235ZhJfsryKcmxZRV36u%2B%2BUUleawR24sgAtd6eXAeGfEQSXT93jST0mqswqBs%2Fs64rq8WDHrRL%2FB4%2B%2FttJlKqANakpV%2BvOB%2Frhjz3XKfgpYWVXb7bEcX6l46B7V1lyRK7l6mpBrvowlxJdHJiHIsyvqEqOGqlVAQHy1obC7mBSZaJfOJTUS%2B4FJrPDnjSAAMzEhZlSWaSDbv%2Bkx6F7UYAaY7ek0bn4GaJPlzqbtQJuuSfftdlig9L0Bw2kTYOmR4Il5Sdgg1%2FdInhMoj9mfummouDLESlP1T42blOj2ZNLGri2ZcLb3TZdPlmbceqzzkpyILPYS87CgC6HL7jjDefkGZBYtSvC5h1Y0F24KE1FkbRsyVhlmMLqx3MIGOqUBaqU%2FwsX73Pw3ue1KoP5N2fQ9NCSXlsYMHkBwESYBThx6YKZKzrHlTSas2cQJOA8T0oQbLW0xr2N3mqHCUVsDH4Xqjf4HUF4rwUjaIUGZvl5zGfn5%2BFRd3nGxUzroUCLyDY2X1OfR3XM4fqZmRQhSAT%2BuCTAPk30Z7qWjeVQIHHhajEfR%2BFS8JNt%2BFRTgV6B4b0yhHL01FBqoY0R7KipyIss%2BUCWh&X-Amz-Signature=99cfc575f5d8d271e1c0d07b0914977065449043ac5cc3a8140f2ff03ba9d2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
