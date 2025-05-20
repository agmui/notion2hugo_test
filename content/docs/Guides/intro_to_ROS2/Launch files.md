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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMONNA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1YMUjBwA8SGPK5sHnvckHBO%2FtAAYfoepwxFUsQ9q5CAiAWXUvzyv06wITTAyeJUxksb8sXE4ETsuhIsA5XiQWBZiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs3EWq6ucu7eN7gUXKtwDGB9wxpRAkfPq%2F5bWxXWsulQtoiIJaAwsuZ9ABGwxY8ZnKVBETD%2BWBKjC4jC16TyZ3jQLSICZkmXMqdgh8%2BAnfol6kTH7ySeRkN3RFwNRfL%2FMlowON%2B1v9GXBZaTg1ZIFdpFELmKSQmckBbGPpwcdtonuFDdM6coUQ7Y9pIRAtfRtAMgGFE%2FH1iTevg8E8uhFlXR%2F6Js6cLElSck2LuDHj2q%2B7Fm9dX2g7Tw3LQiRl8PXvHbrBlqWf4ribZQOk%2FEpPahW5Zfgn%2F83j6Bdwa7zD2NkObp84oscCABObTkUrYqz%2BG%2BbEwPn56Xdk1BWjPSbJZ0%2FApYiam0LrftNwohV6Te8zZ8av6L9RXGNUrmtc3xCudHgTQ%2BBvX2b56hFWiRncDJYuUZkApJxyObw74%2Bqm515J%2FxIZZgQPQz1bjA5YTkg%2FsM6Tt75GiVkcBhLuWZDigwa0T9vOjFLdeYCj21LKKcLHe6kBKrFUClF0BRFNQMFm8G0PxkBP17YGnNpTAYQ4ulSBnmTgdBbne%2FMlF4l2c5WNQvmsplv5QJsGURTye5w6Z8UX8VhNTUPDbEUoejjMarfMO7qVgAwAhxadu6XuxTAIS%2BdZzgLwRp3OUeq0%2B3rZetGkE%2FRNcTGqhwwmP6ywQY6pgFNY%2FBVPT5hftAikDjuVE8sEONOrOzfgL78GE6fN%2Fac%2Fl4W300baJlNN%2BHu6ULcPu01VGpU9tRoAk7uyG9H6Hyulew0gDXcnRFJGb7bvMK7PheycFDS8SAN%2BK8EbWfFjGiMurO382jwQvMVP84do8%2F93QPmGxa5hQk8frs8g6G5ua%2FY4iMd8naLrq%2FcejQSy4MCocNDzZzQDVVKXA0VpLuUfTbihqH%2F&X-Amz-Signature=0ebb92a44d4494518de4fc7a0f827187a0ccf1796fc0f8f86b92a9ff81f72122&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMONNA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1YMUjBwA8SGPK5sHnvckHBO%2FtAAYfoepwxFUsQ9q5CAiAWXUvzyv06wITTAyeJUxksb8sXE4ETsuhIsA5XiQWBZiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs3EWq6ucu7eN7gUXKtwDGB9wxpRAkfPq%2F5bWxXWsulQtoiIJaAwsuZ9ABGwxY8ZnKVBETD%2BWBKjC4jC16TyZ3jQLSICZkmXMqdgh8%2BAnfol6kTH7ySeRkN3RFwNRfL%2FMlowON%2B1v9GXBZaTg1ZIFdpFELmKSQmckBbGPpwcdtonuFDdM6coUQ7Y9pIRAtfRtAMgGFE%2FH1iTevg8E8uhFlXR%2F6Js6cLElSck2LuDHj2q%2B7Fm9dX2g7Tw3LQiRl8PXvHbrBlqWf4ribZQOk%2FEpPahW5Zfgn%2F83j6Bdwa7zD2NkObp84oscCABObTkUrYqz%2BG%2BbEwPn56Xdk1BWjPSbJZ0%2FApYiam0LrftNwohV6Te8zZ8av6L9RXGNUrmtc3xCudHgTQ%2BBvX2b56hFWiRncDJYuUZkApJxyObw74%2Bqm515J%2FxIZZgQPQz1bjA5YTkg%2FsM6Tt75GiVkcBhLuWZDigwa0T9vOjFLdeYCj21LKKcLHe6kBKrFUClF0BRFNQMFm8G0PxkBP17YGnNpTAYQ4ulSBnmTgdBbne%2FMlF4l2c5WNQvmsplv5QJsGURTye5w6Z8UX8VhNTUPDbEUoejjMarfMO7qVgAwAhxadu6XuxTAIS%2BdZzgLwRp3OUeq0%2B3rZetGkE%2FRNcTGqhwwmP6ywQY6pgFNY%2FBVPT5hftAikDjuVE8sEONOrOzfgL78GE6fN%2Fac%2Fl4W300baJlNN%2BHu6ULcPu01VGpU9tRoAk7uyG9H6Hyulew0gDXcnRFJGb7bvMK7PheycFDS8SAN%2BK8EbWfFjGiMurO382jwQvMVP84do8%2F93QPmGxa5hQk8frs8g6G5ua%2FY4iMd8naLrq%2FcejQSy4MCocNDzZzQDVVKXA0VpLuUfTbihqH%2F&X-Amz-Signature=08d39db2e06fccdda9b63462588c8f00cd56094568ea87d8ede4e290518e7b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMONNA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1YMUjBwA8SGPK5sHnvckHBO%2FtAAYfoepwxFUsQ9q5CAiAWXUvzyv06wITTAyeJUxksb8sXE4ETsuhIsA5XiQWBZiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs3EWq6ucu7eN7gUXKtwDGB9wxpRAkfPq%2F5bWxXWsulQtoiIJaAwsuZ9ABGwxY8ZnKVBETD%2BWBKjC4jC16TyZ3jQLSICZkmXMqdgh8%2BAnfol6kTH7ySeRkN3RFwNRfL%2FMlowON%2B1v9GXBZaTg1ZIFdpFELmKSQmckBbGPpwcdtonuFDdM6coUQ7Y9pIRAtfRtAMgGFE%2FH1iTevg8E8uhFlXR%2F6Js6cLElSck2LuDHj2q%2B7Fm9dX2g7Tw3LQiRl8PXvHbrBlqWf4ribZQOk%2FEpPahW5Zfgn%2F83j6Bdwa7zD2NkObp84oscCABObTkUrYqz%2BG%2BbEwPn56Xdk1BWjPSbJZ0%2FApYiam0LrftNwohV6Te8zZ8av6L9RXGNUrmtc3xCudHgTQ%2BBvX2b56hFWiRncDJYuUZkApJxyObw74%2Bqm515J%2FxIZZgQPQz1bjA5YTkg%2FsM6Tt75GiVkcBhLuWZDigwa0T9vOjFLdeYCj21LKKcLHe6kBKrFUClF0BRFNQMFm8G0PxkBP17YGnNpTAYQ4ulSBnmTgdBbne%2FMlF4l2c5WNQvmsplv5QJsGURTye5w6Z8UX8VhNTUPDbEUoejjMarfMO7qVgAwAhxadu6XuxTAIS%2BdZzgLwRp3OUeq0%2B3rZetGkE%2FRNcTGqhwwmP6ywQY6pgFNY%2FBVPT5hftAikDjuVE8sEONOrOzfgL78GE6fN%2Fac%2Fl4W300baJlNN%2BHu6ULcPu01VGpU9tRoAk7uyG9H6Hyulew0gDXcnRFJGb7bvMK7PheycFDS8SAN%2BK8EbWfFjGiMurO382jwQvMVP84do8%2F93QPmGxa5hQk8frs8g6G5ua%2FY4iMd8naLrq%2FcejQSy4MCocNDzZzQDVVKXA0VpLuUfTbihqH%2F&X-Amz-Signature=82e5586c6eb03aeab5b9edde53a6d80660022fe0a8c56c66cac50001528d2274&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
