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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NRQAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKC4RNUG8E%2B2dGmD6UybPbbp5PHSsGtfJr2mq6WtaIlAIhAIOPfYQ6ZOK9pyWlZX%2B8WPcd5WKVu8Mrz8yXX5mf3i2WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0tZSFWPf5gNL2YIAq3ANNH0Y5LZx6ms12m8po5uLRfeVWAe1clYPPqmS5wxkkCpQ4vWRC8kygqUI8H%2Bu%2BE6XaaO2PoGkj6iM5%2BQWxeRlqXQNenb5KkWt2zN9uTfZ82Z2qftvjuK5k1tWS3ySpGR0mi8NAxnQbN8tNieMOVob0m15MPfT0UL0zXQULVcuJt3NMH4g9XRmTuM37R1mLPYSRgfvndul3SIWl3Tz8fwa7uZP7TMOHhAvaKuAd3y0KYGlvmpgGWEPJ16Yoa6RCb2WxgJJQgxz2GYi6VTqKEsupQuDemXo11dmC6ltEUmPC6Lmm91YVJ6msY%2FIDPnZE9RWVsEs%2F6Ov%2BpD%2FEgqaDFXRNu7%2BKQnpU9K6%2Bd1CGPjBIVabjlOt6BmnFmmNVx4uf0iGhhvGsudNmDltDdxfiwKp%2F8LW3PAohVBU80Q12IFMabR5qdGnjkHWjfMB4jfFmIlLlFm6MlI2ItV%2FQjx8kLQPt51tD%2FtClhClT9mFgkQF6pMlGPAKcfONGbUteEapU8aCFAwYeRR9rW9DBnHLXXAhZ1kRBRbyiTxM7dX36QsPFFQZis1VfIgxRGCtAzJew3kugq6bbgRLjxM8zvzFd%2B8UsMRX8NS09f1A17uekymK8AAh7w3OyOtY4%2BlaOQjCUoKrEBjqkAU5VJmyRBHhCocTvJQGHufo4e8SP1o01azBB6SSAGmS2nRD9CKp5iWOI%2BhYAyWQtDdjDaRD38tOw7Acgf4mKST2VAkXCTeoc1fF7utHkVmrRb4qrTVhA0%2BKpPl66IrdusFdWFqCdrz85LWCMxyiYHFw%2F%2BYgysd2CRS%2BfCuVZ4UWC%2Bx2x9XvZ9uWPXq6Y8P9Qct8FYgBmJFwH%2BLZFENsZlyjfSn22&X-Amz-Signature=ed48beb88526981608586d37edee786c63f307a3781a705f0f7988c22439f6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NRQAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKC4RNUG8E%2B2dGmD6UybPbbp5PHSsGtfJr2mq6WtaIlAIhAIOPfYQ6ZOK9pyWlZX%2B8WPcd5WKVu8Mrz8yXX5mf3i2WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0tZSFWPf5gNL2YIAq3ANNH0Y5LZx6ms12m8po5uLRfeVWAe1clYPPqmS5wxkkCpQ4vWRC8kygqUI8H%2Bu%2BE6XaaO2PoGkj6iM5%2BQWxeRlqXQNenb5KkWt2zN9uTfZ82Z2qftvjuK5k1tWS3ySpGR0mi8NAxnQbN8tNieMOVob0m15MPfT0UL0zXQULVcuJt3NMH4g9XRmTuM37R1mLPYSRgfvndul3SIWl3Tz8fwa7uZP7TMOHhAvaKuAd3y0KYGlvmpgGWEPJ16Yoa6RCb2WxgJJQgxz2GYi6VTqKEsupQuDemXo11dmC6ltEUmPC6Lmm91YVJ6msY%2FIDPnZE9RWVsEs%2F6Ov%2BpD%2FEgqaDFXRNu7%2BKQnpU9K6%2Bd1CGPjBIVabjlOt6BmnFmmNVx4uf0iGhhvGsudNmDltDdxfiwKp%2F8LW3PAohVBU80Q12IFMabR5qdGnjkHWjfMB4jfFmIlLlFm6MlI2ItV%2FQjx8kLQPt51tD%2FtClhClT9mFgkQF6pMlGPAKcfONGbUteEapU8aCFAwYeRR9rW9DBnHLXXAhZ1kRBRbyiTxM7dX36QsPFFQZis1VfIgxRGCtAzJew3kugq6bbgRLjxM8zvzFd%2B8UsMRX8NS09f1A17uekymK8AAh7w3OyOtY4%2BlaOQjCUoKrEBjqkAU5VJmyRBHhCocTvJQGHufo4e8SP1o01azBB6SSAGmS2nRD9CKp5iWOI%2BhYAyWQtDdjDaRD38tOw7Acgf4mKST2VAkXCTeoc1fF7utHkVmrRb4qrTVhA0%2BKpPl66IrdusFdWFqCdrz85LWCMxyiYHFw%2F%2BYgysd2CRS%2BfCuVZ4UWC%2Bx2x9XvZ9uWPXq6Y8P9Qct8FYgBmJFwH%2BLZFENsZlyjfSn22&X-Amz-Signature=0a366ffd57c4f2e7a2c0303312fdc45c6e9383d403458d471ddf713fe6c5df4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NRQAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKC4RNUG8E%2B2dGmD6UybPbbp5PHSsGtfJr2mq6WtaIlAIhAIOPfYQ6ZOK9pyWlZX%2B8WPcd5WKVu8Mrz8yXX5mf3i2WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0tZSFWPf5gNL2YIAq3ANNH0Y5LZx6ms12m8po5uLRfeVWAe1clYPPqmS5wxkkCpQ4vWRC8kygqUI8H%2Bu%2BE6XaaO2PoGkj6iM5%2BQWxeRlqXQNenb5KkWt2zN9uTfZ82Z2qftvjuK5k1tWS3ySpGR0mi8NAxnQbN8tNieMOVob0m15MPfT0UL0zXQULVcuJt3NMH4g9XRmTuM37R1mLPYSRgfvndul3SIWl3Tz8fwa7uZP7TMOHhAvaKuAd3y0KYGlvmpgGWEPJ16Yoa6RCb2WxgJJQgxz2GYi6VTqKEsupQuDemXo11dmC6ltEUmPC6Lmm91YVJ6msY%2FIDPnZE9RWVsEs%2F6Ov%2BpD%2FEgqaDFXRNu7%2BKQnpU9K6%2Bd1CGPjBIVabjlOt6BmnFmmNVx4uf0iGhhvGsudNmDltDdxfiwKp%2F8LW3PAohVBU80Q12IFMabR5qdGnjkHWjfMB4jfFmIlLlFm6MlI2ItV%2FQjx8kLQPt51tD%2FtClhClT9mFgkQF6pMlGPAKcfONGbUteEapU8aCFAwYeRR9rW9DBnHLXXAhZ1kRBRbyiTxM7dX36QsPFFQZis1VfIgxRGCtAzJew3kugq6bbgRLjxM8zvzFd%2B8UsMRX8NS09f1A17uekymK8AAh7w3OyOtY4%2BlaOQjCUoKrEBjqkAU5VJmyRBHhCocTvJQGHufo4e8SP1o01azBB6SSAGmS2nRD9CKp5iWOI%2BhYAyWQtDdjDaRD38tOw7Acgf4mKST2VAkXCTeoc1fF7utHkVmrRb4qrTVhA0%2BKpPl66IrdusFdWFqCdrz85LWCMxyiYHFw%2F%2BYgysd2CRS%2BfCuVZ4UWC%2Bx2x9XvZ9uWPXq6Y8P9Qct8FYgBmJFwH%2BLZFENsZlyjfSn22&X-Amz-Signature=625784205a3f07f0fb589312ec7cc354f58919e4f70fd0f9192d0a792b377be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
