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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQK62PK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjmXBiSsMUpcn4RP41iebwzmwPko%2FNPaAhaZuHe8SIGwIhALPcx4amz6OXJ3tNhoA%2FMwZdvIRXs61crXMegAjRonFLKv8DCG4QABoMNjM3NDIzMTgzODA1Igw3Esnlcr%2BzBE4Xe%2F0q3ANNl8Iz%2Btkgj0S0nixDOElOCz7Wl4k0qqe596fyTGckMOJS%2FKO4w%2BbpHvYx68axpaInu9u8PbkjvGVd4zJdPC9Oqe7LKLQuEDmkIcbicBcARAHAj55xNXz5B1A8D5VYQ0lqyNJnM1YoXIdF9AAgdGoxXz99NCGDTFAc1uN9Elrc13hr24he7aXfOLBvLPeeqHX9aWoQPmD8nm8kFS6KfkR38DzB4tOYVt8a3vYSmyTO5RET3KFjZGHTSh1bboigMe2QRqaZKpxUu5KKvWu8ygJgV8U%2BiWiLisMcobFAgM8n6agiFvS4ZI9bffsBRCcFw%2FoYB0afgpOrHqIjasX4m0o%2BdiJsUC73F5ICfwbfrGnoy3WqE3jQze0PrJe03gk5XL893jaKl8%2BkF4eYzb2o1pgy096hCXRHCPOknXrTHNQAsDgCIhnl16pv%2F8fz%2FVULkP4ZBiDXFH8gA21BJ06vryZu5YUAOa8%2FsCxnbgo4ZcV2kkonZkLfMqTbWpqprbgMohFeAzTpo8ThhNUf%2FlJVbB1e9PBcmd%2F3xPoice1yCQW%2FHITcSLZJKrfYwV9q2TxU%2FRQP9X3HtUmsHFETMRWMtVPrin9U5fVPhwKSzS%2FCSHxVeOEwArfQqWq9%2FBD%2FCjDawofABjqkAb1VXgTV3Us7VriUuWEQ0oRG0AWRdYWITiFhOJBrTyWCHwvno8ZP%2F2xxf2HSD3HGWmBRNAX%2FlIYMx46TJIDBXGlS4AxfsGPdqeP4JH6uO3iKHwX8mdPE2Vx9rPG1wxZ4c1m8brcmEtaGAOxz9ZK7zfxFkTTKy%2F59vVswBRdOr5FEXSRFbZPVyCojkxw0gR6SFuQmcrs%2F598z2lRBfw0GznA%2FWjTh&X-Amz-Signature=bb17784a1d77a6acdac480e6c1b1148c4daed8bc21b8dbb90b9d7b2aca18229d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQK62PK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjmXBiSsMUpcn4RP41iebwzmwPko%2FNPaAhaZuHe8SIGwIhALPcx4amz6OXJ3tNhoA%2FMwZdvIRXs61crXMegAjRonFLKv8DCG4QABoMNjM3NDIzMTgzODA1Igw3Esnlcr%2BzBE4Xe%2F0q3ANNl8Iz%2Btkgj0S0nixDOElOCz7Wl4k0qqe596fyTGckMOJS%2FKO4w%2BbpHvYx68axpaInu9u8PbkjvGVd4zJdPC9Oqe7LKLQuEDmkIcbicBcARAHAj55xNXz5B1A8D5VYQ0lqyNJnM1YoXIdF9AAgdGoxXz99NCGDTFAc1uN9Elrc13hr24he7aXfOLBvLPeeqHX9aWoQPmD8nm8kFS6KfkR38DzB4tOYVt8a3vYSmyTO5RET3KFjZGHTSh1bboigMe2QRqaZKpxUu5KKvWu8ygJgV8U%2BiWiLisMcobFAgM8n6agiFvS4ZI9bffsBRCcFw%2FoYB0afgpOrHqIjasX4m0o%2BdiJsUC73F5ICfwbfrGnoy3WqE3jQze0PrJe03gk5XL893jaKl8%2BkF4eYzb2o1pgy096hCXRHCPOknXrTHNQAsDgCIhnl16pv%2F8fz%2FVULkP4ZBiDXFH8gA21BJ06vryZu5YUAOa8%2FsCxnbgo4ZcV2kkonZkLfMqTbWpqprbgMohFeAzTpo8ThhNUf%2FlJVbB1e9PBcmd%2F3xPoice1yCQW%2FHITcSLZJKrfYwV9q2TxU%2FRQP9X3HtUmsHFETMRWMtVPrin9U5fVPhwKSzS%2FCSHxVeOEwArfQqWq9%2FBD%2FCjDawofABjqkAb1VXgTV3Us7VriUuWEQ0oRG0AWRdYWITiFhOJBrTyWCHwvno8ZP%2F2xxf2HSD3HGWmBRNAX%2FlIYMx46TJIDBXGlS4AxfsGPdqeP4JH6uO3iKHwX8mdPE2Vx9rPG1wxZ4c1m8brcmEtaGAOxz9ZK7zfxFkTTKy%2F59vVswBRdOr5FEXSRFbZPVyCojkxw0gR6SFuQmcrs%2F598z2lRBfw0GznA%2FWjTh&X-Amz-Signature=e9018f71339d56d73897ba631c62e270ddb4dc8d19cbeb09ff59b76af938eca8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQK62PK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjmXBiSsMUpcn4RP41iebwzmwPko%2FNPaAhaZuHe8SIGwIhALPcx4amz6OXJ3tNhoA%2FMwZdvIRXs61crXMegAjRonFLKv8DCG4QABoMNjM3NDIzMTgzODA1Igw3Esnlcr%2BzBE4Xe%2F0q3ANNl8Iz%2Btkgj0S0nixDOElOCz7Wl4k0qqe596fyTGckMOJS%2FKO4w%2BbpHvYx68axpaInu9u8PbkjvGVd4zJdPC9Oqe7LKLQuEDmkIcbicBcARAHAj55xNXz5B1A8D5VYQ0lqyNJnM1YoXIdF9AAgdGoxXz99NCGDTFAc1uN9Elrc13hr24he7aXfOLBvLPeeqHX9aWoQPmD8nm8kFS6KfkR38DzB4tOYVt8a3vYSmyTO5RET3KFjZGHTSh1bboigMe2QRqaZKpxUu5KKvWu8ygJgV8U%2BiWiLisMcobFAgM8n6agiFvS4ZI9bffsBRCcFw%2FoYB0afgpOrHqIjasX4m0o%2BdiJsUC73F5ICfwbfrGnoy3WqE3jQze0PrJe03gk5XL893jaKl8%2BkF4eYzb2o1pgy096hCXRHCPOknXrTHNQAsDgCIhnl16pv%2F8fz%2FVULkP4ZBiDXFH8gA21BJ06vryZu5YUAOa8%2FsCxnbgo4ZcV2kkonZkLfMqTbWpqprbgMohFeAzTpo8ThhNUf%2FlJVbB1e9PBcmd%2F3xPoice1yCQW%2FHITcSLZJKrfYwV9q2TxU%2FRQP9X3HtUmsHFETMRWMtVPrin9U5fVPhwKSzS%2FCSHxVeOEwArfQqWq9%2FBD%2FCjDawofABjqkAb1VXgTV3Us7VriUuWEQ0oRG0AWRdYWITiFhOJBrTyWCHwvno8ZP%2F2xxf2HSD3HGWmBRNAX%2FlIYMx46TJIDBXGlS4AxfsGPdqeP4JH6uO3iKHwX8mdPE2Vx9rPG1wxZ4c1m8brcmEtaGAOxz9ZK7zfxFkTTKy%2F59vVswBRdOr5FEXSRFbZPVyCojkxw0gR6SFuQmcrs%2F598z2lRBfw0GznA%2FWjTh&X-Amz-Signature=9ab1e118906c397b06773cf9cc41dc994aded9c07f56d261077096856c6020f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
