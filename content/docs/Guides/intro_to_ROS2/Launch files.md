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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5K4MXX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc3eiEvUxGwJNmK9bQnGTIKlj84%2B7QQTreJBeDDOz%2BYAiEAiOYduy7ceB3dbayim4k72%2F1cdh5uonGX7MNoZQ6nJvUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF4AMRjeoXbHY%2BPruSrcA8foGhvbuKtOpxXdw64iBGB5MW1hlldQ4tSPSZ1KOq2B9fmyEffA5Qh8zboAvoLOgHGTWt2G%2F9u0Scskcgck6BJdJS70s03BdGkR9N3RsEwmOqKZyg9X0%2F8ZU30MeFzdHXwVXSGNxX1cUnGk88IfLCJL7EkvrnCo7ysLNOnYGrJDTchwZOrExoJsxTWzhpmeMp2smsAxu2mx6dUYOkM7E%2FIRhNY8sTJYV6EuMFBSECtRSTsooRDBy8wIrfuYOJz9w3v8oDPWxnQNd%2FNVYZt0RX7okay6uXT4nKqXT3l2XttqqJchrOzRlfOHN1qPa4VpUoCBTnYAJBRLCBXgOf0ax8FzZRjj%2FbzSyHJVCNjGp2jBV9GwPaYAQ2gsMg2pKAoT3lwPGdSr9TkOg%2B2FPD2d4HwAkWB5xbxK6M%2B4oDNURQScXJyEIgbWlIdVitDmvN%2BNEBxN0nIEQbS8v0RkXy%2FcQHl33o%2Fo0tVFHLTZ6PSX%2Bw8mvqNVMXLREIEDYru7tWWj9HH44KLh90SXB7ZbXsGbAd3MGDDoWFMeGrC%2Fv2G3T%2FD9MGwUVBxS6nfMjj17uwgMeBXhT%2BNkyDrsOUPDzU1mxigaDj9PSyFMhoOMzDXfWUQKaWpSaRZ%2FffQD1mXyMICy8sQGOqUBLrKeLz%2Fj0aJ4gdnFCcyGmpDNgJMIJXmC2JuPoLaQZxceKR%2F3XN63e4ZbfMNe4l5CTh8JOixLLZL19IFOdUHqkEF%2FknM1wPjkKCcYLGH9KSnyaYWoR6nqat5ptL%2BP8bvBIPBdzieDNYsK53FLvvwiUCsnsc5PVFlJZF3VMSNZgfbW%2B9uieVWs%2BgrBHKSzzWXocmyd012sh%2FyF3kbX5%2BfG5f6qMois&X-Amz-Signature=83163ea30d5daad4258879a3ffd423c97efdfcddfab993843b7551eb7006363c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5K4MXX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc3eiEvUxGwJNmK9bQnGTIKlj84%2B7QQTreJBeDDOz%2BYAiEAiOYduy7ceB3dbayim4k72%2F1cdh5uonGX7MNoZQ6nJvUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF4AMRjeoXbHY%2BPruSrcA8foGhvbuKtOpxXdw64iBGB5MW1hlldQ4tSPSZ1KOq2B9fmyEffA5Qh8zboAvoLOgHGTWt2G%2F9u0Scskcgck6BJdJS70s03BdGkR9N3RsEwmOqKZyg9X0%2F8ZU30MeFzdHXwVXSGNxX1cUnGk88IfLCJL7EkvrnCo7ysLNOnYGrJDTchwZOrExoJsxTWzhpmeMp2smsAxu2mx6dUYOkM7E%2FIRhNY8sTJYV6EuMFBSECtRSTsooRDBy8wIrfuYOJz9w3v8oDPWxnQNd%2FNVYZt0RX7okay6uXT4nKqXT3l2XttqqJchrOzRlfOHN1qPa4VpUoCBTnYAJBRLCBXgOf0ax8FzZRjj%2FbzSyHJVCNjGp2jBV9GwPaYAQ2gsMg2pKAoT3lwPGdSr9TkOg%2B2FPD2d4HwAkWB5xbxK6M%2B4oDNURQScXJyEIgbWlIdVitDmvN%2BNEBxN0nIEQbS8v0RkXy%2FcQHl33o%2Fo0tVFHLTZ6PSX%2Bw8mvqNVMXLREIEDYru7tWWj9HH44KLh90SXB7ZbXsGbAd3MGDDoWFMeGrC%2Fv2G3T%2FD9MGwUVBxS6nfMjj17uwgMeBXhT%2BNkyDrsOUPDzU1mxigaDj9PSyFMhoOMzDXfWUQKaWpSaRZ%2FffQD1mXyMICy8sQGOqUBLrKeLz%2Fj0aJ4gdnFCcyGmpDNgJMIJXmC2JuPoLaQZxceKR%2F3XN63e4ZbfMNe4l5CTh8JOixLLZL19IFOdUHqkEF%2FknM1wPjkKCcYLGH9KSnyaYWoR6nqat5ptL%2BP8bvBIPBdzieDNYsK53FLvvwiUCsnsc5PVFlJZF3VMSNZgfbW%2B9uieVWs%2BgrBHKSzzWXocmyd012sh%2FyF3kbX5%2BfG5f6qMois&X-Amz-Signature=0c60a39ef2c06a1b0d35f27b9fc01c24996c2d9b8ef57cca0e616ee94b94a1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5K4MXX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc3eiEvUxGwJNmK9bQnGTIKlj84%2B7QQTreJBeDDOz%2BYAiEAiOYduy7ceB3dbayim4k72%2F1cdh5uonGX7MNoZQ6nJvUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF4AMRjeoXbHY%2BPruSrcA8foGhvbuKtOpxXdw64iBGB5MW1hlldQ4tSPSZ1KOq2B9fmyEffA5Qh8zboAvoLOgHGTWt2G%2F9u0Scskcgck6BJdJS70s03BdGkR9N3RsEwmOqKZyg9X0%2F8ZU30MeFzdHXwVXSGNxX1cUnGk88IfLCJL7EkvrnCo7ysLNOnYGrJDTchwZOrExoJsxTWzhpmeMp2smsAxu2mx6dUYOkM7E%2FIRhNY8sTJYV6EuMFBSECtRSTsooRDBy8wIrfuYOJz9w3v8oDPWxnQNd%2FNVYZt0RX7okay6uXT4nKqXT3l2XttqqJchrOzRlfOHN1qPa4VpUoCBTnYAJBRLCBXgOf0ax8FzZRjj%2FbzSyHJVCNjGp2jBV9GwPaYAQ2gsMg2pKAoT3lwPGdSr9TkOg%2B2FPD2d4HwAkWB5xbxK6M%2B4oDNURQScXJyEIgbWlIdVitDmvN%2BNEBxN0nIEQbS8v0RkXy%2FcQHl33o%2Fo0tVFHLTZ6PSX%2Bw8mvqNVMXLREIEDYru7tWWj9HH44KLh90SXB7ZbXsGbAd3MGDDoWFMeGrC%2Fv2G3T%2FD9MGwUVBxS6nfMjj17uwgMeBXhT%2BNkyDrsOUPDzU1mxigaDj9PSyFMhoOMzDXfWUQKaWpSaRZ%2FffQD1mXyMICy8sQGOqUBLrKeLz%2Fj0aJ4gdnFCcyGmpDNgJMIJXmC2JuPoLaQZxceKR%2F3XN63e4ZbfMNe4l5CTh8JOixLLZL19IFOdUHqkEF%2FknM1wPjkKCcYLGH9KSnyaYWoR6nqat5ptL%2BP8bvBIPBdzieDNYsK53FLvvwiUCsnsc5PVFlJZF3VMSNZgfbW%2B9uieVWs%2BgrBHKSzzWXocmyd012sh%2FyF3kbX5%2BfG5f6qMois&X-Amz-Signature=e996b521005733203c70f94a2d69b172c1c171e3e2008561caadec80bd1edfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
