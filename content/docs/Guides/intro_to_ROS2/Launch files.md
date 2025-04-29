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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN3TJAS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtVVMLXMk8s8780Sg4sCTdJK3ydQ0hmzF8bqlRHolyeAiEAjvJDtNJ6WlCPFONAaOBFVAwAYNR3%2BZI5zyy%2Fx2rgE5QqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmjh2bDxBWpdiL88ircA%2FVdsYHNwrfI%2F9gZJIysN%2FlDzLL3UbQRATyCgGXGH6yw3YYwiQOXd44Pfr0WCACRg52mwrc52CGT%2FzZyWRXbO4yTBEvG5Q2i7gfSf9RXXASEmK38LUUryB%2FoOS0n%2BL7KZAufuctJgoa%2B1%2BxyugbC4wzQ0LV062xcWpeOfRIBz%2BC8ljCAQLF9YeD3lm71o1HVWoYCE3lszHvkN5X4jM1v11%2BpzTZ0JZ8hIteSMBXi8RNFJ8DvnM%2B4URlht4%2Bi3d1DXO3KeyOiS7Z5AQYM%2FGJ5ERvldqezTdjOe0t2MD3ksJC13Nk22M2KwqozEI9fdTwJdpeWgL87BfAFAi5j0mrL7fvDvav%2FGpqdLqo5jXklPUiDawgTV%2F6uiQGQkPfAjPHdqM8qo2AkYKXSTJHba9cRSFBIrsCNVyP1FxWK7iJabeGDQo39uJ9jx4wOfdyiLO%2FVwjV0t3VYLH07jp3BdMh1zkggQVb2gpKyOJk0%2F%2FFY47ouazh9zE2B0YzD6s2O%2Bl2SElkUNvayEbH2xvktfbfz3L5sFqFIFf2fY%2F1fS7uWeKIDrztcwppoYbAQyMG0YOiiMKYC1dtQ38LxPCr%2FCDBohQrQOiryTDwVGkdVmtVojta3esCaofGk02FYuQAdML%2BtxMAGOqUBlNt5d9HeY5Ef2bf5h3jpnLl5ua5P11EZ4gbAiyoiqe5AIh9vJkSOnQ4OvXOrOcMxiH0Jr4QbDvR8hXIPyjmoBUCA7pRoUZe0FcHmgeM9K7OO3Pw83p1eCBs3C%2BcwqBWw%2BLUvDw%2BYGYOc6kjyRLc%2Bm%2FhdW%2BHvLrKdwLHWnsmLnK9Eh5zPeU%2FnGO7XBz48kVGaZK%2FQnNi86cmNqqdtqIsYwz2CeZlz&X-Amz-Signature=fa67dc15b6466ddb465c53f8e5f3a4ff001fd29c6c8ce0b9ea718e1aff504206&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN3TJAS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtVVMLXMk8s8780Sg4sCTdJK3ydQ0hmzF8bqlRHolyeAiEAjvJDtNJ6WlCPFONAaOBFVAwAYNR3%2BZI5zyy%2Fx2rgE5QqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmjh2bDxBWpdiL88ircA%2FVdsYHNwrfI%2F9gZJIysN%2FlDzLL3UbQRATyCgGXGH6yw3YYwiQOXd44Pfr0WCACRg52mwrc52CGT%2FzZyWRXbO4yTBEvG5Q2i7gfSf9RXXASEmK38LUUryB%2FoOS0n%2BL7KZAufuctJgoa%2B1%2BxyugbC4wzQ0LV062xcWpeOfRIBz%2BC8ljCAQLF9YeD3lm71o1HVWoYCE3lszHvkN5X4jM1v11%2BpzTZ0JZ8hIteSMBXi8RNFJ8DvnM%2B4URlht4%2Bi3d1DXO3KeyOiS7Z5AQYM%2FGJ5ERvldqezTdjOe0t2MD3ksJC13Nk22M2KwqozEI9fdTwJdpeWgL87BfAFAi5j0mrL7fvDvav%2FGpqdLqo5jXklPUiDawgTV%2F6uiQGQkPfAjPHdqM8qo2AkYKXSTJHba9cRSFBIrsCNVyP1FxWK7iJabeGDQo39uJ9jx4wOfdyiLO%2FVwjV0t3VYLH07jp3BdMh1zkggQVb2gpKyOJk0%2F%2FFY47ouazh9zE2B0YzD6s2O%2Bl2SElkUNvayEbH2xvktfbfz3L5sFqFIFf2fY%2F1fS7uWeKIDrztcwppoYbAQyMG0YOiiMKYC1dtQ38LxPCr%2FCDBohQrQOiryTDwVGkdVmtVojta3esCaofGk02FYuQAdML%2BtxMAGOqUBlNt5d9HeY5Ef2bf5h3jpnLl5ua5P11EZ4gbAiyoiqe5AIh9vJkSOnQ4OvXOrOcMxiH0Jr4QbDvR8hXIPyjmoBUCA7pRoUZe0FcHmgeM9K7OO3Pw83p1eCBs3C%2BcwqBWw%2BLUvDw%2BYGYOc6kjyRLc%2Bm%2FhdW%2BHvLrKdwLHWnsmLnK9Eh5zPeU%2FnGO7XBz48kVGaZK%2FQnNi86cmNqqdtqIsYwz2CeZlz&X-Amz-Signature=f64d822fab1c8f1cfa24c82a0b1bd66a76f254ee1d85b9be8346f970d1604dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN3TJAS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtVVMLXMk8s8780Sg4sCTdJK3ydQ0hmzF8bqlRHolyeAiEAjvJDtNJ6WlCPFONAaOBFVAwAYNR3%2BZI5zyy%2Fx2rgE5QqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmjh2bDxBWpdiL88ircA%2FVdsYHNwrfI%2F9gZJIysN%2FlDzLL3UbQRATyCgGXGH6yw3YYwiQOXd44Pfr0WCACRg52mwrc52CGT%2FzZyWRXbO4yTBEvG5Q2i7gfSf9RXXASEmK38LUUryB%2FoOS0n%2BL7KZAufuctJgoa%2B1%2BxyugbC4wzQ0LV062xcWpeOfRIBz%2BC8ljCAQLF9YeD3lm71o1HVWoYCE3lszHvkN5X4jM1v11%2BpzTZ0JZ8hIteSMBXi8RNFJ8DvnM%2B4URlht4%2Bi3d1DXO3KeyOiS7Z5AQYM%2FGJ5ERvldqezTdjOe0t2MD3ksJC13Nk22M2KwqozEI9fdTwJdpeWgL87BfAFAi5j0mrL7fvDvav%2FGpqdLqo5jXklPUiDawgTV%2F6uiQGQkPfAjPHdqM8qo2AkYKXSTJHba9cRSFBIrsCNVyP1FxWK7iJabeGDQo39uJ9jx4wOfdyiLO%2FVwjV0t3VYLH07jp3BdMh1zkggQVb2gpKyOJk0%2F%2FFY47ouazh9zE2B0YzD6s2O%2Bl2SElkUNvayEbH2xvktfbfz3L5sFqFIFf2fY%2F1fS7uWeKIDrztcwppoYbAQyMG0YOiiMKYC1dtQ38LxPCr%2FCDBohQrQOiryTDwVGkdVmtVojta3esCaofGk02FYuQAdML%2BtxMAGOqUBlNt5d9HeY5Ef2bf5h3jpnLl5ua5P11EZ4gbAiyoiqe5AIh9vJkSOnQ4OvXOrOcMxiH0Jr4QbDvR8hXIPyjmoBUCA7pRoUZe0FcHmgeM9K7OO3Pw83p1eCBs3C%2BcwqBWw%2BLUvDw%2BYGYOc6kjyRLc%2Bm%2FhdW%2BHvLrKdwLHWnsmLnK9Eh5zPeU%2FnGO7XBz48kVGaZK%2FQnNi86cmNqqdtqIsYwz2CeZlz&X-Amz-Signature=4642fbb28ec70dfb461705c46eb4a4b6fbbc42327dd9b108b3a2d6a408664fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
