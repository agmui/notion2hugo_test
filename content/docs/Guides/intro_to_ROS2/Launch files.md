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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSB2HPI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD647%2FdA5KKtrL0qXK3R%2BDx8eDgMnCqHao4w5nFPYKK%2BAIhAK4f0V%2FzYSUuJuI7SnXMBSNGoQIPrajoMGRN%2FdhK8Vr5KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxATK3tyrvAtroZXtQq3AM1oktpk7YVyho6VRd7iVEK66UKQ%2BG%2FvXXhstUW6P0ORfC1aru2NfpQgYQ9eCv3eT7ub3GMfNLqUDm0vV2D9m9i1pz59UVvPub7cBGrDO%2FxnLlepXnxK1AXiD4KggKIHkjCj8B1p2e0wQdkZN6bih7xu8qIzWJrDBhJ5X0KvBOZE3aauh9TiYbgte8t1IihTOoTJaNXtucha9quJ%2Fs1HjNErZkv3Cxq8z5oth6nUvUpGQoKf%2FYKjhWO9FEnOOU%2FKTyuB%2BjEWRbeuaoFPo5U3mKfLty0x1fO80vyeBitRcsbdMTwiBq529OmXoi%2BjAHzoTHcMo2BrRUh9LElt2zx7PiBGU8XHztUTymlSV0nwbnlUYz07VTXtvkqc91GwZhliOBlyem775SkAJ%2FnBypcctpky1lR%2BfuSY1KNLclW6vZFAZbEW%2B9VouGU2Sjcm4a6UN7rUv%2BhU6iNv73DY%2Bu4LPFLNBelHRpMp6XahGXiDZj9JUI5mEVz0PpLalY7%2BXxykSQKMHrn9o3Jrr30oj9Q2f9iIGIgxUL2J8QbcJOXyaw%2BaDUrvylGx19UzmCsoorFqnfvrTV3Uk080%2BMA82mQ1dSj%2Fwnnq2arqZzVe%2BzzQCYL3RVV9jcNIbGzcM%2B%2FkjCzz%2Bu8BjqkAfzu%2FEQ7XnBxqsBshBLLI0YPgLulVRk%2FSDCvglOfTvu5pKzKxg2evoIy%2FrLCxJOw%2FqTwobGdXtwWkvLOL63eFnGlBFbYzqXuk0x67NU87vt9vr7Zz5XwNwdlQcgycN4%2FT1oVjfDuw9saQ21wj1knaNyTf6smu4GU1KjNVtrTk21tNK1bJwz%2FV%2BVt%2Ba7JTx2f5R2PiX3sy4o0%2BKQFUo1HmpbF7Kmd&X-Amz-Signature=92ce472828e920772a03ecf31c40250da325f021ca4116a9f9bcd61cfd17ce06&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSB2HPI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD647%2FdA5KKtrL0qXK3R%2BDx8eDgMnCqHao4w5nFPYKK%2BAIhAK4f0V%2FzYSUuJuI7SnXMBSNGoQIPrajoMGRN%2FdhK8Vr5KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxATK3tyrvAtroZXtQq3AM1oktpk7YVyho6VRd7iVEK66UKQ%2BG%2FvXXhstUW6P0ORfC1aru2NfpQgYQ9eCv3eT7ub3GMfNLqUDm0vV2D9m9i1pz59UVvPub7cBGrDO%2FxnLlepXnxK1AXiD4KggKIHkjCj8B1p2e0wQdkZN6bih7xu8qIzWJrDBhJ5X0KvBOZE3aauh9TiYbgte8t1IihTOoTJaNXtucha9quJ%2Fs1HjNErZkv3Cxq8z5oth6nUvUpGQoKf%2FYKjhWO9FEnOOU%2FKTyuB%2BjEWRbeuaoFPo5U3mKfLty0x1fO80vyeBitRcsbdMTwiBq529OmXoi%2BjAHzoTHcMo2BrRUh9LElt2zx7PiBGU8XHztUTymlSV0nwbnlUYz07VTXtvkqc91GwZhliOBlyem775SkAJ%2FnBypcctpky1lR%2BfuSY1KNLclW6vZFAZbEW%2B9VouGU2Sjcm4a6UN7rUv%2BhU6iNv73DY%2Bu4LPFLNBelHRpMp6XahGXiDZj9JUI5mEVz0PpLalY7%2BXxykSQKMHrn9o3Jrr30oj9Q2f9iIGIgxUL2J8QbcJOXyaw%2BaDUrvylGx19UzmCsoorFqnfvrTV3Uk080%2BMA82mQ1dSj%2Fwnnq2arqZzVe%2BzzQCYL3RVV9jcNIbGzcM%2B%2FkjCzz%2Bu8BjqkAfzu%2FEQ7XnBxqsBshBLLI0YPgLulVRk%2FSDCvglOfTvu5pKzKxg2evoIy%2FrLCxJOw%2FqTwobGdXtwWkvLOL63eFnGlBFbYzqXuk0x67NU87vt9vr7Zz5XwNwdlQcgycN4%2FT1oVjfDuw9saQ21wj1knaNyTf6smu4GU1KjNVtrTk21tNK1bJwz%2FV%2BVt%2Ba7JTx2f5R2PiX3sy4o0%2BKQFUo1HmpbF7Kmd&X-Amz-Signature=9d744d2f4f4519df4f086429186b5bd077eede186d36c0db92b9133ec8cc6447&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSB2HPI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD647%2FdA5KKtrL0qXK3R%2BDx8eDgMnCqHao4w5nFPYKK%2BAIhAK4f0V%2FzYSUuJuI7SnXMBSNGoQIPrajoMGRN%2FdhK8Vr5KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxATK3tyrvAtroZXtQq3AM1oktpk7YVyho6VRd7iVEK66UKQ%2BG%2FvXXhstUW6P0ORfC1aru2NfpQgYQ9eCv3eT7ub3GMfNLqUDm0vV2D9m9i1pz59UVvPub7cBGrDO%2FxnLlepXnxK1AXiD4KggKIHkjCj8B1p2e0wQdkZN6bih7xu8qIzWJrDBhJ5X0KvBOZE3aauh9TiYbgte8t1IihTOoTJaNXtucha9quJ%2Fs1HjNErZkv3Cxq8z5oth6nUvUpGQoKf%2FYKjhWO9FEnOOU%2FKTyuB%2BjEWRbeuaoFPo5U3mKfLty0x1fO80vyeBitRcsbdMTwiBq529OmXoi%2BjAHzoTHcMo2BrRUh9LElt2zx7PiBGU8XHztUTymlSV0nwbnlUYz07VTXtvkqc91GwZhliOBlyem775SkAJ%2FnBypcctpky1lR%2BfuSY1KNLclW6vZFAZbEW%2B9VouGU2Sjcm4a6UN7rUv%2BhU6iNv73DY%2Bu4LPFLNBelHRpMp6XahGXiDZj9JUI5mEVz0PpLalY7%2BXxykSQKMHrn9o3Jrr30oj9Q2f9iIGIgxUL2J8QbcJOXyaw%2BaDUrvylGx19UzmCsoorFqnfvrTV3Uk080%2BMA82mQ1dSj%2Fwnnq2arqZzVe%2BzzQCYL3RVV9jcNIbGzcM%2B%2FkjCzz%2Bu8BjqkAfzu%2FEQ7XnBxqsBshBLLI0YPgLulVRk%2FSDCvglOfTvu5pKzKxg2evoIy%2FrLCxJOw%2FqTwobGdXtwWkvLOL63eFnGlBFbYzqXuk0x67NU87vt9vr7Zz5XwNwdlQcgycN4%2FT1oVjfDuw9saQ21wj1knaNyTf6smu4GU1KjNVtrTk21tNK1bJwz%2FV%2BVt%2Ba7JTx2f5R2PiX3sy4o0%2BKQFUo1HmpbF7Kmd&X-Amz-Signature=89b120d076e2f1636285f96a35ae0ce5e7e985183cd034de04ad202f3bbf7814&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
