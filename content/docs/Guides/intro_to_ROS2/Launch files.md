---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KDOAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPLWQo1jQirLr400PJqbNidewOU4OGsxAC4t9ioyl%2FoAiEA%2BZOvPMb8KCr4A0v58zscrcWSM9u4BOaM9iqBIKtcgoUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhPghuXkSJ%2FyL%2B%2BeSrcAyv1quH0lBYmXA%2BzSh%2FOBBPbLsLmFgxoSb3zWVJUo%2B5fq4LejfFdihCp1xhHPd1%2BXtaRgh3dcM36RAA3cY6hO0Bg%2B35KhENbj5VUBG6909m12rxvOW9DVVSETcLjkYJaQYjAqWQAQR%2BOrJiYxdhgFmDz8vSdr9BbhM0bL8E%2Fms9OlYRB%2BDxPwz8e2SUMIBITWZjvMoRawSwYyVqmWWln8KMn1W7avaUB2F%2FE1y%2FNtSGEmW3umvhq%2FG6ZTvhuSCjefhW2ykhwSOQ1r7SvW1uXguG9J1nXNUFVeHJY2ez2GL6oG7q81VEo5LOPwJ3XjikQ0mlkWM%2FRbdsFzXri6xUBwRwIczk4KwCMYOP2zcV5fOdlogk79uT5%2FItuJt9gIG9WNaGrw%2FzLedFa5%2B9RjeZOKgLKQIl%2BcP7937ZxkaY7pXThMSvuHnUEy4zLTrPBNFFnQxaRUJt5gj14J03U%2B5q2wyIBNvsdv0K%2BSy4tVy%2FbfwhxugyyM4bx4cRlhnQNmids4zNPlm9SW%2F7Q1QyJWJ5cEphl1U7TRYmFuEuNEKilw4Q5yvgPUZ7Az8Bm5HDe2d7gtdIZhEZjVWC%2B5Vrc3Ag99a2NzOSfRD3kOHdYvHGQOEOO5h2FS0OpTUmq%2BsroMJGjqMQGOqUBuljYX7tYexx8%2BJ3ktioV8woHcu95c7PVPX57zPl3obaEEtawgkpYVpH5R9uNkNtBHdM9lc3iTJ%2FJ01zj%2BBeaskEpA9SXyojciqeOZ%2BDDVWEmrK0g6TjoYfBDhz1FIySG1WApERW0CcradYYpuK%2FXAr2KLEmbah4zxqQiXxisnRiSiXJ0M3b3dvcKE1zwUfVRzv0Nj9m5P9oE9fhUoIrUTm2Snxin&X-Amz-Signature=56ecd9c681ba1b8f27d2507d23ff8a37efd31f3fc8526b5979d60d929ac9b41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KDOAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPLWQo1jQirLr400PJqbNidewOU4OGsxAC4t9ioyl%2FoAiEA%2BZOvPMb8KCr4A0v58zscrcWSM9u4BOaM9iqBIKtcgoUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhPghuXkSJ%2FyL%2B%2BeSrcAyv1quH0lBYmXA%2BzSh%2FOBBPbLsLmFgxoSb3zWVJUo%2B5fq4LejfFdihCp1xhHPd1%2BXtaRgh3dcM36RAA3cY6hO0Bg%2B35KhENbj5VUBG6909m12rxvOW9DVVSETcLjkYJaQYjAqWQAQR%2BOrJiYxdhgFmDz8vSdr9BbhM0bL8E%2Fms9OlYRB%2BDxPwz8e2SUMIBITWZjvMoRawSwYyVqmWWln8KMn1W7avaUB2F%2FE1y%2FNtSGEmW3umvhq%2FG6ZTvhuSCjefhW2ykhwSOQ1r7SvW1uXguG9J1nXNUFVeHJY2ez2GL6oG7q81VEo5LOPwJ3XjikQ0mlkWM%2FRbdsFzXri6xUBwRwIczk4KwCMYOP2zcV5fOdlogk79uT5%2FItuJt9gIG9WNaGrw%2FzLedFa5%2B9RjeZOKgLKQIl%2BcP7937ZxkaY7pXThMSvuHnUEy4zLTrPBNFFnQxaRUJt5gj14J03U%2B5q2wyIBNvsdv0K%2BSy4tVy%2FbfwhxugyyM4bx4cRlhnQNmids4zNPlm9SW%2F7Q1QyJWJ5cEphl1U7TRYmFuEuNEKilw4Q5yvgPUZ7Az8Bm5HDe2d7gtdIZhEZjVWC%2B5Vrc3Ag99a2NzOSfRD3kOHdYvHGQOEOO5h2FS0OpTUmq%2BsroMJGjqMQGOqUBuljYX7tYexx8%2BJ3ktioV8woHcu95c7PVPX57zPl3obaEEtawgkpYVpH5R9uNkNtBHdM9lc3iTJ%2FJ01zj%2BBeaskEpA9SXyojciqeOZ%2BDDVWEmrK0g6TjoYfBDhz1FIySG1WApERW0CcradYYpuK%2FXAr2KLEmbah4zxqQiXxisnRiSiXJ0M3b3dvcKE1zwUfVRzv0Nj9m5P9oE9fhUoIrUTm2Snxin&X-Amz-Signature=e108fb4c233c12b2f4efb30b6d921bc177d2a15aeb9d86b9762822396a1e67d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KDOAW4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPLWQo1jQirLr400PJqbNidewOU4OGsxAC4t9ioyl%2FoAiEA%2BZOvPMb8KCr4A0v58zscrcWSM9u4BOaM9iqBIKtcgoUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhPghuXkSJ%2FyL%2B%2BeSrcAyv1quH0lBYmXA%2BzSh%2FOBBPbLsLmFgxoSb3zWVJUo%2B5fq4LejfFdihCp1xhHPd1%2BXtaRgh3dcM36RAA3cY6hO0Bg%2B35KhENbj5VUBG6909m12rxvOW9DVVSETcLjkYJaQYjAqWQAQR%2BOrJiYxdhgFmDz8vSdr9BbhM0bL8E%2Fms9OlYRB%2BDxPwz8e2SUMIBITWZjvMoRawSwYyVqmWWln8KMn1W7avaUB2F%2FE1y%2FNtSGEmW3umvhq%2FG6ZTvhuSCjefhW2ykhwSOQ1r7SvW1uXguG9J1nXNUFVeHJY2ez2GL6oG7q81VEo5LOPwJ3XjikQ0mlkWM%2FRbdsFzXri6xUBwRwIczk4KwCMYOP2zcV5fOdlogk79uT5%2FItuJt9gIG9WNaGrw%2FzLedFa5%2B9RjeZOKgLKQIl%2BcP7937ZxkaY7pXThMSvuHnUEy4zLTrPBNFFnQxaRUJt5gj14J03U%2B5q2wyIBNvsdv0K%2BSy4tVy%2FbfwhxugyyM4bx4cRlhnQNmids4zNPlm9SW%2F7Q1QyJWJ5cEphl1U7TRYmFuEuNEKilw4Q5yvgPUZ7Az8Bm5HDe2d7gtdIZhEZjVWC%2B5Vrc3Ag99a2NzOSfRD3kOHdYvHGQOEOO5h2FS0OpTUmq%2BsroMJGjqMQGOqUBuljYX7tYexx8%2BJ3ktioV8woHcu95c7PVPX57zPl3obaEEtawgkpYVpH5R9uNkNtBHdM9lc3iTJ%2FJ01zj%2BBeaskEpA9SXyojciqeOZ%2BDDVWEmrK0g6TjoYfBDhz1FIySG1WApERW0CcradYYpuK%2FXAr2KLEmbah4zxqQiXxisnRiSiXJ0M3b3dvcKE1zwUfVRzv0Nj9m5P9oE9fhUoIrUTm2Snxin&X-Amz-Signature=fd4ba34e32d548b1156eacb60ecf8103d8db06cd0f2db890e41e01d3f7b41656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
