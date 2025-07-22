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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745HY4PN%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNjFtOXbYZF4yo%2FbeGJrZ3huyVljK2%2FxghrU3thmtsuAiBlg31wEajaeR0N9oyc8maLqZlJq0be8RVmyxulvKXnASqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsEU396BkZHiVyl4KtwD7ywLGixF8OMKc4MVfftcoBUTqGDCGQMFLcwFmvgrIbwVoNzz7nadfgFUpmbXqK7UknGoM2PFq5VGdPaGq6NqICO93ZmYTd0oW%2BK3gePE8K2QaV9KPmrSrYt99qZ9S3wH41vyqHdopuBtMRs2wjAn%2BqYjmEo6c6XP4v8PfeeKChmjyrhxB3qQalcVTSLhR%2F5gA%2Byp6hnFHM2wrBB8rUnJvVO8SoRb1onlun8V6LzisW8xjl8NPucs8Pk8S7PkZxk58ZcDUR%2Bu2j4woNOW7fx4PFQ4Y6LcMmi%2FZsaOgmdW%2BTsOXxAeOkOhCSsZhhXTbjupEINMBiKrhM4HH3kw5N6VmgObJPAjHAUi31%2BE8iz4sCJ6Vi2daXAe1l0%2BYUT1tKptQf4xJs11VIdVXgfWklPx7%2FS65NxJwDY7T1xUOMV1TTuGZ3uRjLyqmJ3HhJAkl%2BkLCvrR%2BUpYjndsg0EylnAoe3dphDXUl2uyEtakEqemRhWikgM6q6D1IPdCNYYTGiSlGj7U7dqSvZpqnQPXLoXo3NMVIyedaI75Fp14%2BC4CYS66LUDuUDj3KgZovHdl5%2B1rKrUnO4hcz34ilE9pp8E1jomxvPQv%2F7ncALBpjt9PfSJD9QLcGkuet8PmyXowtaD7wwY6pgEvhaiRx84vlWjt34LuZR2WrCKJWdZPESeJHjSP1kJCL9rolf2Pu0XccmE8ivN5YfeGsUHXpWlFc5ejn4Gl6VdWloOn6yGf6BNNT3%2FKn4zTGd%2BuRTw9JCWyBYfCq5U3KjSp7cBvTTZGAavd8ZU%2BcCBFdp0cazVxsyM1jhDIL6%2FMc9eG6BrX68kQ5gNEXP9q%2B8O7NjqxQI1%2FTN0n5K%2BzyMfLS0cdvKJl&X-Amz-Signature=27e61c2b2e83fc6bed2481679519b96091966783b9a2d3e71746846e21b79a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745HY4PN%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNjFtOXbYZF4yo%2FbeGJrZ3huyVljK2%2FxghrU3thmtsuAiBlg31wEajaeR0N9oyc8maLqZlJq0be8RVmyxulvKXnASqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsEU396BkZHiVyl4KtwD7ywLGixF8OMKc4MVfftcoBUTqGDCGQMFLcwFmvgrIbwVoNzz7nadfgFUpmbXqK7UknGoM2PFq5VGdPaGq6NqICO93ZmYTd0oW%2BK3gePE8K2QaV9KPmrSrYt99qZ9S3wH41vyqHdopuBtMRs2wjAn%2BqYjmEo6c6XP4v8PfeeKChmjyrhxB3qQalcVTSLhR%2F5gA%2Byp6hnFHM2wrBB8rUnJvVO8SoRb1onlun8V6LzisW8xjl8NPucs8Pk8S7PkZxk58ZcDUR%2Bu2j4woNOW7fx4PFQ4Y6LcMmi%2FZsaOgmdW%2BTsOXxAeOkOhCSsZhhXTbjupEINMBiKrhM4HH3kw5N6VmgObJPAjHAUi31%2BE8iz4sCJ6Vi2daXAe1l0%2BYUT1tKptQf4xJs11VIdVXgfWklPx7%2FS65NxJwDY7T1xUOMV1TTuGZ3uRjLyqmJ3HhJAkl%2BkLCvrR%2BUpYjndsg0EylnAoe3dphDXUl2uyEtakEqemRhWikgM6q6D1IPdCNYYTGiSlGj7U7dqSvZpqnQPXLoXo3NMVIyedaI75Fp14%2BC4CYS66LUDuUDj3KgZovHdl5%2B1rKrUnO4hcz34ilE9pp8E1jomxvPQv%2F7ncALBpjt9PfSJD9QLcGkuet8PmyXowtaD7wwY6pgEvhaiRx84vlWjt34LuZR2WrCKJWdZPESeJHjSP1kJCL9rolf2Pu0XccmE8ivN5YfeGsUHXpWlFc5ejn4Gl6VdWloOn6yGf6BNNT3%2FKn4zTGd%2BuRTw9JCWyBYfCq5U3KjSp7cBvTTZGAavd8ZU%2BcCBFdp0cazVxsyM1jhDIL6%2FMc9eG6BrX68kQ5gNEXP9q%2B8O7NjqxQI1%2FTN0n5K%2BzyMfLS0cdvKJl&X-Amz-Signature=b7b67e0c2eb22c9d10f6b9609df78a868e0efa43895fa7a626901f915d505e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745HY4PN%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNjFtOXbYZF4yo%2FbeGJrZ3huyVljK2%2FxghrU3thmtsuAiBlg31wEajaeR0N9oyc8maLqZlJq0be8RVmyxulvKXnASqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsEU396BkZHiVyl4KtwD7ywLGixF8OMKc4MVfftcoBUTqGDCGQMFLcwFmvgrIbwVoNzz7nadfgFUpmbXqK7UknGoM2PFq5VGdPaGq6NqICO93ZmYTd0oW%2BK3gePE8K2QaV9KPmrSrYt99qZ9S3wH41vyqHdopuBtMRs2wjAn%2BqYjmEo6c6XP4v8PfeeKChmjyrhxB3qQalcVTSLhR%2F5gA%2Byp6hnFHM2wrBB8rUnJvVO8SoRb1onlun8V6LzisW8xjl8NPucs8Pk8S7PkZxk58ZcDUR%2Bu2j4woNOW7fx4PFQ4Y6LcMmi%2FZsaOgmdW%2BTsOXxAeOkOhCSsZhhXTbjupEINMBiKrhM4HH3kw5N6VmgObJPAjHAUi31%2BE8iz4sCJ6Vi2daXAe1l0%2BYUT1tKptQf4xJs11VIdVXgfWklPx7%2FS65NxJwDY7T1xUOMV1TTuGZ3uRjLyqmJ3HhJAkl%2BkLCvrR%2BUpYjndsg0EylnAoe3dphDXUl2uyEtakEqemRhWikgM6q6D1IPdCNYYTGiSlGj7U7dqSvZpqnQPXLoXo3NMVIyedaI75Fp14%2BC4CYS66LUDuUDj3KgZovHdl5%2B1rKrUnO4hcz34ilE9pp8E1jomxvPQv%2F7ncALBpjt9PfSJD9QLcGkuet8PmyXowtaD7wwY6pgEvhaiRx84vlWjt34LuZR2WrCKJWdZPESeJHjSP1kJCL9rolf2Pu0XccmE8ivN5YfeGsUHXpWlFc5ejn4Gl6VdWloOn6yGf6BNNT3%2FKn4zTGd%2BuRTw9JCWyBYfCq5U3KjSp7cBvTTZGAavd8ZU%2BcCBFdp0cazVxsyM1jhDIL6%2FMc9eG6BrX68kQ5gNEXP9q%2B8O7NjqxQI1%2FTN0n5K%2BzyMfLS0cdvKJl&X-Amz-Signature=d87a281e53fe27e7c8a3fc534a59fb02473b572fa0b6432078a13503d9714fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
