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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NLZRGN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSFNwUBAD3bMM2L388i8JTWYbrD5nVdYkE7cBGRzwHOwIgTEemeoJjmLjFUBYxnrRw9lcYDmFwD7zcRoXMOGp9EDMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMblCO%2FlJOD4UZOhsCrcAxTLom6ju2VWEruarkiwo0T9vA3q2NY%2FTdlnffe2OcsZN38RVkcNEdSL44rm3Dy7ac8S2C8B2byrZfwG%2BzIJxWojhIc8wBFkWLW3n8vNzp3i8ZtB%2BQJOrv6%2FtPude0DqLdaNkl90quHUdw0RvN4iyX2Eoeivb5NUYAajR9xyUPVg1Wxm321oPwN7Um2Yi76O3t%2FAF8UgZbHELWCKpmE8qK%2B4BB72EQ%2FqaJPUbwO3g5gg%2F5iw16SpmMNqF4ehn0guKYhsb5fWELUnsKXYPdm%2FuiML6m2qpwlSD8VTwVJqNRGRP9Qoi5BXcgxIZ%2BfkEecLsnc3E5RIVD5jYlk%2F7Q2yQwX9mrMGwblBI3qZuEjwsV%2BulMDlf5KtTZYROaLrldktXMv0PS9rD96WT0TyA6zqrF9HTchJed0b1aovWvIFpqGl6uOMfajkPTqdvCxw37fOq6aaUFJPoZZE4N4e7Bg7%2BNRTQElxyBLubFZobwfEIK9vj7fVgdJElcbP7e5OCLQPjphMoa0eVWI8g1QO0tpN1afDyWEo6Ocrmvpq%2BJlwnOf3yKQbFCJNIT3fMsuus9a5%2BRR3xsFzlEiMIU5b%2Bu%2F5aZw9AA0YVolGW3OxEC%2Fr%2BWVwViG86go9QxY3QkrpMKGE3sQGOqUBTVR%2BTDNrtMxBNs1xvyi1v3oK8EzseqkNxpFPGXQVZfloZ3qXns3oEizkAKrGTiRKNYpQ8eWkesCWVmcC0K3bIpTRopm1oi%2BMyodbsSgLBxuL%2FZnLOxamwFJkpfjTJ3zkmAJ%2FFpMM4d%2Fi4rcLCCYfqfGtLu7hCCeANZf4cX2VMOZv2%2Fyph62cN2MQtgZoE1MfZylCkcPSbOcy6LeElbYyqmpq0dY9&X-Amz-Signature=9fb4cab611ed9c11e985319400d2b554d6a3dc18ea411cb5fe1397625beccd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NLZRGN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSFNwUBAD3bMM2L388i8JTWYbrD5nVdYkE7cBGRzwHOwIgTEemeoJjmLjFUBYxnrRw9lcYDmFwD7zcRoXMOGp9EDMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMblCO%2FlJOD4UZOhsCrcAxTLom6ju2VWEruarkiwo0T9vA3q2NY%2FTdlnffe2OcsZN38RVkcNEdSL44rm3Dy7ac8S2C8B2byrZfwG%2BzIJxWojhIc8wBFkWLW3n8vNzp3i8ZtB%2BQJOrv6%2FtPude0DqLdaNkl90quHUdw0RvN4iyX2Eoeivb5NUYAajR9xyUPVg1Wxm321oPwN7Um2Yi76O3t%2FAF8UgZbHELWCKpmE8qK%2B4BB72EQ%2FqaJPUbwO3g5gg%2F5iw16SpmMNqF4ehn0guKYhsb5fWELUnsKXYPdm%2FuiML6m2qpwlSD8VTwVJqNRGRP9Qoi5BXcgxIZ%2BfkEecLsnc3E5RIVD5jYlk%2F7Q2yQwX9mrMGwblBI3qZuEjwsV%2BulMDlf5KtTZYROaLrldktXMv0PS9rD96WT0TyA6zqrF9HTchJed0b1aovWvIFpqGl6uOMfajkPTqdvCxw37fOq6aaUFJPoZZE4N4e7Bg7%2BNRTQElxyBLubFZobwfEIK9vj7fVgdJElcbP7e5OCLQPjphMoa0eVWI8g1QO0tpN1afDyWEo6Ocrmvpq%2BJlwnOf3yKQbFCJNIT3fMsuus9a5%2BRR3xsFzlEiMIU5b%2Bu%2F5aZw9AA0YVolGW3OxEC%2Fr%2BWVwViG86go9QxY3QkrpMKGE3sQGOqUBTVR%2BTDNrtMxBNs1xvyi1v3oK8EzseqkNxpFPGXQVZfloZ3qXns3oEizkAKrGTiRKNYpQ8eWkesCWVmcC0K3bIpTRopm1oi%2BMyodbsSgLBxuL%2FZnLOxamwFJkpfjTJ3zkmAJ%2FFpMM4d%2Fi4rcLCCYfqfGtLu7hCCeANZf4cX2VMOZv2%2Fyph62cN2MQtgZoE1MfZylCkcPSbOcy6LeElbYyqmpq0dY9&X-Amz-Signature=2dc57d017d89005fe0b25d551333ffa875a117b86fe75f59b775640184cd7d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NLZRGN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSFNwUBAD3bMM2L388i8JTWYbrD5nVdYkE7cBGRzwHOwIgTEemeoJjmLjFUBYxnrRw9lcYDmFwD7zcRoXMOGp9EDMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMblCO%2FlJOD4UZOhsCrcAxTLom6ju2VWEruarkiwo0T9vA3q2NY%2FTdlnffe2OcsZN38RVkcNEdSL44rm3Dy7ac8S2C8B2byrZfwG%2BzIJxWojhIc8wBFkWLW3n8vNzp3i8ZtB%2BQJOrv6%2FtPude0DqLdaNkl90quHUdw0RvN4iyX2Eoeivb5NUYAajR9xyUPVg1Wxm321oPwN7Um2Yi76O3t%2FAF8UgZbHELWCKpmE8qK%2B4BB72EQ%2FqaJPUbwO3g5gg%2F5iw16SpmMNqF4ehn0guKYhsb5fWELUnsKXYPdm%2FuiML6m2qpwlSD8VTwVJqNRGRP9Qoi5BXcgxIZ%2BfkEecLsnc3E5RIVD5jYlk%2F7Q2yQwX9mrMGwblBI3qZuEjwsV%2BulMDlf5KtTZYROaLrldktXMv0PS9rD96WT0TyA6zqrF9HTchJed0b1aovWvIFpqGl6uOMfajkPTqdvCxw37fOq6aaUFJPoZZE4N4e7Bg7%2BNRTQElxyBLubFZobwfEIK9vj7fVgdJElcbP7e5OCLQPjphMoa0eVWI8g1QO0tpN1afDyWEo6Ocrmvpq%2BJlwnOf3yKQbFCJNIT3fMsuus9a5%2BRR3xsFzlEiMIU5b%2Bu%2F5aZw9AA0YVolGW3OxEC%2Fr%2BWVwViG86go9QxY3QkrpMKGE3sQGOqUBTVR%2BTDNrtMxBNs1xvyi1v3oK8EzseqkNxpFPGXQVZfloZ3qXns3oEizkAKrGTiRKNYpQ8eWkesCWVmcC0K3bIpTRopm1oi%2BMyodbsSgLBxuL%2FZnLOxamwFJkpfjTJ3zkmAJ%2FFpMM4d%2Fi4rcLCCYfqfGtLu7hCCeANZf4cX2VMOZv2%2Fyph62cN2MQtgZoE1MfZylCkcPSbOcy6LeElbYyqmpq0dY9&X-Amz-Signature=5d385e94fb008eb40f20fc55a0a7ea9be315011ed786c6dcfb96d9dca5614498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
