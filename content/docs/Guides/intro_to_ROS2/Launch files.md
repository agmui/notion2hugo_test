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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD24KECQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBdpFbZeqNoFAzZDtTBZfE%2B0vvp8EBcKGb4LNM6%2Fgrw2AiBgDgWdfojGkHWrmRPmmr0Tt9lsYUHkg1LlM5FchEf5Ayr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMwiBaVLxqEsmuNowTKtwDkg1Q28tNyhl7zW0czPPx%2Fj1SetGhHTKaNQHfaLmhlzm1Ztxmd%2FGO3%2BrGoAO%2FEoK5XCwm0KdkCTQlxKe2WpN%2FBIUZDJ3xkPoqsp4Xb6HnLMnePIjLp9voovzH3xLJ1g%2BvbAEsKjU4klZQsop%2FtvNqVASTak4PyMdPsV7nepvVeqEuroff8ZPERzec5CFDLVZ9TKxMX1boiSC67GitnaP49LXzySLRtycdnXG2SQJlVYeaEvPtpWb9L0pxKKuXku9orpxDb9s%2Fkj3UlSc%2FsQSCsnfOXHc5cmOt8wqrvZuWs4CKwB5FyQ07QTV5rPn4Ml163k%2FXghX5lNtvy9BUkJiL5mXTPL8NG0H%2FO7PtGoNb95DfrpVx4PYGkfAfkKpFiK7cO%2FCGGLPsWTHFv2pFALTjeuTj9wrag6Uyq6%2FM4Pcqzyj1yUBXFAxxLvzSB01YKLiVjpFQ1uGoM6NwIx4cJrfoRWDW4roZrP%2Fxd5cZY37wINflTAIcoGkwTdDBj%2FBkLGaimbCCAS14wQhSJdr1MA8HZmSJINgi3Fb3VC61Guxxbaw2TJ1ff6K1FTgbNz1zsb2xfWadN%2BwiP%2FBuklvF7Tt3VBLuhlKWNnxjRAJ4wzTbGA0wxfqOSQIOi4iycBIw9MG1wgY6pgH%2BlM71EfVRHg%2Bstg5b4t4PDj%2B8nM3gWvmBocpS%2BaVrV1AaCdbDW0iSmyRATnda05H6n5ZTUCos7fa1f%2Fgd65g5x97k5u6Bl0R0sPohWQIy44o17k6bBPkZEnU3nMma9ctYauDWT7%2Buo%2FjDI8B0%2Far79JbcUKH3gwkqdMRZlfZRwJEZ9ur12fc%2BaCK%2BM%2FSdsKatY0sxKd0sEWFijrc%2F%2FbaRQ6UWj%2B5l&X-Amz-Signature=99b4e9b780928828578989ef1d03b38ec9f5cb7310ffe883e53b2156f1384e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD24KECQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBdpFbZeqNoFAzZDtTBZfE%2B0vvp8EBcKGb4LNM6%2Fgrw2AiBgDgWdfojGkHWrmRPmmr0Tt9lsYUHkg1LlM5FchEf5Ayr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMwiBaVLxqEsmuNowTKtwDkg1Q28tNyhl7zW0czPPx%2Fj1SetGhHTKaNQHfaLmhlzm1Ztxmd%2FGO3%2BrGoAO%2FEoK5XCwm0KdkCTQlxKe2WpN%2FBIUZDJ3xkPoqsp4Xb6HnLMnePIjLp9voovzH3xLJ1g%2BvbAEsKjU4klZQsop%2FtvNqVASTak4PyMdPsV7nepvVeqEuroff8ZPERzec5CFDLVZ9TKxMX1boiSC67GitnaP49LXzySLRtycdnXG2SQJlVYeaEvPtpWb9L0pxKKuXku9orpxDb9s%2Fkj3UlSc%2FsQSCsnfOXHc5cmOt8wqrvZuWs4CKwB5FyQ07QTV5rPn4Ml163k%2FXghX5lNtvy9BUkJiL5mXTPL8NG0H%2FO7PtGoNb95DfrpVx4PYGkfAfkKpFiK7cO%2FCGGLPsWTHFv2pFALTjeuTj9wrag6Uyq6%2FM4Pcqzyj1yUBXFAxxLvzSB01YKLiVjpFQ1uGoM6NwIx4cJrfoRWDW4roZrP%2Fxd5cZY37wINflTAIcoGkwTdDBj%2FBkLGaimbCCAS14wQhSJdr1MA8HZmSJINgi3Fb3VC61Guxxbaw2TJ1ff6K1FTgbNz1zsb2xfWadN%2BwiP%2FBuklvF7Tt3VBLuhlKWNnxjRAJ4wzTbGA0wxfqOSQIOi4iycBIw9MG1wgY6pgH%2BlM71EfVRHg%2Bstg5b4t4PDj%2B8nM3gWvmBocpS%2BaVrV1AaCdbDW0iSmyRATnda05H6n5ZTUCos7fa1f%2Fgd65g5x97k5u6Bl0R0sPohWQIy44o17k6bBPkZEnU3nMma9ctYauDWT7%2Buo%2FjDI8B0%2Far79JbcUKH3gwkqdMRZlfZRwJEZ9ur12fc%2BaCK%2BM%2FSdsKatY0sxKd0sEWFijrc%2F%2FbaRQ6UWj%2B5l&X-Amz-Signature=7e31e0dc93889979ec48f4507f96c839a3737d2b71210133754e66e65cb17781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD24KECQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBdpFbZeqNoFAzZDtTBZfE%2B0vvp8EBcKGb4LNM6%2Fgrw2AiBgDgWdfojGkHWrmRPmmr0Tt9lsYUHkg1LlM5FchEf5Ayr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMwiBaVLxqEsmuNowTKtwDkg1Q28tNyhl7zW0czPPx%2Fj1SetGhHTKaNQHfaLmhlzm1Ztxmd%2FGO3%2BrGoAO%2FEoK5XCwm0KdkCTQlxKe2WpN%2FBIUZDJ3xkPoqsp4Xb6HnLMnePIjLp9voovzH3xLJ1g%2BvbAEsKjU4klZQsop%2FtvNqVASTak4PyMdPsV7nepvVeqEuroff8ZPERzec5CFDLVZ9TKxMX1boiSC67GitnaP49LXzySLRtycdnXG2SQJlVYeaEvPtpWb9L0pxKKuXku9orpxDb9s%2Fkj3UlSc%2FsQSCsnfOXHc5cmOt8wqrvZuWs4CKwB5FyQ07QTV5rPn4Ml163k%2FXghX5lNtvy9BUkJiL5mXTPL8NG0H%2FO7PtGoNb95DfrpVx4PYGkfAfkKpFiK7cO%2FCGGLPsWTHFv2pFALTjeuTj9wrag6Uyq6%2FM4Pcqzyj1yUBXFAxxLvzSB01YKLiVjpFQ1uGoM6NwIx4cJrfoRWDW4roZrP%2Fxd5cZY37wINflTAIcoGkwTdDBj%2FBkLGaimbCCAS14wQhSJdr1MA8HZmSJINgi3Fb3VC61Guxxbaw2TJ1ff6K1FTgbNz1zsb2xfWadN%2BwiP%2FBuklvF7Tt3VBLuhlKWNnxjRAJ4wzTbGA0wxfqOSQIOi4iycBIw9MG1wgY6pgH%2BlM71EfVRHg%2Bstg5b4t4PDj%2B8nM3gWvmBocpS%2BaVrV1AaCdbDW0iSmyRATnda05H6n5ZTUCos7fa1f%2Fgd65g5x97k5u6Bl0R0sPohWQIy44o17k6bBPkZEnU3nMma9ctYauDWT7%2Buo%2FjDI8B0%2Far79JbcUKH3gwkqdMRZlfZRwJEZ9ur12fc%2BaCK%2BM%2FSdsKatY0sxKd0sEWFijrc%2F%2FbaRQ6UWj%2B5l&X-Amz-Signature=ba5e27e0057f89aa1d79496a8c5836aef395af23207eebbf18335ab07ad78095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
