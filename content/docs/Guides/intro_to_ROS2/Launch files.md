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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G4V4XE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63GpGnAkKzP7A86lczGcdiwa56yYDsv2eM5fQtOeKgAIhAI0iiLlAXEDy7zpZj2fmhlaqaJ0ov7jlcLK%2Bj7L%2Bs15ZKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1VfxEj%2BdXYKgl9Bgq3AOkW30n%2BQk1fYEDCtQ9cPLId1p%2F4qIS%2FBI0sfuiggrF3C%2BcGv133VYHNKtF4tx5e0GRkq9o9O51TSRxcf5VQoNehSGL1%2BkYnz5MtPg60wwEfsYjiE1a2xpA4tCWR5A7vVkA19U%2BGYEGNpquNYE%2BumOm5AFDC6kbsEnB3Dr6Kh8cHk5bGuC2RTqW4qZSGTm7BHphs6GxQpQ6mWGHc7Mzxmvljmy2c2I6KIxZZr4MALqLBwXC%2FIOY7DO7rg57BZEjMgPdmN3h9LoaIsaGnBGQqC6A94tY1JZgIQZH9%2FT0z30FakJLEZVa9bsUMgPwWTJIRmlS4FIg%2Fu5y2FhHcbCGcM53EqTmMftxwsNR9V3jZfWSgdkKhRbVBzckIEMqq5EkBZAp1JLEF%2Fw3J71mu9o5bzgVxEDmpvxExoCSg6Ew8%2Btub7uW0DLlI6XKA5brOA40wBlBFKrPgGMMGxAz4IkO%2FwnU6%2FljHfQ2Q9qbS47mEiWeHpnnKz7e%2F7rzI6bF7vCWERFtbTiFayH2J1jRrsH6GCX%2B0xn%2FduvzShWFV%2F7oByhdBGMBc6MZqAuJLedEMH%2FgpViy0rBimlMg%2FZtv2JfMkfzLxhtgWopPaO8eFw9nKxYxILHGtW3jv826zKxHfTCB2MK%2FBjqkAVhQnWTEZqT%2F2thpPM%2Fddqxrdltjd%2F9w88IXskyzeQ1DG1nNta7XRLa2XcyYScgfhCQncbPOak0rC2CQb4BWspwvRc%2BATMXnYoG6aBSVGDDCHKzCgdW5ezYDnPkUCiBq5p7rFfdxEuakT3hMoro68pN7ypK8JL%2F7yR%2Ff%2FpTd7%2F%2FsEZcFQeQBhgbuafFpE3fLV44nB52ye455GqGNBpaBemrdAC5B&X-Amz-Signature=bc5948ad99862ae4c99f228fbf8ac2f1e29f3225ba0f178f3ea52355e0c39b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G4V4XE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63GpGnAkKzP7A86lczGcdiwa56yYDsv2eM5fQtOeKgAIhAI0iiLlAXEDy7zpZj2fmhlaqaJ0ov7jlcLK%2Bj7L%2Bs15ZKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1VfxEj%2BdXYKgl9Bgq3AOkW30n%2BQk1fYEDCtQ9cPLId1p%2F4qIS%2FBI0sfuiggrF3C%2BcGv133VYHNKtF4tx5e0GRkq9o9O51TSRxcf5VQoNehSGL1%2BkYnz5MtPg60wwEfsYjiE1a2xpA4tCWR5A7vVkA19U%2BGYEGNpquNYE%2BumOm5AFDC6kbsEnB3Dr6Kh8cHk5bGuC2RTqW4qZSGTm7BHphs6GxQpQ6mWGHc7Mzxmvljmy2c2I6KIxZZr4MALqLBwXC%2FIOY7DO7rg57BZEjMgPdmN3h9LoaIsaGnBGQqC6A94tY1JZgIQZH9%2FT0z30FakJLEZVa9bsUMgPwWTJIRmlS4FIg%2Fu5y2FhHcbCGcM53EqTmMftxwsNR9V3jZfWSgdkKhRbVBzckIEMqq5EkBZAp1JLEF%2Fw3J71mu9o5bzgVxEDmpvxExoCSg6Ew8%2Btub7uW0DLlI6XKA5brOA40wBlBFKrPgGMMGxAz4IkO%2FwnU6%2FljHfQ2Q9qbS47mEiWeHpnnKz7e%2F7rzI6bF7vCWERFtbTiFayH2J1jRrsH6GCX%2B0xn%2FduvzShWFV%2F7oByhdBGMBc6MZqAuJLedEMH%2FgpViy0rBimlMg%2FZtv2JfMkfzLxhtgWopPaO8eFw9nKxYxILHGtW3jv826zKxHfTCB2MK%2FBjqkAVhQnWTEZqT%2F2thpPM%2Fddqxrdltjd%2F9w88IXskyzeQ1DG1nNta7XRLa2XcyYScgfhCQncbPOak0rC2CQb4BWspwvRc%2BATMXnYoG6aBSVGDDCHKzCgdW5ezYDnPkUCiBq5p7rFfdxEuakT3hMoro68pN7ypK8JL%2F7yR%2Ff%2FpTd7%2F%2FsEZcFQeQBhgbuafFpE3fLV44nB52ye455GqGNBpaBemrdAC5B&X-Amz-Signature=c4a9208a00d65423c43096035d71fe88bc8aff4b57197b85b01a5099f8a263a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G4V4XE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63GpGnAkKzP7A86lczGcdiwa56yYDsv2eM5fQtOeKgAIhAI0iiLlAXEDy7zpZj2fmhlaqaJ0ov7jlcLK%2Bj7L%2Bs15ZKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1VfxEj%2BdXYKgl9Bgq3AOkW30n%2BQk1fYEDCtQ9cPLId1p%2F4qIS%2FBI0sfuiggrF3C%2BcGv133VYHNKtF4tx5e0GRkq9o9O51TSRxcf5VQoNehSGL1%2BkYnz5MtPg60wwEfsYjiE1a2xpA4tCWR5A7vVkA19U%2BGYEGNpquNYE%2BumOm5AFDC6kbsEnB3Dr6Kh8cHk5bGuC2RTqW4qZSGTm7BHphs6GxQpQ6mWGHc7Mzxmvljmy2c2I6KIxZZr4MALqLBwXC%2FIOY7DO7rg57BZEjMgPdmN3h9LoaIsaGnBGQqC6A94tY1JZgIQZH9%2FT0z30FakJLEZVa9bsUMgPwWTJIRmlS4FIg%2Fu5y2FhHcbCGcM53EqTmMftxwsNR9V3jZfWSgdkKhRbVBzckIEMqq5EkBZAp1JLEF%2Fw3J71mu9o5bzgVxEDmpvxExoCSg6Ew8%2Btub7uW0DLlI6XKA5brOA40wBlBFKrPgGMMGxAz4IkO%2FwnU6%2FljHfQ2Q9qbS47mEiWeHpnnKz7e%2F7rzI6bF7vCWERFtbTiFayH2J1jRrsH6GCX%2B0xn%2FduvzShWFV%2F7oByhdBGMBc6MZqAuJLedEMH%2FgpViy0rBimlMg%2FZtv2JfMkfzLxhtgWopPaO8eFw9nKxYxILHGtW3jv826zKxHfTCB2MK%2FBjqkAVhQnWTEZqT%2F2thpPM%2Fddqxrdltjd%2F9w88IXskyzeQ1DG1nNta7XRLa2XcyYScgfhCQncbPOak0rC2CQb4BWspwvRc%2BATMXnYoG6aBSVGDDCHKzCgdW5ezYDnPkUCiBq5p7rFfdxEuakT3hMoro68pN7ypK8JL%2F7yR%2Ff%2FpTd7%2F%2FsEZcFQeQBhgbuafFpE3fLV44nB52ye455GqGNBpaBemrdAC5B&X-Amz-Signature=3e63c24b6db248313ffa3f57d28b41b9722bf2d47601e1dca00a1f567359dd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
