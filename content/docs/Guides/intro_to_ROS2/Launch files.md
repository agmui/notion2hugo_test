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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPW54IF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYtktIzZJCRe%2BvihZxu9dDpIGngw2l%2BMB7zYV2tLtpLAiEAwZrFgf9%2B0apBsOslS7QzooLv9GWiT7%2BNYZcoCF1E7bMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPwoUq0ZzNUsGDh9SrcA4jMUVonLibFFjfCBPcIjlEl%2FAlWaE3gt8hyCkk19wFtNKwFhMVnJplpXEZ7RDUKIWYuvKYNp5wYT6OsRaeKBUTEG5SM6%2BZkqSTMJr%2FDrcxCgOaAOA0yPbRUVCsm4R28dR9%2B2hBXViLUMQMYgdu37EJh289kSQbsgN3A3D%2F4hV0KHnB4i%2Bt9a2V1pW6eU1boMsTc8ny%2FCdGA7jYT4mR8x1CZ5TtPIhIXc5ELuJVL0Sq4jIAQcB6feVQy1%2BcvTOi%2BgRiuf8ZU%2BTlQxW2jJq2vFk3Ekd%2FfWvERmajQbRGOdHeeXoe%2Fvs6CGVUgJgotSlVVAbu7mezTGrtzVMBdoUwP8ND%2BekKacVsFBQct1hF%2FGDsQTys2znJLGbK5W3kS3wUCJHxPZJUvYUp9ZwHzifjzlzuTkLMMW0YE46yHBRu3vRmQsNql5CdstEVtR48jBNqAGN5ost9WIoktJFUMy%2BI0bvqSEy8p%2F6ZnLtabgdar6%2BX5rTjQTLA%2B71LsRpUmu1o0d8hIUj39%2F2MuLL64Lo02365SRwXuBwKkP98oC1qAlJG9EkPg8a3UTxwKhc3aiPqgBULX8vs9zNmuSopL9YcEVsoamymEpUkQpb1aJJDXqAQkzF%2BU0WPupKS3oWk2MIPOi8MGOqUBwGWAEZ8P5hFIZlBEu%2BnYieqfsa9ip3kDl%2BJkq9yeXtYA8m%2BNWCOx2mzounPelB1OVmNE5sAEgZjorFdVCM7B0PQINGty0XpRJrzPdPNU860RyGQ1gNEqO64UytpMkymEQ31499xPUDsacFJLjMApkAJ8aTBREDKUlIqU7o0EYnhXH8gxqrjdK7tV51DrP8su7BMIJTW6%2BRUs2raOEXivrbwoyz9i&X-Amz-Signature=4ce614081910f513e07d29f2d3df01af23beac5793c38a1554b030c520f4f947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPW54IF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYtktIzZJCRe%2BvihZxu9dDpIGngw2l%2BMB7zYV2tLtpLAiEAwZrFgf9%2B0apBsOslS7QzooLv9GWiT7%2BNYZcoCF1E7bMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPwoUq0ZzNUsGDh9SrcA4jMUVonLibFFjfCBPcIjlEl%2FAlWaE3gt8hyCkk19wFtNKwFhMVnJplpXEZ7RDUKIWYuvKYNp5wYT6OsRaeKBUTEG5SM6%2BZkqSTMJr%2FDrcxCgOaAOA0yPbRUVCsm4R28dR9%2B2hBXViLUMQMYgdu37EJh289kSQbsgN3A3D%2F4hV0KHnB4i%2Bt9a2V1pW6eU1boMsTc8ny%2FCdGA7jYT4mR8x1CZ5TtPIhIXc5ELuJVL0Sq4jIAQcB6feVQy1%2BcvTOi%2BgRiuf8ZU%2BTlQxW2jJq2vFk3Ekd%2FfWvERmajQbRGOdHeeXoe%2Fvs6CGVUgJgotSlVVAbu7mezTGrtzVMBdoUwP8ND%2BekKacVsFBQct1hF%2FGDsQTys2znJLGbK5W3kS3wUCJHxPZJUvYUp9ZwHzifjzlzuTkLMMW0YE46yHBRu3vRmQsNql5CdstEVtR48jBNqAGN5ost9WIoktJFUMy%2BI0bvqSEy8p%2F6ZnLtabgdar6%2BX5rTjQTLA%2B71LsRpUmu1o0d8hIUj39%2F2MuLL64Lo02365SRwXuBwKkP98oC1qAlJG9EkPg8a3UTxwKhc3aiPqgBULX8vs9zNmuSopL9YcEVsoamymEpUkQpb1aJJDXqAQkzF%2BU0WPupKS3oWk2MIPOi8MGOqUBwGWAEZ8P5hFIZlBEu%2BnYieqfsa9ip3kDl%2BJkq9yeXtYA8m%2BNWCOx2mzounPelB1OVmNE5sAEgZjorFdVCM7B0PQINGty0XpRJrzPdPNU860RyGQ1gNEqO64UytpMkymEQ31499xPUDsacFJLjMApkAJ8aTBREDKUlIqU7o0EYnhXH8gxqrjdK7tV51DrP8su7BMIJTW6%2BRUs2raOEXivrbwoyz9i&X-Amz-Signature=2ff29936e561f542ba8aa67e96e53718759206f1da3a97cbc2daf49136cf663d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPW54IF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYtktIzZJCRe%2BvihZxu9dDpIGngw2l%2BMB7zYV2tLtpLAiEAwZrFgf9%2B0apBsOslS7QzooLv9GWiT7%2BNYZcoCF1E7bMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPwoUq0ZzNUsGDh9SrcA4jMUVonLibFFjfCBPcIjlEl%2FAlWaE3gt8hyCkk19wFtNKwFhMVnJplpXEZ7RDUKIWYuvKYNp5wYT6OsRaeKBUTEG5SM6%2BZkqSTMJr%2FDrcxCgOaAOA0yPbRUVCsm4R28dR9%2B2hBXViLUMQMYgdu37EJh289kSQbsgN3A3D%2F4hV0KHnB4i%2Bt9a2V1pW6eU1boMsTc8ny%2FCdGA7jYT4mR8x1CZ5TtPIhIXc5ELuJVL0Sq4jIAQcB6feVQy1%2BcvTOi%2BgRiuf8ZU%2BTlQxW2jJq2vFk3Ekd%2FfWvERmajQbRGOdHeeXoe%2Fvs6CGVUgJgotSlVVAbu7mezTGrtzVMBdoUwP8ND%2BekKacVsFBQct1hF%2FGDsQTys2znJLGbK5W3kS3wUCJHxPZJUvYUp9ZwHzifjzlzuTkLMMW0YE46yHBRu3vRmQsNql5CdstEVtR48jBNqAGN5ost9WIoktJFUMy%2BI0bvqSEy8p%2F6ZnLtabgdar6%2BX5rTjQTLA%2B71LsRpUmu1o0d8hIUj39%2F2MuLL64Lo02365SRwXuBwKkP98oC1qAlJG9EkPg8a3UTxwKhc3aiPqgBULX8vs9zNmuSopL9YcEVsoamymEpUkQpb1aJJDXqAQkzF%2BU0WPupKS3oWk2MIPOi8MGOqUBwGWAEZ8P5hFIZlBEu%2BnYieqfsa9ip3kDl%2BJkq9yeXtYA8m%2BNWCOx2mzounPelB1OVmNE5sAEgZjorFdVCM7B0PQINGty0XpRJrzPdPNU860RyGQ1gNEqO64UytpMkymEQ31499xPUDsacFJLjMApkAJ8aTBREDKUlIqU7o0EYnhXH8gxqrjdK7tV51DrP8su7BMIJTW6%2BRUs2raOEXivrbwoyz9i&X-Amz-Signature=cee6042f8197a32c42dcce7603fd4b74ca99009e7eca093456398c295960e1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
