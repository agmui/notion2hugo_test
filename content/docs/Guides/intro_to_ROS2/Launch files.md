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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN4UOUY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICCJKQTy6%2BZdoRbfodMtnQ1nN9Di%2FuZ%2FsxyyGEWlzQXGAiEA1QCR%2BpiRalJzf3rvBuJ4e%2F9dqYZOpZhv9%2F%2FKa2Mc9oAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYY4otRMBXDF0VIhCrcAxq0Mo8svo4CcHBHEP8OjeNkbZeC2U4i9gKcWtKDozAs3kkHBgQGwgg3bCjVXR2dEu6sxfmGmSntwQEpqcxJIeN38uFmfP68feD2wrmLiifOktMgpilw1HpD74mPWaI64bt1%2B6wT2w9lMD7fdDFI82lkWw29%2BOC2C2EurTCCrvaJRrmt%2FjrwYJ5cdys0Q2aToZ2gcEPOKvDb5dEsy55upuUV9Tlf3LfWgCpu0by0gssU2DogQfRcSko8YQjtHibEUv3uKS%2BcWN3d8GQiE%2BC6tlKiQ4TplUQTjdtv%2F1rfOppGT6Z4VQLpS%2BPCnLXfBswNmUauYJqSjFrb99i%2B15iUQAIIuqn0s4c3H3gs5uAsr5ngn852soxGZug7RgKVxtZCdd6F1DcVQvSyhNdDpmxL8FzLhmLFyUyFNK2mE%2B2xxakD3QfldzgwFJHGRvJ2HOX5goqJSTEGpgQUx%2F2DH7rwHg0vWck863ARwXDnm8IaCMUKZE3Alss8tj5FanThxbR7dibUcza%2BPlLa3huE640tGueirytLfW%2Bgp1IkgzpvPkxBaZmmjXHDMR4IlkfVC3PJefCz2dzdnmGjZyXly9RyFgwRpKq9c2yDkx3dvmX8SQIC2CHfpHkt%2F3Cqx3G0MNmgj8AGOqUB525clHv3N0p7tuEWez9OW9EYAp3n1PxX8RfWq4EOF8OVgOm0q%2B4Ezu88VihEjr6A8avI7DG0m4oQkh%2B55Ct4Wx7j7yJZ60KtLqUaqHxO4Y8cdV8rEJ94NmVKltS9cUZiAqN2jmuxQCAL7QCPH1tPqyFvhUamHQg2MTO3GKYzAwwZZMpFHykj2krG6vmrzGfqJ4HYqftkRNBnqO66v0agocXjPKx6&X-Amz-Signature=822151009e6e6be70d09f71abb697e2699d9cf175b9781d71609cc09b17ad7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN4UOUY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICCJKQTy6%2BZdoRbfodMtnQ1nN9Di%2FuZ%2FsxyyGEWlzQXGAiEA1QCR%2BpiRalJzf3rvBuJ4e%2F9dqYZOpZhv9%2F%2FKa2Mc9oAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYY4otRMBXDF0VIhCrcAxq0Mo8svo4CcHBHEP8OjeNkbZeC2U4i9gKcWtKDozAs3kkHBgQGwgg3bCjVXR2dEu6sxfmGmSntwQEpqcxJIeN38uFmfP68feD2wrmLiifOktMgpilw1HpD74mPWaI64bt1%2B6wT2w9lMD7fdDFI82lkWw29%2BOC2C2EurTCCrvaJRrmt%2FjrwYJ5cdys0Q2aToZ2gcEPOKvDb5dEsy55upuUV9Tlf3LfWgCpu0by0gssU2DogQfRcSko8YQjtHibEUv3uKS%2BcWN3d8GQiE%2BC6tlKiQ4TplUQTjdtv%2F1rfOppGT6Z4VQLpS%2BPCnLXfBswNmUauYJqSjFrb99i%2B15iUQAIIuqn0s4c3H3gs5uAsr5ngn852soxGZug7RgKVxtZCdd6F1DcVQvSyhNdDpmxL8FzLhmLFyUyFNK2mE%2B2xxakD3QfldzgwFJHGRvJ2HOX5goqJSTEGpgQUx%2F2DH7rwHg0vWck863ARwXDnm8IaCMUKZE3Alss8tj5FanThxbR7dibUcza%2BPlLa3huE640tGueirytLfW%2Bgp1IkgzpvPkxBaZmmjXHDMR4IlkfVC3PJefCz2dzdnmGjZyXly9RyFgwRpKq9c2yDkx3dvmX8SQIC2CHfpHkt%2F3Cqx3G0MNmgj8AGOqUB525clHv3N0p7tuEWez9OW9EYAp3n1PxX8RfWq4EOF8OVgOm0q%2B4Ezu88VihEjr6A8avI7DG0m4oQkh%2B55Ct4Wx7j7yJZ60KtLqUaqHxO4Y8cdV8rEJ94NmVKltS9cUZiAqN2jmuxQCAL7QCPH1tPqyFvhUamHQg2MTO3GKYzAwwZZMpFHykj2krG6vmrzGfqJ4HYqftkRNBnqO66v0agocXjPKx6&X-Amz-Signature=990e0f7d62e3d642ad405d5b981b5509f517f7fedd29de1de4e1971f53ec83cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN4UOUY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICCJKQTy6%2BZdoRbfodMtnQ1nN9Di%2FuZ%2FsxyyGEWlzQXGAiEA1QCR%2BpiRalJzf3rvBuJ4e%2F9dqYZOpZhv9%2F%2FKa2Mc9oAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYY4otRMBXDF0VIhCrcAxq0Mo8svo4CcHBHEP8OjeNkbZeC2U4i9gKcWtKDozAs3kkHBgQGwgg3bCjVXR2dEu6sxfmGmSntwQEpqcxJIeN38uFmfP68feD2wrmLiifOktMgpilw1HpD74mPWaI64bt1%2B6wT2w9lMD7fdDFI82lkWw29%2BOC2C2EurTCCrvaJRrmt%2FjrwYJ5cdys0Q2aToZ2gcEPOKvDb5dEsy55upuUV9Tlf3LfWgCpu0by0gssU2DogQfRcSko8YQjtHibEUv3uKS%2BcWN3d8GQiE%2BC6tlKiQ4TplUQTjdtv%2F1rfOppGT6Z4VQLpS%2BPCnLXfBswNmUauYJqSjFrb99i%2B15iUQAIIuqn0s4c3H3gs5uAsr5ngn852soxGZug7RgKVxtZCdd6F1DcVQvSyhNdDpmxL8FzLhmLFyUyFNK2mE%2B2xxakD3QfldzgwFJHGRvJ2HOX5goqJSTEGpgQUx%2F2DH7rwHg0vWck863ARwXDnm8IaCMUKZE3Alss8tj5FanThxbR7dibUcza%2BPlLa3huE640tGueirytLfW%2Bgp1IkgzpvPkxBaZmmjXHDMR4IlkfVC3PJefCz2dzdnmGjZyXly9RyFgwRpKq9c2yDkx3dvmX8SQIC2CHfpHkt%2F3Cqx3G0MNmgj8AGOqUB525clHv3N0p7tuEWez9OW9EYAp3n1PxX8RfWq4EOF8OVgOm0q%2B4Ezu88VihEjr6A8avI7DG0m4oQkh%2B55Ct4Wx7j7yJZ60KtLqUaqHxO4Y8cdV8rEJ94NmVKltS9cUZiAqN2jmuxQCAL7QCPH1tPqyFvhUamHQg2MTO3GKYzAwwZZMpFHykj2krG6vmrzGfqJ4HYqftkRNBnqO66v0agocXjPKx6&X-Amz-Signature=81ca3f07b9c007234ebea2836bc8b65245253ad11912700156849327edea506d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
