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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2TWTSU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC75%2FqgRBO2aTb%2B%2FcqNGelC5MMcgoawurDXS%2B1G2A0oRAiBWmuweZ1qV0Xa2047prlmTjZfo%2FIhdnrVE7eN9OGu0RSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMifVxz0c9r7e7MC7SKtwDiAj5VpKdHJheJn4ShFfmvBa04kqUp7bB7OI7DGeetF%2Bi859YVznxaO9d9yhuLme%2BTSikfRufEsG1St%2BfMSqRWSV%2FEkaz6Giy%2BcbOyW88Sp0EZ4VzftTN6rT%2BS7GvehVO7a2vq8B0XRvh14e5jWfoDSGxBh1MNj2UCcsyGO2LfwD0VK%2FB7tJGM1A6hH0TDeDK2ai%2FhJjO4C%2BD9yKoMAttPHE%2BB6SE2mXDzQVG7rmSDj7QebA3UimQG4IKklmUjoda0Lx1Enn4QYTBlw2%2FJl5e7hkydMD7m3ZjzHsewPj1%2FSBBbtdbhHtI1JSuXXl70WCa9vC8ax1PRrqGtkpZwlaQfIpKVp68%2BiK9hYeVRg0ajKW2y94XNS75Tf3F6%2Bkh6FVy67JuY3uo1OCTlnRoYGgzLomlvsgvaTpltCPZm5ARk%2BBhslRbX03nkhK9p826vQkLpng9MiOOCws3TmPTMv4sKlarUCcs2GyqKCr5U9iQiyWADUcH9pMVFFDxPSYozbX6zwX6LtkUyEsHfzp2VMAL1xnkLtmwNpj%2F%2BHiClV9IhFji5RnEM0o%2FNNSLT6gOWcPuPqA9Fbc0B%2BE1BxVp%2FmjUyLIFfbpMccN4GU5Fhbq9blvlYCwuuPdzsDgn2JMwtMawwQY6pgF8i11UIMcySw91b9pEXlP0I%2B0qEIKv25XQ0STWWllUwF3mlO2m%2BtyieDecOGsrMYh%2FfFlEOvDzFNmqs5mSr%2B5xKK8KjTFpP9iMyFH7Z8eZx2SiyhJCW%2BYjuttgoycCImQIj2xkpTnteTpVLgVcLP30tg9hHbjmrVd2nLrlWuU2M2q5AMUmnxdo3eHf%2BEuAFyhq%2BItIeQ7sFfLe3mLgep35tQzq7gfC&X-Amz-Signature=a5908769f5fad584dec5b2b0c6c13d4d7d922ec43e65c0e60c7a6016aa95cb62&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2TWTSU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC75%2FqgRBO2aTb%2B%2FcqNGelC5MMcgoawurDXS%2B1G2A0oRAiBWmuweZ1qV0Xa2047prlmTjZfo%2FIhdnrVE7eN9OGu0RSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMifVxz0c9r7e7MC7SKtwDiAj5VpKdHJheJn4ShFfmvBa04kqUp7bB7OI7DGeetF%2Bi859YVznxaO9d9yhuLme%2BTSikfRufEsG1St%2BfMSqRWSV%2FEkaz6Giy%2BcbOyW88Sp0EZ4VzftTN6rT%2BS7GvehVO7a2vq8B0XRvh14e5jWfoDSGxBh1MNj2UCcsyGO2LfwD0VK%2FB7tJGM1A6hH0TDeDK2ai%2FhJjO4C%2BD9yKoMAttPHE%2BB6SE2mXDzQVG7rmSDj7QebA3UimQG4IKklmUjoda0Lx1Enn4QYTBlw2%2FJl5e7hkydMD7m3ZjzHsewPj1%2FSBBbtdbhHtI1JSuXXl70WCa9vC8ax1PRrqGtkpZwlaQfIpKVp68%2BiK9hYeVRg0ajKW2y94XNS75Tf3F6%2Bkh6FVy67JuY3uo1OCTlnRoYGgzLomlvsgvaTpltCPZm5ARk%2BBhslRbX03nkhK9p826vQkLpng9MiOOCws3TmPTMv4sKlarUCcs2GyqKCr5U9iQiyWADUcH9pMVFFDxPSYozbX6zwX6LtkUyEsHfzp2VMAL1xnkLtmwNpj%2F%2BHiClV9IhFji5RnEM0o%2FNNSLT6gOWcPuPqA9Fbc0B%2BE1BxVp%2FmjUyLIFfbpMccN4GU5Fhbq9blvlYCwuuPdzsDgn2JMwtMawwQY6pgF8i11UIMcySw91b9pEXlP0I%2B0qEIKv25XQ0STWWllUwF3mlO2m%2BtyieDecOGsrMYh%2FfFlEOvDzFNmqs5mSr%2B5xKK8KjTFpP9iMyFH7Z8eZx2SiyhJCW%2BYjuttgoycCImQIj2xkpTnteTpVLgVcLP30tg9hHbjmrVd2nLrlWuU2M2q5AMUmnxdo3eHf%2BEuAFyhq%2BItIeQ7sFfLe3mLgep35tQzq7gfC&X-Amz-Signature=872615502ce90f179cc4f278fdd64c635101eceb96907cccb1b48027bf1a5d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2TWTSU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC75%2FqgRBO2aTb%2B%2FcqNGelC5MMcgoawurDXS%2B1G2A0oRAiBWmuweZ1qV0Xa2047prlmTjZfo%2FIhdnrVE7eN9OGu0RSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMifVxz0c9r7e7MC7SKtwDiAj5VpKdHJheJn4ShFfmvBa04kqUp7bB7OI7DGeetF%2Bi859YVznxaO9d9yhuLme%2BTSikfRufEsG1St%2BfMSqRWSV%2FEkaz6Giy%2BcbOyW88Sp0EZ4VzftTN6rT%2BS7GvehVO7a2vq8B0XRvh14e5jWfoDSGxBh1MNj2UCcsyGO2LfwD0VK%2FB7tJGM1A6hH0TDeDK2ai%2FhJjO4C%2BD9yKoMAttPHE%2BB6SE2mXDzQVG7rmSDj7QebA3UimQG4IKklmUjoda0Lx1Enn4QYTBlw2%2FJl5e7hkydMD7m3ZjzHsewPj1%2FSBBbtdbhHtI1JSuXXl70WCa9vC8ax1PRrqGtkpZwlaQfIpKVp68%2BiK9hYeVRg0ajKW2y94XNS75Tf3F6%2Bkh6FVy67JuY3uo1OCTlnRoYGgzLomlvsgvaTpltCPZm5ARk%2BBhslRbX03nkhK9p826vQkLpng9MiOOCws3TmPTMv4sKlarUCcs2GyqKCr5U9iQiyWADUcH9pMVFFDxPSYozbX6zwX6LtkUyEsHfzp2VMAL1xnkLtmwNpj%2F%2BHiClV9IhFji5RnEM0o%2FNNSLT6gOWcPuPqA9Fbc0B%2BE1BxVp%2FmjUyLIFfbpMccN4GU5Fhbq9blvlYCwuuPdzsDgn2JMwtMawwQY6pgF8i11UIMcySw91b9pEXlP0I%2B0qEIKv25XQ0STWWllUwF3mlO2m%2BtyieDecOGsrMYh%2FfFlEOvDzFNmqs5mSr%2B5xKK8KjTFpP9iMyFH7Z8eZx2SiyhJCW%2BYjuttgoycCImQIj2xkpTnteTpVLgVcLP30tg9hHbjmrVd2nLrlWuU2M2q5AMUmnxdo3eHf%2BEuAFyhq%2BItIeQ7sFfLe3mLgep35tQzq7gfC&X-Amz-Signature=47587e3e3df27937e2ad1ac4b6b67d1ca2543c259b27157f1226cba533e3e31a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
