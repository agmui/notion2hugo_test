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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOT3V34E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsUEZAI6I2rf6crusSRYJodRqjM8rP69k4p%2FUOfsYXdQIgX3uSQdTF%2Bcpfj6MFzz9DUcQkhZ2hL1gX95%2F3mUqLYVsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDO%2B3AGy4zRq8JFHDiCrcAzbe4BOTifMtY1c8qsXL9X%2BI5kDB7Bs0BGzN2k9aPpq5iRkhjXdCUKhdeCarK53pRQM%2Ft1%2BeQfp20dmVNafmjaTwxEIZOMq9FA7L2uthgDiCjDk8idEYOkSIkDh5XoY%2F7JPHk3YHEC9svFqLlU8mDHV3H8pALnHTOd0HnCciOzCR%2BQCabdREA4%2FKf29GI3ZFs8qSOAyA4oC6gi1FmDBLMMzNwLnJsW99PVJuARIpskyeyBuBdC%2B3oQLztj6BlcF7Sz4zP9rZe3gKbEuJMOmd29jvhvSQhnDAaqjs2Z324KORCdS6R4yKIowyy%2FtDtf8mWzZtUfCq%2FntOwBuUQgkemJTUyj4EMEH3KjEm0AWS89qUT9Ma1Vebt36B33g0vR5U7ntHsOjsKVRMvFxrfx8z6YVKn%2FlaxHxE8tuK4XD8JvlvOkTQWFw%2B5Z7rTtT7o7qa2O%2FHExxxLx%2B%2BSdcZ7Mjr1OAEID%2FRxDQ1BEiKX1i976uIv6lBNqPks7YpTfovOIR%2BbBxxPPI85FU0NSwYC2ZKaktWLx%2F5bVfNhTt3IDVtaQLE7GCci3UeLUwWfUuuOyxON%2F%2BIJmEkFFt12CNV1BZd3vaTzeQCRHzyT8FbTdr6qrHOdoYCO%2Fq3yXUKCaupMMq8vMAGOqUBSITbW%2BXexShatjCzD%2Frn7vzgnx02zWq2I9v%2BbqbvEndsJZ%2B9vzJR90WEtVCEt2WoGW5Ht8kIpz3g2TERHa0TTtMZsRvStCBPaK8WC8hvj%2B7Md1JwopkUX4S4P%2FAsE4%2Fp8PzDFZH1AUNR%2FbEc6zX84LPGhGwGrBnsJ89fvsy0SSuwSVPXf3%2FbloPKrpulbGE36Uu14O8yycJQuNpENkTsDK03SUoR&X-Amz-Signature=ffbc63850bf1b7a118e50e849f401e1b17b2dd5170ae267fd71e484d1e399d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOT3V34E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsUEZAI6I2rf6crusSRYJodRqjM8rP69k4p%2FUOfsYXdQIgX3uSQdTF%2Bcpfj6MFzz9DUcQkhZ2hL1gX95%2F3mUqLYVsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDO%2B3AGy4zRq8JFHDiCrcAzbe4BOTifMtY1c8qsXL9X%2BI5kDB7Bs0BGzN2k9aPpq5iRkhjXdCUKhdeCarK53pRQM%2Ft1%2BeQfp20dmVNafmjaTwxEIZOMq9FA7L2uthgDiCjDk8idEYOkSIkDh5XoY%2F7JPHk3YHEC9svFqLlU8mDHV3H8pALnHTOd0HnCciOzCR%2BQCabdREA4%2FKf29GI3ZFs8qSOAyA4oC6gi1FmDBLMMzNwLnJsW99PVJuARIpskyeyBuBdC%2B3oQLztj6BlcF7Sz4zP9rZe3gKbEuJMOmd29jvhvSQhnDAaqjs2Z324KORCdS6R4yKIowyy%2FtDtf8mWzZtUfCq%2FntOwBuUQgkemJTUyj4EMEH3KjEm0AWS89qUT9Ma1Vebt36B33g0vR5U7ntHsOjsKVRMvFxrfx8z6YVKn%2FlaxHxE8tuK4XD8JvlvOkTQWFw%2B5Z7rTtT7o7qa2O%2FHExxxLx%2B%2BSdcZ7Mjr1OAEID%2FRxDQ1BEiKX1i976uIv6lBNqPks7YpTfovOIR%2BbBxxPPI85FU0NSwYC2ZKaktWLx%2F5bVfNhTt3IDVtaQLE7GCci3UeLUwWfUuuOyxON%2F%2BIJmEkFFt12CNV1BZd3vaTzeQCRHzyT8FbTdr6qrHOdoYCO%2Fq3yXUKCaupMMq8vMAGOqUBSITbW%2BXexShatjCzD%2Frn7vzgnx02zWq2I9v%2BbqbvEndsJZ%2B9vzJR90WEtVCEt2WoGW5Ht8kIpz3g2TERHa0TTtMZsRvStCBPaK8WC8hvj%2B7Md1JwopkUX4S4P%2FAsE4%2Fp8PzDFZH1AUNR%2FbEc6zX84LPGhGwGrBnsJ89fvsy0SSuwSVPXf3%2FbloPKrpulbGE36Uu14O8yycJQuNpENkTsDK03SUoR&X-Amz-Signature=94eff7a73d944bbf89d2641c914602d80d55405781b9a98d3da9530f568f7d86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOT3V34E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsUEZAI6I2rf6crusSRYJodRqjM8rP69k4p%2FUOfsYXdQIgX3uSQdTF%2Bcpfj6MFzz9DUcQkhZ2hL1gX95%2F3mUqLYVsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDO%2B3AGy4zRq8JFHDiCrcAzbe4BOTifMtY1c8qsXL9X%2BI5kDB7Bs0BGzN2k9aPpq5iRkhjXdCUKhdeCarK53pRQM%2Ft1%2BeQfp20dmVNafmjaTwxEIZOMq9FA7L2uthgDiCjDk8idEYOkSIkDh5XoY%2F7JPHk3YHEC9svFqLlU8mDHV3H8pALnHTOd0HnCciOzCR%2BQCabdREA4%2FKf29GI3ZFs8qSOAyA4oC6gi1FmDBLMMzNwLnJsW99PVJuARIpskyeyBuBdC%2B3oQLztj6BlcF7Sz4zP9rZe3gKbEuJMOmd29jvhvSQhnDAaqjs2Z324KORCdS6R4yKIowyy%2FtDtf8mWzZtUfCq%2FntOwBuUQgkemJTUyj4EMEH3KjEm0AWS89qUT9Ma1Vebt36B33g0vR5U7ntHsOjsKVRMvFxrfx8z6YVKn%2FlaxHxE8tuK4XD8JvlvOkTQWFw%2B5Z7rTtT7o7qa2O%2FHExxxLx%2B%2BSdcZ7Mjr1OAEID%2FRxDQ1BEiKX1i976uIv6lBNqPks7YpTfovOIR%2BbBxxPPI85FU0NSwYC2ZKaktWLx%2F5bVfNhTt3IDVtaQLE7GCci3UeLUwWfUuuOyxON%2F%2BIJmEkFFt12CNV1BZd3vaTzeQCRHzyT8FbTdr6qrHOdoYCO%2Fq3yXUKCaupMMq8vMAGOqUBSITbW%2BXexShatjCzD%2Frn7vzgnx02zWq2I9v%2BbqbvEndsJZ%2B9vzJR90WEtVCEt2WoGW5Ht8kIpz3g2TERHa0TTtMZsRvStCBPaK8WC8hvj%2B7Md1JwopkUX4S4P%2FAsE4%2Fp8PzDFZH1AUNR%2FbEc6zX84LPGhGwGrBnsJ89fvsy0SSuwSVPXf3%2FbloPKrpulbGE36Uu14O8yycJQuNpENkTsDK03SUoR&X-Amz-Signature=a71b0ba8c0c2c6f3f4dffd2cd666fd619d4ad78987fd3545177c1b9da6302f00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
