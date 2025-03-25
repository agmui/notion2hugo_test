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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGUTTRN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEAA9M0CJdb6YobWfn8hbuQjDbpvh2YqblFtXdB3wPwIhAOkSX1jifO3NdD4D4tmNvG8XLFeF91FErlwQnSQU0NflKv8DCB0QABoMNjM3NDIzMTgzODA1IgzgRQFGA6ZOlxDyjocq3AME4hybOCsF%2FFgd9slAuDfd3agziCdxKYuC5eOY7kgs7hpHkUllR4qBfyitx0efkFNeK0hypYJa%2BfKvKu9%2FhlJo%2BhuSSBDJc8CCAhFCYa26x0YgalYAwiJfFWNn%2FQdUD3QTTWSAV0fiynJXJs7C78ZmxkCL6x5C9k7nSvDyLGt3fxZtUoudMSDqVr5WH5R3Y3P5kIbH%2FIO1WPr8ZlaCRGBycF73SlKbXVqpiJrbFr83f58djweu9gllPFYrFI6CMONOSx5tAD7zVC0YjaOIZYoVAqoKs4nDYSC66l%2FIUn%2B4VMEAngf06PBGWHLJkLUo6A29gKGNKbrmLXw8nFKDeAjRBhm8Dz%2BN9BOW9b9KGg29WBrAGM1YIGEdx4jtwRYt6Ryj7ifv%2B10D17b1jyqFPbb6Z22biMhpeFVow4ivt8%2BNgRVxORX3WrXRGrX0pkVOKIo9EsOieDUDt1wEomJF%2FOX%2FqV7VQrRcLlG0CLqjWYJ%2Fxga6GRt%2FeITB7f0kL33shZVjNY1nJ6J8he4Xg6piwF7dAvFS3OjUnwQ%2BtBdzPi%2FjK%2BbJJgC%2BUoOoRWvj0%2FpaflBDuUY8QK4Zt9sAYc3NXyUvXnvGAX2KmGxLX8Jh4ATDEYuIvpy0feroNQrVDDDol4y%2FBjqkASa3ulAcq%2BTgx7LDDD6nM9XyNSj%2B3UB2VAOju%2FRP1Xno6afatOeHunAjCG9S7%2B%2BKpdu%2Fa%2BAwj0j4RpmjYB78hnUAL1WLOE1EsAwZrE5%2Fc7%2BpPig8ZcBnxq9VjAMTrMKukrdo0BzatsX1sNNF%2BK%2FjQH5FtoEZ%2BA5dhJOVgtBzg8iG7ohc3u%2FEwacXkOHcduoIHbliv%2BgYZ5FIWu2GpcFeDfgFO6wZ&X-Amz-Signature=2a2ed1fb4e206d03494450903ce326b2a3feecdbda3419f84a90cc4ff1de52d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGUTTRN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEAA9M0CJdb6YobWfn8hbuQjDbpvh2YqblFtXdB3wPwIhAOkSX1jifO3NdD4D4tmNvG8XLFeF91FErlwQnSQU0NflKv8DCB0QABoMNjM3NDIzMTgzODA1IgzgRQFGA6ZOlxDyjocq3AME4hybOCsF%2FFgd9slAuDfd3agziCdxKYuC5eOY7kgs7hpHkUllR4qBfyitx0efkFNeK0hypYJa%2BfKvKu9%2FhlJo%2BhuSSBDJc8CCAhFCYa26x0YgalYAwiJfFWNn%2FQdUD3QTTWSAV0fiynJXJs7C78ZmxkCL6x5C9k7nSvDyLGt3fxZtUoudMSDqVr5WH5R3Y3P5kIbH%2FIO1WPr8ZlaCRGBycF73SlKbXVqpiJrbFr83f58djweu9gllPFYrFI6CMONOSx5tAD7zVC0YjaOIZYoVAqoKs4nDYSC66l%2FIUn%2B4VMEAngf06PBGWHLJkLUo6A29gKGNKbrmLXw8nFKDeAjRBhm8Dz%2BN9BOW9b9KGg29WBrAGM1YIGEdx4jtwRYt6Ryj7ifv%2B10D17b1jyqFPbb6Z22biMhpeFVow4ivt8%2BNgRVxORX3WrXRGrX0pkVOKIo9EsOieDUDt1wEomJF%2FOX%2FqV7VQrRcLlG0CLqjWYJ%2Fxga6GRt%2FeITB7f0kL33shZVjNY1nJ6J8he4Xg6piwF7dAvFS3OjUnwQ%2BtBdzPi%2FjK%2BbJJgC%2BUoOoRWvj0%2FpaflBDuUY8QK4Zt9sAYc3NXyUvXnvGAX2KmGxLX8Jh4ATDEYuIvpy0feroNQrVDDDol4y%2FBjqkASa3ulAcq%2BTgx7LDDD6nM9XyNSj%2B3UB2VAOju%2FRP1Xno6afatOeHunAjCG9S7%2B%2BKpdu%2Fa%2BAwj0j4RpmjYB78hnUAL1WLOE1EsAwZrE5%2Fc7%2BpPig8ZcBnxq9VjAMTrMKukrdo0BzatsX1sNNF%2BK%2FjQH5FtoEZ%2BA5dhJOVgtBzg8iG7ohc3u%2FEwacXkOHcduoIHbliv%2BgYZ5FIWu2GpcFeDfgFO6wZ&X-Amz-Signature=51b48c09ecaad0aeae3632fd9ea33b4799d026e264d4a603bb0a31facf77ea86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGUTTRN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEAA9M0CJdb6YobWfn8hbuQjDbpvh2YqblFtXdB3wPwIhAOkSX1jifO3NdD4D4tmNvG8XLFeF91FErlwQnSQU0NflKv8DCB0QABoMNjM3NDIzMTgzODA1IgzgRQFGA6ZOlxDyjocq3AME4hybOCsF%2FFgd9slAuDfd3agziCdxKYuC5eOY7kgs7hpHkUllR4qBfyitx0efkFNeK0hypYJa%2BfKvKu9%2FhlJo%2BhuSSBDJc8CCAhFCYa26x0YgalYAwiJfFWNn%2FQdUD3QTTWSAV0fiynJXJs7C78ZmxkCL6x5C9k7nSvDyLGt3fxZtUoudMSDqVr5WH5R3Y3P5kIbH%2FIO1WPr8ZlaCRGBycF73SlKbXVqpiJrbFr83f58djweu9gllPFYrFI6CMONOSx5tAD7zVC0YjaOIZYoVAqoKs4nDYSC66l%2FIUn%2B4VMEAngf06PBGWHLJkLUo6A29gKGNKbrmLXw8nFKDeAjRBhm8Dz%2BN9BOW9b9KGg29WBrAGM1YIGEdx4jtwRYt6Ryj7ifv%2B10D17b1jyqFPbb6Z22biMhpeFVow4ivt8%2BNgRVxORX3WrXRGrX0pkVOKIo9EsOieDUDt1wEomJF%2FOX%2FqV7VQrRcLlG0CLqjWYJ%2Fxga6GRt%2FeITB7f0kL33shZVjNY1nJ6J8he4Xg6piwF7dAvFS3OjUnwQ%2BtBdzPi%2FjK%2BbJJgC%2BUoOoRWvj0%2FpaflBDuUY8QK4Zt9sAYc3NXyUvXnvGAX2KmGxLX8Jh4ATDEYuIvpy0feroNQrVDDDol4y%2FBjqkASa3ulAcq%2BTgx7LDDD6nM9XyNSj%2B3UB2VAOju%2FRP1Xno6afatOeHunAjCG9S7%2B%2BKpdu%2Fa%2BAwj0j4RpmjYB78hnUAL1WLOE1EsAwZrE5%2Fc7%2BpPig8ZcBnxq9VjAMTrMKukrdo0BzatsX1sNNF%2BK%2FjQH5FtoEZ%2BA5dhJOVgtBzg8iG7ohc3u%2FEwacXkOHcduoIHbliv%2BgYZ5FIWu2GpcFeDfgFO6wZ&X-Amz-Signature=fee76a9261dbd25fa29d91647cc3e68dd46f92b596b45c5d212b5330639d0478&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
