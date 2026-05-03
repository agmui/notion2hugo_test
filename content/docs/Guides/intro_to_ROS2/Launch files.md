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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466GCKWP%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBKUhViVdGO5brRyExNXJq7pLoHL%2B7KoIBbEBdrdmDwIgaN2UfJtZkBtlyo6IQuly4WCoCgUEM6kzKURMd8OO2Ygq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGt6DDZg3c47G5DJXSrcA7Uib6BZhxZ%2FRNA4W%2BQwY6nU5KVOAq604kBz2DXPMB1t4N%2B%2FXFfOzok5hk%2FLWMw0YK86VcMFwCyC94LaE9l5J3OnfaK%2B4r8FcZt%2FnVgOlDqiD6haD7N7aIYuk9Wi%2FaViv6sQpkqOJvjdCwlGCQ16ocEhVKopiFfXqgBmd1SykptQs471O3jd5TIhvXbfn%2B4aoN7pWnVtNr%2BkV9W1rSQx5I%2F2%2BAt8Or56%2BxQ%2BdjyLwWqpD7BzszkJseTmu2UtCsp27WpFTohui3tLlGqGiGgEkD4dxLRndkEJP8lcrFFUaUoLv7fEWh89uJXo4lWfH0pxM8WrFO%2BWMWmgMpqOMCCpCsP%2BR9JL9O9NFIRXeA6W75rWelnyDkFqGFkBcvm2ZIn8hVDxbf0lokJeq%2FrLO7qQUSMwaFEHFOmem8Fopo0e%2BSJj9Y4Zp%2BuJzLms4KUxP5RaOThetNrDwXCNeK%2ButEuhyMfgNU64fczccxkS96utaTl9hNvEqrpr5z0vKYhugVWFWcQUa%2FaErwWmFxVYxBxsUybOmQOjYw1eFTjelZ1nltDWbCfNA6NNmwdQJZkHbgTvqRJQS%2Bs3y9YeTL33quEi7qhJ%2BopcNBroJ2aPiuyol6XL%2FvnTSGR34wW8RbiTMPXV2s8GOqUB677gR%2BN%2F3TkbwEy0WV0qNPyzR1LHYZ3r2zKioOuCM%2FCQh9n2FGzr%2BaUvhiaGB3%2BhOgMfpPNdk05tjto85%2FUrZ7%2B%2BLq9EbuFH%2Fzc5S0WKhCaYkad93mkJcOGN9C5cEqo60UnOxmcbdBhXolNqksJa%2BFnMH4d%2B7cJ5D1sWZma2cZF%2Fct8ZBdLm0CkZ%2FMAgEe0vcXfkm7u5E83Dyw1cPfffx4uRvCBB&X-Amz-Signature=d3bf4f8016065c35032166e219dfc389fe6968b27cd0530e2552fb4cf4ee721c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466GCKWP%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBKUhViVdGO5brRyExNXJq7pLoHL%2B7KoIBbEBdrdmDwIgaN2UfJtZkBtlyo6IQuly4WCoCgUEM6kzKURMd8OO2Ygq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGt6DDZg3c47G5DJXSrcA7Uib6BZhxZ%2FRNA4W%2BQwY6nU5KVOAq604kBz2DXPMB1t4N%2B%2FXFfOzok5hk%2FLWMw0YK86VcMFwCyC94LaE9l5J3OnfaK%2B4r8FcZt%2FnVgOlDqiD6haD7N7aIYuk9Wi%2FaViv6sQpkqOJvjdCwlGCQ16ocEhVKopiFfXqgBmd1SykptQs471O3jd5TIhvXbfn%2B4aoN7pWnVtNr%2BkV9W1rSQx5I%2F2%2BAt8Or56%2BxQ%2BdjyLwWqpD7BzszkJseTmu2UtCsp27WpFTohui3tLlGqGiGgEkD4dxLRndkEJP8lcrFFUaUoLv7fEWh89uJXo4lWfH0pxM8WrFO%2BWMWmgMpqOMCCpCsP%2BR9JL9O9NFIRXeA6W75rWelnyDkFqGFkBcvm2ZIn8hVDxbf0lokJeq%2FrLO7qQUSMwaFEHFOmem8Fopo0e%2BSJj9Y4Zp%2BuJzLms4KUxP5RaOThetNrDwXCNeK%2ButEuhyMfgNU64fczccxkS96utaTl9hNvEqrpr5z0vKYhugVWFWcQUa%2FaErwWmFxVYxBxsUybOmQOjYw1eFTjelZ1nltDWbCfNA6NNmwdQJZkHbgTvqRJQS%2Bs3y9YeTL33quEi7qhJ%2BopcNBroJ2aPiuyol6XL%2FvnTSGR34wW8RbiTMPXV2s8GOqUB677gR%2BN%2F3TkbwEy0WV0qNPyzR1LHYZ3r2zKioOuCM%2FCQh9n2FGzr%2BaUvhiaGB3%2BhOgMfpPNdk05tjto85%2FUrZ7%2B%2BLq9EbuFH%2Fzc5S0WKhCaYkad93mkJcOGN9C5cEqo60UnOxmcbdBhXolNqksJa%2BFnMH4d%2B7cJ5D1sWZma2cZF%2Fct8ZBdLm0CkZ%2FMAgEe0vcXfkm7u5E83Dyw1cPfffx4uRvCBB&X-Amz-Signature=1abee841ecf0d54870ce3d66abe9faf9eb5e5d389a0d92f7b551bd7f678b5b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466GCKWP%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBKUhViVdGO5brRyExNXJq7pLoHL%2B7KoIBbEBdrdmDwIgaN2UfJtZkBtlyo6IQuly4WCoCgUEM6kzKURMd8OO2Ygq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGt6DDZg3c47G5DJXSrcA7Uib6BZhxZ%2FRNA4W%2BQwY6nU5KVOAq604kBz2DXPMB1t4N%2B%2FXFfOzok5hk%2FLWMw0YK86VcMFwCyC94LaE9l5J3OnfaK%2B4r8FcZt%2FnVgOlDqiD6haD7N7aIYuk9Wi%2FaViv6sQpkqOJvjdCwlGCQ16ocEhVKopiFfXqgBmd1SykptQs471O3jd5TIhvXbfn%2B4aoN7pWnVtNr%2BkV9W1rSQx5I%2F2%2BAt8Or56%2BxQ%2BdjyLwWqpD7BzszkJseTmu2UtCsp27WpFTohui3tLlGqGiGgEkD4dxLRndkEJP8lcrFFUaUoLv7fEWh89uJXo4lWfH0pxM8WrFO%2BWMWmgMpqOMCCpCsP%2BR9JL9O9NFIRXeA6W75rWelnyDkFqGFkBcvm2ZIn8hVDxbf0lokJeq%2FrLO7qQUSMwaFEHFOmem8Fopo0e%2BSJj9Y4Zp%2BuJzLms4KUxP5RaOThetNrDwXCNeK%2ButEuhyMfgNU64fczccxkS96utaTl9hNvEqrpr5z0vKYhugVWFWcQUa%2FaErwWmFxVYxBxsUybOmQOjYw1eFTjelZ1nltDWbCfNA6NNmwdQJZkHbgTvqRJQS%2Bs3y9YeTL33quEi7qhJ%2BopcNBroJ2aPiuyol6XL%2FvnTSGR34wW8RbiTMPXV2s8GOqUB677gR%2BN%2F3TkbwEy0WV0qNPyzR1LHYZ3r2zKioOuCM%2FCQh9n2FGzr%2BaUvhiaGB3%2BhOgMfpPNdk05tjto85%2FUrZ7%2B%2BLq9EbuFH%2Fzc5S0WKhCaYkad93mkJcOGN9C5cEqo60UnOxmcbdBhXolNqksJa%2BFnMH4d%2B7cJ5D1sWZma2cZF%2Fct8ZBdLm0CkZ%2FMAgEe0vcXfkm7u5E83Dyw1cPfffx4uRvCBB&X-Amz-Signature=cb7f592dbcf438c69f983a223ac730a24c15ad8651364e3a65bf4cfad2c047f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
