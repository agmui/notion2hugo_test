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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLG4K6VS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCvEQqfVKopHP4M3iwWbNMfBl21nnTWGMKcWD2kKXhXMwIhAMsYb%2F2iAZS1ZE7ZFeIbXRf76KWu9Z5ibwN9QM72cSOvKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdIvDmgj%2FRi1jjr4q3AOgRhwwUFfFcwh3hl81Wy9m7nThFpTvNiAiNNE8s62sfFei%2Bzzlth4Wa%2F%2BOPerVPCd2fGto8Kbr%2FRZpITojL2i%2BZf87qjheASqwKc58WKLe5ydZI4XajcMD4hn%2FH91122pax%2BLYwdHxorROl27uiueBkRT7iNc%2FD2ht4qmxWCFvOJGk%2BB4GK%2FcCoyNZtJ2c3Ii6Icg%2Fc5OZrxHt%2BQ1TastKR6ubyZ%2BC1iyPtrc71V1ko3HqASasQmxsdVwhJGtzbXrD9WCoeUHCVNZbsbCTAgkET8fPTwan2EWIBzDyIlWt8GrLxYcElCANWayvaqp9UgD8jo%2BnV8XLW8QuZM4Ss46ymObHTvHgp4kJZcuPbn8qwhU2Ek4fAgGCW76pIKN6jMLogxzXT5mYyEeV7MBFWCOgM8hBESAjAycvKq560BoPxK5eIcGLgTkkJ%2BbT1aHARQLgrdgZmQcJyhLhYDzYQ0q03jrFRKiA9pk%2FWWH15T8t3BZ%2Fh%2FVjg5%2BNeaGvBB1r%2FoydiahKySbcx6aQEs9kMdnWXwQYzrHs78b7yqPWe01ib%2BW2TliSIqI%2FbODfe%2B2gfkCz1SEMGviIGzocF%2FeRtjDQk0Xvdrw%2BODIM8BiCFHXnwmZy0gyA1mUsWEIPSzCzutfABjqkAdY9wNSqCk436zlmqCyDSegXkT3N%2BQY0Cb9MSRJn0UAwOvWSELA0kzZCeBzZlg5okYpRe5SUnggrgRWdSsLeABeMM2c%2BljbiWy3PJQ6PX%2FbYHkHudieBGrmt75NxzxBCJea38muwOUcViAWMYk3sx2LmmhOLgZlUZn1CPpIwKPZupiOrXrp9y7ROGc%2BWFNnERe4w93jjtgTh2vVOxmcRvNJMtAa1&X-Amz-Signature=aa6cfef2d2eb49d8f6993673561bcfb487337d5eaa630e1b6289d3014cba43d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLG4K6VS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCvEQqfVKopHP4M3iwWbNMfBl21nnTWGMKcWD2kKXhXMwIhAMsYb%2F2iAZS1ZE7ZFeIbXRf76KWu9Z5ibwN9QM72cSOvKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdIvDmgj%2FRi1jjr4q3AOgRhwwUFfFcwh3hl81Wy9m7nThFpTvNiAiNNE8s62sfFei%2Bzzlth4Wa%2F%2BOPerVPCd2fGto8Kbr%2FRZpITojL2i%2BZf87qjheASqwKc58WKLe5ydZI4XajcMD4hn%2FH91122pax%2BLYwdHxorROl27uiueBkRT7iNc%2FD2ht4qmxWCFvOJGk%2BB4GK%2FcCoyNZtJ2c3Ii6Icg%2Fc5OZrxHt%2BQ1TastKR6ubyZ%2BC1iyPtrc71V1ko3HqASasQmxsdVwhJGtzbXrD9WCoeUHCVNZbsbCTAgkET8fPTwan2EWIBzDyIlWt8GrLxYcElCANWayvaqp9UgD8jo%2BnV8XLW8QuZM4Ss46ymObHTvHgp4kJZcuPbn8qwhU2Ek4fAgGCW76pIKN6jMLogxzXT5mYyEeV7MBFWCOgM8hBESAjAycvKq560BoPxK5eIcGLgTkkJ%2BbT1aHARQLgrdgZmQcJyhLhYDzYQ0q03jrFRKiA9pk%2FWWH15T8t3BZ%2Fh%2FVjg5%2BNeaGvBB1r%2FoydiahKySbcx6aQEs9kMdnWXwQYzrHs78b7yqPWe01ib%2BW2TliSIqI%2FbODfe%2B2gfkCz1SEMGviIGzocF%2FeRtjDQk0Xvdrw%2BODIM8BiCFHXnwmZy0gyA1mUsWEIPSzCzutfABjqkAdY9wNSqCk436zlmqCyDSegXkT3N%2BQY0Cb9MSRJn0UAwOvWSELA0kzZCeBzZlg5okYpRe5SUnggrgRWdSsLeABeMM2c%2BljbiWy3PJQ6PX%2FbYHkHudieBGrmt75NxzxBCJea38muwOUcViAWMYk3sx2LmmhOLgZlUZn1CPpIwKPZupiOrXrp9y7ROGc%2BWFNnERe4w93jjtgTh2vVOxmcRvNJMtAa1&X-Amz-Signature=ca5f24af6ed07f4f0e3fec43a3bf88164e525da6481430f004c0e6ebe3677b25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLG4K6VS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCvEQqfVKopHP4M3iwWbNMfBl21nnTWGMKcWD2kKXhXMwIhAMsYb%2F2iAZS1ZE7ZFeIbXRf76KWu9Z5ibwN9QM72cSOvKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdIvDmgj%2FRi1jjr4q3AOgRhwwUFfFcwh3hl81Wy9m7nThFpTvNiAiNNE8s62sfFei%2Bzzlth4Wa%2F%2BOPerVPCd2fGto8Kbr%2FRZpITojL2i%2BZf87qjheASqwKc58WKLe5ydZI4XajcMD4hn%2FH91122pax%2BLYwdHxorROl27uiueBkRT7iNc%2FD2ht4qmxWCFvOJGk%2BB4GK%2FcCoyNZtJ2c3Ii6Icg%2Fc5OZrxHt%2BQ1TastKR6ubyZ%2BC1iyPtrc71V1ko3HqASasQmxsdVwhJGtzbXrD9WCoeUHCVNZbsbCTAgkET8fPTwan2EWIBzDyIlWt8GrLxYcElCANWayvaqp9UgD8jo%2BnV8XLW8QuZM4Ss46ymObHTvHgp4kJZcuPbn8qwhU2Ek4fAgGCW76pIKN6jMLogxzXT5mYyEeV7MBFWCOgM8hBESAjAycvKq560BoPxK5eIcGLgTkkJ%2BbT1aHARQLgrdgZmQcJyhLhYDzYQ0q03jrFRKiA9pk%2FWWH15T8t3BZ%2Fh%2FVjg5%2BNeaGvBB1r%2FoydiahKySbcx6aQEs9kMdnWXwQYzrHs78b7yqPWe01ib%2BW2TliSIqI%2FbODfe%2B2gfkCz1SEMGviIGzocF%2FeRtjDQk0Xvdrw%2BODIM8BiCFHXnwmZy0gyA1mUsWEIPSzCzutfABjqkAdY9wNSqCk436zlmqCyDSegXkT3N%2BQY0Cb9MSRJn0UAwOvWSELA0kzZCeBzZlg5okYpRe5SUnggrgRWdSsLeABeMM2c%2BljbiWy3PJQ6PX%2FbYHkHudieBGrmt75NxzxBCJea38muwOUcViAWMYk3sx2LmmhOLgZlUZn1CPpIwKPZupiOrXrp9y7ROGc%2BWFNnERe4w93jjtgTh2vVOxmcRvNJMtAa1&X-Amz-Signature=e4fd011612708ce766150ed18d7b65e11d18230837155d27d72ebe75df7ba1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
