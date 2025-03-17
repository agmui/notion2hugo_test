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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCUGQ43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEI3PHlDN3vKa1fWkuIwkAk%2Fss3tRrX6wYqcpBnYqo0AiEA7DZEYmNt4OX%2FCMOIdihlV17mpiScwKXT4tlN%2BS%2Bdaaoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDE5CtRUyIvSRsv4cjCrcA4q5Gy686VtohKBQ5gp8EniDk5tU%2BxmlF%2FqMlmPgEvtHiLOzjaNLkyvZcukmRJfu0kXK08Te6vEauSabR9hO6Q0cn8ZDVOR%2BSXicSrysKtH42Uh5eT5mezjqWUh9OIFsuEvxTnYb0tejQKMmYa6qBq4P2Bn7Yrjw5r8Cmy%2BlJkahoBgMqAs3mSa9m9C6TLqiplEiSDJdm4Yz6u0LUTVqc5rfmQUMdrwiIo7gWsQ2yE4MQ16aAZOI1L9E7eSYGij4iYHVK7EiZu9zqaIPnoUTdLR8knj8rueutXa%2Fm%2BhFHj4Q5Et2nNhrMSpL8iMMpyo%2BW39mIqqGJBIOlKA9ZU%2Fq9vbDIKs7XNLhNTYuPGwdGMkyjKnE034z%2BRUZ9worpPbxzuZyLyyxGnxbE1%2F%2Fi6QgGNdeh3Jw8y89FdQncNPYWarEsKV%2BqKkbpWINTkGunj3w9vLsR0d4IeCe%2F1fUy9Y5eESSciT6weyxX0ydn19SNHxGGeIUHKhkGgqoJbuoLYBtAxjMt7FAOakMBImCuymbGh0I%2BcNESVqPc5izdwHGOhnzQ994lfLKKsFDpzEVz5DkP1abdJr42T9nyaYrZDPRc%2FOnNmuzY6c9dPuFdS2Zqcko6hwMRcL60c777OMvMJPw3b4GOqUB5kJfgjMyCDVTHI9mrOd4KtpMO%2FBJPWKuoLAFe4A%2BF06c8xApvtuc0vNDXPDXckDWlPvXRbK1mIE1jGcQK5txXvtTaHxqnw39GB%2FOTsQ3LLeKcB6W%2BJy%2BUyX1JLhVmm21Z%2Feb7cYppdFEFCyiGFdhmBYvAjUwjaf1loNmzj47YftiFB0RNYl4x2NFa4oEsGuJE7Xo2Lkmb5ABaWJuCBGvfCpz44ws&X-Amz-Signature=aa43cbe29dedd722cba86c9e78e182418a0a73a9d29247a000298531d1ee2ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCUGQ43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEI3PHlDN3vKa1fWkuIwkAk%2Fss3tRrX6wYqcpBnYqo0AiEA7DZEYmNt4OX%2FCMOIdihlV17mpiScwKXT4tlN%2BS%2Bdaaoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDE5CtRUyIvSRsv4cjCrcA4q5Gy686VtohKBQ5gp8EniDk5tU%2BxmlF%2FqMlmPgEvtHiLOzjaNLkyvZcukmRJfu0kXK08Te6vEauSabR9hO6Q0cn8ZDVOR%2BSXicSrysKtH42Uh5eT5mezjqWUh9OIFsuEvxTnYb0tejQKMmYa6qBq4P2Bn7Yrjw5r8Cmy%2BlJkahoBgMqAs3mSa9m9C6TLqiplEiSDJdm4Yz6u0LUTVqc5rfmQUMdrwiIo7gWsQ2yE4MQ16aAZOI1L9E7eSYGij4iYHVK7EiZu9zqaIPnoUTdLR8knj8rueutXa%2Fm%2BhFHj4Q5Et2nNhrMSpL8iMMpyo%2BW39mIqqGJBIOlKA9ZU%2Fq9vbDIKs7XNLhNTYuPGwdGMkyjKnE034z%2BRUZ9worpPbxzuZyLyyxGnxbE1%2F%2Fi6QgGNdeh3Jw8y89FdQncNPYWarEsKV%2BqKkbpWINTkGunj3w9vLsR0d4IeCe%2F1fUy9Y5eESSciT6weyxX0ydn19SNHxGGeIUHKhkGgqoJbuoLYBtAxjMt7FAOakMBImCuymbGh0I%2BcNESVqPc5izdwHGOhnzQ994lfLKKsFDpzEVz5DkP1abdJr42T9nyaYrZDPRc%2FOnNmuzY6c9dPuFdS2Zqcko6hwMRcL60c777OMvMJPw3b4GOqUB5kJfgjMyCDVTHI9mrOd4KtpMO%2FBJPWKuoLAFe4A%2BF06c8xApvtuc0vNDXPDXckDWlPvXRbK1mIE1jGcQK5txXvtTaHxqnw39GB%2FOTsQ3LLeKcB6W%2BJy%2BUyX1JLhVmm21Z%2Feb7cYppdFEFCyiGFdhmBYvAjUwjaf1loNmzj47YftiFB0RNYl4x2NFa4oEsGuJE7Xo2Lkmb5ABaWJuCBGvfCpz44ws&X-Amz-Signature=fd2a34b493ae6a62d4f3936f07ba2e945f42f513cccc6abd889a8f9e0ad036f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCUGQ43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEI3PHlDN3vKa1fWkuIwkAk%2Fss3tRrX6wYqcpBnYqo0AiEA7DZEYmNt4OX%2FCMOIdihlV17mpiScwKXT4tlN%2BS%2Bdaaoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDE5CtRUyIvSRsv4cjCrcA4q5Gy686VtohKBQ5gp8EniDk5tU%2BxmlF%2FqMlmPgEvtHiLOzjaNLkyvZcukmRJfu0kXK08Te6vEauSabR9hO6Q0cn8ZDVOR%2BSXicSrysKtH42Uh5eT5mezjqWUh9OIFsuEvxTnYb0tejQKMmYa6qBq4P2Bn7Yrjw5r8Cmy%2BlJkahoBgMqAs3mSa9m9C6TLqiplEiSDJdm4Yz6u0LUTVqc5rfmQUMdrwiIo7gWsQ2yE4MQ16aAZOI1L9E7eSYGij4iYHVK7EiZu9zqaIPnoUTdLR8knj8rueutXa%2Fm%2BhFHj4Q5Et2nNhrMSpL8iMMpyo%2BW39mIqqGJBIOlKA9ZU%2Fq9vbDIKs7XNLhNTYuPGwdGMkyjKnE034z%2BRUZ9worpPbxzuZyLyyxGnxbE1%2F%2Fi6QgGNdeh3Jw8y89FdQncNPYWarEsKV%2BqKkbpWINTkGunj3w9vLsR0d4IeCe%2F1fUy9Y5eESSciT6weyxX0ydn19SNHxGGeIUHKhkGgqoJbuoLYBtAxjMt7FAOakMBImCuymbGh0I%2BcNESVqPc5izdwHGOhnzQ994lfLKKsFDpzEVz5DkP1abdJr42T9nyaYrZDPRc%2FOnNmuzY6c9dPuFdS2Zqcko6hwMRcL60c777OMvMJPw3b4GOqUB5kJfgjMyCDVTHI9mrOd4KtpMO%2FBJPWKuoLAFe4A%2BF06c8xApvtuc0vNDXPDXckDWlPvXRbK1mIE1jGcQK5txXvtTaHxqnw39GB%2FOTsQ3LLeKcB6W%2BJy%2BUyX1JLhVmm21Z%2Feb7cYppdFEFCyiGFdhmBYvAjUwjaf1loNmzj47YftiFB0RNYl4x2NFa4oEsGuJE7Xo2Lkmb5ABaWJuCBGvfCpz44ws&X-Amz-Signature=a39335425935b6e17cc9866ec981e4579f54369c02e8fad8459b0de233771e18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
