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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YRPUJV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2FvulR138%2B1prvAw7W15TP8AhJpc%2FvnQbcrgcqceZURAIhAOwjOG7SbUtCdrPskPVzxYqwPM03pGIxfYhUKvKQ1U66KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY5gfCzIPz4uzxtfUq3AMQac2%2BrWOwkNYbgEVIfQ2wiLC5VLp8CVu0fFvvQxOwyr7KbKY3P5Tp2ootk%2Fb8aKvcFBRc1LlbfiKiL42AJCLxxPT3t%2FaMTWTipmf6N7L4Ah6Tq4w371dfiKhCNKTphkU8x8t8u6r%2FudXvouV9QN7J6tomRNouj2kvOLDJjRHzXsfLqEclC2NdEJUfqbWOQtumNyXL1tgfwMeIsyXGRMDlFzllwrIz2HBsgKONnKzIDSFnC%2BvpK7nYBFPMqzdBZWfaDPXb5gaLIt34%2F8XE0vOhj0e08acVnhAnQ96hPpGw7QYQ68%2FeP8LVHz%2BI0bis6WC0sq0ZZyyc%2FYLNlgEVV3vQAcDExC%2F57RFdrWR2V9AXXWUGK3ymuOUSGXElbx5Rja88YZivrgmmGzoWwExttQsH4BrxIfh%2BkDDyhmRqhztxwd7MMeqo0nIMRrkdxfN7TxlW6CdQXYgGOzBE8ehb3Nt4RqSu6%2F3ANf8IV9VI%2FRZgVgou4MxnZGT7Wn1%2Fu7PdWhQj8NT7%2FRASLq2E1PDqWV05B2WaXUfeEhpFHkT9l85i5hGKcSnKUCB%2BiJUajvv0Vuya25NttqETK4d%2BiLD3emNAgUekWqDk%2B6e8QxVixGg4r57eLxayrCY2bluAgTCYw%2FXBBjqkAbO4k98Ynno0LOnNppJy0C6Ef7%2FIb4cu5%2FXN2L4uZ82vtlbqwsPVrPqf%2FQqdhcRDIcTn0qUfyVI45eEZkfBmp9tUxet1V4LHUyTCr3L5zvE0r37HUOL5ApOqg4haTLFdISMNmbbBrJabx42pgbXLzI%2FEGJp4Rvm536pV9n%2FWS3G%2F2AE6CP2fukSdvfOEplyNHAa5kd%2F4QGN9XivlB4fe4tf4hDxx&X-Amz-Signature=f4c91ee1a169457eeb5f32d159511b20f28aa75b4bacbdd10531f6ac70115197&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YRPUJV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2FvulR138%2B1prvAw7W15TP8AhJpc%2FvnQbcrgcqceZURAIhAOwjOG7SbUtCdrPskPVzxYqwPM03pGIxfYhUKvKQ1U66KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY5gfCzIPz4uzxtfUq3AMQac2%2BrWOwkNYbgEVIfQ2wiLC5VLp8CVu0fFvvQxOwyr7KbKY3P5Tp2ootk%2Fb8aKvcFBRc1LlbfiKiL42AJCLxxPT3t%2FaMTWTipmf6N7L4Ah6Tq4w371dfiKhCNKTphkU8x8t8u6r%2FudXvouV9QN7J6tomRNouj2kvOLDJjRHzXsfLqEclC2NdEJUfqbWOQtumNyXL1tgfwMeIsyXGRMDlFzllwrIz2HBsgKONnKzIDSFnC%2BvpK7nYBFPMqzdBZWfaDPXb5gaLIt34%2F8XE0vOhj0e08acVnhAnQ96hPpGw7QYQ68%2FeP8LVHz%2BI0bis6WC0sq0ZZyyc%2FYLNlgEVV3vQAcDExC%2F57RFdrWR2V9AXXWUGK3ymuOUSGXElbx5Rja88YZivrgmmGzoWwExttQsH4BrxIfh%2BkDDyhmRqhztxwd7MMeqo0nIMRrkdxfN7TxlW6CdQXYgGOzBE8ehb3Nt4RqSu6%2F3ANf8IV9VI%2FRZgVgou4MxnZGT7Wn1%2Fu7PdWhQj8NT7%2FRASLq2E1PDqWV05B2WaXUfeEhpFHkT9l85i5hGKcSnKUCB%2BiJUajvv0Vuya25NttqETK4d%2BiLD3emNAgUekWqDk%2B6e8QxVixGg4r57eLxayrCY2bluAgTCYw%2FXBBjqkAbO4k98Ynno0LOnNppJy0C6Ef7%2FIb4cu5%2FXN2L4uZ82vtlbqwsPVrPqf%2FQqdhcRDIcTn0qUfyVI45eEZkfBmp9tUxet1V4LHUyTCr3L5zvE0r37HUOL5ApOqg4haTLFdISMNmbbBrJabx42pgbXLzI%2FEGJp4Rvm536pV9n%2FWS3G%2F2AE6CP2fukSdvfOEplyNHAa5kd%2F4QGN9XivlB4fe4tf4hDxx&X-Amz-Signature=ab51aaa267d3cda5a7cca54aa1c6e922dbc50943763c492eb490377c2f1de543&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YRPUJV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2FvulR138%2B1prvAw7W15TP8AhJpc%2FvnQbcrgcqceZURAIhAOwjOG7SbUtCdrPskPVzxYqwPM03pGIxfYhUKvKQ1U66KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY5gfCzIPz4uzxtfUq3AMQac2%2BrWOwkNYbgEVIfQ2wiLC5VLp8CVu0fFvvQxOwyr7KbKY3P5Tp2ootk%2Fb8aKvcFBRc1LlbfiKiL42AJCLxxPT3t%2FaMTWTipmf6N7L4Ah6Tq4w371dfiKhCNKTphkU8x8t8u6r%2FudXvouV9QN7J6tomRNouj2kvOLDJjRHzXsfLqEclC2NdEJUfqbWOQtumNyXL1tgfwMeIsyXGRMDlFzllwrIz2HBsgKONnKzIDSFnC%2BvpK7nYBFPMqzdBZWfaDPXb5gaLIt34%2F8XE0vOhj0e08acVnhAnQ96hPpGw7QYQ68%2FeP8LVHz%2BI0bis6WC0sq0ZZyyc%2FYLNlgEVV3vQAcDExC%2F57RFdrWR2V9AXXWUGK3ymuOUSGXElbx5Rja88YZivrgmmGzoWwExttQsH4BrxIfh%2BkDDyhmRqhztxwd7MMeqo0nIMRrkdxfN7TxlW6CdQXYgGOzBE8ehb3Nt4RqSu6%2F3ANf8IV9VI%2FRZgVgou4MxnZGT7Wn1%2Fu7PdWhQj8NT7%2FRASLq2E1PDqWV05B2WaXUfeEhpFHkT9l85i5hGKcSnKUCB%2BiJUajvv0Vuya25NttqETK4d%2BiLD3emNAgUekWqDk%2B6e8QxVixGg4r57eLxayrCY2bluAgTCYw%2FXBBjqkAbO4k98Ynno0LOnNppJy0C6Ef7%2FIb4cu5%2FXN2L4uZ82vtlbqwsPVrPqf%2FQqdhcRDIcTn0qUfyVI45eEZkfBmp9tUxet1V4LHUyTCr3L5zvE0r37HUOL5ApOqg4haTLFdISMNmbbBrJabx42pgbXLzI%2FEGJp4Rvm536pV9n%2FWS3G%2F2AE6CP2fukSdvfOEplyNHAa5kd%2F4QGN9XivlB4fe4tf4hDxx&X-Amz-Signature=2b4a7d51c989e18fbe98745e2d3452b3ec6a15fa4e827136aca1f20b003c30cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
