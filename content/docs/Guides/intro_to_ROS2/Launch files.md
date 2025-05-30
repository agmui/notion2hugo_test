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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJPT6ZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC494kWgvYVhL%2FiUclkeIWEhKX1BMRKo%2BbcUyGFdYW%2BgAIhAP1tF5j2n78uw0sIYRPuxKBvm9jxUcSTlxZw%2BIV3MgyHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynLxlfCExkYxnf%2B0cq3APYMSXsymuWC8OSVn3RPGTCJi5Y4Fbn8TYwsqoiyGNtvcNdPZOks4AlTiJG7qRoGsCd50%2BAqipdpoXxXvF9LyyLYeDLST9LLKRbjhp1QqR7LK1PztBESC4GIE7HOe2N2uv1482tHn1D1yq2yuIZnPnz30nunoVEVApmqZC2Fs%2BSiYwyxa%2B5pz88MP9wwaUk%2BY9hkgC9e%2BfdfVObtBEEcM23LO84bgrQWxcpd5Cao0U8gDS%2BtPl%2BKxz5zBhoJJa0MMyNLYn0e2F8r3Fc%2BJYTnyQjODcmdVyS2mNGSqfE3%2Fu7msQ4lTNCmIQuKHL%2BySzrVvZAv2LStZkawi4Y0RIs9UAmG31ATCvOOwbMaTC7zYN3s3RcOXiZeM%2FwQOxpLAFTA1N4MNRHISoOw5s8PJ3NlDzKMUpjwhDr%2FJ%2FeKaxaxIl0kk3Ujl5MbohQDkhZiz5NVeNKSCLpf9dUKdiVqOvOioqpynOJilorpdv6BPTu2EOyYx1BCIwEVYtIC3me0K51Ll7vEtp9UeVANVOpyBVNWSCz8v1QV%2Fush3y06IrJmY1x7f8Qp7%2BMooWgedLSE5Rv0%2BdyNILv6xKmTh%2FWA1lBQ9CwJIH0nQGtTcY8AIGCMRS6xFGh9PeU6ZOlD5J%2FkjD4z%2BbBBjqkAVWsZwD3jfrQbgGsvS1OiJQ0DLWRs7xmAwn0zauFuumCoP7gCSm01H2Ve8S23KHKKRCS7v%2FfpAbveKTIGZlOS2gUJAiFF8lNcV81PE%2FLWAqs%2BAMd%2BD87mrKrc%2F4B6yJIjrWNajaTVBL1apN4l2q1uzCks1LdsrhYwSDPwTMHJQzMFfG4wOMN6Ta2%2FqttjRqBKMLuh65857YmTmXTqk2o%2BuHM8Nrz&X-Amz-Signature=019ebc8f4d11fb52cb7a5da65d01bab6da666487aaeefa2894b97a5855a1e45e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJPT6ZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC494kWgvYVhL%2FiUclkeIWEhKX1BMRKo%2BbcUyGFdYW%2BgAIhAP1tF5j2n78uw0sIYRPuxKBvm9jxUcSTlxZw%2BIV3MgyHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynLxlfCExkYxnf%2B0cq3APYMSXsymuWC8OSVn3RPGTCJi5Y4Fbn8TYwsqoiyGNtvcNdPZOks4AlTiJG7qRoGsCd50%2BAqipdpoXxXvF9LyyLYeDLST9LLKRbjhp1QqR7LK1PztBESC4GIE7HOe2N2uv1482tHn1D1yq2yuIZnPnz30nunoVEVApmqZC2Fs%2BSiYwyxa%2B5pz88MP9wwaUk%2BY9hkgC9e%2BfdfVObtBEEcM23LO84bgrQWxcpd5Cao0U8gDS%2BtPl%2BKxz5zBhoJJa0MMyNLYn0e2F8r3Fc%2BJYTnyQjODcmdVyS2mNGSqfE3%2Fu7msQ4lTNCmIQuKHL%2BySzrVvZAv2LStZkawi4Y0RIs9UAmG31ATCvOOwbMaTC7zYN3s3RcOXiZeM%2FwQOxpLAFTA1N4MNRHISoOw5s8PJ3NlDzKMUpjwhDr%2FJ%2FeKaxaxIl0kk3Ujl5MbohQDkhZiz5NVeNKSCLpf9dUKdiVqOvOioqpynOJilorpdv6BPTu2EOyYx1BCIwEVYtIC3me0K51Ll7vEtp9UeVANVOpyBVNWSCz8v1QV%2Fush3y06IrJmY1x7f8Qp7%2BMooWgedLSE5Rv0%2BdyNILv6xKmTh%2FWA1lBQ9CwJIH0nQGtTcY8AIGCMRS6xFGh9PeU6ZOlD5J%2FkjD4z%2BbBBjqkAVWsZwD3jfrQbgGsvS1OiJQ0DLWRs7xmAwn0zauFuumCoP7gCSm01H2Ve8S23KHKKRCS7v%2FfpAbveKTIGZlOS2gUJAiFF8lNcV81PE%2FLWAqs%2BAMd%2BD87mrKrc%2F4B6yJIjrWNajaTVBL1apN4l2q1uzCks1LdsrhYwSDPwTMHJQzMFfG4wOMN6Ta2%2FqttjRqBKMLuh65857YmTmXTqk2o%2BuHM8Nrz&X-Amz-Signature=63852fd5d5c3b0456f5b5b4682a5c84651e03a50a93912efda3683cefe562ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJPT6ZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC494kWgvYVhL%2FiUclkeIWEhKX1BMRKo%2BbcUyGFdYW%2BgAIhAP1tF5j2n78uw0sIYRPuxKBvm9jxUcSTlxZw%2BIV3MgyHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynLxlfCExkYxnf%2B0cq3APYMSXsymuWC8OSVn3RPGTCJi5Y4Fbn8TYwsqoiyGNtvcNdPZOks4AlTiJG7qRoGsCd50%2BAqipdpoXxXvF9LyyLYeDLST9LLKRbjhp1QqR7LK1PztBESC4GIE7HOe2N2uv1482tHn1D1yq2yuIZnPnz30nunoVEVApmqZC2Fs%2BSiYwyxa%2B5pz88MP9wwaUk%2BY9hkgC9e%2BfdfVObtBEEcM23LO84bgrQWxcpd5Cao0U8gDS%2BtPl%2BKxz5zBhoJJa0MMyNLYn0e2F8r3Fc%2BJYTnyQjODcmdVyS2mNGSqfE3%2Fu7msQ4lTNCmIQuKHL%2BySzrVvZAv2LStZkawi4Y0RIs9UAmG31ATCvOOwbMaTC7zYN3s3RcOXiZeM%2FwQOxpLAFTA1N4MNRHISoOw5s8PJ3NlDzKMUpjwhDr%2FJ%2FeKaxaxIl0kk3Ujl5MbohQDkhZiz5NVeNKSCLpf9dUKdiVqOvOioqpynOJilorpdv6BPTu2EOyYx1BCIwEVYtIC3me0K51Ll7vEtp9UeVANVOpyBVNWSCz8v1QV%2Fush3y06IrJmY1x7f8Qp7%2BMooWgedLSE5Rv0%2BdyNILv6xKmTh%2FWA1lBQ9CwJIH0nQGtTcY8AIGCMRS6xFGh9PeU6ZOlD5J%2FkjD4z%2BbBBjqkAVWsZwD3jfrQbgGsvS1OiJQ0DLWRs7xmAwn0zauFuumCoP7gCSm01H2Ve8S23KHKKRCS7v%2FfpAbveKTIGZlOS2gUJAiFF8lNcV81PE%2FLWAqs%2BAMd%2BD87mrKrc%2F4B6yJIjrWNajaTVBL1apN4l2q1uzCks1LdsrhYwSDPwTMHJQzMFfG4wOMN6Ta2%2FqttjRqBKMLuh65857YmTmXTqk2o%2BuHM8Nrz&X-Amz-Signature=ec2e6911d1f1382ad6e49ca70070f9bcb7b40d5394f4e50d4a296af8a114325a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
