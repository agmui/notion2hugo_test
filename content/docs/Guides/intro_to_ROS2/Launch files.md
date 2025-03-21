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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHUJDJ3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIArUo7gs%2BzY8DZwH2eu0pPNFiVyX6ODq0LCyu2ISEqhEAiBy2ALWt3lUwBATv08i81NYPXlpZyQPs9VSCu%2BbxeQhKCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgZiM%2FqsJ3yATy%2Fc%2FKtwDLL4uX%2Bz53jULruVuZJkwY0S2p0%2BUJkrvkKzKvRqlRpJ8zIofOe31iENx1cbiJScLLrzhxTWfbDEIInfd5MdlZry6UvYm0F2qoAqOo3mLLRmFqAzNPZPJIf9PbQ9CEl1zE1oau%2BwIknScAqH5jR08r7tWrLS8GU%2FZtGZnhFEJhoa7IgaZcAIpvaHN0jdZn3Ee6CQViUkQTjR%2Bu2cAvg19jWc0QLKPibM6kyP4oqrfXoxuyBiIRQFNnHcY8YAxLmm6LSDcTHBPVNYZpCC3%2BmTq4w35x3p%2F8TulWM2RL1BjJcRn43H6a%2FBnvwNvakBd6mW8HL%2Bj4qauR%2F4kd5i0av2dIAouXgvuczjBWAx9nATHEPuqdTgXLUAENFD%2Br0je6ZiaUr8Zz8jrRq1BgJrGYbIYoBOy795SJE4iubgfbOYG9U3%2F%2BFE9DBnf1jSPTASjTznLjHxcXx4MUJVSIF1erxn8Ex5kmY07Dv3wIYD1JOM8CW7h2jsKJ5oGF679HGDM0RIFgKVuFn9f1wBGePXHeT34R7ciFNg%2B7zPuPL3dlF2tiIV7EF13RNr1D7giu3c1GM3bBImqvxvFmQ6%2BjFdlEn5BOkSwrNNrqmm%2BqMGYMTV2qga7u24Q3vVGmWb3ziIwwdz2vgY6pgF%2B6hy%2FrXVo8rpRUNpC1MN3OnT06sKNZQsuvhOlzwZSm7zsMn3X7E1x69SVAj%2BBJckU0N36lzRFKNNj1t%2FUovzFizhtBBpm%2FmuyAokew6x3kpHebXD23l0JtEhukyG%2FUo2Vs9fwP%2F6zia4GP1%2FqDi%2FzPSXrD9NWFHSPCwrup1Plp97QljyxA0PIAQURuag5uIcD1eBgaOZVw2XPFxPxztc8XzqmtMXa&X-Amz-Signature=31a7f7472c6f38f10bc133f6dbcd62919b227636f7c0c5923c46d5eebbee9d68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHUJDJ3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIArUo7gs%2BzY8DZwH2eu0pPNFiVyX6ODq0LCyu2ISEqhEAiBy2ALWt3lUwBATv08i81NYPXlpZyQPs9VSCu%2BbxeQhKCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgZiM%2FqsJ3yATy%2Fc%2FKtwDLL4uX%2Bz53jULruVuZJkwY0S2p0%2BUJkrvkKzKvRqlRpJ8zIofOe31iENx1cbiJScLLrzhxTWfbDEIInfd5MdlZry6UvYm0F2qoAqOo3mLLRmFqAzNPZPJIf9PbQ9CEl1zE1oau%2BwIknScAqH5jR08r7tWrLS8GU%2FZtGZnhFEJhoa7IgaZcAIpvaHN0jdZn3Ee6CQViUkQTjR%2Bu2cAvg19jWc0QLKPibM6kyP4oqrfXoxuyBiIRQFNnHcY8YAxLmm6LSDcTHBPVNYZpCC3%2BmTq4w35x3p%2F8TulWM2RL1BjJcRn43H6a%2FBnvwNvakBd6mW8HL%2Bj4qauR%2F4kd5i0av2dIAouXgvuczjBWAx9nATHEPuqdTgXLUAENFD%2Br0je6ZiaUr8Zz8jrRq1BgJrGYbIYoBOy795SJE4iubgfbOYG9U3%2F%2BFE9DBnf1jSPTASjTznLjHxcXx4MUJVSIF1erxn8Ex5kmY07Dv3wIYD1JOM8CW7h2jsKJ5oGF679HGDM0RIFgKVuFn9f1wBGePXHeT34R7ciFNg%2B7zPuPL3dlF2tiIV7EF13RNr1D7giu3c1GM3bBImqvxvFmQ6%2BjFdlEn5BOkSwrNNrqmm%2BqMGYMTV2qga7u24Q3vVGmWb3ziIwwdz2vgY6pgF%2B6hy%2FrXVo8rpRUNpC1MN3OnT06sKNZQsuvhOlzwZSm7zsMn3X7E1x69SVAj%2BBJckU0N36lzRFKNNj1t%2FUovzFizhtBBpm%2FmuyAokew6x3kpHebXD23l0JtEhukyG%2FUo2Vs9fwP%2F6zia4GP1%2FqDi%2FzPSXrD9NWFHSPCwrup1Plp97QljyxA0PIAQURuag5uIcD1eBgaOZVw2XPFxPxztc8XzqmtMXa&X-Amz-Signature=47e514e888b0aaee2dc476a0e4e8f9fea140b3a670f422812ac92b7985506bff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHUJDJ3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIArUo7gs%2BzY8DZwH2eu0pPNFiVyX6ODq0LCyu2ISEqhEAiBy2ALWt3lUwBATv08i81NYPXlpZyQPs9VSCu%2BbxeQhKCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgZiM%2FqsJ3yATy%2Fc%2FKtwDLL4uX%2Bz53jULruVuZJkwY0S2p0%2BUJkrvkKzKvRqlRpJ8zIofOe31iENx1cbiJScLLrzhxTWfbDEIInfd5MdlZry6UvYm0F2qoAqOo3mLLRmFqAzNPZPJIf9PbQ9CEl1zE1oau%2BwIknScAqH5jR08r7tWrLS8GU%2FZtGZnhFEJhoa7IgaZcAIpvaHN0jdZn3Ee6CQViUkQTjR%2Bu2cAvg19jWc0QLKPibM6kyP4oqrfXoxuyBiIRQFNnHcY8YAxLmm6LSDcTHBPVNYZpCC3%2BmTq4w35x3p%2F8TulWM2RL1BjJcRn43H6a%2FBnvwNvakBd6mW8HL%2Bj4qauR%2F4kd5i0av2dIAouXgvuczjBWAx9nATHEPuqdTgXLUAENFD%2Br0je6ZiaUr8Zz8jrRq1BgJrGYbIYoBOy795SJE4iubgfbOYG9U3%2F%2BFE9DBnf1jSPTASjTznLjHxcXx4MUJVSIF1erxn8Ex5kmY07Dv3wIYD1JOM8CW7h2jsKJ5oGF679HGDM0RIFgKVuFn9f1wBGePXHeT34R7ciFNg%2B7zPuPL3dlF2tiIV7EF13RNr1D7giu3c1GM3bBImqvxvFmQ6%2BjFdlEn5BOkSwrNNrqmm%2BqMGYMTV2qga7u24Q3vVGmWb3ziIwwdz2vgY6pgF%2B6hy%2FrXVo8rpRUNpC1MN3OnT06sKNZQsuvhOlzwZSm7zsMn3X7E1x69SVAj%2BBJckU0N36lzRFKNNj1t%2FUovzFizhtBBpm%2FmuyAokew6x3kpHebXD23l0JtEhukyG%2FUo2Vs9fwP%2F6zia4GP1%2FqDi%2FzPSXrD9NWFHSPCwrup1Plp97QljyxA0PIAQURuag5uIcD1eBgaOZVw2XPFxPxztc8XzqmtMXa&X-Amz-Signature=883b0faad615b4edcac6ba41026ca91ae269e59f6971ce6242138482c4e93821&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
