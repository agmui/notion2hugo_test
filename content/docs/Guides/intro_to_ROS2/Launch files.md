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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XJXAML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDyaEGP2apMqdGmGXUuoUmQi9jIFEYo5ZkMSstyWRe%2FGQIge1EIAoq5zUco76n6VmjJqS95uJlqx16NpKJJ5G3jgqkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABH0orQit4epBonGircA6KGCrlCCStzpH0EK%2BvTL8ZWMO1hqjNNV4YLqVvDIE0ZQJFsi8jLJhI3eNccLCx74l9qIt%2BV9r%2B%2FAfQZ0pVHGjzm%2BgMibNWIFq482bPl8dZGeWXgPmkCsRKtSgLZhj4jKE5gkAkKl6JdKO%2BglfOXIREcDGTFR3T6C7eBilPxYM4hihOiYn22OdRX7mNYBtcqqLI1IO0rvUEHYf76JwUT%2F4lETUBFV4ZXikJ7THWjYuns10qSDOFY5yEmJSCiHTdd53MPDJu5qWyZUvU48NLH4fxsQBkysBND9EFFZx69QP9ycYjiiI8kCF2bRfAdgpVJI%2F8VRARllVcOtdIoZ1bswiHRmgb7uwqRXlDWtD8sGRQh4poAVpFJ7uTBON3cZO1xjETJBZsscb2UKckVr30jzGSUPplaiNFiC2m3FC1dwNGsqmmMp7m3k295Vjir17rn0OXNcH2RX1qu%2F3y%2BvDNjz%2BhkMFqozKb13CfspEiY2W71UFnS6%2FAPMbz7NDC%2BvciXnscKPLL2kZNhnDVPSsLVrskrNgdZsEGe6cmhGuvIvXUO9wkotQurS9fk6%2BJT1akeNLm9cDxgeguwxt76fe7meSt0CdDMn9ugDrv5H8%2BZ2uey7fCCCxaLE7i7afq%2FMJ%2Faw74GOqUBvIm0oCRHIr7FbtZxx06AAibkUK0s1YbBoFW1audDUI9%2Br902TsnA2YW2CkGdYBSsmqZtqoWqKUZoudMLWvS6HUExXgBXQ%2BmzUXwgtIwOuxnIVz4HLm%2BqTq%2FD75uMbao5%2FZ5JaprSCXpHfzKBKui0yElysAzOMNli5e4cWn2EBaCyq4ybbi0r4bmzAWX5%2B%2BUpCLYNQIptdO3%2BXE1zEWPScvzWeYhe&X-Amz-Signature=45db5369e9b460eea0f979011a67249098c03ea82e722416185c08d4f67d5dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XJXAML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDyaEGP2apMqdGmGXUuoUmQi9jIFEYo5ZkMSstyWRe%2FGQIge1EIAoq5zUco76n6VmjJqS95uJlqx16NpKJJ5G3jgqkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABH0orQit4epBonGircA6KGCrlCCStzpH0EK%2BvTL8ZWMO1hqjNNV4YLqVvDIE0ZQJFsi8jLJhI3eNccLCx74l9qIt%2BV9r%2B%2FAfQZ0pVHGjzm%2BgMibNWIFq482bPl8dZGeWXgPmkCsRKtSgLZhj4jKE5gkAkKl6JdKO%2BglfOXIREcDGTFR3T6C7eBilPxYM4hihOiYn22OdRX7mNYBtcqqLI1IO0rvUEHYf76JwUT%2F4lETUBFV4ZXikJ7THWjYuns10qSDOFY5yEmJSCiHTdd53MPDJu5qWyZUvU48NLH4fxsQBkysBND9EFFZx69QP9ycYjiiI8kCF2bRfAdgpVJI%2F8VRARllVcOtdIoZ1bswiHRmgb7uwqRXlDWtD8sGRQh4poAVpFJ7uTBON3cZO1xjETJBZsscb2UKckVr30jzGSUPplaiNFiC2m3FC1dwNGsqmmMp7m3k295Vjir17rn0OXNcH2RX1qu%2F3y%2BvDNjz%2BhkMFqozKb13CfspEiY2W71UFnS6%2FAPMbz7NDC%2BvciXnscKPLL2kZNhnDVPSsLVrskrNgdZsEGe6cmhGuvIvXUO9wkotQurS9fk6%2BJT1akeNLm9cDxgeguwxt76fe7meSt0CdDMn9ugDrv5H8%2BZ2uey7fCCCxaLE7i7afq%2FMJ%2Faw74GOqUBvIm0oCRHIr7FbtZxx06AAibkUK0s1YbBoFW1audDUI9%2Br902TsnA2YW2CkGdYBSsmqZtqoWqKUZoudMLWvS6HUExXgBXQ%2BmzUXwgtIwOuxnIVz4HLm%2BqTq%2FD75uMbao5%2FZ5JaprSCXpHfzKBKui0yElysAzOMNli5e4cWn2EBaCyq4ybbi0r4bmzAWX5%2B%2BUpCLYNQIptdO3%2BXE1zEWPScvzWeYhe&X-Amz-Signature=0765b2c2aa772b2df6dcaac7f479373b0546d82d3b15600894d32e322b96ba42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XJXAML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDyaEGP2apMqdGmGXUuoUmQi9jIFEYo5ZkMSstyWRe%2FGQIge1EIAoq5zUco76n6VmjJqS95uJlqx16NpKJJ5G3jgqkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABH0orQit4epBonGircA6KGCrlCCStzpH0EK%2BvTL8ZWMO1hqjNNV4YLqVvDIE0ZQJFsi8jLJhI3eNccLCx74l9qIt%2BV9r%2B%2FAfQZ0pVHGjzm%2BgMibNWIFq482bPl8dZGeWXgPmkCsRKtSgLZhj4jKE5gkAkKl6JdKO%2BglfOXIREcDGTFR3T6C7eBilPxYM4hihOiYn22OdRX7mNYBtcqqLI1IO0rvUEHYf76JwUT%2F4lETUBFV4ZXikJ7THWjYuns10qSDOFY5yEmJSCiHTdd53MPDJu5qWyZUvU48NLH4fxsQBkysBND9EFFZx69QP9ycYjiiI8kCF2bRfAdgpVJI%2F8VRARllVcOtdIoZ1bswiHRmgb7uwqRXlDWtD8sGRQh4poAVpFJ7uTBON3cZO1xjETJBZsscb2UKckVr30jzGSUPplaiNFiC2m3FC1dwNGsqmmMp7m3k295Vjir17rn0OXNcH2RX1qu%2F3y%2BvDNjz%2BhkMFqozKb13CfspEiY2W71UFnS6%2FAPMbz7NDC%2BvciXnscKPLL2kZNhnDVPSsLVrskrNgdZsEGe6cmhGuvIvXUO9wkotQurS9fk6%2BJT1akeNLm9cDxgeguwxt76fe7meSt0CdDMn9ugDrv5H8%2BZ2uey7fCCCxaLE7i7afq%2FMJ%2Faw74GOqUBvIm0oCRHIr7FbtZxx06AAibkUK0s1YbBoFW1audDUI9%2Br902TsnA2YW2CkGdYBSsmqZtqoWqKUZoudMLWvS6HUExXgBXQ%2BmzUXwgtIwOuxnIVz4HLm%2BqTq%2FD75uMbao5%2FZ5JaprSCXpHfzKBKui0yElysAzOMNli5e4cWn2EBaCyq4ybbi0r4bmzAWX5%2B%2BUpCLYNQIptdO3%2BXE1zEWPScvzWeYhe&X-Amz-Signature=de7d52807e590da41ca287da6eae41f8b9723fbf2979ed3e053c20710ee84528&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
