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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYJMMWG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGinRmWC3LTor86U19tzJ6%2ByvpFNZPJyH75AfVMuN%2F%2BHAiBV8zYiJqEKT96hNqMcP4v5VPySDWfhi87Bp6VD%2FDKA2CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lT31bgBv5SWxEEYKtwDk6X6hc%2Bba1Yn4onubWtUCka6%2FnJDek1XQDqhxyOWLLmTbvnJjKC1uNn9Vap6K73XPkiPmkkzEY4VdLP9tsEyaEyZlT8d0nFkieIOJXIeuvlvm13I9dHJxvpHSfFITzluZVTRprZgVdpbYa4y6VfoKxTYN%2BEiwDLjdoMlOnkMZfdjLHge4rqeFW6oSlQHKWIuBiXekRCYhY3KvE5BtuNR2i2hkEfnZBMip9yOaXYn%2FF6gg%2Fh5Bb%2Bzrl%2B%2BOqDaBQt7FY7H8tiurPAfG3ev3IreSeBT9GTqBayy67MdyrCDJ%2BRaQRu8gkZUiTkWmqgdT1Q8HiETkVOV6qv6xVIhMTVhI8im%2BN%2FKTJ2XnCpqe26TA9B8TXf4Ysfwwx9Rwj1U7lrA%2BZf%2BEwa6esCCx5Lz7jCpxmgsxgtgkaW%2BAHcItYDpjZqFJTXk4Ihqck2eERTF96gZDQDoV%2B5HROJh4oNnVE5gTpWZNwqzQofgSzwt56K6rQdIldP9kILyozSzCmk%2BEDr6G2DEyTZtl489u9Zzg77%2F%2F%2BeUeXALPYbyQrNRNcAp9LqwwVgO6VDeAY8CClexliWtoJDE0d9NnO%2BAon6hrcsE47xVfxIDrImRQoLUIXOtZAg4RmhexkJQkbyGQucw6N7XwAY6pgHGM4paZ5GDYBSzRK40EXOGCvzczS%2FeREQ78T9sliqQ1CIycbkicsk3yRqWoJESiZ1UZyMACGoMA8DnXkf225PkVukfAkb4oYH5x6SNx8LGShg7nGOeEIrGiCbbCd01jUtYUBVLcy9cJL91bPO8wbgVMAm1k%2BfH8669HITjmt6JvfIR1OVWR%2B8hhipeAhDyeBgYR%2Fk1TZAB5ogxMAH%2B8%2FLwIBtpztvK&X-Amz-Signature=5389bd2786cdecb5d8e06263dad2ea91f0539bd35f375dab589f340e4bc3ae87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYJMMWG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGinRmWC3LTor86U19tzJ6%2ByvpFNZPJyH75AfVMuN%2F%2BHAiBV8zYiJqEKT96hNqMcP4v5VPySDWfhi87Bp6VD%2FDKA2CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lT31bgBv5SWxEEYKtwDk6X6hc%2Bba1Yn4onubWtUCka6%2FnJDek1XQDqhxyOWLLmTbvnJjKC1uNn9Vap6K73XPkiPmkkzEY4VdLP9tsEyaEyZlT8d0nFkieIOJXIeuvlvm13I9dHJxvpHSfFITzluZVTRprZgVdpbYa4y6VfoKxTYN%2BEiwDLjdoMlOnkMZfdjLHge4rqeFW6oSlQHKWIuBiXekRCYhY3KvE5BtuNR2i2hkEfnZBMip9yOaXYn%2FF6gg%2Fh5Bb%2Bzrl%2B%2BOqDaBQt7FY7H8tiurPAfG3ev3IreSeBT9GTqBayy67MdyrCDJ%2BRaQRu8gkZUiTkWmqgdT1Q8HiETkVOV6qv6xVIhMTVhI8im%2BN%2FKTJ2XnCpqe26TA9B8TXf4Ysfwwx9Rwj1U7lrA%2BZf%2BEwa6esCCx5Lz7jCpxmgsxgtgkaW%2BAHcItYDpjZqFJTXk4Ihqck2eERTF96gZDQDoV%2B5HROJh4oNnVE5gTpWZNwqzQofgSzwt56K6rQdIldP9kILyozSzCmk%2BEDr6G2DEyTZtl489u9Zzg77%2F%2F%2BeUeXALPYbyQrNRNcAp9LqwwVgO6VDeAY8CClexliWtoJDE0d9NnO%2BAon6hrcsE47xVfxIDrImRQoLUIXOtZAg4RmhexkJQkbyGQucw6N7XwAY6pgHGM4paZ5GDYBSzRK40EXOGCvzczS%2FeREQ78T9sliqQ1CIycbkicsk3yRqWoJESiZ1UZyMACGoMA8DnXkf225PkVukfAkb4oYH5x6SNx8LGShg7nGOeEIrGiCbbCd01jUtYUBVLcy9cJL91bPO8wbgVMAm1k%2BfH8669HITjmt6JvfIR1OVWR%2B8hhipeAhDyeBgYR%2Fk1TZAB5ogxMAH%2B8%2FLwIBtpztvK&X-Amz-Signature=01da3d253d7e901cd68de204eeaafd19be34ae00e31f63d91eeddc57879041e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYJMMWG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGinRmWC3LTor86U19tzJ6%2ByvpFNZPJyH75AfVMuN%2F%2BHAiBV8zYiJqEKT96hNqMcP4v5VPySDWfhi87Bp6VD%2FDKA2CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lT31bgBv5SWxEEYKtwDk6X6hc%2Bba1Yn4onubWtUCka6%2FnJDek1XQDqhxyOWLLmTbvnJjKC1uNn9Vap6K73XPkiPmkkzEY4VdLP9tsEyaEyZlT8d0nFkieIOJXIeuvlvm13I9dHJxvpHSfFITzluZVTRprZgVdpbYa4y6VfoKxTYN%2BEiwDLjdoMlOnkMZfdjLHge4rqeFW6oSlQHKWIuBiXekRCYhY3KvE5BtuNR2i2hkEfnZBMip9yOaXYn%2FF6gg%2Fh5Bb%2Bzrl%2B%2BOqDaBQt7FY7H8tiurPAfG3ev3IreSeBT9GTqBayy67MdyrCDJ%2BRaQRu8gkZUiTkWmqgdT1Q8HiETkVOV6qv6xVIhMTVhI8im%2BN%2FKTJ2XnCpqe26TA9B8TXf4Ysfwwx9Rwj1U7lrA%2BZf%2BEwa6esCCx5Lz7jCpxmgsxgtgkaW%2BAHcItYDpjZqFJTXk4Ihqck2eERTF96gZDQDoV%2B5HROJh4oNnVE5gTpWZNwqzQofgSzwt56K6rQdIldP9kILyozSzCmk%2BEDr6G2DEyTZtl489u9Zzg77%2F%2F%2BeUeXALPYbyQrNRNcAp9LqwwVgO6VDeAY8CClexliWtoJDE0d9NnO%2BAon6hrcsE47xVfxIDrImRQoLUIXOtZAg4RmhexkJQkbyGQucw6N7XwAY6pgHGM4paZ5GDYBSzRK40EXOGCvzczS%2FeREQ78T9sliqQ1CIycbkicsk3yRqWoJESiZ1UZyMACGoMA8DnXkf225PkVukfAkb4oYH5x6SNx8LGShg7nGOeEIrGiCbbCd01jUtYUBVLcy9cJL91bPO8wbgVMAm1k%2BfH8669HITjmt6JvfIR1OVWR%2B8hhipeAhDyeBgYR%2Fk1TZAB5ogxMAH%2B8%2FLwIBtpztvK&X-Amz-Signature=b371ba3453aecfff4bcacf019da83dd0c73dc5d60fdda7e8bfbc4847d2a047f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
