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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OE3YOSQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHmUZNhAiH5Oo0tiACIHOvdpLhAvJTgKdTmlzIwI0nenAiEAwRHbfg2ndFr5mekw7WPNxHf4ldfJMbaC0RS9XFeClKsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEmNsXH6LO5TsEHb8ircA2xgPjzv7MlpgIpGueGjI8f8HQb3U8venJweuRpewbhgu5bUTGYGb0DHZ%2ByjzSI3zNRGDh%2B1nonAZVpG7UcStKdU%2Bsb7oIkjuBMbWOv2r3XHnQ7b9DdKUT7mwV6bkUTgonPllufs9Fds4q5Z9sJfkE%2FgWYCzQwfBBN%2FOyzdfjQqh12swMKPr5MHP5DcgpHd%2F5D3IlN6AuTqhpKG3K%2BA2t2ekDD2aF8FxWJO8bi%2FKMgPpj3ng41clqeHvBcyGsop7isazwxjAAKDU0neSEQW3hvbxcE2V4S3mden6Ml0276RB2HxYXl494DZWvn6AJmmMl91fMPoGYDqMeS%2F4bxLtBDlb2Khd2lv1XfHW790MK5oQiqoXCMX6bHmrLavWrB5UTkt%2BtAkdXMpKUsI3K61aRN5GAtb8N7SmWaG%2BF76PCi3vnGNCJsel%2BCyR85WJMWEAN1TlfcGcfIc8hKapFtaGv0Dq6QzyaGPr5PLj4UbgSddTxP6DGfNNL1JzwZsoHewF5P2F11fsAO0%2BhxnfJpHXGwdikIt0J8O3xvQiBX8%2F31m25vLXvgDYjfv4BY%2FgQFAu2dOrrIZOST3%2BYO5CQej%2BMrC%2FK4awyaUB3GCf%2Fk6J%2B4%2FBM003RatfmAZCBjbhMJODiL0GOqUBQMNK%2BX048MzsKrUbh4EygIigdrug4BuBVTlEKUcF%2BUnoatIgoEXmIt%2B0xpXpc9KlWxLzst8PIGCyl8GVXath1V8aFged8lwXiZp4vYgLbZbkoSgfeQq5KRXC44pmpsjtCwg3ogFk9MtS0TnOLVx4P%2FPpGGv5nx36s9TSGxVTeT9yFvVcv8B9S%2B7fHju3AMVtXdhMchF%2FH0%2B4FCFx%2BKRSl8OuY72j&X-Amz-Signature=a274f8abebfab78240d14f6af6392a4b09ea104d7d622ea6b4b35cf98e4a80d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OE3YOSQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHmUZNhAiH5Oo0tiACIHOvdpLhAvJTgKdTmlzIwI0nenAiEAwRHbfg2ndFr5mekw7WPNxHf4ldfJMbaC0RS9XFeClKsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEmNsXH6LO5TsEHb8ircA2xgPjzv7MlpgIpGueGjI8f8HQb3U8venJweuRpewbhgu5bUTGYGb0DHZ%2ByjzSI3zNRGDh%2B1nonAZVpG7UcStKdU%2Bsb7oIkjuBMbWOv2r3XHnQ7b9DdKUT7mwV6bkUTgonPllufs9Fds4q5Z9sJfkE%2FgWYCzQwfBBN%2FOyzdfjQqh12swMKPr5MHP5DcgpHd%2F5D3IlN6AuTqhpKG3K%2BA2t2ekDD2aF8FxWJO8bi%2FKMgPpj3ng41clqeHvBcyGsop7isazwxjAAKDU0neSEQW3hvbxcE2V4S3mden6Ml0276RB2HxYXl494DZWvn6AJmmMl91fMPoGYDqMeS%2F4bxLtBDlb2Khd2lv1XfHW790MK5oQiqoXCMX6bHmrLavWrB5UTkt%2BtAkdXMpKUsI3K61aRN5GAtb8N7SmWaG%2BF76PCi3vnGNCJsel%2BCyR85WJMWEAN1TlfcGcfIc8hKapFtaGv0Dq6QzyaGPr5PLj4UbgSddTxP6DGfNNL1JzwZsoHewF5P2F11fsAO0%2BhxnfJpHXGwdikIt0J8O3xvQiBX8%2F31m25vLXvgDYjfv4BY%2FgQFAu2dOrrIZOST3%2BYO5CQej%2BMrC%2FK4awyaUB3GCf%2Fk6J%2B4%2FBM003RatfmAZCBjbhMJODiL0GOqUBQMNK%2BX048MzsKrUbh4EygIigdrug4BuBVTlEKUcF%2BUnoatIgoEXmIt%2B0xpXpc9KlWxLzst8PIGCyl8GVXath1V8aFged8lwXiZp4vYgLbZbkoSgfeQq5KRXC44pmpsjtCwg3ogFk9MtS0TnOLVx4P%2FPpGGv5nx36s9TSGxVTeT9yFvVcv8B9S%2B7fHju3AMVtXdhMchF%2FH0%2B4FCFx%2BKRSl8OuY72j&X-Amz-Signature=99a61152e78f3681eae208b9e222db69e114006bf1e612a6799c2533ba9f2352&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OE3YOSQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHmUZNhAiH5Oo0tiACIHOvdpLhAvJTgKdTmlzIwI0nenAiEAwRHbfg2ndFr5mekw7WPNxHf4ldfJMbaC0RS9XFeClKsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEmNsXH6LO5TsEHb8ircA2xgPjzv7MlpgIpGueGjI8f8HQb3U8venJweuRpewbhgu5bUTGYGb0DHZ%2ByjzSI3zNRGDh%2B1nonAZVpG7UcStKdU%2Bsb7oIkjuBMbWOv2r3XHnQ7b9DdKUT7mwV6bkUTgonPllufs9Fds4q5Z9sJfkE%2FgWYCzQwfBBN%2FOyzdfjQqh12swMKPr5MHP5DcgpHd%2F5D3IlN6AuTqhpKG3K%2BA2t2ekDD2aF8FxWJO8bi%2FKMgPpj3ng41clqeHvBcyGsop7isazwxjAAKDU0neSEQW3hvbxcE2V4S3mden6Ml0276RB2HxYXl494DZWvn6AJmmMl91fMPoGYDqMeS%2F4bxLtBDlb2Khd2lv1XfHW790MK5oQiqoXCMX6bHmrLavWrB5UTkt%2BtAkdXMpKUsI3K61aRN5GAtb8N7SmWaG%2BF76PCi3vnGNCJsel%2BCyR85WJMWEAN1TlfcGcfIc8hKapFtaGv0Dq6QzyaGPr5PLj4UbgSddTxP6DGfNNL1JzwZsoHewF5P2F11fsAO0%2BhxnfJpHXGwdikIt0J8O3xvQiBX8%2F31m25vLXvgDYjfv4BY%2FgQFAu2dOrrIZOST3%2BYO5CQej%2BMrC%2FK4awyaUB3GCf%2Fk6J%2B4%2FBM003RatfmAZCBjbhMJODiL0GOqUBQMNK%2BX048MzsKrUbh4EygIigdrug4BuBVTlEKUcF%2BUnoatIgoEXmIt%2B0xpXpc9KlWxLzst8PIGCyl8GVXath1V8aFged8lwXiZp4vYgLbZbkoSgfeQq5KRXC44pmpsjtCwg3ogFk9MtS0TnOLVx4P%2FPpGGv5nx36s9TSGxVTeT9yFvVcv8B9S%2B7fHju3AMVtXdhMchF%2FH0%2B4FCFx%2BKRSl8OuY72j&X-Amz-Signature=28857cb304236385a664ba4e8f9ceb18e94a5fc871699a58c0bd78c85974535b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
