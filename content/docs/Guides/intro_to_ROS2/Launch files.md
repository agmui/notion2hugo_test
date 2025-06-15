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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3UOBBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBepl0m5qDToI8V5BvzWYONMyVQk7klJkEqGcKw5zcWXAiBOLjp7KOwGoY7UrdPXOtRgHFUyvHCbzKwjmJr5liP9lir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQ6AqUZnsN15f3MIrKtwD09D48CTTmUgPwyc4l6R0I9RHLlSe7EP4tH8FGSjMgCasWR3FczV44n90QVFw%2BeKxOG1ugYnHMZMpFV3oWcRZ86Q9vHbff8hHlr5BXx4uKr5rZFgBDrLUo3Lvv8dI1N%2FBQxOGazwOiRthmQHEWhntSFsxJiMm27ae8ImxT%2Bc4B4%2BdTA29pUm9gMmKGk6US06GFeE%2FNZvNFAmgXPKG1yT%2B9vtLUx32euO6m8qyoONQbJiiEdXZp9saoUj%2FRlTctWyhOkhVpdyvhKxdPXBTGrWRNl5mQ8fSn1nha3528lrfU%2Bo46pukF3QVeXNKntQ8pyu9HaVVWHXHAEPLVTvC3qNryNUBq72boXhMgHwuMClCpcj1wQ6%2FTqrlD42ZrxETjzjvloOzHNczU00kmQpXwAaYPa5tY61f8SVwYPR7LSHwI2cL2CGiEdthijxuzbuZ3BBeOACY480dqbDFa%2BvRdYTRfsUbYm1hQUjTBAN0lemKsnIH0nQk7RU%2FgIWrYV5CWRXMicLNoZKvGlHXmv6CQfpMj%2F8rpRj8ENzxw8hPu6REcn1azuyLz3w2a0hgk1pKc5kRpGEPHi4UyX%2FY8fXD46pIFiVKvVJgyId5gWqt0qTlIw0stJBHKCxGChDKFb4wyOG6wgY6pgEFiJRKiI1%2B2Qdf9Ufm3wGVf74ZEiERco61hwUkUB8zaZNgbyCkbw2bRjrysiLGVYy4s7NEy05obp650xh1DJ8MX0ILVc6WSwIkYrTOcp1Azk7UoBI5X%2BYyRSjAnq9cXE9u3IMRtdXNRON08ljCJu%2B378ISTup%2BMQNJjwzBJo7xRICu7wgXFNqp3EmZc4c%2FbpK2vVHjG4pufZ33cUG1GwZfzJGFgGMM&X-Amz-Signature=f3d73e07d7394088b6421f34595153e34c76b0fb960aef3d557fbc89e8122f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3UOBBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBepl0m5qDToI8V5BvzWYONMyVQk7klJkEqGcKw5zcWXAiBOLjp7KOwGoY7UrdPXOtRgHFUyvHCbzKwjmJr5liP9lir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQ6AqUZnsN15f3MIrKtwD09D48CTTmUgPwyc4l6R0I9RHLlSe7EP4tH8FGSjMgCasWR3FczV44n90QVFw%2BeKxOG1ugYnHMZMpFV3oWcRZ86Q9vHbff8hHlr5BXx4uKr5rZFgBDrLUo3Lvv8dI1N%2FBQxOGazwOiRthmQHEWhntSFsxJiMm27ae8ImxT%2Bc4B4%2BdTA29pUm9gMmKGk6US06GFeE%2FNZvNFAmgXPKG1yT%2B9vtLUx32euO6m8qyoONQbJiiEdXZp9saoUj%2FRlTctWyhOkhVpdyvhKxdPXBTGrWRNl5mQ8fSn1nha3528lrfU%2Bo46pukF3QVeXNKntQ8pyu9HaVVWHXHAEPLVTvC3qNryNUBq72boXhMgHwuMClCpcj1wQ6%2FTqrlD42ZrxETjzjvloOzHNczU00kmQpXwAaYPa5tY61f8SVwYPR7LSHwI2cL2CGiEdthijxuzbuZ3BBeOACY480dqbDFa%2BvRdYTRfsUbYm1hQUjTBAN0lemKsnIH0nQk7RU%2FgIWrYV5CWRXMicLNoZKvGlHXmv6CQfpMj%2F8rpRj8ENzxw8hPu6REcn1azuyLz3w2a0hgk1pKc5kRpGEPHi4UyX%2FY8fXD46pIFiVKvVJgyId5gWqt0qTlIw0stJBHKCxGChDKFb4wyOG6wgY6pgEFiJRKiI1%2B2Qdf9Ufm3wGVf74ZEiERco61hwUkUB8zaZNgbyCkbw2bRjrysiLGVYy4s7NEy05obp650xh1DJ8MX0ILVc6WSwIkYrTOcp1Azk7UoBI5X%2BYyRSjAnq9cXE9u3IMRtdXNRON08ljCJu%2B378ISTup%2BMQNJjwzBJo7xRICu7wgXFNqp3EmZc4c%2FbpK2vVHjG4pufZ33cUG1GwZfzJGFgGMM&X-Amz-Signature=1064b71d5fe7291924be0a7583173fffd6c75ec6685e7529234cb3e4f99d32ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3UOBBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBepl0m5qDToI8V5BvzWYONMyVQk7klJkEqGcKw5zcWXAiBOLjp7KOwGoY7UrdPXOtRgHFUyvHCbzKwjmJr5liP9lir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQ6AqUZnsN15f3MIrKtwD09D48CTTmUgPwyc4l6R0I9RHLlSe7EP4tH8FGSjMgCasWR3FczV44n90QVFw%2BeKxOG1ugYnHMZMpFV3oWcRZ86Q9vHbff8hHlr5BXx4uKr5rZFgBDrLUo3Lvv8dI1N%2FBQxOGazwOiRthmQHEWhntSFsxJiMm27ae8ImxT%2Bc4B4%2BdTA29pUm9gMmKGk6US06GFeE%2FNZvNFAmgXPKG1yT%2B9vtLUx32euO6m8qyoONQbJiiEdXZp9saoUj%2FRlTctWyhOkhVpdyvhKxdPXBTGrWRNl5mQ8fSn1nha3528lrfU%2Bo46pukF3QVeXNKntQ8pyu9HaVVWHXHAEPLVTvC3qNryNUBq72boXhMgHwuMClCpcj1wQ6%2FTqrlD42ZrxETjzjvloOzHNczU00kmQpXwAaYPa5tY61f8SVwYPR7LSHwI2cL2CGiEdthijxuzbuZ3BBeOACY480dqbDFa%2BvRdYTRfsUbYm1hQUjTBAN0lemKsnIH0nQk7RU%2FgIWrYV5CWRXMicLNoZKvGlHXmv6CQfpMj%2F8rpRj8ENzxw8hPu6REcn1azuyLz3w2a0hgk1pKc5kRpGEPHi4UyX%2FY8fXD46pIFiVKvVJgyId5gWqt0qTlIw0stJBHKCxGChDKFb4wyOG6wgY6pgEFiJRKiI1%2B2Qdf9Ufm3wGVf74ZEiERco61hwUkUB8zaZNgbyCkbw2bRjrysiLGVYy4s7NEy05obp650xh1DJ8MX0ILVc6WSwIkYrTOcp1Azk7UoBI5X%2BYyRSjAnq9cXE9u3IMRtdXNRON08ljCJu%2B378ISTup%2BMQNJjwzBJo7xRICu7wgXFNqp3EmZc4c%2FbpK2vVHjG4pufZ33cUG1GwZfzJGFgGMM&X-Amz-Signature=9264772a6908dfc7e8b95c78905ce90bb2ea566f4af16e4861892505f8d4f1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
