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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIT5S4L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHWSyCmFv9gQFXBwF%2B%2BqGHM5o0RaMnoM9%2FAA%2BhlIMZzUAiEAgL27cW1PCWm4jxNhX1sHCASi8wNmBU%2B0k8SjNCPJd9Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDApqrCUexzI1oLGyaSrcA2mjaFIBsp35UVXPXU%2BoJlD5u5mPJ78V781MnP1pXI9ee1ad9SJ36Jhc7rlWnTqR2FuixKL9vHQKE8d60n8aR2mU%2B2b8qjp0znLc%2BOXKrj3Te9LmUYmuaUjEj8aHgb4Xp6R16HTP1qbD%2B4BxICDwUr8taTnQkILQNPWNdWHervOHpLX75OWaCMm%2FwS1QnWpzOw%2B6KNk5ouq4FXix7o78OyvdGP23fI4XBPapBQ6qfdN7Q3%2B1qb9AxwNmO4wJwx2yfYbFwO96mRdC7jDS6eyhMIZOjBQ7GV7pvHk30oXeg9WFcNGY0yrCvh3%2F%2BePwHh%2BKWGdXyIYrGsONbg1PU12JXvBoMrvcFU5VCATfc7DfHQIz%2FXyARTTCwjTeXerSHUo20%2FqNm7D4810NZTrjtC3aMWgE2T%2BbjVjwWjt5UiwYGDO55DV5jGIp0902f20P7oSafPfkzf2%2BUxYNkCxvt8ogVgezNj0CaUHYn4ESdBD6GmKugcsF1MQI4R1N4yL1R%2BLXWrcTKq%2B6K1RyPKZnw6chF16jmtYqyrOLrryfTWsb1VSmvV7j9x0yMGf%2Bxna6C%2FbL876oVEJBpQdeEXZ%2F7Hbmf%2F3GFOuy1Stgq3ATFEGkpcojt6kDETUwfDtuxMUdMLmEqMAGOqUB0t5iOY%2BpKxZdmnFmzIOc889BDw4Z%2BwyE6HjaSgOkAjLI0C32q8wc9P8nUuTwdDaMHdniqkEzU49XT5VWU9JMdCdvBGLmgXf9zeuDbsGwJrFejGFFih5Ju7wV1Gs3zs9GnrWRFiMnulXg60lPrlIN9q23foanp%2F314M6zTrEoRDmvgUsQ7fkgkbpwJVANELocgvJOVaelRodrLWxA46mhaGy5qhpB&X-Amz-Signature=a1164949c154ae3b03815c9adbbadb30497330a865f3d247aea065456ba7cf3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIT5S4L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHWSyCmFv9gQFXBwF%2B%2BqGHM5o0RaMnoM9%2FAA%2BhlIMZzUAiEAgL27cW1PCWm4jxNhX1sHCASi8wNmBU%2B0k8SjNCPJd9Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDApqrCUexzI1oLGyaSrcA2mjaFIBsp35UVXPXU%2BoJlD5u5mPJ78V781MnP1pXI9ee1ad9SJ36Jhc7rlWnTqR2FuixKL9vHQKE8d60n8aR2mU%2B2b8qjp0znLc%2BOXKrj3Te9LmUYmuaUjEj8aHgb4Xp6R16HTP1qbD%2B4BxICDwUr8taTnQkILQNPWNdWHervOHpLX75OWaCMm%2FwS1QnWpzOw%2B6KNk5ouq4FXix7o78OyvdGP23fI4XBPapBQ6qfdN7Q3%2B1qb9AxwNmO4wJwx2yfYbFwO96mRdC7jDS6eyhMIZOjBQ7GV7pvHk30oXeg9WFcNGY0yrCvh3%2F%2BePwHh%2BKWGdXyIYrGsONbg1PU12JXvBoMrvcFU5VCATfc7DfHQIz%2FXyARTTCwjTeXerSHUo20%2FqNm7D4810NZTrjtC3aMWgE2T%2BbjVjwWjt5UiwYGDO55DV5jGIp0902f20P7oSafPfkzf2%2BUxYNkCxvt8ogVgezNj0CaUHYn4ESdBD6GmKugcsF1MQI4R1N4yL1R%2BLXWrcTKq%2B6K1RyPKZnw6chF16jmtYqyrOLrryfTWsb1VSmvV7j9x0yMGf%2Bxna6C%2FbL876oVEJBpQdeEXZ%2F7Hbmf%2F3GFOuy1Stgq3ATFEGkpcojt6kDETUwfDtuxMUdMLmEqMAGOqUB0t5iOY%2BpKxZdmnFmzIOc889BDw4Z%2BwyE6HjaSgOkAjLI0C32q8wc9P8nUuTwdDaMHdniqkEzU49XT5VWU9JMdCdvBGLmgXf9zeuDbsGwJrFejGFFih5Ju7wV1Gs3zs9GnrWRFiMnulXg60lPrlIN9q23foanp%2F314M6zTrEoRDmvgUsQ7fkgkbpwJVANELocgvJOVaelRodrLWxA46mhaGy5qhpB&X-Amz-Signature=b92a27ca176d386a732b6e7c61ea0fe3f4d2899eb72167151a641760137251ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIT5S4L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHWSyCmFv9gQFXBwF%2B%2BqGHM5o0RaMnoM9%2FAA%2BhlIMZzUAiEAgL27cW1PCWm4jxNhX1sHCASi8wNmBU%2B0k8SjNCPJd9Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDApqrCUexzI1oLGyaSrcA2mjaFIBsp35UVXPXU%2BoJlD5u5mPJ78V781MnP1pXI9ee1ad9SJ36Jhc7rlWnTqR2FuixKL9vHQKE8d60n8aR2mU%2B2b8qjp0znLc%2BOXKrj3Te9LmUYmuaUjEj8aHgb4Xp6R16HTP1qbD%2B4BxICDwUr8taTnQkILQNPWNdWHervOHpLX75OWaCMm%2FwS1QnWpzOw%2B6KNk5ouq4FXix7o78OyvdGP23fI4XBPapBQ6qfdN7Q3%2B1qb9AxwNmO4wJwx2yfYbFwO96mRdC7jDS6eyhMIZOjBQ7GV7pvHk30oXeg9WFcNGY0yrCvh3%2F%2BePwHh%2BKWGdXyIYrGsONbg1PU12JXvBoMrvcFU5VCATfc7DfHQIz%2FXyARTTCwjTeXerSHUo20%2FqNm7D4810NZTrjtC3aMWgE2T%2BbjVjwWjt5UiwYGDO55DV5jGIp0902f20P7oSafPfkzf2%2BUxYNkCxvt8ogVgezNj0CaUHYn4ESdBD6GmKugcsF1MQI4R1N4yL1R%2BLXWrcTKq%2B6K1RyPKZnw6chF16jmtYqyrOLrryfTWsb1VSmvV7j9x0yMGf%2Bxna6C%2FbL876oVEJBpQdeEXZ%2F7Hbmf%2F3GFOuy1Stgq3ATFEGkpcojt6kDETUwfDtuxMUdMLmEqMAGOqUB0t5iOY%2BpKxZdmnFmzIOc889BDw4Z%2BwyE6HjaSgOkAjLI0C32q8wc9P8nUuTwdDaMHdniqkEzU49XT5VWU9JMdCdvBGLmgXf9zeuDbsGwJrFejGFFih5Ju7wV1Gs3zs9GnrWRFiMnulXg60lPrlIN9q23foanp%2F314M6zTrEoRDmvgUsQ7fkgkbpwJVANELocgvJOVaelRodrLWxA46mhaGy5qhpB&X-Amz-Signature=2ef5de0107f21fd4e345142c8d924653ea1bdad7887defb73f2369567011d1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
