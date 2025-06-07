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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIRFF3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgCZyz%2Fb%2FlKw4YatNmmm1NNdgc2QUFu4O2FyZmMibdfgIgR07zrGMG1Mh5udo%2BUPDDB8hzxrg5xdkhDGcg74G3OEcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF5zvjIwNTAmxtPvISrcAz8QjFvuPtIFAQnlsALT4TXmBdXiMlBsbqmW9n0lnWBPC%2BsStBhQkQfRDCg0VtMsbSL4XIcDglunk8AQUqYqUfnWi2dH4v6iPTD%2FTXx08V1f64gfkKraBl5dQYo9mm%2Fmy2Rjv0wXHKSz7BzSZnO4klXUzhQryFmRHvImu0zK6HR213rdse%2BUsIlTrI%2FH1Froh%2BHtNJLIgCRWCo6uvjGLtYRBvlSHO6AHn2RlYUtkjcXyhtFhvBDemhfsjURcaQR3i4CtYcbxEK4K7w1TWA3LgRmrdpGvd%2BExtiwEgtj5VteckeQl1Jn5o%2FCNI3QNdeUFjQ2tPq5onFHL%2BA%2BCQU1BB5ZvT87VNktsycdtr6G2Z4ph2vFBwyOHkHA4aIHWRdVk1Higosu7RAgfiSnmAUo9YXHoTduBGsc%2BF0lZwBGdimirM5Qli3a8KY6Q26ttx0xvedPPbuZUdGuJEd1AR92KUs8MTP3yYHl5yuBkn0BIaNVqahiwNyW6WbQosY39ODRQ29QS6DwhuyVq%2FgcT4kFu5nKryO%2BE%2F28B5e00YuIJab0HgqGmU0dITgeGbjRxTIVnMaoqow%2B3%2Bvts6j0lAOPPh0vv%2BviDV6NNxsDxXaG%2F4QCKTuzdq2YutIVR%2F9M3MKqBkcIGOqUBAB98itLrhkL0WFRLNDaH5Heg%2Fdspl2nIuK185dI6oJgwaQcWozsMdjpT8yI8Z9HHIt91sO%2FgQ2JDRVEBuomGX0m6tkeBaXMRTpCz5HldIl7yPozoIZtlAYjaFFpEri5GkXon%2FmxTJIf%2FG4mAub54U0AEaRMEePlsSeaqmb4XbcDjCRUAjWjGPyZpBY%2FQX%2FPu%2FMoaePUXNQt8TvnuLmP7WlyiGsFm&X-Amz-Signature=6ac986167f333b2349272f2b8bc3f5e6446a0c2b25c986d803095738dc7cac53&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIRFF3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgCZyz%2Fb%2FlKw4YatNmmm1NNdgc2QUFu4O2FyZmMibdfgIgR07zrGMG1Mh5udo%2BUPDDB8hzxrg5xdkhDGcg74G3OEcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF5zvjIwNTAmxtPvISrcAz8QjFvuPtIFAQnlsALT4TXmBdXiMlBsbqmW9n0lnWBPC%2BsStBhQkQfRDCg0VtMsbSL4XIcDglunk8AQUqYqUfnWi2dH4v6iPTD%2FTXx08V1f64gfkKraBl5dQYo9mm%2Fmy2Rjv0wXHKSz7BzSZnO4klXUzhQryFmRHvImu0zK6HR213rdse%2BUsIlTrI%2FH1Froh%2BHtNJLIgCRWCo6uvjGLtYRBvlSHO6AHn2RlYUtkjcXyhtFhvBDemhfsjURcaQR3i4CtYcbxEK4K7w1TWA3LgRmrdpGvd%2BExtiwEgtj5VteckeQl1Jn5o%2FCNI3QNdeUFjQ2tPq5onFHL%2BA%2BCQU1BB5ZvT87VNktsycdtr6G2Z4ph2vFBwyOHkHA4aIHWRdVk1Higosu7RAgfiSnmAUo9YXHoTduBGsc%2BF0lZwBGdimirM5Qli3a8KY6Q26ttx0xvedPPbuZUdGuJEd1AR92KUs8MTP3yYHl5yuBkn0BIaNVqahiwNyW6WbQosY39ODRQ29QS6DwhuyVq%2FgcT4kFu5nKryO%2BE%2F28B5e00YuIJab0HgqGmU0dITgeGbjRxTIVnMaoqow%2B3%2Bvts6j0lAOPPh0vv%2BviDV6NNxsDxXaG%2F4QCKTuzdq2YutIVR%2F9M3MKqBkcIGOqUBAB98itLrhkL0WFRLNDaH5Heg%2Fdspl2nIuK185dI6oJgwaQcWozsMdjpT8yI8Z9HHIt91sO%2FgQ2JDRVEBuomGX0m6tkeBaXMRTpCz5HldIl7yPozoIZtlAYjaFFpEri5GkXon%2FmxTJIf%2FG4mAub54U0AEaRMEePlsSeaqmb4XbcDjCRUAjWjGPyZpBY%2FQX%2FPu%2FMoaePUXNQt8TvnuLmP7WlyiGsFm&X-Amz-Signature=912d78aa12427b150b377cb9c58aebc104ae1e6f8a31f5007715b6dcb8ca4987&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIRFF3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgCZyz%2Fb%2FlKw4YatNmmm1NNdgc2QUFu4O2FyZmMibdfgIgR07zrGMG1Mh5udo%2BUPDDB8hzxrg5xdkhDGcg74G3OEcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF5zvjIwNTAmxtPvISrcAz8QjFvuPtIFAQnlsALT4TXmBdXiMlBsbqmW9n0lnWBPC%2BsStBhQkQfRDCg0VtMsbSL4XIcDglunk8AQUqYqUfnWi2dH4v6iPTD%2FTXx08V1f64gfkKraBl5dQYo9mm%2Fmy2Rjv0wXHKSz7BzSZnO4klXUzhQryFmRHvImu0zK6HR213rdse%2BUsIlTrI%2FH1Froh%2BHtNJLIgCRWCo6uvjGLtYRBvlSHO6AHn2RlYUtkjcXyhtFhvBDemhfsjURcaQR3i4CtYcbxEK4K7w1TWA3LgRmrdpGvd%2BExtiwEgtj5VteckeQl1Jn5o%2FCNI3QNdeUFjQ2tPq5onFHL%2BA%2BCQU1BB5ZvT87VNktsycdtr6G2Z4ph2vFBwyOHkHA4aIHWRdVk1Higosu7RAgfiSnmAUo9YXHoTduBGsc%2BF0lZwBGdimirM5Qli3a8KY6Q26ttx0xvedPPbuZUdGuJEd1AR92KUs8MTP3yYHl5yuBkn0BIaNVqahiwNyW6WbQosY39ODRQ29QS6DwhuyVq%2FgcT4kFu5nKryO%2BE%2F28B5e00YuIJab0HgqGmU0dITgeGbjRxTIVnMaoqow%2B3%2Bvts6j0lAOPPh0vv%2BviDV6NNxsDxXaG%2F4QCKTuzdq2YutIVR%2F9M3MKqBkcIGOqUBAB98itLrhkL0WFRLNDaH5Heg%2Fdspl2nIuK185dI6oJgwaQcWozsMdjpT8yI8Z9HHIt91sO%2FgQ2JDRVEBuomGX0m6tkeBaXMRTpCz5HldIl7yPozoIZtlAYjaFFpEri5GkXon%2FmxTJIf%2FG4mAub54U0AEaRMEePlsSeaqmb4XbcDjCRUAjWjGPyZpBY%2FQX%2FPu%2FMoaePUXNQt8TvnuLmP7WlyiGsFm&X-Amz-Signature=05626643f694f3272d7a6c16aa2f999742224f93e5d8af6886f8776551bb3aae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
