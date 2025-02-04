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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMIGZVZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCL2lzZQXhvtXg3jRzUZrGpuVy3diepWXZ5vOp72IjNkAIgaH3%2FF1vdYPX7PAVeM0%2FvLA%2BZZMnuIxeIBOyOBt%2FGh%2F4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKNS7PY48iQJ9rYOMCrcA9btx8o7cTzWm%2B7mbP3JkVkm2x95s7pEdaDlTtATpGKYMXtUROqqeWM3S%2FU%2Bl78r%2BhSBkHhkai3cQ8M6i5lrqX%2B0H39REqvZWWbbQ4uINXNUYYNAy8k5vCw0dBAicPbTxp2rivywtZ1U%2B6OYuWSp867um5J2wJ%2BbZlGR9EzVCwRVVlQUThBjUIh7NE5m7t9yEX9I4nwDQr9luNT%2FW%2BjHYamDC1H66RheiIaRaBdYRAATomNNSd9cUGmH4Oj99WE3rfkeUa6CPHgPwLlTZOqHxb2KBwnYNTdNd5soDICrb0wdD5WMDw2bk%2F2NgbEF6XDvple7VWY3wbdo2wstSJGIZy21PFn7n546cBTl9SpS1Mk77fbmL%2BTrzX71oFt7Ng1%2FhQPmUCocAqi4xPMaZZSZpzvIJBGEUk5w8TGunW40b4LsJ7kFN%2FH6mYLy7f14SkK4Y6MZa7r489ixp3cgGhrJgnzfNn0Ivf8Uz6GaHb552rWEHUfZK4GB%2FcGQrkKYMDSBbO3Ccc8Bdtjxz7G2ppEDwOUSbaFA8DwQfr%2BF%2FATVCgcwBytPt7Hw6X4PhuI8t3v37S6URvSMWr6KuUsaKmPOdLR7dabRnBsbrPp20Jj1nWC%2FQ60UuZUKgrPGMqwwMJbeib0GOqUB2vsjO6xRHuFyp2mt2xzs3lYCYLlxTDTkcSf61NFh5dXH%2FPe5sqo41%2Bzz4Z70SYKjb5cmW19FkenFGff8SQeYbjhA3NdUOlQtXX93ufE5gNblPG%2FjFbg5vr6qAnTZ2w2fM3Dob5YhFxwC5QG4n3pfyXhaGNqq0i6G9lk93%2Ba7o%2B3nIfe4GrWXspQUmfJe2krYShDylW0iwg6Iwv%2BVXkxiQKLmzRTX&X-Amz-Signature=0371928117b2db875abfa8e0ae9709c513bf956f5d6785742949ff3423218eea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMIGZVZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCL2lzZQXhvtXg3jRzUZrGpuVy3diepWXZ5vOp72IjNkAIgaH3%2FF1vdYPX7PAVeM0%2FvLA%2BZZMnuIxeIBOyOBt%2FGh%2F4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKNS7PY48iQJ9rYOMCrcA9btx8o7cTzWm%2B7mbP3JkVkm2x95s7pEdaDlTtATpGKYMXtUROqqeWM3S%2FU%2Bl78r%2BhSBkHhkai3cQ8M6i5lrqX%2B0H39REqvZWWbbQ4uINXNUYYNAy8k5vCw0dBAicPbTxp2rivywtZ1U%2B6OYuWSp867um5J2wJ%2BbZlGR9EzVCwRVVlQUThBjUIh7NE5m7t9yEX9I4nwDQr9luNT%2FW%2BjHYamDC1H66RheiIaRaBdYRAATomNNSd9cUGmH4Oj99WE3rfkeUa6CPHgPwLlTZOqHxb2KBwnYNTdNd5soDICrb0wdD5WMDw2bk%2F2NgbEF6XDvple7VWY3wbdo2wstSJGIZy21PFn7n546cBTl9SpS1Mk77fbmL%2BTrzX71oFt7Ng1%2FhQPmUCocAqi4xPMaZZSZpzvIJBGEUk5w8TGunW40b4LsJ7kFN%2FH6mYLy7f14SkK4Y6MZa7r489ixp3cgGhrJgnzfNn0Ivf8Uz6GaHb552rWEHUfZK4GB%2FcGQrkKYMDSBbO3Ccc8Bdtjxz7G2ppEDwOUSbaFA8DwQfr%2BF%2FATVCgcwBytPt7Hw6X4PhuI8t3v37S6URvSMWr6KuUsaKmPOdLR7dabRnBsbrPp20Jj1nWC%2FQ60UuZUKgrPGMqwwMJbeib0GOqUB2vsjO6xRHuFyp2mt2xzs3lYCYLlxTDTkcSf61NFh5dXH%2FPe5sqo41%2Bzz4Z70SYKjb5cmW19FkenFGff8SQeYbjhA3NdUOlQtXX93ufE5gNblPG%2FjFbg5vr6qAnTZ2w2fM3Dob5YhFxwC5QG4n3pfyXhaGNqq0i6G9lk93%2Ba7o%2B3nIfe4GrWXspQUmfJe2krYShDylW0iwg6Iwv%2BVXkxiQKLmzRTX&X-Amz-Signature=7d11b209bac570f1d4754bad593f7043c140155cdd485649906b6d41dc584310&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMIGZVZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCL2lzZQXhvtXg3jRzUZrGpuVy3diepWXZ5vOp72IjNkAIgaH3%2FF1vdYPX7PAVeM0%2FvLA%2BZZMnuIxeIBOyOBt%2FGh%2F4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKNS7PY48iQJ9rYOMCrcA9btx8o7cTzWm%2B7mbP3JkVkm2x95s7pEdaDlTtATpGKYMXtUROqqeWM3S%2FU%2Bl78r%2BhSBkHhkai3cQ8M6i5lrqX%2B0H39REqvZWWbbQ4uINXNUYYNAy8k5vCw0dBAicPbTxp2rivywtZ1U%2B6OYuWSp867um5J2wJ%2BbZlGR9EzVCwRVVlQUThBjUIh7NE5m7t9yEX9I4nwDQr9luNT%2FW%2BjHYamDC1H66RheiIaRaBdYRAATomNNSd9cUGmH4Oj99WE3rfkeUa6CPHgPwLlTZOqHxb2KBwnYNTdNd5soDICrb0wdD5WMDw2bk%2F2NgbEF6XDvple7VWY3wbdo2wstSJGIZy21PFn7n546cBTl9SpS1Mk77fbmL%2BTrzX71oFt7Ng1%2FhQPmUCocAqi4xPMaZZSZpzvIJBGEUk5w8TGunW40b4LsJ7kFN%2FH6mYLy7f14SkK4Y6MZa7r489ixp3cgGhrJgnzfNn0Ivf8Uz6GaHb552rWEHUfZK4GB%2FcGQrkKYMDSBbO3Ccc8Bdtjxz7G2ppEDwOUSbaFA8DwQfr%2BF%2FATVCgcwBytPt7Hw6X4PhuI8t3v37S6URvSMWr6KuUsaKmPOdLR7dabRnBsbrPp20Jj1nWC%2FQ60UuZUKgrPGMqwwMJbeib0GOqUB2vsjO6xRHuFyp2mt2xzs3lYCYLlxTDTkcSf61NFh5dXH%2FPe5sqo41%2Bzz4Z70SYKjb5cmW19FkenFGff8SQeYbjhA3NdUOlQtXX93ufE5gNblPG%2FjFbg5vr6qAnTZ2w2fM3Dob5YhFxwC5QG4n3pfyXhaGNqq0i6G9lk93%2Ba7o%2B3nIfe4GrWXspQUmfJe2krYShDylW0iwg6Iwv%2BVXkxiQKLmzRTX&X-Amz-Signature=f89775cf200ffc47282f04e8a841615017e44dd65e06aa1cb4940297b9e5ef29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
