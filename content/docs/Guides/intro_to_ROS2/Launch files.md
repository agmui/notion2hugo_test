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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF3T7K4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBcY2WR3ytf0oQOWy4Oay5vQ5ku8kcqZ%2Fh%2B9bOqmqTDvAiBVgYih%2F3JaTg9qX2pkCfg%2BTnYX9rcPgn9XM%2BJdQjDmfSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMM8bWC6kZia3yVP6CKtwDbAsgeogMYPt97UBdY5B3SEU2UwlVBQa2v2bnogcbDPdLgH4EbnKG44Afvg1842F9EQrq8KR6EThCwevuL9MvuWKxAtBU35%2FZXajIr7u%2F3lqRZQJgLVZPMKkn%2B1jyswHqNY8HVue%2FaDjN4VQ6qH926J6w9YvdVv8HQpidr0pL3bY3tk1Id13tJvlKwWyyMQEGePxEbFRGHYIyvsqBuSV%2Bb6%2FXwv6j0gdM7O%2BFEo3C%2Byx0oipcm9pdLn35xtufZjLUs7q4eAngt4FUtSg7Fyu%2BV%2FJGQF3sr7Xj8gq1GlUNFpSG1brl3qQ%2Flp5Qja%2Bgpa%2B5zjQbC3cu0hqUGWeAbpEu5r3XS3NUcRp9aY2kIYznZA%2FL%2BCJRsXWSlx5qCak8hiAwrROur9k8DN4srjnBLzXJYYL1mvYz%2FgsmkHjdbaMgX9d6lYmMoA0rI2AIfpBTnKpExS2Y0TIht7yrqeXQGxzbGVThecVuObj%2FbtWdEycGMPz6FEKL2bJl%2FT3%2FptgtFua9I9DLKPa5Wb3ncqrjC3NrYYE1C4pmktABYJfDCb1QWtMCGuRhD%2BXYeK219ypGRNl2mPMIPE5f8%2B%2F3PZyt5HCj9%2FuTvHFe9mpJW4CmQPHVby7Qk4a%2F23xpw8%2BVPAww6v3FvQY6pgF6NWjzesDJvXSz%2BCScor6b0Ac15lZG9C5k6mMHvnxhZqN3UL6VB3cfhNrmbittowLeSP9gR3WX14ORi%2F5TepKSQ4Tw7mh0pqiO6Pc7nuzAwVd4qJMaZeJ7PQxAItqRnQfNhmOnv3VuDxAAS%2BNhGpd%2BNbbC%2FxGmHaqXmC9g%2F6QUfd3%2B8rtox0IwmbXO7NzsKwJNUYkt30iKVjYBcQoT6nsj6TWkFaOy&X-Amz-Signature=c1f70ee6d582f6f0adb0ecd8997889bc70c4e88edf4eda18bac0459737a43b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF3T7K4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBcY2WR3ytf0oQOWy4Oay5vQ5ku8kcqZ%2Fh%2B9bOqmqTDvAiBVgYih%2F3JaTg9qX2pkCfg%2BTnYX9rcPgn9XM%2BJdQjDmfSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMM8bWC6kZia3yVP6CKtwDbAsgeogMYPt97UBdY5B3SEU2UwlVBQa2v2bnogcbDPdLgH4EbnKG44Afvg1842F9EQrq8KR6EThCwevuL9MvuWKxAtBU35%2FZXajIr7u%2F3lqRZQJgLVZPMKkn%2B1jyswHqNY8HVue%2FaDjN4VQ6qH926J6w9YvdVv8HQpidr0pL3bY3tk1Id13tJvlKwWyyMQEGePxEbFRGHYIyvsqBuSV%2Bb6%2FXwv6j0gdM7O%2BFEo3C%2Byx0oipcm9pdLn35xtufZjLUs7q4eAngt4FUtSg7Fyu%2BV%2FJGQF3sr7Xj8gq1GlUNFpSG1brl3qQ%2Flp5Qja%2Bgpa%2B5zjQbC3cu0hqUGWeAbpEu5r3XS3NUcRp9aY2kIYznZA%2FL%2BCJRsXWSlx5qCak8hiAwrROur9k8DN4srjnBLzXJYYL1mvYz%2FgsmkHjdbaMgX9d6lYmMoA0rI2AIfpBTnKpExS2Y0TIht7yrqeXQGxzbGVThecVuObj%2FbtWdEycGMPz6FEKL2bJl%2FT3%2FptgtFua9I9DLKPa5Wb3ncqrjC3NrYYE1C4pmktABYJfDCb1QWtMCGuRhD%2BXYeK219ypGRNl2mPMIPE5f8%2B%2F3PZyt5HCj9%2FuTvHFe9mpJW4CmQPHVby7Qk4a%2F23xpw8%2BVPAww6v3FvQY6pgF6NWjzesDJvXSz%2BCScor6b0Ac15lZG9C5k6mMHvnxhZqN3UL6VB3cfhNrmbittowLeSP9gR3WX14ORi%2F5TepKSQ4Tw7mh0pqiO6Pc7nuzAwVd4qJMaZeJ7PQxAItqRnQfNhmOnv3VuDxAAS%2BNhGpd%2BNbbC%2FxGmHaqXmC9g%2F6QUfd3%2B8rtox0IwmbXO7NzsKwJNUYkt30iKVjYBcQoT6nsj6TWkFaOy&X-Amz-Signature=9cda45b595a0e365c41d3a6529039754afdd4ec30d7c6de6fb0709baa8105746&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF3T7K4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBcY2WR3ytf0oQOWy4Oay5vQ5ku8kcqZ%2Fh%2B9bOqmqTDvAiBVgYih%2F3JaTg9qX2pkCfg%2BTnYX9rcPgn9XM%2BJdQjDmfSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMM8bWC6kZia3yVP6CKtwDbAsgeogMYPt97UBdY5B3SEU2UwlVBQa2v2bnogcbDPdLgH4EbnKG44Afvg1842F9EQrq8KR6EThCwevuL9MvuWKxAtBU35%2FZXajIr7u%2F3lqRZQJgLVZPMKkn%2B1jyswHqNY8HVue%2FaDjN4VQ6qH926J6w9YvdVv8HQpidr0pL3bY3tk1Id13tJvlKwWyyMQEGePxEbFRGHYIyvsqBuSV%2Bb6%2FXwv6j0gdM7O%2BFEo3C%2Byx0oipcm9pdLn35xtufZjLUs7q4eAngt4FUtSg7Fyu%2BV%2FJGQF3sr7Xj8gq1GlUNFpSG1brl3qQ%2Flp5Qja%2Bgpa%2B5zjQbC3cu0hqUGWeAbpEu5r3XS3NUcRp9aY2kIYznZA%2FL%2BCJRsXWSlx5qCak8hiAwrROur9k8DN4srjnBLzXJYYL1mvYz%2FgsmkHjdbaMgX9d6lYmMoA0rI2AIfpBTnKpExS2Y0TIht7yrqeXQGxzbGVThecVuObj%2FbtWdEycGMPz6FEKL2bJl%2FT3%2FptgtFua9I9DLKPa5Wb3ncqrjC3NrYYE1C4pmktABYJfDCb1QWtMCGuRhD%2BXYeK219ypGRNl2mPMIPE5f8%2B%2F3PZyt5HCj9%2FuTvHFe9mpJW4CmQPHVby7Qk4a%2F23xpw8%2BVPAww6v3FvQY6pgF6NWjzesDJvXSz%2BCScor6b0Ac15lZG9C5k6mMHvnxhZqN3UL6VB3cfhNrmbittowLeSP9gR3WX14ORi%2F5TepKSQ4Tw7mh0pqiO6Pc7nuzAwVd4qJMaZeJ7PQxAItqRnQfNhmOnv3VuDxAAS%2BNhGpd%2BNbbC%2FxGmHaqXmC9g%2F6QUfd3%2B8rtox0IwmbXO7NzsKwJNUYkt30iKVjYBcQoT6nsj6TWkFaOy&X-Amz-Signature=d0e67f01ed0c49a1bb6579ee74d38beb1f0663d9f238b101193840b9319f6fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
