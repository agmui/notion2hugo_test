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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGVQHDO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7dVsw8LN%2BDCW%2F7yAV2Ct7q37nSQPwMEo3UWTyUGNFwIgKTR%2F0%2BTadIn1r7VejTn%2BNsDQkJdfLbxC0H4QmBuFogUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXauiK9mYyvWHQUeSrcA5owRq7xGcFyIt6fT4RrdwUTSu75BIf4N1DyC5PBto66KZZSLeAEnK6WFWo3HnXFYrvnNondBqTwSXb0znenLf%2Bl82fhePn%2BeQrknaZq%2BT9PBoDr7hG764pg9t8GuhlEF7u79xNquEcB8osFMkTN7rUH0rn3zkAhB%2F9jojaMLgP5tbaHfLGqIHwhvK0t93mNvGz%2FBMao%2Fc2LHtd8vesWAaImqYkb7qOQaciqHkXxqUs7ffoQBNhmeonWPYEus%2BVyhQPs9YyfHx1bGOxtRD1%2Fq5JjDOixVw5BBed9qFMhZkfWQjlcuFexyZoS0VgmYH%2FZ7bohNcEVtPzbccgr4368lyN1fOfUSy4kk1LS8L45yeqiYiuGo8jCUDBoWnw02sQ%2FafPRivnEH96v7syS22RPiD6q4NQEaIH0Sc6DSkAt84wonmYlPWwbPQVxaEHuG3JsQSi548bdS4q%2B36R29hFjH1vXuZ5U%2FEU9ByJ8m6OQqDKKad8Lp997jDmTVopKVZvz%2BOgwV8a4HY8nsg8naUdxsXhTAP2khRDD2ClJ2sqn6jaMN99GliEKQLnRXZ0keA2zeFkiHqzEKW2LUPhVz1VdHLQ5yMjY12Pqi6OvFJcJye0GAR0x7yq4Iot6MFu6MLXNhsMGOqUBdAoCsCMUuiPq2rgO2aF%2FFu0Mz0ikdQAtVCEGjl8cxvPv%2BdDpaUdTiFJKvNXuXUNSR9jHIRo%2BJzD1NnMjQibcVHXAV5V%2FXEgHle%2F0UGE2p5o5y%2FYzRoEJQIa0a5%2BQqFk4Rk9oF6b5cgOj2myUD7jbE1fK6Osz8p8LNJy9%2BwT3lmPI44XpLH7VcrIMDTz7M8ij3M6iVfULcQ5UNxZGPBgd8JJmvtlv&X-Amz-Signature=c483943c7293069741d708be06f62c1d643d31df911e530f4cc549d2e16a16d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGVQHDO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7dVsw8LN%2BDCW%2F7yAV2Ct7q37nSQPwMEo3UWTyUGNFwIgKTR%2F0%2BTadIn1r7VejTn%2BNsDQkJdfLbxC0H4QmBuFogUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXauiK9mYyvWHQUeSrcA5owRq7xGcFyIt6fT4RrdwUTSu75BIf4N1DyC5PBto66KZZSLeAEnK6WFWo3HnXFYrvnNondBqTwSXb0znenLf%2Bl82fhePn%2BeQrknaZq%2BT9PBoDr7hG764pg9t8GuhlEF7u79xNquEcB8osFMkTN7rUH0rn3zkAhB%2F9jojaMLgP5tbaHfLGqIHwhvK0t93mNvGz%2FBMao%2Fc2LHtd8vesWAaImqYkb7qOQaciqHkXxqUs7ffoQBNhmeonWPYEus%2BVyhQPs9YyfHx1bGOxtRD1%2Fq5JjDOixVw5BBed9qFMhZkfWQjlcuFexyZoS0VgmYH%2FZ7bohNcEVtPzbccgr4368lyN1fOfUSy4kk1LS8L45yeqiYiuGo8jCUDBoWnw02sQ%2FafPRivnEH96v7syS22RPiD6q4NQEaIH0Sc6DSkAt84wonmYlPWwbPQVxaEHuG3JsQSi548bdS4q%2B36R29hFjH1vXuZ5U%2FEU9ByJ8m6OQqDKKad8Lp997jDmTVopKVZvz%2BOgwV8a4HY8nsg8naUdxsXhTAP2khRDD2ClJ2sqn6jaMN99GliEKQLnRXZ0keA2zeFkiHqzEKW2LUPhVz1VdHLQ5yMjY12Pqi6OvFJcJye0GAR0x7yq4Iot6MFu6MLXNhsMGOqUBdAoCsCMUuiPq2rgO2aF%2FFu0Mz0ikdQAtVCEGjl8cxvPv%2BdDpaUdTiFJKvNXuXUNSR9jHIRo%2BJzD1NnMjQibcVHXAV5V%2FXEgHle%2F0UGE2p5o5y%2FYzRoEJQIa0a5%2BQqFk4Rk9oF6b5cgOj2myUD7jbE1fK6Osz8p8LNJy9%2BwT3lmPI44XpLH7VcrIMDTz7M8ij3M6iVfULcQ5UNxZGPBgd8JJmvtlv&X-Amz-Signature=e5b2b0ba239558ba9fd63f98ef5417e3bf9e2734e85acd9c88f29e62e5f08acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGVQHDO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7dVsw8LN%2BDCW%2F7yAV2Ct7q37nSQPwMEo3UWTyUGNFwIgKTR%2F0%2BTadIn1r7VejTn%2BNsDQkJdfLbxC0H4QmBuFogUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXauiK9mYyvWHQUeSrcA5owRq7xGcFyIt6fT4RrdwUTSu75BIf4N1DyC5PBto66KZZSLeAEnK6WFWo3HnXFYrvnNondBqTwSXb0znenLf%2Bl82fhePn%2BeQrknaZq%2BT9PBoDr7hG764pg9t8GuhlEF7u79xNquEcB8osFMkTN7rUH0rn3zkAhB%2F9jojaMLgP5tbaHfLGqIHwhvK0t93mNvGz%2FBMao%2Fc2LHtd8vesWAaImqYkb7qOQaciqHkXxqUs7ffoQBNhmeonWPYEus%2BVyhQPs9YyfHx1bGOxtRD1%2Fq5JjDOixVw5BBed9qFMhZkfWQjlcuFexyZoS0VgmYH%2FZ7bohNcEVtPzbccgr4368lyN1fOfUSy4kk1LS8L45yeqiYiuGo8jCUDBoWnw02sQ%2FafPRivnEH96v7syS22RPiD6q4NQEaIH0Sc6DSkAt84wonmYlPWwbPQVxaEHuG3JsQSi548bdS4q%2B36R29hFjH1vXuZ5U%2FEU9ByJ8m6OQqDKKad8Lp997jDmTVopKVZvz%2BOgwV8a4HY8nsg8naUdxsXhTAP2khRDD2ClJ2sqn6jaMN99GliEKQLnRXZ0keA2zeFkiHqzEKW2LUPhVz1VdHLQ5yMjY12Pqi6OvFJcJye0GAR0x7yq4Iot6MFu6MLXNhsMGOqUBdAoCsCMUuiPq2rgO2aF%2FFu0Mz0ikdQAtVCEGjl8cxvPv%2BdDpaUdTiFJKvNXuXUNSR9jHIRo%2BJzD1NnMjQibcVHXAV5V%2FXEgHle%2F0UGE2p5o5y%2FYzRoEJQIa0a5%2BQqFk4Rk9oF6b5cgOj2myUD7jbE1fK6Osz8p8LNJy9%2BwT3lmPI44XpLH7VcrIMDTz7M8ij3M6iVfULcQ5UNxZGPBgd8JJmvtlv&X-Amz-Signature=a28e9ecde8fff43df91f0ac6ac139ec450a6e0829146e7f00fda17c2b303311b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
