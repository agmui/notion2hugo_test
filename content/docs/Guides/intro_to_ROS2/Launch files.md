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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7SJ6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgaPfo9Yv7Nj5PHYPgfqe0dRF5giksvPpxRHtJ9PNiZAiBpK6MbWWPvPrHxPlbB5n1hsTgtch9ooXOc902xfzKjFir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMk%2Bga0XaHkNAtjO1xKtwDBWDqe8Rer2D%2BCQgXKt1ZNqeMKcZbsTDojS8JgtDhVpIILQ4XresVD3rqTGW%2Bj2SLffjJ%2FkX1LcjQt80XGwHbWIC37cd4VxUAxiuzuI%2FOyCg2kIoxlyWEeEiuJD2U7vMLsnKbuNJ0TeNZ8WSikCe6qlWgvxGRI1Pf0HHyowC0kCnczk%2BN0JQh9V179GdnuNvh965zPewiJKzdLqH1QRdqbltvA4W9x7XUonMuN2GESsaXOZGRe9hLqYGDIRpDd%2BH2Xco3BUY9vY6xLyldWC576AwkH9Ql1qB1wdbWM%2BewdDuQ3L1%2FMIUwrilAaYHvZgQUKlj9YuoZww3P4eKL7bHk0Dwbi4OzTafrhyldLY0kIBgg7T127sGlhrw0bnjRQZeY47UvZA1ELaAFIBxYj%2FiN9Qayq2%2FY2yIk8Z4DAp7DRsRnf2V9GRV99CnzLdXJtCrztddzp1YPOnDZdSG80yw6r1gUGqd8KjAiv1djsYX845%2FMVFznUia69TA3aukY%2BgCLu%2FHLYiZ3Kxh35M0cOg5xS8PDwDhZDYbpMMJFYjT643y4QS3xq8qp6ru5NJUl1r36bCxy8ERLdHyO8SjAa87P6rDfrlIOSyUT%2BwPsa9xy4vAfh0TIIcT%2By%2Bk8OhMwgvifwQY6pgFHQpL48ajloG4htNmc1Ml5rDSGdQGII4NpDPefFJiStNqmuxDGmsRLuGYO657HDkFF09gwRuxQUshjlnE4JCQuxnhK1x8Zz2SHEA5lWqXX2zSp%2BLhbdTmFiOMuCSMRMziyaNs0Tth73KL6gDY43Z4nMkhg2mMfEqALEjXBOpIEA2W9gR0Lp0mqcHGAPfK1PcoTUZXi4oAgmXdZxPXvOodZABLzpvZ3&X-Amz-Signature=1a5ab26943af01cf81adaf22d3e0227351805bc2d7fc70df6eccae701334eb39&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7SJ6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgaPfo9Yv7Nj5PHYPgfqe0dRF5giksvPpxRHtJ9PNiZAiBpK6MbWWPvPrHxPlbB5n1hsTgtch9ooXOc902xfzKjFir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMk%2Bga0XaHkNAtjO1xKtwDBWDqe8Rer2D%2BCQgXKt1ZNqeMKcZbsTDojS8JgtDhVpIILQ4XresVD3rqTGW%2Bj2SLffjJ%2FkX1LcjQt80XGwHbWIC37cd4VxUAxiuzuI%2FOyCg2kIoxlyWEeEiuJD2U7vMLsnKbuNJ0TeNZ8WSikCe6qlWgvxGRI1Pf0HHyowC0kCnczk%2BN0JQh9V179GdnuNvh965zPewiJKzdLqH1QRdqbltvA4W9x7XUonMuN2GESsaXOZGRe9hLqYGDIRpDd%2BH2Xco3BUY9vY6xLyldWC576AwkH9Ql1qB1wdbWM%2BewdDuQ3L1%2FMIUwrilAaYHvZgQUKlj9YuoZww3P4eKL7bHk0Dwbi4OzTafrhyldLY0kIBgg7T127sGlhrw0bnjRQZeY47UvZA1ELaAFIBxYj%2FiN9Qayq2%2FY2yIk8Z4DAp7DRsRnf2V9GRV99CnzLdXJtCrztddzp1YPOnDZdSG80yw6r1gUGqd8KjAiv1djsYX845%2FMVFznUia69TA3aukY%2BgCLu%2FHLYiZ3Kxh35M0cOg5xS8PDwDhZDYbpMMJFYjT643y4QS3xq8qp6ru5NJUl1r36bCxy8ERLdHyO8SjAa87P6rDfrlIOSyUT%2BwPsa9xy4vAfh0TIIcT%2By%2Bk8OhMwgvifwQY6pgFHQpL48ajloG4htNmc1Ml5rDSGdQGII4NpDPefFJiStNqmuxDGmsRLuGYO657HDkFF09gwRuxQUshjlnE4JCQuxnhK1x8Zz2SHEA5lWqXX2zSp%2BLhbdTmFiOMuCSMRMziyaNs0Tth73KL6gDY43Z4nMkhg2mMfEqALEjXBOpIEA2W9gR0Lp0mqcHGAPfK1PcoTUZXi4oAgmXdZxPXvOodZABLzpvZ3&X-Amz-Signature=01eea0dccfcb913e5c25be36d86813a31c911fbce6abb41624a148c019cf094e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7SJ6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgaPfo9Yv7Nj5PHYPgfqe0dRF5giksvPpxRHtJ9PNiZAiBpK6MbWWPvPrHxPlbB5n1hsTgtch9ooXOc902xfzKjFir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMk%2Bga0XaHkNAtjO1xKtwDBWDqe8Rer2D%2BCQgXKt1ZNqeMKcZbsTDojS8JgtDhVpIILQ4XresVD3rqTGW%2Bj2SLffjJ%2FkX1LcjQt80XGwHbWIC37cd4VxUAxiuzuI%2FOyCg2kIoxlyWEeEiuJD2U7vMLsnKbuNJ0TeNZ8WSikCe6qlWgvxGRI1Pf0HHyowC0kCnczk%2BN0JQh9V179GdnuNvh965zPewiJKzdLqH1QRdqbltvA4W9x7XUonMuN2GESsaXOZGRe9hLqYGDIRpDd%2BH2Xco3BUY9vY6xLyldWC576AwkH9Ql1qB1wdbWM%2BewdDuQ3L1%2FMIUwrilAaYHvZgQUKlj9YuoZww3P4eKL7bHk0Dwbi4OzTafrhyldLY0kIBgg7T127sGlhrw0bnjRQZeY47UvZA1ELaAFIBxYj%2FiN9Qayq2%2FY2yIk8Z4DAp7DRsRnf2V9GRV99CnzLdXJtCrztddzp1YPOnDZdSG80yw6r1gUGqd8KjAiv1djsYX845%2FMVFznUia69TA3aukY%2BgCLu%2FHLYiZ3Kxh35M0cOg5xS8PDwDhZDYbpMMJFYjT643y4QS3xq8qp6ru5NJUl1r36bCxy8ERLdHyO8SjAa87P6rDfrlIOSyUT%2BwPsa9xy4vAfh0TIIcT%2By%2Bk8OhMwgvifwQY6pgFHQpL48ajloG4htNmc1Ml5rDSGdQGII4NpDPefFJiStNqmuxDGmsRLuGYO657HDkFF09gwRuxQUshjlnE4JCQuxnhK1x8Zz2SHEA5lWqXX2zSp%2BLhbdTmFiOMuCSMRMziyaNs0Tth73KL6gDY43Z4nMkhg2mMfEqALEjXBOpIEA2W9gR0Lp0mqcHGAPfK1PcoTUZXi4oAgmXdZxPXvOodZABLzpvZ3&X-Amz-Signature=269c7769089e96f5c78e1b53b48e3655e223adab0549161dabc922e1042dcdec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
