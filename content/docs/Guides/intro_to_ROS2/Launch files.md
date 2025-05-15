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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETYE5UV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCSQY5qdLM0zo95ZjSZYZnl%2B%2FV4PN6asLm%2BPZC8fDvvfAIhAJn%2BQJOYb0uVA3TrR9jYrDdiuu4madgRyjTFRXTNCW3wKv8DCDQQABoMNjM3NDIzMTgzODA1Igz2kC0KlNrJUcaZcbEq3AN8mllkAL2UkI0UfR0PY0a2jIk9syITQulY3Od9HzG4ZpZMszxjiodDaBQVO8U5b5Xt1wFsYeKGA2PBgG67CKBaxf1itdcfRkAA7xPzyabi6Wz9mDKFaTb5yTOHm%2B2tDjy7w8uGem70nHl7kMb3mJJ3X3OqmrODhKOkI3vV85XU%2F52awmoyUGheAYYUSvCVfv%2Fi8cqUaUghJNkYOHwbbRHriKFZ1sAZU1AcpYLvCUqa%2BbXBPEzlc2yQ1kL26q0gGWvX7S1LdGzWcukZx4Xv4fix7lxHhhNh57m%2FM9e16mCTd9igkRHACOrJFsLfdynjTfTiQgqy0VGNgLQJ99DJRu1wd01xsGAyPaB5YAQQOxVgwlztr8UfG3qwNWaB4%2Brf6%2FJa%2F5%2BrAniDbwFcRdgc2Q%2F2QpyFwVkDPd7NFbiuU%2FCC9%2FHL3HL3BW6ldC3EGfJfySuIzJsyjkgmFhCpUmiz5X3baZ7Gl3Sz7AT5ONEJuHFWZrdpvECdfX7ZWpZ2jikI9ClsniujmSlC7of5iRzltjfxnMcQwQTP9UpbIvQD%2FWbn1BZORCiSz5Zfc7nCCqGxVOX10f7FeKHoCAb5XpatEeS2sSNxpC1WBgKd3Gpef20TocO%2BwQr35UzqDUOBFTC0%2B5jBBjqkAQKmmNJTsorypCWnQyA9ERaGmbS8qSpkwtrNMwOt3j0FaRTiCLXitD0K3SaUGbqzSccW8hIiQDgoK7CqHn8N8qshoTm%2Bq3xUgn18Ehz%2FgpGFtmXviZbYnyn%2BMCDVDfSSKgSAuH9C2uibRp7yDs0yoM30bCSXrLD7ek5UuuaVyXMkV6eXtxTqpLU4ZcGGTBesryZbMR7pICI2QEG5KWBTg1u4WPge&X-Amz-Signature=c63e0cb2faa5e71f066055b7efa8ab798954c681f66462d39ac5c110a9cdbcf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETYE5UV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCSQY5qdLM0zo95ZjSZYZnl%2B%2FV4PN6asLm%2BPZC8fDvvfAIhAJn%2BQJOYb0uVA3TrR9jYrDdiuu4madgRyjTFRXTNCW3wKv8DCDQQABoMNjM3NDIzMTgzODA1Igz2kC0KlNrJUcaZcbEq3AN8mllkAL2UkI0UfR0PY0a2jIk9syITQulY3Od9HzG4ZpZMszxjiodDaBQVO8U5b5Xt1wFsYeKGA2PBgG67CKBaxf1itdcfRkAA7xPzyabi6Wz9mDKFaTb5yTOHm%2B2tDjy7w8uGem70nHl7kMb3mJJ3X3OqmrODhKOkI3vV85XU%2F52awmoyUGheAYYUSvCVfv%2Fi8cqUaUghJNkYOHwbbRHriKFZ1sAZU1AcpYLvCUqa%2BbXBPEzlc2yQ1kL26q0gGWvX7S1LdGzWcukZx4Xv4fix7lxHhhNh57m%2FM9e16mCTd9igkRHACOrJFsLfdynjTfTiQgqy0VGNgLQJ99DJRu1wd01xsGAyPaB5YAQQOxVgwlztr8UfG3qwNWaB4%2Brf6%2FJa%2F5%2BrAniDbwFcRdgc2Q%2F2QpyFwVkDPd7NFbiuU%2FCC9%2FHL3HL3BW6ldC3EGfJfySuIzJsyjkgmFhCpUmiz5X3baZ7Gl3Sz7AT5ONEJuHFWZrdpvECdfX7ZWpZ2jikI9ClsniujmSlC7of5iRzltjfxnMcQwQTP9UpbIvQD%2FWbn1BZORCiSz5Zfc7nCCqGxVOX10f7FeKHoCAb5XpatEeS2sSNxpC1WBgKd3Gpef20TocO%2BwQr35UzqDUOBFTC0%2B5jBBjqkAQKmmNJTsorypCWnQyA9ERaGmbS8qSpkwtrNMwOt3j0FaRTiCLXitD0K3SaUGbqzSccW8hIiQDgoK7CqHn8N8qshoTm%2Bq3xUgn18Ehz%2FgpGFtmXviZbYnyn%2BMCDVDfSSKgSAuH9C2uibRp7yDs0yoM30bCSXrLD7ek5UuuaVyXMkV6eXtxTqpLU4ZcGGTBesryZbMR7pICI2QEG5KWBTg1u4WPge&X-Amz-Signature=9c10b550e6da27b80263f52d76753c34157f5924531aa7e7375d3073f5152f06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETYE5UV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCSQY5qdLM0zo95ZjSZYZnl%2B%2FV4PN6asLm%2BPZC8fDvvfAIhAJn%2BQJOYb0uVA3TrR9jYrDdiuu4madgRyjTFRXTNCW3wKv8DCDQQABoMNjM3NDIzMTgzODA1Igz2kC0KlNrJUcaZcbEq3AN8mllkAL2UkI0UfR0PY0a2jIk9syITQulY3Od9HzG4ZpZMszxjiodDaBQVO8U5b5Xt1wFsYeKGA2PBgG67CKBaxf1itdcfRkAA7xPzyabi6Wz9mDKFaTb5yTOHm%2B2tDjy7w8uGem70nHl7kMb3mJJ3X3OqmrODhKOkI3vV85XU%2F52awmoyUGheAYYUSvCVfv%2Fi8cqUaUghJNkYOHwbbRHriKFZ1sAZU1AcpYLvCUqa%2BbXBPEzlc2yQ1kL26q0gGWvX7S1LdGzWcukZx4Xv4fix7lxHhhNh57m%2FM9e16mCTd9igkRHACOrJFsLfdynjTfTiQgqy0VGNgLQJ99DJRu1wd01xsGAyPaB5YAQQOxVgwlztr8UfG3qwNWaB4%2Brf6%2FJa%2F5%2BrAniDbwFcRdgc2Q%2F2QpyFwVkDPd7NFbiuU%2FCC9%2FHL3HL3BW6ldC3EGfJfySuIzJsyjkgmFhCpUmiz5X3baZ7Gl3Sz7AT5ONEJuHFWZrdpvECdfX7ZWpZ2jikI9ClsniujmSlC7of5iRzltjfxnMcQwQTP9UpbIvQD%2FWbn1BZORCiSz5Zfc7nCCqGxVOX10f7FeKHoCAb5XpatEeS2sSNxpC1WBgKd3Gpef20TocO%2BwQr35UzqDUOBFTC0%2B5jBBjqkAQKmmNJTsorypCWnQyA9ERaGmbS8qSpkwtrNMwOt3j0FaRTiCLXitD0K3SaUGbqzSccW8hIiQDgoK7CqHn8N8qshoTm%2Bq3xUgn18Ehz%2FgpGFtmXviZbYnyn%2BMCDVDfSSKgSAuH9C2uibRp7yDs0yoM30bCSXrLD7ek5UuuaVyXMkV6eXtxTqpLU4ZcGGTBesryZbMR7pICI2QEG5KWBTg1u4WPge&X-Amz-Signature=7a270b28a3c67f740930583e7a83c7b9dd7bf88e45b95378a52b294d997877c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
