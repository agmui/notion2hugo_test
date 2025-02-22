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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYG5RCQ6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB2qTRCUPKOZQfoLRXHyYOI2h4EEz5YMxmz3tj98DbugIhAJHoRm%2BsNJVxIVb7OfH386O81WbFNRESnGPeFO7ke4twKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfBxZjTvVVjA%2B90WEq3AN%2BFQ%2FpdOYTx4LGhATtu1h1o9oXnaTuPJNsnxtIMy4VtMUspaLaNdJ8bh6uHB4epZ%2BhYkHKfvhWtgCN1%2BKAVV05QSavDCGUlaN1mJys3qny000kc9hEq%2FLgI9zKNuGTCEz%2FyCxU9d2Gc54iKIYLnp8Un8K68%2Bvg%2B%2FTysNDs6XUdTec4adC7GUeu1l1IIUMR%2B5B1H%2BaXO4TFdM9gVveD%2Fd82Y2ffsQlbBHwVn7EAl8Yjov84CTLFrhiSBCzid%2BsyZzi9Y%2F%2F2jGQ7hLrwBh6b2pXTJke1PeBKQLRx7Vlm5kAVf09TBzQungCh2aJgtKYaPOKgvdYUGANSHiQZctCttSvsHtW1dqR0MSyaRIGu44cM%2BS%2B4vocRN%2BTJCEgHlvxMGB52MvHAC%2BcybKwZ5qSaWIGLcDsgF0p5DtaRpxYGKgGSXaWPXTLdBP4u8SDAVduoGZNlLYb7GF3CyyWaZDoqt0R6uTjkUiCdvim7syaOeTNqbZFTGAZdatDF92Q7IHwmUKhuizngt9TFDpwn21KgiJa9a1fmPBmURl74Fb8nC0nJYK%2FHXfFCBuE%2FvS%2Bz%2BsdZKDZGA%2FNYP%2Fc2A5fVgaNjCjyyhGZLDvsGMW0arkX6PyNVT8XZHbRnmAEz5jM6pDCx9Oi9BjqkAX7dF%2F6vgwxl50MLi%2B%2BPeMsxpyD3e3yPldbgP9nC1BsZSq8A846kxXPV8Gr5Aj2%2BvvSiXwjTnNiCa21IexkJWUx%2BA88orGi%2BiiKoAI7FCKIKHg%2F65SPWfh3%2F2%2F65j97EIKCM1vY1H4g2ghLdDijZ3s9%2Fl3zL74VIjz8TrLV55qCmhpUH8Wz4D6Hi%2B21Mk4CYOg3KUlrDXOww9hpcZqHimzTI%2Fjku&X-Amz-Signature=a23f6e4ef97f9bdd0a67ecbd1444f19024c7218995a085ab6a4d9ff744fff50a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYG5RCQ6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB2qTRCUPKOZQfoLRXHyYOI2h4EEz5YMxmz3tj98DbugIhAJHoRm%2BsNJVxIVb7OfH386O81WbFNRESnGPeFO7ke4twKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfBxZjTvVVjA%2B90WEq3AN%2BFQ%2FpdOYTx4LGhATtu1h1o9oXnaTuPJNsnxtIMy4VtMUspaLaNdJ8bh6uHB4epZ%2BhYkHKfvhWtgCN1%2BKAVV05QSavDCGUlaN1mJys3qny000kc9hEq%2FLgI9zKNuGTCEz%2FyCxU9d2Gc54iKIYLnp8Un8K68%2Bvg%2B%2FTysNDs6XUdTec4adC7GUeu1l1IIUMR%2B5B1H%2BaXO4TFdM9gVveD%2Fd82Y2ffsQlbBHwVn7EAl8Yjov84CTLFrhiSBCzid%2BsyZzi9Y%2F%2F2jGQ7hLrwBh6b2pXTJke1PeBKQLRx7Vlm5kAVf09TBzQungCh2aJgtKYaPOKgvdYUGANSHiQZctCttSvsHtW1dqR0MSyaRIGu44cM%2BS%2B4vocRN%2BTJCEgHlvxMGB52MvHAC%2BcybKwZ5qSaWIGLcDsgF0p5DtaRpxYGKgGSXaWPXTLdBP4u8SDAVduoGZNlLYb7GF3CyyWaZDoqt0R6uTjkUiCdvim7syaOeTNqbZFTGAZdatDF92Q7IHwmUKhuizngt9TFDpwn21KgiJa9a1fmPBmURl74Fb8nC0nJYK%2FHXfFCBuE%2FvS%2Bz%2BsdZKDZGA%2FNYP%2Fc2A5fVgaNjCjyyhGZLDvsGMW0arkX6PyNVT8XZHbRnmAEz5jM6pDCx9Oi9BjqkAX7dF%2F6vgwxl50MLi%2B%2BPeMsxpyD3e3yPldbgP9nC1BsZSq8A846kxXPV8Gr5Aj2%2BvvSiXwjTnNiCa21IexkJWUx%2BA88orGi%2BiiKoAI7FCKIKHg%2F65SPWfh3%2F2%2F65j97EIKCM1vY1H4g2ghLdDijZ3s9%2Fl3zL74VIjz8TrLV55qCmhpUH8Wz4D6Hi%2B21Mk4CYOg3KUlrDXOww9hpcZqHimzTI%2Fjku&X-Amz-Signature=3b78caa69caa6c968b2092bceb5bdb99674858f357a5fbb324d18c3b59ef9d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYG5RCQ6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB2qTRCUPKOZQfoLRXHyYOI2h4EEz5YMxmz3tj98DbugIhAJHoRm%2BsNJVxIVb7OfH386O81WbFNRESnGPeFO7ke4twKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfBxZjTvVVjA%2B90WEq3AN%2BFQ%2FpdOYTx4LGhATtu1h1o9oXnaTuPJNsnxtIMy4VtMUspaLaNdJ8bh6uHB4epZ%2BhYkHKfvhWtgCN1%2BKAVV05QSavDCGUlaN1mJys3qny000kc9hEq%2FLgI9zKNuGTCEz%2FyCxU9d2Gc54iKIYLnp8Un8K68%2Bvg%2B%2FTysNDs6XUdTec4adC7GUeu1l1IIUMR%2B5B1H%2BaXO4TFdM9gVveD%2Fd82Y2ffsQlbBHwVn7EAl8Yjov84CTLFrhiSBCzid%2BsyZzi9Y%2F%2F2jGQ7hLrwBh6b2pXTJke1PeBKQLRx7Vlm5kAVf09TBzQungCh2aJgtKYaPOKgvdYUGANSHiQZctCttSvsHtW1dqR0MSyaRIGu44cM%2BS%2B4vocRN%2BTJCEgHlvxMGB52MvHAC%2BcybKwZ5qSaWIGLcDsgF0p5DtaRpxYGKgGSXaWPXTLdBP4u8SDAVduoGZNlLYb7GF3CyyWaZDoqt0R6uTjkUiCdvim7syaOeTNqbZFTGAZdatDF92Q7IHwmUKhuizngt9TFDpwn21KgiJa9a1fmPBmURl74Fb8nC0nJYK%2FHXfFCBuE%2FvS%2Bz%2BsdZKDZGA%2FNYP%2Fc2A5fVgaNjCjyyhGZLDvsGMW0arkX6PyNVT8XZHbRnmAEz5jM6pDCx9Oi9BjqkAX7dF%2F6vgwxl50MLi%2B%2BPeMsxpyD3e3yPldbgP9nC1BsZSq8A846kxXPV8Gr5Aj2%2BvvSiXwjTnNiCa21IexkJWUx%2BA88orGi%2BiiKoAI7FCKIKHg%2F65SPWfh3%2F2%2F65j97EIKCM1vY1H4g2ghLdDijZ3s9%2Fl3zL74VIjz8TrLV55qCmhpUH8Wz4D6Hi%2B21Mk4CYOg3KUlrDXOww9hpcZqHimzTI%2Fjku&X-Amz-Signature=ecd90278052fb5df8c39e4cafdea258c8576bacd36b80af3b5c1ad66df0fa3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
