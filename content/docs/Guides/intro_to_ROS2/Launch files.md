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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGCCH5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID53ptu643GnExK0Ub8lQfYFfOnIiymtQBZpDXKfWkxKAiEA6zQx9pHPp%2F5%2F3Y9gKRUzXOVuDzAdsMYQCpFUy%2Brd9SIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgtp4dCxnSrXdmJKircA%2B%2BKWZ7v93%2BNEKJwyyiVGMGMtPdJMYW%2BDgtH1%2FqhtmGVw8xQtWhlveOySQ4tJq911WOKHri44mbETHLS%2BRj7udBbJW6Dc0GUlL3RGG7bvCagIA2OcoTSHw1YucMvew14hUjFBTV4ijIS0cqCD3W9Rvloc6ECBbtg6hvB4ewPzqgCexkdbnroomSa2%2B1u2pJSgZM1DP95LU%2F7Gf5XNnJAwCTNr%2FdOjzCYtYnmDfRucbXjS8kWgUM%2FgnxFw3tScaU1y2XShGREJQTEQuRs%2BgXDsPqBXc5tIPsKtDYTQ5Sw6yfQoBLZehlwH5Tklj8U%2FSBto%2F4JP0xa9biYqSId7j%2BHgMdZyV7BS9C0C4zQOM29A4xXycCSDq3tfpffx8ZHVt89Y5BOBappqMQu9nFhVOc7%2Bjc0KAvji197X%2FZhbmhG5VBmJP9cvbnGqtCVwCwR75O1ADFDO7eMEv8jBQgMnOgOw5avKHYhmeWivYwY7EDjQXpqQrUCXOmsO2SGp5exZrrVkAmelhCfsmHHB7WZId7TKbExH8tYVbhSsFSBK%2BCj2ujvTGFRmHpWwyMNDQyl1p9PN5B7Mf%2BmdllynqDFvsi8PyCmpoUeM1Jwkpb8mE6PBwuADVPKmVtTQHQpkJtdMLXgpL0GOqUBQxGlQOqtoVRs5FrgPhc4vhdcm3b6OrNHN4itaEhY46NU7n1AgAUk4KOLT0Dr24bH1n%2BReA7qYGFsaM%2BceYmxC4NOKajnDNoZgY7vpyPNLDlN2Quqk65yEGNv6z6%2B3DlVYRAyHZoCcCOLFKrDgYBt%2B%2Fu0En8AdvfXeOG0j5YTXWnkOS5%2F3fjO4F2R9JDuJPX1wKTL%2F6Alz%2FhmYLgmjei%2BQ7KOWahe&X-Amz-Signature=434e516a1ef42774810ef1de3929114ae3d05fd123fa88cfed6be42f23e2cb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGCCH5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID53ptu643GnExK0Ub8lQfYFfOnIiymtQBZpDXKfWkxKAiEA6zQx9pHPp%2F5%2F3Y9gKRUzXOVuDzAdsMYQCpFUy%2Brd9SIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgtp4dCxnSrXdmJKircA%2B%2BKWZ7v93%2BNEKJwyyiVGMGMtPdJMYW%2BDgtH1%2FqhtmGVw8xQtWhlveOySQ4tJq911WOKHri44mbETHLS%2BRj7udBbJW6Dc0GUlL3RGG7bvCagIA2OcoTSHw1YucMvew14hUjFBTV4ijIS0cqCD3W9Rvloc6ECBbtg6hvB4ewPzqgCexkdbnroomSa2%2B1u2pJSgZM1DP95LU%2F7Gf5XNnJAwCTNr%2FdOjzCYtYnmDfRucbXjS8kWgUM%2FgnxFw3tScaU1y2XShGREJQTEQuRs%2BgXDsPqBXc5tIPsKtDYTQ5Sw6yfQoBLZehlwH5Tklj8U%2FSBto%2F4JP0xa9biYqSId7j%2BHgMdZyV7BS9C0C4zQOM29A4xXycCSDq3tfpffx8ZHVt89Y5BOBappqMQu9nFhVOc7%2Bjc0KAvji197X%2FZhbmhG5VBmJP9cvbnGqtCVwCwR75O1ADFDO7eMEv8jBQgMnOgOw5avKHYhmeWivYwY7EDjQXpqQrUCXOmsO2SGp5exZrrVkAmelhCfsmHHB7WZId7TKbExH8tYVbhSsFSBK%2BCj2ujvTGFRmHpWwyMNDQyl1p9PN5B7Mf%2BmdllynqDFvsi8PyCmpoUeM1Jwkpb8mE6PBwuADVPKmVtTQHQpkJtdMLXgpL0GOqUBQxGlQOqtoVRs5FrgPhc4vhdcm3b6OrNHN4itaEhY46NU7n1AgAUk4KOLT0Dr24bH1n%2BReA7qYGFsaM%2BceYmxC4NOKajnDNoZgY7vpyPNLDlN2Quqk65yEGNv6z6%2B3DlVYRAyHZoCcCOLFKrDgYBt%2B%2Fu0En8AdvfXeOG0j5YTXWnkOS5%2F3fjO4F2R9JDuJPX1wKTL%2F6Alz%2FhmYLgmjei%2BQ7KOWahe&X-Amz-Signature=6f2052f563f15119115bcfb40849301b7bca50a444afb2168023c8b0e9d85585&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGCCH5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID53ptu643GnExK0Ub8lQfYFfOnIiymtQBZpDXKfWkxKAiEA6zQx9pHPp%2F5%2F3Y9gKRUzXOVuDzAdsMYQCpFUy%2Brd9SIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgtp4dCxnSrXdmJKircA%2B%2BKWZ7v93%2BNEKJwyyiVGMGMtPdJMYW%2BDgtH1%2FqhtmGVw8xQtWhlveOySQ4tJq911WOKHri44mbETHLS%2BRj7udBbJW6Dc0GUlL3RGG7bvCagIA2OcoTSHw1YucMvew14hUjFBTV4ijIS0cqCD3W9Rvloc6ECBbtg6hvB4ewPzqgCexkdbnroomSa2%2B1u2pJSgZM1DP95LU%2F7Gf5XNnJAwCTNr%2FdOjzCYtYnmDfRucbXjS8kWgUM%2FgnxFw3tScaU1y2XShGREJQTEQuRs%2BgXDsPqBXc5tIPsKtDYTQ5Sw6yfQoBLZehlwH5Tklj8U%2FSBto%2F4JP0xa9biYqSId7j%2BHgMdZyV7BS9C0C4zQOM29A4xXycCSDq3tfpffx8ZHVt89Y5BOBappqMQu9nFhVOc7%2Bjc0KAvji197X%2FZhbmhG5VBmJP9cvbnGqtCVwCwR75O1ADFDO7eMEv8jBQgMnOgOw5avKHYhmeWivYwY7EDjQXpqQrUCXOmsO2SGp5exZrrVkAmelhCfsmHHB7WZId7TKbExH8tYVbhSsFSBK%2BCj2ujvTGFRmHpWwyMNDQyl1p9PN5B7Mf%2BmdllynqDFvsi8PyCmpoUeM1Jwkpb8mE6PBwuADVPKmVtTQHQpkJtdMLXgpL0GOqUBQxGlQOqtoVRs5FrgPhc4vhdcm3b6OrNHN4itaEhY46NU7n1AgAUk4KOLT0Dr24bH1n%2BReA7qYGFsaM%2BceYmxC4NOKajnDNoZgY7vpyPNLDlN2Quqk65yEGNv6z6%2B3DlVYRAyHZoCcCOLFKrDgYBt%2B%2Fu0En8AdvfXeOG0j5YTXWnkOS5%2F3fjO4F2R9JDuJPX1wKTL%2F6Alz%2FhmYLgmjei%2BQ7KOWahe&X-Amz-Signature=6d3e33097985bb25c263e6b171193c7ccc6ab27a98c1f6015209e32a5fc701df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
