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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG476NPA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC7nfVQHIf3KLjAjJ7qhHDjT5aIE4qv2y1vn4fRwJk0wIhAPry%2BLbj5DlRG%2Bd4cEGHlcuq4kjYdi9BKL3GJzqm7pVYKv8DCCEQABoMNjM3NDIzMTgzODA1IgztF90w9NPasS8YHpIq3AN6fmh%2BZSovFBvqdDcd8cyprNWq1i%2F1tzrQaLgrwJcVMVe81xqj5voGIV2oA4Omh5VshNOgAcBtgIaxDwvVGT6ftLCyfgOQfQGmia9bqlgAX1KD2D9qhbicHrqlLKesKqEvEnySuIPuP2KWqnEsU6wjnjN%2FAONZ1wkVdiQSBXXTwBQdqcuheV7DQ5OudH2T5CyUjt7FGhyn1kQlooctOB3d2bXW1tlLlICXn3vI4RMI04bkRdXdOFzGMAKYv8Z8s%2FIXhBttk%2FSbW8HuLiEgA7CNtkhPMxml%2Bcqn3sWQKRVPZAT%2FdFdxekVVZ7XSdGKcFuA2l25BGy4kDY841JVmJiL9ZGylnYi9%2FOPaQStAxsHQlAF%2FwA0aNjWSjyYnM0iu0uGer7ik06CXrsUzUUre4otFjLix7nYkr147f%2FU1fMrhm37E6FwV2eE1qA4ywTXjlhPgckkU432KFiKQTFN%2FmYwrW9EDJCjdtDSuki9sE1mIUv6SxgAMXUJFLPpMENt5LPbs49EK%2FszqQWNwgOS722fyiRhREnoKntH1DAcIeES7ZNdbwSadZrGitBoq8iKWHwWNUlofy8SkPWJwfyJGQh%2FSRIY6d7WP3z4fdG0Rlp4wWzQ5y9cXAskNT51f%2BjCrqqvABjqkATn8K7CpIwxsXXsbCxYRsBnccZ50LYLW8L7eod29sFAbse9OgSJlp2SS1B%2Ft6hCWWofjTtdMWJw4s6xeMqiunuNcCZbDf2XRr%2BW%2BQx3YxdXMVGdysBh7u0f3jX%2FYtuw8%2FifxOAblSQB4GNn6oCshPlURvQotqZLZJU%2BaHqGbm1UfO9EIm0aJ3h38qMUIyt2IvZQ%2Fvw7UAwTy5CVW3oP3eDWkemL6&X-Amz-Signature=ee0121caf280c59fc65e49e19c1c24a155a095e611371fea601689ebd08d1df9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG476NPA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC7nfVQHIf3KLjAjJ7qhHDjT5aIE4qv2y1vn4fRwJk0wIhAPry%2BLbj5DlRG%2Bd4cEGHlcuq4kjYdi9BKL3GJzqm7pVYKv8DCCEQABoMNjM3NDIzMTgzODA1IgztF90w9NPasS8YHpIq3AN6fmh%2BZSovFBvqdDcd8cyprNWq1i%2F1tzrQaLgrwJcVMVe81xqj5voGIV2oA4Omh5VshNOgAcBtgIaxDwvVGT6ftLCyfgOQfQGmia9bqlgAX1KD2D9qhbicHrqlLKesKqEvEnySuIPuP2KWqnEsU6wjnjN%2FAONZ1wkVdiQSBXXTwBQdqcuheV7DQ5OudH2T5CyUjt7FGhyn1kQlooctOB3d2bXW1tlLlICXn3vI4RMI04bkRdXdOFzGMAKYv8Z8s%2FIXhBttk%2FSbW8HuLiEgA7CNtkhPMxml%2Bcqn3sWQKRVPZAT%2FdFdxekVVZ7XSdGKcFuA2l25BGy4kDY841JVmJiL9ZGylnYi9%2FOPaQStAxsHQlAF%2FwA0aNjWSjyYnM0iu0uGer7ik06CXrsUzUUre4otFjLix7nYkr147f%2FU1fMrhm37E6FwV2eE1qA4ywTXjlhPgckkU432KFiKQTFN%2FmYwrW9EDJCjdtDSuki9sE1mIUv6SxgAMXUJFLPpMENt5LPbs49EK%2FszqQWNwgOS722fyiRhREnoKntH1DAcIeES7ZNdbwSadZrGitBoq8iKWHwWNUlofy8SkPWJwfyJGQh%2FSRIY6d7WP3z4fdG0Rlp4wWzQ5y9cXAskNT51f%2BjCrqqvABjqkATn8K7CpIwxsXXsbCxYRsBnccZ50LYLW8L7eod29sFAbse9OgSJlp2SS1B%2Ft6hCWWofjTtdMWJw4s6xeMqiunuNcCZbDf2XRr%2BW%2BQx3YxdXMVGdysBh7u0f3jX%2FYtuw8%2FifxOAblSQB4GNn6oCshPlURvQotqZLZJU%2BaHqGbm1UfO9EIm0aJ3h38qMUIyt2IvZQ%2Fvw7UAwTy5CVW3oP3eDWkemL6&X-Amz-Signature=46a5c0925e8035a661af317f4e06e6fd90704ee8bfaa1f494424bb1417ec6614&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG476NPA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC7nfVQHIf3KLjAjJ7qhHDjT5aIE4qv2y1vn4fRwJk0wIhAPry%2BLbj5DlRG%2Bd4cEGHlcuq4kjYdi9BKL3GJzqm7pVYKv8DCCEQABoMNjM3NDIzMTgzODA1IgztF90w9NPasS8YHpIq3AN6fmh%2BZSovFBvqdDcd8cyprNWq1i%2F1tzrQaLgrwJcVMVe81xqj5voGIV2oA4Omh5VshNOgAcBtgIaxDwvVGT6ftLCyfgOQfQGmia9bqlgAX1KD2D9qhbicHrqlLKesKqEvEnySuIPuP2KWqnEsU6wjnjN%2FAONZ1wkVdiQSBXXTwBQdqcuheV7DQ5OudH2T5CyUjt7FGhyn1kQlooctOB3d2bXW1tlLlICXn3vI4RMI04bkRdXdOFzGMAKYv8Z8s%2FIXhBttk%2FSbW8HuLiEgA7CNtkhPMxml%2Bcqn3sWQKRVPZAT%2FdFdxekVVZ7XSdGKcFuA2l25BGy4kDY841JVmJiL9ZGylnYi9%2FOPaQStAxsHQlAF%2FwA0aNjWSjyYnM0iu0uGer7ik06CXrsUzUUre4otFjLix7nYkr147f%2FU1fMrhm37E6FwV2eE1qA4ywTXjlhPgckkU432KFiKQTFN%2FmYwrW9EDJCjdtDSuki9sE1mIUv6SxgAMXUJFLPpMENt5LPbs49EK%2FszqQWNwgOS722fyiRhREnoKntH1DAcIeES7ZNdbwSadZrGitBoq8iKWHwWNUlofy8SkPWJwfyJGQh%2FSRIY6d7WP3z4fdG0Rlp4wWzQ5y9cXAskNT51f%2BjCrqqvABjqkATn8K7CpIwxsXXsbCxYRsBnccZ50LYLW8L7eod29sFAbse9OgSJlp2SS1B%2Ft6hCWWofjTtdMWJw4s6xeMqiunuNcCZbDf2XRr%2BW%2BQx3YxdXMVGdysBh7u0f3jX%2FYtuw8%2FifxOAblSQB4GNn6oCshPlURvQotqZLZJU%2BaHqGbm1UfO9EIm0aJ3h38qMUIyt2IvZQ%2Fvw7UAwTy5CVW3oP3eDWkemL6&X-Amz-Signature=6b5ce135dd7632c0e5b081967b2e08cb4df0951f6405a3425a2fc1fe4c3125e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
