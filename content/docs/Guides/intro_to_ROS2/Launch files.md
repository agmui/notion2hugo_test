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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJV7XGBD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2By%2BND5JYks1geUcYwhs4QGckd0qcCrGrWUbOfwj7XXAiEAkAwrqMbh3GB6tVWEFFC%2FHpDik%2Bsr9T1VVbKKlEvbse4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKV5ZUu8GzyXBIP1uCrcA%2FfdExmttyMJZSNYPG%2B8c3ytxs%2Frez0LQzUbhlSjRGGLjY48X2wgsbu2jXm2Y4qPDbA4wHbkEX63QkVZBXrBoWogUoe5DQKV4V0v5fKGfLlYS8k0ApJNBzcoVcpAdrYT0oG%2FR9ffK23KNtf8G4wsFXb5gqqudxsEgMi339nTTq0OeP5yb2txWfyUCUkFaZedv5tEf8m%2BkAqEdG23gEmlsKLtqWKLox1GqDYZLU1cqUUrsTbqzYIRHVwCA4UlTuaXHHMjJp2Oa7EMd3%2FUt%2Bmo%2BTfP5YGx3F81OT%2F5vR80oRMPvlqYe4mGa5pyWTjZeW50VQvOR5%2Fs%2F8kscJM256cM4zNLeipBOdYIwgV1tL403wg%2FksnMjlEKSiJwrd91se1C7BM%2BiIB3%2Bdo2S3kFxseUg1F76tb17G25RFToXUZkv%2FEe017bkoSiLBXJLbdBRKdF5QFXFTDfIaxYxrK0Fxu0oHGdttXDvcdYKmBI45Dw5%2FzZMDYfS4bV8HyDAFK%2BYZ4OldMle1skBmjIGPwngyIff4wna%2F2%2FqsRxr0Zf3NHDhxsO9ko4T02cgZyrLkY0zd%2B6qV2wJeGEJxrJVBAiabI%2F4oEcrD8nTNfJX%2BSpA2Vxf9Cnx1BmFfEaPsVOBsWIMP6oh8AGOqUBG71vhnvkuPhffnW%2FIbX8oDDNMPNuyFtIWhKqqWMgG5QZvU6plJs2er5Abkqib5naCwgG%2FaPzerYU0DHPkrOwAKJguXs3IQUOi%2BW%2FBYkEnw19SWWnCySV4eBiI5EDoEhiYIc19ABUWW7MII%2BMgNJ0Y2aTO3D8IH%2BpQo0qboPvkPbjqlFA4tA2dq7H9vCf9seyn3dr6D3EUKvawdbAM2ji2lOsE32B&X-Amz-Signature=34f672848508a8e0ea7629ce49998e8a969566e4f4dffcdd1f7a66bcdcde5729&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJV7XGBD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2By%2BND5JYks1geUcYwhs4QGckd0qcCrGrWUbOfwj7XXAiEAkAwrqMbh3GB6tVWEFFC%2FHpDik%2Bsr9T1VVbKKlEvbse4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKV5ZUu8GzyXBIP1uCrcA%2FfdExmttyMJZSNYPG%2B8c3ytxs%2Frez0LQzUbhlSjRGGLjY48X2wgsbu2jXm2Y4qPDbA4wHbkEX63QkVZBXrBoWogUoe5DQKV4V0v5fKGfLlYS8k0ApJNBzcoVcpAdrYT0oG%2FR9ffK23KNtf8G4wsFXb5gqqudxsEgMi339nTTq0OeP5yb2txWfyUCUkFaZedv5tEf8m%2BkAqEdG23gEmlsKLtqWKLox1GqDYZLU1cqUUrsTbqzYIRHVwCA4UlTuaXHHMjJp2Oa7EMd3%2FUt%2Bmo%2BTfP5YGx3F81OT%2F5vR80oRMPvlqYe4mGa5pyWTjZeW50VQvOR5%2Fs%2F8kscJM256cM4zNLeipBOdYIwgV1tL403wg%2FksnMjlEKSiJwrd91se1C7BM%2BiIB3%2Bdo2S3kFxseUg1F76tb17G25RFToXUZkv%2FEe017bkoSiLBXJLbdBRKdF5QFXFTDfIaxYxrK0Fxu0oHGdttXDvcdYKmBI45Dw5%2FzZMDYfS4bV8HyDAFK%2BYZ4OldMle1skBmjIGPwngyIff4wna%2F2%2FqsRxr0Zf3NHDhxsO9ko4T02cgZyrLkY0zd%2B6qV2wJeGEJxrJVBAiabI%2F4oEcrD8nTNfJX%2BSpA2Vxf9Cnx1BmFfEaPsVOBsWIMP6oh8AGOqUBG71vhnvkuPhffnW%2FIbX8oDDNMPNuyFtIWhKqqWMgG5QZvU6plJs2er5Abkqib5naCwgG%2FaPzerYU0DHPkrOwAKJguXs3IQUOi%2BW%2FBYkEnw19SWWnCySV4eBiI5EDoEhiYIc19ABUWW7MII%2BMgNJ0Y2aTO3D8IH%2BpQo0qboPvkPbjqlFA4tA2dq7H9vCf9seyn3dr6D3EUKvawdbAM2ji2lOsE32B&X-Amz-Signature=02d9136c7a3d66a569e1d47b773faff95967eaa4249b25ec38e3eae13de09d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJV7XGBD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2By%2BND5JYks1geUcYwhs4QGckd0qcCrGrWUbOfwj7XXAiEAkAwrqMbh3GB6tVWEFFC%2FHpDik%2Bsr9T1VVbKKlEvbse4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKV5ZUu8GzyXBIP1uCrcA%2FfdExmttyMJZSNYPG%2B8c3ytxs%2Frez0LQzUbhlSjRGGLjY48X2wgsbu2jXm2Y4qPDbA4wHbkEX63QkVZBXrBoWogUoe5DQKV4V0v5fKGfLlYS8k0ApJNBzcoVcpAdrYT0oG%2FR9ffK23KNtf8G4wsFXb5gqqudxsEgMi339nTTq0OeP5yb2txWfyUCUkFaZedv5tEf8m%2BkAqEdG23gEmlsKLtqWKLox1GqDYZLU1cqUUrsTbqzYIRHVwCA4UlTuaXHHMjJp2Oa7EMd3%2FUt%2Bmo%2BTfP5YGx3F81OT%2F5vR80oRMPvlqYe4mGa5pyWTjZeW50VQvOR5%2Fs%2F8kscJM256cM4zNLeipBOdYIwgV1tL403wg%2FksnMjlEKSiJwrd91se1C7BM%2BiIB3%2Bdo2S3kFxseUg1F76tb17G25RFToXUZkv%2FEe017bkoSiLBXJLbdBRKdF5QFXFTDfIaxYxrK0Fxu0oHGdttXDvcdYKmBI45Dw5%2FzZMDYfS4bV8HyDAFK%2BYZ4OldMle1skBmjIGPwngyIff4wna%2F2%2FqsRxr0Zf3NHDhxsO9ko4T02cgZyrLkY0zd%2B6qV2wJeGEJxrJVBAiabI%2F4oEcrD8nTNfJX%2BSpA2Vxf9Cnx1BmFfEaPsVOBsWIMP6oh8AGOqUBG71vhnvkuPhffnW%2FIbX8oDDNMPNuyFtIWhKqqWMgG5QZvU6plJs2er5Abkqib5naCwgG%2FaPzerYU0DHPkrOwAKJguXs3IQUOi%2BW%2FBYkEnw19SWWnCySV4eBiI5EDoEhiYIc19ABUWW7MII%2BMgNJ0Y2aTO3D8IH%2BpQo0qboPvkPbjqlFA4tA2dq7H9vCf9seyn3dr6D3EUKvawdbAM2ji2lOsE32B&X-Amz-Signature=0d41a8f05a72e4a26f89e24bd683dcc151b5ac79bcbb8790083de9347907d195&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
