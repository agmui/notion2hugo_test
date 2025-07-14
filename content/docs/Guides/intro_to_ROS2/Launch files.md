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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA246NEK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC7EiLDgpoiGaFQjgMWYtdRu8XYsPAGn%2Be933wVbrJcVAiBGB0w10E%2FwwRZYAkwPfJT7c8%2BX8KwWpWt61UVEiwuCJCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiTGfvjhtTlXYXJs0KtwDTOA6vRTPFGrff382dKtR0jz2NUP2KicMVXAKcr58e5DrE6P9Kvc47UFzXxH3%2BBxUIqXoPYEiW9yGy41tLgQ6fRVNnCHbbAofWXfLpshQgnEUBkF9p0MiF7cqBq39wqnHjrhHkvxZDvoKSomALUDvTrZzC3RQ%2FKEKSeXsO61vNknBB9ZQx2uEuptBzEZrdlVHZa%2B5Sxd82HZN3DMzLjpyP9CCjSxxt2IhXjyiB8BkQM93jyIIFuRODrnA4noHiNQEO6whL6S1m4DI4H%2FNe2ZCUXDee22%2FwfAtH5iahIQqM0tMn8KzOyvuus%2FRHFDI97l9jhxwD4Zpa%2BCKGd31Ce%2BBY7ISXuS8i%2BVT0EzuE%2B690nQR4WvLLp%2FOOjnS5k%2Fic5%2FIXmkdhVn0NcGYOSy7wfGfYTT8i%2F1s0JJne6MAsDFOsbi8SeCRILQY9kmPBf4L78dQ3Ry1gtbUmX2E%2FchYbj%2BkdQRdpBeLzn%2BfPpfKPgwUU%2FsrDLssSLUv6%2B2%2BnysCQbLUKBJ2mkrzo7Hzc1fLJQYua5v%2BPCoy7ywHQuN8riER9Si64K%2FIhOCL1bJ407hvrR%2FK7cVuCmjP%2BOoMpimOoRdaEpSQaUleJclXMjWJM4Y6N%2FazRCNIykCgfWcvF7gwjvjVwwY6pgGrpy%2Fjax69Rq96RK4JE%2BKt3Z7lnNIuNSiCILuYDAu9e1eCzfBytLnNgQWwllyWqzSnhF7d7sLX3lMTrhT4kYIDDejs40XNy5nLlmtffpnFka3ouEmYCv%2FAZbKWXhsmxgz5THBiV34VTFfw%2BBsD9S%2B3AfDrbQF1duSqFQsE1%2B0s6zlA3VsB2tHiPdsby%2F5Su44y50zr6tYTX1SmLOa%2B1J85Af%2F%2BPgw2&X-Amz-Signature=dcdd98b0810b0665a158386e2287f4086f14ef46811d8b0d938cdeef0a0d8fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA246NEK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC7EiLDgpoiGaFQjgMWYtdRu8XYsPAGn%2Be933wVbrJcVAiBGB0w10E%2FwwRZYAkwPfJT7c8%2BX8KwWpWt61UVEiwuCJCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiTGfvjhtTlXYXJs0KtwDTOA6vRTPFGrff382dKtR0jz2NUP2KicMVXAKcr58e5DrE6P9Kvc47UFzXxH3%2BBxUIqXoPYEiW9yGy41tLgQ6fRVNnCHbbAofWXfLpshQgnEUBkF9p0MiF7cqBq39wqnHjrhHkvxZDvoKSomALUDvTrZzC3RQ%2FKEKSeXsO61vNknBB9ZQx2uEuptBzEZrdlVHZa%2B5Sxd82HZN3DMzLjpyP9CCjSxxt2IhXjyiB8BkQM93jyIIFuRODrnA4noHiNQEO6whL6S1m4DI4H%2FNe2ZCUXDee22%2FwfAtH5iahIQqM0tMn8KzOyvuus%2FRHFDI97l9jhxwD4Zpa%2BCKGd31Ce%2BBY7ISXuS8i%2BVT0EzuE%2B690nQR4WvLLp%2FOOjnS5k%2Fic5%2FIXmkdhVn0NcGYOSy7wfGfYTT8i%2F1s0JJne6MAsDFOsbi8SeCRILQY9kmPBf4L78dQ3Ry1gtbUmX2E%2FchYbj%2BkdQRdpBeLzn%2BfPpfKPgwUU%2FsrDLssSLUv6%2B2%2BnysCQbLUKBJ2mkrzo7Hzc1fLJQYua5v%2BPCoy7ywHQuN8riER9Si64K%2FIhOCL1bJ407hvrR%2FK7cVuCmjP%2BOoMpimOoRdaEpSQaUleJclXMjWJM4Y6N%2FazRCNIykCgfWcvF7gwjvjVwwY6pgGrpy%2Fjax69Rq96RK4JE%2BKt3Z7lnNIuNSiCILuYDAu9e1eCzfBytLnNgQWwllyWqzSnhF7d7sLX3lMTrhT4kYIDDejs40XNy5nLlmtffpnFka3ouEmYCv%2FAZbKWXhsmxgz5THBiV34VTFfw%2BBsD9S%2B3AfDrbQF1duSqFQsE1%2B0s6zlA3VsB2tHiPdsby%2F5Su44y50zr6tYTX1SmLOa%2B1J85Af%2F%2BPgw2&X-Amz-Signature=a34f40bf437ca86703e6f76bca94c62e83be89a766ce30087e98792102323d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA246NEK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC7EiLDgpoiGaFQjgMWYtdRu8XYsPAGn%2Be933wVbrJcVAiBGB0w10E%2FwwRZYAkwPfJT7c8%2BX8KwWpWt61UVEiwuCJCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiTGfvjhtTlXYXJs0KtwDTOA6vRTPFGrff382dKtR0jz2NUP2KicMVXAKcr58e5DrE6P9Kvc47UFzXxH3%2BBxUIqXoPYEiW9yGy41tLgQ6fRVNnCHbbAofWXfLpshQgnEUBkF9p0MiF7cqBq39wqnHjrhHkvxZDvoKSomALUDvTrZzC3RQ%2FKEKSeXsO61vNknBB9ZQx2uEuptBzEZrdlVHZa%2B5Sxd82HZN3DMzLjpyP9CCjSxxt2IhXjyiB8BkQM93jyIIFuRODrnA4noHiNQEO6whL6S1m4DI4H%2FNe2ZCUXDee22%2FwfAtH5iahIQqM0tMn8KzOyvuus%2FRHFDI97l9jhxwD4Zpa%2BCKGd31Ce%2BBY7ISXuS8i%2BVT0EzuE%2B690nQR4WvLLp%2FOOjnS5k%2Fic5%2FIXmkdhVn0NcGYOSy7wfGfYTT8i%2F1s0JJne6MAsDFOsbi8SeCRILQY9kmPBf4L78dQ3Ry1gtbUmX2E%2FchYbj%2BkdQRdpBeLzn%2BfPpfKPgwUU%2FsrDLssSLUv6%2B2%2BnysCQbLUKBJ2mkrzo7Hzc1fLJQYua5v%2BPCoy7ywHQuN8riER9Si64K%2FIhOCL1bJ407hvrR%2FK7cVuCmjP%2BOoMpimOoRdaEpSQaUleJclXMjWJM4Y6N%2FazRCNIykCgfWcvF7gwjvjVwwY6pgGrpy%2Fjax69Rq96RK4JE%2BKt3Z7lnNIuNSiCILuYDAu9e1eCzfBytLnNgQWwllyWqzSnhF7d7sLX3lMTrhT4kYIDDejs40XNy5nLlmtffpnFka3ouEmYCv%2FAZbKWXhsmxgz5THBiV34VTFfw%2BBsD9S%2B3AfDrbQF1duSqFQsE1%2B0s6zlA3VsB2tHiPdsby%2F5Su44y50zr6tYTX1SmLOa%2B1J85Af%2F%2BPgw2&X-Amz-Signature=1f6c2d96b317f092c261e0427b46345e4500ff6a925cabd183371d2f32a81211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
