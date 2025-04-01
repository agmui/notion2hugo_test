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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SX7JW5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICt3%2BFTTpBGac3r5gPzciDwm3GawBY4Ut0cWBaThR8FyAiEA6bSr3vskQUQbvY6Uj3%2BTbnKBEctO6rt3WzYxOsHXeeUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqwiGL1BMtQTN4OSrcAy%2Bwtkalpk7evF6zMo1ew9BctbXy3aPeCvnYJg4chccwVbbi2y7AL1IBZ%2Bu8rxrVP0rMIkl%2FbD4cpUYyYr%2B%2FI4TCIx2%2FY8JjYIiTy4NFFNV7uyqHR9m%2BvzzmUIT2nl4snWtElWssnImiwz%2Fsc5Jer2fhePpipgkbEplpXTMpKAc8CPSDhfnjYknhzagKWiUlwqZisOidgqequVLveeGFBtSpoJxUXotD9y07Xs50cKNiMmme6aIJXZYzSFgsbo17%2B6J82yTnWwf1wD2GuiTU5GDxtkP4WP7kmiFELeg%2FjyI2fhp%2BHA423dZAI5zeo0tZw4k4LN4h87S4eFuqxIPZT1rkLg3tLkgtcm8PnpQ3FPyHg4dIECdqE4PTYfExWmteQ2cWltKs%2FwqpAjCwUYEoB6hR8Qq4qLUmUONPygUtTKHNqD%2Bak6dFc5ktKswHGQhZnQ2f4MreweytyFtzYCIKxojC%2Fg6YFCl8oUrgJ%2FRPSihpp%2F1FTVvje%2FrL8HyIdW4A0QwLgZxmb5em18dQIQfFlDcmUw5dkO6rA8FKgSTIdyv36a3%2Fk52fxkFZvuFFa7DoYd167uvVpOTBhUqtdUZTZfgwL3l3hMSz%2FY9V2x0s7yP1iXGxCsswPJJEDkXoMNqGsL8GOqUBwJAAzDedIUA3UoYDI7e%2FevH5SDxNBVeJgqZuWZYevmZ8IOdQGXG7u2bhd6q%2Bi0mgRa%2B028Fvs0r%2BYFP0wI2xywp4KB8edYq07iAGwKpBlQNv7%2B1KMwj%2BtmtmU%2FNuMpvevb%2FyjGPPmvZXv7A7ithCJu%2B8vEjz3jKArnJXmoJj6%2FJzMTVOi6mgJUiqwKqQyE%2BUs4gmn%2B4nmfDkM%2Fd7%2BTPaesGfgS%2BT&X-Amz-Signature=bac24c73b4b04351c6e7aa097cad0b2ca66f7bb27124418c499aa4b31279fa27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SX7JW5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICt3%2BFTTpBGac3r5gPzciDwm3GawBY4Ut0cWBaThR8FyAiEA6bSr3vskQUQbvY6Uj3%2BTbnKBEctO6rt3WzYxOsHXeeUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqwiGL1BMtQTN4OSrcAy%2Bwtkalpk7evF6zMo1ew9BctbXy3aPeCvnYJg4chccwVbbi2y7AL1IBZ%2Bu8rxrVP0rMIkl%2FbD4cpUYyYr%2B%2FI4TCIx2%2FY8JjYIiTy4NFFNV7uyqHR9m%2BvzzmUIT2nl4snWtElWssnImiwz%2Fsc5Jer2fhePpipgkbEplpXTMpKAc8CPSDhfnjYknhzagKWiUlwqZisOidgqequVLveeGFBtSpoJxUXotD9y07Xs50cKNiMmme6aIJXZYzSFgsbo17%2B6J82yTnWwf1wD2GuiTU5GDxtkP4WP7kmiFELeg%2FjyI2fhp%2BHA423dZAI5zeo0tZw4k4LN4h87S4eFuqxIPZT1rkLg3tLkgtcm8PnpQ3FPyHg4dIECdqE4PTYfExWmteQ2cWltKs%2FwqpAjCwUYEoB6hR8Qq4qLUmUONPygUtTKHNqD%2Bak6dFc5ktKswHGQhZnQ2f4MreweytyFtzYCIKxojC%2Fg6YFCl8oUrgJ%2FRPSihpp%2F1FTVvje%2FrL8HyIdW4A0QwLgZxmb5em18dQIQfFlDcmUw5dkO6rA8FKgSTIdyv36a3%2Fk52fxkFZvuFFa7DoYd167uvVpOTBhUqtdUZTZfgwL3l3hMSz%2FY9V2x0s7yP1iXGxCsswPJJEDkXoMNqGsL8GOqUBwJAAzDedIUA3UoYDI7e%2FevH5SDxNBVeJgqZuWZYevmZ8IOdQGXG7u2bhd6q%2Bi0mgRa%2B028Fvs0r%2BYFP0wI2xywp4KB8edYq07iAGwKpBlQNv7%2B1KMwj%2BtmtmU%2FNuMpvevb%2FyjGPPmvZXv7A7ithCJu%2B8vEjz3jKArnJXmoJj6%2FJzMTVOi6mgJUiqwKqQyE%2BUs4gmn%2B4nmfDkM%2Fd7%2BTPaesGfgS%2BT&X-Amz-Signature=785b2f40ac881752174b4685f684c87911e0cb0311897409ed2b9601f0ca4058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SX7JW5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICt3%2BFTTpBGac3r5gPzciDwm3GawBY4Ut0cWBaThR8FyAiEA6bSr3vskQUQbvY6Uj3%2BTbnKBEctO6rt3WzYxOsHXeeUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqwiGL1BMtQTN4OSrcAy%2Bwtkalpk7evF6zMo1ew9BctbXy3aPeCvnYJg4chccwVbbi2y7AL1IBZ%2Bu8rxrVP0rMIkl%2FbD4cpUYyYr%2B%2FI4TCIx2%2FY8JjYIiTy4NFFNV7uyqHR9m%2BvzzmUIT2nl4snWtElWssnImiwz%2Fsc5Jer2fhePpipgkbEplpXTMpKAc8CPSDhfnjYknhzagKWiUlwqZisOidgqequVLveeGFBtSpoJxUXotD9y07Xs50cKNiMmme6aIJXZYzSFgsbo17%2B6J82yTnWwf1wD2GuiTU5GDxtkP4WP7kmiFELeg%2FjyI2fhp%2BHA423dZAI5zeo0tZw4k4LN4h87S4eFuqxIPZT1rkLg3tLkgtcm8PnpQ3FPyHg4dIECdqE4PTYfExWmteQ2cWltKs%2FwqpAjCwUYEoB6hR8Qq4qLUmUONPygUtTKHNqD%2Bak6dFc5ktKswHGQhZnQ2f4MreweytyFtzYCIKxojC%2Fg6YFCl8oUrgJ%2FRPSihpp%2F1FTVvje%2FrL8HyIdW4A0QwLgZxmb5em18dQIQfFlDcmUw5dkO6rA8FKgSTIdyv36a3%2Fk52fxkFZvuFFa7DoYd167uvVpOTBhUqtdUZTZfgwL3l3hMSz%2FY9V2x0s7yP1iXGxCsswPJJEDkXoMNqGsL8GOqUBwJAAzDedIUA3UoYDI7e%2FevH5SDxNBVeJgqZuWZYevmZ8IOdQGXG7u2bhd6q%2Bi0mgRa%2B028Fvs0r%2BYFP0wI2xywp4KB8edYq07iAGwKpBlQNv7%2B1KMwj%2BtmtmU%2FNuMpvevb%2FyjGPPmvZXv7A7ithCJu%2B8vEjz3jKArnJXmoJj6%2FJzMTVOi6mgJUiqwKqQyE%2BUs4gmn%2B4nmfDkM%2Fd7%2BTPaesGfgS%2BT&X-Amz-Signature=1f5b553275bd09cc5b32c10f578ff717b76283bc74e3075ab7445c4203483918&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
