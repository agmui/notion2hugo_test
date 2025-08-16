---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAJQYZD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLV1D%2FFJ%2B6Bl26YDGaFV0dbAUNLsTm8BOygQBVOsAtxAiAgLaupC2ng4NpMry7rZt9Z8TywEZs7v8GDw6ctG4iRCir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BzKnF02L9ZU06vT6KtwDNuf36tFQ%2BWvC7MDDQGaC%2B92XEvesoDGfL3VJlOtqRrZ0amACuSh0djMaJ2syv7Ot1Gbv9Y2xHyDqERRe1EpKcJPNVPufDdCQDz4qy4m%2BwHwaBDf9NE38cL5wEFRgZYhxMwVTEcORP6b0dHSGvbckOqYuxW22E4OklpXEiKf29xtcYwS6ZD7W0t30KWmCF2LgKwF0s%2F%2BdK7wGlURQtbZBdzbN8QTTyQM5sNF9xI%2FqBalysqS6lvCvotawRQqMd8jaOtnxU8Uwh9LrktPjtxlgzID6tfjyW%2Bg2jfansYobfKEJJ8tFkzHJIkk2dHBtX%2Bz%2FCjaUj5oh%2ByLZjbClkfwt3px8%2Fg6txclqap%2B%2FPXWynf%2FQxvVeYSZMpnZJrbyKNKnFqZh18prucXtp8GwR8nqrxcojLC4ozjzJvo79%2FitqtaO9GuIRlQLDCpz%2BlecypiPIHA%2F4VleJS8%2FWq5lSKNUoG0m%2Frcl75fjWrdtz69Qabz82W%2B0JM6IV0%2FGqYOcvsV1D0MFipaO1fbi2ZcR9sY%2FgnvU%2B37IMniitXIj5AADPIJePHWjawxwegMVzex51ucRHIeIqL1%2F1ci7abxupoQi2eYu%2FMZ6Adzspp6yKE%2FfruVdCDE9KqWrhHgKJLagw8PeAxQY6pgFDUA8kZIfMSyJ5rgts62e0%2BlgOIO9CccVl2oS8TU4Pqh5p4HTXjBgnsfr6wHVQCHjJerR7IB2d5Fu0w8%2BY73KKPgHyh6jtlY%2F%2FOSuczVF3wAtEls%2BT7AOB3foGW%2FvLwPVJdatYGy6hXVGu4Yju3mwRRKafTqgbEcXmidiWZC4DxDCr0%2FGx%2B9dGf4RLi6Xrbv2zL5%2B6uE5kW0tq96XKedKzl6%2Fyk9Z0&X-Amz-Signature=93fb2562d475e8bd1f51aaa9b6959b6f2de5d9d56752b587f4689d37e23236eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAJQYZD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLV1D%2FFJ%2B6Bl26YDGaFV0dbAUNLsTm8BOygQBVOsAtxAiAgLaupC2ng4NpMry7rZt9Z8TywEZs7v8GDw6ctG4iRCir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BzKnF02L9ZU06vT6KtwDNuf36tFQ%2BWvC7MDDQGaC%2B92XEvesoDGfL3VJlOtqRrZ0amACuSh0djMaJ2syv7Ot1Gbv9Y2xHyDqERRe1EpKcJPNVPufDdCQDz4qy4m%2BwHwaBDf9NE38cL5wEFRgZYhxMwVTEcORP6b0dHSGvbckOqYuxW22E4OklpXEiKf29xtcYwS6ZD7W0t30KWmCF2LgKwF0s%2F%2BdK7wGlURQtbZBdzbN8QTTyQM5sNF9xI%2FqBalysqS6lvCvotawRQqMd8jaOtnxU8Uwh9LrktPjtxlgzID6tfjyW%2Bg2jfansYobfKEJJ8tFkzHJIkk2dHBtX%2Bz%2FCjaUj5oh%2ByLZjbClkfwt3px8%2Fg6txclqap%2B%2FPXWynf%2FQxvVeYSZMpnZJrbyKNKnFqZh18prucXtp8GwR8nqrxcojLC4ozjzJvo79%2FitqtaO9GuIRlQLDCpz%2BlecypiPIHA%2F4VleJS8%2FWq5lSKNUoG0m%2Frcl75fjWrdtz69Qabz82W%2B0JM6IV0%2FGqYOcvsV1D0MFipaO1fbi2ZcR9sY%2FgnvU%2B37IMniitXIj5AADPIJePHWjawxwegMVzex51ucRHIeIqL1%2F1ci7abxupoQi2eYu%2FMZ6Adzspp6yKE%2FfruVdCDE9KqWrhHgKJLagw8PeAxQY6pgFDUA8kZIfMSyJ5rgts62e0%2BlgOIO9CccVl2oS8TU4Pqh5p4HTXjBgnsfr6wHVQCHjJerR7IB2d5Fu0w8%2BY73KKPgHyh6jtlY%2F%2FOSuczVF3wAtEls%2BT7AOB3foGW%2FvLwPVJdatYGy6hXVGu4Yju3mwRRKafTqgbEcXmidiWZC4DxDCr0%2FGx%2B9dGf4RLi6Xrbv2zL5%2B6uE5kW0tq96XKedKzl6%2Fyk9Z0&X-Amz-Signature=c9d8b915a2851c25c1b57bb682776963ae01cc50eff86039653c04c5757c7232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAJQYZD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLV1D%2FFJ%2B6Bl26YDGaFV0dbAUNLsTm8BOygQBVOsAtxAiAgLaupC2ng4NpMry7rZt9Z8TywEZs7v8GDw6ctG4iRCir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BzKnF02L9ZU06vT6KtwDNuf36tFQ%2BWvC7MDDQGaC%2B92XEvesoDGfL3VJlOtqRrZ0amACuSh0djMaJ2syv7Ot1Gbv9Y2xHyDqERRe1EpKcJPNVPufDdCQDz4qy4m%2BwHwaBDf9NE38cL5wEFRgZYhxMwVTEcORP6b0dHSGvbckOqYuxW22E4OklpXEiKf29xtcYwS6ZD7W0t30KWmCF2LgKwF0s%2F%2BdK7wGlURQtbZBdzbN8QTTyQM5sNF9xI%2FqBalysqS6lvCvotawRQqMd8jaOtnxU8Uwh9LrktPjtxlgzID6tfjyW%2Bg2jfansYobfKEJJ8tFkzHJIkk2dHBtX%2Bz%2FCjaUj5oh%2ByLZjbClkfwt3px8%2Fg6txclqap%2B%2FPXWynf%2FQxvVeYSZMpnZJrbyKNKnFqZh18prucXtp8GwR8nqrxcojLC4ozjzJvo79%2FitqtaO9GuIRlQLDCpz%2BlecypiPIHA%2F4VleJS8%2FWq5lSKNUoG0m%2Frcl75fjWrdtz69Qabz82W%2B0JM6IV0%2FGqYOcvsV1D0MFipaO1fbi2ZcR9sY%2FgnvU%2B37IMniitXIj5AADPIJePHWjawxwegMVzex51ucRHIeIqL1%2F1ci7abxupoQi2eYu%2FMZ6Adzspp6yKE%2FfruVdCDE9KqWrhHgKJLagw8PeAxQY6pgFDUA8kZIfMSyJ5rgts62e0%2BlgOIO9CccVl2oS8TU4Pqh5p4HTXjBgnsfr6wHVQCHjJerR7IB2d5Fu0w8%2BY73KKPgHyh6jtlY%2F%2FOSuczVF3wAtEls%2BT7AOB3foGW%2FvLwPVJdatYGy6hXVGu4Yju3mwRRKafTqgbEcXmidiWZC4DxDCr0%2FGx%2B9dGf4RLi6Xrbv2zL5%2B6uE5kW0tq96XKedKzl6%2Fyk9Z0&X-Amz-Signature=c531d91cf15a6ba0720778d939eceb5fe9f8bbd576d04cc848a1a1d19ba850da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
