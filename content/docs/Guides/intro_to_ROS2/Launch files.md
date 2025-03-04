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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4IUHSUU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6LS4zurDeFAoBmZnXm1gwjOvrN9%2B7mpVYDlRGdO7EEAIhAMTi2UaATVgSfd6wc37pmbR63JUHiu57IfeRaaYsIYBEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTR4VSGjA6kM7YmLgq3APFIijPcyyReLjNnZQD58aYo7cM4rNAx83qh1BoNT2vS%2FI8aPZeho0G1OlNOgE03iaRvMopDS2oqurBkSiqHIWTMY%2BKTVTYnuBnu8koLwa0sUxg6js3TIyyUxFvzdSHnMEDmJ2J03K9NI62CFGKTYsff1SIpLrBEg0dF5j4U8h%2BjCtGAuWkgWr%2FvNYQK3ijZ0YU6EChYBOLniA9SAXSPf%2Fd0yd77cbzknpgcs4KQaTtu34zU6k7kp74qObev7AaWqfJh2gOMUDUzoFDQ1bI%2BbJm%2BM3epkfOnfpuEEoLe%2FOETuNFb2dHYtBARekmg9s4jVn5e%2BbF6SSUL90zrDV7rLA6zDsXyh5TuNRBog%2BkBC1dpKIfeNuP%2BBibx5ZV7J16otabFCp6QAnMiy4HM0r91atpJa5MViFTonTOcSZK0MkVl7KIT5XEMe1HOYi1NSyCbeEow57MleAL6NaZ8O1KouOo4tzIOMk%2BAH44mrzNBerPoOoY7Lykv1jeA3RiIneiSZa7D15bwrWA5b95GA9%2ByOkhaGlS5SvGytlTECMpI3%2BnTJh3BsHFNAPtfvD823I7gklHkm%2FYT5EDPRmkkVijb51W28B%2FS%2F1GZnak%2FoGKRwI%2FKRSMmAJ1H4sbqLoLCDCh%2BJi%2BBjqkAa7pOEvdvoAsSXwHEGdoZ9qM59UDJLR5nDOSoMOyq4ohThKOmsy8z2pdff7Rt6Z4X6zxNd0%2Bpj202PyHBFNHQMx7QmylPBXvJHPMjiEo9To7em1NkzQNk1Q2DstC%2FtmmQbKo9nBDdNw0Pe7azf1qz08dQQlNUFr%2FLYvpyPzvvBkZdYR9o4rA8YcNXFqK8mq%2BJnR%2BpKh5ellkZy8wpJaa9ZjX6qkI&X-Amz-Signature=78731602486d97270396c2f6c012e4ee83a15701e8ce2256b9c6fbd6df110e91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4IUHSUU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6LS4zurDeFAoBmZnXm1gwjOvrN9%2B7mpVYDlRGdO7EEAIhAMTi2UaATVgSfd6wc37pmbR63JUHiu57IfeRaaYsIYBEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTR4VSGjA6kM7YmLgq3APFIijPcyyReLjNnZQD58aYo7cM4rNAx83qh1BoNT2vS%2FI8aPZeho0G1OlNOgE03iaRvMopDS2oqurBkSiqHIWTMY%2BKTVTYnuBnu8koLwa0sUxg6js3TIyyUxFvzdSHnMEDmJ2J03K9NI62CFGKTYsff1SIpLrBEg0dF5j4U8h%2BjCtGAuWkgWr%2FvNYQK3ijZ0YU6EChYBOLniA9SAXSPf%2Fd0yd77cbzknpgcs4KQaTtu34zU6k7kp74qObev7AaWqfJh2gOMUDUzoFDQ1bI%2BbJm%2BM3epkfOnfpuEEoLe%2FOETuNFb2dHYtBARekmg9s4jVn5e%2BbF6SSUL90zrDV7rLA6zDsXyh5TuNRBog%2BkBC1dpKIfeNuP%2BBibx5ZV7J16otabFCp6QAnMiy4HM0r91atpJa5MViFTonTOcSZK0MkVl7KIT5XEMe1HOYi1NSyCbeEow57MleAL6NaZ8O1KouOo4tzIOMk%2BAH44mrzNBerPoOoY7Lykv1jeA3RiIneiSZa7D15bwrWA5b95GA9%2ByOkhaGlS5SvGytlTECMpI3%2BnTJh3BsHFNAPtfvD823I7gklHkm%2FYT5EDPRmkkVijb51W28B%2FS%2F1GZnak%2FoGKRwI%2FKRSMmAJ1H4sbqLoLCDCh%2BJi%2BBjqkAa7pOEvdvoAsSXwHEGdoZ9qM59UDJLR5nDOSoMOyq4ohThKOmsy8z2pdff7Rt6Z4X6zxNd0%2Bpj202PyHBFNHQMx7QmylPBXvJHPMjiEo9To7em1NkzQNk1Q2DstC%2FtmmQbKo9nBDdNw0Pe7azf1qz08dQQlNUFr%2FLYvpyPzvvBkZdYR9o4rA8YcNXFqK8mq%2BJnR%2BpKh5ellkZy8wpJaa9ZjX6qkI&X-Amz-Signature=dea17ff08d3beab7826f099a2630601ff4ef9a1f9333d5b8471560b804cadda7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4IUHSUU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6LS4zurDeFAoBmZnXm1gwjOvrN9%2B7mpVYDlRGdO7EEAIhAMTi2UaATVgSfd6wc37pmbR63JUHiu57IfeRaaYsIYBEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTR4VSGjA6kM7YmLgq3APFIijPcyyReLjNnZQD58aYo7cM4rNAx83qh1BoNT2vS%2FI8aPZeho0G1OlNOgE03iaRvMopDS2oqurBkSiqHIWTMY%2BKTVTYnuBnu8koLwa0sUxg6js3TIyyUxFvzdSHnMEDmJ2J03K9NI62CFGKTYsff1SIpLrBEg0dF5j4U8h%2BjCtGAuWkgWr%2FvNYQK3ijZ0YU6EChYBOLniA9SAXSPf%2Fd0yd77cbzknpgcs4KQaTtu34zU6k7kp74qObev7AaWqfJh2gOMUDUzoFDQ1bI%2BbJm%2BM3epkfOnfpuEEoLe%2FOETuNFb2dHYtBARekmg9s4jVn5e%2BbF6SSUL90zrDV7rLA6zDsXyh5TuNRBog%2BkBC1dpKIfeNuP%2BBibx5ZV7J16otabFCp6QAnMiy4HM0r91atpJa5MViFTonTOcSZK0MkVl7KIT5XEMe1HOYi1NSyCbeEow57MleAL6NaZ8O1KouOo4tzIOMk%2BAH44mrzNBerPoOoY7Lykv1jeA3RiIneiSZa7D15bwrWA5b95GA9%2ByOkhaGlS5SvGytlTECMpI3%2BnTJh3BsHFNAPtfvD823I7gklHkm%2FYT5EDPRmkkVijb51W28B%2FS%2F1GZnak%2FoGKRwI%2FKRSMmAJ1H4sbqLoLCDCh%2BJi%2BBjqkAa7pOEvdvoAsSXwHEGdoZ9qM59UDJLR5nDOSoMOyq4ohThKOmsy8z2pdff7Rt6Z4X6zxNd0%2Bpj202PyHBFNHQMx7QmylPBXvJHPMjiEo9To7em1NkzQNk1Q2DstC%2FtmmQbKo9nBDdNw0Pe7azf1qz08dQQlNUFr%2FLYvpyPzvvBkZdYR9o4rA8YcNXFqK8mq%2BJnR%2BpKh5ellkZy8wpJaa9ZjX6qkI&X-Amz-Signature=603ae01b7c356b92dfe6a74da1453f8e2d9f5fb5020baacd30d175ea98638411&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
