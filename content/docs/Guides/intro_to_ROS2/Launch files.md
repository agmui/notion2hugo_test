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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AMDKGY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDdnu1VXx5yirQ8L4nfFO67O14w6kdgWwzhFbOneTINUAiBgInhMuxOy4yz0CWIGNzP9R2GszP3hDQIxcKE%2FPnEIayqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6XbBQ3OEB3F1kBAKtwD0RBgD7C%2BS0rSQ2WdRuKc3wdZM6KmezyEz8ft1KVSQvgrwV5LzvZVyzSHUhquDPbpH8r5AIqEDfLRWZFmm5LuTiozRaEYdVA3Lr%2Fg1O3anN6KDMOPvgFfhKNpSAfUM8HwPtxczdIWfQVQ9eTCgCreSoSzYwScC3OBnQQDKJSzBJAvebUQoWF8HvG71z%2FedBXVmgBfH9xCTz%2BHfs5Nc7ryfuPoXDEzM0WFiKNoTPGavItD8WMNUS3JgQGtqZRWf%2BUs5WRNbxWBIYb8WmewktZ7e3lTY5hqe5vpQ%2B%2BdJWmRTz81zmivK0YfOpd%2BW2xpKGuyIy2VoI67AALy55cgIfUn2TBj5cVeYht5qn8waSV%2B2%2FyGXS6rRgfXUEBTdT0KsNSfCPuy0bXEHog7UD0hmdQhZbXexw5%2FLJpBwe1UoW4wZXXiqznTcmSC5fq52RV4rJLAMQkrR8xsfLYXtw62eLFVXROnN0Kcy9qdtWQ7Ot%2BuE7WjnAMZ%2BUupsb2l%2FJhY9zR7MiZ4NrJHStKVE0di15UCypghTi352OfH6TAIMdFOWDSLBE0vUi8zK4ScMYt%2BjGK4u8S98%2BP7ZAEGDVYlhTA5cokjjlZHD2nVgD5WR9kZdY122JKKXSHTzh2YHdYw2aDXwAY6pgFS1R8s1VKeuYvetERd%2BbTar0RsEOp%2F9W6BPlopQnua6Gd7GfPwTErMkFYC5gK9STtIMiz4lttPgCnVuaufPml6n%2F8c9OsN6Bldt1fN9P9PJMSTwGCY1SLkvqJhiXwncQUnhBwSJvYUhTdaHcIGW4UfLgQkoYS2xYUsSEwkGdH0hdXqS0Wr7wFvpBTw7Ce1r3h5R7hvojQ%2BA85ak5XMzoo5SSmgDvOt&X-Amz-Signature=5e3560097bdd3339c0cb06fc8fb127c53f36acbd27799a83f125fc9ba59e3a92&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AMDKGY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDdnu1VXx5yirQ8L4nfFO67O14w6kdgWwzhFbOneTINUAiBgInhMuxOy4yz0CWIGNzP9R2GszP3hDQIxcKE%2FPnEIayqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6XbBQ3OEB3F1kBAKtwD0RBgD7C%2BS0rSQ2WdRuKc3wdZM6KmezyEz8ft1KVSQvgrwV5LzvZVyzSHUhquDPbpH8r5AIqEDfLRWZFmm5LuTiozRaEYdVA3Lr%2Fg1O3anN6KDMOPvgFfhKNpSAfUM8HwPtxczdIWfQVQ9eTCgCreSoSzYwScC3OBnQQDKJSzBJAvebUQoWF8HvG71z%2FedBXVmgBfH9xCTz%2BHfs5Nc7ryfuPoXDEzM0WFiKNoTPGavItD8WMNUS3JgQGtqZRWf%2BUs5WRNbxWBIYb8WmewktZ7e3lTY5hqe5vpQ%2B%2BdJWmRTz81zmivK0YfOpd%2BW2xpKGuyIy2VoI67AALy55cgIfUn2TBj5cVeYht5qn8waSV%2B2%2FyGXS6rRgfXUEBTdT0KsNSfCPuy0bXEHog7UD0hmdQhZbXexw5%2FLJpBwe1UoW4wZXXiqznTcmSC5fq52RV4rJLAMQkrR8xsfLYXtw62eLFVXROnN0Kcy9qdtWQ7Ot%2BuE7WjnAMZ%2BUupsb2l%2FJhY9zR7MiZ4NrJHStKVE0di15UCypghTi352OfH6TAIMdFOWDSLBE0vUi8zK4ScMYt%2BjGK4u8S98%2BP7ZAEGDVYlhTA5cokjjlZHD2nVgD5WR9kZdY122JKKXSHTzh2YHdYw2aDXwAY6pgFS1R8s1VKeuYvetERd%2BbTar0RsEOp%2F9W6BPlopQnua6Gd7GfPwTErMkFYC5gK9STtIMiz4lttPgCnVuaufPml6n%2F8c9OsN6Bldt1fN9P9PJMSTwGCY1SLkvqJhiXwncQUnhBwSJvYUhTdaHcIGW4UfLgQkoYS2xYUsSEwkGdH0hdXqS0Wr7wFvpBTw7Ce1r3h5R7hvojQ%2BA85ak5XMzoo5SSmgDvOt&X-Amz-Signature=fe3fea3fbd55c19aba2806660534c3189670900add3b7ad0068f9165066d9e63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AMDKGY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDdnu1VXx5yirQ8L4nfFO67O14w6kdgWwzhFbOneTINUAiBgInhMuxOy4yz0CWIGNzP9R2GszP3hDQIxcKE%2FPnEIayqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6XbBQ3OEB3F1kBAKtwD0RBgD7C%2BS0rSQ2WdRuKc3wdZM6KmezyEz8ft1KVSQvgrwV5LzvZVyzSHUhquDPbpH8r5AIqEDfLRWZFmm5LuTiozRaEYdVA3Lr%2Fg1O3anN6KDMOPvgFfhKNpSAfUM8HwPtxczdIWfQVQ9eTCgCreSoSzYwScC3OBnQQDKJSzBJAvebUQoWF8HvG71z%2FedBXVmgBfH9xCTz%2BHfs5Nc7ryfuPoXDEzM0WFiKNoTPGavItD8WMNUS3JgQGtqZRWf%2BUs5WRNbxWBIYb8WmewktZ7e3lTY5hqe5vpQ%2B%2BdJWmRTz81zmivK0YfOpd%2BW2xpKGuyIy2VoI67AALy55cgIfUn2TBj5cVeYht5qn8waSV%2B2%2FyGXS6rRgfXUEBTdT0KsNSfCPuy0bXEHog7UD0hmdQhZbXexw5%2FLJpBwe1UoW4wZXXiqznTcmSC5fq52RV4rJLAMQkrR8xsfLYXtw62eLFVXROnN0Kcy9qdtWQ7Ot%2BuE7WjnAMZ%2BUupsb2l%2FJhY9zR7MiZ4NrJHStKVE0di15UCypghTi352OfH6TAIMdFOWDSLBE0vUi8zK4ScMYt%2BjGK4u8S98%2BP7ZAEGDVYlhTA5cokjjlZHD2nVgD5WR9kZdY122JKKXSHTzh2YHdYw2aDXwAY6pgFS1R8s1VKeuYvetERd%2BbTar0RsEOp%2F9W6BPlopQnua6Gd7GfPwTErMkFYC5gK9STtIMiz4lttPgCnVuaufPml6n%2F8c9OsN6Bldt1fN9P9PJMSTwGCY1SLkvqJhiXwncQUnhBwSJvYUhTdaHcIGW4UfLgQkoYS2xYUsSEwkGdH0hdXqS0Wr7wFvpBTw7Ce1r3h5R7hvojQ%2BA85ak5XMzoo5SSmgDvOt&X-Amz-Signature=b0d8c7b3ccee56f527963e32451e78b215bfa151a4f97db1d7281f74cf08ff9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
