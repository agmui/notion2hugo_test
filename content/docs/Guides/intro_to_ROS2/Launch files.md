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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUSI6WJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GX7k6P58YVhoUI7xPgt%2BWHWB5GnOxkmOudu9a9RwfAIhAJNtiARV9D4do0o%2FN5nagbxKh719O9GsJv52R9WWH5w9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BsINtVrljcgYPzsq3AM6Uv91PE2g8Y9errNA8a9V12c8WyitJIkq7i7D8xflqkIIMiu1j%2FcLuBrUys7xroKrphqZZw1ZMpZfNzvw5LbV1LYQHw99Je0%2BvnPe61g2hxhCGZ7%2BiBtNQGmq1kQnYk2PNTIfmP5mH%2BeLdED%2F1a2rnLP8dmkwrv%2BvomMlidjJ6A3YW9kRc4TshRugj%2B4xJbXdZtbSdbIjloe0ocFNHZz5pOi%2F4lr%2FgNsW2eQwvtVxR1k38ImT3NjxGPsREJmFwsal3YDd3KhqqouIr4LlUiV%2FBOql4LzriiJpQbR5ylbpHti7BmJv5A5UaH%2F14ueJRrnp180tOBIcmb1jKtdM8LnJht6k2V9qbor4HnAREHKTDltfIy0Xncq1GVkCfYnCuuXgISj7F%2BIQQLEELVQYxF41fRC88DEFKGIQwZ2YeE%2FmDr9WO7PzGFZh7lB%2FUG%2BiY61Rnw5792%2BDOce2QdqDNUeImc4eKZIZY2IIhGnRN3pBBFG5wO8dcFc0TNw1hfjvg14jqoFSV8B6fv%2BmxOUQm%2FNrik34k0zp7lxOtHcO4PVdUmdZjhWHQwT1s%2FistdVuGZ3C1rs4%2F%2BbVs3t1fSLw%2F7M5J03%2FSVl5HIfI2lpC05Otu8HboCN3AbP3e0tv%2FzCnyvi8BjqkATVvQMpICdya23bNZpnF5o%2FQaYCzB2H67G28wnKLedmKK7q3tPXp2PYLcwBNMBMM86Qpt1fhWEqIrCl7R8OpbEFzkhNxSoSQy5lOZ2shipi24lFzw0urAe4rPRTyLgEOOAjbXRVbJlwlY7y3LJDqJJLMiHRgJIF5mwtx006HzA%2FHmsfZGLt4AnsQVpZ091Olc%2BV9peGvCMvNG5P7XTEiOPM8y0zd&X-Amz-Signature=a2e24e07a7d855b6a9101326360121086f21240731edcfe4b4cb216daa648eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUSI6WJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GX7k6P58YVhoUI7xPgt%2BWHWB5GnOxkmOudu9a9RwfAIhAJNtiARV9D4do0o%2FN5nagbxKh719O9GsJv52R9WWH5w9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BsINtVrljcgYPzsq3AM6Uv91PE2g8Y9errNA8a9V12c8WyitJIkq7i7D8xflqkIIMiu1j%2FcLuBrUys7xroKrphqZZw1ZMpZfNzvw5LbV1LYQHw99Je0%2BvnPe61g2hxhCGZ7%2BiBtNQGmq1kQnYk2PNTIfmP5mH%2BeLdED%2F1a2rnLP8dmkwrv%2BvomMlidjJ6A3YW9kRc4TshRugj%2B4xJbXdZtbSdbIjloe0ocFNHZz5pOi%2F4lr%2FgNsW2eQwvtVxR1k38ImT3NjxGPsREJmFwsal3YDd3KhqqouIr4LlUiV%2FBOql4LzriiJpQbR5ylbpHti7BmJv5A5UaH%2F14ueJRrnp180tOBIcmb1jKtdM8LnJht6k2V9qbor4HnAREHKTDltfIy0Xncq1GVkCfYnCuuXgISj7F%2BIQQLEELVQYxF41fRC88DEFKGIQwZ2YeE%2FmDr9WO7PzGFZh7lB%2FUG%2BiY61Rnw5792%2BDOce2QdqDNUeImc4eKZIZY2IIhGnRN3pBBFG5wO8dcFc0TNw1hfjvg14jqoFSV8B6fv%2BmxOUQm%2FNrik34k0zp7lxOtHcO4PVdUmdZjhWHQwT1s%2FistdVuGZ3C1rs4%2F%2BbVs3t1fSLw%2F7M5J03%2FSVl5HIfI2lpC05Otu8HboCN3AbP3e0tv%2FzCnyvi8BjqkATVvQMpICdya23bNZpnF5o%2FQaYCzB2H67G28wnKLedmKK7q3tPXp2PYLcwBNMBMM86Qpt1fhWEqIrCl7R8OpbEFzkhNxSoSQy5lOZ2shipi24lFzw0urAe4rPRTyLgEOOAjbXRVbJlwlY7y3LJDqJJLMiHRgJIF5mwtx006HzA%2FHmsfZGLt4AnsQVpZ091Olc%2BV9peGvCMvNG5P7XTEiOPM8y0zd&X-Amz-Signature=357d29d314ca1df2d0fe29938f86bcf3b0ca8dc4a4faccb608c541d08e9decab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUSI6WJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GX7k6P58YVhoUI7xPgt%2BWHWB5GnOxkmOudu9a9RwfAIhAJNtiARV9D4do0o%2FN5nagbxKh719O9GsJv52R9WWH5w9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BsINtVrljcgYPzsq3AM6Uv91PE2g8Y9errNA8a9V12c8WyitJIkq7i7D8xflqkIIMiu1j%2FcLuBrUys7xroKrphqZZw1ZMpZfNzvw5LbV1LYQHw99Je0%2BvnPe61g2hxhCGZ7%2BiBtNQGmq1kQnYk2PNTIfmP5mH%2BeLdED%2F1a2rnLP8dmkwrv%2BvomMlidjJ6A3YW9kRc4TshRugj%2B4xJbXdZtbSdbIjloe0ocFNHZz5pOi%2F4lr%2FgNsW2eQwvtVxR1k38ImT3NjxGPsREJmFwsal3YDd3KhqqouIr4LlUiV%2FBOql4LzriiJpQbR5ylbpHti7BmJv5A5UaH%2F14ueJRrnp180tOBIcmb1jKtdM8LnJht6k2V9qbor4HnAREHKTDltfIy0Xncq1GVkCfYnCuuXgISj7F%2BIQQLEELVQYxF41fRC88DEFKGIQwZ2YeE%2FmDr9WO7PzGFZh7lB%2FUG%2BiY61Rnw5792%2BDOce2QdqDNUeImc4eKZIZY2IIhGnRN3pBBFG5wO8dcFc0TNw1hfjvg14jqoFSV8B6fv%2BmxOUQm%2FNrik34k0zp7lxOtHcO4PVdUmdZjhWHQwT1s%2FistdVuGZ3C1rs4%2F%2BbVs3t1fSLw%2F7M5J03%2FSVl5HIfI2lpC05Otu8HboCN3AbP3e0tv%2FzCnyvi8BjqkATVvQMpICdya23bNZpnF5o%2FQaYCzB2H67G28wnKLedmKK7q3tPXp2PYLcwBNMBMM86Qpt1fhWEqIrCl7R8OpbEFzkhNxSoSQy5lOZ2shipi24lFzw0urAe4rPRTyLgEOOAjbXRVbJlwlY7y3LJDqJJLMiHRgJIF5mwtx006HzA%2FHmsfZGLt4AnsQVpZ091Olc%2BV9peGvCMvNG5P7XTEiOPM8y0zd&X-Amz-Signature=8cd2290cb07539dc916101c74e5a3e4549dfb44799128ed48505caa413b49d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
