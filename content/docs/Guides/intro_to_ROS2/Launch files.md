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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2N2A3U%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1TWXbYKnaU2EZauFNbo03acuXT3YCIOV5tEEp%2Fa2SVwIgaSJc9%2FseGMUaUyDuleGBigNMggH824DYjR6oey66fhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCRp5y8QxR2yBaWdISrcA3EQZTsTGWDTKp2zlTuBS01IqWkApXzJLAkr5OVSEGOVcAAEgxRFc9aZwHA%2Fu1QDptyrephi%2FteVj1aoGVGtXBSx7dauR7bP%2BP0KX8WUJ8CJra7Da3RfCxLRZWSS3qfHGA43aH%2Fan1A33hil1e9BtEZsLNAwXeVL93NNQOMd9nktVAGWlxnaHbd5bP6E5vWb%2FfAcbqLdJTiLTq4h8Iqe9kttik8I8Y%2Bt5f098W5RZv31GU7mm45zRPRdWAI2lZ48I99aa9%2BIDOoQ%2BI5MqZZnwoPCg5nr0mClmPbnDc1IO4DMI4SQwicDC56TrEB6y1A6ltEIgwCudaeRNo%2B7VMMx2wu%2FsNF7HKObZb6G5h%2Bd%2FiSC5RuvLIegk4dUO98gYpLSWgQJ0KMCW1ZzNiQkwToULyNaHgZWmGhs5nJ7IKgWvrFEdwhJCCPDxdIrGAWQrysft1kv5LBJZTyteFfr63fj0Iqz7gQjaO8P%2B64g4KgTEyGvvESEamVuMKygr%2FfE2v8irM6TPE05eqPj2LEtqwELjZn%2FQIPgDTrI5%2BEF7fG1VnPbpqGfNawMJOlKCqYlmkhN%2FGsNO2BJErT8XqzOjxSRbrmHTUV%2Fd3kQxuHyC2U5tbOFfMoo9%2FfNuNuWEAOGMPDW%2Br8GOqUBzYSj6t2zFUNxW4ClTdinst8%2Bv11oPoazl0KlLcQvq1ODZ7NG3jSOG4PwCpKeqTixKyFK9n5cBTCW2xYgjIObTiwgchVjYvj8J%2FLSmJ0yITcUZnf0fr3JDQYaZBNL52RABWP7QciHjP%2FQNCX45Q8tuZXXocsMaGgrTv9apUC3SWwWpVDsQo8%2Bp9RhbTYb0jg1VwTX270syxhIxM38X3QgDwdCSuHf&X-Amz-Signature=589f46c936787aa37bd5d4965e9b4d9add8d67742a1f4ec3555cc42d8be4c2c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2N2A3U%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1TWXbYKnaU2EZauFNbo03acuXT3YCIOV5tEEp%2Fa2SVwIgaSJc9%2FseGMUaUyDuleGBigNMggH824DYjR6oey66fhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCRp5y8QxR2yBaWdISrcA3EQZTsTGWDTKp2zlTuBS01IqWkApXzJLAkr5OVSEGOVcAAEgxRFc9aZwHA%2Fu1QDptyrephi%2FteVj1aoGVGtXBSx7dauR7bP%2BP0KX8WUJ8CJra7Da3RfCxLRZWSS3qfHGA43aH%2Fan1A33hil1e9BtEZsLNAwXeVL93NNQOMd9nktVAGWlxnaHbd5bP6E5vWb%2FfAcbqLdJTiLTq4h8Iqe9kttik8I8Y%2Bt5f098W5RZv31GU7mm45zRPRdWAI2lZ48I99aa9%2BIDOoQ%2BI5MqZZnwoPCg5nr0mClmPbnDc1IO4DMI4SQwicDC56TrEB6y1A6ltEIgwCudaeRNo%2B7VMMx2wu%2FsNF7HKObZb6G5h%2Bd%2FiSC5RuvLIegk4dUO98gYpLSWgQJ0KMCW1ZzNiQkwToULyNaHgZWmGhs5nJ7IKgWvrFEdwhJCCPDxdIrGAWQrysft1kv5LBJZTyteFfr63fj0Iqz7gQjaO8P%2B64g4KgTEyGvvESEamVuMKygr%2FfE2v8irM6TPE05eqPj2LEtqwELjZn%2FQIPgDTrI5%2BEF7fG1VnPbpqGfNawMJOlKCqYlmkhN%2FGsNO2BJErT8XqzOjxSRbrmHTUV%2Fd3kQxuHyC2U5tbOFfMoo9%2FfNuNuWEAOGMPDW%2Br8GOqUBzYSj6t2zFUNxW4ClTdinst8%2Bv11oPoazl0KlLcQvq1ODZ7NG3jSOG4PwCpKeqTixKyFK9n5cBTCW2xYgjIObTiwgchVjYvj8J%2FLSmJ0yITcUZnf0fr3JDQYaZBNL52RABWP7QciHjP%2FQNCX45Q8tuZXXocsMaGgrTv9apUC3SWwWpVDsQo8%2Bp9RhbTYb0jg1VwTX270syxhIxM38X3QgDwdCSuHf&X-Amz-Signature=3d793c4ab6965c10b2a9aa271f3eed65fc75ad1f4de3e2795d91f639fbae9dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2N2A3U%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1TWXbYKnaU2EZauFNbo03acuXT3YCIOV5tEEp%2Fa2SVwIgaSJc9%2FseGMUaUyDuleGBigNMggH824DYjR6oey66fhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCRp5y8QxR2yBaWdISrcA3EQZTsTGWDTKp2zlTuBS01IqWkApXzJLAkr5OVSEGOVcAAEgxRFc9aZwHA%2Fu1QDptyrephi%2FteVj1aoGVGtXBSx7dauR7bP%2BP0KX8WUJ8CJra7Da3RfCxLRZWSS3qfHGA43aH%2Fan1A33hil1e9BtEZsLNAwXeVL93NNQOMd9nktVAGWlxnaHbd5bP6E5vWb%2FfAcbqLdJTiLTq4h8Iqe9kttik8I8Y%2Bt5f098W5RZv31GU7mm45zRPRdWAI2lZ48I99aa9%2BIDOoQ%2BI5MqZZnwoPCg5nr0mClmPbnDc1IO4DMI4SQwicDC56TrEB6y1A6ltEIgwCudaeRNo%2B7VMMx2wu%2FsNF7HKObZb6G5h%2Bd%2FiSC5RuvLIegk4dUO98gYpLSWgQJ0KMCW1ZzNiQkwToULyNaHgZWmGhs5nJ7IKgWvrFEdwhJCCPDxdIrGAWQrysft1kv5LBJZTyteFfr63fj0Iqz7gQjaO8P%2B64g4KgTEyGvvESEamVuMKygr%2FfE2v8irM6TPE05eqPj2LEtqwELjZn%2FQIPgDTrI5%2BEF7fG1VnPbpqGfNawMJOlKCqYlmkhN%2FGsNO2BJErT8XqzOjxSRbrmHTUV%2Fd3kQxuHyC2U5tbOFfMoo9%2FfNuNuWEAOGMPDW%2Br8GOqUBzYSj6t2zFUNxW4ClTdinst8%2Bv11oPoazl0KlLcQvq1ODZ7NG3jSOG4PwCpKeqTixKyFK9n5cBTCW2xYgjIObTiwgchVjYvj8J%2FLSmJ0yITcUZnf0fr3JDQYaZBNL52RABWP7QciHjP%2FQNCX45Q8tuZXXocsMaGgrTv9apUC3SWwWpVDsQo8%2Bp9RhbTYb0jg1VwTX270syxhIxM38X3QgDwdCSuHf&X-Amz-Signature=15e75878117ff1d490b6680b9b75e0654affeb1602d494c851fa06d84863859b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
