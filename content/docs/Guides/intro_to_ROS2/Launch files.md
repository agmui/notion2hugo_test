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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNKO367%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGRVU%2FV4quMrUpyhPEwyZY8vdUxCWHlWzADZZYrjtIoJAiEAmjjJ9N03i1Y6N%2BFP01JaKGlfyVJtd2wpV1TQUu2Ens0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMJHkuuLHxveQ8OlACrcA%2BC9RZu00ix7%2BADffbQfl6%2FEOMnTJIduyOMhmfwaIh6VHwEazVFW4UoXQCgti8NYkyzMTD5IHDtKwVNv5E4apa29%2FnMgYrvB38vqR6SG4mcMVrmnQTubAB8fvXMAIOsAkYg8w57Tr1n8EIKiQddfjktsOsVsFE956FGK2bT2vau%2BAAn4eXU%2B6apSqundVYI1n0hxkRjz1k%2BoDUiA2Wro62zOCdqpf11aIB1nPS7a8H6%2FhtRieIu7hP7iiTm8b%2Bb67NvlulWnKaMmHJKIaYInNuTGJMlR9Y4hNrJgqc8Jr4pGsCzLl818PiQo%2BQuCCe1IDgvmyZq%2BWFO7pe%2F179Nhe03r%2BreD2DaL6aaienchf8n7BVpSQAp6QaznEX2n921KXXxyX7oDIz%2B0aeugoVaxxiZp4vxQIMTZxURodGwatyHJ3mkIxhTllUhzEvxIe6n0WxM1dNlZFQFbqFRGoZqaxuxJMInv3Sg0EKmdOzv%2FKzfsTFCmQiQ5WMBEogq1AEvGnYywnlWXpObk9YSrV9Joodz%2BhsGqMKTOLzT11Oh0qdz%2BKoPLfdEINbyvWAKNMR9UTxp4GA5MEhgxfTjaJQyXezv%2B5h3h13WsrPxOGM9XedU5zR%2FYiA4AHlVeONDvMNHynsMGOqUBLqy%2FlEiowbnxrC4GN0GD4dP3khsCT8LDE4Qa3ynAiRQWQ1v0LiaBpXcmAAsDabNr0NIu4bDSxVB2V7MNWgdAbab1YdHpWueuREI42D2gkIg6MaxbKeqbAi54hqsOUqtFFAEjgJPBxGGNenmJkgwkj4JQiJ6H0zgmi5vtzivxtQmVwJhKEP1r0Kvg%2B9K5IgUkgKkvN2KFRE2aAuhPQxwDTPpr5MQU&X-Amz-Signature=b0ad877a94c508f01e9521baa83e678d40974bbb6046b67407ddc30035301233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNKO367%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGRVU%2FV4quMrUpyhPEwyZY8vdUxCWHlWzADZZYrjtIoJAiEAmjjJ9N03i1Y6N%2BFP01JaKGlfyVJtd2wpV1TQUu2Ens0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMJHkuuLHxveQ8OlACrcA%2BC9RZu00ix7%2BADffbQfl6%2FEOMnTJIduyOMhmfwaIh6VHwEazVFW4UoXQCgti8NYkyzMTD5IHDtKwVNv5E4apa29%2FnMgYrvB38vqR6SG4mcMVrmnQTubAB8fvXMAIOsAkYg8w57Tr1n8EIKiQddfjktsOsVsFE956FGK2bT2vau%2BAAn4eXU%2B6apSqundVYI1n0hxkRjz1k%2BoDUiA2Wro62zOCdqpf11aIB1nPS7a8H6%2FhtRieIu7hP7iiTm8b%2Bb67NvlulWnKaMmHJKIaYInNuTGJMlR9Y4hNrJgqc8Jr4pGsCzLl818PiQo%2BQuCCe1IDgvmyZq%2BWFO7pe%2F179Nhe03r%2BreD2DaL6aaienchf8n7BVpSQAp6QaznEX2n921KXXxyX7oDIz%2B0aeugoVaxxiZp4vxQIMTZxURodGwatyHJ3mkIxhTllUhzEvxIe6n0WxM1dNlZFQFbqFRGoZqaxuxJMInv3Sg0EKmdOzv%2FKzfsTFCmQiQ5WMBEogq1AEvGnYywnlWXpObk9YSrV9Joodz%2BhsGqMKTOLzT11Oh0qdz%2BKoPLfdEINbyvWAKNMR9UTxp4GA5MEhgxfTjaJQyXezv%2B5h3h13WsrPxOGM9XedU5zR%2FYiA4AHlVeONDvMNHynsMGOqUBLqy%2FlEiowbnxrC4GN0GD4dP3khsCT8LDE4Qa3ynAiRQWQ1v0LiaBpXcmAAsDabNr0NIu4bDSxVB2V7MNWgdAbab1YdHpWueuREI42D2gkIg6MaxbKeqbAi54hqsOUqtFFAEjgJPBxGGNenmJkgwkj4JQiJ6H0zgmi5vtzivxtQmVwJhKEP1r0Kvg%2B9K5IgUkgKkvN2KFRE2aAuhPQxwDTPpr5MQU&X-Amz-Signature=b9593f2d3502d90c4dc9b04dbf6e7eca9c59154f83ead8dfb4de15cf33a4e393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNKO367%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGRVU%2FV4quMrUpyhPEwyZY8vdUxCWHlWzADZZYrjtIoJAiEAmjjJ9N03i1Y6N%2BFP01JaKGlfyVJtd2wpV1TQUu2Ens0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMJHkuuLHxveQ8OlACrcA%2BC9RZu00ix7%2BADffbQfl6%2FEOMnTJIduyOMhmfwaIh6VHwEazVFW4UoXQCgti8NYkyzMTD5IHDtKwVNv5E4apa29%2FnMgYrvB38vqR6SG4mcMVrmnQTubAB8fvXMAIOsAkYg8w57Tr1n8EIKiQddfjktsOsVsFE956FGK2bT2vau%2BAAn4eXU%2B6apSqundVYI1n0hxkRjz1k%2BoDUiA2Wro62zOCdqpf11aIB1nPS7a8H6%2FhtRieIu7hP7iiTm8b%2Bb67NvlulWnKaMmHJKIaYInNuTGJMlR9Y4hNrJgqc8Jr4pGsCzLl818PiQo%2BQuCCe1IDgvmyZq%2BWFO7pe%2F179Nhe03r%2BreD2DaL6aaienchf8n7BVpSQAp6QaznEX2n921KXXxyX7oDIz%2B0aeugoVaxxiZp4vxQIMTZxURodGwatyHJ3mkIxhTllUhzEvxIe6n0WxM1dNlZFQFbqFRGoZqaxuxJMInv3Sg0EKmdOzv%2FKzfsTFCmQiQ5WMBEogq1AEvGnYywnlWXpObk9YSrV9Joodz%2BhsGqMKTOLzT11Oh0qdz%2BKoPLfdEINbyvWAKNMR9UTxp4GA5MEhgxfTjaJQyXezv%2B5h3h13WsrPxOGM9XedU5zR%2FYiA4AHlVeONDvMNHynsMGOqUBLqy%2FlEiowbnxrC4GN0GD4dP3khsCT8LDE4Qa3ynAiRQWQ1v0LiaBpXcmAAsDabNr0NIu4bDSxVB2V7MNWgdAbab1YdHpWueuREI42D2gkIg6MaxbKeqbAi54hqsOUqtFFAEjgJPBxGGNenmJkgwkj4JQiJ6H0zgmi5vtzivxtQmVwJhKEP1r0Kvg%2B9K5IgUkgKkvN2KFRE2aAuhPQxwDTPpr5MQU&X-Amz-Signature=6d39de52b966a0ebbe27c41c01a6362b024028ad0f26322ea810084fd165cb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
