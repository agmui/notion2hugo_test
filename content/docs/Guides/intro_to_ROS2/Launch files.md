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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELXFJXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaMXzLoegl7IfLjFv9y2G%2Bjra8dBRx7Qm%2FQyjDZxcsAIgDD%2FoVpQww7dTWgV17Il%2BA0lQ1ah1sjufb5e3fDe6v%2BoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbtSnCLLh6AYx3emircA9QiTJoz6UJn%2FfLq8Lpgia%2FlRkc8LGpi8v2YrECJisY5J%2F767sUgB5rHRIcfpTtIMMcDw%2F72lrY3HG%2BfHBgndmLafvlpH15Uh1H6hDcvPs1jIT8KgONMdSP520VQUk5aVO5Xv6ONMLcv09dkmSs6o9aV%2BG%2F1%2Bd%2B%2FzY5%2Fy8gYtUMCh87nSKu%2BRkZUbbHjUoGwqk62Ep3ClNmbG2j%2FBZ2wplWThz2fCIUM5KVVSb3q7XxuBdMPeFi50OiK%2B2SvYvuPa7ybaC6FNhJsoLKpQ4onuZAw32aHtFKm1JFF34CSDtL7V6%2BO8t%2BgmqHAj3DIbKyzu%2BvPIJDpBKDuUogTjnpPvzdijTB2mqGTDUP9n5WX1aGXL37TXOifpgPH12ytmikKuwN0rpnOGE58rh6UOaZ61TVumPqi5XoH1QTfcZZRLcO0wXVjlp%2BNnoVcT8uSW824DVN%2BcWNRBLWIEFlNW2lL8tw3odl4POKtB3vB0e2ynf%2BVuU38ezwD28XRWId%2FAeAEPuZlUFAQClw7uRHBu%2BUWG8jsbJRDqp0kRkyQkhRBmUUtUklZgqoDNAcBp2hN8UKJCi4tz7VVgaALKIgGGWlTeGy%2BPxGjHTDyHTh4bMoV1RwHHQhz5GdAAVXHqnQ%2FMI3uzb4GOqUBLIB1fQsH0BLHpedyxQamfvXghi0ArMnVmEMMEFFuQL%2FoM41AagscdQrOhKAkr328dsloHIlRFMSTNa1VhWjwMbLyei8DUR5qyvwysGo1hNIjtd%2FuDeYrj6UYTT4IyZM9MDP9OUF7bKb7sNyPY2JvQl5Zs9kBuc4Xvgey6iyncqyuCzviyBconOnvQ%2F0dXZXGGSmmjzRMSEDaUcCHN8v4QguN17Kt&X-Amz-Signature=ea212e48ffe988985b320ff104b5392c2a8e31d36a2aa2da10a4aeced4f5abc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELXFJXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaMXzLoegl7IfLjFv9y2G%2Bjra8dBRx7Qm%2FQyjDZxcsAIgDD%2FoVpQww7dTWgV17Il%2BA0lQ1ah1sjufb5e3fDe6v%2BoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbtSnCLLh6AYx3emircA9QiTJoz6UJn%2FfLq8Lpgia%2FlRkc8LGpi8v2YrECJisY5J%2F767sUgB5rHRIcfpTtIMMcDw%2F72lrY3HG%2BfHBgndmLafvlpH15Uh1H6hDcvPs1jIT8KgONMdSP520VQUk5aVO5Xv6ONMLcv09dkmSs6o9aV%2BG%2F1%2Bd%2B%2FzY5%2Fy8gYtUMCh87nSKu%2BRkZUbbHjUoGwqk62Ep3ClNmbG2j%2FBZ2wplWThz2fCIUM5KVVSb3q7XxuBdMPeFi50OiK%2B2SvYvuPa7ybaC6FNhJsoLKpQ4onuZAw32aHtFKm1JFF34CSDtL7V6%2BO8t%2BgmqHAj3DIbKyzu%2BvPIJDpBKDuUogTjnpPvzdijTB2mqGTDUP9n5WX1aGXL37TXOifpgPH12ytmikKuwN0rpnOGE58rh6UOaZ61TVumPqi5XoH1QTfcZZRLcO0wXVjlp%2BNnoVcT8uSW824DVN%2BcWNRBLWIEFlNW2lL8tw3odl4POKtB3vB0e2ynf%2BVuU38ezwD28XRWId%2FAeAEPuZlUFAQClw7uRHBu%2BUWG8jsbJRDqp0kRkyQkhRBmUUtUklZgqoDNAcBp2hN8UKJCi4tz7VVgaALKIgGGWlTeGy%2BPxGjHTDyHTh4bMoV1RwHHQhz5GdAAVXHqnQ%2FMI3uzb4GOqUBLIB1fQsH0BLHpedyxQamfvXghi0ArMnVmEMMEFFuQL%2FoM41AagscdQrOhKAkr328dsloHIlRFMSTNa1VhWjwMbLyei8DUR5qyvwysGo1hNIjtd%2FuDeYrj6UYTT4IyZM9MDP9OUF7bKb7sNyPY2JvQl5Zs9kBuc4Xvgey6iyncqyuCzviyBconOnvQ%2F0dXZXGGSmmjzRMSEDaUcCHN8v4QguN17Kt&X-Amz-Signature=2a0e071854a6ac1e4f3e3d1e44b9c53ae46794373a4fc02053c7f9cb229ebe1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELXFJXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaMXzLoegl7IfLjFv9y2G%2Bjra8dBRx7Qm%2FQyjDZxcsAIgDD%2FoVpQww7dTWgV17Il%2BA0lQ1ah1sjufb5e3fDe6v%2BoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbtSnCLLh6AYx3emircA9QiTJoz6UJn%2FfLq8Lpgia%2FlRkc8LGpi8v2YrECJisY5J%2F767sUgB5rHRIcfpTtIMMcDw%2F72lrY3HG%2BfHBgndmLafvlpH15Uh1H6hDcvPs1jIT8KgONMdSP520VQUk5aVO5Xv6ONMLcv09dkmSs6o9aV%2BG%2F1%2Bd%2B%2FzY5%2Fy8gYtUMCh87nSKu%2BRkZUbbHjUoGwqk62Ep3ClNmbG2j%2FBZ2wplWThz2fCIUM5KVVSb3q7XxuBdMPeFi50OiK%2B2SvYvuPa7ybaC6FNhJsoLKpQ4onuZAw32aHtFKm1JFF34CSDtL7V6%2BO8t%2BgmqHAj3DIbKyzu%2BvPIJDpBKDuUogTjnpPvzdijTB2mqGTDUP9n5WX1aGXL37TXOifpgPH12ytmikKuwN0rpnOGE58rh6UOaZ61TVumPqi5XoH1QTfcZZRLcO0wXVjlp%2BNnoVcT8uSW824DVN%2BcWNRBLWIEFlNW2lL8tw3odl4POKtB3vB0e2ynf%2BVuU38ezwD28XRWId%2FAeAEPuZlUFAQClw7uRHBu%2BUWG8jsbJRDqp0kRkyQkhRBmUUtUklZgqoDNAcBp2hN8UKJCi4tz7VVgaALKIgGGWlTeGy%2BPxGjHTDyHTh4bMoV1RwHHQhz5GdAAVXHqnQ%2FMI3uzb4GOqUBLIB1fQsH0BLHpedyxQamfvXghi0ArMnVmEMMEFFuQL%2FoM41AagscdQrOhKAkr328dsloHIlRFMSTNa1VhWjwMbLyei8DUR5qyvwysGo1hNIjtd%2FuDeYrj6UYTT4IyZM9MDP9OUF7bKb7sNyPY2JvQl5Zs9kBuc4Xvgey6iyncqyuCzviyBconOnvQ%2F0dXZXGGSmmjzRMSEDaUcCHN8v4QguN17Kt&X-Amz-Signature=e1e832925936b3cd4c50f6671a91a360ad844ba67e489dcb0bd72a1dba8a2beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
