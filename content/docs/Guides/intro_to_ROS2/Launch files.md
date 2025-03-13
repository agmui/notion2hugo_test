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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YRQ63LJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWzAcNftCKBwgLpwWdMGa4SNMnecZ8B7Ely6Q8gBAw9QIhAN7xrzO5kIAb%2Br%2BP5FtJJ7COjrbKiQyEKLDwr5Zr9BQGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2FoDkG73%2BSCG1cCcq3AP55Izxy2ruubAgGKnhLigcoQn%2BekHtfqEPXdpTSWQAiynuH304L%2Fe%2Bt5QBw55bw4Pj6QUkJBLGFGQ5X440bl88Q2l13DVcaweyhpRadZV%2Bh9QEAoUNqp1wqDRqdyIu4A5aS%2FgkKUXhHNFdU%2FGcz1mMlEG4yh14MRgr8SMPwwnabb5eM%2BTCY4nS9I22xzw9fRhFr%2F%2FDiGeZnvakDDijmZ9ikDSxl5tFw8M%2B6zsQldRZUI0wKbSMXWMauUuG7tC1%2BUsoSfKtOjpbqHuhL8Hx4iiRC4qWfdvKpNHcyOvME0TUSdzctBdn5aMWKAzMQlgnebw9j8rKw%2F5pVkPRt9SV5do8Jg7arkcjPIH6wkNHgdUMb385LrSWozDnSVbkJrU4AHDFgya0xlLcXcIWTqtCNUNTY5zUREKRpeMS9qWZbTG7yAZVv%2B6xxUf3PGByRfPwvKCSqxbbMaLGHejd67vAW7PVt2OV01xa25LB0gIi1Y7GLHh%2Fi8dGu5OCABlCGyf1gISuzvJirWVjqdKmGCy%2FpD%2BLMLfufva%2FvxizGZqUIn2Ai%2Byd7Ei95UVaOpba2mnkchJ2khV0Ds4VMdfzC1tI8RZr4F3jsZZBRHePI7pIXKwzBpipjEyXBCV4l57WgzDvwMq%2BBjqkAa%2BJGsUojDuFVs2NXcZHxgePr6%2Fy2uSVGyUa54cWu8YRfIbxGW4mzj8%2BxLhymgO0BkgoeenlGnGQhv%2FO8B%2FZawFNJofeuB48r3hr0eRaAwSUp%2Fu64P%2BzbBGLtNA6mO8XMs3oTn2ANdZDQpwc%2F%2BdIfPGJxeqcPYlVAXStBhVtl%2FvkuKhh4obDqyxU4JXaeTSMc3KufDJ1FMuj9BJEusLwRDXoM5rW&X-Amz-Signature=57a99178e77dc2b3ffaf802329fc1c3ab60b88fb1fdb5e64718806ed2403972b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YRQ63LJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWzAcNftCKBwgLpwWdMGa4SNMnecZ8B7Ely6Q8gBAw9QIhAN7xrzO5kIAb%2Br%2BP5FtJJ7COjrbKiQyEKLDwr5Zr9BQGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2FoDkG73%2BSCG1cCcq3AP55Izxy2ruubAgGKnhLigcoQn%2BekHtfqEPXdpTSWQAiynuH304L%2Fe%2Bt5QBw55bw4Pj6QUkJBLGFGQ5X440bl88Q2l13DVcaweyhpRadZV%2Bh9QEAoUNqp1wqDRqdyIu4A5aS%2FgkKUXhHNFdU%2FGcz1mMlEG4yh14MRgr8SMPwwnabb5eM%2BTCY4nS9I22xzw9fRhFr%2F%2FDiGeZnvakDDijmZ9ikDSxl5tFw8M%2B6zsQldRZUI0wKbSMXWMauUuG7tC1%2BUsoSfKtOjpbqHuhL8Hx4iiRC4qWfdvKpNHcyOvME0TUSdzctBdn5aMWKAzMQlgnebw9j8rKw%2F5pVkPRt9SV5do8Jg7arkcjPIH6wkNHgdUMb385LrSWozDnSVbkJrU4AHDFgya0xlLcXcIWTqtCNUNTY5zUREKRpeMS9qWZbTG7yAZVv%2B6xxUf3PGByRfPwvKCSqxbbMaLGHejd67vAW7PVt2OV01xa25LB0gIi1Y7GLHh%2Fi8dGu5OCABlCGyf1gISuzvJirWVjqdKmGCy%2FpD%2BLMLfufva%2FvxizGZqUIn2Ai%2Byd7Ei95UVaOpba2mnkchJ2khV0Ds4VMdfzC1tI8RZr4F3jsZZBRHePI7pIXKwzBpipjEyXBCV4l57WgzDvwMq%2BBjqkAa%2BJGsUojDuFVs2NXcZHxgePr6%2Fy2uSVGyUa54cWu8YRfIbxGW4mzj8%2BxLhymgO0BkgoeenlGnGQhv%2FO8B%2FZawFNJofeuB48r3hr0eRaAwSUp%2Fu64P%2BzbBGLtNA6mO8XMs3oTn2ANdZDQpwc%2F%2BdIfPGJxeqcPYlVAXStBhVtl%2FvkuKhh4obDqyxU4JXaeTSMc3KufDJ1FMuj9BJEusLwRDXoM5rW&X-Amz-Signature=dd7036f7d2615b22d04a58363fe4a558848dd3cb21ffd5b65437bdab30218ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YRQ63LJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWzAcNftCKBwgLpwWdMGa4SNMnecZ8B7Ely6Q8gBAw9QIhAN7xrzO5kIAb%2Br%2BP5FtJJ7COjrbKiQyEKLDwr5Zr9BQGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2FoDkG73%2BSCG1cCcq3AP55Izxy2ruubAgGKnhLigcoQn%2BekHtfqEPXdpTSWQAiynuH304L%2Fe%2Bt5QBw55bw4Pj6QUkJBLGFGQ5X440bl88Q2l13DVcaweyhpRadZV%2Bh9QEAoUNqp1wqDRqdyIu4A5aS%2FgkKUXhHNFdU%2FGcz1mMlEG4yh14MRgr8SMPwwnabb5eM%2BTCY4nS9I22xzw9fRhFr%2F%2FDiGeZnvakDDijmZ9ikDSxl5tFw8M%2B6zsQldRZUI0wKbSMXWMauUuG7tC1%2BUsoSfKtOjpbqHuhL8Hx4iiRC4qWfdvKpNHcyOvME0TUSdzctBdn5aMWKAzMQlgnebw9j8rKw%2F5pVkPRt9SV5do8Jg7arkcjPIH6wkNHgdUMb385LrSWozDnSVbkJrU4AHDFgya0xlLcXcIWTqtCNUNTY5zUREKRpeMS9qWZbTG7yAZVv%2B6xxUf3PGByRfPwvKCSqxbbMaLGHejd67vAW7PVt2OV01xa25LB0gIi1Y7GLHh%2Fi8dGu5OCABlCGyf1gISuzvJirWVjqdKmGCy%2FpD%2BLMLfufva%2FvxizGZqUIn2Ai%2Byd7Ei95UVaOpba2mnkchJ2khV0Ds4VMdfzC1tI8RZr4F3jsZZBRHePI7pIXKwzBpipjEyXBCV4l57WgzDvwMq%2BBjqkAa%2BJGsUojDuFVs2NXcZHxgePr6%2Fy2uSVGyUa54cWu8YRfIbxGW4mzj8%2BxLhymgO0BkgoeenlGnGQhv%2FO8B%2FZawFNJofeuB48r3hr0eRaAwSUp%2Fu64P%2BzbBGLtNA6mO8XMs3oTn2ANdZDQpwc%2F%2BdIfPGJxeqcPYlVAXStBhVtl%2FvkuKhh4obDqyxU4JXaeTSMc3KufDJ1FMuj9BJEusLwRDXoM5rW&X-Amz-Signature=05dda281c24cf4fd2fcd1f46b96d940cd2fafc7437d2ef68609528bfb491a8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
