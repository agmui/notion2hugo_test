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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CNALMA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDrpIINNFfhgdHejitBCyuRDL%2F3jEIH0MF4KM4amR9XZAiASAOqZKI1UufOHraFTEN%2FD%2BufPvvHag%2BMjC4m%2BfM8rLyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYxM%2BWAxjdpTKbfVtKtwDdsojME0Gjq2HaVyBpYikiKgzeDRYvN0XhkuuI4QcbXFwd3da54zVQHpwPl3ciD54Gb9sITqM7O700gj%2FWeeE2RtQiTU8dxJjLB%2Bf%2FpLgX2BJbbKsnyu3s%2Bjd42ymjzVNDmK2b%2BXptO9TVfYBRkPf2N%2BE4W0VOHET1tlbM0KakJZ7BiU2FdXT2BvMP7COi9nA28SKEUVrGH%2FL%2BnjHy07NgElLQEdr5T5XSc6sTn4dpZMTWrRWMWUVpnZNv02ok4w%2BHSby4Ueqwby88rG0cBAZOwBDfgZ6UYQzjCql7Nf6kr2ZPaWSjZTJffa9iBi6rJhuCoC7nk7mBSUtO%2B9jlsPRey4i8f9QrUv6rUAJ%2BZXyYTrZP%2BACV594XOq%2BIglkqJLywJkgRPSHZLIjh1RBWkY%2B5DaT5EIb6DCqi3ireALadx1dLn3Z1T8bp8ZX4wcj%2BDb5ULIAuQX2LYv0PA3yE0AvdxgndnFlNdamzjqNv%2FFezKJ2uGtd5HTPpYFmvPh7KB30MsaHIy1a5lml5yiZmJjEuQD%2BTEYk7RAvZlSHvpQbsFY0JP5%2F7n5qKPBszF%2FN3NhbqGYEpDGIMt2ssve3uIzXsTqy1Imhu4%2FPyiW%2BrmunL9OLs6RAu2Q%2FtpEnH0YwqP%2B4wgY6pgGq9xWG0uFy0GPT0U9Jq61Nqr7Ua5oHnV2TfczAQEj8WRRKNzvOBl5MbzGwi06VdT9aRCPPlz4atdypQfmu%2BEC502O9UZ7ZtfK%2FQ0FESx8n%2BT2f0zHRf4%2FtSGS6Ebu1ajeMNcgc%2FPMd6NcL1LMupg71ybPiMjWqbRAF3H%2Fj0Bb7FL8u3IF1N8Xwa9soiuOKgwRP3wK%2FL4QjhPCOdwsUReETwS%2B2%2FUIz&X-Amz-Signature=74921d001713c3941ff1d77dc3a6f3082d22bbcf7f5517a9faac1295c2fb8ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CNALMA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDrpIINNFfhgdHejitBCyuRDL%2F3jEIH0MF4KM4amR9XZAiASAOqZKI1UufOHraFTEN%2FD%2BufPvvHag%2BMjC4m%2BfM8rLyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYxM%2BWAxjdpTKbfVtKtwDdsojME0Gjq2HaVyBpYikiKgzeDRYvN0XhkuuI4QcbXFwd3da54zVQHpwPl3ciD54Gb9sITqM7O700gj%2FWeeE2RtQiTU8dxJjLB%2Bf%2FpLgX2BJbbKsnyu3s%2Bjd42ymjzVNDmK2b%2BXptO9TVfYBRkPf2N%2BE4W0VOHET1tlbM0KakJZ7BiU2FdXT2BvMP7COi9nA28SKEUVrGH%2FL%2BnjHy07NgElLQEdr5T5XSc6sTn4dpZMTWrRWMWUVpnZNv02ok4w%2BHSby4Ueqwby88rG0cBAZOwBDfgZ6UYQzjCql7Nf6kr2ZPaWSjZTJffa9iBi6rJhuCoC7nk7mBSUtO%2B9jlsPRey4i8f9QrUv6rUAJ%2BZXyYTrZP%2BACV594XOq%2BIglkqJLywJkgRPSHZLIjh1RBWkY%2B5DaT5EIb6DCqi3ireALadx1dLn3Z1T8bp8ZX4wcj%2BDb5ULIAuQX2LYv0PA3yE0AvdxgndnFlNdamzjqNv%2FFezKJ2uGtd5HTPpYFmvPh7KB30MsaHIy1a5lml5yiZmJjEuQD%2BTEYk7RAvZlSHvpQbsFY0JP5%2F7n5qKPBszF%2FN3NhbqGYEpDGIMt2ssve3uIzXsTqy1Imhu4%2FPyiW%2BrmunL9OLs6RAu2Q%2FtpEnH0YwqP%2B4wgY6pgGq9xWG0uFy0GPT0U9Jq61Nqr7Ua5oHnV2TfczAQEj8WRRKNzvOBl5MbzGwi06VdT9aRCPPlz4atdypQfmu%2BEC502O9UZ7ZtfK%2FQ0FESx8n%2BT2f0zHRf4%2FtSGS6Ebu1ajeMNcgc%2FPMd6NcL1LMupg71ybPiMjWqbRAF3H%2Fj0Bb7FL8u3IF1N8Xwa9soiuOKgwRP3wK%2FL4QjhPCOdwsUReETwS%2B2%2FUIz&X-Amz-Signature=5bda0e773c7ecc82ce7c5036263f6159052310012b8ddb6d80b020d4048eca80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CNALMA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDrpIINNFfhgdHejitBCyuRDL%2F3jEIH0MF4KM4amR9XZAiASAOqZKI1UufOHraFTEN%2FD%2BufPvvHag%2BMjC4m%2BfM8rLyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYxM%2BWAxjdpTKbfVtKtwDdsojME0Gjq2HaVyBpYikiKgzeDRYvN0XhkuuI4QcbXFwd3da54zVQHpwPl3ciD54Gb9sITqM7O700gj%2FWeeE2RtQiTU8dxJjLB%2Bf%2FpLgX2BJbbKsnyu3s%2Bjd42ymjzVNDmK2b%2BXptO9TVfYBRkPf2N%2BE4W0VOHET1tlbM0KakJZ7BiU2FdXT2BvMP7COi9nA28SKEUVrGH%2FL%2BnjHy07NgElLQEdr5T5XSc6sTn4dpZMTWrRWMWUVpnZNv02ok4w%2BHSby4Ueqwby88rG0cBAZOwBDfgZ6UYQzjCql7Nf6kr2ZPaWSjZTJffa9iBi6rJhuCoC7nk7mBSUtO%2B9jlsPRey4i8f9QrUv6rUAJ%2BZXyYTrZP%2BACV594XOq%2BIglkqJLywJkgRPSHZLIjh1RBWkY%2B5DaT5EIb6DCqi3ireALadx1dLn3Z1T8bp8ZX4wcj%2BDb5ULIAuQX2LYv0PA3yE0AvdxgndnFlNdamzjqNv%2FFezKJ2uGtd5HTPpYFmvPh7KB30MsaHIy1a5lml5yiZmJjEuQD%2BTEYk7RAvZlSHvpQbsFY0JP5%2F7n5qKPBszF%2FN3NhbqGYEpDGIMt2ssve3uIzXsTqy1Imhu4%2FPyiW%2BrmunL9OLs6RAu2Q%2FtpEnH0YwqP%2B4wgY6pgGq9xWG0uFy0GPT0U9Jq61Nqr7Ua5oHnV2TfczAQEj8WRRKNzvOBl5MbzGwi06VdT9aRCPPlz4atdypQfmu%2BEC502O9UZ7ZtfK%2FQ0FESx8n%2BT2f0zHRf4%2FtSGS6Ebu1ajeMNcgc%2FPMd6NcL1LMupg71ybPiMjWqbRAF3H%2Fj0Bb7FL8u3IF1N8Xwa9soiuOKgwRP3wK%2FL4QjhPCOdwsUReETwS%2B2%2FUIz&X-Amz-Signature=750fc7805fdfae11bea30837ea49ca73f1f825c02082f13c834a1305714c596c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
