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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNISPREC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDemVUqcdIKL1bJNg34dVip3N%2FhBOb1a3OD5oqMQ0H7bgIgIeEqL4FUdFpySAyu8ANPZC%2B0PqfhC1bgYm%2FswTmQ8Tsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNbrVxd%2FGst4LeJ92yrcA0HoQBlrOrs8ymcAYQi%2F2YiLvFCQ7kKoBrL2Tv8a6AjEEIEHcVmJx1amiJwAN02APY3oxzNfmRHqg8aHLJblKIn0kChbmTT%2BxRn2XXLSAmV8M6e4qQ6M0ZNDMjLpxvpm00xBL%2BrAGj%2F7Wb5gJKS1DZBjOvSPd4bIFKSZqxNmtUGjf%2BefJZMUsUa%2FaaKOHo3wkOEPliwuhSLCURVx9RXPRMiJ2gyPDvnIYi0Zy4bNMfzrwzsfy67jw3jC0Px1P%2F5FKlPq%2Bsskwk6bGRE8wXcO7WlLw1p9bZLT%2F9T32wzDT5UTMPo%2BwZWSjZQZnOVYPvRYoIxYLGERyL9jRnXXgkrVJYLO63O0GFx7%2BsN4TIoQ2cv3%2FHXMqYNpC6PdXQBq60s4zmvx9BVjM%2B207ZHIUE4gh0TqdrSe4p0dtAEn%2F5KzbH8kXe0YETAhDR0MA6HI6wZPJOcmK7L%2BSVR1M3IsWcC2cuENu%2FFGdNV1XBSiekiWEwXfe5rYyhs%2Bkk0o%2BB%2FX8oIWxXrg2GXdxft6awodMxm%2Bj2DqwZAdNhUpUzsyh1Lq4xevmCCDtVbaYIdVcd1xgt%2F4MOWKjEDQBWy%2B6kM%2BE1In4VU4Ns4AxA0D8nKxwJnUgDIR%2By1h98kaKhaNHDB3MK%2FC7cIGOqUBKA1ODOGgduZd%2BkMaLW7iu4Crs0n6sy0un6ZdDtUqjnaO2e0KTlGupKuenrAR8aczeKS67oi8clO0KECMeHbJJaocEHZpcNo%2BJqLzqTP2RTHzd8EeTgK6m%2Fgr0SAECuBhJYr8jtchRK%2FM7PWmjJu7TEezr6Z%2B32ByfLVg6WJ%2Fc7hPbMVUTnribtOgA%2FisRNw4Eqwf0v%2FRiDy3C696WQlnW%2B3%2F2Jij&X-Amz-Signature=4f81d5d82e4d63c3e6151e20bdbd68906b27443c368f629fe14b28139a202418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNISPREC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDemVUqcdIKL1bJNg34dVip3N%2FhBOb1a3OD5oqMQ0H7bgIgIeEqL4FUdFpySAyu8ANPZC%2B0PqfhC1bgYm%2FswTmQ8Tsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNbrVxd%2FGst4LeJ92yrcA0HoQBlrOrs8ymcAYQi%2F2YiLvFCQ7kKoBrL2Tv8a6AjEEIEHcVmJx1amiJwAN02APY3oxzNfmRHqg8aHLJblKIn0kChbmTT%2BxRn2XXLSAmV8M6e4qQ6M0ZNDMjLpxvpm00xBL%2BrAGj%2F7Wb5gJKS1DZBjOvSPd4bIFKSZqxNmtUGjf%2BefJZMUsUa%2FaaKOHo3wkOEPliwuhSLCURVx9RXPRMiJ2gyPDvnIYi0Zy4bNMfzrwzsfy67jw3jC0Px1P%2F5FKlPq%2Bsskwk6bGRE8wXcO7WlLw1p9bZLT%2F9T32wzDT5UTMPo%2BwZWSjZQZnOVYPvRYoIxYLGERyL9jRnXXgkrVJYLO63O0GFx7%2BsN4TIoQ2cv3%2FHXMqYNpC6PdXQBq60s4zmvx9BVjM%2B207ZHIUE4gh0TqdrSe4p0dtAEn%2F5KzbH8kXe0YETAhDR0MA6HI6wZPJOcmK7L%2BSVR1M3IsWcC2cuENu%2FFGdNV1XBSiekiWEwXfe5rYyhs%2Bkk0o%2BB%2FX8oIWxXrg2GXdxft6awodMxm%2Bj2DqwZAdNhUpUzsyh1Lq4xevmCCDtVbaYIdVcd1xgt%2F4MOWKjEDQBWy%2B6kM%2BE1In4VU4Ns4AxA0D8nKxwJnUgDIR%2By1h98kaKhaNHDB3MK%2FC7cIGOqUBKA1ODOGgduZd%2BkMaLW7iu4Crs0n6sy0un6ZdDtUqjnaO2e0KTlGupKuenrAR8aczeKS67oi8clO0KECMeHbJJaocEHZpcNo%2BJqLzqTP2RTHzd8EeTgK6m%2Fgr0SAECuBhJYr8jtchRK%2FM7PWmjJu7TEezr6Z%2B32ByfLVg6WJ%2Fc7hPbMVUTnribtOgA%2FisRNw4Eqwf0v%2FRiDy3C696WQlnW%2B3%2F2Jij&X-Amz-Signature=3fbd1ab2f70e5f6c969439d1448cbe55432f9d8a5d1afa862f977d434810f37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNISPREC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDemVUqcdIKL1bJNg34dVip3N%2FhBOb1a3OD5oqMQ0H7bgIgIeEqL4FUdFpySAyu8ANPZC%2B0PqfhC1bgYm%2FswTmQ8Tsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNbrVxd%2FGst4LeJ92yrcA0HoQBlrOrs8ymcAYQi%2F2YiLvFCQ7kKoBrL2Tv8a6AjEEIEHcVmJx1amiJwAN02APY3oxzNfmRHqg8aHLJblKIn0kChbmTT%2BxRn2XXLSAmV8M6e4qQ6M0ZNDMjLpxvpm00xBL%2BrAGj%2F7Wb5gJKS1DZBjOvSPd4bIFKSZqxNmtUGjf%2BefJZMUsUa%2FaaKOHo3wkOEPliwuhSLCURVx9RXPRMiJ2gyPDvnIYi0Zy4bNMfzrwzsfy67jw3jC0Px1P%2F5FKlPq%2Bsskwk6bGRE8wXcO7WlLw1p9bZLT%2F9T32wzDT5UTMPo%2BwZWSjZQZnOVYPvRYoIxYLGERyL9jRnXXgkrVJYLO63O0GFx7%2BsN4TIoQ2cv3%2FHXMqYNpC6PdXQBq60s4zmvx9BVjM%2B207ZHIUE4gh0TqdrSe4p0dtAEn%2F5KzbH8kXe0YETAhDR0MA6HI6wZPJOcmK7L%2BSVR1M3IsWcC2cuENu%2FFGdNV1XBSiekiWEwXfe5rYyhs%2Bkk0o%2BB%2FX8oIWxXrg2GXdxft6awodMxm%2Bj2DqwZAdNhUpUzsyh1Lq4xevmCCDtVbaYIdVcd1xgt%2F4MOWKjEDQBWy%2B6kM%2BE1In4VU4Ns4AxA0D8nKxwJnUgDIR%2By1h98kaKhaNHDB3MK%2FC7cIGOqUBKA1ODOGgduZd%2BkMaLW7iu4Crs0n6sy0un6ZdDtUqjnaO2e0KTlGupKuenrAR8aczeKS67oi8clO0KECMeHbJJaocEHZpcNo%2BJqLzqTP2RTHzd8EeTgK6m%2Fgr0SAECuBhJYr8jtchRK%2FM7PWmjJu7TEezr6Z%2B32ByfLVg6WJ%2Fc7hPbMVUTnribtOgA%2FisRNw4Eqwf0v%2FRiDy3C696WQlnW%2B3%2F2Jij&X-Amz-Signature=29149a675bd95581ad00a394a6245b3be782792fa43e343a90afc76ed81e6000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
