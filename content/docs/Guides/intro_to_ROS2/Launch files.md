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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7X5EZC%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCGj7Pvzx%2B%2F7Pfopt52exwDtWtgbBuFw44Ps%2F5CoJLyUgIgBO5KUMvthfyzMxI0W%2FDa0VIFxdtfO96%2F9%2B647tkh6lQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHR9Yb4j01mPj%2FP2lyrcA9z8PYOLtD2SlmLWHp4SkDiVX9NNOj471Jw52hnWrOSZ%2FIH6ATmx1v4mz8FcZEi5zskqACXMpgcQ6uxduIGZ761Aavd60zWgAWTRLbgvH0MG%2FbUkcycdSOp8C8S8e1zt92wp4a%2B7lpT2M3Ud5x3IH%2BJq8UkxVBsk5e38aOtbKOQf9dYyrRRR4C1oR8z6%2BOvB%2BTIcfhXAnzI01R%2FBM0E4PgIGYmHqGiUcC7x4fZ%2FN6tjFNDL2zrmEcw73HRKhWWLdkfuaCiy73SGqb%2BovxtNbQFZOTomV9w09tx%2FdyDdriRxo%2B1IaYP6XEgZfB0S2BWigotOZkuYzMmG6tOh8xn49iDq34Qi67JAFx8i8jZtq7mtFkPE4NBCTY7OPTm6KbmPwnYPAQH6TTT0q%2FcCgTw9x38zzyqwBf6N2EP8r%2FVtQlHunCkvc8sANHEi%2Fi6z6qHnbe7pHz%2FGdzAsWK9yWx4zuetq9RA8Y8ZPe9skFWbLE2fwYewAec%2Fap%2FMiDizqvh5WE1KcbdIydODHCU0FPqUhBjFZVfTdo2oWtgzd5fj2kswrRrj5t5S%2BoaMDTfpHtrUdHEm3M8rxJODknYQy2dC8TtbhZ0wpSYDWlOtBuKaHdctELd5Q5o8AzcsGI0TKGMPuwwL0GOqUBPszPcMt2H4Kkw6BL3zh5eatfOu0pvAxprn5OzbRnsfXfGWXTxpPLg%2FD8yfRPAclIZbx0Sk43XTxO0f1GMPVcKQiQT04AN3738hgTTv7FA26ncO1PDRGMv2%2F5rppnnpm2vwG%2BX976zQeBLo%2F3A7l5v3hYlSIU83n3vkEAtxE73cL%2BaT7Xa4EvFkQ%2Bcxrm38XY%2BzgXZkL962XNSS3WLtGQlLTPN9TZ&X-Amz-Signature=3e585791993246e6de2c615c529ea301906a070046ae76a967e58f72212e48f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7X5EZC%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCGj7Pvzx%2B%2F7Pfopt52exwDtWtgbBuFw44Ps%2F5CoJLyUgIgBO5KUMvthfyzMxI0W%2FDa0VIFxdtfO96%2F9%2B647tkh6lQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHR9Yb4j01mPj%2FP2lyrcA9z8PYOLtD2SlmLWHp4SkDiVX9NNOj471Jw52hnWrOSZ%2FIH6ATmx1v4mz8FcZEi5zskqACXMpgcQ6uxduIGZ761Aavd60zWgAWTRLbgvH0MG%2FbUkcycdSOp8C8S8e1zt92wp4a%2B7lpT2M3Ud5x3IH%2BJq8UkxVBsk5e38aOtbKOQf9dYyrRRR4C1oR8z6%2BOvB%2BTIcfhXAnzI01R%2FBM0E4PgIGYmHqGiUcC7x4fZ%2FN6tjFNDL2zrmEcw73HRKhWWLdkfuaCiy73SGqb%2BovxtNbQFZOTomV9w09tx%2FdyDdriRxo%2B1IaYP6XEgZfB0S2BWigotOZkuYzMmG6tOh8xn49iDq34Qi67JAFx8i8jZtq7mtFkPE4NBCTY7OPTm6KbmPwnYPAQH6TTT0q%2FcCgTw9x38zzyqwBf6N2EP8r%2FVtQlHunCkvc8sANHEi%2Fi6z6qHnbe7pHz%2FGdzAsWK9yWx4zuetq9RA8Y8ZPe9skFWbLE2fwYewAec%2Fap%2FMiDizqvh5WE1KcbdIydODHCU0FPqUhBjFZVfTdo2oWtgzd5fj2kswrRrj5t5S%2BoaMDTfpHtrUdHEm3M8rxJODknYQy2dC8TtbhZ0wpSYDWlOtBuKaHdctELd5Q5o8AzcsGI0TKGMPuwwL0GOqUBPszPcMt2H4Kkw6BL3zh5eatfOu0pvAxprn5OzbRnsfXfGWXTxpPLg%2FD8yfRPAclIZbx0Sk43XTxO0f1GMPVcKQiQT04AN3738hgTTv7FA26ncO1PDRGMv2%2F5rppnnpm2vwG%2BX976zQeBLo%2F3A7l5v3hYlSIU83n3vkEAtxE73cL%2BaT7Xa4EvFkQ%2Bcxrm38XY%2BzgXZkL962XNSS3WLtGQlLTPN9TZ&X-Amz-Signature=1fa261cc475977d8db19007abb6d8153fe2bab083d78ccb6c623f39bf50403f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7X5EZC%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCGj7Pvzx%2B%2F7Pfopt52exwDtWtgbBuFw44Ps%2F5CoJLyUgIgBO5KUMvthfyzMxI0W%2FDa0VIFxdtfO96%2F9%2B647tkh6lQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHR9Yb4j01mPj%2FP2lyrcA9z8PYOLtD2SlmLWHp4SkDiVX9NNOj471Jw52hnWrOSZ%2FIH6ATmx1v4mz8FcZEi5zskqACXMpgcQ6uxduIGZ761Aavd60zWgAWTRLbgvH0MG%2FbUkcycdSOp8C8S8e1zt92wp4a%2B7lpT2M3Ud5x3IH%2BJq8UkxVBsk5e38aOtbKOQf9dYyrRRR4C1oR8z6%2BOvB%2BTIcfhXAnzI01R%2FBM0E4PgIGYmHqGiUcC7x4fZ%2FN6tjFNDL2zrmEcw73HRKhWWLdkfuaCiy73SGqb%2BovxtNbQFZOTomV9w09tx%2FdyDdriRxo%2B1IaYP6XEgZfB0S2BWigotOZkuYzMmG6tOh8xn49iDq34Qi67JAFx8i8jZtq7mtFkPE4NBCTY7OPTm6KbmPwnYPAQH6TTT0q%2FcCgTw9x38zzyqwBf6N2EP8r%2FVtQlHunCkvc8sANHEi%2Fi6z6qHnbe7pHz%2FGdzAsWK9yWx4zuetq9RA8Y8ZPe9skFWbLE2fwYewAec%2Fap%2FMiDizqvh5WE1KcbdIydODHCU0FPqUhBjFZVfTdo2oWtgzd5fj2kswrRrj5t5S%2BoaMDTfpHtrUdHEm3M8rxJODknYQy2dC8TtbhZ0wpSYDWlOtBuKaHdctELd5Q5o8AzcsGI0TKGMPuwwL0GOqUBPszPcMt2H4Kkw6BL3zh5eatfOu0pvAxprn5OzbRnsfXfGWXTxpPLg%2FD8yfRPAclIZbx0Sk43XTxO0f1GMPVcKQiQT04AN3738hgTTv7FA26ncO1PDRGMv2%2F5rppnnpm2vwG%2BX976zQeBLo%2F3A7l5v3hYlSIU83n3vkEAtxE73cL%2BaT7Xa4EvFkQ%2Bcxrm38XY%2BzgXZkL962XNSS3WLtGQlLTPN9TZ&X-Amz-Signature=95bfdb0c67858112afdf39c058d1ad75c419a3d5169112ea6b38777133cfb53c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
