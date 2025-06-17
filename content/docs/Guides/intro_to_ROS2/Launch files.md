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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSR5QXP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4BrChcGwcdP90aCtH5KGN6NuPgd7Qvuyt1fgwOFTFAiAOdjrj23%2FDhO%2F5eGWOfTQJxm3xLGDDqrvSZr6I2EV0oCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7ocXO2WIlmOE%2FHVJKtwD3rZ71KF7QBl9xEnxlS%2BCkolvd1kHehnUExr8s%2FHgtazmC4I1blWBuXxHIpzvb89Y33qHoB3WrPzAMkcm%2BYuqx90DVvHwKRKQGff9g0367U7U3YKAsj24%2BYVPhASsUm%2Bgtf9SuhTr7OgYeNA3FULOomJRvowAiDWDz73eet8oSaqQ0EVagUsJ5GnMNyWurQarL1oReVWAerkUlakXJ9Wm4RgfxHb4r3QBppaM%2F6q2IqfiThtb0j4nNHVWgCE2BErJWQwoJbn6E5hkKaDEem0FcFKY%2B%2F8LBiEYIV%2B4zV3dFSDBi7wQ%2FtPMlmIVLSsqCgXNLdNivJm4ZVT5mgGQgCKzQ%2BhzY5xjftPDV2iNBIdf8jlOQh06gpxkCYw9Am%2Brn0%2F20bBmhF1kpUOPZ3yAhsDcTHGEAdkd9to1O%2F7ptDsomE%2BUZRlahc%2Bhov%2F9%2F76nnGVE2IMEoPvSeF3ESpCQIUt7AQRDMfsGVGkVQ2j4ZiXeZDGQg958emZPtzUnd9oOwVJyhU41ZecTY3pj4PAchAB1oqduSN1wWE5uxa8HE1weMYtyNp6SwZOD86L3%2BbtThGysp99rRr6UdvveG%2FZEqkQeda6Hx%2BM4ha9FPmnZSM4A8WD9XfmU03fxKATVXV8w27%2FEwgY6pgGwizfNhw%2FrQ2%2FDWl7DbZRqZ4Mp78c%2BzinJQ4QRusWFq5yrrQd%2FJvZucLZ8PnJlhqqybAJGANBvRPHbzxqVrBhFz3WwW%2BaKCWC4QuvqcBdLT2pmjjRhzri2Ry6UqGg8QWo3RsUNEsQRhi8stCdxgfafkm1ZuIxJejnyX8PPOd9h16zREC0jzEmQrifL%2F9apk50312ubB%2BrIp89W9qB5X1b%2F3tT%2FcYfh&X-Amz-Signature=709d2f4248a64ba7084fcf7acc1dec66a19be689bc27e63e9b5d283b4ae404e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSR5QXP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4BrChcGwcdP90aCtH5KGN6NuPgd7Qvuyt1fgwOFTFAiAOdjrj23%2FDhO%2F5eGWOfTQJxm3xLGDDqrvSZr6I2EV0oCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7ocXO2WIlmOE%2FHVJKtwD3rZ71KF7QBl9xEnxlS%2BCkolvd1kHehnUExr8s%2FHgtazmC4I1blWBuXxHIpzvb89Y33qHoB3WrPzAMkcm%2BYuqx90DVvHwKRKQGff9g0367U7U3YKAsj24%2BYVPhASsUm%2Bgtf9SuhTr7OgYeNA3FULOomJRvowAiDWDz73eet8oSaqQ0EVagUsJ5GnMNyWurQarL1oReVWAerkUlakXJ9Wm4RgfxHb4r3QBppaM%2F6q2IqfiThtb0j4nNHVWgCE2BErJWQwoJbn6E5hkKaDEem0FcFKY%2B%2F8LBiEYIV%2B4zV3dFSDBi7wQ%2FtPMlmIVLSsqCgXNLdNivJm4ZVT5mgGQgCKzQ%2BhzY5xjftPDV2iNBIdf8jlOQh06gpxkCYw9Am%2Brn0%2F20bBmhF1kpUOPZ3yAhsDcTHGEAdkd9to1O%2F7ptDsomE%2BUZRlahc%2Bhov%2F9%2F76nnGVE2IMEoPvSeF3ESpCQIUt7AQRDMfsGVGkVQ2j4ZiXeZDGQg958emZPtzUnd9oOwVJyhU41ZecTY3pj4PAchAB1oqduSN1wWE5uxa8HE1weMYtyNp6SwZOD86L3%2BbtThGysp99rRr6UdvveG%2FZEqkQeda6Hx%2BM4ha9FPmnZSM4A8WD9XfmU03fxKATVXV8w27%2FEwgY6pgGwizfNhw%2FrQ2%2FDWl7DbZRqZ4Mp78c%2BzinJQ4QRusWFq5yrrQd%2FJvZucLZ8PnJlhqqybAJGANBvRPHbzxqVrBhFz3WwW%2BaKCWC4QuvqcBdLT2pmjjRhzri2Ry6UqGg8QWo3RsUNEsQRhi8stCdxgfafkm1ZuIxJejnyX8PPOd9h16zREC0jzEmQrifL%2F9apk50312ubB%2BrIp89W9qB5X1b%2F3tT%2FcYfh&X-Amz-Signature=32222664768b01018eb3d4f21691bacc4a0df10b6564dcf9a7ee298c669a2fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSR5QXP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4BrChcGwcdP90aCtH5KGN6NuPgd7Qvuyt1fgwOFTFAiAOdjrj23%2FDhO%2F5eGWOfTQJxm3xLGDDqrvSZr6I2EV0oCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7ocXO2WIlmOE%2FHVJKtwD3rZ71KF7QBl9xEnxlS%2BCkolvd1kHehnUExr8s%2FHgtazmC4I1blWBuXxHIpzvb89Y33qHoB3WrPzAMkcm%2BYuqx90DVvHwKRKQGff9g0367U7U3YKAsj24%2BYVPhASsUm%2Bgtf9SuhTr7OgYeNA3FULOomJRvowAiDWDz73eet8oSaqQ0EVagUsJ5GnMNyWurQarL1oReVWAerkUlakXJ9Wm4RgfxHb4r3QBppaM%2F6q2IqfiThtb0j4nNHVWgCE2BErJWQwoJbn6E5hkKaDEem0FcFKY%2B%2F8LBiEYIV%2B4zV3dFSDBi7wQ%2FtPMlmIVLSsqCgXNLdNivJm4ZVT5mgGQgCKzQ%2BhzY5xjftPDV2iNBIdf8jlOQh06gpxkCYw9Am%2Brn0%2F20bBmhF1kpUOPZ3yAhsDcTHGEAdkd9to1O%2F7ptDsomE%2BUZRlahc%2Bhov%2F9%2F76nnGVE2IMEoPvSeF3ESpCQIUt7AQRDMfsGVGkVQ2j4ZiXeZDGQg958emZPtzUnd9oOwVJyhU41ZecTY3pj4PAchAB1oqduSN1wWE5uxa8HE1weMYtyNp6SwZOD86L3%2BbtThGysp99rRr6UdvveG%2FZEqkQeda6Hx%2BM4ha9FPmnZSM4A8WD9XfmU03fxKATVXV8w27%2FEwgY6pgGwizfNhw%2FrQ2%2FDWl7DbZRqZ4Mp78c%2BzinJQ4QRusWFq5yrrQd%2FJvZucLZ8PnJlhqqybAJGANBvRPHbzxqVrBhFz3WwW%2BaKCWC4QuvqcBdLT2pmjjRhzri2Ry6UqGg8QWo3RsUNEsQRhi8stCdxgfafkm1ZuIxJejnyX8PPOd9h16zREC0jzEmQrifL%2F9apk50312ubB%2BrIp89W9qB5X1b%2F3tT%2FcYfh&X-Amz-Signature=bce0a5cf6449fb35da3bddfea3d25aa5c1f1b2dff1c2a3d3939ce0af1fd49cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
