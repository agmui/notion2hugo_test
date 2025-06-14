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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTUKZX5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZGrBy9k8wJ2SIxVaaEo3CGyzJ%2FZHV0QPR29bsFnRmSgIhALPDcUjYYUZM1l5RORegC6iCl4cYeTXyUKqCfhccI6a3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyMoeG7wFydzf9t58oq3AOTFhpDWJoBIp7XZZyyrTF9qNzDj1F6Cf%2FgJ2mWpMnOsKSuRYmpii5Z8WHNyv0%2FNmOX7diX%2Ftu%2BkBoGhJTKJuDxiqBSA8QYwj7UHsVC64MDQqOBgdZCIxvpVHjI5AdwWWZFMk1Ii6ufUII0GeI%2Fns34ZwdtNHiaD%2BkiZygr2r8Jd9x9ZMHY%2BxpiD7nqCt77n2ePs8Yjk0um%2BIH974ass%2BAVqiQ%2BBm4%2BjwDfeJbjCa8XpsX5sm%2BaOPNlIqU2d8R4AN761sv0ISwqahC%2Fx4RhtBlsSxD7q0YkiU9w5%2FwGXrNkfKpXpn0e4CI5o3wy5uCkwK81f9fMr4VK5%2FF7dAvYSHQOUNyRUiwcoT1qczn7duxtwyn8Cwhcx1E6sG6g9684ehdfAAZGhE4mLllTfBzYY%2BV2MSHtl7sNU8iyjfUrglePU7HpzPnaZbu%2BY8N2hz7rOj9bNoBKiWkEaGo5APjNOKFfi0nOIHPb5knd0o%2FJjDSIIRhUUKGVmbQIl4ssPJR2Z1yjq%2FIYxqL8SZAM9KcnE9CK4LvUJikVecksFpU6bsmIws94rRYUfq0MC9tHtjRmws5%2Bd4vqhlwRz%2Fb7iU7zYriXSpGRcH%2F7vfvVZXjCAdK2u5r6XIS3GJSn4GJWBDDhk7XCBjqkASoqqjzOaD2DYR38kzmBMr2NZZRYZSoS4QZZr4TBy5F8%2F3ahGWTVyY%2BQTdvQemZ8AC9K9iM4t9OfcyOI5FXcIlfgG77tnI9%2Brhw02e6CO7LRiPDb5fNaF0M9qF2CKlA7CkPIRukqPlnrPA%2BOFeFvjkCmv0N3hUOjsvJk%2FtbmnDFwODfitlX6Y1ZjjnrVW8I7GQxkzii9trznRWtLy0N9SmPBj6EF&X-Amz-Signature=589e2fea43d46a10b83334ebf9486d96b4f1e92d2000347841647621378d4ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTUKZX5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZGrBy9k8wJ2SIxVaaEo3CGyzJ%2FZHV0QPR29bsFnRmSgIhALPDcUjYYUZM1l5RORegC6iCl4cYeTXyUKqCfhccI6a3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyMoeG7wFydzf9t58oq3AOTFhpDWJoBIp7XZZyyrTF9qNzDj1F6Cf%2FgJ2mWpMnOsKSuRYmpii5Z8WHNyv0%2FNmOX7diX%2Ftu%2BkBoGhJTKJuDxiqBSA8QYwj7UHsVC64MDQqOBgdZCIxvpVHjI5AdwWWZFMk1Ii6ufUII0GeI%2Fns34ZwdtNHiaD%2BkiZygr2r8Jd9x9ZMHY%2BxpiD7nqCt77n2ePs8Yjk0um%2BIH974ass%2BAVqiQ%2BBm4%2BjwDfeJbjCa8XpsX5sm%2BaOPNlIqU2d8R4AN761sv0ISwqahC%2Fx4RhtBlsSxD7q0YkiU9w5%2FwGXrNkfKpXpn0e4CI5o3wy5uCkwK81f9fMr4VK5%2FF7dAvYSHQOUNyRUiwcoT1qczn7duxtwyn8Cwhcx1E6sG6g9684ehdfAAZGhE4mLllTfBzYY%2BV2MSHtl7sNU8iyjfUrglePU7HpzPnaZbu%2BY8N2hz7rOj9bNoBKiWkEaGo5APjNOKFfi0nOIHPb5knd0o%2FJjDSIIRhUUKGVmbQIl4ssPJR2Z1yjq%2FIYxqL8SZAM9KcnE9CK4LvUJikVecksFpU6bsmIws94rRYUfq0MC9tHtjRmws5%2Bd4vqhlwRz%2Fb7iU7zYriXSpGRcH%2F7vfvVZXjCAdK2u5r6XIS3GJSn4GJWBDDhk7XCBjqkASoqqjzOaD2DYR38kzmBMr2NZZRYZSoS4QZZr4TBy5F8%2F3ahGWTVyY%2BQTdvQemZ8AC9K9iM4t9OfcyOI5FXcIlfgG77tnI9%2Brhw02e6CO7LRiPDb5fNaF0M9qF2CKlA7CkPIRukqPlnrPA%2BOFeFvjkCmv0N3hUOjsvJk%2FtbmnDFwODfitlX6Y1ZjjnrVW8I7GQxkzii9trznRWtLy0N9SmPBj6EF&X-Amz-Signature=8bbef636c28719aee4a5c625ef3e742eb21322a2a26cd1aa8342e998e3cc8d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTUKZX5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZGrBy9k8wJ2SIxVaaEo3CGyzJ%2FZHV0QPR29bsFnRmSgIhALPDcUjYYUZM1l5RORegC6iCl4cYeTXyUKqCfhccI6a3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyMoeG7wFydzf9t58oq3AOTFhpDWJoBIp7XZZyyrTF9qNzDj1F6Cf%2FgJ2mWpMnOsKSuRYmpii5Z8WHNyv0%2FNmOX7diX%2Ftu%2BkBoGhJTKJuDxiqBSA8QYwj7UHsVC64MDQqOBgdZCIxvpVHjI5AdwWWZFMk1Ii6ufUII0GeI%2Fns34ZwdtNHiaD%2BkiZygr2r8Jd9x9ZMHY%2BxpiD7nqCt77n2ePs8Yjk0um%2BIH974ass%2BAVqiQ%2BBm4%2BjwDfeJbjCa8XpsX5sm%2BaOPNlIqU2d8R4AN761sv0ISwqahC%2Fx4RhtBlsSxD7q0YkiU9w5%2FwGXrNkfKpXpn0e4CI5o3wy5uCkwK81f9fMr4VK5%2FF7dAvYSHQOUNyRUiwcoT1qczn7duxtwyn8Cwhcx1E6sG6g9684ehdfAAZGhE4mLllTfBzYY%2BV2MSHtl7sNU8iyjfUrglePU7HpzPnaZbu%2BY8N2hz7rOj9bNoBKiWkEaGo5APjNOKFfi0nOIHPb5knd0o%2FJjDSIIRhUUKGVmbQIl4ssPJR2Z1yjq%2FIYxqL8SZAM9KcnE9CK4LvUJikVecksFpU6bsmIws94rRYUfq0MC9tHtjRmws5%2Bd4vqhlwRz%2Fb7iU7zYriXSpGRcH%2F7vfvVZXjCAdK2u5r6XIS3GJSn4GJWBDDhk7XCBjqkASoqqjzOaD2DYR38kzmBMr2NZZRYZSoS4QZZr4TBy5F8%2F3ahGWTVyY%2BQTdvQemZ8AC9K9iM4t9OfcyOI5FXcIlfgG77tnI9%2Brhw02e6CO7LRiPDb5fNaF0M9qF2CKlA7CkPIRukqPlnrPA%2BOFeFvjkCmv0N3hUOjsvJk%2FtbmnDFwODfitlX6Y1ZjjnrVW8I7GQxkzii9trznRWtLy0N9SmPBj6EF&X-Amz-Signature=657392ce91148a79896c19c89343cc73782eea19d01835c7794f5de42c0a2472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
