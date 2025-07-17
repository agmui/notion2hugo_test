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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MM6H4I%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCB2xm6HfAcB%2BZqkoNl2DoVonsm59kM60OLaoFQg8V0SgIhAIkQfpwFwdSQtvqysa%2BN3QJgX9Bjn6Ju54QMxXJlUjeeKv8DCHwQABoMNjM3NDIzMTgzODA1IgwptwcVGa%2FAvNyWkl0q3AN%2BpsV%2Bz0tOWvkLnkg4bhzlqGPdxnebXSFrm9rQ2RU1vA1KOPbQBes4IUDlH8BIF4Gt7QQrqhYifTkyK%2Fm6%2F4vuKHDJL26o3Mv04Udyf70M4sOI2FmCvqV03DeYaySxIlGzRhX2iaksa2CNE2jVKQ9G6uIrdlCVc44wmKFBuG35pPEXTEBxNTVrOHMpjcYBmp9uHe2Rgt%2B61Ve%2BQAF3%2B71MG4UPIyvcfWEfkdR78zVJ8k8qmPDam0BBrFgZ2SXQZcw0L7gCBHQM6vQld97BBLK0lzsVCCM39Z2NMdz6v42eLP7%2FtS5%2B2MG6RUGegXwnuliiJwaZS4Cw%2Bb2nkxTYVpacrvTDn1qCInrHjbBeIOaJH38nNiBnfiXxbaWbN4%2Fl1rqSHGc7mCU1gB0FCkoW1dgXFgZt%2BDXU04%2FI6fe2tuO6sAAgvErWrPCmnmztS0%2BWMbsQvmzUK7U68ks8EnEiUNNRQ0V%2BQ5majhzMozQIOmOK0x8%2Bmftgac6mH18o4lpvUL01Ub%2BKTNG6yLS0o119YPsKmw6d8PFBwQvPvZE2dvZHKZ%2FrFzYwSYr4NFtWgvmoww4sgN5lRRItMwI8aAbCKXtVJY46jJkeuPXI1uD3c56dCKQ1j%2Bsj4bkDAG3PpTDfjeXDBjqkAcXH5c%2FRvWzQDl3tCxLn3A95rQeI%2B6f8USm3HlytYHdxW%2FPzkNa7f03P9Tojh6NcPnelFBLNtAxaW17WGAEiHVxdF6XeEuovo9SdM8P%2BryoRUSXTfGHWU9jj8y%2BPjOyxX5Hq%2B%2FJg%2FvwtZFSs%2FEBnlZ8LCOeWCOJucSRwwcum8MJ0YrlDEr9Dxa%2FKeoJObTncxQd9mU3h47UNmEJObhHsTvOmwDXv&X-Amz-Signature=dea6fb6a027354d513af5073f1f60e32b3184748db08bb6206750dc5b5e167bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MM6H4I%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCB2xm6HfAcB%2BZqkoNl2DoVonsm59kM60OLaoFQg8V0SgIhAIkQfpwFwdSQtvqysa%2BN3QJgX9Bjn6Ju54QMxXJlUjeeKv8DCHwQABoMNjM3NDIzMTgzODA1IgwptwcVGa%2FAvNyWkl0q3AN%2BpsV%2Bz0tOWvkLnkg4bhzlqGPdxnebXSFrm9rQ2RU1vA1KOPbQBes4IUDlH8BIF4Gt7QQrqhYifTkyK%2Fm6%2F4vuKHDJL26o3Mv04Udyf70M4sOI2FmCvqV03DeYaySxIlGzRhX2iaksa2CNE2jVKQ9G6uIrdlCVc44wmKFBuG35pPEXTEBxNTVrOHMpjcYBmp9uHe2Rgt%2B61Ve%2BQAF3%2B71MG4UPIyvcfWEfkdR78zVJ8k8qmPDam0BBrFgZ2SXQZcw0L7gCBHQM6vQld97BBLK0lzsVCCM39Z2NMdz6v42eLP7%2FtS5%2B2MG6RUGegXwnuliiJwaZS4Cw%2Bb2nkxTYVpacrvTDn1qCInrHjbBeIOaJH38nNiBnfiXxbaWbN4%2Fl1rqSHGc7mCU1gB0FCkoW1dgXFgZt%2BDXU04%2FI6fe2tuO6sAAgvErWrPCmnmztS0%2BWMbsQvmzUK7U68ks8EnEiUNNRQ0V%2BQ5majhzMozQIOmOK0x8%2Bmftgac6mH18o4lpvUL01Ub%2BKTNG6yLS0o119YPsKmw6d8PFBwQvPvZE2dvZHKZ%2FrFzYwSYr4NFtWgvmoww4sgN5lRRItMwI8aAbCKXtVJY46jJkeuPXI1uD3c56dCKQ1j%2Bsj4bkDAG3PpTDfjeXDBjqkAcXH5c%2FRvWzQDl3tCxLn3A95rQeI%2B6f8USm3HlytYHdxW%2FPzkNa7f03P9Tojh6NcPnelFBLNtAxaW17WGAEiHVxdF6XeEuovo9SdM8P%2BryoRUSXTfGHWU9jj8y%2BPjOyxX5Hq%2B%2FJg%2FvwtZFSs%2FEBnlZ8LCOeWCOJucSRwwcum8MJ0YrlDEr9Dxa%2FKeoJObTncxQd9mU3h47UNmEJObhHsTvOmwDXv&X-Amz-Signature=c5b835f61aff7a6a26c43f1c71200b6259b0155033b356332b911d3cc369defd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MM6H4I%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCB2xm6HfAcB%2BZqkoNl2DoVonsm59kM60OLaoFQg8V0SgIhAIkQfpwFwdSQtvqysa%2BN3QJgX9Bjn6Ju54QMxXJlUjeeKv8DCHwQABoMNjM3NDIzMTgzODA1IgwptwcVGa%2FAvNyWkl0q3AN%2BpsV%2Bz0tOWvkLnkg4bhzlqGPdxnebXSFrm9rQ2RU1vA1KOPbQBes4IUDlH8BIF4Gt7QQrqhYifTkyK%2Fm6%2F4vuKHDJL26o3Mv04Udyf70M4sOI2FmCvqV03DeYaySxIlGzRhX2iaksa2CNE2jVKQ9G6uIrdlCVc44wmKFBuG35pPEXTEBxNTVrOHMpjcYBmp9uHe2Rgt%2B61Ve%2BQAF3%2B71MG4UPIyvcfWEfkdR78zVJ8k8qmPDam0BBrFgZ2SXQZcw0L7gCBHQM6vQld97BBLK0lzsVCCM39Z2NMdz6v42eLP7%2FtS5%2B2MG6RUGegXwnuliiJwaZS4Cw%2Bb2nkxTYVpacrvTDn1qCInrHjbBeIOaJH38nNiBnfiXxbaWbN4%2Fl1rqSHGc7mCU1gB0FCkoW1dgXFgZt%2BDXU04%2FI6fe2tuO6sAAgvErWrPCmnmztS0%2BWMbsQvmzUK7U68ks8EnEiUNNRQ0V%2BQ5majhzMozQIOmOK0x8%2Bmftgac6mH18o4lpvUL01Ub%2BKTNG6yLS0o119YPsKmw6d8PFBwQvPvZE2dvZHKZ%2FrFzYwSYr4NFtWgvmoww4sgN5lRRItMwI8aAbCKXtVJY46jJkeuPXI1uD3c56dCKQ1j%2Bsj4bkDAG3PpTDfjeXDBjqkAcXH5c%2FRvWzQDl3tCxLn3A95rQeI%2B6f8USm3HlytYHdxW%2FPzkNa7f03P9Tojh6NcPnelFBLNtAxaW17WGAEiHVxdF6XeEuovo9SdM8P%2BryoRUSXTfGHWU9jj8y%2BPjOyxX5Hq%2B%2FJg%2FvwtZFSs%2FEBnlZ8LCOeWCOJucSRwwcum8MJ0YrlDEr9Dxa%2FKeoJObTncxQd9mU3h47UNmEJObhHsTvOmwDXv&X-Amz-Signature=48aacd73208fc247f16497a8664c240b1734cf77b710f1256dca24752e5ff9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
