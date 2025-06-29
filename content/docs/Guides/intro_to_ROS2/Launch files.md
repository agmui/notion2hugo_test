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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEI2KJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLZPo0ut3XOANG6TbIK1qy%2FOUoUVHiUTWiOk92JnCGRAiEAsCGtrDNCyUpyZqnOgE4d8n%2FSvNq19XT91zxTZm1EC1UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdzZ5bVUSdm5%2FkefyrcA6ky5333SOxejbLSzot7OMv1jEQUVosk8MGyCRC8dxTDdOQtK4gbkpjrbKllZiHIqJhSk2NPlQ2DQOLfBSjm38J3SgrFUVSSnNqhuj8FUm01umRArWRMI47pWUWY0JrGTFICssrm8jbmgQLpfLFK5cbSQuNyi8I9FMlShnWbRUe7WL0PqrLGBekMRcI5nXFvAahjL4tzw81Fv64A4N5XFGq29XhBYoW%2BJ1BbNm59EcON0HdLvPgHjEGF6JcuJff2Ok8hi2T19Z7bdr8nsNokKiNCHZ%2B0CdcvEDoHCGE1C5tRLAYfUuR1G9%2FYHBGsxWfhie7DPzid46FMWRUd%2FIok96fiF4bbmEWwvUNGDc%2Fg%2F9KMykUmeDHxFRQaIHyQhMBJXGI1T3vErmmfa3k6FrlHmhLxVWZ4Xs5fqakK95lpXBo37giVoNmQ%2F7e2OGJnghhPxtI%2BownfKX6FHfybl4at1qkUwMhkuFVr%2FAzPXISClGvt79eieBQ22XlIqNh7XgBfP2%2B9Up0yDI3l8WZ6nkI%2FqtPPp437%2F69TfwpTBJarPSP8TkuuOwi7nvyuPWxDQ85pfl5VSfWe%2FE97K9qmajp7iJCvImBjcQWMe%2Fcw2UTym6fx26%2Bb99BJl8sCA8GZMIqagsMGOqUBVuYQfLvAymniAATFGID41QNKveAqODg%2FtI05zUcPnS9oEnQ6e0PWXVshx5SqMYspSNTf0dYnpuVWkwI%2FjvepTA2Kp47h%2BXQz8YRnZ1vNaVdYnKxgmTVdPsE6QQeUVq93bsHw2uucmI7VU7wbNNLKHYYWO9BrSRcUUom1uaCTBN4eOcruB3AmYpd8SFd8mDpT0t2H0yeXtLguVKyTyFb5Ec336gcl&X-Amz-Signature=4d740d158d18f907b51a4fc366f7a2f66be310a3cce99d8bd54ed1ab302213fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEI2KJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLZPo0ut3XOANG6TbIK1qy%2FOUoUVHiUTWiOk92JnCGRAiEAsCGtrDNCyUpyZqnOgE4d8n%2FSvNq19XT91zxTZm1EC1UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdzZ5bVUSdm5%2FkefyrcA6ky5333SOxejbLSzot7OMv1jEQUVosk8MGyCRC8dxTDdOQtK4gbkpjrbKllZiHIqJhSk2NPlQ2DQOLfBSjm38J3SgrFUVSSnNqhuj8FUm01umRArWRMI47pWUWY0JrGTFICssrm8jbmgQLpfLFK5cbSQuNyi8I9FMlShnWbRUe7WL0PqrLGBekMRcI5nXFvAahjL4tzw81Fv64A4N5XFGq29XhBYoW%2BJ1BbNm59EcON0HdLvPgHjEGF6JcuJff2Ok8hi2T19Z7bdr8nsNokKiNCHZ%2B0CdcvEDoHCGE1C5tRLAYfUuR1G9%2FYHBGsxWfhie7DPzid46FMWRUd%2FIok96fiF4bbmEWwvUNGDc%2Fg%2F9KMykUmeDHxFRQaIHyQhMBJXGI1T3vErmmfa3k6FrlHmhLxVWZ4Xs5fqakK95lpXBo37giVoNmQ%2F7e2OGJnghhPxtI%2BownfKX6FHfybl4at1qkUwMhkuFVr%2FAzPXISClGvt79eieBQ22XlIqNh7XgBfP2%2B9Up0yDI3l8WZ6nkI%2FqtPPp437%2F69TfwpTBJarPSP8TkuuOwi7nvyuPWxDQ85pfl5VSfWe%2FE97K9qmajp7iJCvImBjcQWMe%2Fcw2UTym6fx26%2Bb99BJl8sCA8GZMIqagsMGOqUBVuYQfLvAymniAATFGID41QNKveAqODg%2FtI05zUcPnS9oEnQ6e0PWXVshx5SqMYspSNTf0dYnpuVWkwI%2FjvepTA2Kp47h%2BXQz8YRnZ1vNaVdYnKxgmTVdPsE6QQeUVq93bsHw2uucmI7VU7wbNNLKHYYWO9BrSRcUUom1uaCTBN4eOcruB3AmYpd8SFd8mDpT0t2H0yeXtLguVKyTyFb5Ec336gcl&X-Amz-Signature=9123f2913ccf1936e6c57b0ec85f60fbcfb24d460afeca313bba61088eab7f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEI2KJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLZPo0ut3XOANG6TbIK1qy%2FOUoUVHiUTWiOk92JnCGRAiEAsCGtrDNCyUpyZqnOgE4d8n%2FSvNq19XT91zxTZm1EC1UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdzZ5bVUSdm5%2FkefyrcA6ky5333SOxejbLSzot7OMv1jEQUVosk8MGyCRC8dxTDdOQtK4gbkpjrbKllZiHIqJhSk2NPlQ2DQOLfBSjm38J3SgrFUVSSnNqhuj8FUm01umRArWRMI47pWUWY0JrGTFICssrm8jbmgQLpfLFK5cbSQuNyi8I9FMlShnWbRUe7WL0PqrLGBekMRcI5nXFvAahjL4tzw81Fv64A4N5XFGq29XhBYoW%2BJ1BbNm59EcON0HdLvPgHjEGF6JcuJff2Ok8hi2T19Z7bdr8nsNokKiNCHZ%2B0CdcvEDoHCGE1C5tRLAYfUuR1G9%2FYHBGsxWfhie7DPzid46FMWRUd%2FIok96fiF4bbmEWwvUNGDc%2Fg%2F9KMykUmeDHxFRQaIHyQhMBJXGI1T3vErmmfa3k6FrlHmhLxVWZ4Xs5fqakK95lpXBo37giVoNmQ%2F7e2OGJnghhPxtI%2BownfKX6FHfybl4at1qkUwMhkuFVr%2FAzPXISClGvt79eieBQ22XlIqNh7XgBfP2%2B9Up0yDI3l8WZ6nkI%2FqtPPp437%2F69TfwpTBJarPSP8TkuuOwi7nvyuPWxDQ85pfl5VSfWe%2FE97K9qmajp7iJCvImBjcQWMe%2Fcw2UTym6fx26%2Bb99BJl8sCA8GZMIqagsMGOqUBVuYQfLvAymniAATFGID41QNKveAqODg%2FtI05zUcPnS9oEnQ6e0PWXVshx5SqMYspSNTf0dYnpuVWkwI%2FjvepTA2Kp47h%2BXQz8YRnZ1vNaVdYnKxgmTVdPsE6QQeUVq93bsHw2uucmI7VU7wbNNLKHYYWO9BrSRcUUom1uaCTBN4eOcruB3AmYpd8SFd8mDpT0t2H0yeXtLguVKyTyFb5Ec336gcl&X-Amz-Signature=b967cc8f50b1ad7cf73ec6a17fe0eb9533ec4525b8ee5e5799bac9d630a04783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
