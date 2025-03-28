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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OOO7T5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuCtk7FyN0VttsRFE49K%2F%2B94ucHqYi105aNK7aDcLhLAiAaaCYbtpH%2Fy9eQotrd%2BGfAsRc9d4ZjjN0CpW%2BozbV8pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeyHPBvBFeHhsgDywKtwDLFI1HloxOgluZRBzcoWmrUwOj%2FSv6zGRYWcS23IRwfHllCE%2FkpBe0Bsh7jsuHgdqKvnlV2v%2BlBSX%2FKz%2BIv1I%2BiD3x0%2BvKFwQeukkfuuBfn%2BBhcz7i73RfjHjdj9E4JQv68SNkXkacCYP%2BfCmhPN6Atb%2FrXoGvluZdtGL8uisgDQkhOEWBrXx4WR22vQn58HOEnhs%2B1zTNFG769RWz1Ewb1hc%2ByO6N%2FXUNdFH9Q3V9GdoVFsVU6IWFZwIF5hVi9IzRBrX6IlQSCcmI4vXnef05F86wWoAjOnrwhK3WtL%2FgI%2B3axCY1B47QMJz6VIBUoqaEhjeyCz4Jvx%2BWS19ZTdc38A77TGI%2FBhvzUg1QI1Q4lnXvBhUwCmQdpHSqSyFc7sMwNRkygX4Mgkk80semuvWZPDooptt0%2FVSvZ53aI6stmUGjZHUk4%2BAo2JrFiTpD1ccUVBfXhhcQLZnooUTrTcXuLFRwVr5m6AFlzNRKVca4dh1cXRMIteeyvDLVONNb4Bw4k5lzYFIOJCX1yP%2F9XmaDT4npACGDIY5yDrB%2Fp0LRjd2%2Bp7HA5dXtfqHiaTWEncF8tINvuazIneZYpTHwUhZYE1LWgYpeEhwFu396db%2BvpHemORFOpVj%2B1F2SGAwirCYvwY6pgF9ue0PpArlY55owKg074365mNV4s0fxxpHjxCSMOsrLYrjsZEPunEHMIRYZBW0swYDFpExbTCRX0%2Fq%2BKDkvQlwu9dPOYnPhYqW7Z915hgrNg%2FXtAeqqFu5W4MQVKjJzD8BgyNa%2FH8tCZh7iyZ8PaRDApDBZuw4DJHdQxcOslnavWeNETUXXsPTp8B21RUY1lrYZWo4N9sLNGCclPyhXdamH0r7AuOk&X-Amz-Signature=3182f8e73c084dcfb6485f1a821ecd593c0130169e4cfde1cb0ae4f10e093512&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OOO7T5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuCtk7FyN0VttsRFE49K%2F%2B94ucHqYi105aNK7aDcLhLAiAaaCYbtpH%2Fy9eQotrd%2BGfAsRc9d4ZjjN0CpW%2BozbV8pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeyHPBvBFeHhsgDywKtwDLFI1HloxOgluZRBzcoWmrUwOj%2FSv6zGRYWcS23IRwfHllCE%2FkpBe0Bsh7jsuHgdqKvnlV2v%2BlBSX%2FKz%2BIv1I%2BiD3x0%2BvKFwQeukkfuuBfn%2BBhcz7i73RfjHjdj9E4JQv68SNkXkacCYP%2BfCmhPN6Atb%2FrXoGvluZdtGL8uisgDQkhOEWBrXx4WR22vQn58HOEnhs%2B1zTNFG769RWz1Ewb1hc%2ByO6N%2FXUNdFH9Q3V9GdoVFsVU6IWFZwIF5hVi9IzRBrX6IlQSCcmI4vXnef05F86wWoAjOnrwhK3WtL%2FgI%2B3axCY1B47QMJz6VIBUoqaEhjeyCz4Jvx%2BWS19ZTdc38A77TGI%2FBhvzUg1QI1Q4lnXvBhUwCmQdpHSqSyFc7sMwNRkygX4Mgkk80semuvWZPDooptt0%2FVSvZ53aI6stmUGjZHUk4%2BAo2JrFiTpD1ccUVBfXhhcQLZnooUTrTcXuLFRwVr5m6AFlzNRKVca4dh1cXRMIteeyvDLVONNb4Bw4k5lzYFIOJCX1yP%2F9XmaDT4npACGDIY5yDrB%2Fp0LRjd2%2Bp7HA5dXtfqHiaTWEncF8tINvuazIneZYpTHwUhZYE1LWgYpeEhwFu396db%2BvpHemORFOpVj%2B1F2SGAwirCYvwY6pgF9ue0PpArlY55owKg074365mNV4s0fxxpHjxCSMOsrLYrjsZEPunEHMIRYZBW0swYDFpExbTCRX0%2Fq%2BKDkvQlwu9dPOYnPhYqW7Z915hgrNg%2FXtAeqqFu5W4MQVKjJzD8BgyNa%2FH8tCZh7iyZ8PaRDApDBZuw4DJHdQxcOslnavWeNETUXXsPTp8B21RUY1lrYZWo4N9sLNGCclPyhXdamH0r7AuOk&X-Amz-Signature=489025f8bd1cbe8d80e7db37b79f4b0f0f4d34c608b0b5e4f0262857db883c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OOO7T5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuCtk7FyN0VttsRFE49K%2F%2B94ucHqYi105aNK7aDcLhLAiAaaCYbtpH%2Fy9eQotrd%2BGfAsRc9d4ZjjN0CpW%2BozbV8pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeyHPBvBFeHhsgDywKtwDLFI1HloxOgluZRBzcoWmrUwOj%2FSv6zGRYWcS23IRwfHllCE%2FkpBe0Bsh7jsuHgdqKvnlV2v%2BlBSX%2FKz%2BIv1I%2BiD3x0%2BvKFwQeukkfuuBfn%2BBhcz7i73RfjHjdj9E4JQv68SNkXkacCYP%2BfCmhPN6Atb%2FrXoGvluZdtGL8uisgDQkhOEWBrXx4WR22vQn58HOEnhs%2B1zTNFG769RWz1Ewb1hc%2ByO6N%2FXUNdFH9Q3V9GdoVFsVU6IWFZwIF5hVi9IzRBrX6IlQSCcmI4vXnef05F86wWoAjOnrwhK3WtL%2FgI%2B3axCY1B47QMJz6VIBUoqaEhjeyCz4Jvx%2BWS19ZTdc38A77TGI%2FBhvzUg1QI1Q4lnXvBhUwCmQdpHSqSyFc7sMwNRkygX4Mgkk80semuvWZPDooptt0%2FVSvZ53aI6stmUGjZHUk4%2BAo2JrFiTpD1ccUVBfXhhcQLZnooUTrTcXuLFRwVr5m6AFlzNRKVca4dh1cXRMIteeyvDLVONNb4Bw4k5lzYFIOJCX1yP%2F9XmaDT4npACGDIY5yDrB%2Fp0LRjd2%2Bp7HA5dXtfqHiaTWEncF8tINvuazIneZYpTHwUhZYE1LWgYpeEhwFu396db%2BvpHemORFOpVj%2B1F2SGAwirCYvwY6pgF9ue0PpArlY55owKg074365mNV4s0fxxpHjxCSMOsrLYrjsZEPunEHMIRYZBW0swYDFpExbTCRX0%2Fq%2BKDkvQlwu9dPOYnPhYqW7Z915hgrNg%2FXtAeqqFu5W4MQVKjJzD8BgyNa%2FH8tCZh7iyZ8PaRDApDBZuw4DJHdQxcOslnavWeNETUXXsPTp8B21RUY1lrYZWo4N9sLNGCclPyhXdamH0r7AuOk&X-Amz-Signature=edf4743a0883b722ed9e99ef7f876ae484140e80aa55505ae01180fdcfd8b236&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
