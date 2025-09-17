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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIU2EYC%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDufcZZqfR1JN2k5PFaEny3K27p9Dwrpla3btafysXKTAIhAJn%2FoXv0cLJeNo7MjvmaZ0l17yOBKhvW6ibkTiQamk%2FIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO5KDq7x7Kgmk8NrUq3APV8VkIWte1A5e3pHruHia3b%2B93xYfWEZTYRXen8m21nPalEKFnPpO1Z%2BqCOs1EXeayq6z01RRLdqM8klXFmBPjxPtozTz7cbpADHiWhMaIFTogo4tA%2FCBhU1eZX8s%2B5T%2FWHZf5G5QMr7zELP3I9cnvgJgxoiCHNICdSD5ftQyT3iIe14UHeWv%2FbD%2B0seMFmtMf8dtVEQNlC3bgCq8COH5%2FwVa5L4ZSNqCP424rncxK6%2BjdSI%2F%2FGvPh7P2uEgG33zFTPKcjXblBkXyQNmC%2BJY%2FcUhn2I5svD50%2Flf219MX%2BkfsZzaUAlWA6vA09pz4vGztOWGZgL1Bq3Ry9DIBBdnmUPljXbI%2B1Y5QYCmFF38BrPp4rMwI9Gqv7Y50ocS0MYTncf8ebPn%2B%2Bs%2BOxrFJQ6JWdxgt7mCtPxUUVA18rxeU76JsIFUFIDyUTpZmxsQL3UW2YdjKTW%2FqvVDFP0Cv5%2BTXJpk20SpIwNJZ%2FzaDp6hMmQIcl3rLiME00XcsGOWdCjbAM%2Fnv533YvtgDnk8%2BSWub1VpibKNNjsat7ldXBTfRWZthE53kWh99%2BAYINSXHcqev3nCaN8kB4e%2BjxW6a6jZz081Ma4P2%2BEGlQ6bMWtwxRhezzJUGkic7EltOaGTDx76fGBjqkAUsgkk%2Bt%2F%2B6N7b1E46T4CiG8XwlIzQ0QGFfY7aaMMFSTxypowQsbnxbEIW9pQfwLxgeb%2F4GzmmBMdPJ2mc957OHNs6Jzfhkc8fN5LoqFT65cda1crjH9NqnAm%2BVuAjxRNW2EmfL9hEOg02dz1oP0eP6hPcPzPsqFj%2BuAYJrczhUiRCw57hItxnFgnCudpoLdo18FBP4aSz2w6kzDWhG6Eg3Paht0&X-Amz-Signature=770bb0e82a5dd737b48f7a5db83c6cd36d99d525067165e5988b8c5f69bbf1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIU2EYC%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDufcZZqfR1JN2k5PFaEny3K27p9Dwrpla3btafysXKTAIhAJn%2FoXv0cLJeNo7MjvmaZ0l17yOBKhvW6ibkTiQamk%2FIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO5KDq7x7Kgmk8NrUq3APV8VkIWte1A5e3pHruHia3b%2B93xYfWEZTYRXen8m21nPalEKFnPpO1Z%2BqCOs1EXeayq6z01RRLdqM8klXFmBPjxPtozTz7cbpADHiWhMaIFTogo4tA%2FCBhU1eZX8s%2B5T%2FWHZf5G5QMr7zELP3I9cnvgJgxoiCHNICdSD5ftQyT3iIe14UHeWv%2FbD%2B0seMFmtMf8dtVEQNlC3bgCq8COH5%2FwVa5L4ZSNqCP424rncxK6%2BjdSI%2F%2FGvPh7P2uEgG33zFTPKcjXblBkXyQNmC%2BJY%2FcUhn2I5svD50%2Flf219MX%2BkfsZzaUAlWA6vA09pz4vGztOWGZgL1Bq3Ry9DIBBdnmUPljXbI%2B1Y5QYCmFF38BrPp4rMwI9Gqv7Y50ocS0MYTncf8ebPn%2B%2Bs%2BOxrFJQ6JWdxgt7mCtPxUUVA18rxeU76JsIFUFIDyUTpZmxsQL3UW2YdjKTW%2FqvVDFP0Cv5%2BTXJpk20SpIwNJZ%2FzaDp6hMmQIcl3rLiME00XcsGOWdCjbAM%2Fnv533YvtgDnk8%2BSWub1VpibKNNjsat7ldXBTfRWZthE53kWh99%2BAYINSXHcqev3nCaN8kB4e%2BjxW6a6jZz081Ma4P2%2BEGlQ6bMWtwxRhezzJUGkic7EltOaGTDx76fGBjqkAUsgkk%2Bt%2F%2B6N7b1E46T4CiG8XwlIzQ0QGFfY7aaMMFSTxypowQsbnxbEIW9pQfwLxgeb%2F4GzmmBMdPJ2mc957OHNs6Jzfhkc8fN5LoqFT65cda1crjH9NqnAm%2BVuAjxRNW2EmfL9hEOg02dz1oP0eP6hPcPzPsqFj%2BuAYJrczhUiRCw57hItxnFgnCudpoLdo18FBP4aSz2w6kzDWhG6Eg3Paht0&X-Amz-Signature=25dea43d04038495c59e42659500ed02dc50b3910c12409c80fb2953b3e5329b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIU2EYC%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDufcZZqfR1JN2k5PFaEny3K27p9Dwrpla3btafysXKTAIhAJn%2FoXv0cLJeNo7MjvmaZ0l17yOBKhvW6ibkTiQamk%2FIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO5KDq7x7Kgmk8NrUq3APV8VkIWte1A5e3pHruHia3b%2B93xYfWEZTYRXen8m21nPalEKFnPpO1Z%2BqCOs1EXeayq6z01RRLdqM8klXFmBPjxPtozTz7cbpADHiWhMaIFTogo4tA%2FCBhU1eZX8s%2B5T%2FWHZf5G5QMr7zELP3I9cnvgJgxoiCHNICdSD5ftQyT3iIe14UHeWv%2FbD%2B0seMFmtMf8dtVEQNlC3bgCq8COH5%2FwVa5L4ZSNqCP424rncxK6%2BjdSI%2F%2FGvPh7P2uEgG33zFTPKcjXblBkXyQNmC%2BJY%2FcUhn2I5svD50%2Flf219MX%2BkfsZzaUAlWA6vA09pz4vGztOWGZgL1Bq3Ry9DIBBdnmUPljXbI%2B1Y5QYCmFF38BrPp4rMwI9Gqv7Y50ocS0MYTncf8ebPn%2B%2Bs%2BOxrFJQ6JWdxgt7mCtPxUUVA18rxeU76JsIFUFIDyUTpZmxsQL3UW2YdjKTW%2FqvVDFP0Cv5%2BTXJpk20SpIwNJZ%2FzaDp6hMmQIcl3rLiME00XcsGOWdCjbAM%2Fnv533YvtgDnk8%2BSWub1VpibKNNjsat7ldXBTfRWZthE53kWh99%2BAYINSXHcqev3nCaN8kB4e%2BjxW6a6jZz081Ma4P2%2BEGlQ6bMWtwxRhezzJUGkic7EltOaGTDx76fGBjqkAUsgkk%2Bt%2F%2B6N7b1E46T4CiG8XwlIzQ0QGFfY7aaMMFSTxypowQsbnxbEIW9pQfwLxgeb%2F4GzmmBMdPJ2mc957OHNs6Jzfhkc8fN5LoqFT65cda1crjH9NqnAm%2BVuAjxRNW2EmfL9hEOg02dz1oP0eP6hPcPzPsqFj%2BuAYJrczhUiRCw57hItxnFgnCudpoLdo18FBP4aSz2w6kzDWhG6Eg3Paht0&X-Amz-Signature=5f1e30e0f3edf6a39d5be014ec326120263cce8aef40cebc4a46f3e502a37f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
