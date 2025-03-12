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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3RBGFL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmtw94CiQKFMwGy56oaRhtwnuknTf3YxRE71pcjNP7YAIhAJ2YAPHZk9%2FqfYNlfifoGY0XDBv3Us%2BE6xzfaUIWHCq5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG2lYSHqvu2MkUTUQq3AMUiJcHxY5llQXjsJ6%2BXrjiUK8c1TXoBN7f4O%2B2orHb0aomFNcrJLS1itQodDTyZ260UyrJycd4Mu3rkqZ8vOqfjrPJzGlbQ6zqJW2SSY0akGzM00feRSiPqI%2FH8dJUoYvww0MX2uCM7xKM9rLQbr7pFgLO892sZqYWnVuqQ%2FKFXT3HrXqJkfWWsfan98XOr9rNC9JSGFNMThuAXvwHzbNCJp%2FUTQapmjhNxsdmdIXnG0qUdta1BHgvxW4imTTfYKSjKQfoFoQ1h76WnsbkxQnW6JUVETrwuYvTSbJ%2F15KZBbKI97ejXUpUclwHGtZz9BiLgCTedHuwqXQK%2Fvq0KB1fSIwxX27Rv2%2BuV4hN1K%2F%2F4SEbnT6%2Bu7mciwAJilGiDf4PirYCnDWA1dmJTZsGgLoS5d6CYp%2BbYse%2BXmNTuqXyV9TKRiAHKVkJFOo%2BXYU0asMoA69cKV0UfGWdYqfcfFIDHoSt1CA4lnjtnWiNTX09TMn%2B2How9e921JU3k1yRptzjkHin7HTT8WGETC77ZGWtMX2hzISeW%2BbNlpqbMdaPwTiOTv%2B1ASXFwUhgfJkGqckxa8H2IrmEVrXWdsEaLx7eGEnXAamEX3jBKGrcWaJvx2IoO4Fw07JSugNKIzC1m8W%2BBjqkAUsPodubnlrFWcwuExX5nqCH7TXglAClScFhHa6eoO6n%2F%2F9XXEjmDBRFRsU1E%2Fv0gaXg3lkit9yFIbusf2gkSWmPHLj7QDHta4xjIT7B1W29CreHTvPmlSewlfqufAU9E95ByhP456UEfnrLIY4NQlSj7KUE4E7zL9yEvyEL3gQ0vPs42JcSXlCnlEKoqiZ2UThrzfloM46%2BIRvSrhE7w8pO2l8W&X-Amz-Signature=f0b095e9b561dda1dabbf19befcb78328206364f176d2bf5d642bf30b77a3ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3RBGFL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmtw94CiQKFMwGy56oaRhtwnuknTf3YxRE71pcjNP7YAIhAJ2YAPHZk9%2FqfYNlfifoGY0XDBv3Us%2BE6xzfaUIWHCq5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG2lYSHqvu2MkUTUQq3AMUiJcHxY5llQXjsJ6%2BXrjiUK8c1TXoBN7f4O%2B2orHb0aomFNcrJLS1itQodDTyZ260UyrJycd4Mu3rkqZ8vOqfjrPJzGlbQ6zqJW2SSY0akGzM00feRSiPqI%2FH8dJUoYvww0MX2uCM7xKM9rLQbr7pFgLO892sZqYWnVuqQ%2FKFXT3HrXqJkfWWsfan98XOr9rNC9JSGFNMThuAXvwHzbNCJp%2FUTQapmjhNxsdmdIXnG0qUdta1BHgvxW4imTTfYKSjKQfoFoQ1h76WnsbkxQnW6JUVETrwuYvTSbJ%2F15KZBbKI97ejXUpUclwHGtZz9BiLgCTedHuwqXQK%2Fvq0KB1fSIwxX27Rv2%2BuV4hN1K%2F%2F4SEbnT6%2Bu7mciwAJilGiDf4PirYCnDWA1dmJTZsGgLoS5d6CYp%2BbYse%2BXmNTuqXyV9TKRiAHKVkJFOo%2BXYU0asMoA69cKV0UfGWdYqfcfFIDHoSt1CA4lnjtnWiNTX09TMn%2B2How9e921JU3k1yRptzjkHin7HTT8WGETC77ZGWtMX2hzISeW%2BbNlpqbMdaPwTiOTv%2B1ASXFwUhgfJkGqckxa8H2IrmEVrXWdsEaLx7eGEnXAamEX3jBKGrcWaJvx2IoO4Fw07JSugNKIzC1m8W%2BBjqkAUsPodubnlrFWcwuExX5nqCH7TXglAClScFhHa6eoO6n%2F%2F9XXEjmDBRFRsU1E%2Fv0gaXg3lkit9yFIbusf2gkSWmPHLj7QDHta4xjIT7B1W29CreHTvPmlSewlfqufAU9E95ByhP456UEfnrLIY4NQlSj7KUE4E7zL9yEvyEL3gQ0vPs42JcSXlCnlEKoqiZ2UThrzfloM46%2BIRvSrhE7w8pO2l8W&X-Amz-Signature=201e91f447c39f49f968080659f67cd028818c46da1d3bbb9ef7431a1efbb65a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3RBGFL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmtw94CiQKFMwGy56oaRhtwnuknTf3YxRE71pcjNP7YAIhAJ2YAPHZk9%2FqfYNlfifoGY0XDBv3Us%2BE6xzfaUIWHCq5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG2lYSHqvu2MkUTUQq3AMUiJcHxY5llQXjsJ6%2BXrjiUK8c1TXoBN7f4O%2B2orHb0aomFNcrJLS1itQodDTyZ260UyrJycd4Mu3rkqZ8vOqfjrPJzGlbQ6zqJW2SSY0akGzM00feRSiPqI%2FH8dJUoYvww0MX2uCM7xKM9rLQbr7pFgLO892sZqYWnVuqQ%2FKFXT3HrXqJkfWWsfan98XOr9rNC9JSGFNMThuAXvwHzbNCJp%2FUTQapmjhNxsdmdIXnG0qUdta1BHgvxW4imTTfYKSjKQfoFoQ1h76WnsbkxQnW6JUVETrwuYvTSbJ%2F15KZBbKI97ejXUpUclwHGtZz9BiLgCTedHuwqXQK%2Fvq0KB1fSIwxX27Rv2%2BuV4hN1K%2F%2F4SEbnT6%2Bu7mciwAJilGiDf4PirYCnDWA1dmJTZsGgLoS5d6CYp%2BbYse%2BXmNTuqXyV9TKRiAHKVkJFOo%2BXYU0asMoA69cKV0UfGWdYqfcfFIDHoSt1CA4lnjtnWiNTX09TMn%2B2How9e921JU3k1yRptzjkHin7HTT8WGETC77ZGWtMX2hzISeW%2BbNlpqbMdaPwTiOTv%2B1ASXFwUhgfJkGqckxa8H2IrmEVrXWdsEaLx7eGEnXAamEX3jBKGrcWaJvx2IoO4Fw07JSugNKIzC1m8W%2BBjqkAUsPodubnlrFWcwuExX5nqCH7TXglAClScFhHa6eoO6n%2F%2F9XXEjmDBRFRsU1E%2Fv0gaXg3lkit9yFIbusf2gkSWmPHLj7QDHta4xjIT7B1W29CreHTvPmlSewlfqufAU9E95ByhP456UEfnrLIY4NQlSj7KUE4E7zL9yEvyEL3gQ0vPs42JcSXlCnlEKoqiZ2UThrzfloM46%2BIRvSrhE7w8pO2l8W&X-Amz-Signature=77e3ab43964f1a4df71b1939fac740674ee97fb95efe81e28a5f88c081afc6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
