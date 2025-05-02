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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUJ3O7H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqrhIMp6PpaF3WaPSnXJ5FGPyReSAY%2BioV%2BEE48MxT5gIhAOHrkw5Zjn7lJfLjHxW0x29SoHmyiKTxk8hJoV%2Bv8BE0KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWa5n7RgsXDZfm%2BK8q3AOM9VJLysT2wm1szo31L5IhsI0wG7wHuUswGyo0VChRJ%2F7u7OtY73YHE0yBewnKZMrVvDT4ULJ9x2wJa0B87vJ9xlk%2BWgT4MZ1aLPNvTMW5h5VL0fxntqmLUOU%2FbqTIG8WIG2n0PV8ZnQ%2B74Y3p2ymXTMnPxqC87wIEV9uDJEyhtGLr90kJTKdbMdpdfJ%2F3Fssl1ze5Vukb7xgDBpsrWIqxB8YKDdzd1awgYYhHQW7Fp5imqfDyZ%2Fiay%2B2XWWS8IF3NZYALfqk10Rdnul%2B41UU95hDSyafAp949enaEj2TOXBK5uI3sEKR%2Fz4AWC4DK8yyHa7xGYsmIIFME6jK9pIG9GaKN9f8rm5EY%2BIqBk7T9y4o1smELkb%2F%2FLwLdjjyuQkv8P8wyD7dUHMz8XmgD6pcfnowBbIyvTUYf7XmUsppomE8ZuXdaqS74GCW%2FmPtXkqwuF1VFO8lex7JEQ5LvLGJYSpMfYO5SRT%2FkFkLoq93BsVD07uZzRnrwvfNBY4c%2FUvF6E3sBzanKtdGK6O0pELWdBbBLaasfa1AiIiYTLZYu81nhvgk%2FKg5gIg0Nj%2BMG1dHfTXqz36UQGEdFyv3E76kPRe%2Bsa5kZhSEdb%2FsrVIdeeEYqTQXyAJy7HArOdTCI2dHABjqkAVvIuJpAQMxdpNUMIX2QhF3DEs3W5kFYR8kzC1h6dZ9C4z9g%2Fy5VSKhyGi9Bi3TDMzjHxGhmmOw1GdBp8DxWFDXPVqXtz9a%2Ffj5YAnVNYsoqzFPr2A4g7%2FBU4tRgkpkWE7xweLtVe%2FOsrm4hA1s1UVb1p3yqtiFqkJjJ%2BlcWIh%2FHi3L4Ik8y%2FVRPCWUaf8NBj46c6%2BmqR7B9tFEeTcmWdWtVVwuZ&X-Amz-Signature=f57b310d45eaf2f9f5bd0aa455195e7d1ee3633ac4bd2fc7d77111bd0d932fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUJ3O7H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqrhIMp6PpaF3WaPSnXJ5FGPyReSAY%2BioV%2BEE48MxT5gIhAOHrkw5Zjn7lJfLjHxW0x29SoHmyiKTxk8hJoV%2Bv8BE0KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWa5n7RgsXDZfm%2BK8q3AOM9VJLysT2wm1szo31L5IhsI0wG7wHuUswGyo0VChRJ%2F7u7OtY73YHE0yBewnKZMrVvDT4ULJ9x2wJa0B87vJ9xlk%2BWgT4MZ1aLPNvTMW5h5VL0fxntqmLUOU%2FbqTIG8WIG2n0PV8ZnQ%2B74Y3p2ymXTMnPxqC87wIEV9uDJEyhtGLr90kJTKdbMdpdfJ%2F3Fssl1ze5Vukb7xgDBpsrWIqxB8YKDdzd1awgYYhHQW7Fp5imqfDyZ%2Fiay%2B2XWWS8IF3NZYALfqk10Rdnul%2B41UU95hDSyafAp949enaEj2TOXBK5uI3sEKR%2Fz4AWC4DK8yyHa7xGYsmIIFME6jK9pIG9GaKN9f8rm5EY%2BIqBk7T9y4o1smELkb%2F%2FLwLdjjyuQkv8P8wyD7dUHMz8XmgD6pcfnowBbIyvTUYf7XmUsppomE8ZuXdaqS74GCW%2FmPtXkqwuF1VFO8lex7JEQ5LvLGJYSpMfYO5SRT%2FkFkLoq93BsVD07uZzRnrwvfNBY4c%2FUvF6E3sBzanKtdGK6O0pELWdBbBLaasfa1AiIiYTLZYu81nhvgk%2FKg5gIg0Nj%2BMG1dHfTXqz36UQGEdFyv3E76kPRe%2Bsa5kZhSEdb%2FsrVIdeeEYqTQXyAJy7HArOdTCI2dHABjqkAVvIuJpAQMxdpNUMIX2QhF3DEs3W5kFYR8kzC1h6dZ9C4z9g%2Fy5VSKhyGi9Bi3TDMzjHxGhmmOw1GdBp8DxWFDXPVqXtz9a%2Ffj5YAnVNYsoqzFPr2A4g7%2FBU4tRgkpkWE7xweLtVe%2FOsrm4hA1s1UVb1p3yqtiFqkJjJ%2BlcWIh%2FHi3L4Ik8y%2FVRPCWUaf8NBj46c6%2BmqR7B9tFEeTcmWdWtVVwuZ&X-Amz-Signature=a5ac2b734c0e1fa3b12f608ff6c0fe74192b239d644d768c65c5e7825416f119&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUJ3O7H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqrhIMp6PpaF3WaPSnXJ5FGPyReSAY%2BioV%2BEE48MxT5gIhAOHrkw5Zjn7lJfLjHxW0x29SoHmyiKTxk8hJoV%2Bv8BE0KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWa5n7RgsXDZfm%2BK8q3AOM9VJLysT2wm1szo31L5IhsI0wG7wHuUswGyo0VChRJ%2F7u7OtY73YHE0yBewnKZMrVvDT4ULJ9x2wJa0B87vJ9xlk%2BWgT4MZ1aLPNvTMW5h5VL0fxntqmLUOU%2FbqTIG8WIG2n0PV8ZnQ%2B74Y3p2ymXTMnPxqC87wIEV9uDJEyhtGLr90kJTKdbMdpdfJ%2F3Fssl1ze5Vukb7xgDBpsrWIqxB8YKDdzd1awgYYhHQW7Fp5imqfDyZ%2Fiay%2B2XWWS8IF3NZYALfqk10Rdnul%2B41UU95hDSyafAp949enaEj2TOXBK5uI3sEKR%2Fz4AWC4DK8yyHa7xGYsmIIFME6jK9pIG9GaKN9f8rm5EY%2BIqBk7T9y4o1smELkb%2F%2FLwLdjjyuQkv8P8wyD7dUHMz8XmgD6pcfnowBbIyvTUYf7XmUsppomE8ZuXdaqS74GCW%2FmPtXkqwuF1VFO8lex7JEQ5LvLGJYSpMfYO5SRT%2FkFkLoq93BsVD07uZzRnrwvfNBY4c%2FUvF6E3sBzanKtdGK6O0pELWdBbBLaasfa1AiIiYTLZYu81nhvgk%2FKg5gIg0Nj%2BMG1dHfTXqz36UQGEdFyv3E76kPRe%2Bsa5kZhSEdb%2FsrVIdeeEYqTQXyAJy7HArOdTCI2dHABjqkAVvIuJpAQMxdpNUMIX2QhF3DEs3W5kFYR8kzC1h6dZ9C4z9g%2Fy5VSKhyGi9Bi3TDMzjHxGhmmOw1GdBp8DxWFDXPVqXtz9a%2Ffj5YAnVNYsoqzFPr2A4g7%2FBU4tRgkpkWE7xweLtVe%2FOsrm4hA1s1UVb1p3yqtiFqkJjJ%2BlcWIh%2FHi3L4Ik8y%2FVRPCWUaf8NBj46c6%2BmqR7B9tFEeTcmWdWtVVwuZ&X-Amz-Signature=d15df088bb2fce21600efd3538ce0ae2228270d75841aa106d48ee7dfeba8ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
