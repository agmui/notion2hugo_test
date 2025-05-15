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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMWBUIV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyrPb9yw01P%2B3CTokhpVX224rtp%2FjrEXNXlKdbQcdUGAIgJMWHRjr0qngKfNu7FcxdaAcbgEUd6q1DDigKvaLDcVIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIiPbAeso9GIOEckGSrcAwunLuN5gD06q067VYLk41Ci1yeSrQimH6bH5H6DD500enBxHMYQ0K%2BHawH4AUVpVLbFsBBKvAsyV2ZoPNz55qF0KWOWLlf7BiEOPMpDrPZwcDNlG8RQ9jKkA%2BrfM9J6tdMb9oPv9lhEMz9cXvIGB1UTerV75WCYMaXHRL13U73gPYj1f%2B3dTQHwk0AClWJqXwCoEN8ciE18DKFjf5Ypb0wfK%2B9YWPSPbxmgrK44xocStYkiV4DD%2Fv7%2FpAvKU8tnlT7fVe2ydjsJUMgX2HcTE3qGmxsiDpUTNcyK2S6Tn0hRyhKyjVJ1phk6usrUY2xcZZQpn%2BHlyhrnDGEjLEdxz5iL%2FPtiPzGThziCmxBg7U0D01Mz5%2BkV9tynDHLoave3ES9%2BTCsbfmfJ%2BCWGsLuIR6tICJnISht9yol6jKIAHQiuXKnjjbCe58%2FtsXAZRwUxSpifwpylRa6Ua4NDX6zkSZYfRCBVa6Z%2BcBbj23%2BIdPfe7b9nghTrfLZaxMRnngVmNU6wF9wUj1sYoEYZ6H4oRKhaARX0lCOp0eIElu7kE1vMD3X3iV7OME59D4IUv%2BFIznrkOTkPQamijbGI82jKOKMe5TyD1%2BPWH%2FhqHa4PNp9UsC196EgL3PJu9d5OMKjqlcEGOqUB1T0nBzFXx6sBeaPFhkU1Qi8y2rPNGFKl%2FtdGiGmZ1vQ4ZvDLZmRUbH%2B49KQLGyVEpenuWre%2B2%2Fi2o1Ncssow6LeqbBJsYAshNzJin5M1watetuVxJGJ9vQZXwgUHc1gLQ8dUOcELOQKzvTPZ%2FBMl2aXv6ydUvIYeuTrznXX8i1pzS409DKKq7JSqZo2Xlu43G2M6qCJU4vdCSuYQZmuauK29U7%2Bu&X-Amz-Signature=57eac094d5031686e05c3b21d063ed5aae1687638627f09860cda15b5573aa97&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMWBUIV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyrPb9yw01P%2B3CTokhpVX224rtp%2FjrEXNXlKdbQcdUGAIgJMWHRjr0qngKfNu7FcxdaAcbgEUd6q1DDigKvaLDcVIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIiPbAeso9GIOEckGSrcAwunLuN5gD06q067VYLk41Ci1yeSrQimH6bH5H6DD500enBxHMYQ0K%2BHawH4AUVpVLbFsBBKvAsyV2ZoPNz55qF0KWOWLlf7BiEOPMpDrPZwcDNlG8RQ9jKkA%2BrfM9J6tdMb9oPv9lhEMz9cXvIGB1UTerV75WCYMaXHRL13U73gPYj1f%2B3dTQHwk0AClWJqXwCoEN8ciE18DKFjf5Ypb0wfK%2B9YWPSPbxmgrK44xocStYkiV4DD%2Fv7%2FpAvKU8tnlT7fVe2ydjsJUMgX2HcTE3qGmxsiDpUTNcyK2S6Tn0hRyhKyjVJ1phk6usrUY2xcZZQpn%2BHlyhrnDGEjLEdxz5iL%2FPtiPzGThziCmxBg7U0D01Mz5%2BkV9tynDHLoave3ES9%2BTCsbfmfJ%2BCWGsLuIR6tICJnISht9yol6jKIAHQiuXKnjjbCe58%2FtsXAZRwUxSpifwpylRa6Ua4NDX6zkSZYfRCBVa6Z%2BcBbj23%2BIdPfe7b9nghTrfLZaxMRnngVmNU6wF9wUj1sYoEYZ6H4oRKhaARX0lCOp0eIElu7kE1vMD3X3iV7OME59D4IUv%2BFIznrkOTkPQamijbGI82jKOKMe5TyD1%2BPWH%2FhqHa4PNp9UsC196EgL3PJu9d5OMKjqlcEGOqUB1T0nBzFXx6sBeaPFhkU1Qi8y2rPNGFKl%2FtdGiGmZ1vQ4ZvDLZmRUbH%2B49KQLGyVEpenuWre%2B2%2Fi2o1Ncssow6LeqbBJsYAshNzJin5M1watetuVxJGJ9vQZXwgUHc1gLQ8dUOcELOQKzvTPZ%2FBMl2aXv6ydUvIYeuTrznXX8i1pzS409DKKq7JSqZo2Xlu43G2M6qCJU4vdCSuYQZmuauK29U7%2Bu&X-Amz-Signature=22f35fd6692d28d47a07950accb0bfcda4c1cc186931d7fbe07d34fe78662607&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMWBUIV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyrPb9yw01P%2B3CTokhpVX224rtp%2FjrEXNXlKdbQcdUGAIgJMWHRjr0qngKfNu7FcxdaAcbgEUd6q1DDigKvaLDcVIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIiPbAeso9GIOEckGSrcAwunLuN5gD06q067VYLk41Ci1yeSrQimH6bH5H6DD500enBxHMYQ0K%2BHawH4AUVpVLbFsBBKvAsyV2ZoPNz55qF0KWOWLlf7BiEOPMpDrPZwcDNlG8RQ9jKkA%2BrfM9J6tdMb9oPv9lhEMz9cXvIGB1UTerV75WCYMaXHRL13U73gPYj1f%2B3dTQHwk0AClWJqXwCoEN8ciE18DKFjf5Ypb0wfK%2B9YWPSPbxmgrK44xocStYkiV4DD%2Fv7%2FpAvKU8tnlT7fVe2ydjsJUMgX2HcTE3qGmxsiDpUTNcyK2S6Tn0hRyhKyjVJ1phk6usrUY2xcZZQpn%2BHlyhrnDGEjLEdxz5iL%2FPtiPzGThziCmxBg7U0D01Mz5%2BkV9tynDHLoave3ES9%2BTCsbfmfJ%2BCWGsLuIR6tICJnISht9yol6jKIAHQiuXKnjjbCe58%2FtsXAZRwUxSpifwpylRa6Ua4NDX6zkSZYfRCBVa6Z%2BcBbj23%2BIdPfe7b9nghTrfLZaxMRnngVmNU6wF9wUj1sYoEYZ6H4oRKhaARX0lCOp0eIElu7kE1vMD3X3iV7OME59D4IUv%2BFIznrkOTkPQamijbGI82jKOKMe5TyD1%2BPWH%2FhqHa4PNp9UsC196EgL3PJu9d5OMKjqlcEGOqUB1T0nBzFXx6sBeaPFhkU1Qi8y2rPNGFKl%2FtdGiGmZ1vQ4ZvDLZmRUbH%2B49KQLGyVEpenuWre%2B2%2Fi2o1Ncssow6LeqbBJsYAshNzJin5M1watetuVxJGJ9vQZXwgUHc1gLQ8dUOcELOQKzvTPZ%2FBMl2aXv6ydUvIYeuTrznXX8i1pzS409DKKq7JSqZo2Xlu43G2M6qCJU4vdCSuYQZmuauK29U7%2Bu&X-Amz-Signature=464af8c8250067dee95e29b92fd835743eaafb79fe96da9fdb1eed97b76732bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
