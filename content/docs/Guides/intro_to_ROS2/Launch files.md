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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE4JRAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2BA3Rz0ZeArU%2F1igDcrZ2TWgtm6oM15LtP0ibO%2FmwPQIgd0wj4ofpur82bV5C6SW%2BobohwnDIgotvLKPKKiXVsCoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjg7P%2FLCUQFZ3PrHircA35QokQAg91Yuqmm2F8CPbFQJrYSFX9ImJw0UIEoQyPGcxaMIJOedKbYb01R1v2cZsMxC6Xfkp878VJ%2B1u4EfrMPc0EvUOuiyoOQDV%2BJ6p0MhUcRKWV9NWvI513tuWS6MhOUpSjOYybs%2Bnbu0%2BFSksrTatocDcMSi21%2FAQqLkHUUwRtJ%2F394nJ3kt1PxhpcGi4mR3nHp8TveC8gqPHDzZeVcJB%2Fug9l8dpA9%2B8AQEkrO9uLx7acyPsP4EsrJYkuEovLVPo4X4wkm2VbJ8LfJF%2FQJeFZKe5dnWCHBwqm4NqPktuF1onHcOyegTS9%2FMUANn1DAVKjj0feaIDd8Ir%2BaVzmFFT2s0L15Or9ATNPvzYdQSeRqXoIFTExkVHSiVXxQf6nydyK10vkYfG92TuDL0C3WJlCdzeNrD2FHdx05kX7YfPrcdtQy4t4AirBthlMyFVGcBakr%2BwGpOlsgnw8oSdZy%2FoIdi6hLM%2B%2Bw6fXtn0nCiT4p8JxwmaEWX2R8HCfjVmYSILqVCL0tVJsNlzshU3Kf62kBXzEm2hBfwUJztzjY1jiBStOX3i6ZT1Xc%2BjP%2BY07tE2jvTGIPVPD%2Fm5XzXamwjucbbdl0v8vz%2FuH0yNc0hVmZrUiXnn4aFWDcMMSArL0GOqUB8HsOMiVbTESSM6tFp0qTljYS5IthYcVcgKCHXD61sLkHyia7OFxEZNJY4Lb5Fm0tKsSUo7wdEEIWP4zU2IjPsvGLng5JmUS2utc6Ysf4DHFZ3A44sIrq9JOaVJT9mIFtltZNP4efJPso2eed3gSkvrsinxXWBB165MLgxTASpMtfzmT0P%2Fw%2B2miQjJoGof68vkRe4h%2FkyTtbSRdz%2BabY4dzjEDhE&X-Amz-Signature=5c377591dff2216a4675022f31906b6eb24905f36065ff412f46aa6f25f9ae08&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE4JRAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2BA3Rz0ZeArU%2F1igDcrZ2TWgtm6oM15LtP0ibO%2FmwPQIgd0wj4ofpur82bV5C6SW%2BobohwnDIgotvLKPKKiXVsCoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjg7P%2FLCUQFZ3PrHircA35QokQAg91Yuqmm2F8CPbFQJrYSFX9ImJw0UIEoQyPGcxaMIJOedKbYb01R1v2cZsMxC6Xfkp878VJ%2B1u4EfrMPc0EvUOuiyoOQDV%2BJ6p0MhUcRKWV9NWvI513tuWS6MhOUpSjOYybs%2Bnbu0%2BFSksrTatocDcMSi21%2FAQqLkHUUwRtJ%2F394nJ3kt1PxhpcGi4mR3nHp8TveC8gqPHDzZeVcJB%2Fug9l8dpA9%2B8AQEkrO9uLx7acyPsP4EsrJYkuEovLVPo4X4wkm2VbJ8LfJF%2FQJeFZKe5dnWCHBwqm4NqPktuF1onHcOyegTS9%2FMUANn1DAVKjj0feaIDd8Ir%2BaVzmFFT2s0L15Or9ATNPvzYdQSeRqXoIFTExkVHSiVXxQf6nydyK10vkYfG92TuDL0C3WJlCdzeNrD2FHdx05kX7YfPrcdtQy4t4AirBthlMyFVGcBakr%2BwGpOlsgnw8oSdZy%2FoIdi6hLM%2B%2Bw6fXtn0nCiT4p8JxwmaEWX2R8HCfjVmYSILqVCL0tVJsNlzshU3Kf62kBXzEm2hBfwUJztzjY1jiBStOX3i6ZT1Xc%2BjP%2BY07tE2jvTGIPVPD%2Fm5XzXamwjucbbdl0v8vz%2FuH0yNc0hVmZrUiXnn4aFWDcMMSArL0GOqUB8HsOMiVbTESSM6tFp0qTljYS5IthYcVcgKCHXD61sLkHyia7OFxEZNJY4Lb5Fm0tKsSUo7wdEEIWP4zU2IjPsvGLng5JmUS2utc6Ysf4DHFZ3A44sIrq9JOaVJT9mIFtltZNP4efJPso2eed3gSkvrsinxXWBB165MLgxTASpMtfzmT0P%2Fw%2B2miQjJoGof68vkRe4h%2FkyTtbSRdz%2BabY4dzjEDhE&X-Amz-Signature=9e4ebe1243b0ddb1aac645aacf64dad1b5e55259481b08c4825fcdbc5a21acc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE4JRAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2BA3Rz0ZeArU%2F1igDcrZ2TWgtm6oM15LtP0ibO%2FmwPQIgd0wj4ofpur82bV5C6SW%2BobohwnDIgotvLKPKKiXVsCoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjg7P%2FLCUQFZ3PrHircA35QokQAg91Yuqmm2F8CPbFQJrYSFX9ImJw0UIEoQyPGcxaMIJOedKbYb01R1v2cZsMxC6Xfkp878VJ%2B1u4EfrMPc0EvUOuiyoOQDV%2BJ6p0MhUcRKWV9NWvI513tuWS6MhOUpSjOYybs%2Bnbu0%2BFSksrTatocDcMSi21%2FAQqLkHUUwRtJ%2F394nJ3kt1PxhpcGi4mR3nHp8TveC8gqPHDzZeVcJB%2Fug9l8dpA9%2B8AQEkrO9uLx7acyPsP4EsrJYkuEovLVPo4X4wkm2VbJ8LfJF%2FQJeFZKe5dnWCHBwqm4NqPktuF1onHcOyegTS9%2FMUANn1DAVKjj0feaIDd8Ir%2BaVzmFFT2s0L15Or9ATNPvzYdQSeRqXoIFTExkVHSiVXxQf6nydyK10vkYfG92TuDL0C3WJlCdzeNrD2FHdx05kX7YfPrcdtQy4t4AirBthlMyFVGcBakr%2BwGpOlsgnw8oSdZy%2FoIdi6hLM%2B%2Bw6fXtn0nCiT4p8JxwmaEWX2R8HCfjVmYSILqVCL0tVJsNlzshU3Kf62kBXzEm2hBfwUJztzjY1jiBStOX3i6ZT1Xc%2BjP%2BY07tE2jvTGIPVPD%2Fm5XzXamwjucbbdl0v8vz%2FuH0yNc0hVmZrUiXnn4aFWDcMMSArL0GOqUB8HsOMiVbTESSM6tFp0qTljYS5IthYcVcgKCHXD61sLkHyia7OFxEZNJY4Lb5Fm0tKsSUo7wdEEIWP4zU2IjPsvGLng5JmUS2utc6Ysf4DHFZ3A44sIrq9JOaVJT9mIFtltZNP4efJPso2eed3gSkvrsinxXWBB165MLgxTASpMtfzmT0P%2Fw%2B2miQjJoGof68vkRe4h%2FkyTtbSRdz%2BabY4dzjEDhE&X-Amz-Signature=24f99d5a1ade438e64a4f460a50aa2c574ad2f471caa23590adfaa260436f14a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
