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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIG2AWM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCU2FEtK5h4OaOrbbyRod1CU56%2B5XNrIiclELfgzb5JHAIgfHCPNSzf%2BzvaXOIUp29rH0ymMEqxzcf8MOG%2BWnZKhroqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ra810IJpRhbR9%2ByrcAz967nzpmgTTJOKBXm45GqyGxiSF3saKmloBxNSM0bvnnU6A%2FZKWQDd4rz6gV6r0yxuE28JGD3Lr5D%2BzIJBFQOF8QaOUBvt0qfrNV7%2BwWR6oYu%2F79%2BMuBs%2BNzX7PTA%2FqkdMNmOXx7eYtPtwx00J9STa4IQynP7gIAheGF8SGnDsKMciKTJ2WCfFhpsREKs8s8YavDQoI5C6xSLfCsKC6twDSxJqQ7GW4TjCRbBrjZw6w4amqtLXu9qwKkV3Dq9AX3iHbgL3cO8Da0Tf0xh47cN7gEH%2BUv%2FYXY2Av1VGonklzyL%2BRifMPjK43A03RoE%2BY9VpizcsOueK0k%2FCb6wLbqiXWR%2FensdK8s4VkmpbqGtypNAF%2BUibY1GAHMx7THqXPLmP5yAVo9plNlDwo4QspeviwdV0voCg0K55dP5wImaa5v4yJVDAj6n00M%2FceiCyAfrcbKTQ9aHoeORG4i%2FxMvc8%2BPKfZJQhOXHkHU7LmRw76okyMJHdWliK1b0KUPFBZASLbT7EjQ9m7A3tB9tOGpD%2BCX%2BT%2B37rH7WrIYsRHMde%2FaP0AmbaN5FQG%2BheZmaM6XmIrztCzYy4Q2PdBmydRxwNZ6aZTi8VEO2te3RwiskBCxWUjC8M4IYjPjnddMOnu%2B74GOqUBevBZP%2FL4KSaDbPFHI22Epvkp8Bs5fDs60OKmIqJmWYMRsMcU0lDl6ZAWeqiJcbwPL62Cvii1otQWTtEb0G7NHCLxfO%2FQk4o6sDve8uDNEDBHDeYM6Rx53UDqiNrnX2fhrYW5p8flutP6sloLpt%2BKCMN9CEJvJ4gkXCumGOnsJvlqyLA0wzxj%2BZX013G%2FPze%2Fl9trDa3JE27ulYhpUZ4BEUbXhDL4&X-Amz-Signature=13f1967a24454a6cb5918b67f802236a22e7a940f422660436226bc9bba50cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIG2AWM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCU2FEtK5h4OaOrbbyRod1CU56%2B5XNrIiclELfgzb5JHAIgfHCPNSzf%2BzvaXOIUp29rH0ymMEqxzcf8MOG%2BWnZKhroqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ra810IJpRhbR9%2ByrcAz967nzpmgTTJOKBXm45GqyGxiSF3saKmloBxNSM0bvnnU6A%2FZKWQDd4rz6gV6r0yxuE28JGD3Lr5D%2BzIJBFQOF8QaOUBvt0qfrNV7%2BwWR6oYu%2F79%2BMuBs%2BNzX7PTA%2FqkdMNmOXx7eYtPtwx00J9STa4IQynP7gIAheGF8SGnDsKMciKTJ2WCfFhpsREKs8s8YavDQoI5C6xSLfCsKC6twDSxJqQ7GW4TjCRbBrjZw6w4amqtLXu9qwKkV3Dq9AX3iHbgL3cO8Da0Tf0xh47cN7gEH%2BUv%2FYXY2Av1VGonklzyL%2BRifMPjK43A03RoE%2BY9VpizcsOueK0k%2FCb6wLbqiXWR%2FensdK8s4VkmpbqGtypNAF%2BUibY1GAHMx7THqXPLmP5yAVo9plNlDwo4QspeviwdV0voCg0K55dP5wImaa5v4yJVDAj6n00M%2FceiCyAfrcbKTQ9aHoeORG4i%2FxMvc8%2BPKfZJQhOXHkHU7LmRw76okyMJHdWliK1b0KUPFBZASLbT7EjQ9m7A3tB9tOGpD%2BCX%2BT%2B37rH7WrIYsRHMde%2FaP0AmbaN5FQG%2BheZmaM6XmIrztCzYy4Q2PdBmydRxwNZ6aZTi8VEO2te3RwiskBCxWUjC8M4IYjPjnddMOnu%2B74GOqUBevBZP%2FL4KSaDbPFHI22Epvkp8Bs5fDs60OKmIqJmWYMRsMcU0lDl6ZAWeqiJcbwPL62Cvii1otQWTtEb0G7NHCLxfO%2FQk4o6sDve8uDNEDBHDeYM6Rx53UDqiNrnX2fhrYW5p8flutP6sloLpt%2BKCMN9CEJvJ4gkXCumGOnsJvlqyLA0wzxj%2BZX013G%2FPze%2Fl9trDa3JE27ulYhpUZ4BEUbXhDL4&X-Amz-Signature=dddfcff46867fda27a34e6b164b9c4f62a5186c8161244cff58e9f3be7394f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIG2AWM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCU2FEtK5h4OaOrbbyRod1CU56%2B5XNrIiclELfgzb5JHAIgfHCPNSzf%2BzvaXOIUp29rH0ymMEqxzcf8MOG%2BWnZKhroqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ra810IJpRhbR9%2ByrcAz967nzpmgTTJOKBXm45GqyGxiSF3saKmloBxNSM0bvnnU6A%2FZKWQDd4rz6gV6r0yxuE28JGD3Lr5D%2BzIJBFQOF8QaOUBvt0qfrNV7%2BwWR6oYu%2F79%2BMuBs%2BNzX7PTA%2FqkdMNmOXx7eYtPtwx00J9STa4IQynP7gIAheGF8SGnDsKMciKTJ2WCfFhpsREKs8s8YavDQoI5C6xSLfCsKC6twDSxJqQ7GW4TjCRbBrjZw6w4amqtLXu9qwKkV3Dq9AX3iHbgL3cO8Da0Tf0xh47cN7gEH%2BUv%2FYXY2Av1VGonklzyL%2BRifMPjK43A03RoE%2BY9VpizcsOueK0k%2FCb6wLbqiXWR%2FensdK8s4VkmpbqGtypNAF%2BUibY1GAHMx7THqXPLmP5yAVo9plNlDwo4QspeviwdV0voCg0K55dP5wImaa5v4yJVDAj6n00M%2FceiCyAfrcbKTQ9aHoeORG4i%2FxMvc8%2BPKfZJQhOXHkHU7LmRw76okyMJHdWliK1b0KUPFBZASLbT7EjQ9m7A3tB9tOGpD%2BCX%2BT%2B37rH7WrIYsRHMde%2FaP0AmbaN5FQG%2BheZmaM6XmIrztCzYy4Q2PdBmydRxwNZ6aZTi8VEO2te3RwiskBCxWUjC8M4IYjPjnddMOnu%2B74GOqUBevBZP%2FL4KSaDbPFHI22Epvkp8Bs5fDs60OKmIqJmWYMRsMcU0lDl6ZAWeqiJcbwPL62Cvii1otQWTtEb0G7NHCLxfO%2FQk4o6sDve8uDNEDBHDeYM6Rx53UDqiNrnX2fhrYW5p8flutP6sloLpt%2BKCMN9CEJvJ4gkXCumGOnsJvlqyLA0wzxj%2BZX013G%2FPze%2Fl9trDa3JE27ulYhpUZ4BEUbXhDL4&X-Amz-Signature=fd4199be91a7f1d42bc479f5acd1720fd0e30d28b52c524f5b1856b6e224c764&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
