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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WJ4M2D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCsFwBzMamDolP7UXwU8N%2BkcwzV78psQbSwvEOXInzn1QIgCWrLt1meAenQltcYQYL12JnHfYObmNOnQK7WSu3Q80EqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtOGsUtE14tI%2BykRCrcA0r4SXRoIsZJLEGTr45b0EE7scbd9MtuyvigoW1bvNwK9%2BeRkqYa2PWcJtpdQzWecYulf4XRC9vE%2BcR5ndNpeY7%2BkWB9fbMPsp9TAXbOA3%2BkDxRJziOvl8AM%2BGgk9O73gFV24r0%2Bu2W08mIcDv3aCkQEALmRJwI03lwyk8v%2FqFF%2BMxbsXE4b7IslF1QCeS2ThFNexgHpoO%2BPINhyktDcxiR5%2FBAJXGx0DgvKhBYR5ss%2FsoSY7Y%2B2am6eDm2Qnp%2B5uDItk9QcUF5f4iD5kXibZEOR7BnTJkqvhRlxN%2BzGzuEA3ZiNwsD5kfJB2X1vR4RHPVphhByi8etcP6sJD%2BFONqOW4Tk%2FzJDcRDRY%2BMjuU9NQLpm9NqCB40e5mSXLLG1oqi62Mti%2BuxVihr%2FzVldXnTA8Nbqews5g6yCWSxJnJUajIDZ9kMk71g4OK9ByHyckOccBmoO8lN6I4SNkOFgQ6a0uj8FTryA5ylSl2h%2F%2B8hQi1k5HyHd8uBcTsk6cpBgVNpdklD9atgSMFNmtp51Oq%2FqlimMq%2FENlVLoZ8DjGJm%2FNm7sIqpjCkfFOAWjwmKk%2BorrjoUgKO2WrqcXatWRjklL8xvvjH7Z1IHyf63dU4NIqwlW1DOu8Bak3trF6MLzJvsEGOqUBgbdAvHZ%2FzVCXg4cGyyeeyC24JFSHIItr8eOkLrPYyEvXMkvc1r3FF8oBHB5H3oNBS0I%2BuZSBwDIc7S2HTQ3vI%2B%2Frw1Iz2r0%2F39PODGHXhGVR8BoIstEN%2FQodvLEXX1xHpBlEIkFcQOtGW%2FpZ%2FAofYCsdByEBJ6cUWsP3HneEv07ZjaSiOGKnIO7fxVlk6tW1PeSDgVhvAoCsWrNCpT79xKoQroJP&X-Amz-Signature=9460be04006e31bb065d6c155a1614662ee6fa1e726f7c8d22c438b2eea84d78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WJ4M2D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCsFwBzMamDolP7UXwU8N%2BkcwzV78psQbSwvEOXInzn1QIgCWrLt1meAenQltcYQYL12JnHfYObmNOnQK7WSu3Q80EqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtOGsUtE14tI%2BykRCrcA0r4SXRoIsZJLEGTr45b0EE7scbd9MtuyvigoW1bvNwK9%2BeRkqYa2PWcJtpdQzWecYulf4XRC9vE%2BcR5ndNpeY7%2BkWB9fbMPsp9TAXbOA3%2BkDxRJziOvl8AM%2BGgk9O73gFV24r0%2Bu2W08mIcDv3aCkQEALmRJwI03lwyk8v%2FqFF%2BMxbsXE4b7IslF1QCeS2ThFNexgHpoO%2BPINhyktDcxiR5%2FBAJXGx0DgvKhBYR5ss%2FsoSY7Y%2B2am6eDm2Qnp%2B5uDItk9QcUF5f4iD5kXibZEOR7BnTJkqvhRlxN%2BzGzuEA3ZiNwsD5kfJB2X1vR4RHPVphhByi8etcP6sJD%2BFONqOW4Tk%2FzJDcRDRY%2BMjuU9NQLpm9NqCB40e5mSXLLG1oqi62Mti%2BuxVihr%2FzVldXnTA8Nbqews5g6yCWSxJnJUajIDZ9kMk71g4OK9ByHyckOccBmoO8lN6I4SNkOFgQ6a0uj8FTryA5ylSl2h%2F%2B8hQi1k5HyHd8uBcTsk6cpBgVNpdklD9atgSMFNmtp51Oq%2FqlimMq%2FENlVLoZ8DjGJm%2FNm7sIqpjCkfFOAWjwmKk%2BorrjoUgKO2WrqcXatWRjklL8xvvjH7Z1IHyf63dU4NIqwlW1DOu8Bak3trF6MLzJvsEGOqUBgbdAvHZ%2FzVCXg4cGyyeeyC24JFSHIItr8eOkLrPYyEvXMkvc1r3FF8oBHB5H3oNBS0I%2BuZSBwDIc7S2HTQ3vI%2B%2Frw1Iz2r0%2F39PODGHXhGVR8BoIstEN%2FQodvLEXX1xHpBlEIkFcQOtGW%2FpZ%2FAofYCsdByEBJ6cUWsP3HneEv07ZjaSiOGKnIO7fxVlk6tW1PeSDgVhvAoCsWrNCpT79xKoQroJP&X-Amz-Signature=57ef83d299de0f1fa1a14b96732d23b5cd4dd13915764ac794327d6f3a0808d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WJ4M2D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCsFwBzMamDolP7UXwU8N%2BkcwzV78psQbSwvEOXInzn1QIgCWrLt1meAenQltcYQYL12JnHfYObmNOnQK7WSu3Q80EqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtOGsUtE14tI%2BykRCrcA0r4SXRoIsZJLEGTr45b0EE7scbd9MtuyvigoW1bvNwK9%2BeRkqYa2PWcJtpdQzWecYulf4XRC9vE%2BcR5ndNpeY7%2BkWB9fbMPsp9TAXbOA3%2BkDxRJziOvl8AM%2BGgk9O73gFV24r0%2Bu2W08mIcDv3aCkQEALmRJwI03lwyk8v%2FqFF%2BMxbsXE4b7IslF1QCeS2ThFNexgHpoO%2BPINhyktDcxiR5%2FBAJXGx0DgvKhBYR5ss%2FsoSY7Y%2B2am6eDm2Qnp%2B5uDItk9QcUF5f4iD5kXibZEOR7BnTJkqvhRlxN%2BzGzuEA3ZiNwsD5kfJB2X1vR4RHPVphhByi8etcP6sJD%2BFONqOW4Tk%2FzJDcRDRY%2BMjuU9NQLpm9NqCB40e5mSXLLG1oqi62Mti%2BuxVihr%2FzVldXnTA8Nbqews5g6yCWSxJnJUajIDZ9kMk71g4OK9ByHyckOccBmoO8lN6I4SNkOFgQ6a0uj8FTryA5ylSl2h%2F%2B8hQi1k5HyHd8uBcTsk6cpBgVNpdklD9atgSMFNmtp51Oq%2FqlimMq%2FENlVLoZ8DjGJm%2FNm7sIqpjCkfFOAWjwmKk%2BorrjoUgKO2WrqcXatWRjklL8xvvjH7Z1IHyf63dU4NIqwlW1DOu8Bak3trF6MLzJvsEGOqUBgbdAvHZ%2FzVCXg4cGyyeeyC24JFSHIItr8eOkLrPYyEvXMkvc1r3FF8oBHB5H3oNBS0I%2BuZSBwDIc7S2HTQ3vI%2B%2Frw1Iz2r0%2F39PODGHXhGVR8BoIstEN%2FQodvLEXX1xHpBlEIkFcQOtGW%2FpZ%2FAofYCsdByEBJ6cUWsP3HneEv07ZjaSiOGKnIO7fxVlk6tW1PeSDgVhvAoCsWrNCpT79xKoQroJP&X-Amz-Signature=88fcf46eda63809607765106d94a01e12db32f2d0fe56db020fbda80e1659f48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
