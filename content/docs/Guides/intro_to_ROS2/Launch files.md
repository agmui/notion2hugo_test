---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3R2GCD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEnkIQtVXuD2iH2lkMeTcjuduJ4A7SY%2BCOyzYwxl91fKAiAEH2gq%2FZX7BvqK2oSaq4xj7jwPWsfXpUwoLCd5y8a3KSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWTJPbcwyWqk2%2Fi9KtwD12wJJgWrq5U7UrhdBoixVji2%2FP8bkK5t%2BDzdxWJzPLlDKwStUWe5j22Nmf4IJb%2BSanW6d%2Fnv2iKWeorDu5nq61SiD2e6rGguY%2F5heevdEegHW1fysSEHE2iBgPkQ0%2BqgIEiN0gyOb1hYkl%2FLli5jBSXB%2FZXEP0DssgSGOXxLZ7tRFypxGjO4VS1cgrbTIn3TLqOFAN3juKznW2clf54w37zv%2FnIwu9O5tDXsJ5QTxF5muLjmqZy4Pr6A0jkvwjV1dPlVyANDToEpzwZNn6mZvVDcwWMxzXazn%2FV2GR2CfYFpvm7mx54Tu3GZAmyg5bpTk1dwBeIonIq2%2BsIlV0FSiy8e2Z4SzLeebVjKNvl3VQVwr5iq6tr6AMAHGgla1s3WQtE66oV8CmyJwvNNoQAmnWRgh6E8gXpyQPdnJxh340OB9tU%2FJ5Tq%2BZcwhzyDAjQ7JosCcUuEtLLp1G6T9pBasfgl13tyIBEWMnq9oYlUtx%2BWonq%2BNczQEeBkHQFCsjzJitreMkqDHGmrWEzbcwZjIP1BJba4iUmlvJ2W65WnRdwgG%2BH%2BJgwrBVINmnB0TmCBuWiAKzcL9NnG580DoDhHPtD%2BIr4UAMGG8jiDNAE%2BKJNO2Ge7dn4vfY5K13Qw08TbxAY6pgFpxQEYmGOkZ6G7dZuZn5%2FOIW1Ma0YqvpRHR33ZkMz%2FfOEd3Ega3IxcJPWobrfmAggBcRax5yXoGxJpLei3TBIuS5MBR1BgMMOpJQia1ykLXYrI%2BJJamNkjKXotLP26rZgqt94S2laFDsTcMyysNB%2BzIanj4dwI%2F1ZuD9vNiOck%2Bpwyx%2BZW2eQ96ifjpXgRQAhpXO0kfnfvRwYxaMziFfbWyQlM6Mi5&X-Amz-Signature=5c153f1577dd442be41281e034c02b8a5c54e22cc95755adbf15fb0d8955464a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3R2GCD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEnkIQtVXuD2iH2lkMeTcjuduJ4A7SY%2BCOyzYwxl91fKAiAEH2gq%2FZX7BvqK2oSaq4xj7jwPWsfXpUwoLCd5y8a3KSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWTJPbcwyWqk2%2Fi9KtwD12wJJgWrq5U7UrhdBoixVji2%2FP8bkK5t%2BDzdxWJzPLlDKwStUWe5j22Nmf4IJb%2BSanW6d%2Fnv2iKWeorDu5nq61SiD2e6rGguY%2F5heevdEegHW1fysSEHE2iBgPkQ0%2BqgIEiN0gyOb1hYkl%2FLli5jBSXB%2FZXEP0DssgSGOXxLZ7tRFypxGjO4VS1cgrbTIn3TLqOFAN3juKznW2clf54w37zv%2FnIwu9O5tDXsJ5QTxF5muLjmqZy4Pr6A0jkvwjV1dPlVyANDToEpzwZNn6mZvVDcwWMxzXazn%2FV2GR2CfYFpvm7mx54Tu3GZAmyg5bpTk1dwBeIonIq2%2BsIlV0FSiy8e2Z4SzLeebVjKNvl3VQVwr5iq6tr6AMAHGgla1s3WQtE66oV8CmyJwvNNoQAmnWRgh6E8gXpyQPdnJxh340OB9tU%2FJ5Tq%2BZcwhzyDAjQ7JosCcUuEtLLp1G6T9pBasfgl13tyIBEWMnq9oYlUtx%2BWonq%2BNczQEeBkHQFCsjzJitreMkqDHGmrWEzbcwZjIP1BJba4iUmlvJ2W65WnRdwgG%2BH%2BJgwrBVINmnB0TmCBuWiAKzcL9NnG580DoDhHPtD%2BIr4UAMGG8jiDNAE%2BKJNO2Ge7dn4vfY5K13Qw08TbxAY6pgFpxQEYmGOkZ6G7dZuZn5%2FOIW1Ma0YqvpRHR33ZkMz%2FfOEd3Ega3IxcJPWobrfmAggBcRax5yXoGxJpLei3TBIuS5MBR1BgMMOpJQia1ykLXYrI%2BJJamNkjKXotLP26rZgqt94S2laFDsTcMyysNB%2BzIanj4dwI%2F1ZuD9vNiOck%2Bpwyx%2BZW2eQ96ifjpXgRQAhpXO0kfnfvRwYxaMziFfbWyQlM6Mi5&X-Amz-Signature=e48b247be8298fb85095a96947e6b7948280e3b45ed761d7e5770c1c1bce3981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3R2GCD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEnkIQtVXuD2iH2lkMeTcjuduJ4A7SY%2BCOyzYwxl91fKAiAEH2gq%2FZX7BvqK2oSaq4xj7jwPWsfXpUwoLCd5y8a3KSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWTJPbcwyWqk2%2Fi9KtwD12wJJgWrq5U7UrhdBoixVji2%2FP8bkK5t%2BDzdxWJzPLlDKwStUWe5j22Nmf4IJb%2BSanW6d%2Fnv2iKWeorDu5nq61SiD2e6rGguY%2F5heevdEegHW1fysSEHE2iBgPkQ0%2BqgIEiN0gyOb1hYkl%2FLli5jBSXB%2FZXEP0DssgSGOXxLZ7tRFypxGjO4VS1cgrbTIn3TLqOFAN3juKznW2clf54w37zv%2FnIwu9O5tDXsJ5QTxF5muLjmqZy4Pr6A0jkvwjV1dPlVyANDToEpzwZNn6mZvVDcwWMxzXazn%2FV2GR2CfYFpvm7mx54Tu3GZAmyg5bpTk1dwBeIonIq2%2BsIlV0FSiy8e2Z4SzLeebVjKNvl3VQVwr5iq6tr6AMAHGgla1s3WQtE66oV8CmyJwvNNoQAmnWRgh6E8gXpyQPdnJxh340OB9tU%2FJ5Tq%2BZcwhzyDAjQ7JosCcUuEtLLp1G6T9pBasfgl13tyIBEWMnq9oYlUtx%2BWonq%2BNczQEeBkHQFCsjzJitreMkqDHGmrWEzbcwZjIP1BJba4iUmlvJ2W65WnRdwgG%2BH%2BJgwrBVINmnB0TmCBuWiAKzcL9NnG580DoDhHPtD%2BIr4UAMGG8jiDNAE%2BKJNO2Ge7dn4vfY5K13Qw08TbxAY6pgFpxQEYmGOkZ6G7dZuZn5%2FOIW1Ma0YqvpRHR33ZkMz%2FfOEd3Ega3IxcJPWobrfmAggBcRax5yXoGxJpLei3TBIuS5MBR1BgMMOpJQia1ykLXYrI%2BJJamNkjKXotLP26rZgqt94S2laFDsTcMyysNB%2BzIanj4dwI%2F1ZuD9vNiOck%2Bpwyx%2BZW2eQ96ifjpXgRQAhpXO0kfnfvRwYxaMziFfbWyQlM6Mi5&X-Amz-Signature=5b636b7258b5c3db87b08f9eb4c35889e32dba450e9da649ead1ed1819eab022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
