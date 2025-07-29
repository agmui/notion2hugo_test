---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PECC2A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDl5PrWwogaRVA%2FmtMwDnf1Evs6dXjBq%2Fn85AYkPRRmAiEA3UNweCyPGbEA4KGBCoUB1Q%2BLjsMb%2BNHUu%2BQcgD%2FwGJkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0YwwRwwjLEXtr1XircA%2FRiGwiVKbMWPQlO04WL3TDNHg1Er5O7XbTxNsoqp8qmgiPaRLbeUJBSSxKutuhVO4RS86hYFC1oc7fYPsfEtaor7Ju2ZMHIGOx7exdJEcFFRAp1smiYaRAUOm%2BDd5fd4%2BQ8KJwpF3iIhOhqyRyYLNYhVycYK2b4g3FvBumI1bFNTGwm4IAcF6Ygc9WbyZp3WrOSum5wgIP24%2BHls5g2l6LA94TKXj8%2FDCuBV%2BqD9gzW3xY8s%2Bs6ev8wuyA85ZNdH%2BwWbagsqXqmMHbmw2%2BZFsM2tImuaCt8f9dCat6%2Bc5tb5Iy72ekdH2zl4n5nH8mbmRF2gFu43oJFAK3lrOVsV4chj62ZkcKnpqINe7iCQhpmvtypub6c1NvT%2BuxXvSxPq4F2Z5Uo9usijpI6b0rtCBn8JGNe%2F2NeIQ4aT2iBlD%2F%2FAgBg2L%2FWUXrzLXN0bv9e4kfDMi7%2FJy8MnZejPfLbBEvlH3S7Ga0j3HHMLpPz0vuSiLjHphy1WtlbVP1NIC38kPI5EQuV%2FESB0g9Ddv66MVxsLvKx0ueuM%2BjsRsajQ%2Bvab%2BjM%2BDxz3BlOXbt9FHmFVaje4ZSnXk52kw7KYD9BQ9TKBmIN%2BaLWfem5ARQWmLLmT2L1mHcB3zUAc%2FMWMPXcpMQGOqUBK4%2FN1%2FeHyLAcXwpGRv7iY6Y%2Bh0j2lc6HKwDfzdvHWdp01OCEiF7%2B%2BapRF60gI64UZSDOUKdypTPkFnGSzB%2FT0zRYabmeYfu3R9cAJCMdtNZ6jdwQ9RH7B6Rx2iXdiAlrtjVygQK1TGh7VjhaMFgn9fsd9c4aQmsU1ZkPPbNSnrs3KrCV46EpoJ9aIO1K21%2FeO3u3%2B2%2Bde0nw3bU%2FaSNVhsZg68bH&X-Amz-Signature=c6771f5e7d668406011911740338eadc63927ab2dc1f246c20fb6e9a0e85bc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PECC2A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDl5PrWwogaRVA%2FmtMwDnf1Evs6dXjBq%2Fn85AYkPRRmAiEA3UNweCyPGbEA4KGBCoUB1Q%2BLjsMb%2BNHUu%2BQcgD%2FwGJkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0YwwRwwjLEXtr1XircA%2FRiGwiVKbMWPQlO04WL3TDNHg1Er5O7XbTxNsoqp8qmgiPaRLbeUJBSSxKutuhVO4RS86hYFC1oc7fYPsfEtaor7Ju2ZMHIGOx7exdJEcFFRAp1smiYaRAUOm%2BDd5fd4%2BQ8KJwpF3iIhOhqyRyYLNYhVycYK2b4g3FvBumI1bFNTGwm4IAcF6Ygc9WbyZp3WrOSum5wgIP24%2BHls5g2l6LA94TKXj8%2FDCuBV%2BqD9gzW3xY8s%2Bs6ev8wuyA85ZNdH%2BwWbagsqXqmMHbmw2%2BZFsM2tImuaCt8f9dCat6%2Bc5tb5Iy72ekdH2zl4n5nH8mbmRF2gFu43oJFAK3lrOVsV4chj62ZkcKnpqINe7iCQhpmvtypub6c1NvT%2BuxXvSxPq4F2Z5Uo9usijpI6b0rtCBn8JGNe%2F2NeIQ4aT2iBlD%2F%2FAgBg2L%2FWUXrzLXN0bv9e4kfDMi7%2FJy8MnZejPfLbBEvlH3S7Ga0j3HHMLpPz0vuSiLjHphy1WtlbVP1NIC38kPI5EQuV%2FESB0g9Ddv66MVxsLvKx0ueuM%2BjsRsajQ%2Bvab%2BjM%2BDxz3BlOXbt9FHmFVaje4ZSnXk52kw7KYD9BQ9TKBmIN%2BaLWfem5ARQWmLLmT2L1mHcB3zUAc%2FMWMPXcpMQGOqUBK4%2FN1%2FeHyLAcXwpGRv7iY6Y%2Bh0j2lc6HKwDfzdvHWdp01OCEiF7%2B%2BapRF60gI64UZSDOUKdypTPkFnGSzB%2FT0zRYabmeYfu3R9cAJCMdtNZ6jdwQ9RH7B6Rx2iXdiAlrtjVygQK1TGh7VjhaMFgn9fsd9c4aQmsU1ZkPPbNSnrs3KrCV46EpoJ9aIO1K21%2FeO3u3%2B2%2Bde0nw3bU%2FaSNVhsZg68bH&X-Amz-Signature=df8ff04698aa3fd485c5492df00b9475b314b8b501e1f934f0bccc9628aa5555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PECC2A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDl5PrWwogaRVA%2FmtMwDnf1Evs6dXjBq%2Fn85AYkPRRmAiEA3UNweCyPGbEA4KGBCoUB1Q%2BLjsMb%2BNHUu%2BQcgD%2FwGJkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0YwwRwwjLEXtr1XircA%2FRiGwiVKbMWPQlO04WL3TDNHg1Er5O7XbTxNsoqp8qmgiPaRLbeUJBSSxKutuhVO4RS86hYFC1oc7fYPsfEtaor7Ju2ZMHIGOx7exdJEcFFRAp1smiYaRAUOm%2BDd5fd4%2BQ8KJwpF3iIhOhqyRyYLNYhVycYK2b4g3FvBumI1bFNTGwm4IAcF6Ygc9WbyZp3WrOSum5wgIP24%2BHls5g2l6LA94TKXj8%2FDCuBV%2BqD9gzW3xY8s%2Bs6ev8wuyA85ZNdH%2BwWbagsqXqmMHbmw2%2BZFsM2tImuaCt8f9dCat6%2Bc5tb5Iy72ekdH2zl4n5nH8mbmRF2gFu43oJFAK3lrOVsV4chj62ZkcKnpqINe7iCQhpmvtypub6c1NvT%2BuxXvSxPq4F2Z5Uo9usijpI6b0rtCBn8JGNe%2F2NeIQ4aT2iBlD%2F%2FAgBg2L%2FWUXrzLXN0bv9e4kfDMi7%2FJy8MnZejPfLbBEvlH3S7Ga0j3HHMLpPz0vuSiLjHphy1WtlbVP1NIC38kPI5EQuV%2FESB0g9Ddv66MVxsLvKx0ueuM%2BjsRsajQ%2Bvab%2BjM%2BDxz3BlOXbt9FHmFVaje4ZSnXk52kw7KYD9BQ9TKBmIN%2BaLWfem5ARQWmLLmT2L1mHcB3zUAc%2FMWMPXcpMQGOqUBK4%2FN1%2FeHyLAcXwpGRv7iY6Y%2Bh0j2lc6HKwDfzdvHWdp01OCEiF7%2B%2BapRF60gI64UZSDOUKdypTPkFnGSzB%2FT0zRYabmeYfu3R9cAJCMdtNZ6jdwQ9RH7B6Rx2iXdiAlrtjVygQK1TGh7VjhaMFgn9fsd9c4aQmsU1ZkPPbNSnrs3KrCV46EpoJ9aIO1K21%2FeO3u3%2B2%2Bde0nw3bU%2FaSNVhsZg68bH&X-Amz-Signature=99afe9c00011282500262f2159e2c5d8d3fdb6aed06cdd354b8732787587c5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
