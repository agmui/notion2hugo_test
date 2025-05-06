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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGNK2JC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA66ryQ2kKZ9oF5cIht8V4wqNG1tg9xLTXnbF9RK5m3hAiAdJvfQuwQJ%2Fq7zvVVtulfol0VvMpLjIWKMLz0p0PHPjCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMu5dlnr0oH7QymqPEKtwDJn%2BsWba%2FGn7DR7m4dsmlGolnoEy1YKUe55hfbJHMW8ciamSTScrqXisHSP%2FDrSVgiOe%2FTGPnvKCC7jpw%2B%2FML5iPPW2dYyp5mRWJDyMJ8M2Moc9Fsk1e3uHtcPNM8jClj1Wp9lJlgRJQKiLWy2d9hZglhLmPvqUpPpJkiSqUPAXm4vvHeUw2eEZCysggFsLWxVxaxeSpyp%2FCA%2BFL6HAl35wtVFKaD%2FURVW6wSzP5jNAf74Bfi077W4goistE4K4kG6GHiDCco5Zo45txI5965CSPvsFxJqf9K5Xg16cGHf3GhGkTtzpkkaYbSMX9%2Bn4Gt%2BptBesHbUw4deyAvJ%2Fhnv94idj0Fz5kQYSNFIsTxCZquDxuwr0417hjhZE0WuY1Qd7%2BT2exdcZ9Njfe0mXVaeX8pkiqKUdhy2Z074Gh6G%2FDAXsypDMj7Gg4iIN%2BrxoAD0HRaTcANT6MZaKQ1W%2F%2BDcbGs1DjPEnIH7A9HKwr%2BDcJ5Z3yEvRnSxhDXi%2Bun1zu73xDIO5XquNxRso0Q6m3BHVtXwjSdr%2F24%2BPpjUsip5UwY%2FbVMldBDSDqkcJr4Mww3VqQUZaVB3Kqy509ztBwnS1TUjhiSh9m0EsSNmJeukY3L%2F5OMVbSrAqgkVMkwgbTpwAY6pgHmOHAbK91IY1Wphk8gXPVnBSyi%2FeSUEQxyhoYltSSkyhILYQcPRp0X%2Bt7UObzw4DARAyftD%2BM52tc2bCb9%2FXJneVVSTpdW%2FicNLK5WrBmlZ1xotJS87PzmYleQgrJLaAcbP2dwncVeUKRKYGyGGE5SaRae2EkazUwResGKWUQa5bHqYqIK49WzmBkxqJSpZ4hU81im6xjIJKvWN3IkDS7Q8x%2BeO%2F84&X-Amz-Signature=773aa24850ec524598b5d1f16e139a774c504bb8c33153be76a72151a8f82dae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGNK2JC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA66ryQ2kKZ9oF5cIht8V4wqNG1tg9xLTXnbF9RK5m3hAiAdJvfQuwQJ%2Fq7zvVVtulfol0VvMpLjIWKMLz0p0PHPjCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMu5dlnr0oH7QymqPEKtwDJn%2BsWba%2FGn7DR7m4dsmlGolnoEy1YKUe55hfbJHMW8ciamSTScrqXisHSP%2FDrSVgiOe%2FTGPnvKCC7jpw%2B%2FML5iPPW2dYyp5mRWJDyMJ8M2Moc9Fsk1e3uHtcPNM8jClj1Wp9lJlgRJQKiLWy2d9hZglhLmPvqUpPpJkiSqUPAXm4vvHeUw2eEZCysggFsLWxVxaxeSpyp%2FCA%2BFL6HAl35wtVFKaD%2FURVW6wSzP5jNAf74Bfi077W4goistE4K4kG6GHiDCco5Zo45txI5965CSPvsFxJqf9K5Xg16cGHf3GhGkTtzpkkaYbSMX9%2Bn4Gt%2BptBesHbUw4deyAvJ%2Fhnv94idj0Fz5kQYSNFIsTxCZquDxuwr0417hjhZE0WuY1Qd7%2BT2exdcZ9Njfe0mXVaeX8pkiqKUdhy2Z074Gh6G%2FDAXsypDMj7Gg4iIN%2BrxoAD0HRaTcANT6MZaKQ1W%2F%2BDcbGs1DjPEnIH7A9HKwr%2BDcJ5Z3yEvRnSxhDXi%2Bun1zu73xDIO5XquNxRso0Q6m3BHVtXwjSdr%2F24%2BPpjUsip5UwY%2FbVMldBDSDqkcJr4Mww3VqQUZaVB3Kqy509ztBwnS1TUjhiSh9m0EsSNmJeukY3L%2F5OMVbSrAqgkVMkwgbTpwAY6pgHmOHAbK91IY1Wphk8gXPVnBSyi%2FeSUEQxyhoYltSSkyhILYQcPRp0X%2Bt7UObzw4DARAyftD%2BM52tc2bCb9%2FXJneVVSTpdW%2FicNLK5WrBmlZ1xotJS87PzmYleQgrJLaAcbP2dwncVeUKRKYGyGGE5SaRae2EkazUwResGKWUQa5bHqYqIK49WzmBkxqJSpZ4hU81im6xjIJKvWN3IkDS7Q8x%2BeO%2F84&X-Amz-Signature=61ffdf7259977710fd0d1f7ad8d98edc2d4118bff55b315315e35a8c24bde32c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGNK2JC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA66ryQ2kKZ9oF5cIht8V4wqNG1tg9xLTXnbF9RK5m3hAiAdJvfQuwQJ%2Fq7zvVVtulfol0VvMpLjIWKMLz0p0PHPjCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMu5dlnr0oH7QymqPEKtwDJn%2BsWba%2FGn7DR7m4dsmlGolnoEy1YKUe55hfbJHMW8ciamSTScrqXisHSP%2FDrSVgiOe%2FTGPnvKCC7jpw%2B%2FML5iPPW2dYyp5mRWJDyMJ8M2Moc9Fsk1e3uHtcPNM8jClj1Wp9lJlgRJQKiLWy2d9hZglhLmPvqUpPpJkiSqUPAXm4vvHeUw2eEZCysggFsLWxVxaxeSpyp%2FCA%2BFL6HAl35wtVFKaD%2FURVW6wSzP5jNAf74Bfi077W4goistE4K4kG6GHiDCco5Zo45txI5965CSPvsFxJqf9K5Xg16cGHf3GhGkTtzpkkaYbSMX9%2Bn4Gt%2BptBesHbUw4deyAvJ%2Fhnv94idj0Fz5kQYSNFIsTxCZquDxuwr0417hjhZE0WuY1Qd7%2BT2exdcZ9Njfe0mXVaeX8pkiqKUdhy2Z074Gh6G%2FDAXsypDMj7Gg4iIN%2BrxoAD0HRaTcANT6MZaKQ1W%2F%2BDcbGs1DjPEnIH7A9HKwr%2BDcJ5Z3yEvRnSxhDXi%2Bun1zu73xDIO5XquNxRso0Q6m3BHVtXwjSdr%2F24%2BPpjUsip5UwY%2FbVMldBDSDqkcJr4Mww3VqQUZaVB3Kqy509ztBwnS1TUjhiSh9m0EsSNmJeukY3L%2F5OMVbSrAqgkVMkwgbTpwAY6pgHmOHAbK91IY1Wphk8gXPVnBSyi%2FeSUEQxyhoYltSSkyhILYQcPRp0X%2Bt7UObzw4DARAyftD%2BM52tc2bCb9%2FXJneVVSTpdW%2FicNLK5WrBmlZ1xotJS87PzmYleQgrJLaAcbP2dwncVeUKRKYGyGGE5SaRae2EkazUwResGKWUQa5bHqYqIK49WzmBkxqJSpZ4hU81im6xjIJKvWN3IkDS7Q8x%2BeO%2F84&X-Amz-Signature=eb33ccbd4ddf4a2c0cd7a11f4ebe49ba71be7c92cbec3ce1f8204b8ad49d8e38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
