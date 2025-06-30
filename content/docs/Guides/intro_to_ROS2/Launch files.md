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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPAMQRG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFqcqE06zfyBnvClAhKy8r44emY2CdaMjPVo%2BzrwOxAAiBjr8fizeMtAU9j99pQUbXZ8zkLHkhPHO%2BbCwF8z952YyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpc8xuvFHt4OyNmJKtwDo33KPPd9XOH1GB43w6edUOeaGhM%2BwsQIuj3QmfQ8GNYyquN0vvDtQPA4asjX7jMW%2BBoybW7nULvdtW8bSZO3NfXbu%2F8T7uGEXesVG2iOKq%2B8l1Vdhk8Essw8XZ6R59dxNMNiggffBvV7MU9rhskqLdVyNZx7QZ5ASNhl4BQXFfki3t3SYihenMoePopvg%2FnNsya58oQgq0azaA%2B1Tf0e329PPu4tZOdObXZgIqthUhexz%2ByPygxlPalacGpmC31kRxtYzrAA9wyJeI4X6QTNPrUL%2Fei%2BagegenI9bld08htoC8nZ7%2F1GymUHuLUjOXuDClyoryD2cqxi%2BBW873D1z8v2YZvgeD5bxBA6PKbhww2is8XTUD62jtZj%2FOxSPzChEMrvWv2dAWAIp3meWR0VSoaPpJ4%2FOEPQUrW5E7G%2FiXaQewTlGgoZLyYK3xkS6k4I2Tqv2BD5FiLcCxxLlRhzcR%2FOHgPYNcWBHDTQTWeVhHxLJMtITGI%2F5k051VCyyu3s1zFPc2YhfntRxjycyrgi58VVZLNPpR1ZZpeMoeVt%2Fu9AR%2FxdUlmL6vXKM5BKmf%2B4HPcm7Z3j3OZ7FItEZYf7YbBClXTPpgyNMVdwlrojFzOm4lUzj9AjzXrw%2FoIw0c2LwwY6pgFjGhjtQbojfzqHOjAaQ74BnQYSGD6qig9zWzj4yBXRCsDBk7X6zVkB2AecfGtUrW7ERiQhL9psB%2BM2uqB2L%2BSHOy1jqIib%2BgieTelk%2FEYICsdVxKmsJZCXiROW9vl%2FFVRd5P26qsKEUxBRdL8DGkJyhJor30syV8s8nNfZ%2FtrC0H1FXZAQbBLgOWPizDKFN1%2FxjjkeBJrvcvzIV4%2FLnwA9q2bx95XT&X-Amz-Signature=1ebec9d99aaf066d789742c2449b8b16f364c2f8078db2fcc8ef98e8ceed0ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPAMQRG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFqcqE06zfyBnvClAhKy8r44emY2CdaMjPVo%2BzrwOxAAiBjr8fizeMtAU9j99pQUbXZ8zkLHkhPHO%2BbCwF8z952YyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpc8xuvFHt4OyNmJKtwDo33KPPd9XOH1GB43w6edUOeaGhM%2BwsQIuj3QmfQ8GNYyquN0vvDtQPA4asjX7jMW%2BBoybW7nULvdtW8bSZO3NfXbu%2F8T7uGEXesVG2iOKq%2B8l1Vdhk8Essw8XZ6R59dxNMNiggffBvV7MU9rhskqLdVyNZx7QZ5ASNhl4BQXFfki3t3SYihenMoePopvg%2FnNsya58oQgq0azaA%2B1Tf0e329PPu4tZOdObXZgIqthUhexz%2ByPygxlPalacGpmC31kRxtYzrAA9wyJeI4X6QTNPrUL%2Fei%2BagegenI9bld08htoC8nZ7%2F1GymUHuLUjOXuDClyoryD2cqxi%2BBW873D1z8v2YZvgeD5bxBA6PKbhww2is8XTUD62jtZj%2FOxSPzChEMrvWv2dAWAIp3meWR0VSoaPpJ4%2FOEPQUrW5E7G%2FiXaQewTlGgoZLyYK3xkS6k4I2Tqv2BD5FiLcCxxLlRhzcR%2FOHgPYNcWBHDTQTWeVhHxLJMtITGI%2F5k051VCyyu3s1zFPc2YhfntRxjycyrgi58VVZLNPpR1ZZpeMoeVt%2Fu9AR%2FxdUlmL6vXKM5BKmf%2B4HPcm7Z3j3OZ7FItEZYf7YbBClXTPpgyNMVdwlrojFzOm4lUzj9AjzXrw%2FoIw0c2LwwY6pgFjGhjtQbojfzqHOjAaQ74BnQYSGD6qig9zWzj4yBXRCsDBk7X6zVkB2AecfGtUrW7ERiQhL9psB%2BM2uqB2L%2BSHOy1jqIib%2BgieTelk%2FEYICsdVxKmsJZCXiROW9vl%2FFVRd5P26qsKEUxBRdL8DGkJyhJor30syV8s8nNfZ%2FtrC0H1FXZAQbBLgOWPizDKFN1%2FxjjkeBJrvcvzIV4%2FLnwA9q2bx95XT&X-Amz-Signature=831dd67e075d123d6640e451be13c687182bf431a2b15b43ef6dc3547c5cc84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPAMQRG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFqcqE06zfyBnvClAhKy8r44emY2CdaMjPVo%2BzrwOxAAiBjr8fizeMtAU9j99pQUbXZ8zkLHkhPHO%2BbCwF8z952YyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpc8xuvFHt4OyNmJKtwDo33KPPd9XOH1GB43w6edUOeaGhM%2BwsQIuj3QmfQ8GNYyquN0vvDtQPA4asjX7jMW%2BBoybW7nULvdtW8bSZO3NfXbu%2F8T7uGEXesVG2iOKq%2B8l1Vdhk8Essw8XZ6R59dxNMNiggffBvV7MU9rhskqLdVyNZx7QZ5ASNhl4BQXFfki3t3SYihenMoePopvg%2FnNsya58oQgq0azaA%2B1Tf0e329PPu4tZOdObXZgIqthUhexz%2ByPygxlPalacGpmC31kRxtYzrAA9wyJeI4X6QTNPrUL%2Fei%2BagegenI9bld08htoC8nZ7%2F1GymUHuLUjOXuDClyoryD2cqxi%2BBW873D1z8v2YZvgeD5bxBA6PKbhww2is8XTUD62jtZj%2FOxSPzChEMrvWv2dAWAIp3meWR0VSoaPpJ4%2FOEPQUrW5E7G%2FiXaQewTlGgoZLyYK3xkS6k4I2Tqv2BD5FiLcCxxLlRhzcR%2FOHgPYNcWBHDTQTWeVhHxLJMtITGI%2F5k051VCyyu3s1zFPc2YhfntRxjycyrgi58VVZLNPpR1ZZpeMoeVt%2Fu9AR%2FxdUlmL6vXKM5BKmf%2B4HPcm7Z3j3OZ7FItEZYf7YbBClXTPpgyNMVdwlrojFzOm4lUzj9AjzXrw%2FoIw0c2LwwY6pgFjGhjtQbojfzqHOjAaQ74BnQYSGD6qig9zWzj4yBXRCsDBk7X6zVkB2AecfGtUrW7ERiQhL9psB%2BM2uqB2L%2BSHOy1jqIib%2BgieTelk%2FEYICsdVxKmsJZCXiROW9vl%2FFVRd5P26qsKEUxBRdL8DGkJyhJor30syV8s8nNfZ%2FtrC0H1FXZAQbBLgOWPizDKFN1%2FxjjkeBJrvcvzIV4%2FLnwA9q2bx95XT&X-Amz-Signature=b95b99efb665077ddcba6c7f855a1d428d26367ee0977869860332fa417f6ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
