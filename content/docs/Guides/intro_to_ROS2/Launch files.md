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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R64NIGA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAz6Tf4fOpAnn590pHikXrssOtQREnqO4wnNDmnhnl%2FsAiEA2XgCkZoVQnp8KjSkvd3IVUiSnXcKtit7J9Qo%2Br1beCIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWhMFNxPX3tlna0tyrcA4aQvlISRkYZXzKE95mVrEJybDuxk3b%2BJqzmrcUrdp5e4pMvSKZ%2B%2FfNvHLL3ua6wvq7wxx41nSKYDQtVBwnwYn%2BIEEcMcvzIKYG2QpnBomd3nMvcRQRzJpCe6NvH650rAwohMMf5gns4elyGKH1Ys0WsRCPtqRdpH9BVNza%2BfBrHU0xyMg19g3xUUYOL7Bt1SLyhJWvHoqKnOqTdHHPuVvOXh%2F9bZDlQXejMBWmqMq8J5%2F7lc9SJehH2kEa%2BmM3Uii0hw7M6%2FRo25aF1%2F8Oi%2FKlFgkK1qGimIFI5iGV1AFft7A%2FeomIYGDmMaI%2BrWtnBSSx%2Fh%2FcloVwzkpwDrHhCCOTcpD7fpg13IkkAx2dT8z2A4kWf%2F5N8FoWbN%2Bwqubt%2FTVi0%2Brea0b7Zlkzni38tCgNcLEn3lyaQsCCByXlD9cL%2BCWC8sI4LGX87A4C6jzPCXPXIlfE8rapXCa81BNDCIt7kQ3guFW%2FRXWKzQ63gLPGmzlxcjOI05MBzBhBBTD5jehWQ3P3%2B%2BDSn%2BtX5lbSxhuKXORkai%2BAVU6%2BCgymyJq%2F%2BNozuExozGN3S2WxLnIvwrau03n0MeXYGm6bpjFplwUr0ymQKGmLYeKVwyv6YvTCwR3pzDK8jERDyBAsYMMrHsb8GOqUBnCoh4GmXwXFOooLlrbsKxY9Kmi51Wd3nMz30ppcAeEPD7aZOJOGHFZazq9805NnIvQVGZl%2Fyqyb6wT%2B9EARLlCc7NKioLJy3wlxWPmWQ9TpEGCgPxudUpXgVe2%2BS81m7Zj%2ByO6bt%2BsrxtnV5I0M1BRVOyMZ%2F%2FFeDEjhYWwSiUvXLOHL33VzAFSDC8FQ5PpOqcvnZH6MIrelHn5PfhAo6TPr6o2V4&X-Amz-Signature=1d7d52f649a8b0666ebac4c5db45fa76ba6b1a5b0c32cb768c411455284ef7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R64NIGA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAz6Tf4fOpAnn590pHikXrssOtQREnqO4wnNDmnhnl%2FsAiEA2XgCkZoVQnp8KjSkvd3IVUiSnXcKtit7J9Qo%2Br1beCIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWhMFNxPX3tlna0tyrcA4aQvlISRkYZXzKE95mVrEJybDuxk3b%2BJqzmrcUrdp5e4pMvSKZ%2B%2FfNvHLL3ua6wvq7wxx41nSKYDQtVBwnwYn%2BIEEcMcvzIKYG2QpnBomd3nMvcRQRzJpCe6NvH650rAwohMMf5gns4elyGKH1Ys0WsRCPtqRdpH9BVNza%2BfBrHU0xyMg19g3xUUYOL7Bt1SLyhJWvHoqKnOqTdHHPuVvOXh%2F9bZDlQXejMBWmqMq8J5%2F7lc9SJehH2kEa%2BmM3Uii0hw7M6%2FRo25aF1%2F8Oi%2FKlFgkK1qGimIFI5iGV1AFft7A%2FeomIYGDmMaI%2BrWtnBSSx%2Fh%2FcloVwzkpwDrHhCCOTcpD7fpg13IkkAx2dT8z2A4kWf%2F5N8FoWbN%2Bwqubt%2FTVi0%2Brea0b7Zlkzni38tCgNcLEn3lyaQsCCByXlD9cL%2BCWC8sI4LGX87A4C6jzPCXPXIlfE8rapXCa81BNDCIt7kQ3guFW%2FRXWKzQ63gLPGmzlxcjOI05MBzBhBBTD5jehWQ3P3%2B%2BDSn%2BtX5lbSxhuKXORkai%2BAVU6%2BCgymyJq%2F%2BNozuExozGN3S2WxLnIvwrau03n0MeXYGm6bpjFplwUr0ymQKGmLYeKVwyv6YvTCwR3pzDK8jERDyBAsYMMrHsb8GOqUBnCoh4GmXwXFOooLlrbsKxY9Kmi51Wd3nMz30ppcAeEPD7aZOJOGHFZazq9805NnIvQVGZl%2Fyqyb6wT%2B9EARLlCc7NKioLJy3wlxWPmWQ9TpEGCgPxudUpXgVe2%2BS81m7Zj%2ByO6bt%2BsrxtnV5I0M1BRVOyMZ%2F%2FFeDEjhYWwSiUvXLOHL33VzAFSDC8FQ5PpOqcvnZH6MIrelHn5PfhAo6TPr6o2V4&X-Amz-Signature=2c21d976babd951e074ca976b4f4c8eaac1a3251ab892c93fe40869db0e59117&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R64NIGA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAz6Tf4fOpAnn590pHikXrssOtQREnqO4wnNDmnhnl%2FsAiEA2XgCkZoVQnp8KjSkvd3IVUiSnXcKtit7J9Qo%2Br1beCIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWhMFNxPX3tlna0tyrcA4aQvlISRkYZXzKE95mVrEJybDuxk3b%2BJqzmrcUrdp5e4pMvSKZ%2B%2FfNvHLL3ua6wvq7wxx41nSKYDQtVBwnwYn%2BIEEcMcvzIKYG2QpnBomd3nMvcRQRzJpCe6NvH650rAwohMMf5gns4elyGKH1Ys0WsRCPtqRdpH9BVNza%2BfBrHU0xyMg19g3xUUYOL7Bt1SLyhJWvHoqKnOqTdHHPuVvOXh%2F9bZDlQXejMBWmqMq8J5%2F7lc9SJehH2kEa%2BmM3Uii0hw7M6%2FRo25aF1%2F8Oi%2FKlFgkK1qGimIFI5iGV1AFft7A%2FeomIYGDmMaI%2BrWtnBSSx%2Fh%2FcloVwzkpwDrHhCCOTcpD7fpg13IkkAx2dT8z2A4kWf%2F5N8FoWbN%2Bwqubt%2FTVi0%2Brea0b7Zlkzni38tCgNcLEn3lyaQsCCByXlD9cL%2BCWC8sI4LGX87A4C6jzPCXPXIlfE8rapXCa81BNDCIt7kQ3guFW%2FRXWKzQ63gLPGmzlxcjOI05MBzBhBBTD5jehWQ3P3%2B%2BDSn%2BtX5lbSxhuKXORkai%2BAVU6%2BCgymyJq%2F%2BNozuExozGN3S2WxLnIvwrau03n0MeXYGm6bpjFplwUr0ymQKGmLYeKVwyv6YvTCwR3pzDK8jERDyBAsYMMrHsb8GOqUBnCoh4GmXwXFOooLlrbsKxY9Kmi51Wd3nMz30ppcAeEPD7aZOJOGHFZazq9805NnIvQVGZl%2Fyqyb6wT%2B9EARLlCc7NKioLJy3wlxWPmWQ9TpEGCgPxudUpXgVe2%2BS81m7Zj%2ByO6bt%2BsrxtnV5I0M1BRVOyMZ%2F%2FFeDEjhYWwSiUvXLOHL33VzAFSDC8FQ5PpOqcvnZH6MIrelHn5PfhAo6TPr6o2V4&X-Amz-Signature=7c836aa973a73702250415dff37ffd3ba67b55ef842c7918dd80e32ac82f8eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
