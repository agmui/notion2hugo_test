---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTK3PMLD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCsZONJ2QQ1eJKUGzcomkBOL9B7MarFuWhRPON4Mt20BwIgdjhJjTYGjOr86Z07adp1omfLjFDl6xuyHzVfR2G1p4Iq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEjTjOLTitKK6WIgKCrcA2iEx%2F%2F2rd7WvPFghQVM6MxA9FOzjL%2FIpaa0xyKkjl1WpxDllAEWsRDHAU8Kvg80eMuJvfvaVrb2RCn4lItCoO11meyIYwxI3hHfkVrO0IxSUXteUsomOj0UXx88GibT6rAumwQMnxpwWlm2U0O%2Fp%2Bflovj9KCVYLNfXgtKfjZY3Hx%2Fj%2FrqnPENFbRb370cACt4kdrZxP%2FR3jzgNjAV71r8JvxQINs%2F2oLPzmU6YBCM4BVcDG6oklOHBBn5UQoD4ExTgHZKfj8pDOBb6IojeG2dKBEl6eOyxxMJWg55SWH2NunG99yYIL8NqtGQDXZ8D24ydlKf%2FS3cVABXB%2FgC9SnemaYO%2BkWzzqwhvxm6a5rfL3w2aGjJ1%2BTrjK%2F4PYBP79yxzg40tcMqPm4P0E8mgYNnGf%2BFwQvsyfzRzgGt46OcvLKbjGq6Jodhkc3hetHf9CBxug%2BEyjuYXnmItfvqqB8MoA886vlhMEtgrNaDNlIWG%2FIpgSezhlfw1%2FUVYDy3oa5xUmTHloaFGrkbIXvyB2Ln7xC8P2CaDqnys%2FygABq%2BmlRfrjUxCk9AkK5YceSxEQ0pxZ3m7emDpvbibjF3FGY%2FCVx0ZoBnarV4m%2B3SuJMffbKdk8OO5lF14YVf9MPXKy8QGOqUBjjuzQuv%2BXQlni7BmfFO060ox9MakQkbYp2SBjm7lJc4BHfLrXIk8f1LYy5vIXwoqx9KAUgp83vpGEvH56ax3u97Gd5CRdk2Pr%2FuHPK%2Fp7LmaF8RfdvUep75qCWQDx%2BwwGYXG5akCoanGC%2BxeGhpY%2BckfApHgF4w4w%2Fc6fSWggitYPxLw79XblkQPap4xqyXqhWLzriVbWO9DXSMabFpbuuvE1Fj2&X-Amz-Signature=31c4b569fdedc9ee67178a155136ce3d902a7bae3cb3086de29e41be441af3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTK3PMLD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCsZONJ2QQ1eJKUGzcomkBOL9B7MarFuWhRPON4Mt20BwIgdjhJjTYGjOr86Z07adp1omfLjFDl6xuyHzVfR2G1p4Iq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEjTjOLTitKK6WIgKCrcA2iEx%2F%2F2rd7WvPFghQVM6MxA9FOzjL%2FIpaa0xyKkjl1WpxDllAEWsRDHAU8Kvg80eMuJvfvaVrb2RCn4lItCoO11meyIYwxI3hHfkVrO0IxSUXteUsomOj0UXx88GibT6rAumwQMnxpwWlm2U0O%2Fp%2Bflovj9KCVYLNfXgtKfjZY3Hx%2Fj%2FrqnPENFbRb370cACt4kdrZxP%2FR3jzgNjAV71r8JvxQINs%2F2oLPzmU6YBCM4BVcDG6oklOHBBn5UQoD4ExTgHZKfj8pDOBb6IojeG2dKBEl6eOyxxMJWg55SWH2NunG99yYIL8NqtGQDXZ8D24ydlKf%2FS3cVABXB%2FgC9SnemaYO%2BkWzzqwhvxm6a5rfL3w2aGjJ1%2BTrjK%2F4PYBP79yxzg40tcMqPm4P0E8mgYNnGf%2BFwQvsyfzRzgGt46OcvLKbjGq6Jodhkc3hetHf9CBxug%2BEyjuYXnmItfvqqB8MoA886vlhMEtgrNaDNlIWG%2FIpgSezhlfw1%2FUVYDy3oa5xUmTHloaFGrkbIXvyB2Ln7xC8P2CaDqnys%2FygABq%2BmlRfrjUxCk9AkK5YceSxEQ0pxZ3m7emDpvbibjF3FGY%2FCVx0ZoBnarV4m%2B3SuJMffbKdk8OO5lF14YVf9MPXKy8QGOqUBjjuzQuv%2BXQlni7BmfFO060ox9MakQkbYp2SBjm7lJc4BHfLrXIk8f1LYy5vIXwoqx9KAUgp83vpGEvH56ax3u97Gd5CRdk2Pr%2FuHPK%2Fp7LmaF8RfdvUep75qCWQDx%2BwwGYXG5akCoanGC%2BxeGhpY%2BckfApHgF4w4w%2Fc6fSWggitYPxLw79XblkQPap4xqyXqhWLzriVbWO9DXSMabFpbuuvE1Fj2&X-Amz-Signature=a830ab32128197ac381fa2059cf37afc54b477ee387daa6271c23f9c86613b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTK3PMLD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCsZONJ2QQ1eJKUGzcomkBOL9B7MarFuWhRPON4Mt20BwIgdjhJjTYGjOr86Z07adp1omfLjFDl6xuyHzVfR2G1p4Iq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEjTjOLTitKK6WIgKCrcA2iEx%2F%2F2rd7WvPFghQVM6MxA9FOzjL%2FIpaa0xyKkjl1WpxDllAEWsRDHAU8Kvg80eMuJvfvaVrb2RCn4lItCoO11meyIYwxI3hHfkVrO0IxSUXteUsomOj0UXx88GibT6rAumwQMnxpwWlm2U0O%2Fp%2Bflovj9KCVYLNfXgtKfjZY3Hx%2Fj%2FrqnPENFbRb370cACt4kdrZxP%2FR3jzgNjAV71r8JvxQINs%2F2oLPzmU6YBCM4BVcDG6oklOHBBn5UQoD4ExTgHZKfj8pDOBb6IojeG2dKBEl6eOyxxMJWg55SWH2NunG99yYIL8NqtGQDXZ8D24ydlKf%2FS3cVABXB%2FgC9SnemaYO%2BkWzzqwhvxm6a5rfL3w2aGjJ1%2BTrjK%2F4PYBP79yxzg40tcMqPm4P0E8mgYNnGf%2BFwQvsyfzRzgGt46OcvLKbjGq6Jodhkc3hetHf9CBxug%2BEyjuYXnmItfvqqB8MoA886vlhMEtgrNaDNlIWG%2FIpgSezhlfw1%2FUVYDy3oa5xUmTHloaFGrkbIXvyB2Ln7xC8P2CaDqnys%2FygABq%2BmlRfrjUxCk9AkK5YceSxEQ0pxZ3m7emDpvbibjF3FGY%2FCVx0ZoBnarV4m%2B3SuJMffbKdk8OO5lF14YVf9MPXKy8QGOqUBjjuzQuv%2BXQlni7BmfFO060ox9MakQkbYp2SBjm7lJc4BHfLrXIk8f1LYy5vIXwoqx9KAUgp83vpGEvH56ax3u97Gd5CRdk2Pr%2FuHPK%2Fp7LmaF8RfdvUep75qCWQDx%2BwwGYXG5akCoanGC%2BxeGhpY%2BckfApHgF4w4w%2Fc6fSWggitYPxLw79XblkQPap4xqyXqhWLzriVbWO9DXSMabFpbuuvE1Fj2&X-Amz-Signature=6e91463a1d1f4fc1bf6d6f5bc8021840bb8a88416c80cde817339491d79104a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
