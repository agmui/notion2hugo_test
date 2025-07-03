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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJQU36K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbwL2aP7eh5fksRpc8oqkvsDb1l7cCi1jKoJo7h5YBQIgUWhdAD9bXw96ShGDXciG7n86mSzeNFpT2%2B99iOmkZL8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBDLdB3k5cbSZVeRBSrcAz%2F3g62bfuiYyP8SQYBTQoNX40xVdiqUiDXJk%2BiKQ%2BOz%2FmFnGEt6zHQBzLjeGH%2FOpHH1ImIqJdnWyp5h9nz6ym2V0WvabPL4E%2FvmmYgsd9a56%2FvxPLpWQdaKTh%2BVBbBkpMqfRlXL3bXwb1BmHdpYBtM3Dj%2FD6VLvkBY9FqhlovHezciEg3Hlcem35APDV9f0GwN%2FPVUQIxehiskPlh50T%2BfcwUfx3Fa%2Fdro9AbBIPFUevBpQOfyGmMEM86ljp8ELzIW4EAwm%2Bz64X8wF5C2olc6XV3n%2Bn11TLXSYCJVHGo3jpRI4WmnJEP0LP7DvG8Z%2Fgn3gN5SMqDGiBglF8ir5%2FjEUYTVS8vEocIbzTEixzhGQK2yRIWVQ5TaCcFBKj8XS36CoN7F4TjC6dLOUEX%2FqNW7I3NAw3nrl10u9M2pcH25BGMSr3%2BwLLWFUDVflH%2FWDGvDB9vIlwxO8tc%2BdghuhmdX54RZhgk8fVUyJLbyEO7hOnGIp%2BLIFsbylPExC7V0d84qI1N6j28MUjBY7%2BH75Ohbh0xToKovW%2Bv8tJaMVSECZOFculk5grC0poHZ%2FcEFL7P3HplptQ3DsR6DB7kBTx5Fyc4rsoWhQSRD1%2BnMMuXQMi9kq4jp3Vhnf5H3hMKKJmcMGOqUBvpNjntNG1uPhjZTB04vYhnC2IQjCETBn6JZ2fO9FZbcQSkIv5cCWItFz8KXhW%2BeYVSpT0hqRAe72CunUTJ8CYIs2vACCnwOP1SoJ8T%2BfWKIIg1VL8FIJ1%2FxxIZs1RwWJmzesLGNlm1TcyPXXbOvBAoSWTkzkD8hNGIGgpYgQJNoqWJhag54iUmvfqTfU7vhrzdgO2YKpVGevHnyVPiJBnEm9oYL9&X-Amz-Signature=0f69eaaa4fbb9c5be50b8a6b5e5324a6797a65bf19fbb0d0dd12ffedb1a6c51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJQU36K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbwL2aP7eh5fksRpc8oqkvsDb1l7cCi1jKoJo7h5YBQIgUWhdAD9bXw96ShGDXciG7n86mSzeNFpT2%2B99iOmkZL8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBDLdB3k5cbSZVeRBSrcAz%2F3g62bfuiYyP8SQYBTQoNX40xVdiqUiDXJk%2BiKQ%2BOz%2FmFnGEt6zHQBzLjeGH%2FOpHH1ImIqJdnWyp5h9nz6ym2V0WvabPL4E%2FvmmYgsd9a56%2FvxPLpWQdaKTh%2BVBbBkpMqfRlXL3bXwb1BmHdpYBtM3Dj%2FD6VLvkBY9FqhlovHezciEg3Hlcem35APDV9f0GwN%2FPVUQIxehiskPlh50T%2BfcwUfx3Fa%2Fdro9AbBIPFUevBpQOfyGmMEM86ljp8ELzIW4EAwm%2Bz64X8wF5C2olc6XV3n%2Bn11TLXSYCJVHGo3jpRI4WmnJEP0LP7DvG8Z%2Fgn3gN5SMqDGiBglF8ir5%2FjEUYTVS8vEocIbzTEixzhGQK2yRIWVQ5TaCcFBKj8XS36CoN7F4TjC6dLOUEX%2FqNW7I3NAw3nrl10u9M2pcH25BGMSr3%2BwLLWFUDVflH%2FWDGvDB9vIlwxO8tc%2BdghuhmdX54RZhgk8fVUyJLbyEO7hOnGIp%2BLIFsbylPExC7V0d84qI1N6j28MUjBY7%2BH75Ohbh0xToKovW%2Bv8tJaMVSECZOFculk5grC0poHZ%2FcEFL7P3HplptQ3DsR6DB7kBTx5Fyc4rsoWhQSRD1%2BnMMuXQMi9kq4jp3Vhnf5H3hMKKJmcMGOqUBvpNjntNG1uPhjZTB04vYhnC2IQjCETBn6JZ2fO9FZbcQSkIv5cCWItFz8KXhW%2BeYVSpT0hqRAe72CunUTJ8CYIs2vACCnwOP1SoJ8T%2BfWKIIg1VL8FIJ1%2FxxIZs1RwWJmzesLGNlm1TcyPXXbOvBAoSWTkzkD8hNGIGgpYgQJNoqWJhag54iUmvfqTfU7vhrzdgO2YKpVGevHnyVPiJBnEm9oYL9&X-Amz-Signature=23cb6e3d1a942d297649be3ef16586726990b922d3265ce3325364d8049957bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJQU36K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbwL2aP7eh5fksRpc8oqkvsDb1l7cCi1jKoJo7h5YBQIgUWhdAD9bXw96ShGDXciG7n86mSzeNFpT2%2B99iOmkZL8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBDLdB3k5cbSZVeRBSrcAz%2F3g62bfuiYyP8SQYBTQoNX40xVdiqUiDXJk%2BiKQ%2BOz%2FmFnGEt6zHQBzLjeGH%2FOpHH1ImIqJdnWyp5h9nz6ym2V0WvabPL4E%2FvmmYgsd9a56%2FvxPLpWQdaKTh%2BVBbBkpMqfRlXL3bXwb1BmHdpYBtM3Dj%2FD6VLvkBY9FqhlovHezciEg3Hlcem35APDV9f0GwN%2FPVUQIxehiskPlh50T%2BfcwUfx3Fa%2Fdro9AbBIPFUevBpQOfyGmMEM86ljp8ELzIW4EAwm%2Bz64X8wF5C2olc6XV3n%2Bn11TLXSYCJVHGo3jpRI4WmnJEP0LP7DvG8Z%2Fgn3gN5SMqDGiBglF8ir5%2FjEUYTVS8vEocIbzTEixzhGQK2yRIWVQ5TaCcFBKj8XS36CoN7F4TjC6dLOUEX%2FqNW7I3NAw3nrl10u9M2pcH25BGMSr3%2BwLLWFUDVflH%2FWDGvDB9vIlwxO8tc%2BdghuhmdX54RZhgk8fVUyJLbyEO7hOnGIp%2BLIFsbylPExC7V0d84qI1N6j28MUjBY7%2BH75Ohbh0xToKovW%2Bv8tJaMVSECZOFculk5grC0poHZ%2FcEFL7P3HplptQ3DsR6DB7kBTx5Fyc4rsoWhQSRD1%2BnMMuXQMi9kq4jp3Vhnf5H3hMKKJmcMGOqUBvpNjntNG1uPhjZTB04vYhnC2IQjCETBn6JZ2fO9FZbcQSkIv5cCWItFz8KXhW%2BeYVSpT0hqRAe72CunUTJ8CYIs2vACCnwOP1SoJ8T%2BfWKIIg1VL8FIJ1%2FxxIZs1RwWJmzesLGNlm1TcyPXXbOvBAoSWTkzkD8hNGIGgpYgQJNoqWJhag54iUmvfqTfU7vhrzdgO2YKpVGevHnyVPiJBnEm9oYL9&X-Amz-Signature=e05f60b079682f396e108420273c15dfc8a9060c7a1143c1eef3c227c4fc4ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
