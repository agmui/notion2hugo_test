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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HM6LDQV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC3ucx0XKngOLtM2SOrCF8mdFrKJM33ozvS1%2FTKQcR7AiANIGDDOoqPaS52UQxdugvL%2FKbLFgdbQuapQOQ1XvizVCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5SV7iH%2B5q9RRudVKtwD4r6Egs9metZmSDRpr6PLep9tV%2FcN5UiurVkARnBn0%2Bpma4K3OXsYncy3MgteoI5uVqeUJE5jsxm%2Bw1ysM%2BC0aFv%2Bx2PylNun%2FxI5ZMoBWRiQF9STC4JayvACc%2BpUwo9rhzHdfo3u9cqQMfrm603pXy%2Br8FLz6CVBV6UVbvoZwFVv9hWrpI%2F9xQlB0KX%2BcBIBrHykZV%2BnnZxuxQp%2FHODyyTRXbRYTU50nV2rk1XG0JlA6EursL1pAz8X%2F19KKLZxfbHGu7cSwiDORQZo1jR2IHYo3qZBCDeqpX7oIPmgi0FJv3JOD4Rz846e%2FQFKD3DXT10zEO6kvpcxT1l0CaFpDXNWKGHv3rd1FXgefZnOhR%2FnMAN%2Bgno80FFrKBm6HVgjEv7thrnl53lpV9c4%2FSMEBFMyJvtJivm%2BMDLsdx167zPzGonhQI7PBtasCdCIxtjx4l2Q2vZM2SQKbItO7VXQtpnJHf76gAqnJMTFWMmBW740zhbmAk5UDv14%2F%2F0YqO03FfhxVkAYNOT%2By2h7lqeLIcXPk26UnOlrQcfWOYsTFMzA7OBWac4rWTdfQ9lx4zgyoCqddEU18REeOZ6BM6SESKtToPTQ0i1mAqpMRlUX8rYpIoHxeAJN2Bx9YruQwhd2qwQY6pgHr%2BASHpcOPyLJH53aUY7wPw6OkeUWgBgGz37FuTs%2BYQ7o4RmIF7Xk93spUZN5AhcfqtlgGKZEByW2eCuRS45gxhOd9AC1DKxD%2FezL1G4NVUJfgJEDjKRfIBp4J8GWJgq4QB5ZTKacTadKYKXx3P3Q6Y9Lc2jnXufA0FNpzW6KihmsSXL1VMG%2FS06Ois1yRCzNxcNN8NP0PSjrbmdjsPmoxSGrX0Zq7&X-Amz-Signature=34a34292c160888dd5f01dbcb9d8693038698b68e15d58fcc7c86c7f88b4ca69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HM6LDQV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC3ucx0XKngOLtM2SOrCF8mdFrKJM33ozvS1%2FTKQcR7AiANIGDDOoqPaS52UQxdugvL%2FKbLFgdbQuapQOQ1XvizVCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5SV7iH%2B5q9RRudVKtwD4r6Egs9metZmSDRpr6PLep9tV%2FcN5UiurVkARnBn0%2Bpma4K3OXsYncy3MgteoI5uVqeUJE5jsxm%2Bw1ysM%2BC0aFv%2Bx2PylNun%2FxI5ZMoBWRiQF9STC4JayvACc%2BpUwo9rhzHdfo3u9cqQMfrm603pXy%2Br8FLz6CVBV6UVbvoZwFVv9hWrpI%2F9xQlB0KX%2BcBIBrHykZV%2BnnZxuxQp%2FHODyyTRXbRYTU50nV2rk1XG0JlA6EursL1pAz8X%2F19KKLZxfbHGu7cSwiDORQZo1jR2IHYo3qZBCDeqpX7oIPmgi0FJv3JOD4Rz846e%2FQFKD3DXT10zEO6kvpcxT1l0CaFpDXNWKGHv3rd1FXgefZnOhR%2FnMAN%2Bgno80FFrKBm6HVgjEv7thrnl53lpV9c4%2FSMEBFMyJvtJivm%2BMDLsdx167zPzGonhQI7PBtasCdCIxtjx4l2Q2vZM2SQKbItO7VXQtpnJHf76gAqnJMTFWMmBW740zhbmAk5UDv14%2F%2F0YqO03FfhxVkAYNOT%2By2h7lqeLIcXPk26UnOlrQcfWOYsTFMzA7OBWac4rWTdfQ9lx4zgyoCqddEU18REeOZ6BM6SESKtToPTQ0i1mAqpMRlUX8rYpIoHxeAJN2Bx9YruQwhd2qwQY6pgHr%2BASHpcOPyLJH53aUY7wPw6OkeUWgBgGz37FuTs%2BYQ7o4RmIF7Xk93spUZN5AhcfqtlgGKZEByW2eCuRS45gxhOd9AC1DKxD%2FezL1G4NVUJfgJEDjKRfIBp4J8GWJgq4QB5ZTKacTadKYKXx3P3Q6Y9Lc2jnXufA0FNpzW6KihmsSXL1VMG%2FS06Ois1yRCzNxcNN8NP0PSjrbmdjsPmoxSGrX0Zq7&X-Amz-Signature=0d12d1ae476a2275d01cd831562a888d056284d3f423d3bb1b4918365f3ef536&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HM6LDQV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC3ucx0XKngOLtM2SOrCF8mdFrKJM33ozvS1%2FTKQcR7AiANIGDDOoqPaS52UQxdugvL%2FKbLFgdbQuapQOQ1XvizVCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5SV7iH%2B5q9RRudVKtwD4r6Egs9metZmSDRpr6PLep9tV%2FcN5UiurVkARnBn0%2Bpma4K3OXsYncy3MgteoI5uVqeUJE5jsxm%2Bw1ysM%2BC0aFv%2Bx2PylNun%2FxI5ZMoBWRiQF9STC4JayvACc%2BpUwo9rhzHdfo3u9cqQMfrm603pXy%2Br8FLz6CVBV6UVbvoZwFVv9hWrpI%2F9xQlB0KX%2BcBIBrHykZV%2BnnZxuxQp%2FHODyyTRXbRYTU50nV2rk1XG0JlA6EursL1pAz8X%2F19KKLZxfbHGu7cSwiDORQZo1jR2IHYo3qZBCDeqpX7oIPmgi0FJv3JOD4Rz846e%2FQFKD3DXT10zEO6kvpcxT1l0CaFpDXNWKGHv3rd1FXgefZnOhR%2FnMAN%2Bgno80FFrKBm6HVgjEv7thrnl53lpV9c4%2FSMEBFMyJvtJivm%2BMDLsdx167zPzGonhQI7PBtasCdCIxtjx4l2Q2vZM2SQKbItO7VXQtpnJHf76gAqnJMTFWMmBW740zhbmAk5UDv14%2F%2F0YqO03FfhxVkAYNOT%2By2h7lqeLIcXPk26UnOlrQcfWOYsTFMzA7OBWac4rWTdfQ9lx4zgyoCqddEU18REeOZ6BM6SESKtToPTQ0i1mAqpMRlUX8rYpIoHxeAJN2Bx9YruQwhd2qwQY6pgHr%2BASHpcOPyLJH53aUY7wPw6OkeUWgBgGz37FuTs%2BYQ7o4RmIF7Xk93spUZN5AhcfqtlgGKZEByW2eCuRS45gxhOd9AC1DKxD%2FezL1G4NVUJfgJEDjKRfIBp4J8GWJgq4QB5ZTKacTadKYKXx3P3Q6Y9Lc2jnXufA0FNpzW6KihmsSXL1VMG%2FS06Ois1yRCzNxcNN8NP0PSjrbmdjsPmoxSGrX0Zq7&X-Amz-Signature=f9eeeae991f75dbf64784dd9a744fe8f6cec0e78071955d850cd14f7128f7bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
