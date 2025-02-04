---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLFLVFS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvNq6ylVfsgKy51WtUvCAfr50QLF4cnmDEG9bQjMw6bAIhAOLmZUvlrGKjZEk9aVuvP%2B%2B%2FQuFW%2Bs7MuyUsRpm8yG8IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdsJ6dcBYnlRif5Ycq3AN2f4uEh8eVtXV9%2BTRcVslMWZ4SoHsmt3JUk8UB8MBC7njs7QvKhWpx4NfGkv05AJZCEB6wG61djg%2FYiKGvriwbltA9uXkG3Pq7gJs2dIEe97YDBXtR49CrjEZDycKGduGqG4mRpz2hX8ikhqOuZg4Hy%2FcAHRVHeSe0h9lG%2BLfS19jEoWMN75cMZpGBfFJGnSrZXFwZpONxxD8Pa9jQ%2F8Xca5BqGxO6vqY3Mry8cD4UHmiaaxCT4ZiBsl98G65RY7BNFnlGBmdjWprF3%2Fd5hKBFNDGtSoeDNeFciypyr2HHwGSuUqm7iG0VAR5934bFkRwmCB58L8XTC6M%2FOQ1TfkCNVSHa9abWgOGy9VqAsLbID45EO1eT5bUjz4Uib4lkjPm1ETjW7KgUCXT2b3HW6ziI%2FOjQ14XLH%2FiHiBW7%2Fc%2FUpt8TgJlDe0PxhwXtN6BT91bibelBcV%2FZowpbDmW22NlGy5lssk%2BFZTvHnRG3VQj4jLvOL2CJMrLmmdEEzLoUmkDGCxsARcxNkbGCUoMqasArpOP4MLntDjZcX8UQT6Bl6dp8bGx1EqGHC1MGdcjqW8fR8J1IETAuI%2Fwl0zi42vLkJ6P%2BBLH%2BduTnlie9GRkdZDPrpyREaCcr6m%2FMKjCkloq9BjqkAfBp3BweBnlub%2FZ77WLtFfjGAxHR2OEuHpbMM78jo93BXYAuEjctZbE9zXcAJbLtZUfhCDilcBRycwx8J8hegxcOFZ3MoOT4Hv8oKKVPh0UsNGQB6J1u3dQSaT0HkxyxlX13B%2BE59Ydw1VVAbj95l9Bm5yMUPZLLzgLOpy30JkSOArQiTQUP2rou1eG7iHSOPmoyPWd3SE8%2BCkMqL5vnC5wu9Q9S&X-Amz-Signature=061a1c84cbfb284565be5298501547b865d565b0c3b70cac219e62dd5461d9df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLFLVFS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvNq6ylVfsgKy51WtUvCAfr50QLF4cnmDEG9bQjMw6bAIhAOLmZUvlrGKjZEk9aVuvP%2B%2B%2FQuFW%2Bs7MuyUsRpm8yG8IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdsJ6dcBYnlRif5Ycq3AN2f4uEh8eVtXV9%2BTRcVslMWZ4SoHsmt3JUk8UB8MBC7njs7QvKhWpx4NfGkv05AJZCEB6wG61djg%2FYiKGvriwbltA9uXkG3Pq7gJs2dIEe97YDBXtR49CrjEZDycKGduGqG4mRpz2hX8ikhqOuZg4Hy%2FcAHRVHeSe0h9lG%2BLfS19jEoWMN75cMZpGBfFJGnSrZXFwZpONxxD8Pa9jQ%2F8Xca5BqGxO6vqY3Mry8cD4UHmiaaxCT4ZiBsl98G65RY7BNFnlGBmdjWprF3%2Fd5hKBFNDGtSoeDNeFciypyr2HHwGSuUqm7iG0VAR5934bFkRwmCB58L8XTC6M%2FOQ1TfkCNVSHa9abWgOGy9VqAsLbID45EO1eT5bUjz4Uib4lkjPm1ETjW7KgUCXT2b3HW6ziI%2FOjQ14XLH%2FiHiBW7%2Fc%2FUpt8TgJlDe0PxhwXtN6BT91bibelBcV%2FZowpbDmW22NlGy5lssk%2BFZTvHnRG3VQj4jLvOL2CJMrLmmdEEzLoUmkDGCxsARcxNkbGCUoMqasArpOP4MLntDjZcX8UQT6Bl6dp8bGx1EqGHC1MGdcjqW8fR8J1IETAuI%2Fwl0zi42vLkJ6P%2BBLH%2BduTnlie9GRkdZDPrpyREaCcr6m%2FMKjCkloq9BjqkAfBp3BweBnlub%2FZ77WLtFfjGAxHR2OEuHpbMM78jo93BXYAuEjctZbE9zXcAJbLtZUfhCDilcBRycwx8J8hegxcOFZ3MoOT4Hv8oKKVPh0UsNGQB6J1u3dQSaT0HkxyxlX13B%2BE59Ydw1VVAbj95l9Bm5yMUPZLLzgLOpy30JkSOArQiTQUP2rou1eG7iHSOPmoyPWd3SE8%2BCkMqL5vnC5wu9Q9S&X-Amz-Signature=9d146d6a7ee35c3ce5176d47856652ec893906417817c65825ba8efd9cd46c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLFLVFS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvNq6ylVfsgKy51WtUvCAfr50QLF4cnmDEG9bQjMw6bAIhAOLmZUvlrGKjZEk9aVuvP%2B%2B%2FQuFW%2Bs7MuyUsRpm8yG8IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdsJ6dcBYnlRif5Ycq3AN2f4uEh8eVtXV9%2BTRcVslMWZ4SoHsmt3JUk8UB8MBC7njs7QvKhWpx4NfGkv05AJZCEB6wG61djg%2FYiKGvriwbltA9uXkG3Pq7gJs2dIEe97YDBXtR49CrjEZDycKGduGqG4mRpz2hX8ikhqOuZg4Hy%2FcAHRVHeSe0h9lG%2BLfS19jEoWMN75cMZpGBfFJGnSrZXFwZpONxxD8Pa9jQ%2F8Xca5BqGxO6vqY3Mry8cD4UHmiaaxCT4ZiBsl98G65RY7BNFnlGBmdjWprF3%2Fd5hKBFNDGtSoeDNeFciypyr2HHwGSuUqm7iG0VAR5934bFkRwmCB58L8XTC6M%2FOQ1TfkCNVSHa9abWgOGy9VqAsLbID45EO1eT5bUjz4Uib4lkjPm1ETjW7KgUCXT2b3HW6ziI%2FOjQ14XLH%2FiHiBW7%2Fc%2FUpt8TgJlDe0PxhwXtN6BT91bibelBcV%2FZowpbDmW22NlGy5lssk%2BFZTvHnRG3VQj4jLvOL2CJMrLmmdEEzLoUmkDGCxsARcxNkbGCUoMqasArpOP4MLntDjZcX8UQT6Bl6dp8bGx1EqGHC1MGdcjqW8fR8J1IETAuI%2Fwl0zi42vLkJ6P%2BBLH%2BduTnlie9GRkdZDPrpyREaCcr6m%2FMKjCkloq9BjqkAfBp3BweBnlub%2FZ77WLtFfjGAxHR2OEuHpbMM78jo93BXYAuEjctZbE9zXcAJbLtZUfhCDilcBRycwx8J8hegxcOFZ3MoOT4Hv8oKKVPh0UsNGQB6J1u3dQSaT0HkxyxlX13B%2BE59Ydw1VVAbj95l9Bm5yMUPZLLzgLOpy30JkSOArQiTQUP2rou1eG7iHSOPmoyPWd3SE8%2BCkMqL5vnC5wu9Q9S&X-Amz-Signature=0e8a1679b7c932d87654af347566b75965c26349f90e032903872f690b354eee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
