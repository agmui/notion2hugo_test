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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEKBTHB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYhrC8qYCB5vVvbGlwPNZfWsWnwxe4OrfCzMNDPPQ%2BjAiEAmA9LuhBq9MZTNQo6%2BI8Jt%2B3VzZyI8a4FJGant%2FDzEcoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKqeA68aU%2F1yQ%2FfzircAzisWodJNRg4Lp9SF%2BjD7iAZCfMvXExmh4%2Fz9GehZV1PhFPqEztcQnemHfqWUJX%2FyaaR6oHBD9K1eap7A%2FttzuUCrWIdat%2B2Jx4ZPsFZkQ0%2FNuyMNgCs1qhhKie%2BcyEy5x2xaIo0cOvlQ3Jq2zcbgqLPUfy5xi%2Bq22oo%2Ft5wP7yvlr1HzsdXgRG3rIwXd6FXGc7R0XtXwk9vVezAx8r6lgfGjFi%2BE0gpjgxw3RThcEqZD95uUe844OkKKVIrf6jPY%2Fkmm52ugaARajxu6Sdasi%2BfM3crV05TnhqBzkrLOwC8A096Paqa6SZGORGfE5uLB0uxhibTw1AlCNrwFHgiKt%2FyTEXzZggY9xu%2FZFrxyLQ%2FCuGs6aVMh15cy3GHQyBiL7IBOiwjxI1%2BkoxHzYrOTOPn5FsaVJIzC8yUwjZtKGPvaaNMKEg0Q5DxjyskLM4gy7iB8zl2Cr7UFevXwstRxjAMYVLU1c3bMLAgmOYjzAz2lSX95TnxGB2nHWNWa53QftmO3OCSrwcrqMVVfZo4qJpre5tHuxmEzfg%2FO%2FYTVldoHMar3HmBiTKS9%2Bb9iSg5So2QEfjnkoZo73%2FUKUR6GCirrjKnQ4vnPt1ZcmR%2F60ICiadzP7NEzA4lKMBaMOfDkMMGOqUBKJt%2BqLaOXA05bhQUPupliQ%2FPtWy5m00pPNIvv1%2FGyPhOAdNHY%2BQoG4pW%2F6i9aWfh%2FG00A08TD7KloNEO3MG5CCgJQvqYz2vH%2BEz1TzoZgOJDhf8WgDCLRwfWBeYhYxPI6zbUgY%2B0rOUsu3%2F2yhkLXWJOBta%2BALKX1YvKIFPoJwb6XJJs0G6JO6QHSfhN1WVMtvi7010wPtPYgV8Qrk1fC69w9zTs&X-Amz-Signature=91d4db046081189c84e332d404cf42f747bf2d91df4812cfe0da2f616889ff53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEKBTHB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYhrC8qYCB5vVvbGlwPNZfWsWnwxe4OrfCzMNDPPQ%2BjAiEAmA9LuhBq9MZTNQo6%2BI8Jt%2B3VzZyI8a4FJGant%2FDzEcoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKqeA68aU%2F1yQ%2FfzircAzisWodJNRg4Lp9SF%2BjD7iAZCfMvXExmh4%2Fz9GehZV1PhFPqEztcQnemHfqWUJX%2FyaaR6oHBD9K1eap7A%2FttzuUCrWIdat%2B2Jx4ZPsFZkQ0%2FNuyMNgCs1qhhKie%2BcyEy5x2xaIo0cOvlQ3Jq2zcbgqLPUfy5xi%2Bq22oo%2Ft5wP7yvlr1HzsdXgRG3rIwXd6FXGc7R0XtXwk9vVezAx8r6lgfGjFi%2BE0gpjgxw3RThcEqZD95uUe844OkKKVIrf6jPY%2Fkmm52ugaARajxu6Sdasi%2BfM3crV05TnhqBzkrLOwC8A096Paqa6SZGORGfE5uLB0uxhibTw1AlCNrwFHgiKt%2FyTEXzZggY9xu%2FZFrxyLQ%2FCuGs6aVMh15cy3GHQyBiL7IBOiwjxI1%2BkoxHzYrOTOPn5FsaVJIzC8yUwjZtKGPvaaNMKEg0Q5DxjyskLM4gy7iB8zl2Cr7UFevXwstRxjAMYVLU1c3bMLAgmOYjzAz2lSX95TnxGB2nHWNWa53QftmO3OCSrwcrqMVVfZo4qJpre5tHuxmEzfg%2FO%2FYTVldoHMar3HmBiTKS9%2Bb9iSg5So2QEfjnkoZo73%2FUKUR6GCirrjKnQ4vnPt1ZcmR%2F60ICiadzP7NEzA4lKMBaMOfDkMMGOqUBKJt%2BqLaOXA05bhQUPupliQ%2FPtWy5m00pPNIvv1%2FGyPhOAdNHY%2BQoG4pW%2F6i9aWfh%2FG00A08TD7KloNEO3MG5CCgJQvqYz2vH%2BEz1TzoZgOJDhf8WgDCLRwfWBeYhYxPI6zbUgY%2B0rOUsu3%2F2yhkLXWJOBta%2BALKX1YvKIFPoJwb6XJJs0G6JO6QHSfhN1WVMtvi7010wPtPYgV8Qrk1fC69w9zTs&X-Amz-Signature=a067089d6925afa62f7ecfad9881de087a3e94f3283fd55864db0bbc06f4ae84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEKBTHB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYhrC8qYCB5vVvbGlwPNZfWsWnwxe4OrfCzMNDPPQ%2BjAiEAmA9LuhBq9MZTNQo6%2BI8Jt%2B3VzZyI8a4FJGant%2FDzEcoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKqeA68aU%2F1yQ%2FfzircAzisWodJNRg4Lp9SF%2BjD7iAZCfMvXExmh4%2Fz9GehZV1PhFPqEztcQnemHfqWUJX%2FyaaR6oHBD9K1eap7A%2FttzuUCrWIdat%2B2Jx4ZPsFZkQ0%2FNuyMNgCs1qhhKie%2BcyEy5x2xaIo0cOvlQ3Jq2zcbgqLPUfy5xi%2Bq22oo%2Ft5wP7yvlr1HzsdXgRG3rIwXd6FXGc7R0XtXwk9vVezAx8r6lgfGjFi%2BE0gpjgxw3RThcEqZD95uUe844OkKKVIrf6jPY%2Fkmm52ugaARajxu6Sdasi%2BfM3crV05TnhqBzkrLOwC8A096Paqa6SZGORGfE5uLB0uxhibTw1AlCNrwFHgiKt%2FyTEXzZggY9xu%2FZFrxyLQ%2FCuGs6aVMh15cy3GHQyBiL7IBOiwjxI1%2BkoxHzYrOTOPn5FsaVJIzC8yUwjZtKGPvaaNMKEg0Q5DxjyskLM4gy7iB8zl2Cr7UFevXwstRxjAMYVLU1c3bMLAgmOYjzAz2lSX95TnxGB2nHWNWa53QftmO3OCSrwcrqMVVfZo4qJpre5tHuxmEzfg%2FO%2FYTVldoHMar3HmBiTKS9%2Bb9iSg5So2QEfjnkoZo73%2FUKUR6GCirrjKnQ4vnPt1ZcmR%2F60ICiadzP7NEzA4lKMBaMOfDkMMGOqUBKJt%2BqLaOXA05bhQUPupliQ%2FPtWy5m00pPNIvv1%2FGyPhOAdNHY%2BQoG4pW%2F6i9aWfh%2FG00A08TD7KloNEO3MG5CCgJQvqYz2vH%2BEz1TzoZgOJDhf8WgDCLRwfWBeYhYxPI6zbUgY%2B0rOUsu3%2F2yhkLXWJOBta%2BALKX1YvKIFPoJwb6XJJs0G6JO6QHSfhN1WVMtvi7010wPtPYgV8Qrk1fC69w9zTs&X-Amz-Signature=6bde8131ef2577782bfe061c430b279405b7374d54bea2423da8a2fe5bfe833b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
