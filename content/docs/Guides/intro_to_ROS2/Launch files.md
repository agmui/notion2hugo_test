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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCMVJMU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD2yPHHACzEEvKSIrj%2Fi63qWAJVQuVKTdVvtAo7qOI%2FpwIhAPUE5DplSVYw%2BuM6cVWm9i5JmM%2BFM7T6vXARR8HCcL6LKv8DCBsQABoMNjM3NDIzMTgzODA1IgzhcXDItziOeFF7jrEq3ANhi53c0KZOFv4Towhse%2FMc350DPhxFbjWlG47j1o06ZzRYjE9ATfUMqraTLwSbG31acmEMsnzq25dmmNklFvFCKNbdSM1jyxxHgWhWpbwTGIdjos4F47B9yXL%2FkkUV1VAPpO%2BHRyVK%2F4slixfUYRQRCqXWE3AsKL36OVSbV%2BS%2BSgYr%2BGeqCKczTiZzgwcCkgUi0pKZ0DaV4NsQwYB66L9uapicjhc6us99g2ASkpzgAtlYTPeHHRUqfEhF6jB%2F5eto7iZ7F3jvd7bshKwTrLWkSU6Ju6XDLmk0bNpVKAlb%2B60QP7g3up04WU3zjNXtQDwWaDtulrQQJsY5d%2Bzuzekf%2BygJYAAsDjgHnJMvSqTgPiixhlOyYEw6moa4YYG1S9Wc76B64X%2BY%2BjWsDq%2FubtVrCtfbHtjavr4zFUpNiSL0yaS95cbod%2Bw52EbEvMVff5mWSTO%2BZIw1Zc%2BfUdkWkrGbfm9QD7pR3t2VHuP9gOkINc%2F8iyT5vrholf6bOljBZOQEhF14ZHGi22m79pvuisdk7qX8DCmKSM4qoUNlKqBRmWPQgCJRL3NwhKZx0s1BZWqmYXJPIib%2F28GKCER%2BpiDubYB2lmckp1cDmAWJsB%2FZpxJFgCLHOOjwVEJ8djDH0rHCBjqkAXuIkxePWfMvAKVJolbKMAraHuZpyDd15Ow8S7qUbIY%2B%2BtAHuxBouhEihNk3rnDkZAPJDYlxu8M0QH5nu4uCFha4p%2BQyWl%2BjFrLtpShiETMYm2gW1ZchlVZyHMrVmpHBSbS%2B46XG6Gu2OQpAif9odWTNS0prJtIOTZ0YUUrFnLRw0EpcRuYp1HeKdYOjPp7I%2FEhRFQy7D5bSlzoyiCkH1imU5hZ4&X-Amz-Signature=fdab66b9b1a58a46660ce82bd368788572ae2fd2012551d7c07aaff64efd39f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCMVJMU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD2yPHHACzEEvKSIrj%2Fi63qWAJVQuVKTdVvtAo7qOI%2FpwIhAPUE5DplSVYw%2BuM6cVWm9i5JmM%2BFM7T6vXARR8HCcL6LKv8DCBsQABoMNjM3NDIzMTgzODA1IgzhcXDItziOeFF7jrEq3ANhi53c0KZOFv4Towhse%2FMc350DPhxFbjWlG47j1o06ZzRYjE9ATfUMqraTLwSbG31acmEMsnzq25dmmNklFvFCKNbdSM1jyxxHgWhWpbwTGIdjos4F47B9yXL%2FkkUV1VAPpO%2BHRyVK%2F4slixfUYRQRCqXWE3AsKL36OVSbV%2BS%2BSgYr%2BGeqCKczTiZzgwcCkgUi0pKZ0DaV4NsQwYB66L9uapicjhc6us99g2ASkpzgAtlYTPeHHRUqfEhF6jB%2F5eto7iZ7F3jvd7bshKwTrLWkSU6Ju6XDLmk0bNpVKAlb%2B60QP7g3up04WU3zjNXtQDwWaDtulrQQJsY5d%2Bzuzekf%2BygJYAAsDjgHnJMvSqTgPiixhlOyYEw6moa4YYG1S9Wc76B64X%2BY%2BjWsDq%2FubtVrCtfbHtjavr4zFUpNiSL0yaS95cbod%2Bw52EbEvMVff5mWSTO%2BZIw1Zc%2BfUdkWkrGbfm9QD7pR3t2VHuP9gOkINc%2F8iyT5vrholf6bOljBZOQEhF14ZHGi22m79pvuisdk7qX8DCmKSM4qoUNlKqBRmWPQgCJRL3NwhKZx0s1BZWqmYXJPIib%2F28GKCER%2BpiDubYB2lmckp1cDmAWJsB%2FZpxJFgCLHOOjwVEJ8djDH0rHCBjqkAXuIkxePWfMvAKVJolbKMAraHuZpyDd15Ow8S7qUbIY%2B%2BtAHuxBouhEihNk3rnDkZAPJDYlxu8M0QH5nu4uCFha4p%2BQyWl%2BjFrLtpShiETMYm2gW1ZchlVZyHMrVmpHBSbS%2B46XG6Gu2OQpAif9odWTNS0prJtIOTZ0YUUrFnLRw0EpcRuYp1HeKdYOjPp7I%2FEhRFQy7D5bSlzoyiCkH1imU5hZ4&X-Amz-Signature=96d28c73072e85ec4ca78bc7de254e57254b83cea25837df650f44a31509e961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCMVJMU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD2yPHHACzEEvKSIrj%2Fi63qWAJVQuVKTdVvtAo7qOI%2FpwIhAPUE5DplSVYw%2BuM6cVWm9i5JmM%2BFM7T6vXARR8HCcL6LKv8DCBsQABoMNjM3NDIzMTgzODA1IgzhcXDItziOeFF7jrEq3ANhi53c0KZOFv4Towhse%2FMc350DPhxFbjWlG47j1o06ZzRYjE9ATfUMqraTLwSbG31acmEMsnzq25dmmNklFvFCKNbdSM1jyxxHgWhWpbwTGIdjos4F47B9yXL%2FkkUV1VAPpO%2BHRyVK%2F4slixfUYRQRCqXWE3AsKL36OVSbV%2BS%2BSgYr%2BGeqCKczTiZzgwcCkgUi0pKZ0DaV4NsQwYB66L9uapicjhc6us99g2ASkpzgAtlYTPeHHRUqfEhF6jB%2F5eto7iZ7F3jvd7bshKwTrLWkSU6Ju6XDLmk0bNpVKAlb%2B60QP7g3up04WU3zjNXtQDwWaDtulrQQJsY5d%2Bzuzekf%2BygJYAAsDjgHnJMvSqTgPiixhlOyYEw6moa4YYG1S9Wc76B64X%2BY%2BjWsDq%2FubtVrCtfbHtjavr4zFUpNiSL0yaS95cbod%2Bw52EbEvMVff5mWSTO%2BZIw1Zc%2BfUdkWkrGbfm9QD7pR3t2VHuP9gOkINc%2F8iyT5vrholf6bOljBZOQEhF14ZHGi22m79pvuisdk7qX8DCmKSM4qoUNlKqBRmWPQgCJRL3NwhKZx0s1BZWqmYXJPIib%2F28GKCER%2BpiDubYB2lmckp1cDmAWJsB%2FZpxJFgCLHOOjwVEJ8djDH0rHCBjqkAXuIkxePWfMvAKVJolbKMAraHuZpyDd15Ow8S7qUbIY%2B%2BtAHuxBouhEihNk3rnDkZAPJDYlxu8M0QH5nu4uCFha4p%2BQyWl%2BjFrLtpShiETMYm2gW1ZchlVZyHMrVmpHBSbS%2B46XG6Gu2OQpAif9odWTNS0prJtIOTZ0YUUrFnLRw0EpcRuYp1HeKdYOjPp7I%2FEhRFQy7D5bSlzoyiCkH1imU5hZ4&X-Amz-Signature=65c7deffc406de6bc0ec27e75ade976a32c839c371e6814152707d920440c141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
