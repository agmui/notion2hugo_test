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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYL77YK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEo3Vco9bAc%2FyCIpUr9qC3ii6PyJWgISO37n50K%2BUPvwAiEAnjkTerS9IIFEC%2BuLtaKOdl0NpTfBqQuPqBG%2FAZLgINQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8WYsoTqZf31Le1%2BircA1RCEG1%2F1u3TnaYaI4k7gtnQZFyvwjTb0TnnY7pUigDNf1uL5azfHgLP3kCPyRQ3b5J6DGjN3%2BF8Ecrmq8hxbANV85uygM3RKpTDZC5x8NzvNV58f2C%2BbOlzNLrjelu7q4ayFr6RD1fi2u%2FoBVzgiDjU7%2F8WQKMMstrmC9mLWs%2FgFOpZJ6jyEMpfEzzpGGl4qexkO71%2BDmv4tPqGG7kt3tJrNfUeilP9Y41N8ZoRYZyfRaNXYaP4OlxgYpKci55uZBHqhJdUO8skkrnZMz78xxhGlNVRc2C3mhmNjVhbmtUMepjtcb0O66L6KYJGvdSVDI%2BS36LZGiL%2FHS%2FhczjdvmzMsOPF3ulfb98NPCVFDy2e4qnfyvTu%2BAgtjGbndJ7URTJEmosTMm%2BZn1s%2FQY67pxwgSQ3sVl%2BZSkAHzdFgjSjoFcLfHz6VTx4yPdPtd0lh1Aq9uxb3t%2BYwtxHojAG4GGhh4QkpOz2J83shKhZHdmJm6WN4BEJ1yEjc7IgGIFP%2F%2Fzu9Gz0MjtrZJUfyqjfM5b557%2FtRlFuAjPd6GIGABJbnbH%2BiPBaYWmZTktnals%2B7ihY%2Flcmo8WpDQfUDjEt69lvF3%2BE9ltUluKA8ygD%2FDCoL7%2FDjdBXCLI5SRBVFMLKN7b8GOqUB%2BIH9Eccx0TTvrmlZU%2BSCXQ9rVbcV2JcnAgE5NOZCoCgQr2Sk09tuqsTjixHguurtI6oTiaIgzabdCY59tNqjwnd%2BMEOhohgp0WoXYKqian%2FBzUWuKJ8TXEQvu6r4JGXW%2FfigU5SLmV7j3FDQ86ikUh0zAstj%2FJ4dHbInmYQw0WRqSSvnJ1WZ1aLDmR8WDlz9QGzn7%2FbfX8XgVS7UNy8USfzxH%2FNr&X-Amz-Signature=fa240a99d7bd7897cd45392ac620933f68e4fed377e5d508c9555cc7c3af2ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYL77YK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEo3Vco9bAc%2FyCIpUr9qC3ii6PyJWgISO37n50K%2BUPvwAiEAnjkTerS9IIFEC%2BuLtaKOdl0NpTfBqQuPqBG%2FAZLgINQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8WYsoTqZf31Le1%2BircA1RCEG1%2F1u3TnaYaI4k7gtnQZFyvwjTb0TnnY7pUigDNf1uL5azfHgLP3kCPyRQ3b5J6DGjN3%2BF8Ecrmq8hxbANV85uygM3RKpTDZC5x8NzvNV58f2C%2BbOlzNLrjelu7q4ayFr6RD1fi2u%2FoBVzgiDjU7%2F8WQKMMstrmC9mLWs%2FgFOpZJ6jyEMpfEzzpGGl4qexkO71%2BDmv4tPqGG7kt3tJrNfUeilP9Y41N8ZoRYZyfRaNXYaP4OlxgYpKci55uZBHqhJdUO8skkrnZMz78xxhGlNVRc2C3mhmNjVhbmtUMepjtcb0O66L6KYJGvdSVDI%2BS36LZGiL%2FHS%2FhczjdvmzMsOPF3ulfb98NPCVFDy2e4qnfyvTu%2BAgtjGbndJ7URTJEmosTMm%2BZn1s%2FQY67pxwgSQ3sVl%2BZSkAHzdFgjSjoFcLfHz6VTx4yPdPtd0lh1Aq9uxb3t%2BYwtxHojAG4GGhh4QkpOz2J83shKhZHdmJm6WN4BEJ1yEjc7IgGIFP%2F%2Fzu9Gz0MjtrZJUfyqjfM5b557%2FtRlFuAjPd6GIGABJbnbH%2BiPBaYWmZTktnals%2B7ihY%2Flcmo8WpDQfUDjEt69lvF3%2BE9ltUluKA8ygD%2FDCoL7%2FDjdBXCLI5SRBVFMLKN7b8GOqUB%2BIH9Eccx0TTvrmlZU%2BSCXQ9rVbcV2JcnAgE5NOZCoCgQr2Sk09tuqsTjixHguurtI6oTiaIgzabdCY59tNqjwnd%2BMEOhohgp0WoXYKqian%2FBzUWuKJ8TXEQvu6r4JGXW%2FfigU5SLmV7j3FDQ86ikUh0zAstj%2FJ4dHbInmYQw0WRqSSvnJ1WZ1aLDmR8WDlz9QGzn7%2FbfX8XgVS7UNy8USfzxH%2FNr&X-Amz-Signature=d9c8b94d8732a9507dad2593f677ab01acaca5ecf4f4b3e22d3749bd90988593&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYL77YK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEo3Vco9bAc%2FyCIpUr9qC3ii6PyJWgISO37n50K%2BUPvwAiEAnjkTerS9IIFEC%2BuLtaKOdl0NpTfBqQuPqBG%2FAZLgINQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8WYsoTqZf31Le1%2BircA1RCEG1%2F1u3TnaYaI4k7gtnQZFyvwjTb0TnnY7pUigDNf1uL5azfHgLP3kCPyRQ3b5J6DGjN3%2BF8Ecrmq8hxbANV85uygM3RKpTDZC5x8NzvNV58f2C%2BbOlzNLrjelu7q4ayFr6RD1fi2u%2FoBVzgiDjU7%2F8WQKMMstrmC9mLWs%2FgFOpZJ6jyEMpfEzzpGGl4qexkO71%2BDmv4tPqGG7kt3tJrNfUeilP9Y41N8ZoRYZyfRaNXYaP4OlxgYpKci55uZBHqhJdUO8skkrnZMz78xxhGlNVRc2C3mhmNjVhbmtUMepjtcb0O66L6KYJGvdSVDI%2BS36LZGiL%2FHS%2FhczjdvmzMsOPF3ulfb98NPCVFDy2e4qnfyvTu%2BAgtjGbndJ7URTJEmosTMm%2BZn1s%2FQY67pxwgSQ3sVl%2BZSkAHzdFgjSjoFcLfHz6VTx4yPdPtd0lh1Aq9uxb3t%2BYwtxHojAG4GGhh4QkpOz2J83shKhZHdmJm6WN4BEJ1yEjc7IgGIFP%2F%2Fzu9Gz0MjtrZJUfyqjfM5b557%2FtRlFuAjPd6GIGABJbnbH%2BiPBaYWmZTktnals%2B7ihY%2Flcmo8WpDQfUDjEt69lvF3%2BE9ltUluKA8ygD%2FDCoL7%2FDjdBXCLI5SRBVFMLKN7b8GOqUB%2BIH9Eccx0TTvrmlZU%2BSCXQ9rVbcV2JcnAgE5NOZCoCgQr2Sk09tuqsTjixHguurtI6oTiaIgzabdCY59tNqjwnd%2BMEOhohgp0WoXYKqian%2FBzUWuKJ8TXEQvu6r4JGXW%2FfigU5SLmV7j3FDQ86ikUh0zAstj%2FJ4dHbInmYQw0WRqSSvnJ1WZ1aLDmR8WDlz9QGzn7%2FbfX8XgVS7UNy8USfzxH%2FNr&X-Amz-Signature=1e679286c61af013331c8f2c21dc724f8413575b68f6be4d11cdd008178587c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
