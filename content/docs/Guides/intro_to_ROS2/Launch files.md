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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6K65P2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFog%2Bx7135MHMrQESRy4OrvU2jSfVoFXC2iXe6Sogg6KAiEA6u4R8YKBTVdCI%2F6dCexfZzYhPcEgGsAqPjndkSNXYm4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTF8raBAZftsPkVkSrcA8v3VwphopdVox2HcMPOL1Wn%2FYwpnzmXQhfi3XRA1%2FNjALVu4%2BxxkxZZKeZQbARu5bwVS%2FFfXOWxLm%2B8o91OCWAAi81wHJYHQKdZr9N%2Bhg37D%2FXoSKvOPjX%2FD0NZCz%2BrE6A5Ktzr0pvfRb%2FR709KqF6QVLAhGH12lglpYvqP71HANAyGmy52esN0l1NDIsHZKvlpIAD86%2B5brxJL7i9da4nVjRBmClAmePvSzqP10FLIg4M2uh9eQb%2FHjT%2Bz0IJxqXLu2XIQUL%2FpF9ShowasNhQMlKx0pqgAUrvssepeW4WNbM98og8fJaFVuO2twF0bOObnC0z6MoEdIfVBNeej0V%2BJ%2F6hXw7NlQcIrZd3mN33m%2FLKuZwAp455Npx9nm69DQHFPXdJvPKic8eYUFTMZpNik9iczAfNXFDuqvYM7LSwGt9Adp5bkdtdChi8D2zNBf7x4GToCCcPHSM4bCyM%2BQnZRKxuw98e0m6J2iYmWvWVmuW1NE%2Bvp%2BHV3gaBSK7bWvbII%2FWJtQpC00YDGxU6%2BwsIIBRlBrlHL146SCswhHCUYdYxsoIJwPXme5HLj5jgAJZ0lNb0Wc3Lv%2FdVVkQiJyHCmbz%2BZWCGxNYkhNUCPv2QoiPeA%2BddlNIWpikZvMIj0qsIGOqUBHmp70Z2czOtZsdBs%2FpZKx%2FxGV9uuXDP%2B%2FU6k2mXUTjqgbXXr%2FX8ZLm6wc5xjJAw0c2Vfln%2BxMSjW46EFpMBNnj3lYPJTic%2Fgzra1%2F2UULgfw%2FRChpk4pbXWasELOxNh67yz4xoih1wYuXsM3kLoD5O77jLFnWvY9Rqh9iDKC6MaVByzfeq2zty2zGwiIaU2r7DDUjmRkKcFv6C%2BIxDnFRd5%2Be%2FiV&X-Amz-Signature=3bdaf3db7071c8c072ad3061d6d82b37e1eafc2d4d978bd4c141168fa6e7b4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6K65P2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFog%2Bx7135MHMrQESRy4OrvU2jSfVoFXC2iXe6Sogg6KAiEA6u4R8YKBTVdCI%2F6dCexfZzYhPcEgGsAqPjndkSNXYm4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTF8raBAZftsPkVkSrcA8v3VwphopdVox2HcMPOL1Wn%2FYwpnzmXQhfi3XRA1%2FNjALVu4%2BxxkxZZKeZQbARu5bwVS%2FFfXOWxLm%2B8o91OCWAAi81wHJYHQKdZr9N%2Bhg37D%2FXoSKvOPjX%2FD0NZCz%2BrE6A5Ktzr0pvfRb%2FR709KqF6QVLAhGH12lglpYvqP71HANAyGmy52esN0l1NDIsHZKvlpIAD86%2B5brxJL7i9da4nVjRBmClAmePvSzqP10FLIg4M2uh9eQb%2FHjT%2Bz0IJxqXLu2XIQUL%2FpF9ShowasNhQMlKx0pqgAUrvssepeW4WNbM98og8fJaFVuO2twF0bOObnC0z6MoEdIfVBNeej0V%2BJ%2F6hXw7NlQcIrZd3mN33m%2FLKuZwAp455Npx9nm69DQHFPXdJvPKic8eYUFTMZpNik9iczAfNXFDuqvYM7LSwGt9Adp5bkdtdChi8D2zNBf7x4GToCCcPHSM4bCyM%2BQnZRKxuw98e0m6J2iYmWvWVmuW1NE%2Bvp%2BHV3gaBSK7bWvbII%2FWJtQpC00YDGxU6%2BwsIIBRlBrlHL146SCswhHCUYdYxsoIJwPXme5HLj5jgAJZ0lNb0Wc3Lv%2FdVVkQiJyHCmbz%2BZWCGxNYkhNUCPv2QoiPeA%2BddlNIWpikZvMIj0qsIGOqUBHmp70Z2czOtZsdBs%2FpZKx%2FxGV9uuXDP%2B%2FU6k2mXUTjqgbXXr%2FX8ZLm6wc5xjJAw0c2Vfln%2BxMSjW46EFpMBNnj3lYPJTic%2Fgzra1%2F2UULgfw%2FRChpk4pbXWasELOxNh67yz4xoih1wYuXsM3kLoD5O77jLFnWvY9Rqh9iDKC6MaVByzfeq2zty2zGwiIaU2r7DDUjmRkKcFv6C%2BIxDnFRd5%2Be%2FiV&X-Amz-Signature=2245a8a1640e49bff46af1fabbac86ff51b6fc59fa378985f114a00d894c13f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6K65P2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFog%2Bx7135MHMrQESRy4OrvU2jSfVoFXC2iXe6Sogg6KAiEA6u4R8YKBTVdCI%2F6dCexfZzYhPcEgGsAqPjndkSNXYm4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTF8raBAZftsPkVkSrcA8v3VwphopdVox2HcMPOL1Wn%2FYwpnzmXQhfi3XRA1%2FNjALVu4%2BxxkxZZKeZQbARu5bwVS%2FFfXOWxLm%2B8o91OCWAAi81wHJYHQKdZr9N%2Bhg37D%2FXoSKvOPjX%2FD0NZCz%2BrE6A5Ktzr0pvfRb%2FR709KqF6QVLAhGH12lglpYvqP71HANAyGmy52esN0l1NDIsHZKvlpIAD86%2B5brxJL7i9da4nVjRBmClAmePvSzqP10FLIg4M2uh9eQb%2FHjT%2Bz0IJxqXLu2XIQUL%2FpF9ShowasNhQMlKx0pqgAUrvssepeW4WNbM98og8fJaFVuO2twF0bOObnC0z6MoEdIfVBNeej0V%2BJ%2F6hXw7NlQcIrZd3mN33m%2FLKuZwAp455Npx9nm69DQHFPXdJvPKic8eYUFTMZpNik9iczAfNXFDuqvYM7LSwGt9Adp5bkdtdChi8D2zNBf7x4GToCCcPHSM4bCyM%2BQnZRKxuw98e0m6J2iYmWvWVmuW1NE%2Bvp%2BHV3gaBSK7bWvbII%2FWJtQpC00YDGxU6%2BwsIIBRlBrlHL146SCswhHCUYdYxsoIJwPXme5HLj5jgAJZ0lNb0Wc3Lv%2FdVVkQiJyHCmbz%2BZWCGxNYkhNUCPv2QoiPeA%2BddlNIWpikZvMIj0qsIGOqUBHmp70Z2czOtZsdBs%2FpZKx%2FxGV9uuXDP%2B%2FU6k2mXUTjqgbXXr%2FX8ZLm6wc5xjJAw0c2Vfln%2BxMSjW46EFpMBNnj3lYPJTic%2Fgzra1%2F2UULgfw%2FRChpk4pbXWasELOxNh67yz4xoih1wYuXsM3kLoD5O77jLFnWvY9Rqh9iDKC6MaVByzfeq2zty2zGwiIaU2r7DDUjmRkKcFv6C%2BIxDnFRd5%2Be%2FiV&X-Amz-Signature=57fcbcf7bb27298c739e983f134e10bff2ed4d0a7c6f4881e6ffebfc4cdb8852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
