---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7YG47J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4DXPZ%2B2SAQen09LqthV4Vxt0JTM12kRHEc4LwMaXKyAiBiIfzOh4lIUM9YCXUgyIq0V%2F3oS4cd%2BtsRmpC2dcYzDSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMexoqmCJU7h6TQkY0KtwD48nJp%2FNkDNXwkqbE3nrVill2RywTETSLcy35T4IqR2giooHYDAsgQZCsSAJTwklCB%2BfbqgUSroXjMFDLxSBaK1j60WVxFZylP60k6r4u1%2B1zDneTUUS9xiF7HCXOqbFXArN7SAvecPVbcmWgy26e4hXPYNiCadAy5NOpjpjXZP9x6cH6kwzT0piP%2F0AJHty8MVG0ajArlvHyyyif69ANw6N8ax8NXgGPPanGeozPLF%2BVwUpSxBL3KZX4wvFvA7E%2BGB18D9ta8ecBGduKFBn8OZh4i0GyB%2F6uiSmp60BRBFbfHkMibk4INPj2HbzwuL01lJZ3MeqdxWcX3Hs2vnGLpJ983d5TqPgnTbyGcQ2RVp76BgBcyE6%2FeM3H7zPRlYoXtKt9Ez3c4leTvxDiEEMarar9K97enceN%2Bs31aj5rvGvIWU8HT%2F9k3iAx8%2FFCHcxcXo8BW57B%2BIhTrA4UZsOaNlIfuFGU%2FadQW1sBarziQxOXKVGXtJcy25ThPPx5zI2jHmRMR%2Bn2Uz892CIx9227A3cQ3ABxODxQJWOeBWiUeJBRXmoZ0Hv6vPaKC6dZnDg9HFEQNCJPKAPWMQmem7lGx1CtbCkYPGfP46yneZwq8ypKpvUtWOx4ObVy27UwnJ65xAY6pgEj1zmjhw%2FH4btLOm5PoeYLeDLxKKCWcZd%2BxkHnTQldnOKCMqjNYDe0g6wRKvDLzSuCw3iyb5%2BfKhFFKDhuDKgxdU3TYJBByIQ2q43myCliiO9c8CnMm0MNCSIbYqiNKPbxxR3iF6bjBCL1CBddAFW%2B3PNN95pJo7za60bvtMEz%2BSIThrVL9asVUMZRCMyQAT0YDyqWG6gO0oXinsQvtd5%2F1swBqf%2B2&X-Amz-Signature=b316798ff49a0d21d2ed764a94f7baf4d4ab1361a9024f916c42ed456c3b8b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7YG47J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4DXPZ%2B2SAQen09LqthV4Vxt0JTM12kRHEc4LwMaXKyAiBiIfzOh4lIUM9YCXUgyIq0V%2F3oS4cd%2BtsRmpC2dcYzDSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMexoqmCJU7h6TQkY0KtwD48nJp%2FNkDNXwkqbE3nrVill2RywTETSLcy35T4IqR2giooHYDAsgQZCsSAJTwklCB%2BfbqgUSroXjMFDLxSBaK1j60WVxFZylP60k6r4u1%2B1zDneTUUS9xiF7HCXOqbFXArN7SAvecPVbcmWgy26e4hXPYNiCadAy5NOpjpjXZP9x6cH6kwzT0piP%2F0AJHty8MVG0ajArlvHyyyif69ANw6N8ax8NXgGPPanGeozPLF%2BVwUpSxBL3KZX4wvFvA7E%2BGB18D9ta8ecBGduKFBn8OZh4i0GyB%2F6uiSmp60BRBFbfHkMibk4INPj2HbzwuL01lJZ3MeqdxWcX3Hs2vnGLpJ983d5TqPgnTbyGcQ2RVp76BgBcyE6%2FeM3H7zPRlYoXtKt9Ez3c4leTvxDiEEMarar9K97enceN%2Bs31aj5rvGvIWU8HT%2F9k3iAx8%2FFCHcxcXo8BW57B%2BIhTrA4UZsOaNlIfuFGU%2FadQW1sBarziQxOXKVGXtJcy25ThPPx5zI2jHmRMR%2Bn2Uz892CIx9227A3cQ3ABxODxQJWOeBWiUeJBRXmoZ0Hv6vPaKC6dZnDg9HFEQNCJPKAPWMQmem7lGx1CtbCkYPGfP46yneZwq8ypKpvUtWOx4ObVy27UwnJ65xAY6pgEj1zmjhw%2FH4btLOm5PoeYLeDLxKKCWcZd%2BxkHnTQldnOKCMqjNYDe0g6wRKvDLzSuCw3iyb5%2BfKhFFKDhuDKgxdU3TYJBByIQ2q43myCliiO9c8CnMm0MNCSIbYqiNKPbxxR3iF6bjBCL1CBddAFW%2B3PNN95pJo7za60bvtMEz%2BSIThrVL9asVUMZRCMyQAT0YDyqWG6gO0oXinsQvtd5%2F1swBqf%2B2&X-Amz-Signature=aaa8de87448e6fca49afb7afed9366592ee32fe7381192d6ac2e1c149426aa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7YG47J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4DXPZ%2B2SAQen09LqthV4Vxt0JTM12kRHEc4LwMaXKyAiBiIfzOh4lIUM9YCXUgyIq0V%2F3oS4cd%2BtsRmpC2dcYzDSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMexoqmCJU7h6TQkY0KtwD48nJp%2FNkDNXwkqbE3nrVill2RywTETSLcy35T4IqR2giooHYDAsgQZCsSAJTwklCB%2BfbqgUSroXjMFDLxSBaK1j60WVxFZylP60k6r4u1%2B1zDneTUUS9xiF7HCXOqbFXArN7SAvecPVbcmWgy26e4hXPYNiCadAy5NOpjpjXZP9x6cH6kwzT0piP%2F0AJHty8MVG0ajArlvHyyyif69ANw6N8ax8NXgGPPanGeozPLF%2BVwUpSxBL3KZX4wvFvA7E%2BGB18D9ta8ecBGduKFBn8OZh4i0GyB%2F6uiSmp60BRBFbfHkMibk4INPj2HbzwuL01lJZ3MeqdxWcX3Hs2vnGLpJ983d5TqPgnTbyGcQ2RVp76BgBcyE6%2FeM3H7zPRlYoXtKt9Ez3c4leTvxDiEEMarar9K97enceN%2Bs31aj5rvGvIWU8HT%2F9k3iAx8%2FFCHcxcXo8BW57B%2BIhTrA4UZsOaNlIfuFGU%2FadQW1sBarziQxOXKVGXtJcy25ThPPx5zI2jHmRMR%2Bn2Uz892CIx9227A3cQ3ABxODxQJWOeBWiUeJBRXmoZ0Hv6vPaKC6dZnDg9HFEQNCJPKAPWMQmem7lGx1CtbCkYPGfP46yneZwq8ypKpvUtWOx4ObVy27UwnJ65xAY6pgEj1zmjhw%2FH4btLOm5PoeYLeDLxKKCWcZd%2BxkHnTQldnOKCMqjNYDe0g6wRKvDLzSuCw3iyb5%2BfKhFFKDhuDKgxdU3TYJBByIQ2q43myCliiO9c8CnMm0MNCSIbYqiNKPbxxR3iF6bjBCL1CBddAFW%2B3PNN95pJo7za60bvtMEz%2BSIThrVL9asVUMZRCMyQAT0YDyqWG6gO0oXinsQvtd5%2F1swBqf%2B2&X-Amz-Signature=85f03eaf17770aaaff14ee8b02d7b101785c9e95ed7a405749b3dc631a2764e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
