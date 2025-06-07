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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ITSO5V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpSSqmmbwbKN8A2Od0oFURWi5YupGxxdcAfpIe9SO6wIhAK8Rz8TFoC8UYvqh%2B%2BUxLuNh2oGFlrqo9THNOttZ6o3qKv8DCGsQABoMNjM3NDIzMTgzODA1Igxxy5Z3hhtwK5SuBhQq3AOS9pre7t0uMt2nfS64yOlnc37%2BMQkRKI8iicX%2BRyst036FM1lC1tCYDyVdK4spvVm3PdqjahstkZVnVq1B%2FvxKwkRMX07%2Fl9aJxAnDDyQGKGlg%2Bo3DXfZ%2BBP%2BB6k8pAEov%2BXs9HHT5K9hauKJQKna0BoQItE%2FlFSqHPYbD75xNt6flFrRToQotcJS90hvofxkppof4xex0h03fFzZUzWSvGoPLzWbPa%2BKs704c%2F0qd%2FDoH9G7JPUuLKvQnl1Xn83EF39yCLtzysqor8aKauHgFw9S7OG5EVYULTCJRrQsvSSvsj4zPN80rbBB%2Bbx6nnqsScIUx%2BaQJgEjXJomCrQI284s52pZyrRIoX%2FtQ3GS%2BIJblEjw83YP2jSUECkpL3dXuL97SxqTHX0vPTyKV%2Bk8VsahxUJ9YaSgznutAbiBRUV1%2FLch%2F5%2Bv4mu3Vvrwf30ez4vYVd3UQxcvoR%2B1HgqpPIbE%2FKmUWq8O8HluHwp0om3lYnNIChWatDY7BX1u17GLXKhgc9LmU8pOLpxZ%2BEiWCkWIU1Rsa4qEpGMn8Dqeeh51j4RcHRZx2ZtxlIt23ifqi0dDCrCi3%2BDGEtB8GeS%2BjCN5rNqZpn0riCyzOQRD60%2BQ5%2Bgjv%2FRjqKRFukTCwwI7CBjqkAb7R%2Bh5L%2B0xAasMqETZ7%2Bx%2BUBEMTlDoAw5kOU9fov3wrvgAwNJqbtCnaHXUT3%2FP%2FITct7xzLh9RanNG9Gw2z76a17zSOJZ79iyT4fYwR9mB21dwJRHtgraqqh%2B664Up8ygyj4eTfeVcu9K3Su4g87%2BQPxc8Je%2BmGjxPKbrZcGw%2Bmz847h4ppoNiyW33B7rJ0ILDFCcLr2TO9OLodtSEwQ1sMzM%2Bs&X-Amz-Signature=7f7a590227b10903fd5620067d6a27f602f40dc4ddcf34f6c4b7d009d52d2671&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ITSO5V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpSSqmmbwbKN8A2Od0oFURWi5YupGxxdcAfpIe9SO6wIhAK8Rz8TFoC8UYvqh%2B%2BUxLuNh2oGFlrqo9THNOttZ6o3qKv8DCGsQABoMNjM3NDIzMTgzODA1Igxxy5Z3hhtwK5SuBhQq3AOS9pre7t0uMt2nfS64yOlnc37%2BMQkRKI8iicX%2BRyst036FM1lC1tCYDyVdK4spvVm3PdqjahstkZVnVq1B%2FvxKwkRMX07%2Fl9aJxAnDDyQGKGlg%2Bo3DXfZ%2BBP%2BB6k8pAEov%2BXs9HHT5K9hauKJQKna0BoQItE%2FlFSqHPYbD75xNt6flFrRToQotcJS90hvofxkppof4xex0h03fFzZUzWSvGoPLzWbPa%2BKs704c%2F0qd%2FDoH9G7JPUuLKvQnl1Xn83EF39yCLtzysqor8aKauHgFw9S7OG5EVYULTCJRrQsvSSvsj4zPN80rbBB%2Bbx6nnqsScIUx%2BaQJgEjXJomCrQI284s52pZyrRIoX%2FtQ3GS%2BIJblEjw83YP2jSUECkpL3dXuL97SxqTHX0vPTyKV%2Bk8VsahxUJ9YaSgznutAbiBRUV1%2FLch%2F5%2Bv4mu3Vvrwf30ez4vYVd3UQxcvoR%2B1HgqpPIbE%2FKmUWq8O8HluHwp0om3lYnNIChWatDY7BX1u17GLXKhgc9LmU8pOLpxZ%2BEiWCkWIU1Rsa4qEpGMn8Dqeeh51j4RcHRZx2ZtxlIt23ifqi0dDCrCi3%2BDGEtB8GeS%2BjCN5rNqZpn0riCyzOQRD60%2BQ5%2Bgjv%2FRjqKRFukTCwwI7CBjqkAb7R%2Bh5L%2B0xAasMqETZ7%2Bx%2BUBEMTlDoAw5kOU9fov3wrvgAwNJqbtCnaHXUT3%2FP%2FITct7xzLh9RanNG9Gw2z76a17zSOJZ79iyT4fYwR9mB21dwJRHtgraqqh%2B664Up8ygyj4eTfeVcu9K3Su4g87%2BQPxc8Je%2BmGjxPKbrZcGw%2Bmz847h4ppoNiyW33B7rJ0ILDFCcLr2TO9OLodtSEwQ1sMzM%2Bs&X-Amz-Signature=77f21d73aeaa3fe9cf067a16fc32393835b439f3ad71d0e11506395a3b768cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ITSO5V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpSSqmmbwbKN8A2Od0oFURWi5YupGxxdcAfpIe9SO6wIhAK8Rz8TFoC8UYvqh%2B%2BUxLuNh2oGFlrqo9THNOttZ6o3qKv8DCGsQABoMNjM3NDIzMTgzODA1Igxxy5Z3hhtwK5SuBhQq3AOS9pre7t0uMt2nfS64yOlnc37%2BMQkRKI8iicX%2BRyst036FM1lC1tCYDyVdK4spvVm3PdqjahstkZVnVq1B%2FvxKwkRMX07%2Fl9aJxAnDDyQGKGlg%2Bo3DXfZ%2BBP%2BB6k8pAEov%2BXs9HHT5K9hauKJQKna0BoQItE%2FlFSqHPYbD75xNt6flFrRToQotcJS90hvofxkppof4xex0h03fFzZUzWSvGoPLzWbPa%2BKs704c%2F0qd%2FDoH9G7JPUuLKvQnl1Xn83EF39yCLtzysqor8aKauHgFw9S7OG5EVYULTCJRrQsvSSvsj4zPN80rbBB%2Bbx6nnqsScIUx%2BaQJgEjXJomCrQI284s52pZyrRIoX%2FtQ3GS%2BIJblEjw83YP2jSUECkpL3dXuL97SxqTHX0vPTyKV%2Bk8VsahxUJ9YaSgznutAbiBRUV1%2FLch%2F5%2Bv4mu3Vvrwf30ez4vYVd3UQxcvoR%2B1HgqpPIbE%2FKmUWq8O8HluHwp0om3lYnNIChWatDY7BX1u17GLXKhgc9LmU8pOLpxZ%2BEiWCkWIU1Rsa4qEpGMn8Dqeeh51j4RcHRZx2ZtxlIt23ifqi0dDCrCi3%2BDGEtB8GeS%2BjCN5rNqZpn0riCyzOQRD60%2BQ5%2Bgjv%2FRjqKRFukTCwwI7CBjqkAb7R%2Bh5L%2B0xAasMqETZ7%2Bx%2BUBEMTlDoAw5kOU9fov3wrvgAwNJqbtCnaHXUT3%2FP%2FITct7xzLh9RanNG9Gw2z76a17zSOJZ79iyT4fYwR9mB21dwJRHtgraqqh%2B664Up8ygyj4eTfeVcu9K3Su4g87%2BQPxc8Je%2BmGjxPKbrZcGw%2Bmz847h4ppoNiyW33B7rJ0ILDFCcLr2TO9OLodtSEwQ1sMzM%2Bs&X-Amz-Signature=cad40e98d3359b05d51c945e5757c5df4b1297e56ad6d71a47c9582c51b64659&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
