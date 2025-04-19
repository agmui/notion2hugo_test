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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYFM2VK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgEate0bOF0lxOu9n2VHn3wE0E2mt%2BqopxfxtmjrQZyAiA%2BR1OATRBUnuTkxp7%2FjBj0ZkuuX1Bk%2BiCoop8Uy8f6liqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8aOsu5g%2BaM%2BNgbSKtwDkaUIktflD%2BFvgMBS%2FWNnFMaQgIBQ%2B%2BOuYLSGrYsBhGMVuZwFZQ7jAHqCLaFw7lBBmi8KpIzVC5xCXywesON8JEctYHxDRgA2MQYSa9cd6MPNpA9G7D7g8OwIC0%2BXGDg2x91qDbpL02HIx1T9IeYBlcBi6hUeMgEod%2B0Si3eXyFpnDtObdI6Mg1vMaUpNiCtJ8VxMcwO44bDg3DhOiTu8V1hJgIcyusaqeEWpoNjtqy6eMR7OplDKtB6w7zYLxt6vXLyzngyHl7vckmSp14k0VGdOAA%2BEljEl7qUqPMhxIMZp6rFSIFvCD02ta7mnnDnNw2Kua1kvNlGAPdqyC04n2AZ5Fds4IYukR3qGVuBs%2B4RBzTHIgpR7PG9Ms7GdW9hQmy%2FwNy1bRvR1CM5URqaECC8ZXNUdbJhAnM8jdbIFvNc%2FsAgp%2BnpnnlHfeITYf4z%2Bt3rrEyeKBbn7%2BVATZ5%2FZiC8PluqZxa7xYQzURCxSDmrT%2BayWDd2eLR09Uj9LhfbhKmTXxmYFpT5xrMsbcMcCIpmkQNWmhnary%2By8D%2FEIzfbiGUkR31tXUmMczPHzw2zjTAL0roRUC%2FpodTQZZHqQuMgigdB%2FLj%2FJLkyZBv4fKGNAV4TeBPMDQ0PSRQswndiMwAY6pgHdaUw4pikh1g9KsW%2Bz0bWDh%2Bu0%2BaGX%2BQuUfLWAY%2FsW8QmKF96ZgL%2B35P82snfI4qP2orvdvsztGxgw2L9RYcy1P2TU71MmP9APCEyU%2FtfLhN%2Bkiuyz0KJhiqooDaHRnU4%2B3cxVxD7Puv16bUF%2F0wXK66msjzUhGp%2BELACZfv5iP0QcGttHjiuEiE1zO%2BujerWcI%2FIkerU%2FpvTajw9EXhzjx11V%2BiJn&X-Amz-Signature=ac0d3d624c26af2eb9738f3e84078fe06123fa6021a7c56b803824254dae776c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYFM2VK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgEate0bOF0lxOu9n2VHn3wE0E2mt%2BqopxfxtmjrQZyAiA%2BR1OATRBUnuTkxp7%2FjBj0ZkuuX1Bk%2BiCoop8Uy8f6liqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8aOsu5g%2BaM%2BNgbSKtwDkaUIktflD%2BFvgMBS%2FWNnFMaQgIBQ%2B%2BOuYLSGrYsBhGMVuZwFZQ7jAHqCLaFw7lBBmi8KpIzVC5xCXywesON8JEctYHxDRgA2MQYSa9cd6MPNpA9G7D7g8OwIC0%2BXGDg2x91qDbpL02HIx1T9IeYBlcBi6hUeMgEod%2B0Si3eXyFpnDtObdI6Mg1vMaUpNiCtJ8VxMcwO44bDg3DhOiTu8V1hJgIcyusaqeEWpoNjtqy6eMR7OplDKtB6w7zYLxt6vXLyzngyHl7vckmSp14k0VGdOAA%2BEljEl7qUqPMhxIMZp6rFSIFvCD02ta7mnnDnNw2Kua1kvNlGAPdqyC04n2AZ5Fds4IYukR3qGVuBs%2B4RBzTHIgpR7PG9Ms7GdW9hQmy%2FwNy1bRvR1CM5URqaECC8ZXNUdbJhAnM8jdbIFvNc%2FsAgp%2BnpnnlHfeITYf4z%2Bt3rrEyeKBbn7%2BVATZ5%2FZiC8PluqZxa7xYQzURCxSDmrT%2BayWDd2eLR09Uj9LhfbhKmTXxmYFpT5xrMsbcMcCIpmkQNWmhnary%2By8D%2FEIzfbiGUkR31tXUmMczPHzw2zjTAL0roRUC%2FpodTQZZHqQuMgigdB%2FLj%2FJLkyZBv4fKGNAV4TeBPMDQ0PSRQswndiMwAY6pgHdaUw4pikh1g9KsW%2Bz0bWDh%2Bu0%2BaGX%2BQuUfLWAY%2FsW8QmKF96ZgL%2B35P82snfI4qP2orvdvsztGxgw2L9RYcy1P2TU71MmP9APCEyU%2FtfLhN%2Bkiuyz0KJhiqooDaHRnU4%2B3cxVxD7Puv16bUF%2F0wXK66msjzUhGp%2BELACZfv5iP0QcGttHjiuEiE1zO%2BujerWcI%2FIkerU%2FpvTajw9EXhzjx11V%2BiJn&X-Amz-Signature=c49bcf2bc40339340be82b4bdd589d67146a3b4241f3732e971e0b285b7cfea8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYFM2VK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgEate0bOF0lxOu9n2VHn3wE0E2mt%2BqopxfxtmjrQZyAiA%2BR1OATRBUnuTkxp7%2FjBj0ZkuuX1Bk%2BiCoop8Uy8f6liqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8aOsu5g%2BaM%2BNgbSKtwDkaUIktflD%2BFvgMBS%2FWNnFMaQgIBQ%2B%2BOuYLSGrYsBhGMVuZwFZQ7jAHqCLaFw7lBBmi8KpIzVC5xCXywesON8JEctYHxDRgA2MQYSa9cd6MPNpA9G7D7g8OwIC0%2BXGDg2x91qDbpL02HIx1T9IeYBlcBi6hUeMgEod%2B0Si3eXyFpnDtObdI6Mg1vMaUpNiCtJ8VxMcwO44bDg3DhOiTu8V1hJgIcyusaqeEWpoNjtqy6eMR7OplDKtB6w7zYLxt6vXLyzngyHl7vckmSp14k0VGdOAA%2BEljEl7qUqPMhxIMZp6rFSIFvCD02ta7mnnDnNw2Kua1kvNlGAPdqyC04n2AZ5Fds4IYukR3qGVuBs%2B4RBzTHIgpR7PG9Ms7GdW9hQmy%2FwNy1bRvR1CM5URqaECC8ZXNUdbJhAnM8jdbIFvNc%2FsAgp%2BnpnnlHfeITYf4z%2Bt3rrEyeKBbn7%2BVATZ5%2FZiC8PluqZxa7xYQzURCxSDmrT%2BayWDd2eLR09Uj9LhfbhKmTXxmYFpT5xrMsbcMcCIpmkQNWmhnary%2By8D%2FEIzfbiGUkR31tXUmMczPHzw2zjTAL0roRUC%2FpodTQZZHqQuMgigdB%2FLj%2FJLkyZBv4fKGNAV4TeBPMDQ0PSRQswndiMwAY6pgHdaUw4pikh1g9KsW%2Bz0bWDh%2Bu0%2BaGX%2BQuUfLWAY%2FsW8QmKF96ZgL%2B35P82snfI4qP2orvdvsztGxgw2L9RYcy1P2TU71MmP9APCEyU%2FtfLhN%2Bkiuyz0KJhiqooDaHRnU4%2B3cxVxD7Puv16bUF%2F0wXK66msjzUhGp%2BELACZfv5iP0QcGttHjiuEiE1zO%2BujerWcI%2FIkerU%2FpvTajw9EXhzjx11V%2BiJn&X-Amz-Signature=49cfd5a54f86d69edbe4ba60f1edaeea8ad0fc95549687dce59b773ee7232545&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
