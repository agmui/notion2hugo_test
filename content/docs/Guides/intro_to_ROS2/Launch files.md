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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHM6PZZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXAcSI%2BVtNHJ4hTRCMFVDem28XP6VohOL5xEoftgK0QIhAPpNoK%2FxCgzE2k4qFRszkcHcMn7hfLu1Tkqarnx%2B9AnxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYztok1HIVlEoQOm4q3APF8MUFm7PQu64Hme9iX0JkOdhZN1ddi5iybl2stfOPv4YTBLgnzZX2rYA%2BzckgC7%2BZfz4NR1uehiW5RM36RwLzAsyLjBXXWhzy769h9HgnsOQZw%2FAIk%2BX0S7rfwZXACMtLQFym5mGkRH70MUHO7Ot1fKzdFZkyDTRYlfWLnckGn3DwvvKCnU8laB7gvqiTdzufFmfAVqKVUkZJ2RKABckjYFeDMLGLd6UlqJ83q7RMNsu5QYILWadU%2FX2j9JLP8Sq2P9E7y1OxZJmsHaECESP80Wz%2F794ocQxOO9bwNWmdNIBZyqCOLLddOYRuhaz6Vl6wJdjzkMqCWi2iZHTxwmqyp18OShLjZyhmtWR%2FuDggcR7pPEBr%2BR0jvc0ZuRDf7M75DoKPg9XCByUP9YUCkVMnJuvA9cUJbqoojIuFkBtECx%2Fc9HdENQeAHytOu4Y8LiGlg5Ic7gf1mwqlKE7cCls2aANo2taSHNQIV%2F3j0VFZmih4lfWFuyvfrTjfmmgP9RXYxMlKOSDlzVCj1H1k8zJiw8DVYSs8cQIqEpxv6aaLppWHwOiylK9FlZqZQ5adddQW8ulanlhLF5Wq7ZHaiba3G%2FDZZ0TNXcE6QyBQ2ekB0mQmC7GQkIdpfFi1CjCC7PO8BjqkAQQCEXNyHfqCR7fd184KRMufPdJlBA5qiNr10sOrhNkQDnyS3uLWrUjVtHj6oIygyyuL0SHuTzDfcyJiTQWTVyqhxxAgSi0G0s9yko0O5Yn18TZjz2HFF20WuPqGa6UGb1%2B%2BnpvAHQh6gQulF3W4nGboMKblzjGBMPvMn7Yc%2BzjKvrW6WFbC77nvdeRJq8v0XhMfGQS29URLSwwctzyb3VgnXweW&X-Amz-Signature=d52bae7e0dd6e30cb4f99547088ff2a921fd2fea02cd7ccd41c0c74629611e97&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHM6PZZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXAcSI%2BVtNHJ4hTRCMFVDem28XP6VohOL5xEoftgK0QIhAPpNoK%2FxCgzE2k4qFRszkcHcMn7hfLu1Tkqarnx%2B9AnxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYztok1HIVlEoQOm4q3APF8MUFm7PQu64Hme9iX0JkOdhZN1ddi5iybl2stfOPv4YTBLgnzZX2rYA%2BzckgC7%2BZfz4NR1uehiW5RM36RwLzAsyLjBXXWhzy769h9HgnsOQZw%2FAIk%2BX0S7rfwZXACMtLQFym5mGkRH70MUHO7Ot1fKzdFZkyDTRYlfWLnckGn3DwvvKCnU8laB7gvqiTdzufFmfAVqKVUkZJ2RKABckjYFeDMLGLd6UlqJ83q7RMNsu5QYILWadU%2FX2j9JLP8Sq2P9E7y1OxZJmsHaECESP80Wz%2F794ocQxOO9bwNWmdNIBZyqCOLLddOYRuhaz6Vl6wJdjzkMqCWi2iZHTxwmqyp18OShLjZyhmtWR%2FuDggcR7pPEBr%2BR0jvc0ZuRDf7M75DoKPg9XCByUP9YUCkVMnJuvA9cUJbqoojIuFkBtECx%2Fc9HdENQeAHytOu4Y8LiGlg5Ic7gf1mwqlKE7cCls2aANo2taSHNQIV%2F3j0VFZmih4lfWFuyvfrTjfmmgP9RXYxMlKOSDlzVCj1H1k8zJiw8DVYSs8cQIqEpxv6aaLppWHwOiylK9FlZqZQ5adddQW8ulanlhLF5Wq7ZHaiba3G%2FDZZ0TNXcE6QyBQ2ekB0mQmC7GQkIdpfFi1CjCC7PO8BjqkAQQCEXNyHfqCR7fd184KRMufPdJlBA5qiNr10sOrhNkQDnyS3uLWrUjVtHj6oIygyyuL0SHuTzDfcyJiTQWTVyqhxxAgSi0G0s9yko0O5Yn18TZjz2HFF20WuPqGa6UGb1%2B%2BnpvAHQh6gQulF3W4nGboMKblzjGBMPvMn7Yc%2BzjKvrW6WFbC77nvdeRJq8v0XhMfGQS29URLSwwctzyb3VgnXweW&X-Amz-Signature=a05e0e431dd2e0f0f9a2b1d1dec1423107cfc9e8d408ceb6c4ce49bcb1cff45d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHM6PZZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXAcSI%2BVtNHJ4hTRCMFVDem28XP6VohOL5xEoftgK0QIhAPpNoK%2FxCgzE2k4qFRszkcHcMn7hfLu1Tkqarnx%2B9AnxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYztok1HIVlEoQOm4q3APF8MUFm7PQu64Hme9iX0JkOdhZN1ddi5iybl2stfOPv4YTBLgnzZX2rYA%2BzckgC7%2BZfz4NR1uehiW5RM36RwLzAsyLjBXXWhzy769h9HgnsOQZw%2FAIk%2BX0S7rfwZXACMtLQFym5mGkRH70MUHO7Ot1fKzdFZkyDTRYlfWLnckGn3DwvvKCnU8laB7gvqiTdzufFmfAVqKVUkZJ2RKABckjYFeDMLGLd6UlqJ83q7RMNsu5QYILWadU%2FX2j9JLP8Sq2P9E7y1OxZJmsHaECESP80Wz%2F794ocQxOO9bwNWmdNIBZyqCOLLddOYRuhaz6Vl6wJdjzkMqCWi2iZHTxwmqyp18OShLjZyhmtWR%2FuDggcR7pPEBr%2BR0jvc0ZuRDf7M75DoKPg9XCByUP9YUCkVMnJuvA9cUJbqoojIuFkBtECx%2Fc9HdENQeAHytOu4Y8LiGlg5Ic7gf1mwqlKE7cCls2aANo2taSHNQIV%2F3j0VFZmih4lfWFuyvfrTjfmmgP9RXYxMlKOSDlzVCj1H1k8zJiw8DVYSs8cQIqEpxv6aaLppWHwOiylK9FlZqZQ5adddQW8ulanlhLF5Wq7ZHaiba3G%2FDZZ0TNXcE6QyBQ2ekB0mQmC7GQkIdpfFi1CjCC7PO8BjqkAQQCEXNyHfqCR7fd184KRMufPdJlBA5qiNr10sOrhNkQDnyS3uLWrUjVtHj6oIygyyuL0SHuTzDfcyJiTQWTVyqhxxAgSi0G0s9yko0O5Yn18TZjz2HFF20WuPqGa6UGb1%2B%2BnpvAHQh6gQulF3W4nGboMKblzjGBMPvMn7Yc%2BzjKvrW6WFbC77nvdeRJq8v0XhMfGQS29URLSwwctzyb3VgnXweW&X-Amz-Signature=65e239d72e862a3deffd89efb780065a6baba652c7bc33bef14cd56e766c30cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
