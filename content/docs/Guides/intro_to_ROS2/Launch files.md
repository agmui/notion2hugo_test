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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFFP4NR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDibOVW0txsatfjY4VukjDayESrnSh9oKFBTywMuzr%2FFAiAYeFyXhGLSaadBXWkAi9lNVgnuPdKkt%2BRX7JSQV7dkUSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLaw6BZabcZesr0jKtwDrNCWfOHXV3lxKNYQjL5G39UOB5k4CEczu149xpzbbhDYzRIS%2BQ3IQKAHnD0NfiLBv9ub25Q4jtPV6kNpSG2eNvZdHlztZAkxM12wb4Q%2Fm9JKDFwfuP94p6qejN%2FIqXM5XQz7y%2FIYkpoDVEfOQ8uFbSDRie4BC4yJqDXMR6z%2FIqTn%2BGYNfMenGV8B0Tis%2FwXi2xtNzyik7wXN2Qus0Geew%2Fx2%2FmAB3xeWf1sLvNBCOha8mD4E11RqcVacC0HmDQtJPRVXdl4SuooH8SNrAfvAT%2FpZ36nWAXVNaxCTrq%2F%2FPI8LL73iAhZ32zgu7ahce63kILAexFUgrM1W871F7B36VrjUc%2BChdXrXRcr24ZOzlaMT0Qscj1Sz56hLEsxFd7fclL%2B1vKMYIMd0PfZ4R0Um7w4nS%2BRnXHvaqLF%2B7%2BL8701rWOJOSv6EErVh9HdSjQ2j%2BZgHCoLCcuDqgMdJQTfh98zpGvjNc%2BZcU9ieNXtwUbObYr5ZwOxTXgjy92fk%2BDaH7LPYsCVjsGGjMpsJ07HdKxK7Y%2BbKuZuo0aiBjAA7NWHKsM7cc3qA6gHpczl%2B0BFVBlFVojXyzJbenHxkpLmoFmwzxYHGdUrsYVMRYTHRteg8qNQuAA6wNRnGfwcw4JCcvQY6pgGa5jccrTguw2%2BaHAmeA8kKSnjaoixoxFoZgArgKQWWRYRIoHTxwcMwula8fsSkymj4WICJiOuTaNF8ZctRinMOcspn5zHKjAyABXAhBDqyTQrzjPSEMuD7I%2FqAR26RX17OJ23fyhN0RVkXzrLaOTMQus2JJRJAY7XFwBGrgmU5JsaedU2wsojnjrkpOvd8hwFU%2FaiOjppfDqo5ThOpIpMWo91wMPCG&X-Amz-Signature=989e4f52969df0643d2eaa220c8068681191b4ef7bce3132be858d66024c3629&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFFP4NR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDibOVW0txsatfjY4VukjDayESrnSh9oKFBTywMuzr%2FFAiAYeFyXhGLSaadBXWkAi9lNVgnuPdKkt%2BRX7JSQV7dkUSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLaw6BZabcZesr0jKtwDrNCWfOHXV3lxKNYQjL5G39UOB5k4CEczu149xpzbbhDYzRIS%2BQ3IQKAHnD0NfiLBv9ub25Q4jtPV6kNpSG2eNvZdHlztZAkxM12wb4Q%2Fm9JKDFwfuP94p6qejN%2FIqXM5XQz7y%2FIYkpoDVEfOQ8uFbSDRie4BC4yJqDXMR6z%2FIqTn%2BGYNfMenGV8B0Tis%2FwXi2xtNzyik7wXN2Qus0Geew%2Fx2%2FmAB3xeWf1sLvNBCOha8mD4E11RqcVacC0HmDQtJPRVXdl4SuooH8SNrAfvAT%2FpZ36nWAXVNaxCTrq%2F%2FPI8LL73iAhZ32zgu7ahce63kILAexFUgrM1W871F7B36VrjUc%2BChdXrXRcr24ZOzlaMT0Qscj1Sz56hLEsxFd7fclL%2B1vKMYIMd0PfZ4R0Um7w4nS%2BRnXHvaqLF%2B7%2BL8701rWOJOSv6EErVh9HdSjQ2j%2BZgHCoLCcuDqgMdJQTfh98zpGvjNc%2BZcU9ieNXtwUbObYr5ZwOxTXgjy92fk%2BDaH7LPYsCVjsGGjMpsJ07HdKxK7Y%2BbKuZuo0aiBjAA7NWHKsM7cc3qA6gHpczl%2B0BFVBlFVojXyzJbenHxkpLmoFmwzxYHGdUrsYVMRYTHRteg8qNQuAA6wNRnGfwcw4JCcvQY6pgGa5jccrTguw2%2BaHAmeA8kKSnjaoixoxFoZgArgKQWWRYRIoHTxwcMwula8fsSkymj4WICJiOuTaNF8ZctRinMOcspn5zHKjAyABXAhBDqyTQrzjPSEMuD7I%2FqAR26RX17OJ23fyhN0RVkXzrLaOTMQus2JJRJAY7XFwBGrgmU5JsaedU2wsojnjrkpOvd8hwFU%2FaiOjppfDqo5ThOpIpMWo91wMPCG&X-Amz-Signature=b3a177a1268c6756dea66a3ae68547a8a8b06dc0a956c7056bb6e6993a13bc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFFP4NR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDibOVW0txsatfjY4VukjDayESrnSh9oKFBTywMuzr%2FFAiAYeFyXhGLSaadBXWkAi9lNVgnuPdKkt%2BRX7JSQV7dkUSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLaw6BZabcZesr0jKtwDrNCWfOHXV3lxKNYQjL5G39UOB5k4CEczu149xpzbbhDYzRIS%2BQ3IQKAHnD0NfiLBv9ub25Q4jtPV6kNpSG2eNvZdHlztZAkxM12wb4Q%2Fm9JKDFwfuP94p6qejN%2FIqXM5XQz7y%2FIYkpoDVEfOQ8uFbSDRie4BC4yJqDXMR6z%2FIqTn%2BGYNfMenGV8B0Tis%2FwXi2xtNzyik7wXN2Qus0Geew%2Fx2%2FmAB3xeWf1sLvNBCOha8mD4E11RqcVacC0HmDQtJPRVXdl4SuooH8SNrAfvAT%2FpZ36nWAXVNaxCTrq%2F%2FPI8LL73iAhZ32zgu7ahce63kILAexFUgrM1W871F7B36VrjUc%2BChdXrXRcr24ZOzlaMT0Qscj1Sz56hLEsxFd7fclL%2B1vKMYIMd0PfZ4R0Um7w4nS%2BRnXHvaqLF%2B7%2BL8701rWOJOSv6EErVh9HdSjQ2j%2BZgHCoLCcuDqgMdJQTfh98zpGvjNc%2BZcU9ieNXtwUbObYr5ZwOxTXgjy92fk%2BDaH7LPYsCVjsGGjMpsJ07HdKxK7Y%2BbKuZuo0aiBjAA7NWHKsM7cc3qA6gHpczl%2B0BFVBlFVojXyzJbenHxkpLmoFmwzxYHGdUrsYVMRYTHRteg8qNQuAA6wNRnGfwcw4JCcvQY6pgGa5jccrTguw2%2BaHAmeA8kKSnjaoixoxFoZgArgKQWWRYRIoHTxwcMwula8fsSkymj4WICJiOuTaNF8ZctRinMOcspn5zHKjAyABXAhBDqyTQrzjPSEMuD7I%2FqAR26RX17OJ23fyhN0RVkXzrLaOTMQus2JJRJAY7XFwBGrgmU5JsaedU2wsojnjrkpOvd8hwFU%2FaiOjppfDqo5ThOpIpMWo91wMPCG&X-Amz-Signature=07be5a2e70510c3f8f4aed3c85fc557bd1bf88dd03c0007d21bdd80e929a8679&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
