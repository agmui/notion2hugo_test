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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKO4B2C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXhvF3nxwGRvz5d2l8o3fQ5kQzzB%2FeaMOKKQ9Rop3EwIhAPU9GxdUP3DeXwe3KRuS2GhVITR5%2B4S5oGENNd%2BtneKIKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2z9wrSRHcyWqXFDIq3ANlRJzZ1C4gpioIGxO22oX1zIs8raUqlZd4VMIAb0pd%2BgsBQsOE%2B5%2B9QNFEKwaTjHmR4SX49mHPCCNrQtw%2F9n%2F73j%2F68DgL5jvBzmWkRgF1B0oVuoFnnybaY%2BrBtIOPqx3A6UOF%2FXqalaNgQ6XwFBqL2bbuF0uWBoIQ6Bv7uNHvvRd%2BHx1q%2BxFMKUVGpGlIeb0YRR86vkraauleZXY%2BPYIoLzbI3Au4zJh50qmK4XDafrQXbWnREredFk28CjGSRW17yAeZVMk8l%2BNN%2B2%2BWEtzYlG6OlxEmNYdmgKoW6M2iuIZZSfhGDa1ZrWcv1ozP1xFiGXkar%2FFUnm6XNGFD42B0y0R54IPmKFxEaSTolw%2BkKVe6%2BY24o4Ltxfq3bT1Xars9fttWk7XnNY6ZgWzT5MQP167Ckfpc8zqt2G4uz1R4M8ggYgTikyM6BiGIfUmWPT6thn9Pt9iAjR3RCitjah23ZN3HplzDp4J5Zwe7QAuY8JieLjelWvTgKFriwBzZnf1bdUIiVIU7TTA0MmhJMLa7bNxBPIKEi9Orehl6t8iNzbjDODSoP6FfTOTDMLJZeTgPG%2Fbaq7LlmI5rZUsZmYEs3iE90VDzbAOfgMGzpJ4UZpemSiiEJ3O%2F7arBdTDe5azBBjqkAV7atCtcAVtgV61UXzgjTrSlqKFVILLH%2Fz8V7zJVJbskj9Bzfgy%2BdoJL7U1RWWzxwoBhW505gF3q9cx7vPMaRmf7XDPTFGeMUtQp1gpu%2BBtJSOv9F63uMf8F%2FDGkHwa1Qm7HWW%2FsOCjnZDODcOHlcS7JeHJx0sPSNqp%2BXcL%2BjAB2O0%2BmjwZfrQPmn7g7611Er1nwYMeTF5zg2CEL5EzpabsV8FVQ&X-Amz-Signature=875a82d14e4f2919e74a0e6c4088dd818a12c5f777982a81ff84e945e034a766&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKO4B2C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXhvF3nxwGRvz5d2l8o3fQ5kQzzB%2FeaMOKKQ9Rop3EwIhAPU9GxdUP3DeXwe3KRuS2GhVITR5%2B4S5oGENNd%2BtneKIKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2z9wrSRHcyWqXFDIq3ANlRJzZ1C4gpioIGxO22oX1zIs8raUqlZd4VMIAb0pd%2BgsBQsOE%2B5%2B9QNFEKwaTjHmR4SX49mHPCCNrQtw%2F9n%2F73j%2F68DgL5jvBzmWkRgF1B0oVuoFnnybaY%2BrBtIOPqx3A6UOF%2FXqalaNgQ6XwFBqL2bbuF0uWBoIQ6Bv7uNHvvRd%2BHx1q%2BxFMKUVGpGlIeb0YRR86vkraauleZXY%2BPYIoLzbI3Au4zJh50qmK4XDafrQXbWnREredFk28CjGSRW17yAeZVMk8l%2BNN%2B2%2BWEtzYlG6OlxEmNYdmgKoW6M2iuIZZSfhGDa1ZrWcv1ozP1xFiGXkar%2FFUnm6XNGFD42B0y0R54IPmKFxEaSTolw%2BkKVe6%2BY24o4Ltxfq3bT1Xars9fttWk7XnNY6ZgWzT5MQP167Ckfpc8zqt2G4uz1R4M8ggYgTikyM6BiGIfUmWPT6thn9Pt9iAjR3RCitjah23ZN3HplzDp4J5Zwe7QAuY8JieLjelWvTgKFriwBzZnf1bdUIiVIU7TTA0MmhJMLa7bNxBPIKEi9Orehl6t8iNzbjDODSoP6FfTOTDMLJZeTgPG%2Fbaq7LlmI5rZUsZmYEs3iE90VDzbAOfgMGzpJ4UZpemSiiEJ3O%2F7arBdTDe5azBBjqkAV7atCtcAVtgV61UXzgjTrSlqKFVILLH%2Fz8V7zJVJbskj9Bzfgy%2BdoJL7U1RWWzxwoBhW505gF3q9cx7vPMaRmf7XDPTFGeMUtQp1gpu%2BBtJSOv9F63uMf8F%2FDGkHwa1Qm7HWW%2FsOCjnZDODcOHlcS7JeHJx0sPSNqp%2BXcL%2BjAB2O0%2BmjwZfrQPmn7g7611Er1nwYMeTF5zg2CEL5EzpabsV8FVQ&X-Amz-Signature=9284c7524cbba88339fa3e64008244ee4a079d4198e6402560f715a624e3700a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKO4B2C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXhvF3nxwGRvz5d2l8o3fQ5kQzzB%2FeaMOKKQ9Rop3EwIhAPU9GxdUP3DeXwe3KRuS2GhVITR5%2B4S5oGENNd%2BtneKIKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2z9wrSRHcyWqXFDIq3ANlRJzZ1C4gpioIGxO22oX1zIs8raUqlZd4VMIAb0pd%2BgsBQsOE%2B5%2B9QNFEKwaTjHmR4SX49mHPCCNrQtw%2F9n%2F73j%2F68DgL5jvBzmWkRgF1B0oVuoFnnybaY%2BrBtIOPqx3A6UOF%2FXqalaNgQ6XwFBqL2bbuF0uWBoIQ6Bv7uNHvvRd%2BHx1q%2BxFMKUVGpGlIeb0YRR86vkraauleZXY%2BPYIoLzbI3Au4zJh50qmK4XDafrQXbWnREredFk28CjGSRW17yAeZVMk8l%2BNN%2B2%2BWEtzYlG6OlxEmNYdmgKoW6M2iuIZZSfhGDa1ZrWcv1ozP1xFiGXkar%2FFUnm6XNGFD42B0y0R54IPmKFxEaSTolw%2BkKVe6%2BY24o4Ltxfq3bT1Xars9fttWk7XnNY6ZgWzT5MQP167Ckfpc8zqt2G4uz1R4M8ggYgTikyM6BiGIfUmWPT6thn9Pt9iAjR3RCitjah23ZN3HplzDp4J5Zwe7QAuY8JieLjelWvTgKFriwBzZnf1bdUIiVIU7TTA0MmhJMLa7bNxBPIKEi9Orehl6t8iNzbjDODSoP6FfTOTDMLJZeTgPG%2Fbaq7LlmI5rZUsZmYEs3iE90VDzbAOfgMGzpJ4UZpemSiiEJ3O%2F7arBdTDe5azBBjqkAV7atCtcAVtgV61UXzgjTrSlqKFVILLH%2Fz8V7zJVJbskj9Bzfgy%2BdoJL7U1RWWzxwoBhW505gF3q9cx7vPMaRmf7XDPTFGeMUtQp1gpu%2BBtJSOv9F63uMf8F%2FDGkHwa1Qm7HWW%2FsOCjnZDODcOHlcS7JeHJx0sPSNqp%2BXcL%2BjAB2O0%2BmjwZfrQPmn7g7611Er1nwYMeTF5zg2CEL5EzpabsV8FVQ&X-Amz-Signature=280ecaa222caedfaa234b3dfa77d9a5fc1a42d1aa871105f4840c44941340e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
