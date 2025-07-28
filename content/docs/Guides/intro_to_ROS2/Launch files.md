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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y26XDDRK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAGs1B%2BtrDgRrDKvD2RPDZDtpe1pRB%2BZsuFRYU4TSfGWAiEAkKVToFkPseMDkTh9Gyb6R0wMXuHfRECkFValUfU44qMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgI8I39tgVjij5EeircAwbaQFPpC%2B%2FZsaer79jxeGTv3DKxT5QcCVgHRxL8En78yZkAoy7ldJwsLAc09oRpKvQfHrP0jrEiqOUXun5PZyDqqhgZH03sM7H1Al1vH9wu6WpXh7q5p6aWnn%2B%2F5uj84yCMWzF2SmBPZDSj6yJs6J9tr6sS964Ahoabd4B9cYNjT6aRt%2FEeZDs0GbHgV4p6p2PHUyaBcHK6PJfiMrwGL3j7bVVaCCqHVs8Pt3cFZl9VhGQfTNn0Ss6smyo%2BHQwIE1qEc9e%2BPek5%2B1iGHZFzyE5FJepEwqcFSiRXHDxOOE%2F%2FA85Dk9hWKk9V%2BHjQcASd8a2ulrxJ4%2BY3BeMCBQOn7O%2BzbG%2B%2Fz%2F9yr4BJWb4qNJHfl8%2BvAFi8NbPmtMbu1RWIpxeCCTBxqGqWKsVl%2FkoR4ywyl65n3K1%2Fd41O%2FgnI3KFvozmZDz7AlVDA%2FShtddgRGT0vGxRhS%2FdFdm%2BUECCZ%2BesDQ%2B%2F4E4KfZTrhPYXUDXsul5JLVVmHCwGTdA3L00V%2Fk%2BZLCC3iCu3LzlNliaV1hKPqJPOlEnoKgmmGQ9c72kSewgfNq5dT%2BEg4pHqxVar2nDX88NV%2F5K5Z5NhQ8ewxl6RdCTjobv4xjpFaWLOD8VROuYGW15TqNHe8JUKiMKCKn8QGOqUBRFXhdJUQdTUe7o0Ji%2FJTwMc9UCRjYX21ME0zZ8feaWmIWN1NDvss%2FLglvqchgz95gzxG4TNsQHEaxSN4RIqd4D%2Ba%2BAAjzdwQfK4CpdMWELfi3tdU7vWRY3Bw8eDlRJIVArFhmdka3fiSgk4UlTYG%2BocuTGmbkLDI4%2FRzhmOxdm%2FBwbVZtwhiAJMoVl6zy5OZLdJPl1Efg6B7Autn6T5at5%2BljzZy&X-Amz-Signature=3668653fac2b2d475ac27137f43758e603c8aac739fa15254df21e958192081b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y26XDDRK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAGs1B%2BtrDgRrDKvD2RPDZDtpe1pRB%2BZsuFRYU4TSfGWAiEAkKVToFkPseMDkTh9Gyb6R0wMXuHfRECkFValUfU44qMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgI8I39tgVjij5EeircAwbaQFPpC%2B%2FZsaer79jxeGTv3DKxT5QcCVgHRxL8En78yZkAoy7ldJwsLAc09oRpKvQfHrP0jrEiqOUXun5PZyDqqhgZH03sM7H1Al1vH9wu6WpXh7q5p6aWnn%2B%2F5uj84yCMWzF2SmBPZDSj6yJs6J9tr6sS964Ahoabd4B9cYNjT6aRt%2FEeZDs0GbHgV4p6p2PHUyaBcHK6PJfiMrwGL3j7bVVaCCqHVs8Pt3cFZl9VhGQfTNn0Ss6smyo%2BHQwIE1qEc9e%2BPek5%2B1iGHZFzyE5FJepEwqcFSiRXHDxOOE%2F%2FA85Dk9hWKk9V%2BHjQcASd8a2ulrxJ4%2BY3BeMCBQOn7O%2BzbG%2B%2Fz%2F9yr4BJWb4qNJHfl8%2BvAFi8NbPmtMbu1RWIpxeCCTBxqGqWKsVl%2FkoR4ywyl65n3K1%2Fd41O%2FgnI3KFvozmZDz7AlVDA%2FShtddgRGT0vGxRhS%2FdFdm%2BUECCZ%2BesDQ%2B%2F4E4KfZTrhPYXUDXsul5JLVVmHCwGTdA3L00V%2Fk%2BZLCC3iCu3LzlNliaV1hKPqJPOlEnoKgmmGQ9c72kSewgfNq5dT%2BEg4pHqxVar2nDX88NV%2F5K5Z5NhQ8ewxl6RdCTjobv4xjpFaWLOD8VROuYGW15TqNHe8JUKiMKCKn8QGOqUBRFXhdJUQdTUe7o0Ji%2FJTwMc9UCRjYX21ME0zZ8feaWmIWN1NDvss%2FLglvqchgz95gzxG4TNsQHEaxSN4RIqd4D%2Ba%2BAAjzdwQfK4CpdMWELfi3tdU7vWRY3Bw8eDlRJIVArFhmdka3fiSgk4UlTYG%2BocuTGmbkLDI4%2FRzhmOxdm%2FBwbVZtwhiAJMoVl6zy5OZLdJPl1Efg6B7Autn6T5at5%2BljzZy&X-Amz-Signature=ff181e60cde64ea52b1c7c2cb533072e0eec05838350e9fd21a450d607c7f673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y26XDDRK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAGs1B%2BtrDgRrDKvD2RPDZDtpe1pRB%2BZsuFRYU4TSfGWAiEAkKVToFkPseMDkTh9Gyb6R0wMXuHfRECkFValUfU44qMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgI8I39tgVjij5EeircAwbaQFPpC%2B%2FZsaer79jxeGTv3DKxT5QcCVgHRxL8En78yZkAoy7ldJwsLAc09oRpKvQfHrP0jrEiqOUXun5PZyDqqhgZH03sM7H1Al1vH9wu6WpXh7q5p6aWnn%2B%2F5uj84yCMWzF2SmBPZDSj6yJs6J9tr6sS964Ahoabd4B9cYNjT6aRt%2FEeZDs0GbHgV4p6p2PHUyaBcHK6PJfiMrwGL3j7bVVaCCqHVs8Pt3cFZl9VhGQfTNn0Ss6smyo%2BHQwIE1qEc9e%2BPek5%2B1iGHZFzyE5FJepEwqcFSiRXHDxOOE%2F%2FA85Dk9hWKk9V%2BHjQcASd8a2ulrxJ4%2BY3BeMCBQOn7O%2BzbG%2B%2Fz%2F9yr4BJWb4qNJHfl8%2BvAFi8NbPmtMbu1RWIpxeCCTBxqGqWKsVl%2FkoR4ywyl65n3K1%2Fd41O%2FgnI3KFvozmZDz7AlVDA%2FShtddgRGT0vGxRhS%2FdFdm%2BUECCZ%2BesDQ%2B%2F4E4KfZTrhPYXUDXsul5JLVVmHCwGTdA3L00V%2Fk%2BZLCC3iCu3LzlNliaV1hKPqJPOlEnoKgmmGQ9c72kSewgfNq5dT%2BEg4pHqxVar2nDX88NV%2F5K5Z5NhQ8ewxl6RdCTjobv4xjpFaWLOD8VROuYGW15TqNHe8JUKiMKCKn8QGOqUBRFXhdJUQdTUe7o0Ji%2FJTwMc9UCRjYX21ME0zZ8feaWmIWN1NDvss%2FLglvqchgz95gzxG4TNsQHEaxSN4RIqd4D%2Ba%2BAAjzdwQfK4CpdMWELfi3tdU7vWRY3Bw8eDlRJIVArFhmdka3fiSgk4UlTYG%2BocuTGmbkLDI4%2FRzhmOxdm%2FBwbVZtwhiAJMoVl6zy5OZLdJPl1Efg6B7Autn6T5at5%2BljzZy&X-Amz-Signature=5c1e4e98128b701e21fc6ab7f1dc9761a0e9399b5b1cabd75633c907494e7809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
