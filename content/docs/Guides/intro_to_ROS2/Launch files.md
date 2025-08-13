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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYBAB33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHclpi8CNs2Mb8C036Xez35%2F0yx%2F9YdtfwzGy4pdIIqyAiB%2FCk%2Bet1DMF0H3gOB9Iu5wAoIvl8e7oWLM7PgfVqNqfir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMNZoO4MN5VbFY1K7eKtwDK%2FmhyenDo%2B6BlUP1HUmm6%2Fjre3T5u3K%2Fq5xSiJed%2BWjz2exewI593ehfGhsK2dwPESAl0BQzVWMpRnxNjRr1pGiHKdfB0z4dYRiJM835FDQVQabd%2BLvRQxrSO47KZuYSEc%2BlvkF8l0lUlKpsXOVbF9irCAJQX%2B%2FQEPifO15Dt3d0sVEy2kY26aUFRSQ5K%2Bg45CDjxcoIZXgFB1qHiYfA8koQZuaySB600HS35ND0KIPWK2cLpXNgUn50BLijhNbyjKX2NpWC2kurI1GuiDFiEnA2E6EJ8OgOeXJd4jxNYoDGQ%2BRhfvMPXxEQXnnFjIsy6i3W85AMqfohoEFPGmpMNdZ9KMagsCxw4fqAtummmgJTIjlfhXRHHzl4dUR26xeT2z6gyAWwBlO%2B4NA11d%2BVAKqiQhy3i%2BVqpMCW0t91yVEDR2K10EpJUaGi7cwiMdUj6%2F5pS%2B9ST4xHnFD7DDl2EZeJWxwpTHWRomLWe7fB6AWmZq15tfLGLCSq2OFBw20tioEbcdQ3F7NuWT7PfpUrfApkPN9Gek3cUhfGtRt7XnYvI16TrcOn7hE%2FhC%2FvjKjj1aU9gXbbm8Cfvr9mKh33qWeFWFU7LJsmiNNgRs9ia%2FW%2FxhHbSkhqwmI1Uo4w6tnvxAY6pgFKtqFnsXv30k4CON1QPrT2xZGrbM0k56NNrvKbOnQ6nWP8hUlw3fbDny21UksyVgNf440Wqvf1nrOy1%2BdtpJei7fRJKgn3fo%2F%2BvHQ3MCG%2B8708Pd9AnnaMvclrZm3ECcbk9rIKc2JaltljRek1h9bnUN2DXGLcSoTxECOwJXp69oxTdBIG21XasGpebx3QeCl67cPYqXWUeg79iFh%2FzuC62qcmFbxs&X-Amz-Signature=95b3a9ee5b5d567a4c75900d9d3afaec7162583770898924db5349f323b7d420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYBAB33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHclpi8CNs2Mb8C036Xez35%2F0yx%2F9YdtfwzGy4pdIIqyAiB%2FCk%2Bet1DMF0H3gOB9Iu5wAoIvl8e7oWLM7PgfVqNqfir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMNZoO4MN5VbFY1K7eKtwDK%2FmhyenDo%2B6BlUP1HUmm6%2Fjre3T5u3K%2Fq5xSiJed%2BWjz2exewI593ehfGhsK2dwPESAl0BQzVWMpRnxNjRr1pGiHKdfB0z4dYRiJM835FDQVQabd%2BLvRQxrSO47KZuYSEc%2BlvkF8l0lUlKpsXOVbF9irCAJQX%2B%2FQEPifO15Dt3d0sVEy2kY26aUFRSQ5K%2Bg45CDjxcoIZXgFB1qHiYfA8koQZuaySB600HS35ND0KIPWK2cLpXNgUn50BLijhNbyjKX2NpWC2kurI1GuiDFiEnA2E6EJ8OgOeXJd4jxNYoDGQ%2BRhfvMPXxEQXnnFjIsy6i3W85AMqfohoEFPGmpMNdZ9KMagsCxw4fqAtummmgJTIjlfhXRHHzl4dUR26xeT2z6gyAWwBlO%2B4NA11d%2BVAKqiQhy3i%2BVqpMCW0t91yVEDR2K10EpJUaGi7cwiMdUj6%2F5pS%2B9ST4xHnFD7DDl2EZeJWxwpTHWRomLWe7fB6AWmZq15tfLGLCSq2OFBw20tioEbcdQ3F7NuWT7PfpUrfApkPN9Gek3cUhfGtRt7XnYvI16TrcOn7hE%2FhC%2FvjKjj1aU9gXbbm8Cfvr9mKh33qWeFWFU7LJsmiNNgRs9ia%2FW%2FxhHbSkhqwmI1Uo4w6tnvxAY6pgFKtqFnsXv30k4CON1QPrT2xZGrbM0k56NNrvKbOnQ6nWP8hUlw3fbDny21UksyVgNf440Wqvf1nrOy1%2BdtpJei7fRJKgn3fo%2F%2BvHQ3MCG%2B8708Pd9AnnaMvclrZm3ECcbk9rIKc2JaltljRek1h9bnUN2DXGLcSoTxECOwJXp69oxTdBIG21XasGpebx3QeCl67cPYqXWUeg79iFh%2FzuC62qcmFbxs&X-Amz-Signature=a7010a9e3700129f3c1ceb6e8edee9c0e5728a6fd9b9a2025422c28c81c2697d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYBAB33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHclpi8CNs2Mb8C036Xez35%2F0yx%2F9YdtfwzGy4pdIIqyAiB%2FCk%2Bet1DMF0H3gOB9Iu5wAoIvl8e7oWLM7PgfVqNqfir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMNZoO4MN5VbFY1K7eKtwDK%2FmhyenDo%2B6BlUP1HUmm6%2Fjre3T5u3K%2Fq5xSiJed%2BWjz2exewI593ehfGhsK2dwPESAl0BQzVWMpRnxNjRr1pGiHKdfB0z4dYRiJM835FDQVQabd%2BLvRQxrSO47KZuYSEc%2BlvkF8l0lUlKpsXOVbF9irCAJQX%2B%2FQEPifO15Dt3d0sVEy2kY26aUFRSQ5K%2Bg45CDjxcoIZXgFB1qHiYfA8koQZuaySB600HS35ND0KIPWK2cLpXNgUn50BLijhNbyjKX2NpWC2kurI1GuiDFiEnA2E6EJ8OgOeXJd4jxNYoDGQ%2BRhfvMPXxEQXnnFjIsy6i3W85AMqfohoEFPGmpMNdZ9KMagsCxw4fqAtummmgJTIjlfhXRHHzl4dUR26xeT2z6gyAWwBlO%2B4NA11d%2BVAKqiQhy3i%2BVqpMCW0t91yVEDR2K10EpJUaGi7cwiMdUj6%2F5pS%2B9ST4xHnFD7DDl2EZeJWxwpTHWRomLWe7fB6AWmZq15tfLGLCSq2OFBw20tioEbcdQ3F7NuWT7PfpUrfApkPN9Gek3cUhfGtRt7XnYvI16TrcOn7hE%2FhC%2FvjKjj1aU9gXbbm8Cfvr9mKh33qWeFWFU7LJsmiNNgRs9ia%2FW%2FxhHbSkhqwmI1Uo4w6tnvxAY6pgFKtqFnsXv30k4CON1QPrT2xZGrbM0k56NNrvKbOnQ6nWP8hUlw3fbDny21UksyVgNf440Wqvf1nrOy1%2BdtpJei7fRJKgn3fo%2F%2BvHQ3MCG%2B8708Pd9AnnaMvclrZm3ECcbk9rIKc2JaltljRek1h9bnUN2DXGLcSoTxECOwJXp69oxTdBIG21XasGpebx3QeCl67cPYqXWUeg79iFh%2FzuC62qcmFbxs&X-Amz-Signature=746bde20ab266236fde46fee4a3c3005ccb02e2ec9cb6cc1d3eac800d85d1b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
