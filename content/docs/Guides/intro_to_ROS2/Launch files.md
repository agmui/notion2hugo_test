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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VTOE7F%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDxveFSok8aLlDC5l%2Foer28L9CeN3rt6%2BsfrdC%2F%2BH673QIhAJPBPmpZ7vmVBDU%2FsA4uqquAHvnkk5tweb%2B83jnj4LT%2BKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeCKafddYJddZjtegq3AMibkwPo%2BsDVfS2WUQjPWm8I%2F8kTwijZKjGOrs7PoUvzox9ywBmBWfJwjjxGbqasz%2FEW8e8uPoYZU7MkTVybSJ15H%2FMCuHmbABGKZysc2GaHmAgFGIbxviCw4b0Q%2FdobHxOSs9Rt78tWt07HDqGLrt7woG1MvRHeyco9rtaex1Gys%2FR19SgO6tUOjbUIcUf5gj1vdhCaYbqZCwrB2l%2FzGDv1VU06JSIgghvkzeJrbMl%2F9PFOPB6AcssFvxNt%2FBVudDJozQQMF2jRfR6Vibe2hTE%2BrLihrx6R5c8RYzbCmJSVBhbiYmyN%2Fk8%2BGL%2F9kPs9ux%2BfOlY9cyYcBHlro1IuZ1gQmonZ6xYHyIOJoM%2BuhW0Wq0cPGUypqKDpBv6%2FIPkPMWWV2XEcpG%2B1bREp7FHSmjF%2Ba5sy%2F9XDkXZ40PUbdKs4tp%2BPxss6pficU28g3AELHfEOp%2FWF%2BlKmK%2B9BhFAMF%2Bh4uM04Sgg9ZAhYKVaJqaEZqJNBeikvuetNvA07CD%2Bw8RLDRw7rp8iMAjF6pNS7iSQJweUcJcOCHUT%2Bozwsc3wJy6HbPavEeM9NEIGh80lcSAfwyLx7W38VXkmNIgQNgguJIEZgh8biktaO8%2FYIDYp0PEh%2Bd37MeWbV6OPnDDVpJLABjqkAYsIzW10lBUkCrLF53CDkbNVFdS3fZH9AVP0G67G0fXlzbWDs%2F0hXq6fdhrLQSS%2FzCzdbq%2FPWoaHXUDijMTnJ%2BDLDLbdmXP%2BwreVdxJG%2BrDVVZ4dBGD5pF3A%2BghxE%2BiJgk9mHuusyeeJS3xmnZv6zZQfxa68kaNFFYqOWgokID1AJdP20%2Ber8Pa4XbArT8ocWuEEYUHrEtLqao1UkVd0D37xO7Kc&X-Amz-Signature=2bbbde093058f7c1b9d986ced3930f3337f0a105bedcedc5f3ce57f140b79177&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VTOE7F%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDxveFSok8aLlDC5l%2Foer28L9CeN3rt6%2BsfrdC%2F%2BH673QIhAJPBPmpZ7vmVBDU%2FsA4uqquAHvnkk5tweb%2B83jnj4LT%2BKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeCKafddYJddZjtegq3AMibkwPo%2BsDVfS2WUQjPWm8I%2F8kTwijZKjGOrs7PoUvzox9ywBmBWfJwjjxGbqasz%2FEW8e8uPoYZU7MkTVybSJ15H%2FMCuHmbABGKZysc2GaHmAgFGIbxviCw4b0Q%2FdobHxOSs9Rt78tWt07HDqGLrt7woG1MvRHeyco9rtaex1Gys%2FR19SgO6tUOjbUIcUf5gj1vdhCaYbqZCwrB2l%2FzGDv1VU06JSIgghvkzeJrbMl%2F9PFOPB6AcssFvxNt%2FBVudDJozQQMF2jRfR6Vibe2hTE%2BrLihrx6R5c8RYzbCmJSVBhbiYmyN%2Fk8%2BGL%2F9kPs9ux%2BfOlY9cyYcBHlro1IuZ1gQmonZ6xYHyIOJoM%2BuhW0Wq0cPGUypqKDpBv6%2FIPkPMWWV2XEcpG%2B1bREp7FHSmjF%2Ba5sy%2F9XDkXZ40PUbdKs4tp%2BPxss6pficU28g3AELHfEOp%2FWF%2BlKmK%2B9BhFAMF%2Bh4uM04Sgg9ZAhYKVaJqaEZqJNBeikvuetNvA07CD%2Bw8RLDRw7rp8iMAjF6pNS7iSQJweUcJcOCHUT%2Bozwsc3wJy6HbPavEeM9NEIGh80lcSAfwyLx7W38VXkmNIgQNgguJIEZgh8biktaO8%2FYIDYp0PEh%2Bd37MeWbV6OPnDDVpJLABjqkAYsIzW10lBUkCrLF53CDkbNVFdS3fZH9AVP0G67G0fXlzbWDs%2F0hXq6fdhrLQSS%2FzCzdbq%2FPWoaHXUDijMTnJ%2BDLDLbdmXP%2BwreVdxJG%2BrDVVZ4dBGD5pF3A%2BghxE%2BiJgk9mHuusyeeJS3xmnZv6zZQfxa68kaNFFYqOWgokID1AJdP20%2Ber8Pa4XbArT8ocWuEEYUHrEtLqao1UkVd0D37xO7Kc&X-Amz-Signature=ab0a65bdefe49d03e5475c2120568f5f399ebaf2dc0d0f1a5e65a2ab188bf1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VTOE7F%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDxveFSok8aLlDC5l%2Foer28L9CeN3rt6%2BsfrdC%2F%2BH673QIhAJPBPmpZ7vmVBDU%2FsA4uqquAHvnkk5tweb%2B83jnj4LT%2BKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeCKafddYJddZjtegq3AMibkwPo%2BsDVfS2WUQjPWm8I%2F8kTwijZKjGOrs7PoUvzox9ywBmBWfJwjjxGbqasz%2FEW8e8uPoYZU7MkTVybSJ15H%2FMCuHmbABGKZysc2GaHmAgFGIbxviCw4b0Q%2FdobHxOSs9Rt78tWt07HDqGLrt7woG1MvRHeyco9rtaex1Gys%2FR19SgO6tUOjbUIcUf5gj1vdhCaYbqZCwrB2l%2FzGDv1VU06JSIgghvkzeJrbMl%2F9PFOPB6AcssFvxNt%2FBVudDJozQQMF2jRfR6Vibe2hTE%2BrLihrx6R5c8RYzbCmJSVBhbiYmyN%2Fk8%2BGL%2F9kPs9ux%2BfOlY9cyYcBHlro1IuZ1gQmonZ6xYHyIOJoM%2BuhW0Wq0cPGUypqKDpBv6%2FIPkPMWWV2XEcpG%2B1bREp7FHSmjF%2Ba5sy%2F9XDkXZ40PUbdKs4tp%2BPxss6pficU28g3AELHfEOp%2FWF%2BlKmK%2B9BhFAMF%2Bh4uM04Sgg9ZAhYKVaJqaEZqJNBeikvuetNvA07CD%2Bw8RLDRw7rp8iMAjF6pNS7iSQJweUcJcOCHUT%2Bozwsc3wJy6HbPavEeM9NEIGh80lcSAfwyLx7W38VXkmNIgQNgguJIEZgh8biktaO8%2FYIDYp0PEh%2Bd37MeWbV6OPnDDVpJLABjqkAYsIzW10lBUkCrLF53CDkbNVFdS3fZH9AVP0G67G0fXlzbWDs%2F0hXq6fdhrLQSS%2FzCzdbq%2FPWoaHXUDijMTnJ%2BDLDLbdmXP%2BwreVdxJG%2BrDVVZ4dBGD5pF3A%2BghxE%2BiJgk9mHuusyeeJS3xmnZv6zZQfxa68kaNFFYqOWgokID1AJdP20%2Ber8Pa4XbArT8ocWuEEYUHrEtLqao1UkVd0D37xO7Kc&X-Amz-Signature=1b9f9848e38d3b243a672d9352d0f877e17496775a13260bd03233fcd3dd9547&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
