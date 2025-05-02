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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2GRNLF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC3zhulJp4dWZHQcyBBppTAbjxn4PE27qJ472jZWp2khwIhANOqf6Zqb7SSQi86xQkglXT%2BHMsnB0NPddvavb9cc3wtKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF34ixy0g5EumL3Mwq3APEzKAr57Ve3DQ4LULzzmjCBFQSgnpDpfkPwS%2Bg3A2Is192McDvrju%2Fc8JnoRgDHilDzcjZwaLi46EVh6%2BpPVj0ZshM2eCP3dRq7ZyR3H5AE592fBjsW6c6nPbOaW%2B8CLJuXPKx4Izcq7T8blphDhz1V%2Fdf197NbLB7ttr4IKUApuWeKY4XRRHpzYL%2FJvnNWZy1FV0v69vhG2ugM%2FBO1LeLwne8lxG64GCs%2BPRkwFR%2FniyVPv66YIdL%2BDvLgqQ48mvF3cYd93vRAGKxfqp3GMetLxrpRBNEwaCHhoGgzyl6BwQ6hb9hvmyz8aSgpq%2FXrbsZ4%2BujkbOb37ne6ASFqsyEoWdNv448eWDmA4KpLy213TBxq8FZNitYd3YbKfzp1kzEPttLdCdZz4Xc5LGFs1S%2BjcvJdv4%2F%2BMByWSq3gwu8FCpPrQod7KWA4m04sYe%2FEwMHn92tH11D2%2F2TaLGrGvQnS3YYqfSlUj1r6gTi%2FcAX4EKmbrj0CXDpjBRsNTJyHdge8tLYJmtbVi4fLbizbeBE%2BJP3jb76Lm8GCeZWhFd5HQVB4KaEPnD2xBkFmDxsW51jarrE16arM6QWSLsnP8CgwpkNBpnaAyOKU6hIKH2m98rpiNMb9Fr1Nar5MzDbyNPABjqkASjplflFtX%2F1VMh9jeLSHQb0eZcl9WSUAi51iRuZ%2F6h4JiFGUi6jzFOjKUsuz8gMc2x4b7pmSesKTqavygyDF2yBqQ9Iv8t1ofpgzLTlZaL8PZXN6ZSwV7H77u8o2Izk65iWVivcFZrXi54jokjmhlWA2s7%2F00W%2Fut088SFqkRpdxdurDmM4BaRmK7LUWhrvarlB5cOaH6n4zZNgFO3pLNI8EVCu&X-Amz-Signature=3afb361c71c596931567f057ac7589ea0bd72b071ca58bc6319c49d1df7be09b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2GRNLF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC3zhulJp4dWZHQcyBBppTAbjxn4PE27qJ472jZWp2khwIhANOqf6Zqb7SSQi86xQkglXT%2BHMsnB0NPddvavb9cc3wtKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF34ixy0g5EumL3Mwq3APEzKAr57Ve3DQ4LULzzmjCBFQSgnpDpfkPwS%2Bg3A2Is192McDvrju%2Fc8JnoRgDHilDzcjZwaLi46EVh6%2BpPVj0ZshM2eCP3dRq7ZyR3H5AE592fBjsW6c6nPbOaW%2B8CLJuXPKx4Izcq7T8blphDhz1V%2Fdf197NbLB7ttr4IKUApuWeKY4XRRHpzYL%2FJvnNWZy1FV0v69vhG2ugM%2FBO1LeLwne8lxG64GCs%2BPRkwFR%2FniyVPv66YIdL%2BDvLgqQ48mvF3cYd93vRAGKxfqp3GMetLxrpRBNEwaCHhoGgzyl6BwQ6hb9hvmyz8aSgpq%2FXrbsZ4%2BujkbOb37ne6ASFqsyEoWdNv448eWDmA4KpLy213TBxq8FZNitYd3YbKfzp1kzEPttLdCdZz4Xc5LGFs1S%2BjcvJdv4%2F%2BMByWSq3gwu8FCpPrQod7KWA4m04sYe%2FEwMHn92tH11D2%2F2TaLGrGvQnS3YYqfSlUj1r6gTi%2FcAX4EKmbrj0CXDpjBRsNTJyHdge8tLYJmtbVi4fLbizbeBE%2BJP3jb76Lm8GCeZWhFd5HQVB4KaEPnD2xBkFmDxsW51jarrE16arM6QWSLsnP8CgwpkNBpnaAyOKU6hIKH2m98rpiNMb9Fr1Nar5MzDbyNPABjqkASjplflFtX%2F1VMh9jeLSHQb0eZcl9WSUAi51iRuZ%2F6h4JiFGUi6jzFOjKUsuz8gMc2x4b7pmSesKTqavygyDF2yBqQ9Iv8t1ofpgzLTlZaL8PZXN6ZSwV7H77u8o2Izk65iWVivcFZrXi54jokjmhlWA2s7%2F00W%2Fut088SFqkRpdxdurDmM4BaRmK7LUWhrvarlB5cOaH6n4zZNgFO3pLNI8EVCu&X-Amz-Signature=e1a9e66997a34b44b5658f2866a59f36b4d8221c19f7e0b1b7e16a5e7776f37c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2GRNLF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC3zhulJp4dWZHQcyBBppTAbjxn4PE27qJ472jZWp2khwIhANOqf6Zqb7SSQi86xQkglXT%2BHMsnB0NPddvavb9cc3wtKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF34ixy0g5EumL3Mwq3APEzKAr57Ve3DQ4LULzzmjCBFQSgnpDpfkPwS%2Bg3A2Is192McDvrju%2Fc8JnoRgDHilDzcjZwaLi46EVh6%2BpPVj0ZshM2eCP3dRq7ZyR3H5AE592fBjsW6c6nPbOaW%2B8CLJuXPKx4Izcq7T8blphDhz1V%2Fdf197NbLB7ttr4IKUApuWeKY4XRRHpzYL%2FJvnNWZy1FV0v69vhG2ugM%2FBO1LeLwne8lxG64GCs%2BPRkwFR%2FniyVPv66YIdL%2BDvLgqQ48mvF3cYd93vRAGKxfqp3GMetLxrpRBNEwaCHhoGgzyl6BwQ6hb9hvmyz8aSgpq%2FXrbsZ4%2BujkbOb37ne6ASFqsyEoWdNv448eWDmA4KpLy213TBxq8FZNitYd3YbKfzp1kzEPttLdCdZz4Xc5LGFs1S%2BjcvJdv4%2F%2BMByWSq3gwu8FCpPrQod7KWA4m04sYe%2FEwMHn92tH11D2%2F2TaLGrGvQnS3YYqfSlUj1r6gTi%2FcAX4EKmbrj0CXDpjBRsNTJyHdge8tLYJmtbVi4fLbizbeBE%2BJP3jb76Lm8GCeZWhFd5HQVB4KaEPnD2xBkFmDxsW51jarrE16arM6QWSLsnP8CgwpkNBpnaAyOKU6hIKH2m98rpiNMb9Fr1Nar5MzDbyNPABjqkASjplflFtX%2F1VMh9jeLSHQb0eZcl9WSUAi51iRuZ%2F6h4JiFGUi6jzFOjKUsuz8gMc2x4b7pmSesKTqavygyDF2yBqQ9Iv8t1ofpgzLTlZaL8PZXN6ZSwV7H77u8o2Izk65iWVivcFZrXi54jokjmhlWA2s7%2F00W%2Fut088SFqkRpdxdurDmM4BaRmK7LUWhrvarlB5cOaH6n4zZNgFO3pLNI8EVCu&X-Amz-Signature=c91fadda777e4ba75004c579d7da63d6ef1796f94d2322d1bb649fbf5bf0fbf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
