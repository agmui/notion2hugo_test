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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRMMAIT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGIRrFP8ftVTvZM8HJuxjPdUP4HU7zAADm%2Fzvz5xESfGAiEAl7JejcS5N7xtdE2HeUbehCneble3qe%2BPfbRK6dgu6e4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBPZXGer4karRI0bnCrcA2zZk8Dn8ywKauf3%2BH%2FPkduU0aRRmn1iHneKyYBLyP%2FXCwYhEjveoM7%2F0Fx%2FiY7qrd3DMziYX0JiAqnybsf%2BJR3rRZJyfHOg8h%2Fm%2FDYLSSwx6ZROgoZBMpgEaxynrhbvClFSlBraa%2F4sxrsJEtXNuhNOB9rkdYpKo4yMIx%2FpMmwR5WmxF23xUDVN%2B0auFX%2BipUFKskb9x5YyOHh2q90LXsTLBTyA6%2FIwaGi3s0TJScQE7HUM8sQu%2FzT4TenxlZyj7VqTXPBQPSjmp5gbPlFZ8uK767tuLJ5NYmg7SAA3X5R8IOty9PVey%2FpMxLhQ3cBZz8ePbu1arPOb6YGst3BeMRNhwefdhTKh2lqfl5DLSaetiVu%2BoXQMEfChra6SyKc95P00f9E%2FpAlu9imDLMeqW9amJuJwtXz80TY35R8ifEZMWMd%2BVL7%2ByqGeEuNgd2LJsmNRqx2PczW06GLqaI7p7WyTfFIzy0FIQDZYNCs2ol6J6T1do59zgUkNdrfIu1odtuAlA7%2Fbo%2FmT9L5lWEg986fS8P6eNo1eUlR96YZe2bvmcu6GbguMjLeMDQIPQaki3evbSpJp9W70eV4xO4SuvX7wKf5GJu7JVC2HS8Rj2YDiHAm3ALamV4mXRiOqMMiB2MMGOqUBkvy%2F%2FX7%2B7rtDcnWt2x2zytPjmET0Lrih%2B8U8R2GQZ2NOBYsbnomFp%2FaWEKKkI53FsaU%2F6dFrwhZYKfZDAPclQfrgOmawmOOGa0UNPoGZL8rebzfnd5EQX6F4DgnnJ%2FRO5lPJMZlr4XHxt4SWCmbg4kiw4chvKuXJvhhVZxUvum6UEofEDQtz9FAJ9onM5UkvvIjbGZSbVdRb7uv61QSLiGElUUOu&X-Amz-Signature=6283bb13bdbbf85eb1fa2afa752752246e4351cccad871bb9665087c23fcf54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRMMAIT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGIRrFP8ftVTvZM8HJuxjPdUP4HU7zAADm%2Fzvz5xESfGAiEAl7JejcS5N7xtdE2HeUbehCneble3qe%2BPfbRK6dgu6e4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBPZXGer4karRI0bnCrcA2zZk8Dn8ywKauf3%2BH%2FPkduU0aRRmn1iHneKyYBLyP%2FXCwYhEjveoM7%2F0Fx%2FiY7qrd3DMziYX0JiAqnybsf%2BJR3rRZJyfHOg8h%2Fm%2FDYLSSwx6ZROgoZBMpgEaxynrhbvClFSlBraa%2F4sxrsJEtXNuhNOB9rkdYpKo4yMIx%2FpMmwR5WmxF23xUDVN%2B0auFX%2BipUFKskb9x5YyOHh2q90LXsTLBTyA6%2FIwaGi3s0TJScQE7HUM8sQu%2FzT4TenxlZyj7VqTXPBQPSjmp5gbPlFZ8uK767tuLJ5NYmg7SAA3X5R8IOty9PVey%2FpMxLhQ3cBZz8ePbu1arPOb6YGst3BeMRNhwefdhTKh2lqfl5DLSaetiVu%2BoXQMEfChra6SyKc95P00f9E%2FpAlu9imDLMeqW9amJuJwtXz80TY35R8ifEZMWMd%2BVL7%2ByqGeEuNgd2LJsmNRqx2PczW06GLqaI7p7WyTfFIzy0FIQDZYNCs2ol6J6T1do59zgUkNdrfIu1odtuAlA7%2Fbo%2FmT9L5lWEg986fS8P6eNo1eUlR96YZe2bvmcu6GbguMjLeMDQIPQaki3evbSpJp9W70eV4xO4SuvX7wKf5GJu7JVC2HS8Rj2YDiHAm3ALamV4mXRiOqMMiB2MMGOqUBkvy%2F%2FX7%2B7rtDcnWt2x2zytPjmET0Lrih%2B8U8R2GQZ2NOBYsbnomFp%2FaWEKKkI53FsaU%2F6dFrwhZYKfZDAPclQfrgOmawmOOGa0UNPoGZL8rebzfnd5EQX6F4DgnnJ%2FRO5lPJMZlr4XHxt4SWCmbg4kiw4chvKuXJvhhVZxUvum6UEofEDQtz9FAJ9onM5UkvvIjbGZSbVdRb7uv61QSLiGElUUOu&X-Amz-Signature=5ba5b0b10ec6a751cf2b552575b83b083ddfc2547785e1f0ce1e70d555d62a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRMMAIT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGIRrFP8ftVTvZM8HJuxjPdUP4HU7zAADm%2Fzvz5xESfGAiEAl7JejcS5N7xtdE2HeUbehCneble3qe%2BPfbRK6dgu6e4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBPZXGer4karRI0bnCrcA2zZk8Dn8ywKauf3%2BH%2FPkduU0aRRmn1iHneKyYBLyP%2FXCwYhEjveoM7%2F0Fx%2FiY7qrd3DMziYX0JiAqnybsf%2BJR3rRZJyfHOg8h%2Fm%2FDYLSSwx6ZROgoZBMpgEaxynrhbvClFSlBraa%2F4sxrsJEtXNuhNOB9rkdYpKo4yMIx%2FpMmwR5WmxF23xUDVN%2B0auFX%2BipUFKskb9x5YyOHh2q90LXsTLBTyA6%2FIwaGi3s0TJScQE7HUM8sQu%2FzT4TenxlZyj7VqTXPBQPSjmp5gbPlFZ8uK767tuLJ5NYmg7SAA3X5R8IOty9PVey%2FpMxLhQ3cBZz8ePbu1arPOb6YGst3BeMRNhwefdhTKh2lqfl5DLSaetiVu%2BoXQMEfChra6SyKc95P00f9E%2FpAlu9imDLMeqW9amJuJwtXz80TY35R8ifEZMWMd%2BVL7%2ByqGeEuNgd2LJsmNRqx2PczW06GLqaI7p7WyTfFIzy0FIQDZYNCs2ol6J6T1do59zgUkNdrfIu1odtuAlA7%2Fbo%2FmT9L5lWEg986fS8P6eNo1eUlR96YZe2bvmcu6GbguMjLeMDQIPQaki3evbSpJp9W70eV4xO4SuvX7wKf5GJu7JVC2HS8Rj2YDiHAm3ALamV4mXRiOqMMiB2MMGOqUBkvy%2F%2FX7%2B7rtDcnWt2x2zytPjmET0Lrih%2B8U8R2GQZ2NOBYsbnomFp%2FaWEKKkI53FsaU%2F6dFrwhZYKfZDAPclQfrgOmawmOOGa0UNPoGZL8rebzfnd5EQX6F4DgnnJ%2FRO5lPJMZlr4XHxt4SWCmbg4kiw4chvKuXJvhhVZxUvum6UEofEDQtz9FAJ9onM5UkvvIjbGZSbVdRb7uv61QSLiGElUUOu&X-Amz-Signature=759ccd73daac1d91010286b6c92d788e2d530d1a29696e703359fb9b7055ce25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
