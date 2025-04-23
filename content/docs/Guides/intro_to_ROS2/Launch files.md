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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJ7VPPX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDpQr2X10VSDR16q6VEAxWE5FBKToBWT0n82CIOfrXiYAiAoAfxl2USYcNxKbVaunBXtW9vjaLIdE3VYEcTRVfpxdyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY47FoNPEJy8uE8iXKtwDMNsGPsIfL0U8WzXE6idfp44X18yf8xFnwUKkeCXflmyeccvqDkudXOnOFJvJAXxi3R4FUMgAwtRacBH0AsfkkweMy2Jm%2Bv5EmUe%2BZQmUibcch3%2FDmwKyowD2rxHpVsnWegqoVBTOkZ3xTsG%2FGU1Emg2HUSaAiW4xLN%2FvbWIBhLRBnx3ID%2F0G7eGa5NYLC9dcJl3S5baHlFFLKlTwYAH0BHV1EYpOnWhTFOlXdQvBgYSUwjELM7s7MMn2Wc4aYK2DbCheRqwwKIxVn53qGxyDRhcmjdohphRuocjPSWJvM3BE5h8s8bcV4Xr%2FdIKSOCKd8euvrIHAw5mFrspHgMaWUTMelu23rFg%2FTzlCfKpFU2bSA8ZvXTAllT637Tgu%2FVw0yUBNDipRmAaQaFeiWbqeqBA1FHjdl8%2Bfi7DFZ6mns09PGd1H%2FOvaQLKbDMqy3XNfKwLKv%2Ffch52EibDcmsR3VSaFhOfHm6utocIUXTqowRIXhJ2MrkcOukqy92GkUs79Lh%2BFuDn%2BtUZ%2FVyLvMmb6FALqbyW6%2FBbKlbjNyTc6wx3lmo%2FT891EVEox%2FAMJKZXURbHxj%2BFMnwMW4rgOEMuUc%2Bvv4ujsHe04owxzo9kBG0D4%2FTSQDb4GDZeMy%2BQwtp%2BjwAY6pgGElvUOAB3YgdAwJXMOTGyHAPermoNDnKtu7UF8qSxyuwYbgsCuhnP2bQLKBGn50KsHvPO52LgxJgDD1Yrxz2ouAvbi0K0n3nMPC7Ji06yoSNjAp%2Bn4wk%2BStzoCTB6fOJV%2Fq8yH%2BTnAfGDx0Tfb1YDimq6e4cXj6%2FC5%2BAd3ZFwFnP758CLS8RPN58zqqWmTSrkW8fdXUFez68H9bpoo1Kxrn1%2B3l7P%2F&X-Amz-Signature=fa2222ab8cffd93e158c9bdc3259d8bbf8fe198689ef4575e15afb8ccd811649&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJ7VPPX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDpQr2X10VSDR16q6VEAxWE5FBKToBWT0n82CIOfrXiYAiAoAfxl2USYcNxKbVaunBXtW9vjaLIdE3VYEcTRVfpxdyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY47FoNPEJy8uE8iXKtwDMNsGPsIfL0U8WzXE6idfp44X18yf8xFnwUKkeCXflmyeccvqDkudXOnOFJvJAXxi3R4FUMgAwtRacBH0AsfkkweMy2Jm%2Bv5EmUe%2BZQmUibcch3%2FDmwKyowD2rxHpVsnWegqoVBTOkZ3xTsG%2FGU1Emg2HUSaAiW4xLN%2FvbWIBhLRBnx3ID%2F0G7eGa5NYLC9dcJl3S5baHlFFLKlTwYAH0BHV1EYpOnWhTFOlXdQvBgYSUwjELM7s7MMn2Wc4aYK2DbCheRqwwKIxVn53qGxyDRhcmjdohphRuocjPSWJvM3BE5h8s8bcV4Xr%2FdIKSOCKd8euvrIHAw5mFrspHgMaWUTMelu23rFg%2FTzlCfKpFU2bSA8ZvXTAllT637Tgu%2FVw0yUBNDipRmAaQaFeiWbqeqBA1FHjdl8%2Bfi7DFZ6mns09PGd1H%2FOvaQLKbDMqy3XNfKwLKv%2Ffch52EibDcmsR3VSaFhOfHm6utocIUXTqowRIXhJ2MrkcOukqy92GkUs79Lh%2BFuDn%2BtUZ%2FVyLvMmb6FALqbyW6%2FBbKlbjNyTc6wx3lmo%2FT891EVEox%2FAMJKZXURbHxj%2BFMnwMW4rgOEMuUc%2Bvv4ujsHe04owxzo9kBG0D4%2FTSQDb4GDZeMy%2BQwtp%2BjwAY6pgGElvUOAB3YgdAwJXMOTGyHAPermoNDnKtu7UF8qSxyuwYbgsCuhnP2bQLKBGn50KsHvPO52LgxJgDD1Yrxz2ouAvbi0K0n3nMPC7Ji06yoSNjAp%2Bn4wk%2BStzoCTB6fOJV%2Fq8yH%2BTnAfGDx0Tfb1YDimq6e4cXj6%2FC5%2BAd3ZFwFnP758CLS8RPN58zqqWmTSrkW8fdXUFez68H9bpoo1Kxrn1%2B3l7P%2F&X-Amz-Signature=842d797a0f643548eba5565c5bfb881e448c4ceed07c29bb3228a7cdc97b8704&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJ7VPPX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDpQr2X10VSDR16q6VEAxWE5FBKToBWT0n82CIOfrXiYAiAoAfxl2USYcNxKbVaunBXtW9vjaLIdE3VYEcTRVfpxdyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY47FoNPEJy8uE8iXKtwDMNsGPsIfL0U8WzXE6idfp44X18yf8xFnwUKkeCXflmyeccvqDkudXOnOFJvJAXxi3R4FUMgAwtRacBH0AsfkkweMy2Jm%2Bv5EmUe%2BZQmUibcch3%2FDmwKyowD2rxHpVsnWegqoVBTOkZ3xTsG%2FGU1Emg2HUSaAiW4xLN%2FvbWIBhLRBnx3ID%2F0G7eGa5NYLC9dcJl3S5baHlFFLKlTwYAH0BHV1EYpOnWhTFOlXdQvBgYSUwjELM7s7MMn2Wc4aYK2DbCheRqwwKIxVn53qGxyDRhcmjdohphRuocjPSWJvM3BE5h8s8bcV4Xr%2FdIKSOCKd8euvrIHAw5mFrspHgMaWUTMelu23rFg%2FTzlCfKpFU2bSA8ZvXTAllT637Tgu%2FVw0yUBNDipRmAaQaFeiWbqeqBA1FHjdl8%2Bfi7DFZ6mns09PGd1H%2FOvaQLKbDMqy3XNfKwLKv%2Ffch52EibDcmsR3VSaFhOfHm6utocIUXTqowRIXhJ2MrkcOukqy92GkUs79Lh%2BFuDn%2BtUZ%2FVyLvMmb6FALqbyW6%2FBbKlbjNyTc6wx3lmo%2FT891EVEox%2FAMJKZXURbHxj%2BFMnwMW4rgOEMuUc%2Bvv4ujsHe04owxzo9kBG0D4%2FTSQDb4GDZeMy%2BQwtp%2BjwAY6pgGElvUOAB3YgdAwJXMOTGyHAPermoNDnKtu7UF8qSxyuwYbgsCuhnP2bQLKBGn50KsHvPO52LgxJgDD1Yrxz2ouAvbi0K0n3nMPC7Ji06yoSNjAp%2Bn4wk%2BStzoCTB6fOJV%2Fq8yH%2BTnAfGDx0Tfb1YDimq6e4cXj6%2FC5%2BAd3ZFwFnP758CLS8RPN58zqqWmTSrkW8fdXUFez68H9bpoo1Kxrn1%2B3l7P%2F&X-Amz-Signature=a1f3b113a9b95f26b988f7308cc1f297164dff35ab5171d002bdf0ae7ff34230&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
