---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAS5P5Q%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGrUXF%2BbknX0IiJLrYngE3g1bQhmYc3TSWwM8KmAaAjdAiAj6%2Fctj1AoP30Q8wXl61cPoe50fSEBORD1k72JyBL43Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7bG3JFmr0rzQ0thuKtwDL364Bjm4etVazka59IdqTSo2278j8WlNsXwHT5A46hTGGzq9lVLxles%2BCrhvuqV6wyaZZoBSoZC3zxbGskO6lQPnqg8MMPXnzwAT%2FmDh7XA5NvZo7omNuoDWK75FHr2M9zE9XiYrgXy1h%2FV7wpMRx7lsu2kRfXd423jC34TTVeRouPmj2SFiYrH7FSYTc6E5%2BeQKKMZDZTg5jM1mzavKsBIgvt3b2NuPDP2pnnRis8M8WZo74viOt4X1lwpJFF92P16cqN78Pyt4eRDrb5ENYfjgreUhMF97k38dq8Mk2t0DztnJb8JjPe9TfqvGbZh8nTo9aD%2BtfW9A42E%2B9FUsI2f6K5k7cYP3OKt%2FCTnqL6DNSqyopEfZcKvfW1XTQvq1jg%2FVcEldZORvuoq5VkQ7bh7XdHEkYuGuhGt4KCxtIzUOBXTtqoQgPmfgb4hTcvBfx6nlKtxHxzecDZXuMuT6ZiPQ8PKond8ri6wjjIrj0mTSLO0Y1N6wn3IYjmDPMTTzkK8ARL%2FRkXYSfWFeCSuKYYygLe76DdVedgToPHaRjPk8%2F2TWUVfn%2B%2B72ba1GIqlaeRpWmAqxD8A8n6LU45sFr1d%2Bz2jFO8EgW967gflf63U93I%2B8zJRBauBI6Yww%2FduXxAY6pgFaMDll70Tx%2BxALQDDqtuwX0jxFjb56LXkuQGm1kTynvuy3R62pAg2LWfQ7kBLy2w5sDEM6w1qt7KKKYTfRRQmbKQDVeGFelaYaDbu5PMNDGCxvX1j4L1ShaWXANg0KPdPyHlp%2FT9eyM%2BWSgNYmPTjYv9pay67maaXAj909Tg0Qs5cmWWX2rbXZXRI0SmF3%2BPf38Fp%2FmOV2%2F2RvABhG57QDZqk2SWX8&X-Amz-Signature=afb568ca396280a567bebdaf622bcd9c8c887b1fbcb8018dd11d57f726d2cf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAS5P5Q%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGrUXF%2BbknX0IiJLrYngE3g1bQhmYc3TSWwM8KmAaAjdAiAj6%2Fctj1AoP30Q8wXl61cPoe50fSEBORD1k72JyBL43Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7bG3JFmr0rzQ0thuKtwDL364Bjm4etVazka59IdqTSo2278j8WlNsXwHT5A46hTGGzq9lVLxles%2BCrhvuqV6wyaZZoBSoZC3zxbGskO6lQPnqg8MMPXnzwAT%2FmDh7XA5NvZo7omNuoDWK75FHr2M9zE9XiYrgXy1h%2FV7wpMRx7lsu2kRfXd423jC34TTVeRouPmj2SFiYrH7FSYTc6E5%2BeQKKMZDZTg5jM1mzavKsBIgvt3b2NuPDP2pnnRis8M8WZo74viOt4X1lwpJFF92P16cqN78Pyt4eRDrb5ENYfjgreUhMF97k38dq8Mk2t0DztnJb8JjPe9TfqvGbZh8nTo9aD%2BtfW9A42E%2B9FUsI2f6K5k7cYP3OKt%2FCTnqL6DNSqyopEfZcKvfW1XTQvq1jg%2FVcEldZORvuoq5VkQ7bh7XdHEkYuGuhGt4KCxtIzUOBXTtqoQgPmfgb4hTcvBfx6nlKtxHxzecDZXuMuT6ZiPQ8PKond8ri6wjjIrj0mTSLO0Y1N6wn3IYjmDPMTTzkK8ARL%2FRkXYSfWFeCSuKYYygLe76DdVedgToPHaRjPk8%2F2TWUVfn%2B%2B72ba1GIqlaeRpWmAqxD8A8n6LU45sFr1d%2Bz2jFO8EgW967gflf63U93I%2B8zJRBauBI6Yww%2FduXxAY6pgFaMDll70Tx%2BxALQDDqtuwX0jxFjb56LXkuQGm1kTynvuy3R62pAg2LWfQ7kBLy2w5sDEM6w1qt7KKKYTfRRQmbKQDVeGFelaYaDbu5PMNDGCxvX1j4L1ShaWXANg0KPdPyHlp%2FT9eyM%2BWSgNYmPTjYv9pay67maaXAj909Tg0Qs5cmWWX2rbXZXRI0SmF3%2BPf38Fp%2FmOV2%2F2RvABhG57QDZqk2SWX8&X-Amz-Signature=5f2819365096ebc03e530fd6be6adc3e906bc19bb16bed04a9e8bc9ddec59c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAS5P5Q%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGrUXF%2BbknX0IiJLrYngE3g1bQhmYc3TSWwM8KmAaAjdAiAj6%2Fctj1AoP30Q8wXl61cPoe50fSEBORD1k72JyBL43Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7bG3JFmr0rzQ0thuKtwDL364Bjm4etVazka59IdqTSo2278j8WlNsXwHT5A46hTGGzq9lVLxles%2BCrhvuqV6wyaZZoBSoZC3zxbGskO6lQPnqg8MMPXnzwAT%2FmDh7XA5NvZo7omNuoDWK75FHr2M9zE9XiYrgXy1h%2FV7wpMRx7lsu2kRfXd423jC34TTVeRouPmj2SFiYrH7FSYTc6E5%2BeQKKMZDZTg5jM1mzavKsBIgvt3b2NuPDP2pnnRis8M8WZo74viOt4X1lwpJFF92P16cqN78Pyt4eRDrb5ENYfjgreUhMF97k38dq8Mk2t0DztnJb8JjPe9TfqvGbZh8nTo9aD%2BtfW9A42E%2B9FUsI2f6K5k7cYP3OKt%2FCTnqL6DNSqyopEfZcKvfW1XTQvq1jg%2FVcEldZORvuoq5VkQ7bh7XdHEkYuGuhGt4KCxtIzUOBXTtqoQgPmfgb4hTcvBfx6nlKtxHxzecDZXuMuT6ZiPQ8PKond8ri6wjjIrj0mTSLO0Y1N6wn3IYjmDPMTTzkK8ARL%2FRkXYSfWFeCSuKYYygLe76DdVedgToPHaRjPk8%2F2TWUVfn%2B%2B72ba1GIqlaeRpWmAqxD8A8n6LU45sFr1d%2Bz2jFO8EgW967gflf63U93I%2B8zJRBauBI6Yww%2FduXxAY6pgFaMDll70Tx%2BxALQDDqtuwX0jxFjb56LXkuQGm1kTynvuy3R62pAg2LWfQ7kBLy2w5sDEM6w1qt7KKKYTfRRQmbKQDVeGFelaYaDbu5PMNDGCxvX1j4L1ShaWXANg0KPdPyHlp%2FT9eyM%2BWSgNYmPTjYv9pay67maaXAj909Tg0Qs5cmWWX2rbXZXRI0SmF3%2BPf38Fp%2FmOV2%2F2RvABhG57QDZqk2SWX8&X-Amz-Signature=299c359b675888a7ea1b8cdbf7946e55f098d3daacab86b0d0e9deecb2c14445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
