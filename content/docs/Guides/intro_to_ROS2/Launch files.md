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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMY4RAE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDjdPWfxRqlWAS%2FkRtAu282ax9x1D8MC3Xbb5s%2FN0z2uQIhAPZ9r5itdWcTtXhOm37%2FWhVb3w9Oe3zRU8OPrAVSrLSYKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEF2%2B8rxdnJ0Db7rMq3AMtvWHz7dCSAbEH42SfLnajqDKs%2Fos0Iiz50BUrMoE8QOOS6zz%2B%2FrNUQ5NIet8EZ6r5kqCGwFwI9Ey42nrS9lTpp90ikquMjltuSUcQ2nOJsAuj5nY4w%2BfIp9C5WpvpauN2uk684nE5cnnxQW45Whia7PNrLGLp7J2d7mT5KlT3sBUgKZzGpGTnPnyUYnxI4QJc0ZEyKGmtFZ0vpjjx%2FsGJwrWETYQnQrzOpovtDuBqiFs1ivnL2CQnhqG5i5UwPwyOeLuHNLiLGgjkeOmc6mDcvnbDQsu9SaKly06MuMgxocAJM7039M2CkrcLi5dyg3B7%2Fl19dMQ2H0yDJZF3luFIGc%2BpUZpjx9N6TjzNflzqcl0hgjFsg6znfbQsg6QG6nt5B9t09dlnjptyE%2BKKpwVPW2uHP%2FrWduHPy5gGeFyktFY%2Bb0TfATv78J6z3T%2Byd3BucEfzGJIjGS%2BU2Cbkojjd51FqEkGlB6rionDe2FgrqtjPhQg%2Bw4ZnGAOOhwtr6Dz2TxQOQmfYUM%2BnKmPq1v4IUN4CjqLW8o%2FARKBpRY%2FT9%2FZ3JasLYH5YS4WES20TYaNVUrw7ng%2BAxakhg0LrE%2FzdwaikpdUSukJ69TdTalf79xQbtmoPnPz%2FIWn7pzCvuYHBBjqkAeRMPfhRa4BnqxIgd3bqfh9lui6TXqA3hsmdqReZnSCzosreGiJ9%2FDsPYjEmUyswi0c01GHMLoAPzYuFbr4V4ClM%2Fh6DCpTE9Uw9IJP1zYffI5QxaTxhQe5bXkHV4vZQbMviWz%2BaHb%2FUqjjc9d0bQ7fxBy2zOIbwI5dCxoojou1lxJb2wmTQSKNZRuN9Ma8Hm8Psm16ve20lxJwsYuyNC5Aph4%2Fo&X-Amz-Signature=cfad817e2044b1e75f87877627f7d4e79b74aaaa14fd300e738c077e8e655b53&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMY4RAE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDjdPWfxRqlWAS%2FkRtAu282ax9x1D8MC3Xbb5s%2FN0z2uQIhAPZ9r5itdWcTtXhOm37%2FWhVb3w9Oe3zRU8OPrAVSrLSYKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEF2%2B8rxdnJ0Db7rMq3AMtvWHz7dCSAbEH42SfLnajqDKs%2Fos0Iiz50BUrMoE8QOOS6zz%2B%2FrNUQ5NIet8EZ6r5kqCGwFwI9Ey42nrS9lTpp90ikquMjltuSUcQ2nOJsAuj5nY4w%2BfIp9C5WpvpauN2uk684nE5cnnxQW45Whia7PNrLGLp7J2d7mT5KlT3sBUgKZzGpGTnPnyUYnxI4QJc0ZEyKGmtFZ0vpjjx%2FsGJwrWETYQnQrzOpovtDuBqiFs1ivnL2CQnhqG5i5UwPwyOeLuHNLiLGgjkeOmc6mDcvnbDQsu9SaKly06MuMgxocAJM7039M2CkrcLi5dyg3B7%2Fl19dMQ2H0yDJZF3luFIGc%2BpUZpjx9N6TjzNflzqcl0hgjFsg6znfbQsg6QG6nt5B9t09dlnjptyE%2BKKpwVPW2uHP%2FrWduHPy5gGeFyktFY%2Bb0TfATv78J6z3T%2Byd3BucEfzGJIjGS%2BU2Cbkojjd51FqEkGlB6rionDe2FgrqtjPhQg%2Bw4ZnGAOOhwtr6Dz2TxQOQmfYUM%2BnKmPq1v4IUN4CjqLW8o%2FARKBpRY%2FT9%2FZ3JasLYH5YS4WES20TYaNVUrw7ng%2BAxakhg0LrE%2FzdwaikpdUSukJ69TdTalf79xQbtmoPnPz%2FIWn7pzCvuYHBBjqkAeRMPfhRa4BnqxIgd3bqfh9lui6TXqA3hsmdqReZnSCzosreGiJ9%2FDsPYjEmUyswi0c01GHMLoAPzYuFbr4V4ClM%2Fh6DCpTE9Uw9IJP1zYffI5QxaTxhQe5bXkHV4vZQbMviWz%2BaHb%2FUqjjc9d0bQ7fxBy2zOIbwI5dCxoojou1lxJb2wmTQSKNZRuN9Ma8Hm8Psm16ve20lxJwsYuyNC5Aph4%2Fo&X-Amz-Signature=9ef8135854036af94f678a8253702744a96c6d1f169abf5057acd2af3391b5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMY4RAE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDjdPWfxRqlWAS%2FkRtAu282ax9x1D8MC3Xbb5s%2FN0z2uQIhAPZ9r5itdWcTtXhOm37%2FWhVb3w9Oe3zRU8OPrAVSrLSYKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEF2%2B8rxdnJ0Db7rMq3AMtvWHz7dCSAbEH42SfLnajqDKs%2Fos0Iiz50BUrMoE8QOOS6zz%2B%2FrNUQ5NIet8EZ6r5kqCGwFwI9Ey42nrS9lTpp90ikquMjltuSUcQ2nOJsAuj5nY4w%2BfIp9C5WpvpauN2uk684nE5cnnxQW45Whia7PNrLGLp7J2d7mT5KlT3sBUgKZzGpGTnPnyUYnxI4QJc0ZEyKGmtFZ0vpjjx%2FsGJwrWETYQnQrzOpovtDuBqiFs1ivnL2CQnhqG5i5UwPwyOeLuHNLiLGgjkeOmc6mDcvnbDQsu9SaKly06MuMgxocAJM7039M2CkrcLi5dyg3B7%2Fl19dMQ2H0yDJZF3luFIGc%2BpUZpjx9N6TjzNflzqcl0hgjFsg6znfbQsg6QG6nt5B9t09dlnjptyE%2BKKpwVPW2uHP%2FrWduHPy5gGeFyktFY%2Bb0TfATv78J6z3T%2Byd3BucEfzGJIjGS%2BU2Cbkojjd51FqEkGlB6rionDe2FgrqtjPhQg%2Bw4ZnGAOOhwtr6Dz2TxQOQmfYUM%2BnKmPq1v4IUN4CjqLW8o%2FARKBpRY%2FT9%2FZ3JasLYH5YS4WES20TYaNVUrw7ng%2BAxakhg0LrE%2FzdwaikpdUSukJ69TdTalf79xQbtmoPnPz%2FIWn7pzCvuYHBBjqkAeRMPfhRa4BnqxIgd3bqfh9lui6TXqA3hsmdqReZnSCzosreGiJ9%2FDsPYjEmUyswi0c01GHMLoAPzYuFbr4V4ClM%2Fh6DCpTE9Uw9IJP1zYffI5QxaTxhQe5bXkHV4vZQbMviWz%2BaHb%2FUqjjc9d0bQ7fxBy2zOIbwI5dCxoojou1lxJb2wmTQSKNZRuN9Ma8Hm8Psm16ve20lxJwsYuyNC5Aph4%2Fo&X-Amz-Signature=5a7d75c7f6da95dd8950777b508fb347dea4398c3d1b3c1bb53b4ea19f4ccb42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
