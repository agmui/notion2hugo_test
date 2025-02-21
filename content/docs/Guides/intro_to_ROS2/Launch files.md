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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPZVMN4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfY3bKFYa%2BiikreMxdjU9D2%2FSIXc1EWKgN%2FIO88AnJwAIgJEPavvavhCaigF%2FE7v9KM2FXtEVS4JWrvXIT4gIXpJwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzlPn7wN5RbFu1nPCrcA1WxL0WY7C0nKyYHQ2GdWlBzNCufVNYMNGjlm6P1nGlYkkP5VXYIlSY%2F16OmH%2FuueBasIm0NLBOc5DcvJVxoq4eh9z5BKodmzEQNdXV%2FhOWlBDibF%2B79Z4o2xPr5yR4iIY5xyaNyrktyXeEkXsysyoQHrIvquc1W18lK7iRWPtSu97SWCV6sRKsa713QCYv7tZU%2BiZKpMsJxoyjgNAYhx0F1Txexk5Q%2B259vr6oq37oq4RkgCsBDFym06p2POcvogCtXlkQx2VZ0V8MUWzVIuVrQeINYPg2sE%2BwUHYb7btP05T3XjHUEd3tFT%2B7VvdLXlB7sOV9Isu8Uq6r%2FcZ5gvafLSW7Nb%2FiIuNzXPLkH7G8Cg3WBE4KYpon5PLmvGBp9FGiMVs3EgiMkUfPklMMEYOEbwyNqE28cIbE7Scvd1tY1ma8yIs7GoIL%2FzZr0gB6J9MJVyeEvDsR%2BMCmnZ4TU6oYsTK1VkveJS%2BW7cR8gXrNXB0bN%2BK%2BqcDzDWhQk3OAnZz%2FG2Jfa3k1fIcmw1Gdvt26Yn9iSDE%2B3sCPdnnss2J41aya3gQCAaZWcWSIJvmyPYIN27z5mzGVmLV4skIB0UF4PmcQTsC0U8zIB3u8oPniY7Y0Q0M%2BTE3G0u2WjMMae470GOqUBkfATuuOHNE6xej765LTukj05gQW6tujvbjwOoRsePb8DBv6Ab7Xwhus0hQOFoPRwDU7xEkPRdQLmJzWKCbT5GRx45CRm25DNsGQYTVGqcSOyxhfVDTwWHlshT%2F9eRkaVYVVYNuXsYAdMIQ7kbvO%2BK2gs2G%2BbtXjeUL6qcoyQWNGVfiIo4Oohr3wdgxPi%2FPbNhaVuiTxz233vtBLVSa7sqTwOuPcY&X-Amz-Signature=7492ee2674372aac237f0100072c958dc792bf685cb7f07437317764e1f049cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPZVMN4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfY3bKFYa%2BiikreMxdjU9D2%2FSIXc1EWKgN%2FIO88AnJwAIgJEPavvavhCaigF%2FE7v9KM2FXtEVS4JWrvXIT4gIXpJwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzlPn7wN5RbFu1nPCrcA1WxL0WY7C0nKyYHQ2GdWlBzNCufVNYMNGjlm6P1nGlYkkP5VXYIlSY%2F16OmH%2FuueBasIm0NLBOc5DcvJVxoq4eh9z5BKodmzEQNdXV%2FhOWlBDibF%2B79Z4o2xPr5yR4iIY5xyaNyrktyXeEkXsysyoQHrIvquc1W18lK7iRWPtSu97SWCV6sRKsa713QCYv7tZU%2BiZKpMsJxoyjgNAYhx0F1Txexk5Q%2B259vr6oq37oq4RkgCsBDFym06p2POcvogCtXlkQx2VZ0V8MUWzVIuVrQeINYPg2sE%2BwUHYb7btP05T3XjHUEd3tFT%2B7VvdLXlB7sOV9Isu8Uq6r%2FcZ5gvafLSW7Nb%2FiIuNzXPLkH7G8Cg3WBE4KYpon5PLmvGBp9FGiMVs3EgiMkUfPklMMEYOEbwyNqE28cIbE7Scvd1tY1ma8yIs7GoIL%2FzZr0gB6J9MJVyeEvDsR%2BMCmnZ4TU6oYsTK1VkveJS%2BW7cR8gXrNXB0bN%2BK%2BqcDzDWhQk3OAnZz%2FG2Jfa3k1fIcmw1Gdvt26Yn9iSDE%2B3sCPdnnss2J41aya3gQCAaZWcWSIJvmyPYIN27z5mzGVmLV4skIB0UF4PmcQTsC0U8zIB3u8oPniY7Y0Q0M%2BTE3G0u2WjMMae470GOqUBkfATuuOHNE6xej765LTukj05gQW6tujvbjwOoRsePb8DBv6Ab7Xwhus0hQOFoPRwDU7xEkPRdQLmJzWKCbT5GRx45CRm25DNsGQYTVGqcSOyxhfVDTwWHlshT%2F9eRkaVYVVYNuXsYAdMIQ7kbvO%2BK2gs2G%2BbtXjeUL6qcoyQWNGVfiIo4Oohr3wdgxPi%2FPbNhaVuiTxz233vtBLVSa7sqTwOuPcY&X-Amz-Signature=9f9cdde3e28727208d610794abd3cc7aba3f4637611a14537468a4b3e02621f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPZVMN4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfY3bKFYa%2BiikreMxdjU9D2%2FSIXc1EWKgN%2FIO88AnJwAIgJEPavvavhCaigF%2FE7v9KM2FXtEVS4JWrvXIT4gIXpJwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzlPn7wN5RbFu1nPCrcA1WxL0WY7C0nKyYHQ2GdWlBzNCufVNYMNGjlm6P1nGlYkkP5VXYIlSY%2F16OmH%2FuueBasIm0NLBOc5DcvJVxoq4eh9z5BKodmzEQNdXV%2FhOWlBDibF%2B79Z4o2xPr5yR4iIY5xyaNyrktyXeEkXsysyoQHrIvquc1W18lK7iRWPtSu97SWCV6sRKsa713QCYv7tZU%2BiZKpMsJxoyjgNAYhx0F1Txexk5Q%2B259vr6oq37oq4RkgCsBDFym06p2POcvogCtXlkQx2VZ0V8MUWzVIuVrQeINYPg2sE%2BwUHYb7btP05T3XjHUEd3tFT%2B7VvdLXlB7sOV9Isu8Uq6r%2FcZ5gvafLSW7Nb%2FiIuNzXPLkH7G8Cg3WBE4KYpon5PLmvGBp9FGiMVs3EgiMkUfPklMMEYOEbwyNqE28cIbE7Scvd1tY1ma8yIs7GoIL%2FzZr0gB6J9MJVyeEvDsR%2BMCmnZ4TU6oYsTK1VkveJS%2BW7cR8gXrNXB0bN%2BK%2BqcDzDWhQk3OAnZz%2FG2Jfa3k1fIcmw1Gdvt26Yn9iSDE%2B3sCPdnnss2J41aya3gQCAaZWcWSIJvmyPYIN27z5mzGVmLV4skIB0UF4PmcQTsC0U8zIB3u8oPniY7Y0Q0M%2BTE3G0u2WjMMae470GOqUBkfATuuOHNE6xej765LTukj05gQW6tujvbjwOoRsePb8DBv6Ab7Xwhus0hQOFoPRwDU7xEkPRdQLmJzWKCbT5GRx45CRm25DNsGQYTVGqcSOyxhfVDTwWHlshT%2F9eRkaVYVVYNuXsYAdMIQ7kbvO%2BK2gs2G%2BbtXjeUL6qcoyQWNGVfiIo4Oohr3wdgxPi%2FPbNhaVuiTxz233vtBLVSa7sqTwOuPcY&X-Amz-Signature=2ae9c428c0d0515228e71542f74792c112bcf7c6784e02ef1c211f620f6ce393&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
