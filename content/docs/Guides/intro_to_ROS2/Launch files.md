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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZMUAQ5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr8RqgtbRgJpy70Mf7OEW%2F3qziwnM0UE1RiuDUKbvGzAiEAzxD09%2FwX34zecjYC5K5srIqXZFcTRZVcj8taXQkJmFgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIIPtlHJQYlUYKkEjyrcA1Lk9%2FDRPDxMDty2OxWOhwzNFotoG%2BiX0bAW6v7vJJ3oQegva20IANqAHCIb4ebkm3BxIrOC9c6JaPSw8oGmbFSlTvDCG7btTdnqtMaT9kn7icFpp9e2kd7LBpL1NlguZL%2FAMZ5aOQ%2Fyhpk7h2ACUMmYlBwSbrc3kkm05UG%2FJVGd1SuZImHZM200z%2Frv2kdujiytsd75xsgHKrSUo3QIdXJwOIaCAdRh16h%2BLk%2FXmCNCMYcaYqDeDZ6OMuZaaRQR%2FRnVlegKSp9GTecqgymQH9bXaSxxftCzy4cyBtvPp89YmRXwK%2FHOslltPA%2FxohRfVLbCo4Wu1UR%2Flnb4m%2B4Yzt10DcnIXNU5zKJxo4IThdVM45fuXt5O%2BnGbMxua1V2jMh5koDGhBfTBbA3KERTukH2NiYJID5BXO3CsX5cjAuoQqBwdWjF8QglxDjeRuVXn%2BmmYrwWmPpE8D9RYNpHG%2BssipeQCNdYAuJWXe1LpgB8Uh3%2BuVXtyLsPYtIHGz1oBOUUs4h8gM7cJTwpXGx%2B1GgDH1WLRhHi5rEsdJprhmMJ6BqKdRssxap0dTsKnVj0tv0azXD4gc6JEje3PR5mGFf%2Bg0wO9GkbkFZIm07jM1MfV%2FgEzmKSTaWBaXLOAMKvns8AGOqUBFDF%2BaFu3mEHr9boLljYfF6f%2B9PVqUMTkvBDUUfZn9MlPmIqcwpBnEo5KtWd8uv%2BTvKl00WUZAKxG8nrxDapnqQLNCFGX9d2SwHaUaJa26nEmyjysKDlvd%2Bw3huuY7E%2BENDizEHYUTgBkTI4tJC0%2FmVNP2ELI8hwggcKp80Lv0p5beP91C3j5RWAsYcS1DAL4rNw63FrPw4s4RePEChwO8BlH0iIE&X-Amz-Signature=386675951e96578c0d4de2ee28b6abcdd5565401f1f3df7d02d8a58e9dd4abcd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZMUAQ5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr8RqgtbRgJpy70Mf7OEW%2F3qziwnM0UE1RiuDUKbvGzAiEAzxD09%2FwX34zecjYC5K5srIqXZFcTRZVcj8taXQkJmFgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIIPtlHJQYlUYKkEjyrcA1Lk9%2FDRPDxMDty2OxWOhwzNFotoG%2BiX0bAW6v7vJJ3oQegva20IANqAHCIb4ebkm3BxIrOC9c6JaPSw8oGmbFSlTvDCG7btTdnqtMaT9kn7icFpp9e2kd7LBpL1NlguZL%2FAMZ5aOQ%2Fyhpk7h2ACUMmYlBwSbrc3kkm05UG%2FJVGd1SuZImHZM200z%2Frv2kdujiytsd75xsgHKrSUo3QIdXJwOIaCAdRh16h%2BLk%2FXmCNCMYcaYqDeDZ6OMuZaaRQR%2FRnVlegKSp9GTecqgymQH9bXaSxxftCzy4cyBtvPp89YmRXwK%2FHOslltPA%2FxohRfVLbCo4Wu1UR%2Flnb4m%2B4Yzt10DcnIXNU5zKJxo4IThdVM45fuXt5O%2BnGbMxua1V2jMh5koDGhBfTBbA3KERTukH2NiYJID5BXO3CsX5cjAuoQqBwdWjF8QglxDjeRuVXn%2BmmYrwWmPpE8D9RYNpHG%2BssipeQCNdYAuJWXe1LpgB8Uh3%2BuVXtyLsPYtIHGz1oBOUUs4h8gM7cJTwpXGx%2B1GgDH1WLRhHi5rEsdJprhmMJ6BqKdRssxap0dTsKnVj0tv0azXD4gc6JEje3PR5mGFf%2Bg0wO9GkbkFZIm07jM1MfV%2FgEzmKSTaWBaXLOAMKvns8AGOqUBFDF%2BaFu3mEHr9boLljYfF6f%2B9PVqUMTkvBDUUfZn9MlPmIqcwpBnEo5KtWd8uv%2BTvKl00WUZAKxG8nrxDapnqQLNCFGX9d2SwHaUaJa26nEmyjysKDlvd%2Bw3huuY7E%2BENDizEHYUTgBkTI4tJC0%2FmVNP2ELI8hwggcKp80Lv0p5beP91C3j5RWAsYcS1DAL4rNw63FrPw4s4RePEChwO8BlH0iIE&X-Amz-Signature=c18a26f9b5a34e6d4d81fa7e8a6aa34deb4e662c2bf4e59ff9e9527467f7082a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZMUAQ5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr8RqgtbRgJpy70Mf7OEW%2F3qziwnM0UE1RiuDUKbvGzAiEAzxD09%2FwX34zecjYC5K5srIqXZFcTRZVcj8taXQkJmFgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIIPtlHJQYlUYKkEjyrcA1Lk9%2FDRPDxMDty2OxWOhwzNFotoG%2BiX0bAW6v7vJJ3oQegva20IANqAHCIb4ebkm3BxIrOC9c6JaPSw8oGmbFSlTvDCG7btTdnqtMaT9kn7icFpp9e2kd7LBpL1NlguZL%2FAMZ5aOQ%2Fyhpk7h2ACUMmYlBwSbrc3kkm05UG%2FJVGd1SuZImHZM200z%2Frv2kdujiytsd75xsgHKrSUo3QIdXJwOIaCAdRh16h%2BLk%2FXmCNCMYcaYqDeDZ6OMuZaaRQR%2FRnVlegKSp9GTecqgymQH9bXaSxxftCzy4cyBtvPp89YmRXwK%2FHOslltPA%2FxohRfVLbCo4Wu1UR%2Flnb4m%2B4Yzt10DcnIXNU5zKJxo4IThdVM45fuXt5O%2BnGbMxua1V2jMh5koDGhBfTBbA3KERTukH2NiYJID5BXO3CsX5cjAuoQqBwdWjF8QglxDjeRuVXn%2BmmYrwWmPpE8D9RYNpHG%2BssipeQCNdYAuJWXe1LpgB8Uh3%2BuVXtyLsPYtIHGz1oBOUUs4h8gM7cJTwpXGx%2B1GgDH1WLRhHi5rEsdJprhmMJ6BqKdRssxap0dTsKnVj0tv0azXD4gc6JEje3PR5mGFf%2Bg0wO9GkbkFZIm07jM1MfV%2FgEzmKSTaWBaXLOAMKvns8AGOqUBFDF%2BaFu3mEHr9boLljYfF6f%2B9PVqUMTkvBDUUfZn9MlPmIqcwpBnEo5KtWd8uv%2BTvKl00WUZAKxG8nrxDapnqQLNCFGX9d2SwHaUaJa26nEmyjysKDlvd%2Bw3huuY7E%2BENDizEHYUTgBkTI4tJC0%2FmVNP2ELI8hwggcKp80Lv0p5beP91C3j5RWAsYcS1DAL4rNw63FrPw4s4RePEChwO8BlH0iIE&X-Amz-Signature=22de6b2215088fcab42b2ae8c3c5bdb80ce809e67e14abd7fc5d7d6c8c8b0f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
