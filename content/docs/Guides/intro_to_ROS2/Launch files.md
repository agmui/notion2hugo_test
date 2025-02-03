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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHMXXZQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCnwGAN0shZLZCLiGoNoZBcv0CoLy8n0gq4ALEiPg5NhgIhAKLcEthKiw8ImRFq655BNyDPTCtctCm5mS%2B3rx%2FNxh9ZKv8DCB4QABoMNjM3NDIzMTgzODA1IgwPltEKBbrH3kjE2Kkq3ANaDB03al8I%2BQ7bxBZSg8D9B3KH6rUmj%2FBcZIzAImsfrgnkKUFsoYKetksOMXpcsQBzcWIxVVkZKlmhUt0RtqTSx9sQXDLGql43lW2huJUKVvHp%2BJCuYsyZ8l8ZqeYNQ3jlpgL9fWr75AoMhSsiev3D99N%2BOcU702z%2BonAYOMbNjS7wVzvz9IvIraJa3QWAuU9WD%2FVsVb90TDXL%2F1%2FtUlttHmxKGmKoKRvkeetmhDkh84GXdT%2Bi0E%2BzOqe1ABpK3zyNIzOGjdqe%2Bc6MKCZrvf%2FjGWhHtlUSgXjs0p0p5O4uNi%2FPQk8FzIY7UWjqCVidhFlgUwrV%2FCzVX8yS2o6JwGPmDzq2GCZh1d3D6mZIg9%2F0rW%2B2DLdzUHd08ouAYcUERLxE3sbICOGPH6wMZTBwNyElPZPWISwxTfCiAdS3zAMEZ6q1GLaZs3gZvUb%2BHUGffsuRLUnJGFqKHxHO%2B%2Fz2Z9f3VEsdNqx78217XVCSU8xhjm8DKchqCeBPkHLYZAgjylmo05Lcrd7QhUWpovwYVxeZZNLV1GFyepqzfEp4XdbFYOIZh%2BsPHqAll6IRXhid4B6Ou6f9D0vOejt7uOAArZ96ytaJ4rzr%2BK5ftCfZKXsi%2BcUjV5pHQqTD1LVcRzCG24S9BjqkAVT%2BtiaaJoRaauBO%2FSM4rAHuyMuztAjW%2BPMI8DcufzwMiNyPTgJP2XEOHUzzB2RaKPtMXz0JY4NzY2OhNd8BPYdm8wkVVrZOEEKxjBeTpve5iYMf63GMGQsME0kqs5fKNrZgWlkPUXHESzyb9%2FsgiexbkMhcvyVFbLc299TaYN4GzZM9fabTxcxgxeOeTbRohS4LOxb4peZEnY%2FhAqUSmPVB%2FtZG&X-Amz-Signature=9a8f0f9ec994c94ba656e2d184bd0e5bff0780c6a0a976b9323b92c810ea961b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHMXXZQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCnwGAN0shZLZCLiGoNoZBcv0CoLy8n0gq4ALEiPg5NhgIhAKLcEthKiw8ImRFq655BNyDPTCtctCm5mS%2B3rx%2FNxh9ZKv8DCB4QABoMNjM3NDIzMTgzODA1IgwPltEKBbrH3kjE2Kkq3ANaDB03al8I%2BQ7bxBZSg8D9B3KH6rUmj%2FBcZIzAImsfrgnkKUFsoYKetksOMXpcsQBzcWIxVVkZKlmhUt0RtqTSx9sQXDLGql43lW2huJUKVvHp%2BJCuYsyZ8l8ZqeYNQ3jlpgL9fWr75AoMhSsiev3D99N%2BOcU702z%2BonAYOMbNjS7wVzvz9IvIraJa3QWAuU9WD%2FVsVb90TDXL%2F1%2FtUlttHmxKGmKoKRvkeetmhDkh84GXdT%2Bi0E%2BzOqe1ABpK3zyNIzOGjdqe%2Bc6MKCZrvf%2FjGWhHtlUSgXjs0p0p5O4uNi%2FPQk8FzIY7UWjqCVidhFlgUwrV%2FCzVX8yS2o6JwGPmDzq2GCZh1d3D6mZIg9%2F0rW%2B2DLdzUHd08ouAYcUERLxE3sbICOGPH6wMZTBwNyElPZPWISwxTfCiAdS3zAMEZ6q1GLaZs3gZvUb%2BHUGffsuRLUnJGFqKHxHO%2B%2Fz2Z9f3VEsdNqx78217XVCSU8xhjm8DKchqCeBPkHLYZAgjylmo05Lcrd7QhUWpovwYVxeZZNLV1GFyepqzfEp4XdbFYOIZh%2BsPHqAll6IRXhid4B6Ou6f9D0vOejt7uOAArZ96ytaJ4rzr%2BK5ftCfZKXsi%2BcUjV5pHQqTD1LVcRzCG24S9BjqkAVT%2BtiaaJoRaauBO%2FSM4rAHuyMuztAjW%2BPMI8DcufzwMiNyPTgJP2XEOHUzzB2RaKPtMXz0JY4NzY2OhNd8BPYdm8wkVVrZOEEKxjBeTpve5iYMf63GMGQsME0kqs5fKNrZgWlkPUXHESzyb9%2FsgiexbkMhcvyVFbLc299TaYN4GzZM9fabTxcxgxeOeTbRohS4LOxb4peZEnY%2FhAqUSmPVB%2FtZG&X-Amz-Signature=25b73f777d1a38194219c84df47b9f619674115a14223edf56190f373469c1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHMXXZQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCnwGAN0shZLZCLiGoNoZBcv0CoLy8n0gq4ALEiPg5NhgIhAKLcEthKiw8ImRFq655BNyDPTCtctCm5mS%2B3rx%2FNxh9ZKv8DCB4QABoMNjM3NDIzMTgzODA1IgwPltEKBbrH3kjE2Kkq3ANaDB03al8I%2BQ7bxBZSg8D9B3KH6rUmj%2FBcZIzAImsfrgnkKUFsoYKetksOMXpcsQBzcWIxVVkZKlmhUt0RtqTSx9sQXDLGql43lW2huJUKVvHp%2BJCuYsyZ8l8ZqeYNQ3jlpgL9fWr75AoMhSsiev3D99N%2BOcU702z%2BonAYOMbNjS7wVzvz9IvIraJa3QWAuU9WD%2FVsVb90TDXL%2F1%2FtUlttHmxKGmKoKRvkeetmhDkh84GXdT%2Bi0E%2BzOqe1ABpK3zyNIzOGjdqe%2Bc6MKCZrvf%2FjGWhHtlUSgXjs0p0p5O4uNi%2FPQk8FzIY7UWjqCVidhFlgUwrV%2FCzVX8yS2o6JwGPmDzq2GCZh1d3D6mZIg9%2F0rW%2B2DLdzUHd08ouAYcUERLxE3sbICOGPH6wMZTBwNyElPZPWISwxTfCiAdS3zAMEZ6q1GLaZs3gZvUb%2BHUGffsuRLUnJGFqKHxHO%2B%2Fz2Z9f3VEsdNqx78217XVCSU8xhjm8DKchqCeBPkHLYZAgjylmo05Lcrd7QhUWpovwYVxeZZNLV1GFyepqzfEp4XdbFYOIZh%2BsPHqAll6IRXhid4B6Ou6f9D0vOejt7uOAArZ96ytaJ4rzr%2BK5ftCfZKXsi%2BcUjV5pHQqTD1LVcRzCG24S9BjqkAVT%2BtiaaJoRaauBO%2FSM4rAHuyMuztAjW%2BPMI8DcufzwMiNyPTgJP2XEOHUzzB2RaKPtMXz0JY4NzY2OhNd8BPYdm8wkVVrZOEEKxjBeTpve5iYMf63GMGQsME0kqs5fKNrZgWlkPUXHESzyb9%2FsgiexbkMhcvyVFbLc299TaYN4GzZM9fabTxcxgxeOeTbRohS4LOxb4peZEnY%2FhAqUSmPVB%2FtZG&X-Amz-Signature=23ab8c8ea9d4088d97a159e7bc3f2ce83d8bd876f2c99f1fb5cd6b84dd65fa19&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
