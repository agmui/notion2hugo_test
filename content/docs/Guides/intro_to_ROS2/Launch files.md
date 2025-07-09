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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO5BRKZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjpIxeEG9YKrA0O3QK2HJJQ3G2naz4uWmIoWq5conMjgIgYquRudazWuPkW878fT6jgjSx4hXZS5IeTk7WAMCQ9b0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaKTMAydnVuEMB6PCrcA46R1SwUy4QP8%2Bd5yjR0YCyFZQPXwJnAXONXnkShu7KA8DSDt%2FTa%2BEOj14Yl7gQWM92QjECAV9yzdcn%2BC%2FOF6HpW%2FIsZ6idLvmyPZeHBk%2BJJcNcxiALVKczcWzVIhpguvFKBkyP2gE5igIZsdk75h%2F9MK7EdwrkOHFdEHi%2B1LKAEYKzZnJ%2B0sCtC2piYpD9C8IVALV2qHDemcJl2tjZfbGE5C2rMNnjGLLpYZGf57RoWX%2BUfkhZGcWncQ6OgGYff3NofFfGAXlevHGQSzBlQVKRVslFD6216Vuth4poac6lOceOzgqkPtot1%2Bu%2B80GJs%2BXHJsY5aUUnlpbhw877B87b9QckSgbEHNmrOkMOpStNAYrafyE2niS%2BY6zNvb0RK9nqiCzPsY5a%2FpmWiCVcKuF5RMigbrp31FD2kXwFm3b4UOjj21CLF9fNFb8v5qyk9UpXekar%2FKeOra9Y1JoxaxREIaI5Q%2FRqiSuJWFYO7bGvYz3gInearbF%2Babzg7rrNRY9WRuCR7WNPebIg09M6eh%2BbSvurXSNbSLBq2P40LdIJsTllgwvjJXL8QIRNzFQh77ZnvlXT4gWwxN4Q1ft7GdPxWFf7Ipvl80WOEglFQsoHM52ITaVrB0IjvjHsmMJGLucMGOqUBPxxoossNref2MopxnJbcT7jHT8CMc%2BOe1IZs3dzribYy1uhZvsRAZxQTccaBcL7cDyo%2BdNaj5yamU6pEOL1t%2BJ4miCbhNSJ9mPugltcA5XNiq486LMEJZCJIzNYPmiS%2B96te%2FaMukzLfMAksgLA2ImeqZ0sFXP5oar5%2BuM1xVqpkJ5y4BNvdpKfPeKLwyeXMX4lPfwkLk30ov336RRZTi9Nemh0R&X-Amz-Signature=1b4b956a27d9b2c219e904488fb4835f48743aff2791c859105bf7207ddf0226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO5BRKZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjpIxeEG9YKrA0O3QK2HJJQ3G2naz4uWmIoWq5conMjgIgYquRudazWuPkW878fT6jgjSx4hXZS5IeTk7WAMCQ9b0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaKTMAydnVuEMB6PCrcA46R1SwUy4QP8%2Bd5yjR0YCyFZQPXwJnAXONXnkShu7KA8DSDt%2FTa%2BEOj14Yl7gQWM92QjECAV9yzdcn%2BC%2FOF6HpW%2FIsZ6idLvmyPZeHBk%2BJJcNcxiALVKczcWzVIhpguvFKBkyP2gE5igIZsdk75h%2F9MK7EdwrkOHFdEHi%2B1LKAEYKzZnJ%2B0sCtC2piYpD9C8IVALV2qHDemcJl2tjZfbGE5C2rMNnjGLLpYZGf57RoWX%2BUfkhZGcWncQ6OgGYff3NofFfGAXlevHGQSzBlQVKRVslFD6216Vuth4poac6lOceOzgqkPtot1%2Bu%2B80GJs%2BXHJsY5aUUnlpbhw877B87b9QckSgbEHNmrOkMOpStNAYrafyE2niS%2BY6zNvb0RK9nqiCzPsY5a%2FpmWiCVcKuF5RMigbrp31FD2kXwFm3b4UOjj21CLF9fNFb8v5qyk9UpXekar%2FKeOra9Y1JoxaxREIaI5Q%2FRqiSuJWFYO7bGvYz3gInearbF%2Babzg7rrNRY9WRuCR7WNPebIg09M6eh%2BbSvurXSNbSLBq2P40LdIJsTllgwvjJXL8QIRNzFQh77ZnvlXT4gWwxN4Q1ft7GdPxWFf7Ipvl80WOEglFQsoHM52ITaVrB0IjvjHsmMJGLucMGOqUBPxxoossNref2MopxnJbcT7jHT8CMc%2BOe1IZs3dzribYy1uhZvsRAZxQTccaBcL7cDyo%2BdNaj5yamU6pEOL1t%2BJ4miCbhNSJ9mPugltcA5XNiq486LMEJZCJIzNYPmiS%2B96te%2FaMukzLfMAksgLA2ImeqZ0sFXP5oar5%2BuM1xVqpkJ5y4BNvdpKfPeKLwyeXMX4lPfwkLk30ov336RRZTi9Nemh0R&X-Amz-Signature=7fc4f7b833cfa42b9943e309e00ba519e65796abf335b44b1383ecf116158044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO5BRKZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjpIxeEG9YKrA0O3QK2HJJQ3G2naz4uWmIoWq5conMjgIgYquRudazWuPkW878fT6jgjSx4hXZS5IeTk7WAMCQ9b0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaKTMAydnVuEMB6PCrcA46R1SwUy4QP8%2Bd5yjR0YCyFZQPXwJnAXONXnkShu7KA8DSDt%2FTa%2BEOj14Yl7gQWM92QjECAV9yzdcn%2BC%2FOF6HpW%2FIsZ6idLvmyPZeHBk%2BJJcNcxiALVKczcWzVIhpguvFKBkyP2gE5igIZsdk75h%2F9MK7EdwrkOHFdEHi%2B1LKAEYKzZnJ%2B0sCtC2piYpD9C8IVALV2qHDemcJl2tjZfbGE5C2rMNnjGLLpYZGf57RoWX%2BUfkhZGcWncQ6OgGYff3NofFfGAXlevHGQSzBlQVKRVslFD6216Vuth4poac6lOceOzgqkPtot1%2Bu%2B80GJs%2BXHJsY5aUUnlpbhw877B87b9QckSgbEHNmrOkMOpStNAYrafyE2niS%2BY6zNvb0RK9nqiCzPsY5a%2FpmWiCVcKuF5RMigbrp31FD2kXwFm3b4UOjj21CLF9fNFb8v5qyk9UpXekar%2FKeOra9Y1JoxaxREIaI5Q%2FRqiSuJWFYO7bGvYz3gInearbF%2Babzg7rrNRY9WRuCR7WNPebIg09M6eh%2BbSvurXSNbSLBq2P40LdIJsTllgwvjJXL8QIRNzFQh77ZnvlXT4gWwxN4Q1ft7GdPxWFf7Ipvl80WOEglFQsoHM52ITaVrB0IjvjHsmMJGLucMGOqUBPxxoossNref2MopxnJbcT7jHT8CMc%2BOe1IZs3dzribYy1uhZvsRAZxQTccaBcL7cDyo%2BdNaj5yamU6pEOL1t%2BJ4miCbhNSJ9mPugltcA5XNiq486LMEJZCJIzNYPmiS%2B96te%2FaMukzLfMAksgLA2ImeqZ0sFXP5oar5%2BuM1xVqpkJ5y4BNvdpKfPeKLwyeXMX4lPfwkLk30ov336RRZTi9Nemh0R&X-Amz-Signature=978e5aa0631574f8b65784396bb378f4fd3020eee29002b0c48ee6e1aee6c905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
