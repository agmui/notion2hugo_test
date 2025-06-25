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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473WBDTO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCih4jWKAmYUdvuuXck6Xu%2FkADVQ6tBUUl2Jx5G1Cwb7gIhAN1L7VFKQw3l649cJ79iR%2FUYVh3RgjExVr8HRJuZDgAYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGlE1AX%2Bjd8gcYRxQq3AOWG5%2FcbonwcgCIhETxiwvHsPP0T4uYczAe8Z8wPAIBr%2BWXpZnErxWfnvQ47mQQQMWDMHmU3YXCe52HCyrwStnO6dIr2T%2F2zWQ3LhI1IyQ8Yxv4OVwbTBlW7j0%2Bpl%2B0Brrr37dygaHd35%2BvDusFlaP7NqYJNt9lN2lMH32TfCSFLdw14EETXaWsHxaB3WYSwCFWJl6hHa39Pum5tVjQngjk1uoSn0xBJznbGEGcxF9WUUSsFGJXOBqclII5pT6VAXVPtPaW4gFuBJRXFKx5sVavvp7oT5Imh2nzuN6ZnkKpJ9zdPZrMJbMIxm%2BiG3Yexhn0FzgnSINg0qJRRm9ixImf76hf%2BXvuKIS3qo2uOy1Q8DBC%2BVgiBYTXw4KgKXxw7jrNK6wu0qzGDzcp0fgB1Lf91tNWir%2Bb8jkq1%2Fi87Y%2FWzopKdl7kgkHguSKJ8p%2BXvRJ4Axq2Uu6DH%2B5yVPp2y8JHrj44%2BvJg1laMUh45Gr%2B%2By0g2sw%2Bjl4NwYI18aJ5DvDbKc9jq0TPmV5UycIx4YM0Iqr4hn5aEWw3nXrWnkMQjum8DSEh8kgx24WLDmltXyyklMsvDwRpQK%2FdgbJGF41IGQTl1K98lUyB38pXyQKWecPHxc%2B4uNk7v04cVXTDhjPHCBjqkAUmsRCb7IDckEptKWCA%2Bs%2FCIBLhpBLbvBv55tdB%2FZcFaWILO1cEmUi4EHg9Eu9oOd6hgjarne8GLETNINQ3e4xDU4mp0j5aczxJKKCzUKBYChauJzBN2YGYhYh0vHFHUI8hzLrdiQeM6eL%2BI5FjIoMTlc6ScZMOys4LYg17VGEzruJj36NDZOofmdZjY8rUVyA4SC%2BGGA0JLkXQ%2FuuEuoZoJs1Yc&X-Amz-Signature=d671630c72207967d1f1fdec5eef5aab5a567502325c99db0988a50862de564f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473WBDTO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCih4jWKAmYUdvuuXck6Xu%2FkADVQ6tBUUl2Jx5G1Cwb7gIhAN1L7VFKQw3l649cJ79iR%2FUYVh3RgjExVr8HRJuZDgAYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGlE1AX%2Bjd8gcYRxQq3AOWG5%2FcbonwcgCIhETxiwvHsPP0T4uYczAe8Z8wPAIBr%2BWXpZnErxWfnvQ47mQQQMWDMHmU3YXCe52HCyrwStnO6dIr2T%2F2zWQ3LhI1IyQ8Yxv4OVwbTBlW7j0%2Bpl%2B0Brrr37dygaHd35%2BvDusFlaP7NqYJNt9lN2lMH32TfCSFLdw14EETXaWsHxaB3WYSwCFWJl6hHa39Pum5tVjQngjk1uoSn0xBJznbGEGcxF9WUUSsFGJXOBqclII5pT6VAXVPtPaW4gFuBJRXFKx5sVavvp7oT5Imh2nzuN6ZnkKpJ9zdPZrMJbMIxm%2BiG3Yexhn0FzgnSINg0qJRRm9ixImf76hf%2BXvuKIS3qo2uOy1Q8DBC%2BVgiBYTXw4KgKXxw7jrNK6wu0qzGDzcp0fgB1Lf91tNWir%2Bb8jkq1%2Fi87Y%2FWzopKdl7kgkHguSKJ8p%2BXvRJ4Axq2Uu6DH%2B5yVPp2y8JHrj44%2BvJg1laMUh45Gr%2B%2By0g2sw%2Bjl4NwYI18aJ5DvDbKc9jq0TPmV5UycIx4YM0Iqr4hn5aEWw3nXrWnkMQjum8DSEh8kgx24WLDmltXyyklMsvDwRpQK%2FdgbJGF41IGQTl1K98lUyB38pXyQKWecPHxc%2B4uNk7v04cVXTDhjPHCBjqkAUmsRCb7IDckEptKWCA%2Bs%2FCIBLhpBLbvBv55tdB%2FZcFaWILO1cEmUi4EHg9Eu9oOd6hgjarne8GLETNINQ3e4xDU4mp0j5aczxJKKCzUKBYChauJzBN2YGYhYh0vHFHUI8hzLrdiQeM6eL%2BI5FjIoMTlc6ScZMOys4LYg17VGEzruJj36NDZOofmdZjY8rUVyA4SC%2BGGA0JLkXQ%2FuuEuoZoJs1Yc&X-Amz-Signature=1a099c6c8590762497ddce8614c2a7f2a3d4bcc4cf50ac11970e24d3fa6540f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473WBDTO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCih4jWKAmYUdvuuXck6Xu%2FkADVQ6tBUUl2Jx5G1Cwb7gIhAN1L7VFKQw3l649cJ79iR%2FUYVh3RgjExVr8HRJuZDgAYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGlE1AX%2Bjd8gcYRxQq3AOWG5%2FcbonwcgCIhETxiwvHsPP0T4uYczAe8Z8wPAIBr%2BWXpZnErxWfnvQ47mQQQMWDMHmU3YXCe52HCyrwStnO6dIr2T%2F2zWQ3LhI1IyQ8Yxv4OVwbTBlW7j0%2Bpl%2B0Brrr37dygaHd35%2BvDusFlaP7NqYJNt9lN2lMH32TfCSFLdw14EETXaWsHxaB3WYSwCFWJl6hHa39Pum5tVjQngjk1uoSn0xBJznbGEGcxF9WUUSsFGJXOBqclII5pT6VAXVPtPaW4gFuBJRXFKx5sVavvp7oT5Imh2nzuN6ZnkKpJ9zdPZrMJbMIxm%2BiG3Yexhn0FzgnSINg0qJRRm9ixImf76hf%2BXvuKIS3qo2uOy1Q8DBC%2BVgiBYTXw4KgKXxw7jrNK6wu0qzGDzcp0fgB1Lf91tNWir%2Bb8jkq1%2Fi87Y%2FWzopKdl7kgkHguSKJ8p%2BXvRJ4Axq2Uu6DH%2B5yVPp2y8JHrj44%2BvJg1laMUh45Gr%2B%2By0g2sw%2Bjl4NwYI18aJ5DvDbKc9jq0TPmV5UycIx4YM0Iqr4hn5aEWw3nXrWnkMQjum8DSEh8kgx24WLDmltXyyklMsvDwRpQK%2FdgbJGF41IGQTl1K98lUyB38pXyQKWecPHxc%2B4uNk7v04cVXTDhjPHCBjqkAUmsRCb7IDckEptKWCA%2Bs%2FCIBLhpBLbvBv55tdB%2FZcFaWILO1cEmUi4EHg9Eu9oOd6hgjarne8GLETNINQ3e4xDU4mp0j5aczxJKKCzUKBYChauJzBN2YGYhYh0vHFHUI8hzLrdiQeM6eL%2BI5FjIoMTlc6ScZMOys4LYg17VGEzruJj36NDZOofmdZjY8rUVyA4SC%2BGGA0JLkXQ%2FuuEuoZoJs1Yc&X-Amz-Signature=e504fb4d73d4f0ef2883df48a1cf9f36de87fb2f0e0cb0377cc3edaba8960f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
