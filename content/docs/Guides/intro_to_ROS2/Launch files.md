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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZQ2FIN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2EHz63Rncq9qIyuyG%2FxseaV288jTz53NHT%2FRfbrs8QIgfyPrDwEr%2F4%2BAxZY%2FY3D60KU0SulyQBO0xXf2nG9j6kIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPr5KhKT0cTxsQOQ0yrcA7u6ofUxIgIDdIEOoezJADkMy1aaG%2B1U%2BD%2FOdDp5NikXr14Jd2YMFcyrlEbs6od3A7toeWROx0%2FVSerOra7FZrO9wqp9jzOkmW%2FoGwd81rx68LZKL3o1F3X%2F7mZDXCb68Y1GDWv1uBOGXM6UW%2BD6gw6zc8RX%2B1Lj902LxHYNwmhsEEe%2FXzE6DPo0UttA4i6dfsvwNFhe2tlAb2tAamPU%2B0aloEdZBND7wVUR2T3qJ1q3YU06R7OQCsCFXE0tMbhH1tDAOZm1IDx2QU2trpPGxJG5CsrOjatkrKQOsRdBQl7fj1EmQZ3NHy1qcQh1qPi2nnnQD5LtwfwRqYhn5MaADNC3yBnuLnXFI52Ud3pjsewU%2FuU5Nir8e18vyQhXZ2vjqpZhqhoOAH1wVWxl4TEnV8IjA3HGrI%2F0ONiO1BLOk64m0jAOQ%2Bc9cHZyiv7oR%2BHXYC8AZSbGOnW7%2FnlZAg%2F5sW9LIKP2aAklLw9KvnRySD3ll7naAbHVa5YZwLyyKKePdMIs%2BRNEtQILkv%2BPrw20AmR6Y7H%2Fv9mZFbrQIJyMxyHIfxKcG9eRZfusQeP1LpkIlmhsODVPWISGkzoyBmnTyUcy8kBfOjQM25DuozImOhWcfqYFPvpA%2B%2Btk11QKMNH0%2Fb8GOqUBGvqmg5RsHTmCuKrvAZHYU7dzorj2Sz5oklG%2BZtAIL8hRgu81KSk8JAHu7opHaZ1m5Ppdh8Us8812Iujw%2FqDYTiiH6AvNuVuJi0BYdFURVv3SXnmMesAe12N%2FeAjZaV2IY6FRU3VQFe%2B41CbpenZNIpnttn%2FJt74CXjk6ioVcWjEAghgoDF3zY7bmPviYrMN7qwCU1wOCaapTVf0nJB8ZwU0hmZBV&X-Amz-Signature=b6c9653fc9640888c8259c7bfe13774b5f28b416abb22e4daa666da9f6a9ca1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZQ2FIN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2EHz63Rncq9qIyuyG%2FxseaV288jTz53NHT%2FRfbrs8QIgfyPrDwEr%2F4%2BAxZY%2FY3D60KU0SulyQBO0xXf2nG9j6kIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPr5KhKT0cTxsQOQ0yrcA7u6ofUxIgIDdIEOoezJADkMy1aaG%2B1U%2BD%2FOdDp5NikXr14Jd2YMFcyrlEbs6od3A7toeWROx0%2FVSerOra7FZrO9wqp9jzOkmW%2FoGwd81rx68LZKL3o1F3X%2F7mZDXCb68Y1GDWv1uBOGXM6UW%2BD6gw6zc8RX%2B1Lj902LxHYNwmhsEEe%2FXzE6DPo0UttA4i6dfsvwNFhe2tlAb2tAamPU%2B0aloEdZBND7wVUR2T3qJ1q3YU06R7OQCsCFXE0tMbhH1tDAOZm1IDx2QU2trpPGxJG5CsrOjatkrKQOsRdBQl7fj1EmQZ3NHy1qcQh1qPi2nnnQD5LtwfwRqYhn5MaADNC3yBnuLnXFI52Ud3pjsewU%2FuU5Nir8e18vyQhXZ2vjqpZhqhoOAH1wVWxl4TEnV8IjA3HGrI%2F0ONiO1BLOk64m0jAOQ%2Bc9cHZyiv7oR%2BHXYC8AZSbGOnW7%2FnlZAg%2F5sW9LIKP2aAklLw9KvnRySD3ll7naAbHVa5YZwLyyKKePdMIs%2BRNEtQILkv%2BPrw20AmR6Y7H%2Fv9mZFbrQIJyMxyHIfxKcG9eRZfusQeP1LpkIlmhsODVPWISGkzoyBmnTyUcy8kBfOjQM25DuozImOhWcfqYFPvpA%2B%2Btk11QKMNH0%2Fb8GOqUBGvqmg5RsHTmCuKrvAZHYU7dzorj2Sz5oklG%2BZtAIL8hRgu81KSk8JAHu7opHaZ1m5Ppdh8Us8812Iujw%2FqDYTiiH6AvNuVuJi0BYdFURVv3SXnmMesAe12N%2FeAjZaV2IY6FRU3VQFe%2B41CbpenZNIpnttn%2FJt74CXjk6ioVcWjEAghgoDF3zY7bmPviYrMN7qwCU1wOCaapTVf0nJB8ZwU0hmZBV&X-Amz-Signature=8b749d9abc2ff9b39efaabf41856e748ed54adf032257ea73032c6376db504b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZQ2FIN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2EHz63Rncq9qIyuyG%2FxseaV288jTz53NHT%2FRfbrs8QIgfyPrDwEr%2F4%2BAxZY%2FY3D60KU0SulyQBO0xXf2nG9j6kIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPr5KhKT0cTxsQOQ0yrcA7u6ofUxIgIDdIEOoezJADkMy1aaG%2B1U%2BD%2FOdDp5NikXr14Jd2YMFcyrlEbs6od3A7toeWROx0%2FVSerOra7FZrO9wqp9jzOkmW%2FoGwd81rx68LZKL3o1F3X%2F7mZDXCb68Y1GDWv1uBOGXM6UW%2BD6gw6zc8RX%2B1Lj902LxHYNwmhsEEe%2FXzE6DPo0UttA4i6dfsvwNFhe2tlAb2tAamPU%2B0aloEdZBND7wVUR2T3qJ1q3YU06R7OQCsCFXE0tMbhH1tDAOZm1IDx2QU2trpPGxJG5CsrOjatkrKQOsRdBQl7fj1EmQZ3NHy1qcQh1qPi2nnnQD5LtwfwRqYhn5MaADNC3yBnuLnXFI52Ud3pjsewU%2FuU5Nir8e18vyQhXZ2vjqpZhqhoOAH1wVWxl4TEnV8IjA3HGrI%2F0ONiO1BLOk64m0jAOQ%2Bc9cHZyiv7oR%2BHXYC8AZSbGOnW7%2FnlZAg%2F5sW9LIKP2aAklLw9KvnRySD3ll7naAbHVa5YZwLyyKKePdMIs%2BRNEtQILkv%2BPrw20AmR6Y7H%2Fv9mZFbrQIJyMxyHIfxKcG9eRZfusQeP1LpkIlmhsODVPWISGkzoyBmnTyUcy8kBfOjQM25DuozImOhWcfqYFPvpA%2B%2Btk11QKMNH0%2Fb8GOqUBGvqmg5RsHTmCuKrvAZHYU7dzorj2Sz5oklG%2BZtAIL8hRgu81KSk8JAHu7opHaZ1m5Ppdh8Us8812Iujw%2FqDYTiiH6AvNuVuJi0BYdFURVv3SXnmMesAe12N%2FeAjZaV2IY6FRU3VQFe%2B41CbpenZNIpnttn%2FJt74CXjk6ioVcWjEAghgoDF3zY7bmPviYrMN7qwCU1wOCaapTVf0nJB8ZwU0hmZBV&X-Amz-Signature=365661f90085631734e722b4e0709e9c07aec5a77fdb9ab595af2a4e283d028b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
