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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57P6VRG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa8hUsuW%2Bhcp%2FMjTvxlYbjT%2BmzVuvTfLs4xyPn0fcg1AiEA%2FCf627zLUfBovUF6d2OxWRb0sy8QiovoCm7lY56suKIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMFZTXdcoIJL9rvHUSrcA9dytV5eYwyjT6e0glhLSmxOeKTFHWL6CilWAkwj87y8p85h2Vjt7ckGWPxQZLOIx5Kov%2BebMKwkfx3WeBPPTk0qmvNB49feQE%2BQxU89ymfelLayDHdgWT0xqUkyM%2F8tEYji788SNQEPN%2BMKsQisGw73iAuBKD4MoUA7jZwAUTnq%2FtpM8q5Iu61CTDGZ6Yh8XZSnDtfbOtGZc7xzYXMISzmQ4YScuKfKwIG1pjqmLZ66wj%2Fs5zWwV1MfxuNCSbbahTpu%2BCmiC72%2FBOxUgraOmovxuX7qZTDz6Ecw%2BhbvyUF%2BkvyfN6VgEa8jizkkM25c6AjZWXzWYReUzzH4z114mRplSEjNKjBGcJal7tD9aE%2Bq9cAIBy5ZR8rH8k6BdPvOFqii5IOw0yYkiGDEyVfnThB6e%2FTtlyDpZuZLUka7F6gMec2ljNBGK%2FdnMFckpxArdowTI76USyCZfq3AcE%2BQg8nsacsgD%2Fu76c%2BTWM59AmrtHaFp%2FFCRh29zZ991wKGMrcQD48Ut8T0LJHGhO8zPWIF7hdbDpi%2FYkRtVyFEOEbe%2BA8KN%2FXHrP96uU2Rfh8bTo0yfl7mikAoZL6%2FMtnRCbcBOy5YSy80kGx6YYAEx7BBn8KD7oFcT5WFYJkMIMKLtm8EGOqUB3jifJwsTz0ASVm2EDpwShbGKBSzh4EPRAbA9dJNRYroS%2FDNcvHpX%2F3e2XwuH8CpY%2BB%2FkLlEyf1JjSDVgHub%2F0RzQZZraCGlDLIdy%2Bxf%2BR3TlRpFKhu65LxKoVghS7BiuIMXrnDteZTKNntIca3Xt8GaZRCpvjJL%2BiElyfQsbcIHE4YEbsENaoR0Gg9RW5zKeFVUrmMQbKz8VXXG1X89wSJBx9x3%2F&X-Amz-Signature=59a40ed8cf2f7890c0a312a5e8d0973e8a2d1aedfc6369ce7a4e6802ecf5c0da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57P6VRG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa8hUsuW%2Bhcp%2FMjTvxlYbjT%2BmzVuvTfLs4xyPn0fcg1AiEA%2FCf627zLUfBovUF6d2OxWRb0sy8QiovoCm7lY56suKIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMFZTXdcoIJL9rvHUSrcA9dytV5eYwyjT6e0glhLSmxOeKTFHWL6CilWAkwj87y8p85h2Vjt7ckGWPxQZLOIx5Kov%2BebMKwkfx3WeBPPTk0qmvNB49feQE%2BQxU89ymfelLayDHdgWT0xqUkyM%2F8tEYji788SNQEPN%2BMKsQisGw73iAuBKD4MoUA7jZwAUTnq%2FtpM8q5Iu61CTDGZ6Yh8XZSnDtfbOtGZc7xzYXMISzmQ4YScuKfKwIG1pjqmLZ66wj%2Fs5zWwV1MfxuNCSbbahTpu%2BCmiC72%2FBOxUgraOmovxuX7qZTDz6Ecw%2BhbvyUF%2BkvyfN6VgEa8jizkkM25c6AjZWXzWYReUzzH4z114mRplSEjNKjBGcJal7tD9aE%2Bq9cAIBy5ZR8rH8k6BdPvOFqii5IOw0yYkiGDEyVfnThB6e%2FTtlyDpZuZLUka7F6gMec2ljNBGK%2FdnMFckpxArdowTI76USyCZfq3AcE%2BQg8nsacsgD%2Fu76c%2BTWM59AmrtHaFp%2FFCRh29zZ991wKGMrcQD48Ut8T0LJHGhO8zPWIF7hdbDpi%2FYkRtVyFEOEbe%2BA8KN%2FXHrP96uU2Rfh8bTo0yfl7mikAoZL6%2FMtnRCbcBOy5YSy80kGx6YYAEx7BBn8KD7oFcT5WFYJkMIMKLtm8EGOqUB3jifJwsTz0ASVm2EDpwShbGKBSzh4EPRAbA9dJNRYroS%2FDNcvHpX%2F3e2XwuH8CpY%2BB%2FkLlEyf1JjSDVgHub%2F0RzQZZraCGlDLIdy%2Bxf%2BR3TlRpFKhu65LxKoVghS7BiuIMXrnDteZTKNntIca3Xt8GaZRCpvjJL%2BiElyfQsbcIHE4YEbsENaoR0Gg9RW5zKeFVUrmMQbKz8VXXG1X89wSJBx9x3%2F&X-Amz-Signature=bb53cb893f587955dbaeb62b4e6e51a6a718d24292c17d069411e67ad3d03e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57P6VRG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa8hUsuW%2Bhcp%2FMjTvxlYbjT%2BmzVuvTfLs4xyPn0fcg1AiEA%2FCf627zLUfBovUF6d2OxWRb0sy8QiovoCm7lY56suKIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMFZTXdcoIJL9rvHUSrcA9dytV5eYwyjT6e0glhLSmxOeKTFHWL6CilWAkwj87y8p85h2Vjt7ckGWPxQZLOIx5Kov%2BebMKwkfx3WeBPPTk0qmvNB49feQE%2BQxU89ymfelLayDHdgWT0xqUkyM%2F8tEYji788SNQEPN%2BMKsQisGw73iAuBKD4MoUA7jZwAUTnq%2FtpM8q5Iu61CTDGZ6Yh8XZSnDtfbOtGZc7xzYXMISzmQ4YScuKfKwIG1pjqmLZ66wj%2Fs5zWwV1MfxuNCSbbahTpu%2BCmiC72%2FBOxUgraOmovxuX7qZTDz6Ecw%2BhbvyUF%2BkvyfN6VgEa8jizkkM25c6AjZWXzWYReUzzH4z114mRplSEjNKjBGcJal7tD9aE%2Bq9cAIBy5ZR8rH8k6BdPvOFqii5IOw0yYkiGDEyVfnThB6e%2FTtlyDpZuZLUka7F6gMec2ljNBGK%2FdnMFckpxArdowTI76USyCZfq3AcE%2BQg8nsacsgD%2Fu76c%2BTWM59AmrtHaFp%2FFCRh29zZ991wKGMrcQD48Ut8T0LJHGhO8zPWIF7hdbDpi%2FYkRtVyFEOEbe%2BA8KN%2FXHrP96uU2Rfh8bTo0yfl7mikAoZL6%2FMtnRCbcBOy5YSy80kGx6YYAEx7BBn8KD7oFcT5WFYJkMIMKLtm8EGOqUB3jifJwsTz0ASVm2EDpwShbGKBSzh4EPRAbA9dJNRYroS%2FDNcvHpX%2F3e2XwuH8CpY%2BB%2FkLlEyf1JjSDVgHub%2F0RzQZZraCGlDLIdy%2Bxf%2BR3TlRpFKhu65LxKoVghS7BiuIMXrnDteZTKNntIca3Xt8GaZRCpvjJL%2BiElyfQsbcIHE4YEbsENaoR0Gg9RW5zKeFVUrmMQbKz8VXXG1X89wSJBx9x3%2F&X-Amz-Signature=50d2b06528cd6f603c30653e4f684e2d188f45e4aacc511d94eaed8524f2661f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
