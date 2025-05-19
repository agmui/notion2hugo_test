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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYYEXNN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOfPL2O1HO434gKZ9eNlxns0oHiEzHgOgXC2Lje3Zz%2FwIgVKsiCygvvEwrZJEF%2F73%2FQ1FVyWM5l8cwIruI2gP2Da8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTVo81Tz6i6elzBrSrcA3z1j7yxIk6uJ6ZKoz%2FBfN40dcrE6b4q15UzWZiI9srjzJkvOwyt4Qhz3Ll%2BSiV0ZyRUChBsv8mHvmlhVoiOnuaOhU9PqXE45wdqE1jxzPDcE%2BtNNGv2v9K8RGs52DKfeZrINv1wMJ57iwyqrCJFXsQryv1yU738070IvFmL8gwMBQmBHDUKhibVLr%2BORnzecOXO7H87bETMWZS4xEJGIUvHMnsOJzLvT8gR2ySKngnXYQ84TLcb1eGsSVgHB5tlmDgu1tjdGV9Ypyi45l7lZTTr8pFlZgYgZCyepz75sjbqMQlVg1agk8xwmPp2pAP59LujUPzJ%2BWUhsfelozz9bKd1Jk0PWqqjIPmT3AioLfg6lgH3IcGzYrqxtZXKTyjBLNgiieqRqkUxhWS95uvXivno0pUl440HDZ3GFeldDEANjorQFFCM%2BAxXrrjYB%2FumlF0WP%2F%2BR0W76Ift%2BaRZ8P7kkBHYSRjFaaS16ilv9PeBfEoKvRwEZJZEyUcNvDL%2BXFUF4p2XnYrBh0L6LjBsD6QNQeMcq9tjXYyKQ81sXlo03BZetjOFfoYRSLKgHsEl%2F%2FalTg2hicn%2BSpBKggkiLuczLsnQ8usoR6qat9%2Bd5Sv73XTvVSsaTHVW9dgKlMLX9rMEGOqUBUB8mVt87LPfsYnm11TnY4wT%2FebrBGnIObi2sccCS700LNdq6SXVYUfE7%2B0L67T%2FzR%2BoYdOKPIWXLMoMWfihNQXsxjK%2BqeLBeKPd033Hg%2Fn8wPnJRgs8LQi%2FYkRY1DH7rVBuDh84wMCiJBVDgzvTc4QO4vOkMJ6%2F4zsa%2BRvcIjLzHVJ1ajXEybChZhp08QG8sPMB4q8fx2ZLQYvTLXByAZK1SPjXj&X-Amz-Signature=4e0a84a48fab8ee2e95dd8eb1d20abc4ed1bde5a9695689bbc41e98009757c50&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYYEXNN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOfPL2O1HO434gKZ9eNlxns0oHiEzHgOgXC2Lje3Zz%2FwIgVKsiCygvvEwrZJEF%2F73%2FQ1FVyWM5l8cwIruI2gP2Da8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTVo81Tz6i6elzBrSrcA3z1j7yxIk6uJ6ZKoz%2FBfN40dcrE6b4q15UzWZiI9srjzJkvOwyt4Qhz3Ll%2BSiV0ZyRUChBsv8mHvmlhVoiOnuaOhU9PqXE45wdqE1jxzPDcE%2BtNNGv2v9K8RGs52DKfeZrINv1wMJ57iwyqrCJFXsQryv1yU738070IvFmL8gwMBQmBHDUKhibVLr%2BORnzecOXO7H87bETMWZS4xEJGIUvHMnsOJzLvT8gR2ySKngnXYQ84TLcb1eGsSVgHB5tlmDgu1tjdGV9Ypyi45l7lZTTr8pFlZgYgZCyepz75sjbqMQlVg1agk8xwmPp2pAP59LujUPzJ%2BWUhsfelozz9bKd1Jk0PWqqjIPmT3AioLfg6lgH3IcGzYrqxtZXKTyjBLNgiieqRqkUxhWS95uvXivno0pUl440HDZ3GFeldDEANjorQFFCM%2BAxXrrjYB%2FumlF0WP%2F%2BR0W76Ift%2BaRZ8P7kkBHYSRjFaaS16ilv9PeBfEoKvRwEZJZEyUcNvDL%2BXFUF4p2XnYrBh0L6LjBsD6QNQeMcq9tjXYyKQ81sXlo03BZetjOFfoYRSLKgHsEl%2F%2FalTg2hicn%2BSpBKggkiLuczLsnQ8usoR6qat9%2Bd5Sv73XTvVSsaTHVW9dgKlMLX9rMEGOqUBUB8mVt87LPfsYnm11TnY4wT%2FebrBGnIObi2sccCS700LNdq6SXVYUfE7%2B0L67T%2FzR%2BoYdOKPIWXLMoMWfihNQXsxjK%2BqeLBeKPd033Hg%2Fn8wPnJRgs8LQi%2FYkRY1DH7rVBuDh84wMCiJBVDgzvTc4QO4vOkMJ6%2F4zsa%2BRvcIjLzHVJ1ajXEybChZhp08QG8sPMB4q8fx2ZLQYvTLXByAZK1SPjXj&X-Amz-Signature=358652ab8270c2057d983c8854ee742c195776a4784a837a2b73984e47a00336&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYYEXNN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOfPL2O1HO434gKZ9eNlxns0oHiEzHgOgXC2Lje3Zz%2FwIgVKsiCygvvEwrZJEF%2F73%2FQ1FVyWM5l8cwIruI2gP2Da8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTVo81Tz6i6elzBrSrcA3z1j7yxIk6uJ6ZKoz%2FBfN40dcrE6b4q15UzWZiI9srjzJkvOwyt4Qhz3Ll%2BSiV0ZyRUChBsv8mHvmlhVoiOnuaOhU9PqXE45wdqE1jxzPDcE%2BtNNGv2v9K8RGs52DKfeZrINv1wMJ57iwyqrCJFXsQryv1yU738070IvFmL8gwMBQmBHDUKhibVLr%2BORnzecOXO7H87bETMWZS4xEJGIUvHMnsOJzLvT8gR2ySKngnXYQ84TLcb1eGsSVgHB5tlmDgu1tjdGV9Ypyi45l7lZTTr8pFlZgYgZCyepz75sjbqMQlVg1agk8xwmPp2pAP59LujUPzJ%2BWUhsfelozz9bKd1Jk0PWqqjIPmT3AioLfg6lgH3IcGzYrqxtZXKTyjBLNgiieqRqkUxhWS95uvXivno0pUl440HDZ3GFeldDEANjorQFFCM%2BAxXrrjYB%2FumlF0WP%2F%2BR0W76Ift%2BaRZ8P7kkBHYSRjFaaS16ilv9PeBfEoKvRwEZJZEyUcNvDL%2BXFUF4p2XnYrBh0L6LjBsD6QNQeMcq9tjXYyKQ81sXlo03BZetjOFfoYRSLKgHsEl%2F%2FalTg2hicn%2BSpBKggkiLuczLsnQ8usoR6qat9%2Bd5Sv73XTvVSsaTHVW9dgKlMLX9rMEGOqUBUB8mVt87LPfsYnm11TnY4wT%2FebrBGnIObi2sccCS700LNdq6SXVYUfE7%2B0L67T%2FzR%2BoYdOKPIWXLMoMWfihNQXsxjK%2BqeLBeKPd033Hg%2Fn8wPnJRgs8LQi%2FYkRY1DH7rVBuDh84wMCiJBVDgzvTc4QO4vOkMJ6%2F4zsa%2BRvcIjLzHVJ1ajXEybChZhp08QG8sPMB4q8fx2ZLQYvTLXByAZK1SPjXj&X-Amz-Signature=c1645a885049cffac14eed755a7dfb495f184780cab48f30c98e2ca3b0edef04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
