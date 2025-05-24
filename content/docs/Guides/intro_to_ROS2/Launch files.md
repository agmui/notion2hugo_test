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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GTC5XY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCBHR4S8GSiu9Ug1Zdo5JOD8PN2pelqWJd4vMGqZ4Ko3wIgaSZUCL3gUs0X74ddf2TVLFB9jrQEqajkDyoQaT84gLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWiijL9fAt%2BMuLQUCrcA%2BGYllntU26Rj82%2B6XVDHoSo01np3tgL1oE7phRbOAsC8ms0MiVHt6s%2FxcUDquOe5iTw1pBKaqqcn%2FAgnS4OG0VTQl95cdLo9491xV8SBi%2FCQLlCvytBsoZwBIOLeIJUlpC4H8OoQ9VEb8HRqbcF1zeZcROgLVVLU6tdUklqczHkPfK3EYt37EfjQtGr6Wq3qwTOsxrJUQkDfIHqn55ZcsUeM4AmdPCvE9Gv57xgwGQeCsc4jaQVGrPCVVZdLvEzoHh5yjcPl1hS04Hq9CQ5m8xuDp4xf0w9XZscSWky5tfxLSvMYAp2%2BiZ7zS8NwlhNpSjE%2B0in3%2BVWl2KBe2lQHn49bN0AE1pbNe0Fm2KFWfNx%2FgUC1Qroirl0lljPpIwufNcOa3913%2Ft66q0WunBt4nc7vjfVfqqwzJM1L4LFE5rmHatBX5WM7G2WB4gZ%2BL2vDgLE9WkT1ithGQX8eAk3O9zRwOyBvYX0EYoRq57VA5Z%2FD%2FyOHO3xPtaY4akbjwFgW7e6OqOTYD4c3BUhHUZ2oLDR%2FR31pyN14SHf9vCRI0X8BZ15Rmrh3tZglSvVqpPiPVEKA5ULG7Ll%2FXwRtl9M6BFuLZMx6KTV%2FjqQOaTcP7w4wkFLz05Xf08fZCvZMKXSxsEGOqUBDvjPgoXBBx0lrSe1mDcjrdpE%2F%2FheeDwin4SzFGyE3PQw0aJ6Ezjjtb3IOL0ifjT8FxX5HQe2BHHZLQO66DNIxGWfkJCsWmHnqKJsw5HDrGhGfkjTGZB1G47tjXG2Q6bh2RfAfJXXC7onM%2FeFJI2H70U9VbYF80NTfEiIOJ2jIGtatxHpr9JyG8WAsTBBuDSRtiHEW%2B6IjzAmpUmE8O0otn66hJlU&X-Amz-Signature=bfd58589699ca1d6d1b671fc674d7c06ab189ab07d743c1bf98abe370183353a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GTC5XY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCBHR4S8GSiu9Ug1Zdo5JOD8PN2pelqWJd4vMGqZ4Ko3wIgaSZUCL3gUs0X74ddf2TVLFB9jrQEqajkDyoQaT84gLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWiijL9fAt%2BMuLQUCrcA%2BGYllntU26Rj82%2B6XVDHoSo01np3tgL1oE7phRbOAsC8ms0MiVHt6s%2FxcUDquOe5iTw1pBKaqqcn%2FAgnS4OG0VTQl95cdLo9491xV8SBi%2FCQLlCvytBsoZwBIOLeIJUlpC4H8OoQ9VEb8HRqbcF1zeZcROgLVVLU6tdUklqczHkPfK3EYt37EfjQtGr6Wq3qwTOsxrJUQkDfIHqn55ZcsUeM4AmdPCvE9Gv57xgwGQeCsc4jaQVGrPCVVZdLvEzoHh5yjcPl1hS04Hq9CQ5m8xuDp4xf0w9XZscSWky5tfxLSvMYAp2%2BiZ7zS8NwlhNpSjE%2B0in3%2BVWl2KBe2lQHn49bN0AE1pbNe0Fm2KFWfNx%2FgUC1Qroirl0lljPpIwufNcOa3913%2Ft66q0WunBt4nc7vjfVfqqwzJM1L4LFE5rmHatBX5WM7G2WB4gZ%2BL2vDgLE9WkT1ithGQX8eAk3O9zRwOyBvYX0EYoRq57VA5Z%2FD%2FyOHO3xPtaY4akbjwFgW7e6OqOTYD4c3BUhHUZ2oLDR%2FR31pyN14SHf9vCRI0X8BZ15Rmrh3tZglSvVqpPiPVEKA5ULG7Ll%2FXwRtl9M6BFuLZMx6KTV%2FjqQOaTcP7w4wkFLz05Xf08fZCvZMKXSxsEGOqUBDvjPgoXBBx0lrSe1mDcjrdpE%2F%2FheeDwin4SzFGyE3PQw0aJ6Ezjjtb3IOL0ifjT8FxX5HQe2BHHZLQO66DNIxGWfkJCsWmHnqKJsw5HDrGhGfkjTGZB1G47tjXG2Q6bh2RfAfJXXC7onM%2FeFJI2H70U9VbYF80NTfEiIOJ2jIGtatxHpr9JyG8WAsTBBuDSRtiHEW%2B6IjzAmpUmE8O0otn66hJlU&X-Amz-Signature=ae1e01eb5c8cf3da9120ec863469d185ae45bfc23b8dedd768d176a9b454c504&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GTC5XY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCBHR4S8GSiu9Ug1Zdo5JOD8PN2pelqWJd4vMGqZ4Ko3wIgaSZUCL3gUs0X74ddf2TVLFB9jrQEqajkDyoQaT84gLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWiijL9fAt%2BMuLQUCrcA%2BGYllntU26Rj82%2B6XVDHoSo01np3tgL1oE7phRbOAsC8ms0MiVHt6s%2FxcUDquOe5iTw1pBKaqqcn%2FAgnS4OG0VTQl95cdLo9491xV8SBi%2FCQLlCvytBsoZwBIOLeIJUlpC4H8OoQ9VEb8HRqbcF1zeZcROgLVVLU6tdUklqczHkPfK3EYt37EfjQtGr6Wq3qwTOsxrJUQkDfIHqn55ZcsUeM4AmdPCvE9Gv57xgwGQeCsc4jaQVGrPCVVZdLvEzoHh5yjcPl1hS04Hq9CQ5m8xuDp4xf0w9XZscSWky5tfxLSvMYAp2%2BiZ7zS8NwlhNpSjE%2B0in3%2BVWl2KBe2lQHn49bN0AE1pbNe0Fm2KFWfNx%2FgUC1Qroirl0lljPpIwufNcOa3913%2Ft66q0WunBt4nc7vjfVfqqwzJM1L4LFE5rmHatBX5WM7G2WB4gZ%2BL2vDgLE9WkT1ithGQX8eAk3O9zRwOyBvYX0EYoRq57VA5Z%2FD%2FyOHO3xPtaY4akbjwFgW7e6OqOTYD4c3BUhHUZ2oLDR%2FR31pyN14SHf9vCRI0X8BZ15Rmrh3tZglSvVqpPiPVEKA5ULG7Ll%2FXwRtl9M6BFuLZMx6KTV%2FjqQOaTcP7w4wkFLz05Xf08fZCvZMKXSxsEGOqUBDvjPgoXBBx0lrSe1mDcjrdpE%2F%2FheeDwin4SzFGyE3PQw0aJ6Ezjjtb3IOL0ifjT8FxX5HQe2BHHZLQO66DNIxGWfkJCsWmHnqKJsw5HDrGhGfkjTGZB1G47tjXG2Q6bh2RfAfJXXC7onM%2FeFJI2H70U9VbYF80NTfEiIOJ2jIGtatxHpr9JyG8WAsTBBuDSRtiHEW%2B6IjzAmpUmE8O0otn66hJlU&X-Amz-Signature=0f85f30c679ac688e6fb16b67d8e443a872424d87b4c2d729424fe0ae41e669c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
