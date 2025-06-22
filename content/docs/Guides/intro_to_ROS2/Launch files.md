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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NMS5UV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCVpJIrnWJbqfyvxI1ZdZ0hzwP7C%2Fs1Rc6BjEbj6aSlEwIgXykac7Z0fgVglQ031EHNgjsRoGLL8DVQpkwl36%2FHWQQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgd0O3ie1a6vNM5TyrcAzYUb0k2y9c7D1S3rYqkhIyjy9DxmYAnqx9z%2BBv5m1YUgD4iUizQVtuXVkxzdXcsJvE4q%2Bdw68VrbBePg5klML2GuvSggp9XA4PDqdWPadxBugYNo74n4Yf%2FfyPmLwdIfIjNjtveRKKmig6ct4yZflLr%2BUDx4duJ5XElBrL9gvP7VJcjrndxZy3nwQYwdOBE0uRc9kzI3ipF6C6C8Pht7ybta7z7zHQHTvYRptZyObbPTVZrymD6r9gg7d8Te2HuelHJMUjby6Cal2hhoohWDMSmxhE6dQlvSW8bHtHujeVhKeEsdrYvb%2F9Cg2zP%2BTMEBfzj2980%2B5u9awrRNOiYsAmxvzdOXgvcz%2BOadbl0X6ewwJQkEdTNyUC%2F3zu%2FFb5%2BgGFCjNyZYzIWbcAHEjucwmAj%2BmTMOF3MTrq3cZL6ew%2B5bV15apMwEheKqOjDtvQQ4yrx68erChg7NNHIegzGjQlZUs6AvTIFj9WKdgnhiGKLg4CjYqFMTtnRYbkyY4XbVJy%2BOzjvrQ3ATgscKqPY%2BS0W09aDISC31d%2Bwww1DOpmQhILrAjLFF7v1O7ZdeFl8eIZR%2Bg7xzCp0SVnmLLL%2BhWhr8Z8w3teLiS0krzVQHKK3%2FMAmqvoruY6imlGYMNPL38IGOqUBr5BNZzLMkRySJCA2usnpaGR8oLRdhfN5LF%2F1FHtUJSkC9rVVgpI2D27kK0M8NCb%2B%2FVOu1iO%2FJ2%2Ba8OrnHhuE8Wz3YsTcG0QUGHh%2FRG72qGW%2BMO3jXs12We8Zis20awldS9TH%2FCJxf01B7YutsBOcFS0GUA4ftgghtWJ6sUjuprtMvk5vZE0sNNe85Znen4%2FJ5mJBW7W3QInhIU712mOggXwzpmti&X-Amz-Signature=8657f8887e6f1093726ffb006264526b7a7e7899d28ae5387b871433363ca0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NMS5UV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCVpJIrnWJbqfyvxI1ZdZ0hzwP7C%2Fs1Rc6BjEbj6aSlEwIgXykac7Z0fgVglQ031EHNgjsRoGLL8DVQpkwl36%2FHWQQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgd0O3ie1a6vNM5TyrcAzYUb0k2y9c7D1S3rYqkhIyjy9DxmYAnqx9z%2BBv5m1YUgD4iUizQVtuXVkxzdXcsJvE4q%2Bdw68VrbBePg5klML2GuvSggp9XA4PDqdWPadxBugYNo74n4Yf%2FfyPmLwdIfIjNjtveRKKmig6ct4yZflLr%2BUDx4duJ5XElBrL9gvP7VJcjrndxZy3nwQYwdOBE0uRc9kzI3ipF6C6C8Pht7ybta7z7zHQHTvYRptZyObbPTVZrymD6r9gg7d8Te2HuelHJMUjby6Cal2hhoohWDMSmxhE6dQlvSW8bHtHujeVhKeEsdrYvb%2F9Cg2zP%2BTMEBfzj2980%2B5u9awrRNOiYsAmxvzdOXgvcz%2BOadbl0X6ewwJQkEdTNyUC%2F3zu%2FFb5%2BgGFCjNyZYzIWbcAHEjucwmAj%2BmTMOF3MTrq3cZL6ew%2B5bV15apMwEheKqOjDtvQQ4yrx68erChg7NNHIegzGjQlZUs6AvTIFj9WKdgnhiGKLg4CjYqFMTtnRYbkyY4XbVJy%2BOzjvrQ3ATgscKqPY%2BS0W09aDISC31d%2Bwww1DOpmQhILrAjLFF7v1O7ZdeFl8eIZR%2Bg7xzCp0SVnmLLL%2BhWhr8Z8w3teLiS0krzVQHKK3%2FMAmqvoruY6imlGYMNPL38IGOqUBr5BNZzLMkRySJCA2usnpaGR8oLRdhfN5LF%2F1FHtUJSkC9rVVgpI2D27kK0M8NCb%2B%2FVOu1iO%2FJ2%2Ba8OrnHhuE8Wz3YsTcG0QUGHh%2FRG72qGW%2BMO3jXs12We8Zis20awldS9TH%2FCJxf01B7YutsBOcFS0GUA4ftgghtWJ6sUjuprtMvk5vZE0sNNe85Znen4%2FJ5mJBW7W3QInhIU712mOggXwzpmti&X-Amz-Signature=798d588d34a3ef22420d53bd3fd95c644ac2998290280dc1eee10c139fa4e298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NMS5UV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCVpJIrnWJbqfyvxI1ZdZ0hzwP7C%2Fs1Rc6BjEbj6aSlEwIgXykac7Z0fgVglQ031EHNgjsRoGLL8DVQpkwl36%2FHWQQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgd0O3ie1a6vNM5TyrcAzYUb0k2y9c7D1S3rYqkhIyjy9DxmYAnqx9z%2BBv5m1YUgD4iUizQVtuXVkxzdXcsJvE4q%2Bdw68VrbBePg5klML2GuvSggp9XA4PDqdWPadxBugYNo74n4Yf%2FfyPmLwdIfIjNjtveRKKmig6ct4yZflLr%2BUDx4duJ5XElBrL9gvP7VJcjrndxZy3nwQYwdOBE0uRc9kzI3ipF6C6C8Pht7ybta7z7zHQHTvYRptZyObbPTVZrymD6r9gg7d8Te2HuelHJMUjby6Cal2hhoohWDMSmxhE6dQlvSW8bHtHujeVhKeEsdrYvb%2F9Cg2zP%2BTMEBfzj2980%2B5u9awrRNOiYsAmxvzdOXgvcz%2BOadbl0X6ewwJQkEdTNyUC%2F3zu%2FFb5%2BgGFCjNyZYzIWbcAHEjucwmAj%2BmTMOF3MTrq3cZL6ew%2B5bV15apMwEheKqOjDtvQQ4yrx68erChg7NNHIegzGjQlZUs6AvTIFj9WKdgnhiGKLg4CjYqFMTtnRYbkyY4XbVJy%2BOzjvrQ3ATgscKqPY%2BS0W09aDISC31d%2Bwww1DOpmQhILrAjLFF7v1O7ZdeFl8eIZR%2Bg7xzCp0SVnmLLL%2BhWhr8Z8w3teLiS0krzVQHKK3%2FMAmqvoruY6imlGYMNPL38IGOqUBr5BNZzLMkRySJCA2usnpaGR8oLRdhfN5LF%2F1FHtUJSkC9rVVgpI2D27kK0M8NCb%2B%2FVOu1iO%2FJ2%2Ba8OrnHhuE8Wz3YsTcG0QUGHh%2FRG72qGW%2BMO3jXs12We8Zis20awldS9TH%2FCJxf01B7YutsBOcFS0GUA4ftgghtWJ6sUjuprtMvk5vZE0sNNe85Znen4%2FJ5mJBW7W3QInhIU712mOggXwzpmti&X-Amz-Signature=953080144f4ebf8e8a84be3cddebf5675b309c76ae7e66f7642b843050840f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
