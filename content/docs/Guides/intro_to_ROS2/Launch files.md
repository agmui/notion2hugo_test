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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOQDEBA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwZWyM%2Bti7Ir3727PaGSU7YmY2aL2s6INv0yrISw%2F7sAIhANUCl2GIfeTaWUar4USJojwmRYwat09C0py7p2Pp6fOgKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw2qJiMoKMuFYejLEq3AOtJ%2B%2BVskGDOrAaxrltxEpNPWe5k4YQcqMAaTqTHDHeZOzagsc0hhD7mNd2drZGrQ4YOw%2B%2FFNx3uuyAOjR0149dfaofXQJu0kqs%2BxXmhUjKSGBKXs%2BM00QUR58HNfufZCKqqjJy5UBXV1Gwazq2snVW56Yb8nrGtx2pCUCS1yfZ2ur7cvaHPA9BnTj059FMY5cKb6Wrn6QomwZFVmZCvK1g4f94ql1YFWU5biQBIXtzJN2p87g6Ajv1KdIHzLMnECDPNJl4gQ6MrQVtIlS8S9w%2FggOTeFiEGv6U9zbsc%2BY8du17r69pCb3KbUCnknFtHlfMx8j%2FQwdW5MOiWAIAXYtHqLdsYk5j6pSXnRM3%2FLEA8bBA3D3ViKtYUqjqpQvqOSSE9ILCCq1srrcgXuTwyt7MiKaqy%2FLe208e%2FGeKS0xJaSQA0KjBBXfWmGE%2FfGkHMnbmMF8i24wrVzJMyMIMxobceKs8b1rBWlqVRPC5FA%2Bj0dgiaCGmjYUlSs83VKKoAv2aUgXuZI9tLkpgSyMSul39Hk8zuHxmukAS0zD7KTHi1GmWXXMNa%2B%2BOmcKKZK0qfI9cqUhC4DRHUu8YT1WbYC14WZvDWH5pGmx9bSNkQx7HYuhTL2m6AcTCxX160TD%2B4vu8BjqkAaYro5%2BAbZvk1e7gNrQ2a3Yg0nECkx1sQwOZf6XwX0QdAnUnEsmThafjuQgmE5JXhAG14mB2P2cs04Udhgi5pz2re%2Fn%2BenNfjyKh%2BuDpe72Ws5qkI2EuotJbNBu%2BE3U8aoV0w5e%2FJ1yT0rbdEKelSdyvh7VrXmlZGmApTX3grFrqQtOSl%2BHc280iauonKwu%2BvWEyM74oL74taCLzWKi%2BNUnwIhKN&X-Amz-Signature=7d8b2ea937f04c3069db30aef32dbb5a2845c18200dbe53bc4df120b0ffe7dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOQDEBA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwZWyM%2Bti7Ir3727PaGSU7YmY2aL2s6INv0yrISw%2F7sAIhANUCl2GIfeTaWUar4USJojwmRYwat09C0py7p2Pp6fOgKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw2qJiMoKMuFYejLEq3AOtJ%2B%2BVskGDOrAaxrltxEpNPWe5k4YQcqMAaTqTHDHeZOzagsc0hhD7mNd2drZGrQ4YOw%2B%2FFNx3uuyAOjR0149dfaofXQJu0kqs%2BxXmhUjKSGBKXs%2BM00QUR58HNfufZCKqqjJy5UBXV1Gwazq2snVW56Yb8nrGtx2pCUCS1yfZ2ur7cvaHPA9BnTj059FMY5cKb6Wrn6QomwZFVmZCvK1g4f94ql1YFWU5biQBIXtzJN2p87g6Ajv1KdIHzLMnECDPNJl4gQ6MrQVtIlS8S9w%2FggOTeFiEGv6U9zbsc%2BY8du17r69pCb3KbUCnknFtHlfMx8j%2FQwdW5MOiWAIAXYtHqLdsYk5j6pSXnRM3%2FLEA8bBA3D3ViKtYUqjqpQvqOSSE9ILCCq1srrcgXuTwyt7MiKaqy%2FLe208e%2FGeKS0xJaSQA0KjBBXfWmGE%2FfGkHMnbmMF8i24wrVzJMyMIMxobceKs8b1rBWlqVRPC5FA%2Bj0dgiaCGmjYUlSs83VKKoAv2aUgXuZI9tLkpgSyMSul39Hk8zuHxmukAS0zD7KTHi1GmWXXMNa%2B%2BOmcKKZK0qfI9cqUhC4DRHUu8YT1WbYC14WZvDWH5pGmx9bSNkQx7HYuhTL2m6AcTCxX160TD%2B4vu8BjqkAaYro5%2BAbZvk1e7gNrQ2a3Yg0nECkx1sQwOZf6XwX0QdAnUnEsmThafjuQgmE5JXhAG14mB2P2cs04Udhgi5pz2re%2Fn%2BenNfjyKh%2BuDpe72Ws5qkI2EuotJbNBu%2BE3U8aoV0w5e%2FJ1yT0rbdEKelSdyvh7VrXmlZGmApTX3grFrqQtOSl%2BHc280iauonKwu%2BvWEyM74oL74taCLzWKi%2BNUnwIhKN&X-Amz-Signature=b49ace927a83c713a991722d7d9bced30cd15da6137598b2ebe3e5f7f1cdd9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOQDEBA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwZWyM%2Bti7Ir3727PaGSU7YmY2aL2s6INv0yrISw%2F7sAIhANUCl2GIfeTaWUar4USJojwmRYwat09C0py7p2Pp6fOgKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw2qJiMoKMuFYejLEq3AOtJ%2B%2BVskGDOrAaxrltxEpNPWe5k4YQcqMAaTqTHDHeZOzagsc0hhD7mNd2drZGrQ4YOw%2B%2FFNx3uuyAOjR0149dfaofXQJu0kqs%2BxXmhUjKSGBKXs%2BM00QUR58HNfufZCKqqjJy5UBXV1Gwazq2snVW56Yb8nrGtx2pCUCS1yfZ2ur7cvaHPA9BnTj059FMY5cKb6Wrn6QomwZFVmZCvK1g4f94ql1YFWU5biQBIXtzJN2p87g6Ajv1KdIHzLMnECDPNJl4gQ6MrQVtIlS8S9w%2FggOTeFiEGv6U9zbsc%2BY8du17r69pCb3KbUCnknFtHlfMx8j%2FQwdW5MOiWAIAXYtHqLdsYk5j6pSXnRM3%2FLEA8bBA3D3ViKtYUqjqpQvqOSSE9ILCCq1srrcgXuTwyt7MiKaqy%2FLe208e%2FGeKS0xJaSQA0KjBBXfWmGE%2FfGkHMnbmMF8i24wrVzJMyMIMxobceKs8b1rBWlqVRPC5FA%2Bj0dgiaCGmjYUlSs83VKKoAv2aUgXuZI9tLkpgSyMSul39Hk8zuHxmukAS0zD7KTHi1GmWXXMNa%2B%2BOmcKKZK0qfI9cqUhC4DRHUu8YT1WbYC14WZvDWH5pGmx9bSNkQx7HYuhTL2m6AcTCxX160TD%2B4vu8BjqkAaYro5%2BAbZvk1e7gNrQ2a3Yg0nECkx1sQwOZf6XwX0QdAnUnEsmThafjuQgmE5JXhAG14mB2P2cs04Udhgi5pz2re%2Fn%2BenNfjyKh%2BuDpe72Ws5qkI2EuotJbNBu%2BE3U8aoV0w5e%2FJ1yT0rbdEKelSdyvh7VrXmlZGmApTX3grFrqQtOSl%2BHc280iauonKwu%2BvWEyM74oL74taCLzWKi%2BNUnwIhKN&X-Amz-Signature=91259b03f8f1c80764b097228d4385ab2cc71b4634d4bb62356106c29c52a201&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
