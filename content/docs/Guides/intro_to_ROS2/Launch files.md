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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTLVIAX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA64eJYcpUcyBU9HWA9UbQzVlvB5ZTd0Mnu9%2BWykmvGmAiEA%2BBZG2r9nL4lLKFvdE89qfbpLK9jWsJbAN1c6c%2FmHDxEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNcsmgxaq%2F4DE2lBiCrcA7m9TNBBcdiueKsG17mTn7dJQOJJYxX%2B80w2dzmpFsdh7m5%2F3V%2FUo32sk0A%2BL4QtPRJwQa3OiJxmJlrv8Q%2Fo6QxZ1OHjwCiR5o%2FIlCfrSeaDeipO%2FJVRBGdsddkqDpuWHVlBY0Fw71uoSOCfNyM5WbK1WSjZFFuCFOkOxJ9HiUFgUgERRhNfB9faa3jHG9G8SMWAfuDcnjxP9ecLYpl%2FBOjNNcQNKf4UCNXoGeH1YEcmqhNV39lf8NH5OzFqSXq2t41odUPimhlpBv0EF%2FTDnlYvkJvQnvZeJHG2afVnjIaCBwjj1SmFT4kHx%2BZljGRi20e9cEdMaNP9YVBzciD6M4SiVTvU0piyK%2FTYCCEbnQ6tFKPHcorpvX%2FHj2boAuASWvGbtw1CojaNSSnwC3%2FGtgiQSXgUn%2BEFMDBjRVDbNAidPrRZfmcLGkb3Q7PbHPumtrrECwUNuBOuZNs6E5Yewk4t41wKYk6QQTK5dwRZPIfPzwjZMPgsyuAgMqE%2BN7%2F6uv%2BscNzzgnJDZJp8gFIWXeMEW7w9H%2Boc9UWHoZyimBLeQiErWae87ByR8yML1wZDKu0ShG9i4VXTs2jBg15maNRVSUn743ARD%2F14KjEndEUvXlk4zwFtcDPxGVo3MLyX6MAGOqUBHEhWq9wQQnD0VOTHX44k6%2BuMQOMGHKqOaUj0AnzJgxGsKLOk4FHX%2Fgf04%2Fi%2BsAkhj50QzCk0nZFZ%2F%2FPCnD0ddYRbPgW88AmfJ5UjaYnj4ytJEco8auUKUHLMPLqsafEcSYIa8cVdLqbhc%2Bu0nELs3U27MlpffaUjzBLuPaijXjgF80HKKmk9XZdb8IYzGv%2BXlkybqCi7fIDaKpBnXNEjq6%2BnKQst&X-Amz-Signature=5c0e2142384aa13aa537d5defdcfd031d44d2ca6138308da4e0e74b6aa03d0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTLVIAX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA64eJYcpUcyBU9HWA9UbQzVlvB5ZTd0Mnu9%2BWykmvGmAiEA%2BBZG2r9nL4lLKFvdE89qfbpLK9jWsJbAN1c6c%2FmHDxEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNcsmgxaq%2F4DE2lBiCrcA7m9TNBBcdiueKsG17mTn7dJQOJJYxX%2B80w2dzmpFsdh7m5%2F3V%2FUo32sk0A%2BL4QtPRJwQa3OiJxmJlrv8Q%2Fo6QxZ1OHjwCiR5o%2FIlCfrSeaDeipO%2FJVRBGdsddkqDpuWHVlBY0Fw71uoSOCfNyM5WbK1WSjZFFuCFOkOxJ9HiUFgUgERRhNfB9faa3jHG9G8SMWAfuDcnjxP9ecLYpl%2FBOjNNcQNKf4UCNXoGeH1YEcmqhNV39lf8NH5OzFqSXq2t41odUPimhlpBv0EF%2FTDnlYvkJvQnvZeJHG2afVnjIaCBwjj1SmFT4kHx%2BZljGRi20e9cEdMaNP9YVBzciD6M4SiVTvU0piyK%2FTYCCEbnQ6tFKPHcorpvX%2FHj2boAuASWvGbtw1CojaNSSnwC3%2FGtgiQSXgUn%2BEFMDBjRVDbNAidPrRZfmcLGkb3Q7PbHPumtrrECwUNuBOuZNs6E5Yewk4t41wKYk6QQTK5dwRZPIfPzwjZMPgsyuAgMqE%2BN7%2F6uv%2BscNzzgnJDZJp8gFIWXeMEW7w9H%2Boc9UWHoZyimBLeQiErWae87ByR8yML1wZDKu0ShG9i4VXTs2jBg15maNRVSUn743ARD%2F14KjEndEUvXlk4zwFtcDPxGVo3MLyX6MAGOqUBHEhWq9wQQnD0VOTHX44k6%2BuMQOMGHKqOaUj0AnzJgxGsKLOk4FHX%2Fgf04%2Fi%2BsAkhj50QzCk0nZFZ%2F%2FPCnD0ddYRbPgW88AmfJ5UjaYnj4ytJEco8auUKUHLMPLqsafEcSYIa8cVdLqbhc%2Bu0nELs3U27MlpffaUjzBLuPaijXjgF80HKKmk9XZdb8IYzGv%2BXlkybqCi7fIDaKpBnXNEjq6%2BnKQst&X-Amz-Signature=e11ac2f51ea82fc82759a47003ffb52476801f19970e795686941492fb246824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTLVIAX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA64eJYcpUcyBU9HWA9UbQzVlvB5ZTd0Mnu9%2BWykmvGmAiEA%2BBZG2r9nL4lLKFvdE89qfbpLK9jWsJbAN1c6c%2FmHDxEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNcsmgxaq%2F4DE2lBiCrcA7m9TNBBcdiueKsG17mTn7dJQOJJYxX%2B80w2dzmpFsdh7m5%2F3V%2FUo32sk0A%2BL4QtPRJwQa3OiJxmJlrv8Q%2Fo6QxZ1OHjwCiR5o%2FIlCfrSeaDeipO%2FJVRBGdsddkqDpuWHVlBY0Fw71uoSOCfNyM5WbK1WSjZFFuCFOkOxJ9HiUFgUgERRhNfB9faa3jHG9G8SMWAfuDcnjxP9ecLYpl%2FBOjNNcQNKf4UCNXoGeH1YEcmqhNV39lf8NH5OzFqSXq2t41odUPimhlpBv0EF%2FTDnlYvkJvQnvZeJHG2afVnjIaCBwjj1SmFT4kHx%2BZljGRi20e9cEdMaNP9YVBzciD6M4SiVTvU0piyK%2FTYCCEbnQ6tFKPHcorpvX%2FHj2boAuASWvGbtw1CojaNSSnwC3%2FGtgiQSXgUn%2BEFMDBjRVDbNAidPrRZfmcLGkb3Q7PbHPumtrrECwUNuBOuZNs6E5Yewk4t41wKYk6QQTK5dwRZPIfPzwjZMPgsyuAgMqE%2BN7%2F6uv%2BscNzzgnJDZJp8gFIWXeMEW7w9H%2Boc9UWHoZyimBLeQiErWae87ByR8yML1wZDKu0ShG9i4VXTs2jBg15maNRVSUn743ARD%2F14KjEndEUvXlk4zwFtcDPxGVo3MLyX6MAGOqUBHEhWq9wQQnD0VOTHX44k6%2BuMQOMGHKqOaUj0AnzJgxGsKLOk4FHX%2Fgf04%2Fi%2BsAkhj50QzCk0nZFZ%2F%2FPCnD0ddYRbPgW88AmfJ5UjaYnj4ytJEco8auUKUHLMPLqsafEcSYIa8cVdLqbhc%2Bu0nELs3U27MlpffaUjzBLuPaijXjgF80HKKmk9XZdb8IYzGv%2BXlkybqCi7fIDaKpBnXNEjq6%2BnKQst&X-Amz-Signature=28e270425fb252fac30cd79b0ffe1d9757f614be2dc1a05bfce7a367a7ab15c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
