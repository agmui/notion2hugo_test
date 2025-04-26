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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCGZGFU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdTOt649HXSQ%2BADRoskF6fzvHMPOQvWAJJ1a3L4BDtIAiAILW4bX%2BiEcIuPdVkN6aoKWaZZRTDBg12Dd36zeT8iJir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFKTQOk7ZlIJ7Y%2BAYKtwDuQz3oI5%2FuseOJKkf%2BkmkN8Le1B2tjmYjBvrUT4F52af9QrVEw%2F%2Bg2u5apIENiM4Ei%2B3QHp9XAJ5BndSzf0QPyWbttmMPtv5%2FgcKIRIMb6cWWKgNIIVBMPg82fzPwLACxf9o97AFcFIw4QXJlmjoQlAxoIrMRv7uwfOHX0tL5e5PoWTsmRfx3JCSa2gbxS%2Bc7%2FoTV%2FPSmlLwTZ63kfuzN9R7KnL7mCA9kGxQniqCMn1y9YSD8MeCEqKQEkF3SchsvljXJ3AgTWEJybvmgoAzSqVCqfhlAx9sLc9iW9gK2Cv4dWjYmEpwk61ih6SrV2IitP4LwYjJzgV1whutW82KkIUGJcwUWfBWIoy6H9YczgRouMLA7K8A686YgphgV7aXEZfhb4axJgYEFR2m5AmylKbRFOZvToD%2FPBmdPeeeotaHN0%2F98U6K4h1IVn1EVVWu7aKoU5JvQBJ25ta6iYjy4Ki5Jw47jMFbHLek0%2FlvwV8ZrANiK6vI7doNeQ%2FJovBFhwqLao0hvcQBm24WlFqC7L3JI8KQCP96tcztVC65ftK4qjZThgLOGvLHb04ZfMZZfFAKRKMt2Eq9O%2Bsp8sBBYslpCTy%2FIzB3glozxW00KCT%2B1E31PqkhCGHWf6psw9eazwAY6pgGFetzMtPktoWPBpEl4bOwi2T7aNXSrRp1NbhB35xSkVWhT4q188PpsU7OXaNXPKeHvs8BsN3W4LMm7hbn%2B7AA86eniaa7TPJDqcG9CYzfqztp2qVtHF5bl3o%2BiFcCfmKgueuthm5Ottu3yXoApKhfxmkJAVw3y8j6RPGz%2FTIh1R8e%2Bk%2FDrXc8ks3HE02T%2F7pxZRfiXD3RbRt6gKT1ynhjcGDkHK4ih&X-Amz-Signature=12010e6b3066e588bd2b568e0ee62ad18ec107ede5c1caffcf524c4ac1310c93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCGZGFU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdTOt649HXSQ%2BADRoskF6fzvHMPOQvWAJJ1a3L4BDtIAiAILW4bX%2BiEcIuPdVkN6aoKWaZZRTDBg12Dd36zeT8iJir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFKTQOk7ZlIJ7Y%2BAYKtwDuQz3oI5%2FuseOJKkf%2BkmkN8Le1B2tjmYjBvrUT4F52af9QrVEw%2F%2Bg2u5apIENiM4Ei%2B3QHp9XAJ5BndSzf0QPyWbttmMPtv5%2FgcKIRIMb6cWWKgNIIVBMPg82fzPwLACxf9o97AFcFIw4QXJlmjoQlAxoIrMRv7uwfOHX0tL5e5PoWTsmRfx3JCSa2gbxS%2Bc7%2FoTV%2FPSmlLwTZ63kfuzN9R7KnL7mCA9kGxQniqCMn1y9YSD8MeCEqKQEkF3SchsvljXJ3AgTWEJybvmgoAzSqVCqfhlAx9sLc9iW9gK2Cv4dWjYmEpwk61ih6SrV2IitP4LwYjJzgV1whutW82KkIUGJcwUWfBWIoy6H9YczgRouMLA7K8A686YgphgV7aXEZfhb4axJgYEFR2m5AmylKbRFOZvToD%2FPBmdPeeeotaHN0%2F98U6K4h1IVn1EVVWu7aKoU5JvQBJ25ta6iYjy4Ki5Jw47jMFbHLek0%2FlvwV8ZrANiK6vI7doNeQ%2FJovBFhwqLao0hvcQBm24WlFqC7L3JI8KQCP96tcztVC65ftK4qjZThgLOGvLHb04ZfMZZfFAKRKMt2Eq9O%2Bsp8sBBYslpCTy%2FIzB3glozxW00KCT%2B1E31PqkhCGHWf6psw9eazwAY6pgGFetzMtPktoWPBpEl4bOwi2T7aNXSrRp1NbhB35xSkVWhT4q188PpsU7OXaNXPKeHvs8BsN3W4LMm7hbn%2B7AA86eniaa7TPJDqcG9CYzfqztp2qVtHF5bl3o%2BiFcCfmKgueuthm5Ottu3yXoApKhfxmkJAVw3y8j6RPGz%2FTIh1R8e%2Bk%2FDrXc8ks3HE02T%2F7pxZRfiXD3RbRt6gKT1ynhjcGDkHK4ih&X-Amz-Signature=168149fc5d80fa36f13fe3e2aaba342fad40489cd563fb06401532fc5c32e8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCGZGFU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdTOt649HXSQ%2BADRoskF6fzvHMPOQvWAJJ1a3L4BDtIAiAILW4bX%2BiEcIuPdVkN6aoKWaZZRTDBg12Dd36zeT8iJir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFKTQOk7ZlIJ7Y%2BAYKtwDuQz3oI5%2FuseOJKkf%2BkmkN8Le1B2tjmYjBvrUT4F52af9QrVEw%2F%2Bg2u5apIENiM4Ei%2B3QHp9XAJ5BndSzf0QPyWbttmMPtv5%2FgcKIRIMb6cWWKgNIIVBMPg82fzPwLACxf9o97AFcFIw4QXJlmjoQlAxoIrMRv7uwfOHX0tL5e5PoWTsmRfx3JCSa2gbxS%2Bc7%2FoTV%2FPSmlLwTZ63kfuzN9R7KnL7mCA9kGxQniqCMn1y9YSD8MeCEqKQEkF3SchsvljXJ3AgTWEJybvmgoAzSqVCqfhlAx9sLc9iW9gK2Cv4dWjYmEpwk61ih6SrV2IitP4LwYjJzgV1whutW82KkIUGJcwUWfBWIoy6H9YczgRouMLA7K8A686YgphgV7aXEZfhb4axJgYEFR2m5AmylKbRFOZvToD%2FPBmdPeeeotaHN0%2F98U6K4h1IVn1EVVWu7aKoU5JvQBJ25ta6iYjy4Ki5Jw47jMFbHLek0%2FlvwV8ZrANiK6vI7doNeQ%2FJovBFhwqLao0hvcQBm24WlFqC7L3JI8KQCP96tcztVC65ftK4qjZThgLOGvLHb04ZfMZZfFAKRKMt2Eq9O%2Bsp8sBBYslpCTy%2FIzB3glozxW00KCT%2B1E31PqkhCGHWf6psw9eazwAY6pgGFetzMtPktoWPBpEl4bOwi2T7aNXSrRp1NbhB35xSkVWhT4q188PpsU7OXaNXPKeHvs8BsN3W4LMm7hbn%2B7AA86eniaa7TPJDqcG9CYzfqztp2qVtHF5bl3o%2BiFcCfmKgueuthm5Ottu3yXoApKhfxmkJAVw3y8j6RPGz%2FTIh1R8e%2Bk%2FDrXc8ks3HE02T%2F7pxZRfiXD3RbRt6gKT1ynhjcGDkHK4ih&X-Amz-Signature=d247a8968a9cf7744044be7ebb483c0d0495844e620ecfef092f530b508c343d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
