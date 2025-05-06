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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5NAOOV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUuZd3lKu5Q8csLY612rPcr1SclYlGA7ZcbMOaTm2DcgIgHX38YM58D6DgMd94YiPcNhcOUdao0siIR2EXWLxN7hUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAvUALod5E89hDIgISrcA6W7OkfTqtlJZr1BR0LqEWUFkls7TmeDIE5epQVwcLTcUICHBxm3WyUZuR8b3zyTFsML4quYtxXDTLSr9R0tf5vAWwvdOxPsL%2FW57Mm7vqrr70KbQcd3LHDS7hVc7WK%2Ftvp5h2o5MdpzIzPPTBxaGyKc0HGTbSURKlFQNyLaK%2Bifad4%2Fu3JidZ02Hq4SMdZxo%2Bvz2GLGbPEShdFzFJYYWbEdpPpfGrOdUknwVsF%2BQbLH3A3XmNGio9O17%2BsWo8SkkpsjLJ1iaPGkO2TGtEOIuW9UXE%2BGWghyKnTvDd7prpA0nHTZwsfP6qyY3GnARDPpyPp2m%2F8%2FB8Fz%2FICeakT1SYleoUltN9qQDCaIHgCWPD2m%2BYqZ2kVi6ts9Z3GkYIYj8d3ksMS%2Bp%2B9eXnE0eej4jL0tpfaMKTq274ICJG5pujmk41Ow1%2B6zpd6mYqTkH85CG8xXQA661uQXh%2FvWfXCcV%2FM4%2BqcdEQ6pPsrw3mIVLYtm4DUZo40jZItIvXB4Uzxplx7bIoLr%2Fx%2F51%2FiJxXmcKC%2Fu2SHp27oX1U%2FMfRCiw5TH5KimWrjS1%2FBhKT7EcnA3mSbFTRVLz%2Bg9erNThtaMonMnMwU0LqhEOvrI3N2COvx4usk04XiJJwfMD%2BwYMOCw5cAGOqUB2HMbrq0MRLmEK27aAputYQUS3%2BRB290lDXMCgQg8t9ctQOuEKHTuNZv9W1lQqqzMjuQbBmbajJE7cYv8lBHnc5HSEyT6SJH%2BmsLtFn1OJ67mUBxxFpNsxHWxBbu3bkHjAXZFmvD5cnqAH%2BStRTEMx2MJWTps7Odzi1Q4xDy5I%2Bpk9KR8%2FwPZzKHps2u4spp8sPcPE0xEivvoPl4UDlpLWEbdS%2FCj&X-Amz-Signature=5ea6a02fabe673a8847c2c1a1d8333a4ddb78c10aec0f2c23a6f2d0a71c384db&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5NAOOV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUuZd3lKu5Q8csLY612rPcr1SclYlGA7ZcbMOaTm2DcgIgHX38YM58D6DgMd94YiPcNhcOUdao0siIR2EXWLxN7hUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAvUALod5E89hDIgISrcA6W7OkfTqtlJZr1BR0LqEWUFkls7TmeDIE5epQVwcLTcUICHBxm3WyUZuR8b3zyTFsML4quYtxXDTLSr9R0tf5vAWwvdOxPsL%2FW57Mm7vqrr70KbQcd3LHDS7hVc7WK%2Ftvp5h2o5MdpzIzPPTBxaGyKc0HGTbSURKlFQNyLaK%2Bifad4%2Fu3JidZ02Hq4SMdZxo%2Bvz2GLGbPEShdFzFJYYWbEdpPpfGrOdUknwVsF%2BQbLH3A3XmNGio9O17%2BsWo8SkkpsjLJ1iaPGkO2TGtEOIuW9UXE%2BGWghyKnTvDd7prpA0nHTZwsfP6qyY3GnARDPpyPp2m%2F8%2FB8Fz%2FICeakT1SYleoUltN9qQDCaIHgCWPD2m%2BYqZ2kVi6ts9Z3GkYIYj8d3ksMS%2Bp%2B9eXnE0eej4jL0tpfaMKTq274ICJG5pujmk41Ow1%2B6zpd6mYqTkH85CG8xXQA661uQXh%2FvWfXCcV%2FM4%2BqcdEQ6pPsrw3mIVLYtm4DUZo40jZItIvXB4Uzxplx7bIoLr%2Fx%2F51%2FiJxXmcKC%2Fu2SHp27oX1U%2FMfRCiw5TH5KimWrjS1%2FBhKT7EcnA3mSbFTRVLz%2Bg9erNThtaMonMnMwU0LqhEOvrI3N2COvx4usk04XiJJwfMD%2BwYMOCw5cAGOqUB2HMbrq0MRLmEK27aAputYQUS3%2BRB290lDXMCgQg8t9ctQOuEKHTuNZv9W1lQqqzMjuQbBmbajJE7cYv8lBHnc5HSEyT6SJH%2BmsLtFn1OJ67mUBxxFpNsxHWxBbu3bkHjAXZFmvD5cnqAH%2BStRTEMx2MJWTps7Odzi1Q4xDy5I%2Bpk9KR8%2FwPZzKHps2u4spp8sPcPE0xEivvoPl4UDlpLWEbdS%2FCj&X-Amz-Signature=5785127cc236a5215b9bc1bd495ad446d85d1e810b188b226198a6b828631f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5NAOOV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUuZd3lKu5Q8csLY612rPcr1SclYlGA7ZcbMOaTm2DcgIgHX38YM58D6DgMd94YiPcNhcOUdao0siIR2EXWLxN7hUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAvUALod5E89hDIgISrcA6W7OkfTqtlJZr1BR0LqEWUFkls7TmeDIE5epQVwcLTcUICHBxm3WyUZuR8b3zyTFsML4quYtxXDTLSr9R0tf5vAWwvdOxPsL%2FW57Mm7vqrr70KbQcd3LHDS7hVc7WK%2Ftvp5h2o5MdpzIzPPTBxaGyKc0HGTbSURKlFQNyLaK%2Bifad4%2Fu3JidZ02Hq4SMdZxo%2Bvz2GLGbPEShdFzFJYYWbEdpPpfGrOdUknwVsF%2BQbLH3A3XmNGio9O17%2BsWo8SkkpsjLJ1iaPGkO2TGtEOIuW9UXE%2BGWghyKnTvDd7prpA0nHTZwsfP6qyY3GnARDPpyPp2m%2F8%2FB8Fz%2FICeakT1SYleoUltN9qQDCaIHgCWPD2m%2BYqZ2kVi6ts9Z3GkYIYj8d3ksMS%2Bp%2B9eXnE0eej4jL0tpfaMKTq274ICJG5pujmk41Ow1%2B6zpd6mYqTkH85CG8xXQA661uQXh%2FvWfXCcV%2FM4%2BqcdEQ6pPsrw3mIVLYtm4DUZo40jZItIvXB4Uzxplx7bIoLr%2Fx%2F51%2FiJxXmcKC%2Fu2SHp27oX1U%2FMfRCiw5TH5KimWrjS1%2FBhKT7EcnA3mSbFTRVLz%2Bg9erNThtaMonMnMwU0LqhEOvrI3N2COvx4usk04XiJJwfMD%2BwYMOCw5cAGOqUB2HMbrq0MRLmEK27aAputYQUS3%2BRB290lDXMCgQg8t9ctQOuEKHTuNZv9W1lQqqzMjuQbBmbajJE7cYv8lBHnc5HSEyT6SJH%2BmsLtFn1OJ67mUBxxFpNsxHWxBbu3bkHjAXZFmvD5cnqAH%2BStRTEMx2MJWTps7Odzi1Q4xDy5I%2Bpk9KR8%2FwPZzKHps2u4spp8sPcPE0xEivvoPl4UDlpLWEbdS%2FCj&X-Amz-Signature=e40c301908484a43da9deaba2bcb20905cefa0a897564727214a40a575b4f2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
