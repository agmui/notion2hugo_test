---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5AIB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIgWtA%2FNivzmH8szyJ3RUyiuebgHtaiPeoWNoy9%2FXAgIhAIZA7oo0QvaY60YXsGrpxgf%2FPA5vXBHRAeRqPrxPDK1YKv8DCEEQABoMNjM3NDIzMTgzODA1Igz2Uoih4LRwhX5uKhUq3AOfQwlwuVtP8xfB5tVViDR69ZWOVeEkE73kjOC%2FT6HNe8YNNnR8u%2Bg20H0xzD1ZwNZucHX9BaDTwwnqoSXVn7kE6KfHwqNxQk4PnXWY8P3%2BkFEgU7AJCD7suRpThBZuaDFpCFHnUNOukki8t2UUq72ofY6cId3cSTKlQuib%2FopHzPH0pZzWAgy2X4Gpl8JRUmbaoFj4DNELdLTQbaoGJfFeOvis1%2FEHCMNA56SvpR2cv64NeSp2NzuEpxN3%2BS4gdYo3fV8YLo%2FodUAmAJlRLtvvFwoLIHZaV3auwbGrwkX2yNqEU%2BBYR2LIUBHSmMo9h%2FzlIZZMoawl%2FyS0PwOkQ7xciibqnNeAVJa8RWt22Pgp7DUAIpq%2FvosHAMfW6ZmLzFF2T4PDBZMUpd4aPKtOMp7rSUky0REa5ueZo%2BGLRPsEwhsEImawv9i3vIfER1P1fhWY2r2WweyaSC8Co0eY8WVpVs%2BAacr%2BapCcKVm4nZ4RE48C8v9Q1m7djduwGdxNAuBLZ6CBw3j2OdV%2F0Xq8KJ2WoXkH%2FCvYF%2Fts%2B0rLmhwwExfNMNwGZ7th98k7rDD2BMO4IVEP1W8ys5JGOFkVFeA%2FvETkAghQApc0ZQM9fypfHAse8dFcLp3Zr82JEzCQr%2FbEBjqkAc%2Bb%2BbLBT5b82WxfMVNFP5CX%2BYCorK5844sCL6lZxUD7Dza5SGJ0S6r7goiIpsbJBWiMv2iLrV5TCwbx7DqI6u8FISJDcE5ZcMxDK0OqsM205mRHVxO4ZT1oWx0u8uk4%2BgMOktziWlm%2FSCjUQ386Aj6Y7eYPAvEazkHhECToDenQ%2B14YXG7pTLMsyaf5q%2FOoy5RRnSqMMy%2BeTpe70GtcOe8b%2BGOh&X-Amz-Signature=31cb46524fbcedfce9165319bb4c5948efedbf861b451b81536f29abcd83911b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5AIB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIgWtA%2FNivzmH8szyJ3RUyiuebgHtaiPeoWNoy9%2FXAgIhAIZA7oo0QvaY60YXsGrpxgf%2FPA5vXBHRAeRqPrxPDK1YKv8DCEEQABoMNjM3NDIzMTgzODA1Igz2Uoih4LRwhX5uKhUq3AOfQwlwuVtP8xfB5tVViDR69ZWOVeEkE73kjOC%2FT6HNe8YNNnR8u%2Bg20H0xzD1ZwNZucHX9BaDTwwnqoSXVn7kE6KfHwqNxQk4PnXWY8P3%2BkFEgU7AJCD7suRpThBZuaDFpCFHnUNOukki8t2UUq72ofY6cId3cSTKlQuib%2FopHzPH0pZzWAgy2X4Gpl8JRUmbaoFj4DNELdLTQbaoGJfFeOvis1%2FEHCMNA56SvpR2cv64NeSp2NzuEpxN3%2BS4gdYo3fV8YLo%2FodUAmAJlRLtvvFwoLIHZaV3auwbGrwkX2yNqEU%2BBYR2LIUBHSmMo9h%2FzlIZZMoawl%2FyS0PwOkQ7xciibqnNeAVJa8RWt22Pgp7DUAIpq%2FvosHAMfW6ZmLzFF2T4PDBZMUpd4aPKtOMp7rSUky0REa5ueZo%2BGLRPsEwhsEImawv9i3vIfER1P1fhWY2r2WweyaSC8Co0eY8WVpVs%2BAacr%2BapCcKVm4nZ4RE48C8v9Q1m7djduwGdxNAuBLZ6CBw3j2OdV%2F0Xq8KJ2WoXkH%2FCvYF%2Fts%2B0rLmhwwExfNMNwGZ7th98k7rDD2BMO4IVEP1W8ys5JGOFkVFeA%2FvETkAghQApc0ZQM9fypfHAse8dFcLp3Zr82JEzCQr%2FbEBjqkAc%2Bb%2BbLBT5b82WxfMVNFP5CX%2BYCorK5844sCL6lZxUD7Dza5SGJ0S6r7goiIpsbJBWiMv2iLrV5TCwbx7DqI6u8FISJDcE5ZcMxDK0OqsM205mRHVxO4ZT1oWx0u8uk4%2BgMOktziWlm%2FSCjUQ386Aj6Y7eYPAvEazkHhECToDenQ%2B14YXG7pTLMsyaf5q%2FOoy5RRnSqMMy%2BeTpe70GtcOe8b%2BGOh&X-Amz-Signature=35e1a0b5a8613a968d0db3eb7c87557a3b85509ff1fdf4a548ba6e9d22e29ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5AIB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIgWtA%2FNivzmH8szyJ3RUyiuebgHtaiPeoWNoy9%2FXAgIhAIZA7oo0QvaY60YXsGrpxgf%2FPA5vXBHRAeRqPrxPDK1YKv8DCEEQABoMNjM3NDIzMTgzODA1Igz2Uoih4LRwhX5uKhUq3AOfQwlwuVtP8xfB5tVViDR69ZWOVeEkE73kjOC%2FT6HNe8YNNnR8u%2Bg20H0xzD1ZwNZucHX9BaDTwwnqoSXVn7kE6KfHwqNxQk4PnXWY8P3%2BkFEgU7AJCD7suRpThBZuaDFpCFHnUNOukki8t2UUq72ofY6cId3cSTKlQuib%2FopHzPH0pZzWAgy2X4Gpl8JRUmbaoFj4DNELdLTQbaoGJfFeOvis1%2FEHCMNA56SvpR2cv64NeSp2NzuEpxN3%2BS4gdYo3fV8YLo%2FodUAmAJlRLtvvFwoLIHZaV3auwbGrwkX2yNqEU%2BBYR2LIUBHSmMo9h%2FzlIZZMoawl%2FyS0PwOkQ7xciibqnNeAVJa8RWt22Pgp7DUAIpq%2FvosHAMfW6ZmLzFF2T4PDBZMUpd4aPKtOMp7rSUky0REa5ueZo%2BGLRPsEwhsEImawv9i3vIfER1P1fhWY2r2WweyaSC8Co0eY8WVpVs%2BAacr%2BapCcKVm4nZ4RE48C8v9Q1m7djduwGdxNAuBLZ6CBw3j2OdV%2F0Xq8KJ2WoXkH%2FCvYF%2Fts%2B0rLmhwwExfNMNwGZ7th98k7rDD2BMO4IVEP1W8ys5JGOFkVFeA%2FvETkAghQApc0ZQM9fypfHAse8dFcLp3Zr82JEzCQr%2FbEBjqkAc%2Bb%2BbLBT5b82WxfMVNFP5CX%2BYCorK5844sCL6lZxUD7Dza5SGJ0S6r7goiIpsbJBWiMv2iLrV5TCwbx7DqI6u8FISJDcE5ZcMxDK0OqsM205mRHVxO4ZT1oWx0u8uk4%2BgMOktziWlm%2FSCjUQ386Aj6Y7eYPAvEazkHhECToDenQ%2B14YXG7pTLMsyaf5q%2FOoy5RRnSqMMy%2BeTpe70GtcOe8b%2BGOh&X-Amz-Signature=95afe010bc290ad26cddc1c23d9988e3a63796741369debbaad009b7449d6b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
