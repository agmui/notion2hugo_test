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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVACBCP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGnoVbfQrprmAeO5BBhKg7CQzMhPoFMJUre8ftUr%2BTwAiEAkqgRvIGl1%2BrKvzo3AYC7ThF8ZC8T0%2BLjl2W8bgyeb7kqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTMHGwIEh2bj2kkTCrcAxjwHvrRikSZ3p5mjKm1tQNcgLwBhqYuBIBUKvhJm4Df68iQjYZBLH%2FbZDUXx38dUqs3LuIHPPOGsg5VU%2FCmk0V36Yyoq2pk3gWi%2FVkDpa6cxxWz1YaGcI22zDWheFe%2BciFl5KPSkXujN2LTUFb9Eh467jbzbeVrCGqgGQbnBkP8YsnZxANDV6fN6FJHg5xCr1MER0yxDbBCVWutZSZDc9VfocqzoszYL%2FrZuZ0Wnv3pR10%2BgOrLkVOT3R7NuAqRS9icjJNXfFIuoDSekd0i2ymspD%2BHwfBWbFIPmHZ5MLhnVcO8lOsRayr%2FnJl%2F2qPJXoa3PvYcWLwIIgCfxR5%2FNwni6K3ZzuxUT9%2Fn7rVcOmHpZoFNYF68gUu7YWBDJeUw86k%2FoJEwN28X551pP9lAUtkZ%2F7OE4vw4BdUVbwAqZw4LIz7NXd0P%2BTcDbqpEFpKQgz3NRYltBOOqw5OBA0bESwXrjq%2BtyAALXr3YjgpqodOmi5XwlmTrLhZBDiSE8ctRtxn8KPMqlPpWRbSB%2BWJQEc4k5EX2ia3jVORNirVaYPjZXpEOuoRJIEJmm9Hf3%2B%2BIl2VbjMfxjumX9i9gg%2F5S2FfIk3wjhCgH7sM1ml7ceXB7ZmzctuBHhwBB05zgMLymlcIGOqUBFm8y0XqGaKzohgSzD%2Fh%2FuWJ68%2FY9XIFZ6ZcGMfU4OHdbKJnqP7Mz2IhUuTm%2FLN8vgKz%2BW7tQeG4gvNprN9aTg9dcxW7giZHJx26lnPoqJtdd510PUZx%2FXy69Hcy6F6OT71ISlH5MAKkGydW058CgIMwDgirXw9DXp0sffN0wBiNC0YmUaYEl8FcpBydtWFlvdx%2FI6cKh1sFJmzddUmOiaSHb4icL&X-Amz-Signature=0fe25e91746a9912f13f3bc7e7dbd06189043bbb6429d11a9cf30384ff897adc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVACBCP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGnoVbfQrprmAeO5BBhKg7CQzMhPoFMJUre8ftUr%2BTwAiEAkqgRvIGl1%2BrKvzo3AYC7ThF8ZC8T0%2BLjl2W8bgyeb7kqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTMHGwIEh2bj2kkTCrcAxjwHvrRikSZ3p5mjKm1tQNcgLwBhqYuBIBUKvhJm4Df68iQjYZBLH%2FbZDUXx38dUqs3LuIHPPOGsg5VU%2FCmk0V36Yyoq2pk3gWi%2FVkDpa6cxxWz1YaGcI22zDWheFe%2BciFl5KPSkXujN2LTUFb9Eh467jbzbeVrCGqgGQbnBkP8YsnZxANDV6fN6FJHg5xCr1MER0yxDbBCVWutZSZDc9VfocqzoszYL%2FrZuZ0Wnv3pR10%2BgOrLkVOT3R7NuAqRS9icjJNXfFIuoDSekd0i2ymspD%2BHwfBWbFIPmHZ5MLhnVcO8lOsRayr%2FnJl%2F2qPJXoa3PvYcWLwIIgCfxR5%2FNwni6K3ZzuxUT9%2Fn7rVcOmHpZoFNYF68gUu7YWBDJeUw86k%2FoJEwN28X551pP9lAUtkZ%2F7OE4vw4BdUVbwAqZw4LIz7NXd0P%2BTcDbqpEFpKQgz3NRYltBOOqw5OBA0bESwXrjq%2BtyAALXr3YjgpqodOmi5XwlmTrLhZBDiSE8ctRtxn8KPMqlPpWRbSB%2BWJQEc4k5EX2ia3jVORNirVaYPjZXpEOuoRJIEJmm9Hf3%2B%2BIl2VbjMfxjumX9i9gg%2F5S2FfIk3wjhCgH7sM1ml7ceXB7ZmzctuBHhwBB05zgMLymlcIGOqUBFm8y0XqGaKzohgSzD%2Fh%2FuWJ68%2FY9XIFZ6ZcGMfU4OHdbKJnqP7Mz2IhUuTm%2FLN8vgKz%2BW7tQeG4gvNprN9aTg9dcxW7giZHJx26lnPoqJtdd510PUZx%2FXy69Hcy6F6OT71ISlH5MAKkGydW058CgIMwDgirXw9DXp0sffN0wBiNC0YmUaYEl8FcpBydtWFlvdx%2FI6cKh1sFJmzddUmOiaSHb4icL&X-Amz-Signature=f2b824e4ce0d60ad582984d12cd190d4962389da2d3da614f9e19ebd160d6d28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVACBCP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGnoVbfQrprmAeO5BBhKg7CQzMhPoFMJUre8ftUr%2BTwAiEAkqgRvIGl1%2BrKvzo3AYC7ThF8ZC8T0%2BLjl2W8bgyeb7kqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTMHGwIEh2bj2kkTCrcAxjwHvrRikSZ3p5mjKm1tQNcgLwBhqYuBIBUKvhJm4Df68iQjYZBLH%2FbZDUXx38dUqs3LuIHPPOGsg5VU%2FCmk0V36Yyoq2pk3gWi%2FVkDpa6cxxWz1YaGcI22zDWheFe%2BciFl5KPSkXujN2LTUFb9Eh467jbzbeVrCGqgGQbnBkP8YsnZxANDV6fN6FJHg5xCr1MER0yxDbBCVWutZSZDc9VfocqzoszYL%2FrZuZ0Wnv3pR10%2BgOrLkVOT3R7NuAqRS9icjJNXfFIuoDSekd0i2ymspD%2BHwfBWbFIPmHZ5MLhnVcO8lOsRayr%2FnJl%2F2qPJXoa3PvYcWLwIIgCfxR5%2FNwni6K3ZzuxUT9%2Fn7rVcOmHpZoFNYF68gUu7YWBDJeUw86k%2FoJEwN28X551pP9lAUtkZ%2F7OE4vw4BdUVbwAqZw4LIz7NXd0P%2BTcDbqpEFpKQgz3NRYltBOOqw5OBA0bESwXrjq%2BtyAALXr3YjgpqodOmi5XwlmTrLhZBDiSE8ctRtxn8KPMqlPpWRbSB%2BWJQEc4k5EX2ia3jVORNirVaYPjZXpEOuoRJIEJmm9Hf3%2B%2BIl2VbjMfxjumX9i9gg%2F5S2FfIk3wjhCgH7sM1ml7ceXB7ZmzctuBHhwBB05zgMLymlcIGOqUBFm8y0XqGaKzohgSzD%2Fh%2FuWJ68%2FY9XIFZ6ZcGMfU4OHdbKJnqP7Mz2IhUuTm%2FLN8vgKz%2BW7tQeG4gvNprN9aTg9dcxW7giZHJx26lnPoqJtdd510PUZx%2FXy69Hcy6F6OT71ISlH5MAKkGydW058CgIMwDgirXw9DXp0sffN0wBiNC0YmUaYEl8FcpBydtWFlvdx%2FI6cKh1sFJmzddUmOiaSHb4icL&X-Amz-Signature=f0f1017654074c434bc543f4b4c91136e1ad508cf26e67fc724f698276db1578&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
