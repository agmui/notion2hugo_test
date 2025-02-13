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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCATTXRL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B%2Fgn1utoX7FGYnwTClMVawXmPMNBLoQBKfGXUdzjmEAiEA9rGcaLv4TcYFp2K2NTZxsqvGbv7bkvu0EGcGnoZ4Nacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNc0oID92Mz4bdT94yrcA6BHMLjlrso3KzBMLdIX3RbWFr09OGzIgoeaRKnCMXAdXqiTED9mzYDDxfwve06huSIilw%2Fv5mGGnRSG9odwaP4voVMNH6PaHJhtv6%2Fz9W8wJoD7u53M8xwhzPFichicW5vOiyflXcLYCwCpoLfVBTM0MkTGqomTIDT06%2BaOYpyy1p8zBbpSsUyK8WkC7bNQeQydDeOPoYC%2Fdlb8R3IpKZDtry%2F478RBBOFs72z0uiWwb47FkOhJ%2B83aeBmgWY2aBk7ChRdYsOaCrB1jF4Nd53zCxoXZtqh2PUI%2BztTooYejXalmPcc7c78j3KrzZJrFDBLRyrro1d8DOI%2F6ja6MkjFOHF%2BFhcEIpE9GvG8vQLC%2Fagd1wwoEGVYtzwYRJpnnyxlPcQZPWsQzbrNjj9zGLSAJaTv1%2FJhQOyCTNhbkPNRm%2F3KqRaNxXJ43jPRc7ZuOfUSYkfxl2fkur8GwK%2BD5oxXgs1PNUitNKDVQw8Gj3XeEk1Xrv9uSaryLwRYCZ%2BdHYuhHzdG8lFR4zPFV2OMHR3yhc37L8hwQtHJmSMIRJx3A547maLUhwWcXE8FqkaY7ocutlU2fBPO6S0B2YOSIb0WXkt%2BxMCs3Uu5cS0zcYLltgPyZJsqUehCmpE46MInfuL0GOqUBnFxiuJzJywsFCP3tUp9j49m4o2LL0udgoV3KCnJVE5N4A3A6Z%2BHa7sO41DHc1EHJXJrFCPwO1URc%2FvmPLYyYwwjTajoUVRmqW1qHUOn6ILLlRmkOyJRUyqr930Sc9iShqchYomGH80YzOUMjN65BnZIemQhYtmD4i8fwLmmB43zr1Q42I5BdXsBRsXYVR4aJNzLAXSKTQ6r1Q9vqKdd1W6MFuO0O&X-Amz-Signature=14fc294e1c4e8388eecb7e872bbea7f0045f0a361de919ea706a2b120798032e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCATTXRL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B%2Fgn1utoX7FGYnwTClMVawXmPMNBLoQBKfGXUdzjmEAiEA9rGcaLv4TcYFp2K2NTZxsqvGbv7bkvu0EGcGnoZ4Nacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNc0oID92Mz4bdT94yrcA6BHMLjlrso3KzBMLdIX3RbWFr09OGzIgoeaRKnCMXAdXqiTED9mzYDDxfwve06huSIilw%2Fv5mGGnRSG9odwaP4voVMNH6PaHJhtv6%2Fz9W8wJoD7u53M8xwhzPFichicW5vOiyflXcLYCwCpoLfVBTM0MkTGqomTIDT06%2BaOYpyy1p8zBbpSsUyK8WkC7bNQeQydDeOPoYC%2Fdlb8R3IpKZDtry%2F478RBBOFs72z0uiWwb47FkOhJ%2B83aeBmgWY2aBk7ChRdYsOaCrB1jF4Nd53zCxoXZtqh2PUI%2BztTooYejXalmPcc7c78j3KrzZJrFDBLRyrro1d8DOI%2F6ja6MkjFOHF%2BFhcEIpE9GvG8vQLC%2Fagd1wwoEGVYtzwYRJpnnyxlPcQZPWsQzbrNjj9zGLSAJaTv1%2FJhQOyCTNhbkPNRm%2F3KqRaNxXJ43jPRc7ZuOfUSYkfxl2fkur8GwK%2BD5oxXgs1PNUitNKDVQw8Gj3XeEk1Xrv9uSaryLwRYCZ%2BdHYuhHzdG8lFR4zPFV2OMHR3yhc37L8hwQtHJmSMIRJx3A547maLUhwWcXE8FqkaY7ocutlU2fBPO6S0B2YOSIb0WXkt%2BxMCs3Uu5cS0zcYLltgPyZJsqUehCmpE46MInfuL0GOqUBnFxiuJzJywsFCP3tUp9j49m4o2LL0udgoV3KCnJVE5N4A3A6Z%2BHa7sO41DHc1EHJXJrFCPwO1URc%2FvmPLYyYwwjTajoUVRmqW1qHUOn6ILLlRmkOyJRUyqr930Sc9iShqchYomGH80YzOUMjN65BnZIemQhYtmD4i8fwLmmB43zr1Q42I5BdXsBRsXYVR4aJNzLAXSKTQ6r1Q9vqKdd1W6MFuO0O&X-Amz-Signature=af7bdd2ccd708b5802d48abe16097ee77c3209c34391f0787312be61c6afa2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCATTXRL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B%2Fgn1utoX7FGYnwTClMVawXmPMNBLoQBKfGXUdzjmEAiEA9rGcaLv4TcYFp2K2NTZxsqvGbv7bkvu0EGcGnoZ4Nacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNc0oID92Mz4bdT94yrcA6BHMLjlrso3KzBMLdIX3RbWFr09OGzIgoeaRKnCMXAdXqiTED9mzYDDxfwve06huSIilw%2Fv5mGGnRSG9odwaP4voVMNH6PaHJhtv6%2Fz9W8wJoD7u53M8xwhzPFichicW5vOiyflXcLYCwCpoLfVBTM0MkTGqomTIDT06%2BaOYpyy1p8zBbpSsUyK8WkC7bNQeQydDeOPoYC%2Fdlb8R3IpKZDtry%2F478RBBOFs72z0uiWwb47FkOhJ%2B83aeBmgWY2aBk7ChRdYsOaCrB1jF4Nd53zCxoXZtqh2PUI%2BztTooYejXalmPcc7c78j3KrzZJrFDBLRyrro1d8DOI%2F6ja6MkjFOHF%2BFhcEIpE9GvG8vQLC%2Fagd1wwoEGVYtzwYRJpnnyxlPcQZPWsQzbrNjj9zGLSAJaTv1%2FJhQOyCTNhbkPNRm%2F3KqRaNxXJ43jPRc7ZuOfUSYkfxl2fkur8GwK%2BD5oxXgs1PNUitNKDVQw8Gj3XeEk1Xrv9uSaryLwRYCZ%2BdHYuhHzdG8lFR4zPFV2OMHR3yhc37L8hwQtHJmSMIRJx3A547maLUhwWcXE8FqkaY7ocutlU2fBPO6S0B2YOSIb0WXkt%2BxMCs3Uu5cS0zcYLltgPyZJsqUehCmpE46MInfuL0GOqUBnFxiuJzJywsFCP3tUp9j49m4o2LL0udgoV3KCnJVE5N4A3A6Z%2BHa7sO41DHc1EHJXJrFCPwO1URc%2FvmPLYyYwwjTajoUVRmqW1qHUOn6ILLlRmkOyJRUyqr930Sc9iShqchYomGH80YzOUMjN65BnZIemQhYtmD4i8fwLmmB43zr1Q42I5BdXsBRsXYVR4aJNzLAXSKTQ6r1Q9vqKdd1W6MFuO0O&X-Amz-Signature=e7fb7a108b737c4b132a4cf996d969ba638fffd98ee95b5dd6ba0459c4dc1bac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
