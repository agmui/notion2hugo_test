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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUXVUKM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjETa0DDxPtUFl4ClzKzTv8O7yCu2XkYK2YvILsPvgIAIgMDExHVqnybf2jA5eEuGUcOMueDWXyRu1NknlrTMb4Coq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGwlhybV%2BQAwxH105SrcAw4AktSBAMkOzz%2BE0v01eSdjmMUYHmvwYX8Ex2LzELOK76RBlFwwRTeEAOlMlmWscyBG3ImthMbh0C%2BwJEj0lM1ohXZ5sGbedv%2FkGq8JphFy4Ov%2FQ4jx4SuICho6EabH55EDMIfb30TDX3fsd%2BveGhMGrWpebIopZ%2BwwLKMIw6Oxj6hQchczzD2IuJ6H2aatvyQkeQXTlNOM3b3%2FM8tDf8BDFc%2BQUywLAnRy2VreMjXenHEwcM%2BrrbO862oxFD1E4m9XHZOsexUeDhbH48%2FQGx%2BZzWVywEuOcLWkcUYNddA1Qw4hqOhulGAh2W%2BOiWfrHqFq9NOaLt%2B%2FELsVRuM0JPyeqUfgTcA6qMU1xJKHXH7Hy0jO7DBJVyCt3p6QykpcY4OQGVFwhJFhZ0sjrppF6SVvNpqjePbq2CtOEuvwpOjKy8Y%2FSNVMgqYGir0cD5XNSyqx7kuW7I4IGMFgqxLYZmf%2Ba%2FgagKppkm1sVe8Z%2Be91zPrLbo91fw3BwQ1d9k76KSAcAbo0Vcj1sir8N1fkOl7uaSItigrcpOjConX%2Fitw9hG6vvXgETU3QDwo80xU2cN%2FNyvuuh4fB9YqNwn1soHzfWqofCtNWnaP7MLfGfTOcM1oCKas3PiKUVmAFMIOBkcIGOqUB7g8yq253Fegs0Va0l0uT3SEpben1HZvtYdhwow5G1LQ2ILwLjVhXqpynS7G5ecni5diM8mRRASvSC23GiBkpr7iLT%2BpqPMa7u5IlVI94jpuZIYXJ6hC2lnLWla1YF9m1or9HfhIjurCVHPZvwcyvFZCq5mszVx9CrNkdPzkWpq9AIB4CmKsMrxdxGHtL7l78h9Rrl4u%2FldkIwFRNKXpwyi5UdOIN&X-Amz-Signature=87015ba1ad42e221b589b706180b3f0a97b083702044851870e8298e72b57ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUXVUKM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjETa0DDxPtUFl4ClzKzTv8O7yCu2XkYK2YvILsPvgIAIgMDExHVqnybf2jA5eEuGUcOMueDWXyRu1NknlrTMb4Coq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGwlhybV%2BQAwxH105SrcAw4AktSBAMkOzz%2BE0v01eSdjmMUYHmvwYX8Ex2LzELOK76RBlFwwRTeEAOlMlmWscyBG3ImthMbh0C%2BwJEj0lM1ohXZ5sGbedv%2FkGq8JphFy4Ov%2FQ4jx4SuICho6EabH55EDMIfb30TDX3fsd%2BveGhMGrWpebIopZ%2BwwLKMIw6Oxj6hQchczzD2IuJ6H2aatvyQkeQXTlNOM3b3%2FM8tDf8BDFc%2BQUywLAnRy2VreMjXenHEwcM%2BrrbO862oxFD1E4m9XHZOsexUeDhbH48%2FQGx%2BZzWVywEuOcLWkcUYNddA1Qw4hqOhulGAh2W%2BOiWfrHqFq9NOaLt%2B%2FELsVRuM0JPyeqUfgTcA6qMU1xJKHXH7Hy0jO7DBJVyCt3p6QykpcY4OQGVFwhJFhZ0sjrppF6SVvNpqjePbq2CtOEuvwpOjKy8Y%2FSNVMgqYGir0cD5XNSyqx7kuW7I4IGMFgqxLYZmf%2Ba%2FgagKppkm1sVe8Z%2Be91zPrLbo91fw3BwQ1d9k76KSAcAbo0Vcj1sir8N1fkOl7uaSItigrcpOjConX%2Fitw9hG6vvXgETU3QDwo80xU2cN%2FNyvuuh4fB9YqNwn1soHzfWqofCtNWnaP7MLfGfTOcM1oCKas3PiKUVmAFMIOBkcIGOqUB7g8yq253Fegs0Va0l0uT3SEpben1HZvtYdhwow5G1LQ2ILwLjVhXqpynS7G5ecni5diM8mRRASvSC23GiBkpr7iLT%2BpqPMa7u5IlVI94jpuZIYXJ6hC2lnLWla1YF9m1or9HfhIjurCVHPZvwcyvFZCq5mszVx9CrNkdPzkWpq9AIB4CmKsMrxdxGHtL7l78h9Rrl4u%2FldkIwFRNKXpwyi5UdOIN&X-Amz-Signature=b051a815e3f06c185d4911edf4d2d5e5f2252fa39e2923bdda2fd1d56f312d92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUXVUKM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjETa0DDxPtUFl4ClzKzTv8O7yCu2XkYK2YvILsPvgIAIgMDExHVqnybf2jA5eEuGUcOMueDWXyRu1NknlrTMb4Coq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGwlhybV%2BQAwxH105SrcAw4AktSBAMkOzz%2BE0v01eSdjmMUYHmvwYX8Ex2LzELOK76RBlFwwRTeEAOlMlmWscyBG3ImthMbh0C%2BwJEj0lM1ohXZ5sGbedv%2FkGq8JphFy4Ov%2FQ4jx4SuICho6EabH55EDMIfb30TDX3fsd%2BveGhMGrWpebIopZ%2BwwLKMIw6Oxj6hQchczzD2IuJ6H2aatvyQkeQXTlNOM3b3%2FM8tDf8BDFc%2BQUywLAnRy2VreMjXenHEwcM%2BrrbO862oxFD1E4m9XHZOsexUeDhbH48%2FQGx%2BZzWVywEuOcLWkcUYNddA1Qw4hqOhulGAh2W%2BOiWfrHqFq9NOaLt%2B%2FELsVRuM0JPyeqUfgTcA6qMU1xJKHXH7Hy0jO7DBJVyCt3p6QykpcY4OQGVFwhJFhZ0sjrppF6SVvNpqjePbq2CtOEuvwpOjKy8Y%2FSNVMgqYGir0cD5XNSyqx7kuW7I4IGMFgqxLYZmf%2Ba%2FgagKppkm1sVe8Z%2Be91zPrLbo91fw3BwQ1d9k76KSAcAbo0Vcj1sir8N1fkOl7uaSItigrcpOjConX%2Fitw9hG6vvXgETU3QDwo80xU2cN%2FNyvuuh4fB9YqNwn1soHzfWqofCtNWnaP7MLfGfTOcM1oCKas3PiKUVmAFMIOBkcIGOqUB7g8yq253Fegs0Va0l0uT3SEpben1HZvtYdhwow5G1LQ2ILwLjVhXqpynS7G5ecni5diM8mRRASvSC23GiBkpr7iLT%2BpqPMa7u5IlVI94jpuZIYXJ6hC2lnLWla1YF9m1or9HfhIjurCVHPZvwcyvFZCq5mszVx9CrNkdPzkWpq9AIB4CmKsMrxdxGHtL7l78h9Rrl4u%2FldkIwFRNKXpwyi5UdOIN&X-Amz-Signature=3dc948711cc762271bee523a865d29948e2c1e3188643b617d66f4680aa81af6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
