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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VTYWN4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2Bb3PowlcQTycnI6ta8pjOwE7%2FX8E95RJ5u7mXR2uqAiEApItslgKfoXXmtiRbmEJbiQWQ%2FpwxxQ9vkwvYxHzNrYUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL94MolZ3fHIwsXkJSrcA9O35VddR6Eg81l6L2h7YUfXn3S5Q9Oz%2BrLCKKUdPrxZH54s%2FCS%2F%2Fhf5v5lkoJN5U5nKCwdfFvf1wwqGIhE1iiTQEsw0wzTCP9M2sgL4Nhw2tkOLIBBxX8natwVrK0fICXSoQ%2Bz2jg3j27TNz7XSBlQ7scVk4cJGn9gi1Ho6ed8ULijN2jYWjDWM1GdZeVFctuVN2ahCdOrmMI7t4yS%2FsxZcULOs%2BCTx%2BtjHmuR7deV1NP%2B3DCW9yjQIMVrxRdINI3tAzPVq86Zvdd3fk%2FE7I6OS%2F1%2FQZ%2F7GO%2BFsv33EHoiyk%2BF1%2BiJupcgxMs9olWRxgP173jW99yiuQa8It%2FtnnoPA26HsEbWUMAOis%2B32QBL3ziP%2FSoV2nnyW0S4n1x7ogXdcF%2F2oSSHSzpHddofmsXz%2F6TTylNIFpk1EsRjjuZdHLyUGkxf037rdhd60uLP78QVYCCE8KiSfSfeWUFf%2FEl3C4F2NcQ6K5%2FEmcEnJ%2FRR9nOMI51kqovdJktvXjIFPr2rwZqdTJp2QJ1h4zLG0HXe5nv7DDjqEsc7jI8HKd7jJD1YQ44h6bio%2BtjBoA3S96Ya1RtomXn7lEl3raXLO4XdYBhI7lcRuWBeMQZ3UMGOvgqSfuZH%2B6ACaM7KAMOO648QGOqUBM4FXSGKc%2BSLs8Q5qsjhwMy%2F7K3MYgg%2FwSf0WHLryKBbYPKa1AsMBbTUykHg%2BaPK2lcdFVez3tcvQtg1SU6Dol%2FBzqHhC4dvHj8Rav4Un36FJHQWqJYG%2B%2Fy9o4Umb3IrlrI5%2FINuJn1YXZlNHtzu5OUV%2Fn1FPU8t05PyuhtsftTKTBBKDEzrNCnw2k1RKViJST6yjatX%2BbCY7PD7hfi4ptbNoXh%2BB&X-Amz-Signature=d5e07ed53c41cd17e9939824429d2a3c029d81ebd05d0ee28813c99ae20e2061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VTYWN4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2Bb3PowlcQTycnI6ta8pjOwE7%2FX8E95RJ5u7mXR2uqAiEApItslgKfoXXmtiRbmEJbiQWQ%2FpwxxQ9vkwvYxHzNrYUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL94MolZ3fHIwsXkJSrcA9O35VddR6Eg81l6L2h7YUfXn3S5Q9Oz%2BrLCKKUdPrxZH54s%2FCS%2F%2Fhf5v5lkoJN5U5nKCwdfFvf1wwqGIhE1iiTQEsw0wzTCP9M2sgL4Nhw2tkOLIBBxX8natwVrK0fICXSoQ%2Bz2jg3j27TNz7XSBlQ7scVk4cJGn9gi1Ho6ed8ULijN2jYWjDWM1GdZeVFctuVN2ahCdOrmMI7t4yS%2FsxZcULOs%2BCTx%2BtjHmuR7deV1NP%2B3DCW9yjQIMVrxRdINI3tAzPVq86Zvdd3fk%2FE7I6OS%2F1%2FQZ%2F7GO%2BFsv33EHoiyk%2BF1%2BiJupcgxMs9olWRxgP173jW99yiuQa8It%2FtnnoPA26HsEbWUMAOis%2B32QBL3ziP%2FSoV2nnyW0S4n1x7ogXdcF%2F2oSSHSzpHddofmsXz%2F6TTylNIFpk1EsRjjuZdHLyUGkxf037rdhd60uLP78QVYCCE8KiSfSfeWUFf%2FEl3C4F2NcQ6K5%2FEmcEnJ%2FRR9nOMI51kqovdJktvXjIFPr2rwZqdTJp2QJ1h4zLG0HXe5nv7DDjqEsc7jI8HKd7jJD1YQ44h6bio%2BtjBoA3S96Ya1RtomXn7lEl3raXLO4XdYBhI7lcRuWBeMQZ3UMGOvgqSfuZH%2B6ACaM7KAMOO648QGOqUBM4FXSGKc%2BSLs8Q5qsjhwMy%2F7K3MYgg%2FwSf0WHLryKBbYPKa1AsMBbTUykHg%2BaPK2lcdFVez3tcvQtg1SU6Dol%2FBzqHhC4dvHj8Rav4Un36FJHQWqJYG%2B%2Fy9o4Umb3IrlrI5%2FINuJn1YXZlNHtzu5OUV%2Fn1FPU8t05PyuhtsftTKTBBKDEzrNCnw2k1RKViJST6yjatX%2BbCY7PD7hfi4ptbNoXh%2BB&X-Amz-Signature=6412ba3cbf1c8359d6fb7a3506cae2e0d89d3b65bcb2ae35cf763e9fec40e698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VTYWN4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2Bb3PowlcQTycnI6ta8pjOwE7%2FX8E95RJ5u7mXR2uqAiEApItslgKfoXXmtiRbmEJbiQWQ%2FpwxxQ9vkwvYxHzNrYUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL94MolZ3fHIwsXkJSrcA9O35VddR6Eg81l6L2h7YUfXn3S5Q9Oz%2BrLCKKUdPrxZH54s%2FCS%2F%2Fhf5v5lkoJN5U5nKCwdfFvf1wwqGIhE1iiTQEsw0wzTCP9M2sgL4Nhw2tkOLIBBxX8natwVrK0fICXSoQ%2Bz2jg3j27TNz7XSBlQ7scVk4cJGn9gi1Ho6ed8ULijN2jYWjDWM1GdZeVFctuVN2ahCdOrmMI7t4yS%2FsxZcULOs%2BCTx%2BtjHmuR7deV1NP%2B3DCW9yjQIMVrxRdINI3tAzPVq86Zvdd3fk%2FE7I6OS%2F1%2FQZ%2F7GO%2BFsv33EHoiyk%2BF1%2BiJupcgxMs9olWRxgP173jW99yiuQa8It%2FtnnoPA26HsEbWUMAOis%2B32QBL3ziP%2FSoV2nnyW0S4n1x7ogXdcF%2F2oSSHSzpHddofmsXz%2F6TTylNIFpk1EsRjjuZdHLyUGkxf037rdhd60uLP78QVYCCE8KiSfSfeWUFf%2FEl3C4F2NcQ6K5%2FEmcEnJ%2FRR9nOMI51kqovdJktvXjIFPr2rwZqdTJp2QJ1h4zLG0HXe5nv7DDjqEsc7jI8HKd7jJD1YQ44h6bio%2BtjBoA3S96Ya1RtomXn7lEl3raXLO4XdYBhI7lcRuWBeMQZ3UMGOvgqSfuZH%2B6ACaM7KAMOO648QGOqUBM4FXSGKc%2BSLs8Q5qsjhwMy%2F7K3MYgg%2FwSf0WHLryKBbYPKa1AsMBbTUykHg%2BaPK2lcdFVez3tcvQtg1SU6Dol%2FBzqHhC4dvHj8Rav4Un36FJHQWqJYG%2B%2Fy9o4Umb3IrlrI5%2FINuJn1YXZlNHtzu5OUV%2Fn1FPU8t05PyuhtsftTKTBBKDEzrNCnw2k1RKViJST6yjatX%2BbCY7PD7hfi4ptbNoXh%2BB&X-Amz-Signature=8d62bd4c5e8f13000a1883afd03fc9f7a5009792c493af6c94f5d9df636d8824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
