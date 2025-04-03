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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N3H7ZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFraII1ANRsTaoAiO5skys9QIioKIttBCXs7%2F1n5rRwXAiEA0%2BcbLbwAqG3Cl3n8DRko3ianMl%2Fmb%2Fkx5j6WJ3Uh%2BwgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE2aLH2hAv01h2ZyrcA54RwhDmpwPsS7iBSbJbfmm9oSUoUBk3zH2VE2tImhvEAPxIaH%2FJxqYXaZDZZpfEY5ymWxUSESuHJIiINzjdRdsL6sKU62lHtA87WE1LO6JtsIaRaD%2FNNNY2MGaoMwdbYOhiVxNF3ZHLYvhwhiwq6rjAjJqo196wkf5wGNN6RuPbMHt9os%2FypsPnC3A3CGG3I1ZH5i2yROvRB835GmKgXpLI3VtdTYMNvcvs8rzfTx4%2Bbf2NV3LeqL0%2BqRRqAk60AQVW13kW4OXY0bMI2cgl82Vopo9sKWvRFro%2Bbs9x%2BQX2QjTWtXv3S2gDbJB10bP5%2BpHukLh1fK1CO4HlSOivbq5uhZp%2F1QZCnBbNXQH6qSfCjIvFg8%2B%2Fjz9ZRt7MUuETNghsaVnVHhP1tjHsgTKeTbg9UlsgLLOIK8yYtCBeWsQVXNDF41mcg3JIbMyxobSyqU%2Bs%2BBwmvIcZXrB3%2BpBSP5HNYpVPSCJr5WMQICuouzNCmoDiPhcyKKFeegf9i3wqgN%2FyzzcK%2F48ubOfjlKEdhgZm3bCS6DdFePmQeTTvncNgdwi2Uj3LOQTw9coiyg%2F4xvt50aa5KXysvKDqhzhiYBFH5qdUssqtdBk5%2BfdksYeQVEV4jJcUNvEOK4ncMMGdu78GOqUB6XsUlbhh8Om3acxmjWYAvmRja3plEkjPLYrrRWd4Jn07clIm7jfY0cX31i%2FtXB73H6JlEhc3lV0Bhg2qd7J2%2F4x66bRaMDIYgknPI93uHN926a82ZDcI1uGmVGZ4ekKofNqmgb6PhyhGIMadJQ7KsWuZ7WLNyjwQdMEpAYb%2Fd4niR2aggftSGN0fIJkarQaltT1VDHqElm23EufGeUjP%2BTK0bHxD&X-Amz-Signature=ffb1c1241485c5558cf32c3b9b43b7cb0ed25a8f3c4222d3138f69aafa892175&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N3H7ZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFraII1ANRsTaoAiO5skys9QIioKIttBCXs7%2F1n5rRwXAiEA0%2BcbLbwAqG3Cl3n8DRko3ianMl%2Fmb%2Fkx5j6WJ3Uh%2BwgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE2aLH2hAv01h2ZyrcA54RwhDmpwPsS7iBSbJbfmm9oSUoUBk3zH2VE2tImhvEAPxIaH%2FJxqYXaZDZZpfEY5ymWxUSESuHJIiINzjdRdsL6sKU62lHtA87WE1LO6JtsIaRaD%2FNNNY2MGaoMwdbYOhiVxNF3ZHLYvhwhiwq6rjAjJqo196wkf5wGNN6RuPbMHt9os%2FypsPnC3A3CGG3I1ZH5i2yROvRB835GmKgXpLI3VtdTYMNvcvs8rzfTx4%2Bbf2NV3LeqL0%2BqRRqAk60AQVW13kW4OXY0bMI2cgl82Vopo9sKWvRFro%2Bbs9x%2BQX2QjTWtXv3S2gDbJB10bP5%2BpHukLh1fK1CO4HlSOivbq5uhZp%2F1QZCnBbNXQH6qSfCjIvFg8%2B%2Fjz9ZRt7MUuETNghsaVnVHhP1tjHsgTKeTbg9UlsgLLOIK8yYtCBeWsQVXNDF41mcg3JIbMyxobSyqU%2Bs%2BBwmvIcZXrB3%2BpBSP5HNYpVPSCJr5WMQICuouzNCmoDiPhcyKKFeegf9i3wqgN%2FyzzcK%2F48ubOfjlKEdhgZm3bCS6DdFePmQeTTvncNgdwi2Uj3LOQTw9coiyg%2F4xvt50aa5KXysvKDqhzhiYBFH5qdUssqtdBk5%2BfdksYeQVEV4jJcUNvEOK4ncMMGdu78GOqUB6XsUlbhh8Om3acxmjWYAvmRja3plEkjPLYrrRWd4Jn07clIm7jfY0cX31i%2FtXB73H6JlEhc3lV0Bhg2qd7J2%2F4x66bRaMDIYgknPI93uHN926a82ZDcI1uGmVGZ4ekKofNqmgb6PhyhGIMadJQ7KsWuZ7WLNyjwQdMEpAYb%2Fd4niR2aggftSGN0fIJkarQaltT1VDHqElm23EufGeUjP%2BTK0bHxD&X-Amz-Signature=507ba9b79edc52ce4f9bc42efab6de0cf41c6957c52e4e09963f42f2acc5ff9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N3H7ZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFraII1ANRsTaoAiO5skys9QIioKIttBCXs7%2F1n5rRwXAiEA0%2BcbLbwAqG3Cl3n8DRko3ianMl%2Fmb%2Fkx5j6WJ3Uh%2BwgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE2aLH2hAv01h2ZyrcA54RwhDmpwPsS7iBSbJbfmm9oSUoUBk3zH2VE2tImhvEAPxIaH%2FJxqYXaZDZZpfEY5ymWxUSESuHJIiINzjdRdsL6sKU62lHtA87WE1LO6JtsIaRaD%2FNNNY2MGaoMwdbYOhiVxNF3ZHLYvhwhiwq6rjAjJqo196wkf5wGNN6RuPbMHt9os%2FypsPnC3A3CGG3I1ZH5i2yROvRB835GmKgXpLI3VtdTYMNvcvs8rzfTx4%2Bbf2NV3LeqL0%2BqRRqAk60AQVW13kW4OXY0bMI2cgl82Vopo9sKWvRFro%2Bbs9x%2BQX2QjTWtXv3S2gDbJB10bP5%2BpHukLh1fK1CO4HlSOivbq5uhZp%2F1QZCnBbNXQH6qSfCjIvFg8%2B%2Fjz9ZRt7MUuETNghsaVnVHhP1tjHsgTKeTbg9UlsgLLOIK8yYtCBeWsQVXNDF41mcg3JIbMyxobSyqU%2Bs%2BBwmvIcZXrB3%2BpBSP5HNYpVPSCJr5WMQICuouzNCmoDiPhcyKKFeegf9i3wqgN%2FyzzcK%2F48ubOfjlKEdhgZm3bCS6DdFePmQeTTvncNgdwi2Uj3LOQTw9coiyg%2F4xvt50aa5KXysvKDqhzhiYBFH5qdUssqtdBk5%2BfdksYeQVEV4jJcUNvEOK4ncMMGdu78GOqUB6XsUlbhh8Om3acxmjWYAvmRja3plEkjPLYrrRWd4Jn07clIm7jfY0cX31i%2FtXB73H6JlEhc3lV0Bhg2qd7J2%2F4x66bRaMDIYgknPI93uHN926a82ZDcI1uGmVGZ4ekKofNqmgb6PhyhGIMadJQ7KsWuZ7WLNyjwQdMEpAYb%2Fd4niR2aggftSGN0fIJkarQaltT1VDHqElm23EufGeUjP%2BTK0bHxD&X-Amz-Signature=5b493ac5d42e960a81c73deaa9e2fdeafe314684350bbf52108681d3e2876a49&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
