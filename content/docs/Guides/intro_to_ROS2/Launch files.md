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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEMEN66%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjlZy5d%2BqtE7Ure%2Ffnt2wTwK5k%2FVCkvOZSbyCZza664wIgf8mGA%2Fbm5H%2Fnzx%2B6w5UG5p3%2F%2FF5B8833zXCl7khRkiYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDECOpVbyull7UDsZUSrcA1KpqQm7SQA%2FC4q5tIugg%2BpbmzIqUICWL4%2F1CsrZ%2F%2FvkI3ZEVYitONXP9nnqZT5r0MAA4yd5GqftHjId%2By8aDoQqOldb6SgLILztnnvIPat88NmCdJWoKZ66CLBvHVLXccezAXnkeFxMfADNKMp0kVXpsKw4%2BlXtG9fvCPo1xzcuCtGsQBbr14JzEqkAo7Qls6NBcOTn3py2jmG%2BI71DtGEvUvlwraIc%2Bq6nvEN%2FboxHqG0x9T9n5XQXhXNyA9LkCc1vMY%2Bvg2oMMIUoK9AeC89Mz%2FtUyxtA0%2BiHblw0Ksh2yE7fGTtckXdCses6xunCfuvWJYRScMKJ%2B8rsjdEAdrd1ihJECyHTVJYf1fD4eoYZLR4SlLiUJaY3yBZ%2BbBtevso1LZEMso1wVWdx4UPMK5Q6uZWP3lJ3c6COPEjDFnvhY1HUvTu1qEEctjpT6qfEXqP6D16tIpR%2Frotn55kKq3Fzbmga51Lw63Ih9sQexscTsKg9V9DrWGAqS2CvQNyLesLquIvXi%2B4W8g680d5w%2BA9cR2d3mPCMi3Gzb59wGSqj7EnVWr%2Fz3eklxIHXfvai0kk9iRW5h%2B9cVFwbQkcPx0S4qr9EL5IARB%2FpIUkEAOA3oTwcqH2Rx%2FyiOKNlMLLSydQGOqUBPMpnYFr%2BKD2W9Ixe53wV2ZUI0NTLIOlykN81iFdHggDUqYwdslmBoQSKIfkU%2F2qpgmT6j4bMHMyahRwU0jqp8yvmmOAtLkWC9LwoYVnk2aI3i4yD%2BoooMyyPSs810MycBfBg3hhMeI8lAOQ8A%2F70DB8CmHz5Xpa3jhqwWZ8vy1C2zIrq1g3zNQmK9XvAeU%2FlTCx0kYG2bW030md52ySI3ZNHD42b&X-Amz-Signature=5d7a72d26fea2012491dee848ab6f87d2587f4627b77400294ce699d010d68ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEMEN66%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjlZy5d%2BqtE7Ure%2Ffnt2wTwK5k%2FVCkvOZSbyCZza664wIgf8mGA%2Fbm5H%2Fnzx%2B6w5UG5p3%2F%2FF5B8833zXCl7khRkiYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDECOpVbyull7UDsZUSrcA1KpqQm7SQA%2FC4q5tIugg%2BpbmzIqUICWL4%2F1CsrZ%2F%2FvkI3ZEVYitONXP9nnqZT5r0MAA4yd5GqftHjId%2By8aDoQqOldb6SgLILztnnvIPat88NmCdJWoKZ66CLBvHVLXccezAXnkeFxMfADNKMp0kVXpsKw4%2BlXtG9fvCPo1xzcuCtGsQBbr14JzEqkAo7Qls6NBcOTn3py2jmG%2BI71DtGEvUvlwraIc%2Bq6nvEN%2FboxHqG0x9T9n5XQXhXNyA9LkCc1vMY%2Bvg2oMMIUoK9AeC89Mz%2FtUyxtA0%2BiHblw0Ksh2yE7fGTtckXdCses6xunCfuvWJYRScMKJ%2B8rsjdEAdrd1ihJECyHTVJYf1fD4eoYZLR4SlLiUJaY3yBZ%2BbBtevso1LZEMso1wVWdx4UPMK5Q6uZWP3lJ3c6COPEjDFnvhY1HUvTu1qEEctjpT6qfEXqP6D16tIpR%2Frotn55kKq3Fzbmga51Lw63Ih9sQexscTsKg9V9DrWGAqS2CvQNyLesLquIvXi%2B4W8g680d5w%2BA9cR2d3mPCMi3Gzb59wGSqj7EnVWr%2Fz3eklxIHXfvai0kk9iRW5h%2B9cVFwbQkcPx0S4qr9EL5IARB%2FpIUkEAOA3oTwcqH2Rx%2FyiOKNlMLLSydQGOqUBPMpnYFr%2BKD2W9Ixe53wV2ZUI0NTLIOlykN81iFdHggDUqYwdslmBoQSKIfkU%2F2qpgmT6j4bMHMyahRwU0jqp8yvmmOAtLkWC9LwoYVnk2aI3i4yD%2BoooMyyPSs810MycBfBg3hhMeI8lAOQ8A%2F70DB8CmHz5Xpa3jhqwWZ8vy1C2zIrq1g3zNQmK9XvAeU%2FlTCx0kYG2bW030md52ySI3ZNHD42b&X-Amz-Signature=85289b4e8ecfab2b0fb083146b7e5ad3b2a43509fc9ffebcd851352bf2ca72a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEMEN66%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjlZy5d%2BqtE7Ure%2Ffnt2wTwK5k%2FVCkvOZSbyCZza664wIgf8mGA%2Fbm5H%2Fnzx%2B6w5UG5p3%2F%2FF5B8833zXCl7khRkiYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDECOpVbyull7UDsZUSrcA1KpqQm7SQA%2FC4q5tIugg%2BpbmzIqUICWL4%2F1CsrZ%2F%2FvkI3ZEVYitONXP9nnqZT5r0MAA4yd5GqftHjId%2By8aDoQqOldb6SgLILztnnvIPat88NmCdJWoKZ66CLBvHVLXccezAXnkeFxMfADNKMp0kVXpsKw4%2BlXtG9fvCPo1xzcuCtGsQBbr14JzEqkAo7Qls6NBcOTn3py2jmG%2BI71DtGEvUvlwraIc%2Bq6nvEN%2FboxHqG0x9T9n5XQXhXNyA9LkCc1vMY%2Bvg2oMMIUoK9AeC89Mz%2FtUyxtA0%2BiHblw0Ksh2yE7fGTtckXdCses6xunCfuvWJYRScMKJ%2B8rsjdEAdrd1ihJECyHTVJYf1fD4eoYZLR4SlLiUJaY3yBZ%2BbBtevso1LZEMso1wVWdx4UPMK5Q6uZWP3lJ3c6COPEjDFnvhY1HUvTu1qEEctjpT6qfEXqP6D16tIpR%2Frotn55kKq3Fzbmga51Lw63Ih9sQexscTsKg9V9DrWGAqS2CvQNyLesLquIvXi%2B4W8g680d5w%2BA9cR2d3mPCMi3Gzb59wGSqj7EnVWr%2Fz3eklxIHXfvai0kk9iRW5h%2B9cVFwbQkcPx0S4qr9EL5IARB%2FpIUkEAOA3oTwcqH2Rx%2FyiOKNlMLLSydQGOqUBPMpnYFr%2BKD2W9Ixe53wV2ZUI0NTLIOlykN81iFdHggDUqYwdslmBoQSKIfkU%2F2qpgmT6j4bMHMyahRwU0jqp8yvmmOAtLkWC9LwoYVnk2aI3i4yD%2BoooMyyPSs810MycBfBg3hhMeI8lAOQ8A%2F70DB8CmHz5Xpa3jhqwWZ8vy1C2zIrq1g3zNQmK9XvAeU%2FlTCx0kYG2bW030md52ySI3ZNHD42b&X-Amz-Signature=0e48bd9e1132ec598687d7eab0e96333cf7ee9f72b7e4d82afee3e57f20ffd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
