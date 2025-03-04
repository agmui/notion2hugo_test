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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCM5DGT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm193cn4Dmm%2Felyu%2BZIIC8cxCowwKohFGOTORZIOtozwIhAPVJsxdzw27S3foBcdYCA9zGPQUfuPoQWb8PJtF21JarKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzotmyq67tBA42jXRUq3ANBuNyIzPudawHLIJzxRtYXtDYfb23JekDu8ujksb0WHqBshIeAhmPrIDnsTFfB8dkw8PqWO5aihFuZv8Q3He37%2FnzkmpDkGmV9qWcE%2BYCyXH3Jcss9gCvGTRiE2eNkl%2FTXwvxNY4sg3loyuQdWD5qJkFEFHmkOxEQdtC6ukO64Z1LBDKqQ34zFg%2FJgUMYVdgx%2FnOpG2NX5z94mJ7Fb%2B%2FytEFRA8QBmK%2BY%2B3CiKaI84vV0b9bd4zueWWS%2BChpHYkplKJRaMQ6TbBDUIyKoIqq10hu7cFHxD75fImDenfXbpn8lCU9qUAqjXE9e6zdYwx4HHPtsYgmuJUgXqLxJqOndhMHl20EOPRfFqmCExbKSaEnHY1ly2rXtxr1BDAHYM607S%2B7b5jusKEvy9Qi0D0ZXI0eePsuUpq4UYglHvSepUYTa0xSDFnG0kjGVbKQ%2BDULtOQdtiq6UMTlSEcavqVBJa9vKT5tWvF8lP5AfPVoxwwgTRHqrehovH88y45nQTj3ou0hH5MZb%2BIsUMKiWUJPy9KPzqm9bH%2FUaHof%2B%2FHknMT59BcRlxSAfVA8gPcqtyfq%2FlsgQYrw37uyPpTwotznjax4oo5RebJeo7fKMzLIHyvhCQNNizLW40C%2FniLTCY%2BJi%2BBjqkAXI%2FQPJQH9H6OyFun04ZOlXtKETvL5%2BmJpDqu4otBJTLtZ5UtPkBLj133v%2F9OIrtl72F9sgs%2FJTTwCZgW%2BYKpavW%2B%2FJSaXYBudXicSzm9LUNhMr6IwB80M4RMpjqBFzMNnfG1ZX%2Bh0L9cyhWfHCFrIhpEnxynrarIYSfg%2FRQXHxFemIr6s1VoqJolFkAwx7UJd%2BOKGLwg4E9e5dyvMc8YKaTQhIq&X-Amz-Signature=08907eb60c9649c74a4ebab5d31e50a2d7ba04806c66ad38bb92e9f7d1047e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCM5DGT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm193cn4Dmm%2Felyu%2BZIIC8cxCowwKohFGOTORZIOtozwIhAPVJsxdzw27S3foBcdYCA9zGPQUfuPoQWb8PJtF21JarKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzotmyq67tBA42jXRUq3ANBuNyIzPudawHLIJzxRtYXtDYfb23JekDu8ujksb0WHqBshIeAhmPrIDnsTFfB8dkw8PqWO5aihFuZv8Q3He37%2FnzkmpDkGmV9qWcE%2BYCyXH3Jcss9gCvGTRiE2eNkl%2FTXwvxNY4sg3loyuQdWD5qJkFEFHmkOxEQdtC6ukO64Z1LBDKqQ34zFg%2FJgUMYVdgx%2FnOpG2NX5z94mJ7Fb%2B%2FytEFRA8QBmK%2BY%2B3CiKaI84vV0b9bd4zueWWS%2BChpHYkplKJRaMQ6TbBDUIyKoIqq10hu7cFHxD75fImDenfXbpn8lCU9qUAqjXE9e6zdYwx4HHPtsYgmuJUgXqLxJqOndhMHl20EOPRfFqmCExbKSaEnHY1ly2rXtxr1BDAHYM607S%2B7b5jusKEvy9Qi0D0ZXI0eePsuUpq4UYglHvSepUYTa0xSDFnG0kjGVbKQ%2BDULtOQdtiq6UMTlSEcavqVBJa9vKT5tWvF8lP5AfPVoxwwgTRHqrehovH88y45nQTj3ou0hH5MZb%2BIsUMKiWUJPy9KPzqm9bH%2FUaHof%2B%2FHknMT59BcRlxSAfVA8gPcqtyfq%2FlsgQYrw37uyPpTwotznjax4oo5RebJeo7fKMzLIHyvhCQNNizLW40C%2FniLTCY%2BJi%2BBjqkAXI%2FQPJQH9H6OyFun04ZOlXtKETvL5%2BmJpDqu4otBJTLtZ5UtPkBLj133v%2F9OIrtl72F9sgs%2FJTTwCZgW%2BYKpavW%2B%2FJSaXYBudXicSzm9LUNhMr6IwB80M4RMpjqBFzMNnfG1ZX%2Bh0L9cyhWfHCFrIhpEnxynrarIYSfg%2FRQXHxFemIr6s1VoqJolFkAwx7UJd%2BOKGLwg4E9e5dyvMc8YKaTQhIq&X-Amz-Signature=74c6071db519318b11a3beacecfb204d1986e491f7762e0bafeb4972d7bd59b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCM5DGT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm193cn4Dmm%2Felyu%2BZIIC8cxCowwKohFGOTORZIOtozwIhAPVJsxdzw27S3foBcdYCA9zGPQUfuPoQWb8PJtF21JarKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzotmyq67tBA42jXRUq3ANBuNyIzPudawHLIJzxRtYXtDYfb23JekDu8ujksb0WHqBshIeAhmPrIDnsTFfB8dkw8PqWO5aihFuZv8Q3He37%2FnzkmpDkGmV9qWcE%2BYCyXH3Jcss9gCvGTRiE2eNkl%2FTXwvxNY4sg3loyuQdWD5qJkFEFHmkOxEQdtC6ukO64Z1LBDKqQ34zFg%2FJgUMYVdgx%2FnOpG2NX5z94mJ7Fb%2B%2FytEFRA8QBmK%2BY%2B3CiKaI84vV0b9bd4zueWWS%2BChpHYkplKJRaMQ6TbBDUIyKoIqq10hu7cFHxD75fImDenfXbpn8lCU9qUAqjXE9e6zdYwx4HHPtsYgmuJUgXqLxJqOndhMHl20EOPRfFqmCExbKSaEnHY1ly2rXtxr1BDAHYM607S%2B7b5jusKEvy9Qi0D0ZXI0eePsuUpq4UYglHvSepUYTa0xSDFnG0kjGVbKQ%2BDULtOQdtiq6UMTlSEcavqVBJa9vKT5tWvF8lP5AfPVoxwwgTRHqrehovH88y45nQTj3ou0hH5MZb%2BIsUMKiWUJPy9KPzqm9bH%2FUaHof%2B%2FHknMT59BcRlxSAfVA8gPcqtyfq%2FlsgQYrw37uyPpTwotznjax4oo5RebJeo7fKMzLIHyvhCQNNizLW40C%2FniLTCY%2BJi%2BBjqkAXI%2FQPJQH9H6OyFun04ZOlXtKETvL5%2BmJpDqu4otBJTLtZ5UtPkBLj133v%2F9OIrtl72F9sgs%2FJTTwCZgW%2BYKpavW%2B%2FJSaXYBudXicSzm9LUNhMr6IwB80M4RMpjqBFzMNnfG1ZX%2Bh0L9cyhWfHCFrIhpEnxynrarIYSfg%2FRQXHxFemIr6s1VoqJolFkAwx7UJd%2BOKGLwg4E9e5dyvMc8YKaTQhIq&X-Amz-Signature=78b4982c5687fd1f04a58e51c2d176d38cf977d161105c7e07644070f2ca0d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
