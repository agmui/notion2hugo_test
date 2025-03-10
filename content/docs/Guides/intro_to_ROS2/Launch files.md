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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNF24P6C%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFI8xl%2FWyygdmX3Fk0kOC%2FcaXzu91mRwPyUf764q3Ws2AiEAypkZ4FiA4N9ycm%2BG2Z1SfQ0JtW2SUReesPKI%2Bt%2F5ZsIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAggpVn6%2BlhA%2BquhsircAz7a0eX3wglmZxFVf97eXKo6AJFiC4RfUAh8hGfHxiJQICrPluQ7pSGXAsbdi9IZrV4Kje29WpxNr4dwYyLmea6Kx5dFX2D%2BXShXXUnepbj6FqpHGcOG8qtWMQ1JdVACPyegbJGC4fiGPFiF2aPbBfT7tHPUjm3Ghxtmux%2FJF2r5lvOfmFnWOqLGX2bcXiBaGz0AJyf%2Fplr%2BokFxgo8H6IwT%2BuOQ%2BIWMtPy1FOmG5Lo9CEikUwbEnI5lswac%2FtIH5187hGgsE2tVXlwC1CMiIoRJAVkzTbcgNCzIP1%2Fuj5dbo0%2FAgvRu30S%2Bwr1R6LqMf9JlDkI1PEeqD%2B8INGHEgak9DKZXIKTxuKtzyPfNaxG30XL5C4ihcL%2BE1oClgl4HiSggLLPd%2F9VdHO1HMb32GKvStuSZ2A52wzGQ4ZxsLBE1CID58EIXXWVCbaSm1uijIIy1%2BkonmIO1G%2B4YydT%2FqdMkdVJI1ETCv2c3bndHleBf1u9n08Mfyo4rLKy5TOHeN1laE4e0Za3lj0l5cyhaG5OftLEsw2aubnD%2FcneD14%2FQ2rHdehQUZXQ2Aj5IqR4D6u9vEdri0UbI%2F7n9iG6XPz7wYEf0iZmaCiyigBbvVaRMbvDvPxglqh1Gsty0MKzsu74GOqUBLC%2BcGXe0jOXk5Boo6vwCU9NooR2fr07ZfKlFJI8lnvQmT0rY9vtxGNCmPzmjnaTdBWDq%2BaeRlWeKqPWhEgk4nE3wlyC3gSlU0WocRUy44xv2jgV5dfXxD4JJ%2FX1Kvg0Ey4goidepIJvOkhkLCRHGjKkkjnQu1MQ2wmeg%2FzvfbMkdbEgGSTTTwtsC0OUzHMbB8auvkCx02BsFkasIaJ1ZeepBw42N&X-Amz-Signature=45050d8156538abc7cd6f00a1803037f7a64b75b9fa5666dc80456ef4b4fbf79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNF24P6C%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFI8xl%2FWyygdmX3Fk0kOC%2FcaXzu91mRwPyUf764q3Ws2AiEAypkZ4FiA4N9ycm%2BG2Z1SfQ0JtW2SUReesPKI%2Bt%2F5ZsIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAggpVn6%2BlhA%2BquhsircAz7a0eX3wglmZxFVf97eXKo6AJFiC4RfUAh8hGfHxiJQICrPluQ7pSGXAsbdi9IZrV4Kje29WpxNr4dwYyLmea6Kx5dFX2D%2BXShXXUnepbj6FqpHGcOG8qtWMQ1JdVACPyegbJGC4fiGPFiF2aPbBfT7tHPUjm3Ghxtmux%2FJF2r5lvOfmFnWOqLGX2bcXiBaGz0AJyf%2Fplr%2BokFxgo8H6IwT%2BuOQ%2BIWMtPy1FOmG5Lo9CEikUwbEnI5lswac%2FtIH5187hGgsE2tVXlwC1CMiIoRJAVkzTbcgNCzIP1%2Fuj5dbo0%2FAgvRu30S%2Bwr1R6LqMf9JlDkI1PEeqD%2B8INGHEgak9DKZXIKTxuKtzyPfNaxG30XL5C4ihcL%2BE1oClgl4HiSggLLPd%2F9VdHO1HMb32GKvStuSZ2A52wzGQ4ZxsLBE1CID58EIXXWVCbaSm1uijIIy1%2BkonmIO1G%2B4YydT%2FqdMkdVJI1ETCv2c3bndHleBf1u9n08Mfyo4rLKy5TOHeN1laE4e0Za3lj0l5cyhaG5OftLEsw2aubnD%2FcneD14%2FQ2rHdehQUZXQ2Aj5IqR4D6u9vEdri0UbI%2F7n9iG6XPz7wYEf0iZmaCiyigBbvVaRMbvDvPxglqh1Gsty0MKzsu74GOqUBLC%2BcGXe0jOXk5Boo6vwCU9NooR2fr07ZfKlFJI8lnvQmT0rY9vtxGNCmPzmjnaTdBWDq%2BaeRlWeKqPWhEgk4nE3wlyC3gSlU0WocRUy44xv2jgV5dfXxD4JJ%2FX1Kvg0Ey4goidepIJvOkhkLCRHGjKkkjnQu1MQ2wmeg%2FzvfbMkdbEgGSTTTwtsC0OUzHMbB8auvkCx02BsFkasIaJ1ZeepBw42N&X-Amz-Signature=b228e6b18b43b5e0d1bd0ca895e1034829330700df9cc356014281408c4a4fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNF24P6C%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFI8xl%2FWyygdmX3Fk0kOC%2FcaXzu91mRwPyUf764q3Ws2AiEAypkZ4FiA4N9ycm%2BG2Z1SfQ0JtW2SUReesPKI%2Bt%2F5ZsIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAggpVn6%2BlhA%2BquhsircAz7a0eX3wglmZxFVf97eXKo6AJFiC4RfUAh8hGfHxiJQICrPluQ7pSGXAsbdi9IZrV4Kje29WpxNr4dwYyLmea6Kx5dFX2D%2BXShXXUnepbj6FqpHGcOG8qtWMQ1JdVACPyegbJGC4fiGPFiF2aPbBfT7tHPUjm3Ghxtmux%2FJF2r5lvOfmFnWOqLGX2bcXiBaGz0AJyf%2Fplr%2BokFxgo8H6IwT%2BuOQ%2BIWMtPy1FOmG5Lo9CEikUwbEnI5lswac%2FtIH5187hGgsE2tVXlwC1CMiIoRJAVkzTbcgNCzIP1%2Fuj5dbo0%2FAgvRu30S%2Bwr1R6LqMf9JlDkI1PEeqD%2B8INGHEgak9DKZXIKTxuKtzyPfNaxG30XL5C4ihcL%2BE1oClgl4HiSggLLPd%2F9VdHO1HMb32GKvStuSZ2A52wzGQ4ZxsLBE1CID58EIXXWVCbaSm1uijIIy1%2BkonmIO1G%2B4YydT%2FqdMkdVJI1ETCv2c3bndHleBf1u9n08Mfyo4rLKy5TOHeN1laE4e0Za3lj0l5cyhaG5OftLEsw2aubnD%2FcneD14%2FQ2rHdehQUZXQ2Aj5IqR4D6u9vEdri0UbI%2F7n9iG6XPz7wYEf0iZmaCiyigBbvVaRMbvDvPxglqh1Gsty0MKzsu74GOqUBLC%2BcGXe0jOXk5Boo6vwCU9NooR2fr07ZfKlFJI8lnvQmT0rY9vtxGNCmPzmjnaTdBWDq%2BaeRlWeKqPWhEgk4nE3wlyC3gSlU0WocRUy44xv2jgV5dfXxD4JJ%2FX1Kvg0Ey4goidepIJvOkhkLCRHGjKkkjnQu1MQ2wmeg%2FzvfbMkdbEgGSTTTwtsC0OUzHMbB8auvkCx02BsFkasIaJ1ZeepBw42N&X-Amz-Signature=837261aa198c396591375ed980d19d672e338a5efa78a5a5b62c5bd72373e72f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
