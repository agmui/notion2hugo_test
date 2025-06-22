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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEROXWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYsXwXuHX%2BVXTJEkXPYBC59Wv1JvPCWjn%2FUrqYiN%2F6CAiAKVGhU97KLQFQUwSC0c095GitNcWiQmLaMj3h%2Fj%2B4w1iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWb%2FCJSEwN36Kl8znKtwDAbn9pH84dZAYe%2FeuLww0RUgcvbZgkcTtoND3nJRfOyJISo4CMzhraKrBPaXO87dX9t7LTxHdDm0GYPeYBNT%2Fymtoyn5ymziG5zRIxLkD443Ut2SYwhFFNxSOvR1q0c%2Bi%2FY72VjSwFCp465DmlWi%2FfUus1CORodnvq9LCUNOCj7EKrLL7yjKkO4y3xNofJ5IceJEZpCsCMEZyj3E0CXi5Uey0uDTyOENfGW94TXFwEAYmYbjseLffoB80hlZodr4TS5%2FDaEGDUBzgNLPOoc%2FJekhnWScDQHndrWvgSLgx3qid8kWVGVbGlCKD1D%2FyA1rmE%2FUym6zBYlpr8oGtQrrFXIHOtFRIeKsEx4T%2FUDJHGcRLaPj5Gw7xpmjuoS8MRMPbFpj11VVu2%2FacxCITtEWxhNmV%2F8daloLt4Rie%2BWCqKiU%2FvWoZ%2FyqLOwY3cdT6EvKgKyZIAbYQjSKfkACMj2ZUFLLCLOkIbnmN7g2%2FLLi0z1B2Gl%2BxBrPMq4OMFv%2Bh2oLRTCJ6%2B%2FIIWqaSASIhTQ0cWlGgkG3N%2Fr6aLa19RsR9pcPuI1jUVyp7wqIGIIzHa47hoep6lFFJV4DgyYdV%2BCBeSTikdTiVak2th1%2F4hMUozeft90Ch89wnW5jBazUwwIfdwgY6pgEJfYOtbrkefhMQTMo6L4xK3GDDUkA3Qbe4LwiXpFkQw72dliNkciaD0etUgAEYCJ3JrOjzNszsW%2FILv%2BAZf75vsslDLNx63wVPv5Q%2Bs7NAjDnKYZNPzE28sc5VGubVKjryVIrUnoPPrpje67Fr%2FYo0Mrtsw3XKJgNDPoJoTJnmNkTMzV8UNC%2B%2BDL10QdDQdzbigXSRZwiNpWxKYIDhLirzT%2FfTznWn&X-Amz-Signature=22497cdfc5417ecdd68b7045bf523d4e1662bd427e67e539d2668e2a20ba6285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEROXWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYsXwXuHX%2BVXTJEkXPYBC59Wv1JvPCWjn%2FUrqYiN%2F6CAiAKVGhU97KLQFQUwSC0c095GitNcWiQmLaMj3h%2Fj%2B4w1iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWb%2FCJSEwN36Kl8znKtwDAbn9pH84dZAYe%2FeuLww0RUgcvbZgkcTtoND3nJRfOyJISo4CMzhraKrBPaXO87dX9t7LTxHdDm0GYPeYBNT%2Fymtoyn5ymziG5zRIxLkD443Ut2SYwhFFNxSOvR1q0c%2Bi%2FY72VjSwFCp465DmlWi%2FfUus1CORodnvq9LCUNOCj7EKrLL7yjKkO4y3xNofJ5IceJEZpCsCMEZyj3E0CXi5Uey0uDTyOENfGW94TXFwEAYmYbjseLffoB80hlZodr4TS5%2FDaEGDUBzgNLPOoc%2FJekhnWScDQHndrWvgSLgx3qid8kWVGVbGlCKD1D%2FyA1rmE%2FUym6zBYlpr8oGtQrrFXIHOtFRIeKsEx4T%2FUDJHGcRLaPj5Gw7xpmjuoS8MRMPbFpj11VVu2%2FacxCITtEWxhNmV%2F8daloLt4Rie%2BWCqKiU%2FvWoZ%2FyqLOwY3cdT6EvKgKyZIAbYQjSKfkACMj2ZUFLLCLOkIbnmN7g2%2FLLi0z1B2Gl%2BxBrPMq4OMFv%2Bh2oLRTCJ6%2B%2FIIWqaSASIhTQ0cWlGgkG3N%2Fr6aLa19RsR9pcPuI1jUVyp7wqIGIIzHa47hoep6lFFJV4DgyYdV%2BCBeSTikdTiVak2th1%2F4hMUozeft90Ch89wnW5jBazUwwIfdwgY6pgEJfYOtbrkefhMQTMo6L4xK3GDDUkA3Qbe4LwiXpFkQw72dliNkciaD0etUgAEYCJ3JrOjzNszsW%2FILv%2BAZf75vsslDLNx63wVPv5Q%2Bs7NAjDnKYZNPzE28sc5VGubVKjryVIrUnoPPrpje67Fr%2FYo0Mrtsw3XKJgNDPoJoTJnmNkTMzV8UNC%2B%2BDL10QdDQdzbigXSRZwiNpWxKYIDhLirzT%2FfTznWn&X-Amz-Signature=49e2daa3d4ffc5e2deda64486220ecaedb2fa55b3e966c689458711c482b687e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEROXWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYsXwXuHX%2BVXTJEkXPYBC59Wv1JvPCWjn%2FUrqYiN%2F6CAiAKVGhU97KLQFQUwSC0c095GitNcWiQmLaMj3h%2Fj%2B4w1iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWb%2FCJSEwN36Kl8znKtwDAbn9pH84dZAYe%2FeuLww0RUgcvbZgkcTtoND3nJRfOyJISo4CMzhraKrBPaXO87dX9t7LTxHdDm0GYPeYBNT%2Fymtoyn5ymziG5zRIxLkD443Ut2SYwhFFNxSOvR1q0c%2Bi%2FY72VjSwFCp465DmlWi%2FfUus1CORodnvq9LCUNOCj7EKrLL7yjKkO4y3xNofJ5IceJEZpCsCMEZyj3E0CXi5Uey0uDTyOENfGW94TXFwEAYmYbjseLffoB80hlZodr4TS5%2FDaEGDUBzgNLPOoc%2FJekhnWScDQHndrWvgSLgx3qid8kWVGVbGlCKD1D%2FyA1rmE%2FUym6zBYlpr8oGtQrrFXIHOtFRIeKsEx4T%2FUDJHGcRLaPj5Gw7xpmjuoS8MRMPbFpj11VVu2%2FacxCITtEWxhNmV%2F8daloLt4Rie%2BWCqKiU%2FvWoZ%2FyqLOwY3cdT6EvKgKyZIAbYQjSKfkACMj2ZUFLLCLOkIbnmN7g2%2FLLi0z1B2Gl%2BxBrPMq4OMFv%2Bh2oLRTCJ6%2B%2FIIWqaSASIhTQ0cWlGgkG3N%2Fr6aLa19RsR9pcPuI1jUVyp7wqIGIIzHa47hoep6lFFJV4DgyYdV%2BCBeSTikdTiVak2th1%2F4hMUozeft90Ch89wnW5jBazUwwIfdwgY6pgEJfYOtbrkefhMQTMo6L4xK3GDDUkA3Qbe4LwiXpFkQw72dliNkciaD0etUgAEYCJ3JrOjzNszsW%2FILv%2BAZf75vsslDLNx63wVPv5Q%2Bs7NAjDnKYZNPzE28sc5VGubVKjryVIrUnoPPrpje67Fr%2FYo0Mrtsw3XKJgNDPoJoTJnmNkTMzV8UNC%2B%2BDL10QdDQdzbigXSRZwiNpWxKYIDhLirzT%2FfTznWn&X-Amz-Signature=38be9e9c8ea1c9f4b4157ae30ad3300126fd7c68cdd387d17055188127868232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
