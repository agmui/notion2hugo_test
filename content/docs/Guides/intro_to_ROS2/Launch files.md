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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMYCEF6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHPgXTK6q1mmjKPIOZiuFib2vV7Q3dzITk9FsH0wup4wIgJvrcGku%2FwSUeGFczqV2pGDrl2RZvzWN7IgPCV6XfEb0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF4kOjz9wyGXcuTGkyrcAwBvGpeNmts58e33OZfiWbYvepsVXzDdf6B6RLq8QQ%2Bu7NjtE17V2rxrT%2BcraRB2Fkj6vd8sVlpXFpZK6Zbm1KTwbIniXDtijxtrF1xRo%2FwSfnVe%2FAaaKtYL5m%2BgpR4lRaGp4ot7x1QtlsNL5mDQUkcW6M3oSG59n%2Fr6WqOiZwEhgVji5fJUNbfIXZdPXhyCfeKtbpA%2F%2FrGni02K5GqNzxlv4PbLgS7VCgJwPIfaFxhJg4eoHg78QFTZzJNLqTgUM16BGCoVr29waKUM5v%2Fv1Fvw3E3l6AEvvUGIZQC2y1XFGCfFwG9kI68CMvAACPssNaID6rpX%2BkNL%2BG0fKd9ih9lpfYDLRzMJYUU%2FfEM%2FP3m0tzXFIDM1qE3QqVi6gO8nw0nblP%2BqxgwMMX1YEi9dJIBlpG1KJPvUq%2BNODk4LN0Ca8MF7uvyvJ4%2BNa5yM%2FCNRzZxKHKtycb9mqzHGLKg0tuCrKdZvJk7n1gWa0WcoW4KxLIoMJGaIA1MLwHBGbtjcgjWqBiVGbIa5Yb22WKZZcn62jL25J0OgWdwdDGr6zI6fNG0ylv4xds2MY%2Bmdo4bOPG2ais81GCvTKZtaHCQZT0FfCPol4Va22zgSr7D0SCeB%2B6xE%2BP7fUQTb7hWLMMWSmMEGOqUBm6vupbUZyEdW8QpG6cH6blupdDV3XtJlU1YwRK9P2Tk%2FklPV%2B3KePrsHvCiGmunGMQPEKAB6CRNLzmCPotXQuwCzrGaRuUCEGmNCt%2FQvM93Ji2CcqAQBINHoA3nUpz7qK2tHUYerG6M%2FVPFAMcfVHYNXJ8pg0owPoLz7ijv54da3Mw5%2FcOdOmIvz3YzDDfY3758tqjSNw0bXUgz1%2BxeUFq9JEWP3&X-Amz-Signature=dcb3cbf7bbbd4600ba1ef6db08d8919567b2ec52f3feb7bf13db782a946246e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMYCEF6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHPgXTK6q1mmjKPIOZiuFib2vV7Q3dzITk9FsH0wup4wIgJvrcGku%2FwSUeGFczqV2pGDrl2RZvzWN7IgPCV6XfEb0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF4kOjz9wyGXcuTGkyrcAwBvGpeNmts58e33OZfiWbYvepsVXzDdf6B6RLq8QQ%2Bu7NjtE17V2rxrT%2BcraRB2Fkj6vd8sVlpXFpZK6Zbm1KTwbIniXDtijxtrF1xRo%2FwSfnVe%2FAaaKtYL5m%2BgpR4lRaGp4ot7x1QtlsNL5mDQUkcW6M3oSG59n%2Fr6WqOiZwEhgVji5fJUNbfIXZdPXhyCfeKtbpA%2F%2FrGni02K5GqNzxlv4PbLgS7VCgJwPIfaFxhJg4eoHg78QFTZzJNLqTgUM16BGCoVr29waKUM5v%2Fv1Fvw3E3l6AEvvUGIZQC2y1XFGCfFwG9kI68CMvAACPssNaID6rpX%2BkNL%2BG0fKd9ih9lpfYDLRzMJYUU%2FfEM%2FP3m0tzXFIDM1qE3QqVi6gO8nw0nblP%2BqxgwMMX1YEi9dJIBlpG1KJPvUq%2BNODk4LN0Ca8MF7uvyvJ4%2BNa5yM%2FCNRzZxKHKtycb9mqzHGLKg0tuCrKdZvJk7n1gWa0WcoW4KxLIoMJGaIA1MLwHBGbtjcgjWqBiVGbIa5Yb22WKZZcn62jL25J0OgWdwdDGr6zI6fNG0ylv4xds2MY%2Bmdo4bOPG2ais81GCvTKZtaHCQZT0FfCPol4Va22zgSr7D0SCeB%2B6xE%2BP7fUQTb7hWLMMWSmMEGOqUBm6vupbUZyEdW8QpG6cH6blupdDV3XtJlU1YwRK9P2Tk%2FklPV%2B3KePrsHvCiGmunGMQPEKAB6CRNLzmCPotXQuwCzrGaRuUCEGmNCt%2FQvM93Ji2CcqAQBINHoA3nUpz7qK2tHUYerG6M%2FVPFAMcfVHYNXJ8pg0owPoLz7ijv54da3Mw5%2FcOdOmIvz3YzDDfY3758tqjSNw0bXUgz1%2BxeUFq9JEWP3&X-Amz-Signature=90c7671e639db071edbfd6c98752f3316631f9cbe36e159366cfea9172f8ff93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMYCEF6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHPgXTK6q1mmjKPIOZiuFib2vV7Q3dzITk9FsH0wup4wIgJvrcGku%2FwSUeGFczqV2pGDrl2RZvzWN7IgPCV6XfEb0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF4kOjz9wyGXcuTGkyrcAwBvGpeNmts58e33OZfiWbYvepsVXzDdf6B6RLq8QQ%2Bu7NjtE17V2rxrT%2BcraRB2Fkj6vd8sVlpXFpZK6Zbm1KTwbIniXDtijxtrF1xRo%2FwSfnVe%2FAaaKtYL5m%2BgpR4lRaGp4ot7x1QtlsNL5mDQUkcW6M3oSG59n%2Fr6WqOiZwEhgVji5fJUNbfIXZdPXhyCfeKtbpA%2F%2FrGni02K5GqNzxlv4PbLgS7VCgJwPIfaFxhJg4eoHg78QFTZzJNLqTgUM16BGCoVr29waKUM5v%2Fv1Fvw3E3l6AEvvUGIZQC2y1XFGCfFwG9kI68CMvAACPssNaID6rpX%2BkNL%2BG0fKd9ih9lpfYDLRzMJYUU%2FfEM%2FP3m0tzXFIDM1qE3QqVi6gO8nw0nblP%2BqxgwMMX1YEi9dJIBlpG1KJPvUq%2BNODk4LN0Ca8MF7uvyvJ4%2BNa5yM%2FCNRzZxKHKtycb9mqzHGLKg0tuCrKdZvJk7n1gWa0WcoW4KxLIoMJGaIA1MLwHBGbtjcgjWqBiVGbIa5Yb22WKZZcn62jL25J0OgWdwdDGr6zI6fNG0ylv4xds2MY%2Bmdo4bOPG2ais81GCvTKZtaHCQZT0FfCPol4Va22zgSr7D0SCeB%2B6xE%2BP7fUQTb7hWLMMWSmMEGOqUBm6vupbUZyEdW8QpG6cH6blupdDV3XtJlU1YwRK9P2Tk%2FklPV%2B3KePrsHvCiGmunGMQPEKAB6CRNLzmCPotXQuwCzrGaRuUCEGmNCt%2FQvM93Ji2CcqAQBINHoA3nUpz7qK2tHUYerG6M%2FVPFAMcfVHYNXJ8pg0owPoLz7ijv54da3Mw5%2FcOdOmIvz3YzDDfY3758tqjSNw0bXUgz1%2BxeUFq9JEWP3&X-Amz-Signature=ae65fea22b04593f03d64e8053f1b247954a4d3951d0284885d1c7ea23918d91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
