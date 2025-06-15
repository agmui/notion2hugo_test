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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLYO4BI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDm8Jb5QDG%2FEBSGT%2BcG6undV2e9rXgVooAh0brmGR%2BBDwIhALgDAg9N%2BZNVFbtMe90FMUxw93jVL4lXZbsftdSpgKKkKv8DCEIQABoMNjM3NDIzMTgzODA1IgyeJmlqWeOlJZXiGvkq3AMffZxKdduuHo%2FP1x5LdWg%2FFIKISHCtNSAJFFu18mnBUDZksSxhsT5EaaCtQuJQL66f4T%2BH%2FIVJiaSeDimQfUobXD%2FVSuVSRXabM6ZVzuVSESFsSVK6va4mbKYAhGVrTUhrQU8yDNFmBxYcWTzbweRYb4EackJUWuG7qErW9778qld9aoifLTXz6jJHAWyUr%2Bl0ruu8G6vjeGVL5NU4eG8ioa0haV5bKsMo90rJ5SmF5SrzK09aqXaCe5PShsc%2BqjfXSLtB%2BA9bXs4xvQ8h0cyKOUCcaOSp3CO5gRzHTQ7wLs3S8JfJhHFnuCbPeMR8DfEzfAipUSZKSjs0JxMvbPDxmh5cXw2SGMzafWGKQ0N3papcIDQNJwJ%2FSEHFXPau4d8yAUgKJVjcAthYbioRCqVJA5%2BlkhpX0pVlT2J3yGtD7pAPSq%2Br4oi4OAoJ4otoOvVnJnAhvwGJ77gXYRCj1%2FPxGVG00PfQtMsKUBYVBredGMF1X9x0K%2B4cNqYXLuGCtDJ3AgEGV3tlSzn3nmozgZx9cK8XfQIRgJ%2BVZegmiFLsqFm%2FMn1xBn%2FNjrVYH8FFo6j8NaTy1NmzjoZyjnNJ5safRAgo4MzxJqnF43lhiQ5H55CUSCfkFxy9bOBQwzCmkLrCBjqkAUHTTEqDttMAs%2F6sBN0GSs3jn%2Fn%2Fg1Y%2FCveTFQ3CFROjnru%2BWN05uobcKuhdP966Ck6aASuZM86d8%2FgPNyVcZ2MBNzIecaaQzWHNnJ7jXLC8zitElqHWniYaKxKSaISXJWxY94fYbufMLR6eZFCLmLMgGay2r8s1f5o14rQC9p74jEWdJrsCf5m98CyL1h87sS3b0mbCv6EpcmvPGxou3lKQQ94w&X-Amz-Signature=9c757cd9cdf92ab752b066c620fc836f70962a8a9e6586549589e228c2fea83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLYO4BI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDm8Jb5QDG%2FEBSGT%2BcG6undV2e9rXgVooAh0brmGR%2BBDwIhALgDAg9N%2BZNVFbtMe90FMUxw93jVL4lXZbsftdSpgKKkKv8DCEIQABoMNjM3NDIzMTgzODA1IgyeJmlqWeOlJZXiGvkq3AMffZxKdduuHo%2FP1x5LdWg%2FFIKISHCtNSAJFFu18mnBUDZksSxhsT5EaaCtQuJQL66f4T%2BH%2FIVJiaSeDimQfUobXD%2FVSuVSRXabM6ZVzuVSESFsSVK6va4mbKYAhGVrTUhrQU8yDNFmBxYcWTzbweRYb4EackJUWuG7qErW9778qld9aoifLTXz6jJHAWyUr%2Bl0ruu8G6vjeGVL5NU4eG8ioa0haV5bKsMo90rJ5SmF5SrzK09aqXaCe5PShsc%2BqjfXSLtB%2BA9bXs4xvQ8h0cyKOUCcaOSp3CO5gRzHTQ7wLs3S8JfJhHFnuCbPeMR8DfEzfAipUSZKSjs0JxMvbPDxmh5cXw2SGMzafWGKQ0N3papcIDQNJwJ%2FSEHFXPau4d8yAUgKJVjcAthYbioRCqVJA5%2BlkhpX0pVlT2J3yGtD7pAPSq%2Br4oi4OAoJ4otoOvVnJnAhvwGJ77gXYRCj1%2FPxGVG00PfQtMsKUBYVBredGMF1X9x0K%2B4cNqYXLuGCtDJ3AgEGV3tlSzn3nmozgZx9cK8XfQIRgJ%2BVZegmiFLsqFm%2FMn1xBn%2FNjrVYH8FFo6j8NaTy1NmzjoZyjnNJ5safRAgo4MzxJqnF43lhiQ5H55CUSCfkFxy9bOBQwzCmkLrCBjqkAUHTTEqDttMAs%2F6sBN0GSs3jn%2Fn%2Fg1Y%2FCveTFQ3CFROjnru%2BWN05uobcKuhdP966Ck6aASuZM86d8%2FgPNyVcZ2MBNzIecaaQzWHNnJ7jXLC8zitElqHWniYaKxKSaISXJWxY94fYbufMLR6eZFCLmLMgGay2r8s1f5o14rQC9p74jEWdJrsCf5m98CyL1h87sS3b0mbCv6EpcmvPGxou3lKQQ94w&X-Amz-Signature=6e16c93a364da031174a36f526a45a9e0e6c350933d13de3ef2dff4df3b4bb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLYO4BI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDm8Jb5QDG%2FEBSGT%2BcG6undV2e9rXgVooAh0brmGR%2BBDwIhALgDAg9N%2BZNVFbtMe90FMUxw93jVL4lXZbsftdSpgKKkKv8DCEIQABoMNjM3NDIzMTgzODA1IgyeJmlqWeOlJZXiGvkq3AMffZxKdduuHo%2FP1x5LdWg%2FFIKISHCtNSAJFFu18mnBUDZksSxhsT5EaaCtQuJQL66f4T%2BH%2FIVJiaSeDimQfUobXD%2FVSuVSRXabM6ZVzuVSESFsSVK6va4mbKYAhGVrTUhrQU8yDNFmBxYcWTzbweRYb4EackJUWuG7qErW9778qld9aoifLTXz6jJHAWyUr%2Bl0ruu8G6vjeGVL5NU4eG8ioa0haV5bKsMo90rJ5SmF5SrzK09aqXaCe5PShsc%2BqjfXSLtB%2BA9bXs4xvQ8h0cyKOUCcaOSp3CO5gRzHTQ7wLs3S8JfJhHFnuCbPeMR8DfEzfAipUSZKSjs0JxMvbPDxmh5cXw2SGMzafWGKQ0N3papcIDQNJwJ%2FSEHFXPau4d8yAUgKJVjcAthYbioRCqVJA5%2BlkhpX0pVlT2J3yGtD7pAPSq%2Br4oi4OAoJ4otoOvVnJnAhvwGJ77gXYRCj1%2FPxGVG00PfQtMsKUBYVBredGMF1X9x0K%2B4cNqYXLuGCtDJ3AgEGV3tlSzn3nmozgZx9cK8XfQIRgJ%2BVZegmiFLsqFm%2FMn1xBn%2FNjrVYH8FFo6j8NaTy1NmzjoZyjnNJ5safRAgo4MzxJqnF43lhiQ5H55CUSCfkFxy9bOBQwzCmkLrCBjqkAUHTTEqDttMAs%2F6sBN0GSs3jn%2Fn%2Fg1Y%2FCveTFQ3CFROjnru%2BWN05uobcKuhdP966Ck6aASuZM86d8%2FgPNyVcZ2MBNzIecaaQzWHNnJ7jXLC8zitElqHWniYaKxKSaISXJWxY94fYbufMLR6eZFCLmLMgGay2r8s1f5o14rQC9p74jEWdJrsCf5m98CyL1h87sS3b0mbCv6EpcmvPGxou3lKQQ94w&X-Amz-Signature=d0704da7827387cf1dbaa54ff07e497704fe1df0d3dec2b144595b711da30407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
