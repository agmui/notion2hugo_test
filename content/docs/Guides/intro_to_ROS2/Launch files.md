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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFIRQRH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBAcQ3YeWLiEx6KAs8BC4U%2Fk4Z43KhoYzKQ8l688ngIhALQmeU6%2FLxfr5Qjgk2sIaSPNFebfVbigDxXQwOv4siB3KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrhSHJUUX8Shyj9qMq3APsHGfYiafonRazCM1fHuKuxxcmz%2F08oygZqzatiq5U8eHPjzWKJxJDnHurZ4RAr4Tsvdfdu57l3CpgCI4KEf20%2BI7deqUZuj2kF2Z6h1d9Gh0U7MKu0%2BTA8HmEF9Tt29vJSP8UgHd92GfWDe2qSJjENOjHa%2BKaR7E71c4etvRFT6q%2BYhjJDS8zTg8eJ3ePCYA6vqEO%2Fkpg8asGD98W1Dj1tRQNc8C8HyC%2FXyEtQ7G%2BPU%2Bh2a4cF0lf41jIxhgaiyr9dOwIdTPcKuXVclDWS%2BXOOwSn5XuUng0%2FCUYUf9xiNc0fC9Cyq0HxGkt%2FSUSYV3Mqk5YAgRyxeQQlBEIHZQK8pNZhZQ5EXT6eEmh4TXo1HGv%2FpkDaVnJJ5W6xITijwAlI%2FYe%2BslWZtxs5niyUVJ8JRnTUOdUIqJiGF3rQeBZbDw6aJLYBKcdVqMDS%2BVr1EkLfDo9KTf%2FHWPqbrtcA098YeEXQvaaL5VzsU9%2Bk3pWox%2F1Q1UhFtcdtAIcInyROoncoIIaCTGVeSOGxQ%2FO5Crh86d6K%2F0IUm0p3DTZNjG%2Borg8jmur%2FLMinZSSb8QB%2Fxzvpr34U7et8Ck0DcSY%2F3kZ5NJAUA5QpRdrSR%2B%2F0ydSPpfNZrfrLsRC7AS9%2B0zDIhozABjqkAUKcMoD9fwmXZepscAHXdZGYw1g01A%2Bwni%2BaSnp8fFPAmY1gENNay50TlMM1LyMg0l0kk2SFnPPA3%2FB6NHVpcsgDQ5PxLzlvjTAqj1qOEizC5RRsJSm3f00cUG5QGxzEwwjJeUTvcPQPblO2BoOs7ZmlWiFoudGXqGf1uqAwK2EBBzhLatV1pO%2BxX2GvqIXe84HKIu0lDdGDh5xREPbrXMDAoDBZ&X-Amz-Signature=520385f1fa2611291cf582afcbe6e045418a8610e05bad1fe04750f873f03564&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFIRQRH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBAcQ3YeWLiEx6KAs8BC4U%2Fk4Z43KhoYzKQ8l688ngIhALQmeU6%2FLxfr5Qjgk2sIaSPNFebfVbigDxXQwOv4siB3KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrhSHJUUX8Shyj9qMq3APsHGfYiafonRazCM1fHuKuxxcmz%2F08oygZqzatiq5U8eHPjzWKJxJDnHurZ4RAr4Tsvdfdu57l3CpgCI4KEf20%2BI7deqUZuj2kF2Z6h1d9Gh0U7MKu0%2BTA8HmEF9Tt29vJSP8UgHd92GfWDe2qSJjENOjHa%2BKaR7E71c4etvRFT6q%2BYhjJDS8zTg8eJ3ePCYA6vqEO%2Fkpg8asGD98W1Dj1tRQNc8C8HyC%2FXyEtQ7G%2BPU%2Bh2a4cF0lf41jIxhgaiyr9dOwIdTPcKuXVclDWS%2BXOOwSn5XuUng0%2FCUYUf9xiNc0fC9Cyq0HxGkt%2FSUSYV3Mqk5YAgRyxeQQlBEIHZQK8pNZhZQ5EXT6eEmh4TXo1HGv%2FpkDaVnJJ5W6xITijwAlI%2FYe%2BslWZtxs5niyUVJ8JRnTUOdUIqJiGF3rQeBZbDw6aJLYBKcdVqMDS%2BVr1EkLfDo9KTf%2FHWPqbrtcA098YeEXQvaaL5VzsU9%2Bk3pWox%2F1Q1UhFtcdtAIcInyROoncoIIaCTGVeSOGxQ%2FO5Crh86d6K%2F0IUm0p3DTZNjG%2Borg8jmur%2FLMinZSSb8QB%2Fxzvpr34U7et8Ck0DcSY%2F3kZ5NJAUA5QpRdrSR%2B%2F0ydSPpfNZrfrLsRC7AS9%2B0zDIhozABjqkAUKcMoD9fwmXZepscAHXdZGYw1g01A%2Bwni%2BaSnp8fFPAmY1gENNay50TlMM1LyMg0l0kk2SFnPPA3%2FB6NHVpcsgDQ5PxLzlvjTAqj1qOEizC5RRsJSm3f00cUG5QGxzEwwjJeUTvcPQPblO2BoOs7ZmlWiFoudGXqGf1uqAwK2EBBzhLatV1pO%2BxX2GvqIXe84HKIu0lDdGDh5xREPbrXMDAoDBZ&X-Amz-Signature=823895b671453401e56da1d045335490a267b6cb21d1b4419d64702c82bc5d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFIRQRH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBAcQ3YeWLiEx6KAs8BC4U%2Fk4Z43KhoYzKQ8l688ngIhALQmeU6%2FLxfr5Qjgk2sIaSPNFebfVbigDxXQwOv4siB3KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrhSHJUUX8Shyj9qMq3APsHGfYiafonRazCM1fHuKuxxcmz%2F08oygZqzatiq5U8eHPjzWKJxJDnHurZ4RAr4Tsvdfdu57l3CpgCI4KEf20%2BI7deqUZuj2kF2Z6h1d9Gh0U7MKu0%2BTA8HmEF9Tt29vJSP8UgHd92GfWDe2qSJjENOjHa%2BKaR7E71c4etvRFT6q%2BYhjJDS8zTg8eJ3ePCYA6vqEO%2Fkpg8asGD98W1Dj1tRQNc8C8HyC%2FXyEtQ7G%2BPU%2Bh2a4cF0lf41jIxhgaiyr9dOwIdTPcKuXVclDWS%2BXOOwSn5XuUng0%2FCUYUf9xiNc0fC9Cyq0HxGkt%2FSUSYV3Mqk5YAgRyxeQQlBEIHZQK8pNZhZQ5EXT6eEmh4TXo1HGv%2FpkDaVnJJ5W6xITijwAlI%2FYe%2BslWZtxs5niyUVJ8JRnTUOdUIqJiGF3rQeBZbDw6aJLYBKcdVqMDS%2BVr1EkLfDo9KTf%2FHWPqbrtcA098YeEXQvaaL5VzsU9%2Bk3pWox%2F1Q1UhFtcdtAIcInyROoncoIIaCTGVeSOGxQ%2FO5Crh86d6K%2F0IUm0p3DTZNjG%2Borg8jmur%2FLMinZSSb8QB%2Fxzvpr34U7et8Ck0DcSY%2F3kZ5NJAUA5QpRdrSR%2B%2F0ydSPpfNZrfrLsRC7AS9%2B0zDIhozABjqkAUKcMoD9fwmXZepscAHXdZGYw1g01A%2Bwni%2BaSnp8fFPAmY1gENNay50TlMM1LyMg0l0kk2SFnPPA3%2FB6NHVpcsgDQ5PxLzlvjTAqj1qOEizC5RRsJSm3f00cUG5QGxzEwwjJeUTvcPQPblO2BoOs7ZmlWiFoudGXqGf1uqAwK2EBBzhLatV1pO%2BxX2GvqIXe84HKIu0lDdGDh5xREPbrXMDAoDBZ&X-Amz-Signature=d03a4a0aaa6f65d8145b5a4ba58c1ab56a15f4e76fc09e64f7c13ce32a7db0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
