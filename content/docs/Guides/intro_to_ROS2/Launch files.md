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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3LDRNM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEczgSHoGCJznjFSjLKi%2FEIA1NHfrE6FdsPacwAeMKgnAiBkmwHIB0jXOwIF2JZdT0LOc3ab9m5VaD42v6gsCE9Rgyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMZ0rZ1ZiLai68LAGMKtwDe3kQBcV2bqIE2j6Dxuo7c5PiXAmJ7CBoZgV8wKlkgLziLLXl2%2FXItDHg4e9WeaO9B8cWs%2FzaHm%2FNUpwQl79UKmUPUgMg%2FxAs8NEEfEvJf2eItq2s0URss3DfqvKPnBeZqc5UZxmSHTJZe8%2BlcCsznv8%2FGeTdG5OKzPADK%2BxdTE7H6HM3A2Bhr%2FaA0mrTyl3jzck3z0CJlsbMBGBkk6sBqYjDzmO6A2Njea1tM8a7LIyb4kc9BMLS31Am8dWtl2nGmnh%2BBq3wrrF4TTKlda6OUMLscex%2FJ5FZluhS%2FCobO12Cy00xthrV5YTfS4J8xylEuVyc0MWsiUDaHF9FzHB6KuCQaeVkhw1MD%2FMh6nSwbB%2B12teBg5WTK35TtwFf8zRmZk9HuXr0j1wAXof%2FUrtJyMyIBmfswUspxwysuGSOEC3%2BBV2lD2QnY98WZl5hSmabzjnQ6ZAiwO586CiJ%2FA%2F9GDtSq%2F5VgPqbJYEpwN5gIu0SzVbhOjvMS%2FATO57MBc3NBxxf0eSLi4%2FbTMRGHvRGBpF3fWkUpzAh1JEN0hNVMefQpDGuQVa8tOFU%2F7Z23H2bW92gSdSZISLVbuvFls5dvnq7iTG9MvUNdkZM%2FSAX58z7P29GwOEj1J4l80sw8o7tvQY6pgFPyGRiaGnVqm95mlnYCuYZaCzrlFmW9a1kQ42ItIAMUNEwUxoIBLY01BbsyGA3hdmLadb9yxUHQoa7hcCwsTIbU%2FJc2hq%2BsPPCH03zaWS8kDwAEmWAvkXuvK0rd9uZbFG%2FMxpiOEoXe6Lw3Qz4NL05f2CgZJvPkmWBdJB4i1i7eX304DIoM6b94n1nzMzQgZRWbOvDMPbgjbtVVNu9QGUnMTuLvTFp&X-Amz-Signature=4ad787eb0ca16640e7d5e42271f8eee29641ab4ce34138009d27c085b4a4f951&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3LDRNM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEczgSHoGCJznjFSjLKi%2FEIA1NHfrE6FdsPacwAeMKgnAiBkmwHIB0jXOwIF2JZdT0LOc3ab9m5VaD42v6gsCE9Rgyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMZ0rZ1ZiLai68LAGMKtwDe3kQBcV2bqIE2j6Dxuo7c5PiXAmJ7CBoZgV8wKlkgLziLLXl2%2FXItDHg4e9WeaO9B8cWs%2FzaHm%2FNUpwQl79UKmUPUgMg%2FxAs8NEEfEvJf2eItq2s0URss3DfqvKPnBeZqc5UZxmSHTJZe8%2BlcCsznv8%2FGeTdG5OKzPADK%2BxdTE7H6HM3A2Bhr%2FaA0mrTyl3jzck3z0CJlsbMBGBkk6sBqYjDzmO6A2Njea1tM8a7LIyb4kc9BMLS31Am8dWtl2nGmnh%2BBq3wrrF4TTKlda6OUMLscex%2FJ5FZluhS%2FCobO12Cy00xthrV5YTfS4J8xylEuVyc0MWsiUDaHF9FzHB6KuCQaeVkhw1MD%2FMh6nSwbB%2B12teBg5WTK35TtwFf8zRmZk9HuXr0j1wAXof%2FUrtJyMyIBmfswUspxwysuGSOEC3%2BBV2lD2QnY98WZl5hSmabzjnQ6ZAiwO586CiJ%2FA%2F9GDtSq%2F5VgPqbJYEpwN5gIu0SzVbhOjvMS%2FATO57MBc3NBxxf0eSLi4%2FbTMRGHvRGBpF3fWkUpzAh1JEN0hNVMefQpDGuQVa8tOFU%2F7Z23H2bW92gSdSZISLVbuvFls5dvnq7iTG9MvUNdkZM%2FSAX58z7P29GwOEj1J4l80sw8o7tvQY6pgFPyGRiaGnVqm95mlnYCuYZaCzrlFmW9a1kQ42ItIAMUNEwUxoIBLY01BbsyGA3hdmLadb9yxUHQoa7hcCwsTIbU%2FJc2hq%2BsPPCH03zaWS8kDwAEmWAvkXuvK0rd9uZbFG%2FMxpiOEoXe6Lw3Qz4NL05f2CgZJvPkmWBdJB4i1i7eX304DIoM6b94n1nzMzQgZRWbOvDMPbgjbtVVNu9QGUnMTuLvTFp&X-Amz-Signature=8b1553a86ba9a6e0bf73a6b0948fe207858403dc024ec0effada05f218fe570a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3LDRNM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEczgSHoGCJznjFSjLKi%2FEIA1NHfrE6FdsPacwAeMKgnAiBkmwHIB0jXOwIF2JZdT0LOc3ab9m5VaD42v6gsCE9Rgyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMZ0rZ1ZiLai68LAGMKtwDe3kQBcV2bqIE2j6Dxuo7c5PiXAmJ7CBoZgV8wKlkgLziLLXl2%2FXItDHg4e9WeaO9B8cWs%2FzaHm%2FNUpwQl79UKmUPUgMg%2FxAs8NEEfEvJf2eItq2s0URss3DfqvKPnBeZqc5UZxmSHTJZe8%2BlcCsznv8%2FGeTdG5OKzPADK%2BxdTE7H6HM3A2Bhr%2FaA0mrTyl3jzck3z0CJlsbMBGBkk6sBqYjDzmO6A2Njea1tM8a7LIyb4kc9BMLS31Am8dWtl2nGmnh%2BBq3wrrF4TTKlda6OUMLscex%2FJ5FZluhS%2FCobO12Cy00xthrV5YTfS4J8xylEuVyc0MWsiUDaHF9FzHB6KuCQaeVkhw1MD%2FMh6nSwbB%2B12teBg5WTK35TtwFf8zRmZk9HuXr0j1wAXof%2FUrtJyMyIBmfswUspxwysuGSOEC3%2BBV2lD2QnY98WZl5hSmabzjnQ6ZAiwO586CiJ%2FA%2F9GDtSq%2F5VgPqbJYEpwN5gIu0SzVbhOjvMS%2FATO57MBc3NBxxf0eSLi4%2FbTMRGHvRGBpF3fWkUpzAh1JEN0hNVMefQpDGuQVa8tOFU%2F7Z23H2bW92gSdSZISLVbuvFls5dvnq7iTG9MvUNdkZM%2FSAX58z7P29GwOEj1J4l80sw8o7tvQY6pgFPyGRiaGnVqm95mlnYCuYZaCzrlFmW9a1kQ42ItIAMUNEwUxoIBLY01BbsyGA3hdmLadb9yxUHQoa7hcCwsTIbU%2FJc2hq%2BsPPCH03zaWS8kDwAEmWAvkXuvK0rd9uZbFG%2FMxpiOEoXe6Lw3Qz4NL05f2CgZJvPkmWBdJB4i1i7eX304DIoM6b94n1nzMzQgZRWbOvDMPbgjbtVVNu9QGUnMTuLvTFp&X-Amz-Signature=446e582b23b1ff75a412fad5d913b7554d8b16a93c728d1279ef6faa99b5bde6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
