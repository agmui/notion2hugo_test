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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWCS3F3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICe3%2FPBXgqx9qzzd6YaXQII7ZHwfpqq3YApLZMI56CI%2BAiBq%2Fa7CGQ%2FqjE1av0F8ApM3qrJLOVTsjwERYPNuvtwIuir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMbJ291PdUOTFhKKKRKtwDFpkA3KFG1GhQNRxX88YVouJP7FVWkHNXZID58EAZFXKkG0Cc%2BKHWRSSlQrfcH3zGrXTIERsRkU%2FWesDyVvde4ssrXEE0WV6TZ9hZEl0CD13%2Bz8voKZa3hhlqZMrqsiY206%2BR6mySpbD4FIze%2B36AN5pCjzg2wmR0aWpipJboJJpYHszOVsJqRLg%2FIN%2BPSzGt9jF5u1pFATyht2mm0P8oZwsORGFYk8BpBnBRjbcF62r%2BNdmYPW1qWwYI8m9j2bljRyvfUvDFP7nIdvltj8mMCYRQBR1os07LFvzyFvZU6eLnL5ZgL1T0bDONNF4%2B2RF420Tl5AS2tIbWCfMZknIL7QcFrqwiScTIl3CKZbR0OzKut80coFwtv99Ml4%2BItFB7wT%2BY%2B057aXLZFYSKcm21UPbXtlYgANvRBN2g0ANtNrxT7Ptpw8HC1ere8gjHbGzx6qIHccrrKrqFPYq75Idq9Iwu5JMWFZVpODOxPNOKNIG%2FKdQHjjB33YQ5F%2F6z%2FJGaB37AisPSVTkRz%2BHXKIhIt1GKwkKku%2BWYlS%2F43X%2Bw%2B6MGvvZL%2Bu3l8tD2liIV4PAXlRhQZMawm4jLSFZ%2B9gd26xb8HDZhsDNZQMa9xZJVGBJjIM%2BE50h128Rgeskws5bIwQY6pgHCmda45afbU605KkeCpEBKoGssqLt4XnDcPNbOsyf57vl6AC1GGSSriz5FLt2EcgLxarmCWRue2kvfeyWNEt2%2FcAj9E%2BuF7wftQHrWwIidQIF%2FM41Lu8eqGSVqQ5r8mWWvMLnVOJPpxnghh9MsvyXk33S%2B94bGZ%2FP6O1MHKbRNAu7%2FTurEpLTXZRkNnEIATNVfIiYJ1gq9stB2xZs%2FZEl7FXl61bCf&X-Amz-Signature=a3b6b375d39322b0f1ff214be3021957bfede1dc5649b4ba5a410e355e702940&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWCS3F3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICe3%2FPBXgqx9qzzd6YaXQII7ZHwfpqq3YApLZMI56CI%2BAiBq%2Fa7CGQ%2FqjE1av0F8ApM3qrJLOVTsjwERYPNuvtwIuir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMbJ291PdUOTFhKKKRKtwDFpkA3KFG1GhQNRxX88YVouJP7FVWkHNXZID58EAZFXKkG0Cc%2BKHWRSSlQrfcH3zGrXTIERsRkU%2FWesDyVvde4ssrXEE0WV6TZ9hZEl0CD13%2Bz8voKZa3hhlqZMrqsiY206%2BR6mySpbD4FIze%2B36AN5pCjzg2wmR0aWpipJboJJpYHszOVsJqRLg%2FIN%2BPSzGt9jF5u1pFATyht2mm0P8oZwsORGFYk8BpBnBRjbcF62r%2BNdmYPW1qWwYI8m9j2bljRyvfUvDFP7nIdvltj8mMCYRQBR1os07LFvzyFvZU6eLnL5ZgL1T0bDONNF4%2B2RF420Tl5AS2tIbWCfMZknIL7QcFrqwiScTIl3CKZbR0OzKut80coFwtv99Ml4%2BItFB7wT%2BY%2B057aXLZFYSKcm21UPbXtlYgANvRBN2g0ANtNrxT7Ptpw8HC1ere8gjHbGzx6qIHccrrKrqFPYq75Idq9Iwu5JMWFZVpODOxPNOKNIG%2FKdQHjjB33YQ5F%2F6z%2FJGaB37AisPSVTkRz%2BHXKIhIt1GKwkKku%2BWYlS%2F43X%2Bw%2B6MGvvZL%2Bu3l8tD2liIV4PAXlRhQZMawm4jLSFZ%2B9gd26xb8HDZhsDNZQMa9xZJVGBJjIM%2BE50h128Rgeskws5bIwQY6pgHCmda45afbU605KkeCpEBKoGssqLt4XnDcPNbOsyf57vl6AC1GGSSriz5FLt2EcgLxarmCWRue2kvfeyWNEt2%2FcAj9E%2BuF7wftQHrWwIidQIF%2FM41Lu8eqGSVqQ5r8mWWvMLnVOJPpxnghh9MsvyXk33S%2B94bGZ%2FP6O1MHKbRNAu7%2FTurEpLTXZRkNnEIATNVfIiYJ1gq9stB2xZs%2FZEl7FXl61bCf&X-Amz-Signature=cff5f4d10b1e5220caf867aef3e76ee1c93d25668baef560045b0c9aa028568e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWCS3F3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICe3%2FPBXgqx9qzzd6YaXQII7ZHwfpqq3YApLZMI56CI%2BAiBq%2Fa7CGQ%2FqjE1av0F8ApM3qrJLOVTsjwERYPNuvtwIuir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMbJ291PdUOTFhKKKRKtwDFpkA3KFG1GhQNRxX88YVouJP7FVWkHNXZID58EAZFXKkG0Cc%2BKHWRSSlQrfcH3zGrXTIERsRkU%2FWesDyVvde4ssrXEE0WV6TZ9hZEl0CD13%2Bz8voKZa3hhlqZMrqsiY206%2BR6mySpbD4FIze%2B36AN5pCjzg2wmR0aWpipJboJJpYHszOVsJqRLg%2FIN%2BPSzGt9jF5u1pFATyht2mm0P8oZwsORGFYk8BpBnBRjbcF62r%2BNdmYPW1qWwYI8m9j2bljRyvfUvDFP7nIdvltj8mMCYRQBR1os07LFvzyFvZU6eLnL5ZgL1T0bDONNF4%2B2RF420Tl5AS2tIbWCfMZknIL7QcFrqwiScTIl3CKZbR0OzKut80coFwtv99Ml4%2BItFB7wT%2BY%2B057aXLZFYSKcm21UPbXtlYgANvRBN2g0ANtNrxT7Ptpw8HC1ere8gjHbGzx6qIHccrrKrqFPYq75Idq9Iwu5JMWFZVpODOxPNOKNIG%2FKdQHjjB33YQ5F%2F6z%2FJGaB37AisPSVTkRz%2BHXKIhIt1GKwkKku%2BWYlS%2F43X%2Bw%2B6MGvvZL%2Bu3l8tD2liIV4PAXlRhQZMawm4jLSFZ%2B9gd26xb8HDZhsDNZQMa9xZJVGBJjIM%2BE50h128Rgeskws5bIwQY6pgHCmda45afbU605KkeCpEBKoGssqLt4XnDcPNbOsyf57vl6AC1GGSSriz5FLt2EcgLxarmCWRue2kvfeyWNEt2%2FcAj9E%2BuF7wftQHrWwIidQIF%2FM41Lu8eqGSVqQ5r8mWWvMLnVOJPpxnghh9MsvyXk33S%2B94bGZ%2FP6O1MHKbRNAu7%2FTurEpLTXZRkNnEIATNVfIiYJ1gq9stB2xZs%2FZEl7FXl61bCf&X-Amz-Signature=eec0347c2bd283151db92d64341066072bda30993d81280efb2337a47472169d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
