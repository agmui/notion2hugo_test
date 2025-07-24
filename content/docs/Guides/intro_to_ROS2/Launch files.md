---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQTHEYK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHKRwwZkQqIdgC8btGByivp0NFsInyVTCXrkiuR4OhFmAiBj4YuoqrVwNSwdCkZlfbTGKjE%2FvjIN4RLPkSyllLJoVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMg2Mmzedq1V0jR56SKtwD%2B14KXCB5e9qSps0Cnt6h93VzRHlEsS9%2BivvvGRgRNOEZ9XpXR9qB8b9ccEmSQj3QUX7qdtMYJrIOZIN5oiNgSoaBQbkDG%2BhqrKTDx6TXfsRKTUdsvmeZL7FlqpQ%2BHfBxIXaOOYBeF%2BjujF%2B1F%2FDQhpvlf%2FiziTW8YyquEfQjj9EaAWthv%2BINpOzSO%2F2qlAYhKHFhPrh75XbM5peuYRZvsa8MgBFltzPD0u9DCl8GA9zh%2FHoR2QPF5zfGr0Qxun0r1Ra2TvkSh5l0rvPoyd9as%2Bjbem11tCw63eAhkyMTeTRXd13n1HyHXTjn3J80Iuq85bJt9WZDEBQMynWyKAYwZab9cGI9tqVyOn8sOJZOkIYX1RvPx1HbhzJUa4D1XyL6dSTQFzxmL1fhUAQ8WKPS%2FgN4eV%2BZiowyVoWhKuw6gVe5ihuVI%2BgH7js0T6CtISMeAzysch6nTdxqIEsjgfgcZ2NHVjxfgQLX%2FE7SjTTTCHZ5YIar6lvKiSV%2BzBgAr0nfoGEyi88K0tyvIi5Hu%2Fk9riRp%2BniFDE4eCFEgQMw41qF4cepF3cEzX02VhCVk8i6lWXwU4Y0AdGFGYX2bF8A0uF8dCnBifxAwERFE3JGfMM%2BDd0tkmXBqy%2F0qRRwwwY%2BKxAY6pgF0KM3eTXc0evs0U10xKMPwBezEuRl%2BW9F%2BsrRguwcrzCa3rEUNTVFZMaqIf%2FR9oj4wZp0nfM8nVyjRSGJhnDwAExqk6Xx0oZ24YRLET7CW%2BbkDRP8oSzz%2FEOyGZzpJdfvHpedrK8zsZLeMIRuz9zM1FLxPbUSz%2BkkfC1KEuAOPFifPSiD6pbToJmOK0Xo2WX%2FKWqbLTESe8uHP6YsBH47PXUbUUYda&X-Amz-Signature=baddd84861cf307676b002d9026379607e23c46225e6f79e3139f3966dd828a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQTHEYK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHKRwwZkQqIdgC8btGByivp0NFsInyVTCXrkiuR4OhFmAiBj4YuoqrVwNSwdCkZlfbTGKjE%2FvjIN4RLPkSyllLJoVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMg2Mmzedq1V0jR56SKtwD%2B14KXCB5e9qSps0Cnt6h93VzRHlEsS9%2BivvvGRgRNOEZ9XpXR9qB8b9ccEmSQj3QUX7qdtMYJrIOZIN5oiNgSoaBQbkDG%2BhqrKTDx6TXfsRKTUdsvmeZL7FlqpQ%2BHfBxIXaOOYBeF%2BjujF%2B1F%2FDQhpvlf%2FiziTW8YyquEfQjj9EaAWthv%2BINpOzSO%2F2qlAYhKHFhPrh75XbM5peuYRZvsa8MgBFltzPD0u9DCl8GA9zh%2FHoR2QPF5zfGr0Qxun0r1Ra2TvkSh5l0rvPoyd9as%2Bjbem11tCw63eAhkyMTeTRXd13n1HyHXTjn3J80Iuq85bJt9WZDEBQMynWyKAYwZab9cGI9tqVyOn8sOJZOkIYX1RvPx1HbhzJUa4D1XyL6dSTQFzxmL1fhUAQ8WKPS%2FgN4eV%2BZiowyVoWhKuw6gVe5ihuVI%2BgH7js0T6CtISMeAzysch6nTdxqIEsjgfgcZ2NHVjxfgQLX%2FE7SjTTTCHZ5YIar6lvKiSV%2BzBgAr0nfoGEyi88K0tyvIi5Hu%2Fk9riRp%2BniFDE4eCFEgQMw41qF4cepF3cEzX02VhCVk8i6lWXwU4Y0AdGFGYX2bF8A0uF8dCnBifxAwERFE3JGfMM%2BDd0tkmXBqy%2F0qRRwwwY%2BKxAY6pgF0KM3eTXc0evs0U10xKMPwBezEuRl%2BW9F%2BsrRguwcrzCa3rEUNTVFZMaqIf%2FR9oj4wZp0nfM8nVyjRSGJhnDwAExqk6Xx0oZ24YRLET7CW%2BbkDRP8oSzz%2FEOyGZzpJdfvHpedrK8zsZLeMIRuz9zM1FLxPbUSz%2BkkfC1KEuAOPFifPSiD6pbToJmOK0Xo2WX%2FKWqbLTESe8uHP6YsBH47PXUbUUYda&X-Amz-Signature=d6b3a25b44667f4bc0606a8ca766147ccdffb42f4e7d46c48b5b3dcd3b7ad60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQTHEYK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHKRwwZkQqIdgC8btGByivp0NFsInyVTCXrkiuR4OhFmAiBj4YuoqrVwNSwdCkZlfbTGKjE%2FvjIN4RLPkSyllLJoVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMg2Mmzedq1V0jR56SKtwD%2B14KXCB5e9qSps0Cnt6h93VzRHlEsS9%2BivvvGRgRNOEZ9XpXR9qB8b9ccEmSQj3QUX7qdtMYJrIOZIN5oiNgSoaBQbkDG%2BhqrKTDx6TXfsRKTUdsvmeZL7FlqpQ%2BHfBxIXaOOYBeF%2BjujF%2B1F%2FDQhpvlf%2FiziTW8YyquEfQjj9EaAWthv%2BINpOzSO%2F2qlAYhKHFhPrh75XbM5peuYRZvsa8MgBFltzPD0u9DCl8GA9zh%2FHoR2QPF5zfGr0Qxun0r1Ra2TvkSh5l0rvPoyd9as%2Bjbem11tCw63eAhkyMTeTRXd13n1HyHXTjn3J80Iuq85bJt9WZDEBQMynWyKAYwZab9cGI9tqVyOn8sOJZOkIYX1RvPx1HbhzJUa4D1XyL6dSTQFzxmL1fhUAQ8WKPS%2FgN4eV%2BZiowyVoWhKuw6gVe5ihuVI%2BgH7js0T6CtISMeAzysch6nTdxqIEsjgfgcZ2NHVjxfgQLX%2FE7SjTTTCHZ5YIar6lvKiSV%2BzBgAr0nfoGEyi88K0tyvIi5Hu%2Fk9riRp%2BniFDE4eCFEgQMw41qF4cepF3cEzX02VhCVk8i6lWXwU4Y0AdGFGYX2bF8A0uF8dCnBifxAwERFE3JGfMM%2BDd0tkmXBqy%2F0qRRwwwY%2BKxAY6pgF0KM3eTXc0evs0U10xKMPwBezEuRl%2BW9F%2BsrRguwcrzCa3rEUNTVFZMaqIf%2FR9oj4wZp0nfM8nVyjRSGJhnDwAExqk6Xx0oZ24YRLET7CW%2BbkDRP8oSzz%2FEOyGZzpJdfvHpedrK8zsZLeMIRuz9zM1FLxPbUSz%2BkkfC1KEuAOPFifPSiD6pbToJmOK0Xo2WX%2FKWqbLTESe8uHP6YsBH47PXUbUUYda&X-Amz-Signature=8175bab9849538a2795fc3bd6a4c638f12e55340a1b5854ff9482a11f54d7b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
