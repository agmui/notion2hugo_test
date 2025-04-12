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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDGKNPB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCPQe1bQ6Mv30j%2FkiEseG6ZbFPSOIA2GPrjyyF2doqVKQIhAMxjTBp%2Bz2XFvHfahAQnfaRp5HZUtpHvbHPPAKy74XeFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydaoUUSAyBBPp%2BJvYq3APDcKTZk0K%2Bws77tV3pVQaX704dv7sscUgaPsxWdOnk6XbLa2i%2F9P%2BJlG8nxzU0Y3bDBPtSAy%2B%2FFxVf%2Fl0jl%2Fx2jFpx1jsskLEtdP4nd8cnemOEWoGI4n7RieBCrbtdGc4RpLqyCF4LnOe9hAosZIT7UXhNAxLYwgAK6i1%2Bpskj4klCujvVNyznzppAp7kYQ%2BAENnqHZOld9BVo21qkqSyyGhZhjgElR8mCPBaDeKDa3WATPqihBB3lsrs6UMbb82vTDycWcsL6LGNiWeugxOIRuWPYvZCGZgaeF2l9F3q0lBCdJmkT4673nP5ee7jWRFzMc82NBfAo01sxZo65RKAYD7DsifkeVokpT26xbSZ1rj6GBwgoTER7%2BEezPu3tkNUYn8%2F9d2WBdyj4qcJ4v4wL4AgwAk%2BV3KCfZWq9MrLeUEnCjYuNEFcCL2sA%2BsFjpcpVm7vtzJHdBiFI9z2uViB1S99PG7VmDLNs5ApJphc9VzmJ7zMnMW3tc9s75on6HwFyU96ebvi%2BvqpPBCE4VDeAapClvhfo%2BGyHdFYst%2BlEBfzkeL%2BbUk7t%2Fl8%2FktsjtUoDqqmDUH8AOAhczvWcxbug6JvA0bcNTcx0xc7YWdXtHczFjkUTFTKoBhISFzDopui%2FBjqkAbjRalqM5OhC0X0hFMBMnAenla0p1yyUFmXSHPmW9xhmGuQ9uy3ozgmzV%2BfvBNQf1ANegzZcElfWA7GuE5YgZMrXy6qT%2Bby8UyLJu6uYJ65ZiQaqBoSnTp08PKCv8z%2FgjHt5NPavmHtypnkh0ctfjTl2nmBZUqjQMhaDhENIWBbMy668A7GVVaD%2BBXMYW3ytuSMKzqdyJXUL4ADAWWStH86cqa7h&X-Amz-Signature=7b96afb6ee76e40ad19b045ce6417c361a1097cb577f4f0649390be6b567ae0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDGKNPB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCPQe1bQ6Mv30j%2FkiEseG6ZbFPSOIA2GPrjyyF2doqVKQIhAMxjTBp%2Bz2XFvHfahAQnfaRp5HZUtpHvbHPPAKy74XeFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydaoUUSAyBBPp%2BJvYq3APDcKTZk0K%2Bws77tV3pVQaX704dv7sscUgaPsxWdOnk6XbLa2i%2F9P%2BJlG8nxzU0Y3bDBPtSAy%2B%2FFxVf%2Fl0jl%2Fx2jFpx1jsskLEtdP4nd8cnemOEWoGI4n7RieBCrbtdGc4RpLqyCF4LnOe9hAosZIT7UXhNAxLYwgAK6i1%2Bpskj4klCujvVNyznzppAp7kYQ%2BAENnqHZOld9BVo21qkqSyyGhZhjgElR8mCPBaDeKDa3WATPqihBB3lsrs6UMbb82vTDycWcsL6LGNiWeugxOIRuWPYvZCGZgaeF2l9F3q0lBCdJmkT4673nP5ee7jWRFzMc82NBfAo01sxZo65RKAYD7DsifkeVokpT26xbSZ1rj6GBwgoTER7%2BEezPu3tkNUYn8%2F9d2WBdyj4qcJ4v4wL4AgwAk%2BV3KCfZWq9MrLeUEnCjYuNEFcCL2sA%2BsFjpcpVm7vtzJHdBiFI9z2uViB1S99PG7VmDLNs5ApJphc9VzmJ7zMnMW3tc9s75on6HwFyU96ebvi%2BvqpPBCE4VDeAapClvhfo%2BGyHdFYst%2BlEBfzkeL%2BbUk7t%2Fl8%2FktsjtUoDqqmDUH8AOAhczvWcxbug6JvA0bcNTcx0xc7YWdXtHczFjkUTFTKoBhISFzDopui%2FBjqkAbjRalqM5OhC0X0hFMBMnAenla0p1yyUFmXSHPmW9xhmGuQ9uy3ozgmzV%2BfvBNQf1ANegzZcElfWA7GuE5YgZMrXy6qT%2Bby8UyLJu6uYJ65ZiQaqBoSnTp08PKCv8z%2FgjHt5NPavmHtypnkh0ctfjTl2nmBZUqjQMhaDhENIWBbMy668A7GVVaD%2BBXMYW3ytuSMKzqdyJXUL4ADAWWStH86cqa7h&X-Amz-Signature=fd15535d195f24d24f7617677711e5d92d68480ee0da7066a6981ab6ced44508&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDGKNPB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCPQe1bQ6Mv30j%2FkiEseG6ZbFPSOIA2GPrjyyF2doqVKQIhAMxjTBp%2Bz2XFvHfahAQnfaRp5HZUtpHvbHPPAKy74XeFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydaoUUSAyBBPp%2BJvYq3APDcKTZk0K%2Bws77tV3pVQaX704dv7sscUgaPsxWdOnk6XbLa2i%2F9P%2BJlG8nxzU0Y3bDBPtSAy%2B%2FFxVf%2Fl0jl%2Fx2jFpx1jsskLEtdP4nd8cnemOEWoGI4n7RieBCrbtdGc4RpLqyCF4LnOe9hAosZIT7UXhNAxLYwgAK6i1%2Bpskj4klCujvVNyznzppAp7kYQ%2BAENnqHZOld9BVo21qkqSyyGhZhjgElR8mCPBaDeKDa3WATPqihBB3lsrs6UMbb82vTDycWcsL6LGNiWeugxOIRuWPYvZCGZgaeF2l9F3q0lBCdJmkT4673nP5ee7jWRFzMc82NBfAo01sxZo65RKAYD7DsifkeVokpT26xbSZ1rj6GBwgoTER7%2BEezPu3tkNUYn8%2F9d2WBdyj4qcJ4v4wL4AgwAk%2BV3KCfZWq9MrLeUEnCjYuNEFcCL2sA%2BsFjpcpVm7vtzJHdBiFI9z2uViB1S99PG7VmDLNs5ApJphc9VzmJ7zMnMW3tc9s75on6HwFyU96ebvi%2BvqpPBCE4VDeAapClvhfo%2BGyHdFYst%2BlEBfzkeL%2BbUk7t%2Fl8%2FktsjtUoDqqmDUH8AOAhczvWcxbug6JvA0bcNTcx0xc7YWdXtHczFjkUTFTKoBhISFzDopui%2FBjqkAbjRalqM5OhC0X0hFMBMnAenla0p1yyUFmXSHPmW9xhmGuQ9uy3ozgmzV%2BfvBNQf1ANegzZcElfWA7GuE5YgZMrXy6qT%2Bby8UyLJu6uYJ65ZiQaqBoSnTp08PKCv8z%2FgjHt5NPavmHtypnkh0ctfjTl2nmBZUqjQMhaDhENIWBbMy668A7GVVaD%2BBXMYW3ytuSMKzqdyJXUL4ADAWWStH86cqa7h&X-Amz-Signature=16c92632d334acbfc067260dde2f766bded17e095d6f0303ba917269abb820ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
