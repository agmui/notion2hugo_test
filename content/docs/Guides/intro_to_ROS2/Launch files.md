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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=a01791c2ac2c4b4d374463d2899b9813e74fbcbd15d2fcabcb76b3f940ab2576&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=874400cea34fa6d783199361cc50c39c239caeb4c96795cfa5ebf0154bdb4aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=0baadaad5d29bfdee1e87eaf7b2c8f1209aa85b8ab3744350981850f2aa20183&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
