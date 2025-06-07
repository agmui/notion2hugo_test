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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GFDQYH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6A2WZeJPndMQ%2BbfHv7zQ%2BDPQk649xVPuvpayIKLiaNAiEAwjjcgYPP5jgQCWkbkOmPttOmIKxmVieQLPIYxi2tBzIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGjiiAQ%2B%2FRQ3AfL86SrcA1GFRmsg9C7yPNBKlqJY3T1btPQ0F%2B1qnirQVfludflzeRePXwT2pX61PVdynCS8CGffyTwdj%2F%2FwjxLV5p9FRhM%2BuFkPgGbsVrwCIlkTBAOP%2FcnUqNJ%2FdX4iO0kLDXSTSgBcXJsqKHDxGe2ChJpdV1KG189HgVYMcvI5t7jBUybA9gjbbERwZgFMiAtyYjdC8vXCmK0AfZhze2DeXLgEzUvNO1xrPLbC9tv7Vbw0MuBWQVdRdJJaPVUV%2BCEQGudl1XRGZpPiLF%2FBd1x%2FqvxmYmVj2Lup3vqi0izW79L6dzmdmRY1pQKYg7kqEZZtwDs0ozqM%2FGZVCGUspenTATUYtCPCBhsPJaGC8SyI5GJVnt5sk8PzB%2FIn1%2BuCOOnX5ucVTg1122QaBpzPxGDraZ85%2FGQ5ZxwuCWJs3%2F%2FiMC5GpiAFFNZqtp%2FQVo8YJGESH3qZUVKp%2B4cNPLiwAwJK2SVTVzr2%2Fb27quGgZCGoT5or3rlc6aSSuWq1iwYfjY2EHVxa1avjdptoQKvKpUt8H%2BcZQoZXxc87SYmxLgGywIQSlwEuR%2BHzirNXhmJBaNAruHHyfqUL8tpBs315vSEtdt8z%2Bj9GQdYT1dhJ73yr58IYU3lr%2Fu%2BWyB%2BEJYUni%2BhCMIGWksIGOqUBp2RUEO34DJBtHXWlVX8gauOgPv3RynkWUl7p55mZgESaJVZ31X%2FSsMp18mHnhWDrnuBuNHDzIVUdwedADZKedEpHXUidOdqpJo8MykQtqOuUSGNQOl2G4k00vgKsA%2BoMjNvccsVcmV0s1tndV31m5GwzwR9s%2BO9sKLjEoxfIMMOJOo%2BiGHnAY82iPv0MmCVrkMsH0B%2FQ6qKdkH9Ko5kzVrEGklE0&X-Amz-Signature=d10bc6503458efdeddaa5dd94e114b3931a9e8f9666ce62ce5c4acd7c47c0011&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GFDQYH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6A2WZeJPndMQ%2BbfHv7zQ%2BDPQk649xVPuvpayIKLiaNAiEAwjjcgYPP5jgQCWkbkOmPttOmIKxmVieQLPIYxi2tBzIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGjiiAQ%2B%2FRQ3AfL86SrcA1GFRmsg9C7yPNBKlqJY3T1btPQ0F%2B1qnirQVfludflzeRePXwT2pX61PVdynCS8CGffyTwdj%2F%2FwjxLV5p9FRhM%2BuFkPgGbsVrwCIlkTBAOP%2FcnUqNJ%2FdX4iO0kLDXSTSgBcXJsqKHDxGe2ChJpdV1KG189HgVYMcvI5t7jBUybA9gjbbERwZgFMiAtyYjdC8vXCmK0AfZhze2DeXLgEzUvNO1xrPLbC9tv7Vbw0MuBWQVdRdJJaPVUV%2BCEQGudl1XRGZpPiLF%2FBd1x%2FqvxmYmVj2Lup3vqi0izW79L6dzmdmRY1pQKYg7kqEZZtwDs0ozqM%2FGZVCGUspenTATUYtCPCBhsPJaGC8SyI5GJVnt5sk8PzB%2FIn1%2BuCOOnX5ucVTg1122QaBpzPxGDraZ85%2FGQ5ZxwuCWJs3%2F%2FiMC5GpiAFFNZqtp%2FQVo8YJGESH3qZUVKp%2B4cNPLiwAwJK2SVTVzr2%2Fb27quGgZCGoT5or3rlc6aSSuWq1iwYfjY2EHVxa1avjdptoQKvKpUt8H%2BcZQoZXxc87SYmxLgGywIQSlwEuR%2BHzirNXhmJBaNAruHHyfqUL8tpBs315vSEtdt8z%2Bj9GQdYT1dhJ73yr58IYU3lr%2Fu%2BWyB%2BEJYUni%2BhCMIGWksIGOqUBp2RUEO34DJBtHXWlVX8gauOgPv3RynkWUl7p55mZgESaJVZ31X%2FSsMp18mHnhWDrnuBuNHDzIVUdwedADZKedEpHXUidOdqpJo8MykQtqOuUSGNQOl2G4k00vgKsA%2BoMjNvccsVcmV0s1tndV31m5GwzwR9s%2BO9sKLjEoxfIMMOJOo%2BiGHnAY82iPv0MmCVrkMsH0B%2FQ6qKdkH9Ko5kzVrEGklE0&X-Amz-Signature=03fc05417f75eb7a3a5720ed35a4f83696657fd2090e537994b67c25da3b3b70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GFDQYH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6A2WZeJPndMQ%2BbfHv7zQ%2BDPQk649xVPuvpayIKLiaNAiEAwjjcgYPP5jgQCWkbkOmPttOmIKxmVieQLPIYxi2tBzIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGjiiAQ%2B%2FRQ3AfL86SrcA1GFRmsg9C7yPNBKlqJY3T1btPQ0F%2B1qnirQVfludflzeRePXwT2pX61PVdynCS8CGffyTwdj%2F%2FwjxLV5p9FRhM%2BuFkPgGbsVrwCIlkTBAOP%2FcnUqNJ%2FdX4iO0kLDXSTSgBcXJsqKHDxGe2ChJpdV1KG189HgVYMcvI5t7jBUybA9gjbbERwZgFMiAtyYjdC8vXCmK0AfZhze2DeXLgEzUvNO1xrPLbC9tv7Vbw0MuBWQVdRdJJaPVUV%2BCEQGudl1XRGZpPiLF%2FBd1x%2FqvxmYmVj2Lup3vqi0izW79L6dzmdmRY1pQKYg7kqEZZtwDs0ozqM%2FGZVCGUspenTATUYtCPCBhsPJaGC8SyI5GJVnt5sk8PzB%2FIn1%2BuCOOnX5ucVTg1122QaBpzPxGDraZ85%2FGQ5ZxwuCWJs3%2F%2FiMC5GpiAFFNZqtp%2FQVo8YJGESH3qZUVKp%2B4cNPLiwAwJK2SVTVzr2%2Fb27quGgZCGoT5or3rlc6aSSuWq1iwYfjY2EHVxa1avjdptoQKvKpUt8H%2BcZQoZXxc87SYmxLgGywIQSlwEuR%2BHzirNXhmJBaNAruHHyfqUL8tpBs315vSEtdt8z%2Bj9GQdYT1dhJ73yr58IYU3lr%2Fu%2BWyB%2BEJYUni%2BhCMIGWksIGOqUBp2RUEO34DJBtHXWlVX8gauOgPv3RynkWUl7p55mZgESaJVZ31X%2FSsMp18mHnhWDrnuBuNHDzIVUdwedADZKedEpHXUidOdqpJo8MykQtqOuUSGNQOl2G4k00vgKsA%2BoMjNvccsVcmV0s1tndV31m5GwzwR9s%2BO9sKLjEoxfIMMOJOo%2BiGHnAY82iPv0MmCVrkMsH0B%2FQ6qKdkH9Ko5kzVrEGklE0&X-Amz-Signature=39628b4e4ac00c57b5ad399e636924144b5d4337b28abb5898049f858210c843&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
