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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635WSRDN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf4orRV7YKemoCbQcJ6m7y%2F2bjRVP3MFkyAUsqWKuwiAiEA3VfjtfVN9c5nP%2BGUBfPp6f2CZI5RITI%2FLyd9C%2FK5ftkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFbS%2BDWY%2BKkkZ5pBwyrcA8gV3PBqviUOZgONmWHRTicMQr1EAmf3aLyRbXNR1uYg1FqQovRACZtuNP0kq0LHTV8VdsVkzi02uCWzvZuSUFr4E0f7EkrxDiylDihYMPdtDzNs%2Bd28UPIBpQmNquS3GCuGQJR6%2BM4Y6AIDq13Q6iO49Y99T7Mqgkt9W8YDOtZKUozalQ8SmVLV4FjK5VLH2SYCENUKt%2FALzvywfWGrfPuuSNwea3bZV1KyGDIaGsAPkU9H2ibpmsB1khvqpX0Yl%2BBwQC6Oxq96eFBYcqHwTcDsmM1VktfNNbq1gYp6A0k6grNDG4LJC4m7XDXleGmsy6LODXN3UXYkUapoCStTBtGQs5y10XyemW4JaLiIAW5cKnqQMlC98IIetlXz%2BDq7LF2a37BF5HJ1Q0XqyzSdn%2FVjaf0HjLm%2BHK4MCucGeF9uVu4p5Fj5PCnLGUSmB3u0pcROSH4Qp7Au4fUHjLY9r4O%2B9ra5fXjH9qExXNrMvY9mr%2BA4H51sypKgS6bWiIC5zPvLWqIGuU%2FDMwsZuQj5Tlh4iY%2Fplk%2BNATWdt2XaM3yGp%2FiPahOCSIqOB1NGJGcTJgcftt4S6mzcRYwYB3sELX5gKiTdiQJP0L0XMzm05sPXnsjlv%2FrVC2FewICEMKLZgb0GOqUBJB6vr52q%2Bkx1CavpvBqD1DVGnfolE4WWv%2Fp5VUmSK35jxKG4rYMob1EGs50DQI0sTzps%2BVZQkAFyXMD7ycw2frlRJPFVqpDGdNwQB1c1VNZ7GOAo27XM3OAEsjSCuaHbIxmNPVGI7ciJKToVk%2BygzOsNWZUeuRoPQ%2BWqlU58d0GEWAKORpmOpTj%2BEa%2F4J0oSiRuGlH79MCzjFdru4OCWwSVLjGAU&X-Amz-Signature=b4650d67d75b7551e1147adb5b6d4c82d7fc6de91abf8d072feaee71357c16dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635WSRDN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf4orRV7YKemoCbQcJ6m7y%2F2bjRVP3MFkyAUsqWKuwiAiEA3VfjtfVN9c5nP%2BGUBfPp6f2CZI5RITI%2FLyd9C%2FK5ftkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFbS%2BDWY%2BKkkZ5pBwyrcA8gV3PBqviUOZgONmWHRTicMQr1EAmf3aLyRbXNR1uYg1FqQovRACZtuNP0kq0LHTV8VdsVkzi02uCWzvZuSUFr4E0f7EkrxDiylDihYMPdtDzNs%2Bd28UPIBpQmNquS3GCuGQJR6%2BM4Y6AIDq13Q6iO49Y99T7Mqgkt9W8YDOtZKUozalQ8SmVLV4FjK5VLH2SYCENUKt%2FALzvywfWGrfPuuSNwea3bZV1KyGDIaGsAPkU9H2ibpmsB1khvqpX0Yl%2BBwQC6Oxq96eFBYcqHwTcDsmM1VktfNNbq1gYp6A0k6grNDG4LJC4m7XDXleGmsy6LODXN3UXYkUapoCStTBtGQs5y10XyemW4JaLiIAW5cKnqQMlC98IIetlXz%2BDq7LF2a37BF5HJ1Q0XqyzSdn%2FVjaf0HjLm%2BHK4MCucGeF9uVu4p5Fj5PCnLGUSmB3u0pcROSH4Qp7Au4fUHjLY9r4O%2B9ra5fXjH9qExXNrMvY9mr%2BA4H51sypKgS6bWiIC5zPvLWqIGuU%2FDMwsZuQj5Tlh4iY%2Fplk%2BNATWdt2XaM3yGp%2FiPahOCSIqOB1NGJGcTJgcftt4S6mzcRYwYB3sELX5gKiTdiQJP0L0XMzm05sPXnsjlv%2FrVC2FewICEMKLZgb0GOqUBJB6vr52q%2Bkx1CavpvBqD1DVGnfolE4WWv%2Fp5VUmSK35jxKG4rYMob1EGs50DQI0sTzps%2BVZQkAFyXMD7ycw2frlRJPFVqpDGdNwQB1c1VNZ7GOAo27XM3OAEsjSCuaHbIxmNPVGI7ciJKToVk%2BygzOsNWZUeuRoPQ%2BWqlU58d0GEWAKORpmOpTj%2BEa%2F4J0oSiRuGlH79MCzjFdru4OCWwSVLjGAU&X-Amz-Signature=c7db015522b4b69ad2148ee432a9e41778e62d3287d51a04a4f1ec4ff13a54fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635WSRDN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf4orRV7YKemoCbQcJ6m7y%2F2bjRVP3MFkyAUsqWKuwiAiEA3VfjtfVN9c5nP%2BGUBfPp6f2CZI5RITI%2FLyd9C%2FK5ftkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFbS%2BDWY%2BKkkZ5pBwyrcA8gV3PBqviUOZgONmWHRTicMQr1EAmf3aLyRbXNR1uYg1FqQovRACZtuNP0kq0LHTV8VdsVkzi02uCWzvZuSUFr4E0f7EkrxDiylDihYMPdtDzNs%2Bd28UPIBpQmNquS3GCuGQJR6%2BM4Y6AIDq13Q6iO49Y99T7Mqgkt9W8YDOtZKUozalQ8SmVLV4FjK5VLH2SYCENUKt%2FALzvywfWGrfPuuSNwea3bZV1KyGDIaGsAPkU9H2ibpmsB1khvqpX0Yl%2BBwQC6Oxq96eFBYcqHwTcDsmM1VktfNNbq1gYp6A0k6grNDG4LJC4m7XDXleGmsy6LODXN3UXYkUapoCStTBtGQs5y10XyemW4JaLiIAW5cKnqQMlC98IIetlXz%2BDq7LF2a37BF5HJ1Q0XqyzSdn%2FVjaf0HjLm%2BHK4MCucGeF9uVu4p5Fj5PCnLGUSmB3u0pcROSH4Qp7Au4fUHjLY9r4O%2B9ra5fXjH9qExXNrMvY9mr%2BA4H51sypKgS6bWiIC5zPvLWqIGuU%2FDMwsZuQj5Tlh4iY%2Fplk%2BNATWdt2XaM3yGp%2FiPahOCSIqOB1NGJGcTJgcftt4S6mzcRYwYB3sELX5gKiTdiQJP0L0XMzm05sPXnsjlv%2FrVC2FewICEMKLZgb0GOqUBJB6vr52q%2Bkx1CavpvBqD1DVGnfolE4WWv%2Fp5VUmSK35jxKG4rYMob1EGs50DQI0sTzps%2BVZQkAFyXMD7ycw2frlRJPFVqpDGdNwQB1c1VNZ7GOAo27XM3OAEsjSCuaHbIxmNPVGI7ciJKToVk%2BygzOsNWZUeuRoPQ%2BWqlU58d0GEWAKORpmOpTj%2BEa%2F4J0oSiRuGlH79MCzjFdru4OCWwSVLjGAU&X-Amz-Signature=73f2f4851e90cde7e1987165f76e91249c37182f130de0bf923f781b77bb381e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
