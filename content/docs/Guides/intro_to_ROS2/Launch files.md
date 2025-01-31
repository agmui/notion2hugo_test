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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPASKOZO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbLrGBngzUyNYDUgBnCh%2BmiAQmz3Y2WygavBhIkYNVAiAnOOtxO2erOc9bw4xYa%2BdP7QUsZmvGPT1HAFwn6LELViqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcUBIfvspysTyUt5KtwDTZKj4NyHg8U8dSlC7INTqo9jYlMD0G9nfmq4bRKXIHF6H8fhKqvXQrImm6oUQ2BmVRgZRh7YM%2F3PugMTn%2BmSxZPNVmZzJtynYbbD0F2S0xwIAeWp1VzZmnuhipko%2FehBBTvcR4T5c3r9zaJZI9ZteXWujKgw4%2FcHZYVhhucYP65lhGwzexNcdAjh%2BmCMQ6gkfaTSLWVRfJrAaCT%2BARgvPUBWOTgOX2z9nr214%2FSuKvCJ2A1tPsT%2F5%2Bep32hKuyyrnWkCyNaBVjgS1J4xfkPb3%2FCTKlkRPHNa%2BsgrOyp87SLpnyB6evzHOacPP%2BkP3Yc680KLFD%2FjByYSRqL0Y%2BSylBoTGDX5eQluBhVc9DGtKKsV%2BmNZGvwTbTEIZ%2FgEZYZB%2Bo2OlJcWmvHrfkrlK7Kf67RL%2B4Exisp936fhQuGKpBwBsVgzC4CO9utqq%2F13Vl1az65CQBThnReSy%2FuyZ3uDAU9dD3TgNpR%2B4Y92Vff%2BO1PKD00jOEoVYQJGdJIlbF62ov8YxRUIuDrJ9YiOZCxGmFLz5HYFfIG%2Fn6vn%2BAvbWFQyV5tMhwWZ9iKmdw0VU08eN7X%2BpgCsdipHF0S3qoC7hHDDdogm1bPVBN%2FSL6LYxpKV7FKh7L9JmeANyc4woK7zvAY6pgGwziwnUO2i9ny%2Byma33%2Bd%2F7KMm6lKpEcl3ZI984I968%2FVWCNyQWfirZsgm3hV5UR0197fguEQXyqio%2B%2B7anP3BfjOwiH9XMuYDUUe9GNMTyI5ERP3rz2HtFZe%2B9ifb%2FFiH4RXnz2cMWpaoyU%2Bpc3L7r7%2FQx5Y09WS4NUg0vaEYvHMaEOZDbHZRihzLbPAv1uIhvjfI%2FYibT7fKIXZISO3Ojk0gtLO3&X-Amz-Signature=c5dce8b3a932eb80381ba909aa8eecf92f3ae5b3fbf04ec1cd914cb395e4d070&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPASKOZO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbLrGBngzUyNYDUgBnCh%2BmiAQmz3Y2WygavBhIkYNVAiAnOOtxO2erOc9bw4xYa%2BdP7QUsZmvGPT1HAFwn6LELViqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcUBIfvspysTyUt5KtwDTZKj4NyHg8U8dSlC7INTqo9jYlMD0G9nfmq4bRKXIHF6H8fhKqvXQrImm6oUQ2BmVRgZRh7YM%2F3PugMTn%2BmSxZPNVmZzJtynYbbD0F2S0xwIAeWp1VzZmnuhipko%2FehBBTvcR4T5c3r9zaJZI9ZteXWujKgw4%2FcHZYVhhucYP65lhGwzexNcdAjh%2BmCMQ6gkfaTSLWVRfJrAaCT%2BARgvPUBWOTgOX2z9nr214%2FSuKvCJ2A1tPsT%2F5%2Bep32hKuyyrnWkCyNaBVjgS1J4xfkPb3%2FCTKlkRPHNa%2BsgrOyp87SLpnyB6evzHOacPP%2BkP3Yc680KLFD%2FjByYSRqL0Y%2BSylBoTGDX5eQluBhVc9DGtKKsV%2BmNZGvwTbTEIZ%2FgEZYZB%2Bo2OlJcWmvHrfkrlK7Kf67RL%2B4Exisp936fhQuGKpBwBsVgzC4CO9utqq%2F13Vl1az65CQBThnReSy%2FuyZ3uDAU9dD3TgNpR%2B4Y92Vff%2BO1PKD00jOEoVYQJGdJIlbF62ov8YxRUIuDrJ9YiOZCxGmFLz5HYFfIG%2Fn6vn%2BAvbWFQyV5tMhwWZ9iKmdw0VU08eN7X%2BpgCsdipHF0S3qoC7hHDDdogm1bPVBN%2FSL6LYxpKV7FKh7L9JmeANyc4woK7zvAY6pgGwziwnUO2i9ny%2Byma33%2Bd%2F7KMm6lKpEcl3ZI984I968%2FVWCNyQWfirZsgm3hV5UR0197fguEQXyqio%2B%2B7anP3BfjOwiH9XMuYDUUe9GNMTyI5ERP3rz2HtFZe%2B9ifb%2FFiH4RXnz2cMWpaoyU%2Bpc3L7r7%2FQx5Y09WS4NUg0vaEYvHMaEOZDbHZRihzLbPAv1uIhvjfI%2FYibT7fKIXZISO3Ojk0gtLO3&X-Amz-Signature=08959f09a4130029ae3b872777eceb5aed747669011870ca645fc9d2ccd025de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPASKOZO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbLrGBngzUyNYDUgBnCh%2BmiAQmz3Y2WygavBhIkYNVAiAnOOtxO2erOc9bw4xYa%2BdP7QUsZmvGPT1HAFwn6LELViqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcUBIfvspysTyUt5KtwDTZKj4NyHg8U8dSlC7INTqo9jYlMD0G9nfmq4bRKXIHF6H8fhKqvXQrImm6oUQ2BmVRgZRh7YM%2F3PugMTn%2BmSxZPNVmZzJtynYbbD0F2S0xwIAeWp1VzZmnuhipko%2FehBBTvcR4T5c3r9zaJZI9ZteXWujKgw4%2FcHZYVhhucYP65lhGwzexNcdAjh%2BmCMQ6gkfaTSLWVRfJrAaCT%2BARgvPUBWOTgOX2z9nr214%2FSuKvCJ2A1tPsT%2F5%2Bep32hKuyyrnWkCyNaBVjgS1J4xfkPb3%2FCTKlkRPHNa%2BsgrOyp87SLpnyB6evzHOacPP%2BkP3Yc680KLFD%2FjByYSRqL0Y%2BSylBoTGDX5eQluBhVc9DGtKKsV%2BmNZGvwTbTEIZ%2FgEZYZB%2Bo2OlJcWmvHrfkrlK7Kf67RL%2B4Exisp936fhQuGKpBwBsVgzC4CO9utqq%2F13Vl1az65CQBThnReSy%2FuyZ3uDAU9dD3TgNpR%2B4Y92Vff%2BO1PKD00jOEoVYQJGdJIlbF62ov8YxRUIuDrJ9YiOZCxGmFLz5HYFfIG%2Fn6vn%2BAvbWFQyV5tMhwWZ9iKmdw0VU08eN7X%2BpgCsdipHF0S3qoC7hHDDdogm1bPVBN%2FSL6LYxpKV7FKh7L9JmeANyc4woK7zvAY6pgGwziwnUO2i9ny%2Byma33%2Bd%2F7KMm6lKpEcl3ZI984I968%2FVWCNyQWfirZsgm3hV5UR0197fguEQXyqio%2B%2B7anP3BfjOwiH9XMuYDUUe9GNMTyI5ERP3rz2HtFZe%2B9ifb%2FFiH4RXnz2cMWpaoyU%2Bpc3L7r7%2FQx5Y09WS4NUg0vaEYvHMaEOZDbHZRihzLbPAv1uIhvjfI%2FYibT7fKIXZISO3Ojk0gtLO3&X-Amz-Signature=ab8ea16d8a36e801539221b5d1a4cde0adb843baac3a795125843c88a35c7f64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
