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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5DHQKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUFYRHnBWndg%2FdiFvzpOiPWuEuTDio3q7tYnAsnfq7wIgD%2FZRdRft0FpiLP%2B6Ke%2FK4CJjhnZ8dcP8JCOzv6s2vpYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDtg6Uepx30w%2FV5H5ircA7E4rdfeof0BjIgwKF%2BH%2F7ONET5oU1UJPWy30Pz4EDhW%2FqIjrTpKV7V07Jsl2krzAQ%2FT8ViAMuQiSmWBcTeN%2FdKJBRCP4QU5EdT3QC%2FBaKuRmCdzXuvR2h0VSIh%2FFTvzSC6geTW8HuaVjLBox%2BGzDvTxQ9PGrnJdpf2jpEfuh6HH%2BsTntgXr1N3Fy%2FtOOOOzcHs5mHB7Troty6fXMEfmSJpO1RlE0zANivd02xl1i0zLBc%2BVpOtur4fewEXwdTgxbfQIddYGCGHx2FOyCJYzPq%2FUTUxXkxwMjbK6yRDYmxWHU%2BaNYSdphKzSzbr7Z%2Fe7E1wMA9d35APz8u3d80HOA9CB1TljeH8ApJ9dHqpTEsPGS5gz9IB4qs2OeUugq3qoSsmwTaWW2mjOQZKzwuA7Aq6nnfeNa0nw8fob9jFNRi2BiUKQkypaEjiQt2nzuSPT5XAyaAcFfVhcAxUanpjptXiwpsFvmIHjxNLNG7nifsVQCLjaq5Ppbpq4u%2BmgaEDfaPijonKcVbT4EpXRZiMuf3lmuwXF%2BsidUL543NbucGL21kbyPVaXiO8bhYSjNl7b%2BxalosZv4hUvZO0qnUyJam7xDDFx3udZLhJ%2B9vEItvnUtQoHh83DDuup0QeaMK%2Bhl78GOqUBnGpVNWoajZI2CRYkbbOOI%2Bnv1KaCHtDbCg8kUVaA5xJS7KombguyCM%2Fd%2F2l%2BWxk9tcxIAEFokX723f6Co7%2FRNameNWD1lLfd%2FME4B3a0HLKtGmYM6fB5pALqA7Pq9x0jxuzwoOjM%2Fm3y%2F%2BmAX27NPXZ76A5mAaZW75yaupXjCSVpxIXwxucRcTvolGB%2B5wDx0yDWQB1rUzWPjRmq9PTuELWCvFUL&X-Amz-Signature=120b3ed48490b44f557859531436cea4f623a3b36d0d3da16c5a9a30d586788d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5DHQKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUFYRHnBWndg%2FdiFvzpOiPWuEuTDio3q7tYnAsnfq7wIgD%2FZRdRft0FpiLP%2B6Ke%2FK4CJjhnZ8dcP8JCOzv6s2vpYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDtg6Uepx30w%2FV5H5ircA7E4rdfeof0BjIgwKF%2BH%2F7ONET5oU1UJPWy30Pz4EDhW%2FqIjrTpKV7V07Jsl2krzAQ%2FT8ViAMuQiSmWBcTeN%2FdKJBRCP4QU5EdT3QC%2FBaKuRmCdzXuvR2h0VSIh%2FFTvzSC6geTW8HuaVjLBox%2BGzDvTxQ9PGrnJdpf2jpEfuh6HH%2BsTntgXr1N3Fy%2FtOOOOzcHs5mHB7Troty6fXMEfmSJpO1RlE0zANivd02xl1i0zLBc%2BVpOtur4fewEXwdTgxbfQIddYGCGHx2FOyCJYzPq%2FUTUxXkxwMjbK6yRDYmxWHU%2BaNYSdphKzSzbr7Z%2Fe7E1wMA9d35APz8u3d80HOA9CB1TljeH8ApJ9dHqpTEsPGS5gz9IB4qs2OeUugq3qoSsmwTaWW2mjOQZKzwuA7Aq6nnfeNa0nw8fob9jFNRi2BiUKQkypaEjiQt2nzuSPT5XAyaAcFfVhcAxUanpjptXiwpsFvmIHjxNLNG7nifsVQCLjaq5Ppbpq4u%2BmgaEDfaPijonKcVbT4EpXRZiMuf3lmuwXF%2BsidUL543NbucGL21kbyPVaXiO8bhYSjNl7b%2BxalosZv4hUvZO0qnUyJam7xDDFx3udZLhJ%2B9vEItvnUtQoHh83DDuup0QeaMK%2Bhl78GOqUBnGpVNWoajZI2CRYkbbOOI%2Bnv1KaCHtDbCg8kUVaA5xJS7KombguyCM%2Fd%2F2l%2BWxk9tcxIAEFokX723f6Co7%2FRNameNWD1lLfd%2FME4B3a0HLKtGmYM6fB5pALqA7Pq9x0jxuzwoOjM%2Fm3y%2F%2BmAX27NPXZ76A5mAaZW75yaupXjCSVpxIXwxucRcTvolGB%2B5wDx0yDWQB1rUzWPjRmq9PTuELWCvFUL&X-Amz-Signature=934aa7970d2690d1e07c9d6f3fce56abfa2abf5f04d9a740bcc467e324c954b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5DHQKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUFYRHnBWndg%2FdiFvzpOiPWuEuTDio3q7tYnAsnfq7wIgD%2FZRdRft0FpiLP%2B6Ke%2FK4CJjhnZ8dcP8JCOzv6s2vpYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDtg6Uepx30w%2FV5H5ircA7E4rdfeof0BjIgwKF%2BH%2F7ONET5oU1UJPWy30Pz4EDhW%2FqIjrTpKV7V07Jsl2krzAQ%2FT8ViAMuQiSmWBcTeN%2FdKJBRCP4QU5EdT3QC%2FBaKuRmCdzXuvR2h0VSIh%2FFTvzSC6geTW8HuaVjLBox%2BGzDvTxQ9PGrnJdpf2jpEfuh6HH%2BsTntgXr1N3Fy%2FtOOOOzcHs5mHB7Troty6fXMEfmSJpO1RlE0zANivd02xl1i0zLBc%2BVpOtur4fewEXwdTgxbfQIddYGCGHx2FOyCJYzPq%2FUTUxXkxwMjbK6yRDYmxWHU%2BaNYSdphKzSzbr7Z%2Fe7E1wMA9d35APz8u3d80HOA9CB1TljeH8ApJ9dHqpTEsPGS5gz9IB4qs2OeUugq3qoSsmwTaWW2mjOQZKzwuA7Aq6nnfeNa0nw8fob9jFNRi2BiUKQkypaEjiQt2nzuSPT5XAyaAcFfVhcAxUanpjptXiwpsFvmIHjxNLNG7nifsVQCLjaq5Ppbpq4u%2BmgaEDfaPijonKcVbT4EpXRZiMuf3lmuwXF%2BsidUL543NbucGL21kbyPVaXiO8bhYSjNl7b%2BxalosZv4hUvZO0qnUyJam7xDDFx3udZLhJ%2B9vEItvnUtQoHh83DDuup0QeaMK%2Bhl78GOqUBnGpVNWoajZI2CRYkbbOOI%2Bnv1KaCHtDbCg8kUVaA5xJS7KombguyCM%2Fd%2F2l%2BWxk9tcxIAEFokX723f6Co7%2FRNameNWD1lLfd%2FME4B3a0HLKtGmYM6fB5pALqA7Pq9x0jxuzwoOjM%2Fm3y%2F%2BmAX27NPXZ76A5mAaZW75yaupXjCSVpxIXwxucRcTvolGB%2B5wDx0yDWQB1rUzWPjRmq9PTuELWCvFUL&X-Amz-Signature=4618923062cc095a50e9a18600025d8bbbe66e7bd1fdc7ca2c1cb7256a1c1487&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
