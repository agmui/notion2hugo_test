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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAPSCJB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC8kweRQa50bZuu0p6lMElTRDQawq7nhCNHQVwf%2BdTXggIhAKn%2FRiGUXCX2g%2Bz56v8dd4YToEUXGCGVOQkwihySeeYxKv8DCH8QABoMNjM3NDIzMTgzODA1Igx87FX44psDVGDfd9cq3AM3sN%2Bbzn52X%2B4%2FzngOjt5aJaoKW3a66TbZKr%2FwrsYaNg7GxYDMWke7unE%2Bj7%2FffRcCCPYUNiDHr%2B2QPh3xC80MHcQ3Rfl6tmbMGawqAgqfL39afA4c1248Dr%2BGs7hQOhoGgDJWcqa1y5u4v%2F0rk5YvjMaD4jQldVgT9ySIcITh1%2FmbrM0%2F3SPFfeu1439DUEiwC4rHFYwEU9CaYpGUT9ZXSkFljgpMCoHWKyOnDieuFKt%2FYwEUZYMKEkb3GnUs73OGLuFQYnAntQMHOQ0t8WGATM20BcaqFRyeSBzSr4Irz%2BmGPt1%2BND38VNDszdcigNKnoSrfidPsyqxte8LgF%2B1%2FKCKW3JZpMq4gX1WaTwe%2BpDKom8knOPqvV9wA82gco7YxD1qWtCLMwFcWbb%2BTNZJDbayaW%2BQ4AOxG1BTOoGjmck8DKJMm4ZOFgG1ur7sUzKRvGkjiFGT0f42wuUQo5ueSL7%2BLhVIN4ToaaOxInaGGmwauRK9eZ7t6JnTTYLr1b8VW49sLZKZQMyXoNysGhLyMTi4biskZLx8PKEuSE%2FnPCt2AAPtSb%2BZM9MakwZHVpRMugiCWtvl4XWBy3p3cvIBCDJA0m%2FOwYwXYcIs0kBlIUPNjByR15vJUp40fUTC5yZrEBjqkAQoYC7gqHD7IPJ2SVRDXt%2Fvz4ag6erjnrw0%2BbadVlSs7zzZDRrEiDLK9dHooLzl2vSEbuCEqVxt4JL04OKRVNexCge0EzBG4h2xKi%2Bp2Lvhg7zi3A91qP%2BRVSB4XQRIlEK%2Bt2NPBUFeSIbz3zPuspRbq11jMd%2FgmkVGHBC34pl3ptyn%2Fg2kqVvR5NN1Hkh5u0CtwtWih355yaSvQUaE8%2B3ApVLBT&X-Amz-Signature=3cc7604418824ac13dc057ab36cafd3905222650ec603c340a7d033eae7c5f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAPSCJB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC8kweRQa50bZuu0p6lMElTRDQawq7nhCNHQVwf%2BdTXggIhAKn%2FRiGUXCX2g%2Bz56v8dd4YToEUXGCGVOQkwihySeeYxKv8DCH8QABoMNjM3NDIzMTgzODA1Igx87FX44psDVGDfd9cq3AM3sN%2Bbzn52X%2B4%2FzngOjt5aJaoKW3a66TbZKr%2FwrsYaNg7GxYDMWke7unE%2Bj7%2FffRcCCPYUNiDHr%2B2QPh3xC80MHcQ3Rfl6tmbMGawqAgqfL39afA4c1248Dr%2BGs7hQOhoGgDJWcqa1y5u4v%2F0rk5YvjMaD4jQldVgT9ySIcITh1%2FmbrM0%2F3SPFfeu1439DUEiwC4rHFYwEU9CaYpGUT9ZXSkFljgpMCoHWKyOnDieuFKt%2FYwEUZYMKEkb3GnUs73OGLuFQYnAntQMHOQ0t8WGATM20BcaqFRyeSBzSr4Irz%2BmGPt1%2BND38VNDszdcigNKnoSrfidPsyqxte8LgF%2B1%2FKCKW3JZpMq4gX1WaTwe%2BpDKom8knOPqvV9wA82gco7YxD1qWtCLMwFcWbb%2BTNZJDbayaW%2BQ4AOxG1BTOoGjmck8DKJMm4ZOFgG1ur7sUzKRvGkjiFGT0f42wuUQo5ueSL7%2BLhVIN4ToaaOxInaGGmwauRK9eZ7t6JnTTYLr1b8VW49sLZKZQMyXoNysGhLyMTi4biskZLx8PKEuSE%2FnPCt2AAPtSb%2BZM9MakwZHVpRMugiCWtvl4XWBy3p3cvIBCDJA0m%2FOwYwXYcIs0kBlIUPNjByR15vJUp40fUTC5yZrEBjqkAQoYC7gqHD7IPJ2SVRDXt%2Fvz4ag6erjnrw0%2BbadVlSs7zzZDRrEiDLK9dHooLzl2vSEbuCEqVxt4JL04OKRVNexCge0EzBG4h2xKi%2Bp2Lvhg7zi3A91qP%2BRVSB4XQRIlEK%2Bt2NPBUFeSIbz3zPuspRbq11jMd%2FgmkVGHBC34pl3ptyn%2Fg2kqVvR5NN1Hkh5u0CtwtWih355yaSvQUaE8%2B3ApVLBT&X-Amz-Signature=f74c737afc8aa4474b4e6baf4c0edc7f356926ce0243e8b7f4111492d6e9d959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAPSCJB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC8kweRQa50bZuu0p6lMElTRDQawq7nhCNHQVwf%2BdTXggIhAKn%2FRiGUXCX2g%2Bz56v8dd4YToEUXGCGVOQkwihySeeYxKv8DCH8QABoMNjM3NDIzMTgzODA1Igx87FX44psDVGDfd9cq3AM3sN%2Bbzn52X%2B4%2FzngOjt5aJaoKW3a66TbZKr%2FwrsYaNg7GxYDMWke7unE%2Bj7%2FffRcCCPYUNiDHr%2B2QPh3xC80MHcQ3Rfl6tmbMGawqAgqfL39afA4c1248Dr%2BGs7hQOhoGgDJWcqa1y5u4v%2F0rk5YvjMaD4jQldVgT9ySIcITh1%2FmbrM0%2F3SPFfeu1439DUEiwC4rHFYwEU9CaYpGUT9ZXSkFljgpMCoHWKyOnDieuFKt%2FYwEUZYMKEkb3GnUs73OGLuFQYnAntQMHOQ0t8WGATM20BcaqFRyeSBzSr4Irz%2BmGPt1%2BND38VNDszdcigNKnoSrfidPsyqxte8LgF%2B1%2FKCKW3JZpMq4gX1WaTwe%2BpDKom8knOPqvV9wA82gco7YxD1qWtCLMwFcWbb%2BTNZJDbayaW%2BQ4AOxG1BTOoGjmck8DKJMm4ZOFgG1ur7sUzKRvGkjiFGT0f42wuUQo5ueSL7%2BLhVIN4ToaaOxInaGGmwauRK9eZ7t6JnTTYLr1b8VW49sLZKZQMyXoNysGhLyMTi4biskZLx8PKEuSE%2FnPCt2AAPtSb%2BZM9MakwZHVpRMugiCWtvl4XWBy3p3cvIBCDJA0m%2FOwYwXYcIs0kBlIUPNjByR15vJUp40fUTC5yZrEBjqkAQoYC7gqHD7IPJ2SVRDXt%2Fvz4ag6erjnrw0%2BbadVlSs7zzZDRrEiDLK9dHooLzl2vSEbuCEqVxt4JL04OKRVNexCge0EzBG4h2xKi%2Bp2Lvhg7zi3A91qP%2BRVSB4XQRIlEK%2Bt2NPBUFeSIbz3zPuspRbq11jMd%2FgmkVGHBC34pl3ptyn%2Fg2kqVvR5NN1Hkh5u0CtwtWih355yaSvQUaE8%2B3ApVLBT&X-Amz-Signature=ad939c0019c4825ec97803579df4d002f0fcf2f3f8f45ce2c5f0cb8cf3d084b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
