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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NINKAO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDyDieKzf90FsvZ0Mt7ff7ghe3%2FSXIUOwdSLv5I6STlhAiEAovV3EPZvxDDmESNmv4DZMFKVxNw4OhigM%2F6FaA8G%2FZ8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPF%2FgXEBwjzEuQ2U8yrcA9v1WNqRjZOgVzvoPBxxfi6x%2FMHe4fMwT1KVqStq5LlYVHx%2Ffht0VxHWHRWKXelaw08eaZhM2J4MnuPG%2BjVHxjQAvlQb6FtT%2FaEgLnkMO7qgnG9V6eAUC34u%2FjiD2zuYMWgEMi0uXndQfHBts3MQqhSnXNTLsGKTAHGPEPgZzZHWyzU1gHRKbfjlMvs2DvsDuB67LiBJDARng1bWEXVnCVQFylgtdzJYcjG%2Fz7E2WrAV087%2FzPDW2Y1bOqeHlonhB1F7Z6T09sJFdRiYhtfxqmzw%2FhQ6n3v3bxa1Tudg9cOYeevAvFn%2FY%2F4ewL%2FykVrir%2Bx4YSkMcskAhkZ0gdGKNdeXEZSld8nHF7E92z9dAEu4iXVhVgbOYJs1%2Bgif8N5ZLDvWxxmdB1GdSiOUOUDQQ9llVqrfJ2bBUrdnaAMNqhD8YWbUsMebY3Ud7CsdgzVHWEHurH6b2haElnxbgn7NTGpn8a0qPVJQPcOuAr0z5ze%2BmuX7RkSllK6jGIE%2FIXhoH4b4T1mmepJLUJliYk%2BCPs6VYPWTOyaowzFEpAUm91fbHraMPrqgnUUU6%2BTZRMRNvSyprshJ131GxLMqS7NQqBxMS8YMj%2B8m7voibHzIzi1%2F7INb8W2CKwRg1FRpMOudk70GOqUBAXKDvg6sId1QjUdcTX2kR%2Fx5t%2FP7lQlS7qzKYmcoaaHZpl0vN9xwNKoHtZOjfmRShl%2FpW9BJI4YLcYYBc9o9nySikKG2tA7d3GPOiSEEsYs9v%2BsWBvp3z%2FAmHSGthmiIdR5nL8oTnlv3erSgaxPBMcDJxqaQYfMtJCm4w5q3DO%2Fl20huv6ynjEIQYbH9%2BFWHQ91Ls9jRLHOuDzdnA0SUjnE1OP21&X-Amz-Signature=f9e2fc783a44a1f31e6aa666a908ee0ff8a58457aa0e6975cfd3317a7fd1da38&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NINKAO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDyDieKzf90FsvZ0Mt7ff7ghe3%2FSXIUOwdSLv5I6STlhAiEAovV3EPZvxDDmESNmv4DZMFKVxNw4OhigM%2F6FaA8G%2FZ8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPF%2FgXEBwjzEuQ2U8yrcA9v1WNqRjZOgVzvoPBxxfi6x%2FMHe4fMwT1KVqStq5LlYVHx%2Ffht0VxHWHRWKXelaw08eaZhM2J4MnuPG%2BjVHxjQAvlQb6FtT%2FaEgLnkMO7qgnG9V6eAUC34u%2FjiD2zuYMWgEMi0uXndQfHBts3MQqhSnXNTLsGKTAHGPEPgZzZHWyzU1gHRKbfjlMvs2DvsDuB67LiBJDARng1bWEXVnCVQFylgtdzJYcjG%2Fz7E2WrAV087%2FzPDW2Y1bOqeHlonhB1F7Z6T09sJFdRiYhtfxqmzw%2FhQ6n3v3bxa1Tudg9cOYeevAvFn%2FY%2F4ewL%2FykVrir%2Bx4YSkMcskAhkZ0gdGKNdeXEZSld8nHF7E92z9dAEu4iXVhVgbOYJs1%2Bgif8N5ZLDvWxxmdB1GdSiOUOUDQQ9llVqrfJ2bBUrdnaAMNqhD8YWbUsMebY3Ud7CsdgzVHWEHurH6b2haElnxbgn7NTGpn8a0qPVJQPcOuAr0z5ze%2BmuX7RkSllK6jGIE%2FIXhoH4b4T1mmepJLUJliYk%2BCPs6VYPWTOyaowzFEpAUm91fbHraMPrqgnUUU6%2BTZRMRNvSyprshJ131GxLMqS7NQqBxMS8YMj%2B8m7voibHzIzi1%2F7INb8W2CKwRg1FRpMOudk70GOqUBAXKDvg6sId1QjUdcTX2kR%2Fx5t%2FP7lQlS7qzKYmcoaaHZpl0vN9xwNKoHtZOjfmRShl%2FpW9BJI4YLcYYBc9o9nySikKG2tA7d3GPOiSEEsYs9v%2BsWBvp3z%2FAmHSGthmiIdR5nL8oTnlv3erSgaxPBMcDJxqaQYfMtJCm4w5q3DO%2Fl20huv6ynjEIQYbH9%2BFWHQ91Ls9jRLHOuDzdnA0SUjnE1OP21&X-Amz-Signature=7873449ecf108a90dc801c9cfd24bbe89c92c94b7d1feee98ebf5e21a1e21494&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NINKAO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDyDieKzf90FsvZ0Mt7ff7ghe3%2FSXIUOwdSLv5I6STlhAiEAovV3EPZvxDDmESNmv4DZMFKVxNw4OhigM%2F6FaA8G%2FZ8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPF%2FgXEBwjzEuQ2U8yrcA9v1WNqRjZOgVzvoPBxxfi6x%2FMHe4fMwT1KVqStq5LlYVHx%2Ffht0VxHWHRWKXelaw08eaZhM2J4MnuPG%2BjVHxjQAvlQb6FtT%2FaEgLnkMO7qgnG9V6eAUC34u%2FjiD2zuYMWgEMi0uXndQfHBts3MQqhSnXNTLsGKTAHGPEPgZzZHWyzU1gHRKbfjlMvs2DvsDuB67LiBJDARng1bWEXVnCVQFylgtdzJYcjG%2Fz7E2WrAV087%2FzPDW2Y1bOqeHlonhB1F7Z6T09sJFdRiYhtfxqmzw%2FhQ6n3v3bxa1Tudg9cOYeevAvFn%2FY%2F4ewL%2FykVrir%2Bx4YSkMcskAhkZ0gdGKNdeXEZSld8nHF7E92z9dAEu4iXVhVgbOYJs1%2Bgif8N5ZLDvWxxmdB1GdSiOUOUDQQ9llVqrfJ2bBUrdnaAMNqhD8YWbUsMebY3Ud7CsdgzVHWEHurH6b2haElnxbgn7NTGpn8a0qPVJQPcOuAr0z5ze%2BmuX7RkSllK6jGIE%2FIXhoH4b4T1mmepJLUJliYk%2BCPs6VYPWTOyaowzFEpAUm91fbHraMPrqgnUUU6%2BTZRMRNvSyprshJ131GxLMqS7NQqBxMS8YMj%2B8m7voibHzIzi1%2F7INb8W2CKwRg1FRpMOudk70GOqUBAXKDvg6sId1QjUdcTX2kR%2Fx5t%2FP7lQlS7qzKYmcoaaHZpl0vN9xwNKoHtZOjfmRShl%2FpW9BJI4YLcYYBc9o9nySikKG2tA7d3GPOiSEEsYs9v%2BsWBvp3z%2FAmHSGthmiIdR5nL8oTnlv3erSgaxPBMcDJxqaQYfMtJCm4w5q3DO%2Fl20huv6ynjEIQYbH9%2BFWHQ91Ls9jRLHOuDzdnA0SUjnE1OP21&X-Amz-Signature=e7f6684a94aa427cbc917a4852ec3e11de1cbcf279ad32a2c1910e970beb1083&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
