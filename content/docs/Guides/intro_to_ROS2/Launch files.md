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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHED5EC6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAMXXtvo2hZME9RktEG%2BXtM%2FYVfWH%2F0BAXe%2BO6raMLmzAiBGalUwhDSh82HR5WoK6itPsLqsDEWt4Obh0BFTkgU14yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZkcFZzuf6oFa0bMSKtwDakVCMbnHCA1TidbKBs6dGxlsktRD8LOZFPEG2rm2aNgWgc5rpEoNL5GuUHpm58USI6%2FEUJBj194KI9e%2B6ET0xPZCfTZ7sd6RlSr7H6yNR%2FwsASI2%2FbP3IYAXuJqQAbyMIAm9VoYd%2B3LvTYk2jgFnKVsfNOz7Jc%2B5IDqNQ%2B%2BvPbxQymIZAETjkcPLK5Ztxg6xLsnc1%2BMQ4aWA2TUbhq9Z75wVdbveFXWOV8g%2F7YHOZDQspQPwOPqUp9xpoC4HNbJWx%2FNYSRjIzaINFVdhkQEFlbhqHv7UOHuvA7Tr6eXxvUwSIQqqBjQkgw5EyaA747i2X%2F8aZyAPkgPTMPf5Y7BQDtlwNmypM5axKoWww0QyvfO8vGZWPxdOnNZBBVfeQkqZULZb5chULW%2BcuQ1RKwTbpQ%2F4hheNW10OvH5oNglB6EpwGOhqOP5MY4Qg89bwiZd1uz%2Flvd7I64ekWR%2FIvTHVO3qmR5XXt8c%2B%2BDXOOEsK9LzVPhJLO24PE71Uk5WOb2WGixO32H2wSukYpGfIwEMvC8b7GhHYup8gt1pQWISfwew1Sam3PsV1keX%2ByMkDR4eIAGOSQfMCU8E0Fvly0xIQiUq61rLRDEMZBomce1vZmsYFK4vFrmZFGhluAX0wy8fCvQY6pgGi15SR6Kqk%2BFVBnjxzGngOdWQfTSo2X9H3DnuFBKdAXaQqSxQIS0aSXSUSJ4JPL67jbIFEIf8O%2BdTuver07n0aJVJiAvQYTND%2FyIbDJADdVQoAsmu72KdX%2BE2t6760c7VmNXdwtxtZTNnjHHgVoG2lOg1MctY9CMpdRV%2F1Yt94ZuqMZDFoxX8DuSPeo4TYo1gbz%2BkAphF1qpUd0OZ6ETiPwRJ1TV17&X-Amz-Signature=6bcb358209e4f84eaef05b8b7d78c4ddb86f8b27d5d05ee8b0d346962e04e8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHED5EC6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAMXXtvo2hZME9RktEG%2BXtM%2FYVfWH%2F0BAXe%2BO6raMLmzAiBGalUwhDSh82HR5WoK6itPsLqsDEWt4Obh0BFTkgU14yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZkcFZzuf6oFa0bMSKtwDakVCMbnHCA1TidbKBs6dGxlsktRD8LOZFPEG2rm2aNgWgc5rpEoNL5GuUHpm58USI6%2FEUJBj194KI9e%2B6ET0xPZCfTZ7sd6RlSr7H6yNR%2FwsASI2%2FbP3IYAXuJqQAbyMIAm9VoYd%2B3LvTYk2jgFnKVsfNOz7Jc%2B5IDqNQ%2B%2BvPbxQymIZAETjkcPLK5Ztxg6xLsnc1%2BMQ4aWA2TUbhq9Z75wVdbveFXWOV8g%2F7YHOZDQspQPwOPqUp9xpoC4HNbJWx%2FNYSRjIzaINFVdhkQEFlbhqHv7UOHuvA7Tr6eXxvUwSIQqqBjQkgw5EyaA747i2X%2F8aZyAPkgPTMPf5Y7BQDtlwNmypM5axKoWww0QyvfO8vGZWPxdOnNZBBVfeQkqZULZb5chULW%2BcuQ1RKwTbpQ%2F4hheNW10OvH5oNglB6EpwGOhqOP5MY4Qg89bwiZd1uz%2Flvd7I64ekWR%2FIvTHVO3qmR5XXt8c%2B%2BDXOOEsK9LzVPhJLO24PE71Uk5WOb2WGixO32H2wSukYpGfIwEMvC8b7GhHYup8gt1pQWISfwew1Sam3PsV1keX%2ByMkDR4eIAGOSQfMCU8E0Fvly0xIQiUq61rLRDEMZBomce1vZmsYFK4vFrmZFGhluAX0wy8fCvQY6pgGi15SR6Kqk%2BFVBnjxzGngOdWQfTSo2X9H3DnuFBKdAXaQqSxQIS0aSXSUSJ4JPL67jbIFEIf8O%2BdTuver07n0aJVJiAvQYTND%2FyIbDJADdVQoAsmu72KdX%2BE2t6760c7VmNXdwtxtZTNnjHHgVoG2lOg1MctY9CMpdRV%2F1Yt94ZuqMZDFoxX8DuSPeo4TYo1gbz%2BkAphF1qpUd0OZ6ETiPwRJ1TV17&X-Amz-Signature=c7b3d5d2ce44ccbf139d8b6cad2be1a673ad0368bd33050c70111a2682f23ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHED5EC6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAMXXtvo2hZME9RktEG%2BXtM%2FYVfWH%2F0BAXe%2BO6raMLmzAiBGalUwhDSh82HR5WoK6itPsLqsDEWt4Obh0BFTkgU14yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZkcFZzuf6oFa0bMSKtwDakVCMbnHCA1TidbKBs6dGxlsktRD8LOZFPEG2rm2aNgWgc5rpEoNL5GuUHpm58USI6%2FEUJBj194KI9e%2B6ET0xPZCfTZ7sd6RlSr7H6yNR%2FwsASI2%2FbP3IYAXuJqQAbyMIAm9VoYd%2B3LvTYk2jgFnKVsfNOz7Jc%2B5IDqNQ%2B%2BvPbxQymIZAETjkcPLK5Ztxg6xLsnc1%2BMQ4aWA2TUbhq9Z75wVdbveFXWOV8g%2F7YHOZDQspQPwOPqUp9xpoC4HNbJWx%2FNYSRjIzaINFVdhkQEFlbhqHv7UOHuvA7Tr6eXxvUwSIQqqBjQkgw5EyaA747i2X%2F8aZyAPkgPTMPf5Y7BQDtlwNmypM5axKoWww0QyvfO8vGZWPxdOnNZBBVfeQkqZULZb5chULW%2BcuQ1RKwTbpQ%2F4hheNW10OvH5oNglB6EpwGOhqOP5MY4Qg89bwiZd1uz%2Flvd7I64ekWR%2FIvTHVO3qmR5XXt8c%2B%2BDXOOEsK9LzVPhJLO24PE71Uk5WOb2WGixO32H2wSukYpGfIwEMvC8b7GhHYup8gt1pQWISfwew1Sam3PsV1keX%2ByMkDR4eIAGOSQfMCU8E0Fvly0xIQiUq61rLRDEMZBomce1vZmsYFK4vFrmZFGhluAX0wy8fCvQY6pgGi15SR6Kqk%2BFVBnjxzGngOdWQfTSo2X9H3DnuFBKdAXaQqSxQIS0aSXSUSJ4JPL67jbIFEIf8O%2BdTuver07n0aJVJiAvQYTND%2FyIbDJADdVQoAsmu72KdX%2BE2t6760c7VmNXdwtxtZTNnjHHgVoG2lOg1MctY9CMpdRV%2F1Yt94ZuqMZDFoxX8DuSPeo4TYo1gbz%2BkAphF1qpUd0OZ6ETiPwRJ1TV17&X-Amz-Signature=ab44a7033753d65d1bffcef7e9c30d20a021d33ad1a00eaeca6d716f7b5b20ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
