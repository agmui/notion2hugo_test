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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVT3BQF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL18hX7NIzhS2VHaP5ZLUzNq6pxQ4inJ%2BqVNdpRinIEwIhAKpp84t3TFjrVQvsCrLDBgbZAQphlEGIDn1VxDpobp%2BwKv8DCCEQABoMNjM3NDIzMTgzODA1Igy8anH9v5XmU1yIJYUq3AMzCTjhd1VkfuDrzrODBaVJ7FLDfqSg%2FVDzhMtpA%2BlA4zebCIHs8Ddv54Ops%2B8jJ01fnANT0U%2BEJ3Q3Nk89gFO3t%2Ft52QEQ2%2BlIvWfExDcP7IIkNn87fU6yDnHvaxcx2wLBmk0KoZDEg9jHDJIYh4Tff0Kuljg9Hhm%2BCnZLUm1mapMEMucil8KGJVPaGC07GN7QfVV%2FLDYvOpOYS3EAyTdKyWNEPEExBdjq885ag%2BdSiqdF1sYUbHUymiKRTtObPc98YxdY3UYmNpdZ1YLtUhaNab4xsUBQuNWz4C3Md2N5TxAkJfrQizDK1ri3hDxpPDfQ%2Bcwe7p%2B5OssN0RMwzC33w31Ig4MNWsmBe1N2oyMNuH5u6sTnMgf37jZCQiR9XLUhDg48W24MNnmlIFSl5rtVDzrVvR9PF87Sne2nOI1z%2BrSTVEdUcYIFVHh%2FBVb3KppjYPR5kGM43at%2FH1hxhyfgPLl0IBIvZrcMiGrpu%2F4uoI47Dvt%2BE5H2m4bGzckJ3JNzWFUXCBhJa200eeo0qkfyw92AqubIypeoHfGq7j5U6wRhUOz0X9Ac%2B7P5VZss2c917t4P%2BAkrtKpGEIyCn3jxisJdd7S9SfcXDBLGLVivsuGXRT0H1yuLVv6DlzCl8e69BjqkAcYCnzXl%2FdpIcDmiERxNbKhvbkFQoKjumJ1hSt%2Bw%2Bx4jS9IyK7WgHtavwPMGo7%2BrlzKYIZ%2FkAO4QOkh%2FNQ9HbYW1LJf5JqAcBHD0zDgGsaa5134MwJ69%2Fvv%2Bn2Z3Dh4FVE16Ccimf2E9ZOtmKf6f%2F01ZaHJ73tq7h90guwNIBXWv25fvMR1zwod7JfKjg1FOS1emk27%2FGxe9SVqTmgv3YJaIvI1w&X-Amz-Signature=b5fe3121787bc7f021b23acb36d25dfd0db4223e93d2a136b505784f38300aea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVT3BQF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL18hX7NIzhS2VHaP5ZLUzNq6pxQ4inJ%2BqVNdpRinIEwIhAKpp84t3TFjrVQvsCrLDBgbZAQphlEGIDn1VxDpobp%2BwKv8DCCEQABoMNjM3NDIzMTgzODA1Igy8anH9v5XmU1yIJYUq3AMzCTjhd1VkfuDrzrODBaVJ7FLDfqSg%2FVDzhMtpA%2BlA4zebCIHs8Ddv54Ops%2B8jJ01fnANT0U%2BEJ3Q3Nk89gFO3t%2Ft52QEQ2%2BlIvWfExDcP7IIkNn87fU6yDnHvaxcx2wLBmk0KoZDEg9jHDJIYh4Tff0Kuljg9Hhm%2BCnZLUm1mapMEMucil8KGJVPaGC07GN7QfVV%2FLDYvOpOYS3EAyTdKyWNEPEExBdjq885ag%2BdSiqdF1sYUbHUymiKRTtObPc98YxdY3UYmNpdZ1YLtUhaNab4xsUBQuNWz4C3Md2N5TxAkJfrQizDK1ri3hDxpPDfQ%2Bcwe7p%2B5OssN0RMwzC33w31Ig4MNWsmBe1N2oyMNuH5u6sTnMgf37jZCQiR9XLUhDg48W24MNnmlIFSl5rtVDzrVvR9PF87Sne2nOI1z%2BrSTVEdUcYIFVHh%2FBVb3KppjYPR5kGM43at%2FH1hxhyfgPLl0IBIvZrcMiGrpu%2F4uoI47Dvt%2BE5H2m4bGzckJ3JNzWFUXCBhJa200eeo0qkfyw92AqubIypeoHfGq7j5U6wRhUOz0X9Ac%2B7P5VZss2c917t4P%2BAkrtKpGEIyCn3jxisJdd7S9SfcXDBLGLVivsuGXRT0H1yuLVv6DlzCl8e69BjqkAcYCnzXl%2FdpIcDmiERxNbKhvbkFQoKjumJ1hSt%2Bw%2Bx4jS9IyK7WgHtavwPMGo7%2BrlzKYIZ%2FkAO4QOkh%2FNQ9HbYW1LJf5JqAcBHD0zDgGsaa5134MwJ69%2Fvv%2Bn2Z3Dh4FVE16Ccimf2E9ZOtmKf6f%2F01ZaHJ73tq7h90guwNIBXWv25fvMR1zwod7JfKjg1FOS1emk27%2FGxe9SVqTmgv3YJaIvI1w&X-Amz-Signature=89b7985b74a6daf7377abc9b5cfc2700d61a528e8a2a5253ffd93435a4d720be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVT3BQF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL18hX7NIzhS2VHaP5ZLUzNq6pxQ4inJ%2BqVNdpRinIEwIhAKpp84t3TFjrVQvsCrLDBgbZAQphlEGIDn1VxDpobp%2BwKv8DCCEQABoMNjM3NDIzMTgzODA1Igy8anH9v5XmU1yIJYUq3AMzCTjhd1VkfuDrzrODBaVJ7FLDfqSg%2FVDzhMtpA%2BlA4zebCIHs8Ddv54Ops%2B8jJ01fnANT0U%2BEJ3Q3Nk89gFO3t%2Ft52QEQ2%2BlIvWfExDcP7IIkNn87fU6yDnHvaxcx2wLBmk0KoZDEg9jHDJIYh4Tff0Kuljg9Hhm%2BCnZLUm1mapMEMucil8KGJVPaGC07GN7QfVV%2FLDYvOpOYS3EAyTdKyWNEPEExBdjq885ag%2BdSiqdF1sYUbHUymiKRTtObPc98YxdY3UYmNpdZ1YLtUhaNab4xsUBQuNWz4C3Md2N5TxAkJfrQizDK1ri3hDxpPDfQ%2Bcwe7p%2B5OssN0RMwzC33w31Ig4MNWsmBe1N2oyMNuH5u6sTnMgf37jZCQiR9XLUhDg48W24MNnmlIFSl5rtVDzrVvR9PF87Sne2nOI1z%2BrSTVEdUcYIFVHh%2FBVb3KppjYPR5kGM43at%2FH1hxhyfgPLl0IBIvZrcMiGrpu%2F4uoI47Dvt%2BE5H2m4bGzckJ3JNzWFUXCBhJa200eeo0qkfyw92AqubIypeoHfGq7j5U6wRhUOz0X9Ac%2B7P5VZss2c917t4P%2BAkrtKpGEIyCn3jxisJdd7S9SfcXDBLGLVivsuGXRT0H1yuLVv6DlzCl8e69BjqkAcYCnzXl%2FdpIcDmiERxNbKhvbkFQoKjumJ1hSt%2Bw%2Bx4jS9IyK7WgHtavwPMGo7%2BrlzKYIZ%2FkAO4QOkh%2FNQ9HbYW1LJf5JqAcBHD0zDgGsaa5134MwJ69%2Fvv%2Bn2Z3Dh4FVE16Ccimf2E9ZOtmKf6f%2F01ZaHJ73tq7h90guwNIBXWv25fvMR1zwod7JfKjg1FOS1emk27%2FGxe9SVqTmgv3YJaIvI1w&X-Amz-Signature=57bda1eaa73d2865c16b3e2f9d61f788b21334fa9f746ce500b5644b55d4b38f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
