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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNB4YRA7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDNrtz9shZEpFjtME6oMeS8fk7zG%2Bx22CTaPQu%2F6f8a3QIhAO1BM5jW53BgcUDeX549WBfmMvXnW51dt1RI7oTCel3HKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuRd4kAA5h2%2BQyKQUq3AN4rY7uUJ2IWm2yt9SYeTedLJMlvOQa6OSbO36U%2FfBAa5i1%2F7AkKrnSCn9w8gZQtCVJB45%2FnW9OEps%2FbuuDDVhhUXdxeVv1%2BImQsXHtwbMNxgwcLLgvM%2BEpx82f3awKyAMjNXpZuhxBKp7UO7TJhRynDPA3J%2BqnqIMGPCNAGoeCfP6pv4JDW6EnS3pzmSWGYyD1jW7wqXID5IamhBV66FhCoyMrgrVNyHIf70WYCKj4GT5RTc4etsqv3eQj5HC6vLQLwJeOcYCdcTP88%2FPMM7isUHmRz8ZgZ5LWkQe%2Fefb2iUlYlqiwEi3V03QrBxmDpnaGIdqQ%2F5pGue7yNnKCuw5BiezQc%2BykmSPbRcLXsyH0Z1vpgyo0TXk7Cogb3t%2B75AoueKrLmX82TP238OF86z0%2FxtG%2F%2FMaBEF%2F7CTdfIeD%2BZ5kcOMpDPF2aC2gm0TXI8Fm6oyU860DjeNHOyFtCj3DNdumJbCLPFS5WOOLsDCgts6fMy2060UnGzFXQaC5o903FFPTxz%2FduLxN1C7d8Hfnnzhq2Dg0Ne1z%2Fu%2Bdddsn%2BZcdRT0wg6K%2FJ6P3v1x16%2FnF1jv7IA094lxt0GLcYEntgOm1hJR1kOt%2Fn2UIEA%2B5rvKIHaIf4l92LG89ddTCv5q6%2FBjqkAe24dfScbs3Qppi7u3kngtU9m9FyBF3SjpQF59X%2FsXRbL3S2CRhqYDx22SxEhjbntPsMCS2HC9TS2NcUs9V0WNEHnB4o%2FwY8hZ502M25aopjBI41Lud9xxHDTTXho3IQYitZEFDyfUs2U0UJQJL1tAvyTgTHAroICM1A3QrjXkzKK%2B%2BDZwY2yNlZ2rB9ZZSIT5ym%2FkvIFzy54fRUeJyH8fqt26DJ&X-Amz-Signature=3f6b7d17bd4e9b924f56064e32964a1a86650984a476a711d1d1755c66f6e62e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNB4YRA7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDNrtz9shZEpFjtME6oMeS8fk7zG%2Bx22CTaPQu%2F6f8a3QIhAO1BM5jW53BgcUDeX549WBfmMvXnW51dt1RI7oTCel3HKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuRd4kAA5h2%2BQyKQUq3AN4rY7uUJ2IWm2yt9SYeTedLJMlvOQa6OSbO36U%2FfBAa5i1%2F7AkKrnSCn9w8gZQtCVJB45%2FnW9OEps%2FbuuDDVhhUXdxeVv1%2BImQsXHtwbMNxgwcLLgvM%2BEpx82f3awKyAMjNXpZuhxBKp7UO7TJhRynDPA3J%2BqnqIMGPCNAGoeCfP6pv4JDW6EnS3pzmSWGYyD1jW7wqXID5IamhBV66FhCoyMrgrVNyHIf70WYCKj4GT5RTc4etsqv3eQj5HC6vLQLwJeOcYCdcTP88%2FPMM7isUHmRz8ZgZ5LWkQe%2Fefb2iUlYlqiwEi3V03QrBxmDpnaGIdqQ%2F5pGue7yNnKCuw5BiezQc%2BykmSPbRcLXsyH0Z1vpgyo0TXk7Cogb3t%2B75AoueKrLmX82TP238OF86z0%2FxtG%2F%2FMaBEF%2F7CTdfIeD%2BZ5kcOMpDPF2aC2gm0TXI8Fm6oyU860DjeNHOyFtCj3DNdumJbCLPFS5WOOLsDCgts6fMy2060UnGzFXQaC5o903FFPTxz%2FduLxN1C7d8Hfnnzhq2Dg0Ne1z%2Fu%2Bdddsn%2BZcdRT0wg6K%2FJ6P3v1x16%2FnF1jv7IA094lxt0GLcYEntgOm1hJR1kOt%2Fn2UIEA%2B5rvKIHaIf4l92LG89ddTCv5q6%2FBjqkAe24dfScbs3Qppi7u3kngtU9m9FyBF3SjpQF59X%2FsXRbL3S2CRhqYDx22SxEhjbntPsMCS2HC9TS2NcUs9V0WNEHnB4o%2FwY8hZ502M25aopjBI41Lud9xxHDTTXho3IQYitZEFDyfUs2U0UJQJL1tAvyTgTHAroICM1A3QrjXkzKK%2B%2BDZwY2yNlZ2rB9ZZSIT5ym%2FkvIFzy54fRUeJyH8fqt26DJ&X-Amz-Signature=ce686c32a30f8c71a3973fb4ad5246417beea593667934899733c299ca076fab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNB4YRA7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDNrtz9shZEpFjtME6oMeS8fk7zG%2Bx22CTaPQu%2F6f8a3QIhAO1BM5jW53BgcUDeX549WBfmMvXnW51dt1RI7oTCel3HKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuRd4kAA5h2%2BQyKQUq3AN4rY7uUJ2IWm2yt9SYeTedLJMlvOQa6OSbO36U%2FfBAa5i1%2F7AkKrnSCn9w8gZQtCVJB45%2FnW9OEps%2FbuuDDVhhUXdxeVv1%2BImQsXHtwbMNxgwcLLgvM%2BEpx82f3awKyAMjNXpZuhxBKp7UO7TJhRynDPA3J%2BqnqIMGPCNAGoeCfP6pv4JDW6EnS3pzmSWGYyD1jW7wqXID5IamhBV66FhCoyMrgrVNyHIf70WYCKj4GT5RTc4etsqv3eQj5HC6vLQLwJeOcYCdcTP88%2FPMM7isUHmRz8ZgZ5LWkQe%2Fefb2iUlYlqiwEi3V03QrBxmDpnaGIdqQ%2F5pGue7yNnKCuw5BiezQc%2BykmSPbRcLXsyH0Z1vpgyo0TXk7Cogb3t%2B75AoueKrLmX82TP238OF86z0%2FxtG%2F%2FMaBEF%2F7CTdfIeD%2BZ5kcOMpDPF2aC2gm0TXI8Fm6oyU860DjeNHOyFtCj3DNdumJbCLPFS5WOOLsDCgts6fMy2060UnGzFXQaC5o903FFPTxz%2FduLxN1C7d8Hfnnzhq2Dg0Ne1z%2Fu%2Bdddsn%2BZcdRT0wg6K%2FJ6P3v1x16%2FnF1jv7IA094lxt0GLcYEntgOm1hJR1kOt%2Fn2UIEA%2B5rvKIHaIf4l92LG89ddTCv5q6%2FBjqkAe24dfScbs3Qppi7u3kngtU9m9FyBF3SjpQF59X%2FsXRbL3S2CRhqYDx22SxEhjbntPsMCS2HC9TS2NcUs9V0WNEHnB4o%2FwY8hZ502M25aopjBI41Lud9xxHDTTXho3IQYitZEFDyfUs2U0UJQJL1tAvyTgTHAroICM1A3QrjXkzKK%2B%2BDZwY2yNlZ2rB9ZZSIT5ym%2FkvIFzy54fRUeJyH8fqt26DJ&X-Amz-Signature=cc31aa2982051ec775a9057170c93e2ad7da5d1d6d5c95adba56b5c7fd905243&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
