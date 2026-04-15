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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODZRSEJ%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmF0h5%2BDtzhXma6zDdmLEmr83oRTuSQIbs5q24rgpnFAiAnVDToJSPUKPI6bohsk3%2B68Fat2KvwqQgk38wdonMLCCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9w2bvZGbtpYV%2F1MEKtwDstAqb2Y8dIqzhOHRCNdwwK1EGztSGeeWN3l7pJ%2BR75dGaEgkE1GcxtUIT1Y40myGvn4ZkDAik4%2BISE7dyUESCSoe49vxMsAWv93hQgn0H7ANainsI3tmZitziH2Wy1VbMpUs951pBcGs%2B98c7x%2BDIdtha%2FdGHncM3BpfJojq9D2sRAb0VWzuLXzLp8xlXVIiXesxApjBwPb2W0QKZ9UdcZNvzGrGyF%2BUgAK1NFPxr6OwhZaOOLc3MwWJ%2BUYokAc3ng7jTfpVAA5%2FS3XeVgREThq6mgqPKrbXbgghQDv35lozTQsyjoUkwoMI5UkirXU7rjZsQElkdfWJWDXUrSsstBA9STrmmJhG2ofAH1uDZ6aD3xqKD2d9cz15iR7%2B4YXAxxh1Oq6uQ9SmLKiAd6EOLap6eLEBEWfOdOFLoCnvcQ54lR4MEjShyFg7T1FHo7jnjJMoV2ebLvgWSoJBTpI%2B9GFLWI6FaGOr2TGBfOjwJW8LUfVrLRSEIIGeqXEIvjcc6umO%2FrIVU502okS7oHa9T7y1NAzDjGjPMy178HfqiYBPvuK%2BNWGtHnqECMwV67oTT2rXqTXi4lX3ccQeoHX4HWOXYBMtMKvNvJTNdXTM%2BnrYXIOc4DVd7NNRdRQwg%2BP7zgY6pgE2U5DaEofXh3OwIYBZu0TFqubW%2F9qcqmWDevBUsCukMqwej8a7Tj9AppLkU4GOhFdIwe6DAeoDilXAaFGKdfq0jNdzGhmVIAz7vYBso6FssKbwC%2Fyqq9NCdyq%2BA%2BoD%2BezBGRlr3HsNBCjJRF4Ow%2FPy9%2BXkRJpZVHFM0OVPdo96adBBsRbQg8j5Fy5OvEgidlgNhTiw0x02lm0gZ3YPHne0uaUtwZxV&X-Amz-Signature=99ecd08a0cbb4ad923928cc9aa6588bed71e300d9d315a95f4b2fdef63402638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODZRSEJ%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmF0h5%2BDtzhXma6zDdmLEmr83oRTuSQIbs5q24rgpnFAiAnVDToJSPUKPI6bohsk3%2B68Fat2KvwqQgk38wdonMLCCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9w2bvZGbtpYV%2F1MEKtwDstAqb2Y8dIqzhOHRCNdwwK1EGztSGeeWN3l7pJ%2BR75dGaEgkE1GcxtUIT1Y40myGvn4ZkDAik4%2BISE7dyUESCSoe49vxMsAWv93hQgn0H7ANainsI3tmZitziH2Wy1VbMpUs951pBcGs%2B98c7x%2BDIdtha%2FdGHncM3BpfJojq9D2sRAb0VWzuLXzLp8xlXVIiXesxApjBwPb2W0QKZ9UdcZNvzGrGyF%2BUgAK1NFPxr6OwhZaOOLc3MwWJ%2BUYokAc3ng7jTfpVAA5%2FS3XeVgREThq6mgqPKrbXbgghQDv35lozTQsyjoUkwoMI5UkirXU7rjZsQElkdfWJWDXUrSsstBA9STrmmJhG2ofAH1uDZ6aD3xqKD2d9cz15iR7%2B4YXAxxh1Oq6uQ9SmLKiAd6EOLap6eLEBEWfOdOFLoCnvcQ54lR4MEjShyFg7T1FHo7jnjJMoV2ebLvgWSoJBTpI%2B9GFLWI6FaGOr2TGBfOjwJW8LUfVrLRSEIIGeqXEIvjcc6umO%2FrIVU502okS7oHa9T7y1NAzDjGjPMy178HfqiYBPvuK%2BNWGtHnqECMwV67oTT2rXqTXi4lX3ccQeoHX4HWOXYBMtMKvNvJTNdXTM%2BnrYXIOc4DVd7NNRdRQwg%2BP7zgY6pgE2U5DaEofXh3OwIYBZu0TFqubW%2F9qcqmWDevBUsCukMqwej8a7Tj9AppLkU4GOhFdIwe6DAeoDilXAaFGKdfq0jNdzGhmVIAz7vYBso6FssKbwC%2Fyqq9NCdyq%2BA%2BoD%2BezBGRlr3HsNBCjJRF4Ow%2FPy9%2BXkRJpZVHFM0OVPdo96adBBsRbQg8j5Fy5OvEgidlgNhTiw0x02lm0gZ3YPHne0uaUtwZxV&X-Amz-Signature=d1bf3d78f7331a83f4ec32823781786ebea6ae235f310a3fe4734e05cfa4e51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODZRSEJ%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmF0h5%2BDtzhXma6zDdmLEmr83oRTuSQIbs5q24rgpnFAiAnVDToJSPUKPI6bohsk3%2B68Fat2KvwqQgk38wdonMLCCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9w2bvZGbtpYV%2F1MEKtwDstAqb2Y8dIqzhOHRCNdwwK1EGztSGeeWN3l7pJ%2BR75dGaEgkE1GcxtUIT1Y40myGvn4ZkDAik4%2BISE7dyUESCSoe49vxMsAWv93hQgn0H7ANainsI3tmZitziH2Wy1VbMpUs951pBcGs%2B98c7x%2BDIdtha%2FdGHncM3BpfJojq9D2sRAb0VWzuLXzLp8xlXVIiXesxApjBwPb2W0QKZ9UdcZNvzGrGyF%2BUgAK1NFPxr6OwhZaOOLc3MwWJ%2BUYokAc3ng7jTfpVAA5%2FS3XeVgREThq6mgqPKrbXbgghQDv35lozTQsyjoUkwoMI5UkirXU7rjZsQElkdfWJWDXUrSsstBA9STrmmJhG2ofAH1uDZ6aD3xqKD2d9cz15iR7%2B4YXAxxh1Oq6uQ9SmLKiAd6EOLap6eLEBEWfOdOFLoCnvcQ54lR4MEjShyFg7T1FHo7jnjJMoV2ebLvgWSoJBTpI%2B9GFLWI6FaGOr2TGBfOjwJW8LUfVrLRSEIIGeqXEIvjcc6umO%2FrIVU502okS7oHa9T7y1NAzDjGjPMy178HfqiYBPvuK%2BNWGtHnqECMwV67oTT2rXqTXi4lX3ccQeoHX4HWOXYBMtMKvNvJTNdXTM%2BnrYXIOc4DVd7NNRdRQwg%2BP7zgY6pgE2U5DaEofXh3OwIYBZu0TFqubW%2F9qcqmWDevBUsCukMqwej8a7Tj9AppLkU4GOhFdIwe6DAeoDilXAaFGKdfq0jNdzGhmVIAz7vYBso6FssKbwC%2Fyqq9NCdyq%2BA%2BoD%2BezBGRlr3HsNBCjJRF4Ow%2FPy9%2BXkRJpZVHFM0OVPdo96adBBsRbQg8j5Fy5OvEgidlgNhTiw0x02lm0gZ3YPHne0uaUtwZxV&X-Amz-Signature=bfb0e78f6855147354c1ca7fb7093b7ae4341e3d8e005f3dc11e3b391288206f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
