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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXXTSG2%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr3ilMFN5lMwxhuWda6LqWl8ijE9d2ouUS2Vkn9msNxAiEA57QNqTxU1o6to1lcDi0GuIbVAFkIlZkEo5zdVVGLk9Yq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG2mFPhCcf8EoiesdCrcA%2BnbZ99wwMHEDIAwzVrJWityDVdZ45OWqFoPPDquFOD9dj0P1tu2Ts8tZkp2mx1KDjf147tBNs%2BKR0nzy2TNLb55uLlPgVNtaFxkQStI91R6bGbBpOEALiyRsKibiMAZSoN5i%2Fj7h5Y6e8MLSQ5P%2FE3Z2BdIywahjDMWbR3E5bhRTBIgBVLKWtPFRDbaNSoT5S%2FZmtl39ngf%2FEtcAsT0f00EYrTQMz2RWD0p4uvaGb2Zyf0IOApk%2Bc0Cmz96oSDWZvGQRHNQ9iH1jafranlYF80ajyri258qmKqcR3J4s6yV3Hvjct0DuwnuBKX%2F13Geh0FI7A9ZKiKc3I2cUA3aKSclHDQ9nRfXGlCMA9L4m7yRkqYBOob3dUNhzLm3%2FuihAytGUqcbgsHCEfTYoReQZYmJdZa4uHUaTGq0BA0Kx%2FT4HQpx0QMCEVcn4ghamQ9S9dR3exfwtsk8KuC5OD3mTyRnwnpXZOwGd5NfozkOWFFcfhxIiNUAxCG9gqRVk%2FQww4DZX5eq3rV9UtBVZV9MgVkKN9rwK5gCnaXDqH3Sc9ePdZXVWVAaWQgtXLStaTQWmRpc3C1dfpeflT2xM8ZUpgz83wrNkI9sth8yBzT6mA3zk34ZtbKzp2gYnn6pMOT16ssGOqUBRO8Hwp%2FuXgdF5TGQfW3uECaqqQcW2zyh65Z84hD7BRTz%2FJBaOICtgLU6pnIaZ3XfQMgsgR0Xomrmq74mNRoMBBo0sK9GikuhErXNo10LN%2FdCsJMm5sYANsz%2Fj%2BNO46nSDaCGFuflykaglujwTLviTbQtnDmKZYQiw7%2BH%2FOntPWHqhHkI0oASjGSwN2kf66IcTb1sTEv9s6UNj95thQujD73sXRFM&X-Amz-Signature=2508e4187844d45db246d3219600655045b1ee60f13dd5fb991823acb0dc04c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXXTSG2%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr3ilMFN5lMwxhuWda6LqWl8ijE9d2ouUS2Vkn9msNxAiEA57QNqTxU1o6to1lcDi0GuIbVAFkIlZkEo5zdVVGLk9Yq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG2mFPhCcf8EoiesdCrcA%2BnbZ99wwMHEDIAwzVrJWityDVdZ45OWqFoPPDquFOD9dj0P1tu2Ts8tZkp2mx1KDjf147tBNs%2BKR0nzy2TNLb55uLlPgVNtaFxkQStI91R6bGbBpOEALiyRsKibiMAZSoN5i%2Fj7h5Y6e8MLSQ5P%2FE3Z2BdIywahjDMWbR3E5bhRTBIgBVLKWtPFRDbaNSoT5S%2FZmtl39ngf%2FEtcAsT0f00EYrTQMz2RWD0p4uvaGb2Zyf0IOApk%2Bc0Cmz96oSDWZvGQRHNQ9iH1jafranlYF80ajyri258qmKqcR3J4s6yV3Hvjct0DuwnuBKX%2F13Geh0FI7A9ZKiKc3I2cUA3aKSclHDQ9nRfXGlCMA9L4m7yRkqYBOob3dUNhzLm3%2FuihAytGUqcbgsHCEfTYoReQZYmJdZa4uHUaTGq0BA0Kx%2FT4HQpx0QMCEVcn4ghamQ9S9dR3exfwtsk8KuC5OD3mTyRnwnpXZOwGd5NfozkOWFFcfhxIiNUAxCG9gqRVk%2FQww4DZX5eq3rV9UtBVZV9MgVkKN9rwK5gCnaXDqH3Sc9ePdZXVWVAaWQgtXLStaTQWmRpc3C1dfpeflT2xM8ZUpgz83wrNkI9sth8yBzT6mA3zk34ZtbKzp2gYnn6pMOT16ssGOqUBRO8Hwp%2FuXgdF5TGQfW3uECaqqQcW2zyh65Z84hD7BRTz%2FJBaOICtgLU6pnIaZ3XfQMgsgR0Xomrmq74mNRoMBBo0sK9GikuhErXNo10LN%2FdCsJMm5sYANsz%2Fj%2BNO46nSDaCGFuflykaglujwTLviTbQtnDmKZYQiw7%2BH%2FOntPWHqhHkI0oASjGSwN2kf66IcTb1sTEv9s6UNj95thQujD73sXRFM&X-Amz-Signature=5e291fc87112fc0a14abbf5ce5a166bbbcf1a16ed7846f34ad91e5ca7f79568b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXXTSG2%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr3ilMFN5lMwxhuWda6LqWl8ijE9d2ouUS2Vkn9msNxAiEA57QNqTxU1o6to1lcDi0GuIbVAFkIlZkEo5zdVVGLk9Yq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG2mFPhCcf8EoiesdCrcA%2BnbZ99wwMHEDIAwzVrJWityDVdZ45OWqFoPPDquFOD9dj0P1tu2Ts8tZkp2mx1KDjf147tBNs%2BKR0nzy2TNLb55uLlPgVNtaFxkQStI91R6bGbBpOEALiyRsKibiMAZSoN5i%2Fj7h5Y6e8MLSQ5P%2FE3Z2BdIywahjDMWbR3E5bhRTBIgBVLKWtPFRDbaNSoT5S%2FZmtl39ngf%2FEtcAsT0f00EYrTQMz2RWD0p4uvaGb2Zyf0IOApk%2Bc0Cmz96oSDWZvGQRHNQ9iH1jafranlYF80ajyri258qmKqcR3J4s6yV3Hvjct0DuwnuBKX%2F13Geh0FI7A9ZKiKc3I2cUA3aKSclHDQ9nRfXGlCMA9L4m7yRkqYBOob3dUNhzLm3%2FuihAytGUqcbgsHCEfTYoReQZYmJdZa4uHUaTGq0BA0Kx%2FT4HQpx0QMCEVcn4ghamQ9S9dR3exfwtsk8KuC5OD3mTyRnwnpXZOwGd5NfozkOWFFcfhxIiNUAxCG9gqRVk%2FQww4DZX5eq3rV9UtBVZV9MgVkKN9rwK5gCnaXDqH3Sc9ePdZXVWVAaWQgtXLStaTQWmRpc3C1dfpeflT2xM8ZUpgz83wrNkI9sth8yBzT6mA3zk34ZtbKzp2gYnn6pMOT16ssGOqUBRO8Hwp%2FuXgdF5TGQfW3uECaqqQcW2zyh65Z84hD7BRTz%2FJBaOICtgLU6pnIaZ3XfQMgsgR0Xomrmq74mNRoMBBo0sK9GikuhErXNo10LN%2FdCsJMm5sYANsz%2Fj%2BNO46nSDaCGFuflykaglujwTLviTbQtnDmKZYQiw7%2BH%2FOntPWHqhHkI0oASjGSwN2kf66IcTb1sTEv9s6UNj95thQujD73sXRFM&X-Amz-Signature=7b92940e9d8a7cd6fc927566dc1ba8039ca2531cdfdf872fc67f828977a38263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
