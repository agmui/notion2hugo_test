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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FHXNA3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqBfKMXRigebu4Ac1XUwZA7r7VJWOWWS1uxU%2FKMG%2BEWwIhAL940w9s78yqRMxZbvgC%2Fx23gw0UrIjzn73fZ%2FR1K70CKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkL96MhT72O1MZFqcq3ANvaKtCELGG8N5%2B%2BaJzxYnd2i76dghPZaBLwayrIJVXPKftMEV8txmC6FnfteewOsALnGrldyxZeVWgIIqmHdVgyAG47huk%2FT06dxpb4lBbeOIsVKuC8SF71mv%2FdvhRDe62usYfz4Ka0C7T130z1k1HtOZYXsQa7UTmKF6rKNcRnO4O8zgp6XmFGhHf0x6vPvNvr9FUjGAWfV53r8DOJxLQ9IYmoSh8vlJXxH3pgg78CPg0rxhuajHn90%2F7h43AFWKBtJD0RbHRNWJ2rQGJYSW3e%2Fel6XI50F2WbTkyr%2FQJ2ZpT10AQj7eYjcwymQYS8vxXufIdEf2ENn6ieRtl%2F0%2B1a7djaDUGprofqDHngarM6NdJ7PCBdbQLdPjR1dtAKRmrrXO73p7xI2%2FK2q%2F1FkxJ8TDubu9ul404%2FHiMgEWv856KCdKlTJFGqdVIVkBv8tPE2fPdFCAlP09Qmozj%2FceMG7gPtJyVm65rAhOg%2FocU0UWQsFNS4By2a%2B4n5JsU7XCtSbmZ2mSgteFHydWr%2Br5430rMoiEib3jEk%2B3bC6tBxmSPLSMzljTPEXCnUsLnDb27Y9Iz%2B06M9v4sqeqq4xxkSOwGKxpp7GNxv6cwxY0D9749%2B%2FtI71dobUGxxzCUttHCBjqkAdQtruOQ5ZGwWoZxZKkuHwzjDg1wcSFC5Lmbm9s2Gy19%2F8mcycJB3J3ibHtmX5CgpHj1VexfOTg9yEFQUZpJEWTJR4E8x8T%2B56MQh1ptw8r1UN9Tdi9jlZQuYDl%2FZjTDx5tclWL6FSQFYu2LDz3nGCMCk6DzMObJ6jAHCX4rcToB9kupX83mkm45zUF5HdPK9YrzYESrF6mX%2BC0WiMSSXgtJc4dg&X-Amz-Signature=66bc335b7991d23d0ac54423f26229ea6b203df12351c5ba0030a13bbe830634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FHXNA3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqBfKMXRigebu4Ac1XUwZA7r7VJWOWWS1uxU%2FKMG%2BEWwIhAL940w9s78yqRMxZbvgC%2Fx23gw0UrIjzn73fZ%2FR1K70CKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkL96MhT72O1MZFqcq3ANvaKtCELGG8N5%2B%2BaJzxYnd2i76dghPZaBLwayrIJVXPKftMEV8txmC6FnfteewOsALnGrldyxZeVWgIIqmHdVgyAG47huk%2FT06dxpb4lBbeOIsVKuC8SF71mv%2FdvhRDe62usYfz4Ka0C7T130z1k1HtOZYXsQa7UTmKF6rKNcRnO4O8zgp6XmFGhHf0x6vPvNvr9FUjGAWfV53r8DOJxLQ9IYmoSh8vlJXxH3pgg78CPg0rxhuajHn90%2F7h43AFWKBtJD0RbHRNWJ2rQGJYSW3e%2Fel6XI50F2WbTkyr%2FQJ2ZpT10AQj7eYjcwymQYS8vxXufIdEf2ENn6ieRtl%2F0%2B1a7djaDUGprofqDHngarM6NdJ7PCBdbQLdPjR1dtAKRmrrXO73p7xI2%2FK2q%2F1FkxJ8TDubu9ul404%2FHiMgEWv856KCdKlTJFGqdVIVkBv8tPE2fPdFCAlP09Qmozj%2FceMG7gPtJyVm65rAhOg%2FocU0UWQsFNS4By2a%2B4n5JsU7XCtSbmZ2mSgteFHydWr%2Br5430rMoiEib3jEk%2B3bC6tBxmSPLSMzljTPEXCnUsLnDb27Y9Iz%2B06M9v4sqeqq4xxkSOwGKxpp7GNxv6cwxY0D9749%2B%2FtI71dobUGxxzCUttHCBjqkAdQtruOQ5ZGwWoZxZKkuHwzjDg1wcSFC5Lmbm9s2Gy19%2F8mcycJB3J3ibHtmX5CgpHj1VexfOTg9yEFQUZpJEWTJR4E8x8T%2B56MQh1ptw8r1UN9Tdi9jlZQuYDl%2FZjTDx5tclWL6FSQFYu2LDz3nGCMCk6DzMObJ6jAHCX4rcToB9kupX83mkm45zUF5HdPK9YrzYESrF6mX%2BC0WiMSSXgtJc4dg&X-Amz-Signature=82d2918171b7b0f83b0e6e0ef6b304a0feee6ae30284c91f8f5c927662572f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FHXNA3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqBfKMXRigebu4Ac1XUwZA7r7VJWOWWS1uxU%2FKMG%2BEWwIhAL940w9s78yqRMxZbvgC%2Fx23gw0UrIjzn73fZ%2FR1K70CKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkL96MhT72O1MZFqcq3ANvaKtCELGG8N5%2B%2BaJzxYnd2i76dghPZaBLwayrIJVXPKftMEV8txmC6FnfteewOsALnGrldyxZeVWgIIqmHdVgyAG47huk%2FT06dxpb4lBbeOIsVKuC8SF71mv%2FdvhRDe62usYfz4Ka0C7T130z1k1HtOZYXsQa7UTmKF6rKNcRnO4O8zgp6XmFGhHf0x6vPvNvr9FUjGAWfV53r8DOJxLQ9IYmoSh8vlJXxH3pgg78CPg0rxhuajHn90%2F7h43AFWKBtJD0RbHRNWJ2rQGJYSW3e%2Fel6XI50F2WbTkyr%2FQJ2ZpT10AQj7eYjcwymQYS8vxXufIdEf2ENn6ieRtl%2F0%2B1a7djaDUGprofqDHngarM6NdJ7PCBdbQLdPjR1dtAKRmrrXO73p7xI2%2FK2q%2F1FkxJ8TDubu9ul404%2FHiMgEWv856KCdKlTJFGqdVIVkBv8tPE2fPdFCAlP09Qmozj%2FceMG7gPtJyVm65rAhOg%2FocU0UWQsFNS4By2a%2B4n5JsU7XCtSbmZ2mSgteFHydWr%2Br5430rMoiEib3jEk%2B3bC6tBxmSPLSMzljTPEXCnUsLnDb27Y9Iz%2B06M9v4sqeqq4xxkSOwGKxpp7GNxv6cwxY0D9749%2B%2FtI71dobUGxxzCUttHCBjqkAdQtruOQ5ZGwWoZxZKkuHwzjDg1wcSFC5Lmbm9s2Gy19%2F8mcycJB3J3ibHtmX5CgpHj1VexfOTg9yEFQUZpJEWTJR4E8x8T%2B56MQh1ptw8r1UN9Tdi9jlZQuYDl%2FZjTDx5tclWL6FSQFYu2LDz3nGCMCk6DzMObJ6jAHCX4rcToB9kupX83mkm45zUF5HdPK9YrzYESrF6mX%2BC0WiMSSXgtJc4dg&X-Amz-Signature=1ee1f95ceb4e6adddec081be1393d83cbb8a0924d53f8b2402166dd3c04a2251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
