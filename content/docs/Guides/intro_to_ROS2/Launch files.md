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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CJ3J4SV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCrF9yJRqNkcrOfTJf974o7SdwHVMmXd5Vg1rB60MwLTwIhAN26YSldUqguot%2FUNu6l%2FKEiQ9nAMVpr9ZFmZo40OJC1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwHI62VO9NtaJM%2BkWMq3APp3GurXRyNltOmIJWvSxw%2B1FANp5n9o1as6A1q4dgiNitBpA7fBi4kZ5URtx9AxymC%2Blo5fnAwu4zcmObuSvA56YSbkwHwSh2GgkpIzGguykKC9wP4x4%2FfHoZbccENgYbfoZcmox9obmo%2Fn%2Bu593rkBYgvhha1DP3j3KBsvFgBWt5%2BbHLc0LIY%2FlFS3kFC4sX6fPWgnoHpxlkIoXDI26ga3pu9zi9uBdAadc0FGDXHwu6VhC6ubdwGubxJzjLXpmStcOM6Wq2LT9bgbUGPmEnScEY9ySoAssp5dOUelzQSXntzqJ7aasG1fjgAk4wKWyVBkvmcHaFEcE4Q0i6jXuZU2kaELWaYdp7XtJew9%2F1OIyLh3TAyIg1O62D%2FTZ75GVJpMVW55Elh4veZnzwjgOQH%2Bv7eJf%2BGt65DuAYLpu%2BDIt7sLmzL%2F7X6U%2BSpC4yFEbljFxHc5bV3mcnDrlCtXDJD04TJEschrM8gkBEkhTjCzkbxu9mYg4X1chGPC3guLoATJHWpHfvt3z7QGE2Hxdw8PTW9jI%2BPVkRDLUAyu0ZgjHDnx9H970o%2FzX1%2FZqmfrx%2BW8mkhdWKdBXLo1c8DwN%2FJmAklv4m%2FZCHZqA9zapAhvol7TC%2Bh26%2F%2FujTZrjClwu3CBjqkAXPDNIOkXW%2FsZZ5sKFjV24kw59bc5JA%2Bh3fuAWjKT2BTucOVPeYJ0%2BgHTC7FqQmgIn3SR2s3G%2FeQmOBF%2FkmNH2MWJ6PnoRMhOdMVugNtTDz20YqK%2FEVXVOQHKy4X0r6kxLh5j24GyjdO0CzMret%2BqfdKfRBqjoEgjC9BBNhPImXzuqOQt%2FkEBidzir2kw8Qbr62sLpGZwHfRUzxbe4esw%2FhR3z2q&X-Amz-Signature=d42e380046d21455db3b37571a1f650c7de896d6c371cd5c70891a93e9fabccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CJ3J4SV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCrF9yJRqNkcrOfTJf974o7SdwHVMmXd5Vg1rB60MwLTwIhAN26YSldUqguot%2FUNu6l%2FKEiQ9nAMVpr9ZFmZo40OJC1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwHI62VO9NtaJM%2BkWMq3APp3GurXRyNltOmIJWvSxw%2B1FANp5n9o1as6A1q4dgiNitBpA7fBi4kZ5URtx9AxymC%2Blo5fnAwu4zcmObuSvA56YSbkwHwSh2GgkpIzGguykKC9wP4x4%2FfHoZbccENgYbfoZcmox9obmo%2Fn%2Bu593rkBYgvhha1DP3j3KBsvFgBWt5%2BbHLc0LIY%2FlFS3kFC4sX6fPWgnoHpxlkIoXDI26ga3pu9zi9uBdAadc0FGDXHwu6VhC6ubdwGubxJzjLXpmStcOM6Wq2LT9bgbUGPmEnScEY9ySoAssp5dOUelzQSXntzqJ7aasG1fjgAk4wKWyVBkvmcHaFEcE4Q0i6jXuZU2kaELWaYdp7XtJew9%2F1OIyLh3TAyIg1O62D%2FTZ75GVJpMVW55Elh4veZnzwjgOQH%2Bv7eJf%2BGt65DuAYLpu%2BDIt7sLmzL%2F7X6U%2BSpC4yFEbljFxHc5bV3mcnDrlCtXDJD04TJEschrM8gkBEkhTjCzkbxu9mYg4X1chGPC3guLoATJHWpHfvt3z7QGE2Hxdw8PTW9jI%2BPVkRDLUAyu0ZgjHDnx9H970o%2FzX1%2FZqmfrx%2BW8mkhdWKdBXLo1c8DwN%2FJmAklv4m%2FZCHZqA9zapAhvol7TC%2Bh26%2F%2FujTZrjClwu3CBjqkAXPDNIOkXW%2FsZZ5sKFjV24kw59bc5JA%2Bh3fuAWjKT2BTucOVPeYJ0%2BgHTC7FqQmgIn3SR2s3G%2FeQmOBF%2FkmNH2MWJ6PnoRMhOdMVugNtTDz20YqK%2FEVXVOQHKy4X0r6kxLh5j24GyjdO0CzMret%2BqfdKfRBqjoEgjC9BBNhPImXzuqOQt%2FkEBidzir2kw8Qbr62sLpGZwHfRUzxbe4esw%2FhR3z2q&X-Amz-Signature=2be6bc57a39f76bc9b0450b04226ad10054dc48a5a6b4f150dab4698bde388ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CJ3J4SV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCrF9yJRqNkcrOfTJf974o7SdwHVMmXd5Vg1rB60MwLTwIhAN26YSldUqguot%2FUNu6l%2FKEiQ9nAMVpr9ZFmZo40OJC1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwHI62VO9NtaJM%2BkWMq3APp3GurXRyNltOmIJWvSxw%2B1FANp5n9o1as6A1q4dgiNitBpA7fBi4kZ5URtx9AxymC%2Blo5fnAwu4zcmObuSvA56YSbkwHwSh2GgkpIzGguykKC9wP4x4%2FfHoZbccENgYbfoZcmox9obmo%2Fn%2Bu593rkBYgvhha1DP3j3KBsvFgBWt5%2BbHLc0LIY%2FlFS3kFC4sX6fPWgnoHpxlkIoXDI26ga3pu9zi9uBdAadc0FGDXHwu6VhC6ubdwGubxJzjLXpmStcOM6Wq2LT9bgbUGPmEnScEY9ySoAssp5dOUelzQSXntzqJ7aasG1fjgAk4wKWyVBkvmcHaFEcE4Q0i6jXuZU2kaELWaYdp7XtJew9%2F1OIyLh3TAyIg1O62D%2FTZ75GVJpMVW55Elh4veZnzwjgOQH%2Bv7eJf%2BGt65DuAYLpu%2BDIt7sLmzL%2F7X6U%2BSpC4yFEbljFxHc5bV3mcnDrlCtXDJD04TJEschrM8gkBEkhTjCzkbxu9mYg4X1chGPC3guLoATJHWpHfvt3z7QGE2Hxdw8PTW9jI%2BPVkRDLUAyu0ZgjHDnx9H970o%2FzX1%2FZqmfrx%2BW8mkhdWKdBXLo1c8DwN%2FJmAklv4m%2FZCHZqA9zapAhvol7TC%2Bh26%2F%2FujTZrjClwu3CBjqkAXPDNIOkXW%2FsZZ5sKFjV24kw59bc5JA%2Bh3fuAWjKT2BTucOVPeYJ0%2BgHTC7FqQmgIn3SR2s3G%2FeQmOBF%2FkmNH2MWJ6PnoRMhOdMVugNtTDz20YqK%2FEVXVOQHKy4X0r6kxLh5j24GyjdO0CzMret%2BqfdKfRBqjoEgjC9BBNhPImXzuqOQt%2FkEBidzir2kw8Qbr62sLpGZwHfRUzxbe4esw%2FhR3z2q&X-Amz-Signature=2ac46202c4a54dc1564080909bb0cdf5c3ff46df78931b245880bd27a8985216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
