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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PORTWO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD2wX%2FJza2OGb9I096jBArQEjq49hweMMzEnJqEYgvmawIgX5vA3bnjXhlEtD8E7Mn3UsBYsfULpspinjv4u3h5lN8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFzm5ZQYmu2y066T9CrcAzD9TLvHht%2B9V%2BZM7Y%2FNErQvtdHoKp7%2BvJyuc1iPaFZtYUDrNSE5%2BmjAC6h5cfcVjRJrbzMMfKY33ih33c253f7M4ynGhiflhurHby6FugoxmlwfM0u2qlMalq6k4%2BP31%2BKjHWLWufeDKHpIwYCrjaRO85SCAe4GqjHDTlDoUM1P%2BJjEMr224%2FulYted6rWnjiGv%2FXLoYUMiIFhdU6yW1ztshzGiAJjRWYafjcli8m13Q%2Btfh20AFk8cx9CLbVodaBmJIBo1i%2BX1N7CXEUzimyoiSXrZcdyNSA%2F%2F6m9HFRA6xCafdpdQ6m4O0Tvx2QUXNO5TqF0kCkL%2BWV8PCvfHWOLCfoxiS%2BkxV1Lz%2BqykiVTlMO0Fm6pxiHbxXiYeRaww67OvcNnGDtjVAjytJtsW7%2B%2FRWO22T%2Bq3PbgtZDtEBEQJEB%2Bp0RZC6jp9g7VdoMnK5SPVXvKP%2BERUWSRMtDkQA1jHMDRHzTipRYLxd03hg1enmzAP6KOFM02WHhwRP46h7sWA7eE4RxY36FEnEwLl7%2BDMwjnVMN0UWzcGB5yz0SQcM%2F%2BmL%2FQu9Pf6b%2F%2FXj91ISDCY3OXqs7iPPkMnOkTGgmO7htZk82YGNJCfFQnrshrpbXe2zqZFkV4DgXREMLWf4cMGOqUBNIzU5Kn57P34c5LiRqfBxA1dtnjCuyY5UJhFWixKUhrUC8Wty6gVDW295QhI8mO4VEaWFiqxqNVMtR6bSYZUUTqoh5sF65UusbKTbO4TmwO2K%2FMEjtyBHajFgmJiB4aJY3IP3IlreifO8x2LNmvtgIxmrPM%2BAlU1dMlHDAraqm4T9mZwqo5ctWW%2BHNQCktYktkFggoJnDnqNUK5FmjNmBqJNmM15&X-Amz-Signature=7ffbb42547cfcfe476cce60cdbf22d9dcda9068eb079d40512834ec5fa8e1222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PORTWO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD2wX%2FJza2OGb9I096jBArQEjq49hweMMzEnJqEYgvmawIgX5vA3bnjXhlEtD8E7Mn3UsBYsfULpspinjv4u3h5lN8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFzm5ZQYmu2y066T9CrcAzD9TLvHht%2B9V%2BZM7Y%2FNErQvtdHoKp7%2BvJyuc1iPaFZtYUDrNSE5%2BmjAC6h5cfcVjRJrbzMMfKY33ih33c253f7M4ynGhiflhurHby6FugoxmlwfM0u2qlMalq6k4%2BP31%2BKjHWLWufeDKHpIwYCrjaRO85SCAe4GqjHDTlDoUM1P%2BJjEMr224%2FulYted6rWnjiGv%2FXLoYUMiIFhdU6yW1ztshzGiAJjRWYafjcli8m13Q%2Btfh20AFk8cx9CLbVodaBmJIBo1i%2BX1N7CXEUzimyoiSXrZcdyNSA%2F%2F6m9HFRA6xCafdpdQ6m4O0Tvx2QUXNO5TqF0kCkL%2BWV8PCvfHWOLCfoxiS%2BkxV1Lz%2BqykiVTlMO0Fm6pxiHbxXiYeRaww67OvcNnGDtjVAjytJtsW7%2B%2FRWO22T%2Bq3PbgtZDtEBEQJEB%2Bp0RZC6jp9g7VdoMnK5SPVXvKP%2BERUWSRMtDkQA1jHMDRHzTipRYLxd03hg1enmzAP6KOFM02WHhwRP46h7sWA7eE4RxY36FEnEwLl7%2BDMwjnVMN0UWzcGB5yz0SQcM%2F%2BmL%2FQu9Pf6b%2F%2FXj91ISDCY3OXqs7iPPkMnOkTGgmO7htZk82YGNJCfFQnrshrpbXe2zqZFkV4DgXREMLWf4cMGOqUBNIzU5Kn57P34c5LiRqfBxA1dtnjCuyY5UJhFWixKUhrUC8Wty6gVDW295QhI8mO4VEaWFiqxqNVMtR6bSYZUUTqoh5sF65UusbKTbO4TmwO2K%2FMEjtyBHajFgmJiB4aJY3IP3IlreifO8x2LNmvtgIxmrPM%2BAlU1dMlHDAraqm4T9mZwqo5ctWW%2BHNQCktYktkFggoJnDnqNUK5FmjNmBqJNmM15&X-Amz-Signature=c9ccb89748dd8609a0d512a25b795bf0b84ee19320339c2d226f4a3ec50ab076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PORTWO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD2wX%2FJza2OGb9I096jBArQEjq49hweMMzEnJqEYgvmawIgX5vA3bnjXhlEtD8E7Mn3UsBYsfULpspinjv4u3h5lN8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFzm5ZQYmu2y066T9CrcAzD9TLvHht%2B9V%2BZM7Y%2FNErQvtdHoKp7%2BvJyuc1iPaFZtYUDrNSE5%2BmjAC6h5cfcVjRJrbzMMfKY33ih33c253f7M4ynGhiflhurHby6FugoxmlwfM0u2qlMalq6k4%2BP31%2BKjHWLWufeDKHpIwYCrjaRO85SCAe4GqjHDTlDoUM1P%2BJjEMr224%2FulYted6rWnjiGv%2FXLoYUMiIFhdU6yW1ztshzGiAJjRWYafjcli8m13Q%2Btfh20AFk8cx9CLbVodaBmJIBo1i%2BX1N7CXEUzimyoiSXrZcdyNSA%2F%2F6m9HFRA6xCafdpdQ6m4O0Tvx2QUXNO5TqF0kCkL%2BWV8PCvfHWOLCfoxiS%2BkxV1Lz%2BqykiVTlMO0Fm6pxiHbxXiYeRaww67OvcNnGDtjVAjytJtsW7%2B%2FRWO22T%2Bq3PbgtZDtEBEQJEB%2Bp0RZC6jp9g7VdoMnK5SPVXvKP%2BERUWSRMtDkQA1jHMDRHzTipRYLxd03hg1enmzAP6KOFM02WHhwRP46h7sWA7eE4RxY36FEnEwLl7%2BDMwjnVMN0UWzcGB5yz0SQcM%2F%2BmL%2FQu9Pf6b%2F%2FXj91ISDCY3OXqs7iPPkMnOkTGgmO7htZk82YGNJCfFQnrshrpbXe2zqZFkV4DgXREMLWf4cMGOqUBNIzU5Kn57P34c5LiRqfBxA1dtnjCuyY5UJhFWixKUhrUC8Wty6gVDW295QhI8mO4VEaWFiqxqNVMtR6bSYZUUTqoh5sF65UusbKTbO4TmwO2K%2FMEjtyBHajFgmJiB4aJY3IP3IlreifO8x2LNmvtgIxmrPM%2BAlU1dMlHDAraqm4T9mZwqo5ctWW%2BHNQCktYktkFggoJnDnqNUK5FmjNmBqJNmM15&X-Amz-Signature=e8090487111fd10a3c00ad9fc3e92eca8f2237d7a2ef560fe6650ae2eeaed04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
