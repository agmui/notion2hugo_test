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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3IIDGP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbsJ1VQK8VhT%2FIaH6jnrOvfdEiRCty21sh4xd%2BRD5%2BAiB3tzukHaLqGU6edH67uuCaOowg1PknApEpuT%2FlbPOj8CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9ZjovbhepkmzZgwKtwDqMPNyAzZx6aCaLjlgJBWW%2BNI%2BLHTgrraVSP93yj25bWcpYs3H58EczdWMVl%2F%2BslfAWSOsBW8PTVcc7XHoLLHdxsBEzAPbnUht1tbx7nbRY%2FPKiuQr6pjms59c8cXPfawLisMQUNROK5AIJ0mwWARlQE8gpj7wC1uQ6Fs3pLc7%2FM8qvOGLUDehtgEu29muXcXmiNtbUyspDRILZYLriO6roxPMx%2B2%2F2PVH%2FbXCBSxwcJovAV9Hd5xCPQl8PeVAohclIJYJAxzx372edDnxQSQtpAaeAZFS703TJp05xHKecnIMafX5w0iE2rZilDfD1DHUFUwcOBJJoz3nO9dLgu94UywKbMwqcllnlqFwphv9b7hLz9nfCOWDuGN6c%2FBWkIZJKTVoV5dglsJyWwHghi2YPQurkFA%2F7BVculca8XDMgn5mTRVsFvhSw0Y9hdvSkaH9NihcZQ6uwBptX05SM4SReeEY82pkjxbOcxwbZvbfqM65UAzoQwUqCj5zirWshLMVv2r9ENkQc1OcWn0xs7joVqu%2Fusfuiq0rCJyB1dAKn9x3uaeYB0LKgicMU2DBgWGKBojlx0ePqB7dYVSH16xq%2BXlAmCJJQEOtJLKNp1rHM6YvU4D%2FvxMfFqrQyIwzp6evgY6pgGnUsru1gZulwqNBjrxdbB%2F9pYEtsiv8KvYSdIT8wMXwM7ef5qxXta62EoOIFxCbPP1Z%2FHUa0wHO5vYJi0rG8ZXdmJdKD0PnpMNfb1g1qE6o4r0%2FeSsVCuZ5RiZlO%2FC525cZpYntOi%2Fx7Pbtt%2BAnSY%2F1dtwSs8EOuCPbQZ3d435UHiMpY7oead2fC4i%2Fy7xAJY%2Bj8yroeMENVBEi6KE9Lsrd897AieN&X-Amz-Signature=27be877b4aa4e68a6e55852659d6ef7c56f5da171296a6c7896fdaaba09b3846&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3IIDGP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbsJ1VQK8VhT%2FIaH6jnrOvfdEiRCty21sh4xd%2BRD5%2BAiB3tzukHaLqGU6edH67uuCaOowg1PknApEpuT%2FlbPOj8CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9ZjovbhepkmzZgwKtwDqMPNyAzZx6aCaLjlgJBWW%2BNI%2BLHTgrraVSP93yj25bWcpYs3H58EczdWMVl%2F%2BslfAWSOsBW8PTVcc7XHoLLHdxsBEzAPbnUht1tbx7nbRY%2FPKiuQr6pjms59c8cXPfawLisMQUNROK5AIJ0mwWARlQE8gpj7wC1uQ6Fs3pLc7%2FM8qvOGLUDehtgEu29muXcXmiNtbUyspDRILZYLriO6roxPMx%2B2%2F2PVH%2FbXCBSxwcJovAV9Hd5xCPQl8PeVAohclIJYJAxzx372edDnxQSQtpAaeAZFS703TJp05xHKecnIMafX5w0iE2rZilDfD1DHUFUwcOBJJoz3nO9dLgu94UywKbMwqcllnlqFwphv9b7hLz9nfCOWDuGN6c%2FBWkIZJKTVoV5dglsJyWwHghi2YPQurkFA%2F7BVculca8XDMgn5mTRVsFvhSw0Y9hdvSkaH9NihcZQ6uwBptX05SM4SReeEY82pkjxbOcxwbZvbfqM65UAzoQwUqCj5zirWshLMVv2r9ENkQc1OcWn0xs7joVqu%2Fusfuiq0rCJyB1dAKn9x3uaeYB0LKgicMU2DBgWGKBojlx0ePqB7dYVSH16xq%2BXlAmCJJQEOtJLKNp1rHM6YvU4D%2FvxMfFqrQyIwzp6evgY6pgGnUsru1gZulwqNBjrxdbB%2F9pYEtsiv8KvYSdIT8wMXwM7ef5qxXta62EoOIFxCbPP1Z%2FHUa0wHO5vYJi0rG8ZXdmJdKD0PnpMNfb1g1qE6o4r0%2FeSsVCuZ5RiZlO%2FC525cZpYntOi%2Fx7Pbtt%2BAnSY%2F1dtwSs8EOuCPbQZ3d435UHiMpY7oead2fC4i%2Fy7xAJY%2Bj8yroeMENVBEi6KE9Lsrd897AieN&X-Amz-Signature=052bb688416b1be07472b118d5d6cb6a9b94973536a5e78de9618de62c91fc78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3IIDGP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbsJ1VQK8VhT%2FIaH6jnrOvfdEiRCty21sh4xd%2BRD5%2BAiB3tzukHaLqGU6edH67uuCaOowg1PknApEpuT%2FlbPOj8CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9ZjovbhepkmzZgwKtwDqMPNyAzZx6aCaLjlgJBWW%2BNI%2BLHTgrraVSP93yj25bWcpYs3H58EczdWMVl%2F%2BslfAWSOsBW8PTVcc7XHoLLHdxsBEzAPbnUht1tbx7nbRY%2FPKiuQr6pjms59c8cXPfawLisMQUNROK5AIJ0mwWARlQE8gpj7wC1uQ6Fs3pLc7%2FM8qvOGLUDehtgEu29muXcXmiNtbUyspDRILZYLriO6roxPMx%2B2%2F2PVH%2FbXCBSxwcJovAV9Hd5xCPQl8PeVAohclIJYJAxzx372edDnxQSQtpAaeAZFS703TJp05xHKecnIMafX5w0iE2rZilDfD1DHUFUwcOBJJoz3nO9dLgu94UywKbMwqcllnlqFwphv9b7hLz9nfCOWDuGN6c%2FBWkIZJKTVoV5dglsJyWwHghi2YPQurkFA%2F7BVculca8XDMgn5mTRVsFvhSw0Y9hdvSkaH9NihcZQ6uwBptX05SM4SReeEY82pkjxbOcxwbZvbfqM65UAzoQwUqCj5zirWshLMVv2r9ENkQc1OcWn0xs7joVqu%2Fusfuiq0rCJyB1dAKn9x3uaeYB0LKgicMU2DBgWGKBojlx0ePqB7dYVSH16xq%2BXlAmCJJQEOtJLKNp1rHM6YvU4D%2FvxMfFqrQyIwzp6evgY6pgGnUsru1gZulwqNBjrxdbB%2F9pYEtsiv8KvYSdIT8wMXwM7ef5qxXta62EoOIFxCbPP1Z%2FHUa0wHO5vYJi0rG8ZXdmJdKD0PnpMNfb1g1qE6o4r0%2FeSsVCuZ5RiZlO%2FC525cZpYntOi%2Fx7Pbtt%2BAnSY%2F1dtwSs8EOuCPbQZ3d435UHiMpY7oead2fC4i%2Fy7xAJY%2Bj8yroeMENVBEi6KE9Lsrd897AieN&X-Amz-Signature=6e5a83dd948eb33e88ad7fd4c1533261ccd3051ece1c5bcd0946e3f3ceb90a65&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
