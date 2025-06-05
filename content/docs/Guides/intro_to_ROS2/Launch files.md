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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NT5CD4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHknmKkIfQv6bqvGfkrcVuwMvVhYmAihOhgb5%2FPQ06aGAiEAw6o%2FdWKXvMRkXfKRtY%2F3ECuQYceJFYvsMxl6deqg8w4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGp9G55KMoYa87KzQCrcA30TKVHzQr%2FyqFQnNXr8juNc5EbCpVZHDH4aiqHryD%2FCryBnvAhPHxkAMOa5zvOQ1o7gw37Fg7jByqU1z6H6cjlhCCjE379YTXLiFj7wYpoeMBYctjO28GaKlBk8eyW1taPtOd%2Fi2kTiDhu8zsBfiM1vfTJFjzUW2f8Kz3Kw1%2Fxv07803RmCl9JRcUfNdHBcJ6Mj9JV6pBknZUM8inJ%2F1ShnFWo2lemyV0xnr81GJ89WkauN9Btfmo1bCrkoogai6E14VBX4Un%2BE%2BoI6uhWXymMxHKm88e49t2qPovUnNP6AnpaoP2mX%2BG9RRy8a%2B0K%2FWkEqqVHPcbLT8DaKYJPVQzoI2Nnw5Ij61FUw1yDv2HREJjmkiKdoh6D%2BgeFbB%2F%2B3pGHPpMAc8jO5YvYDBlauZ3FGFICenpXm3ZOnBD3QbRDUmfeHWiKN8IygBcUsdow6vL%2B3%2By3vp5hlNrk7UK5HffjDJk1AaLjs1ScRcF6BMv27z%2FGBMZC4js3xDsE6jMVtVWUjBzuT1QCD8zdlhnQ7zWHygTwcpUTUGKDpqJ8mP5zHOtnVz5YN1W1R5LIRFDGHf0T0vNlKWFkmRqQQ7bigiP5vuOHBnslhWezOImmqlDHI79Pm%2Fyn6qJq4rccWMLauhcIGOqUBcwj0kGe6Z7daGBmS13aHxceSlagsbSoff%2FK2yRdorZfvJNLRNzqwF582eX9TAZjYIp0c%2BcnzufY2l0GgSZs%2BaR1tmdxn2RDXyjVe1VDqjrGndgfVob%2F7Wbbuje5LnacYqQmzOamND1rxpxXYrjkW5RjjPxKQGQrYcusXJscpUg34T%2Bw76m71PlKuodYZjHpRXKkFwYxCr%2BWUDaHaJwHnCyT6th%2Bi&X-Amz-Signature=3dc8483325d8484de55f9db2bdcb00371f65119fa8deec65b41d58d0f2c84e43&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NT5CD4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHknmKkIfQv6bqvGfkrcVuwMvVhYmAihOhgb5%2FPQ06aGAiEAw6o%2FdWKXvMRkXfKRtY%2F3ECuQYceJFYvsMxl6deqg8w4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGp9G55KMoYa87KzQCrcA30TKVHzQr%2FyqFQnNXr8juNc5EbCpVZHDH4aiqHryD%2FCryBnvAhPHxkAMOa5zvOQ1o7gw37Fg7jByqU1z6H6cjlhCCjE379YTXLiFj7wYpoeMBYctjO28GaKlBk8eyW1taPtOd%2Fi2kTiDhu8zsBfiM1vfTJFjzUW2f8Kz3Kw1%2Fxv07803RmCl9JRcUfNdHBcJ6Mj9JV6pBknZUM8inJ%2F1ShnFWo2lemyV0xnr81GJ89WkauN9Btfmo1bCrkoogai6E14VBX4Un%2BE%2BoI6uhWXymMxHKm88e49t2qPovUnNP6AnpaoP2mX%2BG9RRy8a%2B0K%2FWkEqqVHPcbLT8DaKYJPVQzoI2Nnw5Ij61FUw1yDv2HREJjmkiKdoh6D%2BgeFbB%2F%2B3pGHPpMAc8jO5YvYDBlauZ3FGFICenpXm3ZOnBD3QbRDUmfeHWiKN8IygBcUsdow6vL%2B3%2By3vp5hlNrk7UK5HffjDJk1AaLjs1ScRcF6BMv27z%2FGBMZC4js3xDsE6jMVtVWUjBzuT1QCD8zdlhnQ7zWHygTwcpUTUGKDpqJ8mP5zHOtnVz5YN1W1R5LIRFDGHf0T0vNlKWFkmRqQQ7bigiP5vuOHBnslhWezOImmqlDHI79Pm%2Fyn6qJq4rccWMLauhcIGOqUBcwj0kGe6Z7daGBmS13aHxceSlagsbSoff%2FK2yRdorZfvJNLRNzqwF582eX9TAZjYIp0c%2BcnzufY2l0GgSZs%2BaR1tmdxn2RDXyjVe1VDqjrGndgfVob%2F7Wbbuje5LnacYqQmzOamND1rxpxXYrjkW5RjjPxKQGQrYcusXJscpUg34T%2Bw76m71PlKuodYZjHpRXKkFwYxCr%2BWUDaHaJwHnCyT6th%2Bi&X-Amz-Signature=06d8d6a59dea4cc392e0cc3b26436d1179d2ed033d4195d146760c169403ff16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NT5CD4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHknmKkIfQv6bqvGfkrcVuwMvVhYmAihOhgb5%2FPQ06aGAiEAw6o%2FdWKXvMRkXfKRtY%2F3ECuQYceJFYvsMxl6deqg8w4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGp9G55KMoYa87KzQCrcA30TKVHzQr%2FyqFQnNXr8juNc5EbCpVZHDH4aiqHryD%2FCryBnvAhPHxkAMOa5zvOQ1o7gw37Fg7jByqU1z6H6cjlhCCjE379YTXLiFj7wYpoeMBYctjO28GaKlBk8eyW1taPtOd%2Fi2kTiDhu8zsBfiM1vfTJFjzUW2f8Kz3Kw1%2Fxv07803RmCl9JRcUfNdHBcJ6Mj9JV6pBknZUM8inJ%2F1ShnFWo2lemyV0xnr81GJ89WkauN9Btfmo1bCrkoogai6E14VBX4Un%2BE%2BoI6uhWXymMxHKm88e49t2qPovUnNP6AnpaoP2mX%2BG9RRy8a%2B0K%2FWkEqqVHPcbLT8DaKYJPVQzoI2Nnw5Ij61FUw1yDv2HREJjmkiKdoh6D%2BgeFbB%2F%2B3pGHPpMAc8jO5YvYDBlauZ3FGFICenpXm3ZOnBD3QbRDUmfeHWiKN8IygBcUsdow6vL%2B3%2By3vp5hlNrk7UK5HffjDJk1AaLjs1ScRcF6BMv27z%2FGBMZC4js3xDsE6jMVtVWUjBzuT1QCD8zdlhnQ7zWHygTwcpUTUGKDpqJ8mP5zHOtnVz5YN1W1R5LIRFDGHf0T0vNlKWFkmRqQQ7bigiP5vuOHBnslhWezOImmqlDHI79Pm%2Fyn6qJq4rccWMLauhcIGOqUBcwj0kGe6Z7daGBmS13aHxceSlagsbSoff%2FK2yRdorZfvJNLRNzqwF582eX9TAZjYIp0c%2BcnzufY2l0GgSZs%2BaR1tmdxn2RDXyjVe1VDqjrGndgfVob%2F7Wbbuje5LnacYqQmzOamND1rxpxXYrjkW5RjjPxKQGQrYcusXJscpUg34T%2Bw76m71PlKuodYZjHpRXKkFwYxCr%2BWUDaHaJwHnCyT6th%2Bi&X-Amz-Signature=6a52231d1f4e7731979c6e42f8d0e03821b43d9fb0c9e00d1fd51a429a79dfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
