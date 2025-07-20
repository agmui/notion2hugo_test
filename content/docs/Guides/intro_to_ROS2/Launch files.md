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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMPKTKN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPUEB9AkYzIOnGJOBKPE6nrO5EMJBUpIFqslMFw5E%2FKAiAmufWJV3HwJe6%2BF45rMyydtXwuD7wGvghXSbgGwqC9ZiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAWs57shGNUWpQ%2BfzKtwDEYigakglZRLH1EbZ5MtCVOLjcCUCSAVrnLIhbkZPFFl2rJm%2B2wHrMow%2Bh5V2Y0Q4cdJyBVbWCNGKGIsvlr%2BkQC48hT6%2B3Cl5QaXIzEnfyM69EitpYDx0qKmmjA4KgqQs%2BacjcPNPIAJq6TcX7kZ4kq%2BIMVg9MOPt%2Be6aDjpUqHbgat5M6fmjvcojbZ0Ie0BQtB%2BQGgb7PIY1UsZY0e2d%2BQT%2BKIQ8wN0Ci3%2FamOcgK6EAzrpppmzKXdUAlsu0l8vomjBO8w48D3%2F%2F88RkoOyLxXbJ%2FQPTfwb5tsv0Nm1j7TnR1Awhtqq56XPOaMGaBljuRJeATQnXIPsuNBjmUaL4YXHmfx861%2BmG1%2B2g%2BdTUWJpomgKnu3BkPZjzv%2BgWY5WTacAYtXRZPZHk%2Fc%2FU%2BVD%2FznkMfi06pKjn5oFpfXxTCfIrbXXaruwnZBJCDxy6qZP2Xi17nSECzAYjd5pN9RBh7l8FI76dKVOPnCyQe6dMJ7c3IXxGF1IIsRc8FJNjR1mRKl4rU5e%2B48PuvqsuY4%2Bg8tB7VYEZHD6Xz2cOPTMwurG3Jsa2SRSwtvfKBOUF8DTI9AfCVnB6pSJUSPAuqHIqv2w6cue8WUQNtFEUsLHbbupGdsnbXOnvW6urwKowsdnzwwY6pgEIPqv0FL9FcqbjXJ%2F%2FmxwmAAPDrEVL6CHK6UsMRubr2reAvPFfAVYskIfvBNfuEcGekzmQk9AJtbaBSQrmOgNRzF2GfoQnR8El6sXpD2TbQhu42JLZadvGXOV7uz0fxvndg9YfLj%2F9QW7v2HA6S%2BHnf6batKeowL2u1zgPQwPTSwe%2FqA7xe5mzmbnQ9aBKuGvmAoXADmACgIYdQMvJUztOQG2kOCyr&X-Amz-Signature=4262101f7e03a9189b1fb5a0c6933bd84166c14c4685e7cf7dae11d6363b7e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMPKTKN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPUEB9AkYzIOnGJOBKPE6nrO5EMJBUpIFqslMFw5E%2FKAiAmufWJV3HwJe6%2BF45rMyydtXwuD7wGvghXSbgGwqC9ZiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAWs57shGNUWpQ%2BfzKtwDEYigakglZRLH1EbZ5MtCVOLjcCUCSAVrnLIhbkZPFFl2rJm%2B2wHrMow%2Bh5V2Y0Q4cdJyBVbWCNGKGIsvlr%2BkQC48hT6%2B3Cl5QaXIzEnfyM69EitpYDx0qKmmjA4KgqQs%2BacjcPNPIAJq6TcX7kZ4kq%2BIMVg9MOPt%2Be6aDjpUqHbgat5M6fmjvcojbZ0Ie0BQtB%2BQGgb7PIY1UsZY0e2d%2BQT%2BKIQ8wN0Ci3%2FamOcgK6EAzrpppmzKXdUAlsu0l8vomjBO8w48D3%2F%2F88RkoOyLxXbJ%2FQPTfwb5tsv0Nm1j7TnR1Awhtqq56XPOaMGaBljuRJeATQnXIPsuNBjmUaL4YXHmfx861%2BmG1%2B2g%2BdTUWJpomgKnu3BkPZjzv%2BgWY5WTacAYtXRZPZHk%2Fc%2FU%2BVD%2FznkMfi06pKjn5oFpfXxTCfIrbXXaruwnZBJCDxy6qZP2Xi17nSECzAYjd5pN9RBh7l8FI76dKVOPnCyQe6dMJ7c3IXxGF1IIsRc8FJNjR1mRKl4rU5e%2B48PuvqsuY4%2Bg8tB7VYEZHD6Xz2cOPTMwurG3Jsa2SRSwtvfKBOUF8DTI9AfCVnB6pSJUSPAuqHIqv2w6cue8WUQNtFEUsLHbbupGdsnbXOnvW6urwKowsdnzwwY6pgEIPqv0FL9FcqbjXJ%2F%2FmxwmAAPDrEVL6CHK6UsMRubr2reAvPFfAVYskIfvBNfuEcGekzmQk9AJtbaBSQrmOgNRzF2GfoQnR8El6sXpD2TbQhu42JLZadvGXOV7uz0fxvndg9YfLj%2F9QW7v2HA6S%2BHnf6batKeowL2u1zgPQwPTSwe%2FqA7xe5mzmbnQ9aBKuGvmAoXADmACgIYdQMvJUztOQG2kOCyr&X-Amz-Signature=e2a20c395e9f32f2e65aebf788d25303e9dddf29b94f186ad20c79ec22ccfa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMPKTKN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPUEB9AkYzIOnGJOBKPE6nrO5EMJBUpIFqslMFw5E%2FKAiAmufWJV3HwJe6%2BF45rMyydtXwuD7wGvghXSbgGwqC9ZiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAWs57shGNUWpQ%2BfzKtwDEYigakglZRLH1EbZ5MtCVOLjcCUCSAVrnLIhbkZPFFl2rJm%2B2wHrMow%2Bh5V2Y0Q4cdJyBVbWCNGKGIsvlr%2BkQC48hT6%2B3Cl5QaXIzEnfyM69EitpYDx0qKmmjA4KgqQs%2BacjcPNPIAJq6TcX7kZ4kq%2BIMVg9MOPt%2Be6aDjpUqHbgat5M6fmjvcojbZ0Ie0BQtB%2BQGgb7PIY1UsZY0e2d%2BQT%2BKIQ8wN0Ci3%2FamOcgK6EAzrpppmzKXdUAlsu0l8vomjBO8w48D3%2F%2F88RkoOyLxXbJ%2FQPTfwb5tsv0Nm1j7TnR1Awhtqq56XPOaMGaBljuRJeATQnXIPsuNBjmUaL4YXHmfx861%2BmG1%2B2g%2BdTUWJpomgKnu3BkPZjzv%2BgWY5WTacAYtXRZPZHk%2Fc%2FU%2BVD%2FznkMfi06pKjn5oFpfXxTCfIrbXXaruwnZBJCDxy6qZP2Xi17nSECzAYjd5pN9RBh7l8FI76dKVOPnCyQe6dMJ7c3IXxGF1IIsRc8FJNjR1mRKl4rU5e%2B48PuvqsuY4%2Bg8tB7VYEZHD6Xz2cOPTMwurG3Jsa2SRSwtvfKBOUF8DTI9AfCVnB6pSJUSPAuqHIqv2w6cue8WUQNtFEUsLHbbupGdsnbXOnvW6urwKowsdnzwwY6pgEIPqv0FL9FcqbjXJ%2F%2FmxwmAAPDrEVL6CHK6UsMRubr2reAvPFfAVYskIfvBNfuEcGekzmQk9AJtbaBSQrmOgNRzF2GfoQnR8El6sXpD2TbQhu42JLZadvGXOV7uz0fxvndg9YfLj%2F9QW7v2HA6S%2BHnf6batKeowL2u1zgPQwPTSwe%2FqA7xe5mzmbnQ9aBKuGvmAoXADmACgIYdQMvJUztOQG2kOCyr&X-Amz-Signature=aa932f6579d95a24886ecf82dea327a6127906b67160cf13782d849aac64e29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
