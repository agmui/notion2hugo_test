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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745DDQHW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyOdxL7fZNo4405Fr%2Bomk5TU1w9GEjU8EEmxvcCTRWTAiALuavYgl7SPa89Krvl2rvigmHWoolhH%2BRYl7Tzgmxd7ir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMOPSQl3BGC%2BPTRLCfKtwDur9Yk%2F9ns%2BPlC56wivVlBAEihyXPpvcBeiMRQDUD64rau9zZXjVslcPaacXb85%2FDWKJHgY0PwWVO7pLbRKUnrjpDh8v%2BKcaWwVpqpEZWmt31d1XSvPjebKSqI1%2FUVkRNmWupEwtCT8gIyRPZcyyF6xEVpGnzOoRcOJKeG2wv0lFVWBW6%2FxnHY7X1DxGPolvUC05gmKO%2B9u13xSVNg8MHDcFc%2B9jROHnWP4jZWUaI4XpraGO7BUrfw%2BLe15YGyTQQw%2FF6gYskYSFDRCRhEIHWNxpjUZ7zj8Zfq10voavjXXZ5KqEdyHTFvKLZjtNoA%2B434PPEoidzB1R4mKzU4dte2GFT8UERaKXOyL9r0jvOQkekDoWAsBCqVtqkqbY2RG6Sa0JFvwas48kKqmLLbFh7zgDpaiBm9zYTeDma7QBRxM9k8hdmuObdgr7H%2FR1ztmafWVS%2FU%2FGRp1quUWZHFL3qAoc2%2BRS6iy6OmJF76xpMZfwqc0JsqHlT4Xi%2B2DLg5zJBnUEK7e6Q2MPdroa8T%2FBeIOYRCxHdQUhAmElTu265CD60i8ABciQRfiKTOnla2vv5uEDwJWfFQB2Wf4f1dHnvfF8qCes4kttumZNUPjvvRVhbB60JxYIMquTrsVgw5qvTwQY6pgEdTqKJ3hwNiHxKvSZ69j%2F%2Fr17NUkhM4irzOlcSvdKLkxPZeA4U3aN6LPyuP4z2CVcktCIL67wXwi7Briu5ZA8TZJI4gY5PfNW2lppGESaNbjjgwgQhEeIhxi8g8cQGXdr95lAJ7tvo%2BYQXfku8G6iVQW4T4Q6%2BbQHQchJsFuO7xN9o26bS6HKGZL%2BqzqhFK%2FL9nU9zhNUqz%2BAl%2FleW%2B0y4AyOeI20h&X-Amz-Signature=95c5b003cd07f3c3f6bede8df08d71bcea624262765182ee1996b2b9e340b882&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745DDQHW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyOdxL7fZNo4405Fr%2Bomk5TU1w9GEjU8EEmxvcCTRWTAiALuavYgl7SPa89Krvl2rvigmHWoolhH%2BRYl7Tzgmxd7ir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMOPSQl3BGC%2BPTRLCfKtwDur9Yk%2F9ns%2BPlC56wivVlBAEihyXPpvcBeiMRQDUD64rau9zZXjVslcPaacXb85%2FDWKJHgY0PwWVO7pLbRKUnrjpDh8v%2BKcaWwVpqpEZWmt31d1XSvPjebKSqI1%2FUVkRNmWupEwtCT8gIyRPZcyyF6xEVpGnzOoRcOJKeG2wv0lFVWBW6%2FxnHY7X1DxGPolvUC05gmKO%2B9u13xSVNg8MHDcFc%2B9jROHnWP4jZWUaI4XpraGO7BUrfw%2BLe15YGyTQQw%2FF6gYskYSFDRCRhEIHWNxpjUZ7zj8Zfq10voavjXXZ5KqEdyHTFvKLZjtNoA%2B434PPEoidzB1R4mKzU4dte2GFT8UERaKXOyL9r0jvOQkekDoWAsBCqVtqkqbY2RG6Sa0JFvwas48kKqmLLbFh7zgDpaiBm9zYTeDma7QBRxM9k8hdmuObdgr7H%2FR1ztmafWVS%2FU%2FGRp1quUWZHFL3qAoc2%2BRS6iy6OmJF76xpMZfwqc0JsqHlT4Xi%2B2DLg5zJBnUEK7e6Q2MPdroa8T%2FBeIOYRCxHdQUhAmElTu265CD60i8ABciQRfiKTOnla2vv5uEDwJWfFQB2Wf4f1dHnvfF8qCes4kttumZNUPjvvRVhbB60JxYIMquTrsVgw5qvTwQY6pgEdTqKJ3hwNiHxKvSZ69j%2F%2Fr17NUkhM4irzOlcSvdKLkxPZeA4U3aN6LPyuP4z2CVcktCIL67wXwi7Briu5ZA8TZJI4gY5PfNW2lppGESaNbjjgwgQhEeIhxi8g8cQGXdr95lAJ7tvo%2BYQXfku8G6iVQW4T4Q6%2BbQHQchJsFuO7xN9o26bS6HKGZL%2BqzqhFK%2FL9nU9zhNUqz%2BAl%2FleW%2B0y4AyOeI20h&X-Amz-Signature=eb052e679bbe9407ebbaafe15f399509b627a75ee07ea63d45787ed625587598&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745DDQHW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyOdxL7fZNo4405Fr%2Bomk5TU1w9GEjU8EEmxvcCTRWTAiALuavYgl7SPa89Krvl2rvigmHWoolhH%2BRYl7Tzgmxd7ir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMOPSQl3BGC%2BPTRLCfKtwDur9Yk%2F9ns%2BPlC56wivVlBAEihyXPpvcBeiMRQDUD64rau9zZXjVslcPaacXb85%2FDWKJHgY0PwWVO7pLbRKUnrjpDh8v%2BKcaWwVpqpEZWmt31d1XSvPjebKSqI1%2FUVkRNmWupEwtCT8gIyRPZcyyF6xEVpGnzOoRcOJKeG2wv0lFVWBW6%2FxnHY7X1DxGPolvUC05gmKO%2B9u13xSVNg8MHDcFc%2B9jROHnWP4jZWUaI4XpraGO7BUrfw%2BLe15YGyTQQw%2FF6gYskYSFDRCRhEIHWNxpjUZ7zj8Zfq10voavjXXZ5KqEdyHTFvKLZjtNoA%2B434PPEoidzB1R4mKzU4dte2GFT8UERaKXOyL9r0jvOQkekDoWAsBCqVtqkqbY2RG6Sa0JFvwas48kKqmLLbFh7zgDpaiBm9zYTeDma7QBRxM9k8hdmuObdgr7H%2FR1ztmafWVS%2FU%2FGRp1quUWZHFL3qAoc2%2BRS6iy6OmJF76xpMZfwqc0JsqHlT4Xi%2B2DLg5zJBnUEK7e6Q2MPdroa8T%2FBeIOYRCxHdQUhAmElTu265CD60i8ABciQRfiKTOnla2vv5uEDwJWfFQB2Wf4f1dHnvfF8qCes4kttumZNUPjvvRVhbB60JxYIMquTrsVgw5qvTwQY6pgEdTqKJ3hwNiHxKvSZ69j%2F%2Fr17NUkhM4irzOlcSvdKLkxPZeA4U3aN6LPyuP4z2CVcktCIL67wXwi7Briu5ZA8TZJI4gY5PfNW2lppGESaNbjjgwgQhEeIhxi8g8cQGXdr95lAJ7tvo%2BYQXfku8G6iVQW4T4Q6%2BbQHQchJsFuO7xN9o26bS6HKGZL%2BqzqhFK%2FL9nU9zhNUqz%2BAl%2FleW%2B0y4AyOeI20h&X-Amz-Signature=c9885dc47270b47ea23059fd1fce41632e7308068f7fd6f83848710da6776ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
