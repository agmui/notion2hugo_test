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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGGEEOC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC8RMBSczPJs7ICbRjTe1Xmkhzyr1s284ifpDdVWcc3AiEA92LZ3Vdp7sZCqANJLIbYOLoevW9Odoaz9l229Lm%2BQJ4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD4Xr8el2uGUO%2B%2FoSrcA2n2%2BgnzMRclcxmoEnPthOV0LbQf8fhUNsrghDiF7aWEaeiqGZjeGZIT7aILr2VroG3Lr8aOk5zLAgpsc6YofsNF4YABs1LRHRnLAiOIludvxYgAODE%2FpRzlR9iuI6LUQHzDAKVj1OjTlEYDg9DQ0PrA3IR47C2NkJ5hWm1JYHFXKBKpp8rBwPB4mOvlaRgQvBjTgpyeiHr2OUfF%2FXpDKYLvjkWgupQkLK1TuSjpOIHOodyhH865fS6277CSeESsCGPeOCi3c8%2BgDQoWNTxhVY%2FzsUQV6ZrDY%2BhHJimioXFLRVskZ7FKGPimmUAVFoyRauGtMq3GQFkdCO47dg5MNynW3R2l63y8nwd8ahE3sLLOyf%2B5mxIs%2F6gRdVfIuCqvN2o2Vw8Kl96gbZNEtL008xAteYu%2BpBahoVmsuRIbtdvSjrbwapHRCuSSkaB4lgdYOVCBSjLVztgPOnsTD2rYGEpA6CuYWYPZQKrUeCHi3Sw6qTxEnILreAWpLlk9OChMs7KVnMg6JrQ5f5mSj%2Bxhc%2Bzbxu%2FiQ%2BifHLAm2QkibXbkjSfE3RNgsSde9xxcRh7qzyk3MYHLC2iTriOpjlDkxPQG58kFN9iTrzKnba8g6AbR8UUz9D0OwWTc7%2BAbML6tscEGOqUBNqt%2Beh6%2FQ0tWok%2FRvL3bZaKhBpbTr4UYuHFbwOzpc5Aor9NKLYkolenUaf%2Fb2ja9fN32AScPW6sBlYOGxE1m27brftfzamhAHM8G5u2j%2F0SYCBFOT8BkrMLfTErSMB22VlgH3Ogw8rShTyhe1i7%2Fg0QdJ5YJvvdawURT5Dv%2FljtKxlaUXNBYH6CpetvfVr%2B52kO8kw%2BM4O5JDvhAkosH0oBb18KR&X-Amz-Signature=9ef3efc0b559876a48dd4352d65e022c5f228907f0e98158f1f18be9b5ad1237&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGGEEOC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC8RMBSczPJs7ICbRjTe1Xmkhzyr1s284ifpDdVWcc3AiEA92LZ3Vdp7sZCqANJLIbYOLoevW9Odoaz9l229Lm%2BQJ4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD4Xr8el2uGUO%2B%2FoSrcA2n2%2BgnzMRclcxmoEnPthOV0LbQf8fhUNsrghDiF7aWEaeiqGZjeGZIT7aILr2VroG3Lr8aOk5zLAgpsc6YofsNF4YABs1LRHRnLAiOIludvxYgAODE%2FpRzlR9iuI6LUQHzDAKVj1OjTlEYDg9DQ0PrA3IR47C2NkJ5hWm1JYHFXKBKpp8rBwPB4mOvlaRgQvBjTgpyeiHr2OUfF%2FXpDKYLvjkWgupQkLK1TuSjpOIHOodyhH865fS6277CSeESsCGPeOCi3c8%2BgDQoWNTxhVY%2FzsUQV6ZrDY%2BhHJimioXFLRVskZ7FKGPimmUAVFoyRauGtMq3GQFkdCO47dg5MNynW3R2l63y8nwd8ahE3sLLOyf%2B5mxIs%2F6gRdVfIuCqvN2o2Vw8Kl96gbZNEtL008xAteYu%2BpBahoVmsuRIbtdvSjrbwapHRCuSSkaB4lgdYOVCBSjLVztgPOnsTD2rYGEpA6CuYWYPZQKrUeCHi3Sw6qTxEnILreAWpLlk9OChMs7KVnMg6JrQ5f5mSj%2Bxhc%2Bzbxu%2FiQ%2BifHLAm2QkibXbkjSfE3RNgsSde9xxcRh7qzyk3MYHLC2iTriOpjlDkxPQG58kFN9iTrzKnba8g6AbR8UUz9D0OwWTc7%2BAbML6tscEGOqUBNqt%2Beh6%2FQ0tWok%2FRvL3bZaKhBpbTr4UYuHFbwOzpc5Aor9NKLYkolenUaf%2Fb2ja9fN32AScPW6sBlYOGxE1m27brftfzamhAHM8G5u2j%2F0SYCBFOT8BkrMLfTErSMB22VlgH3Ogw8rShTyhe1i7%2Fg0QdJ5YJvvdawURT5Dv%2FljtKxlaUXNBYH6CpetvfVr%2B52kO8kw%2BM4O5JDvhAkosH0oBb18KR&X-Amz-Signature=5024d97489bfaefb07d12b2f8be864cc86ee3e67f0d4c8eeb3a78f99f1bc8b76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGGEEOC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC8RMBSczPJs7ICbRjTe1Xmkhzyr1s284ifpDdVWcc3AiEA92LZ3Vdp7sZCqANJLIbYOLoevW9Odoaz9l229Lm%2BQJ4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD4Xr8el2uGUO%2B%2FoSrcA2n2%2BgnzMRclcxmoEnPthOV0LbQf8fhUNsrghDiF7aWEaeiqGZjeGZIT7aILr2VroG3Lr8aOk5zLAgpsc6YofsNF4YABs1LRHRnLAiOIludvxYgAODE%2FpRzlR9iuI6LUQHzDAKVj1OjTlEYDg9DQ0PrA3IR47C2NkJ5hWm1JYHFXKBKpp8rBwPB4mOvlaRgQvBjTgpyeiHr2OUfF%2FXpDKYLvjkWgupQkLK1TuSjpOIHOodyhH865fS6277CSeESsCGPeOCi3c8%2BgDQoWNTxhVY%2FzsUQV6ZrDY%2BhHJimioXFLRVskZ7FKGPimmUAVFoyRauGtMq3GQFkdCO47dg5MNynW3R2l63y8nwd8ahE3sLLOyf%2B5mxIs%2F6gRdVfIuCqvN2o2Vw8Kl96gbZNEtL008xAteYu%2BpBahoVmsuRIbtdvSjrbwapHRCuSSkaB4lgdYOVCBSjLVztgPOnsTD2rYGEpA6CuYWYPZQKrUeCHi3Sw6qTxEnILreAWpLlk9OChMs7KVnMg6JrQ5f5mSj%2Bxhc%2Bzbxu%2FiQ%2BifHLAm2QkibXbkjSfE3RNgsSde9xxcRh7qzyk3MYHLC2iTriOpjlDkxPQG58kFN9iTrzKnba8g6AbR8UUz9D0OwWTc7%2BAbML6tscEGOqUBNqt%2Beh6%2FQ0tWok%2FRvL3bZaKhBpbTr4UYuHFbwOzpc5Aor9NKLYkolenUaf%2Fb2ja9fN32AScPW6sBlYOGxE1m27brftfzamhAHM8G5u2j%2F0SYCBFOT8BkrMLfTErSMB22VlgH3Ogw8rShTyhe1i7%2Fg0QdJ5YJvvdawURT5Dv%2FljtKxlaUXNBYH6CpetvfVr%2B52kO8kw%2BM4O5JDvhAkosH0oBb18KR&X-Amz-Signature=7f5872bc8de3647229523c17eb7dd395ea0f3348e619fb6a903c5442d7ed3fda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
