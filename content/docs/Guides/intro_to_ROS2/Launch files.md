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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOABTXX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDybybVycQ83r3fIUMn3j7pyXy2QoQEFRGCWXRyl9enIwIgdHIZduA3ZA5e%2FsLoaGco3yA29eXuAsI5ltbQjb3B1RkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI2TRI6eKHyXhlrCCrcA2NSVnjILQ7dJndVsAv4%2Ba7U8HZSmRePs%2Ffn5JUvDkP84t3ySBjezsHTbti%2F%2FBMySNAS0m2r%2FvbVW1v14u7hehOkZzUlN%2FeuJx0EToQ07ZvpMi2Stc9yFkxo8PEcJlL7pv3J2b1Yjxi97hZwJOyiukZxmSFuEu5qEYabVQ13Q9B46ZOULTbauH6meUW%2F87gjAJe5%2Fe0EyD623UtfuydPk%2FZZ24pfvKsdyQ2RE%2FKn9KsAgI3B6qd9vhaibCU2hN%2BaNvzUBvQCmfUpgYqPWlKyg2uKPIoX%2FftFNobMEhfvXlglR4lahOzR84RrdtyLNDLWXXk4C6KEc1HFLUy7QdkXAx4reHzwS2zsWc88jhXw7erbqVWz1TevnkKZ71mJA0ZqsWd781dvqtVXGtDkQll%2BuGr01YTqH1Vl78HoYWtxN46ewYAVcYSONiitEC4kylmG8y4JHhFH4SJqh%2B4klgHzikLWVYobXb2bbjCjVMZAc6YcAbW%2Fydp9RDZ9ZGFeCvbeIt2lYU5G9o00TiaP1eYrFL%2BzcR31G0uyLcdwdzBwQk2rIWzAgsgDiAXy64UyrhCmo7U6Q5Vkl%2F%2BWZKcqp8JqGgJUbhyLkFNUZC7mhH50QdrDOH2n4LBI%2BARKCqfKMNzBv8EGOqUBWqb1VxK4FCcLh7V2uUWHS0WwZ%2FkJsE3Vv5txzwP5nEoIkB3OTm1FmQnIXaHb796tyXEqtyAxxflkXAyP4024a2mJy6FSreP0LyhEWsHiFgdUdU08lV3WCAbnN2K5X4wgmN13IqpV%2BzSwXY%2FREm%2BuoCIwpmgXn9e5AUGtNoGKXFCEmkCZI7a%2F22QoDabA4Cs7pV26XrlSLQfBr9QAGUrwuc0XIiaA&X-Amz-Signature=ef15a8c6082a0143ea420b783f14844a23cab9a4c035c8971b855086163150d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOABTXX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDybybVycQ83r3fIUMn3j7pyXy2QoQEFRGCWXRyl9enIwIgdHIZduA3ZA5e%2FsLoaGco3yA29eXuAsI5ltbQjb3B1RkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI2TRI6eKHyXhlrCCrcA2NSVnjILQ7dJndVsAv4%2Ba7U8HZSmRePs%2Ffn5JUvDkP84t3ySBjezsHTbti%2F%2FBMySNAS0m2r%2FvbVW1v14u7hehOkZzUlN%2FeuJx0EToQ07ZvpMi2Stc9yFkxo8PEcJlL7pv3J2b1Yjxi97hZwJOyiukZxmSFuEu5qEYabVQ13Q9B46ZOULTbauH6meUW%2F87gjAJe5%2Fe0EyD623UtfuydPk%2FZZ24pfvKsdyQ2RE%2FKn9KsAgI3B6qd9vhaibCU2hN%2BaNvzUBvQCmfUpgYqPWlKyg2uKPIoX%2FftFNobMEhfvXlglR4lahOzR84RrdtyLNDLWXXk4C6KEc1HFLUy7QdkXAx4reHzwS2zsWc88jhXw7erbqVWz1TevnkKZ71mJA0ZqsWd781dvqtVXGtDkQll%2BuGr01YTqH1Vl78HoYWtxN46ewYAVcYSONiitEC4kylmG8y4JHhFH4SJqh%2B4klgHzikLWVYobXb2bbjCjVMZAc6YcAbW%2Fydp9RDZ9ZGFeCvbeIt2lYU5G9o00TiaP1eYrFL%2BzcR31G0uyLcdwdzBwQk2rIWzAgsgDiAXy64UyrhCmo7U6Q5Vkl%2F%2BWZKcqp8JqGgJUbhyLkFNUZC7mhH50QdrDOH2n4LBI%2BARKCqfKMNzBv8EGOqUBWqb1VxK4FCcLh7V2uUWHS0WwZ%2FkJsE3Vv5txzwP5nEoIkB3OTm1FmQnIXaHb796tyXEqtyAxxflkXAyP4024a2mJy6FSreP0LyhEWsHiFgdUdU08lV3WCAbnN2K5X4wgmN13IqpV%2BzSwXY%2FREm%2BuoCIwpmgXn9e5AUGtNoGKXFCEmkCZI7a%2F22QoDabA4Cs7pV26XrlSLQfBr9QAGUrwuc0XIiaA&X-Amz-Signature=228b9d6803f9a8c21e57c4c6456cb10468e6a80de9737c69d1522778de75099f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOABTXX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDybybVycQ83r3fIUMn3j7pyXy2QoQEFRGCWXRyl9enIwIgdHIZduA3ZA5e%2FsLoaGco3yA29eXuAsI5ltbQjb3B1RkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI2TRI6eKHyXhlrCCrcA2NSVnjILQ7dJndVsAv4%2Ba7U8HZSmRePs%2Ffn5JUvDkP84t3ySBjezsHTbti%2F%2FBMySNAS0m2r%2FvbVW1v14u7hehOkZzUlN%2FeuJx0EToQ07ZvpMi2Stc9yFkxo8PEcJlL7pv3J2b1Yjxi97hZwJOyiukZxmSFuEu5qEYabVQ13Q9B46ZOULTbauH6meUW%2F87gjAJe5%2Fe0EyD623UtfuydPk%2FZZ24pfvKsdyQ2RE%2FKn9KsAgI3B6qd9vhaibCU2hN%2BaNvzUBvQCmfUpgYqPWlKyg2uKPIoX%2FftFNobMEhfvXlglR4lahOzR84RrdtyLNDLWXXk4C6KEc1HFLUy7QdkXAx4reHzwS2zsWc88jhXw7erbqVWz1TevnkKZ71mJA0ZqsWd781dvqtVXGtDkQll%2BuGr01YTqH1Vl78HoYWtxN46ewYAVcYSONiitEC4kylmG8y4JHhFH4SJqh%2B4klgHzikLWVYobXb2bbjCjVMZAc6YcAbW%2Fydp9RDZ9ZGFeCvbeIt2lYU5G9o00TiaP1eYrFL%2BzcR31G0uyLcdwdzBwQk2rIWzAgsgDiAXy64UyrhCmo7U6Q5Vkl%2F%2BWZKcqp8JqGgJUbhyLkFNUZC7mhH50QdrDOH2n4LBI%2BARKCqfKMNzBv8EGOqUBWqb1VxK4FCcLh7V2uUWHS0WwZ%2FkJsE3Vv5txzwP5nEoIkB3OTm1FmQnIXaHb796tyXEqtyAxxflkXAyP4024a2mJy6FSreP0LyhEWsHiFgdUdU08lV3WCAbnN2K5X4wgmN13IqpV%2BzSwXY%2FREm%2BuoCIwpmgXn9e5AUGtNoGKXFCEmkCZI7a%2F22QoDabA4Cs7pV26XrlSLQfBr9QAGUrwuc0XIiaA&X-Amz-Signature=1dae7deeddaad207b09d6515363c4ba0fcbdc63919ed99c3ce848665b9c34b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
