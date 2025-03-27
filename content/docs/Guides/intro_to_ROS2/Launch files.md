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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BZCUQ6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDuVhWnx%2BN0GBIRvNc9KIBPvk8Y8Yo%2Brnnt5UTiE9TAIhAN%2FPN4%2FFV%2BAXMrQaZ36Rm1SjNIfTMDxqeysTelnWHP5iKv8DCEsQABoMNjM3NDIzMTgzODA1Igx27K8fW9uVmDOu9Psq3AOf8ABDbYYNCP0aUTJUvP9Bx6SD05XwwQG4abzW%2BoclixerA4gyD0McFquuCqU3cyv%2F9qomBxgTopW%2F0HkgUDLJk9Q4LaFps2CvNsUNX5AmolPZ6%2Fx8iEIQeRSlrFuS1gGGJ%2FdRFngswZImQhszV%2BtsLrcQp5B2SLjNkBy5jb55OIMu3RVRgVxedz0Z0aI3%2BEJXA%2BAzPhUiOf9p0ld3KuCAiGvFcADh2w7XOaCBLCDA0Cr8%2BVzc1sYDS6qc8AbPmxilhbPjMYN%2BJ%2BW8QtOpo65O4yTvBHQNy1bko5GY3e%2BuPW0Oj9oLNz9nfDw6oNZ4LggdNhd681Qu9x54LT%2Bap791G8GnzFSG%2FDpqexehZFoG5gKvub7CDDK7%2Bdn04baQchmJ8mJ5bW5rlBzKMVWgu1zDT5V95gb8jq1PiUEF3trPg9ImjumT2Mup924JgtTwwHg9sbwLAjh4TtK%2FzcsP4l%2BXtES0aYfyA2Yk8havwIAmnMThR4qZZOAlbRT08YKYRQDWLhqh5qlnj78jSijC3H7xUD5rDoYF5vij0DDdcpOWR6NJt0FCt77pT1puIjgx8VJ4JMhXVew0PiWPW2wfR3nsLFz%2FwGRGPhwsZU83Ujrpna9wI2g%2FTSVIiJor2zCmopa%2FBjqkAd67hhjFIftZkylT0XaBKCxtaRi%2BulNNbQvk%2FUeGhhYBacSHvx2LItwarUD9tQt7bSIIyBHbpBR3BrPBPfKUJk0%2BlVjpEes0FSormHmer395aOyQp0qlmcRUkcTZHvi64%2FfhKrXNbPry4ydrxp9ci7TPFaVIFtTFTvzmdRHlu5p%2BbmpCfzl7oMok5AqhBpoDdbD9sqBcrZ8wx72uQD%2Fspj3W6sZd&X-Amz-Signature=c2b70f9aa5c69312bc06be653ef2a1bd8895e79e24a544d64a8e9b17f326d02a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BZCUQ6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDuVhWnx%2BN0GBIRvNc9KIBPvk8Y8Yo%2Brnnt5UTiE9TAIhAN%2FPN4%2FFV%2BAXMrQaZ36Rm1SjNIfTMDxqeysTelnWHP5iKv8DCEsQABoMNjM3NDIzMTgzODA1Igx27K8fW9uVmDOu9Psq3AOf8ABDbYYNCP0aUTJUvP9Bx6SD05XwwQG4abzW%2BoclixerA4gyD0McFquuCqU3cyv%2F9qomBxgTopW%2F0HkgUDLJk9Q4LaFps2CvNsUNX5AmolPZ6%2Fx8iEIQeRSlrFuS1gGGJ%2FdRFngswZImQhszV%2BtsLrcQp5B2SLjNkBy5jb55OIMu3RVRgVxedz0Z0aI3%2BEJXA%2BAzPhUiOf9p0ld3KuCAiGvFcADh2w7XOaCBLCDA0Cr8%2BVzc1sYDS6qc8AbPmxilhbPjMYN%2BJ%2BW8QtOpo65O4yTvBHQNy1bko5GY3e%2BuPW0Oj9oLNz9nfDw6oNZ4LggdNhd681Qu9x54LT%2Bap791G8GnzFSG%2FDpqexehZFoG5gKvub7CDDK7%2Bdn04baQchmJ8mJ5bW5rlBzKMVWgu1zDT5V95gb8jq1PiUEF3trPg9ImjumT2Mup924JgtTwwHg9sbwLAjh4TtK%2FzcsP4l%2BXtES0aYfyA2Yk8havwIAmnMThR4qZZOAlbRT08YKYRQDWLhqh5qlnj78jSijC3H7xUD5rDoYF5vij0DDdcpOWR6NJt0FCt77pT1puIjgx8VJ4JMhXVew0PiWPW2wfR3nsLFz%2FwGRGPhwsZU83Ujrpna9wI2g%2FTSVIiJor2zCmopa%2FBjqkAd67hhjFIftZkylT0XaBKCxtaRi%2BulNNbQvk%2FUeGhhYBacSHvx2LItwarUD9tQt7bSIIyBHbpBR3BrPBPfKUJk0%2BlVjpEes0FSormHmer395aOyQp0qlmcRUkcTZHvi64%2FfhKrXNbPry4ydrxp9ci7TPFaVIFtTFTvzmdRHlu5p%2BbmpCfzl7oMok5AqhBpoDdbD9sqBcrZ8wx72uQD%2Fspj3W6sZd&X-Amz-Signature=8fd11daef3606ede8f6d81df15baacd3fd361d6d770cd23262a0a6991c4f6a61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BZCUQ6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDuVhWnx%2BN0GBIRvNc9KIBPvk8Y8Yo%2Brnnt5UTiE9TAIhAN%2FPN4%2FFV%2BAXMrQaZ36Rm1SjNIfTMDxqeysTelnWHP5iKv8DCEsQABoMNjM3NDIzMTgzODA1Igx27K8fW9uVmDOu9Psq3AOf8ABDbYYNCP0aUTJUvP9Bx6SD05XwwQG4abzW%2BoclixerA4gyD0McFquuCqU3cyv%2F9qomBxgTopW%2F0HkgUDLJk9Q4LaFps2CvNsUNX5AmolPZ6%2Fx8iEIQeRSlrFuS1gGGJ%2FdRFngswZImQhszV%2BtsLrcQp5B2SLjNkBy5jb55OIMu3RVRgVxedz0Z0aI3%2BEJXA%2BAzPhUiOf9p0ld3KuCAiGvFcADh2w7XOaCBLCDA0Cr8%2BVzc1sYDS6qc8AbPmxilhbPjMYN%2BJ%2BW8QtOpo65O4yTvBHQNy1bko5GY3e%2BuPW0Oj9oLNz9nfDw6oNZ4LggdNhd681Qu9x54LT%2Bap791G8GnzFSG%2FDpqexehZFoG5gKvub7CDDK7%2Bdn04baQchmJ8mJ5bW5rlBzKMVWgu1zDT5V95gb8jq1PiUEF3trPg9ImjumT2Mup924JgtTwwHg9sbwLAjh4TtK%2FzcsP4l%2BXtES0aYfyA2Yk8havwIAmnMThR4qZZOAlbRT08YKYRQDWLhqh5qlnj78jSijC3H7xUD5rDoYF5vij0DDdcpOWR6NJt0FCt77pT1puIjgx8VJ4JMhXVew0PiWPW2wfR3nsLFz%2FwGRGPhwsZU83Ujrpna9wI2g%2FTSVIiJor2zCmopa%2FBjqkAd67hhjFIftZkylT0XaBKCxtaRi%2BulNNbQvk%2FUeGhhYBacSHvx2LItwarUD9tQt7bSIIyBHbpBR3BrPBPfKUJk0%2BlVjpEes0FSormHmer395aOyQp0qlmcRUkcTZHvi64%2FfhKrXNbPry4ydrxp9ci7TPFaVIFtTFTvzmdRHlu5p%2BbmpCfzl7oMok5AqhBpoDdbD9sqBcrZ8wx72uQD%2Fspj3W6sZd&X-Amz-Signature=7d4455cf16397b8581aefd084594ca82c5faaf918cae0e774170ff41e3b3da67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
