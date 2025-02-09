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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKREYLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5038r9rhx3p6milvmTOXlo%2BWuytwDOb9sy2Fm2CuuCgIhANIWvUoi2jFwsXm5ypNOLCIb8mw8XesN7iabPfPBhYVMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT9z9APjIQkzt3jGsq3AM3YxryVPhZn5RkncQraNyN9GHkLjy%2FAUW%2FMxJIljXCKfLnU7XG%2BTjaE3ZeNBQe7qLcUpm98BGWywdydlcdfF4KdV08kFn55ZVD1AMWgJuzHnxNiQYEUpyz11IeGz%2FEq4k1pdDyiURr39avmza4zg7lcdXdNzYWHE23s4%2Bv%2BiUPBjhm%2BXRsN6P31C9RfyJxboC%2B47rTHGHIVfTHrg4L03JfT4ewF2gCOqII3EQU%2F2WCzgAqWkNNnHBFiUvgZHUUcZEXYEQjR%2FYKJPTnTW%2Fgoe14yVuQ%2BxCjl%2BHoVUFsUjvBAr0utDvDNADGziyUAZxDPBwxEDPaGxdVV%2BQ4vppUrLQG4hu76D72oxkejAuFf%2B%2BWOimdS285E7zmb5bt%2FIj7hypgQI8Jv5rMewFOulY%2Br%2FmNsn1bS23%2FWhId9ijjTcbGvbufVI%2F15aPeeK3peZ07l6%2BuUsF3gOjOmW3dxQRx0CoYBX89g0ricC3G93J7NTj0Skm5lMMQmTI15MlocR%2BL56qPJlHKlRas8nqH6obKhlOQ5VQYJPu83KDM5xFa1%2FGzzHClRwk8gI%2BizNJtdFOtuy1ytJCsG029pVHIVNnu%2BdazkQxrcUz6TRgpiJGQXtw6jDYIFCOQudGPoJTa%2BTDt46G9BjqkAS6yLA5xzBiiPj8o2%2FMJaa3Ub%2FVmE5704M%2F5d0yW%2B00azmuhQsk5FWszTsuPllM1fACGKryQO9n9M%2BzRUiUwALhAdec9pWz86Vlw0isbD3c5LcTMbDgc4BbCdkwUdnJyflTic5dMiZV1xLGkDvbFTKza%2BvDVR9b84abfBsSZcnhidomrBieoIReAbETIwUzC22KAQEDEENdcEsAWesqD6xJQSP1n&X-Amz-Signature=1cd7fc698048affd9f94cb75c8b303e64816f9eac5b20b750a481f202212713e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKREYLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5038r9rhx3p6milvmTOXlo%2BWuytwDOb9sy2Fm2CuuCgIhANIWvUoi2jFwsXm5ypNOLCIb8mw8XesN7iabPfPBhYVMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT9z9APjIQkzt3jGsq3AM3YxryVPhZn5RkncQraNyN9GHkLjy%2FAUW%2FMxJIljXCKfLnU7XG%2BTjaE3ZeNBQe7qLcUpm98BGWywdydlcdfF4KdV08kFn55ZVD1AMWgJuzHnxNiQYEUpyz11IeGz%2FEq4k1pdDyiURr39avmza4zg7lcdXdNzYWHE23s4%2Bv%2BiUPBjhm%2BXRsN6P31C9RfyJxboC%2B47rTHGHIVfTHrg4L03JfT4ewF2gCOqII3EQU%2F2WCzgAqWkNNnHBFiUvgZHUUcZEXYEQjR%2FYKJPTnTW%2Fgoe14yVuQ%2BxCjl%2BHoVUFsUjvBAr0utDvDNADGziyUAZxDPBwxEDPaGxdVV%2BQ4vppUrLQG4hu76D72oxkejAuFf%2B%2BWOimdS285E7zmb5bt%2FIj7hypgQI8Jv5rMewFOulY%2Br%2FmNsn1bS23%2FWhId9ijjTcbGvbufVI%2F15aPeeK3peZ07l6%2BuUsF3gOjOmW3dxQRx0CoYBX89g0ricC3G93J7NTj0Skm5lMMQmTI15MlocR%2BL56qPJlHKlRas8nqH6obKhlOQ5VQYJPu83KDM5xFa1%2FGzzHClRwk8gI%2BizNJtdFOtuy1ytJCsG029pVHIVNnu%2BdazkQxrcUz6TRgpiJGQXtw6jDYIFCOQudGPoJTa%2BTDt46G9BjqkAS6yLA5xzBiiPj8o2%2FMJaa3Ub%2FVmE5704M%2F5d0yW%2B00azmuhQsk5FWszTsuPllM1fACGKryQO9n9M%2BzRUiUwALhAdec9pWz86Vlw0isbD3c5LcTMbDgc4BbCdkwUdnJyflTic5dMiZV1xLGkDvbFTKza%2BvDVR9b84abfBsSZcnhidomrBieoIReAbETIwUzC22KAQEDEENdcEsAWesqD6xJQSP1n&X-Amz-Signature=404746e1c7bfb30d6f9f73d6fe047613f1d0a55bfa7727df4e068f806e1ec2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKREYLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5038r9rhx3p6milvmTOXlo%2BWuytwDOb9sy2Fm2CuuCgIhANIWvUoi2jFwsXm5ypNOLCIb8mw8XesN7iabPfPBhYVMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT9z9APjIQkzt3jGsq3AM3YxryVPhZn5RkncQraNyN9GHkLjy%2FAUW%2FMxJIljXCKfLnU7XG%2BTjaE3ZeNBQe7qLcUpm98BGWywdydlcdfF4KdV08kFn55ZVD1AMWgJuzHnxNiQYEUpyz11IeGz%2FEq4k1pdDyiURr39avmza4zg7lcdXdNzYWHE23s4%2Bv%2BiUPBjhm%2BXRsN6P31C9RfyJxboC%2B47rTHGHIVfTHrg4L03JfT4ewF2gCOqII3EQU%2F2WCzgAqWkNNnHBFiUvgZHUUcZEXYEQjR%2FYKJPTnTW%2Fgoe14yVuQ%2BxCjl%2BHoVUFsUjvBAr0utDvDNADGziyUAZxDPBwxEDPaGxdVV%2BQ4vppUrLQG4hu76D72oxkejAuFf%2B%2BWOimdS285E7zmb5bt%2FIj7hypgQI8Jv5rMewFOulY%2Br%2FmNsn1bS23%2FWhId9ijjTcbGvbufVI%2F15aPeeK3peZ07l6%2BuUsF3gOjOmW3dxQRx0CoYBX89g0ricC3G93J7NTj0Skm5lMMQmTI15MlocR%2BL56qPJlHKlRas8nqH6obKhlOQ5VQYJPu83KDM5xFa1%2FGzzHClRwk8gI%2BizNJtdFOtuy1ytJCsG029pVHIVNnu%2BdazkQxrcUz6TRgpiJGQXtw6jDYIFCOQudGPoJTa%2BTDt46G9BjqkAS6yLA5xzBiiPj8o2%2FMJaa3Ub%2FVmE5704M%2F5d0yW%2B00azmuhQsk5FWszTsuPllM1fACGKryQO9n9M%2BzRUiUwALhAdec9pWz86Vlw0isbD3c5LcTMbDgc4BbCdkwUdnJyflTic5dMiZV1xLGkDvbFTKza%2BvDVR9b84abfBsSZcnhidomrBieoIReAbETIwUzC22KAQEDEENdcEsAWesqD6xJQSP1n&X-Amz-Signature=e34843c91f223fb9fce009f97ed192ee9bb836bf53f9894ea057f2c6960ec345&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
