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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWNLLD3L%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDW4GBpK1nLO%2Bvz%2BGcpOMnaC9vb5RkFYFhAu5wiSz%2FYkAiEA9uSFTy0ucLmtNYxKSWlGk4FhA6nwonMw4eKCUAsYGYgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFHXdjyD6Af%2FPLsvoCrcA7c9wMnP%2BU5R7cntKARlZ0j0hP8yvr%2BirEtDBf6XuwRMc%2BxlNBLDrBatalTGnDkEsepVoLOeVX%2F6iH7lcki87O1IEjul2jPMZshiPcLOdX5jlzMIkZlnNndlvY14kBZiOKMg8fsE%2BBEGeEcU4hhHBKnRBBabsOLoipu8Lc1mArL2pEtnRHCemvhQG9IWb%2ByTJoVuzozvnr%2FQQJ4oIElw2GT6NV36PJ4YXjJwRvu%2FG6nKVDa0kU9Ym0wB%2FPIM8my9IBKHYLygN9Rxxu3z6JSmSxwUkF1t54LLaNLtQpmf4HNIsieQAGfJfX9rS%2BbCNDjBoqODnzd8BoYJniT06WBcXQvHStLo35swONiVgztz7rJ6OYdQL7yWxqFBG2UrSZgB225YkscdNdiLJNsze20CLTUgRHCgjnoz8r%2FJRC38a9JElruP83AoiHLnouRbwI%2BFms2BHhugAJ2zzD3DEO7Un76a%2FCtbbMIuJUXFdh3PmuVHpd0SDFczu3ktw3EQ7GQU6QVKkdU1fjib9dZuE8WHK7ApEJdIATd7GYybgqRgHahiEDc2vVhqdEd%2B89kTiLc4y%2BfiM76gutB%2FrGimwQsAR%2FzBS%2FCJJsLztTH0a4tVPkmTXXgJwwMaln0ysuPoMKeuqMMGOqUBhJKoqF7nTehuFAFYDgtu0njq2TyBQUJfDURYkdFsonA2Iq780qx5k5VuyRex1CE0XyCwYQowI%2FSrt3%2F3A1pztgrWHmkrWjfEpFT8Cn9wpJfyba9c4tftaG41oXxFQkiiiO5H7JW8RrZ9ME92sPlTiK6TKLkBL6Voa6H%2FPnMWLQHczgn17f6EvPs2LQjBgyOE99KYDC%2BbXWU9kIlgKtysGgIT24c%2F&X-Amz-Signature=2657c4d7854959a34dde11a42d1335002f05002f69e9b78900220a97c2db1828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWNLLD3L%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDW4GBpK1nLO%2Bvz%2BGcpOMnaC9vb5RkFYFhAu5wiSz%2FYkAiEA9uSFTy0ucLmtNYxKSWlGk4FhA6nwonMw4eKCUAsYGYgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFHXdjyD6Af%2FPLsvoCrcA7c9wMnP%2BU5R7cntKARlZ0j0hP8yvr%2BirEtDBf6XuwRMc%2BxlNBLDrBatalTGnDkEsepVoLOeVX%2F6iH7lcki87O1IEjul2jPMZshiPcLOdX5jlzMIkZlnNndlvY14kBZiOKMg8fsE%2BBEGeEcU4hhHBKnRBBabsOLoipu8Lc1mArL2pEtnRHCemvhQG9IWb%2ByTJoVuzozvnr%2FQQJ4oIElw2GT6NV36PJ4YXjJwRvu%2FG6nKVDa0kU9Ym0wB%2FPIM8my9IBKHYLygN9Rxxu3z6JSmSxwUkF1t54LLaNLtQpmf4HNIsieQAGfJfX9rS%2BbCNDjBoqODnzd8BoYJniT06WBcXQvHStLo35swONiVgztz7rJ6OYdQL7yWxqFBG2UrSZgB225YkscdNdiLJNsze20CLTUgRHCgjnoz8r%2FJRC38a9JElruP83AoiHLnouRbwI%2BFms2BHhugAJ2zzD3DEO7Un76a%2FCtbbMIuJUXFdh3PmuVHpd0SDFczu3ktw3EQ7GQU6QVKkdU1fjib9dZuE8WHK7ApEJdIATd7GYybgqRgHahiEDc2vVhqdEd%2B89kTiLc4y%2BfiM76gutB%2FrGimwQsAR%2FzBS%2FCJJsLztTH0a4tVPkmTXXgJwwMaln0ysuPoMKeuqMMGOqUBhJKoqF7nTehuFAFYDgtu0njq2TyBQUJfDURYkdFsonA2Iq780qx5k5VuyRex1CE0XyCwYQowI%2FSrt3%2F3A1pztgrWHmkrWjfEpFT8Cn9wpJfyba9c4tftaG41oXxFQkiiiO5H7JW8RrZ9ME92sPlTiK6TKLkBL6Voa6H%2FPnMWLQHczgn17f6EvPs2LQjBgyOE99KYDC%2BbXWU9kIlgKtysGgIT24c%2F&X-Amz-Signature=1cc79b968b99aac87233fcf210e0b856edbb1ec35b30780d91c42b595bb94b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWNLLD3L%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDW4GBpK1nLO%2Bvz%2BGcpOMnaC9vb5RkFYFhAu5wiSz%2FYkAiEA9uSFTy0ucLmtNYxKSWlGk4FhA6nwonMw4eKCUAsYGYgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFHXdjyD6Af%2FPLsvoCrcA7c9wMnP%2BU5R7cntKARlZ0j0hP8yvr%2BirEtDBf6XuwRMc%2BxlNBLDrBatalTGnDkEsepVoLOeVX%2F6iH7lcki87O1IEjul2jPMZshiPcLOdX5jlzMIkZlnNndlvY14kBZiOKMg8fsE%2BBEGeEcU4hhHBKnRBBabsOLoipu8Lc1mArL2pEtnRHCemvhQG9IWb%2ByTJoVuzozvnr%2FQQJ4oIElw2GT6NV36PJ4YXjJwRvu%2FG6nKVDa0kU9Ym0wB%2FPIM8my9IBKHYLygN9Rxxu3z6JSmSxwUkF1t54LLaNLtQpmf4HNIsieQAGfJfX9rS%2BbCNDjBoqODnzd8BoYJniT06WBcXQvHStLo35swONiVgztz7rJ6OYdQL7yWxqFBG2UrSZgB225YkscdNdiLJNsze20CLTUgRHCgjnoz8r%2FJRC38a9JElruP83AoiHLnouRbwI%2BFms2BHhugAJ2zzD3DEO7Un76a%2FCtbbMIuJUXFdh3PmuVHpd0SDFczu3ktw3EQ7GQU6QVKkdU1fjib9dZuE8WHK7ApEJdIATd7GYybgqRgHahiEDc2vVhqdEd%2B89kTiLc4y%2BfiM76gutB%2FrGimwQsAR%2FzBS%2FCJJsLztTH0a4tVPkmTXXgJwwMaln0ysuPoMKeuqMMGOqUBhJKoqF7nTehuFAFYDgtu0njq2TyBQUJfDURYkdFsonA2Iq780qx5k5VuyRex1CE0XyCwYQowI%2FSrt3%2F3A1pztgrWHmkrWjfEpFT8Cn9wpJfyba9c4tftaG41oXxFQkiiiO5H7JW8RrZ9ME92sPlTiK6TKLkBL6Voa6H%2FPnMWLQHczgn17f6EvPs2LQjBgyOE99KYDC%2BbXWU9kIlgKtysGgIT24c%2F&X-Amz-Signature=93ecf619fce4161ad07b99ad19bd30cab3140679f3e1a3603de003e3a6b1a1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
