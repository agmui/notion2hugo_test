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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I76JN3X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHo8HUXxKa8zaWQWceMFNTgFP62bFjdtGHsIj%2B0MlugeAiEAqRQb1Jtd9QIv6wVU%2FQleslcu4YpT4i1DflRJwnZhCBcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTFk656oeo9MxL4ircA0tbYEwpqGMXN2jrl9Adnn0nd5o0UqqX8xG0%2FaVgNgDvYwk7ZBzkFhYOvk3doyoNLGjzyNVZRgvuZ3MSGjal4UL8qDM2lJwYbrUrbln06AgY0roXYJrgMFmXMCYjPcRB9ZqTYCSMvf4pju1pm7%2BmBx2gOKVBOKTbpplrIs9G7HTPwOkDy%2BFPjYuj9kSVJFtUjMWUUxGG5Zf8KGSklPvRXTHIp7v4aEaWPG1pLjgIpPp1zcdeYYCVdrDCoSFZZW6icBsr31E2wj6n5zmmtkyuF%2BkxZ3jjKuaoEylH1KEW9wR4e9VzzXZsTE7MJjqqVAixsA3TqBaON58eOaDurBwo%2BwY%2BKztYZFPK%2B0YPtm2XRbtMkBIMvdrN9sJqKoPPgUovyAJ9N0Lv6dr0yHkT0cgKwu5RxgDwQVyKrYxGmgLq6F5059vZnjrpl%2BcaWBFoCjfAYF5iDdgfLLvxGaTHRvhr5Kc%2FIl0k0uYOH2OYSjqE%2F%2FkW0E%2BMrpAUYYsy6ZTOqfJi8%2FUWsnhV%2Fe%2Fsx2I7poQSlJgjbG%2Fbvw9YWr7K9KjSjA6rg2Q2ChzGwFk087V1LLaoTGNYqxUcCX3mGPlZRD%2FNBd9nIzCsy1ZYxoP5ltfgEk72Ko3c%2Fc4IHV9fQwqkMMqw8L8GOqUBQIRF1K7FkQq3xrcvhcEoajh3pBiF1bhfarlh9uexDpeRcE7M7PZ%2FeX4uqygPrautC6e6%2Bba2DnyPhwgblOVALcvDuOPfykn6oZ5MCydRJ8YxjkKnewl5gtzD5nIWz%2FFCOTvQv4HTQYcoR1nm5yPS1XjfD5Kt8nFMPNx70yiCJhXOhxaYdxZ6VArzz0TTCDjXezm5V01FACm%2Fh5V%2Ft2fFniIhtRa0&X-Amz-Signature=3d51997da9d5e4abc041055f0b8b1fa47be3a568e4404e5e999fbf24bd5bd41d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I76JN3X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHo8HUXxKa8zaWQWceMFNTgFP62bFjdtGHsIj%2B0MlugeAiEAqRQb1Jtd9QIv6wVU%2FQleslcu4YpT4i1DflRJwnZhCBcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTFk656oeo9MxL4ircA0tbYEwpqGMXN2jrl9Adnn0nd5o0UqqX8xG0%2FaVgNgDvYwk7ZBzkFhYOvk3doyoNLGjzyNVZRgvuZ3MSGjal4UL8qDM2lJwYbrUrbln06AgY0roXYJrgMFmXMCYjPcRB9ZqTYCSMvf4pju1pm7%2BmBx2gOKVBOKTbpplrIs9G7HTPwOkDy%2BFPjYuj9kSVJFtUjMWUUxGG5Zf8KGSklPvRXTHIp7v4aEaWPG1pLjgIpPp1zcdeYYCVdrDCoSFZZW6icBsr31E2wj6n5zmmtkyuF%2BkxZ3jjKuaoEylH1KEW9wR4e9VzzXZsTE7MJjqqVAixsA3TqBaON58eOaDurBwo%2BwY%2BKztYZFPK%2B0YPtm2XRbtMkBIMvdrN9sJqKoPPgUovyAJ9N0Lv6dr0yHkT0cgKwu5RxgDwQVyKrYxGmgLq6F5059vZnjrpl%2BcaWBFoCjfAYF5iDdgfLLvxGaTHRvhr5Kc%2FIl0k0uYOH2OYSjqE%2F%2FkW0E%2BMrpAUYYsy6ZTOqfJi8%2FUWsnhV%2Fe%2Fsx2I7poQSlJgjbG%2Fbvw9YWr7K9KjSjA6rg2Q2ChzGwFk087V1LLaoTGNYqxUcCX3mGPlZRD%2FNBd9nIzCsy1ZYxoP5ltfgEk72Ko3c%2Fc4IHV9fQwqkMMqw8L8GOqUBQIRF1K7FkQq3xrcvhcEoajh3pBiF1bhfarlh9uexDpeRcE7M7PZ%2FeX4uqygPrautC6e6%2Bba2DnyPhwgblOVALcvDuOPfykn6oZ5MCydRJ8YxjkKnewl5gtzD5nIWz%2FFCOTvQv4HTQYcoR1nm5yPS1XjfD5Kt8nFMPNx70yiCJhXOhxaYdxZ6VArzz0TTCDjXezm5V01FACm%2Fh5V%2Ft2fFniIhtRa0&X-Amz-Signature=c222d8c8b8c4d4e909193b4954beca201587b7f301a2e461a17fd48d62819e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I76JN3X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHo8HUXxKa8zaWQWceMFNTgFP62bFjdtGHsIj%2B0MlugeAiEAqRQb1Jtd9QIv6wVU%2FQleslcu4YpT4i1DflRJwnZhCBcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTFk656oeo9MxL4ircA0tbYEwpqGMXN2jrl9Adnn0nd5o0UqqX8xG0%2FaVgNgDvYwk7ZBzkFhYOvk3doyoNLGjzyNVZRgvuZ3MSGjal4UL8qDM2lJwYbrUrbln06AgY0roXYJrgMFmXMCYjPcRB9ZqTYCSMvf4pju1pm7%2BmBx2gOKVBOKTbpplrIs9G7HTPwOkDy%2BFPjYuj9kSVJFtUjMWUUxGG5Zf8KGSklPvRXTHIp7v4aEaWPG1pLjgIpPp1zcdeYYCVdrDCoSFZZW6icBsr31E2wj6n5zmmtkyuF%2BkxZ3jjKuaoEylH1KEW9wR4e9VzzXZsTE7MJjqqVAixsA3TqBaON58eOaDurBwo%2BwY%2BKztYZFPK%2B0YPtm2XRbtMkBIMvdrN9sJqKoPPgUovyAJ9N0Lv6dr0yHkT0cgKwu5RxgDwQVyKrYxGmgLq6F5059vZnjrpl%2BcaWBFoCjfAYF5iDdgfLLvxGaTHRvhr5Kc%2FIl0k0uYOH2OYSjqE%2F%2FkW0E%2BMrpAUYYsy6ZTOqfJi8%2FUWsnhV%2Fe%2Fsx2I7poQSlJgjbG%2Fbvw9YWr7K9KjSjA6rg2Q2ChzGwFk087V1LLaoTGNYqxUcCX3mGPlZRD%2FNBd9nIzCsy1ZYxoP5ltfgEk72Ko3c%2Fc4IHV9fQwqkMMqw8L8GOqUBQIRF1K7FkQq3xrcvhcEoajh3pBiF1bhfarlh9uexDpeRcE7M7PZ%2FeX4uqygPrautC6e6%2Bba2DnyPhwgblOVALcvDuOPfykn6oZ5MCydRJ8YxjkKnewl5gtzD5nIWz%2FFCOTvQv4HTQYcoR1nm5yPS1XjfD5Kt8nFMPNx70yiCJhXOhxaYdxZ6VArzz0TTCDjXezm5V01FACm%2Fh5V%2Ft2fFniIhtRa0&X-Amz-Signature=4ceb2dded47795ae5ffae54f633c6bccc791ff4f63a55cc63b1efb10d102811d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
