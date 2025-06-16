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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X475I4VT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDfLscGMrJqmEwtt%2FtltOc94v6gHVN5KtWDpOFfxZXIZgIhANuTclS9uXIjluUJeYLFtpS3dCRT7dUa9hI0gaPtDpl0Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzvxjmb8ZUZD6PFeFkq3ANx4NJej0cQS8L%2FpX7ISrivzfc8xmBSuO01Y1FECa1h1Kj85gICjqB7NU1CcyuR90eGR3Eui106bNyg3epSijqLTDf%2BD8WG3ESEbjib%2FZop9V25i2jKWlwrf8bM30Wm6H9lIyVomx6Llks1ja15m3EUjaG07MxSP%2BYm9KchMcbGwUqSVtKoVT9SY16OIMNOfUeLxWN9jYHeBWu1%2FX%2FCESESer3GwdjYSL0EqQxxde3KV6x6K9RmLoNclsAO7QM9jw6bGDj5Mtt4OD10YC0XBNplZi5PNl%2BbUvrserBo3RIH6kDDiJz6%2FHPFAv2aCCItUMifv3UzlLj8xIPb8s0j0CgPmnjkz4PL91MMO0RufxPp50KeMGh%2FuCEuidybLVpww0rfH2IVgW711wO2aiv7hkUNIXug2jI9v98vIl9xk5q6B95PFNePaa5JQZElComy3JfJEIaQNMlmDqjGHdKw8Na3DUkrOIBF2WZjxK78dcQoUBaPA14pgwkfM8d8sNIlZbhchiP0z5ETKwCVJcXY3FZ1%2BzCjYdBR6xTrbVYiiz6gRNWnrzPCt3j2DskWD63C6MRtwM93x%2BuVjXYSAI1utGxt51swFSPo0H1DNO4b7i7RDEGAkh3SO5XItxNuyDDg38HCBjqkAVJAIoNYDvt1AKFfHB5i7qn3L7izbeh0NRkH1cUWlv5ZCwmW%2BhQF5u6VCm%2FpjVOwVfSKsYYogpRoEUhnm%2Biw5%2FlaSHO5WWreEoOUw7kCZ3%2BcxOkvCoxoA05SvgOU5iIv1BjsFtXX00RKLlGlwGifHcjchoTAPfxZFAOGk62esiqOtNy9dkDz3bz1breq8xYl93KnCr4p6K4J6MPZ2bGal%2BTSifDZ&X-Amz-Signature=82436daa589bdf77b173b7f02325f7bf91a226c57b2ba12630b749dd62e76a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X475I4VT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDfLscGMrJqmEwtt%2FtltOc94v6gHVN5KtWDpOFfxZXIZgIhANuTclS9uXIjluUJeYLFtpS3dCRT7dUa9hI0gaPtDpl0Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzvxjmb8ZUZD6PFeFkq3ANx4NJej0cQS8L%2FpX7ISrivzfc8xmBSuO01Y1FECa1h1Kj85gICjqB7NU1CcyuR90eGR3Eui106bNyg3epSijqLTDf%2BD8WG3ESEbjib%2FZop9V25i2jKWlwrf8bM30Wm6H9lIyVomx6Llks1ja15m3EUjaG07MxSP%2BYm9KchMcbGwUqSVtKoVT9SY16OIMNOfUeLxWN9jYHeBWu1%2FX%2FCESESer3GwdjYSL0EqQxxde3KV6x6K9RmLoNclsAO7QM9jw6bGDj5Mtt4OD10YC0XBNplZi5PNl%2BbUvrserBo3RIH6kDDiJz6%2FHPFAv2aCCItUMifv3UzlLj8xIPb8s0j0CgPmnjkz4PL91MMO0RufxPp50KeMGh%2FuCEuidybLVpww0rfH2IVgW711wO2aiv7hkUNIXug2jI9v98vIl9xk5q6B95PFNePaa5JQZElComy3JfJEIaQNMlmDqjGHdKw8Na3DUkrOIBF2WZjxK78dcQoUBaPA14pgwkfM8d8sNIlZbhchiP0z5ETKwCVJcXY3FZ1%2BzCjYdBR6xTrbVYiiz6gRNWnrzPCt3j2DskWD63C6MRtwM93x%2BuVjXYSAI1utGxt51swFSPo0H1DNO4b7i7RDEGAkh3SO5XItxNuyDDg38HCBjqkAVJAIoNYDvt1AKFfHB5i7qn3L7izbeh0NRkH1cUWlv5ZCwmW%2BhQF5u6VCm%2FpjVOwVfSKsYYogpRoEUhnm%2Biw5%2FlaSHO5WWreEoOUw7kCZ3%2BcxOkvCoxoA05SvgOU5iIv1BjsFtXX00RKLlGlwGifHcjchoTAPfxZFAOGk62esiqOtNy9dkDz3bz1breq8xYl93KnCr4p6K4J6MPZ2bGal%2BTSifDZ&X-Amz-Signature=a37061b428c34c2d45a6e70c06b23db35b5f04bfc5827bce3e30a4b00d32ada2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X475I4VT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDfLscGMrJqmEwtt%2FtltOc94v6gHVN5KtWDpOFfxZXIZgIhANuTclS9uXIjluUJeYLFtpS3dCRT7dUa9hI0gaPtDpl0Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzvxjmb8ZUZD6PFeFkq3ANx4NJej0cQS8L%2FpX7ISrivzfc8xmBSuO01Y1FECa1h1Kj85gICjqB7NU1CcyuR90eGR3Eui106bNyg3epSijqLTDf%2BD8WG3ESEbjib%2FZop9V25i2jKWlwrf8bM30Wm6H9lIyVomx6Llks1ja15m3EUjaG07MxSP%2BYm9KchMcbGwUqSVtKoVT9SY16OIMNOfUeLxWN9jYHeBWu1%2FX%2FCESESer3GwdjYSL0EqQxxde3KV6x6K9RmLoNclsAO7QM9jw6bGDj5Mtt4OD10YC0XBNplZi5PNl%2BbUvrserBo3RIH6kDDiJz6%2FHPFAv2aCCItUMifv3UzlLj8xIPb8s0j0CgPmnjkz4PL91MMO0RufxPp50KeMGh%2FuCEuidybLVpww0rfH2IVgW711wO2aiv7hkUNIXug2jI9v98vIl9xk5q6B95PFNePaa5JQZElComy3JfJEIaQNMlmDqjGHdKw8Na3DUkrOIBF2WZjxK78dcQoUBaPA14pgwkfM8d8sNIlZbhchiP0z5ETKwCVJcXY3FZ1%2BzCjYdBR6xTrbVYiiz6gRNWnrzPCt3j2DskWD63C6MRtwM93x%2BuVjXYSAI1utGxt51swFSPo0H1DNO4b7i7RDEGAkh3SO5XItxNuyDDg38HCBjqkAVJAIoNYDvt1AKFfHB5i7qn3L7izbeh0NRkH1cUWlv5ZCwmW%2BhQF5u6VCm%2FpjVOwVfSKsYYogpRoEUhnm%2Biw5%2FlaSHO5WWreEoOUw7kCZ3%2BcxOkvCoxoA05SvgOU5iIv1BjsFtXX00RKLlGlwGifHcjchoTAPfxZFAOGk62esiqOtNy9dkDz3bz1breq8xYl93KnCr4p6K4J6MPZ2bGal%2BTSifDZ&X-Amz-Signature=aeac1238b6a2742dfb882690cb3809cb5e8a9b28cb279f72d6902240a468f2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
