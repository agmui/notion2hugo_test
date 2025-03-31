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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5OFRKP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGqJ66i5bBAOwl7Kv7hfDdCmf6urNt5tA%2FlOA9J0aQa0AiEArqx0TzTpqnuyQ4jHbCkqcg1U%2Bn4PQoSfIL3jvlgwr08qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDAia3LcZBBbCAclCrcA4I8PYH6xSE%2BLd72z4%2BldH8sszW3QcGaacgnddrZphY9cPzNsNCrSt99%2BCEh59diibtIdORdyJXswrY6RaGlSEuWYnFBjxXAqxDQB4%2Br6ou0TCKX7PZ6OrX0ZwCyDztdGYe0gl7vuz0YcjCD0Nb5ZiHLLolDmnqMZ3eJA73raUwYFSnlBPXNOZ%2BxBiSDgy%2B3eWH1PpCQN2%2BVdOy%2FIH5n8bqqUMNqkgRv%2BIdTvbsT5nj7x%2BDbzZIdAK4%2ByTvEAykP9FGTtp9xJ%2Bj6SiYfNRUA8wPpOHs5fGec2gh13j2ievKickbcVTmj9ijNrex4xz%2BR30d4TCE0XFhy9xHC%2Bgmqy446Ga%2B5KWaJgV%2Bv7YZOuI4uDWk9YKOuaakdBYYswUvVPDSYRQ%2FL2uGMCXlQ6lWgMKQ9N6dLor0mA15VIFz7VXopT8PGdbue2hDBYdhGMsC%2Fkn2%2B4gV%2Blx9TCqTpp4KyG1Rp1zcDRpa1YoJQwfGFmdaxuc3B4qbEc42UmnUVDhJt4h0QFkTsrmfQdxaUHdTqbKfdWZD4P3ZiVABWXuu2YzajwiVaGJ1c9aCa94uU%2FDLINU9lfiRzNUYj7IC9AS%2Bj%2FjnafOhMlmDGcWvFouyz9gS13V3kWjTmXZXKXHwUMOfOqb8GOqUB8p175jlqZp3xnegN%2FvdepHrsWaawaZnXi2mF5kXyxTf%2Bk3dc4seKGq7dYAGshfriwFbWL7RWfUmWsqJSQMTmhRvcA%2BWlbJxhj9RjUFSatFzuvvGe5Cyhwrvx0Er1viZPgJLkL9WsSOj4SfZsTmu%2BJIcC6VFFYvB1ogcydh3TmJBLxeah4wkij40WYNCWoGrnigYH%2FGwHNdGee1GcTKLz6MbsykoR&X-Amz-Signature=e94aa7741f94504569f88c49724467b3ad1b8c3cfa6a287eedf6a311bba7a0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5OFRKP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGqJ66i5bBAOwl7Kv7hfDdCmf6urNt5tA%2FlOA9J0aQa0AiEArqx0TzTpqnuyQ4jHbCkqcg1U%2Bn4PQoSfIL3jvlgwr08qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDAia3LcZBBbCAclCrcA4I8PYH6xSE%2BLd72z4%2BldH8sszW3QcGaacgnddrZphY9cPzNsNCrSt99%2BCEh59diibtIdORdyJXswrY6RaGlSEuWYnFBjxXAqxDQB4%2Br6ou0TCKX7PZ6OrX0ZwCyDztdGYe0gl7vuz0YcjCD0Nb5ZiHLLolDmnqMZ3eJA73raUwYFSnlBPXNOZ%2BxBiSDgy%2B3eWH1PpCQN2%2BVdOy%2FIH5n8bqqUMNqkgRv%2BIdTvbsT5nj7x%2BDbzZIdAK4%2ByTvEAykP9FGTtp9xJ%2Bj6SiYfNRUA8wPpOHs5fGec2gh13j2ievKickbcVTmj9ijNrex4xz%2BR30d4TCE0XFhy9xHC%2Bgmqy446Ga%2B5KWaJgV%2Bv7YZOuI4uDWk9YKOuaakdBYYswUvVPDSYRQ%2FL2uGMCXlQ6lWgMKQ9N6dLor0mA15VIFz7VXopT8PGdbue2hDBYdhGMsC%2Fkn2%2B4gV%2Blx9TCqTpp4KyG1Rp1zcDRpa1YoJQwfGFmdaxuc3B4qbEc42UmnUVDhJt4h0QFkTsrmfQdxaUHdTqbKfdWZD4P3ZiVABWXuu2YzajwiVaGJ1c9aCa94uU%2FDLINU9lfiRzNUYj7IC9AS%2Bj%2FjnafOhMlmDGcWvFouyz9gS13V3kWjTmXZXKXHwUMOfOqb8GOqUB8p175jlqZp3xnegN%2FvdepHrsWaawaZnXi2mF5kXyxTf%2Bk3dc4seKGq7dYAGshfriwFbWL7RWfUmWsqJSQMTmhRvcA%2BWlbJxhj9RjUFSatFzuvvGe5Cyhwrvx0Er1viZPgJLkL9WsSOj4SfZsTmu%2BJIcC6VFFYvB1ogcydh3TmJBLxeah4wkij40WYNCWoGrnigYH%2FGwHNdGee1GcTKLz6MbsykoR&X-Amz-Signature=db5ab5a74a2befd59e08c1afff23631f7aa5d0893ca7e89d5defa1a25221d719&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5OFRKP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGqJ66i5bBAOwl7Kv7hfDdCmf6urNt5tA%2FlOA9J0aQa0AiEArqx0TzTpqnuyQ4jHbCkqcg1U%2Bn4PQoSfIL3jvlgwr08qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDAia3LcZBBbCAclCrcA4I8PYH6xSE%2BLd72z4%2BldH8sszW3QcGaacgnddrZphY9cPzNsNCrSt99%2BCEh59diibtIdORdyJXswrY6RaGlSEuWYnFBjxXAqxDQB4%2Br6ou0TCKX7PZ6OrX0ZwCyDztdGYe0gl7vuz0YcjCD0Nb5ZiHLLolDmnqMZ3eJA73raUwYFSnlBPXNOZ%2BxBiSDgy%2B3eWH1PpCQN2%2BVdOy%2FIH5n8bqqUMNqkgRv%2BIdTvbsT5nj7x%2BDbzZIdAK4%2ByTvEAykP9FGTtp9xJ%2Bj6SiYfNRUA8wPpOHs5fGec2gh13j2ievKickbcVTmj9ijNrex4xz%2BR30d4TCE0XFhy9xHC%2Bgmqy446Ga%2B5KWaJgV%2Bv7YZOuI4uDWk9YKOuaakdBYYswUvVPDSYRQ%2FL2uGMCXlQ6lWgMKQ9N6dLor0mA15VIFz7VXopT8PGdbue2hDBYdhGMsC%2Fkn2%2B4gV%2Blx9TCqTpp4KyG1Rp1zcDRpa1YoJQwfGFmdaxuc3B4qbEc42UmnUVDhJt4h0QFkTsrmfQdxaUHdTqbKfdWZD4P3ZiVABWXuu2YzajwiVaGJ1c9aCa94uU%2FDLINU9lfiRzNUYj7IC9AS%2Bj%2FjnafOhMlmDGcWvFouyz9gS13V3kWjTmXZXKXHwUMOfOqb8GOqUB8p175jlqZp3xnegN%2FvdepHrsWaawaZnXi2mF5kXyxTf%2Bk3dc4seKGq7dYAGshfriwFbWL7RWfUmWsqJSQMTmhRvcA%2BWlbJxhj9RjUFSatFzuvvGe5Cyhwrvx0Er1viZPgJLkL9WsSOj4SfZsTmu%2BJIcC6VFFYvB1ogcydh3TmJBLxeah4wkij40WYNCWoGrnigYH%2FGwHNdGee1GcTKLz6MbsykoR&X-Amz-Signature=2b866031967910cc1bc2a1a238fd39b1a97eadcef7462ee70209508589a9643d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
