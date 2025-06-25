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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6HRNEQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDknIUn893foOV0d49QwzUxwmvd2%2BL3%2F71WHbmagB15DgIgAfZg9XWIjZ7ixKIonpHbo6wD3Wl%2FJqgcW22PGNw2e2wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDHoAY8bs2nbKt8CvSrcA1I2Zo6pooHUnlQpH2gx5CYu%2BVSsl6TkT0rI6OxIETpbphv7DRiWIxdeuQPo0C7f01Jx3HeACWLoVuPDjpJkTFEJcDPOLQ%2BHGDVjXOg7yOh7Up2pvAdhrAaOjBTUqW5w7ThoWYOuWt0mQn%2BjXLQnnaFYPGFN%2FLIS%2FMyk%2FqcuIPT1zDOxJBLOAU4KYYbVJowIedyf4HHEndD0No1dsYAuMmq43DaSfkXr4bGGHStv5tCtgCt3hPpTueP9tJLiaZqdWMQE2B5tyGhp7YNVK9O%2BDVwL0em9X9XVvnMpKWv4GZ6578Ed00kQYzk0BQZUjJFIbElrScu7080xCwJ1a8%2BMk3I7Q0nZS%2FVhZWGn86VKNUtUf2D3MgH9HkEMzUcCWr9QDqpDKfkMWuO8h2DrkScWrPn8nBiKHxQ1%2FUQqfC9rjWfesO%2FC%2FmKmhP7r0qjatpLzwdYKd2Txke5J4jBOnj2r0kry%2FuUhhkhcTZStuMIvNKZyNFXc4MZaH4bpsxVU8rUC5FhM2p7LyxcE%2F5Svmw1qoN3cssxC%2BwrvYJlxPE5Nz7i8PoU717KN9%2FPqAoCp4BCu7eG%2BSSDRklzch8jHrSc1yhtvMCSu6BCZ2pPQWzxxzpfCJrAdeQGEUbiDGQbIMOTC7cIGOqUB7SodoEujXgNk3v0ZT9L31CHBq24rWOYS%2FEqby5PsLz%2F4p0v5gjuEv3WMcDSgE5O2342poA8g6dRoTTzHdsLJVUl0DOS%2BccHi1P85xfDRkCQwF5ncwaCl52SeiL99%2F7WM8MY1hreOrxdV5k9iE6FtaVc5zxuFICJohvWp9xI4liUag7eqg%2BHt%2BBSqDYJgGjEL1fIEq1pEnvmM6C337bNGlH59hHM4&X-Amz-Signature=8567722e34b3ae57f2955f4e17fede4e8e9349e7b0861afd742b8713f8b71378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6HRNEQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDknIUn893foOV0d49QwzUxwmvd2%2BL3%2F71WHbmagB15DgIgAfZg9XWIjZ7ixKIonpHbo6wD3Wl%2FJqgcW22PGNw2e2wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDHoAY8bs2nbKt8CvSrcA1I2Zo6pooHUnlQpH2gx5CYu%2BVSsl6TkT0rI6OxIETpbphv7DRiWIxdeuQPo0C7f01Jx3HeACWLoVuPDjpJkTFEJcDPOLQ%2BHGDVjXOg7yOh7Up2pvAdhrAaOjBTUqW5w7ThoWYOuWt0mQn%2BjXLQnnaFYPGFN%2FLIS%2FMyk%2FqcuIPT1zDOxJBLOAU4KYYbVJowIedyf4HHEndD0No1dsYAuMmq43DaSfkXr4bGGHStv5tCtgCt3hPpTueP9tJLiaZqdWMQE2B5tyGhp7YNVK9O%2BDVwL0em9X9XVvnMpKWv4GZ6578Ed00kQYzk0BQZUjJFIbElrScu7080xCwJ1a8%2BMk3I7Q0nZS%2FVhZWGn86VKNUtUf2D3MgH9HkEMzUcCWr9QDqpDKfkMWuO8h2DrkScWrPn8nBiKHxQ1%2FUQqfC9rjWfesO%2FC%2FmKmhP7r0qjatpLzwdYKd2Txke5J4jBOnj2r0kry%2FuUhhkhcTZStuMIvNKZyNFXc4MZaH4bpsxVU8rUC5FhM2p7LyxcE%2F5Svmw1qoN3cssxC%2BwrvYJlxPE5Nz7i8PoU717KN9%2FPqAoCp4BCu7eG%2BSSDRklzch8jHrSc1yhtvMCSu6BCZ2pPQWzxxzpfCJrAdeQGEUbiDGQbIMOTC7cIGOqUB7SodoEujXgNk3v0ZT9L31CHBq24rWOYS%2FEqby5PsLz%2F4p0v5gjuEv3WMcDSgE5O2342poA8g6dRoTTzHdsLJVUl0DOS%2BccHi1P85xfDRkCQwF5ncwaCl52SeiL99%2F7WM8MY1hreOrxdV5k9iE6FtaVc5zxuFICJohvWp9xI4liUag7eqg%2BHt%2BBSqDYJgGjEL1fIEq1pEnvmM6C337bNGlH59hHM4&X-Amz-Signature=9a6b9467b89a1ff5f46790ab4b8805fddab80cd7386309d1c67f4c5ebd6f66b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6HRNEQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDknIUn893foOV0d49QwzUxwmvd2%2BL3%2F71WHbmagB15DgIgAfZg9XWIjZ7ixKIonpHbo6wD3Wl%2FJqgcW22PGNw2e2wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDHoAY8bs2nbKt8CvSrcA1I2Zo6pooHUnlQpH2gx5CYu%2BVSsl6TkT0rI6OxIETpbphv7DRiWIxdeuQPo0C7f01Jx3HeACWLoVuPDjpJkTFEJcDPOLQ%2BHGDVjXOg7yOh7Up2pvAdhrAaOjBTUqW5w7ThoWYOuWt0mQn%2BjXLQnnaFYPGFN%2FLIS%2FMyk%2FqcuIPT1zDOxJBLOAU4KYYbVJowIedyf4HHEndD0No1dsYAuMmq43DaSfkXr4bGGHStv5tCtgCt3hPpTueP9tJLiaZqdWMQE2B5tyGhp7YNVK9O%2BDVwL0em9X9XVvnMpKWv4GZ6578Ed00kQYzk0BQZUjJFIbElrScu7080xCwJ1a8%2BMk3I7Q0nZS%2FVhZWGn86VKNUtUf2D3MgH9HkEMzUcCWr9QDqpDKfkMWuO8h2DrkScWrPn8nBiKHxQ1%2FUQqfC9rjWfesO%2FC%2FmKmhP7r0qjatpLzwdYKd2Txke5J4jBOnj2r0kry%2FuUhhkhcTZStuMIvNKZyNFXc4MZaH4bpsxVU8rUC5FhM2p7LyxcE%2F5Svmw1qoN3cssxC%2BwrvYJlxPE5Nz7i8PoU717KN9%2FPqAoCp4BCu7eG%2BSSDRklzch8jHrSc1yhtvMCSu6BCZ2pPQWzxxzpfCJrAdeQGEUbiDGQbIMOTC7cIGOqUB7SodoEujXgNk3v0ZT9L31CHBq24rWOYS%2FEqby5PsLz%2F4p0v5gjuEv3WMcDSgE5O2342poA8g6dRoTTzHdsLJVUl0DOS%2BccHi1P85xfDRkCQwF5ncwaCl52SeiL99%2F7WM8MY1hreOrxdV5k9iE6FtaVc5zxuFICJohvWp9xI4liUag7eqg%2BHt%2BBSqDYJgGjEL1fIEq1pEnvmM6C337bNGlH59hHM4&X-Amz-Signature=0accac8d72d017e48d1d6dd0bf8828b7e2ea36d45054aaeebd67f8eef6217f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
