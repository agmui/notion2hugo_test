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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EC7R5AY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIET4EydWLWVctz%2FJpj5lFOZNNh2lETeetEysAKHjDT7JAiAYYupT5oAe5EIoJm81h9BqYte5EsZLwL8V5mXZ2QQl4Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMvbkJUJXwJHNVkkxCKtwD%2B7IPG%2FT6e8HC6NaBRLFKDfkTxDy0WDUQ3APIv223MPbl%2BZNTjM8CbixkIEb6mdfi2Xm%2F6W5Ti62mfiDfq1Zk9pRKlffwLShChJMmE3d9xyao%2FmlWC2ATu9BTZ%2Fsh901g1AZgP7BYE%2Bq3RPvnxeHczrgrh2wa4%2FHeGUgiM3zemrWEN%2FPWvgO3IwRXILlLDKpGyRDbZ5%2BhsSAEf6L5KRBEkAkoX9ViULcIPZdf%2FnBkBYpfr3eMnq9DJLbTjyFHPkAn0fH9zks16Yg5a1X37NjVhfKKUGxrYj6LgHYS11HNiYcAFuR5SU8LqR34X9wgsZtC7DoIvJQaaFM9tjYTakHcK%2FoVJGMO8n%2BWFwcXJ1BWKVG9lyMsK8JWvVclldJSHG2C%2BgYrs4tiJ%2Fsc7vuTtf%2B0KpG8%2FhiLLQmPbTIJvfh%2F%2F6Avzbx%2FKgyV1%2BHz%2B%2FgT%2FJuKXtynAP%2BuhY0viM2RrLSD8O22em7b9w4rzKXXPnbyeWVznmE822MNtLYImFUxPaRDqOMvRBiOFC%2FtchQapFI%2Fqz%2FCXaKGZ%2B%2FwM7D0vbb8ZofdAJ74narENkEvMv8jDy07H6lqOh6kUPCb%2F1yYDXIgSX8j12eoxUoJEikVo9RdTMtNZFKjdyoI1PKcAS0wy7XmvgY6pgFmHttTTf5c82jiW%2BleTndovqPmQb2hlVtbOnoaZnixpya7sutQbE2WCBtwYCWxWGm6NymP3J5PcLZHWCQiZjrJLN0ik9UNwwtDChdZRKUYDkEm4xQnuPXWIViFVYmDuKt8mIDmvja5oxUi%2FLXs92IK3vCB%2FbSnBZHTZqOTcF9PpHnorqh%2B2BNLFNrEH6GC65LM4kRkfzW1%2FlVm%2FLra5e5AdO2ddXbZ&X-Amz-Signature=cb9b1a054fb4736da9a758e57d8d426faa6588bca454200551a8b30e3f70b7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EC7R5AY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIET4EydWLWVctz%2FJpj5lFOZNNh2lETeetEysAKHjDT7JAiAYYupT5oAe5EIoJm81h9BqYte5EsZLwL8V5mXZ2QQl4Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMvbkJUJXwJHNVkkxCKtwD%2B7IPG%2FT6e8HC6NaBRLFKDfkTxDy0WDUQ3APIv223MPbl%2BZNTjM8CbixkIEb6mdfi2Xm%2F6W5Ti62mfiDfq1Zk9pRKlffwLShChJMmE3d9xyao%2FmlWC2ATu9BTZ%2Fsh901g1AZgP7BYE%2Bq3RPvnxeHczrgrh2wa4%2FHeGUgiM3zemrWEN%2FPWvgO3IwRXILlLDKpGyRDbZ5%2BhsSAEf6L5KRBEkAkoX9ViULcIPZdf%2FnBkBYpfr3eMnq9DJLbTjyFHPkAn0fH9zks16Yg5a1X37NjVhfKKUGxrYj6LgHYS11HNiYcAFuR5SU8LqR34X9wgsZtC7DoIvJQaaFM9tjYTakHcK%2FoVJGMO8n%2BWFwcXJ1BWKVG9lyMsK8JWvVclldJSHG2C%2BgYrs4tiJ%2Fsc7vuTtf%2B0KpG8%2FhiLLQmPbTIJvfh%2F%2F6Avzbx%2FKgyV1%2BHz%2B%2FgT%2FJuKXtynAP%2BuhY0viM2RrLSD8O22em7b9w4rzKXXPnbyeWVznmE822MNtLYImFUxPaRDqOMvRBiOFC%2FtchQapFI%2Fqz%2FCXaKGZ%2B%2FwM7D0vbb8ZofdAJ74narENkEvMv8jDy07H6lqOh6kUPCb%2F1yYDXIgSX8j12eoxUoJEikVo9RdTMtNZFKjdyoI1PKcAS0wy7XmvgY6pgFmHttTTf5c82jiW%2BleTndovqPmQb2hlVtbOnoaZnixpya7sutQbE2WCBtwYCWxWGm6NymP3J5PcLZHWCQiZjrJLN0ik9UNwwtDChdZRKUYDkEm4xQnuPXWIViFVYmDuKt8mIDmvja5oxUi%2FLXs92IK3vCB%2FbSnBZHTZqOTcF9PpHnorqh%2B2BNLFNrEH6GC65LM4kRkfzW1%2FlVm%2FLra5e5AdO2ddXbZ&X-Amz-Signature=34dbad193b1d7dcd412b6a7ae6008a5f3e3834515d983168b831746e2c05c297&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EC7R5AY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIET4EydWLWVctz%2FJpj5lFOZNNh2lETeetEysAKHjDT7JAiAYYupT5oAe5EIoJm81h9BqYte5EsZLwL8V5mXZ2QQl4Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMvbkJUJXwJHNVkkxCKtwD%2B7IPG%2FT6e8HC6NaBRLFKDfkTxDy0WDUQ3APIv223MPbl%2BZNTjM8CbixkIEb6mdfi2Xm%2F6W5Ti62mfiDfq1Zk9pRKlffwLShChJMmE3d9xyao%2FmlWC2ATu9BTZ%2Fsh901g1AZgP7BYE%2Bq3RPvnxeHczrgrh2wa4%2FHeGUgiM3zemrWEN%2FPWvgO3IwRXILlLDKpGyRDbZ5%2BhsSAEf6L5KRBEkAkoX9ViULcIPZdf%2FnBkBYpfr3eMnq9DJLbTjyFHPkAn0fH9zks16Yg5a1X37NjVhfKKUGxrYj6LgHYS11HNiYcAFuR5SU8LqR34X9wgsZtC7DoIvJQaaFM9tjYTakHcK%2FoVJGMO8n%2BWFwcXJ1BWKVG9lyMsK8JWvVclldJSHG2C%2BgYrs4tiJ%2Fsc7vuTtf%2B0KpG8%2FhiLLQmPbTIJvfh%2F%2F6Avzbx%2FKgyV1%2BHz%2B%2FgT%2FJuKXtynAP%2BuhY0viM2RrLSD8O22em7b9w4rzKXXPnbyeWVznmE822MNtLYImFUxPaRDqOMvRBiOFC%2FtchQapFI%2Fqz%2FCXaKGZ%2B%2FwM7D0vbb8ZofdAJ74narENkEvMv8jDy07H6lqOh6kUPCb%2F1yYDXIgSX8j12eoxUoJEikVo9RdTMtNZFKjdyoI1PKcAS0wy7XmvgY6pgFmHttTTf5c82jiW%2BleTndovqPmQb2hlVtbOnoaZnixpya7sutQbE2WCBtwYCWxWGm6NymP3J5PcLZHWCQiZjrJLN0ik9UNwwtDChdZRKUYDkEm4xQnuPXWIViFVYmDuKt8mIDmvja5oxUi%2FLXs92IK3vCB%2FbSnBZHTZqOTcF9PpHnorqh%2B2BNLFNrEH6GC65LM4kRkfzW1%2FlVm%2FLra5e5AdO2ddXbZ&X-Amz-Signature=1b59236067822f496479a1b96067bb943e11a78627a7ac3b8f11b91056d8cf71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
