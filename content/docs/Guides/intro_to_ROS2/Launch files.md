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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCOWV4G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDKRsECn7RGO%2FMubRMW45gXefFhMdvh%2FCK6VeMWUBclMgIhAJj1NkwGFwulf7V6lvIBvDcCIaGpOy7CzXZGtYBRLBwxKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3q%2Fo8ROfA3G0d3wMq3AN36eWlChUSPWeNK2OxUhpFZhZoOqzofJhj58lFG6SrSqLF3EuPr%2BCwWMeMDc9SL3f3xIEmZV4ZVJg3Upje7AEe60k732TNbz8bp2l7sCG2Tc1brLenCSEUlAt0Tkb5XT8defAOaanGtBUABKVGXHsXcxDlfYn%2BH4JvWQAzDTC6IS7wEMy3Q4lc4YNejTpuyYfvDI%2FuU%2F7K9zdxfW%2Bmsw%2FfxBZonSlqCZZq5Zsm3qqXwp2NFNkO%2FbX4jFg9g3%2F%2BDphvA9rFv%2FRXUzx7Uj23QrkFF0K9hwSDt9zDervUYiAiaoVM3w42xPd2qho8mBccOF3LYDnFYi0lp2ESFMT7wuljVJ8ZHtReC7m8jomyJcqHB55Otsdc92q6IpAcN9F5aHFT%2FichZ0oexQafiW12HJarmqtba3jSPZi6Bx0b1g6GJYpgg6U3Q0N8Di%2B38CVaD%2FWxyj1IC11q%2Fgzb1r33KbshvhP2bMAk4Yt%2FzS9STdrU0X%2FlM13mJub2%2Bprzms1CLwCuDz2kk9W95BsQzx%2BY5upG4Q0BsL4q6CyDreuDs7I902xAlNGxJEDC8THNTKah%2BOFlMM7PwVDH%2FfVgatYN1hy9j1EVqFy2QzWCtQffxbfKoXAv%2B8ffCzWm0c4INjCS2ozBBjqkAYJfdkHgpt5r8GH6lMrR4sCd%2Fh3wngu%2F22d1AIGW2akAflzFr5D%2BGcjHOWw9YSLC%2BKhyCEPwWZOMJ9%2BwTxuD8mcjMNSMJv%2BvLrZDVY%2FXhf4SEYwNG%2BALKXIPZlaz14vHxOjTIYwV4l%2B08aKKRA3PYFkrYfVdMKo0U4wGLCF9TtQDcWhNyhKE8iHgMXZazcZl3AnDMMo1mRTXjxRDy1kgvkoqCsax&X-Amz-Signature=1c70925a1087aa69509a2b2356e32ed0b0e7e79d853e6c536bbd1b4a0034ff5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCOWV4G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDKRsECn7RGO%2FMubRMW45gXefFhMdvh%2FCK6VeMWUBclMgIhAJj1NkwGFwulf7V6lvIBvDcCIaGpOy7CzXZGtYBRLBwxKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3q%2Fo8ROfA3G0d3wMq3AN36eWlChUSPWeNK2OxUhpFZhZoOqzofJhj58lFG6SrSqLF3EuPr%2BCwWMeMDc9SL3f3xIEmZV4ZVJg3Upje7AEe60k732TNbz8bp2l7sCG2Tc1brLenCSEUlAt0Tkb5XT8defAOaanGtBUABKVGXHsXcxDlfYn%2BH4JvWQAzDTC6IS7wEMy3Q4lc4YNejTpuyYfvDI%2FuU%2F7K9zdxfW%2Bmsw%2FfxBZonSlqCZZq5Zsm3qqXwp2NFNkO%2FbX4jFg9g3%2F%2BDphvA9rFv%2FRXUzx7Uj23QrkFF0K9hwSDt9zDervUYiAiaoVM3w42xPd2qho8mBccOF3LYDnFYi0lp2ESFMT7wuljVJ8ZHtReC7m8jomyJcqHB55Otsdc92q6IpAcN9F5aHFT%2FichZ0oexQafiW12HJarmqtba3jSPZi6Bx0b1g6GJYpgg6U3Q0N8Di%2B38CVaD%2FWxyj1IC11q%2Fgzb1r33KbshvhP2bMAk4Yt%2FzS9STdrU0X%2FlM13mJub2%2Bprzms1CLwCuDz2kk9W95BsQzx%2BY5upG4Q0BsL4q6CyDreuDs7I902xAlNGxJEDC8THNTKah%2BOFlMM7PwVDH%2FfVgatYN1hy9j1EVqFy2QzWCtQffxbfKoXAv%2B8ffCzWm0c4INjCS2ozBBjqkAYJfdkHgpt5r8GH6lMrR4sCd%2Fh3wngu%2F22d1AIGW2akAflzFr5D%2BGcjHOWw9YSLC%2BKhyCEPwWZOMJ9%2BwTxuD8mcjMNSMJv%2BvLrZDVY%2FXhf4SEYwNG%2BALKXIPZlaz14vHxOjTIYwV4l%2B08aKKRA3PYFkrYfVdMKo0U4wGLCF9TtQDcWhNyhKE8iHgMXZazcZl3AnDMMo1mRTXjxRDy1kgvkoqCsax&X-Amz-Signature=5e1c01ee39c51d1f6d5539406b5e05ee7691ca3d2cf124c421fa9284b5dffe13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCOWV4G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDKRsECn7RGO%2FMubRMW45gXefFhMdvh%2FCK6VeMWUBclMgIhAJj1NkwGFwulf7V6lvIBvDcCIaGpOy7CzXZGtYBRLBwxKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3q%2Fo8ROfA3G0d3wMq3AN36eWlChUSPWeNK2OxUhpFZhZoOqzofJhj58lFG6SrSqLF3EuPr%2BCwWMeMDc9SL3f3xIEmZV4ZVJg3Upje7AEe60k732TNbz8bp2l7sCG2Tc1brLenCSEUlAt0Tkb5XT8defAOaanGtBUABKVGXHsXcxDlfYn%2BH4JvWQAzDTC6IS7wEMy3Q4lc4YNejTpuyYfvDI%2FuU%2F7K9zdxfW%2Bmsw%2FfxBZonSlqCZZq5Zsm3qqXwp2NFNkO%2FbX4jFg9g3%2F%2BDphvA9rFv%2FRXUzx7Uj23QrkFF0K9hwSDt9zDervUYiAiaoVM3w42xPd2qho8mBccOF3LYDnFYi0lp2ESFMT7wuljVJ8ZHtReC7m8jomyJcqHB55Otsdc92q6IpAcN9F5aHFT%2FichZ0oexQafiW12HJarmqtba3jSPZi6Bx0b1g6GJYpgg6U3Q0N8Di%2B38CVaD%2FWxyj1IC11q%2Fgzb1r33KbshvhP2bMAk4Yt%2FzS9STdrU0X%2FlM13mJub2%2Bprzms1CLwCuDz2kk9W95BsQzx%2BY5upG4Q0BsL4q6CyDreuDs7I902xAlNGxJEDC8THNTKah%2BOFlMM7PwVDH%2FfVgatYN1hy9j1EVqFy2QzWCtQffxbfKoXAv%2B8ffCzWm0c4INjCS2ozBBjqkAYJfdkHgpt5r8GH6lMrR4sCd%2Fh3wngu%2F22d1AIGW2akAflzFr5D%2BGcjHOWw9YSLC%2BKhyCEPwWZOMJ9%2BwTxuD8mcjMNSMJv%2BvLrZDVY%2FXhf4SEYwNG%2BALKXIPZlaz14vHxOjTIYwV4l%2B08aKKRA3PYFkrYfVdMKo0U4wGLCF9TtQDcWhNyhKE8iHgMXZazcZl3AnDMMo1mRTXjxRDy1kgvkoqCsax&X-Amz-Signature=2c71168403deab20b33b00017c7d2f42f5877f245ed98a8d7b6b9f1a6f73e938&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
