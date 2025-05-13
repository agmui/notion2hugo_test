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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRP7J67O%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIELKQhqPc3P3XvaT%2BToRvTjitQKHkeBOvQqTkdAVU%2FDVAiAiyV6n%2BYtxqmqigHxyhdQ0q7TFwK8zZB%2BNh1lYywVuQiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITZFP4pO5Jyh4Ra5KtwDDzbgBwknErCy3oTaAfkOQu6%2FPtW7eMMEJYA8m2A5xRW5a6GKlP0drotScAyfe5chvqPSvQRgWvW8V59IOtIXpKW0wuhVMcci6hsb3hZ1XvyyGWymyDI8PRsL2nR9Ri4B9b30%2F2GcpMLAOFz15EuDyWo7JgIElefq1B1%2FXtUudFOP1YxPt0j%2FFNd5duT1u6btNyLbEcDKt3BgDINgar5kMstrxJ1%2Ftc8VyoFU760bbuHuU9uWz4St3HKw0wYRac00Aeq6Y%2BkO1A2%2F%2FJKuw%2BertCaUZIFiSy3HvhfWJMaXE2ADFd3hrRcGeVUBaOm9n4SmcEIVrgjoh%2F9%2FtytpS%2Bla4NzXnAfA4lf8RLsX2VDY3WJpPqt7JmO%2FcnRGGFQdEhusp8gtH%2BhhkyP2lrM0lTWXti7MCuY7O%2BAhJF0jYPQsY66KQWrUP8JsYZ2vruS0RdXHLovX4CSXS0%2B43g5MTw4rkpjEVUX3MjJfUZHblvd6kZxWVPxrDBX1244CyvNTFD13DJM%2BBr1%2BYYr38LcO7lmabmoGXl7QCvy%2B%2FDipw75o%2B3qIUSv%2FdnWJfK6S60QRv%2BDGbjQKoqkNBWevAezm3ALOZUuymQythQqELQp4xVy9AvEtD81WCMvz1jU%2BTp8wxtuNwQY6pgHkE0LOjL15IbBoEcptuz22FjGfkW3B%2FkaLFQKOkZefKoTocSmFl3TRXllyTkqlnkF8%2FX4O%2BoRMUBwdPY6x1AbGLiNF%2FHKo5BTBlK51bmDwj56MbRkYS5vApfDKloG87qjRs%2FtWB53YV3ItlsetmmvZ6FYdM5ujCccM9qUMM9NknurRLN2VtEcRfNkZuQp1qiRMakqaUX1NyjO%2FQzxq4dTk92iyGq5q&X-Amz-Signature=f8a8be8009994778f512b1329db5acd58c83fad771c320c9513db9514ed86068&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRP7J67O%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIELKQhqPc3P3XvaT%2BToRvTjitQKHkeBOvQqTkdAVU%2FDVAiAiyV6n%2BYtxqmqigHxyhdQ0q7TFwK8zZB%2BNh1lYywVuQiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITZFP4pO5Jyh4Ra5KtwDDzbgBwknErCy3oTaAfkOQu6%2FPtW7eMMEJYA8m2A5xRW5a6GKlP0drotScAyfe5chvqPSvQRgWvW8V59IOtIXpKW0wuhVMcci6hsb3hZ1XvyyGWymyDI8PRsL2nR9Ri4B9b30%2F2GcpMLAOFz15EuDyWo7JgIElefq1B1%2FXtUudFOP1YxPt0j%2FFNd5duT1u6btNyLbEcDKt3BgDINgar5kMstrxJ1%2Ftc8VyoFU760bbuHuU9uWz4St3HKw0wYRac00Aeq6Y%2BkO1A2%2F%2FJKuw%2BertCaUZIFiSy3HvhfWJMaXE2ADFd3hrRcGeVUBaOm9n4SmcEIVrgjoh%2F9%2FtytpS%2Bla4NzXnAfA4lf8RLsX2VDY3WJpPqt7JmO%2FcnRGGFQdEhusp8gtH%2BhhkyP2lrM0lTWXti7MCuY7O%2BAhJF0jYPQsY66KQWrUP8JsYZ2vruS0RdXHLovX4CSXS0%2B43g5MTw4rkpjEVUX3MjJfUZHblvd6kZxWVPxrDBX1244CyvNTFD13DJM%2BBr1%2BYYr38LcO7lmabmoGXl7QCvy%2B%2FDipw75o%2B3qIUSv%2FdnWJfK6S60QRv%2BDGbjQKoqkNBWevAezm3ALOZUuymQythQqELQp4xVy9AvEtD81WCMvz1jU%2BTp8wxtuNwQY6pgHkE0LOjL15IbBoEcptuz22FjGfkW3B%2FkaLFQKOkZefKoTocSmFl3TRXllyTkqlnkF8%2FX4O%2BoRMUBwdPY6x1AbGLiNF%2FHKo5BTBlK51bmDwj56MbRkYS5vApfDKloG87qjRs%2FtWB53YV3ItlsetmmvZ6FYdM5ujCccM9qUMM9NknurRLN2VtEcRfNkZuQp1qiRMakqaUX1NyjO%2FQzxq4dTk92iyGq5q&X-Amz-Signature=f3311f6939826add83de28d99fa743ba46b7b98cdee4ec7dc55356d444d347e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRP7J67O%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIELKQhqPc3P3XvaT%2BToRvTjitQKHkeBOvQqTkdAVU%2FDVAiAiyV6n%2BYtxqmqigHxyhdQ0q7TFwK8zZB%2BNh1lYywVuQiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITZFP4pO5Jyh4Ra5KtwDDzbgBwknErCy3oTaAfkOQu6%2FPtW7eMMEJYA8m2A5xRW5a6GKlP0drotScAyfe5chvqPSvQRgWvW8V59IOtIXpKW0wuhVMcci6hsb3hZ1XvyyGWymyDI8PRsL2nR9Ri4B9b30%2F2GcpMLAOFz15EuDyWo7JgIElefq1B1%2FXtUudFOP1YxPt0j%2FFNd5duT1u6btNyLbEcDKt3BgDINgar5kMstrxJ1%2Ftc8VyoFU760bbuHuU9uWz4St3HKw0wYRac00Aeq6Y%2BkO1A2%2F%2FJKuw%2BertCaUZIFiSy3HvhfWJMaXE2ADFd3hrRcGeVUBaOm9n4SmcEIVrgjoh%2F9%2FtytpS%2Bla4NzXnAfA4lf8RLsX2VDY3WJpPqt7JmO%2FcnRGGFQdEhusp8gtH%2BhhkyP2lrM0lTWXti7MCuY7O%2BAhJF0jYPQsY66KQWrUP8JsYZ2vruS0RdXHLovX4CSXS0%2B43g5MTw4rkpjEVUX3MjJfUZHblvd6kZxWVPxrDBX1244CyvNTFD13DJM%2BBr1%2BYYr38LcO7lmabmoGXl7QCvy%2B%2FDipw75o%2B3qIUSv%2FdnWJfK6S60QRv%2BDGbjQKoqkNBWevAezm3ALOZUuymQythQqELQp4xVy9AvEtD81WCMvz1jU%2BTp8wxtuNwQY6pgHkE0LOjL15IbBoEcptuz22FjGfkW3B%2FkaLFQKOkZefKoTocSmFl3TRXllyTkqlnkF8%2FX4O%2BoRMUBwdPY6x1AbGLiNF%2FHKo5BTBlK51bmDwj56MbRkYS5vApfDKloG87qjRs%2FtWB53YV3ItlsetmmvZ6FYdM5ujCccM9qUMM9NknurRLN2VtEcRfNkZuQp1qiRMakqaUX1NyjO%2FQzxq4dTk92iyGq5q&X-Amz-Signature=6e7e26fd4e277f91b4df68567ff83e009e6330ad6331bbb36c3391286af001f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
