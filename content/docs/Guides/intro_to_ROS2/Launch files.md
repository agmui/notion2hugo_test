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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZY4DW4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd2X8EcfsATELKTXPaBCTv1rrpHesyL04Z%2FZ6IxI%2B9UAiEA8hbyXfLEs9uP%2BsmdE6syPyTJdJXEBB4EhIpXqRwXAHEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY82ZAQQsZXYDna8yrcAwHcEHrm2wMdbVl6KgWtUhIyFvPaV%2BDaCfC8BKTmg2Ivw6CtB7KSHshamy0YiiZ1k17egar46DV16NBBEGbPFh61KVST3fk1iK7g3V9qUnSrn7%2FDjbqu8UIJ9lqAXVk4i60o6KNK%2F%2B%2BIwrRh92Jd8NKOtV6oqq86ja%2F9UDoZwclUuunGzyZx5T6tQblj1pdMSbnqiHcZWa%2FroaiNNvA7geSgM1ivAsOnNKghE4w57NQx4x52AhwKJkb8JjhCddBBZ6Sr68DRj7lK%2FfmIZnGk3kTF%2FYK2vqD7h2vbcwi%2BjDAg%2BcbyFs65tN7TeEc6HE%2BC7HBy7aD3THOlaP1mxGB7Op06rh142V7Tw82E6o56KwXMroe84579b8BakPAPsovLKaZ2k3PKuKGOC58ql7F2wT1dh2ifWMV1po1JWAcO02FL5T%2F4CK2GLsDZNRQmhWxW8Iv7niLXKm%2Bo260sHI%2BVFOneiJmahdgnmeUUPDu1vWkRcPOX7FY9S%2BVEKAK%2FUZdW1%2FSU5gjgUIlbIRKcprE0mHDXNuw9cAY8KQ38dSJdRqiRvqAhF0cqGRiJ10MqNi5aV2KPxram%2BEdBaEpReZvT9jPoMX31zdGbqmkA9ZArubqm1yXtwMjyM7nR5ZJCMJr35cQGOqUBPTq81JsGOQbP01F0W%2BU4BXFcx55eLEXMgS8zh%2Bo%2F1Tdw5io%2BQv8tlcOKNs7RZ3xE7kbx%2Bc743WCOhLTeOZjaqtU%2B8cxV%2BoB651avTyQcMFTwo0%2B3qBEHaFeAdGPJqpHsByJXQgf%2Bkn1WS2ZfjBFwFV4AZ61kYIObVaVH7hb9xThWjUEfTiweQZXni4RQU6I5xRYkrDuWJlOqjjRZv59cj4DcBQH6&X-Amz-Signature=e9c124b148ac8fc188e7ee876633d0793a31a822737313446c569206108434e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZY4DW4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd2X8EcfsATELKTXPaBCTv1rrpHesyL04Z%2FZ6IxI%2B9UAiEA8hbyXfLEs9uP%2BsmdE6syPyTJdJXEBB4EhIpXqRwXAHEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY82ZAQQsZXYDna8yrcAwHcEHrm2wMdbVl6KgWtUhIyFvPaV%2BDaCfC8BKTmg2Ivw6CtB7KSHshamy0YiiZ1k17egar46DV16NBBEGbPFh61KVST3fk1iK7g3V9qUnSrn7%2FDjbqu8UIJ9lqAXVk4i60o6KNK%2F%2B%2BIwrRh92Jd8NKOtV6oqq86ja%2F9UDoZwclUuunGzyZx5T6tQblj1pdMSbnqiHcZWa%2FroaiNNvA7geSgM1ivAsOnNKghE4w57NQx4x52AhwKJkb8JjhCddBBZ6Sr68DRj7lK%2FfmIZnGk3kTF%2FYK2vqD7h2vbcwi%2BjDAg%2BcbyFs65tN7TeEc6HE%2BC7HBy7aD3THOlaP1mxGB7Op06rh142V7Tw82E6o56KwXMroe84579b8BakPAPsovLKaZ2k3PKuKGOC58ql7F2wT1dh2ifWMV1po1JWAcO02FL5T%2F4CK2GLsDZNRQmhWxW8Iv7niLXKm%2Bo260sHI%2BVFOneiJmahdgnmeUUPDu1vWkRcPOX7FY9S%2BVEKAK%2FUZdW1%2FSU5gjgUIlbIRKcprE0mHDXNuw9cAY8KQ38dSJdRqiRvqAhF0cqGRiJ10MqNi5aV2KPxram%2BEdBaEpReZvT9jPoMX31zdGbqmkA9ZArubqm1yXtwMjyM7nR5ZJCMJr35cQGOqUBPTq81JsGOQbP01F0W%2BU4BXFcx55eLEXMgS8zh%2Bo%2F1Tdw5io%2BQv8tlcOKNs7RZ3xE7kbx%2Bc743WCOhLTeOZjaqtU%2B8cxV%2BoB651avTyQcMFTwo0%2B3qBEHaFeAdGPJqpHsByJXQgf%2Bkn1WS2ZfjBFwFV4AZ61kYIObVaVH7hb9xThWjUEfTiweQZXni4RQU6I5xRYkrDuWJlOqjjRZv59cj4DcBQH6&X-Amz-Signature=a848c1a77601a51c19d3a20c6170600609e1076b021dafbae40a9c41a656982e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZY4DW4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd2X8EcfsATELKTXPaBCTv1rrpHesyL04Z%2FZ6IxI%2B9UAiEA8hbyXfLEs9uP%2BsmdE6syPyTJdJXEBB4EhIpXqRwXAHEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY82ZAQQsZXYDna8yrcAwHcEHrm2wMdbVl6KgWtUhIyFvPaV%2BDaCfC8BKTmg2Ivw6CtB7KSHshamy0YiiZ1k17egar46DV16NBBEGbPFh61KVST3fk1iK7g3V9qUnSrn7%2FDjbqu8UIJ9lqAXVk4i60o6KNK%2F%2B%2BIwrRh92Jd8NKOtV6oqq86ja%2F9UDoZwclUuunGzyZx5T6tQblj1pdMSbnqiHcZWa%2FroaiNNvA7geSgM1ivAsOnNKghE4w57NQx4x52AhwKJkb8JjhCddBBZ6Sr68DRj7lK%2FfmIZnGk3kTF%2FYK2vqD7h2vbcwi%2BjDAg%2BcbyFs65tN7TeEc6HE%2BC7HBy7aD3THOlaP1mxGB7Op06rh142V7Tw82E6o56KwXMroe84579b8BakPAPsovLKaZ2k3PKuKGOC58ql7F2wT1dh2ifWMV1po1JWAcO02FL5T%2F4CK2GLsDZNRQmhWxW8Iv7niLXKm%2Bo260sHI%2BVFOneiJmahdgnmeUUPDu1vWkRcPOX7FY9S%2BVEKAK%2FUZdW1%2FSU5gjgUIlbIRKcprE0mHDXNuw9cAY8KQ38dSJdRqiRvqAhF0cqGRiJ10MqNi5aV2KPxram%2BEdBaEpReZvT9jPoMX31zdGbqmkA9ZArubqm1yXtwMjyM7nR5ZJCMJr35cQGOqUBPTq81JsGOQbP01F0W%2BU4BXFcx55eLEXMgS8zh%2Bo%2F1Tdw5io%2BQv8tlcOKNs7RZ3xE7kbx%2Bc743WCOhLTeOZjaqtU%2B8cxV%2BoB651avTyQcMFTwo0%2B3qBEHaFeAdGPJqpHsByJXQgf%2Bkn1WS2ZfjBFwFV4AZ61kYIObVaVH7hb9xThWjUEfTiweQZXni4RQU6I5xRYkrDuWJlOqjjRZv59cj4DcBQH6&X-Amz-Signature=755e64323b9bd9f195f21bea7d3a19f94779d1547565a42e6b453670de1f3097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
