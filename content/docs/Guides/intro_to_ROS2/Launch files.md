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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWYRQKQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCSnAWyPF9xfYAJarGv1OzVRpgXaDZAinyhD%2B3WmdQ5PQIgK75EM4K%2BUDW5SlPw37A2wSrQyRh9tdcTVYYxG5d5dBYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJO1SfLWiPh7bftcGSrcA03LIVwAM7bpMPDmXhPM0hau0GHS%2Fi%2FLx%2B5Xr1PyBRHKzPF6PzJ130K6c59aFvE4jUoFajaYs3L8L1Pkz2V%2FJC3GterSqwyKLS3rF1bU6z7l%2BsshbGz6gqNl8hPo2E4hGRu9wng2%2FJcAwHynNMVEHYZ%2Fz3%2BYs5uY3GRptIpXRT3YYxzNhW8OLb99nfle1EZIcUysBamrcvY4JFVTLimL%2Fudk7N0VOv%2BKCsPedAbEkAJcDEenayqc%2BQRSfvslCjdaA77fi%2B%2B3rK1MElY1wA5bDZyc6n3pzClQ9PkdijnKnLJFOMz9LFlPAcJaJJ0ePl9H8knKSeJmNRj0asGWZJLgskH4sj1TR4kLm7iXENjdBWG0k4ggINqIn5mcZEcwiKeK5V5%2BAq%2FN6e%2BntrSCVNDhYNGqCYiVIEpGpLahOEDfl5qWDnAcdAyUGRYzNkzcNVBc4a8kup4lSGIy07Myzwu1liYUFjszPYfk9mIyIQMzcLt7ulydT4U1zfbm51xjV8D2a6xJ2VJ0Zj6I2JLwVBQjNBwDt60UgrLABbJjmnHeSEawc6g9aALFjwT1WPfn6ORSgJyh4OXZAsPUS1fPW%2FVR2U0v5Gx6wEEe%2FlYg3PrWdM3aaiVtgnJWR2Kd2662MOyegMIGOqUBFFeE3tzU%2FmkViaGad1wVY1zp0%2B6jLskeQSd5fHn2e%2BXAeQoqPhPaDu87mZaq8JmYKDF%2BvC%2BkTCbdfCkLHUp2qamQof67HgCcTOTPgDYrBHJrov4QjyyQpRTmEUxREKS3C1i7MgXNuvLOR5La79JDFWxwzik0WNJNSSXTWo94MkbBOciA6ditjm9UXrS%2BfQTF8VWJm%2BYG1PV97quNuvto4huYHyk8&X-Amz-Signature=ab091efa55423ef5f95453705f73a24b61285a08065224198645ed574c3e2084&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWYRQKQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCSnAWyPF9xfYAJarGv1OzVRpgXaDZAinyhD%2B3WmdQ5PQIgK75EM4K%2BUDW5SlPw37A2wSrQyRh9tdcTVYYxG5d5dBYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJO1SfLWiPh7bftcGSrcA03LIVwAM7bpMPDmXhPM0hau0GHS%2Fi%2FLx%2B5Xr1PyBRHKzPF6PzJ130K6c59aFvE4jUoFajaYs3L8L1Pkz2V%2FJC3GterSqwyKLS3rF1bU6z7l%2BsshbGz6gqNl8hPo2E4hGRu9wng2%2FJcAwHynNMVEHYZ%2Fz3%2BYs5uY3GRptIpXRT3YYxzNhW8OLb99nfle1EZIcUysBamrcvY4JFVTLimL%2Fudk7N0VOv%2BKCsPedAbEkAJcDEenayqc%2BQRSfvslCjdaA77fi%2B%2B3rK1MElY1wA5bDZyc6n3pzClQ9PkdijnKnLJFOMz9LFlPAcJaJJ0ePl9H8knKSeJmNRj0asGWZJLgskH4sj1TR4kLm7iXENjdBWG0k4ggINqIn5mcZEcwiKeK5V5%2BAq%2FN6e%2BntrSCVNDhYNGqCYiVIEpGpLahOEDfl5qWDnAcdAyUGRYzNkzcNVBc4a8kup4lSGIy07Myzwu1liYUFjszPYfk9mIyIQMzcLt7ulydT4U1zfbm51xjV8D2a6xJ2VJ0Zj6I2JLwVBQjNBwDt60UgrLABbJjmnHeSEawc6g9aALFjwT1WPfn6ORSgJyh4OXZAsPUS1fPW%2FVR2U0v5Gx6wEEe%2FlYg3PrWdM3aaiVtgnJWR2Kd2662MOyegMIGOqUBFFeE3tzU%2FmkViaGad1wVY1zp0%2B6jLskeQSd5fHn2e%2BXAeQoqPhPaDu87mZaq8JmYKDF%2BvC%2BkTCbdfCkLHUp2qamQof67HgCcTOTPgDYrBHJrov4QjyyQpRTmEUxREKS3C1i7MgXNuvLOR5La79JDFWxwzik0WNJNSSXTWo94MkbBOciA6ditjm9UXrS%2BfQTF8VWJm%2BYG1PV97quNuvto4huYHyk8&X-Amz-Signature=973443d4b96ac19416fcbf07a44be35d59737f227223a99c9a6a4fead5dc202e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWYRQKQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCSnAWyPF9xfYAJarGv1OzVRpgXaDZAinyhD%2B3WmdQ5PQIgK75EM4K%2BUDW5SlPw37A2wSrQyRh9tdcTVYYxG5d5dBYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJO1SfLWiPh7bftcGSrcA03LIVwAM7bpMPDmXhPM0hau0GHS%2Fi%2FLx%2B5Xr1PyBRHKzPF6PzJ130K6c59aFvE4jUoFajaYs3L8L1Pkz2V%2FJC3GterSqwyKLS3rF1bU6z7l%2BsshbGz6gqNl8hPo2E4hGRu9wng2%2FJcAwHynNMVEHYZ%2Fz3%2BYs5uY3GRptIpXRT3YYxzNhW8OLb99nfle1EZIcUysBamrcvY4JFVTLimL%2Fudk7N0VOv%2BKCsPedAbEkAJcDEenayqc%2BQRSfvslCjdaA77fi%2B%2B3rK1MElY1wA5bDZyc6n3pzClQ9PkdijnKnLJFOMz9LFlPAcJaJJ0ePl9H8knKSeJmNRj0asGWZJLgskH4sj1TR4kLm7iXENjdBWG0k4ggINqIn5mcZEcwiKeK5V5%2BAq%2FN6e%2BntrSCVNDhYNGqCYiVIEpGpLahOEDfl5qWDnAcdAyUGRYzNkzcNVBc4a8kup4lSGIy07Myzwu1liYUFjszPYfk9mIyIQMzcLt7ulydT4U1zfbm51xjV8D2a6xJ2VJ0Zj6I2JLwVBQjNBwDt60UgrLABbJjmnHeSEawc6g9aALFjwT1WPfn6ORSgJyh4OXZAsPUS1fPW%2FVR2U0v5Gx6wEEe%2FlYg3PrWdM3aaiVtgnJWR2Kd2662MOyegMIGOqUBFFeE3tzU%2FmkViaGad1wVY1zp0%2B6jLskeQSd5fHn2e%2BXAeQoqPhPaDu87mZaq8JmYKDF%2BvC%2BkTCbdfCkLHUp2qamQof67HgCcTOTPgDYrBHJrov4QjyyQpRTmEUxREKS3C1i7MgXNuvLOR5La79JDFWxwzik0WNJNSSXTWo94MkbBOciA6ditjm9UXrS%2BfQTF8VWJm%2BYG1PV97quNuvto4huYHyk8&X-Amz-Signature=53d35423ada66a1935e0f47a4a54eb8bb4e34d1c9b2dd8bbb590476f9935cd23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
