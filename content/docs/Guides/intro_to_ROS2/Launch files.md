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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNMYKXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPP61utbCOD6fHEvkJtqE%2BOhvD80XqY8tZ6GQoQJuCDAiEA%2BuveNTMVbBukYMBxKYRpIvnuouXjzCB4TH2N7Vi5hWsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgb0Y7Rs2Ys7ySl5ircAyDMEh8toLq25oXkTPJS3UYPDmIcWdFzxHumQJcrRhdYgjlZSHxbOwA0l0KwGIIN2ilIXKMWRFJFsx4VGcoI%2BLYYWB7e6TomvnopT5RUyuzei6mDVVGBquyQcdVKQ67jdU3CxsDABpZAktNqsHX%2BDPFt1Y2QaO8uY0sZo51jB2JJvk39o9kJStj8qFUvYedA59lVWTE8NQK4EhdykSurudXD73iYkjp1V%2BViE8pxgrnNwxeF4p2PmOtbdlS1lX714ezKZm7JHg9l63mAgvxajgXZBBQuDPXkn6AXm8xS9Wielp7vpP4xLZPZ69Y8pKZY7M5k2L5UbjB%2FPSBNTnAsUh1B4tXeUCq2L975Gh8mbBYTA4A34riNipzlwjaeBKCtPhR5bBjykUOSkfoF2U6OQr87gHoA9eYzLcNIBmdOHoBu9HBYTVPgw%2BMrXGbrKVH2cQpJ2u0axK36KycjJKO17shfr6Lc%2FeZFlDZ6K6WcoBBj%2FRll04R25nwMBx4O%2BQMoIVzl%2Fu3KNihJMLXFAi3h8yxgSS%2B1j7xNf3%2FelwuHJW0F3nsAY0tvdBSSBjA0YWNMRiopXmRD2j3o5GgKOunMtNUgqOR4UMoHUj0az2xicCbx6Lrd4WXOdN4VfspQMMuekr4GOqUBiIhRNwOK984YcpXRr7uiwGrP%2B1rEVZaRri54rd3646w8O81LvbbO%2FP%2FBCx4epAhJ98RmaPdOi2ssFrsk30iDy36OW3%2FdDcY0dE3NLoArU0RzU5scuGLqcbTljdZ9QxptpYzYVRd3yKPCeBA6%2BNgkm63HdSZy0pPYR8BhUxCDzpICFEDLRFw8KBTmGUYROBZajBfKmD9F6DeZqpRe2Pl%2F8rcFcmes&X-Amz-Signature=6ef071578dd8626654b5abeb84862fff61cef54a26b0b33850f54ee7dede77ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNMYKXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPP61utbCOD6fHEvkJtqE%2BOhvD80XqY8tZ6GQoQJuCDAiEA%2BuveNTMVbBukYMBxKYRpIvnuouXjzCB4TH2N7Vi5hWsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgb0Y7Rs2Ys7ySl5ircAyDMEh8toLq25oXkTPJS3UYPDmIcWdFzxHumQJcrRhdYgjlZSHxbOwA0l0KwGIIN2ilIXKMWRFJFsx4VGcoI%2BLYYWB7e6TomvnopT5RUyuzei6mDVVGBquyQcdVKQ67jdU3CxsDABpZAktNqsHX%2BDPFt1Y2QaO8uY0sZo51jB2JJvk39o9kJStj8qFUvYedA59lVWTE8NQK4EhdykSurudXD73iYkjp1V%2BViE8pxgrnNwxeF4p2PmOtbdlS1lX714ezKZm7JHg9l63mAgvxajgXZBBQuDPXkn6AXm8xS9Wielp7vpP4xLZPZ69Y8pKZY7M5k2L5UbjB%2FPSBNTnAsUh1B4tXeUCq2L975Gh8mbBYTA4A34riNipzlwjaeBKCtPhR5bBjykUOSkfoF2U6OQr87gHoA9eYzLcNIBmdOHoBu9HBYTVPgw%2BMrXGbrKVH2cQpJ2u0axK36KycjJKO17shfr6Lc%2FeZFlDZ6K6WcoBBj%2FRll04R25nwMBx4O%2BQMoIVzl%2Fu3KNihJMLXFAi3h8yxgSS%2B1j7xNf3%2FelwuHJW0F3nsAY0tvdBSSBjA0YWNMRiopXmRD2j3o5GgKOunMtNUgqOR4UMoHUj0az2xicCbx6Lrd4WXOdN4VfspQMMuekr4GOqUBiIhRNwOK984YcpXRr7uiwGrP%2B1rEVZaRri54rd3646w8O81LvbbO%2FP%2FBCx4epAhJ98RmaPdOi2ssFrsk30iDy36OW3%2FdDcY0dE3NLoArU0RzU5scuGLqcbTljdZ9QxptpYzYVRd3yKPCeBA6%2BNgkm63HdSZy0pPYR8BhUxCDzpICFEDLRFw8KBTmGUYROBZajBfKmD9F6DeZqpRe2Pl%2F8rcFcmes&X-Amz-Signature=350a768a931ae620f95b478b8747eaf90b03d7d8c708800df38114f831c2db14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNMYKXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPP61utbCOD6fHEvkJtqE%2BOhvD80XqY8tZ6GQoQJuCDAiEA%2BuveNTMVbBukYMBxKYRpIvnuouXjzCB4TH2N7Vi5hWsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgb0Y7Rs2Ys7ySl5ircAyDMEh8toLq25oXkTPJS3UYPDmIcWdFzxHumQJcrRhdYgjlZSHxbOwA0l0KwGIIN2ilIXKMWRFJFsx4VGcoI%2BLYYWB7e6TomvnopT5RUyuzei6mDVVGBquyQcdVKQ67jdU3CxsDABpZAktNqsHX%2BDPFt1Y2QaO8uY0sZo51jB2JJvk39o9kJStj8qFUvYedA59lVWTE8NQK4EhdykSurudXD73iYkjp1V%2BViE8pxgrnNwxeF4p2PmOtbdlS1lX714ezKZm7JHg9l63mAgvxajgXZBBQuDPXkn6AXm8xS9Wielp7vpP4xLZPZ69Y8pKZY7M5k2L5UbjB%2FPSBNTnAsUh1B4tXeUCq2L975Gh8mbBYTA4A34riNipzlwjaeBKCtPhR5bBjykUOSkfoF2U6OQr87gHoA9eYzLcNIBmdOHoBu9HBYTVPgw%2BMrXGbrKVH2cQpJ2u0axK36KycjJKO17shfr6Lc%2FeZFlDZ6K6WcoBBj%2FRll04R25nwMBx4O%2BQMoIVzl%2Fu3KNihJMLXFAi3h8yxgSS%2B1j7xNf3%2FelwuHJW0F3nsAY0tvdBSSBjA0YWNMRiopXmRD2j3o5GgKOunMtNUgqOR4UMoHUj0az2xicCbx6Lrd4WXOdN4VfspQMMuekr4GOqUBiIhRNwOK984YcpXRr7uiwGrP%2B1rEVZaRri54rd3646w8O81LvbbO%2FP%2FBCx4epAhJ98RmaPdOi2ssFrsk30iDy36OW3%2FdDcY0dE3NLoArU0RzU5scuGLqcbTljdZ9QxptpYzYVRd3yKPCeBA6%2BNgkm63HdSZy0pPYR8BhUxCDzpICFEDLRFw8KBTmGUYROBZajBfKmD9F6DeZqpRe2Pl%2F8rcFcmes&X-Amz-Signature=c8dbf09a836355ff5b6cc4a80e1284a95e45df981fce35d4b2527a58c5663e32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
