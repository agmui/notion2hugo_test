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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCYSPZ4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd0%2Fr8oBBwMzxmcXmCrXHcd33dYcB%2FyvjbO%2F6Xgb%2FulAiBLXCuLhtobJ1n7ubi%2FFYd6GAQtym1AMtPwTBDETsRynyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMOj3KKSSw7iWm%2BUrOKtwDoSTD3jefgaOI9%2FwAxPpt0xOtoAB35NRMTkrx3jSg9RImD1kxBC2YBDOsCnuyo8Deva4wrLgj6haO%2BTbKfrPaO0RYY6ielMAZawWyeoNCX0Rym7IkQvwYOKXlOSuFxLR7AvMH83xyv4Z74E4VoElGpsF4%2FtQ%2B5mysP86QaqpItQ4IMBBUhfztd1O43K9BYIO%2F15MLxjP%2FpwdIZLbZcAuRKaCFD96PLIHMRXdFiigt%2FqBe8PghjJEmmz8%2F3QmmW9mhfHI4BvldjWNXjzgCTSOklKzLk7sSAF%2BWfwn0T65%2B5%2BIpeeCLZ5s%2FYg%2BeaQAgitxkirybw6RbKsjSQe%2FnJkHywuwsrEBUp5gkUU67nfvNLxyZW%2BYcsS7%2BktzFpy6Tc0BsnJZ35IP1IEZey9TRTKEPuLDLyER0iabuGO%2FYYE%2FdNxv8Y%2BUCBigUKlFra9gqdQONW5yH1ZQzQXP3gwMR2iSKEvCeRqzsmfQ4SoT3r767SMr1uTduw9Tfsbbgk%2BCaZhV3MVf6MXqQbNMN71kTStDEvVkP7Zzb4DNxz7NZ8x663sNXdtm6RgUKu4f2uT%2B4yumwGlILMwagBzTNQg3YFlCYKKyJ8SFPUq%2B8ZHpdNVjcE9dI9nm%2F8n%2BaAF45XZ0wnuTXwQY6pgEo%2FZHtiupAm9JJK%2BL5p8uZzR%2F3ng3Vf1GRuIeLfG%2B35N%2F2WQpdcbmGnV2EE7cYhjJaE0CogcZKavul5RXeE6kWKOpSUt40D8pdqBv7pstvbQSIuxH1j7jDYujtOfHZOuB%2B5DDwqgOrVG5hu5of50gpKFR9Y50UcjqO8%2Fr5gLcYHiWp3fm7ZJRnMz0srbQokmRY4qH1U%2BV7ge%2FKrIkXrhTL3utquXJq&X-Amz-Signature=210d775083619b49c7251b1b341d3a9ecd3d5a67189745ab37abed9d90c81729&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCYSPZ4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd0%2Fr8oBBwMzxmcXmCrXHcd33dYcB%2FyvjbO%2F6Xgb%2FulAiBLXCuLhtobJ1n7ubi%2FFYd6GAQtym1AMtPwTBDETsRynyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMOj3KKSSw7iWm%2BUrOKtwDoSTD3jefgaOI9%2FwAxPpt0xOtoAB35NRMTkrx3jSg9RImD1kxBC2YBDOsCnuyo8Deva4wrLgj6haO%2BTbKfrPaO0RYY6ielMAZawWyeoNCX0Rym7IkQvwYOKXlOSuFxLR7AvMH83xyv4Z74E4VoElGpsF4%2FtQ%2B5mysP86QaqpItQ4IMBBUhfztd1O43K9BYIO%2F15MLxjP%2FpwdIZLbZcAuRKaCFD96PLIHMRXdFiigt%2FqBe8PghjJEmmz8%2F3QmmW9mhfHI4BvldjWNXjzgCTSOklKzLk7sSAF%2BWfwn0T65%2B5%2BIpeeCLZ5s%2FYg%2BeaQAgitxkirybw6RbKsjSQe%2FnJkHywuwsrEBUp5gkUU67nfvNLxyZW%2BYcsS7%2BktzFpy6Tc0BsnJZ35IP1IEZey9TRTKEPuLDLyER0iabuGO%2FYYE%2FdNxv8Y%2BUCBigUKlFra9gqdQONW5yH1ZQzQXP3gwMR2iSKEvCeRqzsmfQ4SoT3r767SMr1uTduw9Tfsbbgk%2BCaZhV3MVf6MXqQbNMN71kTStDEvVkP7Zzb4DNxz7NZ8x663sNXdtm6RgUKu4f2uT%2B4yumwGlILMwagBzTNQg3YFlCYKKyJ8SFPUq%2B8ZHpdNVjcE9dI9nm%2F8n%2BaAF45XZ0wnuTXwQY6pgEo%2FZHtiupAm9JJK%2BL5p8uZzR%2F3ng3Vf1GRuIeLfG%2B35N%2F2WQpdcbmGnV2EE7cYhjJaE0CogcZKavul5RXeE6kWKOpSUt40D8pdqBv7pstvbQSIuxH1j7jDYujtOfHZOuB%2B5DDwqgOrVG5hu5of50gpKFR9Y50UcjqO8%2Fr5gLcYHiWp3fm7ZJRnMz0srbQokmRY4qH1U%2BV7ge%2FKrIkXrhTL3utquXJq&X-Amz-Signature=60f4ddca1a104d14b483ab9c2974f8e51619f8b481dd0123bc664fa2e9ea1b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCYSPZ4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd0%2Fr8oBBwMzxmcXmCrXHcd33dYcB%2FyvjbO%2F6Xgb%2FulAiBLXCuLhtobJ1n7ubi%2FFYd6GAQtym1AMtPwTBDETsRynyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMOj3KKSSw7iWm%2BUrOKtwDoSTD3jefgaOI9%2FwAxPpt0xOtoAB35NRMTkrx3jSg9RImD1kxBC2YBDOsCnuyo8Deva4wrLgj6haO%2BTbKfrPaO0RYY6ielMAZawWyeoNCX0Rym7IkQvwYOKXlOSuFxLR7AvMH83xyv4Z74E4VoElGpsF4%2FtQ%2B5mysP86QaqpItQ4IMBBUhfztd1O43K9BYIO%2F15MLxjP%2FpwdIZLbZcAuRKaCFD96PLIHMRXdFiigt%2FqBe8PghjJEmmz8%2F3QmmW9mhfHI4BvldjWNXjzgCTSOklKzLk7sSAF%2BWfwn0T65%2B5%2BIpeeCLZ5s%2FYg%2BeaQAgitxkirybw6RbKsjSQe%2FnJkHywuwsrEBUp5gkUU67nfvNLxyZW%2BYcsS7%2BktzFpy6Tc0BsnJZ35IP1IEZey9TRTKEPuLDLyER0iabuGO%2FYYE%2FdNxv8Y%2BUCBigUKlFra9gqdQONW5yH1ZQzQXP3gwMR2iSKEvCeRqzsmfQ4SoT3r767SMr1uTduw9Tfsbbgk%2BCaZhV3MVf6MXqQbNMN71kTStDEvVkP7Zzb4DNxz7NZ8x663sNXdtm6RgUKu4f2uT%2B4yumwGlILMwagBzTNQg3YFlCYKKyJ8SFPUq%2B8ZHpdNVjcE9dI9nm%2F8n%2BaAF45XZ0wnuTXwQY6pgEo%2FZHtiupAm9JJK%2BL5p8uZzR%2F3ng3Vf1GRuIeLfG%2B35N%2F2WQpdcbmGnV2EE7cYhjJaE0CogcZKavul5RXeE6kWKOpSUt40D8pdqBv7pstvbQSIuxH1j7jDYujtOfHZOuB%2B5DDwqgOrVG5hu5of50gpKFR9Y50UcjqO8%2Fr5gLcYHiWp3fm7ZJRnMz0srbQokmRY4qH1U%2BV7ge%2FKrIkXrhTL3utquXJq&X-Amz-Signature=4d339b00baa39356146a033771f62efd3784f2ef7354200d796e09e05a3dbf82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
