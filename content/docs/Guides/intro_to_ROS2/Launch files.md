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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VFIEF6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7QyeT%2BphUGE2uFyG4JlALQpKn990qNTh4P3k997ObSwIhAIY1JOT72JSCD80tqXg%2Fy78%2BwMHIL34EcKmA%2FLIM156oKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxts1WniA6Y2jtOrzMq3AOGQhNgA9qsQZwE5DaRAt8miSE90A0ZHTSZ6RGI%2BL%2FcKkZOUD3N779rdJg1dsLft9OWrEdjBo2xnpmQlRDVGuRoX8GaIn8%2BSClVh65iqOXU2rctuKyY5z1aIrMqzqLz%2BqNOB4PiqZ9dJMbEY%2FPM5t3xlY1ht6OZdQoqTMNcRsQ2GJZmB835gu3jUTo1aMS29bXa%2FgMyqxlgV2ClVuHaEX%2Bv8SMtAarQ3mreRpuCOHduhxZGC39vsHsv5oGwQKx9gWRu8yAQhcPM72VKl1Gxz5T2QIxQhYuY9YLbfHHYSULvUr4jxIy5uBVJlktjNdWfkORU2%2FAObQPAVqmnk56BVWbtHxGVFPqCsbcsTWAqbCUAb1OedzN2rKtU0S4a6qjU%2FSvlDx3PIAKEafuVLO0pQYsuuA9Gw%2Fpz%2B7bWjSvP4nuHhf1z9J7qzx5U1u420DerkgWyZhwtPc7MTZQa3nLMzr9scXqj9CMfuprFbj53ZYEpfIf4jZ4vY%2FXev13SBOZh%2FGvPcOqrypbivWAu00%2F1OSOXo1soBwTcnI4g%2B2fqAmq38i2jxUwLgpwMLvHmaMZDSxdv3IKHHosalpzC%2F4vWBPwVW4WoTZ4YgwNrSTe6vVGtd%2F%2BUzVhV50GGKf8sIzCqyfO8BjqkAek3Hm3DTYU8Zi9laGsLsYdmv40rdzvfPpAJ7%2FxNQ%2B3fX8oNGKcdbDaEAeQ7qrytjkvF9J95GW16fp%2BmgPH3ZDbm%2BiGBULErbKGyjMDX2UKU1M6lLsPAFl596klY%2FFr%2B76ojar42sVX%2BKTzemmQHTzLVb3zwhSLBB6vAb%2BM3bHYmt%2FGCVDSSraJ62Sv6yATVZKy5ewIfHcrORlIKC7Y41vUvxnbF&X-Amz-Signature=685624941c966944b25ac5aed6e7ea17c20a39f2c6a8a8cab8652097a2c4f396&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VFIEF6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7QyeT%2BphUGE2uFyG4JlALQpKn990qNTh4P3k997ObSwIhAIY1JOT72JSCD80tqXg%2Fy78%2BwMHIL34EcKmA%2FLIM156oKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxts1WniA6Y2jtOrzMq3AOGQhNgA9qsQZwE5DaRAt8miSE90A0ZHTSZ6RGI%2BL%2FcKkZOUD3N779rdJg1dsLft9OWrEdjBo2xnpmQlRDVGuRoX8GaIn8%2BSClVh65iqOXU2rctuKyY5z1aIrMqzqLz%2BqNOB4PiqZ9dJMbEY%2FPM5t3xlY1ht6OZdQoqTMNcRsQ2GJZmB835gu3jUTo1aMS29bXa%2FgMyqxlgV2ClVuHaEX%2Bv8SMtAarQ3mreRpuCOHduhxZGC39vsHsv5oGwQKx9gWRu8yAQhcPM72VKl1Gxz5T2QIxQhYuY9YLbfHHYSULvUr4jxIy5uBVJlktjNdWfkORU2%2FAObQPAVqmnk56BVWbtHxGVFPqCsbcsTWAqbCUAb1OedzN2rKtU0S4a6qjU%2FSvlDx3PIAKEafuVLO0pQYsuuA9Gw%2Fpz%2B7bWjSvP4nuHhf1z9J7qzx5U1u420DerkgWyZhwtPc7MTZQa3nLMzr9scXqj9CMfuprFbj53ZYEpfIf4jZ4vY%2FXev13SBOZh%2FGvPcOqrypbivWAu00%2F1OSOXo1soBwTcnI4g%2B2fqAmq38i2jxUwLgpwMLvHmaMZDSxdv3IKHHosalpzC%2F4vWBPwVW4WoTZ4YgwNrSTe6vVGtd%2F%2BUzVhV50GGKf8sIzCqyfO8BjqkAek3Hm3DTYU8Zi9laGsLsYdmv40rdzvfPpAJ7%2FxNQ%2B3fX8oNGKcdbDaEAeQ7qrytjkvF9J95GW16fp%2BmgPH3ZDbm%2BiGBULErbKGyjMDX2UKU1M6lLsPAFl596klY%2FFr%2B76ojar42sVX%2BKTzemmQHTzLVb3zwhSLBB6vAb%2BM3bHYmt%2FGCVDSSraJ62Sv6yATVZKy5ewIfHcrORlIKC7Y41vUvxnbF&X-Amz-Signature=5058926467b3d6f30b2db57b5a74cbbd090bf6cd47d40b2cee6f7f76765011ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VFIEF6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7QyeT%2BphUGE2uFyG4JlALQpKn990qNTh4P3k997ObSwIhAIY1JOT72JSCD80tqXg%2Fy78%2BwMHIL34EcKmA%2FLIM156oKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxts1WniA6Y2jtOrzMq3AOGQhNgA9qsQZwE5DaRAt8miSE90A0ZHTSZ6RGI%2BL%2FcKkZOUD3N779rdJg1dsLft9OWrEdjBo2xnpmQlRDVGuRoX8GaIn8%2BSClVh65iqOXU2rctuKyY5z1aIrMqzqLz%2BqNOB4PiqZ9dJMbEY%2FPM5t3xlY1ht6OZdQoqTMNcRsQ2GJZmB835gu3jUTo1aMS29bXa%2FgMyqxlgV2ClVuHaEX%2Bv8SMtAarQ3mreRpuCOHduhxZGC39vsHsv5oGwQKx9gWRu8yAQhcPM72VKl1Gxz5T2QIxQhYuY9YLbfHHYSULvUr4jxIy5uBVJlktjNdWfkORU2%2FAObQPAVqmnk56BVWbtHxGVFPqCsbcsTWAqbCUAb1OedzN2rKtU0S4a6qjU%2FSvlDx3PIAKEafuVLO0pQYsuuA9Gw%2Fpz%2B7bWjSvP4nuHhf1z9J7qzx5U1u420DerkgWyZhwtPc7MTZQa3nLMzr9scXqj9CMfuprFbj53ZYEpfIf4jZ4vY%2FXev13SBOZh%2FGvPcOqrypbivWAu00%2F1OSOXo1soBwTcnI4g%2B2fqAmq38i2jxUwLgpwMLvHmaMZDSxdv3IKHHosalpzC%2F4vWBPwVW4WoTZ4YgwNrSTe6vVGtd%2F%2BUzVhV50GGKf8sIzCqyfO8BjqkAek3Hm3DTYU8Zi9laGsLsYdmv40rdzvfPpAJ7%2FxNQ%2B3fX8oNGKcdbDaEAeQ7qrytjkvF9J95GW16fp%2BmgPH3ZDbm%2BiGBULErbKGyjMDX2UKU1M6lLsPAFl596klY%2FFr%2B76ojar42sVX%2BKTzemmQHTzLVb3zwhSLBB6vAb%2BM3bHYmt%2FGCVDSSraJ62Sv6yATVZKy5ewIfHcrORlIKC7Y41vUvxnbF&X-Amz-Signature=88b2800d67c12420521e989bc4206a97688ab707ff808e7a92529ead768044ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
