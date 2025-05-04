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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE55NFY7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICqnLsndoCxZjHvOwy3aXptNV3ooOkxmb6bXRt4nhYosAiB%2Fu202qERO%2FBNDQtoa37oNkIMFoieaFeObQIhFhVGwuCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoOf0toC9kmYOlmD2KtwDGOYyxc8XiXjlFxbmTKz%2F%2F%2FN9B9MyAsICKiOM9QyFGGFSF50K9KI%2Fhxay6RzSutccgf%2BeKCkAP4ZCe6uY%2BGi%2FrJUBq%2BLy8psQAr2%2Bu990VbIriZiOXzIBJcqPS3vuGGgeBZcGXYa5hjOU0P4FBJGhprovieKOoC8G7keGjqQw%2Br143a1z8XNnoaUgIDTfQKRqsQdU%2BlECpY2agOQ5u2IVYTJY5ue7qLLmb1ef1CGMe%2FHQr1X0v9FSca3O6OQE7pwXCf4iWi3EI0ooipArZN6cIPWx%2B%2FDCu9s3PFTFh0NMxpjOvh2coZBNntqt625tfo48VvshqeA%2FzyK2QL2Cs13a3pWIlt0MsDF7tEIPxfBcEKbzFm3G6ICQ2bqAx%2BsIcuxWvUjFaC2Rwn80De5jSh9F7emtci0smmfLdfUngmKIDPFQFHbqH8IqIY6OXuoRLw5AkAzCjMn7jQxLIgZAFVC8heA5MZvONYymuU5VetJZ4otCbixAzJbZsUY5RWDGP3XvsBWbegAUxSDWmxnCgVdgCNXGenLQBAIOOaAsIQp4nql8ZJbPm4e0Ks%2BaCPa6K8v7sp8git2%2BuNF08RLm1FZd7LDZZ51fClGTWwgLEV%2FTu9fRk0rxRCVBCbUm518wkYfdwAY6pgHWFJpGrmhjfG%2BFS6irsBDFg35eRXTf9LXINNQE%2FX7GmEhsl3fJ79%2BF6pmmiCQnPfzdPAi0OHhlTG888H%2FH%2Fmpc91AwizZ%2FbJAKY3%2FzoG3zK3WrELa6Ti2sseBgaSUQH8U%2FCstpECykz8RVenV2C1OwiTZ%2F2GXcqCMv6aSrXiKJ8%2FHgf68o%2FdyiSs21Z7ppEU%2B8r1IbXcS66qCuvk55APlTfB6kM1Xz&X-Amz-Signature=ee9634e9b11a8497037d49fec59db4e17428f3598a2bb1f4bfd9f2f9fa95ab22&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE55NFY7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICqnLsndoCxZjHvOwy3aXptNV3ooOkxmb6bXRt4nhYosAiB%2Fu202qERO%2FBNDQtoa37oNkIMFoieaFeObQIhFhVGwuCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoOf0toC9kmYOlmD2KtwDGOYyxc8XiXjlFxbmTKz%2F%2F%2FN9B9MyAsICKiOM9QyFGGFSF50K9KI%2Fhxay6RzSutccgf%2BeKCkAP4ZCe6uY%2BGi%2FrJUBq%2BLy8psQAr2%2Bu990VbIriZiOXzIBJcqPS3vuGGgeBZcGXYa5hjOU0P4FBJGhprovieKOoC8G7keGjqQw%2Br143a1z8XNnoaUgIDTfQKRqsQdU%2BlECpY2agOQ5u2IVYTJY5ue7qLLmb1ef1CGMe%2FHQr1X0v9FSca3O6OQE7pwXCf4iWi3EI0ooipArZN6cIPWx%2B%2FDCu9s3PFTFh0NMxpjOvh2coZBNntqt625tfo48VvshqeA%2FzyK2QL2Cs13a3pWIlt0MsDF7tEIPxfBcEKbzFm3G6ICQ2bqAx%2BsIcuxWvUjFaC2Rwn80De5jSh9F7emtci0smmfLdfUngmKIDPFQFHbqH8IqIY6OXuoRLw5AkAzCjMn7jQxLIgZAFVC8heA5MZvONYymuU5VetJZ4otCbixAzJbZsUY5RWDGP3XvsBWbegAUxSDWmxnCgVdgCNXGenLQBAIOOaAsIQp4nql8ZJbPm4e0Ks%2BaCPa6K8v7sp8git2%2BuNF08RLm1FZd7LDZZ51fClGTWwgLEV%2FTu9fRk0rxRCVBCbUm518wkYfdwAY6pgHWFJpGrmhjfG%2BFS6irsBDFg35eRXTf9LXINNQE%2FX7GmEhsl3fJ79%2BF6pmmiCQnPfzdPAi0OHhlTG888H%2FH%2Fmpc91AwizZ%2FbJAKY3%2FzoG3zK3WrELa6Ti2sseBgaSUQH8U%2FCstpECykz8RVenV2C1OwiTZ%2F2GXcqCMv6aSrXiKJ8%2FHgf68o%2FdyiSs21Z7ppEU%2B8r1IbXcS66qCuvk55APlTfB6kM1Xz&X-Amz-Signature=00cab7538123e3f0f092286572c1b14542f301a8920c187f15fa085658eaf846&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE55NFY7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICqnLsndoCxZjHvOwy3aXptNV3ooOkxmb6bXRt4nhYosAiB%2Fu202qERO%2FBNDQtoa37oNkIMFoieaFeObQIhFhVGwuCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoOf0toC9kmYOlmD2KtwDGOYyxc8XiXjlFxbmTKz%2F%2F%2FN9B9MyAsICKiOM9QyFGGFSF50K9KI%2Fhxay6RzSutccgf%2BeKCkAP4ZCe6uY%2BGi%2FrJUBq%2BLy8psQAr2%2Bu990VbIriZiOXzIBJcqPS3vuGGgeBZcGXYa5hjOU0P4FBJGhprovieKOoC8G7keGjqQw%2Br143a1z8XNnoaUgIDTfQKRqsQdU%2BlECpY2agOQ5u2IVYTJY5ue7qLLmb1ef1CGMe%2FHQr1X0v9FSca3O6OQE7pwXCf4iWi3EI0ooipArZN6cIPWx%2B%2FDCu9s3PFTFh0NMxpjOvh2coZBNntqt625tfo48VvshqeA%2FzyK2QL2Cs13a3pWIlt0MsDF7tEIPxfBcEKbzFm3G6ICQ2bqAx%2BsIcuxWvUjFaC2Rwn80De5jSh9F7emtci0smmfLdfUngmKIDPFQFHbqH8IqIY6OXuoRLw5AkAzCjMn7jQxLIgZAFVC8heA5MZvONYymuU5VetJZ4otCbixAzJbZsUY5RWDGP3XvsBWbegAUxSDWmxnCgVdgCNXGenLQBAIOOaAsIQp4nql8ZJbPm4e0Ks%2BaCPa6K8v7sp8git2%2BuNF08RLm1FZd7LDZZ51fClGTWwgLEV%2FTu9fRk0rxRCVBCbUm518wkYfdwAY6pgHWFJpGrmhjfG%2BFS6irsBDFg35eRXTf9LXINNQE%2FX7GmEhsl3fJ79%2BF6pmmiCQnPfzdPAi0OHhlTG888H%2FH%2Fmpc91AwizZ%2FbJAKY3%2FzoG3zK3WrELa6Ti2sseBgaSUQH8U%2FCstpECykz8RVenV2C1OwiTZ%2F2GXcqCMv6aSrXiKJ8%2FHgf68o%2FdyiSs21Z7ppEU%2B8r1IbXcS66qCuvk55APlTfB6kM1Xz&X-Amz-Signature=6340871231ea354690f08a46bab831aa0df4829a0428defae89e6827b009e3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
