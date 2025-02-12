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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYSLP5D%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdpoINx75gDOBSsO%2BprMTeNJ7JNRasgFxFBnlw54K6cAiAKIl4kTA9ak08bLz8xwMrHllpH0AZb5G69YokNZGBVeiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtGcoh3rX%2B14R7GbKtwDRPESJvo3%2Bo4KOde%2F0i0%2FonuL6qv3ITbnCEshW7cFG0jy%2FO2y55fl6gDY%2FEI1chV3I0dg4tNnT8tE1GkYpbAWCZOI1zPTfgFfj5AtSAqwtbCea6CIZpoSj2wlZu2fE%2FfMWnzmVoqm3Aci2prxrQC3NtzZa4sbquuEC2Njutn3PZvPM17fP1u9us2Us0dLB35MfongN2%2B8Ji17g%2BmS%2FyfJ%2B78GaCNQq6dlLoSoBrFl7w9kfQxLI%2B3u%2FipdH4T3RYhDcVbgb1uKJgFBcuDxrIn7419DePqg4UDtMzfauc%2BxwHQzNZpDo3s3Te%2FvEmOEg7tCzluWd6rM1ixFR3L20TE8gyrMF%2F2e%2FUvciK%2FfDb13ADFxfXpVUCJGdtUNVnEhTnGBZllKnRzr2ZfAKo9za4zZBRcLFYacAhPKlzF7IdARRI3H8SW6mbayINTlC6f1PnmXkTaFDFCIk8l63KytR2eD5XtzQWz6vcqIhMX1vbb14n%2FQhktmynLZu%2B5FTV7ZOTiI5W%2Bz21R2MNf8%2FmWyz77PMRmEDO5Y8ENEnqbS4ZEQqf%2F3ujBzDV9SUBV9cyP8%2Fl8GZTi13%2BXOAmQsrYYw2KzEOlGZh7XPiXS5oXqZZGGlEks1aIKN1Vh62%2B6UPuYw5IaxvQY6pgFwGarmdQ3HZWonJLh3SZZl%2FqJGPVQyDGmGrV4qVdrCx3E5avG9C%2BP5Fl6xrI4CvMO9HONWagmF2ftSiNFT7MEa53%2BOPNAdjjHqeUDgrQwSTmFbFNlMVj5OguN20zPimEU8XOmaUPD60Re8E0lXxTMv5U7Dvvu8zEnCp30LA62Atpt0TqteU3BYG0EIDcfcDIG%2B301zDavQfRVkMaUWOIm21H1qSBpj&X-Amz-Signature=2114e1f1a4583872c9befcc95aae0cc13b61456eb3214a1c32484fbb81ab3dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYSLP5D%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdpoINx75gDOBSsO%2BprMTeNJ7JNRasgFxFBnlw54K6cAiAKIl4kTA9ak08bLz8xwMrHllpH0AZb5G69YokNZGBVeiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtGcoh3rX%2B14R7GbKtwDRPESJvo3%2Bo4KOde%2F0i0%2FonuL6qv3ITbnCEshW7cFG0jy%2FO2y55fl6gDY%2FEI1chV3I0dg4tNnT8tE1GkYpbAWCZOI1zPTfgFfj5AtSAqwtbCea6CIZpoSj2wlZu2fE%2FfMWnzmVoqm3Aci2prxrQC3NtzZa4sbquuEC2Njutn3PZvPM17fP1u9us2Us0dLB35MfongN2%2B8Ji17g%2BmS%2FyfJ%2B78GaCNQq6dlLoSoBrFl7w9kfQxLI%2B3u%2FipdH4T3RYhDcVbgb1uKJgFBcuDxrIn7419DePqg4UDtMzfauc%2BxwHQzNZpDo3s3Te%2FvEmOEg7tCzluWd6rM1ixFR3L20TE8gyrMF%2F2e%2FUvciK%2FfDb13ADFxfXpVUCJGdtUNVnEhTnGBZllKnRzr2ZfAKo9za4zZBRcLFYacAhPKlzF7IdARRI3H8SW6mbayINTlC6f1PnmXkTaFDFCIk8l63KytR2eD5XtzQWz6vcqIhMX1vbb14n%2FQhktmynLZu%2B5FTV7ZOTiI5W%2Bz21R2MNf8%2FmWyz77PMRmEDO5Y8ENEnqbS4ZEQqf%2F3ujBzDV9SUBV9cyP8%2Fl8GZTi13%2BXOAmQsrYYw2KzEOlGZh7XPiXS5oXqZZGGlEks1aIKN1Vh62%2B6UPuYw5IaxvQY6pgFwGarmdQ3HZWonJLh3SZZl%2FqJGPVQyDGmGrV4qVdrCx3E5avG9C%2BP5Fl6xrI4CvMO9HONWagmF2ftSiNFT7MEa53%2BOPNAdjjHqeUDgrQwSTmFbFNlMVj5OguN20zPimEU8XOmaUPD60Re8E0lXxTMv5U7Dvvu8zEnCp30LA62Atpt0TqteU3BYG0EIDcfcDIG%2B301zDavQfRVkMaUWOIm21H1qSBpj&X-Amz-Signature=b1272a841c286777a60e7adf900d73ea092652bfbe97c9c8e7e4e6778d8d251b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYSLP5D%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdpoINx75gDOBSsO%2BprMTeNJ7JNRasgFxFBnlw54K6cAiAKIl4kTA9ak08bLz8xwMrHllpH0AZb5G69YokNZGBVeiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtGcoh3rX%2B14R7GbKtwDRPESJvo3%2Bo4KOde%2F0i0%2FonuL6qv3ITbnCEshW7cFG0jy%2FO2y55fl6gDY%2FEI1chV3I0dg4tNnT8tE1GkYpbAWCZOI1zPTfgFfj5AtSAqwtbCea6CIZpoSj2wlZu2fE%2FfMWnzmVoqm3Aci2prxrQC3NtzZa4sbquuEC2Njutn3PZvPM17fP1u9us2Us0dLB35MfongN2%2B8Ji17g%2BmS%2FyfJ%2B78GaCNQq6dlLoSoBrFl7w9kfQxLI%2B3u%2FipdH4T3RYhDcVbgb1uKJgFBcuDxrIn7419DePqg4UDtMzfauc%2BxwHQzNZpDo3s3Te%2FvEmOEg7tCzluWd6rM1ixFR3L20TE8gyrMF%2F2e%2FUvciK%2FfDb13ADFxfXpVUCJGdtUNVnEhTnGBZllKnRzr2ZfAKo9za4zZBRcLFYacAhPKlzF7IdARRI3H8SW6mbayINTlC6f1PnmXkTaFDFCIk8l63KytR2eD5XtzQWz6vcqIhMX1vbb14n%2FQhktmynLZu%2B5FTV7ZOTiI5W%2Bz21R2MNf8%2FmWyz77PMRmEDO5Y8ENEnqbS4ZEQqf%2F3ujBzDV9SUBV9cyP8%2Fl8GZTi13%2BXOAmQsrYYw2KzEOlGZh7XPiXS5oXqZZGGlEks1aIKN1Vh62%2B6UPuYw5IaxvQY6pgFwGarmdQ3HZWonJLh3SZZl%2FqJGPVQyDGmGrV4qVdrCx3E5avG9C%2BP5Fl6xrI4CvMO9HONWagmF2ftSiNFT7MEa53%2BOPNAdjjHqeUDgrQwSTmFbFNlMVj5OguN20zPimEU8XOmaUPD60Re8E0lXxTMv5U7Dvvu8zEnCp30LA62Atpt0TqteU3BYG0EIDcfcDIG%2B301zDavQfRVkMaUWOIm21H1qSBpj&X-Amz-Signature=00a6a3bf064b9820fe6b39e849b0eba21934778e441aa5750027938fa6f5364f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
