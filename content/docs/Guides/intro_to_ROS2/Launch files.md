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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLERT67I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCS8%2Bv%2FYA8slEZlh9ttFUlyJXzPdIRBqrlHMqQlBrDP2AIgAn6utrdhOQLfid5tUXZWqTgBN7u3xkR9yPwQ%2FlFsTsYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh9CxsRNqY3cH9VMCrcA3zLvaS4LjPIE4HWodukcwqPzm59QfkuTBByKQj1Xpdq8zfj4OK0tMb59DGqy2%2FIOEzQynYICKHD14VH0e%2BMVCLUvX2ZsSK5ulWCHQ8oQ7cs45y%2F%2FtdFJzsDrMMNpkvIe4%2FdtDaEwYnQ%2B7E1j06KoLsmfI4k6Tg%2FQm0blomTcT%2FS0ozc6hxe7SyRAQptCrWM%2BW2zYkt%2BC2cjvPT7rPmn6bI%2B2nrVkS0ahI08OjCWF7Nk7laYF6MmUFPR14LitcA91BxwLBEn%2BdDSqObxzcvPoe9R6foleQthq%2BvOuvrLlTgFqna5X9aDAFIsiavSXrh3IdPcrPSe2C4m69Y5SHb9lK68nMTmVdOYYGVQWc6tkyx%2FonUYp4kb3ZZCS9laoa4YtefwSW%2B0qo0BJJdIYFjIyFxIlqVQMgtIDgW%2B33ck40cnZMQrFwvPzl9j1kZzmVME4PoZG3t4RnYApCHcGgrzZVFYyTEqWiKrhzlEfG1I3uac5XxkUgRfpjOJhRep%2Bk0pjyKmF767J%2FwvD%2BrsYUFffimq57YUrJpzVP4ulDNjQSeCDJIDb12B92HubUIbSQYB%2F%2BzpHx6GiwJdgnPqACFRv8zdRoUPgEw%2FvMw6%2BtXcq3pJyH0RPIZrDGh9JW29MM7I0MQGOqUBmyMFuLnBR1pLh810TMgGgYCOfmNj2F5ONfonVlzfg%2FhZcJvk3f9FPYT0Se6q4hcPbzKEOmQ%2FSTgCzlsac8QyMjo3cj8dSHYw9xqXiz%2FFa%2B%2F9xytJ%2BcEewRL8LQxEaJKFQs3Dtsvu07gN%2BtlAdq7xTxNlK4ZeZNZvFfxEVf9NgXBMLHXHaAPUvNdYHL10zZ0a2svAChpxwtWNzqNx9oAsQ8jfTVXl&X-Amz-Signature=0755e99b3b1ae77a3f4f72053cd89b778e0824e4b3e977f0fda86c465b35b663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLERT67I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCS8%2Bv%2FYA8slEZlh9ttFUlyJXzPdIRBqrlHMqQlBrDP2AIgAn6utrdhOQLfid5tUXZWqTgBN7u3xkR9yPwQ%2FlFsTsYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh9CxsRNqY3cH9VMCrcA3zLvaS4LjPIE4HWodukcwqPzm59QfkuTBByKQj1Xpdq8zfj4OK0tMb59DGqy2%2FIOEzQynYICKHD14VH0e%2BMVCLUvX2ZsSK5ulWCHQ8oQ7cs45y%2F%2FtdFJzsDrMMNpkvIe4%2FdtDaEwYnQ%2B7E1j06KoLsmfI4k6Tg%2FQm0blomTcT%2FS0ozc6hxe7SyRAQptCrWM%2BW2zYkt%2BC2cjvPT7rPmn6bI%2B2nrVkS0ahI08OjCWF7Nk7laYF6MmUFPR14LitcA91BxwLBEn%2BdDSqObxzcvPoe9R6foleQthq%2BvOuvrLlTgFqna5X9aDAFIsiavSXrh3IdPcrPSe2C4m69Y5SHb9lK68nMTmVdOYYGVQWc6tkyx%2FonUYp4kb3ZZCS9laoa4YtefwSW%2B0qo0BJJdIYFjIyFxIlqVQMgtIDgW%2B33ck40cnZMQrFwvPzl9j1kZzmVME4PoZG3t4RnYApCHcGgrzZVFYyTEqWiKrhzlEfG1I3uac5XxkUgRfpjOJhRep%2Bk0pjyKmF767J%2FwvD%2BrsYUFffimq57YUrJpzVP4ulDNjQSeCDJIDb12B92HubUIbSQYB%2F%2BzpHx6GiwJdgnPqACFRv8zdRoUPgEw%2FvMw6%2BtXcq3pJyH0RPIZrDGh9JW29MM7I0MQGOqUBmyMFuLnBR1pLh810TMgGgYCOfmNj2F5ONfonVlzfg%2FhZcJvk3f9FPYT0Se6q4hcPbzKEOmQ%2FSTgCzlsac8QyMjo3cj8dSHYw9xqXiz%2FFa%2B%2F9xytJ%2BcEewRL8LQxEaJKFQs3Dtsvu07gN%2BtlAdq7xTxNlK4ZeZNZvFfxEVf9NgXBMLHXHaAPUvNdYHL10zZ0a2svAChpxwtWNzqNx9oAsQ8jfTVXl&X-Amz-Signature=862ef192b931f667c666d2b979e57c0dac1af5ba2f6c26b0e73ea0a00a657990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLERT67I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCS8%2Bv%2FYA8slEZlh9ttFUlyJXzPdIRBqrlHMqQlBrDP2AIgAn6utrdhOQLfid5tUXZWqTgBN7u3xkR9yPwQ%2FlFsTsYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh9CxsRNqY3cH9VMCrcA3zLvaS4LjPIE4HWodukcwqPzm59QfkuTBByKQj1Xpdq8zfj4OK0tMb59DGqy2%2FIOEzQynYICKHD14VH0e%2BMVCLUvX2ZsSK5ulWCHQ8oQ7cs45y%2F%2FtdFJzsDrMMNpkvIe4%2FdtDaEwYnQ%2B7E1j06KoLsmfI4k6Tg%2FQm0blomTcT%2FS0ozc6hxe7SyRAQptCrWM%2BW2zYkt%2BC2cjvPT7rPmn6bI%2B2nrVkS0ahI08OjCWF7Nk7laYF6MmUFPR14LitcA91BxwLBEn%2BdDSqObxzcvPoe9R6foleQthq%2BvOuvrLlTgFqna5X9aDAFIsiavSXrh3IdPcrPSe2C4m69Y5SHb9lK68nMTmVdOYYGVQWc6tkyx%2FonUYp4kb3ZZCS9laoa4YtefwSW%2B0qo0BJJdIYFjIyFxIlqVQMgtIDgW%2B33ck40cnZMQrFwvPzl9j1kZzmVME4PoZG3t4RnYApCHcGgrzZVFYyTEqWiKrhzlEfG1I3uac5XxkUgRfpjOJhRep%2Bk0pjyKmF767J%2FwvD%2BrsYUFffimq57YUrJpzVP4ulDNjQSeCDJIDb12B92HubUIbSQYB%2F%2BzpHx6GiwJdgnPqACFRv8zdRoUPgEw%2FvMw6%2BtXcq3pJyH0RPIZrDGh9JW29MM7I0MQGOqUBmyMFuLnBR1pLh810TMgGgYCOfmNj2F5ONfonVlzfg%2FhZcJvk3f9FPYT0Se6q4hcPbzKEOmQ%2FSTgCzlsac8QyMjo3cj8dSHYw9xqXiz%2FFa%2B%2F9xytJ%2BcEewRL8LQxEaJKFQs3Dtsvu07gN%2BtlAdq7xTxNlK4ZeZNZvFfxEVf9NgXBMLHXHaAPUvNdYHL10zZ0a2svAChpxwtWNzqNx9oAsQ8jfTVXl&X-Amz-Signature=54f1ef2e8a2a29fe778a4045dcbcf34ffc8f9320cf93f805b32c4d73a9aea8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
