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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDPDPAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaLztohyZJudtipUqJZbdP5ZjspFUSBhp%2FJ8VG7qpIAAIgXCGWR1VsfAKkiN1CQzbB3ufbOAvjHCcEZILoc5EY72oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDeWpyURxklmX%2FPA0CrcA8%2B52Hgd3YCG4VR%2BzwODj6tm17d0gdALp6VIXNGDwghDGZN5O9LIy%2BQsiKBSV%2FWqONX61sVz7hSu2YZkbs7T6NCCvVP110UxF%2BIUpKgZHVkk6GmLxtKTboF%2B0pc34Tl8XhrvVzWFs%2BYI7rQ%2B6uSu1cIidQJCq%2FoLKb1O8KYD42SFwfTJ2BLLcoNwfcQdj6sM1ol4OPjL8rnSriNoVv7ipc586%2FzZYx9X%2FFJBETE2Qi0er7b3avAvZE4Q%2FDTrZNYbqPkY2ZwT%2FHAhqJxnOuJiJMPeM143xgqmJrGl5UC6VSzv%2F8LmQi1WfFmU4flLBNlWXEP2Ue1waTkInVISlD3sbKZvRdBfstOEgtlXkwpVsDNpmeSaPNWiUSV6WvfiUFHtKyqklC1vgKPd4jc18%2BqirAtEy4FCI07pqut78AwSaCinPII5gX8qV8%2BuxIDJJJEJdEhkApUs%2FQgTkGs9Vz0qmkQmIusPlm4abG%2BNYq4Io3DvYISHOwwgF3IEkcWvIa6ugWHDgt4uaD5uD9kk4IUN%2Bf9rluN0dRT7ms18KnCwa%2Bu0dTlxbL5Q%2FK6M80uVXpti4tOi8oPZ0bOPqhTNN95eoM2KG5ZOG%2BestPbRRW%2B7jehdO0Dw5Dn2U3tNJJJ6MJ31pcEGOqUBsYL3ow4VcH3OcyrZc6TuL8txIQtYhCiY5cR0c6pHwE1rMjPirwefXAllKXkgQ5RfBgC6fO0oLTv64WqoKGsCw9ZXca%2FaCvU1EqXpqCa%2FyKRh3q0s4kx21LQDrMcjxzdRZ0gTOzzA%2BcRh%2B%2FhEM4Sd0ZmXC1T%2BwF%2FI%2BZprtQ9mwTj9aDK9G7KlAi2jjYmqpOv4r2AGW2rZ1QdpHvq%2FuICNhDdfh%2BOg&X-Amz-Signature=e5c1d1e938f06ebee54a09d20bd4987450aadc76cd30fe99e780b7b79d6c40f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDPDPAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaLztohyZJudtipUqJZbdP5ZjspFUSBhp%2FJ8VG7qpIAAIgXCGWR1VsfAKkiN1CQzbB3ufbOAvjHCcEZILoc5EY72oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDeWpyURxklmX%2FPA0CrcA8%2B52Hgd3YCG4VR%2BzwODj6tm17d0gdALp6VIXNGDwghDGZN5O9LIy%2BQsiKBSV%2FWqONX61sVz7hSu2YZkbs7T6NCCvVP110UxF%2BIUpKgZHVkk6GmLxtKTboF%2B0pc34Tl8XhrvVzWFs%2BYI7rQ%2B6uSu1cIidQJCq%2FoLKb1O8KYD42SFwfTJ2BLLcoNwfcQdj6sM1ol4OPjL8rnSriNoVv7ipc586%2FzZYx9X%2FFJBETE2Qi0er7b3avAvZE4Q%2FDTrZNYbqPkY2ZwT%2FHAhqJxnOuJiJMPeM143xgqmJrGl5UC6VSzv%2F8LmQi1WfFmU4flLBNlWXEP2Ue1waTkInVISlD3sbKZvRdBfstOEgtlXkwpVsDNpmeSaPNWiUSV6WvfiUFHtKyqklC1vgKPd4jc18%2BqirAtEy4FCI07pqut78AwSaCinPII5gX8qV8%2BuxIDJJJEJdEhkApUs%2FQgTkGs9Vz0qmkQmIusPlm4abG%2BNYq4Io3DvYISHOwwgF3IEkcWvIa6ugWHDgt4uaD5uD9kk4IUN%2Bf9rluN0dRT7ms18KnCwa%2Bu0dTlxbL5Q%2FK6M80uVXpti4tOi8oPZ0bOPqhTNN95eoM2KG5ZOG%2BestPbRRW%2B7jehdO0Dw5Dn2U3tNJJJ6MJ31pcEGOqUBsYL3ow4VcH3OcyrZc6TuL8txIQtYhCiY5cR0c6pHwE1rMjPirwefXAllKXkgQ5RfBgC6fO0oLTv64WqoKGsCw9ZXca%2FaCvU1EqXpqCa%2FyKRh3q0s4kx21LQDrMcjxzdRZ0gTOzzA%2BcRh%2B%2FhEM4Sd0ZmXC1T%2BwF%2FI%2BZprtQ9mwTj9aDK9G7KlAi2jjYmqpOv4r2AGW2rZ1QdpHvq%2FuICNhDdfh%2BOg&X-Amz-Signature=cfdb3e3283937dc6af563fb8fa19fbe5e5299351b79ee4d32399ca447284c9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDPDPAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaLztohyZJudtipUqJZbdP5ZjspFUSBhp%2FJ8VG7qpIAAIgXCGWR1VsfAKkiN1CQzbB3ufbOAvjHCcEZILoc5EY72oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDeWpyURxklmX%2FPA0CrcA8%2B52Hgd3YCG4VR%2BzwODj6tm17d0gdALp6VIXNGDwghDGZN5O9LIy%2BQsiKBSV%2FWqONX61sVz7hSu2YZkbs7T6NCCvVP110UxF%2BIUpKgZHVkk6GmLxtKTboF%2B0pc34Tl8XhrvVzWFs%2BYI7rQ%2B6uSu1cIidQJCq%2FoLKb1O8KYD42SFwfTJ2BLLcoNwfcQdj6sM1ol4OPjL8rnSriNoVv7ipc586%2FzZYx9X%2FFJBETE2Qi0er7b3avAvZE4Q%2FDTrZNYbqPkY2ZwT%2FHAhqJxnOuJiJMPeM143xgqmJrGl5UC6VSzv%2F8LmQi1WfFmU4flLBNlWXEP2Ue1waTkInVISlD3sbKZvRdBfstOEgtlXkwpVsDNpmeSaPNWiUSV6WvfiUFHtKyqklC1vgKPd4jc18%2BqirAtEy4FCI07pqut78AwSaCinPII5gX8qV8%2BuxIDJJJEJdEhkApUs%2FQgTkGs9Vz0qmkQmIusPlm4abG%2BNYq4Io3DvYISHOwwgF3IEkcWvIa6ugWHDgt4uaD5uD9kk4IUN%2Bf9rluN0dRT7ms18KnCwa%2Bu0dTlxbL5Q%2FK6M80uVXpti4tOi8oPZ0bOPqhTNN95eoM2KG5ZOG%2BestPbRRW%2B7jehdO0Dw5Dn2U3tNJJJ6MJ31pcEGOqUBsYL3ow4VcH3OcyrZc6TuL8txIQtYhCiY5cR0c6pHwE1rMjPirwefXAllKXkgQ5RfBgC6fO0oLTv64WqoKGsCw9ZXca%2FaCvU1EqXpqCa%2FyKRh3q0s4kx21LQDrMcjxzdRZ0gTOzzA%2BcRh%2B%2FhEM4Sd0ZmXC1T%2BwF%2FI%2BZprtQ9mwTj9aDK9G7KlAi2jjYmqpOv4r2AGW2rZ1QdpHvq%2FuICNhDdfh%2BOg&X-Amz-Signature=80bc02b2e25ab54a17eb251c9ffd8fbe5da5e063c37500bab6fad86cc4e03c33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
