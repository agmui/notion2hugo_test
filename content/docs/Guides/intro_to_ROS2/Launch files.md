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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZIQDPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQL85zhfImjbckVjcQ84Sx2JZ6hPPe0cBtm2iSRuDEEAiB0rjd%2FA%2Fb2BQuPBc924m29%2BG8gfJB6YsKubUGVGV%2FvzSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM2iAC7SpYSIJzuWwGKtwDkwtPZzycGW0aZ9Kux41HiXL1XuJkHDFOLfSvTGAYunrdZQ%2BGUw%2BZsFOpHSkMDTVSw7ax1bM0EmbmoY1k16DakrFdMGt%2Fhnn7zvZgQLfhMiprYd1tAtGzn37xuwigzGjckuRNFlt2IU1%2B8I7cRmrJkK92zrtXVEPQAQOvb86BuQMGNZ%2F3yZFKgSUkKN7LV9EO6yaDOYkDxxDfmXyZ5xprcTK%2BSv9OAEygl8CqDe3Y%2BJGj%2FAy3QUSZnlsLztiaGi10XtvKU7a4tanbHDfOTy6TSDaeOvr98do2JnrLmq4uVMFiEKtltpzOhJXtKXjErZk7J3g9UMRnoTGTRtp1%2BvWWOgm5R6VPrzm95igSkeM9bOT%2Fnk2%2FKw%2BNOF%2BhMthXYDMylREBE4av6qWpp6UgQmzKiq0F6qtvqsLylBt9HE2LtUe389EKKcnV5loKwIP%2B0ZZqob7JuhW5XGxYN4rVppNTzlBxKtLfTdMkSxj8ZhYIWJpfDpeIWvip5oH8NfVPZzEeJ9Pg%2BVwdLrnlByLgtl9xgYj8ecZm6dKynOJtKHOBwU6fY092ygI1YXC%2BFcYnFrDY3FLrUxjvmWd7rnx%2BvCm2Xuq7Ep1w2tCzMTCytKkgEZc%2FO0fyuoQEAtMTcBkw7tqUvwY6pgFdvZJCXUzIdikhoXvA7SQlVR%2FcOLSq3tK0dYbQ3YKnmehTSeZJZJzptklQWjbnJgxvoILTKXrJS%2B%2FiNFy2cdpou5dnN2aMzlv8pP%2BvXRjqPT5j6A0GVl5UThs0qsgh%2BTSeGKrKolfiQZEwsYtNxnBWtp6q1INU1plskVuwkpTB9VWnCgqv9xotkWidsNIjXcwwe1v9CsrISLJdWHr4Zm17KXXAiCRu&X-Amz-Signature=84ec1e40ed09d72bdaa01064a4ef4bf95f1304bf763e0befc47cdc4e1fdf2303&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZIQDPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQL85zhfImjbckVjcQ84Sx2JZ6hPPe0cBtm2iSRuDEEAiB0rjd%2FA%2Fb2BQuPBc924m29%2BG8gfJB6YsKubUGVGV%2FvzSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM2iAC7SpYSIJzuWwGKtwDkwtPZzycGW0aZ9Kux41HiXL1XuJkHDFOLfSvTGAYunrdZQ%2BGUw%2BZsFOpHSkMDTVSw7ax1bM0EmbmoY1k16DakrFdMGt%2Fhnn7zvZgQLfhMiprYd1tAtGzn37xuwigzGjckuRNFlt2IU1%2B8I7cRmrJkK92zrtXVEPQAQOvb86BuQMGNZ%2F3yZFKgSUkKN7LV9EO6yaDOYkDxxDfmXyZ5xprcTK%2BSv9OAEygl8CqDe3Y%2BJGj%2FAy3QUSZnlsLztiaGi10XtvKU7a4tanbHDfOTy6TSDaeOvr98do2JnrLmq4uVMFiEKtltpzOhJXtKXjErZk7J3g9UMRnoTGTRtp1%2BvWWOgm5R6VPrzm95igSkeM9bOT%2Fnk2%2FKw%2BNOF%2BhMthXYDMylREBE4av6qWpp6UgQmzKiq0F6qtvqsLylBt9HE2LtUe389EKKcnV5loKwIP%2B0ZZqob7JuhW5XGxYN4rVppNTzlBxKtLfTdMkSxj8ZhYIWJpfDpeIWvip5oH8NfVPZzEeJ9Pg%2BVwdLrnlByLgtl9xgYj8ecZm6dKynOJtKHOBwU6fY092ygI1YXC%2BFcYnFrDY3FLrUxjvmWd7rnx%2BvCm2Xuq7Ep1w2tCzMTCytKkgEZc%2FO0fyuoQEAtMTcBkw7tqUvwY6pgFdvZJCXUzIdikhoXvA7SQlVR%2FcOLSq3tK0dYbQ3YKnmehTSeZJZJzptklQWjbnJgxvoILTKXrJS%2B%2FiNFy2cdpou5dnN2aMzlv8pP%2BvXRjqPT5j6A0GVl5UThs0qsgh%2BTSeGKrKolfiQZEwsYtNxnBWtp6q1INU1plskVuwkpTB9VWnCgqv9xotkWidsNIjXcwwe1v9CsrISLJdWHr4Zm17KXXAiCRu&X-Amz-Signature=3cd1a9a56bceda3953bd10143664f64ea957aac5b762460e4038257325f46296&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZIQDPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQL85zhfImjbckVjcQ84Sx2JZ6hPPe0cBtm2iSRuDEEAiB0rjd%2FA%2Fb2BQuPBc924m29%2BG8gfJB6YsKubUGVGV%2FvzSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM2iAC7SpYSIJzuWwGKtwDkwtPZzycGW0aZ9Kux41HiXL1XuJkHDFOLfSvTGAYunrdZQ%2BGUw%2BZsFOpHSkMDTVSw7ax1bM0EmbmoY1k16DakrFdMGt%2Fhnn7zvZgQLfhMiprYd1tAtGzn37xuwigzGjckuRNFlt2IU1%2B8I7cRmrJkK92zrtXVEPQAQOvb86BuQMGNZ%2F3yZFKgSUkKN7LV9EO6yaDOYkDxxDfmXyZ5xprcTK%2BSv9OAEygl8CqDe3Y%2BJGj%2FAy3QUSZnlsLztiaGi10XtvKU7a4tanbHDfOTy6TSDaeOvr98do2JnrLmq4uVMFiEKtltpzOhJXtKXjErZk7J3g9UMRnoTGTRtp1%2BvWWOgm5R6VPrzm95igSkeM9bOT%2Fnk2%2FKw%2BNOF%2BhMthXYDMylREBE4av6qWpp6UgQmzKiq0F6qtvqsLylBt9HE2LtUe389EKKcnV5loKwIP%2B0ZZqob7JuhW5XGxYN4rVppNTzlBxKtLfTdMkSxj8ZhYIWJpfDpeIWvip5oH8NfVPZzEeJ9Pg%2BVwdLrnlByLgtl9xgYj8ecZm6dKynOJtKHOBwU6fY092ygI1YXC%2BFcYnFrDY3FLrUxjvmWd7rnx%2BvCm2Xuq7Ep1w2tCzMTCytKkgEZc%2FO0fyuoQEAtMTcBkw7tqUvwY6pgFdvZJCXUzIdikhoXvA7SQlVR%2FcOLSq3tK0dYbQ3YKnmehTSeZJZJzptklQWjbnJgxvoILTKXrJS%2B%2FiNFy2cdpou5dnN2aMzlv8pP%2BvXRjqPT5j6A0GVl5UThs0qsgh%2BTSeGKrKolfiQZEwsYtNxnBWtp6q1INU1plskVuwkpTB9VWnCgqv9xotkWidsNIjXcwwe1v9CsrISLJdWHr4Zm17KXXAiCRu&X-Amz-Signature=9868d80f66392875e1a8bc004c399a6f88620acb5c6927cedd83d4fd42eda1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
