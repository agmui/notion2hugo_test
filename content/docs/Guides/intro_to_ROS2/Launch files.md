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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC53EPEL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDO3slUH5dovwElR3XjTcw66t2EhAVYrEH5MnhsR3ioswIhALoSxkBGQ7L1UmnASiMh7KsqA8FLhO%2Bw4Rn0ZWmFrcLwKv8DCH0QABoMNjM3NDIzMTgzODA1Igwq2XZl2fj1KuGu1EEq3ANyV1MDeEIdpH1xog4rYZPD0xZutZZptAW7kXJj%2FTTtIyP%2FZhc3o6NJleQ6Ek0h5Ef4tne5cJ6g5bACg3WYCQoKQ50yEaZ5Pe9Atw1q1KZqx8tBwliDjEDXrjFgbogF7hKALUu%2BtB7sOCABK9UBUJ8q41%2BcLJstmPLNTG12AdiYIvd4qc%2FVl8wQ2mYo9UcYmsjaYWCJetSyCIpXXF%2B4LZPv455la2MB2mCQuDEAIRE8md%2FcCxKS7Ma%2F8CK%2Bz3O5Eb5cuU%2Bw82RXyBuS4OE6YuKj4HAUM86cRmCQW7hpVNLx9eQwNf9L22lEjI3wcSGCnqhnf7bxIg1AKKISYdkPz5tZAv%2B1Hzlg8QbonbZBMSM2vu3CVNIC4P1tPmtpJniEXEorDMMDpM%2F5he3Hdtvz%2BigFfVfvblEavmfcc%2BD2gWjHdYngvrPyI1LgeLY7xOIruDBo5EHVzCi2rNbnvfN112j5uWGzjgqdhWYqmqBRom4aI4jhjq9YOnrGJPosI3EKU1HOUEbSBMeQZ4SzeB9vp1kLWTotibm2Y9dsBA5meTDhhFiuD0IQievDEPzYDSyHz5pAbh9TrJdoqzoHxIho1wOKjy7OFiJds2ciW5DA2cmeNq1hTIXbE%2Fc5dxKHDDCOps69BjqkAZjMgwVFmvEcmL%2F6%2BCVrMPk2rZqwKaeYG4%2BhloN8xykqq20ZvbtUijliYePSNTyO1PC2LxkXrOsjJs%2BPni5JhBUsLxV3bQFL%2FC9eigTAAabL2fkXJbMlYbWsDKVPQw3YHGfEzU7NdfJ2%2BwXz8%2B6p9Nsr69gEci%2B657oSSfNtCa2RvMs%2BwDnLVKHHKmyELYJ8lc2RSChn%2Fw7Et7u82mnH4p2tIefB&X-Amz-Signature=f3a979051b1fdb6d6622508308f61f59bc9aae8cd00f626cbe8c030fe0e6551e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC53EPEL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDO3slUH5dovwElR3XjTcw66t2EhAVYrEH5MnhsR3ioswIhALoSxkBGQ7L1UmnASiMh7KsqA8FLhO%2Bw4Rn0ZWmFrcLwKv8DCH0QABoMNjM3NDIzMTgzODA1Igwq2XZl2fj1KuGu1EEq3ANyV1MDeEIdpH1xog4rYZPD0xZutZZptAW7kXJj%2FTTtIyP%2FZhc3o6NJleQ6Ek0h5Ef4tne5cJ6g5bACg3WYCQoKQ50yEaZ5Pe9Atw1q1KZqx8tBwliDjEDXrjFgbogF7hKALUu%2BtB7sOCABK9UBUJ8q41%2BcLJstmPLNTG12AdiYIvd4qc%2FVl8wQ2mYo9UcYmsjaYWCJetSyCIpXXF%2B4LZPv455la2MB2mCQuDEAIRE8md%2FcCxKS7Ma%2F8CK%2Bz3O5Eb5cuU%2Bw82RXyBuS4OE6YuKj4HAUM86cRmCQW7hpVNLx9eQwNf9L22lEjI3wcSGCnqhnf7bxIg1AKKISYdkPz5tZAv%2B1Hzlg8QbonbZBMSM2vu3CVNIC4P1tPmtpJniEXEorDMMDpM%2F5he3Hdtvz%2BigFfVfvblEavmfcc%2BD2gWjHdYngvrPyI1LgeLY7xOIruDBo5EHVzCi2rNbnvfN112j5uWGzjgqdhWYqmqBRom4aI4jhjq9YOnrGJPosI3EKU1HOUEbSBMeQZ4SzeB9vp1kLWTotibm2Y9dsBA5meTDhhFiuD0IQievDEPzYDSyHz5pAbh9TrJdoqzoHxIho1wOKjy7OFiJds2ciW5DA2cmeNq1hTIXbE%2Fc5dxKHDDCOps69BjqkAZjMgwVFmvEcmL%2F6%2BCVrMPk2rZqwKaeYG4%2BhloN8xykqq20ZvbtUijliYePSNTyO1PC2LxkXrOsjJs%2BPni5JhBUsLxV3bQFL%2FC9eigTAAabL2fkXJbMlYbWsDKVPQw3YHGfEzU7NdfJ2%2BwXz8%2B6p9Nsr69gEci%2B657oSSfNtCa2RvMs%2BwDnLVKHHKmyELYJ8lc2RSChn%2Fw7Et7u82mnH4p2tIefB&X-Amz-Signature=97713dd78e9f949512e0976fee5ad0cd2aedc8aff5ef45998cc839862adb2070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC53EPEL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDO3slUH5dovwElR3XjTcw66t2EhAVYrEH5MnhsR3ioswIhALoSxkBGQ7L1UmnASiMh7KsqA8FLhO%2Bw4Rn0ZWmFrcLwKv8DCH0QABoMNjM3NDIzMTgzODA1Igwq2XZl2fj1KuGu1EEq3ANyV1MDeEIdpH1xog4rYZPD0xZutZZptAW7kXJj%2FTTtIyP%2FZhc3o6NJleQ6Ek0h5Ef4tne5cJ6g5bACg3WYCQoKQ50yEaZ5Pe9Atw1q1KZqx8tBwliDjEDXrjFgbogF7hKALUu%2BtB7sOCABK9UBUJ8q41%2BcLJstmPLNTG12AdiYIvd4qc%2FVl8wQ2mYo9UcYmsjaYWCJetSyCIpXXF%2B4LZPv455la2MB2mCQuDEAIRE8md%2FcCxKS7Ma%2F8CK%2Bz3O5Eb5cuU%2Bw82RXyBuS4OE6YuKj4HAUM86cRmCQW7hpVNLx9eQwNf9L22lEjI3wcSGCnqhnf7bxIg1AKKISYdkPz5tZAv%2B1Hzlg8QbonbZBMSM2vu3CVNIC4P1tPmtpJniEXEorDMMDpM%2F5he3Hdtvz%2BigFfVfvblEavmfcc%2BD2gWjHdYngvrPyI1LgeLY7xOIruDBo5EHVzCi2rNbnvfN112j5uWGzjgqdhWYqmqBRom4aI4jhjq9YOnrGJPosI3EKU1HOUEbSBMeQZ4SzeB9vp1kLWTotibm2Y9dsBA5meTDhhFiuD0IQievDEPzYDSyHz5pAbh9TrJdoqzoHxIho1wOKjy7OFiJds2ciW5DA2cmeNq1hTIXbE%2Fc5dxKHDDCOps69BjqkAZjMgwVFmvEcmL%2F6%2BCVrMPk2rZqwKaeYG4%2BhloN8xykqq20ZvbtUijliYePSNTyO1PC2LxkXrOsjJs%2BPni5JhBUsLxV3bQFL%2FC9eigTAAabL2fkXJbMlYbWsDKVPQw3YHGfEzU7NdfJ2%2BwXz8%2B6p9Nsr69gEci%2B657oSSfNtCa2RvMs%2BwDnLVKHHKmyELYJ8lc2RSChn%2Fw7Et7u82mnH4p2tIefB&X-Amz-Signature=6ea5eb287167677fa96769d7d39650e19e0b0d32925ec2531c75724a6558be33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
