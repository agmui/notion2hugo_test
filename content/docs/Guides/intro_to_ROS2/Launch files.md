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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IX5BWTZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ARm6LdOe8584eSKPptCQRdDQRVDGPSAmJTED589xQIgYzuh2uadF49%2BiSAe20neuofY%2FpGTgAynDj%2BGFbrmYQQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA3tG7DpZrGE4PFfCSrcA4uOyofSLZh59lEzVlkooEwpMpoUj1WWs%2FzWW3eb9gWBoW%2Fgm1oyQHjq%2BKSNO1fE2rIm%2BibBTiESzeGjJohQkF%2FS08r9yEv0vdiqoCEM%2FRcxdlWuv5V21WS7tuOZ%2B70l6zBABbRZ93AQUAFZSru9U7h8QB8lb6UyRbK2sDs3DPkyrKQ8cM1SNgzPBvisgP8yEZrq8jRDV38XlaxGenmaBIv%2FgmPuUI0Q1E3QXp%2BFJzJy%2FVC3kDyry%2Fs%2B%2FU%2BTTzTxoh8GxL8VOeP%2FeWRu%2FAT8Z8%2FIdtpKYP%2BHGI8F6tXV2cKyUEza2P7%2Fl%2Foi3PpGHFKgoGado55ZLnrFwmFwxB6K0%2F%2BFCtCmP%2FTGy5eQbpIBATWb4YX1nmUk%2BQiPbIS7Vkh4tAQcfkGuyPMtDKef6WU3gb5PrwUbprbeyOurp2e%2BJQ%2B5tqGZyr0N2AVO9%2FWc8FBCSKD2RFu8z5%2BlRoDbJv%2F6lZq9HDrdbexM2DTyWNhUPCclsn8%2FtiqUbi2FyjhHpgQ38SCaoGQnJJR1mYwJS2K%2F7eoSavjDGmGAOJl3aw8EONOxRh5g4YbVLzlqpy2wO%2FJAmunA%2FWcGwlKzR9UZeSRvQeeiBj8KLf87h1zCqTkNvvs4dofo9wNdRvalqYcTMID2ncEGOqUBB7TScJ1x2aOrSYoin35E73zGPrJjpXpTea3wiSNTZFdDe0tiqojxLBijwmIr9BXI9fAmAYrMR0TG1VzmWaquVxpe02L8LCOYGvvAmFqRt%2BdSYyAeroRQjWOyOyYAjw5f7bBco9bni7%2BjY%2FvqLkW5reS0gjivApRhb%2F90pHx085kEd6EckYdGboWDMydZimiuZRbssxvlenLEJ91GCJ0wtOKSIiSh&X-Amz-Signature=f34ffe628f9b13966e3602c8a40fc8a35f2d8ccab66e975f8684d40daa760cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IX5BWTZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ARm6LdOe8584eSKPptCQRdDQRVDGPSAmJTED589xQIgYzuh2uadF49%2BiSAe20neuofY%2FpGTgAynDj%2BGFbrmYQQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA3tG7DpZrGE4PFfCSrcA4uOyofSLZh59lEzVlkooEwpMpoUj1WWs%2FzWW3eb9gWBoW%2Fgm1oyQHjq%2BKSNO1fE2rIm%2BibBTiESzeGjJohQkF%2FS08r9yEv0vdiqoCEM%2FRcxdlWuv5V21WS7tuOZ%2B70l6zBABbRZ93AQUAFZSru9U7h8QB8lb6UyRbK2sDs3DPkyrKQ8cM1SNgzPBvisgP8yEZrq8jRDV38XlaxGenmaBIv%2FgmPuUI0Q1E3QXp%2BFJzJy%2FVC3kDyry%2Fs%2B%2FU%2BTTzTxoh8GxL8VOeP%2FeWRu%2FAT8Z8%2FIdtpKYP%2BHGI8F6tXV2cKyUEza2P7%2Fl%2Foi3PpGHFKgoGado55ZLnrFwmFwxB6K0%2F%2BFCtCmP%2FTGy5eQbpIBATWb4YX1nmUk%2BQiPbIS7Vkh4tAQcfkGuyPMtDKef6WU3gb5PrwUbprbeyOurp2e%2BJQ%2B5tqGZyr0N2AVO9%2FWc8FBCSKD2RFu8z5%2BlRoDbJv%2F6lZq9HDrdbexM2DTyWNhUPCclsn8%2FtiqUbi2FyjhHpgQ38SCaoGQnJJR1mYwJS2K%2F7eoSavjDGmGAOJl3aw8EONOxRh5g4YbVLzlqpy2wO%2FJAmunA%2FWcGwlKzR9UZeSRvQeeiBj8KLf87h1zCqTkNvvs4dofo9wNdRvalqYcTMID2ncEGOqUBB7TScJ1x2aOrSYoin35E73zGPrJjpXpTea3wiSNTZFdDe0tiqojxLBijwmIr9BXI9fAmAYrMR0TG1VzmWaquVxpe02L8LCOYGvvAmFqRt%2BdSYyAeroRQjWOyOyYAjw5f7bBco9bni7%2BjY%2FvqLkW5reS0gjivApRhb%2F90pHx085kEd6EckYdGboWDMydZimiuZRbssxvlenLEJ91GCJ0wtOKSIiSh&X-Amz-Signature=2de386f03b5ca67d097e184afc5e27fbf6bbac94fa87b67808d401892a44cb7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IX5BWTZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ARm6LdOe8584eSKPptCQRdDQRVDGPSAmJTED589xQIgYzuh2uadF49%2BiSAe20neuofY%2FpGTgAynDj%2BGFbrmYQQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA3tG7DpZrGE4PFfCSrcA4uOyofSLZh59lEzVlkooEwpMpoUj1WWs%2FzWW3eb9gWBoW%2Fgm1oyQHjq%2BKSNO1fE2rIm%2BibBTiESzeGjJohQkF%2FS08r9yEv0vdiqoCEM%2FRcxdlWuv5V21WS7tuOZ%2B70l6zBABbRZ93AQUAFZSru9U7h8QB8lb6UyRbK2sDs3DPkyrKQ8cM1SNgzPBvisgP8yEZrq8jRDV38XlaxGenmaBIv%2FgmPuUI0Q1E3QXp%2BFJzJy%2FVC3kDyry%2Fs%2B%2FU%2BTTzTxoh8GxL8VOeP%2FeWRu%2FAT8Z8%2FIdtpKYP%2BHGI8F6tXV2cKyUEza2P7%2Fl%2Foi3PpGHFKgoGado55ZLnrFwmFwxB6K0%2F%2BFCtCmP%2FTGy5eQbpIBATWb4YX1nmUk%2BQiPbIS7Vkh4tAQcfkGuyPMtDKef6WU3gb5PrwUbprbeyOurp2e%2BJQ%2B5tqGZyr0N2AVO9%2FWc8FBCSKD2RFu8z5%2BlRoDbJv%2F6lZq9HDrdbexM2DTyWNhUPCclsn8%2FtiqUbi2FyjhHpgQ38SCaoGQnJJR1mYwJS2K%2F7eoSavjDGmGAOJl3aw8EONOxRh5g4YbVLzlqpy2wO%2FJAmunA%2FWcGwlKzR9UZeSRvQeeiBj8KLf87h1zCqTkNvvs4dofo9wNdRvalqYcTMID2ncEGOqUBB7TScJ1x2aOrSYoin35E73zGPrJjpXpTea3wiSNTZFdDe0tiqojxLBijwmIr9BXI9fAmAYrMR0TG1VzmWaquVxpe02L8LCOYGvvAmFqRt%2BdSYyAeroRQjWOyOyYAjw5f7bBco9bni7%2BjY%2FvqLkW5reS0gjivApRhb%2F90pHx085kEd6EckYdGboWDMydZimiuZRbssxvlenLEJ91GCJ0wtOKSIiSh&X-Amz-Signature=310caf0e661a76d0a6cd05ad24202166c1d0c9e8bd69c74042757a59dfa61ead&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
