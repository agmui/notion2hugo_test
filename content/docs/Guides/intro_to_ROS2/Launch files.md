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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IDGNLU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDOm%2BGEOzWt02gIeb9DvfE6Fbcz8PyU5lKfiRMp8MS%2F9gIgH1V%2FlTL8lDGd6kP%2FISdC3nY6nA06wFtBPz3ZPsuYcesq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI3czBMqKAymJbgqPircAwh7wXrlCsseu613lBmjTRxqaHMRVW7r%2BMA%2FaHKNxNABEToRNotQiRvlL1Calplih4SFDkExmFUqJ%2FlZyPhaimy28rL5hdniM%2F80gBDHIpGvacAq%2Fbf8xdKgmQ1gOWA0LQCfobjMnJLBrX423XT%2BRKMXAqAHb8Hf2RTUMH%2F9X%2FvCFGY%2BW5tr8ABug8R73Dar%2B4yyGBgCgtSho9mAeqy%2B8VaSugMgWQQnupY4a0CKagB0A7IMavzlzmoRzaeZF%2BcUKeuT5mFFnEL%2FgxCnXekoAuXuwrQzhCVhyg7LB8ovHlEg4SwrQmPhBV03wZcjGD9LAeULt990yNTbDdxP%2BsH3oqcUfmYkO817Cr5q%2FmsCsQe6sq3MM0j6CmngcZ0SOzeFulE%2FJ0T%2B7Prsjg7frihr3GHCjBXUXBrjJNKzLfmZ%2B0GJ5W0qcCwqwSnxfBJ1TvVvtnxQqTqNaUvZUxOTLL4vsrpx%2F0aCDzFdpeMc5vmwggMWTFFBrBG3G3eF8HxwsgslKUIB0WvZK7irB0BNgCCd4bGC6pFw9pZ7tSQnHSkAq5YPqow3tKb%2BvjIzj09vnwXn0lP4xiRTFArRx0Rcx%2FTquLqVsXMHdTl0YNxixgq%2BmW8dTMbIVi6KxTYZYul3MPq4kcEGOqUBex%2FZsLnZp92UapQcK1KXlimDCLM3Rh7ogFuss0j9thb2dbM6P6QDvUrHUf6VzSnx%2Bi29Hi6qQwBR2kwaG6MJWq8PD06JsSdNpVkgbpCTqZ9%2BLdXUTJNr28XOgmu2P0sh51i0RyfkGoAi1K%2FYkarJGiQcQFZB2duPyzes4Ymp%2BJxKSP70QacCJnlFT2CfaVFooTGnLOeVLicqamB9YlEuqAa8ZfBN&X-Amz-Signature=bc36355f5029a62326503c2371333aca2fb5b8be38da771c993b1e9df6e65694&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IDGNLU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDOm%2BGEOzWt02gIeb9DvfE6Fbcz8PyU5lKfiRMp8MS%2F9gIgH1V%2FlTL8lDGd6kP%2FISdC3nY6nA06wFtBPz3ZPsuYcesq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI3czBMqKAymJbgqPircAwh7wXrlCsseu613lBmjTRxqaHMRVW7r%2BMA%2FaHKNxNABEToRNotQiRvlL1Calplih4SFDkExmFUqJ%2FlZyPhaimy28rL5hdniM%2F80gBDHIpGvacAq%2Fbf8xdKgmQ1gOWA0LQCfobjMnJLBrX423XT%2BRKMXAqAHb8Hf2RTUMH%2F9X%2FvCFGY%2BW5tr8ABug8R73Dar%2B4yyGBgCgtSho9mAeqy%2B8VaSugMgWQQnupY4a0CKagB0A7IMavzlzmoRzaeZF%2BcUKeuT5mFFnEL%2FgxCnXekoAuXuwrQzhCVhyg7LB8ovHlEg4SwrQmPhBV03wZcjGD9LAeULt990yNTbDdxP%2BsH3oqcUfmYkO817Cr5q%2FmsCsQe6sq3MM0j6CmngcZ0SOzeFulE%2FJ0T%2B7Prsjg7frihr3GHCjBXUXBrjJNKzLfmZ%2B0GJ5W0qcCwqwSnxfBJ1TvVvtnxQqTqNaUvZUxOTLL4vsrpx%2F0aCDzFdpeMc5vmwggMWTFFBrBG3G3eF8HxwsgslKUIB0WvZK7irB0BNgCCd4bGC6pFw9pZ7tSQnHSkAq5YPqow3tKb%2BvjIzj09vnwXn0lP4xiRTFArRx0Rcx%2FTquLqVsXMHdTl0YNxixgq%2BmW8dTMbIVi6KxTYZYul3MPq4kcEGOqUBex%2FZsLnZp92UapQcK1KXlimDCLM3Rh7ogFuss0j9thb2dbM6P6QDvUrHUf6VzSnx%2Bi29Hi6qQwBR2kwaG6MJWq8PD06JsSdNpVkgbpCTqZ9%2BLdXUTJNr28XOgmu2P0sh51i0RyfkGoAi1K%2FYkarJGiQcQFZB2duPyzes4Ymp%2BJxKSP70QacCJnlFT2CfaVFooTGnLOeVLicqamB9YlEuqAa8ZfBN&X-Amz-Signature=817bd4cbdcbc4d7a5b7b64f87468fc8fafeef375950487a78aba34fbe9feb2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IDGNLU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDOm%2BGEOzWt02gIeb9DvfE6Fbcz8PyU5lKfiRMp8MS%2F9gIgH1V%2FlTL8lDGd6kP%2FISdC3nY6nA06wFtBPz3ZPsuYcesq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI3czBMqKAymJbgqPircAwh7wXrlCsseu613lBmjTRxqaHMRVW7r%2BMA%2FaHKNxNABEToRNotQiRvlL1Calplih4SFDkExmFUqJ%2FlZyPhaimy28rL5hdniM%2F80gBDHIpGvacAq%2Fbf8xdKgmQ1gOWA0LQCfobjMnJLBrX423XT%2BRKMXAqAHb8Hf2RTUMH%2F9X%2FvCFGY%2BW5tr8ABug8R73Dar%2B4yyGBgCgtSho9mAeqy%2B8VaSugMgWQQnupY4a0CKagB0A7IMavzlzmoRzaeZF%2BcUKeuT5mFFnEL%2FgxCnXekoAuXuwrQzhCVhyg7LB8ovHlEg4SwrQmPhBV03wZcjGD9LAeULt990yNTbDdxP%2BsH3oqcUfmYkO817Cr5q%2FmsCsQe6sq3MM0j6CmngcZ0SOzeFulE%2FJ0T%2B7Prsjg7frihr3GHCjBXUXBrjJNKzLfmZ%2B0GJ5W0qcCwqwSnxfBJ1TvVvtnxQqTqNaUvZUxOTLL4vsrpx%2F0aCDzFdpeMc5vmwggMWTFFBrBG3G3eF8HxwsgslKUIB0WvZK7irB0BNgCCd4bGC6pFw9pZ7tSQnHSkAq5YPqow3tKb%2BvjIzj09vnwXn0lP4xiRTFArRx0Rcx%2FTquLqVsXMHdTl0YNxixgq%2BmW8dTMbIVi6KxTYZYul3MPq4kcEGOqUBex%2FZsLnZp92UapQcK1KXlimDCLM3Rh7ogFuss0j9thb2dbM6P6QDvUrHUf6VzSnx%2Bi29Hi6qQwBR2kwaG6MJWq8PD06JsSdNpVkgbpCTqZ9%2BLdXUTJNr28XOgmu2P0sh51i0RyfkGoAi1K%2FYkarJGiQcQFZB2duPyzes4Ymp%2BJxKSP70QacCJnlFT2CfaVFooTGnLOeVLicqamB9YlEuqAa8ZfBN&X-Amz-Signature=777712841a37d3284effe7ed57b7a7cea527f0792e1161965d47d756a5d7970f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
