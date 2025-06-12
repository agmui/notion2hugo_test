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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZGDUV5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFzxY1E1Z8R24sR5fnLJdmUIvVDeNrwPescC32gkWllMAiEAmKsayh1S1n0%2BdvJA1xAoOBOgG0JZREZibfjS4zU5uPwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWLs6TPvuufO0XMfCrcAyZdK3jMEP4zcNndiqB22dYLF0cSt0%2FuJMxkCPV0tQeA9JKGTfKx1MXyuqLlkWhgpswZRlCbG4uNhkPhD%2BIbnD6nrlqW0%2FYxrNqe5IsA6T104eNK2kvBv0C5zfRBzbjNfmqJc1%2BIyDge5UKGXM72xi1Jj2ZzfUgAxp6ZX44UXxHqQOwbFqv2JvZwZ3KQyQrkyy6IRNkPLsBCpHg%2BulCKmo6hv%2FMRs6a9hhnC7jvo9B7lGxGHjD7q%2BLhUB3bVodFmrydDAh44lTTUVgAFQflSBhENOyXvpItDbtFcUv9aTIwEA0HBoMgYuIgzccF8502MSXtGVQFerQF%2F4UADBsU5C7CDfj09BLM00JuDIloGHQsMZSeInBl5IbvrjcqEYbXcuM5ADaLgwDt6cHl9HZDOmrEKPhT2gNpzlLocil%2FCzqZ6VJY4zHmwv9rWiyIITYUzbeF%2BRIBKsStdHCuwVbO4y8jsacnU84xrAnunkTozMHhpPHaScvh9oS4%2BSiKnbbsN4iB61cYdAH51SSzDdCcWLhjzNUt3o33gZolsi%2B2FVo8vKybsYJQsLEzy6%2FZbLBXjvEiw5eeSwJqiOPpHUeN1nzZO1Kqm83pBn6qfINZumYMW5LkO3Yf4QOcxZVyDMOWQrMIGOqUBEIFIBVfZTynUYuFZOeuagQFSSCryb1s%2BJ%2FvzFVQdM7FFPJigEC3AmQM8HXYlvgJyFToQh11Y1ygpHmJVV3NDzNF0zn5zU6IJ%2Bl3A%2BqTW7EK6hJMC2ptHAiY4zdwAWwp679zOxc2KrNR6vGedituEqpe4QGF9CIQEsi88ojMLouBsBXVgrpEO4LT2HWgiEXAiEKsdCXbYubHFzJUueWGU3CNEYSq%2B&X-Amz-Signature=2b8c16d5921625bb6383f9f35926a3aabd1d269c43dd3b2cc81ffa613c422075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZGDUV5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFzxY1E1Z8R24sR5fnLJdmUIvVDeNrwPescC32gkWllMAiEAmKsayh1S1n0%2BdvJA1xAoOBOgG0JZREZibfjS4zU5uPwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWLs6TPvuufO0XMfCrcAyZdK3jMEP4zcNndiqB22dYLF0cSt0%2FuJMxkCPV0tQeA9JKGTfKx1MXyuqLlkWhgpswZRlCbG4uNhkPhD%2BIbnD6nrlqW0%2FYxrNqe5IsA6T104eNK2kvBv0C5zfRBzbjNfmqJc1%2BIyDge5UKGXM72xi1Jj2ZzfUgAxp6ZX44UXxHqQOwbFqv2JvZwZ3KQyQrkyy6IRNkPLsBCpHg%2BulCKmo6hv%2FMRs6a9hhnC7jvo9B7lGxGHjD7q%2BLhUB3bVodFmrydDAh44lTTUVgAFQflSBhENOyXvpItDbtFcUv9aTIwEA0HBoMgYuIgzccF8502MSXtGVQFerQF%2F4UADBsU5C7CDfj09BLM00JuDIloGHQsMZSeInBl5IbvrjcqEYbXcuM5ADaLgwDt6cHl9HZDOmrEKPhT2gNpzlLocil%2FCzqZ6VJY4zHmwv9rWiyIITYUzbeF%2BRIBKsStdHCuwVbO4y8jsacnU84xrAnunkTozMHhpPHaScvh9oS4%2BSiKnbbsN4iB61cYdAH51SSzDdCcWLhjzNUt3o33gZolsi%2B2FVo8vKybsYJQsLEzy6%2FZbLBXjvEiw5eeSwJqiOPpHUeN1nzZO1Kqm83pBn6qfINZumYMW5LkO3Yf4QOcxZVyDMOWQrMIGOqUBEIFIBVfZTynUYuFZOeuagQFSSCryb1s%2BJ%2FvzFVQdM7FFPJigEC3AmQM8HXYlvgJyFToQh11Y1ygpHmJVV3NDzNF0zn5zU6IJ%2Bl3A%2BqTW7EK6hJMC2ptHAiY4zdwAWwp679zOxc2KrNR6vGedituEqpe4QGF9CIQEsi88ojMLouBsBXVgrpEO4LT2HWgiEXAiEKsdCXbYubHFzJUueWGU3CNEYSq%2B&X-Amz-Signature=a74b4827e84ca62142780c002a9c0a31cd9794d1844639798245e561a4719e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZGDUV5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFzxY1E1Z8R24sR5fnLJdmUIvVDeNrwPescC32gkWllMAiEAmKsayh1S1n0%2BdvJA1xAoOBOgG0JZREZibfjS4zU5uPwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWLs6TPvuufO0XMfCrcAyZdK3jMEP4zcNndiqB22dYLF0cSt0%2FuJMxkCPV0tQeA9JKGTfKx1MXyuqLlkWhgpswZRlCbG4uNhkPhD%2BIbnD6nrlqW0%2FYxrNqe5IsA6T104eNK2kvBv0C5zfRBzbjNfmqJc1%2BIyDge5UKGXM72xi1Jj2ZzfUgAxp6ZX44UXxHqQOwbFqv2JvZwZ3KQyQrkyy6IRNkPLsBCpHg%2BulCKmo6hv%2FMRs6a9hhnC7jvo9B7lGxGHjD7q%2BLhUB3bVodFmrydDAh44lTTUVgAFQflSBhENOyXvpItDbtFcUv9aTIwEA0HBoMgYuIgzccF8502MSXtGVQFerQF%2F4UADBsU5C7CDfj09BLM00JuDIloGHQsMZSeInBl5IbvrjcqEYbXcuM5ADaLgwDt6cHl9HZDOmrEKPhT2gNpzlLocil%2FCzqZ6VJY4zHmwv9rWiyIITYUzbeF%2BRIBKsStdHCuwVbO4y8jsacnU84xrAnunkTozMHhpPHaScvh9oS4%2BSiKnbbsN4iB61cYdAH51SSzDdCcWLhjzNUt3o33gZolsi%2B2FVo8vKybsYJQsLEzy6%2FZbLBXjvEiw5eeSwJqiOPpHUeN1nzZO1Kqm83pBn6qfINZumYMW5LkO3Yf4QOcxZVyDMOWQrMIGOqUBEIFIBVfZTynUYuFZOeuagQFSSCryb1s%2BJ%2FvzFVQdM7FFPJigEC3AmQM8HXYlvgJyFToQh11Y1ygpHmJVV3NDzNF0zn5zU6IJ%2Bl3A%2BqTW7EK6hJMC2ptHAiY4zdwAWwp679zOxc2KrNR6vGedituEqpe4QGF9CIQEsi88ojMLouBsBXVgrpEO4LT2HWgiEXAiEKsdCXbYubHFzJUueWGU3CNEYSq%2B&X-Amz-Signature=f1201f8aaa261a744388fa67fd91ae7fffc854f191906099b506b429d9ee715c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
