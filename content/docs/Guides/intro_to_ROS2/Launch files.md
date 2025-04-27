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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIJQ66M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvaNBpIvI4YFLj%2BBQEirIGUx6Jg%2FD7VwkgBpzdGiLS1AiEAtwtYpBNrkjXmDSlPWfxGIt%2Ft2tzqN%2FRjMNlreifjT54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIzwaPh3%2F%2B1qhNfBOyrcA10vOdz3BQ6GiR00ZV6qovKVmkTcM5OM4XVfLpgAHA2fhxU4Bc0OuE36nCRNDqwsR8cW7KzcNuTzbKOZ2MvvHvtvIh68FWI2IWkuFOgVpebnqm2xqIvnBrw9LgkVeCHSvpyKM5j8qGZFuYxn1E%2FXFC6%2FfRzH54O6UccVkmNba46nhJxOOWxhlL7AhUX4%2F7P9ezf9%2Ft%2F9xzPnleHlnt6HY2KvimbFXgs889G7mz4jfva63%2FuyqZdgBrw6pWgg7zPaK2OOJUDdpOFbJ%2FLVMaEM1xKTjGATEJry6J0zcHXfsjB8v4uLKsfMQxUW4dlxkd9NokV6z6f4Uq2vY9wIBYIyDfMXEPZDSsCTjjns8AMo1H5Uat3n4vdSPNpxniQRbp96%2F3jjOmsEehqEwIDZwz5Z38WgcuDtWp4PwD5T0hvjkf4SX%2B1FeG3Bt2dG3HAGCOKYoA7odpJcY7MaJ%2F4R86%2BgAYVcKlZfFcMfAKTXmrQvbvV4rMfAfuHdfT6%2FxcQ7wNT2yZjqSz0p3uncjXuEBkbg%2BQfXsW%2BbGSmBoRBLBMVfockQy8RlNo7vMLxA2LnvkyqUseyskXRnUKlkxAHU7Lmj1NFcXJCmrULKOlFPDX1h7UwptE3PIx8sCiJz7u2rMPS%2FtcAGOqUBIn3LS3%2F9Xs3640PY%2Buh2wgmCXH0U%2FmMdR7ROAw%2FYDAA2sm8MC%2BeUaCFU6m%2FWiWAnZWT%2B3%2FmxKuQIoBxCi3kBKjfuTGrcOsA%2FsHVLgiiomhRFhyd2LgIP6NLKFEgPi%2BzOIJrXxbYGfJ%2BTnSBBqasi08XpZ%2BoVg8D65UHUgP3qK9JYFftWm%2FiTKnlotRciaBuq00iaE0btf%2BnjlMv6fOrXUUKp8G1o&X-Amz-Signature=5aa22b061338a8fbb3c644f5dd8ff0ec0496b6744a023d48324a8a7839231e54&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIJQ66M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvaNBpIvI4YFLj%2BBQEirIGUx6Jg%2FD7VwkgBpzdGiLS1AiEAtwtYpBNrkjXmDSlPWfxGIt%2Ft2tzqN%2FRjMNlreifjT54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIzwaPh3%2F%2B1qhNfBOyrcA10vOdz3BQ6GiR00ZV6qovKVmkTcM5OM4XVfLpgAHA2fhxU4Bc0OuE36nCRNDqwsR8cW7KzcNuTzbKOZ2MvvHvtvIh68FWI2IWkuFOgVpebnqm2xqIvnBrw9LgkVeCHSvpyKM5j8qGZFuYxn1E%2FXFC6%2FfRzH54O6UccVkmNba46nhJxOOWxhlL7AhUX4%2F7P9ezf9%2Ft%2F9xzPnleHlnt6HY2KvimbFXgs889G7mz4jfva63%2FuyqZdgBrw6pWgg7zPaK2OOJUDdpOFbJ%2FLVMaEM1xKTjGATEJry6J0zcHXfsjB8v4uLKsfMQxUW4dlxkd9NokV6z6f4Uq2vY9wIBYIyDfMXEPZDSsCTjjns8AMo1H5Uat3n4vdSPNpxniQRbp96%2F3jjOmsEehqEwIDZwz5Z38WgcuDtWp4PwD5T0hvjkf4SX%2B1FeG3Bt2dG3HAGCOKYoA7odpJcY7MaJ%2F4R86%2BgAYVcKlZfFcMfAKTXmrQvbvV4rMfAfuHdfT6%2FxcQ7wNT2yZjqSz0p3uncjXuEBkbg%2BQfXsW%2BbGSmBoRBLBMVfockQy8RlNo7vMLxA2LnvkyqUseyskXRnUKlkxAHU7Lmj1NFcXJCmrULKOlFPDX1h7UwptE3PIx8sCiJz7u2rMPS%2FtcAGOqUBIn3LS3%2F9Xs3640PY%2Buh2wgmCXH0U%2FmMdR7ROAw%2FYDAA2sm8MC%2BeUaCFU6m%2FWiWAnZWT%2B3%2FmxKuQIoBxCi3kBKjfuTGrcOsA%2FsHVLgiiomhRFhyd2LgIP6NLKFEgPi%2BzOIJrXxbYGfJ%2BTnSBBqasi08XpZ%2BoVg8D65UHUgP3qK9JYFftWm%2FiTKnlotRciaBuq00iaE0btf%2BnjlMv6fOrXUUKp8G1o&X-Amz-Signature=154aad96ade96bd304a30eaec262f44542273868e9c2112f3331533171ae54d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIJQ66M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvaNBpIvI4YFLj%2BBQEirIGUx6Jg%2FD7VwkgBpzdGiLS1AiEAtwtYpBNrkjXmDSlPWfxGIt%2Ft2tzqN%2FRjMNlreifjT54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIzwaPh3%2F%2B1qhNfBOyrcA10vOdz3BQ6GiR00ZV6qovKVmkTcM5OM4XVfLpgAHA2fhxU4Bc0OuE36nCRNDqwsR8cW7KzcNuTzbKOZ2MvvHvtvIh68FWI2IWkuFOgVpebnqm2xqIvnBrw9LgkVeCHSvpyKM5j8qGZFuYxn1E%2FXFC6%2FfRzH54O6UccVkmNba46nhJxOOWxhlL7AhUX4%2F7P9ezf9%2Ft%2F9xzPnleHlnt6HY2KvimbFXgs889G7mz4jfva63%2FuyqZdgBrw6pWgg7zPaK2OOJUDdpOFbJ%2FLVMaEM1xKTjGATEJry6J0zcHXfsjB8v4uLKsfMQxUW4dlxkd9NokV6z6f4Uq2vY9wIBYIyDfMXEPZDSsCTjjns8AMo1H5Uat3n4vdSPNpxniQRbp96%2F3jjOmsEehqEwIDZwz5Z38WgcuDtWp4PwD5T0hvjkf4SX%2B1FeG3Bt2dG3HAGCOKYoA7odpJcY7MaJ%2F4R86%2BgAYVcKlZfFcMfAKTXmrQvbvV4rMfAfuHdfT6%2FxcQ7wNT2yZjqSz0p3uncjXuEBkbg%2BQfXsW%2BbGSmBoRBLBMVfockQy8RlNo7vMLxA2LnvkyqUseyskXRnUKlkxAHU7Lmj1NFcXJCmrULKOlFPDX1h7UwptE3PIx8sCiJz7u2rMPS%2FtcAGOqUBIn3LS3%2F9Xs3640PY%2Buh2wgmCXH0U%2FmMdR7ROAw%2FYDAA2sm8MC%2BeUaCFU6m%2FWiWAnZWT%2B3%2FmxKuQIoBxCi3kBKjfuTGrcOsA%2FsHVLgiiomhRFhyd2LgIP6NLKFEgPi%2BzOIJrXxbYGfJ%2BTnSBBqasi08XpZ%2BoVg8D65UHUgP3qK9JYFftWm%2FiTKnlotRciaBuq00iaE0btf%2BnjlMv6fOrXUUKp8G1o&X-Amz-Signature=0e05f6f0911865d4cb5ffec0833550aec7f13b91e3cf9751c1a0d8101e9a709f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
