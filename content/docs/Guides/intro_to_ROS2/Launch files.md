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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5RDYIS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDu6Juv0qm38Gka1o6zzMKFDDfj06On13htLpBhMFMSvAiEAwiVlHxVq04as1sCNSb%2BaN47SJj4ImRR65r1PjrdHm9MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcLN4c4BNYibhFacSrcAw0bDATXqcU7cUzZq2xxk73Rpc0E5zA3Qq80rziCPETdvWKB%2FXBZ%2BQPK9BTbAiw1zvNYPB5yZI7tRbnbX3yAjhg%2BPJJ4tsZLvvuHft4oFPws4KWroPHxeu6k3KCcBV2VZ4uDNKpMADQOzjNnLn%2FfGUy79xxeP4PnETNyPCUbWgrdHui0EX1enoUoT7z%2Fz%2BJf8A1gonn0j9Svx7WVpoBcqH8esc3Ej91ZewmSaNTrMt8JYs3TxCnHUDPsk0uVVRc3MBtKr5N0lApl1tfcp0kddAAXDDJXqTfIU78j1xMMYh0i%2BSg%2FZI36MkK9SKetmchRVG%2Fjrg1FuLw0PQHD9PvbkmLttBLCbvrkTByztR4j3AfRAG8LB6MAL5uKh%2BwrLsk%2Bp1bxHlSy3YBoGZHx8nvaGmSTelpHIcmbkGOhPnuxx09300qAsusGIfsNLD98atTk2n0v1DYKqz8qiJvGpa1lCft6zFg02JJUAlgHOPuvPOVGVoygkOX39diS2d16diGMzfgAfJ0AE6RztFsZchah1b5a7kjkD97NKKrNYlLUE9IgWwdDnkfL%2B%2FW4lsWNieXualUgC%2FG0ehzMWKXODH4q9lDbkv9amiMZn7YUkHLAqV2n69cUmFFrmUN2bhswMIbf8MEGOqUB%2F6TveysNi2k3DZm4x%2FDYn7qxhlD4j7Og7LbF9fui%2B%2FrN9iAbv6SFH9DXUfiAEGeJnVWYxT2gp%2BFiCEklrouzBPFXP7AEL%2FHbCU0dTm6Dc%2F01Gl4pIH1QwNwP5888Olo5vhqUvVm8dO53fAZDsnFL6XQ32vVvJ1%2FNV9Th%2BvnW4l3%2Fl8s6ai78VQE3ZdsRhrykHAWccl2yMsB6yz3mwGjE7%2FSU3Zip&X-Amz-Signature=aa6d48a42f8875a256e5ff4a9dee301bcff7965e32829996c7cccedf34dff9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5RDYIS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDu6Juv0qm38Gka1o6zzMKFDDfj06On13htLpBhMFMSvAiEAwiVlHxVq04as1sCNSb%2BaN47SJj4ImRR65r1PjrdHm9MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcLN4c4BNYibhFacSrcAw0bDATXqcU7cUzZq2xxk73Rpc0E5zA3Qq80rziCPETdvWKB%2FXBZ%2BQPK9BTbAiw1zvNYPB5yZI7tRbnbX3yAjhg%2BPJJ4tsZLvvuHft4oFPws4KWroPHxeu6k3KCcBV2VZ4uDNKpMADQOzjNnLn%2FfGUy79xxeP4PnETNyPCUbWgrdHui0EX1enoUoT7z%2Fz%2BJf8A1gonn0j9Svx7WVpoBcqH8esc3Ej91ZewmSaNTrMt8JYs3TxCnHUDPsk0uVVRc3MBtKr5N0lApl1tfcp0kddAAXDDJXqTfIU78j1xMMYh0i%2BSg%2FZI36MkK9SKetmchRVG%2Fjrg1FuLw0PQHD9PvbkmLttBLCbvrkTByztR4j3AfRAG8LB6MAL5uKh%2BwrLsk%2Bp1bxHlSy3YBoGZHx8nvaGmSTelpHIcmbkGOhPnuxx09300qAsusGIfsNLD98atTk2n0v1DYKqz8qiJvGpa1lCft6zFg02JJUAlgHOPuvPOVGVoygkOX39diS2d16diGMzfgAfJ0AE6RztFsZchah1b5a7kjkD97NKKrNYlLUE9IgWwdDnkfL%2B%2FW4lsWNieXualUgC%2FG0ehzMWKXODH4q9lDbkv9amiMZn7YUkHLAqV2n69cUmFFrmUN2bhswMIbf8MEGOqUB%2F6TveysNi2k3DZm4x%2FDYn7qxhlD4j7Og7LbF9fui%2B%2FrN9iAbv6SFH9DXUfiAEGeJnVWYxT2gp%2BFiCEklrouzBPFXP7AEL%2FHbCU0dTm6Dc%2F01Gl4pIH1QwNwP5888Olo5vhqUvVm8dO53fAZDsnFL6XQ32vVvJ1%2FNV9Th%2BvnW4l3%2Fl8s6ai78VQE3ZdsRhrykHAWccl2yMsB6yz3mwGjE7%2FSU3Zip&X-Amz-Signature=0ab88d3ed9b24574174819686784538d5c1dd32a76d61e01d87bc0c04fc51d44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5RDYIS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDu6Juv0qm38Gka1o6zzMKFDDfj06On13htLpBhMFMSvAiEAwiVlHxVq04as1sCNSb%2BaN47SJj4ImRR65r1PjrdHm9MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcLN4c4BNYibhFacSrcAw0bDATXqcU7cUzZq2xxk73Rpc0E5zA3Qq80rziCPETdvWKB%2FXBZ%2BQPK9BTbAiw1zvNYPB5yZI7tRbnbX3yAjhg%2BPJJ4tsZLvvuHft4oFPws4KWroPHxeu6k3KCcBV2VZ4uDNKpMADQOzjNnLn%2FfGUy79xxeP4PnETNyPCUbWgrdHui0EX1enoUoT7z%2Fz%2BJf8A1gonn0j9Svx7WVpoBcqH8esc3Ej91ZewmSaNTrMt8JYs3TxCnHUDPsk0uVVRc3MBtKr5N0lApl1tfcp0kddAAXDDJXqTfIU78j1xMMYh0i%2BSg%2FZI36MkK9SKetmchRVG%2Fjrg1FuLw0PQHD9PvbkmLttBLCbvrkTByztR4j3AfRAG8LB6MAL5uKh%2BwrLsk%2Bp1bxHlSy3YBoGZHx8nvaGmSTelpHIcmbkGOhPnuxx09300qAsusGIfsNLD98atTk2n0v1DYKqz8qiJvGpa1lCft6zFg02JJUAlgHOPuvPOVGVoygkOX39diS2d16diGMzfgAfJ0AE6RztFsZchah1b5a7kjkD97NKKrNYlLUE9IgWwdDnkfL%2B%2FW4lsWNieXualUgC%2FG0ehzMWKXODH4q9lDbkv9amiMZn7YUkHLAqV2n69cUmFFrmUN2bhswMIbf8MEGOqUB%2F6TveysNi2k3DZm4x%2FDYn7qxhlD4j7Og7LbF9fui%2B%2FrN9iAbv6SFH9DXUfiAEGeJnVWYxT2gp%2BFiCEklrouzBPFXP7AEL%2FHbCU0dTm6Dc%2F01Gl4pIH1QwNwP5888Olo5vhqUvVm8dO53fAZDsnFL6XQ32vVvJ1%2FNV9Th%2BvnW4l3%2Fl8s6ai78VQE3ZdsRhrykHAWccl2yMsB6yz3mwGjE7%2FSU3Zip&X-Amz-Signature=1172db7a3f926316e7f607c0c2c74639e540ada265ac45870e64098bdc92a624&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
