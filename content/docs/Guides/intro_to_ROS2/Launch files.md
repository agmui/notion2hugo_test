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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUBAAKIB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHYWOdOVkkwt783kCSt%2FsqUSV2jGHRRThBZqJ%2FJt49LZAiEA8%2BKguenMsTDh2A77vKc%2BGmpcXnDdowLlhkqt8njiXUwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGi6h1Na%2FsjHC0FHFircA1tnXj%2BsY6E7gTBAP8FIaui6sVsUFD3xBESEpjPwIDh8xDOsQQZDH%2BtV9nBMu3fl6aONq46sspLs%2BtaIwNrF6XGZtfqvQUwsL97gWU0PAt5niBWsoB4pndytaqRWryjCv%2Bq1nA2MfFQeRxEQ76RKasspGIiXodIuol21gBwSr6HN0faF3tl1PXgC4rh0ZouKN7B5gjATv7LDcgskElUFTh9jKE20N20HR7WqHnWs2xI%2Byd0C9PKtI%2BU5Sla144yLvA3DxC7EWcX65nGl6wjzQ3zIWTL%2B%2FSLsreXZOQGfQBfaWiQreRfXBg04IFrwUO3J9c9MWMxyp%2BwE0tLD2%2F5MeG4t3wjH%2FAUpb5GyKymJbOZePQoyxZ2jmMfqw3EaW3q6z3%2Bg3VY5DwXfDb89te%2BNkjr9hkVzcZGKyKx%2BqNgqG9E8aeusMYbafI7HaFSTrPB05tz%2BBlIqlCDauEjEusKXqmc5%2B5bL0z0G7rNkXgjMFy%2BDEl5H7zTg92887G9ba9LthYncBVBy4mw9Zkeu5UB%2B93RVflIZtv8%2FDm9g1kWM4Hy%2FZ0rLnPve%2Fwc3Z509e%2FwdBD4maR%2BkK3vP2InfE1R9IcW9LtEdxSer4pYKENxLcRYbmcww2jgns8HjqlHCMOrV5b4GOqUB2OB9qG0rQSKgJMyPicCoPgAHz08pnjILrDsrlHunK%2BNY%2Bha0MVA7BBpL0AXMLETTzS0X%2FHypCducDescUj00OIHskgw3d4KLWbCLHwsXsgmx2yz38wyPcoA%2FfB5EhHr1%2BKQpoh4ayM8QwPlNQiDadWjYHujfH6fdBKFQ19GdIPOPKKFGWJi21LT3e1hUwIEiHGjW2aV%2FSSZgPJbya8jAe5rCyi9N&X-Amz-Signature=5f9944efed8f4211c757a3773780fb684648e4cc9977fdeb363e68393bb27533&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUBAAKIB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHYWOdOVkkwt783kCSt%2FsqUSV2jGHRRThBZqJ%2FJt49LZAiEA8%2BKguenMsTDh2A77vKc%2BGmpcXnDdowLlhkqt8njiXUwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGi6h1Na%2FsjHC0FHFircA1tnXj%2BsY6E7gTBAP8FIaui6sVsUFD3xBESEpjPwIDh8xDOsQQZDH%2BtV9nBMu3fl6aONq46sspLs%2BtaIwNrF6XGZtfqvQUwsL97gWU0PAt5niBWsoB4pndytaqRWryjCv%2Bq1nA2MfFQeRxEQ76RKasspGIiXodIuol21gBwSr6HN0faF3tl1PXgC4rh0ZouKN7B5gjATv7LDcgskElUFTh9jKE20N20HR7WqHnWs2xI%2Byd0C9PKtI%2BU5Sla144yLvA3DxC7EWcX65nGl6wjzQ3zIWTL%2B%2FSLsreXZOQGfQBfaWiQreRfXBg04IFrwUO3J9c9MWMxyp%2BwE0tLD2%2F5MeG4t3wjH%2FAUpb5GyKymJbOZePQoyxZ2jmMfqw3EaW3q6z3%2Bg3VY5DwXfDb89te%2BNkjr9hkVzcZGKyKx%2BqNgqG9E8aeusMYbafI7HaFSTrPB05tz%2BBlIqlCDauEjEusKXqmc5%2B5bL0z0G7rNkXgjMFy%2BDEl5H7zTg92887G9ba9LthYncBVBy4mw9Zkeu5UB%2B93RVflIZtv8%2FDm9g1kWM4Hy%2FZ0rLnPve%2Fwc3Z509e%2FwdBD4maR%2BkK3vP2InfE1R9IcW9LtEdxSer4pYKENxLcRYbmcww2jgns8HjqlHCMOrV5b4GOqUB2OB9qG0rQSKgJMyPicCoPgAHz08pnjILrDsrlHunK%2BNY%2Bha0MVA7BBpL0AXMLETTzS0X%2FHypCducDescUj00OIHskgw3d4KLWbCLHwsXsgmx2yz38wyPcoA%2FfB5EhHr1%2BKQpoh4ayM8QwPlNQiDadWjYHujfH6fdBKFQ19GdIPOPKKFGWJi21LT3e1hUwIEiHGjW2aV%2FSSZgPJbya8jAe5rCyi9N&X-Amz-Signature=b52ba5201f7ef6222d1939815a3e5e478f2264bfad3fc6c739f1aa222cf5c6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUBAAKIB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHYWOdOVkkwt783kCSt%2FsqUSV2jGHRRThBZqJ%2FJt49LZAiEA8%2BKguenMsTDh2A77vKc%2BGmpcXnDdowLlhkqt8njiXUwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGi6h1Na%2FsjHC0FHFircA1tnXj%2BsY6E7gTBAP8FIaui6sVsUFD3xBESEpjPwIDh8xDOsQQZDH%2BtV9nBMu3fl6aONq46sspLs%2BtaIwNrF6XGZtfqvQUwsL97gWU0PAt5niBWsoB4pndytaqRWryjCv%2Bq1nA2MfFQeRxEQ76RKasspGIiXodIuol21gBwSr6HN0faF3tl1PXgC4rh0ZouKN7B5gjATv7LDcgskElUFTh9jKE20N20HR7WqHnWs2xI%2Byd0C9PKtI%2BU5Sla144yLvA3DxC7EWcX65nGl6wjzQ3zIWTL%2B%2FSLsreXZOQGfQBfaWiQreRfXBg04IFrwUO3J9c9MWMxyp%2BwE0tLD2%2F5MeG4t3wjH%2FAUpb5GyKymJbOZePQoyxZ2jmMfqw3EaW3q6z3%2Bg3VY5DwXfDb89te%2BNkjr9hkVzcZGKyKx%2BqNgqG9E8aeusMYbafI7HaFSTrPB05tz%2BBlIqlCDauEjEusKXqmc5%2B5bL0z0G7rNkXgjMFy%2BDEl5H7zTg92887G9ba9LthYncBVBy4mw9Zkeu5UB%2B93RVflIZtv8%2FDm9g1kWM4Hy%2FZ0rLnPve%2Fwc3Z509e%2FwdBD4maR%2BkK3vP2InfE1R9IcW9LtEdxSer4pYKENxLcRYbmcww2jgns8HjqlHCMOrV5b4GOqUB2OB9qG0rQSKgJMyPicCoPgAHz08pnjILrDsrlHunK%2BNY%2Bha0MVA7BBpL0AXMLETTzS0X%2FHypCducDescUj00OIHskgw3d4KLWbCLHwsXsgmx2yz38wyPcoA%2FfB5EhHr1%2BKQpoh4ayM8QwPlNQiDadWjYHujfH6fdBKFQ19GdIPOPKKFGWJi21LT3e1hUwIEiHGjW2aV%2FSSZgPJbya8jAe5rCyi9N&X-Amz-Signature=8038085d52845b9d669a7081a1a740da66d753153d894eeb7557f710348401a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
