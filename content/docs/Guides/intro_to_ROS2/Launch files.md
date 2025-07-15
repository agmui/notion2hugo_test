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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJUKGHD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDH%2BQbu8S86SiCsSq6J8Pvv4XB5OgpqrQKarzk0l4ZrDAIhANg4l4oEPsRErnLqPJaoL2zCzT0NcThSr5qX2qwiqZMvKv8DCDwQABoMNjM3NDIzMTgzODA1IgywHHO44e1JwPF2qxoq3ANnM%2BU79gQq%2F2sKvKg8p3Wwv72tEJOVjD8bro3M2dotMS4yHkZRSpkKWGPR4Nd8zx8K%2FvyXTeOBBBPnzlgdn5LNaYn4TZIuUfdPhNvnr9bTmZmulM4iZnUaDcX2Y9mADSVZd9MMXWwZHfTitrdqQdnN35VeCmQ1ScefJ6fFH1oixp3AJRpGZ2ActQxOXWTSJuXzV0T9ipbu%2FUCZhrLQQX5BbU2LhMorsf3xXFqacupoMAc98vS1zJ3tIxuusunxXxRSUGy0waZP6DeaDmZPuN8h3RSyofNkE9iBYQfiJPSrym1OcWspbp03m%2BJQ%2Blwzl48MAHMuhgyUt5NA1SoZKhUDXFd0nn3hipKIYtz10HidqI1nIZSKby0OAlj2hTrw6I%2FVYwIBCS0%2BGKM1MAPM2YCML61qAgrp3jxMh9FbfIWr5oUh2ZJxDrEZIi3bi1pC9%2FNOfSeK2QWrpuA9f%2Ffz7pqNaF3pX8X47XhdJv%2B7Xyn3rc%2F3AG5XGcy8PWVivE5o2wwHgHYHqSlRQ%2Ba6Zxdd9M7RVvB5b%2BguyR5He7Egym%2B73KskwxK%2BKBc%2BjpiU6PU5IDLoyq3vIBckbOHfPYlgGFa6R6hxwcjX9Ep2qtPzzuTRsXuwG3rC%2FYEj%2BuCrbjC%2B%2FdbDBjqkAQjEYghYagGP5iVhZWfXOdDS0Mac0iK4FRqpOnpY73KTSbBzxxkwd3dVHaO%2B5nM6At%2BUc20V6XQawxqdLQFbrV38lM9T1uGuUxm195pdm5ElwGS8P4u61STH6a7avFRlC55i7r4hamrv4REzL4BgtbX5A%2Bmjmq85z%2ByuyKMJs2amAqNiitmZLU2vAccx49jGENnhww%2BsGoMlGR%2F4wYSWBhIa7Y%2FM&X-Amz-Signature=8bdc41ff2dd2334b03f8f45d1e5fed3dc81c42aa19720e4b8f23208e1ace2706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJUKGHD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDH%2BQbu8S86SiCsSq6J8Pvv4XB5OgpqrQKarzk0l4ZrDAIhANg4l4oEPsRErnLqPJaoL2zCzT0NcThSr5qX2qwiqZMvKv8DCDwQABoMNjM3NDIzMTgzODA1IgywHHO44e1JwPF2qxoq3ANnM%2BU79gQq%2F2sKvKg8p3Wwv72tEJOVjD8bro3M2dotMS4yHkZRSpkKWGPR4Nd8zx8K%2FvyXTeOBBBPnzlgdn5LNaYn4TZIuUfdPhNvnr9bTmZmulM4iZnUaDcX2Y9mADSVZd9MMXWwZHfTitrdqQdnN35VeCmQ1ScefJ6fFH1oixp3AJRpGZ2ActQxOXWTSJuXzV0T9ipbu%2FUCZhrLQQX5BbU2LhMorsf3xXFqacupoMAc98vS1zJ3tIxuusunxXxRSUGy0waZP6DeaDmZPuN8h3RSyofNkE9iBYQfiJPSrym1OcWspbp03m%2BJQ%2Blwzl48MAHMuhgyUt5NA1SoZKhUDXFd0nn3hipKIYtz10HidqI1nIZSKby0OAlj2hTrw6I%2FVYwIBCS0%2BGKM1MAPM2YCML61qAgrp3jxMh9FbfIWr5oUh2ZJxDrEZIi3bi1pC9%2FNOfSeK2QWrpuA9f%2Ffz7pqNaF3pX8X47XhdJv%2B7Xyn3rc%2F3AG5XGcy8PWVivE5o2wwHgHYHqSlRQ%2Ba6Zxdd9M7RVvB5b%2BguyR5He7Egym%2B73KskwxK%2BKBc%2BjpiU6PU5IDLoyq3vIBckbOHfPYlgGFa6R6hxwcjX9Ep2qtPzzuTRsXuwG3rC%2FYEj%2BuCrbjC%2B%2FdbDBjqkAQjEYghYagGP5iVhZWfXOdDS0Mac0iK4FRqpOnpY73KTSbBzxxkwd3dVHaO%2B5nM6At%2BUc20V6XQawxqdLQFbrV38lM9T1uGuUxm195pdm5ElwGS8P4u61STH6a7avFRlC55i7r4hamrv4REzL4BgtbX5A%2Bmjmq85z%2ByuyKMJs2amAqNiitmZLU2vAccx49jGENnhww%2BsGoMlGR%2F4wYSWBhIa7Y%2FM&X-Amz-Signature=6a765835fee8f29daec15f058f456243982b398896816aca464057f25fa76734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJUKGHD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDH%2BQbu8S86SiCsSq6J8Pvv4XB5OgpqrQKarzk0l4ZrDAIhANg4l4oEPsRErnLqPJaoL2zCzT0NcThSr5qX2qwiqZMvKv8DCDwQABoMNjM3NDIzMTgzODA1IgywHHO44e1JwPF2qxoq3ANnM%2BU79gQq%2F2sKvKg8p3Wwv72tEJOVjD8bro3M2dotMS4yHkZRSpkKWGPR4Nd8zx8K%2FvyXTeOBBBPnzlgdn5LNaYn4TZIuUfdPhNvnr9bTmZmulM4iZnUaDcX2Y9mADSVZd9MMXWwZHfTitrdqQdnN35VeCmQ1ScefJ6fFH1oixp3AJRpGZ2ActQxOXWTSJuXzV0T9ipbu%2FUCZhrLQQX5BbU2LhMorsf3xXFqacupoMAc98vS1zJ3tIxuusunxXxRSUGy0waZP6DeaDmZPuN8h3RSyofNkE9iBYQfiJPSrym1OcWspbp03m%2BJQ%2Blwzl48MAHMuhgyUt5NA1SoZKhUDXFd0nn3hipKIYtz10HidqI1nIZSKby0OAlj2hTrw6I%2FVYwIBCS0%2BGKM1MAPM2YCML61qAgrp3jxMh9FbfIWr5oUh2ZJxDrEZIi3bi1pC9%2FNOfSeK2QWrpuA9f%2Ffz7pqNaF3pX8X47XhdJv%2B7Xyn3rc%2F3AG5XGcy8PWVivE5o2wwHgHYHqSlRQ%2Ba6Zxdd9M7RVvB5b%2BguyR5He7Egym%2B73KskwxK%2BKBc%2BjpiU6PU5IDLoyq3vIBckbOHfPYlgGFa6R6hxwcjX9Ep2qtPzzuTRsXuwG3rC%2FYEj%2BuCrbjC%2B%2FdbDBjqkAQjEYghYagGP5iVhZWfXOdDS0Mac0iK4FRqpOnpY73KTSbBzxxkwd3dVHaO%2B5nM6At%2BUc20V6XQawxqdLQFbrV38lM9T1uGuUxm195pdm5ElwGS8P4u61STH6a7avFRlC55i7r4hamrv4REzL4BgtbX5A%2Bmjmq85z%2ByuyKMJs2amAqNiitmZLU2vAccx49jGENnhww%2BsGoMlGR%2F4wYSWBhIa7Y%2FM&X-Amz-Signature=18124665e9704fb25e4e3a11941a081d6215f35d66e64d2d7a8e8e3fb4e79e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
