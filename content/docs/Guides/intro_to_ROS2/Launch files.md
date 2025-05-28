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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6ZI3RI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuspPXc%2BG21VpEf2S5qo2qLhvR9nsqQzfXshpqjqAbQAiAD7ktD23k23EfGmNZ5TWUEsz1ePaa0DDBcB6NPe1za6yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZa0Sa5V8s7dJBn5rKtwDOHbkUESyqM6s%2F81ZQ00V5FNq5sBe0lc6Imvb84kNW6dPRxo7eR3YG8EKE8jHfDEuVUECibtc5ObYM9wCDh93vaCWXK4U5aOQvKwPTsDfrkOBUgIspOZmeM0VcWPL46CxFokV%2F5ADsieKNGOlMZELQwuT%2FNQzyIsZxzgo0G6JpJ9VVfQd%2Bwop%2BlxrX6gW6lConvAASpGFLtDDBLT34rEFjGwBW1fMgVq%2FJX2iqIk8RtCvANgp8xcUtcJYecruEkSJ%2F3PnO8ziah62eqhpWOrB7T1RdepD5TH8XYbFvU30xXn6T%2BTTLxDgGL6bM2cJM0QXmpS9PwvRcS0PRqml2Dg11klhiVIsx005I2IxUEhoon8LS%2FBHXMVOpqJqwE590D3g%2BdEatrxtZe9AEwQWx3lYcm60LiRhi1B4wRmn4ar1DQ6L%2BpW8inevgjvc%2F2SQC7uk74R0w1%2BQaidGLJ9My8%2FbhY3zEXWbh0LkkbhRp%2B01OkHD9BhQtj4Q6zNIlpGaMln8cRsRjZt0uV16vuJ06CTs9xGM0B%2FZHiIVZpEgX1dWexvOrDXm6E5pkuvDetNL3B8nD%2BKplNyCbrFNDTtM9IiYVak13jxKVm1K0c0Sdc9B2CjZRtchzB9AkTv6niQwibzZwQY6pgGATAwqtzzR8opAcbxJjL8CohXYW1tePayMxbpXj%2FUGRwVu0tnRkEQQ%2BiZNu6fPeazT%2B2Ot37q35QhHN8%2BZOxSiTVt0ADeSKTMOAED4E7XuTP%2FsX%2BSVppmR31itfwKArRi%2FWO7M%2FRASAPLg2Cve10962SXpIg0u6mjbjBUJcF4hs4QR8sDps7HYAeHk%2BEH3jdNew2gXi%2FKWySXvD7jby0IgLE2pQsa%2F&X-Amz-Signature=73b9e9fb3d1147ee1ed34e856880259a5038976f3d5c6bba9c0f0aad0f83b6be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6ZI3RI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuspPXc%2BG21VpEf2S5qo2qLhvR9nsqQzfXshpqjqAbQAiAD7ktD23k23EfGmNZ5TWUEsz1ePaa0DDBcB6NPe1za6yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZa0Sa5V8s7dJBn5rKtwDOHbkUESyqM6s%2F81ZQ00V5FNq5sBe0lc6Imvb84kNW6dPRxo7eR3YG8EKE8jHfDEuVUECibtc5ObYM9wCDh93vaCWXK4U5aOQvKwPTsDfrkOBUgIspOZmeM0VcWPL46CxFokV%2F5ADsieKNGOlMZELQwuT%2FNQzyIsZxzgo0G6JpJ9VVfQd%2Bwop%2BlxrX6gW6lConvAASpGFLtDDBLT34rEFjGwBW1fMgVq%2FJX2iqIk8RtCvANgp8xcUtcJYecruEkSJ%2F3PnO8ziah62eqhpWOrB7T1RdepD5TH8XYbFvU30xXn6T%2BTTLxDgGL6bM2cJM0QXmpS9PwvRcS0PRqml2Dg11klhiVIsx005I2IxUEhoon8LS%2FBHXMVOpqJqwE590D3g%2BdEatrxtZe9AEwQWx3lYcm60LiRhi1B4wRmn4ar1DQ6L%2BpW8inevgjvc%2F2SQC7uk74R0w1%2BQaidGLJ9My8%2FbhY3zEXWbh0LkkbhRp%2B01OkHD9BhQtj4Q6zNIlpGaMln8cRsRjZt0uV16vuJ06CTs9xGM0B%2FZHiIVZpEgX1dWexvOrDXm6E5pkuvDetNL3B8nD%2BKplNyCbrFNDTtM9IiYVak13jxKVm1K0c0Sdc9B2CjZRtchzB9AkTv6niQwibzZwQY6pgGATAwqtzzR8opAcbxJjL8CohXYW1tePayMxbpXj%2FUGRwVu0tnRkEQQ%2BiZNu6fPeazT%2B2Ot37q35QhHN8%2BZOxSiTVt0ADeSKTMOAED4E7XuTP%2FsX%2BSVppmR31itfwKArRi%2FWO7M%2FRASAPLg2Cve10962SXpIg0u6mjbjBUJcF4hs4QR8sDps7HYAeHk%2BEH3jdNew2gXi%2FKWySXvD7jby0IgLE2pQsa%2F&X-Amz-Signature=14401d95be8677d15155a1d7a79496485d357a0bd26b5b898cfc5dbf8c1d00ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6ZI3RI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuspPXc%2BG21VpEf2S5qo2qLhvR9nsqQzfXshpqjqAbQAiAD7ktD23k23EfGmNZ5TWUEsz1ePaa0DDBcB6NPe1za6yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZa0Sa5V8s7dJBn5rKtwDOHbkUESyqM6s%2F81ZQ00V5FNq5sBe0lc6Imvb84kNW6dPRxo7eR3YG8EKE8jHfDEuVUECibtc5ObYM9wCDh93vaCWXK4U5aOQvKwPTsDfrkOBUgIspOZmeM0VcWPL46CxFokV%2F5ADsieKNGOlMZELQwuT%2FNQzyIsZxzgo0G6JpJ9VVfQd%2Bwop%2BlxrX6gW6lConvAASpGFLtDDBLT34rEFjGwBW1fMgVq%2FJX2iqIk8RtCvANgp8xcUtcJYecruEkSJ%2F3PnO8ziah62eqhpWOrB7T1RdepD5TH8XYbFvU30xXn6T%2BTTLxDgGL6bM2cJM0QXmpS9PwvRcS0PRqml2Dg11klhiVIsx005I2IxUEhoon8LS%2FBHXMVOpqJqwE590D3g%2BdEatrxtZe9AEwQWx3lYcm60LiRhi1B4wRmn4ar1DQ6L%2BpW8inevgjvc%2F2SQC7uk74R0w1%2BQaidGLJ9My8%2FbhY3zEXWbh0LkkbhRp%2B01OkHD9BhQtj4Q6zNIlpGaMln8cRsRjZt0uV16vuJ06CTs9xGM0B%2FZHiIVZpEgX1dWexvOrDXm6E5pkuvDetNL3B8nD%2BKplNyCbrFNDTtM9IiYVak13jxKVm1K0c0Sdc9B2CjZRtchzB9AkTv6niQwibzZwQY6pgGATAwqtzzR8opAcbxJjL8CohXYW1tePayMxbpXj%2FUGRwVu0tnRkEQQ%2BiZNu6fPeazT%2B2Ot37q35QhHN8%2BZOxSiTVt0ADeSKTMOAED4E7XuTP%2FsX%2BSVppmR31itfwKArRi%2FWO7M%2FRASAPLg2Cve10962SXpIg0u6mjbjBUJcF4hs4QR8sDps7HYAeHk%2BEH3jdNew2gXi%2FKWySXvD7jby0IgLE2pQsa%2F&X-Amz-Signature=7d1ee91643da2c9f716b14c3e6c875615f30e5a76811c4a9e249b9c288b73640&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
