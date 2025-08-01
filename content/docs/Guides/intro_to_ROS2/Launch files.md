---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBN45HX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XWu60NEaBZIGc50bO0teU%2BErOXe5lV5J%2FF5NVh%2B06AIgJZKBdy1r6QYWYw6K39S0rXPBOq29fWPR%2BqWuFzpje0MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd0KqeKHW1epOWx3yrcA7JjfWO5nXFdo1bPf4ymHfv%2FI46UDUxLrgAO1v%2FJToUMOHBsb37hqYMg2EnGOgrFSDB6uH5FiUD8iIsNz7YW%2Be2M9FWZB055VGhqLOonZ5ILk2JSM8zHX2P4gFFBcvDZpkbs2edIJdwRrH7MuKd3V4KU%2B3FIZq0hPJ7WasKYWgMr7AG6hjOK%2FGhsj1lmQkNgjbiwei%2BlNYExaLLf8o3%2F4PmukYHa5KMSz%2BxdtPIozzJNA4br1wNpQTnqgU%2BU6dKNS6JXZJzgLK3nMX12syxiwdjp%2BGieOwL%2B7pXGTYbXh2ep3G2x2oeLvX09OI319EUZ0IxJsQ6h8fiXjN7uRnwEvOar8mYByQsJWFEEwswgJAXirgIgnHKK56jS2eevp3%2Bo4gjOBNNMNKN9xk7myVvhNaeXSGtsTY%2Flu1cJ%2BnmorH%2FdhqJetwALWe1vXzE97jtV75pZ2izgsL1Z4UZF4Y0jInYolbB4nDGhAJLKBbO9ev6vRrrSWvj5S0dgNZ%2FZqcAiBWBfsrIapcgWAxUzs6TZ9cz4qBIp82PzyMuY8qQixdu9cw5TE%2F%2BdgDhkc7Z0bivpfoOKBJm%2FR8qNsJKgvPm7nzc3Ax78%2FnSg3LPBVH9qsAahhMjbr6kBmtxSjc%2BiMMubscQGOqUBgR9w2MLFmDpIn2Bgn%2FLw1upZeHzaVUk56kZypkI8Q4wkGAPtSGvPn%2FtwT1IDow5%2FRL4MY0fw5Wl9K2nToCZjGc5Eeu8Iwt3SiM2lFRVJ7x1bNAv%2FYddmvB8eBuY%2Fu5Tq9cZ2Sy3ft1WmCYiXPWIcpb0VtMnUWlJpsm34yiemy3Ni00EsSSgPlY21gfiBOtnR66wcuAvXOkWx2qAQUHOY6%2BzT%2FNr3&X-Amz-Signature=5abc60fc092fbd67f2fcdf13482f075d1281f6713fd86519ffdf8328ac47300a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBN45HX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XWu60NEaBZIGc50bO0teU%2BErOXe5lV5J%2FF5NVh%2B06AIgJZKBdy1r6QYWYw6K39S0rXPBOq29fWPR%2BqWuFzpje0MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd0KqeKHW1epOWx3yrcA7JjfWO5nXFdo1bPf4ymHfv%2FI46UDUxLrgAO1v%2FJToUMOHBsb37hqYMg2EnGOgrFSDB6uH5FiUD8iIsNz7YW%2Be2M9FWZB055VGhqLOonZ5ILk2JSM8zHX2P4gFFBcvDZpkbs2edIJdwRrH7MuKd3V4KU%2B3FIZq0hPJ7WasKYWgMr7AG6hjOK%2FGhsj1lmQkNgjbiwei%2BlNYExaLLf8o3%2F4PmukYHa5KMSz%2BxdtPIozzJNA4br1wNpQTnqgU%2BU6dKNS6JXZJzgLK3nMX12syxiwdjp%2BGieOwL%2B7pXGTYbXh2ep3G2x2oeLvX09OI319EUZ0IxJsQ6h8fiXjN7uRnwEvOar8mYByQsJWFEEwswgJAXirgIgnHKK56jS2eevp3%2Bo4gjOBNNMNKN9xk7myVvhNaeXSGtsTY%2Flu1cJ%2BnmorH%2FdhqJetwALWe1vXzE97jtV75pZ2izgsL1Z4UZF4Y0jInYolbB4nDGhAJLKBbO9ev6vRrrSWvj5S0dgNZ%2FZqcAiBWBfsrIapcgWAxUzs6TZ9cz4qBIp82PzyMuY8qQixdu9cw5TE%2F%2BdgDhkc7Z0bivpfoOKBJm%2FR8qNsJKgvPm7nzc3Ax78%2FnSg3LPBVH9qsAahhMjbr6kBmtxSjc%2BiMMubscQGOqUBgR9w2MLFmDpIn2Bgn%2FLw1upZeHzaVUk56kZypkI8Q4wkGAPtSGvPn%2FtwT1IDow5%2FRL4MY0fw5Wl9K2nToCZjGc5Eeu8Iwt3SiM2lFRVJ7x1bNAv%2FYddmvB8eBuY%2Fu5Tq9cZ2Sy3ft1WmCYiXPWIcpb0VtMnUWlJpsm34yiemy3Ni00EsSSgPlY21gfiBOtnR66wcuAvXOkWx2qAQUHOY6%2BzT%2FNr3&X-Amz-Signature=7d86ed1c1c79b713ddb2949ba55ea877a2fe7f0a27fddb369921b65ec825aee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBN45HX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XWu60NEaBZIGc50bO0teU%2BErOXe5lV5J%2FF5NVh%2B06AIgJZKBdy1r6QYWYw6K39S0rXPBOq29fWPR%2BqWuFzpje0MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd0KqeKHW1epOWx3yrcA7JjfWO5nXFdo1bPf4ymHfv%2FI46UDUxLrgAO1v%2FJToUMOHBsb37hqYMg2EnGOgrFSDB6uH5FiUD8iIsNz7YW%2Be2M9FWZB055VGhqLOonZ5ILk2JSM8zHX2P4gFFBcvDZpkbs2edIJdwRrH7MuKd3V4KU%2B3FIZq0hPJ7WasKYWgMr7AG6hjOK%2FGhsj1lmQkNgjbiwei%2BlNYExaLLf8o3%2F4PmukYHa5KMSz%2BxdtPIozzJNA4br1wNpQTnqgU%2BU6dKNS6JXZJzgLK3nMX12syxiwdjp%2BGieOwL%2B7pXGTYbXh2ep3G2x2oeLvX09OI319EUZ0IxJsQ6h8fiXjN7uRnwEvOar8mYByQsJWFEEwswgJAXirgIgnHKK56jS2eevp3%2Bo4gjOBNNMNKN9xk7myVvhNaeXSGtsTY%2Flu1cJ%2BnmorH%2FdhqJetwALWe1vXzE97jtV75pZ2izgsL1Z4UZF4Y0jInYolbB4nDGhAJLKBbO9ev6vRrrSWvj5S0dgNZ%2FZqcAiBWBfsrIapcgWAxUzs6TZ9cz4qBIp82PzyMuY8qQixdu9cw5TE%2F%2BdgDhkc7Z0bivpfoOKBJm%2FR8qNsJKgvPm7nzc3Ax78%2FnSg3LPBVH9qsAahhMjbr6kBmtxSjc%2BiMMubscQGOqUBgR9w2MLFmDpIn2Bgn%2FLw1upZeHzaVUk56kZypkI8Q4wkGAPtSGvPn%2FtwT1IDow5%2FRL4MY0fw5Wl9K2nToCZjGc5Eeu8Iwt3SiM2lFRVJ7x1bNAv%2FYddmvB8eBuY%2Fu5Tq9cZ2Sy3ft1WmCYiXPWIcpb0VtMnUWlJpsm34yiemy3Ni00EsSSgPlY21gfiBOtnR66wcuAvXOkWx2qAQUHOY6%2BzT%2FNr3&X-Amz-Signature=ad425fe487448082ea1eff67b37128bd35e52b01420435dbb5fc4a562377f968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
