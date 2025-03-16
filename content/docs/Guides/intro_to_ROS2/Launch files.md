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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AC74Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPUOMscpmYRsJ06XiNGO4D0aNzemCafTTjIgY8hDKNQIgIM9koDb7CYw%2BoxscwrJ9sDypD1t%2FrmNh%2FjTL7N5dSNoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMv%2BS5mif5Sx%2FgstDCrcA%2Bn1AwnIOkyis36%2FgZ2pDP%2Fiq0sfV536g%2FydH0avdrbn%2BGPXTaBFgYF0986M%2B4r7GC02tvA2njnZGeGMIhsdRu1vLdOrLlk8MbFYeJdMiAq9LJbGeQAil0pD8LjVGh6Yhgk9FlTkNxNXcaULXOsOdL09SaiYSTOx1StnciVdpVPtep3M8N9Zw3Ux5KJIC1kpWT8FSgkEy9RQby4g1TxF22XM6yuT7LntYcbAQ9vjX2EXHv0Kv9Q3bRo8W%2BT0ZCWCJL%2B2aM5Z1GRk0LULX1NhdLjL9MKVwn0N773y0aydiB26els%2FB8UfTxSWGl92JMiQJgz2tevFQaRHCbjUpaxaxz2V0NeFPwcGTDZVcGioRp7%2BvDcjwqwL9JsoLPc3vYvaUXD4pU2M2y%2Fne4ykz0s0lMj%2BUp1td9to6QJEzEseGYIvWzD9XKJVO%2BXaab3fdP2tNM1b%2FDzmmlq9VPXbgf%2Bg9zJEeaD5REK5QWpV9vdxLrAbYEjv2CzHXji05T5RYxrc%2BFETsgTVo4yO1pgnFVxptkP070pyKxfPnC8n9z0%2Fy8MFgQarxSdjEd%2FyeDa2YdR%2B%2B50sHTYMGLjRzdpgyqL9QI6dMkCqPR%2BHMF%2Be15%2FyvsLH7ogX6hMWeIMZX05RMKy22L4GOqUB6JoAlxdCwhnwNu4Pl9KUZxHT6Jb7MBOB7ghfoDLC0T24U5ufMUS8yMFfgtcy9BKlZULuyIs2jhYu2qhgjhDM8gX7scVtqqqZ5GK2tBlzrhIuqUeGp2wpUsKKCppqnmWOOfVaRFzhY1kh7IwtWluz2QtKYD%2FmfCpg45FIpBhMBzLtcisPlyHsjGPzjKkl9euqdN53K6%2BzCLpS%2FsyCBIgri4T6%2B90x&X-Amz-Signature=a6b8d55aa3b718edab7808770c98f0e1729bd0e73441c0c0d709e50bf3fe8989&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AC74Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPUOMscpmYRsJ06XiNGO4D0aNzemCafTTjIgY8hDKNQIgIM9koDb7CYw%2BoxscwrJ9sDypD1t%2FrmNh%2FjTL7N5dSNoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMv%2BS5mif5Sx%2FgstDCrcA%2Bn1AwnIOkyis36%2FgZ2pDP%2Fiq0sfV536g%2FydH0avdrbn%2BGPXTaBFgYF0986M%2B4r7GC02tvA2njnZGeGMIhsdRu1vLdOrLlk8MbFYeJdMiAq9LJbGeQAil0pD8LjVGh6Yhgk9FlTkNxNXcaULXOsOdL09SaiYSTOx1StnciVdpVPtep3M8N9Zw3Ux5KJIC1kpWT8FSgkEy9RQby4g1TxF22XM6yuT7LntYcbAQ9vjX2EXHv0Kv9Q3bRo8W%2BT0ZCWCJL%2B2aM5Z1GRk0LULX1NhdLjL9MKVwn0N773y0aydiB26els%2FB8UfTxSWGl92JMiQJgz2tevFQaRHCbjUpaxaxz2V0NeFPwcGTDZVcGioRp7%2BvDcjwqwL9JsoLPc3vYvaUXD4pU2M2y%2Fne4ykz0s0lMj%2BUp1td9to6QJEzEseGYIvWzD9XKJVO%2BXaab3fdP2tNM1b%2FDzmmlq9VPXbgf%2Bg9zJEeaD5REK5QWpV9vdxLrAbYEjv2CzHXji05T5RYxrc%2BFETsgTVo4yO1pgnFVxptkP070pyKxfPnC8n9z0%2Fy8MFgQarxSdjEd%2FyeDa2YdR%2B%2B50sHTYMGLjRzdpgyqL9QI6dMkCqPR%2BHMF%2Be15%2FyvsLH7ogX6hMWeIMZX05RMKy22L4GOqUB6JoAlxdCwhnwNu4Pl9KUZxHT6Jb7MBOB7ghfoDLC0T24U5ufMUS8yMFfgtcy9BKlZULuyIs2jhYu2qhgjhDM8gX7scVtqqqZ5GK2tBlzrhIuqUeGp2wpUsKKCppqnmWOOfVaRFzhY1kh7IwtWluz2QtKYD%2FmfCpg45FIpBhMBzLtcisPlyHsjGPzjKkl9euqdN53K6%2BzCLpS%2FsyCBIgri4T6%2B90x&X-Amz-Signature=9f46f691914b2a8315dbe977e8c8b8bb414f76ccfd825a5695ed2be28ceb4e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7AC74Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPUOMscpmYRsJ06XiNGO4D0aNzemCafTTjIgY8hDKNQIgIM9koDb7CYw%2BoxscwrJ9sDypD1t%2FrmNh%2FjTL7N5dSNoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMv%2BS5mif5Sx%2FgstDCrcA%2Bn1AwnIOkyis36%2FgZ2pDP%2Fiq0sfV536g%2FydH0avdrbn%2BGPXTaBFgYF0986M%2B4r7GC02tvA2njnZGeGMIhsdRu1vLdOrLlk8MbFYeJdMiAq9LJbGeQAil0pD8LjVGh6Yhgk9FlTkNxNXcaULXOsOdL09SaiYSTOx1StnciVdpVPtep3M8N9Zw3Ux5KJIC1kpWT8FSgkEy9RQby4g1TxF22XM6yuT7LntYcbAQ9vjX2EXHv0Kv9Q3bRo8W%2BT0ZCWCJL%2B2aM5Z1GRk0LULX1NhdLjL9MKVwn0N773y0aydiB26els%2FB8UfTxSWGl92JMiQJgz2tevFQaRHCbjUpaxaxz2V0NeFPwcGTDZVcGioRp7%2BvDcjwqwL9JsoLPc3vYvaUXD4pU2M2y%2Fne4ykz0s0lMj%2BUp1td9to6QJEzEseGYIvWzD9XKJVO%2BXaab3fdP2tNM1b%2FDzmmlq9VPXbgf%2Bg9zJEeaD5REK5QWpV9vdxLrAbYEjv2CzHXji05T5RYxrc%2BFETsgTVo4yO1pgnFVxptkP070pyKxfPnC8n9z0%2Fy8MFgQarxSdjEd%2FyeDa2YdR%2B%2B50sHTYMGLjRzdpgyqL9QI6dMkCqPR%2BHMF%2Be15%2FyvsLH7ogX6hMWeIMZX05RMKy22L4GOqUB6JoAlxdCwhnwNu4Pl9KUZxHT6Jb7MBOB7ghfoDLC0T24U5ufMUS8yMFfgtcy9BKlZULuyIs2jhYu2qhgjhDM8gX7scVtqqqZ5GK2tBlzrhIuqUeGp2wpUsKKCppqnmWOOfVaRFzhY1kh7IwtWluz2QtKYD%2FmfCpg45FIpBhMBzLtcisPlyHsjGPzjKkl9euqdN53K6%2BzCLpS%2FsyCBIgri4T6%2B90x&X-Amz-Signature=c641380e924ed6840741d5d569d80d53ec383d3df424fa1c3aa3308b54d23d05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
