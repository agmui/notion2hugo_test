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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIUSPF6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICW8XYI7M%2BfcPoghAWbjJylIIZWkhNK7RuJRs60eZKE%2BAiEAmwkCQTnjb8JFZRnWS%2BZAbVofqr5PHitZcrH2oNHrN9wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOK25TJL%2FCP8cY8HgCrcA0Q1LAmZ2IH3lfa9mqH0RAttLls2EvXka3dvrpZvVD4NLeT5GE7mltP%2BtxBjRUwbdbe6NdJ5Mzk6bHoP%2FHkU80ZKCzu1s0pqiZvjh7%2FSZAAmrxFOdUFgsDlalLLz2%2BD9HgOkjJrSn1rqSyRktNb39sV63Fts28GsDOvwnUrxWM2%2FXWC%2BGbnHLCsNI2tqY2MZ56IsbHBsSQqXA2tT%2FXi92traR0It0GdSM8lUXSQCi1t3Eb6Go3JlQqNY2fXblpLjRTFQGs8%2BLPM0NlYSHFdbzYcixvBZVvqXQjsAIT%2B%2F8SPFCpZSUBn9mmmf23MbVlz3gfyscd%2B9Mq1%2BIlqVLn7PeuZhSsNyYRzA5%2B4dmHS4RtfUuz1Pvs8Ky7VcN74snww8FQjuzDq3e0Ab9ij9IWWRYT7AhYP%2F%2BzO32ozkBp9RWstWbqqm7kyoqK1B%2FfTAGgZDWbnfrkUOLWxFJKBEU6A02H4FJVQxaWlPBlzjn%2F7KdHUApPP3D4dHgAtF8GvqWt2vzAE80DAkuOlXbTHW%2F6T58zdrDSwmslSRR5RRRivyqe8MOpdCHzkWqNiRjDs0%2BWAzwLVBkdxucF32%2BBlHvfKbqF21dM9cKO%2FPot34OvR5A0uMdIIZ2wcOSa7NmFBSMOmRw8QGOqUBCjBKoTlYmMNwhCm%2FSlb6E3O7KJ6izeGnoFY2EQqLTHdqe7eVy2PvVarJjXqYJdxBvYOhzSK9uzFHGve5%2FnIUEGFnda53wCmFtf2M4UpRK0Dufgl99kx9SjpmPQtYzm3mspQGFxaeWYkA1H9T64koXJ3ZTWopo1bQOjXmKeVuKhTjUkaQK5%2FKl1ZYAjLq5hAMzk4xhna5IWYW1UM2HamhxedHSXaf&X-Amz-Signature=e110fd6c4d07adda3fec10bc90a1eb5b514f58d1cfd5067c4d59b1f402c5fb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIUSPF6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICW8XYI7M%2BfcPoghAWbjJylIIZWkhNK7RuJRs60eZKE%2BAiEAmwkCQTnjb8JFZRnWS%2BZAbVofqr5PHitZcrH2oNHrN9wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOK25TJL%2FCP8cY8HgCrcA0Q1LAmZ2IH3lfa9mqH0RAttLls2EvXka3dvrpZvVD4NLeT5GE7mltP%2BtxBjRUwbdbe6NdJ5Mzk6bHoP%2FHkU80ZKCzu1s0pqiZvjh7%2FSZAAmrxFOdUFgsDlalLLz2%2BD9HgOkjJrSn1rqSyRktNb39sV63Fts28GsDOvwnUrxWM2%2FXWC%2BGbnHLCsNI2tqY2MZ56IsbHBsSQqXA2tT%2FXi92traR0It0GdSM8lUXSQCi1t3Eb6Go3JlQqNY2fXblpLjRTFQGs8%2BLPM0NlYSHFdbzYcixvBZVvqXQjsAIT%2B%2F8SPFCpZSUBn9mmmf23MbVlz3gfyscd%2B9Mq1%2BIlqVLn7PeuZhSsNyYRzA5%2B4dmHS4RtfUuz1Pvs8Ky7VcN74snww8FQjuzDq3e0Ab9ij9IWWRYT7AhYP%2F%2BzO32ozkBp9RWstWbqqm7kyoqK1B%2FfTAGgZDWbnfrkUOLWxFJKBEU6A02H4FJVQxaWlPBlzjn%2F7KdHUApPP3D4dHgAtF8GvqWt2vzAE80DAkuOlXbTHW%2F6T58zdrDSwmslSRR5RRRivyqe8MOpdCHzkWqNiRjDs0%2BWAzwLVBkdxucF32%2BBlHvfKbqF21dM9cKO%2FPot34OvR5A0uMdIIZ2wcOSa7NmFBSMOmRw8QGOqUBCjBKoTlYmMNwhCm%2FSlb6E3O7KJ6izeGnoFY2EQqLTHdqe7eVy2PvVarJjXqYJdxBvYOhzSK9uzFHGve5%2FnIUEGFnda53wCmFtf2M4UpRK0Dufgl99kx9SjpmPQtYzm3mspQGFxaeWYkA1H9T64koXJ3ZTWopo1bQOjXmKeVuKhTjUkaQK5%2FKl1ZYAjLq5hAMzk4xhna5IWYW1UM2HamhxedHSXaf&X-Amz-Signature=f1a08dab9f52f81f2dde1b0a4f3804433b3857411aa400fc90db4c67458ababd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIUSPF6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICW8XYI7M%2BfcPoghAWbjJylIIZWkhNK7RuJRs60eZKE%2BAiEAmwkCQTnjb8JFZRnWS%2BZAbVofqr5PHitZcrH2oNHrN9wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOK25TJL%2FCP8cY8HgCrcA0Q1LAmZ2IH3lfa9mqH0RAttLls2EvXka3dvrpZvVD4NLeT5GE7mltP%2BtxBjRUwbdbe6NdJ5Mzk6bHoP%2FHkU80ZKCzu1s0pqiZvjh7%2FSZAAmrxFOdUFgsDlalLLz2%2BD9HgOkjJrSn1rqSyRktNb39sV63Fts28GsDOvwnUrxWM2%2FXWC%2BGbnHLCsNI2tqY2MZ56IsbHBsSQqXA2tT%2FXi92traR0It0GdSM8lUXSQCi1t3Eb6Go3JlQqNY2fXblpLjRTFQGs8%2BLPM0NlYSHFdbzYcixvBZVvqXQjsAIT%2B%2F8SPFCpZSUBn9mmmf23MbVlz3gfyscd%2B9Mq1%2BIlqVLn7PeuZhSsNyYRzA5%2B4dmHS4RtfUuz1Pvs8Ky7VcN74snww8FQjuzDq3e0Ab9ij9IWWRYT7AhYP%2F%2BzO32ozkBp9RWstWbqqm7kyoqK1B%2FfTAGgZDWbnfrkUOLWxFJKBEU6A02H4FJVQxaWlPBlzjn%2F7KdHUApPP3D4dHgAtF8GvqWt2vzAE80DAkuOlXbTHW%2F6T58zdrDSwmslSRR5RRRivyqe8MOpdCHzkWqNiRjDs0%2BWAzwLVBkdxucF32%2BBlHvfKbqF21dM9cKO%2FPot34OvR5A0uMdIIZ2wcOSa7NmFBSMOmRw8QGOqUBCjBKoTlYmMNwhCm%2FSlb6E3O7KJ6izeGnoFY2EQqLTHdqe7eVy2PvVarJjXqYJdxBvYOhzSK9uzFHGve5%2FnIUEGFnda53wCmFtf2M4UpRK0Dufgl99kx9SjpmPQtYzm3mspQGFxaeWYkA1H9T64koXJ3ZTWopo1bQOjXmKeVuKhTjUkaQK5%2FKl1ZYAjLq5hAMzk4xhna5IWYW1UM2HamhxedHSXaf&X-Amz-Signature=72215f49cfac582d3d25f6635bf83fe0b3988164bcc549b17c5edc7d7c5fd77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
