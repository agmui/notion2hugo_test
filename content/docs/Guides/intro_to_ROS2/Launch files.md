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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T33L7YK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdzYceibauKSEBhCwOjvONV8pq3W38NJ59fGWP2LfhAiEAlw3GTe08%2F5VQOvTa990iIrD64p98%2Bnz%2BgVFHGHI2pQMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPpm86Kj8odYQSLNxircA0cZZvsWMDlZiW1BjAIjo8RuQ2JI78BqYhntDMt4Orl76qorwG9dDKtYRX9LIH%2B2%2Fk0tZ7rcvElRGs04de2I2s8XK11Hgi8RSb30unrsWTB%2FZ0c%2BTq9Wyn07CdRRzGvUQw3lvq16JCjcdCDmUGq4o%2Bva5zY9%2B5%2FagV8Qj%2Faq7oievG4s7FK4MlDYhWHipnjT28fwk1pT6cnetzXGBW1lWAcfusLdBg5a40uYFGlwtT6A%2BfFvTfi2e%2FOXsVMyTM74T7uuKNstyHGPuwGSf9GQXkrchENS%2FE9nAsjqw4QtfD2QyD4ni6qsPFKQXy8o0DuBou8viBEGFu%2FiQPBLe%2BlgBff2XvEFfwT0itkEZy3c%2Fm%2B%2Bgc79UreEuhWik1i08DEjynR61t11q0QGekM%2FajIYGpNgBUA5hwWtX8pJ1naodOdLXtwsjDdbr62B0khfXssuB%2BkK273p9b6rI6N4Ji9JWaL0AZkXRxUv7PkPZ2JJmnbq9MHVUKVAMAa2rCfWf66FkolJJRVnoom6zzaBwP7AsqQscH0OYh9%2BMsmxwqs3DNN%2BJXFfiETOPf2qpD5RckpGt1gGFSSCqO1zfj0kEQ7nGSmnN0si10q%2Bz7lgmVM%2BYoNRl6DSLWja%2BiFoaQgKMJL98r0GOqUBvfP3qulTIfOCnBwqdA9HDTfRvIieRQon7OQfRZxPzNgIhrmyVMQp%2BqBWoG7SFgUcW%2BYwMojl99MZW0tL%2FbG12G%2Bfc1OQ2qT%2ForH1BQ4d0J8L2YndeFlCW9X9jp2l36coH6LHcfS6eWiktrvfA04OkxXWdOfiJ9TaMoZLyidweKFHbugGlqHW2%2F7fmdX4BYzpbaIY2kiByBNf7hF5RidymrkmYZ%2FU&X-Amz-Signature=6c524ec55da189fb842077a130e0911c4abd4ec2cf2619378aa02baa6a764f45&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T33L7YK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdzYceibauKSEBhCwOjvONV8pq3W38NJ59fGWP2LfhAiEAlw3GTe08%2F5VQOvTa990iIrD64p98%2Bnz%2BgVFHGHI2pQMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPpm86Kj8odYQSLNxircA0cZZvsWMDlZiW1BjAIjo8RuQ2JI78BqYhntDMt4Orl76qorwG9dDKtYRX9LIH%2B2%2Fk0tZ7rcvElRGs04de2I2s8XK11Hgi8RSb30unrsWTB%2FZ0c%2BTq9Wyn07CdRRzGvUQw3lvq16JCjcdCDmUGq4o%2Bva5zY9%2B5%2FagV8Qj%2Faq7oievG4s7FK4MlDYhWHipnjT28fwk1pT6cnetzXGBW1lWAcfusLdBg5a40uYFGlwtT6A%2BfFvTfi2e%2FOXsVMyTM74T7uuKNstyHGPuwGSf9GQXkrchENS%2FE9nAsjqw4QtfD2QyD4ni6qsPFKQXy8o0DuBou8viBEGFu%2FiQPBLe%2BlgBff2XvEFfwT0itkEZy3c%2Fm%2B%2Bgc79UreEuhWik1i08DEjynR61t11q0QGekM%2FajIYGpNgBUA5hwWtX8pJ1naodOdLXtwsjDdbr62B0khfXssuB%2BkK273p9b6rI6N4Ji9JWaL0AZkXRxUv7PkPZ2JJmnbq9MHVUKVAMAa2rCfWf66FkolJJRVnoom6zzaBwP7AsqQscH0OYh9%2BMsmxwqs3DNN%2BJXFfiETOPf2qpD5RckpGt1gGFSSCqO1zfj0kEQ7nGSmnN0si10q%2Bz7lgmVM%2BYoNRl6DSLWja%2BiFoaQgKMJL98r0GOqUBvfP3qulTIfOCnBwqdA9HDTfRvIieRQon7OQfRZxPzNgIhrmyVMQp%2BqBWoG7SFgUcW%2BYwMojl99MZW0tL%2FbG12G%2Bfc1OQ2qT%2ForH1BQ4d0J8L2YndeFlCW9X9jp2l36coH6LHcfS6eWiktrvfA04OkxXWdOfiJ9TaMoZLyidweKFHbugGlqHW2%2F7fmdX4BYzpbaIY2kiByBNf7hF5RidymrkmYZ%2FU&X-Amz-Signature=a7a052f454727d6677d671a8d4d8d0936b780cc014ca02a436a7c3caa914aa21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T33L7YK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdzYceibauKSEBhCwOjvONV8pq3W38NJ59fGWP2LfhAiEAlw3GTe08%2F5VQOvTa990iIrD64p98%2Bnz%2BgVFHGHI2pQMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPpm86Kj8odYQSLNxircA0cZZvsWMDlZiW1BjAIjo8RuQ2JI78BqYhntDMt4Orl76qorwG9dDKtYRX9LIH%2B2%2Fk0tZ7rcvElRGs04de2I2s8XK11Hgi8RSb30unrsWTB%2FZ0c%2BTq9Wyn07CdRRzGvUQw3lvq16JCjcdCDmUGq4o%2Bva5zY9%2B5%2FagV8Qj%2Faq7oievG4s7FK4MlDYhWHipnjT28fwk1pT6cnetzXGBW1lWAcfusLdBg5a40uYFGlwtT6A%2BfFvTfi2e%2FOXsVMyTM74T7uuKNstyHGPuwGSf9GQXkrchENS%2FE9nAsjqw4QtfD2QyD4ni6qsPFKQXy8o0DuBou8viBEGFu%2FiQPBLe%2BlgBff2XvEFfwT0itkEZy3c%2Fm%2B%2Bgc79UreEuhWik1i08DEjynR61t11q0QGekM%2FajIYGpNgBUA5hwWtX8pJ1naodOdLXtwsjDdbr62B0khfXssuB%2BkK273p9b6rI6N4Ji9JWaL0AZkXRxUv7PkPZ2JJmnbq9MHVUKVAMAa2rCfWf66FkolJJRVnoom6zzaBwP7AsqQscH0OYh9%2BMsmxwqs3DNN%2BJXFfiETOPf2qpD5RckpGt1gGFSSCqO1zfj0kEQ7nGSmnN0si10q%2Bz7lgmVM%2BYoNRl6DSLWja%2BiFoaQgKMJL98r0GOqUBvfP3qulTIfOCnBwqdA9HDTfRvIieRQon7OQfRZxPzNgIhrmyVMQp%2BqBWoG7SFgUcW%2BYwMojl99MZW0tL%2FbG12G%2Bfc1OQ2qT%2ForH1BQ4d0J8L2YndeFlCW9X9jp2l36coH6LHcfS6eWiktrvfA04OkxXWdOfiJ9TaMoZLyidweKFHbugGlqHW2%2F7fmdX4BYzpbaIY2kiByBNf7hF5RidymrkmYZ%2FU&X-Amz-Signature=75fc20764e2344b3307566ae6cc3b2b334ab812475807dd4fa4ed767f72a3edc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
