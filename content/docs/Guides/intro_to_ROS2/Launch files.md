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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEIR67R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOqCkPejJV7p4BaUynCVm6ej2RBVpjyWbNInzXRP%2BkLAiANzqn0uGGM2BMTta%2F0nTx7FI%2BxwBNNrhooG%2FElxW6eESr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMo4mBuPwW9%2Fhzo27pKtwDm7Zpwp4QUgpZg4obvuL%2BIaR6GhqI3vUC0Le9sQMibvLoN2Z9y3lv%2F8uQDJb3ssKCLGazM7Be2HfFb8%2BJ2xUSHNNr5N%2BfHHzN25KkshE4ujpDEv9%2FZnnNFDt0gbJm9k1GO15jI%2FmCLz9XlzDqJLvmqxcl1kfdWyfNvGce9CeObMqpW%2F57YAuUarJ31QTfuWV00Pz36mN2UThAo6gNsllRShmW13vw8NTyZW90clyF11RAKkU475IP025jOmoWDvhX4GdxISbba3bqvLRWtj8Y2HVzBuQ3V8MhuImGhIlOzegpuCVgbsO9MOoTuDTnzzIxZyboIw8pg4FLFW7O9ZkAjqr%2BdhOHptZRTQ7ohohc8tK59TRLRlIHsqoWXafgOEgh2Yi54e90%2BCkyydZ%2F2mpzDxx719Vuzc6rxA%2FePvKcIm%2BqORUJ07GESXEETpkt1UETwOD63BCkGRFAY8supe7SJDQ%2BBtmM5yn8awxaKASR71nHPfe%2F6HAtmg57aWHZeI7y%2FGOL5O%2F0QmTarPqsSuz5szDXwj7hXT8k%2F%2FydPt48TjxA3euf8mkUAWtFxJBm0RvBszOvO66LuKYrQDdknFZl0JBMnaL4IqtfB6znH2%2BRjZHZCr21kUu5lhr3bnQwwsO8xAY6pgEXM5owOkyIN9lNL1aUK5UGBmh9AtcyagS00Ds4LoBioKpG7ZGvhuZIkz6kTc7yK0PQaGbYIVriyqUYAVcviXGml2bCBdplz7xkZ2t5QZP4aI3nNnbZCEpTXQVJGQ4XebCJj8%2BDOwB3Tv4D%2BLizHrsvwkVUDCQ2ar5kRKS9jEwUHvY9fQBLUqWDE5osyJ8EBAvA3jTAwiBVELnpoVSrNWC3CW5oSkPR&X-Amz-Signature=501019876c691c2d3b887a09992fb0dc9cdfce845eef7e1d744d8f39dd7fba3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEIR67R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOqCkPejJV7p4BaUynCVm6ej2RBVpjyWbNInzXRP%2BkLAiANzqn0uGGM2BMTta%2F0nTx7FI%2BxwBNNrhooG%2FElxW6eESr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMo4mBuPwW9%2Fhzo27pKtwDm7Zpwp4QUgpZg4obvuL%2BIaR6GhqI3vUC0Le9sQMibvLoN2Z9y3lv%2F8uQDJb3ssKCLGazM7Be2HfFb8%2BJ2xUSHNNr5N%2BfHHzN25KkshE4ujpDEv9%2FZnnNFDt0gbJm9k1GO15jI%2FmCLz9XlzDqJLvmqxcl1kfdWyfNvGce9CeObMqpW%2F57YAuUarJ31QTfuWV00Pz36mN2UThAo6gNsllRShmW13vw8NTyZW90clyF11RAKkU475IP025jOmoWDvhX4GdxISbba3bqvLRWtj8Y2HVzBuQ3V8MhuImGhIlOzegpuCVgbsO9MOoTuDTnzzIxZyboIw8pg4FLFW7O9ZkAjqr%2BdhOHptZRTQ7ohohc8tK59TRLRlIHsqoWXafgOEgh2Yi54e90%2BCkyydZ%2F2mpzDxx719Vuzc6rxA%2FePvKcIm%2BqORUJ07GESXEETpkt1UETwOD63BCkGRFAY8supe7SJDQ%2BBtmM5yn8awxaKASR71nHPfe%2F6HAtmg57aWHZeI7y%2FGOL5O%2F0QmTarPqsSuz5szDXwj7hXT8k%2F%2FydPt48TjxA3euf8mkUAWtFxJBm0RvBszOvO66LuKYrQDdknFZl0JBMnaL4IqtfB6znH2%2BRjZHZCr21kUu5lhr3bnQwwsO8xAY6pgEXM5owOkyIN9lNL1aUK5UGBmh9AtcyagS00Ds4LoBioKpG7ZGvhuZIkz6kTc7yK0PQaGbYIVriyqUYAVcviXGml2bCBdplz7xkZ2t5QZP4aI3nNnbZCEpTXQVJGQ4XebCJj8%2BDOwB3Tv4D%2BLizHrsvwkVUDCQ2ar5kRKS9jEwUHvY9fQBLUqWDE5osyJ8EBAvA3jTAwiBVELnpoVSrNWC3CW5oSkPR&X-Amz-Signature=9f66cc376a4cf95600ef98ac2e326f123fa0e23c76d5d54627c03a9afdcc532b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEIR67R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOqCkPejJV7p4BaUynCVm6ej2RBVpjyWbNInzXRP%2BkLAiANzqn0uGGM2BMTta%2F0nTx7FI%2BxwBNNrhooG%2FElxW6eESr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMo4mBuPwW9%2Fhzo27pKtwDm7Zpwp4QUgpZg4obvuL%2BIaR6GhqI3vUC0Le9sQMibvLoN2Z9y3lv%2F8uQDJb3ssKCLGazM7Be2HfFb8%2BJ2xUSHNNr5N%2BfHHzN25KkshE4ujpDEv9%2FZnnNFDt0gbJm9k1GO15jI%2FmCLz9XlzDqJLvmqxcl1kfdWyfNvGce9CeObMqpW%2F57YAuUarJ31QTfuWV00Pz36mN2UThAo6gNsllRShmW13vw8NTyZW90clyF11RAKkU475IP025jOmoWDvhX4GdxISbba3bqvLRWtj8Y2HVzBuQ3V8MhuImGhIlOzegpuCVgbsO9MOoTuDTnzzIxZyboIw8pg4FLFW7O9ZkAjqr%2BdhOHptZRTQ7ohohc8tK59TRLRlIHsqoWXafgOEgh2Yi54e90%2BCkyydZ%2F2mpzDxx719Vuzc6rxA%2FePvKcIm%2BqORUJ07GESXEETpkt1UETwOD63BCkGRFAY8supe7SJDQ%2BBtmM5yn8awxaKASR71nHPfe%2F6HAtmg57aWHZeI7y%2FGOL5O%2F0QmTarPqsSuz5szDXwj7hXT8k%2F%2FydPt48TjxA3euf8mkUAWtFxJBm0RvBszOvO66LuKYrQDdknFZl0JBMnaL4IqtfB6znH2%2BRjZHZCr21kUu5lhr3bnQwwsO8xAY6pgEXM5owOkyIN9lNL1aUK5UGBmh9AtcyagS00Ds4LoBioKpG7ZGvhuZIkz6kTc7yK0PQaGbYIVriyqUYAVcviXGml2bCBdplz7xkZ2t5QZP4aI3nNnbZCEpTXQVJGQ4XebCJj8%2BDOwB3Tv4D%2BLizHrsvwkVUDCQ2ar5kRKS9jEwUHvY9fQBLUqWDE5osyJ8EBAvA3jTAwiBVELnpoVSrNWC3CW5oSkPR&X-Amz-Signature=5f3b4b9dbe48f21ccf567128a471228f3b377e3105ad89970bafad96382763f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
