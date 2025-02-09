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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QUHOIW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFLjyPrM5OoD4H3CZ6DcVceKE0arZ4sznVXEVGWzk%2FGAiEA53H1IC4UCAIzjT0GsSfBw%2Fb1HYU4o3NPGOq5yFUfnEcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL1sHXv05luxnZVPCrcA0%2BllVNsQhz7nhuBSpBQFSTE181%2FzQn87GCumTp1enoBYflACNJc4aXU88nBEHF%2BaIsIk5PahVU%2BdAtqCpuv1ZqWsUVgrEl8C347i1bZ5blsGoB%2FKC%2Fngtf8G5apzKTZtgPiDy9XKQ%2Fi5JJE30lICtX94p937QUrRRy03Dsbix51IZBL2E146P80ewx6fL%2FXjPTNS%2FKqrqIGjvkmLUSaYixj3fi2jUGKtdDN0Bq0TIxSynIkhAciFV%2BvTA90dyAiHS5c5GXCtLsM9Wae5MErYiqwqohSS9B6BD%2BTxxgJEcL%2BlwiabvjWuxDOHlQqF%2B1wYct4f8FWG5qBtWI5zuhJhXkqYWH%2BhYvhy6jDb7hEb9kJz6ZPD2wzwRnBUAEawJAwe%2B06GnbDJK3m8P3IXzHZ4HAOU%2BbUwIQjoUYzcBjVij6CTv6MvQ%2BJFddQ%2FgLjIZLGpP%2FkZqe%2B033ggPWeu1f6C4I4f7TgVQEo%2B1fGe0ooI95btWwPLJIiEdZJMSn9T0GjvI1zNaK60Q6QOeUq4yoSkv5UgClf83%2BWviQ%2FjsdzcfcdaxRCIRKeDcz%2FPBlOGzXO%2F4h7lTVeOmWRN5wnq7ultLFa900vNcv%2BYxF3%2BxpbS1XfEf9lsBF33mcnZ5jyMMKQpL0GOqUBPPzD52FEQDmkFLDUum%2FxChubSQ%2BagREWK%2FFXYX3Ppq2G2iS2E9XDMgLus3cLwx0aaNfEjyQxf2zzRDQYq6BjmyQ55ow6x6dljWq5CCLOshoVIPp4R%2BIEOBs9X0lUrjhLrIro4A10AdGm2iZnQD9JX%2BKHSPet2GZzw8vYiI9rBuhvsggO9Iid6WzEgYVrDc4JlGKrdWnOvroQlnu%2F%2BfVnFrBEIHH6&X-Amz-Signature=6bb3199d6d1fde8f1254b563e7292ae3a5c6cb19d3187101619cb911df109509&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QUHOIW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFLjyPrM5OoD4H3CZ6DcVceKE0arZ4sznVXEVGWzk%2FGAiEA53H1IC4UCAIzjT0GsSfBw%2Fb1HYU4o3NPGOq5yFUfnEcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL1sHXv05luxnZVPCrcA0%2BllVNsQhz7nhuBSpBQFSTE181%2FzQn87GCumTp1enoBYflACNJc4aXU88nBEHF%2BaIsIk5PahVU%2BdAtqCpuv1ZqWsUVgrEl8C347i1bZ5blsGoB%2FKC%2Fngtf8G5apzKTZtgPiDy9XKQ%2Fi5JJE30lICtX94p937QUrRRy03Dsbix51IZBL2E146P80ewx6fL%2FXjPTNS%2FKqrqIGjvkmLUSaYixj3fi2jUGKtdDN0Bq0TIxSynIkhAciFV%2BvTA90dyAiHS5c5GXCtLsM9Wae5MErYiqwqohSS9B6BD%2BTxxgJEcL%2BlwiabvjWuxDOHlQqF%2B1wYct4f8FWG5qBtWI5zuhJhXkqYWH%2BhYvhy6jDb7hEb9kJz6ZPD2wzwRnBUAEawJAwe%2B06GnbDJK3m8P3IXzHZ4HAOU%2BbUwIQjoUYzcBjVij6CTv6MvQ%2BJFddQ%2FgLjIZLGpP%2FkZqe%2B033ggPWeu1f6C4I4f7TgVQEo%2B1fGe0ooI95btWwPLJIiEdZJMSn9T0GjvI1zNaK60Q6QOeUq4yoSkv5UgClf83%2BWviQ%2FjsdzcfcdaxRCIRKeDcz%2FPBlOGzXO%2F4h7lTVeOmWRN5wnq7ultLFa900vNcv%2BYxF3%2BxpbS1XfEf9lsBF33mcnZ5jyMMKQpL0GOqUBPPzD52FEQDmkFLDUum%2FxChubSQ%2BagREWK%2FFXYX3Ppq2G2iS2E9XDMgLus3cLwx0aaNfEjyQxf2zzRDQYq6BjmyQ55ow6x6dljWq5CCLOshoVIPp4R%2BIEOBs9X0lUrjhLrIro4A10AdGm2iZnQD9JX%2BKHSPet2GZzw8vYiI9rBuhvsggO9Iid6WzEgYVrDc4JlGKrdWnOvroQlnu%2F%2BfVnFrBEIHH6&X-Amz-Signature=427127e2683b7a01b5e2da468f732d90418c33998470489f310b003cb42165b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QUHOIW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFLjyPrM5OoD4H3CZ6DcVceKE0arZ4sznVXEVGWzk%2FGAiEA53H1IC4UCAIzjT0GsSfBw%2Fb1HYU4o3NPGOq5yFUfnEcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL1sHXv05luxnZVPCrcA0%2BllVNsQhz7nhuBSpBQFSTE181%2FzQn87GCumTp1enoBYflACNJc4aXU88nBEHF%2BaIsIk5PahVU%2BdAtqCpuv1ZqWsUVgrEl8C347i1bZ5blsGoB%2FKC%2Fngtf8G5apzKTZtgPiDy9XKQ%2Fi5JJE30lICtX94p937QUrRRy03Dsbix51IZBL2E146P80ewx6fL%2FXjPTNS%2FKqrqIGjvkmLUSaYixj3fi2jUGKtdDN0Bq0TIxSynIkhAciFV%2BvTA90dyAiHS5c5GXCtLsM9Wae5MErYiqwqohSS9B6BD%2BTxxgJEcL%2BlwiabvjWuxDOHlQqF%2B1wYct4f8FWG5qBtWI5zuhJhXkqYWH%2BhYvhy6jDb7hEb9kJz6ZPD2wzwRnBUAEawJAwe%2B06GnbDJK3m8P3IXzHZ4HAOU%2BbUwIQjoUYzcBjVij6CTv6MvQ%2BJFddQ%2FgLjIZLGpP%2FkZqe%2B033ggPWeu1f6C4I4f7TgVQEo%2B1fGe0ooI95btWwPLJIiEdZJMSn9T0GjvI1zNaK60Q6QOeUq4yoSkv5UgClf83%2BWviQ%2FjsdzcfcdaxRCIRKeDcz%2FPBlOGzXO%2F4h7lTVeOmWRN5wnq7ultLFa900vNcv%2BYxF3%2BxpbS1XfEf9lsBF33mcnZ5jyMMKQpL0GOqUBPPzD52FEQDmkFLDUum%2FxChubSQ%2BagREWK%2FFXYX3Ppq2G2iS2E9XDMgLus3cLwx0aaNfEjyQxf2zzRDQYq6BjmyQ55ow6x6dljWq5CCLOshoVIPp4R%2BIEOBs9X0lUrjhLrIro4A10AdGm2iZnQD9JX%2BKHSPet2GZzw8vYiI9rBuhvsggO9Iid6WzEgYVrDc4JlGKrdWnOvroQlnu%2F%2BfVnFrBEIHH6&X-Amz-Signature=86b7345753ba710ff7de10e9b5f85df6b2580476e6035ab62dafad6ff6fdc0be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
