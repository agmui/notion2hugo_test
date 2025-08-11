---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BRRISP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDda3Cv11DOUSq6IORgBwA91tfPEbAZqcmeewsKU6%2BwaQIgCQrKaywbFrghe3WM5BiA%2FqCdChn48QuLKfaC12YqCdYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUc5ukwSVb3kqHntSrcA6AR9%2BwwQQ7P5VoRF%2B%2BtYiSLZYIRxEQRA%2BzBKkl9EcvTmyByOPo%2Fjme1M8NSMkuXGimr86Qs5NEM3C%2BTNbuoVKRINeH%2FEeU%2FziqTLl6LyKb5OiWfYaPd5330sXlxAGhdVlMjRsltJWeLl1HEyWgbL%2FBfdlvdoCR7A%2BqNlOClVVB%2BR%2Bo796bK0wxq1HdpUIdLF192KLrGTSqNLglpZM3Jsd1u6zV9zJVxpHyVFXmqXltzHQNgtlnl7qjIDrTqaKHbVXNxxTag6XmurMyvkMt%2FoVydWcQxWAlzeLzWv1S8c9lCOVqaB3ZNzX4dduUMUDajKH7ZsDDJLlDca%2FIkEA6E0pPy7mM%2F3hLDkCtzwlgTK3FnnKq36ck0qMfdpeuiD%2F41M6lgkKAzQem%2B4me7SjirAYyddHIK%2BEbWMfp060EBxs8mXFoVlMTSQ5NDoNUuk%2BYZgCRZzHimsNEHiIdtJFJWj9Nq6tSU31UGzYmifcwZpQDnI82r9fg%2F1Lc0bSAzGXoL%2BQtVjxhpuFH5XylGB6p0aWTz3T1GC05jmOSp59B5b1vOV%2FfdVAOIf9%2FAUr%2FZq5U%2ByA4Qu5tbtSSK1PB4l9LNTmfPoXzgch%2B0deZZzAP1EPoq42j75FEZMnhKTGd0MLui58QGOqUB6C5%2BM4lOBfOkigsDojfvbTXxWi%2BE7gg0l1%2BIhfKPybTjBhNjTC9c1gMmzInHfQ2KkNAsnJ4DQOpm3aEJ2iz%2BodsGKuX458b0JZ%2BNqjYABMYmTv3bZwVlK6%2BS4DQmAO0WtotXn6%2F0e8yuJNFJTikA3fXfYgevwAPQnPGhhCyEk7aBqvKFLYHrh0cWS26rTZKQNjuyjrZAZS8S%2FX0fbTcptn5x8Yih&X-Amz-Signature=708df85afd03261c08244c17b4c536ecefc82b4477881b020288ad9f2352e7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BRRISP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDda3Cv11DOUSq6IORgBwA91tfPEbAZqcmeewsKU6%2BwaQIgCQrKaywbFrghe3WM5BiA%2FqCdChn48QuLKfaC12YqCdYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUc5ukwSVb3kqHntSrcA6AR9%2BwwQQ7P5VoRF%2B%2BtYiSLZYIRxEQRA%2BzBKkl9EcvTmyByOPo%2Fjme1M8NSMkuXGimr86Qs5NEM3C%2BTNbuoVKRINeH%2FEeU%2FziqTLl6LyKb5OiWfYaPd5330sXlxAGhdVlMjRsltJWeLl1HEyWgbL%2FBfdlvdoCR7A%2BqNlOClVVB%2BR%2Bo796bK0wxq1HdpUIdLF192KLrGTSqNLglpZM3Jsd1u6zV9zJVxpHyVFXmqXltzHQNgtlnl7qjIDrTqaKHbVXNxxTag6XmurMyvkMt%2FoVydWcQxWAlzeLzWv1S8c9lCOVqaB3ZNzX4dduUMUDajKH7ZsDDJLlDca%2FIkEA6E0pPy7mM%2F3hLDkCtzwlgTK3FnnKq36ck0qMfdpeuiD%2F41M6lgkKAzQem%2B4me7SjirAYyddHIK%2BEbWMfp060EBxs8mXFoVlMTSQ5NDoNUuk%2BYZgCRZzHimsNEHiIdtJFJWj9Nq6tSU31UGzYmifcwZpQDnI82r9fg%2F1Lc0bSAzGXoL%2BQtVjxhpuFH5XylGB6p0aWTz3T1GC05jmOSp59B5b1vOV%2FfdVAOIf9%2FAUr%2FZq5U%2ByA4Qu5tbtSSK1PB4l9LNTmfPoXzgch%2B0deZZzAP1EPoq42j75FEZMnhKTGd0MLui58QGOqUB6C5%2BM4lOBfOkigsDojfvbTXxWi%2BE7gg0l1%2BIhfKPybTjBhNjTC9c1gMmzInHfQ2KkNAsnJ4DQOpm3aEJ2iz%2BodsGKuX458b0JZ%2BNqjYABMYmTv3bZwVlK6%2BS4DQmAO0WtotXn6%2F0e8yuJNFJTikA3fXfYgevwAPQnPGhhCyEk7aBqvKFLYHrh0cWS26rTZKQNjuyjrZAZS8S%2FX0fbTcptn5x8Yih&X-Amz-Signature=03e436443ffa83dbed712ab2ff0f4f36cb2708d6c62e481c05486b754304c9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BRRISP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDda3Cv11DOUSq6IORgBwA91tfPEbAZqcmeewsKU6%2BwaQIgCQrKaywbFrghe3WM5BiA%2FqCdChn48QuLKfaC12YqCdYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUc5ukwSVb3kqHntSrcA6AR9%2BwwQQ7P5VoRF%2B%2BtYiSLZYIRxEQRA%2BzBKkl9EcvTmyByOPo%2Fjme1M8NSMkuXGimr86Qs5NEM3C%2BTNbuoVKRINeH%2FEeU%2FziqTLl6LyKb5OiWfYaPd5330sXlxAGhdVlMjRsltJWeLl1HEyWgbL%2FBfdlvdoCR7A%2BqNlOClVVB%2BR%2Bo796bK0wxq1HdpUIdLF192KLrGTSqNLglpZM3Jsd1u6zV9zJVxpHyVFXmqXltzHQNgtlnl7qjIDrTqaKHbVXNxxTag6XmurMyvkMt%2FoVydWcQxWAlzeLzWv1S8c9lCOVqaB3ZNzX4dduUMUDajKH7ZsDDJLlDca%2FIkEA6E0pPy7mM%2F3hLDkCtzwlgTK3FnnKq36ck0qMfdpeuiD%2F41M6lgkKAzQem%2B4me7SjirAYyddHIK%2BEbWMfp060EBxs8mXFoVlMTSQ5NDoNUuk%2BYZgCRZzHimsNEHiIdtJFJWj9Nq6tSU31UGzYmifcwZpQDnI82r9fg%2F1Lc0bSAzGXoL%2BQtVjxhpuFH5XylGB6p0aWTz3T1GC05jmOSp59B5b1vOV%2FfdVAOIf9%2FAUr%2FZq5U%2ByA4Qu5tbtSSK1PB4l9LNTmfPoXzgch%2B0deZZzAP1EPoq42j75FEZMnhKTGd0MLui58QGOqUB6C5%2BM4lOBfOkigsDojfvbTXxWi%2BE7gg0l1%2BIhfKPybTjBhNjTC9c1gMmzInHfQ2KkNAsnJ4DQOpm3aEJ2iz%2BodsGKuX458b0JZ%2BNqjYABMYmTv3bZwVlK6%2BS4DQmAO0WtotXn6%2F0e8yuJNFJTikA3fXfYgevwAPQnPGhhCyEk7aBqvKFLYHrh0cWS26rTZKQNjuyjrZAZS8S%2FX0fbTcptn5x8Yih&X-Amz-Signature=b3cdc51672a6567ed142b7fbb94a67a4c0f31ef8c81cc2ee9b5bdd9246a2c850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
