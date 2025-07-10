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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33YTS5G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ttJQ5qdWhlOAjcaxNSzdqVU6m0KinyiT0CjsZexdPwIgAhzOcGH%2FhrsukMYCZkOvurp82102ZmUXOdaei8osda0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPBA9RrhZfs%2Fbg%2FMSrcA8%2F9y4diOzboFkTUwDwyjkQzOW%2FmJIE%2BtaZnyFVt2scB1bugdTAbXzurndV3r4rJC%2Fkyo4IRdsKzSC77M6wOu4rfsJMcvkb7XFbyH6UpETzktuUwhotNh0e1s9vh3lGs4HG2U%2FAZeYL%2Fm%2Bb2gSueqtBtiQGhuItoGtwfFeAncBZtDX%2FIXHOrWVqm1wJzUmwJoPoOpiRugBNF%2FeLxYrLQIaKgcJlpz%2Bsu%2B68NGdQik%2FtDblU48DbbmaRrscmKTgLgLca5xwHteHj2eBavuPvObPpJdbQe3JuQ9Ytrm7yCFJfSOAzeGuJ1bp3QWqyTxQAEyTF3W2j5MGnTEodvcaTJblq4bebVS9YxcPtMdpQqYD504tBnafc8S4qq2ZkLG39Q0%2BdJ9S8Yc8dMbnPlqFY3Z6MmQRdulqeiNajV7CMufjsN5UYM5cpHU4gaEFIhvaeFww1616oGcF%2F0PfZlu1CyQlZ27shh62ptJ%2BL2%2B7a%2BcYzUdazn%2BK%2FirlpfY9RwyHOe76ZupVnVku%2B2ALxrphbWVI7sSoXyviOz2%2F4VzX73vJpYADLB6UqqTZgWwom%2F5USlLTQDcj8Mpb6RCHmORSpFw21nRSZrEotsyJp8%2B7cgn2FUS5IPALPv9OU%2Bl%2BECMIbQvMMGOqUBCh4N4j1vvGbDAaNrB3lww7Uo6IclhdS50fJ%2BNMAvuiKe7zjHTVPxn0wANcAKXbwcuHAk85%2Bo0qh0lP9PTym%2BdVgtaI1Tk%2FKB6cwWbJPIRNtqBaP7P%2F9i36Xa0aOcTulqD%2FPC4xv2xa5oaD3bRP4ew%2BkfL57vCEGHSlSknxCRN4xcYLlv1%2BZ7WW2eNO7AP5vt4lDNwU0rrV2qtK929Q89jl7fqo6Q&X-Amz-Signature=1a57d7fa21c2fc75889f3f15129bc45a38974278415c7d2434f12b03e81a7020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33YTS5G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ttJQ5qdWhlOAjcaxNSzdqVU6m0KinyiT0CjsZexdPwIgAhzOcGH%2FhrsukMYCZkOvurp82102ZmUXOdaei8osda0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPBA9RrhZfs%2Fbg%2FMSrcA8%2F9y4diOzboFkTUwDwyjkQzOW%2FmJIE%2BtaZnyFVt2scB1bugdTAbXzurndV3r4rJC%2Fkyo4IRdsKzSC77M6wOu4rfsJMcvkb7XFbyH6UpETzktuUwhotNh0e1s9vh3lGs4HG2U%2FAZeYL%2Fm%2Bb2gSueqtBtiQGhuItoGtwfFeAncBZtDX%2FIXHOrWVqm1wJzUmwJoPoOpiRugBNF%2FeLxYrLQIaKgcJlpz%2Bsu%2B68NGdQik%2FtDblU48DbbmaRrscmKTgLgLca5xwHteHj2eBavuPvObPpJdbQe3JuQ9Ytrm7yCFJfSOAzeGuJ1bp3QWqyTxQAEyTF3W2j5MGnTEodvcaTJblq4bebVS9YxcPtMdpQqYD504tBnafc8S4qq2ZkLG39Q0%2BdJ9S8Yc8dMbnPlqFY3Z6MmQRdulqeiNajV7CMufjsN5UYM5cpHU4gaEFIhvaeFww1616oGcF%2F0PfZlu1CyQlZ27shh62ptJ%2BL2%2B7a%2BcYzUdazn%2BK%2FirlpfY9RwyHOe76ZupVnVku%2B2ALxrphbWVI7sSoXyviOz2%2F4VzX73vJpYADLB6UqqTZgWwom%2F5USlLTQDcj8Mpb6RCHmORSpFw21nRSZrEotsyJp8%2B7cgn2FUS5IPALPv9OU%2Bl%2BECMIbQvMMGOqUBCh4N4j1vvGbDAaNrB3lww7Uo6IclhdS50fJ%2BNMAvuiKe7zjHTVPxn0wANcAKXbwcuHAk85%2Bo0qh0lP9PTym%2BdVgtaI1Tk%2FKB6cwWbJPIRNtqBaP7P%2F9i36Xa0aOcTulqD%2FPC4xv2xa5oaD3bRP4ew%2BkfL57vCEGHSlSknxCRN4xcYLlv1%2BZ7WW2eNO7AP5vt4lDNwU0rrV2qtK929Q89jl7fqo6Q&X-Amz-Signature=04aa467df1e1ae72eaac195a3f1e7aea9a3362dc20ccde8048fe0f2f66b87642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33YTS5G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ttJQ5qdWhlOAjcaxNSzdqVU6m0KinyiT0CjsZexdPwIgAhzOcGH%2FhrsukMYCZkOvurp82102ZmUXOdaei8osda0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPBA9RrhZfs%2Fbg%2FMSrcA8%2F9y4diOzboFkTUwDwyjkQzOW%2FmJIE%2BtaZnyFVt2scB1bugdTAbXzurndV3r4rJC%2Fkyo4IRdsKzSC77M6wOu4rfsJMcvkb7XFbyH6UpETzktuUwhotNh0e1s9vh3lGs4HG2U%2FAZeYL%2Fm%2Bb2gSueqtBtiQGhuItoGtwfFeAncBZtDX%2FIXHOrWVqm1wJzUmwJoPoOpiRugBNF%2FeLxYrLQIaKgcJlpz%2Bsu%2B68NGdQik%2FtDblU48DbbmaRrscmKTgLgLca5xwHteHj2eBavuPvObPpJdbQe3JuQ9Ytrm7yCFJfSOAzeGuJ1bp3QWqyTxQAEyTF3W2j5MGnTEodvcaTJblq4bebVS9YxcPtMdpQqYD504tBnafc8S4qq2ZkLG39Q0%2BdJ9S8Yc8dMbnPlqFY3Z6MmQRdulqeiNajV7CMufjsN5UYM5cpHU4gaEFIhvaeFww1616oGcF%2F0PfZlu1CyQlZ27shh62ptJ%2BL2%2B7a%2BcYzUdazn%2BK%2FirlpfY9RwyHOe76ZupVnVku%2B2ALxrphbWVI7sSoXyviOz2%2F4VzX73vJpYADLB6UqqTZgWwom%2F5USlLTQDcj8Mpb6RCHmORSpFw21nRSZrEotsyJp8%2B7cgn2FUS5IPALPv9OU%2Bl%2BECMIbQvMMGOqUBCh4N4j1vvGbDAaNrB3lww7Uo6IclhdS50fJ%2BNMAvuiKe7zjHTVPxn0wANcAKXbwcuHAk85%2Bo0qh0lP9PTym%2BdVgtaI1Tk%2FKB6cwWbJPIRNtqBaP7P%2F9i36Xa0aOcTulqD%2FPC4xv2xa5oaD3bRP4ew%2BkfL57vCEGHSlSknxCRN4xcYLlv1%2BZ7WW2eNO7AP5vt4lDNwU0rrV2qtK929Q89jl7fqo6Q&X-Amz-Signature=2e582e9dfabf91945a26b0c4becf5c4e1e45c03a6bc01326ca43a405a37123bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
