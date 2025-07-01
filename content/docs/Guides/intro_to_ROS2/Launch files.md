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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOM5TNE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWlJ%2FaJtAYRRSgymYsXtBr3RSykurilhFaufL0YbPPEwIgJbZMqex%2FUf94aNr0xh76qugtFxoRwDZ%2BC2RQw91xoa0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZXLhTVjBiFAhtgmircA%2FkxozMvgxJVkFt2K%2BkhWjbNTPJKBDqt3N4c%2B3uVcK%2BKisfxsxqvmwobCleyvNEn6y%2FOwURd7OlPeDH6jFN9xOhj7P5vkV9RPQsq7bizLBN%2B%2FgctrAwRjpRUgfRf2cYxjg0Wx4CmC4BMayZxNcDCy5xrsU4G7pJUQ9oJtXcHa0DjR1%2F8s4b9vYfdNRo%2FtKQVKJqw3SR5J1TdBjmbK7xOzogqdrQVXGagrUzEUa8MKtPkUZGJ839yG18zE%2BcfZOG32%2FfYBBS8yvd3BNool6xIgmoJnpOIYGI4M2M8LYkLuwNsRxgEkXiw9Prog%2BhFwlbQv7p2fRdLs5X4UC0hiJ01TWxkDREzRZzzg02ppHoiKoUB7jv4wj9Tj1Lpsvf%2FCk0LDrrsKwEowYXLwv%2B2RCjLeIAKYKXVEPYqPUBpnEGbpiuEEZXO%2FxrNXnon3URe71iEUb7uZ7JsPb08T0hnP7NAc3vm2kvUZCQOBWtkXgH1N7MIeP8LO%2FgV%2Bh7SkgxxDg%2Bn%2BhPJXKgLuhHPl27Ntz2GkjNuujfE4CJt3ortLv96FNUg8wlAOokJE9wqJiy7jb9Wy%2F3v6xZTIjik64BJfGv1PhQMdzN2iTgg%2BinAZCsbjhlCrrvm8cHi67Qx6RlgMKXZj8MGOqUB5VQc%2BatlO7QhClrw4OlrkBkT0GV5xTfwaZPF4cCe3VSJ6J8AKmrMROAjTbKlOTFnm%2BCSSLJ8k9jsRT0TZzOj0%2FrC6TXk6swe8DfApLK5lKAYIpLke5AvuJI9NPFw3AYoHBbQ5MvV%2BIktTfxASzz%2B0mbS41GHFdSOML2zxMTU2AEDhLYxVPmrd1PrzME5dgEiQxkE9Cxds5xJgQ%2FGWfUzldy0bGJT&X-Amz-Signature=22be000e221a0788bf43ae3f779dc5b5f59d72d068fb789ec23992a691dd1157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOM5TNE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWlJ%2FaJtAYRRSgymYsXtBr3RSykurilhFaufL0YbPPEwIgJbZMqex%2FUf94aNr0xh76qugtFxoRwDZ%2BC2RQw91xoa0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZXLhTVjBiFAhtgmircA%2FkxozMvgxJVkFt2K%2BkhWjbNTPJKBDqt3N4c%2B3uVcK%2BKisfxsxqvmwobCleyvNEn6y%2FOwURd7OlPeDH6jFN9xOhj7P5vkV9RPQsq7bizLBN%2B%2FgctrAwRjpRUgfRf2cYxjg0Wx4CmC4BMayZxNcDCy5xrsU4G7pJUQ9oJtXcHa0DjR1%2F8s4b9vYfdNRo%2FtKQVKJqw3SR5J1TdBjmbK7xOzogqdrQVXGagrUzEUa8MKtPkUZGJ839yG18zE%2BcfZOG32%2FfYBBS8yvd3BNool6xIgmoJnpOIYGI4M2M8LYkLuwNsRxgEkXiw9Prog%2BhFwlbQv7p2fRdLs5X4UC0hiJ01TWxkDREzRZzzg02ppHoiKoUB7jv4wj9Tj1Lpsvf%2FCk0LDrrsKwEowYXLwv%2B2RCjLeIAKYKXVEPYqPUBpnEGbpiuEEZXO%2FxrNXnon3URe71iEUb7uZ7JsPb08T0hnP7NAc3vm2kvUZCQOBWtkXgH1N7MIeP8LO%2FgV%2Bh7SkgxxDg%2Bn%2BhPJXKgLuhHPl27Ntz2GkjNuujfE4CJt3ortLv96FNUg8wlAOokJE9wqJiy7jb9Wy%2F3v6xZTIjik64BJfGv1PhQMdzN2iTgg%2BinAZCsbjhlCrrvm8cHi67Qx6RlgMKXZj8MGOqUB5VQc%2BatlO7QhClrw4OlrkBkT0GV5xTfwaZPF4cCe3VSJ6J8AKmrMROAjTbKlOTFnm%2BCSSLJ8k9jsRT0TZzOj0%2FrC6TXk6swe8DfApLK5lKAYIpLke5AvuJI9NPFw3AYoHBbQ5MvV%2BIktTfxASzz%2B0mbS41GHFdSOML2zxMTU2AEDhLYxVPmrd1PrzME5dgEiQxkE9Cxds5xJgQ%2FGWfUzldy0bGJT&X-Amz-Signature=d1aebcbd8381a4c372c9919b132b174e75eb2f9e09f83f7229d37dc7740dbdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOM5TNE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWlJ%2FaJtAYRRSgymYsXtBr3RSykurilhFaufL0YbPPEwIgJbZMqex%2FUf94aNr0xh76qugtFxoRwDZ%2BC2RQw91xoa0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZXLhTVjBiFAhtgmircA%2FkxozMvgxJVkFt2K%2BkhWjbNTPJKBDqt3N4c%2B3uVcK%2BKisfxsxqvmwobCleyvNEn6y%2FOwURd7OlPeDH6jFN9xOhj7P5vkV9RPQsq7bizLBN%2B%2FgctrAwRjpRUgfRf2cYxjg0Wx4CmC4BMayZxNcDCy5xrsU4G7pJUQ9oJtXcHa0DjR1%2F8s4b9vYfdNRo%2FtKQVKJqw3SR5J1TdBjmbK7xOzogqdrQVXGagrUzEUa8MKtPkUZGJ839yG18zE%2BcfZOG32%2FfYBBS8yvd3BNool6xIgmoJnpOIYGI4M2M8LYkLuwNsRxgEkXiw9Prog%2BhFwlbQv7p2fRdLs5X4UC0hiJ01TWxkDREzRZzzg02ppHoiKoUB7jv4wj9Tj1Lpsvf%2FCk0LDrrsKwEowYXLwv%2B2RCjLeIAKYKXVEPYqPUBpnEGbpiuEEZXO%2FxrNXnon3URe71iEUb7uZ7JsPb08T0hnP7NAc3vm2kvUZCQOBWtkXgH1N7MIeP8LO%2FgV%2Bh7SkgxxDg%2Bn%2BhPJXKgLuhHPl27Ntz2GkjNuujfE4CJt3ortLv96FNUg8wlAOokJE9wqJiy7jb9Wy%2F3v6xZTIjik64BJfGv1PhQMdzN2iTgg%2BinAZCsbjhlCrrvm8cHi67Qx6RlgMKXZj8MGOqUB5VQc%2BatlO7QhClrw4OlrkBkT0GV5xTfwaZPF4cCe3VSJ6J8AKmrMROAjTbKlOTFnm%2BCSSLJ8k9jsRT0TZzOj0%2FrC6TXk6swe8DfApLK5lKAYIpLke5AvuJI9NPFw3AYoHBbQ5MvV%2BIktTfxASzz%2B0mbS41GHFdSOML2zxMTU2AEDhLYxVPmrd1PrzME5dgEiQxkE9Cxds5xJgQ%2FGWfUzldy0bGJT&X-Amz-Signature=4e2eea011ff4574931f464dcd48728fb8b7141affc1a63c865b12ab12101a828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
