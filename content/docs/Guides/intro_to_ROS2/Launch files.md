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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SOCSY3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiTNToxdK2xb%2F89jJB1nSYdXX%2BoIlXduL5KJB1qr%2FY7AiEA2IMbWJQFO0%2BzZmerZTdMNVpAc5%2FbV%2FneZSCeaODydogqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg72LqMyLCt6Kr5hSrcAxGDFjxAc%2BZVcgYQ3XnmN6hcnohX3%2FKcMuIdgWJQLeTd21uwnKthQ1JggCcvpny38ZQzAhcmVVkvyGm6X%2FzZHdcSyeSzIqwZRdnkMegDbNoHjTMHUdivKuP07xtu1fXAlRw4QaLgK4q4KMNg%2FE3Rsdjrb3JcgLoNRizTw4T9kv7RonSeh4PRa9mPGlQs5CmmfmH%2Ba16lvpf0YnJc2mO2lQS%2FYjTDUcj78at0joCoRtwfaYUSu89pRbnlBET8%2BYZPpkevMujssi5XxFye9EaF8Sj0U5vvfvkhCah7E7xdUltI0up2uKJPxpoUmCy62KcOc8QFjlievDHkXj1H7Gwr6%2FmYQKgmNQjdw1WPiQOv0Lx3uNwzR5bhCLH0QUez%2BzhYG4u%2FiVg1UyC24ziTzU3xv0QBae2X2c%2Fw0jORTmduutKM6rr7%2BWnhmVYZBLKqKV1oPJUehEpe4t5qwr1%2FYtdvnzMBP%2BKr4JnMH0j%2F0iLcu3A3KWxbLGdDor8LDI%2FrDa7b%2F4DrtE6D%2Be%2FC14bIn5MP6yQbakbpUpv%2BdLh%2FyZUeTazCDo6VCRDbvTR0yz%2Bld22g1eY1PFy%2F9%2BBNdsyW%2F%2FgjzDPDmOFpQJwA06KRcTyAluFw6hnLkIZA%2FcJbvcBYMKOG4L0GOqUBE9OqlOk%2FTc1RwuZ1eMy2pzqXiqrLE0busnBCJgstnlZmRCxqxGcPD%2BwjK%2F8TfjCwt%2BJ2h%2FXODZ6XlyhWnrkcsfKFeQY9Gck41%2Bi6YzQYWLP7q1Tai8iq%2Bcj1PsL8ZMvzrKrGeVN%2BjGj3xjizJ0Dn6dPUqvQjJADc7M4Qz7L1%2FxNMFtXnzePoA0Rn7fL0VG2C7TaqLly0h1C796gu9G06Dx45bsA7&X-Amz-Signature=9c959c10e6f3d33715dd7bac45fdef6694e77ae0eb93a035013a1ddc8c5de605&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SOCSY3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiTNToxdK2xb%2F89jJB1nSYdXX%2BoIlXduL5KJB1qr%2FY7AiEA2IMbWJQFO0%2BzZmerZTdMNVpAc5%2FbV%2FneZSCeaODydogqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg72LqMyLCt6Kr5hSrcAxGDFjxAc%2BZVcgYQ3XnmN6hcnohX3%2FKcMuIdgWJQLeTd21uwnKthQ1JggCcvpny38ZQzAhcmVVkvyGm6X%2FzZHdcSyeSzIqwZRdnkMegDbNoHjTMHUdivKuP07xtu1fXAlRw4QaLgK4q4KMNg%2FE3Rsdjrb3JcgLoNRizTw4T9kv7RonSeh4PRa9mPGlQs5CmmfmH%2Ba16lvpf0YnJc2mO2lQS%2FYjTDUcj78at0joCoRtwfaYUSu89pRbnlBET8%2BYZPpkevMujssi5XxFye9EaF8Sj0U5vvfvkhCah7E7xdUltI0up2uKJPxpoUmCy62KcOc8QFjlievDHkXj1H7Gwr6%2FmYQKgmNQjdw1WPiQOv0Lx3uNwzR5bhCLH0QUez%2BzhYG4u%2FiVg1UyC24ziTzU3xv0QBae2X2c%2Fw0jORTmduutKM6rr7%2BWnhmVYZBLKqKV1oPJUehEpe4t5qwr1%2FYtdvnzMBP%2BKr4JnMH0j%2F0iLcu3A3KWxbLGdDor8LDI%2FrDa7b%2F4DrtE6D%2Be%2FC14bIn5MP6yQbakbpUpv%2BdLh%2FyZUeTazCDo6VCRDbvTR0yz%2Bld22g1eY1PFy%2F9%2BBNdsyW%2F%2FgjzDPDmOFpQJwA06KRcTyAluFw6hnLkIZA%2FcJbvcBYMKOG4L0GOqUBE9OqlOk%2FTc1RwuZ1eMy2pzqXiqrLE0busnBCJgstnlZmRCxqxGcPD%2BwjK%2F8TfjCwt%2BJ2h%2FXODZ6XlyhWnrkcsfKFeQY9Gck41%2Bi6YzQYWLP7q1Tai8iq%2Bcj1PsL8ZMvzrKrGeVN%2BjGj3xjizJ0Dn6dPUqvQjJADc7M4Qz7L1%2FxNMFtXnzePoA0Rn7fL0VG2C7TaqLly0h1C796gu9G06Dx45bsA7&X-Amz-Signature=610db243fe42addefeb50d9c2106703e4a9a05c795f62c27104d97e967f5f20e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SOCSY3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiTNToxdK2xb%2F89jJB1nSYdXX%2BoIlXduL5KJB1qr%2FY7AiEA2IMbWJQFO0%2BzZmerZTdMNVpAc5%2FbV%2FneZSCeaODydogqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg72LqMyLCt6Kr5hSrcAxGDFjxAc%2BZVcgYQ3XnmN6hcnohX3%2FKcMuIdgWJQLeTd21uwnKthQ1JggCcvpny38ZQzAhcmVVkvyGm6X%2FzZHdcSyeSzIqwZRdnkMegDbNoHjTMHUdivKuP07xtu1fXAlRw4QaLgK4q4KMNg%2FE3Rsdjrb3JcgLoNRizTw4T9kv7RonSeh4PRa9mPGlQs5CmmfmH%2Ba16lvpf0YnJc2mO2lQS%2FYjTDUcj78at0joCoRtwfaYUSu89pRbnlBET8%2BYZPpkevMujssi5XxFye9EaF8Sj0U5vvfvkhCah7E7xdUltI0up2uKJPxpoUmCy62KcOc8QFjlievDHkXj1H7Gwr6%2FmYQKgmNQjdw1WPiQOv0Lx3uNwzR5bhCLH0QUez%2BzhYG4u%2FiVg1UyC24ziTzU3xv0QBae2X2c%2Fw0jORTmduutKM6rr7%2BWnhmVYZBLKqKV1oPJUehEpe4t5qwr1%2FYtdvnzMBP%2BKr4JnMH0j%2F0iLcu3A3KWxbLGdDor8LDI%2FrDa7b%2F4DrtE6D%2Be%2FC14bIn5MP6yQbakbpUpv%2BdLh%2FyZUeTazCDo6VCRDbvTR0yz%2Bld22g1eY1PFy%2F9%2BBNdsyW%2F%2FgjzDPDmOFpQJwA06KRcTyAluFw6hnLkIZA%2FcJbvcBYMKOG4L0GOqUBE9OqlOk%2FTc1RwuZ1eMy2pzqXiqrLE0busnBCJgstnlZmRCxqxGcPD%2BwjK%2F8TfjCwt%2BJ2h%2FXODZ6XlyhWnrkcsfKFeQY9Gck41%2Bi6YzQYWLP7q1Tai8iq%2Bcj1PsL8ZMvzrKrGeVN%2BjGj3xjizJ0Dn6dPUqvQjJADc7M4Qz7L1%2FxNMFtXnzePoA0Rn7fL0VG2C7TaqLly0h1C796gu9G06Dx45bsA7&X-Amz-Signature=ea0503a270adb58a74384ea1f91090937ea90667452f8a3c84b5ad0f20db5862&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
