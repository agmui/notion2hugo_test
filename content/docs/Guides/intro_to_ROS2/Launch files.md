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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5FLVLY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEGQmkX7c4dk6j5uLV4%2FZ9v11T%2Fz9mKmzWMTxS%2BMJXsAiAG4fN55WLkdyKqKbYJoUXMpOhi7SS0A8pht%2F6k9x5gXCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxzRt4yxnft20e1MUKtwDlM7O8otIPO71IUU9caTyOT6zOYgpvnzG8OWNjQFX82MW5edmMY%2FCkyPaq%2FKeI9Feq21ujCi7VXxoxaGSzCz39CeV22INrjgdOp0AfSAzeyK1FnU0yXPhj046UbJwb1ruDz%2Fq5QsF9GPWMcbufVtDfYSmPHzj8fAo8hDYwymHfdPAK%2Fso1OrgTodNpR2UFz7ai79TSIw77woqxvWy0bSL91kk9bdEzJ4zebMO1epUgGUcEQFje%2FmWPR49ujW8YkIYRZLu4up5w5tw2Ho58Cx9Hrk%2Ff%2FnIBzq5AQOEtiQPa4uEsc044xyh%2B9DirTy457HQ%2Fryj29NqrqUtGaOWQh6BOd956AB0n7b3jH%2FIOqmONrsTANHN09GA3e0euC62H17peyrkDGrz89Snfg00d8rNizdJnfbjmRwt4gHBAmEfaXq48dBZjz6WyW1Rap2q18%2BcseUHo8zyxgvkCjWuFGkICS%2FNLF9tpP0cSY89nNqq2ZRSbyCe1%2BvbHtSSk3WZNcGRGXEtrTADKLjubUpBdNH339aIrvzZ0Sh%2FlW%2FMBasfG%2BBYOfb4w0qMifzw9KO%2Bt4ZNoJc8O%2B%2BkuRFNuU3%2F%2BrhyCuC1qcjIS3AC7Kl6hnlEv0eDY4UG1zs2g9cWsYcwrvj%2BvwY6pgFfJHlsvGTCB3BsORUohK9stLQ%2FP29uI%2FEBIPsAbyQNssopjx8xpzRu1aBx%2BxwUGQgHrCXEZt2mRTd%2BCHkIjceknpAEtWTzlZdOCuRvfu5d0dmpsNB5afqggny4ZrL%2FDflDS1DyC9Fe4rlNpFq%2B21D9pYPtaOGs3QQdzvNf8sMsYrIJu8nKDqeLn8ab9uUc%2BMWga6ooxMN0dAMUeHZr1v5bnhgpRyEU&X-Amz-Signature=45ebf179842b30e5e7c802b1a551efb4e882310834634e4ba86f086487aef0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5FLVLY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEGQmkX7c4dk6j5uLV4%2FZ9v11T%2Fz9mKmzWMTxS%2BMJXsAiAG4fN55WLkdyKqKbYJoUXMpOhi7SS0A8pht%2F6k9x5gXCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxzRt4yxnft20e1MUKtwDlM7O8otIPO71IUU9caTyOT6zOYgpvnzG8OWNjQFX82MW5edmMY%2FCkyPaq%2FKeI9Feq21ujCi7VXxoxaGSzCz39CeV22INrjgdOp0AfSAzeyK1FnU0yXPhj046UbJwb1ruDz%2Fq5QsF9GPWMcbufVtDfYSmPHzj8fAo8hDYwymHfdPAK%2Fso1OrgTodNpR2UFz7ai79TSIw77woqxvWy0bSL91kk9bdEzJ4zebMO1epUgGUcEQFje%2FmWPR49ujW8YkIYRZLu4up5w5tw2Ho58Cx9Hrk%2Ff%2FnIBzq5AQOEtiQPa4uEsc044xyh%2B9DirTy457HQ%2Fryj29NqrqUtGaOWQh6BOd956AB0n7b3jH%2FIOqmONrsTANHN09GA3e0euC62H17peyrkDGrz89Snfg00d8rNizdJnfbjmRwt4gHBAmEfaXq48dBZjz6WyW1Rap2q18%2BcseUHo8zyxgvkCjWuFGkICS%2FNLF9tpP0cSY89nNqq2ZRSbyCe1%2BvbHtSSk3WZNcGRGXEtrTADKLjubUpBdNH339aIrvzZ0Sh%2FlW%2FMBasfG%2BBYOfb4w0qMifzw9KO%2Bt4ZNoJc8O%2B%2BkuRFNuU3%2F%2BrhyCuC1qcjIS3AC7Kl6hnlEv0eDY4UG1zs2g9cWsYcwrvj%2BvwY6pgFfJHlsvGTCB3BsORUohK9stLQ%2FP29uI%2FEBIPsAbyQNssopjx8xpzRu1aBx%2BxwUGQgHrCXEZt2mRTd%2BCHkIjceknpAEtWTzlZdOCuRvfu5d0dmpsNB5afqggny4ZrL%2FDflDS1DyC9Fe4rlNpFq%2B21D9pYPtaOGs3QQdzvNf8sMsYrIJu8nKDqeLn8ab9uUc%2BMWga6ooxMN0dAMUeHZr1v5bnhgpRyEU&X-Amz-Signature=91a19cc7b871c478897bacc1ebe6b767063a59ffc4cc4ddad94cfe4945f46753&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5FLVLY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEGQmkX7c4dk6j5uLV4%2FZ9v11T%2Fz9mKmzWMTxS%2BMJXsAiAG4fN55WLkdyKqKbYJoUXMpOhi7SS0A8pht%2F6k9x5gXCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxzRt4yxnft20e1MUKtwDlM7O8otIPO71IUU9caTyOT6zOYgpvnzG8OWNjQFX82MW5edmMY%2FCkyPaq%2FKeI9Feq21ujCi7VXxoxaGSzCz39CeV22INrjgdOp0AfSAzeyK1FnU0yXPhj046UbJwb1ruDz%2Fq5QsF9GPWMcbufVtDfYSmPHzj8fAo8hDYwymHfdPAK%2Fso1OrgTodNpR2UFz7ai79TSIw77woqxvWy0bSL91kk9bdEzJ4zebMO1epUgGUcEQFje%2FmWPR49ujW8YkIYRZLu4up5w5tw2Ho58Cx9Hrk%2Ff%2FnIBzq5AQOEtiQPa4uEsc044xyh%2B9DirTy457HQ%2Fryj29NqrqUtGaOWQh6BOd956AB0n7b3jH%2FIOqmONrsTANHN09GA3e0euC62H17peyrkDGrz89Snfg00d8rNizdJnfbjmRwt4gHBAmEfaXq48dBZjz6WyW1Rap2q18%2BcseUHo8zyxgvkCjWuFGkICS%2FNLF9tpP0cSY89nNqq2ZRSbyCe1%2BvbHtSSk3WZNcGRGXEtrTADKLjubUpBdNH339aIrvzZ0Sh%2FlW%2FMBasfG%2BBYOfb4w0qMifzw9KO%2Bt4ZNoJc8O%2B%2BkuRFNuU3%2F%2BrhyCuC1qcjIS3AC7Kl6hnlEv0eDY4UG1zs2g9cWsYcwrvj%2BvwY6pgFfJHlsvGTCB3BsORUohK9stLQ%2FP29uI%2FEBIPsAbyQNssopjx8xpzRu1aBx%2BxwUGQgHrCXEZt2mRTd%2BCHkIjceknpAEtWTzlZdOCuRvfu5d0dmpsNB5afqggny4ZrL%2FDflDS1DyC9Fe4rlNpFq%2B21D9pYPtaOGs3QQdzvNf8sMsYrIJu8nKDqeLn8ab9uUc%2BMWga6ooxMN0dAMUeHZr1v5bnhgpRyEU&X-Amz-Signature=aa79ea79957ee33aa816c5d4f722df11e1bcb60fa35211d870164bbd85ac5945&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
