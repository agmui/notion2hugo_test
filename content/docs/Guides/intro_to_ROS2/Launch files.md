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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MDPNYA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCJlpjnaumVrv20%2F2ov2k5uPwigStAFa0S91o5vjim8GQIhAPVnikAN5en9mkw95zA1u45CmwyROiIV%2BM%2FeO4bJls5CKv8DCEgQABoMNjM3NDIzMTgzODA1IgzYYqwTQl5ZjwUZDoMq3AOt1D3Q06mRxa0%2Bgt8yNJMP4UTcJDH0jE4BGscnpaXXnifliDE547hkar60FsPRmrxe9gr2QToFhg1FUXE2%2Brt4KKzYF80Fi3VU%2FWj0Tvmac8odE8dvMEpk26DYmBk9AY3aRe4Ux3VrAlF0P853D0nHOks9j3jWXPG90TB5Obxge%2B0N4E8WkjPJ0HOKaentQqeLjEzz%2Bm1c8reOi%2BCouudDCJZeG0xNpnXiRI5H2vNyh55DAgFgqSfvK%2FBrzIe%2BNDi0STVFZjq6UCiAsEmuJ68cNmKPIec8ArcXLsIiLFiTbIfVh4QzskGFn5jPZc6Axx7KFYlkngcya7Z12eYCt5CWlaTrO%2BTr1ecVwjAieX1x%2BV5OiYdjoow3e8Pm28rR37VxJohcHeL9idpw4cprsIAVQQyjr7wnWi6LjbxeTPYs%2B2I9Nm7o1gfIvTx5dnSwm8Nz6GAA7K1bsVXx5Wrj5Fb3X7M4fXgaRmu5RkxXIBzII92uiFBNwSMD%2BO2UXvY0UzdVekf0OmlRptJ6G%2FianF8iKAso%2Bfv0D4A103MMxFu5m0UFxoZLie%2Bq1EZ0dUE0eQxPyWJ8MNX4rHCJAC5lOYPLR5sct8a4rjbqd2tRDqS33jevFkBCEMJ0qaZAQjDH2tnDBjqkAa4%2FpotB104IaIq59yT2rqVTBOxlTQYJNg2AKMs3WrB6wekKeeidw%2B6z7db8zTNeOQ8BVb%2BzFx%2B%2FDRWTcPQ4RkKyVov55F5HC0gv8ThggFSuWgll3AIQSBKxZSdoKRACUzryVDATEIGLcRPSMrgffG6KTJmHHOyMYI7lHilp%2BVCVGDsEbW6TC2q8CO8axMALAk9nF4pVJFvWSupP9Q108bcMg7Wn&X-Amz-Signature=ed56a64aa1db2e274fe5149385595ff6d095f02b5c3f07a96fb5dc28d14b3a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MDPNYA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCJlpjnaumVrv20%2F2ov2k5uPwigStAFa0S91o5vjim8GQIhAPVnikAN5en9mkw95zA1u45CmwyROiIV%2BM%2FeO4bJls5CKv8DCEgQABoMNjM3NDIzMTgzODA1IgzYYqwTQl5ZjwUZDoMq3AOt1D3Q06mRxa0%2Bgt8yNJMP4UTcJDH0jE4BGscnpaXXnifliDE547hkar60FsPRmrxe9gr2QToFhg1FUXE2%2Brt4KKzYF80Fi3VU%2FWj0Tvmac8odE8dvMEpk26DYmBk9AY3aRe4Ux3VrAlF0P853D0nHOks9j3jWXPG90TB5Obxge%2B0N4E8WkjPJ0HOKaentQqeLjEzz%2Bm1c8reOi%2BCouudDCJZeG0xNpnXiRI5H2vNyh55DAgFgqSfvK%2FBrzIe%2BNDi0STVFZjq6UCiAsEmuJ68cNmKPIec8ArcXLsIiLFiTbIfVh4QzskGFn5jPZc6Axx7KFYlkngcya7Z12eYCt5CWlaTrO%2BTr1ecVwjAieX1x%2BV5OiYdjoow3e8Pm28rR37VxJohcHeL9idpw4cprsIAVQQyjr7wnWi6LjbxeTPYs%2B2I9Nm7o1gfIvTx5dnSwm8Nz6GAA7K1bsVXx5Wrj5Fb3X7M4fXgaRmu5RkxXIBzII92uiFBNwSMD%2BO2UXvY0UzdVekf0OmlRptJ6G%2FianF8iKAso%2Bfv0D4A103MMxFu5m0UFxoZLie%2Bq1EZ0dUE0eQxPyWJ8MNX4rHCJAC5lOYPLR5sct8a4rjbqd2tRDqS33jevFkBCEMJ0qaZAQjDH2tnDBjqkAa4%2FpotB104IaIq59yT2rqVTBOxlTQYJNg2AKMs3WrB6wekKeeidw%2B6z7db8zTNeOQ8BVb%2BzFx%2B%2FDRWTcPQ4RkKyVov55F5HC0gv8ThggFSuWgll3AIQSBKxZSdoKRACUzryVDATEIGLcRPSMrgffG6KTJmHHOyMYI7lHilp%2BVCVGDsEbW6TC2q8CO8axMALAk9nF4pVJFvWSupP9Q108bcMg7Wn&X-Amz-Signature=955c4139aa08fbde4191ff99b648dad57786651bd3d8ef2f188e6d7d7cdc4db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MDPNYA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCJlpjnaumVrv20%2F2ov2k5uPwigStAFa0S91o5vjim8GQIhAPVnikAN5en9mkw95zA1u45CmwyROiIV%2BM%2FeO4bJls5CKv8DCEgQABoMNjM3NDIzMTgzODA1IgzYYqwTQl5ZjwUZDoMq3AOt1D3Q06mRxa0%2Bgt8yNJMP4UTcJDH0jE4BGscnpaXXnifliDE547hkar60FsPRmrxe9gr2QToFhg1FUXE2%2Brt4KKzYF80Fi3VU%2FWj0Tvmac8odE8dvMEpk26DYmBk9AY3aRe4Ux3VrAlF0P853D0nHOks9j3jWXPG90TB5Obxge%2B0N4E8WkjPJ0HOKaentQqeLjEzz%2Bm1c8reOi%2BCouudDCJZeG0xNpnXiRI5H2vNyh55DAgFgqSfvK%2FBrzIe%2BNDi0STVFZjq6UCiAsEmuJ68cNmKPIec8ArcXLsIiLFiTbIfVh4QzskGFn5jPZc6Axx7KFYlkngcya7Z12eYCt5CWlaTrO%2BTr1ecVwjAieX1x%2BV5OiYdjoow3e8Pm28rR37VxJohcHeL9idpw4cprsIAVQQyjr7wnWi6LjbxeTPYs%2B2I9Nm7o1gfIvTx5dnSwm8Nz6GAA7K1bsVXx5Wrj5Fb3X7M4fXgaRmu5RkxXIBzII92uiFBNwSMD%2BO2UXvY0UzdVekf0OmlRptJ6G%2FianF8iKAso%2Bfv0D4A103MMxFu5m0UFxoZLie%2Bq1EZ0dUE0eQxPyWJ8MNX4rHCJAC5lOYPLR5sct8a4rjbqd2tRDqS33jevFkBCEMJ0qaZAQjDH2tnDBjqkAa4%2FpotB104IaIq59yT2rqVTBOxlTQYJNg2AKMs3WrB6wekKeeidw%2B6z7db8zTNeOQ8BVb%2BzFx%2B%2FDRWTcPQ4RkKyVov55F5HC0gv8ThggFSuWgll3AIQSBKxZSdoKRACUzryVDATEIGLcRPSMrgffG6KTJmHHOyMYI7lHilp%2BVCVGDsEbW6TC2q8CO8axMALAk9nF4pVJFvWSupP9Q108bcMg7Wn&X-Amz-Signature=a4e99ec203ad895d9cfa7057335bc5956f347badfe73d002015e36d6ab7dd657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
