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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFNOFJY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfGtzgfj%2FAzH8JQrIuEVoPGu2TAjyDGD%2BMNq9Qlki4tgIgJ%2BXz%2B%2Bgzm0gx7ldCK8j5PZCVDa3EGLF2yLrBrudaSKwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIgAHbtUtlj2W1b73SrcA5VtrklnzK0EWBWx%2Fw8BurwdGHYT%2BHAZwFfK8AnEfv0C%2B0My1jAwLVWgzkBTkJ4KYFEWgocnEPlN0C2s5PEushEJFr1W7E%2BKwN%2BeRi7GZDy%2BFQOz2nnp%2BNLrAMvQBU1hba%2FsAB2ILn3%2Bg8UfgUxBr1wNunkBUF4rzwRwiEsN9uEZTAvBwK8CI9j18eMvTbpamnbQWnhIwqU9p%2BI8WJ0HlEtaTcQzCicIiLy04RQlmlef4tfoPKLcj57LdWHnvXU4ctv3OVsew4wFOyxP6Suc0dIlFU7ZkRFI2UQc9qB7uelEWXFWOxdSXQ093HQjQU2UDHn44VBlTI3rXmK%2Ff77v3CpqfLoejTH35cVFUFDeDf2sn76Go%2Bsp7Chnwrekobr6%2FDVXo96TFTm7zjZZEzaoAEOoGK%2Fc6e9PI8wMrhySMlI4CVMA4X76Raq329EWRlOCmN8p7ckBgYsyT1MosFTfJYjxm3v4y%2FPQPOJ6sXWb6ClCFtgEStz0DzBuidf4UCHmYqmxGOORVPxnaRQsdHNd2n2v80eOjSJo1B08XXTmNuhJHjFNGlKUiE7c0TDcdnWny0F1ImWhH4krAjgyQp36As8ujcnYdTNLpEjpFlPks2cyB3j7G4eipHrjQGNTMM%2Bez8EGOqUByPR2g0N7Ec6rHPzaZ7hfesoxwbjgx%2FvRcIcprcOueo%2BYn1TTz%2B8fzFsjI0bTlaWWraBax%2Bahbs8dkcKiLpuGhwgjZ2b%2FTV%2FeQdXrcIXefpOp3YL0gsANh2o95B%2FcurmIW0Yd%2BdVzewMSa0vpDS0jqr3GPvby9LO%2BCMUfYdYrzwyqVGkGC6357v%2FKH8QkZ%2BKzWb7S8DYQBUc3XFaJAKjQ6YoKcvJr&X-Amz-Signature=abfe1edf7c3a5256a74ca70a017ccf3d4ecc06be55f989a04819d6e0e9adcd70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFNOFJY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfGtzgfj%2FAzH8JQrIuEVoPGu2TAjyDGD%2BMNq9Qlki4tgIgJ%2BXz%2B%2Bgzm0gx7ldCK8j5PZCVDa3EGLF2yLrBrudaSKwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIgAHbtUtlj2W1b73SrcA5VtrklnzK0EWBWx%2Fw8BurwdGHYT%2BHAZwFfK8AnEfv0C%2B0My1jAwLVWgzkBTkJ4KYFEWgocnEPlN0C2s5PEushEJFr1W7E%2BKwN%2BeRi7GZDy%2BFQOz2nnp%2BNLrAMvQBU1hba%2FsAB2ILn3%2Bg8UfgUxBr1wNunkBUF4rzwRwiEsN9uEZTAvBwK8CI9j18eMvTbpamnbQWnhIwqU9p%2BI8WJ0HlEtaTcQzCicIiLy04RQlmlef4tfoPKLcj57LdWHnvXU4ctv3OVsew4wFOyxP6Suc0dIlFU7ZkRFI2UQc9qB7uelEWXFWOxdSXQ093HQjQU2UDHn44VBlTI3rXmK%2Ff77v3CpqfLoejTH35cVFUFDeDf2sn76Go%2Bsp7Chnwrekobr6%2FDVXo96TFTm7zjZZEzaoAEOoGK%2Fc6e9PI8wMrhySMlI4CVMA4X76Raq329EWRlOCmN8p7ckBgYsyT1MosFTfJYjxm3v4y%2FPQPOJ6sXWb6ClCFtgEStz0DzBuidf4UCHmYqmxGOORVPxnaRQsdHNd2n2v80eOjSJo1B08XXTmNuhJHjFNGlKUiE7c0TDcdnWny0F1ImWhH4krAjgyQp36As8ujcnYdTNLpEjpFlPks2cyB3j7G4eipHrjQGNTMM%2Bez8EGOqUByPR2g0N7Ec6rHPzaZ7hfesoxwbjgx%2FvRcIcprcOueo%2BYn1TTz%2B8fzFsjI0bTlaWWraBax%2Bahbs8dkcKiLpuGhwgjZ2b%2FTV%2FeQdXrcIXefpOp3YL0gsANh2o95B%2FcurmIW0Yd%2BdVzewMSa0vpDS0jqr3GPvby9LO%2BCMUfYdYrzwyqVGkGC6357v%2FKH8QkZ%2BKzWb7S8DYQBUc3XFaJAKjQ6YoKcvJr&X-Amz-Signature=14e20809cdbdd65f017cc84e6de933b18b013fc62b3b05c6ba67e1d1a6e45d99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFNOFJY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfGtzgfj%2FAzH8JQrIuEVoPGu2TAjyDGD%2BMNq9Qlki4tgIgJ%2BXz%2B%2Bgzm0gx7ldCK8j5PZCVDa3EGLF2yLrBrudaSKwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIgAHbtUtlj2W1b73SrcA5VtrklnzK0EWBWx%2Fw8BurwdGHYT%2BHAZwFfK8AnEfv0C%2B0My1jAwLVWgzkBTkJ4KYFEWgocnEPlN0C2s5PEushEJFr1W7E%2BKwN%2BeRi7GZDy%2BFQOz2nnp%2BNLrAMvQBU1hba%2FsAB2ILn3%2Bg8UfgUxBr1wNunkBUF4rzwRwiEsN9uEZTAvBwK8CI9j18eMvTbpamnbQWnhIwqU9p%2BI8WJ0HlEtaTcQzCicIiLy04RQlmlef4tfoPKLcj57LdWHnvXU4ctv3OVsew4wFOyxP6Suc0dIlFU7ZkRFI2UQc9qB7uelEWXFWOxdSXQ093HQjQU2UDHn44VBlTI3rXmK%2Ff77v3CpqfLoejTH35cVFUFDeDf2sn76Go%2Bsp7Chnwrekobr6%2FDVXo96TFTm7zjZZEzaoAEOoGK%2Fc6e9PI8wMrhySMlI4CVMA4X76Raq329EWRlOCmN8p7ckBgYsyT1MosFTfJYjxm3v4y%2FPQPOJ6sXWb6ClCFtgEStz0DzBuidf4UCHmYqmxGOORVPxnaRQsdHNd2n2v80eOjSJo1B08XXTmNuhJHjFNGlKUiE7c0TDcdnWny0F1ImWhH4krAjgyQp36As8ujcnYdTNLpEjpFlPks2cyB3j7G4eipHrjQGNTMM%2Bez8EGOqUByPR2g0N7Ec6rHPzaZ7hfesoxwbjgx%2FvRcIcprcOueo%2BYn1TTz%2B8fzFsjI0bTlaWWraBax%2Bahbs8dkcKiLpuGhwgjZ2b%2FTV%2FeQdXrcIXefpOp3YL0gsANh2o95B%2FcurmIW0Yd%2BdVzewMSa0vpDS0jqr3GPvby9LO%2BCMUfYdYrzwyqVGkGC6357v%2FKH8QkZ%2BKzWb7S8DYQBUc3XFaJAKjQ6YoKcvJr&X-Amz-Signature=3a9156682b2aecb9d05b7baa40547623472068edbbe55056c8f63ece8821c0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
