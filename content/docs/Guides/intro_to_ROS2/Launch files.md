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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ILQRFK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs7g2fnIz4LqW%2BBebClAJzly4NWpZZKruCfGMkdZvstAiEA4S94uOXsovi95E43niTKJ5q2%2B0ClupsSmXCOxADE%2Fh4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6YayM5c9pJ49KaWircA069X2yLN7g5xUBcFgmuT6bhkgOGl4bGCAunC%2Bjrh5nqX3YGcKKOGHxBZyEPRS2Z4I2Qffaenf%2FWVg2FrM8Vghe4x5ue%2FR8OjS1mtrPaP76%2FwlDn71ulnQkFxUvuODca4o5Ub%2Bm8Bb3ZicCeyqg6jiAR7CytvhVWtoyTV4LY4YVOoxeq5WBh7YKXdiwiefn1tsSCQna32m4%2BDIAfHBj4%2Ftv9Pj7DjMwqDDWAAQLhByXqZ0UlsQYUxX%2F8KuM29yxokLwpK5CqVFNwLSZf3pQD3jpvfTR0jQGHYtfZ4IINMy1YJBIqdCEUpVwb9GG3M8UDjPzDPe7WOdrecJ0lrbd1ntnXTMFQM9pFzdjm6NI02hGuetYxQUVSsCuUHxiuHGXHkW%2BOZAlnNY5ODUxHLDQ%2FQk7OJaEeKcE1Ey%2F8cULNO0SrNwG76rpgmTyWyIgV0nL%2BI7KQP2xvfVtqGgFz4FhuldBqtbbmBUb3GTJbwlpbe29OunbHjc8zjEdIW2rBCasVHIdLzhCmDmr1EIBhfDcHoY%2BWg4TS3OGwKQunPrtjwpHi2OFXApyueAbOG0Mr6YlhU0Hhx6NulqPOTsEx4WVUxHQ%2F7hzXFB6yBEz6km84dcemGey4GAS083okedYeMIqO%2BMMGOqUB6q7PqT5mfnmfosT5bWLGmbPzEiNxP4VEvtsWeG1v%2BytVQgsxI9eFlkZwVHbKohbcAyVGkqAWdCyOMiEqcw74QiALQ8W18pQaowYV05qjzKEFM5Zt57%2BC1mxDIDTLLoLHDv7QzaLLU6yniRIJr77320u6dHdqR4bUFIDcOLIJBKeVJx3D1En3K2k1fzqcFeGsGaC4CIrsEhLgY6VHrlvznFxDORuy&X-Amz-Signature=187758f6f6df58e50c99011264130bb2cb3f5aeb4189c9a986928701f6daf4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ILQRFK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs7g2fnIz4LqW%2BBebClAJzly4NWpZZKruCfGMkdZvstAiEA4S94uOXsovi95E43niTKJ5q2%2B0ClupsSmXCOxADE%2Fh4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6YayM5c9pJ49KaWircA069X2yLN7g5xUBcFgmuT6bhkgOGl4bGCAunC%2Bjrh5nqX3YGcKKOGHxBZyEPRS2Z4I2Qffaenf%2FWVg2FrM8Vghe4x5ue%2FR8OjS1mtrPaP76%2FwlDn71ulnQkFxUvuODca4o5Ub%2Bm8Bb3ZicCeyqg6jiAR7CytvhVWtoyTV4LY4YVOoxeq5WBh7YKXdiwiefn1tsSCQna32m4%2BDIAfHBj4%2Ftv9Pj7DjMwqDDWAAQLhByXqZ0UlsQYUxX%2F8KuM29yxokLwpK5CqVFNwLSZf3pQD3jpvfTR0jQGHYtfZ4IINMy1YJBIqdCEUpVwb9GG3M8UDjPzDPe7WOdrecJ0lrbd1ntnXTMFQM9pFzdjm6NI02hGuetYxQUVSsCuUHxiuHGXHkW%2BOZAlnNY5ODUxHLDQ%2FQk7OJaEeKcE1Ey%2F8cULNO0SrNwG76rpgmTyWyIgV0nL%2BI7KQP2xvfVtqGgFz4FhuldBqtbbmBUb3GTJbwlpbe29OunbHjc8zjEdIW2rBCasVHIdLzhCmDmr1EIBhfDcHoY%2BWg4TS3OGwKQunPrtjwpHi2OFXApyueAbOG0Mr6YlhU0Hhx6NulqPOTsEx4WVUxHQ%2F7hzXFB6yBEz6km84dcemGey4GAS083okedYeMIqO%2BMMGOqUB6q7PqT5mfnmfosT5bWLGmbPzEiNxP4VEvtsWeG1v%2BytVQgsxI9eFlkZwVHbKohbcAyVGkqAWdCyOMiEqcw74QiALQ8W18pQaowYV05qjzKEFM5Zt57%2BC1mxDIDTLLoLHDv7QzaLLU6yniRIJr77320u6dHdqR4bUFIDcOLIJBKeVJx3D1En3K2k1fzqcFeGsGaC4CIrsEhLgY6VHrlvznFxDORuy&X-Amz-Signature=eb5c9af0a29e2f6abdafc70557317913c638c0d2c44ff548d5e9e5f6bd9561cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ILQRFK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs7g2fnIz4LqW%2BBebClAJzly4NWpZZKruCfGMkdZvstAiEA4S94uOXsovi95E43niTKJ5q2%2B0ClupsSmXCOxADE%2Fh4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6YayM5c9pJ49KaWircA069X2yLN7g5xUBcFgmuT6bhkgOGl4bGCAunC%2Bjrh5nqX3YGcKKOGHxBZyEPRS2Z4I2Qffaenf%2FWVg2FrM8Vghe4x5ue%2FR8OjS1mtrPaP76%2FwlDn71ulnQkFxUvuODca4o5Ub%2Bm8Bb3ZicCeyqg6jiAR7CytvhVWtoyTV4LY4YVOoxeq5WBh7YKXdiwiefn1tsSCQna32m4%2BDIAfHBj4%2Ftv9Pj7DjMwqDDWAAQLhByXqZ0UlsQYUxX%2F8KuM29yxokLwpK5CqVFNwLSZf3pQD3jpvfTR0jQGHYtfZ4IINMy1YJBIqdCEUpVwb9GG3M8UDjPzDPe7WOdrecJ0lrbd1ntnXTMFQM9pFzdjm6NI02hGuetYxQUVSsCuUHxiuHGXHkW%2BOZAlnNY5ODUxHLDQ%2FQk7OJaEeKcE1Ey%2F8cULNO0SrNwG76rpgmTyWyIgV0nL%2BI7KQP2xvfVtqGgFz4FhuldBqtbbmBUb3GTJbwlpbe29OunbHjc8zjEdIW2rBCasVHIdLzhCmDmr1EIBhfDcHoY%2BWg4TS3OGwKQunPrtjwpHi2OFXApyueAbOG0Mr6YlhU0Hhx6NulqPOTsEx4WVUxHQ%2F7hzXFB6yBEz6km84dcemGey4GAS083okedYeMIqO%2BMMGOqUB6q7PqT5mfnmfosT5bWLGmbPzEiNxP4VEvtsWeG1v%2BytVQgsxI9eFlkZwVHbKohbcAyVGkqAWdCyOMiEqcw74QiALQ8W18pQaowYV05qjzKEFM5Zt57%2BC1mxDIDTLLoLHDv7QzaLLU6yniRIJr77320u6dHdqR4bUFIDcOLIJBKeVJx3D1En3K2k1fzqcFeGsGaC4CIrsEhLgY6VHrlvznFxDORuy&X-Amz-Signature=e73dd8d96a388ccfe1c2ac56698e19967659ba712f004ccb7c0d744c12d2dd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
