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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFLJWSA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBhxUW3OI4jH9BA4yq07K3bhxR1mJV47OP8UoJTaQur7AiBR%2BWHxl1%2FzAHXz5xzUgnE3rtUy%2F4fYZGAu84L39lJv6CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7yzb1It0NYtN8X4KtwDl0fMlz%2Fx9zl8F8fmkAAgTqMX5GZvvCAy7jIhAU1%2BQyCY%2FPxyjhFFCn4nIZV2GhOc50wal6iMQJouixB77oA77YiHm4iy58UhxTbQzxbM%2Fyol2emtLK1yPp6GzVoXi9DTs85Eepw0gQZWmI9LW%2BF7UYNSF7DvX%2BUXGIQa%2FVj%2FS4EeM5TDApicigc8j3KT1II0b4F5MbAg262bi0c%2BIdOtG8s7nfNLAAc3rocWGvjDEFN7MhZKVfuiPGOXUaC2e3ZowUCz8Qt6V2vltFYQ6twdU%2Bo1vqg4B7J4mvGdG%2F6F%2F5f3PUkKC6hajK7u%2FTKi4ibuZm2Gi1DhsE09uGvRuzPAbPj5gi3OD1XQapXB0OHZlBGaxHT0A%2FiQXvnBAly3daK0dbH1YzSx5x%2FIs04vfhNzfevQOyXtNbzdlKhCaGtHDoGvwWWd%2B1kHndvmUUuin1SDCSfabM0VkaLw4nFlQ2AUOQGc4A20KTnHpfzDKrnTwAOl5C67%2BKZxhqhwaExBOGgh5z%2F68yBVo72q0nvaK%2FqH6wYbLRLP6sEJmSIH2SuKuwavprCX2CvMl%2BJMFIRHUcd2AEt5gleQrd1rphnEszvw1KoZ1cfO%2BKQq5bbFpxEcrIFAvNF%2FXEa6OmEL7qYw0Pb6vgY6pgEidYbwMnctrLNFixMSlEXfIndeIGAaX6OGyw2AWYuOrrRorEiV5PKPBMzxB9IPgJy3euv55Ow87nrniChKTxWaPWF%2BCMhIgfewAne9KfHOMdrlhsGIuFw4j9s1n0mtgFeQJmxOMFqu7%2BjzFVYRnbvcJtRufsblt82nd%2BnaZcMYRApTq5rhsPBGH05ot8gbT16SlasTaXnr8n34fkh1rsJuZgXnueB9&X-Amz-Signature=b7a4b361a39e923b80248d514f3c46c48c77f83ec6e83916278be4f1089b029c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFLJWSA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBhxUW3OI4jH9BA4yq07K3bhxR1mJV47OP8UoJTaQur7AiBR%2BWHxl1%2FzAHXz5xzUgnE3rtUy%2F4fYZGAu84L39lJv6CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7yzb1It0NYtN8X4KtwDl0fMlz%2Fx9zl8F8fmkAAgTqMX5GZvvCAy7jIhAU1%2BQyCY%2FPxyjhFFCn4nIZV2GhOc50wal6iMQJouixB77oA77YiHm4iy58UhxTbQzxbM%2Fyol2emtLK1yPp6GzVoXi9DTs85Eepw0gQZWmI9LW%2BF7UYNSF7DvX%2BUXGIQa%2FVj%2FS4EeM5TDApicigc8j3KT1II0b4F5MbAg262bi0c%2BIdOtG8s7nfNLAAc3rocWGvjDEFN7MhZKVfuiPGOXUaC2e3ZowUCz8Qt6V2vltFYQ6twdU%2Bo1vqg4B7J4mvGdG%2F6F%2F5f3PUkKC6hajK7u%2FTKi4ibuZm2Gi1DhsE09uGvRuzPAbPj5gi3OD1XQapXB0OHZlBGaxHT0A%2FiQXvnBAly3daK0dbH1YzSx5x%2FIs04vfhNzfevQOyXtNbzdlKhCaGtHDoGvwWWd%2B1kHndvmUUuin1SDCSfabM0VkaLw4nFlQ2AUOQGc4A20KTnHpfzDKrnTwAOl5C67%2BKZxhqhwaExBOGgh5z%2F68yBVo72q0nvaK%2FqH6wYbLRLP6sEJmSIH2SuKuwavprCX2CvMl%2BJMFIRHUcd2AEt5gleQrd1rphnEszvw1KoZ1cfO%2BKQq5bbFpxEcrIFAvNF%2FXEa6OmEL7qYw0Pb6vgY6pgEidYbwMnctrLNFixMSlEXfIndeIGAaX6OGyw2AWYuOrrRorEiV5PKPBMzxB9IPgJy3euv55Ow87nrniChKTxWaPWF%2BCMhIgfewAne9KfHOMdrlhsGIuFw4j9s1n0mtgFeQJmxOMFqu7%2BjzFVYRnbvcJtRufsblt82nd%2BnaZcMYRApTq5rhsPBGH05ot8gbT16SlasTaXnr8n34fkh1rsJuZgXnueB9&X-Amz-Signature=96d692590fdf003afb525da2e900af4b9e5a8d9243495afa30594012ede35394&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFLJWSA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBhxUW3OI4jH9BA4yq07K3bhxR1mJV47OP8UoJTaQur7AiBR%2BWHxl1%2FzAHXz5xzUgnE3rtUy%2F4fYZGAu84L39lJv6CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7yzb1It0NYtN8X4KtwDl0fMlz%2Fx9zl8F8fmkAAgTqMX5GZvvCAy7jIhAU1%2BQyCY%2FPxyjhFFCn4nIZV2GhOc50wal6iMQJouixB77oA77YiHm4iy58UhxTbQzxbM%2Fyol2emtLK1yPp6GzVoXi9DTs85Eepw0gQZWmI9LW%2BF7UYNSF7DvX%2BUXGIQa%2FVj%2FS4EeM5TDApicigc8j3KT1II0b4F5MbAg262bi0c%2BIdOtG8s7nfNLAAc3rocWGvjDEFN7MhZKVfuiPGOXUaC2e3ZowUCz8Qt6V2vltFYQ6twdU%2Bo1vqg4B7J4mvGdG%2F6F%2F5f3PUkKC6hajK7u%2FTKi4ibuZm2Gi1DhsE09uGvRuzPAbPj5gi3OD1XQapXB0OHZlBGaxHT0A%2FiQXvnBAly3daK0dbH1YzSx5x%2FIs04vfhNzfevQOyXtNbzdlKhCaGtHDoGvwWWd%2B1kHndvmUUuin1SDCSfabM0VkaLw4nFlQ2AUOQGc4A20KTnHpfzDKrnTwAOl5C67%2BKZxhqhwaExBOGgh5z%2F68yBVo72q0nvaK%2FqH6wYbLRLP6sEJmSIH2SuKuwavprCX2CvMl%2BJMFIRHUcd2AEt5gleQrd1rphnEszvw1KoZ1cfO%2BKQq5bbFpxEcrIFAvNF%2FXEa6OmEL7qYw0Pb6vgY6pgEidYbwMnctrLNFixMSlEXfIndeIGAaX6OGyw2AWYuOrrRorEiV5PKPBMzxB9IPgJy3euv55Ow87nrniChKTxWaPWF%2BCMhIgfewAne9KfHOMdrlhsGIuFw4j9s1n0mtgFeQJmxOMFqu7%2BjzFVYRnbvcJtRufsblt82nd%2BnaZcMYRApTq5rhsPBGH05ot8gbT16SlasTaXnr8n34fkh1rsJuZgXnueB9&X-Amz-Signature=2eb3c5158a158fb1b7d7dd7a75fc9e6c01a017fefd1a2dabd218358c7078b266&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
