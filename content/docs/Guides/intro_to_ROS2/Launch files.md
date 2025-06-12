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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPW7AGX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICwtGtt%2F9F5FOyyyNjwKg9g0yUnGWvkH9ORpuxIxfqstAiAdAvTuWLBJxcBNZKlwZLqdvFlOrQsId179j2CcGvkaXCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNq3umcrQcEWM3O8pKtwDbwRFGL%2BEbrmmVTkkq9LduK%2FEnmUC%2FkxSaBod7KyYk%2BSBZygjPzlqw1%2Bji55zvosQbTa2b4MFREx38DbbuolQnbDtSrukydTlIIi4lJqIoHZElHlNTZc73dXugEBzsDfjNa3hTLaETPURS47MEiylGP0JXPjS8%2BMXV7ayvWhtqf0TrM2Ez63bS9dmRTofDxVdOWTZxE%2BK6ULSYbj%2BxiM%2FawJo7mm9XfSmmPxlC3sWfBej2NPSRcJ1DIautg9W3X3H7IRiGadacpBa66Wc2kJWjgkQo1nwzr%2B0xWFIOArz0hIHHEIpSiASRfwmZPIYs0ZzpFgCkZxJzo9lBEfpAqP3F%2FU73o%2Bh6NhCmXYPQt7m3QZfWy9jXbR1IZF5P2c%2BI8XwzCCcP49AxelV6ocLODWGRrVVY9Zie2anczCuBZwvdxtSctAyBzGgvVEP7%2BuSNM9EJ%2Fudhsm%2F89sKQ2gO0eesRWmxnCibxibCEId9zvmuxZuMw8P50I632Ud6PAS2hF%2BRVLvA17BQ7bl%2BlnQt58H6DgjiuggwRtjuISTchO0%2Be0XskNYORlRApb1q%2F5uIq0TDAR8Q%2BtEmDJhFq6NQ%2FlFS%2By2Dht0D864rdnLnxkv46cXHpzd1t%2FJVlYWTll4w%2BIiqwgY6pgGQL3bQ%2BK0zhLEhsDwO%2BIjYDMVDIJYS%2Fa20kUhSDLs5baJ8UXZ3H0RQMDPbMEq%2B1SW3L%2FDAGQs4SgADy826%2B2uz0PkXHszaIO8KWK%2FxknDy%2FdnjhvLNlO7NPxcNHggkRVUUhcrjPx%2Bqjza70A9s%2B2t6OonP7B0LSrTrWgqQ2JEv1rdsz4x3dz5TDKv3SX0PrP1JQ8gkeEMRtGgY6ie82Z%2F79g%2FWQPjF&X-Amz-Signature=14dcc3570a739424c91f6c7ae8ad1bafc6e09e78e2e76cff7de9119dee740243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPW7AGX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICwtGtt%2F9F5FOyyyNjwKg9g0yUnGWvkH9ORpuxIxfqstAiAdAvTuWLBJxcBNZKlwZLqdvFlOrQsId179j2CcGvkaXCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNq3umcrQcEWM3O8pKtwDbwRFGL%2BEbrmmVTkkq9LduK%2FEnmUC%2FkxSaBod7KyYk%2BSBZygjPzlqw1%2Bji55zvosQbTa2b4MFREx38DbbuolQnbDtSrukydTlIIi4lJqIoHZElHlNTZc73dXugEBzsDfjNa3hTLaETPURS47MEiylGP0JXPjS8%2BMXV7ayvWhtqf0TrM2Ez63bS9dmRTofDxVdOWTZxE%2BK6ULSYbj%2BxiM%2FawJo7mm9XfSmmPxlC3sWfBej2NPSRcJ1DIautg9W3X3H7IRiGadacpBa66Wc2kJWjgkQo1nwzr%2B0xWFIOArz0hIHHEIpSiASRfwmZPIYs0ZzpFgCkZxJzo9lBEfpAqP3F%2FU73o%2Bh6NhCmXYPQt7m3QZfWy9jXbR1IZF5P2c%2BI8XwzCCcP49AxelV6ocLODWGRrVVY9Zie2anczCuBZwvdxtSctAyBzGgvVEP7%2BuSNM9EJ%2Fudhsm%2F89sKQ2gO0eesRWmxnCibxibCEId9zvmuxZuMw8P50I632Ud6PAS2hF%2BRVLvA17BQ7bl%2BlnQt58H6DgjiuggwRtjuISTchO0%2Be0XskNYORlRApb1q%2F5uIq0TDAR8Q%2BtEmDJhFq6NQ%2FlFS%2By2Dht0D864rdnLnxkv46cXHpzd1t%2FJVlYWTll4w%2BIiqwgY6pgGQL3bQ%2BK0zhLEhsDwO%2BIjYDMVDIJYS%2Fa20kUhSDLs5baJ8UXZ3H0RQMDPbMEq%2B1SW3L%2FDAGQs4SgADy826%2B2uz0PkXHszaIO8KWK%2FxknDy%2FdnjhvLNlO7NPxcNHggkRVUUhcrjPx%2Bqjza70A9s%2B2t6OonP7B0LSrTrWgqQ2JEv1rdsz4x3dz5TDKv3SX0PrP1JQ8gkeEMRtGgY6ie82Z%2F79g%2FWQPjF&X-Amz-Signature=d054cbaf9d80f76b4c342f662b35df5e6ae6ab3f5234c22f85c51620f35ce08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPW7AGX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICwtGtt%2F9F5FOyyyNjwKg9g0yUnGWvkH9ORpuxIxfqstAiAdAvTuWLBJxcBNZKlwZLqdvFlOrQsId179j2CcGvkaXCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNq3umcrQcEWM3O8pKtwDbwRFGL%2BEbrmmVTkkq9LduK%2FEnmUC%2FkxSaBod7KyYk%2BSBZygjPzlqw1%2Bji55zvosQbTa2b4MFREx38DbbuolQnbDtSrukydTlIIi4lJqIoHZElHlNTZc73dXugEBzsDfjNa3hTLaETPURS47MEiylGP0JXPjS8%2BMXV7ayvWhtqf0TrM2Ez63bS9dmRTofDxVdOWTZxE%2BK6ULSYbj%2BxiM%2FawJo7mm9XfSmmPxlC3sWfBej2NPSRcJ1DIautg9W3X3H7IRiGadacpBa66Wc2kJWjgkQo1nwzr%2B0xWFIOArz0hIHHEIpSiASRfwmZPIYs0ZzpFgCkZxJzo9lBEfpAqP3F%2FU73o%2Bh6NhCmXYPQt7m3QZfWy9jXbR1IZF5P2c%2BI8XwzCCcP49AxelV6ocLODWGRrVVY9Zie2anczCuBZwvdxtSctAyBzGgvVEP7%2BuSNM9EJ%2Fudhsm%2F89sKQ2gO0eesRWmxnCibxibCEId9zvmuxZuMw8P50I632Ud6PAS2hF%2BRVLvA17BQ7bl%2BlnQt58H6DgjiuggwRtjuISTchO0%2Be0XskNYORlRApb1q%2F5uIq0TDAR8Q%2BtEmDJhFq6NQ%2FlFS%2By2Dht0D864rdnLnxkv46cXHpzd1t%2FJVlYWTll4w%2BIiqwgY6pgGQL3bQ%2BK0zhLEhsDwO%2BIjYDMVDIJYS%2Fa20kUhSDLs5baJ8UXZ3H0RQMDPbMEq%2B1SW3L%2FDAGQs4SgADy826%2B2uz0PkXHszaIO8KWK%2FxknDy%2FdnjhvLNlO7NPxcNHggkRVUUhcrjPx%2Bqjza70A9s%2B2t6OonP7B0LSrTrWgqQ2JEv1rdsz4x3dz5TDKv3SX0PrP1JQ8gkeEMRtGgY6ie82Z%2F79g%2FWQPjF&X-Amz-Signature=59a10c29053a82850a0d5cc31d8d30e396138dd1c758223c52a481e37165cb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
