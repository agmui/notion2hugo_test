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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USSN4FX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkBAtrrWSuNSf6QCeXI78Xz8y8vex%2BRpdQJuTZOguelAiAVkfQuLnB%2F5L0X96Ej1zleDo6kJ%2FvV4Ht%2Bh9eEKoyUgSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fo%2FfWFuUKdbjpqlXKtwDBFQv570ZQ%2Bb4QIOtO7ctgPc0Q8kqviV8s%2FgIulhFQDHYxr8hpnHzJn6hNCsR3J0aC49AyZiv4LOCv4nhGBUto9Tu9Au9iPxAPUqtoF0hCiwqRasCkDNB%2B8g2pS%2FEHhzSVH%2BlUQrean8NtucrfIqvT49e%2Fm4aSyJoWbidKLoWWzCFRsaneKZR%2BNORcGwfXt4mOAOYnsI9cb80b%2FwFXQWreFvshlyeS7DhMd4bN8JaAQI%2FeJHaM5Bqz4ueni9KM6jgpTiR8GVkIr4%2BLle3nNOxWWVA0C4iZPSOk6VFrrMIc2wWR1BUQeUO7Y4KFUMC%2BV8pChhVY5JnK4dKbAFEXQVfGnYmXfq5n5s1kU4teaBKrEG0dYmoUYQd3cxDua3ilAwP0vnuTrdnepFBn1xf5XjVIJIhNabvf5OSHlszgcdWnG6J0EjCqmSCIph2WIK42wRZ9VdfRjRKnw9Z%2Biry2TT3mb09HSdMUnWScHFJA5hbIoB%2ByZo7oEqZJiWVBd56nq5dFbDETTAIbOqAio%2FEaawYWbrlOLvnSZVxo9lobbQuRaI864dbKhdfH7Gr70GOndx6gavqUT4dh0d4%2FaSKQ7Svn1fSSsOOYugnwlWETInrF6pOHtyQWejqwcU5%2F50w2uHHvwY6pgHuM3jWNjG2aDbq6mSxmN4mxClSPrAKdS4i1YC4V8xva4JI8Ik1QAKqZzbb5G3hVKyu1C9efLQizLmAgYqe8HZCJEd3Xu3Z82rv5U7D%2FTu9KH1QBOnCd%2Br30OYB5yD3zrZAku0XYTFhK2L%2FYV8Ol7M0Rcb66Wyh%2FovSJnKqY0lxNLzhJpsaEMaL3CZsXZqKYj21jnmkIzQFMmmoLu5oqjdoukhaWly8&X-Amz-Signature=d92b67e616f05a21391edbadbaab0b4100d8213e0325bcf829da8c55f767bc92&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USSN4FX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkBAtrrWSuNSf6QCeXI78Xz8y8vex%2BRpdQJuTZOguelAiAVkfQuLnB%2F5L0X96Ej1zleDo6kJ%2FvV4Ht%2Bh9eEKoyUgSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fo%2FfWFuUKdbjpqlXKtwDBFQv570ZQ%2Bb4QIOtO7ctgPc0Q8kqviV8s%2FgIulhFQDHYxr8hpnHzJn6hNCsR3J0aC49AyZiv4LOCv4nhGBUto9Tu9Au9iPxAPUqtoF0hCiwqRasCkDNB%2B8g2pS%2FEHhzSVH%2BlUQrean8NtucrfIqvT49e%2Fm4aSyJoWbidKLoWWzCFRsaneKZR%2BNORcGwfXt4mOAOYnsI9cb80b%2FwFXQWreFvshlyeS7DhMd4bN8JaAQI%2FeJHaM5Bqz4ueni9KM6jgpTiR8GVkIr4%2BLle3nNOxWWVA0C4iZPSOk6VFrrMIc2wWR1BUQeUO7Y4KFUMC%2BV8pChhVY5JnK4dKbAFEXQVfGnYmXfq5n5s1kU4teaBKrEG0dYmoUYQd3cxDua3ilAwP0vnuTrdnepFBn1xf5XjVIJIhNabvf5OSHlszgcdWnG6J0EjCqmSCIph2WIK42wRZ9VdfRjRKnw9Z%2Biry2TT3mb09HSdMUnWScHFJA5hbIoB%2ByZo7oEqZJiWVBd56nq5dFbDETTAIbOqAio%2FEaawYWbrlOLvnSZVxo9lobbQuRaI864dbKhdfH7Gr70GOndx6gavqUT4dh0d4%2FaSKQ7Svn1fSSsOOYugnwlWETInrF6pOHtyQWejqwcU5%2F50w2uHHvwY6pgHuM3jWNjG2aDbq6mSxmN4mxClSPrAKdS4i1YC4V8xva4JI8Ik1QAKqZzbb5G3hVKyu1C9efLQizLmAgYqe8HZCJEd3Xu3Z82rv5U7D%2FTu9KH1QBOnCd%2Br30OYB5yD3zrZAku0XYTFhK2L%2FYV8Ol7M0Rcb66Wyh%2FovSJnKqY0lxNLzhJpsaEMaL3CZsXZqKYj21jnmkIzQFMmmoLu5oqjdoukhaWly8&X-Amz-Signature=7186ab8b88edb22c216c23095ef0aa3a1923a68a4ba2998ce9c3803e293bbb53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USSN4FX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkBAtrrWSuNSf6QCeXI78Xz8y8vex%2BRpdQJuTZOguelAiAVkfQuLnB%2F5L0X96Ej1zleDo6kJ%2FvV4Ht%2Bh9eEKoyUgSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fo%2FfWFuUKdbjpqlXKtwDBFQv570ZQ%2Bb4QIOtO7ctgPc0Q8kqviV8s%2FgIulhFQDHYxr8hpnHzJn6hNCsR3J0aC49AyZiv4LOCv4nhGBUto9Tu9Au9iPxAPUqtoF0hCiwqRasCkDNB%2B8g2pS%2FEHhzSVH%2BlUQrean8NtucrfIqvT49e%2Fm4aSyJoWbidKLoWWzCFRsaneKZR%2BNORcGwfXt4mOAOYnsI9cb80b%2FwFXQWreFvshlyeS7DhMd4bN8JaAQI%2FeJHaM5Bqz4ueni9KM6jgpTiR8GVkIr4%2BLle3nNOxWWVA0C4iZPSOk6VFrrMIc2wWR1BUQeUO7Y4KFUMC%2BV8pChhVY5JnK4dKbAFEXQVfGnYmXfq5n5s1kU4teaBKrEG0dYmoUYQd3cxDua3ilAwP0vnuTrdnepFBn1xf5XjVIJIhNabvf5OSHlszgcdWnG6J0EjCqmSCIph2WIK42wRZ9VdfRjRKnw9Z%2Biry2TT3mb09HSdMUnWScHFJA5hbIoB%2ByZo7oEqZJiWVBd56nq5dFbDETTAIbOqAio%2FEaawYWbrlOLvnSZVxo9lobbQuRaI864dbKhdfH7Gr70GOndx6gavqUT4dh0d4%2FaSKQ7Svn1fSSsOOYugnwlWETInrF6pOHtyQWejqwcU5%2F50w2uHHvwY6pgHuM3jWNjG2aDbq6mSxmN4mxClSPrAKdS4i1YC4V8xva4JI8Ik1QAKqZzbb5G3hVKyu1C9efLQizLmAgYqe8HZCJEd3Xu3Z82rv5U7D%2FTu9KH1QBOnCd%2Br30OYB5yD3zrZAku0XYTFhK2L%2FYV8Ol7M0Rcb66Wyh%2FovSJnKqY0lxNLzhJpsaEMaL3CZsXZqKYj21jnmkIzQFMmmoLu5oqjdoukhaWly8&X-Amz-Signature=5f9fc58dbbd00f3bb129e0d74de9e88249be05423b0ad2a5ca28110457107781&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
