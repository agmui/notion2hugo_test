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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAKAN46%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFyZewAFIRfP9Jb%2F5VtLUk%2BvWS7R3alBy3haH7p78CyRAiEAoGXnB2QkGKETkb44ClPD3g3vFsk1Gw8K%2B61iQ4TK%2FFIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDM%2B8cGhY8ei2lHSZzSrcAz1X3Xcxebql7YkAClWZ5onbHPMrJBb4LPQMmrJWIYXID2kg87nAOw93zDHFpZTr6Ye5rIDqppXhJaegPKD7aWMw76HP2X1MpXi%2FrK52Fo1rVkfyCnIqTvmeGdTyAjZMhSfAWGsAbbHmXzQOO1jEQE%2BYvuddz%2BsRnG1JGSrL1xZU1umOG1w2QjzDdQooV2qw6v5KqKy7RPnD8%2FIQqBPYPpTmqVArO6ACdzS05T6MGXAwvddtfsVDr69xq8Hlq4cPwQwWwq6x%2Fspx6bjNVizyKYB9vAspPaoVznS1spMI9zcXxLehqhNePed1cl6qBIxjQTCCV2sLBcjz1mKoxr6gvjVDJ87kFY%2BgwrFdfsDNdVaZWxgCNOjUsYbm5Jpu2us1dMAQtdg2Uqtq0lKtpLFrgL1cgRfQcd8Re4b17M7qxEAuVnL72y2jCE%2FBLOvfWq7keGScSHEhvdRkAwgPk7fi1QNa%2F%2BbrqManPcW8BVpe51C1F02%2BUkQfzcCjybi93%2B3e0%2BX%2F6e8l4IYQPyD%2F3wAl9cXGjvTJLrYZy%2FHhMvyi7mj2VZ0ENnpARAwSGbKza%2B8uY3wilLuVVqs7SQNrLf0yDUHVmfzrb0%2BK68b9Gsx7Ha7g76KBdGhbOVJ9jt1LMJXmxL0GOqUB8osMz47Odj1Sbzse7u%2BH6sOEfAd59Q2hHsDKiT02v%2BksO9oDcGvryEswKusFd2hnDUQgQePn4PtIQOVx52jTZRRroTyi8TQQDScTieRObXz3RifWSqQaaYOP2E4qyE6TZgz46YXaSsbs00M1Vc6MA3kF853Id%2FvUF6Y%2F8nlPssg3hoDxLSzyKEN6s9B1WIRGrDMULcn5388z4YIQTF9%2BdJaJjlAl&X-Amz-Signature=e480289ac17b23c301a0192ad8713d8263626816f72287a8203c296cd7d2949a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAKAN46%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFyZewAFIRfP9Jb%2F5VtLUk%2BvWS7R3alBy3haH7p78CyRAiEAoGXnB2QkGKETkb44ClPD3g3vFsk1Gw8K%2B61iQ4TK%2FFIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDM%2B8cGhY8ei2lHSZzSrcAz1X3Xcxebql7YkAClWZ5onbHPMrJBb4LPQMmrJWIYXID2kg87nAOw93zDHFpZTr6Ye5rIDqppXhJaegPKD7aWMw76HP2X1MpXi%2FrK52Fo1rVkfyCnIqTvmeGdTyAjZMhSfAWGsAbbHmXzQOO1jEQE%2BYvuddz%2BsRnG1JGSrL1xZU1umOG1w2QjzDdQooV2qw6v5KqKy7RPnD8%2FIQqBPYPpTmqVArO6ACdzS05T6MGXAwvddtfsVDr69xq8Hlq4cPwQwWwq6x%2Fspx6bjNVizyKYB9vAspPaoVznS1spMI9zcXxLehqhNePed1cl6qBIxjQTCCV2sLBcjz1mKoxr6gvjVDJ87kFY%2BgwrFdfsDNdVaZWxgCNOjUsYbm5Jpu2us1dMAQtdg2Uqtq0lKtpLFrgL1cgRfQcd8Re4b17M7qxEAuVnL72y2jCE%2FBLOvfWq7keGScSHEhvdRkAwgPk7fi1QNa%2F%2BbrqManPcW8BVpe51C1F02%2BUkQfzcCjybi93%2B3e0%2BX%2F6e8l4IYQPyD%2F3wAl9cXGjvTJLrYZy%2FHhMvyi7mj2VZ0ENnpARAwSGbKza%2B8uY3wilLuVVqs7SQNrLf0yDUHVmfzrb0%2BK68b9Gsx7Ha7g76KBdGhbOVJ9jt1LMJXmxL0GOqUB8osMz47Odj1Sbzse7u%2BH6sOEfAd59Q2hHsDKiT02v%2BksO9oDcGvryEswKusFd2hnDUQgQePn4PtIQOVx52jTZRRroTyi8TQQDScTieRObXz3RifWSqQaaYOP2E4qyE6TZgz46YXaSsbs00M1Vc6MA3kF853Id%2FvUF6Y%2F8nlPssg3hoDxLSzyKEN6s9B1WIRGrDMULcn5388z4YIQTF9%2BdJaJjlAl&X-Amz-Signature=cf4be815165805faa5619223ae3d455d282055a397c73075662c4d040fdf9509&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAKAN46%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFyZewAFIRfP9Jb%2F5VtLUk%2BvWS7R3alBy3haH7p78CyRAiEAoGXnB2QkGKETkb44ClPD3g3vFsk1Gw8K%2B61iQ4TK%2FFIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDM%2B8cGhY8ei2lHSZzSrcAz1X3Xcxebql7YkAClWZ5onbHPMrJBb4LPQMmrJWIYXID2kg87nAOw93zDHFpZTr6Ye5rIDqppXhJaegPKD7aWMw76HP2X1MpXi%2FrK52Fo1rVkfyCnIqTvmeGdTyAjZMhSfAWGsAbbHmXzQOO1jEQE%2BYvuddz%2BsRnG1JGSrL1xZU1umOG1w2QjzDdQooV2qw6v5KqKy7RPnD8%2FIQqBPYPpTmqVArO6ACdzS05T6MGXAwvddtfsVDr69xq8Hlq4cPwQwWwq6x%2Fspx6bjNVizyKYB9vAspPaoVznS1spMI9zcXxLehqhNePed1cl6qBIxjQTCCV2sLBcjz1mKoxr6gvjVDJ87kFY%2BgwrFdfsDNdVaZWxgCNOjUsYbm5Jpu2us1dMAQtdg2Uqtq0lKtpLFrgL1cgRfQcd8Re4b17M7qxEAuVnL72y2jCE%2FBLOvfWq7keGScSHEhvdRkAwgPk7fi1QNa%2F%2BbrqManPcW8BVpe51C1F02%2BUkQfzcCjybi93%2B3e0%2BX%2F6e8l4IYQPyD%2F3wAl9cXGjvTJLrYZy%2FHhMvyi7mj2VZ0ENnpARAwSGbKza%2B8uY3wilLuVVqs7SQNrLf0yDUHVmfzrb0%2BK68b9Gsx7Ha7g76KBdGhbOVJ9jt1LMJXmxL0GOqUB8osMz47Odj1Sbzse7u%2BH6sOEfAd59Q2hHsDKiT02v%2BksO9oDcGvryEswKusFd2hnDUQgQePn4PtIQOVx52jTZRRroTyi8TQQDScTieRObXz3RifWSqQaaYOP2E4qyE6TZgz46YXaSsbs00M1Vc6MA3kF853Id%2FvUF6Y%2F8nlPssg3hoDxLSzyKEN6s9B1WIRGrDMULcn5388z4YIQTF9%2BdJaJjlAl&X-Amz-Signature=2722b7b74fc12cc1f15fcd1e58f75ffd5b58cde78e0f2555409d979d8049d4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
