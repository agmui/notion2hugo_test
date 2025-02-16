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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQ2GQVH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCvgkGGP4oyn6ELQEa%2FvKIXqVFnfsYhsK0t09qok0EpuAIgDtJnmEOIEgi4LAGmCYdR253coVoQwhlTYZdZyvAUSjUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEo4%2FFrUDuRseY17iSrcAzF9JGISOLGx0Oi%2FsieUR0l8rVGn3NHJ9NNGLOgyqzQtn7w0wXMjpXjJnlKLCvgvPQB3%2BrqI6yYD%2BCijjiWo8WT4OmSCwcAZjIuObPkZBwJmT3wQkRv9FksYQ6u1%2BSJIAf5F9WX0aHEruqdPYl833kh5YaPHMYMfuRvLC8We%2FM%2BbaodmMUBuicwNdf25PDJ4TfoogClMyiURaRHzf1Q%2F%2FKbedsu7%2Bpp9jbdrhSj6jVLKAiXTOlKeUFQRu4WH5uQuMkSrGGoBbl8LCXZBCn3E5v3q9JWzIluxRrgyxExw1i3DpCsdNawKI%2BejGPcHEBX7AazkT7l3uJrxvgxDiyWnkOLzpQFxi0Ktibwz0eybe2JHxkumiAgovYPESyNfgHDhm0G0UQVeIW1vq4s3Pd8crq9GLnIoB2WVnADi7%2BkSWsno%2BDqebor3SvdikTLhFmR8%2BrYNZsWOnhl1ML3uuOGzWV0Y6ndz9zqT9cuy1U06hbgE9ANqR9gLQvUDJ2gP%2FXY94QWB0CE%2BNGSGQ7Ni%2BpoIvWcUMuEQGLUc9z7P806KI58EXIvrbLGx18vf7QLFDGpUZOAXqnksUGGN8pF1xiuv3%2FJQm1ATud1f5eZKi8TlgxVxb2MMuWsLLcY5LdrNMKvByL0GOqUBOxlFQxUPgJVa6BiTadyCGPwjQA9BusPxGyExoAuM6PwwGh4z98CfhRguB2nLaU%2Fn14%2BUQ2Qqlo1eg0C%2FvurFuEAnxdXr3%2FbkciuipxUhZZHkuBqd5dERfLwmRavO%2BoZnbdRJ1RqJHAYnbrt5DhBjKL%2BeHv7GTM%2BkMGcNdm1Ve6i6UIr%2FSfidpnbT7wEnGohXAQS9jMizs0KjOKFmwMsdelgb5gsg&X-Amz-Signature=94a004b49b1dc4aa02c148487ed007e625660f6c0c441b7ef930014b0850ebad&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQ2GQVH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCvgkGGP4oyn6ELQEa%2FvKIXqVFnfsYhsK0t09qok0EpuAIgDtJnmEOIEgi4LAGmCYdR253coVoQwhlTYZdZyvAUSjUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEo4%2FFrUDuRseY17iSrcAzF9JGISOLGx0Oi%2FsieUR0l8rVGn3NHJ9NNGLOgyqzQtn7w0wXMjpXjJnlKLCvgvPQB3%2BrqI6yYD%2BCijjiWo8WT4OmSCwcAZjIuObPkZBwJmT3wQkRv9FksYQ6u1%2BSJIAf5F9WX0aHEruqdPYl833kh5YaPHMYMfuRvLC8We%2FM%2BbaodmMUBuicwNdf25PDJ4TfoogClMyiURaRHzf1Q%2F%2FKbedsu7%2Bpp9jbdrhSj6jVLKAiXTOlKeUFQRu4WH5uQuMkSrGGoBbl8LCXZBCn3E5v3q9JWzIluxRrgyxExw1i3DpCsdNawKI%2BejGPcHEBX7AazkT7l3uJrxvgxDiyWnkOLzpQFxi0Ktibwz0eybe2JHxkumiAgovYPESyNfgHDhm0G0UQVeIW1vq4s3Pd8crq9GLnIoB2WVnADi7%2BkSWsno%2BDqebor3SvdikTLhFmR8%2BrYNZsWOnhl1ML3uuOGzWV0Y6ndz9zqT9cuy1U06hbgE9ANqR9gLQvUDJ2gP%2FXY94QWB0CE%2BNGSGQ7Ni%2BpoIvWcUMuEQGLUc9z7P806KI58EXIvrbLGx18vf7QLFDGpUZOAXqnksUGGN8pF1xiuv3%2FJQm1ATud1f5eZKi8TlgxVxb2MMuWsLLcY5LdrNMKvByL0GOqUBOxlFQxUPgJVa6BiTadyCGPwjQA9BusPxGyExoAuM6PwwGh4z98CfhRguB2nLaU%2Fn14%2BUQ2Qqlo1eg0C%2FvurFuEAnxdXr3%2FbkciuipxUhZZHkuBqd5dERfLwmRavO%2BoZnbdRJ1RqJHAYnbrt5DhBjKL%2BeHv7GTM%2BkMGcNdm1Ve6i6UIr%2FSfidpnbT7wEnGohXAQS9jMizs0KjOKFmwMsdelgb5gsg&X-Amz-Signature=b5d1ed5bec546f68d2287ac4ab3ceb0cf3b4131e5f4a8f95156708a69c60dfb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQ2GQVH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCvgkGGP4oyn6ELQEa%2FvKIXqVFnfsYhsK0t09qok0EpuAIgDtJnmEOIEgi4LAGmCYdR253coVoQwhlTYZdZyvAUSjUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEo4%2FFrUDuRseY17iSrcAzF9JGISOLGx0Oi%2FsieUR0l8rVGn3NHJ9NNGLOgyqzQtn7w0wXMjpXjJnlKLCvgvPQB3%2BrqI6yYD%2BCijjiWo8WT4OmSCwcAZjIuObPkZBwJmT3wQkRv9FksYQ6u1%2BSJIAf5F9WX0aHEruqdPYl833kh5YaPHMYMfuRvLC8We%2FM%2BbaodmMUBuicwNdf25PDJ4TfoogClMyiURaRHzf1Q%2F%2FKbedsu7%2Bpp9jbdrhSj6jVLKAiXTOlKeUFQRu4WH5uQuMkSrGGoBbl8LCXZBCn3E5v3q9JWzIluxRrgyxExw1i3DpCsdNawKI%2BejGPcHEBX7AazkT7l3uJrxvgxDiyWnkOLzpQFxi0Ktibwz0eybe2JHxkumiAgovYPESyNfgHDhm0G0UQVeIW1vq4s3Pd8crq9GLnIoB2WVnADi7%2BkSWsno%2BDqebor3SvdikTLhFmR8%2BrYNZsWOnhl1ML3uuOGzWV0Y6ndz9zqT9cuy1U06hbgE9ANqR9gLQvUDJ2gP%2FXY94QWB0CE%2BNGSGQ7Ni%2BpoIvWcUMuEQGLUc9z7P806KI58EXIvrbLGx18vf7QLFDGpUZOAXqnksUGGN8pF1xiuv3%2FJQm1ATud1f5eZKi8TlgxVxb2MMuWsLLcY5LdrNMKvByL0GOqUBOxlFQxUPgJVa6BiTadyCGPwjQA9BusPxGyExoAuM6PwwGh4z98CfhRguB2nLaU%2Fn14%2BUQ2Qqlo1eg0C%2FvurFuEAnxdXr3%2FbkciuipxUhZZHkuBqd5dERfLwmRavO%2BoZnbdRJ1RqJHAYnbrt5DhBjKL%2BeHv7GTM%2BkMGcNdm1Ve6i6UIr%2FSfidpnbT7wEnGohXAQS9jMizs0KjOKFmwMsdelgb5gsg&X-Amz-Signature=da87079d809b00a2cb740a54039f33fdc6babc950dddd2aa18830e1e20aff3be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
