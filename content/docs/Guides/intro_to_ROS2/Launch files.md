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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JRK6ZA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiqjgIWgCDfXtqhg6JIGmxzMHz%2F%2BE%2BMAzKR9Gp41pMnQIgWeMy3ED%2Bvo54%2FqmVqjvmKuOLYFIS1kw%2BLVACokkIpqUqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTGOIOpfelWRtJ6wSrcA99k3iC%2F1I8ghKE4ACB8w8USXtFG9BIcL9u8JpYWxlQeFV4W%2FAtw2VE9Z22ZNVufb92Q%2B%2BkYlo41Hn80wSHASoIgGMswrTCfegt8FQOJiXSUbcutdawbx43Q1mo9cOn1e70jUsGTDBABItmK7Mihzy1NySvJ%2Fae3ztVmyIomM%2B9uMis64sUfB0G1wpDguCSDLamuOOm7mXk1x5ea5p%2BpZUGkItgiC7M6gfA1f32QinlvwAJRXftR91Y4P6qPcx0gd%2Bk%2FS6VLw2cVE54Kx%2BH6G8VFay%2B5Y9CLhesXZ507%2FAXiR0hkO2iRsAQjhOIi93h0cVSmOkvDivDQ4bX%2FQ%2BW3C3GlxUu%2FSHToYd0KX94fOoO9LadeLt21n5NoHM34BlBAe4i%2BZ3ewLnk7FplVAlXEOBJZrtBDyOtFT7bxpWra%2Bxnlaff0qiCmiyQ%2FfwWtdbT6M06sZLBeIdjcMbVsDTHVri6pDimUy6tCO0lCS10STDcAALBCVZtjYYF%2Bp72CXglFB8BY6jpQdzXgTLkWGIunFU8BEtHAMq%2B%2BbAdIiF7Snx7SLAwhJoJsP%2FJ0Pe4Z6GBfo7TrYvqqPrx0RryZD%2FHMNF8CIIMdRlrWx43V3GJATLg%2FBb0F3kVe%2BQ%2Fh66E2MKPZ470GOqUBNJGncaPMVlw36HOnEFrVCvVlJYqzcFgSa4qEA8mBJUYeA496NLUvs202QNDg5a0jn03a07iVuyFHzU7LVH5XnQRkh1Ts3HGp8o82WoEOVvcJIpXlaF3s%2FgQYx7Bn8NmAdKpt4DLjnKzrNxadtJgcagVZzCg80iPNFm%2FMFD2CuK6cVybioqge1oeigZ49qFFpF9I0W%2BcHvyajApMuK84oBdC293FS&X-Amz-Signature=ada37215b05e77e99ea1c240cb3f1a7ebf00857b2b5f74e5d8d067accf0eec0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JRK6ZA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiqjgIWgCDfXtqhg6JIGmxzMHz%2F%2BE%2BMAzKR9Gp41pMnQIgWeMy3ED%2Bvo54%2FqmVqjvmKuOLYFIS1kw%2BLVACokkIpqUqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTGOIOpfelWRtJ6wSrcA99k3iC%2F1I8ghKE4ACB8w8USXtFG9BIcL9u8JpYWxlQeFV4W%2FAtw2VE9Z22ZNVufb92Q%2B%2BkYlo41Hn80wSHASoIgGMswrTCfegt8FQOJiXSUbcutdawbx43Q1mo9cOn1e70jUsGTDBABItmK7Mihzy1NySvJ%2Fae3ztVmyIomM%2B9uMis64sUfB0G1wpDguCSDLamuOOm7mXk1x5ea5p%2BpZUGkItgiC7M6gfA1f32QinlvwAJRXftR91Y4P6qPcx0gd%2Bk%2FS6VLw2cVE54Kx%2BH6G8VFay%2B5Y9CLhesXZ507%2FAXiR0hkO2iRsAQjhOIi93h0cVSmOkvDivDQ4bX%2FQ%2BW3C3GlxUu%2FSHToYd0KX94fOoO9LadeLt21n5NoHM34BlBAe4i%2BZ3ewLnk7FplVAlXEOBJZrtBDyOtFT7bxpWra%2Bxnlaff0qiCmiyQ%2FfwWtdbT6M06sZLBeIdjcMbVsDTHVri6pDimUy6tCO0lCS10STDcAALBCVZtjYYF%2Bp72CXglFB8BY6jpQdzXgTLkWGIunFU8BEtHAMq%2B%2BbAdIiF7Snx7SLAwhJoJsP%2FJ0Pe4Z6GBfo7TrYvqqPrx0RryZD%2FHMNF8CIIMdRlrWx43V3GJATLg%2FBb0F3kVe%2BQ%2Fh66E2MKPZ470GOqUBNJGncaPMVlw36HOnEFrVCvVlJYqzcFgSa4qEA8mBJUYeA496NLUvs202QNDg5a0jn03a07iVuyFHzU7LVH5XnQRkh1Ts3HGp8o82WoEOVvcJIpXlaF3s%2FgQYx7Bn8NmAdKpt4DLjnKzrNxadtJgcagVZzCg80iPNFm%2FMFD2CuK6cVybioqge1oeigZ49qFFpF9I0W%2BcHvyajApMuK84oBdC293FS&X-Amz-Signature=f4aaced0420808e2061e117e9426b0f6e8f79b7f482f2f48bf31f2a80a753fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JRK6ZA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiqjgIWgCDfXtqhg6JIGmxzMHz%2F%2BE%2BMAzKR9Gp41pMnQIgWeMy3ED%2Bvo54%2FqmVqjvmKuOLYFIS1kw%2BLVACokkIpqUqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTGOIOpfelWRtJ6wSrcA99k3iC%2F1I8ghKE4ACB8w8USXtFG9BIcL9u8JpYWxlQeFV4W%2FAtw2VE9Z22ZNVufb92Q%2B%2BkYlo41Hn80wSHASoIgGMswrTCfegt8FQOJiXSUbcutdawbx43Q1mo9cOn1e70jUsGTDBABItmK7Mihzy1NySvJ%2Fae3ztVmyIomM%2B9uMis64sUfB0G1wpDguCSDLamuOOm7mXk1x5ea5p%2BpZUGkItgiC7M6gfA1f32QinlvwAJRXftR91Y4P6qPcx0gd%2Bk%2FS6VLw2cVE54Kx%2BH6G8VFay%2B5Y9CLhesXZ507%2FAXiR0hkO2iRsAQjhOIi93h0cVSmOkvDivDQ4bX%2FQ%2BW3C3GlxUu%2FSHToYd0KX94fOoO9LadeLt21n5NoHM34BlBAe4i%2BZ3ewLnk7FplVAlXEOBJZrtBDyOtFT7bxpWra%2Bxnlaff0qiCmiyQ%2FfwWtdbT6M06sZLBeIdjcMbVsDTHVri6pDimUy6tCO0lCS10STDcAALBCVZtjYYF%2Bp72CXglFB8BY6jpQdzXgTLkWGIunFU8BEtHAMq%2B%2BbAdIiF7Snx7SLAwhJoJsP%2FJ0Pe4Z6GBfo7TrYvqqPrx0RryZD%2FHMNF8CIIMdRlrWx43V3GJATLg%2FBb0F3kVe%2BQ%2Fh66E2MKPZ470GOqUBNJGncaPMVlw36HOnEFrVCvVlJYqzcFgSa4qEA8mBJUYeA496NLUvs202QNDg5a0jn03a07iVuyFHzU7LVH5XnQRkh1Ts3HGp8o82WoEOVvcJIpXlaF3s%2FgQYx7Bn8NmAdKpt4DLjnKzrNxadtJgcagVZzCg80iPNFm%2FMFD2CuK6cVybioqge1oeigZ49qFFpF9I0W%2BcHvyajApMuK84oBdC293FS&X-Amz-Signature=869458a03c405fc89e67796cd78cd9ea177d51c31d2a48400a27b24db928abe8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
