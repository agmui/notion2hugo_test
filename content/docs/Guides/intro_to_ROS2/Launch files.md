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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3J4S6LG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZBtIIMYXuFnhOAH2nmtvbpukRcCXU2Vcf%2B7RaJUZ4QIgQVAeuSRvf1E784UvaOOjuVWf%2B7sJfHol9VZfkzRMJ5EqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMlmt%2FX4LpTix4sASrcAybBwayYIYjsseTAMwAIzVlPwylPiWyaIaLfvKb%2FryDKm1jUAO9TZcU6kLhXjOiPX6pLI8Cvx4QgJdesBwWeovgfPQwG9ASN0VZqySPT4IG4UAtcKwUj7CfM5rwfuF6fwQL%2F0TUb6asorAOna2RTNAqVJSJUlQWGZgcntSII5mXZy%2B8d78M1SfcCqkOPeV76ZZnEfq0QbEpqZtrFmsmYKH56wNqrjY%2FtmGTXn62CNx9pQYHklUQH93qMwxaJssUvGj%2BF3K96qdz8YKEkvmearIwlbJmJkK3kNoN7qQnHsWDlH%2BJvyQgfTupozng3EluiZ5svO4qMEBzYx7x3Pb%2FIqDIfBVVF3x%2BQ6wjLnxzXx9gnh8dJ%2B3wao6yawHkF1kNJE8lH%2F5zsalHbedvn7vpytC4cDEyi2ZAAD1D5FzokGZ3Q66%2FG1tAYUCGLkE5hCVEGmOqSheR8rI5XTRRubhjGr1nG5uz%2BJKFP1kgKp3vRyQRNe6o9dRuXa59ejdvW7uejypSwSGLYWaNAVGt3iTLNgCUgW2y4hsv2W9fZw2jDme4kFTN2%2F2yLyffMw3c1ZtVHlQZiLKMsWCYVG%2BH6mSmBPA6TuWbJjF9Z5FmlpGYjZv%2FfOTR0MO6sHlMSy41VMJ6T2cIGOqUBltrD9lZpQWQdZ3FY4NCMpT%2FQ1NDG2ffCsa2s2TxnOmasHUZ5qgGJqeV20NSCeT%2FulJ7JTPDVa49KRx13Zjqy4mclSd%2B2F2tn20zW9JFcDpRV04LHp6QP64AEVUru7PxvnIOMonPwTH%2BsW3Ci3y2tBK06dr0HT7TkiRaw90GhJP1SXO8P2sfv0DIpzoyLHJNK3fKcGCV0bGKhbasmSac60UjHIY7n&X-Amz-Signature=1b1993fd09a1c886286b6e5699168732f3e5c40c43b1755d4d28a64465f6ad04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3J4S6LG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZBtIIMYXuFnhOAH2nmtvbpukRcCXU2Vcf%2B7RaJUZ4QIgQVAeuSRvf1E784UvaOOjuVWf%2B7sJfHol9VZfkzRMJ5EqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMlmt%2FX4LpTix4sASrcAybBwayYIYjsseTAMwAIzVlPwylPiWyaIaLfvKb%2FryDKm1jUAO9TZcU6kLhXjOiPX6pLI8Cvx4QgJdesBwWeovgfPQwG9ASN0VZqySPT4IG4UAtcKwUj7CfM5rwfuF6fwQL%2F0TUb6asorAOna2RTNAqVJSJUlQWGZgcntSII5mXZy%2B8d78M1SfcCqkOPeV76ZZnEfq0QbEpqZtrFmsmYKH56wNqrjY%2FtmGTXn62CNx9pQYHklUQH93qMwxaJssUvGj%2BF3K96qdz8YKEkvmearIwlbJmJkK3kNoN7qQnHsWDlH%2BJvyQgfTupozng3EluiZ5svO4qMEBzYx7x3Pb%2FIqDIfBVVF3x%2BQ6wjLnxzXx9gnh8dJ%2B3wao6yawHkF1kNJE8lH%2F5zsalHbedvn7vpytC4cDEyi2ZAAD1D5FzokGZ3Q66%2FG1tAYUCGLkE5hCVEGmOqSheR8rI5XTRRubhjGr1nG5uz%2BJKFP1kgKp3vRyQRNe6o9dRuXa59ejdvW7uejypSwSGLYWaNAVGt3iTLNgCUgW2y4hsv2W9fZw2jDme4kFTN2%2F2yLyffMw3c1ZtVHlQZiLKMsWCYVG%2BH6mSmBPA6TuWbJjF9Z5FmlpGYjZv%2FfOTR0MO6sHlMSy41VMJ6T2cIGOqUBltrD9lZpQWQdZ3FY4NCMpT%2FQ1NDG2ffCsa2s2TxnOmasHUZ5qgGJqeV20NSCeT%2FulJ7JTPDVa49KRx13Zjqy4mclSd%2B2F2tn20zW9JFcDpRV04LHp6QP64AEVUru7PxvnIOMonPwTH%2BsW3Ci3y2tBK06dr0HT7TkiRaw90GhJP1SXO8P2sfv0DIpzoyLHJNK3fKcGCV0bGKhbasmSac60UjHIY7n&X-Amz-Signature=928d21780809c9e2c4c7dc8589440bb546d2366ff6877e7341b2a177954b7781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3J4S6LG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZBtIIMYXuFnhOAH2nmtvbpukRcCXU2Vcf%2B7RaJUZ4QIgQVAeuSRvf1E784UvaOOjuVWf%2B7sJfHol9VZfkzRMJ5EqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMlmt%2FX4LpTix4sASrcAybBwayYIYjsseTAMwAIzVlPwylPiWyaIaLfvKb%2FryDKm1jUAO9TZcU6kLhXjOiPX6pLI8Cvx4QgJdesBwWeovgfPQwG9ASN0VZqySPT4IG4UAtcKwUj7CfM5rwfuF6fwQL%2F0TUb6asorAOna2RTNAqVJSJUlQWGZgcntSII5mXZy%2B8d78M1SfcCqkOPeV76ZZnEfq0QbEpqZtrFmsmYKH56wNqrjY%2FtmGTXn62CNx9pQYHklUQH93qMwxaJssUvGj%2BF3K96qdz8YKEkvmearIwlbJmJkK3kNoN7qQnHsWDlH%2BJvyQgfTupozng3EluiZ5svO4qMEBzYx7x3Pb%2FIqDIfBVVF3x%2BQ6wjLnxzXx9gnh8dJ%2B3wao6yawHkF1kNJE8lH%2F5zsalHbedvn7vpytC4cDEyi2ZAAD1D5FzokGZ3Q66%2FG1tAYUCGLkE5hCVEGmOqSheR8rI5XTRRubhjGr1nG5uz%2BJKFP1kgKp3vRyQRNe6o9dRuXa59ejdvW7uejypSwSGLYWaNAVGt3iTLNgCUgW2y4hsv2W9fZw2jDme4kFTN2%2F2yLyffMw3c1ZtVHlQZiLKMsWCYVG%2BH6mSmBPA6TuWbJjF9Z5FmlpGYjZv%2FfOTR0MO6sHlMSy41VMJ6T2cIGOqUBltrD9lZpQWQdZ3FY4NCMpT%2FQ1NDG2ffCsa2s2TxnOmasHUZ5qgGJqeV20NSCeT%2FulJ7JTPDVa49KRx13Zjqy4mclSd%2B2F2tn20zW9JFcDpRV04LHp6QP64AEVUru7PxvnIOMonPwTH%2BsW3Ci3y2tBK06dr0HT7TkiRaw90GhJP1SXO8P2sfv0DIpzoyLHJNK3fKcGCV0bGKhbasmSac60UjHIY7n&X-Amz-Signature=19028db2c3df4b55c3a9869b1b82c69b44c062cb2daef78f23a58e45976b3b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
