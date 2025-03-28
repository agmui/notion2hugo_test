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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJFIRAG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPEY4DRlcFexXhKKXjBeQs0Hk1Y%2FMiPD0IyoSag2gSwIhAIoYfvvK0Yj8AosLLUZKIEfpCjJVRKNv%2FZ2a1XO8D7ehKv8DCFoQABoMNjM3NDIzMTgzODA1Igy66PjRKDtzrgMU7ZAq3APKh%2Bl5d6tf7AuVP3zrp9YfS2z%2BMdELr%2B8soSrX3cq4teL8t5Wfh6rKpQWbLwmDOFhMc3Ukd8NAbyrJ6pFCuumYQnClLlheHCgedDEHyUeEYNeSSHt2hL4mj8isIRHugvOefAsfaM8XhZ0KFbTlPtOQdxSxq9RZPqaN22rIcqK%2FgN%2FuPhGHuKcr%2BQ6KoftuMmwcrV2ZDrMfIwH79OscWcQov2pvniGPF1Q5icCKfEDISX8%2Bm%2B5CNu0UMv4xn6%2FCZVIQRGyOVNSL9JuspyxrT84RDuG3YQbVllgsSGzPFTJw9S%2FdiMs2EPWxTkHG2wiZjjI1%2FiqjlNPuYPhDxIIizA938jYpL4WLhrIneAhtwPc4I49CLk%2BzBoDrTjm2xz0KWL6L8tQD1NBeHEHvlWp1Ju5EL2gOpa%2F%2BfzUf84W0lNnDP5hd11FY30vBkzu9yMcZ3ruESMjQA%2BvdTRjWUUsLwgh98Wa9s41Uff1YjjHo7EEiOxlN1jA5t8xWzexkE4GMwO7nIs9k9VWcR5BbfeGjFabT5OwQ6dsCXaXUC3MBjWkoGQF1R%2BxPbm4D6OPpJv0gSPXLiKu3oqjDBNGornjrWQkAJqtCDmbb06INU7PuIvdGVYRgk0s56nePYcBLxzDNv5m%2FBjqkAS%2F8jYtsDQ9%2B9NhkyLxmw2IESWCr6wcYd%2BISw2Q5ogSmZGJ7gKPQKZhZml31Pu0OV8XLFIXXNOWL3OfbV5v%2F8jB6pW8roUviqQKrURg8OtYKoPC3sW7Wnu2PK1UZk99zs5lP2xbXTaEP0CcfK1Ui5yI%2FSzGd7Im8d5Hk5eS0KcqmIjbBMdEFXXFXs2u7l3w1Xgv3jo4PBXT2j03SKoveXdmvSdpR&X-Amz-Signature=4f64d03f837634883be32374ded71f960ad8650539b8606ccc6873ca51f26179&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJFIRAG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPEY4DRlcFexXhKKXjBeQs0Hk1Y%2FMiPD0IyoSag2gSwIhAIoYfvvK0Yj8AosLLUZKIEfpCjJVRKNv%2FZ2a1XO8D7ehKv8DCFoQABoMNjM3NDIzMTgzODA1Igy66PjRKDtzrgMU7ZAq3APKh%2Bl5d6tf7AuVP3zrp9YfS2z%2BMdELr%2B8soSrX3cq4teL8t5Wfh6rKpQWbLwmDOFhMc3Ukd8NAbyrJ6pFCuumYQnClLlheHCgedDEHyUeEYNeSSHt2hL4mj8isIRHugvOefAsfaM8XhZ0KFbTlPtOQdxSxq9RZPqaN22rIcqK%2FgN%2FuPhGHuKcr%2BQ6KoftuMmwcrV2ZDrMfIwH79OscWcQov2pvniGPF1Q5icCKfEDISX8%2Bm%2B5CNu0UMv4xn6%2FCZVIQRGyOVNSL9JuspyxrT84RDuG3YQbVllgsSGzPFTJw9S%2FdiMs2EPWxTkHG2wiZjjI1%2FiqjlNPuYPhDxIIizA938jYpL4WLhrIneAhtwPc4I49CLk%2BzBoDrTjm2xz0KWL6L8tQD1NBeHEHvlWp1Ju5EL2gOpa%2F%2BfzUf84W0lNnDP5hd11FY30vBkzu9yMcZ3ruESMjQA%2BvdTRjWUUsLwgh98Wa9s41Uff1YjjHo7EEiOxlN1jA5t8xWzexkE4GMwO7nIs9k9VWcR5BbfeGjFabT5OwQ6dsCXaXUC3MBjWkoGQF1R%2BxPbm4D6OPpJv0gSPXLiKu3oqjDBNGornjrWQkAJqtCDmbb06INU7PuIvdGVYRgk0s56nePYcBLxzDNv5m%2FBjqkAS%2F8jYtsDQ9%2B9NhkyLxmw2IESWCr6wcYd%2BISw2Q5ogSmZGJ7gKPQKZhZml31Pu0OV8XLFIXXNOWL3OfbV5v%2F8jB6pW8roUviqQKrURg8OtYKoPC3sW7Wnu2PK1UZk99zs5lP2xbXTaEP0CcfK1Ui5yI%2FSzGd7Im8d5Hk5eS0KcqmIjbBMdEFXXFXs2u7l3w1Xgv3jo4PBXT2j03SKoveXdmvSdpR&X-Amz-Signature=455b5bab6c933ecae27918536f78d639999539c52271a4860f5d2b2b2d420a07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJFIRAG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPEY4DRlcFexXhKKXjBeQs0Hk1Y%2FMiPD0IyoSag2gSwIhAIoYfvvK0Yj8AosLLUZKIEfpCjJVRKNv%2FZ2a1XO8D7ehKv8DCFoQABoMNjM3NDIzMTgzODA1Igy66PjRKDtzrgMU7ZAq3APKh%2Bl5d6tf7AuVP3zrp9YfS2z%2BMdELr%2B8soSrX3cq4teL8t5Wfh6rKpQWbLwmDOFhMc3Ukd8NAbyrJ6pFCuumYQnClLlheHCgedDEHyUeEYNeSSHt2hL4mj8isIRHugvOefAsfaM8XhZ0KFbTlPtOQdxSxq9RZPqaN22rIcqK%2FgN%2FuPhGHuKcr%2BQ6KoftuMmwcrV2ZDrMfIwH79OscWcQov2pvniGPF1Q5icCKfEDISX8%2Bm%2B5CNu0UMv4xn6%2FCZVIQRGyOVNSL9JuspyxrT84RDuG3YQbVllgsSGzPFTJw9S%2FdiMs2EPWxTkHG2wiZjjI1%2FiqjlNPuYPhDxIIizA938jYpL4WLhrIneAhtwPc4I49CLk%2BzBoDrTjm2xz0KWL6L8tQD1NBeHEHvlWp1Ju5EL2gOpa%2F%2BfzUf84W0lNnDP5hd11FY30vBkzu9yMcZ3ruESMjQA%2BvdTRjWUUsLwgh98Wa9s41Uff1YjjHo7EEiOxlN1jA5t8xWzexkE4GMwO7nIs9k9VWcR5BbfeGjFabT5OwQ6dsCXaXUC3MBjWkoGQF1R%2BxPbm4D6OPpJv0gSPXLiKu3oqjDBNGornjrWQkAJqtCDmbb06INU7PuIvdGVYRgk0s56nePYcBLxzDNv5m%2FBjqkAS%2F8jYtsDQ9%2B9NhkyLxmw2IESWCr6wcYd%2BISw2Q5ogSmZGJ7gKPQKZhZml31Pu0OV8XLFIXXNOWL3OfbV5v%2F8jB6pW8roUviqQKrURg8OtYKoPC3sW7Wnu2PK1UZk99zs5lP2xbXTaEP0CcfK1Ui5yI%2FSzGd7Im8d5Hk5eS0KcqmIjbBMdEFXXFXs2u7l3w1Xgv3jo4PBXT2j03SKoveXdmvSdpR&X-Amz-Signature=8f6b3fab0a13a62293594f3950de4f1697f635d36ff072e12f28e3111669d3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
