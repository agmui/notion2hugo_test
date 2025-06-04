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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJOZRL2X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIA4e1aaP1mtVhEkRf7sSiD4X7Y3uevuTSE7IGu%2FKmOMJAiAvGzOtZzbaG%2BhecvdZ7XmMLQLmhC6G%2FrzABAETDxmGjCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMv%2BKqWf836GEpumE0KtwDImqLvYZF9NT4h5CvGjxYJwJvpkw8mk4v6MdSPZxtyeAEH3KhXthQRJmrzio8m8YeM7cps%2FgKQdWQdE9LjgHMv2TTgwSz6blYWb4ejq8iRKEwMGgcPqqaoK1nES4oFuqITfQTeY62EEUobvPKe9XkYrElTuQtOyUOOE9exw%2BZ%2BCZc0PlDZLB5GsZyNaoQ%2FjxzmLei54ebnkannzagjVA0%2BYTfL3C0YxZnx0xu0naA6NrNiIu%2BLGAYdo63ktdubV0wa%2FKi0gSb4Gfa3hdQUCPjvF1w7aSPCK3rszTAR8FAx27uZtYn%2BcQkm4SrhGvQNvAiupKfBYaRwQryKVTG493etUX6e5rZxiL5rtBZ9KCkxI2w6dOK3vbnC%2FRb2iU2G2Pv8U6pHvG6HLI%2BsTzLjAIzpixYXhQ46Aak6BwAG%2BTvg99RdagzTCVMiWoBdxyJ5rer4HVyu%2Bbf2bkFMo5SnLdVXJ8FQmkZy1SDrAIoBTz07dUVBfEmi2JixkvRXs8pNIPKROSOpO%2BTXU4%2FpfnEeWwjMan6MF1otJ4sPXSxr%2FB8015sNcPvdqKFJrssYrXB3wzv5WDytRf7qFice6hgnBD5QoNbM%2FH9Kir5Nv8fGku9yRF86A6molQ9wk0lgBsw7IaCwgY6pgGpycIGJ7g%2BI7ykiNxmYmYox%2FAn6NqQtnLiBoD98R2Z90qJgduaWv3qaigNIJAsbpu701Lmz8VgMUCgX1tdVZyalQJ%2BjWHt5PWIV7JZckVxprBSwsliimR09EvA8XOW6dKFtum70zjpT055c%2F7nYlNYOL2W9PcrZGModB8363HJkXtDSbD%2F%2BGHSaya88I9FZeGVoQdfl7EUon81TrFJ%2FeFIU2X3fNSi&X-Amz-Signature=eb2c5a6066ac7f4b018426ceab737d5e1261fc6683c913da15dc0dc1649f3eac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJOZRL2X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIA4e1aaP1mtVhEkRf7sSiD4X7Y3uevuTSE7IGu%2FKmOMJAiAvGzOtZzbaG%2BhecvdZ7XmMLQLmhC6G%2FrzABAETDxmGjCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMv%2BKqWf836GEpumE0KtwDImqLvYZF9NT4h5CvGjxYJwJvpkw8mk4v6MdSPZxtyeAEH3KhXthQRJmrzio8m8YeM7cps%2FgKQdWQdE9LjgHMv2TTgwSz6blYWb4ejq8iRKEwMGgcPqqaoK1nES4oFuqITfQTeY62EEUobvPKe9XkYrElTuQtOyUOOE9exw%2BZ%2BCZc0PlDZLB5GsZyNaoQ%2FjxzmLei54ebnkannzagjVA0%2BYTfL3C0YxZnx0xu0naA6NrNiIu%2BLGAYdo63ktdubV0wa%2FKi0gSb4Gfa3hdQUCPjvF1w7aSPCK3rszTAR8FAx27uZtYn%2BcQkm4SrhGvQNvAiupKfBYaRwQryKVTG493etUX6e5rZxiL5rtBZ9KCkxI2w6dOK3vbnC%2FRb2iU2G2Pv8U6pHvG6HLI%2BsTzLjAIzpixYXhQ46Aak6BwAG%2BTvg99RdagzTCVMiWoBdxyJ5rer4HVyu%2Bbf2bkFMo5SnLdVXJ8FQmkZy1SDrAIoBTz07dUVBfEmi2JixkvRXs8pNIPKROSOpO%2BTXU4%2FpfnEeWwjMan6MF1otJ4sPXSxr%2FB8015sNcPvdqKFJrssYrXB3wzv5WDytRf7qFice6hgnBD5QoNbM%2FH9Kir5Nv8fGku9yRF86A6molQ9wk0lgBsw7IaCwgY6pgGpycIGJ7g%2BI7ykiNxmYmYox%2FAn6NqQtnLiBoD98R2Z90qJgduaWv3qaigNIJAsbpu701Lmz8VgMUCgX1tdVZyalQJ%2BjWHt5PWIV7JZckVxprBSwsliimR09EvA8XOW6dKFtum70zjpT055c%2F7nYlNYOL2W9PcrZGModB8363HJkXtDSbD%2F%2BGHSaya88I9FZeGVoQdfl7EUon81TrFJ%2FeFIU2X3fNSi&X-Amz-Signature=ef27a8efd380993f2de0e92da8663c93b742df33d9d48f05b23cd24f8eb62d94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJOZRL2X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIA4e1aaP1mtVhEkRf7sSiD4X7Y3uevuTSE7IGu%2FKmOMJAiAvGzOtZzbaG%2BhecvdZ7XmMLQLmhC6G%2FrzABAETDxmGjCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMv%2BKqWf836GEpumE0KtwDImqLvYZF9NT4h5CvGjxYJwJvpkw8mk4v6MdSPZxtyeAEH3KhXthQRJmrzio8m8YeM7cps%2FgKQdWQdE9LjgHMv2TTgwSz6blYWb4ejq8iRKEwMGgcPqqaoK1nES4oFuqITfQTeY62EEUobvPKe9XkYrElTuQtOyUOOE9exw%2BZ%2BCZc0PlDZLB5GsZyNaoQ%2FjxzmLei54ebnkannzagjVA0%2BYTfL3C0YxZnx0xu0naA6NrNiIu%2BLGAYdo63ktdubV0wa%2FKi0gSb4Gfa3hdQUCPjvF1w7aSPCK3rszTAR8FAx27uZtYn%2BcQkm4SrhGvQNvAiupKfBYaRwQryKVTG493etUX6e5rZxiL5rtBZ9KCkxI2w6dOK3vbnC%2FRb2iU2G2Pv8U6pHvG6HLI%2BsTzLjAIzpixYXhQ46Aak6BwAG%2BTvg99RdagzTCVMiWoBdxyJ5rer4HVyu%2Bbf2bkFMo5SnLdVXJ8FQmkZy1SDrAIoBTz07dUVBfEmi2JixkvRXs8pNIPKROSOpO%2BTXU4%2FpfnEeWwjMan6MF1otJ4sPXSxr%2FB8015sNcPvdqKFJrssYrXB3wzv5WDytRf7qFice6hgnBD5QoNbM%2FH9Kir5Nv8fGku9yRF86A6molQ9wk0lgBsw7IaCwgY6pgGpycIGJ7g%2BI7ykiNxmYmYox%2FAn6NqQtnLiBoD98R2Z90qJgduaWv3qaigNIJAsbpu701Lmz8VgMUCgX1tdVZyalQJ%2BjWHt5PWIV7JZckVxprBSwsliimR09EvA8XOW6dKFtum70zjpT055c%2F7nYlNYOL2W9PcrZGModB8363HJkXtDSbD%2F%2BGHSaya88I9FZeGVoQdfl7EUon81TrFJ%2FeFIU2X3fNSi&X-Amz-Signature=7f7d45b989f255ce2b471f7ed8a477419d4e0c59e93a343be9ccb34dcca448c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
