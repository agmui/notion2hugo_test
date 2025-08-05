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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UMPVX7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH2jZ%2Frh7tHcI8rKjvi612Sd5Q9QBKYnylFtAB20xsn5AiEAzdM154C0RNLacMNPGqVUkk8TRr8IZD6SL%2F7SRCTyZ5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDApce0Hl7IviyUf7pircA8sNKsbie%2BRHbnQhbhwRWIOpbQoy0rae9G0UPJUW1PfWGFk6x3XAkKRWuQZKGK75pyrFJKIfaYSA5f6G9V%2FrDeSx7FIWceNzqXePWgOdRkNJtxSO%2BZKwyfFlZxrSavMsM71p8kE51S%2BphQOZ1J5yGx4BLYZvNgwgCD4mdCFUzlbdyqi53oJarvEsvNNppwdmmZN4ZRD08y6VGiDihoEpT%2BicYdKJXpAUVmGzB7bqsQ0ACbl9i6aGinnsK4iqLqn32%2B2UsaD4YIkKyv%2BySiuFi8vAdhBxe87ra5xh7WUF184oo4i3chUybkgbHM94BqpUy%2Ba6t1%2FPfJn4jiqHyE%2B8GhUTvpHvi2iLWMRzyAhQqiNKwIfOiTrfqe2qj7dqTv53IEK1b6xrZkwLg9pceYo3cHypawpiI2S1nSc0KjVBzXIyTXOI29jY3zcyGX7%2FVOM3SFJorlhePJtPxq%2FCQAkik8E2RttagzNhCRoSYosPpzU6qL7ByY8W4gnYCwTK%2Blmwe8Nh63%2BX4el3D%2FdDpRqeqTILHAp%2FM9K7gwqcqL8h5dcCa66HzNc1PwBT4b4rJvWaZC6iWjVpA6DkKB13ppenY0ShpvsYMt5KHgm5fa3QnC6fkzSg4GIlPSCTohu9MK%2FiycQGOqUBgo2mTAcfTfjy7XFT77TeY2AG36JNUvqiLVQQ2de4LYZrM9iEIYilS7u%2FvwZ8TOvh1zIx7978gbGtWmy%2FEbYUSFXaGFs%2BOdTyU9ZokbLnk62NYMF2okdk1FQspIg7GuOWYVRE1BwZglTLY2T1NwdqVCn7iNCxOzv9yKgm9%2BdXZLOKitZWfaTNSIORIT2E%2B2RyP7RcliP9WBkPwhVcGtGqM50vdD4F&X-Amz-Signature=1f63259e8d81c47b1a47040c24bbb9abf08e66c6b74ca57afda12cf36191f31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UMPVX7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH2jZ%2Frh7tHcI8rKjvi612Sd5Q9QBKYnylFtAB20xsn5AiEAzdM154C0RNLacMNPGqVUkk8TRr8IZD6SL%2F7SRCTyZ5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDApce0Hl7IviyUf7pircA8sNKsbie%2BRHbnQhbhwRWIOpbQoy0rae9G0UPJUW1PfWGFk6x3XAkKRWuQZKGK75pyrFJKIfaYSA5f6G9V%2FrDeSx7FIWceNzqXePWgOdRkNJtxSO%2BZKwyfFlZxrSavMsM71p8kE51S%2BphQOZ1J5yGx4BLYZvNgwgCD4mdCFUzlbdyqi53oJarvEsvNNppwdmmZN4ZRD08y6VGiDihoEpT%2BicYdKJXpAUVmGzB7bqsQ0ACbl9i6aGinnsK4iqLqn32%2B2UsaD4YIkKyv%2BySiuFi8vAdhBxe87ra5xh7WUF184oo4i3chUybkgbHM94BqpUy%2Ba6t1%2FPfJn4jiqHyE%2B8GhUTvpHvi2iLWMRzyAhQqiNKwIfOiTrfqe2qj7dqTv53IEK1b6xrZkwLg9pceYo3cHypawpiI2S1nSc0KjVBzXIyTXOI29jY3zcyGX7%2FVOM3SFJorlhePJtPxq%2FCQAkik8E2RttagzNhCRoSYosPpzU6qL7ByY8W4gnYCwTK%2Blmwe8Nh63%2BX4el3D%2FdDpRqeqTILHAp%2FM9K7gwqcqL8h5dcCa66HzNc1PwBT4b4rJvWaZC6iWjVpA6DkKB13ppenY0ShpvsYMt5KHgm5fa3QnC6fkzSg4GIlPSCTohu9MK%2FiycQGOqUBgo2mTAcfTfjy7XFT77TeY2AG36JNUvqiLVQQ2de4LYZrM9iEIYilS7u%2FvwZ8TOvh1zIx7978gbGtWmy%2FEbYUSFXaGFs%2BOdTyU9ZokbLnk62NYMF2okdk1FQspIg7GuOWYVRE1BwZglTLY2T1NwdqVCn7iNCxOzv9yKgm9%2BdXZLOKitZWfaTNSIORIT2E%2B2RyP7RcliP9WBkPwhVcGtGqM50vdD4F&X-Amz-Signature=d661f09fcfa0b03f5afb551b86c0e0734d3e9fdec6f11eb26c35a72bd697ed53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UMPVX7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH2jZ%2Frh7tHcI8rKjvi612Sd5Q9QBKYnylFtAB20xsn5AiEAzdM154C0RNLacMNPGqVUkk8TRr8IZD6SL%2F7SRCTyZ5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDApce0Hl7IviyUf7pircA8sNKsbie%2BRHbnQhbhwRWIOpbQoy0rae9G0UPJUW1PfWGFk6x3XAkKRWuQZKGK75pyrFJKIfaYSA5f6G9V%2FrDeSx7FIWceNzqXePWgOdRkNJtxSO%2BZKwyfFlZxrSavMsM71p8kE51S%2BphQOZ1J5yGx4BLYZvNgwgCD4mdCFUzlbdyqi53oJarvEsvNNppwdmmZN4ZRD08y6VGiDihoEpT%2BicYdKJXpAUVmGzB7bqsQ0ACbl9i6aGinnsK4iqLqn32%2B2UsaD4YIkKyv%2BySiuFi8vAdhBxe87ra5xh7WUF184oo4i3chUybkgbHM94BqpUy%2Ba6t1%2FPfJn4jiqHyE%2B8GhUTvpHvi2iLWMRzyAhQqiNKwIfOiTrfqe2qj7dqTv53IEK1b6xrZkwLg9pceYo3cHypawpiI2S1nSc0KjVBzXIyTXOI29jY3zcyGX7%2FVOM3SFJorlhePJtPxq%2FCQAkik8E2RttagzNhCRoSYosPpzU6qL7ByY8W4gnYCwTK%2Blmwe8Nh63%2BX4el3D%2FdDpRqeqTILHAp%2FM9K7gwqcqL8h5dcCa66HzNc1PwBT4b4rJvWaZC6iWjVpA6DkKB13ppenY0ShpvsYMt5KHgm5fa3QnC6fkzSg4GIlPSCTohu9MK%2FiycQGOqUBgo2mTAcfTfjy7XFT77TeY2AG36JNUvqiLVQQ2de4LYZrM9iEIYilS7u%2FvwZ8TOvh1zIx7978gbGtWmy%2FEbYUSFXaGFs%2BOdTyU9ZokbLnk62NYMF2okdk1FQspIg7GuOWYVRE1BwZglTLY2T1NwdqVCn7iNCxOzv9yKgm9%2BdXZLOKitZWfaTNSIORIT2E%2B2RyP7RcliP9WBkPwhVcGtGqM50vdD4F&X-Amz-Signature=f0585a141c217f6b7c229303f848f8003c92b0ea6f8fae0349714d5b2a1b3203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
