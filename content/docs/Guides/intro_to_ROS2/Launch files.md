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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5BNXGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHkmhzHpNbsW8IGkYNxsj3qZhr%2BR4x6l6hFnaJNh3YSMAiAFQjsczag6K3Cf5WajJ5LyAtRnmh2ANRAZHbOhitnS5Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMRFfEaYQWIe4nF9e8KtwD%2Bds6vkZS4LBrDbRea6h5n86JhQcb0tcLqejurFK1weN7W7CMp0FVVnLNEPV5QYmfpVjUKjTMqHjGA42pGDM5S5zuPD9Frz2pM3yA5L9UmN93JlaoZ1hFtyE87eHNUJdaPhL4BFK2G5nrer%2BKGZ%2FX4lOofUC5gtcbtTeRaRduy%2BXogY%2FJcCf1%2Bxj40dzDq2r0S%2Bx65IWMNfTe6R4S0dqUy5uh4YXzg6GWUZXzfg5BT603X9hPN8o2sWcCsLckpSdo0U7e%2BN1rSsc285FrHdQ3iAKt6YkvFVbEKZBtIB0qZ%2BvPi%2FQs5Iln8a4MmoOyutvcXCwzCHKMWmum18QYYX3usui8AsITMQnSnwrdm7Xyy1v0H%2FnnD6hx2GSXvBPXUsQRbwWhKSlmaRpi7f1YcILf0HoRV%2BJwYKnxOZgoLpU9sqRy6zmrNPo%2F29fxITxGQ%2F0AizGl4v42VQSNjmTW1VyECT6HEM%2BeT%2BuLbUs2GqpmaDVIM575ZHFCZS0POc0eb9YLD6GMABuHzlnIvHLAjXQv9atWbZHZBL5rdiTspzakrczxDNhNjKjEtJXzeRyy7R9i2FX3wmnSq5s9l5vv4qiXSLQYp7RUr90iWlRx0PkkodUmgtGDJzsHw%2BHqVREwqNGPxAY6pgErtk%2FzG8aB0BYQCXBSbAdRMnFmfri4w5tgmPSHwE0QfAd47dMGe%2FUgLzXakgCNwSnQqogNUxX7LHlqyIzbBT0G%2BU4HcqSklKCFms3UaAz8qtr4REry95pPyqXxhZs%2B1wfZxZ7BArrzuoGGY%2B9oyyxGI0Z1ukTUv3TRFcq%2B40X8saH9sWHYkaAGcVMVyzW5itocpKdyqvuBmSQr7aBfcsbE2An2GQya&X-Amz-Signature=ea50c105552da197c1a76c1e9c1b28bfade282515878f90aa90332393a4fe38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5BNXGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHkmhzHpNbsW8IGkYNxsj3qZhr%2BR4x6l6hFnaJNh3YSMAiAFQjsczag6K3Cf5WajJ5LyAtRnmh2ANRAZHbOhitnS5Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMRFfEaYQWIe4nF9e8KtwD%2Bds6vkZS4LBrDbRea6h5n86JhQcb0tcLqejurFK1weN7W7CMp0FVVnLNEPV5QYmfpVjUKjTMqHjGA42pGDM5S5zuPD9Frz2pM3yA5L9UmN93JlaoZ1hFtyE87eHNUJdaPhL4BFK2G5nrer%2BKGZ%2FX4lOofUC5gtcbtTeRaRduy%2BXogY%2FJcCf1%2Bxj40dzDq2r0S%2Bx65IWMNfTe6R4S0dqUy5uh4YXzg6GWUZXzfg5BT603X9hPN8o2sWcCsLckpSdo0U7e%2BN1rSsc285FrHdQ3iAKt6YkvFVbEKZBtIB0qZ%2BvPi%2FQs5Iln8a4MmoOyutvcXCwzCHKMWmum18QYYX3usui8AsITMQnSnwrdm7Xyy1v0H%2FnnD6hx2GSXvBPXUsQRbwWhKSlmaRpi7f1YcILf0HoRV%2BJwYKnxOZgoLpU9sqRy6zmrNPo%2F29fxITxGQ%2F0AizGl4v42VQSNjmTW1VyECT6HEM%2BeT%2BuLbUs2GqpmaDVIM575ZHFCZS0POc0eb9YLD6GMABuHzlnIvHLAjXQv9atWbZHZBL5rdiTspzakrczxDNhNjKjEtJXzeRyy7R9i2FX3wmnSq5s9l5vv4qiXSLQYp7RUr90iWlRx0PkkodUmgtGDJzsHw%2BHqVREwqNGPxAY6pgErtk%2FzG8aB0BYQCXBSbAdRMnFmfri4w5tgmPSHwE0QfAd47dMGe%2FUgLzXakgCNwSnQqogNUxX7LHlqyIzbBT0G%2BU4HcqSklKCFms3UaAz8qtr4REry95pPyqXxhZs%2B1wfZxZ7BArrzuoGGY%2B9oyyxGI0Z1ukTUv3TRFcq%2B40X8saH9sWHYkaAGcVMVyzW5itocpKdyqvuBmSQr7aBfcsbE2An2GQya&X-Amz-Signature=fd6815aff9bf4440b822a3dc1f7f436ae07fb602f2f051bdb62a425bd42632f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5BNXGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHkmhzHpNbsW8IGkYNxsj3qZhr%2BR4x6l6hFnaJNh3YSMAiAFQjsczag6K3Cf5WajJ5LyAtRnmh2ANRAZHbOhitnS5Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMRFfEaYQWIe4nF9e8KtwD%2Bds6vkZS4LBrDbRea6h5n86JhQcb0tcLqejurFK1weN7W7CMp0FVVnLNEPV5QYmfpVjUKjTMqHjGA42pGDM5S5zuPD9Frz2pM3yA5L9UmN93JlaoZ1hFtyE87eHNUJdaPhL4BFK2G5nrer%2BKGZ%2FX4lOofUC5gtcbtTeRaRduy%2BXogY%2FJcCf1%2Bxj40dzDq2r0S%2Bx65IWMNfTe6R4S0dqUy5uh4YXzg6GWUZXzfg5BT603X9hPN8o2sWcCsLckpSdo0U7e%2BN1rSsc285FrHdQ3iAKt6YkvFVbEKZBtIB0qZ%2BvPi%2FQs5Iln8a4MmoOyutvcXCwzCHKMWmum18QYYX3usui8AsITMQnSnwrdm7Xyy1v0H%2FnnD6hx2GSXvBPXUsQRbwWhKSlmaRpi7f1YcILf0HoRV%2BJwYKnxOZgoLpU9sqRy6zmrNPo%2F29fxITxGQ%2F0AizGl4v42VQSNjmTW1VyECT6HEM%2BeT%2BuLbUs2GqpmaDVIM575ZHFCZS0POc0eb9YLD6GMABuHzlnIvHLAjXQv9atWbZHZBL5rdiTspzakrczxDNhNjKjEtJXzeRyy7R9i2FX3wmnSq5s9l5vv4qiXSLQYp7RUr90iWlRx0PkkodUmgtGDJzsHw%2BHqVREwqNGPxAY6pgErtk%2FzG8aB0BYQCXBSbAdRMnFmfri4w5tgmPSHwE0QfAd47dMGe%2FUgLzXakgCNwSnQqogNUxX7LHlqyIzbBT0G%2BU4HcqSklKCFms3UaAz8qtr4REry95pPyqXxhZs%2B1wfZxZ7BArrzuoGGY%2B9oyyxGI0Z1ukTUv3TRFcq%2B40X8saH9sWHYkaAGcVMVyzW5itocpKdyqvuBmSQr7aBfcsbE2An2GQya&X-Amz-Signature=e8b9f18c6dafd88f336d8b6c2a638c008136b38fd25b673ae3bb116ba6296e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
