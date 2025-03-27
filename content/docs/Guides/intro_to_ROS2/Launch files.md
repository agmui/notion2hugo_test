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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QTZLNM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGOMqJNGbkJZLSLskxYCMoTgzb47Vb2cANCH%2FQ7JVIHAiEAuJtYXqVd3i2YkDteNeiW9oED0xZPZyvC0CGfFNSyRwAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHD2mRtkg719LzFflCrcA2GYFkhUQNx08URuxG9ugrAi4vkZY4fZrQ6WeFGs%2B4BD6hRx5Pbqw1XD%2BTNJaYTnNU4b652XFcXIZaoyxjP8BLQpr6ZORqePqoZ6wo6e351JYVGRmVdyb7vQVGNVQPzeAHp2pEpy4dInV%2Be5HMly0oHt5O%2BBsI5FYQqVz1LrVhtbcZjMEqEgiq8hOjXVYK7Y1DZtMN8myOv%2FcSfbYJvyepjRCBuOLXpZj2dGfywStUucHEHPayFZAPA2ouIrLdNOYb0ZsWQfNObz6bhoFJZGfz3nLExNq9LLNSls8jGxj6pZEsUzAxeq%2BH2uaWZMveWdH3Rre8ctmCfM6b300j4TPdGeJ4rQ777hpHdBjYavC54MJvfFLLDl%2FBMquXWe8zHUD4BYE4bfRLx8CHDesZAMbOEbHGGg6mBJYPcK3KuesFymXXb0dJCu%2BljiaqEcwwzOor9OoYWN%2BwrSi6QJSC05g26ImCVavAzrwoQWUDbthU%2BHRG5vc5wHS8ZnOeqx0lvzEW%2BOQa1tqR2LNLKfd9j5MwjCAuUaq0OOEn%2Fp%2F3Zb5vbj%2B22cPZtBVtfxmVRvhDUQlP4uym3VLumKhdXwAyozmBYceueBC2uIzxeQpLFfSsdIA9Wovx0wb5kFJ%2Bw7MP3qlb8GOqUBRrImumbe4QxUMBOndhMfUKNVmperKeVnPIDWh%2Ffd2aTc7YWZrUkbOZXov8C685rdOIVCewoSuc3gUiniYCbTyZ95gqEHjJAX0olHSVcOoFQr13MqEzYSQyeK9bNvO4DCh%2Fv5riCwaw%2FdXZRJVVuwYVlPML1HYR0wYWLt2rKwOu4yktsY%2BO1zhcDx9X4v9%2FpbhTGkqpnIZCjuk67o%2FrOYG61fqONU&X-Amz-Signature=dfd42fa578bd17c909e0ed8390b42709a5ba2dab71c9f25a9e35f83bd4fae470&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QTZLNM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGOMqJNGbkJZLSLskxYCMoTgzb47Vb2cANCH%2FQ7JVIHAiEAuJtYXqVd3i2YkDteNeiW9oED0xZPZyvC0CGfFNSyRwAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHD2mRtkg719LzFflCrcA2GYFkhUQNx08URuxG9ugrAi4vkZY4fZrQ6WeFGs%2B4BD6hRx5Pbqw1XD%2BTNJaYTnNU4b652XFcXIZaoyxjP8BLQpr6ZORqePqoZ6wo6e351JYVGRmVdyb7vQVGNVQPzeAHp2pEpy4dInV%2Be5HMly0oHt5O%2BBsI5FYQqVz1LrVhtbcZjMEqEgiq8hOjXVYK7Y1DZtMN8myOv%2FcSfbYJvyepjRCBuOLXpZj2dGfywStUucHEHPayFZAPA2ouIrLdNOYb0ZsWQfNObz6bhoFJZGfz3nLExNq9LLNSls8jGxj6pZEsUzAxeq%2BH2uaWZMveWdH3Rre8ctmCfM6b300j4TPdGeJ4rQ777hpHdBjYavC54MJvfFLLDl%2FBMquXWe8zHUD4BYE4bfRLx8CHDesZAMbOEbHGGg6mBJYPcK3KuesFymXXb0dJCu%2BljiaqEcwwzOor9OoYWN%2BwrSi6QJSC05g26ImCVavAzrwoQWUDbthU%2BHRG5vc5wHS8ZnOeqx0lvzEW%2BOQa1tqR2LNLKfd9j5MwjCAuUaq0OOEn%2Fp%2F3Zb5vbj%2B22cPZtBVtfxmVRvhDUQlP4uym3VLumKhdXwAyozmBYceueBC2uIzxeQpLFfSsdIA9Wovx0wb5kFJ%2Bw7MP3qlb8GOqUBRrImumbe4QxUMBOndhMfUKNVmperKeVnPIDWh%2Ffd2aTc7YWZrUkbOZXov8C685rdOIVCewoSuc3gUiniYCbTyZ95gqEHjJAX0olHSVcOoFQr13MqEzYSQyeK9bNvO4DCh%2Fv5riCwaw%2FdXZRJVVuwYVlPML1HYR0wYWLt2rKwOu4yktsY%2BO1zhcDx9X4v9%2FpbhTGkqpnIZCjuk67o%2FrOYG61fqONU&X-Amz-Signature=c2eab956fef148d960e6eded39cbfd407bd02ec12d2a14e3d3e40c50b2426ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QTZLNM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGOMqJNGbkJZLSLskxYCMoTgzb47Vb2cANCH%2FQ7JVIHAiEAuJtYXqVd3i2YkDteNeiW9oED0xZPZyvC0CGfFNSyRwAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHD2mRtkg719LzFflCrcA2GYFkhUQNx08URuxG9ugrAi4vkZY4fZrQ6WeFGs%2B4BD6hRx5Pbqw1XD%2BTNJaYTnNU4b652XFcXIZaoyxjP8BLQpr6ZORqePqoZ6wo6e351JYVGRmVdyb7vQVGNVQPzeAHp2pEpy4dInV%2Be5HMly0oHt5O%2BBsI5FYQqVz1LrVhtbcZjMEqEgiq8hOjXVYK7Y1DZtMN8myOv%2FcSfbYJvyepjRCBuOLXpZj2dGfywStUucHEHPayFZAPA2ouIrLdNOYb0ZsWQfNObz6bhoFJZGfz3nLExNq9LLNSls8jGxj6pZEsUzAxeq%2BH2uaWZMveWdH3Rre8ctmCfM6b300j4TPdGeJ4rQ777hpHdBjYavC54MJvfFLLDl%2FBMquXWe8zHUD4BYE4bfRLx8CHDesZAMbOEbHGGg6mBJYPcK3KuesFymXXb0dJCu%2BljiaqEcwwzOor9OoYWN%2BwrSi6QJSC05g26ImCVavAzrwoQWUDbthU%2BHRG5vc5wHS8ZnOeqx0lvzEW%2BOQa1tqR2LNLKfd9j5MwjCAuUaq0OOEn%2Fp%2F3Zb5vbj%2B22cPZtBVtfxmVRvhDUQlP4uym3VLumKhdXwAyozmBYceueBC2uIzxeQpLFfSsdIA9Wovx0wb5kFJ%2Bw7MP3qlb8GOqUBRrImumbe4QxUMBOndhMfUKNVmperKeVnPIDWh%2Ffd2aTc7YWZrUkbOZXov8C685rdOIVCewoSuc3gUiniYCbTyZ95gqEHjJAX0olHSVcOoFQr13MqEzYSQyeK9bNvO4DCh%2Fv5riCwaw%2FdXZRJVVuwYVlPML1HYR0wYWLt2rKwOu4yktsY%2BO1zhcDx9X4v9%2FpbhTGkqpnIZCjuk67o%2FrOYG61fqONU&X-Amz-Signature=5b926e9ec5526947c992b0840b2214f2e5a66f4a35a3bac2f93606520f64bf15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
