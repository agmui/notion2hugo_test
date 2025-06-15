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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNQDDSJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHE42czw8zFSPGErAfW94rLfVSmeVPwIrMXXpuZMPfBgAiEAlh3l1ttf1ECBtvh0fgw4V3jhLsDNZxQ%2FyH3vYWb2up4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOFodzW5%2BmfKELs3VircA9mPcyf%2F95pd8gPwlmV1Vc9L%2Fi%2BBtZIFmSzJeqvc8sVwSA77wYotAuWJBfaL2uVxs%2BD85BXsGK%2F%2Bk378p2ehG%2BhBTHosJ%2BY4Eq3j83yJkvH4Hv41E7jl5vAx8KimslQboNQTnexKORcA59TxT7hAS37Z7CWYuKr3gGWz%2Fey6YAzKw3KjsBe%2Bd8b7mCaLGPVaMozdH%2FRrEOZFd7gztoOMUp%2F4cnwAs3i4VxsEbppgNhK%2FYrp16TMByCTAve9GZCIqSYkLbsZtd45%2B%2FxwOsC7Sm3asBPwUOQHG4MZIiKJNFt6OJcEl%2Bd1m4ZkWbcu3C6OmvStKC8fcYiIjF%2Blv8Za8rF9XHnKZhEoWzPpk0F8EMHfPxX8cUvJou89VH1WBER2cgL7YBsrODwPqZP%2BxNMiioIRyS8JmVeGKwlL6PaOP8G9Rz7wY9yR992O3%2BfHGLTpKFUlvfS13NW%2BNe5fts4OWyesIJpa5QeCZmTQW84sdj9dvwfy4brQz2%2BCFqEoJQ8IsSw3pSCRiAZn%2Fi2oHpuhJy8SxZgcdmCV3vtje%2F95fpv9HCbZj5yI3IfmV3np%2F9RDHOsVpdqK1tTtQjvq88b7z6oEx%2FSZuVbLJFc2LuA4fhlhSuUtQG%2B6CkOv%2FpmM5MNWFusIGOqUB6%2FWQZ%2FxApcsIHIP9cq4VbTswgLZURQgFG%2F5M3YZVlNEAzBuZIGuFqidMfzrD%2FezxD5gPQxldPMs4lmgX9eF36W69A68RHEtadtZl%2F6CaFK9rLVN8kSX0m%2BYeRFCWqDW3NBrpWo8ta1bL7GY1MsTKVRgICA3tG5LIp%2BXSzE3Duv8TCiczrIa5M3rA2ZMj3u54u6LTL%2BVwRSolze6YD7FqHsyzuQMc&X-Amz-Signature=9867bc6f933d86a7609547fa1e25dfc2c6da1129fb23223986c3e326fdb535d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNQDDSJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHE42czw8zFSPGErAfW94rLfVSmeVPwIrMXXpuZMPfBgAiEAlh3l1ttf1ECBtvh0fgw4V3jhLsDNZxQ%2FyH3vYWb2up4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOFodzW5%2BmfKELs3VircA9mPcyf%2F95pd8gPwlmV1Vc9L%2Fi%2BBtZIFmSzJeqvc8sVwSA77wYotAuWJBfaL2uVxs%2BD85BXsGK%2F%2Bk378p2ehG%2BhBTHosJ%2BY4Eq3j83yJkvH4Hv41E7jl5vAx8KimslQboNQTnexKORcA59TxT7hAS37Z7CWYuKr3gGWz%2Fey6YAzKw3KjsBe%2Bd8b7mCaLGPVaMozdH%2FRrEOZFd7gztoOMUp%2F4cnwAs3i4VxsEbppgNhK%2FYrp16TMByCTAve9GZCIqSYkLbsZtd45%2B%2FxwOsC7Sm3asBPwUOQHG4MZIiKJNFt6OJcEl%2Bd1m4ZkWbcu3C6OmvStKC8fcYiIjF%2Blv8Za8rF9XHnKZhEoWzPpk0F8EMHfPxX8cUvJou89VH1WBER2cgL7YBsrODwPqZP%2BxNMiioIRyS8JmVeGKwlL6PaOP8G9Rz7wY9yR992O3%2BfHGLTpKFUlvfS13NW%2BNe5fts4OWyesIJpa5QeCZmTQW84sdj9dvwfy4brQz2%2BCFqEoJQ8IsSw3pSCRiAZn%2Fi2oHpuhJy8SxZgcdmCV3vtje%2F95fpv9HCbZj5yI3IfmV3np%2F9RDHOsVpdqK1tTtQjvq88b7z6oEx%2FSZuVbLJFc2LuA4fhlhSuUtQG%2B6CkOv%2FpmM5MNWFusIGOqUB6%2FWQZ%2FxApcsIHIP9cq4VbTswgLZURQgFG%2F5M3YZVlNEAzBuZIGuFqidMfzrD%2FezxD5gPQxldPMs4lmgX9eF36W69A68RHEtadtZl%2F6CaFK9rLVN8kSX0m%2BYeRFCWqDW3NBrpWo8ta1bL7GY1MsTKVRgICA3tG5LIp%2BXSzE3Duv8TCiczrIa5M3rA2ZMj3u54u6LTL%2BVwRSolze6YD7FqHsyzuQMc&X-Amz-Signature=1bffbcb9cf802bdc2d8c6b4d4018f04096ee38867c4ba7693d75287138eaa401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNQDDSJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHE42czw8zFSPGErAfW94rLfVSmeVPwIrMXXpuZMPfBgAiEAlh3l1ttf1ECBtvh0fgw4V3jhLsDNZxQ%2FyH3vYWb2up4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOFodzW5%2BmfKELs3VircA9mPcyf%2F95pd8gPwlmV1Vc9L%2Fi%2BBtZIFmSzJeqvc8sVwSA77wYotAuWJBfaL2uVxs%2BD85BXsGK%2F%2Bk378p2ehG%2BhBTHosJ%2BY4Eq3j83yJkvH4Hv41E7jl5vAx8KimslQboNQTnexKORcA59TxT7hAS37Z7CWYuKr3gGWz%2Fey6YAzKw3KjsBe%2Bd8b7mCaLGPVaMozdH%2FRrEOZFd7gztoOMUp%2F4cnwAs3i4VxsEbppgNhK%2FYrp16TMByCTAve9GZCIqSYkLbsZtd45%2B%2FxwOsC7Sm3asBPwUOQHG4MZIiKJNFt6OJcEl%2Bd1m4ZkWbcu3C6OmvStKC8fcYiIjF%2Blv8Za8rF9XHnKZhEoWzPpk0F8EMHfPxX8cUvJou89VH1WBER2cgL7YBsrODwPqZP%2BxNMiioIRyS8JmVeGKwlL6PaOP8G9Rz7wY9yR992O3%2BfHGLTpKFUlvfS13NW%2BNe5fts4OWyesIJpa5QeCZmTQW84sdj9dvwfy4brQz2%2BCFqEoJQ8IsSw3pSCRiAZn%2Fi2oHpuhJy8SxZgcdmCV3vtje%2F95fpv9HCbZj5yI3IfmV3np%2F9RDHOsVpdqK1tTtQjvq88b7z6oEx%2FSZuVbLJFc2LuA4fhlhSuUtQG%2B6CkOv%2FpmM5MNWFusIGOqUB6%2FWQZ%2FxApcsIHIP9cq4VbTswgLZURQgFG%2F5M3YZVlNEAzBuZIGuFqidMfzrD%2FezxD5gPQxldPMs4lmgX9eF36W69A68RHEtadtZl%2F6CaFK9rLVN8kSX0m%2BYeRFCWqDW3NBrpWo8ta1bL7GY1MsTKVRgICA3tG5LIp%2BXSzE3Duv8TCiczrIa5M3rA2ZMj3u54u6LTL%2BVwRSolze6YD7FqHsyzuQMc&X-Amz-Signature=a51db4c8d541e24589e5eebbb6b09f4f742b1e33aacc4680189020ef69af8bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
