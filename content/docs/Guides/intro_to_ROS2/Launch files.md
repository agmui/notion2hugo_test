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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXODGN25%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFS%2BcA5gGuJXKON%2FvOp%2Bta6Udh%2FnLnp96%2F0muOTNI9FQAiEArvqv2n2JhY7qwCYtcEyR8c7rziANLmWMSy7L6EEsvhkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfpN%2BNLXIX8QHtz3ircA0aamvQ5HHYMYN5gzL%2BGaz81elqdrHwnBXjjBkP%2Bv9qLKyXN%2FPn21cc8nI6VVjf7QBHJEd2D3opTNAdHXzK19O%2BI0RL8v1WQw5N7O9vgiyZcJ%2BTKTsgsz5CXOuQzOU%2FeBy4HUjrvF6Cj8q5FY%2F6PHZf1yGCrusmUXZcxqyVkJPWvLZNLSK6yXcCJbAApYaQ6IJs559WPsdpqsmbKVPN9a4RQYdvC75Tfu9hkW%2F9Bojcv4Rce8FUvGhUjvvIbLPvdLu%2BgSaU1R5eKNZAHS%2FFfw30OwWg2iGTRsQ5T3PBUCScvvxkDa8K5rm1oISduAYoLRHa9zxNKtPXD4kXnh6TXCbYquLdrrfQbqrlUvVJNoHPUMsooGeOADnf4Z0c7qPObIb%2BZ0FW%2F23Edoz3nPBQ7NJ8RUnOmHGUn7195sNAHr%2F%2BnIreyQpO8i8F50Gj1wV2JhZh1bCyJb7Rdn135OjnacvUzAjaquMlOj%2BnaJyL6Rt0mJdBiZmlWlvdy17SgQsQFAntboIfYiNnwfCXwVqIUgFuCM0TUzmJQ9csBE4WXKUxqWp%2BYQd3jCiKQnWoLdXYT3aLRsTM9S7ZdUFNb%2BD0R515Z22PlXUfR4IL4Rm5GMeoJ7CQi%2Bwl1dLvXRnWxMK6F578GOqUBv5bTTng0v%2FrZipwy8ULwQDeeodF4iU1ELjf0IkCj7%2BIonBujoOBRgK%2BSr%2FCs%2B%2BXN6Y0GhDUyBaqOwgRMEp3W1f0wyMHn8lbM7JYd%2F%2Bloi0AMS99DNV1Tqx5h4dPtMSSLqAo10h7qQb1h5onv5GhuTM935uTb4QS9dcr2BQ5jDTuNOpFrAXOEaac9E41FGfmNir7f5JSEOFrdgWcRUpC%2FnZTrCJQe&X-Amz-Signature=628506702d5db125556ee5cd09a7b45a60e9344ce88c1d4409dfa144903be8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXODGN25%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFS%2BcA5gGuJXKON%2FvOp%2Bta6Udh%2FnLnp96%2F0muOTNI9FQAiEArvqv2n2JhY7qwCYtcEyR8c7rziANLmWMSy7L6EEsvhkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfpN%2BNLXIX8QHtz3ircA0aamvQ5HHYMYN5gzL%2BGaz81elqdrHwnBXjjBkP%2Bv9qLKyXN%2FPn21cc8nI6VVjf7QBHJEd2D3opTNAdHXzK19O%2BI0RL8v1WQw5N7O9vgiyZcJ%2BTKTsgsz5CXOuQzOU%2FeBy4HUjrvF6Cj8q5FY%2F6PHZf1yGCrusmUXZcxqyVkJPWvLZNLSK6yXcCJbAApYaQ6IJs559WPsdpqsmbKVPN9a4RQYdvC75Tfu9hkW%2F9Bojcv4Rce8FUvGhUjvvIbLPvdLu%2BgSaU1R5eKNZAHS%2FFfw30OwWg2iGTRsQ5T3PBUCScvvxkDa8K5rm1oISduAYoLRHa9zxNKtPXD4kXnh6TXCbYquLdrrfQbqrlUvVJNoHPUMsooGeOADnf4Z0c7qPObIb%2BZ0FW%2F23Edoz3nPBQ7NJ8RUnOmHGUn7195sNAHr%2F%2BnIreyQpO8i8F50Gj1wV2JhZh1bCyJb7Rdn135OjnacvUzAjaquMlOj%2BnaJyL6Rt0mJdBiZmlWlvdy17SgQsQFAntboIfYiNnwfCXwVqIUgFuCM0TUzmJQ9csBE4WXKUxqWp%2BYQd3jCiKQnWoLdXYT3aLRsTM9S7ZdUFNb%2BD0R515Z22PlXUfR4IL4Rm5GMeoJ7CQi%2Bwl1dLvXRnWxMK6F578GOqUBv5bTTng0v%2FrZipwy8ULwQDeeodF4iU1ELjf0IkCj7%2BIonBujoOBRgK%2BSr%2FCs%2B%2BXN6Y0GhDUyBaqOwgRMEp3W1f0wyMHn8lbM7JYd%2F%2Bloi0AMS99DNV1Tqx5h4dPtMSSLqAo10h7qQb1h5onv5GhuTM935uTb4QS9dcr2BQ5jDTuNOpFrAXOEaac9E41FGfmNir7f5JSEOFrdgWcRUpC%2FnZTrCJQe&X-Amz-Signature=b4461ac64a84ddc67fce503c8b982b332e217d260afd855e3c33ed49766f4322&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXODGN25%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFS%2BcA5gGuJXKON%2FvOp%2Bta6Udh%2FnLnp96%2F0muOTNI9FQAiEArvqv2n2JhY7qwCYtcEyR8c7rziANLmWMSy7L6EEsvhkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfpN%2BNLXIX8QHtz3ircA0aamvQ5HHYMYN5gzL%2BGaz81elqdrHwnBXjjBkP%2Bv9qLKyXN%2FPn21cc8nI6VVjf7QBHJEd2D3opTNAdHXzK19O%2BI0RL8v1WQw5N7O9vgiyZcJ%2BTKTsgsz5CXOuQzOU%2FeBy4HUjrvF6Cj8q5FY%2F6PHZf1yGCrusmUXZcxqyVkJPWvLZNLSK6yXcCJbAApYaQ6IJs559WPsdpqsmbKVPN9a4RQYdvC75Tfu9hkW%2F9Bojcv4Rce8FUvGhUjvvIbLPvdLu%2BgSaU1R5eKNZAHS%2FFfw30OwWg2iGTRsQ5T3PBUCScvvxkDa8K5rm1oISduAYoLRHa9zxNKtPXD4kXnh6TXCbYquLdrrfQbqrlUvVJNoHPUMsooGeOADnf4Z0c7qPObIb%2BZ0FW%2F23Edoz3nPBQ7NJ8RUnOmHGUn7195sNAHr%2F%2BnIreyQpO8i8F50Gj1wV2JhZh1bCyJb7Rdn135OjnacvUzAjaquMlOj%2BnaJyL6Rt0mJdBiZmlWlvdy17SgQsQFAntboIfYiNnwfCXwVqIUgFuCM0TUzmJQ9csBE4WXKUxqWp%2BYQd3jCiKQnWoLdXYT3aLRsTM9S7ZdUFNb%2BD0R515Z22PlXUfR4IL4Rm5GMeoJ7CQi%2Bwl1dLvXRnWxMK6F578GOqUBv5bTTng0v%2FrZipwy8ULwQDeeodF4iU1ELjf0IkCj7%2BIonBujoOBRgK%2BSr%2FCs%2B%2BXN6Y0GhDUyBaqOwgRMEp3W1f0wyMHn8lbM7JYd%2F%2Bloi0AMS99DNV1Tqx5h4dPtMSSLqAo10h7qQb1h5onv5GhuTM935uTb4QS9dcr2BQ5jDTuNOpFrAXOEaac9E41FGfmNir7f5JSEOFrdgWcRUpC%2FnZTrCJQe&X-Amz-Signature=c05894884f9695ecdd0c29d8686e119324bc1b5239025b5b4ee090f75985da0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
