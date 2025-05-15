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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAGAEOW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCS0ZVAs23Dk9WV9icJ4MeHbErP3k7HyFqJOC9S0KJ0agIhAPyLdBQsG5IjRoJ09nNtTsrUd6wxsJ6Y3wDsmVLIu9QgKv8DCCMQABoMNjM3NDIzMTgzODA1IgyHmwGGN118KS4BhsIq3AMtmedW5t%2F1SGU5Xyd2CU5kpB2YvCyOtKwvOIrfIf9nSCX5UjKAV5KhsmAj8aEjiHOYC2GhkK25ugDktBMC0uc6WPciX5r8y5e3EvlFeKSiHcDeainWhOe7FXCNAVZFxNkvMQg061d7l8EIeolTGV9WTovTPEPQPrEvyd3HdwQM72JOq8aySDsNjReBeObOUinTn%2BJgIEfuigJkhVltjO3QYIMFE8617jF%2Bt4NwUmEbXLs%2FxNQpx1Y0aEiEcOgMB6EcIHrUh%2BY51Kk9DDyAqzQvI9%2BIx2fn%2BQonpt%2FPHq14IuRzJe5H2cXUvn59T8IY23bgpbGbbl0nddCDPWQ%2BH3U%2FS7EFWlkcGhOOy6kgpZy1dFimd2mADBLIOB1RxH7LL0iJ%2FHFmQnVQg8dZGcEYdFm0jZhq%2B1JnyEPMDHMigkCbOq16QqOviKU%2FQKGH%2F43OGKEkenaRbF1GSqpmWsQ1XpRFCd%2FAZQwvdWhXFOKtbYwHnlcSBFZJ3vpvk3HwGjrhAFbSX9d%2FdCtwT8HCJXc7i%2FIID5X1cSzGeaVJF0GdH3KNpLXIBnlev20%2B6%2BK6aCq%2BSvhOJMo%2FwpWCKXxn%2FnSTbHH55KeYl7Hz%2Boehc0y6ROz2WQzyw8ZRHHSO0Ogs7zDOnZXBBjqkATld5PF9r%2F1cVrOa4%2BBtCiM9woPih4wrxrvZ0AbLtSmw%2FcPZLD9wzP9mu8E2QSaGnOD%2BxvoRhyEMHFTzTNuHcsiBjeGNAn%2BBPG3iUYb3aUM6Rufm67nYdXYgnf7w%2FTracH9sy%2B5jyud9m53URq9IcEw0uIrXwDt6AUD%2Bn5JcHs8vkNmVyttPvjhRoxcWc7XQv7ZgdmpTNsD5Av4nTR0BhR55PdEW&X-Amz-Signature=8515f78a16b1a5a3833ab47e14c3cc729db84c4548e04c8d038ce458889773f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAGAEOW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCS0ZVAs23Dk9WV9icJ4MeHbErP3k7HyFqJOC9S0KJ0agIhAPyLdBQsG5IjRoJ09nNtTsrUd6wxsJ6Y3wDsmVLIu9QgKv8DCCMQABoMNjM3NDIzMTgzODA1IgyHmwGGN118KS4BhsIq3AMtmedW5t%2F1SGU5Xyd2CU5kpB2YvCyOtKwvOIrfIf9nSCX5UjKAV5KhsmAj8aEjiHOYC2GhkK25ugDktBMC0uc6WPciX5r8y5e3EvlFeKSiHcDeainWhOe7FXCNAVZFxNkvMQg061d7l8EIeolTGV9WTovTPEPQPrEvyd3HdwQM72JOq8aySDsNjReBeObOUinTn%2BJgIEfuigJkhVltjO3QYIMFE8617jF%2Bt4NwUmEbXLs%2FxNQpx1Y0aEiEcOgMB6EcIHrUh%2BY51Kk9DDyAqzQvI9%2BIx2fn%2BQonpt%2FPHq14IuRzJe5H2cXUvn59T8IY23bgpbGbbl0nddCDPWQ%2BH3U%2FS7EFWlkcGhOOy6kgpZy1dFimd2mADBLIOB1RxH7LL0iJ%2FHFmQnVQg8dZGcEYdFm0jZhq%2B1JnyEPMDHMigkCbOq16QqOviKU%2FQKGH%2F43OGKEkenaRbF1GSqpmWsQ1XpRFCd%2FAZQwvdWhXFOKtbYwHnlcSBFZJ3vpvk3HwGjrhAFbSX9d%2FdCtwT8HCJXc7i%2FIID5X1cSzGeaVJF0GdH3KNpLXIBnlev20%2B6%2BK6aCq%2BSvhOJMo%2FwpWCKXxn%2FnSTbHH55KeYl7Hz%2Boehc0y6ROz2WQzyw8ZRHHSO0Ogs7zDOnZXBBjqkATld5PF9r%2F1cVrOa4%2BBtCiM9woPih4wrxrvZ0AbLtSmw%2FcPZLD9wzP9mu8E2QSaGnOD%2BxvoRhyEMHFTzTNuHcsiBjeGNAn%2BBPG3iUYb3aUM6Rufm67nYdXYgnf7w%2FTracH9sy%2B5jyud9m53URq9IcEw0uIrXwDt6AUD%2Bn5JcHs8vkNmVyttPvjhRoxcWc7XQv7ZgdmpTNsD5Av4nTR0BhR55PdEW&X-Amz-Signature=d116f2588d908b736fa624755880cf36f156eaabd5c30576c2f6c16117b8d0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAGAEOW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCS0ZVAs23Dk9WV9icJ4MeHbErP3k7HyFqJOC9S0KJ0agIhAPyLdBQsG5IjRoJ09nNtTsrUd6wxsJ6Y3wDsmVLIu9QgKv8DCCMQABoMNjM3NDIzMTgzODA1IgyHmwGGN118KS4BhsIq3AMtmedW5t%2F1SGU5Xyd2CU5kpB2YvCyOtKwvOIrfIf9nSCX5UjKAV5KhsmAj8aEjiHOYC2GhkK25ugDktBMC0uc6WPciX5r8y5e3EvlFeKSiHcDeainWhOe7FXCNAVZFxNkvMQg061d7l8EIeolTGV9WTovTPEPQPrEvyd3HdwQM72JOq8aySDsNjReBeObOUinTn%2BJgIEfuigJkhVltjO3QYIMFE8617jF%2Bt4NwUmEbXLs%2FxNQpx1Y0aEiEcOgMB6EcIHrUh%2BY51Kk9DDyAqzQvI9%2BIx2fn%2BQonpt%2FPHq14IuRzJe5H2cXUvn59T8IY23bgpbGbbl0nddCDPWQ%2BH3U%2FS7EFWlkcGhOOy6kgpZy1dFimd2mADBLIOB1RxH7LL0iJ%2FHFmQnVQg8dZGcEYdFm0jZhq%2B1JnyEPMDHMigkCbOq16QqOviKU%2FQKGH%2F43OGKEkenaRbF1GSqpmWsQ1XpRFCd%2FAZQwvdWhXFOKtbYwHnlcSBFZJ3vpvk3HwGjrhAFbSX9d%2FdCtwT8HCJXc7i%2FIID5X1cSzGeaVJF0GdH3KNpLXIBnlev20%2B6%2BK6aCq%2BSvhOJMo%2FwpWCKXxn%2FnSTbHH55KeYl7Hz%2Boehc0y6ROz2WQzyw8ZRHHSO0Ogs7zDOnZXBBjqkATld5PF9r%2F1cVrOa4%2BBtCiM9woPih4wrxrvZ0AbLtSmw%2FcPZLD9wzP9mu8E2QSaGnOD%2BxvoRhyEMHFTzTNuHcsiBjeGNAn%2BBPG3iUYb3aUM6Rufm67nYdXYgnf7w%2FTracH9sy%2B5jyud9m53URq9IcEw0uIrXwDt6AUD%2Bn5JcHs8vkNmVyttPvjhRoxcWc7XQv7ZgdmpTNsD5Av4nTR0BhR55PdEW&X-Amz-Signature=f97559db805953dc9abc9d9c529314b289a71cffa1f0945df6e3caedcaf06fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
