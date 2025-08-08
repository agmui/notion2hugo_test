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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYMXQPN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDdVxpiiXpkXG%2BxjVU%2FVDhK8Ni9aD%2BNi7kTueDRkNlOZQIhAJkmi4VMR7NFElZhYm%2FMMPWlhvQvkL9wUtG7hPaSIgC1KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysdGYz0n8ln3vs%2BWgq3AOcqf7kRZjO898ZI1jOizklZGlb3PYngeclfNmxa3btXKXiJedNcdYf4mH0TXbJo%2FhCZRTdSz5A%2BKq07WiBi2GWRxjOODadKo6WEzhzjThPACZL04A8t8DXDRuu7e%2BApXG5gADcqvK5jAEIXHnK%2Fn5671wJabJJWMr2JotYejoIydaYUSmtjjXs%2FNV8Pll4gvH%2FCYvf7z8urH1cHkntdOiWFHlFatfx5WBMb9VhkqA9ifdbQ7OoSYc8ddkMG1691S7Rxpf4XjQ2o7kr08RucSG5D%2F3%2B%2FWwrCXmRW58bBAbjyG5UFiocwdCTiJ4cOs8jHAfAylNK9MQgWmVZMogIoYjWICQ6TRvC2uw%2B5acoiYyPATFfv11frv0Iehm9RHZIBDAqD0C5N%2FefHdww90IC%2Bm9tVAspTdx7S%2Bh53dSHyGGosCQA8naybc19T9177iR%2FbWMXh1V4Z8dkOQ8AzLWfpij9%2BxU5JnP4mQ%2Bp2M1iGi4V8KbtnvU9YJCIXmWT1tBCwja0SzpM9o%2F2ZFJWCQrHDUXZz1TEYGGhnGzjGC0nUquzmujdlZBleQ2%2BQkPDD5KX5QDyQBjN2i6o9e8IKDvRCPZ2T2rFIcstHavYarb7U32QnsowuNgYkvNmqSaOUTCcn9bEBjqkAfmX5GREBs9f%2B2asfYzIQ%2FrUq6DaqRt%2FJNdZkWbBj7vjshTsD0xXvS92l91f4P0Oc8pmtZawNKF2GwjxGbdByg48Mm6YrIekhpq%2FBwJjaQBblTecEGwgJMgP932k%2F3sFJ8lJvchj0wgPLvdGXQimv5YRTDdCvSvGgjfWXCtyqaErSAavG1WLyecESJhu%2Fx7T22SDzpXIW0J1O1gFmtlG7FinSviD&X-Amz-Signature=f676200568aa11566e044e9733c745ec0e5e8e2f8f594a173699406fcf6f0d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYMXQPN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDdVxpiiXpkXG%2BxjVU%2FVDhK8Ni9aD%2BNi7kTueDRkNlOZQIhAJkmi4VMR7NFElZhYm%2FMMPWlhvQvkL9wUtG7hPaSIgC1KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysdGYz0n8ln3vs%2BWgq3AOcqf7kRZjO898ZI1jOizklZGlb3PYngeclfNmxa3btXKXiJedNcdYf4mH0TXbJo%2FhCZRTdSz5A%2BKq07WiBi2GWRxjOODadKo6WEzhzjThPACZL04A8t8DXDRuu7e%2BApXG5gADcqvK5jAEIXHnK%2Fn5671wJabJJWMr2JotYejoIydaYUSmtjjXs%2FNV8Pll4gvH%2FCYvf7z8urH1cHkntdOiWFHlFatfx5WBMb9VhkqA9ifdbQ7OoSYc8ddkMG1691S7Rxpf4XjQ2o7kr08RucSG5D%2F3%2B%2FWwrCXmRW58bBAbjyG5UFiocwdCTiJ4cOs8jHAfAylNK9MQgWmVZMogIoYjWICQ6TRvC2uw%2B5acoiYyPATFfv11frv0Iehm9RHZIBDAqD0C5N%2FefHdww90IC%2Bm9tVAspTdx7S%2Bh53dSHyGGosCQA8naybc19T9177iR%2FbWMXh1V4Z8dkOQ8AzLWfpij9%2BxU5JnP4mQ%2Bp2M1iGi4V8KbtnvU9YJCIXmWT1tBCwja0SzpM9o%2F2ZFJWCQrHDUXZz1TEYGGhnGzjGC0nUquzmujdlZBleQ2%2BQkPDD5KX5QDyQBjN2i6o9e8IKDvRCPZ2T2rFIcstHavYarb7U32QnsowuNgYkvNmqSaOUTCcn9bEBjqkAfmX5GREBs9f%2B2asfYzIQ%2FrUq6DaqRt%2FJNdZkWbBj7vjshTsD0xXvS92l91f4P0Oc8pmtZawNKF2GwjxGbdByg48Mm6YrIekhpq%2FBwJjaQBblTecEGwgJMgP932k%2F3sFJ8lJvchj0wgPLvdGXQimv5YRTDdCvSvGgjfWXCtyqaErSAavG1WLyecESJhu%2Fx7T22SDzpXIW0J1O1gFmtlG7FinSviD&X-Amz-Signature=456d9d113ed5d8a6c6a12e5919f12efbdfd2c0e71b4b1706545f9aa0c06fcb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYMXQPN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDdVxpiiXpkXG%2BxjVU%2FVDhK8Ni9aD%2BNi7kTueDRkNlOZQIhAJkmi4VMR7NFElZhYm%2FMMPWlhvQvkL9wUtG7hPaSIgC1KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysdGYz0n8ln3vs%2BWgq3AOcqf7kRZjO898ZI1jOizklZGlb3PYngeclfNmxa3btXKXiJedNcdYf4mH0TXbJo%2FhCZRTdSz5A%2BKq07WiBi2GWRxjOODadKo6WEzhzjThPACZL04A8t8DXDRuu7e%2BApXG5gADcqvK5jAEIXHnK%2Fn5671wJabJJWMr2JotYejoIydaYUSmtjjXs%2FNV8Pll4gvH%2FCYvf7z8urH1cHkntdOiWFHlFatfx5WBMb9VhkqA9ifdbQ7OoSYc8ddkMG1691S7Rxpf4XjQ2o7kr08RucSG5D%2F3%2B%2FWwrCXmRW58bBAbjyG5UFiocwdCTiJ4cOs8jHAfAylNK9MQgWmVZMogIoYjWICQ6TRvC2uw%2B5acoiYyPATFfv11frv0Iehm9RHZIBDAqD0C5N%2FefHdww90IC%2Bm9tVAspTdx7S%2Bh53dSHyGGosCQA8naybc19T9177iR%2FbWMXh1V4Z8dkOQ8AzLWfpij9%2BxU5JnP4mQ%2Bp2M1iGi4V8KbtnvU9YJCIXmWT1tBCwja0SzpM9o%2F2ZFJWCQrHDUXZz1TEYGGhnGzjGC0nUquzmujdlZBleQ2%2BQkPDD5KX5QDyQBjN2i6o9e8IKDvRCPZ2T2rFIcstHavYarb7U32QnsowuNgYkvNmqSaOUTCcn9bEBjqkAfmX5GREBs9f%2B2asfYzIQ%2FrUq6DaqRt%2FJNdZkWbBj7vjshTsD0xXvS92l91f4P0Oc8pmtZawNKF2GwjxGbdByg48Mm6YrIekhpq%2FBwJjaQBblTecEGwgJMgP932k%2F3sFJ8lJvchj0wgPLvdGXQimv5YRTDdCvSvGgjfWXCtyqaErSAavG1WLyecESJhu%2Fx7T22SDzpXIW0J1O1gFmtlG7FinSviD&X-Amz-Signature=ee82c669b6ca89d174f4683b439f9aaf2ab6376d54f8a1561dea0a702ca597db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
