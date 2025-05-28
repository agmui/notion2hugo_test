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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RIU663D%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBNZ42mcSlYvwD8m4wX1SuSifTFUU2eTpf99LvYaEYXAiB6lzJxDjnS75IknLrNiuQZ6CjsOIvAeNW0VseobJCLZSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM%2B4yF1BHs2J%2F%2Fl2OuKtwDLxpt2R22GnJl5lIoxPpauEW8U110CncZAMspHp4wpV%2Fj%2BqCJeoLE0LmgZSC5lBvKgBbEDlIAlPkA7PXXLiIo6YtFxE%2FiE3wYNjaeEUSXu%2FiTCMXUdNUgOQduuEtlY%2Bt01iqp1SFcnY4PCrCwTnZ6kQLB%2FDylUpF%2Fsu0agsrMl%2Fsz%2F%2Fdcx3aTjRT%2BQAOuQEn2HA8DUXHSOawZTvpLCMZwEAIBmG%2FFcF7us9vQi0%2BPLL5qAmXh%2BwBSjHBe431%2FVhQiOkm9sMeIr9bp8uhxdDl88wTHvWdJ8siznKhyZS9y%2F1j880%2BxgYOG9o%2BKHR5x53USsGQfwhoKC4N7h2xjCuOUisk%2BdhMl%2Br6eGwo9u9ewbbu2SYsRHVNyS7s1ycqmnH4T6KelBxjdG6YFc0kb1IMlDEO2HrOysTanV7akzqgBVAhZAKcZVsdelkGMVxH6czUPXlCxzlF9yWEO8gBVEXFdgpN5u1KRSyGCTlhoUtEworoQE%2BhL32TkLE%2BmYFRYi64k%2BkYx7cLshwFqqhp1OlIs6rLiDOBY9wQC7CdWBZrSW%2FuCv77jKs8GbUst1NQ2PTXNSxr5UZNQBdG25IoFEJQ6JVT5Gfdfs34PAMcIaWDZ%2Bj9YZBvT8W%2Bkkzj%2F614wgqXZwQY6pgGP01KcG%2F4CWAiA8GoilUJcDEvKjfMysdZpdu%2F0MfaemVNu%2FGBVySWtmlyPtWDJTsPGrlSi2ptNCUN2YO5LtMxrcqnVrMBFL2LnpQo19dTTACViuFJxORQeSLwE4FompTH0d2NUuRJmWgxagzM4gbIYh2gfFLBYu6yodRlTeFcLgoRrvUbUvSUDr78NeoBZIjfgrjFIK5AOjrmyGyQOxDIGcBmrwiNr&X-Amz-Signature=412ed17cc26054702992c914c4d13da1ad1b931886b34bb46fba9c2a3057a4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RIU663D%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBNZ42mcSlYvwD8m4wX1SuSifTFUU2eTpf99LvYaEYXAiB6lzJxDjnS75IknLrNiuQZ6CjsOIvAeNW0VseobJCLZSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM%2B4yF1BHs2J%2F%2Fl2OuKtwDLxpt2R22GnJl5lIoxPpauEW8U110CncZAMspHp4wpV%2Fj%2BqCJeoLE0LmgZSC5lBvKgBbEDlIAlPkA7PXXLiIo6YtFxE%2FiE3wYNjaeEUSXu%2FiTCMXUdNUgOQduuEtlY%2Bt01iqp1SFcnY4PCrCwTnZ6kQLB%2FDylUpF%2Fsu0agsrMl%2Fsz%2F%2Fdcx3aTjRT%2BQAOuQEn2HA8DUXHSOawZTvpLCMZwEAIBmG%2FFcF7us9vQi0%2BPLL5qAmXh%2BwBSjHBe431%2FVhQiOkm9sMeIr9bp8uhxdDl88wTHvWdJ8siznKhyZS9y%2F1j880%2BxgYOG9o%2BKHR5x53USsGQfwhoKC4N7h2xjCuOUisk%2BdhMl%2Br6eGwo9u9ewbbu2SYsRHVNyS7s1ycqmnH4T6KelBxjdG6YFc0kb1IMlDEO2HrOysTanV7akzqgBVAhZAKcZVsdelkGMVxH6czUPXlCxzlF9yWEO8gBVEXFdgpN5u1KRSyGCTlhoUtEworoQE%2BhL32TkLE%2BmYFRYi64k%2BkYx7cLshwFqqhp1OlIs6rLiDOBY9wQC7CdWBZrSW%2FuCv77jKs8GbUst1NQ2PTXNSxr5UZNQBdG25IoFEJQ6JVT5Gfdfs34PAMcIaWDZ%2Bj9YZBvT8W%2Bkkzj%2F614wgqXZwQY6pgGP01KcG%2F4CWAiA8GoilUJcDEvKjfMysdZpdu%2F0MfaemVNu%2FGBVySWtmlyPtWDJTsPGrlSi2ptNCUN2YO5LtMxrcqnVrMBFL2LnpQo19dTTACViuFJxORQeSLwE4FompTH0d2NUuRJmWgxagzM4gbIYh2gfFLBYu6yodRlTeFcLgoRrvUbUvSUDr78NeoBZIjfgrjFIK5AOjrmyGyQOxDIGcBmrwiNr&X-Amz-Signature=6d2903e12fec0052d40c704ca39e9c1777e8a129088f4772ba4bf51affd530d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RIU663D%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBNZ42mcSlYvwD8m4wX1SuSifTFUU2eTpf99LvYaEYXAiB6lzJxDjnS75IknLrNiuQZ6CjsOIvAeNW0VseobJCLZSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM%2B4yF1BHs2J%2F%2Fl2OuKtwDLxpt2R22GnJl5lIoxPpauEW8U110CncZAMspHp4wpV%2Fj%2BqCJeoLE0LmgZSC5lBvKgBbEDlIAlPkA7PXXLiIo6YtFxE%2FiE3wYNjaeEUSXu%2FiTCMXUdNUgOQduuEtlY%2Bt01iqp1SFcnY4PCrCwTnZ6kQLB%2FDylUpF%2Fsu0agsrMl%2Fsz%2F%2Fdcx3aTjRT%2BQAOuQEn2HA8DUXHSOawZTvpLCMZwEAIBmG%2FFcF7us9vQi0%2BPLL5qAmXh%2BwBSjHBe431%2FVhQiOkm9sMeIr9bp8uhxdDl88wTHvWdJ8siznKhyZS9y%2F1j880%2BxgYOG9o%2BKHR5x53USsGQfwhoKC4N7h2xjCuOUisk%2BdhMl%2Br6eGwo9u9ewbbu2SYsRHVNyS7s1ycqmnH4T6KelBxjdG6YFc0kb1IMlDEO2HrOysTanV7akzqgBVAhZAKcZVsdelkGMVxH6czUPXlCxzlF9yWEO8gBVEXFdgpN5u1KRSyGCTlhoUtEworoQE%2BhL32TkLE%2BmYFRYi64k%2BkYx7cLshwFqqhp1OlIs6rLiDOBY9wQC7CdWBZrSW%2FuCv77jKs8GbUst1NQ2PTXNSxr5UZNQBdG25IoFEJQ6JVT5Gfdfs34PAMcIaWDZ%2Bj9YZBvT8W%2Bkkzj%2F614wgqXZwQY6pgGP01KcG%2F4CWAiA8GoilUJcDEvKjfMysdZpdu%2F0MfaemVNu%2FGBVySWtmlyPtWDJTsPGrlSi2ptNCUN2YO5LtMxrcqnVrMBFL2LnpQo19dTTACViuFJxORQeSLwE4FompTH0d2NUuRJmWgxagzM4gbIYh2gfFLBYu6yodRlTeFcLgoRrvUbUvSUDr78NeoBZIjfgrjFIK5AOjrmyGyQOxDIGcBmrwiNr&X-Amz-Signature=066a4b90c80c9fa41a010c93b11f4c47b5a933c308e60005b6f1e7df9a64075a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
