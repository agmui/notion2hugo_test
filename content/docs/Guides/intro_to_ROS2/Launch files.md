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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5T5DMU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGUBvz989o1jOYRKokymq5Z7MG14Aqw6MFBKT%2FEM8Yz%2BAiBrf5g1OoyfUfbvc9Si0wrAVojg%2BIglGOxBikwVVaYY1yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM3I0R%2FA7Ps5B4BZLRKtwDn2zBuNo%2BpVcOkue5b9HpsgFrwlC3Q7jD3DBjpN%2Fu9lVKK2gAxRTOTWrrDG0Gd07z8%2Fxs8TZ5w2Hv7s6Qe5scA1jwa27E0ppMGHjmNoqgge%2FmtF6aVNuo%2BVh5jqrpQL6c1uYlMh1dlnkkk2d%2BuEJfN5ckUJNFBHi9Estojg12Kp%2B65GnD2NoKjyHGNeJ8sNPCG%2By6uR2jRbkm2IwYVgQsAXTo24lBB2ufsKWWg9F4iJh0Y7VdboiFUAEWt%2BkH4bNGhEquf5ucaaDsm9fGkiqGukRgxKl6SbeLvRHeu0q2HBCjHOw1zKgsvb8Y4ayEoUXKsHx5fCIq4Rbi2T4w%2FYGFJ%2B5jmkHs7JNKEhDWzTUnoh1QBS3jvZy9fcjPrz0s%2BHzhyzPf06gWOhs37TIR8VH66tqAd3TDCPOr0Ny%2BiQxA8lgGw75oevJ%2FSgcMDXNo5qM9u2mH8gtKWWyruOKPLYOMV7pFpt51SJsfRtxuQbGYGykJAazDBeswgCIvyHjKiScdfLJ%2F3CyWuNpy%2BrGy25hfQ0rZokTmQmBBVs%2BkDoZWMdkiSbGmvl4ppntd1apHooFLR2lR7u6K350KEtfzoL%2Fu47KlurVboViEUW8JQ28xWvaQuo6Ls9993C%2FufugwuJXlvAY6pgHAhSI7taMdWL0h59mHPFYPQZCGRV2g189eWYEAVbnjuyFtQmV3Nsrb%2BbdoTYuBnqX9N4GfVil3xGtNg39Qt2JppfLFj0pxLMMnGQMA3fyUZgvnJqVGOvdWpIyddi1o0MnOqxShN1EZbyZwFvJuEn%2FqFFZ13JCz3N0B2efzEKNv47BtLNMZb8gAK3BCw7mnAEGn06TBa2CyQAYR3Q8n%2FPll%2BeIyWwTB&X-Amz-Signature=5f4c44939c73645422eecf66227bdedd08a438b5a96c9a0372e084492b66c7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5T5DMU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGUBvz989o1jOYRKokymq5Z7MG14Aqw6MFBKT%2FEM8Yz%2BAiBrf5g1OoyfUfbvc9Si0wrAVojg%2BIglGOxBikwVVaYY1yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM3I0R%2FA7Ps5B4BZLRKtwDn2zBuNo%2BpVcOkue5b9HpsgFrwlC3Q7jD3DBjpN%2Fu9lVKK2gAxRTOTWrrDG0Gd07z8%2Fxs8TZ5w2Hv7s6Qe5scA1jwa27E0ppMGHjmNoqgge%2FmtF6aVNuo%2BVh5jqrpQL6c1uYlMh1dlnkkk2d%2BuEJfN5ckUJNFBHi9Estojg12Kp%2B65GnD2NoKjyHGNeJ8sNPCG%2By6uR2jRbkm2IwYVgQsAXTo24lBB2ufsKWWg9F4iJh0Y7VdboiFUAEWt%2BkH4bNGhEquf5ucaaDsm9fGkiqGukRgxKl6SbeLvRHeu0q2HBCjHOw1zKgsvb8Y4ayEoUXKsHx5fCIq4Rbi2T4w%2FYGFJ%2B5jmkHs7JNKEhDWzTUnoh1QBS3jvZy9fcjPrz0s%2BHzhyzPf06gWOhs37TIR8VH66tqAd3TDCPOr0Ny%2BiQxA8lgGw75oevJ%2FSgcMDXNo5qM9u2mH8gtKWWyruOKPLYOMV7pFpt51SJsfRtxuQbGYGykJAazDBeswgCIvyHjKiScdfLJ%2F3CyWuNpy%2BrGy25hfQ0rZokTmQmBBVs%2BkDoZWMdkiSbGmvl4ppntd1apHooFLR2lR7u6K350KEtfzoL%2Fu47KlurVboViEUW8JQ28xWvaQuo6Ls9993C%2FufugwuJXlvAY6pgHAhSI7taMdWL0h59mHPFYPQZCGRV2g189eWYEAVbnjuyFtQmV3Nsrb%2BbdoTYuBnqX9N4GfVil3xGtNg39Qt2JppfLFj0pxLMMnGQMA3fyUZgvnJqVGOvdWpIyddi1o0MnOqxShN1EZbyZwFvJuEn%2FqFFZ13JCz3N0B2efzEKNv47BtLNMZb8gAK3BCw7mnAEGn06TBa2CyQAYR3Q8n%2FPll%2BeIyWwTB&X-Amz-Signature=3e502d9cafe20b72b991f79551354838f4366fa99fffaf73d19056e8270b5f66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5T5DMU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGUBvz989o1jOYRKokymq5Z7MG14Aqw6MFBKT%2FEM8Yz%2BAiBrf5g1OoyfUfbvc9Si0wrAVojg%2BIglGOxBikwVVaYY1yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM3I0R%2FA7Ps5B4BZLRKtwDn2zBuNo%2BpVcOkue5b9HpsgFrwlC3Q7jD3DBjpN%2Fu9lVKK2gAxRTOTWrrDG0Gd07z8%2Fxs8TZ5w2Hv7s6Qe5scA1jwa27E0ppMGHjmNoqgge%2FmtF6aVNuo%2BVh5jqrpQL6c1uYlMh1dlnkkk2d%2BuEJfN5ckUJNFBHi9Estojg12Kp%2B65GnD2NoKjyHGNeJ8sNPCG%2By6uR2jRbkm2IwYVgQsAXTo24lBB2ufsKWWg9F4iJh0Y7VdboiFUAEWt%2BkH4bNGhEquf5ucaaDsm9fGkiqGukRgxKl6SbeLvRHeu0q2HBCjHOw1zKgsvb8Y4ayEoUXKsHx5fCIq4Rbi2T4w%2FYGFJ%2B5jmkHs7JNKEhDWzTUnoh1QBS3jvZy9fcjPrz0s%2BHzhyzPf06gWOhs37TIR8VH66tqAd3TDCPOr0Ny%2BiQxA8lgGw75oevJ%2FSgcMDXNo5qM9u2mH8gtKWWyruOKPLYOMV7pFpt51SJsfRtxuQbGYGykJAazDBeswgCIvyHjKiScdfLJ%2F3CyWuNpy%2BrGy25hfQ0rZokTmQmBBVs%2BkDoZWMdkiSbGmvl4ppntd1apHooFLR2lR7u6K350KEtfzoL%2Fu47KlurVboViEUW8JQ28xWvaQuo6Ls9993C%2FufugwuJXlvAY6pgHAhSI7taMdWL0h59mHPFYPQZCGRV2g189eWYEAVbnjuyFtQmV3Nsrb%2BbdoTYuBnqX9N4GfVil3xGtNg39Qt2JppfLFj0pxLMMnGQMA3fyUZgvnJqVGOvdWpIyddi1o0MnOqxShN1EZbyZwFvJuEn%2FqFFZ13JCz3N0B2efzEKNv47BtLNMZb8gAK3BCw7mnAEGn06TBa2CyQAYR3Q8n%2FPll%2BeIyWwTB&X-Amz-Signature=0901f0aa75ad6e6ddbd0104de82b3c37d11f4a61c63e1c265b04d836a61073f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
