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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRNAXEF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCo7l31CN7QDTaSHNIWa3IdTplJ8za25qI7Vf%2FGqI%2B2bAIhALddY5rsDBAZQ%2F7FNfuOAtUBbbkLZcMl%2BUd5JrU7PkC%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLbUkuTEf9970w67Yq3APK9qw30eGxCTSQEYmdLsTPYs%2FML%2BByx%2FYTf1cfr9jH%2BG6SyKMljg6QNwY7G2LFtFqGytrWKbyyjrAfXTqRVO7RmROoph0dFDmENeF0LCqjvj0HQsFwIWMMtfBR4WKk4ZYUFynJGnxkfBbERSqRCkCeJKOLgAEixiwdQZ6EpouYBFwM%2FHi%2BTJWtF0yNGa10ZtNd6wugQPHsG2h%2Bgfy5x%2FKtUDdxgqdqFgIubeUMT45PLArZsFZkf8%2B8Iv4zcYlbDFqt15ZVXVqFR7Nttix1PujM1Fnxo4oc4t0aL4L42zA9Rf7nI4%2FuJhbrXjQeAafJBsE2MBhmmzA0eP%2BICBMznWF2qcCAXO6%2FXhWVNRBNjfDKQKajGyPE7%2BCwzTpmxvWVB1n4UOFdtnqTE%2FthKUHnYjBG8Y%2FoAgOC63rGM1h0dX0xf3su222auGvSh2ufN76lloK0Q6nQYSzzj0ToGECgDx7u6TZr%2FPo1nOewSYkeZWiSIdk7Zn6JCQbkovexvdGhnfPglWFSYMKRsWCxbQzcXpYhZiU0yaMGPCyZiwdUdbFVE9kzIAaJiREzjKLi7B0nVriq3TssSrzSMLVcBAjilFgXr9VEgxzpikKAgLwar7%2FIZ3xdgNMQ%2BG%2F6encnPzDz8qDABjqkARg770dJ6STXaIzvg7Weq7BcGxH8%2F8B63S9t0947gnbNi3E6Qvh%2BzE18ICym9RmelRmhn5u4YKQRr2poNVO3eCCDbglvT8SEnF5GprMmraBj5O0L2Ni%2BWndPLWXcyeWBpZYPWPu4pV4ro7UIBub5bDS6pjWge7S2w3XcMJzU2XccInwT2FnE2VneT0H5bp9W2P9%2F3S5yGxIC%2BVrePzD5SXk0Exaj&X-Amz-Signature=51e0464c409d0f2dda3753a8e54e5d113b8ca1d5f063db33ff47cca57903fd87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRNAXEF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCo7l31CN7QDTaSHNIWa3IdTplJ8za25qI7Vf%2FGqI%2B2bAIhALddY5rsDBAZQ%2F7FNfuOAtUBbbkLZcMl%2BUd5JrU7PkC%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLbUkuTEf9970w67Yq3APK9qw30eGxCTSQEYmdLsTPYs%2FML%2BByx%2FYTf1cfr9jH%2BG6SyKMljg6QNwY7G2LFtFqGytrWKbyyjrAfXTqRVO7RmROoph0dFDmENeF0LCqjvj0HQsFwIWMMtfBR4WKk4ZYUFynJGnxkfBbERSqRCkCeJKOLgAEixiwdQZ6EpouYBFwM%2FHi%2BTJWtF0yNGa10ZtNd6wugQPHsG2h%2Bgfy5x%2FKtUDdxgqdqFgIubeUMT45PLArZsFZkf8%2B8Iv4zcYlbDFqt15ZVXVqFR7Nttix1PujM1Fnxo4oc4t0aL4L42zA9Rf7nI4%2FuJhbrXjQeAafJBsE2MBhmmzA0eP%2BICBMznWF2qcCAXO6%2FXhWVNRBNjfDKQKajGyPE7%2BCwzTpmxvWVB1n4UOFdtnqTE%2FthKUHnYjBG8Y%2FoAgOC63rGM1h0dX0xf3su222auGvSh2ufN76lloK0Q6nQYSzzj0ToGECgDx7u6TZr%2FPo1nOewSYkeZWiSIdk7Zn6JCQbkovexvdGhnfPglWFSYMKRsWCxbQzcXpYhZiU0yaMGPCyZiwdUdbFVE9kzIAaJiREzjKLi7B0nVriq3TssSrzSMLVcBAjilFgXr9VEgxzpikKAgLwar7%2FIZ3xdgNMQ%2BG%2F6encnPzDz8qDABjqkARg770dJ6STXaIzvg7Weq7BcGxH8%2F8B63S9t0947gnbNi3E6Qvh%2BzE18ICym9RmelRmhn5u4YKQRr2poNVO3eCCDbglvT8SEnF5GprMmraBj5O0L2Ni%2BWndPLWXcyeWBpZYPWPu4pV4ro7UIBub5bDS6pjWge7S2w3XcMJzU2XccInwT2FnE2VneT0H5bp9W2P9%2F3S5yGxIC%2BVrePzD5SXk0Exaj&X-Amz-Signature=1c1d4c9d0a89ca8128c31d8e42c563d64eaea243764931f905cdf41eaffe3f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRNAXEF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCo7l31CN7QDTaSHNIWa3IdTplJ8za25qI7Vf%2FGqI%2B2bAIhALddY5rsDBAZQ%2F7FNfuOAtUBbbkLZcMl%2BUd5JrU7PkC%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLbUkuTEf9970w67Yq3APK9qw30eGxCTSQEYmdLsTPYs%2FML%2BByx%2FYTf1cfr9jH%2BG6SyKMljg6QNwY7G2LFtFqGytrWKbyyjrAfXTqRVO7RmROoph0dFDmENeF0LCqjvj0HQsFwIWMMtfBR4WKk4ZYUFynJGnxkfBbERSqRCkCeJKOLgAEixiwdQZ6EpouYBFwM%2FHi%2BTJWtF0yNGa10ZtNd6wugQPHsG2h%2Bgfy5x%2FKtUDdxgqdqFgIubeUMT45PLArZsFZkf8%2B8Iv4zcYlbDFqt15ZVXVqFR7Nttix1PujM1Fnxo4oc4t0aL4L42zA9Rf7nI4%2FuJhbrXjQeAafJBsE2MBhmmzA0eP%2BICBMznWF2qcCAXO6%2FXhWVNRBNjfDKQKajGyPE7%2BCwzTpmxvWVB1n4UOFdtnqTE%2FthKUHnYjBG8Y%2FoAgOC63rGM1h0dX0xf3su222auGvSh2ufN76lloK0Q6nQYSzzj0ToGECgDx7u6TZr%2FPo1nOewSYkeZWiSIdk7Zn6JCQbkovexvdGhnfPglWFSYMKRsWCxbQzcXpYhZiU0yaMGPCyZiwdUdbFVE9kzIAaJiREzjKLi7B0nVriq3TssSrzSMLVcBAjilFgXr9VEgxzpikKAgLwar7%2FIZ3xdgNMQ%2BG%2F6encnPzDz8qDABjqkARg770dJ6STXaIzvg7Weq7BcGxH8%2F8B63S9t0947gnbNi3E6Qvh%2BzE18ICym9RmelRmhn5u4YKQRr2poNVO3eCCDbglvT8SEnF5GprMmraBj5O0L2Ni%2BWndPLWXcyeWBpZYPWPu4pV4ro7UIBub5bDS6pjWge7S2w3XcMJzU2XccInwT2FnE2VneT0H5bp9W2P9%2F3S5yGxIC%2BVrePzD5SXk0Exaj&X-Amz-Signature=d75f18543489597decb623aeca727f069a545c360d094297af09d38c4c6430bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
