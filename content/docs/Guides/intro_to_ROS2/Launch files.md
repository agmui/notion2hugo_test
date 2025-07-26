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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T56QSZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDYjmK8yiUeLp%2B%2Bxpb2eFxdF2S3j2Lh7CC4GOfUcrVZRwIhAIekZcfJX7JZUFq%2BVCm0ns2N%2Buw9jLuB5Wx5dGWPnbDRKv8DCF8QABoMNjM3NDIzMTgzODA1IgwEujk62RdKRQY%2FceMq3ANRnUTg%2BkO9QoJVAeExnEqB67BSJInRJTww9cNL76IzQp34Id2aDrnj7fL2oGlB2VoD5fRc44%2FG5Xnc5EiqoWWOrr8IOqFYJzjfyz3DZf5OUyqqadR3cSrDIrmcy%2BBYRyjXGUQPkTcWLcERMd6pobwAs%2FPQti0dhdjiDFRSlzehOV%2Fi%2BDBuZzkOjdTuE0HX51lwVVtMbAwAn9xxT3beaRTqNFk1ppdljcJp1UCKzmWIIDVi%2BkeKDusBYW4OzenV6yJ%2B0wCTw1ZXiVHI6icl5Ng0XwbCzo3r%2Bp2Fkj8MSLdRAP90bceW%2BL%2FFRY1Bmb%2B4ioVLNkeOKIKQ8PLh1urpz0rfkmIvn9lgUQWckcT1CaEvUgTA1Sx0trT1R6%2BrEdh3tQ1QLWRgzFa7G1tWDRJSSxpc1iWjSB10v74MvamwcNfxmmaSrTkJ7Vejb7SEgiyUu7Nd89UTNxmUHwLEQxWSUxyinlIyxjYLT21rbyN%2BuJW2%2BVCIFrmrhpfzUXCuB6aUGltCdKKS3v7iw3NEPFYsPu49DqAnOBBUe9fCIcuvhlVP9V9N5Z2Y5MzqU6%2F3f9cd5JVHue7aegGNTEFl0i1tcXHts9N8h8Xr0wB8%2FFdmyGcU8mtFPic2wQ8NxJx4SDCwwZPEBjqkAUhqhd2xlhcb5wDZp%2F6sfY3Gs7R9J%2BfXx4bSuYopCdyNNdlAZ4AwdzPpuHi0dqyWysqF%2B5Mh34zXP8f%2FVMhQhhfMfEtFfPPjfWkt3mSpsyYz69EltH3%2F7lhnHWBKJTSxN0ZjM3UqQK0rGdvu3SOaMcYPdvAp9O2TMlV9HQ%2FfuCB7SKf%2BYmGphV8p%2F%2BnBi8bqFffqXiMUCIv1EHn3BmdpBKzJE7tl&X-Amz-Signature=c0a5d1495968e7f6289eba33c12101d35085bb04eee9dd9ede7e1e5eb92f2ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T56QSZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDYjmK8yiUeLp%2B%2Bxpb2eFxdF2S3j2Lh7CC4GOfUcrVZRwIhAIekZcfJX7JZUFq%2BVCm0ns2N%2Buw9jLuB5Wx5dGWPnbDRKv8DCF8QABoMNjM3NDIzMTgzODA1IgwEujk62RdKRQY%2FceMq3ANRnUTg%2BkO9QoJVAeExnEqB67BSJInRJTww9cNL76IzQp34Id2aDrnj7fL2oGlB2VoD5fRc44%2FG5Xnc5EiqoWWOrr8IOqFYJzjfyz3DZf5OUyqqadR3cSrDIrmcy%2BBYRyjXGUQPkTcWLcERMd6pobwAs%2FPQti0dhdjiDFRSlzehOV%2Fi%2BDBuZzkOjdTuE0HX51lwVVtMbAwAn9xxT3beaRTqNFk1ppdljcJp1UCKzmWIIDVi%2BkeKDusBYW4OzenV6yJ%2B0wCTw1ZXiVHI6icl5Ng0XwbCzo3r%2Bp2Fkj8MSLdRAP90bceW%2BL%2FFRY1Bmb%2B4ioVLNkeOKIKQ8PLh1urpz0rfkmIvn9lgUQWckcT1CaEvUgTA1Sx0trT1R6%2BrEdh3tQ1QLWRgzFa7G1tWDRJSSxpc1iWjSB10v74MvamwcNfxmmaSrTkJ7Vejb7SEgiyUu7Nd89UTNxmUHwLEQxWSUxyinlIyxjYLT21rbyN%2BuJW2%2BVCIFrmrhpfzUXCuB6aUGltCdKKS3v7iw3NEPFYsPu49DqAnOBBUe9fCIcuvhlVP9V9N5Z2Y5MzqU6%2F3f9cd5JVHue7aegGNTEFl0i1tcXHts9N8h8Xr0wB8%2FFdmyGcU8mtFPic2wQ8NxJx4SDCwwZPEBjqkAUhqhd2xlhcb5wDZp%2F6sfY3Gs7R9J%2BfXx4bSuYopCdyNNdlAZ4AwdzPpuHi0dqyWysqF%2B5Mh34zXP8f%2FVMhQhhfMfEtFfPPjfWkt3mSpsyYz69EltH3%2F7lhnHWBKJTSxN0ZjM3UqQK0rGdvu3SOaMcYPdvAp9O2TMlV9HQ%2FfuCB7SKf%2BYmGphV8p%2F%2BnBi8bqFffqXiMUCIv1EHn3BmdpBKzJE7tl&X-Amz-Signature=cb1e1e9d727b6c3e3c00fcd3b04824fba4900c7e2365c5521d5c5b8cf6b8b3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T56QSZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDYjmK8yiUeLp%2B%2Bxpb2eFxdF2S3j2Lh7CC4GOfUcrVZRwIhAIekZcfJX7JZUFq%2BVCm0ns2N%2Buw9jLuB5Wx5dGWPnbDRKv8DCF8QABoMNjM3NDIzMTgzODA1IgwEujk62RdKRQY%2FceMq3ANRnUTg%2BkO9QoJVAeExnEqB67BSJInRJTww9cNL76IzQp34Id2aDrnj7fL2oGlB2VoD5fRc44%2FG5Xnc5EiqoWWOrr8IOqFYJzjfyz3DZf5OUyqqadR3cSrDIrmcy%2BBYRyjXGUQPkTcWLcERMd6pobwAs%2FPQti0dhdjiDFRSlzehOV%2Fi%2BDBuZzkOjdTuE0HX51lwVVtMbAwAn9xxT3beaRTqNFk1ppdljcJp1UCKzmWIIDVi%2BkeKDusBYW4OzenV6yJ%2B0wCTw1ZXiVHI6icl5Ng0XwbCzo3r%2Bp2Fkj8MSLdRAP90bceW%2BL%2FFRY1Bmb%2B4ioVLNkeOKIKQ8PLh1urpz0rfkmIvn9lgUQWckcT1CaEvUgTA1Sx0trT1R6%2BrEdh3tQ1QLWRgzFa7G1tWDRJSSxpc1iWjSB10v74MvamwcNfxmmaSrTkJ7Vejb7SEgiyUu7Nd89UTNxmUHwLEQxWSUxyinlIyxjYLT21rbyN%2BuJW2%2BVCIFrmrhpfzUXCuB6aUGltCdKKS3v7iw3NEPFYsPu49DqAnOBBUe9fCIcuvhlVP9V9N5Z2Y5MzqU6%2F3f9cd5JVHue7aegGNTEFl0i1tcXHts9N8h8Xr0wB8%2FFdmyGcU8mtFPic2wQ8NxJx4SDCwwZPEBjqkAUhqhd2xlhcb5wDZp%2F6sfY3Gs7R9J%2BfXx4bSuYopCdyNNdlAZ4AwdzPpuHi0dqyWysqF%2B5Mh34zXP8f%2FVMhQhhfMfEtFfPPjfWkt3mSpsyYz69EltH3%2F7lhnHWBKJTSxN0ZjM3UqQK0rGdvu3SOaMcYPdvAp9O2TMlV9HQ%2FfuCB7SKf%2BYmGphV8p%2F%2BnBi8bqFffqXiMUCIv1EHn3BmdpBKzJE7tl&X-Amz-Signature=1c9789caa35bdd0cbea2cf52f0245643cf5ae121c5ff9c5bb1740a9e02926572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
