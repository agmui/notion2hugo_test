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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEELF7A%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwBpMTqu5rqTFb4gD%2F8D99zgZLJr5piQB4SSkO5iJQnAiEAjUwHd%2FlebsnaSHUY7U3IXnEDzJhwEx9tItRy5%2Fg0ycwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC3EZ1Sh73RolEqmSrcAyixpbWc5AvHMv0Nhtt0rKGSdcNJob9gaadr%2FKDlhRpts%2BTBCwpCl7cYznPAPHRMGwczIENyn2Jka6emcJBKNi3zosUMkXTmFaefz0xK%2B2Eg3gcMa47Gz4jOZZdpinSNtAmyJxLSpZi%2Bm2qJlBL7b8iip1A%2FCaQDV%2Bu%2Fkh4k77Wq38pZPCjKhgmQjNuFmFzfLaB%2F4VQrOjU58nE0o%2FIGj8FOxJHHVWuoEhGZpo3VoA3Sr%2FzSUlU0yl1yrhoswbjg2Un%2B8UravuYCHcSnaagc18X6od4lFt6fKKCFYCVTJxCGElY4nYWB7Gfx6ifhJpfV3ayGfh6n1m07CrSi4YuJJoyqndkdi12Jmt8xvl9C6wlyhh01fC1eNhVMJtbbz%2B6u66%2B1dvtIfPlM%2BYYehHPtCXnVwFiklU81atnuDomPXx4ONd0YF5pPutdmHOImS%2BaJk8vmzu7rMHb0I3RCGjuHdwaGCVO99uhAHRIpt9oPOzPRqoYTp88Aoz9cgXDulgskT4Dzcq2uQdN2zY2V%2F%2BlH3kifjuVOPPN0qodIm%2BFUD4kvtiXsFBpDSH1NiLeJh7DWd68O7Qxe%2Bxty%2FZrmdst6FajDL0nPcj1W52wE%2FHP6ZvckKEzOEBm9MRvWdLuTMMvI88MGOqUBGsft%2FEPZ%2F6qqAhgeCzFS6zwuznOMJGG7CwzKGCQa9JbfjoeMQUVAMpu5xtl9s6z7OvugNY0ZVf9cmcfPXN0e0dvZsSzKWPjq2ypv1q844zoRsVkERSXKDMRBOyvPPqgGRM48r9UOZY7utYVchBgnjdto1EZRzt9gwD%2FTISBXKPfximxZz1TYgvt9PAroA08XWkJSbLWV0YqReWlQF4XnA20N0iGU&X-Amz-Signature=4a063d57993ed209f3890b9ce84f44dabd433ebf26bbd630315597d932a388f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEELF7A%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwBpMTqu5rqTFb4gD%2F8D99zgZLJr5piQB4SSkO5iJQnAiEAjUwHd%2FlebsnaSHUY7U3IXnEDzJhwEx9tItRy5%2Fg0ycwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC3EZ1Sh73RolEqmSrcAyixpbWc5AvHMv0Nhtt0rKGSdcNJob9gaadr%2FKDlhRpts%2BTBCwpCl7cYznPAPHRMGwczIENyn2Jka6emcJBKNi3zosUMkXTmFaefz0xK%2B2Eg3gcMa47Gz4jOZZdpinSNtAmyJxLSpZi%2Bm2qJlBL7b8iip1A%2FCaQDV%2Bu%2Fkh4k77Wq38pZPCjKhgmQjNuFmFzfLaB%2F4VQrOjU58nE0o%2FIGj8FOxJHHVWuoEhGZpo3VoA3Sr%2FzSUlU0yl1yrhoswbjg2Un%2B8UravuYCHcSnaagc18X6od4lFt6fKKCFYCVTJxCGElY4nYWB7Gfx6ifhJpfV3ayGfh6n1m07CrSi4YuJJoyqndkdi12Jmt8xvl9C6wlyhh01fC1eNhVMJtbbz%2B6u66%2B1dvtIfPlM%2BYYehHPtCXnVwFiklU81atnuDomPXx4ONd0YF5pPutdmHOImS%2BaJk8vmzu7rMHb0I3RCGjuHdwaGCVO99uhAHRIpt9oPOzPRqoYTp88Aoz9cgXDulgskT4Dzcq2uQdN2zY2V%2F%2BlH3kifjuVOPPN0qodIm%2BFUD4kvtiXsFBpDSH1NiLeJh7DWd68O7Qxe%2Bxty%2FZrmdst6FajDL0nPcj1W52wE%2FHP6ZvckKEzOEBm9MRvWdLuTMMvI88MGOqUBGsft%2FEPZ%2F6qqAhgeCzFS6zwuznOMJGG7CwzKGCQa9JbfjoeMQUVAMpu5xtl9s6z7OvugNY0ZVf9cmcfPXN0e0dvZsSzKWPjq2ypv1q844zoRsVkERSXKDMRBOyvPPqgGRM48r9UOZY7utYVchBgnjdto1EZRzt9gwD%2FTISBXKPfximxZz1TYgvt9PAroA08XWkJSbLWV0YqReWlQF4XnA20N0iGU&X-Amz-Signature=48937864e12cf45aa0bc04f562cb513d46b8df82467f33c207fdcbd1d3bbdcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEELF7A%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwBpMTqu5rqTFb4gD%2F8D99zgZLJr5piQB4SSkO5iJQnAiEAjUwHd%2FlebsnaSHUY7U3IXnEDzJhwEx9tItRy5%2Fg0ycwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC3EZ1Sh73RolEqmSrcAyixpbWc5AvHMv0Nhtt0rKGSdcNJob9gaadr%2FKDlhRpts%2BTBCwpCl7cYznPAPHRMGwczIENyn2Jka6emcJBKNi3zosUMkXTmFaefz0xK%2B2Eg3gcMa47Gz4jOZZdpinSNtAmyJxLSpZi%2Bm2qJlBL7b8iip1A%2FCaQDV%2Bu%2Fkh4k77Wq38pZPCjKhgmQjNuFmFzfLaB%2F4VQrOjU58nE0o%2FIGj8FOxJHHVWuoEhGZpo3VoA3Sr%2FzSUlU0yl1yrhoswbjg2Un%2B8UravuYCHcSnaagc18X6od4lFt6fKKCFYCVTJxCGElY4nYWB7Gfx6ifhJpfV3ayGfh6n1m07CrSi4YuJJoyqndkdi12Jmt8xvl9C6wlyhh01fC1eNhVMJtbbz%2B6u66%2B1dvtIfPlM%2BYYehHPtCXnVwFiklU81atnuDomPXx4ONd0YF5pPutdmHOImS%2BaJk8vmzu7rMHb0I3RCGjuHdwaGCVO99uhAHRIpt9oPOzPRqoYTp88Aoz9cgXDulgskT4Dzcq2uQdN2zY2V%2F%2BlH3kifjuVOPPN0qodIm%2BFUD4kvtiXsFBpDSH1NiLeJh7DWd68O7Qxe%2Bxty%2FZrmdst6FajDL0nPcj1W52wE%2FHP6ZvckKEzOEBm9MRvWdLuTMMvI88MGOqUBGsft%2FEPZ%2F6qqAhgeCzFS6zwuznOMJGG7CwzKGCQa9JbfjoeMQUVAMpu5xtl9s6z7OvugNY0ZVf9cmcfPXN0e0dvZsSzKWPjq2ypv1q844zoRsVkERSXKDMRBOyvPPqgGRM48r9UOZY7utYVchBgnjdto1EZRzt9gwD%2FTISBXKPfximxZz1TYgvt9PAroA08XWkJSbLWV0YqReWlQF4XnA20N0iGU&X-Amz-Signature=81e666941d7f9411a5f94f61b49348a4d8c38cb692232a249c7486b1d1e08657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
