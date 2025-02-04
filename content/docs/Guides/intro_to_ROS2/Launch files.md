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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMC7OW4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDRByAcUQ4wT6wrQKe3%2BloROBCbuA2jN0C3tB5eQ7EX8wIgR%2BjYzmGaiWXvkvgqrmUL2RAHQ7VHxv67F8OXxTS19Ucq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDG0XiXjEcOsd3K3G7CrcA1BWbWh7RW%2FhvwTL1nJDzXlvMneKICfIalfakeCtv6Qfh07j8CfPE93vGgC2%2FhUFrjnLkqUwq5ytGx3qy6cF0I%2B5X%2BDPk%2BmoQ6jOOI8wEMWiFD%2FmTxHxtx13Vbv4quuEI8wSWysMZI9IwwdZLajtnibodf7VAFJudULcbm430ALELH3LvXDXDyDMttzl3dW0aW8rgocjxMcQUaSDv%2BcZbCqo49UrvY27Bh0ZYGsWeibBDe1zU2t1xkm4bp55tTNVy5CJgoKRDd1YiRDUZtqcKyvI8A%2FsK8sPVCkPMcVLEuGwW9LSHYP9L7xsSRcNNlf06JS2GXKQoSedQY5puowgH2%2ByGqzIIwBJ9HYGnvVFo7nN696ehrU8tWXu4g66KnvnzQf%2F4aHru1k2W%2BUI34jsEeGNUje6Ol%2Fj79%2BcvzL0vQrONAahIPxDtpA1elmHlFU2YZD6X7sIVTFVwMfSLHtrcbQLHH8ju7Py%2Ff9QX%2FjNj2lteO2ZWgX3nIe1m%2FCE4hLJrohPeTPodIBydPuIvtSQ5NAS%2FHCyVRb6IHDr1QXVpuvV6afkbXPevtiWgh03V9V9sPR2pRGp8mXPPGlCm1Pd%2F5K5oIAF5ilQwp6dH1ZiPTvmHcXycjD0rt%2BgMcHnMNGiib0GOqUBRg%2BEo1PN6MyMdT7ROWX%2BrgSGNVhjBBcAjoAtleqpsIvEq97Jei7yPkhdRYpp5UVNpEq9peXIz4cZN0on1g6ESar0Cul8PUSc7aTqPIl%2BfWuCFPMIlpvbkagiIiN1ltilRwaBOFnOWQ93k0bh6F4NUlrYibBAVjKM0FSEY4oxjktj9begescGi82UBvgHoQKkSDDo3DIDVZDpylLjaPxoI0vjog5L&X-Amz-Signature=abd0c976704047d2726bc318d7025f7396f65b1c331108d014269bdecbc17566&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMC7OW4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDRByAcUQ4wT6wrQKe3%2BloROBCbuA2jN0C3tB5eQ7EX8wIgR%2BjYzmGaiWXvkvgqrmUL2RAHQ7VHxv67F8OXxTS19Ucq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDG0XiXjEcOsd3K3G7CrcA1BWbWh7RW%2FhvwTL1nJDzXlvMneKICfIalfakeCtv6Qfh07j8CfPE93vGgC2%2FhUFrjnLkqUwq5ytGx3qy6cF0I%2B5X%2BDPk%2BmoQ6jOOI8wEMWiFD%2FmTxHxtx13Vbv4quuEI8wSWysMZI9IwwdZLajtnibodf7VAFJudULcbm430ALELH3LvXDXDyDMttzl3dW0aW8rgocjxMcQUaSDv%2BcZbCqo49UrvY27Bh0ZYGsWeibBDe1zU2t1xkm4bp55tTNVy5CJgoKRDd1YiRDUZtqcKyvI8A%2FsK8sPVCkPMcVLEuGwW9LSHYP9L7xsSRcNNlf06JS2GXKQoSedQY5puowgH2%2ByGqzIIwBJ9HYGnvVFo7nN696ehrU8tWXu4g66KnvnzQf%2F4aHru1k2W%2BUI34jsEeGNUje6Ol%2Fj79%2BcvzL0vQrONAahIPxDtpA1elmHlFU2YZD6X7sIVTFVwMfSLHtrcbQLHH8ju7Py%2Ff9QX%2FjNj2lteO2ZWgX3nIe1m%2FCE4hLJrohPeTPodIBydPuIvtSQ5NAS%2FHCyVRb6IHDr1QXVpuvV6afkbXPevtiWgh03V9V9sPR2pRGp8mXPPGlCm1Pd%2F5K5oIAF5ilQwp6dH1ZiPTvmHcXycjD0rt%2BgMcHnMNGiib0GOqUBRg%2BEo1PN6MyMdT7ROWX%2BrgSGNVhjBBcAjoAtleqpsIvEq97Jei7yPkhdRYpp5UVNpEq9peXIz4cZN0on1g6ESar0Cul8PUSc7aTqPIl%2BfWuCFPMIlpvbkagiIiN1ltilRwaBOFnOWQ93k0bh6F4NUlrYibBAVjKM0FSEY4oxjktj9begescGi82UBvgHoQKkSDDo3DIDVZDpylLjaPxoI0vjog5L&X-Amz-Signature=7eac6a0216082f899dfe31cf16a1de8bff4561c008c5c646b60fda21c7b8ec52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMC7OW4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDRByAcUQ4wT6wrQKe3%2BloROBCbuA2jN0C3tB5eQ7EX8wIgR%2BjYzmGaiWXvkvgqrmUL2RAHQ7VHxv67F8OXxTS19Ucq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDG0XiXjEcOsd3K3G7CrcA1BWbWh7RW%2FhvwTL1nJDzXlvMneKICfIalfakeCtv6Qfh07j8CfPE93vGgC2%2FhUFrjnLkqUwq5ytGx3qy6cF0I%2B5X%2BDPk%2BmoQ6jOOI8wEMWiFD%2FmTxHxtx13Vbv4quuEI8wSWysMZI9IwwdZLajtnibodf7VAFJudULcbm430ALELH3LvXDXDyDMttzl3dW0aW8rgocjxMcQUaSDv%2BcZbCqo49UrvY27Bh0ZYGsWeibBDe1zU2t1xkm4bp55tTNVy5CJgoKRDd1YiRDUZtqcKyvI8A%2FsK8sPVCkPMcVLEuGwW9LSHYP9L7xsSRcNNlf06JS2GXKQoSedQY5puowgH2%2ByGqzIIwBJ9HYGnvVFo7nN696ehrU8tWXu4g66KnvnzQf%2F4aHru1k2W%2BUI34jsEeGNUje6Ol%2Fj79%2BcvzL0vQrONAahIPxDtpA1elmHlFU2YZD6X7sIVTFVwMfSLHtrcbQLHH8ju7Py%2Ff9QX%2FjNj2lteO2ZWgX3nIe1m%2FCE4hLJrohPeTPodIBydPuIvtSQ5NAS%2FHCyVRb6IHDr1QXVpuvV6afkbXPevtiWgh03V9V9sPR2pRGp8mXPPGlCm1Pd%2F5K5oIAF5ilQwp6dH1ZiPTvmHcXycjD0rt%2BgMcHnMNGiib0GOqUBRg%2BEo1PN6MyMdT7ROWX%2BrgSGNVhjBBcAjoAtleqpsIvEq97Jei7yPkhdRYpp5UVNpEq9peXIz4cZN0on1g6ESar0Cul8PUSc7aTqPIl%2BfWuCFPMIlpvbkagiIiN1ltilRwaBOFnOWQ93k0bh6F4NUlrYibBAVjKM0FSEY4oxjktj9begescGi82UBvgHoQKkSDDo3DIDVZDpylLjaPxoI0vjog5L&X-Amz-Signature=79c9bcb6f012ff343dd78e3c6147fbaa3360e90afe3554ba045522816a340c28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
