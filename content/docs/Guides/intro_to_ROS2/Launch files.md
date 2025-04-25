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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTOQ5EA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEL3QjhkxS57k%2Btlk8uuqGlAGMp80sZCsueag%2Bs3iyCAiAzCoohTqa5fBdH2jl5yp8hiPeFM8BekQ6vEGDjUm08Uir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMoxlq8qdJJ%2FXhJyNqKtwDGCDRCFJc6FO8TSHuRu2%2FTHYaL3NNogxrl%2BcDEPsTbgJ%2BnYnogWqqwca9sBhLQ7cNtFOuS9lq1iMCnQaojpVg9kksOPeb4fSWxg%2FuRkena5a4tbuR3flV82qy4gbzRapQcl8%2FT3%2F9t%2BqpHZLO7uHB77qxGSJF5C8OcDM9vxQQ9qjliEt0iNC2XJrIMN%2FsNKnKpUsrwlbfZEAOsjuj8Mrtos%2BTSYEhRUErS9XEIEIDve2b3m%2B3fte0Z3hJy4eDHNIhuiiers6xIzM6rR5Nm5jGeVWzjSGIj8D3T79DmEIbI9BEWAC2gI5e1f9psSFKM5bBD0Xbt27%2FiNaIZzFRQFK8hLJO0W2NFLDFVCAdfmyx%2FIBxpExjbmM8TG%2Fza%2FsM8plWacoUWlrrmds3G1b%2FWO4nScXrwwlH5anfPGxMAdlTLA1Bd4wFeCp3ac72DMZJdj55Igg9jg5rs7jP6DLdVvKe1AlkNPBXNhnG4QySwCCc7Vpz75nOXgyynczovjPF1LSH8zcP1K2eoB40sd%2FxpjlfBMHC%2BvQvOxAudaNZbzs3mrdFUkyKAZOuPe8m9pNsBlSoDhxPl9acIxTAPoYgdzavQ66S3sAbSJWD%2BKv63bh36Dlnj2YFdBwgbxdbxsEw0MitwAY6pgEbMXlkm%2FOclmwl6cqsOkPs1Wp%2BgnIKod6IzkJ9ETbnyJdC%2FsWSGBfK5Jf1DBf%2Fu0JzPOEP2TOJx1nB1%2FPvVYJNBU5zGDmaP80D6u740ruNKLDYed%2Fl%2FhYLcOIzDDJ0Ep%2FKKgUx9vLFZqN3suDEADWNtv0K8WA%2BRHBtO9Y4HslMtgW5x%2Bm1GNltaQo72cnPp1TELNWAnIg6R3E0U2kd3eOG%2B1gONCMg&X-Amz-Signature=61cf3e603e56b3ad9c01268c3c76676161c51790958eb9938c4000aa23e4270c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTOQ5EA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEL3QjhkxS57k%2Btlk8uuqGlAGMp80sZCsueag%2Bs3iyCAiAzCoohTqa5fBdH2jl5yp8hiPeFM8BekQ6vEGDjUm08Uir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMoxlq8qdJJ%2FXhJyNqKtwDGCDRCFJc6FO8TSHuRu2%2FTHYaL3NNogxrl%2BcDEPsTbgJ%2BnYnogWqqwca9sBhLQ7cNtFOuS9lq1iMCnQaojpVg9kksOPeb4fSWxg%2FuRkena5a4tbuR3flV82qy4gbzRapQcl8%2FT3%2F9t%2BqpHZLO7uHB77qxGSJF5C8OcDM9vxQQ9qjliEt0iNC2XJrIMN%2FsNKnKpUsrwlbfZEAOsjuj8Mrtos%2BTSYEhRUErS9XEIEIDve2b3m%2B3fte0Z3hJy4eDHNIhuiiers6xIzM6rR5Nm5jGeVWzjSGIj8D3T79DmEIbI9BEWAC2gI5e1f9psSFKM5bBD0Xbt27%2FiNaIZzFRQFK8hLJO0W2NFLDFVCAdfmyx%2FIBxpExjbmM8TG%2Fza%2FsM8plWacoUWlrrmds3G1b%2FWO4nScXrwwlH5anfPGxMAdlTLA1Bd4wFeCp3ac72DMZJdj55Igg9jg5rs7jP6DLdVvKe1AlkNPBXNhnG4QySwCCc7Vpz75nOXgyynczovjPF1LSH8zcP1K2eoB40sd%2FxpjlfBMHC%2BvQvOxAudaNZbzs3mrdFUkyKAZOuPe8m9pNsBlSoDhxPl9acIxTAPoYgdzavQ66S3sAbSJWD%2BKv63bh36Dlnj2YFdBwgbxdbxsEw0MitwAY6pgEbMXlkm%2FOclmwl6cqsOkPs1Wp%2BgnIKod6IzkJ9ETbnyJdC%2FsWSGBfK5Jf1DBf%2Fu0JzPOEP2TOJx1nB1%2FPvVYJNBU5zGDmaP80D6u740ruNKLDYed%2Fl%2FhYLcOIzDDJ0Ep%2FKKgUx9vLFZqN3suDEADWNtv0K8WA%2BRHBtO9Y4HslMtgW5x%2Bm1GNltaQo72cnPp1TELNWAnIg6R3E0U2kd3eOG%2B1gONCMg&X-Amz-Signature=e6d10b1f9cf1144ef7877c74d629c3ddca07de042df6f2f2b618367e941feb29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTOQ5EA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEL3QjhkxS57k%2Btlk8uuqGlAGMp80sZCsueag%2Bs3iyCAiAzCoohTqa5fBdH2jl5yp8hiPeFM8BekQ6vEGDjUm08Uir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMoxlq8qdJJ%2FXhJyNqKtwDGCDRCFJc6FO8TSHuRu2%2FTHYaL3NNogxrl%2BcDEPsTbgJ%2BnYnogWqqwca9sBhLQ7cNtFOuS9lq1iMCnQaojpVg9kksOPeb4fSWxg%2FuRkena5a4tbuR3flV82qy4gbzRapQcl8%2FT3%2F9t%2BqpHZLO7uHB77qxGSJF5C8OcDM9vxQQ9qjliEt0iNC2XJrIMN%2FsNKnKpUsrwlbfZEAOsjuj8Mrtos%2BTSYEhRUErS9XEIEIDve2b3m%2B3fte0Z3hJy4eDHNIhuiiers6xIzM6rR5Nm5jGeVWzjSGIj8D3T79DmEIbI9BEWAC2gI5e1f9psSFKM5bBD0Xbt27%2FiNaIZzFRQFK8hLJO0W2NFLDFVCAdfmyx%2FIBxpExjbmM8TG%2Fza%2FsM8plWacoUWlrrmds3G1b%2FWO4nScXrwwlH5anfPGxMAdlTLA1Bd4wFeCp3ac72DMZJdj55Igg9jg5rs7jP6DLdVvKe1AlkNPBXNhnG4QySwCCc7Vpz75nOXgyynczovjPF1LSH8zcP1K2eoB40sd%2FxpjlfBMHC%2BvQvOxAudaNZbzs3mrdFUkyKAZOuPe8m9pNsBlSoDhxPl9acIxTAPoYgdzavQ66S3sAbSJWD%2BKv63bh36Dlnj2YFdBwgbxdbxsEw0MitwAY6pgEbMXlkm%2FOclmwl6cqsOkPs1Wp%2BgnIKod6IzkJ9ETbnyJdC%2FsWSGBfK5Jf1DBf%2Fu0JzPOEP2TOJx1nB1%2FPvVYJNBU5zGDmaP80D6u740ruNKLDYed%2Fl%2FhYLcOIzDDJ0Ep%2FKKgUx9vLFZqN3suDEADWNtv0K8WA%2BRHBtO9Y4HslMtgW5x%2Bm1GNltaQo72cnPp1TELNWAnIg6R3E0U2kd3eOG%2B1gONCMg&X-Amz-Signature=b4798cfc94df05b00f4c5e272c2795e0b3d4be445918d1fe6b05365fbc5ae059&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
