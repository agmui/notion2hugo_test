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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7DJOQA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FK2GcRPljCZ21vz30Pri6tq3zd%2FxxCM7lAmXV9HeB7AiEA8uoXEHt1KJAMVgrXsSVZMVgyx5sInyM2AiFyYBid8R8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXBziRO1NEgf3f%2BbSrcAz7Qo9qD8kk%2Br7R5tJAArvB5RESyUOOU8TY%2BAt%2FzH3piqVBjfUFBLU8XZTlSs4ZVCpE%2BccMeDLfGRJFHJH0xFHaZeUvoOg9O0SdmpYXrgivaBNoGp%2Fxx0HsVMq%2BSY%2BBQ80fo2KguzZq9O9ogwfXkmigmYbHpyCxZbGhtWDE39nJvWLnmFp1ThdSW3KbwpgllUuNa5xy4jZrCSA0Ua8b%2BeLB%2BvgV2X%2FrOukjUCgIAyfA3PUDTXEpJYBc6yci%2Ffk%2FM%2FmwRHff7jvd%2FR%2FiA5qXMFEOZCLf%2FpeRxfBupsti1G7XhqwLn9oXDfuN4JcTQKdIVuHR22CpWExB5x5ccFFA6M96Jg9bUMRU51J6%2ByKu8nzsX2DVaJBSIGW4pwEkqluT5a2r5apMY7KtmBw6qD1vj8OKUUEWZps6RVPBJ2F%2FbXKCZhnmR%2BwEPIJlJmuonQTf8tdxECl4KAXYo2PHSJp3IESWq78V%2FZtSIVz0XureWYfKOPJvo%2BsGR3AHYnApPO5245JynSwBFW8JHsIx02wzeDsrAbREEevlm%2BWFEUsYT9tlIZ3d3qkyxlpvwky5JAt4vMEYezm9HBg7SfCCWyfMmHSpZfTScyUT2F9EB1%2B0qEdUR9GqIo7DwfZZxLgQlMNumlcIGOqUBOD6we1ejyit%2BQ56BUwkulJplg%2Bp2dGEYHNI%2BNUwEofdapvyMU%2BTF3drmnJTDn4X27noS3J5X3xFiFAa6Be%2FG4NFlLLyOLBQ3rP1fC%2BLMfa37J%2F7UpF1fo5tJGcpcu%2Fdk45JOCs49ovBCHDBF0FTosKaLuyKmgUSSkss1%2FWCB5vjscUKSnN4utdewl4RB9oJffozJU9rgNK225Owmz4n0AstBSEzo&X-Amz-Signature=881a20f8552a7684d4600fdf4335d5b460db515d5e95573a8c0b6542e6d386da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7DJOQA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FK2GcRPljCZ21vz30Pri6tq3zd%2FxxCM7lAmXV9HeB7AiEA8uoXEHt1KJAMVgrXsSVZMVgyx5sInyM2AiFyYBid8R8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXBziRO1NEgf3f%2BbSrcAz7Qo9qD8kk%2Br7R5tJAArvB5RESyUOOU8TY%2BAt%2FzH3piqVBjfUFBLU8XZTlSs4ZVCpE%2BccMeDLfGRJFHJH0xFHaZeUvoOg9O0SdmpYXrgivaBNoGp%2Fxx0HsVMq%2BSY%2BBQ80fo2KguzZq9O9ogwfXkmigmYbHpyCxZbGhtWDE39nJvWLnmFp1ThdSW3KbwpgllUuNa5xy4jZrCSA0Ua8b%2BeLB%2BvgV2X%2FrOukjUCgIAyfA3PUDTXEpJYBc6yci%2Ffk%2FM%2FmwRHff7jvd%2FR%2FiA5qXMFEOZCLf%2FpeRxfBupsti1G7XhqwLn9oXDfuN4JcTQKdIVuHR22CpWExB5x5ccFFA6M96Jg9bUMRU51J6%2ByKu8nzsX2DVaJBSIGW4pwEkqluT5a2r5apMY7KtmBw6qD1vj8OKUUEWZps6RVPBJ2F%2FbXKCZhnmR%2BwEPIJlJmuonQTf8tdxECl4KAXYo2PHSJp3IESWq78V%2FZtSIVz0XureWYfKOPJvo%2BsGR3AHYnApPO5245JynSwBFW8JHsIx02wzeDsrAbREEevlm%2BWFEUsYT9tlIZ3d3qkyxlpvwky5JAt4vMEYezm9HBg7SfCCWyfMmHSpZfTScyUT2F9EB1%2B0qEdUR9GqIo7DwfZZxLgQlMNumlcIGOqUBOD6we1ejyit%2BQ56BUwkulJplg%2Bp2dGEYHNI%2BNUwEofdapvyMU%2BTF3drmnJTDn4X27noS3J5X3xFiFAa6Be%2FG4NFlLLyOLBQ3rP1fC%2BLMfa37J%2F7UpF1fo5tJGcpcu%2Fdk45JOCs49ovBCHDBF0FTosKaLuyKmgUSSkss1%2FWCB5vjscUKSnN4utdewl4RB9oJffozJU9rgNK225Owmz4n0AstBSEzo&X-Amz-Signature=8b210aae33f6e1a9c51bb140a68774dfefc07f86bd1a37cd870fe3553554a133&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7DJOQA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FK2GcRPljCZ21vz30Pri6tq3zd%2FxxCM7lAmXV9HeB7AiEA8uoXEHt1KJAMVgrXsSVZMVgyx5sInyM2AiFyYBid8R8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXBziRO1NEgf3f%2BbSrcAz7Qo9qD8kk%2Br7R5tJAArvB5RESyUOOU8TY%2BAt%2FzH3piqVBjfUFBLU8XZTlSs4ZVCpE%2BccMeDLfGRJFHJH0xFHaZeUvoOg9O0SdmpYXrgivaBNoGp%2Fxx0HsVMq%2BSY%2BBQ80fo2KguzZq9O9ogwfXkmigmYbHpyCxZbGhtWDE39nJvWLnmFp1ThdSW3KbwpgllUuNa5xy4jZrCSA0Ua8b%2BeLB%2BvgV2X%2FrOukjUCgIAyfA3PUDTXEpJYBc6yci%2Ffk%2FM%2FmwRHff7jvd%2FR%2FiA5qXMFEOZCLf%2FpeRxfBupsti1G7XhqwLn9oXDfuN4JcTQKdIVuHR22CpWExB5x5ccFFA6M96Jg9bUMRU51J6%2ByKu8nzsX2DVaJBSIGW4pwEkqluT5a2r5apMY7KtmBw6qD1vj8OKUUEWZps6RVPBJ2F%2FbXKCZhnmR%2BwEPIJlJmuonQTf8tdxECl4KAXYo2PHSJp3IESWq78V%2FZtSIVz0XureWYfKOPJvo%2BsGR3AHYnApPO5245JynSwBFW8JHsIx02wzeDsrAbREEevlm%2BWFEUsYT9tlIZ3d3qkyxlpvwky5JAt4vMEYezm9HBg7SfCCWyfMmHSpZfTScyUT2F9EB1%2B0qEdUR9GqIo7DwfZZxLgQlMNumlcIGOqUBOD6we1ejyit%2BQ56BUwkulJplg%2Bp2dGEYHNI%2BNUwEofdapvyMU%2BTF3drmnJTDn4X27noS3J5X3xFiFAa6Be%2FG4NFlLLyOLBQ3rP1fC%2BLMfa37J%2F7UpF1fo5tJGcpcu%2Fdk45JOCs49ovBCHDBF0FTosKaLuyKmgUSSkss1%2FWCB5vjscUKSnN4utdewl4RB9oJffozJU9rgNK225Owmz4n0AstBSEzo&X-Amz-Signature=70fc01429b085a5b831bf1f640247c83b9ec8d47b73b8a18072f8d6fd937e07b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
