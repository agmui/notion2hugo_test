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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627R6KT4D%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGMovm1aACosrxhQKfpQEwnZorSKDjXlwOwgHVFaTW6vAiAhMzdEHE81vRuqrgeu7FKYCJV32xxhME86RVFu3wdx6CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOiAbFmjkmsuiKDjKtwDyWI5hWdBSYBHrniwIznYq6io7yEyTQCeYqlTh%2BNllv5%2Fe79h6M%2BZu%2FOaEaTEBBvOmc4xAzXlTe7m3UK6ETy8y%2Br25HksRI6KxlyHYqA6f0BXCiD76cIVzpowlI31mE0mIgCbsOHmR5ZUjN7DXsSiV3Sqnj%2F8K2BtnevgP272EsbcnuqredqdKKK88XLQ4ecmARktrTeEmSOGMxpY7%2BuKyq3cFXzG72KKD2JQ09U%2B4eXhRSABMowfxa%2FQPh9AeVzgvGMkD%2FQY%2BPnNH8OoyfLL64Yp0gRINoNh2ocFLVyMqs7BDtHqJ6lkikvEYknigEbTS3cdwdx6gJ0iIp8EtYUTDSdj32deC3IVn7Wx1epnRnXCfp%2BDuf6XhugDIdeZBa5c8eskcnG9kax59kF6l%2FWjkSYqX8W9umXPfRh43s%2FSS1ddnA0c3oAERiOpWJ3OuD4jgY6pc831MfdZK%2FZaOY9gz8VbRVThMM8Pm9p4NE8tn7iJLqKFmhOLtHZPEyutHR4oWUKjFf%2Bpb9gcbX78FlgMnVlXZRlTf8B2zej8tr76YLDJkcno230jwKA%2BXksbDgZXmxfLLwDZ0s235%2ByBmiOPhEPYKgZSTFLuNpQoOdVgUtunigw6qBmDodroVJwwmq76vgY6pgGtsJyLH8FTVtRnappN7bnA51x4yerw4XMr6oL7r2U5QrBJmgIRqbFJfGTba4wvCG9hz5dmxY1ug5Ju4%2FtwLVlar1WDP2kaXJ0pcGGLS9RB%2BynY6q4Xyf9FBSLv93Hxa2HT0tUUDQxT%2BQb%2F%2Bhgf7BF%2FO0KSX7LvHdmt77mnfU3GvdTBUfp9m%2B3kQLRpVKQvqmrNDgVxvadQOhRALgODjqcOiXU%2F8rWW&X-Amz-Signature=1c566c8de4644b6104b72c612c3c6c711b925065aded3c1f2756a2c919a1c553&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627R6KT4D%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGMovm1aACosrxhQKfpQEwnZorSKDjXlwOwgHVFaTW6vAiAhMzdEHE81vRuqrgeu7FKYCJV32xxhME86RVFu3wdx6CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOiAbFmjkmsuiKDjKtwDyWI5hWdBSYBHrniwIznYq6io7yEyTQCeYqlTh%2BNllv5%2Fe79h6M%2BZu%2FOaEaTEBBvOmc4xAzXlTe7m3UK6ETy8y%2Br25HksRI6KxlyHYqA6f0BXCiD76cIVzpowlI31mE0mIgCbsOHmR5ZUjN7DXsSiV3Sqnj%2F8K2BtnevgP272EsbcnuqredqdKKK88XLQ4ecmARktrTeEmSOGMxpY7%2BuKyq3cFXzG72KKD2JQ09U%2B4eXhRSABMowfxa%2FQPh9AeVzgvGMkD%2FQY%2BPnNH8OoyfLL64Yp0gRINoNh2ocFLVyMqs7BDtHqJ6lkikvEYknigEbTS3cdwdx6gJ0iIp8EtYUTDSdj32deC3IVn7Wx1epnRnXCfp%2BDuf6XhugDIdeZBa5c8eskcnG9kax59kF6l%2FWjkSYqX8W9umXPfRh43s%2FSS1ddnA0c3oAERiOpWJ3OuD4jgY6pc831MfdZK%2FZaOY9gz8VbRVThMM8Pm9p4NE8tn7iJLqKFmhOLtHZPEyutHR4oWUKjFf%2Bpb9gcbX78FlgMnVlXZRlTf8B2zej8tr76YLDJkcno230jwKA%2BXksbDgZXmxfLLwDZ0s235%2ByBmiOPhEPYKgZSTFLuNpQoOdVgUtunigw6qBmDodroVJwwmq76vgY6pgGtsJyLH8FTVtRnappN7bnA51x4yerw4XMr6oL7r2U5QrBJmgIRqbFJfGTba4wvCG9hz5dmxY1ug5Ju4%2FtwLVlar1WDP2kaXJ0pcGGLS9RB%2BynY6q4Xyf9FBSLv93Hxa2HT0tUUDQxT%2BQb%2F%2Bhgf7BF%2FO0KSX7LvHdmt77mnfU3GvdTBUfp9m%2B3kQLRpVKQvqmrNDgVxvadQOhRALgODjqcOiXU%2F8rWW&X-Amz-Signature=c8ee1c3a73a8486d2ef6f4271b7a1ee3f6cb30a3492b3c7807d93716d6e0881c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627R6KT4D%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGMovm1aACosrxhQKfpQEwnZorSKDjXlwOwgHVFaTW6vAiAhMzdEHE81vRuqrgeu7FKYCJV32xxhME86RVFu3wdx6CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOiAbFmjkmsuiKDjKtwDyWI5hWdBSYBHrniwIznYq6io7yEyTQCeYqlTh%2BNllv5%2Fe79h6M%2BZu%2FOaEaTEBBvOmc4xAzXlTe7m3UK6ETy8y%2Br25HksRI6KxlyHYqA6f0BXCiD76cIVzpowlI31mE0mIgCbsOHmR5ZUjN7DXsSiV3Sqnj%2F8K2BtnevgP272EsbcnuqredqdKKK88XLQ4ecmARktrTeEmSOGMxpY7%2BuKyq3cFXzG72KKD2JQ09U%2B4eXhRSABMowfxa%2FQPh9AeVzgvGMkD%2FQY%2BPnNH8OoyfLL64Yp0gRINoNh2ocFLVyMqs7BDtHqJ6lkikvEYknigEbTS3cdwdx6gJ0iIp8EtYUTDSdj32deC3IVn7Wx1epnRnXCfp%2BDuf6XhugDIdeZBa5c8eskcnG9kax59kF6l%2FWjkSYqX8W9umXPfRh43s%2FSS1ddnA0c3oAERiOpWJ3OuD4jgY6pc831MfdZK%2FZaOY9gz8VbRVThMM8Pm9p4NE8tn7iJLqKFmhOLtHZPEyutHR4oWUKjFf%2Bpb9gcbX78FlgMnVlXZRlTf8B2zej8tr76YLDJkcno230jwKA%2BXksbDgZXmxfLLwDZ0s235%2ByBmiOPhEPYKgZSTFLuNpQoOdVgUtunigw6qBmDodroVJwwmq76vgY6pgGtsJyLH8FTVtRnappN7bnA51x4yerw4XMr6oL7r2U5QrBJmgIRqbFJfGTba4wvCG9hz5dmxY1ug5Ju4%2FtwLVlar1WDP2kaXJ0pcGGLS9RB%2BynY6q4Xyf9FBSLv93Hxa2HT0tUUDQxT%2BQb%2F%2Bhgf7BF%2FO0KSX7LvHdmt77mnfU3GvdTBUfp9m%2B3kQLRpVKQvqmrNDgVxvadQOhRALgODjqcOiXU%2F8rWW&X-Amz-Signature=1fd2062f666e6cb5b97b77a763ab56eb170537ab19b4bd6c0902b9a892dd24d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
