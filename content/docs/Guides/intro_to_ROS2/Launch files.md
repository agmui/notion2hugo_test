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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNGTDXA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYFkrf7a3x%2F09clER1L9gZ285LRS9O7IJ3GlRszyiWoQIhANFvP%2FXtnbkW0udCSI7J3EXORwgiLhS4kIpfH%2BaSJ19PKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylvYnAJGpN%2BbYqlQQq3AP9ePumqnpMQeM3mqs%2BGXRq8ydZD72ZcJz2vInGPaE3G8NQsz53drhuAWODrbDA6mg58b6W5nkO8xXVCw8XcMYZuj9H03M%2Fgnp0MKaXHjMZE1edVU2LG2Ua7PMxWrJe7FwnqYMS1f53otbgxKLiocglo5SzlItH%2BupZv7PAcn3hFE64dgJ16ntqBR2JlZbYhDIhhqBdlJWvvThBmUJOqcd9qPgFDvuSkYe%2FXyc2Dr6YFdog0ivxZxJ4gUq2s25WdEWBEHuNgGjl0alU2%2FJIt8FkZOvq88aWUNkKVxMcPKtDII3rbFz5%2FgjQHkY42JuK4QKz4JPMGfjZGEUA3UbgIJMj6YH8BiFwgF28ywLJ2IZXUWlouoCpDd2bTFCtkNT%2Bk9hlE0dygkJ%2BT%2Ftd9dy5%2B33JqLCC9qROsok2%2F%2FSt2OyMo05T%2BPMWGxJZkcQd29gbQWEy9lqXGBAk%2BRbiz9wo7548j8pM0cqtRhHTGx7tIJvysBT5sd%2BSTfgwiSPR2J2Tb5fiGXODygEHf7U%2BCzxljqHl2rHfia4BWReuCf7pv%2BLundyU8CD94HuSu4592u2EXL3IafvxaKXlerfYft3KszJfj0izaz7X45%2FwNd31xmzahKnKlO6cpPNBvUk4jzCy387CBjqkAWMwaJJTp4peGcyS161aKXn%2BQfDioZ4MV9rTp%2Bs4faRb3efvBhqdys2Obqi2l7KFw7fFSN%2BqvLnAcFH%2B2VNmJ%2Bet%2Ft5kRsXbzhYD7D0WAicIoKwm%2FMJ7VOddNh08vjQRwfmJKCdV%2Fj%2FOYg9cV5Ynw7S3M46ppwgs6JRfPJ0SGkVpov4fYVaCbvCBRfhP%2BBZhCeOy8TottfK%2BLnyQK7h3acJjSL4i&X-Amz-Signature=b63098fc65d52990a35cca8b384d0d9049270e8f3c2facc4887e27daca846386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNGTDXA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYFkrf7a3x%2F09clER1L9gZ285LRS9O7IJ3GlRszyiWoQIhANFvP%2FXtnbkW0udCSI7J3EXORwgiLhS4kIpfH%2BaSJ19PKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylvYnAJGpN%2BbYqlQQq3AP9ePumqnpMQeM3mqs%2BGXRq8ydZD72ZcJz2vInGPaE3G8NQsz53drhuAWODrbDA6mg58b6W5nkO8xXVCw8XcMYZuj9H03M%2Fgnp0MKaXHjMZE1edVU2LG2Ua7PMxWrJe7FwnqYMS1f53otbgxKLiocglo5SzlItH%2BupZv7PAcn3hFE64dgJ16ntqBR2JlZbYhDIhhqBdlJWvvThBmUJOqcd9qPgFDvuSkYe%2FXyc2Dr6YFdog0ivxZxJ4gUq2s25WdEWBEHuNgGjl0alU2%2FJIt8FkZOvq88aWUNkKVxMcPKtDII3rbFz5%2FgjQHkY42JuK4QKz4JPMGfjZGEUA3UbgIJMj6YH8BiFwgF28ywLJ2IZXUWlouoCpDd2bTFCtkNT%2Bk9hlE0dygkJ%2BT%2Ftd9dy5%2B33JqLCC9qROsok2%2F%2FSt2OyMo05T%2BPMWGxJZkcQd29gbQWEy9lqXGBAk%2BRbiz9wo7548j8pM0cqtRhHTGx7tIJvysBT5sd%2BSTfgwiSPR2J2Tb5fiGXODygEHf7U%2BCzxljqHl2rHfia4BWReuCf7pv%2BLundyU8CD94HuSu4592u2EXL3IafvxaKXlerfYft3KszJfj0izaz7X45%2FwNd31xmzahKnKlO6cpPNBvUk4jzCy387CBjqkAWMwaJJTp4peGcyS161aKXn%2BQfDioZ4MV9rTp%2Bs4faRb3efvBhqdys2Obqi2l7KFw7fFSN%2BqvLnAcFH%2B2VNmJ%2Bet%2Ft5kRsXbzhYD7D0WAicIoKwm%2FMJ7VOddNh08vjQRwfmJKCdV%2Fj%2FOYg9cV5Ynw7S3M46ppwgs6JRfPJ0SGkVpov4fYVaCbvCBRfhP%2BBZhCeOy8TottfK%2BLnyQK7h3acJjSL4i&X-Amz-Signature=ba620d24edc49f65e7432a627d65934895faf559a225938ad576bf0016d221a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNGTDXA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYFkrf7a3x%2F09clER1L9gZ285LRS9O7IJ3GlRszyiWoQIhANFvP%2FXtnbkW0udCSI7J3EXORwgiLhS4kIpfH%2BaSJ19PKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylvYnAJGpN%2BbYqlQQq3AP9ePumqnpMQeM3mqs%2BGXRq8ydZD72ZcJz2vInGPaE3G8NQsz53drhuAWODrbDA6mg58b6W5nkO8xXVCw8XcMYZuj9H03M%2Fgnp0MKaXHjMZE1edVU2LG2Ua7PMxWrJe7FwnqYMS1f53otbgxKLiocglo5SzlItH%2BupZv7PAcn3hFE64dgJ16ntqBR2JlZbYhDIhhqBdlJWvvThBmUJOqcd9qPgFDvuSkYe%2FXyc2Dr6YFdog0ivxZxJ4gUq2s25WdEWBEHuNgGjl0alU2%2FJIt8FkZOvq88aWUNkKVxMcPKtDII3rbFz5%2FgjQHkY42JuK4QKz4JPMGfjZGEUA3UbgIJMj6YH8BiFwgF28ywLJ2IZXUWlouoCpDd2bTFCtkNT%2Bk9hlE0dygkJ%2BT%2Ftd9dy5%2B33JqLCC9qROsok2%2F%2FSt2OyMo05T%2BPMWGxJZkcQd29gbQWEy9lqXGBAk%2BRbiz9wo7548j8pM0cqtRhHTGx7tIJvysBT5sd%2BSTfgwiSPR2J2Tb5fiGXODygEHf7U%2BCzxljqHl2rHfia4BWReuCf7pv%2BLundyU8CD94HuSu4592u2EXL3IafvxaKXlerfYft3KszJfj0izaz7X45%2FwNd31xmzahKnKlO6cpPNBvUk4jzCy387CBjqkAWMwaJJTp4peGcyS161aKXn%2BQfDioZ4MV9rTp%2Bs4faRb3efvBhqdys2Obqi2l7KFw7fFSN%2BqvLnAcFH%2B2VNmJ%2Bet%2Ft5kRsXbzhYD7D0WAicIoKwm%2FMJ7VOddNh08vjQRwfmJKCdV%2Fj%2FOYg9cV5Ynw7S3M46ppwgs6JRfPJ0SGkVpov4fYVaCbvCBRfhP%2BBZhCeOy8TottfK%2BLnyQK7h3acJjSL4i&X-Amz-Signature=0c89309e7490e287089675d086e77f1015aad4ecd03e561b5f7703e45cd919ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
