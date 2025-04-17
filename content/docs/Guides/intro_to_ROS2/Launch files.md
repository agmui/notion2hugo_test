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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64ELUJV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNHVqIvdfZ7pg8RD8kRrSogJmSQ3eNGzLiyqY78SS3SQIgE3mCTOyCbwCgPmPiSR0IsjuhPMmXn6xuaXugDQJFt8cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDsNfZ3yKF%2FYDvjFoyrcA%2FLMvrG6S9E4eP42Y5tWxiNtAXpCNRhenQNgJlbcJWXk2Ng1slfzENz70KJFB36iTFRFzEq7hOPXi14dGESAFCumsb7wcqtAEFvzlTa3H0uVk6MElaGllqXRjEGhgH4%2B5EcKzIJFspIGF%2BGZa7Ap5AMm0s3r%2FXfx3TKyizlKL1JaA%2BhgnEInsvLl5E0B%2BGqrTyWNYzJ89YLc2FNdQ3C7SAo%2FMu3LIsR5%2B%2BdqNbPgY7W9zPdTed3CYN4C1ZSXxRdMkMIbV5wijN4A3hKFW00b0j68xv7n1NkdnxS16qkJfDNjYBHoF7C%2BXlgs7zbfmfFwnTqxLkGNDAsnD2gylu2jjdbd0%2B%2BlevX8FurMOELdQc6rLiR7xXyi5cCIjv3dlSAn8fmYxMJvtB9YTHFN1rBvPCBQCFzVvtkpK5zsXGVo%2BTr7wpcEQxDSt%2FVA0HRSkjyJcP5CtpIg3GOc7h%2F6wbgOOS6CICGk0rMWFpggvwzfjfznluwtJP9bB1cGHly8Usb8dbJtbKB4xuS6AObvFOE%2Blfk7TpdMUAyiYZejQ2C1I5IwTD8GGgGg5vw9Hs2kUGOJzKi%2F9m7pVA1hICSitLHyG%2BUdBaGWLQZzG%2BSvbcQL1YFagtn6i6464S6%2FKWHdMJ23hcAGOqUBm4gLgFFO1XtujEaDUEBR11zd40w5HGqLMrfs%2FRhmRQS4IKvviYkbK1Wl%2BoiD7fHLzyhCHOSaHoF8KHqCHcPuTQkbPZxbMQkci3cGkbMRkgvPYY16aVkTpE0wul6wuWJDTx9J0HOQN9ghmba4PWZPaNtLNTTm%2FLHoaWWU1OQ%2FXdDfLUb4htfIKgisrTC0h1ZJ7AGxlr6NGZx6BgyzUkPJAl48eD7j&X-Amz-Signature=21f9084d5c36801423a378c2dd156a844c7c2f7040dc57a5a5e1645dabff37b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64ELUJV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNHVqIvdfZ7pg8RD8kRrSogJmSQ3eNGzLiyqY78SS3SQIgE3mCTOyCbwCgPmPiSR0IsjuhPMmXn6xuaXugDQJFt8cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDsNfZ3yKF%2FYDvjFoyrcA%2FLMvrG6S9E4eP42Y5tWxiNtAXpCNRhenQNgJlbcJWXk2Ng1slfzENz70KJFB36iTFRFzEq7hOPXi14dGESAFCumsb7wcqtAEFvzlTa3H0uVk6MElaGllqXRjEGhgH4%2B5EcKzIJFspIGF%2BGZa7Ap5AMm0s3r%2FXfx3TKyizlKL1JaA%2BhgnEInsvLl5E0B%2BGqrTyWNYzJ89YLc2FNdQ3C7SAo%2FMu3LIsR5%2B%2BdqNbPgY7W9zPdTed3CYN4C1ZSXxRdMkMIbV5wijN4A3hKFW00b0j68xv7n1NkdnxS16qkJfDNjYBHoF7C%2BXlgs7zbfmfFwnTqxLkGNDAsnD2gylu2jjdbd0%2B%2BlevX8FurMOELdQc6rLiR7xXyi5cCIjv3dlSAn8fmYxMJvtB9YTHFN1rBvPCBQCFzVvtkpK5zsXGVo%2BTr7wpcEQxDSt%2FVA0HRSkjyJcP5CtpIg3GOc7h%2F6wbgOOS6CICGk0rMWFpggvwzfjfznluwtJP9bB1cGHly8Usb8dbJtbKB4xuS6AObvFOE%2Blfk7TpdMUAyiYZejQ2C1I5IwTD8GGgGg5vw9Hs2kUGOJzKi%2F9m7pVA1hICSitLHyG%2BUdBaGWLQZzG%2BSvbcQL1YFagtn6i6464S6%2FKWHdMJ23hcAGOqUBm4gLgFFO1XtujEaDUEBR11zd40w5HGqLMrfs%2FRhmRQS4IKvviYkbK1Wl%2BoiD7fHLzyhCHOSaHoF8KHqCHcPuTQkbPZxbMQkci3cGkbMRkgvPYY16aVkTpE0wul6wuWJDTx9J0HOQN9ghmba4PWZPaNtLNTTm%2FLHoaWWU1OQ%2FXdDfLUb4htfIKgisrTC0h1ZJ7AGxlr6NGZx6BgyzUkPJAl48eD7j&X-Amz-Signature=024df3c12280c09c38950920613145b31ce96e4691ae641176802fb102bd3af8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64ELUJV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNHVqIvdfZ7pg8RD8kRrSogJmSQ3eNGzLiyqY78SS3SQIgE3mCTOyCbwCgPmPiSR0IsjuhPMmXn6xuaXugDQJFt8cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDsNfZ3yKF%2FYDvjFoyrcA%2FLMvrG6S9E4eP42Y5tWxiNtAXpCNRhenQNgJlbcJWXk2Ng1slfzENz70KJFB36iTFRFzEq7hOPXi14dGESAFCumsb7wcqtAEFvzlTa3H0uVk6MElaGllqXRjEGhgH4%2B5EcKzIJFspIGF%2BGZa7Ap5AMm0s3r%2FXfx3TKyizlKL1JaA%2BhgnEInsvLl5E0B%2BGqrTyWNYzJ89YLc2FNdQ3C7SAo%2FMu3LIsR5%2B%2BdqNbPgY7W9zPdTed3CYN4C1ZSXxRdMkMIbV5wijN4A3hKFW00b0j68xv7n1NkdnxS16qkJfDNjYBHoF7C%2BXlgs7zbfmfFwnTqxLkGNDAsnD2gylu2jjdbd0%2B%2BlevX8FurMOELdQc6rLiR7xXyi5cCIjv3dlSAn8fmYxMJvtB9YTHFN1rBvPCBQCFzVvtkpK5zsXGVo%2BTr7wpcEQxDSt%2FVA0HRSkjyJcP5CtpIg3GOc7h%2F6wbgOOS6CICGk0rMWFpggvwzfjfznluwtJP9bB1cGHly8Usb8dbJtbKB4xuS6AObvFOE%2Blfk7TpdMUAyiYZejQ2C1I5IwTD8GGgGg5vw9Hs2kUGOJzKi%2F9m7pVA1hICSitLHyG%2BUdBaGWLQZzG%2BSvbcQL1YFagtn6i6464S6%2FKWHdMJ23hcAGOqUBm4gLgFFO1XtujEaDUEBR11zd40w5HGqLMrfs%2FRhmRQS4IKvviYkbK1Wl%2BoiD7fHLzyhCHOSaHoF8KHqCHcPuTQkbPZxbMQkci3cGkbMRkgvPYY16aVkTpE0wul6wuWJDTx9J0HOQN9ghmba4PWZPaNtLNTTm%2FLHoaWWU1OQ%2FXdDfLUb4htfIKgisrTC0h1ZJ7AGxlr6NGZx6BgyzUkPJAl48eD7j&X-Amz-Signature=b2854c499a177f222639564287b2753a623bbead4155534a40cf51955c4d2822&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
