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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVYG7X4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCAKgfpFxqq3k3F78OvzCSNvjKLWLc2REYeVSzAZ7%2FsAAIhANcFhnGUbf9FK7CiDBIaeDa1RJelW6qEBGbbNjzVzffrKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWB0Kz4U3wuOCoRh8q3AOZDCS8dGHcbCYm%2Fb9r7pDixE9SPsUoOflaVUFks2Re0P1%2BPpfRNdkOCK75Nir3CpjUxRU03cvIggXV3zRpuAqdf3eHKocIkYSg6Givla5E7KOowargjT3hk3fjOG8fF2lAsrR%2BE1ySDj%2BzHv7rGmDZaJxV2CvsXV35Be4Qh0bBfCMB6nSH81TOnAkED28kDmsegovS2g8nRi0svUiESIDhp3WM9XmrqqJ2zbCRxOQ3xt6Rm07ZE4Og8pzuzZ4Ey0WGb2%2FzbHP%2BMNkVqPI3L5ZIiPCOQVZ2p61DfCZDB%2BOiRkJaERTHOaoqOmOWNn5MwkllWBlGc6Uaca%2BH6d8RauO%2FVjNB7%2BtL6TNn8PHgXXU1%2B6cR6Zd2qhGUHYaz2bK8Hs2BXjW0Tkzreeuf6nfVyZ6qRfE%2BZZQeyvMrldpgcrR9vgBePCz6%2FMTyqv1UTztgyYATYkVNqZ1KqIrQc4hfp1CmnNOnSKbvbF84AtPS1LJCRcrVpGZlsEK%2Br1geNeIcMDu7j35xeGWcttzKAOVaX%2Bj9Jg%2BZrUoiipIji9YdDSVGIDbjgXP%2B4%2FZzYsIOnhRNskb2FiWgSBH3fugkA01PKWdClZmmyi4ZUL7MmZNHDeGSC3IFtEJEYccgseVR9TC269vABjqkAXKi8bzyWVyoGPVhpUZpul9Tbe0JIXWjBPzQmRoB9yvxVCxjstd%2FrT%2FVbtgbliJp4oa2waZybLKbokPi7fGKVANtC43Ip3arCrw4l1jrLf%2BU01YjirGPb1%2Fxev4NS1JPKyOSk%2BnpWlhKdi2tDrkwc4suvA3MiKLHln3%2BgStk%2B3JEuHHygUMs7iiJUgE2PYP9bBBn5%2FCeWHtun2Dn8A7spyOQhX1o&X-Amz-Signature=0a926059b779124189408688d9dcebd1daa42fed13f2e02975ee09430ee0df7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVYG7X4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCAKgfpFxqq3k3F78OvzCSNvjKLWLc2REYeVSzAZ7%2FsAAIhANcFhnGUbf9FK7CiDBIaeDa1RJelW6qEBGbbNjzVzffrKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWB0Kz4U3wuOCoRh8q3AOZDCS8dGHcbCYm%2Fb9r7pDixE9SPsUoOflaVUFks2Re0P1%2BPpfRNdkOCK75Nir3CpjUxRU03cvIggXV3zRpuAqdf3eHKocIkYSg6Givla5E7KOowargjT3hk3fjOG8fF2lAsrR%2BE1ySDj%2BzHv7rGmDZaJxV2CvsXV35Be4Qh0bBfCMB6nSH81TOnAkED28kDmsegovS2g8nRi0svUiESIDhp3WM9XmrqqJ2zbCRxOQ3xt6Rm07ZE4Og8pzuzZ4Ey0WGb2%2FzbHP%2BMNkVqPI3L5ZIiPCOQVZ2p61DfCZDB%2BOiRkJaERTHOaoqOmOWNn5MwkllWBlGc6Uaca%2BH6d8RauO%2FVjNB7%2BtL6TNn8PHgXXU1%2B6cR6Zd2qhGUHYaz2bK8Hs2BXjW0Tkzreeuf6nfVyZ6qRfE%2BZZQeyvMrldpgcrR9vgBePCz6%2FMTyqv1UTztgyYATYkVNqZ1KqIrQc4hfp1CmnNOnSKbvbF84AtPS1LJCRcrVpGZlsEK%2Br1geNeIcMDu7j35xeGWcttzKAOVaX%2Bj9Jg%2BZrUoiipIji9YdDSVGIDbjgXP%2B4%2FZzYsIOnhRNskb2FiWgSBH3fugkA01PKWdClZmmyi4ZUL7MmZNHDeGSC3IFtEJEYccgseVR9TC269vABjqkAXKi8bzyWVyoGPVhpUZpul9Tbe0JIXWjBPzQmRoB9yvxVCxjstd%2FrT%2FVbtgbliJp4oa2waZybLKbokPi7fGKVANtC43Ip3arCrw4l1jrLf%2BU01YjirGPb1%2Fxev4NS1JPKyOSk%2BnpWlhKdi2tDrkwc4suvA3MiKLHln3%2BgStk%2B3JEuHHygUMs7iiJUgE2PYP9bBBn5%2FCeWHtun2Dn8A7spyOQhX1o&X-Amz-Signature=40a717f4528aca77a79fdfb9e3c019c3619b58946fcc5809a21ff7f9bd1dc24e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVYG7X4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCAKgfpFxqq3k3F78OvzCSNvjKLWLc2REYeVSzAZ7%2FsAAIhANcFhnGUbf9FK7CiDBIaeDa1RJelW6qEBGbbNjzVzffrKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWB0Kz4U3wuOCoRh8q3AOZDCS8dGHcbCYm%2Fb9r7pDixE9SPsUoOflaVUFks2Re0P1%2BPpfRNdkOCK75Nir3CpjUxRU03cvIggXV3zRpuAqdf3eHKocIkYSg6Givla5E7KOowargjT3hk3fjOG8fF2lAsrR%2BE1ySDj%2BzHv7rGmDZaJxV2CvsXV35Be4Qh0bBfCMB6nSH81TOnAkED28kDmsegovS2g8nRi0svUiESIDhp3WM9XmrqqJ2zbCRxOQ3xt6Rm07ZE4Og8pzuzZ4Ey0WGb2%2FzbHP%2BMNkVqPI3L5ZIiPCOQVZ2p61DfCZDB%2BOiRkJaERTHOaoqOmOWNn5MwkllWBlGc6Uaca%2BH6d8RauO%2FVjNB7%2BtL6TNn8PHgXXU1%2B6cR6Zd2qhGUHYaz2bK8Hs2BXjW0Tkzreeuf6nfVyZ6qRfE%2BZZQeyvMrldpgcrR9vgBePCz6%2FMTyqv1UTztgyYATYkVNqZ1KqIrQc4hfp1CmnNOnSKbvbF84AtPS1LJCRcrVpGZlsEK%2Br1geNeIcMDu7j35xeGWcttzKAOVaX%2Bj9Jg%2BZrUoiipIji9YdDSVGIDbjgXP%2B4%2FZzYsIOnhRNskb2FiWgSBH3fugkA01PKWdClZmmyi4ZUL7MmZNHDeGSC3IFtEJEYccgseVR9TC269vABjqkAXKi8bzyWVyoGPVhpUZpul9Tbe0JIXWjBPzQmRoB9yvxVCxjstd%2FrT%2FVbtgbliJp4oa2waZybLKbokPi7fGKVANtC43Ip3arCrw4l1jrLf%2BU01YjirGPb1%2Fxev4NS1JPKyOSk%2BnpWlhKdi2tDrkwc4suvA3MiKLHln3%2BgStk%2B3JEuHHygUMs7iiJUgE2PYP9bBBn5%2FCeWHtun2Dn8A7spyOQhX1o&X-Amz-Signature=32d6f8bed578d138e595f290698ae82d63894c965fa85c0cf2a89d45327aadd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
