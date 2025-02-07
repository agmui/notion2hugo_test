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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLII5IZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICW04hZ1UNc3NmBK6Okjwd%2Fg%2B2fVYrW35LlQiF%2FB4RqGAiEA31k2jRQmiA3E%2BRoNZJde4sxHdpsxFAgpQDg7wJu87noq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFdE%2Bg%2FWvdM8drH0HircA0lkGne8QuxxsHmWMzisdfPUtPdW5zLuTA%2BrJc91%2B35IHJrb5M73HGW8j3iGKEqjEUV6tiFtCOP6HZ%2BR4Cvc2ovl4qyBj2bm97vuLPFyq%2Fy%2B4eRgWMSgcHgYf3Gdm5fUqqXIqdJNFAoi58VdhpTU462vBnDvTGscKxrslSKqq0M7afZC2%2FVBAV%2BGF5Yc9xc3KQB%2FbuvsJHTNdcXlDbgGfiSABa0IaovtyIUkeIPMmuv1uFs899dMd1scoPSDO2V%2F%2FTlppYdmZ3YljeMsjLkVXAOoSdMe%2F4xxXuElBN2PrKrBgGW06kCVJZdDXp0arBhOYF3ZsZcnJCm0jdpvl%2F56pKNNPw96WlC%2BxHNDO4IRQhLXDYR6yhp3YkI54LOMF%2BkrEeNiKDr2BYst%2F3d%2BVQqwmW2MIhsiBqgYJAkwIF2Ib%2FlTQgQV3uN%2FdDnnX6u5iAqeWoufDjz1z8fGG2cYv49su3tLumS6DVoGmcXbVGHXvqA2gSVCNaBOiqz%2Fh3zHqtnnBKeWuJPhb%2BJzf2mtbRrXZ8MU76vhB7HExsJ3jk0DgaJshKZQ3qz2LrJwax4B02iGz0decGYnh4U8f5wCMbbHCyt0xTqNuudJbGS0gV1BJc1jk5oxrYz8XyghdIyYMLmMmL0GOqUBoqhM62AndTLMUG3dUmYt%2BB9QSVh8qSExi94MlhQr13RhJrAkXLSM0LbGFsAxGioXKNXVt5BUU9JmVeGh513BaFFhJIpJXiCQfJDhGqCdD9lc2Cfp%2BIjZ9FFRbwsC0vzZsiMpfHWja6f5tWw3ofhcWmt8MXb4S8sP3qF%2Fw1z3zdNeLc%2FJW35RrvEoGsyYUDRaWcV11vk%2BAbNfk3rzlOSvjKwEhzds&X-Amz-Signature=de11edada85bd72b090d66b14951a430bf883752ebfd4a634943661972df236e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLII5IZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICW04hZ1UNc3NmBK6Okjwd%2Fg%2B2fVYrW35LlQiF%2FB4RqGAiEA31k2jRQmiA3E%2BRoNZJde4sxHdpsxFAgpQDg7wJu87noq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFdE%2Bg%2FWvdM8drH0HircA0lkGne8QuxxsHmWMzisdfPUtPdW5zLuTA%2BrJc91%2B35IHJrb5M73HGW8j3iGKEqjEUV6tiFtCOP6HZ%2BR4Cvc2ovl4qyBj2bm97vuLPFyq%2Fy%2B4eRgWMSgcHgYf3Gdm5fUqqXIqdJNFAoi58VdhpTU462vBnDvTGscKxrslSKqq0M7afZC2%2FVBAV%2BGF5Yc9xc3KQB%2FbuvsJHTNdcXlDbgGfiSABa0IaovtyIUkeIPMmuv1uFs899dMd1scoPSDO2V%2F%2FTlppYdmZ3YljeMsjLkVXAOoSdMe%2F4xxXuElBN2PrKrBgGW06kCVJZdDXp0arBhOYF3ZsZcnJCm0jdpvl%2F56pKNNPw96WlC%2BxHNDO4IRQhLXDYR6yhp3YkI54LOMF%2BkrEeNiKDr2BYst%2F3d%2BVQqwmW2MIhsiBqgYJAkwIF2Ib%2FlTQgQV3uN%2FdDnnX6u5iAqeWoufDjz1z8fGG2cYv49su3tLumS6DVoGmcXbVGHXvqA2gSVCNaBOiqz%2Fh3zHqtnnBKeWuJPhb%2BJzf2mtbRrXZ8MU76vhB7HExsJ3jk0DgaJshKZQ3qz2LrJwax4B02iGz0decGYnh4U8f5wCMbbHCyt0xTqNuudJbGS0gV1BJc1jk5oxrYz8XyghdIyYMLmMmL0GOqUBoqhM62AndTLMUG3dUmYt%2BB9QSVh8qSExi94MlhQr13RhJrAkXLSM0LbGFsAxGioXKNXVt5BUU9JmVeGh513BaFFhJIpJXiCQfJDhGqCdD9lc2Cfp%2BIjZ9FFRbwsC0vzZsiMpfHWja6f5tWw3ofhcWmt8MXb4S8sP3qF%2Fw1z3zdNeLc%2FJW35RrvEoGsyYUDRaWcV11vk%2BAbNfk3rzlOSvjKwEhzds&X-Amz-Signature=59e7d1058138711ab4a812b8e384f8502d038966bf7446e71492dd4ea5dbd23e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLII5IZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICW04hZ1UNc3NmBK6Okjwd%2Fg%2B2fVYrW35LlQiF%2FB4RqGAiEA31k2jRQmiA3E%2BRoNZJde4sxHdpsxFAgpQDg7wJu87noq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFdE%2Bg%2FWvdM8drH0HircA0lkGne8QuxxsHmWMzisdfPUtPdW5zLuTA%2BrJc91%2B35IHJrb5M73HGW8j3iGKEqjEUV6tiFtCOP6HZ%2BR4Cvc2ovl4qyBj2bm97vuLPFyq%2Fy%2B4eRgWMSgcHgYf3Gdm5fUqqXIqdJNFAoi58VdhpTU462vBnDvTGscKxrslSKqq0M7afZC2%2FVBAV%2BGF5Yc9xc3KQB%2FbuvsJHTNdcXlDbgGfiSABa0IaovtyIUkeIPMmuv1uFs899dMd1scoPSDO2V%2F%2FTlppYdmZ3YljeMsjLkVXAOoSdMe%2F4xxXuElBN2PrKrBgGW06kCVJZdDXp0arBhOYF3ZsZcnJCm0jdpvl%2F56pKNNPw96WlC%2BxHNDO4IRQhLXDYR6yhp3YkI54LOMF%2BkrEeNiKDr2BYst%2F3d%2BVQqwmW2MIhsiBqgYJAkwIF2Ib%2FlTQgQV3uN%2FdDnnX6u5iAqeWoufDjz1z8fGG2cYv49su3tLumS6DVoGmcXbVGHXvqA2gSVCNaBOiqz%2Fh3zHqtnnBKeWuJPhb%2BJzf2mtbRrXZ8MU76vhB7HExsJ3jk0DgaJshKZQ3qz2LrJwax4B02iGz0decGYnh4U8f5wCMbbHCyt0xTqNuudJbGS0gV1BJc1jk5oxrYz8XyghdIyYMLmMmL0GOqUBoqhM62AndTLMUG3dUmYt%2BB9QSVh8qSExi94MlhQr13RhJrAkXLSM0LbGFsAxGioXKNXVt5BUU9JmVeGh513BaFFhJIpJXiCQfJDhGqCdD9lc2Cfp%2BIjZ9FFRbwsC0vzZsiMpfHWja6f5tWw3ofhcWmt8MXb4S8sP3qF%2Fw1z3zdNeLc%2FJW35RrvEoGsyYUDRaWcV11vk%2BAbNfk3rzlOSvjKwEhzds&X-Amz-Signature=99f3390862bda1a3e702ac4461985e53df24ba8fca03038ca20fe5fd618af85c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
