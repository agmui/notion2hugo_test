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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5MALTQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Ft75zwh%2FSaV9oy1BMLCAhBmR65DqYogovDXVgl%2BeggIhAKdAJB9lIs%2BoR%2FbGgflrG1kesICOXCL7B2T%2FuuWffrRFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdNg8xsHmsMAgQv7oq3APyCioEV2U4z1gD9iAJE3uRBb2qAehGNtSiCSKkcgaMeqv52TulIArCI3GM2FejxEjDGbzCvvcQ%2B2qkEy6hkkfPg30DT3wPqCjY441iMlfmRvjLx7%2F9ielHWIHaRfaOwARbcoIavpHCvFVpahDzAPgVqdWF9tGtlpEOhl4dWakPK5mVn55A1K5ZN%2FLfxLv9bUdNFP7AmdiLsFZvY%2Fw74CA8PkDxfZRxwDZumqDLC6BsyJere9FHcoK45rE3rhYPzscChx9gVv9WGqS9JET8CZ9yrnxT%2Bkt6ZthvtojDzDUQpdguIdAEsefJM0ArwLzSg0jeT66s6R%2Bw4rTMdMbFBDy5I51sH4MufZ9AW4c3lQ3S3HBPjxd6EIjG998y9BTRFghm8y7GeNFJ%2FXrLM87UhfXnaa3m9UObRAUT0d1N%2FSOeegbkd9u%2Ferf4cJNt8DSpSVuzIasZP4MkQFayl8XBe7vo8RyO2ekCl4EmnDoQdNivfORej3zKcm%2BclPkixvKsOL2d5rgO%2F%2BUeUhaF1fe5%2FYKo%2Fzsr%2BApj3hpMjpgBCiu3Ra%2BssMfli7Zh2sByvoSOBYv7s9MpFjSOXEGZb98%2FZSipZZNQv1Duonu3Ejaf62sF5oCEhn84QdFH4kv7JDCh3f68BjqkASFSAl2gMzJQHcBFIc%2FR4xiTthpmKMo5hexHxp2e3hmy%2B7l1TYD5nnu2n5NpattpSO2QkZidB6pSpD5knl4OaorIuXP0H9%2FmPpigNJ8Ksmodt%2BtcbyIO%2BDjvicTjkIlH85QMb9IFurce3fgZbRtNV7IqwDX8y9R0W%2BarZwY92J%2F75W%2F01ovm4b%2F5IK814ex8Sx0P7FmWGP9O0tS%2FHCBKP0Y9IFdO&X-Amz-Signature=3731fc121c10fe6592ff52f22bcc23efb14665b8ac7cb18c3da91adc55f3ab3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5MALTQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Ft75zwh%2FSaV9oy1BMLCAhBmR65DqYogovDXVgl%2BeggIhAKdAJB9lIs%2BoR%2FbGgflrG1kesICOXCL7B2T%2FuuWffrRFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdNg8xsHmsMAgQv7oq3APyCioEV2U4z1gD9iAJE3uRBb2qAehGNtSiCSKkcgaMeqv52TulIArCI3GM2FejxEjDGbzCvvcQ%2B2qkEy6hkkfPg30DT3wPqCjY441iMlfmRvjLx7%2F9ielHWIHaRfaOwARbcoIavpHCvFVpahDzAPgVqdWF9tGtlpEOhl4dWakPK5mVn55A1K5ZN%2FLfxLv9bUdNFP7AmdiLsFZvY%2Fw74CA8PkDxfZRxwDZumqDLC6BsyJere9FHcoK45rE3rhYPzscChx9gVv9WGqS9JET8CZ9yrnxT%2Bkt6ZthvtojDzDUQpdguIdAEsefJM0ArwLzSg0jeT66s6R%2Bw4rTMdMbFBDy5I51sH4MufZ9AW4c3lQ3S3HBPjxd6EIjG998y9BTRFghm8y7GeNFJ%2FXrLM87UhfXnaa3m9UObRAUT0d1N%2FSOeegbkd9u%2Ferf4cJNt8DSpSVuzIasZP4MkQFayl8XBe7vo8RyO2ekCl4EmnDoQdNivfORej3zKcm%2BclPkixvKsOL2d5rgO%2F%2BUeUhaF1fe5%2FYKo%2Fzsr%2BApj3hpMjpgBCiu3Ra%2BssMfli7Zh2sByvoSOBYv7s9MpFjSOXEGZb98%2FZSipZZNQv1Duonu3Ejaf62sF5oCEhn84QdFH4kv7JDCh3f68BjqkASFSAl2gMzJQHcBFIc%2FR4xiTthpmKMo5hexHxp2e3hmy%2B7l1TYD5nnu2n5NpattpSO2QkZidB6pSpD5knl4OaorIuXP0H9%2FmPpigNJ8Ksmodt%2BtcbyIO%2BDjvicTjkIlH85QMb9IFurce3fgZbRtNV7IqwDX8y9R0W%2BarZwY92J%2F75W%2F01ovm4b%2F5IK814ex8Sx0P7FmWGP9O0tS%2FHCBKP0Y9IFdO&X-Amz-Signature=9f9b143f46b8483e1101dd355c5f023691a78dcc71d85cc41f4e2fdf68a7df5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5MALTQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Ft75zwh%2FSaV9oy1BMLCAhBmR65DqYogovDXVgl%2BeggIhAKdAJB9lIs%2BoR%2FbGgflrG1kesICOXCL7B2T%2FuuWffrRFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdNg8xsHmsMAgQv7oq3APyCioEV2U4z1gD9iAJE3uRBb2qAehGNtSiCSKkcgaMeqv52TulIArCI3GM2FejxEjDGbzCvvcQ%2B2qkEy6hkkfPg30DT3wPqCjY441iMlfmRvjLx7%2F9ielHWIHaRfaOwARbcoIavpHCvFVpahDzAPgVqdWF9tGtlpEOhl4dWakPK5mVn55A1K5ZN%2FLfxLv9bUdNFP7AmdiLsFZvY%2Fw74CA8PkDxfZRxwDZumqDLC6BsyJere9FHcoK45rE3rhYPzscChx9gVv9WGqS9JET8CZ9yrnxT%2Bkt6ZthvtojDzDUQpdguIdAEsefJM0ArwLzSg0jeT66s6R%2Bw4rTMdMbFBDy5I51sH4MufZ9AW4c3lQ3S3HBPjxd6EIjG998y9BTRFghm8y7GeNFJ%2FXrLM87UhfXnaa3m9UObRAUT0d1N%2FSOeegbkd9u%2Ferf4cJNt8DSpSVuzIasZP4MkQFayl8XBe7vo8RyO2ekCl4EmnDoQdNivfORej3zKcm%2BclPkixvKsOL2d5rgO%2F%2BUeUhaF1fe5%2FYKo%2Fzsr%2BApj3hpMjpgBCiu3Ra%2BssMfli7Zh2sByvoSOBYv7s9MpFjSOXEGZb98%2FZSipZZNQv1Duonu3Ejaf62sF5oCEhn84QdFH4kv7JDCh3f68BjqkASFSAl2gMzJQHcBFIc%2FR4xiTthpmKMo5hexHxp2e3hmy%2B7l1TYD5nnu2n5NpattpSO2QkZidB6pSpD5knl4OaorIuXP0H9%2FmPpigNJ8Ksmodt%2BtcbyIO%2BDjvicTjkIlH85QMb9IFurce3fgZbRtNV7IqwDX8y9R0W%2BarZwY92J%2F75W%2F01ovm4b%2F5IK814ex8Sx0P7FmWGP9O0tS%2FHCBKP0Y9IFdO&X-Amz-Signature=d75d494c3eda594be854716a0d353317848998e1f7b0873b9f351b5a29f40d97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
