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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTBLQNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq7emXHVgbJPi01qwnS0UCi%2BFvN8Etp7vEVcrhWaz8lAiAV1B7np01SuNyeIitnzgXzGhaY%2B6Kcmwczz%2BZDws0cvCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIg4SfHanjhJABZzQKtwDpwmvqOC4z%2F0QFGZ7BhZbtr7ziQbcRzH2qfu5eOi5oFAVr6q83WIYG9Rv5N%2BfLK7IV5BGfAMpaBSIT%2FLRPeDWVaPW5t0PtYMIakq1kM9FrHaTZvst03HbX6rMcD%2BW3OOXJkJUjNgJZm32qScl990%2BRHkV1vRKKnNSCaIe0RaI50me5Uar54fFKHa7kPbq0vt5JL3bqdzHT0YxNXfBaWI%2FKUKtVt182NFyM8kI1VT4Mct47gYhSXnLhOEQRfM%2FmAFC50cq2AGvQx1WxIu%2FzyDEpLSvKzfaawLgGV7KmNwV4VqzovZ87m5bskbLUK3GOecYOP16PE9yzKPHgzD2M1ODPyMAayROthHGBCI0Jo1XSM2%2Fcx9XjRO5rlAS5V9NxLZ28G4UTRB7f6Ie7WA1TXEWGmGSD8UcHUwmi69SJz7vnEBgK5ot9ltr1zImTnRsnI9MeVKTaRyX6iAaF6k3u0rgBIqPWFWktx3ij1kqPOuaTQ5tCOeBQ7Fa8gx2XbkLOmHutz8Fanrq6JexLK1e5HWCFHf%2FIAVXw4Ra1aPJrre09yq4dTrMFhz2TQ1Xj8Ha4Cfma7veHnHn0WlirDnvIb8vHYCVHoOOufBmwtqUYhiKHO%2FHoUrRksdUolcWi0ow84qcvgY6pgGfxwRPG%2Bf%2BYhGuc%2FabgjTyoNa6mKYsPWS%2FrX6vU5X%2FxgdAgZ%2BLZKgTy%2BK3gz%2B%2BDkxxnpu7Hqyau46VKNazZpYHVssEOEfMXTCpdhSSLSQIhp92xtf2WSr1%2B1EFrLWMhVQVcoLww77weJJJrEm04VisRVgvLXFnd5oOMco%2BnQXHnVVoQvZZp7WHTdZG9HaEyK%2FzIGzO3Qi5QrZfaCbtGAle%2BiLjPjN8&X-Amz-Signature=ff7a806f78d5fc202274ba0827ef4890573cbcf760bb62b119f5ad4d7d25533e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTBLQNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq7emXHVgbJPi01qwnS0UCi%2BFvN8Etp7vEVcrhWaz8lAiAV1B7np01SuNyeIitnzgXzGhaY%2B6Kcmwczz%2BZDws0cvCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIg4SfHanjhJABZzQKtwDpwmvqOC4z%2F0QFGZ7BhZbtr7ziQbcRzH2qfu5eOi5oFAVr6q83WIYG9Rv5N%2BfLK7IV5BGfAMpaBSIT%2FLRPeDWVaPW5t0PtYMIakq1kM9FrHaTZvst03HbX6rMcD%2BW3OOXJkJUjNgJZm32qScl990%2BRHkV1vRKKnNSCaIe0RaI50me5Uar54fFKHa7kPbq0vt5JL3bqdzHT0YxNXfBaWI%2FKUKtVt182NFyM8kI1VT4Mct47gYhSXnLhOEQRfM%2FmAFC50cq2AGvQx1WxIu%2FzyDEpLSvKzfaawLgGV7KmNwV4VqzovZ87m5bskbLUK3GOecYOP16PE9yzKPHgzD2M1ODPyMAayROthHGBCI0Jo1XSM2%2Fcx9XjRO5rlAS5V9NxLZ28G4UTRB7f6Ie7WA1TXEWGmGSD8UcHUwmi69SJz7vnEBgK5ot9ltr1zImTnRsnI9MeVKTaRyX6iAaF6k3u0rgBIqPWFWktx3ij1kqPOuaTQ5tCOeBQ7Fa8gx2XbkLOmHutz8Fanrq6JexLK1e5HWCFHf%2FIAVXw4Ra1aPJrre09yq4dTrMFhz2TQ1Xj8Ha4Cfma7veHnHn0WlirDnvIb8vHYCVHoOOufBmwtqUYhiKHO%2FHoUrRksdUolcWi0ow84qcvgY6pgGfxwRPG%2Bf%2BYhGuc%2FabgjTyoNa6mKYsPWS%2FrX6vU5X%2FxgdAgZ%2BLZKgTy%2BK3gz%2B%2BDkxxnpu7Hqyau46VKNazZpYHVssEOEfMXTCpdhSSLSQIhp92xtf2WSr1%2B1EFrLWMhVQVcoLww77weJJJrEm04VisRVgvLXFnd5oOMco%2BnQXHnVVoQvZZp7WHTdZG9HaEyK%2FzIGzO3Qi5QrZfaCbtGAle%2BiLjPjN8&X-Amz-Signature=478392e81b8efa24457d529c177abd4e3593584ab509e9d2eef011b2adcd4370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTBLQNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq7emXHVgbJPi01qwnS0UCi%2BFvN8Etp7vEVcrhWaz8lAiAV1B7np01SuNyeIitnzgXzGhaY%2B6Kcmwczz%2BZDws0cvCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIg4SfHanjhJABZzQKtwDpwmvqOC4z%2F0QFGZ7BhZbtr7ziQbcRzH2qfu5eOi5oFAVr6q83WIYG9Rv5N%2BfLK7IV5BGfAMpaBSIT%2FLRPeDWVaPW5t0PtYMIakq1kM9FrHaTZvst03HbX6rMcD%2BW3OOXJkJUjNgJZm32qScl990%2BRHkV1vRKKnNSCaIe0RaI50me5Uar54fFKHa7kPbq0vt5JL3bqdzHT0YxNXfBaWI%2FKUKtVt182NFyM8kI1VT4Mct47gYhSXnLhOEQRfM%2FmAFC50cq2AGvQx1WxIu%2FzyDEpLSvKzfaawLgGV7KmNwV4VqzovZ87m5bskbLUK3GOecYOP16PE9yzKPHgzD2M1ODPyMAayROthHGBCI0Jo1XSM2%2Fcx9XjRO5rlAS5V9NxLZ28G4UTRB7f6Ie7WA1TXEWGmGSD8UcHUwmi69SJz7vnEBgK5ot9ltr1zImTnRsnI9MeVKTaRyX6iAaF6k3u0rgBIqPWFWktx3ij1kqPOuaTQ5tCOeBQ7Fa8gx2XbkLOmHutz8Fanrq6JexLK1e5HWCFHf%2FIAVXw4Ra1aPJrre09yq4dTrMFhz2TQ1Xj8Ha4Cfma7veHnHn0WlirDnvIb8vHYCVHoOOufBmwtqUYhiKHO%2FHoUrRksdUolcWi0ow84qcvgY6pgGfxwRPG%2Bf%2BYhGuc%2FabgjTyoNa6mKYsPWS%2FrX6vU5X%2FxgdAgZ%2BLZKgTy%2BK3gz%2B%2BDkxxnpu7Hqyau46VKNazZpYHVssEOEfMXTCpdhSSLSQIhp92xtf2WSr1%2B1EFrLWMhVQVcoLww77weJJJrEm04VisRVgvLXFnd5oOMco%2BnQXHnVVoQvZZp7WHTdZG9HaEyK%2FzIGzO3Qi5QrZfaCbtGAle%2BiLjPjN8&X-Amz-Signature=193bd2506ebc50644bbadb021559c4c868a66aa879c4bec0708e5998bdebdf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
