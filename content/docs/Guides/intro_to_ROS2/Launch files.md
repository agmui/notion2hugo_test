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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGKQZ2D%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICu1ElFn%2FqPT7eQYKy5gK2vkesZTcw%2BOPT%2BBOSMlZNCiAiBl4VDyeqqb1Gh4fV8rDyDC3hcCuUZjInPSdAzx9ROSISr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrzSrEX8dzGuryZ3xKtwDjAUWVuQrWJSEd22i0gazNw%2FLqryeTGWPc97yrBKG0DyKFRYNq0oso%2Fo4%2Fy80GRfiRZdCv7665AZdjq0fFlibF3vwbWAyuarg1BcQdBN1OrqybuINdtxeOm4r4k5vkbgMZvL5mXQFfiSYBsIM31PwMqXvNOprPlfzaYFchD%2BbxLYzdHzHLvMMYC4mHCqeeRXWa3EJITAWT2%2FAnHtn%2FEwbOR0H9cUP5kYcqD4%2BgFe6KOhBbVTgzT2z1jWVuXHx8I%2BhtD80ESlwGem9hizpun%2BZRQbtcE4ZUWtOQ73KoV4TGYrEBd0UpiT7%2Bhf7zEkPcsIN2ajemN0YZN8BXLo4liibRd1cEZFGkfEbUIm2388DLLZsUQF%2FspG0qMii0cvD8PDk3FPNnWxFGWmNpxWehgztgp1jbt3cwJC7zZLnhgSbkuLD5zNpnawi3CGSRDRSrmwW6vnDZ7lTQSuENURCmR%2BDH71PPQT6YvCFBpJAYKeWC96YhhQXB%2BYOZYzNeZjRxiRHmrKBYH5rMt4f%2F%2BMZ9TVkDz9UiZealb7ssiY6FaqamWzg%2BM%2BhyKYwHZFNlnoc0Cg4dZzJk2ARLvLHYCums6eI7ROET1QP0TPVgr4JydsZQqO3YGq09fiopomd%2F8EwzIyYvQY6pgEqkR%2BPAopkHjIFoBQzMjjWPT%2F7fg1MEtMLYJ%2BHMlNmo%2FS967ubP8tJr7P2Q1HF1DMbf07bWn%2B4KrczdzQP0SvQ9qy3PNVY78MO1C2pni1IKrsMykIBuyFEKheprSOqnZJKadKp6OptJpan4g1ea8JypIxq9exkUTx7s4kTi0BCA%2Feo6mL7Vyg74yTIVQs38vKwX0uATfAGY4GYerMIoAZ2msVsW0GJ&X-Amz-Signature=9448c376e56f800387fe277a44023c19bc18288c2a1c5d23731b1e8763e4d6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGKQZ2D%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICu1ElFn%2FqPT7eQYKy5gK2vkesZTcw%2BOPT%2BBOSMlZNCiAiBl4VDyeqqb1Gh4fV8rDyDC3hcCuUZjInPSdAzx9ROSISr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrzSrEX8dzGuryZ3xKtwDjAUWVuQrWJSEd22i0gazNw%2FLqryeTGWPc97yrBKG0DyKFRYNq0oso%2Fo4%2Fy80GRfiRZdCv7665AZdjq0fFlibF3vwbWAyuarg1BcQdBN1OrqybuINdtxeOm4r4k5vkbgMZvL5mXQFfiSYBsIM31PwMqXvNOprPlfzaYFchD%2BbxLYzdHzHLvMMYC4mHCqeeRXWa3EJITAWT2%2FAnHtn%2FEwbOR0H9cUP5kYcqD4%2BgFe6KOhBbVTgzT2z1jWVuXHx8I%2BhtD80ESlwGem9hizpun%2BZRQbtcE4ZUWtOQ73KoV4TGYrEBd0UpiT7%2Bhf7zEkPcsIN2ajemN0YZN8BXLo4liibRd1cEZFGkfEbUIm2388DLLZsUQF%2FspG0qMii0cvD8PDk3FPNnWxFGWmNpxWehgztgp1jbt3cwJC7zZLnhgSbkuLD5zNpnawi3CGSRDRSrmwW6vnDZ7lTQSuENURCmR%2BDH71PPQT6YvCFBpJAYKeWC96YhhQXB%2BYOZYzNeZjRxiRHmrKBYH5rMt4f%2F%2BMZ9TVkDz9UiZealb7ssiY6FaqamWzg%2BM%2BhyKYwHZFNlnoc0Cg4dZzJk2ARLvLHYCums6eI7ROET1QP0TPVgr4JydsZQqO3YGq09fiopomd%2F8EwzIyYvQY6pgEqkR%2BPAopkHjIFoBQzMjjWPT%2F7fg1MEtMLYJ%2BHMlNmo%2FS967ubP8tJr7P2Q1HF1DMbf07bWn%2B4KrczdzQP0SvQ9qy3PNVY78MO1C2pni1IKrsMykIBuyFEKheprSOqnZJKadKp6OptJpan4g1ea8JypIxq9exkUTx7s4kTi0BCA%2Feo6mL7Vyg74yTIVQs38vKwX0uATfAGY4GYerMIoAZ2msVsW0GJ&X-Amz-Signature=fe8675a18abebd150520c935d93f58785d8916d113484c10d741d51d373856d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGKQZ2D%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICu1ElFn%2FqPT7eQYKy5gK2vkesZTcw%2BOPT%2BBOSMlZNCiAiBl4VDyeqqb1Gh4fV8rDyDC3hcCuUZjInPSdAzx9ROSISr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrzSrEX8dzGuryZ3xKtwDjAUWVuQrWJSEd22i0gazNw%2FLqryeTGWPc97yrBKG0DyKFRYNq0oso%2Fo4%2Fy80GRfiRZdCv7665AZdjq0fFlibF3vwbWAyuarg1BcQdBN1OrqybuINdtxeOm4r4k5vkbgMZvL5mXQFfiSYBsIM31PwMqXvNOprPlfzaYFchD%2BbxLYzdHzHLvMMYC4mHCqeeRXWa3EJITAWT2%2FAnHtn%2FEwbOR0H9cUP5kYcqD4%2BgFe6KOhBbVTgzT2z1jWVuXHx8I%2BhtD80ESlwGem9hizpun%2BZRQbtcE4ZUWtOQ73KoV4TGYrEBd0UpiT7%2Bhf7zEkPcsIN2ajemN0YZN8BXLo4liibRd1cEZFGkfEbUIm2388DLLZsUQF%2FspG0qMii0cvD8PDk3FPNnWxFGWmNpxWehgztgp1jbt3cwJC7zZLnhgSbkuLD5zNpnawi3CGSRDRSrmwW6vnDZ7lTQSuENURCmR%2BDH71PPQT6YvCFBpJAYKeWC96YhhQXB%2BYOZYzNeZjRxiRHmrKBYH5rMt4f%2F%2BMZ9TVkDz9UiZealb7ssiY6FaqamWzg%2BM%2BhyKYwHZFNlnoc0Cg4dZzJk2ARLvLHYCums6eI7ROET1QP0TPVgr4JydsZQqO3YGq09fiopomd%2F8EwzIyYvQY6pgEqkR%2BPAopkHjIFoBQzMjjWPT%2F7fg1MEtMLYJ%2BHMlNmo%2FS967ubP8tJr7P2Q1HF1DMbf07bWn%2B4KrczdzQP0SvQ9qy3PNVY78MO1C2pni1IKrsMykIBuyFEKheprSOqnZJKadKp6OptJpan4g1ea8JypIxq9exkUTx7s4kTi0BCA%2Feo6mL7Vyg74yTIVQs38vKwX0uATfAGY4GYerMIoAZ2msVsW0GJ&X-Amz-Signature=742c199dbbee710cb3e1e38bf5232863aadbfb4976336d76e7c77fa110ce6414&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
