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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUNQG5Q%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnLbcH01AFISkVul7Ttlt8hSxW%2FXDe4D5NjU8Qdax%2F7AiEA2J9bWMe2sBX1GvNY0ZFgJpNqZOyHgPq9VHMXwpepesEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI%2FSlXWz53oaJkyLwSrcAxMLYdDKqa7lTxva4R%2BvTjBJfLzS5epxIGaBc2hGwhakA1eATKyU7ZeTBGRlMq%2Ff9xmLzo1oPY6%2FJ34I9QdatXtz7r1B3xVFrwAEhSytDtYgrxrtp3nZ4wb8U6aIiesTrQpXy2AKHNd3k4ixJsmZ4pi%2BDVeyq48h%2BB4jTrQ5TO8oxg6VtW4VAL5Tw8iRMmFpCjTzxAhWdNi%2FUZhhcpnwHMVnVKTbQloyNT%2F19A55I9bhkTq%2F05o6KLbIZcQW3xrextnCkew6MbAI7%2FpEKWeCoEw4uj9snjFzMMR1OwKjNUFqVVZ2uKWaoAmM9zcr4BEguQRl8BoeaoMIeVdFtdF%2FKZYIWwlpvMMuPj5OboFKJKgIcUO60HjZpNX9YfZmrfWtC%2BJmWrhWMdeNtKbI23bdACQb%2Fo1LXwQ%2Br73cO0EsDZjcN803sHAM%2BGVy9A6pwCM%2Facvk%2BLUVjMfCldXW75l5QvN9a%2Fb9OlQNWHgFadLwPIQmhvW5%2FftsTapI3G3fv9IHa6Ols849bW5syFqyilCG3sKjkN27YnMXWFy4rFfkpLI5Hbp%2BUb%2BD6OKuIxWv3QOJyjdWeqK84ls1NRO0tm03NZ3i7wCTF7X7xnd3lHTPG%2BEjEsbjk8ht0qZgecxSML71iMAGOqUBPrf%2BeSQTCwdnDMBQd5hYpHk%2FfmYeT9758DP44udvXxYt%2F09Ao4gbtB6EqctHMZikE3kZiowAqPrGOYSZfeTTrGM5%2BA6xtzVbZf34UkqM2%2BCUrou5NVF%2Bp89elp7d5m15fZo5JK639V4j%2FYvleeGKl0nsXWDrFVLbg%2FgimxBCSgSk97Xa0iEaoCG3ql6d9mHvnT4s6xBnvYy3OF0RR7IgwE5FhWXY&X-Amz-Signature=c1c7ee36b274a63f600bdb355b3ff59003a089d016a6e23b482ae86f3c58744d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUNQG5Q%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnLbcH01AFISkVul7Ttlt8hSxW%2FXDe4D5NjU8Qdax%2F7AiEA2J9bWMe2sBX1GvNY0ZFgJpNqZOyHgPq9VHMXwpepesEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI%2FSlXWz53oaJkyLwSrcAxMLYdDKqa7lTxva4R%2BvTjBJfLzS5epxIGaBc2hGwhakA1eATKyU7ZeTBGRlMq%2Ff9xmLzo1oPY6%2FJ34I9QdatXtz7r1B3xVFrwAEhSytDtYgrxrtp3nZ4wb8U6aIiesTrQpXy2AKHNd3k4ixJsmZ4pi%2BDVeyq48h%2BB4jTrQ5TO8oxg6VtW4VAL5Tw8iRMmFpCjTzxAhWdNi%2FUZhhcpnwHMVnVKTbQloyNT%2F19A55I9bhkTq%2F05o6KLbIZcQW3xrextnCkew6MbAI7%2FpEKWeCoEw4uj9snjFzMMR1OwKjNUFqVVZ2uKWaoAmM9zcr4BEguQRl8BoeaoMIeVdFtdF%2FKZYIWwlpvMMuPj5OboFKJKgIcUO60HjZpNX9YfZmrfWtC%2BJmWrhWMdeNtKbI23bdACQb%2Fo1LXwQ%2Br73cO0EsDZjcN803sHAM%2BGVy9A6pwCM%2Facvk%2BLUVjMfCldXW75l5QvN9a%2Fb9OlQNWHgFadLwPIQmhvW5%2FftsTapI3G3fv9IHa6Ols849bW5syFqyilCG3sKjkN27YnMXWFy4rFfkpLI5Hbp%2BUb%2BD6OKuIxWv3QOJyjdWeqK84ls1NRO0tm03NZ3i7wCTF7X7xnd3lHTPG%2BEjEsbjk8ht0qZgecxSML71iMAGOqUBPrf%2BeSQTCwdnDMBQd5hYpHk%2FfmYeT9758DP44udvXxYt%2F09Ao4gbtB6EqctHMZikE3kZiowAqPrGOYSZfeTTrGM5%2BA6xtzVbZf34UkqM2%2BCUrou5NVF%2Bp89elp7d5m15fZo5JK639V4j%2FYvleeGKl0nsXWDrFVLbg%2FgimxBCSgSk97Xa0iEaoCG3ql6d9mHvnT4s6xBnvYy3OF0RR7IgwE5FhWXY&X-Amz-Signature=950a513fb49d54dc6f0ec0ef6faa30b550407d708a96bfa9ba9fa5347c30a163&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUNQG5Q%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnLbcH01AFISkVul7Ttlt8hSxW%2FXDe4D5NjU8Qdax%2F7AiEA2J9bWMe2sBX1GvNY0ZFgJpNqZOyHgPq9VHMXwpepesEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI%2FSlXWz53oaJkyLwSrcAxMLYdDKqa7lTxva4R%2BvTjBJfLzS5epxIGaBc2hGwhakA1eATKyU7ZeTBGRlMq%2Ff9xmLzo1oPY6%2FJ34I9QdatXtz7r1B3xVFrwAEhSytDtYgrxrtp3nZ4wb8U6aIiesTrQpXy2AKHNd3k4ixJsmZ4pi%2BDVeyq48h%2BB4jTrQ5TO8oxg6VtW4VAL5Tw8iRMmFpCjTzxAhWdNi%2FUZhhcpnwHMVnVKTbQloyNT%2F19A55I9bhkTq%2F05o6KLbIZcQW3xrextnCkew6MbAI7%2FpEKWeCoEw4uj9snjFzMMR1OwKjNUFqVVZ2uKWaoAmM9zcr4BEguQRl8BoeaoMIeVdFtdF%2FKZYIWwlpvMMuPj5OboFKJKgIcUO60HjZpNX9YfZmrfWtC%2BJmWrhWMdeNtKbI23bdACQb%2Fo1LXwQ%2Br73cO0EsDZjcN803sHAM%2BGVy9A6pwCM%2Facvk%2BLUVjMfCldXW75l5QvN9a%2Fb9OlQNWHgFadLwPIQmhvW5%2FftsTapI3G3fv9IHa6Ols849bW5syFqyilCG3sKjkN27YnMXWFy4rFfkpLI5Hbp%2BUb%2BD6OKuIxWv3QOJyjdWeqK84ls1NRO0tm03NZ3i7wCTF7X7xnd3lHTPG%2BEjEsbjk8ht0qZgecxSML71iMAGOqUBPrf%2BeSQTCwdnDMBQd5hYpHk%2FfmYeT9758DP44udvXxYt%2F09Ao4gbtB6EqctHMZikE3kZiowAqPrGOYSZfeTTrGM5%2BA6xtzVbZf34UkqM2%2BCUrou5NVF%2Bp89elp7d5m15fZo5JK639V4j%2FYvleeGKl0nsXWDrFVLbg%2FgimxBCSgSk97Xa0iEaoCG3ql6d9mHvnT4s6xBnvYy3OF0RR7IgwE5FhWXY&X-Amz-Signature=69d6f98a4052ca72ede0e1e68110f05f88d31991f1fc7e95f7441177aea190b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
