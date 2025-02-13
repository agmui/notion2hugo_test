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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5CXSDU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY0ntAlgk7MhBq4xYsC0Z0ql29zmd9ZK08UTnIIpb5wIgeLcIwwNuw5ER%2FCaYi%2F5LIGR%2BJ%2F9acS6%2FujrbbVfAjPcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDITGK5Gr5J8VCoX0HCrcA31g%2BWQ3906xh%2FaT7dDIFIynJ7aQ5ouMLE1Z2UKeBbXJ2HSUzqbqatjxAg0z5ArculRCH8Kt98RvVB%2BPiheaR3vIohcMCi355Cu9aFQLoABFxHADMRwui8%2Fyg03CNG6aJXR54ZktwBWdEwEg%2BcwDk0CZBFxwgjt%2BRIdNS3ie3E6iDngimgU1%2Fg%2BcIcpr8A0m1aOB8%2FX83q9nighQIKbIhNBeSWI9QbjVPAZ19PgItC0C8BR%2F5wvLqd7npTEIItfxN%2FdmXy0FAA6pttWpS%2FBxY2Z2ojv9sWvpOXrHKIE6pC1m1sOJUx7tVgLOAPSgPdBER0vHAlQYuD2JQ8eVQJVsNpMOyIKdgxncfpKZsN%2BB6plGeHDgijAHOuTbN2mswaigPEaVdl9vswK79Ifq0bqnnZZGsuu09ZoVdZZ9LQKEzOM%2FyPLc%2F7uYSK68oSVYETH7ThsG2zJz55B3aRGaTrWOAatr6g5xh%2BkWZ2%2FLks1XI4pBcd8PYjyFrywdz%2FUMXHSOavz8Uv3bUtRvTboJeObMpluZTJJu36S6OJ8sTa1r0cVePN2fkdof0OcuQaKVkNIIAtUymlRz7JSCH2CIcg7WCXPWpaRBaTXxftY%2FFYoiV%2Bj4Lqk2LGdz49dPwJsCMKmeuL0GOqUBJd%2B1Ats7D788uT2XWp78mauJik%2BsIG5G1f25VNn3KdSZz7KXmrB8rk7KBircDU8A3yzF3ewRLL1UuEPsV0vfeXhwQqe48m1O01YkaxTB2%2Bkr8gP9Db%2BV%2Fp3auKnSvWrlqrDnBL9Y6O%2FXNChhOclEVjmyfvW3u8ebd6Qc1Vec402BPHLCooy7IQkyu6loDg%2Fg%2Fwkx2xY4%2Bs9G7Rygi6yJaK2Q6s2%2F&X-Amz-Signature=0267f1ea42f8757149e2e618d80e9f6b65d1da93511c9df70f51e364355d4bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5CXSDU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY0ntAlgk7MhBq4xYsC0Z0ql29zmd9ZK08UTnIIpb5wIgeLcIwwNuw5ER%2FCaYi%2F5LIGR%2BJ%2F9acS6%2FujrbbVfAjPcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDITGK5Gr5J8VCoX0HCrcA31g%2BWQ3906xh%2FaT7dDIFIynJ7aQ5ouMLE1Z2UKeBbXJ2HSUzqbqatjxAg0z5ArculRCH8Kt98RvVB%2BPiheaR3vIohcMCi355Cu9aFQLoABFxHADMRwui8%2Fyg03CNG6aJXR54ZktwBWdEwEg%2BcwDk0CZBFxwgjt%2BRIdNS3ie3E6iDngimgU1%2Fg%2BcIcpr8A0m1aOB8%2FX83q9nighQIKbIhNBeSWI9QbjVPAZ19PgItC0C8BR%2F5wvLqd7npTEIItfxN%2FdmXy0FAA6pttWpS%2FBxY2Z2ojv9sWvpOXrHKIE6pC1m1sOJUx7tVgLOAPSgPdBER0vHAlQYuD2JQ8eVQJVsNpMOyIKdgxncfpKZsN%2BB6plGeHDgijAHOuTbN2mswaigPEaVdl9vswK79Ifq0bqnnZZGsuu09ZoVdZZ9LQKEzOM%2FyPLc%2F7uYSK68oSVYETH7ThsG2zJz55B3aRGaTrWOAatr6g5xh%2BkWZ2%2FLks1XI4pBcd8PYjyFrywdz%2FUMXHSOavz8Uv3bUtRvTboJeObMpluZTJJu36S6OJ8sTa1r0cVePN2fkdof0OcuQaKVkNIIAtUymlRz7JSCH2CIcg7WCXPWpaRBaTXxftY%2FFYoiV%2Bj4Lqk2LGdz49dPwJsCMKmeuL0GOqUBJd%2B1Ats7D788uT2XWp78mauJik%2BsIG5G1f25VNn3KdSZz7KXmrB8rk7KBircDU8A3yzF3ewRLL1UuEPsV0vfeXhwQqe48m1O01YkaxTB2%2Bkr8gP9Db%2BV%2Fp3auKnSvWrlqrDnBL9Y6O%2FXNChhOclEVjmyfvW3u8ebd6Qc1Vec402BPHLCooy7IQkyu6loDg%2Fg%2Fwkx2xY4%2Bs9G7Rygi6yJaK2Q6s2%2F&X-Amz-Signature=4d191fde41d7a2f38b5a805648f72481056bfe21a284d2ce0342d200db60dd23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5CXSDU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY0ntAlgk7MhBq4xYsC0Z0ql29zmd9ZK08UTnIIpb5wIgeLcIwwNuw5ER%2FCaYi%2F5LIGR%2BJ%2F9acS6%2FujrbbVfAjPcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDITGK5Gr5J8VCoX0HCrcA31g%2BWQ3906xh%2FaT7dDIFIynJ7aQ5ouMLE1Z2UKeBbXJ2HSUzqbqatjxAg0z5ArculRCH8Kt98RvVB%2BPiheaR3vIohcMCi355Cu9aFQLoABFxHADMRwui8%2Fyg03CNG6aJXR54ZktwBWdEwEg%2BcwDk0CZBFxwgjt%2BRIdNS3ie3E6iDngimgU1%2Fg%2BcIcpr8A0m1aOB8%2FX83q9nighQIKbIhNBeSWI9QbjVPAZ19PgItC0C8BR%2F5wvLqd7npTEIItfxN%2FdmXy0FAA6pttWpS%2FBxY2Z2ojv9sWvpOXrHKIE6pC1m1sOJUx7tVgLOAPSgPdBER0vHAlQYuD2JQ8eVQJVsNpMOyIKdgxncfpKZsN%2BB6plGeHDgijAHOuTbN2mswaigPEaVdl9vswK79Ifq0bqnnZZGsuu09ZoVdZZ9LQKEzOM%2FyPLc%2F7uYSK68oSVYETH7ThsG2zJz55B3aRGaTrWOAatr6g5xh%2BkWZ2%2FLks1XI4pBcd8PYjyFrywdz%2FUMXHSOavz8Uv3bUtRvTboJeObMpluZTJJu36S6OJ8sTa1r0cVePN2fkdof0OcuQaKVkNIIAtUymlRz7JSCH2CIcg7WCXPWpaRBaTXxftY%2FFYoiV%2Bj4Lqk2LGdz49dPwJsCMKmeuL0GOqUBJd%2B1Ats7D788uT2XWp78mauJik%2BsIG5G1f25VNn3KdSZz7KXmrB8rk7KBircDU8A3yzF3ewRLL1UuEPsV0vfeXhwQqe48m1O01YkaxTB2%2Bkr8gP9Db%2BV%2Fp3auKnSvWrlqrDnBL9Y6O%2FXNChhOclEVjmyfvW3u8ebd6Qc1Vec402BPHLCooy7IQkyu6loDg%2Fg%2Fwkx2xY4%2Bs9G7Rygi6yJaK2Q6s2%2F&X-Amz-Signature=ecfe355881621414146ec49152ab1878c5b1702a900f8dc7494d72785f6a7ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
