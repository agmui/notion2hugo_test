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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVII6PS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFKaok5Yi%2Ff1VDDo7WBrllN0h7a0E8V%2FRCF4alUAnf4HAiEA8cPFo4zZunQjfK%2Fgo0W76bYLZXcWmtcTEYaOGdkjIawq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDz04L8sKoUaaXBeyCrcA4YQ9Yk7NRPYwFN8tknht6MnSlkkAp14SoLqQIPCYhAGkW%2Fz49SxekZzFfUwonzuRQtM%2FMbuvstqYZEF0xfL530laBY2JU%2BhOjum2n0OwkUeZ8PU6fhm9vt85jMrgvo%2F2YfWzmJFKcznvyGCb%2Fe7itipTcdVP%2B%2Bp2F3KqNQdD5XJQ5LC29glBC9VSp0aa9uWjBwMH90RGZtJKDsCQzm2YMk4v32P2BwMkZnZ%2Fg6l3rNjUgzqs0%2BQkWXe%2BPksym401YevApOGDjqsi3gemNL9C1QIzAUZNdF5E%2FS%2BL%2FSRfLdAByTBULyF4H9ZfNnR0F8sSb3X2LBZRM6xoetuICYNFlrBQiKQ75Et1%2B6%2FEIwsULodW%2Bvn6EN4GHNN%2BC0JpNfgS5xlAiq2AKYtKl7bjm9hD4QyJtFSLYYoupn2K6W2ZVhiaW0lDMYRI%2FUTFhqyuc4YmlhuF%2Bk29PWEzpuRwCfKb4dnM6XSIUmp3RfKH1nbzDGY%2B7DQkhLIG767cRweLha9Ju3Oro%2BC082fOHmErE5kfFNof878dd7ONJXmqOkNjDT771OLnl8coHZQ7TJR3%2Bdgbh8oMgBvPCX7TkWla0un7tk%2BLPs6XAdRdaaDLOonO85XsFFjqnkd0stSyFi6MOKu9b0GOqUB6dFNvmjEHIOcbQfobb2HrIhId5%2FSzcIgCmyjNtarsTJ8oHGzbfYaOfYnVXxqhLIJPaM3HhqMJU%2FNkJ3sEiZuLAdAN0BRi4uolSwWods4zU3X%2BRcb0RKUjn4NXvT7Ga3k8fFrwTMjUrFzcx8xZiWDPw7NJX7PTaL79ClEywpdnLDt5oibEFRqSkU307CigKmzqXOCTGzWssQs3inWQLnpvU2NsTYU&X-Amz-Signature=266bb0c184c2a029423f29785f49117ba9effe81c96a80399357e6d8eb6c5323&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVII6PS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFKaok5Yi%2Ff1VDDo7WBrllN0h7a0E8V%2FRCF4alUAnf4HAiEA8cPFo4zZunQjfK%2Fgo0W76bYLZXcWmtcTEYaOGdkjIawq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDz04L8sKoUaaXBeyCrcA4YQ9Yk7NRPYwFN8tknht6MnSlkkAp14SoLqQIPCYhAGkW%2Fz49SxekZzFfUwonzuRQtM%2FMbuvstqYZEF0xfL530laBY2JU%2BhOjum2n0OwkUeZ8PU6fhm9vt85jMrgvo%2F2YfWzmJFKcznvyGCb%2Fe7itipTcdVP%2B%2Bp2F3KqNQdD5XJQ5LC29glBC9VSp0aa9uWjBwMH90RGZtJKDsCQzm2YMk4v32P2BwMkZnZ%2Fg6l3rNjUgzqs0%2BQkWXe%2BPksym401YevApOGDjqsi3gemNL9C1QIzAUZNdF5E%2FS%2BL%2FSRfLdAByTBULyF4H9ZfNnR0F8sSb3X2LBZRM6xoetuICYNFlrBQiKQ75Et1%2B6%2FEIwsULodW%2Bvn6EN4GHNN%2BC0JpNfgS5xlAiq2AKYtKl7bjm9hD4QyJtFSLYYoupn2K6W2ZVhiaW0lDMYRI%2FUTFhqyuc4YmlhuF%2Bk29PWEzpuRwCfKb4dnM6XSIUmp3RfKH1nbzDGY%2B7DQkhLIG767cRweLha9Ju3Oro%2BC082fOHmErE5kfFNof878dd7ONJXmqOkNjDT771OLnl8coHZQ7TJR3%2Bdgbh8oMgBvPCX7TkWla0un7tk%2BLPs6XAdRdaaDLOonO85XsFFjqnkd0stSyFi6MOKu9b0GOqUB6dFNvmjEHIOcbQfobb2HrIhId5%2FSzcIgCmyjNtarsTJ8oHGzbfYaOfYnVXxqhLIJPaM3HhqMJU%2FNkJ3sEiZuLAdAN0BRi4uolSwWods4zU3X%2BRcb0RKUjn4NXvT7Ga3k8fFrwTMjUrFzcx8xZiWDPw7NJX7PTaL79ClEywpdnLDt5oibEFRqSkU307CigKmzqXOCTGzWssQs3inWQLnpvU2NsTYU&X-Amz-Signature=aec15d2a1e0cffe187ee43c897a47ed578eb6c629e4ee9c419bc19548ff54e69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVII6PS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFKaok5Yi%2Ff1VDDo7WBrllN0h7a0E8V%2FRCF4alUAnf4HAiEA8cPFo4zZunQjfK%2Fgo0W76bYLZXcWmtcTEYaOGdkjIawq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDz04L8sKoUaaXBeyCrcA4YQ9Yk7NRPYwFN8tknht6MnSlkkAp14SoLqQIPCYhAGkW%2Fz49SxekZzFfUwonzuRQtM%2FMbuvstqYZEF0xfL530laBY2JU%2BhOjum2n0OwkUeZ8PU6fhm9vt85jMrgvo%2F2YfWzmJFKcznvyGCb%2Fe7itipTcdVP%2B%2Bp2F3KqNQdD5XJQ5LC29glBC9VSp0aa9uWjBwMH90RGZtJKDsCQzm2YMk4v32P2BwMkZnZ%2Fg6l3rNjUgzqs0%2BQkWXe%2BPksym401YevApOGDjqsi3gemNL9C1QIzAUZNdF5E%2FS%2BL%2FSRfLdAByTBULyF4H9ZfNnR0F8sSb3X2LBZRM6xoetuICYNFlrBQiKQ75Et1%2B6%2FEIwsULodW%2Bvn6EN4GHNN%2BC0JpNfgS5xlAiq2AKYtKl7bjm9hD4QyJtFSLYYoupn2K6W2ZVhiaW0lDMYRI%2FUTFhqyuc4YmlhuF%2Bk29PWEzpuRwCfKb4dnM6XSIUmp3RfKH1nbzDGY%2B7DQkhLIG767cRweLha9Ju3Oro%2BC082fOHmErE5kfFNof878dd7ONJXmqOkNjDT771OLnl8coHZQ7TJR3%2Bdgbh8oMgBvPCX7TkWla0un7tk%2BLPs6XAdRdaaDLOonO85XsFFjqnkd0stSyFi6MOKu9b0GOqUB6dFNvmjEHIOcbQfobb2HrIhId5%2FSzcIgCmyjNtarsTJ8oHGzbfYaOfYnVXxqhLIJPaM3HhqMJU%2FNkJ3sEiZuLAdAN0BRi4uolSwWods4zU3X%2BRcb0RKUjn4NXvT7Ga3k8fFrwTMjUrFzcx8xZiWDPw7NJX7PTaL79ClEywpdnLDt5oibEFRqSkU307CigKmzqXOCTGzWssQs3inWQLnpvU2NsTYU&X-Amz-Signature=cf0f9b6bef4a2bfca0ce0a33bf7fb5b73d9e9e814cbcbc80cb034795926fce52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
