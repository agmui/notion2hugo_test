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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCL5C235%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcuW26I4jdaNylLfwNLR%2BxdezW1iWBrwSdzoHucW8RcgIhAMi%2FxNBz4jnoJvVLwxQotCq58I708UbGBNbR4mmYxV7CKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUelGxW3pgx%2BUZfnIq3AP0tEE4fN3Meo5%2FQAlTOIB2uxWoIdbY1lPP7XwPvxLwOUIoK3QMjDhfezSIOWaDeE5fAePKinJBNBZZf5mErHpzaqAwUrDj3wfombkIH1YIaiog2Cm0xMwkhoGlYlkvAwoiEB2IwH6z3LBYNhZ250nVfJnKlg4IFMUIBfjrPobtEm%2FRQ%2F3u1yp6N2yIia1Y8C1UJPuxagsW9R70i1mAJzm%2BJmNnkaysP6neFNEda6xeIO5%2BTAAvIDMlvXFuQqOIHDk7ZupKj3oEycfPKYWJ7mLcF57EQHDKLz6mQOHbIn5kEebyIqarc24m7uHhtkxbr%2FdHoA2ctEsvELp1qvU08zWgyEDVM5OSmsu6xyU8EYJQkESL1qvi07OSC5p96emtAu1VlR0UMEnxHfqTnv8DnJoELuo6%2BvVobInjbUWiLhAr6WQKHLv47u%2F1tckAbWhluQhvcljSWizHM4rrkJ1qUV660%2B9g2c5gJNyt0E%2FljGh8fANiXCRiW1JK%2F2a8sSudxY6ViPU08%2ByXBchQVhw2NNiGa02lg4BJ5NSj152lFIDSx2sycbLPgVG1WDDFI6BRwdoKbUzswSkSuHA3ascJIpIICFKpVZIW3T3lBQhYCcbqOwxmhL0whnLV75ryUTDZk%2FfDBjqkAV%2FfGNTWgsIE%2FI3cXuvDhUj88SnQJ2cHpVaPVCJSy3vDyiJoSTgOdbNRA0n8TVhmpJYqMkXK3I1%2FBESNcYVl5nvPqpJhte%2F2qOUW2zOQ%2FQ%2B8SBO%2BLasmmOWkOSWxHp0R%2FLT5g2OCeOpOfq1RW0GBrOtIKz6K6vMMfIv1nx0k%2FWQB6EQ3v9RMa7xWn6MAvtc4oW7%2FnblTWlIFmIoWKt8dzwtrqZcN&X-Amz-Signature=076d54a8f1f80e983a6ee70e5c350fae8f8c409360c118c4b5a28d098c5c8696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCL5C235%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcuW26I4jdaNylLfwNLR%2BxdezW1iWBrwSdzoHucW8RcgIhAMi%2FxNBz4jnoJvVLwxQotCq58I708UbGBNbR4mmYxV7CKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUelGxW3pgx%2BUZfnIq3AP0tEE4fN3Meo5%2FQAlTOIB2uxWoIdbY1lPP7XwPvxLwOUIoK3QMjDhfezSIOWaDeE5fAePKinJBNBZZf5mErHpzaqAwUrDj3wfombkIH1YIaiog2Cm0xMwkhoGlYlkvAwoiEB2IwH6z3LBYNhZ250nVfJnKlg4IFMUIBfjrPobtEm%2FRQ%2F3u1yp6N2yIia1Y8C1UJPuxagsW9R70i1mAJzm%2BJmNnkaysP6neFNEda6xeIO5%2BTAAvIDMlvXFuQqOIHDk7ZupKj3oEycfPKYWJ7mLcF57EQHDKLz6mQOHbIn5kEebyIqarc24m7uHhtkxbr%2FdHoA2ctEsvELp1qvU08zWgyEDVM5OSmsu6xyU8EYJQkESL1qvi07OSC5p96emtAu1VlR0UMEnxHfqTnv8DnJoELuo6%2BvVobInjbUWiLhAr6WQKHLv47u%2F1tckAbWhluQhvcljSWizHM4rrkJ1qUV660%2B9g2c5gJNyt0E%2FljGh8fANiXCRiW1JK%2F2a8sSudxY6ViPU08%2ByXBchQVhw2NNiGa02lg4BJ5NSj152lFIDSx2sycbLPgVG1WDDFI6BRwdoKbUzswSkSuHA3ascJIpIICFKpVZIW3T3lBQhYCcbqOwxmhL0whnLV75ryUTDZk%2FfDBjqkAV%2FfGNTWgsIE%2FI3cXuvDhUj88SnQJ2cHpVaPVCJSy3vDyiJoSTgOdbNRA0n8TVhmpJYqMkXK3I1%2FBESNcYVl5nvPqpJhte%2F2qOUW2zOQ%2FQ%2B8SBO%2BLasmmOWkOSWxHp0R%2FLT5g2OCeOpOfq1RW0GBrOtIKz6K6vMMfIv1nx0k%2FWQB6EQ3v9RMa7xWn6MAvtc4oW7%2FnblTWlIFmIoWKt8dzwtrqZcN&X-Amz-Signature=e3642cee0ce30b6de081b93665839a50418781a4bef4f5ad601a4cd8f89a398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCL5C235%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcuW26I4jdaNylLfwNLR%2BxdezW1iWBrwSdzoHucW8RcgIhAMi%2FxNBz4jnoJvVLwxQotCq58I708UbGBNbR4mmYxV7CKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUelGxW3pgx%2BUZfnIq3AP0tEE4fN3Meo5%2FQAlTOIB2uxWoIdbY1lPP7XwPvxLwOUIoK3QMjDhfezSIOWaDeE5fAePKinJBNBZZf5mErHpzaqAwUrDj3wfombkIH1YIaiog2Cm0xMwkhoGlYlkvAwoiEB2IwH6z3LBYNhZ250nVfJnKlg4IFMUIBfjrPobtEm%2FRQ%2F3u1yp6N2yIia1Y8C1UJPuxagsW9R70i1mAJzm%2BJmNnkaysP6neFNEda6xeIO5%2BTAAvIDMlvXFuQqOIHDk7ZupKj3oEycfPKYWJ7mLcF57EQHDKLz6mQOHbIn5kEebyIqarc24m7uHhtkxbr%2FdHoA2ctEsvELp1qvU08zWgyEDVM5OSmsu6xyU8EYJQkESL1qvi07OSC5p96emtAu1VlR0UMEnxHfqTnv8DnJoELuo6%2BvVobInjbUWiLhAr6WQKHLv47u%2F1tckAbWhluQhvcljSWizHM4rrkJ1qUV660%2B9g2c5gJNyt0E%2FljGh8fANiXCRiW1JK%2F2a8sSudxY6ViPU08%2ByXBchQVhw2NNiGa02lg4BJ5NSj152lFIDSx2sycbLPgVG1WDDFI6BRwdoKbUzswSkSuHA3ascJIpIICFKpVZIW3T3lBQhYCcbqOwxmhL0whnLV75ryUTDZk%2FfDBjqkAV%2FfGNTWgsIE%2FI3cXuvDhUj88SnQJ2cHpVaPVCJSy3vDyiJoSTgOdbNRA0n8TVhmpJYqMkXK3I1%2FBESNcYVl5nvPqpJhte%2F2qOUW2zOQ%2FQ%2B8SBO%2BLasmmOWkOSWxHp0R%2FLT5g2OCeOpOfq1RW0GBrOtIKz6K6vMMfIv1nx0k%2FWQB6EQ3v9RMa7xWn6MAvtc4oW7%2FnblTWlIFmIoWKt8dzwtrqZcN&X-Amz-Signature=ec0a8a5ac6bbf5900842b6c57477ee93bd15774f97ab5b293ec9e0e196af166b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
