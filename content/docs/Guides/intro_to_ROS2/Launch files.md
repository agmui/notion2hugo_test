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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSX5AHJ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyG0lL%2F00loxakl774HXT5pfELUIX%2F%2BmFbTusAx2jngIhAJBG7h1gVjBuT%2Fu2y5ZaMlFX8PL07N9a0sv5xsprx7asKv8DCCIQABoMNjM3NDIzMTgzODA1IgxIexf3gHO%2BucqCHQoq3APb9ifYpCElDwiDnmAblfNWJHs5x92VjU4TDoXv9hBTbZDwm057UMFx%2FhGR72rz7Rc6llu%2FPLk%2FKubR0bqF2p%2BLv8ZYefuLacis%2Bf2u4sPperhl9RtItoWG%2Bv%2BbFla7gZOPFilQW4lF%2BCtXOGRNRZfmys6dmC2MsSrP6vhe2DyS1dQ7knFf52QFdpQWs8nHyZumhehruBz8x2vMYrKq5g3TtQOXABfCto99pT3gvUbJ6CEWDC2kE95Oi9VkEdKk%2F5YUBzsNl1ASEAvPDQi48xYvczTxkz5WDQ5FfDbau4nAzszPzd%2FV8OcvfEMAlLyJ%2FB%2FHpTRCAzEUbBxko4EIdFChbQXPoy0c%2B9vQoJLh6aGQLz4JJ2EH%2FbomZySNqsP%2FYK77zmYfYqSjeRyQ38%2F8g5huU%2FP1zsTGRQH5FkfcwGSOi0EaYwgf9%2FrZAlnLfNerFsaRlsemjawScz02F8E1RlCnSXmNIcArhMX9HHFY2IZbaKBftRBPJ%2Fc%2Bs8I9WYntgIQIKAELmTirnuGdTALjozDd%2BJQD9qCc6BdDiHVa3kkUNvNUAHrOTHH%2FewGqsG5ofjIUNJfKY%2FaZfPT7Q6mXYKaNWKfdgiLq9mApsqdkGmHr0l2ytocEdXVa89cWZTCZxcLGBjqkAZKsqY%2FuTSSbHbHCBcewN30IQWAFtrUBswBVKeWyLS3xFkg%2BP4lDEbIpFXEsmRVyqS5JSXQoyefsmKVGOPCPo3MuMEt0t1l8jy7%2FPwrGkOenmBpFCrtHhXm9FAhExq%2BznF6YFWy%2Fxq%2F1nX99AJw8dw1b6nxv%2BvBcOlQkC2kT4a%2F1Hf%2BzL0zRRS%2FXw9tfXD2da1XrbpfQko3lERI28sbTPQNz85GT&X-Amz-Signature=b5ae0b03b753ba7cc872ba49403cc83f1de2886a161a6c463ac3388dd1750806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSX5AHJ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyG0lL%2F00loxakl774HXT5pfELUIX%2F%2BmFbTusAx2jngIhAJBG7h1gVjBuT%2Fu2y5ZaMlFX8PL07N9a0sv5xsprx7asKv8DCCIQABoMNjM3NDIzMTgzODA1IgxIexf3gHO%2BucqCHQoq3APb9ifYpCElDwiDnmAblfNWJHs5x92VjU4TDoXv9hBTbZDwm057UMFx%2FhGR72rz7Rc6llu%2FPLk%2FKubR0bqF2p%2BLv8ZYefuLacis%2Bf2u4sPperhl9RtItoWG%2Bv%2BbFla7gZOPFilQW4lF%2BCtXOGRNRZfmys6dmC2MsSrP6vhe2DyS1dQ7knFf52QFdpQWs8nHyZumhehruBz8x2vMYrKq5g3TtQOXABfCto99pT3gvUbJ6CEWDC2kE95Oi9VkEdKk%2F5YUBzsNl1ASEAvPDQi48xYvczTxkz5WDQ5FfDbau4nAzszPzd%2FV8OcvfEMAlLyJ%2FB%2FHpTRCAzEUbBxko4EIdFChbQXPoy0c%2B9vQoJLh6aGQLz4JJ2EH%2FbomZySNqsP%2FYK77zmYfYqSjeRyQ38%2F8g5huU%2FP1zsTGRQH5FkfcwGSOi0EaYwgf9%2FrZAlnLfNerFsaRlsemjawScz02F8E1RlCnSXmNIcArhMX9HHFY2IZbaKBftRBPJ%2Fc%2Bs8I9WYntgIQIKAELmTirnuGdTALjozDd%2BJQD9qCc6BdDiHVa3kkUNvNUAHrOTHH%2FewGqsG5ofjIUNJfKY%2FaZfPT7Q6mXYKaNWKfdgiLq9mApsqdkGmHr0l2ytocEdXVa89cWZTCZxcLGBjqkAZKsqY%2FuTSSbHbHCBcewN30IQWAFtrUBswBVKeWyLS3xFkg%2BP4lDEbIpFXEsmRVyqS5JSXQoyefsmKVGOPCPo3MuMEt0t1l8jy7%2FPwrGkOenmBpFCrtHhXm9FAhExq%2BznF6YFWy%2Fxq%2F1nX99AJw8dw1b6nxv%2BvBcOlQkC2kT4a%2F1Hf%2BzL0zRRS%2FXw9tfXD2da1XrbpfQko3lERI28sbTPQNz85GT&X-Amz-Signature=45e262d1c684f66f4231f55ee6a66c359bbc511ef51f7941c16be70353056b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSX5AHJ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyG0lL%2F00loxakl774HXT5pfELUIX%2F%2BmFbTusAx2jngIhAJBG7h1gVjBuT%2Fu2y5ZaMlFX8PL07N9a0sv5xsprx7asKv8DCCIQABoMNjM3NDIzMTgzODA1IgxIexf3gHO%2BucqCHQoq3APb9ifYpCElDwiDnmAblfNWJHs5x92VjU4TDoXv9hBTbZDwm057UMFx%2FhGR72rz7Rc6llu%2FPLk%2FKubR0bqF2p%2BLv8ZYefuLacis%2Bf2u4sPperhl9RtItoWG%2Bv%2BbFla7gZOPFilQW4lF%2BCtXOGRNRZfmys6dmC2MsSrP6vhe2DyS1dQ7knFf52QFdpQWs8nHyZumhehruBz8x2vMYrKq5g3TtQOXABfCto99pT3gvUbJ6CEWDC2kE95Oi9VkEdKk%2F5YUBzsNl1ASEAvPDQi48xYvczTxkz5WDQ5FfDbau4nAzszPzd%2FV8OcvfEMAlLyJ%2FB%2FHpTRCAzEUbBxko4EIdFChbQXPoy0c%2B9vQoJLh6aGQLz4JJ2EH%2FbomZySNqsP%2FYK77zmYfYqSjeRyQ38%2F8g5huU%2FP1zsTGRQH5FkfcwGSOi0EaYwgf9%2FrZAlnLfNerFsaRlsemjawScz02F8E1RlCnSXmNIcArhMX9HHFY2IZbaKBftRBPJ%2Fc%2Bs8I9WYntgIQIKAELmTirnuGdTALjozDd%2BJQD9qCc6BdDiHVa3kkUNvNUAHrOTHH%2FewGqsG5ofjIUNJfKY%2FaZfPT7Q6mXYKaNWKfdgiLq9mApsqdkGmHr0l2ytocEdXVa89cWZTCZxcLGBjqkAZKsqY%2FuTSSbHbHCBcewN30IQWAFtrUBswBVKeWyLS3xFkg%2BP4lDEbIpFXEsmRVyqS5JSXQoyefsmKVGOPCPo3MuMEt0t1l8jy7%2FPwrGkOenmBpFCrtHhXm9FAhExq%2BznF6YFWy%2Fxq%2F1nX99AJw8dw1b6nxv%2BvBcOlQkC2kT4a%2F1Hf%2BzL0zRRS%2FXw9tfXD2da1XrbpfQko3lERI28sbTPQNz85GT&X-Amz-Signature=7a848993e8dfb91c732858ba9b0062e13880ca4c5d18406137ee396ca29a1352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
