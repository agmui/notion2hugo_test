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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GONWNKH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDynE3mCtpDWvXk8R%2Bz9Fp39C5VqBJ%2FDn5WywALlWPQPgIhAJgG6XpdPA2tFlIPLGre%2FOuaupW0LxSNsf3WpknOy8yKKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzx8ZNkxX6LVfK0N0q3AOcAqryHWLDs6bxe826n1evhfRs7fJxIUthRJb5mztZilknbxVB5ti%2F2Sau1wZ1s3LcuBlBhY1%2FNgllYZ2bIJ5lLhD1lWAyznSs6WRFkCESONoeCxzU8dGc4DqWy9bTvUIQaBQVF5zAb2JY4%2BRmADqdA%2BMwRTczZi1OO%2BhrXv2L0P%2BEcTvHsDL2YW1oWBtLhvelXUuYXwmXeoeaM6TAUPvkvxddY1VVjPpqNiOXl%2Fupza5tSPtDicP9NC654MbizzW5tK8B3PwGnIiw8QhEdIeLf7buOH6oL%2BGC4FiNybbyItuexLaDiGzCKZiD7yLkFtw1KMRLca4dFlsiTlh6YacP8teHgv9yHS3782fbUoM0uUyQ0GzbxEAZsIBJAfQeBzFQCB4pUTdGqHpgmnX4UAFidhEus%2BieXBkN6q97xkeyzapvqm0Pi0Eox9ehZo5GJ0tDVeI%2BKeL%2FbMUrNsGV6ASm%2Ffn4e6pfpZcLeUXhfetS8ysXwbJJDX0Mt3v2bOl94xJNjM4QRCx1A9EzrNqAQYhbg1UC69ZMSjBEZ%2BLi3RwadU2Jl9E8zCwLQH2U%2BLTLtrUD96WTx2zFNkeq0TQrSv3TCQWdC8V38pLYzBt6yom2YVaRppZpYstiXnNDgTCygeS%2FBjqkAXPxVok3zE7%2BwSKh9eIhOjFWiNlloH7jXjCkhNNB9C4%2FcKQvLDPwNf0GqxnR6BmPRMy55L2ZYe2wXfa41eabiLseqWIqUuuNfXfw6mhTTRVUnNLnYtS0nocxFwRlkt9v%2BYigpbOxl2Gox6Mb2l47Ga%2B41g8%2B7YOAt8ROYQfc0LhhdPBakXZoegGMlM47X2BVXGG1Ow1%2BY5VcMpDX9dK1KxQin5pN&X-Amz-Signature=20d99ee7ccd551b8eebae4205fe34ec3958a7f31be54e8519b98df6208df77a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GONWNKH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDynE3mCtpDWvXk8R%2Bz9Fp39C5VqBJ%2FDn5WywALlWPQPgIhAJgG6XpdPA2tFlIPLGre%2FOuaupW0LxSNsf3WpknOy8yKKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzx8ZNkxX6LVfK0N0q3AOcAqryHWLDs6bxe826n1evhfRs7fJxIUthRJb5mztZilknbxVB5ti%2F2Sau1wZ1s3LcuBlBhY1%2FNgllYZ2bIJ5lLhD1lWAyznSs6WRFkCESONoeCxzU8dGc4DqWy9bTvUIQaBQVF5zAb2JY4%2BRmADqdA%2BMwRTczZi1OO%2BhrXv2L0P%2BEcTvHsDL2YW1oWBtLhvelXUuYXwmXeoeaM6TAUPvkvxddY1VVjPpqNiOXl%2Fupza5tSPtDicP9NC654MbizzW5tK8B3PwGnIiw8QhEdIeLf7buOH6oL%2BGC4FiNybbyItuexLaDiGzCKZiD7yLkFtw1KMRLca4dFlsiTlh6YacP8teHgv9yHS3782fbUoM0uUyQ0GzbxEAZsIBJAfQeBzFQCB4pUTdGqHpgmnX4UAFidhEus%2BieXBkN6q97xkeyzapvqm0Pi0Eox9ehZo5GJ0tDVeI%2BKeL%2FbMUrNsGV6ASm%2Ffn4e6pfpZcLeUXhfetS8ysXwbJJDX0Mt3v2bOl94xJNjM4QRCx1A9EzrNqAQYhbg1UC69ZMSjBEZ%2BLi3RwadU2Jl9E8zCwLQH2U%2BLTLtrUD96WTx2zFNkeq0TQrSv3TCQWdC8V38pLYzBt6yom2YVaRppZpYstiXnNDgTCygeS%2FBjqkAXPxVok3zE7%2BwSKh9eIhOjFWiNlloH7jXjCkhNNB9C4%2FcKQvLDPwNf0GqxnR6BmPRMy55L2ZYe2wXfa41eabiLseqWIqUuuNfXfw6mhTTRVUnNLnYtS0nocxFwRlkt9v%2BYigpbOxl2Gox6Mb2l47Ga%2B41g8%2B7YOAt8ROYQfc0LhhdPBakXZoegGMlM47X2BVXGG1Ow1%2BY5VcMpDX9dK1KxQin5pN&X-Amz-Signature=54acd954edd67170d1c0d0af474f8ddcf62da38c7725423094fbf3d4d89efc23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GONWNKH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDynE3mCtpDWvXk8R%2Bz9Fp39C5VqBJ%2FDn5WywALlWPQPgIhAJgG6XpdPA2tFlIPLGre%2FOuaupW0LxSNsf3WpknOy8yKKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzx8ZNkxX6LVfK0N0q3AOcAqryHWLDs6bxe826n1evhfRs7fJxIUthRJb5mztZilknbxVB5ti%2F2Sau1wZ1s3LcuBlBhY1%2FNgllYZ2bIJ5lLhD1lWAyznSs6WRFkCESONoeCxzU8dGc4DqWy9bTvUIQaBQVF5zAb2JY4%2BRmADqdA%2BMwRTczZi1OO%2BhrXv2L0P%2BEcTvHsDL2YW1oWBtLhvelXUuYXwmXeoeaM6TAUPvkvxddY1VVjPpqNiOXl%2Fupza5tSPtDicP9NC654MbizzW5tK8B3PwGnIiw8QhEdIeLf7buOH6oL%2BGC4FiNybbyItuexLaDiGzCKZiD7yLkFtw1KMRLca4dFlsiTlh6YacP8teHgv9yHS3782fbUoM0uUyQ0GzbxEAZsIBJAfQeBzFQCB4pUTdGqHpgmnX4UAFidhEus%2BieXBkN6q97xkeyzapvqm0Pi0Eox9ehZo5GJ0tDVeI%2BKeL%2FbMUrNsGV6ASm%2Ffn4e6pfpZcLeUXhfetS8ysXwbJJDX0Mt3v2bOl94xJNjM4QRCx1A9EzrNqAQYhbg1UC69ZMSjBEZ%2BLi3RwadU2Jl9E8zCwLQH2U%2BLTLtrUD96WTx2zFNkeq0TQrSv3TCQWdC8V38pLYzBt6yom2YVaRppZpYstiXnNDgTCygeS%2FBjqkAXPxVok3zE7%2BwSKh9eIhOjFWiNlloH7jXjCkhNNB9C4%2FcKQvLDPwNf0GqxnR6BmPRMy55L2ZYe2wXfa41eabiLseqWIqUuuNfXfw6mhTTRVUnNLnYtS0nocxFwRlkt9v%2BYigpbOxl2Gox6Mb2l47Ga%2B41g8%2B7YOAt8ROYQfc0LhhdPBakXZoegGMlM47X2BVXGG1Ow1%2BY5VcMpDX9dK1KxQin5pN&X-Amz-Signature=324f45b6bf637f1f6b208b474da31176ac10e0411c9d3434c8ce4cb2d337e73d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
