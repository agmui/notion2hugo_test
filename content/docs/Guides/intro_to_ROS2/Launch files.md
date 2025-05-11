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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQ7PYFP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPcNSKQTsqQc2I2O%2BHWequEfsNrJLZRHkF2ThKxJH4MgIhAJVDwjwzv1uQpjNbI4743O3is9f3nvnTuhxbrj1aBkTBKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhrYW7e5Y8EGHMhKIq3AOF8VkiFyiAUiSLh0F8GjoIJwg3aqeHVrZ5bRM%2FZ1Lc1Pkk5rfD0Otim5uUznB109Ri9T%2BQsPMv%2B17vuEO6PJaZOTYMyXM9Xy%2Fl3lZCUIKdqbCGHX8mbGeLQDJoR86hhUkinDORbNXkvu3ymcyqKdBmafnNyA%2Fq%2BPkWOs6gCrbLzDTpifXtzM%2BsK8xg4cH3EZMJcu03pbNFvd9lGPkN5dO72VGlkDLP3QfU2rxXi6nPnHPyZpoTmYoERXwqNZRADbljeA91Mk3GHzHQ%2Fg62ikzfG%2B7qEGkwfUnF8G3ciIHQEnAnCZnJCz3x2tCvyyMCbqgUE9v%2B10K%2F08Ba%2Blberi3UU9zdAfIkoz6yeSDzihKy10GpJlxubpa8RTLHTDjCxjq971TMT1BC3bE8xlnXZLyEqivW9LweMRVdhqTspI1iIh47oWQjt1LHIgth8fV9fSNkQURvA5jBvoCzqnFNWZoxwZcHH9EyfhXcZnEB4RL6j7YWq2uU2welpqcrN257ndYBU4RBqRN3Ej4BWdcb1xQjpwiI%2FC72HRnJ%2FBU6v7ILcWRjQb8ueWX2loT0IYLfrVMraswkTfv1h4D5nKfgONy8tEcdnsLo%2FEVopU97UrP2gTyJJtaXBX94R0lwbzCshIDBBjqkAeMHHS4NBSyQPctw2Q9Jf83RqJgi%2B4oxjKviIW1VN10nfZ%2BtYGcFlMZ25LpXT1oQGBBmdCYpVcCCNfHOZPuFE5Y3BD%2Bi%2BP2ERa7bT4SITjwoU%2BUbcNAP3p%2BQ7Q%2BTVEnFDNPfmURzZIHcW5dkYmM2pVjgDGq%2B78XoSD5o3wT0sQhQZ%2FbGqNRu94z2CUJlNGzHR2SResr5ljVh4HTSsGTRE1gyAmbr&X-Amz-Signature=574438bad563bcf04f873ef0c0966e3579b1e1d52bdcb63a06b2b7076ff5e997&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQ7PYFP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPcNSKQTsqQc2I2O%2BHWequEfsNrJLZRHkF2ThKxJH4MgIhAJVDwjwzv1uQpjNbI4743O3is9f3nvnTuhxbrj1aBkTBKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhrYW7e5Y8EGHMhKIq3AOF8VkiFyiAUiSLh0F8GjoIJwg3aqeHVrZ5bRM%2FZ1Lc1Pkk5rfD0Otim5uUznB109Ri9T%2BQsPMv%2B17vuEO6PJaZOTYMyXM9Xy%2Fl3lZCUIKdqbCGHX8mbGeLQDJoR86hhUkinDORbNXkvu3ymcyqKdBmafnNyA%2Fq%2BPkWOs6gCrbLzDTpifXtzM%2BsK8xg4cH3EZMJcu03pbNFvd9lGPkN5dO72VGlkDLP3QfU2rxXi6nPnHPyZpoTmYoERXwqNZRADbljeA91Mk3GHzHQ%2Fg62ikzfG%2B7qEGkwfUnF8G3ciIHQEnAnCZnJCz3x2tCvyyMCbqgUE9v%2B10K%2F08Ba%2Blberi3UU9zdAfIkoz6yeSDzihKy10GpJlxubpa8RTLHTDjCxjq971TMT1BC3bE8xlnXZLyEqivW9LweMRVdhqTspI1iIh47oWQjt1LHIgth8fV9fSNkQURvA5jBvoCzqnFNWZoxwZcHH9EyfhXcZnEB4RL6j7YWq2uU2welpqcrN257ndYBU4RBqRN3Ej4BWdcb1xQjpwiI%2FC72HRnJ%2FBU6v7ILcWRjQb8ueWX2loT0IYLfrVMraswkTfv1h4D5nKfgONy8tEcdnsLo%2FEVopU97UrP2gTyJJtaXBX94R0lwbzCshIDBBjqkAeMHHS4NBSyQPctw2Q9Jf83RqJgi%2B4oxjKviIW1VN10nfZ%2BtYGcFlMZ25LpXT1oQGBBmdCYpVcCCNfHOZPuFE5Y3BD%2Bi%2BP2ERa7bT4SITjwoU%2BUbcNAP3p%2BQ7Q%2BTVEnFDNPfmURzZIHcW5dkYmM2pVjgDGq%2B78XoSD5o3wT0sQhQZ%2FbGqNRu94z2CUJlNGzHR2SResr5ljVh4HTSsGTRE1gyAmbr&X-Amz-Signature=06440146a8417f49aa0f1ed8995184b8753854eb3481a07020052fac73f03c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQ7PYFP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPcNSKQTsqQc2I2O%2BHWequEfsNrJLZRHkF2ThKxJH4MgIhAJVDwjwzv1uQpjNbI4743O3is9f3nvnTuhxbrj1aBkTBKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhrYW7e5Y8EGHMhKIq3AOF8VkiFyiAUiSLh0F8GjoIJwg3aqeHVrZ5bRM%2FZ1Lc1Pkk5rfD0Otim5uUznB109Ri9T%2BQsPMv%2B17vuEO6PJaZOTYMyXM9Xy%2Fl3lZCUIKdqbCGHX8mbGeLQDJoR86hhUkinDORbNXkvu3ymcyqKdBmafnNyA%2Fq%2BPkWOs6gCrbLzDTpifXtzM%2BsK8xg4cH3EZMJcu03pbNFvd9lGPkN5dO72VGlkDLP3QfU2rxXi6nPnHPyZpoTmYoERXwqNZRADbljeA91Mk3GHzHQ%2Fg62ikzfG%2B7qEGkwfUnF8G3ciIHQEnAnCZnJCz3x2tCvyyMCbqgUE9v%2B10K%2F08Ba%2Blberi3UU9zdAfIkoz6yeSDzihKy10GpJlxubpa8RTLHTDjCxjq971TMT1BC3bE8xlnXZLyEqivW9LweMRVdhqTspI1iIh47oWQjt1LHIgth8fV9fSNkQURvA5jBvoCzqnFNWZoxwZcHH9EyfhXcZnEB4RL6j7YWq2uU2welpqcrN257ndYBU4RBqRN3Ej4BWdcb1xQjpwiI%2FC72HRnJ%2FBU6v7ILcWRjQb8ueWX2loT0IYLfrVMraswkTfv1h4D5nKfgONy8tEcdnsLo%2FEVopU97UrP2gTyJJtaXBX94R0lwbzCshIDBBjqkAeMHHS4NBSyQPctw2Q9Jf83RqJgi%2B4oxjKviIW1VN10nfZ%2BtYGcFlMZ25LpXT1oQGBBmdCYpVcCCNfHOZPuFE5Y3BD%2Bi%2BP2ERa7bT4SITjwoU%2BUbcNAP3p%2BQ7Q%2BTVEnFDNPfmURzZIHcW5dkYmM2pVjgDGq%2B78XoSD5o3wT0sQhQZ%2FbGqNRu94z2CUJlNGzHR2SResr5ljVh4HTSsGTRE1gyAmbr&X-Amz-Signature=615aefc2bc9c89e17497552375484dd02dec00192e0cf9fa251cc90c769e1c23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
