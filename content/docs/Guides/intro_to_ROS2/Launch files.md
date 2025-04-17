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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBURB3S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0ICbDG68gvLU3HEJSZkhx6MvGbVNaVJ7Uc38qSOuXnAiA7jDeMW4d25TIlF4oP%2FB2cMMFUKt%2FxYWoQsdl%2FQ6Af2Sr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM16KHyo7Zzhsqe3IuKtwDpk3qzJvvxiAZhaVeO1emzIaIARah8hRoHoeZcxrxzjWMjou7RCTyDj4%2FhY3mGj%2B3Riib1FM41S5SkanjIJoWUPGBGC2TRjAIPk5iVEj25Gm4Gf6t7aCnCccTsID8veiOcY%2FtgyT8OrUQuEwDXFj4OGYVkmw0gxz4JgnSv3lmVr1pWyo2wCc%2FlyapGi9Z%2F1MjFpx7TfCcLVuFSxMQfJMSe8rSOxI1ueEayPN9cG0FoWgf%2FHYeRIotDV2vntfY5SwjeqiGtr4bvuJsmxc8gDFfD04%2BgJgHMn5SahbgAnBOAsozjf1U%2F0S0Xchd3dCU94wIrNIwgmZjBQQEWHwnLAyD3UxAYUWQASrzBi8YFDPv0TuQr8jwsDIh0HE7zwPMSx7lB8WsLKi6QmJJZViz6WSqqs%2Fstl1qjWXnXyVJvC6ILERGSyPkfgHYLPg2480mFQQAWGQmR2nwt2xL3B4lWThvF7MhAA3ygSpFBbwkZEY1yR%2FtG4ge1m%2F3xvdhRapQyLI75%2FGOwxVPbMuhTb%2BClb7vkLOV9NF2hL5T4HZfSOeVvv%2FSD7JOYsJPjQNS5%2FOyadS3ieAzIjn3ozQSRJmqs%2BF2hz5DeFc3tlMPKBurbsUma5nNJGJwZWOBuMdkYjgw1ZuFwAY6pgHO7RUKSqztc2laJT9q2Up%2BMe301yq37Mpb3VSphZzP0MCzGjHwxvh5D2NvvI4SB1vl4eixYqIw3DkrYAsoQE5Mk5BLZg9ZRySKdEvOGZG%2F9gY%2F68THWgG2j%2BtEEPtVrotm8YHUCcJw0M2Usq5u8AmVYeej7Ln1dCxFoYg08ahzs4V%2BrLbDDhBERv8UDPRHIMfBD1tXiqpYdy8V%2FHMXut1Od6ig32cy&X-Amz-Signature=96b3e367c28475ecad3fe7d7e43bedac7767efb0d6f658a2c6a91fe524de4c61&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBURB3S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0ICbDG68gvLU3HEJSZkhx6MvGbVNaVJ7Uc38qSOuXnAiA7jDeMW4d25TIlF4oP%2FB2cMMFUKt%2FxYWoQsdl%2FQ6Af2Sr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM16KHyo7Zzhsqe3IuKtwDpk3qzJvvxiAZhaVeO1emzIaIARah8hRoHoeZcxrxzjWMjou7RCTyDj4%2FhY3mGj%2B3Riib1FM41S5SkanjIJoWUPGBGC2TRjAIPk5iVEj25Gm4Gf6t7aCnCccTsID8veiOcY%2FtgyT8OrUQuEwDXFj4OGYVkmw0gxz4JgnSv3lmVr1pWyo2wCc%2FlyapGi9Z%2F1MjFpx7TfCcLVuFSxMQfJMSe8rSOxI1ueEayPN9cG0FoWgf%2FHYeRIotDV2vntfY5SwjeqiGtr4bvuJsmxc8gDFfD04%2BgJgHMn5SahbgAnBOAsozjf1U%2F0S0Xchd3dCU94wIrNIwgmZjBQQEWHwnLAyD3UxAYUWQASrzBi8YFDPv0TuQr8jwsDIh0HE7zwPMSx7lB8WsLKi6QmJJZViz6WSqqs%2Fstl1qjWXnXyVJvC6ILERGSyPkfgHYLPg2480mFQQAWGQmR2nwt2xL3B4lWThvF7MhAA3ygSpFBbwkZEY1yR%2FtG4ge1m%2F3xvdhRapQyLI75%2FGOwxVPbMuhTb%2BClb7vkLOV9NF2hL5T4HZfSOeVvv%2FSD7JOYsJPjQNS5%2FOyadS3ieAzIjn3ozQSRJmqs%2BF2hz5DeFc3tlMPKBurbsUma5nNJGJwZWOBuMdkYjgw1ZuFwAY6pgHO7RUKSqztc2laJT9q2Up%2BMe301yq37Mpb3VSphZzP0MCzGjHwxvh5D2NvvI4SB1vl4eixYqIw3DkrYAsoQE5Mk5BLZg9ZRySKdEvOGZG%2F9gY%2F68THWgG2j%2BtEEPtVrotm8YHUCcJw0M2Usq5u8AmVYeej7Ln1dCxFoYg08ahzs4V%2BrLbDDhBERv8UDPRHIMfBD1tXiqpYdy8V%2FHMXut1Od6ig32cy&X-Amz-Signature=cc0723c69de75c49ee3f56db1d7ecacdbba209bde0c28e6ffcb5b462db170c43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBURB3S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0ICbDG68gvLU3HEJSZkhx6MvGbVNaVJ7Uc38qSOuXnAiA7jDeMW4d25TIlF4oP%2FB2cMMFUKt%2FxYWoQsdl%2FQ6Af2Sr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM16KHyo7Zzhsqe3IuKtwDpk3qzJvvxiAZhaVeO1emzIaIARah8hRoHoeZcxrxzjWMjou7RCTyDj4%2FhY3mGj%2B3Riib1FM41S5SkanjIJoWUPGBGC2TRjAIPk5iVEj25Gm4Gf6t7aCnCccTsID8veiOcY%2FtgyT8OrUQuEwDXFj4OGYVkmw0gxz4JgnSv3lmVr1pWyo2wCc%2FlyapGi9Z%2F1MjFpx7TfCcLVuFSxMQfJMSe8rSOxI1ueEayPN9cG0FoWgf%2FHYeRIotDV2vntfY5SwjeqiGtr4bvuJsmxc8gDFfD04%2BgJgHMn5SahbgAnBOAsozjf1U%2F0S0Xchd3dCU94wIrNIwgmZjBQQEWHwnLAyD3UxAYUWQASrzBi8YFDPv0TuQr8jwsDIh0HE7zwPMSx7lB8WsLKi6QmJJZViz6WSqqs%2Fstl1qjWXnXyVJvC6ILERGSyPkfgHYLPg2480mFQQAWGQmR2nwt2xL3B4lWThvF7MhAA3ygSpFBbwkZEY1yR%2FtG4ge1m%2F3xvdhRapQyLI75%2FGOwxVPbMuhTb%2BClb7vkLOV9NF2hL5T4HZfSOeVvv%2FSD7JOYsJPjQNS5%2FOyadS3ieAzIjn3ozQSRJmqs%2BF2hz5DeFc3tlMPKBurbsUma5nNJGJwZWOBuMdkYjgw1ZuFwAY6pgHO7RUKSqztc2laJT9q2Up%2BMe301yq37Mpb3VSphZzP0MCzGjHwxvh5D2NvvI4SB1vl4eixYqIw3DkrYAsoQE5Mk5BLZg9ZRySKdEvOGZG%2F9gY%2F68THWgG2j%2BtEEPtVrotm8YHUCcJw0M2Usq5u8AmVYeej7Ln1dCxFoYg08ahzs4V%2BrLbDDhBERv8UDPRHIMfBD1tXiqpYdy8V%2FHMXut1Od6ig32cy&X-Amz-Signature=17a775073e575eedbcdde2beba1e51cce1258499c1b27171cc7f42b8cc231946&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
