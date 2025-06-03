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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7S5UX6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIET7NgIumo%2FsUn1R9T%2BPQT8wfVs2Emcx%2Fk9vlnyxdECqAiEAsvrJUEOSxXBjZ9j%2FBhatZAZilrF7%2Fm1UfTTQFi2v0i0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQdilq9brmPa08OhSrcA%2Fpc0JawDn2HTlB%2FeOJaBiWC%2FvehQt4joETPnQjsUKHpqIXHSv333Ol8%2B0p4zcfHdk5FAFhyHfc9jCqiXqN%2FsrjXPrANsQW4SQ1l1ZtLdNayX%2Fdiwly%2BZRkCKiODjBJv8qlauDz8Xq%2BX4Glqfvc9iA%2BIxHYe1h%2B5UcNEp%2Blxb%2Bm%2F3sGltsISkPKLz7F1WdRj28X7zPKX53AxaY%2Fc7%2Bpufpn%2BSwYlOLlFTFDnJLXwtXqS2vaJwaIeJa%2FNX0jTily%2FP%2FWd8oGllXnh1EJaTo9O1xmLAEnNR%2BhgRvMfIZrtTg%2F0hjspm7%2FJbMIZ3cXrnZhnaW3CKCbWE4JQIjkopbfzUdzod5D99EEQhPq%2FmJ1BwzBatUN0s%2BApKPw89ju%2Fifx%2BYIW1mYMjKRSpen3NLtsHX6ScUrhvp4lWiM0nIp5a9dwIIrCSVI%2Bs48dv6MlPCbPEQu5FxEvEC7ZN4aAJVZ81gRihiwXDb%2FbfA9Fe93ak36dp54Mb269fK6mcP1Ur9uYzgH1nwgm26CHYniQjpz4pTpJI0xuKvCkxfFeIJ8pXyUG4qCoMbmdTOfHjbxEpctV%2BC8a8AjnsLnzeMLvK2OcP21hWOOSz0XWd2bPqUdHKyDhgRCxidPflNfPlW2rsMKnF%2BcEGOqUBviHq7lBY06h%2FyCWa4uXazS%2FzQq%2F5pgwgZ5yicHwBhqR64nXVETbnaioVqfFC9w4flqaZOLQLtbbRlJUk7gWL5fsWP%2FjA6trvVPxrvWwY6orzfWlt99vscfojUHHnymj3wkyFUsp%2BZfr4nSNVEzHP44ThGJnk6ygQxjbEtY389Xi1O%2Btl%2F9kBgoDa70dV1u1eZuDYuX4SP%2FeghtFtmjib6r5sEixC&X-Amz-Signature=72682eb610e46bf8638fa2bad35f108cc9a7c14f5a153f02a6cdb38f1a1da9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7S5UX6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIET7NgIumo%2FsUn1R9T%2BPQT8wfVs2Emcx%2Fk9vlnyxdECqAiEAsvrJUEOSxXBjZ9j%2FBhatZAZilrF7%2Fm1UfTTQFi2v0i0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQdilq9brmPa08OhSrcA%2Fpc0JawDn2HTlB%2FeOJaBiWC%2FvehQt4joETPnQjsUKHpqIXHSv333Ol8%2B0p4zcfHdk5FAFhyHfc9jCqiXqN%2FsrjXPrANsQW4SQ1l1ZtLdNayX%2Fdiwly%2BZRkCKiODjBJv8qlauDz8Xq%2BX4Glqfvc9iA%2BIxHYe1h%2B5UcNEp%2Blxb%2Bm%2F3sGltsISkPKLz7F1WdRj28X7zPKX53AxaY%2Fc7%2Bpufpn%2BSwYlOLlFTFDnJLXwtXqS2vaJwaIeJa%2FNX0jTily%2FP%2FWd8oGllXnh1EJaTo9O1xmLAEnNR%2BhgRvMfIZrtTg%2F0hjspm7%2FJbMIZ3cXrnZhnaW3CKCbWE4JQIjkopbfzUdzod5D99EEQhPq%2FmJ1BwzBatUN0s%2BApKPw89ju%2Fifx%2BYIW1mYMjKRSpen3NLtsHX6ScUrhvp4lWiM0nIp5a9dwIIrCSVI%2Bs48dv6MlPCbPEQu5FxEvEC7ZN4aAJVZ81gRihiwXDb%2FbfA9Fe93ak36dp54Mb269fK6mcP1Ur9uYzgH1nwgm26CHYniQjpz4pTpJI0xuKvCkxfFeIJ8pXyUG4qCoMbmdTOfHjbxEpctV%2BC8a8AjnsLnzeMLvK2OcP21hWOOSz0XWd2bPqUdHKyDhgRCxidPflNfPlW2rsMKnF%2BcEGOqUBviHq7lBY06h%2FyCWa4uXazS%2FzQq%2F5pgwgZ5yicHwBhqR64nXVETbnaioVqfFC9w4flqaZOLQLtbbRlJUk7gWL5fsWP%2FjA6trvVPxrvWwY6orzfWlt99vscfojUHHnymj3wkyFUsp%2BZfr4nSNVEzHP44ThGJnk6ygQxjbEtY389Xi1O%2Btl%2F9kBgoDa70dV1u1eZuDYuX4SP%2FeghtFtmjib6r5sEixC&X-Amz-Signature=db815249cc19e7e57894dc4ae8db120339fd361c31c183161ac321177c01ef25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7S5UX6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIET7NgIumo%2FsUn1R9T%2BPQT8wfVs2Emcx%2Fk9vlnyxdECqAiEAsvrJUEOSxXBjZ9j%2FBhatZAZilrF7%2Fm1UfTTQFi2v0i0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQdilq9brmPa08OhSrcA%2Fpc0JawDn2HTlB%2FeOJaBiWC%2FvehQt4joETPnQjsUKHpqIXHSv333Ol8%2B0p4zcfHdk5FAFhyHfc9jCqiXqN%2FsrjXPrANsQW4SQ1l1ZtLdNayX%2Fdiwly%2BZRkCKiODjBJv8qlauDz8Xq%2BX4Glqfvc9iA%2BIxHYe1h%2B5UcNEp%2Blxb%2Bm%2F3sGltsISkPKLz7F1WdRj28X7zPKX53AxaY%2Fc7%2Bpufpn%2BSwYlOLlFTFDnJLXwtXqS2vaJwaIeJa%2FNX0jTily%2FP%2FWd8oGllXnh1EJaTo9O1xmLAEnNR%2BhgRvMfIZrtTg%2F0hjspm7%2FJbMIZ3cXrnZhnaW3CKCbWE4JQIjkopbfzUdzod5D99EEQhPq%2FmJ1BwzBatUN0s%2BApKPw89ju%2Fifx%2BYIW1mYMjKRSpen3NLtsHX6ScUrhvp4lWiM0nIp5a9dwIIrCSVI%2Bs48dv6MlPCbPEQu5FxEvEC7ZN4aAJVZ81gRihiwXDb%2FbfA9Fe93ak36dp54Mb269fK6mcP1Ur9uYzgH1nwgm26CHYniQjpz4pTpJI0xuKvCkxfFeIJ8pXyUG4qCoMbmdTOfHjbxEpctV%2BC8a8AjnsLnzeMLvK2OcP21hWOOSz0XWd2bPqUdHKyDhgRCxidPflNfPlW2rsMKnF%2BcEGOqUBviHq7lBY06h%2FyCWa4uXazS%2FzQq%2F5pgwgZ5yicHwBhqR64nXVETbnaioVqfFC9w4flqaZOLQLtbbRlJUk7gWL5fsWP%2FjA6trvVPxrvWwY6orzfWlt99vscfojUHHnymj3wkyFUsp%2BZfr4nSNVEzHP44ThGJnk6ygQxjbEtY389Xi1O%2Btl%2F9kBgoDa70dV1u1eZuDYuX4SP%2FeghtFtmjib6r5sEixC&X-Amz-Signature=401123eaf0dcf5ced32f31c53417b0ab2b36e161a1ce40ce3b82febee9e81f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
