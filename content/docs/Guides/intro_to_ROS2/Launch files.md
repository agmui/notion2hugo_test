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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STZM24F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfQ7Z7atRnOJGlcFVoMIYFpJA%2BAjQ5cL9tfmByVvUs6AiB2ndOiBWyr%2BYekTTJaDQ4rObceYNkFIzk%2BsECIeaw0Iyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2Fa6g2rE1zCu61WRtKtwD6tL7U1Z%2B4bQWUHdULxKdTfcd1MX5dA1%2BAtX7M4p6x6WPbnw8D%2BBIxWGhUE40ikShZejqoqh0ZJlahBeEk8KCGl19%2FF9RQUP%2BirwjvnHwQdhCbAgOGvXGMODjuN32LbQyJEPQ3OJLgewNPtNi%2FF%2BFnMRSniZWQKR7y6RHvxfd1O9xDd%2Bq%2FgLtBvGhKj%2F3FyXEzxIymMGIcI%2F8NuzkK42%2Fo6cSWRFltcNDWhKwpuMn35td0bFBtH6PPDWXH3OYj6OSHoCibByUNbLXtBkU8cCmFWnYNb8tmYVk%2BPqlehXwbw6COH2dGKY8bFz8pOUnh7eTFccvtEs4AgK8NIzNjhSLxdBtrdVaNvEtOTu5UVWI2W1hHoxT2bsXd671aOaYkcHXgFkVGG0bAlzCYP58ae6N%2Bm9RmRMPD18cJsjDXZgCy1Mzwaaorx261Zw7DGTsReSvaA5fWcpzKfwOe0L1MlynoW6SNvpE%2FsBd29L%2Bs6Xrtj7s4G1vvZVf%2FirWg9A01ufVXNb9D1pXSKaTVQqxVT5khZnvIC2dxH%2B8dbC3ZRYwAnrDEZkzoHLt7TXB%2BNMpMHQHaEb1LHBI9lnHCJpWvz3T3LIuM2pehByIu7euSDXif6VVgPIxbL3dmNjPI8cw2oC6xAY6pgFnEGzQCKP31MPQdmLkNuo%2BfNHLUmJsZT2%2FnfzzfUNfsm50g7n0PKfeq2w0fRENdcDoCw%2BaMKurbRM9QFMiEOKpXufpbmKNeBNeDub%2BAxb0DixjQ4KFD5mlpuouAeJqRMQ%2FW8htcBOLnLYxYskrcf8xdsUXTbR%2FkzPiaeYN81JlIa6%2BIVhFAWM2kYei%2Bzq8G%2FAN9MGmvF4VKed1cNzDIDAt4yROrSSr&X-Amz-Signature=bc86723d283eeb990de4152d68f5ec77c85ea20d6d908b13b5b8afafd4c58fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STZM24F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfQ7Z7atRnOJGlcFVoMIYFpJA%2BAjQ5cL9tfmByVvUs6AiB2ndOiBWyr%2BYekTTJaDQ4rObceYNkFIzk%2BsECIeaw0Iyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2Fa6g2rE1zCu61WRtKtwD6tL7U1Z%2B4bQWUHdULxKdTfcd1MX5dA1%2BAtX7M4p6x6WPbnw8D%2BBIxWGhUE40ikShZejqoqh0ZJlahBeEk8KCGl19%2FF9RQUP%2BirwjvnHwQdhCbAgOGvXGMODjuN32LbQyJEPQ3OJLgewNPtNi%2FF%2BFnMRSniZWQKR7y6RHvxfd1O9xDd%2Bq%2FgLtBvGhKj%2F3FyXEzxIymMGIcI%2F8NuzkK42%2Fo6cSWRFltcNDWhKwpuMn35td0bFBtH6PPDWXH3OYj6OSHoCibByUNbLXtBkU8cCmFWnYNb8tmYVk%2BPqlehXwbw6COH2dGKY8bFz8pOUnh7eTFccvtEs4AgK8NIzNjhSLxdBtrdVaNvEtOTu5UVWI2W1hHoxT2bsXd671aOaYkcHXgFkVGG0bAlzCYP58ae6N%2Bm9RmRMPD18cJsjDXZgCy1Mzwaaorx261Zw7DGTsReSvaA5fWcpzKfwOe0L1MlynoW6SNvpE%2FsBd29L%2Bs6Xrtj7s4G1vvZVf%2FirWg9A01ufVXNb9D1pXSKaTVQqxVT5khZnvIC2dxH%2B8dbC3ZRYwAnrDEZkzoHLt7TXB%2BNMpMHQHaEb1LHBI9lnHCJpWvz3T3LIuM2pehByIu7euSDXif6VVgPIxbL3dmNjPI8cw2oC6xAY6pgFnEGzQCKP31MPQdmLkNuo%2BfNHLUmJsZT2%2FnfzzfUNfsm50g7n0PKfeq2w0fRENdcDoCw%2BaMKurbRM9QFMiEOKpXufpbmKNeBNeDub%2BAxb0DixjQ4KFD5mlpuouAeJqRMQ%2FW8htcBOLnLYxYskrcf8xdsUXTbR%2FkzPiaeYN81JlIa6%2BIVhFAWM2kYei%2Bzq8G%2FAN9MGmvF4VKed1cNzDIDAt4yROrSSr&X-Amz-Signature=6b40f90a6edaafce3c2020701838f79f444f9675cac4117615fe9b68411fe293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STZM24F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfQ7Z7atRnOJGlcFVoMIYFpJA%2BAjQ5cL9tfmByVvUs6AiB2ndOiBWyr%2BYekTTJaDQ4rObceYNkFIzk%2BsECIeaw0Iyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2Fa6g2rE1zCu61WRtKtwD6tL7U1Z%2B4bQWUHdULxKdTfcd1MX5dA1%2BAtX7M4p6x6WPbnw8D%2BBIxWGhUE40ikShZejqoqh0ZJlahBeEk8KCGl19%2FF9RQUP%2BirwjvnHwQdhCbAgOGvXGMODjuN32LbQyJEPQ3OJLgewNPtNi%2FF%2BFnMRSniZWQKR7y6RHvxfd1O9xDd%2Bq%2FgLtBvGhKj%2F3FyXEzxIymMGIcI%2F8NuzkK42%2Fo6cSWRFltcNDWhKwpuMn35td0bFBtH6PPDWXH3OYj6OSHoCibByUNbLXtBkU8cCmFWnYNb8tmYVk%2BPqlehXwbw6COH2dGKY8bFz8pOUnh7eTFccvtEs4AgK8NIzNjhSLxdBtrdVaNvEtOTu5UVWI2W1hHoxT2bsXd671aOaYkcHXgFkVGG0bAlzCYP58ae6N%2Bm9RmRMPD18cJsjDXZgCy1Mzwaaorx261Zw7DGTsReSvaA5fWcpzKfwOe0L1MlynoW6SNvpE%2FsBd29L%2Bs6Xrtj7s4G1vvZVf%2FirWg9A01ufVXNb9D1pXSKaTVQqxVT5khZnvIC2dxH%2B8dbC3ZRYwAnrDEZkzoHLt7TXB%2BNMpMHQHaEb1LHBI9lnHCJpWvz3T3LIuM2pehByIu7euSDXif6VVgPIxbL3dmNjPI8cw2oC6xAY6pgFnEGzQCKP31MPQdmLkNuo%2BfNHLUmJsZT2%2FnfzzfUNfsm50g7n0PKfeq2w0fRENdcDoCw%2BaMKurbRM9QFMiEOKpXufpbmKNeBNeDub%2BAxb0DixjQ4KFD5mlpuouAeJqRMQ%2FW8htcBOLnLYxYskrcf8xdsUXTbR%2FkzPiaeYN81JlIa6%2BIVhFAWM2kYei%2Bzq8G%2FAN9MGmvF4VKed1cNzDIDAt4yROrSSr&X-Amz-Signature=c8bd3211032b1f1363d8cea21e9492036e63755a11be626acb4ab3ca89661c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
