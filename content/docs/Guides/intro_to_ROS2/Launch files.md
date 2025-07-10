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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IXSOQ5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkgJmRMaC85fWaZya2QYTJ3PpfGOEJ5t%2FDhOXVgMLjOAiAFXvSxR3%2FB2z17Q9xBrR4nc7w3NcqiekRxtI3kAAcZySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1vmyPIcPM3mi96pKtwD0xIbIrPa4nNMF0p2UewzyVA8evHeRRNP3LV2jZwnsGmnTzaRl9q0kdqTONdo%2Fb4XAg7iewjqklcvJb8M0zy4vERDRV46xYTeYjhp0HOVYdxfoQjL6KwYzUWPHjs%2Fp97vxt2nR829FZxEmZxRghxE2lmcpF7v%2B%2F7odwOg0vJYjOP8pdICfQStWAnCPgI1tp9wpCwW7%2FRUYpACMpUa%2FoMOaCBmExVgmEG9olmRLSVrPKWJ7rdq4J81scGu9LXdAK2hh5N%2FSq6zm%2BENOSmq58sUTJ7eEcpeoXvxMzfIRXo%2B%2B4ATBj8feYwReniK%2FGvIzB%2BY27og1scLvTJE3IB5YVaPWS0SMkY9A2Q5bmNfB98DqVroQQ7bf1p83VdkWIf2BLfImAEwfzIN6TqP0zL7pkcVoNemk8O8IadkG%2BX7PXzylh6Oi0ckom7ujUgnBBCn4fttPfWxSJNoefgqE%2B4SWm%2FyKwjN%2BERkeiblA0BP6iBr0Qivpe00XGdzc2eqam7cB6YlrUn2FsHYwFmNdicDNfwpyeyvR2BdD6AQgwvbJyYKPsTYcjmXbqvP3eaNg9RFxyVs4QGl9er%2FnmtA2Qhx27nDLgYM8vfhlm%2FQugJz5%2FKVlGqLLZzXBC60XIz5Ddow7oC%2BwwY6pgGfp%2FYUbFyNElw0ukQnsJ70b08nc0tvjRRZwIDM6dHYZmv2izBsB37pAOn1ufwE4NblE049tTSUmI9%2BDBWcoZxZhc%2BJ7h1dKQhjvNFyQyFxL8VzzEZJc5G7ZsI%2BMBCkXiPzlS5E6aMMyN4aa31ecRa79HuEhGu8MrxjJeds4E%2BeGGOvk331%2BHJpCoC4BTAVyYvKSnM2QLNKxchTx652djrr%2FLyyzYOZ&X-Amz-Signature=f0c4366b966ba7c6fc70f8a487edd951330b60fa4cded2a567d4aabf3d9fe442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IXSOQ5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkgJmRMaC85fWaZya2QYTJ3PpfGOEJ5t%2FDhOXVgMLjOAiAFXvSxR3%2FB2z17Q9xBrR4nc7w3NcqiekRxtI3kAAcZySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1vmyPIcPM3mi96pKtwD0xIbIrPa4nNMF0p2UewzyVA8evHeRRNP3LV2jZwnsGmnTzaRl9q0kdqTONdo%2Fb4XAg7iewjqklcvJb8M0zy4vERDRV46xYTeYjhp0HOVYdxfoQjL6KwYzUWPHjs%2Fp97vxt2nR829FZxEmZxRghxE2lmcpF7v%2B%2F7odwOg0vJYjOP8pdICfQStWAnCPgI1tp9wpCwW7%2FRUYpACMpUa%2FoMOaCBmExVgmEG9olmRLSVrPKWJ7rdq4J81scGu9LXdAK2hh5N%2FSq6zm%2BENOSmq58sUTJ7eEcpeoXvxMzfIRXo%2B%2B4ATBj8feYwReniK%2FGvIzB%2BY27og1scLvTJE3IB5YVaPWS0SMkY9A2Q5bmNfB98DqVroQQ7bf1p83VdkWIf2BLfImAEwfzIN6TqP0zL7pkcVoNemk8O8IadkG%2BX7PXzylh6Oi0ckom7ujUgnBBCn4fttPfWxSJNoefgqE%2B4SWm%2FyKwjN%2BERkeiblA0BP6iBr0Qivpe00XGdzc2eqam7cB6YlrUn2FsHYwFmNdicDNfwpyeyvR2BdD6AQgwvbJyYKPsTYcjmXbqvP3eaNg9RFxyVs4QGl9er%2FnmtA2Qhx27nDLgYM8vfhlm%2FQugJz5%2FKVlGqLLZzXBC60XIz5Ddow7oC%2BwwY6pgGfp%2FYUbFyNElw0ukQnsJ70b08nc0tvjRRZwIDM6dHYZmv2izBsB37pAOn1ufwE4NblE049tTSUmI9%2BDBWcoZxZhc%2BJ7h1dKQhjvNFyQyFxL8VzzEZJc5G7ZsI%2BMBCkXiPzlS5E6aMMyN4aa31ecRa79HuEhGu8MrxjJeds4E%2BeGGOvk331%2BHJpCoC4BTAVyYvKSnM2QLNKxchTx652djrr%2FLyyzYOZ&X-Amz-Signature=ba4f2ae3e0e568b7c69199d0df5a1dd1e7d5bd7b38bf4ccfceebd9047f34e916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IXSOQ5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkgJmRMaC85fWaZya2QYTJ3PpfGOEJ5t%2FDhOXVgMLjOAiAFXvSxR3%2FB2z17Q9xBrR4nc7w3NcqiekRxtI3kAAcZySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1vmyPIcPM3mi96pKtwD0xIbIrPa4nNMF0p2UewzyVA8evHeRRNP3LV2jZwnsGmnTzaRl9q0kdqTONdo%2Fb4XAg7iewjqklcvJb8M0zy4vERDRV46xYTeYjhp0HOVYdxfoQjL6KwYzUWPHjs%2Fp97vxt2nR829FZxEmZxRghxE2lmcpF7v%2B%2F7odwOg0vJYjOP8pdICfQStWAnCPgI1tp9wpCwW7%2FRUYpACMpUa%2FoMOaCBmExVgmEG9olmRLSVrPKWJ7rdq4J81scGu9LXdAK2hh5N%2FSq6zm%2BENOSmq58sUTJ7eEcpeoXvxMzfIRXo%2B%2B4ATBj8feYwReniK%2FGvIzB%2BY27og1scLvTJE3IB5YVaPWS0SMkY9A2Q5bmNfB98DqVroQQ7bf1p83VdkWIf2BLfImAEwfzIN6TqP0zL7pkcVoNemk8O8IadkG%2BX7PXzylh6Oi0ckom7ujUgnBBCn4fttPfWxSJNoefgqE%2B4SWm%2FyKwjN%2BERkeiblA0BP6iBr0Qivpe00XGdzc2eqam7cB6YlrUn2FsHYwFmNdicDNfwpyeyvR2BdD6AQgwvbJyYKPsTYcjmXbqvP3eaNg9RFxyVs4QGl9er%2FnmtA2Qhx27nDLgYM8vfhlm%2FQugJz5%2FKVlGqLLZzXBC60XIz5Ddow7oC%2BwwY6pgGfp%2FYUbFyNElw0ukQnsJ70b08nc0tvjRRZwIDM6dHYZmv2izBsB37pAOn1ufwE4NblE049tTSUmI9%2BDBWcoZxZhc%2BJ7h1dKQhjvNFyQyFxL8VzzEZJc5G7ZsI%2BMBCkXiPzlS5E6aMMyN4aa31ecRa79HuEhGu8MrxjJeds4E%2BeGGOvk331%2BHJpCoC4BTAVyYvKSnM2QLNKxchTx652djrr%2FLyyzYOZ&X-Amz-Signature=a514dfd67b77478920945f2be3bfe47fbff95287125cc1e4bce24259ea7ac995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
