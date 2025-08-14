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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26MBUDB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnCfdNlxzDaE9XlR6LV21iyVB3%2BiIJEMrdXspI%2FX1V0wIhAISqc1cbGKbFAq4EXtcWMBmfznorOzdAjcHgYe3vEBpyKv8DCEAQABoMNjM3NDIzMTgzODA1Igx7eZW2lGJfydzXgQ0q3AOWV0%2Frwy7khR25f4c5lO%2BIy8ZojGbOEkVsTBfdnuFOlY1tsHV%2BsgIaqKlXGPCVlj6IM0b9ZpkKXaxppZb3%2BOVksQljwbdvHBObja4g8GLQA1ahPX62CO2romJQVm25Kx3AnF492U2y5z6wvvXy9R65Qbx%2F2ThOilvDb8kME2U3zl1DXgQxE8oTsv9wbNt8c37yMfVmUdvHDWfEF7XNNWZtBCRzFy2g9sVYkmnKkpqn8KM6gbSWca9qDMeo%2Fno0QUJpMc%2FBAD8fSo9zMMJr7xbvW64mcb8hy9FQBdI8DWZUYq004pqUn7K%2Bv2BRyKkk9UzlQ%2BzTJefWwPJOZ036pSB4eySdBFze6Z%2BP4ZUcesM3%2BGBpJyK6hAz1w9zr5W%2BfgqOM6yD1W%2FXGhkAs0Os5TnEdfy6DzqGQ7rz%2BJ0O8cpMV%2Fi97Y1wwYHsKOAVOEhJJp4eDkG4qeaTlvTse2Rod%2FzVlTmbDjHzAs7P7AwrJqSl2xewPyhbSaZVC2mdC%2BuHRnjw5nbcJgZgmlPKYr5x01UPVQWDrli4SRHoJ5ra4508BIHdnL33sGx%2B3kFsQXftCuWZc4nZC2PYCZ2GgisKWBf%2BcRXSXiFXGbBTe1E2pOyFlX92c6vPQ2Hg5dogDKTDPifbEBjqkAQSzeCfhqgNtxZbnXc6gJYSv5l%2FDfhY6YENiTRPVlVbmMbpVHLB%2FYSrd0plfc2qlSWWP%2BIOXJ9I96fm7Auaztc%2BwzQO48ni4zXQsY4yB1VltVK4oi9Q6LsSJnu6i%2BXKQ7OK4JCHdXkFtDY2qa92jn2ixewymq6euOFhXmbkZMhMXnYdMVZ%2FiFmSz%2Bc3%2F37GqCud5a1jPiddtok6BOsibqyB0Cgv%2B&X-Amz-Signature=3c2f2e5f82592e0c1163c5bd25c473530a98a0ac53b12f741b1fd72d2f3af3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26MBUDB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnCfdNlxzDaE9XlR6LV21iyVB3%2BiIJEMrdXspI%2FX1V0wIhAISqc1cbGKbFAq4EXtcWMBmfznorOzdAjcHgYe3vEBpyKv8DCEAQABoMNjM3NDIzMTgzODA1Igx7eZW2lGJfydzXgQ0q3AOWV0%2Frwy7khR25f4c5lO%2BIy8ZojGbOEkVsTBfdnuFOlY1tsHV%2BsgIaqKlXGPCVlj6IM0b9ZpkKXaxppZb3%2BOVksQljwbdvHBObja4g8GLQA1ahPX62CO2romJQVm25Kx3AnF492U2y5z6wvvXy9R65Qbx%2F2ThOilvDb8kME2U3zl1DXgQxE8oTsv9wbNt8c37yMfVmUdvHDWfEF7XNNWZtBCRzFy2g9sVYkmnKkpqn8KM6gbSWca9qDMeo%2Fno0QUJpMc%2FBAD8fSo9zMMJr7xbvW64mcb8hy9FQBdI8DWZUYq004pqUn7K%2Bv2BRyKkk9UzlQ%2BzTJefWwPJOZ036pSB4eySdBFze6Z%2BP4ZUcesM3%2BGBpJyK6hAz1w9zr5W%2BfgqOM6yD1W%2FXGhkAs0Os5TnEdfy6DzqGQ7rz%2BJ0O8cpMV%2Fi97Y1wwYHsKOAVOEhJJp4eDkG4qeaTlvTse2Rod%2FzVlTmbDjHzAs7P7AwrJqSl2xewPyhbSaZVC2mdC%2BuHRnjw5nbcJgZgmlPKYr5x01UPVQWDrli4SRHoJ5ra4508BIHdnL33sGx%2B3kFsQXftCuWZc4nZC2PYCZ2GgisKWBf%2BcRXSXiFXGbBTe1E2pOyFlX92c6vPQ2Hg5dogDKTDPifbEBjqkAQSzeCfhqgNtxZbnXc6gJYSv5l%2FDfhY6YENiTRPVlVbmMbpVHLB%2FYSrd0plfc2qlSWWP%2BIOXJ9I96fm7Auaztc%2BwzQO48ni4zXQsY4yB1VltVK4oi9Q6LsSJnu6i%2BXKQ7OK4JCHdXkFtDY2qa92jn2ixewymq6euOFhXmbkZMhMXnYdMVZ%2FiFmSz%2Bc3%2F37GqCud5a1jPiddtok6BOsibqyB0Cgv%2B&X-Amz-Signature=7c0475ba2faf32f6d864811bc22437072dc054c27fdcafccf97ad71ef813c2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26MBUDB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnCfdNlxzDaE9XlR6LV21iyVB3%2BiIJEMrdXspI%2FX1V0wIhAISqc1cbGKbFAq4EXtcWMBmfznorOzdAjcHgYe3vEBpyKv8DCEAQABoMNjM3NDIzMTgzODA1Igx7eZW2lGJfydzXgQ0q3AOWV0%2Frwy7khR25f4c5lO%2BIy8ZojGbOEkVsTBfdnuFOlY1tsHV%2BsgIaqKlXGPCVlj6IM0b9ZpkKXaxppZb3%2BOVksQljwbdvHBObja4g8GLQA1ahPX62CO2romJQVm25Kx3AnF492U2y5z6wvvXy9R65Qbx%2F2ThOilvDb8kME2U3zl1DXgQxE8oTsv9wbNt8c37yMfVmUdvHDWfEF7XNNWZtBCRzFy2g9sVYkmnKkpqn8KM6gbSWca9qDMeo%2Fno0QUJpMc%2FBAD8fSo9zMMJr7xbvW64mcb8hy9FQBdI8DWZUYq004pqUn7K%2Bv2BRyKkk9UzlQ%2BzTJefWwPJOZ036pSB4eySdBFze6Z%2BP4ZUcesM3%2BGBpJyK6hAz1w9zr5W%2BfgqOM6yD1W%2FXGhkAs0Os5TnEdfy6DzqGQ7rz%2BJ0O8cpMV%2Fi97Y1wwYHsKOAVOEhJJp4eDkG4qeaTlvTse2Rod%2FzVlTmbDjHzAs7P7AwrJqSl2xewPyhbSaZVC2mdC%2BuHRnjw5nbcJgZgmlPKYr5x01UPVQWDrli4SRHoJ5ra4508BIHdnL33sGx%2B3kFsQXftCuWZc4nZC2PYCZ2GgisKWBf%2BcRXSXiFXGbBTe1E2pOyFlX92c6vPQ2Hg5dogDKTDPifbEBjqkAQSzeCfhqgNtxZbnXc6gJYSv5l%2FDfhY6YENiTRPVlVbmMbpVHLB%2FYSrd0plfc2qlSWWP%2BIOXJ9I96fm7Auaztc%2BwzQO48ni4zXQsY4yB1VltVK4oi9Q6LsSJnu6i%2BXKQ7OK4JCHdXkFtDY2qa92jn2ixewymq6euOFhXmbkZMhMXnYdMVZ%2FiFmSz%2Bc3%2F37GqCud5a1jPiddtok6BOsibqyB0Cgv%2B&X-Amz-Signature=46a4fb836ed48b3e08ac7630feab41add7ae81bf957a9bbf81d6142022a99eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
