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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYN4J7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzkVMHtlcmfuDYoHaZ9ceKxMsIdfUH8MOC8F3E592I6AIgVV0vzlYd2ety58XdxPrfxHVHax7EX6tHNyKe7jzFr64q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqVdDp9x%2Borrnt77ircAxzoCiAuiH94yuiMS%2F4ZSwEtBlexTLSrj7GV62URe1y7ikVOKbQ62HopNCoRl16si44s3zx3gRizcWJAGgBkm5pCtgeR%2Bg8ZTDXb3KxUHnTzjA%2BGiAp52mCk1PCBq54qzH%2F5MAzdZeSi%2FZTbTtsaxqSMWXjBUjM9hpGGtn8m%2BE%2BwXtWCS%2BDC37k%2FGUdHukDBl6wJf9u9i9Zo0AtI7V9ZoRNWztJKs5n7dDicNnWAm5pXc0VXdr4wSt6Pecv9ThygBQ8Eqe7VTzZGbxJe%2FnoZCwkPz7Sv4bkWxawRx%2FgcmfMDxtFbjwAk7AjuWWTewwI786Q0TNOkBrvs28oR4BTWaYGbrkpdZA1xhKO6nfsXgSsaP9lp0sHkQ3d7%2BF4D5fZT8UwUcf1raQ6w3mEHJXWF%2BqorimOg0j3NhzB3GIxMXhKLkkluhyk32DszK1j6aY3kYwNvvmJ0ClyubU6pwVEiKqPPCXfs6WtPAm8kBS6cHg76AcOdM1CGk5%2F3GYG4CiFze%2BXlI1DfS2YPn6Qv281BZEjMLOWCxU98Jv7d7nwLlmRbX6oDjg5ba344alt363q7hp1%2BzKq5ScYWenEBw7qeTkhGfqz%2B8G00fNHORHIQgxarGxVMDndz5Kpqo5coMOrenL8GOqUB7uIQRsU6BCFPhZ7d0zja%2B04KEru%2FseTolSAkvLjmreNUwqp4aQbCduUJa3SlswOpc5RhEXZoUj09RyGxxlaltGJUKQgnV2Z5us6QjKeO1ROik%2Bc5nJBLgs%2BjgWb5pSbebba6Gwvy9wM1l%2BTDqhZqaFLI5m16a02lV9fyvew5Rk69Zz8aa9lZ64UAWyznsVnYwAjoFEnmNGhleIlkq2AGJDLqWUuH&X-Amz-Signature=3c1d21a6722df0525308af85dd3485a1c98b143cb3cf1edda2492d7b4201862b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYN4J7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzkVMHtlcmfuDYoHaZ9ceKxMsIdfUH8MOC8F3E592I6AIgVV0vzlYd2ety58XdxPrfxHVHax7EX6tHNyKe7jzFr64q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqVdDp9x%2Borrnt77ircAxzoCiAuiH94yuiMS%2F4ZSwEtBlexTLSrj7GV62URe1y7ikVOKbQ62HopNCoRl16si44s3zx3gRizcWJAGgBkm5pCtgeR%2Bg8ZTDXb3KxUHnTzjA%2BGiAp52mCk1PCBq54qzH%2F5MAzdZeSi%2FZTbTtsaxqSMWXjBUjM9hpGGtn8m%2BE%2BwXtWCS%2BDC37k%2FGUdHukDBl6wJf9u9i9Zo0AtI7V9ZoRNWztJKs5n7dDicNnWAm5pXc0VXdr4wSt6Pecv9ThygBQ8Eqe7VTzZGbxJe%2FnoZCwkPz7Sv4bkWxawRx%2FgcmfMDxtFbjwAk7AjuWWTewwI786Q0TNOkBrvs28oR4BTWaYGbrkpdZA1xhKO6nfsXgSsaP9lp0sHkQ3d7%2BF4D5fZT8UwUcf1raQ6w3mEHJXWF%2BqorimOg0j3NhzB3GIxMXhKLkkluhyk32DszK1j6aY3kYwNvvmJ0ClyubU6pwVEiKqPPCXfs6WtPAm8kBS6cHg76AcOdM1CGk5%2F3GYG4CiFze%2BXlI1DfS2YPn6Qv281BZEjMLOWCxU98Jv7d7nwLlmRbX6oDjg5ba344alt363q7hp1%2BzKq5ScYWenEBw7qeTkhGfqz%2B8G00fNHORHIQgxarGxVMDndz5Kpqo5coMOrenL8GOqUB7uIQRsU6BCFPhZ7d0zja%2B04KEru%2FseTolSAkvLjmreNUwqp4aQbCduUJa3SlswOpc5RhEXZoUj09RyGxxlaltGJUKQgnV2Z5us6QjKeO1ROik%2Bc5nJBLgs%2BjgWb5pSbebba6Gwvy9wM1l%2BTDqhZqaFLI5m16a02lV9fyvew5Rk69Zz8aa9lZ64UAWyznsVnYwAjoFEnmNGhleIlkq2AGJDLqWUuH&X-Amz-Signature=e6bd6ad0076f881e1cb359529f0e7f83365b8c8e1c15a98e1c4d3b941e0d0631&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYN4J7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzkVMHtlcmfuDYoHaZ9ceKxMsIdfUH8MOC8F3E592I6AIgVV0vzlYd2ety58XdxPrfxHVHax7EX6tHNyKe7jzFr64q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqVdDp9x%2Borrnt77ircAxzoCiAuiH94yuiMS%2F4ZSwEtBlexTLSrj7GV62URe1y7ikVOKbQ62HopNCoRl16si44s3zx3gRizcWJAGgBkm5pCtgeR%2Bg8ZTDXb3KxUHnTzjA%2BGiAp52mCk1PCBq54qzH%2F5MAzdZeSi%2FZTbTtsaxqSMWXjBUjM9hpGGtn8m%2BE%2BwXtWCS%2BDC37k%2FGUdHukDBl6wJf9u9i9Zo0AtI7V9ZoRNWztJKs5n7dDicNnWAm5pXc0VXdr4wSt6Pecv9ThygBQ8Eqe7VTzZGbxJe%2FnoZCwkPz7Sv4bkWxawRx%2FgcmfMDxtFbjwAk7AjuWWTewwI786Q0TNOkBrvs28oR4BTWaYGbrkpdZA1xhKO6nfsXgSsaP9lp0sHkQ3d7%2BF4D5fZT8UwUcf1raQ6w3mEHJXWF%2BqorimOg0j3NhzB3GIxMXhKLkkluhyk32DszK1j6aY3kYwNvvmJ0ClyubU6pwVEiKqPPCXfs6WtPAm8kBS6cHg76AcOdM1CGk5%2F3GYG4CiFze%2BXlI1DfS2YPn6Qv281BZEjMLOWCxU98Jv7d7nwLlmRbX6oDjg5ba344alt363q7hp1%2BzKq5ScYWenEBw7qeTkhGfqz%2B8G00fNHORHIQgxarGxVMDndz5Kpqo5coMOrenL8GOqUB7uIQRsU6BCFPhZ7d0zja%2B04KEru%2FseTolSAkvLjmreNUwqp4aQbCduUJa3SlswOpc5RhEXZoUj09RyGxxlaltGJUKQgnV2Z5us6QjKeO1ROik%2Bc5nJBLgs%2BjgWb5pSbebba6Gwvy9wM1l%2BTDqhZqaFLI5m16a02lV9fyvew5Rk69Zz8aa9lZ64UAWyznsVnYwAjoFEnmNGhleIlkq2AGJDLqWUuH&X-Amz-Signature=cfc692f28acdc2aff6bce2eed8c7ebd2ac557cef5b3c0012cacdd453e260ea59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
