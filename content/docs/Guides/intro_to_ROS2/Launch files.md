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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIR56UO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1fWr5J8XVoiG16wl%2Fa6AJkH%2F0IFixN0u4LPxWvlwBgIgMRyELQi1LyGMd8d6%2FRcI4d4rNADyTzJTbULpv4sbgdkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBxIARdGi6AEbCCOFSrcAxL73e7uydfIGzuIgaDAghCDul9PYkHpO44dzhpEG1kaNRmY1zvsTYO1%2BPGnT9bLc0Pb5KAziP2MoQ6WWWWw7xoQ0pi6W5DT3pigB3v74C7NXRDi2XlVpNzi5sBS5PNvA89EihvbVTkcz0xQ493IRsfYxy2hVUJzLWCii79f5JQX3odNkWdMULNnZNeiBIurXKKNKuAIYHD1iphO1nHZT2bASJTAMrbkCyJPy794yRh%2BYzN%2BQpkRNt6FDqT3C0q93KJi1d%2FpbIMY18NxDz5tl4Mn9S5C9%2Bx9keNh5ySeEoZjVZeKAe%2Bjc2Rzap%2F80%2BQcMl%2BKeuRdXxhva6dri02iNMQP24KIqLJDG4YibHMRNut0CTHjTvEwQPveLFqxrgN42gCOJdbUfrxnuGOitI1i8VTXk5AHU43slpyomKdjQ8LU9h%2BQZeyjDVij5SFiaNHhTK4xtbXYdUkd3fLR3wvdjlYHeb4xtdosqsUtdJyvydUKaW52Lxz1ug%2FFQgF%2BoOp2e0AY4MsOAXVPdAa%2FZaFZry5fOrNPPWiI9Wo%2FNkDcgDHxhNedJ4oweErvshMfG%2BgX1MkkCNMvUGfce8fNeTHa0kROlHRZEUbkMRqPnqAHweZeOoWkpyL3AZDSfkrRMK62gr0GOqUB2a6AAZA%2FfnByRlKy8luRvdEslaQ1cM9%2BNgVVeMEHvcwkpelqtCAHBKoJ9WOb%2FWbeWV29fu0DbR08KZ72DAIeI1Gaw2WQIAdC%2FME8CGfb1H7A950UnZ6a0h0lO%2F0PYON6iDZiwzz7cvJDkrSRCVswtpvJfFPlXPsCXYfbrc4R3EoImn%2Bagye%2Bjt0NcL9ejOKq1NeJr0MUig7Mo3rpAV9Jf3EMmFoW&X-Amz-Signature=6aca650acede31e83869e0609d672b2e2bfe551329fd8f294473634823b07a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIR56UO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1fWr5J8XVoiG16wl%2Fa6AJkH%2F0IFixN0u4LPxWvlwBgIgMRyELQi1LyGMd8d6%2FRcI4d4rNADyTzJTbULpv4sbgdkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBxIARdGi6AEbCCOFSrcAxL73e7uydfIGzuIgaDAghCDul9PYkHpO44dzhpEG1kaNRmY1zvsTYO1%2BPGnT9bLc0Pb5KAziP2MoQ6WWWWw7xoQ0pi6W5DT3pigB3v74C7NXRDi2XlVpNzi5sBS5PNvA89EihvbVTkcz0xQ493IRsfYxy2hVUJzLWCii79f5JQX3odNkWdMULNnZNeiBIurXKKNKuAIYHD1iphO1nHZT2bASJTAMrbkCyJPy794yRh%2BYzN%2BQpkRNt6FDqT3C0q93KJi1d%2FpbIMY18NxDz5tl4Mn9S5C9%2Bx9keNh5ySeEoZjVZeKAe%2Bjc2Rzap%2F80%2BQcMl%2BKeuRdXxhva6dri02iNMQP24KIqLJDG4YibHMRNut0CTHjTvEwQPveLFqxrgN42gCOJdbUfrxnuGOitI1i8VTXk5AHU43slpyomKdjQ8LU9h%2BQZeyjDVij5SFiaNHhTK4xtbXYdUkd3fLR3wvdjlYHeb4xtdosqsUtdJyvydUKaW52Lxz1ug%2FFQgF%2BoOp2e0AY4MsOAXVPdAa%2FZaFZry5fOrNPPWiI9Wo%2FNkDcgDHxhNedJ4oweErvshMfG%2BgX1MkkCNMvUGfce8fNeTHa0kROlHRZEUbkMRqPnqAHweZeOoWkpyL3AZDSfkrRMK62gr0GOqUB2a6AAZA%2FfnByRlKy8luRvdEslaQ1cM9%2BNgVVeMEHvcwkpelqtCAHBKoJ9WOb%2FWbeWV29fu0DbR08KZ72DAIeI1Gaw2WQIAdC%2FME8CGfb1H7A950UnZ6a0h0lO%2F0PYON6iDZiwzz7cvJDkrSRCVswtpvJfFPlXPsCXYfbrc4R3EoImn%2Bagye%2Bjt0NcL9ejOKq1NeJr0MUig7Mo3rpAV9Jf3EMmFoW&X-Amz-Signature=410e4aea2e5cffcd0246cf388d11eb7e75639d1b360836546ec889e96d0c2ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIR56UO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1fWr5J8XVoiG16wl%2Fa6AJkH%2F0IFixN0u4LPxWvlwBgIgMRyELQi1LyGMd8d6%2FRcI4d4rNADyTzJTbULpv4sbgdkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBxIARdGi6AEbCCOFSrcAxL73e7uydfIGzuIgaDAghCDul9PYkHpO44dzhpEG1kaNRmY1zvsTYO1%2BPGnT9bLc0Pb5KAziP2MoQ6WWWWw7xoQ0pi6W5DT3pigB3v74C7NXRDi2XlVpNzi5sBS5PNvA89EihvbVTkcz0xQ493IRsfYxy2hVUJzLWCii79f5JQX3odNkWdMULNnZNeiBIurXKKNKuAIYHD1iphO1nHZT2bASJTAMrbkCyJPy794yRh%2BYzN%2BQpkRNt6FDqT3C0q93KJi1d%2FpbIMY18NxDz5tl4Mn9S5C9%2Bx9keNh5ySeEoZjVZeKAe%2Bjc2Rzap%2F80%2BQcMl%2BKeuRdXxhva6dri02iNMQP24KIqLJDG4YibHMRNut0CTHjTvEwQPveLFqxrgN42gCOJdbUfrxnuGOitI1i8VTXk5AHU43slpyomKdjQ8LU9h%2BQZeyjDVij5SFiaNHhTK4xtbXYdUkd3fLR3wvdjlYHeb4xtdosqsUtdJyvydUKaW52Lxz1ug%2FFQgF%2BoOp2e0AY4MsOAXVPdAa%2FZaFZry5fOrNPPWiI9Wo%2FNkDcgDHxhNedJ4oweErvshMfG%2BgX1MkkCNMvUGfce8fNeTHa0kROlHRZEUbkMRqPnqAHweZeOoWkpyL3AZDSfkrRMK62gr0GOqUB2a6AAZA%2FfnByRlKy8luRvdEslaQ1cM9%2BNgVVeMEHvcwkpelqtCAHBKoJ9WOb%2FWbeWV29fu0DbR08KZ72DAIeI1Gaw2WQIAdC%2FME8CGfb1H7A950UnZ6a0h0lO%2F0PYON6iDZiwzz7cvJDkrSRCVswtpvJfFPlXPsCXYfbrc4R3EoImn%2Bagye%2Bjt0NcL9ejOKq1NeJr0MUig7Mo3rpAV9Jf3EMmFoW&X-Amz-Signature=950ea6e1deb681f76cf08cd2e7e0fef651d3607ea2ed09d70cd1064e8aa10645&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
