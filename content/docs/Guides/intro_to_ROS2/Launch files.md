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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMRNCPC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGATmkjnHQbmVoBDfjOPBHdS5A8cLQJjsTX%2BvHQ%2BfWDNAiBQ5lybrWI4i%2FI1OTBjdVoJE5h2qFUDQw4DAzfjiGzjWir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM5ad9beRTK2bhEjpjKtwDR0iRU73b5sB7m6Wk%2F1Mcf594XikVfq18rBc6ANiFGosmUaLFg4zbJW%2FqhRaNVueXk%2FB9yrgyTzWcGeAWewNewcV7AhdQ9xxKz3udGjFFa3sW9pKSgWWlY6BZ%2FUZ2PGaybAwGvIzgocBRG3EyPp6A4MO6wm%2FPf9pMakD5CKvzeYf1Wbj4Dx8YaYRy5XhNnAyeK6f6HjlgYEmgsd8Z3s50K3%2BRzcEWcOqev2py6eR8KCuiV6bFewdq0BZhv03iNMDiaeXq5sYKWcjDclGen1qjafMCPhc8xcc%2FW1QH4%2BehHvqsSSuJtANO3AUzB%2BpVE4H9Tr17Jz0CUdfgnQxPPVVxmjHFcGQZVGXLcH9RwRJr8v%2BMeFu9NmEIEbshjtW%2BYVHQZCaDSiZ3JZKlLfPL%2BM467WU5OaXTauAAWdN8F2wJTL9LBxwx05L2AucBe4ziLifuaT9dgpVI%2BCgl1e1NtSDlTmT12vQDpqn%2B2HtnANR450G260C2o%2F%2B%2FvuEIcGp2Myt6CNmgmEQHywUcQbDervVGtVU2v8ny0R6xPZR6UEQWgCA8TGyN6TSi%2B8luaGKJJKr4dXFBF9Zi0e5B5qqq9CYghm8OwYIbVlS3QE9w0EHfXnSyTvQX5eQ5abmcPOAwoozswgY6pgGMucqDxewyarjK%2F8Le%2Bs%2FnZ9T9v2lw4aTDWaMyi%2BgdcmYmgrdep8U7otqnu%2BYRy7%2B%2FiGMBBtmYMxXC3AWabVV1RckO%2FktszXmpPXclMc3PFhlgXB9CuoAhQDMcRStZ%2B5KnAGh3JaaLKQHBqYJRBJR43%2BXuD9CgNJnKtOnM%2B724IluWy4Ik3cuO%2Bjje9siQ3HDt%2BQ3xuFILdXRRX4wfCAl95fkCsHIf&X-Amz-Signature=b4de4b8b861fcbb32e5696c1f0c5ce38cfe35595e84b8de9a43948dccdeaeb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMRNCPC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGATmkjnHQbmVoBDfjOPBHdS5A8cLQJjsTX%2BvHQ%2BfWDNAiBQ5lybrWI4i%2FI1OTBjdVoJE5h2qFUDQw4DAzfjiGzjWir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM5ad9beRTK2bhEjpjKtwDR0iRU73b5sB7m6Wk%2F1Mcf594XikVfq18rBc6ANiFGosmUaLFg4zbJW%2FqhRaNVueXk%2FB9yrgyTzWcGeAWewNewcV7AhdQ9xxKz3udGjFFa3sW9pKSgWWlY6BZ%2FUZ2PGaybAwGvIzgocBRG3EyPp6A4MO6wm%2FPf9pMakD5CKvzeYf1Wbj4Dx8YaYRy5XhNnAyeK6f6HjlgYEmgsd8Z3s50K3%2BRzcEWcOqev2py6eR8KCuiV6bFewdq0BZhv03iNMDiaeXq5sYKWcjDclGen1qjafMCPhc8xcc%2FW1QH4%2BehHvqsSSuJtANO3AUzB%2BpVE4H9Tr17Jz0CUdfgnQxPPVVxmjHFcGQZVGXLcH9RwRJr8v%2BMeFu9NmEIEbshjtW%2BYVHQZCaDSiZ3JZKlLfPL%2BM467WU5OaXTauAAWdN8F2wJTL9LBxwx05L2AucBe4ziLifuaT9dgpVI%2BCgl1e1NtSDlTmT12vQDpqn%2B2HtnANR450G260C2o%2F%2B%2FvuEIcGp2Myt6CNmgmEQHywUcQbDervVGtVU2v8ny0R6xPZR6UEQWgCA8TGyN6TSi%2B8luaGKJJKr4dXFBF9Zi0e5B5qqq9CYghm8OwYIbVlS3QE9w0EHfXnSyTvQX5eQ5abmcPOAwoozswgY6pgGMucqDxewyarjK%2F8Le%2Bs%2FnZ9T9v2lw4aTDWaMyi%2BgdcmYmgrdep8U7otqnu%2BYRy7%2B%2FiGMBBtmYMxXC3AWabVV1RckO%2FktszXmpPXclMc3PFhlgXB9CuoAhQDMcRStZ%2B5KnAGh3JaaLKQHBqYJRBJR43%2BXuD9CgNJnKtOnM%2B724IluWy4Ik3cuO%2Bjje9siQ3HDt%2BQ3xuFILdXRRX4wfCAl95fkCsHIf&X-Amz-Signature=507da202f4c1cd770e7ca61283ac5b4ab3faef78f36b0f4961bbcafb69211beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMRNCPC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGATmkjnHQbmVoBDfjOPBHdS5A8cLQJjsTX%2BvHQ%2BfWDNAiBQ5lybrWI4i%2FI1OTBjdVoJE5h2qFUDQw4DAzfjiGzjWir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM5ad9beRTK2bhEjpjKtwDR0iRU73b5sB7m6Wk%2F1Mcf594XikVfq18rBc6ANiFGosmUaLFg4zbJW%2FqhRaNVueXk%2FB9yrgyTzWcGeAWewNewcV7AhdQ9xxKz3udGjFFa3sW9pKSgWWlY6BZ%2FUZ2PGaybAwGvIzgocBRG3EyPp6A4MO6wm%2FPf9pMakD5CKvzeYf1Wbj4Dx8YaYRy5XhNnAyeK6f6HjlgYEmgsd8Z3s50K3%2BRzcEWcOqev2py6eR8KCuiV6bFewdq0BZhv03iNMDiaeXq5sYKWcjDclGen1qjafMCPhc8xcc%2FW1QH4%2BehHvqsSSuJtANO3AUzB%2BpVE4H9Tr17Jz0CUdfgnQxPPVVxmjHFcGQZVGXLcH9RwRJr8v%2BMeFu9NmEIEbshjtW%2BYVHQZCaDSiZ3JZKlLfPL%2BM467WU5OaXTauAAWdN8F2wJTL9LBxwx05L2AucBe4ziLifuaT9dgpVI%2BCgl1e1NtSDlTmT12vQDpqn%2B2HtnANR450G260C2o%2F%2B%2FvuEIcGp2Myt6CNmgmEQHywUcQbDervVGtVU2v8ny0R6xPZR6UEQWgCA8TGyN6TSi%2B8luaGKJJKr4dXFBF9Zi0e5B5qqq9CYghm8OwYIbVlS3QE9w0EHfXnSyTvQX5eQ5abmcPOAwoozswgY6pgGMucqDxewyarjK%2F8Le%2Bs%2FnZ9T9v2lw4aTDWaMyi%2BgdcmYmgrdep8U7otqnu%2BYRy7%2B%2FiGMBBtmYMxXC3AWabVV1RckO%2FktszXmpPXclMc3PFhlgXB9CuoAhQDMcRStZ%2B5KnAGh3JaaLKQHBqYJRBJR43%2BXuD9CgNJnKtOnM%2B724IluWy4Ik3cuO%2Bjje9siQ3HDt%2BQ3xuFILdXRRX4wfCAl95fkCsHIf&X-Amz-Signature=b497ab4ecb7b58d531c70b0d6f3943196dcb6a7451fadf49ac417af8c622f9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
