---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUVD64P%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCYAXGD2qm2QjGgMnvme7bNkCZqkpq64VCx9HDoM5KOoAIgP%2FpPcNhfEtC2hy2KkAhk8VQjM4xpif4jC0j2LizA%2FTIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOkLrCB7wQROVf6GAircA9HXBSZta3nt11L6DTBoUFKPnshpL0Nu%2FxrVVo3aKPIaa4prDM%2FgsLC0egvVqMXbZqRaVbSzPPUbsRKxg%2B%2Ffn2rXTctPxXu6YaHqFChFA8MT%2BRPY9wz4zEZee2ygNob%2BtI0wfb7wSJqu%2B%2Fdm9%2FAASFX48r2QYNcy2rdnEb3GMBi22gdG%2FuuJUvbazenHaqueUHRoJLAunefNbHHfkpy2hZl4fbL1ILMQUXuPxcTev6jgTl9Fs6Nf7I1mHxe58o4AfGJsxlOC%2FcAOQH9hNSWkTBX2V6ZZBdqODF%2F8%2BC0rei8dTxGZ3s8jFuTlJnoJj0DitwjYfY040kIezSvsGExTx6BahEozcVRFitP9XVF3Ip6Rj9U3XeW4h4uYHpnrp3rhpYmQJN20vndDWpCeK6j2UXEVwple7h93WddlQtgYqqCqzf%2FN30CYNPELprhGy9GRA1ywU8Qf9jgEcvvTS%2FNlWeBxm%2Bk0TAr3Wn5tpEREXM3KezRWrEP9gzfonB3f13SPrEtx4kDxLrXKiI7RYW5RmALhrXSp6jpOSTnQ52rxEO%2FjE8rMLLm0JoQsJpGqlQq2dFfLLElcpSrqFNcBCPHAfgWwjlhvSnFuOtNnpjANcRYm8OpU1mDvUa0q12C7MPWhitAGOqUBexFOr3XhRlbcPae2pPeIQjd6lrEQMuai3jambJNI8e%2F7fzGHb%2Fqmb9UM5B5AoOKc2sI%2FRgkHa87l1D3sJ%2BhE%2BqnhZpjPu5XWtJzJ6uiHorhDjy0cvYN4uUdga4r14zHNC4iwLsDHdv6kIZ%2BzMsnoLvzcchifBp0yD0MPD4MWUg%2BSlUde5qr0HDwW8PRI3dT3CACkuMdJGS%2B8tB5TzMLLu9k73UhD&X-Amz-Signature=66ba12c100e28b078ba02250848728cf2a13fce669af5af3701b738046fe88ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUVD64P%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCYAXGD2qm2QjGgMnvme7bNkCZqkpq64VCx9HDoM5KOoAIgP%2FpPcNhfEtC2hy2KkAhk8VQjM4xpif4jC0j2LizA%2FTIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOkLrCB7wQROVf6GAircA9HXBSZta3nt11L6DTBoUFKPnshpL0Nu%2FxrVVo3aKPIaa4prDM%2FgsLC0egvVqMXbZqRaVbSzPPUbsRKxg%2B%2Ffn2rXTctPxXu6YaHqFChFA8MT%2BRPY9wz4zEZee2ygNob%2BtI0wfb7wSJqu%2B%2Fdm9%2FAASFX48r2QYNcy2rdnEb3GMBi22gdG%2FuuJUvbazenHaqueUHRoJLAunefNbHHfkpy2hZl4fbL1ILMQUXuPxcTev6jgTl9Fs6Nf7I1mHxe58o4AfGJsxlOC%2FcAOQH9hNSWkTBX2V6ZZBdqODF%2F8%2BC0rei8dTxGZ3s8jFuTlJnoJj0DitwjYfY040kIezSvsGExTx6BahEozcVRFitP9XVF3Ip6Rj9U3XeW4h4uYHpnrp3rhpYmQJN20vndDWpCeK6j2UXEVwple7h93WddlQtgYqqCqzf%2FN30CYNPELprhGy9GRA1ywU8Qf9jgEcvvTS%2FNlWeBxm%2Bk0TAr3Wn5tpEREXM3KezRWrEP9gzfonB3f13SPrEtx4kDxLrXKiI7RYW5RmALhrXSp6jpOSTnQ52rxEO%2FjE8rMLLm0JoQsJpGqlQq2dFfLLElcpSrqFNcBCPHAfgWwjlhvSnFuOtNnpjANcRYm8OpU1mDvUa0q12C7MPWhitAGOqUBexFOr3XhRlbcPae2pPeIQjd6lrEQMuai3jambJNI8e%2F7fzGHb%2Fqmb9UM5B5AoOKc2sI%2FRgkHa87l1D3sJ%2BhE%2BqnhZpjPu5XWtJzJ6uiHorhDjy0cvYN4uUdga4r14zHNC4iwLsDHdv6kIZ%2BzMsnoLvzcchifBp0yD0MPD4MWUg%2BSlUde5qr0HDwW8PRI3dT3CACkuMdJGS%2B8tB5TzMLLu9k73UhD&X-Amz-Signature=d95fea8908004905f6cd48e2a238f555a4ebd2981d4005f9f95350c51dac84fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUVD64P%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCYAXGD2qm2QjGgMnvme7bNkCZqkpq64VCx9HDoM5KOoAIgP%2FpPcNhfEtC2hy2KkAhk8VQjM4xpif4jC0j2LizA%2FTIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOkLrCB7wQROVf6GAircA9HXBSZta3nt11L6DTBoUFKPnshpL0Nu%2FxrVVo3aKPIaa4prDM%2FgsLC0egvVqMXbZqRaVbSzPPUbsRKxg%2B%2Ffn2rXTctPxXu6YaHqFChFA8MT%2BRPY9wz4zEZee2ygNob%2BtI0wfb7wSJqu%2B%2Fdm9%2FAASFX48r2QYNcy2rdnEb3GMBi22gdG%2FuuJUvbazenHaqueUHRoJLAunefNbHHfkpy2hZl4fbL1ILMQUXuPxcTev6jgTl9Fs6Nf7I1mHxe58o4AfGJsxlOC%2FcAOQH9hNSWkTBX2V6ZZBdqODF%2F8%2BC0rei8dTxGZ3s8jFuTlJnoJj0DitwjYfY040kIezSvsGExTx6BahEozcVRFitP9XVF3Ip6Rj9U3XeW4h4uYHpnrp3rhpYmQJN20vndDWpCeK6j2UXEVwple7h93WddlQtgYqqCqzf%2FN30CYNPELprhGy9GRA1ywU8Qf9jgEcvvTS%2FNlWeBxm%2Bk0TAr3Wn5tpEREXM3KezRWrEP9gzfonB3f13SPrEtx4kDxLrXKiI7RYW5RmALhrXSp6jpOSTnQ52rxEO%2FjE8rMLLm0JoQsJpGqlQq2dFfLLElcpSrqFNcBCPHAfgWwjlhvSnFuOtNnpjANcRYm8OpU1mDvUa0q12C7MPWhitAGOqUBexFOr3XhRlbcPae2pPeIQjd6lrEQMuai3jambJNI8e%2F7fzGHb%2Fqmb9UM5B5AoOKc2sI%2FRgkHa87l1D3sJ%2BhE%2BqnhZpjPu5XWtJzJ6uiHorhDjy0cvYN4uUdga4r14zHNC4iwLsDHdv6kIZ%2BzMsnoLvzcchifBp0yD0MPD4MWUg%2BSlUde5qr0HDwW8PRI3dT3CACkuMdJGS%2B8tB5TzMLLu9k73UhD&X-Amz-Signature=fe031f09d6f48a843698f4b6cd6499e8331638b58d19c09453a80d6a865c1e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
