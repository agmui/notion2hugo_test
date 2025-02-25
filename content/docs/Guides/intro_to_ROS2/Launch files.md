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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYEBJGV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIACtVXbMsqMHDtX3NG77NkNJyL1mzgdyMtC3VbOSLhJWAiAzChFMrQWRYoouqsyNHs3DHfUuPW1nwC3kECxdsWHMeir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMypYugZJqBlb9YtW3KtwDfgxuKAK1gYo3MIHn3GP7pgiFiL0MEMuIjuvAkQSKYKJ%2BJXR5AMrllDOEFmoaiHAT8wE2uHzOEiJS9Ypugw3TEY7LAwxoWcOOZ1OxsdCYVCNMN7EpQEGaBKoLg8ADYosno2iqBmt1uh6VELqmnCGVbQqCt%2FZYntB4LqQzCsM8H86JQxx6FI2JekrSrsRC8k6cHrUyQsJYCCpGRlyDxhBRQgwkGI3qMWtWqBrsebkE3wTXc9QWzV3CoIqkMCzXkia5isRYl4e1Yzoui6B96WLu%2FSB9ThTIut9NgCwd%2FxY0DI%2BHngHRankpkTdbI9qpCTdun3H9ARH2kpIpfStL0vTps4GBApGejtM3hx1I2gUrcTgzlfA7hqysKs0Q62MeE7YhGN93IaOmHzicsHcNvRwlef2dVyesZjKTW2SAAg43JjhmGDJiFnKKJKAFkfXnn1fEGAGM6u6UUtEVSsuGjsmwytDL6Q0jAUnjDTVnoJ%2Fj%2B%2FZgKAQjNRtcOOMj8DbqNjmpcsUl2hFkcOmOQt6X1OqELzwZYjQH8Dz%2Bcy19A1RU0AJs5XinpNmp%2BOjEZQ02akooLpRe2ta9A9NZo2O08vEbR8ma%2FpQl%2Fvn2ZVpKTUXAB%2BaGqBNO2cKNLXV7o5Ew76n4vQY6pgGTRPXG%2FuRIOLEzRynjTsxpdn5tBdpPHFkVhAJ7Rp2O4G3Ui3Xzs%2B0bY5efNi8CzGDqseHvsxcha9AmFf2XEcHOuUX4COk5Hm%2Fl89PZ%2Fyy2OcMVy6ieOx6MePi%2BCrdBl055uN2W0YwH5OM7vflQBJAU78yQVkKYX4RQC4CEbBlAmo%2B44SEL2ZIV6nOHMH0Nx%2FG%2FW7rU9nzjfOtXkZ7wKzbuN7R%2FYlKx&X-Amz-Signature=3140ba911a77c295cef7d55f66265c602a07b723ccaaea6360ce98b3781e0370&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYEBJGV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIACtVXbMsqMHDtX3NG77NkNJyL1mzgdyMtC3VbOSLhJWAiAzChFMrQWRYoouqsyNHs3DHfUuPW1nwC3kECxdsWHMeir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMypYugZJqBlb9YtW3KtwDfgxuKAK1gYo3MIHn3GP7pgiFiL0MEMuIjuvAkQSKYKJ%2BJXR5AMrllDOEFmoaiHAT8wE2uHzOEiJS9Ypugw3TEY7LAwxoWcOOZ1OxsdCYVCNMN7EpQEGaBKoLg8ADYosno2iqBmt1uh6VELqmnCGVbQqCt%2FZYntB4LqQzCsM8H86JQxx6FI2JekrSrsRC8k6cHrUyQsJYCCpGRlyDxhBRQgwkGI3qMWtWqBrsebkE3wTXc9QWzV3CoIqkMCzXkia5isRYl4e1Yzoui6B96WLu%2FSB9ThTIut9NgCwd%2FxY0DI%2BHngHRankpkTdbI9qpCTdun3H9ARH2kpIpfStL0vTps4GBApGejtM3hx1I2gUrcTgzlfA7hqysKs0Q62MeE7YhGN93IaOmHzicsHcNvRwlef2dVyesZjKTW2SAAg43JjhmGDJiFnKKJKAFkfXnn1fEGAGM6u6UUtEVSsuGjsmwytDL6Q0jAUnjDTVnoJ%2Fj%2B%2FZgKAQjNRtcOOMj8DbqNjmpcsUl2hFkcOmOQt6X1OqELzwZYjQH8Dz%2Bcy19A1RU0AJs5XinpNmp%2BOjEZQ02akooLpRe2ta9A9NZo2O08vEbR8ma%2FpQl%2Fvn2ZVpKTUXAB%2BaGqBNO2cKNLXV7o5Ew76n4vQY6pgGTRPXG%2FuRIOLEzRynjTsxpdn5tBdpPHFkVhAJ7Rp2O4G3Ui3Xzs%2B0bY5efNi8CzGDqseHvsxcha9AmFf2XEcHOuUX4COk5Hm%2Fl89PZ%2Fyy2OcMVy6ieOx6MePi%2BCrdBl055uN2W0YwH5OM7vflQBJAU78yQVkKYX4RQC4CEbBlAmo%2B44SEL2ZIV6nOHMH0Nx%2FG%2FW7rU9nzjfOtXkZ7wKzbuN7R%2FYlKx&X-Amz-Signature=7aca1cfea2253ad4024cdf07ebfd5e2af03d8dd87ed2b8f107fb4eec9108f905&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYEBJGV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIACtVXbMsqMHDtX3NG77NkNJyL1mzgdyMtC3VbOSLhJWAiAzChFMrQWRYoouqsyNHs3DHfUuPW1nwC3kECxdsWHMeir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMypYugZJqBlb9YtW3KtwDfgxuKAK1gYo3MIHn3GP7pgiFiL0MEMuIjuvAkQSKYKJ%2BJXR5AMrllDOEFmoaiHAT8wE2uHzOEiJS9Ypugw3TEY7LAwxoWcOOZ1OxsdCYVCNMN7EpQEGaBKoLg8ADYosno2iqBmt1uh6VELqmnCGVbQqCt%2FZYntB4LqQzCsM8H86JQxx6FI2JekrSrsRC8k6cHrUyQsJYCCpGRlyDxhBRQgwkGI3qMWtWqBrsebkE3wTXc9QWzV3CoIqkMCzXkia5isRYl4e1Yzoui6B96WLu%2FSB9ThTIut9NgCwd%2FxY0DI%2BHngHRankpkTdbI9qpCTdun3H9ARH2kpIpfStL0vTps4GBApGejtM3hx1I2gUrcTgzlfA7hqysKs0Q62MeE7YhGN93IaOmHzicsHcNvRwlef2dVyesZjKTW2SAAg43JjhmGDJiFnKKJKAFkfXnn1fEGAGM6u6UUtEVSsuGjsmwytDL6Q0jAUnjDTVnoJ%2Fj%2B%2FZgKAQjNRtcOOMj8DbqNjmpcsUl2hFkcOmOQt6X1OqELzwZYjQH8Dz%2Bcy19A1RU0AJs5XinpNmp%2BOjEZQ02akooLpRe2ta9A9NZo2O08vEbR8ma%2FpQl%2Fvn2ZVpKTUXAB%2BaGqBNO2cKNLXV7o5Ew76n4vQY6pgGTRPXG%2FuRIOLEzRynjTsxpdn5tBdpPHFkVhAJ7Rp2O4G3Ui3Xzs%2B0bY5efNi8CzGDqseHvsxcha9AmFf2XEcHOuUX4COk5Hm%2Fl89PZ%2Fyy2OcMVy6ieOx6MePi%2BCrdBl055uN2W0YwH5OM7vflQBJAU78yQVkKYX4RQC4CEbBlAmo%2B44SEL2ZIV6nOHMH0Nx%2FG%2FW7rU9nzjfOtXkZ7wKzbuN7R%2FYlKx&X-Amz-Signature=3da186ac402bfad3b6a95fb87305cd8997036082dab3028669c017fa15aaff26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
