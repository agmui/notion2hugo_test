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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SML5LNWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE43WzTBBQUzV0H1TFNt7FXaAM5uRJ6m2hQGPeBQtqiFAiBxToRJeuz6BRXN9nXK70wC2CBnf0T4IkjyQ11WPuEu3SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpSmhYpDuPcOhk43KtwDc8zIiqFOb7p4UCezYGdyLaHqyTd3zgJikeBUCLvfUR4AlTYz50bG7H09f%2FoItBQyNtGtqN8qXhsR6AzZM0hXvS7T3RSSCSvZbUzeBC%2FmcjLU5ndMOFUUOz%2Fp5UsnFOg7cS3%2B7NjXZHBaZZbBiV2LC2EWJhElhEMt8rBA3JZaDMMy1ScSxOvC%2FHTbDZJm72Utf44fnh1ZPb2lYjJE2q7DvmJXruX%2FU6tZ%2Bv9AjzaqNCII9Xt1vEbUS60sB3Cs%2FJ21cS7y8C9XAsAY4cttyI24CQUiPb%2FF%2BvnMz2GlWpY3gYvoBd%2Fg3DlOKwD2NaBeQWXqg4xBqQt%2BJfRQi0E%2BsC8fWowjAimCk6La1oHQBRNCUIpLOVnkmknm9cE7brz6kQ8SHJeFmRNx%2BDsM4svFXpiD%2B9b8lrdd920duIxyP6j0iqZ28Zcbs%2FD18QibA6WtK9%2BCQdJVCRAlaJjLQ2stGDxZUlTPH8LX8PVLBxh5srsG%2Be4UotN73cnYeGqMUc22keFAPGSUb7FB6zRDgSm1EbfZXMc7N%2BHbPRGK6BBVB2%2B0xaZYwZyKxZuH0fXyGp9PXLV5H3xnVW%2Bj2ugbZpcq9WoSToDIATgfHd0SpZo1XeX8PrwzOjmI%2BT55Mt4roq0wuNC%2BvgY6pgESSaDWPQGCPb8pSQDvSTPzUhCwfTuh%2F6F2CDoAaR%2FAhjFSzK0jmoL5WocfY31i2owA3uKQeQuKEPbn%2BmliWZN%2FPeLjJtgo5ani5ttVUftgRexrx727ftbfdet8KoU2LW5AUOj9Q4ZVNA10jLArDMgeBkBZZWxDu3KX88k90Oa2LtyvfJfQNPT5cKMr4uki66TnjL%2BDm4LWK2uVSK8RN55YZaM2ideg&X-Amz-Signature=9f518ecb6eb92b513cf4ca1bbd4b2a9ef9ca3d448178aabb8912d4691686bf3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SML5LNWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE43WzTBBQUzV0H1TFNt7FXaAM5uRJ6m2hQGPeBQtqiFAiBxToRJeuz6BRXN9nXK70wC2CBnf0T4IkjyQ11WPuEu3SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpSmhYpDuPcOhk43KtwDc8zIiqFOb7p4UCezYGdyLaHqyTd3zgJikeBUCLvfUR4AlTYz50bG7H09f%2FoItBQyNtGtqN8qXhsR6AzZM0hXvS7T3RSSCSvZbUzeBC%2FmcjLU5ndMOFUUOz%2Fp5UsnFOg7cS3%2B7NjXZHBaZZbBiV2LC2EWJhElhEMt8rBA3JZaDMMy1ScSxOvC%2FHTbDZJm72Utf44fnh1ZPb2lYjJE2q7DvmJXruX%2FU6tZ%2Bv9AjzaqNCII9Xt1vEbUS60sB3Cs%2FJ21cS7y8C9XAsAY4cttyI24CQUiPb%2FF%2BvnMz2GlWpY3gYvoBd%2Fg3DlOKwD2NaBeQWXqg4xBqQt%2BJfRQi0E%2BsC8fWowjAimCk6La1oHQBRNCUIpLOVnkmknm9cE7brz6kQ8SHJeFmRNx%2BDsM4svFXpiD%2B9b8lrdd920duIxyP6j0iqZ28Zcbs%2FD18QibA6WtK9%2BCQdJVCRAlaJjLQ2stGDxZUlTPH8LX8PVLBxh5srsG%2Be4UotN73cnYeGqMUc22keFAPGSUb7FB6zRDgSm1EbfZXMc7N%2BHbPRGK6BBVB2%2B0xaZYwZyKxZuH0fXyGp9PXLV5H3xnVW%2Bj2ugbZpcq9WoSToDIATgfHd0SpZo1XeX8PrwzOjmI%2BT55Mt4roq0wuNC%2BvgY6pgESSaDWPQGCPb8pSQDvSTPzUhCwfTuh%2F6F2CDoAaR%2FAhjFSzK0jmoL5WocfY31i2owA3uKQeQuKEPbn%2BmliWZN%2FPeLjJtgo5ani5ttVUftgRexrx727ftbfdet8KoU2LW5AUOj9Q4ZVNA10jLArDMgeBkBZZWxDu3KX88k90Oa2LtyvfJfQNPT5cKMr4uki66TnjL%2BDm4LWK2uVSK8RN55YZaM2ideg&X-Amz-Signature=221df272e3d3a33634eaba5a579be337df9241f9d91baccee3307784999a31e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SML5LNWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE43WzTBBQUzV0H1TFNt7FXaAM5uRJ6m2hQGPeBQtqiFAiBxToRJeuz6BRXN9nXK70wC2CBnf0T4IkjyQ11WPuEu3SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpSmhYpDuPcOhk43KtwDc8zIiqFOb7p4UCezYGdyLaHqyTd3zgJikeBUCLvfUR4AlTYz50bG7H09f%2FoItBQyNtGtqN8qXhsR6AzZM0hXvS7T3RSSCSvZbUzeBC%2FmcjLU5ndMOFUUOz%2Fp5UsnFOg7cS3%2B7NjXZHBaZZbBiV2LC2EWJhElhEMt8rBA3JZaDMMy1ScSxOvC%2FHTbDZJm72Utf44fnh1ZPb2lYjJE2q7DvmJXruX%2FU6tZ%2Bv9AjzaqNCII9Xt1vEbUS60sB3Cs%2FJ21cS7y8C9XAsAY4cttyI24CQUiPb%2FF%2BvnMz2GlWpY3gYvoBd%2Fg3DlOKwD2NaBeQWXqg4xBqQt%2BJfRQi0E%2BsC8fWowjAimCk6La1oHQBRNCUIpLOVnkmknm9cE7brz6kQ8SHJeFmRNx%2BDsM4svFXpiD%2B9b8lrdd920duIxyP6j0iqZ28Zcbs%2FD18QibA6WtK9%2BCQdJVCRAlaJjLQ2stGDxZUlTPH8LX8PVLBxh5srsG%2Be4UotN73cnYeGqMUc22keFAPGSUb7FB6zRDgSm1EbfZXMc7N%2BHbPRGK6BBVB2%2B0xaZYwZyKxZuH0fXyGp9PXLV5H3xnVW%2Bj2ugbZpcq9WoSToDIATgfHd0SpZo1XeX8PrwzOjmI%2BT55Mt4roq0wuNC%2BvgY6pgESSaDWPQGCPb8pSQDvSTPzUhCwfTuh%2F6F2CDoAaR%2FAhjFSzK0jmoL5WocfY31i2owA3uKQeQuKEPbn%2BmliWZN%2FPeLjJtgo5ani5ttVUftgRexrx727ftbfdet8KoU2LW5AUOj9Q4ZVNA10jLArDMgeBkBZZWxDu3KX88k90Oa2LtyvfJfQNPT5cKMr4uki66TnjL%2BDm4LWK2uVSK8RN55YZaM2ideg&X-Amz-Signature=9d240c8eb8ee34fb0b52161683371f78a9b00ce1a85614667cd72bc2e69d1aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
