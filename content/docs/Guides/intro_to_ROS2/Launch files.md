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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K52MCRP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD2B38Glwiztsr2XWzmtXR3lFc2mAoObdxm0Yr8XsJ5AiEAgBrUtzR%2B1UfEo4lFQ5GsZyUlxw7WC1WPMqw3DVJ%2FDVkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJHxpLQOdfifgWFQHyrcA4TRuuGzGHB44yx0Aq1h4sbn1x%2F4blG4d3Q3WFbHt2R%2BYZZgoifsrP1NIz8rRrXec%2FcLjNT0Q4Vgyj6FFSqsChQsPtGWB%2BDK5Luredf9MvYP63AbbpXhvvXcabD6ee1rVRkdSLV5ttzE7jz0FECKcKC81WS337qxF1czBulP1cA1x%2FdBkM16fcohfEWHvkNwZaznlTPruzDw8dDtGqxaSOMSjUMjxHXb%2FCXeqLMFzGs6jwKCmtnEeebyp1hPfW%2BcSewMgVo2JulwP4HQ6sUp7PriE3VnLo4%2F36YZuENAd5%2FLrACttBi8FQIGymqMY%2FHh%2BtPQU%2FMq%2FbpcgppepUs0rQpHYdcDHlOUnKG5icAIWnn070tbOeBUrCauMH%2F45t8AgNwxPGKWJB3IVZbmLtmoevIWX8cOLTqRd%2FGoky7UK5gCsogjRq3HQaW%2Fntj8%2BJC3mLDKCorLmYesfq9nQlRhRuM%2FoqcH3%2BD9a6fXxS9a4w32Ze%2FcZgiqgTMGZ%2Bv8Qaii9xLKUv9BdSmRWxdG2OYsB0dHCtmDWScEgoP%2F0hN0jR%2F48t07Z21Zry7CSCaNV%2BxB9U6x4gz9T4JDGB1cLbuPmJh1MkI%2BuEpRG5gpvpt2oscl8SmqJoRE7jFvsX5vMKH1vsAGOqUBTd4bLvU2SJULhQNVM9Z8A1NsQh6ONeN2eUneFli0vIihYV4vK5iK%2BR0zVOR3H4lBkSGkUO4Lu0jbc%2F1H%2FvwhA8ZHtzMaOxffVsn4Poo4CKV1K%2BaqGYPUwGQf2muFifYLz1ALOiG6%2Fv43iZu2%2Bem28ftRhx8e2QW1iNxyh8tWi1bmoE%2BAYgFa8trApGwzHL0QHQcbPqjJfqCv5DhKFB8h0k%2BHCsBp&X-Amz-Signature=4e9dc84bf7a8ed73290c05077c89f28993b4a3784ba89fa46a3e8dec1813c31f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K52MCRP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD2B38Glwiztsr2XWzmtXR3lFc2mAoObdxm0Yr8XsJ5AiEAgBrUtzR%2B1UfEo4lFQ5GsZyUlxw7WC1WPMqw3DVJ%2FDVkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJHxpLQOdfifgWFQHyrcA4TRuuGzGHB44yx0Aq1h4sbn1x%2F4blG4d3Q3WFbHt2R%2BYZZgoifsrP1NIz8rRrXec%2FcLjNT0Q4Vgyj6FFSqsChQsPtGWB%2BDK5Luredf9MvYP63AbbpXhvvXcabD6ee1rVRkdSLV5ttzE7jz0FECKcKC81WS337qxF1czBulP1cA1x%2FdBkM16fcohfEWHvkNwZaznlTPruzDw8dDtGqxaSOMSjUMjxHXb%2FCXeqLMFzGs6jwKCmtnEeebyp1hPfW%2BcSewMgVo2JulwP4HQ6sUp7PriE3VnLo4%2F36YZuENAd5%2FLrACttBi8FQIGymqMY%2FHh%2BtPQU%2FMq%2FbpcgppepUs0rQpHYdcDHlOUnKG5icAIWnn070tbOeBUrCauMH%2F45t8AgNwxPGKWJB3IVZbmLtmoevIWX8cOLTqRd%2FGoky7UK5gCsogjRq3HQaW%2Fntj8%2BJC3mLDKCorLmYesfq9nQlRhRuM%2FoqcH3%2BD9a6fXxS9a4w32Ze%2FcZgiqgTMGZ%2Bv8Qaii9xLKUv9BdSmRWxdG2OYsB0dHCtmDWScEgoP%2F0hN0jR%2F48t07Z21Zry7CSCaNV%2BxB9U6x4gz9T4JDGB1cLbuPmJh1MkI%2BuEpRG5gpvpt2oscl8SmqJoRE7jFvsX5vMKH1vsAGOqUBTd4bLvU2SJULhQNVM9Z8A1NsQh6ONeN2eUneFli0vIihYV4vK5iK%2BR0zVOR3H4lBkSGkUO4Lu0jbc%2F1H%2FvwhA8ZHtzMaOxffVsn4Poo4CKV1K%2BaqGYPUwGQf2muFifYLz1ALOiG6%2Fv43iZu2%2Bem28ftRhx8e2QW1iNxyh8tWi1bmoE%2BAYgFa8trApGwzHL0QHQcbPqjJfqCv5DhKFB8h0k%2BHCsBp&X-Amz-Signature=b0a8ca8f1e5b57fd6e66535770d9c3dfcdecabfb1b2e1be21db9ea1deba20f39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K52MCRP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD2B38Glwiztsr2XWzmtXR3lFc2mAoObdxm0Yr8XsJ5AiEAgBrUtzR%2B1UfEo4lFQ5GsZyUlxw7WC1WPMqw3DVJ%2FDVkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJHxpLQOdfifgWFQHyrcA4TRuuGzGHB44yx0Aq1h4sbn1x%2F4blG4d3Q3WFbHt2R%2BYZZgoifsrP1NIz8rRrXec%2FcLjNT0Q4Vgyj6FFSqsChQsPtGWB%2BDK5Luredf9MvYP63AbbpXhvvXcabD6ee1rVRkdSLV5ttzE7jz0FECKcKC81WS337qxF1czBulP1cA1x%2FdBkM16fcohfEWHvkNwZaznlTPruzDw8dDtGqxaSOMSjUMjxHXb%2FCXeqLMFzGs6jwKCmtnEeebyp1hPfW%2BcSewMgVo2JulwP4HQ6sUp7PriE3VnLo4%2F36YZuENAd5%2FLrACttBi8FQIGymqMY%2FHh%2BtPQU%2FMq%2FbpcgppepUs0rQpHYdcDHlOUnKG5icAIWnn070tbOeBUrCauMH%2F45t8AgNwxPGKWJB3IVZbmLtmoevIWX8cOLTqRd%2FGoky7UK5gCsogjRq3HQaW%2Fntj8%2BJC3mLDKCorLmYesfq9nQlRhRuM%2FoqcH3%2BD9a6fXxS9a4w32Ze%2FcZgiqgTMGZ%2Bv8Qaii9xLKUv9BdSmRWxdG2OYsB0dHCtmDWScEgoP%2F0hN0jR%2F48t07Z21Zry7CSCaNV%2BxB9U6x4gz9T4JDGB1cLbuPmJh1MkI%2BuEpRG5gpvpt2oscl8SmqJoRE7jFvsX5vMKH1vsAGOqUBTd4bLvU2SJULhQNVM9Z8A1NsQh6ONeN2eUneFli0vIihYV4vK5iK%2BR0zVOR3H4lBkSGkUO4Lu0jbc%2F1H%2FvwhA8ZHtzMaOxffVsn4Poo4CKV1K%2BaqGYPUwGQf2muFifYLz1ALOiG6%2Fv43iZu2%2Bem28ftRhx8e2QW1iNxyh8tWi1bmoE%2BAYgFa8trApGwzHL0QHQcbPqjJfqCv5DhKFB8h0k%2BHCsBp&X-Amz-Signature=fb83e2aeaa60816829bfc3b4f945f186b76d419e360af196f151c972e0799fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
