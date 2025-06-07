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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLJVYPT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBklH0%2Fyc%2Fk3XQBclfih1rifeEslEn73SPhOmVqH%2BeL3AiA713IMbeXG6Czsg7rLDuWdCNmyOLi0xnctzhJAweiRmSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2F27bAVYptgragFFkKtwDmu0lGq0NDZ5AGuFmdwj907TlFhBmWQC8KPygThWXksSjgJS4F90IgShJ32gERBQnfy%2FNjnWBtRl5hIXu7NmbqmIyH3SUfAw08LM5JuVBEOemWnq9aALzLCn5ZUJKnjHcgS6VGe3yXefg%2BZsKNajyvW1aGrGAqrywh0m5OCTPOLlcdRu6zcfOdpxsQZdfLXfROTztKLFybqt%2BiGwmP7Um6%2FimXaGLjIjJXBVbMFGpXI1flcipx6vwqJDe6j1rpcJlPIkmaaDdfYx8bSsDGhihmCbgXnYB2nVQOneTeZIaDuJQ%2BHN9KilQDWmr3mPI%2BW%2FkDa59JuWvo%2BWp1Q4sfK28Hzuss7BxOAAkD%2B1g6%2ByB0iZi0eBTlKtxXytzKR4m3REJy3WkVwe8nCg2OUcNjhxSiaCZiLqukvr5WbrHoqczGJJPa9yImvAQ0s%2FpRH6LpNmsfTntd%2FiMul4VjaESaqSFl%2BqmA%2BybUV16hS4qN4aQrnRozmlSLVe2m%2Bs199adNUAAdGm%2FzHNpuYnAUmloke9KQi2vnqGPJIINmAGrnuVkf9CPJQjxTqDZNhyGESgOkQ%2BDGynxzRwFwEYlkljgpbpO19ivWyA2XazihcwCvDh3Lg%2BKCJ3tAVSV0Ah5XDwwoPqOwgY6pgHewtVNtgHBCwTvO02Rb8P8tNFkr2PLll6phmGrR%2Fc3XTOslCPQHlI8KbJf8NQFTkUYxKD4UMCSTJHooFbZRNwV4CVqE5G3UL8L%2FD6njfXBm2u00Qtp6SbuLuQW8IsMFCo6f%2BQZkspUGvOQvOsh2gqYiiVl5N368g25n98MGiGJNVLB%2FsKoNOqY5%2FU1LLtnaanVL4bzOQje0uGd3FvqSPdNx94rrcEi&X-Amz-Signature=5b611b3d18f3f5cc301046a3a8bc70b70bbdf6228a7e4d89dc96b22f19ef66c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLJVYPT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBklH0%2Fyc%2Fk3XQBclfih1rifeEslEn73SPhOmVqH%2BeL3AiA713IMbeXG6Czsg7rLDuWdCNmyOLi0xnctzhJAweiRmSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2F27bAVYptgragFFkKtwDmu0lGq0NDZ5AGuFmdwj907TlFhBmWQC8KPygThWXksSjgJS4F90IgShJ32gERBQnfy%2FNjnWBtRl5hIXu7NmbqmIyH3SUfAw08LM5JuVBEOemWnq9aALzLCn5ZUJKnjHcgS6VGe3yXefg%2BZsKNajyvW1aGrGAqrywh0m5OCTPOLlcdRu6zcfOdpxsQZdfLXfROTztKLFybqt%2BiGwmP7Um6%2FimXaGLjIjJXBVbMFGpXI1flcipx6vwqJDe6j1rpcJlPIkmaaDdfYx8bSsDGhihmCbgXnYB2nVQOneTeZIaDuJQ%2BHN9KilQDWmr3mPI%2BW%2FkDa59JuWvo%2BWp1Q4sfK28Hzuss7BxOAAkD%2B1g6%2ByB0iZi0eBTlKtxXytzKR4m3REJy3WkVwe8nCg2OUcNjhxSiaCZiLqukvr5WbrHoqczGJJPa9yImvAQ0s%2FpRH6LpNmsfTntd%2FiMul4VjaESaqSFl%2BqmA%2BybUV16hS4qN4aQrnRozmlSLVe2m%2Bs199adNUAAdGm%2FzHNpuYnAUmloke9KQi2vnqGPJIINmAGrnuVkf9CPJQjxTqDZNhyGESgOkQ%2BDGynxzRwFwEYlkljgpbpO19ivWyA2XazihcwCvDh3Lg%2BKCJ3tAVSV0Ah5XDwwoPqOwgY6pgHewtVNtgHBCwTvO02Rb8P8tNFkr2PLll6phmGrR%2Fc3XTOslCPQHlI8KbJf8NQFTkUYxKD4UMCSTJHooFbZRNwV4CVqE5G3UL8L%2FD6njfXBm2u00Qtp6SbuLuQW8IsMFCo6f%2BQZkspUGvOQvOsh2gqYiiVl5N368g25n98MGiGJNVLB%2FsKoNOqY5%2FU1LLtnaanVL4bzOQje0uGd3FvqSPdNx94rrcEi&X-Amz-Signature=b04b6955c15f3c6586c48b3d0cfe4472bcd3221ba8df95deafd6527db515d6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLJVYPT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBklH0%2Fyc%2Fk3XQBclfih1rifeEslEn73SPhOmVqH%2BeL3AiA713IMbeXG6Czsg7rLDuWdCNmyOLi0xnctzhJAweiRmSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2F27bAVYptgragFFkKtwDmu0lGq0NDZ5AGuFmdwj907TlFhBmWQC8KPygThWXksSjgJS4F90IgShJ32gERBQnfy%2FNjnWBtRl5hIXu7NmbqmIyH3SUfAw08LM5JuVBEOemWnq9aALzLCn5ZUJKnjHcgS6VGe3yXefg%2BZsKNajyvW1aGrGAqrywh0m5OCTPOLlcdRu6zcfOdpxsQZdfLXfROTztKLFybqt%2BiGwmP7Um6%2FimXaGLjIjJXBVbMFGpXI1flcipx6vwqJDe6j1rpcJlPIkmaaDdfYx8bSsDGhihmCbgXnYB2nVQOneTeZIaDuJQ%2BHN9KilQDWmr3mPI%2BW%2FkDa59JuWvo%2BWp1Q4sfK28Hzuss7BxOAAkD%2B1g6%2ByB0iZi0eBTlKtxXytzKR4m3REJy3WkVwe8nCg2OUcNjhxSiaCZiLqukvr5WbrHoqczGJJPa9yImvAQ0s%2FpRH6LpNmsfTntd%2FiMul4VjaESaqSFl%2BqmA%2BybUV16hS4qN4aQrnRozmlSLVe2m%2Bs199adNUAAdGm%2FzHNpuYnAUmloke9KQi2vnqGPJIINmAGrnuVkf9CPJQjxTqDZNhyGESgOkQ%2BDGynxzRwFwEYlkljgpbpO19ivWyA2XazihcwCvDh3Lg%2BKCJ3tAVSV0Ah5XDwwoPqOwgY6pgHewtVNtgHBCwTvO02Rb8P8tNFkr2PLll6phmGrR%2Fc3XTOslCPQHlI8KbJf8NQFTkUYxKD4UMCSTJHooFbZRNwV4CVqE5G3UL8L%2FD6njfXBm2u00Qtp6SbuLuQW8IsMFCo6f%2BQZkspUGvOQvOsh2gqYiiVl5N368g25n98MGiGJNVLB%2FsKoNOqY5%2FU1LLtnaanVL4bzOQje0uGd3FvqSPdNx94rrcEi&X-Amz-Signature=26841ccb4ecf55176744a6033da6f37a3a94f6896ce5282e1f31c5d1eae0f975&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
