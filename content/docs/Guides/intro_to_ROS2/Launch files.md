---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUXZ4PG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGbXB5ppM6jmTyUXOgCD5OmnUhTSw6a4U7S8h5wM4lnaAiBlB%2Fnmf4YmJgZStmVIZhZ3XfHDM2gP0EkKsQmwHh2OPyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUXGAiFiZKtNrF%2F1SKtwDPm4%2Bbs1bRhw7Bc39GHCidV4Xwco%2BDOmoQURk%2Fe705uPi%2B6wlcFtiiv%2BtLBKUPZ8EuYoAc5N9It4XMK7OqHEI7ff78BX84Rxuy6L7jo5C6Gt5Db7398rRJH22CPC4pUgPZaz5%2BeYZl4V1kX4Y3S8wkf4WDD7NQPEzfIxL1arrQxYFGGLy5RGBlYSXL5hDQn7aqmtkFHx4Ti0UXNqEtQwwfrqCYbEcM23nhlLHKeqJUtMHchOPe7wfZnqMdiomqIyPIkhV%2FBL2MjWVqpYRl9e4W1cFfeOCaUj3YgCMCcVJVvdKejWYyDHJUNkQ5x%2FQSpp8jWcZIXlSNxfvadcY0h5uG7qNN1mduEi%2BnLRM1Dvmlo2TWYRhiaTBSEkM4GmiT5TtjY3A8FpDQyuSM%2FFVIgOEjOrxcCo1ILtNF9bDNChYq%2FaIcduwT6U3BdAnLxksIc9ut6dH22m9a8txm2zOkGU36jwYVjGri8nwBidco1dBU1rDlDFDMA5hyGZww%2FG6lHW%2BeSWJ1aqc22ac6EuJJA0NTwZAI0XAdxGmhjzi5U0gWiEkHFcU%2BODsJcKFvWK5NM2wpSuNQIBsuZ6BEvtRwp5PChXo6pKuVC5w6Ns978HNCUlFkN1J0y0%2BsnMvT%2Fcw8PeAxQY6pgGnNifvq06rdUI6VYdrDxemCtoJ6KDEm%2B6cuEBpiynFsMDJ0cmtgfJZUUZnTBy0PsyBuzGoNuZ%2BoorQvSQ9J7vZm7OYJXZKVysGZ7OZE8MOt6gay7BHzBYzOh29kJqyU%2BG%2FEeUqFpTq4%2BqOUpLoMGEZgY5YWCYc8A7O95DXZhfB6YFqAIUJ%2FoTn4n8H8PEPjD1jytfRUQfbxompwTZzBhxc%2Bnp9RQLZ&X-Amz-Signature=5a4013b034957e2ebc9a10fdc40da6a955b6b2e923d5003829a8146f21bd7831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUXZ4PG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGbXB5ppM6jmTyUXOgCD5OmnUhTSw6a4U7S8h5wM4lnaAiBlB%2Fnmf4YmJgZStmVIZhZ3XfHDM2gP0EkKsQmwHh2OPyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUXGAiFiZKtNrF%2F1SKtwDPm4%2Bbs1bRhw7Bc39GHCidV4Xwco%2BDOmoQURk%2Fe705uPi%2B6wlcFtiiv%2BtLBKUPZ8EuYoAc5N9It4XMK7OqHEI7ff78BX84Rxuy6L7jo5C6Gt5Db7398rRJH22CPC4pUgPZaz5%2BeYZl4V1kX4Y3S8wkf4WDD7NQPEzfIxL1arrQxYFGGLy5RGBlYSXL5hDQn7aqmtkFHx4Ti0UXNqEtQwwfrqCYbEcM23nhlLHKeqJUtMHchOPe7wfZnqMdiomqIyPIkhV%2FBL2MjWVqpYRl9e4W1cFfeOCaUj3YgCMCcVJVvdKejWYyDHJUNkQ5x%2FQSpp8jWcZIXlSNxfvadcY0h5uG7qNN1mduEi%2BnLRM1Dvmlo2TWYRhiaTBSEkM4GmiT5TtjY3A8FpDQyuSM%2FFVIgOEjOrxcCo1ILtNF9bDNChYq%2FaIcduwT6U3BdAnLxksIc9ut6dH22m9a8txm2zOkGU36jwYVjGri8nwBidco1dBU1rDlDFDMA5hyGZww%2FG6lHW%2BeSWJ1aqc22ac6EuJJA0NTwZAI0XAdxGmhjzi5U0gWiEkHFcU%2BODsJcKFvWK5NM2wpSuNQIBsuZ6BEvtRwp5PChXo6pKuVC5w6Ns978HNCUlFkN1J0y0%2BsnMvT%2Fcw8PeAxQY6pgGnNifvq06rdUI6VYdrDxemCtoJ6KDEm%2B6cuEBpiynFsMDJ0cmtgfJZUUZnTBy0PsyBuzGoNuZ%2BoorQvSQ9J7vZm7OYJXZKVysGZ7OZE8MOt6gay7BHzBYzOh29kJqyU%2BG%2FEeUqFpTq4%2BqOUpLoMGEZgY5YWCYc8A7O95DXZhfB6YFqAIUJ%2FoTn4n8H8PEPjD1jytfRUQfbxompwTZzBhxc%2Bnp9RQLZ&X-Amz-Signature=77efae49ca3b767e5425bb8af74b5c773372f3143ee393243a13da77f938ab76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUXZ4PG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGbXB5ppM6jmTyUXOgCD5OmnUhTSw6a4U7S8h5wM4lnaAiBlB%2Fnmf4YmJgZStmVIZhZ3XfHDM2gP0EkKsQmwHh2OPyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUXGAiFiZKtNrF%2F1SKtwDPm4%2Bbs1bRhw7Bc39GHCidV4Xwco%2BDOmoQURk%2Fe705uPi%2B6wlcFtiiv%2BtLBKUPZ8EuYoAc5N9It4XMK7OqHEI7ff78BX84Rxuy6L7jo5C6Gt5Db7398rRJH22CPC4pUgPZaz5%2BeYZl4V1kX4Y3S8wkf4WDD7NQPEzfIxL1arrQxYFGGLy5RGBlYSXL5hDQn7aqmtkFHx4Ti0UXNqEtQwwfrqCYbEcM23nhlLHKeqJUtMHchOPe7wfZnqMdiomqIyPIkhV%2FBL2MjWVqpYRl9e4W1cFfeOCaUj3YgCMCcVJVvdKejWYyDHJUNkQ5x%2FQSpp8jWcZIXlSNxfvadcY0h5uG7qNN1mduEi%2BnLRM1Dvmlo2TWYRhiaTBSEkM4GmiT5TtjY3A8FpDQyuSM%2FFVIgOEjOrxcCo1ILtNF9bDNChYq%2FaIcduwT6U3BdAnLxksIc9ut6dH22m9a8txm2zOkGU36jwYVjGri8nwBidco1dBU1rDlDFDMA5hyGZww%2FG6lHW%2BeSWJ1aqc22ac6EuJJA0NTwZAI0XAdxGmhjzi5U0gWiEkHFcU%2BODsJcKFvWK5NM2wpSuNQIBsuZ6BEvtRwp5PChXo6pKuVC5w6Ns978HNCUlFkN1J0y0%2BsnMvT%2Fcw8PeAxQY6pgGnNifvq06rdUI6VYdrDxemCtoJ6KDEm%2B6cuEBpiynFsMDJ0cmtgfJZUUZnTBy0PsyBuzGoNuZ%2BoorQvSQ9J7vZm7OYJXZKVysGZ7OZE8MOt6gay7BHzBYzOh29kJqyU%2BG%2FEeUqFpTq4%2BqOUpLoMGEZgY5YWCYc8A7O95DXZhfB6YFqAIUJ%2FoTn4n8H8PEPjD1jytfRUQfbxompwTZzBhxc%2Bnp9RQLZ&X-Amz-Signature=86f5f27d7f2d1c38a22db70b39ace0359f37f0e56374df2bc89739cb12cd0d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
