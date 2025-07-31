---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED4CNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJGWudUjaoZepQ7XkOffZwhmYWECab%2F5EoPAHphSvfSAiAD8NfiPx72ufssVZRfm%2FuSx%2B89%2FgM3O3dpUbYcxueHhiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsy54YCt46326ctH5KtwD%2BLNplClGNCGfbhqnmUf%2BH3GyjYFr0hKAdPywgZTW4FXueRDDzCSQJnKbnQGy3sR%2Bg0cCorSoVeC5iqj4QlfxWSGAtSR11k4is2w2bzeavC5LroOCrf7iyhlj9FdwHA79s5SFlWMcFVyPvctJFDHCGh%2FeLBWnlm91M2KyIBtjBxKn69zn9r5XE3HaRoJmUDVJijl7ExlwXKqfl73drKO8N7RNDVanXNvj5R3K3JAZ2zS8QlU8sW97yUa27w%2FSjfQEJwAOTTQqEu3zR92DbnvIzdzNmGREwOkDoGWENivVtLJWwPbst%2Fj%2Frzmuyg%2FmBDjxM6jg%2F%2BD86rVe6lmlBAu6Tv0T%2BhmDL5%2FBk1WIUpXjuC5un6RwWXst0gg5BJZeaqK2S1VU4T91NVuREHpEMz0MZsmXOQoJ05ghaw0kUfI1FzWjB6hMfStHujz4pd%2FPzi6rLHT6weqSsSqPJHy0%2BlSzlGe2Fyb%2BOAHsxawvlquWavqaaKEexWUBllU9Zr3mVRC8YsyoJOkjRQ%2Be6%2BP7uAlqyeysQa5c0nd69O8IGn9ZfA2XN6oN5BdpjdOKE10RarXpydd4rFYB%2BeIY%2B7AiCP0rnI3aKj%2FTufxL%2FPnCVXLSG57QkS2Isw5lEzxChPww4pqsxAY6pgEq%2FsN%2FTc4yR2ziWWTnhik2YtfqW1HN166O833NiO%2B9TkwbHxme4A6IpXVDclJLCTuW4uDMtEvaowUa8WjkFEVIvaQ6RH93F3pQTwWrAt%2FwYTGMZdbEiczshuUdIdcSrv6ykcp1Ys6rzdzY8QUaT1279lNq5F%2BDdSO0Od615VylNiRs%2FNqTqxW93UbAY1sqTeQ4UxyV1dkPvgiM3xwAMwud%2BzoWhjXu&X-Amz-Signature=c7a86368355e1d71800eb447a152b4f74048796e0dd2f9a44c0e59f3bcd396c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED4CNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJGWudUjaoZepQ7XkOffZwhmYWECab%2F5EoPAHphSvfSAiAD8NfiPx72ufssVZRfm%2FuSx%2B89%2FgM3O3dpUbYcxueHhiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsy54YCt46326ctH5KtwD%2BLNplClGNCGfbhqnmUf%2BH3GyjYFr0hKAdPywgZTW4FXueRDDzCSQJnKbnQGy3sR%2Bg0cCorSoVeC5iqj4QlfxWSGAtSR11k4is2w2bzeavC5LroOCrf7iyhlj9FdwHA79s5SFlWMcFVyPvctJFDHCGh%2FeLBWnlm91M2KyIBtjBxKn69zn9r5XE3HaRoJmUDVJijl7ExlwXKqfl73drKO8N7RNDVanXNvj5R3K3JAZ2zS8QlU8sW97yUa27w%2FSjfQEJwAOTTQqEu3zR92DbnvIzdzNmGREwOkDoGWENivVtLJWwPbst%2Fj%2Frzmuyg%2FmBDjxM6jg%2F%2BD86rVe6lmlBAu6Tv0T%2BhmDL5%2FBk1WIUpXjuC5un6RwWXst0gg5BJZeaqK2S1VU4T91NVuREHpEMz0MZsmXOQoJ05ghaw0kUfI1FzWjB6hMfStHujz4pd%2FPzi6rLHT6weqSsSqPJHy0%2BlSzlGe2Fyb%2BOAHsxawvlquWavqaaKEexWUBllU9Zr3mVRC8YsyoJOkjRQ%2Be6%2BP7uAlqyeysQa5c0nd69O8IGn9ZfA2XN6oN5BdpjdOKE10RarXpydd4rFYB%2BeIY%2B7AiCP0rnI3aKj%2FTufxL%2FPnCVXLSG57QkS2Isw5lEzxChPww4pqsxAY6pgEq%2FsN%2FTc4yR2ziWWTnhik2YtfqW1HN166O833NiO%2B9TkwbHxme4A6IpXVDclJLCTuW4uDMtEvaowUa8WjkFEVIvaQ6RH93F3pQTwWrAt%2FwYTGMZdbEiczshuUdIdcSrv6ykcp1Ys6rzdzY8QUaT1279lNq5F%2BDdSO0Od615VylNiRs%2FNqTqxW93UbAY1sqTeQ4UxyV1dkPvgiM3xwAMwud%2BzoWhjXu&X-Amz-Signature=636ab9cb4523fcd1c7e2c6cc79276e2c5193e1b2ea176750a97bd3dded752590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED4CNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJGWudUjaoZepQ7XkOffZwhmYWECab%2F5EoPAHphSvfSAiAD8NfiPx72ufssVZRfm%2FuSx%2B89%2FgM3O3dpUbYcxueHhiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsy54YCt46326ctH5KtwD%2BLNplClGNCGfbhqnmUf%2BH3GyjYFr0hKAdPywgZTW4FXueRDDzCSQJnKbnQGy3sR%2Bg0cCorSoVeC5iqj4QlfxWSGAtSR11k4is2w2bzeavC5LroOCrf7iyhlj9FdwHA79s5SFlWMcFVyPvctJFDHCGh%2FeLBWnlm91M2KyIBtjBxKn69zn9r5XE3HaRoJmUDVJijl7ExlwXKqfl73drKO8N7RNDVanXNvj5R3K3JAZ2zS8QlU8sW97yUa27w%2FSjfQEJwAOTTQqEu3zR92DbnvIzdzNmGREwOkDoGWENivVtLJWwPbst%2Fj%2Frzmuyg%2FmBDjxM6jg%2F%2BD86rVe6lmlBAu6Tv0T%2BhmDL5%2FBk1WIUpXjuC5un6RwWXst0gg5BJZeaqK2S1VU4T91NVuREHpEMz0MZsmXOQoJ05ghaw0kUfI1FzWjB6hMfStHujz4pd%2FPzi6rLHT6weqSsSqPJHy0%2BlSzlGe2Fyb%2BOAHsxawvlquWavqaaKEexWUBllU9Zr3mVRC8YsyoJOkjRQ%2Be6%2BP7uAlqyeysQa5c0nd69O8IGn9ZfA2XN6oN5BdpjdOKE10RarXpydd4rFYB%2BeIY%2B7AiCP0rnI3aKj%2FTufxL%2FPnCVXLSG57QkS2Isw5lEzxChPww4pqsxAY6pgEq%2FsN%2FTc4yR2ziWWTnhik2YtfqW1HN166O833NiO%2B9TkwbHxme4A6IpXVDclJLCTuW4uDMtEvaowUa8WjkFEVIvaQ6RH93F3pQTwWrAt%2FwYTGMZdbEiczshuUdIdcSrv6ykcp1Ys6rzdzY8QUaT1279lNq5F%2BDdSO0Od615VylNiRs%2FNqTqxW93UbAY1sqTeQ4UxyV1dkPvgiM3xwAMwud%2BzoWhjXu&X-Amz-Signature=ab4060708513768bd7a06b703996c8047acf218ecff9967ee06a01fa8955da30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
