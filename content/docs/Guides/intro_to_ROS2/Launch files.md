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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDR2ODW5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICbGGWPP0Lc3BSTvsa7CEn415M2HOCEgKjs%2Bs5AuflZSAiAhf%2Bh6iMc1ycd4R6Byr3ajyqDX6YuVIDATwy%2FA8DZK4yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMurJens8%2BnYlm2enNKtwD07BxldsDA98hQgmEiQnvMew0hgTK2Ht2lL9eSiRFO94W2vZ0fxTbm9BdxFhtc2EjN7%2BfMFpdWWvYuJteTWNy%2B%2BZW1WKLmt4LX2Bgyfij4CQaFSk%2Be2RXKPCfjAD0uv3a8xWC4A17s1F6zwAFtRA7TGtdi6xfqk6kcAf9dqs4spUHJQHLaZz%2BffPDwAQxS2vBbeeRlbcTTRNLGFOy4eWxnxMhptDsZILazVhgFQ%2BhK%2FR0OwS5izNvHx3M9ioDKuH4ekbEM7tnK7ULis6eaCYggPdqETxS00%2BM4PGM71uYaQzYm35qdH0tMfxwVa%2BU6EaMH3u%2BeVwqyb2q1cu5%2Bt3hO2hBL3v%2B7LJfLcDQLuodf4JMy%2FlZ5wX965LDtlVTKt0hq2Zik9y4pKx%2BknHXy9k652OG%2Fijb70UvsqehVwb%2F20F1%2B9vkGud2k2EqkeQFrjsgCuk94WGcq%2Bt5idsKiev0JJhqsHcLGNe%2FhywNXhgiAhTLalrndveDqU4wrUfMyQh1eofNuqFjtU0MAujkuUPBC%2Fw2VYGX9UEMgO56G0KXPUg2wUOQSqr8bokIpcUfUOvhns4jKriVu4vvdyu1iZqYeK01Ek7mBl8HLhgJYmAj%2FdMWHKK9SJg2p9hw4NkwmejdwwY6pgGElkoYuhafKmvu0%2FLyAK0YB3XBvfI1QDP16R4HGkaS9WLhmSiI4ItX%2B57yHmh60zUy7ldFBdG9vcDJ28bBTN4LLUmrjLIxWDvCwUbDqC%2BYQJDZ5VN9o2aaGDJ2SYXV7oTsYS0rabTjhgk%2B6B3aTrF3VlHFadbH%2FS2rtWrpazBrb%2BFKFSI7dmfMmADYWabjwj%2FU0kClTDEnu0S1aB1vOVbdgnly6OkR&X-Amz-Signature=a8f47e97c703bbe1f2de7613c89c0b217a4f517b7c486c0070e1f71081a3fd03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDR2ODW5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICbGGWPP0Lc3BSTvsa7CEn415M2HOCEgKjs%2Bs5AuflZSAiAhf%2Bh6iMc1ycd4R6Byr3ajyqDX6YuVIDATwy%2FA8DZK4yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMurJens8%2BnYlm2enNKtwD07BxldsDA98hQgmEiQnvMew0hgTK2Ht2lL9eSiRFO94W2vZ0fxTbm9BdxFhtc2EjN7%2BfMFpdWWvYuJteTWNy%2B%2BZW1WKLmt4LX2Bgyfij4CQaFSk%2Be2RXKPCfjAD0uv3a8xWC4A17s1F6zwAFtRA7TGtdi6xfqk6kcAf9dqs4spUHJQHLaZz%2BffPDwAQxS2vBbeeRlbcTTRNLGFOy4eWxnxMhptDsZILazVhgFQ%2BhK%2FR0OwS5izNvHx3M9ioDKuH4ekbEM7tnK7ULis6eaCYggPdqETxS00%2BM4PGM71uYaQzYm35qdH0tMfxwVa%2BU6EaMH3u%2BeVwqyb2q1cu5%2Bt3hO2hBL3v%2B7LJfLcDQLuodf4JMy%2FlZ5wX965LDtlVTKt0hq2Zik9y4pKx%2BknHXy9k652OG%2Fijb70UvsqehVwb%2F20F1%2B9vkGud2k2EqkeQFrjsgCuk94WGcq%2Bt5idsKiev0JJhqsHcLGNe%2FhywNXhgiAhTLalrndveDqU4wrUfMyQh1eofNuqFjtU0MAujkuUPBC%2Fw2VYGX9UEMgO56G0KXPUg2wUOQSqr8bokIpcUfUOvhns4jKriVu4vvdyu1iZqYeK01Ek7mBl8HLhgJYmAj%2FdMWHKK9SJg2p9hw4NkwmejdwwY6pgGElkoYuhafKmvu0%2FLyAK0YB3XBvfI1QDP16R4HGkaS9WLhmSiI4ItX%2B57yHmh60zUy7ldFBdG9vcDJ28bBTN4LLUmrjLIxWDvCwUbDqC%2BYQJDZ5VN9o2aaGDJ2SYXV7oTsYS0rabTjhgk%2B6B3aTrF3VlHFadbH%2FS2rtWrpazBrb%2BFKFSI7dmfMmADYWabjwj%2FU0kClTDEnu0S1aB1vOVbdgnly6OkR&X-Amz-Signature=d7a898fc62efd1e81b297b5ae239328e13e0433f034cf21a5c8504817c7f96d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDR2ODW5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICbGGWPP0Lc3BSTvsa7CEn415M2HOCEgKjs%2Bs5AuflZSAiAhf%2Bh6iMc1ycd4R6Byr3ajyqDX6YuVIDATwy%2FA8DZK4yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMurJens8%2BnYlm2enNKtwD07BxldsDA98hQgmEiQnvMew0hgTK2Ht2lL9eSiRFO94W2vZ0fxTbm9BdxFhtc2EjN7%2BfMFpdWWvYuJteTWNy%2B%2BZW1WKLmt4LX2Bgyfij4CQaFSk%2Be2RXKPCfjAD0uv3a8xWC4A17s1F6zwAFtRA7TGtdi6xfqk6kcAf9dqs4spUHJQHLaZz%2BffPDwAQxS2vBbeeRlbcTTRNLGFOy4eWxnxMhptDsZILazVhgFQ%2BhK%2FR0OwS5izNvHx3M9ioDKuH4ekbEM7tnK7ULis6eaCYggPdqETxS00%2BM4PGM71uYaQzYm35qdH0tMfxwVa%2BU6EaMH3u%2BeVwqyb2q1cu5%2Bt3hO2hBL3v%2B7LJfLcDQLuodf4JMy%2FlZ5wX965LDtlVTKt0hq2Zik9y4pKx%2BknHXy9k652OG%2Fijb70UvsqehVwb%2F20F1%2B9vkGud2k2EqkeQFrjsgCuk94WGcq%2Bt5idsKiev0JJhqsHcLGNe%2FhywNXhgiAhTLalrndveDqU4wrUfMyQh1eofNuqFjtU0MAujkuUPBC%2Fw2VYGX9UEMgO56G0KXPUg2wUOQSqr8bokIpcUfUOvhns4jKriVu4vvdyu1iZqYeK01Ek7mBl8HLhgJYmAj%2FdMWHKK9SJg2p9hw4NkwmejdwwY6pgGElkoYuhafKmvu0%2FLyAK0YB3XBvfI1QDP16R4HGkaS9WLhmSiI4ItX%2B57yHmh60zUy7ldFBdG9vcDJ28bBTN4LLUmrjLIxWDvCwUbDqC%2BYQJDZ5VN9o2aaGDJ2SYXV7oTsYS0rabTjhgk%2B6B3aTrF3VlHFadbH%2FS2rtWrpazBrb%2BFKFSI7dmfMmADYWabjwj%2FU0kClTDEnu0S1aB1vOVbdgnly6OkR&X-Amz-Signature=65c8f89b25318697deb007f0a16f37d85c12281ce6bc2fdc983e45d2be1fc886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
