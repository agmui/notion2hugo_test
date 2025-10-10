---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWTSTDH%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJx4vOvar8DpIs6JiAbGLw8IIrxQfJny3zNn2TKuJpcAiBCZ2Gg86S3Ohq9jcbRzhDO3TLRvh5RfRzsjoEsqaIBECqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Mc8As6D8yztqU96KtwDC1vDdy%2BGX2F%2FjLLVEkx5UdsDkYs2TvI%2F60DDwDiMoFWplAfwGNGqC3e82CMI6JVcZ4mE9cPsWYTT4WTG89NsJnA2xVTbaNS87vFENrO5jP62aNzT8k4PUitCbQiwpgWii0fZeCYFYBCReNAM6qphpSI%2F2fyYG%2FU%2B87H8bc%2F2D1UCPQE2pmoXId5OITq4oOdK1aRQea6XzpX2RlCPITHSeAKRyoeyBkY9au%2Bp3VWUi0XvAdo2d3t67FC9Uv72i13NLQaA1yGEeO0RyHkBpu%2Bon0NgTFOX5urOQHKTkIQCFi0Df50IgU97GOyDMPLadpgv6sc0lRnootvvkZTbfSIitClT3smn6JdeBvsVWNmeRAGQj4ST1ir1wYtk97jdTngmiyH77iJIWEAFo7ewozRvPHFJVDxGnWGUUushluV4P%2BW5wOU780EWYngQZK9vWUCk04CMCxWXPo4Q6dkr5ksnyjreE%2FaR7gYdNEqtfIKGYkFHB03%2FZA8wxWmrqhkmH3amShsYDT4gnXxaN%2BSTh7BK%2BRKFWwZ%2BDNZzLNfLHO2oqCUgY8vOMUkDDHnM408VzAAqB4oWUNoTwuEPvxUMRtn1ZSaWZMnwid3sBt6zMBGaDuYSttckT5SPmL%2B%2BzX8whamhxwY6pgFfNw2ojnsbnkTj9d9idtfx751mioWuj%2FAoYFg2CVHuR1SrZZ3QYLNshegm5FktMWsgCl0m%2BHcPMX%2FipJkb%2F1wkJmtonDY4TraD82hwdcRZoh2nhrKE66W%2BbPGtNyTp9TzmWaZyechvC1F76Ph%2FnttcqXRWFoUQsPS8zy0O11HHQPUoDkSBD%2FajNbNkxjUl0gko9gvxcM5LQrF7DtCOgYs0%2FPbv4QQt&X-Amz-Signature=2d175724eb95a003d869b3a1664e5fb833d233618660804238c83703365bd83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWTSTDH%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJx4vOvar8DpIs6JiAbGLw8IIrxQfJny3zNn2TKuJpcAiBCZ2Gg86S3Ohq9jcbRzhDO3TLRvh5RfRzsjoEsqaIBECqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Mc8As6D8yztqU96KtwDC1vDdy%2BGX2F%2FjLLVEkx5UdsDkYs2TvI%2F60DDwDiMoFWplAfwGNGqC3e82CMI6JVcZ4mE9cPsWYTT4WTG89NsJnA2xVTbaNS87vFENrO5jP62aNzT8k4PUitCbQiwpgWii0fZeCYFYBCReNAM6qphpSI%2F2fyYG%2FU%2B87H8bc%2F2D1UCPQE2pmoXId5OITq4oOdK1aRQea6XzpX2RlCPITHSeAKRyoeyBkY9au%2Bp3VWUi0XvAdo2d3t67FC9Uv72i13NLQaA1yGEeO0RyHkBpu%2Bon0NgTFOX5urOQHKTkIQCFi0Df50IgU97GOyDMPLadpgv6sc0lRnootvvkZTbfSIitClT3smn6JdeBvsVWNmeRAGQj4ST1ir1wYtk97jdTngmiyH77iJIWEAFo7ewozRvPHFJVDxGnWGUUushluV4P%2BW5wOU780EWYngQZK9vWUCk04CMCxWXPo4Q6dkr5ksnyjreE%2FaR7gYdNEqtfIKGYkFHB03%2FZA8wxWmrqhkmH3amShsYDT4gnXxaN%2BSTh7BK%2BRKFWwZ%2BDNZzLNfLHO2oqCUgY8vOMUkDDHnM408VzAAqB4oWUNoTwuEPvxUMRtn1ZSaWZMnwid3sBt6zMBGaDuYSttckT5SPmL%2B%2BzX8whamhxwY6pgFfNw2ojnsbnkTj9d9idtfx751mioWuj%2FAoYFg2CVHuR1SrZZ3QYLNshegm5FktMWsgCl0m%2BHcPMX%2FipJkb%2F1wkJmtonDY4TraD82hwdcRZoh2nhrKE66W%2BbPGtNyTp9TzmWaZyechvC1F76Ph%2FnttcqXRWFoUQsPS8zy0O11HHQPUoDkSBD%2FajNbNkxjUl0gko9gvxcM5LQrF7DtCOgYs0%2FPbv4QQt&X-Amz-Signature=c77047ce0dffd31ad5a18208538872f4e0e8af7a393183aee2a5e075f0f2fad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWTSTDH%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJx4vOvar8DpIs6JiAbGLw8IIrxQfJny3zNn2TKuJpcAiBCZ2Gg86S3Ohq9jcbRzhDO3TLRvh5RfRzsjoEsqaIBECqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Mc8As6D8yztqU96KtwDC1vDdy%2BGX2F%2FjLLVEkx5UdsDkYs2TvI%2F60DDwDiMoFWplAfwGNGqC3e82CMI6JVcZ4mE9cPsWYTT4WTG89NsJnA2xVTbaNS87vFENrO5jP62aNzT8k4PUitCbQiwpgWii0fZeCYFYBCReNAM6qphpSI%2F2fyYG%2FU%2B87H8bc%2F2D1UCPQE2pmoXId5OITq4oOdK1aRQea6XzpX2RlCPITHSeAKRyoeyBkY9au%2Bp3VWUi0XvAdo2d3t67FC9Uv72i13NLQaA1yGEeO0RyHkBpu%2Bon0NgTFOX5urOQHKTkIQCFi0Df50IgU97GOyDMPLadpgv6sc0lRnootvvkZTbfSIitClT3smn6JdeBvsVWNmeRAGQj4ST1ir1wYtk97jdTngmiyH77iJIWEAFo7ewozRvPHFJVDxGnWGUUushluV4P%2BW5wOU780EWYngQZK9vWUCk04CMCxWXPo4Q6dkr5ksnyjreE%2FaR7gYdNEqtfIKGYkFHB03%2FZA8wxWmrqhkmH3amShsYDT4gnXxaN%2BSTh7BK%2BRKFWwZ%2BDNZzLNfLHO2oqCUgY8vOMUkDDHnM408VzAAqB4oWUNoTwuEPvxUMRtn1ZSaWZMnwid3sBt6zMBGaDuYSttckT5SPmL%2B%2BzX8whamhxwY6pgFfNw2ojnsbnkTj9d9idtfx751mioWuj%2FAoYFg2CVHuR1SrZZ3QYLNshegm5FktMWsgCl0m%2BHcPMX%2FipJkb%2F1wkJmtonDY4TraD82hwdcRZoh2nhrKE66W%2BbPGtNyTp9TzmWaZyechvC1F76Ph%2FnttcqXRWFoUQsPS8zy0O11HHQPUoDkSBD%2FajNbNkxjUl0gko9gvxcM5LQrF7DtCOgYs0%2FPbv4QQt&X-Amz-Signature=50af2edecb55dcddbac9314becfba578965cb68be9a1feb6ab754cb5c6d0c198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
