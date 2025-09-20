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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KP6QY2%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH3xRUwZ6Iz1ZGJNJTuQ64Eak6eP1RmYePjvbtkfRQixAiA5vlL6pgBOq3OTw5Itr%2F9VJS%2BPFYt1mSZJT4B3y9gwhSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUy01af7CZmJQresKtwDZGD5fShRcer30jT8Lmp0wVTAK22z%2FhHnqxg7znL17qsXBL6ZI8vkURNdWGEfRZwdkLirdilqMQBbLDrVj6dQrVXmIW8vLSTjrc0ay%2FhSc7%2F6801TAYhcjfbay8r86W2HY0fGR7DfgDY5S7%2FrYm5SYl4lsF3sn8ZUVhHGRLFgsm8gv%2Bfo2v6fiy%2FEQXLWxl5vJsCVDNfei%2FI8f6RmONbk3SjvaCOlQ017SWE61wXtebJ0DVdxCY%2FfmOaS6T6u4l8Qycg2OgBox7nJxWr8Afy2gvRmlyVg%2BbVh1IGXY0Y79W5t5mLCoQiQKeHYwgCfqN5ZEP6yLr%2FLZy9azjZmdSoSYdZrw%2Fcjz2M4o927UcIXzYYFZPFS2JFMrsT56RYzllv8RbpptY7BV7RaqswYu1%2FVbGN9%2FQbHxy4HRRa%2FibW4Qk48AW6LoV9NLqK2kQmbuCl54oVP9NKuRmW6mTLpDwppiIsVUDh4B57BqHtDhz1I1ntZqVrjYc60SPI2Gye6xpdlQFgtfvtCYR%2B%2FW%2FbxIlnqokU4LJF%2FCDs20NXkQvD4HPFV2%2FUgnz3d%2BBytHOX6Gk3hGjEEOKupGezQMY8ARb5B5vHZtl9UFCYrhmXrd7nDImadwSFvOE499W8Y4V4w%2FP%2B3xgY6pgF7nuLxYO1K6midDJtUJ%2BL25oqhUnNdHKzk32oCZBo0g2%2BgWRB%2BMGeZmmO4%2B1Gv%2FDkfhv%2FDxX84Ict0Cob6xrNRTiWWLN5rHew6f01SgzKCh25ps2%2BcdMWEhY3jDLIT4RCa37smUxMQHC20s6cF5AMPEELa6JxA1y6nDg7H35Bao79JM%2BQFEBQiexzsWhVIES4B7xdifRBIDl1oBw8mPdu7rHS12Nbw&X-Amz-Signature=c58c5273a71b4f374e139e264fc51ab81eb4df29e2d42dea95a050f5f9bc4eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KP6QY2%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH3xRUwZ6Iz1ZGJNJTuQ64Eak6eP1RmYePjvbtkfRQixAiA5vlL6pgBOq3OTw5Itr%2F9VJS%2BPFYt1mSZJT4B3y9gwhSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUy01af7CZmJQresKtwDZGD5fShRcer30jT8Lmp0wVTAK22z%2FhHnqxg7znL17qsXBL6ZI8vkURNdWGEfRZwdkLirdilqMQBbLDrVj6dQrVXmIW8vLSTjrc0ay%2FhSc7%2F6801TAYhcjfbay8r86W2HY0fGR7DfgDY5S7%2FrYm5SYl4lsF3sn8ZUVhHGRLFgsm8gv%2Bfo2v6fiy%2FEQXLWxl5vJsCVDNfei%2FI8f6RmONbk3SjvaCOlQ017SWE61wXtebJ0DVdxCY%2FfmOaS6T6u4l8Qycg2OgBox7nJxWr8Afy2gvRmlyVg%2BbVh1IGXY0Y79W5t5mLCoQiQKeHYwgCfqN5ZEP6yLr%2FLZy9azjZmdSoSYdZrw%2Fcjz2M4o927UcIXzYYFZPFS2JFMrsT56RYzllv8RbpptY7BV7RaqswYu1%2FVbGN9%2FQbHxy4HRRa%2FibW4Qk48AW6LoV9NLqK2kQmbuCl54oVP9NKuRmW6mTLpDwppiIsVUDh4B57BqHtDhz1I1ntZqVrjYc60SPI2Gye6xpdlQFgtfvtCYR%2B%2FW%2FbxIlnqokU4LJF%2FCDs20NXkQvD4HPFV2%2FUgnz3d%2BBytHOX6Gk3hGjEEOKupGezQMY8ARb5B5vHZtl9UFCYrhmXrd7nDImadwSFvOE499W8Y4V4w%2FP%2B3xgY6pgF7nuLxYO1K6midDJtUJ%2BL25oqhUnNdHKzk32oCZBo0g2%2BgWRB%2BMGeZmmO4%2B1Gv%2FDkfhv%2FDxX84Ict0Cob6xrNRTiWWLN5rHew6f01SgzKCh25ps2%2BcdMWEhY3jDLIT4RCa37smUxMQHC20s6cF5AMPEELa6JxA1y6nDg7H35Bao79JM%2BQFEBQiexzsWhVIES4B7xdifRBIDl1oBw8mPdu7rHS12Nbw&X-Amz-Signature=4f9222c89eb1ae022b61dc5a17523f8950dfd53a75249833671a3eba7834b35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KP6QY2%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH3xRUwZ6Iz1ZGJNJTuQ64Eak6eP1RmYePjvbtkfRQixAiA5vlL6pgBOq3OTw5Itr%2F9VJS%2BPFYt1mSZJT4B3y9gwhSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUy01af7CZmJQresKtwDZGD5fShRcer30jT8Lmp0wVTAK22z%2FhHnqxg7znL17qsXBL6ZI8vkURNdWGEfRZwdkLirdilqMQBbLDrVj6dQrVXmIW8vLSTjrc0ay%2FhSc7%2F6801TAYhcjfbay8r86W2HY0fGR7DfgDY5S7%2FrYm5SYl4lsF3sn8ZUVhHGRLFgsm8gv%2Bfo2v6fiy%2FEQXLWxl5vJsCVDNfei%2FI8f6RmONbk3SjvaCOlQ017SWE61wXtebJ0DVdxCY%2FfmOaS6T6u4l8Qycg2OgBox7nJxWr8Afy2gvRmlyVg%2BbVh1IGXY0Y79W5t5mLCoQiQKeHYwgCfqN5ZEP6yLr%2FLZy9azjZmdSoSYdZrw%2Fcjz2M4o927UcIXzYYFZPFS2JFMrsT56RYzllv8RbpptY7BV7RaqswYu1%2FVbGN9%2FQbHxy4HRRa%2FibW4Qk48AW6LoV9NLqK2kQmbuCl54oVP9NKuRmW6mTLpDwppiIsVUDh4B57BqHtDhz1I1ntZqVrjYc60SPI2Gye6xpdlQFgtfvtCYR%2B%2FW%2FbxIlnqokU4LJF%2FCDs20NXkQvD4HPFV2%2FUgnz3d%2BBytHOX6Gk3hGjEEOKupGezQMY8ARb5B5vHZtl9UFCYrhmXrd7nDImadwSFvOE499W8Y4V4w%2FP%2B3xgY6pgF7nuLxYO1K6midDJtUJ%2BL25oqhUnNdHKzk32oCZBo0g2%2BgWRB%2BMGeZmmO4%2B1Gv%2FDkfhv%2FDxX84Ict0Cob6xrNRTiWWLN5rHew6f01SgzKCh25ps2%2BcdMWEhY3jDLIT4RCa37smUxMQHC20s6cF5AMPEELa6JxA1y6nDg7H35Bao79JM%2BQFEBQiexzsWhVIES4B7xdifRBIDl1oBw8mPdu7rHS12Nbw&X-Amz-Signature=f72caf1509c57d4f3a597616dfce22d943d84fe7cec01b1f269942d50f21d64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
