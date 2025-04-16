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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPP3BSK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkvQRYTdRa4ryXhk8BwmfTC%2BwW0J0ugsexw9rIsRMzAiBgQtYh7388Q0KsbFZ8JT%2FyXC7qMOo6Xk%2BE%2BAp8UyGgTCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMlPWN6IG0ppXqTqQ5KtwDHXuISiexBcqDSJYdRNFab4IrAEi51Inf7DN0IUx%2Ft0oHWNola%2Bn3YH14uC3PSmzarKzgat%2Fq8IIl%2FiqsyxvzHufTg68VuIN7G0xjla4xbvwMp1NC8NG8Pw6RhVWZs5fWHZ0VVgdmJweRk9g0UO4iMKcm2lgpSfwlazBOisMvOKSm4LYveGn8saHMgFXQNNJ3p3%2FKr6MoucjervXLUR2mM9NhguAxUp89MbYZDHEuPCQnp4Jj1XK1PPG1gNEJkNAgygb%2Bh5cUlYXFfLxNjXzS4ESb6uhT7HCDSxHTImfVJuZ75QS%2Bm5paOjUTw%2B1Q%2BFV0YRBhfIe2w2DeaYP71mMCviw2LErEmR4fCAZOWOf9HUNz9tlgMwTCOAsiTbKR5xnAQWk3dKjFBBWXn%2BIBZvnGo0yoxdTE1SK%2FnOFQcP%2Bs5ynTyTS0cJd5JSvlbO1QaA2HdZAD%2B%2BZ32pleDs2UD6pd5SsSYVW3fkcA%2F8TN7AL%2B33lSb22czs407axyAuvmDaGKLBE56v29DMPlgKto9xLl9zzlPzZAkIEGh6arAq3dDuRw5%2BR6zABRK6w5MyeU2UkY93x%2BlMkzpLHfjagaIrvhvG85F7Thy1oPkzlLJXzwZDaCf6qH1V72W%2F%2FORlkwzsb%2FvwY6pgF%2Bwkxkl%2BmZxmHIMToB58GLgIIW9M5TG4byGi5UZ%2FgoImb22qUBj608YBWxB4o6dDKQinehJeyguNBaxtPoVFST%2Ff1KhvlZ1DbFd1YX5O9oWoszFVOx67Bl4laUhYLsOlPUZpi8ldDstbyhK7H9OWmxbV2Rd7pZZSXtNLm6UjNdwwbE5DRcWJHJHYc0Jc8ZLA5mbahIZby4%2FHV8waronlXVXBj7r7UV&X-Amz-Signature=2d34bcf8ed7a4eae7ee9c65dc82be1c0df02aa78075c7b8784c3f711af2dc9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPP3BSK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkvQRYTdRa4ryXhk8BwmfTC%2BwW0J0ugsexw9rIsRMzAiBgQtYh7388Q0KsbFZ8JT%2FyXC7qMOo6Xk%2BE%2BAp8UyGgTCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMlPWN6IG0ppXqTqQ5KtwDHXuISiexBcqDSJYdRNFab4IrAEi51Inf7DN0IUx%2Ft0oHWNola%2Bn3YH14uC3PSmzarKzgat%2Fq8IIl%2FiqsyxvzHufTg68VuIN7G0xjla4xbvwMp1NC8NG8Pw6RhVWZs5fWHZ0VVgdmJweRk9g0UO4iMKcm2lgpSfwlazBOisMvOKSm4LYveGn8saHMgFXQNNJ3p3%2FKr6MoucjervXLUR2mM9NhguAxUp89MbYZDHEuPCQnp4Jj1XK1PPG1gNEJkNAgygb%2Bh5cUlYXFfLxNjXzS4ESb6uhT7HCDSxHTImfVJuZ75QS%2Bm5paOjUTw%2B1Q%2BFV0YRBhfIe2w2DeaYP71mMCviw2LErEmR4fCAZOWOf9HUNz9tlgMwTCOAsiTbKR5xnAQWk3dKjFBBWXn%2BIBZvnGo0yoxdTE1SK%2FnOFQcP%2Bs5ynTyTS0cJd5JSvlbO1QaA2HdZAD%2B%2BZ32pleDs2UD6pd5SsSYVW3fkcA%2F8TN7AL%2B33lSb22czs407axyAuvmDaGKLBE56v29DMPlgKto9xLl9zzlPzZAkIEGh6arAq3dDuRw5%2BR6zABRK6w5MyeU2UkY93x%2BlMkzpLHfjagaIrvhvG85F7Thy1oPkzlLJXzwZDaCf6qH1V72W%2F%2FORlkwzsb%2FvwY6pgF%2Bwkxkl%2BmZxmHIMToB58GLgIIW9M5TG4byGi5UZ%2FgoImb22qUBj608YBWxB4o6dDKQinehJeyguNBaxtPoVFST%2Ff1KhvlZ1DbFd1YX5O9oWoszFVOx67Bl4laUhYLsOlPUZpi8ldDstbyhK7H9OWmxbV2Rd7pZZSXtNLm6UjNdwwbE5DRcWJHJHYc0Jc8ZLA5mbahIZby4%2FHV8waronlXVXBj7r7UV&X-Amz-Signature=46beb15d675010acac0fde07cd06656d85005c3fc77d29b156892baf59b63117&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPP3BSK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkvQRYTdRa4ryXhk8BwmfTC%2BwW0J0ugsexw9rIsRMzAiBgQtYh7388Q0KsbFZ8JT%2FyXC7qMOo6Xk%2BE%2BAp8UyGgTCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMlPWN6IG0ppXqTqQ5KtwDHXuISiexBcqDSJYdRNFab4IrAEi51Inf7DN0IUx%2Ft0oHWNola%2Bn3YH14uC3PSmzarKzgat%2Fq8IIl%2FiqsyxvzHufTg68VuIN7G0xjla4xbvwMp1NC8NG8Pw6RhVWZs5fWHZ0VVgdmJweRk9g0UO4iMKcm2lgpSfwlazBOisMvOKSm4LYveGn8saHMgFXQNNJ3p3%2FKr6MoucjervXLUR2mM9NhguAxUp89MbYZDHEuPCQnp4Jj1XK1PPG1gNEJkNAgygb%2Bh5cUlYXFfLxNjXzS4ESb6uhT7HCDSxHTImfVJuZ75QS%2Bm5paOjUTw%2B1Q%2BFV0YRBhfIe2w2DeaYP71mMCviw2LErEmR4fCAZOWOf9HUNz9tlgMwTCOAsiTbKR5xnAQWk3dKjFBBWXn%2BIBZvnGo0yoxdTE1SK%2FnOFQcP%2Bs5ynTyTS0cJd5JSvlbO1QaA2HdZAD%2B%2BZ32pleDs2UD6pd5SsSYVW3fkcA%2F8TN7AL%2B33lSb22czs407axyAuvmDaGKLBE56v29DMPlgKto9xLl9zzlPzZAkIEGh6arAq3dDuRw5%2BR6zABRK6w5MyeU2UkY93x%2BlMkzpLHfjagaIrvhvG85F7Thy1oPkzlLJXzwZDaCf6qH1V72W%2F%2FORlkwzsb%2FvwY6pgF%2Bwkxkl%2BmZxmHIMToB58GLgIIW9M5TG4byGi5UZ%2FgoImb22qUBj608YBWxB4o6dDKQinehJeyguNBaxtPoVFST%2Ff1KhvlZ1DbFd1YX5O9oWoszFVOx67Bl4laUhYLsOlPUZpi8ldDstbyhK7H9OWmxbV2Rd7pZZSXtNLm6UjNdwwbE5DRcWJHJHYc0Jc8ZLA5mbahIZby4%2FHV8waronlXVXBj7r7UV&X-Amz-Signature=68fea6d930a4a8142a3da725f12d1bd776d28ce1e9f29ac6d0e9e74405161ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
