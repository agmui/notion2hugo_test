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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRCUEYR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8yn7bI7rnc70SP6FNS%2FMEK59mxRXkOw0FFEnCYZydiAiEA5dTaPw9fupJIq%2FRBxJEkJ%2FGNJhYMifoKuXKSFq3gC%2FAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKVYPJ5BjGLyi%2FXHVyrcA9L1MPO7pJBP9G%2B2pZr570877I7PscwHysSn%2BJ9ghlhLHaXO873tDFqAjGZMCYjB90Zx08GW6ybIuX11IUN7S%2BctlTcQ8%2F0AAPAvGJ4JdFARcua9Og6y6Sgq2IHPlRkhwSmQOwS9cuIaFmCpA8PiIIy2pnFT%2FUzqmapt76FckzpcA5PjfjpcjW8cbpJ7abHk7AFEv6pytH800UYo7bQAAtgRaJBQALOjPuVcT%2Fo%2BRSWIgG00WCJY7ll%2FB2vPZuS56Q8O5c8vEgu6D3iEWVbZHoTxlswhH4LaEF1NciszImHtPzvy041vB%2Fe70pduzNMifgysKkYMrK87FM%2ByYOyeIgGLIzAWdpp3jrsRKaNXEWyOZaVnSQkMez2nTErZeWgECCK4n3FZxVvVASVD6yqStuaAtBgoOT6iEEFeD1qPy5BlrSFVMoYuu2znqROUG8YMiBISn9YHzNytUKzgz4vTMD6Tgzz9gfBEPhtlAQ8hpHeyoDAiApBLnAXOvtKr024mao31jJQPD48ZU%2FHlupAXYPgYJR4DVrXc%2BbJQM77Ev1c0JhCNjZn9kGKBqmJjLGr4aRcZjtOlPcv7E8yaMRD3sA%2Fq44X1UEZPqV8MFRAPv21qOHb2i0zou4fc6dIkMMnW%2FL8GOqUBoaBiSoehsoMpRDiE21NPIdrZFZPtM8j611gFghVaK2PW9uHnzQcLgxAFi8f3UxTFyHDqMlLJoZHDYK9uN2dCcPVfrBXfP%2BtId%2F8ZA04DTrtqVcFSPs%2FufuIeIwuvGdUded0hjs3rJlRxWVksBejzhHeCfVAS5XHMJUdEY2UXlF3GMWAYf3FEsUk%2F3V%2BsjDThTjypaqkLtnZHG%2B9qhEYEnUYwH5qk&X-Amz-Signature=de9d4efb6b0cc7fd7c358b42add25d38599d9ddb381f5198a8c148f115203fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRCUEYR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8yn7bI7rnc70SP6FNS%2FMEK59mxRXkOw0FFEnCYZydiAiEA5dTaPw9fupJIq%2FRBxJEkJ%2FGNJhYMifoKuXKSFq3gC%2FAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKVYPJ5BjGLyi%2FXHVyrcA9L1MPO7pJBP9G%2B2pZr570877I7PscwHysSn%2BJ9ghlhLHaXO873tDFqAjGZMCYjB90Zx08GW6ybIuX11IUN7S%2BctlTcQ8%2F0AAPAvGJ4JdFARcua9Og6y6Sgq2IHPlRkhwSmQOwS9cuIaFmCpA8PiIIy2pnFT%2FUzqmapt76FckzpcA5PjfjpcjW8cbpJ7abHk7AFEv6pytH800UYo7bQAAtgRaJBQALOjPuVcT%2Fo%2BRSWIgG00WCJY7ll%2FB2vPZuS56Q8O5c8vEgu6D3iEWVbZHoTxlswhH4LaEF1NciszImHtPzvy041vB%2Fe70pduzNMifgysKkYMrK87FM%2ByYOyeIgGLIzAWdpp3jrsRKaNXEWyOZaVnSQkMez2nTErZeWgECCK4n3FZxVvVASVD6yqStuaAtBgoOT6iEEFeD1qPy5BlrSFVMoYuu2znqROUG8YMiBISn9YHzNytUKzgz4vTMD6Tgzz9gfBEPhtlAQ8hpHeyoDAiApBLnAXOvtKr024mao31jJQPD48ZU%2FHlupAXYPgYJR4DVrXc%2BbJQM77Ev1c0JhCNjZn9kGKBqmJjLGr4aRcZjtOlPcv7E8yaMRD3sA%2Fq44X1UEZPqV8MFRAPv21qOHb2i0zou4fc6dIkMMnW%2FL8GOqUBoaBiSoehsoMpRDiE21NPIdrZFZPtM8j611gFghVaK2PW9uHnzQcLgxAFi8f3UxTFyHDqMlLJoZHDYK9uN2dCcPVfrBXfP%2BtId%2F8ZA04DTrtqVcFSPs%2FufuIeIwuvGdUded0hjs3rJlRxWVksBejzhHeCfVAS5XHMJUdEY2UXlF3GMWAYf3FEsUk%2F3V%2BsjDThTjypaqkLtnZHG%2B9qhEYEnUYwH5qk&X-Amz-Signature=6d203a02a5c0080927db9227e33db637e3a2ecb6cc843be1f35a996085673e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRCUEYR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8yn7bI7rnc70SP6FNS%2FMEK59mxRXkOw0FFEnCYZydiAiEA5dTaPw9fupJIq%2FRBxJEkJ%2FGNJhYMifoKuXKSFq3gC%2FAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKVYPJ5BjGLyi%2FXHVyrcA9L1MPO7pJBP9G%2B2pZr570877I7PscwHysSn%2BJ9ghlhLHaXO873tDFqAjGZMCYjB90Zx08GW6ybIuX11IUN7S%2BctlTcQ8%2F0AAPAvGJ4JdFARcua9Og6y6Sgq2IHPlRkhwSmQOwS9cuIaFmCpA8PiIIy2pnFT%2FUzqmapt76FckzpcA5PjfjpcjW8cbpJ7abHk7AFEv6pytH800UYo7bQAAtgRaJBQALOjPuVcT%2Fo%2BRSWIgG00WCJY7ll%2FB2vPZuS56Q8O5c8vEgu6D3iEWVbZHoTxlswhH4LaEF1NciszImHtPzvy041vB%2Fe70pduzNMifgysKkYMrK87FM%2ByYOyeIgGLIzAWdpp3jrsRKaNXEWyOZaVnSQkMez2nTErZeWgECCK4n3FZxVvVASVD6yqStuaAtBgoOT6iEEFeD1qPy5BlrSFVMoYuu2znqROUG8YMiBISn9YHzNytUKzgz4vTMD6Tgzz9gfBEPhtlAQ8hpHeyoDAiApBLnAXOvtKr024mao31jJQPD48ZU%2FHlupAXYPgYJR4DVrXc%2BbJQM77Ev1c0JhCNjZn9kGKBqmJjLGr4aRcZjtOlPcv7E8yaMRD3sA%2Fq44X1UEZPqV8MFRAPv21qOHb2i0zou4fc6dIkMMnW%2FL8GOqUBoaBiSoehsoMpRDiE21NPIdrZFZPtM8j611gFghVaK2PW9uHnzQcLgxAFi8f3UxTFyHDqMlLJoZHDYK9uN2dCcPVfrBXfP%2BtId%2F8ZA04DTrtqVcFSPs%2FufuIeIwuvGdUded0hjs3rJlRxWVksBejzhHeCfVAS5XHMJUdEY2UXlF3GMWAYf3FEsUk%2F3V%2BsjDThTjypaqkLtnZHG%2B9qhEYEnUYwH5qk&X-Amz-Signature=456a15cf5f88be67cbca3286b94bacd067c4098edbbe06a044de6833aa3113f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
