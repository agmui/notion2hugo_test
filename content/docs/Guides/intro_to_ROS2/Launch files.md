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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSMQOSX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6TTSz3jpfUxu30wfgmzFZ2P2WZCvQUV4l4CgtcwlY2AiBSRL1jjSQXAEL2J0nUVdAxTAiXERZ4GG63z3VPf5l2TyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmVAiPSjO4%2BCwu0%2BKtwDrPBuHgX9rfm10eIP9KlC44unYcjBTGD%2FZplC5GOy5A8xbtArs04Waf0wgpVm79T6km5Xbqddk2NuQ6eZlrAHFyzSX90LMEMKwM6P%2FtJdjVQYShNw4NzKu2M3cGTQJ0JkptCzmvMOYxCB%2B2GPnXNKwHzpGSeRj0xLQyJuJpoNmPxKpG8q8ut9sy9MjZIwZMq%2BHV%2F5s26qT8X4g31nOVwUs%2Bevxw81dFo74I7nnmfuDWWIiUaYKprJcItKO8PkGfdZj1aUZIbcYJlwilGCRekOZKyq4DKv0qEYyFu0OR21%2B6SzjHUHcivrC23oDZwwRKcCfzy5WvbwEgMdhk4wGdBC3hdLAivKjP5ee6%2F6e3QDgrSQReYou5DCBbblJ7ZwcQFykfT7E2EitpWrfaF8zn9a4IM9ZZhkNdosLOOYxOClssqhKQKTCjQL5%2F0aoHkXDMJlOAUj0wHIugsHd%2BlwPpu9q5I0iraRz1eSW1Pgwio%2F0XyFDJgl0b77q68gIJeFgATGXVpSUCazNqA4w2%2FCL18Uk336aJlc7TOTNJBlTCtvQAsx8z%2FdaEMXFjjnYWpssewrZIcFEEbnIMOI3eHdaxWvizIwoPZhE4iHWZeZymZGPdbr58Dd3uX%2F5HZfR3YwoIqtvQY6pgGHkOw9%2BDTz4GsHpzKmuTDad%2F9CncvdxEK3Mq2mAU%2FWK5K5P1FBVxrz8MGUGpE%2FXqdMVi8QZAc2Fp0%2BH5JmQ0tb6hlguRO4aqHj6ni7kApDzfDzKc5Hs2sa3M1i%2FCHIpUKn1uGLuDyDZJ2C%2Flte65uMQ7CIv5veCbSSvApLxiWDLBXJpljUJMALty9QYCAPG6i%2B3Mwj59ZlcAvyjqkEU%2FbaLvO24djs&X-Amz-Signature=2d18bd8944e5910c01eed2feb48841a1c992edf3ef28058dd05124a3fa2afb6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSMQOSX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6TTSz3jpfUxu30wfgmzFZ2P2WZCvQUV4l4CgtcwlY2AiBSRL1jjSQXAEL2J0nUVdAxTAiXERZ4GG63z3VPf5l2TyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmVAiPSjO4%2BCwu0%2BKtwDrPBuHgX9rfm10eIP9KlC44unYcjBTGD%2FZplC5GOy5A8xbtArs04Waf0wgpVm79T6km5Xbqddk2NuQ6eZlrAHFyzSX90LMEMKwM6P%2FtJdjVQYShNw4NzKu2M3cGTQJ0JkptCzmvMOYxCB%2B2GPnXNKwHzpGSeRj0xLQyJuJpoNmPxKpG8q8ut9sy9MjZIwZMq%2BHV%2F5s26qT8X4g31nOVwUs%2Bevxw81dFo74I7nnmfuDWWIiUaYKprJcItKO8PkGfdZj1aUZIbcYJlwilGCRekOZKyq4DKv0qEYyFu0OR21%2B6SzjHUHcivrC23oDZwwRKcCfzy5WvbwEgMdhk4wGdBC3hdLAivKjP5ee6%2F6e3QDgrSQReYou5DCBbblJ7ZwcQFykfT7E2EitpWrfaF8zn9a4IM9ZZhkNdosLOOYxOClssqhKQKTCjQL5%2F0aoHkXDMJlOAUj0wHIugsHd%2BlwPpu9q5I0iraRz1eSW1Pgwio%2F0XyFDJgl0b77q68gIJeFgATGXVpSUCazNqA4w2%2FCL18Uk336aJlc7TOTNJBlTCtvQAsx8z%2FdaEMXFjjnYWpssewrZIcFEEbnIMOI3eHdaxWvizIwoPZhE4iHWZeZymZGPdbr58Dd3uX%2F5HZfR3YwoIqtvQY6pgGHkOw9%2BDTz4GsHpzKmuTDad%2F9CncvdxEK3Mq2mAU%2FWK5K5P1FBVxrz8MGUGpE%2FXqdMVi8QZAc2Fp0%2BH5JmQ0tb6hlguRO4aqHj6ni7kApDzfDzKc5Hs2sa3M1i%2FCHIpUKn1uGLuDyDZJ2C%2Flte65uMQ7CIv5veCbSSvApLxiWDLBXJpljUJMALty9QYCAPG6i%2B3Mwj59ZlcAvyjqkEU%2FbaLvO24djs&X-Amz-Signature=b09ffcbb88a64f636bc09ecf325d5038ef19c5987aa2931f61956b4618de69f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSMQOSX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6TTSz3jpfUxu30wfgmzFZ2P2WZCvQUV4l4CgtcwlY2AiBSRL1jjSQXAEL2J0nUVdAxTAiXERZ4GG63z3VPf5l2TyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmVAiPSjO4%2BCwu0%2BKtwDrPBuHgX9rfm10eIP9KlC44unYcjBTGD%2FZplC5GOy5A8xbtArs04Waf0wgpVm79T6km5Xbqddk2NuQ6eZlrAHFyzSX90LMEMKwM6P%2FtJdjVQYShNw4NzKu2M3cGTQJ0JkptCzmvMOYxCB%2B2GPnXNKwHzpGSeRj0xLQyJuJpoNmPxKpG8q8ut9sy9MjZIwZMq%2BHV%2F5s26qT8X4g31nOVwUs%2Bevxw81dFo74I7nnmfuDWWIiUaYKprJcItKO8PkGfdZj1aUZIbcYJlwilGCRekOZKyq4DKv0qEYyFu0OR21%2B6SzjHUHcivrC23oDZwwRKcCfzy5WvbwEgMdhk4wGdBC3hdLAivKjP5ee6%2F6e3QDgrSQReYou5DCBbblJ7ZwcQFykfT7E2EitpWrfaF8zn9a4IM9ZZhkNdosLOOYxOClssqhKQKTCjQL5%2F0aoHkXDMJlOAUj0wHIugsHd%2BlwPpu9q5I0iraRz1eSW1Pgwio%2F0XyFDJgl0b77q68gIJeFgATGXVpSUCazNqA4w2%2FCL18Uk336aJlc7TOTNJBlTCtvQAsx8z%2FdaEMXFjjnYWpssewrZIcFEEbnIMOI3eHdaxWvizIwoPZhE4iHWZeZymZGPdbr58Dd3uX%2F5HZfR3YwoIqtvQY6pgGHkOw9%2BDTz4GsHpzKmuTDad%2F9CncvdxEK3Mq2mAU%2FWK5K5P1FBVxrz8MGUGpE%2FXqdMVi8QZAc2Fp0%2BH5JmQ0tb6hlguRO4aqHj6ni7kApDzfDzKc5Hs2sa3M1i%2FCHIpUKn1uGLuDyDZJ2C%2Flte65uMQ7CIv5veCbSSvApLxiWDLBXJpljUJMALty9QYCAPG6i%2B3Mwj59ZlcAvyjqkEU%2FbaLvO24djs&X-Amz-Signature=52768ae7ebb82c4e600491b29073c4017014bc06539be9af683f24ed14aeadb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
