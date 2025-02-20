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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3EMEYW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BwkMBfc9wqVBURLPcoTyqiE9xhGAyc1Y%2FmSoeN3zoOQIgBMJfPuEEoXMWpYfawjUd%2BoZy18fr%2Bwq0iGEO4a1N7iwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmDfJoOCn16mIHM%2FircA5%2BMVU8Pyrkx0GhKMoCMjPwZyoPYA0LVSC77DXDEEMF%2FVn%2BmHGiKLCe5awr0NN8Za2znW96dh1abEBhWJYJhOYa9EGdA%2Fe5ssahDG1D9d2xUsNaGYv74ALwY2D9%2FoQXiJuLi4WtNDBbfj5B1pxcLpSaIJoyOhyMhc1L7WRQC1g8waqzV50Xc7MWS8aLYUsbxADWIDXGyHnWkpJbUkd53LKNkua3HkHEQOMB5UcpedivLCeraMQBftgCSOdFawrd1ie2IXSjPknrTVAJIsI2Yx3gCe11NoFsoNGo1N9eeAhUElOOmGcQy%2BniY2649%2F1mUzB%2FG9oRYJsZDY1Fz8gd6dIa%2FSBTW087i46se2wWIUBxtQpTtxm%2BPrEFhMXa1vHPVF%2FudD1lu832EmkgiqcHrahkwy7tt2zaA5o%2BEMdKXaTWi%2BgmtfHyRvcWjPmXkM4ZR3s3I1LhUakgfHH4ukRozbe%2FUArhNC2Oso%2BeVQ7ENakLFhP%2Fm0kMqwwehMnkYCmwZWRABGLIWvtdUZ3ymvC0YR9x2rqx5jpoPiO7vuoNofAgLu%2BQBn7Eld8qIBWzvgOV8cySC8CTl2R7K%2BYaji4Y%2F51CaDFu%2BQX85GY5ysbxZ%2F7AU51TVZ2DRdmJYobVYMOD43L0GOqUBzuGTbAxo7w%2F%2BT2p68UynDgG%2F3YuDYrROH6j1O%2F6MhGF3qYIHz40XdT7UDxjdZMdO%2FNU2UmosAzfH1g%2Ffx2C8v8Qu4xuoESfvryHTwR%2BpjC189Dw9mrOkpfVw%2FT3YpgQVNTu5UjaHpS4O4mk1lJ7OSWj7VMxPrXTt3N5xr7St2MXOe686r5Nw9N1xvDqtvUhl2cUmQJs9IM9GVRgVKcHVzB%2F3%2FgZf&X-Amz-Signature=60193c06229bfb5d760d3d3d6b15f5950227c94f2dea7cadd6ead203ab92bc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3EMEYW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BwkMBfc9wqVBURLPcoTyqiE9xhGAyc1Y%2FmSoeN3zoOQIgBMJfPuEEoXMWpYfawjUd%2BoZy18fr%2Bwq0iGEO4a1N7iwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmDfJoOCn16mIHM%2FircA5%2BMVU8Pyrkx0GhKMoCMjPwZyoPYA0LVSC77DXDEEMF%2FVn%2BmHGiKLCe5awr0NN8Za2znW96dh1abEBhWJYJhOYa9EGdA%2Fe5ssahDG1D9d2xUsNaGYv74ALwY2D9%2FoQXiJuLi4WtNDBbfj5B1pxcLpSaIJoyOhyMhc1L7WRQC1g8waqzV50Xc7MWS8aLYUsbxADWIDXGyHnWkpJbUkd53LKNkua3HkHEQOMB5UcpedivLCeraMQBftgCSOdFawrd1ie2IXSjPknrTVAJIsI2Yx3gCe11NoFsoNGo1N9eeAhUElOOmGcQy%2BniY2649%2F1mUzB%2FG9oRYJsZDY1Fz8gd6dIa%2FSBTW087i46se2wWIUBxtQpTtxm%2BPrEFhMXa1vHPVF%2FudD1lu832EmkgiqcHrahkwy7tt2zaA5o%2BEMdKXaTWi%2BgmtfHyRvcWjPmXkM4ZR3s3I1LhUakgfHH4ukRozbe%2FUArhNC2Oso%2BeVQ7ENakLFhP%2Fm0kMqwwehMnkYCmwZWRABGLIWvtdUZ3ymvC0YR9x2rqx5jpoPiO7vuoNofAgLu%2BQBn7Eld8qIBWzvgOV8cySC8CTl2R7K%2BYaji4Y%2F51CaDFu%2BQX85GY5ysbxZ%2F7AU51TVZ2DRdmJYobVYMOD43L0GOqUBzuGTbAxo7w%2F%2BT2p68UynDgG%2F3YuDYrROH6j1O%2F6MhGF3qYIHz40XdT7UDxjdZMdO%2FNU2UmosAzfH1g%2Ffx2C8v8Qu4xuoESfvryHTwR%2BpjC189Dw9mrOkpfVw%2FT3YpgQVNTu5UjaHpS4O4mk1lJ7OSWj7VMxPrXTt3N5xr7St2MXOe686r5Nw9N1xvDqtvUhl2cUmQJs9IM9GVRgVKcHVzB%2F3%2FgZf&X-Amz-Signature=47bb8b4daf9ce553660c5ab10c83dddd0689229cd8f030bfa9fd9f59187ad677&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3EMEYW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BwkMBfc9wqVBURLPcoTyqiE9xhGAyc1Y%2FmSoeN3zoOQIgBMJfPuEEoXMWpYfawjUd%2BoZy18fr%2Bwq0iGEO4a1N7iwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmDfJoOCn16mIHM%2FircA5%2BMVU8Pyrkx0GhKMoCMjPwZyoPYA0LVSC77DXDEEMF%2FVn%2BmHGiKLCe5awr0NN8Za2znW96dh1abEBhWJYJhOYa9EGdA%2Fe5ssahDG1D9d2xUsNaGYv74ALwY2D9%2FoQXiJuLi4WtNDBbfj5B1pxcLpSaIJoyOhyMhc1L7WRQC1g8waqzV50Xc7MWS8aLYUsbxADWIDXGyHnWkpJbUkd53LKNkua3HkHEQOMB5UcpedivLCeraMQBftgCSOdFawrd1ie2IXSjPknrTVAJIsI2Yx3gCe11NoFsoNGo1N9eeAhUElOOmGcQy%2BniY2649%2F1mUzB%2FG9oRYJsZDY1Fz8gd6dIa%2FSBTW087i46se2wWIUBxtQpTtxm%2BPrEFhMXa1vHPVF%2FudD1lu832EmkgiqcHrahkwy7tt2zaA5o%2BEMdKXaTWi%2BgmtfHyRvcWjPmXkM4ZR3s3I1LhUakgfHH4ukRozbe%2FUArhNC2Oso%2BeVQ7ENakLFhP%2Fm0kMqwwehMnkYCmwZWRABGLIWvtdUZ3ymvC0YR9x2rqx5jpoPiO7vuoNofAgLu%2BQBn7Eld8qIBWzvgOV8cySC8CTl2R7K%2BYaji4Y%2F51CaDFu%2BQX85GY5ysbxZ%2F7AU51TVZ2DRdmJYobVYMOD43L0GOqUBzuGTbAxo7w%2F%2BT2p68UynDgG%2F3YuDYrROH6j1O%2F6MhGF3qYIHz40XdT7UDxjdZMdO%2FNU2UmosAzfH1g%2Ffx2C8v8Qu4xuoESfvryHTwR%2BpjC189Dw9mrOkpfVw%2FT3YpgQVNTu5UjaHpS4O4mk1lJ7OSWj7VMxPrXTt3N5xr7St2MXOe686r5Nw9N1xvDqtvUhl2cUmQJs9IM9GVRgVKcHVzB%2F3%2FgZf&X-Amz-Signature=e81ce1b22d0883f9ee2da2ea91d1a8f9d2a011c78d9cc1054145a3f566833e77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
