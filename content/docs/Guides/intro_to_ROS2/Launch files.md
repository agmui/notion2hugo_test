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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAF5MD5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCOuM6mGctifHwP1O1SiD50LT%2BIAf%2FRso%2F9nKnS8p6tLAIgGJj61hg3T9f3F3R3dB2in3F3SnWPnCjACsrqxdQpw5kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLuFDusO20zYHMrZCyrcA7x%2BLcrxaVWUofTEIoBupCG9VmpVNl6CK66UNuruDVz7X4KaDjN2TUYw6DrMNFVuxJd6FaIEmsTuKEMYbv0unA0%2FuZYFj4ZAVVeqcctxMiEF%2Bu3Hc7rOXWv3g8xH6oYUVpxbbASVydyFz6oTqBLUnWMjrh%2FvgX2vpBUu20tLdVFX%2B8z8RhgxIqTXQAGEP52NaT4aiC1ySnFKlE4PFLwihmNrZl%2FMidFrw8yxuNxFBhZvk2zHeop%2F2CYvO4p0dYCikXHuaKcSskZA6YMhnICYxtozN0e1gZFvhMNnlj%2FpEFTAGzrCRNEdWB%2F2X26lMrRjB3BSF7EOvCjM8WDGRcSmbC4nOn3UUeXpIccW3%2Fk%2Fn7lMBbeBKCuPhY8YUtmsjkkGzGzyFJDwoHxhH5UXnC3tzR3Ha4Znn4oulhx7sI%2BB43bEfcsklF6mffhcGQhE9yC7TQly2pW1hJlt3t8T0JPWWA0UB5U450oa6klNHeYNK7GhgxGAzVkxyRU1hoO0aTgJFcpvg7HBby2p5zy6Lja3qDbx%2Fi8MiXpN0LwfIX0PCoS8vKASYodWuy19w8rYaD%2FksqfexClo3X0N7vjVIt95kOnwzWXIfwchNNpHBvRE%2Bw4FaXd7yrDSV3sr9hE4MOSU5r4GOqUBA7ELvSE3ZzOd93fx4PQAFmPKXGO5m4rKw3hDpJ7a0iMrv9dekyqIkEOyzvUIoTzVgz7zY870QG5JiKo2O%2BMRZr7%2FuMDjihpOTx2g9XL87NJxCAlakm8zdkzdQkA%2BC6yVEXURnkv427dc2lLBbFYifsxAN1zYaDO9PSlF69ZiFTnNugAY7vIr%2BwWOgu2CNg%2FWo8m357xIjvxrmsWGg2dC0RDaE%2B6X&X-Amz-Signature=b4f1548ae8351ddd4bdfa9594aec3ad9d97b5b88ea554f25d5df0aaa391553a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAF5MD5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCOuM6mGctifHwP1O1SiD50LT%2BIAf%2FRso%2F9nKnS8p6tLAIgGJj61hg3T9f3F3R3dB2in3F3SnWPnCjACsrqxdQpw5kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLuFDusO20zYHMrZCyrcA7x%2BLcrxaVWUofTEIoBupCG9VmpVNl6CK66UNuruDVz7X4KaDjN2TUYw6DrMNFVuxJd6FaIEmsTuKEMYbv0unA0%2FuZYFj4ZAVVeqcctxMiEF%2Bu3Hc7rOXWv3g8xH6oYUVpxbbASVydyFz6oTqBLUnWMjrh%2FvgX2vpBUu20tLdVFX%2B8z8RhgxIqTXQAGEP52NaT4aiC1ySnFKlE4PFLwihmNrZl%2FMidFrw8yxuNxFBhZvk2zHeop%2F2CYvO4p0dYCikXHuaKcSskZA6YMhnICYxtozN0e1gZFvhMNnlj%2FpEFTAGzrCRNEdWB%2F2X26lMrRjB3BSF7EOvCjM8WDGRcSmbC4nOn3UUeXpIccW3%2Fk%2Fn7lMBbeBKCuPhY8YUtmsjkkGzGzyFJDwoHxhH5UXnC3tzR3Ha4Znn4oulhx7sI%2BB43bEfcsklF6mffhcGQhE9yC7TQly2pW1hJlt3t8T0JPWWA0UB5U450oa6klNHeYNK7GhgxGAzVkxyRU1hoO0aTgJFcpvg7HBby2p5zy6Lja3qDbx%2Fi8MiXpN0LwfIX0PCoS8vKASYodWuy19w8rYaD%2FksqfexClo3X0N7vjVIt95kOnwzWXIfwchNNpHBvRE%2Bw4FaXd7yrDSV3sr9hE4MOSU5r4GOqUBA7ELvSE3ZzOd93fx4PQAFmPKXGO5m4rKw3hDpJ7a0iMrv9dekyqIkEOyzvUIoTzVgz7zY870QG5JiKo2O%2BMRZr7%2FuMDjihpOTx2g9XL87NJxCAlakm8zdkzdQkA%2BC6yVEXURnkv427dc2lLBbFYifsxAN1zYaDO9PSlF69ZiFTnNugAY7vIr%2BwWOgu2CNg%2FWo8m357xIjvxrmsWGg2dC0RDaE%2B6X&X-Amz-Signature=8c9646e65020f58a54a8a096943da8d8b4f4c981d05e67d4428a76b5a62e43f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAF5MD5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCOuM6mGctifHwP1O1SiD50LT%2BIAf%2FRso%2F9nKnS8p6tLAIgGJj61hg3T9f3F3R3dB2in3F3SnWPnCjACsrqxdQpw5kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLuFDusO20zYHMrZCyrcA7x%2BLcrxaVWUofTEIoBupCG9VmpVNl6CK66UNuruDVz7X4KaDjN2TUYw6DrMNFVuxJd6FaIEmsTuKEMYbv0unA0%2FuZYFj4ZAVVeqcctxMiEF%2Bu3Hc7rOXWv3g8xH6oYUVpxbbASVydyFz6oTqBLUnWMjrh%2FvgX2vpBUu20tLdVFX%2B8z8RhgxIqTXQAGEP52NaT4aiC1ySnFKlE4PFLwihmNrZl%2FMidFrw8yxuNxFBhZvk2zHeop%2F2CYvO4p0dYCikXHuaKcSskZA6YMhnICYxtozN0e1gZFvhMNnlj%2FpEFTAGzrCRNEdWB%2F2X26lMrRjB3BSF7EOvCjM8WDGRcSmbC4nOn3UUeXpIccW3%2Fk%2Fn7lMBbeBKCuPhY8YUtmsjkkGzGzyFJDwoHxhH5UXnC3tzR3Ha4Znn4oulhx7sI%2BB43bEfcsklF6mffhcGQhE9yC7TQly2pW1hJlt3t8T0JPWWA0UB5U450oa6klNHeYNK7GhgxGAzVkxyRU1hoO0aTgJFcpvg7HBby2p5zy6Lja3qDbx%2Fi8MiXpN0LwfIX0PCoS8vKASYodWuy19w8rYaD%2FksqfexClo3X0N7vjVIt95kOnwzWXIfwchNNpHBvRE%2Bw4FaXd7yrDSV3sr9hE4MOSU5r4GOqUBA7ELvSE3ZzOd93fx4PQAFmPKXGO5m4rKw3hDpJ7a0iMrv9dekyqIkEOyzvUIoTzVgz7zY870QG5JiKo2O%2BMRZr7%2FuMDjihpOTx2g9XL87NJxCAlakm8zdkzdQkA%2BC6yVEXURnkv427dc2lLBbFYifsxAN1zYaDO9PSlF69ZiFTnNugAY7vIr%2BwWOgu2CNg%2FWo8m357xIjvxrmsWGg2dC0RDaE%2B6X&X-Amz-Signature=2157e58289f9c60aa530c9c4111a24c63f36f5c5a2c6dbcb21f438edbcd296ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
