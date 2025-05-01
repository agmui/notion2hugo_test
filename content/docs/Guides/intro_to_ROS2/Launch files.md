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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Z3533L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIB1dy2FfO6e0Nf4bXpPIGh34fzlgVFNvLaL8rpHQM7dVAiEAnYKfR%2BZojlGwqKRF%2Fk7L2Yi8%2BfrGS8%2BprT%2FXDUJLCA8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoKkb%2BWgVnu7sqDvSrcAzS71e705YRkT6bwT2BV8ESKRhPHVtaEMSi1xNBdpVXah36jxsDo5v1hRo9El6x8rjAJXw9lBD3pc7sN9O7r%2F6O96q8U9jA4KzHhLrIR0a%2FLKShPtVU3UE8aORFxZUW25aNmFytDje7HL984s2BrqMvTbdGdlP9n%2B4SRL9%2BVua8apQDJBmvvTc5w2e3JnUGfV8JSYB94a9lZgykoWU3o2ysWRsfECVKQipw0wd2Su5JcKITN7R4PY6eylRRKq%2BiOmS1GXFaCWe3tF%2By9hw2I1uuVlHLnGxKyl%2FkptvJmt%2B7cPUFvjkcHf8%2FOp5djLcKPVKe8klSTaqj1BrXAEgN8vvHIebFEop%2F48i1Sg4mbkUcVVHT9%2BTb8Lxyb3H33kTRYXOk6fbdTGyL44izT0YooKMpbCsSTpWAAFxnJ9L2aGBP22Ro%2B2iPuyhQhvdcl%2BwrO0tTfkbDGN4L8iqwQPyIVz3zYA5Gj272sMGkPqalN8UnrQzW5UjN5e4VSJ5LeVn2qzjHq%2B8PvTZf1D%2Bpypg9GkiaQIL3K%2FTyuWKyMYkbWhf2jFF3g8tTsnejbjm3PrRQxcJAr1lrKxHoMqxzrZg%2Booxc0I7LyUCzLxa6%2BSG99t0Zy%2FI2Q%2FAJ%2F9Jr6bEy1MNmUzMAGOqUBewywyJrmQc2WQ8JkIRlZz%2B6rbnJvd%2BhqrhnoHYebhub0NUaC0I8rM814NeBY5%2BesVEyS6vTPbx48Jis3gFnaj994YIUwR3b9Wbq52m7LOVMfEpaELWWmaclhVAP26Sv1zWvoPBIXnoP1QZ9H9g3TgmkLI%2FRpbGXhbk2CX%2BRjbswN0JjL4Ikdy31UL2jA%2Bgg983xU5NI4rg3vdHjYCzOe%2FH16J6io&X-Amz-Signature=b34009657f15c9606195a2bf4fa53b006f1b28fdd95c7f608a74f3f248afeec1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Z3533L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIB1dy2FfO6e0Nf4bXpPIGh34fzlgVFNvLaL8rpHQM7dVAiEAnYKfR%2BZojlGwqKRF%2Fk7L2Yi8%2BfrGS8%2BprT%2FXDUJLCA8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoKkb%2BWgVnu7sqDvSrcAzS71e705YRkT6bwT2BV8ESKRhPHVtaEMSi1xNBdpVXah36jxsDo5v1hRo9El6x8rjAJXw9lBD3pc7sN9O7r%2F6O96q8U9jA4KzHhLrIR0a%2FLKShPtVU3UE8aORFxZUW25aNmFytDje7HL984s2BrqMvTbdGdlP9n%2B4SRL9%2BVua8apQDJBmvvTc5w2e3JnUGfV8JSYB94a9lZgykoWU3o2ysWRsfECVKQipw0wd2Su5JcKITN7R4PY6eylRRKq%2BiOmS1GXFaCWe3tF%2By9hw2I1uuVlHLnGxKyl%2FkptvJmt%2B7cPUFvjkcHf8%2FOp5djLcKPVKe8klSTaqj1BrXAEgN8vvHIebFEop%2F48i1Sg4mbkUcVVHT9%2BTb8Lxyb3H33kTRYXOk6fbdTGyL44izT0YooKMpbCsSTpWAAFxnJ9L2aGBP22Ro%2B2iPuyhQhvdcl%2BwrO0tTfkbDGN4L8iqwQPyIVz3zYA5Gj272sMGkPqalN8UnrQzW5UjN5e4VSJ5LeVn2qzjHq%2B8PvTZf1D%2Bpypg9GkiaQIL3K%2FTyuWKyMYkbWhf2jFF3g8tTsnejbjm3PrRQxcJAr1lrKxHoMqxzrZg%2Booxc0I7LyUCzLxa6%2BSG99t0Zy%2FI2Q%2FAJ%2F9Jr6bEy1MNmUzMAGOqUBewywyJrmQc2WQ8JkIRlZz%2B6rbnJvd%2BhqrhnoHYebhub0NUaC0I8rM814NeBY5%2BesVEyS6vTPbx48Jis3gFnaj994YIUwR3b9Wbq52m7LOVMfEpaELWWmaclhVAP26Sv1zWvoPBIXnoP1QZ9H9g3TgmkLI%2FRpbGXhbk2CX%2BRjbswN0JjL4Ikdy31UL2jA%2Bgg983xU5NI4rg3vdHjYCzOe%2FH16J6io&X-Amz-Signature=27d138397507952876d4c36eec9f6e0b01305757e10df5c74acf8f8b342ea388&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Z3533L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIB1dy2FfO6e0Nf4bXpPIGh34fzlgVFNvLaL8rpHQM7dVAiEAnYKfR%2BZojlGwqKRF%2Fk7L2Yi8%2BfrGS8%2BprT%2FXDUJLCA8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoKkb%2BWgVnu7sqDvSrcAzS71e705YRkT6bwT2BV8ESKRhPHVtaEMSi1xNBdpVXah36jxsDo5v1hRo9El6x8rjAJXw9lBD3pc7sN9O7r%2F6O96q8U9jA4KzHhLrIR0a%2FLKShPtVU3UE8aORFxZUW25aNmFytDje7HL984s2BrqMvTbdGdlP9n%2B4SRL9%2BVua8apQDJBmvvTc5w2e3JnUGfV8JSYB94a9lZgykoWU3o2ysWRsfECVKQipw0wd2Su5JcKITN7R4PY6eylRRKq%2BiOmS1GXFaCWe3tF%2By9hw2I1uuVlHLnGxKyl%2FkptvJmt%2B7cPUFvjkcHf8%2FOp5djLcKPVKe8klSTaqj1BrXAEgN8vvHIebFEop%2F48i1Sg4mbkUcVVHT9%2BTb8Lxyb3H33kTRYXOk6fbdTGyL44izT0YooKMpbCsSTpWAAFxnJ9L2aGBP22Ro%2B2iPuyhQhvdcl%2BwrO0tTfkbDGN4L8iqwQPyIVz3zYA5Gj272sMGkPqalN8UnrQzW5UjN5e4VSJ5LeVn2qzjHq%2B8PvTZf1D%2Bpypg9GkiaQIL3K%2FTyuWKyMYkbWhf2jFF3g8tTsnejbjm3PrRQxcJAr1lrKxHoMqxzrZg%2Booxc0I7LyUCzLxa6%2BSG99t0Zy%2FI2Q%2FAJ%2F9Jr6bEy1MNmUzMAGOqUBewywyJrmQc2WQ8JkIRlZz%2B6rbnJvd%2BhqrhnoHYebhub0NUaC0I8rM814NeBY5%2BesVEyS6vTPbx48Jis3gFnaj994YIUwR3b9Wbq52m7LOVMfEpaELWWmaclhVAP26Sv1zWvoPBIXnoP1QZ9H9g3TgmkLI%2FRpbGXhbk2CX%2BRjbswN0JjL4Ikdy31UL2jA%2Bgg983xU5NI4rg3vdHjYCzOe%2FH16J6io&X-Amz-Signature=671b4af7d46e6380d5600538c9e7deb8aa571de2bfe4c190f0db4cc997e7bd41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
