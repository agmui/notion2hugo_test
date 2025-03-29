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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4A3N2D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDclRXAdO2bvqAhmxjO4yIco2L7mP3oGAFQ%2BWBYTBbskQIgUVvMks9UQ0GL%2BiXJF9j2jApYs43VQofYBZ%2FEuscrBe8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDXEnX%2BQx6CJmK885ircA2IvKvkxsCfErH3FQAOtVA6UNe%2F7F628Tvud%2BrHqdBVv83V37l3nfzhJKlyeCa3ePqdfRDLu%2FinvKfy0Sn6EOvRD1%2FcsrHcIzT6eyLWniYazV%2BRpLzRxrcPi1mkxDVBO0j8AE4MZBUtLOh0pe2vAO2q%2BAdOsk0yWOSmrapVT%2FYkD2wTDSVyaAuXwCwKkUc0kNLPgdrOm%2FokBfrRG1mMc0kZqLbBH1Uxz4I0xwRMeAWvRHgYjt6HLMIYem6oAdGZRfuMcjAPyuS1zE9zxMIwm15V1994Y9fVRx1Eske4H%2F%2FkpUXEw02SACBE%2BMkXOcM0iZu8W7BxhowprMxFLOYcsWqQwVslXBysoMXocnKvXHx4WsLsaYccAxyoTrfAORj3l1Wk%2F2LbIhjmp5tPfvGuhQZpIItYez7Wp7IIxKI8vDhv%2Bdic%2F9pLWaeqilMl%2Bf%2B1NtooGJFvY71JNa46LCZHEyySrMyN5icVM04tLqGbQX69ZrD6GCGUb3qNeEJHTUbCakuXDK8g44leMALXfmntZOYqRWTgVQE1Kp52v2Ze44ZimgUIxwirCBgnSF6rBvT3Noxn5dsQjKOEQzgTt9XwdK41EUW9gLv7pGu5p7bmfw5jY%2BqDwibQsFfABt7OJMI7dob8GOqUBGMQMf6xwwwFsrfP80czZ0diiTdQq3MZUU3BgrI%2Fsrd5Tj0leZzH4L8cry8YYUT5tR4qzNPWmaLgk%2BOvHGkYfq7d6Xr4eMWSu7nx2gqdyZ1UlccsIRfZLX7VaT5GnVRrkSqVb8bzytKlH6Yoj%2BalO6FtnHXYBqCgEZ4y68WPBqEm5ld%2Bqp1nwHTK%2FSBKsfsu8OD8KGiaVL9YnFqQz3H9XAwQ0NTZM&X-Amz-Signature=27425bf7b47465a2c1d4a7bae53570b8c6d8de3102449f750197d012eb81459b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4A3N2D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDclRXAdO2bvqAhmxjO4yIco2L7mP3oGAFQ%2BWBYTBbskQIgUVvMks9UQ0GL%2BiXJF9j2jApYs43VQofYBZ%2FEuscrBe8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDXEnX%2BQx6CJmK885ircA2IvKvkxsCfErH3FQAOtVA6UNe%2F7F628Tvud%2BrHqdBVv83V37l3nfzhJKlyeCa3ePqdfRDLu%2FinvKfy0Sn6EOvRD1%2FcsrHcIzT6eyLWniYazV%2BRpLzRxrcPi1mkxDVBO0j8AE4MZBUtLOh0pe2vAO2q%2BAdOsk0yWOSmrapVT%2FYkD2wTDSVyaAuXwCwKkUc0kNLPgdrOm%2FokBfrRG1mMc0kZqLbBH1Uxz4I0xwRMeAWvRHgYjt6HLMIYem6oAdGZRfuMcjAPyuS1zE9zxMIwm15V1994Y9fVRx1Eske4H%2F%2FkpUXEw02SACBE%2BMkXOcM0iZu8W7BxhowprMxFLOYcsWqQwVslXBysoMXocnKvXHx4WsLsaYccAxyoTrfAORj3l1Wk%2F2LbIhjmp5tPfvGuhQZpIItYez7Wp7IIxKI8vDhv%2Bdic%2F9pLWaeqilMl%2Bf%2B1NtooGJFvY71JNa46LCZHEyySrMyN5icVM04tLqGbQX69ZrD6GCGUb3qNeEJHTUbCakuXDK8g44leMALXfmntZOYqRWTgVQE1Kp52v2Ze44ZimgUIxwirCBgnSF6rBvT3Noxn5dsQjKOEQzgTt9XwdK41EUW9gLv7pGu5p7bmfw5jY%2BqDwibQsFfABt7OJMI7dob8GOqUBGMQMf6xwwwFsrfP80czZ0diiTdQq3MZUU3BgrI%2Fsrd5Tj0leZzH4L8cry8YYUT5tR4qzNPWmaLgk%2BOvHGkYfq7d6Xr4eMWSu7nx2gqdyZ1UlccsIRfZLX7VaT5GnVRrkSqVb8bzytKlH6Yoj%2BalO6FtnHXYBqCgEZ4y68WPBqEm5ld%2Bqp1nwHTK%2FSBKsfsu8OD8KGiaVL9YnFqQz3H9XAwQ0NTZM&X-Amz-Signature=05be5fd1b96e95d3dd36c7f0c9af6a81b544311b9828dc21cb79c0937faee629&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4A3N2D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDclRXAdO2bvqAhmxjO4yIco2L7mP3oGAFQ%2BWBYTBbskQIgUVvMks9UQ0GL%2BiXJF9j2jApYs43VQofYBZ%2FEuscrBe8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDXEnX%2BQx6CJmK885ircA2IvKvkxsCfErH3FQAOtVA6UNe%2F7F628Tvud%2BrHqdBVv83V37l3nfzhJKlyeCa3ePqdfRDLu%2FinvKfy0Sn6EOvRD1%2FcsrHcIzT6eyLWniYazV%2BRpLzRxrcPi1mkxDVBO0j8AE4MZBUtLOh0pe2vAO2q%2BAdOsk0yWOSmrapVT%2FYkD2wTDSVyaAuXwCwKkUc0kNLPgdrOm%2FokBfrRG1mMc0kZqLbBH1Uxz4I0xwRMeAWvRHgYjt6HLMIYem6oAdGZRfuMcjAPyuS1zE9zxMIwm15V1994Y9fVRx1Eske4H%2F%2FkpUXEw02SACBE%2BMkXOcM0iZu8W7BxhowprMxFLOYcsWqQwVslXBysoMXocnKvXHx4WsLsaYccAxyoTrfAORj3l1Wk%2F2LbIhjmp5tPfvGuhQZpIItYez7Wp7IIxKI8vDhv%2Bdic%2F9pLWaeqilMl%2Bf%2B1NtooGJFvY71JNa46LCZHEyySrMyN5icVM04tLqGbQX69ZrD6GCGUb3qNeEJHTUbCakuXDK8g44leMALXfmntZOYqRWTgVQE1Kp52v2Ze44ZimgUIxwirCBgnSF6rBvT3Noxn5dsQjKOEQzgTt9XwdK41EUW9gLv7pGu5p7bmfw5jY%2BqDwibQsFfABt7OJMI7dob8GOqUBGMQMf6xwwwFsrfP80czZ0diiTdQq3MZUU3BgrI%2Fsrd5Tj0leZzH4L8cry8YYUT5tR4qzNPWmaLgk%2BOvHGkYfq7d6Xr4eMWSu7nx2gqdyZ1UlccsIRfZLX7VaT5GnVRrkSqVb8bzytKlH6Yoj%2BalO6FtnHXYBqCgEZ4y68WPBqEm5ld%2Bqp1nwHTK%2FSBKsfsu8OD8KGiaVL9YnFqQz3H9XAwQ0NTZM&X-Amz-Signature=44e60f0b7e7b181c7d269eb6455eab64c3941acb6fa9a204387bf7ee6932235d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
