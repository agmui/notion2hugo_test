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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PFHJLQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCss5OCjlAgUCJw2B7T29kExYAnYKTGAogo%2Fo6GGgi7AAIgVA8obXKQ7no9VU5Hp0rtE7kXj5K5EvmFkz%2Fg3jTcsM4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh09MYLaPPo2mvQICrcA6UmldEVPdDLOAiW609c0kpfaqHsogEWmE%2FSd3ivePSHRPVjnlPduqR9da4J%2FqukrDp9d8KAma1wXn6LGHLwHZPQlZXrwrX5QM2UikFUxzdzuwfuMg4Sl1AN0k7lCsmhZMJ82nFuZKK7zdAET1G3gkASkdEI1xjxMBFa4HyTpVKgyKFCpEyZG6bW%2BcyRlYe6x9j1ObnssaaOp0tBv%2FnEdNpc2dOWxf9ojPVT6gJoePGN5ldPN39R1mXdVc9ZGPf7A4uzmkOoUfhkBeh9nPb06YgCCOtysMIMHEjlQE2M8SRQ%2Bv8LOuYLIqG1aXxfoWS%2FOvp0%2Bvtnt7%2F168UhNAcAujsQtiL53ZRc78V8cQzApkgSyKz9e0uYR3%2FwFIVFax4aGZwHg2SyesHbRG7mzjiCenIj6JJjzmtpTYd7Y%2Blo0zrcJwevfBUqdczNMIo9HvTaX415v4ZTrNZuISk41ia1jXS6LfedcESOiurr7Y7mSZMAewMbXRg6vmanX%2B5Jfm0Bm3VEaC4x%2B2CHsv66mnZFAXvg8ZtjlgXWKwyLC%2BQI09TG2ziVQU5lhPqcvp8C0X7RnV2PO8I50sg8qSLQKg41vkaRvq4JQyJYrWYHgcYJ0ySUn6ORvQaiNSd2mlhZMNDK478GOqUB0B2vpDuW2elXE5Tb3NmaEhbTrVeacfQo8HepT0ymSQP3L6wpmjcdLY%2BM%2BfrikViO2sCOFnLfJPLnY8tVJ5oHsrBo8mL8JZhHUHDB4NE1RvBAf5e5Kl%2Fh46kN5Mnzod9R%2F%2BaD6YY21sNtlPrdncDKizVG%2B32KbRTSzfCXax28oCUu3Kvjc4bLGgnZHgGR5wgPT9wCFgttbwmC7T55i1oBip4TmjI2&X-Amz-Signature=a49495bc0c2614a3b47fee9e87bd4ce6685145f2930e4eea271a16e02b9c34b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PFHJLQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCss5OCjlAgUCJw2B7T29kExYAnYKTGAogo%2Fo6GGgi7AAIgVA8obXKQ7no9VU5Hp0rtE7kXj5K5EvmFkz%2Fg3jTcsM4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh09MYLaPPo2mvQICrcA6UmldEVPdDLOAiW609c0kpfaqHsogEWmE%2FSd3ivePSHRPVjnlPduqR9da4J%2FqukrDp9d8KAma1wXn6LGHLwHZPQlZXrwrX5QM2UikFUxzdzuwfuMg4Sl1AN0k7lCsmhZMJ82nFuZKK7zdAET1G3gkASkdEI1xjxMBFa4HyTpVKgyKFCpEyZG6bW%2BcyRlYe6x9j1ObnssaaOp0tBv%2FnEdNpc2dOWxf9ojPVT6gJoePGN5ldPN39R1mXdVc9ZGPf7A4uzmkOoUfhkBeh9nPb06YgCCOtysMIMHEjlQE2M8SRQ%2Bv8LOuYLIqG1aXxfoWS%2FOvp0%2Bvtnt7%2F168UhNAcAujsQtiL53ZRc78V8cQzApkgSyKz9e0uYR3%2FwFIVFax4aGZwHg2SyesHbRG7mzjiCenIj6JJjzmtpTYd7Y%2Blo0zrcJwevfBUqdczNMIo9HvTaX415v4ZTrNZuISk41ia1jXS6LfedcESOiurr7Y7mSZMAewMbXRg6vmanX%2B5Jfm0Bm3VEaC4x%2B2CHsv66mnZFAXvg8ZtjlgXWKwyLC%2BQI09TG2ziVQU5lhPqcvp8C0X7RnV2PO8I50sg8qSLQKg41vkaRvq4JQyJYrWYHgcYJ0ySUn6ORvQaiNSd2mlhZMNDK478GOqUB0B2vpDuW2elXE5Tb3NmaEhbTrVeacfQo8HepT0ymSQP3L6wpmjcdLY%2BM%2BfrikViO2sCOFnLfJPLnY8tVJ5oHsrBo8mL8JZhHUHDB4NE1RvBAf5e5Kl%2Fh46kN5Mnzod9R%2F%2BaD6YY21sNtlPrdncDKizVG%2B32KbRTSzfCXax28oCUu3Kvjc4bLGgnZHgGR5wgPT9wCFgttbwmC7T55i1oBip4TmjI2&X-Amz-Signature=575ef6b3e029708ac61a605977a692b3c0c83d1423e0d76350d7122a4911259c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PFHJLQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCss5OCjlAgUCJw2B7T29kExYAnYKTGAogo%2Fo6GGgi7AAIgVA8obXKQ7no9VU5Hp0rtE7kXj5K5EvmFkz%2Fg3jTcsM4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh09MYLaPPo2mvQICrcA6UmldEVPdDLOAiW609c0kpfaqHsogEWmE%2FSd3ivePSHRPVjnlPduqR9da4J%2FqukrDp9d8KAma1wXn6LGHLwHZPQlZXrwrX5QM2UikFUxzdzuwfuMg4Sl1AN0k7lCsmhZMJ82nFuZKK7zdAET1G3gkASkdEI1xjxMBFa4HyTpVKgyKFCpEyZG6bW%2BcyRlYe6x9j1ObnssaaOp0tBv%2FnEdNpc2dOWxf9ojPVT6gJoePGN5ldPN39R1mXdVc9ZGPf7A4uzmkOoUfhkBeh9nPb06YgCCOtysMIMHEjlQE2M8SRQ%2Bv8LOuYLIqG1aXxfoWS%2FOvp0%2Bvtnt7%2F168UhNAcAujsQtiL53ZRc78V8cQzApkgSyKz9e0uYR3%2FwFIVFax4aGZwHg2SyesHbRG7mzjiCenIj6JJjzmtpTYd7Y%2Blo0zrcJwevfBUqdczNMIo9HvTaX415v4ZTrNZuISk41ia1jXS6LfedcESOiurr7Y7mSZMAewMbXRg6vmanX%2B5Jfm0Bm3VEaC4x%2B2CHsv66mnZFAXvg8ZtjlgXWKwyLC%2BQI09TG2ziVQU5lhPqcvp8C0X7RnV2PO8I50sg8qSLQKg41vkaRvq4JQyJYrWYHgcYJ0ySUn6ORvQaiNSd2mlhZMNDK478GOqUB0B2vpDuW2elXE5Tb3NmaEhbTrVeacfQo8HepT0ymSQP3L6wpmjcdLY%2BM%2BfrikViO2sCOFnLfJPLnY8tVJ5oHsrBo8mL8JZhHUHDB4NE1RvBAf5e5Kl%2Fh46kN5Mnzod9R%2F%2BaD6YY21sNtlPrdncDKizVG%2B32KbRTSzfCXax28oCUu3Kvjc4bLGgnZHgGR5wgPT9wCFgttbwmC7T55i1oBip4TmjI2&X-Amz-Signature=6a9b3a84e05e0d5e07129055f0b7007611443f665d9f8099950fdba1730420e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
