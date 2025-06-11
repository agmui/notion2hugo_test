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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665INJBOI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWnf%2BrKTmPp6b9Dg2xWrpWQXsb8hY3uaQ4JUKkOlfYwIgIJJVIHL4iB3INgCIWovFoZbk0Vhml%2Bd%2BICmtoZHgPhAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQqQy1x8pkkoN8TfSrcA4g0wZ9%2BHSp6d9r9TygK42zWftpei6f3YuWQoxyActqPbV25ULcq3j7t4Matsfwv7qEysLoCA%2BT6Ij7xG3g%2F6KtHqiFjOmSdE6gb441M7cpXLLB%2FM0twh%2BIiYQ0fFLteIaEnVOwMPiFGOEXec82w1CPWjU%2Fc8LkUxoiQz2aTsb98MjSJbfa9pIlFKI1xnnOnPVfvubNiYCCjLpWUobYo2BK7EhIhakz4s%2BimV0h1B%2FvERsluw6PYg%2B%2BaxQ815IJBNPYpdPJtlBqftlzz8mhveIaCLOb80lO3h5%2FweyjzgtHs25%2FbRhAqGgm6eXec08f77aujX26nC0P10pcxBfoVKuJV1EXIgLJ8vHoo85Aad9mQvtTpxRVYw7miFPbxX%2Bkb1PVTJU5%2FzdgdNkemrcTu3xUhXK7ovJY2iG0fS4Oi0Bf1l1I%2FcEhNFAxY5PwWGutpy9FG8uMZrXEeoe55Hem%2BS4I7fvmbtIWpcluJbhEiRi4RieNHk9nT1pyMhCOWf2RjQHCzsCCZ%2Bm9Kk3TPF7yWF0C0kD3CmAY94JClW4N%2Bk7mZL22sVKNKxJnnp1AaHcCE460%2ByZtqBY5JN%2FfN%2FNzZJSW9BRP3nypRVpcbVvFzMeW2fkcBG%2BEp4uRt1BALMKbmpcIGOqUBVncZjv9Z5zlbLUuaGkZwkt0H6qASuZX%2FbwKat9WTq14OmopcMcEB8KgjcK5Z10uZsxbsm2ZRM3KnQkn2NSlrHHQOesjX4QWoSixGe%2Fnd8M29poy5UAVD16wPimN%2FyDgLgIg22JMYQinj35UCoGM8joMTnfFUXurvyAW5RXKYOxVFtrkfbqnMIM6vI7tgQcTZZikedNtkvUTUCBN%2F7ZLTeskvVQGi&X-Amz-Signature=c6d17983a20e7e968aa8f130e3db0c7ed9d8c8dcf9de02e771685071127da799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665INJBOI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWnf%2BrKTmPp6b9Dg2xWrpWQXsb8hY3uaQ4JUKkOlfYwIgIJJVIHL4iB3INgCIWovFoZbk0Vhml%2Bd%2BICmtoZHgPhAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQqQy1x8pkkoN8TfSrcA4g0wZ9%2BHSp6d9r9TygK42zWftpei6f3YuWQoxyActqPbV25ULcq3j7t4Matsfwv7qEysLoCA%2BT6Ij7xG3g%2F6KtHqiFjOmSdE6gb441M7cpXLLB%2FM0twh%2BIiYQ0fFLteIaEnVOwMPiFGOEXec82w1CPWjU%2Fc8LkUxoiQz2aTsb98MjSJbfa9pIlFKI1xnnOnPVfvubNiYCCjLpWUobYo2BK7EhIhakz4s%2BimV0h1B%2FvERsluw6PYg%2B%2BaxQ815IJBNPYpdPJtlBqftlzz8mhveIaCLOb80lO3h5%2FweyjzgtHs25%2FbRhAqGgm6eXec08f77aujX26nC0P10pcxBfoVKuJV1EXIgLJ8vHoo85Aad9mQvtTpxRVYw7miFPbxX%2Bkb1PVTJU5%2FzdgdNkemrcTu3xUhXK7ovJY2iG0fS4Oi0Bf1l1I%2FcEhNFAxY5PwWGutpy9FG8uMZrXEeoe55Hem%2BS4I7fvmbtIWpcluJbhEiRi4RieNHk9nT1pyMhCOWf2RjQHCzsCCZ%2Bm9Kk3TPF7yWF0C0kD3CmAY94JClW4N%2Bk7mZL22sVKNKxJnnp1AaHcCE460%2ByZtqBY5JN%2FfN%2FNzZJSW9BRP3nypRVpcbVvFzMeW2fkcBG%2BEp4uRt1BALMKbmpcIGOqUBVncZjv9Z5zlbLUuaGkZwkt0H6qASuZX%2FbwKat9WTq14OmopcMcEB8KgjcK5Z10uZsxbsm2ZRM3KnQkn2NSlrHHQOesjX4QWoSixGe%2Fnd8M29poy5UAVD16wPimN%2FyDgLgIg22JMYQinj35UCoGM8joMTnfFUXurvyAW5RXKYOxVFtrkfbqnMIM6vI7tgQcTZZikedNtkvUTUCBN%2F7ZLTeskvVQGi&X-Amz-Signature=1e398a5d9c288eac4dc4283cbdf9821a45991384a793163c0fe5edf669d08b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665INJBOI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWnf%2BrKTmPp6b9Dg2xWrpWQXsb8hY3uaQ4JUKkOlfYwIgIJJVIHL4iB3INgCIWovFoZbk0Vhml%2Bd%2BICmtoZHgPhAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQqQy1x8pkkoN8TfSrcA4g0wZ9%2BHSp6d9r9TygK42zWftpei6f3YuWQoxyActqPbV25ULcq3j7t4Matsfwv7qEysLoCA%2BT6Ij7xG3g%2F6KtHqiFjOmSdE6gb441M7cpXLLB%2FM0twh%2BIiYQ0fFLteIaEnVOwMPiFGOEXec82w1CPWjU%2Fc8LkUxoiQz2aTsb98MjSJbfa9pIlFKI1xnnOnPVfvubNiYCCjLpWUobYo2BK7EhIhakz4s%2BimV0h1B%2FvERsluw6PYg%2B%2BaxQ815IJBNPYpdPJtlBqftlzz8mhveIaCLOb80lO3h5%2FweyjzgtHs25%2FbRhAqGgm6eXec08f77aujX26nC0P10pcxBfoVKuJV1EXIgLJ8vHoo85Aad9mQvtTpxRVYw7miFPbxX%2Bkb1PVTJU5%2FzdgdNkemrcTu3xUhXK7ovJY2iG0fS4Oi0Bf1l1I%2FcEhNFAxY5PwWGutpy9FG8uMZrXEeoe55Hem%2BS4I7fvmbtIWpcluJbhEiRi4RieNHk9nT1pyMhCOWf2RjQHCzsCCZ%2Bm9Kk3TPF7yWF0C0kD3CmAY94JClW4N%2Bk7mZL22sVKNKxJnnp1AaHcCE460%2ByZtqBY5JN%2FfN%2FNzZJSW9BRP3nypRVpcbVvFzMeW2fkcBG%2BEp4uRt1BALMKbmpcIGOqUBVncZjv9Z5zlbLUuaGkZwkt0H6qASuZX%2FbwKat9WTq14OmopcMcEB8KgjcK5Z10uZsxbsm2ZRM3KnQkn2NSlrHHQOesjX4QWoSixGe%2Fnd8M29poy5UAVD16wPimN%2FyDgLgIg22JMYQinj35UCoGM8joMTnfFUXurvyAW5RXKYOxVFtrkfbqnMIM6vI7tgQcTZZikedNtkvUTUCBN%2F7ZLTeskvVQGi&X-Amz-Signature=b7857d8785e6f05b87c36ed199071e2a8a6e6782e27a83a37d85575005642772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
