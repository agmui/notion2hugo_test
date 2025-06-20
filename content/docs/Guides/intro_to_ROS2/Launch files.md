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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPBKEFV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiL%2BpLK3fSwhTTMsHLgkA20KIavy3MGwmawSPi%2BRaejgIgRQGvgrRkxVG0cfKUo6icpEBCN09tdkfGP8Dp9OfmuQ4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG4dXS8TpJ48ygUWyrcAxs319%2BSI3edxnoG3ZNUZ7SxpPTjofM2UojsKtpC42tB9%2F4p6ho8YJgH1eMsouzvpTBfSO9T5uFtYmnsA6n0wdVplsvssXfM8mfuWI2fGMpL5pRZUsZocKOzCYpfNVz89%2FNzVf5Z8fjh7XRlw8jmzfPE1pohRYGAKxEHtRxUKUGjmRSdHnHRTnh2UhrPiMwenirBAHu5bWEBZvHs83VDd343oKC0qL%2FmQgtqp8W%2BIirxXZeUcaWXnrhzn8KTim6RtOeFKsaz9g7e0UceXXPPyeEfi0kLP0rqtpIJ%2FiO5VueLx%2BG1ePzFWG9rjbZ%2BabpQdZas2dA1H2TbkVuaPjU0%2B5eglx9Jb9Hyq1wDKitRb0aEekt4ASuQAVRjod4xTF1EoRyZ8KZg5p3moa6x%2B4%2FHl%2Fi%2F5Bf68YWW8y3U1lSFhwRKKiEXdrcJ4NGKAA7Ymk63UPzNfDIpp0R9EKyr%2BO0Lt%2B3mrjddA3%2BXg2QpEJutsZypVetzRy7iWfGeiGfvF1U6QaQP29jOSQnXP6jTv%2FI2SnyX4yafr1xWGbHMhAnBCVLOD5X%2F4mb%2Fck3CtP3UWTU9cPETT5BFtV8wQCHtjhPeX4xbtdJZi0QW00vV5Awz4Wh5wjcPjJMOy9cnvNt0MPiO08IGOqUBP38ThEleJWgyvgJ5QZilbTd0suGE1iyKfEQRS6qZDllz8la1pbWfwuPzVqQVMqQLQLmWvtBxII2%2BaO0ew%2Fb5wp01yedHnSM%2BK9lOO42hZsgvvqHA3J7%2FOKwl0%2Bd%2FxNWxmNHG%2FcMrQC5%2FPxTWQyG90py8l8834i4GK5DeXK8EB3gXjAF0PVieiuCSO%2FNAg%2BIjjtWlWLNCOIdq4rA7GnVqFDvWgMmm&X-Amz-Signature=f20c4ae9fa6a7ccb3628869d2c01a11df56fd9acfe496b3b03a403ea425a4dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPBKEFV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiL%2BpLK3fSwhTTMsHLgkA20KIavy3MGwmawSPi%2BRaejgIgRQGvgrRkxVG0cfKUo6icpEBCN09tdkfGP8Dp9OfmuQ4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG4dXS8TpJ48ygUWyrcAxs319%2BSI3edxnoG3ZNUZ7SxpPTjofM2UojsKtpC42tB9%2F4p6ho8YJgH1eMsouzvpTBfSO9T5uFtYmnsA6n0wdVplsvssXfM8mfuWI2fGMpL5pRZUsZocKOzCYpfNVz89%2FNzVf5Z8fjh7XRlw8jmzfPE1pohRYGAKxEHtRxUKUGjmRSdHnHRTnh2UhrPiMwenirBAHu5bWEBZvHs83VDd343oKC0qL%2FmQgtqp8W%2BIirxXZeUcaWXnrhzn8KTim6RtOeFKsaz9g7e0UceXXPPyeEfi0kLP0rqtpIJ%2FiO5VueLx%2BG1ePzFWG9rjbZ%2BabpQdZas2dA1H2TbkVuaPjU0%2B5eglx9Jb9Hyq1wDKitRb0aEekt4ASuQAVRjod4xTF1EoRyZ8KZg5p3moa6x%2B4%2FHl%2Fi%2F5Bf68YWW8y3U1lSFhwRKKiEXdrcJ4NGKAA7Ymk63UPzNfDIpp0R9EKyr%2BO0Lt%2B3mrjddA3%2BXg2QpEJutsZypVetzRy7iWfGeiGfvF1U6QaQP29jOSQnXP6jTv%2FI2SnyX4yafr1xWGbHMhAnBCVLOD5X%2F4mb%2Fck3CtP3UWTU9cPETT5BFtV8wQCHtjhPeX4xbtdJZi0QW00vV5Awz4Wh5wjcPjJMOy9cnvNt0MPiO08IGOqUBP38ThEleJWgyvgJ5QZilbTd0suGE1iyKfEQRS6qZDllz8la1pbWfwuPzVqQVMqQLQLmWvtBxII2%2BaO0ew%2Fb5wp01yedHnSM%2BK9lOO42hZsgvvqHA3J7%2FOKwl0%2Bd%2FxNWxmNHG%2FcMrQC5%2FPxTWQyG90py8l8834i4GK5DeXK8EB3gXjAF0PVieiuCSO%2FNAg%2BIjjtWlWLNCOIdq4rA7GnVqFDvWgMmm&X-Amz-Signature=ef9ce31f368fae21b9cb2eb1fa497a7465381303e415ece7d2a7ca5cbc9200c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPBKEFV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiL%2BpLK3fSwhTTMsHLgkA20KIavy3MGwmawSPi%2BRaejgIgRQGvgrRkxVG0cfKUo6icpEBCN09tdkfGP8Dp9OfmuQ4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG4dXS8TpJ48ygUWyrcAxs319%2BSI3edxnoG3ZNUZ7SxpPTjofM2UojsKtpC42tB9%2F4p6ho8YJgH1eMsouzvpTBfSO9T5uFtYmnsA6n0wdVplsvssXfM8mfuWI2fGMpL5pRZUsZocKOzCYpfNVz89%2FNzVf5Z8fjh7XRlw8jmzfPE1pohRYGAKxEHtRxUKUGjmRSdHnHRTnh2UhrPiMwenirBAHu5bWEBZvHs83VDd343oKC0qL%2FmQgtqp8W%2BIirxXZeUcaWXnrhzn8KTim6RtOeFKsaz9g7e0UceXXPPyeEfi0kLP0rqtpIJ%2FiO5VueLx%2BG1ePzFWG9rjbZ%2BabpQdZas2dA1H2TbkVuaPjU0%2B5eglx9Jb9Hyq1wDKitRb0aEekt4ASuQAVRjod4xTF1EoRyZ8KZg5p3moa6x%2B4%2FHl%2Fi%2F5Bf68YWW8y3U1lSFhwRKKiEXdrcJ4NGKAA7Ymk63UPzNfDIpp0R9EKyr%2BO0Lt%2B3mrjddA3%2BXg2QpEJutsZypVetzRy7iWfGeiGfvF1U6QaQP29jOSQnXP6jTv%2FI2SnyX4yafr1xWGbHMhAnBCVLOD5X%2F4mb%2Fck3CtP3UWTU9cPETT5BFtV8wQCHtjhPeX4xbtdJZi0QW00vV5Awz4Wh5wjcPjJMOy9cnvNt0MPiO08IGOqUBP38ThEleJWgyvgJ5QZilbTd0suGE1iyKfEQRS6qZDllz8la1pbWfwuPzVqQVMqQLQLmWvtBxII2%2BaO0ew%2Fb5wp01yedHnSM%2BK9lOO42hZsgvvqHA3J7%2FOKwl0%2Bd%2FxNWxmNHG%2FcMrQC5%2FPxTWQyG90py8l8834i4GK5DeXK8EB3gXjAF0PVieiuCSO%2FNAg%2BIjjtWlWLNCOIdq4rA7GnVqFDvWgMmm&X-Amz-Signature=b7d2b6cdb7a8f214648162e2dc1ba7f746fb8f874e7b43f5e32cd0a8417ec5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
