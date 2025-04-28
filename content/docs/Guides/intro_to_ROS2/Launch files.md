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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644R26NMH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzfPv0Tq%2B%2FKybRaoCr%2B6avT6LAh1zMqMakpH%2Bu6F4jzAiA%2BzA8eITgk%2BmpSN03Z%2FFrQh3nw8B2hH7Urn1kjRbnALyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM2vYWnIxlrEPW1hRCKtwD9CMd44gztnJltqITWrqDOB7e5V61G3NRlvbKSqf8EXNxEoMr8lpmQkBEbDTUD%2FDI7lmtn49a6QI%2F2pbnZ8Nz7aPsSG6P4e0BmLnaWpfBVyP3rxumpSyJtWlz0bBD0NxenDfpF82ScWpKQd%2BtQ7PS1FjO4dPV1WKI0u6OnKuKenG6kubPouSG9UTHdUBNeRDnWoMlxQylgso63mf15qNX6cMLtk%2BRC3eBxSK8%2F1vzXlOKOdupxBLoJ4AmvURbJCLboXWTSu9mDPawqzAGdYVuUIk3eJx5SRUHC3oHvrjJIJ2An%2BX83U5WKZbIx8ucQ%2Fa%2BeRLJLBYsVufFBuBy%2BRglKSjP2kbqOtyOzZFWQ0uAkXGwgtKhcv3wvnRblOXJ%2F5d6lvvzxIS9Z0bz%2FbIKKt4xfgvuwVSEBDtBVfzzbwueMsoFQjykF2ANHb31%2Frght8SwA8UclUTTOiD9djYiGRQL0huTFGkpvkH7dG60JS%2B4b%2BoqndZILIIRy4LDzv8m9I1b68Hivz%2FXQIbO7Np76ED%2B9U0brcnGZqOddBh%2FjCs7TOagt87fCoIaZAUojuuBHj4TIzv0AjBd60AfBEAqCAEyqLM%2BlY5QlQ7jPkA4Xeebbp%2FYp%2FJQL1jBpjbr06Uwgcm9wAY6pgFVT8mNfAgxCW9T6TpZ5rTCAjyAa%2B1%2B2W696FLF9D%2B9GFugB2IV4Z5uQsPcjvVt0HMBJVhMPGaEv%2FwIeeX1jJwjgDpLgMGM8TkqAcJmchzbE0uZlXiuHVwfFvdiSoIAiB2mZ%2FD3y5sBJuY8ry63vgYJd8ZQTq5jvii9uZ6k8jLZpVhrZMVENubJq9jEpERmDOFgLnia%2BRRoNUqOn3juu7WaZ%2BIESj6V&X-Amz-Signature=c1dc73e94f0eca9d32f28e88a1ae049f3fcc5b2bd94e49ec58da1029c73f909b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644R26NMH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzfPv0Tq%2B%2FKybRaoCr%2B6avT6LAh1zMqMakpH%2Bu6F4jzAiA%2BzA8eITgk%2BmpSN03Z%2FFrQh3nw8B2hH7Urn1kjRbnALyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM2vYWnIxlrEPW1hRCKtwD9CMd44gztnJltqITWrqDOB7e5V61G3NRlvbKSqf8EXNxEoMr8lpmQkBEbDTUD%2FDI7lmtn49a6QI%2F2pbnZ8Nz7aPsSG6P4e0BmLnaWpfBVyP3rxumpSyJtWlz0bBD0NxenDfpF82ScWpKQd%2BtQ7PS1FjO4dPV1WKI0u6OnKuKenG6kubPouSG9UTHdUBNeRDnWoMlxQylgso63mf15qNX6cMLtk%2BRC3eBxSK8%2F1vzXlOKOdupxBLoJ4AmvURbJCLboXWTSu9mDPawqzAGdYVuUIk3eJx5SRUHC3oHvrjJIJ2An%2BX83U5WKZbIx8ucQ%2Fa%2BeRLJLBYsVufFBuBy%2BRglKSjP2kbqOtyOzZFWQ0uAkXGwgtKhcv3wvnRblOXJ%2F5d6lvvzxIS9Z0bz%2FbIKKt4xfgvuwVSEBDtBVfzzbwueMsoFQjykF2ANHb31%2Frght8SwA8UclUTTOiD9djYiGRQL0huTFGkpvkH7dG60JS%2B4b%2BoqndZILIIRy4LDzv8m9I1b68Hivz%2FXQIbO7Np76ED%2B9U0brcnGZqOddBh%2FjCs7TOagt87fCoIaZAUojuuBHj4TIzv0AjBd60AfBEAqCAEyqLM%2BlY5QlQ7jPkA4Xeebbp%2FYp%2FJQL1jBpjbr06Uwgcm9wAY6pgFVT8mNfAgxCW9T6TpZ5rTCAjyAa%2B1%2B2W696FLF9D%2B9GFugB2IV4Z5uQsPcjvVt0HMBJVhMPGaEv%2FwIeeX1jJwjgDpLgMGM8TkqAcJmchzbE0uZlXiuHVwfFvdiSoIAiB2mZ%2FD3y5sBJuY8ry63vgYJd8ZQTq5jvii9uZ6k8jLZpVhrZMVENubJq9jEpERmDOFgLnia%2BRRoNUqOn3juu7WaZ%2BIESj6V&X-Amz-Signature=28b348d84a12340fa1d97111bb5c9e7f477e0dec66f973f9530e7d8b5e710528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644R26NMH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzfPv0Tq%2B%2FKybRaoCr%2B6avT6LAh1zMqMakpH%2Bu6F4jzAiA%2BzA8eITgk%2BmpSN03Z%2FFrQh3nw8B2hH7Urn1kjRbnALyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM2vYWnIxlrEPW1hRCKtwD9CMd44gztnJltqITWrqDOB7e5V61G3NRlvbKSqf8EXNxEoMr8lpmQkBEbDTUD%2FDI7lmtn49a6QI%2F2pbnZ8Nz7aPsSG6P4e0BmLnaWpfBVyP3rxumpSyJtWlz0bBD0NxenDfpF82ScWpKQd%2BtQ7PS1FjO4dPV1WKI0u6OnKuKenG6kubPouSG9UTHdUBNeRDnWoMlxQylgso63mf15qNX6cMLtk%2BRC3eBxSK8%2F1vzXlOKOdupxBLoJ4AmvURbJCLboXWTSu9mDPawqzAGdYVuUIk3eJx5SRUHC3oHvrjJIJ2An%2BX83U5WKZbIx8ucQ%2Fa%2BeRLJLBYsVufFBuBy%2BRglKSjP2kbqOtyOzZFWQ0uAkXGwgtKhcv3wvnRblOXJ%2F5d6lvvzxIS9Z0bz%2FbIKKt4xfgvuwVSEBDtBVfzzbwueMsoFQjykF2ANHb31%2Frght8SwA8UclUTTOiD9djYiGRQL0huTFGkpvkH7dG60JS%2B4b%2BoqndZILIIRy4LDzv8m9I1b68Hivz%2FXQIbO7Np76ED%2B9U0brcnGZqOddBh%2FjCs7TOagt87fCoIaZAUojuuBHj4TIzv0AjBd60AfBEAqCAEyqLM%2BlY5QlQ7jPkA4Xeebbp%2FYp%2FJQL1jBpjbr06Uwgcm9wAY6pgFVT8mNfAgxCW9T6TpZ5rTCAjyAa%2B1%2B2W696FLF9D%2B9GFugB2IV4Z5uQsPcjvVt0HMBJVhMPGaEv%2FwIeeX1jJwjgDpLgMGM8TkqAcJmchzbE0uZlXiuHVwfFvdiSoIAiB2mZ%2FD3y5sBJuY8ry63vgYJd8ZQTq5jvii9uZ6k8jLZpVhrZMVENubJq9jEpERmDOFgLnia%2BRRoNUqOn3juu7WaZ%2BIESj6V&X-Amz-Signature=a67db4b66ae30a1448acd51795a64695a5b31cb13d168bcd2fdd089ec262af54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
