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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTBF5Q%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWvNvGejmgVvtEWunj4LfCSAU5M%2BRPx2xlrR8work8QIgOAL5z3n1uEAxnV2bK5RyuwWv%2FRWXpFyCYWhWxWd3gVcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjcYPNLwW2x1qaTqSrcA6RZJqnAX%2FAtxMqLyg9Z%2BrT1DnYLkm%2Fxaihj2LCLgrG3%2BsG2vPVWw4fKsaodT6QzkE44TH7vnrqYr1CPv22EgFz%2F6DiocTA6YtxQJZIFiSbuQXdOz84lOGc9fS5DF9%2B6rXcm33kvbubChV5clrvaHgnhP14NSMjnWwqWKaKWyxrH83KuQNbV9S6q5dWZt90lis%2FS1YsuECbiF%2FnaVMyLBryXiS9P7UFYalHjbG44avjfYXIAfisANxic3MOBWX8nzAjJo0kOXvB52%2Bfw%2Bs0L17hg56RqA8%2FVgBfq4nBmn31U0eX99sD%2BbLirv%2BrVoZPJmKyhFJymdqyhRrTKZ3MTGia5%2F%2F%2BXfi93%2FL9s%2FAI6bBP%2FNRVnSEsYi5AICyLSm0tE44tMTsysy5%2BxjhW4hzUNvZg7cWTe1v0L9kmoHQ7VZ94y77yTu951gn6EgMvufqIA8zQl1X28%2FhuC1C%2FP91NPRzAPQSMVnkyEHE9yVfr0hoo57Z%2FU54951s9%2FqX49rH2epf75KconoANitKsf309OIEwFpFsuLegFDXBXJnwAeRUNe0nU2UOorF%2By1noKS6SLKdHu4zFgqYL9yPA3YbVKXGZh84cnDPp75xOxKLtUMXxXWu1h8%2FHANaHjT4WiMOWOtr0GOqUBKAHbGlH4Q1Cabif1Xi3T%2BWpQjYiyrGQSgZpirHjH57iK%2F7TKnar3HYrYRd1owg1eA4tW8zOgTywq2Q0Mh4n32vJVQScwlqO4qI%2B0MBRgUq4%2FeLJ%2Frz30GMJbz52dXt%2FE3bs9gA73XnDCiw3ZX%2BiEUXhI2dwSXbgCsZVqg19yr5vuzZM0Xkl0kqbAkudahve2LlU20jvAcv8%2FXCsRgVpgbvVzAbBj&X-Amz-Signature=e32ff41d70e4a9ebb4c71c8384571e882646be8e4d049e69d8cbba4f0d208574&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTBF5Q%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWvNvGejmgVvtEWunj4LfCSAU5M%2BRPx2xlrR8work8QIgOAL5z3n1uEAxnV2bK5RyuwWv%2FRWXpFyCYWhWxWd3gVcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjcYPNLwW2x1qaTqSrcA6RZJqnAX%2FAtxMqLyg9Z%2BrT1DnYLkm%2Fxaihj2LCLgrG3%2BsG2vPVWw4fKsaodT6QzkE44TH7vnrqYr1CPv22EgFz%2F6DiocTA6YtxQJZIFiSbuQXdOz84lOGc9fS5DF9%2B6rXcm33kvbubChV5clrvaHgnhP14NSMjnWwqWKaKWyxrH83KuQNbV9S6q5dWZt90lis%2FS1YsuECbiF%2FnaVMyLBryXiS9P7UFYalHjbG44avjfYXIAfisANxic3MOBWX8nzAjJo0kOXvB52%2Bfw%2Bs0L17hg56RqA8%2FVgBfq4nBmn31U0eX99sD%2BbLirv%2BrVoZPJmKyhFJymdqyhRrTKZ3MTGia5%2F%2F%2BXfi93%2FL9s%2FAI6bBP%2FNRVnSEsYi5AICyLSm0tE44tMTsysy5%2BxjhW4hzUNvZg7cWTe1v0L9kmoHQ7VZ94y77yTu951gn6EgMvufqIA8zQl1X28%2FhuC1C%2FP91NPRzAPQSMVnkyEHE9yVfr0hoo57Z%2FU54951s9%2FqX49rH2epf75KconoANitKsf309OIEwFpFsuLegFDXBXJnwAeRUNe0nU2UOorF%2By1noKS6SLKdHu4zFgqYL9yPA3YbVKXGZh84cnDPp75xOxKLtUMXxXWu1h8%2FHANaHjT4WiMOWOtr0GOqUBKAHbGlH4Q1Cabif1Xi3T%2BWpQjYiyrGQSgZpirHjH57iK%2F7TKnar3HYrYRd1owg1eA4tW8zOgTywq2Q0Mh4n32vJVQScwlqO4qI%2B0MBRgUq4%2FeLJ%2Frz30GMJbz52dXt%2FE3bs9gA73XnDCiw3ZX%2BiEUXhI2dwSXbgCsZVqg19yr5vuzZM0Xkl0kqbAkudahve2LlU20jvAcv8%2FXCsRgVpgbvVzAbBj&X-Amz-Signature=ff882a62b4b2d39a66cafc112dfd3c9a8db5bf235224bb75b44abd0a77734ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTBF5Q%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWvNvGejmgVvtEWunj4LfCSAU5M%2BRPx2xlrR8work8QIgOAL5z3n1uEAxnV2bK5RyuwWv%2FRWXpFyCYWhWxWd3gVcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjcYPNLwW2x1qaTqSrcA6RZJqnAX%2FAtxMqLyg9Z%2BrT1DnYLkm%2Fxaihj2LCLgrG3%2BsG2vPVWw4fKsaodT6QzkE44TH7vnrqYr1CPv22EgFz%2F6DiocTA6YtxQJZIFiSbuQXdOz84lOGc9fS5DF9%2B6rXcm33kvbubChV5clrvaHgnhP14NSMjnWwqWKaKWyxrH83KuQNbV9S6q5dWZt90lis%2FS1YsuECbiF%2FnaVMyLBryXiS9P7UFYalHjbG44avjfYXIAfisANxic3MOBWX8nzAjJo0kOXvB52%2Bfw%2Bs0L17hg56RqA8%2FVgBfq4nBmn31U0eX99sD%2BbLirv%2BrVoZPJmKyhFJymdqyhRrTKZ3MTGia5%2F%2F%2BXfi93%2FL9s%2FAI6bBP%2FNRVnSEsYi5AICyLSm0tE44tMTsysy5%2BxjhW4hzUNvZg7cWTe1v0L9kmoHQ7VZ94y77yTu951gn6EgMvufqIA8zQl1X28%2FhuC1C%2FP91NPRzAPQSMVnkyEHE9yVfr0hoo57Z%2FU54951s9%2FqX49rH2epf75KconoANitKsf309OIEwFpFsuLegFDXBXJnwAeRUNe0nU2UOorF%2By1noKS6SLKdHu4zFgqYL9yPA3YbVKXGZh84cnDPp75xOxKLtUMXxXWu1h8%2FHANaHjT4WiMOWOtr0GOqUBKAHbGlH4Q1Cabif1Xi3T%2BWpQjYiyrGQSgZpirHjH57iK%2F7TKnar3HYrYRd1owg1eA4tW8zOgTywq2Q0Mh4n32vJVQScwlqO4qI%2B0MBRgUq4%2FeLJ%2Frz30GMJbz52dXt%2FE3bs9gA73XnDCiw3ZX%2BiEUXhI2dwSXbgCsZVqg19yr5vuzZM0Xkl0kqbAkudahve2LlU20jvAcv8%2FXCsRgVpgbvVzAbBj&X-Amz-Signature=56cda01a8c0275f98e4f917aaf26ef1d607e1b3375cd8041376ab49342499b84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
