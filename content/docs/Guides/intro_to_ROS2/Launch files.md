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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=e1215d907f65e5f0e179f0004977e69ef2a388f30f5e17f428be071f935748c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=f506e31877b90c1a6bf98cd724dfd0ac9c85118dcd10e1468d482dd28f89095a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=56a23077fa08b736b1dbde9969f4d50b811c7ed03fa6ee976f59839a6608e2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
