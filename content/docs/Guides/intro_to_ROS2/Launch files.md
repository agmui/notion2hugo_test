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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXATGGK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2LoWk4C3PbNAMfwWJtsjxDa7jLFxtS2D7WJ2EJ%2BIPZgIhALGA3%2B8VRB9A5lmj2Nkb4SnIesOq2gVdiKmJnxqZvB2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIIA4ZYf0rCRLDmusq3ANVYtjm0CbPmlS%2B2yf5U%2BF4tUjVKXVtEjjzAPZGMVuBtFkJCMATdmki2Wauz5TbXhqJI5UbsPDpPs76e0NPyd3ffBGeGMhxdn%2FEPqk8mm85TmumVcEyKV3iVPOmwyqMRi9%2B4Z72H8CBxMxyq7FaCPAf1f4aL7Qr7CZhUK6sP2J3VKFbsos4Wv7OQ00gJt68XzZizxSNwTI7iYfRhJmnhKgXDJvkNwng3XyeF9e5cEtIG3syBT76HyXCvRLw2O%2FrvMW%2FIZJxZ2kCL%2FBCdfqhV0kPFLSEEu8e3SWNEbSlgFW4qofyArE0tEol4srJNmR2CwJKSMvJH8VNAck4OKRj%2F0P5nkzIhqM9jfZNWg64HiCdGYcTYUYkB%2FYBPGJQnY8DWwCGRLYqF9iG18MmgiOfPLOLuq0uE7Mn5o9ueL1P%2Fy%2BSmnbIVK5UNkAzrwdfeWDxQmfYL5Y66I2upFBFAw9cJsqTFtOZnI7LJP6uK%2BVQ0Uta7PKKuAZc6NQQSUQf6LVKwKTDbVDAiVxlJmKVo8YaoYEs7eDErIspLtHJTuZyiWgBf9nMFOJbJbLMf76SCE952JtH7nDZoA66yRFmlRRG8icT%2Bnp4EuoVMuj2Y9pvWUfmYJoKazLcu5gq%2FXTYuTCyjLjABjqkAULeGoH0ol0Wf56Q%2Fo6NRNZYbjAlaRxUSkoN1pvttNgihjCjmPRIFJHIHjighpFy7dxPSQtzqRUPjErWOTqPIX3iGTiRhf6gtj3Y%2FLBYewpeGzCAZZBBgURVt2aK1Rpv4xBrg8K0lGsGHC9Ff6Z%2FMVE9IpY7Fb0i3%2FHOTRA%2Fyiq1NN73dx%2FBXCA7ERDC%2BLRKHVi0lZlGSpxlEiTAF1imggGXkycO&X-Amz-Signature=8dffe226fe9d44447e0e5a86ea733d7fd30e9a87d64c08a8c987f90b00162eff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXATGGK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2LoWk4C3PbNAMfwWJtsjxDa7jLFxtS2D7WJ2EJ%2BIPZgIhALGA3%2B8VRB9A5lmj2Nkb4SnIesOq2gVdiKmJnxqZvB2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIIA4ZYf0rCRLDmusq3ANVYtjm0CbPmlS%2B2yf5U%2BF4tUjVKXVtEjjzAPZGMVuBtFkJCMATdmki2Wauz5TbXhqJI5UbsPDpPs76e0NPyd3ffBGeGMhxdn%2FEPqk8mm85TmumVcEyKV3iVPOmwyqMRi9%2B4Z72H8CBxMxyq7FaCPAf1f4aL7Qr7CZhUK6sP2J3VKFbsos4Wv7OQ00gJt68XzZizxSNwTI7iYfRhJmnhKgXDJvkNwng3XyeF9e5cEtIG3syBT76HyXCvRLw2O%2FrvMW%2FIZJxZ2kCL%2FBCdfqhV0kPFLSEEu8e3SWNEbSlgFW4qofyArE0tEol4srJNmR2CwJKSMvJH8VNAck4OKRj%2F0P5nkzIhqM9jfZNWg64HiCdGYcTYUYkB%2FYBPGJQnY8DWwCGRLYqF9iG18MmgiOfPLOLuq0uE7Mn5o9ueL1P%2Fy%2BSmnbIVK5UNkAzrwdfeWDxQmfYL5Y66I2upFBFAw9cJsqTFtOZnI7LJP6uK%2BVQ0Uta7PKKuAZc6NQQSUQf6LVKwKTDbVDAiVxlJmKVo8YaoYEs7eDErIspLtHJTuZyiWgBf9nMFOJbJbLMf76SCE952JtH7nDZoA66yRFmlRRG8icT%2Bnp4EuoVMuj2Y9pvWUfmYJoKazLcu5gq%2FXTYuTCyjLjABjqkAULeGoH0ol0Wf56Q%2Fo6NRNZYbjAlaRxUSkoN1pvttNgihjCjmPRIFJHIHjighpFy7dxPSQtzqRUPjErWOTqPIX3iGTiRhf6gtj3Y%2FLBYewpeGzCAZZBBgURVt2aK1Rpv4xBrg8K0lGsGHC9Ff6Z%2FMVE9IpY7Fb0i3%2FHOTRA%2Fyiq1NN73dx%2FBXCA7ERDC%2BLRKHVi0lZlGSpxlEiTAF1imggGXkycO&X-Amz-Signature=f1df706cda59eb27db341439dc4e1cc03456d9c4fc9c5b8c8689f8826e9e86e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXATGGK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2LoWk4C3PbNAMfwWJtsjxDa7jLFxtS2D7WJ2EJ%2BIPZgIhALGA3%2B8VRB9A5lmj2Nkb4SnIesOq2gVdiKmJnxqZvB2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIIA4ZYf0rCRLDmusq3ANVYtjm0CbPmlS%2B2yf5U%2BF4tUjVKXVtEjjzAPZGMVuBtFkJCMATdmki2Wauz5TbXhqJI5UbsPDpPs76e0NPyd3ffBGeGMhxdn%2FEPqk8mm85TmumVcEyKV3iVPOmwyqMRi9%2B4Z72H8CBxMxyq7FaCPAf1f4aL7Qr7CZhUK6sP2J3VKFbsos4Wv7OQ00gJt68XzZizxSNwTI7iYfRhJmnhKgXDJvkNwng3XyeF9e5cEtIG3syBT76HyXCvRLw2O%2FrvMW%2FIZJxZ2kCL%2FBCdfqhV0kPFLSEEu8e3SWNEbSlgFW4qofyArE0tEol4srJNmR2CwJKSMvJH8VNAck4OKRj%2F0P5nkzIhqM9jfZNWg64HiCdGYcTYUYkB%2FYBPGJQnY8DWwCGRLYqF9iG18MmgiOfPLOLuq0uE7Mn5o9ueL1P%2Fy%2BSmnbIVK5UNkAzrwdfeWDxQmfYL5Y66I2upFBFAw9cJsqTFtOZnI7LJP6uK%2BVQ0Uta7PKKuAZc6NQQSUQf6LVKwKTDbVDAiVxlJmKVo8YaoYEs7eDErIspLtHJTuZyiWgBf9nMFOJbJbLMf76SCE952JtH7nDZoA66yRFmlRRG8icT%2Bnp4EuoVMuj2Y9pvWUfmYJoKazLcu5gq%2FXTYuTCyjLjABjqkAULeGoH0ol0Wf56Q%2Fo6NRNZYbjAlaRxUSkoN1pvttNgihjCjmPRIFJHIHjighpFy7dxPSQtzqRUPjErWOTqPIX3iGTiRhf6gtj3Y%2FLBYewpeGzCAZZBBgURVt2aK1Rpv4xBrg8K0lGsGHC9Ff6Z%2FMVE9IpY7Fb0i3%2FHOTRA%2Fyiq1NN73dx%2FBXCA7ERDC%2BLRKHVi0lZlGSpxlEiTAF1imggGXkycO&X-Amz-Signature=38e6a7a03141a6e4dcb7fe59ae697ff6a9aa854962299098f819b9554ed113aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
