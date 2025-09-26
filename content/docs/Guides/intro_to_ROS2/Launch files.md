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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZ7WOEI%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbhgGd2cM4xb%2B9ER8v5Gpn54sJPVR%2FyINT0oIoUWcc4AIhANN4TDebpkThmUL81CdPCgcgtRIpcVELNlyLafnVeWe%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7w%2FwWw%2FUXSfWRZYq3APpznjIAKw4%2FEFqdX%2FfjBt43UlgPaogA6vpidPoBFdXrGS%2BOmXxlDybalOd7nL42KPRTCF18m3aBt1jreHPuqtUKPrNtzEbx3nimmyGdyqSP3qEB%2B%2BGdkxck6gT%2FlKKR67cPDgVft1eWnmxMGsMVb0KeYKHKF%2FKBebcU7I0K3zYgb5iuFZqjlrDpEZ6MG0fZ2d6ucRxZCXiD050AVJ0Q7j9es6PCWMX9FR8aeaoNZDzq1zxHJ7lMfC%2Fs87cDVwiZqDE3p17LO9yIBC0RTtmF0gFliGnxUpydiIA0k4T93d1eReFyqvsJIpCYe30DCm7TaIBihTwKhxEHNKgjeC8Jvk7PxF1lXAfmExUtYotsQdaNSWwwfRNRH6G7MIAoLoqOQVTwHaicI%2BP%2BVy338Jt7rHf2H4AEDhyEEcooj9XsBBZF7zJK9xecniiYycSfPhN6%2BFDiBKSX3RZY4fUNmSZNMWsqsNAluJNasLqkb2FDa1947pcsLE9gI0YiMhVADe69U3ji8Rd4d%2FTQJrsljoB7cpPJnt4gg48BzGDUMqwC0KEgrSr4hwJ%2BbegxJeTw83ZG4TM%2BOGhQ1MTG3Xy2r6DoejEDZEs2m43I9GNiM0%2Bd0gsWInLz9lMH%2FbVZg%2FKeTCcqNfGBjqkASL8ovjya8Bemk6EQ0HYnCSZUoUslakDzvVKLkKEjXlStRAC40xRJRfBWFFgH%2BIXTHCCkaW24RpckrCzl2PL2Y27UVM25CaDHVXSqBelgZNQJTWlXkv4joEaw52nbbaKRqVMC%2FiXKq7MiB6z8lr5NkCQKzemLcv7cGXvnBflUjzn1newoZ3J7oMecYdbgWHD2bD4Snc9zeOYyjFMYjEB9ZFPjDUD&X-Amz-Signature=652da34435a0f644ef64c13f0536b8ca45c5b0ca74b3b8a14a58d29769420e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZ7WOEI%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbhgGd2cM4xb%2B9ER8v5Gpn54sJPVR%2FyINT0oIoUWcc4AIhANN4TDebpkThmUL81CdPCgcgtRIpcVELNlyLafnVeWe%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7w%2FwWw%2FUXSfWRZYq3APpznjIAKw4%2FEFqdX%2FfjBt43UlgPaogA6vpidPoBFdXrGS%2BOmXxlDybalOd7nL42KPRTCF18m3aBt1jreHPuqtUKPrNtzEbx3nimmyGdyqSP3qEB%2B%2BGdkxck6gT%2FlKKR67cPDgVft1eWnmxMGsMVb0KeYKHKF%2FKBebcU7I0K3zYgb5iuFZqjlrDpEZ6MG0fZ2d6ucRxZCXiD050AVJ0Q7j9es6PCWMX9FR8aeaoNZDzq1zxHJ7lMfC%2Fs87cDVwiZqDE3p17LO9yIBC0RTtmF0gFliGnxUpydiIA0k4T93d1eReFyqvsJIpCYe30DCm7TaIBihTwKhxEHNKgjeC8Jvk7PxF1lXAfmExUtYotsQdaNSWwwfRNRH6G7MIAoLoqOQVTwHaicI%2BP%2BVy338Jt7rHf2H4AEDhyEEcooj9XsBBZF7zJK9xecniiYycSfPhN6%2BFDiBKSX3RZY4fUNmSZNMWsqsNAluJNasLqkb2FDa1947pcsLE9gI0YiMhVADe69U3ji8Rd4d%2FTQJrsljoB7cpPJnt4gg48BzGDUMqwC0KEgrSr4hwJ%2BbegxJeTw83ZG4TM%2BOGhQ1MTG3Xy2r6DoejEDZEs2m43I9GNiM0%2Bd0gsWInLz9lMH%2FbVZg%2FKeTCcqNfGBjqkASL8ovjya8Bemk6EQ0HYnCSZUoUslakDzvVKLkKEjXlStRAC40xRJRfBWFFgH%2BIXTHCCkaW24RpckrCzl2PL2Y27UVM25CaDHVXSqBelgZNQJTWlXkv4joEaw52nbbaKRqVMC%2FiXKq7MiB6z8lr5NkCQKzemLcv7cGXvnBflUjzn1newoZ3J7oMecYdbgWHD2bD4Snc9zeOYyjFMYjEB9ZFPjDUD&X-Amz-Signature=5a231981951028f8cf46207272f1181bd7e67c087aebf480064b976280ecb745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZ7WOEI%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbhgGd2cM4xb%2B9ER8v5Gpn54sJPVR%2FyINT0oIoUWcc4AIhANN4TDebpkThmUL81CdPCgcgtRIpcVELNlyLafnVeWe%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7w%2FwWw%2FUXSfWRZYq3APpznjIAKw4%2FEFqdX%2FfjBt43UlgPaogA6vpidPoBFdXrGS%2BOmXxlDybalOd7nL42KPRTCF18m3aBt1jreHPuqtUKPrNtzEbx3nimmyGdyqSP3qEB%2B%2BGdkxck6gT%2FlKKR67cPDgVft1eWnmxMGsMVb0KeYKHKF%2FKBebcU7I0K3zYgb5iuFZqjlrDpEZ6MG0fZ2d6ucRxZCXiD050AVJ0Q7j9es6PCWMX9FR8aeaoNZDzq1zxHJ7lMfC%2Fs87cDVwiZqDE3p17LO9yIBC0RTtmF0gFliGnxUpydiIA0k4T93d1eReFyqvsJIpCYe30DCm7TaIBihTwKhxEHNKgjeC8Jvk7PxF1lXAfmExUtYotsQdaNSWwwfRNRH6G7MIAoLoqOQVTwHaicI%2BP%2BVy338Jt7rHf2H4AEDhyEEcooj9XsBBZF7zJK9xecniiYycSfPhN6%2BFDiBKSX3RZY4fUNmSZNMWsqsNAluJNasLqkb2FDa1947pcsLE9gI0YiMhVADe69U3ji8Rd4d%2FTQJrsljoB7cpPJnt4gg48BzGDUMqwC0KEgrSr4hwJ%2BbegxJeTw83ZG4TM%2BOGhQ1MTG3Xy2r6DoejEDZEs2m43I9GNiM0%2Bd0gsWInLz9lMH%2FbVZg%2FKeTCcqNfGBjqkASL8ovjya8Bemk6EQ0HYnCSZUoUslakDzvVKLkKEjXlStRAC40xRJRfBWFFgH%2BIXTHCCkaW24RpckrCzl2PL2Y27UVM25CaDHVXSqBelgZNQJTWlXkv4joEaw52nbbaKRqVMC%2FiXKq7MiB6z8lr5NkCQKzemLcv7cGXvnBflUjzn1newoZ3J7oMecYdbgWHD2bD4Snc9zeOYyjFMYjEB9ZFPjDUD&X-Amz-Signature=102b285cb629cadefce2d6dac9215fa30f65a1e3837e3e9dca459a087956e1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
