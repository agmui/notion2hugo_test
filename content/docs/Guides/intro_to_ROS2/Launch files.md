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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HONWJA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2FMfoB%2FVvn0TrGpjOssngD%2Ftupdb07u0PPWeCYMNpTgIgap2k29I9zEVmIcCVO5MZI6A%2FrER5vhXel9%2Bxt%2BFaq8gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNHYKMjW%2FHPaUCngCrcA0jDt7ob1Jnp2rOA0rWsBt4ihUlERfk4Jj6wL6K9tCvPZbnwYySeMTXdFMclnJ1ReT8whTMRvkycbA4IHTqVSYJYt0s7bOvpBAA3A5Dh4xbz5RArpimm5dSWSCGog8sZ4yg7puOC9dv05gxMM%2Bca4CVXRzdh%2B6PVDEFpLPWm77%2FUFRP5z%2FMtZX5Gjxa2KtFCH12tvniNVjpUCAsv%2BGLdDj1FcI%2BTFKvexnODGAIyyzyK4GVux%2FfQOBYW38Ip90vZz%2FrF%2FQyvWBy2Gn7%2BcbPKXYC0IPQZVpAkJTXYGrzI%2BTVFv3dgRmEm7q%2BSGnvLLnbRfExl7bsuC%2Fk%2BLz4wPXiNO0I4iTOSeOsW17et7G1tRBIJyNwtTjJf6Psz06UVr%2FiTWxKtBd7l6W7juQ9ahcWK%2F7AASQ7mvNfu%2BmiTID3B%2FOfb7fayvCjPVFuM45HLlPNXaonChXGeDqE6esGmC3Z6OwoK3ZtixeJMZaxcQo%2FQjpIlC%2FHUX3ikeDWxuEaDGMOkm8cFL%2FABnJ%2FK3giOjmsaVUagWxXDPwzHfZlrM5dDX9PXP5GjPa%2FhM0IPLl3EEEcpf2c2ftrOpovuR1JeKveob71bKtwR0SyuNmpEhJVHxSR%2Fj30sCBK4MvP5pTnIMOSy48EGOqUBWy5NgFZpw1oSR%2B1baP64E%2FntQFDlIOitonhj3tMBKh%2B09XV%2FsQV9it%2BxlLpnnnJkCgCGlzBuXkSDLUR7LtleIRMIUe18ISVDBW8L4hFRVL9ZpxsnBJ9IM%2FXEoA1%2BUknQwd98wSFMjcdJmEfbJtpGdWKS9ud8TvZHbAYmHRTXrvxicF%2BEsdkrba%2FcxvfRbIFo%2Fel2bfwPbwqGUNcAsHn%2FIPJLUVwo&X-Amz-Signature=7e4fececeb0022ed8b4011ec87863ab0b323bf1ece2b1498c0271541f357b914&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HONWJA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2FMfoB%2FVvn0TrGpjOssngD%2Ftupdb07u0PPWeCYMNpTgIgap2k29I9zEVmIcCVO5MZI6A%2FrER5vhXel9%2Bxt%2BFaq8gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNHYKMjW%2FHPaUCngCrcA0jDt7ob1Jnp2rOA0rWsBt4ihUlERfk4Jj6wL6K9tCvPZbnwYySeMTXdFMclnJ1ReT8whTMRvkycbA4IHTqVSYJYt0s7bOvpBAA3A5Dh4xbz5RArpimm5dSWSCGog8sZ4yg7puOC9dv05gxMM%2Bca4CVXRzdh%2B6PVDEFpLPWm77%2FUFRP5z%2FMtZX5Gjxa2KtFCH12tvniNVjpUCAsv%2BGLdDj1FcI%2BTFKvexnODGAIyyzyK4GVux%2FfQOBYW38Ip90vZz%2FrF%2FQyvWBy2Gn7%2BcbPKXYC0IPQZVpAkJTXYGrzI%2BTVFv3dgRmEm7q%2BSGnvLLnbRfExl7bsuC%2Fk%2BLz4wPXiNO0I4iTOSeOsW17et7G1tRBIJyNwtTjJf6Psz06UVr%2FiTWxKtBd7l6W7juQ9ahcWK%2F7AASQ7mvNfu%2BmiTID3B%2FOfb7fayvCjPVFuM45HLlPNXaonChXGeDqE6esGmC3Z6OwoK3ZtixeJMZaxcQo%2FQjpIlC%2FHUX3ikeDWxuEaDGMOkm8cFL%2FABnJ%2FK3giOjmsaVUagWxXDPwzHfZlrM5dDX9PXP5GjPa%2FhM0IPLl3EEEcpf2c2ftrOpovuR1JeKveob71bKtwR0SyuNmpEhJVHxSR%2Fj30sCBK4MvP5pTnIMOSy48EGOqUBWy5NgFZpw1oSR%2B1baP64E%2FntQFDlIOitonhj3tMBKh%2B09XV%2FsQV9it%2BxlLpnnnJkCgCGlzBuXkSDLUR7LtleIRMIUe18ISVDBW8L4hFRVL9ZpxsnBJ9IM%2FXEoA1%2BUknQwd98wSFMjcdJmEfbJtpGdWKS9ud8TvZHbAYmHRTXrvxicF%2BEsdkrba%2FcxvfRbIFo%2Fel2bfwPbwqGUNcAsHn%2FIPJLUVwo&X-Amz-Signature=4f3daf353cbe9a1e500fabb21b97b86b9a3134c76f573d85a9adae4d1cb11750&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HONWJA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2FMfoB%2FVvn0TrGpjOssngD%2Ftupdb07u0PPWeCYMNpTgIgap2k29I9zEVmIcCVO5MZI6A%2FrER5vhXel9%2Bxt%2BFaq8gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNHYKMjW%2FHPaUCngCrcA0jDt7ob1Jnp2rOA0rWsBt4ihUlERfk4Jj6wL6K9tCvPZbnwYySeMTXdFMclnJ1ReT8whTMRvkycbA4IHTqVSYJYt0s7bOvpBAA3A5Dh4xbz5RArpimm5dSWSCGog8sZ4yg7puOC9dv05gxMM%2Bca4CVXRzdh%2B6PVDEFpLPWm77%2FUFRP5z%2FMtZX5Gjxa2KtFCH12tvniNVjpUCAsv%2BGLdDj1FcI%2BTFKvexnODGAIyyzyK4GVux%2FfQOBYW38Ip90vZz%2FrF%2FQyvWBy2Gn7%2BcbPKXYC0IPQZVpAkJTXYGrzI%2BTVFv3dgRmEm7q%2BSGnvLLnbRfExl7bsuC%2Fk%2BLz4wPXiNO0I4iTOSeOsW17et7G1tRBIJyNwtTjJf6Psz06UVr%2FiTWxKtBd7l6W7juQ9ahcWK%2F7AASQ7mvNfu%2BmiTID3B%2FOfb7fayvCjPVFuM45HLlPNXaonChXGeDqE6esGmC3Z6OwoK3ZtixeJMZaxcQo%2FQjpIlC%2FHUX3ikeDWxuEaDGMOkm8cFL%2FABnJ%2FK3giOjmsaVUagWxXDPwzHfZlrM5dDX9PXP5GjPa%2FhM0IPLl3EEEcpf2c2ftrOpovuR1JeKveob71bKtwR0SyuNmpEhJVHxSR%2Fj30sCBK4MvP5pTnIMOSy48EGOqUBWy5NgFZpw1oSR%2B1baP64E%2FntQFDlIOitonhj3tMBKh%2B09XV%2FsQV9it%2BxlLpnnnJkCgCGlzBuXkSDLUR7LtleIRMIUe18ISVDBW8L4hFRVL9ZpxsnBJ9IM%2FXEoA1%2BUknQwd98wSFMjcdJmEfbJtpGdWKS9ud8TvZHbAYmHRTXrvxicF%2BEsdkrba%2FcxvfRbIFo%2Fel2bfwPbwqGUNcAsHn%2FIPJLUVwo&X-Amz-Signature=5e0256dc5dbf9066701b4c2d86fd079bd21fc3ffd8694a7ab45ec5e943c15fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
