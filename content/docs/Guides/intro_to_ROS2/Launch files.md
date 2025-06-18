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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDDI4U6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE7hiUzTINK3hoA5YWyBro%2F9nQ8IOoNCgSgqXXbxPE7AiBJ%2Ffd8beKJnzqhUm3jX70DY3O5w7ujFTIvBKDEDPh%2FqyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgUWR4YwqtBCE34%2FHKtwDWo4zsUtsmtewRz%2BtCCx9booBmNsJIMPdnOPl%2BsyfIrcXW%2FvObroHEzkU4pwU%2BuTKyjzvgwbt5exO9vCowFds194iVGHxnMZVegrkkCtWQkzC6qCwdAK2U3MdgVnOdh5wrnNa7osTgiY%2Bge28CNoNf2iSz7YPBlwQa7MLqbZVR%2FxHCes%2FUPSja057VT%2F4n7r1ATVOmdnYnEKgjisw1c5bO8tJXuqu%2BbAKBswUNj9sT3imuOlr97TjaSP25F6iDdi8zk0aBW8nVPZwnnHIN7FMPaEFkONj48rMvxSIoHzVD6rksTUPq6qDtYFUtCte%2BcTvFD8vvendCsif9XImPULQ%2FXeLMnXz2dVlEqLmV2ATpnnh6eRFDaMvvoUxGhRktErUPIb8SpHIXU1d%2B7TwwXcYU7STJgiA3GWPaKktZC7MSpFqZmU2100oCH2PMWehfWl0%2BqivqOVpoH2gfFQUSqX7aIvbCoC0zCUbsM0nEjKuwifyg3je5AmcdrjnOxwYKpzT1pz0KgHufNaaUoRuI%2B9lQb390aM8KpZKS43bG8CjdfmX%2Fwgvdq2SGP9eI%2BiFO7Pl1Cg885JYzrHNi%2FkbB1DQbHZfjoQqvGkXQquKiJD0k6ZdzHADy%2BBob9p43ZcwzfPKwgY6pgE24dNGT%2BltMIJbo1a7%2FDTfBGDgWEtjS%2FMAQEGHtdMS5tgL%2B3JkZfzVf5eu1TMRZB2pMFh6%2FvVDEHioUuiREnYXaN1VOHPh3IaZGnE4aB%2BRHYzZ5b5hR32%2BekRy1x1%2FgAiltflnG9WQL00xA0bHqfDC9Iw8c8qR2dCFjBVu%2FaWM07vOoyk3%2B%2FmO%2BHv77pyiCIyYqtK%2FsxCsu%2FNbqcFQ6UJjSWoStmvE&X-Amz-Signature=ccaa313325abd92bb9d979ab6a127f4f6365caa51a88ab0004357639986e2bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDDI4U6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE7hiUzTINK3hoA5YWyBro%2F9nQ8IOoNCgSgqXXbxPE7AiBJ%2Ffd8beKJnzqhUm3jX70DY3O5w7ujFTIvBKDEDPh%2FqyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgUWR4YwqtBCE34%2FHKtwDWo4zsUtsmtewRz%2BtCCx9booBmNsJIMPdnOPl%2BsyfIrcXW%2FvObroHEzkU4pwU%2BuTKyjzvgwbt5exO9vCowFds194iVGHxnMZVegrkkCtWQkzC6qCwdAK2U3MdgVnOdh5wrnNa7osTgiY%2Bge28CNoNf2iSz7YPBlwQa7MLqbZVR%2FxHCes%2FUPSja057VT%2F4n7r1ATVOmdnYnEKgjisw1c5bO8tJXuqu%2BbAKBswUNj9sT3imuOlr97TjaSP25F6iDdi8zk0aBW8nVPZwnnHIN7FMPaEFkONj48rMvxSIoHzVD6rksTUPq6qDtYFUtCte%2BcTvFD8vvendCsif9XImPULQ%2FXeLMnXz2dVlEqLmV2ATpnnh6eRFDaMvvoUxGhRktErUPIb8SpHIXU1d%2B7TwwXcYU7STJgiA3GWPaKktZC7MSpFqZmU2100oCH2PMWehfWl0%2BqivqOVpoH2gfFQUSqX7aIvbCoC0zCUbsM0nEjKuwifyg3je5AmcdrjnOxwYKpzT1pz0KgHufNaaUoRuI%2B9lQb390aM8KpZKS43bG8CjdfmX%2Fwgvdq2SGP9eI%2BiFO7Pl1Cg885JYzrHNi%2FkbB1DQbHZfjoQqvGkXQquKiJD0k6ZdzHADy%2BBob9p43ZcwzfPKwgY6pgE24dNGT%2BltMIJbo1a7%2FDTfBGDgWEtjS%2FMAQEGHtdMS5tgL%2B3JkZfzVf5eu1TMRZB2pMFh6%2FvVDEHioUuiREnYXaN1VOHPh3IaZGnE4aB%2BRHYzZ5b5hR32%2BekRy1x1%2FgAiltflnG9WQL00xA0bHqfDC9Iw8c8qR2dCFjBVu%2FaWM07vOoyk3%2B%2FmO%2BHv77pyiCIyYqtK%2FsxCsu%2FNbqcFQ6UJjSWoStmvE&X-Amz-Signature=ec9e793c90d0a699e9fd6a8044d73846988ff3ff58e937834a9194977861acd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDDI4U6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE7hiUzTINK3hoA5YWyBro%2F9nQ8IOoNCgSgqXXbxPE7AiBJ%2Ffd8beKJnzqhUm3jX70DY3O5w7ujFTIvBKDEDPh%2FqyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgUWR4YwqtBCE34%2FHKtwDWo4zsUtsmtewRz%2BtCCx9booBmNsJIMPdnOPl%2BsyfIrcXW%2FvObroHEzkU4pwU%2BuTKyjzvgwbt5exO9vCowFds194iVGHxnMZVegrkkCtWQkzC6qCwdAK2U3MdgVnOdh5wrnNa7osTgiY%2Bge28CNoNf2iSz7YPBlwQa7MLqbZVR%2FxHCes%2FUPSja057VT%2F4n7r1ATVOmdnYnEKgjisw1c5bO8tJXuqu%2BbAKBswUNj9sT3imuOlr97TjaSP25F6iDdi8zk0aBW8nVPZwnnHIN7FMPaEFkONj48rMvxSIoHzVD6rksTUPq6qDtYFUtCte%2BcTvFD8vvendCsif9XImPULQ%2FXeLMnXz2dVlEqLmV2ATpnnh6eRFDaMvvoUxGhRktErUPIb8SpHIXU1d%2B7TwwXcYU7STJgiA3GWPaKktZC7MSpFqZmU2100oCH2PMWehfWl0%2BqivqOVpoH2gfFQUSqX7aIvbCoC0zCUbsM0nEjKuwifyg3je5AmcdrjnOxwYKpzT1pz0KgHufNaaUoRuI%2B9lQb390aM8KpZKS43bG8CjdfmX%2Fwgvdq2SGP9eI%2BiFO7Pl1Cg885JYzrHNi%2FkbB1DQbHZfjoQqvGkXQquKiJD0k6ZdzHADy%2BBob9p43ZcwzfPKwgY6pgE24dNGT%2BltMIJbo1a7%2FDTfBGDgWEtjS%2FMAQEGHtdMS5tgL%2B3JkZfzVf5eu1TMRZB2pMFh6%2FvVDEHioUuiREnYXaN1VOHPh3IaZGnE4aB%2BRHYzZ5b5hR32%2BekRy1x1%2FgAiltflnG9WQL00xA0bHqfDC9Iw8c8qR2dCFjBVu%2FaWM07vOoyk3%2B%2FmO%2BHv77pyiCIyYqtK%2FsxCsu%2FNbqcFQ6UJjSWoStmvE&X-Amz-Signature=d9411b826bd70e1a19e6379f191f19764d63f2eabd5193cd360f069429893909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
