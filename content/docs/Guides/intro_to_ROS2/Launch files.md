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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXOPIED%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ1dhhBT6qlXDy%2BC0SCtx49prKCXkFvtM9nb%2BVG4%2F%2BZAiBXt%2FLEc170W4BpFlROTZ88r3vSoulZzpl%2FVHA1gqzmpSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBxHh4uQuD%2BMsqrwKtwDNxLNnWEntxduDmUFkPOncM9LpxVX5L5WcWLvCjjBL8VHcVdv8VgqA9keoSMdj2a5%2FV7TR7asOEI%2BHfpvPtzcpOCo3fAsGAsFPnSEWyjgg8eWNB16hH%2BrS4ohOiT2aOM3SRonC5hBLVszEKCGbeJF6ZRln9RYvl2x67s9jIMNCh0ztw0PFqjHamtQtTjHkolGGy7ewDddMcDYqqfBDQYwNil08IOkpXF%2FpEVY378T%2Fn%2BPELJtcAKKgNGoPjT%2BahedFmnJ54JWt1gPbbl76wNeKF2GaqujPF0fnEwdagM78puONvnhBq%2BzvetPiYUIK1UqABHlklpsrCYtTrRcuuPEbrHcwglPIBApviB9VaLyI4mThauOTRLexQnMJv1YgpXvgqcbvUJU%2BbQ5q16npcf6bE0IA%2BRjeCTo4WJr6%2FG%2Fnax5FWGfzzeh5gepNl92aCbvfLA3Q78m8eD7P9ygqa5ptZckqFhZMxjZfUJitacgJRpfXebb%2B%2FJRecCxwEY3%2B6QSyCLk3HHua6xwfPcNx2o8yombsHxQbaMg%2FGG2aQzdArOz%2FUlG5PMwlog4jMMcv%2F0cpF3%2Fj8RptMOTAls7XCvW2nJcgSNDO1Fe%2FM%2FlTOov6o8TJhAxO6%2B5YgM%2FQygwq82pvQY6pgGGOul4nHo6lMT%2FWCYxQeWUW2QXouvG0%2BdS%2FIJeSvcCCscCppQMoW4bhaDaCWa%2BdxtZ695CaOxhYE%2FybQ1OE8dk4%2B0Piao4THXZf%2FLz7h07WnKZZatLowMj1XhSHMx2%2FMv9c1YUioDAk3sDC6hdwgdvyl9J%2FcOXgHGTUhVUkFviRHUsWaKwdfYtIKNSHanHgAKThkxdl4Zv3qcuvef6fs4lLBKuTouo&X-Amz-Signature=e1b1c94e7122c955ea275bf21c662b66f4838ad2520514ea78b56a9d6f24a246&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXOPIED%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ1dhhBT6qlXDy%2BC0SCtx49prKCXkFvtM9nb%2BVG4%2F%2BZAiBXt%2FLEc170W4BpFlROTZ88r3vSoulZzpl%2FVHA1gqzmpSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBxHh4uQuD%2BMsqrwKtwDNxLNnWEntxduDmUFkPOncM9LpxVX5L5WcWLvCjjBL8VHcVdv8VgqA9keoSMdj2a5%2FV7TR7asOEI%2BHfpvPtzcpOCo3fAsGAsFPnSEWyjgg8eWNB16hH%2BrS4ohOiT2aOM3SRonC5hBLVszEKCGbeJF6ZRln9RYvl2x67s9jIMNCh0ztw0PFqjHamtQtTjHkolGGy7ewDddMcDYqqfBDQYwNil08IOkpXF%2FpEVY378T%2Fn%2BPELJtcAKKgNGoPjT%2BahedFmnJ54JWt1gPbbl76wNeKF2GaqujPF0fnEwdagM78puONvnhBq%2BzvetPiYUIK1UqABHlklpsrCYtTrRcuuPEbrHcwglPIBApviB9VaLyI4mThauOTRLexQnMJv1YgpXvgqcbvUJU%2BbQ5q16npcf6bE0IA%2BRjeCTo4WJr6%2FG%2Fnax5FWGfzzeh5gepNl92aCbvfLA3Q78m8eD7P9ygqa5ptZckqFhZMxjZfUJitacgJRpfXebb%2B%2FJRecCxwEY3%2B6QSyCLk3HHua6xwfPcNx2o8yombsHxQbaMg%2FGG2aQzdArOz%2FUlG5PMwlog4jMMcv%2F0cpF3%2Fj8RptMOTAls7XCvW2nJcgSNDO1Fe%2FM%2FlTOov6o8TJhAxO6%2B5YgM%2FQygwq82pvQY6pgGGOul4nHo6lMT%2FWCYxQeWUW2QXouvG0%2BdS%2FIJeSvcCCscCppQMoW4bhaDaCWa%2BdxtZ695CaOxhYE%2FybQ1OE8dk4%2B0Piao4THXZf%2FLz7h07WnKZZatLowMj1XhSHMx2%2FMv9c1YUioDAk3sDC6hdwgdvyl9J%2FcOXgHGTUhVUkFviRHUsWaKwdfYtIKNSHanHgAKThkxdl4Zv3qcuvef6fs4lLBKuTouo&X-Amz-Signature=598c73cf81f23da75d4d3ea2fd9dc34b5866d32ed1f0f2c5a61cc95063d399be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXOPIED%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ1dhhBT6qlXDy%2BC0SCtx49prKCXkFvtM9nb%2BVG4%2F%2BZAiBXt%2FLEc170W4BpFlROTZ88r3vSoulZzpl%2FVHA1gqzmpSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBxHh4uQuD%2BMsqrwKtwDNxLNnWEntxduDmUFkPOncM9LpxVX5L5WcWLvCjjBL8VHcVdv8VgqA9keoSMdj2a5%2FV7TR7asOEI%2BHfpvPtzcpOCo3fAsGAsFPnSEWyjgg8eWNB16hH%2BrS4ohOiT2aOM3SRonC5hBLVszEKCGbeJF6ZRln9RYvl2x67s9jIMNCh0ztw0PFqjHamtQtTjHkolGGy7ewDddMcDYqqfBDQYwNil08IOkpXF%2FpEVY378T%2Fn%2BPELJtcAKKgNGoPjT%2BahedFmnJ54JWt1gPbbl76wNeKF2GaqujPF0fnEwdagM78puONvnhBq%2BzvetPiYUIK1UqABHlklpsrCYtTrRcuuPEbrHcwglPIBApviB9VaLyI4mThauOTRLexQnMJv1YgpXvgqcbvUJU%2BbQ5q16npcf6bE0IA%2BRjeCTo4WJr6%2FG%2Fnax5FWGfzzeh5gepNl92aCbvfLA3Q78m8eD7P9ygqa5ptZckqFhZMxjZfUJitacgJRpfXebb%2B%2FJRecCxwEY3%2B6QSyCLk3HHua6xwfPcNx2o8yombsHxQbaMg%2FGG2aQzdArOz%2FUlG5PMwlog4jMMcv%2F0cpF3%2Fj8RptMOTAls7XCvW2nJcgSNDO1Fe%2FM%2FlTOov6o8TJhAxO6%2B5YgM%2FQygwq82pvQY6pgGGOul4nHo6lMT%2FWCYxQeWUW2QXouvG0%2BdS%2FIJeSvcCCscCppQMoW4bhaDaCWa%2BdxtZ695CaOxhYE%2FybQ1OE8dk4%2B0Piao4THXZf%2FLz7h07WnKZZatLowMj1XhSHMx2%2FMv9c1YUioDAk3sDC6hdwgdvyl9J%2FcOXgHGTUhVUkFviRHUsWaKwdfYtIKNSHanHgAKThkxdl4Zv3qcuvef6fs4lLBKuTouo&X-Amz-Signature=85cc7e7d7d8f2833668e54d0376cd76efddf5b1c8a480017cf7d084cf698cc7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
