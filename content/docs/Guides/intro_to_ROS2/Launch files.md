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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7IQCP6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU99qrlpL0jl7nMAGuDALfjxB4f8A5Q5NKoawHINYQoAIhAI1hbE1%2B9QRngfHPhFQQaaRXJWBSdExYiJ1lFSrxsQrGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FcDSz4pzbOJjTUMq3AMa21d3HG2A5Cp5qJQf%2FN9FQ1TxqVmloYIuHiTkn7oKPOVFIp%2BhsOLOcUKgug2IYbcqj6Cm9DnErslbInUHErXQDE7Mwo9Ql7%2FSc4I6sEx6H9Yv1HcbmZoAQ3Xyomf7wczYGlcuGWXtYRbZrve75Z5N%2Bs%2FyV0Eg4hjb2wNBApqVjXyPAO256f9KcTnOVEz7RG%2BT96LzPVPTYZnkpRV2fyn5ez3yc7lyDewbEGsif44H%2FbXCTSHnwXC4IBKn3gdqhj%2BNrJmYi34Z61AzOphpuNEmUUAYkhCEV6yBUNhse56CtC1Ff%2Bya6nE9oRsbbg18noNFOFPhirMW1FlQklmejs%2BBmoktD7lCNHD9RqjsK96l%2BpAwnn4z%2BLaXGY6LbcFjBkS1%2B35tr641yI2yzY564k70SHTjudGvjE67Srwi7Z2lv6JPHB3mi9UP5F23wQaEgJDeUdeVxu7pot0hHWoSsYeZHXRptBricwlLv34sOmnqregnwIaSSO%2BvOnyY0o8jLGDdzKQwN%2BXySjnaPeBK47oOnKhQAOnkUbu6Q2EkGFnCREhGZ7KrIgFiX7nsTP15%2BLkkMfj9YvT%2FNd7ROXPSfFuhRGcVW7cgPFwkZby155UkRZusX7yvekGlhXFdCTC4t6XCBjqkAeLDGdaBmGqrre5VVGCz5oSMdXsm56P7upKEoea55uqCHMQA4NItCFM91J5cT5t28fKmbo7lQch3NZyfx9Cg3%2B5Y%2FGtgBawSwC%2FJZGNsE6ajrDtDSchX7BDrMiWStIwwwyCVjiD0iQXGVrC%2B0authX%2FYTp4WhlqXvKGYVn3rxx6MmGwduYjx5oh01i%2Fy6uA9Ly51Tog5MMgUeqT%2BnO7bUm7vbuGi&X-Amz-Signature=25d9d4b39ca765fa348f7724f20b156c96de874b2e8354355677cf47e9460e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7IQCP6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU99qrlpL0jl7nMAGuDALfjxB4f8A5Q5NKoawHINYQoAIhAI1hbE1%2B9QRngfHPhFQQaaRXJWBSdExYiJ1lFSrxsQrGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FcDSz4pzbOJjTUMq3AMa21d3HG2A5Cp5qJQf%2FN9FQ1TxqVmloYIuHiTkn7oKPOVFIp%2BhsOLOcUKgug2IYbcqj6Cm9DnErslbInUHErXQDE7Mwo9Ql7%2FSc4I6sEx6H9Yv1HcbmZoAQ3Xyomf7wczYGlcuGWXtYRbZrve75Z5N%2Bs%2FyV0Eg4hjb2wNBApqVjXyPAO256f9KcTnOVEz7RG%2BT96LzPVPTYZnkpRV2fyn5ez3yc7lyDewbEGsif44H%2FbXCTSHnwXC4IBKn3gdqhj%2BNrJmYi34Z61AzOphpuNEmUUAYkhCEV6yBUNhse56CtC1Ff%2Bya6nE9oRsbbg18noNFOFPhirMW1FlQklmejs%2BBmoktD7lCNHD9RqjsK96l%2BpAwnn4z%2BLaXGY6LbcFjBkS1%2B35tr641yI2yzY564k70SHTjudGvjE67Srwi7Z2lv6JPHB3mi9UP5F23wQaEgJDeUdeVxu7pot0hHWoSsYeZHXRptBricwlLv34sOmnqregnwIaSSO%2BvOnyY0o8jLGDdzKQwN%2BXySjnaPeBK47oOnKhQAOnkUbu6Q2EkGFnCREhGZ7KrIgFiX7nsTP15%2BLkkMfj9YvT%2FNd7ROXPSfFuhRGcVW7cgPFwkZby155UkRZusX7yvekGlhXFdCTC4t6XCBjqkAeLDGdaBmGqrre5VVGCz5oSMdXsm56P7upKEoea55uqCHMQA4NItCFM91J5cT5t28fKmbo7lQch3NZyfx9Cg3%2B5Y%2FGtgBawSwC%2FJZGNsE6ajrDtDSchX7BDrMiWStIwwwyCVjiD0iQXGVrC%2B0authX%2FYTp4WhlqXvKGYVn3rxx6MmGwduYjx5oh01i%2Fy6uA9Ly51Tog5MMgUeqT%2BnO7bUm7vbuGi&X-Amz-Signature=0d6a6bfd2f984e6922bef932376076add14a11552aa5708bfb5307082511fa94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7IQCP6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU99qrlpL0jl7nMAGuDALfjxB4f8A5Q5NKoawHINYQoAIhAI1hbE1%2B9QRngfHPhFQQaaRXJWBSdExYiJ1lFSrxsQrGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FcDSz4pzbOJjTUMq3AMa21d3HG2A5Cp5qJQf%2FN9FQ1TxqVmloYIuHiTkn7oKPOVFIp%2BhsOLOcUKgug2IYbcqj6Cm9DnErslbInUHErXQDE7Mwo9Ql7%2FSc4I6sEx6H9Yv1HcbmZoAQ3Xyomf7wczYGlcuGWXtYRbZrve75Z5N%2Bs%2FyV0Eg4hjb2wNBApqVjXyPAO256f9KcTnOVEz7RG%2BT96LzPVPTYZnkpRV2fyn5ez3yc7lyDewbEGsif44H%2FbXCTSHnwXC4IBKn3gdqhj%2BNrJmYi34Z61AzOphpuNEmUUAYkhCEV6yBUNhse56CtC1Ff%2Bya6nE9oRsbbg18noNFOFPhirMW1FlQklmejs%2BBmoktD7lCNHD9RqjsK96l%2BpAwnn4z%2BLaXGY6LbcFjBkS1%2B35tr641yI2yzY564k70SHTjudGvjE67Srwi7Z2lv6JPHB3mi9UP5F23wQaEgJDeUdeVxu7pot0hHWoSsYeZHXRptBricwlLv34sOmnqregnwIaSSO%2BvOnyY0o8jLGDdzKQwN%2BXySjnaPeBK47oOnKhQAOnkUbu6Q2EkGFnCREhGZ7KrIgFiX7nsTP15%2BLkkMfj9YvT%2FNd7ROXPSfFuhRGcVW7cgPFwkZby155UkRZusX7yvekGlhXFdCTC4t6XCBjqkAeLDGdaBmGqrre5VVGCz5oSMdXsm56P7upKEoea55uqCHMQA4NItCFM91J5cT5t28fKmbo7lQch3NZyfx9Cg3%2B5Y%2FGtgBawSwC%2FJZGNsE6ajrDtDSchX7BDrMiWStIwwwyCVjiD0iQXGVrC%2B0authX%2FYTp4WhlqXvKGYVn3rxx6MmGwduYjx5oh01i%2Fy6uA9Ly51Tog5MMgUeqT%2BnO7bUm7vbuGi&X-Amz-Signature=a43af286ceec8a6f6c822782b0031966a05a1dd52035880732b80a1b3e6638b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
