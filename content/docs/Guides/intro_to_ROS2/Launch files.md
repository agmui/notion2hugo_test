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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQXGON3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkV1PJxm%2FeboUIN3IAd2t%2F2oow9qTbsw%2FP9CgCl9HL%2BwIhAI9ooHM%2BayeJq7NN%2Bwel207TK17laSOgGLOIovvd4LryKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXe2YVXRd1UGpO%2FYAq3APUC6ZWqKAHkIyJwNYbNWfns0eBM1OnH6FLeFMKA8nNkinuyONZIy8gEauagvAfa2MOBrKOfAoUNywZLmOPersKIPjJuVfVJuI4VKZCrnS9KiApHRXbk4wahVI5DQFNSc%2B9EHdWjBBvwt0mgdemLoe8sQbbJIDO%2FB%2Bx8IJSSYeAIGDTuubiKJWUBdEjUSnK7Ve6FrY3tOC8LBbxYt1%2BVgLs%2BTB9%2FEj7NvTkHrj%2BM7ny%2FLvciPnM64wl7mg8bW1Eb7TLvDnhm7ZWsJwLsMsOKu7mjdmJccxKY7ngy573q93Wu%2BVMBn%2BY15qYUV%2BLmFmV7%2F00wYM2SMwfhNCNZZuY7enkXJmhwGSZQgsAyD5dSTjRq%2BnBUfG8tEDgpHbRoYIsKc%2FX1oX4vGPV3dLYJeSMsioR2fqD2%2BcDRQaowZnesZ%2FgEpnXyTeqQUtp3aD%2Ftf7pmvTsfJROazZcYLTbP1KS%2B9tHO1s9K8UaUv6wxqMCoxXKMalALbRVYWeTbBvVXd6zjXelODpKy1FWH5gZ2358aQrcfWNTPHmcNj11Rjj%2B39pzBH02PmR3PlwFcOVP1emb990f%2FM%2B%2FoMWOfUKflaafqYV%2F0GB1a5tZUGtVgYDxDVQ9xIGkcKuwSLMiNjouxjCr98zCBjqkAakgTaCYv1j0ecTw%2Fr563A0THW1vi2oFK3te3zhF%2BGwtTlqpX2PIvwY4QT3sKLn8nLcqT4iYLqHcMcN0r7Gsn82mJzTf478iFOZGttJ7fYx2YdGSxZqwVBDPDeht3vOszyvjeGbueJXPStJFT2W%2BXPGympt7FyiBiiHkUF1YhMy0YVJjNZgXNv0chVDuXOuW3tuEH%2BEeh2mX11DZzNdHIfGVltU4&X-Amz-Signature=57307a8f7fbb91bb3cc1cbdd35f90da902ce578c68189ba42b3a2b58a87f440e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQXGON3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkV1PJxm%2FeboUIN3IAd2t%2F2oow9qTbsw%2FP9CgCl9HL%2BwIhAI9ooHM%2BayeJq7NN%2Bwel207TK17laSOgGLOIovvd4LryKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXe2YVXRd1UGpO%2FYAq3APUC6ZWqKAHkIyJwNYbNWfns0eBM1OnH6FLeFMKA8nNkinuyONZIy8gEauagvAfa2MOBrKOfAoUNywZLmOPersKIPjJuVfVJuI4VKZCrnS9KiApHRXbk4wahVI5DQFNSc%2B9EHdWjBBvwt0mgdemLoe8sQbbJIDO%2FB%2Bx8IJSSYeAIGDTuubiKJWUBdEjUSnK7Ve6FrY3tOC8LBbxYt1%2BVgLs%2BTB9%2FEj7NvTkHrj%2BM7ny%2FLvciPnM64wl7mg8bW1Eb7TLvDnhm7ZWsJwLsMsOKu7mjdmJccxKY7ngy573q93Wu%2BVMBn%2BY15qYUV%2BLmFmV7%2F00wYM2SMwfhNCNZZuY7enkXJmhwGSZQgsAyD5dSTjRq%2BnBUfG8tEDgpHbRoYIsKc%2FX1oX4vGPV3dLYJeSMsioR2fqD2%2BcDRQaowZnesZ%2FgEpnXyTeqQUtp3aD%2Ftf7pmvTsfJROazZcYLTbP1KS%2B9tHO1s9K8UaUv6wxqMCoxXKMalALbRVYWeTbBvVXd6zjXelODpKy1FWH5gZ2358aQrcfWNTPHmcNj11Rjj%2B39pzBH02PmR3PlwFcOVP1emb990f%2FM%2B%2FoMWOfUKflaafqYV%2F0GB1a5tZUGtVgYDxDVQ9xIGkcKuwSLMiNjouxjCr98zCBjqkAakgTaCYv1j0ecTw%2Fr563A0THW1vi2oFK3te3zhF%2BGwtTlqpX2PIvwY4QT3sKLn8nLcqT4iYLqHcMcN0r7Gsn82mJzTf478iFOZGttJ7fYx2YdGSxZqwVBDPDeht3vOszyvjeGbueJXPStJFT2W%2BXPGympt7FyiBiiHkUF1YhMy0YVJjNZgXNv0chVDuXOuW3tuEH%2BEeh2mX11DZzNdHIfGVltU4&X-Amz-Signature=015ae87a84ffc9556ad7a3a6dedace1e2bbf67d600b7a8dd57ade8c10f90637f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQXGON3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkV1PJxm%2FeboUIN3IAd2t%2F2oow9qTbsw%2FP9CgCl9HL%2BwIhAI9ooHM%2BayeJq7NN%2Bwel207TK17laSOgGLOIovvd4LryKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXe2YVXRd1UGpO%2FYAq3APUC6ZWqKAHkIyJwNYbNWfns0eBM1OnH6FLeFMKA8nNkinuyONZIy8gEauagvAfa2MOBrKOfAoUNywZLmOPersKIPjJuVfVJuI4VKZCrnS9KiApHRXbk4wahVI5DQFNSc%2B9EHdWjBBvwt0mgdemLoe8sQbbJIDO%2FB%2Bx8IJSSYeAIGDTuubiKJWUBdEjUSnK7Ve6FrY3tOC8LBbxYt1%2BVgLs%2BTB9%2FEj7NvTkHrj%2BM7ny%2FLvciPnM64wl7mg8bW1Eb7TLvDnhm7ZWsJwLsMsOKu7mjdmJccxKY7ngy573q93Wu%2BVMBn%2BY15qYUV%2BLmFmV7%2F00wYM2SMwfhNCNZZuY7enkXJmhwGSZQgsAyD5dSTjRq%2BnBUfG8tEDgpHbRoYIsKc%2FX1oX4vGPV3dLYJeSMsioR2fqD2%2BcDRQaowZnesZ%2FgEpnXyTeqQUtp3aD%2Ftf7pmvTsfJROazZcYLTbP1KS%2B9tHO1s9K8UaUv6wxqMCoxXKMalALbRVYWeTbBvVXd6zjXelODpKy1FWH5gZ2358aQrcfWNTPHmcNj11Rjj%2B39pzBH02PmR3PlwFcOVP1emb990f%2FM%2B%2FoMWOfUKflaafqYV%2F0GB1a5tZUGtVgYDxDVQ9xIGkcKuwSLMiNjouxjCr98zCBjqkAakgTaCYv1j0ecTw%2Fr563A0THW1vi2oFK3te3zhF%2BGwtTlqpX2PIvwY4QT3sKLn8nLcqT4iYLqHcMcN0r7Gsn82mJzTf478iFOZGttJ7fYx2YdGSxZqwVBDPDeht3vOszyvjeGbueJXPStJFT2W%2BXPGympt7FyiBiiHkUF1YhMy0YVJjNZgXNv0chVDuXOuW3tuEH%2BEeh2mX11DZzNdHIfGVltU4&X-Amz-Signature=f9f8734abc70c7bf0850631070fecaa1066da73338b8e318b1af4079ad3a05f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
