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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5SIOC6O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDMQIzMPDTIqi43QMevwvjwJXPDmOyYU4DXqOOyorUq%2BwIgMg2eN0eY7JaJUldVTXTgS918hZUwr3jXsvuFbd48Dgsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPbuuWENKJEgjlM%2BHircAxhwPlYmpu2XfycqrHlSqsq6hQU5lK83wJhYLAeje%2Ff5NMFLbFSys4VeEMixjz%2Fqdq3JcYmKSFSg5wmTrFGTV6i9O1qjGTcTBG6x115%2BSQcv7%2Bts%2BlpyyCmkZ%2BkfMur%2BAt75Qitwl5HyE47XW4fnmiYXVrlGSUz7Yw%2Fy%2F68a8%2BI1uIOkKbzDNRK79KqFoOzlafY4ShASyDE3tqIsIkQpqWuLR7It%2F37u8qv1rnN8QUMUy5GmtraUKIQgnrws%2FiypdPjzbTRtXbveB3maiMCOryBcG9UFd6KwAL5EURBCHti1Cp9EQFFVM%2FduQE%2Fc%2BW6zR%2BK%2Bp4V4HAli8TA0yWOLYmCenuXnc%2BDGE%2FS1oePVLkwCPLvwvl3AxZWkvaySnlIx%2BNOl6HvHw2sl%2FnRrkz1F%2Bi27hzd%2FsCSIZek2eAYooGPBGxxSVn8RkKhKfhBTFDC0Hj6aSBq7itsQoelcublYVpCmpXGArhKkgq7sCIuYcJwNZ7BoB7QU9AU%2FMPMa3%2BuZGfF81G9Y6lnBGlP5Oqk2sadAai0aDRGwkQM8800h5lSicHa70AXDWXUfAKvz0F3dgF4sHC3dhfiON06%2Ff5rXFsU7rDNUf2cL%2FyDRVKlZnApi%2BQ6Um7655r18UO9aMKDimcMGOqUB0DNiSP%2FSrssaRdOnB8kqGmFBD8ZGDqociGP8LLNHUfQf8p3i%2BfpNdcNuyFS%2BRrgvzZY0bDHdtuqoY27WgoVNV3Spkxzdy3aQ6QbJ6lurKYqPa3pykB3boV%2FbFh%2FXlVhsr0hafWYMpVi0MntroAyXqO7iJ7pWnoL4xozgsQbhaubMrZ4ebmIRzkRBvQ%2BeUYd%2FqhjbxZdjBpzu6Gfvj9aFLZHEAKoK&X-Amz-Signature=454506deebc24695237de612b656c334f70997d3d7899e517728220873de3577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5SIOC6O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDMQIzMPDTIqi43QMevwvjwJXPDmOyYU4DXqOOyorUq%2BwIgMg2eN0eY7JaJUldVTXTgS918hZUwr3jXsvuFbd48Dgsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPbuuWENKJEgjlM%2BHircAxhwPlYmpu2XfycqrHlSqsq6hQU5lK83wJhYLAeje%2Ff5NMFLbFSys4VeEMixjz%2Fqdq3JcYmKSFSg5wmTrFGTV6i9O1qjGTcTBG6x115%2BSQcv7%2Bts%2BlpyyCmkZ%2BkfMur%2BAt75Qitwl5HyE47XW4fnmiYXVrlGSUz7Yw%2Fy%2F68a8%2BI1uIOkKbzDNRK79KqFoOzlafY4ShASyDE3tqIsIkQpqWuLR7It%2F37u8qv1rnN8QUMUy5GmtraUKIQgnrws%2FiypdPjzbTRtXbveB3maiMCOryBcG9UFd6KwAL5EURBCHti1Cp9EQFFVM%2FduQE%2Fc%2BW6zR%2BK%2Bp4V4HAli8TA0yWOLYmCenuXnc%2BDGE%2FS1oePVLkwCPLvwvl3AxZWkvaySnlIx%2BNOl6HvHw2sl%2FnRrkz1F%2Bi27hzd%2FsCSIZek2eAYooGPBGxxSVn8RkKhKfhBTFDC0Hj6aSBq7itsQoelcublYVpCmpXGArhKkgq7sCIuYcJwNZ7BoB7QU9AU%2FMPMa3%2BuZGfF81G9Y6lnBGlP5Oqk2sadAai0aDRGwkQM8800h5lSicHa70AXDWXUfAKvz0F3dgF4sHC3dhfiON06%2Ff5rXFsU7rDNUf2cL%2FyDRVKlZnApi%2BQ6Um7655r18UO9aMKDimcMGOqUB0DNiSP%2FSrssaRdOnB8kqGmFBD8ZGDqociGP8LLNHUfQf8p3i%2BfpNdcNuyFS%2BRrgvzZY0bDHdtuqoY27WgoVNV3Spkxzdy3aQ6QbJ6lurKYqPa3pykB3boV%2FbFh%2FXlVhsr0hafWYMpVi0MntroAyXqO7iJ7pWnoL4xozgsQbhaubMrZ4ebmIRzkRBvQ%2BeUYd%2FqhjbxZdjBpzu6Gfvj9aFLZHEAKoK&X-Amz-Signature=de58b71c76a2985402ce083ba54ac265a0097c74353d437a202284dd87556f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5SIOC6O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDMQIzMPDTIqi43QMevwvjwJXPDmOyYU4DXqOOyorUq%2BwIgMg2eN0eY7JaJUldVTXTgS918hZUwr3jXsvuFbd48Dgsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPbuuWENKJEgjlM%2BHircAxhwPlYmpu2XfycqrHlSqsq6hQU5lK83wJhYLAeje%2Ff5NMFLbFSys4VeEMixjz%2Fqdq3JcYmKSFSg5wmTrFGTV6i9O1qjGTcTBG6x115%2BSQcv7%2Bts%2BlpyyCmkZ%2BkfMur%2BAt75Qitwl5HyE47XW4fnmiYXVrlGSUz7Yw%2Fy%2F68a8%2BI1uIOkKbzDNRK79KqFoOzlafY4ShASyDE3tqIsIkQpqWuLR7It%2F37u8qv1rnN8QUMUy5GmtraUKIQgnrws%2FiypdPjzbTRtXbveB3maiMCOryBcG9UFd6KwAL5EURBCHti1Cp9EQFFVM%2FduQE%2Fc%2BW6zR%2BK%2Bp4V4HAli8TA0yWOLYmCenuXnc%2BDGE%2FS1oePVLkwCPLvwvl3AxZWkvaySnlIx%2BNOl6HvHw2sl%2FnRrkz1F%2Bi27hzd%2FsCSIZek2eAYooGPBGxxSVn8RkKhKfhBTFDC0Hj6aSBq7itsQoelcublYVpCmpXGArhKkgq7sCIuYcJwNZ7BoB7QU9AU%2FMPMa3%2BuZGfF81G9Y6lnBGlP5Oqk2sadAai0aDRGwkQM8800h5lSicHa70AXDWXUfAKvz0F3dgF4sHC3dhfiON06%2Ff5rXFsU7rDNUf2cL%2FyDRVKlZnApi%2BQ6Um7655r18UO9aMKDimcMGOqUB0DNiSP%2FSrssaRdOnB8kqGmFBD8ZGDqociGP8LLNHUfQf8p3i%2BfpNdcNuyFS%2BRrgvzZY0bDHdtuqoY27WgoVNV3Spkxzdy3aQ6QbJ6lurKYqPa3pykB3boV%2FbFh%2FXlVhsr0hafWYMpVi0MntroAyXqO7iJ7pWnoL4xozgsQbhaubMrZ4ebmIRzkRBvQ%2BeUYd%2FqhjbxZdjBpzu6Gfvj9aFLZHEAKoK&X-Amz-Signature=37dcf322cecaa1e6b235b30dd37e78b945c0133d1913f5b3e2e7d550bb7e7c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
