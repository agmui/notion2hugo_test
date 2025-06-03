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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5ETKS5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDkyCKnOJSiy3D9C9uogczZD%2F4HcWioDMszbiFwRBx9%2FwIhAKIk4TV07VQ%2FGSqOnjgPI8ppAVYIsrALYlY5es4CDp85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igz6NoVVlSzPUjYxegIq3AM%2FPaI118WWGSSft6F7oKwBh0z7%2FYtRrjYqT5pv9IV9hoNg9S8ST3ToH6euol1BeTZXuv5c2qQOiQVuGa6t0AIR6cUyezlT6iZ%2BT2cQ1JUK1pdTfOMDGWzc6oyKgRjAC7af%2FSUj1iYpvBEJwMGxOTeHi%2Bfm8qdgPF6KtXS4yBTOVMTI0uHtf5Ozt0oGFvGAYgMap%2FJDOoL9qoP%2BSYJ8TajiIaWnvKBm4p6dvD5qrGWvUJIE5JncBCuw0amHMn1DGKFkiH93ifzmCHVIat6bZ%2FNER7rUNoHy2UuhbczocGx7YptJa3%2BhKTAd43GFAeF2tkYWXhCJ4sQ3FA2MUVcASiukr85CpNpZ5rA3AJofIUI7pQjiqNRhaRxbQDOWM1YP8jg3du0VYEU98or344offdT1uUA39YFpSdKki1Db%2FdjY8%2F12BNR%2Bf2l4D%2F1A7R8nvNbNn4iZwqPaqE1jKoHfTAfG3QmLjE9k8o%2Bn2Z6xPedjSy5%2BSTEPnshXVZljBhGH8YL6pFbneFNqskIQ%2ByQzW2FnD6H67OxEBkmfnG7T9sHGwCSUC9%2FYTcTW%2Bu2SD1mV%2BTPQJ5CpYNdseoWnDnGX%2Fs7EvF6tlLk7GsC4aah1R1VNMdgFGA64M0EmLn0ONjC%2Bhf3BBjqkAcIp1w80kBoe1Dw4Eg0bjHANlOCXcXTZp4Apvq9SDliPGNTUBiD9MFDDknYHDr1gmBr9kseinD39pA6u6IJt1hs9xNTzztF2DOqc7lwdx5sWYXnwSbR6USTjYChIBGLh0i%2BI3PyXmksthcwP30qEnCilHeZlgqK%2Bf8bHH8t7JpJg0Rp8X3aBRY8IZ3TdYEqEZv4283iRl4d3K3x3anyQybc567Ui&X-Amz-Signature=878e91f2371cee561858722d99074ea2318ec41a2d5831b3959aff9689ecc384&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5ETKS5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDkyCKnOJSiy3D9C9uogczZD%2F4HcWioDMszbiFwRBx9%2FwIhAKIk4TV07VQ%2FGSqOnjgPI8ppAVYIsrALYlY5es4CDp85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igz6NoVVlSzPUjYxegIq3AM%2FPaI118WWGSSft6F7oKwBh0z7%2FYtRrjYqT5pv9IV9hoNg9S8ST3ToH6euol1BeTZXuv5c2qQOiQVuGa6t0AIR6cUyezlT6iZ%2BT2cQ1JUK1pdTfOMDGWzc6oyKgRjAC7af%2FSUj1iYpvBEJwMGxOTeHi%2Bfm8qdgPF6KtXS4yBTOVMTI0uHtf5Ozt0oGFvGAYgMap%2FJDOoL9qoP%2BSYJ8TajiIaWnvKBm4p6dvD5qrGWvUJIE5JncBCuw0amHMn1DGKFkiH93ifzmCHVIat6bZ%2FNER7rUNoHy2UuhbczocGx7YptJa3%2BhKTAd43GFAeF2tkYWXhCJ4sQ3FA2MUVcASiukr85CpNpZ5rA3AJofIUI7pQjiqNRhaRxbQDOWM1YP8jg3du0VYEU98or344offdT1uUA39YFpSdKki1Db%2FdjY8%2F12BNR%2Bf2l4D%2F1A7R8nvNbNn4iZwqPaqE1jKoHfTAfG3QmLjE9k8o%2Bn2Z6xPedjSy5%2BSTEPnshXVZljBhGH8YL6pFbneFNqskIQ%2ByQzW2FnD6H67OxEBkmfnG7T9sHGwCSUC9%2FYTcTW%2Bu2SD1mV%2BTPQJ5CpYNdseoWnDnGX%2Fs7EvF6tlLk7GsC4aah1R1VNMdgFGA64M0EmLn0ONjC%2Bhf3BBjqkAcIp1w80kBoe1Dw4Eg0bjHANlOCXcXTZp4Apvq9SDliPGNTUBiD9MFDDknYHDr1gmBr9kseinD39pA6u6IJt1hs9xNTzztF2DOqc7lwdx5sWYXnwSbR6USTjYChIBGLh0i%2BI3PyXmksthcwP30qEnCilHeZlgqK%2Bf8bHH8t7JpJg0Rp8X3aBRY8IZ3TdYEqEZv4283iRl4d3K3x3anyQybc567Ui&X-Amz-Signature=e0324b205c0b6b85e26609a933308d4b19c57bb202f571d1dd272195e0fcc461&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5ETKS5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDkyCKnOJSiy3D9C9uogczZD%2F4HcWioDMszbiFwRBx9%2FwIhAKIk4TV07VQ%2FGSqOnjgPI8ppAVYIsrALYlY5es4CDp85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igz6NoVVlSzPUjYxegIq3AM%2FPaI118WWGSSft6F7oKwBh0z7%2FYtRrjYqT5pv9IV9hoNg9S8ST3ToH6euol1BeTZXuv5c2qQOiQVuGa6t0AIR6cUyezlT6iZ%2BT2cQ1JUK1pdTfOMDGWzc6oyKgRjAC7af%2FSUj1iYpvBEJwMGxOTeHi%2Bfm8qdgPF6KtXS4yBTOVMTI0uHtf5Ozt0oGFvGAYgMap%2FJDOoL9qoP%2BSYJ8TajiIaWnvKBm4p6dvD5qrGWvUJIE5JncBCuw0amHMn1DGKFkiH93ifzmCHVIat6bZ%2FNER7rUNoHy2UuhbczocGx7YptJa3%2BhKTAd43GFAeF2tkYWXhCJ4sQ3FA2MUVcASiukr85CpNpZ5rA3AJofIUI7pQjiqNRhaRxbQDOWM1YP8jg3du0VYEU98or344offdT1uUA39YFpSdKki1Db%2FdjY8%2F12BNR%2Bf2l4D%2F1A7R8nvNbNn4iZwqPaqE1jKoHfTAfG3QmLjE9k8o%2Bn2Z6xPedjSy5%2BSTEPnshXVZljBhGH8YL6pFbneFNqskIQ%2ByQzW2FnD6H67OxEBkmfnG7T9sHGwCSUC9%2FYTcTW%2Bu2SD1mV%2BTPQJ5CpYNdseoWnDnGX%2Fs7EvF6tlLk7GsC4aah1R1VNMdgFGA64M0EmLn0ONjC%2Bhf3BBjqkAcIp1w80kBoe1Dw4Eg0bjHANlOCXcXTZp4Apvq9SDliPGNTUBiD9MFDDknYHDr1gmBr9kseinD39pA6u6IJt1hs9xNTzztF2DOqc7lwdx5sWYXnwSbR6USTjYChIBGLh0i%2BI3PyXmksthcwP30qEnCilHeZlgqK%2Bf8bHH8t7JpJg0Rp8X3aBRY8IZ3TdYEqEZv4283iRl4d3K3x3anyQybc567Ui&X-Amz-Signature=e154f2d7796b65f8a5bac8f984d0d2c041304e7dea5e41a01d0e62b3de91ee94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
