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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJTGYD7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRcsQxLLaluhscnR3Lmv4caBhPBprNfCOuCV9UU4djLAiALR8%2FiBru523Ou6Ws6hE3FTa0JnTPDMiKUSHf6FG25ECqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOK3LSLhYDTeV2jGKtwDT0%2Fp5USJj%2FFTtf5i3iVUgRoM%2Bg6hmyFvNgyTpOb%2FfP3PMlgP3hVi0pcinmJU%2F%2F5EDlhTOaN526Xjq3cqiSBCEnYe0Bps1G3Eu1I7Qr1qqXmqzZow3CzODX%2BLmv4GvThyq9FX0D0MkxJSdVKwUptnEGy1yEUddxw5iIJGEmrelSYE46iTRcoHQKvjHOQ4504k1LKcA3%2F1HCaie2h2%2FN4XCo848qudLd1wNFygL1Rs32rY1OOHE13GkWe8crF2zo4sqDlO%2Fs5AY8sBgOv6btHO1o3Wsi6TOh3QzurnGMq%2B933sB6MmCJKNKlSO82YadccfeV6Q7iEPYJfqeD4knt8NE9dk2nUrR4AuWFgpfkXaCbv3Fl9MKCxaVqrnFyW1fnc3q4aTrBlu28zTgGTbmdrqDxvZMhnqCJDGFjk2yQOU5ixkU1EE8JmgynhgUB9Lt8Qjl%2B15Xy0HAoUoyZcJzD576je2heavL6ihVDVAwqeowugGiRNDisncqAeAxy2oW0l9aqIn1XSYkERfNKk1nULxgzqaXoYKiQ5h9tSZRa2WBiyOUkxIpw7P1wdb0UMO081nBTWQcwHEeYoU5euNL%2FvMq5DRSaVy0AViyNI%2B1pV29Oc%2F1624Vx4Rv9%2FIh88w2NXrwQY6pgFqpPF56CAKURm4HtdVJTwm6QynmgVOZVUZLnG95WxjTweyguD9JkKMbK%2FCyj5IVJrqBP3%2B4IbuvbRxo7CKHzBuxm%2Ftr1A2ciK13dj%2BFIG%2F6wxQa9QOIGeIoZFUhqCCJDNiMG%2FXDW%2BUhJKxFbflumG0MJ3ZF9QpkY0KmvGQFLJhz7M9nArCyyhNQ1G3%2FTZqNOdUY6MGA0jow4%2FfDJgaGzlVdZw29BHY&X-Amz-Signature=bf742894107d6adefb0ff165e12021da6c3d2a436ad0784f467b38b82c26a5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJTGYD7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRcsQxLLaluhscnR3Lmv4caBhPBprNfCOuCV9UU4djLAiALR8%2FiBru523Ou6Ws6hE3FTa0JnTPDMiKUSHf6FG25ECqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOK3LSLhYDTeV2jGKtwDT0%2Fp5USJj%2FFTtf5i3iVUgRoM%2Bg6hmyFvNgyTpOb%2FfP3PMlgP3hVi0pcinmJU%2F%2F5EDlhTOaN526Xjq3cqiSBCEnYe0Bps1G3Eu1I7Qr1qqXmqzZow3CzODX%2BLmv4GvThyq9FX0D0MkxJSdVKwUptnEGy1yEUddxw5iIJGEmrelSYE46iTRcoHQKvjHOQ4504k1LKcA3%2F1HCaie2h2%2FN4XCo848qudLd1wNFygL1Rs32rY1OOHE13GkWe8crF2zo4sqDlO%2Fs5AY8sBgOv6btHO1o3Wsi6TOh3QzurnGMq%2B933sB6MmCJKNKlSO82YadccfeV6Q7iEPYJfqeD4knt8NE9dk2nUrR4AuWFgpfkXaCbv3Fl9MKCxaVqrnFyW1fnc3q4aTrBlu28zTgGTbmdrqDxvZMhnqCJDGFjk2yQOU5ixkU1EE8JmgynhgUB9Lt8Qjl%2B15Xy0HAoUoyZcJzD576je2heavL6ihVDVAwqeowugGiRNDisncqAeAxy2oW0l9aqIn1XSYkERfNKk1nULxgzqaXoYKiQ5h9tSZRa2WBiyOUkxIpw7P1wdb0UMO081nBTWQcwHEeYoU5euNL%2FvMq5DRSaVy0AViyNI%2B1pV29Oc%2F1624Vx4Rv9%2FIh88w2NXrwQY6pgFqpPF56CAKURm4HtdVJTwm6QynmgVOZVUZLnG95WxjTweyguD9JkKMbK%2FCyj5IVJrqBP3%2B4IbuvbRxo7CKHzBuxm%2Ftr1A2ciK13dj%2BFIG%2F6wxQa9QOIGeIoZFUhqCCJDNiMG%2FXDW%2BUhJKxFbflumG0MJ3ZF9QpkY0KmvGQFLJhz7M9nArCyyhNQ1G3%2FTZqNOdUY6MGA0jow4%2FfDJgaGzlVdZw29BHY&X-Amz-Signature=0375ee65a54371c97ce387be971fdd0a2962bf2a621f3cef05f1f2d30f9325ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJTGYD7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRcsQxLLaluhscnR3Lmv4caBhPBprNfCOuCV9UU4djLAiALR8%2FiBru523Ou6Ws6hE3FTa0JnTPDMiKUSHf6FG25ECqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOK3LSLhYDTeV2jGKtwDT0%2Fp5USJj%2FFTtf5i3iVUgRoM%2Bg6hmyFvNgyTpOb%2FfP3PMlgP3hVi0pcinmJU%2F%2F5EDlhTOaN526Xjq3cqiSBCEnYe0Bps1G3Eu1I7Qr1qqXmqzZow3CzODX%2BLmv4GvThyq9FX0D0MkxJSdVKwUptnEGy1yEUddxw5iIJGEmrelSYE46iTRcoHQKvjHOQ4504k1LKcA3%2F1HCaie2h2%2FN4XCo848qudLd1wNFygL1Rs32rY1OOHE13GkWe8crF2zo4sqDlO%2Fs5AY8sBgOv6btHO1o3Wsi6TOh3QzurnGMq%2B933sB6MmCJKNKlSO82YadccfeV6Q7iEPYJfqeD4knt8NE9dk2nUrR4AuWFgpfkXaCbv3Fl9MKCxaVqrnFyW1fnc3q4aTrBlu28zTgGTbmdrqDxvZMhnqCJDGFjk2yQOU5ixkU1EE8JmgynhgUB9Lt8Qjl%2B15Xy0HAoUoyZcJzD576je2heavL6ihVDVAwqeowugGiRNDisncqAeAxy2oW0l9aqIn1XSYkERfNKk1nULxgzqaXoYKiQ5h9tSZRa2WBiyOUkxIpw7P1wdb0UMO081nBTWQcwHEeYoU5euNL%2FvMq5DRSaVy0AViyNI%2B1pV29Oc%2F1624Vx4Rv9%2FIh88w2NXrwQY6pgFqpPF56CAKURm4HtdVJTwm6QynmgVOZVUZLnG95WxjTweyguD9JkKMbK%2FCyj5IVJrqBP3%2B4IbuvbRxo7CKHzBuxm%2Ftr1A2ciK13dj%2BFIG%2F6wxQa9QOIGeIoZFUhqCCJDNiMG%2FXDW%2BUhJKxFbflumG0MJ3ZF9QpkY0KmvGQFLJhz7M9nArCyyhNQ1G3%2FTZqNOdUY6MGA0jow4%2FfDJgaGzlVdZw29BHY&X-Amz-Signature=3ea79b3da00b77fe05c7e290e65c75b5124c5bfda36eed30cbd139b7cca04a29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
