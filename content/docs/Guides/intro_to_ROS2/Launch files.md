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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIH2N67Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDAf4hGCU2tB0cL%2BzodBsjKG75Tg96MaylK1%2F7N%2FHRwfwIgDwT1eh2D97Tq9KYxPbN4jlgFQAp1CoQ7gPdzA70J5%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfS%2FCZM%2Ffo406dPIircAwBLbJ%2FD6MnM7hj0L%2BHU5mZjAFr8KWiqNKL3%2FIci3Is7zEO4FpQp9UW%2Bjko3fa%2B7CUahhJKi5GE8Ykwy7ugm1x82Xoaq%2BEyrFxk6pc3R1uNBMWoWBzIuhrqtpl%2Bfwc0xEhB456uiQaxcN08oPY%2FM%2BoJv0IRnGDgo6W6B8Y7mjvvs2NeVBRdmNC96AWtnTZxjHKM8LxadQMDiaXe3NPBUAwgCDWoySJlHKk9TtlmBS%2FGN9B1zPXPN%2BmEJ%2FHWnajzEPuJOsBrEv9JWha931zGrRVF5nt2XVA1UoMZqrbgDZ%2FopjJgPVS2WB2dyUR9tIsxQIRjYq404YvAkOUwIYqqNocjDLZzhLPMyzJVPH9%2FwOWqeA8Qu06z888YKYNBhx43OTRA5VT5lRzM%2BaHSsLxj8Z%2B%2BDVZZ6I3TKLjt8IxQKKsKZm5QQkKtB%2BT227fjRBga93xkGVn9VZqJoMrfrhf6JrGFT0UwRijE7G5n0uJJ%2FvaPkqxJCWPeR7u6YqyYsWmmGX06zbzA1yRg9zvJ5LIgHqonqdLjlxN2YbtI%2Fzl9MHa3YvXujZA9UoD4vTERf5x%2BED6bkdKHJfZto4W98kDvu6IGuU7X0AnM%2B8HxX%2Fl%2FaC31QqbFVEz3V78mol6H5MJP4gMUGOqUBsC6RufNqTMcSwgeQ6MwvzAg7TqvQJedJmYBZVZBhxwxulGaCfGUh82%2FsNtV3AWHgW4nELJZ1x0voEnrDYoAcDPg3Ore43Wj9R218Ri6qMnJr1ZIACVH1sp13J8jRafZywMJqKajCQLBYfiGjeHm9ggnt30ziyMtDtpKUm5tajRz64QYAcYebFmFOcVcKeTIdty8nwv5t6Mkyv3STcpPa9zbcRgpo&X-Amz-Signature=5a88f97ee56b6e0f1fd18bc5f92926da4b0a6066f2680b7985ef537d10405294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIH2N67Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDAf4hGCU2tB0cL%2BzodBsjKG75Tg96MaylK1%2F7N%2FHRwfwIgDwT1eh2D97Tq9KYxPbN4jlgFQAp1CoQ7gPdzA70J5%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfS%2FCZM%2Ffo406dPIircAwBLbJ%2FD6MnM7hj0L%2BHU5mZjAFr8KWiqNKL3%2FIci3Is7zEO4FpQp9UW%2Bjko3fa%2B7CUahhJKi5GE8Ykwy7ugm1x82Xoaq%2BEyrFxk6pc3R1uNBMWoWBzIuhrqtpl%2Bfwc0xEhB456uiQaxcN08oPY%2FM%2BoJv0IRnGDgo6W6B8Y7mjvvs2NeVBRdmNC96AWtnTZxjHKM8LxadQMDiaXe3NPBUAwgCDWoySJlHKk9TtlmBS%2FGN9B1zPXPN%2BmEJ%2FHWnajzEPuJOsBrEv9JWha931zGrRVF5nt2XVA1UoMZqrbgDZ%2FopjJgPVS2WB2dyUR9tIsxQIRjYq404YvAkOUwIYqqNocjDLZzhLPMyzJVPH9%2FwOWqeA8Qu06z888YKYNBhx43OTRA5VT5lRzM%2BaHSsLxj8Z%2B%2BDVZZ6I3TKLjt8IxQKKsKZm5QQkKtB%2BT227fjRBga93xkGVn9VZqJoMrfrhf6JrGFT0UwRijE7G5n0uJJ%2FvaPkqxJCWPeR7u6YqyYsWmmGX06zbzA1yRg9zvJ5LIgHqonqdLjlxN2YbtI%2Fzl9MHa3YvXujZA9UoD4vTERf5x%2BED6bkdKHJfZto4W98kDvu6IGuU7X0AnM%2B8HxX%2Fl%2FaC31QqbFVEz3V78mol6H5MJP4gMUGOqUBsC6RufNqTMcSwgeQ6MwvzAg7TqvQJedJmYBZVZBhxwxulGaCfGUh82%2FsNtV3AWHgW4nELJZ1x0voEnrDYoAcDPg3Ore43Wj9R218Ri6qMnJr1ZIACVH1sp13J8jRafZywMJqKajCQLBYfiGjeHm9ggnt30ziyMtDtpKUm5tajRz64QYAcYebFmFOcVcKeTIdty8nwv5t6Mkyv3STcpPa9zbcRgpo&X-Amz-Signature=ea7c7a14f30598a11b317bd912c124bfe68cec0c5e7b51ab28393616d86b15d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIH2N67Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDAf4hGCU2tB0cL%2BzodBsjKG75Tg96MaylK1%2F7N%2FHRwfwIgDwT1eh2D97Tq9KYxPbN4jlgFQAp1CoQ7gPdzA70J5%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfS%2FCZM%2Ffo406dPIircAwBLbJ%2FD6MnM7hj0L%2BHU5mZjAFr8KWiqNKL3%2FIci3Is7zEO4FpQp9UW%2Bjko3fa%2B7CUahhJKi5GE8Ykwy7ugm1x82Xoaq%2BEyrFxk6pc3R1uNBMWoWBzIuhrqtpl%2Bfwc0xEhB456uiQaxcN08oPY%2FM%2BoJv0IRnGDgo6W6B8Y7mjvvs2NeVBRdmNC96AWtnTZxjHKM8LxadQMDiaXe3NPBUAwgCDWoySJlHKk9TtlmBS%2FGN9B1zPXPN%2BmEJ%2FHWnajzEPuJOsBrEv9JWha931zGrRVF5nt2XVA1UoMZqrbgDZ%2FopjJgPVS2WB2dyUR9tIsxQIRjYq404YvAkOUwIYqqNocjDLZzhLPMyzJVPH9%2FwOWqeA8Qu06z888YKYNBhx43OTRA5VT5lRzM%2BaHSsLxj8Z%2B%2BDVZZ6I3TKLjt8IxQKKsKZm5QQkKtB%2BT227fjRBga93xkGVn9VZqJoMrfrhf6JrGFT0UwRijE7G5n0uJJ%2FvaPkqxJCWPeR7u6YqyYsWmmGX06zbzA1yRg9zvJ5LIgHqonqdLjlxN2YbtI%2Fzl9MHa3YvXujZA9UoD4vTERf5x%2BED6bkdKHJfZto4W98kDvu6IGuU7X0AnM%2B8HxX%2Fl%2FaC31QqbFVEz3V78mol6H5MJP4gMUGOqUBsC6RufNqTMcSwgeQ6MwvzAg7TqvQJedJmYBZVZBhxwxulGaCfGUh82%2FsNtV3AWHgW4nELJZ1x0voEnrDYoAcDPg3Ore43Wj9R218Ri6qMnJr1ZIACVH1sp13J8jRafZywMJqKajCQLBYfiGjeHm9ggnt30ziyMtDtpKUm5tajRz64QYAcYebFmFOcVcKeTIdty8nwv5t6Mkyv3STcpPa9zbcRgpo&X-Amz-Signature=ba529f9c64938b72850677d5cfd01b00c274f172f86f4d9b2afc603217e6e571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
