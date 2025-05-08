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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=55a562aeffc3b218a1fadd50f618b8bac717f39f539fd1f38a4a6312fddd9ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=e4de793d0af5e882f7bb1603940fe81c3a1561f865efadb1cde3f7c2b7ff68a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=8e31b1a36027e2ef5be4551764409ed79e425aac51605f388438bf469c5af317&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
