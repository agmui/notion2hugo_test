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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QE5LWJF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCn2orYGMQB5XMHB6L%2FaQC4syTeosPzJCWK%2FwcwMfYCfgIhAOkNjYfbvWSJKCbTQb3MyJOz%2FZeT1B%2Blpp5TWq9phetzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSFLeAZg00TAbnkMq3AN4hCNvR9yvY9XtLhjvjtnUuSgW%2FldCYwHZKqPP%2FN8hGlQ9pEHPLAMf8n1HNc5mPRXEP9LsOmuxriVJE4%2BBuB4swpvJKJGsokTeZHYpsAp9RAi1izVZDhN5omhEbgWjNgJegAHRoR9tfY6O99CGIsts3rzqHsIpa6hnvfXoTndzD2eKD3eKe1ZaI1pWxbDseubYSxKFcNJHIyWP1Py9V7PBklO1gCqFTk%2FnlIHqiB1wle3KEseM8ZsyqW2VVsrYFWYDvSN1ybdgxxmiYxyOohT9w5gRCO9NcTs1ijA6Jo2Q3OVZgx7kBQCDveNuOSQ%2Fh6weql%2BjzVtiwxWV2YYe2ABNLpMP45g2Z%2FLGS%2BktjYLUdXWtx%2B0i%2BgNmq%2FEN17AWVAFDGOMqSVE6GctnbYxWp%2Bd1DhBBdG4%2Bz%2Fl%2BqtFjKIKap40S%2FlHr37ZqZSbk0ZU2gpTYtza%2Fi5q0iu%2F1rJ1GKHScMRHfqr36ff%2B7AlgRvdOW0IAThQFp44yV9cyW4Z36bdV0uua7l5az6HNgnfg9%2BGfqUGw93%2FD5C448q93UL%2FP72wB%2FIHooj0dQQdfq0q8UX0Bqao0zfaDBZIrG2cTWGptsTLl2wZlvi%2FUQ9jAPWO7ToLhc7s5Iov0u8ii1kDCY56q%2FBjqkAfrF4g853oMbuPIwd4kdQxrgmELaAdMNAZtdfxcLzv5Q4Gmux9J%2BJCnVuoRWrc4wTC82uOuIUKBX%2F0UuUg8MLMDVi756I%2FKi4mJZNeoeYNUfVmz%2BIKh71nGPGfirQ095%2BPR6i5HXRJIaHEpQAFpq0AZJhMnjF6aF6%2B0rFepvTV0E32SSlit4ehXwzCApxt9UkzE7ts8aTH7bQsCrfDQ4iCLlnJAy&X-Amz-Signature=14461652c1982828135a3915bd431edc697472c699495956d4d3e51deb493282&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QE5LWJF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCn2orYGMQB5XMHB6L%2FaQC4syTeosPzJCWK%2FwcwMfYCfgIhAOkNjYfbvWSJKCbTQb3MyJOz%2FZeT1B%2Blpp5TWq9phetzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSFLeAZg00TAbnkMq3AN4hCNvR9yvY9XtLhjvjtnUuSgW%2FldCYwHZKqPP%2FN8hGlQ9pEHPLAMf8n1HNc5mPRXEP9LsOmuxriVJE4%2BBuB4swpvJKJGsokTeZHYpsAp9RAi1izVZDhN5omhEbgWjNgJegAHRoR9tfY6O99CGIsts3rzqHsIpa6hnvfXoTndzD2eKD3eKe1ZaI1pWxbDseubYSxKFcNJHIyWP1Py9V7PBklO1gCqFTk%2FnlIHqiB1wle3KEseM8ZsyqW2VVsrYFWYDvSN1ybdgxxmiYxyOohT9w5gRCO9NcTs1ijA6Jo2Q3OVZgx7kBQCDveNuOSQ%2Fh6weql%2BjzVtiwxWV2YYe2ABNLpMP45g2Z%2FLGS%2BktjYLUdXWtx%2B0i%2BgNmq%2FEN17AWVAFDGOMqSVE6GctnbYxWp%2Bd1DhBBdG4%2Bz%2Fl%2BqtFjKIKap40S%2FlHr37ZqZSbk0ZU2gpTYtza%2Fi5q0iu%2F1rJ1GKHScMRHfqr36ff%2B7AlgRvdOW0IAThQFp44yV9cyW4Z36bdV0uua7l5az6HNgnfg9%2BGfqUGw93%2FD5C448q93UL%2FP72wB%2FIHooj0dQQdfq0q8UX0Bqao0zfaDBZIrG2cTWGptsTLl2wZlvi%2FUQ9jAPWO7ToLhc7s5Iov0u8ii1kDCY56q%2FBjqkAfrF4g853oMbuPIwd4kdQxrgmELaAdMNAZtdfxcLzv5Q4Gmux9J%2BJCnVuoRWrc4wTC82uOuIUKBX%2F0UuUg8MLMDVi756I%2FKi4mJZNeoeYNUfVmz%2BIKh71nGPGfirQ095%2BPR6i5HXRJIaHEpQAFpq0AZJhMnjF6aF6%2B0rFepvTV0E32SSlit4ehXwzCApxt9UkzE7ts8aTH7bQsCrfDQ4iCLlnJAy&X-Amz-Signature=4bccbe09f6aac9ba1629eec886847caac10d5e9a4602ea8e1e67af70264b6fea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QE5LWJF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCn2orYGMQB5XMHB6L%2FaQC4syTeosPzJCWK%2FwcwMfYCfgIhAOkNjYfbvWSJKCbTQb3MyJOz%2FZeT1B%2Blpp5TWq9phetzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSFLeAZg00TAbnkMq3AN4hCNvR9yvY9XtLhjvjtnUuSgW%2FldCYwHZKqPP%2FN8hGlQ9pEHPLAMf8n1HNc5mPRXEP9LsOmuxriVJE4%2BBuB4swpvJKJGsokTeZHYpsAp9RAi1izVZDhN5omhEbgWjNgJegAHRoR9tfY6O99CGIsts3rzqHsIpa6hnvfXoTndzD2eKD3eKe1ZaI1pWxbDseubYSxKFcNJHIyWP1Py9V7PBklO1gCqFTk%2FnlIHqiB1wle3KEseM8ZsyqW2VVsrYFWYDvSN1ybdgxxmiYxyOohT9w5gRCO9NcTs1ijA6Jo2Q3OVZgx7kBQCDveNuOSQ%2Fh6weql%2BjzVtiwxWV2YYe2ABNLpMP45g2Z%2FLGS%2BktjYLUdXWtx%2B0i%2BgNmq%2FEN17AWVAFDGOMqSVE6GctnbYxWp%2Bd1DhBBdG4%2Bz%2Fl%2BqtFjKIKap40S%2FlHr37ZqZSbk0ZU2gpTYtza%2Fi5q0iu%2F1rJ1GKHScMRHfqr36ff%2B7AlgRvdOW0IAThQFp44yV9cyW4Z36bdV0uua7l5az6HNgnfg9%2BGfqUGw93%2FD5C448q93UL%2FP72wB%2FIHooj0dQQdfq0q8UX0Bqao0zfaDBZIrG2cTWGptsTLl2wZlvi%2FUQ9jAPWO7ToLhc7s5Iov0u8ii1kDCY56q%2FBjqkAfrF4g853oMbuPIwd4kdQxrgmELaAdMNAZtdfxcLzv5Q4Gmux9J%2BJCnVuoRWrc4wTC82uOuIUKBX%2F0UuUg8MLMDVi756I%2FKi4mJZNeoeYNUfVmz%2BIKh71nGPGfirQ095%2BPR6i5HXRJIaHEpQAFpq0AZJhMnjF6aF6%2B0rFepvTV0E32SSlit4ehXwzCApxt9UkzE7ts8aTH7bQsCrfDQ4iCLlnJAy&X-Amz-Signature=9be626ac76526c5b6c24145d952318e2751be7272aba619755f04d9d39b23049&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
