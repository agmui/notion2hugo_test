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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IAF5ON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEL%2FVG5Jjki3JexYlqKCWpLJQHUHqD7cU1TBcyzkQZkDAiEA7FwUHD2%2B6yqSjHnKKR5038MU1%2Buu%2FFEU25ShB%2Fe7g9Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNvx7nkzVg7%2FfdPoyCrcA6%2BU22qtAu7e9sH6N1Pk7zRqcbKAsuV2V3uwIzmWeACZt%2BDzDRSKaieMipZu90TteyhkJHVhyoWevDeN5LjHYKUNjIFGLZTy%2FmaEyPnnVSm4FIJXeJWMhMgYZa5OXglW5nC83VUy%2F0LL7patcWeMk%2BO9cgBDsQjO1RcOT4QiWsSLbKVU827rk7zSan4THm3ac%2FyaiZ%2FlLgPbamhv3s2wNdO920OIsxk3ZEfGk%2FV9z6wGMT1GEtipA3mMiqXIiDocOysZLAtdbXFWL6LVD%2BYX2cNXT1TmORBfHdMO35XYec%2FdMWk2rFX7IdfLeekNOigqNTXrjzIqKO0z2yTosR6UL0KGn8cKzJj%2BaPtaErEYcv3t4UzcJlFA3uGnqwf1RA%2BUT2U0RbXo9HFCBipszU%2F%2BCNrSQFBVZQ02wtoUSW%2BwVYK0Fe2ZohKqLPFcQ2tXtUUaQI2UX%2FBxsS43NTErSbhwv4xy1Y9FxsxvqsWqfUGHp4QcTgWHBA%2B6qrFCjhLg2oEVUAn%2B51gZD9Aubbb9h9Dkh%2FY7XiMChbB3n8cv8WxuwYvhfx%2FZY7cnWDHo8bzu7dt%2BPMRazPRqA16mQXnSRULHW041vwgyMK8M4Rg543Li7ReuolfaLfZA4NYkrHa5MIyj%2BsQGOqUBiO4K0d76UdACnDQ3epu99P%2BxF0P3PdPtFIaN4%2BLnBDTux0pvedQwZlleH4ZQqi1wNUKMy2mvFi1TmjuD%2BgFWPbnfJvicKpK3O4%2BYHePDUW%2BGF2ka8H%2FLu9tM8USrXfjreh5eNoyNyG7CA4Fp7twzqOOdMcc6MsScfBAN7ExcA3fmYd0B6w1REFzejfN%2B0MEmtuXY80RceiYGKl94peS8CQbYG8nf&X-Amz-Signature=380fee4c70d824923327183579cdd4eec3a025a185d5d9b754c6cecf481ecac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IAF5ON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEL%2FVG5Jjki3JexYlqKCWpLJQHUHqD7cU1TBcyzkQZkDAiEA7FwUHD2%2B6yqSjHnKKR5038MU1%2Buu%2FFEU25ShB%2Fe7g9Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNvx7nkzVg7%2FfdPoyCrcA6%2BU22qtAu7e9sH6N1Pk7zRqcbKAsuV2V3uwIzmWeACZt%2BDzDRSKaieMipZu90TteyhkJHVhyoWevDeN5LjHYKUNjIFGLZTy%2FmaEyPnnVSm4FIJXeJWMhMgYZa5OXglW5nC83VUy%2F0LL7patcWeMk%2BO9cgBDsQjO1RcOT4QiWsSLbKVU827rk7zSan4THm3ac%2FyaiZ%2FlLgPbamhv3s2wNdO920OIsxk3ZEfGk%2FV9z6wGMT1GEtipA3mMiqXIiDocOysZLAtdbXFWL6LVD%2BYX2cNXT1TmORBfHdMO35XYec%2FdMWk2rFX7IdfLeekNOigqNTXrjzIqKO0z2yTosR6UL0KGn8cKzJj%2BaPtaErEYcv3t4UzcJlFA3uGnqwf1RA%2BUT2U0RbXo9HFCBipszU%2F%2BCNrSQFBVZQ02wtoUSW%2BwVYK0Fe2ZohKqLPFcQ2tXtUUaQI2UX%2FBxsS43NTErSbhwv4xy1Y9FxsxvqsWqfUGHp4QcTgWHBA%2B6qrFCjhLg2oEVUAn%2B51gZD9Aubbb9h9Dkh%2FY7XiMChbB3n8cv8WxuwYvhfx%2FZY7cnWDHo8bzu7dt%2BPMRazPRqA16mQXnSRULHW041vwgyMK8M4Rg543Li7ReuolfaLfZA4NYkrHa5MIyj%2BsQGOqUBiO4K0d76UdACnDQ3epu99P%2BxF0P3PdPtFIaN4%2BLnBDTux0pvedQwZlleH4ZQqi1wNUKMy2mvFi1TmjuD%2BgFWPbnfJvicKpK3O4%2BYHePDUW%2BGF2ka8H%2FLu9tM8USrXfjreh5eNoyNyG7CA4Fp7twzqOOdMcc6MsScfBAN7ExcA3fmYd0B6w1REFzejfN%2B0MEmtuXY80RceiYGKl94peS8CQbYG8nf&X-Amz-Signature=38e642c798899dff600c3db67c4b68f1b58f47777dc15ba23cf997dce993ebcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IAF5ON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEL%2FVG5Jjki3JexYlqKCWpLJQHUHqD7cU1TBcyzkQZkDAiEA7FwUHD2%2B6yqSjHnKKR5038MU1%2Buu%2FFEU25ShB%2Fe7g9Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNvx7nkzVg7%2FfdPoyCrcA6%2BU22qtAu7e9sH6N1Pk7zRqcbKAsuV2V3uwIzmWeACZt%2BDzDRSKaieMipZu90TteyhkJHVhyoWevDeN5LjHYKUNjIFGLZTy%2FmaEyPnnVSm4FIJXeJWMhMgYZa5OXglW5nC83VUy%2F0LL7patcWeMk%2BO9cgBDsQjO1RcOT4QiWsSLbKVU827rk7zSan4THm3ac%2FyaiZ%2FlLgPbamhv3s2wNdO920OIsxk3ZEfGk%2FV9z6wGMT1GEtipA3mMiqXIiDocOysZLAtdbXFWL6LVD%2BYX2cNXT1TmORBfHdMO35XYec%2FdMWk2rFX7IdfLeekNOigqNTXrjzIqKO0z2yTosR6UL0KGn8cKzJj%2BaPtaErEYcv3t4UzcJlFA3uGnqwf1RA%2BUT2U0RbXo9HFCBipszU%2F%2BCNrSQFBVZQ02wtoUSW%2BwVYK0Fe2ZohKqLPFcQ2tXtUUaQI2UX%2FBxsS43NTErSbhwv4xy1Y9FxsxvqsWqfUGHp4QcTgWHBA%2B6qrFCjhLg2oEVUAn%2B51gZD9Aubbb9h9Dkh%2FY7XiMChbB3n8cv8WxuwYvhfx%2FZY7cnWDHo8bzu7dt%2BPMRazPRqA16mQXnSRULHW041vwgyMK8M4Rg543Li7ReuolfaLfZA4NYkrHa5MIyj%2BsQGOqUBiO4K0d76UdACnDQ3epu99P%2BxF0P3PdPtFIaN4%2BLnBDTux0pvedQwZlleH4ZQqi1wNUKMy2mvFi1TmjuD%2BgFWPbnfJvicKpK3O4%2BYHePDUW%2BGF2ka8H%2FLu9tM8USrXfjreh5eNoyNyG7CA4Fp7twzqOOdMcc6MsScfBAN7ExcA3fmYd0B6w1REFzejfN%2B0MEmtuXY80RceiYGKl94peS8CQbYG8nf&X-Amz-Signature=1d2ff43f19281d2a999bc71e7bf6244ee831215aa3207ea03ae38b61068e1959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
