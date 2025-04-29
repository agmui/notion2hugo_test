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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7Q46VF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJKn0YeyF7CLmzWbrt7kl8x8%2FbkLp0JtFgypcerlXcCAiAnYQlL8XMFzCbSAwOuPUd%2F9fEggM%2B5R9nh1g1aWSTpuSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsCx3qSoMjE%2Fj0ZuKtwDaA0ApXe36vULksTJWdU3E1K5wLz%2BpeAcpMJHQPT6Z8b%2Bi6E6WxzlC%2FUc63g6rIZq22mx8dgS8itN3qRAaTrgWrQRBtvaNwlTpRWTwznVszd9TBaXqt8rueYCKiCRwSwAsfDYOOSJp1HpYz%2B%2FLcTC23PZxEeTRvkZQqx7AYRiM%2BPWh6zcTSct21Wb2NT1wOK3jGx%2B7ut6%2FGyhmMlyAfe03eisMLyDCnSKzczhib%2Bbfq%2FoZhTP8M5j5C3Xy2hn24AFkONfZYQseR7S06NQI6FPG9ggK13bEX62mmaMwnHip8pfaBDdplXXWuTMfr8a5QtFiWMG6eLR8omANyPASDkSneu4bhyJk9Gu%2FWyfxblEni3NLaW4QhfJzI5zrwe0CIt2O6uGsyZKhUW6WgDkBlsMVIRcXZnHotr9z30aEtKylJ4j3B%2F8%2FJ1nraxvnfF%2BsR8x%2BsJYXhL55FhAusuk5egcmeYwCYfzE%2BjEml0xpBZPxsJB8Yn1XFTYuNC7O1RYHcQGM%2B9E3EFFZ6GTruDJ7NjIaMh96%2FQBjRf9bQ1982H%2BhJouGlllbZaLKYtc2zaFi%2Fa3ytkKaYV%2BYeX3amEvdsfzNRaAuUm5IQeFMyf5vkoLrMY2BhAkH3bDe4ePY2Mwtc%2FEwAY6pgEiatR3Q8Ed%2BtPjRSTMAUz%2Bo1gGXGBXpW8Sj1BxN5hk6NvdYJRnXInCuUkhs71ApUJnVrEjaW%2FftGauVqu9EjECaerAXBVCocIvX9dS1Nt6ZCLOKXPBnmrC%2BoUu3ExsYESj%2BT1wWcoaFtfnae%2BG3inMPblXeYMdcDoIc0z8DekRlTW3ZFAsBtpcJ4JwXfH%2FlSj8kBicMw9hB2YDEYwAS%2FYeteX9IcsM&X-Amz-Signature=3e00d15b163ab6f7685eda24e61a0a658eeeeba07eef574709e8df9969cd96ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7Q46VF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJKn0YeyF7CLmzWbrt7kl8x8%2FbkLp0JtFgypcerlXcCAiAnYQlL8XMFzCbSAwOuPUd%2F9fEggM%2B5R9nh1g1aWSTpuSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsCx3qSoMjE%2Fj0ZuKtwDaA0ApXe36vULksTJWdU3E1K5wLz%2BpeAcpMJHQPT6Z8b%2Bi6E6WxzlC%2FUc63g6rIZq22mx8dgS8itN3qRAaTrgWrQRBtvaNwlTpRWTwznVszd9TBaXqt8rueYCKiCRwSwAsfDYOOSJp1HpYz%2B%2FLcTC23PZxEeTRvkZQqx7AYRiM%2BPWh6zcTSct21Wb2NT1wOK3jGx%2B7ut6%2FGyhmMlyAfe03eisMLyDCnSKzczhib%2Bbfq%2FoZhTP8M5j5C3Xy2hn24AFkONfZYQseR7S06NQI6FPG9ggK13bEX62mmaMwnHip8pfaBDdplXXWuTMfr8a5QtFiWMG6eLR8omANyPASDkSneu4bhyJk9Gu%2FWyfxblEni3NLaW4QhfJzI5zrwe0CIt2O6uGsyZKhUW6WgDkBlsMVIRcXZnHotr9z30aEtKylJ4j3B%2F8%2FJ1nraxvnfF%2BsR8x%2BsJYXhL55FhAusuk5egcmeYwCYfzE%2BjEml0xpBZPxsJB8Yn1XFTYuNC7O1RYHcQGM%2B9E3EFFZ6GTruDJ7NjIaMh96%2FQBjRf9bQ1982H%2BhJouGlllbZaLKYtc2zaFi%2Fa3ytkKaYV%2BYeX3amEvdsfzNRaAuUm5IQeFMyf5vkoLrMY2BhAkH3bDe4ePY2Mwtc%2FEwAY6pgEiatR3Q8Ed%2BtPjRSTMAUz%2Bo1gGXGBXpW8Sj1BxN5hk6NvdYJRnXInCuUkhs71ApUJnVrEjaW%2FftGauVqu9EjECaerAXBVCocIvX9dS1Nt6ZCLOKXPBnmrC%2BoUu3ExsYESj%2BT1wWcoaFtfnae%2BG3inMPblXeYMdcDoIc0z8DekRlTW3ZFAsBtpcJ4JwXfH%2FlSj8kBicMw9hB2YDEYwAS%2FYeteX9IcsM&X-Amz-Signature=2cf6237123aff68bf6245a0ba49e8999544d050cb80061a1af759aed5437ac0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7Q46VF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJKn0YeyF7CLmzWbrt7kl8x8%2FbkLp0JtFgypcerlXcCAiAnYQlL8XMFzCbSAwOuPUd%2F9fEggM%2B5R9nh1g1aWSTpuSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsCx3qSoMjE%2Fj0ZuKtwDaA0ApXe36vULksTJWdU3E1K5wLz%2BpeAcpMJHQPT6Z8b%2Bi6E6WxzlC%2FUc63g6rIZq22mx8dgS8itN3qRAaTrgWrQRBtvaNwlTpRWTwznVszd9TBaXqt8rueYCKiCRwSwAsfDYOOSJp1HpYz%2B%2FLcTC23PZxEeTRvkZQqx7AYRiM%2BPWh6zcTSct21Wb2NT1wOK3jGx%2B7ut6%2FGyhmMlyAfe03eisMLyDCnSKzczhib%2Bbfq%2FoZhTP8M5j5C3Xy2hn24AFkONfZYQseR7S06NQI6FPG9ggK13bEX62mmaMwnHip8pfaBDdplXXWuTMfr8a5QtFiWMG6eLR8omANyPASDkSneu4bhyJk9Gu%2FWyfxblEni3NLaW4QhfJzI5zrwe0CIt2O6uGsyZKhUW6WgDkBlsMVIRcXZnHotr9z30aEtKylJ4j3B%2F8%2FJ1nraxvnfF%2BsR8x%2BsJYXhL55FhAusuk5egcmeYwCYfzE%2BjEml0xpBZPxsJB8Yn1XFTYuNC7O1RYHcQGM%2B9E3EFFZ6GTruDJ7NjIaMh96%2FQBjRf9bQ1982H%2BhJouGlllbZaLKYtc2zaFi%2Fa3ytkKaYV%2BYeX3amEvdsfzNRaAuUm5IQeFMyf5vkoLrMY2BhAkH3bDe4ePY2Mwtc%2FEwAY6pgEiatR3Q8Ed%2BtPjRSTMAUz%2Bo1gGXGBXpW8Sj1BxN5hk6NvdYJRnXInCuUkhs71ApUJnVrEjaW%2FftGauVqu9EjECaerAXBVCocIvX9dS1Nt6ZCLOKXPBnmrC%2BoUu3ExsYESj%2BT1wWcoaFtfnae%2BG3inMPblXeYMdcDoIc0z8DekRlTW3ZFAsBtpcJ4JwXfH%2FlSj8kBicMw9hB2YDEYwAS%2FYeteX9IcsM&X-Amz-Signature=504799f0021456e89bbea7c5cf22bedbfb761284a45bd811f92b631058dbc497&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
