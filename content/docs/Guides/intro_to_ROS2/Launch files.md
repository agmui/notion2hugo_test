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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCGSAGU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCPhS7TgU2j5iHzxiPW8LmGrnlRS3H7qh1NAvhkazJ8VgIhAKXhg8r3iRftEdw6V5fvJknmEXpb88W5PM14xrtwCkHjKv8DCH4QABoMNjM3NDIzMTgzODA1IgzW%2BcmDY0ImQPDgQlQq3ANO4zCsh0g0VrrS8nOKkV7%2B%2Bcv8eJYZYbDo7fml6%2BgjjPIW0Ofs9jQAU0%2FSmLSijPgAhy6x1W%2FCo%2FAOj2hfh%2BiuVNENiHBtX4lvqAVWiVzfl3Co3PmAT956ES3rXd8qC4ipCFOQ2mIvXlLQi0gfEgXHPunUfTYbYKl72vlg%2FOaVY1f827Vl70hAwBPeH%2FkAXhHoHdqaN4qP8JBweiumI9V8zfdnn1UwnyGfOFoAitfb0Dm4wAZzq5bm8HQ%2FoxGN48HrvsQOP2I7e89kP2qEjw01pJP%2FLyRkaq9mxiQCRZ2cxrlSFoBpXpo%2B4QlSlz1aME4WJY0f6cLpv5Muo9kDsC%2BmAHpyJ%2FElmLJKt2FCisRsBVI3TzAB0uY722QMZggz6Ah%2BQpEsxhvSMGdN2ewPoA47Bs1443t94IEkOZgYqOJbgQFBukPyiXK1r8iZJqrPeGQ%2BgoN6D1gF3EiRKiL6GINfVEYA9Y2ACGC%2F0SddSovaIT9e3g7mLYTtsm2x3XmjGlTug%2Bk6gTmH%2F22UfROFtmpGb1B9sdJ1wENz78NODCKloJh9iKhiwDizGq47p0T8Dm03Ks0i3sMXx1tuAPniA74MpJKhbO4FtJBF4gtEjv4JzBoRx2EAMIl%2BuyN7KTDxy869BjqkAe74N3AYH2PY%2BslzGbLMD6%2FIlYgkTK8BMVA32CDIUF21Y2F%2B2TlkyidlZkcS%2BwMpkr5HUi23NeFq1EXE1fMDujOgkQGD6EvS%2FI19Sj5P102j3RsqFvRDaQ0B2oCOZSRWI%2FjGrUSUn97uxpm%2FUJO6Az3z6ThS2B7R45C01Ul9LaoXILqi729yi43VMoM1Nx%2BzqVeMHh3VXq59oG7dphMynwA7cqss&X-Amz-Signature=de8d70a6d58fdf0e21997716e8c9383d0ec5a0716a3270af4b6370bc55c64a70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCGSAGU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCPhS7TgU2j5iHzxiPW8LmGrnlRS3H7qh1NAvhkazJ8VgIhAKXhg8r3iRftEdw6V5fvJknmEXpb88W5PM14xrtwCkHjKv8DCH4QABoMNjM3NDIzMTgzODA1IgzW%2BcmDY0ImQPDgQlQq3ANO4zCsh0g0VrrS8nOKkV7%2B%2Bcv8eJYZYbDo7fml6%2BgjjPIW0Ofs9jQAU0%2FSmLSijPgAhy6x1W%2FCo%2FAOj2hfh%2BiuVNENiHBtX4lvqAVWiVzfl3Co3PmAT956ES3rXd8qC4ipCFOQ2mIvXlLQi0gfEgXHPunUfTYbYKl72vlg%2FOaVY1f827Vl70hAwBPeH%2FkAXhHoHdqaN4qP8JBweiumI9V8zfdnn1UwnyGfOFoAitfb0Dm4wAZzq5bm8HQ%2FoxGN48HrvsQOP2I7e89kP2qEjw01pJP%2FLyRkaq9mxiQCRZ2cxrlSFoBpXpo%2B4QlSlz1aME4WJY0f6cLpv5Muo9kDsC%2BmAHpyJ%2FElmLJKt2FCisRsBVI3TzAB0uY722QMZggz6Ah%2BQpEsxhvSMGdN2ewPoA47Bs1443t94IEkOZgYqOJbgQFBukPyiXK1r8iZJqrPeGQ%2BgoN6D1gF3EiRKiL6GINfVEYA9Y2ACGC%2F0SddSovaIT9e3g7mLYTtsm2x3XmjGlTug%2Bk6gTmH%2F22UfROFtmpGb1B9sdJ1wENz78NODCKloJh9iKhiwDizGq47p0T8Dm03Ks0i3sMXx1tuAPniA74MpJKhbO4FtJBF4gtEjv4JzBoRx2EAMIl%2BuyN7KTDxy869BjqkAe74N3AYH2PY%2BslzGbLMD6%2FIlYgkTK8BMVA32CDIUF21Y2F%2B2TlkyidlZkcS%2BwMpkr5HUi23NeFq1EXE1fMDujOgkQGD6EvS%2FI19Sj5P102j3RsqFvRDaQ0B2oCOZSRWI%2FjGrUSUn97uxpm%2FUJO6Az3z6ThS2B7R45C01Ul9LaoXILqi729yi43VMoM1Nx%2BzqVeMHh3VXq59oG7dphMynwA7cqss&X-Amz-Signature=83197e45c5731315c34030cf536620aa45eb3213d5aad697b3b31e50733cf0db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCGSAGU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCPhS7TgU2j5iHzxiPW8LmGrnlRS3H7qh1NAvhkazJ8VgIhAKXhg8r3iRftEdw6V5fvJknmEXpb88W5PM14xrtwCkHjKv8DCH4QABoMNjM3NDIzMTgzODA1IgzW%2BcmDY0ImQPDgQlQq3ANO4zCsh0g0VrrS8nOKkV7%2B%2Bcv8eJYZYbDo7fml6%2BgjjPIW0Ofs9jQAU0%2FSmLSijPgAhy6x1W%2FCo%2FAOj2hfh%2BiuVNENiHBtX4lvqAVWiVzfl3Co3PmAT956ES3rXd8qC4ipCFOQ2mIvXlLQi0gfEgXHPunUfTYbYKl72vlg%2FOaVY1f827Vl70hAwBPeH%2FkAXhHoHdqaN4qP8JBweiumI9V8zfdnn1UwnyGfOFoAitfb0Dm4wAZzq5bm8HQ%2FoxGN48HrvsQOP2I7e89kP2qEjw01pJP%2FLyRkaq9mxiQCRZ2cxrlSFoBpXpo%2B4QlSlz1aME4WJY0f6cLpv5Muo9kDsC%2BmAHpyJ%2FElmLJKt2FCisRsBVI3TzAB0uY722QMZggz6Ah%2BQpEsxhvSMGdN2ewPoA47Bs1443t94IEkOZgYqOJbgQFBukPyiXK1r8iZJqrPeGQ%2BgoN6D1gF3EiRKiL6GINfVEYA9Y2ACGC%2F0SddSovaIT9e3g7mLYTtsm2x3XmjGlTug%2Bk6gTmH%2F22UfROFtmpGb1B9sdJ1wENz78NODCKloJh9iKhiwDizGq47p0T8Dm03Ks0i3sMXx1tuAPniA74MpJKhbO4FtJBF4gtEjv4JzBoRx2EAMIl%2BuyN7KTDxy869BjqkAe74N3AYH2PY%2BslzGbLMD6%2FIlYgkTK8BMVA32CDIUF21Y2F%2B2TlkyidlZkcS%2BwMpkr5HUi23NeFq1EXE1fMDujOgkQGD6EvS%2FI19Sj5P102j3RsqFvRDaQ0B2oCOZSRWI%2FjGrUSUn97uxpm%2FUJO6Az3z6ThS2B7R45C01Ul9LaoXILqi729yi43VMoM1Nx%2BzqVeMHh3VXq59oG7dphMynwA7cqss&X-Amz-Signature=f035f35fd0ff59f98c46e247ba6806930eb3185e5700d3e196922b0e3abe0327&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
