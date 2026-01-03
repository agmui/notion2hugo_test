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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AE33N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIB7miZz6X%2FMk%2Fr5U837sLGmI6l7LwpkMFxqMdKloJ4fEAiEAlAb%2BGBlWYk5HNVxsop9csgf07ju5Ff3DSR8V58fC%2F1Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEaMY4kKoIlOYRxbRCrcA1A3c8ap8TtECSKODxuNxb7y4IeqiPN4iNEkonRte5Z1JTN9q5M8eccxdtQC8bRZGm7lr7fj%2BiPi6PpZpHvODhShn1SSLL8I9k0nw51OOEi0yjuYz9c%2ByVzQm3TRIDxqGnL8keOV9vucpusfgImFdsgTAL20RssbLjAqm0Mw%2Fv1XzHrbohEQzcAy8i8q9FftbIrAvJ6mq2VjVwo9CDiuUxF6%2BF9f0b8Z7CClkqD%2F9vkZdWd3jke4WmhwTA3Yqrywieed7bASEzixbBhgHn00M7Ti6oduXUy0XMz7cKsFptT0K6mcH2p%2FWHXJzEUtabal0LH5KB%2Fp99PvGDgnFaACGQ6qWuTQAozoCmxjDVX4oc9vBzIdB6aXnSIvMEJcyfnA0HRoq71ZjN3q%2FL1CC4Y8XPSZ%2F2TNabsR2sHjrzVlX2%2F6wLs729gbnLerIZGLJZX0I1CtdnqK8Nq%2FMJGM8CKiYPXvVvuATf06okgbfIHMIFdzM32orhLhNknC2csPxBtcvGpwb1aFCuInllt%2F6DI%2FASLynpkzfD%2FTNe9ls92WPacigVnmHFFkCrH1LQA8wP2VwALquNkysqhunA0YRyfZ%2BuHn6CexStdNFLO2BU7bgVl%2BS3dWeRKCP36U5KmrMO%2FO4MoGOqUBr%2Fw320rMsgngcp9Le0rX3PVyGd6QrQF8gGmb6DPssMvM4mdm5NArbnpjDG7bcrCHJltWluewoDEbhQSZYx23v%2B%2F4UWQveROuoRmVKLG4SYbeLkLUXzrsCX92jGPaxDhJTPTyHjOeljA9Dow9SZKSGcK4wNGKA669r15DsO9zRd9ZJNAlUIu8waY0uOOgv0tMj6YSrr%2Fs2CC3JDATYyDnDuqGYCcw&X-Amz-Signature=da083213dc7c29d64fe8340c2d8ffff5c33a113d96bcf03f013e0581363cd464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AE33N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIB7miZz6X%2FMk%2Fr5U837sLGmI6l7LwpkMFxqMdKloJ4fEAiEAlAb%2BGBlWYk5HNVxsop9csgf07ju5Ff3DSR8V58fC%2F1Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEaMY4kKoIlOYRxbRCrcA1A3c8ap8TtECSKODxuNxb7y4IeqiPN4iNEkonRte5Z1JTN9q5M8eccxdtQC8bRZGm7lr7fj%2BiPi6PpZpHvODhShn1SSLL8I9k0nw51OOEi0yjuYz9c%2ByVzQm3TRIDxqGnL8keOV9vucpusfgImFdsgTAL20RssbLjAqm0Mw%2Fv1XzHrbohEQzcAy8i8q9FftbIrAvJ6mq2VjVwo9CDiuUxF6%2BF9f0b8Z7CClkqD%2F9vkZdWd3jke4WmhwTA3Yqrywieed7bASEzixbBhgHn00M7Ti6oduXUy0XMz7cKsFptT0K6mcH2p%2FWHXJzEUtabal0LH5KB%2Fp99PvGDgnFaACGQ6qWuTQAozoCmxjDVX4oc9vBzIdB6aXnSIvMEJcyfnA0HRoq71ZjN3q%2FL1CC4Y8XPSZ%2F2TNabsR2sHjrzVlX2%2F6wLs729gbnLerIZGLJZX0I1CtdnqK8Nq%2FMJGM8CKiYPXvVvuATf06okgbfIHMIFdzM32orhLhNknC2csPxBtcvGpwb1aFCuInllt%2F6DI%2FASLynpkzfD%2FTNe9ls92WPacigVnmHFFkCrH1LQA8wP2VwALquNkysqhunA0YRyfZ%2BuHn6CexStdNFLO2BU7bgVl%2BS3dWeRKCP36U5KmrMO%2FO4MoGOqUBr%2Fw320rMsgngcp9Le0rX3PVyGd6QrQF8gGmb6DPssMvM4mdm5NArbnpjDG7bcrCHJltWluewoDEbhQSZYx23v%2B%2F4UWQveROuoRmVKLG4SYbeLkLUXzrsCX92jGPaxDhJTPTyHjOeljA9Dow9SZKSGcK4wNGKA669r15DsO9zRd9ZJNAlUIu8waY0uOOgv0tMj6YSrr%2Fs2CC3JDATYyDnDuqGYCcw&X-Amz-Signature=a1369de2b22279a7e2f34721e77f1d72b8c04a8d69f412c112aff8e610a4645f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AE33N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIB7miZz6X%2FMk%2Fr5U837sLGmI6l7LwpkMFxqMdKloJ4fEAiEAlAb%2BGBlWYk5HNVxsop9csgf07ju5Ff3DSR8V58fC%2F1Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEaMY4kKoIlOYRxbRCrcA1A3c8ap8TtECSKODxuNxb7y4IeqiPN4iNEkonRte5Z1JTN9q5M8eccxdtQC8bRZGm7lr7fj%2BiPi6PpZpHvODhShn1SSLL8I9k0nw51OOEi0yjuYz9c%2ByVzQm3TRIDxqGnL8keOV9vucpusfgImFdsgTAL20RssbLjAqm0Mw%2Fv1XzHrbohEQzcAy8i8q9FftbIrAvJ6mq2VjVwo9CDiuUxF6%2BF9f0b8Z7CClkqD%2F9vkZdWd3jke4WmhwTA3Yqrywieed7bASEzixbBhgHn00M7Ti6oduXUy0XMz7cKsFptT0K6mcH2p%2FWHXJzEUtabal0LH5KB%2Fp99PvGDgnFaACGQ6qWuTQAozoCmxjDVX4oc9vBzIdB6aXnSIvMEJcyfnA0HRoq71ZjN3q%2FL1CC4Y8XPSZ%2F2TNabsR2sHjrzVlX2%2F6wLs729gbnLerIZGLJZX0I1CtdnqK8Nq%2FMJGM8CKiYPXvVvuATf06okgbfIHMIFdzM32orhLhNknC2csPxBtcvGpwb1aFCuInllt%2F6DI%2FASLynpkzfD%2FTNe9ls92WPacigVnmHFFkCrH1LQA8wP2VwALquNkysqhunA0YRyfZ%2BuHn6CexStdNFLO2BU7bgVl%2BS3dWeRKCP36U5KmrMO%2FO4MoGOqUBr%2Fw320rMsgngcp9Le0rX3PVyGd6QrQF8gGmb6DPssMvM4mdm5NArbnpjDG7bcrCHJltWluewoDEbhQSZYx23v%2B%2F4UWQveROuoRmVKLG4SYbeLkLUXzrsCX92jGPaxDhJTPTyHjOeljA9Dow9SZKSGcK4wNGKA669r15DsO9zRd9ZJNAlUIu8waY0uOOgv0tMj6YSrr%2Fs2CC3JDATYyDnDuqGYCcw&X-Amz-Signature=d1bf29734dae04109819d2e2eb5393fa806b63f4d448a4539b15c8ef2338cb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
