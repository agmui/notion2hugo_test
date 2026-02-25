---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOLEZ6W%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaYlM%2FYI1CTnDOxUhhhD9YtFIxoCR%2FayQpozSqcN3ulwIgCWtR2MUfcs8zgGgR8gMaKonFDKC0g2SqZmJ6Ovb1%2B8gq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKXkt7kt0zxTd45oEircA4u3Rh2DV9f8hdhK74%2B0067ntdCE9lV%2B1B%2BX17%2B0mYF6nWpmTLvWXYMBlBoLXR3siz2jebVwoU9wGg5CudgOzsY2YjDmZMV%2BKzdLRtncg6NZ83n6cagJtbn1shiKxL2WXKmiE6e7dr0tUMV%2BSUlMkKtOGPNjP3zOA8QMCLL59Pxwzkyrte9wtcEt%2FYuHLWwEqUjE8z8qyT%2B1Og7XW9QYTNcPNo66Vc8Cj1gEvr7FYDwNRtoCZ8rb%2FmjYfwFEGRh5jPrAHztbrSngdW%2B7vm%2FBss770itIoYKCjW4SUYF8%2FClEAXtypDmiFXTF9h%2BCfz0o48txE%2BKQB73LOmzfn%2FmHR4z2%2B2LvBoonyVCYY13WuV8iuIRRlsu0HraUZWL%2F63eMZ2MztHaJRFSmYnpmOY8WdEL87rG%2BCYByn2qw%2FCT9V3BfV7XFyuPefoNOouqPmrCprMsX4DphpiHvze8%2FOTSSg3Lhrm%2Fvny3ii%2FBvq59XgoYDF8ODxht%2BPsrBVsuqQk6yANP1tq8sP52wSPV17aqkqMxs8uUJ1Oe6SAXWGTgSwO5DfakhwwOMzg%2BhIjIEkAdmYCq1%2FS6xqtFpPBx7ZViimRTpCMzEuiJN4Oy9OHikOvQ5OZwrHgzbvNOcNMxDMKaE%2BcwGOqUBSzTkmm4NrIwQ2wGlfzQzHvM0Ay7W0g%2B1QvpV7G3hEog0j%2FBNtlrkXEplVgA6XlYujBaIMxwRuj7pUYTBSr7dh330prmWt2rMhbmsLYbAPRnofABHq2SkI0xtPEtI75urk2gSrBvcRqS6Kzw%2FkzIUqNN1Pm6xW3ArxNrUyaua3%2BYVT8Z4l1APW4vdo1h2%2FY1dVGj19jFfJu2gdp%2Blk04lY3BM%2BovB&X-Amz-Signature=701094d4a6f98f828b930d63050eb6daca1bd6ecee74ebf4d051cd883be4232a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOLEZ6W%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaYlM%2FYI1CTnDOxUhhhD9YtFIxoCR%2FayQpozSqcN3ulwIgCWtR2MUfcs8zgGgR8gMaKonFDKC0g2SqZmJ6Ovb1%2B8gq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKXkt7kt0zxTd45oEircA4u3Rh2DV9f8hdhK74%2B0067ntdCE9lV%2B1B%2BX17%2B0mYF6nWpmTLvWXYMBlBoLXR3siz2jebVwoU9wGg5CudgOzsY2YjDmZMV%2BKzdLRtncg6NZ83n6cagJtbn1shiKxL2WXKmiE6e7dr0tUMV%2BSUlMkKtOGPNjP3zOA8QMCLL59Pxwzkyrte9wtcEt%2FYuHLWwEqUjE8z8qyT%2B1Og7XW9QYTNcPNo66Vc8Cj1gEvr7FYDwNRtoCZ8rb%2FmjYfwFEGRh5jPrAHztbrSngdW%2B7vm%2FBss770itIoYKCjW4SUYF8%2FClEAXtypDmiFXTF9h%2BCfz0o48txE%2BKQB73LOmzfn%2FmHR4z2%2B2LvBoonyVCYY13WuV8iuIRRlsu0HraUZWL%2F63eMZ2MztHaJRFSmYnpmOY8WdEL87rG%2BCYByn2qw%2FCT9V3BfV7XFyuPefoNOouqPmrCprMsX4DphpiHvze8%2FOTSSg3Lhrm%2Fvny3ii%2FBvq59XgoYDF8ODxht%2BPsrBVsuqQk6yANP1tq8sP52wSPV17aqkqMxs8uUJ1Oe6SAXWGTgSwO5DfakhwwOMzg%2BhIjIEkAdmYCq1%2FS6xqtFpPBx7ZViimRTpCMzEuiJN4Oy9OHikOvQ5OZwrHgzbvNOcNMxDMKaE%2BcwGOqUBSzTkmm4NrIwQ2wGlfzQzHvM0Ay7W0g%2B1QvpV7G3hEog0j%2FBNtlrkXEplVgA6XlYujBaIMxwRuj7pUYTBSr7dh330prmWt2rMhbmsLYbAPRnofABHq2SkI0xtPEtI75urk2gSrBvcRqS6Kzw%2FkzIUqNN1Pm6xW3ArxNrUyaua3%2BYVT8Z4l1APW4vdo1h2%2FY1dVGj19jFfJu2gdp%2Blk04lY3BM%2BovB&X-Amz-Signature=598b0c7a2f61d13d3753ed3c80cd57c427c0ceb6bd26153deff22151dd2a8b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOLEZ6W%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaYlM%2FYI1CTnDOxUhhhD9YtFIxoCR%2FayQpozSqcN3ulwIgCWtR2MUfcs8zgGgR8gMaKonFDKC0g2SqZmJ6Ovb1%2B8gq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKXkt7kt0zxTd45oEircA4u3Rh2DV9f8hdhK74%2B0067ntdCE9lV%2B1B%2BX17%2B0mYF6nWpmTLvWXYMBlBoLXR3siz2jebVwoU9wGg5CudgOzsY2YjDmZMV%2BKzdLRtncg6NZ83n6cagJtbn1shiKxL2WXKmiE6e7dr0tUMV%2BSUlMkKtOGPNjP3zOA8QMCLL59Pxwzkyrte9wtcEt%2FYuHLWwEqUjE8z8qyT%2B1Og7XW9QYTNcPNo66Vc8Cj1gEvr7FYDwNRtoCZ8rb%2FmjYfwFEGRh5jPrAHztbrSngdW%2B7vm%2FBss770itIoYKCjW4SUYF8%2FClEAXtypDmiFXTF9h%2BCfz0o48txE%2BKQB73LOmzfn%2FmHR4z2%2B2LvBoonyVCYY13WuV8iuIRRlsu0HraUZWL%2F63eMZ2MztHaJRFSmYnpmOY8WdEL87rG%2BCYByn2qw%2FCT9V3BfV7XFyuPefoNOouqPmrCprMsX4DphpiHvze8%2FOTSSg3Lhrm%2Fvny3ii%2FBvq59XgoYDF8ODxht%2BPsrBVsuqQk6yANP1tq8sP52wSPV17aqkqMxs8uUJ1Oe6SAXWGTgSwO5DfakhwwOMzg%2BhIjIEkAdmYCq1%2FS6xqtFpPBx7ZViimRTpCMzEuiJN4Oy9OHikOvQ5OZwrHgzbvNOcNMxDMKaE%2BcwGOqUBSzTkmm4NrIwQ2wGlfzQzHvM0Ay7W0g%2B1QvpV7G3hEog0j%2FBNtlrkXEplVgA6XlYujBaIMxwRuj7pUYTBSr7dh330prmWt2rMhbmsLYbAPRnofABHq2SkI0xtPEtI75urk2gSrBvcRqS6Kzw%2FkzIUqNN1Pm6xW3ArxNrUyaua3%2BYVT8Z4l1APW4vdo1h2%2FY1dVGj19jFfJu2gdp%2Blk04lY3BM%2BovB&X-Amz-Signature=83819aa99bfdde5bb4b48fa04885c7f7cd9b0a0c2f829c6d7a93c10239359ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
