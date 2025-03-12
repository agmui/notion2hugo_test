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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PYR6CV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEhLnifuSwN3EyHcQkV%2B2%2BsLaiYHrRAqkfaFIz5kGcRmAiBBcgL3Ys3xPvvQuMqNPNMXtRAjP9j7cd%2FVbPJzW0kYZiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp7rcYIYjlrL7%2BIirKtwDifyNSU6uZIXR1Qz0dK9LC6Pt59zwHa7HtarhG0vE4RZ%2BsSwAo8JqSK%2Bl4BzXyDDCE4DhIeNxQdNcG86DCfmq1jSNK4GLhyNzCzfrT1A5dx0F%2FTa%2BRgH5Czci6KkBWHzkr7kX9C%2BWt%2BeJr4RAJoXoMoKbmFWBjhlYnWPe1AUzmJnx4j5ALLNLiVovY3GwZJQPmkXUiS4bBAWdVGua3dcfvk7WnbcqB8ruKCfudg0PFzfy5aor4db3nNCgdFSuxQ1yus73%2FrpAWrhrJeFuCIH2X3Jo%2FQYKmqnzVBKySt%2B1noscPF6wQyQ1xr16g31pAtjFUuhDxLLsc9SGgXqR3s6uEzl%2B4hqYizhprjEv87bfvzNTbtHDzsL8czpUBIWTmDBJwFJO15KNwf6qBEHzCaaVqie1VWdmiUNUp4P8YK4UTpVBzN2yudzgTV8BMQkueEsC4JN0nMTwtJwy12pIteJc9fGwagOybkGh433J2wQaSve3o%2FNbe3Gs3vlepXo3Ims6I2G1jsjlOn8wwdwiFZfGu5ol2CFTnVYJXgE2gfyoQ3iC4ueK3qPwsqIAXto6Tt695cp5E2Dl5sdznmizb4m4c0ExnScPEUC9CXvo31NmZ%2FFM2p2p70na9WZNJsQw3aLEvgY6pgGG%2BJqhc07VF%2BhtTeZZEU%2F2%2Bm%2BA%2Bk9Jpolbe37g5D7eZy1Ze6B6y3%2Btkv0C4J8rBo1Rvb5ZMT77D9uIJ0SKCvUNUci8EeDhCXwG4bC56RqtaKrsAdtMYlGUdHMB1kHhz0387MpJAbxU0B4JINoOsHanIykkNMT4jXQYrKhigu271txxKo55xf2e02jIDndqr00frYfmCRqLQ9aJ2eSUOPLkjd5MANKh&X-Amz-Signature=869f3646bd2370d53ba53137999e455ba174a6b72ba37e93167d88a016d280e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PYR6CV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEhLnifuSwN3EyHcQkV%2B2%2BsLaiYHrRAqkfaFIz5kGcRmAiBBcgL3Ys3xPvvQuMqNPNMXtRAjP9j7cd%2FVbPJzW0kYZiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp7rcYIYjlrL7%2BIirKtwDifyNSU6uZIXR1Qz0dK9LC6Pt59zwHa7HtarhG0vE4RZ%2BsSwAo8JqSK%2Bl4BzXyDDCE4DhIeNxQdNcG86DCfmq1jSNK4GLhyNzCzfrT1A5dx0F%2FTa%2BRgH5Czci6KkBWHzkr7kX9C%2BWt%2BeJr4RAJoXoMoKbmFWBjhlYnWPe1AUzmJnx4j5ALLNLiVovY3GwZJQPmkXUiS4bBAWdVGua3dcfvk7WnbcqB8ruKCfudg0PFzfy5aor4db3nNCgdFSuxQ1yus73%2FrpAWrhrJeFuCIH2X3Jo%2FQYKmqnzVBKySt%2B1noscPF6wQyQ1xr16g31pAtjFUuhDxLLsc9SGgXqR3s6uEzl%2B4hqYizhprjEv87bfvzNTbtHDzsL8czpUBIWTmDBJwFJO15KNwf6qBEHzCaaVqie1VWdmiUNUp4P8YK4UTpVBzN2yudzgTV8BMQkueEsC4JN0nMTwtJwy12pIteJc9fGwagOybkGh433J2wQaSve3o%2FNbe3Gs3vlepXo3Ims6I2G1jsjlOn8wwdwiFZfGu5ol2CFTnVYJXgE2gfyoQ3iC4ueK3qPwsqIAXto6Tt695cp5E2Dl5sdznmizb4m4c0ExnScPEUC9CXvo31NmZ%2FFM2p2p70na9WZNJsQw3aLEvgY6pgGG%2BJqhc07VF%2BhtTeZZEU%2F2%2Bm%2BA%2Bk9Jpolbe37g5D7eZy1Ze6B6y3%2Btkv0C4J8rBo1Rvb5ZMT77D9uIJ0SKCvUNUci8EeDhCXwG4bC56RqtaKrsAdtMYlGUdHMB1kHhz0387MpJAbxU0B4JINoOsHanIykkNMT4jXQYrKhigu271txxKo55xf2e02jIDndqr00frYfmCRqLQ9aJ2eSUOPLkjd5MANKh&X-Amz-Signature=db8e2323b2658127ba021e174ef31c9827eaabbdcbbaeabbc46d20ba35c78cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PYR6CV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEhLnifuSwN3EyHcQkV%2B2%2BsLaiYHrRAqkfaFIz5kGcRmAiBBcgL3Ys3xPvvQuMqNPNMXtRAjP9j7cd%2FVbPJzW0kYZiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp7rcYIYjlrL7%2BIirKtwDifyNSU6uZIXR1Qz0dK9LC6Pt59zwHa7HtarhG0vE4RZ%2BsSwAo8JqSK%2Bl4BzXyDDCE4DhIeNxQdNcG86DCfmq1jSNK4GLhyNzCzfrT1A5dx0F%2FTa%2BRgH5Czci6KkBWHzkr7kX9C%2BWt%2BeJr4RAJoXoMoKbmFWBjhlYnWPe1AUzmJnx4j5ALLNLiVovY3GwZJQPmkXUiS4bBAWdVGua3dcfvk7WnbcqB8ruKCfudg0PFzfy5aor4db3nNCgdFSuxQ1yus73%2FrpAWrhrJeFuCIH2X3Jo%2FQYKmqnzVBKySt%2B1noscPF6wQyQ1xr16g31pAtjFUuhDxLLsc9SGgXqR3s6uEzl%2B4hqYizhprjEv87bfvzNTbtHDzsL8czpUBIWTmDBJwFJO15KNwf6qBEHzCaaVqie1VWdmiUNUp4P8YK4UTpVBzN2yudzgTV8BMQkueEsC4JN0nMTwtJwy12pIteJc9fGwagOybkGh433J2wQaSve3o%2FNbe3Gs3vlepXo3Ims6I2G1jsjlOn8wwdwiFZfGu5ol2CFTnVYJXgE2gfyoQ3iC4ueK3qPwsqIAXto6Tt695cp5E2Dl5sdznmizb4m4c0ExnScPEUC9CXvo31NmZ%2FFM2p2p70na9WZNJsQw3aLEvgY6pgGG%2BJqhc07VF%2BhtTeZZEU%2F2%2Bm%2BA%2Bk9Jpolbe37g5D7eZy1Ze6B6y3%2Btkv0C4J8rBo1Rvb5ZMT77D9uIJ0SKCvUNUci8EeDhCXwG4bC56RqtaKrsAdtMYlGUdHMB1kHhz0387MpJAbxU0B4JINoOsHanIykkNMT4jXQYrKhigu271txxKo55xf2e02jIDndqr00frYfmCRqLQ9aJ2eSUOPLkjd5MANKh&X-Amz-Signature=154b0758516fd79d3addeb63f3655ff88331d693a0d8f1a8dc8f4ecf39597262&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
