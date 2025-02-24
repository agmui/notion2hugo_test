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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWH5EJDA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ7bN4aEvCF4FHAjoL1Apf3VO5K1LDDG2%2Fo%2BJUpwUvCwIhAMpcZ5OhAnGABAhN%2F2OqvQkNta6ql7S%2BYxfsFNsjPJxaKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNc5kzoCUQnAmttAEq3AOBlDlryDymefdDd4B3iF4srNxKIWFOxAJK03HJDmO5SrjiZqse5MXXHk%2BjHxNlPnHqVfjePNtSrb3Zr45n8HjG5x9fH5ATgdsq35i%2BYAyIII%2BRix7jpKPoiLXbQ3sJDurMG9YcYX2MXORlS3g2RzZubGfOxy8qLoy9PuI9DtBOE8CFIzD%2BRENskz0lxLrtHq%2BDLyvfPSQ7ZtCLO%2FZ6ME2nqsx5F9YVvA8sSUb0ZQyjhV1BM69eRulgNmHrg%2FVsHRmNCpNj1KB8ZXr7n5cpVAd2A1e0lzrU1pNOc%2B5tPmPV79BD6%2Fz2rIJX43Vva41RyGUaDzw%2B7rb2TlSMD0MJkNKFijYalMt85Fvr5fNJMvh9JrPmLSTcp%2FbsKnrzXvASrl4YK7T2NKjflaSVmBXHB04yO7vv1O6s8pK6vnGHWKpnf5Yj8ETtBgLdXBWJ68rXZoKOMjcwYy5Y3ANsfTrpn2%2BeeS9%2BjqTWXiWj7cpg4jPwy4y3xoKjt1ZohVThEmiWJHuVFQByHKto3f4gFnAJUJO3bJVnlrci7JQKFz9sNKlgCEX59nosRXUKYrhVf08NegrkcfwXiWO2F5iEI%2FrUi8%2BC11bhaMLRza41ZmaKx5W3FKzNRlV2neaz7lVhljC18O69BjqkAfXHcfKS2n5ptU%2Frjduezgs6aQnVUuv77iumeYGZj4qBCqDUf8BaV6mQoC6wg4R9tRTA5n1lxif4Nhf7Y4Lb5JNX0yf33uTstR8qPrJNjZ%2BS6LiRF8xMVvNQLfDgDLSprPNsm%2FMfUFRioI07ps6To9eqRFoP4Z3yV8MvlSuje7S9sl5%2FuFZ1msErfTGRLSiglu81QJsfe%2BzV4ewiVCia%2B7x5iznl&X-Amz-Signature=8c1b1bd0043054730ab688730ce16f60079400f45c8de2502a9b43fb29ccf1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWH5EJDA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ7bN4aEvCF4FHAjoL1Apf3VO5K1LDDG2%2Fo%2BJUpwUvCwIhAMpcZ5OhAnGABAhN%2F2OqvQkNta6ql7S%2BYxfsFNsjPJxaKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNc5kzoCUQnAmttAEq3AOBlDlryDymefdDd4B3iF4srNxKIWFOxAJK03HJDmO5SrjiZqse5MXXHk%2BjHxNlPnHqVfjePNtSrb3Zr45n8HjG5x9fH5ATgdsq35i%2BYAyIII%2BRix7jpKPoiLXbQ3sJDurMG9YcYX2MXORlS3g2RzZubGfOxy8qLoy9PuI9DtBOE8CFIzD%2BRENskz0lxLrtHq%2BDLyvfPSQ7ZtCLO%2FZ6ME2nqsx5F9YVvA8sSUb0ZQyjhV1BM69eRulgNmHrg%2FVsHRmNCpNj1KB8ZXr7n5cpVAd2A1e0lzrU1pNOc%2B5tPmPV79BD6%2Fz2rIJX43Vva41RyGUaDzw%2B7rb2TlSMD0MJkNKFijYalMt85Fvr5fNJMvh9JrPmLSTcp%2FbsKnrzXvASrl4YK7T2NKjflaSVmBXHB04yO7vv1O6s8pK6vnGHWKpnf5Yj8ETtBgLdXBWJ68rXZoKOMjcwYy5Y3ANsfTrpn2%2BeeS9%2BjqTWXiWj7cpg4jPwy4y3xoKjt1ZohVThEmiWJHuVFQByHKto3f4gFnAJUJO3bJVnlrci7JQKFz9sNKlgCEX59nosRXUKYrhVf08NegrkcfwXiWO2F5iEI%2FrUi8%2BC11bhaMLRza41ZmaKx5W3FKzNRlV2neaz7lVhljC18O69BjqkAfXHcfKS2n5ptU%2Frjduezgs6aQnVUuv77iumeYGZj4qBCqDUf8BaV6mQoC6wg4R9tRTA5n1lxif4Nhf7Y4Lb5JNX0yf33uTstR8qPrJNjZ%2BS6LiRF8xMVvNQLfDgDLSprPNsm%2FMfUFRioI07ps6To9eqRFoP4Z3yV8MvlSuje7S9sl5%2FuFZ1msErfTGRLSiglu81QJsfe%2BzV4ewiVCia%2B7x5iznl&X-Amz-Signature=1c751be74e50e2fef9f4bd016f72cd8e1b56dda70172de33f7fa3a13dffe93af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWH5EJDA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ7bN4aEvCF4FHAjoL1Apf3VO5K1LDDG2%2Fo%2BJUpwUvCwIhAMpcZ5OhAnGABAhN%2F2OqvQkNta6ql7S%2BYxfsFNsjPJxaKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNc5kzoCUQnAmttAEq3AOBlDlryDymefdDd4B3iF4srNxKIWFOxAJK03HJDmO5SrjiZqse5MXXHk%2BjHxNlPnHqVfjePNtSrb3Zr45n8HjG5x9fH5ATgdsq35i%2BYAyIII%2BRix7jpKPoiLXbQ3sJDurMG9YcYX2MXORlS3g2RzZubGfOxy8qLoy9PuI9DtBOE8CFIzD%2BRENskz0lxLrtHq%2BDLyvfPSQ7ZtCLO%2FZ6ME2nqsx5F9YVvA8sSUb0ZQyjhV1BM69eRulgNmHrg%2FVsHRmNCpNj1KB8ZXr7n5cpVAd2A1e0lzrU1pNOc%2B5tPmPV79BD6%2Fz2rIJX43Vva41RyGUaDzw%2B7rb2TlSMD0MJkNKFijYalMt85Fvr5fNJMvh9JrPmLSTcp%2FbsKnrzXvASrl4YK7T2NKjflaSVmBXHB04yO7vv1O6s8pK6vnGHWKpnf5Yj8ETtBgLdXBWJ68rXZoKOMjcwYy5Y3ANsfTrpn2%2BeeS9%2BjqTWXiWj7cpg4jPwy4y3xoKjt1ZohVThEmiWJHuVFQByHKto3f4gFnAJUJO3bJVnlrci7JQKFz9sNKlgCEX59nosRXUKYrhVf08NegrkcfwXiWO2F5iEI%2FrUi8%2BC11bhaMLRza41ZmaKx5W3FKzNRlV2neaz7lVhljC18O69BjqkAfXHcfKS2n5ptU%2Frjduezgs6aQnVUuv77iumeYGZj4qBCqDUf8BaV6mQoC6wg4R9tRTA5n1lxif4Nhf7Y4Lb5JNX0yf33uTstR8qPrJNjZ%2BS6LiRF8xMVvNQLfDgDLSprPNsm%2FMfUFRioI07ps6To9eqRFoP4Z3yV8MvlSuje7S9sl5%2FuFZ1msErfTGRLSiglu81QJsfe%2BzV4ewiVCia%2B7x5iznl&X-Amz-Signature=51b82b5fa895e0bbeae471b21aaf3226fea7d6c1473678dfd1332da4b3b7e3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
