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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OFR3XI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bl2ZQpy1lt6Ay84Lk%2FYphpLG%2FFfZ4cDCR%2FlmZ7P0VAiBQCET5wV7Rw1HO4khHQz%2F222zDLSh9sjkF9Xlxbi3nLiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XV7m%2F%2FvZ4ZSwFtFKtwDhUziumpnZhkl2%2FCxbdPgpSRV03JywuPc7V8mlzo2oRN4Uh3d4yO%2B7yJRPIRJcCepMJi9ppCURHHzRUCPd1U4f5mMrrWZ72f2quDPU9p%2FFYAS1naMPkX5M3%2BUD%2FbeqBaV8OWXNP87Kl5%2FeCTZImKbykUt1HraUWtB6MgaWLP96YcYLZww5unzitYIW9zR78eutWSaYO658%2B%2Bzo7OGEdLeKwEBTI2Z%2BAaUFkZeMEPbIMUkF1URCwg1%2BZoEgDhMVFODDA9vP4htxHziIVCfC0CNuZkMTvvt%2BeWYcBlFM2iX%2FwFX8hzjuZiGZGLuiIr3ewSVGm3rPt%2FZhXremXkp7DpXPDFYp866NGPZIu%2BTSTXSKjsVPSPCfn9AL8uejg1wh%2FeW7Y8vP5JL6GO1jsCLDqaVW62UNKEAHo%2BNphnhQ9wHPUdLrs7m84C6ehoGbt7g7M04VKjZfljE8rWhOrHWzSEM%2BR2DxkqoltA3jRtyYS%2BtCD9F2fgwym0huJsSlYBhmLDN6wSK39R0ERSU%2BeWWKVVWwZdrpcA2WL2Zq5Ad7or6Ahg7cpGZwPJXfHo0T7xDYrPYadDivT665dhayV0fXxLZrF0%2BtfxQSMQQhZzBiZNTDTF8%2BxP0Ka4Wu0VXcN8wobOLwAY6pgGA9E%2FsBjPyVSVC%2B8V%2FdaulSG%2Fdn%2FIiXEXwwS8%2BYCnwixU19bjJob3OBMglV2NqoGBpnAebY03rQTFgKZhYr1KWwc%2FFtn8IUkvZxA%2FSFcO4R%2BIvDwVnOIrFEtFK6BzuP9fM7oHDq5UI5MmXMiV77N3PX869PuIimQvBLh1NTdGGU79GFFzJTWV1yqh8rpobkRK4QjoHM849ClqV7sCdHz9avLjEl45j&X-Amz-Signature=bd7c7785c21b0d570f086d9cf031db2cb8deb16f027387d6feaef83d585efbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OFR3XI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bl2ZQpy1lt6Ay84Lk%2FYphpLG%2FFfZ4cDCR%2FlmZ7P0VAiBQCET5wV7Rw1HO4khHQz%2F222zDLSh9sjkF9Xlxbi3nLiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XV7m%2F%2FvZ4ZSwFtFKtwDhUziumpnZhkl2%2FCxbdPgpSRV03JywuPc7V8mlzo2oRN4Uh3d4yO%2B7yJRPIRJcCepMJi9ppCURHHzRUCPd1U4f5mMrrWZ72f2quDPU9p%2FFYAS1naMPkX5M3%2BUD%2FbeqBaV8OWXNP87Kl5%2FeCTZImKbykUt1HraUWtB6MgaWLP96YcYLZww5unzitYIW9zR78eutWSaYO658%2B%2Bzo7OGEdLeKwEBTI2Z%2BAaUFkZeMEPbIMUkF1URCwg1%2BZoEgDhMVFODDA9vP4htxHziIVCfC0CNuZkMTvvt%2BeWYcBlFM2iX%2FwFX8hzjuZiGZGLuiIr3ewSVGm3rPt%2FZhXremXkp7DpXPDFYp866NGPZIu%2BTSTXSKjsVPSPCfn9AL8uejg1wh%2FeW7Y8vP5JL6GO1jsCLDqaVW62UNKEAHo%2BNphnhQ9wHPUdLrs7m84C6ehoGbt7g7M04VKjZfljE8rWhOrHWzSEM%2BR2DxkqoltA3jRtyYS%2BtCD9F2fgwym0huJsSlYBhmLDN6wSK39R0ERSU%2BeWWKVVWwZdrpcA2WL2Zq5Ad7or6Ahg7cpGZwPJXfHo0T7xDYrPYadDivT665dhayV0fXxLZrF0%2BtfxQSMQQhZzBiZNTDTF8%2BxP0Ka4Wu0VXcN8wobOLwAY6pgGA9E%2FsBjPyVSVC%2B8V%2FdaulSG%2Fdn%2FIiXEXwwS8%2BYCnwixU19bjJob3OBMglV2NqoGBpnAebY03rQTFgKZhYr1KWwc%2FFtn8IUkvZxA%2FSFcO4R%2BIvDwVnOIrFEtFK6BzuP9fM7oHDq5UI5MmXMiV77N3PX869PuIimQvBLh1NTdGGU79GFFzJTWV1yqh8rpobkRK4QjoHM849ClqV7sCdHz9avLjEl45j&X-Amz-Signature=1ec9900cfbfa7bac250f1b0a17f3fb474dd9b076f04f5e5850df14d16a475ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OFR3XI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bl2ZQpy1lt6Ay84Lk%2FYphpLG%2FFfZ4cDCR%2FlmZ7P0VAiBQCET5wV7Rw1HO4khHQz%2F222zDLSh9sjkF9Xlxbi3nLiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XV7m%2F%2FvZ4ZSwFtFKtwDhUziumpnZhkl2%2FCxbdPgpSRV03JywuPc7V8mlzo2oRN4Uh3d4yO%2B7yJRPIRJcCepMJi9ppCURHHzRUCPd1U4f5mMrrWZ72f2quDPU9p%2FFYAS1naMPkX5M3%2BUD%2FbeqBaV8OWXNP87Kl5%2FeCTZImKbykUt1HraUWtB6MgaWLP96YcYLZww5unzitYIW9zR78eutWSaYO658%2B%2Bzo7OGEdLeKwEBTI2Z%2BAaUFkZeMEPbIMUkF1URCwg1%2BZoEgDhMVFODDA9vP4htxHziIVCfC0CNuZkMTvvt%2BeWYcBlFM2iX%2FwFX8hzjuZiGZGLuiIr3ewSVGm3rPt%2FZhXremXkp7DpXPDFYp866NGPZIu%2BTSTXSKjsVPSPCfn9AL8uejg1wh%2FeW7Y8vP5JL6GO1jsCLDqaVW62UNKEAHo%2BNphnhQ9wHPUdLrs7m84C6ehoGbt7g7M04VKjZfljE8rWhOrHWzSEM%2BR2DxkqoltA3jRtyYS%2BtCD9F2fgwym0huJsSlYBhmLDN6wSK39R0ERSU%2BeWWKVVWwZdrpcA2WL2Zq5Ad7or6Ahg7cpGZwPJXfHo0T7xDYrPYadDivT665dhayV0fXxLZrF0%2BtfxQSMQQhZzBiZNTDTF8%2BxP0Ka4Wu0VXcN8wobOLwAY6pgGA9E%2FsBjPyVSVC%2B8V%2FdaulSG%2Fdn%2FIiXEXwwS8%2BYCnwixU19bjJob3OBMglV2NqoGBpnAebY03rQTFgKZhYr1KWwc%2FFtn8IUkvZxA%2FSFcO4R%2BIvDwVnOIrFEtFK6BzuP9fM7oHDq5UI5MmXMiV77N3PX869PuIimQvBLh1NTdGGU79GFFzJTWV1yqh8rpobkRK4QjoHM849ClqV7sCdHz9avLjEl45j&X-Amz-Signature=e0a21a74dbed05a881e07b1590a864bbbe14be8b45e47fc4bf60873a06d35b64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
