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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIQJZM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBABc3N0NeSPxf81eA79Hg6nPEjXySgxWDQFEF9HOZ2JAiEAkrLH9Wgz4VhvBh%2B67c7GZV61ZDCN%2BT31UB2oDEOG4Gkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPxJuBdEgopqqpaHzircA87C2Xqnw%2B3NMnb4GSDNkBPHAKR41nTTNZxf8%2FWGkBLJDog0x4VV7ztgIwbXpgp3DD7GTQXuslDRKpaOcCB98jBSBn9OqjkAVfawryKux35BGG%2Fq3UgvS6O22Rj9vZpTVEqR%2BxrSih1O8icnIrBZqy2SHYYPhHyKbjXJr%2B%2BgI8ZF%2Fi2kkaecR%2F75CkVTwByazah0B8H51IBanS5v3xEZuO6qHFYn2bvPTUiNeBDzDSVs1xhwoDDdVBXJ8b6qeZlsH4jEZxG%2B2FYZ3UiRO5AcR0vjIglpDXTzYLOgqIadDkyGaIYTGAYADNDC1LN50WVIOj6cS0Syllc4MSYyXYTd8IFw9XzID6svuoZk0tJk8%2FOSOF%2FRZbQ9QQueB7FzhX%2B1fUpJ9623ym00KJPIKiGUt4nYPgNGGR6sBZh8h3RHBdz%2F6kHYRAPtVqTuVQw1MdxuQHkazgQPGwzl%2FmymcLbXmCSb5exzkswepYged0%2BpTUAniNYSkOzHPWY6T6ThcGsc2pA9l47LITdAfP0e4%2BJv62gubcZTOXV%2FRd3Pu9%2FwVxrK%2FPOSZ6GZIxT2H249WSVZEzHqIK25dfeqUaflRDE2Lk%2BzgcnLijhXgRbHIDUvnuperc2fQEwV%2BVJv8T%2FPMIvwpcMGOqUB0cwOvodQN39bV24QdDSsVx6BmmKA1ObTOqyndEp588qN0PD6%2FwAF3PamSQZ3iC%2B3qudB%2F8McFe3QwNT5RNVR1tzLfn%2BaIs5IiHChVUOwsTwvV1knu0FnfHiqg203HlAx8GTKfbu7xMm31O6q%2FOguHv8e0czIbEuf1LpSG0leZh4LoM2PL%2FhP1SlvmHDy1lOsOto3HqZGV2LDpire9D600d49p7Hx&X-Amz-Signature=aedcc64865e243dc092b91f3dfd3f1d2877738917d760d53875371a64695010e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIQJZM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBABc3N0NeSPxf81eA79Hg6nPEjXySgxWDQFEF9HOZ2JAiEAkrLH9Wgz4VhvBh%2B67c7GZV61ZDCN%2BT31UB2oDEOG4Gkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPxJuBdEgopqqpaHzircA87C2Xqnw%2B3NMnb4GSDNkBPHAKR41nTTNZxf8%2FWGkBLJDog0x4VV7ztgIwbXpgp3DD7GTQXuslDRKpaOcCB98jBSBn9OqjkAVfawryKux35BGG%2Fq3UgvS6O22Rj9vZpTVEqR%2BxrSih1O8icnIrBZqy2SHYYPhHyKbjXJr%2B%2BgI8ZF%2Fi2kkaecR%2F75CkVTwByazah0B8H51IBanS5v3xEZuO6qHFYn2bvPTUiNeBDzDSVs1xhwoDDdVBXJ8b6qeZlsH4jEZxG%2B2FYZ3UiRO5AcR0vjIglpDXTzYLOgqIadDkyGaIYTGAYADNDC1LN50WVIOj6cS0Syllc4MSYyXYTd8IFw9XzID6svuoZk0tJk8%2FOSOF%2FRZbQ9QQueB7FzhX%2B1fUpJ9623ym00KJPIKiGUt4nYPgNGGR6sBZh8h3RHBdz%2F6kHYRAPtVqTuVQw1MdxuQHkazgQPGwzl%2FmymcLbXmCSb5exzkswepYged0%2BpTUAniNYSkOzHPWY6T6ThcGsc2pA9l47LITdAfP0e4%2BJv62gubcZTOXV%2FRd3Pu9%2FwVxrK%2FPOSZ6GZIxT2H249WSVZEzHqIK25dfeqUaflRDE2Lk%2BzgcnLijhXgRbHIDUvnuperc2fQEwV%2BVJv8T%2FPMIvwpcMGOqUB0cwOvodQN39bV24QdDSsVx6BmmKA1ObTOqyndEp588qN0PD6%2FwAF3PamSQZ3iC%2B3qudB%2F8McFe3QwNT5RNVR1tzLfn%2BaIs5IiHChVUOwsTwvV1knu0FnfHiqg203HlAx8GTKfbu7xMm31O6q%2FOguHv8e0czIbEuf1LpSG0leZh4LoM2PL%2FhP1SlvmHDy1lOsOto3HqZGV2LDpire9D600d49p7Hx&X-Amz-Signature=8958518ddc30dbdf4bd88c377173a74acd19c099106cbcfaab8c99c3388a44ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIQJZM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBABc3N0NeSPxf81eA79Hg6nPEjXySgxWDQFEF9HOZ2JAiEAkrLH9Wgz4VhvBh%2B67c7GZV61ZDCN%2BT31UB2oDEOG4Gkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPxJuBdEgopqqpaHzircA87C2Xqnw%2B3NMnb4GSDNkBPHAKR41nTTNZxf8%2FWGkBLJDog0x4VV7ztgIwbXpgp3DD7GTQXuslDRKpaOcCB98jBSBn9OqjkAVfawryKux35BGG%2Fq3UgvS6O22Rj9vZpTVEqR%2BxrSih1O8icnIrBZqy2SHYYPhHyKbjXJr%2B%2BgI8ZF%2Fi2kkaecR%2F75CkVTwByazah0B8H51IBanS5v3xEZuO6qHFYn2bvPTUiNeBDzDSVs1xhwoDDdVBXJ8b6qeZlsH4jEZxG%2B2FYZ3UiRO5AcR0vjIglpDXTzYLOgqIadDkyGaIYTGAYADNDC1LN50WVIOj6cS0Syllc4MSYyXYTd8IFw9XzID6svuoZk0tJk8%2FOSOF%2FRZbQ9QQueB7FzhX%2B1fUpJ9623ym00KJPIKiGUt4nYPgNGGR6sBZh8h3RHBdz%2F6kHYRAPtVqTuVQw1MdxuQHkazgQPGwzl%2FmymcLbXmCSb5exzkswepYged0%2BpTUAniNYSkOzHPWY6T6ThcGsc2pA9l47LITdAfP0e4%2BJv62gubcZTOXV%2FRd3Pu9%2FwVxrK%2FPOSZ6GZIxT2H249WSVZEzHqIK25dfeqUaflRDE2Lk%2BzgcnLijhXgRbHIDUvnuperc2fQEwV%2BVJv8T%2FPMIvwpcMGOqUB0cwOvodQN39bV24QdDSsVx6BmmKA1ObTOqyndEp588qN0PD6%2FwAF3PamSQZ3iC%2B3qudB%2F8McFe3QwNT5RNVR1tzLfn%2BaIs5IiHChVUOwsTwvV1knu0FnfHiqg203HlAx8GTKfbu7xMm31O6q%2FOguHv8e0czIbEuf1LpSG0leZh4LoM2PL%2FhP1SlvmHDy1lOsOto3HqZGV2LDpire9D600d49p7Hx&X-Amz-Signature=6606a495e934fc4ec2bc60ac7d85f37645ba403d609731941ece18fe98c26ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
