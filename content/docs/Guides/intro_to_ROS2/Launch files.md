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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKQZPJC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG4b3SvkrnoqRstC%2BYo%2FKFgEgREndJHqcObtHcLfIwKkAiBlkH7mti1GMTWpdttJSEvy6q%2BbJ5VByOYcGJPR%2FYZ7uSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMeB7ZmEiljX7JSitXKtwD4RSV8I1hVr%2Ba4q%2FIW1bRuwgIx9R%2BmTcUbce%2BaeD1QIw%2BLyoxQM%2FiKaIBr6zpKLmjyKQPvKtOxCyVigJsevJW3vCA1tSunnA21ak88GEpYaX%2FKg01iKyhzYfXKyjBW%2FqXjmQpJvgmNmvda7g1aAaHO%2FHe1uK3hLVdlWTHCfh%2B5QKjWvV3mujjqBh0hsO8Fxc81zuqTi0y5Vhe9vDDCXgtPt0L6wB9ZHoe%2BxHnR94wTOYvF4K%2BPeZ4iVrK5RkDtI4dy7PS7%2BHbmdTeFPm41uUU4glVq9gH%2FCsnZOYOxZ6CKD%2FZIB0B1Z0F%2FQGv77y6nUxw05FL3HI6QFT1DnAbJpBJQzphvZl4AHuhWX0YBiOSUUdxtLYPolv28zeyQsyI00nYaqnQ%2FAtbU0mzfrYAs%2FekTgZ%2BrdlcJ3TeKbnViA2YExF%2F096UxqLOUCg94z4QInp83FGJKRVtM%2FYyHPefVjECt%2FdNDitsnyfa8KzjTixxCY2o7VX4iqUCmukDKPQ2Dd1TqdRbq0df5HkgI99HaUmrLwoN246Ub64SDIvj5kPV1Owc0d1I0obnEe0J3xaPN0jNns1uovvVfAjQ7BSDbjraVwdfA5C7%2F9WnVA516crhv94JDB3H%2BDD98mcSfbcwwM68wgY6pgG2JLGTaKSlKJOW8Rpr6iMD359PDo3eKhaMeq%2BWUTTdrn%2FcpVYhL03AF8I3%2FEvAVfWVckEEp7wWoe7VmMSoeE6tWMJh6A36qGp8ryhaLfRv9AjrEVMpRmGoYHkSYjQbPJeObPLoXCZxmJqMLxdq%2BHZiNu4nAEUwHbLI9EZ7XBsduZXKDts%2BZJkVAxlP3DO2%2B72%2Fb%2BmoT6z%2FQIcBudMQmYz6dcL5Oy%2FE&X-Amz-Signature=0e34450f45bed2520abaeaa1f5574ac3bf58e6227aebebb2bd795260ee9d091f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKQZPJC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG4b3SvkrnoqRstC%2BYo%2FKFgEgREndJHqcObtHcLfIwKkAiBlkH7mti1GMTWpdttJSEvy6q%2BbJ5VByOYcGJPR%2FYZ7uSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMeB7ZmEiljX7JSitXKtwD4RSV8I1hVr%2Ba4q%2FIW1bRuwgIx9R%2BmTcUbce%2BaeD1QIw%2BLyoxQM%2FiKaIBr6zpKLmjyKQPvKtOxCyVigJsevJW3vCA1tSunnA21ak88GEpYaX%2FKg01iKyhzYfXKyjBW%2FqXjmQpJvgmNmvda7g1aAaHO%2FHe1uK3hLVdlWTHCfh%2B5QKjWvV3mujjqBh0hsO8Fxc81zuqTi0y5Vhe9vDDCXgtPt0L6wB9ZHoe%2BxHnR94wTOYvF4K%2BPeZ4iVrK5RkDtI4dy7PS7%2BHbmdTeFPm41uUU4glVq9gH%2FCsnZOYOxZ6CKD%2FZIB0B1Z0F%2FQGv77y6nUxw05FL3HI6QFT1DnAbJpBJQzphvZl4AHuhWX0YBiOSUUdxtLYPolv28zeyQsyI00nYaqnQ%2FAtbU0mzfrYAs%2FekTgZ%2BrdlcJ3TeKbnViA2YExF%2F096UxqLOUCg94z4QInp83FGJKRVtM%2FYyHPefVjECt%2FdNDitsnyfa8KzjTixxCY2o7VX4iqUCmukDKPQ2Dd1TqdRbq0df5HkgI99HaUmrLwoN246Ub64SDIvj5kPV1Owc0d1I0obnEe0J3xaPN0jNns1uovvVfAjQ7BSDbjraVwdfA5C7%2F9WnVA516crhv94JDB3H%2BDD98mcSfbcwwM68wgY6pgG2JLGTaKSlKJOW8Rpr6iMD359PDo3eKhaMeq%2BWUTTdrn%2FcpVYhL03AF8I3%2FEvAVfWVckEEp7wWoe7VmMSoeE6tWMJh6A36qGp8ryhaLfRv9AjrEVMpRmGoYHkSYjQbPJeObPLoXCZxmJqMLxdq%2BHZiNu4nAEUwHbLI9EZ7XBsduZXKDts%2BZJkVAxlP3DO2%2B72%2Fb%2BmoT6z%2FQIcBudMQmYz6dcL5Oy%2FE&X-Amz-Signature=e03bf380b840cfdc9335926fdab2c018f0950098554bebe9c5be401ac409bed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKQZPJC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG4b3SvkrnoqRstC%2BYo%2FKFgEgREndJHqcObtHcLfIwKkAiBlkH7mti1GMTWpdttJSEvy6q%2BbJ5VByOYcGJPR%2FYZ7uSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMeB7ZmEiljX7JSitXKtwD4RSV8I1hVr%2Ba4q%2FIW1bRuwgIx9R%2BmTcUbce%2BaeD1QIw%2BLyoxQM%2FiKaIBr6zpKLmjyKQPvKtOxCyVigJsevJW3vCA1tSunnA21ak88GEpYaX%2FKg01iKyhzYfXKyjBW%2FqXjmQpJvgmNmvda7g1aAaHO%2FHe1uK3hLVdlWTHCfh%2B5QKjWvV3mujjqBh0hsO8Fxc81zuqTi0y5Vhe9vDDCXgtPt0L6wB9ZHoe%2BxHnR94wTOYvF4K%2BPeZ4iVrK5RkDtI4dy7PS7%2BHbmdTeFPm41uUU4glVq9gH%2FCsnZOYOxZ6CKD%2FZIB0B1Z0F%2FQGv77y6nUxw05FL3HI6QFT1DnAbJpBJQzphvZl4AHuhWX0YBiOSUUdxtLYPolv28zeyQsyI00nYaqnQ%2FAtbU0mzfrYAs%2FekTgZ%2BrdlcJ3TeKbnViA2YExF%2F096UxqLOUCg94z4QInp83FGJKRVtM%2FYyHPefVjECt%2FdNDitsnyfa8KzjTixxCY2o7VX4iqUCmukDKPQ2Dd1TqdRbq0df5HkgI99HaUmrLwoN246Ub64SDIvj5kPV1Owc0d1I0obnEe0J3xaPN0jNns1uovvVfAjQ7BSDbjraVwdfA5C7%2F9WnVA516crhv94JDB3H%2BDD98mcSfbcwwM68wgY6pgG2JLGTaKSlKJOW8Rpr6iMD359PDo3eKhaMeq%2BWUTTdrn%2FcpVYhL03AF8I3%2FEvAVfWVckEEp7wWoe7VmMSoeE6tWMJh6A36qGp8ryhaLfRv9AjrEVMpRmGoYHkSYjQbPJeObPLoXCZxmJqMLxdq%2BHZiNu4nAEUwHbLI9EZ7XBsduZXKDts%2BZJkVAxlP3DO2%2B72%2Fb%2BmoT6z%2FQIcBudMQmYz6dcL5Oy%2FE&X-Amz-Signature=5d2bda853566c8bbb59c1df4f494ed6bd0b17b2e1e12fa991276ce62428c99b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
