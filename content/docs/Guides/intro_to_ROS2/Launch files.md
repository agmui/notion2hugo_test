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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3YRP37%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMKBuPl6OLaJwHRqZ8tqA%2F5NL25Ur24%2FcXex9DskuUzgIhAPoBE1LZhkTFu3Dwt68OmRT2lew2Q9UdBiA3kPH9ngchKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI4op9uJr0J6cK7OEq3AMbQKgZV%2FwiYnpyretXu5YDsguN0EtB28e4bhZqjHSkqbvdMzguhRutqSuhA%2F0Kyu3OvPZ9zZRBs4446Wxf6a%2BoJ%2F159YPPj3GqvEPrEESHd7gseDBzZ%2BMSgwKzDCNDYh98JN6dsd3kjULyr5DKU330TOv2aZFX3vkg2e0Axxpl%2Fsvm4%2Bkb%2F60mTqFETxB1sqzettoTXYTAua8Kg%2Fw2DVUZC9ONHh2dRrK957hGxf7aKey0PdBDs%2FKAO2KYeyvLF0ouufQpeLzWFjlzVtmuGksR8ozXWzmzCFYU%2FT6Pgopsgq5vcMSwXJRvMXNWZqHd2BTnyRPFdHrfgkBdM6%2FWvi9P%2FRgSPbATrMctsi%2Bpm1z5Nj1gKR4nH%2FlsBYpzttwkrgAK4w%2BRosei0zj5KKxm0M0jXcfuKL%2BSYhjVjP3JbRp7689Xj%2B2hgBxNlLNpgsuyDHxrZSHqkILaXsTeuHcS0ICHPQme9LlgLgbfEdRD05gdI6%2BaerE3Ss8MlU%2BZta2%2BjASkZERBKxe31OSJqzzwphwO%2BArh4OsRTZtk1YOgnNIEh3vlTS3mhaoecrYI8YhEOz03CuMEux0mPu78vkv%2B2ORS3ooovadWwKG%2BRzbFzCDVz%2BBLVAwbqCDm4JjSrDDyj%2FzABjqkAaIHCRQv%2Fvna61OEzmzNRUymSZMkdECy%2FioQaBKmkW%2BXoF5h1txpNWj2oZIJCcQ0IvQTLHxPCPEEwQNshjK0QAnkbp0N%2FFreNiSl4Vo9lFdlTzncnjIYE2OiLiyvYxqZUaKwwKZmxnMsvxgv4%2FSnuFcW6zmiSNqc13esKmFIVwgJmjfmB0yCHGTb5SZeaGFRHnS83Tzt76ql0K2HxzoTD%2Bt7BPAC&X-Amz-Signature=e0508277c1811fa2412777a75e62a9219ad8c8eb66bb7d786aa97ae6d198b717&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3YRP37%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMKBuPl6OLaJwHRqZ8tqA%2F5NL25Ur24%2FcXex9DskuUzgIhAPoBE1LZhkTFu3Dwt68OmRT2lew2Q9UdBiA3kPH9ngchKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI4op9uJr0J6cK7OEq3AMbQKgZV%2FwiYnpyretXu5YDsguN0EtB28e4bhZqjHSkqbvdMzguhRutqSuhA%2F0Kyu3OvPZ9zZRBs4446Wxf6a%2BoJ%2F159YPPj3GqvEPrEESHd7gseDBzZ%2BMSgwKzDCNDYh98JN6dsd3kjULyr5DKU330TOv2aZFX3vkg2e0Axxpl%2Fsvm4%2Bkb%2F60mTqFETxB1sqzettoTXYTAua8Kg%2Fw2DVUZC9ONHh2dRrK957hGxf7aKey0PdBDs%2FKAO2KYeyvLF0ouufQpeLzWFjlzVtmuGksR8ozXWzmzCFYU%2FT6Pgopsgq5vcMSwXJRvMXNWZqHd2BTnyRPFdHrfgkBdM6%2FWvi9P%2FRgSPbATrMctsi%2Bpm1z5Nj1gKR4nH%2FlsBYpzttwkrgAK4w%2BRosei0zj5KKxm0M0jXcfuKL%2BSYhjVjP3JbRp7689Xj%2B2hgBxNlLNpgsuyDHxrZSHqkILaXsTeuHcS0ICHPQme9LlgLgbfEdRD05gdI6%2BaerE3Ss8MlU%2BZta2%2BjASkZERBKxe31OSJqzzwphwO%2BArh4OsRTZtk1YOgnNIEh3vlTS3mhaoecrYI8YhEOz03CuMEux0mPu78vkv%2B2ORS3ooovadWwKG%2BRzbFzCDVz%2BBLVAwbqCDm4JjSrDDyj%2FzABjqkAaIHCRQv%2Fvna61OEzmzNRUymSZMkdECy%2FioQaBKmkW%2BXoF5h1txpNWj2oZIJCcQ0IvQTLHxPCPEEwQNshjK0QAnkbp0N%2FFreNiSl4Vo9lFdlTzncnjIYE2OiLiyvYxqZUaKwwKZmxnMsvxgv4%2FSnuFcW6zmiSNqc13esKmFIVwgJmjfmB0yCHGTb5SZeaGFRHnS83Tzt76ql0K2HxzoTD%2Bt7BPAC&X-Amz-Signature=8d0c15bc0f004465f7b3d4e6b4e0b6b203eb78c386a3c2690599a2f1d9f36346&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3YRP37%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMKBuPl6OLaJwHRqZ8tqA%2F5NL25Ur24%2FcXex9DskuUzgIhAPoBE1LZhkTFu3Dwt68OmRT2lew2Q9UdBiA3kPH9ngchKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI4op9uJr0J6cK7OEq3AMbQKgZV%2FwiYnpyretXu5YDsguN0EtB28e4bhZqjHSkqbvdMzguhRutqSuhA%2F0Kyu3OvPZ9zZRBs4446Wxf6a%2BoJ%2F159YPPj3GqvEPrEESHd7gseDBzZ%2BMSgwKzDCNDYh98JN6dsd3kjULyr5DKU330TOv2aZFX3vkg2e0Axxpl%2Fsvm4%2Bkb%2F60mTqFETxB1sqzettoTXYTAua8Kg%2Fw2DVUZC9ONHh2dRrK957hGxf7aKey0PdBDs%2FKAO2KYeyvLF0ouufQpeLzWFjlzVtmuGksR8ozXWzmzCFYU%2FT6Pgopsgq5vcMSwXJRvMXNWZqHd2BTnyRPFdHrfgkBdM6%2FWvi9P%2FRgSPbATrMctsi%2Bpm1z5Nj1gKR4nH%2FlsBYpzttwkrgAK4w%2BRosei0zj5KKxm0M0jXcfuKL%2BSYhjVjP3JbRp7689Xj%2B2hgBxNlLNpgsuyDHxrZSHqkILaXsTeuHcS0ICHPQme9LlgLgbfEdRD05gdI6%2BaerE3Ss8MlU%2BZta2%2BjASkZERBKxe31OSJqzzwphwO%2BArh4OsRTZtk1YOgnNIEh3vlTS3mhaoecrYI8YhEOz03CuMEux0mPu78vkv%2B2ORS3ooovadWwKG%2BRzbFzCDVz%2BBLVAwbqCDm4JjSrDDyj%2FzABjqkAaIHCRQv%2Fvna61OEzmzNRUymSZMkdECy%2FioQaBKmkW%2BXoF5h1txpNWj2oZIJCcQ0IvQTLHxPCPEEwQNshjK0QAnkbp0N%2FFreNiSl4Vo9lFdlTzncnjIYE2OiLiyvYxqZUaKwwKZmxnMsvxgv4%2FSnuFcW6zmiSNqc13esKmFIVwgJmjfmB0yCHGTb5SZeaGFRHnS83Tzt76ql0K2HxzoTD%2Bt7BPAC&X-Amz-Signature=b937625260dd8845f71bc15990c452ed5899ede24153f99682420acb20bbfec3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
