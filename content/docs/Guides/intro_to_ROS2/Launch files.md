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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YNLQ3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9RFhtqYVOaRb%2BPCyRfb5txmzAVMTZ0okCGuvL%2BrL0FAiBp3hJUuBcNzAdF8cPN1WGJmz5XHf9UWrMqBhfGzovXFiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VnZqqSrRn%2Bu%2BwTBKtwD1UEBcYf7n5ewoLjyg2l58PYvKXQUa6spKivh9YsqcjGeC2hKaaSjK0uOw69qhrBeiBO25rZ0Q8X30UB1KFKkAvo40v01n9lyFI%2BTMIDlUSp31XC9FUsFDR77huCvN3bszc1eLebKsJNFL7LGT%2BPzKkl3NwTEIap%2BDaT%2FOPti6Ueu6Yy0pE1WnYwVuIA5Zo9Zz8aT6cLtSMMXkinphzXqEMM4vKlxBD%2BAGCXSG%2BJjwVI5LwQ8s6mwbNcJP6H7o4nr1nQ9ZnSYEgUtMQpAlCWq5g4352v%2FB5YnXFuv7WF%2BRzKO8%2FwPcbQ3i41kWSkSKtiUPqITggRFZAYTf1yA%2FKMIj%2BQCsB5%2BhHSlMEYx39XEqR%2FdaTRYShSjNhQYfFJZHRJx3WKAeMGG0alDPWGOByma18UkExpU44ZrFT3XVYn86rXyhtflrggRYZVCdRCEOin%2B%2B7ZD%2FzkMhwvCcByCrPxXfw4oRY5PjCham1OZIWCBWOc8ahws7PN%2FOhZ5HLFxtIs3rKYs%2FvUMkDd5XqKd298T%2F1ynPNV%2F92V3uQBWX3zr9i7n7a%2BX9QeucvChbemdD%2F5FyeqdXKwbaSs1%2FQ3%2BpnZepQhDKeG7n2HYWGaKvoWWXzLILn3QJW1aw9wl3e8w7ebtwwY6pgGwH1Lu20rVKG98YlxsjN39CCYoaUlBbmR6XpCRo1ln4euzW8CgRhcgQtZ8%2BPPD9zRl%2BmC8C4fm5OMJRSXpLUR%2BMNCaWb81LCtssNKCF8HM%2FbPmdUWO1YwG8bqYpjf8Fue70Mb2vnIrKCnnTrzyhXr5%2F7szmXc0YicXkaTfX1RlGQrjx6Smr%2FCXvygJZCpVq%2FpBADjwrAIB6LMkU5bsAmqncR0exyyJ&X-Amz-Signature=2fb769599b6e75c75891ceb2baf7a19571d7540c02566358ca0dcc38c3145fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YNLQ3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9RFhtqYVOaRb%2BPCyRfb5txmzAVMTZ0okCGuvL%2BrL0FAiBp3hJUuBcNzAdF8cPN1WGJmz5XHf9UWrMqBhfGzovXFiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VnZqqSrRn%2Bu%2BwTBKtwD1UEBcYf7n5ewoLjyg2l58PYvKXQUa6spKivh9YsqcjGeC2hKaaSjK0uOw69qhrBeiBO25rZ0Q8X30UB1KFKkAvo40v01n9lyFI%2BTMIDlUSp31XC9FUsFDR77huCvN3bszc1eLebKsJNFL7LGT%2BPzKkl3NwTEIap%2BDaT%2FOPti6Ueu6Yy0pE1WnYwVuIA5Zo9Zz8aT6cLtSMMXkinphzXqEMM4vKlxBD%2BAGCXSG%2BJjwVI5LwQ8s6mwbNcJP6H7o4nr1nQ9ZnSYEgUtMQpAlCWq5g4352v%2FB5YnXFuv7WF%2BRzKO8%2FwPcbQ3i41kWSkSKtiUPqITggRFZAYTf1yA%2FKMIj%2BQCsB5%2BhHSlMEYx39XEqR%2FdaTRYShSjNhQYfFJZHRJx3WKAeMGG0alDPWGOByma18UkExpU44ZrFT3XVYn86rXyhtflrggRYZVCdRCEOin%2B%2B7ZD%2FzkMhwvCcByCrPxXfw4oRY5PjCham1OZIWCBWOc8ahws7PN%2FOhZ5HLFxtIs3rKYs%2FvUMkDd5XqKd298T%2F1ynPNV%2F92V3uQBWX3zr9i7n7a%2BX9QeucvChbemdD%2F5FyeqdXKwbaSs1%2FQ3%2BpnZepQhDKeG7n2HYWGaKvoWWXzLILn3QJW1aw9wl3e8w7ebtwwY6pgGwH1Lu20rVKG98YlxsjN39CCYoaUlBbmR6XpCRo1ln4euzW8CgRhcgQtZ8%2BPPD9zRl%2BmC8C4fm5OMJRSXpLUR%2BMNCaWb81LCtssNKCF8HM%2FbPmdUWO1YwG8bqYpjf8Fue70Mb2vnIrKCnnTrzyhXr5%2F7szmXc0YicXkaTfX1RlGQrjx6Smr%2FCXvygJZCpVq%2FpBADjwrAIB6LMkU5bsAmqncR0exyyJ&X-Amz-Signature=e2f28784f99b30fec52568980cd879445da2fc57e89bd39493922a8d5ab3e155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YNLQ3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9RFhtqYVOaRb%2BPCyRfb5txmzAVMTZ0okCGuvL%2BrL0FAiBp3hJUuBcNzAdF8cPN1WGJmz5XHf9UWrMqBhfGzovXFiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VnZqqSrRn%2Bu%2BwTBKtwD1UEBcYf7n5ewoLjyg2l58PYvKXQUa6spKivh9YsqcjGeC2hKaaSjK0uOw69qhrBeiBO25rZ0Q8X30UB1KFKkAvo40v01n9lyFI%2BTMIDlUSp31XC9FUsFDR77huCvN3bszc1eLebKsJNFL7LGT%2BPzKkl3NwTEIap%2BDaT%2FOPti6Ueu6Yy0pE1WnYwVuIA5Zo9Zz8aT6cLtSMMXkinphzXqEMM4vKlxBD%2BAGCXSG%2BJjwVI5LwQ8s6mwbNcJP6H7o4nr1nQ9ZnSYEgUtMQpAlCWq5g4352v%2FB5YnXFuv7WF%2BRzKO8%2FwPcbQ3i41kWSkSKtiUPqITggRFZAYTf1yA%2FKMIj%2BQCsB5%2BhHSlMEYx39XEqR%2FdaTRYShSjNhQYfFJZHRJx3WKAeMGG0alDPWGOByma18UkExpU44ZrFT3XVYn86rXyhtflrggRYZVCdRCEOin%2B%2B7ZD%2FzkMhwvCcByCrPxXfw4oRY5PjCham1OZIWCBWOc8ahws7PN%2FOhZ5HLFxtIs3rKYs%2FvUMkDd5XqKd298T%2F1ynPNV%2F92V3uQBWX3zr9i7n7a%2BX9QeucvChbemdD%2F5FyeqdXKwbaSs1%2FQ3%2BpnZepQhDKeG7n2HYWGaKvoWWXzLILn3QJW1aw9wl3e8w7ebtwwY6pgGwH1Lu20rVKG98YlxsjN39CCYoaUlBbmR6XpCRo1ln4euzW8CgRhcgQtZ8%2BPPD9zRl%2BmC8C4fm5OMJRSXpLUR%2BMNCaWb81LCtssNKCF8HM%2FbPmdUWO1YwG8bqYpjf8Fue70Mb2vnIrKCnnTrzyhXr5%2F7szmXc0YicXkaTfX1RlGQrjx6Smr%2FCXvygJZCpVq%2FpBADjwrAIB6LMkU5bsAmqncR0exyyJ&X-Amz-Signature=d227a772f6d4dae238e5479659909bef73baf27f7ab0919e1b0dd842519c8ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
