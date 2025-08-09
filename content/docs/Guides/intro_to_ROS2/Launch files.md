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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UASZ5OK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCC%2FHJqRn2x2%2BSonrp%2BmejNNX1LAaSAnKQB9yUyq6mxmwIhAKcvDLpslOWTGaF22YXubz1jx2YEZdoq3l787sWFHW6oKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fzs3hs44pbiLKiQEq3APFtQX7c5dO6TctdxC1fXiKYoeuz9A6H478Fpgc%2BfEIkMpg%2BO8n3WNh2Ji2nRbNwmZVVJADsMnODywlfk4guZ92mzNj2JgruXWy8bQ66j%2Bsl7py7bfI7dpGKAzGylWW8CDZhop9NnG75nDlZyOr2zriZ7f1FXDSTih9AZSf5FnL0fN5P9J81mJH5gcKCGmCAwWJqQVkRaWMLQV14DrFOBFUkx81md8qLt1sQpxzKeATrQj%2F0GftwFMO9WCurAPHXuqlR3hDyYyQ6fnEHLBO0AS1BH5RnsWFzzIzVmHCOc%2FRdnH2QdzMPmd5KhviqCS5hIIPaPNaESYQNuc2EQy1HSYTbfteDIsOWST88GOUEPFW4aspyiFSyxwKN%2F3UgyglcTvXgYkCW39KTj4dN0YxerVcavDDyrJmoatqDwvNwEwani7fd%2BLMFlhGUdTTT1HoNYXedZXO9t9mP1VzwjUd1unpwGhyJKdoYtILfC9fqwYm5AfwSQbB4scPjLXaLNe5ZQ59BV3ps059CrCPj8DCCKpepBiwmhyfSy21dA3pNNgP30CQkUjkuHyJCluVenUmUfCCnodAyf8Y63grdyDtVC9w5tQCekkX1GyUpWb%2B%2FET%2F%2Bl8feIQlmzEb%2FUJboTCO9trEBjqkAfsktVbKRLf5IUTC19AbYc42ubHVzQwCmcv1k88EVDkBqQ2Dk13Pn2WhuDG%2BZVV8qCR0AZFsLsyOqmFfgn8ernJ8FecJYWB7Pddkmc1ZrhhqxB8xX71J7MhaGj0xW4cFMAle62uYmwDbovqD%2BynszQ%2BHCP6UBNfmvJiQUXUcppbDBqzm1OqsT2axQ2Syr7v3Y6IPdrEWsghcnHSdXzRK4aUjSDsU&X-Amz-Signature=162cf1dd814b26614617360390211bdf0ed2f0865afe8dd44e8702b76b645736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UASZ5OK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCC%2FHJqRn2x2%2BSonrp%2BmejNNX1LAaSAnKQB9yUyq6mxmwIhAKcvDLpslOWTGaF22YXubz1jx2YEZdoq3l787sWFHW6oKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fzs3hs44pbiLKiQEq3APFtQX7c5dO6TctdxC1fXiKYoeuz9A6H478Fpgc%2BfEIkMpg%2BO8n3WNh2Ji2nRbNwmZVVJADsMnODywlfk4guZ92mzNj2JgruXWy8bQ66j%2Bsl7py7bfI7dpGKAzGylWW8CDZhop9NnG75nDlZyOr2zriZ7f1FXDSTih9AZSf5FnL0fN5P9J81mJH5gcKCGmCAwWJqQVkRaWMLQV14DrFOBFUkx81md8qLt1sQpxzKeATrQj%2F0GftwFMO9WCurAPHXuqlR3hDyYyQ6fnEHLBO0AS1BH5RnsWFzzIzVmHCOc%2FRdnH2QdzMPmd5KhviqCS5hIIPaPNaESYQNuc2EQy1HSYTbfteDIsOWST88GOUEPFW4aspyiFSyxwKN%2F3UgyglcTvXgYkCW39KTj4dN0YxerVcavDDyrJmoatqDwvNwEwani7fd%2BLMFlhGUdTTT1HoNYXedZXO9t9mP1VzwjUd1unpwGhyJKdoYtILfC9fqwYm5AfwSQbB4scPjLXaLNe5ZQ59BV3ps059CrCPj8DCCKpepBiwmhyfSy21dA3pNNgP30CQkUjkuHyJCluVenUmUfCCnodAyf8Y63grdyDtVC9w5tQCekkX1GyUpWb%2B%2FET%2F%2Bl8feIQlmzEb%2FUJboTCO9trEBjqkAfsktVbKRLf5IUTC19AbYc42ubHVzQwCmcv1k88EVDkBqQ2Dk13Pn2WhuDG%2BZVV8qCR0AZFsLsyOqmFfgn8ernJ8FecJYWB7Pddkmc1ZrhhqxB8xX71J7MhaGj0xW4cFMAle62uYmwDbovqD%2BynszQ%2BHCP6UBNfmvJiQUXUcppbDBqzm1OqsT2axQ2Syr7v3Y6IPdrEWsghcnHSdXzRK4aUjSDsU&X-Amz-Signature=cbfa7f6a3c658885f3a20c5eb425d85b168596fe51857cf83a478cbdb983690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UASZ5OK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCC%2FHJqRn2x2%2BSonrp%2BmejNNX1LAaSAnKQB9yUyq6mxmwIhAKcvDLpslOWTGaF22YXubz1jx2YEZdoq3l787sWFHW6oKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fzs3hs44pbiLKiQEq3APFtQX7c5dO6TctdxC1fXiKYoeuz9A6H478Fpgc%2BfEIkMpg%2BO8n3WNh2Ji2nRbNwmZVVJADsMnODywlfk4guZ92mzNj2JgruXWy8bQ66j%2Bsl7py7bfI7dpGKAzGylWW8CDZhop9NnG75nDlZyOr2zriZ7f1FXDSTih9AZSf5FnL0fN5P9J81mJH5gcKCGmCAwWJqQVkRaWMLQV14DrFOBFUkx81md8qLt1sQpxzKeATrQj%2F0GftwFMO9WCurAPHXuqlR3hDyYyQ6fnEHLBO0AS1BH5RnsWFzzIzVmHCOc%2FRdnH2QdzMPmd5KhviqCS5hIIPaPNaESYQNuc2EQy1HSYTbfteDIsOWST88GOUEPFW4aspyiFSyxwKN%2F3UgyglcTvXgYkCW39KTj4dN0YxerVcavDDyrJmoatqDwvNwEwani7fd%2BLMFlhGUdTTT1HoNYXedZXO9t9mP1VzwjUd1unpwGhyJKdoYtILfC9fqwYm5AfwSQbB4scPjLXaLNe5ZQ59BV3ps059CrCPj8DCCKpepBiwmhyfSy21dA3pNNgP30CQkUjkuHyJCluVenUmUfCCnodAyf8Y63grdyDtVC9w5tQCekkX1GyUpWb%2B%2FET%2F%2Bl8feIQlmzEb%2FUJboTCO9trEBjqkAfsktVbKRLf5IUTC19AbYc42ubHVzQwCmcv1k88EVDkBqQ2Dk13Pn2WhuDG%2BZVV8qCR0AZFsLsyOqmFfgn8ernJ8FecJYWB7Pddkmc1ZrhhqxB8xX71J7MhaGj0xW4cFMAle62uYmwDbovqD%2BynszQ%2BHCP6UBNfmvJiQUXUcppbDBqzm1OqsT2axQ2Syr7v3Y6IPdrEWsghcnHSdXzRK4aUjSDsU&X-Amz-Signature=00daadf8e3cb4d571a4aac12ba29ddfb8128e6af9566bf032feb5f6f91d34a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
