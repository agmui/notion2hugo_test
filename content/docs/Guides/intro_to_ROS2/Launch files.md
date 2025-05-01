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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QNSXH4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBN5QqsuPMB%2BoutJTjM5CxVgCOomIcrFOrW%2BbkG55hCEAiAqdzNudyB%2FLvrddrkAnIni1JpKInFZP9blZpCDfE0CRiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgE7jdbfTASWf8k%2BLKtwDDS5TZtRwKwHdPaDk5%2F5a8q5cOHad9GbH3Njyx1Oo1upaoevugmR%2Fd4b%2BcaMhpIc7%2FYzdVBaawGIoOif1jt1%2B6RlSYTnWFv3pVVLQ9qAYAI2lCwibsrBVeVwnDAEQh9XwByu7tgFtiNQRmA3wxOvcrwnimaUzbAghwvMTFIFc6lkYXfFeIggeHz1%2FRva1b6p7Zg8%2BIiqtgptwHXyXhG45S9pbNPaglADMOMg2GXSD%2FJ7gMFMdNfwspfcrGhPje4BSX03Z1FasbFPTEUKdLsYvpQVZbY06%2ByW4I8au%2FcDq3xQeCOCXqtoZAXi2R0qgllC8Ks0NJ1RzusCJ7z38nRhIyMSOHPLnelL0TxNagvttKzAlSXrdZDXNkoPxpghy613bl7pZCu2Z6j52Vb26yyRdkedSS34K0j%2FbD5i02Po9eON5D3QDGZ4UyDaMz1TB0snbkyJWVyAwu8HMwDzkKJp7M%2BUMmUngnZDgYpD3gB%2BoyTYC05I0%2B5OrQV1JubGSFwKvlrF%2BlSkEr6BesETAWX%2BhFGrNQ1LFSWRLyMvSP%2FEOvecrQ5UMm%2F5wRQTjGzzZXxLSy7j7G%2B3HUiqS6O4Asq2BBfi8op2x%2F7H3Hek7QLPKncZpoxJOyYISek7SOdcwrYPLwAY6pgFTyp347ie6kdeV99AK2AmPBaTGEcrnCYZYlrEzCuZdRObC1sdgu%2BeEzq%2FHyNITwHT62Q4UB1NUSCqwlJ90UxgFPX7WuustSi9bcUCcLh4yfO7whKHicu8UCtzX%2B8I2WxFFlQx68aAbwqmnmjXJ23LVXx8fanVqNsTS%2F7Q0WqMj2TmHa89%2FsVP5ADp7kokGRhl19ppderjpSus50ACKfBPmPBklzT8o&X-Amz-Signature=b99109b90675eb565f43c4bc6951c75b7308b0d9af71d7c59a462507918804c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QNSXH4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBN5QqsuPMB%2BoutJTjM5CxVgCOomIcrFOrW%2BbkG55hCEAiAqdzNudyB%2FLvrddrkAnIni1JpKInFZP9blZpCDfE0CRiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgE7jdbfTASWf8k%2BLKtwDDS5TZtRwKwHdPaDk5%2F5a8q5cOHad9GbH3Njyx1Oo1upaoevugmR%2Fd4b%2BcaMhpIc7%2FYzdVBaawGIoOif1jt1%2B6RlSYTnWFv3pVVLQ9qAYAI2lCwibsrBVeVwnDAEQh9XwByu7tgFtiNQRmA3wxOvcrwnimaUzbAghwvMTFIFc6lkYXfFeIggeHz1%2FRva1b6p7Zg8%2BIiqtgptwHXyXhG45S9pbNPaglADMOMg2GXSD%2FJ7gMFMdNfwspfcrGhPje4BSX03Z1FasbFPTEUKdLsYvpQVZbY06%2ByW4I8au%2FcDq3xQeCOCXqtoZAXi2R0qgllC8Ks0NJ1RzusCJ7z38nRhIyMSOHPLnelL0TxNagvttKzAlSXrdZDXNkoPxpghy613bl7pZCu2Z6j52Vb26yyRdkedSS34K0j%2FbD5i02Po9eON5D3QDGZ4UyDaMz1TB0snbkyJWVyAwu8HMwDzkKJp7M%2BUMmUngnZDgYpD3gB%2BoyTYC05I0%2B5OrQV1JubGSFwKvlrF%2BlSkEr6BesETAWX%2BhFGrNQ1LFSWRLyMvSP%2FEOvecrQ5UMm%2F5wRQTjGzzZXxLSy7j7G%2B3HUiqS6O4Asq2BBfi8op2x%2F7H3Hek7QLPKncZpoxJOyYISek7SOdcwrYPLwAY6pgFTyp347ie6kdeV99AK2AmPBaTGEcrnCYZYlrEzCuZdRObC1sdgu%2BeEzq%2FHyNITwHT62Q4UB1NUSCqwlJ90UxgFPX7WuustSi9bcUCcLh4yfO7whKHicu8UCtzX%2B8I2WxFFlQx68aAbwqmnmjXJ23LVXx8fanVqNsTS%2F7Q0WqMj2TmHa89%2FsVP5ADp7kokGRhl19ppderjpSus50ACKfBPmPBklzT8o&X-Amz-Signature=56d9e88012496e258db23d5b01acd7a01348dab15a57815265bcf58f7a9452d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QNSXH4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBN5QqsuPMB%2BoutJTjM5CxVgCOomIcrFOrW%2BbkG55hCEAiAqdzNudyB%2FLvrddrkAnIni1JpKInFZP9blZpCDfE0CRiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgE7jdbfTASWf8k%2BLKtwDDS5TZtRwKwHdPaDk5%2F5a8q5cOHad9GbH3Njyx1Oo1upaoevugmR%2Fd4b%2BcaMhpIc7%2FYzdVBaawGIoOif1jt1%2B6RlSYTnWFv3pVVLQ9qAYAI2lCwibsrBVeVwnDAEQh9XwByu7tgFtiNQRmA3wxOvcrwnimaUzbAghwvMTFIFc6lkYXfFeIggeHz1%2FRva1b6p7Zg8%2BIiqtgptwHXyXhG45S9pbNPaglADMOMg2GXSD%2FJ7gMFMdNfwspfcrGhPje4BSX03Z1FasbFPTEUKdLsYvpQVZbY06%2ByW4I8au%2FcDq3xQeCOCXqtoZAXi2R0qgllC8Ks0NJ1RzusCJ7z38nRhIyMSOHPLnelL0TxNagvttKzAlSXrdZDXNkoPxpghy613bl7pZCu2Z6j52Vb26yyRdkedSS34K0j%2FbD5i02Po9eON5D3QDGZ4UyDaMz1TB0snbkyJWVyAwu8HMwDzkKJp7M%2BUMmUngnZDgYpD3gB%2BoyTYC05I0%2B5OrQV1JubGSFwKvlrF%2BlSkEr6BesETAWX%2BhFGrNQ1LFSWRLyMvSP%2FEOvecrQ5UMm%2F5wRQTjGzzZXxLSy7j7G%2B3HUiqS6O4Asq2BBfi8op2x%2F7H3Hek7QLPKncZpoxJOyYISek7SOdcwrYPLwAY6pgFTyp347ie6kdeV99AK2AmPBaTGEcrnCYZYlrEzCuZdRObC1sdgu%2BeEzq%2FHyNITwHT62Q4UB1NUSCqwlJ90UxgFPX7WuustSi9bcUCcLh4yfO7whKHicu8UCtzX%2B8I2WxFFlQx68aAbwqmnmjXJ23LVXx8fanVqNsTS%2F7Q0WqMj2TmHa89%2FsVP5ADp7kokGRhl19ppderjpSus50ACKfBPmPBklzT8o&X-Amz-Signature=4e440d0a2468ee445cb04f466b8fe8c1f70a901bc460c302207f88dcf1ead8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
