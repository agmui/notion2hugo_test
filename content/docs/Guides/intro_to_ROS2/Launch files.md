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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIP7EUK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN03HczxqFo%2Fs3m%2F3tkT%2B6AuY%2FRIVsC%2BpzM7QDjL60AIgAs0qg7WHLswPtqyjo18Dy2aWTpdNSKF6SBN1Ej4qjDMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FcabEY8GfpLK%2BKlircAzBxWa2tZCrpNQtabeiVpHHQWE7uiZw47%2FzjwIET%2F9hrPZ4GT%2FrsOhXuIN1mR1R6PTeOYYkZXkqYpMJD3X%2BYtnTWVEB6QQEU8IR7uIGotkpOrQEQpGaiGv%2B8dSg7vUGD6hwLQyU9QqrHbJZJuZCfIbvxXHFeYo0KGF08LEu%2FDtkHfEabEsB1pGh1FVs9fDDu%2B8HdsSzJxt5MpeyLMznmNBzSYqw6%2BxsKtm%2FEvcec3a1XZ1OO7Ojt8WaW9vU4drk997A4YiVlTqjc2BB4bQ0%2FaIsJN7TIrVDcKODStdJCPuLx4r3XLLACgMEVi4Y6SLYvaZ%2FwOFpJl6tnMHEjE1cib%2Bmz3CXqARnyFo0mdAvVqevlmwksHUovfitkpBYloN8VhfgYch%2F4ggYHTViR0h02vnp6fYk1zbEcD2j7TJCiCrdWItATk%2F47hKj4xEQ3xOnD2tMnu%2FsaMOcYW0rxPBcwDjMlPzisrIXkLgrwlFnvkfqZ%2FRK9e1QJ%2Bm9fnJf4pXqZhpfasGosCp1zRVcxjRrE3gWXtKzGq%2BnDOS3IHtyZwCgGK%2FhgmwpYd03tELS0005zSZv0Kob%2B%2FFTw%2FMNx%2FQYhJViZu%2BVtbplDRKl12zQw0k%2BUN46n640Zy8EixpsPMMur77wGOqUBpGTCk%2FQPQfV%2BUzEiiO5y%2F5o7V3UZaLNWnaqckRtp8eZi8PYYUUvkBR0w8mxm42Gw0HtaWzJ4LGRmbQ19s4B6evNUvL5ITfmbbVVD5LlAP9rfaw4hOh2FXez4aA8GtUFUILkYzJ7ajSI8sFFICWPvXMNfO5XZxyWyYtBGDD3oW16g3No%2FcrvkVzrt2PdGMZn%2B%2Btd3JHfNcqp0xOR64qWANpIGuKyd&X-Amz-Signature=545ac34378799637f18f7f5c615dfde6bbf60d488e3bcf6b39074e68ca355de7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIP7EUK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN03HczxqFo%2Fs3m%2F3tkT%2B6AuY%2FRIVsC%2BpzM7QDjL60AIgAs0qg7WHLswPtqyjo18Dy2aWTpdNSKF6SBN1Ej4qjDMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FcabEY8GfpLK%2BKlircAzBxWa2tZCrpNQtabeiVpHHQWE7uiZw47%2FzjwIET%2F9hrPZ4GT%2FrsOhXuIN1mR1R6PTeOYYkZXkqYpMJD3X%2BYtnTWVEB6QQEU8IR7uIGotkpOrQEQpGaiGv%2B8dSg7vUGD6hwLQyU9QqrHbJZJuZCfIbvxXHFeYo0KGF08LEu%2FDtkHfEabEsB1pGh1FVs9fDDu%2B8HdsSzJxt5MpeyLMznmNBzSYqw6%2BxsKtm%2FEvcec3a1XZ1OO7Ojt8WaW9vU4drk997A4YiVlTqjc2BB4bQ0%2FaIsJN7TIrVDcKODStdJCPuLx4r3XLLACgMEVi4Y6SLYvaZ%2FwOFpJl6tnMHEjE1cib%2Bmz3CXqARnyFo0mdAvVqevlmwksHUovfitkpBYloN8VhfgYch%2F4ggYHTViR0h02vnp6fYk1zbEcD2j7TJCiCrdWItATk%2F47hKj4xEQ3xOnD2tMnu%2FsaMOcYW0rxPBcwDjMlPzisrIXkLgrwlFnvkfqZ%2FRK9e1QJ%2Bm9fnJf4pXqZhpfasGosCp1zRVcxjRrE3gWXtKzGq%2BnDOS3IHtyZwCgGK%2FhgmwpYd03tELS0005zSZv0Kob%2B%2FFTw%2FMNx%2FQYhJViZu%2BVtbplDRKl12zQw0k%2BUN46n640Zy8EixpsPMMur77wGOqUBpGTCk%2FQPQfV%2BUzEiiO5y%2F5o7V3UZaLNWnaqckRtp8eZi8PYYUUvkBR0w8mxm42Gw0HtaWzJ4LGRmbQ19s4B6evNUvL5ITfmbbVVD5LlAP9rfaw4hOh2FXez4aA8GtUFUILkYzJ7ajSI8sFFICWPvXMNfO5XZxyWyYtBGDD3oW16g3No%2FcrvkVzrt2PdGMZn%2B%2Btd3JHfNcqp0xOR64qWANpIGuKyd&X-Amz-Signature=4d7c653647bf14cd0d6e4138e39e834b3e9f178b8381d5479131a4006dd7f5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIP7EUK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN03HczxqFo%2Fs3m%2F3tkT%2B6AuY%2FRIVsC%2BpzM7QDjL60AIgAs0qg7WHLswPtqyjo18Dy2aWTpdNSKF6SBN1Ej4qjDMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FcabEY8GfpLK%2BKlircAzBxWa2tZCrpNQtabeiVpHHQWE7uiZw47%2FzjwIET%2F9hrPZ4GT%2FrsOhXuIN1mR1R6PTeOYYkZXkqYpMJD3X%2BYtnTWVEB6QQEU8IR7uIGotkpOrQEQpGaiGv%2B8dSg7vUGD6hwLQyU9QqrHbJZJuZCfIbvxXHFeYo0KGF08LEu%2FDtkHfEabEsB1pGh1FVs9fDDu%2B8HdsSzJxt5MpeyLMznmNBzSYqw6%2BxsKtm%2FEvcec3a1XZ1OO7Ojt8WaW9vU4drk997A4YiVlTqjc2BB4bQ0%2FaIsJN7TIrVDcKODStdJCPuLx4r3XLLACgMEVi4Y6SLYvaZ%2FwOFpJl6tnMHEjE1cib%2Bmz3CXqARnyFo0mdAvVqevlmwksHUovfitkpBYloN8VhfgYch%2F4ggYHTViR0h02vnp6fYk1zbEcD2j7TJCiCrdWItATk%2F47hKj4xEQ3xOnD2tMnu%2FsaMOcYW0rxPBcwDjMlPzisrIXkLgrwlFnvkfqZ%2FRK9e1QJ%2Bm9fnJf4pXqZhpfasGosCp1zRVcxjRrE3gWXtKzGq%2BnDOS3IHtyZwCgGK%2FhgmwpYd03tELS0005zSZv0Kob%2B%2FFTw%2FMNx%2FQYhJViZu%2BVtbplDRKl12zQw0k%2BUN46n640Zy8EixpsPMMur77wGOqUBpGTCk%2FQPQfV%2BUzEiiO5y%2F5o7V3UZaLNWnaqckRtp8eZi8PYYUUvkBR0w8mxm42Gw0HtaWzJ4LGRmbQ19s4B6evNUvL5ITfmbbVVD5LlAP9rfaw4hOh2FXez4aA8GtUFUILkYzJ7ajSI8sFFICWPvXMNfO5XZxyWyYtBGDD3oW16g3No%2FcrvkVzrt2PdGMZn%2B%2Btd3JHfNcqp0xOR64qWANpIGuKyd&X-Amz-Signature=5e6bc2522f05e359d605d673dfbd8a8f1f38bad64894b7d551cb1089840b7b39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
