---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHDZRIN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGZOQqc2pW2dI%2FU6HYGf%2FjPVm5FAhdCRoTh%2Fn06RmDwkAiB9o00tAj7V8VzMg0TkH42PJJO9wFyMxP1Yydsdu%2BkTwiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyenyzGytr%2BkoVnQKKtwDaVMnEeNqn4qJnHOHsobPgwDTw3VNXjpe9vfn68RZ0JhRO0bI2C1WbDGnt4LSecqqumgIf52dFQV1rPcOWN3o%2Ffi0uqVuV6RBtnDd3xpRrLMBt%2BQ1qKFdhY1het%2BW2WZNcS5ZI0KXo%2B8gMG8jp8U6KdCkIIP6O0CYKJIt3gaj7JjjMipJHewKkLQhepnSLF%2B4GZ3AEwF0qA6t7B%2BHBfWBeLGSr1fo0R%2FuXpzvkX4vWWuRrIdrmlgN57YSeRshLhk54pzWt06CHrkmdfD%2Bd72564LAOATtFc%2Flh1EIs45n3V9AiWtxtopQsfMy%2BwgzLjdPbGy%2FkGSe51y1ULUxs1DPWhnEXigeUwapuz%2F09h2bUX8wl3C1Cp79toT4dpxDdtpucRRweWVpAeoOheaoxgauKzNcqKitVMXgsqhuvTw2bgXOv0QzSZ33LDGnEFHhrAR5PBcfrdOi77%2FOL%2FftZYrs6byqpH8OecF8Xlm40pFYGSGsy4dz3HuaiUa9ZIIk1EndWVgU5gXpp718WxwUR3V8ehib5xMwNkM53hJrV2chGD2IeNjjsu8GMx8W%2BLopoFY2LV%2BRJvjf8nSp0aVWuY8iutxTLN5ALFCxm9LW3P5yTbogHKUDkkNJCnUGQGUwqZmjxAY6pgFCxy9HJ4Tl4a8nqX9KTrnITgzT7rPVi9XWmxpDJZssaR1ojpqeAEXYetixEYSgA3alBMHP%2BHQy2Sk4NVEYl4DGpSbDbBLNIGYcmFj8z2Qyzm3biNiuRZmxl2B6G%2FbmERe3neDR8v%2FJhu%2BN3Fk9reKPFQIvZjDJ5hxZ3xHK5u7WyvDjG9bIYYzjgKsozCA%2B9292hSFJOYCCECAwLfmo6h9rMjKXnOgo&X-Amz-Signature=ae9958d354f36e30087d8f2badc914901c830b7ae28923ee7ab1e3b9f71a86cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHDZRIN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGZOQqc2pW2dI%2FU6HYGf%2FjPVm5FAhdCRoTh%2Fn06RmDwkAiB9o00tAj7V8VzMg0TkH42PJJO9wFyMxP1Yydsdu%2BkTwiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyenyzGytr%2BkoVnQKKtwDaVMnEeNqn4qJnHOHsobPgwDTw3VNXjpe9vfn68RZ0JhRO0bI2C1WbDGnt4LSecqqumgIf52dFQV1rPcOWN3o%2Ffi0uqVuV6RBtnDd3xpRrLMBt%2BQ1qKFdhY1het%2BW2WZNcS5ZI0KXo%2B8gMG8jp8U6KdCkIIP6O0CYKJIt3gaj7JjjMipJHewKkLQhepnSLF%2B4GZ3AEwF0qA6t7B%2BHBfWBeLGSr1fo0R%2FuXpzvkX4vWWuRrIdrmlgN57YSeRshLhk54pzWt06CHrkmdfD%2Bd72564LAOATtFc%2Flh1EIs45n3V9AiWtxtopQsfMy%2BwgzLjdPbGy%2FkGSe51y1ULUxs1DPWhnEXigeUwapuz%2F09h2bUX8wl3C1Cp79toT4dpxDdtpucRRweWVpAeoOheaoxgauKzNcqKitVMXgsqhuvTw2bgXOv0QzSZ33LDGnEFHhrAR5PBcfrdOi77%2FOL%2FftZYrs6byqpH8OecF8Xlm40pFYGSGsy4dz3HuaiUa9ZIIk1EndWVgU5gXpp718WxwUR3V8ehib5xMwNkM53hJrV2chGD2IeNjjsu8GMx8W%2BLopoFY2LV%2BRJvjf8nSp0aVWuY8iutxTLN5ALFCxm9LW3P5yTbogHKUDkkNJCnUGQGUwqZmjxAY6pgFCxy9HJ4Tl4a8nqX9KTrnITgzT7rPVi9XWmxpDJZssaR1ojpqeAEXYetixEYSgA3alBMHP%2BHQy2Sk4NVEYl4DGpSbDbBLNIGYcmFj8z2Qyzm3biNiuRZmxl2B6G%2FbmERe3neDR8v%2FJhu%2BN3Fk9reKPFQIvZjDJ5hxZ3xHK5u7WyvDjG9bIYYzjgKsozCA%2B9292hSFJOYCCECAwLfmo6h9rMjKXnOgo&X-Amz-Signature=80c8308889e0cc1caeff3d6ce30f330494007bb95425849a249e75a1634c4a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHDZRIN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGZOQqc2pW2dI%2FU6HYGf%2FjPVm5FAhdCRoTh%2Fn06RmDwkAiB9o00tAj7V8VzMg0TkH42PJJO9wFyMxP1Yydsdu%2BkTwiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyenyzGytr%2BkoVnQKKtwDaVMnEeNqn4qJnHOHsobPgwDTw3VNXjpe9vfn68RZ0JhRO0bI2C1WbDGnt4LSecqqumgIf52dFQV1rPcOWN3o%2Ffi0uqVuV6RBtnDd3xpRrLMBt%2BQ1qKFdhY1het%2BW2WZNcS5ZI0KXo%2B8gMG8jp8U6KdCkIIP6O0CYKJIt3gaj7JjjMipJHewKkLQhepnSLF%2B4GZ3AEwF0qA6t7B%2BHBfWBeLGSr1fo0R%2FuXpzvkX4vWWuRrIdrmlgN57YSeRshLhk54pzWt06CHrkmdfD%2Bd72564LAOATtFc%2Flh1EIs45n3V9AiWtxtopQsfMy%2BwgzLjdPbGy%2FkGSe51y1ULUxs1DPWhnEXigeUwapuz%2F09h2bUX8wl3C1Cp79toT4dpxDdtpucRRweWVpAeoOheaoxgauKzNcqKitVMXgsqhuvTw2bgXOv0QzSZ33LDGnEFHhrAR5PBcfrdOi77%2FOL%2FftZYrs6byqpH8OecF8Xlm40pFYGSGsy4dz3HuaiUa9ZIIk1EndWVgU5gXpp718WxwUR3V8ehib5xMwNkM53hJrV2chGD2IeNjjsu8GMx8W%2BLopoFY2LV%2BRJvjf8nSp0aVWuY8iutxTLN5ALFCxm9LW3P5yTbogHKUDkkNJCnUGQGUwqZmjxAY6pgFCxy9HJ4Tl4a8nqX9KTrnITgzT7rPVi9XWmxpDJZssaR1ojpqeAEXYetixEYSgA3alBMHP%2BHQy2Sk4NVEYl4DGpSbDbBLNIGYcmFj8z2Qyzm3biNiuRZmxl2B6G%2FbmERe3neDR8v%2FJhu%2BN3Fk9reKPFQIvZjDJ5hxZ3xHK5u7WyvDjG9bIYYzjgKsozCA%2B9292hSFJOYCCECAwLfmo6h9rMjKXnOgo&X-Amz-Signature=791f99f0c6a91f92fbb60a34ecbd4b6d87a28472fe6761b08ce7eb8a4e88ca8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
