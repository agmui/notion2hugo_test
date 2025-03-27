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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEIOET6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCejp9wFHNnvrfcX3CZuMzGOVxt213sp9mgrH%2Bo3sLDTQIhAPCyIIYRj7wKm%2F9c%2Bf%2BHqla0gfZtXP7i%2FZgJn03U9ZPcKv8DCDgQABoMNjM3NDIzMTgzODA1IgwoKkPrMTVysQsA0Osq3ANW1RvJsMdOkBOEoIxP0%2B36wNasXkJHZSmL2BfYKKCrMye3Wp4vegPaG9ay4onryrUqdkAEYJ%2FYXQLpdCxBCgZPQxZAK7tjSknADk3Bhnh%2B7sAAs1F1Vx%2BzgnCA88TdF9fi5qj9QKtBhX4jzf5I7n34GzzQPhpWygMirUAb2o1jo4sgZhtPothsL0rH8lAJ55M8n6BHAIgK9djlbHzuzRr6eCU5sklpp24oD13Nz85XnHIyAiQ7u2Fgrnz8YDD4fFkWwMNLc50QQeGb2TeOrJd6aF4MODutDzNhbfKjkvtQc%2B0vw0VZrYKl902w4nkNlZl2BRuUTgIuVCamOfohMdRpvAdKgZI14c5a%2Fu42XMwGQhO6z6XQTTmPEmeoq8CSDqKth3jjUZ7ORMdg787BL1S%2BB6ayvo5ttxtWt%2ByIgv4qeGJGF2D8G6PxQ2cplWOC7bEdDXIVBKJiC19csPLgWSNgQYOCGo1zTMkF5shofcUz7ySFi4vnlFcSj%2Fmc5hHVaMQiH7gsOQH5mxIXPUeOu%2FDmZS2mCGzjYPfYMhFFN6j0tU3gjiftEMCsLo73RLb4VptiQbUyWmBipoQk9ZdpspIVFbXKxhIJGulWlvO5GIf4xfT36NFfA%2BPG7KoaFzCLjpK%2FBjqkAeKOe1NFZKNmkbVi033FIyQREnhrxY3eE0GLPEcnhlbJWFm2xGfSJjn804nFBmcPPfFeOutluLWbcYMpACPHEaDh3wVI%2Fv4URsR%2FpbKpX8j1huGdTJ6FlRAGgxDSyQoe4b5xr94MFbt%2B3mDSFpygNoPwtVwT6JLHARmXYFTFssUoTLC22G%2FsZqGNhdfV833NeUWbdScAzIByExd4taGTw433F%2BIA&X-Amz-Signature=c6ec482e539113842cbd26cda6055e234e7dc53b8b725645e80fc490c363f407&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEIOET6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCejp9wFHNnvrfcX3CZuMzGOVxt213sp9mgrH%2Bo3sLDTQIhAPCyIIYRj7wKm%2F9c%2Bf%2BHqla0gfZtXP7i%2FZgJn03U9ZPcKv8DCDgQABoMNjM3NDIzMTgzODA1IgwoKkPrMTVysQsA0Osq3ANW1RvJsMdOkBOEoIxP0%2B36wNasXkJHZSmL2BfYKKCrMye3Wp4vegPaG9ay4onryrUqdkAEYJ%2FYXQLpdCxBCgZPQxZAK7tjSknADk3Bhnh%2B7sAAs1F1Vx%2BzgnCA88TdF9fi5qj9QKtBhX4jzf5I7n34GzzQPhpWygMirUAb2o1jo4sgZhtPothsL0rH8lAJ55M8n6BHAIgK9djlbHzuzRr6eCU5sklpp24oD13Nz85XnHIyAiQ7u2Fgrnz8YDD4fFkWwMNLc50QQeGb2TeOrJd6aF4MODutDzNhbfKjkvtQc%2B0vw0VZrYKl902w4nkNlZl2BRuUTgIuVCamOfohMdRpvAdKgZI14c5a%2Fu42XMwGQhO6z6XQTTmPEmeoq8CSDqKth3jjUZ7ORMdg787BL1S%2BB6ayvo5ttxtWt%2ByIgv4qeGJGF2D8G6PxQ2cplWOC7bEdDXIVBKJiC19csPLgWSNgQYOCGo1zTMkF5shofcUz7ySFi4vnlFcSj%2Fmc5hHVaMQiH7gsOQH5mxIXPUeOu%2FDmZS2mCGzjYPfYMhFFN6j0tU3gjiftEMCsLo73RLb4VptiQbUyWmBipoQk9ZdpspIVFbXKxhIJGulWlvO5GIf4xfT36NFfA%2BPG7KoaFzCLjpK%2FBjqkAeKOe1NFZKNmkbVi033FIyQREnhrxY3eE0GLPEcnhlbJWFm2xGfSJjn804nFBmcPPfFeOutluLWbcYMpACPHEaDh3wVI%2Fv4URsR%2FpbKpX8j1huGdTJ6FlRAGgxDSyQoe4b5xr94MFbt%2B3mDSFpygNoPwtVwT6JLHARmXYFTFssUoTLC22G%2FsZqGNhdfV833NeUWbdScAzIByExd4taGTw433F%2BIA&X-Amz-Signature=cfaee4c3e504a60f9697fabe3f4bfe4877213e8b6f6c9acfdfcc2d563a6122f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEIOET6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCejp9wFHNnvrfcX3CZuMzGOVxt213sp9mgrH%2Bo3sLDTQIhAPCyIIYRj7wKm%2F9c%2Bf%2BHqla0gfZtXP7i%2FZgJn03U9ZPcKv8DCDgQABoMNjM3NDIzMTgzODA1IgwoKkPrMTVysQsA0Osq3ANW1RvJsMdOkBOEoIxP0%2B36wNasXkJHZSmL2BfYKKCrMye3Wp4vegPaG9ay4onryrUqdkAEYJ%2FYXQLpdCxBCgZPQxZAK7tjSknADk3Bhnh%2B7sAAs1F1Vx%2BzgnCA88TdF9fi5qj9QKtBhX4jzf5I7n34GzzQPhpWygMirUAb2o1jo4sgZhtPothsL0rH8lAJ55M8n6BHAIgK9djlbHzuzRr6eCU5sklpp24oD13Nz85XnHIyAiQ7u2Fgrnz8YDD4fFkWwMNLc50QQeGb2TeOrJd6aF4MODutDzNhbfKjkvtQc%2B0vw0VZrYKl902w4nkNlZl2BRuUTgIuVCamOfohMdRpvAdKgZI14c5a%2Fu42XMwGQhO6z6XQTTmPEmeoq8CSDqKth3jjUZ7ORMdg787BL1S%2BB6ayvo5ttxtWt%2ByIgv4qeGJGF2D8G6PxQ2cplWOC7bEdDXIVBKJiC19csPLgWSNgQYOCGo1zTMkF5shofcUz7ySFi4vnlFcSj%2Fmc5hHVaMQiH7gsOQH5mxIXPUeOu%2FDmZS2mCGzjYPfYMhFFN6j0tU3gjiftEMCsLo73RLb4VptiQbUyWmBipoQk9ZdpspIVFbXKxhIJGulWlvO5GIf4xfT36NFfA%2BPG7KoaFzCLjpK%2FBjqkAeKOe1NFZKNmkbVi033FIyQREnhrxY3eE0GLPEcnhlbJWFm2xGfSJjn804nFBmcPPfFeOutluLWbcYMpACPHEaDh3wVI%2Fv4URsR%2FpbKpX8j1huGdTJ6FlRAGgxDSyQoe4b5xr94MFbt%2B3mDSFpygNoPwtVwT6JLHARmXYFTFssUoTLC22G%2FsZqGNhdfV833NeUWbdScAzIByExd4taGTw433F%2BIA&X-Amz-Signature=d65d5b859d53a143b423e92880fe1f3016266ca03f239d26f9f693b16977ad1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
