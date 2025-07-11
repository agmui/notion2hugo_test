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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQOGZX27%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZfE12ZYSWrDvhIQv4QtG4gDqoIUIGL8nX17sb8oamAiBMnsIiCRW7%2BsMH96fKczoDd1iwszRij2cci5hLsNIAriqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm20aPEBH%2BzFYgbl9KtwDhGJwBMhn5GL%2BxDiB%2BzvXK3q%2B%2BIYGCbtMpanzGEyLvA6uzxuMivpgeTwooyuXDZb8uccd7GsOLFfie2QhAHHXrR1Ft23g2DgEBjyzIL2NEMTA8%2Bo%2FVaCVljp703O5Pm4p9K8A5aWC6gFlbbKco1ek3cHvpnQgyyjj52ObOXhro%2BFovlXeWKDyCVdT%2FD%2FxcNhfjVfdr6hSboGpgekWVcsJLlkdjljWn0Dmo4%2BmO0pT4DQ0g2Rs34yjzt1oJZ1GH9O2IcCMW%2BY7Mpzg0RlJWDWRnGmkjMgfT9RA1B%2BmjowwCTinI8M3S2gLACPdPF6Hk5tEERpN%2BRXNsolG1wjtNwNfkyMWVIEOZTUL8RBWWTnANYB3uwqSwAGKztUA79%2FqfJfCkNUqWZ7k6a5PWIuculHtM9hpQo2f%2FkYNV%2FzJQpOkREOGdQHR4mXdUTRqqZ82baG2ELL2jpGRkEUXLPEG2qWpBdg%2FF3aRuot%2ByJoh4swk2sz4DbZ7ywTjDegCQEcvXcU2OCGpEpU5vgHfQlsyFDo37x6jpI7R%2BR%2FYj1mXekwZIKRYJiPCA62pJ9bfQlIkd1JE7hhzeqoa8GKaQzWiFOcgkODVCS5i%2BVUI6G89ofVeNdZIEpQMOg6oiyorliQwufzBwwY6pgGw%2B%2BWJAkvtTvVDlCXMIs%2B1%2BDeTkDzKDS9%2F%2BgV1M7Gr%2BPRBLVapyoQgADBkZuMzbOYNLsCvwHo2OeNqiJcLWtMDbXSZxr9vOF1Jcjim0ezTbsXkXguGzAaORMrtYjJ1hdw%2FvACZVpa5YnWbQ0xo7R3OPi7hghMRMVuiO1OU1pO7WTMjgtPbiJs8%2FrO7SnPvi2FYdyFJ4CaQkBkqfRFNJ2HAFv5gunZ8&X-Amz-Signature=c3fe18e55b3c1d6b18a17b2c8367b47043b618a7b7f68ed1a951d4959b935094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQOGZX27%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZfE12ZYSWrDvhIQv4QtG4gDqoIUIGL8nX17sb8oamAiBMnsIiCRW7%2BsMH96fKczoDd1iwszRij2cci5hLsNIAriqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm20aPEBH%2BzFYgbl9KtwDhGJwBMhn5GL%2BxDiB%2BzvXK3q%2B%2BIYGCbtMpanzGEyLvA6uzxuMivpgeTwooyuXDZb8uccd7GsOLFfie2QhAHHXrR1Ft23g2DgEBjyzIL2NEMTA8%2Bo%2FVaCVljp703O5Pm4p9K8A5aWC6gFlbbKco1ek3cHvpnQgyyjj52ObOXhro%2BFovlXeWKDyCVdT%2FD%2FxcNhfjVfdr6hSboGpgekWVcsJLlkdjljWn0Dmo4%2BmO0pT4DQ0g2Rs34yjzt1oJZ1GH9O2IcCMW%2BY7Mpzg0RlJWDWRnGmkjMgfT9RA1B%2BmjowwCTinI8M3S2gLACPdPF6Hk5tEERpN%2BRXNsolG1wjtNwNfkyMWVIEOZTUL8RBWWTnANYB3uwqSwAGKztUA79%2FqfJfCkNUqWZ7k6a5PWIuculHtM9hpQo2f%2FkYNV%2FzJQpOkREOGdQHR4mXdUTRqqZ82baG2ELL2jpGRkEUXLPEG2qWpBdg%2FF3aRuot%2ByJoh4swk2sz4DbZ7ywTjDegCQEcvXcU2OCGpEpU5vgHfQlsyFDo37x6jpI7R%2BR%2FYj1mXekwZIKRYJiPCA62pJ9bfQlIkd1JE7hhzeqoa8GKaQzWiFOcgkODVCS5i%2BVUI6G89ofVeNdZIEpQMOg6oiyorliQwufzBwwY6pgGw%2B%2BWJAkvtTvVDlCXMIs%2B1%2BDeTkDzKDS9%2F%2BgV1M7Gr%2BPRBLVapyoQgADBkZuMzbOYNLsCvwHo2OeNqiJcLWtMDbXSZxr9vOF1Jcjim0ezTbsXkXguGzAaORMrtYjJ1hdw%2FvACZVpa5YnWbQ0xo7R3OPi7hghMRMVuiO1OU1pO7WTMjgtPbiJs8%2FrO7SnPvi2FYdyFJ4CaQkBkqfRFNJ2HAFv5gunZ8&X-Amz-Signature=a6abb61a317978e47cbaaf8f7e8db960d1f75dcf16fc4742f3b26c02d83b987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQOGZX27%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZfE12ZYSWrDvhIQv4QtG4gDqoIUIGL8nX17sb8oamAiBMnsIiCRW7%2BsMH96fKczoDd1iwszRij2cci5hLsNIAriqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm20aPEBH%2BzFYgbl9KtwDhGJwBMhn5GL%2BxDiB%2BzvXK3q%2B%2BIYGCbtMpanzGEyLvA6uzxuMivpgeTwooyuXDZb8uccd7GsOLFfie2QhAHHXrR1Ft23g2DgEBjyzIL2NEMTA8%2Bo%2FVaCVljp703O5Pm4p9K8A5aWC6gFlbbKco1ek3cHvpnQgyyjj52ObOXhro%2BFovlXeWKDyCVdT%2FD%2FxcNhfjVfdr6hSboGpgekWVcsJLlkdjljWn0Dmo4%2BmO0pT4DQ0g2Rs34yjzt1oJZ1GH9O2IcCMW%2BY7Mpzg0RlJWDWRnGmkjMgfT9RA1B%2BmjowwCTinI8M3S2gLACPdPF6Hk5tEERpN%2BRXNsolG1wjtNwNfkyMWVIEOZTUL8RBWWTnANYB3uwqSwAGKztUA79%2FqfJfCkNUqWZ7k6a5PWIuculHtM9hpQo2f%2FkYNV%2FzJQpOkREOGdQHR4mXdUTRqqZ82baG2ELL2jpGRkEUXLPEG2qWpBdg%2FF3aRuot%2ByJoh4swk2sz4DbZ7ywTjDegCQEcvXcU2OCGpEpU5vgHfQlsyFDo37x6jpI7R%2BR%2FYj1mXekwZIKRYJiPCA62pJ9bfQlIkd1JE7hhzeqoa8GKaQzWiFOcgkODVCS5i%2BVUI6G89ofVeNdZIEpQMOg6oiyorliQwufzBwwY6pgGw%2B%2BWJAkvtTvVDlCXMIs%2B1%2BDeTkDzKDS9%2F%2BgV1M7Gr%2BPRBLVapyoQgADBkZuMzbOYNLsCvwHo2OeNqiJcLWtMDbXSZxr9vOF1Jcjim0ezTbsXkXguGzAaORMrtYjJ1hdw%2FvACZVpa5YnWbQ0xo7R3OPi7hghMRMVuiO1OU1pO7WTMjgtPbiJs8%2FrO7SnPvi2FYdyFJ4CaQkBkqfRFNJ2HAFv5gunZ8&X-Amz-Signature=f2b064541ab2d8d2a29a0fd4447ed8b647cf6ea06a86e166ea9ea28d8758f6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
