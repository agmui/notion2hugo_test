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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMCNUY7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC5If%2FOjF0N4g6jaQJnJd4bO8zwyfBEBVm2m3rkvYCLiAIhAPXcQ4%2BsXCgogsBYRw%2FKgMDOzt0zAesAjiSB8Bd7rbU8KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwagif8GHswCxNUPdYq3AOyXoE2%2FdaEuLy%2BVe%2BfzPzwrdBHd0ncKrA13gvjv4SaWSRt%2FxrporOKfU2TpXLF5sk%2BrGPFKANDsDVXMP5FLKJF0oAeBy0WunTd7PIOOgyq2E2PgZQVlnh0e%2FBUEUT7cMPdrowNlN6FO7drN96Lcuenbcpyex%2FTgnwdnCumnXG5rMHLFzU2CjEBjRgPRxZN2oCBTHPSJa8yZpAk9F4u2n56bmJoHQtuugPY1IKe%2B1%2BY0mrUm4B0rv2Y1QAmWB0OBmEGoEZ6siFCcLAqe%2FTmwUYuomERVmN999gqUWg5NMlCkIqglSvNTZ1lu0kCzPBwXSzuYFgBZmgvlSzy%2F68QbytfFPQtF1Ut0RY%2FQfACrz%2F%2BqSLGNRUlZS3fnRdcPU7P58Nv9ulqqQYx38nbW1IoS1EgzwOJdrYbxrJ70gHTkaca7xVfn0TjAn3PXDDPPHwJtI9SwxgI1XA6pNLPHAvc3581P07528se9ZtasKqbK1EBOebs4uYAHbKQ1v7LRVYwNwwH2cgbHtAb4%2BqNpykkMyVZEsGeLcu4ycwBYdZG8t9RYfiCaQtrlKdLSnfKtsCeT4wtuNMRVlWl%2BAtL9UQnZN5lGPbqmt0DTVg6gZt6Pb9gqLuU5S5lSkrpXjTYqjDH6onFBjqkAemzbL0XpyeiyXhCG5it%2FZ7TbcRE5KjwKmiEDL3ATxvqQ0%2BJOu9sF9HHw%2B1trnYp3uTc2g7t%2BKHTeuRJfiLAwv3R7xRhLz3jDIv2Z%2F5JErw5n9xPIB2lHvbMHmbcnfbkjI7K%2BAa18JG%2FEDJpclvKQKkmUJoppVr3vViD5uvn6l8uk1sB%2FYW4yzydk%2B4ZOyAm8Ex1UnUuSxEaN0qCY%2BPdgA4XycBm&X-Amz-Signature=b6eccc80953f8e7d51a1904126e8a4e0b20aa484f0422cdff066bd1bb43431c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMCNUY7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC5If%2FOjF0N4g6jaQJnJd4bO8zwyfBEBVm2m3rkvYCLiAIhAPXcQ4%2BsXCgogsBYRw%2FKgMDOzt0zAesAjiSB8Bd7rbU8KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwagif8GHswCxNUPdYq3AOyXoE2%2FdaEuLy%2BVe%2BfzPzwrdBHd0ncKrA13gvjv4SaWSRt%2FxrporOKfU2TpXLF5sk%2BrGPFKANDsDVXMP5FLKJF0oAeBy0WunTd7PIOOgyq2E2PgZQVlnh0e%2FBUEUT7cMPdrowNlN6FO7drN96Lcuenbcpyex%2FTgnwdnCumnXG5rMHLFzU2CjEBjRgPRxZN2oCBTHPSJa8yZpAk9F4u2n56bmJoHQtuugPY1IKe%2B1%2BY0mrUm4B0rv2Y1QAmWB0OBmEGoEZ6siFCcLAqe%2FTmwUYuomERVmN999gqUWg5NMlCkIqglSvNTZ1lu0kCzPBwXSzuYFgBZmgvlSzy%2F68QbytfFPQtF1Ut0RY%2FQfACrz%2F%2BqSLGNRUlZS3fnRdcPU7P58Nv9ulqqQYx38nbW1IoS1EgzwOJdrYbxrJ70gHTkaca7xVfn0TjAn3PXDDPPHwJtI9SwxgI1XA6pNLPHAvc3581P07528se9ZtasKqbK1EBOebs4uYAHbKQ1v7LRVYwNwwH2cgbHtAb4%2BqNpykkMyVZEsGeLcu4ycwBYdZG8t9RYfiCaQtrlKdLSnfKtsCeT4wtuNMRVlWl%2BAtL9UQnZN5lGPbqmt0DTVg6gZt6Pb9gqLuU5S5lSkrpXjTYqjDH6onFBjqkAemzbL0XpyeiyXhCG5it%2FZ7TbcRE5KjwKmiEDL3ATxvqQ0%2BJOu9sF9HHw%2B1trnYp3uTc2g7t%2BKHTeuRJfiLAwv3R7xRhLz3jDIv2Z%2F5JErw5n9xPIB2lHvbMHmbcnfbkjI7K%2BAa18JG%2FEDJpclvKQKkmUJoppVr3vViD5uvn6l8uk1sB%2FYW4yzydk%2B4ZOyAm8Ex1UnUuSxEaN0qCY%2BPdgA4XycBm&X-Amz-Signature=540d3ead75cb6994facab8372979a819246f14451c29a3716f97dcb24edd5a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMCNUY7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC5If%2FOjF0N4g6jaQJnJd4bO8zwyfBEBVm2m3rkvYCLiAIhAPXcQ4%2BsXCgogsBYRw%2FKgMDOzt0zAesAjiSB8Bd7rbU8KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwagif8GHswCxNUPdYq3AOyXoE2%2FdaEuLy%2BVe%2BfzPzwrdBHd0ncKrA13gvjv4SaWSRt%2FxrporOKfU2TpXLF5sk%2BrGPFKANDsDVXMP5FLKJF0oAeBy0WunTd7PIOOgyq2E2PgZQVlnh0e%2FBUEUT7cMPdrowNlN6FO7drN96Lcuenbcpyex%2FTgnwdnCumnXG5rMHLFzU2CjEBjRgPRxZN2oCBTHPSJa8yZpAk9F4u2n56bmJoHQtuugPY1IKe%2B1%2BY0mrUm4B0rv2Y1QAmWB0OBmEGoEZ6siFCcLAqe%2FTmwUYuomERVmN999gqUWg5NMlCkIqglSvNTZ1lu0kCzPBwXSzuYFgBZmgvlSzy%2F68QbytfFPQtF1Ut0RY%2FQfACrz%2F%2BqSLGNRUlZS3fnRdcPU7P58Nv9ulqqQYx38nbW1IoS1EgzwOJdrYbxrJ70gHTkaca7xVfn0TjAn3PXDDPPHwJtI9SwxgI1XA6pNLPHAvc3581P07528se9ZtasKqbK1EBOebs4uYAHbKQ1v7LRVYwNwwH2cgbHtAb4%2BqNpykkMyVZEsGeLcu4ycwBYdZG8t9RYfiCaQtrlKdLSnfKtsCeT4wtuNMRVlWl%2BAtL9UQnZN5lGPbqmt0DTVg6gZt6Pb9gqLuU5S5lSkrpXjTYqjDH6onFBjqkAemzbL0XpyeiyXhCG5it%2FZ7TbcRE5KjwKmiEDL3ATxvqQ0%2BJOu9sF9HHw%2B1trnYp3uTc2g7t%2BKHTeuRJfiLAwv3R7xRhLz3jDIv2Z%2F5JErw5n9xPIB2lHvbMHmbcnfbkjI7K%2BAa18JG%2FEDJpclvKQKkmUJoppVr3vViD5uvn6l8uk1sB%2FYW4yzydk%2B4ZOyAm8Ex1UnUuSxEaN0qCY%2BPdgA4XycBm&X-Amz-Signature=ca7a6e313a6e655ed54a46f0961184adbc897c021ad45cc280d07bf425d474f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
