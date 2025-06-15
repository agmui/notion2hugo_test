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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5VNIHU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGaZeF6dli4HuvXJ5AwE55AMMon6HBfeiSGan8IOi0GjAiBx1nS1Tq1E6A6k8mWJ1s9KAKWEecyZDzvR%2FQC8ZtYpiSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMGsCc97%2Bh0rZy33TUKtwDHY3DUV2zESHFHbGyqqmsI6FP9HMJzRyKyyrqb7JDzjdUQXQmM7TckM1idmrv%2FbIOJ9aqhXVCul7ngeFGeMnJrFbAuGNK1TlviXvQWAxl3p7yR8LUqlAVeItXoFOZgYLWtcPkHwHeZ%2BCHYJiSLaC%2BW8eectjOIbzP8wEERko4ObZYPGT9b6fGRdjjuxlFHz%2BI29x3k5EzHNVkkuAbvh38%2FgN8QLbsWiMYhL%2BZSdwKtdITDkp0ehctFRw%2BBKxaU6Grg%2BgkQvbkfQHXFVCCq%2Bq7FllYl%2FFCoOIFGyzAFxkFQxqdfqHYessLQ8xxcBOr38dcWIlyAGbuVfgKJ2pr5fv9uI6cJiV7cPxzbTAyVOsuCkpBKYwf0sT67ZOAz8Sf6jdgvlosHmWXBA9zMYghbABIgBwhtHHHsmFrSNJ7Z8QFg1eOpuGh21LbgbkWlwWGM%2FelFBIpDhGQoTwTNyKF3%2F7yPFqT8xvUE8jpA0Ydm7gmRUEY02%2ByIBAu%2B%2F5QdQEjX3wAY7WJKJUPE3JuWiXR1rOBiqCHpxVArnuP565y40ccLs2c6LxyHXfoy8V61kGFaFS2%2FR%2FF8AvS2XZKNrEUjGzdFc6RBUx0xJE7OafVF6MlX1Rz0lk%2FmDaBTF4uDeIwjP%2B4wgY6pgG%2FuTwyLh0trbErjWNT73UfScxniHmuFzv9dybrNWstphqNIJs%2FUzP9sTosp8eHi%2B%2BLS3bZ30r5VMhZAsAcXfyTGfcWVb4PBMx7PtkXixYB5oTBzCJSMXlohQJlTv5uJkgburuHvnrvV7m2kGLGW7jj4BBhf3L40aRYz4H%2Bx%2BRQroj3XayuJmPJiHWcfFJx3S7eA2cFyL68gII9cnXwodcEhO6ZGYZF&X-Amz-Signature=c5558d9a32d83de0acc963d549afed3637da14e366b6d0048a1300007256e381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5VNIHU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGaZeF6dli4HuvXJ5AwE55AMMon6HBfeiSGan8IOi0GjAiBx1nS1Tq1E6A6k8mWJ1s9KAKWEecyZDzvR%2FQC8ZtYpiSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMGsCc97%2Bh0rZy33TUKtwDHY3DUV2zESHFHbGyqqmsI6FP9HMJzRyKyyrqb7JDzjdUQXQmM7TckM1idmrv%2FbIOJ9aqhXVCul7ngeFGeMnJrFbAuGNK1TlviXvQWAxl3p7yR8LUqlAVeItXoFOZgYLWtcPkHwHeZ%2BCHYJiSLaC%2BW8eectjOIbzP8wEERko4ObZYPGT9b6fGRdjjuxlFHz%2BI29x3k5EzHNVkkuAbvh38%2FgN8QLbsWiMYhL%2BZSdwKtdITDkp0ehctFRw%2BBKxaU6Grg%2BgkQvbkfQHXFVCCq%2Bq7FllYl%2FFCoOIFGyzAFxkFQxqdfqHYessLQ8xxcBOr38dcWIlyAGbuVfgKJ2pr5fv9uI6cJiV7cPxzbTAyVOsuCkpBKYwf0sT67ZOAz8Sf6jdgvlosHmWXBA9zMYghbABIgBwhtHHHsmFrSNJ7Z8QFg1eOpuGh21LbgbkWlwWGM%2FelFBIpDhGQoTwTNyKF3%2F7yPFqT8xvUE8jpA0Ydm7gmRUEY02%2ByIBAu%2B%2F5QdQEjX3wAY7WJKJUPE3JuWiXR1rOBiqCHpxVArnuP565y40ccLs2c6LxyHXfoy8V61kGFaFS2%2FR%2FF8AvS2XZKNrEUjGzdFc6RBUx0xJE7OafVF6MlX1Rz0lk%2FmDaBTF4uDeIwjP%2B4wgY6pgG%2FuTwyLh0trbErjWNT73UfScxniHmuFzv9dybrNWstphqNIJs%2FUzP9sTosp8eHi%2B%2BLS3bZ30r5VMhZAsAcXfyTGfcWVb4PBMx7PtkXixYB5oTBzCJSMXlohQJlTv5uJkgburuHvnrvV7m2kGLGW7jj4BBhf3L40aRYz4H%2Bx%2BRQroj3XayuJmPJiHWcfFJx3S7eA2cFyL68gII9cnXwodcEhO6ZGYZF&X-Amz-Signature=c6dff9feb1bf1ea776175fad7d48ed095ab007ebcb15ab36276b5f0750d14d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5VNIHU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGaZeF6dli4HuvXJ5AwE55AMMon6HBfeiSGan8IOi0GjAiBx1nS1Tq1E6A6k8mWJ1s9KAKWEecyZDzvR%2FQC8ZtYpiSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMGsCc97%2Bh0rZy33TUKtwDHY3DUV2zESHFHbGyqqmsI6FP9HMJzRyKyyrqb7JDzjdUQXQmM7TckM1idmrv%2FbIOJ9aqhXVCul7ngeFGeMnJrFbAuGNK1TlviXvQWAxl3p7yR8LUqlAVeItXoFOZgYLWtcPkHwHeZ%2BCHYJiSLaC%2BW8eectjOIbzP8wEERko4ObZYPGT9b6fGRdjjuxlFHz%2BI29x3k5EzHNVkkuAbvh38%2FgN8QLbsWiMYhL%2BZSdwKtdITDkp0ehctFRw%2BBKxaU6Grg%2BgkQvbkfQHXFVCCq%2Bq7FllYl%2FFCoOIFGyzAFxkFQxqdfqHYessLQ8xxcBOr38dcWIlyAGbuVfgKJ2pr5fv9uI6cJiV7cPxzbTAyVOsuCkpBKYwf0sT67ZOAz8Sf6jdgvlosHmWXBA9zMYghbABIgBwhtHHHsmFrSNJ7Z8QFg1eOpuGh21LbgbkWlwWGM%2FelFBIpDhGQoTwTNyKF3%2F7yPFqT8xvUE8jpA0Ydm7gmRUEY02%2ByIBAu%2B%2F5QdQEjX3wAY7WJKJUPE3JuWiXR1rOBiqCHpxVArnuP565y40ccLs2c6LxyHXfoy8V61kGFaFS2%2FR%2FF8AvS2XZKNrEUjGzdFc6RBUx0xJE7OafVF6MlX1Rz0lk%2FmDaBTF4uDeIwjP%2B4wgY6pgG%2FuTwyLh0trbErjWNT73UfScxniHmuFzv9dybrNWstphqNIJs%2FUzP9sTosp8eHi%2B%2BLS3bZ30r5VMhZAsAcXfyTGfcWVb4PBMx7PtkXixYB5oTBzCJSMXlohQJlTv5uJkgburuHvnrvV7m2kGLGW7jj4BBhf3L40aRYz4H%2Bx%2BRQroj3XayuJmPJiHWcfFJx3S7eA2cFyL68gII9cnXwodcEhO6ZGYZF&X-Amz-Signature=09ba2df223a2eda7840d7c9b9b6af84d1a1d594e5afb04b349b29a951e8a423e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
