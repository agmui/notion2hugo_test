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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG74XOM5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDf%2FwrDmER5c2FWKEiWgQxd3CHtzzMrL4fkZNvBkoCJzAiAdIvGGsciSUR9BTEo3XSlvgag1oQ%2FmEMVAR0AXUn70nir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMh04XTowA%2BEZraRSqKtwDVSHUycCAB3l8hLPnCcy2LUcHOYHoNeTYCDqC9svccATInNxaR58DX4uKivw1Ln5clCzx9fCkMOfAqjr6sV7ox6H34T0RqyfNeGgfPfNPUCQeSf2ODMz1caFsEcUXAGoS66Xe6a5mPKWnORfAJte%2Ff2IFaEVaBCcRleE7DEsO73I7AYZi93GBKcU%2BNDZqWqWoZ1VraekunXyhX9cGZ8dI0v%2FaZ2zcvRQ%2FJt6yOUiuIYGSiT9vdijwTu%2FQjUG%2FwEdIbrXigHAuabE8K4jduU8iIFiqxlDsl3ClGPHPqLznuKMBHBEhAuep603K%2FjMLH1kAPSA6j2P%2FuA%2Bjac0JqKpy0lbWdP8%2FggE9fk9dghY8uHtWqLCLqRMzGcokqMbLdd2e7VGKUeVRJc9gpJUgrDhCUMoNmoZtOCN4Z1AbgBnOVpVcIchZfqcL%2FFrfVchxmdiHcK3LyPKA0lfACWYfsKPM6XJ6DLhccemeg7Bax9lRkgusuBjXTAFaYTCFWLshhDCRTC%2BI4HI5ZxDOtlEWtojRDvZk4VIDa8iKwRMi0dqC8B486KobZde4gpnBiTcZwTGdkPxo0V2S1oEjKZyiY1l6VEukC5Iznx3XUA%2BImq149rxc6U5j7i%2B6J87sv%2FAw%2B7vrvgY6pgGwO7gE6PDKPTk%2BSHf6Zx1EuQNevqO0fxAs2O0BqEzdS7y7oKXtyyqo%2BvCdtzpRuc88GfdXD6SJdzUpkqChCM%2BEgXZ4Krw9On9XgN2%2BD5JIyrxBr1ugjL3TJYTdzc0y6gQNmsbuoPjMXIgDbx3s0YZzDgEuHSlpnlctOgCg1x5NY1eTCqzYor1BfYo1ZUbxVtYw3OiOrTti0LaJi9VDAmEaMdhD8Gfa&X-Amz-Signature=9f67f725472fe2dd73a0857301d1da1543cb498bdc4d17172c77393df3227378&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG74XOM5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDf%2FwrDmER5c2FWKEiWgQxd3CHtzzMrL4fkZNvBkoCJzAiAdIvGGsciSUR9BTEo3XSlvgag1oQ%2FmEMVAR0AXUn70nir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMh04XTowA%2BEZraRSqKtwDVSHUycCAB3l8hLPnCcy2LUcHOYHoNeTYCDqC9svccATInNxaR58DX4uKivw1Ln5clCzx9fCkMOfAqjr6sV7ox6H34T0RqyfNeGgfPfNPUCQeSf2ODMz1caFsEcUXAGoS66Xe6a5mPKWnORfAJte%2Ff2IFaEVaBCcRleE7DEsO73I7AYZi93GBKcU%2BNDZqWqWoZ1VraekunXyhX9cGZ8dI0v%2FaZ2zcvRQ%2FJt6yOUiuIYGSiT9vdijwTu%2FQjUG%2FwEdIbrXigHAuabE8K4jduU8iIFiqxlDsl3ClGPHPqLznuKMBHBEhAuep603K%2FjMLH1kAPSA6j2P%2FuA%2Bjac0JqKpy0lbWdP8%2FggE9fk9dghY8uHtWqLCLqRMzGcokqMbLdd2e7VGKUeVRJc9gpJUgrDhCUMoNmoZtOCN4Z1AbgBnOVpVcIchZfqcL%2FFrfVchxmdiHcK3LyPKA0lfACWYfsKPM6XJ6DLhccemeg7Bax9lRkgusuBjXTAFaYTCFWLshhDCRTC%2BI4HI5ZxDOtlEWtojRDvZk4VIDa8iKwRMi0dqC8B486KobZde4gpnBiTcZwTGdkPxo0V2S1oEjKZyiY1l6VEukC5Iznx3XUA%2BImq149rxc6U5j7i%2B6J87sv%2FAw%2B7vrvgY6pgGwO7gE6PDKPTk%2BSHf6Zx1EuQNevqO0fxAs2O0BqEzdS7y7oKXtyyqo%2BvCdtzpRuc88GfdXD6SJdzUpkqChCM%2BEgXZ4Krw9On9XgN2%2BD5JIyrxBr1ugjL3TJYTdzc0y6gQNmsbuoPjMXIgDbx3s0YZzDgEuHSlpnlctOgCg1x5NY1eTCqzYor1BfYo1ZUbxVtYw3OiOrTti0LaJi9VDAmEaMdhD8Gfa&X-Amz-Signature=fa6d1f4290cc41c3d9a8037e81fc82daa6045f891ec7daca8facaefea5a740c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG74XOM5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDf%2FwrDmER5c2FWKEiWgQxd3CHtzzMrL4fkZNvBkoCJzAiAdIvGGsciSUR9BTEo3XSlvgag1oQ%2FmEMVAR0AXUn70nir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMh04XTowA%2BEZraRSqKtwDVSHUycCAB3l8hLPnCcy2LUcHOYHoNeTYCDqC9svccATInNxaR58DX4uKivw1Ln5clCzx9fCkMOfAqjr6sV7ox6H34T0RqyfNeGgfPfNPUCQeSf2ODMz1caFsEcUXAGoS66Xe6a5mPKWnORfAJte%2Ff2IFaEVaBCcRleE7DEsO73I7AYZi93GBKcU%2BNDZqWqWoZ1VraekunXyhX9cGZ8dI0v%2FaZ2zcvRQ%2FJt6yOUiuIYGSiT9vdijwTu%2FQjUG%2FwEdIbrXigHAuabE8K4jduU8iIFiqxlDsl3ClGPHPqLznuKMBHBEhAuep603K%2FjMLH1kAPSA6j2P%2FuA%2Bjac0JqKpy0lbWdP8%2FggE9fk9dghY8uHtWqLCLqRMzGcokqMbLdd2e7VGKUeVRJc9gpJUgrDhCUMoNmoZtOCN4Z1AbgBnOVpVcIchZfqcL%2FFrfVchxmdiHcK3LyPKA0lfACWYfsKPM6XJ6DLhccemeg7Bax9lRkgusuBjXTAFaYTCFWLshhDCRTC%2BI4HI5ZxDOtlEWtojRDvZk4VIDa8iKwRMi0dqC8B486KobZde4gpnBiTcZwTGdkPxo0V2S1oEjKZyiY1l6VEukC5Iznx3XUA%2BImq149rxc6U5j7i%2B6J87sv%2FAw%2B7vrvgY6pgGwO7gE6PDKPTk%2BSHf6Zx1EuQNevqO0fxAs2O0BqEzdS7y7oKXtyyqo%2BvCdtzpRuc88GfdXD6SJdzUpkqChCM%2BEgXZ4Krw9On9XgN2%2BD5JIyrxBr1ugjL3TJYTdzc0y6gQNmsbuoPjMXIgDbx3s0YZzDgEuHSlpnlctOgCg1x5NY1eTCqzYor1BfYo1ZUbxVtYw3OiOrTti0LaJi9VDAmEaMdhD8Gfa&X-Amz-Signature=72ecd8aa9befff0fa8dbdf2931ac547899cbb2d5ea9dbcad644c39b8021adaab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
