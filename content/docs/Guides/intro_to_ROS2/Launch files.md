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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXBBL2L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGgihyNRL%2FMfUOxUO%2FdyAiqz%2FNbVNVZ3NYv6IRdgcZMDAiEA0f7NutXjYRwZHBXZVIuYf14CQJ76ls%2BIXxJnltOkA4AqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2y9eJ9i5oHrzwk%2BircA3oxjTjCVZ8aK%2FYpFMfqVklHsLM7mG23gImBeTeow9Nu8iSkrRnjY1%2FZ3SwSiOt5N5YWfqJXYlVrkJYVaB%2FRvcahishz16eEX4Q3qNssVfRkeeAdC75ocAZIbTrYum4G%2BTRlJcMOAzF0ej0yTz1ujHrDcMJNYzL3vWGtEURYO%2BEjpf%2F8ThrKgBk40TaA%2Fh3LZEAYDvMSwNPVZoJCBzpL8YrymcpM1mR%2B9O%2FqbImDf6Ew1mvAjr7DLjwtNJ2U%2BsognYAacjQHdEmZ1%2BDRc69beLUXDtjkRWsBlh2hri1vkZ8FJ15YBG6C95H8LovkoVNb88xzsZrqMoveX12P4BrQGWpKE7KlKazqPG9YrqrCQncLd%2F%2FPyBBSQ%2FzpVUR3btzEUOOHK5UW82Wm75P2ofTYL9pFTWqzdAONIhCiuT55iaGA1dndIYD3zVMa1JV6stl0g%2BMlzn84im5398kXOfw5YQneOMfAPFnJaSAdEPKdh9K0pIrI1vXE463dZ45Wb8NakcktUSKFk2%2FNntiOX9gv%2FgEwrL7uqL3UruzaHT%2BJWBtuGKaoHcCIRiADqkwynPz8gGt%2BvldPL2i8SxH6Q%2B69Y3qWdEHjctk2ObGLQXk%2Fzg7NmfFtRxnXSHVaLFkWMKGk5r8GOqUBxztquayY2uXngXPJwK9zmnRBIrcGfaeOEF%2FEoBVVGNVIKFu8xG7xOnaJ6EmcyEQQw2M%2F52JISM4%2BoAd3l%2BMw9TyeabwRln0owksq75FczGaA3YLJxLVaMHV4YzZH2jSsYq4g2XCONtr3xShzod%2F71lO0GADJZGX43NJ8%2BGHRLNGKqJS%2Ft2DVpJL6%2Fok6363Q0LFs2spCNlaqVesYrJnzWWwJ%2F3r7&X-Amz-Signature=98460777868c4c77b21e88eca48b977de2a8faa4011a6b784f972b1f90964032&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXBBL2L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGgihyNRL%2FMfUOxUO%2FdyAiqz%2FNbVNVZ3NYv6IRdgcZMDAiEA0f7NutXjYRwZHBXZVIuYf14CQJ76ls%2BIXxJnltOkA4AqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2y9eJ9i5oHrzwk%2BircA3oxjTjCVZ8aK%2FYpFMfqVklHsLM7mG23gImBeTeow9Nu8iSkrRnjY1%2FZ3SwSiOt5N5YWfqJXYlVrkJYVaB%2FRvcahishz16eEX4Q3qNssVfRkeeAdC75ocAZIbTrYum4G%2BTRlJcMOAzF0ej0yTz1ujHrDcMJNYzL3vWGtEURYO%2BEjpf%2F8ThrKgBk40TaA%2Fh3LZEAYDvMSwNPVZoJCBzpL8YrymcpM1mR%2B9O%2FqbImDf6Ew1mvAjr7DLjwtNJ2U%2BsognYAacjQHdEmZ1%2BDRc69beLUXDtjkRWsBlh2hri1vkZ8FJ15YBG6C95H8LovkoVNb88xzsZrqMoveX12P4BrQGWpKE7KlKazqPG9YrqrCQncLd%2F%2FPyBBSQ%2FzpVUR3btzEUOOHK5UW82Wm75P2ofTYL9pFTWqzdAONIhCiuT55iaGA1dndIYD3zVMa1JV6stl0g%2BMlzn84im5398kXOfw5YQneOMfAPFnJaSAdEPKdh9K0pIrI1vXE463dZ45Wb8NakcktUSKFk2%2FNntiOX9gv%2FgEwrL7uqL3UruzaHT%2BJWBtuGKaoHcCIRiADqkwynPz8gGt%2BvldPL2i8SxH6Q%2B69Y3qWdEHjctk2ObGLQXk%2Fzg7NmfFtRxnXSHVaLFkWMKGk5r8GOqUBxztquayY2uXngXPJwK9zmnRBIrcGfaeOEF%2FEoBVVGNVIKFu8xG7xOnaJ6EmcyEQQw2M%2F52JISM4%2BoAd3l%2BMw9TyeabwRln0owksq75FczGaA3YLJxLVaMHV4YzZH2jSsYq4g2XCONtr3xShzod%2F71lO0GADJZGX43NJ8%2BGHRLNGKqJS%2Ft2DVpJL6%2Fok6363Q0LFs2spCNlaqVesYrJnzWWwJ%2F3r7&X-Amz-Signature=853888b26c202bf53817af8fedfb17d72f9611a61c3477d3356ccfa13d96a5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXBBL2L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGgihyNRL%2FMfUOxUO%2FdyAiqz%2FNbVNVZ3NYv6IRdgcZMDAiEA0f7NutXjYRwZHBXZVIuYf14CQJ76ls%2BIXxJnltOkA4AqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2y9eJ9i5oHrzwk%2BircA3oxjTjCVZ8aK%2FYpFMfqVklHsLM7mG23gImBeTeow9Nu8iSkrRnjY1%2FZ3SwSiOt5N5YWfqJXYlVrkJYVaB%2FRvcahishz16eEX4Q3qNssVfRkeeAdC75ocAZIbTrYum4G%2BTRlJcMOAzF0ej0yTz1ujHrDcMJNYzL3vWGtEURYO%2BEjpf%2F8ThrKgBk40TaA%2Fh3LZEAYDvMSwNPVZoJCBzpL8YrymcpM1mR%2B9O%2FqbImDf6Ew1mvAjr7DLjwtNJ2U%2BsognYAacjQHdEmZ1%2BDRc69beLUXDtjkRWsBlh2hri1vkZ8FJ15YBG6C95H8LovkoVNb88xzsZrqMoveX12P4BrQGWpKE7KlKazqPG9YrqrCQncLd%2F%2FPyBBSQ%2FzpVUR3btzEUOOHK5UW82Wm75P2ofTYL9pFTWqzdAONIhCiuT55iaGA1dndIYD3zVMa1JV6stl0g%2BMlzn84im5398kXOfw5YQneOMfAPFnJaSAdEPKdh9K0pIrI1vXE463dZ45Wb8NakcktUSKFk2%2FNntiOX9gv%2FgEwrL7uqL3UruzaHT%2BJWBtuGKaoHcCIRiADqkwynPz8gGt%2BvldPL2i8SxH6Q%2B69Y3qWdEHjctk2ObGLQXk%2Fzg7NmfFtRxnXSHVaLFkWMKGk5r8GOqUBxztquayY2uXngXPJwK9zmnRBIrcGfaeOEF%2FEoBVVGNVIKFu8xG7xOnaJ6EmcyEQQw2M%2F52JISM4%2BoAd3l%2BMw9TyeabwRln0owksq75FczGaA3YLJxLVaMHV4YzZH2jSsYq4g2XCONtr3xShzod%2F71lO0GADJZGX43NJ8%2BGHRLNGKqJS%2Ft2DVpJL6%2Fok6363Q0LFs2spCNlaqVesYrJnzWWwJ%2F3r7&X-Amz-Signature=0fec863761ef03a854107bc59000fc96cb7afb7ba89fb73ffe7a41ea8f52d6db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
