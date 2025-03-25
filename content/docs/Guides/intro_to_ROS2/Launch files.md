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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRSOYIA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3MmRy9vSbVC%2BmrmoEDwbZXmWmrMNT1%2FIur65fteRmJAIhAM7ln%2BXrECKl5GauwMtFXOakWiqzTcs4PjjP5ROktAWpKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNCfsDSEiPrWk2dOQq3ANmljLRPaILKfMjWsDq0JiqLf63JX%2F7sNH6dyiljvP%2B4RDIuq5CnAam17V7MaXqhA5KUe1dhgX1h%2BCgcWI43Z8TVqhVF%2Bexzcf4RBjFV85nmfC236ph9mVsT%2BUcYKM0NR9geAs0fwdfqKW9lMaXpTvETmkwQ9o4oBthtxED4YkzZiGra9QmzFcUusZE%2Bn485X2aRiAdcPdSS5g0zrqZCpmXfwgp8X5c0MvEHaJCKal1mk1n24i8s63YBpCeLw0lcqp3nIA6G%2FWl5Ana1pJQpDrHY7y54gbH4ls5L2a74jAWDeMi7po9ISkFME5jqwfVndamCC%2BUIxGcsQT1g9hpDvLnEu6TNDeYpUjiZDKX8UwgEQp3ZMY5ytOr%2FNxW6fkUfJk7ExHdbflPp0gc1Mu%2Bh4PgQqYm26WpSNU4IoyEPS7U3AhnUnyyvaxEK4j8N54nIAik5hD0FpD1P9eMVt7pb1aeNKnHbIq2ThwFLPXMeNWr98VjNNitDrJAlfyLe5gnLe1mON3YxnOKB4DKDe3Y%2Bd9L7FYLT0zvJulQE05Pzm2xdquMmIsnQm13hl36U44SHpfiu3ESXfYJK4qCnw7%2FbkfgDLzZQeraDqJ7n5xVA4428FU6hiD8yyqGBcyFezDa0oi%2FBjqkAdcnhZ2FRLx8mmchlSaQY6155bZTrNwYKvnd%2Bl1wEWMlChUBErU6%2Bm9aTS0O4TXPtPeALE%2FAnZgYUsLiK17z%2BknFVAMpOf18An3srFxMuy%2B%2BpoFgMROoro1PfJP9hI%2FjOnLMSpsfvYdQjFIeyIruAl5iOj4sb5nh4OiUaISg5l8qvl%2BrntQgRpzt21bjPPA2C7%2B4SMQxVnqA%2F14KL%2FHE59NK%2FNQ1&X-Amz-Signature=dfbf6120dc33e6f97064fe246ff6b8eddd61b1148e3e4d19c55d3c8beb0cf572&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRSOYIA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3MmRy9vSbVC%2BmrmoEDwbZXmWmrMNT1%2FIur65fteRmJAIhAM7ln%2BXrECKl5GauwMtFXOakWiqzTcs4PjjP5ROktAWpKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNCfsDSEiPrWk2dOQq3ANmljLRPaILKfMjWsDq0JiqLf63JX%2F7sNH6dyiljvP%2B4RDIuq5CnAam17V7MaXqhA5KUe1dhgX1h%2BCgcWI43Z8TVqhVF%2Bexzcf4RBjFV85nmfC236ph9mVsT%2BUcYKM0NR9geAs0fwdfqKW9lMaXpTvETmkwQ9o4oBthtxED4YkzZiGra9QmzFcUusZE%2Bn485X2aRiAdcPdSS5g0zrqZCpmXfwgp8X5c0MvEHaJCKal1mk1n24i8s63YBpCeLw0lcqp3nIA6G%2FWl5Ana1pJQpDrHY7y54gbH4ls5L2a74jAWDeMi7po9ISkFME5jqwfVndamCC%2BUIxGcsQT1g9hpDvLnEu6TNDeYpUjiZDKX8UwgEQp3ZMY5ytOr%2FNxW6fkUfJk7ExHdbflPp0gc1Mu%2Bh4PgQqYm26WpSNU4IoyEPS7U3AhnUnyyvaxEK4j8N54nIAik5hD0FpD1P9eMVt7pb1aeNKnHbIq2ThwFLPXMeNWr98VjNNitDrJAlfyLe5gnLe1mON3YxnOKB4DKDe3Y%2Bd9L7FYLT0zvJulQE05Pzm2xdquMmIsnQm13hl36U44SHpfiu3ESXfYJK4qCnw7%2FbkfgDLzZQeraDqJ7n5xVA4428FU6hiD8yyqGBcyFezDa0oi%2FBjqkAdcnhZ2FRLx8mmchlSaQY6155bZTrNwYKvnd%2Bl1wEWMlChUBErU6%2Bm9aTS0O4TXPtPeALE%2FAnZgYUsLiK17z%2BknFVAMpOf18An3srFxMuy%2B%2BpoFgMROoro1PfJP9hI%2FjOnLMSpsfvYdQjFIeyIruAl5iOj4sb5nh4OiUaISg5l8qvl%2BrntQgRpzt21bjPPA2C7%2B4SMQxVnqA%2F14KL%2FHE59NK%2FNQ1&X-Amz-Signature=7656e07f57baf1ff244771caaa1f01d87e4bd06f56a7ff42f05bedf4c46cae21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRSOYIA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3MmRy9vSbVC%2BmrmoEDwbZXmWmrMNT1%2FIur65fteRmJAIhAM7ln%2BXrECKl5GauwMtFXOakWiqzTcs4PjjP5ROktAWpKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNCfsDSEiPrWk2dOQq3ANmljLRPaILKfMjWsDq0JiqLf63JX%2F7sNH6dyiljvP%2B4RDIuq5CnAam17V7MaXqhA5KUe1dhgX1h%2BCgcWI43Z8TVqhVF%2Bexzcf4RBjFV85nmfC236ph9mVsT%2BUcYKM0NR9geAs0fwdfqKW9lMaXpTvETmkwQ9o4oBthtxED4YkzZiGra9QmzFcUusZE%2Bn485X2aRiAdcPdSS5g0zrqZCpmXfwgp8X5c0MvEHaJCKal1mk1n24i8s63YBpCeLw0lcqp3nIA6G%2FWl5Ana1pJQpDrHY7y54gbH4ls5L2a74jAWDeMi7po9ISkFME5jqwfVndamCC%2BUIxGcsQT1g9hpDvLnEu6TNDeYpUjiZDKX8UwgEQp3ZMY5ytOr%2FNxW6fkUfJk7ExHdbflPp0gc1Mu%2Bh4PgQqYm26WpSNU4IoyEPS7U3AhnUnyyvaxEK4j8N54nIAik5hD0FpD1P9eMVt7pb1aeNKnHbIq2ThwFLPXMeNWr98VjNNitDrJAlfyLe5gnLe1mON3YxnOKB4DKDe3Y%2Bd9L7FYLT0zvJulQE05Pzm2xdquMmIsnQm13hl36U44SHpfiu3ESXfYJK4qCnw7%2FbkfgDLzZQeraDqJ7n5xVA4428FU6hiD8yyqGBcyFezDa0oi%2FBjqkAdcnhZ2FRLx8mmchlSaQY6155bZTrNwYKvnd%2Bl1wEWMlChUBErU6%2Bm9aTS0O4TXPtPeALE%2FAnZgYUsLiK17z%2BknFVAMpOf18An3srFxMuy%2B%2BpoFgMROoro1PfJP9hI%2FjOnLMSpsfvYdQjFIeyIruAl5iOj4sb5nh4OiUaISg5l8qvl%2BrntQgRpzt21bjPPA2C7%2B4SMQxVnqA%2F14KL%2FHE59NK%2FNQ1&X-Amz-Signature=10e3d35ad40f3219c9e5da6727ab7716b31860d77ca11b3bacee44945639c39c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
