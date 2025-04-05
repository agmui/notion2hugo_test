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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2EK6ON%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq8XLm9t2SCFN4JG1cxcw0moJRBmUJJ1zSF%2FhzKAuWAiEAuG6xvgY6Vvu1O65sX4ZpNqq9Wr1cfh0OizHvhQmkywoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHiqZRNRhUm8TIuOAyrcA4qFuuSuOkjJptGuJAyyL%2FzI85Abn3aMx8XkGtc5NPzFDyoDgK%2B%2F%2Bmob40KY4tZTigaMNRiqaq8u6a6c5zZipcRhVdGf6hXOUv8dCIoqOzRB3rVPyck53xLAm0vl2hO7%2FjPld5KPRpcnZrSnwU6DYJAW0LRrl6PeTN4sXZL0wKfYTdKC1VRroVaLeZced4cLfN5ig4TTKe7aPZz%2FnyfMbjca3QaJN%2FOzLm1aARkH7aViAO%2FWYavbmP4pEquxP9sPK9NfJjatxZ7LRCgr8AH5ckJguikldjIzinyq2dcr%2FlHLW%2FcSvZG9u3PvUyek6vz%2BJRqrESimAUXbu1Yxdvg6LEdMdBPl5DM781iwCG5C4TzRN%2BXq1OV2AaxdcDMhutehqQ4Cm9LBoDQ57OF4FakPzmle0TXPfcY%2BGWsWCoXdNet62DD9SQKy7X%2BsBVEo4Y81htCNDjLGw5kNvdQQZNCmbIu8K1PWDGndtFVAu67MH7WeSYVdtkdAb%2BsmHvlLe5fIyT65PVkq1OlrFa8MRWrNyMHUfbB8IHGG976TGQ5dpQMQ16dJJpB2rRgcEy417HAmnreoUZ0hD01r3g%2ByzHCckePo3OSCJZxtq96q%2FFWHPSdxhLj9WdCkvwx8MCGNMJq9w78GOqUBfu2OE%2Bm%2BUWrj6lAe%2Bl2RoTlKSWppa8Zw1kwnk60iHbYRkJKRf%2FOcm6HdZUTTk6Cme91JCZspi3ANLtQktSjGQu%2FUQa2EVU%2BwdZj603MyQSq2OAsoOqsRiPKddP9FLaMxMODolce6mH5NqQkLw7WH4LNDtTR6ytMgDn8qPyYiusHQ%2B%2BMIuvLaMDiBVx6mTozITxiul1Yt9euT%2B3BNZ%2FHAWz71llOm&X-Amz-Signature=91b13d24dc51e32d4f5ef7f9ed83524d86aec78be4381ec7e71b96ae98a24dec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2EK6ON%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq8XLm9t2SCFN4JG1cxcw0moJRBmUJJ1zSF%2FhzKAuWAiEAuG6xvgY6Vvu1O65sX4ZpNqq9Wr1cfh0OizHvhQmkywoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHiqZRNRhUm8TIuOAyrcA4qFuuSuOkjJptGuJAyyL%2FzI85Abn3aMx8XkGtc5NPzFDyoDgK%2B%2F%2Bmob40KY4tZTigaMNRiqaq8u6a6c5zZipcRhVdGf6hXOUv8dCIoqOzRB3rVPyck53xLAm0vl2hO7%2FjPld5KPRpcnZrSnwU6DYJAW0LRrl6PeTN4sXZL0wKfYTdKC1VRroVaLeZced4cLfN5ig4TTKe7aPZz%2FnyfMbjca3QaJN%2FOzLm1aARkH7aViAO%2FWYavbmP4pEquxP9sPK9NfJjatxZ7LRCgr8AH5ckJguikldjIzinyq2dcr%2FlHLW%2FcSvZG9u3PvUyek6vz%2BJRqrESimAUXbu1Yxdvg6LEdMdBPl5DM781iwCG5C4TzRN%2BXq1OV2AaxdcDMhutehqQ4Cm9LBoDQ57OF4FakPzmle0TXPfcY%2BGWsWCoXdNet62DD9SQKy7X%2BsBVEo4Y81htCNDjLGw5kNvdQQZNCmbIu8K1PWDGndtFVAu67MH7WeSYVdtkdAb%2BsmHvlLe5fIyT65PVkq1OlrFa8MRWrNyMHUfbB8IHGG976TGQ5dpQMQ16dJJpB2rRgcEy417HAmnreoUZ0hD01r3g%2ByzHCckePo3OSCJZxtq96q%2FFWHPSdxhLj9WdCkvwx8MCGNMJq9w78GOqUBfu2OE%2Bm%2BUWrj6lAe%2Bl2RoTlKSWppa8Zw1kwnk60iHbYRkJKRf%2FOcm6HdZUTTk6Cme91JCZspi3ANLtQktSjGQu%2FUQa2EVU%2BwdZj603MyQSq2OAsoOqsRiPKddP9FLaMxMODolce6mH5NqQkLw7WH4LNDtTR6ytMgDn8qPyYiusHQ%2B%2BMIuvLaMDiBVx6mTozITxiul1Yt9euT%2B3BNZ%2FHAWz71llOm&X-Amz-Signature=5b9647a9108d7c5bdfae029fed36c220041d0e9259c611c607cffda5df6cd589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2EK6ON%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq8XLm9t2SCFN4JG1cxcw0moJRBmUJJ1zSF%2FhzKAuWAiEAuG6xvgY6Vvu1O65sX4ZpNqq9Wr1cfh0OizHvhQmkywoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHiqZRNRhUm8TIuOAyrcA4qFuuSuOkjJptGuJAyyL%2FzI85Abn3aMx8XkGtc5NPzFDyoDgK%2B%2F%2Bmob40KY4tZTigaMNRiqaq8u6a6c5zZipcRhVdGf6hXOUv8dCIoqOzRB3rVPyck53xLAm0vl2hO7%2FjPld5KPRpcnZrSnwU6DYJAW0LRrl6PeTN4sXZL0wKfYTdKC1VRroVaLeZced4cLfN5ig4TTKe7aPZz%2FnyfMbjca3QaJN%2FOzLm1aARkH7aViAO%2FWYavbmP4pEquxP9sPK9NfJjatxZ7LRCgr8AH5ckJguikldjIzinyq2dcr%2FlHLW%2FcSvZG9u3PvUyek6vz%2BJRqrESimAUXbu1Yxdvg6LEdMdBPl5DM781iwCG5C4TzRN%2BXq1OV2AaxdcDMhutehqQ4Cm9LBoDQ57OF4FakPzmle0TXPfcY%2BGWsWCoXdNet62DD9SQKy7X%2BsBVEo4Y81htCNDjLGw5kNvdQQZNCmbIu8K1PWDGndtFVAu67MH7WeSYVdtkdAb%2BsmHvlLe5fIyT65PVkq1OlrFa8MRWrNyMHUfbB8IHGG976TGQ5dpQMQ16dJJpB2rRgcEy417HAmnreoUZ0hD01r3g%2ByzHCckePo3OSCJZxtq96q%2FFWHPSdxhLj9WdCkvwx8MCGNMJq9w78GOqUBfu2OE%2Bm%2BUWrj6lAe%2Bl2RoTlKSWppa8Zw1kwnk60iHbYRkJKRf%2FOcm6HdZUTTk6Cme91JCZspi3ANLtQktSjGQu%2FUQa2EVU%2BwdZj603MyQSq2OAsoOqsRiPKddP9FLaMxMODolce6mH5NqQkLw7WH4LNDtTR6ytMgDn8qPyYiusHQ%2B%2BMIuvLaMDiBVx6mTozITxiul1Yt9euT%2B3BNZ%2FHAWz71llOm&X-Amz-Signature=88fa412cfea9df6af3a9748edc98e89ecb9a5f37cc271169aff3a8b9e12bb8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
