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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3KZ2TF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDU3mD01AEdL9MFjsz9tPNa83psfEaKmXogG%2BI4LzgrUwIhAKlNNDb5RSYUJZ876NnONFlv4DEK3HXzFSHEZMtWBDUgKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynprp5VUNFrNNt%2B7cq3AMS2ZNEO%2BCKihUGjq8xmuVyBVJKFp%2FA4eIzWO24ndIAT4RNYGlsyvaWpfEAGRwrMn3EYPpKqU8Af9W3%2FdORViwmAYarxEm8mMnnkLMxmjmg4UTUHf6ywOGhmSR2XSSuReJ8Nkg0jag9CmmLlLZt4bynfJzR41gJ%2B3emF%2FRJfedijNwzzTBXcW4utEnbQhYBD9smPezuAGaWhd5%2FhEi1Xs4IeE0vB2YO0SXMYuMvDpeCh6Tv%2BNDoHW42mgTT5%2F7krARICdbCj3NLx7vxM%2FYwtzSCMkYe6ZzR8CsI%2B1KY0xcPwHd5XUWYNF1DkHBXBWR3lmCcv1SkKbll6WkArZ24nf2UTCF23iGpKigjXYE6LyxrTkyuH70PjZtGkh661%2Foka8ZtWO%2B%2BKswG5q8i%2FTyohQ30duLfFVKhcbsaZvN2aLqE7c0ocnHyIQzD2NLKpkQ%2F4NlYVZxcpgd73ftqq7nQ8U2Voo%2BAANuIeK2x%2FU651iNIIlaxCqF6xyHk79vAYTlsmaEedCzedLAB9nisg5OLEfYVeU9RC%2FjXMxo%2F2DB5tIHr9iF4n0WmbB%2Fb3B9%2FAbehMHApgVrdvvHqwgvTM6A4HeM%2BEXu8xQE2FNTQlByPSL7zqR5Ieu83WHEInnzsuTDY5OrDBjqkAZs7gEgOkNLDl%2FnCk9bCuJg%2BtBFFT3SdyV1nAr4EI1t9ft4B4zRUqCmGVSSZkvaUMwLcNJJPZBS7g5qGjYTOub5xxax6ko7RCJTwxfY%2FJuzbAWM1a1j0I3o0%2Fni%2B9q%2Bn%2F%2FjZ3ubwBExXCQGttrGSjlvHJ2sWpLTGVw5J6Z%2FcvOb92EXVX7DECEYQnDF%2FPXpWf3jjTa9naLgA4R%2BoYLBU5QOaykdD&X-Amz-Signature=57b6b4d98ec410cbe6fb8fe884927a220665b6bff1bfd5c34f1f09b2593492c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3KZ2TF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDU3mD01AEdL9MFjsz9tPNa83psfEaKmXogG%2BI4LzgrUwIhAKlNNDb5RSYUJZ876NnONFlv4DEK3HXzFSHEZMtWBDUgKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynprp5VUNFrNNt%2B7cq3AMS2ZNEO%2BCKihUGjq8xmuVyBVJKFp%2FA4eIzWO24ndIAT4RNYGlsyvaWpfEAGRwrMn3EYPpKqU8Af9W3%2FdORViwmAYarxEm8mMnnkLMxmjmg4UTUHf6ywOGhmSR2XSSuReJ8Nkg0jag9CmmLlLZt4bynfJzR41gJ%2B3emF%2FRJfedijNwzzTBXcW4utEnbQhYBD9smPezuAGaWhd5%2FhEi1Xs4IeE0vB2YO0SXMYuMvDpeCh6Tv%2BNDoHW42mgTT5%2F7krARICdbCj3NLx7vxM%2FYwtzSCMkYe6ZzR8CsI%2B1KY0xcPwHd5XUWYNF1DkHBXBWR3lmCcv1SkKbll6WkArZ24nf2UTCF23iGpKigjXYE6LyxrTkyuH70PjZtGkh661%2Foka8ZtWO%2B%2BKswG5q8i%2FTyohQ30duLfFVKhcbsaZvN2aLqE7c0ocnHyIQzD2NLKpkQ%2F4NlYVZxcpgd73ftqq7nQ8U2Voo%2BAANuIeK2x%2FU651iNIIlaxCqF6xyHk79vAYTlsmaEedCzedLAB9nisg5OLEfYVeU9RC%2FjXMxo%2F2DB5tIHr9iF4n0WmbB%2Fb3B9%2FAbehMHApgVrdvvHqwgvTM6A4HeM%2BEXu8xQE2FNTQlByPSL7zqR5Ieu83WHEInnzsuTDY5OrDBjqkAZs7gEgOkNLDl%2FnCk9bCuJg%2BtBFFT3SdyV1nAr4EI1t9ft4B4zRUqCmGVSSZkvaUMwLcNJJPZBS7g5qGjYTOub5xxax6ko7RCJTwxfY%2FJuzbAWM1a1j0I3o0%2Fni%2B9q%2Bn%2F%2FjZ3ubwBExXCQGttrGSjlvHJ2sWpLTGVw5J6Z%2FcvOb92EXVX7DECEYQnDF%2FPXpWf3jjTa9naLgA4R%2BoYLBU5QOaykdD&X-Amz-Signature=f02e4e400b09c51ebc705e4ef672019c1562dfb126b2263f4750a9d6ff805061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3KZ2TF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDU3mD01AEdL9MFjsz9tPNa83psfEaKmXogG%2BI4LzgrUwIhAKlNNDb5RSYUJZ876NnONFlv4DEK3HXzFSHEZMtWBDUgKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynprp5VUNFrNNt%2B7cq3AMS2ZNEO%2BCKihUGjq8xmuVyBVJKFp%2FA4eIzWO24ndIAT4RNYGlsyvaWpfEAGRwrMn3EYPpKqU8Af9W3%2FdORViwmAYarxEm8mMnnkLMxmjmg4UTUHf6ywOGhmSR2XSSuReJ8Nkg0jag9CmmLlLZt4bynfJzR41gJ%2B3emF%2FRJfedijNwzzTBXcW4utEnbQhYBD9smPezuAGaWhd5%2FhEi1Xs4IeE0vB2YO0SXMYuMvDpeCh6Tv%2BNDoHW42mgTT5%2F7krARICdbCj3NLx7vxM%2FYwtzSCMkYe6ZzR8CsI%2B1KY0xcPwHd5XUWYNF1DkHBXBWR3lmCcv1SkKbll6WkArZ24nf2UTCF23iGpKigjXYE6LyxrTkyuH70PjZtGkh661%2Foka8ZtWO%2B%2BKswG5q8i%2FTyohQ30duLfFVKhcbsaZvN2aLqE7c0ocnHyIQzD2NLKpkQ%2F4NlYVZxcpgd73ftqq7nQ8U2Voo%2BAANuIeK2x%2FU651iNIIlaxCqF6xyHk79vAYTlsmaEedCzedLAB9nisg5OLEfYVeU9RC%2FjXMxo%2F2DB5tIHr9iF4n0WmbB%2Fb3B9%2FAbehMHApgVrdvvHqwgvTM6A4HeM%2BEXu8xQE2FNTQlByPSL7zqR5Ieu83WHEInnzsuTDY5OrDBjqkAZs7gEgOkNLDl%2FnCk9bCuJg%2BtBFFT3SdyV1nAr4EI1t9ft4B4zRUqCmGVSSZkvaUMwLcNJJPZBS7g5qGjYTOub5xxax6ko7RCJTwxfY%2FJuzbAWM1a1j0I3o0%2Fni%2B9q%2Bn%2F%2FjZ3ubwBExXCQGttrGSjlvHJ2sWpLTGVw5J6Z%2FcvOb92EXVX7DECEYQnDF%2FPXpWf3jjTa9naLgA4R%2BoYLBU5QOaykdD&X-Amz-Signature=4904a685f72010d89097de4c1441f7eb12723e7c9bd1f5f5629f079e15a9902b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
