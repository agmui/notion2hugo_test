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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRFWNHX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICySpayPijFLkkW3fcgyOVzMWjXrsa9ey6CB6TbTcy6ZAiB8SScqPqsbGnfkHCfyepF5Nh0%2FKsmpzsmpTvMHULdtJiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMdLENi5h5culOXKtwD35vg3t0qQYSuT%2FeHgz0LhhhVcerO%2FF5eq7YTkP7ZeaxzFhGmSEP%2F2JzED0x7FjOB4Mh5MSMB7NLq8dLKrjy8NTePzJEW2nx9oH6jeBuX2xRId7e6WvgeMVsr%2FPC4I2yPd5cmYLRiK3gLaBbMIieZ4%2FeeEGKGj1Vlk9o%2FwQ8YrDD9UofqPuTfflHh%2F8XOGza%2Br67XFyNJMfSvKRSH3DvzKP5YoMQVXN7Wo70YDofZyw7waSl2048zbC00rhmNrKKRztYwIDIUTXWU1FmkYkVkLeexZQRBHj0l7frXZrvNneaoXpze40NhudHMIGm%2Bmwz5F%2BocRZF9C3H0s1m%2FpRsIRpWHjijltCOE1KDxErBdLzojhXJR53OsTxqVy9sACJg4fsAP%2B8q3XwyFIns0iv1VUB5YkBiL8SOejqAgtPE6IAYgrKrvPdAZ5fV4ox6NbwewZ6NBsQkAer2VjjaF4GVagjBj0k0Q8v3jA311wVlpcK%2B9jUYmgS8W%2BD9plwqKxhOIQUHWgzNFTIL57q9BZLmgVMifDU%2F9ZfWQKKciDOBsAXna7TAgkUw45F0JarLY8OVgo6lSbK6%2F3QElFO9FVihkSX%2FJiiMJOaJcqemAErSXblHkN%2B8OVuQrVCMaDQgwk%2FiBwQY6pgEx0I5t2W75lrvbx4jwkGoQc%2B%2BOGctcQKaqqbnJhMShfyJfj7P48P393mDoDgmfK4DbArhvdcZaJl%2BllcQMEQn73ihMAS1jWNMCl9jJ%2BVVJbdBI%2F1u1nenQB2tuE1TjpVVsHH8DO0BNtYNk5zQaAOnITzYJVboTjFzaN%2FpaugH8AbXCDnqnrFQCy8lDA4zcfDdtQhiodsPSaR%2BLxK%2FkJRc1tfwVCO7B&X-Amz-Signature=346d7d4ec02367038a162fb5fe032a3fec1f2c4101eac90b26701480ffa6277b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRFWNHX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICySpayPijFLkkW3fcgyOVzMWjXrsa9ey6CB6TbTcy6ZAiB8SScqPqsbGnfkHCfyepF5Nh0%2FKsmpzsmpTvMHULdtJiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMdLENi5h5culOXKtwD35vg3t0qQYSuT%2FeHgz0LhhhVcerO%2FF5eq7YTkP7ZeaxzFhGmSEP%2F2JzED0x7FjOB4Mh5MSMB7NLq8dLKrjy8NTePzJEW2nx9oH6jeBuX2xRId7e6WvgeMVsr%2FPC4I2yPd5cmYLRiK3gLaBbMIieZ4%2FeeEGKGj1Vlk9o%2FwQ8YrDD9UofqPuTfflHh%2F8XOGza%2Br67XFyNJMfSvKRSH3DvzKP5YoMQVXN7Wo70YDofZyw7waSl2048zbC00rhmNrKKRztYwIDIUTXWU1FmkYkVkLeexZQRBHj0l7frXZrvNneaoXpze40NhudHMIGm%2Bmwz5F%2BocRZF9C3H0s1m%2FpRsIRpWHjijltCOE1KDxErBdLzojhXJR53OsTxqVy9sACJg4fsAP%2B8q3XwyFIns0iv1VUB5YkBiL8SOejqAgtPE6IAYgrKrvPdAZ5fV4ox6NbwewZ6NBsQkAer2VjjaF4GVagjBj0k0Q8v3jA311wVlpcK%2B9jUYmgS8W%2BD9plwqKxhOIQUHWgzNFTIL57q9BZLmgVMifDU%2F9ZfWQKKciDOBsAXna7TAgkUw45F0JarLY8OVgo6lSbK6%2F3QElFO9FVihkSX%2FJiiMJOaJcqemAErSXblHkN%2B8OVuQrVCMaDQgwk%2FiBwQY6pgEx0I5t2W75lrvbx4jwkGoQc%2B%2BOGctcQKaqqbnJhMShfyJfj7P48P393mDoDgmfK4DbArhvdcZaJl%2BllcQMEQn73ihMAS1jWNMCl9jJ%2BVVJbdBI%2F1u1nenQB2tuE1TjpVVsHH8DO0BNtYNk5zQaAOnITzYJVboTjFzaN%2FpaugH8AbXCDnqnrFQCy8lDA4zcfDdtQhiodsPSaR%2BLxK%2FkJRc1tfwVCO7B&X-Amz-Signature=fb670e87ea6e4965d2fc1eecf3b2546de2d6c077f3eb2f28c2d84195d81a23f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRFWNHX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICySpayPijFLkkW3fcgyOVzMWjXrsa9ey6CB6TbTcy6ZAiB8SScqPqsbGnfkHCfyepF5Nh0%2FKsmpzsmpTvMHULdtJiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMdLENi5h5culOXKtwD35vg3t0qQYSuT%2FeHgz0LhhhVcerO%2FF5eq7YTkP7ZeaxzFhGmSEP%2F2JzED0x7FjOB4Mh5MSMB7NLq8dLKrjy8NTePzJEW2nx9oH6jeBuX2xRId7e6WvgeMVsr%2FPC4I2yPd5cmYLRiK3gLaBbMIieZ4%2FeeEGKGj1Vlk9o%2FwQ8YrDD9UofqPuTfflHh%2F8XOGza%2Br67XFyNJMfSvKRSH3DvzKP5YoMQVXN7Wo70YDofZyw7waSl2048zbC00rhmNrKKRztYwIDIUTXWU1FmkYkVkLeexZQRBHj0l7frXZrvNneaoXpze40NhudHMIGm%2Bmwz5F%2BocRZF9C3H0s1m%2FpRsIRpWHjijltCOE1KDxErBdLzojhXJR53OsTxqVy9sACJg4fsAP%2B8q3XwyFIns0iv1VUB5YkBiL8SOejqAgtPE6IAYgrKrvPdAZ5fV4ox6NbwewZ6NBsQkAer2VjjaF4GVagjBj0k0Q8v3jA311wVlpcK%2B9jUYmgS8W%2BD9plwqKxhOIQUHWgzNFTIL57q9BZLmgVMifDU%2F9ZfWQKKciDOBsAXna7TAgkUw45F0JarLY8OVgo6lSbK6%2F3QElFO9FVihkSX%2FJiiMJOaJcqemAErSXblHkN%2B8OVuQrVCMaDQgwk%2FiBwQY6pgEx0I5t2W75lrvbx4jwkGoQc%2B%2BOGctcQKaqqbnJhMShfyJfj7P48P393mDoDgmfK4DbArhvdcZaJl%2BllcQMEQn73ihMAS1jWNMCl9jJ%2BVVJbdBI%2F1u1nenQB2tuE1TjpVVsHH8DO0BNtYNk5zQaAOnITzYJVboTjFzaN%2FpaugH8AbXCDnqnrFQCy8lDA4zcfDdtQhiodsPSaR%2BLxK%2FkJRc1tfwVCO7B&X-Amz-Signature=7583326e50a3fb6c112ad32956091374338058781f1eeb560c13b264d37fc9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
