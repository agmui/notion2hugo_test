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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TXG5BN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBq78Cvxc0G6r0azHR3ons6DFtD9tWdOjg4Xj0RTWKdWAiEAxuuXCNVuPWgQOMHdvStB1emOIKa8rQoVvWDxTHoEsw0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7zA1wVZMZUnrzoBircA7YcEDOKwAZp0JlSjvwKgnP5AZlh%2FzPDRPoLWJdM1y0o1iFVh%2BT7sWPZG%2BFDaEikRCTsf2fnWlHT%2BEIvYkAKHt8tFHmAq4gj2xJA4s1T6wNmBQIKaHWHGHHYwATs3Zt2HZeDoxyuXjgls46mtvNLte6h%2FUntmaoCKashOcYzV%2Bn6AE2GsGRoYGajkHLTI5Y%2F1pRncAYkpGkARzaZOSMp5%2BWXjaTWvf0cZ3%2BqR6dQ4rLuz4IqVolg63IuvMQGKtt2LvacpscPnTMlqTadhs9j5Vv8wiBdrQPNGzzMRoy1BG6lRosxENZD1XCXRagIj43mdnV6u3%2B6te1xE1UUHBNNv3qBq8HFHWDrmDJfDEM3zBsKzyLm3k8DB25OPp1%2FKZ%2FhpDobtYURWzD5BDuVuFGjm3Mw7ZlPSZqKsn3DK4M7vxU6RJ%2FzPs%2BIPFBZ0coFnZOk%2FgcsB1sUStc%2F18bZqZiGf5WdJ%2F%2F6zk5lzLzusyyH5Dqo%2BhWKdeh%2F5jGYXEU4rZkGfue9kkl%2F5mI9yn4SZpLYJ6SYoXfPc4hP27Heey73m5eFcN4V9LKU9a6ovWHsE4O7GqrRAIGsQkSvyuJjYyxWPeLgAZSIkiX5KJlnyi3kEGFZ1FTnl0FM85ejsf3pMLa0ncQGOqUBwUFclzTvfi%2FyEnaGh09TkHZVD%2F%2BFCGjmmHXQb6N8Sc4FAQu1jJ134SoGnqlOCGizHaC3WnlXSmq5HvIlthXJ1azfNpl4XfLTusFaFS3aPRjXHc6%2Fh%2FwcEib8VtwTM1sNfVO5U58UjYIjt2wH4KFn%2Bt6rK2Z2x8zryMJGI1FG98JYWB7wh4zW%2FlP5LBljuyqfHKrUR7Rpd5llHgWvBhxLXqA%2BhkG8&X-Amz-Signature=4142a1bc8a4e7585042da1ae4eb1a568de667040692947ab38ff8f72ca0cb7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TXG5BN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBq78Cvxc0G6r0azHR3ons6DFtD9tWdOjg4Xj0RTWKdWAiEAxuuXCNVuPWgQOMHdvStB1emOIKa8rQoVvWDxTHoEsw0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7zA1wVZMZUnrzoBircA7YcEDOKwAZp0JlSjvwKgnP5AZlh%2FzPDRPoLWJdM1y0o1iFVh%2BT7sWPZG%2BFDaEikRCTsf2fnWlHT%2BEIvYkAKHt8tFHmAq4gj2xJA4s1T6wNmBQIKaHWHGHHYwATs3Zt2HZeDoxyuXjgls46mtvNLte6h%2FUntmaoCKashOcYzV%2Bn6AE2GsGRoYGajkHLTI5Y%2F1pRncAYkpGkARzaZOSMp5%2BWXjaTWvf0cZ3%2BqR6dQ4rLuz4IqVolg63IuvMQGKtt2LvacpscPnTMlqTadhs9j5Vv8wiBdrQPNGzzMRoy1BG6lRosxENZD1XCXRagIj43mdnV6u3%2B6te1xE1UUHBNNv3qBq8HFHWDrmDJfDEM3zBsKzyLm3k8DB25OPp1%2FKZ%2FhpDobtYURWzD5BDuVuFGjm3Mw7ZlPSZqKsn3DK4M7vxU6RJ%2FzPs%2BIPFBZ0coFnZOk%2FgcsB1sUStc%2F18bZqZiGf5WdJ%2F%2F6zk5lzLzusyyH5Dqo%2BhWKdeh%2F5jGYXEU4rZkGfue9kkl%2F5mI9yn4SZpLYJ6SYoXfPc4hP27Heey73m5eFcN4V9LKU9a6ovWHsE4O7GqrRAIGsQkSvyuJjYyxWPeLgAZSIkiX5KJlnyi3kEGFZ1FTnl0FM85ejsf3pMLa0ncQGOqUBwUFclzTvfi%2FyEnaGh09TkHZVD%2F%2BFCGjmmHXQb6N8Sc4FAQu1jJ134SoGnqlOCGizHaC3WnlXSmq5HvIlthXJ1azfNpl4XfLTusFaFS3aPRjXHc6%2Fh%2FwcEib8VtwTM1sNfVO5U58UjYIjt2wH4KFn%2Bt6rK2Z2x8zryMJGI1FG98JYWB7wh4zW%2FlP5LBljuyqfHKrUR7Rpd5llHgWvBhxLXqA%2BhkG8&X-Amz-Signature=e918c0bcd9e25badfe0729dfdeb4a1aedd144f8475c2b05b079a041c9647270d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TXG5BN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBq78Cvxc0G6r0azHR3ons6DFtD9tWdOjg4Xj0RTWKdWAiEAxuuXCNVuPWgQOMHdvStB1emOIKa8rQoVvWDxTHoEsw0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7zA1wVZMZUnrzoBircA7YcEDOKwAZp0JlSjvwKgnP5AZlh%2FzPDRPoLWJdM1y0o1iFVh%2BT7sWPZG%2BFDaEikRCTsf2fnWlHT%2BEIvYkAKHt8tFHmAq4gj2xJA4s1T6wNmBQIKaHWHGHHYwATs3Zt2HZeDoxyuXjgls46mtvNLte6h%2FUntmaoCKashOcYzV%2Bn6AE2GsGRoYGajkHLTI5Y%2F1pRncAYkpGkARzaZOSMp5%2BWXjaTWvf0cZ3%2BqR6dQ4rLuz4IqVolg63IuvMQGKtt2LvacpscPnTMlqTadhs9j5Vv8wiBdrQPNGzzMRoy1BG6lRosxENZD1XCXRagIj43mdnV6u3%2B6te1xE1UUHBNNv3qBq8HFHWDrmDJfDEM3zBsKzyLm3k8DB25OPp1%2FKZ%2FhpDobtYURWzD5BDuVuFGjm3Mw7ZlPSZqKsn3DK4M7vxU6RJ%2FzPs%2BIPFBZ0coFnZOk%2FgcsB1sUStc%2F18bZqZiGf5WdJ%2F%2F6zk5lzLzusyyH5Dqo%2BhWKdeh%2F5jGYXEU4rZkGfue9kkl%2F5mI9yn4SZpLYJ6SYoXfPc4hP27Heey73m5eFcN4V9LKU9a6ovWHsE4O7GqrRAIGsQkSvyuJjYyxWPeLgAZSIkiX5KJlnyi3kEGFZ1FTnl0FM85ejsf3pMLa0ncQGOqUBwUFclzTvfi%2FyEnaGh09TkHZVD%2F%2BFCGjmmHXQb6N8Sc4FAQu1jJ134SoGnqlOCGizHaC3WnlXSmq5HvIlthXJ1azfNpl4XfLTusFaFS3aPRjXHc6%2Fh%2FwcEib8VtwTM1sNfVO5U58UjYIjt2wH4KFn%2Bt6rK2Z2x8zryMJGI1FG98JYWB7wh4zW%2FlP5LBljuyqfHKrUR7Rpd5llHgWvBhxLXqA%2BhkG8&X-Amz-Signature=5b3a5a9486e777bed31c4cf4f8a6ba782c57f29b6d636343047be6a3c732d8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
