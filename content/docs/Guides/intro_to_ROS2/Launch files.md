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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44E5PXY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgdqUsOGAMcjEM6KF0v7feLmHtBfn1Y3lu4GTnuzhsQIgHAhCTkkeME%2FklaMpCxt%2BS6wwjLbW7%2BAKjJR2EfofV04q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP3FCcHKC6f4wrDPACrcA1ywgSV4PLyujnimVkvbb7S5xNwT8gE5Nlz5eDGO%2BWAb5MQKX98F%2FoL9rcxJeu74a17FCTsrlOkZorKbx84KG7Elzp5ncX4rklcpMCnin1dZ%2F%2BybohlBrFC4KTG4Kd%2FDz4F2L3eL6V%2FBFfhpNU5S%2FqRG5z7HW%2B%2FbqZf51zsDZZLjKp8yyhjS28U5qOhJSXjggNCr%2FnQuSu2CBKf5DzZmkjE8dVlmgBRyDPY8tZBEXMNG0azANDs%2BiYRZD5smRIIBMrKqNeGQzOaue4Z6pAoF9fxCrywlAe76aVukk7qOeDXLwUiIdwDwr77nlq%2B6V%2BvkI%2BBWaik2NoYrGK09DLR38R1pzNdSCfTE1BhnWOTNWApns0eGSBsS688wnVKlNiMRJMmLJ6u7JmGxDL%2BCaLjSOHnDpcUtnmGDY3o2RGICy7U7yxMzK6XNxckKN6GdpzdBUBymIo63K%2Fx0nFoJvoNd%2Fceit9gjJxp%2FCuFLI1oXfGEbCsueifjc5blYybJPjjnQW3atUPGr9Rt0PSUIYi1FOzspR4FgsWlycUUbbtNjlDAoFNNwRDX%2Fmv2SHNcBfOqz%2FviaVhgYxWFEf4i%2BE7Ue3MrqDEHp9ZHGUT7pKOJ7i36gc5gmrRigkZ00R6waMJrp8cQGOqUBVBYWRmYf87NveGLZ%2BK%2Fc%2BlfcNSK4F8oh4Kr2wqoU227yblrCOmd1SpA81j66Xef9OWtSPEBf%2B1rVH1dK%2F6cqhjwxjcFNhCmzaFapfvSOWTn2lnEhQBxi%2BF%2FnfXKAsVfX3ErOAtEQSvnKBh6rczg%2FrjC9xfsM7CSSB%2Bjrda614MTD2ieBLrplB4ImE9SAhxw597yfGjWeeYm9IQOPUJNgDvmUx3r8&X-Amz-Signature=2207da0b96549c2316cd82bbecc31601c59da2c83fefcc7a7b76f2597a67921f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44E5PXY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgdqUsOGAMcjEM6KF0v7feLmHtBfn1Y3lu4GTnuzhsQIgHAhCTkkeME%2FklaMpCxt%2BS6wwjLbW7%2BAKjJR2EfofV04q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP3FCcHKC6f4wrDPACrcA1ywgSV4PLyujnimVkvbb7S5xNwT8gE5Nlz5eDGO%2BWAb5MQKX98F%2FoL9rcxJeu74a17FCTsrlOkZorKbx84KG7Elzp5ncX4rklcpMCnin1dZ%2F%2BybohlBrFC4KTG4Kd%2FDz4F2L3eL6V%2FBFfhpNU5S%2FqRG5z7HW%2B%2FbqZf51zsDZZLjKp8yyhjS28U5qOhJSXjggNCr%2FnQuSu2CBKf5DzZmkjE8dVlmgBRyDPY8tZBEXMNG0azANDs%2BiYRZD5smRIIBMrKqNeGQzOaue4Z6pAoF9fxCrywlAe76aVukk7qOeDXLwUiIdwDwr77nlq%2B6V%2BvkI%2BBWaik2NoYrGK09DLR38R1pzNdSCfTE1BhnWOTNWApns0eGSBsS688wnVKlNiMRJMmLJ6u7JmGxDL%2BCaLjSOHnDpcUtnmGDY3o2RGICy7U7yxMzK6XNxckKN6GdpzdBUBymIo63K%2Fx0nFoJvoNd%2Fceit9gjJxp%2FCuFLI1oXfGEbCsueifjc5blYybJPjjnQW3atUPGr9Rt0PSUIYi1FOzspR4FgsWlycUUbbtNjlDAoFNNwRDX%2Fmv2SHNcBfOqz%2FviaVhgYxWFEf4i%2BE7Ue3MrqDEHp9ZHGUT7pKOJ7i36gc5gmrRigkZ00R6waMJrp8cQGOqUBVBYWRmYf87NveGLZ%2BK%2Fc%2BlfcNSK4F8oh4Kr2wqoU227yblrCOmd1SpA81j66Xef9OWtSPEBf%2B1rVH1dK%2F6cqhjwxjcFNhCmzaFapfvSOWTn2lnEhQBxi%2BF%2FnfXKAsVfX3ErOAtEQSvnKBh6rczg%2FrjC9xfsM7CSSB%2Bjrda614MTD2ieBLrplB4ImE9SAhxw597yfGjWeeYm9IQOPUJNgDvmUx3r8&X-Amz-Signature=e2979982e14eaa4817fc9715cb0bf862ed72b5fecd3eaa0a0d70cf2d8c2fc25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44E5PXY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgdqUsOGAMcjEM6KF0v7feLmHtBfn1Y3lu4GTnuzhsQIgHAhCTkkeME%2FklaMpCxt%2BS6wwjLbW7%2BAKjJR2EfofV04q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP3FCcHKC6f4wrDPACrcA1ywgSV4PLyujnimVkvbb7S5xNwT8gE5Nlz5eDGO%2BWAb5MQKX98F%2FoL9rcxJeu74a17FCTsrlOkZorKbx84KG7Elzp5ncX4rklcpMCnin1dZ%2F%2BybohlBrFC4KTG4Kd%2FDz4F2L3eL6V%2FBFfhpNU5S%2FqRG5z7HW%2B%2FbqZf51zsDZZLjKp8yyhjS28U5qOhJSXjggNCr%2FnQuSu2CBKf5DzZmkjE8dVlmgBRyDPY8tZBEXMNG0azANDs%2BiYRZD5smRIIBMrKqNeGQzOaue4Z6pAoF9fxCrywlAe76aVukk7qOeDXLwUiIdwDwr77nlq%2B6V%2BvkI%2BBWaik2NoYrGK09DLR38R1pzNdSCfTE1BhnWOTNWApns0eGSBsS688wnVKlNiMRJMmLJ6u7JmGxDL%2BCaLjSOHnDpcUtnmGDY3o2RGICy7U7yxMzK6XNxckKN6GdpzdBUBymIo63K%2Fx0nFoJvoNd%2Fceit9gjJxp%2FCuFLI1oXfGEbCsueifjc5blYybJPjjnQW3atUPGr9Rt0PSUIYi1FOzspR4FgsWlycUUbbtNjlDAoFNNwRDX%2Fmv2SHNcBfOqz%2FviaVhgYxWFEf4i%2BE7Ue3MrqDEHp9ZHGUT7pKOJ7i36gc5gmrRigkZ00R6waMJrp8cQGOqUBVBYWRmYf87NveGLZ%2BK%2Fc%2BlfcNSK4F8oh4Kr2wqoU227yblrCOmd1SpA81j66Xef9OWtSPEBf%2B1rVH1dK%2F6cqhjwxjcFNhCmzaFapfvSOWTn2lnEhQBxi%2BF%2FnfXKAsVfX3ErOAtEQSvnKBh6rczg%2FrjC9xfsM7CSSB%2Bjrda614MTD2ieBLrplB4ImE9SAhxw597yfGjWeeYm9IQOPUJNgDvmUx3r8&X-Amz-Signature=f1be47063de5d38adb52f0287d2a2d4d64a32b14364979324d33ec3f906692ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
