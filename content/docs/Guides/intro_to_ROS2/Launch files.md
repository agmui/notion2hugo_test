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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KV6YJA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1WAhgBP9LWUlLegSm7yP%2BaXA8dELwtUvHoWE7SDr5AiBOEy6Z97u8JvIzvpPfqF3iHwCtkEX1AZaRqYlaCaFmOCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMFP0hGCMcsQgmBvheKtwD%2F4%2BvcBR02r5D8UeXckyL4Vl83TpTJY22a1IVACZQ8VSjKe43i6lep2Ek%2BnA7a7kt76BF5Kl25yE2XIZ2l5ZJTakan5kFAmrADP5JhTM5V%2BwFA1sUv2dBJKcvNQujFIzRcVrUv6nAaj0G2Cl7mfvMt36rJWjjw5RJ64%2FEpSFJ%2FYLOXUNIXPt%2FRkvnd4aZNx6SMOAamTKcVF26Es8NBiilgixxY9hLTqgkIGHcBt85oF9Rq%2FBJDabjGIwqmayR5QJGJADgEpVj7i3PilrobTXGI6mpLC50ZLuHwSZsngBtT53XG%2Fxsx3GQubHY%2F0SSvE%2FYT6nshUo3WYtyPZ82EVcg2e5MwUv7WjxADTod3UhF0CLVW9nPtupV0F5vYFAufSRYfrSBOOO2rsxhRm6IcLhsapCxf74WtCNOKcwUJwCrelPsbl8rcG3TvDka72nyIM%2B3xkc4wGNHoh8fI%2FofRBEVEhUV0zaWp6pJU3H8vU90TE%2BgeB4v3ATjkO0lfSvaBWaBNf3RbEYt7phtRGoAA62tM0COiqsx2%2BNloa%2B2ufD3ZB2crUC4NX0sCiYQU9rFQqykUkkMBiJugJ8iFqpDN%2B3%2FUzR%2FPLmM6rVzlkfPO3ofX0ETozZhYVSnFbaH7zAwhL2wwAY6pgHmZ%2FRaex8DFcDuu4d5ttsDIPGeNe1IVzkQ0PHyjklia27jG66hDGJ24YLNlhflKukMPci7nFnJ7rUGBwrBoFacubMggj3QZZETbVjCe9vx8Yrpp%2F6nhVQ%2F%2BAwGnuLBykjeXl6gOR4pADyR1NHB6mA1gnPXytoCi551Pumgy8T4KuJfoVGEYG59jHJiBaD7se59e43SSpaxOHDACPEDutgJbsqYt1lC&X-Amz-Signature=af739425a32bcd8d803865f513ad090d32856927d8b493f538b835f7390f8194&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KV6YJA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1WAhgBP9LWUlLegSm7yP%2BaXA8dELwtUvHoWE7SDr5AiBOEy6Z97u8JvIzvpPfqF3iHwCtkEX1AZaRqYlaCaFmOCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMFP0hGCMcsQgmBvheKtwD%2F4%2BvcBR02r5D8UeXckyL4Vl83TpTJY22a1IVACZQ8VSjKe43i6lep2Ek%2BnA7a7kt76BF5Kl25yE2XIZ2l5ZJTakan5kFAmrADP5JhTM5V%2BwFA1sUv2dBJKcvNQujFIzRcVrUv6nAaj0G2Cl7mfvMt36rJWjjw5RJ64%2FEpSFJ%2FYLOXUNIXPt%2FRkvnd4aZNx6SMOAamTKcVF26Es8NBiilgixxY9hLTqgkIGHcBt85oF9Rq%2FBJDabjGIwqmayR5QJGJADgEpVj7i3PilrobTXGI6mpLC50ZLuHwSZsngBtT53XG%2Fxsx3GQubHY%2F0SSvE%2FYT6nshUo3WYtyPZ82EVcg2e5MwUv7WjxADTod3UhF0CLVW9nPtupV0F5vYFAufSRYfrSBOOO2rsxhRm6IcLhsapCxf74WtCNOKcwUJwCrelPsbl8rcG3TvDka72nyIM%2B3xkc4wGNHoh8fI%2FofRBEVEhUV0zaWp6pJU3H8vU90TE%2BgeB4v3ATjkO0lfSvaBWaBNf3RbEYt7phtRGoAA62tM0COiqsx2%2BNloa%2B2ufD3ZB2crUC4NX0sCiYQU9rFQqykUkkMBiJugJ8iFqpDN%2B3%2FUzR%2FPLmM6rVzlkfPO3ofX0ETozZhYVSnFbaH7zAwhL2wwAY6pgHmZ%2FRaex8DFcDuu4d5ttsDIPGeNe1IVzkQ0PHyjklia27jG66hDGJ24YLNlhflKukMPci7nFnJ7rUGBwrBoFacubMggj3QZZETbVjCe9vx8Yrpp%2F6nhVQ%2F%2BAwGnuLBykjeXl6gOR4pADyR1NHB6mA1gnPXytoCi551Pumgy8T4KuJfoVGEYG59jHJiBaD7se59e43SSpaxOHDACPEDutgJbsqYt1lC&X-Amz-Signature=aa3a5301cb478596f177acd0d867961df852715f0f824f10f60b7c54ef059a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KV6YJA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1WAhgBP9LWUlLegSm7yP%2BaXA8dELwtUvHoWE7SDr5AiBOEy6Z97u8JvIzvpPfqF3iHwCtkEX1AZaRqYlaCaFmOCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMFP0hGCMcsQgmBvheKtwD%2F4%2BvcBR02r5D8UeXckyL4Vl83TpTJY22a1IVACZQ8VSjKe43i6lep2Ek%2BnA7a7kt76BF5Kl25yE2XIZ2l5ZJTakan5kFAmrADP5JhTM5V%2BwFA1sUv2dBJKcvNQujFIzRcVrUv6nAaj0G2Cl7mfvMt36rJWjjw5RJ64%2FEpSFJ%2FYLOXUNIXPt%2FRkvnd4aZNx6SMOAamTKcVF26Es8NBiilgixxY9hLTqgkIGHcBt85oF9Rq%2FBJDabjGIwqmayR5QJGJADgEpVj7i3PilrobTXGI6mpLC50ZLuHwSZsngBtT53XG%2Fxsx3GQubHY%2F0SSvE%2FYT6nshUo3WYtyPZ82EVcg2e5MwUv7WjxADTod3UhF0CLVW9nPtupV0F5vYFAufSRYfrSBOOO2rsxhRm6IcLhsapCxf74WtCNOKcwUJwCrelPsbl8rcG3TvDka72nyIM%2B3xkc4wGNHoh8fI%2FofRBEVEhUV0zaWp6pJU3H8vU90TE%2BgeB4v3ATjkO0lfSvaBWaBNf3RbEYt7phtRGoAA62tM0COiqsx2%2BNloa%2B2ufD3ZB2crUC4NX0sCiYQU9rFQqykUkkMBiJugJ8iFqpDN%2B3%2FUzR%2FPLmM6rVzlkfPO3ofX0ETozZhYVSnFbaH7zAwhL2wwAY6pgHmZ%2FRaex8DFcDuu4d5ttsDIPGeNe1IVzkQ0PHyjklia27jG66hDGJ24YLNlhflKukMPci7nFnJ7rUGBwrBoFacubMggj3QZZETbVjCe9vx8Yrpp%2F6nhVQ%2F%2BAwGnuLBykjeXl6gOR4pADyR1NHB6mA1gnPXytoCi551Pumgy8T4KuJfoVGEYG59jHJiBaD7se59e43SSpaxOHDACPEDutgJbsqYt1lC&X-Amz-Signature=96ec91f836fafaa204f95ae488aa0a7ec31942cabc775d8a7318af6387ed350a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
