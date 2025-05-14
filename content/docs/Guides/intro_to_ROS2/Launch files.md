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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5X47NRQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClSctmVAlN0kOSKan4w1OVwfsFlcR2MxZRmLNlxRkrVwIhAJtnzf6INExxb2BvfpCuTCNf4irWtWLm4H2kfwwKm%2FtdKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFQpK9rCdBqXPaQ0q3AOgjYejl1RK0ZcLwVChekfQv9mrt1VG08Ecp1jWvSq04cRBCjN%2Bx1QLrK7cZnKWqTgzFQFDih00LMENf8o4Y5VvLRFyEYW9s9v50iSAuJufej4obU5BXiygtbmjCOM4E3iiEDQA%2FiUnWPhVuZFKTqCEoBn3mUdYxHOOsbVlh4DH6nI4UKjgRMxuZty4pkVF%2FA2IfriAV86NfX3W0qH%2FMgsWSoLbDIo0PM021moWQGt4oY0IOW1f%2F7vLnsPl7Cdlj9qhGK6CFunrSd5zN13aEZ7xlQu8v%2F0mEbDBjmbpGMZ5jheWqoLHC4ycIlIIMLSg3eTnwAHwcUVVbdqQUDZh1zUmiuLpmP8J1y5bjoxiyxrTs1ERKRfKgOezllC087CnZgTyQuBlfMDwKlFhEmxjOBbwLb94PbgoaY9ynOMcuCb8PBPw2GKFgcNrObEqSK2eBtX7CHSPy28Zr%2B9ErzScf%2F6pLp98WqUmzPYwxkzIQRrCfLns3sg2QYS4yUJzF8PYLnzw59bdGhyJ3VGgIzMaahqqTMHvi8IGYC6lUDfpxRqhetCfIBNTStiwgRqVeu5ALPNPAM%2BvUzfK0iJUq7ENtKbnOPpUQxhSRTfLc%2Fjk%2FIdTn3CJ01O%2Fg31ouYR%2FuTDj65DBBjqkAcZGfjQX5E%2BPdSqLmwF8ujtLd0I2EoQyyl5F%2FMAXFaLFonsXIEumK8LTroNTSu4nAghw%2FtaSspmCT%2FYQtg439l%2BWM5ZAp7WYTI4%2Fwihf9K9BW0oxAJJi0SewW26XQordpJMqZLH25hHb2Ej84YG2ISbMMQq1tJ15Vc0zqOk85SeqiDe7zrHlMZrkmoA6K9xqeiHx2J9p5RAjJPV%2F429jyE1uL6Vi&X-Amz-Signature=d345927df65a6670fcaa0867820d6144e2ad247e526b208284391802cc4c374e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5X47NRQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClSctmVAlN0kOSKan4w1OVwfsFlcR2MxZRmLNlxRkrVwIhAJtnzf6INExxb2BvfpCuTCNf4irWtWLm4H2kfwwKm%2FtdKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFQpK9rCdBqXPaQ0q3AOgjYejl1RK0ZcLwVChekfQv9mrt1VG08Ecp1jWvSq04cRBCjN%2Bx1QLrK7cZnKWqTgzFQFDih00LMENf8o4Y5VvLRFyEYW9s9v50iSAuJufej4obU5BXiygtbmjCOM4E3iiEDQA%2FiUnWPhVuZFKTqCEoBn3mUdYxHOOsbVlh4DH6nI4UKjgRMxuZty4pkVF%2FA2IfriAV86NfX3W0qH%2FMgsWSoLbDIo0PM021moWQGt4oY0IOW1f%2F7vLnsPl7Cdlj9qhGK6CFunrSd5zN13aEZ7xlQu8v%2F0mEbDBjmbpGMZ5jheWqoLHC4ycIlIIMLSg3eTnwAHwcUVVbdqQUDZh1zUmiuLpmP8J1y5bjoxiyxrTs1ERKRfKgOezllC087CnZgTyQuBlfMDwKlFhEmxjOBbwLb94PbgoaY9ynOMcuCb8PBPw2GKFgcNrObEqSK2eBtX7CHSPy28Zr%2B9ErzScf%2F6pLp98WqUmzPYwxkzIQRrCfLns3sg2QYS4yUJzF8PYLnzw59bdGhyJ3VGgIzMaahqqTMHvi8IGYC6lUDfpxRqhetCfIBNTStiwgRqVeu5ALPNPAM%2BvUzfK0iJUq7ENtKbnOPpUQxhSRTfLc%2Fjk%2FIdTn3CJ01O%2Fg31ouYR%2FuTDj65DBBjqkAcZGfjQX5E%2BPdSqLmwF8ujtLd0I2EoQyyl5F%2FMAXFaLFonsXIEumK8LTroNTSu4nAghw%2FtaSspmCT%2FYQtg439l%2BWM5ZAp7WYTI4%2Fwihf9K9BW0oxAJJi0SewW26XQordpJMqZLH25hHb2Ej84YG2ISbMMQq1tJ15Vc0zqOk85SeqiDe7zrHlMZrkmoA6K9xqeiHx2J9p5RAjJPV%2F429jyE1uL6Vi&X-Amz-Signature=5c61e03f6b730d774bb2312a904be1bb58ef1c7e1252eb2dca40521d2f8c1e28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5X47NRQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClSctmVAlN0kOSKan4w1OVwfsFlcR2MxZRmLNlxRkrVwIhAJtnzf6INExxb2BvfpCuTCNf4irWtWLm4H2kfwwKm%2FtdKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFQpK9rCdBqXPaQ0q3AOgjYejl1RK0ZcLwVChekfQv9mrt1VG08Ecp1jWvSq04cRBCjN%2Bx1QLrK7cZnKWqTgzFQFDih00LMENf8o4Y5VvLRFyEYW9s9v50iSAuJufej4obU5BXiygtbmjCOM4E3iiEDQA%2FiUnWPhVuZFKTqCEoBn3mUdYxHOOsbVlh4DH6nI4UKjgRMxuZty4pkVF%2FA2IfriAV86NfX3W0qH%2FMgsWSoLbDIo0PM021moWQGt4oY0IOW1f%2F7vLnsPl7Cdlj9qhGK6CFunrSd5zN13aEZ7xlQu8v%2F0mEbDBjmbpGMZ5jheWqoLHC4ycIlIIMLSg3eTnwAHwcUVVbdqQUDZh1zUmiuLpmP8J1y5bjoxiyxrTs1ERKRfKgOezllC087CnZgTyQuBlfMDwKlFhEmxjOBbwLb94PbgoaY9ynOMcuCb8PBPw2GKFgcNrObEqSK2eBtX7CHSPy28Zr%2B9ErzScf%2F6pLp98WqUmzPYwxkzIQRrCfLns3sg2QYS4yUJzF8PYLnzw59bdGhyJ3VGgIzMaahqqTMHvi8IGYC6lUDfpxRqhetCfIBNTStiwgRqVeu5ALPNPAM%2BvUzfK0iJUq7ENtKbnOPpUQxhSRTfLc%2Fjk%2FIdTn3CJ01O%2Fg31ouYR%2FuTDj65DBBjqkAcZGfjQX5E%2BPdSqLmwF8ujtLd0I2EoQyyl5F%2FMAXFaLFonsXIEumK8LTroNTSu4nAghw%2FtaSspmCT%2FYQtg439l%2BWM5ZAp7WYTI4%2Fwihf9K9BW0oxAJJi0SewW26XQordpJMqZLH25hHb2Ej84YG2ISbMMQq1tJ15Vc0zqOk85SeqiDe7zrHlMZrkmoA6K9xqeiHx2J9p5RAjJPV%2F429jyE1uL6Vi&X-Amz-Signature=b4da712809ac5e5ca052c6c680c57768ca49ff3babca89c4443d06574b8d47f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
