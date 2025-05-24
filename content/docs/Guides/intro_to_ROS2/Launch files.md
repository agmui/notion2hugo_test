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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7COHU2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDGa9XFTfwI%2FdB9nTCMPj93OJcv17kPwa7XGVLUCoqM4AIgaDqfw%2F%2FoQSAJBxBH%2FJ6WEjPV7lfZXj6cxNO%2B3RdWYxsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBF5uJOEnkIPz0Nl6yrcA05a96YwtprzVSeDnP9Vn2tpfcr7EKQGwfvaZ5n84F8iGpdUitmBFpgd3P1OSTEk5gQo5HJC2BUSaTTEQTRsuGplAST%2BnEgyMtKrGzkPfWhMrXnLFrimpQB7qUMso2%2FOdXP5pGT7BSJES01T8U%2B6IzFV9prPfXLY7SYL7Edd56BpdI2wZqMdOLfd1gM6Ob33yZ7hZV61qsyHsKScY7rDSWPlgEW%2F6MkEf%2FQfFE55%2F%2Fh5o%2BlylzcnsB2ZC7EQKH5lGWwzbD13Mb7aM9gWBVA8l2xyezljSLJoFWAmpDTX8WkdqJs8iojthBdvqTE1cOj%2Bfh21Bn2T3u%2FjLkqdm6%2BhQiwyX8rQrbQ5P08fo7%2BsJX1Sy6mRebxsolkPVElEiacWR9JTqYuJ55gqph2jxF%2FUUisk9H7hGMjUgCs%2FZKYYSQ1c38IkPSOlLFJuku4ThAckGXnW0Fojhh0pNBDe56tMMFIPWhCB3FiCKrJxVHXQway%2BJ%2Fu0zpsSbb3wjmFTOq2B4yZpGjBV1G9JLVit4kbSRAeeJqi4AS%2BSvPTyFhMohhDvoV2yybD0mav79G4%2Bbt5QFop3g9rz4fRvuM2FlmOs63DbyjFrxV1Jlq7%2BJ1cUuoSx4c98CRVpWaxEAVqWMLLDyMEGOqUBk2R%2BSHv1%2Bt6mkK2riVSo9oTYzXOSWrlRJIxc9%2F0t4kV2fWJidcObmB3DPI8P5xbDPo768UEkCn2%2FBWHI%2BGQ7SCevW3Vkw3jmgBpbrQBB%2F3AIlJ8hqIN1qqJrw0WA6a46aeF73a3DevSYP8CHBcxlG15%2FatSRdBWcE90sbONlBmT0VRuzhBp4p%2BcoAMRxnMrmOI1lA7chcG3Ocv4V8DSLg3VeZJmv&X-Amz-Signature=b5786937466a5477027d2cda1b860e0b415e5d12d1e2ba34169f7dfb42f979ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7COHU2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDGa9XFTfwI%2FdB9nTCMPj93OJcv17kPwa7XGVLUCoqM4AIgaDqfw%2F%2FoQSAJBxBH%2FJ6WEjPV7lfZXj6cxNO%2B3RdWYxsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBF5uJOEnkIPz0Nl6yrcA05a96YwtprzVSeDnP9Vn2tpfcr7EKQGwfvaZ5n84F8iGpdUitmBFpgd3P1OSTEk5gQo5HJC2BUSaTTEQTRsuGplAST%2BnEgyMtKrGzkPfWhMrXnLFrimpQB7qUMso2%2FOdXP5pGT7BSJES01T8U%2B6IzFV9prPfXLY7SYL7Edd56BpdI2wZqMdOLfd1gM6Ob33yZ7hZV61qsyHsKScY7rDSWPlgEW%2F6MkEf%2FQfFE55%2F%2Fh5o%2BlylzcnsB2ZC7EQKH5lGWwzbD13Mb7aM9gWBVA8l2xyezljSLJoFWAmpDTX8WkdqJs8iojthBdvqTE1cOj%2Bfh21Bn2T3u%2FjLkqdm6%2BhQiwyX8rQrbQ5P08fo7%2BsJX1Sy6mRebxsolkPVElEiacWR9JTqYuJ55gqph2jxF%2FUUisk9H7hGMjUgCs%2FZKYYSQ1c38IkPSOlLFJuku4ThAckGXnW0Fojhh0pNBDe56tMMFIPWhCB3FiCKrJxVHXQway%2BJ%2Fu0zpsSbb3wjmFTOq2B4yZpGjBV1G9JLVit4kbSRAeeJqi4AS%2BSvPTyFhMohhDvoV2yybD0mav79G4%2Bbt5QFop3g9rz4fRvuM2FlmOs63DbyjFrxV1Jlq7%2BJ1cUuoSx4c98CRVpWaxEAVqWMLLDyMEGOqUBk2R%2BSHv1%2Bt6mkK2riVSo9oTYzXOSWrlRJIxc9%2F0t4kV2fWJidcObmB3DPI8P5xbDPo768UEkCn2%2FBWHI%2BGQ7SCevW3Vkw3jmgBpbrQBB%2F3AIlJ8hqIN1qqJrw0WA6a46aeF73a3DevSYP8CHBcxlG15%2FatSRdBWcE90sbONlBmT0VRuzhBp4p%2BcoAMRxnMrmOI1lA7chcG3Ocv4V8DSLg3VeZJmv&X-Amz-Signature=4d03b611931e42bf1910477457fe635094f999dff07c0ed66957cdd3378e5e04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7COHU2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDGa9XFTfwI%2FdB9nTCMPj93OJcv17kPwa7XGVLUCoqM4AIgaDqfw%2F%2FoQSAJBxBH%2FJ6WEjPV7lfZXj6cxNO%2B3RdWYxsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBF5uJOEnkIPz0Nl6yrcA05a96YwtprzVSeDnP9Vn2tpfcr7EKQGwfvaZ5n84F8iGpdUitmBFpgd3P1OSTEk5gQo5HJC2BUSaTTEQTRsuGplAST%2BnEgyMtKrGzkPfWhMrXnLFrimpQB7qUMso2%2FOdXP5pGT7BSJES01T8U%2B6IzFV9prPfXLY7SYL7Edd56BpdI2wZqMdOLfd1gM6Ob33yZ7hZV61qsyHsKScY7rDSWPlgEW%2F6MkEf%2FQfFE55%2F%2Fh5o%2BlylzcnsB2ZC7EQKH5lGWwzbD13Mb7aM9gWBVA8l2xyezljSLJoFWAmpDTX8WkdqJs8iojthBdvqTE1cOj%2Bfh21Bn2T3u%2FjLkqdm6%2BhQiwyX8rQrbQ5P08fo7%2BsJX1Sy6mRebxsolkPVElEiacWR9JTqYuJ55gqph2jxF%2FUUisk9H7hGMjUgCs%2FZKYYSQ1c38IkPSOlLFJuku4ThAckGXnW0Fojhh0pNBDe56tMMFIPWhCB3FiCKrJxVHXQway%2BJ%2Fu0zpsSbb3wjmFTOq2B4yZpGjBV1G9JLVit4kbSRAeeJqi4AS%2BSvPTyFhMohhDvoV2yybD0mav79G4%2Bbt5QFop3g9rz4fRvuM2FlmOs63DbyjFrxV1Jlq7%2BJ1cUuoSx4c98CRVpWaxEAVqWMLLDyMEGOqUBk2R%2BSHv1%2Bt6mkK2riVSo9oTYzXOSWrlRJIxc9%2F0t4kV2fWJidcObmB3DPI8P5xbDPo768UEkCn2%2FBWHI%2BGQ7SCevW3Vkw3jmgBpbrQBB%2F3AIlJ8hqIN1qqJrw0WA6a46aeF73a3DevSYP8CHBcxlG15%2FatSRdBWcE90sbONlBmT0VRuzhBp4p%2BcoAMRxnMrmOI1lA7chcG3Ocv4V8DSLg3VeZJmv&X-Amz-Signature=371ac91804b4135ec176f92e9d59ff78312eed6cb6619e547ff4b4944ecdec55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
