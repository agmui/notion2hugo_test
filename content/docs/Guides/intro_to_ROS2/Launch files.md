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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7QSBS4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEzDnHEqYSgGDTxQcd4C3un6%2BGODmvHiRA5W3itUQstTAiAXfAvN%2FfAUZLCoy5%2FlZUYq0RVdJTROTPpOWAOgdpSmJir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMc2ZuuaJR4hae895IKtwDSxKlOXSybtUqqMZ1aRi8%2B3IKdw8r7C6zMXsX3yDDmALbA4eUmTdsqjBQgDdQz73XJErKxC3FZcX9B7VjM0FWf6GQV1dbp59WuITry0rnZ4XmdLPbKwrBEKG64RKYyW%2BELyAKBcDM%2F85TmdCasU3omp4B45B4E6lLzPjC%2Bju0BsQgrjemqcShBYrDlRw8OMGTKnbRV0VT7REkK6MEguwGqPsJFOthhr%2Bmzy%2FWxOZCRfv35E4BLuhyYzOwb7eRXarkBmrdHf1DUXEkySSHDcA0SE8fNtNFuouMreKOBB58VXFEO7xXZ7X00zsuxQS8SnO5kQ65V4lIdD3%2BQBzMCsAePY1DhUWapEydBAYlX%2FlplVNQ9aieNCNlRkwr1mri9jI1wwR6jCtZGFrLn7Yl10jFvXg6ewVarBonfygX5Z7xUWN%2B7so6ovo1WS1YGuR4UzB%2Flr%2FzDtqAhg9DCwFqdPjLFry8B%2FPXX%2B4GBdnTR7xBwOGYcgIE3ehQa5k4hqGdFuWHLFO9SLvtCblOnMW0YlC5cpb4Q9dlmDf8uOfsSOKz1ow7Uen69XbLB1jL99Ae2CDi514KOlRWVWz8MYg%2B8tgs7R9cNPudtx3uq%2BFWUsYam5aeFxsgcAbu1VbM3N4ww4WJvQY6pgET88cNOz1EwRvTa5MQuCKAa87m87FhVsqQR51QAoXd8qjSLimW8lje8saJ0m5cFEzc4ra7Kh0R1mUGHcXTZRKNnlPBDNOYrPoCaicn%2FNyzRaWfXwB2mZcibF0GVIBMmTj2Xy%2Bk%2Bf9zgqcTunV0WQrv0aFO%2BJDeA%2Fr15k8UNt9A%2FGCMUptxdBxJWD97YFFZ7TTUWtF6HcTZOjNDhEBNDHYcM2d1cHZI&X-Amz-Signature=94520243917cd382b90f3cf9201701ee0e609b38256185f3e15194a5825897c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7QSBS4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEzDnHEqYSgGDTxQcd4C3un6%2BGODmvHiRA5W3itUQstTAiAXfAvN%2FfAUZLCoy5%2FlZUYq0RVdJTROTPpOWAOgdpSmJir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMc2ZuuaJR4hae895IKtwDSxKlOXSybtUqqMZ1aRi8%2B3IKdw8r7C6zMXsX3yDDmALbA4eUmTdsqjBQgDdQz73XJErKxC3FZcX9B7VjM0FWf6GQV1dbp59WuITry0rnZ4XmdLPbKwrBEKG64RKYyW%2BELyAKBcDM%2F85TmdCasU3omp4B45B4E6lLzPjC%2Bju0BsQgrjemqcShBYrDlRw8OMGTKnbRV0VT7REkK6MEguwGqPsJFOthhr%2Bmzy%2FWxOZCRfv35E4BLuhyYzOwb7eRXarkBmrdHf1DUXEkySSHDcA0SE8fNtNFuouMreKOBB58VXFEO7xXZ7X00zsuxQS8SnO5kQ65V4lIdD3%2BQBzMCsAePY1DhUWapEydBAYlX%2FlplVNQ9aieNCNlRkwr1mri9jI1wwR6jCtZGFrLn7Yl10jFvXg6ewVarBonfygX5Z7xUWN%2B7so6ovo1WS1YGuR4UzB%2Flr%2FzDtqAhg9DCwFqdPjLFry8B%2FPXX%2B4GBdnTR7xBwOGYcgIE3ehQa5k4hqGdFuWHLFO9SLvtCblOnMW0YlC5cpb4Q9dlmDf8uOfsSOKz1ow7Uen69XbLB1jL99Ae2CDi514KOlRWVWz8MYg%2B8tgs7R9cNPudtx3uq%2BFWUsYam5aeFxsgcAbu1VbM3N4ww4WJvQY6pgET88cNOz1EwRvTa5MQuCKAa87m87FhVsqQR51QAoXd8qjSLimW8lje8saJ0m5cFEzc4ra7Kh0R1mUGHcXTZRKNnlPBDNOYrPoCaicn%2FNyzRaWfXwB2mZcibF0GVIBMmTj2Xy%2Bk%2Bf9zgqcTunV0WQrv0aFO%2BJDeA%2Fr15k8UNt9A%2FGCMUptxdBxJWD97YFFZ7TTUWtF6HcTZOjNDhEBNDHYcM2d1cHZI&X-Amz-Signature=00ae5e34dbbcc5268ef1b2e649fe11cc4dc5868a933632e4c5458f68f0efb04c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7QSBS4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEzDnHEqYSgGDTxQcd4C3un6%2BGODmvHiRA5W3itUQstTAiAXfAvN%2FfAUZLCoy5%2FlZUYq0RVdJTROTPpOWAOgdpSmJir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMc2ZuuaJR4hae895IKtwDSxKlOXSybtUqqMZ1aRi8%2B3IKdw8r7C6zMXsX3yDDmALbA4eUmTdsqjBQgDdQz73XJErKxC3FZcX9B7VjM0FWf6GQV1dbp59WuITry0rnZ4XmdLPbKwrBEKG64RKYyW%2BELyAKBcDM%2F85TmdCasU3omp4B45B4E6lLzPjC%2Bju0BsQgrjemqcShBYrDlRw8OMGTKnbRV0VT7REkK6MEguwGqPsJFOthhr%2Bmzy%2FWxOZCRfv35E4BLuhyYzOwb7eRXarkBmrdHf1DUXEkySSHDcA0SE8fNtNFuouMreKOBB58VXFEO7xXZ7X00zsuxQS8SnO5kQ65V4lIdD3%2BQBzMCsAePY1DhUWapEydBAYlX%2FlplVNQ9aieNCNlRkwr1mri9jI1wwR6jCtZGFrLn7Yl10jFvXg6ewVarBonfygX5Z7xUWN%2B7so6ovo1WS1YGuR4UzB%2Flr%2FzDtqAhg9DCwFqdPjLFry8B%2FPXX%2B4GBdnTR7xBwOGYcgIE3ehQa5k4hqGdFuWHLFO9SLvtCblOnMW0YlC5cpb4Q9dlmDf8uOfsSOKz1ow7Uen69XbLB1jL99Ae2CDi514KOlRWVWz8MYg%2B8tgs7R9cNPudtx3uq%2BFWUsYam5aeFxsgcAbu1VbM3N4ww4WJvQY6pgET88cNOz1EwRvTa5MQuCKAa87m87FhVsqQR51QAoXd8qjSLimW8lje8saJ0m5cFEzc4ra7Kh0R1mUGHcXTZRKNnlPBDNOYrPoCaicn%2FNyzRaWfXwB2mZcibF0GVIBMmTj2Xy%2Bk%2Bf9zgqcTunV0WQrv0aFO%2BJDeA%2Fr15k8UNt9A%2FGCMUptxdBxJWD97YFFZ7TTUWtF6HcTZOjNDhEBNDHYcM2d1cHZI&X-Amz-Signature=ea996ab2ab5ce4b78ebe7eb252ce81811328cc8b1a2129bacc53d9177cc8195b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
