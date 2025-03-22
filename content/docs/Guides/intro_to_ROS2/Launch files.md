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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KYHXIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHpzBiawu1%2FrnOTtc5whyU%2B30PzkxALyjjmJqUYqrtvkAiAmV3qds9P%2FyebuLc3fFcMMrgfaxsaWEpBnKgZSCCZ1dyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTAbhHkklbcyhsbiKtwDdJznQaXMjBdpOXbDZ5pj4kQ2Yv5r0xSb2YhvVMbKezz3aONEsEVHh0Q%2FkU0pC8VRm35bHXmj9P4%2B3ozWMY3cBrOgOfqPZqQxKFirUB4SUAw3SvclqUDTHvdPFJJc9GWG6RD7dOQIsS3iHOtoy%2B6IvlttyjA1MhlIFcGc%2B6U0qrBzt9amzjoiFw1udXsHsd7hyLYx8jQsxElVQMyqQtI4DmzDsmyFTNUYWqoa3ti6wAV2NmhA9YGZhuakiQkfg2omxqcS8l%2BTClKHUpvZskOP1SjzR7CtTgX6B%2F%2F5mBLHlFZHpywkIb1nRZvgWrz7kNvzk%2FbhaBr7S0GZ0LeBP8%2Bvw6kd%2F9vfGkgMHmtm5hn6Ng%2BfOBnAL2yVVmCXCcPpwLJ%2FZEfP%2Ba%2F1jWXCgvrm5Y%2F6DNnxxrDRakmXPWs%2FLmphU%2BRBTzNXU%2FHXtuSrVUdppoqnJKeBE7Kbv%2BMeDRL%2Fjj1Ps90n7Z5SEkyYjJTRQwXlfscjuX%2BvBOQGVvunrASW14JT7eFDmEUDokhK5ZYD%2BABhaTpcC7LhGvZc1hDIeM2I36hOqzxDnG5ShqcTJl6KAJROapqIXw56BliNhhBfgHD%2Fyhg0O2WoAMXXZcfA9bd7W%2F%2Flnso0UACVXlFav7wwivb6vgY6pgEp6Ohb1bSrDzb5sPhGVAxcORSXH1Cx8JVSlmZQy%2BpMAm%2BNd596177KNVr476DxBSRIfB59gPXt7nufINwT3jCE3am7hgc%2BUPT5%2Fb11m3BEF%2FzvG5baOz2KOwx9VdTSiPfearZ90FL%2BIuvIHNqRM9vu0cXHQ72Gx%2Fx6uKFn3x5kDNW0hyC%2BfFXKLLT8IKvsy0F81iwcT5bJtPQVqyDCqAGY%2FbK31vnN&X-Amz-Signature=252ab30ff076138b1cf7d37d1c0e5bd533bb4c2ba145e79416a54d3bb2023fef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KYHXIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHpzBiawu1%2FrnOTtc5whyU%2B30PzkxALyjjmJqUYqrtvkAiAmV3qds9P%2FyebuLc3fFcMMrgfaxsaWEpBnKgZSCCZ1dyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTAbhHkklbcyhsbiKtwDdJznQaXMjBdpOXbDZ5pj4kQ2Yv5r0xSb2YhvVMbKezz3aONEsEVHh0Q%2FkU0pC8VRm35bHXmj9P4%2B3ozWMY3cBrOgOfqPZqQxKFirUB4SUAw3SvclqUDTHvdPFJJc9GWG6RD7dOQIsS3iHOtoy%2B6IvlttyjA1MhlIFcGc%2B6U0qrBzt9amzjoiFw1udXsHsd7hyLYx8jQsxElVQMyqQtI4DmzDsmyFTNUYWqoa3ti6wAV2NmhA9YGZhuakiQkfg2omxqcS8l%2BTClKHUpvZskOP1SjzR7CtTgX6B%2F%2F5mBLHlFZHpywkIb1nRZvgWrz7kNvzk%2FbhaBr7S0GZ0LeBP8%2Bvw6kd%2F9vfGkgMHmtm5hn6Ng%2BfOBnAL2yVVmCXCcPpwLJ%2FZEfP%2Ba%2F1jWXCgvrm5Y%2F6DNnxxrDRakmXPWs%2FLmphU%2BRBTzNXU%2FHXtuSrVUdppoqnJKeBE7Kbv%2BMeDRL%2Fjj1Ps90n7Z5SEkyYjJTRQwXlfscjuX%2BvBOQGVvunrASW14JT7eFDmEUDokhK5ZYD%2BABhaTpcC7LhGvZc1hDIeM2I36hOqzxDnG5ShqcTJl6KAJROapqIXw56BliNhhBfgHD%2Fyhg0O2WoAMXXZcfA9bd7W%2F%2Flnso0UACVXlFav7wwivb6vgY6pgEp6Ohb1bSrDzb5sPhGVAxcORSXH1Cx8JVSlmZQy%2BpMAm%2BNd596177KNVr476DxBSRIfB59gPXt7nufINwT3jCE3am7hgc%2BUPT5%2Fb11m3BEF%2FzvG5baOz2KOwx9VdTSiPfearZ90FL%2BIuvIHNqRM9vu0cXHQ72Gx%2Fx6uKFn3x5kDNW0hyC%2BfFXKLLT8IKvsy0F81iwcT5bJtPQVqyDCqAGY%2FbK31vnN&X-Amz-Signature=10c1e7509a0f7d6fd0b9b1a950202cf63c3e661733056822cc9169b4c00e482f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KYHXIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHpzBiawu1%2FrnOTtc5whyU%2B30PzkxALyjjmJqUYqrtvkAiAmV3qds9P%2FyebuLc3fFcMMrgfaxsaWEpBnKgZSCCZ1dyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTAbhHkklbcyhsbiKtwDdJznQaXMjBdpOXbDZ5pj4kQ2Yv5r0xSb2YhvVMbKezz3aONEsEVHh0Q%2FkU0pC8VRm35bHXmj9P4%2B3ozWMY3cBrOgOfqPZqQxKFirUB4SUAw3SvclqUDTHvdPFJJc9GWG6RD7dOQIsS3iHOtoy%2B6IvlttyjA1MhlIFcGc%2B6U0qrBzt9amzjoiFw1udXsHsd7hyLYx8jQsxElVQMyqQtI4DmzDsmyFTNUYWqoa3ti6wAV2NmhA9YGZhuakiQkfg2omxqcS8l%2BTClKHUpvZskOP1SjzR7CtTgX6B%2F%2F5mBLHlFZHpywkIb1nRZvgWrz7kNvzk%2FbhaBr7S0GZ0LeBP8%2Bvw6kd%2F9vfGkgMHmtm5hn6Ng%2BfOBnAL2yVVmCXCcPpwLJ%2FZEfP%2Ba%2F1jWXCgvrm5Y%2F6DNnxxrDRakmXPWs%2FLmphU%2BRBTzNXU%2FHXtuSrVUdppoqnJKeBE7Kbv%2BMeDRL%2Fjj1Ps90n7Z5SEkyYjJTRQwXlfscjuX%2BvBOQGVvunrASW14JT7eFDmEUDokhK5ZYD%2BABhaTpcC7LhGvZc1hDIeM2I36hOqzxDnG5ShqcTJl6KAJROapqIXw56BliNhhBfgHD%2Fyhg0O2WoAMXXZcfA9bd7W%2F%2Flnso0UACVXlFav7wwivb6vgY6pgEp6Ohb1bSrDzb5sPhGVAxcORSXH1Cx8JVSlmZQy%2BpMAm%2BNd596177KNVr476DxBSRIfB59gPXt7nufINwT3jCE3am7hgc%2BUPT5%2Fb11m3BEF%2FzvG5baOz2KOwx9VdTSiPfearZ90FL%2BIuvIHNqRM9vu0cXHQ72Gx%2Fx6uKFn3x5kDNW0hyC%2BfFXKLLT8IKvsy0F81iwcT5bJtPQVqyDCqAGY%2FbK31vnN&X-Amz-Signature=b673b93d43fdb95c9b422686e58e220a6cb3572b3481e2bea3b4b6f234d22b98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
