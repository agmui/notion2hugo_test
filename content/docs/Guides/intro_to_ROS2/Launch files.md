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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG747OEM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkrbEBkG3sWSTFv92n2rXMiQFsWlc%2FwaiVjokXkArzfwIhAIXCbZa%2FdNW9k9m2a1XEO9ps0jr6f3eda%2BNTOVDVB1qtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeMwpBFLPMwV%2FOQaIq3APFulochmpcUgb5xuh1Ax5Wj7W47dTSpx37OOs4yClfeQVSAR6ydumwagkFrtN1q0XIyoYZv8OGEB%2FRDlCC6VThjHCL0bo21sYX0dp%2B9MYchHOMS6vNTCo1dWZNYyMPBsJ2hA8wy1IL76pJV7l9kwETdsggfZfd7LNRaSVF1EAhaB%2Bw%2FU%2FVycyT55U1CV0hRPw%2BH2zq0vswWkP5E%2BiA6y%2Brch0u%2BN3gO8%2FSwaTkNFr2cBqvB1epNOfp9bKDWRx%2B8DKzxbEiPlqyncdqU4vpRckLad6Ov%2FNjWagXW5ZX17y9Ffvwak7TkZSkWbCgaL9HVj23pSzLS10qE7mRYQsSKoKXghmllo%2BadohLuWUeskaqpuWJBoGcZMIynZgagr1d7oeZVbB0wxwoV%2BhoGtBWy4cMbxv7ueYxtCjbBHD%2FYtDo4FPud0CEWFbVO3qHdLEOgb9JDEv5A%2BREgRcNPe2TMibJWQxtq19oXQpg12vzj4Dp4%2F8igbnixU%2BVlZXtn0JczLiiZEb8oWg6oAGtnVEt2WbZJJskQHWAwtTw4F2DvSBj5zJi0UkaUH0mM53APH4kmbM9vYBl3UoG2Ue%2F79Vsea6ioUhB2wvl%2F9%2Blh5Q5JHpi%2FL1xgljn45RXuebReTDHtejJBjqkAU3oDI6zZo%2BTjYGvCwepZ7erYLgGfEwgTIFiCVAkHjF6Mg54F%2FC0%2FWG2ojB0MFJm18OblqMgfACJGdzd5BnfMZuIH%2FR9NVx5WgxtAymGACtFcd9hAGVYhXyZs6%2BUzvkWj4kKs7vrAqCs%2FlkOypJI0fcH%2F8SY3Mx1nVpREhS5x5NvNVBuuJMlwgVYnFJTqkKmXTit0eKgqn21uAQy5MAgP9NLG2Y2&X-Amz-Signature=d0abf0ca643e9d3f4966e18c4d7d3a39c9d43d06ab87b7874cc3e64cf1061360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG747OEM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkrbEBkG3sWSTFv92n2rXMiQFsWlc%2FwaiVjokXkArzfwIhAIXCbZa%2FdNW9k9m2a1XEO9ps0jr6f3eda%2BNTOVDVB1qtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeMwpBFLPMwV%2FOQaIq3APFulochmpcUgb5xuh1Ax5Wj7W47dTSpx37OOs4yClfeQVSAR6ydumwagkFrtN1q0XIyoYZv8OGEB%2FRDlCC6VThjHCL0bo21sYX0dp%2B9MYchHOMS6vNTCo1dWZNYyMPBsJ2hA8wy1IL76pJV7l9kwETdsggfZfd7LNRaSVF1EAhaB%2Bw%2FU%2FVycyT55U1CV0hRPw%2BH2zq0vswWkP5E%2BiA6y%2Brch0u%2BN3gO8%2FSwaTkNFr2cBqvB1epNOfp9bKDWRx%2B8DKzxbEiPlqyncdqU4vpRckLad6Ov%2FNjWagXW5ZX17y9Ffvwak7TkZSkWbCgaL9HVj23pSzLS10qE7mRYQsSKoKXghmllo%2BadohLuWUeskaqpuWJBoGcZMIynZgagr1d7oeZVbB0wxwoV%2BhoGtBWy4cMbxv7ueYxtCjbBHD%2FYtDo4FPud0CEWFbVO3qHdLEOgb9JDEv5A%2BREgRcNPe2TMibJWQxtq19oXQpg12vzj4Dp4%2F8igbnixU%2BVlZXtn0JczLiiZEb8oWg6oAGtnVEt2WbZJJskQHWAwtTw4F2DvSBj5zJi0UkaUH0mM53APH4kmbM9vYBl3UoG2Ue%2F79Vsea6ioUhB2wvl%2F9%2Blh5Q5JHpi%2FL1xgljn45RXuebReTDHtejJBjqkAU3oDI6zZo%2BTjYGvCwepZ7erYLgGfEwgTIFiCVAkHjF6Mg54F%2FC0%2FWG2ojB0MFJm18OblqMgfACJGdzd5BnfMZuIH%2FR9NVx5WgxtAymGACtFcd9hAGVYhXyZs6%2BUzvkWj4kKs7vrAqCs%2FlkOypJI0fcH%2F8SY3Mx1nVpREhS5x5NvNVBuuJMlwgVYnFJTqkKmXTit0eKgqn21uAQy5MAgP9NLG2Y2&X-Amz-Signature=81905fadaa2ecbdf6693422c2e6dc7a8da12cc5946fdcd8ff54005b3273cdcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG747OEM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkrbEBkG3sWSTFv92n2rXMiQFsWlc%2FwaiVjokXkArzfwIhAIXCbZa%2FdNW9k9m2a1XEO9ps0jr6f3eda%2BNTOVDVB1qtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeMwpBFLPMwV%2FOQaIq3APFulochmpcUgb5xuh1Ax5Wj7W47dTSpx37OOs4yClfeQVSAR6ydumwagkFrtN1q0XIyoYZv8OGEB%2FRDlCC6VThjHCL0bo21sYX0dp%2B9MYchHOMS6vNTCo1dWZNYyMPBsJ2hA8wy1IL76pJV7l9kwETdsggfZfd7LNRaSVF1EAhaB%2Bw%2FU%2FVycyT55U1CV0hRPw%2BH2zq0vswWkP5E%2BiA6y%2Brch0u%2BN3gO8%2FSwaTkNFr2cBqvB1epNOfp9bKDWRx%2B8DKzxbEiPlqyncdqU4vpRckLad6Ov%2FNjWagXW5ZX17y9Ffvwak7TkZSkWbCgaL9HVj23pSzLS10qE7mRYQsSKoKXghmllo%2BadohLuWUeskaqpuWJBoGcZMIynZgagr1d7oeZVbB0wxwoV%2BhoGtBWy4cMbxv7ueYxtCjbBHD%2FYtDo4FPud0CEWFbVO3qHdLEOgb9JDEv5A%2BREgRcNPe2TMibJWQxtq19oXQpg12vzj4Dp4%2F8igbnixU%2BVlZXtn0JczLiiZEb8oWg6oAGtnVEt2WbZJJskQHWAwtTw4F2DvSBj5zJi0UkaUH0mM53APH4kmbM9vYBl3UoG2Ue%2F79Vsea6ioUhB2wvl%2F9%2Blh5Q5JHpi%2FL1xgljn45RXuebReTDHtejJBjqkAU3oDI6zZo%2BTjYGvCwepZ7erYLgGfEwgTIFiCVAkHjF6Mg54F%2FC0%2FWG2ojB0MFJm18OblqMgfACJGdzd5BnfMZuIH%2FR9NVx5WgxtAymGACtFcd9hAGVYhXyZs6%2BUzvkWj4kKs7vrAqCs%2FlkOypJI0fcH%2F8SY3Mx1nVpREhS5x5NvNVBuuJMlwgVYnFJTqkKmXTit0eKgqn21uAQy5MAgP9NLG2Y2&X-Amz-Signature=cb2ece7d29cf34f24548e96b725312c118cefe3a84ff3ce53acc20a99fbe13c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
