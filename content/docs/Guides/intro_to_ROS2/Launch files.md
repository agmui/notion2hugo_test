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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637OVAVSP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGOc1QgsiSh0pe6RZFxkS4SWJpyAMYaPhjFxoc0QfY6QIgCjdhJ4U3%2BjIiaQZw1SZOHuychyM34pNLRESW71Maak0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdOMrYye8PXUyhErSrcA74ey2umCGzSpHrTc8CjkdSup3eIKVTxTmJTWKJla39BsC7iCBaQ%2BOMSACMa0BNxWLvlPMLP7xmGGD7OfbV3yDo4C8nBgcqsn8r3Z7rdOLc8UhZ157wXqqj%2F0pd1GgveYeraOZkPGnq6KtU3h%2BKPtU9wKVVGLdAAdfNxeSG9Tft0YtdgOXc6bv0ckTVmNfE50dyv5hCWWZ%2B7BWEekT3Ue3Su2%2BM4FDWaX%2F73WUP9%2BmFaZU2N0apr8LycEfc2hHnVDz2mrVEHs%2F4K%2BywB7VSkqCHy0FFxVovX7A%2BACIZTBdS%2Fl3LFU0A9QOi%2FUEi9vkdbx9kNHt1FZQlCpDJ2xhoYN10Al10oPkWLwlTBc8ybEW7DUB%2B4OQ93PYnfvgM2VTVjIi%2Bg4AJZlTo2ZxQ4ZIxiPxRmV7rcjM5Qeo%2FaU7b%2BirEbsVw%2FNPM%2FHxhqojdBCv7nMtGWJlNxCaPt13mXx%2BrUZzm3uZM4aFt%2BvZzWajHgDdatzd3sHxYtlhSwQ08Q3f5krz0rXg0chDxVxFFhqXlawLAi6AM6JCv6eH%2F8USR%2FDQVMzQEgV6hR4lZXBB0GmOa5f7luqZdy8m2cKgGDxeexLw%2FO4vAy1XxU%2FS7UYDThd9IafX1vqcSzQey4FfS5MNL%2BvMMGOqUB9Yj5jU0VZ4PUVqf7ECbMOQ%2FQP91H9Dh1L%2FOlNcWEOOcJQpR9xP95I%2FCNpyF%2BV5XJGJaC7AN38VfIEQCc5DGqLtVFMjBowNcDBS%2FRxzob1xv6tSpEwd41KuypSON9oGv%2FU88Zr3cavpoj%2Blu21Q1V1Js9CdcweHZVVcgn82OD1SgPP3thgyxfnQpWoNudilW909R8OXizybcJmuhvdNEcHAJhzYVh&X-Amz-Signature=e8c4b0c8d0d4f35fa3ea2f0622aaccf8e43118f17b46faa8abc711183442f935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637OVAVSP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGOc1QgsiSh0pe6RZFxkS4SWJpyAMYaPhjFxoc0QfY6QIgCjdhJ4U3%2BjIiaQZw1SZOHuychyM34pNLRESW71Maak0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdOMrYye8PXUyhErSrcA74ey2umCGzSpHrTc8CjkdSup3eIKVTxTmJTWKJla39BsC7iCBaQ%2BOMSACMa0BNxWLvlPMLP7xmGGD7OfbV3yDo4C8nBgcqsn8r3Z7rdOLc8UhZ157wXqqj%2F0pd1GgveYeraOZkPGnq6KtU3h%2BKPtU9wKVVGLdAAdfNxeSG9Tft0YtdgOXc6bv0ckTVmNfE50dyv5hCWWZ%2B7BWEekT3Ue3Su2%2BM4FDWaX%2F73WUP9%2BmFaZU2N0apr8LycEfc2hHnVDz2mrVEHs%2F4K%2BywB7VSkqCHy0FFxVovX7A%2BACIZTBdS%2Fl3LFU0A9QOi%2FUEi9vkdbx9kNHt1FZQlCpDJ2xhoYN10Al10oPkWLwlTBc8ybEW7DUB%2B4OQ93PYnfvgM2VTVjIi%2Bg4AJZlTo2ZxQ4ZIxiPxRmV7rcjM5Qeo%2FaU7b%2BirEbsVw%2FNPM%2FHxhqojdBCv7nMtGWJlNxCaPt13mXx%2BrUZzm3uZM4aFt%2BvZzWajHgDdatzd3sHxYtlhSwQ08Q3f5krz0rXg0chDxVxFFhqXlawLAi6AM6JCv6eH%2F8USR%2FDQVMzQEgV6hR4lZXBB0GmOa5f7luqZdy8m2cKgGDxeexLw%2FO4vAy1XxU%2FS7UYDThd9IafX1vqcSzQey4FfS5MNL%2BvMMGOqUB9Yj5jU0VZ4PUVqf7ECbMOQ%2FQP91H9Dh1L%2FOlNcWEOOcJQpR9xP95I%2FCNpyF%2BV5XJGJaC7AN38VfIEQCc5DGqLtVFMjBowNcDBS%2FRxzob1xv6tSpEwd41KuypSON9oGv%2FU88Zr3cavpoj%2Blu21Q1V1Js9CdcweHZVVcgn82OD1SgPP3thgyxfnQpWoNudilW909R8OXizybcJmuhvdNEcHAJhzYVh&X-Amz-Signature=4633f91ba59b978a96e37d8e8d4ed7b4013ef62a81180e39df9b960e73385404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637OVAVSP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGOc1QgsiSh0pe6RZFxkS4SWJpyAMYaPhjFxoc0QfY6QIgCjdhJ4U3%2BjIiaQZw1SZOHuychyM34pNLRESW71Maak0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdOMrYye8PXUyhErSrcA74ey2umCGzSpHrTc8CjkdSup3eIKVTxTmJTWKJla39BsC7iCBaQ%2BOMSACMa0BNxWLvlPMLP7xmGGD7OfbV3yDo4C8nBgcqsn8r3Z7rdOLc8UhZ157wXqqj%2F0pd1GgveYeraOZkPGnq6KtU3h%2BKPtU9wKVVGLdAAdfNxeSG9Tft0YtdgOXc6bv0ckTVmNfE50dyv5hCWWZ%2B7BWEekT3Ue3Su2%2BM4FDWaX%2F73WUP9%2BmFaZU2N0apr8LycEfc2hHnVDz2mrVEHs%2F4K%2BywB7VSkqCHy0FFxVovX7A%2BACIZTBdS%2Fl3LFU0A9QOi%2FUEi9vkdbx9kNHt1FZQlCpDJ2xhoYN10Al10oPkWLwlTBc8ybEW7DUB%2B4OQ93PYnfvgM2VTVjIi%2Bg4AJZlTo2ZxQ4ZIxiPxRmV7rcjM5Qeo%2FaU7b%2BirEbsVw%2FNPM%2FHxhqojdBCv7nMtGWJlNxCaPt13mXx%2BrUZzm3uZM4aFt%2BvZzWajHgDdatzd3sHxYtlhSwQ08Q3f5krz0rXg0chDxVxFFhqXlawLAi6AM6JCv6eH%2F8USR%2FDQVMzQEgV6hR4lZXBB0GmOa5f7luqZdy8m2cKgGDxeexLw%2FO4vAy1XxU%2FS7UYDThd9IafX1vqcSzQey4FfS5MNL%2BvMMGOqUB9Yj5jU0VZ4PUVqf7ECbMOQ%2FQP91H9Dh1L%2FOlNcWEOOcJQpR9xP95I%2FCNpyF%2BV5XJGJaC7AN38VfIEQCc5DGqLtVFMjBowNcDBS%2FRxzob1xv6tSpEwd41KuypSON9oGv%2FU88Zr3cavpoj%2Blu21Q1V1Js9CdcweHZVVcgn82OD1SgPP3thgyxfnQpWoNudilW909R8OXizybcJmuhvdNEcHAJhzYVh&X-Amz-Signature=f3a635635cf64decb8256b959068bc2d7cff6a6ba32fe320d8ac11e0f544fd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
