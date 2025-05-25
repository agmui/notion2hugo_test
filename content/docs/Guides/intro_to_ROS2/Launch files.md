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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4SL4MA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHpb3cJcbnezUZ9FvbKQukha8fqGNG3afDq3hwqq9ShgIgQNVCE%2BlEWZuSkv1l83yRVihozdsecgMOrIrirHUC2HYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDzlXsxCc0Vv%2Fb5YlSrcAytiOh6%2FGkKJV9oXid3lfoRa9BN1LzzizCIWOqdrSo53miMT%2B%2FhgFVMA%2Bm6%2B9fXVrqJwR%2F6MTBC1a%2BARt87v684R1rjmEF6O9BR3UTWaVxa%2B%2FFHCF7UlwHESJslOEE00hX%2BqnLaADA72PNU8LXO20OHH0ziDsHEaV0XIKluJmm39ptkZEuBH8Dh8RQw%2BorYiXVr%2F412tbXpfuhphtnH8tVAhUakmG9PJEpyn7%2BxKmNJsQE98bqZG7M%2Bzj%2BH28BTX0qAOkQN3Y77LjTJskapRcKvWfOdvNDZHtmSkXpty9eY82auR8Q4BySloAAdOt8joOap2RDJ9vavnvy3IyaUN9aKLR4Q8s%2B8Nb1qdVbHMtO%2FQsaxrj2VduKd%2FUJS2PM7MQn9f3CdbIJKDtM%2Bjo%2BiuDNQx6%2FOwIbIFJx5BXhq43coOqQQx%2BlmiwyXewf%2B%2FE%2BZ057ttIUblqRk%2B3qeYWujUJKKxyfbch8rtiGqVNQBev6LM0LFRCA9mi5zec8VYSDEpbB1H%2F2%2B3BKRP9H5jlVwi0H6LI6rW5A56SHAiNNSa53%2BfdIKEmLgbb1m%2Fc1SrDYVHiD3JhDnwaPmZIeCT3WF%2FqP5TkcrKSphYlVjnbzcLIG0plqNMItNfqgcxZidYMObfzMEGOqUB2S9bV2zQN4urUFTyAslYbadJV9Ew%2B9sTSU%2BMZr7xnPkowZsMU5FJ%2FhuXVZKOgwEnF84RNUBxXd9%2BCbZFHA6wx02k67jVX8wiOufPYiA8zvf6Ay7HjdCZPbydhzw%2FGn2IVyxrYkxB%2BgOnzC%2FXPLMoAJ7RNTHNXfTFwdPUpZfPPhsImWJOcACUJzkFqJcvCiJMgjrdf8DzWrN%2BbFzT6MjGQ6VGXINz&X-Amz-Signature=34fdc58704d3c7a128207c902890f445702a1bf9513e3f12f1dac101e00d50ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4SL4MA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHpb3cJcbnezUZ9FvbKQukha8fqGNG3afDq3hwqq9ShgIgQNVCE%2BlEWZuSkv1l83yRVihozdsecgMOrIrirHUC2HYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDzlXsxCc0Vv%2Fb5YlSrcAytiOh6%2FGkKJV9oXid3lfoRa9BN1LzzizCIWOqdrSo53miMT%2B%2FhgFVMA%2Bm6%2B9fXVrqJwR%2F6MTBC1a%2BARt87v684R1rjmEF6O9BR3UTWaVxa%2B%2FFHCF7UlwHESJslOEE00hX%2BqnLaADA72PNU8LXO20OHH0ziDsHEaV0XIKluJmm39ptkZEuBH8Dh8RQw%2BorYiXVr%2F412tbXpfuhphtnH8tVAhUakmG9PJEpyn7%2BxKmNJsQE98bqZG7M%2Bzj%2BH28BTX0qAOkQN3Y77LjTJskapRcKvWfOdvNDZHtmSkXpty9eY82auR8Q4BySloAAdOt8joOap2RDJ9vavnvy3IyaUN9aKLR4Q8s%2B8Nb1qdVbHMtO%2FQsaxrj2VduKd%2FUJS2PM7MQn9f3CdbIJKDtM%2Bjo%2BiuDNQx6%2FOwIbIFJx5BXhq43coOqQQx%2BlmiwyXewf%2B%2FE%2BZ057ttIUblqRk%2B3qeYWujUJKKxyfbch8rtiGqVNQBev6LM0LFRCA9mi5zec8VYSDEpbB1H%2F2%2B3BKRP9H5jlVwi0H6LI6rW5A56SHAiNNSa53%2BfdIKEmLgbb1m%2Fc1SrDYVHiD3JhDnwaPmZIeCT3WF%2FqP5TkcrKSphYlVjnbzcLIG0plqNMItNfqgcxZidYMObfzMEGOqUB2S9bV2zQN4urUFTyAslYbadJV9Ew%2B9sTSU%2BMZr7xnPkowZsMU5FJ%2FhuXVZKOgwEnF84RNUBxXd9%2BCbZFHA6wx02k67jVX8wiOufPYiA8zvf6Ay7HjdCZPbydhzw%2FGn2IVyxrYkxB%2BgOnzC%2FXPLMoAJ7RNTHNXfTFwdPUpZfPPhsImWJOcACUJzkFqJcvCiJMgjrdf8DzWrN%2BbFzT6MjGQ6VGXINz&X-Amz-Signature=85464e76ac34fd4883cc7346c887335152cfd740b5599ccc6b7d57ea2f9fa29a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4SL4MA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHpb3cJcbnezUZ9FvbKQukha8fqGNG3afDq3hwqq9ShgIgQNVCE%2BlEWZuSkv1l83yRVihozdsecgMOrIrirHUC2HYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDzlXsxCc0Vv%2Fb5YlSrcAytiOh6%2FGkKJV9oXid3lfoRa9BN1LzzizCIWOqdrSo53miMT%2B%2FhgFVMA%2Bm6%2B9fXVrqJwR%2F6MTBC1a%2BARt87v684R1rjmEF6O9BR3UTWaVxa%2B%2FFHCF7UlwHESJslOEE00hX%2BqnLaADA72PNU8LXO20OHH0ziDsHEaV0XIKluJmm39ptkZEuBH8Dh8RQw%2BorYiXVr%2F412tbXpfuhphtnH8tVAhUakmG9PJEpyn7%2BxKmNJsQE98bqZG7M%2Bzj%2BH28BTX0qAOkQN3Y77LjTJskapRcKvWfOdvNDZHtmSkXpty9eY82auR8Q4BySloAAdOt8joOap2RDJ9vavnvy3IyaUN9aKLR4Q8s%2B8Nb1qdVbHMtO%2FQsaxrj2VduKd%2FUJS2PM7MQn9f3CdbIJKDtM%2Bjo%2BiuDNQx6%2FOwIbIFJx5BXhq43coOqQQx%2BlmiwyXewf%2B%2FE%2BZ057ttIUblqRk%2B3qeYWujUJKKxyfbch8rtiGqVNQBev6LM0LFRCA9mi5zec8VYSDEpbB1H%2F2%2B3BKRP9H5jlVwi0H6LI6rW5A56SHAiNNSa53%2BfdIKEmLgbb1m%2Fc1SrDYVHiD3JhDnwaPmZIeCT3WF%2FqP5TkcrKSphYlVjnbzcLIG0plqNMItNfqgcxZidYMObfzMEGOqUB2S9bV2zQN4urUFTyAslYbadJV9Ew%2B9sTSU%2BMZr7xnPkowZsMU5FJ%2FhuXVZKOgwEnF84RNUBxXd9%2BCbZFHA6wx02k67jVX8wiOufPYiA8zvf6Ay7HjdCZPbydhzw%2FGn2IVyxrYkxB%2BgOnzC%2FXPLMoAJ7RNTHNXfTFwdPUpZfPPhsImWJOcACUJzkFqJcvCiJMgjrdf8DzWrN%2BbFzT6MjGQ6VGXINz&X-Amz-Signature=9d78b8d59e4c4fab052671e0e320b6fe1628df3753b31fd6d5bf462065f7621f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
