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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGGKIUE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWABXxhxmJ%2B5B%2ByXCJwY6mtgjDgxNTKcT4BViYc%2FzJ3AiBMPOiSNvy7euTtoiLHlfFoM5fNdkniKDbrSllpY6oBySr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5r6AqMAzCmn2H5J2KtwDE8B9lWkDjBGQdoAF1NnCxl13w8f31qhBPEGm0E3qvECaxpdS4BGTelB4ua2fot3OMDFByT4jVEiveeCYFFO9Wxakr3yhpqU7SA2g09GBjrcgckfj3LMYnV9WbtMNsH0epFDZrUDJ8Qv%2B4G%2FnnRvC6PfYUxlsK2GWctW21wYsBemmX7kQlLDEC5nYHj7jZ%2FZLCLrLRtnffYRggTSDOO3LznyPz%2BMkbwMC0B0uVUViIducXO%2Bi0PEjY5X3j3g3A%2FeFvS1zpzR%2B%2BMh2%2BVZOwWmTsmk5lexN38%2BR8mHIeIFq5OGSgLUX5ohNIMiqCI8vy3nOvqumpAzh2IC3WgTQa35kNaIB0EbuDzGD9JpJOb%2F76MC4bgOoi5rpRIamR8uLWTL1wqb1ySZvROdmGHZ2Je57Ixo0yXyyiUkSG9oDbAfjuBHecc4UlAlns4eDg1NFRs23a4%2FHwI%2BUbC54zjsEY4wN4IazGNQ1aGL26Zv03oaGV13FZM2JmcghcmJNZLWbzZJ6ob2kOTsQLzRSkCPzpcqgTMJ5Sn0zfadbDgNSMDKEZLGB%2BiyntwH2kAEoKJ9OYtx8FqwAlB72Fr6WXis7WkAsVb7SqpQdTiirUo0KpwLOMw2ifGO11C8WPo3CFZ4w1ILAvwY6pgHh4Ln5ODfHKs6lEQFFctnM0fL4i%2FS303QvApQV6DGCujgSI8DGxOu6pgVTiV66wrYGyjdq7RUMVledDoHnXjsvB2KKsMcn2PrLrn8nZFoixHQc%2BQUFMCBx6M2g2Jq%2BNnjAhaIuWmT0iDZcoOmtZtrzOYWcxYJfAoYpWegvk%2BH%2B13G%2BBh3%2FmliYZoPrBxg92EhB9bCXc%2F2VetDzoloFhuXDoHSfm5qx&X-Amz-Signature=3a17ac6e2e82f57c07716e46b6ff200d538bbb91f6246a0143bca0943f039be5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGGKIUE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWABXxhxmJ%2B5B%2ByXCJwY6mtgjDgxNTKcT4BViYc%2FzJ3AiBMPOiSNvy7euTtoiLHlfFoM5fNdkniKDbrSllpY6oBySr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5r6AqMAzCmn2H5J2KtwDE8B9lWkDjBGQdoAF1NnCxl13w8f31qhBPEGm0E3qvECaxpdS4BGTelB4ua2fot3OMDFByT4jVEiveeCYFFO9Wxakr3yhpqU7SA2g09GBjrcgckfj3LMYnV9WbtMNsH0epFDZrUDJ8Qv%2B4G%2FnnRvC6PfYUxlsK2GWctW21wYsBemmX7kQlLDEC5nYHj7jZ%2FZLCLrLRtnffYRggTSDOO3LznyPz%2BMkbwMC0B0uVUViIducXO%2Bi0PEjY5X3j3g3A%2FeFvS1zpzR%2B%2BMh2%2BVZOwWmTsmk5lexN38%2BR8mHIeIFq5OGSgLUX5ohNIMiqCI8vy3nOvqumpAzh2IC3WgTQa35kNaIB0EbuDzGD9JpJOb%2F76MC4bgOoi5rpRIamR8uLWTL1wqb1ySZvROdmGHZ2Je57Ixo0yXyyiUkSG9oDbAfjuBHecc4UlAlns4eDg1NFRs23a4%2FHwI%2BUbC54zjsEY4wN4IazGNQ1aGL26Zv03oaGV13FZM2JmcghcmJNZLWbzZJ6ob2kOTsQLzRSkCPzpcqgTMJ5Sn0zfadbDgNSMDKEZLGB%2BiyntwH2kAEoKJ9OYtx8FqwAlB72Fr6WXis7WkAsVb7SqpQdTiirUo0KpwLOMw2ifGO11C8WPo3CFZ4w1ILAvwY6pgHh4Ln5ODfHKs6lEQFFctnM0fL4i%2FS303QvApQV6DGCujgSI8DGxOu6pgVTiV66wrYGyjdq7RUMVledDoHnXjsvB2KKsMcn2PrLrn8nZFoixHQc%2BQUFMCBx6M2g2Jq%2BNnjAhaIuWmT0iDZcoOmtZtrzOYWcxYJfAoYpWegvk%2BH%2B13G%2BBh3%2FmliYZoPrBxg92EhB9bCXc%2F2VetDzoloFhuXDoHSfm5qx&X-Amz-Signature=7860a0158c51af54674785b6c0c1f7e6319af0b9bec94200611d1df12eca6668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGGKIUE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWABXxhxmJ%2B5B%2ByXCJwY6mtgjDgxNTKcT4BViYc%2FzJ3AiBMPOiSNvy7euTtoiLHlfFoM5fNdkniKDbrSllpY6oBySr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5r6AqMAzCmn2H5J2KtwDE8B9lWkDjBGQdoAF1NnCxl13w8f31qhBPEGm0E3qvECaxpdS4BGTelB4ua2fot3OMDFByT4jVEiveeCYFFO9Wxakr3yhpqU7SA2g09GBjrcgckfj3LMYnV9WbtMNsH0epFDZrUDJ8Qv%2B4G%2FnnRvC6PfYUxlsK2GWctW21wYsBemmX7kQlLDEC5nYHj7jZ%2FZLCLrLRtnffYRggTSDOO3LznyPz%2BMkbwMC0B0uVUViIducXO%2Bi0PEjY5X3j3g3A%2FeFvS1zpzR%2B%2BMh2%2BVZOwWmTsmk5lexN38%2BR8mHIeIFq5OGSgLUX5ohNIMiqCI8vy3nOvqumpAzh2IC3WgTQa35kNaIB0EbuDzGD9JpJOb%2F76MC4bgOoi5rpRIamR8uLWTL1wqb1ySZvROdmGHZ2Je57Ixo0yXyyiUkSG9oDbAfjuBHecc4UlAlns4eDg1NFRs23a4%2FHwI%2BUbC54zjsEY4wN4IazGNQ1aGL26Zv03oaGV13FZM2JmcghcmJNZLWbzZJ6ob2kOTsQLzRSkCPzpcqgTMJ5Sn0zfadbDgNSMDKEZLGB%2BiyntwH2kAEoKJ9OYtx8FqwAlB72Fr6WXis7WkAsVb7SqpQdTiirUo0KpwLOMw2ifGO11C8WPo3CFZ4w1ILAvwY6pgHh4Ln5ODfHKs6lEQFFctnM0fL4i%2FS303QvApQV6DGCujgSI8DGxOu6pgVTiV66wrYGyjdq7RUMVledDoHnXjsvB2KKsMcn2PrLrn8nZFoixHQc%2BQUFMCBx6M2g2Jq%2BNnjAhaIuWmT0iDZcoOmtZtrzOYWcxYJfAoYpWegvk%2BH%2B13G%2BBh3%2FmliYZoPrBxg92EhB9bCXc%2F2VetDzoloFhuXDoHSfm5qx&X-Amz-Signature=7885e36a2356413db2fde6d7ca93714d95966544d40ecd20b1fe8f53a7dcc31b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
