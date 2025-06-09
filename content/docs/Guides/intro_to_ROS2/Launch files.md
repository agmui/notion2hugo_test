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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDMT5RX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOi39c0%2BovFDqpaVAINrnYOxmfocR6vENqk1tFIAUtQIhALEutUq5QKDwTg7ud%2B46GpEaXZ1b%2FK3wCp31v%2BGasVJFKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWpo2o%2BtSrpUu1iaAq3AOd6J0eSx9GedvxrMBPAFYfgZQXJn7HlSItkCQRreYHpGhBzVwqCjlogk%2B4wgDzp215bGpQ1kN2Dc9VWoxqaHt0GuWSxFjNCyiLLoNjDrmM4uKuW2PyF0RyTKPbte%2BFJpyl8gAYUOOOV5de4GDR5Kp%2F3qrQv7qPw71ISEJ8hOv50TAm6lSxhLzv7jgRoLuWTKdevihCc5fngxHWlAkW38dLHfw2Pzlvu%2BCLTb7EucveJ5uXsam8CvZ0rT%2Ft6IGxJPcp%2FatfL4loW4PRUbaMZ2LurNeKEsdJuL95%2BoIFWW1g%2FF1FvV6IYLQlz3OMBMnk%2BWqRGpZHXbzmND1NvXAxibXEYoLKrW1%2FxqG8WFpwy0SPYJTlVMZRRTd2GTOvW8IYRAYOGA5JTgT%2BpZ3WE6GMGHWhmuQohNw7it00IukugaHtS9hxueoc9P07G2dzfe6mP6blQLwtZW5%2FxgQRuL7am5%2BiyeeWkHlq4Q17qeMvA1Nkr2uimbhniHEDsmdvVkF1cKRpc%2B6mrEVXcV%2Ft2297Ubz%2Bq%2FWPCHC6JBbxNT2gsuUmBmNG4hp5%2FGC691Hz0e8DGVJv4ZjLPSyhvpNpO3irryURR7IxOLgDOaPVjsire7PtV20k1dF%2BnWJxqg8PmTD6nZvCBjqkAUlJ%2B%2B6klZG%2F5qkQ3I%2FwCuR2KAABiS7luHbzivoaTLLnvDYX2JD%2Fo43ThkaeZjhV6uz22%2Fa8C7dXxOLkk0TcNAWYc3VsrUqntvi8TNi0DjpKLvoSVogIXekNWVml6fhsfda4LVCwfksUY1nufwJhfl7lSFCLwikL4axADm9tpVuWttGcjSga7sjQZG4XYFaLv5SBUh14TMmkQYI0IhGbrsmzNdln&X-Amz-Signature=6763ffd8b185eb76e675dc5295509a9f0f0ffb87c8e2dd15b6d20dde0a96f31a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDMT5RX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOi39c0%2BovFDqpaVAINrnYOxmfocR6vENqk1tFIAUtQIhALEutUq5QKDwTg7ud%2B46GpEaXZ1b%2FK3wCp31v%2BGasVJFKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWpo2o%2BtSrpUu1iaAq3AOd6J0eSx9GedvxrMBPAFYfgZQXJn7HlSItkCQRreYHpGhBzVwqCjlogk%2B4wgDzp215bGpQ1kN2Dc9VWoxqaHt0GuWSxFjNCyiLLoNjDrmM4uKuW2PyF0RyTKPbte%2BFJpyl8gAYUOOOV5de4GDR5Kp%2F3qrQv7qPw71ISEJ8hOv50TAm6lSxhLzv7jgRoLuWTKdevihCc5fngxHWlAkW38dLHfw2Pzlvu%2BCLTb7EucveJ5uXsam8CvZ0rT%2Ft6IGxJPcp%2FatfL4loW4PRUbaMZ2LurNeKEsdJuL95%2BoIFWW1g%2FF1FvV6IYLQlz3OMBMnk%2BWqRGpZHXbzmND1NvXAxibXEYoLKrW1%2FxqG8WFpwy0SPYJTlVMZRRTd2GTOvW8IYRAYOGA5JTgT%2BpZ3WE6GMGHWhmuQohNw7it00IukugaHtS9hxueoc9P07G2dzfe6mP6blQLwtZW5%2FxgQRuL7am5%2BiyeeWkHlq4Q17qeMvA1Nkr2uimbhniHEDsmdvVkF1cKRpc%2B6mrEVXcV%2Ft2297Ubz%2Bq%2FWPCHC6JBbxNT2gsuUmBmNG4hp5%2FGC691Hz0e8DGVJv4ZjLPSyhvpNpO3irryURR7IxOLgDOaPVjsire7PtV20k1dF%2BnWJxqg8PmTD6nZvCBjqkAUlJ%2B%2B6klZG%2F5qkQ3I%2FwCuR2KAABiS7luHbzivoaTLLnvDYX2JD%2Fo43ThkaeZjhV6uz22%2Fa8C7dXxOLkk0TcNAWYc3VsrUqntvi8TNi0DjpKLvoSVogIXekNWVml6fhsfda4LVCwfksUY1nufwJhfl7lSFCLwikL4axADm9tpVuWttGcjSga7sjQZG4XYFaLv5SBUh14TMmkQYI0IhGbrsmzNdln&X-Amz-Signature=b871434b70135d94ca437ba66574dc4cc84abb295e963d14a4543c7288a04532&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDMT5RX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOi39c0%2BovFDqpaVAINrnYOxmfocR6vENqk1tFIAUtQIhALEutUq5QKDwTg7ud%2B46GpEaXZ1b%2FK3wCp31v%2BGasVJFKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWpo2o%2BtSrpUu1iaAq3AOd6J0eSx9GedvxrMBPAFYfgZQXJn7HlSItkCQRreYHpGhBzVwqCjlogk%2B4wgDzp215bGpQ1kN2Dc9VWoxqaHt0GuWSxFjNCyiLLoNjDrmM4uKuW2PyF0RyTKPbte%2BFJpyl8gAYUOOOV5de4GDR5Kp%2F3qrQv7qPw71ISEJ8hOv50TAm6lSxhLzv7jgRoLuWTKdevihCc5fngxHWlAkW38dLHfw2Pzlvu%2BCLTb7EucveJ5uXsam8CvZ0rT%2Ft6IGxJPcp%2FatfL4loW4PRUbaMZ2LurNeKEsdJuL95%2BoIFWW1g%2FF1FvV6IYLQlz3OMBMnk%2BWqRGpZHXbzmND1NvXAxibXEYoLKrW1%2FxqG8WFpwy0SPYJTlVMZRRTd2GTOvW8IYRAYOGA5JTgT%2BpZ3WE6GMGHWhmuQohNw7it00IukugaHtS9hxueoc9P07G2dzfe6mP6blQLwtZW5%2FxgQRuL7am5%2BiyeeWkHlq4Q17qeMvA1Nkr2uimbhniHEDsmdvVkF1cKRpc%2B6mrEVXcV%2Ft2297Ubz%2Bq%2FWPCHC6JBbxNT2gsuUmBmNG4hp5%2FGC691Hz0e8DGVJv4ZjLPSyhvpNpO3irryURR7IxOLgDOaPVjsire7PtV20k1dF%2BnWJxqg8PmTD6nZvCBjqkAUlJ%2B%2B6klZG%2F5qkQ3I%2FwCuR2KAABiS7luHbzivoaTLLnvDYX2JD%2Fo43ThkaeZjhV6uz22%2Fa8C7dXxOLkk0TcNAWYc3VsrUqntvi8TNi0DjpKLvoSVogIXekNWVml6fhsfda4LVCwfksUY1nufwJhfl7lSFCLwikL4axADm9tpVuWttGcjSga7sjQZG4XYFaLv5SBUh14TMmkQYI0IhGbrsmzNdln&X-Amz-Signature=2385343a96ffa348218cd146301d6c8f6cf7680e96b77ca2d1aba8cc6ee1bebf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
