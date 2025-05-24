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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7QH6EL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHanxBsL97BeclOhyMjTVk1j7EBSfknHd4SAl2c5lzfDAiBX4jzwTtSX%2Fu2enLrvZe%2BRGaLM%2B5olaiKE6Mf1%2B2s%2F7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfpNq9qxqx%2BcaRDlKtwDrkEMP47QuaHlOJnUN51fjmiNZa5514C4zN8d%2FT82Q9dUstsXTcECk%2FRSrNsVwyuOY15TLe764EBimFKwoBUr1yjkQAE1reYYwHl0WWGhArHEZu3FUMTtmjmwBuZiyaikQfQ0%2F18%2Fnwgkc8zes3uIS6RzoLl4nOJ8oAP21LENmz4o4BObo8NjKPA3lnH6nb8J2EIgpbtkMbVwBhvo8Ubf4cw3ALaaEALyg4HeO%2BzHdYhJFiaE7XtHOQ4vfvqpRccf%2BT2zVhdsmCojaCDZAxVyAqHndb%2BHtRntUkL7nGAv8SiDwZ%2BPCY8qS%2BVknVx54DF%2FHB9qtQC3IIzllYK11aYST6SaFlSUvt7sIcRGZJsDm4O15JXd3tQ1MXa6h2RLZs7orwRamuKbhAlK7QPA%2BsO8fUpLjCrGm1697VRmWlKWyQbfTkTw0zyFvDH4Bj0NheLtbCLT3DJH9%2BRLthp8zg7uZeyx4qwddEo%2B%2FAO5TPg7sccR4pqLO3%2BNv3MbMu%2BGpHVYmb9UxTS2ozquPygmaH%2BPRGXsEEYYuLCsLytgT6SvMujDcIDkVtPQvBINZkftgiqjt58HSk61EaXvqc8CmT7PMsnVqGeOr1FyaCypLDRVSLFslCcGh66xDKZXHJswj4%2FEwQY6pgHo7MrC0TCKziAm21HGQqw04Ugn5I4oSMvMXUCbz1GWRP%2BLDTRjSxW1uVbjsia5mtBVoITZuhfquMY1fccyiXQHTnBayl2e84ICNI%2FJxnQUNCOXnLIBlA%2FaxMZ2tCdParuxJdNAJ5KpQSNGTwx5BFQdjSjEOLw6niH5FcDsERJB9FpSpAUglpIKkYznDJ2jp3zO%2Bzv8pYpImS8CYxfX5aM%2BEFw3NOuH&X-Amz-Signature=a3a7c7ef120e05f5869a3bc82689d82e343aba7a29f3d33d3c207b37b8a62c32&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7QH6EL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHanxBsL97BeclOhyMjTVk1j7EBSfknHd4SAl2c5lzfDAiBX4jzwTtSX%2Fu2enLrvZe%2BRGaLM%2B5olaiKE6Mf1%2B2s%2F7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfpNq9qxqx%2BcaRDlKtwDrkEMP47QuaHlOJnUN51fjmiNZa5514C4zN8d%2FT82Q9dUstsXTcECk%2FRSrNsVwyuOY15TLe764EBimFKwoBUr1yjkQAE1reYYwHl0WWGhArHEZu3FUMTtmjmwBuZiyaikQfQ0%2F18%2Fnwgkc8zes3uIS6RzoLl4nOJ8oAP21LENmz4o4BObo8NjKPA3lnH6nb8J2EIgpbtkMbVwBhvo8Ubf4cw3ALaaEALyg4HeO%2BzHdYhJFiaE7XtHOQ4vfvqpRccf%2BT2zVhdsmCojaCDZAxVyAqHndb%2BHtRntUkL7nGAv8SiDwZ%2BPCY8qS%2BVknVx54DF%2FHB9qtQC3IIzllYK11aYST6SaFlSUvt7sIcRGZJsDm4O15JXd3tQ1MXa6h2RLZs7orwRamuKbhAlK7QPA%2BsO8fUpLjCrGm1697VRmWlKWyQbfTkTw0zyFvDH4Bj0NheLtbCLT3DJH9%2BRLthp8zg7uZeyx4qwddEo%2B%2FAO5TPg7sccR4pqLO3%2BNv3MbMu%2BGpHVYmb9UxTS2ozquPygmaH%2BPRGXsEEYYuLCsLytgT6SvMujDcIDkVtPQvBINZkftgiqjt58HSk61EaXvqc8CmT7PMsnVqGeOr1FyaCypLDRVSLFslCcGh66xDKZXHJswj4%2FEwQY6pgHo7MrC0TCKziAm21HGQqw04Ugn5I4oSMvMXUCbz1GWRP%2BLDTRjSxW1uVbjsia5mtBVoITZuhfquMY1fccyiXQHTnBayl2e84ICNI%2FJxnQUNCOXnLIBlA%2FaxMZ2tCdParuxJdNAJ5KpQSNGTwx5BFQdjSjEOLw6niH5FcDsERJB9FpSpAUglpIKkYznDJ2jp3zO%2Bzv8pYpImS8CYxfX5aM%2BEFw3NOuH&X-Amz-Signature=701b12ad9be98d1bf7c14bf83bbdc0c9ee002f13e23c53b595f476a08461be45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7QH6EL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHanxBsL97BeclOhyMjTVk1j7EBSfknHd4SAl2c5lzfDAiBX4jzwTtSX%2Fu2enLrvZe%2BRGaLM%2B5olaiKE6Mf1%2B2s%2F7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfpNq9qxqx%2BcaRDlKtwDrkEMP47QuaHlOJnUN51fjmiNZa5514C4zN8d%2FT82Q9dUstsXTcECk%2FRSrNsVwyuOY15TLe764EBimFKwoBUr1yjkQAE1reYYwHl0WWGhArHEZu3FUMTtmjmwBuZiyaikQfQ0%2F18%2Fnwgkc8zes3uIS6RzoLl4nOJ8oAP21LENmz4o4BObo8NjKPA3lnH6nb8J2EIgpbtkMbVwBhvo8Ubf4cw3ALaaEALyg4HeO%2BzHdYhJFiaE7XtHOQ4vfvqpRccf%2BT2zVhdsmCojaCDZAxVyAqHndb%2BHtRntUkL7nGAv8SiDwZ%2BPCY8qS%2BVknVx54DF%2FHB9qtQC3IIzllYK11aYST6SaFlSUvt7sIcRGZJsDm4O15JXd3tQ1MXa6h2RLZs7orwRamuKbhAlK7QPA%2BsO8fUpLjCrGm1697VRmWlKWyQbfTkTw0zyFvDH4Bj0NheLtbCLT3DJH9%2BRLthp8zg7uZeyx4qwddEo%2B%2FAO5TPg7sccR4pqLO3%2BNv3MbMu%2BGpHVYmb9UxTS2ozquPygmaH%2BPRGXsEEYYuLCsLytgT6SvMujDcIDkVtPQvBINZkftgiqjt58HSk61EaXvqc8CmT7PMsnVqGeOr1FyaCypLDRVSLFslCcGh66xDKZXHJswj4%2FEwQY6pgHo7MrC0TCKziAm21HGQqw04Ugn5I4oSMvMXUCbz1GWRP%2BLDTRjSxW1uVbjsia5mtBVoITZuhfquMY1fccyiXQHTnBayl2e84ICNI%2FJxnQUNCOXnLIBlA%2FaxMZ2tCdParuxJdNAJ5KpQSNGTwx5BFQdjSjEOLw6niH5FcDsERJB9FpSpAUglpIKkYznDJ2jp3zO%2Bzv8pYpImS8CYxfX5aM%2BEFw3NOuH&X-Amz-Signature=dffd5a7933d9918566585b64fb963e40d83ce90d0179fccb6b55f63d6ebf5578&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
