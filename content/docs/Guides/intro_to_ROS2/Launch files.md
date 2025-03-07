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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILMKZSP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFe2SWD8%2FI8Qiv1YR65CtlvRP1sZN0CD%2FHMrTxHV7UNAiEA3wJgDzPuXreidSQKaIWk%2B2k7xeqEZqI8OnQKZgvqcSQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDITd%2B6rWD2DrfwynHSrcAyG39d%2BtIzYGJpk1VQcQjxzWW1VsT2YhTLof9j6l0pviK9V6b2tdBZcRd2x09SEQQg2%2B7T57dMBozChUlmHGPlh5rHGmjnlAKoWl%2Fxf9MnltK95v0IsNpM9s%2FryPuM55TwxsaHIlb6zM2mQ9Mpm%2Fl93CgpMOCttXJrciZAfRCBx3L55uXZwpBM%2BkYNax55%2FhLAckDgoDxxkoEikIR3hO14l6zIGISovC5p9e%2FiqpSR2amfwXb1a%2BcEI9ne3M8iI%2BQopLpnPE03USdrIDXJ%2B9YoVhlyNKi0ZxAR1WcJvzpOm2ocLQATKJCa5G1rEE6zrxVbPK3nLeXjBHtzHf0eX%2FJXzBAuzojUVsULvf1rhD43DZBg%2Bz7%2BY3lkGWH7qelRQwvHwdKvDrrbTMGOa2fIm53wr9tOxod%2FL2sf1ziW%2FxfnFkfn9yCQMOlMfCIQUtx3GpbrhAsg%2FmmTRmlzXBklS%2Fri%2FlDV4dClgz6ZQXAkHimuNDcf2TrX4xKdY5bs%2BaJV7d9%2BSPQCVOwbulU%2FLRlpd3AVFxb5EyIuP0Bi3CnY1hQZJFTUSegk74NY6iAIgGCqqhRqgRo68fpMqf%2Fs7DAOK%2FzeNIDeIxJKbTD11qkNxkBCYkssfB4qdRWZPMhkfVMNKgrb4GOqUB8ltRlQj5YDNf0Wl0J%2BDtsuS3H3kHR0svUUrAXKPHN%2BjvtDeW%2BYUTwBbgMsLZ1yQSHWVsEm5EfByEfRgYboHmtQCSiEn0VfMuYj2yzsJ52O0RO5A64pXlPSTUrbGvQ%2FIrWklFHV7xxWvAehRUFllzkrwg9Qdz0Wpo8eLPl0o1dswyxKLp25Y7dskFeFs36kLi6wsocd6OYW1q8gy%2B%2FEjgp8JddlMw&X-Amz-Signature=b750e6460fb2d7087354433ad52bc9c6b9ddb1bd329b0824cc0080990a2ad20b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILMKZSP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFe2SWD8%2FI8Qiv1YR65CtlvRP1sZN0CD%2FHMrTxHV7UNAiEA3wJgDzPuXreidSQKaIWk%2B2k7xeqEZqI8OnQKZgvqcSQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDITd%2B6rWD2DrfwynHSrcAyG39d%2BtIzYGJpk1VQcQjxzWW1VsT2YhTLof9j6l0pviK9V6b2tdBZcRd2x09SEQQg2%2B7T57dMBozChUlmHGPlh5rHGmjnlAKoWl%2Fxf9MnltK95v0IsNpM9s%2FryPuM55TwxsaHIlb6zM2mQ9Mpm%2Fl93CgpMOCttXJrciZAfRCBx3L55uXZwpBM%2BkYNax55%2FhLAckDgoDxxkoEikIR3hO14l6zIGISovC5p9e%2FiqpSR2amfwXb1a%2BcEI9ne3M8iI%2BQopLpnPE03USdrIDXJ%2B9YoVhlyNKi0ZxAR1WcJvzpOm2ocLQATKJCa5G1rEE6zrxVbPK3nLeXjBHtzHf0eX%2FJXzBAuzojUVsULvf1rhD43DZBg%2Bz7%2BY3lkGWH7qelRQwvHwdKvDrrbTMGOa2fIm53wr9tOxod%2FL2sf1ziW%2FxfnFkfn9yCQMOlMfCIQUtx3GpbrhAsg%2FmmTRmlzXBklS%2Fri%2FlDV4dClgz6ZQXAkHimuNDcf2TrX4xKdY5bs%2BaJV7d9%2BSPQCVOwbulU%2FLRlpd3AVFxb5EyIuP0Bi3CnY1hQZJFTUSegk74NY6iAIgGCqqhRqgRo68fpMqf%2Fs7DAOK%2FzeNIDeIxJKbTD11qkNxkBCYkssfB4qdRWZPMhkfVMNKgrb4GOqUB8ltRlQj5YDNf0Wl0J%2BDtsuS3H3kHR0svUUrAXKPHN%2BjvtDeW%2BYUTwBbgMsLZ1yQSHWVsEm5EfByEfRgYboHmtQCSiEn0VfMuYj2yzsJ52O0RO5A64pXlPSTUrbGvQ%2FIrWklFHV7xxWvAehRUFllzkrwg9Qdz0Wpo8eLPl0o1dswyxKLp25Y7dskFeFs36kLi6wsocd6OYW1q8gy%2B%2FEjgp8JddlMw&X-Amz-Signature=6529e5f6adc91ab0bd71660f8796a4a587de12ff9ddf6ff687d1b4db38c52eda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILMKZSP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFe2SWD8%2FI8Qiv1YR65CtlvRP1sZN0CD%2FHMrTxHV7UNAiEA3wJgDzPuXreidSQKaIWk%2B2k7xeqEZqI8OnQKZgvqcSQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDITd%2B6rWD2DrfwynHSrcAyG39d%2BtIzYGJpk1VQcQjxzWW1VsT2YhTLof9j6l0pviK9V6b2tdBZcRd2x09SEQQg2%2B7T57dMBozChUlmHGPlh5rHGmjnlAKoWl%2Fxf9MnltK95v0IsNpM9s%2FryPuM55TwxsaHIlb6zM2mQ9Mpm%2Fl93CgpMOCttXJrciZAfRCBx3L55uXZwpBM%2BkYNax55%2FhLAckDgoDxxkoEikIR3hO14l6zIGISovC5p9e%2FiqpSR2amfwXb1a%2BcEI9ne3M8iI%2BQopLpnPE03USdrIDXJ%2B9YoVhlyNKi0ZxAR1WcJvzpOm2ocLQATKJCa5G1rEE6zrxVbPK3nLeXjBHtzHf0eX%2FJXzBAuzojUVsULvf1rhD43DZBg%2Bz7%2BY3lkGWH7qelRQwvHwdKvDrrbTMGOa2fIm53wr9tOxod%2FL2sf1ziW%2FxfnFkfn9yCQMOlMfCIQUtx3GpbrhAsg%2FmmTRmlzXBklS%2Fri%2FlDV4dClgz6ZQXAkHimuNDcf2TrX4xKdY5bs%2BaJV7d9%2BSPQCVOwbulU%2FLRlpd3AVFxb5EyIuP0Bi3CnY1hQZJFTUSegk74NY6iAIgGCqqhRqgRo68fpMqf%2Fs7DAOK%2FzeNIDeIxJKbTD11qkNxkBCYkssfB4qdRWZPMhkfVMNKgrb4GOqUB8ltRlQj5YDNf0Wl0J%2BDtsuS3H3kHR0svUUrAXKPHN%2BjvtDeW%2BYUTwBbgMsLZ1yQSHWVsEm5EfByEfRgYboHmtQCSiEn0VfMuYj2yzsJ52O0RO5A64pXlPSTUrbGvQ%2FIrWklFHV7xxWvAehRUFllzkrwg9Qdz0Wpo8eLPl0o1dswyxKLp25Y7dskFeFs36kLi6wsocd6OYW1q8gy%2B%2FEjgp8JddlMw&X-Amz-Signature=f0d3f944ed907ce9c3763b3363ede1222558e1633146a87d0bf39b831d84e90a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
