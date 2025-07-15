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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXYPV2Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIByAEZrX%2FuLfmMy4sw%2BB3zOn0QjhZmVt7v4qiTwScZjrAiEA7aFgYrtfU2BfuzvpSxZzLRt7NakAHuz3GIqkR0EGZvcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEmu26UJPu1s7G1rIyrcAxntzHMcx6r5bGm%2FQGaPlKILw2qrGlJnDvsKezy3Zj58tm5xF3LSXCTPmruFuCvoXpH1xqSaOQdph3uLAnwWNMW7Dq2IpA3tfzdchZLP9cYuroifFxjrgCiDsg5qUUQi4pgy%2F%2BcGB6tw7YfeC4GlU0W0913l6p3%2BWZ3ktbw7ewH23II5uhx83d1pzPKKpUb5z0Nuen64wMf8CxQSsHa5IoATGVxTDYW2LEDGhfDFWuQAE1Jgh0k%2B8De3cle6i9jxcpK6SF447yH%2FQ0qLKC5E0LvuTvBPWBKKqU2zNJGRoqaRaCc2Aws6d2miSDkjGESaW0Mtb8lVCutTcDpCY0fzOt00nB4l3i6Zu7VvsrwEpW%2Fw10qhnqzORwHhaiZ029vEIHJUTpQRU2tVANtNCc2XUhWJsdIhVyZeL6stjln9j%2FpvC0u1IS9qKCzjDwC4FjUKZpzqyU86Udx8jVwSljizPsFiIM2b8JEi7vrwtQe%2BNKvcrjnH%2BfEgy3XBlovdEVI0pjn62ChJnsY%2Fcc8A6EXK9RpJp4F%2FqWC%2FrX1edwuoezFBdyIpGZuQOmRddZrX05h4rVK842fs9U%2BbLVCAa0kZcRidnXjxxXOyAP5V3FSf%2B5CILRujtP2RU%2B9%2F4z8nMNf91sMGOqUBdK5eQTFDkfijxdAM3buqpYHUd7shqLABr78laj9EaNbYmiBjBcvjaX1CTnznxPkK3a1uBf7nVe1uPdu7NITM%2BcgFqthkESg0DkE8B%2B2WTzNj%2FjIVekUPiiBFLKAQJ89rvMkXYbN%2BXp3My0Q1pCFulP8ANw60Xzw4DSlx%2F5JOr8qy4J4%2By%2BEjBkzNtKq%2F66p5wTS8boCUPvXRXFqg%2FYuaDi%2FEHJM6&X-Amz-Signature=588bf67a65b5127a8df338b6bab925892fe752394411c4ef8d567b5236b8b014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXYPV2Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIByAEZrX%2FuLfmMy4sw%2BB3zOn0QjhZmVt7v4qiTwScZjrAiEA7aFgYrtfU2BfuzvpSxZzLRt7NakAHuz3GIqkR0EGZvcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEmu26UJPu1s7G1rIyrcAxntzHMcx6r5bGm%2FQGaPlKILw2qrGlJnDvsKezy3Zj58tm5xF3LSXCTPmruFuCvoXpH1xqSaOQdph3uLAnwWNMW7Dq2IpA3tfzdchZLP9cYuroifFxjrgCiDsg5qUUQi4pgy%2F%2BcGB6tw7YfeC4GlU0W0913l6p3%2BWZ3ktbw7ewH23II5uhx83d1pzPKKpUb5z0Nuen64wMf8CxQSsHa5IoATGVxTDYW2LEDGhfDFWuQAE1Jgh0k%2B8De3cle6i9jxcpK6SF447yH%2FQ0qLKC5E0LvuTvBPWBKKqU2zNJGRoqaRaCc2Aws6d2miSDkjGESaW0Mtb8lVCutTcDpCY0fzOt00nB4l3i6Zu7VvsrwEpW%2Fw10qhnqzORwHhaiZ029vEIHJUTpQRU2tVANtNCc2XUhWJsdIhVyZeL6stjln9j%2FpvC0u1IS9qKCzjDwC4FjUKZpzqyU86Udx8jVwSljizPsFiIM2b8JEi7vrwtQe%2BNKvcrjnH%2BfEgy3XBlovdEVI0pjn62ChJnsY%2Fcc8A6EXK9RpJp4F%2FqWC%2FrX1edwuoezFBdyIpGZuQOmRddZrX05h4rVK842fs9U%2BbLVCAa0kZcRidnXjxxXOyAP5V3FSf%2B5CILRujtP2RU%2B9%2F4z8nMNf91sMGOqUBdK5eQTFDkfijxdAM3buqpYHUd7shqLABr78laj9EaNbYmiBjBcvjaX1CTnznxPkK3a1uBf7nVe1uPdu7NITM%2BcgFqthkESg0DkE8B%2B2WTzNj%2FjIVekUPiiBFLKAQJ89rvMkXYbN%2BXp3My0Q1pCFulP8ANw60Xzw4DSlx%2F5JOr8qy4J4%2By%2BEjBkzNtKq%2F66p5wTS8boCUPvXRXFqg%2FYuaDi%2FEHJM6&X-Amz-Signature=10bd7486f80a7c0aa3995bc719670d009da1d762cd24986c96139b0716ed6e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXYPV2Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIByAEZrX%2FuLfmMy4sw%2BB3zOn0QjhZmVt7v4qiTwScZjrAiEA7aFgYrtfU2BfuzvpSxZzLRt7NakAHuz3GIqkR0EGZvcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEmu26UJPu1s7G1rIyrcAxntzHMcx6r5bGm%2FQGaPlKILw2qrGlJnDvsKezy3Zj58tm5xF3LSXCTPmruFuCvoXpH1xqSaOQdph3uLAnwWNMW7Dq2IpA3tfzdchZLP9cYuroifFxjrgCiDsg5qUUQi4pgy%2F%2BcGB6tw7YfeC4GlU0W0913l6p3%2BWZ3ktbw7ewH23II5uhx83d1pzPKKpUb5z0Nuen64wMf8CxQSsHa5IoATGVxTDYW2LEDGhfDFWuQAE1Jgh0k%2B8De3cle6i9jxcpK6SF447yH%2FQ0qLKC5E0LvuTvBPWBKKqU2zNJGRoqaRaCc2Aws6d2miSDkjGESaW0Mtb8lVCutTcDpCY0fzOt00nB4l3i6Zu7VvsrwEpW%2Fw10qhnqzORwHhaiZ029vEIHJUTpQRU2tVANtNCc2XUhWJsdIhVyZeL6stjln9j%2FpvC0u1IS9qKCzjDwC4FjUKZpzqyU86Udx8jVwSljizPsFiIM2b8JEi7vrwtQe%2BNKvcrjnH%2BfEgy3XBlovdEVI0pjn62ChJnsY%2Fcc8A6EXK9RpJp4F%2FqWC%2FrX1edwuoezFBdyIpGZuQOmRddZrX05h4rVK842fs9U%2BbLVCAa0kZcRidnXjxxXOyAP5V3FSf%2B5CILRujtP2RU%2B9%2F4z8nMNf91sMGOqUBdK5eQTFDkfijxdAM3buqpYHUd7shqLABr78laj9EaNbYmiBjBcvjaX1CTnznxPkK3a1uBf7nVe1uPdu7NITM%2BcgFqthkESg0DkE8B%2B2WTzNj%2FjIVekUPiiBFLKAQJ89rvMkXYbN%2BXp3My0Q1pCFulP8ANw60Xzw4DSlx%2F5JOr8qy4J4%2By%2BEjBkzNtKq%2F66p5wTS8boCUPvXRXFqg%2FYuaDi%2FEHJM6&X-Amz-Signature=eb54fcc1ab287fbe43fc1e78975240f3e8b9d1e1230b5d52e94a5ceb624f821b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
