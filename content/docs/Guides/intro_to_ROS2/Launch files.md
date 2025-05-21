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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDZHKZ3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxcBdcyzxtVwoqWblTYpCn7Dk23jOhjMN9YqfpgRVSYCIEWcCpIgh308NNb2pvnF9viFwXnDVLDVEu%2F04vCRrOrDKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW9Vip%2BCNnGBiJGO8q3APge7en9YphL8UkPoVS7SnGiu%2FGWozpA5tnrrkEHaWXcWUIivovNCLH9Xt5WoN2vUWC5p%2FJGTGQtXlmnnqvA%2B2%2BAf1EJbM5%2FYLvPvpjKKyZQGwn%2BJczRK7prWmdsvnkkeWI0T%2FP31rhnqo7SnfkZ5ZE7sKxuxGjxKNn3ZD3%2BJgOAO5qM4FtLBvKuG3C05i1dealqxeQpgYlNagEtMBvgktcrDaR97arMuWNyoo3ytzsCNlOA%2Bh2eSiFw%2FWeoc%2B7wmoZfMZv5bt0M1wFVAmPKlHAadI524eIQ%2FxFfoJHOU3q73DPy9ThFZI9inoKOkmr2oMsNLQ%2BE2lkbwsqqV20qZuagqWJKYxC0hYKxmgg4ujAh%2BgDdLgEuP9mpXuhvT0LDRd6U3p0oX1cj1L%2BAzj%2Fcx2oo%2FaN0%2F8aT0vhWfWx3wtrUFQKaI3lMyGp63a40WGlM2WywFbcVpsIJ4n9HDa7f5l7ZVW2HkF4KDurhbOZzDmLW0ZwvMJXwDanYnZ8dZXvHIWRIRN%2F5N3fVS4Ee3Pt3j6Z9bhbCq%2F%2FT3M%2BPbkm1jYNs0fdYLLcMBCuxnDDhA1jis5alOMgPyvrOBKUgUHU8dJLUd%2BHG7x0y6TJ4uo%2BAhtlBUEwUzrzesimKnxWhzDqj7XBBjqnAf3BkK%2FhlvyxLJGXS6%2BKQuEfliz%2FZrCm3mpCvBcCBO8CeYuiji8T0qn%2B%2BAo8KSms2J%2F7ZDot%2FMaVZ9QszXyKHQ7tJVM4fnvbfkUZLj2lhDjtzItVDcY0cgINxxg1Mi%2BIii5cQpWE47NuAxfZnIrdmn3iiTS5Mqvxft8E9uriggqS3VltfnStJWGYyRzKpbJ%2BMvFhtlW8mle0B5e0UZ4pZ6jpyPC1uNaK&X-Amz-Signature=3a5fc3a1be38c2e0679eeb9da75dbc24ed019d1b1683382e24134582f41b06aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDZHKZ3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxcBdcyzxtVwoqWblTYpCn7Dk23jOhjMN9YqfpgRVSYCIEWcCpIgh308NNb2pvnF9viFwXnDVLDVEu%2F04vCRrOrDKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW9Vip%2BCNnGBiJGO8q3APge7en9YphL8UkPoVS7SnGiu%2FGWozpA5tnrrkEHaWXcWUIivovNCLH9Xt5WoN2vUWC5p%2FJGTGQtXlmnnqvA%2B2%2BAf1EJbM5%2FYLvPvpjKKyZQGwn%2BJczRK7prWmdsvnkkeWI0T%2FP31rhnqo7SnfkZ5ZE7sKxuxGjxKNn3ZD3%2BJgOAO5qM4FtLBvKuG3C05i1dealqxeQpgYlNagEtMBvgktcrDaR97arMuWNyoo3ytzsCNlOA%2Bh2eSiFw%2FWeoc%2B7wmoZfMZv5bt0M1wFVAmPKlHAadI524eIQ%2FxFfoJHOU3q73DPy9ThFZI9inoKOkmr2oMsNLQ%2BE2lkbwsqqV20qZuagqWJKYxC0hYKxmgg4ujAh%2BgDdLgEuP9mpXuhvT0LDRd6U3p0oX1cj1L%2BAzj%2Fcx2oo%2FaN0%2F8aT0vhWfWx3wtrUFQKaI3lMyGp63a40WGlM2WywFbcVpsIJ4n9HDa7f5l7ZVW2HkF4KDurhbOZzDmLW0ZwvMJXwDanYnZ8dZXvHIWRIRN%2F5N3fVS4Ee3Pt3j6Z9bhbCq%2F%2FT3M%2BPbkm1jYNs0fdYLLcMBCuxnDDhA1jis5alOMgPyvrOBKUgUHU8dJLUd%2BHG7x0y6TJ4uo%2BAhtlBUEwUzrzesimKnxWhzDqj7XBBjqnAf3BkK%2FhlvyxLJGXS6%2BKQuEfliz%2FZrCm3mpCvBcCBO8CeYuiji8T0qn%2B%2BAo8KSms2J%2F7ZDot%2FMaVZ9QszXyKHQ7tJVM4fnvbfkUZLj2lhDjtzItVDcY0cgINxxg1Mi%2BIii5cQpWE47NuAxfZnIrdmn3iiTS5Mqvxft8E9uriggqS3VltfnStJWGYyRzKpbJ%2BMvFhtlW8mle0B5e0UZ4pZ6jpyPC1uNaK&X-Amz-Signature=7f07f2d3ec979b3925c691a4040f581e0bf4b0e483a05e35253bde24efbcb815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDZHKZ3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxcBdcyzxtVwoqWblTYpCn7Dk23jOhjMN9YqfpgRVSYCIEWcCpIgh308NNb2pvnF9viFwXnDVLDVEu%2F04vCRrOrDKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW9Vip%2BCNnGBiJGO8q3APge7en9YphL8UkPoVS7SnGiu%2FGWozpA5tnrrkEHaWXcWUIivovNCLH9Xt5WoN2vUWC5p%2FJGTGQtXlmnnqvA%2B2%2BAf1EJbM5%2FYLvPvpjKKyZQGwn%2BJczRK7prWmdsvnkkeWI0T%2FP31rhnqo7SnfkZ5ZE7sKxuxGjxKNn3ZD3%2BJgOAO5qM4FtLBvKuG3C05i1dealqxeQpgYlNagEtMBvgktcrDaR97arMuWNyoo3ytzsCNlOA%2Bh2eSiFw%2FWeoc%2B7wmoZfMZv5bt0M1wFVAmPKlHAadI524eIQ%2FxFfoJHOU3q73DPy9ThFZI9inoKOkmr2oMsNLQ%2BE2lkbwsqqV20qZuagqWJKYxC0hYKxmgg4ujAh%2BgDdLgEuP9mpXuhvT0LDRd6U3p0oX1cj1L%2BAzj%2Fcx2oo%2FaN0%2F8aT0vhWfWx3wtrUFQKaI3lMyGp63a40WGlM2WywFbcVpsIJ4n9HDa7f5l7ZVW2HkF4KDurhbOZzDmLW0ZwvMJXwDanYnZ8dZXvHIWRIRN%2F5N3fVS4Ee3Pt3j6Z9bhbCq%2F%2FT3M%2BPbkm1jYNs0fdYLLcMBCuxnDDhA1jis5alOMgPyvrOBKUgUHU8dJLUd%2BHG7x0y6TJ4uo%2BAhtlBUEwUzrzesimKnxWhzDqj7XBBjqnAf3BkK%2FhlvyxLJGXS6%2BKQuEfliz%2FZrCm3mpCvBcCBO8CeYuiji8T0qn%2B%2BAo8KSms2J%2F7ZDot%2FMaVZ9QszXyKHQ7tJVM4fnvbfkUZLj2lhDjtzItVDcY0cgINxxg1Mi%2BIii5cQpWE47NuAxfZnIrdmn3iiTS5Mqvxft8E9uriggqS3VltfnStJWGYyRzKpbJ%2BMvFhtlW8mle0B5e0UZ4pZ6jpyPC1uNaK&X-Amz-Signature=64c1be27278d9bd1f7a4c7443fa307e659fce9b5195fb91217cf9e7880fcb1e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
