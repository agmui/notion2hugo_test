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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQE77O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCh0YWgjK2PRlmkl3qCWZ6Ilc11iNhR%2BpuwZInJ9U01PQIgCE8p%2BM%2FwYVCwOFZB8vjpnJd2gVZdwmPkMT%2FwzR0YjLUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS9gNY7lN4MNH7AJCrcA2EXW5NzmSJpdwkOgtQSw1z2rWD4JCWaDr4kDo7p%2FKkjhd%2B%2FToKqiHS58RihJ3Xt2JkJDGaMHKsCi2TiaeAQiMnZV1lpMg7vS095Q3d2pCJ5WglRblgQL3xoLJE0PkOdNl%2BDyXsdT7z7bJvGskgqE%2B55A8Y8y5PUVtIbRNoBRUtT8L9srkGZnJS5jCubXg8KXT447FL4a48y1yIz5MKaHgxUXV%2FbrfoVkjrW6k5Njf2%2Fj4FIsGPvjxqlYs0s9npiSRA9K7ozvT00APhkZoguNIP0S8CDdLJqlov3d9SDqaPp3aTOl7%2Fn2K%2FzZoL7svijw6gIJGbL4lYigQjz%2FhB6BbMDdSGpoCTBgF%2Fno5c47AY3aDytUlp5kkV1bnZZa5ZjuxcjHmKVJFHGasCygGDc29cQ4XX0Lh%2Brt6v7qK%2BEJ0RnU8reF%2BTKqLyJh4fHdfl%2FS7%2F2GCWdh3AbkaWsPt5GQVXmCQq77Xq2zRXOk2JXOgExipF%2FQzCSuEYG3gfC%2BYb5F9zDl4KY59Zv4F1v0uOHfki92s4zBbHO6w%2F1tL7ytz%2BVM8k7KLqWR4cbxjcvZjlt%2BXfCe5YaLeC5C1P9Xbg%2BhdGZAXNQLkQNftwALv8gIBiGtTSzf%2FQF2d8kUirRMK38t78GOqUBDdZoim4sYZR48Y%2Fywz2Ujc4id8uvtJUjzGR5nbvzscreO8nQ%2Bnix0FA0epLu3CPNBVzCCgK2go3Cnt1gPwXy6w5ZnQR30VAzTE1x%2BsBhaK1pl5i6vGLQtX8bqacFMwJRz8tqjTIoGjBuKyL%2FCiIpKrOQnZ9MRxNLLBH%2FCR8HxnrMaWFNVoY%2B4I1R3o6Qz3wBM8ocYMNXilflNrr5PB7juIgXFTi8&X-Amz-Signature=eb49e452bb87a7666aa7cad975eba5a29d7e704f3fd9daba896391fa65934e72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQE77O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCh0YWgjK2PRlmkl3qCWZ6Ilc11iNhR%2BpuwZInJ9U01PQIgCE8p%2BM%2FwYVCwOFZB8vjpnJd2gVZdwmPkMT%2FwzR0YjLUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS9gNY7lN4MNH7AJCrcA2EXW5NzmSJpdwkOgtQSw1z2rWD4JCWaDr4kDo7p%2FKkjhd%2B%2FToKqiHS58RihJ3Xt2JkJDGaMHKsCi2TiaeAQiMnZV1lpMg7vS095Q3d2pCJ5WglRblgQL3xoLJE0PkOdNl%2BDyXsdT7z7bJvGskgqE%2B55A8Y8y5PUVtIbRNoBRUtT8L9srkGZnJS5jCubXg8KXT447FL4a48y1yIz5MKaHgxUXV%2FbrfoVkjrW6k5Njf2%2Fj4FIsGPvjxqlYs0s9npiSRA9K7ozvT00APhkZoguNIP0S8CDdLJqlov3d9SDqaPp3aTOl7%2Fn2K%2FzZoL7svijw6gIJGbL4lYigQjz%2FhB6BbMDdSGpoCTBgF%2Fno5c47AY3aDytUlp5kkV1bnZZa5ZjuxcjHmKVJFHGasCygGDc29cQ4XX0Lh%2Brt6v7qK%2BEJ0RnU8reF%2BTKqLyJh4fHdfl%2FS7%2F2GCWdh3AbkaWsPt5GQVXmCQq77Xq2zRXOk2JXOgExipF%2FQzCSuEYG3gfC%2BYb5F9zDl4KY59Zv4F1v0uOHfki92s4zBbHO6w%2F1tL7ytz%2BVM8k7KLqWR4cbxjcvZjlt%2BXfCe5YaLeC5C1P9Xbg%2BhdGZAXNQLkQNftwALv8gIBiGtTSzf%2FQF2d8kUirRMK38t78GOqUBDdZoim4sYZR48Y%2Fywz2Ujc4id8uvtJUjzGR5nbvzscreO8nQ%2Bnix0FA0epLu3CPNBVzCCgK2go3Cnt1gPwXy6w5ZnQR30VAzTE1x%2BsBhaK1pl5i6vGLQtX8bqacFMwJRz8tqjTIoGjBuKyL%2FCiIpKrOQnZ9MRxNLLBH%2FCR8HxnrMaWFNVoY%2B4I1R3o6Qz3wBM8ocYMNXilflNrr5PB7juIgXFTi8&X-Amz-Signature=83b44d401df0e4c1f821abb667a6cab1958bffb5b8a4f2682bc7001f90d0c530&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQE77O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCh0YWgjK2PRlmkl3qCWZ6Ilc11iNhR%2BpuwZInJ9U01PQIgCE8p%2BM%2FwYVCwOFZB8vjpnJd2gVZdwmPkMT%2FwzR0YjLUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS9gNY7lN4MNH7AJCrcA2EXW5NzmSJpdwkOgtQSw1z2rWD4JCWaDr4kDo7p%2FKkjhd%2B%2FToKqiHS58RihJ3Xt2JkJDGaMHKsCi2TiaeAQiMnZV1lpMg7vS095Q3d2pCJ5WglRblgQL3xoLJE0PkOdNl%2BDyXsdT7z7bJvGskgqE%2B55A8Y8y5PUVtIbRNoBRUtT8L9srkGZnJS5jCubXg8KXT447FL4a48y1yIz5MKaHgxUXV%2FbrfoVkjrW6k5Njf2%2Fj4FIsGPvjxqlYs0s9npiSRA9K7ozvT00APhkZoguNIP0S8CDdLJqlov3d9SDqaPp3aTOl7%2Fn2K%2FzZoL7svijw6gIJGbL4lYigQjz%2FhB6BbMDdSGpoCTBgF%2Fno5c47AY3aDytUlp5kkV1bnZZa5ZjuxcjHmKVJFHGasCygGDc29cQ4XX0Lh%2Brt6v7qK%2BEJ0RnU8reF%2BTKqLyJh4fHdfl%2FS7%2F2GCWdh3AbkaWsPt5GQVXmCQq77Xq2zRXOk2JXOgExipF%2FQzCSuEYG3gfC%2BYb5F9zDl4KY59Zv4F1v0uOHfki92s4zBbHO6w%2F1tL7ytz%2BVM8k7KLqWR4cbxjcvZjlt%2BXfCe5YaLeC5C1P9Xbg%2BhdGZAXNQLkQNftwALv8gIBiGtTSzf%2FQF2d8kUirRMK38t78GOqUBDdZoim4sYZR48Y%2Fywz2Ujc4id8uvtJUjzGR5nbvzscreO8nQ%2Bnix0FA0epLu3CPNBVzCCgK2go3Cnt1gPwXy6w5ZnQR30VAzTE1x%2BsBhaK1pl5i6vGLQtX8bqacFMwJRz8tqjTIoGjBuKyL%2FCiIpKrOQnZ9MRxNLLBH%2FCR8HxnrMaWFNVoY%2B4I1R3o6Qz3wBM8ocYMNXilflNrr5PB7juIgXFTi8&X-Amz-Signature=6e6720cdfe1f74b94b4e854c7bdba34436c259e6a858c3cdd7effcc312e4e798&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
