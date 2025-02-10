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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLGENOJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCirjqDQgOJ8dBAzemHJdG%2BFTnGU30ByE83j%2B7zUnAfZgIgRD7p0XqIQGbz8OVZj3%2BW3pe4%2FBUycYX0Yd7kRUPphNAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA8ziRIA1vIy9QPACrcA%2FqYfOQkYjHk7xM%2BUEpZaWAx7bADIthnGiVqcw5wH6e3YiGK4k3DMRWtNvAiSym2XhfTtEHNC12DK27DJH9cgyLCBq%2BIzeFUcNcknxDaqYNcPB3erVtcqtIbv9kJn1LmC%2BLYvqZ6%2Fq0w77kw21HWbivmoRBhGJvlhl6AQkii%2BTa5Yl5QMALyMez%2BGGvdOTL%2ByKC17kiYDl8UCG43tICsQvnjQcYKb6Tc5vMvu1L15bbYABl46jZnbg1RJoD8WQjaT29BxIF7vmygvf0zyMc5OpyC72xwzNbTCYKVnZZqhaIgxnWvF2l6wAcvoDRldK88XfWA%2FZqvm4UpUJjWktZCF2n1Mj4IiS%2FRBd%2Fmha05SaL45sA%2FYXBfX7X0UpXBsBt%2FutF20lalnzd9WHZXQT04%2F0bqmrcEWVu3b8VL%2FMDJQ0YloVrnzN4AGOrzqAnNfIjp1EbMuoATAWpJ6kIHRAh1JMQgOZZ6gtYonFyQF2kbgLVY5acPyfNQEefsPTTeBYxPCvXxUqs4h7TaY5%2B1FInNifrPeRplVMixye9mL0brNWDJJIZrrdfSdI8HRZFBeCRPqbCYq2o%2BCb%2Bqx8ev0AChsO6AjkZuogajZSuKIl50DiWrRpUksE6oYvM2Cv3tMJidpb0GOqUBHVgQ8aHlT%2FGRg88lGgiU0iikNsWnhW4SVtOjwUrW4%2FP8e%2FgA%2B8086GqMTP1zK0OUQpfdpG3EYb6qmbQmaMI7V5MVvWbzj3PrcHNa%2FIvNCHXvp1%2BrdYCmdfaejhMVrPotX8r%2FcsTYmsn0NXaZVjm34I%2FhC0yaBmHUlJRnzmVbK66GJMAbyZ0UUE8xOAHj8q4XvYsOpIfXB0aMPq0azry0AMNU2h9w&X-Amz-Signature=f799be6eda6087ed02b27dd3ae5e7babcc0da048660688f5993e754b41708dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLGENOJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCirjqDQgOJ8dBAzemHJdG%2BFTnGU30ByE83j%2B7zUnAfZgIgRD7p0XqIQGbz8OVZj3%2BW3pe4%2FBUycYX0Yd7kRUPphNAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA8ziRIA1vIy9QPACrcA%2FqYfOQkYjHk7xM%2BUEpZaWAx7bADIthnGiVqcw5wH6e3YiGK4k3DMRWtNvAiSym2XhfTtEHNC12DK27DJH9cgyLCBq%2BIzeFUcNcknxDaqYNcPB3erVtcqtIbv9kJn1LmC%2BLYvqZ6%2Fq0w77kw21HWbivmoRBhGJvlhl6AQkii%2BTa5Yl5QMALyMez%2BGGvdOTL%2ByKC17kiYDl8UCG43tICsQvnjQcYKb6Tc5vMvu1L15bbYABl46jZnbg1RJoD8WQjaT29BxIF7vmygvf0zyMc5OpyC72xwzNbTCYKVnZZqhaIgxnWvF2l6wAcvoDRldK88XfWA%2FZqvm4UpUJjWktZCF2n1Mj4IiS%2FRBd%2Fmha05SaL45sA%2FYXBfX7X0UpXBsBt%2FutF20lalnzd9WHZXQT04%2F0bqmrcEWVu3b8VL%2FMDJQ0YloVrnzN4AGOrzqAnNfIjp1EbMuoATAWpJ6kIHRAh1JMQgOZZ6gtYonFyQF2kbgLVY5acPyfNQEefsPTTeBYxPCvXxUqs4h7TaY5%2B1FInNifrPeRplVMixye9mL0brNWDJJIZrrdfSdI8HRZFBeCRPqbCYq2o%2BCb%2Bqx8ev0AChsO6AjkZuogajZSuKIl50DiWrRpUksE6oYvM2Cv3tMJidpb0GOqUBHVgQ8aHlT%2FGRg88lGgiU0iikNsWnhW4SVtOjwUrW4%2FP8e%2FgA%2B8086GqMTP1zK0OUQpfdpG3EYb6qmbQmaMI7V5MVvWbzj3PrcHNa%2FIvNCHXvp1%2BrdYCmdfaejhMVrPotX8r%2FcsTYmsn0NXaZVjm34I%2FhC0yaBmHUlJRnzmVbK66GJMAbyZ0UUE8xOAHj8q4XvYsOpIfXB0aMPq0azry0AMNU2h9w&X-Amz-Signature=0398aa7ea146356b60818a466b108ba32b76ac47cffbd4dc4d3807748819d857&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLGENOJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCirjqDQgOJ8dBAzemHJdG%2BFTnGU30ByE83j%2B7zUnAfZgIgRD7p0XqIQGbz8OVZj3%2BW3pe4%2FBUycYX0Yd7kRUPphNAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA8ziRIA1vIy9QPACrcA%2FqYfOQkYjHk7xM%2BUEpZaWAx7bADIthnGiVqcw5wH6e3YiGK4k3DMRWtNvAiSym2XhfTtEHNC12DK27DJH9cgyLCBq%2BIzeFUcNcknxDaqYNcPB3erVtcqtIbv9kJn1LmC%2BLYvqZ6%2Fq0w77kw21HWbivmoRBhGJvlhl6AQkii%2BTa5Yl5QMALyMez%2BGGvdOTL%2ByKC17kiYDl8UCG43tICsQvnjQcYKb6Tc5vMvu1L15bbYABl46jZnbg1RJoD8WQjaT29BxIF7vmygvf0zyMc5OpyC72xwzNbTCYKVnZZqhaIgxnWvF2l6wAcvoDRldK88XfWA%2FZqvm4UpUJjWktZCF2n1Mj4IiS%2FRBd%2Fmha05SaL45sA%2FYXBfX7X0UpXBsBt%2FutF20lalnzd9WHZXQT04%2F0bqmrcEWVu3b8VL%2FMDJQ0YloVrnzN4AGOrzqAnNfIjp1EbMuoATAWpJ6kIHRAh1JMQgOZZ6gtYonFyQF2kbgLVY5acPyfNQEefsPTTeBYxPCvXxUqs4h7TaY5%2B1FInNifrPeRplVMixye9mL0brNWDJJIZrrdfSdI8HRZFBeCRPqbCYq2o%2BCb%2Bqx8ev0AChsO6AjkZuogajZSuKIl50DiWrRpUksE6oYvM2Cv3tMJidpb0GOqUBHVgQ8aHlT%2FGRg88lGgiU0iikNsWnhW4SVtOjwUrW4%2FP8e%2FgA%2B8086GqMTP1zK0OUQpfdpG3EYb6qmbQmaMI7V5MVvWbzj3PrcHNa%2FIvNCHXvp1%2BrdYCmdfaejhMVrPotX8r%2FcsTYmsn0NXaZVjm34I%2FhC0yaBmHUlJRnzmVbK66GJMAbyZ0UUE8xOAHj8q4XvYsOpIfXB0aMPq0azry0AMNU2h9w&X-Amz-Signature=2937ef0472f044a1acb6fdd168d1f38e117ea992e97619273d3b1bc6bba537a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
