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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSSRH37%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdgCEcsIYwx0%2BXmI9rapJ3Qf7AuKnD5HZjjFcGdoAXTAiEA2LnXhs5bPzjZgwWtHTB1CkR7T5LrDBQXNj7mAvPc8Q8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdD8OkrOq5AarrQjyrcA%2FTPAPWz99vI9c0Lhh4j949%2F0VWpYHssHw2QRCEM13jK01IFvpEeEtrDnnzwdBHUgk4%2FrCKPZOrI1bJHIRnPcmPjKbW%2Bk0meZr1fwslULd3gv3dY4B5TqKtXu5E0%2FCUxnricX4M6ggTNIQXPq09KY3afJSSnHAnkr2Gi36Ce%2BM45ZKEbcMkfwbGRAcPW1dxKhlidCxtiCI0OtSCGsgICTobc5ZSuYQ4oTS2ASm0SHGBBYH7OTpnSU3obyCUEA%2Bfv5dLQKLDy%2BMdoe8ixRPSadZedUuI066knosi1%2FhGYm1sBS3mp8VgDDgRhNWlYhV6RkFNTXMPMtpsxkBWR%2BuSHUR0aWaM%2BJ2GGia11ghk1KvVV3RXz82jgwTqvPsKA1%2FKlaYw6IirQuQ9tbSM55vpgq6kwSQU%2FkpfwKOd58O0S99nWgZoj2wZLklEYUV%2FF56aMUXlpEsdUjUb1pEi8%2BWfSzD5bDFZSrpBnf1m78H8Goh0vwslblmfK5Ns1z48Va2V1%2BCevT3PTEe2W9CrnPtghrO6OR%2BDvtvVg4%2BkiRQBSZGl%2BKZDxckk%2F%2FjRD3AliZfwagsZPZXauE%2FoUuqMW2pO%2FRBkMYb%2BhpsBd7wzG%2F2Xizr1uJlRD3Txo2jvYX9dgMND178MGOqUB6WloHHyzyGH50VfyAYqlxI5QOvZwKjfZ5yhSJZuoM0Ck%2B%2FToWPvKH1GbYvocs%2Ba%2B4d6mZ5m6mp8qt%2FquDdck9rbAVj7V9sYkRhh5ePRSK1GtZWRFAjZyO2VG1F0izEvZcG0k%2BDNbSrmH9NCOF5l8pKPKp%2F7UZ6fNNbzrZDXqpKMsnZ1mALegtz7Uu08S67W0ssag%2BCKJ%2BivDU32GETgnKRkspPF7&X-Amz-Signature=90d5073847a361963fa79ba7b55023a1ec5bf83f1d5b6925f96d88a4606c5f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSSRH37%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdgCEcsIYwx0%2BXmI9rapJ3Qf7AuKnD5HZjjFcGdoAXTAiEA2LnXhs5bPzjZgwWtHTB1CkR7T5LrDBQXNj7mAvPc8Q8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdD8OkrOq5AarrQjyrcA%2FTPAPWz99vI9c0Lhh4j949%2F0VWpYHssHw2QRCEM13jK01IFvpEeEtrDnnzwdBHUgk4%2FrCKPZOrI1bJHIRnPcmPjKbW%2Bk0meZr1fwslULd3gv3dY4B5TqKtXu5E0%2FCUxnricX4M6ggTNIQXPq09KY3afJSSnHAnkr2Gi36Ce%2BM45ZKEbcMkfwbGRAcPW1dxKhlidCxtiCI0OtSCGsgICTobc5ZSuYQ4oTS2ASm0SHGBBYH7OTpnSU3obyCUEA%2Bfv5dLQKLDy%2BMdoe8ixRPSadZedUuI066knosi1%2FhGYm1sBS3mp8VgDDgRhNWlYhV6RkFNTXMPMtpsxkBWR%2BuSHUR0aWaM%2BJ2GGia11ghk1KvVV3RXz82jgwTqvPsKA1%2FKlaYw6IirQuQ9tbSM55vpgq6kwSQU%2FkpfwKOd58O0S99nWgZoj2wZLklEYUV%2FF56aMUXlpEsdUjUb1pEi8%2BWfSzD5bDFZSrpBnf1m78H8Goh0vwslblmfK5Ns1z48Va2V1%2BCevT3PTEe2W9CrnPtghrO6OR%2BDvtvVg4%2BkiRQBSZGl%2BKZDxckk%2F%2FjRD3AliZfwagsZPZXauE%2FoUuqMW2pO%2FRBkMYb%2BhpsBd7wzG%2F2Xizr1uJlRD3Txo2jvYX9dgMND178MGOqUB6WloHHyzyGH50VfyAYqlxI5QOvZwKjfZ5yhSJZuoM0Ck%2B%2FToWPvKH1GbYvocs%2Ba%2B4d6mZ5m6mp8qt%2FquDdck9rbAVj7V9sYkRhh5ePRSK1GtZWRFAjZyO2VG1F0izEvZcG0k%2BDNbSrmH9NCOF5l8pKPKp%2F7UZ6fNNbzrZDXqpKMsnZ1mALegtz7Uu08S67W0ssag%2BCKJ%2BivDU32GETgnKRkspPF7&X-Amz-Signature=0f6a0f70b570767b9137bfca0e624f5a865630d8bd1ddbd79275c06af1ab510f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSSRH37%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdgCEcsIYwx0%2BXmI9rapJ3Qf7AuKnD5HZjjFcGdoAXTAiEA2LnXhs5bPzjZgwWtHTB1CkR7T5LrDBQXNj7mAvPc8Q8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdD8OkrOq5AarrQjyrcA%2FTPAPWz99vI9c0Lhh4j949%2F0VWpYHssHw2QRCEM13jK01IFvpEeEtrDnnzwdBHUgk4%2FrCKPZOrI1bJHIRnPcmPjKbW%2Bk0meZr1fwslULd3gv3dY4B5TqKtXu5E0%2FCUxnricX4M6ggTNIQXPq09KY3afJSSnHAnkr2Gi36Ce%2BM45ZKEbcMkfwbGRAcPW1dxKhlidCxtiCI0OtSCGsgICTobc5ZSuYQ4oTS2ASm0SHGBBYH7OTpnSU3obyCUEA%2Bfv5dLQKLDy%2BMdoe8ixRPSadZedUuI066knosi1%2FhGYm1sBS3mp8VgDDgRhNWlYhV6RkFNTXMPMtpsxkBWR%2BuSHUR0aWaM%2BJ2GGia11ghk1KvVV3RXz82jgwTqvPsKA1%2FKlaYw6IirQuQ9tbSM55vpgq6kwSQU%2FkpfwKOd58O0S99nWgZoj2wZLklEYUV%2FF56aMUXlpEsdUjUb1pEi8%2BWfSzD5bDFZSrpBnf1m78H8Goh0vwslblmfK5Ns1z48Va2V1%2BCevT3PTEe2W9CrnPtghrO6OR%2BDvtvVg4%2BkiRQBSZGl%2BKZDxckk%2F%2FjRD3AliZfwagsZPZXauE%2FoUuqMW2pO%2FRBkMYb%2BhpsBd7wzG%2F2Xizr1uJlRD3Txo2jvYX9dgMND178MGOqUB6WloHHyzyGH50VfyAYqlxI5QOvZwKjfZ5yhSJZuoM0Ck%2B%2FToWPvKH1GbYvocs%2Ba%2B4d6mZ5m6mp8qt%2FquDdck9rbAVj7V9sYkRhh5ePRSK1GtZWRFAjZyO2VG1F0izEvZcG0k%2BDNbSrmH9NCOF5l8pKPKp%2F7UZ6fNNbzrZDXqpKMsnZ1mALegtz7Uu08S67W0ssag%2BCKJ%2BivDU32GETgnKRkspPF7&X-Amz-Signature=d2136f8e777d8a8fcf21fb032034ba115b0ae3cf47b8db0258de3e2e6b375f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
