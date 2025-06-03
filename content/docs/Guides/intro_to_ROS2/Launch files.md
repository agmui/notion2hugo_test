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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SCFV2E%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDcXU5lZG66VBSIPw%2F4yqcRwPEEaKXZukD%2BNlO%2FNFGJFwIgKSy9prp2gIHVlYjYAoSo%2FG3wHJw9%2BCdcXd8kAmQWGs8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCwr4jilpZZ%2BRZWXESrcA9ATBsBRQmelOWrmcq3waqoP6QMoRVZaFhPDVE4%2BgzFrsmI7C3sn5uo5iR8uhhb9nsPXYj0ui4ufOKBsqv6iWvfR2Ht035DyGls6QD5kKTEra1oUHXR2mN2FwP3D%2FiL5VHnaYXHg7jusMNhN5YpLoz%2Bvam9C%2BgWy2TPam9LsNceXq%2BRYdZYnCtwqfuEd2BoGj7bq2nOmF7b1zfVk%2BXlphyP1RzPFZ3tOCfAo92goSm7BQEM%2FKXPa%2FgA4kFSl5pTUG0iT6kof1Gpgi%2FrXYsR7aSDh7I5d18XleVYV4SxHZJTvUbnC2yNjIVu0LcvTfsSSkv2RslokDtkgB1xDuLGJnLrayE6lUMKFKtvewVwVjV2EB%2BDA5FhSgr%2BJhZgasvI%2FavfrKjyNVVZ%2Fl6WMm6yqsbjZ%2Fb7NJYGGZg2BWb4tgEiN6wQFwO%2FKwx151SVn63mFfEWZGJ5xZ8zZK063eVkER4Ko2WratvaXcX3YeFOPrK7zw56SC9pC5SfG4hyUzWUNVmQNlyy2eyB27e78clP61%2BBLRFtrmTze2nD2IGIxldmWMCHpaQP5KwwCGMdWsovt%2FT419hR6mHYL3VitK67WlaGaU67eDjRXDZej83hazeER4xa0uWKhsA7CZr3kMN%2Fm%2B8EGOqUBcdn89TFuDCifqagRPZCOMOImy2WqXNePmk%2BxhaWXAC7ztGaUvQwBKIdLXzCGLU2CTz%2BsUwUT%2BMrIwTjEV2wWtUbXjLlO770sUoUpv9z%2B%2BdFoaCOwgBQGCNYJjPNeQADwB0%2BZVInfuIim3ZVUWsorpqvELoUg1bzXqtDzcFByn8uK%2ByOtabYfr7yuBKjP5YR7OUcYs%2FrFox1LySOfnj42vpxwHq8L&X-Amz-Signature=c4d94897ab705e557d109569d0e79b4ba00a4f6b281fd267626209f4b6a45372&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SCFV2E%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDcXU5lZG66VBSIPw%2F4yqcRwPEEaKXZukD%2BNlO%2FNFGJFwIgKSy9prp2gIHVlYjYAoSo%2FG3wHJw9%2BCdcXd8kAmQWGs8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCwr4jilpZZ%2BRZWXESrcA9ATBsBRQmelOWrmcq3waqoP6QMoRVZaFhPDVE4%2BgzFrsmI7C3sn5uo5iR8uhhb9nsPXYj0ui4ufOKBsqv6iWvfR2Ht035DyGls6QD5kKTEra1oUHXR2mN2FwP3D%2FiL5VHnaYXHg7jusMNhN5YpLoz%2Bvam9C%2BgWy2TPam9LsNceXq%2BRYdZYnCtwqfuEd2BoGj7bq2nOmF7b1zfVk%2BXlphyP1RzPFZ3tOCfAo92goSm7BQEM%2FKXPa%2FgA4kFSl5pTUG0iT6kof1Gpgi%2FrXYsR7aSDh7I5d18XleVYV4SxHZJTvUbnC2yNjIVu0LcvTfsSSkv2RslokDtkgB1xDuLGJnLrayE6lUMKFKtvewVwVjV2EB%2BDA5FhSgr%2BJhZgasvI%2FavfrKjyNVVZ%2Fl6WMm6yqsbjZ%2Fb7NJYGGZg2BWb4tgEiN6wQFwO%2FKwx151SVn63mFfEWZGJ5xZ8zZK063eVkER4Ko2WratvaXcX3YeFOPrK7zw56SC9pC5SfG4hyUzWUNVmQNlyy2eyB27e78clP61%2BBLRFtrmTze2nD2IGIxldmWMCHpaQP5KwwCGMdWsovt%2FT419hR6mHYL3VitK67WlaGaU67eDjRXDZej83hazeER4xa0uWKhsA7CZr3kMN%2Fm%2B8EGOqUBcdn89TFuDCifqagRPZCOMOImy2WqXNePmk%2BxhaWXAC7ztGaUvQwBKIdLXzCGLU2CTz%2BsUwUT%2BMrIwTjEV2wWtUbXjLlO770sUoUpv9z%2B%2BdFoaCOwgBQGCNYJjPNeQADwB0%2BZVInfuIim3ZVUWsorpqvELoUg1bzXqtDzcFByn8uK%2ByOtabYfr7yuBKjP5YR7OUcYs%2FrFox1LySOfnj42vpxwHq8L&X-Amz-Signature=af7267693b9e1e86f937ca7309c0ae1e19eed5f00cf56d0408febd570fe3c955&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SCFV2E%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDcXU5lZG66VBSIPw%2F4yqcRwPEEaKXZukD%2BNlO%2FNFGJFwIgKSy9prp2gIHVlYjYAoSo%2FG3wHJw9%2BCdcXd8kAmQWGs8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCwr4jilpZZ%2BRZWXESrcA9ATBsBRQmelOWrmcq3waqoP6QMoRVZaFhPDVE4%2BgzFrsmI7C3sn5uo5iR8uhhb9nsPXYj0ui4ufOKBsqv6iWvfR2Ht035DyGls6QD5kKTEra1oUHXR2mN2FwP3D%2FiL5VHnaYXHg7jusMNhN5YpLoz%2Bvam9C%2BgWy2TPam9LsNceXq%2BRYdZYnCtwqfuEd2BoGj7bq2nOmF7b1zfVk%2BXlphyP1RzPFZ3tOCfAo92goSm7BQEM%2FKXPa%2FgA4kFSl5pTUG0iT6kof1Gpgi%2FrXYsR7aSDh7I5d18XleVYV4SxHZJTvUbnC2yNjIVu0LcvTfsSSkv2RslokDtkgB1xDuLGJnLrayE6lUMKFKtvewVwVjV2EB%2BDA5FhSgr%2BJhZgasvI%2FavfrKjyNVVZ%2Fl6WMm6yqsbjZ%2Fb7NJYGGZg2BWb4tgEiN6wQFwO%2FKwx151SVn63mFfEWZGJ5xZ8zZK063eVkER4Ko2WratvaXcX3YeFOPrK7zw56SC9pC5SfG4hyUzWUNVmQNlyy2eyB27e78clP61%2BBLRFtrmTze2nD2IGIxldmWMCHpaQP5KwwCGMdWsovt%2FT419hR6mHYL3VitK67WlaGaU67eDjRXDZej83hazeER4xa0uWKhsA7CZr3kMN%2Fm%2B8EGOqUBcdn89TFuDCifqagRPZCOMOImy2WqXNePmk%2BxhaWXAC7ztGaUvQwBKIdLXzCGLU2CTz%2BsUwUT%2BMrIwTjEV2wWtUbXjLlO770sUoUpv9z%2B%2BdFoaCOwgBQGCNYJjPNeQADwB0%2BZVInfuIim3ZVUWsorpqvELoUg1bzXqtDzcFByn8uK%2ByOtabYfr7yuBKjP5YR7OUcYs%2FrFox1LySOfnj42vpxwHq8L&X-Amz-Signature=64b9b92f38e6bb0d3aec6909735368ab8d790873d6b6037b0d015937952365b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
