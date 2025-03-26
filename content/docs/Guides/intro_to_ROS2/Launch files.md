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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKM6D7O3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7W3Owu8rlbbAHenF07iLqB1ZV3H%2B%2Bt4FygdLhNAG57AIhAMCTH%2FPWpc17%2F2gtzbaxOIhp14BWTfTJnbzx4bRi8AY%2FKv8DCDIQABoMNjM3NDIzMTgzODA1IgyOMv74asXdf%2Fx74Icq3AM%2F3ZXMgiFpUODlmcXEdZorSYG4ySITUIIvOUUKHbRHjZnETHjVD%2FFJJ3IZMvPq%2BWDAdxTRi8gskILLrm3HM98BLTSoeXbGf2cTEo0fXGYXfuFRcVcSb9Iu5Y4YxMhhljue9SdKNXbp7p%2Fjy0duT3%2Fkx6WWkCezbsFg4duUh6DhVBPsbfpka1aZLadF00wi42kj2zK0v8TWphiW9rD6nYd41a7x1mDxaFaz0W1Lz68%2BdKjUK9PJhMO1iusdU6aehUvSSvuY6gnUhSjPVg6TxC5ae0h5zmw3RtKtR02NOz4oA1S7ign%2FPdY1a%2BxybbJfB2DLNAdPWnxPs3WeGM4yyeVFew%2FkbSnnGp6ACyQ1fQdECozBTVeIz7bSZ7CSXEvCs8z7czBGs5dAnjHbPZDuLXKykPWtInoQ3nKwwLdYU7mt6OutqqCAlD2XcG9KR8gI%2BiB6mlATBiOpng2rrHgaiblprFu3aw6BedbFbvDkA21LcCt9s0I0Vh6WThKLz8BBMJASLr%2BY1qZVlp%2BSEwDe4019SOEzswrMYxhF3d9yV1jkQOj11pk0kItzWDVDFpIBzdavwtkUI1rSIxXmgUQYmrR24cG1vCzhX0b%2BEN37rsZ9KB7zbJ6qkk3019i%2BXDDM15C%2FBjqkAXYErSF5PCz4swrqQHkC7sdT8czahTrXxPJOCq0hn3xak3Lu%2FwQ%2BaJ8Y5O12PU7IZSLfT53Q0GsYy8%2BpoYOBvK1J6HM8grnLwOVSWBCsqLmEFMKJ2jd8OUX8PyUm8mET%2BmtApugTt2%2B2hs5XxYOknZ%2FtPfxJ0YxhL6XsxuPwODEl1Ea11quSQBKbYaJpUnDo1YDJ8xpjscGgwpH0Op4a5sysnnHG&X-Amz-Signature=595d9c542d63370aa2e2c6ae7d7d611594c5ee388a3da68cab46cfbaf4c04006&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKM6D7O3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7W3Owu8rlbbAHenF07iLqB1ZV3H%2B%2Bt4FygdLhNAG57AIhAMCTH%2FPWpc17%2F2gtzbaxOIhp14BWTfTJnbzx4bRi8AY%2FKv8DCDIQABoMNjM3NDIzMTgzODA1IgyOMv74asXdf%2Fx74Icq3AM%2F3ZXMgiFpUODlmcXEdZorSYG4ySITUIIvOUUKHbRHjZnETHjVD%2FFJJ3IZMvPq%2BWDAdxTRi8gskILLrm3HM98BLTSoeXbGf2cTEo0fXGYXfuFRcVcSb9Iu5Y4YxMhhljue9SdKNXbp7p%2Fjy0duT3%2Fkx6WWkCezbsFg4duUh6DhVBPsbfpka1aZLadF00wi42kj2zK0v8TWphiW9rD6nYd41a7x1mDxaFaz0W1Lz68%2BdKjUK9PJhMO1iusdU6aehUvSSvuY6gnUhSjPVg6TxC5ae0h5zmw3RtKtR02NOz4oA1S7ign%2FPdY1a%2BxybbJfB2DLNAdPWnxPs3WeGM4yyeVFew%2FkbSnnGp6ACyQ1fQdECozBTVeIz7bSZ7CSXEvCs8z7czBGs5dAnjHbPZDuLXKykPWtInoQ3nKwwLdYU7mt6OutqqCAlD2XcG9KR8gI%2BiB6mlATBiOpng2rrHgaiblprFu3aw6BedbFbvDkA21LcCt9s0I0Vh6WThKLz8BBMJASLr%2BY1qZVlp%2BSEwDe4019SOEzswrMYxhF3d9yV1jkQOj11pk0kItzWDVDFpIBzdavwtkUI1rSIxXmgUQYmrR24cG1vCzhX0b%2BEN37rsZ9KB7zbJ6qkk3019i%2BXDDM15C%2FBjqkAXYErSF5PCz4swrqQHkC7sdT8czahTrXxPJOCq0hn3xak3Lu%2FwQ%2BaJ8Y5O12PU7IZSLfT53Q0GsYy8%2BpoYOBvK1J6HM8grnLwOVSWBCsqLmEFMKJ2jd8OUX8PyUm8mET%2BmtApugTt2%2B2hs5XxYOknZ%2FtPfxJ0YxhL6XsxuPwODEl1Ea11quSQBKbYaJpUnDo1YDJ8xpjscGgwpH0Op4a5sysnnHG&X-Amz-Signature=91d694d7802aeae38ee0ea244eded22de6c58f51355a0d0d2d48bb55a0e872fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKM6D7O3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7W3Owu8rlbbAHenF07iLqB1ZV3H%2B%2Bt4FygdLhNAG57AIhAMCTH%2FPWpc17%2F2gtzbaxOIhp14BWTfTJnbzx4bRi8AY%2FKv8DCDIQABoMNjM3NDIzMTgzODA1IgyOMv74asXdf%2Fx74Icq3AM%2F3ZXMgiFpUODlmcXEdZorSYG4ySITUIIvOUUKHbRHjZnETHjVD%2FFJJ3IZMvPq%2BWDAdxTRi8gskILLrm3HM98BLTSoeXbGf2cTEo0fXGYXfuFRcVcSb9Iu5Y4YxMhhljue9SdKNXbp7p%2Fjy0duT3%2Fkx6WWkCezbsFg4duUh6DhVBPsbfpka1aZLadF00wi42kj2zK0v8TWphiW9rD6nYd41a7x1mDxaFaz0W1Lz68%2BdKjUK9PJhMO1iusdU6aehUvSSvuY6gnUhSjPVg6TxC5ae0h5zmw3RtKtR02NOz4oA1S7ign%2FPdY1a%2BxybbJfB2DLNAdPWnxPs3WeGM4yyeVFew%2FkbSnnGp6ACyQ1fQdECozBTVeIz7bSZ7CSXEvCs8z7czBGs5dAnjHbPZDuLXKykPWtInoQ3nKwwLdYU7mt6OutqqCAlD2XcG9KR8gI%2BiB6mlATBiOpng2rrHgaiblprFu3aw6BedbFbvDkA21LcCt9s0I0Vh6WThKLz8BBMJASLr%2BY1qZVlp%2BSEwDe4019SOEzswrMYxhF3d9yV1jkQOj11pk0kItzWDVDFpIBzdavwtkUI1rSIxXmgUQYmrR24cG1vCzhX0b%2BEN37rsZ9KB7zbJ6qkk3019i%2BXDDM15C%2FBjqkAXYErSF5PCz4swrqQHkC7sdT8czahTrXxPJOCq0hn3xak3Lu%2FwQ%2BaJ8Y5O12PU7IZSLfT53Q0GsYy8%2BpoYOBvK1J6HM8grnLwOVSWBCsqLmEFMKJ2jd8OUX8PyUm8mET%2BmtApugTt2%2B2hs5XxYOknZ%2FtPfxJ0YxhL6XsxuPwODEl1Ea11quSQBKbYaJpUnDo1YDJ8xpjscGgwpH0Op4a5sysnnHG&X-Amz-Signature=82374ac5b00952228afbc3ec98ffedfa2d191d4b803252b33a6643fd40c98553&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
