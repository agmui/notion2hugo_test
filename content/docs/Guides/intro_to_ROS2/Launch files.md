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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTI6OIX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlmKYO1vlSthxrRewLjLFfdKqGrLC4oVWssEgSqF1tNAiEAleAW4KEw0WqGKsiXwFhyYSGFJS5U8NgdgD1vXHVjg3sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs9xHrI6GnaalLQQCrcA5a2%2B%2FO9B%2BmWXaVW%2FfgRcASWa4v3AFbl7YC%2BFhQITtqWWNxiLvtxeN8SM4op3%2FHIOmnlG4hLLDutGMNqFdj6Z5lKVZ3J%2F1tBJJ1%2BkrkSbHNo36tyLwJj8zWSh51C%2Ff5wORkq1t44c5ZjG%2FizW2A4tOuoFl0p514gHYprVpG%2FnRoyGxUxPF03dmKyRdYSTbo23iNj%2BEFJqYdq%2BCwIAmRL%2BrvPd0dnF6uGI5VPeQ7nSaN7r0IvgTZBP9kcz1LPqHnAgdsRMfyLto2dFSgz0yWHN3xCcyhfqP9Dj1PT9EVc03Xoy%2FFgk%2Fs1%2FG9kXYM8TjE1v9Eg%2B%2Bgt%2FyZDwVTWimaFelFgNxLvIxBeIyzA82ympHT2iAGhHRWViAxv%2F9bA1oGZr2T3bbb6Atz99LnXg78bpaLL%2BZd5MfM9ZNlnAv8AWe3XIZC2MrRe8iYUiH9FuYp8MUCOdX%2FrbrzTUr4fMtFP4ZxUgbbpJ4lxb47nm%2BZVvqIgOecRcc3AtmI01j3pvt3AgVrWpwT7TY9yynpanX7JDFyIL8FCqp22prcGOAffbheTOGLLcAAHimFGsyYH0uBgUxmmaFT6dajR3L2KSHMiRqFz%2BTHDXuGuW2XuzJZdKBAuAb8crQ1tla9B87brMNjU58EGOqUBcCLZ3mx1%2BDB0CPJPxmVx6Mjvj8yBvzioExEPDQ%2B95U7pU2XmI1d8CVo8WnLaxeK0G8JSqTheWne9r%2BaRYYFJxBkSp9x4FhUIIZrxYQMfMVgWLa7uWJ%2F5GnoxcUIl2jQqptCY2EmTVNtTc%2BXaL0kD%2FJZQplE1Qh60B94pZKPQ%2F5auw6ql0Spg1i3xuODNoogM4bTR%2FoZ1kzQqBTqRudVzzNmcDifv&X-Amz-Signature=6d3fc2d5f014db9ec340df27aafcaba5725772aca314b1a84f37d02bb21fe463&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTI6OIX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlmKYO1vlSthxrRewLjLFfdKqGrLC4oVWssEgSqF1tNAiEAleAW4KEw0WqGKsiXwFhyYSGFJS5U8NgdgD1vXHVjg3sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs9xHrI6GnaalLQQCrcA5a2%2B%2FO9B%2BmWXaVW%2FfgRcASWa4v3AFbl7YC%2BFhQITtqWWNxiLvtxeN8SM4op3%2FHIOmnlG4hLLDutGMNqFdj6Z5lKVZ3J%2F1tBJJ1%2BkrkSbHNo36tyLwJj8zWSh51C%2Ff5wORkq1t44c5ZjG%2FizW2A4tOuoFl0p514gHYprVpG%2FnRoyGxUxPF03dmKyRdYSTbo23iNj%2BEFJqYdq%2BCwIAmRL%2BrvPd0dnF6uGI5VPeQ7nSaN7r0IvgTZBP9kcz1LPqHnAgdsRMfyLto2dFSgz0yWHN3xCcyhfqP9Dj1PT9EVc03Xoy%2FFgk%2Fs1%2FG9kXYM8TjE1v9Eg%2B%2Bgt%2FyZDwVTWimaFelFgNxLvIxBeIyzA82ympHT2iAGhHRWViAxv%2F9bA1oGZr2T3bbb6Atz99LnXg78bpaLL%2BZd5MfM9ZNlnAv8AWe3XIZC2MrRe8iYUiH9FuYp8MUCOdX%2FrbrzTUr4fMtFP4ZxUgbbpJ4lxb47nm%2BZVvqIgOecRcc3AtmI01j3pvt3AgVrWpwT7TY9yynpanX7JDFyIL8FCqp22prcGOAffbheTOGLLcAAHimFGsyYH0uBgUxmmaFT6dajR3L2KSHMiRqFz%2BTHDXuGuW2XuzJZdKBAuAb8crQ1tla9B87brMNjU58EGOqUBcCLZ3mx1%2BDB0CPJPxmVx6Mjvj8yBvzioExEPDQ%2B95U7pU2XmI1d8CVo8WnLaxeK0G8JSqTheWne9r%2BaRYYFJxBkSp9x4FhUIIZrxYQMfMVgWLa7uWJ%2F5GnoxcUIl2jQqptCY2EmTVNtTc%2BXaL0kD%2FJZQplE1Qh60B94pZKPQ%2F5auw6ql0Spg1i3xuODNoogM4bTR%2FoZ1kzQqBTqRudVzzNmcDifv&X-Amz-Signature=89d526533a332d9d7f8fe7cedb7a00714fb601b5e6339818dc42e45800596dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTI6OIX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlmKYO1vlSthxrRewLjLFfdKqGrLC4oVWssEgSqF1tNAiEAleAW4KEw0WqGKsiXwFhyYSGFJS5U8NgdgD1vXHVjg3sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs9xHrI6GnaalLQQCrcA5a2%2B%2FO9B%2BmWXaVW%2FfgRcASWa4v3AFbl7YC%2BFhQITtqWWNxiLvtxeN8SM4op3%2FHIOmnlG4hLLDutGMNqFdj6Z5lKVZ3J%2F1tBJJ1%2BkrkSbHNo36tyLwJj8zWSh51C%2Ff5wORkq1t44c5ZjG%2FizW2A4tOuoFl0p514gHYprVpG%2FnRoyGxUxPF03dmKyRdYSTbo23iNj%2BEFJqYdq%2BCwIAmRL%2BrvPd0dnF6uGI5VPeQ7nSaN7r0IvgTZBP9kcz1LPqHnAgdsRMfyLto2dFSgz0yWHN3xCcyhfqP9Dj1PT9EVc03Xoy%2FFgk%2Fs1%2FG9kXYM8TjE1v9Eg%2B%2Bgt%2FyZDwVTWimaFelFgNxLvIxBeIyzA82ympHT2iAGhHRWViAxv%2F9bA1oGZr2T3bbb6Atz99LnXg78bpaLL%2BZd5MfM9ZNlnAv8AWe3XIZC2MrRe8iYUiH9FuYp8MUCOdX%2FrbrzTUr4fMtFP4ZxUgbbpJ4lxb47nm%2BZVvqIgOecRcc3AtmI01j3pvt3AgVrWpwT7TY9yynpanX7JDFyIL8FCqp22prcGOAffbheTOGLLcAAHimFGsyYH0uBgUxmmaFT6dajR3L2KSHMiRqFz%2BTHDXuGuW2XuzJZdKBAuAb8crQ1tla9B87brMNjU58EGOqUBcCLZ3mx1%2BDB0CPJPxmVx6Mjvj8yBvzioExEPDQ%2B95U7pU2XmI1d8CVo8WnLaxeK0G8JSqTheWne9r%2BaRYYFJxBkSp9x4FhUIIZrxYQMfMVgWLa7uWJ%2F5GnoxcUIl2jQqptCY2EmTVNtTc%2BXaL0kD%2FJZQplE1Qh60B94pZKPQ%2F5auw6ql0Spg1i3xuODNoogM4bTR%2FoZ1kzQqBTqRudVzzNmcDifv&X-Amz-Signature=f3010d9e2e7fb66867599bd8fde8fb5eb8927bd8c588a9d3614f20afbbf31569&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
