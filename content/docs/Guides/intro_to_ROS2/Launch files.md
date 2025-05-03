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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ML3ZUF4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDqCLdCUJVZma04nPiwAChO38rtZCURx7o6Sk0gRzQplQIhAO44zFHNHVsdxHmYaOZ915bnUWmMhuj%2BbzQT7gYfT6v6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDhaEX3djg7l86eIq3ANvseZyqbYUcSfR3DBIN7aSXUvVWbFHtwfuMmX8VzhQT5d2x38NzMnD91py4jeIZFn6bZeN3Ps59yRHO7L65F2UBK66G00gx88tcGidX5UxQZrxG%2FxHeZ5OTIZOpWEM4zF1UZfBMWoeaX0ATZp0k%2FSLeUgmu673piWfMPIKta2kpMU6cAyKIyUS8YLxh1SPx9yFMe0vg2s29K0tPF9nrZZTKW%2FfF6Nq%2BDoNbD6rrtJ52hH%2BGSCDhpKX6%2F%2B3KssGdtt8Dq29%2FqU3N6Ti4Jt0fZntuzdlpM6k8KhZuCYixDwymPwXCVCgNyFsOL7zcHuExyxQgNZNEP7nvkAk9%2By3rNgT403%2Bt%2Fn8yPB7ty%2BjPeX3Uafz4AkaxdDc60hrjU9ppDROyOv9JzKgivOoNDBTBBFml6nJaBu6kevCJTt%2BbE6L0t4RZBkvrIdwUeK4rwUTsZ1JgnzGNhg6Eklz8YX%2BobNytHGXiL9l4DpfFpF229U9HUwa4a%2Fa1aFXFnFR4YJ%2BVCSPtj4eZM75dC5KJ6fdsmaJg3FMwRpn1qizGBqeMesYMEs7wPFl5LnvbkTySbkmKMCBSAGnp5TKyofFSxgrce2zIXItIPkKEV8KyQayCKsKha8pLhugAnZWNXnjAjDQhtbABjqkAbvNrf6Awgbm3DY7SuzLaYMHKkJTcf3Hpy65fQBbpeYHsyanNML7YFHenV0CIN7wZOCiRHRIMd9wiIMg2VRx%2FlRt%2F5j6Llg3J0xsbcIWqnbiee%2FSu7QcKGLwkEAiXtG5rxouWb%2B5VCU%2FkvbPmG%2BaAiCPyWW8OHUOfkBlgB0LIQSyL1yItC8uXZQ77CV%2FHclNrIgxPkeVbQ5iOaYdXOExVZ45yYnB&X-Amz-Signature=e333d7d1be58a04a3179584b9fe388716cabad6ef20c2fcb6d1a0cb53460110f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ML3ZUF4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDqCLdCUJVZma04nPiwAChO38rtZCURx7o6Sk0gRzQplQIhAO44zFHNHVsdxHmYaOZ915bnUWmMhuj%2BbzQT7gYfT6v6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDhaEX3djg7l86eIq3ANvseZyqbYUcSfR3DBIN7aSXUvVWbFHtwfuMmX8VzhQT5d2x38NzMnD91py4jeIZFn6bZeN3Ps59yRHO7L65F2UBK66G00gx88tcGidX5UxQZrxG%2FxHeZ5OTIZOpWEM4zF1UZfBMWoeaX0ATZp0k%2FSLeUgmu673piWfMPIKta2kpMU6cAyKIyUS8YLxh1SPx9yFMe0vg2s29K0tPF9nrZZTKW%2FfF6Nq%2BDoNbD6rrtJ52hH%2BGSCDhpKX6%2F%2B3KssGdtt8Dq29%2FqU3N6Ti4Jt0fZntuzdlpM6k8KhZuCYixDwymPwXCVCgNyFsOL7zcHuExyxQgNZNEP7nvkAk9%2By3rNgT403%2Bt%2Fn8yPB7ty%2BjPeX3Uafz4AkaxdDc60hrjU9ppDROyOv9JzKgivOoNDBTBBFml6nJaBu6kevCJTt%2BbE6L0t4RZBkvrIdwUeK4rwUTsZ1JgnzGNhg6Eklz8YX%2BobNytHGXiL9l4DpfFpF229U9HUwa4a%2Fa1aFXFnFR4YJ%2BVCSPtj4eZM75dC5KJ6fdsmaJg3FMwRpn1qizGBqeMesYMEs7wPFl5LnvbkTySbkmKMCBSAGnp5TKyofFSxgrce2zIXItIPkKEV8KyQayCKsKha8pLhugAnZWNXnjAjDQhtbABjqkAbvNrf6Awgbm3DY7SuzLaYMHKkJTcf3Hpy65fQBbpeYHsyanNML7YFHenV0CIN7wZOCiRHRIMd9wiIMg2VRx%2FlRt%2F5j6Llg3J0xsbcIWqnbiee%2FSu7QcKGLwkEAiXtG5rxouWb%2B5VCU%2FkvbPmG%2BaAiCPyWW8OHUOfkBlgB0LIQSyL1yItC8uXZQ77CV%2FHclNrIgxPkeVbQ5iOaYdXOExVZ45yYnB&X-Amz-Signature=fb65d05c35ff0494bc62b3a04a0acf3602fc44ad471d0332e26f0ca799255cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ML3ZUF4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDqCLdCUJVZma04nPiwAChO38rtZCURx7o6Sk0gRzQplQIhAO44zFHNHVsdxHmYaOZ915bnUWmMhuj%2BbzQT7gYfT6v6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDhaEX3djg7l86eIq3ANvseZyqbYUcSfR3DBIN7aSXUvVWbFHtwfuMmX8VzhQT5d2x38NzMnD91py4jeIZFn6bZeN3Ps59yRHO7L65F2UBK66G00gx88tcGidX5UxQZrxG%2FxHeZ5OTIZOpWEM4zF1UZfBMWoeaX0ATZp0k%2FSLeUgmu673piWfMPIKta2kpMU6cAyKIyUS8YLxh1SPx9yFMe0vg2s29K0tPF9nrZZTKW%2FfF6Nq%2BDoNbD6rrtJ52hH%2BGSCDhpKX6%2F%2B3KssGdtt8Dq29%2FqU3N6Ti4Jt0fZntuzdlpM6k8KhZuCYixDwymPwXCVCgNyFsOL7zcHuExyxQgNZNEP7nvkAk9%2By3rNgT403%2Bt%2Fn8yPB7ty%2BjPeX3Uafz4AkaxdDc60hrjU9ppDROyOv9JzKgivOoNDBTBBFml6nJaBu6kevCJTt%2BbE6L0t4RZBkvrIdwUeK4rwUTsZ1JgnzGNhg6Eklz8YX%2BobNytHGXiL9l4DpfFpF229U9HUwa4a%2Fa1aFXFnFR4YJ%2BVCSPtj4eZM75dC5KJ6fdsmaJg3FMwRpn1qizGBqeMesYMEs7wPFl5LnvbkTySbkmKMCBSAGnp5TKyofFSxgrce2zIXItIPkKEV8KyQayCKsKha8pLhugAnZWNXnjAjDQhtbABjqkAbvNrf6Awgbm3DY7SuzLaYMHKkJTcf3Hpy65fQBbpeYHsyanNML7YFHenV0CIN7wZOCiRHRIMd9wiIMg2VRx%2FlRt%2F5j6Llg3J0xsbcIWqnbiee%2FSu7QcKGLwkEAiXtG5rxouWb%2B5VCU%2FkvbPmG%2BaAiCPyWW8OHUOfkBlgB0LIQSyL1yItC8uXZQ77CV%2FHclNrIgxPkeVbQ5iOaYdXOExVZ45yYnB&X-Amz-Signature=05a63692e88e4474e4fad337f2dbd0bd397c26eee121c1fa634d598654b79a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
