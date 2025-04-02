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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZA5HBU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDz7JBwGIt0UEWsnYSrcEIrRJs1gOSpQ3PbRxva98Xq3gIgcuVu3N7ozDslXGETLrEilxSE85kXAo84U9oDhidm9pEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrB81glEgpZ716DNSrcA1yjQ4e%2F1EmW7al9TlBbmTf9OyG%2FyR13VQBRfjIp9lF1f2YvrtSUfxw4pkzN1ce%2FqBgojWyC81y3qdZEs8PDImHnWCcYLRG3kSIBDr2RRGkk1dNfEuOgrbqfjXlDVmgjOlvd3QyWlAzX6nKecTQt%2B2Ha%2BT9IW9%2Br7LSmwsfVSjBdAA%2BPtpAyH8bXSMKyXvxh8eIKmq9rG5PK0LQON%2BLUFOKfto8oZ%2BKN7HgD6fl9eNsWSIf83wNxZA3g8052lc9qPvEdhknVHrbVZCczK9xGAzQlWRz%2FxT%2BzMFoyMFJf1boNRJzQDX4R0LZDSnB1p6yLdUhLYCVIIM%2BCK4sy0FurjjjfOWaKmjWtLB0Z3KkUI7u%2FuS4jK%2BqnIvxZE4obqXlCfTKFESNCFoESqLbIe3KSgKHev0jMzSlKP%2B9qgZbfqvAfoL0gNXF58hppu8DbrUjqntDOgYcjWzU2TqaNuJzouC6C3vI0XuoApZSmf9vYvMBLKGzUBUTded4MQJ2J5BS%2FE%2BTygYv0RKHrkrIGLWH0LL9pJ9DMWzkbWKuMVt9j4K09F3FVTzAsUqHrQ%2BaewrCXQAxiFtCby6q%2BmRSTFg8ohLJqqZ0y4dGY6IP8dogQj9C7MM2uDVbI%2FOvCOHUPMMP7tL8GOqUBEFrM3kHnqc9m%2FyrPsw0a2zbxThz%2Fxg7pbmdnDKb8KHvJkBJs4eE%2BeYC7LSaK2%2FjvDPNP3%2BBailygA9CBgezQt%2Ft2aaKyldnm%2FBFuNlz2sjAfHsqSRxYjhC22HBrduIzjqRgY7sPAbT46LFfvqJ9m0bw0DX0GGaCUiPQkqrqU97aU2tz5kLsdk2jA%2Be6nWitmYecz0rICnEEYdmu%2FSjoyLFeekLA8&X-Amz-Signature=b2494fc71b5dc551427d4c1399031004b6779591535e9492c24ec54cb50e8a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZA5HBU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDz7JBwGIt0UEWsnYSrcEIrRJs1gOSpQ3PbRxva98Xq3gIgcuVu3N7ozDslXGETLrEilxSE85kXAo84U9oDhidm9pEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrB81glEgpZ716DNSrcA1yjQ4e%2F1EmW7al9TlBbmTf9OyG%2FyR13VQBRfjIp9lF1f2YvrtSUfxw4pkzN1ce%2FqBgojWyC81y3qdZEs8PDImHnWCcYLRG3kSIBDr2RRGkk1dNfEuOgrbqfjXlDVmgjOlvd3QyWlAzX6nKecTQt%2B2Ha%2BT9IW9%2Br7LSmwsfVSjBdAA%2BPtpAyH8bXSMKyXvxh8eIKmq9rG5PK0LQON%2BLUFOKfto8oZ%2BKN7HgD6fl9eNsWSIf83wNxZA3g8052lc9qPvEdhknVHrbVZCczK9xGAzQlWRz%2FxT%2BzMFoyMFJf1boNRJzQDX4R0LZDSnB1p6yLdUhLYCVIIM%2BCK4sy0FurjjjfOWaKmjWtLB0Z3KkUI7u%2FuS4jK%2BqnIvxZE4obqXlCfTKFESNCFoESqLbIe3KSgKHev0jMzSlKP%2B9qgZbfqvAfoL0gNXF58hppu8DbrUjqntDOgYcjWzU2TqaNuJzouC6C3vI0XuoApZSmf9vYvMBLKGzUBUTded4MQJ2J5BS%2FE%2BTygYv0RKHrkrIGLWH0LL9pJ9DMWzkbWKuMVt9j4K09F3FVTzAsUqHrQ%2BaewrCXQAxiFtCby6q%2BmRSTFg8ohLJqqZ0y4dGY6IP8dogQj9C7MM2uDVbI%2FOvCOHUPMMP7tL8GOqUBEFrM3kHnqc9m%2FyrPsw0a2zbxThz%2Fxg7pbmdnDKb8KHvJkBJs4eE%2BeYC7LSaK2%2FjvDPNP3%2BBailygA9CBgezQt%2Ft2aaKyldnm%2FBFuNlz2sjAfHsqSRxYjhC22HBrduIzjqRgY7sPAbT46LFfvqJ9m0bw0DX0GGaCUiPQkqrqU97aU2tz5kLsdk2jA%2Be6nWitmYecz0rICnEEYdmu%2FSjoyLFeekLA8&X-Amz-Signature=ca1009b905a3e57b6fbff22dfe456e97f81511f17629bfacddbe6901edb0568e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZA5HBU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDz7JBwGIt0UEWsnYSrcEIrRJs1gOSpQ3PbRxva98Xq3gIgcuVu3N7ozDslXGETLrEilxSE85kXAo84U9oDhidm9pEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrB81glEgpZ716DNSrcA1yjQ4e%2F1EmW7al9TlBbmTf9OyG%2FyR13VQBRfjIp9lF1f2YvrtSUfxw4pkzN1ce%2FqBgojWyC81y3qdZEs8PDImHnWCcYLRG3kSIBDr2RRGkk1dNfEuOgrbqfjXlDVmgjOlvd3QyWlAzX6nKecTQt%2B2Ha%2BT9IW9%2Br7LSmwsfVSjBdAA%2BPtpAyH8bXSMKyXvxh8eIKmq9rG5PK0LQON%2BLUFOKfto8oZ%2BKN7HgD6fl9eNsWSIf83wNxZA3g8052lc9qPvEdhknVHrbVZCczK9xGAzQlWRz%2FxT%2BzMFoyMFJf1boNRJzQDX4R0LZDSnB1p6yLdUhLYCVIIM%2BCK4sy0FurjjjfOWaKmjWtLB0Z3KkUI7u%2FuS4jK%2BqnIvxZE4obqXlCfTKFESNCFoESqLbIe3KSgKHev0jMzSlKP%2B9qgZbfqvAfoL0gNXF58hppu8DbrUjqntDOgYcjWzU2TqaNuJzouC6C3vI0XuoApZSmf9vYvMBLKGzUBUTded4MQJ2J5BS%2FE%2BTygYv0RKHrkrIGLWH0LL9pJ9DMWzkbWKuMVt9j4K09F3FVTzAsUqHrQ%2BaewrCXQAxiFtCby6q%2BmRSTFg8ohLJqqZ0y4dGY6IP8dogQj9C7MM2uDVbI%2FOvCOHUPMMP7tL8GOqUBEFrM3kHnqc9m%2FyrPsw0a2zbxThz%2Fxg7pbmdnDKb8KHvJkBJs4eE%2BeYC7LSaK2%2FjvDPNP3%2BBailygA9CBgezQt%2Ft2aaKyldnm%2FBFuNlz2sjAfHsqSRxYjhC22HBrduIzjqRgY7sPAbT46LFfvqJ9m0bw0DX0GGaCUiPQkqrqU97aU2tz5kLsdk2jA%2Be6nWitmYecz0rICnEEYdmu%2FSjoyLFeekLA8&X-Amz-Signature=5f424cdc55827e6fe09c75087d356cb0d5e1edc6bbe8973609e6712f1804321e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
