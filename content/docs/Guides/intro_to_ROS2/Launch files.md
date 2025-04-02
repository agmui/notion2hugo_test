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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDV6Q3Z6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID6rC76lurIZahC28I%2FChK4FsRBTr%2BfUW%2FxPie1l%2BDBZAiBcv1njEeWZurm5u20mKbsZGG7CcbMSUpnUeeTNf99LSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYySoseAvSrxR4l7qKtwDvXpk7ez3hxDMKTAzNYnPHjB%2FkPmko4ZfjTW7giQA0CJY8D6bFBQ33I0jIk863wSfbAf%2B042ZXbpJRfpolfKmFQZR5SLt8fdTjW%2B0WnnHab8MN%2Fk703fpKmGUybw%2Bc4EaTFx4CDY70iGqs0oi43VGM2ruC7RQzoNcqEduHCVe7xzOCnoZHO5Eh1vghWXq5CITbGWkIfzRjfOmCRc4ZyF2uG75xaCGCbPNKcaQu3Xz13mvio%2B0%2B6tC8oRT0ntQoHRKPyDJrYBC%2BdxBKDtf8mbNg%2B3RSDHXDIr3fKT%2FpQ9mb3Ji%2Bik6xJPYpElGzNOffyVGyEa0Z4CPqAc8nbhxTuDeCQStqxBv62sgE43qG1BAtJ1TpXVN0uQS28chvkLYDe91OY4oWv9GSN3rwis36BzxRugp3dOF2E85cJJuv81kthODlhfCc3IhOOZYQAo8mfU1%2F08BB0Af10SHazaG7D0%2BlhSZWvVQGZi24%2Fno%2B%2FxEmdcff4BMPMLkv%2Bcj0W%2FKfTE7DxX49Tn9c3drIjoeOASkgokfDmWmxukHvD8VhDtrs%2F6YYoxbYdzitdsHffrJtVs2LSA5xFBUoJA1K49WvEUpbsondxVPby3B63%2FLSgUJJpUKGOwXaBDVw1J2U3QwkbWzvwY6pgFPvSlBuglsJb4wjD3Igwwf8ZuALlhDUDrZadQXrL8JdGIwc2MwFDqHNkxP8f%2FFRcMDLkkL2HaTAYhbChIGfkemDMlRWBD3pFAs%2FUP%2BKeBoAllpMI9n2VG0pNOHDyqqk3zo5HhE2dDo3u0KiWOOVCTHF0IqMSaw2Zz870ingjGsTw21fx8O9Wwgl5iSC49EtSYhLIs3NVLF4P2dA%2Bs3zKjHqAvgdhw%2B&X-Amz-Signature=b2401fb454ef8b538d8655afea368373d1dec83d494cb10a3e597ab4068e1ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDV6Q3Z6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID6rC76lurIZahC28I%2FChK4FsRBTr%2BfUW%2FxPie1l%2BDBZAiBcv1njEeWZurm5u20mKbsZGG7CcbMSUpnUeeTNf99LSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYySoseAvSrxR4l7qKtwDvXpk7ez3hxDMKTAzNYnPHjB%2FkPmko4ZfjTW7giQA0CJY8D6bFBQ33I0jIk863wSfbAf%2B042ZXbpJRfpolfKmFQZR5SLt8fdTjW%2B0WnnHab8MN%2Fk703fpKmGUybw%2Bc4EaTFx4CDY70iGqs0oi43VGM2ruC7RQzoNcqEduHCVe7xzOCnoZHO5Eh1vghWXq5CITbGWkIfzRjfOmCRc4ZyF2uG75xaCGCbPNKcaQu3Xz13mvio%2B0%2B6tC8oRT0ntQoHRKPyDJrYBC%2BdxBKDtf8mbNg%2B3RSDHXDIr3fKT%2FpQ9mb3Ji%2Bik6xJPYpElGzNOffyVGyEa0Z4CPqAc8nbhxTuDeCQStqxBv62sgE43qG1BAtJ1TpXVN0uQS28chvkLYDe91OY4oWv9GSN3rwis36BzxRugp3dOF2E85cJJuv81kthODlhfCc3IhOOZYQAo8mfU1%2F08BB0Af10SHazaG7D0%2BlhSZWvVQGZi24%2Fno%2B%2FxEmdcff4BMPMLkv%2Bcj0W%2FKfTE7DxX49Tn9c3drIjoeOASkgokfDmWmxukHvD8VhDtrs%2F6YYoxbYdzitdsHffrJtVs2LSA5xFBUoJA1K49WvEUpbsondxVPby3B63%2FLSgUJJpUKGOwXaBDVw1J2U3QwkbWzvwY6pgFPvSlBuglsJb4wjD3Igwwf8ZuALlhDUDrZadQXrL8JdGIwc2MwFDqHNkxP8f%2FFRcMDLkkL2HaTAYhbChIGfkemDMlRWBD3pFAs%2FUP%2BKeBoAllpMI9n2VG0pNOHDyqqk3zo5HhE2dDo3u0KiWOOVCTHF0IqMSaw2Zz870ingjGsTw21fx8O9Wwgl5iSC49EtSYhLIs3NVLF4P2dA%2Bs3zKjHqAvgdhw%2B&X-Amz-Signature=1e13caefad44d1cb5ed5b8f2fc86a356a4a7294a49480f6e619dc899eb0f2a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDV6Q3Z6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID6rC76lurIZahC28I%2FChK4FsRBTr%2BfUW%2FxPie1l%2BDBZAiBcv1njEeWZurm5u20mKbsZGG7CcbMSUpnUeeTNf99LSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYySoseAvSrxR4l7qKtwDvXpk7ez3hxDMKTAzNYnPHjB%2FkPmko4ZfjTW7giQA0CJY8D6bFBQ33I0jIk863wSfbAf%2B042ZXbpJRfpolfKmFQZR5SLt8fdTjW%2B0WnnHab8MN%2Fk703fpKmGUybw%2Bc4EaTFx4CDY70iGqs0oi43VGM2ruC7RQzoNcqEduHCVe7xzOCnoZHO5Eh1vghWXq5CITbGWkIfzRjfOmCRc4ZyF2uG75xaCGCbPNKcaQu3Xz13mvio%2B0%2B6tC8oRT0ntQoHRKPyDJrYBC%2BdxBKDtf8mbNg%2B3RSDHXDIr3fKT%2FpQ9mb3Ji%2Bik6xJPYpElGzNOffyVGyEa0Z4CPqAc8nbhxTuDeCQStqxBv62sgE43qG1BAtJ1TpXVN0uQS28chvkLYDe91OY4oWv9GSN3rwis36BzxRugp3dOF2E85cJJuv81kthODlhfCc3IhOOZYQAo8mfU1%2F08BB0Af10SHazaG7D0%2BlhSZWvVQGZi24%2Fno%2B%2FxEmdcff4BMPMLkv%2Bcj0W%2FKfTE7DxX49Tn9c3drIjoeOASkgokfDmWmxukHvD8VhDtrs%2F6YYoxbYdzitdsHffrJtVs2LSA5xFBUoJA1K49WvEUpbsondxVPby3B63%2FLSgUJJpUKGOwXaBDVw1J2U3QwkbWzvwY6pgFPvSlBuglsJb4wjD3Igwwf8ZuALlhDUDrZadQXrL8JdGIwc2MwFDqHNkxP8f%2FFRcMDLkkL2HaTAYhbChIGfkemDMlRWBD3pFAs%2FUP%2BKeBoAllpMI9n2VG0pNOHDyqqk3zo5HhE2dDo3u0KiWOOVCTHF0IqMSaw2Zz870ingjGsTw21fx8O9Wwgl5iSC49EtSYhLIs3NVLF4P2dA%2Bs3zKjHqAvgdhw%2B&X-Amz-Signature=09f086a7baaf62aba62da5c8c70cd251f7a6ff07d54f5ddf274f12514ec65f15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
