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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRM6OJB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHSyhzuvtJcNqmjTjulvzQb3nP81L9iW5nmKiYhxI6UlAiAQ6FUfLUhaKzyMmGYLspXZYUsPPEPIoZ%2B6D%2BehQGrf9CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhz3Ar2rq9LXvOa2KtwDK8O1kBgc22yUQABbVzS6tCnJnpoqLp%2B%2FeyE8BIhgMymZ7Jn7l97B%2BuTeNIe%2FVTur9ynQNV5RmMdMXCwyWWSxbvx15KZQhiP0DH3CjhHOgE7JZbvLmzRu1U5HsW%2FX6rWaa3uNpcyyUZ%2F0Qwds4egwYFh5GKxKh0eMyfgGPR5Y2xN%2FGPT8JPgL5XMJR3ylM3BLRaTIxCEeahDpiP6tLo5YfwxirYUYZ5kHpO16VJCP0PUnbpKi1WdBIPbJvw%2FgCdSf6IFH42LnTaJlZKrCxWkhUCZlMmpb3q3teT7LMyVj%2BK20RTgAPpk05jUefeUd3Hfc0RapHXpnqLw2WsXH7yOo1sSlMbrieEQigKFodTs1Ms9iFXpfJ%2BgrcHf8DidjBImYKPauHRGP9xLhaz5osE3JNzqSP4PkVjiOg4d4j1qKFKAoYazZbWnfGafy%2FFrjBERcWOcw4N4jbX4h%2FAusvCTFeqrbcDKmQnCQLb4O8Kr%2BQUOFy3DN6ROOCPLb%2FiO4x2TzrZmKGwPS9FS69pwaR55TZlx98s01mhqYdMDEumXHdZdCnU0sxv2Mj9f1MZq4tt0Rju8tc6dyXDQmUz%2FXdS29ckPIGZW%2B%2FPnPLuEmI2EpWT5IJS%2FegJLCx85SVOowxeznvwY6pgGF0VYGVKiH1lHCqh8Dx4I4ylfmOUEuNJmdJXh7%2BzA%2F2YwjZXolt%2FSUyIx331kv8sfStSzBQozBHPnoh41nL%2Fjff1r6z4ApVV040o83b7gqHXVyLbmiCCSQ1sHlzrRkk5SNovGKc5bUNH4Uz4GVGqo6zJL%2FDxDGzgm5VMQi22uCndf0X4YZ9SjZVhtHMPiRRj2Th%2F%2Fxy4JxxHYu6c1Bm95hsrGuWh3L&X-Amz-Signature=44715b00443b19f5fe18c2567f9f0d114521546a0813cf2fb9175d38a1ce8762&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRM6OJB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHSyhzuvtJcNqmjTjulvzQb3nP81L9iW5nmKiYhxI6UlAiAQ6FUfLUhaKzyMmGYLspXZYUsPPEPIoZ%2B6D%2BehQGrf9CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhz3Ar2rq9LXvOa2KtwDK8O1kBgc22yUQABbVzS6tCnJnpoqLp%2B%2FeyE8BIhgMymZ7Jn7l97B%2BuTeNIe%2FVTur9ynQNV5RmMdMXCwyWWSxbvx15KZQhiP0DH3CjhHOgE7JZbvLmzRu1U5HsW%2FX6rWaa3uNpcyyUZ%2F0Qwds4egwYFh5GKxKh0eMyfgGPR5Y2xN%2FGPT8JPgL5XMJR3ylM3BLRaTIxCEeahDpiP6tLo5YfwxirYUYZ5kHpO16VJCP0PUnbpKi1WdBIPbJvw%2FgCdSf6IFH42LnTaJlZKrCxWkhUCZlMmpb3q3teT7LMyVj%2BK20RTgAPpk05jUefeUd3Hfc0RapHXpnqLw2WsXH7yOo1sSlMbrieEQigKFodTs1Ms9iFXpfJ%2BgrcHf8DidjBImYKPauHRGP9xLhaz5osE3JNzqSP4PkVjiOg4d4j1qKFKAoYazZbWnfGafy%2FFrjBERcWOcw4N4jbX4h%2FAusvCTFeqrbcDKmQnCQLb4O8Kr%2BQUOFy3DN6ROOCPLb%2FiO4x2TzrZmKGwPS9FS69pwaR55TZlx98s01mhqYdMDEumXHdZdCnU0sxv2Mj9f1MZq4tt0Rju8tc6dyXDQmUz%2FXdS29ckPIGZW%2B%2FPnPLuEmI2EpWT5IJS%2FegJLCx85SVOowxeznvwY6pgGF0VYGVKiH1lHCqh8Dx4I4ylfmOUEuNJmdJXh7%2BzA%2F2YwjZXolt%2FSUyIx331kv8sfStSzBQozBHPnoh41nL%2Fjff1r6z4ApVV040o83b7gqHXVyLbmiCCSQ1sHlzrRkk5SNovGKc5bUNH4Uz4GVGqo6zJL%2FDxDGzgm5VMQi22uCndf0X4YZ9SjZVhtHMPiRRj2Th%2F%2Fxy4JxxHYu6c1Bm95hsrGuWh3L&X-Amz-Signature=48cf561688e7de9fa443aa6b196a0b23b725479706889aa113480e0d5ff31e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRM6OJB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHSyhzuvtJcNqmjTjulvzQb3nP81L9iW5nmKiYhxI6UlAiAQ6FUfLUhaKzyMmGYLspXZYUsPPEPIoZ%2B6D%2BehQGrf9CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhz3Ar2rq9LXvOa2KtwDK8O1kBgc22yUQABbVzS6tCnJnpoqLp%2B%2FeyE8BIhgMymZ7Jn7l97B%2BuTeNIe%2FVTur9ynQNV5RmMdMXCwyWWSxbvx15KZQhiP0DH3CjhHOgE7JZbvLmzRu1U5HsW%2FX6rWaa3uNpcyyUZ%2F0Qwds4egwYFh5GKxKh0eMyfgGPR5Y2xN%2FGPT8JPgL5XMJR3ylM3BLRaTIxCEeahDpiP6tLo5YfwxirYUYZ5kHpO16VJCP0PUnbpKi1WdBIPbJvw%2FgCdSf6IFH42LnTaJlZKrCxWkhUCZlMmpb3q3teT7LMyVj%2BK20RTgAPpk05jUefeUd3Hfc0RapHXpnqLw2WsXH7yOo1sSlMbrieEQigKFodTs1Ms9iFXpfJ%2BgrcHf8DidjBImYKPauHRGP9xLhaz5osE3JNzqSP4PkVjiOg4d4j1qKFKAoYazZbWnfGafy%2FFrjBERcWOcw4N4jbX4h%2FAusvCTFeqrbcDKmQnCQLb4O8Kr%2BQUOFy3DN6ROOCPLb%2FiO4x2TzrZmKGwPS9FS69pwaR55TZlx98s01mhqYdMDEumXHdZdCnU0sxv2Mj9f1MZq4tt0Rju8tc6dyXDQmUz%2FXdS29ckPIGZW%2B%2FPnPLuEmI2EpWT5IJS%2FegJLCx85SVOowxeznvwY6pgGF0VYGVKiH1lHCqh8Dx4I4ylfmOUEuNJmdJXh7%2BzA%2F2YwjZXolt%2FSUyIx331kv8sfStSzBQozBHPnoh41nL%2Fjff1r6z4ApVV040o83b7gqHXVyLbmiCCSQ1sHlzrRkk5SNovGKc5bUNH4Uz4GVGqo6zJL%2FDxDGzgm5VMQi22uCndf0X4YZ9SjZVhtHMPiRRj2Th%2F%2Fxy4JxxHYu6c1Bm95hsrGuWh3L&X-Amz-Signature=768ec736f7af9ec99d70cd656b1a55f7f50e7b6295b607ecb7acab21d354c1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
