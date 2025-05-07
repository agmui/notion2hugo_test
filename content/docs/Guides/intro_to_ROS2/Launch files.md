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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U45KOCT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV5DzrNoDln8xw3HQdCg%2Fy%2BSobsQ6nqJ42cV0Z8YZ%2BoQIgFhng5OFZ0x8Zd%2FtmW61V%2F9YW6JZFdVd59N6sKCCvBsAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDL12U2v5YPMMKBya1ircA1sHHX0mUlaSQsFOc%2B83adacg%2B0Qo6fH%2BxZPhlhFud%2FnZ5B03mLPpe6osYxw4SFpZVnYsCuuzjmvnKve3lq6sGnxIZ2nTe1L0Fpo7K3zAksiOSc2kqtw%2BKj611%2B4YhzunpZh7KyJlJ%2Bg1P6zgRmGO7e7BIBfjXwaX3V5760tEU94V6PE%2B4ra5UTJ3ofma8R3QyJYUKlQ0YVmTgek0axhfQiv5CmbRQHX33GWQ%2BnfVxEgCXC6%2FuMHrvapMDlKW4pi1%2BITTs8xUShOa1XBj5KgFi5AV6eyHY31Bmdy%2F39Df%2F4q0xiKpbePWiGT8cy5EHQAD2vdDzO%2FXFrRytUmn1mZoyD9K5NxSWO3Ls1aoqm6xYryk8y8EslBBA%2FA91GZejnsHofOII7OumlGqJRo5%2F7t0jUqDNBx4Jbu101xzgzebRr0W5ZP%2BtL%2Fppw6ELVKMomtetUt%2BMElUPc%2F8r6o6ft40g%2Ffgb4%2FDRvy0vgqAgGxPDnXVaI1x4lfOUFFGDlsyd%2FhkU3cqsRcJSK75jmS%2BW0GFih6XrR5oCWZusvtWWaAzoDyjZb2l9WRSIwm90CzGVF0o8lQr7asbioLFqLhBa%2FaZTlpkelzvHrQRKAkMMBxK%2B4Tq71eiEKntGpX%2FWIcMMiR68AGOqUBMrZUGpu0jU4T0fr17WUyGvbdtS1F%2BQlYUZmJ7rsyCYFvGT9CLcHDNpqUikDpYa%2F4jMTSMDEfTqv%2B7EvDcKAZOrR0rOy%2F6aV4sStHNnynVUYHtrb1%2BYGOAglC6piMI8cVwA21nq1boDilxyE4BeqWjRh0wiMcVsbjkkF8HPSSrlyETM1T%2F8AdA8KRoAtnPOZyqO%2FmQ1bjStbVu4S9aK5p90e2UFDc&X-Amz-Signature=19f6c7515ea21c79fe4804b49e2a110fbf08cbc4732ad9734593776fb1d9086a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U45KOCT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV5DzrNoDln8xw3HQdCg%2Fy%2BSobsQ6nqJ42cV0Z8YZ%2BoQIgFhng5OFZ0x8Zd%2FtmW61V%2F9YW6JZFdVd59N6sKCCvBsAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDL12U2v5YPMMKBya1ircA1sHHX0mUlaSQsFOc%2B83adacg%2B0Qo6fH%2BxZPhlhFud%2FnZ5B03mLPpe6osYxw4SFpZVnYsCuuzjmvnKve3lq6sGnxIZ2nTe1L0Fpo7K3zAksiOSc2kqtw%2BKj611%2B4YhzunpZh7KyJlJ%2Bg1P6zgRmGO7e7BIBfjXwaX3V5760tEU94V6PE%2B4ra5UTJ3ofma8R3QyJYUKlQ0YVmTgek0axhfQiv5CmbRQHX33GWQ%2BnfVxEgCXC6%2FuMHrvapMDlKW4pi1%2BITTs8xUShOa1XBj5KgFi5AV6eyHY31Bmdy%2F39Df%2F4q0xiKpbePWiGT8cy5EHQAD2vdDzO%2FXFrRytUmn1mZoyD9K5NxSWO3Ls1aoqm6xYryk8y8EslBBA%2FA91GZejnsHofOII7OumlGqJRo5%2F7t0jUqDNBx4Jbu101xzgzebRr0W5ZP%2BtL%2Fppw6ELVKMomtetUt%2BMElUPc%2F8r6o6ft40g%2Ffgb4%2FDRvy0vgqAgGxPDnXVaI1x4lfOUFFGDlsyd%2FhkU3cqsRcJSK75jmS%2BW0GFih6XrR5oCWZusvtWWaAzoDyjZb2l9WRSIwm90CzGVF0o8lQr7asbioLFqLhBa%2FaZTlpkelzvHrQRKAkMMBxK%2B4Tq71eiEKntGpX%2FWIcMMiR68AGOqUBMrZUGpu0jU4T0fr17WUyGvbdtS1F%2BQlYUZmJ7rsyCYFvGT9CLcHDNpqUikDpYa%2F4jMTSMDEfTqv%2B7EvDcKAZOrR0rOy%2F6aV4sStHNnynVUYHtrb1%2BYGOAglC6piMI8cVwA21nq1boDilxyE4BeqWjRh0wiMcVsbjkkF8HPSSrlyETM1T%2F8AdA8KRoAtnPOZyqO%2FmQ1bjStbVu4S9aK5p90e2UFDc&X-Amz-Signature=9eee715cf6749f1e81785a8a9891a3d12cb299c938397d42f308230aa38ec895&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U45KOCT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV5DzrNoDln8xw3HQdCg%2Fy%2BSobsQ6nqJ42cV0Z8YZ%2BoQIgFhng5OFZ0x8Zd%2FtmW61V%2F9YW6JZFdVd59N6sKCCvBsAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDL12U2v5YPMMKBya1ircA1sHHX0mUlaSQsFOc%2B83adacg%2B0Qo6fH%2BxZPhlhFud%2FnZ5B03mLPpe6osYxw4SFpZVnYsCuuzjmvnKve3lq6sGnxIZ2nTe1L0Fpo7K3zAksiOSc2kqtw%2BKj611%2B4YhzunpZh7KyJlJ%2Bg1P6zgRmGO7e7BIBfjXwaX3V5760tEU94V6PE%2B4ra5UTJ3ofma8R3QyJYUKlQ0YVmTgek0axhfQiv5CmbRQHX33GWQ%2BnfVxEgCXC6%2FuMHrvapMDlKW4pi1%2BITTs8xUShOa1XBj5KgFi5AV6eyHY31Bmdy%2F39Df%2F4q0xiKpbePWiGT8cy5EHQAD2vdDzO%2FXFrRytUmn1mZoyD9K5NxSWO3Ls1aoqm6xYryk8y8EslBBA%2FA91GZejnsHofOII7OumlGqJRo5%2F7t0jUqDNBx4Jbu101xzgzebRr0W5ZP%2BtL%2Fppw6ELVKMomtetUt%2BMElUPc%2F8r6o6ft40g%2Ffgb4%2FDRvy0vgqAgGxPDnXVaI1x4lfOUFFGDlsyd%2FhkU3cqsRcJSK75jmS%2BW0GFih6XrR5oCWZusvtWWaAzoDyjZb2l9WRSIwm90CzGVF0o8lQr7asbioLFqLhBa%2FaZTlpkelzvHrQRKAkMMBxK%2B4Tq71eiEKntGpX%2FWIcMMiR68AGOqUBMrZUGpu0jU4T0fr17WUyGvbdtS1F%2BQlYUZmJ7rsyCYFvGT9CLcHDNpqUikDpYa%2F4jMTSMDEfTqv%2B7EvDcKAZOrR0rOy%2F6aV4sStHNnynVUYHtrb1%2BYGOAglC6piMI8cVwA21nq1boDilxyE4BeqWjRh0wiMcVsbjkkF8HPSSrlyETM1T%2F8AdA8KRoAtnPOZyqO%2FmQ1bjStbVu4S9aK5p90e2UFDc&X-Amz-Signature=b83c258a5608fa1eb17f88f2e8dce389f105509d9b7df7312e2b3ec2cbd370ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
