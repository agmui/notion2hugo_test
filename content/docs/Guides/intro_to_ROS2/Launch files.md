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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=e1ba0693fc9f1253ac2bfb2f20c356d4770dd48e20bca1d7ab1606f3e6adebaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=fb15e32bd7c53af10b0d0bce5bb222ade8412ef417cb4b67ade82ddf9b02dec1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=1571bb6fbc8f506d99be212b93950395408e2dc75265deee83d32bb98b32085e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
