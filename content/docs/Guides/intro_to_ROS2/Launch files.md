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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQU5E4G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpZPfGTbijxJkoyjTQPHIh12aLVPfsVBGZ9hRoGAcRRwIgNNc0L2BQ9MJE2gzvpsh85BvcVLGMKSWIVZnL5N1YyFYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGlAIt3frBTCGJU3dSrcAyPnQ2uYn9uR2EpQIM3KgPT7TZSNfOs%2Fzk97GpEM%2BGBvNspa%2FEM6vD9Yk7bA%2Bz491a4N1MtuuqCkHLMqr%2Bx%2BdCVyb4%2BVQKq1stb8PYMtKz6W0o9azf4Kb2CGpAc%2Ff0PUKmcE2Hbzks%2FRguG5F9ZfTewgihBAi4DyuAJlvIYoYHmgh9peHkwYBIxRym8VX%2BYZu2f6e%2Fyo52Fi90U3tbs616pGcjLjTDjgx9iYqmEPpzfwDOAua1Huih98wzNJveS1eFKcGn%2FiuZkiw3vhPsTcZJcyMbGhFvvXscB8yDB6LCycFj5aAKlBj%2F74Qx%2B%2BbdYAeWGOtMzCsvy2fkJkz7s%2Fpd%2FwJqRJY8l3UTTSSVZ%2F0tePkJqTgr7uCRJe%2Bt4EAvnbs7OrWAl%2BVIlyLW3odYWXKkcuIrOIwJlHIg08WQsRefjkEaWtMfmC%2Bk9Sblzl5iwMW5v2LGiZbuORgzf7dMTGfHeXK0l7DI7BBDl%2FhOeqlCgdyBwAa%2FGvYO4zrkjTnUL2NF44KmDROhw3E4E4iNU%2Fc6q7owBoFIvVm%2FeBtmgvhYW7r25S9awDHoeqwYoi6VcH8t97LvWsThSaKcHsEHlKLGq9fLrlLGD2ZwMlvpg27TktI2ddBp%2FEJLUxqeCfMN7PncEGOqUBESwNUZRC9QxHpqFmBOsom%2FanBuoFrTwd%2B8PNPX3nHeef3JfrYAk9BSOqMBPO2v0hroRBu2zqzpKF%2FdUrgcOFF9efdmFe%2F8O%2F%2F0pVgvkcPuEaSdLO6nUl2Kqb1bMuaYaTrt%2FjbzDaBuLnJv1ppVQW8BS%2FOGBYWxl%2BWFqwu4FpALu0gsMc14Y8dDcH5XBOBYZZ9ct03Y2%2BPVrvETwkHMSIlin49BAk&X-Amz-Signature=b6dbd7d5f8f0b762a5db4364e48ebc4e67f67b13f7113fae7bf9340e519fec87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQU5E4G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpZPfGTbijxJkoyjTQPHIh12aLVPfsVBGZ9hRoGAcRRwIgNNc0L2BQ9MJE2gzvpsh85BvcVLGMKSWIVZnL5N1YyFYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGlAIt3frBTCGJU3dSrcAyPnQ2uYn9uR2EpQIM3KgPT7TZSNfOs%2Fzk97GpEM%2BGBvNspa%2FEM6vD9Yk7bA%2Bz491a4N1MtuuqCkHLMqr%2Bx%2BdCVyb4%2BVQKq1stb8PYMtKz6W0o9azf4Kb2CGpAc%2Ff0PUKmcE2Hbzks%2FRguG5F9ZfTewgihBAi4DyuAJlvIYoYHmgh9peHkwYBIxRym8VX%2BYZu2f6e%2Fyo52Fi90U3tbs616pGcjLjTDjgx9iYqmEPpzfwDOAua1Huih98wzNJveS1eFKcGn%2FiuZkiw3vhPsTcZJcyMbGhFvvXscB8yDB6LCycFj5aAKlBj%2F74Qx%2B%2BbdYAeWGOtMzCsvy2fkJkz7s%2Fpd%2FwJqRJY8l3UTTSSVZ%2F0tePkJqTgr7uCRJe%2Bt4EAvnbs7OrWAl%2BVIlyLW3odYWXKkcuIrOIwJlHIg08WQsRefjkEaWtMfmC%2Bk9Sblzl5iwMW5v2LGiZbuORgzf7dMTGfHeXK0l7DI7BBDl%2FhOeqlCgdyBwAa%2FGvYO4zrkjTnUL2NF44KmDROhw3E4E4iNU%2Fc6q7owBoFIvVm%2FeBtmgvhYW7r25S9awDHoeqwYoi6VcH8t97LvWsThSaKcHsEHlKLGq9fLrlLGD2ZwMlvpg27TktI2ddBp%2FEJLUxqeCfMN7PncEGOqUBESwNUZRC9QxHpqFmBOsom%2FanBuoFrTwd%2B8PNPX3nHeef3JfrYAk9BSOqMBPO2v0hroRBu2zqzpKF%2FdUrgcOFF9efdmFe%2F8O%2F%2F0pVgvkcPuEaSdLO6nUl2Kqb1bMuaYaTrt%2FjbzDaBuLnJv1ppVQW8BS%2FOGBYWxl%2BWFqwu4FpALu0gsMc14Y8dDcH5XBOBYZZ9ct03Y2%2BPVrvETwkHMSIlin49BAk&X-Amz-Signature=3455106c947ea3ef5a7cf65c6a8f32a0c21574b0aa17559365cf1b389f267348&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQU5E4G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpZPfGTbijxJkoyjTQPHIh12aLVPfsVBGZ9hRoGAcRRwIgNNc0L2BQ9MJE2gzvpsh85BvcVLGMKSWIVZnL5N1YyFYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGlAIt3frBTCGJU3dSrcAyPnQ2uYn9uR2EpQIM3KgPT7TZSNfOs%2Fzk97GpEM%2BGBvNspa%2FEM6vD9Yk7bA%2Bz491a4N1MtuuqCkHLMqr%2Bx%2BdCVyb4%2BVQKq1stb8PYMtKz6W0o9azf4Kb2CGpAc%2Ff0PUKmcE2Hbzks%2FRguG5F9ZfTewgihBAi4DyuAJlvIYoYHmgh9peHkwYBIxRym8VX%2BYZu2f6e%2Fyo52Fi90U3tbs616pGcjLjTDjgx9iYqmEPpzfwDOAua1Huih98wzNJveS1eFKcGn%2FiuZkiw3vhPsTcZJcyMbGhFvvXscB8yDB6LCycFj5aAKlBj%2F74Qx%2B%2BbdYAeWGOtMzCsvy2fkJkz7s%2Fpd%2FwJqRJY8l3UTTSSVZ%2F0tePkJqTgr7uCRJe%2Bt4EAvnbs7OrWAl%2BVIlyLW3odYWXKkcuIrOIwJlHIg08WQsRefjkEaWtMfmC%2Bk9Sblzl5iwMW5v2LGiZbuORgzf7dMTGfHeXK0l7DI7BBDl%2FhOeqlCgdyBwAa%2FGvYO4zrkjTnUL2NF44KmDROhw3E4E4iNU%2Fc6q7owBoFIvVm%2FeBtmgvhYW7r25S9awDHoeqwYoi6VcH8t97LvWsThSaKcHsEHlKLGq9fLrlLGD2ZwMlvpg27TktI2ddBp%2FEJLUxqeCfMN7PncEGOqUBESwNUZRC9QxHpqFmBOsom%2FanBuoFrTwd%2B8PNPX3nHeef3JfrYAk9BSOqMBPO2v0hroRBu2zqzpKF%2FdUrgcOFF9efdmFe%2F8O%2F%2F0pVgvkcPuEaSdLO6nUl2Kqb1bMuaYaTrt%2FjbzDaBuLnJv1ppVQW8BS%2FOGBYWxl%2BWFqwu4FpALu0gsMc14Y8dDcH5XBOBYZZ9ct03Y2%2BPVrvETwkHMSIlin49BAk&X-Amz-Signature=b28966231c51297dce7c5866dd040242fa22ee1a13a7a68a863e31601011d30f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
