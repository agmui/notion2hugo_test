---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7ILQRM%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFEY%2BE7uAY%2FR%2B73sROISMVJuYUvGPCfVEj8pS6C1tI1QIgAXDBjzOyR4yEZvKoLuhjeDzMn0MXjNHDTfUso%2ByYduIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPvfGn7mfiU9QKzq%2FSrcA7w3GrQWxjDi%2F8oBy8Ib%2FK4txrBamAGITCG%2FZSXADl6UT6MfIyStMHNdj8uxvw%2BQmlZ7E9VV3UI8ML09fyhwLqMq7Qdn2BxKYG7ADvkd3%2Bw84Vqebiwqp1XboF46%2BX9wfv%2B8oJpev0eIbeGPqodzB3KFb6nfsnhuYRnRQnsdMwQePxKp5UGJnsG9MuR2LKjtV%2Fpu9c%2BsS89dL6DtZRAKrozYfR9MpsWi8d5aA%2FKEsHzQD5piHcxLF9wCWPc7EEXvw6vSO1I6%2FuQ9BWGfCASiZtjBzlCOQQ3DpB%2F0UWrEtAI7OaC1CqFzORT3%2F%2F7YbwhdP6opJ%2Fc1%2FEHN%2BJlCOTcljzFvLeFg9yHU14pQDaLWVBbKLZwpnsOe3onb3Dpi5bChCGuEBpjjesp2gYSZdr3%2B%2FafqK7Fub3mGWF5%2B3uteEuKlRLa2E74%2FK66wj4MdqAj57GO0hK4KRiOKJ6sNXWzozaoLqP6bPsOCQXqYtmYCYoiZSyfG%2BD6jjmOwUXZbnzFhb0buESbUdFkzMgRJYe%2B225gzArS4GYn%2Fwuei9wc9ZXtLXxFI1nQhu091xJYWMx9fyoMvMHS7GNxrIN9vTi2OClwyHQnEai7fA%2FuXfEmOhTwlRH1VIVJI1DZJKGxjMIbqu84GOqUBxjBc9fxaPe55hI0uKQnFERf2QBrnC9KuB9ug5DSUOpYTcoVeharKe2Ohf%2BzqFXSSjjPEbJF%2B%2B0gdiTXB%2FMkAzCJobwW3CbtTb%2FmWgBRjhi8bjauaplOQ%2FUd5sc09R%2BJb7%2B8k5ffPk5NyFf%2BQg95WH9OQIPBH9WyFYTNdfV%2B6XSpCNvMH9u8aaRB0VI%2Bd%2BujEvxuhkK1Bk3jJkwy3tyzg%2FS7vx9RG&X-Amz-Signature=cbb6b74337c8e7a7155e80cc225724c913ceb3525be5eaaf097ff4a8ab5d1073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7ILQRM%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFEY%2BE7uAY%2FR%2B73sROISMVJuYUvGPCfVEj8pS6C1tI1QIgAXDBjzOyR4yEZvKoLuhjeDzMn0MXjNHDTfUso%2ByYduIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPvfGn7mfiU9QKzq%2FSrcA7w3GrQWxjDi%2F8oBy8Ib%2FK4txrBamAGITCG%2FZSXADl6UT6MfIyStMHNdj8uxvw%2BQmlZ7E9VV3UI8ML09fyhwLqMq7Qdn2BxKYG7ADvkd3%2Bw84Vqebiwqp1XboF46%2BX9wfv%2B8oJpev0eIbeGPqodzB3KFb6nfsnhuYRnRQnsdMwQePxKp5UGJnsG9MuR2LKjtV%2Fpu9c%2BsS89dL6DtZRAKrozYfR9MpsWi8d5aA%2FKEsHzQD5piHcxLF9wCWPc7EEXvw6vSO1I6%2FuQ9BWGfCASiZtjBzlCOQQ3DpB%2F0UWrEtAI7OaC1CqFzORT3%2F%2F7YbwhdP6opJ%2Fc1%2FEHN%2BJlCOTcljzFvLeFg9yHU14pQDaLWVBbKLZwpnsOe3onb3Dpi5bChCGuEBpjjesp2gYSZdr3%2B%2FafqK7Fub3mGWF5%2B3uteEuKlRLa2E74%2FK66wj4MdqAj57GO0hK4KRiOKJ6sNXWzozaoLqP6bPsOCQXqYtmYCYoiZSyfG%2BD6jjmOwUXZbnzFhb0buESbUdFkzMgRJYe%2B225gzArS4GYn%2Fwuei9wc9ZXtLXxFI1nQhu091xJYWMx9fyoMvMHS7GNxrIN9vTi2OClwyHQnEai7fA%2FuXfEmOhTwlRH1VIVJI1DZJKGxjMIbqu84GOqUBxjBc9fxaPe55hI0uKQnFERf2QBrnC9KuB9ug5DSUOpYTcoVeharKe2Ohf%2BzqFXSSjjPEbJF%2B%2B0gdiTXB%2FMkAzCJobwW3CbtTb%2FmWgBRjhi8bjauaplOQ%2FUd5sc09R%2BJb7%2B8k5ffPk5NyFf%2BQg95WH9OQIPBH9WyFYTNdfV%2B6XSpCNvMH9u8aaRB0VI%2Bd%2BujEvxuhkK1Bk3jJkwy3tyzg%2FS7vx9RG&X-Amz-Signature=d9947e687ee8aef6d1a0ba64f2010fd849d9d20e8210c6c7128e0c838853714c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7ILQRM%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFEY%2BE7uAY%2FR%2B73sROISMVJuYUvGPCfVEj8pS6C1tI1QIgAXDBjzOyR4yEZvKoLuhjeDzMn0MXjNHDTfUso%2ByYduIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPvfGn7mfiU9QKzq%2FSrcA7w3GrQWxjDi%2F8oBy8Ib%2FK4txrBamAGITCG%2FZSXADl6UT6MfIyStMHNdj8uxvw%2BQmlZ7E9VV3UI8ML09fyhwLqMq7Qdn2BxKYG7ADvkd3%2Bw84Vqebiwqp1XboF46%2BX9wfv%2B8oJpev0eIbeGPqodzB3KFb6nfsnhuYRnRQnsdMwQePxKp5UGJnsG9MuR2LKjtV%2Fpu9c%2BsS89dL6DtZRAKrozYfR9MpsWi8d5aA%2FKEsHzQD5piHcxLF9wCWPc7EEXvw6vSO1I6%2FuQ9BWGfCASiZtjBzlCOQQ3DpB%2F0UWrEtAI7OaC1CqFzORT3%2F%2F7YbwhdP6opJ%2Fc1%2FEHN%2BJlCOTcljzFvLeFg9yHU14pQDaLWVBbKLZwpnsOe3onb3Dpi5bChCGuEBpjjesp2gYSZdr3%2B%2FafqK7Fub3mGWF5%2B3uteEuKlRLa2E74%2FK66wj4MdqAj57GO0hK4KRiOKJ6sNXWzozaoLqP6bPsOCQXqYtmYCYoiZSyfG%2BD6jjmOwUXZbnzFhb0buESbUdFkzMgRJYe%2B225gzArS4GYn%2Fwuei9wc9ZXtLXxFI1nQhu091xJYWMx9fyoMvMHS7GNxrIN9vTi2OClwyHQnEai7fA%2FuXfEmOhTwlRH1VIVJI1DZJKGxjMIbqu84GOqUBxjBc9fxaPe55hI0uKQnFERf2QBrnC9KuB9ug5DSUOpYTcoVeharKe2Ohf%2BzqFXSSjjPEbJF%2B%2B0gdiTXB%2FMkAzCJobwW3CbtTb%2FmWgBRjhi8bjauaplOQ%2FUd5sc09R%2BJb7%2B8k5ffPk5NyFf%2BQg95WH9OQIPBH9WyFYTNdfV%2B6XSpCNvMH9u8aaRB0VI%2Bd%2BujEvxuhkK1Bk3jJkwy3tyzg%2FS7vx9RG&X-Amz-Signature=ab5aeabbf665a2a7dc16e9bed40c1b74fbf1bc67d5086752e825ca2aef386a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
