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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3EUDID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBCT3P4WUALwc%2FWNcq3NHESWSaHuL5tYZSU8e0LybC2%2FAiEA2X%2B1eGJV%2ByyNJs2z8tpuG4HdPl9begUUF%2B6plJ9S%2F5YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEElUcLuWAB58KLYKyrcA4ltVksjusGUL%2FZSBYRk8w7xv%2Fj7ktUJePHuKNd879%2BLVuvEapfoFOeQU1lUti7V%2BSBvYly3R5DE7H51BqdQvv8Yke%2BaxxCBh2XF1LIcWnWZs9ibJuG8qVpkoAx%2F2C8MehRhHovPMOcCXU7XO3Hke9ESkrcWn47Pxcv7IcyTm83obD2mXVi9fAM5RSiPc0lBTg7jNf%2Fk%2F5xP80vJCmPkp3QO0IoFb2l2H8rhv69%2FtZVCzFcd05RkQ59NIrk7uPrM%2FmW5%2FJE2%2FLt%2FJax%2B0sWXPMP3FhVbsNtSJajR6VEm9y7gEv9xQe8XcAReZ2%2BfhL27hC%2BmKUDnXUijOjEXtmFTTAXt8uf1VDgwiWcO%2Ble%2Biwc%2BvRbbHDOa4Y14MLQYGJ3vwnRHo3zpc9ufGNfZFDZGYyC9YeP0cn0%2BfpWZuufcgL9ANY0gwySehyOuZ50PqNEhIb93JP%2B3wgky1Td0oJK17CEnAxPsD3ciYKGwx%2FztFY%2BLuPsN8Uc0QyKIKyLCh%2FsZJALCKnbwq00xqpeapPJmvmzieSvWmIcd%2F7vsUvU0kU3XC%2B%2BsGXyC%2FarVgLgpATxiX1cQbBPg2vzy1EKoslz%2FEFWLjfhFMdtGalAoj9Q5i1l6%2FDrQi8Ez3Oa1et8hMLDhvMEGOqUBXIvCxX%2FAYYPbP%2BtQkHxEN6AK94PG3e54SPnrFl0iFR2H8DFTaFAABVxugHS7uUjziR%2BGpccZJPwgk9O0iKdWW8Sw%2Fbykp3hJ8rsaVNcDd%2Bur1fh2QKniYFKmkxHBjcE8NdfmdlcGxoa1gWFjWULow9frNtiHBKe8bYg9j0Af5tjljPdgKV067%2F1Zq1TjSjaUVnS8ZtX9tCsFJhRbKRxallqU3xUD&X-Amz-Signature=d7870895a87fa4c819a23f5a295f3424c5effbf01309fb7c3eb48166dc85141b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3EUDID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBCT3P4WUALwc%2FWNcq3NHESWSaHuL5tYZSU8e0LybC2%2FAiEA2X%2B1eGJV%2ByyNJs2z8tpuG4HdPl9begUUF%2B6plJ9S%2F5YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEElUcLuWAB58KLYKyrcA4ltVksjusGUL%2FZSBYRk8w7xv%2Fj7ktUJePHuKNd879%2BLVuvEapfoFOeQU1lUti7V%2BSBvYly3R5DE7H51BqdQvv8Yke%2BaxxCBh2XF1LIcWnWZs9ibJuG8qVpkoAx%2F2C8MehRhHovPMOcCXU7XO3Hke9ESkrcWn47Pxcv7IcyTm83obD2mXVi9fAM5RSiPc0lBTg7jNf%2Fk%2F5xP80vJCmPkp3QO0IoFb2l2H8rhv69%2FtZVCzFcd05RkQ59NIrk7uPrM%2FmW5%2FJE2%2FLt%2FJax%2B0sWXPMP3FhVbsNtSJajR6VEm9y7gEv9xQe8XcAReZ2%2BfhL27hC%2BmKUDnXUijOjEXtmFTTAXt8uf1VDgwiWcO%2Ble%2Biwc%2BvRbbHDOa4Y14MLQYGJ3vwnRHo3zpc9ufGNfZFDZGYyC9YeP0cn0%2BfpWZuufcgL9ANY0gwySehyOuZ50PqNEhIb93JP%2B3wgky1Td0oJK17CEnAxPsD3ciYKGwx%2FztFY%2BLuPsN8Uc0QyKIKyLCh%2FsZJALCKnbwq00xqpeapPJmvmzieSvWmIcd%2F7vsUvU0kU3XC%2B%2BsGXyC%2FarVgLgpATxiX1cQbBPg2vzy1EKoslz%2FEFWLjfhFMdtGalAoj9Q5i1l6%2FDrQi8Ez3Oa1et8hMLDhvMEGOqUBXIvCxX%2FAYYPbP%2BtQkHxEN6AK94PG3e54SPnrFl0iFR2H8DFTaFAABVxugHS7uUjziR%2BGpccZJPwgk9O0iKdWW8Sw%2Fbykp3hJ8rsaVNcDd%2Bur1fh2QKniYFKmkxHBjcE8NdfmdlcGxoa1gWFjWULow9frNtiHBKe8bYg9j0Af5tjljPdgKV067%2F1Zq1TjSjaUVnS8ZtX9tCsFJhRbKRxallqU3xUD&X-Amz-Signature=d02876fd201ecc3a26457f74094804d7744dfb334985ab4bd6ee421fab0e61b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3EUDID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBCT3P4WUALwc%2FWNcq3NHESWSaHuL5tYZSU8e0LybC2%2FAiEA2X%2B1eGJV%2ByyNJs2z8tpuG4HdPl9begUUF%2B6plJ9S%2F5YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEElUcLuWAB58KLYKyrcA4ltVksjusGUL%2FZSBYRk8w7xv%2Fj7ktUJePHuKNd879%2BLVuvEapfoFOeQU1lUti7V%2BSBvYly3R5DE7H51BqdQvv8Yke%2BaxxCBh2XF1LIcWnWZs9ibJuG8qVpkoAx%2F2C8MehRhHovPMOcCXU7XO3Hke9ESkrcWn47Pxcv7IcyTm83obD2mXVi9fAM5RSiPc0lBTg7jNf%2Fk%2F5xP80vJCmPkp3QO0IoFb2l2H8rhv69%2FtZVCzFcd05RkQ59NIrk7uPrM%2FmW5%2FJE2%2FLt%2FJax%2B0sWXPMP3FhVbsNtSJajR6VEm9y7gEv9xQe8XcAReZ2%2BfhL27hC%2BmKUDnXUijOjEXtmFTTAXt8uf1VDgwiWcO%2Ble%2Biwc%2BvRbbHDOa4Y14MLQYGJ3vwnRHo3zpc9ufGNfZFDZGYyC9YeP0cn0%2BfpWZuufcgL9ANY0gwySehyOuZ50PqNEhIb93JP%2B3wgky1Td0oJK17CEnAxPsD3ciYKGwx%2FztFY%2BLuPsN8Uc0QyKIKyLCh%2FsZJALCKnbwq00xqpeapPJmvmzieSvWmIcd%2F7vsUvU0kU3XC%2B%2BsGXyC%2FarVgLgpATxiX1cQbBPg2vzy1EKoslz%2FEFWLjfhFMdtGalAoj9Q5i1l6%2FDrQi8Ez3Oa1et8hMLDhvMEGOqUBXIvCxX%2FAYYPbP%2BtQkHxEN6AK94PG3e54SPnrFl0iFR2H8DFTaFAABVxugHS7uUjziR%2BGpccZJPwgk9O0iKdWW8Sw%2Fbykp3hJ8rsaVNcDd%2Bur1fh2QKniYFKmkxHBjcE8NdfmdlcGxoa1gWFjWULow9frNtiHBKe8bYg9j0Af5tjljPdgKV067%2F1Zq1TjSjaUVnS8ZtX9tCsFJhRbKRxallqU3xUD&X-Amz-Signature=6cc078b43de83dd55baafe2732a468458b8aafd5c20eb8792316b0921480cd32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
