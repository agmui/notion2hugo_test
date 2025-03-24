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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWDBU4E%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00kIvU5779%2BJZZ4%2FyYN%2FC4%2BllTjxB3GGuydEJr69N5AiANLs3hbCxkPJTNNViNMu5qPKE1KEEOO6V3pOScaVH3oSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKuy5ZfMKS5xhzKWKtwDlCiznrtH0ggrklz4zH0stlOrZAjEqipLAN9dKQLS1HHnZ3gR%2FMtxvfakCFuWawQ5hwH7zFTFpm4YUmFNmpM5kXX1CM2ycmKoIy7FY5T8ZcXjf%2FWqei38w2XhYKampxD2gM1ggraQi44c82exuj17jyBE%2BnS%2BSaHg%2FX4Na7pJRkoboD8af8aqpdefXsKDcnOQ7pIuHMVaydwt38lDx%2Fz%2F%2F9BNKy5G2JRj2XEMOG2bgz4XUQ41oMCR7NchzkdC0xNoCycgjHqqdYzOXzeiERp8hyA%2FD7bKvwRTPXFd9yZWDjRG4v87EA5KrRSUgMNBcuQH2%2FoSL%2BWUV4SoYJlmWcX03q4JIjhomO9%2BQsJTUamUj8PqvFRRFBupuiwkKHRGU5jvFTUTQGGSHQefdQU5kHKEiCxApDkLk33ma7%2FZI4a%2FP98aSnJlBEVp6iyn%2BsDQGsxMkoPAKo4NpbR4LvbjFApCKI4QGQtZJ3B0J0THpC5ezYz4j5d9eaqdnyHMm7eRVvllbCK6BQOk%2FVQnJMzo7XIi%2BUSulV9dm8W2V9wrQGAYYN3VAMwe4cBS73hSW41qpVAInWN2MiIFNozx35wwp5JF8GqXDSANul6sfh%2BJ90uTbX6MLVmhbNHCRmsrXu0w1f2FvwY6pgE8q5vdfBxSuWFgv3DKR2NtDevq2PVRIBOKVsBB8bTLbigghZpnmKCe0yVs4yT3jJGqG7MoLdqXrgDkJDbCzwIgLe5Arm0T2a5OI%2Bp6Wg8eFUVEh3DjXrlLNcqbKGRNoQtY7w7GpDPzMMnL97HFGIQvi1gwb8EyYihLtxO5EwZhrWvI3e1%2FrAJ3hVvok7fugla14aN3eOQNww9R1jgrn5D0Lzm%2FW9qb&X-Amz-Signature=87245bc5994b4d61ad503ab4893fba5b96b0b09f6a86648d174d06cd7c43c45e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWDBU4E%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00kIvU5779%2BJZZ4%2FyYN%2FC4%2BllTjxB3GGuydEJr69N5AiANLs3hbCxkPJTNNViNMu5qPKE1KEEOO6V3pOScaVH3oSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKuy5ZfMKS5xhzKWKtwDlCiznrtH0ggrklz4zH0stlOrZAjEqipLAN9dKQLS1HHnZ3gR%2FMtxvfakCFuWawQ5hwH7zFTFpm4YUmFNmpM5kXX1CM2ycmKoIy7FY5T8ZcXjf%2FWqei38w2XhYKampxD2gM1ggraQi44c82exuj17jyBE%2BnS%2BSaHg%2FX4Na7pJRkoboD8af8aqpdefXsKDcnOQ7pIuHMVaydwt38lDx%2Fz%2F%2F9BNKy5G2JRj2XEMOG2bgz4XUQ41oMCR7NchzkdC0xNoCycgjHqqdYzOXzeiERp8hyA%2FD7bKvwRTPXFd9yZWDjRG4v87EA5KrRSUgMNBcuQH2%2FoSL%2BWUV4SoYJlmWcX03q4JIjhomO9%2BQsJTUamUj8PqvFRRFBupuiwkKHRGU5jvFTUTQGGSHQefdQU5kHKEiCxApDkLk33ma7%2FZI4a%2FP98aSnJlBEVp6iyn%2BsDQGsxMkoPAKo4NpbR4LvbjFApCKI4QGQtZJ3B0J0THpC5ezYz4j5d9eaqdnyHMm7eRVvllbCK6BQOk%2FVQnJMzo7XIi%2BUSulV9dm8W2V9wrQGAYYN3VAMwe4cBS73hSW41qpVAInWN2MiIFNozx35wwp5JF8GqXDSANul6sfh%2BJ90uTbX6MLVmhbNHCRmsrXu0w1f2FvwY6pgE8q5vdfBxSuWFgv3DKR2NtDevq2PVRIBOKVsBB8bTLbigghZpnmKCe0yVs4yT3jJGqG7MoLdqXrgDkJDbCzwIgLe5Arm0T2a5OI%2Bp6Wg8eFUVEh3DjXrlLNcqbKGRNoQtY7w7GpDPzMMnL97HFGIQvi1gwb8EyYihLtxO5EwZhrWvI3e1%2FrAJ3hVvok7fugla14aN3eOQNww9R1jgrn5D0Lzm%2FW9qb&X-Amz-Signature=5bfcfc324e49c8dfc37a2291112188bd88945cb1f48f64a8d1c3d235abe65853&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWDBU4E%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00kIvU5779%2BJZZ4%2FyYN%2FC4%2BllTjxB3GGuydEJr69N5AiANLs3hbCxkPJTNNViNMu5qPKE1KEEOO6V3pOScaVH3oSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKuy5ZfMKS5xhzKWKtwDlCiznrtH0ggrklz4zH0stlOrZAjEqipLAN9dKQLS1HHnZ3gR%2FMtxvfakCFuWawQ5hwH7zFTFpm4YUmFNmpM5kXX1CM2ycmKoIy7FY5T8ZcXjf%2FWqei38w2XhYKampxD2gM1ggraQi44c82exuj17jyBE%2BnS%2BSaHg%2FX4Na7pJRkoboD8af8aqpdefXsKDcnOQ7pIuHMVaydwt38lDx%2Fz%2F%2F9BNKy5G2JRj2XEMOG2bgz4XUQ41oMCR7NchzkdC0xNoCycgjHqqdYzOXzeiERp8hyA%2FD7bKvwRTPXFd9yZWDjRG4v87EA5KrRSUgMNBcuQH2%2FoSL%2BWUV4SoYJlmWcX03q4JIjhomO9%2BQsJTUamUj8PqvFRRFBupuiwkKHRGU5jvFTUTQGGSHQefdQU5kHKEiCxApDkLk33ma7%2FZI4a%2FP98aSnJlBEVp6iyn%2BsDQGsxMkoPAKo4NpbR4LvbjFApCKI4QGQtZJ3B0J0THpC5ezYz4j5d9eaqdnyHMm7eRVvllbCK6BQOk%2FVQnJMzo7XIi%2BUSulV9dm8W2V9wrQGAYYN3VAMwe4cBS73hSW41qpVAInWN2MiIFNozx35wwp5JF8GqXDSANul6sfh%2BJ90uTbX6MLVmhbNHCRmsrXu0w1f2FvwY6pgE8q5vdfBxSuWFgv3DKR2NtDevq2PVRIBOKVsBB8bTLbigghZpnmKCe0yVs4yT3jJGqG7MoLdqXrgDkJDbCzwIgLe5Arm0T2a5OI%2Bp6Wg8eFUVEh3DjXrlLNcqbKGRNoQtY7w7GpDPzMMnL97HFGIQvi1gwb8EyYihLtxO5EwZhrWvI3e1%2FrAJ3hVvok7fugla14aN3eOQNww9R1jgrn5D0Lzm%2FW9qb&X-Amz-Signature=4671ad0b7e7c75226869f08174e1e5a8a90df2c70f4ea92113b648e922c346a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
