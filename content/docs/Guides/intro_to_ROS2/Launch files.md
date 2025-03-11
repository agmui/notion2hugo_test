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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663267MP2T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIES49zCdUot16PGPQzvUhulLoW%2Fjii6BAiQVWpYEp0utAiEAoxgj04IcOGoEFWpe1QVaF%2F8sFuBU7S4mT%2F7SegxhT9IqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAopt6Sxd5wD6A%2BtVircA57c9y0uzq%2FMUrljDX08CxbwrXVHjGD462MAcWGasq6KB42bhAAoCuOaRw7XAcFOpB0Lvi6uZjScaORKT5zbZcuYoH6tZ12d67c7UHa96454imcEFKv2MhljMTGilonn%2FkNB0YeqHtvTUY5lpmBdGxkDKSL%2Bx9JffkTGAqG0XJnI1mXI9uiZrtBtAWnLxetX52YZTv0R1FzBfK9VMC6cbphFa4u%2FvTPVhoKGtQtOFmvAND5%2BZCwUNu7K5YlJb%2BLWFbqkT3gejYo%2BWa%2B3a73l%2BhrqR2iybgaDQK566iMcTpfgjbzWnD3uabfNph4u6U3yAEZr5w2ydhsBq7FLdxdCRNO4T7OYT4qg5iaUnpNKvnBzLDWzDxzG8A%2Fe8U8%2BjkDwwiZShibL4PudGZKXO6P%2Fs0l6YBSVFBOVukh5CTiiGEcR3SXfEa0XLZ5pgEIp%2FZ%2BixH77fUMqeCSqK9A09LLW%2ByZ0YXT5sJVqnMDfZaEHWigc57k%2BJpgmSxeuJGFpnj7l0aDQDkMdnDW369VdHenGB%2BD%2FRmYUDPcbdk5XasBC7fKugfvSv3Bc3ebCgLrOgLUnQk7QxXWZSolHZ1PI%2F5IT0INb3CaqPGlbG6yLS40Y6UJHNrNT0QCvXzkDdpOaMKHzwb4GOqUBUP1AlD4x0NXM9Oa1ehEnQ64TMTsVgxGAZ04lYOemQXic6razb%2F6pE3mzjptpVyFFQZRv3N2qGrYUtz%2BglRbHOk0kjxqryOF62pqghVPYHxYOF7H%2F0pA4r3VtlYEFFjsGzN3slkyy4hTM4avhOeQswdByWLAf%2BTUj%2Fowbpskzy9AV0krakpvcYtdyOwjJpi7KpypFlYprrw%2FULlMIhuLA1FFg44rS&X-Amz-Signature=af0e355fa768a67a88b621b632a1946cfe63f25be3b78fe39bad119e568d3ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663267MP2T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIES49zCdUot16PGPQzvUhulLoW%2Fjii6BAiQVWpYEp0utAiEAoxgj04IcOGoEFWpe1QVaF%2F8sFuBU7S4mT%2F7SegxhT9IqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAopt6Sxd5wD6A%2BtVircA57c9y0uzq%2FMUrljDX08CxbwrXVHjGD462MAcWGasq6KB42bhAAoCuOaRw7XAcFOpB0Lvi6uZjScaORKT5zbZcuYoH6tZ12d67c7UHa96454imcEFKv2MhljMTGilonn%2FkNB0YeqHtvTUY5lpmBdGxkDKSL%2Bx9JffkTGAqG0XJnI1mXI9uiZrtBtAWnLxetX52YZTv0R1FzBfK9VMC6cbphFa4u%2FvTPVhoKGtQtOFmvAND5%2BZCwUNu7K5YlJb%2BLWFbqkT3gejYo%2BWa%2B3a73l%2BhrqR2iybgaDQK566iMcTpfgjbzWnD3uabfNph4u6U3yAEZr5w2ydhsBq7FLdxdCRNO4T7OYT4qg5iaUnpNKvnBzLDWzDxzG8A%2Fe8U8%2BjkDwwiZShibL4PudGZKXO6P%2Fs0l6YBSVFBOVukh5CTiiGEcR3SXfEa0XLZ5pgEIp%2FZ%2BixH77fUMqeCSqK9A09LLW%2ByZ0YXT5sJVqnMDfZaEHWigc57k%2BJpgmSxeuJGFpnj7l0aDQDkMdnDW369VdHenGB%2BD%2FRmYUDPcbdk5XasBC7fKugfvSv3Bc3ebCgLrOgLUnQk7QxXWZSolHZ1PI%2F5IT0INb3CaqPGlbG6yLS40Y6UJHNrNT0QCvXzkDdpOaMKHzwb4GOqUBUP1AlD4x0NXM9Oa1ehEnQ64TMTsVgxGAZ04lYOemQXic6razb%2F6pE3mzjptpVyFFQZRv3N2qGrYUtz%2BglRbHOk0kjxqryOF62pqghVPYHxYOF7H%2F0pA4r3VtlYEFFjsGzN3slkyy4hTM4avhOeQswdByWLAf%2BTUj%2Fowbpskzy9AV0krakpvcYtdyOwjJpi7KpypFlYprrw%2FULlMIhuLA1FFg44rS&X-Amz-Signature=85f0ae3ce8e9407cf09a4275fe4725a94757550c09a0051509adc46797374c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663267MP2T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIES49zCdUot16PGPQzvUhulLoW%2Fjii6BAiQVWpYEp0utAiEAoxgj04IcOGoEFWpe1QVaF%2F8sFuBU7S4mT%2F7SegxhT9IqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAopt6Sxd5wD6A%2BtVircA57c9y0uzq%2FMUrljDX08CxbwrXVHjGD462MAcWGasq6KB42bhAAoCuOaRw7XAcFOpB0Lvi6uZjScaORKT5zbZcuYoH6tZ12d67c7UHa96454imcEFKv2MhljMTGilonn%2FkNB0YeqHtvTUY5lpmBdGxkDKSL%2Bx9JffkTGAqG0XJnI1mXI9uiZrtBtAWnLxetX52YZTv0R1FzBfK9VMC6cbphFa4u%2FvTPVhoKGtQtOFmvAND5%2BZCwUNu7K5YlJb%2BLWFbqkT3gejYo%2BWa%2B3a73l%2BhrqR2iybgaDQK566iMcTpfgjbzWnD3uabfNph4u6U3yAEZr5w2ydhsBq7FLdxdCRNO4T7OYT4qg5iaUnpNKvnBzLDWzDxzG8A%2Fe8U8%2BjkDwwiZShibL4PudGZKXO6P%2Fs0l6YBSVFBOVukh5CTiiGEcR3SXfEa0XLZ5pgEIp%2FZ%2BixH77fUMqeCSqK9A09LLW%2ByZ0YXT5sJVqnMDfZaEHWigc57k%2BJpgmSxeuJGFpnj7l0aDQDkMdnDW369VdHenGB%2BD%2FRmYUDPcbdk5XasBC7fKugfvSv3Bc3ebCgLrOgLUnQk7QxXWZSolHZ1PI%2F5IT0INb3CaqPGlbG6yLS40Y6UJHNrNT0QCvXzkDdpOaMKHzwb4GOqUBUP1AlD4x0NXM9Oa1ehEnQ64TMTsVgxGAZ04lYOemQXic6razb%2F6pE3mzjptpVyFFQZRv3N2qGrYUtz%2BglRbHOk0kjxqryOF62pqghVPYHxYOF7H%2F0pA4r3VtlYEFFjsGzN3slkyy4hTM4avhOeQswdByWLAf%2BTUj%2Fowbpskzy9AV0krakpvcYtdyOwjJpi7KpypFlYprrw%2FULlMIhuLA1FFg44rS&X-Amz-Signature=48f3568722278a59b30d9e2a1cbb98cb5f18bc47975e525a64e616aa0ed02d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
