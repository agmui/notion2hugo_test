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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2ZVCRC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEALxlTblEgb1gSrblEJtrQpxbBqs1MK4ks%2FwiSytP61AiEA4%2FhtXNI9h1PWYyY8OSUH4vrfoW6pGEj6j3Q3ymBTpswq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP9Y7%2F4bBidVJ2NhySrcA1AP5fHcCgYun6SZNECoUqyYNUiRVyNFD7dgtWpvzidNSsGoTHaqP31RrKCmot22HcVI4CDIeJOElX2bHUHIGK2qOTtC7EufItFX%2BhIzDfGifjPOe2jug39OEWK9ZWdt4YtLIrRCPB7IbVDmtB5nHM9i83uMqsjeCV8%2B2Es171TGMAW9mdhdzuevOvrvb4q4GVxLr3xfSaxCmhY%2F7nbJABDtbGRaZk36jB1Z5l6Ox2RWybG81NpPoYFHCueR%2Bfz1Gr%2BgMZEHcVYYIasK%2BFlzqL7x3ATNIHae7%2B4LD3vLBjBaqW3O5yrXvwylpetlZ76mAvTX50T509Q5808hA8PJjyRMAYQo%2Bn%2BWhbsmxMKONZ45kFtrofPwZNsklRTYaBpUJ%2BgqAMoTws8EsocSax7cb9ip1gggq2Gmk%2B6ab7F%2BmbWDwNpq1b%2B7BH4jRF%2B1SV1AKcdwi8UJrV2A6wa23itvCdHyiQD2HZUmgFz48zdlqmqzbh0OVv%2BquGa%2BEw3ilU8kE1lM5kwR8rvAkc8Vb1cySYVxq2nrJ8X8jId%2Fdfyu741jeUvf4AhPwtz1oODclbXpJ8rgc1A9RqHbifbonIRuUb%2F8BBHDj2OkJlJba2qNAmxgvkeEoxA2awtLDum2MNr0y78GOqUBdZ0iQ%2FvRcdblsSj47zLcm%2FmFboY51OwL1v%2FAo5l0glGgKGDNcq1UQrm0CSnQiKbMmpKp8jca15LjKEyFf6HfM9Fn1tzkzTGgFNLVPPH4dEkEDroRJFnTxQQ8MiDwAU6%2BhG57H3gOqzhl%2BEGmb4mAOqjzN%2FjZ6GYwROiHlbLK1RyonDpHH18KQC0kGA2HaCxu%2FgGTQJvZPwuvIYxcq230%2Ff0106Si&X-Amz-Signature=74544979b5ab5b11377d0ffca16f28b79735481d11078ce2a22c9a8eb835b2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2ZVCRC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEALxlTblEgb1gSrblEJtrQpxbBqs1MK4ks%2FwiSytP61AiEA4%2FhtXNI9h1PWYyY8OSUH4vrfoW6pGEj6j3Q3ymBTpswq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP9Y7%2F4bBidVJ2NhySrcA1AP5fHcCgYun6SZNECoUqyYNUiRVyNFD7dgtWpvzidNSsGoTHaqP31RrKCmot22HcVI4CDIeJOElX2bHUHIGK2qOTtC7EufItFX%2BhIzDfGifjPOe2jug39OEWK9ZWdt4YtLIrRCPB7IbVDmtB5nHM9i83uMqsjeCV8%2B2Es171TGMAW9mdhdzuevOvrvb4q4GVxLr3xfSaxCmhY%2F7nbJABDtbGRaZk36jB1Z5l6Ox2RWybG81NpPoYFHCueR%2Bfz1Gr%2BgMZEHcVYYIasK%2BFlzqL7x3ATNIHae7%2B4LD3vLBjBaqW3O5yrXvwylpetlZ76mAvTX50T509Q5808hA8PJjyRMAYQo%2Bn%2BWhbsmxMKONZ45kFtrofPwZNsklRTYaBpUJ%2BgqAMoTws8EsocSax7cb9ip1gggq2Gmk%2B6ab7F%2BmbWDwNpq1b%2B7BH4jRF%2B1SV1AKcdwi8UJrV2A6wa23itvCdHyiQD2HZUmgFz48zdlqmqzbh0OVv%2BquGa%2BEw3ilU8kE1lM5kwR8rvAkc8Vb1cySYVxq2nrJ8X8jId%2Fdfyu741jeUvf4AhPwtz1oODclbXpJ8rgc1A9RqHbifbonIRuUb%2F8BBHDj2OkJlJba2qNAmxgvkeEoxA2awtLDum2MNr0y78GOqUBdZ0iQ%2FvRcdblsSj47zLcm%2FmFboY51OwL1v%2FAo5l0glGgKGDNcq1UQrm0CSnQiKbMmpKp8jca15LjKEyFf6HfM9Fn1tzkzTGgFNLVPPH4dEkEDroRJFnTxQQ8MiDwAU6%2BhG57H3gOqzhl%2BEGmb4mAOqjzN%2FjZ6GYwROiHlbLK1RyonDpHH18KQC0kGA2HaCxu%2FgGTQJvZPwuvIYxcq230%2Ff0106Si&X-Amz-Signature=90b7ff6e145195c0ed2576b0e37b44d0700e29930fdfe93480e7784a9cb5f772&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2ZVCRC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEALxlTblEgb1gSrblEJtrQpxbBqs1MK4ks%2FwiSytP61AiEA4%2FhtXNI9h1PWYyY8OSUH4vrfoW6pGEj6j3Q3ymBTpswq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP9Y7%2F4bBidVJ2NhySrcA1AP5fHcCgYun6SZNECoUqyYNUiRVyNFD7dgtWpvzidNSsGoTHaqP31RrKCmot22HcVI4CDIeJOElX2bHUHIGK2qOTtC7EufItFX%2BhIzDfGifjPOe2jug39OEWK9ZWdt4YtLIrRCPB7IbVDmtB5nHM9i83uMqsjeCV8%2B2Es171TGMAW9mdhdzuevOvrvb4q4GVxLr3xfSaxCmhY%2F7nbJABDtbGRaZk36jB1Z5l6Ox2RWybG81NpPoYFHCueR%2Bfz1Gr%2BgMZEHcVYYIasK%2BFlzqL7x3ATNIHae7%2B4LD3vLBjBaqW3O5yrXvwylpetlZ76mAvTX50T509Q5808hA8PJjyRMAYQo%2Bn%2BWhbsmxMKONZ45kFtrofPwZNsklRTYaBpUJ%2BgqAMoTws8EsocSax7cb9ip1gggq2Gmk%2B6ab7F%2BmbWDwNpq1b%2B7BH4jRF%2B1SV1AKcdwi8UJrV2A6wa23itvCdHyiQD2HZUmgFz48zdlqmqzbh0OVv%2BquGa%2BEw3ilU8kE1lM5kwR8rvAkc8Vb1cySYVxq2nrJ8X8jId%2Fdfyu741jeUvf4AhPwtz1oODclbXpJ8rgc1A9RqHbifbonIRuUb%2F8BBHDj2OkJlJba2qNAmxgvkeEoxA2awtLDum2MNr0y78GOqUBdZ0iQ%2FvRcdblsSj47zLcm%2FmFboY51OwL1v%2FAo5l0glGgKGDNcq1UQrm0CSnQiKbMmpKp8jca15LjKEyFf6HfM9Fn1tzkzTGgFNLVPPH4dEkEDroRJFnTxQQ8MiDwAU6%2BhG57H3gOqzhl%2BEGmb4mAOqjzN%2FjZ6GYwROiHlbLK1RyonDpHH18KQC0kGA2HaCxu%2FgGTQJvZPwuvIYxcq230%2Ff0106Si&X-Amz-Signature=aeef8361123b8f49e96128b59797f9769b154d7cf5a5e38fa80b3a1adf340ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
