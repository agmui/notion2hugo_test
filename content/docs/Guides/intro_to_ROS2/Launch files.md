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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQQQAR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIA4IKEkcHesSpyaYQp6bENv%2B4TFyvguOrAFFML0NeAelAiEAqvIP%2BDbKkLk%2BV4xfGYiqBs2kzOUGBvY044GornFKi14q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC1dqY0XqivdQm4KDircA%2Fi%2FAYF%2F6QXek%2F3LbK4%2BGhXMAfsfoeasm3l%2F3OfXr0VntazbAaGLbM8rwxXkX7kk59mGuFrOOnZ%2BM3pqLFBFiEY0r4RxQh%2B1AifVXI7P9niodoKlh2VHvlOku5tpBiGDgsx4n3MAJEnKfrBh8Qi%2B4iDfstsCzfvFVldYYuRP9k2A%2Fmj1I6pG9taQANvjoFuuYSRSShpKSBQ%2Fd8b3zWjTYrhJVQ3ZqRaAjjv2YRroJJTDV6ztaHGrvlxsp%2FEMA1uc928%2F9rVSLRKp1OweG5C%2FncSuhGnYky6OYfSIGLv3p1yeW1p7Cdf2sR7yn2G0%2Bm1sRPcMMOkrWDyphlx1mNsUurD8B6v5LF1KmY9uI8fXZbTc6JdyySb%2F1N3iyNf6TnQWDTqf9VOLQZUQMP2E%2BpqfU9prPUs4ZILrrGm7LlyFzzun1cgRliG6DvmJc2uFfnVRZubG%2BiwwGJSV32nHXzlKXEL8VbstrXnC9qAo%2BR0KuXJRpHdcr%2F%2Bu7p7q6fVAfvVuUft9MTF%2B3%2BQkIqlcO2B0axJLJvR6AugiAixOLn9NI4csKZkzrxkaID2Oq3LOlrFVc4zG5p5u46hQMaVzO6YdMscEpMNHQTipuRxoJQAYbOHDGbnZEe%2FQb29j9TKkMO6dlsEGOqUBmPNsFCzUlIt65jpCTkEAb%2BMwFp4wghP0vPHpew3sgEHBMxEWyllRp%2BHjA%2BeEfyZRX4RgQOdtH3BhgqrlIdSVAtM91HpAaZTFdfVjeRUtToctC8N5GRjWMLtBLKkI2wnavcqyYnj7kiTEayxRWERD1oRtK43awh52O33Pw6ay4x5vEUVoI7SdAfkU7%2BabL5LRdrGNmkeU%2FD1GCZSWgjwEuHer%2B0D5&X-Amz-Signature=61be2fc55c12d80790660fab62eb25ef11b59c3d431cc2e0686cbc3a456667fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQQQAR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIA4IKEkcHesSpyaYQp6bENv%2B4TFyvguOrAFFML0NeAelAiEAqvIP%2BDbKkLk%2BV4xfGYiqBs2kzOUGBvY044GornFKi14q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC1dqY0XqivdQm4KDircA%2Fi%2FAYF%2F6QXek%2F3LbK4%2BGhXMAfsfoeasm3l%2F3OfXr0VntazbAaGLbM8rwxXkX7kk59mGuFrOOnZ%2BM3pqLFBFiEY0r4RxQh%2B1AifVXI7P9niodoKlh2VHvlOku5tpBiGDgsx4n3MAJEnKfrBh8Qi%2B4iDfstsCzfvFVldYYuRP9k2A%2Fmj1I6pG9taQANvjoFuuYSRSShpKSBQ%2Fd8b3zWjTYrhJVQ3ZqRaAjjv2YRroJJTDV6ztaHGrvlxsp%2FEMA1uc928%2F9rVSLRKp1OweG5C%2FncSuhGnYky6OYfSIGLv3p1yeW1p7Cdf2sR7yn2G0%2Bm1sRPcMMOkrWDyphlx1mNsUurD8B6v5LF1KmY9uI8fXZbTc6JdyySb%2F1N3iyNf6TnQWDTqf9VOLQZUQMP2E%2BpqfU9prPUs4ZILrrGm7LlyFzzun1cgRliG6DvmJc2uFfnVRZubG%2BiwwGJSV32nHXzlKXEL8VbstrXnC9qAo%2BR0KuXJRpHdcr%2F%2Bu7p7q6fVAfvVuUft9MTF%2B3%2BQkIqlcO2B0axJLJvR6AugiAixOLn9NI4csKZkzrxkaID2Oq3LOlrFVc4zG5p5u46hQMaVzO6YdMscEpMNHQTipuRxoJQAYbOHDGbnZEe%2FQb29j9TKkMO6dlsEGOqUBmPNsFCzUlIt65jpCTkEAb%2BMwFp4wghP0vPHpew3sgEHBMxEWyllRp%2BHjA%2BeEfyZRX4RgQOdtH3BhgqrlIdSVAtM91HpAaZTFdfVjeRUtToctC8N5GRjWMLtBLKkI2wnavcqyYnj7kiTEayxRWERD1oRtK43awh52O33Pw6ay4x5vEUVoI7SdAfkU7%2BabL5LRdrGNmkeU%2FD1GCZSWgjwEuHer%2B0D5&X-Amz-Signature=d97b86ef69a4316b9e61791515452f0696892f7af90242465e900e688a847d57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQQQAR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIA4IKEkcHesSpyaYQp6bENv%2B4TFyvguOrAFFML0NeAelAiEAqvIP%2BDbKkLk%2BV4xfGYiqBs2kzOUGBvY044GornFKi14q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC1dqY0XqivdQm4KDircA%2Fi%2FAYF%2F6QXek%2F3LbK4%2BGhXMAfsfoeasm3l%2F3OfXr0VntazbAaGLbM8rwxXkX7kk59mGuFrOOnZ%2BM3pqLFBFiEY0r4RxQh%2B1AifVXI7P9niodoKlh2VHvlOku5tpBiGDgsx4n3MAJEnKfrBh8Qi%2B4iDfstsCzfvFVldYYuRP9k2A%2Fmj1I6pG9taQANvjoFuuYSRSShpKSBQ%2Fd8b3zWjTYrhJVQ3ZqRaAjjv2YRroJJTDV6ztaHGrvlxsp%2FEMA1uc928%2F9rVSLRKp1OweG5C%2FncSuhGnYky6OYfSIGLv3p1yeW1p7Cdf2sR7yn2G0%2Bm1sRPcMMOkrWDyphlx1mNsUurD8B6v5LF1KmY9uI8fXZbTc6JdyySb%2F1N3iyNf6TnQWDTqf9VOLQZUQMP2E%2BpqfU9prPUs4ZILrrGm7LlyFzzun1cgRliG6DvmJc2uFfnVRZubG%2BiwwGJSV32nHXzlKXEL8VbstrXnC9qAo%2BR0KuXJRpHdcr%2F%2Bu7p7q6fVAfvVuUft9MTF%2B3%2BQkIqlcO2B0axJLJvR6AugiAixOLn9NI4csKZkzrxkaID2Oq3LOlrFVc4zG5p5u46hQMaVzO6YdMscEpMNHQTipuRxoJQAYbOHDGbnZEe%2FQb29j9TKkMO6dlsEGOqUBmPNsFCzUlIt65jpCTkEAb%2BMwFp4wghP0vPHpew3sgEHBMxEWyllRp%2BHjA%2BeEfyZRX4RgQOdtH3BhgqrlIdSVAtM91HpAaZTFdfVjeRUtToctC8N5GRjWMLtBLKkI2wnavcqyYnj7kiTEayxRWERD1oRtK43awh52O33Pw6ay4x5vEUVoI7SdAfkU7%2BabL5LRdrGNmkeU%2FD1GCZSWgjwEuHer%2B0D5&X-Amz-Signature=5222d3f2ba06b44ff5e23486d7c971ad93b07e50b7ed8f6b53e126d7592d1a91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
