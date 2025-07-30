---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5X6GE22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDldI25qwYgUB4ZQStP4qrpgDDXJT604%2FVkNP9oMzOTqAiAn7wTdM%2F0DzYPNG2TJsmEtVsoBucV7kuWTqQ1LrYcM1yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhjWKeQpiuwsGRTyKtwDhsV9xuypKReSt1xItzmwmw2zXyUqA9JTHNmNgOTmk1CKtVFUMsH4dhi8kKueixcI2LkeKEpfUMVmM3jJMhE%2FDVZCfWrLShvX%2BKu7RwlynhmYruwfkkqN%2F6Dvs0oKtzwdGLN7hQ81NAa66A89RL%2BGc6xYRFxCehokpHi7o3daEj4q7Beh1AsPJbDlBgbuiG4kYcxDX6XeQ%2BuAVhLWHxAA6hf5y5cxX%2Fk9SywW0DLQ9eMcJyBevXyRQXnvuRSitlvv8OwwX3g9QCfWbdZekCjUQhOIW%2BHTsUfB%2FOgyWUgmH8rJ8TsNcc1NbyYgv74DaA%2Fuii%2FL5HsOrcarVz%2BOprj0qXLFy73LBJx7KmV%2FAUZEpbw2%2BYpZji%2BYyIDjXQAWGxZ%2B5%2FXrxD6G2LjfKAKX%2Bc04PqDfhDli8NbTkmZFNdZZUT2w11RnRS49MzlH583okVccCXDg6gMyclq2178pyOHXd0QSSShsVNxdxP81618tg%2B3APhyvEfXl93gX%2FSG4zf%2BxYfl6PBB0HKdeove7sb1FbV9z3cj%2FrOvhr37gfoVQZizvfLX668RZb3lQe6B6bTl0KgBkcLUvyEpe7tqzdft%2BqkN8aHlCqFO5Fmi8hoOGTHNUPlsfEZ%2FFYxqCcvww97elxAY6pgFo8JUU%2B4XDUzE9OoLwCE8L1rmKRkJx%2BXaDyFOcoIXnXJYISF2mVXYB2ARDD8QHUMjKRD2XoeCFciL4noCwkFxNh%2Bz9zLzh5HCQuE3qWtFd1xqAN56uGtIYhzhZYDlFuRlRFSAqKb1Y1A5KItnD9%2FNCuxwGBxu%2BS4mWqlt5nSHoY2RG%2F330yP%2FYmfliwv110yXNsrZrwXBqliBDriX3X5z9bILNOTAz&X-Amz-Signature=a08e529d082f996da64048f8d6e94f8ee387fa2dbd94a88099eae0bd808c77be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5X6GE22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDldI25qwYgUB4ZQStP4qrpgDDXJT604%2FVkNP9oMzOTqAiAn7wTdM%2F0DzYPNG2TJsmEtVsoBucV7kuWTqQ1LrYcM1yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhjWKeQpiuwsGRTyKtwDhsV9xuypKReSt1xItzmwmw2zXyUqA9JTHNmNgOTmk1CKtVFUMsH4dhi8kKueixcI2LkeKEpfUMVmM3jJMhE%2FDVZCfWrLShvX%2BKu7RwlynhmYruwfkkqN%2F6Dvs0oKtzwdGLN7hQ81NAa66A89RL%2BGc6xYRFxCehokpHi7o3daEj4q7Beh1AsPJbDlBgbuiG4kYcxDX6XeQ%2BuAVhLWHxAA6hf5y5cxX%2Fk9SywW0DLQ9eMcJyBevXyRQXnvuRSitlvv8OwwX3g9QCfWbdZekCjUQhOIW%2BHTsUfB%2FOgyWUgmH8rJ8TsNcc1NbyYgv74DaA%2Fuii%2FL5HsOrcarVz%2BOprj0qXLFy73LBJx7KmV%2FAUZEpbw2%2BYpZji%2BYyIDjXQAWGxZ%2B5%2FXrxD6G2LjfKAKX%2Bc04PqDfhDli8NbTkmZFNdZZUT2w11RnRS49MzlH583okVccCXDg6gMyclq2178pyOHXd0QSSShsVNxdxP81618tg%2B3APhyvEfXl93gX%2FSG4zf%2BxYfl6PBB0HKdeove7sb1FbV9z3cj%2FrOvhr37gfoVQZizvfLX668RZb3lQe6B6bTl0KgBkcLUvyEpe7tqzdft%2BqkN8aHlCqFO5Fmi8hoOGTHNUPlsfEZ%2FFYxqCcvww97elxAY6pgFo8JUU%2B4XDUzE9OoLwCE8L1rmKRkJx%2BXaDyFOcoIXnXJYISF2mVXYB2ARDD8QHUMjKRD2XoeCFciL4noCwkFxNh%2Bz9zLzh5HCQuE3qWtFd1xqAN56uGtIYhzhZYDlFuRlRFSAqKb1Y1A5KItnD9%2FNCuxwGBxu%2BS4mWqlt5nSHoY2RG%2F330yP%2FYmfliwv110yXNsrZrwXBqliBDriX3X5z9bILNOTAz&X-Amz-Signature=73bb5eb54503088b1cf695ad5916ac0de88ce90962b9d864ece542a5189676ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5X6GE22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDldI25qwYgUB4ZQStP4qrpgDDXJT604%2FVkNP9oMzOTqAiAn7wTdM%2F0DzYPNG2TJsmEtVsoBucV7kuWTqQ1LrYcM1yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhjWKeQpiuwsGRTyKtwDhsV9xuypKReSt1xItzmwmw2zXyUqA9JTHNmNgOTmk1CKtVFUMsH4dhi8kKueixcI2LkeKEpfUMVmM3jJMhE%2FDVZCfWrLShvX%2BKu7RwlynhmYruwfkkqN%2F6Dvs0oKtzwdGLN7hQ81NAa66A89RL%2BGc6xYRFxCehokpHi7o3daEj4q7Beh1AsPJbDlBgbuiG4kYcxDX6XeQ%2BuAVhLWHxAA6hf5y5cxX%2Fk9SywW0DLQ9eMcJyBevXyRQXnvuRSitlvv8OwwX3g9QCfWbdZekCjUQhOIW%2BHTsUfB%2FOgyWUgmH8rJ8TsNcc1NbyYgv74DaA%2Fuii%2FL5HsOrcarVz%2BOprj0qXLFy73LBJx7KmV%2FAUZEpbw2%2BYpZji%2BYyIDjXQAWGxZ%2B5%2FXrxD6G2LjfKAKX%2Bc04PqDfhDli8NbTkmZFNdZZUT2w11RnRS49MzlH583okVccCXDg6gMyclq2178pyOHXd0QSSShsVNxdxP81618tg%2B3APhyvEfXl93gX%2FSG4zf%2BxYfl6PBB0HKdeove7sb1FbV9z3cj%2FrOvhr37gfoVQZizvfLX668RZb3lQe6B6bTl0KgBkcLUvyEpe7tqzdft%2BqkN8aHlCqFO5Fmi8hoOGTHNUPlsfEZ%2FFYxqCcvww97elxAY6pgFo8JUU%2B4XDUzE9OoLwCE8L1rmKRkJx%2BXaDyFOcoIXnXJYISF2mVXYB2ARDD8QHUMjKRD2XoeCFciL4noCwkFxNh%2Bz9zLzh5HCQuE3qWtFd1xqAN56uGtIYhzhZYDlFuRlRFSAqKb1Y1A5KItnD9%2FNCuxwGBxu%2BS4mWqlt5nSHoY2RG%2F330yP%2FYmfliwv110yXNsrZrwXBqliBDriX3X5z9bILNOTAz&X-Amz-Signature=e40d8c7a33041b1cc8e3bc26514be5ecec83312e2f4d3664b0264aab89cd1dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
