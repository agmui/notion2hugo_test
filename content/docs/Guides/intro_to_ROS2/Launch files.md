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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBGEPWZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKCR2x6%2B417jsbQblN1W8K2MVguNt8Sso%2FO42bWYOU1AiA%2FFBp45TMnqIUkJIVukwS%2B7LI1d9mhTRDj0VZr7LNgMyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHa08w7M5rQaKyP%2FtKtwD16Fgu6DBX1QPYAh%2BwohRrvGk2w11PAseaZgkd7peWsD1UJJrjCttU%2B3g6s5lp2Tdjf8UqJTMHJ%2Bz5DJfE%2F89L5x3N%2FVm0lkE7RdD3wPUdydJhpRi8uXxxc0gS7MVEObdKk5ACOiW2So%2BbBkbhlJmp9eLa37GbLYs2J6Q%2FuHoy1bFuTLajt6WScT6N8xNNgW3b1tYRXOy3Hh8FIyThGxXcKSXD7JboHE7LYpUdmZpyGFidWoQFDm4VQ5bUpGPvzDc8oyCaCMlLIgpil7EOLbHYtcVJfHwHYvjAwZqjgzuQ9qHnd%2FwaCbLde1OQJ6Kmt7w4GcYeGbPFbty%2BOVALHTiB4%2B7KanZ2izO0AZsacB8xX5tSckvBgXoQWJbJPP82moY%2BXKvILailgvylndFaKIr3Y0SFOU4zPmhJefN0ewf1ixf1G0ahcIHEViOiEwOg%2BuN39Gk8G%2BHhav04GXE3XvDIL2d8l3lqDahatE%2Bb5edn%2FspXLGRsFAnS5SOigThjmu5zU9EjB4%2Bq3tdypNo5xYBIX5IbvJn4kxljihzgs9miR%2FY%2BuDvF5%2BSLjKSO0%2BS%2F2wSZzfdKDOn5oyR6h2X550m%2BmRhWLWeQG7MY9R3qYTINCHtPqaIY2IiBqLg5agwlLqUwwY6pgGnIZdIEizTSffVjxlaC5VJxhtxWqC3z5qUuWNUNB36DSAU9D0LgEDnV%2FlUGvEWgDg5m0XWExXmVn%2BF6clwYvuJu3SgpBTg4VH7dujLa7TYDSM0k7I9fdtGFOKY6pHpAtwKoyySIr32B9DARiFZoh34fdRu0QFI0Qp%2BLoVpkJq43wh7BLdWaQ5KHbZonxZGHZuNcWwKNMJBZ29L3buxmOGdA8%2BH2muy&X-Amz-Signature=73081ee591ec5bf4af4ea5f0a714179c990f510d0cf3d3e6932c8c488df8c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBGEPWZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKCR2x6%2B417jsbQblN1W8K2MVguNt8Sso%2FO42bWYOU1AiA%2FFBp45TMnqIUkJIVukwS%2B7LI1d9mhTRDj0VZr7LNgMyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHa08w7M5rQaKyP%2FtKtwD16Fgu6DBX1QPYAh%2BwohRrvGk2w11PAseaZgkd7peWsD1UJJrjCttU%2B3g6s5lp2Tdjf8UqJTMHJ%2Bz5DJfE%2F89L5x3N%2FVm0lkE7RdD3wPUdydJhpRi8uXxxc0gS7MVEObdKk5ACOiW2So%2BbBkbhlJmp9eLa37GbLYs2J6Q%2FuHoy1bFuTLajt6WScT6N8xNNgW3b1tYRXOy3Hh8FIyThGxXcKSXD7JboHE7LYpUdmZpyGFidWoQFDm4VQ5bUpGPvzDc8oyCaCMlLIgpil7EOLbHYtcVJfHwHYvjAwZqjgzuQ9qHnd%2FwaCbLde1OQJ6Kmt7w4GcYeGbPFbty%2BOVALHTiB4%2B7KanZ2izO0AZsacB8xX5tSckvBgXoQWJbJPP82moY%2BXKvILailgvylndFaKIr3Y0SFOU4zPmhJefN0ewf1ixf1G0ahcIHEViOiEwOg%2BuN39Gk8G%2BHhav04GXE3XvDIL2d8l3lqDahatE%2Bb5edn%2FspXLGRsFAnS5SOigThjmu5zU9EjB4%2Bq3tdypNo5xYBIX5IbvJn4kxljihzgs9miR%2FY%2BuDvF5%2BSLjKSO0%2BS%2F2wSZzfdKDOn5oyR6h2X550m%2BmRhWLWeQG7MY9R3qYTINCHtPqaIY2IiBqLg5agwlLqUwwY6pgGnIZdIEizTSffVjxlaC5VJxhtxWqC3z5qUuWNUNB36DSAU9D0LgEDnV%2FlUGvEWgDg5m0XWExXmVn%2BF6clwYvuJu3SgpBTg4VH7dujLa7TYDSM0k7I9fdtGFOKY6pHpAtwKoyySIr32B9DARiFZoh34fdRu0QFI0Qp%2BLoVpkJq43wh7BLdWaQ5KHbZonxZGHZuNcWwKNMJBZ29L3buxmOGdA8%2BH2muy&X-Amz-Signature=ba56390db739a6ac1a474672171f458735109abeb4e45ea930df7d30dc90ffe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBGEPWZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKCR2x6%2B417jsbQblN1W8K2MVguNt8Sso%2FO42bWYOU1AiA%2FFBp45TMnqIUkJIVukwS%2B7LI1d9mhTRDj0VZr7LNgMyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHa08w7M5rQaKyP%2FtKtwD16Fgu6DBX1QPYAh%2BwohRrvGk2w11PAseaZgkd7peWsD1UJJrjCttU%2B3g6s5lp2Tdjf8UqJTMHJ%2Bz5DJfE%2F89L5x3N%2FVm0lkE7RdD3wPUdydJhpRi8uXxxc0gS7MVEObdKk5ACOiW2So%2BbBkbhlJmp9eLa37GbLYs2J6Q%2FuHoy1bFuTLajt6WScT6N8xNNgW3b1tYRXOy3Hh8FIyThGxXcKSXD7JboHE7LYpUdmZpyGFidWoQFDm4VQ5bUpGPvzDc8oyCaCMlLIgpil7EOLbHYtcVJfHwHYvjAwZqjgzuQ9qHnd%2FwaCbLde1OQJ6Kmt7w4GcYeGbPFbty%2BOVALHTiB4%2B7KanZ2izO0AZsacB8xX5tSckvBgXoQWJbJPP82moY%2BXKvILailgvylndFaKIr3Y0SFOU4zPmhJefN0ewf1ixf1G0ahcIHEViOiEwOg%2BuN39Gk8G%2BHhav04GXE3XvDIL2d8l3lqDahatE%2Bb5edn%2FspXLGRsFAnS5SOigThjmu5zU9EjB4%2Bq3tdypNo5xYBIX5IbvJn4kxljihzgs9miR%2FY%2BuDvF5%2BSLjKSO0%2BS%2F2wSZzfdKDOn5oyR6h2X550m%2BmRhWLWeQG7MY9R3qYTINCHtPqaIY2IiBqLg5agwlLqUwwY6pgGnIZdIEizTSffVjxlaC5VJxhtxWqC3z5qUuWNUNB36DSAU9D0LgEDnV%2FlUGvEWgDg5m0XWExXmVn%2BF6clwYvuJu3SgpBTg4VH7dujLa7TYDSM0k7I9fdtGFOKY6pHpAtwKoyySIr32B9DARiFZoh34fdRu0QFI0Qp%2BLoVpkJq43wh7BLdWaQ5KHbZonxZGHZuNcWwKNMJBZ29L3buxmOGdA8%2BH2muy&X-Amz-Signature=fa97c1cbbb1a75a975c3bb1bafc6d778e8052b822d4f4fd486796c39a851c485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
