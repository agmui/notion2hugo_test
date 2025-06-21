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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHGPZGO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERa1bhjoNnqaD5zKVkSGoKh1DJoxlsbrWiYU6QIeMsuAiAuSDTifdp%2BayEm8E5omcPcAv4Pndue3wT9ntEBd8mdkyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDwatLaHmkOGL87kKtwDd9Rpvis%2BCX%2BpivNLpeNBlQ%2BDJ2NGrW%2BrnTvT60gm%2FNpUbVaVj%2F03CpBi%2FB%2FxxkXXAqSZoQgkSTx8CUC%2FOxCZuLUdwNNbDUwGYbP6mFJE89U06goBVSF1kHLDvRdXJd%2BdobrywfoEDXLFYcxCx0ewW1BEBSVjia4WSqqSZ3a7TeBxcVwmdsMU7T5rjGS1qqqEqEYW1CwBwU2PHIgKE3PvOqMf6rjU8AS9icKXuMxOuM2Tcir3K%2BLgsWqh1rPpC6gUKMw5QcYD%2FEa%2BuolQE3RvfucD1Fa5nUlj8nvSu7yFd5kPjo0BTCIaro4ph8LDvo7l6mYft6cgZWMlQny4bBN%2F16VtFkQtMPOUxzvRSHrDh8K2uRPb9Hp78J69BSbBMludHhsfIN6LYasmxBOihdWJoHMBLMm1brcPQ01g1tKREXaAoxyN3DH7zDeqSMn4TBrGdIG4g%2FQImIVAHTVGouuzx6fIKhDoMZZ1edBvCuQwJlyNt9bxX8ZFqwFKDBFZaX%2BdnuHxUupYvuB07U2BpBgSOFfdwTi60RjcLo%2FQi6a73TrAeaQ97AI8ZLQtRrH8JkCII%2FlrIq6rDGcgininCavdkGwqxltFVGRRoU%2BhZSUnurPQq8ZosnNUMn8zTrIwhbDYwgY6pgEZoqlFV6COR%2BASey%2Bg%2BDIbVn8cItUOiwg0fSsDfEd0ACMn9VvOqyCFaarFBTOsJiGwb%2F97DiegPBfF6IpR0qsCxVKvbNLFe0T24LkmukFELMiH%2B2wrNo5S2Ss7R2LmYjc3o0oLhh5kgRz50UU7oDgB7IUMfGVI3Al1iESox5kV6zFLRzRwr6q5nruwy%2BAHmPuWkqr6V%2Bfjd2jEP1EDganPpnyAcjIZ&X-Amz-Signature=ec8f3e4353c1e218c5016725942b13e635eee69e9d835d6eb33848dc822c4278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHGPZGO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERa1bhjoNnqaD5zKVkSGoKh1DJoxlsbrWiYU6QIeMsuAiAuSDTifdp%2BayEm8E5omcPcAv4Pndue3wT9ntEBd8mdkyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDwatLaHmkOGL87kKtwDd9Rpvis%2BCX%2BpivNLpeNBlQ%2BDJ2NGrW%2BrnTvT60gm%2FNpUbVaVj%2F03CpBi%2FB%2FxxkXXAqSZoQgkSTx8CUC%2FOxCZuLUdwNNbDUwGYbP6mFJE89U06goBVSF1kHLDvRdXJd%2BdobrywfoEDXLFYcxCx0ewW1BEBSVjia4WSqqSZ3a7TeBxcVwmdsMU7T5rjGS1qqqEqEYW1CwBwU2PHIgKE3PvOqMf6rjU8AS9icKXuMxOuM2Tcir3K%2BLgsWqh1rPpC6gUKMw5QcYD%2FEa%2BuolQE3RvfucD1Fa5nUlj8nvSu7yFd5kPjo0BTCIaro4ph8LDvo7l6mYft6cgZWMlQny4bBN%2F16VtFkQtMPOUxzvRSHrDh8K2uRPb9Hp78J69BSbBMludHhsfIN6LYasmxBOihdWJoHMBLMm1brcPQ01g1tKREXaAoxyN3DH7zDeqSMn4TBrGdIG4g%2FQImIVAHTVGouuzx6fIKhDoMZZ1edBvCuQwJlyNt9bxX8ZFqwFKDBFZaX%2BdnuHxUupYvuB07U2BpBgSOFfdwTi60RjcLo%2FQi6a73TrAeaQ97AI8ZLQtRrH8JkCII%2FlrIq6rDGcgininCavdkGwqxltFVGRRoU%2BhZSUnurPQq8ZosnNUMn8zTrIwhbDYwgY6pgEZoqlFV6COR%2BASey%2Bg%2BDIbVn8cItUOiwg0fSsDfEd0ACMn9VvOqyCFaarFBTOsJiGwb%2F97DiegPBfF6IpR0qsCxVKvbNLFe0T24LkmukFELMiH%2B2wrNo5S2Ss7R2LmYjc3o0oLhh5kgRz50UU7oDgB7IUMfGVI3Al1iESox5kV6zFLRzRwr6q5nruwy%2BAHmPuWkqr6V%2Bfjd2jEP1EDganPpnyAcjIZ&X-Amz-Signature=c77295e944acd2ea2cc2c5e24748cc8ea7b5db7504894e4137b8b9656bb88d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHGPZGO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERa1bhjoNnqaD5zKVkSGoKh1DJoxlsbrWiYU6QIeMsuAiAuSDTifdp%2BayEm8E5omcPcAv4Pndue3wT9ntEBd8mdkyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDwatLaHmkOGL87kKtwDd9Rpvis%2BCX%2BpivNLpeNBlQ%2BDJ2NGrW%2BrnTvT60gm%2FNpUbVaVj%2F03CpBi%2FB%2FxxkXXAqSZoQgkSTx8CUC%2FOxCZuLUdwNNbDUwGYbP6mFJE89U06goBVSF1kHLDvRdXJd%2BdobrywfoEDXLFYcxCx0ewW1BEBSVjia4WSqqSZ3a7TeBxcVwmdsMU7T5rjGS1qqqEqEYW1CwBwU2PHIgKE3PvOqMf6rjU8AS9icKXuMxOuM2Tcir3K%2BLgsWqh1rPpC6gUKMw5QcYD%2FEa%2BuolQE3RvfucD1Fa5nUlj8nvSu7yFd5kPjo0BTCIaro4ph8LDvo7l6mYft6cgZWMlQny4bBN%2F16VtFkQtMPOUxzvRSHrDh8K2uRPb9Hp78J69BSbBMludHhsfIN6LYasmxBOihdWJoHMBLMm1brcPQ01g1tKREXaAoxyN3DH7zDeqSMn4TBrGdIG4g%2FQImIVAHTVGouuzx6fIKhDoMZZ1edBvCuQwJlyNt9bxX8ZFqwFKDBFZaX%2BdnuHxUupYvuB07U2BpBgSOFfdwTi60RjcLo%2FQi6a73TrAeaQ97AI8ZLQtRrH8JkCII%2FlrIq6rDGcgininCavdkGwqxltFVGRRoU%2BhZSUnurPQq8ZosnNUMn8zTrIwhbDYwgY6pgEZoqlFV6COR%2BASey%2Bg%2BDIbVn8cItUOiwg0fSsDfEd0ACMn9VvOqyCFaarFBTOsJiGwb%2F97DiegPBfF6IpR0qsCxVKvbNLFe0T24LkmukFELMiH%2B2wrNo5S2Ss7R2LmYjc3o0oLhh5kgRz50UU7oDgB7IUMfGVI3Al1iESox5kV6zFLRzRwr6q5nruwy%2BAHmPuWkqr6V%2Bfjd2jEP1EDganPpnyAcjIZ&X-Amz-Signature=f5c609f0598cb6c9405750b7295b65cd721370037636bd9100eb91c80c73dc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
