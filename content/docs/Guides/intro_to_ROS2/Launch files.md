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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFC7SAQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICh4dZ57Qt%2ByEFVP2Z9K9M662nmk0P9vUB%2BDKHs205DuAiAxk8dyLFkVjqD1TxYI1niH0F6kzsTvv9W%2FLcw2tEy6Yir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMp8ueIcrt6M2nl5BtKtwDWLOikB1DXWXpuEHAyuiiFt%2Bx6YaCOuL3wn0QhbMJELr0NPn4COfByHnEdDPZ0I1q%2BnMFDTYshRkLQ%2Bm8V3MbYzD5n2QEWd5CdvHXwQ%2FWeZAf2BWr7LjI5X6yjvMMhkUIvP2E3p0ZPOL0rj24Lxcpoky3drjByZ02TJgYYmGYozkXPGtA06kRLMn6XNvk%2Foj50kyqxqm1ar3V%2FRkNky4uSRx9w53Qma%2BEKd%2Bnt%2BkqzXgLwmv6kys5%2BUDZlK%2Fg1MkyxFKxJWgwjjVxac4l60LsBiAxSOkKQ40FD5fqnd72PxvIeb3BR71nsdSZg%2BPtC6S%2FSAOy53GeNgNPVbpv7OLCBaQPzI77dEhBIPdOkOvW6I4taz36jDtQdLSSgcGYJuDljSjCHdwZqegxk1tv81nhuMy%2FBCDErBL7YpktNttjiXt2TUKP%2BZG3%2BuWpl98yoAUbqtb4tXNZmUbY%2Bta6ox1yao0Uw7CjSf3cTlbYYhItO3ajHF42fLtcKRIlidskUDykduomTvy%2B0TZpV7hlc2dDcluAiJcsQy2bFPMXT8XUz3FTb7HXBQSSi8w7dpoOk%2FNJ8nDASDZ%2FKQNjE5c7sGKcYKZ9JbygYtdT%2BaDOxErDps%2B2wFbYf0Y6ZCreokAwh7zrvgY6pgFQLpNY8fRfYiB6HyjjD%2FcR4EefeCMZyVi3JPrW8nt7sxLVl0%2BaP3KcWt7IQVZ8GzaKkwdYcC7hxR0%2BUwqweH8bAkTnY79zgDsmlvh21km2BHqQkOiFkjpWgh9%2F1HhzjNzR33jg9aeiqsSUPs2xpgpBug0KN7iI%2FzD9q%2F8W%2BzxEWAVqWoxPmoJ0vQNezdK1EZB0lFH5jaLf4zdZpYtfynbrnhM5n5yj&X-Amz-Signature=c77e10f8181bcd192bc2d17b259977e69e62b630e032ab1b35ee355b7092b734&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFC7SAQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICh4dZ57Qt%2ByEFVP2Z9K9M662nmk0P9vUB%2BDKHs205DuAiAxk8dyLFkVjqD1TxYI1niH0F6kzsTvv9W%2FLcw2tEy6Yir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMp8ueIcrt6M2nl5BtKtwDWLOikB1DXWXpuEHAyuiiFt%2Bx6YaCOuL3wn0QhbMJELr0NPn4COfByHnEdDPZ0I1q%2BnMFDTYshRkLQ%2Bm8V3MbYzD5n2QEWd5CdvHXwQ%2FWeZAf2BWr7LjI5X6yjvMMhkUIvP2E3p0ZPOL0rj24Lxcpoky3drjByZ02TJgYYmGYozkXPGtA06kRLMn6XNvk%2Foj50kyqxqm1ar3V%2FRkNky4uSRx9w53Qma%2BEKd%2Bnt%2BkqzXgLwmv6kys5%2BUDZlK%2Fg1MkyxFKxJWgwjjVxac4l60LsBiAxSOkKQ40FD5fqnd72PxvIeb3BR71nsdSZg%2BPtC6S%2FSAOy53GeNgNPVbpv7OLCBaQPzI77dEhBIPdOkOvW6I4taz36jDtQdLSSgcGYJuDljSjCHdwZqegxk1tv81nhuMy%2FBCDErBL7YpktNttjiXt2TUKP%2BZG3%2BuWpl98yoAUbqtb4tXNZmUbY%2Bta6ox1yao0Uw7CjSf3cTlbYYhItO3ajHF42fLtcKRIlidskUDykduomTvy%2B0TZpV7hlc2dDcluAiJcsQy2bFPMXT8XUz3FTb7HXBQSSi8w7dpoOk%2FNJ8nDASDZ%2FKQNjE5c7sGKcYKZ9JbygYtdT%2BaDOxErDps%2B2wFbYf0Y6ZCreokAwh7zrvgY6pgFQLpNY8fRfYiB6HyjjD%2FcR4EefeCMZyVi3JPrW8nt7sxLVl0%2BaP3KcWt7IQVZ8GzaKkwdYcC7hxR0%2BUwqweH8bAkTnY79zgDsmlvh21km2BHqQkOiFkjpWgh9%2F1HhzjNzR33jg9aeiqsSUPs2xpgpBug0KN7iI%2FzD9q%2F8W%2BzxEWAVqWoxPmoJ0vQNezdK1EZB0lFH5jaLf4zdZpYtfynbrnhM5n5yj&X-Amz-Signature=8bfee8df99fa2e8e94d5fae1477eb1283b5040175eea42772b1887a015b6bcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFC7SAQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICh4dZ57Qt%2ByEFVP2Z9K9M662nmk0P9vUB%2BDKHs205DuAiAxk8dyLFkVjqD1TxYI1niH0F6kzsTvv9W%2FLcw2tEy6Yir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMp8ueIcrt6M2nl5BtKtwDWLOikB1DXWXpuEHAyuiiFt%2Bx6YaCOuL3wn0QhbMJELr0NPn4COfByHnEdDPZ0I1q%2BnMFDTYshRkLQ%2Bm8V3MbYzD5n2QEWd5CdvHXwQ%2FWeZAf2BWr7LjI5X6yjvMMhkUIvP2E3p0ZPOL0rj24Lxcpoky3drjByZ02TJgYYmGYozkXPGtA06kRLMn6XNvk%2Foj50kyqxqm1ar3V%2FRkNky4uSRx9w53Qma%2BEKd%2Bnt%2BkqzXgLwmv6kys5%2BUDZlK%2Fg1MkyxFKxJWgwjjVxac4l60LsBiAxSOkKQ40FD5fqnd72PxvIeb3BR71nsdSZg%2BPtC6S%2FSAOy53GeNgNPVbpv7OLCBaQPzI77dEhBIPdOkOvW6I4taz36jDtQdLSSgcGYJuDljSjCHdwZqegxk1tv81nhuMy%2FBCDErBL7YpktNttjiXt2TUKP%2BZG3%2BuWpl98yoAUbqtb4tXNZmUbY%2Bta6ox1yao0Uw7CjSf3cTlbYYhItO3ajHF42fLtcKRIlidskUDykduomTvy%2B0TZpV7hlc2dDcluAiJcsQy2bFPMXT8XUz3FTb7HXBQSSi8w7dpoOk%2FNJ8nDASDZ%2FKQNjE5c7sGKcYKZ9JbygYtdT%2BaDOxErDps%2B2wFbYf0Y6ZCreokAwh7zrvgY6pgFQLpNY8fRfYiB6HyjjD%2FcR4EefeCMZyVi3JPrW8nt7sxLVl0%2BaP3KcWt7IQVZ8GzaKkwdYcC7hxR0%2BUwqweH8bAkTnY79zgDsmlvh21km2BHqQkOiFkjpWgh9%2F1HhzjNzR33jg9aeiqsSUPs2xpgpBug0KN7iI%2FzD9q%2F8W%2BzxEWAVqWoxPmoJ0vQNezdK1EZB0lFH5jaLf4zdZpYtfynbrnhM5n5yj&X-Amz-Signature=f42e1770c86865abdbc550354959b88b09ea09f732c0bbe8492a22f42fb291d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
