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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DKTV2H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDB6nixZWkBaBhbOY5aNEosHGy07DhPe8mCY4H9%2BWwr7gIgZXOsZ6aBsw4jiarEPHOsBqvv%2Bm%2Fh4HMwNE7cMBB%2BBqMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECih97jIzHeaD3SDCrcAz8%2BFFurSwG4pahsOplm%2Byg0UVvZj%2FaB10shpDKiXbqZQX%2FKJZRzN0z6yzBcl3ZmUyN5MUOzRbdEebbdEGdODyz5XRSr9kwoNa0ZJJ16i2KH3pm%2ByJvkg%2FQg7ZH5fQXOT9tWuaWh8KaRppKNSiFU6PROuHZCEFwCDq62mBuM2Qm89Rr0Ya4U3hMov2Qa46B8JkCPJF3NIYz%2F%2BZkOyP8BR7L5wAtXIAC52RgKyh5Ei1zhNjgmnyKeJulzfr%2Bjf1jAz73xpObznKndTqVD3RBtNPtjqwmD%2BTQ2ZWRZFidXjsRlCBz49atgxCEKK0QXKn1Z%2Bw%2Bqmv6s%2FEadnCXTTh%2F9%2F5LW8yth0cngiC1bpv%2FZULb2irakPlyt7Lo3YP%2FzEAxevreSM8jFoGFk84Vv7jwAP4cDBxBVkfNs%2F%2Fez2IslEy4ZqOPv6uZcSE4aut6vNwmp4eHJES6ggralKK0zDTua2Knvf9WObSsxYbFYFxH4ntVcAO7IzL%2BOdFk0YKztux1VyyybwV7569BX8wM1jWRkXvrOk7UckpDxqxgMzi6d4%2BPmcYkIyd8TAEyZ4q8dbpITyH%2F9qujkZY%2FfX%2FjDjT3EuxF7gwhMkXjAKPSdC0PrZ46CxEJF2ck4Z%2BB71WZwMPTE28QGOqUBWbpXAmVIXQd4r38lGT0ITRPzUduo84LDDOxrCh9DNblZ12m1CbizqwHw2Z0x%2B8uCyvMBRjMix70JDfrd7vZh0CkIXIPrt8yFGaz%2F6rkMYbNDx96n4PxGMd9kLnBmqZrMH%2B4ECQeZOci%2BkBdD3VtLN9hVho8oraw%2FNlcgYAruMX%2F1%2BW4mLcQl9hOPPSiWO2XRbwXLi4x3BT74wSHHPXr9OOZy0iyw&X-Amz-Signature=994b4093e2237675266680c1319b4a794fb7e2dc9003c35111d4b8bc3f42fd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DKTV2H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDB6nixZWkBaBhbOY5aNEosHGy07DhPe8mCY4H9%2BWwr7gIgZXOsZ6aBsw4jiarEPHOsBqvv%2Bm%2Fh4HMwNE7cMBB%2BBqMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECih97jIzHeaD3SDCrcAz8%2BFFurSwG4pahsOplm%2Byg0UVvZj%2FaB10shpDKiXbqZQX%2FKJZRzN0z6yzBcl3ZmUyN5MUOzRbdEebbdEGdODyz5XRSr9kwoNa0ZJJ16i2KH3pm%2ByJvkg%2FQg7ZH5fQXOT9tWuaWh8KaRppKNSiFU6PROuHZCEFwCDq62mBuM2Qm89Rr0Ya4U3hMov2Qa46B8JkCPJF3NIYz%2F%2BZkOyP8BR7L5wAtXIAC52RgKyh5Ei1zhNjgmnyKeJulzfr%2Bjf1jAz73xpObznKndTqVD3RBtNPtjqwmD%2BTQ2ZWRZFidXjsRlCBz49atgxCEKK0QXKn1Z%2Bw%2Bqmv6s%2FEadnCXTTh%2F9%2F5LW8yth0cngiC1bpv%2FZULb2irakPlyt7Lo3YP%2FzEAxevreSM8jFoGFk84Vv7jwAP4cDBxBVkfNs%2F%2Fez2IslEy4ZqOPv6uZcSE4aut6vNwmp4eHJES6ggralKK0zDTua2Knvf9WObSsxYbFYFxH4ntVcAO7IzL%2BOdFk0YKztux1VyyybwV7569BX8wM1jWRkXvrOk7UckpDxqxgMzi6d4%2BPmcYkIyd8TAEyZ4q8dbpITyH%2F9qujkZY%2FfX%2FjDjT3EuxF7gwhMkXjAKPSdC0PrZ46CxEJF2ck4Z%2BB71WZwMPTE28QGOqUBWbpXAmVIXQd4r38lGT0ITRPzUduo84LDDOxrCh9DNblZ12m1CbizqwHw2Z0x%2B8uCyvMBRjMix70JDfrd7vZh0CkIXIPrt8yFGaz%2F6rkMYbNDx96n4PxGMd9kLnBmqZrMH%2B4ECQeZOci%2BkBdD3VtLN9hVho8oraw%2FNlcgYAruMX%2F1%2BW4mLcQl9hOPPSiWO2XRbwXLi4x3BT74wSHHPXr9OOZy0iyw&X-Amz-Signature=a355f9330f3a91b637f2e758ea52e5d287a468490c2338a01ac727d162730eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DKTV2H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDB6nixZWkBaBhbOY5aNEosHGy07DhPe8mCY4H9%2BWwr7gIgZXOsZ6aBsw4jiarEPHOsBqvv%2Bm%2Fh4HMwNE7cMBB%2BBqMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECih97jIzHeaD3SDCrcAz8%2BFFurSwG4pahsOplm%2Byg0UVvZj%2FaB10shpDKiXbqZQX%2FKJZRzN0z6yzBcl3ZmUyN5MUOzRbdEebbdEGdODyz5XRSr9kwoNa0ZJJ16i2KH3pm%2ByJvkg%2FQg7ZH5fQXOT9tWuaWh8KaRppKNSiFU6PROuHZCEFwCDq62mBuM2Qm89Rr0Ya4U3hMov2Qa46B8JkCPJF3NIYz%2F%2BZkOyP8BR7L5wAtXIAC52RgKyh5Ei1zhNjgmnyKeJulzfr%2Bjf1jAz73xpObznKndTqVD3RBtNPtjqwmD%2BTQ2ZWRZFidXjsRlCBz49atgxCEKK0QXKn1Z%2Bw%2Bqmv6s%2FEadnCXTTh%2F9%2F5LW8yth0cngiC1bpv%2FZULb2irakPlyt7Lo3YP%2FzEAxevreSM8jFoGFk84Vv7jwAP4cDBxBVkfNs%2F%2Fez2IslEy4ZqOPv6uZcSE4aut6vNwmp4eHJES6ggralKK0zDTua2Knvf9WObSsxYbFYFxH4ntVcAO7IzL%2BOdFk0YKztux1VyyybwV7569BX8wM1jWRkXvrOk7UckpDxqxgMzi6d4%2BPmcYkIyd8TAEyZ4q8dbpITyH%2F9qujkZY%2FfX%2FjDjT3EuxF7gwhMkXjAKPSdC0PrZ46CxEJF2ck4Z%2BB71WZwMPTE28QGOqUBWbpXAmVIXQd4r38lGT0ITRPzUduo84LDDOxrCh9DNblZ12m1CbizqwHw2Z0x%2B8uCyvMBRjMix70JDfrd7vZh0CkIXIPrt8yFGaz%2F6rkMYbNDx96n4PxGMd9kLnBmqZrMH%2B4ECQeZOci%2BkBdD3VtLN9hVho8oraw%2FNlcgYAruMX%2F1%2BW4mLcQl9hOPPSiWO2XRbwXLi4x3BT74wSHHPXr9OOZy0iyw&X-Amz-Signature=ce8077d48246a67ea1da871ed66a7f2cc90f7a3fbc24afad47a44a506c95bb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
