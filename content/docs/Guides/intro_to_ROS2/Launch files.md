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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6NLKDK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B0%2FRPceNTGv8EoqvNOUBX%2BVmhcpf4vPu%2BRD26Wo5%2B8AIhAPprLXKtuCeFtFGN2igc89HHkzwvOWFwgCbOK24kj%2B1OKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzRQzRU5g5oc4AVQq3ANguKZAKeROjhX3eUsrsXK0N40fs%2ByfZltHUuqvUR2p%2BLqglA7x%2FoaXlVD1Dbd993bSgQnEdV2Q6xgaJEi1MoM7%2FUAwcRZhCwCAREtxZ0w1QDB7hDkYQU6DBHpL564J2JYY0bNRX2EjnGMsgEsLVfasvkz4wpJIQojq%2Bea5Qe7CFOBlG1Kbi9P3S81I7cc%2FL3jAnZcSr%2FEa%2FXqtOTqLTY5TD5PJhvrz3Ybg7%2F7yifcim6qo31PNIIPAMnLaH2s4BYVPrJwS4eIw98DvKSbnorreFm9Q5KevpPQUVeHQnHYmZoMH1xDL2ojuFzT1Ssk5CrwvqiEhhaJQiY%2FAxC0GxrtOOPimNq4VinafnxVFuom5ZjjRAkGGhRfZ%2Fz%2BegTK%2FB5nYvXAIl2iayG4yF1dnSZQKGEeSA5F8CAEBvGWw7h9oJBxAKWdEkzJ2UtvKhtYj5JEwX9PPPHwRIcUR%2Beu7DWIleB2T7KfNPHm93HVx8Erb8GI%2FkfN4rpRNeLexfn8%2BziNYhU4jC7nYEFUKwSMrP5BxQYngi%2Bo9eCQLGIYgnaUxkjev4jAEr3fcIHyiUUa7jwDF5tw7Kki83C2nDxzpXM%2B9fABTiPTpQiVNVxbcaidmdTAwEQixo3tMcQsh5TC3%2FfTDBjqkASKcpfIsnGSqDDpHx3e7L1DOsAD6Yly5d4FCqmBFFhlO1ojaCoQfjoeQkBbB2B9meCdsuIc6DbhiiMurW%2FVgWECpJD9sw0Yg7tMXz3Id%2Fho9r7icfHuK1zOerpV4grudptAhl%2BYXVncOGFTWwLxIaLI6ewUAzVf5SNHFt8Z5InEjqnTa4dskz3I8m0Bxbr5h0qkAA6z5QQByTRWPjEIZNMyZYLUO&X-Amz-Signature=44321348adf0d9cecdff50c66e7e04a545a24555f79c8fcdebfc808650b83647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6NLKDK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B0%2FRPceNTGv8EoqvNOUBX%2BVmhcpf4vPu%2BRD26Wo5%2B8AIhAPprLXKtuCeFtFGN2igc89HHkzwvOWFwgCbOK24kj%2B1OKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzRQzRU5g5oc4AVQq3ANguKZAKeROjhX3eUsrsXK0N40fs%2ByfZltHUuqvUR2p%2BLqglA7x%2FoaXlVD1Dbd993bSgQnEdV2Q6xgaJEi1MoM7%2FUAwcRZhCwCAREtxZ0w1QDB7hDkYQU6DBHpL564J2JYY0bNRX2EjnGMsgEsLVfasvkz4wpJIQojq%2Bea5Qe7CFOBlG1Kbi9P3S81I7cc%2FL3jAnZcSr%2FEa%2FXqtOTqLTY5TD5PJhvrz3Ybg7%2F7yifcim6qo31PNIIPAMnLaH2s4BYVPrJwS4eIw98DvKSbnorreFm9Q5KevpPQUVeHQnHYmZoMH1xDL2ojuFzT1Ssk5CrwvqiEhhaJQiY%2FAxC0GxrtOOPimNq4VinafnxVFuom5ZjjRAkGGhRfZ%2Fz%2BegTK%2FB5nYvXAIl2iayG4yF1dnSZQKGEeSA5F8CAEBvGWw7h9oJBxAKWdEkzJ2UtvKhtYj5JEwX9PPPHwRIcUR%2Beu7DWIleB2T7KfNPHm93HVx8Erb8GI%2FkfN4rpRNeLexfn8%2BziNYhU4jC7nYEFUKwSMrP5BxQYngi%2Bo9eCQLGIYgnaUxkjev4jAEr3fcIHyiUUa7jwDF5tw7Kki83C2nDxzpXM%2B9fABTiPTpQiVNVxbcaidmdTAwEQixo3tMcQsh5TC3%2FfTDBjqkASKcpfIsnGSqDDpHx3e7L1DOsAD6Yly5d4FCqmBFFhlO1ojaCoQfjoeQkBbB2B9meCdsuIc6DbhiiMurW%2FVgWECpJD9sw0Yg7tMXz3Id%2Fho9r7icfHuK1zOerpV4grudptAhl%2BYXVncOGFTWwLxIaLI6ewUAzVf5SNHFt8Z5InEjqnTa4dskz3I8m0Bxbr5h0qkAA6z5QQByTRWPjEIZNMyZYLUO&X-Amz-Signature=d4e33afa7ca990208011bf1c5a4b8cbe6dbd79bdb77fa8c0fbeed811084fb211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6NLKDK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B0%2FRPceNTGv8EoqvNOUBX%2BVmhcpf4vPu%2BRD26Wo5%2B8AIhAPprLXKtuCeFtFGN2igc89HHkzwvOWFwgCbOK24kj%2B1OKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzRQzRU5g5oc4AVQq3ANguKZAKeROjhX3eUsrsXK0N40fs%2ByfZltHUuqvUR2p%2BLqglA7x%2FoaXlVD1Dbd993bSgQnEdV2Q6xgaJEi1MoM7%2FUAwcRZhCwCAREtxZ0w1QDB7hDkYQU6DBHpL564J2JYY0bNRX2EjnGMsgEsLVfasvkz4wpJIQojq%2Bea5Qe7CFOBlG1Kbi9P3S81I7cc%2FL3jAnZcSr%2FEa%2FXqtOTqLTY5TD5PJhvrz3Ybg7%2F7yifcim6qo31PNIIPAMnLaH2s4BYVPrJwS4eIw98DvKSbnorreFm9Q5KevpPQUVeHQnHYmZoMH1xDL2ojuFzT1Ssk5CrwvqiEhhaJQiY%2FAxC0GxrtOOPimNq4VinafnxVFuom5ZjjRAkGGhRfZ%2Fz%2BegTK%2FB5nYvXAIl2iayG4yF1dnSZQKGEeSA5F8CAEBvGWw7h9oJBxAKWdEkzJ2UtvKhtYj5JEwX9PPPHwRIcUR%2Beu7DWIleB2T7KfNPHm93HVx8Erb8GI%2FkfN4rpRNeLexfn8%2BziNYhU4jC7nYEFUKwSMrP5BxQYngi%2Bo9eCQLGIYgnaUxkjev4jAEr3fcIHyiUUa7jwDF5tw7Kki83C2nDxzpXM%2B9fABTiPTpQiVNVxbcaidmdTAwEQixo3tMcQsh5TC3%2FfTDBjqkASKcpfIsnGSqDDpHx3e7L1DOsAD6Yly5d4FCqmBFFhlO1ojaCoQfjoeQkBbB2B9meCdsuIc6DbhiiMurW%2FVgWECpJD9sw0Yg7tMXz3Id%2Fho9r7icfHuK1zOerpV4grudptAhl%2BYXVncOGFTWwLxIaLI6ewUAzVf5SNHFt8Z5InEjqnTa4dskz3I8m0Bxbr5h0qkAA6z5QQByTRWPjEIZNMyZYLUO&X-Amz-Signature=26e5fbbbef769526b1ef5029547173e5318a7f43241a0e10d104802761501417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
