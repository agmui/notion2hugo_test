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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTASBSAD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtJLytPSyxtSIII1ndJUGZdsRSsGFtmYuEZBwKA4DOQgIgXkDQ%2B4IulhpRg%2FUNxl503zprS3kNpkwpbthwEDQpLVYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI20MkDRVTH2BmiOPCrcA2BsY9au77WHO7q8gKOaosFIuQI%2BSV1VVL8QDP7urzMuuGUERdK4AeAoF%2FwAI4ycatFKdxOsFTcui%2FxPk67Lf7MU%2FuEln7swU7JOOgJ84V1NLFukuHDKMrNGnqKc5cIFsV0tAMacvBQanLudnlLJm0TyBEox3GT31AfI%2Fx1hWxNKe2S%2FeLkqqh1I3xo51sfpx9s6BxKz8O8YZCcxwbBhJRib5MRi3LBQNzGgHhyUIS6puWpQiaISqvFhXpDMARJj6iZZtL4A7G3Nxt55aQfVJGnlhdjA7Wyk6eIEKTpuiR0Ijula0U4g3%2Fw6t2%2FLzAuqFqQ8w8gs1M40YpBmG94SY%2B0stf1LiMZKEbJK8GX2BHnMnieLP6dxXEjMrghLlMsRBUIto7%2FEAuTAVIaFIUFG0q0CRCQK22Rj%2FXdLJp05nnP02l9UWcBluT2ZvsSGgbiFC8R238sX5uO9lJfX1xNyQTomA3riHHBv2g5MzAvI%2FvxzyaM94cFvrbY7mGEZKgRe3LCOAq93Nh4%2BTBTqkZe%2FFUKMjpl1shpZClr3L%2FABN%2BdtwaIAqKsdImPAj%2FW4PGRiQaMCOVyuXUFZ0r%2FwEYFNg1Lnumy4o7gJByq883N%2FEYYmT%2BlvfSWYRC6hoKEXMM7nqMEGOqUBh9WaUvBwrwjP%2Be%2BAfmii0hvdT%2FfqVMzwqDi3i3lBD4K%2BiyXckwu2UNLspf7lhQ8ug65xz5f79PsjCwlst4Rkm0umw64IIvfZiw%2Feofg32vAIbC4ZzFeFd15gAN8Sqc1hFkwqaIN3Z1LasTOt5RJmNP8U1uwlWHvrtUwdCOz%2BPhHvt6JPsN%2FSpm4yLMQ2K4dZCfu%2BXeYxUH5Vmw4TuMwD%2FSqzLiGk&X-Amz-Signature=1ed232f908f9ae8d98b5a13544bda24b692be20c4adc864737a0e85923eed1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTASBSAD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtJLytPSyxtSIII1ndJUGZdsRSsGFtmYuEZBwKA4DOQgIgXkDQ%2B4IulhpRg%2FUNxl503zprS3kNpkwpbthwEDQpLVYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI20MkDRVTH2BmiOPCrcA2BsY9au77WHO7q8gKOaosFIuQI%2BSV1VVL8QDP7urzMuuGUERdK4AeAoF%2FwAI4ycatFKdxOsFTcui%2FxPk67Lf7MU%2FuEln7swU7JOOgJ84V1NLFukuHDKMrNGnqKc5cIFsV0tAMacvBQanLudnlLJm0TyBEox3GT31AfI%2Fx1hWxNKe2S%2FeLkqqh1I3xo51sfpx9s6BxKz8O8YZCcxwbBhJRib5MRi3LBQNzGgHhyUIS6puWpQiaISqvFhXpDMARJj6iZZtL4A7G3Nxt55aQfVJGnlhdjA7Wyk6eIEKTpuiR0Ijula0U4g3%2Fw6t2%2FLzAuqFqQ8w8gs1M40YpBmG94SY%2B0stf1LiMZKEbJK8GX2BHnMnieLP6dxXEjMrghLlMsRBUIto7%2FEAuTAVIaFIUFG0q0CRCQK22Rj%2FXdLJp05nnP02l9UWcBluT2ZvsSGgbiFC8R238sX5uO9lJfX1xNyQTomA3riHHBv2g5MzAvI%2FvxzyaM94cFvrbY7mGEZKgRe3LCOAq93Nh4%2BTBTqkZe%2FFUKMjpl1shpZClr3L%2FABN%2BdtwaIAqKsdImPAj%2FW4PGRiQaMCOVyuXUFZ0r%2FwEYFNg1Lnumy4o7gJByq883N%2FEYYmT%2BlvfSWYRC6hoKEXMM7nqMEGOqUBh9WaUvBwrwjP%2Be%2BAfmii0hvdT%2FfqVMzwqDi3i3lBD4K%2BiyXckwu2UNLspf7lhQ8ug65xz5f79PsjCwlst4Rkm0umw64IIvfZiw%2Feofg32vAIbC4ZzFeFd15gAN8Sqc1hFkwqaIN3Z1LasTOt5RJmNP8U1uwlWHvrtUwdCOz%2BPhHvt6JPsN%2FSpm4yLMQ2K4dZCfu%2BXeYxUH5Vmw4TuMwD%2FSqzLiGk&X-Amz-Signature=f2dc78fccc58abc814c98665236d734b25251fd457bd8cb4f1417ed684f79450&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTASBSAD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtJLytPSyxtSIII1ndJUGZdsRSsGFtmYuEZBwKA4DOQgIgXkDQ%2B4IulhpRg%2FUNxl503zprS3kNpkwpbthwEDQpLVYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI20MkDRVTH2BmiOPCrcA2BsY9au77WHO7q8gKOaosFIuQI%2BSV1VVL8QDP7urzMuuGUERdK4AeAoF%2FwAI4ycatFKdxOsFTcui%2FxPk67Lf7MU%2FuEln7swU7JOOgJ84V1NLFukuHDKMrNGnqKc5cIFsV0tAMacvBQanLudnlLJm0TyBEox3GT31AfI%2Fx1hWxNKe2S%2FeLkqqh1I3xo51sfpx9s6BxKz8O8YZCcxwbBhJRib5MRi3LBQNzGgHhyUIS6puWpQiaISqvFhXpDMARJj6iZZtL4A7G3Nxt55aQfVJGnlhdjA7Wyk6eIEKTpuiR0Ijula0U4g3%2Fw6t2%2FLzAuqFqQ8w8gs1M40YpBmG94SY%2B0stf1LiMZKEbJK8GX2BHnMnieLP6dxXEjMrghLlMsRBUIto7%2FEAuTAVIaFIUFG0q0CRCQK22Rj%2FXdLJp05nnP02l9UWcBluT2ZvsSGgbiFC8R238sX5uO9lJfX1xNyQTomA3riHHBv2g5MzAvI%2FvxzyaM94cFvrbY7mGEZKgRe3LCOAq93Nh4%2BTBTqkZe%2FFUKMjpl1shpZClr3L%2FABN%2BdtwaIAqKsdImPAj%2FW4PGRiQaMCOVyuXUFZ0r%2FwEYFNg1Lnumy4o7gJByq883N%2FEYYmT%2BlvfSWYRC6hoKEXMM7nqMEGOqUBh9WaUvBwrwjP%2Be%2BAfmii0hvdT%2FfqVMzwqDi3i3lBD4K%2BiyXckwu2UNLspf7lhQ8ug65xz5f79PsjCwlst4Rkm0umw64IIvfZiw%2Feofg32vAIbC4ZzFeFd15gAN8Sqc1hFkwqaIN3Z1LasTOt5RJmNP8U1uwlWHvrtUwdCOz%2BPhHvt6JPsN%2FSpm4yLMQ2K4dZCfu%2BXeYxUH5Vmw4TuMwD%2FSqzLiGk&X-Amz-Signature=c45c4d0ad14c01ee1967c2dfba59740f167dfb91f381116838a0223d619a7c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
