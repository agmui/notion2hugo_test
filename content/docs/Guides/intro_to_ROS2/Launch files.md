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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TSXFX3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4COlFLnkNlMWJYBobj%2BPbY2pTMVogVAGrJ78ZMXAwGQIhAPQRuBv2%2FLYhVg2KAi5CrcMKv2th3%2FBu3JtUPYoEyDYUKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqPgqLIB3ntKCy41Eq3AOufYn%2BC49TmxNoJi9pINWviffVc%2Bd%2FDDGn0f1XxuQgaSYpqDcLE0HT5IBSj54c1voAramDMqOfTqdFFsnoTo9WaPZmvq8IcDI8IsqogTl0o2bWjp4vgP8tnusHbTJvUGB9Q%2F4uF7lfpXinlzt2GWQTSzu%2BGlveDSdWLTwNwOu1TO8sfg5iSjjSHp%2BTzxlTRCqluIiamKtKwRCSeV5p8TxSdjldDfMAaGWuWbAmeGJFaNRVDdiSBufKPkM9vQUf%2FFtaw3wwC1YcHYQ9Xw7xXhh6s1F1xKNWiEQESsKEdL8pa7cPSDy20uFm9uz%2BZDnYdufrOkwLNPUUatJtsoeKXoi5wXHL4XXvRjNpkWh3kOG9Ua5OP9I9jzivO3U%2BL2PitWcQJrmoFM4l72sTv5UsUCr8zVuCVppAyWGusGar9%2BQAMDGHb8jmNYn3dIi%2FFKilGDj0%2Fb6iTBTl%2FGbQg66YlIkj4jsn8FXB5ZEti2jKoLa0v37s8r8BWWG24UzKtCjQ0zJh4ENT4HhP9IMUnR%2FQCqVe1gsjCQ9j%2FHpknMlIgJ9zITlpq5LErlf98b81huq5agcL%2B%2BLr%2Biaqbt5V1yOunxnnBGF4D7FXbg3PE%2FF4VZUtp86xUhfg6wBDpL%2Bs7DDe3tq9BjqkAf5%2F%2FiRU4vIqanjZNnAfDNmDZ7i9KywydhqGZFy946BL8%2F2wMYA5lFkQzxHyq5AqZ2i2EDVKRjvMXPGhNKZUZBqqBtwHCeHSPcP3g7EVBJZiK9%2B4F8ExId0HNpfmmwtw%2BiNchkRZ3lxnMZKESroRlC7vXfrcyoCkpZKaL%2B%2BbgyxYVqn7%2FWHZuYejqGQ6wlJ7L7ZzBa4DWV5vTHti7%2Bqal9iRBxNd&X-Amz-Signature=38539d8f9519515efe73d1882be4ebb2eca15b2ae358ed20b257d7e0b2b3fdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TSXFX3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4COlFLnkNlMWJYBobj%2BPbY2pTMVogVAGrJ78ZMXAwGQIhAPQRuBv2%2FLYhVg2KAi5CrcMKv2th3%2FBu3JtUPYoEyDYUKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqPgqLIB3ntKCy41Eq3AOufYn%2BC49TmxNoJi9pINWviffVc%2Bd%2FDDGn0f1XxuQgaSYpqDcLE0HT5IBSj54c1voAramDMqOfTqdFFsnoTo9WaPZmvq8IcDI8IsqogTl0o2bWjp4vgP8tnusHbTJvUGB9Q%2F4uF7lfpXinlzt2GWQTSzu%2BGlveDSdWLTwNwOu1TO8sfg5iSjjSHp%2BTzxlTRCqluIiamKtKwRCSeV5p8TxSdjldDfMAaGWuWbAmeGJFaNRVDdiSBufKPkM9vQUf%2FFtaw3wwC1YcHYQ9Xw7xXhh6s1F1xKNWiEQESsKEdL8pa7cPSDy20uFm9uz%2BZDnYdufrOkwLNPUUatJtsoeKXoi5wXHL4XXvRjNpkWh3kOG9Ua5OP9I9jzivO3U%2BL2PitWcQJrmoFM4l72sTv5UsUCr8zVuCVppAyWGusGar9%2BQAMDGHb8jmNYn3dIi%2FFKilGDj0%2Fb6iTBTl%2FGbQg66YlIkj4jsn8FXB5ZEti2jKoLa0v37s8r8BWWG24UzKtCjQ0zJh4ENT4HhP9IMUnR%2FQCqVe1gsjCQ9j%2FHpknMlIgJ9zITlpq5LErlf98b81huq5agcL%2B%2BLr%2Biaqbt5V1yOunxnnBGF4D7FXbg3PE%2FF4VZUtp86xUhfg6wBDpL%2Bs7DDe3tq9BjqkAf5%2F%2FiRU4vIqanjZNnAfDNmDZ7i9KywydhqGZFy946BL8%2F2wMYA5lFkQzxHyq5AqZ2i2EDVKRjvMXPGhNKZUZBqqBtwHCeHSPcP3g7EVBJZiK9%2B4F8ExId0HNpfmmwtw%2BiNchkRZ3lxnMZKESroRlC7vXfrcyoCkpZKaL%2B%2BbgyxYVqn7%2FWHZuYejqGQ6wlJ7L7ZzBa4DWV5vTHti7%2Bqal9iRBxNd&X-Amz-Signature=fe75e5b652d3d98f5de1da8928dfd9ca2066780db4201f46a9581ee3fde4c830&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TSXFX3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4COlFLnkNlMWJYBobj%2BPbY2pTMVogVAGrJ78ZMXAwGQIhAPQRuBv2%2FLYhVg2KAi5CrcMKv2th3%2FBu3JtUPYoEyDYUKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqPgqLIB3ntKCy41Eq3AOufYn%2BC49TmxNoJi9pINWviffVc%2Bd%2FDDGn0f1XxuQgaSYpqDcLE0HT5IBSj54c1voAramDMqOfTqdFFsnoTo9WaPZmvq8IcDI8IsqogTl0o2bWjp4vgP8tnusHbTJvUGB9Q%2F4uF7lfpXinlzt2GWQTSzu%2BGlveDSdWLTwNwOu1TO8sfg5iSjjSHp%2BTzxlTRCqluIiamKtKwRCSeV5p8TxSdjldDfMAaGWuWbAmeGJFaNRVDdiSBufKPkM9vQUf%2FFtaw3wwC1YcHYQ9Xw7xXhh6s1F1xKNWiEQESsKEdL8pa7cPSDy20uFm9uz%2BZDnYdufrOkwLNPUUatJtsoeKXoi5wXHL4XXvRjNpkWh3kOG9Ua5OP9I9jzivO3U%2BL2PitWcQJrmoFM4l72sTv5UsUCr8zVuCVppAyWGusGar9%2BQAMDGHb8jmNYn3dIi%2FFKilGDj0%2Fb6iTBTl%2FGbQg66YlIkj4jsn8FXB5ZEti2jKoLa0v37s8r8BWWG24UzKtCjQ0zJh4ENT4HhP9IMUnR%2FQCqVe1gsjCQ9j%2FHpknMlIgJ9zITlpq5LErlf98b81huq5agcL%2B%2BLr%2Biaqbt5V1yOunxnnBGF4D7FXbg3PE%2FF4VZUtp86xUhfg6wBDpL%2Bs7DDe3tq9BjqkAf5%2F%2FiRU4vIqanjZNnAfDNmDZ7i9KywydhqGZFy946BL8%2F2wMYA5lFkQzxHyq5AqZ2i2EDVKRjvMXPGhNKZUZBqqBtwHCeHSPcP3g7EVBJZiK9%2B4F8ExId0HNpfmmwtw%2BiNchkRZ3lxnMZKESroRlC7vXfrcyoCkpZKaL%2B%2BbgyxYVqn7%2FWHZuYejqGQ6wlJ7L7ZzBa4DWV5vTHti7%2Bqal9iRBxNd&X-Amz-Signature=2d78e8031ea9b80b58172dc4ba218c7847f9b5e583533f9e86c13e2784bbede8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
