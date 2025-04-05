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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVS3S3SE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIzllydwP9TARSHLLyN5RTkm4QgUbPCJRhMAEhQ7D0wIgYKRUfDLsquvpZL5wh9UKHn1YyBLfRTUv5SfuAe3mfCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN2ydF3ydvfkJzq45SrcA8BMeVwHFX87A4taK9uiuRt7%2Bof%2Bykzs7m4hK51jmC7MwE%2BxwttGfGqfVcUbBJAihLJcmqzXoo8U%2BwAkmm1PzD692aHIBoQ7jFxU0ntmnBgjUsMBMv7mBbopgTJFMM9DcAPpBlLRuKp%2FglP66Ki7X72mHzoFyzmKK8BgcvSxlqCrFROoqhuYJQWDL1hV9MuayWxJkyqEW1YNfWRPM8ENry8t69pFvozPiG3qGeAdwKkgyZWzqgBlHzPajS%2BPmMQFjwdViT9qkngbLmHFiXyq4E5pK3GCioi6xm42mZgzarPtErBGudIu%2F5U7nV8nzAGbfk%2By0S8IBta%2B3zI5gaEVhmtD0SrFLkefR%2BBh3MQOVjRf6ylE0PDacdG6sr1XUyfvStoLr51c6jsyYxRNpRKBOXm8TmUHh9kEG0Rhm%2BW4HbUIMWEWYwI%2F8sGuEelxclBUOznqmU7CIrrQDdWnRiXdXmcrTgtDIUfMOUbY5urCxsVGa0sySzSlpWvoidKXM7UgSk4CD%2BZL7mNxdQKhj73DNJW8URCSKx%2BQzv%2FzOEmJbP4HfSTlK1HxqGokcsjBPOy%2FBqg1jOmRuYzrBZn85t%2Bu7CYqJZoAUCP7ylErj69u5Z%2BmNI7SDDzZ8sqG5GgLMLq8wr8GOqUBxKQNHT%2BLqNLZ%2BbSqbP%2FdQxaNvHBejLNcB1ScITxZXPRwNO1UxAMT7asZ0bZDXOr62iZgeuy8PyYilaaZ6ryxM9bYXowGgqBkI%2B8wnFDhBxgpsxdkPEYRJAFzX7Ay2pJzh3LwroAbJsxOo3myPslS7W5ymeK%2FR2UxR%2FCbvDgd4yRTJYBjhqPFN%2Fej6uUOGTR%2Fyr3ItOHTBuFTlSsj8i7V6IcvkuNJ&X-Amz-Signature=1dd2c1b836a94b3a61f0839ab754458b816e3dd8d4694a7f5ffe0e72973f350c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVS3S3SE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIzllydwP9TARSHLLyN5RTkm4QgUbPCJRhMAEhQ7D0wIgYKRUfDLsquvpZL5wh9UKHn1YyBLfRTUv5SfuAe3mfCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN2ydF3ydvfkJzq45SrcA8BMeVwHFX87A4taK9uiuRt7%2Bof%2Bykzs7m4hK51jmC7MwE%2BxwttGfGqfVcUbBJAihLJcmqzXoo8U%2BwAkmm1PzD692aHIBoQ7jFxU0ntmnBgjUsMBMv7mBbopgTJFMM9DcAPpBlLRuKp%2FglP66Ki7X72mHzoFyzmKK8BgcvSxlqCrFROoqhuYJQWDL1hV9MuayWxJkyqEW1YNfWRPM8ENry8t69pFvozPiG3qGeAdwKkgyZWzqgBlHzPajS%2BPmMQFjwdViT9qkngbLmHFiXyq4E5pK3GCioi6xm42mZgzarPtErBGudIu%2F5U7nV8nzAGbfk%2By0S8IBta%2B3zI5gaEVhmtD0SrFLkefR%2BBh3MQOVjRf6ylE0PDacdG6sr1XUyfvStoLr51c6jsyYxRNpRKBOXm8TmUHh9kEG0Rhm%2BW4HbUIMWEWYwI%2F8sGuEelxclBUOznqmU7CIrrQDdWnRiXdXmcrTgtDIUfMOUbY5urCxsVGa0sySzSlpWvoidKXM7UgSk4CD%2BZL7mNxdQKhj73DNJW8URCSKx%2BQzv%2FzOEmJbP4HfSTlK1HxqGokcsjBPOy%2FBqg1jOmRuYzrBZn85t%2Bu7CYqJZoAUCP7ylErj69u5Z%2BmNI7SDDzZ8sqG5GgLMLq8wr8GOqUBxKQNHT%2BLqNLZ%2BbSqbP%2FdQxaNvHBejLNcB1ScITxZXPRwNO1UxAMT7asZ0bZDXOr62iZgeuy8PyYilaaZ6ryxM9bYXowGgqBkI%2B8wnFDhBxgpsxdkPEYRJAFzX7Ay2pJzh3LwroAbJsxOo3myPslS7W5ymeK%2FR2UxR%2FCbvDgd4yRTJYBjhqPFN%2Fej6uUOGTR%2Fyr3ItOHTBuFTlSsj8i7V6IcvkuNJ&X-Amz-Signature=d5fbab6d52c6c55afe443a8ed894822eb9b7af5ca276509d91a28aa85e045d19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVS3S3SE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIzllydwP9TARSHLLyN5RTkm4QgUbPCJRhMAEhQ7D0wIgYKRUfDLsquvpZL5wh9UKHn1YyBLfRTUv5SfuAe3mfCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN2ydF3ydvfkJzq45SrcA8BMeVwHFX87A4taK9uiuRt7%2Bof%2Bykzs7m4hK51jmC7MwE%2BxwttGfGqfVcUbBJAihLJcmqzXoo8U%2BwAkmm1PzD692aHIBoQ7jFxU0ntmnBgjUsMBMv7mBbopgTJFMM9DcAPpBlLRuKp%2FglP66Ki7X72mHzoFyzmKK8BgcvSxlqCrFROoqhuYJQWDL1hV9MuayWxJkyqEW1YNfWRPM8ENry8t69pFvozPiG3qGeAdwKkgyZWzqgBlHzPajS%2BPmMQFjwdViT9qkngbLmHFiXyq4E5pK3GCioi6xm42mZgzarPtErBGudIu%2F5U7nV8nzAGbfk%2By0S8IBta%2B3zI5gaEVhmtD0SrFLkefR%2BBh3MQOVjRf6ylE0PDacdG6sr1XUyfvStoLr51c6jsyYxRNpRKBOXm8TmUHh9kEG0Rhm%2BW4HbUIMWEWYwI%2F8sGuEelxclBUOznqmU7CIrrQDdWnRiXdXmcrTgtDIUfMOUbY5urCxsVGa0sySzSlpWvoidKXM7UgSk4CD%2BZL7mNxdQKhj73DNJW8URCSKx%2BQzv%2FzOEmJbP4HfSTlK1HxqGokcsjBPOy%2FBqg1jOmRuYzrBZn85t%2Bu7CYqJZoAUCP7ylErj69u5Z%2BmNI7SDDzZ8sqG5GgLMLq8wr8GOqUBxKQNHT%2BLqNLZ%2BbSqbP%2FdQxaNvHBejLNcB1ScITxZXPRwNO1UxAMT7asZ0bZDXOr62iZgeuy8PyYilaaZ6ryxM9bYXowGgqBkI%2B8wnFDhBxgpsxdkPEYRJAFzX7Ay2pJzh3LwroAbJsxOo3myPslS7W5ymeK%2FR2UxR%2FCbvDgd4yRTJYBjhqPFN%2Fej6uUOGTR%2Fyr3ItOHTBuFTlSsj8i7V6IcvkuNJ&X-Amz-Signature=4b5aa72708a9f21d7b5bc50364775bc612e63f78c6083355de13e8927000b175&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
