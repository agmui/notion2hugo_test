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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2RH445%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAn%2FYWD%2F02jfMXuyQlG1rL%2Fi8JMT%2F%2FWNCySgKmTS0aWoAiA%2BCmc8q7Y1jSkk%2Fdwre3pqXHX1XkqHMELdcfQGViL2ySqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2zZ83VcjfiXZgC3KtwD%2B%2BVGh0JScOMLjAvEfhpxp8xysziuwpMTKMNsIuR360RolYQUiuLG%2BlW8rz8f8gnOUKq6ZxZARNF33yzXpjAMRYf9Ml8rsVY59PEPFgJQMflv1iE0RpM1oZ48%2B7vnLsyvBJ6XOb0i2fJ3kVy2vAgEVNWXcBEZHcJNvZVCCLxaaUqeX%2FnDI%2F09C4uY9PkAbhKcGWWPhCYhpksCN2vAmXvGAjeg%2FD92O3cAdAAp02a674G9fZzQrMxt2u%2B4y1s1kTEXT%2B7M0bLxkq8DrD%2BzM37f0A4smfnNwfxK0KbmdYdhqA78PQrji6wT3rafbiTKVsO7gf3mOSgTGnX%2BVj7DbLmkuOYRyVvZOqZHoxhZPFmNj3kRjumgjZQQhIpnTbkOt%2BL901RzO46gYKgfNmy4pAsxRXpV5LH5Zu%2FaM7%2Bupo0Qmx71f%2BW7g9No3WOmps5LAixm2sdJgoaFm0N22rUOT0nWqUjlkFtocin50vagN1TiVpadeptvfa%2Fdb1%2BAvRjvylHTwM8jZ1xJ3%2FaegGW0l9EL4ioJKcIG1PwyA7rpOP4JiCHdRzQ8z5LjdzzskCSHLUCYM7%2Fu2%2FCFZnHGEQ0tW3SsTI6ppOzc3ORgV9dw2SvGfxFCr17g3X6La3dDWo8w7OntvgY6pgGLk%2B3utHOubmxCBBXA%2FVv1drOp2jgCQbCKVJCbw0HOIygOe0fgmHRMoAiPgALW3lVdZG6TRlW97f2r4egmIn5ZlAO87pGyyg8tHz4kUOPi3ts3WMazU0MBhps7FdgpE%2F3GZbJF8zRLFg1rXInQofF%2FeY3DZ4ukFe5anHHnyr%2BYA%2F3mPBDh2n5HD0AePUMlz7uTSaSDeAquqeqJZe3Berdi6mDUVLgc&X-Amz-Signature=1b426f523760711ad3b113f8c83abe8a35a9fe483bb3c8ce55a51ea175ddeb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2RH445%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAn%2FYWD%2F02jfMXuyQlG1rL%2Fi8JMT%2F%2FWNCySgKmTS0aWoAiA%2BCmc8q7Y1jSkk%2Fdwre3pqXHX1XkqHMELdcfQGViL2ySqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2zZ83VcjfiXZgC3KtwD%2B%2BVGh0JScOMLjAvEfhpxp8xysziuwpMTKMNsIuR360RolYQUiuLG%2BlW8rz8f8gnOUKq6ZxZARNF33yzXpjAMRYf9Ml8rsVY59PEPFgJQMflv1iE0RpM1oZ48%2B7vnLsyvBJ6XOb0i2fJ3kVy2vAgEVNWXcBEZHcJNvZVCCLxaaUqeX%2FnDI%2F09C4uY9PkAbhKcGWWPhCYhpksCN2vAmXvGAjeg%2FD92O3cAdAAp02a674G9fZzQrMxt2u%2B4y1s1kTEXT%2B7M0bLxkq8DrD%2BzM37f0A4smfnNwfxK0KbmdYdhqA78PQrji6wT3rafbiTKVsO7gf3mOSgTGnX%2BVj7DbLmkuOYRyVvZOqZHoxhZPFmNj3kRjumgjZQQhIpnTbkOt%2BL901RzO46gYKgfNmy4pAsxRXpV5LH5Zu%2FaM7%2Bupo0Qmx71f%2BW7g9No3WOmps5LAixm2sdJgoaFm0N22rUOT0nWqUjlkFtocin50vagN1TiVpadeptvfa%2Fdb1%2BAvRjvylHTwM8jZ1xJ3%2FaegGW0l9EL4ioJKcIG1PwyA7rpOP4JiCHdRzQ8z5LjdzzskCSHLUCYM7%2Fu2%2FCFZnHGEQ0tW3SsTI6ppOzc3ORgV9dw2SvGfxFCr17g3X6La3dDWo8w7OntvgY6pgGLk%2B3utHOubmxCBBXA%2FVv1drOp2jgCQbCKVJCbw0HOIygOe0fgmHRMoAiPgALW3lVdZG6TRlW97f2r4egmIn5ZlAO87pGyyg8tHz4kUOPi3ts3WMazU0MBhps7FdgpE%2F3GZbJF8zRLFg1rXInQofF%2FeY3DZ4ukFe5anHHnyr%2BYA%2F3mPBDh2n5HD0AePUMlz7uTSaSDeAquqeqJZe3Berdi6mDUVLgc&X-Amz-Signature=e9a83fbb54e50b0a6781a8f5d8b74e18fcb22579569d0058262a64df094854bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2RH445%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAn%2FYWD%2F02jfMXuyQlG1rL%2Fi8JMT%2F%2FWNCySgKmTS0aWoAiA%2BCmc8q7Y1jSkk%2Fdwre3pqXHX1XkqHMELdcfQGViL2ySqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2zZ83VcjfiXZgC3KtwD%2B%2BVGh0JScOMLjAvEfhpxp8xysziuwpMTKMNsIuR360RolYQUiuLG%2BlW8rz8f8gnOUKq6ZxZARNF33yzXpjAMRYf9Ml8rsVY59PEPFgJQMflv1iE0RpM1oZ48%2B7vnLsyvBJ6XOb0i2fJ3kVy2vAgEVNWXcBEZHcJNvZVCCLxaaUqeX%2FnDI%2F09C4uY9PkAbhKcGWWPhCYhpksCN2vAmXvGAjeg%2FD92O3cAdAAp02a674G9fZzQrMxt2u%2B4y1s1kTEXT%2B7M0bLxkq8DrD%2BzM37f0A4smfnNwfxK0KbmdYdhqA78PQrji6wT3rafbiTKVsO7gf3mOSgTGnX%2BVj7DbLmkuOYRyVvZOqZHoxhZPFmNj3kRjumgjZQQhIpnTbkOt%2BL901RzO46gYKgfNmy4pAsxRXpV5LH5Zu%2FaM7%2Bupo0Qmx71f%2BW7g9No3WOmps5LAixm2sdJgoaFm0N22rUOT0nWqUjlkFtocin50vagN1TiVpadeptvfa%2Fdb1%2BAvRjvylHTwM8jZ1xJ3%2FaegGW0l9EL4ioJKcIG1PwyA7rpOP4JiCHdRzQ8z5LjdzzskCSHLUCYM7%2Fu2%2FCFZnHGEQ0tW3SsTI6ppOzc3ORgV9dw2SvGfxFCr17g3X6La3dDWo8w7OntvgY6pgGLk%2B3utHOubmxCBBXA%2FVv1drOp2jgCQbCKVJCbw0HOIygOe0fgmHRMoAiPgALW3lVdZG6TRlW97f2r4egmIn5ZlAO87pGyyg8tHz4kUOPi3ts3WMazU0MBhps7FdgpE%2F3GZbJF8zRLFg1rXInQofF%2FeY3DZ4ukFe5anHHnyr%2BYA%2F3mPBDh2n5HD0AePUMlz7uTSaSDeAquqeqJZe3Berdi6mDUVLgc&X-Amz-Signature=f05e256a81a72d522fd1ea0653024a3a649dd5f8ab08e72e7f9e5f3062f1c0be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
