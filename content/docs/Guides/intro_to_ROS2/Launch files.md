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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMTBN45%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGCflZAkSMuUHypmBs25m%2Fhbnl1Wg1GIH2t9HS9X6VCnAiAMmY49AOlbnVuHIQzK81kqPRKywOAvn1NvoZuQP8a5liqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0T%2FuDUYwXs363PCHKtwDvsqUNoogTJm%2BvlPOzVuTUpcfLP4mIYUqvUtmFgNxHIn2xdaOKoOkHVczZnvgi9wWYs34TD2T1XPaM6JtZUeaeUz8ZOK16mryAReCQFbOf2OfQnU5rEBcB82B%2BTDMZ6YZbWtYQKptdixeglXRSUoGNdL4al%2BsKdDGnEAiAuQyw6v%2Fy%2BkI2ZiOKTgscvKplthViYg1kDTqKUcVQq8qyCYvY8Jes80HpDogzWfK8qxXMA7LJNFAXyidD596N2IFS1OK29OfzeeP1fO9dp7q5tn%2Bzyatq1mceLXibMVqFczphpTzI32%2B7vOFYxopb3qM8KdddG6ttEu8RcEwli%2B0MkrZ29P4nE10jj47q4Uu%2FUvW6VuKvyFxJhpJfAFw46eEkmIX6Cd77io1Zn9EuS%2Bs4oonK4Maov2atNvUZTlvw5el8%2Bn1Unjv7kUtdyP5ZQ4FyGnmA83MeksAhv%2FjzUVSZmfhHaxhb3JfzA19P12WSBTv88CNRGafNPLJyT5PeXyrvvLX0TVtlg4I0yhzSNFw46ruYTrKILvvDvyr89pT6Yeo56Ub4oDAUH9VG2tiz6RMk9jNyFanqHSAMC8%2BLzDaqhIDLk%2BcNDdRpIzyA7qm4vYYmHuyshADNeh9AynxVC8w%2B8TbxAY6pgH0J1KoHohRGFBMljbHlloNlGKobCZFrr8YyVyDfe%2BphwiFTvyRhpmuf4rVETvLRzF%2B8lNUsQu6ogtTcqAviAiVgFfCqdASGZjtroevnC4nf19T9XH6NYCYovxf55s9zV3K1FVd2bM8UR3BlXZUJoCo5w1%2FHx2h1YUWnRR4pOJiuGHX6c%2BG82J4KdnicmQJgjF5Rqr%2FCRW9SShmoe6%2BAUx0imOrNa0W&X-Amz-Signature=1e268eed870d1d31c9bd4533e313745465fb40048da12d93a7b263663f0a7423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMTBN45%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGCflZAkSMuUHypmBs25m%2Fhbnl1Wg1GIH2t9HS9X6VCnAiAMmY49AOlbnVuHIQzK81kqPRKywOAvn1NvoZuQP8a5liqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0T%2FuDUYwXs363PCHKtwDvsqUNoogTJm%2BvlPOzVuTUpcfLP4mIYUqvUtmFgNxHIn2xdaOKoOkHVczZnvgi9wWYs34TD2T1XPaM6JtZUeaeUz8ZOK16mryAReCQFbOf2OfQnU5rEBcB82B%2BTDMZ6YZbWtYQKptdixeglXRSUoGNdL4al%2BsKdDGnEAiAuQyw6v%2Fy%2BkI2ZiOKTgscvKplthViYg1kDTqKUcVQq8qyCYvY8Jes80HpDogzWfK8qxXMA7LJNFAXyidD596N2IFS1OK29OfzeeP1fO9dp7q5tn%2Bzyatq1mceLXibMVqFczphpTzI32%2B7vOFYxopb3qM8KdddG6ttEu8RcEwli%2B0MkrZ29P4nE10jj47q4Uu%2FUvW6VuKvyFxJhpJfAFw46eEkmIX6Cd77io1Zn9EuS%2Bs4oonK4Maov2atNvUZTlvw5el8%2Bn1Unjv7kUtdyP5ZQ4FyGnmA83MeksAhv%2FjzUVSZmfhHaxhb3JfzA19P12WSBTv88CNRGafNPLJyT5PeXyrvvLX0TVtlg4I0yhzSNFw46ruYTrKILvvDvyr89pT6Yeo56Ub4oDAUH9VG2tiz6RMk9jNyFanqHSAMC8%2BLzDaqhIDLk%2BcNDdRpIzyA7qm4vYYmHuyshADNeh9AynxVC8w%2B8TbxAY6pgH0J1KoHohRGFBMljbHlloNlGKobCZFrr8YyVyDfe%2BphwiFTvyRhpmuf4rVETvLRzF%2B8lNUsQu6ogtTcqAviAiVgFfCqdASGZjtroevnC4nf19T9XH6NYCYovxf55s9zV3K1FVd2bM8UR3BlXZUJoCo5w1%2FHx2h1YUWnRR4pOJiuGHX6c%2BG82J4KdnicmQJgjF5Rqr%2FCRW9SShmoe6%2BAUx0imOrNa0W&X-Amz-Signature=1a6cc610322837f6d04aab37a07a78bb14e12f89489df58a23fdaed18605d74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMTBN45%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGCflZAkSMuUHypmBs25m%2Fhbnl1Wg1GIH2t9HS9X6VCnAiAMmY49AOlbnVuHIQzK81kqPRKywOAvn1NvoZuQP8a5liqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0T%2FuDUYwXs363PCHKtwDvsqUNoogTJm%2BvlPOzVuTUpcfLP4mIYUqvUtmFgNxHIn2xdaOKoOkHVczZnvgi9wWYs34TD2T1XPaM6JtZUeaeUz8ZOK16mryAReCQFbOf2OfQnU5rEBcB82B%2BTDMZ6YZbWtYQKptdixeglXRSUoGNdL4al%2BsKdDGnEAiAuQyw6v%2Fy%2BkI2ZiOKTgscvKplthViYg1kDTqKUcVQq8qyCYvY8Jes80HpDogzWfK8qxXMA7LJNFAXyidD596N2IFS1OK29OfzeeP1fO9dp7q5tn%2Bzyatq1mceLXibMVqFczphpTzI32%2B7vOFYxopb3qM8KdddG6ttEu8RcEwli%2B0MkrZ29P4nE10jj47q4Uu%2FUvW6VuKvyFxJhpJfAFw46eEkmIX6Cd77io1Zn9EuS%2Bs4oonK4Maov2atNvUZTlvw5el8%2Bn1Unjv7kUtdyP5ZQ4FyGnmA83MeksAhv%2FjzUVSZmfhHaxhb3JfzA19P12WSBTv88CNRGafNPLJyT5PeXyrvvLX0TVtlg4I0yhzSNFw46ruYTrKILvvDvyr89pT6Yeo56Ub4oDAUH9VG2tiz6RMk9jNyFanqHSAMC8%2BLzDaqhIDLk%2BcNDdRpIzyA7qm4vYYmHuyshADNeh9AynxVC8w%2B8TbxAY6pgH0J1KoHohRGFBMljbHlloNlGKobCZFrr8YyVyDfe%2BphwiFTvyRhpmuf4rVETvLRzF%2B8lNUsQu6ogtTcqAviAiVgFfCqdASGZjtroevnC4nf19T9XH6NYCYovxf55s9zV3K1FVd2bM8UR3BlXZUJoCo5w1%2FHx2h1YUWnRR4pOJiuGHX6c%2BG82J4KdnicmQJgjF5Rqr%2FCRW9SShmoe6%2BAUx0imOrNa0W&X-Amz-Signature=cde5250012efabfe177b7c125209b763152c9bd4d9acb681a91a60fdd3a8471b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
