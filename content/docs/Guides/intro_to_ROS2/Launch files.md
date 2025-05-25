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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZECE7V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBbqkvReWeelE0rwWjmsb66WwN17YaVu1F1DkBetX4XPAiEA9EtyS480e8PMDolr033x2o1Dh1nlLM0AX5UCNPmC1jYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIyPesI9oDb40m2fyircA3%2FtAnHmim%2BYUN1qLJlntJGsbHyIMMPa7NogHUZ35%2FEBjVDEoJ7zhQDzHD8kXkiw9sOiqcVuYy97uR%2FH69r3bnVdlqDsI51KqN9adNDod1YHDEEkIDN1eaopxw97ko56CzFRxzyXb0qcTMIR26oSD19YqDW2zN2bknWnn5utrm9wy8QFd4RryoRpddbULyeJilnD4f3TnAEC930HetO%2FPfABm5XG3ii87HVocnTQuENFKyO8FGlMWZwa07H%2FiHm166M7MDHGhNs8swtcObjqlcVS0M7%2F8JfUPv9u%2Bokk7vPuFI%2BWjdpBDGocR1Bb%2FTQd7vlRF29k9jHgtGpqAJsqqVvier10%2Bv0txWB95HINwV09NsKF%2Fwl%2Bv2C0pTF4KimAOYDcyKWqMAiOlV3pCwIeR8UpxohA%2BdLurFGsogq5v77tS3Vw15Np60MM0d%2FN6%2FrwMY0kuBIU%2F2WNLPt6KjoH6xb85W0h2AG4mrGO1PUXNYVs6fPcuVtYIZr9vBDGzG7q4OkyLfDhwYeKWNYPfid64hun2rUqTF5%2BOBYaYRP7RWKvAav02qMvys%2B%2FtfMXBiJj%2FurJ6FfETAeChwHxqCNrqORD7grhvL269lc0YqfvreBjHQptz8cnfcAaIDxCMKi5ysEGOqUBK1zxVaLU6OEjayZa86hAXsFUEIvyEUxIIxbJhbeKLgLXnpF%2Bcj%2FUetJWe2%2Bggq%2F5CXYK%2BhB8hJ8MYSspK%2BNX5w%2B4cQPAoVfSBHjej6n%2BRDRCcqyPSuVmtIOuXNj9196dCVT0IY374Xg5CX1S%2BMWhfxy%2FSniX5xUiW7H8qurl9wnp5b%2BwKA1mC2RNhn91XkKGQ0A5HlTuI%2FzC5Fbc3JMJDeYr1Lk5&X-Amz-Signature=482a8a0aa4364175d2d1c706bc27eca57c7e408d8348a591f31a126ee0fc65f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZECE7V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBbqkvReWeelE0rwWjmsb66WwN17YaVu1F1DkBetX4XPAiEA9EtyS480e8PMDolr033x2o1Dh1nlLM0AX5UCNPmC1jYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIyPesI9oDb40m2fyircA3%2FtAnHmim%2BYUN1qLJlntJGsbHyIMMPa7NogHUZ35%2FEBjVDEoJ7zhQDzHD8kXkiw9sOiqcVuYy97uR%2FH69r3bnVdlqDsI51KqN9adNDod1YHDEEkIDN1eaopxw97ko56CzFRxzyXb0qcTMIR26oSD19YqDW2zN2bknWnn5utrm9wy8QFd4RryoRpddbULyeJilnD4f3TnAEC930HetO%2FPfABm5XG3ii87HVocnTQuENFKyO8FGlMWZwa07H%2FiHm166M7MDHGhNs8swtcObjqlcVS0M7%2F8JfUPv9u%2Bokk7vPuFI%2BWjdpBDGocR1Bb%2FTQd7vlRF29k9jHgtGpqAJsqqVvier10%2Bv0txWB95HINwV09NsKF%2Fwl%2Bv2C0pTF4KimAOYDcyKWqMAiOlV3pCwIeR8UpxohA%2BdLurFGsogq5v77tS3Vw15Np60MM0d%2FN6%2FrwMY0kuBIU%2F2WNLPt6KjoH6xb85W0h2AG4mrGO1PUXNYVs6fPcuVtYIZr9vBDGzG7q4OkyLfDhwYeKWNYPfid64hun2rUqTF5%2BOBYaYRP7RWKvAav02qMvys%2B%2FtfMXBiJj%2FurJ6FfETAeChwHxqCNrqORD7grhvL269lc0YqfvreBjHQptz8cnfcAaIDxCMKi5ysEGOqUBK1zxVaLU6OEjayZa86hAXsFUEIvyEUxIIxbJhbeKLgLXnpF%2Bcj%2FUetJWe2%2Bggq%2F5CXYK%2BhB8hJ8MYSspK%2BNX5w%2B4cQPAoVfSBHjej6n%2BRDRCcqyPSuVmtIOuXNj9196dCVT0IY374Xg5CX1S%2BMWhfxy%2FSniX5xUiW7H8qurl9wnp5b%2BwKA1mC2RNhn91XkKGQ0A5HlTuI%2FzC5Fbc3JMJDeYr1Lk5&X-Amz-Signature=8087e6ee68941e8fa95205f5b48db5765d8285bf6a1d2539f3a3a4e5caf02208&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZECE7V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBbqkvReWeelE0rwWjmsb66WwN17YaVu1F1DkBetX4XPAiEA9EtyS480e8PMDolr033x2o1Dh1nlLM0AX5UCNPmC1jYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIyPesI9oDb40m2fyircA3%2FtAnHmim%2BYUN1qLJlntJGsbHyIMMPa7NogHUZ35%2FEBjVDEoJ7zhQDzHD8kXkiw9sOiqcVuYy97uR%2FH69r3bnVdlqDsI51KqN9adNDod1YHDEEkIDN1eaopxw97ko56CzFRxzyXb0qcTMIR26oSD19YqDW2zN2bknWnn5utrm9wy8QFd4RryoRpddbULyeJilnD4f3TnAEC930HetO%2FPfABm5XG3ii87HVocnTQuENFKyO8FGlMWZwa07H%2FiHm166M7MDHGhNs8swtcObjqlcVS0M7%2F8JfUPv9u%2Bokk7vPuFI%2BWjdpBDGocR1Bb%2FTQd7vlRF29k9jHgtGpqAJsqqVvier10%2Bv0txWB95HINwV09NsKF%2Fwl%2Bv2C0pTF4KimAOYDcyKWqMAiOlV3pCwIeR8UpxohA%2BdLurFGsogq5v77tS3Vw15Np60MM0d%2FN6%2FrwMY0kuBIU%2F2WNLPt6KjoH6xb85W0h2AG4mrGO1PUXNYVs6fPcuVtYIZr9vBDGzG7q4OkyLfDhwYeKWNYPfid64hun2rUqTF5%2BOBYaYRP7RWKvAav02qMvys%2B%2FtfMXBiJj%2FurJ6FfETAeChwHxqCNrqORD7grhvL269lc0YqfvreBjHQptz8cnfcAaIDxCMKi5ysEGOqUBK1zxVaLU6OEjayZa86hAXsFUEIvyEUxIIxbJhbeKLgLXnpF%2Bcj%2FUetJWe2%2Bggq%2F5CXYK%2BhB8hJ8MYSspK%2BNX5w%2B4cQPAoVfSBHjej6n%2BRDRCcqyPSuVmtIOuXNj9196dCVT0IY374Xg5CX1S%2BMWhfxy%2FSniX5xUiW7H8qurl9wnp5b%2BwKA1mC2RNhn91XkKGQ0A5HlTuI%2FzC5Fbc3JMJDeYr1Lk5&X-Amz-Signature=62f54f5f7c3c7d2418f4af76e69a7ccede36601f05237a3477ae2e4d8eef9bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
