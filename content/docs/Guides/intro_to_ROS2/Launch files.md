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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJS2M74%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFdWnsHv94tka%2BFgnPJPgMLm4TrCINjnDzRTNwAFBcQAiEAmPgyY1c5%2B%2BkhHgBotgjxpgo4aZPDjCM1UJC%2FqHqZeNgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsGgyq6wL3qNGq3YircA3pLeODvnIJpdNt79m%2BD1FwKlaDKtARtORK3vVCSwkrObUV0Q4aFZTOkoD70Bd3Ao55kem1CfdWc4Q36be3TM3lp02sb%2BpVkXOIiGeLf4zLyfaGbvX%2FJWGUCPI9O8%2FvoC2rwP8XfJGkYzGcLsMh8KsZ6Halq12Ik6VIUdCkZlZjlgM8bQMv0PVqjzR9zEwo1jYZ778JemGVXXzLOexgExleK4zTQk8g7JTC8JD6wVLU0R7reakupZgSJNnKfK3yweu4eYJtjTOVC4z8zZ6fVDxHZjlvxZiHi9yDPkC7N8lms9H9ek1Yf7IVqvAHyGkwAjOrPEkPK2QQFQuPXRqHtd9mt%2BsBgoLqPFBI75AwJ8tHJ5OtuokNZ5K3gcsW8eW1AFcDuHQOtAgJUEJu3mOYULi1ltm4VcX%2BX3Ff9R0FVRW18JEjCjNP%2BdNTB9r5%2BCdG3AgrsMvblyLuhHr5lYpE%2B5OzsWwtVemGEbuIDqlRid1WXg8%2BNn%2F1IZedmzi%2FFWksGiddzPMdBtSgFkPC8W%2FhEo1lOCNtwGDL%2BZJ68uuuVzPSNLyJtYe%2Bh0QGJRvCde9uEtl0hT06t0GM6YsrpihW1TqM4xIYYSbCwbqLM49V0jnmcmcYgh8kEXbYkx9DOMJDC8sMGOqUBOS3apuoS%2BwPBPClG34iJi7q9V2NrBaQjatC3%2Fv2C8dI9QFXgfWmg90H8Mv%2BLMY5VRsX917P6Vmw3Bo6NP7tbvlfMAlUfhnVHLWOqlpgSb0AxD8jw5d%2B8yVjv0iHR9%2F8s1vMSBiOIghfrF6n5rVgX8C6Ysms0r4gCAvVX3kAALd2X7%2B4Vcvavxy9A7gTdH4thHlyYAhuZwdAbxklQc4ZGXgiiNT6b&X-Amz-Signature=535ba0616f4d317f0099772658716936e66baa1637b597667098b71ff66f4c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJS2M74%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFdWnsHv94tka%2BFgnPJPgMLm4TrCINjnDzRTNwAFBcQAiEAmPgyY1c5%2B%2BkhHgBotgjxpgo4aZPDjCM1UJC%2FqHqZeNgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsGgyq6wL3qNGq3YircA3pLeODvnIJpdNt79m%2BD1FwKlaDKtARtORK3vVCSwkrObUV0Q4aFZTOkoD70Bd3Ao55kem1CfdWc4Q36be3TM3lp02sb%2BpVkXOIiGeLf4zLyfaGbvX%2FJWGUCPI9O8%2FvoC2rwP8XfJGkYzGcLsMh8KsZ6Halq12Ik6VIUdCkZlZjlgM8bQMv0PVqjzR9zEwo1jYZ778JemGVXXzLOexgExleK4zTQk8g7JTC8JD6wVLU0R7reakupZgSJNnKfK3yweu4eYJtjTOVC4z8zZ6fVDxHZjlvxZiHi9yDPkC7N8lms9H9ek1Yf7IVqvAHyGkwAjOrPEkPK2QQFQuPXRqHtd9mt%2BsBgoLqPFBI75AwJ8tHJ5OtuokNZ5K3gcsW8eW1AFcDuHQOtAgJUEJu3mOYULi1ltm4VcX%2BX3Ff9R0FVRW18JEjCjNP%2BdNTB9r5%2BCdG3AgrsMvblyLuhHr5lYpE%2B5OzsWwtVemGEbuIDqlRid1WXg8%2BNn%2F1IZedmzi%2FFWksGiddzPMdBtSgFkPC8W%2FhEo1lOCNtwGDL%2BZJ68uuuVzPSNLyJtYe%2Bh0QGJRvCde9uEtl0hT06t0GM6YsrpihW1TqM4xIYYSbCwbqLM49V0jnmcmcYgh8kEXbYkx9DOMJDC8sMGOqUBOS3apuoS%2BwPBPClG34iJi7q9V2NrBaQjatC3%2Fv2C8dI9QFXgfWmg90H8Mv%2BLMY5VRsX917P6Vmw3Bo6NP7tbvlfMAlUfhnVHLWOqlpgSb0AxD8jw5d%2B8yVjv0iHR9%2F8s1vMSBiOIghfrF6n5rVgX8C6Ysms0r4gCAvVX3kAALd2X7%2B4Vcvavxy9A7gTdH4thHlyYAhuZwdAbxklQc4ZGXgiiNT6b&X-Amz-Signature=60114c356ecf18781c763389ae5444820c9ce1f512d4b752afeeef29851bb883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJS2M74%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFdWnsHv94tka%2BFgnPJPgMLm4TrCINjnDzRTNwAFBcQAiEAmPgyY1c5%2B%2BkhHgBotgjxpgo4aZPDjCM1UJC%2FqHqZeNgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsGgyq6wL3qNGq3YircA3pLeODvnIJpdNt79m%2BD1FwKlaDKtARtORK3vVCSwkrObUV0Q4aFZTOkoD70Bd3Ao55kem1CfdWc4Q36be3TM3lp02sb%2BpVkXOIiGeLf4zLyfaGbvX%2FJWGUCPI9O8%2FvoC2rwP8XfJGkYzGcLsMh8KsZ6Halq12Ik6VIUdCkZlZjlgM8bQMv0PVqjzR9zEwo1jYZ778JemGVXXzLOexgExleK4zTQk8g7JTC8JD6wVLU0R7reakupZgSJNnKfK3yweu4eYJtjTOVC4z8zZ6fVDxHZjlvxZiHi9yDPkC7N8lms9H9ek1Yf7IVqvAHyGkwAjOrPEkPK2QQFQuPXRqHtd9mt%2BsBgoLqPFBI75AwJ8tHJ5OtuokNZ5K3gcsW8eW1AFcDuHQOtAgJUEJu3mOYULi1ltm4VcX%2BX3Ff9R0FVRW18JEjCjNP%2BdNTB9r5%2BCdG3AgrsMvblyLuhHr5lYpE%2B5OzsWwtVemGEbuIDqlRid1WXg8%2BNn%2F1IZedmzi%2FFWksGiddzPMdBtSgFkPC8W%2FhEo1lOCNtwGDL%2BZJ68uuuVzPSNLyJtYe%2Bh0QGJRvCde9uEtl0hT06t0GM6YsrpihW1TqM4xIYYSbCwbqLM49V0jnmcmcYgh8kEXbYkx9DOMJDC8sMGOqUBOS3apuoS%2BwPBPClG34iJi7q9V2NrBaQjatC3%2Fv2C8dI9QFXgfWmg90H8Mv%2BLMY5VRsX917P6Vmw3Bo6NP7tbvlfMAlUfhnVHLWOqlpgSb0AxD8jw5d%2B8yVjv0iHR9%2F8s1vMSBiOIghfrF6n5rVgX8C6Ysms0r4gCAvVX3kAALd2X7%2B4Vcvavxy9A7gTdH4thHlyYAhuZwdAbxklQc4ZGXgiiNT6b&X-Amz-Signature=0a7029705ae28c5a0733668e61972e46dca3877c9b4ba1f2872c8580a6ce2674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
