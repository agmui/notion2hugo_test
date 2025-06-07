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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPPM4OY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC55O3esD9Q6xqQZV7BODn%2BDy24B4fIBHoas2318myRXAIhAKEAV%2FwO9%2Fcu2L5z%2B0AiO%2Fx5kB5KXzAeIxbRdwDoho1aKv8DCHcQABoMNjM3NDIzMTgzODA1Igyemc8Tm88e9UxHwTEq3APlkSX55k%2FAKVb9m5OyFolGSBZpmeGbWyjb2BsIARqm9pTMfiSXYczNxSyXvKXhQVVlerIYhiazx7vhJBYpEH%2Bo2bc6c8j%2FZUBaze%2BmvcO%2FETGY7hFUEVR6nQqc5D1EmPjkzXgS945ZBiZqXgJoUgCJq3HaIEFfRyu7IrXkAzMAeiFtgKx%2F2gHpxhEvjB9RA%2Bitix2r3%2FsUirpgqQTXPSetjty1Yu%2F7bPe5axcKSs04yowB%2BXxeUkMs42ogE3JNj48tqDp%2BPF7syArvbZhNp5D3K6Vvtll9kMFymzGJO6oUvAYoSBqh5wm3OBYARoL%2BlcjmtkluxYLAs6zs3KDHNq0b90NjkAstg3jS4lSKpqNEvCZUQgk6NVnfuUkoXOMlpAc8%2BplkRMR1CXZ5EeglkQwk2rgMveYRphbgU5DnTQsiAnMbf4hAG5kmaAqjaMxrgUr838VKkMfx%2Bf0vWdM8jG3fJpdUDNAQsICIrtGmaGGu4nBUq09AiXNNzo2j5GE7Xv36RddLN%2FRELU7QKnRHFuYVsxEUjgzDZ8Hwez0oCmt94sX%2B0VYjb17sQPc2CNMffhTDBVGuVFaxY1JvOcooIYakMF5%2B%2BpkuXocZjMMhh6fRrqFhVZqsOKDn%2F6I8kzDDgZHCBjqkAU%2FoDkAqs256KpFqgbVE79Aq6ZaCo2onAqlvz2rODdRKrFynimMciDI1mhNJCwjalyN32Ww%2B4f2WVvixs6QBiYu2iaZ6EHt82yE3%2Fe3OhVox4FjKRrzjYOoO4iNfCjTTTdc2r59VVYr%2BcuMSiFPnNVV%2BD6lc%2FI0ij1m91IrAQKVdoEn0kmE2%2Bw0Pjj%2FFiPAVo0fGyNMob3NhtD7C1bvcy9zfq8Ys&X-Amz-Signature=5604e88c8465dd3672099dd88d3a5f0c7606f45b343b2cc6c6446d17e2a4e810&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPPM4OY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC55O3esD9Q6xqQZV7BODn%2BDy24B4fIBHoas2318myRXAIhAKEAV%2FwO9%2Fcu2L5z%2B0AiO%2Fx5kB5KXzAeIxbRdwDoho1aKv8DCHcQABoMNjM3NDIzMTgzODA1Igyemc8Tm88e9UxHwTEq3APlkSX55k%2FAKVb9m5OyFolGSBZpmeGbWyjb2BsIARqm9pTMfiSXYczNxSyXvKXhQVVlerIYhiazx7vhJBYpEH%2Bo2bc6c8j%2FZUBaze%2BmvcO%2FETGY7hFUEVR6nQqc5D1EmPjkzXgS945ZBiZqXgJoUgCJq3HaIEFfRyu7IrXkAzMAeiFtgKx%2F2gHpxhEvjB9RA%2Bitix2r3%2FsUirpgqQTXPSetjty1Yu%2F7bPe5axcKSs04yowB%2BXxeUkMs42ogE3JNj48tqDp%2BPF7syArvbZhNp5D3K6Vvtll9kMFymzGJO6oUvAYoSBqh5wm3OBYARoL%2BlcjmtkluxYLAs6zs3KDHNq0b90NjkAstg3jS4lSKpqNEvCZUQgk6NVnfuUkoXOMlpAc8%2BplkRMR1CXZ5EeglkQwk2rgMveYRphbgU5DnTQsiAnMbf4hAG5kmaAqjaMxrgUr838VKkMfx%2Bf0vWdM8jG3fJpdUDNAQsICIrtGmaGGu4nBUq09AiXNNzo2j5GE7Xv36RddLN%2FRELU7QKnRHFuYVsxEUjgzDZ8Hwez0oCmt94sX%2B0VYjb17sQPc2CNMffhTDBVGuVFaxY1JvOcooIYakMF5%2B%2BpkuXocZjMMhh6fRrqFhVZqsOKDn%2F6I8kzDDgZHCBjqkAU%2FoDkAqs256KpFqgbVE79Aq6ZaCo2onAqlvz2rODdRKrFynimMciDI1mhNJCwjalyN32Ww%2B4f2WVvixs6QBiYu2iaZ6EHt82yE3%2Fe3OhVox4FjKRrzjYOoO4iNfCjTTTdc2r59VVYr%2BcuMSiFPnNVV%2BD6lc%2FI0ij1m91IrAQKVdoEn0kmE2%2Bw0Pjj%2FFiPAVo0fGyNMob3NhtD7C1bvcy9zfq8Ys&X-Amz-Signature=0fa88cb9b495891f60a367a0d55f121592d30d43f4ad5bf383fc21c689461fba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPPM4OY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC55O3esD9Q6xqQZV7BODn%2BDy24B4fIBHoas2318myRXAIhAKEAV%2FwO9%2Fcu2L5z%2B0AiO%2Fx5kB5KXzAeIxbRdwDoho1aKv8DCHcQABoMNjM3NDIzMTgzODA1Igyemc8Tm88e9UxHwTEq3APlkSX55k%2FAKVb9m5OyFolGSBZpmeGbWyjb2BsIARqm9pTMfiSXYczNxSyXvKXhQVVlerIYhiazx7vhJBYpEH%2Bo2bc6c8j%2FZUBaze%2BmvcO%2FETGY7hFUEVR6nQqc5D1EmPjkzXgS945ZBiZqXgJoUgCJq3HaIEFfRyu7IrXkAzMAeiFtgKx%2F2gHpxhEvjB9RA%2Bitix2r3%2FsUirpgqQTXPSetjty1Yu%2F7bPe5axcKSs04yowB%2BXxeUkMs42ogE3JNj48tqDp%2BPF7syArvbZhNp5D3K6Vvtll9kMFymzGJO6oUvAYoSBqh5wm3OBYARoL%2BlcjmtkluxYLAs6zs3KDHNq0b90NjkAstg3jS4lSKpqNEvCZUQgk6NVnfuUkoXOMlpAc8%2BplkRMR1CXZ5EeglkQwk2rgMveYRphbgU5DnTQsiAnMbf4hAG5kmaAqjaMxrgUr838VKkMfx%2Bf0vWdM8jG3fJpdUDNAQsICIrtGmaGGu4nBUq09AiXNNzo2j5GE7Xv36RddLN%2FRELU7QKnRHFuYVsxEUjgzDZ8Hwez0oCmt94sX%2B0VYjb17sQPc2CNMffhTDBVGuVFaxY1JvOcooIYakMF5%2B%2BpkuXocZjMMhh6fRrqFhVZqsOKDn%2F6I8kzDDgZHCBjqkAU%2FoDkAqs256KpFqgbVE79Aq6ZaCo2onAqlvz2rODdRKrFynimMciDI1mhNJCwjalyN32Ww%2B4f2WVvixs6QBiYu2iaZ6EHt82yE3%2Fe3OhVox4FjKRrzjYOoO4iNfCjTTTdc2r59VVYr%2BcuMSiFPnNVV%2BD6lc%2FI0ij1m91IrAQKVdoEn0kmE2%2Bw0Pjj%2FFiPAVo0fGyNMob3NhtD7C1bvcy9zfq8Ys&X-Amz-Signature=7d04ba852ca199cb71600b82214eb5efd850c9b5058ce31d7875627894c74b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
