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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LJYRWO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr%2BwPKHG7BJbqrSOoD4MsQdhxeRJMOjKp35pOqm%2B7W6AiBFemuWMfGkzEfSmuyIok2OUqeiiLOg0vKUqN12%2BuKZJCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRB1EPgi5EFBfaDKtwDQDhihRE05erkmXLljE0sLfDBo3Z3imuym6QeQFq%2BhxMtUR1r25ZREpsgUYLQD8o3ulVViToU1gchz4mcC%2F0K6t8%2FsJ52pKRhE8yWEwxYPZycFVyAj5Ci%2BBe61DYUqw8PloGpyT5hRpyJaXCiOoS76J9H%2Bz%2B2CmRNNHHU862sZ1RZ2akf%2FZFsRx0LHDH0p815ajPDuB7SBw6ArRLQTPbfXRC5TwJOSPxpW5EaT8tQbPzXjW5XoT15w3UIWe56sWEibIewQNYsg1Rtzrc8DaZHaKJrHiItWQMSVWyUH4MoE5QTgt2PSMO2E53k3lFfG9IQYLFZ31UJJEQDYhIyoXMJSUU%2Bhc%2FVJOzqOFnI3Pazs4TeOMhDGd0hMLHvRAZN65dpD%2FjittPNl2B%2BtFYU3zIVhxeC01JujyVKNbeJybxBxrWqtGOkASypK%2BmrMLI5uKya9QRKiMlI1Qd0HcP%2FRwciZabxmGVnwbLDKnB7RpuAbypUkTWV8nhpg90ICDgj7ZBfoIdzLmWPG%2FMC06IyxIBz9WL%2F1oPD%2FUGT2Bt3d460G7OpWjqStorBsNPNRa%2BjELsM8fOp9Pzqyc%2BWOnIduv0vAf9UnkKl4oA7pW9V5ORe7MpYWqNDI6EQdKEt4Ikw8O%2B6wwY6pgHlesdpNJRZLHPlDgzKTfuxVSJDsNtQpQjNxAupAvy8uzU6PSpH8pxAw5ulqAFSKzs6ai7dx9TQDgHtJxSTMmpWDsxFS2Yf3nijc%2FLpA6ln%2BWg%2F4PwsmFhuxk%2FhrDzjJjEhHvkPwydcZz4yfz9Eoh%2Bssj0UOsL9IwBa0NffOgO0q3ywhnZbkpN%2BawKqhFnxdfkAuLU0iKB3q4TC89ApBafGWhw8zVvi&X-Amz-Signature=4c3a8be9cdf2a9e9bdbed53f29da3547e4d0d422d26bbf6e7c70496daac9e475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LJYRWO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr%2BwPKHG7BJbqrSOoD4MsQdhxeRJMOjKp35pOqm%2B7W6AiBFemuWMfGkzEfSmuyIok2OUqeiiLOg0vKUqN12%2BuKZJCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRB1EPgi5EFBfaDKtwDQDhihRE05erkmXLljE0sLfDBo3Z3imuym6QeQFq%2BhxMtUR1r25ZREpsgUYLQD8o3ulVViToU1gchz4mcC%2F0K6t8%2FsJ52pKRhE8yWEwxYPZycFVyAj5Ci%2BBe61DYUqw8PloGpyT5hRpyJaXCiOoS76J9H%2Bz%2B2CmRNNHHU862sZ1RZ2akf%2FZFsRx0LHDH0p815ajPDuB7SBw6ArRLQTPbfXRC5TwJOSPxpW5EaT8tQbPzXjW5XoT15w3UIWe56sWEibIewQNYsg1Rtzrc8DaZHaKJrHiItWQMSVWyUH4MoE5QTgt2PSMO2E53k3lFfG9IQYLFZ31UJJEQDYhIyoXMJSUU%2Bhc%2FVJOzqOFnI3Pazs4TeOMhDGd0hMLHvRAZN65dpD%2FjittPNl2B%2BtFYU3zIVhxeC01JujyVKNbeJybxBxrWqtGOkASypK%2BmrMLI5uKya9QRKiMlI1Qd0HcP%2FRwciZabxmGVnwbLDKnB7RpuAbypUkTWV8nhpg90ICDgj7ZBfoIdzLmWPG%2FMC06IyxIBz9WL%2F1oPD%2FUGT2Bt3d460G7OpWjqStorBsNPNRa%2BjELsM8fOp9Pzqyc%2BWOnIduv0vAf9UnkKl4oA7pW9V5ORe7MpYWqNDI6EQdKEt4Ikw8O%2B6wwY6pgHlesdpNJRZLHPlDgzKTfuxVSJDsNtQpQjNxAupAvy8uzU6PSpH8pxAw5ulqAFSKzs6ai7dx9TQDgHtJxSTMmpWDsxFS2Yf3nijc%2FLpA6ln%2BWg%2F4PwsmFhuxk%2FhrDzjJjEhHvkPwydcZz4yfz9Eoh%2Bssj0UOsL9IwBa0NffOgO0q3ywhnZbkpN%2BawKqhFnxdfkAuLU0iKB3q4TC89ApBafGWhw8zVvi&X-Amz-Signature=e31843dd8fd32a897457ba414d536459b255bf5db5c0260f7236f67051ac44c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LJYRWO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr%2BwPKHG7BJbqrSOoD4MsQdhxeRJMOjKp35pOqm%2B7W6AiBFemuWMfGkzEfSmuyIok2OUqeiiLOg0vKUqN12%2BuKZJCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRB1EPgi5EFBfaDKtwDQDhihRE05erkmXLljE0sLfDBo3Z3imuym6QeQFq%2BhxMtUR1r25ZREpsgUYLQD8o3ulVViToU1gchz4mcC%2F0K6t8%2FsJ52pKRhE8yWEwxYPZycFVyAj5Ci%2BBe61DYUqw8PloGpyT5hRpyJaXCiOoS76J9H%2Bz%2B2CmRNNHHU862sZ1RZ2akf%2FZFsRx0LHDH0p815ajPDuB7SBw6ArRLQTPbfXRC5TwJOSPxpW5EaT8tQbPzXjW5XoT15w3UIWe56sWEibIewQNYsg1Rtzrc8DaZHaKJrHiItWQMSVWyUH4MoE5QTgt2PSMO2E53k3lFfG9IQYLFZ31UJJEQDYhIyoXMJSUU%2Bhc%2FVJOzqOFnI3Pazs4TeOMhDGd0hMLHvRAZN65dpD%2FjittPNl2B%2BtFYU3zIVhxeC01JujyVKNbeJybxBxrWqtGOkASypK%2BmrMLI5uKya9QRKiMlI1Qd0HcP%2FRwciZabxmGVnwbLDKnB7RpuAbypUkTWV8nhpg90ICDgj7ZBfoIdzLmWPG%2FMC06IyxIBz9WL%2F1oPD%2FUGT2Bt3d460G7OpWjqStorBsNPNRa%2BjELsM8fOp9Pzqyc%2BWOnIduv0vAf9UnkKl4oA7pW9V5ORe7MpYWqNDI6EQdKEt4Ikw8O%2B6wwY6pgHlesdpNJRZLHPlDgzKTfuxVSJDsNtQpQjNxAupAvy8uzU6PSpH8pxAw5ulqAFSKzs6ai7dx9TQDgHtJxSTMmpWDsxFS2Yf3nijc%2FLpA6ln%2BWg%2F4PwsmFhuxk%2FhrDzjJjEhHvkPwydcZz4yfz9Eoh%2Bssj0UOsL9IwBa0NffOgO0q3ywhnZbkpN%2BawKqhFnxdfkAuLU0iKB3q4TC89ApBafGWhw8zVvi&X-Amz-Signature=a8a77ac274a723fa4c4b0423b5a92b3126568c35f4926544db23cd0ae876bacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
