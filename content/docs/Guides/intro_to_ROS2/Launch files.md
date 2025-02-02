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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35JX23L%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu2n2O1lrHpYG6ENCmWoNgF8bhAesPes37OkyAoljZIQIgOGNIShx14o75nsObdbzcGVwdP2G4pCPhWfU3miesiqkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbymG8xg%2BYmMAPpLSrcA6lEVE%2BRw2nLyWtfrNdHER5e5FvYpxgH5qo9PzPKJJ20TOGkTULVtcsf81h0OiszQ%2BSG3tNU%2FuRI5xZB%2FfNNKUncMP0gE0v4k3WJ5qhAdtZf4N28oo5rrW2x2ULrCdSyve9LcHubP3ze03RGJLGtKxPfHezuSF7BQF9QTAFayzMG3I8d4uQLiAhsMR4T4iwkdBC7MMKOvAHH4PVyg41Nemt0amUhoJN6TgRA%2Fbg9UsY5wFQsOjNqswc%2F153%2FDv%2B80TqL%2FP0sFvpdGPZlnV4PXw4FQXG9NvR%2BOalxoJnPJt4n9Xq8Dhk5sAonlthNdCusoAeXS8qnoe07gas0gBFpTY%2Fl2Lf3E%2Buu5N9gt%2FaMgEAMOhSwe%2Fxuq8GoCEgRPRbDwIaEX6jCFCnKZAc4lruDeG1mYuLTV1ENqZiCiG9BqR%2B1XcB7oHXlbJkxTsI4BIWEthtUwCZz%2BtX6jewHyTn62Z%2BZuIZbHGDz2jDx18JxXB9ion6fq6J3vMEYamhfEHPfJTH3f%2FSK6zz4%2BM%2F3rDiiUaTcxFEV8omI0pbCuySdmogFXDtI%2BTotbwkn37Nr9kv%2BJId1xnb%2BFeUDRNKAIrDdGesaqlbP%2FgGuH9CBWmSprCsZoc7b77OAH2R8oxwGMJbi%2FrwGOqUBBWi6i3kmYzKQAHOt%2BPPeoTMtjbMVyhRPCOFVVcnCsc3WGbFoWDCkoXg1I2rgTqIROBDlkj4ArV%2FIaffmBLqAhCv42OLvfHH1tn4gt1qGiFbCdAb5CUoMG6a6S0vQeLs1DhaC2fphO7jRle3n2GMq5rVOOAeWLnNKTQebUoXi9TbNF8VVa3N4M4ZBSufD%2BePXGNIzJxr6uuD7Z56faRyt3ftzwf4Y&X-Amz-Signature=a3834bb63172448d13a0f9c9fd15e57152216bfb935a9f4187c36425b26b3719&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35JX23L%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu2n2O1lrHpYG6ENCmWoNgF8bhAesPes37OkyAoljZIQIgOGNIShx14o75nsObdbzcGVwdP2G4pCPhWfU3miesiqkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbymG8xg%2BYmMAPpLSrcA6lEVE%2BRw2nLyWtfrNdHER5e5FvYpxgH5qo9PzPKJJ20TOGkTULVtcsf81h0OiszQ%2BSG3tNU%2FuRI5xZB%2FfNNKUncMP0gE0v4k3WJ5qhAdtZf4N28oo5rrW2x2ULrCdSyve9LcHubP3ze03RGJLGtKxPfHezuSF7BQF9QTAFayzMG3I8d4uQLiAhsMR4T4iwkdBC7MMKOvAHH4PVyg41Nemt0amUhoJN6TgRA%2Fbg9UsY5wFQsOjNqswc%2F153%2FDv%2B80TqL%2FP0sFvpdGPZlnV4PXw4FQXG9NvR%2BOalxoJnPJt4n9Xq8Dhk5sAonlthNdCusoAeXS8qnoe07gas0gBFpTY%2Fl2Lf3E%2Buu5N9gt%2FaMgEAMOhSwe%2Fxuq8GoCEgRPRbDwIaEX6jCFCnKZAc4lruDeG1mYuLTV1ENqZiCiG9BqR%2B1XcB7oHXlbJkxTsI4BIWEthtUwCZz%2BtX6jewHyTn62Z%2BZuIZbHGDz2jDx18JxXB9ion6fq6J3vMEYamhfEHPfJTH3f%2FSK6zz4%2BM%2F3rDiiUaTcxFEV8omI0pbCuySdmogFXDtI%2BTotbwkn37Nr9kv%2BJId1xnb%2BFeUDRNKAIrDdGesaqlbP%2FgGuH9CBWmSprCsZoc7b77OAH2R8oxwGMJbi%2FrwGOqUBBWi6i3kmYzKQAHOt%2BPPeoTMtjbMVyhRPCOFVVcnCsc3WGbFoWDCkoXg1I2rgTqIROBDlkj4ArV%2FIaffmBLqAhCv42OLvfHH1tn4gt1qGiFbCdAb5CUoMG6a6S0vQeLs1DhaC2fphO7jRle3n2GMq5rVOOAeWLnNKTQebUoXi9TbNF8VVa3N4M4ZBSufD%2BePXGNIzJxr6uuD7Z56faRyt3ftzwf4Y&X-Amz-Signature=db7065058ecc7b30fcb1e3c2ea303c43a82116381e96c8a158d413271099a1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35JX23L%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu2n2O1lrHpYG6ENCmWoNgF8bhAesPes37OkyAoljZIQIgOGNIShx14o75nsObdbzcGVwdP2G4pCPhWfU3miesiqkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbymG8xg%2BYmMAPpLSrcA6lEVE%2BRw2nLyWtfrNdHER5e5FvYpxgH5qo9PzPKJJ20TOGkTULVtcsf81h0OiszQ%2BSG3tNU%2FuRI5xZB%2FfNNKUncMP0gE0v4k3WJ5qhAdtZf4N28oo5rrW2x2ULrCdSyve9LcHubP3ze03RGJLGtKxPfHezuSF7BQF9QTAFayzMG3I8d4uQLiAhsMR4T4iwkdBC7MMKOvAHH4PVyg41Nemt0amUhoJN6TgRA%2Fbg9UsY5wFQsOjNqswc%2F153%2FDv%2B80TqL%2FP0sFvpdGPZlnV4PXw4FQXG9NvR%2BOalxoJnPJt4n9Xq8Dhk5sAonlthNdCusoAeXS8qnoe07gas0gBFpTY%2Fl2Lf3E%2Buu5N9gt%2FaMgEAMOhSwe%2Fxuq8GoCEgRPRbDwIaEX6jCFCnKZAc4lruDeG1mYuLTV1ENqZiCiG9BqR%2B1XcB7oHXlbJkxTsI4BIWEthtUwCZz%2BtX6jewHyTn62Z%2BZuIZbHGDz2jDx18JxXB9ion6fq6J3vMEYamhfEHPfJTH3f%2FSK6zz4%2BM%2F3rDiiUaTcxFEV8omI0pbCuySdmogFXDtI%2BTotbwkn37Nr9kv%2BJId1xnb%2BFeUDRNKAIrDdGesaqlbP%2FgGuH9CBWmSprCsZoc7b77OAH2R8oxwGMJbi%2FrwGOqUBBWi6i3kmYzKQAHOt%2BPPeoTMtjbMVyhRPCOFVVcnCsc3WGbFoWDCkoXg1I2rgTqIROBDlkj4ArV%2FIaffmBLqAhCv42OLvfHH1tn4gt1qGiFbCdAb5CUoMG6a6S0vQeLs1DhaC2fphO7jRle3n2GMq5rVOOAeWLnNKTQebUoXi9TbNF8VVa3N4M4ZBSufD%2BePXGNIzJxr6uuD7Z56faRyt3ftzwf4Y&X-Amz-Signature=0695daf5c43d0ce38067b171b0b7178084bbc300864016d0030984a218e29e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
