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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOFKEYA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE38FIzSF0aZn%2F9fXHjZGdZs9C5LY4XcSLWZLgCJxhRAiAsDRHc8bO7E9guPb4mqTxEXg6TgmyxsHMuir38z0gXSSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMEObT2w%2FvdARdmuvWKtwD1zzbNqfID7D9LqRyRApclJbNRECU%2BTssmInyjPyXp%2Bog%2BCQQp8bbPQLHepP3WkbIQhXKr%2B9nnAkFD3kjrsyJ522A%2B4XSRgtMy4%2FmKJdiB0E80MRnSATYQLjW5wXHsxONXBiOPZ6OM1rNWIOjqj8iPTHJ9%2FHzwWGkoIb%2Fhdp89sA0XwboAldeh%2B1JmW1of%2Feo8U%2BneUMBJCIoPkMA%2BVd5mJ4cS6IoKmI6sLtwlQnCV8TMFvu5AGjFuVcYANsU0C7tCNNE9Th7bu6fWA2lGi01r00Osb6MXxaX9rFeadtL05xLyTotKnHvhf3YyMnT6%2B4AV02ZT4YiD5pvjzu9AqYto8gXxhldHHQEdwRtv5PA5kcxgCKVRZs8mcBZlzC3sdCYu3RBCD4mRnZcy6Nl1KANXsnmBQaqqC3tbjyY5%2Bim7QuGq1KwahRoQJUwr2xvaTJEeICBJ6GHsQysvmwkDOdi7RC658PcEhkrKY7lxjFLxCfHtE96JCKRD%2FdfpTUkvygQMOYbpEizIHQdXXr7Dj1eNau5qFDRzwQRMQJNdpAwo2Ty4BpctWutS4fo40vJK0c9ihqbAf38%2By4TRsfceqQIhumsK2%2Fbz2a63THe50PWcPSaz1530tgkxVqLLnYwscbvwAY6pgGYc1UoWzT3x6IvUZ338l5wYbmpJCplq8375PJ3fjKzALsMJ1ihuy66smNkDXrFiKTclan0VMk3qXTWfZsMuva1%2B8IFhY%2ByIOOSovQpUhdY86%2BApO%2FPLiQFuYttj4i8Eg%2BLvehq9ThdzwOLqIoFwO3wCoEuEKJUeQ%2FEQjctZZYzwlJaKNqlhs7IezPnHK4a2A5m3FeuNQgnpVVUEAMN%2Bvw0sdIYQRYV&X-Amz-Signature=c21ee109cc6d32389e0899d281cdfc447ba0efd8daaff8eed8004de186061653&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOFKEYA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE38FIzSF0aZn%2F9fXHjZGdZs9C5LY4XcSLWZLgCJxhRAiAsDRHc8bO7E9guPb4mqTxEXg6TgmyxsHMuir38z0gXSSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMEObT2w%2FvdARdmuvWKtwD1zzbNqfID7D9LqRyRApclJbNRECU%2BTssmInyjPyXp%2Bog%2BCQQp8bbPQLHepP3WkbIQhXKr%2B9nnAkFD3kjrsyJ522A%2B4XSRgtMy4%2FmKJdiB0E80MRnSATYQLjW5wXHsxONXBiOPZ6OM1rNWIOjqj8iPTHJ9%2FHzwWGkoIb%2Fhdp89sA0XwboAldeh%2B1JmW1of%2Feo8U%2BneUMBJCIoPkMA%2BVd5mJ4cS6IoKmI6sLtwlQnCV8TMFvu5AGjFuVcYANsU0C7tCNNE9Th7bu6fWA2lGi01r00Osb6MXxaX9rFeadtL05xLyTotKnHvhf3YyMnT6%2B4AV02ZT4YiD5pvjzu9AqYto8gXxhldHHQEdwRtv5PA5kcxgCKVRZs8mcBZlzC3sdCYu3RBCD4mRnZcy6Nl1KANXsnmBQaqqC3tbjyY5%2Bim7QuGq1KwahRoQJUwr2xvaTJEeICBJ6GHsQysvmwkDOdi7RC658PcEhkrKY7lxjFLxCfHtE96JCKRD%2FdfpTUkvygQMOYbpEizIHQdXXr7Dj1eNau5qFDRzwQRMQJNdpAwo2Ty4BpctWutS4fo40vJK0c9ihqbAf38%2By4TRsfceqQIhumsK2%2Fbz2a63THe50PWcPSaz1530tgkxVqLLnYwscbvwAY6pgGYc1UoWzT3x6IvUZ338l5wYbmpJCplq8375PJ3fjKzALsMJ1ihuy66smNkDXrFiKTclan0VMk3qXTWfZsMuva1%2B8IFhY%2ByIOOSovQpUhdY86%2BApO%2FPLiQFuYttj4i8Eg%2BLvehq9ThdzwOLqIoFwO3wCoEuEKJUeQ%2FEQjctZZYzwlJaKNqlhs7IezPnHK4a2A5m3FeuNQgnpVVUEAMN%2Bvw0sdIYQRYV&X-Amz-Signature=e9675ddf0c84c9ea9a31fc5fa51c469b56b400359669b649fb0a0de1df7651f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOFKEYA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE38FIzSF0aZn%2F9fXHjZGdZs9C5LY4XcSLWZLgCJxhRAiAsDRHc8bO7E9guPb4mqTxEXg6TgmyxsHMuir38z0gXSSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMEObT2w%2FvdARdmuvWKtwD1zzbNqfID7D9LqRyRApclJbNRECU%2BTssmInyjPyXp%2Bog%2BCQQp8bbPQLHepP3WkbIQhXKr%2B9nnAkFD3kjrsyJ522A%2B4XSRgtMy4%2FmKJdiB0E80MRnSATYQLjW5wXHsxONXBiOPZ6OM1rNWIOjqj8iPTHJ9%2FHzwWGkoIb%2Fhdp89sA0XwboAldeh%2B1JmW1of%2Feo8U%2BneUMBJCIoPkMA%2BVd5mJ4cS6IoKmI6sLtwlQnCV8TMFvu5AGjFuVcYANsU0C7tCNNE9Th7bu6fWA2lGi01r00Osb6MXxaX9rFeadtL05xLyTotKnHvhf3YyMnT6%2B4AV02ZT4YiD5pvjzu9AqYto8gXxhldHHQEdwRtv5PA5kcxgCKVRZs8mcBZlzC3sdCYu3RBCD4mRnZcy6Nl1KANXsnmBQaqqC3tbjyY5%2Bim7QuGq1KwahRoQJUwr2xvaTJEeICBJ6GHsQysvmwkDOdi7RC658PcEhkrKY7lxjFLxCfHtE96JCKRD%2FdfpTUkvygQMOYbpEizIHQdXXr7Dj1eNau5qFDRzwQRMQJNdpAwo2Ty4BpctWutS4fo40vJK0c9ihqbAf38%2By4TRsfceqQIhumsK2%2Fbz2a63THe50PWcPSaz1530tgkxVqLLnYwscbvwAY6pgGYc1UoWzT3x6IvUZ338l5wYbmpJCplq8375PJ3fjKzALsMJ1ihuy66smNkDXrFiKTclan0VMk3qXTWfZsMuva1%2B8IFhY%2ByIOOSovQpUhdY86%2BApO%2FPLiQFuYttj4i8Eg%2BLvehq9ThdzwOLqIoFwO3wCoEuEKJUeQ%2FEQjctZZYzwlJaKNqlhs7IezPnHK4a2A5m3FeuNQgnpVVUEAMN%2Bvw0sdIYQRYV&X-Amz-Signature=e451b83c81491c28a03076b1d6abd0c752334f376580ca8f667e622734f14fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
