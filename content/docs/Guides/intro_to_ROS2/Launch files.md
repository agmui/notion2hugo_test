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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOUY3WB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7tqwXqb9Re8BM8iqW8kWPvsfv9cvJA2iIel5LsPlGfAiEAyciM6CPt6EjK%2FnVZ9TXmzs9Zy8vb7H8lEbBThAlU6M0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCm6DSf8iz3jOjRqiCrcAyE97lUEAd%2BPwH573imX8Vy3qFDfZPoXFE6aU1%2B4IqBSKnqGCYio3dqqR%2BAP6mdko2anHAM1lBhVaNAl0nU%2FfzKOFzhxZw893N6QIVnfJIbLIPt7%2F0rJG17xs8SNY1XHruaoTXOZb1U2S3F%2BAGfINoJfW%2Bb%2Fr%2F35Rz5R0SXEU9IWF%2BPsL0%2B8H5dxy4YUBmwZMMqT7Bnk2IFuVk3wTq5DuqNNguM89P00NeyPe3ilapQ7jVghh7idH%2FjVPSYpwylBkydtTeVRkOlKgcvn6%2F8EbWgxTCIeVg6s0nXDHb%2FsF9BTQe%2BOsWPWKmpUx1%2Fg2v3LyrdPXDDAbQTJmhSvPcu1SBx3WTV6Gq4GfjC0EbFrsJERDUVemkge8%2FjTrXF1IxNYDAoe814ebTzTF7%2F4VL1O%2FMe1NUuFCkpQHTZ7rHcYOYmfdcmhwpx0vE6m2%2B9MDSHHkW%2FtQpZZ2uctMTgAfmkjtvWJMTEWFm4xf1V56uuRQZUjeIgCNVISqWAAE4pDf%2FJ5ZCJCQJV7yovPCZQEZ9xyHp76hWLDEtjCE92B2g27a0qWXJaKnGbsbMAVWC3PHs%2FxYmVx7IxdsdqYu7vjFvvPBvLQelwH2axQ6EIat2tOZKDPfZOv1gQx12jJ8MP9MPSVksIGOqUB4hqqZocyrJjlrIYp5s6%2FMSaT8sAtFeJaPcg1uaixrRrf0B%2FkgPAKHbF%2F0vSPGNAKqyNMRjqBJpytYod2uBR6pJyHd8Zert9Uprf9ExhGAB4kABZ8VnHdEqQrNqWNXOYVtRaQr%2FoSI5aiTWhJSrUTpzt%2FDQck3lb229w6GsqSTZth3kxggBu2V4j7Qve%2FIESroy68wS5tZMNWaeQ8QOdK4CVMD3II&X-Amz-Signature=8f29e9feb724c5e119b0e283bf292356585e7b24cc1d71c133038e9d86cf5fad&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOUY3WB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7tqwXqb9Re8BM8iqW8kWPvsfv9cvJA2iIel5LsPlGfAiEAyciM6CPt6EjK%2FnVZ9TXmzs9Zy8vb7H8lEbBThAlU6M0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCm6DSf8iz3jOjRqiCrcAyE97lUEAd%2BPwH573imX8Vy3qFDfZPoXFE6aU1%2B4IqBSKnqGCYio3dqqR%2BAP6mdko2anHAM1lBhVaNAl0nU%2FfzKOFzhxZw893N6QIVnfJIbLIPt7%2F0rJG17xs8SNY1XHruaoTXOZb1U2S3F%2BAGfINoJfW%2Bb%2Fr%2F35Rz5R0SXEU9IWF%2BPsL0%2B8H5dxy4YUBmwZMMqT7Bnk2IFuVk3wTq5DuqNNguM89P00NeyPe3ilapQ7jVghh7idH%2FjVPSYpwylBkydtTeVRkOlKgcvn6%2F8EbWgxTCIeVg6s0nXDHb%2FsF9BTQe%2BOsWPWKmpUx1%2Fg2v3LyrdPXDDAbQTJmhSvPcu1SBx3WTV6Gq4GfjC0EbFrsJERDUVemkge8%2FjTrXF1IxNYDAoe814ebTzTF7%2F4VL1O%2FMe1NUuFCkpQHTZ7rHcYOYmfdcmhwpx0vE6m2%2B9MDSHHkW%2FtQpZZ2uctMTgAfmkjtvWJMTEWFm4xf1V56uuRQZUjeIgCNVISqWAAE4pDf%2FJ5ZCJCQJV7yovPCZQEZ9xyHp76hWLDEtjCE92B2g27a0qWXJaKnGbsbMAVWC3PHs%2FxYmVx7IxdsdqYu7vjFvvPBvLQelwH2axQ6EIat2tOZKDPfZOv1gQx12jJ8MP9MPSVksIGOqUB4hqqZocyrJjlrIYp5s6%2FMSaT8sAtFeJaPcg1uaixrRrf0B%2FkgPAKHbF%2F0vSPGNAKqyNMRjqBJpytYod2uBR6pJyHd8Zert9Uprf9ExhGAB4kABZ8VnHdEqQrNqWNXOYVtRaQr%2FoSI5aiTWhJSrUTpzt%2FDQck3lb229w6GsqSTZth3kxggBu2V4j7Qve%2FIESroy68wS5tZMNWaeQ8QOdK4CVMD3II&X-Amz-Signature=dbcd0082dd8a18535e85e6d2161551e3aacd991188433f0f2a30a71ede19e862&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOUY3WB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7tqwXqb9Re8BM8iqW8kWPvsfv9cvJA2iIel5LsPlGfAiEAyciM6CPt6EjK%2FnVZ9TXmzs9Zy8vb7H8lEbBThAlU6M0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCm6DSf8iz3jOjRqiCrcAyE97lUEAd%2BPwH573imX8Vy3qFDfZPoXFE6aU1%2B4IqBSKnqGCYio3dqqR%2BAP6mdko2anHAM1lBhVaNAl0nU%2FfzKOFzhxZw893N6QIVnfJIbLIPt7%2F0rJG17xs8SNY1XHruaoTXOZb1U2S3F%2BAGfINoJfW%2Bb%2Fr%2F35Rz5R0SXEU9IWF%2BPsL0%2B8H5dxy4YUBmwZMMqT7Bnk2IFuVk3wTq5DuqNNguM89P00NeyPe3ilapQ7jVghh7idH%2FjVPSYpwylBkydtTeVRkOlKgcvn6%2F8EbWgxTCIeVg6s0nXDHb%2FsF9BTQe%2BOsWPWKmpUx1%2Fg2v3LyrdPXDDAbQTJmhSvPcu1SBx3WTV6Gq4GfjC0EbFrsJERDUVemkge8%2FjTrXF1IxNYDAoe814ebTzTF7%2F4VL1O%2FMe1NUuFCkpQHTZ7rHcYOYmfdcmhwpx0vE6m2%2B9MDSHHkW%2FtQpZZ2uctMTgAfmkjtvWJMTEWFm4xf1V56uuRQZUjeIgCNVISqWAAE4pDf%2FJ5ZCJCQJV7yovPCZQEZ9xyHp76hWLDEtjCE92B2g27a0qWXJaKnGbsbMAVWC3PHs%2FxYmVx7IxdsdqYu7vjFvvPBvLQelwH2axQ6EIat2tOZKDPfZOv1gQx12jJ8MP9MPSVksIGOqUB4hqqZocyrJjlrIYp5s6%2FMSaT8sAtFeJaPcg1uaixrRrf0B%2FkgPAKHbF%2F0vSPGNAKqyNMRjqBJpytYod2uBR6pJyHd8Zert9Uprf9ExhGAB4kABZ8VnHdEqQrNqWNXOYVtRaQr%2FoSI5aiTWhJSrUTpzt%2FDQck3lb229w6GsqSTZth3kxggBu2V4j7Qve%2FIESroy68wS5tZMNWaeQ8QOdK4CVMD3II&X-Amz-Signature=50c564afbbeb980a47c9234fe0eca55425cd815599f895dadb8558a0ae3657c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
