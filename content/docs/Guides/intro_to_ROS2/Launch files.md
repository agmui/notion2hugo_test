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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTR3IL5Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHcUECUegSWkRZlQ7zGGtWvX5XbO6yLtZ6LMQKpXVQxAiAiAdaHtB7p9sst%2FH6LaNFko5XshzrKGN6rVcNBmsZlgir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMsaNkBSxsl2wByRGDKtwDAqPAqt6RhbEcqB9xZAUJYVTSjU2H%2B0c2mVwTYdgmG%2F6ZLl%2F2t0t%2BaZNasvel0D4BMD9Psoa8VjWHhgppIs4%2FZkGEyQtiaNXekwrAG6pWjdvy7T4AV%2Btn6UAI%2FaRKcCjdxHFoNQ3rLPHKrK2q3QHorBgsjxJHTz0VzARL%2BE5eOax%2B6IU4o9mOatVyNcXaH4EFNnU61CZ%2Bj5vQEGvNvGA%2FrJwpjVy%2BLuNTcVeSpCVxbKMjMV8ZzOPeaJ%2FJsHkLrGHaCXA5rz%2BW8xdSzdu77uzdkhQ0XQLYv57gPVEMUY0jNSeoxnfwBZWMrI8%2F9WCJR5BeRDi1oZimHTCf1nqaAFBWFzbzV5Zn8jdyrkeSnDw3uG70Klu%2Fo8Bn8EZVwFgx0Ce2wgvFXFHoAcS4L5aXYubYCkSDAPZ0Z9PJtJwJP9XLP%2BttR0qZwSerI9uaM%2BpgnenWUWu2WJdJlxUg138O0iUyR4YCw1eHI5i%2F0DPyOdYh8Ha7EslGl%2Bs3JjirSoOtEsRpWFZyaP3OlB76lU0CwFl1lgKrBkyvfCShgutNybM8rMjyFHZLM7NJPxW15F1eeXfM8lAWGiRCAwP9CyTt5DiCfTBtjhGTnqwukzr1bS2j8o%2BAUI82duXDIDpG%2BCswq7CCwAY6pgFPNdh6JXdXrNrrF2IMdifVx%2B%2B%2Fn5DQuM4QMCasJLJ7wRHCWBc%2Fo343WJdEJcd85p6MRqKOncEGMoPNhRgJ8REiz3yC9LuiyGa5cLjDdDjUaaYJQa%2FjWaR%2F4BriPQAIXko2lI%2BGxyU5qIiLbR40E3ROYsTbrJX2629LGVD4hVrUmXa%2BRRo50uzLJ%2BbHlXqTmnM79qWDQ6gCwMVTAWraZBTJTyQe%2BET%2F&X-Amz-Signature=f46ebb355a041a8a7f28accff869027c3661f2edecef63667126d684f158afd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTR3IL5Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHcUECUegSWkRZlQ7zGGtWvX5XbO6yLtZ6LMQKpXVQxAiAiAdaHtB7p9sst%2FH6LaNFko5XshzrKGN6rVcNBmsZlgir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMsaNkBSxsl2wByRGDKtwDAqPAqt6RhbEcqB9xZAUJYVTSjU2H%2B0c2mVwTYdgmG%2F6ZLl%2F2t0t%2BaZNasvel0D4BMD9Psoa8VjWHhgppIs4%2FZkGEyQtiaNXekwrAG6pWjdvy7T4AV%2Btn6UAI%2FaRKcCjdxHFoNQ3rLPHKrK2q3QHorBgsjxJHTz0VzARL%2BE5eOax%2B6IU4o9mOatVyNcXaH4EFNnU61CZ%2Bj5vQEGvNvGA%2FrJwpjVy%2BLuNTcVeSpCVxbKMjMV8ZzOPeaJ%2FJsHkLrGHaCXA5rz%2BW8xdSzdu77uzdkhQ0XQLYv57gPVEMUY0jNSeoxnfwBZWMrI8%2F9WCJR5BeRDi1oZimHTCf1nqaAFBWFzbzV5Zn8jdyrkeSnDw3uG70Klu%2Fo8Bn8EZVwFgx0Ce2wgvFXFHoAcS4L5aXYubYCkSDAPZ0Z9PJtJwJP9XLP%2BttR0qZwSerI9uaM%2BpgnenWUWu2WJdJlxUg138O0iUyR4YCw1eHI5i%2F0DPyOdYh8Ha7EslGl%2Bs3JjirSoOtEsRpWFZyaP3OlB76lU0CwFl1lgKrBkyvfCShgutNybM8rMjyFHZLM7NJPxW15F1eeXfM8lAWGiRCAwP9CyTt5DiCfTBtjhGTnqwukzr1bS2j8o%2BAUI82duXDIDpG%2BCswq7CCwAY6pgFPNdh6JXdXrNrrF2IMdifVx%2B%2B%2Fn5DQuM4QMCasJLJ7wRHCWBc%2Fo343WJdEJcd85p6MRqKOncEGMoPNhRgJ8REiz3yC9LuiyGa5cLjDdDjUaaYJQa%2FjWaR%2F4BriPQAIXko2lI%2BGxyU5qIiLbR40E3ROYsTbrJX2629LGVD4hVrUmXa%2BRRo50uzLJ%2BbHlXqTmnM79qWDQ6gCwMVTAWraZBTJTyQe%2BET%2F&X-Amz-Signature=5b68f3a118f784470d66e0fa93ba900aa2557c96aa0d17ebeeacea17804e58b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTR3IL5Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHcUECUegSWkRZlQ7zGGtWvX5XbO6yLtZ6LMQKpXVQxAiAiAdaHtB7p9sst%2FH6LaNFko5XshzrKGN6rVcNBmsZlgir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMsaNkBSxsl2wByRGDKtwDAqPAqt6RhbEcqB9xZAUJYVTSjU2H%2B0c2mVwTYdgmG%2F6ZLl%2F2t0t%2BaZNasvel0D4BMD9Psoa8VjWHhgppIs4%2FZkGEyQtiaNXekwrAG6pWjdvy7T4AV%2Btn6UAI%2FaRKcCjdxHFoNQ3rLPHKrK2q3QHorBgsjxJHTz0VzARL%2BE5eOax%2B6IU4o9mOatVyNcXaH4EFNnU61CZ%2Bj5vQEGvNvGA%2FrJwpjVy%2BLuNTcVeSpCVxbKMjMV8ZzOPeaJ%2FJsHkLrGHaCXA5rz%2BW8xdSzdu77uzdkhQ0XQLYv57gPVEMUY0jNSeoxnfwBZWMrI8%2F9WCJR5BeRDi1oZimHTCf1nqaAFBWFzbzV5Zn8jdyrkeSnDw3uG70Klu%2Fo8Bn8EZVwFgx0Ce2wgvFXFHoAcS4L5aXYubYCkSDAPZ0Z9PJtJwJP9XLP%2BttR0qZwSerI9uaM%2BpgnenWUWu2WJdJlxUg138O0iUyR4YCw1eHI5i%2F0DPyOdYh8Ha7EslGl%2Bs3JjirSoOtEsRpWFZyaP3OlB76lU0CwFl1lgKrBkyvfCShgutNybM8rMjyFHZLM7NJPxW15F1eeXfM8lAWGiRCAwP9CyTt5DiCfTBtjhGTnqwukzr1bS2j8o%2BAUI82duXDIDpG%2BCswq7CCwAY6pgFPNdh6JXdXrNrrF2IMdifVx%2B%2B%2Fn5DQuM4QMCasJLJ7wRHCWBc%2Fo343WJdEJcd85p6MRqKOncEGMoPNhRgJ8REiz3yC9LuiyGa5cLjDdDjUaaYJQa%2FjWaR%2F4BriPQAIXko2lI%2BGxyU5qIiLbR40E3ROYsTbrJX2629LGVD4hVrUmXa%2BRRo50uzLJ%2BbHlXqTmnM79qWDQ6gCwMVTAWraZBTJTyQe%2BET%2F&X-Amz-Signature=95d2abcc6d4713dcad960d890083305568940288d6795617d10564db19a4d5af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
