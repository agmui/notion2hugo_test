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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYNIDFZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDVoKVWyYLT3l%2BuJz90GMWx3mWNNCabH0p9I3ckdyWviAiB%2FTCcd8DAKl01GkG2Xa6xQRTUaK0dfrxajHnChAzjxJir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMQ9Z8bkfiX09ogfy6KtwDNUfroK%2FmBMdnSN2utq%2FvZbMJDMUqrojHXipNhf2xGgwKSxGuLywhS6tv6bLzRbjISoCIUGY%2BOGMpRvn1wXFDeK%2FOrPS2J4MIjseUH3UYcztSNLF2Hrwr8%2FwPbrDy%2F05HmHOq2jdPcleyiuXY%2FtveU7i8RrJrAqdX%2BBy1YHkPCZ7pihwv9FDYoFEvE%2BclpM0XhXjsnXzLpjN03gk%2FOGfkHyIxs7sn1h3zKDNfvh8HRJH51gZdRL87haXL3dAAZ5GC3reax8wJwU86JqrwzAQBOlFU54tNfEk1DKWNEGAGygiYpuw8Wc7jkzO87yGQwOv%2F%2FBCwxwqBETDck0vOGix8nawClqcIOGHuINAoblVa7rLpFqdIAC4RRurI66WSiSGKKThkBllHF0K8LGiJYqgliH9XTiFtjxy0AESQbEB1UucDJAWcF28hu3ZyjCoSZsHlWSqTXM3m1aKW4%2BIWDBfgat3y5d4l5%2FWsdgVnIlQ1PO69nib0CrHUavGMAXVbaNY0s09H1F0r9C6T%2FU1B3snvsYUr802BOapkCqY%2Fy2ZpylLxsXK2bu%2FAnmp0uhkqvlFSduRHBi4biAWQ67%2F%2BCV43w6jikAnQo%2FmFchNtly1VFphjX%2BTU0oqonjth2cow2ce0vgY6pgHHxPwNhr9752X9%2B0xffE9JEujaDDZU%2BDKqvhIkQLHbpt6fo3JcWHXTbiYkCG2LnhPRfv%2BITq72OMLJUBrM0HF5%2F7inuKAKu3XuFeZhS5ghOEBGZbiCUFSRxE4gp8gFM33cepAOl3BBHC%2B%2B7xrtG%2FYVad2%2F6BW63hNKYDChLTREz1cXdR9F3QSofGLOlxdRD6whvnpNba872BTYYMjUa9DYb%2F2zGyF4&X-Amz-Signature=d52965af28fd93f86298aabda90f8c8643182eaa9ec12528c3d3991bff0b7f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYNIDFZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDVoKVWyYLT3l%2BuJz90GMWx3mWNNCabH0p9I3ckdyWviAiB%2FTCcd8DAKl01GkG2Xa6xQRTUaK0dfrxajHnChAzjxJir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMQ9Z8bkfiX09ogfy6KtwDNUfroK%2FmBMdnSN2utq%2FvZbMJDMUqrojHXipNhf2xGgwKSxGuLywhS6tv6bLzRbjISoCIUGY%2BOGMpRvn1wXFDeK%2FOrPS2J4MIjseUH3UYcztSNLF2Hrwr8%2FwPbrDy%2F05HmHOq2jdPcleyiuXY%2FtveU7i8RrJrAqdX%2BBy1YHkPCZ7pihwv9FDYoFEvE%2BclpM0XhXjsnXzLpjN03gk%2FOGfkHyIxs7sn1h3zKDNfvh8HRJH51gZdRL87haXL3dAAZ5GC3reax8wJwU86JqrwzAQBOlFU54tNfEk1DKWNEGAGygiYpuw8Wc7jkzO87yGQwOv%2F%2FBCwxwqBETDck0vOGix8nawClqcIOGHuINAoblVa7rLpFqdIAC4RRurI66WSiSGKKThkBllHF0K8LGiJYqgliH9XTiFtjxy0AESQbEB1UucDJAWcF28hu3ZyjCoSZsHlWSqTXM3m1aKW4%2BIWDBfgat3y5d4l5%2FWsdgVnIlQ1PO69nib0CrHUavGMAXVbaNY0s09H1F0r9C6T%2FU1B3snvsYUr802BOapkCqY%2Fy2ZpylLxsXK2bu%2FAnmp0uhkqvlFSduRHBi4biAWQ67%2F%2BCV43w6jikAnQo%2FmFchNtly1VFphjX%2BTU0oqonjth2cow2ce0vgY6pgHHxPwNhr9752X9%2B0xffE9JEujaDDZU%2BDKqvhIkQLHbpt6fo3JcWHXTbiYkCG2LnhPRfv%2BITq72OMLJUBrM0HF5%2F7inuKAKu3XuFeZhS5ghOEBGZbiCUFSRxE4gp8gFM33cepAOl3BBHC%2B%2B7xrtG%2FYVad2%2F6BW63hNKYDChLTREz1cXdR9F3QSofGLOlxdRD6whvnpNba872BTYYMjUa9DYb%2F2zGyF4&X-Amz-Signature=e526b1ba4449d041659385287449ba6718cc8aca1f23f2de1040acab89efabe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYNIDFZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDVoKVWyYLT3l%2BuJz90GMWx3mWNNCabH0p9I3ckdyWviAiB%2FTCcd8DAKl01GkG2Xa6xQRTUaK0dfrxajHnChAzjxJir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMQ9Z8bkfiX09ogfy6KtwDNUfroK%2FmBMdnSN2utq%2FvZbMJDMUqrojHXipNhf2xGgwKSxGuLywhS6tv6bLzRbjISoCIUGY%2BOGMpRvn1wXFDeK%2FOrPS2J4MIjseUH3UYcztSNLF2Hrwr8%2FwPbrDy%2F05HmHOq2jdPcleyiuXY%2FtveU7i8RrJrAqdX%2BBy1YHkPCZ7pihwv9FDYoFEvE%2BclpM0XhXjsnXzLpjN03gk%2FOGfkHyIxs7sn1h3zKDNfvh8HRJH51gZdRL87haXL3dAAZ5GC3reax8wJwU86JqrwzAQBOlFU54tNfEk1DKWNEGAGygiYpuw8Wc7jkzO87yGQwOv%2F%2FBCwxwqBETDck0vOGix8nawClqcIOGHuINAoblVa7rLpFqdIAC4RRurI66WSiSGKKThkBllHF0K8LGiJYqgliH9XTiFtjxy0AESQbEB1UucDJAWcF28hu3ZyjCoSZsHlWSqTXM3m1aKW4%2BIWDBfgat3y5d4l5%2FWsdgVnIlQ1PO69nib0CrHUavGMAXVbaNY0s09H1F0r9C6T%2FU1B3snvsYUr802BOapkCqY%2Fy2ZpylLxsXK2bu%2FAnmp0uhkqvlFSduRHBi4biAWQ67%2F%2BCV43w6jikAnQo%2FmFchNtly1VFphjX%2BTU0oqonjth2cow2ce0vgY6pgHHxPwNhr9752X9%2B0xffE9JEujaDDZU%2BDKqvhIkQLHbpt6fo3JcWHXTbiYkCG2LnhPRfv%2BITq72OMLJUBrM0HF5%2F7inuKAKu3XuFeZhS5ghOEBGZbiCUFSRxE4gp8gFM33cepAOl3BBHC%2B%2B7xrtG%2FYVad2%2F6BW63hNKYDChLTREz1cXdR9F3QSofGLOlxdRD6whvnpNba872BTYYMjUa9DYb%2F2zGyF4&X-Amz-Signature=1e9431a4b79e4c387e375393c7b2bb48af4f1a26ebac01eaa97276aa1a9ec010&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
