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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXAWVBF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCDJpwKsgVYsGhNBUS0d9G9y9Ds6iatyxmTjKbZCJ6WtgIgHZ%2FI5PTz5ZN3GFdDKvo6VWiEhJa08A209ieAoiNUoH4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw56W2ER9PbVvyt7CrcA5fxsPlIt6SyRN0UzLZRltZ2iKl9LnYgnPCkxVBkI%2BgNeWoPq7sb4uZLL3QJ%2FG4a4ErQ%2BP7L6XmdglsHBPsWcxrB%2Fq3KsYb7BL0NJHveq1Afxf5y9%2FgeyJkxJ5XpH9twPLBX9GqudwD%2Fk1iJqFDoTJ1XrW%2F0LHk02IGhzVSwLIcB2n%2FiQORX%2BUwBf5f7%2FCTRWBPDsFM7dO2GkFOALU9VfDOrBBJpnTCLtqJmYjKHfxC4jGbUT8CGewcVCS5Rq7nySSYNDNe6l1YrV1PMRqYLTGLRpZN78F2ynwK06PxqfCkCCYpFD6Fyhr0i3J82Tq5pUN1cisD39Iq2EpLSZwec4brrjHJ3H%2FrAvj23B8ZIyeObBhHNFyT3RaegmDR3zLyRFdfK9ev3ApPjdQM47oFpMWo7JgKVF%2FUpH2LQnNO9hlbaAYGq42u3S95fwfoEVw%2BZdE4%2Bwk4yPdsDLB7dUAsG62S%2BaRj891cmqFpD9BVx1nZuxc%2BwD%2BcO%2BDQf5PlJjUtoW3q4D19EvW8d6O1FSF1B7OoHY%2Bp8SDmfTDYrt4oK1foRThsYxpNZ7OTWQe1nNbLGRcdLZ4ePSjLzDmPwzJBvEHgQGJVELgtkuKsKF7ufgmqiFx%2B7fp5XdZLwEdEJMKKmq8IGOqUBVNDWler6U3ri78fGbe1KfU9JI4EGPgietxcka6gb2silNnCdOXl9W3MOrlK%2FpVjhCu5Kdg3BGTR%2FVtGs1MWl7FFSZu5RIW%2BYSa%2Bh5vWWX%2BRumuM%2Fe%2B5O2n390RHquVDu%2BL0Oeq%2BqpWr3lCWYSkE9Gb18gRkYFr3hC%2FpgN0UetBXKxxn9hBTc28sS4eqNYyZW6OjAFr9yK%2BqEUCaxLHcP0p0KyB%2Bq&X-Amz-Signature=a687550c7f5890361baee1bedf1e49eabe6fec6ea4432a2c328f805ed5a5586b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXAWVBF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCDJpwKsgVYsGhNBUS0d9G9y9Ds6iatyxmTjKbZCJ6WtgIgHZ%2FI5PTz5ZN3GFdDKvo6VWiEhJa08A209ieAoiNUoH4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw56W2ER9PbVvyt7CrcA5fxsPlIt6SyRN0UzLZRltZ2iKl9LnYgnPCkxVBkI%2BgNeWoPq7sb4uZLL3QJ%2FG4a4ErQ%2BP7L6XmdglsHBPsWcxrB%2Fq3KsYb7BL0NJHveq1Afxf5y9%2FgeyJkxJ5XpH9twPLBX9GqudwD%2Fk1iJqFDoTJ1XrW%2F0LHk02IGhzVSwLIcB2n%2FiQORX%2BUwBf5f7%2FCTRWBPDsFM7dO2GkFOALU9VfDOrBBJpnTCLtqJmYjKHfxC4jGbUT8CGewcVCS5Rq7nySSYNDNe6l1YrV1PMRqYLTGLRpZN78F2ynwK06PxqfCkCCYpFD6Fyhr0i3J82Tq5pUN1cisD39Iq2EpLSZwec4brrjHJ3H%2FrAvj23B8ZIyeObBhHNFyT3RaegmDR3zLyRFdfK9ev3ApPjdQM47oFpMWo7JgKVF%2FUpH2LQnNO9hlbaAYGq42u3S95fwfoEVw%2BZdE4%2Bwk4yPdsDLB7dUAsG62S%2BaRj891cmqFpD9BVx1nZuxc%2BwD%2BcO%2BDQf5PlJjUtoW3q4D19EvW8d6O1FSF1B7OoHY%2Bp8SDmfTDYrt4oK1foRThsYxpNZ7OTWQe1nNbLGRcdLZ4ePSjLzDmPwzJBvEHgQGJVELgtkuKsKF7ufgmqiFx%2B7fp5XdZLwEdEJMKKmq8IGOqUBVNDWler6U3ri78fGbe1KfU9JI4EGPgietxcka6gb2silNnCdOXl9W3MOrlK%2FpVjhCu5Kdg3BGTR%2FVtGs1MWl7FFSZu5RIW%2BYSa%2Bh5vWWX%2BRumuM%2Fe%2B5O2n390RHquVDu%2BL0Oeq%2BqpWr3lCWYSkE9Gb18gRkYFr3hC%2FpgN0UetBXKxxn9hBTc28sS4eqNYyZW6OjAFr9yK%2BqEUCaxLHcP0p0KyB%2Bq&X-Amz-Signature=1161c2708545f5df960624a5af2aa6fa6b5c5074b718f9f66895b8c575ab114a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXAWVBF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCDJpwKsgVYsGhNBUS0d9G9y9Ds6iatyxmTjKbZCJ6WtgIgHZ%2FI5PTz5ZN3GFdDKvo6VWiEhJa08A209ieAoiNUoH4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw56W2ER9PbVvyt7CrcA5fxsPlIt6SyRN0UzLZRltZ2iKl9LnYgnPCkxVBkI%2BgNeWoPq7sb4uZLL3QJ%2FG4a4ErQ%2BP7L6XmdglsHBPsWcxrB%2Fq3KsYb7BL0NJHveq1Afxf5y9%2FgeyJkxJ5XpH9twPLBX9GqudwD%2Fk1iJqFDoTJ1XrW%2F0LHk02IGhzVSwLIcB2n%2FiQORX%2BUwBf5f7%2FCTRWBPDsFM7dO2GkFOALU9VfDOrBBJpnTCLtqJmYjKHfxC4jGbUT8CGewcVCS5Rq7nySSYNDNe6l1YrV1PMRqYLTGLRpZN78F2ynwK06PxqfCkCCYpFD6Fyhr0i3J82Tq5pUN1cisD39Iq2EpLSZwec4brrjHJ3H%2FrAvj23B8ZIyeObBhHNFyT3RaegmDR3zLyRFdfK9ev3ApPjdQM47oFpMWo7JgKVF%2FUpH2LQnNO9hlbaAYGq42u3S95fwfoEVw%2BZdE4%2Bwk4yPdsDLB7dUAsG62S%2BaRj891cmqFpD9BVx1nZuxc%2BwD%2BcO%2BDQf5PlJjUtoW3q4D19EvW8d6O1FSF1B7OoHY%2Bp8SDmfTDYrt4oK1foRThsYxpNZ7OTWQe1nNbLGRcdLZ4ePSjLzDmPwzJBvEHgQGJVELgtkuKsKF7ufgmqiFx%2B7fp5XdZLwEdEJMKKmq8IGOqUBVNDWler6U3ri78fGbe1KfU9JI4EGPgietxcka6gb2silNnCdOXl9W3MOrlK%2FpVjhCu5Kdg3BGTR%2FVtGs1MWl7FFSZu5RIW%2BYSa%2Bh5vWWX%2BRumuM%2Fe%2B5O2n390RHquVDu%2BL0Oeq%2BqpWr3lCWYSkE9Gb18gRkYFr3hC%2FpgN0UetBXKxxn9hBTc28sS4eqNYyZW6OjAFr9yK%2BqEUCaxLHcP0p0KyB%2Bq&X-Amz-Signature=0aab09f1b3e2965e3e4994a62a9ce1bfbe003066e89a1562ed309009d3ac9226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
