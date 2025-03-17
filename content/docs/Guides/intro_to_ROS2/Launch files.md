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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLFAORX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPYoLJ%2BCDKNTPkugv5%2FTQ5bjeJTQl3tvLRWRvZiuqL2wIhAJJJX%2FaNKUfCrvUtyA%2F%2B%2F0j8bncBhKq1b1Zu2cHkFcevKv8DCE0QABoMNjM3NDIzMTgzODA1Igzd4vSkSOsUbmzLpuIq3APUeGQXKDM93VgpyNNoG9s74Z3%2FgqVvSnqvJp%2FkuI0kUe7h7NTK9uGdRw8BdpbsAw189vmuCPyTRnzRzWnRJWYcmEmocCquSut35d5w9KjF5mAY6f8UkHATfmcjY7wSzZk4VZzg%2F2eX4k%2BofTHviXsY50HGsBouu8IMfr5DFE7UxtkhevPFU26bDg9NwnIktSxEN419SOoqf243uVabW7a%2BORD5ke9gzTMFy0VxLaagKt0K7Qv4zf%2F5z03AqtmaQPaVnE2Vr9QZdPfz%2BkhtxEa77Wv16hkodKvGwg9JOixps8Fz2rQF3oDfhzAWqZQh%2Fcnap36AtZvjFPCgqgsUF8SAtBUADpBSmw5YmcGSndnNNfnImCsD9qc7otItJ6ckw9JJWCdVNq4HVLGSvsRhP6EPwHoSFtTVTQ9SQElco1SEKk%2FS6PkXjBWYFU2pT3k9fhOQqB2NTD6pRQ61JAWx1UGDUhn9XSLIplsHbivgrVbc9p1ZFSyO5kxoKikyC6WqjVlPQbDWbNGwXYsjXf3pChlghCBDqT%2BkxHlDejjN6%2Fva4uPWAXDdx5bLARecBPynLTv3BEiCFrn4fphxrsQs7eTyiN%2B95G1RHlCmNd7yj9J5e%2B6qi%2BgWerEuE41sEDC%2BguK%2BBjqkAeQiqRMtymDuCdQXFZlDgbzNh2gARJyvZTUfEsgOFYhobsfcljJ9TgTjCwYbBO5Pxo4QgY6Qjue%2Fd9zgsY55HMvFdqueJsYnvyqkixH7mmW8h7gHxNi5GziBgJMq31rxg81aeZ69Zv88BsLUU0XQJsPvMHQKxaWrme4fH%2FfDTgs%2BAe%2Fcqn4pOVU%2FCGOUmHILh3bVXpqIZdP9I7CkGWH534WmBZFY&X-Amz-Signature=986f78b18c7b3be71c9658d8e9eba54e823d90ec32338751d6add025d9990af6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLFAORX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPYoLJ%2BCDKNTPkugv5%2FTQ5bjeJTQl3tvLRWRvZiuqL2wIhAJJJX%2FaNKUfCrvUtyA%2F%2B%2F0j8bncBhKq1b1Zu2cHkFcevKv8DCE0QABoMNjM3NDIzMTgzODA1Igzd4vSkSOsUbmzLpuIq3APUeGQXKDM93VgpyNNoG9s74Z3%2FgqVvSnqvJp%2FkuI0kUe7h7NTK9uGdRw8BdpbsAw189vmuCPyTRnzRzWnRJWYcmEmocCquSut35d5w9KjF5mAY6f8UkHATfmcjY7wSzZk4VZzg%2F2eX4k%2BofTHviXsY50HGsBouu8IMfr5DFE7UxtkhevPFU26bDg9NwnIktSxEN419SOoqf243uVabW7a%2BORD5ke9gzTMFy0VxLaagKt0K7Qv4zf%2F5z03AqtmaQPaVnE2Vr9QZdPfz%2BkhtxEa77Wv16hkodKvGwg9JOixps8Fz2rQF3oDfhzAWqZQh%2Fcnap36AtZvjFPCgqgsUF8SAtBUADpBSmw5YmcGSndnNNfnImCsD9qc7otItJ6ckw9JJWCdVNq4HVLGSvsRhP6EPwHoSFtTVTQ9SQElco1SEKk%2FS6PkXjBWYFU2pT3k9fhOQqB2NTD6pRQ61JAWx1UGDUhn9XSLIplsHbivgrVbc9p1ZFSyO5kxoKikyC6WqjVlPQbDWbNGwXYsjXf3pChlghCBDqT%2BkxHlDejjN6%2Fva4uPWAXDdx5bLARecBPynLTv3BEiCFrn4fphxrsQs7eTyiN%2B95G1RHlCmNd7yj9J5e%2B6qi%2BgWerEuE41sEDC%2BguK%2BBjqkAeQiqRMtymDuCdQXFZlDgbzNh2gARJyvZTUfEsgOFYhobsfcljJ9TgTjCwYbBO5Pxo4QgY6Qjue%2Fd9zgsY55HMvFdqueJsYnvyqkixH7mmW8h7gHxNi5GziBgJMq31rxg81aeZ69Zv88BsLUU0XQJsPvMHQKxaWrme4fH%2FfDTgs%2BAe%2Fcqn4pOVU%2FCGOUmHILh3bVXpqIZdP9I7CkGWH534WmBZFY&X-Amz-Signature=c86e8a5acb0488971be848ac634b360b6173760a9c2449cdff22570503e6ff16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLFAORX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPYoLJ%2BCDKNTPkugv5%2FTQ5bjeJTQl3tvLRWRvZiuqL2wIhAJJJX%2FaNKUfCrvUtyA%2F%2B%2F0j8bncBhKq1b1Zu2cHkFcevKv8DCE0QABoMNjM3NDIzMTgzODA1Igzd4vSkSOsUbmzLpuIq3APUeGQXKDM93VgpyNNoG9s74Z3%2FgqVvSnqvJp%2FkuI0kUe7h7NTK9uGdRw8BdpbsAw189vmuCPyTRnzRzWnRJWYcmEmocCquSut35d5w9KjF5mAY6f8UkHATfmcjY7wSzZk4VZzg%2F2eX4k%2BofTHviXsY50HGsBouu8IMfr5DFE7UxtkhevPFU26bDg9NwnIktSxEN419SOoqf243uVabW7a%2BORD5ke9gzTMFy0VxLaagKt0K7Qv4zf%2F5z03AqtmaQPaVnE2Vr9QZdPfz%2BkhtxEa77Wv16hkodKvGwg9JOixps8Fz2rQF3oDfhzAWqZQh%2Fcnap36AtZvjFPCgqgsUF8SAtBUADpBSmw5YmcGSndnNNfnImCsD9qc7otItJ6ckw9JJWCdVNq4HVLGSvsRhP6EPwHoSFtTVTQ9SQElco1SEKk%2FS6PkXjBWYFU2pT3k9fhOQqB2NTD6pRQ61JAWx1UGDUhn9XSLIplsHbivgrVbc9p1ZFSyO5kxoKikyC6WqjVlPQbDWbNGwXYsjXf3pChlghCBDqT%2BkxHlDejjN6%2Fva4uPWAXDdx5bLARecBPynLTv3BEiCFrn4fphxrsQs7eTyiN%2B95G1RHlCmNd7yj9J5e%2B6qi%2BgWerEuE41sEDC%2BguK%2BBjqkAeQiqRMtymDuCdQXFZlDgbzNh2gARJyvZTUfEsgOFYhobsfcljJ9TgTjCwYbBO5Pxo4QgY6Qjue%2Fd9zgsY55HMvFdqueJsYnvyqkixH7mmW8h7gHxNi5GziBgJMq31rxg81aeZ69Zv88BsLUU0XQJsPvMHQKxaWrme4fH%2FfDTgs%2BAe%2Fcqn4pOVU%2FCGOUmHILh3bVXpqIZdP9I7CkGWH534WmBZFY&X-Amz-Signature=79c44a9faef8a7e9c60933601d0e5765e52007d1143d1ae9472ed406a160d1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
