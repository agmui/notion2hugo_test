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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ERDYDY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHf0NNUQH%2B7xpYBeKPFy9GzvYRGpVRzFr3nesQV36iqdAiEA928rVpUWFj0hKLS3w3%2FY9oM%2FxG2TkSMbauPY75F1jCkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFNllCaSW926yHK0pircA2BvWhiaRProEziKRDXDsnn4ILMJLFK0%2B9Ik2IbPCXEPPReP6Tp12Uyqp1C7FbhCeE1WQGyrwddkDR97aoaCEo47Po0TygoTdgkTkcyB5Act8KWnn9yEnCePmShxPXwP0ugLu891JPoK1Idz6CtI7bb%2BOmms5GH627USDFk9dszTswHACvEBXuOIBhl6AUOTmH7Av6jq8K5qyDUOEuxGN1FFZ9Nb30OZ%2F2cib6yP5wCiXtn0crrgVlZMuY6y%2FsLHv4hsrZuQ8VOpoflIsUS8BXsI9R6L1EwP3%2FQjsCVQNNSv97DM5MFlzq3UmbrHDCL%2BwWHJCNcdG0leR6M6Q4wuK2h%2BMwMyKBBco4PjEAg8ZJ418BbYuVEfah6bFxEFO1LBYVVP9WAjtQe2IsfVQqV0KdbjS%2FsMIS3ajqViIJIjzEa%2FcUA0noMaIUXdD1nDG3ZoxoDO6I%2BsFBuzeafKWSkX8Mj%2BuiC4YwQTQu4z9FV9N3%2F0lO28PLTpQx1IRLOVOhI5TGEuSVgyjgvbJZccjhZyQXMdieKb63MSKEpK%2BnMz7Pb70sSDG5JDGcxclwxW4AG2fsGWFQ9tQO3SgJg1DVdVlBi4w7kPRlMBzSfmW3o5sDrUaVXjzV%2B8ioGZozT1MOjfxcEGOqUBIfH6uBPuu2gaTXnyu9LkONFBm6AU8RHLKPSWlKzZ0i%2FoTTO1Nn1pqkwFTijvKuJTRDU2z%2BJk2yBFukxUWX%2FyLMIkGlPuGMaTnvsUbkiSnAIRppFYC3Bojjsw3KMXWdEV1n51dxLM%2FQJXK5Dlw%2B802pJOBjSnoNJdevkh%2FYOCTTlvWZePMj%2FujouNGD30zuhUholp44pvspqx62P1TmGl0dvrqvt7&X-Amz-Signature=47db71c102903efb0f26d34140fde2843f668bacc7c1248bdfb931fad9b5fe10&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ERDYDY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHf0NNUQH%2B7xpYBeKPFy9GzvYRGpVRzFr3nesQV36iqdAiEA928rVpUWFj0hKLS3w3%2FY9oM%2FxG2TkSMbauPY75F1jCkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFNllCaSW926yHK0pircA2BvWhiaRProEziKRDXDsnn4ILMJLFK0%2B9Ik2IbPCXEPPReP6Tp12Uyqp1C7FbhCeE1WQGyrwddkDR97aoaCEo47Po0TygoTdgkTkcyB5Act8KWnn9yEnCePmShxPXwP0ugLu891JPoK1Idz6CtI7bb%2BOmms5GH627USDFk9dszTswHACvEBXuOIBhl6AUOTmH7Av6jq8K5qyDUOEuxGN1FFZ9Nb30OZ%2F2cib6yP5wCiXtn0crrgVlZMuY6y%2FsLHv4hsrZuQ8VOpoflIsUS8BXsI9R6L1EwP3%2FQjsCVQNNSv97DM5MFlzq3UmbrHDCL%2BwWHJCNcdG0leR6M6Q4wuK2h%2BMwMyKBBco4PjEAg8ZJ418BbYuVEfah6bFxEFO1LBYVVP9WAjtQe2IsfVQqV0KdbjS%2FsMIS3ajqViIJIjzEa%2FcUA0noMaIUXdD1nDG3ZoxoDO6I%2BsFBuzeafKWSkX8Mj%2BuiC4YwQTQu4z9FV9N3%2F0lO28PLTpQx1IRLOVOhI5TGEuSVgyjgvbJZccjhZyQXMdieKb63MSKEpK%2BnMz7Pb70sSDG5JDGcxclwxW4AG2fsGWFQ9tQO3SgJg1DVdVlBi4w7kPRlMBzSfmW3o5sDrUaVXjzV%2B8ioGZozT1MOjfxcEGOqUBIfH6uBPuu2gaTXnyu9LkONFBm6AU8RHLKPSWlKzZ0i%2FoTTO1Nn1pqkwFTijvKuJTRDU2z%2BJk2yBFukxUWX%2FyLMIkGlPuGMaTnvsUbkiSnAIRppFYC3Bojjsw3KMXWdEV1n51dxLM%2FQJXK5Dlw%2B802pJOBjSnoNJdevkh%2FYOCTTlvWZePMj%2FujouNGD30zuhUholp44pvspqx62P1TmGl0dvrqvt7&X-Amz-Signature=6fbe7c8d424c181536197e1129310059b6514ad2f0104ef491b84756598eed60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ERDYDY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHf0NNUQH%2B7xpYBeKPFy9GzvYRGpVRzFr3nesQV36iqdAiEA928rVpUWFj0hKLS3w3%2FY9oM%2FxG2TkSMbauPY75F1jCkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFNllCaSW926yHK0pircA2BvWhiaRProEziKRDXDsnn4ILMJLFK0%2B9Ik2IbPCXEPPReP6Tp12Uyqp1C7FbhCeE1WQGyrwddkDR97aoaCEo47Po0TygoTdgkTkcyB5Act8KWnn9yEnCePmShxPXwP0ugLu891JPoK1Idz6CtI7bb%2BOmms5GH627USDFk9dszTswHACvEBXuOIBhl6AUOTmH7Av6jq8K5qyDUOEuxGN1FFZ9Nb30OZ%2F2cib6yP5wCiXtn0crrgVlZMuY6y%2FsLHv4hsrZuQ8VOpoflIsUS8BXsI9R6L1EwP3%2FQjsCVQNNSv97DM5MFlzq3UmbrHDCL%2BwWHJCNcdG0leR6M6Q4wuK2h%2BMwMyKBBco4PjEAg8ZJ418BbYuVEfah6bFxEFO1LBYVVP9WAjtQe2IsfVQqV0KdbjS%2FsMIS3ajqViIJIjzEa%2FcUA0noMaIUXdD1nDG3ZoxoDO6I%2BsFBuzeafKWSkX8Mj%2BuiC4YwQTQu4z9FV9N3%2F0lO28PLTpQx1IRLOVOhI5TGEuSVgyjgvbJZccjhZyQXMdieKb63MSKEpK%2BnMz7Pb70sSDG5JDGcxclwxW4AG2fsGWFQ9tQO3SgJg1DVdVlBi4w7kPRlMBzSfmW3o5sDrUaVXjzV%2B8ioGZozT1MOjfxcEGOqUBIfH6uBPuu2gaTXnyu9LkONFBm6AU8RHLKPSWlKzZ0i%2FoTTO1Nn1pqkwFTijvKuJTRDU2z%2BJk2yBFukxUWX%2FyLMIkGlPuGMaTnvsUbkiSnAIRppFYC3Bojjsw3KMXWdEV1n51dxLM%2FQJXK5Dlw%2B802pJOBjSnoNJdevkh%2FYOCTTlvWZePMj%2FujouNGD30zuhUholp44pvspqx62P1TmGl0dvrqvt7&X-Amz-Signature=9caf542de8513656c214dd7e3394ae80155fe2e925351d4f4c3d932463254a32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
