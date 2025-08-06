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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDMQS5A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAQfo7npvziKhFoAPjNTKGRk3%2Bf3pQyxRKM5cIg0FR9ZAiAiO6aQ3aH6UmKD%2FQB%2FEANkYiip742510DtxyZkDvpUOyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBSExsLxP89gUD2bNKtwDGQa6IP1ejFCCxUc3y80IAmhsA6lovMHJWUW7fuEaeAW4atLKUEcCu6h0fNlwBpmuOjXtZu9hRlOxhy%2B6IXdjM%2F1BXt%2BxDMtQ2lhGrZkzP%2BFiNHDH82PVkew0XE3tf7rlJv%2FBT5LmXLe4CuW55JdEW%2FftvlJmO0x%2BzagIRVS6ZyiF1jup3E%2FcPdqi%2B8rHeIE6Cz0zpaSGmMFDo4haYNyRbsvY71%2FyNcTxyB%2F%2B0lQp7WBc%2BVe6l%2B55ZeNgKsL%2FRRsbBnwVQt680VBf6z7Fm%2BerddIZeNCMVPOMrI0bjuFaobOsI2sVZd1sQSqINSNYC1eeoxN6dO1ph1pBglLBrk7pb2YUoMuVz3hmXRsyut%2FO2TQ3KkHlqMzAv3VIbSMWUvU%2FmcRKMURiPW%2BFLOdV49Y8so6hkOqxdqEjpajjsYNu2z%2Bz7jesSM46VRDRIFd%2B2Zc7P6h6skJwiJxf%2FIGm4KxyQAUqlv1OGE4a98pIHRynCKuJJC0RELprCCm%2FMRaUqcEw4krkBAnoj5LY2Ummqep1LDJbf9W7%2FivvCZr8mmP1dgJZeYtuwoCOpL95kjscDXdswIBnHjv1xJ413z3MQn8Crmm3dcHXqIHkl6PfvfGGmme3qWH3k%2FcPdGXeL6Awoc%2FMxAY6pgFB2wrWYOS5lJ1vTgooSxLhrcqoDHVfHg7%2FdQXuUPw7wdbE5lg0w5oYFPy0gHH1LUD7a38v%2FEslh2zIYvpw2amGfIBf1%2Fmue67ROAsN3RhIk2Sc1KHj6TQRqsyYaUTyTRSDEIU4IfCsVBnO2%2B1jN8bPR77%2BNWEf2WzU0bNrbWZLbEB7rAZXclTvDCYs9Sjjd%2B9hbOqu3WAlt963hT75A7EqoRPF%2BTnp&X-Amz-Signature=1fd6f5762ccd85a14fd993a70ae128d3d0b9ca850c23d397669bdb2a57f502c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDMQS5A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAQfo7npvziKhFoAPjNTKGRk3%2Bf3pQyxRKM5cIg0FR9ZAiAiO6aQ3aH6UmKD%2FQB%2FEANkYiip742510DtxyZkDvpUOyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBSExsLxP89gUD2bNKtwDGQa6IP1ejFCCxUc3y80IAmhsA6lovMHJWUW7fuEaeAW4atLKUEcCu6h0fNlwBpmuOjXtZu9hRlOxhy%2B6IXdjM%2F1BXt%2BxDMtQ2lhGrZkzP%2BFiNHDH82PVkew0XE3tf7rlJv%2FBT5LmXLe4CuW55JdEW%2FftvlJmO0x%2BzagIRVS6ZyiF1jup3E%2FcPdqi%2B8rHeIE6Cz0zpaSGmMFDo4haYNyRbsvY71%2FyNcTxyB%2F%2B0lQp7WBc%2BVe6l%2B55ZeNgKsL%2FRRsbBnwVQt680VBf6z7Fm%2BerddIZeNCMVPOMrI0bjuFaobOsI2sVZd1sQSqINSNYC1eeoxN6dO1ph1pBglLBrk7pb2YUoMuVz3hmXRsyut%2FO2TQ3KkHlqMzAv3VIbSMWUvU%2FmcRKMURiPW%2BFLOdV49Y8so6hkOqxdqEjpajjsYNu2z%2Bz7jesSM46VRDRIFd%2B2Zc7P6h6skJwiJxf%2FIGm4KxyQAUqlv1OGE4a98pIHRynCKuJJC0RELprCCm%2FMRaUqcEw4krkBAnoj5LY2Ummqep1LDJbf9W7%2FivvCZr8mmP1dgJZeYtuwoCOpL95kjscDXdswIBnHjv1xJ413z3MQn8Crmm3dcHXqIHkl6PfvfGGmme3qWH3k%2FcPdGXeL6Awoc%2FMxAY6pgFB2wrWYOS5lJ1vTgooSxLhrcqoDHVfHg7%2FdQXuUPw7wdbE5lg0w5oYFPy0gHH1LUD7a38v%2FEslh2zIYvpw2amGfIBf1%2Fmue67ROAsN3RhIk2Sc1KHj6TQRqsyYaUTyTRSDEIU4IfCsVBnO2%2B1jN8bPR77%2BNWEf2WzU0bNrbWZLbEB7rAZXclTvDCYs9Sjjd%2B9hbOqu3WAlt963hT75A7EqoRPF%2BTnp&X-Amz-Signature=94e42857d970f2a655882df37bdef2c0f99b38b4bdabaf289c6b90afaa142228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDMQS5A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAQfo7npvziKhFoAPjNTKGRk3%2Bf3pQyxRKM5cIg0FR9ZAiAiO6aQ3aH6UmKD%2FQB%2FEANkYiip742510DtxyZkDvpUOyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBSExsLxP89gUD2bNKtwDGQa6IP1ejFCCxUc3y80IAmhsA6lovMHJWUW7fuEaeAW4atLKUEcCu6h0fNlwBpmuOjXtZu9hRlOxhy%2B6IXdjM%2F1BXt%2BxDMtQ2lhGrZkzP%2BFiNHDH82PVkew0XE3tf7rlJv%2FBT5LmXLe4CuW55JdEW%2FftvlJmO0x%2BzagIRVS6ZyiF1jup3E%2FcPdqi%2B8rHeIE6Cz0zpaSGmMFDo4haYNyRbsvY71%2FyNcTxyB%2F%2B0lQp7WBc%2BVe6l%2B55ZeNgKsL%2FRRsbBnwVQt680VBf6z7Fm%2BerddIZeNCMVPOMrI0bjuFaobOsI2sVZd1sQSqINSNYC1eeoxN6dO1ph1pBglLBrk7pb2YUoMuVz3hmXRsyut%2FO2TQ3KkHlqMzAv3VIbSMWUvU%2FmcRKMURiPW%2BFLOdV49Y8so6hkOqxdqEjpajjsYNu2z%2Bz7jesSM46VRDRIFd%2B2Zc7P6h6skJwiJxf%2FIGm4KxyQAUqlv1OGE4a98pIHRynCKuJJC0RELprCCm%2FMRaUqcEw4krkBAnoj5LY2Ummqep1LDJbf9W7%2FivvCZr8mmP1dgJZeYtuwoCOpL95kjscDXdswIBnHjv1xJ413z3MQn8Crmm3dcHXqIHkl6PfvfGGmme3qWH3k%2FcPdGXeL6Awoc%2FMxAY6pgFB2wrWYOS5lJ1vTgooSxLhrcqoDHVfHg7%2FdQXuUPw7wdbE5lg0w5oYFPy0gHH1LUD7a38v%2FEslh2zIYvpw2amGfIBf1%2Fmue67ROAsN3RhIk2Sc1KHj6TQRqsyYaUTyTRSDEIU4IfCsVBnO2%2B1jN8bPR77%2BNWEf2WzU0bNrbWZLbEB7rAZXclTvDCYs9Sjjd%2B9hbOqu3WAlt963hT75A7EqoRPF%2BTnp&X-Amz-Signature=d552655ac9171c1743db1f6fffb37c8fbd4ca83a63ae2f27557d8356888c89d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
