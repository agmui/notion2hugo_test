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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4HWJGQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCj8NhhCvB21UAfRLOaRdqbGSvGar%2FEA7oSd6vUpI869gIhANTACNfE5HuDT8gK%2FQojY6ZEYKJAX2hDLyhlTvWYQLfQKv8DCHgQABoMNjM3NDIzMTgzODA1Igx6B8Pfdtz5MMf%2FFV0q3APCGuHev3KloDJZtB7GUkBwcHP3%2FuQvTPqPrv93OYvaywLCV5%2BLuvPtfcAqlVtBoGX%2F4OeDl9ensHRJmVMDq97syuiRzaRcCtiR2EPV6%2FQS4r0AurdvEDNBTKsN9oMYWpJIbcLA1SRFKQfvx%2F5B%2BS5Y0TbERB1VqJs1YZY8m8Aulis78KJ2gmC01p71brat8MGbjDUuggBNFp4KAf7qcSmZXyYXds5PLXSX1FqEAdIkV8Y%2Bcb%2FR4vI1gddWEnZJyyjFG4D0XiyVkSHvT4%2FbgjnAXl88UTAeVtrH2wBrwecuRn%2F3GFSVRYA5naXcxygRLMWRZJda8J4U4LohzNkRP1mQKk7qPK3DVpwoZFFs96AGS2f73yaBdsU%2FwcGZ4hYD4S%2BOtaB%2FOrQ%2B%2FFLs59uFfsXmKXQboRK247QYD1UGCOZmq59zNZz3hrRaZo9RdprMbQnjAWhG%2B8epUrfwc3x%2FvarYb2hTk%2BRKglqLcY0R29rxxnmKnCAw%2BvbBfHMWVK3LJq4zbIk9VdWbBSACKRVYP8CrO6FabVcknir%2FnQIeKeTE7iYs1r7KRAfHMCPY%2BUXkk0abh0xPv4k%2FVzvqdz5O7Fv7QMRBvhR6PZQJraoZKJxpK4s8te49r9j95TMReDCUua%2FDBjqkAeVM38i9%2FWUhB5uQA0jzX%2FMSmLQb2QGQ9LMHLlmDN5b7JGAcJEwGFQemgkJ1%2BZtNTuVD%2F3EwANtas1AEXvPvXtMYWjUdBk%2FuL3YGiC5huSxhkjeR5DcPLBI%2FKoxv0qWciI4Tb6PPaHD4yyCWzUkm9i7pug7e58hIa%2B0hHpaTlKYkt7UzVABTINviCeIQMO82mnzGD1ZvRSW%2BRkbOG6onx7e7eBju&X-Amz-Signature=80e112d8847fa3b78afe879acbbbdb1c6d14eaef16dc71bf29df0787b1cf3788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4HWJGQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCj8NhhCvB21UAfRLOaRdqbGSvGar%2FEA7oSd6vUpI869gIhANTACNfE5HuDT8gK%2FQojY6ZEYKJAX2hDLyhlTvWYQLfQKv8DCHgQABoMNjM3NDIzMTgzODA1Igx6B8Pfdtz5MMf%2FFV0q3APCGuHev3KloDJZtB7GUkBwcHP3%2FuQvTPqPrv93OYvaywLCV5%2BLuvPtfcAqlVtBoGX%2F4OeDl9ensHRJmVMDq97syuiRzaRcCtiR2EPV6%2FQS4r0AurdvEDNBTKsN9oMYWpJIbcLA1SRFKQfvx%2F5B%2BS5Y0TbERB1VqJs1YZY8m8Aulis78KJ2gmC01p71brat8MGbjDUuggBNFp4KAf7qcSmZXyYXds5PLXSX1FqEAdIkV8Y%2Bcb%2FR4vI1gddWEnZJyyjFG4D0XiyVkSHvT4%2FbgjnAXl88UTAeVtrH2wBrwecuRn%2F3GFSVRYA5naXcxygRLMWRZJda8J4U4LohzNkRP1mQKk7qPK3DVpwoZFFs96AGS2f73yaBdsU%2FwcGZ4hYD4S%2BOtaB%2FOrQ%2B%2FFLs59uFfsXmKXQboRK247QYD1UGCOZmq59zNZz3hrRaZo9RdprMbQnjAWhG%2B8epUrfwc3x%2FvarYb2hTk%2BRKglqLcY0R29rxxnmKnCAw%2BvbBfHMWVK3LJq4zbIk9VdWbBSACKRVYP8CrO6FabVcknir%2FnQIeKeTE7iYs1r7KRAfHMCPY%2BUXkk0abh0xPv4k%2FVzvqdz5O7Fv7QMRBvhR6PZQJraoZKJxpK4s8te49r9j95TMReDCUua%2FDBjqkAeVM38i9%2FWUhB5uQA0jzX%2FMSmLQb2QGQ9LMHLlmDN5b7JGAcJEwGFQemgkJ1%2BZtNTuVD%2F3EwANtas1AEXvPvXtMYWjUdBk%2FuL3YGiC5huSxhkjeR5DcPLBI%2FKoxv0qWciI4Tb6PPaHD4yyCWzUkm9i7pug7e58hIa%2B0hHpaTlKYkt7UzVABTINviCeIQMO82mnzGD1ZvRSW%2BRkbOG6onx7e7eBju&X-Amz-Signature=820bacaf58877ff693fbe42d6cc835301789ae82bf575f0445d8319d0add0ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4HWJGQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCj8NhhCvB21UAfRLOaRdqbGSvGar%2FEA7oSd6vUpI869gIhANTACNfE5HuDT8gK%2FQojY6ZEYKJAX2hDLyhlTvWYQLfQKv8DCHgQABoMNjM3NDIzMTgzODA1Igx6B8Pfdtz5MMf%2FFV0q3APCGuHev3KloDJZtB7GUkBwcHP3%2FuQvTPqPrv93OYvaywLCV5%2BLuvPtfcAqlVtBoGX%2F4OeDl9ensHRJmVMDq97syuiRzaRcCtiR2EPV6%2FQS4r0AurdvEDNBTKsN9oMYWpJIbcLA1SRFKQfvx%2F5B%2BS5Y0TbERB1VqJs1YZY8m8Aulis78KJ2gmC01p71brat8MGbjDUuggBNFp4KAf7qcSmZXyYXds5PLXSX1FqEAdIkV8Y%2Bcb%2FR4vI1gddWEnZJyyjFG4D0XiyVkSHvT4%2FbgjnAXl88UTAeVtrH2wBrwecuRn%2F3GFSVRYA5naXcxygRLMWRZJda8J4U4LohzNkRP1mQKk7qPK3DVpwoZFFs96AGS2f73yaBdsU%2FwcGZ4hYD4S%2BOtaB%2FOrQ%2B%2FFLs59uFfsXmKXQboRK247QYD1UGCOZmq59zNZz3hrRaZo9RdprMbQnjAWhG%2B8epUrfwc3x%2FvarYb2hTk%2BRKglqLcY0R29rxxnmKnCAw%2BvbBfHMWVK3LJq4zbIk9VdWbBSACKRVYP8CrO6FabVcknir%2FnQIeKeTE7iYs1r7KRAfHMCPY%2BUXkk0abh0xPv4k%2FVzvqdz5O7Fv7QMRBvhR6PZQJraoZKJxpK4s8te49r9j95TMReDCUua%2FDBjqkAeVM38i9%2FWUhB5uQA0jzX%2FMSmLQb2QGQ9LMHLlmDN5b7JGAcJEwGFQemgkJ1%2BZtNTuVD%2F3EwANtas1AEXvPvXtMYWjUdBk%2FuL3YGiC5huSxhkjeR5DcPLBI%2FKoxv0qWciI4Tb6PPaHD4yyCWzUkm9i7pug7e58hIa%2B0hHpaTlKYkt7UzVABTINviCeIQMO82mnzGD1ZvRSW%2BRkbOG6onx7e7eBju&X-Amz-Signature=a890854e6d26da501b7b7effac2548c2cc0bdcd51a9d5e858b83a2ffd4170fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
