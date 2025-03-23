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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJJQYJZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDCoROA5PvS3KKpHzq3%2B1gOIULqlIxY1OXPx5BaxjxqwwIgTguA3PisaoN%2FfKCSqb0EddG4K7hsFTkP4pQTtAzQnsUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5N9uzSGA2cAyJekyrcAzBUjBFk%2FDmXgck9gvqvOL1Ai295e%2BrY8x6mEAqr8BfRtHMyiyVbcBaePnhOh73jcz1rSsBiQ5RoAFKsopGKZVuFL4bXa3ni%2FXTNMoo%2B9KObgbumLiGyhLvP3%2B2gTADYGlO2VjP8CbJn7jgYKjgATQxkL5Rdc%2FPDTA0v6J9pf8DpSu9nK5PvzqQnl48cXHz%2FXlEQraWbrmHY1r8lKtiXN0GBp%2BN2fpjuEdy32vTptJkQu%2BsrBhSLUh%2Bp4v%2FOqvqPPptoI2N6pfeNFwkDYa0gCzRtuclcmzWXsM5%2Be%2FyMiq%2BUr9XJkQ6ocCnQxVyWezwQnI%2BPVUQfPeeSOTHwFSoy0OD11%2FZvTWUlM7mfj%2B9nNyUbHBNxWvlHxdhfk7Ge1UGCfg%2B2dBD0KLIHf769MXV%2BLC4ODWshTtT8wR0%2FhriNpyV1BSDOnUsjaQZfnJqu9bD%2FuOtb2clfDeEe2v7e66R%2FFdOAgW0WSFt%2B46yXiDAmI6jnbUsDz0glTQ51XCmBLb6nv0FSDhBnCJZwb5JyHw9ZsJ0RIJE1ITsvVGgCwty4EmWezzgTCwKQGU%2Bf90SanTGORN9w%2BFOlVt1CoRlVDAHor1k%2B4t0ez%2F74qN2bvXTrmSYQk%2Fr%2FJPBjZ2Z6DiMCMJvj%2Fb4GOqUB5kFjibfyM9wCLfYPD1h1WLcPiqzgILh%2BNIcViOCsxeNTmW6mlDkE6qAnfG3PrhaoykITHJfeSg0HR%2Bors3aliU%2FDwgRnq%2BbJSHBIbT3TrukYDqtcM0nAglZD7iw0FKaTV1Du%2F1zu9Pg98p6thn6GJuN1PghvAt7lEHQe0dp%2B4YBatjWYKqmPH70qriV7Oa5oLYdf%2BHJRaj9UXdKZNfcjLWwwLzB3&X-Amz-Signature=f3f6a6b844826edcbbd3222900d4315d551f2a146a6916305f3d23e8ff15c914&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJJQYJZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDCoROA5PvS3KKpHzq3%2B1gOIULqlIxY1OXPx5BaxjxqwwIgTguA3PisaoN%2FfKCSqb0EddG4K7hsFTkP4pQTtAzQnsUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5N9uzSGA2cAyJekyrcAzBUjBFk%2FDmXgck9gvqvOL1Ai295e%2BrY8x6mEAqr8BfRtHMyiyVbcBaePnhOh73jcz1rSsBiQ5RoAFKsopGKZVuFL4bXa3ni%2FXTNMoo%2B9KObgbumLiGyhLvP3%2B2gTADYGlO2VjP8CbJn7jgYKjgATQxkL5Rdc%2FPDTA0v6J9pf8DpSu9nK5PvzqQnl48cXHz%2FXlEQraWbrmHY1r8lKtiXN0GBp%2BN2fpjuEdy32vTptJkQu%2BsrBhSLUh%2Bp4v%2FOqvqPPptoI2N6pfeNFwkDYa0gCzRtuclcmzWXsM5%2Be%2FyMiq%2BUr9XJkQ6ocCnQxVyWezwQnI%2BPVUQfPeeSOTHwFSoy0OD11%2FZvTWUlM7mfj%2B9nNyUbHBNxWvlHxdhfk7Ge1UGCfg%2B2dBD0KLIHf769MXV%2BLC4ODWshTtT8wR0%2FhriNpyV1BSDOnUsjaQZfnJqu9bD%2FuOtb2clfDeEe2v7e66R%2FFdOAgW0WSFt%2B46yXiDAmI6jnbUsDz0glTQ51XCmBLb6nv0FSDhBnCJZwb5JyHw9ZsJ0RIJE1ITsvVGgCwty4EmWezzgTCwKQGU%2Bf90SanTGORN9w%2BFOlVt1CoRlVDAHor1k%2B4t0ez%2F74qN2bvXTrmSYQk%2Fr%2FJPBjZ2Z6DiMCMJvj%2Fb4GOqUB5kFjibfyM9wCLfYPD1h1WLcPiqzgILh%2BNIcViOCsxeNTmW6mlDkE6qAnfG3PrhaoykITHJfeSg0HR%2Bors3aliU%2FDwgRnq%2BbJSHBIbT3TrukYDqtcM0nAglZD7iw0FKaTV1Du%2F1zu9Pg98p6thn6GJuN1PghvAt7lEHQe0dp%2B4YBatjWYKqmPH70qriV7Oa5oLYdf%2BHJRaj9UXdKZNfcjLWwwLzB3&X-Amz-Signature=f2b9e8927e3fc1e7608f9159373e6be33ac613465fa150d7ad97cd3a30cb6dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJJQYJZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDCoROA5PvS3KKpHzq3%2B1gOIULqlIxY1OXPx5BaxjxqwwIgTguA3PisaoN%2FfKCSqb0EddG4K7hsFTkP4pQTtAzQnsUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5N9uzSGA2cAyJekyrcAzBUjBFk%2FDmXgck9gvqvOL1Ai295e%2BrY8x6mEAqr8BfRtHMyiyVbcBaePnhOh73jcz1rSsBiQ5RoAFKsopGKZVuFL4bXa3ni%2FXTNMoo%2B9KObgbumLiGyhLvP3%2B2gTADYGlO2VjP8CbJn7jgYKjgATQxkL5Rdc%2FPDTA0v6J9pf8DpSu9nK5PvzqQnl48cXHz%2FXlEQraWbrmHY1r8lKtiXN0GBp%2BN2fpjuEdy32vTptJkQu%2BsrBhSLUh%2Bp4v%2FOqvqPPptoI2N6pfeNFwkDYa0gCzRtuclcmzWXsM5%2Be%2FyMiq%2BUr9XJkQ6ocCnQxVyWezwQnI%2BPVUQfPeeSOTHwFSoy0OD11%2FZvTWUlM7mfj%2B9nNyUbHBNxWvlHxdhfk7Ge1UGCfg%2B2dBD0KLIHf769MXV%2BLC4ODWshTtT8wR0%2FhriNpyV1BSDOnUsjaQZfnJqu9bD%2FuOtb2clfDeEe2v7e66R%2FFdOAgW0WSFt%2B46yXiDAmI6jnbUsDz0glTQ51XCmBLb6nv0FSDhBnCJZwb5JyHw9ZsJ0RIJE1ITsvVGgCwty4EmWezzgTCwKQGU%2Bf90SanTGORN9w%2BFOlVt1CoRlVDAHor1k%2B4t0ez%2F74qN2bvXTrmSYQk%2Fr%2FJPBjZ2Z6DiMCMJvj%2Fb4GOqUB5kFjibfyM9wCLfYPD1h1WLcPiqzgILh%2BNIcViOCsxeNTmW6mlDkE6qAnfG3PrhaoykITHJfeSg0HR%2Bors3aliU%2FDwgRnq%2BbJSHBIbT3TrukYDqtcM0nAglZD7iw0FKaTV1Du%2F1zu9Pg98p6thn6GJuN1PghvAt7lEHQe0dp%2B4YBatjWYKqmPH70qriV7Oa5oLYdf%2BHJRaj9UXdKZNfcjLWwwLzB3&X-Amz-Signature=9bf1d92fc755e3a526f3eb1549cacf15d36ef40290ece52f1b75530ec4387fce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
