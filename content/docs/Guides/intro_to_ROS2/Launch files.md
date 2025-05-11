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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NOIV7Q%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBfuc4Mxco6ITadjjkj2Ulii4fLU%2FuOS3e8yDQuuuwY1AiEAmgLKdZp6SNIztB5%2Fmd6VUgtX5ZVQpFWdfkc%2F0aVv6hEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKlaI6nPNUDoRptoCrcA%2BptB7obv%2FHGe635MKjdpzVdcmti622yN8jlaDQWvhETgGuqTZpptM5TINEMZliAJAZt5jUeu4llKTEJlQB3qvbv4mInjIjqB3rvBWHoiSZNBr0NWA3QLvEJ0%2BD8sJCKG0RVBZZcxj%2FHg06UuZjd9Dc0HVtO6%2Fzav3QXLEbhMPPgQlkam4Ctu8VEjt%2BZlG8OgcwkmrNEdEIU0cymnUZVU1fKSrPVA38mS0CntuTFT1Lmh4xPaYo5o4tHcj1YNoyopbAmyXZ8kDuWtXxJsXQ8YvYtKCVw1geDy6K5RQFyWhvJzienZR%2F0iqP%2Fe%2FXHE7CsQq1GT4hi5UY00sJurume0X24eGWhqv%2BYis8ztUZdS4tJhjBrPB5Ejw%2FX0WzJJQX%2ByGtTFxNPbQ6JIGHeIIvvveZYUEhNe6Q89ReGTUlojaDCl5uD387zgcMgwuKEyf7wNmTK2IX%2BtHqO33wTFwmbk1W8lT50TbO2b3gfz3Ip0yAgRMql7HwbtIyE7GgV4R%2Fg4zcvSmDNZIPI7TsL2%2Bb6LHvIE%2F0vnf%2BEdMSOF5wZJ%2FsJWj%2Fk0ClIc6%2B%2BtTtbd5j8Ic2L5DsdXJlZd1%2BoQL%2F%2F8sf68jN6vuWNpsPuUPBp3hLAlhTQt%2B53ft51N7cMMKShg8EGOqUBPseBbRihofnazEJCuqm199a2nmessjzyBI%2BjCCPFr99VH4IImMntdMT5%2BB3fhvgegzRShPg6Fu27Uts6Nb3oEaCWshPBRPwGO63pGYW0pDKygUf9Lhiz204AIBQwEUUa0FLU0rdTJEgdv7XRbK%2BhXA75zcyovwwNh%2BFn1ujoQEhv2Rk6bIeWL2vQ5k%2BZrqQ6TH6dTLG1gBsx0Jl2dAZj8Ti8SwFZ&X-Amz-Signature=06b9eeec2d28b4a98ee8b4470f16d37c71bece70212922dd8f8341b6980e7766&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NOIV7Q%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBfuc4Mxco6ITadjjkj2Ulii4fLU%2FuOS3e8yDQuuuwY1AiEAmgLKdZp6SNIztB5%2Fmd6VUgtX5ZVQpFWdfkc%2F0aVv6hEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKlaI6nPNUDoRptoCrcA%2BptB7obv%2FHGe635MKjdpzVdcmti622yN8jlaDQWvhETgGuqTZpptM5TINEMZliAJAZt5jUeu4llKTEJlQB3qvbv4mInjIjqB3rvBWHoiSZNBr0NWA3QLvEJ0%2BD8sJCKG0RVBZZcxj%2FHg06UuZjd9Dc0HVtO6%2Fzav3QXLEbhMPPgQlkam4Ctu8VEjt%2BZlG8OgcwkmrNEdEIU0cymnUZVU1fKSrPVA38mS0CntuTFT1Lmh4xPaYo5o4tHcj1YNoyopbAmyXZ8kDuWtXxJsXQ8YvYtKCVw1geDy6K5RQFyWhvJzienZR%2F0iqP%2Fe%2FXHE7CsQq1GT4hi5UY00sJurume0X24eGWhqv%2BYis8ztUZdS4tJhjBrPB5Ejw%2FX0WzJJQX%2ByGtTFxNPbQ6JIGHeIIvvveZYUEhNe6Q89ReGTUlojaDCl5uD387zgcMgwuKEyf7wNmTK2IX%2BtHqO33wTFwmbk1W8lT50TbO2b3gfz3Ip0yAgRMql7HwbtIyE7GgV4R%2Fg4zcvSmDNZIPI7TsL2%2Bb6LHvIE%2F0vnf%2BEdMSOF5wZJ%2FsJWj%2Fk0ClIc6%2B%2BtTtbd5j8Ic2L5DsdXJlZd1%2BoQL%2F%2F8sf68jN6vuWNpsPuUPBp3hLAlhTQt%2B53ft51N7cMMKShg8EGOqUBPseBbRihofnazEJCuqm199a2nmessjzyBI%2BjCCPFr99VH4IImMntdMT5%2BB3fhvgegzRShPg6Fu27Uts6Nb3oEaCWshPBRPwGO63pGYW0pDKygUf9Lhiz204AIBQwEUUa0FLU0rdTJEgdv7XRbK%2BhXA75zcyovwwNh%2BFn1ujoQEhv2Rk6bIeWL2vQ5k%2BZrqQ6TH6dTLG1gBsx0Jl2dAZj8Ti8SwFZ&X-Amz-Signature=0f3a5d7cdb06df0d2015f38c0aad61e0d4e6ae0b2adf5b1f9724450db3a3fc87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NOIV7Q%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBfuc4Mxco6ITadjjkj2Ulii4fLU%2FuOS3e8yDQuuuwY1AiEAmgLKdZp6SNIztB5%2Fmd6VUgtX5ZVQpFWdfkc%2F0aVv6hEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKlaI6nPNUDoRptoCrcA%2BptB7obv%2FHGe635MKjdpzVdcmti622yN8jlaDQWvhETgGuqTZpptM5TINEMZliAJAZt5jUeu4llKTEJlQB3qvbv4mInjIjqB3rvBWHoiSZNBr0NWA3QLvEJ0%2BD8sJCKG0RVBZZcxj%2FHg06UuZjd9Dc0HVtO6%2Fzav3QXLEbhMPPgQlkam4Ctu8VEjt%2BZlG8OgcwkmrNEdEIU0cymnUZVU1fKSrPVA38mS0CntuTFT1Lmh4xPaYo5o4tHcj1YNoyopbAmyXZ8kDuWtXxJsXQ8YvYtKCVw1geDy6K5RQFyWhvJzienZR%2F0iqP%2Fe%2FXHE7CsQq1GT4hi5UY00sJurume0X24eGWhqv%2BYis8ztUZdS4tJhjBrPB5Ejw%2FX0WzJJQX%2ByGtTFxNPbQ6JIGHeIIvvveZYUEhNe6Q89ReGTUlojaDCl5uD387zgcMgwuKEyf7wNmTK2IX%2BtHqO33wTFwmbk1W8lT50TbO2b3gfz3Ip0yAgRMql7HwbtIyE7GgV4R%2Fg4zcvSmDNZIPI7TsL2%2Bb6LHvIE%2F0vnf%2BEdMSOF5wZJ%2FsJWj%2Fk0ClIc6%2B%2BtTtbd5j8Ic2L5DsdXJlZd1%2BoQL%2F%2F8sf68jN6vuWNpsPuUPBp3hLAlhTQt%2B53ft51N7cMMKShg8EGOqUBPseBbRihofnazEJCuqm199a2nmessjzyBI%2BjCCPFr99VH4IImMntdMT5%2BB3fhvgegzRShPg6Fu27Uts6Nb3oEaCWshPBRPwGO63pGYW0pDKygUf9Lhiz204AIBQwEUUa0FLU0rdTJEgdv7XRbK%2BhXA75zcyovwwNh%2BFn1ujoQEhv2Rk6bIeWL2vQ5k%2BZrqQ6TH6dTLG1gBsx0Jl2dAZj8Ti8SwFZ&X-Amz-Signature=e076becb5a18ca07770a2769eb9f71b4ab905a7214f3a018550c2fbe9f537f38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
