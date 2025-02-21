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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANKQ6F2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpAw6UcW6OTtw4TjVUQQ4usIugcMrwa%2Bieg4xaLvD%2FNAiA4UZRoihFvS7lQDkaFbKCuGmEKVwe04sqFLgZ0ZxZjSiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNEk7QODfGxZQXVTDKtwD8zBWgQCGUsiHl7bAePv5hO4Tj0CF9lMcQDjBNDtHdSbIWaNlTeHkQ3nd2QatFCkDh8U4Qhwvi7E1NDgddLJhQuV5koHULHUfhdvUYn6zVorrPQG5cZdiPQftQlq%2BnTVQEPpRD9ZAseWKLC1u4UqXiXnRLESWlyVTVn1TbefxYqU%2FBPDxR%2B%2FPf0AF4uTEz0MzM4elhOq8zpCxH1aPJ8f4E3tWVvaFrLdBZe39hCPv5%2BeX6uvtVvCdI%2B12dpiXD%2Bsm5iDq9andrYBuD6kTurIdoQLW0sXEtfGhex%2BTz3hAjmf6jjf0HNS8KrQm36BITRyjEj0l175SObZ7efLgKQOH2IHd0Ff5sQMZgniJ1NzYy4oGBQ%2Bo0yo9oIzKe5Xnfno4x%2FK1duNCBJfRHukToQGxqUGzo5hE8%2FgLvipAsqXDlh8InjQa5hc0iAqY%2FUQjz1vBMK3CuiVLFuEStYxGk0Gi4ShTuK60QsSf%2FLLMCvY0Pv9RpRTv5cpK0z7JfPnyluVbOx3wczdc5D7ps0iuIHj%2FfEii1bC2u9b7Znks7JFBA44UCQ0HAx5oYcEOrm7V8GcY7oUloWl%2Fe8OysJVKbU6YllM4RLSxnrmgtxGfqugxyXg5Zsoabn5FdkKEmMowmLzjvQY6pgGOgVyP5QRNyvehiqBLb0W3%2BQG8w%2BN6OQUxZJuTMmnsS9Mam87p7%2FALSC%2BCf0T99933ldAyfWQ1fCN40cC0pizJcvGRMMv6T%2BH4QKMMlGRCORM4xMama3R8bk%2F5GugyDfIboXsQMeOEmh9%2FSqZbhuo6fjGiREk6kC0OFfPGwlCNV48maPg5HH8j3rxAVfYsSeHpTwJpKcD8zUzTnvzQVJ0J53sia6Vo&X-Amz-Signature=9c5354aca07281df308dbb704caa24b93268e33c849b31db7bf3f3aee6d2c406&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANKQ6F2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpAw6UcW6OTtw4TjVUQQ4usIugcMrwa%2Bieg4xaLvD%2FNAiA4UZRoihFvS7lQDkaFbKCuGmEKVwe04sqFLgZ0ZxZjSiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNEk7QODfGxZQXVTDKtwD8zBWgQCGUsiHl7bAePv5hO4Tj0CF9lMcQDjBNDtHdSbIWaNlTeHkQ3nd2QatFCkDh8U4Qhwvi7E1NDgddLJhQuV5koHULHUfhdvUYn6zVorrPQG5cZdiPQftQlq%2BnTVQEPpRD9ZAseWKLC1u4UqXiXnRLESWlyVTVn1TbefxYqU%2FBPDxR%2B%2FPf0AF4uTEz0MzM4elhOq8zpCxH1aPJ8f4E3tWVvaFrLdBZe39hCPv5%2BeX6uvtVvCdI%2B12dpiXD%2Bsm5iDq9andrYBuD6kTurIdoQLW0sXEtfGhex%2BTz3hAjmf6jjf0HNS8KrQm36BITRyjEj0l175SObZ7efLgKQOH2IHd0Ff5sQMZgniJ1NzYy4oGBQ%2Bo0yo9oIzKe5Xnfno4x%2FK1duNCBJfRHukToQGxqUGzo5hE8%2FgLvipAsqXDlh8InjQa5hc0iAqY%2FUQjz1vBMK3CuiVLFuEStYxGk0Gi4ShTuK60QsSf%2FLLMCvY0Pv9RpRTv5cpK0z7JfPnyluVbOx3wczdc5D7ps0iuIHj%2FfEii1bC2u9b7Znks7JFBA44UCQ0HAx5oYcEOrm7V8GcY7oUloWl%2Fe8OysJVKbU6YllM4RLSxnrmgtxGfqugxyXg5Zsoabn5FdkKEmMowmLzjvQY6pgGOgVyP5QRNyvehiqBLb0W3%2BQG8w%2BN6OQUxZJuTMmnsS9Mam87p7%2FALSC%2BCf0T99933ldAyfWQ1fCN40cC0pizJcvGRMMv6T%2BH4QKMMlGRCORM4xMama3R8bk%2F5GugyDfIboXsQMeOEmh9%2FSqZbhuo6fjGiREk6kC0OFfPGwlCNV48maPg5HH8j3rxAVfYsSeHpTwJpKcD8zUzTnvzQVJ0J53sia6Vo&X-Amz-Signature=db764997d87b054955ae386c53ff469c16dd7f5af6c614548733281e2e8c30e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANKQ6F2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpAw6UcW6OTtw4TjVUQQ4usIugcMrwa%2Bieg4xaLvD%2FNAiA4UZRoihFvS7lQDkaFbKCuGmEKVwe04sqFLgZ0ZxZjSiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNEk7QODfGxZQXVTDKtwD8zBWgQCGUsiHl7bAePv5hO4Tj0CF9lMcQDjBNDtHdSbIWaNlTeHkQ3nd2QatFCkDh8U4Qhwvi7E1NDgddLJhQuV5koHULHUfhdvUYn6zVorrPQG5cZdiPQftQlq%2BnTVQEPpRD9ZAseWKLC1u4UqXiXnRLESWlyVTVn1TbefxYqU%2FBPDxR%2B%2FPf0AF4uTEz0MzM4elhOq8zpCxH1aPJ8f4E3tWVvaFrLdBZe39hCPv5%2BeX6uvtVvCdI%2B12dpiXD%2Bsm5iDq9andrYBuD6kTurIdoQLW0sXEtfGhex%2BTz3hAjmf6jjf0HNS8KrQm36BITRyjEj0l175SObZ7efLgKQOH2IHd0Ff5sQMZgniJ1NzYy4oGBQ%2Bo0yo9oIzKe5Xnfno4x%2FK1duNCBJfRHukToQGxqUGzo5hE8%2FgLvipAsqXDlh8InjQa5hc0iAqY%2FUQjz1vBMK3CuiVLFuEStYxGk0Gi4ShTuK60QsSf%2FLLMCvY0Pv9RpRTv5cpK0z7JfPnyluVbOx3wczdc5D7ps0iuIHj%2FfEii1bC2u9b7Znks7JFBA44UCQ0HAx5oYcEOrm7V8GcY7oUloWl%2Fe8OysJVKbU6YllM4RLSxnrmgtxGfqugxyXg5Zsoabn5FdkKEmMowmLzjvQY6pgGOgVyP5QRNyvehiqBLb0W3%2BQG8w%2BN6OQUxZJuTMmnsS9Mam87p7%2FALSC%2BCf0T99933ldAyfWQ1fCN40cC0pizJcvGRMMv6T%2BH4QKMMlGRCORM4xMama3R8bk%2F5GugyDfIboXsQMeOEmh9%2FSqZbhuo6fjGiREk6kC0OFfPGwlCNV48maPg5HH8j3rxAVfYsSeHpTwJpKcD8zUzTnvzQVJ0J53sia6Vo&X-Amz-Signature=fe5f011fe27941396eb8aa57c7cbfa00e54fc8b050dd5dd876ae98a19a6c78d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
