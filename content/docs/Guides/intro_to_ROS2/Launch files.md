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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPOXQ6P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIE%2BirK772xlzbntnwsgKB0g2fG8xB6%2FKC7w1A4%2FQSGlgAiAs75xNuDorkohP5tdinVh87foIKAwhIWP4CfuFjdM5oCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLdOD%2Bh9bueRJYk8KtwDlyWfxHCAMvyitVsBDyiv0o7uzNPFzp8xVIa7X6lYcaWC3pTGvMYglwkT2MrNeDABeOOyF11vk4zDhBOgxyYpNphRi%2FPSWxZr50PvJ8wAVVp7lU%2FZUO5XHwgDmM5ZlSNaR86cGtxoHWcrFhoUMFOfSWy1gSxkCBnMVqdREHsn6%2FCkNmWFzz%2BEVr%2B3MD3XFgGY1rF9g9ZbitFB6YoQ9p%2Fp7vfHp1GR%2BKlYXER%2Fnz5%2BD1h9A9ea9YMenO5z%2Bl00qjIOHM7WJ6%2FTJw8pmv%2FESKf2Rzi49tLmRINgJxIGWgpkfj8bJrcKqx%2B3qtMx39E8DSYB9twEfLVKtXWkCgCZ8v8hR30fct%2F8yKiNpQXyMLj1Fa2HwWFtH7yrx1htlWxaNORnx%2BuRB3bbdUBVAY43obDiVW0k7ELwjYBoZvv3AXXTtFG%2Btq%2BH8g19zwF6rROYD7%2FWy%2BOjp1pmsz%2B2FtNy8s10tGht5I9wC03X0fsLQN1bwRXlOTrMQgmHg16Xbjg3JNiiLrtbMuobqpWySLidv3QlcPhNUnp83gDby3oNz85yySA6q00JAun0O7%2FNmFnIH1mkmk87DBIT9J9%2B7s5OqjB44TMy3KL5rPxY7mxeGRUxyPMxj2BBb30cq7RCa8Iwv5zkvwY6pgGc3Sr8916P1nUQPW%2FFPigZ7trFdUCN7TgZ23fno8TY%2BdlTzYWsGSnmKCdsiuhcmAiAUaG1uwcA6NXQQjTsavDwLh1YShYKx%2BDO4HjtfQvi5DlqFnNt5ZlqGPdBTIhp0y8zGBQl%2FHEoZdab4KC2JGjtEwFiUxDIvilsHBO1vRKKyRmtXpQ57%2B3%2B3RiGyz531BeWbwdfPMK6%2BvnYqHSsXu%2FpN9dQSrve&X-Amz-Signature=b6dad3cf739bd65351ee0630f77aa21ddb2be06776a17ac35b0e3cf0f0fffa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPOXQ6P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIE%2BirK772xlzbntnwsgKB0g2fG8xB6%2FKC7w1A4%2FQSGlgAiAs75xNuDorkohP5tdinVh87foIKAwhIWP4CfuFjdM5oCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLdOD%2Bh9bueRJYk8KtwDlyWfxHCAMvyitVsBDyiv0o7uzNPFzp8xVIa7X6lYcaWC3pTGvMYglwkT2MrNeDABeOOyF11vk4zDhBOgxyYpNphRi%2FPSWxZr50PvJ8wAVVp7lU%2FZUO5XHwgDmM5ZlSNaR86cGtxoHWcrFhoUMFOfSWy1gSxkCBnMVqdREHsn6%2FCkNmWFzz%2BEVr%2B3MD3XFgGY1rF9g9ZbitFB6YoQ9p%2Fp7vfHp1GR%2BKlYXER%2Fnz5%2BD1h9A9ea9YMenO5z%2Bl00qjIOHM7WJ6%2FTJw8pmv%2FESKf2Rzi49tLmRINgJxIGWgpkfj8bJrcKqx%2B3qtMx39E8DSYB9twEfLVKtXWkCgCZ8v8hR30fct%2F8yKiNpQXyMLj1Fa2HwWFtH7yrx1htlWxaNORnx%2BuRB3bbdUBVAY43obDiVW0k7ELwjYBoZvv3AXXTtFG%2Btq%2BH8g19zwF6rROYD7%2FWy%2BOjp1pmsz%2B2FtNy8s10tGht5I9wC03X0fsLQN1bwRXlOTrMQgmHg16Xbjg3JNiiLrtbMuobqpWySLidv3QlcPhNUnp83gDby3oNz85yySA6q00JAun0O7%2FNmFnIH1mkmk87DBIT9J9%2B7s5OqjB44TMy3KL5rPxY7mxeGRUxyPMxj2BBb30cq7RCa8Iwv5zkvwY6pgGc3Sr8916P1nUQPW%2FFPigZ7trFdUCN7TgZ23fno8TY%2BdlTzYWsGSnmKCdsiuhcmAiAUaG1uwcA6NXQQjTsavDwLh1YShYKx%2BDO4HjtfQvi5DlqFnNt5ZlqGPdBTIhp0y8zGBQl%2FHEoZdab4KC2JGjtEwFiUxDIvilsHBO1vRKKyRmtXpQ57%2B3%2B3RiGyz531BeWbwdfPMK6%2BvnYqHSsXu%2FpN9dQSrve&X-Amz-Signature=250791094462a3ebdde00da3d8c659d2ca40d1d62a1d48be2cb5cb3836173fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPOXQ6P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIE%2BirK772xlzbntnwsgKB0g2fG8xB6%2FKC7w1A4%2FQSGlgAiAs75xNuDorkohP5tdinVh87foIKAwhIWP4CfuFjdM5oCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLdOD%2Bh9bueRJYk8KtwDlyWfxHCAMvyitVsBDyiv0o7uzNPFzp8xVIa7X6lYcaWC3pTGvMYglwkT2MrNeDABeOOyF11vk4zDhBOgxyYpNphRi%2FPSWxZr50PvJ8wAVVp7lU%2FZUO5XHwgDmM5ZlSNaR86cGtxoHWcrFhoUMFOfSWy1gSxkCBnMVqdREHsn6%2FCkNmWFzz%2BEVr%2B3MD3XFgGY1rF9g9ZbitFB6YoQ9p%2Fp7vfHp1GR%2BKlYXER%2Fnz5%2BD1h9A9ea9YMenO5z%2Bl00qjIOHM7WJ6%2FTJw8pmv%2FESKf2Rzi49tLmRINgJxIGWgpkfj8bJrcKqx%2B3qtMx39E8DSYB9twEfLVKtXWkCgCZ8v8hR30fct%2F8yKiNpQXyMLj1Fa2HwWFtH7yrx1htlWxaNORnx%2BuRB3bbdUBVAY43obDiVW0k7ELwjYBoZvv3AXXTtFG%2Btq%2BH8g19zwF6rROYD7%2FWy%2BOjp1pmsz%2B2FtNy8s10tGht5I9wC03X0fsLQN1bwRXlOTrMQgmHg16Xbjg3JNiiLrtbMuobqpWySLidv3QlcPhNUnp83gDby3oNz85yySA6q00JAun0O7%2FNmFnIH1mkmk87DBIT9J9%2B7s5OqjB44TMy3KL5rPxY7mxeGRUxyPMxj2BBb30cq7RCa8Iwv5zkvwY6pgGc3Sr8916P1nUQPW%2FFPigZ7trFdUCN7TgZ23fno8TY%2BdlTzYWsGSnmKCdsiuhcmAiAUaG1uwcA6NXQQjTsavDwLh1YShYKx%2BDO4HjtfQvi5DlqFnNt5ZlqGPdBTIhp0y8zGBQl%2FHEoZdab4KC2JGjtEwFiUxDIvilsHBO1vRKKyRmtXpQ57%2B3%2B3RiGyz531BeWbwdfPMK6%2BvnYqHSsXu%2FpN9dQSrve&X-Amz-Signature=d9cd38c08cc06041d5af50ea68e7c9a26fc346b2bbeed6c36f12705a3194c34a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
