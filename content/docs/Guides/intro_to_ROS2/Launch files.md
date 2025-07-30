---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67P4QMP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BIQajKOuXvPd5tCZNjKyNzX%2FOzf8CqbNesIGkxcr3AiEAwxEK5JNuZqU86eRPZ3LC00lGQ0HaJD4kBp3E4LfnnVUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC9sZhDN0uhi9fIcSrcA4w6xECbq6DxUExjxW%2F3DLOuZ5nlQ0QxGrIYz%2F%2B8AOYlxfPeno9Hedv6yFaudRk4vYjqBiHZuPwY7hH6VGPn5lC940jKCi9EY7TqXEJEf2uOZ7dCEE2n2avMusFz6JCWoP30OwODprXpRbXBDakzMQut%2Fn%2BCGJysyPb8EnmaZ81X2JBYKK977y%2BGhIKhzN3mhYLeRywRx07VwUCEMZxv18gxE%2BCUIFle2fTbquOMWuQ1hAXS64IGbs8ebORDDVOeXbiX7axHigHhxGWKc1Cux8hYpbIcgzq%2FMNZ2NE1Q%2B9iE6WJLQ8eekOj2mZcVAxNJNJCGhZoF4KWKts85v6JcfW1mLstUIi0q5qDEXFYUPB8r9kUXrsIYJiJF8vmoH%2F%2Flcw261atiyuVjDQn8Gs%2F2FsWnMupkpuM2ye8%2BpZ3gmi%2FE4kG6nIQmV108txXjUsBWo8fGQ%2FuDLSd7KgggzETi3KyfS62UwheJQWa%2Byeq0S78RE3QSwVfGEPWCDLip90dN5cGVD9YNjZLD1m4jTTuD62QAcCxtjN3F1phPAROWye4bixvlQhzVuMW4MAB0SU3DjdTiiSD7aSle8paWa07PxrgVrHv7Qnovd3jPFF8s19HIYSRehTbbxJbaL440MIW7qcQGOqUB59mDFL%2Fibhqwjev7lGyVTn%2FbPErzPcP8lSc5SA7sMDMyE0D7XDkVAgtItC0yq1ZmN07l%2Fa1JBRhsAtSGo6DfXF0nj5fbY8ypNPn%2BxhMP88D1fM3Qelx9%2FH%2F%2Fdnj5XEz5QXxMzUD14rDtPhXjtBK1hDSan%2F1c0xsactqHz0S4tqdj2z29mRQgIfHu2jxBZUavQCXklF%2FH7I5JkPaBUmic%2FcEZ7%2B6c&X-Amz-Signature=e60428840752d21d9c5fd171d5da076d6720feb095c4cd93dfa0ee2de97dc08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67P4QMP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BIQajKOuXvPd5tCZNjKyNzX%2FOzf8CqbNesIGkxcr3AiEAwxEK5JNuZqU86eRPZ3LC00lGQ0HaJD4kBp3E4LfnnVUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC9sZhDN0uhi9fIcSrcA4w6xECbq6DxUExjxW%2F3DLOuZ5nlQ0QxGrIYz%2F%2B8AOYlxfPeno9Hedv6yFaudRk4vYjqBiHZuPwY7hH6VGPn5lC940jKCi9EY7TqXEJEf2uOZ7dCEE2n2avMusFz6JCWoP30OwODprXpRbXBDakzMQut%2Fn%2BCGJysyPb8EnmaZ81X2JBYKK977y%2BGhIKhzN3mhYLeRywRx07VwUCEMZxv18gxE%2BCUIFle2fTbquOMWuQ1hAXS64IGbs8ebORDDVOeXbiX7axHigHhxGWKc1Cux8hYpbIcgzq%2FMNZ2NE1Q%2B9iE6WJLQ8eekOj2mZcVAxNJNJCGhZoF4KWKts85v6JcfW1mLstUIi0q5qDEXFYUPB8r9kUXrsIYJiJF8vmoH%2F%2Flcw261atiyuVjDQn8Gs%2F2FsWnMupkpuM2ye8%2BpZ3gmi%2FE4kG6nIQmV108txXjUsBWo8fGQ%2FuDLSd7KgggzETi3KyfS62UwheJQWa%2Byeq0S78RE3QSwVfGEPWCDLip90dN5cGVD9YNjZLD1m4jTTuD62QAcCxtjN3F1phPAROWye4bixvlQhzVuMW4MAB0SU3DjdTiiSD7aSle8paWa07PxrgVrHv7Qnovd3jPFF8s19HIYSRehTbbxJbaL440MIW7qcQGOqUB59mDFL%2Fibhqwjev7lGyVTn%2FbPErzPcP8lSc5SA7sMDMyE0D7XDkVAgtItC0yq1ZmN07l%2Fa1JBRhsAtSGo6DfXF0nj5fbY8ypNPn%2BxhMP88D1fM3Qelx9%2FH%2F%2Fdnj5XEz5QXxMzUD14rDtPhXjtBK1hDSan%2F1c0xsactqHz0S4tqdj2z29mRQgIfHu2jxBZUavQCXklF%2FH7I5JkPaBUmic%2FcEZ7%2B6c&X-Amz-Signature=ab81ebff769644b3fa4580dae5738dccc4f8b551a59a02651b6f031dfae7a60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67P4QMP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BIQajKOuXvPd5tCZNjKyNzX%2FOzf8CqbNesIGkxcr3AiEAwxEK5JNuZqU86eRPZ3LC00lGQ0HaJD4kBp3E4LfnnVUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC9sZhDN0uhi9fIcSrcA4w6xECbq6DxUExjxW%2F3DLOuZ5nlQ0QxGrIYz%2F%2B8AOYlxfPeno9Hedv6yFaudRk4vYjqBiHZuPwY7hH6VGPn5lC940jKCi9EY7TqXEJEf2uOZ7dCEE2n2avMusFz6JCWoP30OwODprXpRbXBDakzMQut%2Fn%2BCGJysyPb8EnmaZ81X2JBYKK977y%2BGhIKhzN3mhYLeRywRx07VwUCEMZxv18gxE%2BCUIFle2fTbquOMWuQ1hAXS64IGbs8ebORDDVOeXbiX7axHigHhxGWKc1Cux8hYpbIcgzq%2FMNZ2NE1Q%2B9iE6WJLQ8eekOj2mZcVAxNJNJCGhZoF4KWKts85v6JcfW1mLstUIi0q5qDEXFYUPB8r9kUXrsIYJiJF8vmoH%2F%2Flcw261atiyuVjDQn8Gs%2F2FsWnMupkpuM2ye8%2BpZ3gmi%2FE4kG6nIQmV108txXjUsBWo8fGQ%2FuDLSd7KgggzETi3KyfS62UwheJQWa%2Byeq0S78RE3QSwVfGEPWCDLip90dN5cGVD9YNjZLD1m4jTTuD62QAcCxtjN3F1phPAROWye4bixvlQhzVuMW4MAB0SU3DjdTiiSD7aSle8paWa07PxrgVrHv7Qnovd3jPFF8s19HIYSRehTbbxJbaL440MIW7qcQGOqUB59mDFL%2Fibhqwjev7lGyVTn%2FbPErzPcP8lSc5SA7sMDMyE0D7XDkVAgtItC0yq1ZmN07l%2Fa1JBRhsAtSGo6DfXF0nj5fbY8ypNPn%2BxhMP88D1fM3Qelx9%2FH%2F%2Fdnj5XEz5QXxMzUD14rDtPhXjtBK1hDSan%2F1c0xsactqHz0S4tqdj2z29mRQgIfHu2jxBZUavQCXklF%2FH7I5JkPaBUmic%2FcEZ7%2B6c&X-Amz-Signature=85090bb4662bba2621211023c62c762082909b68dea2e000eeb986f54cccd49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
