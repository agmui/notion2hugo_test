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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQXXDA3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCYIELzQfjD9q0EaEld%2BNfhdCikO4DnIZmYxveq9pBMfAIgDrFKodARAG1gdsT8MaFcEZGyv2CZm3SZyKlboaJGT%2F8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxdXww8ofb4XU%2BTQircA%2FQuT8J7Pq68JL9aex4UkFLFwVYsqgbqVKN2dR6fzygDwXfNrNZa0Qhl%2BLJCg49kiZAR68eXXPdXEUYEdfb%2BWc4q5iVWSRqA6uz7CyxLjjDt45MIDUA6ok7Dt%2F0v1dZFggHENqhveD5mEFJMdz%2BGKTY5y5guIPTHL19DW6tMAMlaXnEYYnYM%2B01XprS7E7050LnRdAbZl3dDirAXBXK7puWhOon3DlrE91CzMKy9qmcAvwAS0WKm7R0WdYOclMyaswjg7jv4M36HU2znNnh%2FDn6IE1I5TVmqWdLDzhR2eeZP51bn13m%2FedmBt3GPkYORWzyIs4GKVcBsVMTn5FWuA4PUEKG2%2FFv8c30vwDoiKthrEWf%2BNnfV4IQ0kmz0cX%2Fwdtn5QjLdf6uetfLzS%2BqQqhRYKgagdPkrPr4pPqbVd%2FHX%2BDa7kmOz9OP4DycvKmYrRGds9iL4OtR3vnIYcQE5avvE0%2B7KcD92%2BCb3wS89V0MQFYAOO77zLAuILMtRuQQHCYhfgppY84RBUXH5ny1P7U8NlDR3a0sjaDeBe1CEaoi%2Bswy0OdmJya9nDamotbiFBXQqW7IbtLcC9SSD%2FneDpo8DyNqyKRBZm2a%2FC4JgjFxZQU3Rpd9AOfcMU6aEMP7k8L4GOqUBKAWo7z%2Brnke9d6Kt%2FnkeuMSe%2BwLch2rceY1V7DRxYbjweeFnASPHtNnIkTQ%2FxYaLKgj%2F%2FNEYG0uPxu5igCSzdNMpcxjumlBNfmDoLf%2BFqO2hvPqUWBJLtP9yPcxpuC%2ByUyzH9M8ONabpEnlLBmv3tcgISkIsW9dnSWd04r1j8MImqM3PHIr7MtOmGFKrkF0NBQy%2FejnKRjRAG9D3Yn5pyXQeSqf6&X-Amz-Signature=231102660823fadfb960c341b47c7c6800285587301c944d02c50d1d7a8eeaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQXXDA3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCYIELzQfjD9q0EaEld%2BNfhdCikO4DnIZmYxveq9pBMfAIgDrFKodARAG1gdsT8MaFcEZGyv2CZm3SZyKlboaJGT%2F8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxdXww8ofb4XU%2BTQircA%2FQuT8J7Pq68JL9aex4UkFLFwVYsqgbqVKN2dR6fzygDwXfNrNZa0Qhl%2BLJCg49kiZAR68eXXPdXEUYEdfb%2BWc4q5iVWSRqA6uz7CyxLjjDt45MIDUA6ok7Dt%2F0v1dZFggHENqhveD5mEFJMdz%2BGKTY5y5guIPTHL19DW6tMAMlaXnEYYnYM%2B01XprS7E7050LnRdAbZl3dDirAXBXK7puWhOon3DlrE91CzMKy9qmcAvwAS0WKm7R0WdYOclMyaswjg7jv4M36HU2znNnh%2FDn6IE1I5TVmqWdLDzhR2eeZP51bn13m%2FedmBt3GPkYORWzyIs4GKVcBsVMTn5FWuA4PUEKG2%2FFv8c30vwDoiKthrEWf%2BNnfV4IQ0kmz0cX%2Fwdtn5QjLdf6uetfLzS%2BqQqhRYKgagdPkrPr4pPqbVd%2FHX%2BDa7kmOz9OP4DycvKmYrRGds9iL4OtR3vnIYcQE5avvE0%2B7KcD92%2BCb3wS89V0MQFYAOO77zLAuILMtRuQQHCYhfgppY84RBUXH5ny1P7U8NlDR3a0sjaDeBe1CEaoi%2Bswy0OdmJya9nDamotbiFBXQqW7IbtLcC9SSD%2FneDpo8DyNqyKRBZm2a%2FC4JgjFxZQU3Rpd9AOfcMU6aEMP7k8L4GOqUBKAWo7z%2Brnke9d6Kt%2FnkeuMSe%2BwLch2rceY1V7DRxYbjweeFnASPHtNnIkTQ%2FxYaLKgj%2F%2FNEYG0uPxu5igCSzdNMpcxjumlBNfmDoLf%2BFqO2hvPqUWBJLtP9yPcxpuC%2ByUyzH9M8ONabpEnlLBmv3tcgISkIsW9dnSWd04r1j8MImqM3PHIr7MtOmGFKrkF0NBQy%2FejnKRjRAG9D3Yn5pyXQeSqf6&X-Amz-Signature=7e3331138e2ae3819441f95ce2940c0b6d887377636842bda76a83bd8e4f0219&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQXXDA3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCYIELzQfjD9q0EaEld%2BNfhdCikO4DnIZmYxveq9pBMfAIgDrFKodARAG1gdsT8MaFcEZGyv2CZm3SZyKlboaJGT%2F8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxdXww8ofb4XU%2BTQircA%2FQuT8J7Pq68JL9aex4UkFLFwVYsqgbqVKN2dR6fzygDwXfNrNZa0Qhl%2BLJCg49kiZAR68eXXPdXEUYEdfb%2BWc4q5iVWSRqA6uz7CyxLjjDt45MIDUA6ok7Dt%2F0v1dZFggHENqhveD5mEFJMdz%2BGKTY5y5guIPTHL19DW6tMAMlaXnEYYnYM%2B01XprS7E7050LnRdAbZl3dDirAXBXK7puWhOon3DlrE91CzMKy9qmcAvwAS0WKm7R0WdYOclMyaswjg7jv4M36HU2znNnh%2FDn6IE1I5TVmqWdLDzhR2eeZP51bn13m%2FedmBt3GPkYORWzyIs4GKVcBsVMTn5FWuA4PUEKG2%2FFv8c30vwDoiKthrEWf%2BNnfV4IQ0kmz0cX%2Fwdtn5QjLdf6uetfLzS%2BqQqhRYKgagdPkrPr4pPqbVd%2FHX%2BDa7kmOz9OP4DycvKmYrRGds9iL4OtR3vnIYcQE5avvE0%2B7KcD92%2BCb3wS89V0MQFYAOO77zLAuILMtRuQQHCYhfgppY84RBUXH5ny1P7U8NlDR3a0sjaDeBe1CEaoi%2Bswy0OdmJya9nDamotbiFBXQqW7IbtLcC9SSD%2FneDpo8DyNqyKRBZm2a%2FC4JgjFxZQU3Rpd9AOfcMU6aEMP7k8L4GOqUBKAWo7z%2Brnke9d6Kt%2FnkeuMSe%2BwLch2rceY1V7DRxYbjweeFnASPHtNnIkTQ%2FxYaLKgj%2F%2FNEYG0uPxu5igCSzdNMpcxjumlBNfmDoLf%2BFqO2hvPqUWBJLtP9yPcxpuC%2ByUyzH9M8ONabpEnlLBmv3tcgISkIsW9dnSWd04r1j8MImqM3PHIr7MtOmGFKrkF0NBQy%2FejnKRjRAG9D3Yn5pyXQeSqf6&X-Amz-Signature=429add968cd4e0917b5eac92c650da1abf010578d98a893f7bc84c43fae62711&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
