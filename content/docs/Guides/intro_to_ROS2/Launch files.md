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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSIQA4T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzZkLgaBsN8mJb203lkchwNwzNMEdqyCCb85NahoUpAgIgH8ijUmYuVQVzE%2BRzOxADcan52%2FF0GbyAkoOij01uySMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq%2FAf9xUcMwXCWrJyrcA8Xjob9qUD%2F%2Banf8vn%2Fx%2FWOHXF78ZkYixo%2BsdJhrKTruKP0ErNa%2FmAIWt9C5BypwI2mN4k8UDLlSVqhNwdePszLGyIbIPbqam7FHqjforbyN9tr9kNktmW2lmuL6YcEErvQayWACQALN8cTyMAXmEA5E6lvMJ7S0JVq9jrvBnTNjK8lrExcut4cgHTsqfVo9ldeI2hdA9RlmJUzNfrEgi8oGSlvrKWD%2BXRnoGQeNfzjzYjzmgjuIRTuWH9z8dHd9PptOd2IxoKxfvMSer3u8T%2BI%2FVrOqvdc06JrZ4mRaiCG6dgyr136GrMnxDVOU91BOilbu9G8pox1XjbB3tEtvgXIPScdwS%2Fh%2F8NkQMTcP%2FXPnmAThh2BieEo3EtK3YfDQV5I6GHw8mDFqoROy3BcmzSzq62VxwRpoTTBP6RUiFaVFYJD3njdIUJWT0OfMmViOimYUifrSC%2Fq%2Fuk4xeHC3vURVS2iXacDUXvQ%2FzN%2BvMg37gqU7Q9gq%2FsUZ9xSAkC%2Ft6ow42QR%2F32JtzWLs8YoVs96apXV4BzzRGAU7N%2B1aipaX8jCqNW6Lbd5XFu99mxsS7GhnAU2pZLufYssCOEGmYLUOsOqjHYH2pyECkWK9g8lCX4J8FaeN6v%2F6SIJrMKD9lb4GOqUBpKFAjMgRagZaV87SYGWY886AHl8QzCPDy0I%2BScy5m8IIa48QDb3qqtOVwCVy27nmkWifiai8ysmjaMgFUFXMEEcdEcgE8KkIr00MLVLj0eCxMzFbP4Wn0xCD27xeeZrmEosBNZQYIqIEZT%2FldesnQ8uqRuLVQ1yRGPWQcjUmmygfVAgEPvZJzmHsuiqfaZyS2N0hag8xGQVOrcYhDJPTpipwDngj&X-Amz-Signature=9807ad6125a41fee9b19419cf3c9ff9b160b8c21fa46fdb7206a88567ffa521b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSIQA4T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzZkLgaBsN8mJb203lkchwNwzNMEdqyCCb85NahoUpAgIgH8ijUmYuVQVzE%2BRzOxADcan52%2FF0GbyAkoOij01uySMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq%2FAf9xUcMwXCWrJyrcA8Xjob9qUD%2F%2Banf8vn%2Fx%2FWOHXF78ZkYixo%2BsdJhrKTruKP0ErNa%2FmAIWt9C5BypwI2mN4k8UDLlSVqhNwdePszLGyIbIPbqam7FHqjforbyN9tr9kNktmW2lmuL6YcEErvQayWACQALN8cTyMAXmEA5E6lvMJ7S0JVq9jrvBnTNjK8lrExcut4cgHTsqfVo9ldeI2hdA9RlmJUzNfrEgi8oGSlvrKWD%2BXRnoGQeNfzjzYjzmgjuIRTuWH9z8dHd9PptOd2IxoKxfvMSer3u8T%2BI%2FVrOqvdc06JrZ4mRaiCG6dgyr136GrMnxDVOU91BOilbu9G8pox1XjbB3tEtvgXIPScdwS%2Fh%2F8NkQMTcP%2FXPnmAThh2BieEo3EtK3YfDQV5I6GHw8mDFqoROy3BcmzSzq62VxwRpoTTBP6RUiFaVFYJD3njdIUJWT0OfMmViOimYUifrSC%2Fq%2Fuk4xeHC3vURVS2iXacDUXvQ%2FzN%2BvMg37gqU7Q9gq%2FsUZ9xSAkC%2Ft6ow42QR%2F32JtzWLs8YoVs96apXV4BzzRGAU7N%2B1aipaX8jCqNW6Lbd5XFu99mxsS7GhnAU2pZLufYssCOEGmYLUOsOqjHYH2pyECkWK9g8lCX4J8FaeN6v%2F6SIJrMKD9lb4GOqUBpKFAjMgRagZaV87SYGWY886AHl8QzCPDy0I%2BScy5m8IIa48QDb3qqtOVwCVy27nmkWifiai8ysmjaMgFUFXMEEcdEcgE8KkIr00MLVLj0eCxMzFbP4Wn0xCD27xeeZrmEosBNZQYIqIEZT%2FldesnQ8uqRuLVQ1yRGPWQcjUmmygfVAgEPvZJzmHsuiqfaZyS2N0hag8xGQVOrcYhDJPTpipwDngj&X-Amz-Signature=658a4a3c55764d40d73d35cc63b1e5178eb34e280d1dfc0f6ed6b3a640a3482c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSIQA4T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzZkLgaBsN8mJb203lkchwNwzNMEdqyCCb85NahoUpAgIgH8ijUmYuVQVzE%2BRzOxADcan52%2FF0GbyAkoOij01uySMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq%2FAf9xUcMwXCWrJyrcA8Xjob9qUD%2F%2Banf8vn%2Fx%2FWOHXF78ZkYixo%2BsdJhrKTruKP0ErNa%2FmAIWt9C5BypwI2mN4k8UDLlSVqhNwdePszLGyIbIPbqam7FHqjforbyN9tr9kNktmW2lmuL6YcEErvQayWACQALN8cTyMAXmEA5E6lvMJ7S0JVq9jrvBnTNjK8lrExcut4cgHTsqfVo9ldeI2hdA9RlmJUzNfrEgi8oGSlvrKWD%2BXRnoGQeNfzjzYjzmgjuIRTuWH9z8dHd9PptOd2IxoKxfvMSer3u8T%2BI%2FVrOqvdc06JrZ4mRaiCG6dgyr136GrMnxDVOU91BOilbu9G8pox1XjbB3tEtvgXIPScdwS%2Fh%2F8NkQMTcP%2FXPnmAThh2BieEo3EtK3YfDQV5I6GHw8mDFqoROy3BcmzSzq62VxwRpoTTBP6RUiFaVFYJD3njdIUJWT0OfMmViOimYUifrSC%2Fq%2Fuk4xeHC3vURVS2iXacDUXvQ%2FzN%2BvMg37gqU7Q9gq%2FsUZ9xSAkC%2Ft6ow42QR%2F32JtzWLs8YoVs96apXV4BzzRGAU7N%2B1aipaX8jCqNW6Lbd5XFu99mxsS7GhnAU2pZLufYssCOEGmYLUOsOqjHYH2pyECkWK9g8lCX4J8FaeN6v%2F6SIJrMKD9lb4GOqUBpKFAjMgRagZaV87SYGWY886AHl8QzCPDy0I%2BScy5m8IIa48QDb3qqtOVwCVy27nmkWifiai8ysmjaMgFUFXMEEcdEcgE8KkIr00MLVLj0eCxMzFbP4Wn0xCD27xeeZrmEosBNZQYIqIEZT%2FldesnQ8uqRuLVQ1yRGPWQcjUmmygfVAgEPvZJzmHsuiqfaZyS2N0hag8xGQVOrcYhDJPTpipwDngj&X-Amz-Signature=de0268142e2e5628f0a088e456add8e7b3d4c37ac8886e29f08d0b9517aa12a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
