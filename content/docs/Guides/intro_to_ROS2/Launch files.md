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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BSNF3E%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8O%2FH22jaV5f3zS6XabGi3BWxE2zGMmEM9cNgicQ%2BY%2BAiEAzCtS9VZ6JH1YngUYveS%2FyvyDdOhxanige7n1fPnOulcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTRQt2eqPhDl1flQircA5OHQ1yMVuEvEibM5UCN6G4brEeH3dhS9gJ1%2FAJ0y3fFzttmnp5LKeZ0t7RFWGgpMPZ56tol2v39QX7hwjFKKJuAtKeedzNAgl3SvMj7iWSqdUMC%2Bt%2Fpk64s2j0jBdL7U8%2BmjVZOhprl%2BXJOGfcqGD2ejmUOLnKEz8WOoJBAmEAi1ZQ%2FIpA25%2FK3BS0E1SqjGqhuw%2Fx9lQl%2B7PRiRxwTsKiVNQ1GELozwn2WnCKKsD0ev35QDVt4QMTUfj5C6rkI1MCWPfvo1LmN3MYsFadn3VAIA8MleJt1Rhf2a%2FW4VuLBUnUqOwk9QXeybeGzAtGPR60uUTCkyMGg1mV3uBtV05ciz6V36khFlS3Mp%2Ffi8Tp6E8l%2BwclUhtl230rCTSgU%2FbyeQj46c33eKLwpkoZe%2BXN0EZeZCi1nFZKKUUfzMWZo2ZHKbWyf%2BO3krWEhWya9MnVHVSPKGzWE6x36ivb0TrvZjVzsRzNQSaW4jeqa%2FSdf6PuXt%2FdoDN7HenVkGu0p%2FDJBBMIJOA%2B99WlmyWIQ5eN7IHBz2H5NjZ9GHgbHAnMmJ6vNr4CjNVKQnRPlDVj2woEZeSeJNEy1ARHWycZy%2Fv1td6buA5%2FT6vUIeZVurvdPboU%2FqI0pYm%2BAUlscMOrir8EGOqUBbCLSDWrsgXdWnE8u%2Fv7Cpuj8T2WznDrTceDf4v1fimt0cGDva5hgOtVglOH1B1MRrK%2Fwr7iyEq7CoLAgfvHo6iBIF0qNHsRcdfwN%2BrsAG7IG4HVkisbYk0tJe16oYyeBTIASmvkehJGIpvi0116VO0sJ54rUEyd9%2FmIa4aJ3k1DH2g9Er8k%2BW%2BQOJ4erhg99bmh92Tw2sdXtrS2FEtIY3rblIQM0&X-Amz-Signature=b4e8051041350a79e05bb6464e81700d4a3cf73e6dec96e33cbf37ff4101b8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BSNF3E%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8O%2FH22jaV5f3zS6XabGi3BWxE2zGMmEM9cNgicQ%2BY%2BAiEAzCtS9VZ6JH1YngUYveS%2FyvyDdOhxanige7n1fPnOulcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTRQt2eqPhDl1flQircA5OHQ1yMVuEvEibM5UCN6G4brEeH3dhS9gJ1%2FAJ0y3fFzttmnp5LKeZ0t7RFWGgpMPZ56tol2v39QX7hwjFKKJuAtKeedzNAgl3SvMj7iWSqdUMC%2Bt%2Fpk64s2j0jBdL7U8%2BmjVZOhprl%2BXJOGfcqGD2ejmUOLnKEz8WOoJBAmEAi1ZQ%2FIpA25%2FK3BS0E1SqjGqhuw%2Fx9lQl%2B7PRiRxwTsKiVNQ1GELozwn2WnCKKsD0ev35QDVt4QMTUfj5C6rkI1MCWPfvo1LmN3MYsFadn3VAIA8MleJt1Rhf2a%2FW4VuLBUnUqOwk9QXeybeGzAtGPR60uUTCkyMGg1mV3uBtV05ciz6V36khFlS3Mp%2Ffi8Tp6E8l%2BwclUhtl230rCTSgU%2FbyeQj46c33eKLwpkoZe%2BXN0EZeZCi1nFZKKUUfzMWZo2ZHKbWyf%2BO3krWEhWya9MnVHVSPKGzWE6x36ivb0TrvZjVzsRzNQSaW4jeqa%2FSdf6PuXt%2FdoDN7HenVkGu0p%2FDJBBMIJOA%2B99WlmyWIQ5eN7IHBz2H5NjZ9GHgbHAnMmJ6vNr4CjNVKQnRPlDVj2woEZeSeJNEy1ARHWycZy%2Fv1td6buA5%2FT6vUIeZVurvdPboU%2FqI0pYm%2BAUlscMOrir8EGOqUBbCLSDWrsgXdWnE8u%2Fv7Cpuj8T2WznDrTceDf4v1fimt0cGDva5hgOtVglOH1B1MRrK%2Fwr7iyEq7CoLAgfvHo6iBIF0qNHsRcdfwN%2BrsAG7IG4HVkisbYk0tJe16oYyeBTIASmvkehJGIpvi0116VO0sJ54rUEyd9%2FmIa4aJ3k1DH2g9Er8k%2BW%2BQOJ4erhg99bmh92Tw2sdXtrS2FEtIY3rblIQM0&X-Amz-Signature=b9ba371d436466129708aa254fe0bb636c64543923be7efde6d5344dd4946e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BSNF3E%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8O%2FH22jaV5f3zS6XabGi3BWxE2zGMmEM9cNgicQ%2BY%2BAiEAzCtS9VZ6JH1YngUYveS%2FyvyDdOhxanige7n1fPnOulcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTRQt2eqPhDl1flQircA5OHQ1yMVuEvEibM5UCN6G4brEeH3dhS9gJ1%2FAJ0y3fFzttmnp5LKeZ0t7RFWGgpMPZ56tol2v39QX7hwjFKKJuAtKeedzNAgl3SvMj7iWSqdUMC%2Bt%2Fpk64s2j0jBdL7U8%2BmjVZOhprl%2BXJOGfcqGD2ejmUOLnKEz8WOoJBAmEAi1ZQ%2FIpA25%2FK3BS0E1SqjGqhuw%2Fx9lQl%2B7PRiRxwTsKiVNQ1GELozwn2WnCKKsD0ev35QDVt4QMTUfj5C6rkI1MCWPfvo1LmN3MYsFadn3VAIA8MleJt1Rhf2a%2FW4VuLBUnUqOwk9QXeybeGzAtGPR60uUTCkyMGg1mV3uBtV05ciz6V36khFlS3Mp%2Ffi8Tp6E8l%2BwclUhtl230rCTSgU%2FbyeQj46c33eKLwpkoZe%2BXN0EZeZCi1nFZKKUUfzMWZo2ZHKbWyf%2BO3krWEhWya9MnVHVSPKGzWE6x36ivb0TrvZjVzsRzNQSaW4jeqa%2FSdf6PuXt%2FdoDN7HenVkGu0p%2FDJBBMIJOA%2B99WlmyWIQ5eN7IHBz2H5NjZ9GHgbHAnMmJ6vNr4CjNVKQnRPlDVj2woEZeSeJNEy1ARHWycZy%2Fv1td6buA5%2FT6vUIeZVurvdPboU%2FqI0pYm%2BAUlscMOrir8EGOqUBbCLSDWrsgXdWnE8u%2Fv7Cpuj8T2WznDrTceDf4v1fimt0cGDva5hgOtVglOH1B1MRrK%2Fwr7iyEq7CoLAgfvHo6iBIF0qNHsRcdfwN%2BrsAG7IG4HVkisbYk0tJe16oYyeBTIASmvkehJGIpvi0116VO0sJ54rUEyd9%2FmIa4aJ3k1DH2g9Er8k%2BW%2BQOJ4erhg99bmh92Tw2sdXtrS2FEtIY3rblIQM0&X-Amz-Signature=2a4636a82ca2ad60cfb43208b3dd4d586345e6192bfc97861c39bef1214b22dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
