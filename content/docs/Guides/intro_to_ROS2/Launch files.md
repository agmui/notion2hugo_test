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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKZKXMB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCutG1D1qhFXkUWsyMXJcXUcnCRYgaJqS5AuvuftmpqEAIhAL8D6PenU4DAXgvDMuML9mZ6MIboUBuWYhq15smI6n0IKv8DCCUQABoMNjM3NDIzMTgzODA1Igz2UXp42w43skQ0vcoq3APUY1me6N8h%2BScT9yt76A%2Fr0ED28TF3crj0sgRHMLBUkysONh5SKvPoosl85H%2FjduoK4d3WQR0ZiWxSyPcYNLX63PA3nlO3l068v%2F%2BGju2yhsiaSNu8b6vXiMA32B%2B5L%2Bj7sSzEiUd39Vw0Tj6CGKVOVGf7ZGiinPAECGmo1n7ffS2IBcEGzY8d6ir26CH9Qr57uLxHxRLmPlVqmH13lMUmB7Z4n3aoDYTnq%2Bb0k%2FFySdp4xo9ClWgVevlNSt6ZlqP5o9yBioKfb81GetoNY8RCawmUINPF3lQrXeHvVgBS3rc5qV2FOyIC5mEwz%2FlHzmv3vVf7%2FL5wV0EkhmVIyDPfqsv9yQWCerVcN5VIwmnet5ho0eU2fnpMD1bxiWqf%2BB1UyZB3fv%2FEZBKPaENVLwo%2B6%2B049AdlcjOp5H%2BygVxqMDoZTi0%2Fn4QHHmrL0iXZ%2Bid1wYt7%2F7gpSWc7rmLJ5W3eTWwoTjNBKNKKd4uloxgfDMFdx%2BjyjP1aw8yXAPIgglUwxt2Kl3fvtGQNzOGW9KLL3rq7fp7b2EgeNmWzhAWxPUrArt5JW856HXnu%2BuR%2F5RCPfFoWsLPk7yKXQ5gjYDXqvWoL378Pva0Qt%2F%2BqPYG5l3pBzAahsWeNK2AyKDDViP%2FBBjqkAVzQqTGFYIBEHShBZ%2BQ%2F1NMAJR74mLe0n8ntrfxCJ6eawHRQk32wvRg5kweBMTvxPZeQB9%2FCMNuddApUgTz485aSJrUpK41nslJ6J%2BwNWDwOcQixU9tAAytfqcXukQx6FzGurioaBxvpvEh4kQfQWQ3akZ8US0TxiK7FB%2Bi4dCkZTqrnnWDaMg6nnlk1KFEnJ9pUQuPy5K6bK%2BP07NlysESWjYDb&X-Amz-Signature=d20cb8f2a42905e4ab193c6229ce929f5c4719544e895a6316c6e1c810be4778&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKZKXMB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCutG1D1qhFXkUWsyMXJcXUcnCRYgaJqS5AuvuftmpqEAIhAL8D6PenU4DAXgvDMuML9mZ6MIboUBuWYhq15smI6n0IKv8DCCUQABoMNjM3NDIzMTgzODA1Igz2UXp42w43skQ0vcoq3APUY1me6N8h%2BScT9yt76A%2Fr0ED28TF3crj0sgRHMLBUkysONh5SKvPoosl85H%2FjduoK4d3WQR0ZiWxSyPcYNLX63PA3nlO3l068v%2F%2BGju2yhsiaSNu8b6vXiMA32B%2B5L%2Bj7sSzEiUd39Vw0Tj6CGKVOVGf7ZGiinPAECGmo1n7ffS2IBcEGzY8d6ir26CH9Qr57uLxHxRLmPlVqmH13lMUmB7Z4n3aoDYTnq%2Bb0k%2FFySdp4xo9ClWgVevlNSt6ZlqP5o9yBioKfb81GetoNY8RCawmUINPF3lQrXeHvVgBS3rc5qV2FOyIC5mEwz%2FlHzmv3vVf7%2FL5wV0EkhmVIyDPfqsv9yQWCerVcN5VIwmnet5ho0eU2fnpMD1bxiWqf%2BB1UyZB3fv%2FEZBKPaENVLwo%2B6%2B049AdlcjOp5H%2BygVxqMDoZTi0%2Fn4QHHmrL0iXZ%2Bid1wYt7%2F7gpSWc7rmLJ5W3eTWwoTjNBKNKKd4uloxgfDMFdx%2BjyjP1aw8yXAPIgglUwxt2Kl3fvtGQNzOGW9KLL3rq7fp7b2EgeNmWzhAWxPUrArt5JW856HXnu%2BuR%2F5RCPfFoWsLPk7yKXQ5gjYDXqvWoL378Pva0Qt%2F%2BqPYG5l3pBzAahsWeNK2AyKDDViP%2FBBjqkAVzQqTGFYIBEHShBZ%2BQ%2F1NMAJR74mLe0n8ntrfxCJ6eawHRQk32wvRg5kweBMTvxPZeQB9%2FCMNuddApUgTz485aSJrUpK41nslJ6J%2BwNWDwOcQixU9tAAytfqcXukQx6FzGurioaBxvpvEh4kQfQWQ3akZ8US0TxiK7FB%2Bi4dCkZTqrnnWDaMg6nnlk1KFEnJ9pUQuPy5K6bK%2BP07NlysESWjYDb&X-Amz-Signature=9e4778661c88a8f8829b1795ff111bad6e49e9e479e355a931ac89322528d821&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKZKXMB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCutG1D1qhFXkUWsyMXJcXUcnCRYgaJqS5AuvuftmpqEAIhAL8D6PenU4DAXgvDMuML9mZ6MIboUBuWYhq15smI6n0IKv8DCCUQABoMNjM3NDIzMTgzODA1Igz2UXp42w43skQ0vcoq3APUY1me6N8h%2BScT9yt76A%2Fr0ED28TF3crj0sgRHMLBUkysONh5SKvPoosl85H%2FjduoK4d3WQR0ZiWxSyPcYNLX63PA3nlO3l068v%2F%2BGju2yhsiaSNu8b6vXiMA32B%2B5L%2Bj7sSzEiUd39Vw0Tj6CGKVOVGf7ZGiinPAECGmo1n7ffS2IBcEGzY8d6ir26CH9Qr57uLxHxRLmPlVqmH13lMUmB7Z4n3aoDYTnq%2Bb0k%2FFySdp4xo9ClWgVevlNSt6ZlqP5o9yBioKfb81GetoNY8RCawmUINPF3lQrXeHvVgBS3rc5qV2FOyIC5mEwz%2FlHzmv3vVf7%2FL5wV0EkhmVIyDPfqsv9yQWCerVcN5VIwmnet5ho0eU2fnpMD1bxiWqf%2BB1UyZB3fv%2FEZBKPaENVLwo%2B6%2B049AdlcjOp5H%2BygVxqMDoZTi0%2Fn4QHHmrL0iXZ%2Bid1wYt7%2F7gpSWc7rmLJ5W3eTWwoTjNBKNKKd4uloxgfDMFdx%2BjyjP1aw8yXAPIgglUwxt2Kl3fvtGQNzOGW9KLL3rq7fp7b2EgeNmWzhAWxPUrArt5JW856HXnu%2BuR%2F5RCPfFoWsLPk7yKXQ5gjYDXqvWoL378Pva0Qt%2F%2BqPYG5l3pBzAahsWeNK2AyKDDViP%2FBBjqkAVzQqTGFYIBEHShBZ%2BQ%2F1NMAJR74mLe0n8ntrfxCJ6eawHRQk32wvRg5kweBMTvxPZeQB9%2FCMNuddApUgTz485aSJrUpK41nslJ6J%2BwNWDwOcQixU9tAAytfqcXukQx6FzGurioaBxvpvEh4kQfQWQ3akZ8US0TxiK7FB%2Bi4dCkZTqrnnWDaMg6nnlk1KFEnJ9pUQuPy5K6bK%2BP07NlysESWjYDb&X-Amz-Signature=9978a1aac50e7f73eb1dd0f2f22db0c303f6236934327d237d3e63dbbbd44652&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
