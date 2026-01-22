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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VT2RSD%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCnJ0IbFzspwRcef%2BGQHE5O%2Bz4DicKu1e7MC87yWOz9sAIhAJzXqv2a3nYYDZEU7Pfnt1rvIgYwQKmUnzlCm5nQVyrDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOR3TCsi96Okn7Eoq3APJ3Bg0YLtj5qihYchnEXRTbA%2BLyPhMRNyS8QU3l7Hely9euXg2YmP%2BdsYVwIuy%2FAiIVkG5tOLIzJBnM7sX0e4SKvXympbaSQRoqjxWmAmGu9ZRWf89O0j2HrK%2F09n5FP6XUDaRwlCzPt5zPD1IioUfbR%2BPMsXopOosj02WKKTYnlpckQylvcjV7iGyNh%2Bjk6gT%2F63H9PG%2F7ordIaJiTLWOI6zGH02609AHa4GKCdK%2FRFqI%2B8nomxlERQziRKdP8dSHq0CGqzFLDPRLrwQf05%2BJaP92yc0%2FDHZ7JcQw9soz0RGoGHSPhPMLnm5iCBLLd5mG%2BvhPZSMNn6Hy7qwrjN3sPIcrUTxpV5aA5XOvA%2BBxlLqOd5%2FzYSX9dvsT0M0%2Bc%2FVJOu%2Bk1YNhkLOq5R%2FhsMdl3YSyVrgPVjZPZbyLbHNIvCic3eCkr80G32B2GqWsc3DxhoVTpjGfKixBvCOspQUUDIUAu2JX3JmCbSDiwplkNZp8Sz4hDe5OP4f3g%2FuZGgVsHg1SMBVlWyP60Zw0h43ML8gsDLOjTSCYsxeRviE%2Bd4M%2BTTmQh03QOyTfCe8joKhdSuuz2SdHiUGwIYvktHMCn%2Fu%2FR85bjDro8v51NduiXDRWJr5Z8UzqrgLFOTDz18XLBjqkAV628s3IuBt5z4myQTpz3lIhVD%2BJY8JHcUqoeJzLoVrQdIBxWgsjH25QIl6CTCo7SP%2FDgfoVVdk16YDlrSik7iKcnTTngloTzX9WcneqaNiFmex5HFnXjPIuAqUELt5VuUXiunlClrjAuaa%2B%2FJhxKmgr5NUuSt6qtXg%2FlBEjm2z4zlX%2BgCtmtbdE7H66fNc0xNduppO7R2pxZEeDfXrz8U4f8nmU&X-Amz-Signature=a444db6ded063c472eb3aa79fda739d7befdb1dd466dbe242e80e88ac19cbd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VT2RSD%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCnJ0IbFzspwRcef%2BGQHE5O%2Bz4DicKu1e7MC87yWOz9sAIhAJzXqv2a3nYYDZEU7Pfnt1rvIgYwQKmUnzlCm5nQVyrDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOR3TCsi96Okn7Eoq3APJ3Bg0YLtj5qihYchnEXRTbA%2BLyPhMRNyS8QU3l7Hely9euXg2YmP%2BdsYVwIuy%2FAiIVkG5tOLIzJBnM7sX0e4SKvXympbaSQRoqjxWmAmGu9ZRWf89O0j2HrK%2F09n5FP6XUDaRwlCzPt5zPD1IioUfbR%2BPMsXopOosj02WKKTYnlpckQylvcjV7iGyNh%2Bjk6gT%2F63H9PG%2F7ordIaJiTLWOI6zGH02609AHa4GKCdK%2FRFqI%2B8nomxlERQziRKdP8dSHq0CGqzFLDPRLrwQf05%2BJaP92yc0%2FDHZ7JcQw9soz0RGoGHSPhPMLnm5iCBLLd5mG%2BvhPZSMNn6Hy7qwrjN3sPIcrUTxpV5aA5XOvA%2BBxlLqOd5%2FzYSX9dvsT0M0%2Bc%2FVJOu%2Bk1YNhkLOq5R%2FhsMdl3YSyVrgPVjZPZbyLbHNIvCic3eCkr80G32B2GqWsc3DxhoVTpjGfKixBvCOspQUUDIUAu2JX3JmCbSDiwplkNZp8Sz4hDe5OP4f3g%2FuZGgVsHg1SMBVlWyP60Zw0h43ML8gsDLOjTSCYsxeRviE%2Bd4M%2BTTmQh03QOyTfCe8joKhdSuuz2SdHiUGwIYvktHMCn%2Fu%2FR85bjDro8v51NduiXDRWJr5Z8UzqrgLFOTDz18XLBjqkAV628s3IuBt5z4myQTpz3lIhVD%2BJY8JHcUqoeJzLoVrQdIBxWgsjH25QIl6CTCo7SP%2FDgfoVVdk16YDlrSik7iKcnTTngloTzX9WcneqaNiFmex5HFnXjPIuAqUELt5VuUXiunlClrjAuaa%2B%2FJhxKmgr5NUuSt6qtXg%2FlBEjm2z4zlX%2BgCtmtbdE7H66fNc0xNduppO7R2pxZEeDfXrz8U4f8nmU&X-Amz-Signature=801ac5fa6f7f5734a04705b7b7c7abeae994187af9e178fd8117a68a0f1369a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VT2RSD%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCnJ0IbFzspwRcef%2BGQHE5O%2Bz4DicKu1e7MC87yWOz9sAIhAJzXqv2a3nYYDZEU7Pfnt1rvIgYwQKmUnzlCm5nQVyrDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOR3TCsi96Okn7Eoq3APJ3Bg0YLtj5qihYchnEXRTbA%2BLyPhMRNyS8QU3l7Hely9euXg2YmP%2BdsYVwIuy%2FAiIVkG5tOLIzJBnM7sX0e4SKvXympbaSQRoqjxWmAmGu9ZRWf89O0j2HrK%2F09n5FP6XUDaRwlCzPt5zPD1IioUfbR%2BPMsXopOosj02WKKTYnlpckQylvcjV7iGyNh%2Bjk6gT%2F63H9PG%2F7ordIaJiTLWOI6zGH02609AHa4GKCdK%2FRFqI%2B8nomxlERQziRKdP8dSHq0CGqzFLDPRLrwQf05%2BJaP92yc0%2FDHZ7JcQw9soz0RGoGHSPhPMLnm5iCBLLd5mG%2BvhPZSMNn6Hy7qwrjN3sPIcrUTxpV5aA5XOvA%2BBxlLqOd5%2FzYSX9dvsT0M0%2Bc%2FVJOu%2Bk1YNhkLOq5R%2FhsMdl3YSyVrgPVjZPZbyLbHNIvCic3eCkr80G32B2GqWsc3DxhoVTpjGfKixBvCOspQUUDIUAu2JX3JmCbSDiwplkNZp8Sz4hDe5OP4f3g%2FuZGgVsHg1SMBVlWyP60Zw0h43ML8gsDLOjTSCYsxeRviE%2Bd4M%2BTTmQh03QOyTfCe8joKhdSuuz2SdHiUGwIYvktHMCn%2Fu%2FR85bjDro8v51NduiXDRWJr5Z8UzqrgLFOTDz18XLBjqkAV628s3IuBt5z4myQTpz3lIhVD%2BJY8JHcUqoeJzLoVrQdIBxWgsjH25QIl6CTCo7SP%2FDgfoVVdk16YDlrSik7iKcnTTngloTzX9WcneqaNiFmex5HFnXjPIuAqUELt5VuUXiunlClrjAuaa%2B%2FJhxKmgr5NUuSt6qtXg%2FlBEjm2z4zlX%2BgCtmtbdE7H66fNc0xNduppO7R2pxZEeDfXrz8U4f8nmU&X-Amz-Signature=b839d965929ba8cf8ccccbb54a1030ecefc794d049193c8081d2ef26298041dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
