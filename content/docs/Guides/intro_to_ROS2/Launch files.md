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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU56SLIG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVOnu4yg5UYblMdkb7dUzexgc03UhA5gp6xXJSlH3vXAIgPBWFbg%2BWZqNiJecNtToh0jRdr%2BhHSUI673rNss7lyrkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG8rAIcU5kYZtm9axCrcA6UGqnNA4kfJsgdsaXajtGq3yFU%2FhsuLny5c8X62L9fQpmF%2FOaQmiNze74zzsibGlp4NSFjvmYhb7n0p2wIIcGvL9tBCxg3mzvKNC5lBg%2Fi6hrEHcSCs2sXO10zvriE%2Bu82XknuW1Z7f1T8MWaxHTNwZYrnczbnQOqerSVIquqcKpBkemars6eZA4Vbq1HB%2BG6bJhM%2B2LyivOtbx1P2ddZbLT8WjCvJU34oRIX%2FCGG8cL%2F7K8x53Rm9dHbMILlO4ncsvHaIroHKYgKchic2LVYCYOxZGqt3X8CuaLWk2ah5%2F4Yl2euYm2TgMwzvAjDcb3xT3YnV54NBPnHFp3Ee6%2B8I%2Bfif%2Fc65qeiMP0hlVwx2m0iTTq5iSxm7WnNLf69Bgr9%2FZif1%2FBCw0wVftfO04CRpL8Nt3Ep0bwCYCJL4VTYLR%2Fzn8sYy8GExMT4yzLCl6wFt7Ix04ZPySN2EYxk0QZhrPPn5cO6Uqb8YTwvyDmYJ35Hwl8vUI8Cp8DEzPVEqeYXDi41YxO9Fu%2BouGDJrwqx5oiX0WCH%2BjEp3oU9Qklk3I6vlACocm3gAZv%2BJk9HAiM%2BLdPaO9NpMZ9iISLHATn%2F%2BY8Rr4zddaMIvwrjwXMjOIwTIrN92%2FGU35LKuHMKiW6sAGOqUBkkbQdCS%2BDrlb7KMgwGL%2F%2FPUeaQei5jobpX66tLTv%2BYahLNCuGE5HbED0ONgCGk3KfAP06zeHKlX4YkUWDhEgZ51rw0FklLE3ol9AfnAZIcx56%2F8IdlSsSQjyiwZR3XMyBJhFIBbg%2B7Y9tGL5bq6PEVyGENn%2F3tplRmRhohJly29AvkjDqo3oOfB5BCVNSsN6snVYsZXhcqXBdNQ1Rw%2BekpTPO%2B8W&X-Amz-Signature=ef6dbaf699473c96b8a2f233f1fb1760a1cad00e333e3ca1c297a3a0d636fb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU56SLIG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVOnu4yg5UYblMdkb7dUzexgc03UhA5gp6xXJSlH3vXAIgPBWFbg%2BWZqNiJecNtToh0jRdr%2BhHSUI673rNss7lyrkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG8rAIcU5kYZtm9axCrcA6UGqnNA4kfJsgdsaXajtGq3yFU%2FhsuLny5c8X62L9fQpmF%2FOaQmiNze74zzsibGlp4NSFjvmYhb7n0p2wIIcGvL9tBCxg3mzvKNC5lBg%2Fi6hrEHcSCs2sXO10zvriE%2Bu82XknuW1Z7f1T8MWaxHTNwZYrnczbnQOqerSVIquqcKpBkemars6eZA4Vbq1HB%2BG6bJhM%2B2LyivOtbx1P2ddZbLT8WjCvJU34oRIX%2FCGG8cL%2F7K8x53Rm9dHbMILlO4ncsvHaIroHKYgKchic2LVYCYOxZGqt3X8CuaLWk2ah5%2F4Yl2euYm2TgMwzvAjDcb3xT3YnV54NBPnHFp3Ee6%2B8I%2Bfif%2Fc65qeiMP0hlVwx2m0iTTq5iSxm7WnNLf69Bgr9%2FZif1%2FBCw0wVftfO04CRpL8Nt3Ep0bwCYCJL4VTYLR%2Fzn8sYy8GExMT4yzLCl6wFt7Ix04ZPySN2EYxk0QZhrPPn5cO6Uqb8YTwvyDmYJ35Hwl8vUI8Cp8DEzPVEqeYXDi41YxO9Fu%2BouGDJrwqx5oiX0WCH%2BjEp3oU9Qklk3I6vlACocm3gAZv%2BJk9HAiM%2BLdPaO9NpMZ9iISLHATn%2F%2BY8Rr4zddaMIvwrjwXMjOIwTIrN92%2FGU35LKuHMKiW6sAGOqUBkkbQdCS%2BDrlb7KMgwGL%2F%2FPUeaQei5jobpX66tLTv%2BYahLNCuGE5HbED0ONgCGk3KfAP06zeHKlX4YkUWDhEgZ51rw0FklLE3ol9AfnAZIcx56%2F8IdlSsSQjyiwZR3XMyBJhFIBbg%2B7Y9tGL5bq6PEVyGENn%2F3tplRmRhohJly29AvkjDqo3oOfB5BCVNSsN6snVYsZXhcqXBdNQ1Rw%2BekpTPO%2B8W&X-Amz-Signature=9e164b776ae3cf3c4fa3b5f55443361a9b5d39a076301e3389f8b1e0d19de526&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU56SLIG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVOnu4yg5UYblMdkb7dUzexgc03UhA5gp6xXJSlH3vXAIgPBWFbg%2BWZqNiJecNtToh0jRdr%2BhHSUI673rNss7lyrkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG8rAIcU5kYZtm9axCrcA6UGqnNA4kfJsgdsaXajtGq3yFU%2FhsuLny5c8X62L9fQpmF%2FOaQmiNze74zzsibGlp4NSFjvmYhb7n0p2wIIcGvL9tBCxg3mzvKNC5lBg%2Fi6hrEHcSCs2sXO10zvriE%2Bu82XknuW1Z7f1T8MWaxHTNwZYrnczbnQOqerSVIquqcKpBkemars6eZA4Vbq1HB%2BG6bJhM%2B2LyivOtbx1P2ddZbLT8WjCvJU34oRIX%2FCGG8cL%2F7K8x53Rm9dHbMILlO4ncsvHaIroHKYgKchic2LVYCYOxZGqt3X8CuaLWk2ah5%2F4Yl2euYm2TgMwzvAjDcb3xT3YnV54NBPnHFp3Ee6%2B8I%2Bfif%2Fc65qeiMP0hlVwx2m0iTTq5iSxm7WnNLf69Bgr9%2FZif1%2FBCw0wVftfO04CRpL8Nt3Ep0bwCYCJL4VTYLR%2Fzn8sYy8GExMT4yzLCl6wFt7Ix04ZPySN2EYxk0QZhrPPn5cO6Uqb8YTwvyDmYJ35Hwl8vUI8Cp8DEzPVEqeYXDi41YxO9Fu%2BouGDJrwqx5oiX0WCH%2BjEp3oU9Qklk3I6vlACocm3gAZv%2BJk9HAiM%2BLdPaO9NpMZ9iISLHATn%2F%2BY8Rr4zddaMIvwrjwXMjOIwTIrN92%2FGU35LKuHMKiW6sAGOqUBkkbQdCS%2BDrlb7KMgwGL%2F%2FPUeaQei5jobpX66tLTv%2BYahLNCuGE5HbED0ONgCGk3KfAP06zeHKlX4YkUWDhEgZ51rw0FklLE3ol9AfnAZIcx56%2F8IdlSsSQjyiwZR3XMyBJhFIBbg%2B7Y9tGL5bq6PEVyGENn%2F3tplRmRhohJly29AvkjDqo3oOfB5BCVNSsN6snVYsZXhcqXBdNQ1Rw%2BekpTPO%2B8W&X-Amz-Signature=d3e554c9fe1a85c0822c1bf4d98a253bb1435d83d7620f30a5b2d049a8821f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
