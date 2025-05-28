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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56YX2WE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA8xQcQ1pNnEHe1q1Qqk4mfg6efThJ3jTCBktt88Ve2AiEA7TZpMjUOKE1wwiMX3mAT%2Fr0vSQnoFr9cZ4iS9MhJ5osq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBI0njCN0hKpJ84dVCrcA7nxEE3w1A9h07yW6PWqeaN%2BOIsdOSsWMB158Of5%2FywrmX1zToaDz%2Fox7m%2BayFuDoU3M6hdJdGfkibJY%2F%2BRWdtbc3gBEEmj8rBNGzTL%2FHaEnBtIgksuCGHGNx6M8idnRdcTvZKzi7y%2BGdx4yU5e831k%2FLXQadG3RE5gJhewmBr6WyHEGaBxVHv9MiA9R1kB9Q35rPNL6Qi%2F1f9s3pCcTs6B4pn64GJYZiPJC0cc%2Fqh3acApLInALsU4mMi0thlpHYF6BW2hXWoichrCvTWLSvN5gQIhO4jKp79P7L76EdRGaPqA3W4014RaJxWQxw3UHt3X%2Bu5oCvRBwbBj%2BQvjKuBAeJ6aRPTFZz2qfn3V84ZAABB%2BckwU8MgOnFemoEnlBg8nkISwFwqeyK8jHCJGaxPyE4gjBG8CJBSGdm4AxSM%2B%2FcnCaovn3cPo69NFAmQlHZKMUo%2BGlBLjmUpvGmoMkeexQFmr4ykpB312od%2FbALeeq%2FNQ33I0xeyBtZbthi1JpvSfWsqHRXc9seG4tX9R3%2BnaU2qGF9GUEkNbn63GDPM9G8OqIFhS0fap%2FoEq29hMKgnGTIktBBLNc6k03PJC5i47lWXdwwWOVRqtek40JJG89wp5R7jMvb%2B9hyXVYMMXE2sEGOqUBg3mLlo70ltcLEjQ6Z2%2FmW%2FKJ%2FgAganCQ7%2FK6hlKGAF0NG4cR2AMeoEPQ7rVZWvuoGH9mZF4J28pqLVeX%2FDlGj4Ma%2FfhzB9GSYd90Y4fdMhn9FhsKRUHsErn1OHKeKp32bTWC2ri6i6deq6ocMWsmwwEb5bW%2FrRf0XaoCtjQhVmT7au6m%2FSTVl%2FYQdB1WhJItp6Q9C7YN%2FhGSqj5xj6c2pTAq6%2F0u&X-Amz-Signature=2eaa7fd1eaff45843831370d5d6ff702bc13b0d11d9d7194fc2084cdb3cf8f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56YX2WE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA8xQcQ1pNnEHe1q1Qqk4mfg6efThJ3jTCBktt88Ve2AiEA7TZpMjUOKE1wwiMX3mAT%2Fr0vSQnoFr9cZ4iS9MhJ5osq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBI0njCN0hKpJ84dVCrcA7nxEE3w1A9h07yW6PWqeaN%2BOIsdOSsWMB158Of5%2FywrmX1zToaDz%2Fox7m%2BayFuDoU3M6hdJdGfkibJY%2F%2BRWdtbc3gBEEmj8rBNGzTL%2FHaEnBtIgksuCGHGNx6M8idnRdcTvZKzi7y%2BGdx4yU5e831k%2FLXQadG3RE5gJhewmBr6WyHEGaBxVHv9MiA9R1kB9Q35rPNL6Qi%2F1f9s3pCcTs6B4pn64GJYZiPJC0cc%2Fqh3acApLInALsU4mMi0thlpHYF6BW2hXWoichrCvTWLSvN5gQIhO4jKp79P7L76EdRGaPqA3W4014RaJxWQxw3UHt3X%2Bu5oCvRBwbBj%2BQvjKuBAeJ6aRPTFZz2qfn3V84ZAABB%2BckwU8MgOnFemoEnlBg8nkISwFwqeyK8jHCJGaxPyE4gjBG8CJBSGdm4AxSM%2B%2FcnCaovn3cPo69NFAmQlHZKMUo%2BGlBLjmUpvGmoMkeexQFmr4ykpB312od%2FbALeeq%2FNQ33I0xeyBtZbthi1JpvSfWsqHRXc9seG4tX9R3%2BnaU2qGF9GUEkNbn63GDPM9G8OqIFhS0fap%2FoEq29hMKgnGTIktBBLNc6k03PJC5i47lWXdwwWOVRqtek40JJG89wp5R7jMvb%2B9hyXVYMMXE2sEGOqUBg3mLlo70ltcLEjQ6Z2%2FmW%2FKJ%2FgAganCQ7%2FK6hlKGAF0NG4cR2AMeoEPQ7rVZWvuoGH9mZF4J28pqLVeX%2FDlGj4Ma%2FfhzB9GSYd90Y4fdMhn9FhsKRUHsErn1OHKeKp32bTWC2ri6i6deq6ocMWsmwwEb5bW%2FrRf0XaoCtjQhVmT7au6m%2FSTVl%2FYQdB1WhJItp6Q9C7YN%2FhGSqj5xj6c2pTAq6%2F0u&X-Amz-Signature=097e59de92ac93d47c23dc27aca1f92d31ebea2d0edb4fca3a265970c8a86dac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56YX2WE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA8xQcQ1pNnEHe1q1Qqk4mfg6efThJ3jTCBktt88Ve2AiEA7TZpMjUOKE1wwiMX3mAT%2Fr0vSQnoFr9cZ4iS9MhJ5osq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBI0njCN0hKpJ84dVCrcA7nxEE3w1A9h07yW6PWqeaN%2BOIsdOSsWMB158Of5%2FywrmX1zToaDz%2Fox7m%2BayFuDoU3M6hdJdGfkibJY%2F%2BRWdtbc3gBEEmj8rBNGzTL%2FHaEnBtIgksuCGHGNx6M8idnRdcTvZKzi7y%2BGdx4yU5e831k%2FLXQadG3RE5gJhewmBr6WyHEGaBxVHv9MiA9R1kB9Q35rPNL6Qi%2F1f9s3pCcTs6B4pn64GJYZiPJC0cc%2Fqh3acApLInALsU4mMi0thlpHYF6BW2hXWoichrCvTWLSvN5gQIhO4jKp79P7L76EdRGaPqA3W4014RaJxWQxw3UHt3X%2Bu5oCvRBwbBj%2BQvjKuBAeJ6aRPTFZz2qfn3V84ZAABB%2BckwU8MgOnFemoEnlBg8nkISwFwqeyK8jHCJGaxPyE4gjBG8CJBSGdm4AxSM%2B%2FcnCaovn3cPo69NFAmQlHZKMUo%2BGlBLjmUpvGmoMkeexQFmr4ykpB312od%2FbALeeq%2FNQ33I0xeyBtZbthi1JpvSfWsqHRXc9seG4tX9R3%2BnaU2qGF9GUEkNbn63GDPM9G8OqIFhS0fap%2FoEq29hMKgnGTIktBBLNc6k03PJC5i47lWXdwwWOVRqtek40JJG89wp5R7jMvb%2B9hyXVYMMXE2sEGOqUBg3mLlo70ltcLEjQ6Z2%2FmW%2FKJ%2FgAganCQ7%2FK6hlKGAF0NG4cR2AMeoEPQ7rVZWvuoGH9mZF4J28pqLVeX%2FDlGj4Ma%2FfhzB9GSYd90Y4fdMhn9FhsKRUHsErn1OHKeKp32bTWC2ri6i6deq6ocMWsmwwEb5bW%2FrRf0XaoCtjQhVmT7au6m%2FSTVl%2FYQdB1WhJItp6Q9C7YN%2FhGSqj5xj6c2pTAq6%2F0u&X-Amz-Signature=7fa999e2b3accc33f829032a1531d3255c25d2dcdaa54509b01e3b9667ca94ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
