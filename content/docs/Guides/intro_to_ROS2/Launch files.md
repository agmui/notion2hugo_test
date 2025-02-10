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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4IEEWK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2B2VhHx7po0dbmtZwYYHSbgx4Vyy5rA%2FVhqHKRYOBc8AiAWk8FtzFxe6zuxwbSNsBOIUQpSwvHV2O6BjGgHkBDyiiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOkr6ibttlSzrHdSKtwD2bKYi7%2Fx4RVikthfX%2BT6yiMk3h%2Fgc2GFzuqB4asHnXp0abRwUGK1iffm3sbxw9mBWjnlZKqcieZbDXArqKptmqz9yCBIzSGvYX5q2e%2Fd5uPcg%2FZjaTFmEgTz1zln1mCw3t1rifiVU5ECRCmQO9NI4HX4VSPStOrw0XwmaE01O94CFmaxIN2oGj7%2B%2B5W67SxifPrA8CgFeBuqOZ8bVZMyDSbEtD%2FQLC11Hp2jqiNiEeMVIK27E92Btl85i%2FdHqZA5h07pxOT3fZg1d7XAfL8cv%2F12JRR0A8%2F00NqCKw%2FaKe9ehO5cbUCld%2FMAdSaQR1d8l5ezJLOrHp%2BGfTeK%2FrI7XCpxXDiyKB4yP74pxkiM%2B7LmfUxX5kpL7q1FEk2l15w0RoAvV3Mp0bwk1MsPbWdoKLtXIycBogQ0zxoYBJ7pMIZ3gRryhcOepj0ll%2BMKgpAlce2wEon5pL2u0eVqjABbXOWl8DKTfkhQsb7%2FU%2F%2FzBJYjy%2F%2Be939jzd2Q8mklJWKgyg0rvgrO4OWY0%2BV%2FIlWAjIUxUEfjaYWvvbPLEfogoleYm66VhF1rw3EEZAL4sMCp2mXvntu48PbWOcrgvMDKgNK5jTeYvqtseQUEKgxhCo42%2FbFJhZlneHRJxy8wsryovQY6pgEJVRl6pm0FhBjE6SK5NZgqyjidJf299itHNOUptPXYxgaNngp289yS9o05ug13dkaQm6W1UCiyT%2F2%2FHIEQzx%2Bp8x0TMCJ88J1%2FoJ9XNrrDyJbv2R9SZeqpbgV%2FcyTHR5Mm1HrfvXvFifvPSElv6QQJAvB7Te17I5tCc5cEwlYvh4RMhDNbBdlKyrJs3qfKYAzJRp%2BphgG2k5DkQLWXhcegdWCqoLm3&X-Amz-Signature=27866889579f9559276c2a7460c2834ed814e58e77e96f5fc96659dbf2761de2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4IEEWK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2B2VhHx7po0dbmtZwYYHSbgx4Vyy5rA%2FVhqHKRYOBc8AiAWk8FtzFxe6zuxwbSNsBOIUQpSwvHV2O6BjGgHkBDyiiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOkr6ibttlSzrHdSKtwD2bKYi7%2Fx4RVikthfX%2BT6yiMk3h%2Fgc2GFzuqB4asHnXp0abRwUGK1iffm3sbxw9mBWjnlZKqcieZbDXArqKptmqz9yCBIzSGvYX5q2e%2Fd5uPcg%2FZjaTFmEgTz1zln1mCw3t1rifiVU5ECRCmQO9NI4HX4VSPStOrw0XwmaE01O94CFmaxIN2oGj7%2B%2B5W67SxifPrA8CgFeBuqOZ8bVZMyDSbEtD%2FQLC11Hp2jqiNiEeMVIK27E92Btl85i%2FdHqZA5h07pxOT3fZg1d7XAfL8cv%2F12JRR0A8%2F00NqCKw%2FaKe9ehO5cbUCld%2FMAdSaQR1d8l5ezJLOrHp%2BGfTeK%2FrI7XCpxXDiyKB4yP74pxkiM%2B7LmfUxX5kpL7q1FEk2l15w0RoAvV3Mp0bwk1MsPbWdoKLtXIycBogQ0zxoYBJ7pMIZ3gRryhcOepj0ll%2BMKgpAlce2wEon5pL2u0eVqjABbXOWl8DKTfkhQsb7%2FU%2F%2FzBJYjy%2F%2Be939jzd2Q8mklJWKgyg0rvgrO4OWY0%2BV%2FIlWAjIUxUEfjaYWvvbPLEfogoleYm66VhF1rw3EEZAL4sMCp2mXvntu48PbWOcrgvMDKgNK5jTeYvqtseQUEKgxhCo42%2FbFJhZlneHRJxy8wsryovQY6pgEJVRl6pm0FhBjE6SK5NZgqyjidJf299itHNOUptPXYxgaNngp289yS9o05ug13dkaQm6W1UCiyT%2F2%2FHIEQzx%2Bp8x0TMCJ88J1%2FoJ9XNrrDyJbv2R9SZeqpbgV%2FcyTHR5Mm1HrfvXvFifvPSElv6QQJAvB7Te17I5tCc5cEwlYvh4RMhDNbBdlKyrJs3qfKYAzJRp%2BphgG2k5DkQLWXhcegdWCqoLm3&X-Amz-Signature=2dd1fa1818503b87908902d3233c012bbd8f5a2747a2e2c283a58c8734fe6475&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4IEEWK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2B2VhHx7po0dbmtZwYYHSbgx4Vyy5rA%2FVhqHKRYOBc8AiAWk8FtzFxe6zuxwbSNsBOIUQpSwvHV2O6BjGgHkBDyiiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOkr6ibttlSzrHdSKtwD2bKYi7%2Fx4RVikthfX%2BT6yiMk3h%2Fgc2GFzuqB4asHnXp0abRwUGK1iffm3sbxw9mBWjnlZKqcieZbDXArqKptmqz9yCBIzSGvYX5q2e%2Fd5uPcg%2FZjaTFmEgTz1zln1mCw3t1rifiVU5ECRCmQO9NI4HX4VSPStOrw0XwmaE01O94CFmaxIN2oGj7%2B%2B5W67SxifPrA8CgFeBuqOZ8bVZMyDSbEtD%2FQLC11Hp2jqiNiEeMVIK27E92Btl85i%2FdHqZA5h07pxOT3fZg1d7XAfL8cv%2F12JRR0A8%2F00NqCKw%2FaKe9ehO5cbUCld%2FMAdSaQR1d8l5ezJLOrHp%2BGfTeK%2FrI7XCpxXDiyKB4yP74pxkiM%2B7LmfUxX5kpL7q1FEk2l15w0RoAvV3Mp0bwk1MsPbWdoKLtXIycBogQ0zxoYBJ7pMIZ3gRryhcOepj0ll%2BMKgpAlce2wEon5pL2u0eVqjABbXOWl8DKTfkhQsb7%2FU%2F%2FzBJYjy%2F%2Be939jzd2Q8mklJWKgyg0rvgrO4OWY0%2BV%2FIlWAjIUxUEfjaYWvvbPLEfogoleYm66VhF1rw3EEZAL4sMCp2mXvntu48PbWOcrgvMDKgNK5jTeYvqtseQUEKgxhCo42%2FbFJhZlneHRJxy8wsryovQY6pgEJVRl6pm0FhBjE6SK5NZgqyjidJf299itHNOUptPXYxgaNngp289yS9o05ug13dkaQm6W1UCiyT%2F2%2FHIEQzx%2Bp8x0TMCJ88J1%2FoJ9XNrrDyJbv2R9SZeqpbgV%2FcyTHR5Mm1HrfvXvFifvPSElv6QQJAvB7Te17I5tCc5cEwlYvh4RMhDNbBdlKyrJs3qfKYAzJRp%2BphgG2k5DkQLWXhcegdWCqoLm3&X-Amz-Signature=a81120408f158768beff87856569dc131d371c69fc8b611f16c61d0f3b3a932b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
