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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMKRU2R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BQYPJtqxzY7QJnxf%2Brd7Pzh2QOAvxZtv9%2FN%2FIPApagIgfHwIaM799If%2FI40ugVHQydE6JLCUOntfizm82DeptzsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcRgKDyZX69zIhswyrcA9i9HS6TpzSHxhlM2Rg4X8YlV51M4lo1l93n4AgLLfhGPw1lZlSCcF7X9Zm0%2F4qA3dmgHlR8MA0bOqaMyZ%2BynrXsJWVdo4t4i6H1kANJpMtpeLHBWtKveZcCKE3ilJHbSup566SO5DW9C7Bd5KL5pxJYSm3zfwKCCgzJ04lCyAyMwguD3AX3QN%2FPZuBsWOYNFvVrNkWv6Ha4nSROHszAndjA9YVS3kVIepLm1pOnWAlMZKaKQkq4DMNIOx2PReO3oqJlmpcAE7SoLGFd3Lcovr2r2jN3aLTYIU9X0hmVm0hWKFeq3fNHDf%2Bf%2FZ%2BA41eSinoh0QcuRvfkfnBMAv4lmqfclVBy%2FgzkSu4VyvfsJyL%2FeOnrHHQM4Onqzu1SRu5rUumVgib3%2BgjZtu9Slm2WWfB7yoUWEdsy1FCvBUkjS8FMqF3uiLz57zMypeGxl%2BEitdUWYnZUcRt7A0ILaNRsvUPMuiypkvTziUHDsgEKDNMK21zC4aM9ECaUc3XEqJclYaS2v5TTs4E4w0uevOd2hJ0XGBs%2F%2Feq8FQsv02GuNgnpXZC87ky%2FzED05sA97jVKx1l67kgUVLZ2dB7QuSYyI9%2FnaJsL9Tut117XlU%2F9VCQgX3xc6WS4EdDTuYUsMJOR6r0GOqUBKHwN0ShALy5W%2BkZYkEbDqF9oXtFBnj3in6359unfpoxeSHzH85IdUfvXwHhiCViY2Q2XsADJBSLWr2%2F2gwp5k5E6mfJeqvO9RTuc9wfE%2F85TuLXH8KDpQDpTNcxgJerfAnY1wGfem0cg4o%2F52TERe1%2FaWTXc55nFxqtLOsUAT82ao6BbUTWNiO4yInFYkgdZ80coavXIV0%2FgE7kEUAf10o7wzTiX&X-Amz-Signature=598b7ea19875146cb17d2d5a24858facdcadd9062a511aefbbf08125cdf67b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMKRU2R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BQYPJtqxzY7QJnxf%2Brd7Pzh2QOAvxZtv9%2FN%2FIPApagIgfHwIaM799If%2FI40ugVHQydE6JLCUOntfizm82DeptzsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcRgKDyZX69zIhswyrcA9i9HS6TpzSHxhlM2Rg4X8YlV51M4lo1l93n4AgLLfhGPw1lZlSCcF7X9Zm0%2F4qA3dmgHlR8MA0bOqaMyZ%2BynrXsJWVdo4t4i6H1kANJpMtpeLHBWtKveZcCKE3ilJHbSup566SO5DW9C7Bd5KL5pxJYSm3zfwKCCgzJ04lCyAyMwguD3AX3QN%2FPZuBsWOYNFvVrNkWv6Ha4nSROHszAndjA9YVS3kVIepLm1pOnWAlMZKaKQkq4DMNIOx2PReO3oqJlmpcAE7SoLGFd3Lcovr2r2jN3aLTYIU9X0hmVm0hWKFeq3fNHDf%2Bf%2FZ%2BA41eSinoh0QcuRvfkfnBMAv4lmqfclVBy%2FgzkSu4VyvfsJyL%2FeOnrHHQM4Onqzu1SRu5rUumVgib3%2BgjZtu9Slm2WWfB7yoUWEdsy1FCvBUkjS8FMqF3uiLz57zMypeGxl%2BEitdUWYnZUcRt7A0ILaNRsvUPMuiypkvTziUHDsgEKDNMK21zC4aM9ECaUc3XEqJclYaS2v5TTs4E4w0uevOd2hJ0XGBs%2F%2Feq8FQsv02GuNgnpXZC87ky%2FzED05sA97jVKx1l67kgUVLZ2dB7QuSYyI9%2FnaJsL9Tut117XlU%2F9VCQgX3xc6WS4EdDTuYUsMJOR6r0GOqUBKHwN0ShALy5W%2BkZYkEbDqF9oXtFBnj3in6359unfpoxeSHzH85IdUfvXwHhiCViY2Q2XsADJBSLWr2%2F2gwp5k5E6mfJeqvO9RTuc9wfE%2F85TuLXH8KDpQDpTNcxgJerfAnY1wGfem0cg4o%2F52TERe1%2FaWTXc55nFxqtLOsUAT82ao6BbUTWNiO4yInFYkgdZ80coavXIV0%2FgE7kEUAf10o7wzTiX&X-Amz-Signature=a2a0c655567ae89346ed2d25eec6dcef7f9a7aa8ce09fadf87777a4ca0d2fa06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMKRU2R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BQYPJtqxzY7QJnxf%2Brd7Pzh2QOAvxZtv9%2FN%2FIPApagIgfHwIaM799If%2FI40ugVHQydE6JLCUOntfizm82DeptzsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcRgKDyZX69zIhswyrcA9i9HS6TpzSHxhlM2Rg4X8YlV51M4lo1l93n4AgLLfhGPw1lZlSCcF7X9Zm0%2F4qA3dmgHlR8MA0bOqaMyZ%2BynrXsJWVdo4t4i6H1kANJpMtpeLHBWtKveZcCKE3ilJHbSup566SO5DW9C7Bd5KL5pxJYSm3zfwKCCgzJ04lCyAyMwguD3AX3QN%2FPZuBsWOYNFvVrNkWv6Ha4nSROHszAndjA9YVS3kVIepLm1pOnWAlMZKaKQkq4DMNIOx2PReO3oqJlmpcAE7SoLGFd3Lcovr2r2jN3aLTYIU9X0hmVm0hWKFeq3fNHDf%2Bf%2FZ%2BA41eSinoh0QcuRvfkfnBMAv4lmqfclVBy%2FgzkSu4VyvfsJyL%2FeOnrHHQM4Onqzu1SRu5rUumVgib3%2BgjZtu9Slm2WWfB7yoUWEdsy1FCvBUkjS8FMqF3uiLz57zMypeGxl%2BEitdUWYnZUcRt7A0ILaNRsvUPMuiypkvTziUHDsgEKDNMK21zC4aM9ECaUc3XEqJclYaS2v5TTs4E4w0uevOd2hJ0XGBs%2F%2Feq8FQsv02GuNgnpXZC87ky%2FzED05sA97jVKx1l67kgUVLZ2dB7QuSYyI9%2FnaJsL9Tut117XlU%2F9VCQgX3xc6WS4EdDTuYUsMJOR6r0GOqUBKHwN0ShALy5W%2BkZYkEbDqF9oXtFBnj3in6359unfpoxeSHzH85IdUfvXwHhiCViY2Q2XsADJBSLWr2%2F2gwp5k5E6mfJeqvO9RTuc9wfE%2F85TuLXH8KDpQDpTNcxgJerfAnY1wGfem0cg4o%2F52TERe1%2FaWTXc55nFxqtLOsUAT82ao6BbUTWNiO4yInFYkgdZ80coavXIV0%2FgE7kEUAf10o7wzTiX&X-Amz-Signature=1c88e0e4d362bffaa298b3eb92d64a57dd6fbdb6ec383bffa13aab179d680189&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
