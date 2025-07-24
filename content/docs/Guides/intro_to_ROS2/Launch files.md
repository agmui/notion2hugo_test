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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHUF5JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICwoEaj8HC1x46piP7vnp0jiZ5zWTaPIQVIwES2Zev%2BHAiBxXN%2Ffo7xdMCbzgNZkAqssXEJCl%2BySTdiPTPMHS%2Blryyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMO%2B%2BQpV6c%2BDQ1TYtSKtwDFPOptY0ncvUXLhpc9VNyR8DcWv7R7%2F7UNHgq4dqpfH4r5nTdwahVbhXbN5KwqPo5gvJc4YQgcmxNBMmPQoecgZ1IAMaEYPPVeCbxokOuxYdcl47xxawH6NhDnWxzodNrmXJGDZ6hUIGCEiAkTv%2B9JufGBJhJ2M9zCXOCzRoi1SU8PonipDNaVMOUD8IO%2BX2cygQ9e%2Ftjf3PRrdQGWWmPum%2BM30lTM%2F4sOJbHr%2BVZCQ%2B62dwm17X0Bwgg53njwT2XXU2p5e0JatVLmYFdhOlFurkbTNE%2FD5Thil5m5umv4ufW%2BPdM3qw6trdtcuLGhJ6UL7AHBB7ynwqN0B5bbqjf3RJ6zxP64EQop%2Fsb6BkxD3rmqfCzRZCz2ZCFhMfJo%2FDqCa9oB0l9lbeVezr6JGjVlhKag32sbAHu4Dpzgl3nR%2BJeGQ2%2F%2FAVtHSAImEXo0gCOBuOyiLAS5AnCThNh93SPxfqF%2FfYe3J6IrCHDZO2VEuO6nERl%2BGAjFso0aS9yDeiamBTNsEg4VXqRAXvRuJNsqswbkT%2BTuZ%2FKk7Ffk4OUbw7Wv0BXKdGlE%2BuBtb6XaG%2BXLdeJtiBXpNN8vx05%2F4MbinLaft%2F99uF1qWphEnl8SfSfzjA39Bh%2B1H6zVQswhLKJxAY6pgHRszuVCXuPTYzGqZ66XyUaj5oDJ%2BDWXPVSn1BS3OIZ0Iq9rriNjbQ0RpnuEdOUQn1TB7P0QZEYoBBpgh2mHShEmD%2BDHX6yXeX78MtLiwhc7jV69XlsBt3qdzh3BdGpYTJoCaxGn9jqN0fQvSf%2Fl0LOq%2BSCUvIyKF2eE41sFTWEQSugAB4V4PEcalDSE2YrJW7FRrIetfKWdR9yTOdbMBst3DzAXvxt&X-Amz-Signature=06f33b75b162e49ebf04a1602aa3430d6fc07caba4fb6d96b3958e0315a22f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHUF5JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICwoEaj8HC1x46piP7vnp0jiZ5zWTaPIQVIwES2Zev%2BHAiBxXN%2Ffo7xdMCbzgNZkAqssXEJCl%2BySTdiPTPMHS%2Blryyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMO%2B%2BQpV6c%2BDQ1TYtSKtwDFPOptY0ncvUXLhpc9VNyR8DcWv7R7%2F7UNHgq4dqpfH4r5nTdwahVbhXbN5KwqPo5gvJc4YQgcmxNBMmPQoecgZ1IAMaEYPPVeCbxokOuxYdcl47xxawH6NhDnWxzodNrmXJGDZ6hUIGCEiAkTv%2B9JufGBJhJ2M9zCXOCzRoi1SU8PonipDNaVMOUD8IO%2BX2cygQ9e%2Ftjf3PRrdQGWWmPum%2BM30lTM%2F4sOJbHr%2BVZCQ%2B62dwm17X0Bwgg53njwT2XXU2p5e0JatVLmYFdhOlFurkbTNE%2FD5Thil5m5umv4ufW%2BPdM3qw6trdtcuLGhJ6UL7AHBB7ynwqN0B5bbqjf3RJ6zxP64EQop%2Fsb6BkxD3rmqfCzRZCz2ZCFhMfJo%2FDqCa9oB0l9lbeVezr6JGjVlhKag32sbAHu4Dpzgl3nR%2BJeGQ2%2F%2FAVtHSAImEXo0gCOBuOyiLAS5AnCThNh93SPxfqF%2FfYe3J6IrCHDZO2VEuO6nERl%2BGAjFso0aS9yDeiamBTNsEg4VXqRAXvRuJNsqswbkT%2BTuZ%2FKk7Ffk4OUbw7Wv0BXKdGlE%2BuBtb6XaG%2BXLdeJtiBXpNN8vx05%2F4MbinLaft%2F99uF1qWphEnl8SfSfzjA39Bh%2B1H6zVQswhLKJxAY6pgHRszuVCXuPTYzGqZ66XyUaj5oDJ%2BDWXPVSn1BS3OIZ0Iq9rriNjbQ0RpnuEdOUQn1TB7P0QZEYoBBpgh2mHShEmD%2BDHX6yXeX78MtLiwhc7jV69XlsBt3qdzh3BdGpYTJoCaxGn9jqN0fQvSf%2Fl0LOq%2BSCUvIyKF2eE41sFTWEQSugAB4V4PEcalDSE2YrJW7FRrIetfKWdR9yTOdbMBst3DzAXvxt&X-Amz-Signature=dbeddc70cf01df5c0922eba597b7194bad8780c719a9f0894dfad34ff8a26611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHUF5JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICwoEaj8HC1x46piP7vnp0jiZ5zWTaPIQVIwES2Zev%2BHAiBxXN%2Ffo7xdMCbzgNZkAqssXEJCl%2BySTdiPTPMHS%2Blryyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMO%2B%2BQpV6c%2BDQ1TYtSKtwDFPOptY0ncvUXLhpc9VNyR8DcWv7R7%2F7UNHgq4dqpfH4r5nTdwahVbhXbN5KwqPo5gvJc4YQgcmxNBMmPQoecgZ1IAMaEYPPVeCbxokOuxYdcl47xxawH6NhDnWxzodNrmXJGDZ6hUIGCEiAkTv%2B9JufGBJhJ2M9zCXOCzRoi1SU8PonipDNaVMOUD8IO%2BX2cygQ9e%2Ftjf3PRrdQGWWmPum%2BM30lTM%2F4sOJbHr%2BVZCQ%2B62dwm17X0Bwgg53njwT2XXU2p5e0JatVLmYFdhOlFurkbTNE%2FD5Thil5m5umv4ufW%2BPdM3qw6trdtcuLGhJ6UL7AHBB7ynwqN0B5bbqjf3RJ6zxP64EQop%2Fsb6BkxD3rmqfCzRZCz2ZCFhMfJo%2FDqCa9oB0l9lbeVezr6JGjVlhKag32sbAHu4Dpzgl3nR%2BJeGQ2%2F%2FAVtHSAImEXo0gCOBuOyiLAS5AnCThNh93SPxfqF%2FfYe3J6IrCHDZO2VEuO6nERl%2BGAjFso0aS9yDeiamBTNsEg4VXqRAXvRuJNsqswbkT%2BTuZ%2FKk7Ffk4OUbw7Wv0BXKdGlE%2BuBtb6XaG%2BXLdeJtiBXpNN8vx05%2F4MbinLaft%2F99uF1qWphEnl8SfSfzjA39Bh%2B1H6zVQswhLKJxAY6pgHRszuVCXuPTYzGqZ66XyUaj5oDJ%2BDWXPVSn1BS3OIZ0Iq9rriNjbQ0RpnuEdOUQn1TB7P0QZEYoBBpgh2mHShEmD%2BDHX6yXeX78MtLiwhc7jV69XlsBt3qdzh3BdGpYTJoCaxGn9jqN0fQvSf%2Fl0LOq%2BSCUvIyKF2eE41sFTWEQSugAB4V4PEcalDSE2YrJW7FRrIetfKWdR9yTOdbMBst3DzAXvxt&X-Amz-Signature=be19e0789f45ba56050f60a2937e339a9bd2a084cfa0034387629fbe2db32ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
