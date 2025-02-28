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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUP2XUU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEaW%2Bzj3V3HYVb%2F8GTlJAdBQQWRZABv5BAlg3q0pRIQwAiEApDYaSg%2BaELLDOxjEU4zp1pH8u6oK95CddZc3%2B2ahtksqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvx1ZW8amKjAgyM6ircA929c7tYNLhA5brX0Gs%2FZrSRc9Tc5Pib%2F1zWQEpSjnsmSNhuCH8crT8bqF5SyZjQXV8vnR7ukdgPSu%2BFYrKyXvoLPrEKyJdIM3MBXGHIoRjteEF8sxN6hwmNQnd7tfRr8mmYiAMf58M6yDB7e73n99vzN%2FGu5TrrtX9V%2BR%2FXT0M40RkpVe0pzp5n9WjiOQfhZU%2BATbVYcovuWd98lbQT5PO1exOY5sN1IRzljslC6djqb51jOHRa7tSUJZcBtwT90jtUAFGuQz3MwSgksirjxk5Asfk%2Fi9m8rU4IG%2BLu%2Fw2eh5YgE1jjr5c7Pn%2FAOGjOs6SBNDe7GnVT6mzeabyf3RmQicw1DFh%2BjXD%2Bi7jdsDETjhAuJKr5jlWuaHkWyePEXhL%2Fvt6BvbTebgbhbr7REIWPlvWRGBcgN71sMZVseK0AO4Ou0Vgcw%2FndCWf0Jr9Hfhs4At99XzQu%2ByscAsPm6TX8qeKSH%2BoMMy2S%2Fti61e72AzIe4PrXUPWJVnsLd9o2CMo3T%2F8Zuy3nM4Xk4f5CXzrWJwOzaFmj3Vk4sQlbq2kmdBgV407kT5uEhCADuCL1b2YHwo5guyX9jTE%2BkyZk9pJjyu9wTprIRc2EojcCwHaJN2gvOe6bzlQhKK19MIuRh74GOqUBbDUbnOny62kWRIj4Tiky97JOnupCXXFhG2rr9Db34EsDRUzJMQIpSgwuISE2vGvnYjMlGA%2FxaSdITyaAdQQ80D%2BvK5SXWNKPv6S5fyYaGfNZ1T7lck3ibiXA1s9vTLrN2tXp119c72UZ%2FVaXW7DTodxMRVHAKWD4H%2BHYjOG3ELVq9g5C9rUWd4cpAo1tDe%2F7ZINiUXl%2BZ2dCyulmhJNrtg0Pk%2FJO&X-Amz-Signature=48bc72b5a1ad8b1c8e4053b4a22846ea236963ab0031978fa743e3bd6d53ac46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUP2XUU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEaW%2Bzj3V3HYVb%2F8GTlJAdBQQWRZABv5BAlg3q0pRIQwAiEApDYaSg%2BaELLDOxjEU4zp1pH8u6oK95CddZc3%2B2ahtksqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvx1ZW8amKjAgyM6ircA929c7tYNLhA5brX0Gs%2FZrSRc9Tc5Pib%2F1zWQEpSjnsmSNhuCH8crT8bqF5SyZjQXV8vnR7ukdgPSu%2BFYrKyXvoLPrEKyJdIM3MBXGHIoRjteEF8sxN6hwmNQnd7tfRr8mmYiAMf58M6yDB7e73n99vzN%2FGu5TrrtX9V%2BR%2FXT0M40RkpVe0pzp5n9WjiOQfhZU%2BATbVYcovuWd98lbQT5PO1exOY5sN1IRzljslC6djqb51jOHRa7tSUJZcBtwT90jtUAFGuQz3MwSgksirjxk5Asfk%2Fi9m8rU4IG%2BLu%2Fw2eh5YgE1jjr5c7Pn%2FAOGjOs6SBNDe7GnVT6mzeabyf3RmQicw1DFh%2BjXD%2Bi7jdsDETjhAuJKr5jlWuaHkWyePEXhL%2Fvt6BvbTebgbhbr7REIWPlvWRGBcgN71sMZVseK0AO4Ou0Vgcw%2FndCWf0Jr9Hfhs4At99XzQu%2ByscAsPm6TX8qeKSH%2BoMMy2S%2Fti61e72AzIe4PrXUPWJVnsLd9o2CMo3T%2F8Zuy3nM4Xk4f5CXzrWJwOzaFmj3Vk4sQlbq2kmdBgV407kT5uEhCADuCL1b2YHwo5guyX9jTE%2BkyZk9pJjyu9wTprIRc2EojcCwHaJN2gvOe6bzlQhKK19MIuRh74GOqUBbDUbnOny62kWRIj4Tiky97JOnupCXXFhG2rr9Db34EsDRUzJMQIpSgwuISE2vGvnYjMlGA%2FxaSdITyaAdQQ80D%2BvK5SXWNKPv6S5fyYaGfNZ1T7lck3ibiXA1s9vTLrN2tXp119c72UZ%2FVaXW7DTodxMRVHAKWD4H%2BHYjOG3ELVq9g5C9rUWd4cpAo1tDe%2F7ZINiUXl%2BZ2dCyulmhJNrtg0Pk%2FJO&X-Amz-Signature=a99f9c1dbaa0e8959663ec59dda0f01657d95ae38fb4d68cb4190656765173a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUP2XUU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEaW%2Bzj3V3HYVb%2F8GTlJAdBQQWRZABv5BAlg3q0pRIQwAiEApDYaSg%2BaELLDOxjEU4zp1pH8u6oK95CddZc3%2B2ahtksqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvx1ZW8amKjAgyM6ircA929c7tYNLhA5brX0Gs%2FZrSRc9Tc5Pib%2F1zWQEpSjnsmSNhuCH8crT8bqF5SyZjQXV8vnR7ukdgPSu%2BFYrKyXvoLPrEKyJdIM3MBXGHIoRjteEF8sxN6hwmNQnd7tfRr8mmYiAMf58M6yDB7e73n99vzN%2FGu5TrrtX9V%2BR%2FXT0M40RkpVe0pzp5n9WjiOQfhZU%2BATbVYcovuWd98lbQT5PO1exOY5sN1IRzljslC6djqb51jOHRa7tSUJZcBtwT90jtUAFGuQz3MwSgksirjxk5Asfk%2Fi9m8rU4IG%2BLu%2Fw2eh5YgE1jjr5c7Pn%2FAOGjOs6SBNDe7GnVT6mzeabyf3RmQicw1DFh%2BjXD%2Bi7jdsDETjhAuJKr5jlWuaHkWyePEXhL%2Fvt6BvbTebgbhbr7REIWPlvWRGBcgN71sMZVseK0AO4Ou0Vgcw%2FndCWf0Jr9Hfhs4At99XzQu%2ByscAsPm6TX8qeKSH%2BoMMy2S%2Fti61e72AzIe4PrXUPWJVnsLd9o2CMo3T%2F8Zuy3nM4Xk4f5CXzrWJwOzaFmj3Vk4sQlbq2kmdBgV407kT5uEhCADuCL1b2YHwo5guyX9jTE%2BkyZk9pJjyu9wTprIRc2EojcCwHaJN2gvOe6bzlQhKK19MIuRh74GOqUBbDUbnOny62kWRIj4Tiky97JOnupCXXFhG2rr9Db34EsDRUzJMQIpSgwuISE2vGvnYjMlGA%2FxaSdITyaAdQQ80D%2BvK5SXWNKPv6S5fyYaGfNZ1T7lck3ibiXA1s9vTLrN2tXp119c72UZ%2FVaXW7DTodxMRVHAKWD4H%2BHYjOG3ELVq9g5C9rUWd4cpAo1tDe%2F7ZINiUXl%2BZ2dCyulmhJNrtg0Pk%2FJO&X-Amz-Signature=cb265d1ef49cd75764e3d766db6549ee5b3fa4c0bcc29965d01803f7615ed498&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
