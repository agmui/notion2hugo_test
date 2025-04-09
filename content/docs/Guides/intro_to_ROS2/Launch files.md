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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFURRSC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD7KH3niAR5yEXcsvQrHNm%2Fg%2F%2FAeAVLkPUXGsU2j9KhVQIgAsKJm9AFNuzkejWsatqiGKXhymjyUl1xbeDPAn2apPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F5RUNqe4jZVwSsvCrcA7hdTWg8hZABCo4fZY9%2BqvyY7xvvFtRUgcoaIlBErFOs3zvf9IEQYrD8ACf5Pu84ThSnXBVxJ%2FvLcbyJ893L5Zp8F4PBaCvaYTt4b4jVZWpc4MhGDMn5OLuXW8I%2FCaWdeM1sQtzDw0KhPhgnyWf4QIYLsuEZVy77ypU66WC5CCg4YKRXHEo4HGvgjG4xi5qAbFHDovmdfBPpaYR6wQBI6YvzToUCdP1Ue2HHYkW%2BjhnTN5UHQfpZm08ghSUmlR6cXVyv9uQegzNO7khjFClHEJG4RCpopWCAqZ21zXDOjVzIJKiRnK95qm1lJk6w2G2%2F6aOP23%2FSlVWe2l7JzM%2BBegHvD%2B3JPQc%2FZnV1ZwQsMW1SHvVrRw6k83COcyPF2r4Gr9t%2FKNaomB0gX75Yz1Gr13rE%2FrQZRerl9JGDHOXdT31JFpCTAiXpr4rcl0gXXyQQw2pRV0l0iTADYJITJ8JnlQdc99j6dEpkBrih%2FN9xWzTgnNpFRXlOjUxoEGoRYaa64Lf5mZlF7e0pLfFO%2FQI%2F9HbHUT9M%2FQivZvo9PYifBKbrCK7F8Lg%2Fc194LgtTnEbb1wTBtXC1Qsc4YzcJaxW%2F9VV7n8avVEYHuuGDBf9gH6jsimnmysPl23GvIx4UMMDJ2r8GOqUBU7feGLPouojsN%2BhQBrghdbeLLZXzV4nPzjN0tPt0FJVX6R1mL3VRughf3s5q1ixMMRIA4PeGusjc2sTqcBzut402uQMYKM5NR48x%2BSqf3dM9JV4PP3f1YpXHMEXYv6LmWz3%2B6pWGXtRfi5%2FAzWWPWxzgVTMXCvSh8F0XpFbcKcEJrN2AhZ77V2TLsYZX%2F264RCOwn9CdkhTpmkQ1cHSGeQv5kpjx&X-Amz-Signature=0e0b8d74e9b5a086095b0fb0d435e8875c20035658587ba9b07230e41189bb47&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFURRSC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD7KH3niAR5yEXcsvQrHNm%2Fg%2F%2FAeAVLkPUXGsU2j9KhVQIgAsKJm9AFNuzkejWsatqiGKXhymjyUl1xbeDPAn2apPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F5RUNqe4jZVwSsvCrcA7hdTWg8hZABCo4fZY9%2BqvyY7xvvFtRUgcoaIlBErFOs3zvf9IEQYrD8ACf5Pu84ThSnXBVxJ%2FvLcbyJ893L5Zp8F4PBaCvaYTt4b4jVZWpc4MhGDMn5OLuXW8I%2FCaWdeM1sQtzDw0KhPhgnyWf4QIYLsuEZVy77ypU66WC5CCg4YKRXHEo4HGvgjG4xi5qAbFHDovmdfBPpaYR6wQBI6YvzToUCdP1Ue2HHYkW%2BjhnTN5UHQfpZm08ghSUmlR6cXVyv9uQegzNO7khjFClHEJG4RCpopWCAqZ21zXDOjVzIJKiRnK95qm1lJk6w2G2%2F6aOP23%2FSlVWe2l7JzM%2BBegHvD%2B3JPQc%2FZnV1ZwQsMW1SHvVrRw6k83COcyPF2r4Gr9t%2FKNaomB0gX75Yz1Gr13rE%2FrQZRerl9JGDHOXdT31JFpCTAiXpr4rcl0gXXyQQw2pRV0l0iTADYJITJ8JnlQdc99j6dEpkBrih%2FN9xWzTgnNpFRXlOjUxoEGoRYaa64Lf5mZlF7e0pLfFO%2FQI%2F9HbHUT9M%2FQivZvo9PYifBKbrCK7F8Lg%2Fc194LgtTnEbb1wTBtXC1Qsc4YzcJaxW%2F9VV7n8avVEYHuuGDBf9gH6jsimnmysPl23GvIx4UMMDJ2r8GOqUBU7feGLPouojsN%2BhQBrghdbeLLZXzV4nPzjN0tPt0FJVX6R1mL3VRughf3s5q1ixMMRIA4PeGusjc2sTqcBzut402uQMYKM5NR48x%2BSqf3dM9JV4PP3f1YpXHMEXYv6LmWz3%2B6pWGXtRfi5%2FAzWWPWxzgVTMXCvSh8F0XpFbcKcEJrN2AhZ77V2TLsYZX%2F264RCOwn9CdkhTpmkQ1cHSGeQv5kpjx&X-Amz-Signature=505f5c60ba6c90220bd577e746c4f8c9892c76974914f3ed7dd168366865752d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFURRSC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD7KH3niAR5yEXcsvQrHNm%2Fg%2F%2FAeAVLkPUXGsU2j9KhVQIgAsKJm9AFNuzkejWsatqiGKXhymjyUl1xbeDPAn2apPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F5RUNqe4jZVwSsvCrcA7hdTWg8hZABCo4fZY9%2BqvyY7xvvFtRUgcoaIlBErFOs3zvf9IEQYrD8ACf5Pu84ThSnXBVxJ%2FvLcbyJ893L5Zp8F4PBaCvaYTt4b4jVZWpc4MhGDMn5OLuXW8I%2FCaWdeM1sQtzDw0KhPhgnyWf4QIYLsuEZVy77ypU66WC5CCg4YKRXHEo4HGvgjG4xi5qAbFHDovmdfBPpaYR6wQBI6YvzToUCdP1Ue2HHYkW%2BjhnTN5UHQfpZm08ghSUmlR6cXVyv9uQegzNO7khjFClHEJG4RCpopWCAqZ21zXDOjVzIJKiRnK95qm1lJk6w2G2%2F6aOP23%2FSlVWe2l7JzM%2BBegHvD%2B3JPQc%2FZnV1ZwQsMW1SHvVrRw6k83COcyPF2r4Gr9t%2FKNaomB0gX75Yz1Gr13rE%2FrQZRerl9JGDHOXdT31JFpCTAiXpr4rcl0gXXyQQw2pRV0l0iTADYJITJ8JnlQdc99j6dEpkBrih%2FN9xWzTgnNpFRXlOjUxoEGoRYaa64Lf5mZlF7e0pLfFO%2FQI%2F9HbHUT9M%2FQivZvo9PYifBKbrCK7F8Lg%2Fc194LgtTnEbb1wTBtXC1Qsc4YzcJaxW%2F9VV7n8avVEYHuuGDBf9gH6jsimnmysPl23GvIx4UMMDJ2r8GOqUBU7feGLPouojsN%2BhQBrghdbeLLZXzV4nPzjN0tPt0FJVX6R1mL3VRughf3s5q1ixMMRIA4PeGusjc2sTqcBzut402uQMYKM5NR48x%2BSqf3dM9JV4PP3f1YpXHMEXYv6LmWz3%2B6pWGXtRfi5%2FAzWWPWxzgVTMXCvSh8F0XpFbcKcEJrN2AhZ77V2TLsYZX%2F264RCOwn9CdkhTpmkQ1cHSGeQv5kpjx&X-Amz-Signature=f4cb1ac89f06c8513f6cbbd7148e17cc7414add5e0658ad1f6b8800a55c1c85b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
