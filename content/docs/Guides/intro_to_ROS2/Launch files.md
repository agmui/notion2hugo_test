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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRT3IVF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZgnhfDqJ%2FG9MrWb2wAc8fG%2BxuK8kvx4TYpnnt03UunAiEA203S7wVu442KIp7D9wQYzJ9fDdVnMGp6dn6VjGAONvcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkGh6cguQm%2BxNHbXCrcA5ERkq4ARrJ3Gx%2BROzw7JOg9GKXZuMIGg1%2Ba4uer8%2FfTqUuOdM2bDIGwiQVi7hKeYLkAhh1PfFWnyp0LM93RoUhNGdlec9UIE31hKHJcss4mFSPFa7jCrhAlPPWwbK94ysrekKsynagvWCV%2FCzrVcafUlDXSK%2F%2BV1j6w00jQKDEoIJpUoZTcWgeRV820b8aS66AJYfTrbdnvBymIoi9Lr2zkHidUR53jbtFH1Oo6FgiwCtZfD%2FeunjpcvfBI8nYg9LNP9nXNmdzoFEJweIidiEd67LWYn%2BPSKgYgflCAbWZvozWuIkK68KwteQVfi9lokSnZZbvI6ZRD8gCq4mSJlC9UOm1aTlqSNhgb5ywbVO422UoHwK%2B7YvGp10iAavg8iBTcRZN3z3hKUlVNXO62GXnNHJkzRL%2BhrZyOCNJmzo1I5EbPH8ZONXmPUJ%2F8NQovwdWgxS6%2F4qAzve3iXbIotN9AvFXd%2FuCxi1fhfqD6%2Bok8PfKXD2GAF6T8kqIBPdxZxKuWao%2B87zX8ohm%2FAAqLy8iW7bs9LVOmJPS6eyLWer5xVeBSeG4b%2BLedKZm91gjV18qW7U6Q02ibxQWR9J5I0Tu3eM1RXxclIGagxd2d4D7Hwa15dQ9cqD8d3tT%2BMJqVsMEGOqUBoMEosPDNQiFqiXk6quchhYPGY2pPDUj7w6Nli3SOvYov1vSqW5xQU%2FHeTPu0dLzFGhbjqCgjTdvUIQ3SUr0Ljk1h87YpWthluOBF8Nca4UPzc5qt6qwd2n8YoxCm7rMqgHubaQBPrKnoXQcc3RNurprFY9CYWgjKa2E56tXndpsFpolHPoeFffN1pU3sK65QawOfW6JVP8tIgPayGfNUqrLnRdSl&X-Amz-Signature=bcd437221fcf4be6496ffbdb69d18b82728d9ef77a425fc9398dcca50aff0d24&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRT3IVF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZgnhfDqJ%2FG9MrWb2wAc8fG%2BxuK8kvx4TYpnnt03UunAiEA203S7wVu442KIp7D9wQYzJ9fDdVnMGp6dn6VjGAONvcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkGh6cguQm%2BxNHbXCrcA5ERkq4ARrJ3Gx%2BROzw7JOg9GKXZuMIGg1%2Ba4uer8%2FfTqUuOdM2bDIGwiQVi7hKeYLkAhh1PfFWnyp0LM93RoUhNGdlec9UIE31hKHJcss4mFSPFa7jCrhAlPPWwbK94ysrekKsynagvWCV%2FCzrVcafUlDXSK%2F%2BV1j6w00jQKDEoIJpUoZTcWgeRV820b8aS66AJYfTrbdnvBymIoi9Lr2zkHidUR53jbtFH1Oo6FgiwCtZfD%2FeunjpcvfBI8nYg9LNP9nXNmdzoFEJweIidiEd67LWYn%2BPSKgYgflCAbWZvozWuIkK68KwteQVfi9lokSnZZbvI6ZRD8gCq4mSJlC9UOm1aTlqSNhgb5ywbVO422UoHwK%2B7YvGp10iAavg8iBTcRZN3z3hKUlVNXO62GXnNHJkzRL%2BhrZyOCNJmzo1I5EbPH8ZONXmPUJ%2F8NQovwdWgxS6%2F4qAzve3iXbIotN9AvFXd%2FuCxi1fhfqD6%2Bok8PfKXD2GAF6T8kqIBPdxZxKuWao%2B87zX8ohm%2FAAqLy8iW7bs9LVOmJPS6eyLWer5xVeBSeG4b%2BLedKZm91gjV18qW7U6Q02ibxQWR9J5I0Tu3eM1RXxclIGagxd2d4D7Hwa15dQ9cqD8d3tT%2BMJqVsMEGOqUBoMEosPDNQiFqiXk6quchhYPGY2pPDUj7w6Nli3SOvYov1vSqW5xQU%2FHeTPu0dLzFGhbjqCgjTdvUIQ3SUr0Ljk1h87YpWthluOBF8Nca4UPzc5qt6qwd2n8YoxCm7rMqgHubaQBPrKnoXQcc3RNurprFY9CYWgjKa2E56tXndpsFpolHPoeFffN1pU3sK65QawOfW6JVP8tIgPayGfNUqrLnRdSl&X-Amz-Signature=5f46edfbcf6fc3ee1305fc63ae1103a5d0844fb15f4e20553efbc4732cac0e43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRT3IVF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZgnhfDqJ%2FG9MrWb2wAc8fG%2BxuK8kvx4TYpnnt03UunAiEA203S7wVu442KIp7D9wQYzJ9fDdVnMGp6dn6VjGAONvcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkGh6cguQm%2BxNHbXCrcA5ERkq4ARrJ3Gx%2BROzw7JOg9GKXZuMIGg1%2Ba4uer8%2FfTqUuOdM2bDIGwiQVi7hKeYLkAhh1PfFWnyp0LM93RoUhNGdlec9UIE31hKHJcss4mFSPFa7jCrhAlPPWwbK94ysrekKsynagvWCV%2FCzrVcafUlDXSK%2F%2BV1j6w00jQKDEoIJpUoZTcWgeRV820b8aS66AJYfTrbdnvBymIoi9Lr2zkHidUR53jbtFH1Oo6FgiwCtZfD%2FeunjpcvfBI8nYg9LNP9nXNmdzoFEJweIidiEd67LWYn%2BPSKgYgflCAbWZvozWuIkK68KwteQVfi9lokSnZZbvI6ZRD8gCq4mSJlC9UOm1aTlqSNhgb5ywbVO422UoHwK%2B7YvGp10iAavg8iBTcRZN3z3hKUlVNXO62GXnNHJkzRL%2BhrZyOCNJmzo1I5EbPH8ZONXmPUJ%2F8NQovwdWgxS6%2F4qAzve3iXbIotN9AvFXd%2FuCxi1fhfqD6%2Bok8PfKXD2GAF6T8kqIBPdxZxKuWao%2B87zX8ohm%2FAAqLy8iW7bs9LVOmJPS6eyLWer5xVeBSeG4b%2BLedKZm91gjV18qW7U6Q02ibxQWR9J5I0Tu3eM1RXxclIGagxd2d4D7Hwa15dQ9cqD8d3tT%2BMJqVsMEGOqUBoMEosPDNQiFqiXk6quchhYPGY2pPDUj7w6Nli3SOvYov1vSqW5xQU%2FHeTPu0dLzFGhbjqCgjTdvUIQ3SUr0Ljk1h87YpWthluOBF8Nca4UPzc5qt6qwd2n8YoxCm7rMqgHubaQBPrKnoXQcc3RNurprFY9CYWgjKa2E56tXndpsFpolHPoeFffN1pU3sK65QawOfW6JVP8tIgPayGfNUqrLnRdSl&X-Amz-Signature=97487f11789964dd38f6c462bc22534e83edde7ed052508fd520afd61c59d417&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
