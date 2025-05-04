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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEU5KYJT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUcAKt6aF3X9IW0LQSctNPw30wPoTw5w49Jw6%2FyN%2BmugIhANlFydQpvK6sERmusyj3meLcU1QxVM%2Bj%2FHqTD%2B812lFNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIxr41DgZc0F%2F%2BvNYq3AOSQuXJL3yF%2BYSKGat2MQIMQ15296mnIyqxGW9VAOwtNuxKOe5mdqwOuWVf%2FTxcqnhp9Yh3RnKTVEnK3%2FLew7zF5TiIvCrAQhE4EVSPsJh%2F47miRS%2F%2BIy1GAewu8Tr1YRaozYDtEkQd%2B40dhzlzJrnFE55NFyvo25JiIkt1XibBhBapjnpdfITsBa8pwwyD8MJDZGtH3mcj%2BN2ZTSSvAAC6TiPrr7RYmL%2FqZ9wLuTXp3WS9uRSKn%2FXIiGxABzkjPiuW1k4oXIVKGR3dhe6lqtXjc9nOlFTKIimw8v2gNbBN%2BrVA%2BYjYPUU0FzQ3O%2BumJ7EO9fRO0ucyHHXzBJj3SVnuWI%2F%2FT%2BAoro1hIqttapTpXcCgzR9jWWge5ZN%2F16x0p2kBJiRONS1lGgGl%2BpqNkoPw6cWIJwoxsEouHdv8xlszIt%2FnEqpa6EcGsPdEWWdIr922Fon54J6rsxuSZgvUyYQIaPM7rg3plrWEL79yzumo6tzffqflvMf3BcPqJeJIZcnTflt8hnRYha0rXI%2BNGEWa4QiirH5KTAYze2BweAb5C8eddqbHmjEsRo3zDlW5EOY1bVCzuHn9oCinOXlZ6MvEc9ngn8AqI0WlHpJF2b4CJ1uE3XxEwOUInnXWSjCt0tvABjqkAUzzL3UrwxDPc9148XW40uN%2FqX%2BBV2Pqnx4OmqKbL60Ft4%2Bm52MFtRYwbS2K5FfEuXRt27tvmYW1WZ389VZxLmcl30BiWbTEf%2F%2BdoeQ0Msv7rgVlYiaflkuAExYPMoS86vR%2FJx1WTbdI%2B8W0LV5hCFd2VQFnCrC7pcK6qIzNWDxhc31dlL1zp33C%2F1bNsVBCp4CyODkpkIROOhfEbXvqxPSk79HY&X-Amz-Signature=c1b3366a2310a7723e2d43d8807a39d416af56cd8c91a5604d82c96701937568&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEU5KYJT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUcAKt6aF3X9IW0LQSctNPw30wPoTw5w49Jw6%2FyN%2BmugIhANlFydQpvK6sERmusyj3meLcU1QxVM%2Bj%2FHqTD%2B812lFNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIxr41DgZc0F%2F%2BvNYq3AOSQuXJL3yF%2BYSKGat2MQIMQ15296mnIyqxGW9VAOwtNuxKOe5mdqwOuWVf%2FTxcqnhp9Yh3RnKTVEnK3%2FLew7zF5TiIvCrAQhE4EVSPsJh%2F47miRS%2F%2BIy1GAewu8Tr1YRaozYDtEkQd%2B40dhzlzJrnFE55NFyvo25JiIkt1XibBhBapjnpdfITsBa8pwwyD8MJDZGtH3mcj%2BN2ZTSSvAAC6TiPrr7RYmL%2FqZ9wLuTXp3WS9uRSKn%2FXIiGxABzkjPiuW1k4oXIVKGR3dhe6lqtXjc9nOlFTKIimw8v2gNbBN%2BrVA%2BYjYPUU0FzQ3O%2BumJ7EO9fRO0ucyHHXzBJj3SVnuWI%2F%2FT%2BAoro1hIqttapTpXcCgzR9jWWge5ZN%2F16x0p2kBJiRONS1lGgGl%2BpqNkoPw6cWIJwoxsEouHdv8xlszIt%2FnEqpa6EcGsPdEWWdIr922Fon54J6rsxuSZgvUyYQIaPM7rg3plrWEL79yzumo6tzffqflvMf3BcPqJeJIZcnTflt8hnRYha0rXI%2BNGEWa4QiirH5KTAYze2BweAb5C8eddqbHmjEsRo3zDlW5EOY1bVCzuHn9oCinOXlZ6MvEc9ngn8AqI0WlHpJF2b4CJ1uE3XxEwOUInnXWSjCt0tvABjqkAUzzL3UrwxDPc9148XW40uN%2FqX%2BBV2Pqnx4OmqKbL60Ft4%2Bm52MFtRYwbS2K5FfEuXRt27tvmYW1WZ389VZxLmcl30BiWbTEf%2F%2BdoeQ0Msv7rgVlYiaflkuAExYPMoS86vR%2FJx1WTbdI%2B8W0LV5hCFd2VQFnCrC7pcK6qIzNWDxhc31dlL1zp33C%2F1bNsVBCp4CyODkpkIROOhfEbXvqxPSk79HY&X-Amz-Signature=c31a5e1963c4ab903ced15c46faafb11e30c1d391a14270b0e4082decdfdaf7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEU5KYJT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUcAKt6aF3X9IW0LQSctNPw30wPoTw5w49Jw6%2FyN%2BmugIhANlFydQpvK6sERmusyj3meLcU1QxVM%2Bj%2FHqTD%2B812lFNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIxr41DgZc0F%2F%2BvNYq3AOSQuXJL3yF%2BYSKGat2MQIMQ15296mnIyqxGW9VAOwtNuxKOe5mdqwOuWVf%2FTxcqnhp9Yh3RnKTVEnK3%2FLew7zF5TiIvCrAQhE4EVSPsJh%2F47miRS%2F%2BIy1GAewu8Tr1YRaozYDtEkQd%2B40dhzlzJrnFE55NFyvo25JiIkt1XibBhBapjnpdfITsBa8pwwyD8MJDZGtH3mcj%2BN2ZTSSvAAC6TiPrr7RYmL%2FqZ9wLuTXp3WS9uRSKn%2FXIiGxABzkjPiuW1k4oXIVKGR3dhe6lqtXjc9nOlFTKIimw8v2gNbBN%2BrVA%2BYjYPUU0FzQ3O%2BumJ7EO9fRO0ucyHHXzBJj3SVnuWI%2F%2FT%2BAoro1hIqttapTpXcCgzR9jWWge5ZN%2F16x0p2kBJiRONS1lGgGl%2BpqNkoPw6cWIJwoxsEouHdv8xlszIt%2FnEqpa6EcGsPdEWWdIr922Fon54J6rsxuSZgvUyYQIaPM7rg3plrWEL79yzumo6tzffqflvMf3BcPqJeJIZcnTflt8hnRYha0rXI%2BNGEWa4QiirH5KTAYze2BweAb5C8eddqbHmjEsRo3zDlW5EOY1bVCzuHn9oCinOXlZ6MvEc9ngn8AqI0WlHpJF2b4CJ1uE3XxEwOUInnXWSjCt0tvABjqkAUzzL3UrwxDPc9148XW40uN%2FqX%2BBV2Pqnx4OmqKbL60Ft4%2Bm52MFtRYwbS2K5FfEuXRt27tvmYW1WZ389VZxLmcl30BiWbTEf%2F%2BdoeQ0Msv7rgVlYiaflkuAExYPMoS86vR%2FJx1WTbdI%2B8W0LV5hCFd2VQFnCrC7pcK6qIzNWDxhc31dlL1zp33C%2F1bNsVBCp4CyODkpkIROOhfEbXvqxPSk79HY&X-Amz-Signature=582f8124312878dcd9214a3ac1eed89952a003e80fb74298b0b1979de5c17d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
