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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4S74R3H%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMvq7ahQMuGYOwAWMbvlXLmgUhfbOcWPc3Hm9RGAVIywIhAMA8gP90vN9FSD2o0Ns9ycAgYwLTJodENokL2RWlzqYBKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9E6bNHUc4NEdSYrIq3ANcdHNddDyDYLry%2BuWuwl2QzoVOzLXw1rAJ9feOXxKnu003FT7OLc%2BtjtDGG9vAmPfma4IgNlh7rBdnD4uFFgsUiAFW%2BWBpKKdss%2FhOT%2FcvqF5WfQdevE975dclz%2FkQVZjeUX1yr7TeKrg9ipMFszDOtuLS1nZZYVUOK%2BShovglAAvnlWhx%2F7Scww%2FMosIutMhuN2O6G0B697HP09ByVikEWS5FeHsCxx6HNnT3oI2o785PyMtSx3CdL3dln7PYWJ3P%2Bwwgjgl8xeGyZX6tSi0Cn%2B7MVzkvaXWcn2PYBu5Gx%2F5B9cQJhZteVWlaEvYbTKUufOg2HofqsolH%2Bfx%2BTbm7nyNvZiAtSCPWqrkVOu%2BbhsRXRJdSgvKl1s6dB3IAGzFkqkGwEoMtRq7pyChCyePHavvWX6aJbL%2BNmBuFf49ob5c4cy9EvV7DYabSIKf7jTZ8EcafgkNW3E39w7AC7L500XqMP4MFBR49P7D%2BRHJnTC4usKJGCCRhvBLoTGPGoh9BQ3lSFGTvsLfgQTJWJUj6mBS8S52992P9dserbHwqHLjaYk2iz%2FWLgyXJT5cIGSsSiVjEgUZBWee2OimontUUIb%2Fll%2BV8edBUvMXSFTvbOg5%2Feh4uHjanJVtixzDRyfK%2FBjqkAXh2pUXUq9OYF%2BwZukUNnR6b95QB09PICwGTTAp%2FP3m1Z%2Fo1gHwAK1NMIdK3T%2BAXUqkuvRPMXNwHNWrPkE9wJmy%2FI8gFu9HqjVvIT1fDwseTVchieyya9lVDBvpmzwQvsPjGxim%2FPDLDTvDN6aby4S4cE57jP1%2BlIrk8PgMr%2Bhjc4MBtsR73KSiw0prv9V8gIPEZv09M9fMzE3SnxhAD2DnYiO%2Bk&X-Amz-Signature=30093d3afbea6037bd85e7682d16cf206b45d3ac404b6caeaf7effb74018fab5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4S74R3H%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMvq7ahQMuGYOwAWMbvlXLmgUhfbOcWPc3Hm9RGAVIywIhAMA8gP90vN9FSD2o0Ns9ycAgYwLTJodENokL2RWlzqYBKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9E6bNHUc4NEdSYrIq3ANcdHNddDyDYLry%2BuWuwl2QzoVOzLXw1rAJ9feOXxKnu003FT7OLc%2BtjtDGG9vAmPfma4IgNlh7rBdnD4uFFgsUiAFW%2BWBpKKdss%2FhOT%2FcvqF5WfQdevE975dclz%2FkQVZjeUX1yr7TeKrg9ipMFszDOtuLS1nZZYVUOK%2BShovglAAvnlWhx%2F7Scww%2FMosIutMhuN2O6G0B697HP09ByVikEWS5FeHsCxx6HNnT3oI2o785PyMtSx3CdL3dln7PYWJ3P%2Bwwgjgl8xeGyZX6tSi0Cn%2B7MVzkvaXWcn2PYBu5Gx%2F5B9cQJhZteVWlaEvYbTKUufOg2HofqsolH%2Bfx%2BTbm7nyNvZiAtSCPWqrkVOu%2BbhsRXRJdSgvKl1s6dB3IAGzFkqkGwEoMtRq7pyChCyePHavvWX6aJbL%2BNmBuFf49ob5c4cy9EvV7DYabSIKf7jTZ8EcafgkNW3E39w7AC7L500XqMP4MFBR49P7D%2BRHJnTC4usKJGCCRhvBLoTGPGoh9BQ3lSFGTvsLfgQTJWJUj6mBS8S52992P9dserbHwqHLjaYk2iz%2FWLgyXJT5cIGSsSiVjEgUZBWee2OimontUUIb%2Fll%2BV8edBUvMXSFTvbOg5%2Feh4uHjanJVtixzDRyfK%2FBjqkAXh2pUXUq9OYF%2BwZukUNnR6b95QB09PICwGTTAp%2FP3m1Z%2Fo1gHwAK1NMIdK3T%2BAXUqkuvRPMXNwHNWrPkE9wJmy%2FI8gFu9HqjVvIT1fDwseTVchieyya9lVDBvpmzwQvsPjGxim%2FPDLDTvDN6aby4S4cE57jP1%2BlIrk8PgMr%2Bhjc4MBtsR73KSiw0prv9V8gIPEZv09M9fMzE3SnxhAD2DnYiO%2Bk&X-Amz-Signature=07dcfadb09c9ce3063db4da2addf286225dca233aa73e3efa1967c22a2eaba5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4S74R3H%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMvq7ahQMuGYOwAWMbvlXLmgUhfbOcWPc3Hm9RGAVIywIhAMA8gP90vN9FSD2o0Ns9ycAgYwLTJodENokL2RWlzqYBKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9E6bNHUc4NEdSYrIq3ANcdHNddDyDYLry%2BuWuwl2QzoVOzLXw1rAJ9feOXxKnu003FT7OLc%2BtjtDGG9vAmPfma4IgNlh7rBdnD4uFFgsUiAFW%2BWBpKKdss%2FhOT%2FcvqF5WfQdevE975dclz%2FkQVZjeUX1yr7TeKrg9ipMFszDOtuLS1nZZYVUOK%2BShovglAAvnlWhx%2F7Scww%2FMosIutMhuN2O6G0B697HP09ByVikEWS5FeHsCxx6HNnT3oI2o785PyMtSx3CdL3dln7PYWJ3P%2Bwwgjgl8xeGyZX6tSi0Cn%2B7MVzkvaXWcn2PYBu5Gx%2F5B9cQJhZteVWlaEvYbTKUufOg2HofqsolH%2Bfx%2BTbm7nyNvZiAtSCPWqrkVOu%2BbhsRXRJdSgvKl1s6dB3IAGzFkqkGwEoMtRq7pyChCyePHavvWX6aJbL%2BNmBuFf49ob5c4cy9EvV7DYabSIKf7jTZ8EcafgkNW3E39w7AC7L500XqMP4MFBR49P7D%2BRHJnTC4usKJGCCRhvBLoTGPGoh9BQ3lSFGTvsLfgQTJWJUj6mBS8S52992P9dserbHwqHLjaYk2iz%2FWLgyXJT5cIGSsSiVjEgUZBWee2OimontUUIb%2Fll%2BV8edBUvMXSFTvbOg5%2Feh4uHjanJVtixzDRyfK%2FBjqkAXh2pUXUq9OYF%2BwZukUNnR6b95QB09PICwGTTAp%2FP3m1Z%2Fo1gHwAK1NMIdK3T%2BAXUqkuvRPMXNwHNWrPkE9wJmy%2FI8gFu9HqjVvIT1fDwseTVchieyya9lVDBvpmzwQvsPjGxim%2FPDLDTvDN6aby4S4cE57jP1%2BlIrk8PgMr%2Bhjc4MBtsR73KSiw0prv9V8gIPEZv09M9fMzE3SnxhAD2DnYiO%2Bk&X-Amz-Signature=8d50f6dbe0dc0c87273731bf5008c728261f8bd9573899ee1596f34ea02e689c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
