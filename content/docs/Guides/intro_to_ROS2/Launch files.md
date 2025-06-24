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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ36QUCC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIG0UT9r4CUeC0Vmt1oq6B%2FkpbhttBQo15njUxRvUstcyAiEAnNVSDvij9oAob50WmOdUJtJjEBFWfc6%2FswGd35kbcYsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFgwe%2F1qdLzOTZfotCrcAyGMwrwtRTK0DAOznUAvMayF0OfZDAuRzYjHLIAA7naXMZ8Iz%2Bq%2Bytlc8GVx2g5mSM7Hg4fnzJ6xNmzSzQ%2BaSOYiLQXxiql0l9pFkhzYdR8v9oDV491KgX7qUii4YrbvmJj%2BUnUfKVjbWijgHYCyVkL67ZtWQU5T%2Fu3aP8JVDGexCE9rEX4qyTLgsQTmmSWzemRvJHMinLyuSd91Hu1158boip0zvgOgWHlQaqrziXPVQQ1g7C1RxZw7AigUJYZMIjr%2BzsLyYNT5wYc2UNDq99isMIpkCkh0lPOgybi6FeVCFFnEpMosFM38h62R9%2FVmMpkw0RipG%2BsRKbGmd5jajIRWL175jE1Ycvs9UaWKzNq9GqLlJlkf4Nlr5M6MQYm6K6QYqn0d9PyyC93l7ULmaJeKlOv7jLmxsS5J%2B34WtGnKeUrFLZHNwJ%2FJL0ML7y9WKzolTuuN%2BlzMJYG1mXnN%2FrNuSRtFtFsthgyhvzoQtYOCPbr3HbbCc5d6So69Ndlb5m01G8VAgQAcq6EO2TAVauMeayl1IP3XYomNEHs%2FQGt7qZQb9Fk1yEYrmTGx7WCDopygX0nJRYGAyk9%2F9ObGRk7T5%2B5U0KfPpAn3h92LCm5gmvJligEXPiY74HbKMLe%2B68IGOqUBHQbURbOzVOrQZnkLqs9NbUmjUFTB866rHvhGtFmSJjVDWX0fLAnlCIZh4USVrJpNgFckkaPdHOcT%2BXKLj2KSmJQBjl2k%2Fj%2B2HrK6mw4wbjSRmSIsP6W5yOY6PT4f6tYJD10iDONm96LWyNkktqdMKM23jODFKd4UQvYhvC2Z0CI7k6xV8IHRIuMzy6km8%2BUkFDSHgqKLf1UxWXbRcK9nQ86uHDls&X-Amz-Signature=6e9c7ec3767f1f2e1cb512b2ae982bbb16266019854c7296e078555e2f5c7ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ36QUCC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIG0UT9r4CUeC0Vmt1oq6B%2FkpbhttBQo15njUxRvUstcyAiEAnNVSDvij9oAob50WmOdUJtJjEBFWfc6%2FswGd35kbcYsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFgwe%2F1qdLzOTZfotCrcAyGMwrwtRTK0DAOznUAvMayF0OfZDAuRzYjHLIAA7naXMZ8Iz%2Bq%2Bytlc8GVx2g5mSM7Hg4fnzJ6xNmzSzQ%2BaSOYiLQXxiql0l9pFkhzYdR8v9oDV491KgX7qUii4YrbvmJj%2BUnUfKVjbWijgHYCyVkL67ZtWQU5T%2Fu3aP8JVDGexCE9rEX4qyTLgsQTmmSWzemRvJHMinLyuSd91Hu1158boip0zvgOgWHlQaqrziXPVQQ1g7C1RxZw7AigUJYZMIjr%2BzsLyYNT5wYc2UNDq99isMIpkCkh0lPOgybi6FeVCFFnEpMosFM38h62R9%2FVmMpkw0RipG%2BsRKbGmd5jajIRWL175jE1Ycvs9UaWKzNq9GqLlJlkf4Nlr5M6MQYm6K6QYqn0d9PyyC93l7ULmaJeKlOv7jLmxsS5J%2B34WtGnKeUrFLZHNwJ%2FJL0ML7y9WKzolTuuN%2BlzMJYG1mXnN%2FrNuSRtFtFsthgyhvzoQtYOCPbr3HbbCc5d6So69Ndlb5m01G8VAgQAcq6EO2TAVauMeayl1IP3XYomNEHs%2FQGt7qZQb9Fk1yEYrmTGx7WCDopygX0nJRYGAyk9%2F9ObGRk7T5%2B5U0KfPpAn3h92LCm5gmvJligEXPiY74HbKMLe%2B68IGOqUBHQbURbOzVOrQZnkLqs9NbUmjUFTB866rHvhGtFmSJjVDWX0fLAnlCIZh4USVrJpNgFckkaPdHOcT%2BXKLj2KSmJQBjl2k%2Fj%2B2HrK6mw4wbjSRmSIsP6W5yOY6PT4f6tYJD10iDONm96LWyNkktqdMKM23jODFKd4UQvYhvC2Z0CI7k6xV8IHRIuMzy6km8%2BUkFDSHgqKLf1UxWXbRcK9nQ86uHDls&X-Amz-Signature=46ea542cae21352b58cb38908147435a0c268049c6105d202ca02915123ff01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ36QUCC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIG0UT9r4CUeC0Vmt1oq6B%2FkpbhttBQo15njUxRvUstcyAiEAnNVSDvij9oAob50WmOdUJtJjEBFWfc6%2FswGd35kbcYsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFgwe%2F1qdLzOTZfotCrcAyGMwrwtRTK0DAOznUAvMayF0OfZDAuRzYjHLIAA7naXMZ8Iz%2Bq%2Bytlc8GVx2g5mSM7Hg4fnzJ6xNmzSzQ%2BaSOYiLQXxiql0l9pFkhzYdR8v9oDV491KgX7qUii4YrbvmJj%2BUnUfKVjbWijgHYCyVkL67ZtWQU5T%2Fu3aP8JVDGexCE9rEX4qyTLgsQTmmSWzemRvJHMinLyuSd91Hu1158boip0zvgOgWHlQaqrziXPVQQ1g7C1RxZw7AigUJYZMIjr%2BzsLyYNT5wYc2UNDq99isMIpkCkh0lPOgybi6FeVCFFnEpMosFM38h62R9%2FVmMpkw0RipG%2BsRKbGmd5jajIRWL175jE1Ycvs9UaWKzNq9GqLlJlkf4Nlr5M6MQYm6K6QYqn0d9PyyC93l7ULmaJeKlOv7jLmxsS5J%2B34WtGnKeUrFLZHNwJ%2FJL0ML7y9WKzolTuuN%2BlzMJYG1mXnN%2FrNuSRtFtFsthgyhvzoQtYOCPbr3HbbCc5d6So69Ndlb5m01G8VAgQAcq6EO2TAVauMeayl1IP3XYomNEHs%2FQGt7qZQb9Fk1yEYrmTGx7WCDopygX0nJRYGAyk9%2F9ObGRk7T5%2B5U0KfPpAn3h92LCm5gmvJligEXPiY74HbKMLe%2B68IGOqUBHQbURbOzVOrQZnkLqs9NbUmjUFTB866rHvhGtFmSJjVDWX0fLAnlCIZh4USVrJpNgFckkaPdHOcT%2BXKLj2KSmJQBjl2k%2Fj%2B2HrK6mw4wbjSRmSIsP6W5yOY6PT4f6tYJD10iDONm96LWyNkktqdMKM23jODFKd4UQvYhvC2Z0CI7k6xV8IHRIuMzy6km8%2BUkFDSHgqKLf1UxWXbRcK9nQ86uHDls&X-Amz-Signature=1ed0c52b17965b868bc7dd13205c1d3003e3f76cc544176b60798a100c231ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
