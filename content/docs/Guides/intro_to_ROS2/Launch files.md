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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHX4N4XX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGaY%2B16xiwh3VwG52NAlWHmJKGDYKjL0x405vPqxIYMAIhAJchJDwWBKgH9ckne1XmMo0AMpL%2B0RE9OjWgpI8z2GW2KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BkKxRwxEG61KHEmEq3AOO%2FvwFNBIseAHVW3E%2F8ecnrVauT5EWo9zU0Hgs2fkgdPwWkDczMF6suatdR0y8XTLmj4PUYSdv8LLI3EpHLRaT0q2mio%2BKXD9Z%2BaY27wo6v7cN9SDQbDOr9D1fr1znMXWwrSbtrtrHK6VuQ%2BTl2iNsNxSKLwO24Rj8P3bRgNnW5VAu%2BZ7RfQ8wnB76Yp3ULCCK1ZuWA7967lnIpQaZZPgEEaRKvDizcYeQFMq2EGWL8YedSqKIz3Yiu17D340rUoTQJ0aidWdEYEK2I6j0ZdXA4H98wd4iwL6r20lfClIhVmqfPbRtfe0knxHNv8h%2BoVJJuWngMbf8QKcof6ADmP1et2jd4L7E0cLqF%2Bil9kuNs1FsM3eEX8727pMXbR7qoi%2FWIyw%2B6lQnF%2BBhC08JFtD%2FYeKbZ6bXsL7exNruH5dYjhLSGMOOkiTxoanKrTbxMHgxkL0weq303p3OqUGCHysWQwINZ%2FIEovoLta0FyqkrhwiZyMA96w9aPpGPyQyVQQG9kg0NkJbL9%2BqCW6rCgxD%2BZ0SQkndJ8tYsLTXzJ11kGweUvhKAZXSonmjaKrUQsha5Q72fYDRLwuoaV2UYPC%2B1hZlj7REw9p5pe5d6Fbjx5fVc4pvT%2FuOfsal0HDCO8J3CBjqkATnjmVmpmYKhH%2FXqODuYJ4GOhNNY99zpSznSk%2F070TbE1%2F%2Bg%2FZfESmNJfIzOT4mSvMd8TCtTbWE5%2Bh3n%2FgvW05RFvPflRQ8moZ37jb%2FKmRcuXCuEl1oC94cipGyMvdKqq1rQm7P4HeSPg2Tc9GpMMcitFTCYOTMsdw%2FhlpjxoVplN00Vs1C9qo15PrF4G1Hw8DVkie2biS%2Fjlp3d7fB62KyfFuFL&X-Amz-Signature=0d15a57a29d5a15fcaa909a05003637a39bad10241c96ba4682d1c4dfd108fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHX4N4XX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGaY%2B16xiwh3VwG52NAlWHmJKGDYKjL0x405vPqxIYMAIhAJchJDwWBKgH9ckne1XmMo0AMpL%2B0RE9OjWgpI8z2GW2KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BkKxRwxEG61KHEmEq3AOO%2FvwFNBIseAHVW3E%2F8ecnrVauT5EWo9zU0Hgs2fkgdPwWkDczMF6suatdR0y8XTLmj4PUYSdv8LLI3EpHLRaT0q2mio%2BKXD9Z%2BaY27wo6v7cN9SDQbDOr9D1fr1znMXWwrSbtrtrHK6VuQ%2BTl2iNsNxSKLwO24Rj8P3bRgNnW5VAu%2BZ7RfQ8wnB76Yp3ULCCK1ZuWA7967lnIpQaZZPgEEaRKvDizcYeQFMq2EGWL8YedSqKIz3Yiu17D340rUoTQJ0aidWdEYEK2I6j0ZdXA4H98wd4iwL6r20lfClIhVmqfPbRtfe0knxHNv8h%2BoVJJuWngMbf8QKcof6ADmP1et2jd4L7E0cLqF%2Bil9kuNs1FsM3eEX8727pMXbR7qoi%2FWIyw%2B6lQnF%2BBhC08JFtD%2FYeKbZ6bXsL7exNruH5dYjhLSGMOOkiTxoanKrTbxMHgxkL0weq303p3OqUGCHysWQwINZ%2FIEovoLta0FyqkrhwiZyMA96w9aPpGPyQyVQQG9kg0NkJbL9%2BqCW6rCgxD%2BZ0SQkndJ8tYsLTXzJ11kGweUvhKAZXSonmjaKrUQsha5Q72fYDRLwuoaV2UYPC%2B1hZlj7REw9p5pe5d6Fbjx5fVc4pvT%2FuOfsal0HDCO8J3CBjqkATnjmVmpmYKhH%2FXqODuYJ4GOhNNY99zpSznSk%2F070TbE1%2F%2Bg%2FZfESmNJfIzOT4mSvMd8TCtTbWE5%2Bh3n%2FgvW05RFvPflRQ8moZ37jb%2FKmRcuXCuEl1oC94cipGyMvdKqq1rQm7P4HeSPg2Tc9GpMMcitFTCYOTMsdw%2FhlpjxoVplN00Vs1C9qo15PrF4G1Hw8DVkie2biS%2Fjlp3d7fB62KyfFuFL&X-Amz-Signature=612b18a23b15374702fd99427865335910de15fbd5a07e07731c3110ce5ded48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHX4N4XX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGaY%2B16xiwh3VwG52NAlWHmJKGDYKjL0x405vPqxIYMAIhAJchJDwWBKgH9ckne1XmMo0AMpL%2B0RE9OjWgpI8z2GW2KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BkKxRwxEG61KHEmEq3AOO%2FvwFNBIseAHVW3E%2F8ecnrVauT5EWo9zU0Hgs2fkgdPwWkDczMF6suatdR0y8XTLmj4PUYSdv8LLI3EpHLRaT0q2mio%2BKXD9Z%2BaY27wo6v7cN9SDQbDOr9D1fr1znMXWwrSbtrtrHK6VuQ%2BTl2iNsNxSKLwO24Rj8P3bRgNnW5VAu%2BZ7RfQ8wnB76Yp3ULCCK1ZuWA7967lnIpQaZZPgEEaRKvDizcYeQFMq2EGWL8YedSqKIz3Yiu17D340rUoTQJ0aidWdEYEK2I6j0ZdXA4H98wd4iwL6r20lfClIhVmqfPbRtfe0knxHNv8h%2BoVJJuWngMbf8QKcof6ADmP1et2jd4L7E0cLqF%2Bil9kuNs1FsM3eEX8727pMXbR7qoi%2FWIyw%2B6lQnF%2BBhC08JFtD%2FYeKbZ6bXsL7exNruH5dYjhLSGMOOkiTxoanKrTbxMHgxkL0weq303p3OqUGCHysWQwINZ%2FIEovoLta0FyqkrhwiZyMA96w9aPpGPyQyVQQG9kg0NkJbL9%2BqCW6rCgxD%2BZ0SQkndJ8tYsLTXzJ11kGweUvhKAZXSonmjaKrUQsha5Q72fYDRLwuoaV2UYPC%2B1hZlj7REw9p5pe5d6Fbjx5fVc4pvT%2FuOfsal0HDCO8J3CBjqkATnjmVmpmYKhH%2FXqODuYJ4GOhNNY99zpSznSk%2F070TbE1%2F%2Bg%2FZfESmNJfIzOT4mSvMd8TCtTbWE5%2Bh3n%2FgvW05RFvPflRQ8moZ37jb%2FKmRcuXCuEl1oC94cipGyMvdKqq1rQm7P4HeSPg2Tc9GpMMcitFTCYOTMsdw%2FhlpjxoVplN00Vs1C9qo15PrF4G1Hw8DVkie2biS%2Fjlp3d7fB62KyfFuFL&X-Amz-Signature=c961f0303226d3edbe42bcf8282c0c2483ad14ddc750f0d2bf6df4e0dc584afa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
