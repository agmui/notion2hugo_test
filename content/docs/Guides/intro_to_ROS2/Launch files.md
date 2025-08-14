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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOEVKFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDlFVKw149esqeAXuZfFSuWDkQMv0%2Bi29Kaqa%2BlAGYs9gIgNg1di3tNWA9JhxGX3q8BnsFiNzQxpdHd0qsToiuSXQgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFIjFO%2F%2FlkS%2FwfdtQCrcA1wBPtWdJTJ6Da8WKT46eMKc02kzUlk3z0fj1Ppnbjogwr8NfpM0XJPf0OHQxETE4%2BbmejFH2u1jTJrAvB%2BnMSqhrBhve7o%2FuzBKEUYSyv7EWx%2FwpKlC0GGAbJxmgz65fr0tawrKbBSdO%2Bz%2BVKTYbU6GGxthbBof92%2FjdWdasGKsQWzPAhtf1UmTGo3E09xZvjy5ADKTiVttAq6ArICDpZjgWMmS65f76w1j9dSrJENhFar%2Ft3Akl4AgFEKwUM%2FLChqx037XmV%2BHb%2FQ%2BFRraUTp7P%2BzSNXdt%2FR65MC2KdXEE%2B3%2BgFIh8nVPFVsqpcGGGo68npFhQPLnkH9yApJwnHctPW9Qu4QhRIEIFkloeRM2HuUY%2BS4qq1lDM3E2QMVUEgpnhu8VKvhaaC0wi1nIEx%2Fyhct1y9DKtlEiZWDa6qabW%2F77uh57erJrCqC%2FsgHRj%2BS0DaKmZReZxBWnOHpgw6AzuWFUd2EkYQak4RaS8FBUopPUqZyeV5rjCe0%2FCgFDmD75NMSCNj6DbZcJi8d26yBWeFYoXShsvpuzEPU%2FUP7I%2FRDe5MvRtWcCA81TMYrk%2BLI09K8QO%2BK9YMXc5EVwi7HSrDu%2BSOgHIIgxJybj%2FUN0oGLxaoz%2B5xUhUNjGLMJ3o%2BMQGOqUBdT4uSNegoXav11HToNTawg%2Fc8VJ64Iu6zgjhNxthPqt3KVTKsuvJVWgbbko%2FyHJ2ue7OlT1arCTpqYzrPYyGHDgmXtF4uC3D1bCPZydXf97JrC%2Fj0Q5qg%2B8RT%2B8%2BlxD3IOl%2BhxwyZygaJVpKemiS7IQXc469jWBF94u%2F3udNY0InTri3r2bouh34nGLFj69SqR6gRJGU3OvtruYxwL87XI2t%2FrLl&X-Amz-Signature=154a7755785a60218b98c34c885d5e9c0f08b451f3784793d90293ea40baedd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOEVKFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDlFVKw149esqeAXuZfFSuWDkQMv0%2Bi29Kaqa%2BlAGYs9gIgNg1di3tNWA9JhxGX3q8BnsFiNzQxpdHd0qsToiuSXQgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFIjFO%2F%2FlkS%2FwfdtQCrcA1wBPtWdJTJ6Da8WKT46eMKc02kzUlk3z0fj1Ppnbjogwr8NfpM0XJPf0OHQxETE4%2BbmejFH2u1jTJrAvB%2BnMSqhrBhve7o%2FuzBKEUYSyv7EWx%2FwpKlC0GGAbJxmgz65fr0tawrKbBSdO%2Bz%2BVKTYbU6GGxthbBof92%2FjdWdasGKsQWzPAhtf1UmTGo3E09xZvjy5ADKTiVttAq6ArICDpZjgWMmS65f76w1j9dSrJENhFar%2Ft3Akl4AgFEKwUM%2FLChqx037XmV%2BHb%2FQ%2BFRraUTp7P%2BzSNXdt%2FR65MC2KdXEE%2B3%2BgFIh8nVPFVsqpcGGGo68npFhQPLnkH9yApJwnHctPW9Qu4QhRIEIFkloeRM2HuUY%2BS4qq1lDM3E2QMVUEgpnhu8VKvhaaC0wi1nIEx%2Fyhct1y9DKtlEiZWDa6qabW%2F77uh57erJrCqC%2FsgHRj%2BS0DaKmZReZxBWnOHpgw6AzuWFUd2EkYQak4RaS8FBUopPUqZyeV5rjCe0%2FCgFDmD75NMSCNj6DbZcJi8d26yBWeFYoXShsvpuzEPU%2FUP7I%2FRDe5MvRtWcCA81TMYrk%2BLI09K8QO%2BK9YMXc5EVwi7HSrDu%2BSOgHIIgxJybj%2FUN0oGLxaoz%2B5xUhUNjGLMJ3o%2BMQGOqUBdT4uSNegoXav11HToNTawg%2Fc8VJ64Iu6zgjhNxthPqt3KVTKsuvJVWgbbko%2FyHJ2ue7OlT1arCTpqYzrPYyGHDgmXtF4uC3D1bCPZydXf97JrC%2Fj0Q5qg%2B8RT%2B8%2BlxD3IOl%2BhxwyZygaJVpKemiS7IQXc469jWBF94u%2F3udNY0InTri3r2bouh34nGLFj69SqR6gRJGU3OvtruYxwL87XI2t%2FrLl&X-Amz-Signature=8cd17d173b17a34c79c27433c110c82632a4b214536ba6cd69772648a278c7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOEVKFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDlFVKw149esqeAXuZfFSuWDkQMv0%2Bi29Kaqa%2BlAGYs9gIgNg1di3tNWA9JhxGX3q8BnsFiNzQxpdHd0qsToiuSXQgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFIjFO%2F%2FlkS%2FwfdtQCrcA1wBPtWdJTJ6Da8WKT46eMKc02kzUlk3z0fj1Ppnbjogwr8NfpM0XJPf0OHQxETE4%2BbmejFH2u1jTJrAvB%2BnMSqhrBhve7o%2FuzBKEUYSyv7EWx%2FwpKlC0GGAbJxmgz65fr0tawrKbBSdO%2Bz%2BVKTYbU6GGxthbBof92%2FjdWdasGKsQWzPAhtf1UmTGo3E09xZvjy5ADKTiVttAq6ArICDpZjgWMmS65f76w1j9dSrJENhFar%2Ft3Akl4AgFEKwUM%2FLChqx037XmV%2BHb%2FQ%2BFRraUTp7P%2BzSNXdt%2FR65MC2KdXEE%2B3%2BgFIh8nVPFVsqpcGGGo68npFhQPLnkH9yApJwnHctPW9Qu4QhRIEIFkloeRM2HuUY%2BS4qq1lDM3E2QMVUEgpnhu8VKvhaaC0wi1nIEx%2Fyhct1y9DKtlEiZWDa6qabW%2F77uh57erJrCqC%2FsgHRj%2BS0DaKmZReZxBWnOHpgw6AzuWFUd2EkYQak4RaS8FBUopPUqZyeV5rjCe0%2FCgFDmD75NMSCNj6DbZcJi8d26yBWeFYoXShsvpuzEPU%2FUP7I%2FRDe5MvRtWcCA81TMYrk%2BLI09K8QO%2BK9YMXc5EVwi7HSrDu%2BSOgHIIgxJybj%2FUN0oGLxaoz%2B5xUhUNjGLMJ3o%2BMQGOqUBdT4uSNegoXav11HToNTawg%2Fc8VJ64Iu6zgjhNxthPqt3KVTKsuvJVWgbbko%2FyHJ2ue7OlT1arCTpqYzrPYyGHDgmXtF4uC3D1bCPZydXf97JrC%2Fj0Q5qg%2B8RT%2B8%2BlxD3IOl%2BhxwyZygaJVpKemiS7IQXc469jWBF94u%2F3udNY0InTri3r2bouh34nGLFj69SqR6gRJGU3OvtruYxwL87XI2t%2FrLl&X-Amz-Signature=7c210bb76b2f21a267b4315e033910a6932336163675d707d924b22668f326dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
