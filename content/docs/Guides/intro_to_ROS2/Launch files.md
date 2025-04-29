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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ5EPZX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxvxiqK8DIjdmzELJ8qip6joSLCJOrjoFI8Pjs0RuvAiEAzOjlDF97itEx5xn8BSBkMtJVaIkBkcmhujm8BErElNgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0HOSORysLinMi7gircA2dk%2BQjXCNTSzqHxAJwltJsrb7pex%2B%2BalNuuRPF36phJNfnW6whOhsV6H622fGTniT0TgYYxYgJReFz%2B%2B79jtEkry7Zvn8wlp%2Bf%2BSM89R0t2LMQN9NKgOuU6GuS4PSUP0lDhKmy6FqKw6RsoioDbco2HApx7xda82dx53esVFIrys5iKtkjriRY2jaeU43e6dQLtCm2UXwQtrXv3ZNZ5fG4rgdf%2FcJbgKcMZwHs9TN3iKzBLaW2WiHGbEM1kRx8iHL%2FB3UqXciaRRp0KpEGARB%2BQxxGu4NZbXts17MdVfTrr2AWil7KqTW34Ffm1jYj08%2FtFWZWdiIbkqYPKFAdjtCE5KWLech5kgAQchT1Ei0EGnh2j5U5%2FY3A%2BJ%2Bwz5mnq7XG7CaV08B1vrQl5qj3x5hIEmzUn1lVK%2FixOGnWBxaZDt2lpO2Fz%2Bb5YtvxhuD62%2FSPyaZzhQV%2FwViWS53m6jWmY1FX0qCb4N8g6WU1ZP8cQNYJ1%2F9Z6OldQ5idQqrfRL3%2F5Er5r%2FkpeMHL0IsLi6rTUsKgaH%2BDaJJ%2BTmPHMpXol20peRNk443xV1OcVG2sXTsFX5kUVw327TKwUFfWUgw1SVVvOgwni5GURbJLeT5tbyp0Ibk4Q1KnnscPOMNLRwcAGOqUBTVJN3TjbrMvE46YbBGLP58hBbJpcWE1s1pVm7gGLjV6cb5pnic6LHMpBfv%2FJNwZuhrek5uFabjx6gdT8nVrs5yl3NWcaPlKUJljd4UC%2FeXLKDdVIS9pXnU73uQdB%2FFe%2Fd0a8ttdg%2BAIRCPreaSPuwArtpbzdabkph0b3OiokHjo%2BbXFumAQntSh6r%2B8L7bfhRj2OkaCh5o%2BSjX4fMz6ayQcjVVnU&X-Amz-Signature=557c7c4c2b9c234ce02eaf6ff4e8a51d1c5fd0999fe5b84b5f1e88bca539fa78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ5EPZX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxvxiqK8DIjdmzELJ8qip6joSLCJOrjoFI8Pjs0RuvAiEAzOjlDF97itEx5xn8BSBkMtJVaIkBkcmhujm8BErElNgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0HOSORysLinMi7gircA2dk%2BQjXCNTSzqHxAJwltJsrb7pex%2B%2BalNuuRPF36phJNfnW6whOhsV6H622fGTniT0TgYYxYgJReFz%2B%2B79jtEkry7Zvn8wlp%2Bf%2BSM89R0t2LMQN9NKgOuU6GuS4PSUP0lDhKmy6FqKw6RsoioDbco2HApx7xda82dx53esVFIrys5iKtkjriRY2jaeU43e6dQLtCm2UXwQtrXv3ZNZ5fG4rgdf%2FcJbgKcMZwHs9TN3iKzBLaW2WiHGbEM1kRx8iHL%2FB3UqXciaRRp0KpEGARB%2BQxxGu4NZbXts17MdVfTrr2AWil7KqTW34Ffm1jYj08%2FtFWZWdiIbkqYPKFAdjtCE5KWLech5kgAQchT1Ei0EGnh2j5U5%2FY3A%2BJ%2Bwz5mnq7XG7CaV08B1vrQl5qj3x5hIEmzUn1lVK%2FixOGnWBxaZDt2lpO2Fz%2Bb5YtvxhuD62%2FSPyaZzhQV%2FwViWS53m6jWmY1FX0qCb4N8g6WU1ZP8cQNYJ1%2F9Z6OldQ5idQqrfRL3%2F5Er5r%2FkpeMHL0IsLi6rTUsKgaH%2BDaJJ%2BTmPHMpXol20peRNk443xV1OcVG2sXTsFX5kUVw327TKwUFfWUgw1SVVvOgwni5GURbJLeT5tbyp0Ibk4Q1KnnscPOMNLRwcAGOqUBTVJN3TjbrMvE46YbBGLP58hBbJpcWE1s1pVm7gGLjV6cb5pnic6LHMpBfv%2FJNwZuhrek5uFabjx6gdT8nVrs5yl3NWcaPlKUJljd4UC%2FeXLKDdVIS9pXnU73uQdB%2FFe%2Fd0a8ttdg%2BAIRCPreaSPuwArtpbzdabkph0b3OiokHjo%2BbXFumAQntSh6r%2B8L7bfhRj2OkaCh5o%2BSjX4fMz6ayQcjVVnU&X-Amz-Signature=1821bf0766a1af785b9aa81be3efeb95ec0be6ea7529dcf9cc46502bd1b6f939&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ5EPZX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxvxiqK8DIjdmzELJ8qip6joSLCJOrjoFI8Pjs0RuvAiEAzOjlDF97itEx5xn8BSBkMtJVaIkBkcmhujm8BErElNgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0HOSORysLinMi7gircA2dk%2BQjXCNTSzqHxAJwltJsrb7pex%2B%2BalNuuRPF36phJNfnW6whOhsV6H622fGTniT0TgYYxYgJReFz%2B%2B79jtEkry7Zvn8wlp%2Bf%2BSM89R0t2LMQN9NKgOuU6GuS4PSUP0lDhKmy6FqKw6RsoioDbco2HApx7xda82dx53esVFIrys5iKtkjriRY2jaeU43e6dQLtCm2UXwQtrXv3ZNZ5fG4rgdf%2FcJbgKcMZwHs9TN3iKzBLaW2WiHGbEM1kRx8iHL%2FB3UqXciaRRp0KpEGARB%2BQxxGu4NZbXts17MdVfTrr2AWil7KqTW34Ffm1jYj08%2FtFWZWdiIbkqYPKFAdjtCE5KWLech5kgAQchT1Ei0EGnh2j5U5%2FY3A%2BJ%2Bwz5mnq7XG7CaV08B1vrQl5qj3x5hIEmzUn1lVK%2FixOGnWBxaZDt2lpO2Fz%2Bb5YtvxhuD62%2FSPyaZzhQV%2FwViWS53m6jWmY1FX0qCb4N8g6WU1ZP8cQNYJ1%2F9Z6OldQ5idQqrfRL3%2F5Er5r%2FkpeMHL0IsLi6rTUsKgaH%2BDaJJ%2BTmPHMpXol20peRNk443xV1OcVG2sXTsFX5kUVw327TKwUFfWUgw1SVVvOgwni5GURbJLeT5tbyp0Ibk4Q1KnnscPOMNLRwcAGOqUBTVJN3TjbrMvE46YbBGLP58hBbJpcWE1s1pVm7gGLjV6cb5pnic6LHMpBfv%2FJNwZuhrek5uFabjx6gdT8nVrs5yl3NWcaPlKUJljd4UC%2FeXLKDdVIS9pXnU73uQdB%2FFe%2Fd0a8ttdg%2BAIRCPreaSPuwArtpbzdabkph0b3OiokHjo%2BbXFumAQntSh6r%2B8L7bfhRj2OkaCh5o%2BSjX4fMz6ayQcjVVnU&X-Amz-Signature=449e0604459803f54cfa5ea0a6da60b158653d4670d4af8ff60332289d5a8be2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
