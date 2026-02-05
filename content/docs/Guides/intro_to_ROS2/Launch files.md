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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37VOSNW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1uuFlgUGaG1YYTIVL%2FG9NUu5mgVMsIXH7Pih4xZ%2FqSAiAwq8p7Dj4aT1fMhpUpmA3K%2BSSetCsnP9kKO1ppdVDbSir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQWzgQqMoewJurSlIKtwDo9xNUkz7gq3gGE8TDyz%2BuUr2%2BuJNKiGSueswMRxfKgI87AhaT3yXt%2FvwZ5U9TKuLOjxPw%2B3Gxcvk6Q1I%2BchAl75yxzK97VNktGFE3ffMOwN1Q9CaYgJVWZfweShEFdZD2PJuSmLDiRz7vaye7O1nDz7ECS%2Bsf6sRMRNnEZ1Igr0WQdtATe6lMltrKjyRvOtM7bEdX%2FQTPOLrz3HFjU3tSkLOQBxfHg8vNoremC0MCk9dVUpd3wOl%2B8%2FAvyA9PkQ0K9F8LFcvO0855rDadim62daEYvFcFIrWhwkrUXR%2B0epGp37c8y1B%2FqqusON%2B4E%2F2ZWR8bd8vfubF7Ue%2FnqUevDf%2B4Dw%2FPU2LRz1mp4sWeWX%2B34zfiBRYEiNC1NIsqlXSrHx2Z7gDUVQS6cy9rfpvBb%2BcTVO%2FAazzes1OaE8m3yjg4Gtl5CgO2ypjCNYNnNZEkuqPaf%2FreUsi%2BAgWRYqpaDnFBqgNInjCUPXUMT3AF9rLFwzBDdFqW49dNW3xoGEk%2FlvAMHxiucbFWWT5sv%2FU3xvuY2KfvCAkA7vSeSgslySdhkTNVRh6ZbEIvlu9Irmut5tRYYgs%2FnWGXuYq%2FIGpQ1jomYSNIuWisnBOJG3nTRkdhze1DiGqG548QGswyc6PzAY6pgE%2FpmGO8Yu%2FxBKc8bpFElwgMS%2FefSlsoZccbGYtjyklT01fH%2BCGHU7%2BkHIt0bWO2ArGWwnphK0rgrN5hp%2FoSqaWkhzSLiCEv%2FclPmkxHpEnQynp8TTwDTqwaDvG6BxO%2BHDWXz9TxezIJBize%2Fqoog2zk8uJLOlkQMp8IP3qKw2XW1BffTe2zotDiIZPWP1sAdwqZfw3V0YtZAEb12MHMP2yyk1jEx%2Bo&X-Amz-Signature=4dfdcfee1c730739b4bd791e1e28424c96c30d2a9dea918b38a791d92df87131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37VOSNW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1uuFlgUGaG1YYTIVL%2FG9NUu5mgVMsIXH7Pih4xZ%2FqSAiAwq8p7Dj4aT1fMhpUpmA3K%2BSSetCsnP9kKO1ppdVDbSir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQWzgQqMoewJurSlIKtwDo9xNUkz7gq3gGE8TDyz%2BuUr2%2BuJNKiGSueswMRxfKgI87AhaT3yXt%2FvwZ5U9TKuLOjxPw%2B3Gxcvk6Q1I%2BchAl75yxzK97VNktGFE3ffMOwN1Q9CaYgJVWZfweShEFdZD2PJuSmLDiRz7vaye7O1nDz7ECS%2Bsf6sRMRNnEZ1Igr0WQdtATe6lMltrKjyRvOtM7bEdX%2FQTPOLrz3HFjU3tSkLOQBxfHg8vNoremC0MCk9dVUpd3wOl%2B8%2FAvyA9PkQ0K9F8LFcvO0855rDadim62daEYvFcFIrWhwkrUXR%2B0epGp37c8y1B%2FqqusON%2B4E%2F2ZWR8bd8vfubF7Ue%2FnqUevDf%2B4Dw%2FPU2LRz1mp4sWeWX%2B34zfiBRYEiNC1NIsqlXSrHx2Z7gDUVQS6cy9rfpvBb%2BcTVO%2FAazzes1OaE8m3yjg4Gtl5CgO2ypjCNYNnNZEkuqPaf%2FreUsi%2BAgWRYqpaDnFBqgNInjCUPXUMT3AF9rLFwzBDdFqW49dNW3xoGEk%2FlvAMHxiucbFWWT5sv%2FU3xvuY2KfvCAkA7vSeSgslySdhkTNVRh6ZbEIvlu9Irmut5tRYYgs%2FnWGXuYq%2FIGpQ1jomYSNIuWisnBOJG3nTRkdhze1DiGqG548QGswyc6PzAY6pgE%2FpmGO8Yu%2FxBKc8bpFElwgMS%2FefSlsoZccbGYtjyklT01fH%2BCGHU7%2BkHIt0bWO2ArGWwnphK0rgrN5hp%2FoSqaWkhzSLiCEv%2FclPmkxHpEnQynp8TTwDTqwaDvG6BxO%2BHDWXz9TxezIJBize%2Fqoog2zk8uJLOlkQMp8IP3qKw2XW1BffTe2zotDiIZPWP1sAdwqZfw3V0YtZAEb12MHMP2yyk1jEx%2Bo&X-Amz-Signature=9ed40d085d65c9ede224220a8988809947f341501f4d79985df4a73335579a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37VOSNW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1uuFlgUGaG1YYTIVL%2FG9NUu5mgVMsIXH7Pih4xZ%2FqSAiAwq8p7Dj4aT1fMhpUpmA3K%2BSSetCsnP9kKO1ppdVDbSir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQWzgQqMoewJurSlIKtwDo9xNUkz7gq3gGE8TDyz%2BuUr2%2BuJNKiGSueswMRxfKgI87AhaT3yXt%2FvwZ5U9TKuLOjxPw%2B3Gxcvk6Q1I%2BchAl75yxzK97VNktGFE3ffMOwN1Q9CaYgJVWZfweShEFdZD2PJuSmLDiRz7vaye7O1nDz7ECS%2Bsf6sRMRNnEZ1Igr0WQdtATe6lMltrKjyRvOtM7bEdX%2FQTPOLrz3HFjU3tSkLOQBxfHg8vNoremC0MCk9dVUpd3wOl%2B8%2FAvyA9PkQ0K9F8LFcvO0855rDadim62daEYvFcFIrWhwkrUXR%2B0epGp37c8y1B%2FqqusON%2B4E%2F2ZWR8bd8vfubF7Ue%2FnqUevDf%2B4Dw%2FPU2LRz1mp4sWeWX%2B34zfiBRYEiNC1NIsqlXSrHx2Z7gDUVQS6cy9rfpvBb%2BcTVO%2FAazzes1OaE8m3yjg4Gtl5CgO2ypjCNYNnNZEkuqPaf%2FreUsi%2BAgWRYqpaDnFBqgNInjCUPXUMT3AF9rLFwzBDdFqW49dNW3xoGEk%2FlvAMHxiucbFWWT5sv%2FU3xvuY2KfvCAkA7vSeSgslySdhkTNVRh6ZbEIvlu9Irmut5tRYYgs%2FnWGXuYq%2FIGpQ1jomYSNIuWisnBOJG3nTRkdhze1DiGqG548QGswyc6PzAY6pgE%2FpmGO8Yu%2FxBKc8bpFElwgMS%2FefSlsoZccbGYtjyklT01fH%2BCGHU7%2BkHIt0bWO2ArGWwnphK0rgrN5hp%2FoSqaWkhzSLiCEv%2FclPmkxHpEnQynp8TTwDTqwaDvG6BxO%2BHDWXz9TxezIJBize%2Fqoog2zk8uJLOlkQMp8IP3qKw2XW1BffTe2zotDiIZPWP1sAdwqZfw3V0YtZAEb12MHMP2yyk1jEx%2Bo&X-Amz-Signature=e7a622f477e856e903f38cff2b28d287023e78fe80d232ec3991d0829ce698eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
