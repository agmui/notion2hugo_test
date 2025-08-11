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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELZ5QCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2JdKhJ9zILgs5QFGd6wUf%2FDeKIdm1YsIHRPPKaaGXQIgKvaPmORQSKtj%2BxE97FpJ5VVW6gLKqzF3IHyi%2B8Y4fAcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7fXYSogCXglvZ8SyrcA829M999Ez%2F04ob7ElRt2q8uC2ZqkZ6CErtAXu1cSPIl%2Fi0F7WWorC%2FrywpugJImTbpON%2BM40NtN5%2F0jeDSk6zQaQdlTW2KD6eXwYD1ZCzxGI52hnbQK8Dl4wCAOfo%2BFQ6camT0UKDJloYNt3cUvv7VVaHFgpN4OiXKROoQxzBtPO7EyQ3XiIa62HBe0tZSiqxHDHQRvs776bkZHyZws2QbWhSyg2qx%2BM1ENTT0zJS66t0iXxnQgcAgnDac3J8BezP13ZaI1VyerwOnAxGNJcakgVLMrP%2BeNQhJmCAuNhmvLJaPy54xO1yh8L%2BpehAPQZMeHvQC21hCPnO2rzEB4vb0Vk%2BVtNhuHJsEj9hqtMTHNwkvxIz8JP9%2B2lTMC5llSNWqjrHlMv%2FPGgtasQbByzFCEhYkR%2FhhgUjUl0m2yWQ98qdwk%2Fn8Ix6KiCP6RSUOf7u9%2FJIXkFWcW5Y2T8Hmbym%2FhbaUyUlUqc%2B4qHyXq5xG1XXntEqRlckAQWwdGghuX97f3GB8hq%2F88ylIkyDkzzj9Vs14%2B5OsFjCzGxKFIC3%2FS1Rt%2FPm4uBmpuKUarQH1Jgx0603aEf%2BKjQeFe%2F2GmdpPw3ILow01u1AdNjkF1STbRbkDLw4vlZ9djmJ20ML%2Br5sQGOqUBmC1n95Z7PF8Fx905LNIth5ecilWvw13P7ZVNAl0WOv%2BxbZ1EyjJP4tpzL0i%2F1NjL398BsZ0DIG3wht3E9vT42bsk2YkrWJqB17nctfOtHjo3btBM53xkb3QKhel0m0qrombKSI%2BN9Gcr6NkcOr9HTXvLtgD%2BLlVvu3XOKhDu3riElZabs8MkkQAeokvd2DaLp38p%2BPqVQz3QAWU61rM069Y2GyVw&X-Amz-Signature=06fd55f53a72f71b39ec5f21619fa1bd12d296724b4e0231835470663eff370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELZ5QCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2JdKhJ9zILgs5QFGd6wUf%2FDeKIdm1YsIHRPPKaaGXQIgKvaPmORQSKtj%2BxE97FpJ5VVW6gLKqzF3IHyi%2B8Y4fAcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7fXYSogCXglvZ8SyrcA829M999Ez%2F04ob7ElRt2q8uC2ZqkZ6CErtAXu1cSPIl%2Fi0F7WWorC%2FrywpugJImTbpON%2BM40NtN5%2F0jeDSk6zQaQdlTW2KD6eXwYD1ZCzxGI52hnbQK8Dl4wCAOfo%2BFQ6camT0UKDJloYNt3cUvv7VVaHFgpN4OiXKROoQxzBtPO7EyQ3XiIa62HBe0tZSiqxHDHQRvs776bkZHyZws2QbWhSyg2qx%2BM1ENTT0zJS66t0iXxnQgcAgnDac3J8BezP13ZaI1VyerwOnAxGNJcakgVLMrP%2BeNQhJmCAuNhmvLJaPy54xO1yh8L%2BpehAPQZMeHvQC21hCPnO2rzEB4vb0Vk%2BVtNhuHJsEj9hqtMTHNwkvxIz8JP9%2B2lTMC5llSNWqjrHlMv%2FPGgtasQbByzFCEhYkR%2FhhgUjUl0m2yWQ98qdwk%2Fn8Ix6KiCP6RSUOf7u9%2FJIXkFWcW5Y2T8Hmbym%2FhbaUyUlUqc%2B4qHyXq5xG1XXntEqRlckAQWwdGghuX97f3GB8hq%2F88ylIkyDkzzj9Vs14%2B5OsFjCzGxKFIC3%2FS1Rt%2FPm4uBmpuKUarQH1Jgx0603aEf%2BKjQeFe%2F2GmdpPw3ILow01u1AdNjkF1STbRbkDLw4vlZ9djmJ20ML%2Br5sQGOqUBmC1n95Z7PF8Fx905LNIth5ecilWvw13P7ZVNAl0WOv%2BxbZ1EyjJP4tpzL0i%2F1NjL398BsZ0DIG3wht3E9vT42bsk2YkrWJqB17nctfOtHjo3btBM53xkb3QKhel0m0qrombKSI%2BN9Gcr6NkcOr9HTXvLtgD%2BLlVvu3XOKhDu3riElZabs8MkkQAeokvd2DaLp38p%2BPqVQz3QAWU61rM069Y2GyVw&X-Amz-Signature=43df624d8bd4a71a980c251bc9138831ab272ea8c832e5e4d390825f627f0086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELZ5QCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2JdKhJ9zILgs5QFGd6wUf%2FDeKIdm1YsIHRPPKaaGXQIgKvaPmORQSKtj%2BxE97FpJ5VVW6gLKqzF3IHyi%2B8Y4fAcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7fXYSogCXglvZ8SyrcA829M999Ez%2F04ob7ElRt2q8uC2ZqkZ6CErtAXu1cSPIl%2Fi0F7WWorC%2FrywpugJImTbpON%2BM40NtN5%2F0jeDSk6zQaQdlTW2KD6eXwYD1ZCzxGI52hnbQK8Dl4wCAOfo%2BFQ6camT0UKDJloYNt3cUvv7VVaHFgpN4OiXKROoQxzBtPO7EyQ3XiIa62HBe0tZSiqxHDHQRvs776bkZHyZws2QbWhSyg2qx%2BM1ENTT0zJS66t0iXxnQgcAgnDac3J8BezP13ZaI1VyerwOnAxGNJcakgVLMrP%2BeNQhJmCAuNhmvLJaPy54xO1yh8L%2BpehAPQZMeHvQC21hCPnO2rzEB4vb0Vk%2BVtNhuHJsEj9hqtMTHNwkvxIz8JP9%2B2lTMC5llSNWqjrHlMv%2FPGgtasQbByzFCEhYkR%2FhhgUjUl0m2yWQ98qdwk%2Fn8Ix6KiCP6RSUOf7u9%2FJIXkFWcW5Y2T8Hmbym%2FhbaUyUlUqc%2B4qHyXq5xG1XXntEqRlckAQWwdGghuX97f3GB8hq%2F88ylIkyDkzzj9Vs14%2B5OsFjCzGxKFIC3%2FS1Rt%2FPm4uBmpuKUarQH1Jgx0603aEf%2BKjQeFe%2F2GmdpPw3ILow01u1AdNjkF1STbRbkDLw4vlZ9djmJ20ML%2Br5sQGOqUBmC1n95Z7PF8Fx905LNIth5ecilWvw13P7ZVNAl0WOv%2BxbZ1EyjJP4tpzL0i%2F1NjL398BsZ0DIG3wht3E9vT42bsk2YkrWJqB17nctfOtHjo3btBM53xkb3QKhel0m0qrombKSI%2BN9Gcr6NkcOr9HTXvLtgD%2BLlVvu3XOKhDu3riElZabs8MkkQAeokvd2DaLp38p%2BPqVQz3QAWU61rM069Y2GyVw&X-Amz-Signature=59168afdc6b476c03febd018089700d7007fcd96b57ffc0ad4d94dc4d1e6252a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
