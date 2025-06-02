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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCE2ESEH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBfzsgNxZoZkdouSVnTtl15Bbn%2Bai%2BVtC7R1x4grGo9kAiEA9yoglkvPIJy3Xbktxa0oAAPHBkP5aG4JAaWTfeq2dhIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtxiGOGau6FEFC6iSrcAwMLR3wjWaEYspHhM72YWTZTHY3n7gmTJ1FaNpvuGy6%2FDxw15f50T1ZRMIn%2B47VhEF8p1K%2Fr7wZcWAboqeZHEMn1vtjCz65itPOpm5kMDcO%2F94OPVN3XchjFgDgGDz2XsK%2FkN9tCujqtQdHT%2FrIZAyLj%2FFNV5h%2BQd9wRvALenUxDg955dvddf8qfY6ArUa2mTM3fl8nGEDDQDQWfimCZ4Fl7yx%2FtD86ZRUhciM4FF%2Bg1x2OFY%2Fvx62KYsNRAtsPMTbzUmehPRYuht8J09hQNiOHGvm1WtKyh9E33qXOmwVPT%2BiyU8JyIuZl4IFG1pcmGG9PHFnfkrDbwTCoVxbnT2vBTNfOnq82PbsniyXI1QgcoR6HsK%2Ffder%2FkgyVONoStUVQgz9lmvGHdo2v1k4zIBf3qyso2glgZCo3hkaTBMh0NUZWCRObyiAVikzuj%2FMkpWU1%2BJeyDUrDmWMTMcOyYfbs2X9NDHuB2LozDvUE90uduQgkTGmYWKTgxNOuAARMM2TOUg5M3hTfdCE7eyk2nEJgrrjc2XZOuUdJgZ8mKLLoRi7w1PW8LPrNIBjuESRKamQl3A2J06aSGaY1282zFxZ6Eq8Te0QE2FH691iJES4mxVh61BL9TncZMuzs0MNOy98EGOqUBR0io5PRCZqxpwTG2sxd7ehI%2FI8ZT1IUiGwhLZLr0b2YrlXDbRNkJUoU%2FcunhrxPVWgiMLel%2FkydFw0%2FzpyqfFEVodwitg4Bm%2BQ9OnA%2Bj20Er%2B4%2FJX3hLUbGlV7L7GcQNC%2FOlhIsolMeT24T3eAnFJ2NG6X%2BtoTcd%2F6Y0B8XiZJdTEFjrFKivBpXcxERC8%2BHt6sqTmcC6sfBVN%2FPUYPhGjt1ke4po&X-Amz-Signature=a1e96f1521bd28b16fda7d650051a9e0180e0923af8bf50bb4f8658dc9e730c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCE2ESEH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBfzsgNxZoZkdouSVnTtl15Bbn%2Bai%2BVtC7R1x4grGo9kAiEA9yoglkvPIJy3Xbktxa0oAAPHBkP5aG4JAaWTfeq2dhIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtxiGOGau6FEFC6iSrcAwMLR3wjWaEYspHhM72YWTZTHY3n7gmTJ1FaNpvuGy6%2FDxw15f50T1ZRMIn%2B47VhEF8p1K%2Fr7wZcWAboqeZHEMn1vtjCz65itPOpm5kMDcO%2F94OPVN3XchjFgDgGDz2XsK%2FkN9tCujqtQdHT%2FrIZAyLj%2FFNV5h%2BQd9wRvALenUxDg955dvddf8qfY6ArUa2mTM3fl8nGEDDQDQWfimCZ4Fl7yx%2FtD86ZRUhciM4FF%2Bg1x2OFY%2Fvx62KYsNRAtsPMTbzUmehPRYuht8J09hQNiOHGvm1WtKyh9E33qXOmwVPT%2BiyU8JyIuZl4IFG1pcmGG9PHFnfkrDbwTCoVxbnT2vBTNfOnq82PbsniyXI1QgcoR6HsK%2Ffder%2FkgyVONoStUVQgz9lmvGHdo2v1k4zIBf3qyso2glgZCo3hkaTBMh0NUZWCRObyiAVikzuj%2FMkpWU1%2BJeyDUrDmWMTMcOyYfbs2X9NDHuB2LozDvUE90uduQgkTGmYWKTgxNOuAARMM2TOUg5M3hTfdCE7eyk2nEJgrrjc2XZOuUdJgZ8mKLLoRi7w1PW8LPrNIBjuESRKamQl3A2J06aSGaY1282zFxZ6Eq8Te0QE2FH691iJES4mxVh61BL9TncZMuzs0MNOy98EGOqUBR0io5PRCZqxpwTG2sxd7ehI%2FI8ZT1IUiGwhLZLr0b2YrlXDbRNkJUoU%2FcunhrxPVWgiMLel%2FkydFw0%2FzpyqfFEVodwitg4Bm%2BQ9OnA%2Bj20Er%2B4%2FJX3hLUbGlV7L7GcQNC%2FOlhIsolMeT24T3eAnFJ2NG6X%2BtoTcd%2F6Y0B8XiZJdTEFjrFKivBpXcxERC8%2BHt6sqTmcC6sfBVN%2FPUYPhGjt1ke4po&X-Amz-Signature=f9bb40b9ab9dd6e0c9070d8635cffef304bd0be097f45bcaa84eceda2eadc42a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCE2ESEH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBfzsgNxZoZkdouSVnTtl15Bbn%2Bai%2BVtC7R1x4grGo9kAiEA9yoglkvPIJy3Xbktxa0oAAPHBkP5aG4JAaWTfeq2dhIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtxiGOGau6FEFC6iSrcAwMLR3wjWaEYspHhM72YWTZTHY3n7gmTJ1FaNpvuGy6%2FDxw15f50T1ZRMIn%2B47VhEF8p1K%2Fr7wZcWAboqeZHEMn1vtjCz65itPOpm5kMDcO%2F94OPVN3XchjFgDgGDz2XsK%2FkN9tCujqtQdHT%2FrIZAyLj%2FFNV5h%2BQd9wRvALenUxDg955dvddf8qfY6ArUa2mTM3fl8nGEDDQDQWfimCZ4Fl7yx%2FtD86ZRUhciM4FF%2Bg1x2OFY%2Fvx62KYsNRAtsPMTbzUmehPRYuht8J09hQNiOHGvm1WtKyh9E33qXOmwVPT%2BiyU8JyIuZl4IFG1pcmGG9PHFnfkrDbwTCoVxbnT2vBTNfOnq82PbsniyXI1QgcoR6HsK%2Ffder%2FkgyVONoStUVQgz9lmvGHdo2v1k4zIBf3qyso2glgZCo3hkaTBMh0NUZWCRObyiAVikzuj%2FMkpWU1%2BJeyDUrDmWMTMcOyYfbs2X9NDHuB2LozDvUE90uduQgkTGmYWKTgxNOuAARMM2TOUg5M3hTfdCE7eyk2nEJgrrjc2XZOuUdJgZ8mKLLoRi7w1PW8LPrNIBjuESRKamQl3A2J06aSGaY1282zFxZ6Eq8Te0QE2FH691iJES4mxVh61BL9TncZMuzs0MNOy98EGOqUBR0io5PRCZqxpwTG2sxd7ehI%2FI8ZT1IUiGwhLZLr0b2YrlXDbRNkJUoU%2FcunhrxPVWgiMLel%2FkydFw0%2FzpyqfFEVodwitg4Bm%2BQ9OnA%2Bj20Er%2B4%2FJX3hLUbGlV7L7GcQNC%2FOlhIsolMeT24T3eAnFJ2NG6X%2BtoTcd%2F6Y0B8XiZJdTEFjrFKivBpXcxERC8%2BHt6sqTmcC6sfBVN%2FPUYPhGjt1ke4po&X-Amz-Signature=a8e124f8cf98784641065dbd6f556dd041fa221c18f74adb1ca3f4f01946fb77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
