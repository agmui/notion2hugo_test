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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CP4PTMO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBVJ%2FKL5nGhYG9Uu6xT3N66Gv5a7jPt41uysNDFTotIuAiEA3qwILb04bvmHsYi76vzYv5eOQVOelqG03oq%2BuGlss9MqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMMmM0LkvT8juH6YircA1bInE0Z1QeXvEPdQk7VrHBNrOUgOKsjA9r3XMUn%2FW9xKhw4OXFIm0cKXJGek1q%2F7UWGtfaFtSxpnZE9cO72z61krKHgh2lCkmm3FyTLz7TuETpKurXMdYkowiQGOksjhvFJuqTnC0WFvvG%2BCnUox89CHjmso%2FXeNPJO4H4YqhX1vv5M37W5jD54j3FF18RqU4t64WE1NigV3WAtYTrOxxvMKodEK%2BAlS63kyr%2F8jfWzcHgOcWEBnbqg2602H8P1ZUJUCxOFvlxcNAizu1lO076uvODEwbl9tM1Sw%2B%2Fxu5gOvFJu1xiiBY8geCBJrnuC6x%2BpMGTxU%2BqPsDnJbinnSMrayDB9773IgQpMm78wQ6jLtfAgAICxKZoYDOEwdymuyLLDg6HkxUa0NJcjUR5DtarXSS9HxXpwLKNW3cNihA8NIjk6nZCMSfU8lhfltRQw4NVlWcHtcZC29kf9hATYMpLA1fu%2BXwxxdgKwg9L87UuUsaS3CBL2OFLZhqtThNblG5rgE40sTzSA1etlr%2Bg4WoJnZCViQ%2BJ%2F3wq2DxXWKR1ZzfbGyL15zv5o7YwMOLH4S0onOSOhIKgoJjMFmny4tYrjccQjL6Z880urltcTtNBxMwS8shNaN7w4bNnTMLSc2L8GOqUBYiphE9zamkmJ7TURG1V8p9A68xXCBJZFQSfGJkO%2BP3Cx6dvLI3EQ4bKlQEFMUwLp7nLCzEnXC%2BFVqfbphJUn8SXeyAPp1XJN%2BZw8OZYcXGijheQhPpTQc1kMRaRSDdYCOUVw6Gjr%2F%2BaZ2zluwKyocJXOgtEHelkV65PXW63UEs5fAlXIvhFrqpcIsZL7eDK5P39CT1KU4%2BY70eKucq3rdzLCmD5d&X-Amz-Signature=4372a45a68518e309ed47f7dac54d558f58e567bea59acfbc4f7348be8f95280&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CP4PTMO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBVJ%2FKL5nGhYG9Uu6xT3N66Gv5a7jPt41uysNDFTotIuAiEA3qwILb04bvmHsYi76vzYv5eOQVOelqG03oq%2BuGlss9MqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMMmM0LkvT8juH6YircA1bInE0Z1QeXvEPdQk7VrHBNrOUgOKsjA9r3XMUn%2FW9xKhw4OXFIm0cKXJGek1q%2F7UWGtfaFtSxpnZE9cO72z61krKHgh2lCkmm3FyTLz7TuETpKurXMdYkowiQGOksjhvFJuqTnC0WFvvG%2BCnUox89CHjmso%2FXeNPJO4H4YqhX1vv5M37W5jD54j3FF18RqU4t64WE1NigV3WAtYTrOxxvMKodEK%2BAlS63kyr%2F8jfWzcHgOcWEBnbqg2602H8P1ZUJUCxOFvlxcNAizu1lO076uvODEwbl9tM1Sw%2B%2Fxu5gOvFJu1xiiBY8geCBJrnuC6x%2BpMGTxU%2BqPsDnJbinnSMrayDB9773IgQpMm78wQ6jLtfAgAICxKZoYDOEwdymuyLLDg6HkxUa0NJcjUR5DtarXSS9HxXpwLKNW3cNihA8NIjk6nZCMSfU8lhfltRQw4NVlWcHtcZC29kf9hATYMpLA1fu%2BXwxxdgKwg9L87UuUsaS3CBL2OFLZhqtThNblG5rgE40sTzSA1etlr%2Bg4WoJnZCViQ%2BJ%2F3wq2DxXWKR1ZzfbGyL15zv5o7YwMOLH4S0onOSOhIKgoJjMFmny4tYrjccQjL6Z880urltcTtNBxMwS8shNaN7w4bNnTMLSc2L8GOqUBYiphE9zamkmJ7TURG1V8p9A68xXCBJZFQSfGJkO%2BP3Cx6dvLI3EQ4bKlQEFMUwLp7nLCzEnXC%2BFVqfbphJUn8SXeyAPp1XJN%2BZw8OZYcXGijheQhPpTQc1kMRaRSDdYCOUVw6Gjr%2F%2BaZ2zluwKyocJXOgtEHelkV65PXW63UEs5fAlXIvhFrqpcIsZL7eDK5P39CT1KU4%2BY70eKucq3rdzLCmD5d&X-Amz-Signature=c5be79e5d51fc761b7084ba74e45eab6b8583f3dd1cdda73e09d86d247120a38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CP4PTMO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBVJ%2FKL5nGhYG9Uu6xT3N66Gv5a7jPt41uysNDFTotIuAiEA3qwILb04bvmHsYi76vzYv5eOQVOelqG03oq%2BuGlss9MqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMMmM0LkvT8juH6YircA1bInE0Z1QeXvEPdQk7VrHBNrOUgOKsjA9r3XMUn%2FW9xKhw4OXFIm0cKXJGek1q%2F7UWGtfaFtSxpnZE9cO72z61krKHgh2lCkmm3FyTLz7TuETpKurXMdYkowiQGOksjhvFJuqTnC0WFvvG%2BCnUox89CHjmso%2FXeNPJO4H4YqhX1vv5M37W5jD54j3FF18RqU4t64WE1NigV3WAtYTrOxxvMKodEK%2BAlS63kyr%2F8jfWzcHgOcWEBnbqg2602H8P1ZUJUCxOFvlxcNAizu1lO076uvODEwbl9tM1Sw%2B%2Fxu5gOvFJu1xiiBY8geCBJrnuC6x%2BpMGTxU%2BqPsDnJbinnSMrayDB9773IgQpMm78wQ6jLtfAgAICxKZoYDOEwdymuyLLDg6HkxUa0NJcjUR5DtarXSS9HxXpwLKNW3cNihA8NIjk6nZCMSfU8lhfltRQw4NVlWcHtcZC29kf9hATYMpLA1fu%2BXwxxdgKwg9L87UuUsaS3CBL2OFLZhqtThNblG5rgE40sTzSA1etlr%2Bg4WoJnZCViQ%2BJ%2F3wq2DxXWKR1ZzfbGyL15zv5o7YwMOLH4S0onOSOhIKgoJjMFmny4tYrjccQjL6Z880urltcTtNBxMwS8shNaN7w4bNnTMLSc2L8GOqUBYiphE9zamkmJ7TURG1V8p9A68xXCBJZFQSfGJkO%2BP3Cx6dvLI3EQ4bKlQEFMUwLp7nLCzEnXC%2BFVqfbphJUn8SXeyAPp1XJN%2BZw8OZYcXGijheQhPpTQc1kMRaRSDdYCOUVw6Gjr%2F%2BaZ2zluwKyocJXOgtEHelkV65PXW63UEs5fAlXIvhFrqpcIsZL7eDK5P39CT1KU4%2BY70eKucq3rdzLCmD5d&X-Amz-Signature=1d6eaf82b29dcb0a78f6dcb89557fc0f8305377475ea59971a9f0248317b9f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
